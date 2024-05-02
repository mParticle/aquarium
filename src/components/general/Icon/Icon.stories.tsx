import React from 'react'
import { type Meta } from '@storybook/react'
import { Icons } from 'src/constants/Icons'
import { Flex, Icon, type IIconProps } from 'src/components'

export const IconTable: React.FC<IIconProps> = ({ color = 'black', size = 'lg' }) => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '10px',
      alignItems: 'center',
      justifyItems: 'center',
    }}>
    {(Object.keys(Icons) as Array<keyof typeof Icons>).map(iconName => (
      <Flex vertical align="center" key={iconName}>
        <Icon name={iconName} size={size} color={color} key={iconName} />
        <p style={{ fontFamily: 'monospace' }}>{iconName}</p>
      </Flex>
    ))}
  </div>
)

const meta: Meta = {
  title: 'Aquarium/General/Icons',
  component: IconTable,
  argTypes: {
    size: {
      control: 'select',
      options: ['xxl', 'xl', 'lg', 'md', 'ms', 'sm', 'xs', 'xxs'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'error', 'info', 'white', 'black', 'text'],
    },
  },
}

export default meta
