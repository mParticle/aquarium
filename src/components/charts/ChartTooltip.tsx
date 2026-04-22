import type { ReactNode } from 'react'
import { Divider } from 'src/components/layout/Divider/Divider'
import { Flex } from 'src/components/layout/Flex/Flex'
import { Typography } from 'src/components/general/Typography/Typography'
import { MarginXxs } from 'src/styles/style'

export interface IChartTooltipItem {
  label: string
  value: string
}

export interface IChartTooltipProps {
  title: string
  items: IChartTooltipItem[]
  descriptions?: ReactNode[]
  width?: number | string
}

export function ChartTooltip({ title, items, descriptions = [], width = 256 }: IChartTooltipProps) {
  return (
    <Flex style={{ width }} vertical>
      <Typography.Text color="ColorTextHeading" strong style={{ textWrap: 'wrap' }}>
        {title}
      </Typography.Text>

      <Divider style={{ margin: `${MarginXxs} 0` }} />

      {items.map((item, index) => (
        <Typography.Text key={index} size="sm">
          {item.label}: {item.value}
        </Typography.Text>
      ))}

      {descriptions.length > 0 && (
        <>
          <Divider style={{ margin: `${MarginXxs} 0` }} />
          {descriptions.map((desc, index) => (
            <Typography.Text key={index} color="ColorTextDescription" size="sm" style={{ textWrap: 'wrap' }}>
              {desc}
            </Typography.Text>
          ))}
        </>
      )}
    </Flex>
  )
}
