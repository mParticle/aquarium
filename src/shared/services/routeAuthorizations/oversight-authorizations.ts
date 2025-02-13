import { BaseRoutesAuthorizations } from "./base-routes-authorizations";
import { Suite } from "../../Suite";
import { Paths } from "../../Paths";
import { Operation } from "../../Operation";
import { AuthorizationsService } from "../AuthorizationsService";
import { FeatureFlagsService, FeatureFlag } from "../FeatureFlagsService";

export class OversightAuthorizations extends BaseRoutesAuthorizations {
    protected suite: Suite = Suite.Oversight;

    protected getAuthorizations(): Record<string, boolean> {
        return {
            [Paths.Oversight.DSR]: this.canViewDSR(),
            [Paths.Oversight.PrivacySettings]: this.canViewPrivacy(),
            [Paths.Oversight.SystemAlerts]: this.canViewSystemAlerts(),
            [Paths.Oversight.Observability.Root]: this.canViewObservability(),
            [Paths.Oversight.Observability.List]: this.canViewObservabilityTraceList(),
            [Paths.Oversight.Observability.Requests]: this.canViewObservabilityTraceRequests(),
        };
    }

    private isCCPAorGDPREnabled(): boolean {
        return window.mParticleConfig.isGDPREnabled || window.mParticleConfig.isCCPAEnabled;
    }

    private canViewDSR(): boolean {
        return this.isCCPAorGDPREnabled() && AuthorizationsService.isAuthorized(Operation.GDPR_REQUEST_LIST);
    }

    private canViewPrivacy(): boolean {
        return this.isCCPAorGDPREnabled() && AuthorizationsService.isAuthorized(Operation.VIEW_COMPLIANCE_SETTINGS);
    }

    private canViewSystemAlerts(): boolean {
        return AuthorizationsService.isAuthorized(Operation.REPORT_LIST);
    }

    private canViewObservability(): boolean {
        return FeatureFlagsService.isEnabled(FeatureFlag.ObservabilityDetails);
    }

    private canViewObservabilityTraceList() : boolean {
        return FeatureFlagsService.isEnabled(FeatureFlag.ObservabilityM4)
    }    

    private canViewObservabilityTraceRequests() : boolean {
        return FeatureFlagsService.isEnabled(FeatureFlag.ObservabilityM4)
    }        
}
