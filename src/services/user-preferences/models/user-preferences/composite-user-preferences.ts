import { type UserPreference } from '../storage-models/user-preference'

export type CompositeUserPreferences<UserPreferenceId extends PropertyKey, Metadata = undefined> = {
  [Id in UserPreferenceId]: UserPreference<Metadata>
}
