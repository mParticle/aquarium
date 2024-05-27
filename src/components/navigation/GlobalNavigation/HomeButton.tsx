import React from 'react'
import { Center, Icon, Popover, Tooltip } from 'src/components'
import MiniMap from 'src/components/navigation/MiniMap/MiniMap'
import { ISvgLink } from 'src/components/navigation/MiniMap/SvgLinker'
import { IMinimapOptions } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'

interface MpHomeButtonProps {
  onClick: () => void
}

interface MinimapWithPopoverProps {
  overviewHref: string
  onClick: () => void
  routes: ISvgLink[]
  handleLinkClick: (route: string) => void
}

interface TooltipWithButtonProps {
  onClick: () => void
}

interface HomeButtonProps {
  minimapOptions?: IMinimapOptions
  onMpHomeClick: () => void
}

const MpHomeButton: React.FC<MpHomeButtonProps> = ({ onClick }) => (
  <Center className="globalNavigation__mpHome" onClick={onClick}>
    <Icon name="mpLogo" size="lg" color="white" />
  </Center>
)

const MinimapWithPopover: React.FC<MinimapWithPopoverProps> = ({ overviewHref, onClick, routes, handleLinkClick }) => (
  <Popover
    content={() => <MiniMap overviewHref={overviewHref} routes={routes} handleLinkClick={handleLinkClick} />}
    placement="rightBottom"
    arrow={false}>
    <MpHomeButton onClick={onClick} />
  </Popover>
)

const TooltipWithButton: React.FC<TooltipWithButtonProps> = ({ onClick }) => (
  <Tooltip title="mParticle Overview" placement="right">
    <MpHomeButton onClick={onClick} />
  </Tooltip>
)

export const HomeButton: React.FC<HomeButtonProps> = props => {
  const { minimapOptions, onMpHomeClick } = props

  if (!minimapOptions) {
    return <TooltipWithButton onClick={onMpHomeClick} />
  }

  return (
    <MinimapWithPopover
      overviewHref={minimapOptions.overviewHref}
      onClick={onMpHomeClick}
      routes={minimapOptions.routes}
      handleLinkClick={minimapOptions.handleLinkClick}
    />
  )
}
