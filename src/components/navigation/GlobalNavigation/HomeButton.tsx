import React from 'react'
import { Center, IGlobalNavigationProps, Icon, Popover, Tooltip } from 'src/components'
import MiniMap from 'src/components/navigation/MiniMap/MiniMap'

interface MpHomeButtonInterface {
  onClick: () => void
}

interface MinimapWithPopoverInterface {
  goToOverviewHref: string
  onClick: () => void
}

interface TooltipWithButtonInterface {
  onClick: () => void
}

interface HomeButtonInterface {
  minimapOptions: {
    goToOverviewHref: string
    hide?: boolean
  }
  onMpHomeClick: () => void
}
const MpHomeButton: React.FC<MpHomeButtonInterface> = ({ onClick }) => (
  <Center className="globalNavigation__mpHome" onClick={onClick}>
    <Icon name="mpLogo" size="lg" color="white" />
  </Center>
)

const MinimapWithPopover: React.FC<MinimapWithPopoverInterface> = ({ goToOverviewHref, onClick }) => (
  <Popover content={() => <MiniMap goToOverviewHref={goToOverviewHref} />} placement="rightBottom" arrow={false}>
    <MpHomeButton onClick={onClick} />
  </Popover>
)

const TooltipWithButton: React.FC<TooltipWithButtonInterface> = ({ onClick }) => (
  <Tooltip title="mParticle Overview" placement="right">
    <MpHomeButton onClick={onClick} />
  </Tooltip>
)

export const HomeButton: React.FC<HomeButtonInterface> = props => {
  return props.minimapOptions?.hide ? (
    <MinimapWithPopover
      goToOverviewHref={props.minimapOptions?.goToOverviewHref || '/'}
      onClick={props.onMpHomeClick}
    />
  ) : (
    <TooltipWithButton onClick={props.onMpHomeClick} />
  )
}
