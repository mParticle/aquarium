import { Tag as AntTag } from "antd";
import { TagProps as AntTagProps } from "antd";
import { ConfigProvider } from "src/components";

export interface ITagProps extends AntTagProps {
}

export const Tag = (props: ITagProps) => {
  return <ConfigProvider>
    <AntTag {...props}/>
  </ConfigProvider>;
};