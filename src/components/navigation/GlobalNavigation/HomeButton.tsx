import React from 'react'
import { Center, Icon, Tooltip } from 'src/components'

interface MpHomeButtonProps {
  onClick: () => void
}

interface TooltipWithButtonProps {
  onTooltipClick: () => void
}

interface HomeButtonProps {
  onMpHomeClick: () => void
}

function MpHomeButton(props: MpHomeButtonProps) {
  return (
    <Center className="globalNavigation__mpHome" onClick={props.onClick}>
      <Icon name="mpLogo" size="lg" color="white" />
    </Center>
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
  return <TooltipWithButton onTooltipClick={props.onMpHomeClick} />
}
