import { type IconOptions, type IconNames } from 'src/types/iconTypes'

import AddIcon from 'src/assets/svg/add.svg?react'
import AlicornIcon from 'src/assets/svg/alicorn.svg?react'
import AnalyticsIconDt from 'src/assets/svg/mp_pm_dt_analytics.svg?react'
import C360IconDt from 'src/assets/svg/mp_pm_dt_c360.svg?react'
import CatalogIcon from 'src/assets/svg/mp_pm_lt_catalog.svg?react'
import ChartColumnIcon from 'src/assets/svg/chart-column.svg?react'
import ChartLineIcon from 'src/assets/svg/chart-line.svg?react'
import CheckIcon from 'src/assets/svg/check.svg?react'
import CircleNodesIcon from 'src/assets/svg/circle-nodes.svg?react'
import CloudIcon from 'src/assets/svg/cloud.svg?react'
import ConnectionsIcon from 'src/assets/svg/connections.svg?react'
import DataPlatformIconDt from 'src/assets/svg/mp_pm_dt_data-platform.svg?react'
import DatabaseIcon from 'src/assets/svg/database.svg?react'
import DsrIcon from 'src/assets/svg/mp_pm_lt_dsr.svg?react'
import EmptyIcon from 'src/assets/svg/empty.svg?react'
import EnrichmentIcon from 'src/assets/svg/mp_pm_lt_enrichment.svg?react'
import EventAttributeIcon from 'src/assets/svg/event-attribute.svg?react'
import EventIcon from 'src/assets/svg/event.svg?react'
import FitToScreen from 'src/assets/svg/mp_act_lt_fit-to-screen.svg?react'
import FolderClosedIcon from 'src/assets/svg/folder-closed.svg?react'
import ForwardingIcon from 'src/assets/svg/mp_pm_lt_forwarding.svg?react'
import GearIcon from 'src/assets/svg/gear.svg?react'
import GridIcon from 'src/assets/svg/grid.svg?react'
import HeartIcon from 'src/assets/svg/heart.svg?react'
import HelpIcon from 'src/assets/svg/help.svg?react'
import IdentityIcon from 'src/assets/svg/mp_pm_lt_identity.svg?react'
import JumpToIcon from 'src/assets/svg/mp_act_lt_jump-to.svg?react'
import LightBulbIcon from 'src/assets/svg/lightbulb.svg?react'
import LiveStreamIcon from 'src/assets/svg/mp_pm_lt_live-stream.svg?react'
import PaywallIcon from 'src/assets/svg/paywall.svg?react'
import MessageQuestionIcon from 'src/assets/svg/message-question.svg?react'
import MpLogoIcon from 'src/assets/svg/mpLogo.svg?react'
import ObservabilityIcon from 'src/assets/svg/mp_pm_lt_observability.svg?react'
import OversightIconDt from 'src/assets/svg/mp_pm_dt_oversight.svg?react'
import PredictionsIcon from 'src/assets/svg/mp_pm_lt_predictions.svg?react'
import PredictionsIconDt from 'src/assets/svg/mp_pm_dt_predictions.svg?react'
import RemoveIcon from 'src/assets/svg/remove.svg?react'
import SearchIcon from 'src/assets/svg/search.svg?react'
import SegmentationIconDt from 'src/assets/svg/mp_pm_dt_segmentation.svg?react'
import ShieldKeyholeIcon from 'src/assets/svg/shield-keyhole.svg?react'
import SignoutIcon from 'src/assets/svg/signout.svg?react'
import SplitIcon from 'src/assets/svg/split.svg?react'
import SystemAlertsIcon from 'src/assets/svg/mp_pm_lt_system-alerts.svg?react'
import TransformationsIcon from 'src/assets/svg/mp_pm_lt_transformations.svg?react'
import UploadIcon from 'src/assets/svg/mp_act_it_upload.svg?react'
import UserAttributeIcon from 'src/assets/svg/user-attribute.svg?react'
import UserProfilesIcon from 'src/assets/svg/mp_pm_lt_userprofiles.svg?react'
import UsersIcon from 'src/assets/svg/mp_info_lt_users.svg?react'
import WrenchIcon from 'src/assets/svg/wrench.svg?react'
import ZoomIn from 'src/assets/svg/mp_act_lt_zoom-in.svg?react'
import ZoomOut from 'src/assets/svg/mp_act_lt_zoom-out.svg?react'
import PremiumIcon from 'src/assets/svg/mp_info_lt_premium.svg?react'
import ConversionIcon from 'src/assets/svg/mp_info_lt_conversion.svg?react'
import HelpVideoIcon from 'src/assets/svg/mp_info_lt_help-video.svg?react'
import NextIcon from 'src/assets/svg/mp_act_lt_next.svg?react'
import OpenTabIcon from 'src/assets/svg/mp_act_lt_open-tab.svg?react'
import PreviousIcon from 'src/assets/svg/mp_act_lt_previous.svg?react'
import DirectoryIcon from 'src/assets/svg/mp_pm_lt_directory.svg?react'
import LockIcon from 'src/assets/svg/mp_act_lt_lock.svg?react'
import UnlockIcon from 'src/assets/svg/mp_act_lt_unlock.svg?react'
import NotificationIcon from 'src/assets/svg/mp_pm_lt_notification.svg?react'
import PremiumIconDt from 'src/assets/svg/mp_info_dt_premium.svg?react'

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
  /**
   * @deprecated This icon is old. Use "predictions" instead.
   * This will be removed once all icons are updated.
   */
  sparkles: {
    light: PredictionsIcon,
    'duo-tone': PredictionsIconDt,
    default: 'light',
    deprecated: true,
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
