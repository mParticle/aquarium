import { Typography } from 'src/components/general/Typography/Typography'

export interface ITextProps {
  disabled?: boolean
  text: string
  /**
   * @deprecated Not being used by the component, included here to fix runtime typing problems. Needs to be worked on
   */
  className?: string
}

const Text = ({ disabled = false, text }: ITextProps) => {
  return (
    <Typography.Text disabled={disabled} style={{ whiteSpace: 'nowrap' }}>
      {text}
    </Typography.Text>
  )
}

export default Text
