import { Card as AntCard, type CardProps as AntCardProps } from 'antd'

export interface ICardProps extends AntCardProps {}

export const Card = (props: ICardProps) => {
  return (
    <>
      <AntCard {...props} />
    </>
  )
}
