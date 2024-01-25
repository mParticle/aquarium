// From https://ant.design/docs/react/customize-theme

import { theme } from 'antd'
import { type AliasToken } from 'antd/es/theme/interface'
import useTheme from 'antd/es/config-provider/hooks/useTheme'

const { getDesignToken } = theme

function wrapValuesInObject(obj: AliasToken) {
  return Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, { value }]))
}

const globalToken = wrapValuesInObject(getDesignToken(useTheme()))

console.log(globalToken)