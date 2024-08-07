import { Cascader as AntCascader } from 'antd'
import { type CascaderProps as AntCascaderProps } from 'antd'
import { type BaseOptionType } from 'antd/es/select'
import { ConfigProvider } from 'src/components'

export type ICascaderProps<DataNodeType extends BaseOptionType = any> = AntCascaderProps<DataNodeType>

export const Cascader = (props: ICascaderProps) => {
  return (
    <ConfigProvider>
      <AntCascader {...props} />
    </ConfigProvider>
  )
}

Cascader.Panel = AntCascader.Panel
Cascader.SHOW_PARENT = AntCascader.SHOW_PARENT
Cascader.SHOW_CHILD = AntCascader.SHOW_CHILD
