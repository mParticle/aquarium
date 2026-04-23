import Highcharts, { type Options } from 'highcharts'
import { useEffect, useId, useRef } from 'react'
import { ChartConfig } from 'src/constants/ChartConfig'

export interface IHighChartProps {
  options: Options
  fullWidth?: boolean
  style?: React.CSSProperties
  ref?: React.Ref<HTMLDivElement>
}

export function HighChart({ options, fullWidth, style, ref }: IHighChartProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const chartRef = useRef<Highcharts.Chart | null>(null)
  const id = useId()

  useEffect(() => {
    if (!containerRef.current) return

    const chartOptions: Options = {
      ...ChartConfig,
      title: undefined,
      ...options,
      chart: {
        ...ChartConfig.chart,
        ...options.chart,
        renderTo: containerRef.current,
      },
    }

    chartRef.current = Highcharts.chart(chartOptions)

    return () => {
      chartRef.current?.destroy()
      chartRef.current = null
    }
  }, [options])

  return (
    <div
      id={`highchart-${id}`}
      ref={node => {
        containerRef.current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node
      }}
      style={{ width: fullWidth ? '100%' : 'auto', ...style }}
    />
  )
}
