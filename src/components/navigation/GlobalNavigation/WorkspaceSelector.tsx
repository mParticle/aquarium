import './workspace-selector.css'
import { Avatar } from 'src/components'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'
import { type INavigationListProps } from 'src/components/navigation/GlobalNavigation/NavigationList'

export interface INavigationOrg {
  name: string
  id: string
  accounts: INavigationAccount[]
}

export interface INavigationAccount {
  name: string
  id: string
  workspaces: INavigationWorkspace[]
}

export interface INavigationWorkspace {
  name: string
  id: string
}

export interface IWorkspaceSelectorProps {
  orgs: INavigationOrg[]
}

interface SelectorMappingType {
  type: 'org' | 'account' | 'workspace'
  name: string
  id: string
}

export function WorkspaceSelector(props: IWorkspaceSelectorProps) {
  const flatList = props.orgs.reduce<SelectorMappingType[]>((total, org) => {
    total.push({ type: 'org', ...org })

    org.accounts.forEach(account => {
      total.push({ type: 'account', ...account })
      account.workspaces.forEach(workspace => {
        total.push({ type: 'workspace', ...workspace })
      })
    })

    return total
  }, [])

  debugger

  const children: INavigationListProps['items'][0]['children'] = flatList.map(item => {
    const className = `workspaceSelector__${item.type}Name`
    return {
      label: item.name,
      className,
    }
  })
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