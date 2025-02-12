import { AuthorizationsService } from "./AuthorizationsService";
import { Operation } from "../Operation";
import { FeatureFlag, FeatureFlagsService } from "./FeatureFlagsService";
import { mParticleUserPreferenceIds, userPreferences } from "../UserPreferences";

export class AudiencePermissionsService {
    public static isAudienceLookbackEnabled(): boolean {
        return !!window.mParticleConfig.accountLimits.audienceLookbackType;
    }

    public static isAudienceLookbackPromotional(): boolean {
        return (
            AudiencePermissionsService.isAudienceLookbackEnabled() &&
            window.mParticleConfig.accountLimits.audienceLookbackType
                ?.toLowerCase()
                ?.localeCompare("Promotional".toLowerCase()) === 0
        );
    }

    public static isAudienceLookbackUseable(): boolean {
        return (
            AudiencePermissionsService.isAudienceLookbackEnabled() &&
            window.mParticleConfig.accountLimits.audienceLookbackType
                ?.toLowerCase()
                ?.localeCompare("Useable".toLowerCase()) === 0
        );
    }

    public static isAudienceLeftNavVisible(): boolean {
        return (
            (this.canUserViewAudiences() && this.isAudienceEnabledAccountLevel()) ||
            !this.isAudienceEnabledAccountLevel()
        );
    }

    public static isAudienceEnabledAccountLevel(): boolean {
        return !window.mParticleConfig.accountLimits.isAudienceDisabled;
    }

    public static isAudienceEnabledOrganizationLevel(): boolean {
        return window.mParticleConfig.organizationPolicy?.isAudienceEnabled;
    }

    public static isAudienceRealtimeEnabled(): boolean {
        return (
            window.mParticleConfig.organizationPolicy.uiEnableAudiencesRealTime && this.isAudienceEnabledAccountLevel()
        );
    }

    public static isRealtimeCustomer(): boolean {
        return this.isAudienceEnabledAccountLevel() || this.isAudienceEnabledOrganizationLevel();
    }

    public static canUserViewAudiences(): boolean {
        return AuthorizationsService.isAuthorized(Operation.AUDIENCE_VIEW);
    }

    public static canUserActivateAudience(): boolean {
        return AuthorizationsService.isAuthorized(Operation.AUDIENCE_ACTIVATE);
    }

    public static isOfflineAudienceEnabled(): boolean {
        return window.mParticleConfig.accountLimits.isOfflineAudienceEnabled;
    }

    public static isMultiWorkspaceAudiencesDisabled(): boolean {
        return window.mParticleConfig.accountLimits.isMultiWorkspaceAudiencesDisabled;
    }

    public static canActivate(isAudienceLimitReached: boolean, isPublished: boolean): boolean {
        return (
            (!isAudienceLimitReached || isPublished) &&
            this.isAudienceEnabledAccountLevel() &&
            this.isAudienceEnabledOrganizationLevel() &&
            this.canUserActivateAudience()
        );
    }

    public static canUserCreateAudienceSubscription(): boolean {
        return AuthorizationsService.isAuthorized(Operation.AUDIENCE_SUBSCRIPTION_CREATE);
    }

    public static canUserDeleteAudienceSubscription(): boolean {
        return AuthorizationsService.isAuthorized(Operation.AUDIENCE_SUBSCRIPTION_DELETE);
    }

    public static canUserEditAudienceSubscription(): boolean {
        return AuthorizationsService.isAuthorized(Operation.AUDIENCE_SUBSCRIPTION_EDIT);
    }

    public static isPredictiveAudiencesEnabled(): boolean {
        return !FeatureFlagsService.isEnabled(FeatureFlag.PredictiveAudiencesDisabled);
    }

    public static isPredictiveAudiencesPLDEnabled(): boolean {
        return !FeatureFlagsService.isEnabled(FeatureFlag.PredictiveAudiencesPLDDisabled);
    }

    public static canUserCreateAudience(): boolean {
        return AuthorizationsService.isAuthorized(Operation.AUDIENCE_CREATE);
    }

    public static isJourneysSharedRealTimeAudiencesEnabled(): boolean {
        return (
            window.mParticleConfig.allowResourceSharing &&
            userPreferences[mParticleUserPreferenceIds.IsJourneysUnified].optedIn &&
            !FeatureFlagsService.isEnabled(FeatureFlag.JourneysSharedRealTimeAudiencesDisabled)
        );
    }
}
