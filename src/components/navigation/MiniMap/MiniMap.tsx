import 'src/styles/_variables.css'
import './miniMap.css'
import React from 'react'
import { Button, ConfigProvider } from 'src/components'
import Logo from 'src/assets/svg/mp-logo-wordmark.svg?react'
import { minimap } from './minimap-svg'
import { Flex } from 'src/components/layout/Flex/Flex'
import { ISvgLink, ISvgLinkComplete, SvgLinker } from 'src/components/navigation/MiniMap/SvgLinker'

interface IMinimapOptions {
  overviewHref: string
  links: ISvgLink[]
  onLinkClick: (link: string) => void
}

interface IMinimapProps extends IMinimapOptions {
  unauthorizedButtons: string[]
}

const Minimap = ({ overviewHref, unauthorizedButtons, links, onLinkClick }: IMinimapProps) => {
  const linkMap: { [key: string]: string } = {
    oversight: 'OversightBtn',
    dataPlatform: 'DataPlatformBtn',
    customer360: 'c360Btn',
    predictions: 'PredictionsBtn',
    analytics: 'AnalyticsBtn',
    segmentation: 'SegmentationBtn',
  }

  const linksWithRoutes: ISvgLinkComplete[] = links.map(link => ({
    ...link,
    linkId: linkMap[link.elementId],
    variant: 'drop-shadow',
  }))

  return (
    <ConfigProvider>
      <div className="minimap_container">
        <Flex align="normal" component="div" flex="0 1 auto" gap="small" justify="stretch" vertical wrap="nowrap">
          <Flex align="center" justify="space-between">
            <Logo />
            <Button href={overviewHref || '/'}>Go to overview</Button>
          </Flex>
          <SvgLinker links={linksWithRoutes} unauthorizedButtons={unauthorizedButtons} onLinkClick={onLinkClick}>
            {minimap}
          </SvgLinker>
        </Flex>
      </div>
    </ConfigProvider>
  )
}

export default Minimap
