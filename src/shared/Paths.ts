import { Suite } from "./Suite";

export const Paths = {
    // Suite routes
    [Suite.Root]: {
        Root: "mp",
        Overview: {
            Root: "overview",
            Connections: "overview/connections",
        },
        Workspaces: "workspaces",
        UserSettings: "usersettings",
        SwitchWorkspace: "switch-workspace",
        Analytics: "analytics",
        Predictions: "predictions",
        UserSettingsList: "usersettings/list",
        NotificationPreferences: "usersettings/notificationpreferences",
        UsageBilling: "usagebilling",
        NewExperienceOnly: "new-experience-only",
        UncaughtErrorHandlerTest: "uncaughtErrorHandlerTest",

        // Developers only
        Playground: {
            Root: "playground",

            React: "playground/react",
            ReactExample: "playground/react/data-example",

            PopOverErrorIcon: "playground/popovererroricon",
            Card: "playground/card",
            DashboardComponents: "playground/dashboard-components",
            Services: "playground/services",

            JourneyMilestoneAudience: "playground/journey-milestone-audience-modal-playground",
            AudienceSizeLabel: "playground/audience-size-label",
            CategoryList: "playground/categorylist",
            Journey: "playground/journey",
            LiveSearch: "playground/livesearch",
            DmDataTable: "playground/dmdatatable",
            CardDetailContainer: "playground/card-detail-container",
            DatePicker: "playground/datepicker",
            FaultError: "playground/faulterror",

            AudienceConnect: "playground/audienceconnect",
            AudienceFault: "playground/audiencefault",
            AudienceInputs: "playground/audienceinputs",
            AudienceOutputs: "playground/audienceoutputs",
            mpDataTable: "playground/mp-data-table",
            DiagramService: "playground/diagram-service",
            AudienceBuilder: "playground/audiencebuilder",

            InputTile: "playground/inputtile",
            OutputTile: "playground/outputtile",
            InputSelector: "playground/inputselector",
            OutputSelector: "playground/outputselector",
            InstructionComponents: "playground/instruction-components",
            QuickstartLivestream: "playground/quickstart-livestream",
            WizardBreadcrumbs: "playground/wizard-breadcrumbs",
            WizardManager: "playground/wizard-manager",
            HelpText: "playground/help-text",
            DropdownEvents: "playground/dropdown-events",

            StyleguideButtons: "playground/styleguide/buttons",
            StyleguideTextFields: "styleguide/textfields",
            StyleguideDropdowns: "styleguide/dropdowns",
            StyleguideCallouts: "styleguide/callouts",

            Video: "playground/video",
        },
    },

    [Suite.DataPlatform]: {
        Root: "data-platform",
        Trends: "trends",
        Setup: {
            Root: "setup",
            Connections: "setup/connections",
            Inputs: {
                Root: "setup/inputs",
                Feeds: "setup/inputs/feeds",
                Apps: "setup/inputs/apps",
            },
            Outputs: {
                Root: "setup/outputs",
                Event: "setup/outputs/event",
                Audience: "setup/outputs/audience",
                CookieSync: "setup/outputs/cookiesync",
                Gdpr: "setup/outputs/gdpr",
                LiveRamp: "setup/outputs/liveramp",
                Dsr: "setup/outputs/dsr",
                DataWarehouse: "setup/outputs/datawarehouse",
                Crm: "setup/outputs/crm",
            },
            Directory: {
                Root: "setup/directory",
                Listing: "setup/directory/listing",
            },
            WarehouseSync: "setup/warehouse-sync",
        },
        Livestream: "livestream",
        DataCatalog: "data-catalog",
        Transformations: {
            Root: "transformations",
            Rules: "transformations/rules",
            Plans: "transformations/plans",
            Filters: {
                Root: "transformations/filters",
                Platform: "transformations/filters/platform",
                Feed: "transformations/filters/feed",
            },
        },
        EventForwarding: "event-forwarding",
    },

    [Suite.Customer360]: {
        Root: "customer-360",
        Identity: {
            Root: "identity",
            // Summary: "identity/summary",
            GroupIdentities: "identity/group-identities",
        },
        UserProfile: "user-profile",
        Enrichment: {
            Root: "enrichment",
            CalculatedAttributes: "enrichment/calculated-attributes",
            PredictiveAttributes: "enrichment/predictive-attributes",
            PredictiveAttributesNew: "enrichment/predictive-attributes/new",
            PredictiveAttributesNextBestAction: "enrichment/predictive-attributes/next-best-action"
        },
    },

    [Suite.Segmentation]: {
        Root: "segmentation",
        Audiences: {
            Root: "audiences",
            RealTime: "audiences/real-time",
            Standard: "audiences/standard",
            Shared: "audiences/shared",
            SharedByAccount: "audiences/sharedbyaccount",
            Received: "audiences/received",
            P2P: "audiences/p2p",
        },
        Journeys: "journeys",
    },

    [Suite.Oversight]: {
        Root: "oversight",
        SystemAlerts: "system-alerts",
        Observability: {
            Root: "observability",
            List: "observability/trace/activity",
            Requests: "observability/trace/configurations"
        },
        DSR: "data-subject-requests",
        PrivacySettings: "privacy-settings",
    },
} as const;