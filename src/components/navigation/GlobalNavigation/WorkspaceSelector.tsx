import './workspace-selector.css'
import { Avatar } from 'src/components'
import { Input } from 'src/components'
import { Menu } from 'src/components'
import { type IMenuProps } from 'src/components'
import { Result } from 'src/components'
import { Center } from 'src/components'
import { type INavigationOrg } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type IWorkspaceSelectorMapping } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type INavigationAccount } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type INavigationWorkspace } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type MenuItemType } from 'src/components/navigation/Menu/Menu'
import { useState } from 'react'
import { useMemo } from 'react'

export interface IWorkspaceSelectorProps {
  orgs: INavigationOrg[]
}

export function WorkspaceSelector(props: IWorkspaceSelectorProps) {
  const allItemsFlat = useMemo(generateAllItems, [props.orgs]) // todo: will useMemo work when the active ws changes??

  const [children, setChildren] = useState<IWorkspaceSelectorMapping[]>(allItemsFlat)
  const [searchTerm, setSearchTerm] = useState<string>('')

  // todo: use ref here, because we dont expect this to change
  const searchEl: MenuItemType = {
    key: 'search',
    className: 'workspaceSelector__search',
    label: (
      <Input
        placeholder="Search"
        className="workspaceSelector__searchInput"
        onChange={onSearch}
        value={searchTerm}
        onClick={e => {
          e.preventDefault()
          e.stopPropagation()
        }}
      />
    ),
  }

  const noResultsEl: MenuItemType = {
    key: 'no-results',
    className: 'workspaceSelector__noResults',
    label: (
      <Center>
        <Result status="info" title="No results found" />
      </Center>
    ),
  }

  const hasNoResults = !!searchTerm && !children.length

  const items: IMenuProps['items'] = [
    {
      key: 'WorkspaceSelector',
      icon: <Avatar className="workspaceSelector__avatar">WS</Avatar>,
      popupClassName: 'workspaceSelector',
      children: [searchEl, ...(hasNoResults ? [noResultsEl] : children)],
    },
  ]

  /* todo: scroll to selected ws */
  /* see indicative rFancyDropdown.tsx:277 for a similar implementation. make it a service/util? */

  return (
    <Menu
      // openKeys={['WorkspaceSelector']} // testing only
      className="globalNavigation__menu globalNavigation__item globalNavigation__item--workspaceSelector"
      items={items}
      onOpenChange={clearSearch}
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
    const newSearchTerm = e.target.value.toLowerCase()
    setSearchTerm(newSearchTerm)

    const filteredChildren = allItemsFlat?.filter(item => {
      /* eslint-disable-next-line */
      return isHit(item) || item.accounts?.some(isHit) || item.workspaces?.some(isHit)

      function isHit(item: IWorkspaceSelectorMapping | INavigationAccount | INavigationWorkspace): boolean {
        return (
          item.label.toString().toLowerCase().includes(newSearchTerm) ||
          item.id.toString().toLowerCase().includes(newSearchTerm)
        )
      }
    })

    setChildren(filteredChildren)
  }

  function clearSearch(): void {
    setSearchTerm('')
    setChildren(allItemsFlat)
  }
}