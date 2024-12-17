import { type UserPreferenceDefinition } from './user-preference-definition'

export type UserPreferenceDefinitions<T> = {
  [P in keyof T]: UserPreferenceDefinition<T[P]>
}
