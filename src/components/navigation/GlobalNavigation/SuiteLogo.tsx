import React, { type ReactNode, useRef, useState } from 'react'
import { Center, Icon, type ITourProps, Tour } from 'src/components'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { SuiteSelector } from 'src/components/navigation/GlobalNavigation/SuiteSelector/SuiteSelector'
import { type Icons } from 'src/constants/Icons'
import {
  type IGlobalNavigationLogo,
  type INavSwitcherTourOptions,
  type ISuiteSelectorOptions,
  type SuiteLink,
} from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IconColor } from 'src/components/general/Icon/Icon'

// custom-size is the default size to prevent breaking changes.
type IconColorOptions = 'default' | 'background-solid' | 'custom-size'

interface SuiteLogoProps extends IGlobalNavigationLogo {
  suiteSelectorOptions?: ISuiteSelectorOptions
}

function isStringIcon(icon: ReactNode | string): icon is keyof typeof Icons {
  return typeof icon === 'string'
}

export function SuiteLogo({
  icon,
  label,
  type = 'custom-size',
  onSuiteLogoClick,
  navSwitcherTourOptions,
  suiteSelectorOptions,
}: SuiteLogoProps) {
  const logoRef = useRef(null)

  if (!suiteSelectorOptions || navSwitcherTourOptions?.open) {
    return <SuiteLogoContent onLogoClick={onSuiteLogoClick} />
  }

  return <LogoWithSuiteSelector {...suiteSelectorOptions} />

  function SuiteLogoContent({ onLogoClick }: { onLogoClick?: () => void }) {
    return (
      <>
        <div ref={logoRef}>
          <NavLogo onLogoClick={onLogoClick} />
          {navSwitcherTourOptions && renderNavTour(navSwitcherTourOptions)}
        </div>
      </>
    )
  }

  function LogoWithSuiteSelector(props: ISuiteSelectorOptions) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)

    const handleLinkClick = (link: SuiteLink) => {
      setIsPopoverOpen(false)
      props.onLinkClick(link)
    }

    const handlePopoverOpenChange = (newPopoverState: boolean) => {
      setIsPopoverOpen(newPopoverState)
    }

    const handleLogoClick = () => {
      setIsPopoverOpen(prevPopoverState => !prevPopoverState)
    }

    return (
      <SuiteSelector
        open={isPopoverOpen}
        onOpenChange={handlePopoverOpenChange}
        onLinkClick={handleLinkClick}
        suiteSelectorOptions={props}>
        <NavLogo onLogoClick={handleLogoClick} />
      </SuiteSelector>
    )
  }

  function NavLogo({ onLogoClick }: { onLogoClick?: () => void }) {
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
      <Center vertical className="globalNavigation__suiteLogo" onClick={onLogoClick}>
        <NavigationIcon icon={getIcon()} label="" hideLabel className={classMap[type]} />
        {label}
      </Center>
    )
  }

  function renderNavTour(props: INavSwitcherTourOptions) {
    const DefaultTitle = 'Navigate mParticle effortlessly!' as const
    const DefaultDescription = 'Switch between product suites anytime using this selector.' as const
    const DefaultPlacement = 'right' as const

    const navSwitcherStep: ITourProps['steps'] = [
      {
        title: props.title ?? DefaultTitle,
        description: props.description ?? DefaultDescription,
        placement: DefaultPlacement,
        target: () => logoRef.current,
        nextButtonProps: {
          children: 'Close',
        },
      },
    ]

    return (
      <>
        <Tour mask={false} type="primary" steps={navSwitcherStep} {...props} />
      </>
    )
  }
}
