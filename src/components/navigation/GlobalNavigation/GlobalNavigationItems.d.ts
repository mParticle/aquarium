import type { ReactNode, type MouseEvent, ReactElement } from 'react'
import { type ITourProps } from 'src/components'
import { type HrefOptions } from 'src/utils/utils'
import { type Icons } from 'src/constants/Icons'

export interface IBaseGlobalNavigationItem {
  id?: string,
  type?: 'menu' | 'link'
  label: ReactNode
  icon?: ReactNode
  hideLabel?: boolean
  disabled?: boolean
  visible?: boolean
}

export interface IGlobalNavigationLogo extends IBaseGlobalNavigationItem {
  onSuiteLogoClick?: () => void
  type?: 'default' | 'background-solid' | 'custom-size'
  icon?: ReactElement | keyof typeof Icons
  navSwitcherTourOptions?: INavSwitcherTourOptions
}

export interface IGlobalNavigationMenu extends IBaseGlobalNavigationItem {
  type: 'menu'
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

export type SuiteLinks = 'oversight' | 'dataPlatform' | 'customer360' | 'predictions' | 'analytics' | 'segmentation'
export type SuiteLink = {
  linkId: SuiteLinks
  href: string
}

export interface ISuiteSelectorOptions {
  overviewHref: string
  links: SuiteLink[]
  onLinkClick: (link: SuiteLink) => void
  onUnauthorizedClick?: (link?: SuiteLink) => void
  unauthorizedLinks?: SuiteLinks[]
  activeLink: SuiteLinks
}

export interface INavSwitcherTourOptions extends ITourProps {
  open: boolean
  onClose: () => void
  title?: string
  description?: string
}
