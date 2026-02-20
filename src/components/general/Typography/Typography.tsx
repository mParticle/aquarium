import { Typography as AntTypography } from 'antd'
import { ConfigProvider } from 'src/components'
import type { ReactNode } from 'react'
import type { TextProps as AntTextProps } from 'antd/es/typography/Text'
import type { TitleProps as AntTitleProps } from 'antd/es/typography/Title'
import type { LinkProps as AntLinkProps } from 'antd/es/typography/Link'
import type { ParagraphProps as AntParagraphProps } from 'antd/es/typography/Paragraph'
import { getColorFromStyles, type TypographyColor } from './colors'
import { ColorText } from 'src/styles/style'

type TypographySize = 'base' | 'sm' | 'lg' | 'xl' | number

// TODO: Replace hardcoded values in getFontSize and getLineHeight with tokens when design is ready
// These values are currently coming from https://www.figma.com/design/LffDbOUjeYqDMZ3djs9Cga/mParticle-Foundation-v1.0.1?node-id=3745-8164&m=dev
const getFontSize = (size: TypographySize): number => {
  if (size === 'base') return 14
  if (size === 'sm') return 12
  if (size === 'lg') return 16
  if (size === 'xl') return 20
  return size
}

const getLineHeight = (size: TypographySize): number => {
  if (size === 'base') return 1.571428571428571
  if (size === 'sm') return 1.666666666666667
  if (size === 'lg') return 1.5
  return 1.4
}

interface InternalTypographyProps {
  size?: TypographySize
  color?: TypographyColor
  children: ReactNode
}

export const Typography = () => {
  return <>DO NOT USE</>
}

type InternalTextProps = InternalTypographyProps & AntTextProps
type InternalTitleProps = InternalTypographyProps & AntTitleProps
type InternalLinkProps = InternalTypographyProps & AntLinkProps
type InternalParagraphProps = InternalTypographyProps & AntParagraphProps

export interface ITextProps extends InternalTextProps {
  tooltip?: boolean
}

export interface ITitleProps extends InternalTitleProps {}

export interface ILinkProps extends InternalLinkProps {
  tooltip?: boolean
}

export interface IParagraphProps extends InternalParagraphProps {}

// Tried generalizing into a higher order component but couldn't do it type-safely, so just repeated the code
const Text = (props: ITextProps) => {
  const { size, color, type, tooltip, children, style, ...rest } = props

  const fontSize = size ? getFontSize(size) : tooltip ? 12 : undefined
  const lineHeight = size ? getLineHeight(size) : tooltip ? 1.4 : undefined
  const fontColor = !type && color ? getColorFromStyles(color) : tooltip ? ColorText : undefined

  return (
    <ConfigProvider>
      <AntTypography.Text style={{ color: fontColor, fontSize, lineHeight, ...style }} type={type} {...rest}>
        {children}
      </AntTypography.Text>
    </ConfigProvider>
  )
}

Typography.Text = Text

const Title = (props: ITitleProps) => {
  const { size, color, type, children, style, ...rest } = props

  const fontSize = size ? getFontSize(size) : undefined
  const lineHeight = size ? getLineHeight(size) : undefined
  const fontColor = !type && color ? getColorFromStyles(color) : undefined

  return (
    <ConfigProvider>
      <AntTypography.Title style={{ color: fontColor, fontSize, lineHeight, ...style }} type={type} {...rest}>
        {children}
      </AntTypography.Title>
    </ConfigProvider>
  )
}

Typography.Title = Title

const Link = (props: ILinkProps) => {
  const { size, color, type, tooltip, underline, children, style, ...rest } = props

  const fontSize = size ? getFontSize(size) : tooltip ? 12 : undefined
  const lineHeight = size ? getLineHeight(size) : tooltip ? 1.4 : undefined
  const fontColor = !type && color ? getColorFromStyles(color) : tooltip ? ColorText : undefined

  // Force underline when using ColorText to ensure it's recognizable as a link
  const shouldUnderline = tooltip ?? (color === 'ColorText' ? true : underline)

  return (
    <ConfigProvider>
      <AntTypography.Link
        style={{ color: fontColor, fontSize, lineHeight, ...style }}
        type={type}
        underline={shouldUnderline}
        {...rest}>
        {children}
      </AntTypography.Link>
    </ConfigProvider>
  )
}

Typography.Link = Link

const Paragraph = (props: IParagraphProps) => {
  const { size, color, type, children, style, ...rest } = props

  const fontSize = size ? getFontSize(size) : undefined
  const lineHeight = size ? getLineHeight(size) : undefined
  const fontColor = !type && color ? getColorFromStyles(color) : undefined

  return (
    <ConfigProvider>
      <AntTypography.Paragraph style={{ color: fontColor, fontSize, lineHeight, ...style }} type={type} {...rest}>
        {children}
      </AntTypography.Paragraph>
    </ConfigProvider>
  )
}

Typography.Paragraph = Paragraph
