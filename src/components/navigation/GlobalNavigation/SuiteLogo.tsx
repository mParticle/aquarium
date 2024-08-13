import React, { type ReactNode, useState } from 'react'
import { Center, Icon, Popover } from 'src/components'
import { NavigationIcon } from 'src/components/navigation/GlobalNavigation/NavigationIcon'
import MiniMap from 'src/components/navigation/MiniMap/MiniMap'
import { type Icons } from 'src/constants/Icons'
import {
  type IGlobalNavigationLogo,
  type IMiniMapOptions,
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

export function SuiteLogo({ icon, label, type = 'custom-size', onSuiteLogoClick, minimapOptions }: SuiteLogoProps) {
  // TODO: || navSwitcherTourOptions?.isOpen
  if (!minimapOptions) {
    return <SuiteLogoContent />
  }

  return (
    <MinimapWithPopover
      onUnauthorizedClick={minimapOptions.onUnauthorizedClick}
      overviewHref={minimapOptions.overviewHref}
      links={minimapOptions.links}
      onLinkClick={minimapOptions.onLinkClick}
      unauthorizedLinks={minimapOptions.unauthorizedLinks}
      activeLink={minimapOptions.activeLink}
    />
  )

  function SuiteLogoContent() {
    return <>{renderNavLogo()}</>
  }

  function MinimapWithPopover(props: IMiniMapOptions) {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false)
    const handleLinkClick = (link: MiniMapLink) => {
      setIsPopoverOpen(false)
      props.onLinkClick(link)
    }
    const handlePopoverOpenChange = (newPopoverState: boolean) => {
      setIsPopoverOpen(newPopoverState)
    }

    return (
      <Popover
        content={
          <MiniMap
            overviewHref={props.overviewHref}
            onUnauthorizedClick={props.onUnauthorizedClick}
            links={props.links}
            onLinkClick={handleLinkClick}
            unauthorizedLinks={props.unauthorizedLinks}
            activeLink={props.activeLink}
          />
        }
        placement="bottomLeft"
        open={isPopoverOpen}
        trigger="hover"
        onOpenChange={handlePopoverOpenChange}
        arrow={false}>
        <SuiteLogoContent />
      </Popover>
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
}
