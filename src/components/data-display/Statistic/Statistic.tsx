import { Statistic as AntStatistic } from 'antd'
import { type StatisticProps as AntStatisticProps } from 'antd'
import { type CountdownProps as AntCountdownProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IStatisticProps extends AntStatisticProps {}
export interface ICountdownProps extends AntCountdownProps {}

export const Statistic = (props: IStatisticProps) => {
  return (
    <ConfigProvider>
      <AntStatistic {...props} />
    </ConfigProvider>
  )
}

Statistic.Countdown = AntStatistic.Countdown
