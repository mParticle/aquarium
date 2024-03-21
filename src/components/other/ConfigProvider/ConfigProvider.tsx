import { ConfigProvider as AntConfigProvider } from 'antd'
import { type ConfigProviderProps as AntConfigProviderProps } from 'antd/es/config-provider'
import { LightTheme } from 'design/LightTheme'

export interface IConfigProviderProps extends AntConfigProviderProps {}

export const ConfigProvider = (props: IConfigProviderProps) => {
  return <AntConfigProvider {...props} theme={LightTheme} />
}
