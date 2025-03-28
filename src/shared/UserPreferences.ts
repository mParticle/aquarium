import { Utils } from './Utils'
import { UserPreferencesService } from 'src/services/user-preferences'
import {
  type UserPreferenceDefinitions,
  UserPreferenceScopeType,
} from 'src/services/user-preferences/models/definitions'
import { type UserPreferenceScope } from 'src/services/user-preferences/models/storage-models'

export let userPreferences: Preferences

export enum mParticleUserPreferenceIds {
  IsSegmentationNewExperience = 'is-on-temporarily-unified-experience',
}

type Preferences = {
  [mParticleUserPreferenceIds.IsSegmentationNewExperience]: {
    optedIn: boolean
  }
}

const userPreferenceDefinitions: UserPreferenceDefinitions<Preferences> = {
  [mParticleUserPreferenceIds.IsSegmentationNewExperience]: {
    defaultValue: { optedIn: true },
    allowedScope: UserPreferenceScopeType.Global,
  },
}

export async function initializeUserPreferences(): Promise<void> {
  const cookieOptions = {
    permanent: true,
    domain: getCookieDomain(),
    path: '/',
    key: getCookieKey(),
  } as const

  const userPreferencesService = new UserPreferencesService<Preferences>(
    userPreferenceDefinitions,
    getCurrentScope(),
    cookieOptions,
    resolvedPreferences => {
      userPreferences = resolvedPreferences
    },
  )

  await userPreferencesService.init()
}

function getCurrentScope() {
  const { orgId, accountId, workspaceId } = window.mParticleConfig
  return `${orgId}-${accountId}-${workspaceId}` as UserPreferenceScope
}

function getCookieKey() {
  const email = window.mParticleConfig.email
  return `mp_up_${email ? Utils.generateUniversalHash(email) : ''}`
}

function getCookieDomain() {
  const { isDeveloperMode, unitTestMode } = window.mParticleConfig

  // cookies with a domain set doesn't work well in JSDOM so we need to disable it for unit tests
  const shouldUseCookieDomain = !isDeveloperMode && !unitTestMode

  return shouldUseCookieDomain ? 'mparticle.com' : undefined
}
