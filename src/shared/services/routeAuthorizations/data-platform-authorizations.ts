import { BaseRoutesAuthorizations } from './base-routes-authorizations'
import { Suite } from '../../Suite'
import { Paths } from '../../Paths'
import { Operation } from '../../Operation'
import { AuthorizationsService } from '../AuthorizationsService'

export class DataPlatformAuthorizations extends BaseRoutesAuthorizations {
  protected suite: Suite = Suite.DataPlatform

  protected getAuthorizations(): Record<string, boolean> {
    return {
      [Paths.DataPlatform.Trends]: this.canViewPlatformTrends(),
      [Paths.DataPlatform.Livestream]: this.canViewLiveStream(),
      [Paths.DataPlatform.EventForwarding]: this.canViewEventForwarding(),
      [Paths.DataPlatform.DataCatalog]: this.canViewDataCatalog(),
      [Paths.DataPlatform.DataModels]: this.canViewDataModels(),

      [Paths.DataPlatform.Setup.Connections]: this.canViewConnections(),

      [Paths.DataPlatform.Setup.Root]: this.canViewSetup(),
      [Paths.DataPlatform.Setup.Inputs.Root]: this.canViewInputs(),
      [Paths.DataPlatform.Setup.Inputs.Feeds]: this.canViewInputs(),
      [Paths.DataPlatform.Setup.Inputs.Apps]: this.canViewInputs(),

      [Paths.DataPlatform.Setup.Outputs.Root]: this.canViewOutputs(),
      [Paths.DataPlatform.Setup.Outputs.Event]: this.canViewOutputs(),
      [Paths.DataPlatform.Setup.Outputs.Audience]: this.canViewOutputs(),
      [Paths.DataPlatform.Setup.Outputs.CookieSync]: this.canViewOutputs(),
      [Paths.DataPlatform.Setup.Outputs.Gdpr]: this.canViewOutputs(),
      [Paths.DataPlatform.Setup.Outputs.LiveRamp]: this.canViewOutputs(),
      [Paths.DataPlatform.Setup.Outputs.Dsr]: this.canViewOutputs(),
      [Paths.DataPlatform.Setup.Outputs.DataWarehouse]: this.canViewDataWarehouse(),
      [Paths.DataPlatform.Setup.Outputs.Crm]: this.canViewCrm(),

      [`${Paths.DataPlatform.Setup.Inputs.Feeds}/:moduleId/dws`]: this.canViewWarehouseSync(),
      [Paths.DataPlatform.Setup.Directory.Root]: this.canViewDirectory(),
      [`${Paths.DataPlatform.Setup.Directory.Listing}/:id`]: this.canViewDirectory(),

      [Paths.DataPlatform.Transformations.Root]: this.canViewTransformations(),
      [Paths.DataPlatform.Transformations.Rules]: this.canViewRules(),
      [Paths.DataPlatform.Transformations.Plans]: this.canViewPlans(),
      [Paths.DataPlatform.Transformations.Filters.Root]: this.canViewFilters(),
      [Paths.DataPlatform.Transformations.Filters.Platform]: this.canViewFilters(),
      [Paths.DataPlatform.Transformations.Filters.Feed]: this.canViewFilters(),
    }
  }

  private canViewTransformations(): boolean {
    return this.canViewRules() || this.canViewPlans() || this.canViewFilters()
  }

  private canViewSetup(): boolean {
    return (
      this.canViewInputs() ||
      this.canViewOutputs() ||
      this.canViewDataWarehouse() ||
      this.canViewCrm() ||
      this.canViewDirectory()
    )
  }

  private canViewPlatformTrends(): boolean {
    return AuthorizationsService.isAuthorized(Operation.REPORT_LIST)
  }

  private canViewLiveStream(): boolean {
    return (
      AuthorizationsService.isAuthorized(Operation.REPORT_LIST) &&
      AuthorizationsService.isAuthorized(Operation.EVENT_STREAM)
    )
  }

  private canViewEventForwarding(): boolean {
    return AuthorizationsService.isAuthorized(Operation.REPORT_LIST)
  }

  private canViewConnections(): boolean {
    return AuthorizationsService.isAuthorized(Operation.SUBSCRIPTIONS_LIST)
  }

  private canViewInputs(): boolean {
    return AuthorizationsService.isAuthorized([Operation.INPUTS_LIST, Operation.INPUTS_VIEW])
  }

  private canViewOutputs(): boolean {
    return AuthorizationsService.isAuthorized([Operation.OUTPUTS_LIST])
  }

  public canViewDataWarehouse(): boolean {
    return (
      AuthorizationsService.isAuthorized(Operation.REDSHIFT) ||
      AuthorizationsService.isAuthorized(Operation.GOOGLEBIGQUERYVIEW) ||
      AuthorizationsService.isAuthorized(Operation.SNOWFLAKE) ||
      AuthorizationsService.isAuthorized(Operation.DATABRICKSVIEW)
    )
  }

  private canViewWarehouseSync(): boolean {
    return AuthorizationsService.isAuthorized(Operation.DATA_INGEST_VIEW)
  }

  public canViewCrm(): boolean {
    return window.mParticleConfig.isCrmEnabled
  }

  private canViewDirectory(): boolean {
    return AuthorizationsService.isAuthorized(Operation.PROVIDER_LIST)
  }

  private canViewDataCatalog(): boolean {
    return AuthorizationsService.isAuthorized(Operation.DATAMANAGER_VIEW)
  }

  private canViewDataModels(): boolean {
    return AuthorizationsService.isAuthorized(Operation.DATA_INGEST_VIEW)
  }

  private canViewRules(): boolean {
    return AuthorizationsService.isAuthorized(Operation.RULE_LIST)
  }

  private canViewPlans(): boolean {
    return AuthorizationsService.isAuthorized(Operation.DATAPLAN_VIEW)
  }

  private canViewFilters(): boolean {
    return AuthorizationsService.isAuthorized(Operation.FILTERS_LIST)
  }
}
