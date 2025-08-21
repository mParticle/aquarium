import { BaseRoutesAuthorizations } from './base-routes-authorizations'
import { Suite } from '../../Suite'
import { Paths } from '../../Paths'
import { Operation } from '../../Operation'
import { AuthorizationsService } from '../AuthorizationsService'

export class DataWarehouseAuthorizations extends BaseRoutesAuthorizations {
  protected suite: Suite = Suite.DataWarehouse

  protected getAuthorizations(): Record<string, boolean> {
    return {
      [Paths.DataWarehouse.Connections]: this.canViewConnections(),
      [Paths.DataWarehouse.DataModels]: this.canViewDataModels(),
      [Paths.DataWarehouse.Pipelines]: this.canViewPipelines(),
    }
  }

  public canViewDataWarehouse(): boolean {
    return (
      AuthorizationsService.isAuthorized(Operation.REDSHIFT) ||
      AuthorizationsService.isAuthorized(Operation.GOOGLEBIGQUERYVIEW) ||
      AuthorizationsService.isAuthorized(Operation.SNOWFLAKE) ||
      AuthorizationsService.isAuthorized(Operation.DATABRICKSVIEW)
    )
  }

  private canViewConnections(): boolean {
    return this.canViewDataWarehouse() && AuthorizationsService.isAuthorized(Operation.DATA_INGEST_VIEW)
  }

  private canViewDataModels(): boolean {
    return this.canViewDataWarehouse() && AuthorizationsService.isAuthorized(Operation.DATA_INGEST_VIEW)
  }

  private canViewPipelines(): boolean {
    return this.canViewDataWarehouse() && AuthorizationsService.isAuthorized(Operation.DATA_INGEST_VIEW)
  }
}
