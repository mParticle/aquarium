import { Breadcrumb as AntBreadcrumb } from 'antd'
import { type BreadcrumbProps as AntBreadcrumbProps } from 'antd'

export interface IBreadcrumbProps extends AntBreadcrumbProps {}

export const Breadcrumb = (props: IBreadcrumbProps) => {
  return <AntBreadcrumb {...props} />
}

Breadcrumb.Item = AntBreadcrumb.Item
