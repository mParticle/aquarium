import { Card, Button, Typography, Icon } from 'src/components'
import type { IconNames } from 'src/types/icons'
import type { MouseEventHandler } from 'react'

type PromoPageCardLink = {
  type: 'link'
  src: string
  text: string
}

type PromoPageCardButton = {
  type: 'button'
  text: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  iconName?: IconNames
  variant?: 'primary' | 'default'
}

export type PromoPageCardDisplayOptions = PromoPageCardLink | PromoPageCardButton

export interface PromoPageCardProps {
  title: string
  description: string
  displayOptions?: PromoPageCardDisplayOptions
}

export const PromoPageCard = ({ title, description, displayOptions }: PromoPageCardProps) => {
  const renderDisplayOption = () => {
    if (!displayOptions) {
      return null
    }

    if (displayOptions.type === 'link') {
      return (
        <Typography.Link href={displayOptions.src} target="_blank" rel="noreferrer">
          {displayOptions.text}
        </Typography.Link>
      )
    }

    return (
      <Button
        type={displayOptions.variant ?? 'default'}
        icon={displayOptions.iconName ? <Icon name={displayOptions.iconName} size="sm" /> : undefined}
        onClick={displayOptions.onClick}>
        {displayOptions.text}
      </Button>
    )
  }

  return (
    <Card
      style={{
        borderRadius: 16,
        minHeight: 220,
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        padding: 24,
      }}>
      <div>
        <Typography.Title level={4} style={{ margin: 0 }}>
          {title}
        </Typography.Title>
        <Typography.Paragraph size="lg" style={{ marginTop: 12 }}>
          {description}
        </Typography.Paragraph>
      </div>
      <div style={{ marginTop: 'auto' }}>{renderDisplayOption()}</div>
    </Card>
  )
}
