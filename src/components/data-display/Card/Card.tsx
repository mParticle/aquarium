import { Card as AntCard } from 'antd'
import { type CardProps as AntCardProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface ICardProps extends AntCardProps {}

export const Card = (props: ICardProps) => {
  return (
    <ConfigProvider>
      <AntCard {...props} />
    </ConfigProvider>
  )
}
