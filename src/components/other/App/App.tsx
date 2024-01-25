import { App as AntApp } from 'antd'
import { type AppProps as AntAppProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IAppProps extends AntAppProps {}

export const App = (props: IAppProps) => {
  return (
    <ConfigProvider>
      <AntApp {...props} />
    </ConfigProvider>
  )
}
