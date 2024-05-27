import React from 'react'
import { Center, IGlobalNavigationProps, Icon, Popover, Tooltip } from 'src/components'
import MiniMap from 'src/components/navigation/MiniMap/MiniMap'
import { ISvgLink } from 'src/components/navigation/MiniMap/SvgLinker'

interface MpHomeButtonProps {
  onClick: () => void
}

interface MinimapWithPopoverProps {
  overviewHref: string
  onClick: () => void
  routes: ISvgLink[]
}

interface TooltipWithButtonProps {
  onClick: () => void
}

interface HomeButtonProps {
  minimapOptions: {
    overviewHref?: string
    show?: boolean
    routes: ISvgLink[]
  }
  onMpHomeClick: () => void
}
const MpHomeButton: React.FC<MpHomeButtonProps> = ({ onClick }) => (
  <Center className="globalNavigation__mpHome" onClick={onClick}>
    <Icon name="mpLogo" size="lg" color="white" />
  </Center>
)

const MinimapWithPopover: React.FC<MinimapWithPopoverProps> = ({ overviewHref, onClick, routes }) => (
  <Popover
    content={() => <MiniMap overviewHref={overviewHref} routes={routes} />}
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
  return props.minimapOptions?.show ? (
    <MinimapWithPopover
      overviewHref={props.minimapOptions?.overviewHref || '/'}
      onClick={props.onMpHomeClick}
      routes={props.minimapOptions.routes}
    />
  ) : (
    <TooltipWithButton onClick={props.onMpHomeClick} />
  )
}
