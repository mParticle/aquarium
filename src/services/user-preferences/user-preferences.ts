/* eslint-disable @typescript-eslint/no-extraneous-class,no-unused-vars,@typescript-eslint/no-unused-vars */
import { type UserPreferences } from 'src/services/user-preferences/models/storage-models/user-preferences'
import { type CompositeUserPreferences } from 'src/services/user-preferences/models/user-preferences/composite-user-preferences'
import { type UserPreferenceScope } from 'src/services/user-preferences/models/storage-models/user-preference-scope'
import { type UserPreferenceDefinitions } from 'src/services/user-preferences/models/definitions/user-preference-definitions'
import { type CompositeUserPreferencesService } from 'src/services/user-preferences/composite-user-preferences-service'
import * as Cookies from 'src/utils/Cookies'
import { type CookieOptions } from 'src/utils/Cookies'

export class UserPreferencesService<TUserPreferenceId extends PropertyKey, T> {
  public preferences!: CompositeUserPreferences<TUserPreferenceId, T>

  constructor(
    private readonly definitions: UserPreferenceDefinitions<TUserPreferenceId, T>,
    private readonly compositeUserPreferencesService: CompositeUserPreferencesService<TUserPreferenceId, T>,
    private readonly currentScope: UserPreferenceScope,
    private readonly cookieOptions: CookieOptions & { key: string },
    private readonly onUpdate?: (resolvedPreferences: CompositeUserPreferences<TUserPreferenceId, T>) => void,
  ) {}

  public async init(): Promise<void> {
    const storedPreferences = await this.getStoredPreferences()

    this.preferences = this.compositeUserPreferencesService.getScopedUserPreferences(
      storedPreferences,
      this.currentScope,
      this.definitions,
    )

    this.onUpdate?.(this.preferences)
  }

  public async getData(userPreferenceId: TUserPreferenceId): Promise<T | undefined> {
    const userPreference = this.preferences[userPreferenceId]

    if (!userPreference) await Promise.reject(new Error(`Invalid Operation. A user preference could not be found.`))

    return userPreference.data
  }

  public async isOptedIn(userPreferenceId: TUserPreferenceId): Promise<boolean | undefined> {
    const userPreference = this.preferences[userPreferenceId]

    if (!userPreference) await Promise.reject(new Error(`Invalid Operation. A user preference could not be found.`))

    return userPreference.optedIn
  }

  // TODO: data should be generic
  public async setPreference(userPreferenceId: TUserPreferenceId, isOptedIn: boolean, data: T): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const { allowedScope } = this.definitions[userPreferenceId]

    const currentStoredPreferences = Cookies.getObject(this.cookieOptions.key)

    const storedPreferences = this.compositeUserPreferencesService.getUpdatedUserPreferenceStorageObject(
      userPreferenceId,
      isOptedIn,
      data,
      this.currentScope,
      currentStoredPreferences as unknown as UserPreferences<TUserPreferenceId, T>,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      allowedScope,
    )

    await this.setStoredPreferences(storedPreferences)

    this.preferences = this.compositeUserPreferencesService.getScopedUserPreferences(
      storedPreferences,
      this.currentScope,
      this.definitions,
    )

    this.onUpdate?.(this.preferences)

    // eslint-disable-next-line @typescript-eslint/return-await
    return Promise.resolve()
  }

  private async getStoredPreferences(): Promise<UserPreferences<TUserPreferenceId, T>> {
    return await Promise.resolve(Cookies.getObject(this.cookieOptions.key) ?? {})
  }

  private async setStoredPreferences(storedPreferences: UserPreferences<TUserPreferenceId, T>): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    Cookies.putObject(this.cookieOptions.key, storedPreferences, this.cookieOptions)

    await Promise.resolve()
  }
}
