import { type Meta, type StoryObj } from '@storybook/react'
import { Card } from 'src/components/data-display/Card/Card'
import { Flex, Form, QueryItem, Typography } from 'src/components'
import { MarginSm, MpBrandSecondary2, PaddingXs } from 'src/styles/style'
import { ExampleStory } from 'src/utils/ExampleStory'

const meta: Meta<typeof Card> = {
  title: 'Components/Data Display/Card',
  component: props => <Card {...props}>{props.children}</Card>,

  args: {
    hoverable: false,
    size: 'default',
    title: '',
    children: <Typography.Text>Card Content</Typography.Text>,
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['default', 'small'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Card>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {}

export const WithTitle: Story = {
  args: {
    title: 'Card Title',
  },
}

export const Hoverable: Story = {
  args: {
    title: 'Hoverable card',
    hoverable: true,
  },
}

export const WithInnerCard: Story = {
  render: () => {
    return (
      <ExampleStory title="It can be placed inside the ordinary card to display the information of the multilevel structure.">
        <Card size={'small'} style={{ background: MpBrandSecondary2 }}>
          <Card size={'small'}>
            <Flex gap={MarginSm}>
              <div style={{ paddingTop: PaddingXs, paddingBottom: PaddingXs }}>
                <Form.Item name={'who'} initialValue={'subset'} noStyle>
                  <QueryItem.Qualifier
                    options={[
                      { label: 'For users who', value: 'subset' },
                      { label: 'For all users', value: 'all' },
                    ]}
                  />
                </Form.Item>
              </div>
            </Flex>
          </Card>
        </Card>
      </ExampleStory>
    )
  },
}
