import { Suite } from "./Suite";

export const Paths = {
    // Suite routes
    [Suite.Root]: {
        Overview: {
            Root: "mp/overview",
            Connections: "mp/overview/connections",
        },
        Workspaces: "mp/workspaces",
        UserSettings: "mp/usersettings",
        SwitchWorkspace: "mp/switch-workspace",
        Analytics: "mp/analytics",
        Predictions: "mp/predictions",
        UserSettingsList: "mp/usersettings/list",
        NotificationPreferences: "mp/usersettings/notificationpreferences",
        UsageBilling: "mp/usagebilling",
        NewExperienceOnly: "mp/new-experience-only",
        UncaughtErrorHandlerTest: "mp/uncaughtErrorHandlerTest",

        // Developers only
        Playground: {
            React: "mp/playground/react",
            ReactExample: "mp/playground/react/data-example",

            PopOverErrorIcon: "mp/playground/popovererroricon",
            Card: "mp/playground/card",
            DashboardComponents: "mp/playground/dashboard-components",
            Services: "mp/playground/services",

            JourneyMilestoneAudience: "mp/playground/journey-milestone-audience-modal-playground",
            AudienceSizeLabel: "mp/playground/audience-size-label",
            CategoryList: "mp/playground/categorylist",
            Journey: "mp/playground/journey",
            LiveSearch: "mp/playground/livesearch",
            DmDataTable: "mp/playground/dmdatatable",
            CardDetailContainer: "mp/playground/card-detail-container",
            DatePicker: "mp/playground/datepicker",
            FaultError: "mp/playground/faulterror",

            AudienceConnect: "mp/playground/audienceconnect",
            AudienceFault: "mp/playground/audiencefault",
            AudienceInputs: "mp/playground/audienceinputs",
            AudienceOutputs: "mp/playground/audienceoutputs",
            mpDataTable: "mp/playground/mp-data-table",
            DiagramService: "mp/playground/diagram-service",
            AudienceBuilder: "mp/playground/audiencebuilder",

            InputTile: "mp/playground/inputtile",
            OutputTile: "mp/playground/outputtile",
            InputSelector: "mp/playground/inputselector",
            OutputSelector: "mp/playground/outputselector",
            InstructionComponents: "mp/playground/instruction-components",
            QuickstartLivestream: "mp/playground/quickstart-livestream",
            WizardBreadcrumbs: "mp/playground/wizard-breadcrumbs",
            WizardManager: "mp/playground/wizard-manager",
            HelpText: "mp/playground/help-text",
            DropdownEvents: "mp/playground/dropdown-events",

            StyleguideButtons: "mp/playground/styleguide/buttons",
            StyleguideTextFields: "mp/styleguide/textfields",
            StyleguideDropdowns: "mp/styleguide/dropdowns",
            StyleguideCallouts: "mp/styleguide/callouts",

            Video: "mp/playground/video",
        },
    },

    [Suite.DataPlatform]: {
        Trends: "data-platform/trends",
        Setup: {
            Connections: "data-platform/setup/connections",
            Inputs: {
                Feeds: "data-platform/setup/inputs/feeds",
                Apps: "data-platform/setup/inputs/apps",
            },
            Outputs: {
                Event: "data-platform/setup/outputs/event",
                Audience: "data-platform/setup/outputs/audience",
                CookieSync: "data-platform/setup/outputs/cookiesync",
                Gdpr: "data-platform/setup/outputs/gdpr",
                LiveRamp: "data-platform/setup/outputs/liveramp",
                Dsr: "data-platform/setup/outputs/dsr",
                DataWarehouse: "data-platform/setup/outputs/datawarehouse",
                Crm: "data-platform/setup/outputs/crm",
            },
            Directory: {
                Listing: "data-platform/setup/directory/listing",
            },
            WarehouseSync: "data-platform/setup/warehouse-sync",
        },
        Livestream: "data-platform/livestream",
        DataCatalog: "data-platform/data-catalog",
        Transformations: {
            Rules: "data-platform/transformations/rules",
            Plans: "data-platform/transformations/plans",
            Filters: {
                Platform: "data-platform/transformations/filters/platform",
                Feed: "data-platform/transformations/filters/feed",
            },
        },
        EventForwarding: "data-platform/event-forwarding",
    },

    [Suite.Customer360]: {
        Identity: {
            GroupIdentities: "customer-360/identity/group-identities",
        },
        UserProfile: "customer-360/user-profile",
        Enrichment: {
            CalculatedAttributes: "customer-360/enrichment/calculated-attributes",
            PredictiveAttributes: "customer-360/enrichment/predictive-attributes",
            PredictiveAttributesNew: "customer-360/enrichment/predictive-attributes/new",
            PredictiveAttributesNextBestAction: "customer-360/enrichment/predictive-attributes/next-best-action"
        },
    },

    [Suite.Segmentation]: {
        Audiences: {
            RealTime: "segmentation/audiences/real-time",
            Standard: "segmentation/audiences/standard",
            Shared: "segmentation/audiences/shared",
            SharedByAccount: "segmentation/audiences/sharedbyaccount",
            Received: "segmentation/audiences/received",
            P2P: "segmentation/audiences/p2p",
        },
        Journeys: "segmentation/journeys",
    },

    [Suite.Oversight]: {
        SystemAlerts: "oversight/system-alerts",
        Observability: {
            List: "oversight/observability/trace/activity",
            Requests: "oversight/observability/trace/configurations"
        },
        DSR: "oversight/data-subject-requests",
        PrivacySettings: "oversight/privacy-settings",
    },
} as const;