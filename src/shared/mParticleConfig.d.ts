import { type FeatureFlag } from 'src/shared/services/FeatureFlagsService'

declare global {
  interface mParticleConfig {
    accountAwsKeySecretId: string
    accountId: number
    accountLimits: IAccountLimits
    accountName: string
    accounts: any
    allOrganizations: any
    allowResourceSharing: boolean
    appFamilyId: number
    basePath: string
    baseUrl: string
    childCallback: () => void
    dataPlanUIMaxDataPoints: number
    defaultToAudienceIdAsExternalName: boolean
    email: string
    enableCookieSyncModules: boolean
    hasAwsKeyAndSecret: boolean
    isCCPAEnabled: boolean
    /** Set to true if workspace has a Module with the CRM role installed. */
    isCrmEnabled: boolean
    isDemoMode: boolean
    isDeveloperMode: boolean
    isForQA: boolean
    isMockMode: boolean
    isGDPREnabled: boolean
    ismParticleSdkDevelopmentMode: boolean
    isUAVAdvancedEnabled: boolean
    isUAVEnabled: boolean
    isUAVEventsEnabled: boolean
    mParticleAPIKey: string
    zendeskChatKey: string
    mParticleDataPlan: string
    mParticleDataPlanVersion: number
    operations: any
    orgId: number
    orgName: string
    orgCreationDate: string
    quickstartWizardCompletion: any
    sharingLevelOperations: any
    sftpUrl: string
    showAlertsOnActivityDashboard: boolean
    supportLink: string
    testMode: any
    unitTestMode: any
    publicApiUrl: string
    userFullName: string
    workspaceFeatureSettings: IWorkspaceFeatureSetting[]
    workspaceId: number
    workspaceImage: string
    workspaceName: string
    workspaceDefaultEventTier: number
    maxFilteredEntityRows: number
    indicativeWebUrl: string
    discardServerMessages: boolean
    defaultAttAuthorizationStatus: string
    isActionTakenOnAttDefaultsInfoModal: boolean
    podName: string
    podId: string
    isPaid: boolean
    serviceLevel: any
    organizationPolicy: OrganizationPolicyModel
    facebookAppId: number
    facebookMarketingApiVersion: any
    isFromLogin: boolean
    enableTpdReport: boolean
  }

  interface Window {
    mParticleDemoData: any
    mParticleConfig: mParticleConfig
    mParticle: any
    amplitude: any
    localStorage: any
    $: any
    d3: any
    zxcvbn: any
    eventStream: any
    onAmazonLoginReady: any
    amazon: any
    moment: any
    signalR: any
    mParticleLiveStreamData: {
      inbound: any[]
      outbound: any[]
    }
    setParent: (parent: any) => void
    mParticlePlatformFilterData: any
    mParticlePlatformActivityData: any
    mParticleRouter: any
    DOMPurify: any
    Prism: any
    ProgressButton: any
    zESettings: any
    zE: any
    FB: any
    fbAsyncInit: any
  }
}

interface IAccountLimits {
  enableIndicativeWelcome: boolean
  enableQuickstart: boolean
  enableLiveramp: boolean
  isAnalyticsEnabled: boolean
  isAudienceDisabled: boolean
  isCCPAEnabled: boolean
  isCCPAEnabled: boolean
  isCalculatedAttributesEnabled: boolean
  isDSREnabled: boolean
  isDataPlanningEnabled: boolean
  isGDPREnabled: boolean
  isIngestSyncUIEnabled: boolean
  isLifetimeAudienceSharingEnabled: boolean
  isLiveRampDownloadEnabled: boolean
  isMultiWorkspaceAudiencesDisabled: boolean
  isScheduledOfflineAudienceEnabled: boolean
  isTrial: boolean
  enableExtendedProfileUI: boolean
  dataPlanMaxBytesActivated: number
  appCount: number
  audienceCount: number
  maxCalculatedAttributes: number
  onlineAudienceEventStoreTTL?
  onlineAudienceProfileStoreTTL?
  dataWarehouseSyncMaxActivePipelines: number
  audienceLookbackType: string
  backfillEstimatedEventTTL: number

  customization
  isAudienceABTestEnabled
  isOfflineAudienceEnabled
  isWorkspaceCreationDisabled
  dataCatalogDefaultQueryDays
  lifetimeAudienceCalculationCredits
  maxConnectedRulesPerAccount
  maxConsentPurposesPerWorkspace
  migrationCutoverTime
  trialEnd
  isGenAIEnabled
}

interface IWorkspaceFeatureSetting {
  id: number
  featureSetting: string
  name: string | FeatureFlag
}

interface OrganizationPolicyModel {
  isCropsEnabled: boolean
  isAudienceEnabled: boolean
  longTermStorageTTL: number
  uiEnableAudiencesRealTime: boolean
}
