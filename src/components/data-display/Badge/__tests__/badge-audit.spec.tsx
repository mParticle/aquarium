import { describe, expect, it } from 'vitest'
import type React from 'react'
import { Badge } from '../Badge'

type VdomProps = Record<string, unknown>

describe('Claim 6: Silent fallthrough on filled variant', () => {
  it('variant="filled" with status AND text renders the filled wrapper', () => {
    const result = Badge({
      variant: 'filled',
      status: 'success',
      text: 'Active',
    })

    const configProvider = result as React.ReactElement
    const span = (configProvider.props as VdomProps).children as React.ReactElement
    expect(span.type).toBe('span')
    expect((span.props as VdomProps).className).toContain('mp-badge-filled')
    expect((span.props as VdomProps).className).toContain('mp-badge-filled--success')
    expect((span.props as VdomProps).className).toContain('mp-badge-filled--md')
    expect((span.props as VdomProps).className).toContain('mp-badge-filled--pill')
  })

  it('variant="filled" WITHOUT status falls through to standard AntBadge path (no filled wrapper)', () => {
    const result = Badge({
      variant: 'filled',
      text: 'Active',
    })

    const configProvider = result as React.ReactElement
    const children = (configProvider.props as VdomProps).children as React.ReactElement

    expect((children.props as VdomProps).className ?? '').not.toContain('mp-badge-filled')
    expect(children.type).not.toBe('span')
  })

  it('variant="filled" WITHOUT text falls through to standard AntBadge path (no filled wrapper)', () => {
    const result = Badge({
      variant: 'filled',
      status: 'success',
    })

    const configProvider = result as React.ReactElement
    const children = (configProvider.props as VdomProps).children as React.ReactElement

    expect((children.props as VdomProps).className ?? '').not.toContain('mp-badge-filled')
  })

  it('variant="filled" with NEITHER status NOR text falls through to standard AntBadge path', () => {
    const result = Badge({
      variant: 'filled',
    })

    const configProvider = result as React.ReactElement
    const children = (configProvider.props as VdomProps).children as React.ReactElement

    expect((children.props as VdomProps).className ?? '').not.toContain('mp-badge-filled')
  })
})

describe('Claim 8: Badge size union confusion', () => {
  it('size="lg" without variant="filled" maps to antd size "default" (silent remapping)', () => {
    const result = Badge({
      size: 'lg',
      count: 5,
    })

    const configProvider = result as React.ReactElement
    const antBadge = (configProvider.props as VdomProps).children as React.ReactElement

    expect((antBadge.props as VdomProps).size).toBe('default')
  })

  it('size="md" without variant="filled" also maps to antd size "default"', () => {
    const result = Badge({
      size: 'md',
      count: 5,
    })

    const configProvider = result as React.ReactElement
    const antBadge = (configProvider.props as VdomProps).children as React.ReactElement

    expect((antBadge.props as VdomProps).size).toBe('default')
  })

  it('size="sm" without variant="filled" maps to antd size "small"', () => {
    const result = Badge({
      size: 'sm',
      count: 5,
    })

    const configProvider = result as React.ReactElement
    const antBadge = (configProvider.props as VdomProps).children as React.ReactElement

    expect((antBadge.props as VdomProps).size).toBe('small')
  })

  it('size="small" without variant="filled" maps to antd size "small"', () => {
    const result = Badge({
      size: 'small',
      count: 5,
    })

    const configProvider = result as React.ReactElement
    const antBadge = (configProvider.props as VdomProps).children as React.ReactElement

    expect((antBadge.props as VdomProps).size).toBe('small')
  })

  it('size="lg" WITH variant="filled" (and status+text) applies lg class instead of antd mapping', () => {
    const result = Badge({
      variant: 'filled',
      size: 'lg',
      status: 'success',
      text: 'Active',
    })

    const configProvider = result as React.ReactElement
    const span = (configProvider.props as VdomProps).children as React.ReactElement

    expect((span.props as VdomProps).className).toContain('mp-badge-filled--lg')
  })
})
