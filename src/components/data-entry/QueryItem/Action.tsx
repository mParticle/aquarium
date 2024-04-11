import { AddIcon, Button } from 'src/components'

export interface IActionProps {
  isPrimary?: boolean
  isDisabled?: boolean
  text?: string
}

function Action(props: IActionProps) {
  const buttonClassNames: string = props.isPrimary
    ? 'query-item query-item-action'
    : 'query-item query-item-action query-item-action--secondary'
  return (
    <>
      <Button className={buttonClassNames} type={props.isPrimary ? 'primary' : 'default'} disabled={props.isDisabled}>
        <AddIcon className="query-item-action__icon" />
        <span>{props.text}</span>
      </Button>
    </>
  );
}

export default Action
