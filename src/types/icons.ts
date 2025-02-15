import type { RequireAtLeastOne } from 'type-fest'

export type IconVariant = 'light' | 'duo-tone'

export type IconOptions = RequireAtLeastOne<
  {
    light?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    'duo-tone'?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    default: IconVariant
    deprecated?: string
  },
  IconVariant
>

// TODO: Mark icon names as @deprecated in ticket UNI-838.

export type IconNames =
  | 'abSplit'
  | 'account'
  | 'active'
  | 'add'
  | 'alicorn'
  | 'analytics'
  | 'annotation'
  | 'api'
  | 'audiences'
  | 'C360'
  | 'catalog'
  | 'chartColumn'
  | 'chartLine'
  | 'check'
  | 'circleNodes'
  | 'close'
  | 'cloud'
  | 'cohort'
  | 'connections'
  | 'conversion'
  | 'copy'
  | 'dashboard'
  | 'database'
  | 'dataPlatform'
  | 'delete'
  | 'directory'
  | 'dragAndDrop'
  | 'dropdownClose'
  | 'dropdownOpen'
  | 'dsr'
  | 'edit'
  | 'empty'
  | 'enrichment'
  | 'event'
  | 'eventAttribute'
  | 'favorite'
  | 'filter'
  | 'fitToScreen'
  | 'folderClosed'
  | 'forwarding'
  | 'fullScreen'
  | 'funnel'
  | 'gear'
  | 'grid'
  | 'heart'
  | 'help'
  | 'helpVideo'
  | 'identity'
  | 'info'
  | 'insights'
  | 'journeyAnalysis'
  | 'journeys'
  | 'jumpTo'
  | 'lightBulb'
  | 'link'
  | 'liveStream'
  | 'lock'
  | 'logout'
  | 'messageQuestion'
  | 'moreActions'
  | 'mpLogo'
  | 'myHub'
  | 'next'
  | 'notification'
  | 'notificationSubscribed'
  | 'notificationSubscribe'
  | 'observability'
  | 'openTab'
  | 'organization'
  | 'oversight'
  | 'overview'
  | 'paywall'
  | 'pipelines'
  | 'placeholder'
  | 'precision'
  | 'predictions'
  | 'premium'
  | 'premiumDt'
  | 'previous'
  | 'privacy'
  | 'privileges'
  | 'refreshFrequency'
  | 'remove'
  | 'savedProjects'
  | 'scheduledReport'
  | 'search'
  | 'segmentation'
  | 'segmentationAnalysis'
  | 'selected'
  | 'settings'
  | 'setup'
  | 'shieldKeyhole'
  | 'signout'
  | 'siteMap'
  | 'sparkles'
  | 'split'
  | 'support'
  | 'systemAlerts'
  | 'textWidget'
  | 'transformation'
  | 'trends'
  | 'unlock'
  | 'upload'
  | 'userAttribute'
  | 'userProfiles'
  | 'users'
  | 'wrench'
  | 'zoomIn'
  | 'zoomOut'
  | 'bannerFreemium'
  | 'stateEmpty'
  | 'stateError'
  | 'stateNoResults'
  | 'back'
