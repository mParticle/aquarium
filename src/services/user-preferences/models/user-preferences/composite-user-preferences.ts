import { type UserPreference } from '../storage-models/user-preference'

export type CompositeUserPreferences<UserPreferenceId extends PropertyKey> = {
  [Id in UserPreferenceId]: UserPreference
}
