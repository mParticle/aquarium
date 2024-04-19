import { AddIcon, Button } from 'src/components'
import './query-item.css'

export interface IActionProps {
  isPrimary?: boolean
  isDisabled?: boolean
  text?: string
  onClick?: () => void
}

export const Action = (props: IActionProps) => {
  const buttonClassNames: string = props.isPrimary
    ? 'query-item query-item--action'
    : 'query-item query-item--action query-item--secondary'
  return (
    <>
      <Button className={buttonClassNames} type={props.isPrimary ? 'primary' : 'default'} disabled={props.isDisabled} onClick={props.onClick}>
        <AddIcon className="query-item__icon" />
        <span>{props.text}</span>
      </Button>
    </>
  )
}
