import { Alert as AntAlert } from 'antd'
import { type AlertProps as AntAlertProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IAlertProps extends AntAlertProps {}

export const Alert = (props: IAlertProps) => {
  return (
    <ConfigProvider>
      <AntAlert {...props} />
    </ConfigProvider>
  )
}

Alert.ErrorBoundary = AntAlert.ErrorBoundary