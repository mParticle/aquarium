import { Affix as AntAffix } from 'antd'
import { type AffixProps as AntAffixProps } from 'antd'


export interface IAffixProps extends AntAffixProps {}

export const Affix = (props: IAffixProps) => {
  return <AntAffix {...props} />
}
