import { Input as AntInput } from "antd";
import { InputProps as AntInputProps } from "antd";

export interface IInputProps extends AntInputProps {
}

export const Input = (props: IInputProps) => <>
  <AntInput {...props}/>
</>;


Input.Group = AntInput.Group
Input.Password = AntInput.Password
Input.Search = AntInput.Search
Input.TextArea = AntInput.TextArea