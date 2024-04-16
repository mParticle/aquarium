/* eslint-disable @typescript-eslint/no-extraneous-class,no-unused-vars,@typescript-eslint/no-unused-vars */
import { type Sync } from 'factory.ts'
import { faker } from '@faker-js/faker'
import * as Cookies from './Cookies'
import cloneDeep from 'lodash/cloneDeep'

export const USER_PREFERENCE_SCOPE_SEPARATOR = '-'
export const UserPreferenceGlobalScope = 'global' as const

type UserPreferenceGlobalScopeType = `global`
type UserPreferenceLevelOneScopeType = `${number}` // Any string that can be coerced into a number
type UserPreferenceLevelTwoScopeType = `${number}-${number}`
type UserPreferenceLevelThreeScopeType = `${number}-${number}-${number}`

export type UserPreferenceScope =
  | UserPreferenceLevelOneScopeType
  | UserPreferenceLevelTwoScopeType
  | UserPreferenceLevelThreeScopeType
  | UserPreferenceGlobalScopeType

export interface UserPreference {
  optedIn: boolean
}

export enum UserPreferenceScopeType {
  Global,
  LevelOneScope,
  LevelTwoScope,
  LevelThreeScope,
}

export interface UserPreferenceDefinition {
  isOptedInByDefault: boolean
  allowedScope: UserPreferenceScopeType
}

export type UserPreferenceDefinitions<UserPreferenceId extends PropertyKey> = {
  [Id in UserPreferenceId]?: UserPreferenceDefinition
}

export type UserPreferences<UserPreferenceId extends PropertyKey> = {
  [K in UserPreferenceScope]?: { [Id in UserPreferenceId]: UserPreference }
}

export type CompositeUserPreferences<UserPreferenceId extends PropertyKey> = {
  [Id in UserPreferenceId]: UserPreference
}

export class CompositeUserPreferencesService<TPreferenceIds extends PropertyKey> {
  public getScopedUserPreferences(
    storedPreferences: UserPreferences<TPreferenceIds>,
    currentScope: UserPreferenceScope,
    definitions: UserPreferenceDefinitions<TPreferenceIds>,
  ): CompositeUserPreferences<TPreferenceIds> {
    const entriesByIdAndUserPreference = Object.entries(definitions).map<[TPreferenceIds, UserPreference]>(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      this.createUserPreferenceEntryFromDefinition.bind(this, storedPreferences, currentScope),
    )

    const compositeUserPreferences = this.createCompositePreferencesFromEntries(entriesByIdAndUserPreference)

    return compositeUserPreferences
  }

  public getUpdatedUserPreferenceStorageObject(
    preferenceId: TPreferenceIds,
    isOptedIn: boolean,
    currentScope: UserPreferenceScope,
    currentPreferences: UserPreferences<TPreferenceIds>,
    allowedScope: UserPreferenceScopeType,
  ): UserPreferences<TPreferenceIds> {
    const userPreferencesToUpdate = currentPreferences ? cloneDeep(currentPreferences) : {}

    const effectiveScope = this.getEffectiveScope(currentScope, allowedScope)

    const scopedUserPreferences = userPreferencesToUpdate[effectiveScope] ?? {}

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    scopedUserPreferences[preferenceId] = { optedIn: isOptedIn }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    userPreferencesToUpdate[effectiveScope] = scopedUserPreferences

    return userPreferencesToUpdate
  }

  private createUserPreferenceEntryFromDefinition(
    storedPreferences: UserPreferences<TPreferenceIds>,
    currentScope: UserPreferenceScope,
    [definedUserPreferenceId, definition]: [TPreferenceIds, UserPreferenceDefinition],
  ): [TPreferenceIds, UserPreference] {
    if (!storedPreferences) {
      const userPreferenceDefault = { optedIn: definition.isOptedInByDefault }
      return this.createPreferenceEntry(definedUserPreferenceId, userPreferenceDefault)
    }

    const { allowedScope } = definition

    const effectiveScope = this.getEffectiveScope(currentScope, allowedScope)

    const scopedUserPreferences = storedPreferences[effectiveScope]

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const userPreferenceForCurrentDefinition: UserPreference = scopedUserPreferences?.[definedUserPreferenceId]

    const optedIn = userPreferenceForCurrentDefinition?.optedIn ?? definition.isOptedInByDefault
    const userPreference = { optedIn }
    return this.createPreferenceEntry(definedUserPreferenceId, userPreference)
  }

  private getEffectiveScope(
    currentScope: UserPreferenceScope,
    allowedScope: UserPreferenceScopeType,
  ): UserPreferenceScope {
    if (allowedScope === null) throw new Error('ArgumentError | An allowed scope must be provided.')

    if (allowedScope === UserPreferenceScopeType.Global) return UserPreferenceGlobalScope

    let scopeLength = 0
    switch (allowedScope) {
      case UserPreferenceScopeType.LevelOneScope:
        scopeLength = 1
        break
      case UserPreferenceScopeType.LevelTwoScope:
        scopeLength = 2
        break
      case UserPreferenceScopeType.LevelThreeScope:
        scopeLength = 3
        break
      default:
        // TODO throw and let the consumer decide what to do
        // Logger.log(
        //   `CompositeUserPreferencesService | getEffectiveScope | Received unexpected allowed scope ${allowedScope}`,
        //   LogLevel.Warn,
        // )
        break
    }

    const currenScopeParts = currentScope.split(USER_PREFERENCE_SCOPE_SEPARATOR)

    currenScopeParts.length = scopeLength // Truncating scope parts that are too granular for the allowed scope

    const effectiveScope = currenScopeParts.join(USER_PREFERENCE_SCOPE_SEPARATOR) as UserPreferenceScope

    return effectiveScope
  }

  private createPreferenceEntry(
    userPreferenceId: TPreferenceIds,
    userPreference: UserPreference,
  ): [TPreferenceIds, UserPreference] {
    return [userPreferenceId, userPreference]
  }

  // TODO: Should be replaced with Object.fromEntries when the transpiler is updated
  private createCompositePreferencesFromEntries(
    entries: Array<[TPreferenceIds, UserPreference]>,
  ): CompositeUserPreferences<TPreferenceIds> {
    return entries.reduce(
      (
        composite: CompositeUserPreferences<TPreferenceIds>,
        [userPreferenceId, preference]: [TPreferenceIds, UserPreference],
      ) => {
        composite[userPreferenceId] = preference
        return composite
      },
      // eslint-disable-next-line
      {} as CompositeUserPreferences<TPreferenceIds>,
    )
  }
}

export class UserPreferencesService<TUserPreferenceId extends PropertyKey> {
  public preferences!: CompositeUserPreferences<TUserPreferenceId>

  constructor(
    private readonly definitions: UserPreferenceDefinitions<TUserPreferenceId>,
    private readonly compositeUserPreferencesService: CompositeUserPreferencesService<TUserPreferenceId>,
    private readonly cookieKey: string,
    private readonly currentScope: UserPreferenceScope,
    public dateFormatter: () => Date,
  ) {}

  public async init(): Promise<void> {
    const storedPreferences = await this.getStoredPreferences()

    this.preferences = this.compositeUserPreferencesService.getScopedUserPreferences(
      storedPreferences,
      this.currentScope,
      this.definitions,
    )
  }

  // I assume this is async because it could reach some sort of API in the future?
  public async isOptedIn(userPreferenceId: TUserPreferenceId): Promise<boolean | undefined> {
    const userPreference = this.preferences[userPreferenceId]

    if (!userPreference) await Promise.reject(new Error(`Invalid Operation. A user preference could not be found.`))

    return userPreference.optedIn
  }

  public async setPreference(userPreferenceId: TUserPreferenceId, isOptedIn: boolean): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const { allowedScope } = this.definitions[userPreferenceId]

    const currentStoredPreferences = Cookies.getObject(this.cookieKey)

    const storedPreferences = this.compositeUserPreferencesService.getUpdatedUserPreferenceStorageObject(
      userPreferenceId,
      isOptedIn,
      this.currentScope,
      currentStoredPreferences as unknown as UserPreferences<TUserPreferenceId>,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      allowedScope,
    )

    await this.setStoredPreferences(storedPreferences)

    this.preferences = this.compositeUserPreferencesService.getScopedUserPreferences(
      storedPreferences,
      this.currentScope,
      this.definitions,
    )

    // eslint-disable-next-line @typescript-eslint/return-await
    return Promise.resolve()
  }

  private async getStoredPreferences(): Promise<UserPreferences<TUserPreferenceId>> {
    return await Promise.resolve(Cookies.getObject(this.cookieKey) ?? {})
  }

  private async setStoredPreferences(storedPreferences: UserPreferences<TUserPreferenceId>): Promise<void> {
    Cookies.putObject(this.cookieKey, storedPreferences, {
      // expires: DateFormatter.Utc().add(10, 'year').toDate(),
      expires: this.dateFormatter(),
    })

    await Promise.resolve()
  }
}

// TEST

export enum TestUserPreferenceId {
  Default = 'default-id',
  PreferenceOne = 'preference-one',
}

export function TestUserPreferenceDefinitionsFakeFactory(
  config?: Array<{
    id: TestUserPreferenceId
    isOptedInByDefault?: boolean
    allowedScope?: UserPreferenceScopeType
  }>,
): Sync.Builder<
  UserPreferenceDefinitions<TestUserPreferenceId>,
  keyof UserPreferenceDefinitions<TestUserPreferenceId>
> {
  if (!config) {
    config = Object.values(TestUserPreferenceId).map(id => ({ id }))
  }

  return config.reduce((definitions, { id, isOptedInByDefault, allowedScope }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    definitions[id] = createDefinition({ isOptedInByDefault, allowedScope })

    return definitions
  }, {})
}

type Definition = {
  isOptedInByDefault?: boolean
  allowedScope?: UserPreferenceScopeType
}

function createDefinition({ isOptedInByDefault, allowedScope }: Definition = {}): Definition {
  return {
    isOptedInByDefault: isOptedInByDefault ?? faker.datatype.boolean(),
    allowedScope: allowedScope ?? faker.helpers.enumValue(UserPreferenceScopeType),
  }
}

export interface TestUserPreferencesFakeBuilder {
  wantsRandom?: boolean
  scope?: UserPreferenceScope
  userPreferenceIds?: TestUserPreferenceId[]
  optedIns?: boolean[]
}

export function makeBuilderFromDefinition(
  definitions: UserPreferenceDefinitions<TestUserPreferenceId>,
  scope?: UserPreferenceScope,
): TestUserPreferencesFakeBuilder {
  return {
    scope: scope ?? getRandomScope({ excludeGlobal: true }),
    userPreferenceIds: Object.keys(definitions) as TestUserPreferenceId[],
    optedIns: Object.values(definitions).map(({ isOptedInByDefault }) => isOptedInByDefault),
  }
}

export function TestUserPreferencesFakeFactory(
  scopes: TestUserPreferencesFakeBuilder[] = [],
): Sync.Builder<UserPreferences<TestUserPreferenceId>, keyof UserPreferences<TestUserPreferenceId>> {
  return scopes.reduce((scopedPreferences, { wantsRandom = false, scope, userPreferenceIds, optedIns }) => {
    const effectiveScope = scope ?? getRandomScope({ excludeGlobal: true })
    if (wantsRandom) {
      const numberOfValues = faker.number.int({ max: Object.keys(TestUserPreferenceId).length, min: 1 })
      userPreferenceIds = Array.from({ length: numberOfValues }, () => faker.helpers.enumValue(TestUserPreferenceId))
      optedIns = Array.from({ length: numberOfValues }, () => faker.datatype.boolean())
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    scopedPreferences[effectiveScope] = userPreferenceIds.reduce((preferences, userPreferenceId, index) => {
      const effectiveId = userPreferenceId ?? TestUserPreferenceId.Default
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const effectiveOptedInState = optedIns[index] ?? faker.datatype.boolean()

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      preferences[effectiveId] = { optedIn: effectiveOptedInState }

      return preferences
    }, {})

    return scopedPreferences
  }, {}) as UserPreferences<TestUserPreferenceId>
}

function getRandomScope({ maxScope = 3, excludeGlobal = false }): UserPreferenceScope {
  const numberOfScopes = faker.number.int({
    max: maxScope,
    min: excludeGlobal ? UserPreferenceScopeType.LevelOneScope : UserPreferenceScopeType.Global,
  })

  if (numberOfScopes === 0) return 'global'

  const scopeIdMaxLength = 9999
  const scopeIdOptions = { max: scopeIdMaxLength }
  const scope = Array.from(
    { length: numberOfScopes * 2 - 1 }, // Double the iterations, one for the number and
    // one for the separator, removing the separator
    (_, index: number): string => (!(index % 2) ? faker.number.int(scopeIdOptions).toString() : '-'),
  ).join('')

  return scope as UserPreferenceScope
}
