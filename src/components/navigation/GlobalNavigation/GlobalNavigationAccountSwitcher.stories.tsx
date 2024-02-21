import { type Meta } from '@storybook/react'
import { type StoryObj } from '@storybook/react'
import { GlobalNavigation, ITreeData } from 'src/components'
import { type IGlobalNavigationLogo } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IGlobalNavigationManagement } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { type IGlobalNavigationTool } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import MpLogo from 'src/assets/mpLogo.svg?react'

const singleLevelOrg: ITreeData[] = [
  {
    key: 'org1',
    title: 'Org 1',
  },
  {
    key: 'org2',
    title: 'Org 2',
  },
]

const doubleLevelOrg: ITreeData[] = [
  {
    key: 'org1',
    title: 'Org 1',
    children: [
      {
        key: 'account1-1',
        title: 'Account 1-1',
      },
      {
        key: 'account1-2',
        title: 'Account 1-2',
      },
    ],
  },
  {
    key: 'org2',
    title: 'Org 2',
    children: [
      {
        key: 'account2-1',
        title: 'Account 2-1',
      },
      {
        key: 'account2-2',
        title: 'Account 2-2',
      },
    ],
  },
]

const threeLevelOrgs: ITreeData[] = [
  {
    key: 'org1',
    title: 'Org 1',
    children: [
      {
        key: 'account1-1',
        title: 'Account 1-1',
        children: [
          {
            key: 'ws1-1-1',
            title: 'Workspace 1-1-1',
          },
          {
            key: 'ws1-1-3',
            title: 'Workspace 1-1-3',
          },
        ],
      },
      {
        key: 'account1-2',
        title: 'Account 1-2',
        children: [
          {
            key: 'ws1-2-1',
            title: 'Workspace 1-2-1',
          },
          {
            key: 'ws1-2-2',
            title: 'Workspace 1-2-2',
          },
        ],
      },
    ],
  },
  {
    key: 'org2',
    title: 'Org 2',
    children: [
      {
        key: 'account2-1',
        title: 'Account 1-1',
        children: [
          {
            key: 'ws2-1-1',
            title: 'Workspace 2-1-1',
          },
          {
            key: 'ws2-1-2',
            title: 'Workspace 2-1-2',
          },
        ],
      },
      {
        key: 'account2-2',
        title: 'Account 2-2',
        children: [
          {
            key: 'ws2-2-1',
            title: 'Workspace 2-2-1',
          },
          {
            key: 'ws2-2-2',
            title: 'Workspace 2-2-2',
          },
        ],
      },
    ],
  },
  {
    key: 'org3',
    title: 'Org 3',
    children: [
      {
        key: 'account3-1',
        title: 'Account 3-1',
        children: [
          {
            key: 'ws3-1-1',
            title: 'Workspace 3-1-1',
          },
          {
            key: 'ws3-1-2',
            title: 'Workspace 3-1-2',
          },
        ],
      },
      {
        key: 'account3-2',
        title: 'Account 3-2',
        children: [
          {
            key: 'ws3-2-1',
            title: 'Workspace 3-2-1',
          },
          {
            key: 'ws3-2-2',
            title: 'Workspace 3-2-2',
          },
        ],
      },
    ],
  },
]

const logo: IGlobalNavigationLogo = {
  label: 'Predictions',
  icon: <MpLogo />,
}
const tools: IGlobalNavigationTool[] = [
  {
    label: 'Pipelines',
    icon: <MpLogo />,
    type: 'link',
  },
  {
    label: 'Projects',
    icon: <MpLogo />,
    type: 'link',
    isActive: true,
  },
  {
    label: 'Data',
    icon: <MpLogo />,
    type: 'link',
  },
  {
    label: 'API',
    icon: <MpLogo />,
    type: 'link',
  },
  {
    label: 'Insights',
    icon: <MpLogo />,
    type: 'link',
  },
]
const management: IGlobalNavigationManagement[] = [
  {
    label: 'Support',
    hideLabel: true,
    icon: <MpLogo />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
  },
  {
    label: 'Settings',
    hideLabel: true,
    icon: <MpLogo />,
    type: 'menu',
    children: [{ label: 'option 1' }, { label: 'option 2' }, { label: 'option 3' }],
  },
]

const meta: Meta<typeof GlobalNavigation> = {
  title: 'Aquarium/Navigation/GlobalNavigationAccountSwitcher',
  component: props => <GlobalNavigation {...props}></GlobalNavigation>,

  args: {
    logo,
    tools,
    management,
    accountSwitcher: singleLevelOrg,
  },
}
export default meta

type Story = StoryObj<typeof GlobalNavigation>

export const Primary: Story = {}

export const DoubleLevelAccountSwitcherStory: Story = {
  args: {
    accountSwitcher: doubleLevelOrg,
  },
}

export const ThreeLevelsAccountSwitcherStory: Story = {
  args: {
    accountSwitcher: threeLevelOrgs,
  },
}
