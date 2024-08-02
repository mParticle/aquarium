import { Form as AntForm } from 'antd'
import { type FormProps as AntFormProps } from 'antd'
import { ConfigProvider } from 'src/components'
import { type ReactNode } from 'react'
export type { FormInstance } from 'antd'
export interface IFormProps<Values = any> extends AntFormProps<Values> {
  children: ReactNode
}

export const Form = <Values = any>(props: IFormProps<Values>) => {
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
Form.Provider = AntForm.Provider
Form.ErrorList = AntForm.ErrorList
