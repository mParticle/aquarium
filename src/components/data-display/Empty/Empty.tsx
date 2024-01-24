import { Empty as AntEmpty } from 'antd'
import { type EmptyProps as AntEmptyProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IEmptyProps extends AntEmptyProps {}

export const Empty = (props: IEmptyProps) => {
  return (
    <ConfigProvider>
      <AntEmpty {...props} />
    </ConfigProvider>
  )
}

Empty.PRESENTED_IMAGE_DEFAULT = AntEmpty.PRESENTED_IMAGE_DEFAULT
Empty.PRESENTED_IMAGE_SIMPLE = AntEmpty.PRESENTED_IMAGE_SIMPLE
