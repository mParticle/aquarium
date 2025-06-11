import { Splitter as AntSplitter } from 'antd'
import { ConfigProvider } from 'src/components'
import type { SplitterProps as AntSplitterProps } from 'antd/es/splitter'
import type { ReactNode } from 'react'
import { type PanelProps as AntPanelProps } from 'antd/es/splitter/interface'

export interface ISplitterProps extends AntSplitterProps {
  children?: ReactNode
}

export interface ISplitterPanelProps extends AntPanelProps {
  children?: ReactNode
  defaultSize?: string | number
  size?: string | number
  min?: string | number
  max?: string | number
  collapsible?: boolean | { start?: boolean; end?: boolean }
  resizable?: boolean
}

export const Splitter = (props: ISplitterProps) => {
  return (
    <ConfigProvider>
      <AntSplitter {...props} />
    </ConfigProvider>
  )
}

const Panel = (props: ISplitterPanelProps) => {
  return (
    <ConfigProvider>
      <AntSplitter.Panel {...props} />
    </ConfigProvider>
  )
}

Splitter.Panel = Panel
