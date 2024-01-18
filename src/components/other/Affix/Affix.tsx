import { Affix as AntAffix, type AffixProps as AntAffixProps } from 'antd'

export interface IAffixProps extends AntAffixProps {}

export const Affix = (props: IAffixProps) => {
  return (
    <>
      <AntAffix {...props} />
    </>
  )
}
