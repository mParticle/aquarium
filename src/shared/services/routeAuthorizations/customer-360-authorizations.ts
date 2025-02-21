import { Suite } from "../../Suite";
import { BaseRoutesAuthorizations } from "./base-routes-authorizations";
import { Paths } from "../../Paths";
import { Operation } from "../../Operation";
import { AuthorizationsService } from "../AuthorizationsService";
import { FeatureFlagsService, FeatureFlag } from "../FeatureFlagsService";

export class Customer360Authorizations extends BaseRoutesAuthorizations {
    protected suite: Suite = Suite.Customer360;

    protected getAuthorizations(): Record<string, boolean> {
        return {
            [Paths.Customer360.Identity.Root]: this.canViewUserGroups(),
            [Paths.Customer360.Identity.GroupIdentities]: this.canViewUserGroups(),
            [Paths.Customer360.UserProfile]: this.canViewUserActivity(),
            [Paths.Customer360.Enrichment.Root]: this.canViewCalculatedAttributes(),
            [Paths.Customer360.Enrichment.CalculatedAttributes]: this.canViewCalculatedAttributes(),
            [Paths.Customer360.Enrichment.PredictiveAttributes]: true,
            [Paths.Customer360.Enrichment.PredictiveAttributesNew]: this.canViewCreatePredictiveAttribute(),
            [Paths.Customer360.Enrichment.PredictiveAttributesNextBestAction]: this.canViewNextBestAction(),
        };
    }

    private canViewUserGroups(): boolean {
        return (
            FeatureFlagsService.isEnabled(FeatureFlag.GroupingUI) &&
            AuthorizationsService.isAuthorized(Operation.USER_GROUPS_VIEW)
        );
    }

    private canViewUserActivity(): boolean {
        return (
            AuthorizationsService.isAuthorized(Operation.REPORT_LIST) &&
            AuthorizationsService.isAuthorized(Operation.USERACTIVITY_VIEW) &&
            window.mParticleConfig.isUAVEnabled
        );
    }

    private canViewCalculatedAttributes(): boolean {
        return AuthorizationsService.isAuthorized(Operation.CALCULATEDATTRIBUTES_LIST);
    }
    
    private canViewCreatePredictiveAttribute (): boolean {
        return !FeatureFlagsService.isEnabled(FeatureFlag.PredictiveAttributesCreationDisabled);
    };
    
    private canViewNextBestAction(): boolean {
        return FeatureFlagsService.isEnabled(FeatureFlag.PredictiveAttributesNextBestActionEnabled);
    };
}
