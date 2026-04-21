import type { ReactNode } from 'react'
import { Button, Icon, Tooltip } from 'src/components'
import type { IIconProps } from 'src/components'

export type PromoPageButtonType = 'primary' | 'default'

export interface IPromoPageButtonProps {
  type: PromoPageButtonType
  label: string | ReactNode
  onClick?: () => void
  disabled?: boolean
  popoverText?: string
  link?: string
  iconName?: IIconProps['name']
  loading?: boolean
}

export function PromoPageButton({ disabled, ...props }: IPromoPageButtonProps) {
  const shouldOpenNewTab = Boolean(props.link) && !disabled

  const handleClick = () => {
    if (disabled) return
    props.onClick?.()
    if (shouldOpenNewTab && props.link) {
      window.open(props.link, '_blank', 'noopener,noreferrer')
    }
  }

  const button = (
    <Button
      type={props.type}
      disabled={disabled}
      size="middle"
      loading={props.loading}
      icon={props.iconName ? <Icon name={props.iconName} size="sm" /> : null}
      onClick={handleClick}
      {...(shouldOpenNewTab && { href: props.link, target: '_blank', rel: 'noopener noreferrer' })}>
      {props.label}
    </Button>
  )

  if (props.popoverText) {
    return (
      <Tooltip title={props.popoverText} placement="top">
        {button}
      </Tooltip>
    )
  }

  return button
}
