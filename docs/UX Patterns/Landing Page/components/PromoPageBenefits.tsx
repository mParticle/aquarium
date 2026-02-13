import type { ReactNode } from 'react'
import { Flex, Typography } from 'src/components'

export interface PromoPageBenefitsProps {
  title: string
  children: ReactNode
}

export const PromoPageBenefits = ({ title, children }: PromoPageBenefitsProps) => {
  return (
    <section>
      <Flex vertical gap={32}>
        <Typography.Title level={3} style={{ margin: 0 }}>
          {title}
        </Typography.Title>
        <div
          style={{
            display: 'grid',
            gap: 24,
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          }}>
          {children}
        </div>
      </Flex>
    </section>
  )
}
