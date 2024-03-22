import type { ReactNode, type MouseEvent } from 'react'
import { type HrefOptions } from 'src/utils/utils'

export interface IBaseGlobalNavigationItem {
  type?: 'menu' | 'link'
  label: ReactNode
  icon?: ReactNode
  hideLabel?: boolean
  isActive?: boolean
  isNestedMenu?: boolean
}

export interface IGlobalNavigationLogo extends IBaseGlobalNavigationItem {
  onSuiteLogoClick: () => void
}

export interface IGlobalNavigationMenu extends IBaseGlobalNavigationItem {
  type: 'menu'
  children: IGlobalNavigationLink[]
}

export interface IGlobalNavigationLink extends IBaseGlobalNavigationItem {
  type?: 'link'
  hrefOptions?: HrefOptions
  hideLabel?: boolean
  onClick?: (e: MouseEvent) => void
}

export type IGlobalNavigationItem = IGlobalNavigationMenu | IGlobalNavigationLink