import { Form as AntForm } from 'antd'
import { type FormProps as AntFormProps } from 'antd'
import { ConfigProvider } from 'src/components'
import { type ReactNode } from "react";

export interface IFormProps extends AntFormProps {
  children: ReactNode
}

export const Form = (props: IFormProps) => {
  return (
    <ConfigProvider>
      <AntForm {...props}>{props.children}</AntForm>
    </ConfigProvider>
  )
}

Form.useForm = AntForm.useForm
Form.useWatch = AntForm.useWatch
Form.useFormInstance = AntForm.useFormInstance

Form.Item = AntForm.Item
Form.List = AntForm.List
Form.displayName = AntForm.displayName
Form.Provider = AntForm.Provider
Form.ErrorList = AntForm.ErrorList