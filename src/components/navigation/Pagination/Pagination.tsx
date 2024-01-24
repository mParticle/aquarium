import { Pagination as AntPagination } from 'antd'
import { type PaginationProps as AntPaginationProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IPaginationProps extends AntPaginationProps {}

export const Pagination = (props: IPaginationProps) => {
  return (
    <ConfigProvider>
      <AntPagination {...props} />
    </ConfigProvider>
  )
}
