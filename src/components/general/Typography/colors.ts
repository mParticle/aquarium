import * as styles from '../../../styles/style'

export const TypographyColors = [
  'ColorText',
  'ColorTextSecondary',
  'ColorTextTertiary',
  'ColorTextQuaternary',
  'ColorInfoText',
  'ColorInfoTextActive',
  'ColorPrimaryTextHover',
  'ColorPrimaryText',
  'ColorPrimaryTextActive',
  'ColorSuccessTextHover',
  'ColorSuccessText',
  'ColorSuccessTextActive',
  'ColorErrorTextHover',
  'ColorErrorText',
  'ColorErrorTextActive',
  'ColorWarningTextHover',
  'ColorWarningText',
  'ColorWarningTextActive',
  'ColorLink',
  'ColorLinkHover',
  'ColorLinkActive',
  'ColorTextPlaceholder',
  'ColorTextDisabled',
  'ColorTextHeading',
  'ColorTextLabel',
  'ColorTextDescription',
  'ColorTextLightSolid',
] as const

export type TypographyColor = (typeof TypographyColors)[number]

export function getColorFromStyles(color: TypographyColor | string): string {
  if (styles[color as TypographyColor]) {
    return (styles as unknown as Record<TypographyColor, string>)[color as TypographyColor]
  }

  return color
}
