import { Actions as AntActions, type ActionsProps as AntActionsProps } from '@ant-design/x'
import { ConfigProvider } from 'src/components'

export type IActionsProps = AntActionsProps

export const Actions = (props: IActionsProps) => {
  return (
    <ConfigProvider>
      <AntActions {...props} />
    </ConfigProvider>
  )
}
