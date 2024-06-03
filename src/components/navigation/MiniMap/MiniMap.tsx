import 'src/styles/_variables.css'
import './miniMap.css'
import React from 'react'
import { Button, ConfigProvider } from 'src/components'
import Logo from 'src/assets/svg/mp-logo-wordmark.svg?react'
import { minimap } from './minimap-svg'
import { Flex } from 'src/components/layout/Flex/Flex'
import { ISvgLink, SvgLinker } from 'src/components/navigation/MiniMap/SvgLinker'
import { IMiniMapOptions, MiniMapLinks } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'

type IMiniMapProps = IMiniMapOptions

const Minimap = (props: IMiniMapProps) => {
  const elementIdMap: Record<MiniMapLinks, string> = {
    oversight: 'OversightBtn',
    dataPlatform: 'DataPlatformBtn',
    customer360: 'c360Btn',
    predictions: 'PredictionsBtn',
    analytics: 'AnalyticsBtn',
    segmentation: 'SegmentationBtn',
  } as const

  const svgLinks: ISvgLink[] = props.links.map(link => ({
    elementId: elementIdMap[link.linkId],
    href: link.href,
    variant: 'drop-shadow',
    isUnauthorized: props.unauthorizedLinks.includes(link.linkId),
  }))

  return (
    <ConfigProvider>
      <div className="u-padding-sm">
        <Flex align="normal" component="div" flex="0 1 auto" gap="small" justify="stretch" vertical wrap="nowrap">
          <Flex align="center" justify="space-between">
            <Logo />
            <Button href={props.overviewHref || '/'}>Go to overview</Button>
          </Flex>
          <SvgLinker links={svgLinks} onLinkClick={handleLinkClick}>
            {minimap}
          </SvgLinker>
        </Flex>
      </div>
    </ConfigProvider>
  )
  function handleLinkClick(svgLink: ISvgLink): void {
    const miniMapLink = props.links.find(link => link.href === svgLink.href)!

    if (svgLink.isUnauthorized) props.onUnauthorizedClick(miniMapLink)
    else props.onLinkClick(miniMapLink)
  }
}

export default Minimap
