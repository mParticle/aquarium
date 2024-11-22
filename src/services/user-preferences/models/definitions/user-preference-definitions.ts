import { type UserPreferenceDefinition } from './user-preference-definition'

export type UserPreferenceDefinitions<UserPreferenceId extends PropertyKey, T> = {
  [Id in UserPreferenceId]?: UserPreferenceDefinition<T>
}
