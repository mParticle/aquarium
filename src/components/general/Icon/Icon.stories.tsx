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

  return <div style={iconGridStyle}>{name ? renderIcon(name) : allIcons.map(renderIcon)}</div>

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
### Icon Component Documentation

The \`IconTable\` component is used to display a table of all available icons in the project. 

#### Props
- \`name\`: The name of the icon 
- \`color\`: The color of the icon. Available options are \`default\`, \`primary\`, \`success\`, \`warning\`, \`error\`, \`info\`, \`white\`, \`black\`, \`text\`, \`strong\`, \`brand\`.
- \`size\`: The size of the icon. Available options are \`xxxxl\`, \`xxxl\`, \`xxl\`, \`xl\`, \`lg\`, \`md\`, \`sm\`, \`xs\`.
- \`variant\`: The variant of the icon. Available options are \`light\` and \`duo-tone\`.

#### Updating Icons

The icon SVG and icon name are provided by the Design team. and the svg must be minified.

1. **Add New Icons**: Add the new icon SVGs to the \`src/constants/Icons\` directory. The icons should be curated by Design and the svg must be minified. 
2. **Update Icon Constants**: Update the \`Icons\` object in \`src/constants/Icons\` to include the new icons.
3. **Use Icons**: Use the updated icons in your components by referencing their names.

#### Example Usage
\`\`\`jsx
<Icon name="new-icon" size="lg" color="primary" variant="light" />
\`\`\`

This will render the new icon with the specified size, color, and variant.
`

const meta: Meta = {
  title: 'Aquarium/General/Icons',
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
