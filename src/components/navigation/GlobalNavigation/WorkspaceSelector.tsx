import './workspace-selector.css'
import { Avatar } from 'src/components'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'
import { type INavigationListProps } from 'src/components/navigation/GlobalNavigation/NavigationList'
import { type INavigationOrg } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'
import { type WorkspaceSelectorMapping } from 'src/components/navigation/GlobalNavigation/WorkspaceSelectorItems'

export interface IWorkspaceSelectorProps {
  orgs: INavigationOrg[]
}

export function WorkspaceSelector(props: IWorkspaceSelectorProps) {
  const children: INavigationListProps['items'][0]['children'] = props.orgs.reduce<WorkspaceSelectorMapping[]>(
    (total, org) => {
      total.push({ type: 'org', className: 'workspaceSelector__orgName', label: org.name, id: org.id })

      org.accounts.forEach(account => {
        total.push({
          type: 'account',
          className: 'workspaceSelector__accountName',
          label: account.name,
          id: account.id,
        })

        account.workspaces.forEach(workspace => {
          total.push({
            type: 'workspace',
            className: 'workspaceSelector__workspaceName',
            label: workspace.name,
            id: workspace.id,
          })
        })
      })

      return total
    },
    [],
  )

  return (
    <NavigationList
      items={[
        {
          label: 'Account',
          hideLabel: true,
          icon: <Avatar>WS</Avatar>,
          type: 'menu',
          children,
        },
      ]}
    />
  )
}