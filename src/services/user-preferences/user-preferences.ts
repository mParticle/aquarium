/* eslint-disable @typescript-eslint/no-extraneous-class,no-unused-vars,@typescript-eslint/no-unused-vars */
import { type UserPreferences } from 'src/services/user-preferences/models/storage-models/user-preferences'
import { type CompositeUserPreferences } from 'src/services/user-preferences/models/user-preferences/composite-user-preferences'
import { type UserPreferenceScope } from 'src/services/user-preferences/models/storage-models/user-preference-scope'
import { type UserPreferenceDefinitions } from 'src/services/user-preferences/models/definitions/user-preference-definitions'
import { type CompositeUserPreferencesService } from 'src/services/user-preferences/composite-user-preferences-service'
import * as Cookies from 'src/utils/Cookies'
import { type CookieOptions } from 'src/utils/Cookies'

export class UserPreferencesService<TUserPreferenceId extends PropertyKey> {
  public preferences!: CompositeUserPreferences<TUserPreferenceId>

  constructor(
    private readonly definitions: UserPreferenceDefinitions<TUserPreferenceId>,
    private readonly compositeUserPreferencesService: CompositeUserPreferencesService<TUserPreferenceId>,
    private readonly currentScope: UserPreferenceScope,
    private readonly cookieOptions: CookieOptions & { key: string },
    private readonly onUpdate?: (resolvedPreferences: CompositeUserPreferences<TUserPreferenceId>) => void,
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

  /** There is no type guarantee on the data retrieved */
  public async getData(userPreferenceId: TUserPreferenceId): Promise<Record<string, unknown> | undefined> {
    const userPreference = this.preferences[userPreferenceId]

    if (!userPreference) await Promise.reject(new Error(`Invalid Operation. A user preference could not be found.`))

    return userPreference.data as Record<string, unknown>
  }

  public async isOptedIn(userPreferenceId: TUserPreferenceId): Promise<boolean | undefined> {
    const userPreference = this.preferences[userPreferenceId]

    if (!userPreference) await Promise.reject(new Error(`Invalid Operation. A user preference could not be found.`))

    return userPreference.optedIn
  }

  public async setPreference(
    userPreferenceId: TUserPreferenceId,
    isOptedIn: boolean,
    data?: Record<string, unknown>,
  ): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const { allowedScope } = this.definitions[userPreferenceId]

    const currentStoredPreferences = Cookies.getObject(this.cookieOptions.key)

    const storedPreferences = this.compositeUserPreferencesService.getUpdatedUserPreferenceStorageObject(
      userPreferenceId,
      isOptedIn,
      data,
      this.currentScope,
      currentStoredPreferences as unknown as UserPreferences<TUserPreferenceId>,
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

  private async getStoredPreferences(): Promise<UserPreferences<TUserPreferenceId>> {
    return await Promise.resolve(Cookies.getObject(this.cookieOptions.key) ?? {})
  }

  private async setStoredPreferences(storedPreferences: UserPreferences<TUserPreferenceId>): Promise<void> {
    Cookies.putObject(this.cookieOptions.key, storedPreferences, this.cookieOptions)

    await Promise.resolve()
  }
}
