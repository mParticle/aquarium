import { Card as AntCard } from 'antd'
import { type CardProps as AntCardProps } from 'antd'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'
import './card.css'

export type ICardProps = AntCardProps

export const Card = (props: ICardProps) => {
  return (
    <ConfigProvider>
      <AntCard {...props} />
    </ConfigProvider>
  )
}

Card.Meta = AntCard.Meta
Card.Grid = AntCard.Grid
