import {
  Typography as AntTypography,
  type TypographyProps as AntTypographyProps,
  theme,
  ConfigProvider as AntConfigProvider,
} from 'antd'
import { ConfigProvider } from 'src/components'
import { type ReactNode } from 'react'
import { type TextProps as AntTextProps } from 'antd/es/typography/Text'
import { type TitleProps as AntTitleProps } from 'antd/es/typography/Title'
import { type LinkProps as AntLinkProps } from 'antd/es/typography/Link'
import { type ParagraphProps as AntParagraphProps } from 'antd/es/typography/Paragraph'
import type { FontMapToken } from 'antd/es/theme/interface'

const { useToken } = theme

export interface ITypographyProps extends AntTypographyProps {
  children: ReactNode
}

export const Typography = (props: ITypographyProps) => (
  <ConfigProvider>
    <AntTypography {...props}>{props.children}</AntTypography>
  </ConfigProvider>
)

type TypographySize = 'base' | 'sm' | 'lg' | 'xl'
export interface ITextProps extends AntTextProps {
  size?: TypographySize
}

type FontSizeToken = keyof Pick<FontMapToken, 'fontSize' | 'fontSizeSM' | 'fontSizeLG' | 'fontSizeXL'>
type LineHeightToken = keyof Pick<FontMapToken, 'lineHeight' | 'lineHeightSM' | 'lineHeightLG'>

const getFontSizeToken = (size: TypographySize): FontSizeToken => {
  if (size === 'base') return 'fontSize'
  if (size === 'sm') return 'fontSizeSM'
  if (size === 'lg') return 'fontSizeLG'
  return 'fontSizeXL'
}

const getLineHeightToken = (size: TypographySize): LineHeightToken => {
  if (size === 'base') return 'lineHeight'
  if (size === 'sm') return 'lineHeightSM'
  return 'lineHeightLG'
}

const Text = ({ size = 'base', ...props }: ITextProps) => {
  const { token } = useToken()

  const fontSize = token[getFontSizeToken(size)]
  const lineHeight = token[getLineHeightToken(size)]

  return (
    <ConfigProvider>
      <AntConfigProvider theme={{ components: { Typography: { fontSize, lineHeight } } }}>
        <AntTypography.Text {...props}>{props.children}</AntTypography.Text>
      </AntConfigProvider>
    </ConfigProvider>
  )
}

Typography.Text = Text

interface ITitleProps extends AntTitleProps {
  children: ReactNode
}

const Title = (props: ITitleProps) => (
  <ConfigProvider>
    <AntTypography.Title {...props}>{props.children}</AntTypography.Title>
  </ConfigProvider>
)
Typography.Title = Title

export interface ILinkProps extends AntLinkProps {
  children: ReactNode
}

const Link = (props: ILinkProps) => (
  <ConfigProvider>
    <AntTypography.Link {...props}>{props.children}</AntTypography.Link>
  </ConfigProvider>
)
Typography.Link = Link

export interface IParagraphProps extends AntParagraphProps {
  children: ReactNode
}

const Paragraph = (props: IParagraphProps) => (
  <ConfigProvider>
    <AntTypography.Paragraph {...props}>{props.children}</AntTypography.Paragraph>
  </ConfigProvider>
)
Typography.Paragraph = Paragraph
