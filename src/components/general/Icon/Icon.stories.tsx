import { Meta } from '@storybook/react'
import React, { ReactNode } from 'react'
import { Flex, Icon, IIconProps } from 'src/components'
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
    return (
      <Flex vertical align="center" key={iconName}>
        <Icon name={iconName} size={size} color={color} variant={variant} />
        <p style={{ fontFamily: 'monospace' }}>{iconName}</p>
      </Flex>
    )
  }
}

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
}

export default meta
