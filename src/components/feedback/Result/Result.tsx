import { Result as AntResult } from 'antd'
import { type ResultProps as AntResultProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface IResultProps extends AntResultProps {}

/**
 * @deprecated The Result component should not be used without design team permission.
 * Please refer to the Empty component documentation for approved empty/error states.
 * See: Components/Data Display/Empty
 */
export const Result = (props: IResultProps) => {
  return (
    <ConfigProvider>
      <AntResult {...props} />
    </ConfigProvider>
  )
}

Result.PRESENTED_IMAGE_403 = AntResult.PRESENTED_IMAGE_403
Result.PRESENTED_IMAGE_404 = AntResult.PRESENTED_IMAGE_404
Result.PRESENTED_IMAGE_500 = AntResult.PRESENTED_IMAGE_500
