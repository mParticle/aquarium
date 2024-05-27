/* eslint-disable @typescript-eslint/no-use-before-define */
import * as Cookies from '../../utils/Cookies'

import { afterEach, describe, expect, it } from 'vitest'
import { UserPreferencesService } from 'src/services/user-preferences/user-preferences'
import { type UserPreferenceScope } from 'src/services/user-preferences/models/storage-models/user-preference-scope'
import { type UserPreferences } from 'src/services/user-preferences/models/storage-models/user-preferences'
import { type UserPreferenceDefinitions } from 'src/services/user-preferences/models/definitions/user-preference-definitions'
import { CompositeUserPreferencesService } from 'src/services/user-preferences/composite-user-preferences-service'
import { UserPreferenceScopeType } from 'src/services/user-preferences/models/definitions/user-preference-scope-type'
import { type Sync } from 'factory.ts'
import { faker } from '@faker-js/faker'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const log = (value: unknown) => {
  console.log(JSON.stringify(value, null, '  '))
}

type MetadataType = { test: string; testNumber: number }

describe('When testing the User Preferences Service', () => {
  afterEach(() => {
    Cookies.put(cookieKey, '')
  })

  let userPreferencesService: UserPreferencesService<TestUserPreferenceId>
  let userPreferencesServiceWithMetadata: UserPreferencesService<TestUserPreferenceId>
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

  describe.skip('and reading the data', () => {
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
      // arrange
      definitions = TestUserPreferenceDefinitionsFakeFactory() as UserPreferenceDefinitions<TestUserPreferenceId>

      const someScope = '1'
      setupPreferencesWithScope(definitions, someScope)

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

  describe.skip('and updating preferences', () => {
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

  describe('and using metadata', () => {
    it('it should have a metadata property in preferences that use it', () => {})

    it('it should be able to update metadata from preferences', () => {})

    it('it should be able to handle nested objects in metadata properties', () => {})

    // it('it should be able to handle multiple metadata types', () => {
    //   const metadataCookieKey = 'mp_u_p_meta'
    //
    //   type MetadataType1 = {
    //     type: 1
    //     data: 'data'
    //   }
    //
    //   type MetadataType2 = {
    //     type: 2
    //     otherData: 'other-data'
    //   }
    //
    //   const metadataDefinitions = {
    //     [TestUserPreferenceId.MetadataPreference]: {
    //       allowedScope: UserPreferenceScopeType.Global,
    //       isOptedInByDefault: false,
    //       metadata: {
    //         type: 1,
    //         data: 'data',
    //       } satisfies MetadataType1,
    //     },
    //     [TestUserPreferenceId.Default]: {
    //       allowedScope: UserPreferenceScopeType.LevelOneScope,
    //       isOptedInByDefault: false,
    //       metadata: {
    //         type: 2,
    //         otherData: 'other-data',
    //       } satisfies MetadataType2,
    //     },
    //   }
    //
    //   const scopedPreference = makeBuilderFromDefinition<MetadataType1>(metadataDefinitions, 'global')
    // })

    it('should work', async () => {
      const metadataCookieKey = 'mp_u_p_meta'

      type MetadataType = Record<TestUserPreferenceId, unknown>

      interface MetadataTypes extends MetadataType {
        [TestUserPreferenceId.MetadataPreference]: {
          type: 1
          data: string
        }
        [TestUserPreferenceId.OtherMetadataPreference]: {
          type: 2
          otherData: string
        }
      }

      // const metadataDefaultValues: MetadataTypes = {
      //   [TestUserPreferenceId.MetadataPreference]: {
      //     type: 1,
      //     data: 'data',
      //   },
      //   [TestUserPreferenceId.OtherMetadataPreference]: {
      //     type: 2,
      //     otherData: 'other-data',
      //   },
      // }

      const metadataDefinitions: UserPreferenceDefinitions<TestUserPreferenceId> = {
        [TestUserPreferenceId.MetadataPreference]: {
          allowedScope: UserPreferenceScopeType.Global,
          isOptedInByDefault: false,
          metadata: {
            type: 1,
            data: 'data',
          },
        },
        [TestUserPreferenceId.OtherMetadataPreference]: {
          allowedScope: UserPreferenceScopeType.LevelOneScope,
          isOptedInByDefault: false,
          metadata: {
            type: 2,
            otherData: 'other-data',
          },
        },
      }

      const scopedPreference = makeBuilderFromDefinition<MetadataType>(metadataDefinitions, 'global')

      const metadataUserPreferences = TestUserPreferencesFakeFactory<MetadataType>([
        scopedPreference,
      ]) as UserPreferences<TestUserPreferenceId, MetadataType>

      console.log('metadataUserPreferences')

      Cookies.putObject(cookieKey, metadataUserPreferences)

      const metadataCompositeUserPreferenceService = new CompositeUserPreferencesService<
        TestUserPreferenceId,
        MetadataType
      >()

      const metadataUserPreferencesService = new UserPreferencesService<TestUserPreferenceId, MetadataType>(
        metadataDefinitions,
        metadataCompositeUserPreferenceService,
        metadataCookieKey,
        'global',
        () => new Date(),
      )

      await metadataUserPreferencesService.init()

      const actualMetadata = await metadataUserPreferencesService.getMetadata(TestUserPreferenceId.MetadataPreference)
      console.log('actualMetadata')
      log(actualMetadata)

      expect(actualMetadata).toEqual(metadata)

      await metadataUserPreferencesService.setPreference(TestUserPreferenceId.MetadataPreference, true, {
        test: 'changed-test',
        testNumber: 7,
      })

      const newOptedIn = await metadataUserPreferencesService.isOptedIn(TestUserPreferenceId.MetadataPreference)
      const newMetadata = await metadataUserPreferencesService.getMetadata(TestUserPreferenceId.MetadataPreference)

      expect(newOptedIn).toBe(true)
      expect(newMetadata).toEqual({ test: 'changed-test', testNumber: 7 })
    })
  })
})

export enum TestUserPreferenceId {
  Default = 'default-id',
  PreferenceOne = 'preference-one',
  MetadataPreference = 'metadata-preference',
  OtherMetadataPreference = 'other-metadata-preference',
}

export function TestUserPreferenceDefinitionsFakeFactory(
  config?: Array<{
    id: TestUserPreferenceId
    isOptedInByDefault?: boolean
    allowedScope?: UserPreferenceScopeType
    metadata?: MetadataType
  }>,
): Sync.Builder<
  UserPreferenceDefinitions<TestUserPreferenceId, MetadataType>,
  keyof UserPreferenceDefinitions<TestUserPreferenceId, MetadataType>
> {
  if (!config) {
    config = Object.values(TestUserPreferenceId).map(id => ({ id }))
  }

  return config.reduce((definitions, { id, isOptedInByDefault, allowedScope, metadata }) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    definitions[id] = createDefinition({ isOptedInByDefault, allowedScope, metadata })

    return definitions
  }, {})
}

type Definition = {
  isOptedInByDefault?: boolean
  allowedScope?: UserPreferenceScopeType
  metadata?: MetadataType
}

function createDefinition({ isOptedInByDefault, allowedScope, metadata }: Definition = {}): Definition {
  const definition = {
    isOptedInByDefault: isOptedInByDefault ?? faker.datatype.boolean(),
    allowedScope: allowedScope ?? faker.helpers.enumValue(UserPreferenceScopeType),
  }

  if (!metadata) return definition

  return {
    ...definition,
    metadata,
  }
}

export interface TestUserPreferencesFakeBuilder<Metadata = undefined> {
  wantsRandom?: boolean
  scope?: UserPreferenceScope
  userPreferenceIds?: TestUserPreferenceId[]
  optedIns?: boolean[]
  metadatas?: Array<Metadata | undefined>
}

export function makeBuilderFromDefinition<Metadata = undefined>(
  definitions: UserPreferenceDefinitions<TestUserPreferenceId, Metadata>,
  scope?: UserPreferenceScope,
): TestUserPreferencesFakeBuilder<Metadata> {
  return {
    scope: scope ?? getRandomScope({ excludeGlobal: true }),
    userPreferenceIds: Object.keys(definitions) as TestUserPreferenceId[],
    optedIns: Object.values(definitions).map(({ isOptedInByDefault }) => isOptedInByDefault),
    metadatas: Object.values(definitions).map(({ metadata }) => metadata),
  }
}

export function TestUserPreferencesFakeFactory<Metadata = undefined>(
  scopes: Array<TestUserPreferencesFakeBuilder<Metadata>> = [],
): Sync.Builder<
  UserPreferences<TestUserPreferenceId, Metadata>,
  keyof UserPreferences<TestUserPreferenceId, Metadata>
> {
  return scopes.reduce((scopedPreferences, { wantsRandom = false, scope, userPreferenceIds, optedIns, metadatas }) => {
    const effectiveScope = scope ?? getRandomScope({ excludeGlobal: true })
    if (wantsRandom) {
      const numberOfValues = faker.number.int({ max: Object.keys(TestUserPreferenceId).length, min: 1 })
      userPreferenceIds = Array.from({ length: numberOfValues }, () => faker.helpers.enumValue(TestUserPreferenceId))
      optedIns = Array.from({ length: numberOfValues }, () => faker.datatype.boolean())
      // metadatas = Array.from({ length: numberOfValues }, () => faker.helpers.objectValue({ test: 'metadata', testNumber: 1 }))
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    scopedPreferences[effectiveScope] = userPreferenceIds.reduce((preferences, userPreferenceId, index) => {
      const effectiveId = userPreferenceId ?? TestUserPreferenceId.Default
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const effectiveOptedInState = optedIns[index] ?? faker.datatype.boolean()

      const effectiveMetadata = metadatas?.[index]

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      preferences[effectiveId] = { optedIn: effectiveOptedInState, metadata: effectiveMetadata }

      return preferences
    }, {})

    return scopedPreferences
  }, {}) as UserPreferences<TestUserPreferenceId, Metadata>
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
