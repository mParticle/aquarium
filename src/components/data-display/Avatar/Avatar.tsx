import React from "react";
import { Avatar as AntAvatar } from "antd";
import { AvatarProps as AntAvatarProps } from "antd";

export interface IAvatarProps extends AntAvatarProps {}

export const Avatar = (props: IAvatarProps) => {
  return (
    <>
      <AntAvatar {...props} />
    </>
  );
};
