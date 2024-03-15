import { Button } from 'src/components'
import { type IWorkspaceSelectorProps } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelector'

export const WorkspaceSignout = ({ signoutOptions }: { signoutOptions: IWorkspaceSelectorProps['signoutOptions'] }) => (
  <div className="workspaceSelector__signoutButtonContainer">
    <Button
      className="workspaceSelector__signoutButton"
      type="primary"
      onClick={_e => {
        signoutOptions?.onSignout()
      }}
    >
      {signoutOptions?.label ?? 'Sign Out of mParticle'}
    </Button>
  </div>
)
