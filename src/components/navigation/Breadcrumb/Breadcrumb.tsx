import { Breadcrumb as AntBreadcrumb, type BreadcrumbProps as AntBreadcrumbProps } from 'antd'

export interface IBreadcrumbProps extends AntBreadcrumbProps {}

export const Breadcrumb = (props: IBreadcrumbProps) => {
  return (
    <>
      <AntBreadcrumb {...props} />
    </>
  )
}
