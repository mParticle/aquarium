import { describe, it, expect, beforeEach } from 'vitest'
import { CompositeUserPreferencesService } from 'src/services/user-preferences/composite-user-preferences-service'
import { type UserPreferences } from 'src/services/user-preferences/models/storage-models/user-preferences'
import { type UserPreferenceScope } from 'src/services/user-preferences/models/storage-models/user-preference-scope'
import { type UserPreferenceDefinitions } from 'src/services/user-preferences/models/definitions/user-preference-definitions'
import { UserPreferenceScopeType } from 'src/services/user-preferences/models/definitions/user-preference-scope-type'
import { type UserPreferenceDefinition } from 'src/services/user-preferences/models/definitions/user-preference-definition'
import {
  makeBuilderFromDefinition,
  TestUserPreferenceDefinitionsFakeFactory,
  TestUserPreferenceId,
  type TestUserPreferencesFakeBuilder,
  TestUserPreferencesFakeFactory,
} from 'src/services/user-preferences/user-preferences-service.spec'

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
        const expectedScopedUserPreferences = { optedIn: definition?.isOptedInByDefault, data: definition?.defaultData }
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
        const testPreferenceData = { test: 'test-data' }
        const { preferenceId: builderPreferenceId } = getFirstDefinition(definitions)
        const updatingId = builderPreferenceId

        const userPreferencesBuilder: TestUserPreferencesFakeBuilder[] = [
          {
            scope: expectedScope,
            userPreferenceIds: [updatingId],
            optedIns: [testPreferenceValue],
            defaultDatas: [testPreferenceData],
          },
          { wantsRandom: true },
          { wantsRandom: true },
        ]
        userPreferences = TestUserPreferencesFakeFactory(
          userPreferencesBuilder,
        ) as UserPreferences<TestUserPreferenceId>

        // act
        const expectedPreferenceValue = !testPreferenceValue
        const expectedData = { test: 'test-data-2' }
        const actualUserPreferences = compositeUserPreferencesService.getUpdatedUserPreferenceStorageObject(
          updatingId,
          expectedPreferenceValue,
          expectedData,
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
        const expectedData = { test: 'test-data' }
        const updatingId = TestUserPreferenceId.Default

        userPreferences = {} satisfies UserPreferences<TestUserPreferenceId>

        // act
        const actualUserPreferences = compositeUserPreferencesService.getUpdatedUserPreferenceStorageObject(
          updatingId,
          expectedPreferenceValue,
          expectedData,
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
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const preferenceId = Object.keys(definitions)[0] as TestUserPreferenceId
  const definition = definitions[preferenceId]

  return { definition, preferenceId }
}
