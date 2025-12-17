import React from 'react'
import { Flex, Typography } from 'src/components'
import roktLogo from './rokt-logo.svg'
import { SizeSm, Margin, ColorTextSecondary } from 'src/styles/style'

export interface ISidebarHeaderProps {
  title: string
  subtitle?: string
  onClick?: () => void
}

export function SidebarHeader({ title, subtitle, onClick }: ISidebarHeaderProps) {
  return (
    <Flex
      align="center"
      gap={SizeSm}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default', marginBottom: Margin }}>
      <img src={roktLogo} alt="Rokt" width={43} height={43} />
      <Flex vertical>
        <Typography.Text strong size="lg" style={{ color: ColorTextSecondary }}>
          {title}
        </Typography.Text>
        {subtitle && (
          <Typography.Text style={{ marginTop: '-2px', color: ColorTextSecondary }}>{subtitle}</Typography.Text>
        )}
      </Flex>
    </Flex>
  )
}
