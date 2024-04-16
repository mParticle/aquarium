import { Text as BaseText } from 'src/components/general/Typography/Typography'

export interface IActionProps {
  disabled?: boolean
  text: string
}

export const Text = ({ disabled = false, text }: IActionProps) => {
  return <BaseText disabled={disabled}>{text}</BaseText>;
}

export default Text
