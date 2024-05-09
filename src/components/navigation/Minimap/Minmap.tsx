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
      <Card
        bordered={true}
        actions={[
          <Button
            key="edit"
            style={{ marginRight: '10px', marginLeft: 'auto', display: 'block', width: 'fit-content' }}>
            Go to overview
          </Button>,
        ]}>
        <Flex align="normal" component="div" flex="0 1 auto" gap="middle" justify="stretch" vertical wrap="nowrap">
          <Logo />
          <Map />
        </Flex>
      </Card>
    </ConfigProvider>
  )
}

export default Minimap
