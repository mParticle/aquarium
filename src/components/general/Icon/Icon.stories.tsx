import { type Meta } from '@storybook/react'
import React, { type ReactNode } from 'react'
import { Flex, Icon } from 'src/components'
import {type IIconProps} from 'src/components/general/Icon/Icon'
import { DuoIcons, LightIcons } from 'src/constants/Icons'

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
      {/* renders either a single selected icon, or all possible icons */}
      {name ? (
        renderIcon(name, size, color)
      ) : (
        <>
          {(Object.keys(LightIcons) as Array<keyof typeof LightIcons>).map(iconName => renderIcon(iconName, size, color, 'light'))}
          {(Object.keys(DuoIcons) as Array<keyof typeof DuoIcons>).map(iconName => renderIcon(iconName, size, color, 'duo'))}
        </>
      )}
    </div>
  )

  function renderIcon(
    iconName: IIconProps['name'],
    size: IIconProps['size'],
    color: IIconProps['color'],
    type?: IIconProps['type'],
  ): ReactNode {
    return (
      <Flex vertical align="center" key={iconName}>
        <Icon name={iconName} size={size} color={color} type={type} key={iconName} />
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