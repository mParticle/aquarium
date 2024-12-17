import { type UserPreferenceScope } from '../storage-models'

export type UserPreferencesPerScope<T> = {
  [K in UserPreferenceScope]?: T
}
