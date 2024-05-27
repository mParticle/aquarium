import { type UserPreferenceScopeType } from './user-preference-scope-type'

export interface UserPreferenceDefinition<Metadata = unknown> {
  isOptedInByDefault: boolean
  allowedScope: UserPreferenceScopeType
  metadata?: Metadata
}
