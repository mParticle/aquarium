import React from "react";
import { Card as AntCard } from "antd";
import { CardProps as AntCardProps } from "antd";

export interface ICardProps extends AntCardProps {
}

export const Card = (props: ICardProps) => {
  return <>
    <AntCard {...props}/>
  </>;
};