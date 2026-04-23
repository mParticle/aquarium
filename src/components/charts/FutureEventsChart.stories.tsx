import { type Meta, type StoryObj } from '@storybook/react'
import { useMemo } from 'react'
import type { Options, SeriesColumnOptions, SeriesLineOptions } from 'highcharts'
import { HighChart } from 'src/components/charts/HighChart'
import { ChartTooltip } from 'src/components/charts/ChartTooltip'
import { FontFamily, FontSizeSm } from 'src/styles/style'
import { formatCompactNumber, getAverage, renderReactTooltip } from 'src/components/charts/chartUtils'
import { FutureEventsChartColors as CHART_COLORS } from 'src/components/charts/chartColors'

interface IFutureEventsMockData {
  xPoints: number[]
  yPoints: number[]
  totalPredicted: number
}

interface IFutureEventsChartDemoProps {
  data: IFutureEventsMockData
  percentileLower?: number
  percentileUpper?: number
}

const CHART_LABELS = {
  xAxisTitle: 'Likelihood Percentiles (from least → to most likely to act)',
  yAxisTitle: 'Predicted CVR',
  xAxisFormat: '{value:.1f}',
  yAxisFormat: '{value}%',
} as const

const CHART_CONFIG = {
  height: 516,
  binSize: 0.1,
  numBins: 10,
  columnHeightScale: 0.9,
  yAxisTickInterval: 10,
} as const

function formatCVRPercent(cvrPercent: number): string {
  if (cvrPercent < 0.1) return cvrPercent.toFixed(3)
  if (cvrPercent < 1) return cvrPercent.toFixed(2)
  if (cvrPercent < 10) return cvrPercent.toFixed(1)
  return cvrPercent.toFixed(0)
}

function FutureEventsChartDemo({ data, percentileLower, percentileUpper }: IFutureEventsChartDemoProps) {
  const plotPoints = useMemo(() => data.xPoints.map((x, i) => ({ x, y: data.yPoints[i] })), [data])

  const plotAverage = useMemo(() => getAverage(data.yPoints), [data])

  const chartOptions: Options = useMemo(() => {
    if (!plotPoints.length) return {}

    const usersPerBin = data.totalPredicted / CHART_CONFIG.numBins
    const binsData: number[] = Array(CHART_CONFIG.numBins).fill(usersPerBin)

    const maxCVR = Math.max(...plotPoints.map(p => p.y * 100))
    const yAxisMax = Math.ceil(maxCVR / 10) * 10
    const maxUsers = Math.max(...binsData)
    const isFullRange = percentileLower === 0 && percentileUpper === 1

    const columnSeriesData = binsData.map((users, index) => {
      const normalizedHeight = (users / maxUsers) * yAxisMax * CHART_CONFIG.columnHeightScale
      const xPosition = (index + 0.5) * CHART_CONFIG.binSize
      const binLower = (index * CHART_CONFIG.binSize).toFixed(1)
      const binUpper = ((index + 1) * CHART_CONFIG.binSize).toFixed(1)

      const isInsideRange =
        !isFullRange &&
        percentileLower !== undefined &&
        percentileUpper !== undefined &&
        xPosition >= percentileLower &&
        xPosition <= percentileUpper

      const pointConfig: Record<string, unknown> = {
        x: xPosition,
        y: normalizedHeight,
        actualUsers: users,
        binIndex: index,
        binLower,
        binUpper,
        usersFormatted: formatCompactNumber(users),
      }

      if (isInsideRange) {
        pointConfig.states = {
          hover: {
            color: CHART_COLORS.userBinFill,
            borderColor: CHART_COLORS.userBinBorder,
          },
        }
      }

      return pointConfig
    })

    const columnSeries: SeriesColumnOptions = {
      type: 'column',
      name: `Users per likelihood bin (equally sized groups: ~${formatCompactNumber(usersPerBin)} each)`,
      data: columnSeriesData,
      color: CHART_COLORS.userBinFill,
      enableMouseTracking: true,
      showInLegend: true,
      groupPadding: 0,
      pointRange: CHART_CONFIG.binSize,
      borderWidth: 1,
      borderColor: CHART_COLORS.userBinBorder,
      states: {
        hover: {
          color: CHART_COLORS.userBinFillHover,
          borderColor: CHART_COLORS.userBinBorder,
        },
      },
    }

    const averageCVR = plotAverage * 100

    const cvrDataWithLabels = Array.from({ length: CHART_CONFIG.numBins }, (_, binIndex) => {
      const binLowerBound = binIndex * CHART_CONFIG.binSize
      const binUpperBound = (binIndex + 1) * CHART_CONFIG.binSize
      const binCenter = (binIndex + 0.5) * CHART_CONFIG.binSize
      const pointsInBin = plotPoints.filter(p => p.x >= binLowerBound && p.x < binUpperBound)
      if (pointsInBin.length === 0) return null

      const averageY = getAverage(pointsInBin.map(p => p.y))
      const lift = plotAverage > 0 ? averageY / plotAverage : 0
      const isPositiveLift = lift >= 1.0

      const liftBg = isPositiveLift ? CHART_COLORS.liftPositiveBg : CHART_COLORS.liftNegativeBg
      const liftBorder = isPositiveLift ? CHART_COLORS.liftPositiveBorder : CHART_COLORS.liftNegativeBorder
      const liftText = isPositiveLift ? CHART_COLORS.liftPositiveText : CHART_COLORS.liftNegativeText

      const cvrFormat = `${formatCVRPercent(averageY * 100)}%`
      const binLower = (binIndex * CHART_CONFIG.binSize).toFixed(1)
      const binUpper = ((binIndex + 1) * CHART_CONFIG.binSize).toFixed(1)

      return {
        x: binCenter,
        y: averageY * 100,
        binLower,
        binUpper,
        lift: lift.toFixed(1),
        cvrFormatted: cvrFormat,
        dataLabels: {
          enabled: true,
          format: `<div style="background-color:${liftBg}; border: 1px solid ${liftBorder}; padding: 2px; border-radius: 4px; display: inline-block; margin-bottom: 2px;"><span style="color:${liftText}; font-weight: 600;">${lift.toFixed(
            1,
          )}x</span></div><br/><span style="color:#000; font-weight: 600;">${cvrFormat}</span>`,
          useHTML: true,
          style: {
            fontSize: '10px',
            fontWeight: '600',
            textOutline: 'none',
          },
          backgroundColor: 'transparent',
          borderWidth: 0,
          shadow: false,
        },
      }
    }).filter(Boolean)

    const cvrLineSeries: SeriesLineOptions = {
      type: 'line',
      name: 'Predicted CVR',
      data: cvrDataWithLabels as SeriesLineOptions['data'],
      color: CHART_COLORS.cvrLine,
      lineWidth: 2,
      marker: {
        enabled: true,
        fillColor: CHART_COLORS.cvrLineMarker,
        lineColor: CHART_COLORS.cvrLineMarker,
      },
    }

    const plotBands =
      percentileLower === undefined || percentileUpper === undefined || isFullRange
        ? []
        : [
            {
              from: percentileLower,
              to: percentileUpper,
              color: CHART_COLORS.rangeFill,
              borderColor: CHART_COLORS.rangeBorder,
              borderWidth: 2,
            },
          ]

    const defaultStyle = {
      color: CHART_COLORS.defaultTextColor,
      fontSize: FontSizeSm,
      fontWeight: '400',
      fontFamily: FontFamily,
    }

    return {
      chart: {
        type: 'column',
        height: CHART_CONFIG.height,
      },
      title: { text: undefined },
      xAxis: {
        title: { text: CHART_LABELS.xAxisTitle, style: defaultStyle },
        min: 0,
        max: 1.0,
        labels: { format: CHART_LABELS.xAxisFormat, style: defaultStyle },
        crosshair: true,
        gridLineWidth: 1,
        gridLineColor: CHART_COLORS.gridLine,
        lineColor: CHART_COLORS.gridLine,
        tickWidth: 0,
        plotBands,
      },
      yAxis: {
        title: { text: CHART_LABELS.yAxisTitle, style: defaultStyle },
        labels: { format: CHART_LABELS.yAxisFormat, style: defaultStyle },
        min: 0,
        max: yAxisMax,
        tickInterval: CHART_CONFIG.yAxisTickInterval,
        endOnTick: false,
        startOnTick: true,
        gridLineColor: CHART_COLORS.gridLine,
        lineColor: CHART_COLORS.gridLine,
        tickWidth: 0,
        plotLines: [
          {
            value: averageCVR,
            color: CHART_COLORS.averageLine,
            dashStyle: 'Dot',
            width: 2,
            label: {
              text: `Avg. ${formatCVRPercent(averageCVR)}%`,
              align: 'right',
              style: { ...defaultStyle, color: CHART_COLORS.averageLineLabel, width: 40 },
            },
            zIndex: 3,
          },
        ],
      },
      tooltip: {
        useHTML: true,
        outside: true,
        shared: false,
        formatter(this: unknown) {
          const ctx = this as { point?: Record<string, unknown> & { series?: { type?: string } } }
          const point = ctx.point
          if (!point) return false

          const series = point.series
          let tooltipComponent

          if (series?.type === 'line') {
            tooltipComponent = (
              <ChartTooltip
                title="Predicted CVR & Lift"
                items={[
                  { label: 'Percentile', value: `${point.binLower} to ${point.binUpper}` },
                  { label: 'Predicted CVR', value: String(point.cvrFormatted) },
                  { label: 'Predicted Lift', value: `${point.lift}x` },
                ]}
                descriptions={[
                  'CVR: The average predicted conversion rate for this bin, estimated from historical data.',
                  'Lift: How much better the bin is expected to perform compared to the average CVR.',
                ]}
              />
            )
          } else if (series?.type === 'column') {
            const xValue = typeof point.x === 'number' ? point.x : parseFloat(String(point.x))
            const isInsideRange =
              !isFullRange &&
              percentileLower !== undefined &&
              percentileUpper !== undefined &&
              xValue >= percentileLower &&
              xValue <= percentileUpper

            if (isInsideRange) {
              const rangeCount = Math.round(
                (percentileUpper * 100 - percentileLower * 100) * (data.totalPredicted / 100),
              )
              const numUsers = Math.min(rangeCount, data.totalPredicted)
              const selectedY = plotPoints.filter(p => p.x >= percentileLower && p.x <= percentileUpper).map(p => p.y)
              const predictionRate = getAverage(selectedY)
              const lift = plotAverage > 0 ? predictionRate / plotAverage : 0

              tooltipComponent = (
                <ChartTooltip
                  title="Selected Range"
                  items={[
                    {
                      label: 'Percentile',
                      value: `${percentileLower.toFixed(2)} to ${percentileUpper.toFixed(2)}`,
                    },
                    { label: 'Number of users', value: formatCompactNumber(numUsers) },
                    { label: 'Predicted CVR', value: `${formatCVRPercent(predictionRate * 100)}%` },
                    { label: 'Predicted Lift', value: `${lift.toFixed(1)}x` },
                  ]}
                  descriptions={[
                    "This is the group of users you've highlighted on the curve. Metrics on the left (size, CVR, lift) update dynamically based on this range.",
                  ]}
                />
              )
            } else {
              tooltipComponent = (
                <ChartTooltip
                  title="Prediction Bin"
                  items={[
                    { label: 'Percentile', value: `${point.binLower} to ${point.binUpper}` },
                    { label: 'Number of users', value: `~${point.usersFormatted}` },
                  ]}
                  descriptions={[
                    'Bins are percentile buckets of users by likelihood score. Each bin represents an equally sized group of users, ordered from least to most likely to convert.',
                  ]}
                />
              )
            }
          }

          if (!tooltipComponent) return false
          return renderReactTooltip(tooltipComponent)
        },
      },
      legend: {
        enabled: true,
        align: 'right',
        verticalAlign: 'top',
        useHTML: true,
        itemStyle: defaultStyle,
        labelFormatter(this: unknown) {
          const ctx = this as { name: string }
          if (ctx.name === 'Predicted Lift') {
            return `<div style="display: inline-flex; align-items: center; gap: 8px;">
              <div style="background-color:${CHART_COLORS.liftPositiveBg}; border: 1px solid ${CHART_COLORS.liftPositiveBorder}; padding: 2px 6px; border-radius: 2px; font-size: 10px; font-weight: 600; color:${CHART_COLORS.liftPositiveText};">+</div>
              <div style="background-color:${CHART_COLORS.liftNegativeBg}; border: 1px solid ${CHART_COLORS.liftNegativeBorder}; padding: 2px 6px; border-radius: 2px; font-size: 10px; font-weight: 600; color:${CHART_COLORS.liftNegativeText};">−</div>
              <span>Predicted Lift</span>
            </div>`
          }
          return ctx.name
        },
      },
      series: [
        columnSeries,
        cvrLineSeries,
        {
          type: 'line',
          name: 'Predicted Lift',
          data: [],
          visible: false,
          showInLegend: true,
          marker: { enabled: false, symbol: 'square', radius: 0 },
          lineWidth: 0,
        } as SeriesLineOptions,
      ],
      credits: { enabled: false },
    }
  }, [plotPoints, plotAverage, percentileLower, percentileUpper, data.totalPredicted])

  return (
    <div style={{ width: 900, maxWidth: '100%', margin: '0 auto' }}>
      <HighChart options={chartOptions} fullWidth />
    </div>
  )
}

function makeMockData(): IFutureEventsMockData {
  const xPoints: number[] = []
  const yPoints: number[] = []
  for (let i = 0; i <= 1000; i++) {
    const x = i / 1000
    xPoints.push(x)
    const y = 0.01 + 0.5 / (1 + Math.exp(-10 * (x - 0.7)))
    yPoints.push(y)
  }
  return { xPoints, yPoints, totalPredicted: 1_250_000 }
}

const mockData = makeMockData()

const meta: Meta<typeof FutureEventsChartDemo> = {
  title: 'Components/Charts/Column Chart',
  component: FutureEventsChartDemo,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Column chart with an overlaid line series. Columns represent equally sized bins, the line shows a per-bin metric with lift badges, and a plotBand highlights a selected range.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof FutureEventsChartDemo>

export const Default: Story = {
  args: { data: mockData },
}

export const WithSelectedRange: Story = {
  args: { data: mockData, percentileLower: 0.7, percentileUpper: 1.0 },
}

export const MidRangeSelection: Story = {
  args: { data: mockData, percentileLower: 0.4, percentileUpper: 0.6 },
}
