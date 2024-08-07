import { type IconOptions, type IconNames } from 'src/types/icons'

import {
  AddIcon,
  AlicornIcon,
  AnalyticsIconDt,
  C360IconDt,
  CatalogIcon,
  ChartColumnIcon,
  ChartLineIcon,
  CheckIcon,
  CircleNodesIcon,
  CloudIcon,
  ConnectionsIcon,
  DataPlatformIconDt,
  DatabaseIcon,
  DsrIcon,
  EmptyIcon,
  EnrichmentIcon,
  EventAttributeIcon,
  EventIcon,
  FitToScreen,
  FolderClosedIcon,
  ForwardingIcon,
  GearIcon,
  GridIcon,
  HeartIcon,
  HelpIcon,
  HelpVideoIcon,
  IdentityIcon,
  JumpToIcon,
  LightBulbIcon,
  LiveStreamIcon,
  PaywallIcon,
  MessageQuestionIcon,
  MpLogoIcon,
  ObservabilityIcon,
  OversightIconDt,
  PredictionsIconDt,
  PredictionsIcon,
  RemoveIcon,
  SearchIcon,
  SegmentationIconDt,
  ShieldKeyholeIcon,
  SignoutIcon,
  SplitIcon,
  SystemAlertsIcon,
  TransformationsIcon,
  UploadIcon,
  UserAttributeIcon,
  UserProfilesIcon,
  UsersIcon,
  WrenchIcon,
  ZoomIn,
  ZoomOut,
  OpenTabIcon,
  ConversionIcon,
  PremiumIcon,
  NextIcon,
  PreviousIcon,
  DirectoryIcon,
  LockIcon,
  UnlockIcon,
  NotificationIcon,
  PremiumIconDt,
} from 'src/components/icons'

export const Icons: Record<IconNames, IconOptions> = {
  add: {
    light: AddIcon,
    'duo-tone': AddIcon,
    default: 'duo-tone',
  },
  alicorn: {
    light: AlicornIcon,
    default: 'light',
  },
  analytics: {
    'duo-tone': AnalyticsIconDt,
    default: 'duo-tone',
  },
  C360: {
    'duo-tone': C360IconDt,
    default: 'duo-tone',
  },
  catalog: {
    light: CatalogIcon,
    default: 'light',
  },
  chartColumn: {
    light: ChartColumnIcon,
    default: 'light',
  },
  chartLine: {
    light: ChartLineIcon,
    default: 'light',
  },
  check: {
    light: CheckIcon,
    default: 'light',
  },
  circleNodes: {
    light: CircleNodesIcon,
    default: 'light',
  },
  cloud: {
    light: CloudIcon,
    default: 'light',
  },
  connections: {
    light: ConnectionsIcon,
    default: 'light',
  },
  database: {
    light: DatabaseIcon,
    default: 'light',
  },
  dsr: {
    light: DsrIcon,
    default: 'light',
  },
  empty: {
    light: EmptyIcon,
    default: 'light',
  },
  enrichment: {
    light: EnrichmentIcon,
    default: 'light',
  },
  event: {
    light: EventIcon,
    default: 'light',
  },
  eventAttribute: {
    light: EventAttributeIcon,
    default: 'light',
  },
  fitToScreen: {
    light: FitToScreen,
    default: 'light',
  },
  folderClosed: {
    light: FolderClosedIcon,
    default: 'light',
  },
  forwarding: {
    light: ForwardingIcon,
    default: 'light',
  },
  gear: {
    light: GearIcon,
    default: 'light',
  },
  grid: {
    light: GridIcon,
    default: 'light',
  },
  heart: {
    light: HeartIcon,
    default: 'light',
  },
  help: {
    light: HelpIcon,
    default: 'light',
  },
  identity: {
    light: IdentityIcon,
    default: 'light',
  },
  jumpTo: {
    light: JumpToIcon,
    default: 'light',
  },
  lightBulb: {
    light: LightBulbIcon,
    default: 'light',
  },
  liveStream: {
    light: LiveStreamIcon,
    default: 'light',
  },
  paywall: {
    light: PaywallIcon,
    default: 'light',
  },
  messageQuestion: {
    light: MessageQuestionIcon,
    default: 'light',
  },
  mpLogo: {
    light: MpLogoIcon,
    default: 'light',
  },
  observability: {
    light: ObservabilityIcon,
    default: 'light',
  },
  oversight: {
    'duo-tone': OversightIconDt,
    default: 'duo-tone',
  },
  remove: {
    light: RemoveIcon,
    default: 'light',
  },
  search: {
    light: SearchIcon,
    default: 'light',
  },
  segmentation: {
    'duo-tone': SegmentationIconDt,
    default: 'duo-tone',
  },
  shieldKeyhole: {
    light: ShieldKeyholeIcon,
    default: 'light',
  },
  signout: {
    light: SignoutIcon,
    default: 'light',
  },
  siteMap: {
    'duo-tone': DataPlatformIconDt,
    default: 'duo-tone',
  },
  sparkles: {
    light: PredictionsIcon,
    'duo-tone': PredictionsIconDt,
    default: 'duo-tone',
    deprecated: 'predictions',
  },
  predictions: {
    light: PredictionsIcon,
    'duo-tone': PredictionsIconDt,
    default: 'light',
  },
  split: {
    light: SplitIcon,
    default: 'light',
  },
  systemAlerts: {
    light: SystemAlertsIcon,
    default: 'light',
  },
  transformation: {
    light: TransformationsIcon,
    default: 'light',
  },
  upload: {
    light: UploadIcon,
    default: 'light',
  },
  userAttribute: {
    light: UserAttributeIcon,
    default: 'light',
  },
  userProfiles: {
    light: UserProfilesIcon,
    default: 'light',
  },
  users: {
    light: UsersIcon,
    default: 'light',
  },
  wrench: {
    light: WrenchIcon,
    default: 'light',
  },
  zoomIn: {
    light: ZoomIn,
    default: 'light',
  },
  zoomOut: {
    light: ZoomOut,
    default: 'light',
  },
  premium: {
    light: PremiumIcon,
    'duo-tone': PremiumIconDt,
    default: 'light',
  },
  premiumDt: {
    light: PremiumIcon,
    'duo-tone': PremiumIconDt,
    default: 'duo-tone',
    deprecated: 'premium',
  },
  helpVideo: {
    light: HelpVideoIcon,
    default: 'light',
  },
  conversion: {
    light: ConversionIcon,
    default: 'light',
  },
  next: {
    light: NextIcon,
    default: 'light',
  },
  previous: {
    light: PreviousIcon,
    default: 'light',
  },
  openTab: {
    light: OpenTabIcon,
    default: 'light',
  },
  directory: {
    light: DirectoryIcon,
    default: 'light',
  },
  lock: {
    light: LockIcon,
    default: 'light',
  },
  unlock: {
    light: UnlockIcon,
    default: 'light',
  },
  notification: {
    light: NotificationIcon,
    default: 'light',
  },
} as const
