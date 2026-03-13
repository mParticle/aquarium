import { type Options } from 'highcharts'
const ChartFontFamily = "'Inter', -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"

export const ChartAxisStyle = {
  'font-family': ChartFontFamily,
  'font-size': '.9em',
  'font-weight': 'initial',
  color: 'rgba(56, 60, 67, 0.7)',
} as const

export const ChartConfig: Options = {
  chart: {
    animation: true,
    backgroundColor: undefined,
    plotBackgroundColor: undefined,
    plotBorderWidth: 0,
    plotShadow: false,
    borderRadius: 0,
    styledMode: false,
  },

  plotOptions: {
    series: {
      marker: {
        enabled: true,
        lineWidth: 2,
        lineColor: undefined,
        radius: 3,
        symbol: 'circle',
        states: {
          select: {},
        },
      },
      animation: { duration: 200 },
      states: { inactive: { opacity: 1 } },
      dataLabels: {
        borderWidth: 6,
        color: 'white',
      },
    },

    column: {
      animation: true,
      maxPointWidth: 350,
    },

    area: {
      animation: true,
      trackByArea: true,
      stickyTracking: false,
      fillOpacity: 1,
    },

    pie: {
      animation: true,
      allowPointSelect: true,
      dataLabels: {
        enabled: true,
        style: {
          fontWeight: 'initial',
        },
      },
      showInLegend: true,
    },
  },

  xAxis: {
    labels: {
      enabled: true,
      style: ChartAxisStyle,
      y: 25,
    },
    title: {
      style: ChartAxisStyle,
    },
    lineWidth: 1,
    tickWidth: 1,
    minPadding: 0,
    maxPadding: 0,
    startOnTick: false,
    endOnTick: false,
  },

  yAxis: {
    gridLineColor: '#f2f4f7',
    lineColor: '#8a95a4',
    lineWidth: 1,
    title: {
      style: ChartAxisStyle,
    },
    labels: {
      enabled: true,
      style: ChartAxisStyle,
    },
    reversedStacks: false,
    stackLabels: {
      crop: false,
      useHTML: true,
      y: 4,
    },
  },

  credits: { enabled: false },
  exporting: { enabled: false },
}
