/* eslint-disable @typescript-eslint/no-use-before-define */
import * as Cookies from '../../utils/Cookies'

import { describe, afterEach, it, expect } from 'vitest'
import { UserPreferencesService } from 'src/services/user-preferences/user-preferences'
import { type UserPreferenceScope } from 'src/services/user-preferences/models/storage-models/user-preference-scope'
import { type UserPreferences } from 'src/services/user-preferences/models/storage-models/user-preferences'
import { type UserPreferenceDefinitions } from 'src/services/user-preferences/models/definitions/user-preference-definitions'
import { CompositeUserPreferencesService } from 'src/services/user-preferences/composite-user-preferences-service'
import { UserPreferenceScopeType } from 'src/services/user-preferences/models/definitions/user-preference-scope-type'
import { type Sync } from 'factory.ts'
import { faker } from '@faker-js/faker'

describe('When testing the User Preferences Service', () => {
  let userPreferencesService: UserPreferencesService<TestUserPreferenceId, TestUserPreference>
  const cookieKey = 'mp_u_p'
  const lowLevelScope: UserPreferenceScope = '1-1-1'
  let userPreferences: UserPreferences<TestUserPreferenceId, TestUserPreference>

  let definitions: UserPreferenceDefinitions<TestUserPreferenceId, TestUserPreference>
  const compositeUserPreferencesService = new CompositeUserPreferencesService<
    TestUserPreferenceId,
    TestUserPreference
  >()

  function setupPreferencesWithScope(
    definition: UserPreferenceDefinitions<TestUserPreferenceId, TestUserPreference>,
    scope: UserPreferenceScope | undefined,
  ): void {
    const scopedPreference = makeBuilderFromDefinition(definition, scope)
    userPreferences = TestUserPreferencesFakeFactory([scopedPreference]) as UserPreferences<
      TestUserPreferenceId,
      TestUserPreference
    >

    Cookies.putObject(cookieKey, userPreferences)
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
        { id: TestUserPreferenceId.Default, allowedScope },
        { id: TestUserPreferenceId.PreferenceOne, allowedScope },
      ]) as UserPreferenceDefinitions<TestUserPreferenceId, TestUserPreference>

      setupPreferencesWithScope(definitions, lowLevelScope)

      userPreferencesService = new UserPreferencesService<TestUserPreferenceId, TestUserPreference>(
        definitions,
        compositeUserPreferencesService,
        lowLevelScope,
        { key: cookieKey },
      )
      await userPreferencesService.init()

      const scopedPreferences = userPreferences[lowLevelScope]
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      for (const [id, preference] of Object.entries(scopedPreferences)) {
        // act
        const isOptedIn = await userPreferencesService.isOptedIn(id as TestUserPreferenceId)
        const data = await userPreferencesService.getData(id as TestUserPreferenceId)

        // assert
        const expectedIsOptedIn = preference.optedIn
        const expectedData = preference.data
        expect(isOptedIn).not.toBeNull()
        expect(isOptedIn).toBe(expectedIsOptedIn)
        expect(data).not.toBeNull()
        expect(data).toEqual(expectedData)
      }
    })

    it('it should read preferences when there are no scoped prefs', async () => {
      // arrange
      definitions = TestUserPreferenceDefinitionsFakeFactory() as UserPreferenceDefinitions<
        TestUserPreferenceId,
        TestUserPreference
      >

      const someScope = '1'
      setupPreferencesWithScope(definitions, someScope)

      const currentScope = '2'
      userPreferencesService = new UserPreferencesService<TestUserPreferenceId, TestUserPreference>(
        definitions,
        compositeUserPreferencesService,
        currentScope,
        { key: cookieKey },
      )
      await userPreferencesService.init()

      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      for (const [id, definition] of Object.entries(definitions)) {
        // act
        const isOptedIn = await userPreferencesService.isOptedIn(id as TestUserPreferenceId)
        const data = await userPreferencesService.getData(id as TestUserPreferenceId)

        // assert
        const expectedIsOptedIn = definition.isOptedInByDefault
        const expectedData = definition.defaultData
        expect(isOptedIn).not.toBeNull()
        expect(isOptedIn).toBe(expectedIsOptedIn)
        expect(data).not.toBeNull()
        expect(data).toEqual(expectedData)
      }
    })

    it("it should throw when the preference can't be found", async () => {
      // arrange
      definitions = TestUserPreferenceDefinitionsFakeFactory() as UserPreferenceDefinitions<
        TestUserPreferenceId,
        TestUserPreference
      >

      const someScope = '1'
      setupPreferencesWithScope(definitions, someScope)

      userPreferencesService = new UserPreferencesService<TestUserPreferenceId, TestUserPreference>(
        definitions,
        compositeUserPreferencesService,
        someScope,
        { key: cookieKey },
      )
      await userPreferencesService.init()

      // act
      const unknownId = 'unknown'
      const isOptedInDelegate = userPreferencesService.isOptedIn.bind(
        userPreferencesService,
        // @ts-expect-error - we are testing an incorrect usage
        unknownId,
      )
      const getDataDelegate = userPreferencesService.getData.bind(
        userPreferencesService,
        // @ts-expect-error - we are testing an incorrect usage
        unknownId,
      )

      // assert
      await expect(isOptedInDelegate).rejects.toThrow(`Invalid Operation. A user preference could not be found.`)
      await expect(getDataDelegate).rejects.toThrow(`Invalid Operation. A user preference could not be found.`)
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
        const testData = { test: 'test-data' }
        definitions = TestUserPreferenceDefinitionsFakeFactory([
          { id: userPreferenceId, allowedScope, isOptedInByDefault: testOptedInState, defaultData: testData },
        ]) as UserPreferenceDefinitions<TestUserPreferenceId, TestUserPreference>

        setupPreferencesWithScope(definitions, expectedScope as UserPreferenceScope)

        userPreferencesService = new UserPreferencesService<TestUserPreferenceId, TestUserPreference>(
          definitions,
          compositeUserPreferencesService,
          lowLevelScope,
          { key: cookieKey },
        )
        await userPreferencesService.init()

        // pre-assert
        const testState = await userPreferencesService.isOptedIn(userPreferenceId)
        expect(testState).toBe(testOptedInState)
        const testDataState = await userPreferencesService.getData(userPreferenceId)
        expect(testData).toEqual(testDataState)

        // act
        const expectedOptedInState = !testOptedInState
        const expectedDataState = { test: 'test-data-2' }

        await userPreferencesService.setPreference(userPreferenceId, expectedOptedInState, expectedDataState)

        // assert
        const actualState = await userPreferencesService.isOptedIn(userPreferenceId)
        expect(actualState).toBe(expectedOptedInState)
        const actualDataState = await userPreferencesService.getData(userPreferenceId)
        expect(actualDataState).toEqual(expectedDataState)
      },
    )

    it('it should be able to update a preferences when the preference does not exist', async () => {
      // arrange
      const userPreferenceId = TestUserPreferenceId.Default
      const allowedScope = UserPreferenceScopeType.LevelThreeScope
      const testOptedInState = true
      const testData = { test: 'test-data' }
      definitions = TestUserPreferenceDefinitionsFakeFactory([
        { id: userPreferenceId, allowedScope, isOptedInByDefault: testOptedInState, defaultData: testData },
      ]) as UserPreferenceDefinitions<TestUserPreferenceId, TestUserPreference>

      userPreferencesService = new UserPreferencesService<TestUserPreferenceId, TestUserPreference>(
        definitions,
        compositeUserPreferencesService,
        lowLevelScope,
        { key: cookieKey },
      )
      await userPreferencesService.init()

      // pre-assert
      const testState = await userPreferencesService.isOptedIn(userPreferenceId)
      expect(testState).toBe(testOptedInState)
      const testDataState = await userPreferencesService.getData(userPreferenceId)
      expect(testDataState).toEqual(testData)

      // act
      const expectedOptedInState = !testOptedInState
      const expectedDataState = { test: 'test-data-2' }
      await userPreferencesService.setPreference(userPreferenceId, expectedOptedInState, expectedDataState)

      // assert
      const actualState = await userPreferencesService.isOptedIn(userPreferenceId)
      expect(actualState).toBe(expectedOptedInState)
      const actualDataState = await userPreferencesService.getData(userPreferenceId)
      expect(actualDataState).toEqual(expectedDataState)
    })
  })
})

export enum TestUserPreferenceId {
  Default = 'default-id',
  PreferenceOne = 'preference-one',
}

export type TestUserPreference = {
  test: string
}

export function TestUserPreferenceDefinitionsFakeFactory(
  config?: Array<{
    id: TestUserPreferenceId
    isOptedInByDefault?: boolean
    defaultData?: any
    allowedScope?: UserPreferenceScopeType
  }>,
): Sync.Builder<
  UserPreferenceDefinitions<TestUserPreferenceId, TestUserPreference>,
  keyof UserPreferenceDefinitions<TestUserPreferenceId, TestUserPreference>
> {
  if (!config) {
    config = Object.values(TestUserPreferenceId).map(id => ({ id }))
  }

  return config.reduce((definitions, { id, isOptedInByDefault, defaultData, allowedScope }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    definitions[id] = createDefinition({ isOptedInByDefault, defaultData, allowedScope })

    return definitions
  }, {})
}

type Definition = {
  isOptedInByDefault?: boolean
  defaultData?: any
  allowedScope?: UserPreferenceScopeType
}

function createDefinition({ isOptedInByDefault, defaultData, allowedScope }: Definition = {}): Definition {
  return {
    isOptedInByDefault: isOptedInByDefault ?? faker.datatype.boolean(),
    defaultData: defaultData ?? { test: faker.string.alpha({ length: 10 }) },
    allowedScope: allowedScope ?? faker.helpers.enumValue(UserPreferenceScopeType),
  }
}

export interface TestUserPreferencesFakeBuilder {
  wantsRandom?: boolean
  scope?: UserPreferenceScope
  userPreferenceIds?: TestUserPreferenceId[]
  optedIns?: boolean[]
  defaultDatas?: any[]
}

export function makeBuilderFromDefinition(
  definitions: UserPreferenceDefinitions<TestUserPreferenceId, TestUserPreference>,
  scope?: UserPreferenceScope,
): TestUserPreferencesFakeBuilder {
  return {
    scope: scope ?? getRandomScope({ excludeGlobal: true }),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    userPreferenceIds: Object.keys(definitions) as TestUserPreferenceId[],
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    optedIns: Object.values(definitions).map(({ isOptedInByDefault }) => isOptedInByDefault),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    defaultDatas: Object.values(definitions).map(({ defaultData }) => defaultData),
  }
}

export function TestUserPreferencesFakeFactory(
  scopes: TestUserPreferencesFakeBuilder[] = [],
): Sync.Builder<
  UserPreferences<TestUserPreferenceId, TestUserPreference>,
  keyof UserPreferences<TestUserPreferenceId, TestUserPreference>
> {
  return scopes.reduce(
    (scopedPreferences, { wantsRandom = false, scope, userPreferenceIds, optedIns, defaultDatas }) => {
      const effectiveScope = scope ?? getRandomScope({ excludeGlobal: true })
      const fakeData = (): { test: string } => ({ test: faker.string.alpha({ length: 10 }) })

      if (wantsRandom) {
        const numberOfValues = faker.number.int({ max: Object.keys(TestUserPreferenceId).length, min: 1 })
        userPreferenceIds = Array.from({ length: numberOfValues }, () => faker.helpers.enumValue(TestUserPreferenceId))
        optedIns = Array.from({ length: numberOfValues }, () => faker.datatype.boolean())
        defaultDatas = Array.from({ length: numberOfValues }, () => fakeData())
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      scopedPreferences[effectiveScope] = userPreferenceIds.reduce((preferences, userPreferenceId, index) => {
        const effectiveId = userPreferenceId ?? TestUserPreferenceId.Default
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const effectiveOptedInState = optedIns[index] ?? faker.datatype.boolean()
        const effectiveDataState = defaultDatas?.[index] ?? fakeData()

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        preferences[effectiveId] = { optedIn: effectiveOptedInState, data: effectiveDataState }

        return preferences
      }, {})

      return scopedPreferences
    },
    {},
  ) as UserPreferences<TestUserPreferenceId, TestUserPreference>
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
