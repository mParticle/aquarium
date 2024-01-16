import { ColorPicker as AntColorPicker } from "antd";
import { ColorPickerProps as AntColorPickerProps } from "antd";

export interface IColorPickerProps extends AntColorPickerProps {
}

export const ColorPicker = (props: IColorPickerProps) => {
  return <>
    <AntColorPicker {...props}/>
  </>;
};