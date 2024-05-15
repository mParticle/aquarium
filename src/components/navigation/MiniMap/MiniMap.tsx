import 'src/styles/_variables.css'
import './miniMap.css'
import React from 'react'
import { Button, ConfigProvider } from 'src/components'
import Logo from 'src/assets/svg/mp-logo-wordmark.svg?react'
import MiniMap from './miniMap.svg?react'
import { Flex } from 'src/components/layout/Flex/Flex'
export interface IMinimapProps {
  goToOverviewHref: string
}

const Minimap: React.FC<IMinimapProps> = props => {
  return (
    <ConfigProvider>
      <div className="minimap_container">
        <Flex align="normal" component="div" flex="0 1 auto" gap="small" justify="stretch" vertical wrap="nowrap">
          <Flex align="center" justify="space-between">
            <Logo />
            <Button href={props.goToOverviewHref || '/'}>Go to overview</Button>
          </Flex>
          <MiniMap />
        </Flex>
      </div>
    </ConfigProvider>
  )
}

export default Minimap
