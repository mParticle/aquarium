import './workspace-selector.css'
import { Flex } from 'src/components'
import { Avatar } from 'src/components'
import { NavigationList } from 'src/components/navigation/GlobalNavigation/NavigationList'

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

export function WorkspaceSelector(props: IWorkspaceSelectorProps) {
  const container = (
    <Flex vertical>
      {props.orgs.map(org => {
        return (
          <>
            <span className="workspaceSelector__orgName">{org.name}</span>
            {org.accounts.map(account => {
              return (
                <>
                  <span className="workspaceSelector__accountName">{account.name}</span>
                  {account.workspaces.map(workspace => {
                    return (
                      <>
                        <span className="workspaceSelector__workspaceName">{workspace.name}</span>
                      </>
                    )
                  })}
                </>
              )
            })}
          </>
        )
      })}
    </Flex>
  )

  return (
    <NavigationList
      items={[
        {
          label: 'Account',
          hideLabel: true,
          icon: <Avatar>WS</Avatar>,
          type: 'menu',
          children: [{ className: 'workspaceSelector', label: container }],
        },
      ]}
    />
  )
}