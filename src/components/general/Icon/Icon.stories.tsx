import { type Meta } from '@storybook/react'
import React, { type ReactNode } from 'react'
import { Flex, Icon, type IIconProps } from 'src/components'
import { Icons } from 'src/constants/Icons'

export const IconTable: React.FC<IIconProps> = ({ color = 'black', size = 'lg', name }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '10px',
        alignItems: 'center',
        justifyItems: 'center',
      }}>
      {name // render either a single selected icon, or all possible icons
        ? renderIcon(name, size, color)
        : (Object.keys(Icons) as Array<keyof typeof Icons>).map(iconName => renderIcon(iconName, size, color))}
    </div>
  )

  function renderIcon(iconName: IIconProps['name'], size: IIconProps['size'], color: IIconProps['color']): ReactNode {
    return (
      <Flex vertical align="center" key={iconName}>
        <Icon name={iconName} size={size} color={color} key={iconName} />
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
  },
}

export default meta