import { Center, Icon } from 'src/components'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { type IGlobalNavigationLogo } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import React from 'react'
import { Icons } from 'src/constants/Icons'

export function SuiteLogo(props: IGlobalNavigationLogo) {
  const classMap: { [key: string]: string } = {
    default: 'globalNavigation__icon--suiteLogo',
    'background-solid': 'globalNavigation__suiteLogo-background',
  }
  return (
    <Center vertical className={`globalNavigation__suiteLogo`} onClick={props.onSuiteLogoClick}>
      <NavigationIcon
        icon={
          !props.type || props.type === 'default' ? (
            props.icon
          ) : (
            <Icon name={props.icon as keyof typeof Icons} color="brand" size="xxl" />
          )
        }
        label=""
        hideLabel
        className={`${classMap[props.type || 'default']}`}
      />
      {props.label}
    </Center>
  )
}
