import { Tooltip as AntTooltip } from 'antd'
import { type TooltipPropsWithTitle as AntTooltipPropsWithTitle } from 'antd/es/tooltip'
import { ConfigProvider } from 'src/components'

export interface ITooltipProps extends AntTooltipPropsWithTitle {}

export const Tooltip = (props: ITooltipProps) => {
  return (
    <ConfigProvider>
      <AntTooltip {...props} />
    </ConfigProvider>
  )
}
