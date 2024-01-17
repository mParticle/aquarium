import {
  Popover as AntPopover,
  type PopoverProps as AntPopoverProps,
} from "antd";

export interface IPopoverProps extends AntPopoverProps {}

export const Popover = (props: IPopoverProps) => {
  return (
    <>
      <AntPopover {...props} />
    </>
  );
};
