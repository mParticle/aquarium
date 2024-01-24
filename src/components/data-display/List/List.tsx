import { List as AntList } from "antd";
import { ListProps as AntListProps } from "antd";
import { ConfigProvider } from "src/components";

export interface IListProps extends AntListProps {
}

export const List = (props: IListProps) => {
  return <ConfigProvider>
    <AntList {...props}/>
  </ConfigProvider>;
};

List.Item = AntList.Item