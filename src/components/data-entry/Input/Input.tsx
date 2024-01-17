import { Input as AntInput, type InputProps as AntInputProps } from "antd";

interface IInputProps extends AntInputProps {}

export const Input = (props: IInputProps) => (
  <>
    <AntInput {...props} />
  </>
);

Input.Group = AntInput.Group;
Input.Password = AntInput.Password;
Input.Search = AntInput.Search;
Input.TextArea = AntInput.TextArea;
