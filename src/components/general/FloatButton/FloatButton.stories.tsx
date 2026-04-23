import { QuestionCircleOutlined, CustomerServiceOutlined } from '@ant-design/icons'
import { type Meta, type StoryObj } from '@storybook/react'
import { FloatButton } from 'src/components/general/FloatButton/FloatButton'

const meta: Meta<typeof FloatButton> = {
  title: 'Experimental/General/FloatButton',
  component: FloatButton,

  args: {
    tooltip: { title: 'Help', placement: 'left' },
    type: 'primary',
    shape: 'square',
    icon: <QuestionCircleOutlined style={{ color: 'white' }} />,
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

  parameters: {
    docs: {
      story: {
        inline: true,
        iframeHeight: 150,
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof FloatButton>

export const Primary: Story = {}

export const Group: Story = {
  render: () => (
    <FloatButton.Group shape="circle" style={{ insetInlineEnd: 24 }}>
      <FloatButton icon={<QuestionCircleOutlined />} tooltip={{ title: 'Help', placement: 'left' }} />
      <FloatButton icon={<CustomerServiceOutlined />} tooltip={{ title: 'Support', placement: 'left' }} />
    </FloatButton.Group>
  ),
}
