import { Tour as AntTour } from 'antd'
import { type TourProps as AntTourProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface ITourProps extends AntTourProps {}

export const Tour = (props: ITourProps) => {
  return (
    <ConfigProvider>
      <AntTour {...props} />
    </ConfigProvider>
  )
}
