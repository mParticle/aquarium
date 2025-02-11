import { generateUniversalHash } from "./utils";
import { UserPreferencesService } from "src/services/user-preferences";
import { UserPreferenceDefinitions, UserPreferenceScopeType } from "src/services/user-preferences/models/definitions";
import { UserPreferenceScope } from "src/services/user-preferences/models/storage-models";

export let userPreferences: Preferences;

export enum mParticleUserPreferenceIds {
    IsJourneysUnified = "is-journeys-unified",
}

type Preferences = {
    [mParticleUserPreferenceIds.IsJourneysUnified]: {
        optedIn: boolean 
    }
}

const userPreferenceDefinitions : UserPreferenceDefinitions<Preferences> = {
    [mParticleUserPreferenceIds.IsJourneysUnified]: {
        defaultValue: { optedIn: false },
        allowedScope: UserPreferenceScopeType.LevelTwoScope,
    },
}

export async function init(): Promise<void> {
    const cookieOptions = {
        permanent: true,
        domain: getCookieDomain(),
        path: '/',
        key: getCookieKey(),
    } as const;
    
    const userPreferencesService = new UserPreferencesService<Preferences>(
        userPreferenceDefinitions,
        getCurrentScope(),
        cookieOptions,
        (resolvedPreferences) => {
            userPreferences = resolvedPreferences;
        }
    );

    await userPreferencesService.init();
}

function getCurrentScope() {
    const { orgId, accountId, workspaceId } = window.mParticleConfig;
    return `${orgId}-${accountId}-${workspaceId}` as UserPreferenceScope;
}

function getCookieKey() {
    const email = window.mParticleConfig.email;
    return `mp_up_${email ? generateUniversalHash(email) : ""}`
}

function getCookieDomain(){
    const { isDeveloperMode, unitTestMode } = window.mParticleConfig;

    // cookies with a domain set doesn't work well in JSDOM so we need to disable it for unit tests
    const shouldUseCookieDomain = !isDeveloperMode && !unitTestMode;
    
    return shouldUseCookieDomain ? "mparticle.com" : undefined;
}

