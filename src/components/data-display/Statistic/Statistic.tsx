import { Statistic as AntStatistic, type StatisticProps as AntStatisticProps } from 'antd'

export interface IStatisticProps extends AntStatisticProps {}

export const Statistic = (props: IStatisticProps) => {
  return (
    <>
      <AntStatistic {...props} />
    </>
  )
}
