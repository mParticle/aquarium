import { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { Menu, type IMenuProps } from 'src/components/navigation/Menu/Menu'
import { ExampleStory } from 'src/utils/ExampleStory'
import MpLogo from 'src/assets/mpLogo.svg?react'

import { type MenuProps } from 'antd'
import { Button } from 'src/components'

const items: IMenuProps['items'] = [
  {
    label: 'Navigation One',
    key: 'mail',
  },
  {
    label: 'Navigation Two',
    key: 'app',
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    label: 'Navigation Four - Link',
    key: 'alipay',
  },
]

const meta: Meta<typeof Menu> = {
  title: 'Aquarium/Navigation/Menu',
  component: props => (
    <>
      {' '}
      <Menu {...props}> {props.children} </Menu>
    </>
  ),

  args: {
    children: <>Button</>,
    items,
    defaultOpenKeys: [],
    defaultSelectedKeys: [],
    expandIcon: undefined,
    forceSubMenuRender: false,
    inlineCollapsed: false,
    inlineIndent: 24,
    mode: 'vertical',
    multiple: false,
    // openKeys: [],
    overflowedIndicator: <>...</>,
    selectable: true,
    selectedKeys: ['mail'],
    style: undefined,
    subMenuCloseDelay: 0.1,
    subMenuOpenDelay: 0,
    theme: 'light',
    triggerSubMenuAction: 'hover',
    onClick: ({ item, key, keyPath, domEvent }) => {
      alert(`Clicked on ${String(item)}`)
    },
    onDeselect: ({ item, key, keyPath, selectedKeys, domEvent }) => {
      alert(`Deselected ${String(item)}`)
    },
    onOpenChange: (openKeys: string[]) => {
      console.log(`Opened or Closed Sub-menus: ${openKeys.join(', ')}`)
    },
    onSelect: ({ item, key, keyPath, selectedKeys, domEvent }) => {
      alert(`Selected ${String(item)}`)
    },
  },

  argTypes: {
    mode: {
      control: 'select',
      options: ['vertical', 'horizontal', 'inline'],
    },
    theme: {
      control: 'select',
      options: ['light', 'dark'],
    },
    triggerSubMenuAction: {
      control: 'select',
      options: ['hover', 'click'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Menu>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {}

export const Inline: Story = {
  args: {
    mode: 'inline',
  },
}

export const Horizontal: Story = {
  args: {
    mode: 'horizontal',
  },
}

export const MultipleSelection: Story = {
  args: {
    multiple: true,
  },
}

export const CustomExpandIcon: Story = {
  args: {
    expandIcon: props => <MpLogo/>,
  },
}

export const InlineCollapsedState: Story = {
  args: {
    inlineCollapsed: true,
  },
}

export const Dark: Story = {
  args: {
    theme: 'dark',
  },
}

export const CustomStyle: Story = {
  args: {
    style: { backgroundColor: '#f0f0f0' },
  },
}

export const WithSubMenuDelay: Story = {
  args: {
    subMenuOpenDelay: 0.2,
    subMenuCloseDelay: 0.2,
  },
}

export const ExampleHorizontalTop: Story = {
  render: () => {
    const [current, setCurrent] = useState('mail')
    const onClick: IMenuProps['onClick'] = e => {
      console.log('clicked: ', e)
      setCurrent(e.key)
    }

    return (
      <>
        <ExampleStory title="Horizontal top navigation menu">
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </ExampleStory>
      </>
    )
  },
}

export const ExampleVerticalInline: Story = {
  render: () => {
    const items: IMenuProps['items'] = [
      {
        label: 'Navigation One',
        key: 'sub1',
        icon: <MpLogo/>,
        children: [
          {
            label: 'Item 1',
            key: 'g1',
            children: [
              { label: 'Option 1', key: '1' },
              { label: 'Option 2', key: '2' },
            ],
            type: 'group',
          },
          {
            label: 'Item 2',
            key: 'g2',
            children: [
              { label: 'Option 3', key: '3' },
              { label: 'Option 4', key: '4' },
            ],
            type: 'group',
          },
        ],
      },
      {
        label: 'Navigation Two',
        key: 'sub2',
        icon: <MpLogo/>,
        children: [
          { label: 'Option 5', key: '5' },
          { label: 'Option 6', key: '6' },
          {
            label: 'Submenu',
            key: 'sub3',
            icon: null,
            children: [
              { label: 'Option 7', key: '7' },
              { label: 'Option 8', key: '8' },
            ],
          },
        ],
      },
      { type: 'divider' },
      {
        label: 'Navigation Three',
        key: 'sub4',
        icon: <MpLogo/>,
        children: [
          { label: 'Option 9', key: '9' },
          { label: 'Option 10', key: '10' },
          { label: 'Option 11', key: '11' },
          { label: 'Option 12', key: '12' },
        ],
      },
      {
        label: 'Group',
        key: 'grp',
        children: [
          { label: 'Option 13', key: '13' },
          { label: 'Option 14', key: '14' },
        ],
        type: 'group',
      },
    ]

    return (
      <>
        <ExampleStory title="Vertical menu with inline submenus">
          <Menu
            onClick={e => {
              console.log('click ', e)
            }}
            style={{ width: 256 }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
          />
        </ExampleStory>
      </>
    )
  },
}

export const ExampleCollapsable: Story = {
  render: () => {
    const items: MenuProps['items'] = [
      { label: 'Option 1', key: '1', icon: <MpLogo/> },
      { label: 'Option 2', key: '2', icon: <MpLogo/> },
      { label: 'Option 3', key: '3', icon: <MpLogo/> },
      {
        label: 'Navigation One',
        key: 'sub1',
        icon: <MpLogo/>,
        children: [
          { label: 'Option 5', key: '5' },
          { label: 'Option 6', key: '6' },
          { label: 'Option 7', key: '7' },
          { label: 'Option 8', key: '8' },
        ],
      },
      {
        label: 'Navigation Two',
        key: 'sub2',
        icon: <MpLogo/>,
        children: [
          { label: 'Option 9', key: '9' },
          { label: 'Option 10', key: '10' },
          {
            label: 'Submenu',
            key: 'sub3',
            icon: null,
            children: [
              { label: 'Option 11', key: '11' },
              { label: 'Option 12', key: '12' },
            ],
          },
        ],
      },
    ]
    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => {
      setCollapsed(!collapsed)
    }

    return (
      <>
        <ExampleStory
          title={
            <>
              Inline menu could be collapsed. Here is a{' '}
              <a
                href="https://ant.design/components/layout#components-layout-demo-side"
                target="_blank"
                rel="noreferrer"
              >
                complete demo
              </a>{' '}
              with sider layout{' '}
            </>
          }
        >
          <div style={{ width: 256 }}>
            <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
              {collapsed ? <MpLogo/> : <MpLogo/>}
            </Button>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              theme="dark"
              inlineCollapsed={collapsed}
              items={items}
            />
          </div>
        </ExampleStory>
      </>
    )
  },
}

export const ExampleOpenCurrentSubmenu: Story = {
  render: () => {
    const items: IMenuProps['items'] = [
      {
        label: 'Navigation One',
        key: 'sub1',
        icon: <MpLogo/>,
        children: [
          { label: 'Option 1', key: '1' },
          { label: 'Option 2', key: '2' },
          { label: 'Option 3', key: '3' },
          { label: 'Option 4', key: '4' },
        ],
      },
      {
        label: 'Navigation Two',
        key: 'sub2',
        icon: <MpLogo/>,
        children: [
          { label: 'Option 5', key: '5' },
          { label: 'Option 6', key: '6' },
          {
            label: 'Submenu',
            key: 'sub3',
            icon: null,
            children: [
              { label: 'Option 7', key: '7' },
              { label: 'Option 8', key: '8' },
            ],
          },
        ],
      },
      {
        label: 'Navigation Three',
        key: 'sub4',
        icon: <MpLogo/>,
        children: [
          { label: 'Option 9', key: '9' },
          { label: 'Option 10', key: '10' },
          { label: 'Option 11', key: '11' },
          { label: 'Option 12', key: '12' },
        ],
      },
    ]

    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']
    const [openKeys, setOpenKeys] = useState(['sub1'])
    const onOpenChange: MenuProps['onOpenChange'] = keys => {
      const latestOpenKey = keys.find(key => !openKeys.includes(key))
      if (latestOpenKey && !rootSubmenuKeys.includes(latestOpenKey)) {
        setOpenKeys(keys)
      } else {
        setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
      }
    }

    return (
      <>
        <ExampleStory title="Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact">
          <Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} style={{ width: 256 }} items={items} />
        </ExampleStory>
      </>
    )
  },
}

export const ExampleVerticalMenu: Story = {
  render: () => {
    const items: IMenuProps['items'] = [
      {
        label: 'Navigation One',
        key: 'sub1',
        icon: <MpLogo/>,
        children: [
          {
            label: 'Item 1',
            key: 'Item 1 Key',
            children: [
              { label: 'Option 1', key: '1' },
              { label: 'Option 2', key: '2' },
            ],
            type: 'group',
          },
          {
            label: 'Item 2',
            key: 'Item 2 Key',
            children: [
              { label: 'Option 3', key: '3' },
              { label: 'Option 4', key: '4' },
            ],
            type: 'group',
          },
        ],
      },
      {
        label: 'Navigation Two',
        key: 'sub2',
        icon: <MpLogo/>,
        children: [
          { label: 'Option 5', key: '5' },
          { label: 'Option 6', key: '6' },
          {
            label: 'Submenu',
            key: 'sub3',
            children: [
              { label: 'Option 7', key: '7' },
              { label: 'Option 8', key: '8' },
            ],
          },
        ],
      },
      {
        label: 'Navigation Three',
        key: 'sub4',
        icon: <MpLogo/>,
        children: [
          { label: 'Option 9', key: '9' },
          { label: 'Option 10', key: '10' },
          { label: 'Option 11', key: '11' },
          { label: 'Option 12', key: '12' },
        ],
      },
    ]

    return (
      <>
        <ExampleStory title="Submenus open as pop-ups">
          <Menu
            onClick={e => {
              console.log('click', e)
            }}
            style={{ width: 256 }}
            mode="vertical"
            items={items}
          />
        </ExampleStory>
      </>
    )
  },
}