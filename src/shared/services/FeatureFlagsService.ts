export enum FeatureFlag {
    Unassigned = "Unassigned",
    /** Obsolete */
    DataPlanTransformations = "DataPlanningTransformations",
    ReportingJobId = "ReportingJobId",
    DataMasterShowAttributesAutoComplete = "DataMasterShowAttributesAutoComplete",
    TieredEventsReport = "TieredEvents.Report",
    TieredEventsIdentityTier = "TieredEvents.IdentityTier",
    DefaultEventTierConfiguration = "TieredEvents.DefaultEventTierConfiguration",
    ShowUsageDashboard = "ShowUsageDashboard",
    IsJourneyDeactivationDisabled = "IsJourneyDeactivationDisabled",
    MpRuleDurationGraph = "MpRuleDurationGraph",
    WorkspaceDefaults = "WorkspaceDefaults",
    MarketingBannerCortexDisabled = "MarketingBanner.Cortex.Disabled",
    HasJourneyBuilderEarlyAccess = "JourneyBuilder.EarlyAccess",
    ProfileProtection = "ProfileProtection",
    PredictiveAudiencesDisabled = "PredictiveAudiences.Disabled",
    ObservabilityDetails = "Observability.Details",
    PredictiveAudiencesPLDDisabled = "PredictiveAudiences.PLD.Disabled",
    AnalyticsInMPv1Disabled = "AnalyticsInMP.v1.Disabled",
    OverviewMap = "OverviewMap",
    GroupingUI = "Grouping.UI",
    JourneysAbTestDisabled = "JourneysAbTest.Disabled",
    JourneysUnificationDisabled = "JourneysUnification.Disabled",
    NotificationCenterV0Preferences = "NotificationCenter.V0.Preferences",
    FieldTransformationsAPI = "FieldTransformations.API",
    ImproveAudienceEstimatorAccuracyDisabled = "ImproveAudienceEstimatorAccuracy.Disabled",
    ObservabilityM4 = "ObservabilityM4",
    PredictiveAttributesCreationDisabled = "PredictiveAttributes.Creation.Disabled",
    NotificationCenterV0Inbox = "NotificationCenter.V0.Inbox",
    NotificationCenterV0InboxTemp = "NotificationCenter.V0.InboxTemp",
    DataManagerOptimizationCA = "DataManagerOptimization.CA",
    DataManagerOptimizationDataCatalog = "DataManagerOptimization.DataCatalog",
    VBPUsageReportV2 = "VBP.UsageReport.V2",
    UAVNewTabletsReadMethod = "UAVNewTabletsReadMethod",
    PredictiveAttributesNextBestActionEnabled = "PredictiveAttributes.NextBestAction.Enabled",
    JourneysEnvironmentSelectionDisabled = "Journeys.EnvironmentSelection.Disabled",
    AudienceInsightsPreviewTabEnabled = "AudienceInsightsPreviewTab.Enabled",
    JourneyAudienceRefreshCadence = "JourneyAudienceRefreshCadence",
    TemporarilyUnifiedExperience = "Unify.TemporarilyUnifiedExperience",
    // The following flags are pseudo-flags that are not in the WorkspaceFeatureSetting table.
    DataManagerOptimizationDataCatalogDetails = "DataManagerOptimization.DataCatalogDetails",
    JourneysMilestoneWithAudienceNode = "Journeys.MilestoneWithAudienceNode",
}

// the features are enabled per workspace.
export class FeatureFlagsService {
    private static enabledFeatures: FeatureFlag[] = [];

    public static initialize(enabledFeatures: FeatureFlag[]): void {
         this.enabledFeatures = enabledFeatures;
    }

    /**
     * Checks whether a feature is enabled or not in the currently active workspace.
     * @param feature The feature to check for.
     * @returns true if the feature is enabled, otherwise false.
     **/
    public static isEnabled(feature: FeatureFlag): boolean {
        return this.enabledFeatures.includes(feature);
    }
}
