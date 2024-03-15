import { Breadcrumb as AntBreadcrumb } from 'antd'
import { type BreadcrumbProps as AntBreadcrumbProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IBreadcrumbProps extends AntBreadcrumbProps {}

export const Breadcrumb = (props: IBreadcrumbProps) => {
  return (
    <ConfigProvider>
      <AntBreadcrumb {...props} />
    </ConfigProvider>
  )
}

Breadcrumb.Item = AntBreadcrumb.Item
