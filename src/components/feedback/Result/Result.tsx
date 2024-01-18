import { Result as AntResult, type ResultProps as AntResultProps } from 'antd'

export interface IResultProps extends AntResultProps {}

export const Result = (props: IResultProps) => {
  return (
    <>
      <AntResult {...props} />
    </>
  )
}
