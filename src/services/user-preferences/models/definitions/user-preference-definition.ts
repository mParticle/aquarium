import { type UserPreferenceScopeType } from './user-preference-scope-type'

export interface UserPreferenceDefinition {
  isOptedInByDefault: boolean
  allowedScope: UserPreferenceScopeType
  defaultData: unknown
}
