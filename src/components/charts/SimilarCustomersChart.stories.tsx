import { type Meta, type StoryObj } from '@storybook/react'
import { useMemo } from 'react'
import type { Options, SeriesAreaOptions, SeriesLineOptions } from 'highcharts'
import { HighChart } from 'src/components/charts/HighChart'
import { ChartTooltip } from 'src/components/charts/ChartTooltip'
import { Flex } from 'src/components/layout/Flex/Flex'
import { FontFamily, FontSizeSm } from 'src/styles/style'
import { formatCompactNumber, getAverage, renderReactTooltip } from 'src/components/charts/chartUtils'
import { SimilarCustomersChartColors as CHART_COLORS } from 'src/components/charts/chartColors'

const CHART_LABELS = {
  xAxisTitle: 'Likelihood Percentiles (from least → to most similar)',
  usersAxisTitle: 'Number of Users',
} as const

const CHART_CONFIG = {
  height: 516,
  minX: 0,
  maxX: 1,
  tickIntervalX: 0.1,
  similarityAxisMax: 6.5,
  bandHeightScale: 1.0,
} as const

const DEFAULT_STYLE = {
  color: CHART_COLORS.defaultTextColor,
  fontSize: FontSizeSm,
  fontWeight: '400',
  fontFamily: FontFamily,
} as const

interface IPercentilePoint {
  x: number
  y: number
}

interface ISimilarCustomersMockData {
  xPoints: number[]
  yPoints: number[]
  totalPredicted: number
}

interface ISimilarCustomersChartDemoProps {
  data: ISimilarCustomersMockData
  percentileLower?: number | null
  mostSimilarPercentile: number | null
  moderatelySimilarPercentile: number | null
}

function calculateBinAverages(points: IPercentilePoint[], binSize: number, overallAvg: number): IPercentilePoint[] {
  const binCount = Math.round(1 / binSize)
  const result: IPercentilePoint[] = []
  for (let binIndex = 0; binIndex < binCount; binIndex++) {
    const binLower = binIndex * binSize
    const binUpper = binLower + binSize
    const binCenter = binLower + binSize / 2
    const pointsInBin = points.filter(p => p.x >= binLower && p.x < binUpper)
    const avgRawScore = pointsInBin.length > 0 ? getAverage(pointsInBin.map(p => p.y)) : 0
    const multiplier = overallAvg > 0 ? avgRawScore / overallAvg : 0
    result.push({ x: binCenter, y: multiplier })
  }
  return result
}

function estimateUsersInRange(maxUsers: number, lower: number, upper: number): number {
  return Math.max(0, (upper - lower) * maxUsers)
}

function formatUsers(users: number): string {
  return `~${formatCompactNumber(users, 1).toLowerCase()}`
}

function SimilarCustomersChartDemo({
  data,
  percentileLower,
  mostSimilarPercentile,
  moderatelySimilarPercentile,
}: ISimilarCustomersChartDemoProps) {
  const rawPoints = useMemo<IPercentilePoint[]>(
    () =>
      data.xPoints
        .map((x, i) => ({ x, y: data.yPoints[i] }))
        .filter(p => Number.isFinite(p.x) && Number.isFinite(p.y))
        .sort((a, b) => a.x - b.x),
    [data],
  )

  const overallAvg = useMemo(() => {
    const avg = getAverage(data.yPoints)
    return avg || 1
  }, [data])

  const chartOptions: Options = useMemo(() => {
    const maxUsers = data.totalPredicted
    const yAxisMax = maxUsers * 1.03

    const selectionBand =
      percentileLower !== null && percentileLower !== undefined
        ? [
            {
              from: percentileLower,
              to: 1.0,
              color: CHART_COLORS.selectedRangeFill,
              borderColor: CHART_COLORS.selectedRangeBorder,
              borderWidth: 2,
              zIndex: 1,
            },
          ]
        : []

    const bandHeight = maxUsers * CHART_CONFIG.bandHeightScale
    const createBandData = (xStart: number, xEnd: number): [number, number][] => [
      [xStart, bandHeight],
      [xEnd, bandHeight],
    ]

    const hasValidPercentiles = mostSimilarPercentile !== null && moderatelySimilarPercentile !== null

    const bandSeries: SeriesAreaOptions[] = !hasValidPercentiles
      ? []
      : [
          {
            type: 'area',
            name: 'Dissimilar Users',
            data: createBandData(0, moderatelySimilarPercentile),
            color: CHART_COLORS.dissimilarBand,
            enableMouseTracking: false,
            showInLegend: true,
            lineWidth: 0,
            marker: { enabled: false },
            legendSymbol: 'rectangle',
            zIndex: 2,
            states: { hover: { enabled: false }, inactive: { opacity: 1 } },
          },
          {
            type: 'area',
            name: 'Moderately Similar Users',
            data: createBandData(moderatelySimilarPercentile, mostSimilarPercentile),
            color: CHART_COLORS.moderatelySimilarBand,
            enableMouseTracking: false,
            showInLegend: true,
            lineWidth: 0,
            marker: { enabled: false },
            legendSymbol: 'rectangle',
            zIndex: 2,
            states: { hover: { enabled: false }, inactive: { opacity: 1 } },
          },
          {
            type: 'area',
            name: 'Most Similar Users',
            data: createBandData(mostSimilarPercentile, 1),
            color: CHART_COLORS.mostSimilarBand,
            enableMouseTracking: false,
            showInLegend: true,
            lineWidth: 0,
            marker: { enabled: false },
            legendSymbol: 'rectangle',
            zIndex: 2,
            states: { hover: { enabled: false }, inactive: { opacity: 1 } },
          },
        ]

    const similarityBinned = calculateBinAverages(rawPoints, 0.1, overallAvg)

    const interactionSeries: SeriesAreaOptions = {
      type: 'area',
      name: '__similar_users_interaction__',
      data: Array.from({ length: 101 }, (_, i) => [i / 100, maxUsers] as [number, number]),
      yAxis: 0,
      color: 'rgba(0,0,0,0)',
      fillOpacity: 0.001,
      lineWidth: 0,
      enableMouseTracking: true,
      showInLegend: false,
      marker: { enabled: false },
      states: { hover: { enabled: false }, inactive: { opacity: 1 } },
    }

    const similaritySeries: SeriesLineOptions = {
      type: 'line',
      name: 'Predicted Similarity',
      yAxis: 1,
      data: similarityBinned.map(point => ({
        x: point.x,
        y: point.y,
        dataLabels: {
          enabled: true,
          format: '{y:.1f}×',
          color: CHART_COLORS.predictedSimilarityMarker,
          style: {
            fontSize: FontSizeSm,
            fontWeight: '400',
            textOutline: 'none',
          },
        },
      })),
      color: CHART_COLORS.predictedSimilarityLine,
      lineWidth: 2,
      marker: {
        symbol: 'circle',
        enabled: true,
        fillColor: CHART_COLORS.predictedSimilarityMarker,
        lineColor: CHART_COLORS.predictedSimilarityMarker,
      },
    }

    return {
      chart: { height: CHART_CONFIG.height, spacingTop: 16, animation: false },
      title: { text: undefined },
      plotOptions: {
        series: { animation: false },
        line: { animation: false, states: { inactive: { enabled: false } } },
      },
      xAxis: {
        title: { text: CHART_LABELS.xAxisTitle, style: DEFAULT_STYLE },
        min: CHART_CONFIG.minX,
        max: CHART_CONFIG.maxX,
        tickInterval: CHART_CONFIG.tickIntervalX,
        labels: { format: '{value:.2f}', style: DEFAULT_STYLE },
        gridLineWidth: 1,
        gridLineColor: CHART_COLORS.gridLine,
        lineColor: CHART_COLORS.gridLine,
        tickWidth: 0,
        plotBands: selectionBand,
      },
      yAxis: [
        {
          title: { text: CHART_LABELS.usersAxisTitle, style: DEFAULT_STYLE },
          max: yAxisMax,
          endOnTick: false,
          labels: {
            style: DEFAULT_STYLE,
            formatter(this: unknown) {
              const ctx = this as { value: number | string }
              return formatCompactNumber(Number(ctx.value))
            },
          },
          gridLineColor: CHART_COLORS.gridLine,
          lineColor: CHART_COLORS.gridLine,
          tickWidth: 0,
        },
        {
          title: { text: undefined },
          min: 0,
          max: CHART_CONFIG.similarityAxisMax,
          opposite: true,
          labels: { enabled: false },
          gridLineWidth: 0,
          plotLines: [
            {
              value: 1,
              color: CHART_COLORS.avgLine,
              dashStyle: 'Dot',
              width: 2,
              label: {
                text: 'Avg Similarity Line',
                align: 'left',
                x: 0,
                style: { ...DEFAULT_STYLE, color: CHART_COLORS.avgLineLabel },
              },
              zIndex: 3,
            },
          ],
        },
      ],
      tooltip: {
        useHTML: true,
        shared: false,
        followPointer: false,
        shape: 'rect',
        padding: 12,
        borderRadius: 8,
        borderWidth: 1,
        shadow: { offsetX: 0, offsetY: 2, width: 8, opacity: 0.15 },
        formatter(this: unknown) {
          const ctx = this as {
            point?: { series: { name: string; type: string }; x: number | string; y: number | string }
            x: number | string
          }
          const point = ctx.point
          const seriesName = point?.series?.name
          const xValue = typeof ctx.x === 'number' ? ctx.x : Number.parseFloat(ctx.x)
          if (!Number.isFinite(xValue) || !point) return false

          let tooltipComponent

          if (point.series.type === 'line') {
            const px = typeof point.x === 'number' ? point.x : Number.parseFloat(point.x)
            const py = typeof point.y === 'number' ? point.y : Number.parseFloat(point.y)
            const lower = Math.max(0, px - 0.05)
            const upper = Math.min(1, px + 0.05)
            tooltipComponent = (
              <ChartTooltip
                title="Predicted Similarity per Decile"
                items={[
                  { label: 'Percentiles', value: `${lower.toFixed(2)} to ${upper.toFixed(2)}` },
                  { label: 'Predicted Similarity', value: `${py.toFixed(1)}×` },
                ]}
                descriptions={[
                  'Indicates how similar this decile is to the seed audience, based on behavioral patterns. Calculated as: Decile Similarity Score ÷ Average Similarity Score.',
                ]}
              />
            )
          } else if (xValue >= (percentileLower ?? 0.9)) {
            const usersInRange = estimateUsersInRange(maxUsers, percentileLower ?? 0.9, 1.0)
            const selectedY = rawPoints.filter(p => p.x >= (percentileLower ?? 0.9) && p.x <= 1.0).map(p => p.y)
            const avgRaw = getAverage(selectedY)
            const multiplier = overallAvg > 0 ? avgRaw / overallAvg : 0
            tooltipComponent = (
              <ChartTooltip
                title="Selected Range"
                items={[
                  { label: 'Percentile', value: `${(percentileLower ?? 0.9).toFixed(2)} to 1.00` },
                  { label: 'Number of users', value: formatUsers(usersInRange) },
                  { label: 'Predicted Similarity', value: `${multiplier.toFixed(1)}×` },
                ]}
                descriptions={[
                  "This is the group of users you've highlighted on the curve. Metrics on the left (size, similarity) update dynamically based on this range.",
                ]}
              />
            )
          } else if (seriesName === '__similar_users_interaction__') {
            const bands = [
              { title: 'Dissimilar Users', from: 0, to: moderatelySimilarPercentile ?? 0.6 },
              {
                title: 'Moderately Similar Users',
                from: moderatelySimilarPercentile ?? 0.6,
                to: mostSimilarPercentile ?? 0.85,
              },
              { title: 'Most Similar Users', from: mostSimilarPercentile ?? 0.85, to: 1 },
            ]
            const band = bands.find(b => xValue >= b.from && xValue < b.to) ?? bands[bands.length - 1]
            const usersInBand = estimateUsersInRange(maxUsers, band.from, band.to)
            const descriptions: Record<string, string> = {
              'Dissimilar Users':
                'This group represents users least similar to the seed audience, identified by similarity scores falling below the overall average. Scores are derived from behavioral patterns.',
              'Moderately Similar Users':
                'Users moderately similar to the seed audience, scoring above average but below the 2× similarity threshold. Scores are derived from behavioral patterns.',
              'Most Similar Users':
                'This group represents users most similar to the seed audience, identified by similarity scores falling above the 2× similarity threshold. Scores are derived from behavioral patterns.',
            }
            tooltipComponent = (
              <ChartTooltip
                title={band.title}
                items={[
                  { label: 'Percentiles', value: `${band.from.toFixed(2)} to ${band.to.toFixed(2)}` },
                  { label: 'Number of users', value: formatUsers(usersInBand) },
                ]}
                descriptions={[descriptions[band.title]]}
              />
            )
          }

          if (!tooltipComponent) return false
          return renderReactTooltip(tooltipComponent)
        },
      },
      legend: {
        enabled: true,
        align: 'center',
        verticalAlign: 'top',
        useHTML: true,
        itemStyle: DEFAULT_STYLE,
        margin: 20,
      },
      series: [interactionSeries, ...bandSeries, similaritySeries],
      credits: { enabled: false },
    }
  }, [data.totalPredicted, rawPoints, overallAvg, percentileLower, moderatelySimilarPercentile, mostSimilarPercentile])

  return (
    <Flex style={{ width: 900, maxWidth: '100%', margin: '0 auto' }}>
      <HighChart options={chartOptions} fullWidth />
    </Flex>
  )
}

function makeMockData(): ISimilarCustomersMockData {
  const xPoints: number[] = []
  const yPoints: number[] = []
  for (let i = 0; i <= 1000; i++) {
    const x = i / 1000
    xPoints.push(x)
    // Sigmoid-ish similarity curve rising from ~0.2 to ~4.0 × avg
    const y = 0.2 + 3.8 / (1 + Math.exp(-8 * (x - 0.75)))
    yPoints.push(y)
  }
  return { xPoints, yPoints, totalPredicted: 2_500_000 }
}

const mockData = makeMockData()

const meta: Meta<typeof SimilarCustomersChartDemo> = {
  title: 'Components/Charts/SimilarCustomersChart',
  component: SimilarCustomersChartDemo,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Cortex Similar Customers chart — horizontal bands highlight dissimilar / moderately similar / most similar user groups, with a predicted similarity multiplier line and an optional purple plotBand for the selected range.',
      },
    },
  },
}
export default meta

type Story = StoryObj<typeof SimilarCustomersChartDemo>

export const Default: Story = {
  args: {
    data: mockData,
    moderatelySimilarPercentile: 0.6,
    mostSimilarPercentile: 0.85,
    percentileLower: null,
  },
}

export const WithSelectedRange: Story = {
  args: {
    data: mockData,
    moderatelySimilarPercentile: 0.6,
    mostSimilarPercentile: 0.85,
    percentileLower: 0.9,
  },
}
