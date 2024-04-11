import { LightTheme } from 'design/LightTheme'
import { IMpThemeConfig } from 'design/MpThemeConfig'
import { Context, ReactNode, createContext } from 'react'

export const ThemeContext: Context<IMpThemeConfig> = createContext(LightTheme)
export type ElementFactory<T> = (props: T) => ReactNode

export function useTheme<T>(theme: IMpThemeConfig, childFactory: ElementFactory<T>): ElementFactory<T> {
  return (props: T) => (
    <ThemeContext.Consumer>
      {parentTheme => <ThemeContext.Provider value={mergeDeep(parentTheme, theme)}>{childFactory(props)}</ThemeContext.Provider> }
    </ThemeContext.Consumer>
  )
}

/** BEGIN: ABPS */
/* Amateurs Borrow Professionals Steal */

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: unknown) {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target: Record<string, unknown>, ...sources: Record<string, unknown>[]) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key] as Record<string, unknown>, source[key] as Record<string, unknown>)
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }

  return mergeDeep(target, ...sources)
}
