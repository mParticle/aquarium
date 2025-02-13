export enum Operation {
    ORG_CREATE = 100,
    ORG_UPDATE = 101,
    ORG_DELETE = 102,
    APPFAMILY_CREATE = 103,
    APPFAMILY_UPDATE = 104,
    APPFAMILY_DELETE = 105,
    ACCOUNT_CREATE = 110,
    ACCOUNT_UPDATE = 111,
    ACCOUNT_DELETE = 112,
    USER_CREATE = 113,
    USER_UPDATE = 114,
    USER_DEACTIVATE = 115,
    USER_LIST = 116,
    USER_VIEW = 117,
    USER_ROLECHANGE = 118,
    USER_PASSWORDRESET = 119,
    ORG_LIST = 121,
    EVENT_LIST = 122,
    LOGIN = 123,
    ACCOUNT_LIST = 124,
    ACCOUNT_VIEW = 125,
    APPFAMILY_LIST = 126,
    APPFAMILY_VIEW = 127,
    ORG_VIEW = 128,
    PARTNER_CREATE = 130,
    TOKEN_EDIT = 131,
    DEVICE_CREATE = 132,
    DEVICE_UPDATE = 133,
    DEVICE_DELETE = 134,
    DEVICE_LIST = 135,
    DEVICE_VIEW = 136,
    POLICY_LIST = 137,
    POLICY_ADD = 138,
    POLICY_EDIT = 139,
    POLICY_DELETE = 140,
    PUBLISHER_ADD = 141,
    PUBLISHER_LIST = 142,
    PUBLISHER_EDIT = 143,
    PUBLISHER_DELETE = 144,
    CAMPAIGN_CREATE = 145,
    CAMPAIGN_LIST = 146,
    CAMPAIGN_EDIT = 147,
    CAMPAIGN_DELETE = 148,
    REPORT_LIST = 149,
    EVENTTRANSFORM_LIST = 150,
    EVENTTRANSFORM_ADD = 151,
    EVENTTRANSFORM_EDIT = 152,
    PROVIDER_LIST = 154,
    ERROR_LIST = 156,
    ERROR_DETAIL_VIEW = 157,
    AUDIENCE_LIST = 158,
    AUDIENCE_CREATE = 159,
    AUDIENCE_EDIT = 160,
    AUDIENCE_DELETE = 161,
    PARTNERLIST = 163,
    PARTNEREDIT = 164,
    PARTNERDELETE = 165,
    BILLINGLIST = 166,
    BILLINGEDIT = 167,
    BILLINGCANCEL = 168,
    EVENTBROWSER = 169,
    PUSHNOTIFICATIONS_EDIT = 170,
    PROVIDER_DATAMAPPINGS = 171,
    EVENT_STREAM = 182,
    REDSHIFT = 183,
    REDSHIFT_ACCESSCONFIG = 184,
    FILTERING_EVENT_ATTRIBUTE_UPDATE = 189,
    EVENT_UPDATE = 193,
    FILTERING_EVENT_ATTRIBUTE_VIEW = 194,
    REDSHIFT_ACCESS_CONFIGURATION_UPDATE = 195,
    REDSHIFT_UPDATE = 196,
    GOOGLEBIGQUERYUPDATECONFIG = 197,
    GOOGLEBIGQUERYVIEW = 198,
    PROVIDER_DATAMAPPINGS_VIEW = 199,
    PROVIDER_DATAMAPPINGS_UPDATE = 200,
    FIELDSUGGESTIONQUERY = 201,
    RULE_CREATE = 205,
    RULE_UPDATE = 206,
    RULE_DELETE = 207,
    RULE_LIST = 208,
    RULE_CONNECT = 209,
    AUDIENCESHARE = 210,
    AUDIENCEUNSHARE = 211,
    AUDIENCESHAREVIEW = 212,
    AUDIENCESHAREOPT = 214,
    AUDIENCE_TAG_CREATE = 217,
    AUDIENCE_TAG_DELETE = 218,
    REDSHIFT_QUERYTOOL = 219,
    AUDIENCE_FAULT_CLEAR = 222,
    USERACTIVITY_VIEW = 223,
    USERACTIVITY_EVENTS_VIEW = 224,
    CONSENT_PURPOSE_CREATE = 227,
    IDENTITY_SETTINGS_VIEW = 228,
    GDPR_REQUEST_LIST = 229,
    GDPR_REQUEST_CREATE = 230,
    GDPR_REQUEST_UPDATE = 231,
    DATAMANAGER_VIEW = 232,
    DATAMANAGER_UPDATE = 233,
    AUDIENCE_DOWNLOAD = 241,
    SNOWFLAKE = 243,
    SNOWFLAKEUPDATE = 244,
    CREATE_ROLE_DEFINITION = 246,
    AUDIENCE_ACCESS_IDENTITY = 270,
    AUDIENCE_SUBSCRIPTION_LIST = 272,
    AUDIENCE_SUBSCRIPTION_CREATE = 273,
    AUDIENCE_SUBSCRIPTION_EDIT = 274,
    AUDIENCE_SUBSCRIPTION_DELETE = 275,
    AUDIENCE_ESTIMATE_EXPRESSION_SIZE = 284,
    DATAPLAN_VIEW = 285,
    DATAPLAN_UPDATE = 286,
    CALCULATEDATTRIBUTES_VIEW = 287,
    CALCULATEDATTRIBUTES_UPDATE = 288,
    CALCULATEDATTRIBUTES_DELETE = 289,
    CREATE_API_KEY = 290,
    DELETE_API_KEY = 291,
    LIST_API_KEY = 292,
    UPDATE_API_KEY = 293,
    VIEW_API_KEY = 294,
    VIEW_COMPLIANCE_SETTINGS = 301,
    USER_MANAGEMENT_VIEW = 322,
    DATA_MASTER_VIEW_ATTRIBUTE_VALUES = 330,
    MODULE_VIEW = 331,
    JOURNEY_VIEW = 336,
    JOURNEY_MODIFY = 337,
    EVENT_TIER_UPDATE = 338,
    INDICATIVE_REQUIRES_ACCEPTED_TERMS = 345,
    WORKSPACE_KEY_VIEW = 346,
    INDICATIVE_ADD_USER_TO_PROJECT = 347,
    INDICATIVE_WIZARD_TEAMMATES_VIEW = 348,
    DATA_INGEST_VIEW = 349,
    DATA_INGEST_UPDATE = 350,
    AUDIENCE_VIEW = 351,
    GDPR_REQUEST_VIEW = 352,
    FILTERS_LIST = 354,
    OUTPUTS_LIST = 355,
    CALCULATEDATTRIBUTES_LIST = 356,
    WORKSPACE_SETTINGS = 357,
    GDPR_REQUEST_DETAILS_VIEW = 362,
    INPUTS_LIST = 363,
    INPUTS_CREATE = 364,
    INPUTS_UPDATE = 365,
    INPUTS_VIEW = 366,
    INPUTS_DELETE = 367,
    OUTPUTS_CREATE = 368,
    OUTPUTS_UPDATE = 369,
    OUTPUTS_VIEW = 370,
    OUTPUTS_DELETE = 371,
    SUBSCRIPTIONS_LIST = 372,
    SUBSCRIPTIONS_CREATE = 373,
    SUBSCRIPTIONS_UPDATE = 374,
    SUBSCRIPTIONS_VIEW = 375,
    SUBSCRIPTIONS_DELETE = 376,
    AUDIENCE_SETTINGS = 377,
    AUDIENCE_ACTIVATE = 381,
    CALCULATEDATTRIBUTES_ACTIVATE = 382,
    FREE_TRIAL_VIEW = 388,
    FREE_TRIAL_REQUEST = 389,
    LEGAL_AGREEMENT_VIEW = 390,
    LEGAL_AGREEMENT_ACCEPT = 391,
    USER_GROUPS_VIEW = 392,
    USER_GROUPS_CREATE = 393,
    USER_GROUPS_UPDATE = 394,
    USER_GROUPS_DELETE = 395,
    DATABRICKSVIEW = 396,
    DATABRICKSUPDATE = 397,
    USER_ACTIVITY_UPDATE_USER_PROFILE = 398,
    USER_ACTIVITY_DELETE_USER_PROFILE = 399,
    VIEW_VBP_BILLING_REPORT = 401,
    ALLOW_ANONYMOUS = 9999,
}