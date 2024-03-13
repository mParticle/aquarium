import { type MenuItemType } from 'src/components/navigation/Menu/Menu'

interface IWorkspaceSelectorItem {
  label: string
  id: string
}

export interface INavigationOrg extends IWorkspaceSelectorItem {
  accounts: INavigationAccount[]
  onClick?: () => void
}

export interface INavigationAccount extends IWorkspaceSelectorItem {
  workspaces: INavigationWorkspace[]
  onClick?: () => void
}

export interface INavigationWorkspace extends IWorkspaceSelectorItem {
  isActive: boolean
  onClick?: () => void
}

export interface IWorkspaceSelectorDisplayItem extends MenuItemType {
  type: 'org' | 'account' | 'workspace'
  className: string
  label: string
  id: string

  accounts?: INavigationAccount[]
  workspaces?: INavigationWorkspace[]
  isActive?: boolean
}
