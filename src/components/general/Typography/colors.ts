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
  'inherit',
] as const

export type TypographyColor = (typeof TypographyColors)[number]

export function getColorFromStyles(color: TypographyColor | string): string {
  if (color === 'inherit') {
    return 'inherit'
  }

  if (styles[color as keyof typeof styles]) {
    return (styles as unknown as Record<string, string>)[color]
  }

  return color
}
