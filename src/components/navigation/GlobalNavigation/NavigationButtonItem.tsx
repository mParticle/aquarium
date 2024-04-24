import React from 'react'
import { Button } from 'src/components'
import { IWorkspaceSelectorProps } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelector'

export interface INavigationButtonItemProps {
  label?: string
  onClick?: () => void
  withoutContainer?: boolean
}

export const NavigationButtonItem: React.FC<INavigationButtonItemProps> = ({
  label = 'Sign Out of mParticle',
  onClick,
  withoutContainer = false,
  ...rest
}) => {
  return (
    <div className={!withoutContainer ? 'workspaceSelector__signoutButtonContainer' : ''}>
      <Button className="workspaceSelector__signoutButton" type="primary" onClick={onClick} {...rest}>
        {label}
      </Button>
    </div>
  )
}
