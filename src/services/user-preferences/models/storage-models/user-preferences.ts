import { type UserPreferenceScope } from './user-preference-scope'
import { type UserPreference } from './user-preference'

export type UserPreferences<UserPreferenceId extends PropertyKey, Metadata = undefined> = {
  [K in UserPreferenceScope]?: { [Id in UserPreferenceId]: UserPreference<Metadata> }
}
