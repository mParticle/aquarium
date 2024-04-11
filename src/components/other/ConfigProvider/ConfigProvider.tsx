import { ConfigProvider as AntConfigProvider } from 'antd'
import { type ConfigProviderProps as AntConfigProviderProps } from 'antd/es/config-provider'
import { ThemeContext } from '../ThemeContext/ThemeContext'

export interface IConfigProviderProps extends AntConfigProviderProps {}

export const ConfigProvider = (props: IConfigProviderProps) => {
  return (
    <ThemeContext.Consumer>
      {theme => <AntConfigProvider {...props} theme={theme} />}
    </ThemeContext.Consumer>
  )
}

ConfigProvider.ConfigContext = AntConfigProvider.ConfigContext
ConfigProvider.useConfig = AntConfigProvider.useConfig
ConfigProvider.config = AntConfigProvider.config
