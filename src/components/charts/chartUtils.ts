import { type ReactElement } from 'react'
import { createRoot } from 'react-dom/client'
import { flushSync } from 'react-dom'

export function getAverage(numbers: number[] = []): number {
  if (!numbers.length) return 0
  return numbers.reduce((a, b) => a + b, 0) / numbers.length
}

export function formatCompactNumber(value: number, decimals: number = 1): string {
  if (value == null || isNaN(value)) return '0'
  const absValue = Math.abs(value)
  const sign = value < 0 ? '-' : ''
  if (absValue >= 1_000_000_000) return `${sign}${(absValue / 1_000_000_000).toFixed(decimals)}B`
  if (absValue >= 1_000_000) return `${sign}${(absValue / 1_000_000).toFixed(decimals)}M`
  if (absValue >= 1_000) {
    const kValue = absValue / 1_000
    const rounded = parseFloat(kValue.toFixed(decimals))
    if (rounded >= 1000) return `${sign}${(absValue / 1_000_000).toFixed(decimals)}M`
    return `${sign}${kValue.toFixed(decimals)}k`
  }
  return value.toLocaleString()
}

export function renderReactTooltip(component: ReactElement): string {
  const div = document.createElement('div')
  const root = createRoot(div)
  flushSync(() => {
    root.render(component)
  })
  const html = div.innerHTML
  root.unmount()
  return html
}
