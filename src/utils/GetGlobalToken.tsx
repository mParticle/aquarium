// From https://ant.design/docs/react/customize-theme
// Run this script and copy the globalToken into /design/GlobalToken.json

import { theme } from 'antd'
import { type AliasToken } from 'antd/es/theme/interface'
import { LightTheme } from 'design/LightTheme'

export function GetGlobalToken(): React.ReactNode {
  const { getDesignToken } = theme
  const fontFallback =
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"

  function wrapValuesInObject(obj: AliasToken) {
    return Object.fromEntries(
      Object.entries(obj)
        .map(([key, value]) => {
          const pxKeys = ['padding', 'margin', 'borderRadius', 'screen', 'size', 'font', 'width', 'height', 'gap']
          const excludePxKeys = ['lineHeight', 'fontWeight']

          const addPx =
            typeof value === 'number' &&
            pxKeys.some(k => (key + '').toLowerCase().includes(k.toLowerCase())) &&
            !excludePxKeys.some(k => (key + '').toLowerCase().includes(k.toLowerCase()))

          if (addPx) value += 'px'

          // remove newlines [from properties like box-shadow]
          if (typeof value === 'string') value = value.replace(/[\r\n]/gm, '')

          // Add font fallback for font-related properties
          if (key.toLowerCase().includes('fontfamily')) {
            value = `${value}, ${fontFallback}`
          }
          // remove deprecated color key syntax - https://ant.design/changelog#530
          const regex = /-([1-9]|10)$/
          if (regex.test(key)) {
            console.log(key)
            return [null, { value }]
          }
          return [key, { value }]
        })
        .filter(([key]) => key !== null),
    )
  }

  /* eslint-disable @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-explicit-any */
  const globalToken = wrapValuesInObject(getDesignToken(LightTheme))

  return <>{JSON.stringify(globalToken, null, 1)}</>
}
