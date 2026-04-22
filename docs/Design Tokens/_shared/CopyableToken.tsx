import { useState } from 'react'
import { Icon, Tooltip } from 'src/components'
import { RoktCheck, RoktCopy } from 'src/components/icons'
import {
  ColorBgLayout,
  ColorTextSecondary,
  FontFamilyCode,
  FontSizeSm,
  PaddingXs,
  PaddingXxs,
  BorderRadiusSm,
} from 'src/styles/style'

export function CopyableToken({ name }: { name: string }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(name)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <Tooltip title={copied ? 'Copied!' : 'Copy to clipboard'}>
      <button
        type="button"
        onClick={() => {
          void handleCopy()
        }}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: PaddingXxs,
          padding: `${PaddingXxs} ${PaddingXs}`,
          backgroundColor: ColorBgLayout,
          border: 'none',
          borderRadius: BorderRadiusSm,
          fontFamily: FontFamilyCode,
          fontSize: FontSizeSm,
          lineHeight: 1,
          color: ColorTextSecondary,
          cursor: 'pointer',
        }}>
        <span>{name}</span>
        <Icon name={copied ? RoktCheck : RoktCopy} size="xs" color={copied ? 'success' : 'inherit'} />
      </button>
    </Tooltip>
  )
}
