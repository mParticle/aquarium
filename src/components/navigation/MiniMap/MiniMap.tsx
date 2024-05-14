import 'src/styles/_variables.css' // Ensure the path is correct
import './miniMap.css' // Ensure the path is correct
import React from 'react'
import { Button, ConfigProvider } from 'src/components' // Ensure components are correctly exported from 'src/components'
import Logo from 'src/assets/svg/mp-logo-wordmark.svg' // Ensure the SVG path is correct
import MiniMap from './miniMap.svg' // Ensure the SVG path is correct
import { Flex } from 'src/components/layout/Flex/Flex' // Ensure the path is correct
import { SvgLinker, ISvgLink } from 'src/utils/SvgLinker' // Ensure the path is correct

export interface IMinimapProps {
  href: string
}

const Minimap: React.FC<IMinimapProps> = props => {
  const { href } = props
  const buttons: ISvgLink[] = [
    { elementId: 'DataOversightBtn', route: '/dm/catalog', variant: 'drop-shadow' },
    { elementId: 'DataPlatformBtn', route: '/activity/app', variant: 'drop-shadow' },
    { elementId: 'Customer360Btn', route: '/activity/useractivity', variant: 'drop-shadow' },
    { elementId: 'PredictionsBtn', route: `/cortex`, variant: 'drop-shadow' },
    { elementId: 'AnalyticsBtn', route: `/`, variant: 'drop-shadow' },
    { elementId: 'SegmentationBtn', route: '/audiences', variant: 'drop-shadow' },
  ]
  console.log(<MiniMap />, 'minimap')
  return (
    <ConfigProvider>
      <div className="minimap_container">
        <Flex align="normal" component="div" flex="0 1 auto" gap="small" justify="stretch" vertical wrap="nowrap">
          <Flex align="center" justify="space-between">
            <Logo />
            <Button href={href}>Go to overview</Button>
          </Flex>
          <SvgLinker buttons={buttons}>
            <MiniMap />
          </SvgLinker>
        </Flex>
      </div>
    </ConfigProvider>
  )
}

export default Minimap
