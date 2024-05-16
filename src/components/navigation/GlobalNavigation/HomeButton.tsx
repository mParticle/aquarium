import React from 'react'
import { Center, IGlobalNavigationProps, Icon, Popover, Tooltip } from 'src/components'
import MiniMap from 'src/components/navigation/MiniMap/MiniMap'

interface MpHomeButtonProps {
  onClick: () => void
}

interface MinimapWithPopoverProps {
  goToOverviewHref: string
  onClick: () => void
}

interface TooltipWithButtonProps {
  onClick: () => void
}

interface HomeButtonProps {
  minimapOptions: {
    goToOverviewHref?: string
    show?: boolean
  }
  onMpHomeClick: () => void
}
const MpHomeButton: React.FC<MpHomeButtonProps> = ({ onClick }) => (
  <Center className="globalNavigation__mpHome" onClick={onClick}>
    <Icon name="mpLogo" size="lg" color="white" />
  </Center>
)

const MinimapWithPopover: React.FC<MinimapWithPopoverProps> = ({ goToOverviewHref, onClick }) => (
  <Popover content={() => <MiniMap goToOverviewHref={goToOverviewHref} />} placement="rightBottom" arrow={false}>
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
      goToOverviewHref={props.minimapOptions?.goToOverviewHref || '/'}
      onClick={props.onMpHomeClick}
    />
  ) : (
    <TooltipWithButton onClick={props.onMpHomeClick} />
  )
}
