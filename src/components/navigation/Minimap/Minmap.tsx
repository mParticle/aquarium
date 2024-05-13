import 'src/styles/_variables.css'
import './minimap.css'
import React from 'react'
import { Card } from 'src/components/data-display/Card/Card'
import { Button, ConfigProvider } from 'src/components'
import Logo from 'src/assets/svg/mp-logo-wordmark.svg?react'
import Map from './map.svg?react'
import { Flex } from 'src/components/layout/Flex/Flex'
export interface IMinimapProps {}

const Minimap: React.FC<IMinimapProps> = props => {
  return (
    <ConfigProvider>
      <div className="minimap_container">
        <Flex align="normal" component="div" flex="0 1 auto" gap="small" justify="stretch" vertical wrap="nowrap">
          <Flex align="center" justify="space-between">
            <Logo />
            <Button>Go to overview</Button>
          </Flex>
          <Map />
        </Flex>
      </div>
    </ConfigProvider>
  )
}

export default Minimap
