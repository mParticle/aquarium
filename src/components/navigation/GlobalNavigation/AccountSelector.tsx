import 'src/utils/utils.css'
import './account-selector.css'
import { useMemo, useState } from 'react'
import { Avatar, Button, Center, Input, ITreeData, type MenuItemType, Result, Tree } from 'src/components'
import { Menu } from 'src/components'
import { type IMenuProps } from 'src/components'
import { getInitials } from 'src/utils/utils'
import Search from 'antd/es/input/Search'
import * as React from 'react'

type TreeItem = {
  title: string
  key: string
  active: boolean
}
export interface IWorkspaceSelectorProps {
  treeData: ITreeData[]
  onClick: (item: TreeItem, event: React.MouseEvent<HTMLElement>) => void
  // activeLevel: string
  signoutOptions?: {
    label?: string
    onSignout: () => void
  }
}

const getParentKey = (key: React.Key, tree: ITreeData[]): React.Key => {
  console.log('getParentKey from:', key)
  let parentKey: React.Key
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i]
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children)
      }
    }
  }
  return parentKey!
}

export function AccountSelector(props: IWorkspaceSelectorProps) {
  const [searchValue, setSearchValue] = useState('')

  const searchableData = useMemo((): { key: React.Key; title: string }[] => {
    console.log('Generating searchableData from the original tree: ', props.treeData)
    const list: { key: React.Key; title: string }[] = []
    const generateList = (data: ITreeData[]) => {
      for (let i = 0; i < data.length; i++) {
        const node = data[i]
        const { key } = node
        list.push({ key, title: key as string })
        if (node.children) {
          generateList(node.children)
        }
      }
    }

    generateList(props.treeData)

    console.log('Searchable data generated:', list)
    return list
  }, [props.treeData])

  const [currentShownKeys, setCurrentShownKeys] = useState<Set<React.Key>>(
    new Set([...searchableData.map(el => el.key)]),
  )

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    console.log('Search is changing. We need to update current tree to match it', value)

    const mapped = searchableData.map(item => {
      if (item.title.indexOf(value) > -1 || String(item.key).indexOf(value) > -1) {
        return getParentKey(item.key, props.treeData)
      }
      return null
    })

    console.log('Mapped keys from the original based on search:', mapped)
    const currentShownKeys = new Set([
      ...mapped.filter((item, i, self): item is React.Key => !!(item && self.indexOf(item) === i)),
    ])
    console.log('keys we should keep in the tree:', currentShownKeys)

    setCurrentShownKeys(currentShownKeys)
    setSearchValue(value)
  }

  const treeData = useMemo(() => {
    console.log('currentShownKeys has changed, we need to recalculate treeData', currentShownKeys)
    const loop = (data: ITreeData[]): ITreeData[] =>
      data
        .filter(item => {
          if (!item.children) {
            return true
          }

          return currentShownKeys.has(item.key)
        })
        .map(item => {
          if (item.children) {
            return { title: item.title, key: item.key, disabled: true, children: loop(item.children) }
          }

          return {
            title: item.title,
            key: item.key,
          }
        })

    return loop(props.treeData)
  }, [currentShownKeys])

  const signoutButton: MenuItemType = {
    key: 'signout',
    className: 'accountSelector__signout',
    label: (
      <Button
        className="workspaceSelector__signoutButton"
        type="primary"
        onClick={e => {
          props.signoutOptions?.onSignout()
        }}
      >
        {props.signoutOptions?.label ?? 'Sign Out of mParticle'}
      </Button>
    ),
  }

  // let activeWorkspace: string
  // defaultTreeData.find(org => {
  //   return org.children?.find(account => {
  //     return account.children?.find(workspace => {
  //       if (workspace.title === props.activeLevel) {
  //         activeWorkspace = String(workspace.title)
  //         return true
  //       }
  //     })
  //   })
  // })

  const searchInput: MenuItemType = {
    key: 'search',
    className: 'workspaceSelector__search',
    label: (
      <Input
        placeholder="Search"
        className="workspaceSelector__searchInput"
        onChange={onChange}
        value={searchValue}
        onClick={e => {
          e.preventDefault()
          e.stopPropagation()
        }}
      />
    ),
  }

  const items: IMenuProps['items'] = [
    {
      key: 'AccountSelector',
      // icon: <Avatar className="accountSelector__avatar">{getInitials(activeWorkspace?.label)}</Avatar>,
      icon: <Avatar className="accountSelector__avatar">WS</Avatar>,
      popupClassName: 'accountSelector',
      children: [
        searchInput,
        {
          key: 'SearchableTree',
          className: 'accountSelector__content',
          label: (
            <>
              {treeData.length === 0 && (
                <Center>
                  <Result className="accountSelector__noResults" status="info" title="No results found" />
                </Center>
              )}
              <Tree
                defaultExpandAll
                treeData={treeData}
                className="accountSelector__searchableTree"
                switcherIcon={false}
                onClick={(evt, { title, key, active }) =>
                  props.onClick(
                    {
                      title: String(title),
                      key: String(key),
                      active,
                    },
                    evt,
                  )
                }
              />
            </>
          ),
        },
        props.signoutOptions ? signoutButton : null,
      ],
    },
  ]

  return (
    <Menu
      className="globalNavigation__menu globalNavigation__item globalNavigation__item--accountSelector"
      items={items}
      expandIcon={null}
      openKeys={['AccountSelector']}
    />
  )
}