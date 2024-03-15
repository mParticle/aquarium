import type { ReactNode, type MouseEvent } from 'react'

export interface IBaseGlobalNavigationItem {
  type?: 'menu' | 'link'
  label: ReactNode
  icon?: ReactNode
  hideLabel?: boolean
  isActive?: boolean
  isNestedMenu?: boolean
}

export interface IGlobalNavigationLogo extends Omit<IBaseGlobalNavigationItem, 'type'> {
  onSuiteLogoClick: () => void
}

export interface IGlobalNavigationMenu extends IBaseGlobalNavigationItem {
  type: 'menu'
  children: IGlobalNavigationLink[]
}

export interface IGlobalNavigationLink extends IBaseGlobalNavigationItem {
  type?: 'link'
  href: string
  hideLabel?: boolean
  onClick?: (e: MouseEvent) => void
}

export type IGlobalNavigationTool = IGlobalNavigationMenu | IGlobalNavigationLink

export type IGlobalNavigationManagement = IGlobalNavigationMenu | IGlobalNavigationLink
