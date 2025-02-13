import { BaseRoutesAuthorizations } from "./base-routes-authorizations";
import { Suite } from "../../Suite";
import { Paths } from "../../Paths";
import { Operation } from "../../Operation";
import { AuthorizationsService } from "../AuthorizationsService";
import { FeatureFlagsService, FeatureFlag } from "../FeatureFlagsService";
import { AudiencePermissionsService } from "../AudiencePermissionsService";

export class RootAuthorizations extends BaseRoutesAuthorizations {
    protected suite: Suite = Suite.Root;

    protected getAuthorizations(): Record<string, boolean> {
        const playgroundRoutesAuth = Object.keys(Paths.Root.Playground).reduce(
            (acc, route) => {
                acc[route] = this.canViewPlayground();
                return acc;
            },
            {} as Record<string, boolean>,
        );

        return {
            [Paths.Root.Workspaces]: this.canViewWorkspacesSettings(),
            [Paths.Root.Predictions]: this.canViewPredictions(),
            [Paths.Root.Analytics]: this.canViewAnalytics(),

            [Paths.Root.Overview.Root]: true,
            [Paths.Root.Overview.Connections]: true,
            [Paths.Root.UserSettings]: true,
            [Paths.Root.UserSettingsList]: true,
            [Paths.Root.SwitchWorkspace]: true,
            [Paths.Root.UsageBilling]: this.canViewUsageReport(),
            ...playgroundRoutesAuth,
            [Paths.Root.UncaughtErrorHandlerTest]: true
        };
    }

    private canViewWorkspacesSettings(): boolean {
        return AuthorizationsService.isAuthorized(Operation.WORKSPACE_SETTINGS);
    }

    private canViewPredictions(): boolean {
        return AudiencePermissionsService.isPredictiveAudiencesPLDEnabled();
    }

    private canViewAnalytics(): boolean {
        return window.mParticleConfig.accountLimits.enableIndicativeWelcome;
    }

    private canViewPlayground(): boolean {
        return window.mParticleConfig.isDeveloperMode;
    }

    private canViewUsageReport(): boolean {
        return (
            FeatureFlagsService.isEnabled(FeatureFlag.VBPUsageReportV2) &&
            AuthorizationsService.isAuthorized(Operation.VIEW_VBP_BILLING_REPORT)
        );
    }
}
