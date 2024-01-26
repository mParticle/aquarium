// From https://ant.design/docs/react/customize-theme
// Run this script and copy the globalToken into /design/GlobalToken.json

import { theme } from 'antd'
import { type AliasToken } from 'antd/es/theme/interface'
import useTheme from 'antd/es/config-provider/hooks/useTheme'

export function GetGlobalToken(): React.ReactNode {
  const { getDesignToken } = theme

  function wrapValuesInObject(obj: AliasToken) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => {
        const pxKeys = ['padding', 'margin', 'borderRadius', 'screen', 'size', 'font']

        const addPx = typeof value === 'number' && pxKeys.some(k => (key + '').toLowerCase().includes(k.toLowerCase()))

        if (addPx) value += 'px'

        // remove newlines [from properties like box-shadow]
        if (typeof value === 'string') value = value.replace(/[\r\n]/gm, '')

        return [key, { value }]
      }),
    )
  }

  const globalToken = wrapValuesInObject(getDesignToken(useTheme()))

  return <>{JSON.stringify(globalToken, null, 1)}</>
}