import { Popconfirm as AntPopconfirm, type PopconfirmProps as AntPopconfirmProps } from 'antd'

export interface IPopconfirmProps extends AntPopconfirmProps {}

export const Popconfirm = (props: IPopconfirmProps) => {
  return (
    <>
      <AntPopconfirm {...props} />
    </>
  )
}
