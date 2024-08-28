import React, { type ReactNode } from 'react'
import { type IPopoverProps, Popover } from 'src/components'
import {
  type ISuiteSelectorOptions,
  type SuiteLink,
} from 'src/components/navigation/GlobalNavigation/GlobalNavigationItems'
import { SuiteSelectorContent } from 'src/components/navigation/GlobalNavigation/SuiteSelector/SuiteSelectorContent'

interface ISuiteSelectorProps extends IPopoverProps {
  suiteSelectorOptions: ISuiteSelectorOptions
  onLinkClick: (link: SuiteLink) => void
  children: ReactNode
}

export function SuiteSelector(props: ISuiteSelectorProps) {
  return (
    <Popover
      content={
        <SuiteSelectorContent
          overviewHref={props.suiteSelectorOptions.overviewHref}
          onUnauthorizedClick={props.suiteSelectorOptions.onUnauthorizedClick}
          links={props.suiteSelectorOptions.links}
          onLinkClick={props.onLinkClick}
          unauthorizedLinks={props.suiteSelectorOptions.unauthorizedLinks}
          activeLink={props.suiteSelectorOptions.activeLink}
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
