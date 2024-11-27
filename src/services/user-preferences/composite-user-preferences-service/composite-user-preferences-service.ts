import { UserPreferenceScopeType } from 'src/services/user-preferences/models/definitions'
import {
  USER_PREFERENCE_SCOPE_SEPARATOR,
  UserPreferenceGlobalScope,
  type UserPreferenceScope,
} from 'src/services/user-preferences/models/storage-models'
import cloneDeep from 'lodash/cloneDeep'
import {
  type UserPreferenceDefinition,
  type UserPreferenceDefinitions,
  type UserPreferencesPerScope,
} from '../user-preferences-service'

export class CompositeUserPreferencesService<T extends Record<string, unknown>> {
  public getScopedUserPreferences(
    userPreferencesPerScope: UserPreferencesPerScope<T>,
    currentScope: UserPreferenceScope,
    definitions: UserPreferenceDefinitions<T>,
  ): T {
    const entriesByIdAndUserPreference = (Object.keys(definitions) as Array<keyof T>).map(key => {
      const definition = definitions[key]
      return this.createUserPreferenceEntryFromDefinition(userPreferencesPerScope, currentScope, key, definition)
    })

    const composite: T = {} as unknown as T

    for (const [key, value] of entriesByIdAndUserPreference) {
      composite[key] = value
    }

    return composite
  }

  public getUpdatedUserPreferenceStorageObject<TKey extends keyof T>(
    userPreferenceKey: TKey,
    value: T[TKey],
    currentScope: UserPreferenceScope,
    currentPreferences: UserPreferencesPerScope<T>,
    allowedScope: UserPreferenceScopeType,
  ): UserPreferencesPerScope<T> {
    const userPreferencesToUpdate: UserPreferencesPerScope<T> = currentPreferences ? cloneDeep(currentPreferences) : {}

    const effectiveScope = this.getEffectiveScope(currentScope, allowedScope)

    const scopedUserPreferences: T = userPreferencesToUpdate[effectiveScope] ?? ({} as unknown as T)

    scopedUserPreferences[userPreferenceKey] = value

    userPreferencesToUpdate[effectiveScope] = scopedUserPreferences

    return userPreferencesToUpdate
  }

  private createUserPreferenceEntryFromDefinition<TKey extends keyof T, TValue extends T[TKey]>(
    userPreferencesPerScope: UserPreferencesPerScope<T>,
    currentScope: UserPreferenceScope,
    userPreferenceKey: TKey,
    definition: UserPreferenceDefinition<TValue>,
  ): [TKey, TValue] {
    if (!userPreferencesPerScope) {
      return [userPreferenceKey, definition.defaultValue]
    }

    const effectiveScope = this.getEffectiveScope(currentScope, definition.allowedScope)

    const scopedUserPreferences = userPreferencesPerScope[effectiveScope]

    const valueForCurrentScope = scopedUserPreferences?.[userPreferenceKey]

    const value = valueForCurrentScope ?? definition.defaultValue

    return [userPreferenceKey, value as TValue]
  }

  private getEffectiveScope(
    currentScope: UserPreferenceScope,
    allowedScope: UserPreferenceScopeType,
  ): UserPreferenceScope {
    if (allowedScope === null) throw new Error('ArgumentError | An allowed scope must be provided.')

    if (allowedScope === UserPreferenceScopeType.Global) return UserPreferenceGlobalScope

    let scopeLength = 0
    switch (allowedScope) {
      case UserPreferenceScopeType.LevelOneScope:
        scopeLength = 1
        break
      case UserPreferenceScopeType.LevelTwoScope:
        scopeLength = 2
        break
      case UserPreferenceScopeType.LevelThreeScope:
        scopeLength = 3
        break
      default:
        throw new Error('ArgumentError | An invalid allowed scope was provided.')
    }

    const currenScopeParts = currentScope.split(USER_PREFERENCE_SCOPE_SEPARATOR)

    currenScopeParts.length = scopeLength // Truncating scope parts that are too granular for the allowed scope

    return currenScopeParts.join(USER_PREFERENCE_SCOPE_SEPARATOR) as UserPreferenceScope
  }
}
