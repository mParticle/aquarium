import type { Meta } from '@storybook/react'
import type { StoryObj } from '@storybook/react'
import { Typography } from 'src/components/general/Typography/Typography'
import { ExampleStory } from 'src/utils/ExampleStory'

const meta: Meta<typeof Typography.Title> = {
  title: 'Components/General/Typography/Title',
  component: Typography.Title,
}

export default meta

type Story = StoryObj<typeof Typography.Title>

export const Primary: Story = {
  render: () => {
    return (
      <ExampleStory title="Different Headings.">
        <Typography.Title editable level={1} style={{ margin: 0 }}>
          h1. Aquarium Component Library
        </Typography.Title>
        <Typography.Title editable level={2} style={{ margin: 0 }}>
          h2. Aquarium Component Library
        </Typography.Title>
        <Typography.Title editable level={3} style={{ margin: 0 }}>
          h3. Aquarium Component Library
        </Typography.Title>
        <Typography.Title editable level={4} style={{ margin: 0 }}>
          h4. Aquarium Component Library
        </Typography.Title>
        <Typography.Title editable level={5} style={{ margin: 0 }}>
          h5. Aquarium Component Library
        </Typography.Title>
      </ExampleStory>
    )
  },
}
