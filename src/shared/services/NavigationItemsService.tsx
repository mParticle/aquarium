import { Icon, type IGlobalNavigationItem, RoutesAuthorizationsService, Utils } from 'src/components'
import { Paths } from 'src/shared/Paths'
import { mParticleUserPreferenceIds, userPreferences } from 'src/shared/UserPreferences'
import { FeatureFlagsService, FeatureFlag } from 'src/shared/services/FeatureFlagsService'

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
  Segmentation_Audiences_RealTime = 'segmentation_audiences_realTime',
  Analytics = 'analytics',
  Analytics_MyHub = 'analytics_myHub',
  Analytics_Saved = 'analytics_saved',
  Analytics_Data = 'analytics_data',
  Analytics_Favorites = 'analytics_favorites',
}

const allNavigationItems: IGlobalNavigationItem[] = [
  {
    id: NavigationItemId.Overview,
    label: 'Overview',
    type: 'link',
    icon: <Icon name="overview" variant="light" />,
    hrefOptions: { href: Paths.Root.Overview.Root },
  },
  {
    id: NavigationItemId.Oversight,
    label: 'Oversight',
    type: 'menu',
    icon: <Icon name="oversight" variant="light" />,
    children: [
      {
        id: NavigationItemId.Oversight_SystemAlerts,
        label: 'System Alerts',
        type: 'link',
        hrefOptions: { href: Paths.Oversight.SystemAlerts },
      },
      {
        id: NavigationItemId.Oversight_Observability,
        label: 'Observability',
        type: 'menu',
        children: [
          {
            id: NavigationItemId.Oversight_Observability_TraceActivity,
            label: 'Trace Activity',
            type: 'link',
            hrefOptions: { href: Paths.Oversight.Observability.List },
          },
          {
            id: NavigationItemId.Oversight_Observability_TraceConfigurations,
            label: 'Trace Configurations',
            type: 'link',
            hrefOptions: { href: Paths.Oversight.Observability.Requests },
          },
        ],
      },
      {
        id: NavigationItemId.Oversight_Privacy,
        label: 'Privacy',
        type: 'menu',
        children: [
          {
            id: NavigationItemId.Oversight_Privacy_DSRs,
            label: 'Data Subject Requests',
            type: 'link',
            hrefOptions: { href: Paths.Oversight.DSR },
          },
          {
            id: NavigationItemId.Oversight_Privacy_PrivacySettings,
            label: 'Privacy Settings',
            type: 'link',
            hrefOptions: { href: Paths.Oversight.PrivacySettings },
          },
        ],
      },
    ],
  },
  {
    id: NavigationItemId.DataPlatform,
    label: 'Data Platform',
    type: 'menu',
    icon: <Icon name="dataPlatform" variant="light" />,
    children: [
      {
        id: NavigationItemId.DataPlatform_Trends,
        label: 'Trends',
        type: 'link',
        hrefOptions: { href: Paths.DataPlatform.Trends },
      },
      {
        id: NavigationItemId.DataPlatform_Setup,
        label: 'Setup',
        type: 'menu',
        children: [
          {
            id: NavigationItemId.DataPlatform_Setup_Connections,
            label: 'Connections',
            type: 'link',
            hrefOptions: { href: Paths.DataPlatform.Setup.Connections },
          },
          {
            id: NavigationItemId.DataPlatform_Setup_Inputs,
            label: 'Inputs',
            type: 'link',
            hrefOptions: { href: Paths.DataPlatform.Setup.Inputs.Root },
          },
          {
            id: NavigationItemId.DataPlatform_Setup_Outputs,
            label: 'Outputs',
            type: 'link',
            hrefOptions: { href: Paths.DataPlatform.Setup.Outputs.Root },
          },
          {
            id: NavigationItemId.DataPlatform_Setup_Directory,
            label: 'Directory',
            type: 'link',
            hrefOptions: { href: Paths.DataPlatform.Setup.Directory.Root },
          },
        ],
      },
      {
        id: NavigationItemId.DataPlatform_LiveStream,
        label: 'Live Stream',
        type: 'link',
        hrefOptions: { href: Paths.DataPlatform.Livestream },
      },
      {
        id: NavigationItemId.DataPlatform_DataCatalog,
        label: 'Data Catalog',
        type: 'link',
        hrefOptions: { href: Paths.DataPlatform.DataCatalog },
      },
      {
        id: NavigationItemId.DataPlatform_Transformations_Rules,
        label: 'Rules',
        type: 'link',
        hrefOptions: { href: Paths.DataPlatform.Transformations.Rules },
      },
      {
        id: NavigationItemId.DataPlatform_Transformations_Plans,
        label: 'Plans',
        type: 'link',
        hrefOptions: { href: Paths.DataPlatform.Transformations.Plans },
      },
      {
        id: NavigationItemId.DataPlatform_Transformations_Filters,
        label: 'Filters',
        type: 'menu',
        children: [
          {
            id: NavigationItemId.DataPlatform_Transformations_Filters_PlatformFilters,
            label: 'Platform Filters',
            type: 'link',
            hrefOptions: { href: Paths.DataPlatform.Transformations.Filters.Platform },
          },
          {
            id: NavigationItemId.DataPlatform_Transformations_Filters_FeedFilters,
            label: 'Feed Filters',
            type: 'link',
            hrefOptions: { href: Paths.DataPlatform.Transformations.Filters.Feed },
          },
        ],
      },
      {
        id: NavigationItemId.DataPlatform_EventForwarding,
        label: 'Event Forwarding',
        type: 'link',
        hrefOptions: { href: Paths.DataPlatform.EventForwarding },
      },
    ],
  },
  {
    id: NavigationItemId.Customer360,
    label: 'Customer 360',
    type: 'menu',
    icon: <Icon name="C360" variant="light" />,
    children: [
      {
        id: NavigationItemId.Customer360_UserProfiles,
        label: 'User Profiles',
        type: 'link',
        hrefOptions: { href: Paths.Customer360.UserProfile },
      },
      {
        id: NavigationItemId.Customer360_GroupIdentity,
        label: 'Group Identity',
        type: 'link',
        hrefOptions: { href: Paths.Customer360.Identity.GroupIdentities },
      },
      {
        id: NavigationItemId.Customer360_Enrichment_CalculatedAttributes,
        label: 'Calculated Attributes',
        type: 'link',
        hrefOptions: { href: Paths.Customer360.Enrichment.CalculatedAttributes },
      },
      {
        id: NavigationItemId.Customer360_Enrichment_PredictiveAttributes,
        label: 'Predictive Attributes',
        type: 'link',
        hrefOptions: { href: Paths.Customer360.Enrichment.PredictiveAttributes },
      },
    ],
  },
  {
    id: NavigationItemId.Predictions,
    label: 'Predictions',
    icon: <Icon name="predictions" variant="light" />,
    type: 'link',
    hrefOptions: { href: Paths.Root.Predictions },
  },
  {
    id: NavigationItemId.Analytics,
    label: 'Analytics',
    type: 'menu',
    icon: <Icon name="analytics" variant="light" />,
    children: [
      {
        id: NavigationItemId.Analytics_MyHub,
        label: 'My Hub',
        type: 'link',
        visible: !Utils.isMobile(),
        hrefOptions: { href: Paths.Analytics.MyHub },
      },
      {
        id: NavigationItemId.Analytics_Saved,
        label: 'Saved',
        type: 'link',
        hrefOptions: { href: Paths.Analytics.Saved },
      },
      {
        id: NavigationItemId.Analytics_Data,
        label: 'Data',
        type: 'link',
        visible: !Utils.isMobile(),
        hrefOptions: { href: Paths.Analytics.Data },
      },
      {
        id: NavigationItemId.Analytics_Favorites,
        label: 'Favorites',
        type: 'link',
        hrefOptions: { href: Paths.Analytics.Favorites },
      },
    ],
  },
  {
    id: NavigationItemId.Segmentation,
    label: 'Segmentation',
    type: 'menu',
    icon: <Icon name="audiences" variant="light" />,
    children: [
      {
        id: NavigationItemId.Segmentation_Journeys,
        label: 'Audiences',
        type: 'link',
        hrefOptions: { href: Paths.Segmentation.Journeys },
      },
      {
        id: NavigationItemId.Segmentation_Audiences,
        label: 'Classic Audiences',
        type: 'menu',
        children: [
          {
            id: NavigationItemId.Segmentation_Audiences_Standard,
            label: 'Standard Audiences',
            type: 'link',
            hrefOptions: { href: Paths.Segmentation.Audiences.Standard },
          },
          {
            id: NavigationItemId.Segmentation_Audiences_RealTime,
            label: 'Real-time Audiences',
            type: 'link',
            hrefOptions: { href: Paths.Segmentation.Audiences.RealTime },
          },
        ],
      },
    ],
  },
]

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class NavigationItemsService {
  public static get navigationItems() {
    return allNavigationItems
  }

  public static initialize() {
    this.traverseAllItems(item => {
      if (item.type === 'link' && item.hrefOptions?.href) {
        item.disabled = !RoutesAuthorizationsService.isRouteAuthorized(item.hrefOptions.href)
      }
    })

    const realtimeAudience = this.findItemById(NavigationItemId.Segmentation_Audiences_RealTime)

    const isInNewExperience = FeatureFlagsService.isEnabled(FeatureFlag.TemporarilyUnifiedExperience)
      ? userPreferences[mParticleUserPreferenceIds.IsOnTemporarilyUnifiedExperience].optedIn
      : userPreferences[mParticleUserPreferenceIds.IsJourneysUnified].optedIn

    const isJourneysEnabled = isInNewExperience || !window.mParticleConfig.organizationPolicy.uiEnableAudiencesRealTime

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    realtimeAudience!.visible = !isJourneysEnabled
  }

  public static findItemById(id: NavigationItemId): IGlobalNavigationItem | undefined {
    const findItem = (items: IGlobalNavigationItem[]): IGlobalNavigationItem | undefined => {
      for (const item of items) {
        if (item.id === id) {
          return item
        }

        if (item.type === 'menu' && item.children) {
          const found = findItem(item.children)
          if (found) {
            return found
          }
        }
      }

      return undefined
    }

    return findItem(allNavigationItems)
  }

  private static traverseItems(items: IGlobalNavigationItem[], callback: (item: IGlobalNavigationItem) => void) {
    for (const item of items) {
      callback(item)
      if (item.type === 'menu' && item.children) {
        this.traverseItems(item.children, callback)
      }
    }
  }

  public static traverseAllItems(callback: (item: IGlobalNavigationItem) => void) {
    this.traverseItems(allNavigationItems, callback)
  }
}
