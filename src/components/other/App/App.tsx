import { App as AntApp } from 'antd'
import { type AppProps as AntAppProps } from 'antd'


export interface IAppProps extends AntAppProps {}

export const App = (props: IAppProps) => {
  return <AntApp {...props} />
}

App.useApp = AntApp.useApp
