import { Drawer as AntDrawer, Popover as AntPopver } from 'antd'
import { type DrawerProps as AntDrawerProps, type PopoverProps as AntPopoverProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IDrawerProps extends AntDrawerProps {}

export const Drawer = (props: IDrawerProps) => {
  return (
    <ConfigProvider>
      <AntDrawer {...props} />
    </ConfigProvider>
  )
}

export interface IPopoverProps extends AntPopoverProps {}

export const Popover = (props: IPopoverProps) => {
  return (
    <ConfigProvider>
      <AntPopver {...props} />
    </ConfigProvider>
  )
}
