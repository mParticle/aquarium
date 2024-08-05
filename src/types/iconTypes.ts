import type { RequireAtLeastOne } from 'type-fest'

export type IconVariant = 'light' | 'duo-tone'

export type IconOptions = RequireAtLeastOne<
  {
    light?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    'duo-tone'?: React.ComponentType<React.SVGProps<SVGSVGElement>>
    default: IconVariant
    deprecated?: boolean
  },
  'light' | 'duo-tone'
>

/**
 * @deprecated Use "predictions" instead.
 */
export type DeprecatedIconNames = 'sparkles'

export const iconNamesArray = [
  'add',
  'alicorn',
  'analytics',
  'C360',
  'catalog',
  'chartColumn',
  'chartLine',
  'check',
  'circleNodes',
  'cloud',
  'connections',
  'database',
  'dsr',
  'empty',
  'enrichment',
  'event',
  'eventAttribute',
  'fitToScreen',
  'folderClosed',
  'forwarding',
  'gear',
  'grid',
  'heart',
  'help',
  'identity',
  'jumpTo',
  'lightBulb',
  'liveStream',
  'paywall',
  'messageQuestion',
  'mpLogo',
  'observability',
  'oversight',
  'predictions',
  'remove',
  'search',
  'segmentation',
  'shieldKeyhole',
  'signout',
  'siteMap',
  'sparkles', // Deprecated
  'split',
  'systemAlerts',
  'transformation',
  'upload',
  'userAttribute',
  'userProfiles',
  'users',
  'wrench',
  'zoomIn',
  'zoomOut',
  'premium',
  'helpVideo',
  'conversion',
  'next',
  'previous',
  'openTab',
  'directory',
  'lock',
  'unlock',
  'notification',
] as const

export type IconNames = (typeof iconNamesArray)[number]
