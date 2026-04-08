import { type Meta, type StoryObj } from '@storybook/react'
import type ValueSelector from './ValueSelector'
import { Suspense, lazy } from 'react'

const _ValueSelector = lazy(async () => await import('./ValueSelector'))

const meta: Meta<typeof ValueSelector> = {
  title: 'Components/Data Entry/QueryItem/ValueSelector',
  component: _ValueSelector,
  tags: ['deprecated'],
  parameters: {
    docs: {
      description: {
        component:
          '⚠️ **Deprecated** — The QueryItem component group is deprecated and will not receive further updates. Avoid using it in new implementations.',
      },
    },
  },
  decorators: [
    Story => (
      <Suspense>
        <Story />
      </Suspense>
    ),
  ],
  args: {},
}
export default meta

type Story = StoryObj<typeof ValueSelector>

export const DontUseThisOrYouWillBeFired: Story = {}
