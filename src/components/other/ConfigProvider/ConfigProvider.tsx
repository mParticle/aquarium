import { ConfigProvider as AntConfigProvider } from 'antd'
import { type ConfigProviderProps as AntConfigProviderProps } from 'antd/es/config-provider'
import { LightTheme } from 'design/LightTheme'

export interface IConfigProviderProps extends AntConfigProviderProps {}

export const ConfigProvider = (props: IConfigProviderProps) => {
  return <AntConfigProvider {...props} theme={LightTheme} />
}

export const withConfigProvider =
  <P extends object>(Component: React.ComponentType<P>) =>
  // eslint-disable-next-line react/display-name
  (props: P) => (
    <ConfigProvider>
      <Component {...props} />
    </ConfigProvider>
  )

ConfigProvider.ConfigContext = AntConfigProvider.ConfigContext
ConfigProvider.useConfig = AntConfigProvider.useConfig
ConfigProvider.config = AntConfigProvider.config
