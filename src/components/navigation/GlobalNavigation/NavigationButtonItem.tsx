import React from 'react'
import { Button } from 'src/components'
import { IWorkspaceSelectorProps } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelector'

export interface INavigationButtonItemProps {
  label?: string
  onClick?: () => void
  withoutContainer?: boolean
  href?: string
  target?: '_blank' | '_self'
}

export const NavigationButtonItem: React.FC<INavigationButtonItemProps> = ({
  label = 'Sign Out of mParticle',
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
