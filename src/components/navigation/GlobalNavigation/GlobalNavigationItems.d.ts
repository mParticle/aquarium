import type { ReactNode, type MouseEvent, ReactElement } from 'react'
import { type HrefOptions } from 'src/utils/utils'
import { ISvgLink } from 'src/components/navigation/MiniMap/SvgLinker'
import { Icons } from 'src/constants/Icons'

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
  onClick?: (e: MouseEvent) => voida
  buttonOptions?: { onClick?: () => void; href?: string; target?: '_self' | '_blank' }
}

export type IGlobalNavigationItem = IGlobalNavigationMenu | IGlobalNavigationLink

export type IMinimapOptions = { overviewHref: string; routes: ISvgLink[] }
