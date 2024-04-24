import { AddIcon, Button, IButtonProps } from 'src/components'
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

  return (
    <>
      <Button {...baseProps}>
        <AddIcon className="query-item__icon" />
        <span>{props.text}</span>
      </Button>
    </>
  )
}
