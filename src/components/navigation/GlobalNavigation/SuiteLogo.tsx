import React, { type ReactNode, useRef } from 'react'
import { Center, Icon, type ITourProps, Tour } from 'src/components'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { type Icons } from 'src/constants/Icons'
import {
  type IGlobalNavigationLogo,
  type INavSwitcherTourOptions,
} from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IconColor } from 'src/components/general/Icon/Icon'

// custom-size is the default size to prevent breaking changes.
type IconColorOptions = 'default' | 'background-solid' | 'custom-size'

function isStringIcon(icon: ReactNode | string): icon is keyof typeof Icons {
  return typeof icon === 'string'
}

export function SuiteLogo({
  icon,
  label,
  type = 'custom-size',
  onSuiteLogoClick,
  navSwitcherTourOptions,
}: IGlobalNavigationLogo) {
  const logoRef = useRef(null)

  const navSwitcherStep: ITourProps['steps'] = [
    {
      title: 'Navigate mParticle effortlessly!',
      description: 'Switch between product suites anytime using this selector.',
      placement: 'right',
      target: () => logoRef.current,
      nextButtonProps: {
        children: 'Close',
      },
    },
  ]

  return (
    <>
      <div ref={logoRef}>
        {renderNavLogo()}
        {navSwitcherTourOptions && renderNavTour(navSwitcherStep, navSwitcherTourOptions)}
      </div>
    </>
  )

  function renderNavLogo() {
    const classMap = {
      default: '',
      'custom-size': 'globalNavigation__icon--suiteLogo',
      'background-solid': 'globalNavigation__icon--suiteBackground',
    }

    const iconColorMap: { [key in IconColorOptions]: IconColor } = {
      default: 'default',
      'background-solid': 'brand',
      'custom-size': 'default',
    }

    const getIcon = () => {
      if (isStringIcon(icon)) {
        return <Icon name={icon} color={iconColorMap[type]} size="xl" />
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

  function renderNavTour(steps: ITourProps['steps'], props: INavSwitcherTourOptions) {
    return (
      <>
        <Tour mask={false} type="primary" steps={steps} open={props.isOpen} onClose={props.onClose} />
      </>
    )
  }
}
