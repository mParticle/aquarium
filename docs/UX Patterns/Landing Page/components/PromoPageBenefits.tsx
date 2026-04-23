import type { ReactNode } from 'react'
import { Flex, Typography } from 'src/components'
import { Margin, Size } from 'src/styles/style'

export interface PromoPageBenefitsProps {
  title?: string
  children: ReactNode
}

export const PromoPageBenefits = ({ title, children }: PromoPageBenefitsProps) => (
  <Flex vertical align="center" gap={Size}>
    {title && (
      <Typography.Text strong size="lg" color="ColorTextSecondary" style={{ marginBottom: Margin }}>
        {title}
      </Typography.Text>
    )}

    <Flex gap={48} wrap align="stretch" justify="center">
      {children}
    </Flex>
  </Flex>
)
