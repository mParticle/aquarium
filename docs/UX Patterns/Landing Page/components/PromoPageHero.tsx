import { Button, Flex, Space, Typography, Icon } from 'src/components'
import type { IconNames } from 'src/types/icons'

export interface PromoPageHeroButton {
  label: string
  onClick?: () => void
  iconName?: IconNames
}

export interface PromoPageHeroProps {
  headline: string
  description: string
  buttons?: {
    defaultButton?: PromoPageHeroButton
    primaryButton?: PromoPageHeroButton
  }
}

export const PromoPageHero = ({ headline, description, buttons }: PromoPageHeroProps) => {
  const renderButtonIcon = (iconName?: IconNames) => {
    if (!iconName) {
      return undefined
    }

    return <Icon name={iconName} size="sm" />
  }

  return (
    <header
      style={{
        padding: '48px',
        borderRadius: 24,
        background:
          'linear-gradient(135deg, rgba(86,104,255,0.16) 0%, rgba(159,102,255,0.24) 50%, rgba(255,137,171,0.16) 100%)',
      }}>
      <Flex vertical gap={24}>
        <Space direction="vertical" size={12}>
          <Typography.Title level={2} style={{ margin: 0 }}>
            {headline}
          </Typography.Title>
          <Typography.Paragraph size="lg" style={{ margin: 0 }}>
            {description}
          </Typography.Paragraph>
        </Space>

        {buttons ? (
          <Space size={12} wrap>
            {buttons.primaryButton ? (
              <Button
                type="primary"
                size="large"
                icon={renderButtonIcon(buttons.primaryButton.iconName)}
                onClick={buttons.primaryButton.onClick}>
                {buttons.primaryButton.label}
              </Button>
            ) : null}
            {buttons.defaultButton ? (
              <Button
                size="large"
                icon={renderButtonIcon(buttons.defaultButton.iconName)}
                onClick={buttons.defaultButton.onClick}>
                {buttons.defaultButton.label}
              </Button>
            ) : null}
          </Space>
        ) : null}
      </Flex>
    </header>
  )
}
