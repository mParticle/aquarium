import { type Meta, type StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  FontSize,
  FontSizeSm,
  FontSizeLg,
  FontSizeXl,
  FontSizeHeading1,
  FontSizeHeading2,
  FontSizeHeading3,
  FontSizeHeading4,
  FontSizeHeading5,
  FontSizeIcon,
  FontFamily,
  FontFamilyCode,
} from 'src/styles/style'

const meta: Meta = {
  title: 'EOY Cleanup/Typography',
}

export default meta
type Story = StoryObj

const CopyableName = ({ name, tokenName }: { name: string; tokenName: string }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(tokenName)
      setCopied(true)
      setShowTooltip(true)
      setTimeout(() => {
        setCopied(false)
        setShowTooltip(false)
      }, 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <span
        onClick={e => {
          void handleCopy(e)
        }}
        onMouseEnter={() => !copied && setShowTooltip(true)}
        onMouseLeave={() => !copied && setShowTooltip(false)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: '#f5f5f5',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: FontSizeSm,
          fontFamily: FontFamilyCode,
          cursor: 'pointer',
          position: 'relative',
        }}>
        {name}
        {showTooltip && (
          <div
            style={{
              position: 'absolute',
              bottom: '100%',
              left: '50%',
              transform: 'translateX(-50%)',
              marginBottom: '8px',
              backgroundColor: '#333',
              color: '#fff',
              padding: '6px 10px',
              borderRadius: '4px',
              fontSize: '12px',
              whiteSpace: 'nowrap',
              zIndex: 1000,
              pointerEvents: 'none',
            }}>
            {copied ? 'Copied!' : 'Copy to clipboard'}
            <div
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                borderLeft: '6px solid transparent',
                borderRight: '6px solid transparent',
                borderTop: '6px solid #333',
              }}
            />
          </div>
        )}
      </span>
    </div>
  )
}

const TypographyRow = ({
  fontSize,
  displayName,
  tokenName,
}: {
  fontSize: string
  displayName: string
  tokenName: string
}) => {
  const fontSizeNumber = parseInt(fontSize.replace('px', ''))

  return (
    <tr>
      <td
        style={{
          width: '25%',
          padding: '12px 16px',
          borderBottom: '1px solid #f0f0f0',
          fontSize: FontSize,
          color: 'rgba(0, 0, 0, 0.88)',
          fontFamily: FontFamily,
        }}>
        <div
          style={{
            fontSize: fontSize,
            fontWeight: 400,
            minWidth: fontSizeNumber >= 30 ? '60px' : '40px',
            fontFamily: FontFamily,
          }}>
          Aa
        </div>
      </td>
      <td
        style={{
          width: '25%',
          padding: '12px 16px',
          borderBottom: '1px solid #f0f0f0',
          fontSize: FontSize,
          color: 'rgba(0, 0, 0, 0.88)',
          fontFamily: FontFamily,
        }}>
        {displayName}
      </td>
      <td
        style={{
          width: '25%',
          padding: '12px 16px',
          borderBottom: '1px solid #f0f0f0',
          fontSize: FontSize,
          color: 'rgba(0, 0, 0, 0.88)',
          fontFamily: FontFamily,
        }}>
        <CopyableName name={tokenName} tokenName={tokenName} />
      </td>
      <td
        style={{
          width: '25%',
          padding: '12px 16px',
          borderBottom: '1px solid #f0f0f0',
          fontSize: FontSize,
          color: 'rgba(0, 0, 0, 0.88)',
          fontFamily: FontFamily,
        }}>
        {fontSize}
      </td>
    </tr>
  )
}

export const FontSizes: Story = {
  render: () => {
    return (
      <>
        <h2>Font Sizes</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#fafafa' }}>
              <th
                style={{
                  width: '25%',
                  textAlign: 'left',
                  padding: '12px 16px',
                  borderBottom: '1px solid #f0f0f0',
                  fontWeight: 600,
                  fontSize: FontSize,
                  color: 'rgba(0, 0, 0, 0.88)',
                  background: '#fafafa',
                  fontFamily: FontFamily,
                }}>
                Example
              </th>
              <th
                style={{
                  width: '25%',
                  textAlign: 'left',
                  padding: '12px 16px',
                  borderBottom: '1px solid #f0f0f0',
                  fontWeight: 600,
                  fontSize: FontSize,
                  color: 'rgba(0, 0, 0, 0.88)',
                  background: '#fafafa',
                  fontFamily: FontFamily,
                }}>
                Name
              </th>
              <th
                style={{
                  width: '25%',
                  textAlign: 'left',
                  padding: '12px 16px',
                  borderBottom: '1px solid #f0f0f0',
                  fontWeight: 600,
                  fontSize: FontSize,
                  color: 'rgba(0, 0, 0, 0.88)',
                  background: '#fafafa',
                  fontFamily: FontFamily,
                }}>
                Token name
              </th>
              <th
                style={{
                  width: '25%',
                  textAlign: 'left',
                  padding: '12px 16px',
                  borderBottom: '1px solid #f0f0f0',
                  fontWeight: 600,
                  fontSize: FontSize,
                  color: 'rgba(0, 0, 0, 0.88)',
                  background: '#fafafa',
                  fontFamily: FontFamily,
                }}>
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            <TypographyRow fontSize={FontSizeHeading1} displayName="Heading 1" tokenName="FontSizeHeading1" />
            <TypographyRow fontSize={FontSizeHeading2} displayName="Heading 2" tokenName="FontSizeHeading2" />
            <TypographyRow fontSize={FontSizeHeading3} displayName="Heading 3" tokenName="FontSizeHeading3" />
            <TypographyRow fontSize={FontSizeHeading4} displayName="Heading 4" tokenName="FontSizeHeading4" />
            <TypographyRow fontSize={FontSizeHeading5} displayName="Heading 5" tokenName="FontSizeHeading5" />
            <TypographyRow fontSize={FontSizeXl} displayName="Extra Large" tokenName="FontSizeXl" />
            <TypographyRow fontSize={FontSizeLg} displayName="Large" tokenName="FontSizeLg" />
            <TypographyRow fontSize={FontSize} displayName="Base" tokenName="FontSize" />
            <TypographyRow fontSize={FontSizeSm} displayName="Small" tokenName="FontSizeSm" />
            <TypographyRow fontSize={FontSizeIcon} displayName="Icon" tokenName="FontSizeIcon" />
          </tbody>
        </table>
      </>
    )
  },
}
