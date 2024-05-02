import { Icon, Button, IButtonProps } from 'src/components'
import './query-item.css'

export interface IActionProps {
  type?: 'disabled' | 'primary' | 'default'
  text?: string
  onClick?: () => void
}

export const Action = (props: IActionProps) => {
  let buttonClassNames: string = 'query-item query-item--action'
  if ((props.type ?? 'default') !== 'primary') buttonClassNames += ` query-item--secondary`

  const baseProps: IButtonProps = {
    className: buttonClassNames,
    type: props.type === 'disabled' ? 'default' : 'primary',
    disabled: props.type === 'disabled',
    onClick: props.onClick,
  }

  let iconColor: 'primary' | 'default' = 'primary'
  if (props.type == 'default') iconColor = 'default'
  if (props.type == 'disabled') iconColor = 'default'

  return (
    <>
      <Button {...baseProps}>
        <Icon name="add" size="md" color={iconColor} />
        <span>{props.text}</span>
      </Button>
    </>
  )
}
