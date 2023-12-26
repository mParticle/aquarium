import React from "react";
import { Statistic as AntStatistic } from "antd";
import { StatisticProps as AntStatisticProps } from "antd";

export interface IStatisticProps extends AntStatisticProps {
}

export const Statistic = (props: IStatisticProps) => {
  return <>
    <AntStatistic {...props}/>
  </>;
};