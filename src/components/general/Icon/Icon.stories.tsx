import { type Meta } from '@storybook/react'
import React, { type ReactNode } from 'react'
import { Flex, Icon, Typography, ErrorStateIcon, type IIconProps } from 'src/components'
import { Icons } from 'src/constants/Icons'

export const IconTable: React.FC<IIconProps> = ({ color = 'black', size = 'lg', name, variant }) => {
  const allIcons = Object.keys(Icons) as Array<keyof typeof Icons>

  const iconGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '10px',
    alignItems: 'center',
    justifyItems: 'center',
  }

  const sectionStyle = {
    marginBottom: '32px',
  }

  const subSectionStyle = {
    marginBottom: '20px',
  }

  // If showing a specific icon, use original behavior
  if (name) {
    return <div style={iconGridStyle}>{renderIcon(name)}</div>
  }

  // Helper function to split icons by variant based on SVG filename patterns
  const splitByVariant = (icons: Array<keyof typeof Icons>) => {
    // Icons that follow mp_*_lt_* pattern (light) based on SVG filenames
    const lightPatternIcons = [
      'accept',
      'back',
      'clone',
      'copy',
      'delete',
      'edit',
      'filter',
      'fitToScreen',
      'fullScreen',
      'jumpTo',
      'lock',
      'moreActions',
      'next',
      'openTab',
      'pause',
      'play',
      'previous',
      'run',
      'submitFeedback',
      'unlock',
      'zoomIn',
      'zoomOut',
      'dragAndDrop',
      'reorder',
      // info patterns
      'active',
      'annotation',
      'audienceGroup',
      'boost',
      'calculatedAttribute',
      'cohort',
      'conversion',
      'criteriaGroup',
      'funnel',
      'group',
      'helpVideo',
      'info',
      'other',
      'placeholder',
      'privileges',
      'refreshFrequency',
      'stateEmpty',
      'stateError',
      'stateNoResults',
      'textWidget',
      'abSplit',
      'users',
      // pm patterns
      'account',
      'analytics',
      'C360',
      'catalog',
      'dashboard',
      'dataPlatform',
      'date',
      'devices',
      'directory',
      'dsr',
      'enrichment',
      'forwarding',
      'identity',
      'journeyAnalysis',
      'liveStream',
      'notification',
      'notificationSubscribed',
      'notificationSubscribe',
      'observability',
      'organization',
      'oversight',
      'overview',
      'predictions',
      'scheduledReport',
      'segmentationAnalysis',
      'systemAlerts',
      'transformation',
      'userProfiles',
      // data patterns
      'boolean',
      'number',
      // legacy icons that don't follow pattern but should be light
      'add',
      'upload',
      'link',
      // icons that have duotone variants but appear as simple light icons
      'rateDown',
      'rateStar',
      'rateUp',
      'predictions',
      'premium',
      // data type icons that are configured as duotone but appear visually light
      'array',
      'list',
      'string',
      'timestamp',
    ]

    // Icons that follow mp_*_dt_* pattern (duotone) based on SVG filenames
    const duotonePatternIcons = ['agentCopilot', 'segmentation']

    // Icons that have both lt and dt variants (from Icons.ts config)
    const bothVariantsPatternIcons = ['analytics', 'C360', 'dataPlatform', 'oversight', 'overview']

    const lightIcons = icons.filter(
      iconName => lightPatternIcons.includes(iconName) || bothVariantsPatternIcons.includes(iconName),
    )

    const duotoneIcons = icons.filter(
      iconName => duotonePatternIcons.includes(iconName) || bothVariantsPatternIcons.includes(iconName),
    )

    // For icons with both variants, show them in both sections
    const bothVariants = icons.filter(iconName => bothVariantsPatternIcons.includes(iconName))

    // Fallback for icons that don't match patterns - use config-based logic
    const unmatched = icons.filter(
      iconName =>
        !lightPatternIcons.includes(iconName) &&
        !duotonePatternIcons.includes(iconName) &&
        !bothVariantsPatternIcons.includes(iconName),
    )

    // Add unmatched to appropriate categories based on config
    unmatched.forEach(iconName => {
      const icon = Icons[iconName]
      if (icon.default === 'duo-tone' || (icon['duo-tone'] && !icon.light)) {
        duotoneIcons.push(iconName)
      } else {
        lightIcons.push(iconName)
      }
    })

    return { lightIcons, duotoneIcons, bothVariants }
  }

  // Helper function to render subsection
  const renderSubSection = (title: string, icons: Array<keyof typeof Icons>, titleLevel: 4 | 5 = 5) => {
    if (icons.length === 0) return null

    return (
      <div style={subSectionStyle}>
        <Typography.Title level={titleLevel}>
          {title} ({icons.length})
        </Typography.Title>
        <div style={iconGridStyle}>{icons.sort().map(renderIcon)}</div>
      </div>
    )
  }

  // Categorize icons
  const uiActionIcons = allIcons.filter(iconName => {
    const iconData = Icons[iconName]
    return (
      !iconData.deprecated &&
      (iconName.includes('accept') ||
        iconName.includes('close') ||
        iconName.includes('edit') ||
        iconName.includes('delete') ||
        iconName.includes('copy') ||
        iconName.includes('add') ||
        iconName.includes('remove') ||
        iconName.includes('unlock') ||
        iconName.includes('lock') ||
        iconName.includes('play') ||
        iconName.includes('pause') ||
        iconName.includes('run') ||
        iconName.includes('filter') ||
        iconName.includes('search') ||
        iconName.includes('upload') ||
        iconName.includes('next') ||
        iconName.includes('previous') ||
        iconName.includes('back') ||
        iconName.includes('openTab') ||
        iconName.includes('fullScreen') ||
        iconName.includes('zoomIn') ||
        iconName.includes('zoomOut') ||
        iconName.includes('jumpTo') ||
        iconName.includes('moreActions') ||
        iconName.includes('dragAndDrop') ||
        iconName.includes('reorder') ||
        iconName.includes('refresh') ||
        iconName.includes('clone') ||
        iconName.includes('boost') ||
        iconName.includes('submitFeedback'))
    )
  })

  const informationalIcons = allIcons.filter(iconName => {
    const iconData = Icons[iconName]
    return (
      !iconData.deprecated &&
      (iconName.includes('info') ||
        iconName.includes('help') ||
        iconName.includes('notification') ||
        iconName.includes('active') ||
        iconName.includes('cohort') ||
        iconName.includes('funnel') ||
        iconName.includes('group') ||
        iconName.includes('placeholder') ||
        iconName.includes('privileges') ||
        iconName.includes('textWidget') ||
        iconName.includes('annotation') ||
        iconName.includes('generic') ||
        iconName.includes('calculatedAttribute') ||
        iconName.includes('conversion') ||
        iconName.includes('criteriaGroup') ||
        iconName.includes('audienceGroup') ||
        iconName.includes('abSplit') ||
        (iconName.includes('other') && iconName !== 'otherData') ||
        iconName.includes('users') ||
        iconName.includes('premium') ||
        iconName.includes('agentCopilot') ||
        iconName.includes('refreshFrequency') ||
        iconName.includes('stateError') ||
        iconName.includes('bannerFreemium'))
    )
  })

  const dataTypeIcons = allIcons.filter(iconName => {
    const iconData = Icons[iconName]
    return (
      !iconData.deprecated &&
      (iconName.includes('array') ||
        iconName.includes('boolean') ||
        iconName.includes('number') ||
        iconName.includes('string') ||
        iconName.includes('timestamp') ||
        iconName.includes('list') ||
        iconName.includes('otherData') ||
        iconName.includes('stateEmpty') ||
        iconName.includes('stateNoResults'))
    )
  })

  const navigationIcons = allIcons.filter(iconName => {
    const iconData = Icons[iconName]
    return (
      !iconData.deprecated &&
      (iconName.includes('analytics') ||
        iconName.includes('C360') ||
        iconName.includes('catalog') ||
        iconName.includes('dashboard') ||
        iconName.includes('dataPlatform') ||
        iconName.includes('date') ||
        iconName.includes('devices') ||
        iconName.includes('directory') ||
        iconName.includes('dsr') ||
        iconName.includes('enrichment') ||
        iconName.includes('forwarding') ||
        iconName.includes('identity') ||
        iconName.includes('journeyAnalysis') ||
        iconName.includes('liveStream') ||
        iconName.includes('observability') ||
        iconName.includes('organization') ||
        iconName.includes('oversight') ||
        iconName.includes('overview') ||
        iconName.includes('predictions') ||
        iconName.includes('scheduledReport') ||
        iconName.includes('segmentation') ||
        iconName.includes('segmentationAnalysis') ||
        iconName.includes('systemAlerts') ||
        iconName.includes('transformation') ||
        iconName.includes('userProfiles') ||
        iconName.includes('account'))
    )
  })

  const deprecatedIcons = allIcons.filter(iconName => Icons[iconName].deprecated)

  const otherIcons = allIcons.filter(iconName => {
    const iconData = Icons[iconName]
    return (
      !iconData.deprecated &&
      !uiActionIcons.includes(iconName) &&
      !informationalIcons.includes(iconName) &&
      !dataTypeIcons.includes(iconName) &&
      !navigationIcons.includes(iconName)
    )
  })

  // Split each category by variant
  const uiActionSplit = splitByVariant(uiActionIcons)
  const informationalSplit = splitByVariant(informationalIcons)
  const dataTypeSplit = splitByVariant(dataTypeIcons)
  const navigationSplit = splitByVariant(navigationIcons)
  const otherSplit = splitByVariant(otherIcons)

  return (
    <div>
      {/* Special Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Special Icons (1)</Typography.Title>
        <div style={iconGridStyle}>
          <Flex vertical align="center" key="error-state-icon">
            <ErrorStateIcon size={size} />
            <p style={{ fontFamily: 'monospace', textAlign: 'center' }}>ErrorStateIcon</p>
          </Flex>
        </div>
      </div>

      {/* UI Actions Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>UI Actions ({uiActionIcons.length})</Typography.Title>
        {renderSubSection('Light', uiActionSplit.lightIcons)}
        {renderSubSection('Duotone', uiActionSplit.duotoneIcons)}
      </div>

      {/* Informational Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Informational Icons ({informationalIcons.length})</Typography.Title>
        {renderSubSection('Light', informationalSplit.lightIcons)}
        {renderSubSection('Duotone', informationalSplit.duotoneIcons)}
      </div>

      {/* Data Type Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Data Type Icons ({dataTypeIcons.length})</Typography.Title>
        {renderSubSection('Light', dataTypeSplit.lightIcons)}
        {renderSubSection('Duotone', dataTypeSplit.duotoneIcons)}
      </div>

      {/* Navigation Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4}>Navigation & Platform Icons ({navigationIcons.length})</Typography.Title>
        {renderSubSection('Light', navigationSplit.lightIcons)}
        {renderSubSection('Duotone', navigationSplit.duotoneIcons)}
      </div>

      {/* Other Icons Section */}
      {otherIcons.length > 0 && (
        <div style={sectionStyle}>
          <Typography.Title level={4}>Other Icons ({otherIcons.length})</Typography.Title>
          {renderSubSection('Light', otherSplit.lightIcons)}
          {renderSubSection('Duotone', otherSplit.duotoneIcons)}
        </div>
      )}

      {/* Deprecated Icons Section */}
      <div style={sectionStyle}>
        <Typography.Title level={4} type="secondary">
          Deprecated Icons ({deprecatedIcons.length})
        </Typography.Title>
        <div style={iconGridStyle}>{deprecatedIcons.sort().map(renderIcon)}</div>
      </div>
    </div>
  )

  function renderIcon(iconName: keyof typeof Icons): ReactNode {
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
**Navigation & Platform Icons**: Icons for navigation, platform features, and product areas like analytics, dashboard, identity, etc.
**Deprecated Icons**: Icons that have been deprecated and should no longer be used in new implementations.

#### Props
- \`name\`: The name of the icon 
- \`color\`: The color of the icon. Available options are \`default\`, \`primary\`, \`success\`, \`warning\`, \`error\`, \`info\`, \`white\`, \`black\`, \`text\`, \`strong\`, \`brand\`.
- \`size\`: The size of the icon. Available options are \`xxxxl\`, \`xxxl\`, \`xxl\`, \`xl\`, \`lg\`, \`md\`, \`sm\`, \`xs\`.
- \`variant\`: The variant of the icon. Available options are \`light\` and \`duo-tone\`.

#### Icon Naming Conventions

Icons follow specific naming patterns based on their category:
- **Action Icons**: Use \`mp_act_lt_\` prefix in SVG filenames
- **Info Icons**: Use \`mp_info_lt_\` prefix in SVG filenames
- **Data Icons**: Use \`mp_data_dt_\` prefix in SVG filenames
- **Platform/Navigation Icons**: Use \`mp_pm_lt_\` prefix in SVG filenames

#### Example Usage
\`\`\`jsx
<Icon name="add" size="lg" color="primary" variant="light" />
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
      options: ['xxxxl', 'xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
    },
    color: {
      control: 'select',
      options: [
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
      ],
    },
    variant: {
      control: 'select',
      options: ['light', 'duo-tone'],
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
