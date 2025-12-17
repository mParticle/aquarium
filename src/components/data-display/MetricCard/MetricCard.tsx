import React, { useMemo } from 'react'
import { Card, Flex, Typography, MoreActionsButton, type IMoreActionsButtonProps } from 'src/components'
import { ConfigProvider } from 'src/components/other/ConfigProvider/ConfigProvider'
import { ColorSuccess, ColorError, ColorTextSecondary } from 'src/styles/style'
import './metric-card.css'

export type TrendDirection = 'up' | 'down' | 'neutral'

export interface IMetricCardProps {
  /**
   * The title/label displayed in the card header
   */
  title: string

  /**
   * The main metric value to display (formatted string)
   */
  value: string | number

  /**
   * Percentage change value (e.g., 100 for "100%")
   */
  changePercent?: number

  /**
   * Comparison text shown after the percentage (e.g., "vs last month")
   */
  comparisonText?: string

  /**
   * Direction of the trend - determines icon and color
   * @default 'neutral'
   */
  trendDirection?: TrendDirection

  /**
   * Array of values for the sparkline chart (normalized 0-100)
   */
  sparklineData?: number[]

  /**
   * Menu items for the more actions button
   */
  menuItems?: IMoreActionsButtonProps['menuItems']

  /**
   * Custom width for the card
   * @default 360
   */
  width?: number | string

  /**
   * Optional className for additional styling
   */
  className?: string
}

const formatValue = (value: string | number): string => {
  if (typeof value === 'number') {
    return value.toLocaleString()
  }
  return value
}

const Sparkline: React.FC<{ data: number[]; color: string }> = ({ data, color }) => {
  const width = 280
  const height = 48
  const padding = 4

  const points = useMemo(() => {
    if (!data || data.length === 0) return ''

    const maxVal = Math.max(...data)
    const minVal = Math.min(...data)
    const range = maxVal - minVal || 1

    const stepX = (width - padding * 2) / (data.length - 1)

    return data
      .map((val, i) => {
        const x = padding + i * stepX
        const y = height - padding - ((val - minVal) / range) * (height - padding * 2)
        return `${x},${y}`
      })
      .join(' ')
  }, [data])

  const areaPath = useMemo(() => {
    if (!data || data.length === 0) return ''

    const maxVal = Math.max(...data)
    const minVal = Math.min(...data)
    const range = maxVal - minVal || 1

    const stepX = (width - padding * 2) / (data.length - 1)

    const linePoints = data.map((val, i) => {
      const x = padding + i * stepX
      const y = height - padding - ((val - minVal) / range) * (height - padding * 2)
      return { x, y }
    })

    let path = `M ${padding},${height - padding} `
    linePoints.forEach((point, i) => {
      if (i === 0) {
        path += `L ${point.x},${point.y} `
      } else {
        path += `L ${point.x},${point.y} `
      }
    })
    path += `L ${width - padding},${height - padding} Z`

    return path
  }, [data])

  if (!data || data.length < 2) return null

  return (
    <svg className="metric-card-sparkline" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
      <defs>
        <linearGradient id={`sparkline-gradient-${color.replace('#', '')}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#sparkline-gradient-${color.replace('#', '')})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export const MetricCard: React.FC<IMetricCardProps> = ({
  title,
  value,
  changePercent,
  comparisonText,
  trendDirection = 'neutral',
  sparklineData,
  menuItems,
  width = 360,
  className,
}) => {
  const getTrendColor = (): string => {
    switch (trendDirection) {
      case 'up':
        return ColorSuccess
      case 'down':
        return ColorError
      default:
        return ColorTextSecondary
    }
  }

  const trendColor = getTrendColor()

  const getTrendIcon = () => {
    const arrowStyle = { width: 16, height: 16 }
    switch (trendDirection) {
      case 'up':
        return (
          <svg style={arrowStyle} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3L13 8L11.6 9.4L9 6.8V13H7V6.8L4.4 9.4L3 8L8 3Z" fill={ColorSuccess} />
          </svg>
        )
      case 'down':
        return (
          <svg style={arrowStyle} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 13L3 8L4.4 6.6L7 9.2V3H9V9.2L11.6 6.6L13 8L8 13Z" fill={ColorError} />
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <ConfigProvider>
      <Card
        className={`metric-card ${className ?? ''}`}
        style={{ width }}
        bordered
        title={<Typography.Text>{title}</Typography.Text>}
      >
        <Flex vertical gap={12}>
          <Flex justify="space-between" align="flex-start">
            <Flex align="baseline" gap={12} wrap="wrap">
              <Typography.Text className="metric-card-value">{formatValue(value)}</Typography.Text>

              {changePercent !== undefined && (
                <Flex align="center" gap={4}>
                  {getTrendIcon()}
                  <Typography.Text style={{ color: trendColor }} className="metric-card-change">
                    {Math.abs(changePercent)}%
                  </Typography.Text>
                  {comparisonText && (
                    <Typography.Text type="secondary" className="metric-card-comparison">
                      {comparisonText}
                    </Typography.Text>
                  )}
                </Flex>
              )}
            </Flex>

            {menuItems && <MoreActionsButton menuItems={menuItems} />}
          </Flex>

          {sparklineData && sparklineData.length > 0 && <Sparkline data={sparklineData} color={trendColor} />}
        </Flex>
      </Card>
    </ConfigProvider>
  )
}
