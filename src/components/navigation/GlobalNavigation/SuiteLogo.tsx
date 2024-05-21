import { Center, Icon } from 'src/components'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { type IGlobalNavigationLogo } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import React from 'react'
import { Icons } from 'src/constants/Icons'

export function SuiteLogo(props: IGlobalNavigationLogo) {
  return (
    <Center vertical className={`globalNavigation__suiteLogo`} onClick={props.onSuiteLogoClick}>
      <NavigationIcon
        icon={
          typeof props.icon === 'string' && Object.keys(Icons).includes(props.icon) ? (
            <Icon name={props.icon as keyof typeof Icons} color="brand" size="xxl" />
          ) : (
            props.icon
          )
        }
        label=""
        hideLabel
        className={`${
          props.hasBackground ? 'globalNavigation__suiteLogo-background' : 'globalNavigation__icon--suiteLogo'
        }`}
      />
      {props.label}
    </Center>
  )
}
