import { ConfigProvider as AntConfigProvider } from 'antd'
import type { ConfigProviderProps as AntConfigProviderProps } from 'antd/es/config-provider'
import { LightTheme } from 'design/LightTheme'

export interface IConfigProviderProps extends AntConfigProviderProps {}

const ConfigProviderBase = (props: IConfigProviderProps) => {
  return <AntConfigProvider theme={LightTheme} {...props} />
}

type ConfigProviderComponent = typeof ConfigProviderBase & {
  ConfigContext: typeof AntConfigProvider.ConfigContext
  useConfig: typeof AntConfigProvider.useConfig
  config: (props: unknown) => void
}

export const ConfigProvider = Object.assign(ConfigProviderBase, {
  ConfigContext: AntConfigProvider.ConfigContext,
  useConfig: AntConfigProvider.useConfig,
  config: AntConfigProvider.config as (props: unknown) => void,
}) as ConfigProviderComponent
