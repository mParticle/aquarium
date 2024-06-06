import React from 'react'
import { Center, Icon, Popover, Tooltip } from 'src/components'
import MiniMap from 'src/components/navigation/MiniMap/MiniMap'
import { IMiniMapOptions } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'

interface MpHomeButtonProps {
  onClick: () => void
}

interface MinimapWithPopoverProps extends IMiniMapOptions {
  onPopoverClick: () => void
}

interface TooltipWithButtonProps {
  onTooltipClick: () => void
}

interface HomeButtonProps {
  minimapOptions?: IMiniMapOptions
  onMpHomeClick: () => void
}

function MpHomeButton(props: MpHomeButtonProps) {
  return (
    <Center className="globalNavigation__mpHome" onClick={props.onClick}>
      <Icon name="mpLogo" size="lg" color="white" />
    </Center>
  )
}

function MinimapWithPopover(props: MinimapWithPopoverProps) {
  return (
    <Popover
      content={() => (
        <MiniMap
          overviewHref={props.overviewHref}
          onUnauthorizedClick={props.onUnauthorizedClick}
          links={props.links}
          onLinkClick={props.onLinkClick}
          unauthorizedLinks={props.unauthorizedLinks}
        />
      )}
      placement="rightBottom"
      arrow={false}>
      <MpHomeButton onClick={props.onPopoverClick} />
    </Popover>
  )
}

function TooltipWithButton(props: TooltipWithButtonProps) {
  return (
    <Tooltip title="mParticle Overview" placement="right">
      <MpHomeButton onClick={props.onTooltipClick} />
    </Tooltip>
  )
}

export function HomeButton(props: HomeButtonProps) {
  if (!props.minimapOptions) {
    return <TooltipWithButton onTooltipClick={props.onMpHomeClick} />
  }

  return (
    <MinimapWithPopover
      onUnauthorizedClick={props.minimapOptions.onUnauthorizedClick}
      overviewHref={props.minimapOptions.overviewHref}
      links={props.minimapOptions.links}
      onLinkClick={props.minimapOptions.onLinkClick}
      unauthorizedLinks={props.minimapOptions.unauthorizedLinks}
      onPopoverClick={props.onMpHomeClick}
    />
  )
}
