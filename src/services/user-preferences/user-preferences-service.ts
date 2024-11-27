import { type UserPreferenceScopeType } from 'src/services/user-preferences/models/definitions'
import { type UserPreferenceScope } from 'src/services/user-preferences/models/storage-models'
import * as Cookies from 'src/utils/Cookies'
import { type CookieOptions } from 'src/utils/Cookies'
import { CompositeUserPreferencesService } from './composite-user-preferences-service'

export type UserPreferenceDefinition<T> = {
  allowedScope: UserPreferenceScopeType
  defaultValue: T
}

export type UserPreferenceDefinitions<T> = {
  [P in keyof T]: UserPreferenceDefinition<T[P]>
}

export type UserPreferencesPerScope<T> = {
  [K in UserPreferenceScope]?: T
}

export class UserPreferencesService<T extends Record<string, unknown>> {
  private preferences!: T
  private readonly compositeUserPreferencesService: CompositeUserPreferencesService<T>
  constructor(
    private readonly definitions: UserPreferenceDefinitions<T>,
    private readonly currentScope: UserPreferenceScope,
    private readonly cookieOptions: CookieOptions & { key: string },
    private readonly onUpdate?: (resolvedPreferences: T) => void,
  ) {
    this.compositeUserPreferencesService = new CompositeUserPreferencesService<T>()
  }

  public async getPreference<TKey extends keyof T, TValue extends T[TKey]>(key: TKey): Promise<TValue> {
    const userPreference = this.preferences[key]

    if (!userPreference) await Promise.reject(new Error(`Invalid Operation. A user preference could not be found.`))

    return userPreference as TValue
  }

  public async setPreference<TKey extends keyof T, TValue extends T[TKey]>(key: TKey, value: TValue): Promise<void> {
    const currentStoredPreferences = await this.getStoredPreferences()

    const storedPreferences = this.compositeUserPreferencesService.getUpdatedUserPreferenceStorageObject(
      key,
      value,
      this.currentScope,
      currentStoredPreferences,
      this.definitions[key].allowedScope,
    )

    await this.setStoredPreferences(storedPreferences)

    this.preferences = this.compositeUserPreferencesService.getScopedUserPreferences(
      storedPreferences,
      this.currentScope,
      this.definitions,
    )

    this.onUpdate?.(this.preferences)
  }

  public async init(): Promise<void> {
    const storedPreferences = await this.getStoredPreferences()
    this.preferences = this.compositeUserPreferencesService.getScopedUserPreferences(
      storedPreferences,
      this.currentScope,
      this.definitions,
    )

    this.onUpdate?.(this.preferences)
  }

  private async getStoredPreferences(): Promise<UserPreferencesPerScope<T>> {
    return await Promise.resolve(Cookies.getObject(this.cookieOptions.key) ?? {})
  }

  private async setStoredPreferences(storedPreferences: UserPreferencesPerScope<T>): Promise<void> {
    Cookies.putObject(this.cookieOptions.key, storedPreferences, this.cookieOptions)

    await Promise.resolve()
  }
}
