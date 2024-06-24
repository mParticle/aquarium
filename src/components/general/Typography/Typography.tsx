import {
  Typography as AntTypography,
  type TypographyProps as AntTypographyProps,
  ConfigProvider as AntConfigProvider,
} from 'antd'
import { ConfigProvider } from 'src/components'
import { type ReactNode } from 'react'
import { type TextProps as AntTextProps } from 'antd/es/typography/Text'
import { type TitleProps as AntTitleProps } from 'antd/es/typography/Title'
import { type LinkProps as AntLinkProps } from 'antd/es/typography/Link'
import { type ParagraphProps as AntParagraphProps } from 'antd/es/typography/Paragraph'

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

// TODO: Replace hardcoded values in getFontSize and getLineHeight with tokens when design is ready
// These values are currently coming from https://www.figma.com/design/LffDbOUjeYqDMZ3djs9Cga/mParticle-Foundation-v1.0.1?node-id=3745-8164&m=dev
const getFontSize = (size: TypographySize): number => {
  if (size === 'base') return 14
  if (size === 'sm') return 12
  if (size === 'lg') return 16
  return 20
}

const getLineHeight = (size: TypographySize): number => {
  if (size === 'base') return 1.571428571428571
  if (size === 'sm') return 1.666666666666667
  if (size === 'lg') return 1.5
  return 1.4
}

const Text = ({ size = 'base', ...props }: ITextProps) => {
  const fontSize = getFontSize(size)
  const lineHeight = getLineHeight(size)

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
