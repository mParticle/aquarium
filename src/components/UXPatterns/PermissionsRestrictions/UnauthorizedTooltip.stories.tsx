import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { UnauthorizedTooltip } from './UnauthorizedTooltip'
import { Button, Radio } from 'src/components'
import { Margin } from 'src/styles/style'

const meta: Meta<typeof UnauthorizedTooltip> = {
  title: 'UX Patterns/PermissionsRestrictions',
  component: UnauthorizedTooltip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isAuthorized: {
      control: 'boolean',
      description: 'Whether the user is authorized to perform the action',
      defaultValue: false,
    },
    unauthorizedMessage: {
      control: 'text',
      description: 'Custom message to display when unauthorized',
    },
  },
}

export default meta
type Story = StoryObj<typeof UnauthorizedTooltip>

export const DisabledButton: Story = {
  args: {
    isAuthorized: false,
    children: <Button disabled>Delete</Button>,
  },
}

export const ModalExample: Story = {
  render: () => {
    const [value, setValue] = useState('option2')

    const unauthorizedMessage = (
      <>
              <Typography.Text tooltip>
                You don&apos;t have permissions for this action.{' '}
                <Typography.Link href="/" tooltip>
                  Learn More
                </Typography.Link>
              </Typography.Text>
            </>
    )

    return (
      <Radio.Group value={value} onChange={e => setValue(e.target.value as string)}>
        <div style={{ marginBottom: Margin }}>
          <UnauthorizedTooltip isAuthorized={false} unauthorizedMessage={unauthorizedMessage} placement="right">
            <Radio value="option1" disabled>
              Option 1
            </Radio>
          </UnauthorizedTooltip>
        </div>
        <Radio value="option2">Option 2</Radio>
      </Radio.Group>
    )
  },
}
