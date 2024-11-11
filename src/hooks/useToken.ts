import type { GlobalToken } from 'antd'
import { theme } from 'antd'

export const useTokens = () => theme.useToken().token
export const useToken = (token: keyof GlobalToken) => useTokens()[token]
