import { type UserPreferenceScopeType } from './user-preference-scope-type'

export interface UserPreferenceDefinition<T> {
  isOptedInByDefault: boolean
  allowedScope: UserPreferenceScopeType
  defaultData: T
}
