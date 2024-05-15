import React from 'react'
import { Center, IGlobalNavigationProps, Icon, Popover, Tooltip } from 'src/components'
import MiniMap from 'src/components/navigation/MiniMap/MiniMap'

export function CenterContent({ onClick }: { onClick: () => void }) {
  return (
    <Center className="globalNavigation__mpHome" onClick={onClick}>
      <Icon name="mpLogo" size="lg" color="white" />
    </Center>
  )
}

export function WithMinimap({ goToOverviewHref, onClick }: { goToOverviewHref: string; onClick: () => void }) {
  return (
    <Popover content={() => <MiniMap goToOverviewHref={goToOverviewHref} />} placement="rightBottom" arrow={false}>
      <CenterContent onClick={onClick} />
    </Popover>
  )
}

export function WithTooltip({ onClick }: { onClick: () => void }) {
  return (
    <Tooltip title="mParticle Overview" placement="right">
      <CenterContent onClick={onClick} />
    </Tooltip>
  )
}

export function renderHomeButton(props: IGlobalNavigationProps) {
  return props.minimapOptions?.hide ? (
    <WithMinimap goToOverviewHref={props.minimapOptions?.goToOverviewHref || '/'} onClick={props.onMpHomeClick} />
  ) : (
    <WithTooltip onClick={props.onMpHomeClick} />
  )
}
