import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { describe, it, expect, vi } from 'vitest'
import { Icon } from '../Icon'
import type { IIconProps } from '../Icon'

describe('Icon — invalid string name returns null gracefully', () => {
  it('returns null for unknown icon name instead of crashing', () => {
    const bogusName = 'this-icon-does-not-exist' as IIconProps['name']
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const result = Icon({ name: bogusName })

    expect(result).toBe(null)
    expect(errorSpy).toHaveBeenCalledWith('Icon with name "this-icon-does-not-exist" not found.')
    errorSpy.mockRestore()
  })

  it('returns null with explicit variant for unknown icon name', () => {
    const bogusName = 'this-icon-does-not-exist' as IIconProps['name']
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    const result = Icon({ name: bogusName, variant: 'light' })

    expect(result).toBe(null)
    errorSpy.mockRestore()
  })

  it('does not trigger deprecated warning for unknown names', () => {
    const bogusName = 'this-icon-does-not-exist' as IIconProps['name']
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {})

    Icon({ name: bogusName })

    expect(warnSpy).not.toHaveBeenCalled()
    warnSpy.mockRestore()
    errorSpy.mockRestore()
  })
})

describe('Icon — non-string non-component values in component mode', () => {
  it('does not crash during Icon() call with null — createElement succeeds', () => {
    const result = Icon({ name: null as unknown as IIconProps['name'] })
    expect(result).not.toBe(null)
    expect(React.isValidElement(result)).toBe(true)
  })

  it('crashes during actual React rendering with null name', () => {
    expect(() => {
      ReactDOMServer.renderToString(React.createElement(Icon, { name: null as unknown as IIconProps['name'] }))
    }).toThrow()
  })

  it('does not crash during Icon() call with undefined — createElement succeeds', () => {
    const result = Icon({ name: undefined as unknown as IIconProps['name'] })
    expect(result).not.toBe(null)
    expect(React.isValidElement(result)).toBe(true)
  })

  it('crashes during actual React rendering with undefined name', () => {
    expect(() => {
      ReactDOMServer.renderToString(React.createElement(Icon, { name: undefined as unknown as IIconProps['name'] }))
    }).toThrow()
  })

  it('does not crash during Icon() call with 0 — createElement succeeds', () => {
    const result = Icon({ name: 0 as unknown as IIconProps['name'] })
    expect(result).not.toBe(null)
    expect(React.isValidElement(result)).toBe(true)
  })

  it('does not crash during Icon() call with plain object — createElement succeeds', () => {
    const result = Icon({ name: { foo: 'bar' } as unknown as IIconProps['name'] })
    expect(result).not.toBe(null)
    expect(React.isValidElement(result)).toBe(true)
  })
})
