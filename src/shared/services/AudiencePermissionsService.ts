import { AuthorizationsService } from './AuthorizationsService'
import { Operation } from '../Operation'
import { FeatureFlag, FeatureFlagsService } from './FeatureFlagsService'
import { mParticleUserPreferenceIds, userPreferences } from '../UserPreferences'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AudiencePermissionsService {
  public static isAudienceLeftNavVisible(): boolean {
    return (
      (this.canUserViewAudiences() && this.isAudienceEnabledAccountLevel()) || !this.isAudienceEnabledAccountLevel()
    )
  }

  public static isAudienceEnabledAccountLevel(): boolean {
    return !window.mParticleConfig.accountLimits.isAudienceDisabled
  }

  public static isAudienceRealtimeEnabled(): boolean {
    return window.mParticleConfig.organizationPolicy.uiEnableAudiencesRealTime && this.isAudienceEnabledAccountLevel()
  }

  public static canUserViewAudiences(): boolean {
    return AuthorizationsService.isAuthorized(Operation.AUDIENCE_VIEW)
  }

  public static isOfflineAudienceEnabled(): boolean {
    return window.mParticleConfig.accountLimits.isOfflineAudienceEnabled
  }

  public static isPredictiveAudiencesPLDEnabled(): boolean {
    return !FeatureFlagsService.isEnabled(FeatureFlag.PredictiveAudiencesPLDDisabled)
  }

  public static isJourneysSharedRealTimeAudiencesEnabled(): boolean {
    const isJourneysEnabled =
      userPreferences[mParticleUserPreferenceIds.IsSegmentationNewExperience].optedIn ||
      !window.mParticleConfig.organizationPolicy.uiEnableAudiencesRealTime

    return (
      window.mParticleConfig.allowResourceSharing &&
      isJourneysEnabled &&
      !FeatureFlagsService.isEnabled(FeatureFlag.JourneysSharedRealTimeAudiencesDisabled)
    )
  }
}
