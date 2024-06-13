import { Card as AntCard } from 'antd'
import { type CardProps as AntCardProps } from 'antd'


export interface ICardProps extends AntCardProps {}

export const Card = (props: ICardProps) => {
  return <AntCard {...props} />
}

Card.Meta = AntCard.Meta
Card.Grid = AntCard.Grid
