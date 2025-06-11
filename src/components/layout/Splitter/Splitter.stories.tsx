import type { Meta, StoryObj } from '@storybook/react'
import { Splitter } from './Splitter'
import { PaddingMd } from 'src/styles/style'

const meta: Meta<typeof Splitter> = {
  title: 'Components/Layout/Splitter',
  component: Splitter,

  args: {},
}
export default meta

type Story = StoryObj<typeof Splitter>

export const Primary: Story = {
  args: {
    children: [
      <Splitter.Panel key="1" defaultSize="50%" style={{ paddingLeft: PaddingMd }}>
        <div style={{ padding: 16, height: 200, background: '#f0f0f0' }}>Panel 1</div>
      </Splitter.Panel>,
      <Splitter.Panel key="2">
        <div style={{ padding: 16, height: 200, background: '#e6f4ff' }}>Panel 2</div>
      </Splitter.Panel>,
    ],
  },
}

export const Vertical: Story = {
  args: {
    layout: 'vertical',
    children: [
      <Splitter.Panel key="1" defaultSize="50%">
        <div style={{ padding: 16, height: 100, background: '#f0f0f0' }}>Panel 1</div>
      </Splitter.Panel>,
      <Splitter.Panel key="2">
        <div style={{ padding: 16, height: 100, background: '#e6f4ff' }}>Panel 2</div>
      </Splitter.Panel>,
    ],
  },
}
