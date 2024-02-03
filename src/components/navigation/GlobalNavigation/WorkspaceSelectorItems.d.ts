
interface IWorkspaceSelectorItem {
  name: string
  id: string
}

export interface INavigationOrg extends IWorkspaceSelectorItem {
  accounts: INavigationAccount[]
}

export interface INavigationAccount extends IWorkspaceSelectorItem {
  workspaces: INavigationWorkspace[]
}

export interface INavigationWorkspace extends IWorkspaceSelectorItem {}

export interface WorkspaceSelectorMapping {
  type: 'org' | 'account' | 'workspace'
  className: 'workspaceSelector__orgName' | 'workspaceSelector__accountName' | 'workspaceSelector__workspaceName'
  label: string
  id: string
}