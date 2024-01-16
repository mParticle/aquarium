import React from "react";
import { Avatar as AntAvatar , type AvatarProps as AntAvatarProps } from "antd";


export interface IAvatarProps extends AntAvatarProps {}

export const Avatar = (props: IAvatarProps) => {
  return (
    <>
      <AntAvatar {...props} />
    </>
  );
};
