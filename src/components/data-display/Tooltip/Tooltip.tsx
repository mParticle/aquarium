import { Tooltip as AntTooltip } from 'antd'
import { type TooltipPropsWithTitle as AntTooltipPropsWithTitle } from 'antd/es/tooltip'

export interface ITooltipProps extends AntTooltipPropsWithTitle {}

export const Tooltip = (props: ITooltipProps) => {
  return (
    <AntTooltip {...props}>
      {/* Fragment fixes tooltip sometimes not showing */}
      {/* https://github.com/ant-design/ant-design/issues/15909 */}
      <>{props.children}</>
    </AntTooltip>
  )
}
