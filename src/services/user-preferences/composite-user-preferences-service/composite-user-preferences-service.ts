import { type UserPreferences } from 'src/services/user-preferences/models/storage-models/user-preferences'
import {
  USER_PREFERENCE_SCOPE_SEPARATOR,
  UserPreferenceGlobalScope,
  type UserPreferenceScope,
} from 'src/services/user-preferences/models/storage-models/user-preference-scope'
import { type UserPreferenceDefinitions } from 'src/services/user-preferences/models/definitions/user-preference-definitions'
import { type CompositeUserPreferences } from 'src/services/user-preferences/models/user-preferences/composite-user-preferences'
import { type UserPreference } from 'src/services/user-preferences/models/storage-models/user-preference'
import { UserPreferenceScopeType } from 'src/services/user-preferences/models/definitions/user-preference-scope-type'
import cloneDeep from 'lodash/cloneDeep'
import { type UserPreferenceDefinition } from 'src/services/user-preferences/models/definitions/user-preference-definition'

export class CompositeUserPreferencesService<TPreferenceIds extends PropertyKey, T> {
  public getScopedUserPreferences(
    storedPreferences: UserPreferences<TPreferenceIds, T>,
    currentScope: UserPreferenceScope,
    definitions: UserPreferenceDefinitions<TPreferenceIds, T>,
  ): CompositeUserPreferences<TPreferenceIds, T> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const entriesByIdAndUserPreference = Object.entries(definitions).map<[TPreferenceIds, UserPreference<T>]>(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      this.createUserPreferenceEntryFromDefinition.bind(this, storedPreferences, currentScope),
    )

    return this.createCompositePreferencesFromEntries(entriesByIdAndUserPreference)
  }

  public getUpdatedUserPreferenceStorageObject(
    preferenceId: TPreferenceIds,
    isOptedIn: boolean,
    data: T,
    currentScope: UserPreferenceScope,
    currentPreferences: UserPreferences<TPreferenceIds, T>,
    allowedScope: UserPreferenceScopeType,
  ): UserPreferences<TPreferenceIds, T> {
    const userPreferencesToUpdate = currentPreferences ? cloneDeep(currentPreferences) : {}

    const effectiveScope = this.getEffectiveScope(currentScope, allowedScope)

    const scopedUserPreferences = userPreferencesToUpdate[effectiveScope] ?? {}

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    scopedUserPreferences[preferenceId] = { optedIn: isOptedIn, data }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    userPreferencesToUpdate[effectiveScope] = scopedUserPreferences

    return userPreferencesToUpdate
  }

  private createUserPreferenceEntryFromDefinition(
    storedPreferences: UserPreferences<TPreferenceIds, T>,
    currentScope: UserPreferenceScope,
    [definedUserPreferenceId, definition]: [TPreferenceIds, UserPreferenceDefinition<T>],
  ): [TPreferenceIds, UserPreference<T>] {
    if (!storedPreferences) {
      const userPreferenceDefault = { optedIn: definition.isOptedInByDefault, data: definition.defaultData }
      return this.createPreferenceEntry(definedUserPreferenceId, userPreferenceDefault)
    }

    const { allowedScope } = definition

    const effectiveScope = this.getEffectiveScope(currentScope, allowedScope)

    const scopedUserPreferences = storedPreferences[effectiveScope]

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const userPreferenceForCurrentDefinition: UserPreference = scopedUserPreferences?.[definedUserPreferenceId]

    const optedIn = userPreferenceForCurrentDefinition?.optedIn ?? definition.isOptedInByDefault
    const data = userPreferenceForCurrentDefinition?.data ?? definition.defaultData
    const userPreference = { optedIn, data }
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
        throw new Error('ArgumentError | An invalid allowed scope was provided.')
    }

    const currenScopeParts = currentScope.split(USER_PREFERENCE_SCOPE_SEPARATOR)

    currenScopeParts.length = scopeLength // Truncating scope parts that are too granular for the allowed scope

    const effectiveScope = currenScopeParts.join(USER_PREFERENCE_SCOPE_SEPARATOR) as UserPreferenceScope

    return effectiveScope
  }

  private createPreferenceEntry(
    userPreferenceId: TPreferenceIds,
    userPreference: UserPreference<T>,
  ): [TPreferenceIds, UserPreference<T>] {
    return [userPreferenceId, userPreference]
  }

  // TODO: Should be replaced with Object.fromEntries when the transpiler is updated
  private createCompositePreferencesFromEntries(
    entries: Array<[TPreferenceIds, UserPreference<T>]>,
  ): CompositeUserPreferences<TPreferenceIds, T> {
    return entries.reduce(
      (
        composite: CompositeUserPreferences<TPreferenceIds, T>,
        [userPreferenceId, preference]: [TPreferenceIds, UserPreference<T>],
      ) => {
        composite[userPreferenceId] = preference
        return composite
      },
      // eslint-disable-next-line
      {} as CompositeUserPreferences<TPreferenceIds, T>,
    )
  }
}
