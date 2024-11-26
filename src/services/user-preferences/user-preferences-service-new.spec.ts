/* eslint-disable @typescript-eslint/no-use-before-define */
import * as Cookies from '../../utils/Cookies'

import { describe, afterEach, it, expect } from 'vitest'
import { UserPreferencesPerScope, UserPreferencesService, UserPreferenceDefinitions } from 'src/services/user-preferences/user-preferences-service'
import { type UserPreferenceScope } from 'src/services/user-preferences/models/storage-models/user-preference-scope'
import { UserPreferenceScopeType } from 'src/services/user-preferences/models/definitions/user-preference-scope-type'
import { type Sync } from 'factory.ts'
import { faker } from '@faker-js/faker'


type TestType = {
  Default: { isOptedIn: boolean },
  PreferenceOne: { isOptedIn: boolean }
} 


describe('When testing the User Preferences Service', () => {
  it("", async () => {
    const definitions: UserPreferenceDefinitions<TestType> = { 
      Default: { allowedScope: UserPreferenceScopeType.Global, defaultValue: { isOptedIn: faker.datatype.boolean() } },
      PreferenceOne: { allowedScope: UserPreferenceScopeType.Global, defaultValue: { isOptedIn: faker.datatype.boolean() } }
    };

    const userPreferencesService = new UserPreferencesService<TestType>(
        definitions,
        '1-1-1',
        { key: 'mp_u_p' }
    );

    await userPreferencesService.init();
    
    expect((await userPreferencesService.getPreference('Default')).isOptedIn).toBe(definitions.Default.defaultValue.isOptedIn);
    expect((await userPreferencesService.getPreference('PreferenceOne')).isOptedIn).toBe(definitions.PreferenceOne.defaultValue.isOptedIn);
    
    await userPreferencesService.setPreference('Default', { isOptedIn: !definitions.Default.defaultValue.isOptedIn });
    await userPreferencesService.setPreference('PreferenceOne', { isOptedIn: !definitions.PreferenceOne.defaultValue.isOptedIn });

    expect((await userPreferencesService.getPreference('Default')).isOptedIn).toBe(!definitions.Default.defaultValue.isOptedIn);
    expect((await userPreferencesService.getPreference('PreferenceOne')).isOptedIn).toBe(!definitions.PreferenceOne.defaultValue.isOptedIn);
  })
})

describe('When testing the User Preferences Service', () => {
  let userPreferencesService: UserPreferencesService<TestType>
  const cookieKey = 'mp_u_p'
  const lowLevelScope: UserPreferenceScope = '1-1-1'
  let userPreferencesPerScope: UserPreferencesPerScope<TestType>

  let definitions: UserPreferenceDefinitions<TestType>

  function setupPreferencesWithScope(
    definition: UserPreferenceDefinitions<TestType>,
    scope: UserPreferenceScope | undefined,
  ): void {
    const scopedPreference = makeBuilderFromDefinition(definition, scope)
    userPreferencesPerScope = TestUserPreferencesFakeFactory([scopedPreference]) as UserPreferencesPerScope<TestType>

    Cookies.putObject(cookieKey, userPreferencesPerScope)
  }

  afterEach(() => {
    Cookies.put(cookieKey, '')
  })

  describe('and reading the data', () => {
    it.each([
      [UserPreferenceScopeType.LevelOneScope],
      [UserPreferenceScopeType.LevelTwoScope],
      [UserPreferenceScopeType.LevelThreeScope],
    ])('it should read preferences when there are scoped prefs', async (allowedScope: UserPreferenceScopeType) => {
      // arrange
      definitions = TestUserPreferenceDefinitionsFakeFactory([
        { id: "Default", allowedScope },
        { id: "PreferenceOne", allowedScope },
      ]) as UserPreferenceDefinitions<TestType>

      setupPreferencesWithScope(definitions, lowLevelScope)

      userPreferencesService = new UserPreferencesService<TestType>(
        definitions,
        lowLevelScope,
        { key: cookieKey },
      )
      await userPreferencesService.init()

      const scopedPreferences = userPreferencesPerScope[lowLevelScope]
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      for (const [id, expectedIsOptedIn] of Object.entries(scopedPreferences)) {
        // act
        // @ts-expect-error
        const isOptedIn = await userPreferencesService.getPreference(id)

        // assert
        expect(isOptedIn?.isOptedIn).not.toBeNull()
        expect(isOptedIn.isOptedIn).toBe(expectedIsOptedIn.isOptedIn)
      }
    })

    it('it should read preferences when there are no scoped prefs', async () => {
      // arrange
      definitions = TestUserPreferenceDefinitionsFakeFactory() as UserPreferenceDefinitions<TestType>

      const someScope = '1'
      setupPreferencesWithScope(definitions, someScope)

      const currentScope = '2'
      userPreferencesService = new UserPreferencesService<TestType>(
        definitions,
        currentScope,
        { key: cookieKey },
      )
      await userPreferencesService.init()

      for (const [id, definition] of Object.entries(definitions)) {
        // act
        // @ts-expect-error
        const isOptedIn = await userPreferencesService.getPreference(id)

        // assert
        const expectedIsOptedIn = definition.defaultValue
        expect(isOptedIn?.isOptedIn).not.toBeNull()
        expect(isOptedIn.isOptedIn).toBe(expectedIsOptedIn.isOptedIn)
      }
    })

    it("it should throw when the preference can't be found", async () => {
      // arrange
      definitions = TestUserPreferenceDefinitionsFakeFactory() as UserPreferenceDefinitions<TestType>

      const someScope = '1'
      setupPreferencesWithScope(definitions, someScope)

      userPreferencesService = new UserPreferencesService<TestType>(
        definitions,
        someScope,
        { key: cookieKey },
      )
      await userPreferencesService.init()

      // act
      const unknownId = 'unknown'
      const isOptedInDelegate = userPreferencesService.getPreference.bind(
        userPreferencesService,
        // @ts-expect-error - we are testing an incorrect usage
        unknownId,
      )

      // assert
      await expect(isOptedInDelegate).rejects.toThrow(`Invalid Operation. A user preference could not be found.`)
    })
  })

  describe('and updating preferences', () => {
    it.each([
      ['1', UserPreferenceScopeType.LevelOneScope],
      ['1-1', UserPreferenceScopeType.LevelTwoScope],
      ['1-1-1', UserPreferenceScopeType.LevelThreeScope],
    ])(
      'it should be able to update a preferences when the preference exists',
      async (expectedScope, allowedScope: UserPreferenceScopeType) => {
        // arrange
        const userPreferenceId = "Default"
        const testOptedInState = true
        definitions = TestUserPreferenceDefinitionsFakeFactory([
          { id: userPreferenceId, allowedScope, isOptedInByDefault: testOptedInState },
        ]) as UserPreferenceDefinitions<TestType>

        setupPreferencesWithScope(definitions, expectedScope as UserPreferenceScope)

        userPreferencesService = new UserPreferencesService<TestType>(
          definitions,
          lowLevelScope,
          { key: cookieKey },
        )
        await userPreferencesService.init()

        // pre-assert
        const testState = await userPreferencesService.getPreference(userPreferenceId)

        expect(testState.isOptedIn).toBe(testOptedInState)

        // act
        const expectedOptedInState = !testOptedInState
        await userPreferencesService.setPreference(userPreferenceId, { isOptedIn: expectedOptedInState })

        // assert
        const actualState = await userPreferencesService.getPreference(userPreferenceId)

        expect(actualState.isOptedIn).toBe(expectedOptedInState)
      },
    )

    it('it should be able to update a preferences when the preference does not exist', async () => {
      // arrange
      const userPreferenceId = "Default"
      const allowedScope = UserPreferenceScopeType.LevelThreeScope
      const testOptedInState = true
      definitions = TestUserPreferenceDefinitionsFakeFactory([
        { id: userPreferenceId, allowedScope, isOptedInByDefault: testOptedInState },
      ]) as UserPreferenceDefinitions<TestType>

      userPreferencesService = new UserPreferencesService<TestType>(
        definitions,
        lowLevelScope,
        { key: cookieKey },
      )
      await userPreferencesService.init()

      // pre-assert
      const testState = await userPreferencesService.getPreference(userPreferenceId)

      expect(testState.isOptedIn).toBe(testOptedInState)

      // act
      const expectedOptedInState = !testOptedInState
      await userPreferencesService.setPreference(userPreferenceId, { isOptedIn: expectedOptedInState })

      // assert
      const actualState = await userPreferencesService.getPreference(userPreferenceId)

      expect(actualState.isOptedIn).toBe(expectedOptedInState)
    })
  })
})

export function TestUserPreferenceDefinitionsFakeFactory(
  config?: Array<{
    id: string
    isOptedInByDefault?: boolean
    allowedScope?: UserPreferenceScopeType
  }>,
): Sync.Builder<
  UserPreferenceDefinitions<TestType>,
  keyof UserPreferenceDefinitions<TestType>
> {
  if (!config) {
    config = [{id: "Default"}, {id: "PreferenceOne"}]
  }

  return config.reduce((definitions, { id, isOptedInByDefault, allowedScope }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    definitions[id] = createDefinition({
      defaultValue: isOptedInByDefault !== undefined ? { isOptedIn: isOptedInByDefault } : undefined, 
      allowedScope 
    })

    return definitions
  }, {} as UserPreferenceDefinitions<TestType>)
}

type Definition = {
  defaultValue?: { isOptedIn: boolean },
  allowedScope?: UserPreferenceScopeType
}

function createDefinition({ defaultValue, allowedScope }: Definition = {}): Definition {
  return {
    defaultValue: defaultValue ?? { isOptedIn : faker.datatype.boolean() },
    allowedScope: allowedScope ?? faker.helpers.enumValue(UserPreferenceScopeType),
  }
}

export interface TestUserPreferencesFakeBuilder {
  wantsRandom?: boolean
  scope?: UserPreferenceScope
  keys?: string[]
  defaultValues?: any[]
}

export function makeBuilderFromDefinition(
  definitions: UserPreferenceDefinitions<TestType>,
  scope?: UserPreferenceScope,
): TestUserPreferencesFakeBuilder {
  return {
    scope: scope ?? getRandomScope({ excludeGlobal: true }),
    keys: Object.keys(definitions),
    defaultValues: Object.values(definitions).map(definition => definition.defaultValue),
  }
}

export function TestUserPreferencesFakeFactory(
  scopes: TestUserPreferencesFakeBuilder[] = [],
): Sync.Builder<UserPreferencesPerScope<TestType>, keyof UserPreferencesPerScope<TestType>> {
  return scopes.reduce((scopedPreferences, { wantsRandom = false, scope, keys, defaultValues }) => {
    const effectiveScope = scope ?? getRandomScope({ excludeGlobal: true })
    
    if (wantsRandom) {
      const numberOfValues = faker.number.int({ max: 2, min: 1 })
      keys = Array.from({ length: numberOfValues }, () => faker.helpers.arrayElement(["Default", "PreferenceOne"]))
      defaultValues = Array.from({ length: numberOfValues }, () => faker.datatype.boolean())
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    scopedPreferences[effectiveScope] = keys.reduce((preferences, userPreferenceId, index) => {
      const effectiveId = userPreferenceId ?? "Default"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const effectiveOptedInState = defaultValues[index] ?? { isOptedIn: faker.datatype.boolean() }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      preferences[effectiveId] = effectiveOptedInState

      return preferences
    }, {})

    return scopedPreferences
  }, {}) as UserPreferencesPerScope<TestType>
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
