import type { ReactNode, type MouseEvent } from 'react'
import { type HrefOptions } from 'src/utils/utils'

export interface IBaseGlobalNavigationItem {
  type?: 'menu' | 'link'
  label: ReactNode
  icon?: ReactNode
  hideLabel?: boolean
  isActive?: boolean
}

export interface IGlobalNavigationLogo extends IBaseGlobalNavigationItem {
  onSuiteLogoClick: () => void
}

export interface IGlobalNavigationMenu extends IBaseGlobalNavigationItem {
  type: 'menu'
  children: IGlobalNavigationLink[]
}

export interface IGlobalNavigationLink extends IBaseGlobalNavigationItem {
  type?: 'link' | 'button'
  hrefOptions?: HrefOptions
  hideLabel?: boolean
  onClick?: (e: MouseEvent) => void
  buttonOptions?: { label: string; onClick?: () => void; href?: string; target?: 'self' | '_blank' }
}

export type IGlobalNavigationItem = IGlobalNavigationMenu | IGlobalNavigationLink
