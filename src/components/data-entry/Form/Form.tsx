import { Form as AntForm } from 'antd'
import { type FormProps as AntFormProps } from 'antd'
import { ConfigProvider } from 'src/components'
import { type ReactNode } from 'react'
import './form.css'
export type { FormInstance } from 'antd'
export interface IFormProps<Values = any> extends AntFormProps<Values> {
  children: ReactNode
}

const InternalForm = <Values = any,>(props: IFormProps<Values>) => {
  return (
    <ConfigProvider>
      <AntForm {...props}>{props.children}</AntForm>
    </ConfigProvider>
  )
}

type FormComponent = typeof InternalForm & {
  useForm: typeof AntForm.useForm
  useWatch: typeof AntForm.useWatch
  useFormInstance: typeof AntForm.useFormInstance
  Item: typeof AntForm.Item
  List: typeof AntForm.List
  Provider: typeof AntForm.Provider
  ErrorList: typeof AntForm.ErrorList
}

export const Form: FormComponent = Object.assign(InternalForm, {
  useForm: AntForm.useForm,
  useWatch: AntForm.useWatch,
  useFormInstance: AntForm.useFormInstance,
  Item: AntForm.Item,
  List: AntForm.List,
  Provider: AntForm.Provider,
  ErrorList: AntForm.ErrorList,
})
