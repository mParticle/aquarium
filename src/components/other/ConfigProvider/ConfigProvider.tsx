import { ConfigProvider as AntConfigProvider } from 'antd'
import { type ConfigProviderProps as AntConfigProviderProps } from 'antd/es/config-provider'
// import { LightTheme } from 'design/LightTheme'
import { type IMpThemeConfig } from 'design/MpThemeConfig'
import { RoktTheme } from 'design/RoktTheme'

export interface IConfigProviderProps extends Omit<AntConfigProviderProps, 'theme'> {
  theme?: IMpThemeConfig
}

export const ConfigProvider = ({ theme = RoktTheme, ...props }: IConfigProviderProps) => {
  return <AntConfigProvider theme={theme} {...props} />
}

ConfigProvider.ConfigContext = AntConfigProvider.ConfigContext
ConfigProvider.useConfig = AntConfigProvider.useConfig
ConfigProvider.config = AntConfigProvider.config
