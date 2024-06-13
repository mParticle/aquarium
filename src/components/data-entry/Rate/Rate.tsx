import { Rate as AntRate } from 'antd'
import { type RateProps as AntRateProps } from 'antd'

export interface IRateProps extends AntRateProps {}

export const Rate = (props: IRateProps) => {
  return <AntRate {...props} />
}
