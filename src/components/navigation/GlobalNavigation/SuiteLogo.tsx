import React, { ReactElement, ReactNode } from 'react'
import { Center, Icon } from 'src/components'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { Icons } from 'src/constants/Icons'
import { type IGlobalNavigationLogo } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'

// TODO: Deprecate sending the icon as a component and only send it as a string in the future.
function isStringIcon(icon: ReactNode | string): icon is keyof typeof Icons {
  return typeof icon === 'string'
}

export function SuiteLogo({ icon, label, type = 'default', onSuiteLogoClick }: IGlobalNavigationLogo) {
  const classMap = {
    default: 'globalNavigation__icon--suiteLogo',
    'background-solid': 'globalNavigation__icon--suiteBackground',
  }

  const getIcon = () => {
    if (isStringIcon(icon)) {
      return <Icon name={icon} color="brand" size="xxl" />
    }
    return icon
  }

  return (
    <Center vertical className="globalNavigation__suiteLogo" onClick={onSuiteLogoClick}>
      <NavigationIcon icon={getIcon()} label="" hideLabel className={classMap[type]} />
      {label}
    </Center>
  )
}
