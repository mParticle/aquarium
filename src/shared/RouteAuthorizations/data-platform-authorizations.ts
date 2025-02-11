import { BaseSuiteAuthorizations } from "./base-suite-authorizations";
import { Suite } from "../Suite";
import { Paths } from "../Paths";
import { Operation } from "../Operation";
import { AuthorizationManager } from "../AuthorizationManager";

export class DataPlatformAuthorizations extends BaseSuiteAuthorizations {
    protected suite: Suite = Suite.DataPlatform;

    protected getRoutesAuthorizations(): Record<string, boolean> {
        return {
            [Paths.DataPlatform.Trends]: this.canViewPlatformTrends(),
            [Paths.DataPlatform.Livestream]: this.canViewLiveStream(),
            [Paths.DataPlatform.EventForwarding]: this.canViewEventForwarding(),
            [Paths.DataPlatform.DataCatalog]: this.canViewDataCatalog(),

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
        };
    }

    private canViewTransformations(): boolean {
        return this.canViewRules() || this.canViewPlans() || this.canViewFilters();
    }

    private canViewSetup(): boolean {
        return (
            this.canViewInputs() ||
            this.canViewOutputs() ||
            this.canViewDataWarehouse() ||
            this.canViewCrm() ||
            this.canViewDirectory()
        );
    }

    private canViewPlatformTrends(): boolean {
        return AuthorizationManager.isAuthorized(Operation.REPORT_LIST);
    }

    private canViewLiveStream(): boolean {
        return (
            AuthorizationManager.isAuthorized(Operation.REPORT_LIST) &&
            AuthorizationManager.isAuthorized(Operation.EVENT_STREAM)
        );
    }

    private canViewEventForwarding(): boolean {
        return AuthorizationManager.isAuthorized(Operation.REPORT_LIST);
    }

    private canViewConnections(): boolean {
        return AuthorizationManager.isAuthorized(Operation.SUBSCRIPTIONS_LIST);
    }

    private canViewInputs(): boolean {
        return AuthorizationManager.isAuthorized([Operation.INPUTS_LIST, Operation.INPUTS_VIEW]);
    }

    private canViewOutputs(): boolean {
        return AuthorizationManager.isAuthorized([Operation.OUTPUTS_LIST]);
    }

    public canViewDataWarehouse(): boolean {
        return (
            AuthorizationManager.isAuthorized(Operation.REDSHIFT) ||
            AuthorizationManager.isAuthorized(Operation.GOOGLEBIGQUERYVIEW) ||
            AuthorizationManager.isAuthorized(Operation.SNOWFLAKE) ||
            AuthorizationManager.isAuthorized(Operation.DATABRICKSVIEW)
        );
    }

    private canViewWarehouseSync(): boolean {
        return AuthorizationManager.isAuthorized(Operation.DATA_INGEST_VIEW);
    }

    public canViewCrm(): boolean {
        return window.mParticleConfig.isCrmEnabled;
    }

    private canViewDirectory(): boolean {
        return AuthorizationManager.isAuthorized(Operation.PROVIDER_LIST);
    }

    private canViewDataCatalog(): boolean {
        return AuthorizationManager.isAuthorized(Operation.DATAMANAGER_VIEW);
    }

    private canViewRules(): boolean {
        return AuthorizationManager.isAuthorized(Operation.RULE_LIST);
    }

    private canViewPlans(): boolean {
        return AuthorizationManager.isAuthorized(Operation.DATAPLAN_VIEW);
    }

    private canViewFilters(): boolean {
        return AuthorizationManager.isAuthorized(Operation.FILTERS_LIST);
    }
}
