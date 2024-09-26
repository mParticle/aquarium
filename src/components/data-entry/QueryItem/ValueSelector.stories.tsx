import { type Meta, type StoryObj } from '@storybook/react'
import type ValueSelector from './ValueSelector'
import { Suspense, lazy } from 'react'

const _ValueSelector = lazy(async () => await import('./ValueSelector'))

const meta: Meta<typeof ValueSelector> = {
  title: 'Components/Data Entry/QueryItem/ValueSelector',
  component: _ValueSelector,
  parameters: {
    docs: {
      description: {
        component:
          'DO NOT USE THIS OR YOU WILL BE FIRED! This is a parent component of this component group, and is not supposed to be used on its own.',
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
