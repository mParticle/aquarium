import { type Meta, type StoryObj } from '@storybook/react'
import { TreeSelect } from 'src/components/data-entry/TreeSelect/TreeSelect'

const meta: Meta<typeof TreeSelect> = {
  title: 'Components/Data Entry/TreeSelect',
  component: TreeSelect,

  args: {},
}
export default meta

type Story = StoryObj<typeof TreeSelect>

export const Primary: Story = {
  render: () => {
    return (
      <TreeSelect
        style={{ width: '100%', minWidth: '200px' }}
        treeDefaultExpandAll
        multiple
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placement="bottomLeft"
        placeholder="Select inputs"
        treeData={[
          {
            title: 'Platforms',
            key: 'platforms',
            selectable: false,
            children: [
              {
                title: 'iOS',
                key: 'app-1',
                value: 'app-1',
              },
              {
                title: 'Android',
                key: 'app-2',
                value: 'app-2',
              },
              {
                title: 'Web',
                key: 'app-3',
                value: 'app-3',
              },
            ],
          },
          {
            title: 'Feeds',
            key: 'feeds',
            selectable: false,
            children: [
              {
                title: 'Braze',
                key: 'feed-1',
                value: 'feed-1',
                children: [
                  {
                    title: 'Braze Dev',
                    key: 'feed-1-1',
                    value: 'feed-1-1',
                  },
                  {
                    title: 'Braze Prod',
                    key: 'feed-1-2',
                    value: 'feed-1-2',
                  },
                ],
              },
              {
                title: 'Webhook',
                key: 'feed-2',
                value: 'feed-2',
                children: [
                  {
                    title: 'Webhook test',
                    key: 'feed-2-1',
                    value: 'feed-2-2',
                  },
                ],
              },
            ],
          },
        ]}
      />
    )
  },
}
