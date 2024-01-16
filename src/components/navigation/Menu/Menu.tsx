import React from "react";
import { Menu as AntMenu , type MenuProps as AntMenuProps } from "antd";


export interface IMenuProps extends AntMenuProps {}

export const Menu = (props: IMenuProps) => {
  return (
    <>
      <AntMenu {...props} />
    </>
  );
};
