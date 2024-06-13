import { Form as AntForm } from 'antd'
import { type FormProps as AntFormProps } from 'antd'
import { type ReactNode } from 'react'

export interface IFormProps extends AntFormProps {
  children: ReactNode
}

export const Form = (props: IFormProps) => {
  return <AntForm {...props}>{props.children}</AntForm>
}

Form.useForm = AntForm.useForm
Form.useWatch = AntForm.useWatch
Form.useFormInstance = AntForm.useFormInstance

Form.Item = AntForm.Item
Form.List = AntForm.List
Form.Provider = AntForm.Provider
Form.ErrorList = AntForm.ErrorList
