import type { ReactNode } from 'react'
import { Flex } from 'src/components'
import { PaddingXl, SizeXxl } from 'src/styles/style'

export interface PromoPageProps {
  children: ReactNode
}

export const PromoPage = ({ children }: PromoPageProps) => (
  <Flex
    vertical
    align="center"
    justify="center"
    gap={SizeXxl}
    style={{ padding: `${SizeXxl} ${PaddingXl}`, minHeight: '100%' }}>
    {children}
  </Flex>
)
