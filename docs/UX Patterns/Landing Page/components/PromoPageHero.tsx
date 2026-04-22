import type { ReactNode } from 'react'
import React from 'react'
import { Flex, Typography } from 'src/components'
import { Size } from 'src/styles/style'
import { PromoPageButton, type IPromoPageButtonProps } from './PromoPageButton'

export interface PromoPageHeroButtons {
  defaultButton?: Omit<IPromoPageButtonProps, 'type'>
  primaryButton: Omit<IPromoPageButtonProps, 'type'> | ReactNode
}

export interface PromoPageHeroProps {
  headline: string
  description: string
  buttons?: PromoPageHeroButtons
  children?: ReactNode
}

export const PromoPageHero = ({ headline, description, buttons, children }: PromoPageHeroProps) => (
  <Flex vertical align="center" justify="center">
    <Flex vertical align="center" gap={Size}>
      <Typography.Title level={3} style={{ margin: 0, fontWeight: 600 }}>
        {headline}
      </Typography.Title>

      <Typography.Paragraph color="ColorTextDescription" style={{ margin: 0, textAlign: 'center' }}>
        {description}
      </Typography.Paragraph>

      <Flex align="center" justify="center" gap={Size}>
        {buttons ? renderButtons(buttons) : children}
      </Flex>
    </Flex>
  </Flex>
)

function renderButtons(buttons: PromoPageHeroButtons): ReactNode {
  const { defaultButton, primaryButton } = buttons

  return (
    <>
      {defaultButton && <PromoPageButton {...defaultButton} type="default" />}
      {React.isValidElement(primaryButton) ? (
        primaryButton
      ) : (
        <PromoPageButton type="primary" {...(primaryButton as Omit<IPromoPageButtonProps, 'type'>)} />
      )}
    </>
  )
}
