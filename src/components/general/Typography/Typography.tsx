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

type TypographySize = 'base' | 'sm' | 'lg' | 'xl'
export interface ITextProps extends AntTextProps {
  size?: TypographySize
}

const getFontSizeVariable = (size: TypographySize): string => `--font-size${size === 'base' ? '' : `-${size}`}`

const getLineHeightVariable = (size: TypographySize): string => {
  if (size === 'sm') return `--line-height-sm`
  if (size === 'lg' || size === 'xl') return '--line-height-lg'
  return `--line-height`
}

const Text = ({ size = 'base', ...props }: ITextProps) => {
  return (
    <ConfigProvider>
      <AntTypography.Text
        style={{
          fontSize: `var(${getFontSizeVariable(size)})`,
          lineHeight: `var(${getLineHeightVariable(size)})`,
        }}
        {...props}>
        {props.children}
      </AntTypography.Text>
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
