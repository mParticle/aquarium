import { type MenuItemType } from 'src/components/navigation/Menu/Menu'
import { type ReactNode } from 'react'

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
  key: string | null | undefined
  type: 'org' | 'account' | 'workspace'
  className: string
  label: ReactNode
  id: string

  onClick?: (x) => void

  accounts?: INavigationAccount[]
  workspaces?: INavigationWorkspace[]
  isActive?: boolean
}
