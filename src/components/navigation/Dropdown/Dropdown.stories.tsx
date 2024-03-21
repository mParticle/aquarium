import { type ReactNode } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'
import { SmileOutlined } from '@ant-design/icons'
import { Button } from 'src/components/general/Button/Button'
import { Dropdown, type IDropdownProps } from 'src/components/navigation/Dropdown/Dropdown'
import { ExampleStory } from 'src/utils/ExampleStory'
import { Tooltip, type IMenuProps } from 'src/components'
import { Space } from 'src/components'
import { AlicornIcon } from 'src/components'
import { cloneElement } from 'react'
import { theme } from 'antd'
import { type MenuProps } from 'antd'
import { Divider } from 'src/components'
import { useState } from 'react'
import { Link } from 'src/components/general/Typography/Typography'
import { UsersIcon } from 'src/components'
import { Center } from 'src/components'

const menu: IDropdownProps['menu'] = {
  items: [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.google.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: true,
    },
    {
      key: '4',
      danger: true,
      label: 'a danger item',
    },
  ],
} as const

const meta: Meta<typeof Dropdown> = {
  title: 'Aquarium/Navigation/Dropdown',
  component: Dropdown,

  args: {
    children: 'normal',
    menu,

    arrow: false,
    autoAdjustOverflow: true,
    autoFocus: false,
    disabled: false,
    destroyPopupOnHide: false,
    dropdownRender: undefined,
    overlayClassName: undefined,
    overlayStyle: undefined,
    placement: 'bottomLeft',
    trigger: ['hover'],
  },

  argTypes: {
    children: {
      options: ['normal'],

      mapping: {
        normal: <Button>Dropdown Copy</Button>,
      },
    },
    placement: {
      control: 'select',
      options: ['bottom', 'bottomLeft', 'bottomRight', 'top', 'topLeft', 'topRight'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Dropdown>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {}

export const WithArrow: Story = {
  args: {
    arrow: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const CustomDropdownRender: Story = {
  args: {
    dropdownRender: (menus: ReactNode) => {
      // Customize dropdown content as needed
      return <div> Custom Components Go Here</div>
    },
  },
}

export const AutoAdjustOverflow: Story = {
  args: {
    autoAdjustOverflow: false,
  },
}

export const DestroyPopupOnHide: Story = {
  args: {
    destroyPopupOnHide: true,
  },
}

export const WithOverlayStyle: Story = {
  args: {
    overlayStyle: { color: 'red' },
  },
}

export const CustomPlacement: Story = {
  args: {
    placement: 'topRight',
  },
}

export const TriggerClick: Story = {
  args: {
    trigger: ['click'],
  },
}

export const OpenDropdown: Story = {
  args: {
    open: true,
  },
}

export const OnOpenChangeCallback: Story = {
  args: {
    onOpenChange: (open: boolean, info: { source: 'trigger' | 'menu' }) => {
      alert('Dropdown Open: ' + open)
    },
  },
}

export const ExampleBasic: Story = {
  render: () => {
    const items: IMenuProps['items'] = [
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: '4',
        danger: true,
        label: 'a danger item',
      },
    ]
    return (
      <ExampleStory title="The most basic dropdown menu.">
        <Dropdown menu={{ items }}>
          <a
            onClick={e => {
              e.preventDefault()
            }}>
            <Space>
              Hover me
              <AlicornIcon />
            </Space>
          </a>
        </Dropdown>
      </ExampleStory>
    )
  },
}

export const ExamplePlacement: Story = {
  render: () => {
    const items: IMenuProps['items'] = [
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        ),
      },
    ]
    return (
      <ExampleStory title="Support 6 placements.">
        <Space direction="vertical">
          <Space wrap>
            <Dropdown menu={{ items }} placement="bottomLeft">
              <Button>bottomLeft</Button>
            </Dropdown>
            <Dropdown menu={{ items }} placement="bottom">
              <Button>bottom</Button>
            </Dropdown>
            <Dropdown menu={{ items }} placement="bottomRight">
              <Button>bottomRight</Button>
            </Dropdown>
          </Space>
          <Space wrap>
            <Dropdown menu={{ items }} placement="topLeft">
              <Button>topLeft</Button>
            </Dropdown>
            <Dropdown menu={{ items }} placement="top">
              <Button>top</Button>
            </Dropdown>
            <Dropdown menu={{ items }} placement="topRight">
              <Button>topRight</Button>
            </Dropdown>
          </Space>
        </Space>
      </ExampleStory>
    )
  },
}

export const ExampleArrow: Story = {
  render: () => {
    const items: IMenuProps['items'] = [
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        ),
      },
    ]
    return (
      <ExampleStory title="You could display an arrow.">
        <Dropdown menu={{ items }} placement="bottomLeft" arrow>
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="bottom" arrow>
          <Button>bottom</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="bottomRight" arrow>
          <Button>bottomRight</Button>
        </Dropdown>
        <br />
        <Dropdown menu={{ items }} placement="topLeft" arrow>
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="top" arrow>
          <Button>top</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="topRight" arrow>
          <Button>topRight</Button>
        </Dropdown>
      </ExampleStory>
    )
  },
}

export const ExampleArrowCenter: Story = {
  render: () => {
    const items: IMenuProps['items'] = [
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item
          </a>
        ),
      },
    ]
    return (
      <ExampleStory title="By specifying arrow prop with { pointAtCenter: true }, the arrow will point to the center of the target element.">
        <Dropdown menu={{ items }} placement="bottomLeft" arrow={{ pointAtCenter: true }}>
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }}>
          <Button>bottom</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
          <Button>bottomRight</Button>
        </Dropdown>
        <br />
        <Dropdown menu={{ items }} placement="topLeft" arrow={{ pointAtCenter: true }}>
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="top" arrow={{ pointAtCenter: true }}>
          <Button>top</Button>
        </Dropdown>
        <Dropdown menu={{ items }} placement="topRight" arrow={{ pointAtCenter: true }}>
          <Button>topRight</Button>
        </Dropdown>
      </ExampleStory>
    )
  },
}

export const ExampleClickEvent: Story = {
  render: () => {
    const onClick: IMenuProps['onClick'] = ({ key }) => {
      alert(`Click on item ${key}`)
    }

    const items: IMenuProps['items'] = [
      {
        label: '1st menu item',
        key: '1',
      },
      {
        label: '2nd menu item',
        key: '2',
      },
      {
        label: '3rd menu item',
        key: '3',
      },
    ]
    return (
      <ExampleStory title="An event will be triggered when you click menu items, in which you can make different operations according to item's key.">
        <Dropdown menu={{ items, onClick }}>
          <a
            onClick={e => {
              e.preventDefault()
            }}>
            <Space>
              Hover me, Click menu item
              <AlicornIcon />
            </Space>
          </a>
        </Dropdown>
      </ExampleStory>
    )
  },
}

export const ExampleCustomDropdown: Story = {
  render: () => {
    const { useToken } = theme

    const items: MenuProps['items'] = [
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
      },
    ]
    const { token } = useToken()

    const contentStyle: React.CSSProperties = {
      backgroundColor: token.colorBgElevated,
      borderRadius: token.borderRadiusLG,
      boxShadow: token.boxShadowSecondary,
    }

    const menuStyle: React.CSSProperties = {
      boxShadow: 'none',
    }

    return (
      <ExampleStory title="Customize the dropdown menu via dropdownRender. If you don't need the Menu content, use the Popover component directly.">
        <Dropdown
          menu={{ items }}
          dropdownRender={menu => (
            <div style={contentStyle}>
              {cloneElement(menu as React.ReactElement, { style: menuStyle })}
              <Divider style={{ margin: 0 }} />
              <Space style={{ padding: 8 }}>
                <Button type="primary">Click me!</Button>
              </Space>
            </div>
          )}>
          <a
            onClick={e => {
              e.preventDefault()
            }}>
            <Space>
              Hover me
              <AlicornIcon />
            </Space>
          </a>
        </Dropdown>
      </ExampleStory>
    )
  },
}

export const ExampleClosingMenu: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    const handleMenuClick: MenuProps['onClick'] = e => {
      if (e.key === '3') {
        setOpen(false)
      }
    }

    const handleOpenChange: IDropdownProps['onOpenChange'] = (nextOpen, info) => {
      if (info.source === 'trigger' || nextOpen) {
        setOpen(nextOpen)
      }
    }

    const items: MenuProps['items'] = [
      {
        label: 'Clicking me will not close the menu.',
        key: '1',
      },
      {
        label: 'Clicking me will not close the menu also.',
        key: '2',
      },
      {
        label: 'Clicking me will close the menu.',
        key: '3',
      },
    ]
    return (
      <ExampleStory title="The default is to close the menu when you click on menu items, this feature can be turned off.">
        <Dropdown
          menu={{
            items,
            onClick: handleMenuClick,
          }}
          onOpenChange={handleOpenChange}
          open={open}>
          <a
            onClick={e => {
              e.preventDefault()
            }}>
            <Space>
              Hover me
              <AlicornIcon />
            </Space>
          </a>
        </Dropdown>
      </ExampleStory>
    )
  },
}

export const ExampleLoading: Story = {
  render: () => {
    const items: MenuProps['items'] = [
      {
        label: 'Submit and continue',
        key: '1',
      },
    ]
    const [loadings, setLoadings] = useState<boolean[]>([])

    const enterLoading = (index: number) => {
      setLoadings(state => {
        const newLoadings = [...state]
        newLoadings[index] = true
        return newLoadings
      })

      setTimeout(() => {
        setLoadings(state => {
          const newLoadings = [...state]
          newLoadings[index] = false
          return newLoadings
        })
      }, 2000)
    }

    return (
      <ExampleStory title="A loading indicator can be added to a button by setting the loading property on the Dropdown.Button.">
        <Space direction="vertical">
          <Dropdown.Button type="primary" loading menu={{ items }}>
            Submit
          </Dropdown.Button>
          <Dropdown.Button type="primary" size="small" loading menu={{ items }}>
            Submit
          </Dropdown.Button>
          <Dropdown.Button
            type="primary"
            loading={loadings[0]}
            menu={{ items }}
            onClick={() => {
              enterLoading(0)
            }}>
            Submit
          </Dropdown.Button>
          <Dropdown.Button
            icon={<AlicornIcon />}
            loading={loadings[1]}
            menu={{ items }}
            onClick={() => {
              enterLoading(1)
            }}>
            Submit
          </Dropdown.Button>
        </Space>
      </ExampleStory>
    )
  },
}

export const ExampleSelectable: Story = {
  render: () => {
    const items: MenuProps['items'] = [
      {
        key: '1',
        label: 'Item 1',
      },
      {
        key: '2',
        label: 'Item 2',
      },
      {
        key: '3',
        label: 'Item 3',
      },
    ]
    return (
      <ExampleStory title="Configure the selectable property in menu to enable selectability.">
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: ['3'],
          }}>
          <Link>
            <Space>
              Selectable
              <AlicornIcon />
            </Space>
          </Link>
        </Dropdown>
      </ExampleStory>
    )
  },
}

export const ExampleContextMenu: Story = {
  render: () => {
    const items: MenuProps['items'] = [
      {
        label: '1st menu item',
        key: '1',
      },
      {
        label: '2nd menu item',
        key: '2',
      },
      {
        label: '3rd menu item',
        key: '3',
      },
    ]
    const {
      token: { colorBgLayout, colorTextTertiary },
    } = theme.useToken()

    return (
      <ExampleStory title="The default trigger mode is hover, you can change it to contextMenu. The pop-up menu position will follow the right-click position.">
        <Dropdown menu={{ items }} trigger={['contextMenu']}>
          <div
            style={{
              color: colorTextTertiary,
              background: colorBgLayout,
              height: 200,
              textAlign: 'center',
              lineHeight: '200px',
            }}>
            Right Click on here
          </div>
        </Dropdown>
      </ExampleStory>
    )
  },
}

export const ExampleNested: Story = {
  render: () => {
    const items: MenuProps['items'] = [
      {
        key: '1',
        type: 'group',
        label: 'Group title',
        children: [
          {
            key: '1-1',
            label: '1st menu item',
          },
          {
            key: '1-2',
            label: '2nd menu item',
          },
        ],
      },
      {
        key: '2',
        label: 'sub menu',
        children: [
          {
            key: '2-1',
            label: '3rd menu item',
          },
          {
            key: '2-2',
            label: '4th menu item',
          },
        ],
      },
      {
        key: '3',
        label: 'disabled sub menu',
        disabled: true,
        children: [
          {
            key: '3-1',
            label: '5d menu item',
          },
          {
            key: '3-2',
            label: '6th menu item',
          },
        ],
      },
    ]
    return (
      <ExampleStory title="The menu has multiple levels.">
        <Dropdown menu={{ items }}>
          <a
            onClick={e => {
              e.preventDefault()
            }}>
            <Space>
              Cascading menu
              <AlicornIcon />
            </Space>
          </a>
        </Dropdown>
      </ExampleStory>
    )
  },
}

export const ExampleButtons: Story = {
  render: () => {
    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      alert('Click on left button.')
      console.log('click left button', e)
    }

    const handleMenuClick: MenuProps['onClick'] = e => {
      alert('Click on menu item.')
      console.log('click', e)
    }

    const items: MenuProps['items'] = [
      {
        label: '1st menu item',
        key: '1',
        icon: <UsersIcon />,
      },
      {
        label: '2nd menu item',
        key: '2',
        icon: <UsersIcon />,
      },
      {
        label: '3rd menu item',
        key: '3',
        icon: <UsersIcon />,
        danger: true,
      },
      {
        label: '4rd menu item',
        key: '4',
        icon: <UsersIcon />,
        danger: true,
        disabled: true,
      },
    ]

    const menuProps = {
      items,
      onClick: handleMenuClick,
    }

    return (
      <ExampleStory title="A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.">
        <Space wrap>
          <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
            Dropdown
          </Dropdown.Button>
          <Dropdown.Button menu={menuProps} placement="bottom" icon={<UsersIcon />}>
            Dropdown
          </Dropdown.Button>
          <Dropdown.Button menu={menuProps} onClick={handleButtonClick} disabled>
            Dropdown
          </Dropdown.Button>
          <Dropdown.Button
            menu={menuProps}
            buttonsRender={([leftButton, rightButton]) => [
              <Tooltip title="tooltip" key="leftButton">
                {leftButton}
              </Tooltip>,
              cloneElement(rightButton as React.ReactElement<any, string>, { loading: true }),
            ]}>
            With Tooltip
          </Dropdown.Button>
          <Dropdown menu={menuProps}>
            <Button>
              <Space>
                Button
                <AlicornIcon />
              </Space>
            </Button>
          </Dropdown>
          <Dropdown.Button menu={menuProps} onClick={handleButtonClick} danger>
            Danger
          </Dropdown.Button>
        </Space>
      </ExampleStory>
    )
  },
}

export const ExampleContainerDivider: Story = {
  render: () => {
    const items: MenuProps['items'] = [
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
            1st menu item
          </a>
        ),
        key: '0',
      },
      {
        label: (
          <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
            2nd menu item
          </a>
        ),
        key: '1',
      },
      {
        type: 'divider',
      },
      {
        label: '3rd menu item（disabled）',
        key: '3',
        disabled: true,
      },
    ]
    return (
      <ExampleStory title="Divider and disabled menu item.">
        <Dropdown menu={{ items }}>
          <a
            onClick={e => {
              e.preventDefault()
            }}>
            <Space>
              Hover me
              <AlicornIcon />
            </Space>
          </a>
        </Dropdown>
      </ExampleStory>
    )
  },
}
