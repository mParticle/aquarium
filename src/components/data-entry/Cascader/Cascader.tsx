import React from 'react'
import { Cascader as AntCascader } from 'antd'
import { type CascaderProps as AntCascaderProps } from 'antd'
import { type BaseOptionType } from 'antd/es/select'
import { ConfigProvider } from 'src/components'

export type ICascaderProps<DataNodeType extends BaseOptionType = any> = AntCascaderProps<DataNodeType>

interface CascaderComponent extends React.ForwardRefExoticComponent<ICascaderProps & React.RefAttributes<any>> {
  Panel: typeof AntCascader.Panel
  SHOW_PARENT: typeof AntCascader.SHOW_PARENT
  SHOW_CHILD: typeof AntCascader.SHOW_CHILD
}

const InternalCascader = React.forwardRef<any, ICascaderProps>((props, ref) => {
  return (
    <ConfigProvider>
      <AntCascader {...props} ref={ref} />
    </ConfigProvider>
  )
}) as CascaderComponent

InternalCascader.displayName = 'Cascader'

InternalCascader.Panel = AntCascader.Panel
InternalCascader.SHOW_PARENT = AntCascader.SHOW_PARENT
InternalCascader.SHOW_CHILD = AntCascader.SHOW_CHILD

export const Cascader = InternalCascader
