import { type Meta, type StoryObj } from '@storybook/react'
import { useMemo } from 'react'
import type { Options, SeriesAreaOptions, SeriesLineOptions } from 'highcharts'
import { HighChart } from 'src/components/charts/HighChart'
import { ChartTooltip } from 'src/components/charts/ChartTooltip'
import { Flex } from 'src/components/layout/Flex/Flex'
import { ColorWhite, FontFamily, FontSizeSm } from 'src/styles/style'
import { formatCompactNumber, getAverage, renderReactTooltip } from 'src/components/charts/chartUtils'
import { NBAChartColors as CHART_COLORS } from 'src/components/charts/chartColors'

const DECILE_MIDPOINTS = [0.05, 0.15, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 0.85, 0.95]
const DECILE_BOUNDARIES = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]

const getActionColor = (actionIndex: number): string =>
  CHART_COLORS.actionPalette[actionIndex % CHART_COLORS.actionPalette.length]

interface IPercentileRow {
  action_counts: number[]
  conversion_probability: number
}

interface INbaPerformanceData {
  actions: string[]
  percentiles_to_data: Record<string, IPercentileRow>
}

interface IStackedAreaDataPoint {
  percentile: number
  userCount: number
}

type StackedAreaSeries = IStackedAreaDataPoint[]

function calculateStackedAreaSeries(data: INbaPerformanceData): Record<string, StackedAreaSeries> {
  const seriesRecord: Record<string, StackedAreaSeries> = {}
  data.actions.forEach(actionName => {
    seriesRecord[actionName] = []
  })

  for (let i = 0; i < DECILE_MIDPOINTS.length; i++) {
    const midpoint = DECILE_MIDPOINTS[i]
    const lowerBoundary = DECILE_BOUNDARIES[i]
    const upperBoundary = lowerBoundary + 0.09

    const lowerData = data.percentiles_to_data[lowerBoundary.toFixed(2)]
    const upperData = data.percentiles_to_data[upperBoundary.toFixed(2)]

    data.actions.forEach((actionName, actionIndex) => {
      const lowerCount = lowerData?.action_counts?.[actionIndex] ?? 0
      const upperCount = upperData?.action_counts?.[actionIndex] ?? 0
      const usersInDecile = lowerCount - upperCount
      seriesRecord[actionName].push({ percentile: midpoint, userCount: Math.max(0, usersInDecile) })
    })
  }

  data.actions.forEach(actionName => {
    const series = seriesRecord[actionName]
    if (series.length > 0) {
      seriesRecord[actionName] = [
        { percentile: 0, userCount: series[0].userCount },
        ...series,
        { percentile: 1, userCount: series[series.length - 1].userCount },
      ]
    }
  })

  return seriesRecord
}

function calculateCvrSeries(data: INbaPerformanceData): [number, number][] {
  const cvrSeries: [number, number][] = []

  for (let i = 0; i < DECILE_MIDPOINTS.length; i++) {
    const midpoint = DECILE_MIDPOINTS[i]
    const lowerBoundary = DECILE_BOUNDARIES[i]
    const upperBoundary = lowerBoundary + 0.09
    const probs: number[] = []

    for (let p = lowerBoundary; p <= upperBoundary; p = Number((p + 0.01).toFixed(2))) {
      const row = data.percentiles_to_data[p.toFixed(2)]
      if (row?.conversion_probability !== undefined) {
        probs.push(row.conversion_probability)
      }
    }

    const avgCvr = getAverage(probs)
    cvrSeries.push([midpoint, Number((avgCvr * 100).toFixed(1))])
  }

  return cvrSeries
}

interface INBAChartDemoProps {
  performanceData: INbaPerformanceData
  percentileLower?: number
}

function NBAChartDemo({ performanceData, percentileLower }: INBAChartDemoProps) {
  const chartOptions = useMemo<Options>(() => {
    const stackedAreaSeries = calculateStackedAreaSeries(performanceData)
    const cvrSeries = calculateCvrSeries(performanceData)

    const maxUsers = Object.values(stackedAreaSeries)
      .map(value => (value.length > 0 ? value[0].userCount : 0))
      .reduce((a, b) => a + b, 0)

    const sortedActions = [...performanceData.actions].sort((a, b) => {
      const totalA = stackedAreaSeries[a].reduce((sum, p) => sum + p.userCount, 0)
      const totalB = stackedAreaSeries[b].reduce((sum, p) => sum + p.userCount, 0)
      return totalA - totalB
    })

    const areaSeries: SeriesAreaOptions[] = sortedActions.map((actionName, index) => ({
      type: 'area',
      name: actionName,
      data: stackedAreaSeries[actionName].map(p => [p.percentile, p.userCount]),
      color: getActionColor(sortedActions.length - index - 1),
      lineWidth: 1,
      lineColor: ColorWhite,
      fillOpacity: 0.4,
      stacking: 'normal',
      yAxis: 0,
    }))

    const lineSeries: SeriesLineOptions = {
      type: 'line',
      name: 'Predicted CVR',
      data: cvrSeries,
      color: CHART_COLORS.cvrLine,
      yAxis: 1,
      lineWidth: 2,
      marker: {
        enabled: true,
        symbol: 'circle',
        radius: 3,
        fillColor: CHART_COLORS.cvrLineMarker,
        lineColor: CHART_COLORS.cvrLineMarker,
      },
      legendIndex: -1,
    }

    const defaultStyle = {
      color: CHART_COLORS.defaultTextColor,
      fontSize: FontSizeSm,
      fontWeight: '400',
      fontFamily: FontFamily,
    }

    return {
      chart: { type: 'area', height: 500 },
      title: { text: undefined },
      xAxis: {
        title: {
          text: 'Likelihood Percentiles (from least → to most likely to act)',
          style: defaultStyle,
        },
        min: 0,
        max: 1,
        tickInterval: 0.1,
        labels: {
          formatter(this: unknown) {
            const ctx = this as { value: number | string }
            const value = typeof ctx.value === 'number' ? ctx.value : Number.parseFloat(ctx.value)
            return value.toFixed(2)
          },
          style: defaultStyle,
        },
        plotBands: !percentileLower
          ? []
          : [
              {
                from: percentileLower,
                to: 1,
                color: CHART_COLORS.rangeFill,
                borderColor: CHART_COLORS.rangeBorder,
                borderWidth: 2,
                zIndex: 4,
              },
            ],
      },
      yAxis: [
        {
          title: { text: 'Number of Users', style: defaultStyle },
          max: maxUsers,
          labels: {
            formatter(this: unknown) {
              const ctx = this as { value: number | string }
              return formatCompactNumber(Number(ctx.value))
            },
            style: defaultStyle,
          },
        },
        { max: 100, visible: false },
      ],
      tooltip: {
        useHTML: true,
        shared: false,
        snap: 10,
        followPointer: true,
        formatter(this: unknown) {
          const ctx = this as {
            point?: { y: number | string; series: { type: string; name: string; color: string } }
            x: number | string
          }
          const point = ctx.point
          if (!point) return false
          const series = point.series

          let tooltipComponent
          if (series.type === 'line') {
            const cvrValue = typeof point.y === 'number' ? point.y : Number.parseFloat(point.y)
            tooltipComponent = (
              <ChartTooltip
                title="Predicted CVR"
                items={[{ label: 'Predicted CVR', value: `${cvrValue.toFixed(1)}%` }]}
                descriptions={['Average predicted conversion rate for this decile, estimated from historical data.']}
              />
            )
          } else {
            const xValue = typeof ctx.x === 'number' ? ctx.x : Number.parseFloat(ctx.x)
            const insideRange = !!(percentileLower && xValue >= percentileLower)
            tooltipComponent = (
              <ChartTooltip
                title={series.name}
                items={[
                  { label: 'Percentile', value: xValue.toFixed(2) },
                  { label: 'Range', value: insideRange ? 'Inside selection' : 'Outside selection' },
                ]}
                descriptions={['Users predicted to take this action, stacked by action across all deciles.']}
              />
            )
          }
          return renderReactTooltip(tooltipComponent)
        },
      },
      legend: {
        enabled: true,
        verticalAlign: 'top',
        itemStyle: defaultStyle,
        reversed: true,
      },
      plotOptions: {
        area: {
          stacking: 'normal',
          animation: false,
          marker: { enabled: false, states: { hover: { enabled: false } } },
          states: { inactive: { opacity: 1 }, hover: { enabled: true } },
          trackByArea: true,
        },
        line: {
          animation: false,
          dataLabels: {
            enabled: true,
            format: '{y}%',
            borderWidth: 0,
            style: defaultStyle,
          },
          states: { inactive: { enabled: false } },
        },
        series: { findNearestPointBy: 'xy', stickyTracking: false },
      },
      series: [...areaSeries, lineSeries],
      credits: { enabled: false },
    }
  }, [performanceData, percentileLower])

  return (
    <Flex style={{ width: 900, maxWidth: '100%', margin: '0 auto' }}>
      <HighChart options={chartOptions} fullWidth />
    </Flex>
  )
}

function makeMockPerformanceData(): INbaPerformanceData {
  const actions = ['Send Email', 'Send SMS', 'Show Banner', 'Offer Discount', 'Recommend Product']
  const percentiles_to_data: Record<string, IPercentileRow> = {}
  const totalUsers = 1_000_000

  for (let i = 0; i <= 100; i++) {
    const p = Number((i / 100).toFixed(2))
    const remaining = Math.max(0, Math.round(totalUsers * (1 - p)))
    const weights = actions.map((_, idx) => 1 + Math.sin(i / 10 + idx) + idx * 0.2)
    const weightSum = weights.reduce((a, b) => a + b, 0)
    const action_counts = weights.map(w => Math.round((w / weightSum) * remaining))
    const conversion_probability = 0.01 + 0.4 / (1 + Math.exp(-8 * (p - 0.6)))
    percentiles_to_data[p.toFixed(2)] = { action_counts, conversion_probability }
  }

  return { actions, percentiles_to_data }
}

const mockData = makeMockPerformanceData()

const meta: Meta<typeof NBAChartDemo> = {
  title: 'Components/Charts/NBAChart',
  component: NBAChartDemo,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Cortex Next Best Action chart — stacked area series per action by decile, overlaid with a predicted CVR line. Hover to see action and CVR details; the selected percentile is highlighted with a plotBand.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof NBAChartDemo>

export const Default: Story = {
  args: { performanceData: mockData },
}

export const WithSelectedRange: Story = {
  args: { performanceData: mockData, percentileLower: 0.7 },
}
