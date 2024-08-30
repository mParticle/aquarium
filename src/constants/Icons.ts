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
  OverviewIconDt,
  FilterIcon,
  ActiveIcon,
  LinkIcon,
  InfoIcon,
  Placeholder,
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
    deprecated: 'trends',
  },
  chartLine: {
    light: ChartLineIcon,
    default: 'light',
    deprecated: 'trends',
  },
  trends: {
    light: ChartLineIcon,
    default: 'light',
  },
  check: {
    light: CheckIcon,
    default: 'light',
    deprecated: 'selected',
  },
  selected: {
    light: CheckIcon,
    default: 'light',
  },
  circleNodes: {
    light: CircleNodesIcon,
    default: 'light',
    deprecated: 'pipelines',
  },
  pipelines: {
    light: CircleNodesIcon,
    default: 'light',
  },
  cloud: {
    light: CloudIcon,
    default: 'light',
    deprecated: 'api',
  },
  api: {
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
    deprecated: 'savedProjects',
  },
  savedProjects: {
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
    deprecated: 'settings',
  },
  settings: {
    light: GearIcon,
    default: 'light',
  },
  grid: {
    light: GridIcon,
    default: 'light',
    deprecated: 'myHub',
  },
  myHub: {
    light: GridIcon,
    default: 'light',
  },
  heart: {
    light: HeartIcon,
    default: 'light',
    deprecated: 'favorite',
  },
  favorite: {
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
    deprecated: 'insights',
  },
  insights: {
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
    deprecated: 'support',
  },
  support: {
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
  close: {
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
    deprecated: 'privacy',
  },
  privacy: {
    light: ShieldKeyholeIcon,
    default: 'light',
  },
  signout: {
    light: SignoutIcon,
    default: 'light',
    deprecated: 'logout',
  },
  logout: {
    light: SignoutIcon,
    default: 'light',
  },
  siteMap: {
    'duo-tone': DataPlatformIconDt,
    default: 'duo-tone',
    deprecated: 'dataPlatform',
  },
  dataPlatform: {
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
    deprecated: 'journeys',
  },
  journeys: {
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
  audiences: {
    light: UsersIcon,
    default: 'light',
  },
  wrench: {
    light: WrenchIcon,
    default: 'light',
    deprecated: 'setup',
  },
  setup: {
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
  overview: {
    'duo-tone': OverviewIconDt,
    default: 'duo-tone',
  },
  filter: {
    light: FilterIcon,
    default: 'light',
  },
  active: {
    light: ActiveIcon,
    default: 'light',
  },
  link: {
    light: LinkIcon,
    default: 'light',
  },
  info: {
    light: InfoIcon,
    default: 'light',
  },
  placeholder: {
    light: Placeholder,
    default: 'light',
  },
} as const
