import { type IconOptions, type IconNames } from 'src/types/icons'

import {
  AcceptIcon,
  AddIcon,
  AlicornIcon,
  ArrayIcon,
  RateDownIcon,
  RateDownIconDt,
  RateStarIcon,
  RateStarIconDt,
  RateUpIcon,
  RateUpIconDt,
  RunIcon,
  AnalyticsIcon,
  AnalyticsIconDt,
  C360Icon,
  C360IconDt,
  CalculatedAttributeIcon,
  CriteriaGroupIcon,
  CatalogIcon,
  ChartColumnIcon,
  ChartLineIcon,
  CheckIcon,
  CircleNodesIcon,
  CloudIcon,
  ConnectionsIcon,
  DataPlatformIcon,
  DataPlatformIconDt,
  DatabaseIcon,
  DateIcon,
  DevicesIcon,
  DragAndDropIcon,
  DsrIcon,
  EmptyIcon,
  StateError,
  EnrichmentIcon,
  EventAttributeIcon,
  EventIcon,
  FitToScreen,
  FolderClosedIcon,
  ForwardingIcon,
  GearIcon,
  GenericIcon,
  GridIcon,
  GroupIcon,
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
  OversightIcon,
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
  PauseIcon,
  PlayIcon,
  OtherIcon,
  OtherDataIcon,
  ConversionIcon,
  PremiumIcon,
  NextIcon,
  NumberIcon,
  PreviousIcon,
  DirectoryIcon,
  LockIcon,
  UnlockIcon,
  NotificationIcon,
  NotificationSubscribedIcon,
  NotificationSubscribeIcon,
  PremiumIconDt,
  OverviewIcon,
  OverviewIconDt,
  FilterIcon,
  ActiveIcon,
  AgentCopilotIcon,
  AudienceGroupIcon,
  LinkIcon,
  ListIcon,
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
  BooleanIcon,
  StateEmpty,
  StateNoResults,
  Back,
  Flag,
  SubmitFeedback,
  Boost,
  Clone,
  Reorder,
  RefreshIcon,
  StringIcon,
  TimestampIcon,
} from 'src/components/icons'

export const Icons: Record<IconNames, IconOptions> = {
  abSplit: {
    light: AbSplit,
    default: 'light',
  },
  accept: {
    light: AcceptIcon,
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
  agentCopilot: {
    'duo-tone': AgentCopilotIcon,
    default: 'duo-tone',
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
    light: AnalyticsIcon,
    'duo-tone': AnalyticsIconDt,
    default: 'duo-tone',
  },
  annotation: {
    light: Annotation,
    default: 'light',
  },
  array: {
    'duo-tone': ArrayIcon,
    default: 'duo-tone',
  },
  calculatedAttribute: {
    light: CalculatedAttributeIcon,
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
  audienceGroup: {
    light: AudienceGroupIcon,
    default: 'light',
  },
  C360: {
    light: C360Icon,
    'duo-tone': C360IconDt,
    default: 'duo-tone',
    deprecated: 'analytics',
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
  criteriaGroup: {
    light: CriteriaGroupIcon,
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
    light: DataPlatformIcon,
    'duo-tone': DataPlatformIconDt,
    default: 'duo-tone',
  },
  date: {
    light: DateIcon,
    default: 'light',
  },
  delete: {
    light: Delete,
    default: 'light',
  },
  devices: {
    light: DevicesIcon,
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
  flag: {
    light: Flag,
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
  generic: {
    light: GenericIcon,
    default: 'light',
  },
  grid: {
    light: GridIcon,
    default: 'light',
    deprecated: 'myHub',
  },
  group: {
    light: GroupIcon,
    default: 'light',
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
    deprecated: 'help',
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
    deprecated: 'openTab',
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
  list: {
    'duo-tone': ListIcon,
    default: 'duo-tone',
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
  number: {
    light: NumberIcon,
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
  other: {
    light: OtherIcon,
    default: 'light',
  },
  otherData: {
    'duo-tone': OtherDataIcon,
    default: 'duo-tone',
  },
  oversight: {
    light: OversightIcon,
    'duo-tone': OversightIconDt,
    default: 'duo-tone',
  },
  overview: {
    light: OverviewIcon,
    'duo-tone': OverviewIconDt,
    default: 'duo-tone',
    deprecated: 'dashboard',
  },
  paywall: {
    light: PaywallIcon,
    default: 'light',
  },
  pause: {
    light: PauseIcon,
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
  play: {
    light: PlayIcon,
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
  rateDown: {
    light: RateDownIcon,
    'duo-tone': RateDownIconDt,
    default: 'light',
  },
  rateStar: {
    light: RateStarIcon,
    'duo-tone': RateStarIconDt,
    default: 'light',
  },
  rateUp: {
    light: RateUpIcon,
    'duo-tone': RateUpIconDt,
    default: 'light',
  },
  run: {
    light: RunIcon,
    default: 'light',
  },
  reorder: {
    light: Reorder,
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
  string: {
    'duo-tone': StringIcon,
    default: 'duo-tone',
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
  timestamp: {
    'duo-tone': TimestampIcon,
    default: 'duo-tone',
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
    deprecated: 'premium',
  },
  boolean: {
    light: BooleanIcon,
    default: 'light',
  },
  stateEmpty: {
    light: StateEmpty,
    default: 'light',
    deprecated: 'stateError',
  },
  stateError: {
    light: StateError,
    default: 'light',
  },
  stateNoResults: {
    light: StateNoResults,
    default: 'light',
    deprecated: 'stateEmpty',
  },
  back: {
    light: Back,
    default: 'light',
  },
  submitFeedback: {
    light: SubmitFeedback,
    default: 'light',
  },
  boost: {
    light: Boost,
    default: 'light',
  },
  clone: {
    light: Clone,
    default: 'light',
  },
  refresh: {
    light: RefreshIcon,
    default: 'light',
  },
} as const
