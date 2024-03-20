import { Statistic as AntStatistic } from 'antd'
import { type StatisticProps as AntStatisticProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IStatisticProps extends AntStatisticProps {}

export const Statistic = (props: IStatisticProps) => {
  return (
    <ConfigProvider>
      <AntStatistic {...props} />
    </ConfigProvider>
  )
}

Statistic.Countdown = AntStatistic.Countdown