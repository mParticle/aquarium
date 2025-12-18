import { Tooltip as AntTooltip, type TooltipProps as AntTooltipProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface ITooltipProps extends AntTooltipProps {}

export const Tooltip = (props: ITooltipProps) => {
  return (
    <ConfigProvider>
      <AntTooltip {...props}>
        {/* Fragment fixes tooltip sometimes not showing */}
        {/* https://github.com/ant-design/ant-design/issues/15909 */}
        <>{props.children}</>
      </AntTooltip>
    </ConfigProvider>
  )
}
