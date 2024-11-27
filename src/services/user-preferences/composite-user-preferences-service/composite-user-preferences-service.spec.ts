import { describe, it, expect, beforeEach } from 'vitest'
import { CompositeUserPreferencesService } from 'src/services/user-preferences/composite-user-preferences-service'
import { type UserPreferenceScope } from 'src/services/user-preferences/models/storage-models/user-preference-scope'
import { UserPreferenceScopeType } from 'src/services/user-preferences/models/definitions/user-preference-scope-type'
import { type UserPreferenceDefinition } from 'src/services/user-preferences/models/definitions/user-preference-definition'
import {
  makeBuilderFromDefinition,
  type TestType,
  TestUserPreferenceDefinitionsFakeFactory,
  type TestUserPreferencesFakeBuilder,
  TestUserPreferencesFakeFactory,
} from 'src/services/user-preferences/user-preferences-service.spec'
import { type UserPreferenceDefinitions } from 'src/components'
import { type UserPreferencesPerScope } from '../models/definitions/user-preference-per-scope'

describe('When testing CompositeUserPreferencesService', () => {
  let compositeUserPreferencesService: CompositeUserPreferencesService<TestType>
  let userPreferences: UserPreferencesPerScope<TestType>
  let expectedScope: UserPreferenceScope
  let definitions: UserPreferenceDefinitions<TestType>

  beforeEach(() => {
    definitions = TestUserPreferenceDefinitionsFakeFactory() as UserPreferenceDefinitions<TestType>
    const prefsBuilder = makeBuilderFromDefinition(definitions)
    userPreferences = TestUserPreferencesFakeFactory([prefsBuilder]) as UserPreferencesPerScope<TestType>
    expectedScope = Object.keys(userPreferences)[0] as UserPreferenceScope

    compositeUserPreferencesService = new CompositeUserPreferencesService<TestType>()
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
        const definition = definitions[preferenceId as keyof TestType]
        const expectedScopedUserPreferences = definition.defaultValue
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
        const { preferenceId: builderPreferenceId } = getFirstDefinition(definitions)
        const updatingId = builderPreferenceId

        const userPreferencesBuilder: TestUserPreferencesFakeBuilder[] = [
          {
            scope: expectedScope,
            keys: [updatingId],
            defaultValues: [{ isOptedIn: true }],
          },
          { wantsRandom: true },
          { wantsRandom: true },
        ]
        userPreferences = TestUserPreferencesFakeFactory(userPreferencesBuilder) as UserPreferencesPerScope<TestType>
        definitions = TestUserPreferenceDefinitionsFakeFactory([
          {
            id: 'Default',
            isOptedInByDefault: true,
            allowedScope,
          },
        ]) as UserPreferenceDefinitions<TestType>

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
        const testPreferenceValues = { isOptedIn: true }
        const { preferenceId: builderPreferenceId } = getFirstDefinition(definitions)
        const updatingId = builderPreferenceId

        const userPreferencesBuilder: TestUserPreferencesFakeBuilder[] = [
          {
            scope: expectedScope,
            keys: [updatingId],
            defaultValues: [testPreferenceValues],
          },
          { wantsRandom: true },
          { wantsRandom: true },
        ]
        userPreferences = TestUserPreferencesFakeFactory(userPreferencesBuilder) as UserPreferencesPerScope<TestType>

        // act
        const expectedValues = { isOptedIn: false }
        const actualUserPreferences = compositeUserPreferencesService.getUpdatedUserPreferenceStorageObject(
          updatingId,
          expectedValues,
          currentScope,
          userPreferences,
          allowedScope,
        )

        // assert
        const actualUserPreference = actualUserPreferences?.[expectedScope]?.[updatingId]
        expect(actualUserPreference?.isOptedIn).toEqual(expectedValues.isOptedIn)
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
        const expectedValues = { isOptedIn: true }
        const { preferenceId: builderPreferenceId } = getFirstDefinition(definitions)
        const updatingId = builderPreferenceId

        userPreferences = {} satisfies UserPreferencesPerScope<TestType>

        // act
        const actualUserPreferences = compositeUserPreferencesService.getUpdatedUserPreferenceStorageObject(
          updatingId,
          expectedValues,
          expectedScope,
          userPreferences,
          allowedScope,
        )

        // assert
        const actualUserPreference = actualUserPreferences?.[expectedScope]?.[updatingId]
        expect(actualUserPreference?.isOptedIn).toEqual(expectedValues.isOptedIn)
        expect(actualUserPreference).not.toBe(userPreferences)
      },
    )
  })
})

function getFirstDefinition(definitions: UserPreferenceDefinitions<TestType>): {
  definition: UserPreferenceDefinition<TestType>
  preferenceId: keyof TestType
} {
  const preferenceId = Object.keys(definitions)[0] as keyof TestType
  const definition = definitions[preferenceId] as unknown as UserPreferenceDefinition<TestType>

  return { definition, preferenceId }
}
