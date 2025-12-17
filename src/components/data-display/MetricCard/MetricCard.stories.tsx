import { type Meta, type StoryObj } from '@storybook/react'
import { MetricCard } from './MetricCard'
import { Flex, Icon } from 'src/components'
import { ExampleStory } from 'src/utils/ExampleStory'

const meta: Meta<typeof MetricCard> = {
  title: 'Components/Data Display/MetricCard',
  component: MetricCard,
  args: {
    title: 'View 24 hours',
    value: 2000,
    changePercent: 100,
    comparisonText: 'vs last month',
    trendDirection: 'up',
    sparklineData: [20, 35, 30, 45, 40, 55, 50, 75, 90],
    width: 360,
  },
  argTypes: {
    trendDirection: {
      control: 'select',
      options: ['up', 'down', 'neutral'],
    },
    width: {
      control: 'number',
    },
  },
}

export default meta

type Story = StoryObj<typeof MetricCard>

/**
 * Default MetricCard showing a positive trend with sparkline visualization.
 * The action menu includes icons for each action item.
 */
export const Primary: Story = {
  args: {
    title: 'View 24 hours',
    value: 2000,
    changePercent: 100,
    comparisonText: 'vs last month',
    trendDirection: 'up',
    sparklineData: [20, 35, 30, 45, 40, 55, 50, 75, 90],
    menuItems: {
      items: [
        {
          key: 'view',
          label: 'View more',
          icon: <Icon name="viewOnly" size="sm" />,
        },
        {
          key: 'share',
          label: 'Share',
          icon: <Icon name="upload" size="sm" />,
        },
        {
          key: 'copy',
          label: 'Copy link',
          icon: <Icon name="copy" size="sm" />,
        },
      ],
    },
  },
}

/**
 * Multiple MetricCard variants showing different trend states:
 * - Positive (up) trend in green
 * - Negative (down) trend in red
 */
export const AllVariants: Story = {
  render: () => {
    const positiveData = [15, 25, 20, 35, 45, 50, 65, 80, 95]
    const negativeData = [90, 85, 75, 80, 60, 55, 45, 35, 25]

    const defaultMenuItems = {
      items: [
        {
          key: 'view',
          label: 'View more',
          icon: <Icon name="viewOnly" size="sm" />,
        },
        {
          key: 'share',
          label: 'Share',
          icon: <Icon name="upload" size="sm" />,
        },
        {
          key: 'copy',
          label: 'Copy link',
          icon: <Icon name="copy" size="sm" />,
        },
      ],
    }

    return (
      <ExampleStory title="MetricCard supports two trend directions: up (success) and down (error)">
        <Flex gap={24} wrap="wrap">
          <MetricCard
            title="New Users"
            value="12,458"
            changePercent={23.5}
            comparisonText="vs last week"
            trendDirection="up"
            sparklineData={positiveData}
            menuItems={defaultMenuItems}
          />

          <MetricCard
            title="Bounce Rate"
            value="34.2%"
            changePercent={12.8}
            comparisonText="vs last week"
            trendDirection="down"
            sparklineData={negativeData}
            menuItems={defaultMenuItems}
          />
        </Flex>
      </ExampleStory>
    )
  },
}
