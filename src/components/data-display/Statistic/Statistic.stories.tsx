import { type Meta, type StoryObj } from '@storybook/react'
import { Row, Col, Button } from 'antd'
import { Card } from 'src/components'
import { type ICountdownProps, Statistic, type valueType } from 'src/components/data-display/Statistic/Statistic'
import { Icon } from 'src/components/general/Icon/Icon'
import { Text, Paragraph } from 'src/components/general/Typography/Typography'
import { ColorError, ColorInfoBg, ColorSuccess, PaddingXl } from 'src/styles/style'
import { ExampleStory } from 'src/utils/ExampleStory'

const meta: Meta<typeof Statistic> = {
  title: 'Aquarium/Data Display/Statistic',
  component: Statistic,

  args: {
    decimalSeparator: '.',
    formatter: (value: valueType) => `${value}`,
    groupSeparator: ',',
    loading: false,
    precision: 0,
    prefix: undefined,
    suffix: undefined,
    title: 'Statistic',
    value: 0,
    valueStyle: undefined,
  },
  argTypes: {
    formatter: {
      control: 'select',
      options: ['default', 'code', 'error'],
      mapping: {
        default: (value: valueType) => `${value}`,
        code: (value: valueType) => <Text code>{value}</Text>,
        error: (value: valueType) => <Text type="danger">{value}</Text>,
      },
    },
    prefix: {
      control: 'select',
      options: ['check', 'alicorn', 'wrench'],
      mapping: {
        check: <Icon name="check" />,
        alicorn: <Icon name="alicorn" />,
        wrench: <Icon name="wrench" />,
      },
    },
    suffix: {
      control: 'text',
    },
    valueStyle: {
      control: 'object',
    },
  },
}
export default meta

type Story = StoryObj<typeof Statistic>

export const Primary: Story = {}

export const CustomDecimalSeparator: Story = {
  args: {
    value: 1128.93,
    decimalSeparator: ',',
  },
}

export const CustomFormatter: Story = {
  args: {
    value: 112893,
    formatter: (value: valueType) => (
      <Text code copyable>
        {value}
      </Text>
    ),
  },
}

export const CustomGroupSeparator: Story = {
  args: {
    value: 112893,
    groupSeparator: '.',
  },
}

export const CustomLoading: Story = {
  args: {
    loading: true,
  },
}

export const CustomPrecision: Story = {
  args: {
    // value: 1128.93402,
    precision: 3,
  },
}

export const CustomPrefix: Story = {
  args: {
    prefix: <Icon name="check" />,
  },
}

export const CustomSuffix: Story = {
  args: {
    suffix: '元',
  },
}
export const CustomTitle: Story = {
  args: {
    title: 'Custom title',
  },
}

export const CustomValue: Story = {
  args: {
    value: 112893,
  },
}

export const CustomValueStyle: Story = {
  args: {
    value: 112893,
    valueStyle: { color: ColorSuccess },
  },
}

export const ExampleBasic: Story = {
  render: () => {
    return (
      <ExampleStory title="Basic Usage" description="Simplest Usage">
        <Row gutter={16}>
          <Col span={12}>
            <Statistic title="Active Users" value={112893} />
          </Col>
          <Col span={12}>
            <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
            <Button style={{ marginTop: 16 }} type="primary">
              Recharge
            </Button>
          </Col>
          <Col span={12}>
            <Statistic title="Active Users" value={112893} loading />
          </Col>
        </Row>
      </ExampleStory>
    )
  },
}

export const ExampleWithUnit: Story = {
  render: () => {
    return (
      <ExampleStory
        title="Add unit through prefix and suffix."
        description={
          <Paragraph>
            Add unit through <code>prefix</code> and <code>suffix</code>
          </Paragraph>
        }>
        <Row gutter={16}>
          <Col>
            <Statistic title="Feedback" value={1128} prefix={<Icon name="alicorn" />} />
          </Col>
          <Col>
            <Statistic title="Unmerged" value={93} suffix="/ 100" />
          </Col>
        </Row>
      </ExampleStory>
    )
  },
}

export const ExampleWithCard: Story = {
  render: () => {
    return (
      <ExampleStory title="Card Usage" description="Display statistic data in Card.">
        <Row gutter={16} style={{ backgroundColor: ColorInfoBg, width: '500px', padding: PaddingXl }}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{ color: ColorSuccess }}
                prefix={<Icon name="add" />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{ color: ColorError }}
                prefix={<Icon name="wrench" />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row>
      </ExampleStory>
    )
  },
}

const twoDays = 1000 * 60 * 60 * 24 * 2
const thirtySeconds = 1000 * 30
const twoDaysFromNow = Date.now() + twoDays
const deadline = twoDaysFromNow + thirtySeconds

const onFinish: ICountdownProps['onFinish'] = () => {
  console.log('finished!')
}

const onChange: ICountdownProps['onChange'] = val => {
  if (typeof val === 'number' && 4.95 * 1000 < val && val < 5 * 1000) {
    console.log('changed!')
  }
}

export const ExampleWithCountdown: Story = {
  render: () => {
    return (
      <ExampleStory title="Countdown" description="Countdown component">
        <Row gutter={16} style={{ width: '500px' }}>
          <Col span={12}>
            <Statistic.Countdown title="Countdown" value={deadline} onFinish={onFinish} />
          </Col>
          <Col span={12}>
            <Statistic.Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
          </Col>
          <Col span={24} style={{ marginTop: 32 }}>
            <Statistic.Countdown title="Day Level" value={deadline} format="D 天 H 时 m 分 s 秒" />
          </Col>
          <Col span={12}>
            <Statistic.Countdown title="Countdown" value={Date.now() + 10 * 1000} onChange={onChange} />
          </Col>
        </Row>
      </ExampleStory>
    )
  },
}
