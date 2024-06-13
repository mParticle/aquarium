import { Popconfirm as AntPopconfirm } from 'antd'
import { type PopconfirmProps as AntPopconfirmProps } from 'antd'

export interface IPopconfirmProps extends AntPopconfirmProps {}

export const Popconfirm = (props: IPopconfirmProps) => {
  return (
    <AntPopconfirm {...props}>
      {/* Fragment fixes tooltip sometimes not showing */}
      {/* https://github.com/ant-design/ant-design/issues/15909 */}
      <>{props.children}</>
    </AntPopconfirm>
  )
}
