import { Mentions as AntMentions } from "antd";
import { MentionProps as AntMentionProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IMentionsProps extends AntMentionProps {
}

export const Mentions = (props: IMentionsProps) => {
  return <ConfigProvider>
    <AntMentions {...props}/>
  </ConfigProvider>;
};