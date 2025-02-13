import { Icon, IGlobalNavigationItem, RoutesAuthorizationsService } from "src/components";
import { Paths } from "src/shared/Paths";

export enum NavigationItemId {
    Overview = 'overview',
    Oversight = 'oversight',
    SystemAlerts = 'systemAlerts',
    Observability = 'observability',
    TraceActivity = 'traceActivity',
    TraceConfigurations = 'traceConfigurations',
    Privacy = 'privacy',
    DSRs = 'dsrs',
    PrivacySettings = 'privacySettings',
    Predictions = 'predictions',
    Customer360 = 'customer360',
    UserProfiles = 'userProfiles',
    Identity = 'identity',
    GroupIdentity = 'groupIdentity',
    Enrichment = 'enrichment',
    CalculatedAttributes = 'calculatedAttributes',
    PredictiveAttributes = 'predictiveAttributes',
    DataPlatform = 'dataPlatform',
    Trends = 'trends',
    Setup = 'setup',
    Connections = 'connections',
    Inputs = 'inputs',
    Outputs = 'outputs',
    Directory = 'directory',
    LiveStream = 'liveStream',
    DataCatalog = 'dataCatalog',
    Transformations = 'transformations',
    Rules = 'rules',
    Plans = 'plans',
    Filters = 'filters',
    PlatformFilters = 'platformFilters',
    FeedFilters = 'feedFilters',
    EventForwarding = 'eventForwarding',
    Segmentation = 'segmentation',
    Journeys = 'journeys',
    Audiences = 'audiences',
    Standard = 'standard',
    Shared = 'shared',
    RealTime = 'realTime',
    Analytics = 'analytics',
    CreateAnalysis = 'createAnalysis',
    MyHub = 'myHub',
    Saved = 'saved',
    Data = 'data',
    Favorites = 'favorites'
}

const oversight: IGlobalNavigationItem = {
    id: NavigationItemId.Oversight,
    label: "Oversight",
    type: "menu",
    icon: <Icon name="oversight"/>,
    children: [
        {
            id: NavigationItemId.SystemAlerts,
            label: "System Alerts",
            type: "link",
            hrefOptions: { href: Paths.Oversight.SystemAlerts }
        },
        {
            id: NavigationItemId.Observability,
            label: "Observability",
            type: "menu",
            children: [
                {
                    id: NavigationItemId.TraceActivity,
                    label: "Trace Activity",
                    type: "link",
                    hrefOptions: { href: Paths.Oversight.Observability.List }
                },
                {
                    id: NavigationItemId.TraceConfigurations,
                    label: "Trace Configurations",
                    type: "link",
                    hrefOptions: { href: Paths.Oversight.Observability.Requests }
                },
            ]
        },
        {
            id: NavigationItemId.Privacy,
            label: "Privacy",
            type: "menu",
            children: [
                {
                    id: NavigationItemId.DSRs,
                    label: "DSRs",
                    type: "link",
                    hrefOptions: { href: Paths.Oversight.DSR }
                },
                {
                    id: NavigationItemId.PrivacySettings,
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
            id: NavigationItemId.UserProfiles,
            label: "User Profiles",
            type: "link",
            hrefOptions: { href: Paths.Customer360.UserProfile }
        },
        {
            id: NavigationItemId.GroupIdentity,
            label: "Group Identity",
            type: "link",
            hrefOptions: { href: Paths.Customer360.Identity.GroupIdentities }
        },
        {
            id: NavigationItemId.Enrichment,
            label: "Enrichment",
            type: "menu",
            children: [
                {
                    id: NavigationItemId.CalculatedAttributes,
                    label: "Calculated Attributes",
                    type: "link",
                    hrefOptions: { href: Paths.Customer360.Enrichment.CalculatedAttributes }
                },
                {
                    id: NavigationItemId.PredictiveAttributes,
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
            id: NavigationItemId.Trends,
            label: "Trends",
            type: "link",
            hrefOptions: { href: Paths.DataPlatform.Trends }
        },
        {
            id: NavigationItemId.Setup,
            label: "Setup",
            type: "menu",
            children: [
                {
                    id: NavigationItemId.Connections,
                    label: "Connections",
                    type: "link",
                    hrefOptions: { href: Paths.DataPlatform.Setup.Connections }
                },
                {
                    id: NavigationItemId.Inputs,
                    label: "Inputs",
                    type: "link",
                    hrefOptions: { href: Paths.DataPlatform.Setup.Inputs.Apps }
                },
                {
                    id: NavigationItemId.Outputs,
                    label: "Outputs",
                    type: "link",
                    hrefOptions: { href: Paths.DataPlatform.Setup.Outputs.Event }
                },
                {
                    id: NavigationItemId.Directory,
                    label: "Directory",
                    type: "link",
                    hrefOptions: { href: Paths.DataPlatform.Setup.Directory.Listing }
                }
            ]
        },
        {
            id: NavigationItemId.LiveStream,
            label: "Live Stream",
            type: "link",
            hrefOptions: { href: Paths.DataPlatform.Livestream }
        },
        {
            id: NavigationItemId.DataCatalog,
            label: "Data Catalog",
            type: "link",
            hrefOptions: { href: Paths.DataPlatform.DataCatalog }
        },
        {
            id: NavigationItemId.Transformations,
            label: "Transformations",
            type: "menu",
            children: [
                {
                    id: NavigationItemId.Rules,
                    label: "Rules",
                    type: "link",
                    hrefOptions: { href: Paths.DataPlatform.Transformations.Rules }
                },
                {
                    id: NavigationItemId.Plans,
                    label: "Plans",
                    type: "link",
                    hrefOptions: { href: Paths.DataPlatform.Transformations.Plans }
                },
                {
                    id: NavigationItemId.Filters,
                    label: "Filters",
                    type: "menu",
                    children: [
                        {
                            id: NavigationItemId.PlatformFilters,
                            label: "Platform Filters",
                            type: "link",
                            hrefOptions: { href: Paths.DataPlatform.Transformations.Filters.Platform }
                        },
                        {
                            id: NavigationItemId.FeedFilters,
                            label: "Feed Filters",
                            type: "link",
                            hrefOptions: { href: Paths.DataPlatform.Transformations.Filters.Feed }
                        }
                    ]
                }
            ]
        },
        {
            id: NavigationItemId.EventForwarding,
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
            id: NavigationItemId.Journeys,
            label: "Journeys",
            type: "link",
            hrefOptions: { href: Paths.Segmentation.Journeys }
        },
        {
            id: NavigationItemId.Audiences,
            label: "Audiences",
            type: "menu",
            children: [
                {
                    id: NavigationItemId.Standard,
                    label: "Standard",
                    type: "link",
                    hrefOptions: { href: Paths.Segmentation.Audiences.Standard }
                },
                {
                    id: NavigationItemId.Shared,
                    label: "Shared",
                    type: "link",
                    hrefOptions: { href: Paths.Segmentation.Audiences.Shared }
                },
                {
                    id: NavigationItemId.RealTime,
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
            id: NavigationItemId.CreateAnalysis,
            label: "Create Analysis",
            type: "button",
            buttonOptions: { href: "" }
        },
        {
            id: NavigationItemId.MyHub,
            label: "My Hub",
            type: "link",
            hrefOptions: { href: "" }
        },
        {
            id: NavigationItemId.Saved,
            label: "Saved",
            type: "link",
            hrefOptions: { href: "" }
        },
        {
            id: NavigationItemId.Data,
            label: "Data",
            type: "link",
            hrefOptions: { href: "" }
        },
        {
            id: NavigationItemId.Favorites,
            label: "Favorites",
            type: "link",
            hrefOptions: { href: "" }
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