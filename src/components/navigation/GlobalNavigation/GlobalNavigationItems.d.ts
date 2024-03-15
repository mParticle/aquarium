import type { ReactNode } from 'react'
import type { MenuItemType } from 'antd/es/menu/hooks/useItems'

export interface IBaseGlobalNavigationItem {
  type?: 'menu' | 'link'
  label: string
  icon: ReactNode
  hideLabel?: boolean
  isActive?: boolean
}

export interface IGlobalNavigationLogo extends IBaseGlobalNavigationItem {
  onSuiteLogoClick: () => void
}

export interface IGlobalNavigationMenu extends IBaseGlobalNavigationItem {
  type: 'menu'
  isNestedMenu?: boolean
  children?: IGlobalNavigationMenuItem[]
}

interface IGlobalNavigationMenuItem extends Omit<MenuItemType, 'key'> {
  type?: 'menu'
  isNestedMenu?: boolean
  children?: IGlobalNavigationMenuItem[]
}

export interface IGlobalNavigationLink extends IBaseGlobalNavigationItem {
  type: 'link'
  onClick?: (e: React.MouseEvent) => void
}

type IGlobalNavigationItem = IGlobalNavigationMenu | IGlobalNavigationLink

export type IGlobalNavigationTool = IGlobalNavigationItem & {
  hideLabel?: true
  type: 'menu' | 'link'
}

export type IGlobalNavigationManagement = IGlobalNavigationItem & {
  type: 'menu' | 'link'
}