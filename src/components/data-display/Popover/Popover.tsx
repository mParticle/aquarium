import { Popover as AntPopover } from 'antd'
import { type PopoverProps as AntPopoverProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IPopoverProps extends AntPopoverProps {}

export const Popover = (props: IPopoverProps) => {
  return (
    <ConfigProvider>
      <AntPopover {...props} />
    </ConfigProvider>
  )
}
