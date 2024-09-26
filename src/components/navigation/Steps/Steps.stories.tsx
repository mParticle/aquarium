import { type Meta, type StoryObj } from '@storybook/react'
import { theme } from 'antd'
import { useState } from 'react'
import { Avatar, Button, Divider, Icon, List, message, Popover } from 'src/components'
import { type IStepsProps, Steps } from 'src/components/navigation/Steps/Steps'
import { ExampleStory } from 'src/utils/ExampleStory'

const items = [
  {
    title: 'Finished',
    description: 'description 1',
  },
  {
    title: 'In Progress',
    description: 'description 2',
    subTitle: 'subTitle 2',
  },
  {
    title: 'Waiting',
    description: 'description 3',
  },
]

const meta: Meta<typeof Steps> = {
  title: 'Components/Navigation/Steps',
  component: Steps,

  args: {
    items,
    current: 0,
    initial: 0,
    direction: 'horizontal',
    labelPlacement: 'horizontal',
    percent: undefined,
    progressDot: false,
    responsive: true,
    size: 'default',
    status: 'process',
    type: 'default',
    onChange: current => {
      alert('Step changed : ' + current)
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    labelPlacement: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    type: {
      control: 'select',
      options: ['default', 'navigation', 'inline'],
    },
    status: {
      control: 'select',
      options: ['wait', 'process', 'finish', 'error'],
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Steps>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {}

export const VerticalDirection: Story = {
  args: {
    direction: 'vertical',
  },
}

export const SmallSize: Story = {
  args: {
    size: 'small',
  },
}

export const ProgressDot: Story = {
  args: {
    progressDot: true,
  },
}

export const CustomProgressDot: Story = {
  args: {
    progressDot: (iconDot, { index, status, title, description }) => {
      return <span>{'Custom Dot: ' + index}</span>
    },
  },
}

export const DifferentStatuses: Story = {
  args: {
    items: [{ status: 'wait' }, { status: 'process' }, { status: 'finish' }, { status: 'error' }],
  },
}

export const Navigation: Story = {
  args: {
    type: 'navigation',
  },
}

export const Inline: Story = {
  args: {
    type: 'inline',
  },
}

export const ExampleBasic: Story = {
  render: () => {
    const description = 'This is a description.'
    return (
      <ExampleStory title="The most basic step bar.">
        <Steps
          current={1}
          items={[
            {
              title: 'Finished',
              description,
            },
            {
              title: 'In Progress',
              description,
              subTitle: 'Left 00:00:08',
            },
            {
              title: 'Waiting',
              description,
            },
          ]}
        />
      </ExampleStory>
    )
  },
}

export const ExampleSmall: Story = {
  render: () => {
    return (
      <ExampleStory title='By setting like this: <Steps size="small">, you can get a mini version.'>
        <Steps
          size="small"
          current={1}
          items={[
            {
              title: 'Finished',
            },
            {
              title: 'In Progress',
            },
            {
              title: 'Waiting',
            },
          ]}
        />
      </ExampleStory>
    )
  },
}

export const ExampleIcon: Story = {
  render: () => {
    return (
      <ExampleStory title="You can use your own custom icons by setting the property icon for items.">
        <Steps
          items={[
            {
              title: 'Login',
              status: 'finish',
              icon: <Icon name="users" />,
            },
            {
              title: 'Verification',
              status: 'finish',
              icon: <Icon name="settings" />,
            },
            {
              title: 'Pay',
              status: 'process',
              icon: <Icon name="alicorn" />,
            },
            {
              title: 'Done',
              status: 'wait',
              icon: <Icon name="selected" size="sm" />,
            },
          ]}
        />
      </ExampleStory>
    )
  },
}

export const ExampleSwitch: Story = {
  render: () => {
    const steps = [
      {
        title: 'First',
        content: 'First-content',
      },
      {
        title: 'Second',
        content: 'Second-content',
      },
      {
        title: 'Last',
        content: 'Last-content',
      },
    ]
    const { token } = theme.useToken()
    const [current, setCurrent] = useState(0)

    const next = () => {
      setCurrent(current + 1)
    }

    const prev = () => {
      setCurrent(current - 1)
    }

    const items = steps.map(item => ({ key: item.title, title: item.title }))

    const contentStyle: React.CSSProperties = {
      lineHeight: '260px',
      textAlign: 'center',
      color: token.colorTextTertiary,
      backgroundColor: token.colorFillAlter,
      borderRadius: token.borderRadiusLG,
      border: `1px dashed ${token.colorBorder}`,
      marginTop: 16,
    }

    return (
      <ExampleStory title="Cooperate with the content and buttons, to represent the progress of a process.">
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => {
                next()
              }}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => {
                void message.success('Processing complete!')
              }}>
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{ margin: '0 8px' }}
              onClick={() => {
                prev()
              }}>
              Previous
            </Button>
          )}
        </div>
      </ExampleStory>
    )
  },
}

export const ExampleVertical: Story = {
  render: () => {
    const description = 'This is a description.'

    return (
      <ExampleStory title="A simple step bar in the vertical direction.">
        <Steps
          direction="vertical"
          current={1}
          items={[
            {
              title: 'Finished',
              description,
            },
            {
              title: 'In Progress',
              description,
            },
            {
              title: 'Waiting',
              description,
            },
          ]}
        />
      </ExampleStory>
    )
  },
}

export const ExampleVerticalSmall: Story = {
  render: () => {
    const description = 'This is a description.'
    return (
      <ExampleStory title="A simple mini version step bar in the vertical direction.">
        <Steps
          direction="vertical"
          size="small"
          current={1}
          items={[
            { title: 'Finished', description },
            {
              title: 'In Progress',
              description,
            },
            {
              title: 'Waiting',
              description,
            },
          ]}
        />
      </ExampleStory>
    )
  },
}

export const ExampleError: Story = {
  render: () => {
    const description = 'This is a description'
    return (
      <ExampleStory title="By using status of Steps, you can specify the state for current step.">
        <Steps
          current={1}
          status="error"
          items={[
            {
              title: 'Finished',
              description,
            },
            {
              title: 'In Process',
              description,
            },
            {
              title: 'Waiting',
              description,
            },
          ]}
        />
      </ExampleStory>
    )
  },
}

export const ExampleDot: Story = {
  render: () => {
    return (
      <ExampleStory title="Steps with progress dot style.">
        <>
          <Steps
            progressDot
            current={1}
            items={[
              {
                title: 'Finished',
                description: 'This is a description.',
              },
              {
                title: 'In Progress',
                description: 'This is a description.',
              },
              {
                title: 'Waiting',
                description: 'This is a description.',
              },
            ]}
          />
          <Divider />
          <Steps
            progressDot
            current={1}
            direction="vertical"
            items={[
              {
                title: 'Finished',
                description: 'This is a description. This is a description.',
              },
              {
                title: 'Finished',
                description: 'This is a description. This is a description.',
              },
              {
                title: 'In Progress',
                description: 'This is a description. This is a description.',
              },
              {
                title: 'Waiting',
                description: 'This is a description.',
              },
              {
                title: 'Waiting',
                description: 'This is a description.',
              },
            ]}
          />
        </>
      </ExampleStory>
    )
  },
}

export const ExampleCustomDot: Story = {
  render: () => {
    const customDot: IStepsProps['progressDot'] = (dot, { status, index }) => (
      <Popover
        content={
          <span>
            step {index} status: {status}
          </span>
        }>
        {dot}
      </Popover>
    )
    const description = 'You can hover on the dot.'
    return (
      <ExampleStory title="You can customize the display for Steps with progress dot style.">
        <Steps
          current={1}
          progressDot={customDot}
          items={[
            {
              title: 'Finished',
              description,
            },
            {
              title: 'In Progress',
              description,
            },
            {
              title: 'Waiting',
              description,
            },
            {
              title: 'Waiting',
              description,
            },
          ]}
        />
      </ExampleStory>
    )
  },
}

export const ExampleClickable: Story = {
  render: () => {
    const [current, setCurrent] = useState(0)

    const onChange = (value: number) => {
      console.log('onChange:', value)
      setCurrent(value)
    }
    const description = 'This is a description.'
    return (
      <ExampleStory title="Setting onChange makes Steps clickable.">
        <>
          <Steps
            current={current}
            onChange={onChange}
            items={[
              {
                title: 'Step 1',
                description,
              },
              {
                title: 'Step 2',
                description,
              },
              {
                title: 'Step 3',
                description,
              },
            ]}
          />

          <Divider />

          <Steps
            current={current}
            onChange={onChange}
            direction="vertical"
            items={[
              {
                title: 'Step 1',
                description,
              },
              {
                title: 'Step 2',
                description,
              },
              {
                title: 'Step 3',
                description,
              },
            ]}
          />
        </>
      </ExampleStory>
    )
  },
}

export const ExampleNavigation: Story = {
  render: () => {
    const [current, setCurrent] = useState(0)

    const onChange = (value: number) => {
      console.log('onChange:', value)
      setCurrent(value)
    }
    return (
      <ExampleStory title="Navigation steps.">
        <>
          <Steps
            type="navigation"
            size="small"
            current={current}
            onChange={onChange}
            className="site-navigation-steps"
            items={[
              {
                title: 'Step 1',
                subTitle: '00:00:05',
                status: 'finish',
                description: 'This is a description.',
              },
              {
                title: 'Step 2',
                subTitle: '00:01:02',
                status: 'process',
                description: 'This is a description.',
              },
              {
                title: 'Step 3',
                subTitle: 'waiting for longlong time',
                status: 'wait',
                description: 'This is a description.',
              },
            ]}
          />
          <Steps
            type="navigation"
            current={current}
            onChange={onChange}
            className="site-navigation-steps"
            items={[
              {
                status: 'finish',
                title: 'Step 1',
              },
              {
                status: 'process',
                title: 'Step 2',
              },
              {
                status: 'wait',
                title: 'Step 3',
              },
              {
                status: 'wait',
                title: 'Step 4',
              },
            ]}
          />
          <Steps
            type="navigation"
            size="small"
            current={current}
            onChange={onChange}
            className="site-navigation-steps"
            items={[
              {
                status: 'finish',
                title: 'finish 1',
              },
              {
                status: 'finish',
                title: 'finish 2',
              },
              {
                status: 'process',
                title: 'current process',
              },
              {
                status: 'wait',
                title: 'wait',
                disabled: true,
              },
            ]}
          />
        </>
      </ExampleStory>
    )
  },
}

export const ExampleProgress: Story = {
  render: () => {
    const description = 'This is a description.'

    return (
      <ExampleStory title="Steps with progress.">
        <Steps
          current={1}
          percent={60}
          items={[
            {
              title: 'Finished',
              description,
            },
            {
              title: 'In Progress',
              subTitle: 'Left 00:00:08',
              description,
            },
            {
              title: 'Waiting',
              description,
            },
          ]}
        />
      </ExampleStory>
    )
  },
}

export const ExampleLabelPlacement: Story = {
  render: () => {
    const description = 'This is a description.'
    const items = [
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
      },
      {
        title: 'Waiting',
        description,
      },
    ]
    return (
      <ExampleStory title="Set labelPlacement to vertical.">
        <Steps current={1} labelPlacement="vertical" items={items} />
        <br />
        <Steps current={1} percent={60} labelPlacement="vertical" items={items} />
        <br />
        <Steps current={1} size="small" labelPlacement="vertical" items={items} />
      </ExampleStory>
    )
  },
}

export const ExampleInline: Story = {
  render: () => {
    const data = [
      {
        title: 'Ant Design Title 1',
        current: 0,
      },
      {
        title: 'Ant Design Title 2',
        current: 1,
        status: 'error',
      },
      {
        title: 'Ant Design Title 3',
        current: 2,
      },
      {
        title: 'Ant Design Title 4',
        current: 1,
      },
    ]

    const items = [
      {
        title: 'Step 1',
        description: 'This is a Step 1.',
      },
      {
        title: 'Step 2',
        description: 'This is a Step 2.',
      },
      {
        title: 'Step 3',
        description: 'This is a Step 3.',
      },
    ]
    return (
      <ExampleStory title="Inline type steps, suitable for displaying the process and current state of the object in the list content scene.">
        <div>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <Steps
                  style={{ marginTop: 8 }}
                  type="inline"
                  current={item.current}
                  status={item.status as IStepsProps['status']}
                  items={items}
                />
              </List.Item>
            )}
          />
        </div>
      </ExampleStory>
    )
  },
}
