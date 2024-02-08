import { type MenuItemType } from 'src/components/navigation/Menu/Menu'
import { type MenuInfo } from 'rc-menu/lib/interface'

interface IWorkspaceSelectorItem {
  label: string
  id: string
}

export interface INavigationOrg extends IWorkspaceSelectorItem {
  accounts: INavigationAccount[]
}

export interface INavigationAccount extends IWorkspaceSelectorItem {
  workspaces: INavigationWorkspace[]
}

export interface INavigationWorkspace extends IWorkspaceSelectorItem {
  isSelected: boolean// todo: is this needed? 
  onClick: (info: MenuInfo) => void
}

export interface IWorkspaceSelectorMapping extends MenuItemType {
  type: 'org' | 'account' | 'workspace'
  className: string
  label: string
  id: string
  
  isSelected?: boolean// todo: is this needed? 
  accounts?: INavigationAccount[]
  workspaces?: INavigationWorkspace[]
}