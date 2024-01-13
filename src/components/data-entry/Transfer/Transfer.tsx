import { Transfer as AntTransfer } from "antd";
import { TransferProps as AntTransferProps } from "antd";

export interface ITransferProps extends AntTransferProps {
}

export const Transfer = (props: ITransferProps) => {
  return <>
    <AntTransfer {...props}/>
  </>;
};