import { Icon, IGlobalNavigationItem, RoutesAuthorizationsService, Utils } from "src/components";
import { Paths } from "src/shared/Paths";

export enum NavigationItemId {
    Overview = 'overview',
    Oversight = 'oversight',
    Oversight_SystemAlerts = 'oversight_systemAlerts',
    Oversight_Observability = 'oversight_observability',
    Oversight_Observability_TraceActivity = 'oversight_observability_traceActivity',
    Oversight_Observability_TraceConfigurations = 'oversight_observability_traceConfigurations',
    Oversight_Privacy = 'oversight_privacy',
    Oversight_Privacy_DSRs = 'oversight_privacy_dsrs',
    Oversight_Privacy_PrivacySettings = 'oversight_privacy_privacySettings',
    Predictions = 'predictions',
    Customer360 = 'customer360',
    Customer360_UserProfiles = 'customer360_userProfiles',
    Customer360_GroupIdentity = 'customer360_groupIdentity',
    Customer360_Enrichment = 'customer360_enrichment',
    Customer360_Enrichment_CalculatedAttributes = 'customer360_enrichment_calculatedAttributes',
    Customer360_Enrichment_PredictiveAttributes = 'customer360_enrichment_predictiveAttributes',
    DataPlatform = 'dataPlatform',
    DataPlatform_Trends = 'dataPlatform_trends',
    DataPlatform_Setup = 'dataPlatform_setup',
    DataPlatform_Setup_Connections = 'dataPlatform_setup_connections',
    DataPlatform_Setup_Inputs = 'dataPlatform_setup_inputs',
    DataPlatform_Setup_Outputs = 'dataPlatform_setup_outputs',
    DataPlatform_Setup_Directory = 'dataPlatform_setup_directory',
    DataPlatform_LiveStream = 'dataPlatform_liveStream',
    DataPlatform_DataCatalog = 'dataPlatform_dataCatalog',
    DataPlatform_Transformations = 'dataPlatform_transformations',
    DataPlatform_Transformations_Rules = 'dataPlatform_transformations_rules',
    DataPlatform_Transformations_Plans = 'dataPlatform_transformations_plans',
    DataPlatform_Transformations_Filters = 'dataPlatform_transformations_filters',
    DataPlatform_Transformations_Filters_PlatformFilters = 'dataPlatform_transformations_filters_platformFilters',
    DataPlatform_Transformations_Filters_FeedFilters = 'dataPlatform_transformations_filters_feedFilters',
    DataPlatform_EventForwarding = 'dataPlatform_eventForwarding',
    Segmentation = 'segmentation',
    Segmentation_Journeys = 'segmentation_journeys',
    Segmentation_Audiences = 'segmentation_audiences',
    Segmentation_Audiences_Standard = 'segmentation_audiences_standard',
    Segmentation_Audiences_Shared = 'segmentation_audiences_shared',
    Segmentation_Audiences_RealTime = 'segmentation_audiences_realTime',
    Analytics = 'analytics',
    Analytics_CreateAnalysis = 'analytics_createAnalysis',
    Analytics_MyHub = 'analytics_myHub',
    Analytics_Saved = 'analytics_saved',
    Analytics_Data = 'analytics_data',
    Analytics_Favorites = 'analytics_favorites'
}

const oversight: IGlobalNavigationItem = {
    id: NavigationItemId.Oversight,
    label: "Oversight",
    type: "menu",
    icon: <Icon name="oversight"/>,
    children: [
        {
            id: NavigationItemId.Oversight_SystemAlerts,
            label: "System Alerts",
            type: "link",
            hrefOptions: { href: Paths.Oversight.SystemAlerts }
        },
        {
            id: NavigationItemId.Oversight_Observability,
            label: "Observability",
            type: "menu",
            children: [
                {
                    id: NavigationItemId.Oversight_Observability_TraceActivity,
                    label: "Trace Activity",
                    type: "link",
                    hrefOptions: { href: Paths.Oversight.Observability.List }
                },
                {
                    id: NavigationItemId.Oversight_Observability_TraceConfigurations,
                    label: "Trace Configurations",
                    type: "link",
                    hrefOptions: { href: Paths.Oversight.Observability.Requests }
                },
            ]
        },
        {
            id: NavigationItemId.Oversight_Privacy,
            label: "Privacy",
            type: "menu",
            children: [
                {
                    id: NavigationItemId.Oversight_Privacy_DSRs,
                    label: "DSRs",
                    type: "link",
                    hrefOptions: { href: Paths.Oversight.DSR }
                },
                {
                    id: NavigationItemId.Oversight_Privacy_PrivacySettings,
                    label: "Trace Configurations",
                    type: "link",
                    hrefOptions: { href: Paths.Oversight.PrivacySettings }
                },
            ]
        },
    ],
}

const predictions: IGlobalNavigationItem = {
    id: NavigationItemId.Predictions,
    label: "Predictions",
    icon: <Icon name="predictions" />,
    type: "link",
    hrefOptions: { href: "" }
};

const customer360: IGlobalNavigationItem = {
    id: NavigationItemId.Customer360,
    label: "Customer 360",
    type: "menu",
    icon: <Icon name="C360"/>,
    children: [
        {
            id: NavigationItemId.Customer360_UserProfiles,
            label: "User Profiles",
            type: "link",
            hrefOptions: { href: Paths.Customer360.UserProfile }
        },
        {
            id: NavigationItemId.Customer360_GroupIdentity,
            label: "Group Identity",
            type: "link",
            hrefOptions: { href: Paths.Customer360.Identity.GroupIdentities }
        },
        {
            id: NavigationItemId.Customer360_Enrichment,
            label: "Enrichment",
            type: "menu",
            children: [
                {
                    id: NavigationItemId.Customer360_Enrichment_CalculatedAttributes,
                    label: "Calculated Attributes",
                    type: "link",
                    hrefOptions: { href: Paths.Customer360.Enrichment.CalculatedAttributes }
                },
                {
                    id: NavigationItemId.Customer360_Enrichment_PredictiveAttributes,
                    label: "Predictive Attributes",
                    type: "link",
                    hrefOptions: { href: Paths.Customer360.Enrichment.PredictiveAttributes }
                }
            ]
        }
    ]
}

const dataPlatform: IGlobalNavigationItem = {
    id: NavigationItemId.DataPlatform,
    label: "DataPlatform",
    type: "menu",
    icon:  <Icon name="dataPlatform"/>,
    children: [
        {
            id: NavigationItemId.DataPlatform_Trends,
            label: "Trends",
            type: "link",
            hrefOptions: { href: Paths.DataPlatform.Trends }
        },
        {
            id: NavigationItemId.DataPlatform_Setup,
            label: "Setup",
            type: "menu",
            children: [
                {
                    id: NavigationItemId.DataPlatform_Setup_Connections,
                    label: "Connections",
                    type: "link",
                    hrefOptions: { href: Paths.DataPlatform.Setup.Connections }
                },
                {
                    id: NavigationItemId.DataPlatform_Setup_Inputs,
                    label: "Inputs",
                    type: "link",
                    hrefOptions: { href: Paths.DataPlatform.Setup.Inputs.Apps }
                },
                {
                    id: NavigationItemId.DataPlatform_Setup_Outputs,
                    label: "Outputs",
                    type: "link",
                    hrefOptions: { href: Paths.DataPlatform.Setup.Outputs.Event }
                },
                {
                    id: NavigationItemId.DataPlatform_Setup_Directory,
                    label: "Directory",
                    type: "link",
                    hrefOptions: { href: Paths.DataPlatform.Setup.Directory.Listing }
                }
            ]
        },
        {
            id: NavigationItemId.DataPlatform_LiveStream,
            label: "Live Stream",
            type: "link",
            hrefOptions: { href: Paths.DataPlatform.Livestream }
        },
        {
            id: NavigationItemId.DataPlatform_DataCatalog,
            label: "Data Catalog",
            type: "link",
            hrefOptions: { href: Paths.DataPlatform.DataCatalog }
        },
        {
            id: NavigationItemId.DataPlatform_Transformations,
            label: "Transformations",
            type: "menu",
            children: [
                {
                    id: NavigationItemId.DataPlatform_Transformations_Rules,
                    label: "Rules",
                    type: "link",
                    hrefOptions: { href: Paths.DataPlatform.Transformations.Rules }
                },
                {
                    id: NavigationItemId.DataPlatform_Transformations_Plans,
                    label: "Plans",
                    type: "link",
                    hrefOptions: { href: Paths.DataPlatform.Transformations.Plans }
                },
                {
                    id: NavigationItemId.DataPlatform_Transformations_Filters,
                    label: "Filters",
                    type: "menu",
                    children: [
                        {
                            id: NavigationItemId.DataPlatform_Transformations_Filters_PlatformFilters,
                            label: "Platform Filters",
                            type: "link",
                            hrefOptions: { href: Paths.DataPlatform.Transformations.Filters.Platform }
                        },
                        {
                            id: NavigationItemId.DataPlatform_Transformations_Filters_FeedFilters,
                            label: "Feed Filters",
                            type: "link",
                            hrefOptions: { href: Paths.DataPlatform.Transformations.Filters.Feed }
                        }
                    ]
                }
            ]
        },
        {
            id: NavigationItemId.DataPlatform_EventForwarding,
            label: "Event Forwarding",
            type: "link",
            hrefOptions: { href: Paths.DataPlatform.EventForwarding }
        }
    ]
}

const segmentation: IGlobalNavigationItem = {
    id: NavigationItemId.Segmentation,
    label: "Segmentation",
    type: "menu",
    icon: <Icon name="segmentation" />,
    children: [
        {
            id: NavigationItemId.Segmentation_Journeys,
            label: "Journeys",
            type: "link",
            hrefOptions: { href: Paths.Segmentation.Journeys }
        },
        {
            id: NavigationItemId.Segmentation_Audiences,
            label: "Audiences",
            type: "menu",
            children: [
                {
                    id: NavigationItemId.Segmentation_Audiences_Standard,
                    label: "Standard",
                    type: "link",
                    hrefOptions: { href: Paths.Segmentation.Audiences.Standard }
                },
                {
                    id: NavigationItemId.Segmentation_Audiences_Shared,
                    label: "Shared",
                    type: "link",
                    hrefOptions: { href: Paths.Segmentation.Audiences.Shared }
                },
                {
                    id: NavigationItemId.Segmentation_Audiences_RealTime,
                    label: "Real-time",
                    type: "link",
                    hrefOptions: { href: Paths.Segmentation.Audiences.RealTime }
                }
            ]
        }
    ]
}

const analytics: IGlobalNavigationItem = {
    id: NavigationItemId.Analytics,
    label: "Analytics",
    type: "menu",
    icon: <Icon name="analytics" />,
    children: [
        {
            id: NavigationItemId.Analytics_MyHub,
            label: "My Hub",
            type: "link",
            visible: !Utils.isMobile(),
            hrefOptions: { href: `#/${Paths.Analytics.MyHub}` }
        },
        {
            id: NavigationItemId.Analytics_Saved,
            label: "Saved",
            type: "link",
            hrefOptions: { href: `#/${Paths.Analytics.Saved}` }
        },
        {
            id: NavigationItemId.Analytics_Data,
            label: "Data",
            type: "link",
            visible: !Utils.isMobile(),
            hrefOptions: { href: `#/${Paths.Analytics.Data}` }
        },
        {
            id: NavigationItemId.Analytics_Favorites,
            label: "Favorites",
            type: "link",
            hrefOptions: { href: `#/${Paths.Analytics.Favorites}` }
        }
    ]
}

const overview: IGlobalNavigationItem = {
    id: NavigationItemId.Overview,
    label: "Overview",
    type: "link",
    icon: <Icon name="trends"/>,
    hrefOptions: { href: Paths.Root.Overview.Root },
}

const allNavigationItems: IGlobalNavigationItem[] = [
    overview,
    oversight,
    customer360,
    dataPlatform,
    segmentation,
    analytics,
    predictions
];

export class NavigationItemsService {
    public static navigationItems: IGlobalNavigationItem[];
    
    public static initialize() {
        const checkAuthorization = (item: IGlobalNavigationItem): void => {
            if (item.type === "link" && item.hrefOptions?.href) {
                item.disabled = !RoutesAuthorizationsService.isRouteAuthorized(item.hrefOptions.href);
            }
            else if (item.type === 'menu' && item.children) {
                for (const child of item.children) {
                    checkAuthorization(child);
                }
            }
        };

        for (const item of allNavigationItems) {
            checkAuthorization(item);
        }
        
        this.navigationItems = allNavigationItems;
    }
    
    public static findItemById(id: NavigationItemId): IGlobalNavigationItem | undefined {
        const findItem = (items: IGlobalNavigationItem[]): IGlobalNavigationItem | undefined => {
            for (const item of items) {
                if (item.id === id) {
                    return item;
                }
                
                if (item.type == "menu" && item.children) {
                    const found = findItem(item.children);
                    if (found) {
                        return found;
                    }
                }
            }
            return undefined;
        };

        return findItem(allNavigationItems);
    }
}