import {
  CompositeUserPreferencesService,
  makeBuilderFromDefinition,
  TestUserPreferenceDefinitionsFakeFactory,
  TestUserPreferenceId,
  TestUserPreferencesFakeFactory,
  type TestUserPreferencesFakeBuilder,
  type UserPreferenceDefinition,
  type UserPreferenceDefinitions,
  type UserPreferences,
  type UserPreferenceScope,
  UserPreferenceScopeType,
} from 'src/services/user-preferences'

import { describe, it, expect, beforeEach } from 'vitest'

describe('When testing CompositeUserPreferencesService', () => {
  let compositeUserPreferencesService: CompositeUserPreferencesService<TestUserPreferenceId>
  let userPreferences: UserPreferences<TestUserPreferenceId>
  let expectedScope: UserPreferenceScope
  let definitions: UserPreferenceDefinitions<TestUserPreferenceId>

  beforeEach(() => {
    definitions = TestUserPreferenceDefinitionsFakeFactory() as UserPreferenceDefinitions<TestUserPreferenceId>
    const prefsBuilder = makeBuilderFromDefinition(definitions)
    userPreferences = TestUserPreferencesFakeFactory([prefsBuilder]) as UserPreferences<TestUserPreferenceId>
    expectedScope = Object.keys(userPreferences)[0] as UserPreferenceScope

    compositeUserPreferencesService = new CompositeUserPreferencesService<TestUserPreferenceId>()
    // container.invoke(CompositeUserPreferencesService) as CompositeUserPreferencesService<TestUserPreferenceId>;
  })

  describe('and getting scoped user preferences', () => {
    it('it should return defaults if preferences are empty', () => {
      // arrange
      userPreferences = {}

      // act
      const actualScopedUserPreferences = compositeUserPreferencesService.getScopedUserPreferences(
        userPreferences,
        expectedScope,
        definitions,
      )

      // assert
      Object.entries(actualScopedUserPreferences).forEach(([preferenceId, actualPreference]) => {
        const definition = definitions[preferenceId as TestUserPreferenceId]
        const expectedScopedUserPreferences = { optedIn: definition?.isOptedInByDefault }
        expect(actualPreference).toEqual(expectedScopedUserPreferences)
      })
    })

    it('it should get preferences in a single scope', () => {
      // act
      const actualScopedUserPreferences = compositeUserPreferencesService.getScopedUserPreferences(
        userPreferences,
        expectedScope,
        definitions,
      )

      // assert
      const expectedPreference = userPreferences[expectedScope]
      expect(actualScopedUserPreferences).toEqual(expectedPreference)
      expect(actualScopedUserPreferences).not.toBe(expectedPreference)
    })

    it.each([
      ['1-1-1', 'global', UserPreferenceScopeType.Global],
      ['1-1-1', '1', UserPreferenceScopeType.LevelOneScope],
      ['1-1-1', '1-1', UserPreferenceScopeType.LevelTwoScope],
      ['1-1-1', '1-1-1', UserPreferenceScopeType.LevelThreeScope],
    ])(
      'it should get preferences in the right scope',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      (
        currentScope: UserPreferenceScope,
        expectedScope: UserPreferenceScope,
        allowedScope: UserPreferenceScopeType,
      ) => {
        // arrange
        const userPreferencesBuilder: TestUserPreferencesFakeBuilder[] = [
          { scope: expectedScope, userPreferenceIds: [TestUserPreferenceId.Default], optedIns: [true] },
          { wantsRandom: true },
          { wantsRandom: true },
        ]
        userPreferences = TestUserPreferencesFakeFactory(
          userPreferencesBuilder,
        ) as UserPreferences<TestUserPreferenceId>
        definitions = TestUserPreferenceDefinitionsFakeFactory([
          {
            id: TestUserPreferenceId.Default,
            isOptedInByDefault: true,
            allowedScope,
          },
        ]) as UserPreferenceDefinitions<TestUserPreferenceId>

        // act
        const actualScopedUserPreferences = compositeUserPreferencesService.getScopedUserPreferences(
          userPreferences,
          currentScope,
          definitions,
        )

        // assert
        const expectedPreference = userPreferences[expectedScope]
        expect(actualScopedUserPreferences).toEqual(expectedPreference)
        expect(actualScopedUserPreferences).not.toBe(expectedPreference)
      },
    )
  })

  describe('and updating a user preference', () => {
    it.each([
      ['1-1-1', 'global', UserPreferenceScopeType.Global],
      ['1-1-1', '1', UserPreferenceScopeType.LevelOneScope],
      ['1-1-1', '1-1', UserPreferenceScopeType.LevelTwoScope],
      ['1-1-1', '1-1-1', UserPreferenceScopeType.LevelThreeScope],
    ])(
      'it should update the preference in the correct scope',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      (
        currentScope: UserPreferenceScope,
        expectedScope: UserPreferenceScope,
        allowedScope: UserPreferenceScopeType,
      ) => {
        // arrange
        const testPreferenceValue = true
        const { preferenceId: builderPreferenceId } = getFirstDefinition(definitions)
        const updatingId = builderPreferenceId

        const userPreferencesBuilder: TestUserPreferencesFakeBuilder[] = [
          { scope: expectedScope, userPreferenceIds: [updatingId], optedIns: [testPreferenceValue] },
          { wantsRandom: true },
          { wantsRandom: true },
        ]
        userPreferences = TestUserPreferencesFakeFactory(
          userPreferencesBuilder,
        ) as UserPreferences<TestUserPreferenceId>

        // act
        const expectedPreferenceValue = !testPreferenceValue
        const actualUserPreferences = compositeUserPreferencesService.getUpdatedUserPreferenceStorageObject(
          updatingId,
          expectedPreferenceValue,
          currentScope,
          userPreferences,
          allowedScope,
        )

        // assert
        const actualUserPreference = actualUserPreferences?.[expectedScope]?.[updatingId]
        expect(actualUserPreference?.optedIn).toEqual(expectedPreferenceValue)
        expect(actualUserPreference).not.toBe(userPreferences)
      },
    )

    it.each([
      ['1-1-1', 'global', UserPreferenceScopeType.Global],
      ['1-1-1', '1', UserPreferenceScopeType.LevelOneScope],
      ['1-1-1', '1-1', UserPreferenceScopeType.LevelTwoScope],
      ['1-1-1', '1-1-1', UserPreferenceScopeType.LevelThreeScope],
    ])(
      'it should update the preference even if no preference exists',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      (
        currentScope: UserPreferenceScope,
        expectedScope: UserPreferenceScope,
        allowedScope: UserPreferenceScopeType,
      ) => {
        // arrange
        const expectedPreferenceValue = true
        const updatingId = TestUserPreferenceId.Default

        userPreferences = {} satisfies UserPreferences<TestUserPreferenceId>

        // act
        const actualUserPreferences = compositeUserPreferencesService.getUpdatedUserPreferenceStorageObject(
          updatingId,
          expectedPreferenceValue,
          expectedScope,
          userPreferences,
          allowedScope,
        )

        // assert
        const actualUserPreference = actualUserPreferences?.[expectedScope]?.[updatingId]
        expect(actualUserPreference?.optedIn).toEqual(expectedPreferenceValue)
        expect(actualUserPreference).not.toBe(userPreferences)
      },
    )
  })
})

function getFirstDefinition(definitions: UserPreferenceDefinitions<TestUserPreferenceId>): {
  definition?: UserPreferenceDefinition
  preferenceId: TestUserPreferenceId
} {
  const preferenceId = Object.keys(definitions)[0] as TestUserPreferenceId
  const definition = definitions[preferenceId]

  return { definition, preferenceId }
}
