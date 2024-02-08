import { Tooltip as AntTooltip } from 'antd'
import { type TooltipPropsWithTitle as AntTooltipPropsWithTitle } from 'antd/es/tooltip'
import { ConfigProvider } from 'src/components'

export interface ITooltipProps extends AntTooltipPropsWithTitle {}

export const Tooltip = (props: ITooltipProps) => {
  return (
    <ConfigProvider>
      <AntTooltip {...props} >
        {/* Fragment fixes tooltip sometimes not showing */}
        {/*https://github.com/ant-design/ant-design/issues/15909*/}
        <>{props.children}</>
      </AntTooltip>
    </ConfigProvider>
  )
}