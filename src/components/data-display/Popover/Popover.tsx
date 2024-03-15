import { Popover as AntPopover } from 'antd'
import { type PopoverProps as AntPopoverProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IPopoverProps extends AntPopoverProps {}

export const Popover = (props: IPopoverProps) => {
  return (
    <ConfigProvider>
      <AntPopover {...props}>
        {/* Fragment fixes popover sometimes not showing */}
        {/* https://github.com/ant-design/ant-design/issues/15909 */}
        <>{props.children}</>
      </AntPopover>
    </ConfigProvider>
  )
}
