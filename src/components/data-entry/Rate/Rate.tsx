import { Rate as AntRate } from 'antd'
import { type RateProps as AntRateProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IRateProps extends AntRateProps {}

export const Rate = (props: IRateProps) => {
  return (
    <ConfigProvider>
      <AntRate {...props} />
    </ConfigProvider>
  )
}
