import React, { type ReactNode } from 'react'
import { type IPopoverProps, Popover } from 'src/components'
import type { IMiniMapOptions, MiniMapLink } from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { SuiteSelectorContent } from 'src/components/navigation/GlobalNavigation/SuiteSelector/SuiteSelectorContent'

interface ISuiteSelectorProps extends IPopoverProps {
  minimapOptions: IMiniMapOptions
  onLinkClick: (link: MiniMapLink) => void
  children: ReactNode
}

export function SuiteSelector(props: ISuiteSelectorProps) {
  return (
    <Popover
      content={
        <SuiteSelectorContent
          overviewHref={props.minimapOptions.overviewHref}
          onUnauthorizedClick={props.minimapOptions.onUnauthorizedClick}
          links={props.minimapOptions.links}
          onLinkClick={props.onLinkClick}
          unauthorizedLinks={props.minimapOptions.unauthorizedLinks}
          activeLink={props.minimapOptions.activeLink}
        />
      }
      placement="bottomLeft"
      open={props.open}
      trigger="click"
      onOpenChange={props.onOpenChange}
      arrow={false}>
      {props.children}
    </Popover>
  )
}
