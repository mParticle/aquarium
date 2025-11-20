import { ConfigProvider as AntConfigProvider, type ThemeConfig } from 'antd'
import { type ConfigProviderProps as AntConfigProviderProps } from 'antd/es/config-provider'
import { LightTheme } from 'design/LightTheme'
import { type IMpThemeConfig } from 'design/MpThemeConfig'

export interface IConfigProviderProps extends Omit<AntConfigProviderProps, 'theme'> {
  theme?: IMpThemeConfig | ThemeConfig
}

export const ConfigProvider = ({ theme = LightTheme, ...props }: IConfigProviderProps) => {
  return <AntConfigProvider theme={theme} {...props} />
}

ConfigProvider.ConfigContext = AntConfigProvider.ConfigContext
ConfigProvider.useConfig = AntConfigProvider.useConfig
ConfigProvider.config = AntConfigProvider.config
