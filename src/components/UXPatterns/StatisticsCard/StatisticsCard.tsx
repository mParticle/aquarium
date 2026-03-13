import React from 'react'
import { Card, Flex, Statistic, IconWithTooltip } from 'src/components'
import type { ReactNode } from 'react'
import { FontSizeHeading3, FontSizeLg, FontWeightStrong } from 'src/styles/style'

export interface IStatisticsCardProps {
  title: string
  value: string | number
  denominator?: string | number
  tooltip?: ReactNode
  valueFontSize?: string
  denominatorFontSize?: string
  valueFontWeight?: string | number
}

export const StatisticsCard: React.FC<IStatisticsCardProps> = ({
  title,
  value,
  denominator = '100',
  tooltip,
  valueFontSize = FontSizeHeading3,
  denominatorFontSize = FontSizeLg,
  valueFontWeight = FontWeightStrong,
}) => {
  return (
    <Card variant="borderless">
      <Flex justify="space-between" align="flex-start">
        <Statistic
          title={title}
          value={value}
          formatter={value => (
            <>
              <span style={{ fontSize: valueFontSize, fontWeight: valueFontWeight }}>{value}</span>
              <span style={{ fontSize: denominatorFontSize, fontWeight: 'normal' }}> / {denominator}</span>
            </>
          )}
        />
        {tooltip && <IconWithTooltip title={tooltip} />}
      </Flex>
    </Card>
  )
}
