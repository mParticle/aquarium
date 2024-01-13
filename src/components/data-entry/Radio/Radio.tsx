import { Radio as AntRadio } from "antd";
import { RadioProps as AntRadioProps } from "antd";

export interface IRadioProps extends AntRadioProps {
}

export const Radio = (props: IRadioProps) => {
  return <>
    <AntRadio {...props}/>
  </>;
};

Radio.Group = AntRadio.Group;
Radio.Button = AntRadio.Button;