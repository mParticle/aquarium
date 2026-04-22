import { type Meta, type StoryObj } from '@storybook/react'
import {
  FontFamily,
  FontSize,
  RoktBrand1,
  RoktBrand2,
  RoktBrand3,
  RoktBrand4,
  RoktBrand5,
  RoktBrand6,
  RoktBrand7,
  RoktBrand8,
  RoktBrand9,
  RoktBrand10,
  RoktGray1,
  RoktGray2,
  RoktGray3,
  RoktGray4,
  RoktGray5,
  RoktGray6,
  RoktGray7,
  RoktGray8,
  RoktGray9,
  RoktGray10,
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
  ColorSuccessBgHover,
  ColorSuccessBorder,
  ColorSuccessBorderHover,
  ColorSuccessHover,
  ColorSuccessActive,
  ColorSuccessText,
  ColorSuccessTextHover,
  ColorSuccessTextActive,
  ColorErrorBg,
  ColorErrorBgHover,
  ColorErrorBgActive,
  ColorErrorBorder,
  ColorErrorBorderHover,
  ColorErrorHover,
  ColorErrorActive,
  ColorErrorText,
  ColorErrorTextHover,
  ColorErrorTextActive,
  ColorWarningBg,
  ColorWarningBgHover,
  ColorWarningBorder,
  ColorWarningBorderHover,
  ColorWarningHover,
  ColorWarningActive,
  ColorWarningText,
  ColorWarningTextHover,
  ColorWarningTextActive,
  ColorBorder,
  ColorBorderSecondary,
} from 'src/styles/style'
import { CopyableToken } from '../_shared/CopyableToken'

const meta: Meta = {
  title: 'Design Tokens/Color Palette',
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
        <CopyableToken name={tokenName} />
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

const ColorSectionRow = ({ title }: { title: string }) => (
  <tr>
    <td
      colSpan={4}
      style={{
        padding: '24px 16px 12px',
        borderBottom: '1px solid #f0f0f0',
        fontSize: FontSize,
        fontFamily: FontFamily,
        fontWeight: 600,
        backgroundColor: '#ffffff',
      }}>
      <span style={{ display: 'inline-block', marginBottom: '4px' }}>{title}</span>
    </td>
  </tr>
)

export const Primary: Story = {
  render: () => {
    return (
      <>
        <h2>Brand Colors</h2>
        <h3>Brand</h3>
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
            <ColorRow swatch={RoktBrand1} name="Brand 1" tokenName="RoktBrand1" value={RoktBrand1} />
            <ColorRow swatch={RoktBrand2} name="Brand 2" tokenName="RoktBrand2" value={RoktBrand2} />
            <ColorRow swatch={RoktBrand3} name="Brand 3" tokenName="RoktBrand3" value={RoktBrand3} />
            <ColorRow swatch={RoktBrand4} name="Brand 4" tokenName="RoktBrand4" value={RoktBrand4} />
            <ColorRow swatch={RoktBrand5} name="Brand 5" tokenName="RoktBrand5" value={RoktBrand5} />
            <ColorRow swatch={RoktBrand6} name="Brand 6" tokenName="RoktBrand6" value={RoktBrand6} />
            <ColorRow swatch={RoktBrand7} name="Brand 7" tokenName="RoktBrand7" value={RoktBrand7} />
            <ColorRow swatch={RoktBrand8} name="Brand 8" tokenName="RoktBrand8" value={RoktBrand8} />
            <ColorRow swatch={RoktBrand9} name="Brand 9" tokenName="RoktBrand9" value={RoktBrand9} />
            <ColorRow swatch={RoktBrand10} name="Brand 10" tokenName="RoktBrand10" value={RoktBrand10} />
          </tbody>
        </table>

        <h3 style={{ marginTop: '32px' }}>Gray</h3>
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
            <ColorRow swatch={RoktGray1} name="Gray 1" tokenName="RoktGray1" value={RoktGray1} />
            <ColorRow swatch={RoktGray2} name="Gray 2" tokenName="RoktGray2" value={RoktGray2} />
            <ColorRow swatch={RoktGray3} name="Gray 3" tokenName="RoktGray3" value={RoktGray3} />
            <ColorRow swatch={RoktGray4} name="Gray 4" tokenName="RoktGray4" value={RoktGray4} />
            <ColorRow swatch={RoktGray5} name="Gray 5" tokenName="RoktGray5" value={RoktGray5} />
            <ColorRow swatch={RoktGray6} name="Gray 6" tokenName="RoktGray6" value={RoktGray6} />
            <ColorRow swatch={RoktGray7} name="Gray 7" tokenName="RoktGray7" value={RoktGray7} />
            <ColorRow swatch={RoktGray8} name="Gray 8" tokenName="RoktGray8" value={RoktGray8} />
            <ColorRow swatch={RoktGray9} name="Gray 9" tokenName="RoktGray9" value={RoktGray9} />
            <ColorRow swatch={RoktGray10} name="Gray 10" tokenName="RoktGray10" value={RoktGray10} />
          </tbody>
        </table>
      </>
    )
  },
}

export const Semantic: Story = {
  render: () => {
    const semanticRows = [
      { swatch: ColorPrimary, name: 'Primary', tokenName: 'ColorPrimary', value: ColorPrimary },
      { swatch: ColorWarning, name: 'Warning', tokenName: 'ColorWarning', value: ColorWarning },
      { swatch: ColorError, name: 'Error', tokenName: 'ColorError', value: ColorError },
      { swatch: ColorInfo, name: 'Info', tokenName: 'ColorInfo', value: ColorInfo },
      { swatch: ColorLink, name: 'Link', tokenName: 'ColorLink', value: ColorLink },
    ]

    const successRows = [
      { swatch: ColorSuccess, name: 'Success', tokenName: 'ColorSuccess', value: ColorSuccess },
      { swatch: ColorSuccessBg, name: 'Success Background', tokenName: 'ColorSuccessBg', value: ColorSuccessBg },
      {
        swatch: ColorSuccessBgHover,
        name: 'Success Background Hover',
        tokenName: 'ColorSuccessBgHover',
        value: ColorSuccessBgHover,
      },
      {
        swatch: ColorSuccessBorder,
        name: 'Success Border',
        tokenName: 'ColorSuccessBorder',
        value: ColorSuccessBorder,
      },
      {
        swatch: ColorSuccessBorderHover,
        name: 'Success Border Hover',
        tokenName: 'ColorSuccessBorderHover',
        value: ColorSuccessBorderHover,
      },
      { swatch: ColorSuccessHover, name: 'Success Hover', tokenName: 'ColorSuccessHover', value: ColorSuccessHover },
      {
        swatch: ColorSuccessActive,
        name: 'Success Active',
        tokenName: 'ColorSuccessActive',
        value: ColorSuccessActive,
      },
      {
        swatch: ColorSuccessTextHover,
        name: 'Success Text Hover',
        tokenName: 'ColorSuccessTextHover',
        value: ColorSuccessTextHover,
      },
      { swatch: ColorSuccessText, name: 'Success Text', tokenName: 'ColorSuccessText', value: ColorSuccessText },
      {
        swatch: ColorSuccessTextActive,
        name: 'Success Text Active',
        tokenName: 'ColorSuccessTextActive',
        value: ColorSuccessTextActive,
      },
    ]

    const errorRows = [
      { swatch: ColorErrorBg, name: 'Error Background', tokenName: 'ColorErrorBg', value: ColorErrorBg },
      {
        swatch: ColorErrorBgHover,
        name: 'Error Background Hover',
        tokenName: 'ColorErrorBgHover',
        value: ColorErrorBgHover,
      },
      {
        swatch: ColorErrorBgActive,
        name: 'Error Background Active',
        tokenName: 'ColorErrorBgActive',
        value: ColorErrorBgActive,
      },
      { swatch: ColorErrorBorder, name: 'Error Border', tokenName: 'ColorErrorBorder', value: ColorErrorBorder },
      {
        swatch: ColorErrorBorderHover,
        name: 'Error Border Hover',
        tokenName: 'ColorErrorBorderHover',
        value: ColorErrorBorderHover,
      },
      { swatch: ColorErrorHover, name: 'Error Hover', tokenName: 'ColorErrorHover', value: ColorErrorHover },
      { swatch: ColorErrorActive, name: 'Error Active', tokenName: 'ColorErrorActive', value: ColorErrorActive },
      {
        swatch: ColorErrorTextHover,
        name: 'Error Text Hover',
        tokenName: 'ColorErrorTextHover',
        value: ColorErrorTextHover,
      },
      { swatch: ColorErrorText, name: 'Error Text', tokenName: 'ColorErrorText', value: ColorErrorText },
      {
        swatch: ColorErrorTextActive,
        name: 'Error Text Active',
        tokenName: 'ColorErrorTextActive',
        value: ColorErrorTextActive,
      },
    ]

    const warningRows = [
      { swatch: ColorWarningBg, name: 'Warning Background', tokenName: 'ColorWarningBg', value: ColorWarningBg },
      {
        swatch: ColorWarningBgHover,
        name: 'Warning Background Hover',
        tokenName: 'ColorWarningBgHover',
        value: ColorWarningBgHover,
      },
      {
        swatch: ColorWarningBorder,
        name: 'Warning Border',
        tokenName: 'ColorWarningBorder',
        value: ColorWarningBorder,
      },
      {
        swatch: ColorWarningBorderHover,
        name: 'Warning Border Hover',
        tokenName: 'ColorWarningBorderHover',
        value: ColorWarningBorderHover,
      },
      { swatch: ColorWarningHover, name: 'Warning Hover', tokenName: 'ColorWarningHover', value: ColorWarningHover },
      {
        swatch: ColorWarningActive,
        name: 'Warning Active',
        tokenName: 'ColorWarningActive',
        value: ColorWarningActive,
      },
      {
        swatch: ColorWarningTextHover,
        name: 'Warning Text Hover',
        tokenName: 'ColorWarningTextHover',
        value: ColorWarningTextHover,
      },
      { swatch: ColorWarningText, name: 'Warning Text', tokenName: 'ColorWarningText', value: ColorWarningText },
      {
        swatch: ColorWarningTextActive,
        name: 'Warning Text Active',
        tokenName: 'ColorWarningTextActive',
        value: ColorWarningTextActive,
      },
    ]

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
            {semanticRows.map(row => (
              <ColorRow key={row.tokenName} {...row} />
            ))}
            <ColorSectionRow title="Success Tokens" />
            {successRows.map(row => (
              <ColorRow key={row.tokenName} {...row} />
            ))}
            <ColorSectionRow title="Error Tokens" />
            {errorRows.map(row => (
              <ColorRow key={row.tokenName} {...row} />
            ))}
            <ColorSectionRow title="Warning Tokens" />
            {warningRows.map(row => (
              <ColorRow key={row.tokenName} {...row} />
            ))}
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
