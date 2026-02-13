import type { ReactNode } from 'react'

export interface PromoPageProps {
  children: ReactNode
}

export const PromoPage = ({ children }: PromoPageProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 48,
        padding: '48px 32px 64px',
        backgroundColor: '#ffffff',
      }}>
      {children}
    </div>
  )
}
