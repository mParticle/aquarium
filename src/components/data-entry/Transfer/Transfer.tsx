import { Transfer as AntTransfer, type TransferProps as AntTransferProps } from 'antd'

export interface ITransferProps extends AntTransferProps {}

export const Transfer = (props: ITransferProps) => {
  return (
    <>
      <AntTransfer {...props} />
    </>
  )
}
