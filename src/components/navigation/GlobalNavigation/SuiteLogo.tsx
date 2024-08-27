import React, { type ReactNode, useRef, useState } from 'react'
import { Center, Icon, type ITourProps, Tour } from 'src/components'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import { SuiteSelector } from 'src/components/navigation/GlobalNavigation/SuiteSelector/SuiteSelector'
import { type Icons } from 'src/constants/Icons'
import {
  type IGlobalNavigationLogo,
  type IMiniMapOptions,
  type INavSwitcherTourOptions,
  type MiniMapLink,
} from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IconColor } from 'src/components/general/Icon/Icon'

// custom-size is the default size to prevent breaking changes.
type IconColorOptions = 'default' | 'background-solid' | 'custom-size'

interface SuiteLogoProps extends IGlobalNavigationLogo {
  minimapOptions?: IMiniMapOptions
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
  minimapOptions,
}: SuiteLogoProps) {
  const logoRef = useRef(null)

  if (!minimapOptions || navSwitcherTourOptions?.open) {
    return <SuiteLogoContent />
  }

  return <LogoWithSuiteSelector {...minimapOptions} />

  function SuiteLogoContent({ onLogoClick }: { onLogoClick?: () => void }) {
    return (
      <>
        <div ref={logoRef} onClick={onLogoClick}>
          {renderNavLogo()}
          {navSwitcherTourOptions && renderNavTour(navSwitcherTourOptions)}
        </div>
      </>
    )
  }

  function LogoWithSuiteSelector(props: IMiniMapOptions) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)

    const handleLinkClick = (link: MiniMapLink) => {
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
        minimapOptions={props}>
        <SuiteLogoContent onLogoClick={handleLogoClick} />
      </SuiteSelector>
    )
  }

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
