import { type Meta, type StoryObj } from '@storybook/react'
import { Row, Col, Button } from 'antd'
import { Card } from 'src/components'
import { type ICountdownProps, Statistic } from 'src/components/data-display/Statistic/Statistic'
import { Icon } from 'src/components/general/Icon/Icon'
import { Paragraph } from 'src/components/general/Typography/Typography'
import { ColorError, ColorErrorText, ColorInfoBg, ColorSuccess, PaddingXl } from 'src/styles/style'
import { ExampleStory } from 'src/utils/ExampleStory'

const meta: Meta<typeof Statistic> = {
  title: 'Aquarium/Data Display/Statistic',
  component: Statistic,

  args: {},
}
export default meta

type Story = StoryObj<typeof Statistic>

export const Primary: Story = {}

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

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30 // Dayjs is also OK

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
