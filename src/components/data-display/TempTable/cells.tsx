import { type ILinkProps, Typography, type ITextProps } from 'src/components/general/Typography/Typography'
import { Tag, type ITagProps } from '../Tag/Tag'
import { Tooltip } from 'antd'
import type { ITooltipProps } from '../Tooltip/Tooltip'
import { Space } from 'src/components/layout/Space/Space'
import { Badge, type IBadgeProps } from '../Badge/Badge'

export interface ILinkCellProps extends Omit<ILinkProps, 'children'> {
  text: string
}

export const LinkCell = ({ text, ...props }: ILinkCellProps) => <Typography.Link {...props}>{text}</Typography.Link>

export interface ITextCellProps extends Omit<ITextProps, 'children'> {
  text: string
  tooltip?: Partial<ITooltipProps>
}

export const TextCell = ({ text, tooltip = {}, ...props }: ITextCellProps) => (
  <Tooltip {...tooltip} title={tooltip?.title ?? text}>
    <Typography.Text ellipsis {...props}>
      {text}
    </Typography.Text>
  </Tooltip>
)

export interface ITagCellProps extends Omit<ITagProps, 'children'> {
  text: string
}

export const TagCell = ({ text, ...props }: ITagCellProps) => <Tag {...props}>{text}</Tag>

export interface ITextDescriptionCellProps {
  title: string
  subtitle?: string
}

export const TextDescriptionCell = ({ title, subtitle }: ITextDescriptionCellProps) => {
  return (
    <Space direction="vertical">
      <Typography.Text ellipsis>{title}</Typography.Text>
      {
        /* TO DO - UPDATE TYPOGRAPHY TO MAKE THIS LOOK LIKE THE FIGMA */
        subtitle ? (
          <Typography.Text ellipsis type={'secondary'}>
            {subtitle}
          </Typography.Text>
        ) : null
      }
    </Space>
  )
}

export interface IBadgeCellProps extends Omit<IBadgeProps, 'children'> {}

export const BadgeCell = (props: IBadgeCellProps) => <Badge {...props} />
