import { BaseRoutesAuthorizations } from './base-routes-authorizations'
import { Suite } from '../../Suite'
import { Paths } from '../../Paths'
import { Operation } from '../../Operation'
import { AuthorizationsService } from '../AuthorizationsService'
import { AudiencePermissionsService } from '../AudiencePermissionsService'
import { mParticleUserPreferenceIds, userPreferences } from '../../UserPreferences'

export class SegmentationAuthorizations extends BaseRoutesAuthorizations {
  protected suite: Suite = Suite.Segmentation

  protected getAuthorizations(): Record<string, boolean> {
    const routes: Record<string, boolean> = {
      [Paths.Segmentation.Audiences.Root]: true,
      [Paths.Segmentation.Audiences.RealTime]: this.canViewRealTimeAudiences(),
      [Paths.Segmentation.Audiences.Standard]: this.canViewStandardAudiences(),
      [Paths.Segmentation.Audiences.P2P]: this.canViewAudiencesShare(),
      [Paths.Segmentation.Audiences.Received]: this.canViewAudiencesShare(),
      [Paths.Segmentation.Audiences.Shared]: this.canViewAudiencesShare(),
      [Paths.Segmentation.Audiences.SharedByAccount]: this.canViewRealTimeSharedAudiences(),
      [Paths.Segmentation.Journeys]: true,
    }

    Object.keys(routes).forEach(
      path => (routes[path] = routes[path] && AudiencePermissionsService.isAudienceLeftNavVisible()),
    )

    return routes
  }

  private canViewStandardAudiences(): boolean {
    return AudiencePermissionsService.isOfflineAudienceEnabled()
  }

  private canViewAudiencesShare(): boolean {
    return AuthorizationsService.isAuthorized([Operation.AUDIENCESHAREVIEW])
  }

  private canViewRealTimeSharedAudiences(): boolean {
    return AudiencePermissionsService.isJourneysSharedRealTimeAudiencesEnabled()
  }

  private canViewRealTimeAudiences(): boolean {
    const isJourneysUnified =
      userPreferences[mParticleUserPreferenceIds.IsSegmentationNewExperience].optedIn ||
      !window.mParticleConfig.organizationPolicy.uiEnableAudiencesRealTime

    return (
      (AudiencePermissionsService.isAudienceRealtimeEnabled() && !isJourneysUnified) ||
      (AudiencePermissionsService.isJourneysSharedRealTimeAudiencesEnabled() && isJourneysUnified)
    )
  }
}
