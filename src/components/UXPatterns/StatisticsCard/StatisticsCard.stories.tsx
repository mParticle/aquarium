import { type Meta, type StoryObj } from '@storybook/react'
import { StatisticsCard } from './StatisticsCard'
import { Row, Col } from 'src/components'

const meta: Meta<typeof StatisticsCard> = {
  title: 'UX Patterns/StatisticsCard',
  component: StatisticsCard,
  parameters: {
    layout: 'centered',
  },
}
export default meta

type Story = StoryObj<typeof StatisticsCard>

export const ModelMetrics: Story = {
  render: () => {
    const metrics = [
      {
        title: 'Precision',
        value: 72,
        tooltip:
          'Precision focuses on how many of the users predicted to act actually do so. High precision means less wasted impressions or messaging.',
      },
      {
        title: 'Recall',
        value: 76,
        tooltip:
          'Recall shows how many of the actual converters the model successfully identifies. Higher recall means fewer missed opportunities.',
      },
      {
        title: 'Accuracy',
        value: 87,
        tooltip:
          "Accuracy shows how often the model's predictions match what really happens, giving you confidence in your audience targeting or personalization strategy.",
      },
      {
        title: 'AUC',
        value: 87,
        tooltip:
          'AUC tells you how powerful your model is at separating likely converters from everyone else — the higher the AUC, the better your targeting precision.',
      },
    ]

    return (
      <div style={{ width: '800px' }}>
        <Row gutter={[16, 16]}>
          {metrics.map(metric => (
            <Col span={12} key={metric.title}>
              <StatisticsCard title={metric.title} value={metric.value} denominator={100} tooltip={metric.tooltip} />
            </Col>
          ))}
        </Row>
      </div>
    )
  },
}
