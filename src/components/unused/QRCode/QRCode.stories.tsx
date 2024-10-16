import type { Meta, StoryObj } from '@storybook/react'
import { QRCode } from 'src/components/unused/QRCode/QRCode'

const meta: Meta<typeof QRCode> = {
  title: 'Components/Unused/QRCode',
  component: QRCode,

  args: {},
}
export default meta

type Story = StoryObj<typeof QRCode>

export const Primary: Story = {}
