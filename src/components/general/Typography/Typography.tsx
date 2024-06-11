import { Typography as AntTypography, type TypographyProps as AntTypographyProps } from 'antd'
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

export interface ITextProps extends AntTextProps {}

const Text = (props: ITextProps) => (
  <ConfigProvider>
    <AntTypography.Text {...props}>{props.children}</AntTypography.Text>
  </ConfigProvider>
)
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
