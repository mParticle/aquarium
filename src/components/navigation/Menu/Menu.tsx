import { Menu as AntMenu, type MenuProps as AntMenuProps } from "antd";

import MenuItem from "antd/es/menu/MenuItem";

export interface IMenuProps extends AntMenuProps {}

export const Menu = (props: IMenuProps) => {
  return (
    <>
      <AntMenu {...props} />
    </>
  );
};

export { MenuItem };
