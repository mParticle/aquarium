import { Typography } from 'src/components/general/Typography/Typography'

export interface ITextProps {
  disabled?: boolean
  text: string
}

export const Text = ({ disabled = false, text }: ITextProps) => {
  return <Typography.Text disabled={disabled}>{text}</Typography.Text>;
}

export default Text
