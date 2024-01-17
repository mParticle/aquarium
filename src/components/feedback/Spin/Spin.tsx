import { Spin as AntSpin, type SpinProps as AntSpinProps } from "antd";

export interface ISpinProps extends AntSpinProps {}

export const Spin = (props: ISpinProps) => {
  return (
    <>
      <AntSpin {...props} />
    </>
  );
};
