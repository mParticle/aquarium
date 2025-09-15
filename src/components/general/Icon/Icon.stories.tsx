import { type Meta } from '@storybook/react'
import React, { type ReactNode, useMemo } from 'react'
import { Flex, Icon, Typography, ErrorStateIcon, type IIconProps } from 'src/components'
import { type IconColor } from 'src/components/general/Icon/Icon'
import { Icons } from 'src/constants/Icons'
import { MarginMd, MarginXl, Size } from 'src/styles/style'
import type { IconNames } from 'src/types/icons'
import { ICON_VARIANTS } from 'src/types/icons'

// Storybook control constants
const ICON_SIZES = ['xxxxl', 'xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'] as const
const ICON_COLORS: IconColor[] = [
  'default',
  'primary',
  'success',
  'warning',
  'error',
  'info',
  'white',
  'black',
  'text',
  'strong',
  'brand',
] as const

// Icon categorization constants for better maintainability
const ICON_CATEGORIES = {
  UI_ACTION_PATTERNS: [
    'accept',
    'close',
    'edit',
    'delete',
    'copy',
    'add',
    'remove',
    'unlock',
    'lock',
    'play',
    'pause',
    'run',
    'filter',
    'search',
    'upload',
    'next',
    'previous',
    'back',
    'openTab',
    'fullScreen',
    'fitToScreen',
    'zoomIn',
    'zoomOut',
    'jumpTo',
    'moreActions',
    'dragAndDrop',
    'reorder',
    'refresh',
    'clone',
    'boost',
    'submitFeedback',
    'dropdown',
    'logout',
  ] as const,

  INFORMATIONAL_PATTERNS: [
    'info',
    'help',
    'notification',
    'active',
    'cohort',
    'funnel',
    'group',
    'placeholder',
    'privileges',
    'textWidget',
    'annotation',
    'generic',
    'calculatedAttribute',
    'conversion',
    'criteriaGroup',
    'audienceGroup',
    'abSplit',
    'account',
    'users',
    // 'viewOnly', // TODO: Re-upload
    'premium',
    'agentCopilot',
    'refreshFrequency',
    'stateError',
    'bannerFreemium',
  ] as const,

  DATA_TYPE_PATTERNS: [
    'array',
    'boolean',
    'number',
    'string',
    'timestamp',
    'list',
    'otherData',
    'stateEmpty',
    'stateNoResults',
  ] as const,

  NAVIGATION_PATTERNS: [
    'catalog',
    'directory',
    'dsr',
    'enrichment',
    'forwarding',
    'journeyAnalysis',
    'liveStream',
    'observability',
    'systemAlerts',
    'transformation',
    'userProfiles',
  ] as const,
} as const

// Helper function to check if an icon matches any of the given patterns
const iconMatchesPatterns = (iconName: IconNames, patterns: readonly string[]): boolean => {
  return patterns.some(pattern => iconName.includes(pattern))
}

// Helper function to get non-deprecated icons
const getNonDeprecatedIcons = (icons: IconNames[]): IconNames[] => {
  return icons.filter(iconName => !Icons[iconName].deprecated)
}

export const IconTable: React.FC<IIconProps> = ({ color = 'black', size = 'lg', name, variant }) => {
  const allIcons = Object.keys(Icons) as IconNames[]

  const iconGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: Size,
    alignItems: 'center',
    justifyItems: 'center',
  }

  const sectionStyle = {
    marginBottom: MarginXl,
  }

  const subSectionStyle = {
    marginBottom: MarginMd,
  }

  // If showing a specific icon, use original behavior
  if (name) {
    return <div style={iconGridStyle}>{renderIcon(name)}</div>
  }

  // Helper function to split icons by variant based on their default configuration
  const splitByVariant = (icons: IconNames[]) => {
    const lightIcons: IconNames[] = []
    const duotoneIcons: IconNames[] = []

    icons.forEach(iconName => {
      const icon = Icons[iconName]

      // Categorize based on the default variant using constants
      if (icon.default === ICON_VARIANTS.DUO_TONE) {
        duotoneIcons.push(iconName)
      } else {
        lightIcons.push(iconName)
      }
    })

    return { lightIcons, duotoneIcons }
  }

  // Helper function to render subsection
  const renderSubSection = (title: string, icons: IconNames[], titleLevel: 4 | 5 = 5) => {
    if (icons.length === 0) return null

    return (
      <div style={subSectionStyle}>
        <Typography.Title level={titleLevel}>{title}</Typography.Title>
        <div style={iconGridStyle}>{icons.sort().map(renderIcon)}</div>
      </div>
    )
  }

  // Categorize icons using helper functions and constants
  const uiActionIcons = useMemo(
    () =>
      getNonDeprecatedIcons(
        allIcons.filter(iconName => iconMatchesPatterns(iconName, ICON_CATEGORIES.UI_ACTION_PATTERNS)),
      ),
    [allIcons],
  )

  const informationalSpecificIcons: IconNames[] = [
    'api',
    'audiences',
    'database',
    'dashboard',
    'date',
    'devices',
    'identity',
    'organization',
    'predictions',
    'scheduledReport',
    'segmentationAnalysis',
    'flag',
    'insights',
    'link',
    'favorite',
    'paywall',
    'pipelines',
    'precision',
    'rateDown',
    'rateStar',
    'rateUp',
    'settings',
    'support',
    'selected',
  ] as const

  const informationalIcons = useMemo(
    () =>
      getNonDeprecatedIcons(
        allIcons.filter(
          iconName =>
            iconMatchesPatterns(iconName, ICON_CATEGORIES.INFORMATIONAL_PATTERNS) ||
            informationalSpecificIcons.includes(iconName) ||
            (iconName.includes('other') && iconName !== 'otherData'),
        ),
      ),
    [allIcons],
  )

  const dataTypeSpecificIcons: IconNames[] = ['empty', 'event', 'eventAttribute', 'userAttribute'] as const

  const dataTypeIcons = useMemo(
    () =>
      getNonDeprecatedIcons(
        allIcons.filter(
          iconName =>
            iconMatchesPatterns(iconName, ICON_CATEGORIES.DATA_TYPE_PATTERNS) ||
            dataTypeSpecificIcons.includes(iconName),
        ),
      ),
    [allIcons],
  )

  const navigationSpecificIcons: IconNames[] = ['connections', 'savedProjects', 'privacy', 'setup'] as const

  const navigationIcons = useMemo(
    () =>
      getNonDeprecatedIcons(
        allIcons.filter(
          iconName =>
            iconMatchesPatterns(iconName, ICON_CATEGORIES.NAVIGATION_PATTERNS) ||
            navigationSpecificIcons.includes(iconName),
        ),
      ),
    [allIcons],
  )

  const deprecatedIcons = useMemo(() => allIcons.filter(iconName => Icons[iconName].deprecated), [allIcons])

  const otherIcons = useMemo(
    () =>
      allIcons.filter(iconName => {
        const iconData = Icons[iconName]
        return (
          !iconData.deprecated &&
          !uiActionIcons.includes(iconName) &&
          !informationalIcons.includes(iconName) &&
          !dataTypeIcons.includes(iconName) &&
          !navigationIcons.includes(iconName)
        )
      }),
    [allIcons, uiActionIcons, informationalIcons, dataTypeIcons, navigationIcons],
  )

  // Split each category by variant
  const uiActionSplit = useMemo(() => splitByVariant(uiActionIcons), [uiActionIcons])
  const informationalSplit = useMemo(() => splitByVariant(informationalIcons), [informationalIcons])
  const dataTypeSplit = useMemo(() => splitByVariant(dataTypeIcons), [dataTypeIcons])
  const navigationSplit = useMemo(() => splitByVariant(navigationIcons), [navigationIcons])
  const otherSplit = useMemo(() => splitByVariant(otherIcons), [otherIcons])

  return (
    <div>
      {/* Special Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Special Icons</Typography.Title>
        <div style={iconGridStyle}>
          <Flex vertical align="center" key="error-state-icon">
            <ErrorStateIcon size={size} />
            <p style={{ fontFamily: 'monospace', textAlign: 'center' }}>ErrorStateIcon</p>
          </Flex>
        </div>
      </div>

      {/* UI Actions Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>UI Actions</Typography.Title>
        {renderSubSection('Light', uiActionSplit.lightIcons)}
        {renderSubSection('Duotone', uiActionSplit.duotoneIcons)}
      </div>

      {/* Informational Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Informational Icons</Typography.Title>
        {renderSubSection('Light', informationalSplit.lightIcons)}
        {renderSubSection('Duotone', informationalSplit.duotoneIcons)}
      </div>

      {/* Data Type Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Data Type Icons</Typography.Title>
        {renderSubSection('Light', dataTypeSplit.lightIcons)}
        {renderSubSection('Duotone', dataTypeSplit.duotoneIcons)}
      </div>

      {/* Navigation Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Navigation</Typography.Title>
        {renderSubSection('Light', navigationSplit.lightIcons)}
        {renderSubSection('Duotone', navigationSplit.duotoneIcons)}
      </div>

      {/* Other Icons Section */}
      {otherIcons.length > 0 && (
        <div style={sectionStyle}>
          <Typography.Title level={4}>Other Icons</Typography.Title>
          {renderSubSection('Light', otherSplit.lightIcons)}
          {renderSubSection('Duotone', otherSplit.duotoneIcons)}
        </div>
      )}

      {/* Deprecated Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4} type="secondary">
          Deprecated Icons
        </Typography.Title>
        <div style={iconGridStyle}>{deprecatedIcons.sort().map(renderIcon)}</div>
      </div>
    </div>
  )

  function renderIcon(iconName: IconNames): ReactNode {
    const icon = Icons[iconName]
    const isDeprecated = icon.deprecated
    const textStyle = isDeprecated ? { textDecoration: 'line-through' } : {}

    return (
      <Flex vertical align="center" key={iconName}>
        <Icon name={iconName} size={size} color={color} variant={variant} />
        <p style={{ fontFamily: 'monospace', textAlign: 'center', ...textStyle }}>
          {isDeprecated ? 'deprecated ' : ''}
          {iconName}
        </p>
      </Flex>
    )
  }
}

const iconTableDocumentation = `
### Icon Library Documentation

The \`IconTable\` component displays icons organized into logical categories for better discoverability and usage.

#### Icon Categories

**UI Actions**: Interactive icons for user actions like add, edit, delete, play, pause, search, etc.
**Informational Icons**: Icons that convey information, status, or context like help, notification, groups, states, etc.
**Data Type Icons**: Icons representing different data types like array, boolean, number, string, timestamp, etc.
**Navigation**: Icons for navigation and platform features like catalog, directory, observability, etc.
**Deprecated Icons**: Icons that have been deprecated and should no longer be used in new implementations.

#### Props
- \`name\`: The name of the icon
- \`color\`: The color of the icon. Available options are \`default\`, \`primary\`, \`success\`, \`warning\`, \`error\`, \`info\`, \`white\`, \`black\`, \`text\`, \`strong\`, \`brand\`.
- \`size\`: The size of the icon. Available options are \`xxxxl\`, \`xxxl\`, \`xxl\`, \`xl\`, \`lg\`, \`md\`, \`sm\`, \`xs\`.
- \`variant\`: The variant of the icon. Available options are \`${Object.values(ICON_VARIANTS).join('` and `')}\`.

#### Icon Naming Conventions

Icons follow specific naming patterns based on their category:
- **Action Icons**: Use \`mp_act_lt_\` prefix in SVG filenames
- **Info Icons**: Use \`mp_info_lt_\` prefix in SVG filenames
- **Data Icons**: Use \`mp_data_dt_\` prefix in SVG filenames
- **Platform/Navigation Icons**: Use \`mp_pm_lt_\` prefix in SVG filenames

#### Example Usage
\`\`\`jsx
<Icon name="add" size="lg" color="primary" variant="${ICON_VARIANTS.LIGHT}" />
<Icon name="info" size="md" color="info" />
<Icon name="play" size="sm" color="success" />
\`\`\`

#### Updating Icons

1. **Add New Icons**: Use the SVG Prettifier in Storybook (Contributing → Tooling → SVGPrettifier)
2. **Follow Naming**: Use appropriate prefix based on icon category
3. **Update Constants**: Icons are automatically categorized based on naming patterns
4. **Verify Display**: Check the organized icon library to ensure proper categorization
`

const meta: Meta = {
  title: 'Components/General/Icons',
  component: IconTable,
  argTypes: {
    size: {
      control: 'select',
      options: ICON_SIZES,
    },
    color: {
      control: 'select',
      options: ICON_COLORS,
    },
    variant: {
      control: 'select',
      options: Object.values(ICON_VARIANTS),
    },
  },
  parameters: {
    docs: {
      description: {
        component: iconTableDocumentation,
      },
    },
  },
}

export default meta
