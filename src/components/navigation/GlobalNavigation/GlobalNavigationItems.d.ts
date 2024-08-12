import type { ReactNode, type MouseEvent, ReactElement } from 'react'
import { type HrefOptions } from 'src/utils/utils'
import { type Icons } from 'src/constants/Icons'

export interface IBaseGlobalNavigationItem {
  type?: 'menu' | 'link'
  label: ReactNode
  icon?: ReactNode
  hideLabel?: boolean
  isActive?: boolean
}

export interface IGlobalNavigationLogo extends IBaseGlobalNavigationItem {
  onSuiteLogoClick: () => void
  type?: 'default' | 'background-solid' | 'custom-size'
  icon?: ReactElement | keyof typeof Icons
  navSwitcherTourOptions?: INavSwitcherTourOptions
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

export type MiniMapLinks = 'oversight' | 'dataPlatform' | 'customer360' | 'predictions' | 'analytics' | 'segmentation'
export type MiniMapLink = {
  linkId: MiniMapLinks
  href: string
}

export interface IMiniMapOptions {
  overviewHref: string
  links: MiniMapLink[]
  onLinkClick: (link: MiniMapLink) => void
  onUnauthorizedClick?: (link?: MiniMapLink) => void
  unauthorizedLinks?: MiniMapLinks[]
  activeLink: MiniMapLinks
}

export interface INavSwitcherTourOptions {
  isOpen: boolean
  onClose: () => void
}
