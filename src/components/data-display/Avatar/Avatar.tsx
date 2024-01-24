import { Avatar as AntAvatar } from "antd";
import { AvatarProps as AntAvatarProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IAvatarProps extends AntAvatarProps {
}

export const Avatar = (props: IAvatarProps) => {
  return <ConfigProvider>
    <AntAvatar {...props}/>
  </ConfigProvider>;
};