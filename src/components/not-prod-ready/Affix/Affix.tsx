import { Affix as AntAffix } from 'antd'
import { type AffixProps as AntAffixProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IAffixProps extends AntAffixProps {}

export const Affix = (props: IAffixProps) => {
  return (
    <ConfigProvider>
      <AntAffix {...props} />
    </ConfigProvider>
  )
}
