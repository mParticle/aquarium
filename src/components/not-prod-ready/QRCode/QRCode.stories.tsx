import type { Meta, StoryObj } from '@storybook/react'
import { QRCode } from 'src/components/not-prod-ready/QRCode/QRCode'

const meta: Meta<typeof QRCode> = {
  title: 'Components/Not Prod Ready/QRCode',
  component: QRCode,

  args: {},
}
export default meta

type Story = StoryObj<typeof QRCode>

export const Primary: Story = {}
