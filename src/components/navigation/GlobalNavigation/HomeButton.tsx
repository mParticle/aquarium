import React from 'react'
import { Center, Icon, Popover, Tooltip } from 'src/components'
import MiniMap from 'src/components/navigation/MiniMap/MiniMap'
import { IMinimapOptions } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'

interface MpHomeButtonProps {
  onClick: () => void
}

interface MinimapWithPopoverProps extends IMinimapOptions {
  onPopoverClick: () => void
}

interface TooltipWithButtonProps {
  onTooltipClick: () => void
}

interface HomeButtonProps {
  minimapOptions?: IMinimapOptions
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
  console.log(props, 'props')
  return (
    <Popover
      open
      content={() => (
        <MiniMap
          overviewHref={props.overviewHref}
          links={props.links}
          onLinkClick={props.onLinkClick}
          unauthorizedButtons={props.unauthorizedButtons}
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

  console.log(props.minimapOptions, 'minimap options')

  return (
    <MinimapWithPopover
      overviewHref={props.minimapOptions.overviewHref}
      links={props.minimapOptions.links}
      onLinkClick={props.minimapOptions.onLinkClick}
      unauthorizedButtons={props.minimapOptions.unauthorizedButtons}
      onPopoverClick={props.onMpHomeClick}
    />
  )
}
