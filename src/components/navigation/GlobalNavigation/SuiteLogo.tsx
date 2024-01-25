import { Center } from 'src/components'
import { Space } from 'src/components'
import React from 'react'
import { type IGlobalNavigationLogo } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import { NavItemHeight } from 'src/components/navigation/GlobalNavigation/GlobalNavigation'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'

export function SuiteLogo(props: IGlobalNavigationLogo) {
  return (
    <>
      <Center>
        <div
          style={{
            minWidth: '80px',
            minHeight: NavItemHeight,
            borderRadius: '6px',
            textAlign: 'center',
            backgroundColor: 'black',
            color: 'white',
            paddingTop: '7px',
            margin: '8px 0',
          }}
        >
          <Space>
            {props.label}
            <NavigationIcon icon={props.icon} />
          </Space>
        </div>
      </Center>
    </>
  )
}