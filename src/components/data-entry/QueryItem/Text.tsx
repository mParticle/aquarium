import { type TextProps } from 'antd/es/typography/Text'
import { Typography } from 'src/components/general/Typography/Typography'

export interface ITextProps extends TextProps {
  disabled?: boolean
  type?: TextProps['type']
  children: TextProps['children']
}

const Text = ({ disabled = false, ...props }: ITextProps) => {
  return (
    <Typography.Text disabled={disabled} type={props.type} style={{ whiteSpace: 'nowrap' }}>
      {props.children}
    </Typography.Text>
  )
}

export default Text
