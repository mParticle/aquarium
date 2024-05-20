export const USER_PREFERENCE_SCOPE_SEPARATOR = '-'
export const UserPreferenceGlobalScope = 'global' as const

type UserPreferenceGlobalScopeType = `global`
type UserPreferenceLevelOneScopeType = `${number}` // Any string that can be coerced into a number
type UserPreferenceLevelTwoScopeType = `${number}-${number}`
type UserPreferenceLevelThreeScopeType = `${number}-${number}-${number}`

export type UserPreferenceScope =
  | UserPreferenceLevelOneScopeType
  | UserPreferenceLevelTwoScopeType
  | UserPreferenceLevelThreeScopeType
  | UserPreferenceGlobalScopeType
