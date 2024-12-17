import { type UserPreferenceScopeType } from './user-preference-scope-type'

export type UserPreferenceDefinition<T> = {
  allowedScope: UserPreferenceScopeType
  defaultValue: T
}
