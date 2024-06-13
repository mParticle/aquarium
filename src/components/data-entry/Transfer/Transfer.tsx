import { Transfer as AntTransfer } from 'antd'
import { type TransferProps as AntTransferProps } from 'antd'

export interface ITransferProps extends AntTransferProps {}

export const Transfer = (props: ITransferProps) => {
  return <AntTransfer {...props} />
}

Transfer.List = AntTransfer.List
Transfer.Search = AntTransfer.Search
Transfer.Operation = AntTransfer.Operation
