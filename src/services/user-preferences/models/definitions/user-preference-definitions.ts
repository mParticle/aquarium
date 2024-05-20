import { type UserPreferenceDefinition } from './user-preference-definition'

export type UserPreferenceDefinitions<UserPreferenceId extends PropertyKey> = {
  [Id in UserPreferenceId]?: UserPreferenceDefinition
}
