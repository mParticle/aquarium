import { Transfer as AntTransfer } from "antd";
import { TransferProps as AntTransferProps } from "antd";
import { ConfigProvider } from "src/components";

export interface ITransferProps extends AntTransferProps {
}

export const Transfer = (props: ITransferProps) => {
  return <ConfigProvider>
    <AntTransfer {...props}/>
  </ConfigProvider>;
};