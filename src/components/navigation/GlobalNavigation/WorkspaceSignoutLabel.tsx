import { Button } from "src/components";
import { IWorkspaceSelectorProps } from "src/components/navigation/GlobalNavigation/WorkspaceSelector";

export const WorkspaceSignoutLabel = ({
                                        signoutOptions,
                                      }: {
  signoutOptions: IWorkspaceSelectorProps["signoutOptions"]
}) => (
  <Button
    className="workspaceSelector__signoutButton"
    type="primary"
    onClick={e => {
      signoutOptions?.onSignout();
    }}
  >
    {signoutOptions?.label ?? "Sign Out of mParticle"}
  </Button>
);