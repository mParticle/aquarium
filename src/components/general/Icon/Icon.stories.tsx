import { type Meta } from '@storybook/react'
import React, { type ReactNode } from 'react'
import { Flex, Icon, type IIconProps } from 'src/components'
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

  const sectionHeaderStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '30px 0 15px 0',
    color: '#1890ff',
    borderBottom: '2px solid #1890ff',
    paddingBottom: '5px',
  }

  const sectionStyle = {
    marginBottom: '40px',
  }

  // If showing a specific icon, use original behavior
  if (name) {
    return <div style={iconGridStyle}>{renderIcon(name)}</div>
  }

  // Categorize icons
  const uiActionIcons = allIcons.filter(iconName => {
    const iconData = Icons[iconName]
    // Check if icon file name contains 'act' (from mp_act_lt_ pattern)
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
    // Check if icon contains info-related terms or uses mp_info pattern
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
        iconName.includes('other') ||
        iconName.includes('users') ||
        iconName.includes('premium') ||
        iconName.includes('agentCopilot') ||
        iconName.includes('refreshFrequency') ||
        iconName.includes('stateEmpty') ||
        iconName.includes('stateError') ||
        iconName.includes('stateNoResults') ||
        iconName.includes('bannerFreemium'))
    )
  })

  const dataTypeIcons = allIcons.filter(iconName => {
    const iconData = Icons[iconName]
    // Check if icon is related to data types (uses mp_data pattern)
    return (
      !iconData.deprecated &&
      (iconName.includes('array') ||
        iconName.includes('boolean') ||
        iconName.includes('number') ||
        iconName.includes('string') ||
        iconName.includes('timestamp') ||
        iconName.includes('list') ||
        iconName.includes('otherData'))
    )
  })

  const navigationIcons = allIcons.filter(iconName => {
    const iconData = Icons[iconName]
    // Check if icon is navigation/platform related (uses mp_pm pattern)
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

  return (
    <div>
      {/* UI Actions Section */}
      <div style={sectionStyle}>
        <h3 style={sectionHeaderStyle}>UI Actions ({uiActionIcons.length})</h3>
        <div style={iconGridStyle}>{uiActionIcons.sort().map(renderIcon)}</div>
      </div>

      {/* Informational Icons Section */}
      <div style={sectionStyle}>
        <h3 style={sectionHeaderStyle}>Informational Icons ({informationalIcons.length})</h3>
        <div style={iconGridStyle}>{informationalIcons.sort().map(renderIcon)}</div>
      </div>

      {/* Data Type Icons Section */}
      <div style={sectionStyle}>
        <h3 style={sectionHeaderStyle}>Data Type Icons ({dataTypeIcons.length})</h3>
        <div style={iconGridStyle}>{dataTypeIcons.sort().map(renderIcon)}</div>
      </div>

      {/* Navigation Icons Section */}
      <div style={sectionStyle}>
        <h3 style={sectionHeaderStyle}>Navigation & Platform Icons ({navigationIcons.length})</h3>
        <div style={iconGridStyle}>{navigationIcons.sort().map(renderIcon)}</div>
      </div>

      {/* Other Icons Section */}
      {otherIcons.length > 0 && (
        <div style={sectionStyle}>
          <h3 style={sectionHeaderStyle}>Other Icons ({otherIcons.length})</h3>
          <div style={iconGridStyle}>{otherIcons.sort().map(renderIcon)}</div>
        </div>
      )}

      {/* Deprecated Icons Section */}
      <div style={sectionStyle}>
        <h3 style={sectionHeaderStyle}>Deprecated Icons ({deprecatedIcons.length})</h3>
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

The \`IconTable\` component displays all available icons organized into logical categories for better discoverability and usage.

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
