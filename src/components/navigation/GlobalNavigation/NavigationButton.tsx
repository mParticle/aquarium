import { Button } from 'src/components'
import { type IWorkspaceSelectorProps } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelector'

export const NavigationButton = ({ navigationButtonOptions }: { navigationButtonOptions: IWorkspaceSelectorProps['navigationButtonOptions'] }) => (
  <div className="workspaceSelector__signoutButtonContainer">
    <Button
      className="workspaceSelector__signoutButton"
      type="primary"
      onClick={_e => {
        navigationButtonOptions?.onClick()
      }}>
      {navigationButtonOptions?.label ?? 'Sign Out of mParticle'}
    </Button>
  </div>
)
