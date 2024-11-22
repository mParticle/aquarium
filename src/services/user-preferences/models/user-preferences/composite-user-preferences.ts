import { type UserPreference } from '../storage-models/user-preference'

export type CompositeUserPreferences<UserPreferenceId extends PropertyKey, T> = {
  [Id in UserPreferenceId]: UserPreference<T>
}
