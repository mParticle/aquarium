import React from 'react';
import { Button } from 'src/components';
import { IWorkspaceSelectorProps } from 'src/components/navigation/GlobalNavigation/WorkspaceSelector/WorkspaceSelector';

interface INavigationButtonItemProps {
    label?: string;
    onClick?: () => void;
    options?: {
        withoutContainer?: boolean;
    };
}

export const NavigationButtonItem: React.FC<INavigationButtonItemProps> = ({ label = 'Sign Out of mParticle', onClick, options = {}, ...rest }) => {
    const { withoutContainer = false } = options;

    return (
        <div className={!withoutContainer ? "workspaceSelector__signoutButtonContainer" : ""}>
            <Button
                className="workspaceSelector__signoutButton"
                type="primary"
                onClick={onClick}
                {...rest}
            >
                {label}
            </Button>
        </div>
    );
};