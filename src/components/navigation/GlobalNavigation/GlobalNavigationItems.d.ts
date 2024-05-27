import type { ReactNode, type MouseEvent } from 'react'
import { type HrefOptions } from 'src/utils/utils'
import { ISvgLink } from 'src/components/navigation/MiniMap/SvgLinker'
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
  label: ReactNode
  hrefOptions?: HrefOptions
  hideLabel?: boolean
  onClick?: (e: MouseEvent) => void
  buttonOptions?: { onClick?: () => void; href?: string; target?: '_self' | '_blank' }
}

export type IGlobalNavigationItem = IGlobalNavigationMenu | IGlobalNavigationLink

interface IMinimapOptionsShow {
  show: true
  overviewHref: string
  routes: ISvgLink[]
}

interface IMinimapOptionsHide {
  show: false
  overviewHref: undefined
  routes: []
}

export type IMinimapOptions = IMinimapOptionsShow | IMinimapOptionsHide
