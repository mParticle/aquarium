import { QuestionCircleOutlined, CustomerServiceOutlined } from '@ant-design/icons'
import { type Meta, type StoryObj } from '@storybook/react'
import { FloatButton } from 'src/components/general/FloatButton/FloatButton'

const meta: Meta<typeof FloatButton> = {
  title: 'Components/Not Prod Ready/General/FloatButton',
  component: FloatButton,

  args: {
    description: 'Float Button',
    tooltip: 'Tooltip Text',
    type: 'primary',
    shape: 'circle',
  },

  argTypes: {
    shape: {
      control: 'select',
      options: ['circle', 'square'],
    },
    type: {
      control: 'select',
      options: ['default', 'primary'],
    },
  },
}
export default meta

type Story = StoryObj<typeof FloatButton>

export const Primary: Story = {}

export const Group: Story = {
  render: () => (
    <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
      <FloatButton icon={<QuestionCircleOutlined />} tooltip="Help" type="primary" />
      <FloatButton icon={<CustomerServiceOutlined />} tooltip="Support" />
    </FloatButton.Group>
  ),
}
