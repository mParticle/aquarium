import { DatePicker as AntDatePicker } from "antd";
import { PickerDateProps } from "antd/es/date-picker/generatePicker";
import { Dayjs } from "dayjs";
import { ConfigProvider } from "src/components";

type AntDatePickerProps = PickerDateProps<Dayjs>

export interface IDatePickerProps extends AntDatePickerProps {
}

export const DatePicker = (props: IDatePickerProps) => {
  return <ConfigProvider>
    <AntDatePicker {...props}/>
  </ConfigProvider>;
};