import React from 'react'
import { Decorator } from '@storybook/react'
import { ConfigProvider } from '../../src/components/other/ConfigProvider/ConfigProvider'

export const MPConfigProviderDecorator: Decorator = Story => (
  <ConfigProvider>
    <Story />
  </ConfigProvider>
)
