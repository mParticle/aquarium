/* eslint-disable @typescript-eslint/no-extraneous-class,no-unused-vars,@typescript-eslint/no-unused-vars */
import * as Cookies from '../../utils/Cookies'
import { type UserPreferences } from 'src/services/user-preferences/models/storage-models/user-preferences'
import { type CompositeUserPreferences } from 'src/services/user-preferences/models/user-preferences/composite-user-preferences'
import { type UserPreferenceDefinitions } from 'src/services/user-preferences/models/definitions/user-preference-definitions'
import { CompositeUserPreferencesService } from 'src/services/user-preferences/composite-user-preferences-service'
import { type UserPreferenceScope, UserPreferenceScopeType } from 'src/components'

enum Chaves {
  MinhaChave = 'minha-chave',
}

// eslint-disable-next-line @typescript-eslint/no-use-before-define
const service = new UserPreferencesService<Chaves>(
  {
    [Chaves.MinhaChave]: {
      isOptedInByDefault: false,
      allowedScope: UserPreferenceScopeType.Global,
    },
  },
  new CompositeUserPreferencesService<Chaves>(),
  'cookie-key',
  'global',
  () => new Date(),
  () => {
    console.log('')
  },
)

export class UserPreferencesService<TUserPreferenceId extends PropertyKey, Metadata = undefined> {
  public preferences!: CompositeUserPreferences<TUserPreferenceId, Metadata>

  constructor(
    private readonly definitions: UserPreferenceDefinitions<TUserPreferenceId, Metadata>,
    private readonly compositeUserPreferencesService: CompositeUserPreferencesService<TUserPreferenceId, Metadata>,
    private readonly cookieKey: string,
    private readonly currentScope: UserPreferenceScope,
    public dateFormatter: () => Date,
    private readonly onUpdate?: (resolvedPreferences: CompositeUserPreferences<TUserPreferenceId, Metadata>) => void,
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

  public async isOptedIn(userPreferenceId: TUserPreferenceId): Promise<boolean | undefined> {
    const userPreference = this.preferences[userPreferenceId]

    if (!userPreference) await Promise.reject(new Error(`Invalid Operation. A user preference could not be found.`))

    return userPreference.optedIn
  }

  public async getMetadata(userPreferenceId: TUserPreferenceId): Promise<Metadata | undefined> {
    console.log(userPreferenceId)
    const { metadata } = this.preferences[userPreferenceId]

    return metadata
  }

  public async setPreference(
    userPreferenceId: TUserPreferenceId,
    isOptedIn: boolean,
    metadata?: Metadata,
  ): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const { allowedScope } = this.definitions[userPreferenceId]

    const currentStoredPreferences = Cookies.getObject(this.cookieKey)

    const storedPreferences = this.compositeUserPreferencesService.getUpdatedUserPreferenceStorageObject(
      userPreferenceId,
      isOptedIn,
      this.currentScope,
      currentStoredPreferences as unknown as UserPreferences<TUserPreferenceId, Metadata>,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      allowedScope,
      metadata,
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

  private async getStoredPreferences(): Promise<UserPreferences<TUserPreferenceId, Metadata>> {
    return await Promise.resolve(Cookies.getObject(this.cookieKey) ?? {})
  }

  private async setStoredPreferences(storedPreferences: UserPreferences<TUserPreferenceId, Metadata>): Promise<void> {
    Cookies.putObject(this.cookieKey, storedPreferences, {
      expires: this.dateFormatter(),
      path: '/',
      domain: 'mparticle.com',
    })

    await Promise.resolve()
  }
}
