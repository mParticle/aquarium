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
  DragAndDropIcon,
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
  PrecisionIcon,
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
  NotificationSubscribedIcon,
  NotificationSubscribeIcon,
  PremiumIconDt,
  OverviewIconDt,
  FilterIcon,
  ActiveIcon,
  LinkIcon,
  InfoIcon,
  Placeholder,
  Organization,
  JourneyAnalysis,
  Dashboard,
  Account,
  TextWidget,
  RefreshFrequency,
  Privileges,
  Funnel,
  Cohort,
  Annotation,
  Delete,
  DropdownOpen,
  DropdownClose,
  SegmentationAnalysis,
  ScheduledReport,
  FullScreen,
  Edit,
  Copy,
  MoreActions,
  AbSplit,
  BannerFreemium,
} from 'src/components/icons'

export const Icons: Record<IconNames, IconOptions> = {
  abSplit: {
    light: AbSplit,
    default: 'light',
  },
  account: {
    light: Account,
    default: 'light',
  },
  active: {
    light: ActiveIcon,
    default: 'light',
  },
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
  annotation: {
    light: Annotation,
    default: 'light',
  },
  api: {
    light: CloudIcon,
    default: 'light',
  },
  audiences: {
    light: UsersIcon,
    default: 'light',
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
  check: {
    light: CheckIcon,
    default: 'light',
    deprecated: 'selected',
  },
  circleNodes: {
    light: CircleNodesIcon,
    default: 'light',
    deprecated: 'pipelines',
  },
  close: {
    light: RemoveIcon,
    default: 'light',
  },
  cloud: {
    light: CloudIcon,
    default: 'light',
    deprecated: 'api',
  },
  cohort: {
    light: Cohort,
    default: 'light',
  },
  connections: {
    light: ConnectionsIcon,
    default: 'light',
  },
  conversion: {
    light: ConversionIcon,
    default: 'light',
  },
  copy: {
    light: Copy,
    default: 'light',
  },
  dashboard: {
    light: Dashboard,
    default: 'light',
  },
  database: {
    light: DatabaseIcon,
    default: 'light',
  },
  dataPlatform: {
    'duo-tone': DataPlatformIconDt,
    default: 'duo-tone',
  },
  delete: {
    light: Delete,
    default: 'light',
  },
  directory: {
    light: DirectoryIcon,
    default: 'light',
  },
  dragAndDrop: {
    light: DragAndDropIcon,
    default: 'light',
  },
  dropdownClose: {
    light: DropdownClose,
    default: 'light',
  },
  dropdownOpen: {
    light: DropdownOpen,
    default: 'light',
  },
  dsr: {
    light: DsrIcon,
    default: 'light',
  },
  edit: {
    light: Edit,
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
  favorite: {
    light: HeartIcon,
    default: 'light',
  },
  filter: {
    light: FilterIcon,
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
  forwarding: {
    light: ForwardingIcon,
    default: 'light',
  },
  fullScreen: {
    light: FullScreen,
    default: 'light',
  },
  funnel: {
    light: Funnel,
    default: 'light',
  },
  gear: {
    light: GearIcon,
    default: 'light',
    deprecated: 'settings',
  },
  grid: {
    light: GridIcon,
    default: 'light',
    deprecated: 'myHub',
  },
  heart: {
    light: HeartIcon,
    default: 'light',
    deprecated: 'favorite',
  },
  help: {
    light: HelpIcon,
    default: 'light',
  },
  helpVideo: {
    light: HelpVideoIcon,
    default: 'light',
  },
  identity: {
    light: IdentityIcon,
    default: 'light',
  },
  info: {
    light: InfoIcon,
    default: 'light',
  },
  insights: {
    light: LightBulbIcon,
    default: 'light',
  },
  journeyAnalysis: {
    light: JourneyAnalysis,
    default: 'light',
  },
  journeys: {
    light: SplitIcon,
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
  link: {
    light: LinkIcon,
    default: 'light',
  },
  liveStream: {
    light: LiveStreamIcon,
    default: 'light',
  },
  lock: {
    light: LockIcon,
    default: 'light',
  },
  logout: {
    light: SignoutIcon,
    default: 'light',
  },
  messageQuestion: {
    light: MessageQuestionIcon,
    default: 'light',
    deprecated: 'support',
  },
  moreActions: {
    light: MoreActions,
    default: 'light',
  },
  mpLogo: {
    light: MpLogoIcon,
    default: 'light',
  },
  myHub: {
    light: GridIcon,
    default: 'light',
  },
  next: {
    light: NextIcon,
    default: 'light',
  },
  notification: {
    light: NotificationIcon,
    default: 'light',
  },
  notificationSubscribed: {
    light: NotificationSubscribedIcon,
    default: 'light',
  },
  notificationSubscribe: {
    light: NotificationSubscribeIcon,
    default: 'light',
  },
  observability: {
    light: ObservabilityIcon,
    default: 'light',
  },
  openTab: {
    light: OpenTabIcon,
    default: 'light',
  },
  organization: {
    light: Organization,
    default: 'light',
  },
  oversight: {
    'duo-tone': OversightIconDt,
    default: 'duo-tone',
  },
  overview: {
    'duo-tone': OverviewIconDt,
    default: 'duo-tone',
  },
  paywall: {
    light: PaywallIcon,
    default: 'light',
  },
  pipelines: {
    light: CircleNodesIcon,
    default: 'light',
  },
  placeholder: {
    light: Placeholder,
    default: 'light',
  },
  precision: {
    light: PrecisionIcon,
    default: 'light',
  },
  predictions: {
    light: PredictionsIcon,
    'duo-tone': PredictionsIconDt,
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
  previous: {
    light: PreviousIcon,
    default: 'light',
  },
  privacy: {
    light: ShieldKeyholeIcon,
    default: 'light',
  },
  privileges: {
    light: Privileges,
    default: 'light',
  },
  refreshFrequency: {
    light: RefreshFrequency,
    default: 'light',
  },
  remove: {
    light: RemoveIcon,
    default: 'light',
  },
  savedProjects: {
    light: FolderClosedIcon,
    default: 'light',
  },
  scheduledReport: {
    light: ScheduledReport,
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
  segmentationAnalysis: {
    light: SegmentationAnalysis,
    default: 'light',
  },
  selected: {
    light: CheckIcon,
    default: 'light',
  },
  settings: {
    light: GearIcon,
    default: 'light',
  },
  setup: {
    light: WrenchIcon,
    default: 'light',
  },
  shieldKeyhole: {
    light: ShieldKeyholeIcon,
    default: 'light',
    deprecated: 'privacy',
  },
  signout: {
    light: SignoutIcon,
    default: 'light',
    deprecated: 'logout',
  },
  siteMap: {
    'duo-tone': DataPlatformIconDt,
    default: 'duo-tone',
    deprecated: 'dataPlatform',
  },
  sparkles: {
    light: PredictionsIcon,
    'duo-tone': PredictionsIconDt,
    default: 'duo-tone',
    deprecated: 'predictions',
  },
  split: {
    light: SplitIcon,
    default: 'light',
    deprecated: 'journeys',
  },
  support: {
    light: MessageQuestionIcon,
    default: 'light',
  },
  systemAlerts: {
    light: SystemAlertsIcon,
    default: 'light',
  },
  textWidget: {
    light: TextWidget,
    default: 'light',
  },
  transformation: {
    light: TransformationsIcon,
    default: 'light',
  },
  trends: {
    light: ChartLineIcon,
    default: 'light',
  },
  unlock: {
    light: UnlockIcon,
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
    deprecated: 'setup',
  },
  zoomIn: {
    light: ZoomIn,
    default: 'light',
  },
  zoomOut: {
    light: ZoomOut,
    default: 'light',
  },
  bannerFreemium: {
    'duo-tone': BannerFreemium,
    default: 'duo-tone',
  },
} as const
