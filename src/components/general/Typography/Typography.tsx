import { Typography as AntTypography } from 'antd'
import { ConfigProvider } from 'src/components'
import { type ReactNode } from 'react'
import { type TextProps as AntTextProps } from 'antd/es/typography/Text'
import { type TitleProps as AntTitleProps } from 'antd/es/typography/Title'
import { type LinkProps as AntLinkProps } from 'antd/es/typography/Link'
import { type ParagraphProps as AntParagraphProps } from 'antd/es/typography/Paragraph'

export const Typography = AntTypography

export interface ITextProps extends AntTextProps {
  children: ReactNode
}

export const Text = (props: ITextProps) => (
  <ConfigProvider>
    <AntTypography.Text {...props}>{props.children}</AntTypography.Text>
  </ConfigProvider>
)

export interface ITitleProps extends AntTitleProps {
  children: ReactNode
}

export const Title = (props: ITitleProps) => (
  <ConfigProvider>
    <AntTypography.Title {...props}>{props.children}</AntTypography.Title>
  </ConfigProvider>
)

export interface ILinkProps extends AntLinkProps {
  children: ReactNode
}

export const Link = (props: ILinkProps) => (
  <ConfigProvider>
    <AntTypography.Link {...props}>{props.children}</AntTypography.Link>
  </ConfigProvider>
)

export interface IParagraphProps extends AntParagraphProps {
  children: ReactNode
}

export const Paragraph = (props: IParagraphProps) => (
  <ConfigProvider>
    <AntTypography.Paragraph {...props}>{props.children}</AntTypography.Paragraph>
  </ConfigProvider>
)
