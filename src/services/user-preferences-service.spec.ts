import {
  CompositeUserPreferencesService,
  type UserPreferenceScope,
  type UserPreferences,
  UserPreferencesService,
  type UserPreferenceDefinitions,
  TestUserPreferenceId,
  makeBuilderFromDefinition,
  TestUserPreferencesFakeFactory,
  UserPreferenceScopeType,
  TestUserPreferenceDefinitionsFakeFactory,
} from './user-preferences'

import * as Cookies from './Cookies'

import { describe, afterEach, it, expect } from 'vitest'

describe('When testing the User Preferences Service', () => {
  let userPreferencesService: UserPreferencesService<TestUserPreferenceId>
  const cookieKey = 'mp_u_p'
  const lowLevelScope: UserPreferenceScope = '1-1-1'
  let userPreferences: UserPreferences<TestUserPreferenceId>

  let definitions: UserPreferenceDefinitions<TestUserPreferenceId>
  const compositeUserPreferencesService = new CompositeUserPreferencesService<TestUserPreferenceId>()

  function setupPreferencesWithScope(
    definition: UserPreferenceDefinitions<TestUserPreferenceId>,
    scope: UserPreferenceScope | undefined,
  ): void {
    const scopedPreference = makeBuilderFromDefinition(definition, scope)
    userPreferences = TestUserPreferencesFakeFactory([scopedPreference]) as UserPreferences<TestUserPreferenceId>

    Cookies.putObject(cookieKey, userPreferences)
  }

  afterEach(() => {
    Cookies.put(cookieKey, '')
  })

  describe('Testing stuff', () => {
    const log = console.log

    it('should work', async () => {
      // scope
      const allowedScope = UserPreferenceScopeType.Global
      definitions = TestUserPreferenceDefinitionsFakeFactory([
        { id: TestUserPreferenceId.Default, allowedScope },
        { id: TestUserPreferenceId.PreferenceOne, allowedScope },
      ]) as UserPreferenceDefinitions<TestUserPreferenceId>

      log(definitions)

      // setup
      const scopedPreference = makeBuilderFromDefinition(definitions, lowLevelScope)
      log(scopedPreference)
      userPreferences = TestUserPreferencesFakeFactory([scopedPreference]) as UserPreferences<TestUserPreferenceId>
      log(userPreferences)
      Cookies.putObject(cookieKey, userPreferences)

      userPreferencesService = new UserPreferencesService<TestUserPreferenceId>(
        definitions,
        compositeUserPreferencesService,
        cookieKey,
        lowLevelScope,
        () => new Date(),
      )
      await userPreferencesService.init()

      log(userPreferencesService.preferences)
      log(await userPreferencesService.isOptedIn(TestUserPreferenceId.Default))

      expect(true).toBe(true)
    })
  })

  describe('and reading the data', () => {
    it.each([
      [UserPreferenceScopeType.LevelOneScope],
      [UserPreferenceScopeType.LevelTwoScope],
      [UserPreferenceScopeType.LevelThreeScope],
    ])('it should read preferences when there are scoped prefs', async (allowedScope: UserPreferenceScopeType) => {
      // arrange
      definitions = TestUserPreferenceDefinitionsFakeFactory([
        { id: TestUserPreferenceId.Default, allowedScope },
        { id: TestUserPreferenceId.PreferenceOne, allowedScope },
      ]) as UserPreferenceDefinitions<TestUserPreferenceId>

      setupPreferencesWithScope(definitions, lowLevelScope)

      userPreferencesService = new UserPreferencesService<TestUserPreferenceId>(
        definitions,
        compositeUserPreferencesService,
        cookieKey,
        lowLevelScope,
        () => new Date(),
      )
      await userPreferencesService.init()

      const scopedPreferences = userPreferences[lowLevelScope]
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      for (const [id, preference] of Object.entries(scopedPreferences)) {
        // act
        const isOptedIn = await userPreferencesService.isOptedIn(id as TestUserPreferenceId)

        // assert
        const expectedIsOptedIn = preference.optedIn
        expect(isOptedIn).not.toBeNull()
        expect(isOptedIn).toBe(expectedIsOptedIn)
      }
    })

    it('it should read preferences when there are no scoped prefs', async () => {
      // arrange
      definitions = TestUserPreferenceDefinitionsFakeFactory() as UserPreferenceDefinitions<TestUserPreferenceId>

      const someScope = '1'
      setupPreferencesWithScope(definitions, someScope)

      const currentScope = '2'
      userPreferencesService = new UserPreferencesService<TestUserPreferenceId>(
        definitions,
        compositeUserPreferencesService,
        cookieKey,
        currentScope,
        () => new Date(),
      )
      await userPreferencesService.init()

      for (const [id, definition] of Object.entries(definitions)) {
        // act
        const isOptedIn = await userPreferencesService.isOptedIn(id as TestUserPreferenceId)

        // assert
        const expectedIsOptedIn = definition.isOptedInByDefault
        expect(isOptedIn).not.toBeNull()
        expect(isOptedIn).toBe(expectedIsOptedIn)
      }
    })

    it("it should throw when the preference can't be found", async () => {
      // console.log(Cookies.getAll())
      // arrange
      definitions = TestUserPreferenceDefinitionsFakeFactory() as UserPreferenceDefinitions<TestUserPreferenceId>
      // console.log(definitions)

      const someScope = '1'
      setupPreferencesWithScope(definitions, someScope)
      // console.log(Cookies.getAll())

      userPreferencesService = new UserPreferencesService<TestUserPreferenceId>(
        definitions,
        compositeUserPreferencesService,
        cookieKey,
        someScope,
        () => new Date(),
      )
      await userPreferencesService.init()

      // act
      const unknownId = 'unknown'
      const isOptedInDelegate = userPreferencesService.isOptedIn.bind(
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
        const userPreferenceId = TestUserPreferenceId.Default
        const testOptedInState = true
        definitions = TestUserPreferenceDefinitionsFakeFactory([
          { id: userPreferenceId, allowedScope, isOptedInByDefault: testOptedInState },
        ]) as UserPreferenceDefinitions<TestUserPreferenceId>

        setupPreferencesWithScope(definitions, expectedScope as UserPreferenceScope)

        userPreferencesService = new UserPreferencesService<TestUserPreferenceId>(
          definitions,
          compositeUserPreferencesService,
          cookieKey,
          lowLevelScope,
          () => new Date(),
        )
        await userPreferencesService.init()

        // pre-assert
        const testState = await userPreferencesService.isOptedIn(userPreferenceId)

        expect(testState).toBe(testOptedInState)

        // act
        const expectedOptedInState = !testOptedInState
        await userPreferencesService.setPreference(userPreferenceId, expectedOptedInState)

        // assert
        const actualState = await userPreferencesService.isOptedIn(userPreferenceId)

        expect(actualState).toBe(expectedOptedInState)
      },
    )

    it('it should be able to update a preferences when the preference does not exist', async () => {
      // arrange
      const userPreferenceId = TestUserPreferenceId.Default
      const allowedScope = UserPreferenceScopeType.LevelThreeScope
      const testOptedInState = true
      definitions = TestUserPreferenceDefinitionsFakeFactory([
        { id: userPreferenceId, allowedScope, isOptedInByDefault: testOptedInState },
      ]) as UserPreferenceDefinitions<TestUserPreferenceId>

      userPreferencesService = new UserPreferencesService<TestUserPreferenceId>(
        definitions,
        compositeUserPreferencesService,
        cookieKey,
        lowLevelScope,
        () => new Date(),
      )
      await userPreferencesService.init()

      // pre-assert
      const testState = await userPreferencesService.isOptedIn(userPreferenceId)

      expect(testState).toBe(testOptedInState)

      // act
      const expectedOptedInState = !testOptedInState
      await userPreferencesService.setPreference(userPreferenceId, expectedOptedInState)

      // assert
      const actualState = await userPreferencesService.isOptedIn(userPreferenceId)

      expect(actualState).toBe(expectedOptedInState)
    })
  })
})
