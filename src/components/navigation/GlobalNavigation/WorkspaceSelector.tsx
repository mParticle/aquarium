import './workspace-selector.css'
import { Avatar } from 'src/components'
import { Input } from 'src/components'
import { Menu } from 'src/components'
import { type IMenuProps } from 'src/components'
import { type INavigationOrg } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type IWorkspaceSelectorMapping } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type INavigationAccount } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type INavigationWorkspace } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { useState } from 'react'
import { useMemo } from 'react'
import { type MenuItemType } from 'src/components/navigation/Menu/Menu'

export interface IWorkspaceSelectorProps {
  orgs: INavigationOrg[]
}

export function WorkspaceSelector(props: IWorkspaceSelectorProps) {
  const allItemsFlat = useMemo(generateAllItems, [props.orgs]) // todo: will useMemo work when the active ws changes??

  const [children, setChildren] = useState<IWorkspaceSelectorMapping[]>(allItemsFlat)

  // todo: use ref here, because we dont expect this to change
  const searchEl: MenuItemType = {
    key: 'search',
    className: 'workspaceSelector__search',
    label: (
      <Input
        placeholder="Search"
        className="workspaceSelector__searchInput"
        onChange={onSearch}
        onClick={e => {
          e.preventDefault()
          e.stopPropagation()
        }}
      />
    ),
  }

  const items: IMenuProps['items'] = [
    {
      key: 'WorkspaceSelector',
      icon: <Avatar className="workspaceSelector__avatar">WS</Avatar>,
      children: [searchEl, ...children],
    },
  ]

  /* todo: scroll to selected ws */

  return (
    <Menu
      openKeys={['WorkspaceSelector']} // testing only
      className="globalNavigation__menu globalNavigation__item"
      items={items}
      expandIcon={null}
    />
  )

  function generateAllItems(): IWorkspaceSelectorMapping[] {
    return props.orgs.reduce<IWorkspaceSelectorMapping[]>((total, org) => {
      total.push({
        type: 'org',
        className: 'workspaceSelector__orgName',
        label: org.label,
        id: org.id,
        key: org.id,
        accounts: org.accounts,
        workspaces: org.accounts.flatMap(account => account.workspaces),
      })

      org.accounts.forEach(account => {
        const className =
          'workspaceSelector__accountName' + (account.label ? '' : ' workspaceSelector__accountName--hidden')
        total.push({
          type: 'account',
          className,
          label: account.label,
          id: account.id,
          key: account.id,
          workspaces: account.workspaces,
        })

        account.workspaces.forEach(workspace => {
          total.push({
            type: 'workspace',
            className:
              'workspaceSelector__workspaceName' +
              (workspace.isActive ? ' workspaceSelector__workspaceName--active' : ''),
            label: workspace.label,
            id: workspace.id,
            key: workspace.id,
            onClick: workspace.onClick,
          })
        })
      })

      return total
    }, [])
  }

  function onSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    const searchTerm = e.target.value.toLowerCase()

    const filteredChildren = allItemsFlat?.filter(item => {
      /* eslint-disable-next-line */
      return isHit(item) || item.accounts?.some(isHit) || item.workspaces?.some(isHit)

      function isHit(item: IWorkspaceSelectorMapping | INavigationAccount | INavigationWorkspace): boolean {
        return (
          item.label.toString().toLowerCase().includes(searchTerm) ||
          item.id.toString().toLowerCase().includes(searchTerm)
        )
      }
    })

    setChildren(filteredChildren)
  }
}