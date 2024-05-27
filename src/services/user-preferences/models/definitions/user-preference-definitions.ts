// import { type UserPreferenceDefinition } from './user-preference-definition'

import { UserPreferenceScopeType } from 'src/services/user-preferences/models/definitions/user-preference-scope-type'

export interface UserPreferenceDefinition<Metadata = unknown> {
  isOptedInByDefault: boolean
  allowedScope: UserPreferenceScopeType
  metadata?: Metadata
}

export type UserPreferenceDefinitions<
  UserPreferenceId extends PropertyKey,
  Metadata extends Record<UserPreferenceId, unknown>,
> = {
  [Id in UserPreferenceId]?: UserPreferenceDefinition<Record<Id, Metadata>>
}

export interface Definition {
  isOptedInByDefault: boolean
  allowedScope: UserPreferenceScopeType
}

export type Definitions<
  PreferenceId extends PropertyKey,
  MetadataDefinitions extends Partial<Record<PreferenceId, any>>,
> = {
  [Id in PreferenceId]?: Definition & {
    metadata?: MetadataDefinitions[Id]
  }
}

enum MyPreferences {
  PreferenceWithMetadata = 'preference-with-metadata',
  PreferenteceWithComposedMetadata = 'preference-with-composed-metadata',
  PreferenceWithoutMetadata = 'preference-without-metadata',
}

type MetadataDefinitions = {
  [MyPreferences.PreferenceWithMetadata]: {
    someMetadata: string
  }
  [MyPreferences.PreferenteceWithComposedMetadata]: {
    someMetadata: string
    composed: {
      someOtherMetadata: number
    }
  }
}

const definitions: Definitions<MyPreferences, MetadataDefinitions> = {
  [MyPreferences.PreferenceWithMetadata]: {
    isOptedInByDefault: false,
    allowedScope: UserPreferenceScopeType.Global,
    metadata: {
      someMetadata: 'string',
    },
  },
  [MyPreferences.PreferenteceWithComposedMetadata]: {
    isOptedInByDefault: false,
    allowedScope: UserPreferenceScopeType.Global,
    metadata: {
      someMetadata: 'string',
      composed: {
        someOtherMetadata: 1,
      },
    },
  },
}
