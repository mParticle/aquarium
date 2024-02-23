import { type MenuItemType } from 'src/components/navigation/Menu/Menu'
import { type MenuInfo } from 'rc-menu/lib/interface'

interface IWorkspaceSelectorItem {
  label: string
  id: string
}

export interface INavigationOrg extends IWorkspaceSelectorItem {
  accounts: INavigationAccount[];
  onClick?: (info: MenuInfo) => void;
}

export interface INavigationAccount extends IWorkspaceSelectorItem {
  workspaces: INavigationWorkspace[];
  onClick?: (info: MenuInfo) => void;
}

export interface INavigationWorkspace extends IWorkspaceSelectorItem {
  isActive: boolean // todo: is this needed?
  onClick?: (info: MenuInfo) => void
}

export interface IWorkspaceSelectorDisplayItem extends MenuItemType {
  type: 'org' | 'account' | 'workspace'
  className: string
  label: string
  id: string

  accounts?: INavigationAccount[]
  workspaces?: INavigationWorkspace[]
}
