import { type Meta, type StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  FontFamily,
  FontFamilyCode,
  FontSize,
  FontSizeSm,
  MpBrandPrimary1,
  MpBrandPrimary2,
  MpBrandPrimary3,
  MpBrandPrimary4,
  MpBrandPrimary5,
  MpBrandPrimary6,
  MpBrandPrimary7,
  MpBrandPrimary8,
  MpBrandPrimary9,
  MpBrandPrimary10,
  MpBrandSecondary1,
  MpBrandSecondary2,
  MpBrandSecondary3,
  MpBrandSecondary4,
  MpBrandSecondary5,
  MpBrandSecondary6,
  MpBrandSecondary7,
  MpBrandSecondary8,
  MpBrandSecondary9,
  MpBrandSecondary10,
  ColorPrimary,
  ColorSuccess,
  ColorWarning,
  ColorError,
  ColorInfo,
  ColorLink,
  ColorText,
  ColorTextSecondary,
  ColorTextTertiary,
  ColorTextQuaternary,
  ColorTextHeading,
  ColorTextLabel,
  ColorTextDescription,
  ColorTextPlaceholder,
  ColorTextDisabled,
  ColorSuccessBg,
  ColorSuccessBorder,
  ColorSuccessText,
  ColorErrorBg,
  ColorErrorBorder,
  ColorErrorText,
  ColorWarningBg,
  ColorWarningBorder,
  ColorWarningText,
  ColorBorder,
  ColorBorderSecondary,
} from 'src/styles/style'

const meta: Meta = {
  title: 'EOY Cleanup/Color Palette',
}

export default meta
type Story = StoryObj

const ColorSwatch = ({ value }: { value: string }) => {
  const isTransparent = value.includes('rgba') || value === 'transparent'
  const opacityMatch = value.match(/rgba?\([^)]+,\s*([\d.]+)\)/)
  const opacity = opacityMatch ? parseFloat(opacityMatch[1]) : 1
  const showCheckerboard = isTransparent && opacity < 0.5

  return (
    <div
      style={{
        width: '60px',
        height: '20px',
        backgroundColor: value,
        borderRadius: '4px',
        border: '1px solid #e5e5e5',
        position: 'relative',
        marginRight: '12px',
      }}>
      {showCheckerboard && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage:
              'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
            backgroundSize: '8px 8px',
            backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
            borderRadius: '4px',
          }}
        />
      )}
    </div>
  )
}

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

const ColorRow = ({
  swatch,
  name,
  tokenName,
  value,
}: {
  swatch: string
  name: string
  tokenName: string
  value: string
}) => {
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
        <ColorSwatch value={swatch} />
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
        {name}
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
          fontFamily: FontFamily,
          fontSize: FontSize,
          color: 'rgba(0, 0, 0, 0.88)',
        }}>
        {value}
      </td>
    </tr>
  )
}

export const Primary: Story = {
  render: () => {
    return (
      <>
        <h2>Brand Colors</h2>
        <h3>Primary</h3>
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
            <ColorRow swatch={MpBrandPrimary1} name="Primary 1" tokenName="MpBrandPrimary1" value={MpBrandPrimary1} />
            <ColorRow swatch={MpBrandPrimary2} name="Primary 2" tokenName="MpBrandPrimary2" value={MpBrandPrimary2} />
            <ColorRow swatch={MpBrandPrimary3} name="Primary 3" tokenName="MpBrandPrimary3" value={MpBrandPrimary3} />
            <ColorRow swatch={MpBrandPrimary4} name="Primary 4" tokenName="MpBrandPrimary4" value={MpBrandPrimary4} />
            <ColorRow swatch={MpBrandPrimary5} name="Primary 5" tokenName="MpBrandPrimary5" value={MpBrandPrimary5} />
            <ColorRow swatch={MpBrandPrimary6} name="Primary 6" tokenName="MpBrandPrimary6" value={MpBrandPrimary6} />
            <ColorRow swatch={MpBrandPrimary7} name="Primary 7" tokenName="MpBrandPrimary7" value={MpBrandPrimary7} />
            <ColorRow swatch={MpBrandPrimary8} name="Primary 8" tokenName="MpBrandPrimary8" value={MpBrandPrimary8} />
            <ColorRow swatch={MpBrandPrimary9} name="Primary 9" tokenName="MpBrandPrimary9" value={MpBrandPrimary9} />
            <ColorRow
              swatch={MpBrandPrimary10}
              name="Primary 10"
              tokenName="MpBrandPrimary10"
              value={MpBrandPrimary10}
            />
          </tbody>
        </table>

        <h3 style={{ marginTop: '32px' }}>Secondary</h3>
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
            <ColorRow
              swatch={MpBrandSecondary1}
              name="Secondary 1"
              tokenName="MpBrandSecondary1"
              value={MpBrandSecondary1}
            />
            <ColorRow
              swatch={MpBrandSecondary2}
              name="Secondary 2"
              tokenName="MpBrandSecondary2"
              value={MpBrandSecondary2}
            />
            <ColorRow
              swatch={MpBrandSecondary3}
              name="Secondary 3"
              tokenName="MpBrandSecondary3"
              value={MpBrandSecondary3}
            />
            <ColorRow
              swatch={MpBrandSecondary4}
              name="Secondary 4"
              tokenName="MpBrandSecondary4"
              value={MpBrandSecondary4}
            />
            <ColorRow
              swatch={MpBrandSecondary5}
              name="Secondary 5"
              tokenName="MpBrandSecondary5"
              value={MpBrandSecondary5}
            />
            <ColorRow
              swatch={MpBrandSecondary6}
              name="Secondary 6"
              tokenName="MpBrandSecondary6"
              value={MpBrandSecondary6}
            />
            <ColorRow
              swatch={MpBrandSecondary7}
              name="Secondary 7"
              tokenName="MpBrandSecondary7"
              value={MpBrandSecondary7}
            />
            <ColorRow
              swatch={MpBrandSecondary8}
              name="Secondary 8"
              tokenName="MpBrandSecondary8"
              value={MpBrandSecondary8}
            />
            <ColorRow
              swatch={MpBrandSecondary9}
              name="Secondary 9"
              tokenName="MpBrandSecondary9"
              value={MpBrandSecondary9}
            />
            <ColorRow
              swatch={MpBrandSecondary10}
              name="Secondary 10"
              tokenName="MpBrandSecondary10"
              value={MpBrandSecondary10}
            />
          </tbody>
        </table>
      </>
    )
  },
}

export const Semantic: Story = {
  render: () => {
    return (
      <>
        <h2>Semantic Colors</h2>
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
            <ColorRow swatch={ColorPrimary} name="Primary" tokenName="ColorPrimary" value={ColorPrimary} />
            <ColorRow swatch={ColorSuccess} name="Success" tokenName="ColorSuccess" value={ColorSuccess} />
            <ColorRow swatch={ColorWarning} name="Warning" tokenName="ColorWarning" value={ColorWarning} />
            <ColorRow swatch={ColorError} name="Error" tokenName="ColorError" value={ColorError} />
            <ColorRow swatch={ColorInfo} name="Info" tokenName="ColorInfo" value={ColorInfo} />
            <ColorRow swatch={ColorLink} name="Link" tokenName="ColorLink" value={ColorLink} />
          </tbody>
        </table>

        <h3 style={{ marginTop: '32px' }}>Success Colors</h3>
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
            <ColorRow
              swatch={ColorSuccessBg}
              name="Success Background"
              tokenName="ColorSuccessBg"
              value={ColorSuccessBg}
            />
            <ColorRow
              swatch={ColorSuccessBorder}
              name="Success Border"
              tokenName="ColorSuccessBorder"
              value={ColorSuccessBorder}
            />
            <ColorRow
              swatch={ColorSuccessText}
              name="Success Text"
              tokenName="ColorSuccessText"
              value={ColorSuccessText}
            />
          </tbody>
        </table>

        <h3 style={{ marginTop: '32px' }}>Error Colors</h3>
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
            <ColorRow swatch={ColorErrorBg} name="Error Background" tokenName="ColorErrorBg" value={ColorErrorBg} />
            <ColorRow
              swatch={ColorErrorBorder}
              name="Error Border"
              tokenName="ColorErrorBorder"
              value={ColorErrorBorder}
            />
            <ColorRow swatch={ColorErrorText} name="Error Text" tokenName="ColorErrorText" value={ColorErrorText} />
          </tbody>
        </table>

        <h3 style={{ marginTop: '32px' }}>Warning Colors</h3>
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
            <ColorRow
              swatch={ColorWarningBg}
              name="Warning Background"
              tokenName="ColorWarningBg"
              value={ColorWarningBg}
            />
            <ColorRow
              swatch={ColorWarningBorder}
              name="Warning Border"
              tokenName="ColorWarningBorder"
              value={ColorWarningBorder}
            />
            <ColorRow
              swatch={ColorWarningText}
              name="Warning Text"
              tokenName="ColorWarningText"
              value={ColorWarningText}
            />
          </tbody>
        </table>
      </>
    )
  },
}

export const Text: Story = {
  render: () => {
    return (
      <>
        <h2>Text Colors</h2>
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
            <ColorRow swatch={ColorText} name="Text" tokenName="ColorText" value={ColorText} />
            <ColorRow
              swatch={ColorTextHeading}
              name="Text Heading"
              tokenName="ColorTextHeading"
              value={ColorTextHeading}
            />
            <ColorRow swatch={ColorTextLabel} name="Text Label" tokenName="ColorTextLabel" value={ColorTextLabel} />
            <ColorRow
              swatch={ColorTextDescription}
              name="Text Description"
              tokenName="ColorTextDescription"
              value={ColorTextDescription}
            />
            <ColorRow
              swatch={ColorTextSecondary}
              name="Text Secondary"
              tokenName="ColorTextSecondary"
              value={ColorTextSecondary}
            />
            <ColorRow
              swatch={ColorTextTertiary}
              name="Text Tertiary"
              tokenName="ColorTextTertiary"
              value={ColorTextTertiary}
            />
            <ColorRow
              swatch={ColorTextQuaternary}
              name="Text Quaternary"
              tokenName="ColorTextQuaternary"
              value={ColorTextQuaternary}
            />
            <ColorRow
              swatch={ColorTextPlaceholder}
              name="Text Placeholder"
              tokenName="ColorTextPlaceholder"
              value={ColorTextPlaceholder}
            />
            <ColorRow
              swatch={ColorTextDisabled}
              name="Text Disabled"
              tokenName="ColorTextDisabled"
              value={ColorTextDisabled}
            />
          </tbody>
        </table>
      </>
    )
  },
}

export const Borders: Story = {
  render: () => {
    return (
      <>
        <h2>Border Colors</h2>
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
            <ColorRow swatch={ColorBorder} name="Border" tokenName="ColorBorder" value={ColorBorder} />
            <ColorRow
              swatch={ColorBorderSecondary}
              name="Border Secondary"
              tokenName="ColorBorderSecondary"
              value={ColorBorderSecondary}
            />
          </tbody>
        </table>
      </>
    )
  },
}
