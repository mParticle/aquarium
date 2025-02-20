import type { Meta } from '@storybook/react'
import type { StoryObj } from '@storybook/react'
import { Space } from 'src/components'
import { Switch } from 'src/components'
import { Typography } from 'src/components/general/Typography/Typography'
import { PaddingLg } from 'src/styles/style'
import { ExampleStory } from 'src/utils/ExampleStory'
import { useState } from 'react'
import { expect } from '@storybook/test'
import { TypographyColors } from './colors'

const meta: Meta<typeof Typography.Text> = {
  title: 'Components/General/Typography/Text',
  component: props => <Typography.Text {...props}>{props.children}</Typography.Text>,
  args: {
    children: 'Example Text',
    type: undefined,
    color: undefined,
    size: 'base',
    code: false,
    copyable: false,
    delete: false,
    disabled: false,
    editable: false,
    ellipsis: false,
    mark: false,
    strong: false,
    italic: false,
    underline: false,
  },
  argTypes: {
    children: {
      control: 'text',
      name: 'text',
    },
    type: {
      control: 'select',
      options: ['secondary', 'success', 'warning', 'danger'],
    },
    size: {
      control: 'select',
      options: ['base', 'sm', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: TypographyColors,
    },
    copyable: {
      control: 'boolean',
    },
    delete: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    editable: {
      control: 'boolean',
    },
    ellipsis: {
      control: 'boolean',
    },
    mark: {
      control: 'boolean',
    },
    strong: {
      control: 'boolean',
    },
    italic: {
      control: 'boolean',
    },
    code: {
      control: 'boolean',
    },
  },
}
export default meta

type Story = StoryObj<typeof Typography.Text>

export const Primary: Story = {
  play: async context => {
    const text = context.canvasElement.querySelector('span')
    void expect(text?.textContent).toEqual('Example Text')
  },
}

export const ExampleTexts: Story = {
  render: () => {
    return (
      <ExampleStory title={<> </>}>
        <Space direction="vertical">
          <Typography.Text>Aquarium (default)</Typography.Text>
          <Typography.Text type="secondary">Aquarium (secondary)</Typography.Text>
          <Typography.Text type="success">Aquarium (success)</Typography.Text>
          <Typography.Text type="warning">Aquarium (warning)</Typography.Text>
          <Typography.Text type="danger">Aquarium (danger)</Typography.Text>
          <Typography.Text disabled>Aquarium (disabled)</Typography.Text>
          <Typography.Text mark>Aquarium (mark)</Typography.Text>
          <Typography.Text code>Aquarium (code)</Typography.Text>
          <Typography.Text keyboard>Aquarium (keyboard)</Typography.Text>
          <Typography.Text underline>Aquarium (underline)</Typography.Text>
          <Typography.Text delete>Aquarium (delete)</Typography.Text>
          <Typography.Text strong>Aquarium (strong)</Typography.Text>
          <Typography.Text italic>Aquarium (italic)</Typography.Text>
        </Space>
      </ExampleStory>
    )
  },
}

export const ExampleProps: Story = {
  render: () => {
    return (
      <ExampleStory title={<> </>}>
        <Space direction="vertical">
          <Typography.Text size="sm" color="ColorPrimaryText" style={{ paddingLeft: PaddingLg }}>
            Aquarium props test
          </Typography.Text>
        </Space>
      </ExampleStory>
    )
  },
}

export const ExampleEllipsis: Story = {
  render: () => {
    const [ellipsis, setEllipsis] = useState(true)
    return (
      <ExampleStory title="Toggle ellipsis on and off.">
        <Switch
          checked={ellipsis}
          onChange={() => {
            setEllipsis(!ellipsis)
          }}
        />
        <Typography.Text
          style={ellipsis ? { width: 200 } : undefined}
          ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}>
          Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Typography.Text>
        <Typography.Text
          code
          style={ellipsis ? { width: 200 } : undefined}
          ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}>
          Ant Design, a design language for background applications, is refined by Ant UED Team.
        </Typography.Text>
      </ExampleStory>
    )
  },
}
