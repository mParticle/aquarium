import './workspace-selector.css'
import { Avatar } from 'src/components'
import { Input } from 'src/components'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'
import { type INavigationOrg } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type WorkspaceSelectorMapping } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type INavigationAccount } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type INavigationWorkspace } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { useState } from 'react'

export interface IWorkspaceSelectorProps {
  orgs: INavigationOrg[]
}

export function WorkspaceSelector(props: IWorkspaceSelectorProps) {
  const allItemsFlat = generateAllItems()
  const [children, setChildren] = useState<WorkspaceSelectorMapping[]>(allItemsFlat)

  const searchEl = { label: <Input placeholder="Search" allowClear onChange={onSearch} /> }

  return (
    <NavigationList
      items={[
        {
          label: 'Account',
          hideLabel: true,
          icon: <Avatar>WS</Avatar>,
          type: 'menu',
          children: [searchEl, ...children],
        },
      ]}
    />
  )

  function generateAllItems(): WorkspaceSelectorMapping[] {
    return props.orgs.reduce<WorkspaceSelectorMapping[]>((total, org) => {
      total.push({
        type: 'org',
        className: 'workspaceSelector__orgName',
        label: org.label,
        id: org.id,
        accounts: org.accounts,
        workspaces: org.accounts.flatMap(account => account.workspaces),
      })

      org.accounts.forEach(account => {
        total.push({
          type: 'account',
          className: 'workspaceSelector__accountName',
          label: account.label,
          id: account.id,
          workspaces: account.workspaces,
        })

        account.workspaces.forEach(workspace => {
          total.push({
            type: 'workspace',
            className: 'workspaceSelector__workspaceName',
            label: workspace.label,
            id: workspace.id,
          })
        })
      })

      return total
    }, [])
  }

  function onSearch(e: React.ChangeEvent<HTMLInputElement>): void {
    const searchTerm = e.target.value.toLowerCase()

    const filteredChildren = allItemsFlat?.filter(item => {
      return isHit(item) || item.accounts?.some(isHit) || item.workspaces?.some(isHit)

      function isHit(item: WorkspaceSelectorMapping | INavigationAccount | INavigationWorkspace): boolean {
        return (
          item.label.toString().toLowerCase().includes(searchTerm) ||
          item.id.toString().toLowerCase().includes(searchTerm)
        )
      }
    })

    setChildren(filteredChildren)
  }
}