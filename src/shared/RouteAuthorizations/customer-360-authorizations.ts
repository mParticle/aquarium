import { Suite } from "../Suite";
import { BaseRoutesAuthorizations } from "./base-routes-authorizations";
import { Paths } from "../Paths";
import { Operation } from "../Operation";
import { AuthorizationManager } from "../AuthorizationManager";
import { FeatureFlagsManager, FeatureFlag } from "../FeatureFlagsManager";

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
            FeatureFlagsManager.isEnabled(FeatureFlag.GroupingUI) &&
            AuthorizationManager.isAuthorized(Operation.USER_GROUPS_VIEW)
        );
    }

    private canViewUserActivity(): boolean {
        return (
            AuthorizationManager.isAuthorized(Operation.REPORT_LIST) &&
            AuthorizationManager.isAuthorized(Operation.USERACTIVITY_VIEW) &&
            window.mParticleConfig.isUAVEnabled
        );
    }

    private canViewCalculatedAttributes(): boolean {
        return AuthorizationManager.isAuthorized(Operation.CALCULATEDATTRIBUTES_LIST);
    }
    
    private canViewCreatePredictiveAttribute (): boolean {
        return !FeatureFlagsManager.isEnabled(FeatureFlag.PredictiveAttributesCreationDisabled);
    };
    
    private canViewNextBestAction(): boolean {
        return FeatureFlagsManager.isEnabled(FeatureFlag.PredictiveAttributesNextBestActionEnabled);
    };
}
