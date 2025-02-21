import type { ReactNode, type MouseEvent } from 'react'
import { type HrefOptions } from 'src/utils/utils'

export interface IBaseGlobalNavigationItem {
  id: string,
  type?: 'menu' | 'link'
  label: ReactNode
  icon?: ReactNode
  hideLabel?: boolean
  disabled?: boolean
  visible?: boolean
}

export interface IGlobalNavigationMenu extends IBaseGlobalNavigationItem {
  type: 'menu'
  hrefOptions?: HrefOptions // we should be able to navigate to the menus
  children: IGlobalNavigationItem[]
}

export interface IGlobalNavigationLink extends IBaseGlobalNavigationItem {
  type?: 'link' | 'button'
  label: ReactNode
  hrefOptions?: HrefOptions
  hideLabel?: boolean
  onClick?: (e: MouseEvent) => void
  buttonOptions?: { onClick?: () => void; href?: string; target?: '_self' | '_blank' }
}

export type IGlobalNavigationItem = IGlobalNavigationMenu | IGlobalNavigationLink
