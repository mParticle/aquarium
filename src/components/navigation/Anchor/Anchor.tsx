import { Anchor as AntAnchor } from "antd";
import { AnchorProps as AntAnchorProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IAnchorProps extends AntAnchorProps {
}

export const Anchor = (props: IAnchorProps) => {
  return <ConfigProvider>
    <AntAnchor {...props}/>
  </ConfigProvider>;
};