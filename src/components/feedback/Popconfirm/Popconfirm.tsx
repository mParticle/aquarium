import { Popconfirm as AntPopconfirm } from 'antd'
import { type PopconfirmProps as AntPopconfirmProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IPopconfirmProps extends AntPopconfirmProps {}

export const Popconfirm = (props: IPopconfirmProps) => {
  return (
    <ConfigProvider>
      <AntPopconfirm {...props}>
        {/* Fragment fixes tooltip sometimes not showing */}
        {/* https://github.com/ant-design/ant-design/issues/15909 */}
        <>{props.children}</>
      </AntPopconfirm>
    </ConfigProvider>
  )
}
