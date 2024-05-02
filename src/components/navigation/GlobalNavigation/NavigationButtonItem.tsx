import React, { type ReactNode } from 'react'
import { Button } from 'src/components'

export interface INavigationButtonItemProps {
  label: ReactNode
  onClick?: () => void
  withoutContainer?: boolean
  href?: string
  target?: '_blank' | '_self'
}

export const NavigationButtonItem: React.FC<INavigationButtonItemProps> = ({
  label,
  onClick,
  withoutContainer = false,
  ...props
}) => {
  return (
    <div className={!withoutContainer ? 'workspaceSelector__signoutButtonContainer' : ''}>
      <Button
        className="workspaceSelector__signoutButton"
        type="primary"
        onClick={onClick}
        href={props.href}
        target={props.target ?? '_self'}>
        {label}
      </Button>
    </div>
  )
}
