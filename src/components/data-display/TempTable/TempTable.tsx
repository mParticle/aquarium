import { Table as AntTable, type TableProps as AntTableProps } from 'antd'
import { ConfigProvider } from 'src/components'
import type { AnyObject } from 'antd/es/_util/type'
import {
  type ILinkCellProps,
  type ITagCellProps,
  type ITextCellProps,
  type ITextDescriptionCellProps,
  type IBadgeCellProps,
  LinkCell,
  TagCell,
  TextCell,
  TextDescriptionCell,
  BadgeCell,
} from './cells'

const COLUMN_TYPES = ['data', 'link', 'text', 'tag', 'textDescription', 'badge'] as const

type ColumnGetProps<DataType, Return = React.ReactNode> = (value: any, dataType: DataType, index: number) => Return
interface BaseColumn<DataType> {
  title: string
  key: string
  dataIndex?: string
  type?: never
  render?: ColumnGetProps<DataType>
}

interface BaseColumnWithoutTypeAndRender<DataType> extends Omit<BaseColumn<DataType>, 'type' | 'render'> {}

interface TagsColumn<DataType> extends BaseColumnWithoutTypeAndRender<DataType> {
  type: 'tag'
  getProps: ColumnGetProps<DataType, ITagCellProps>
}

interface TextColumn<DataType> extends BaseColumnWithoutTypeAndRender<DataType> {
  type: 'text'
  getProps: ColumnGetProps<DataType, ITextCellProps>
}

interface LinkColumn<DataType> extends BaseColumnWithoutTypeAndRender<DataType> {
  type: 'link'
  getProps: ColumnGetProps<DataType, ILinkCellProps>
}

interface TextDescriptionColumn<DataType> extends BaseColumnWithoutTypeAndRender<DataType> {
  type: 'textDescription'
  getProps: ColumnGetProps<DataType, ITextDescriptionCellProps>
}

interface BadgeColumn<DataType> extends BaseColumnWithoutTypeAndRender<DataType> {
  type: 'badge'
  getProps: ColumnGetProps<DataType, IBadgeCellProps>
}

export type TableColumnType<DataType> =
  | BaseColumn<DataType>
  | LinkColumn<DataType>
  | TagsColumn<DataType>
  | TextColumn<DataType>
  | TextDescriptionColumn<DataType>
  | BadgeColumn<DataType>

interface TableProps<DataType = Record<string, any>> {
  columns: Array<TableColumnType<DataType>>
  dataSource: DataType[]
  pagination: AntTableProps['pagination']
}

export const TempTable = <RecordType extends AnyObject>({
  dataSource,
  columns,
  pagination = false,
}: TableProps<RecordType>) => {
  return (
    <ConfigProvider>
      <AntTable
        pagination={pagination}
        dataSource={dataSource}
        columns={columns.map(column => {
          if (!('type' in column)) {
            console.warn('No type given, prefer to use a column type')
            if (!('render' in column) && !('dataIndex' in column)) {
              throw new Error('You must specify a type or a render function or a dataIndex')
            }
            return column
          }

          return {
            ...column,
            render: (...args): React.ReactNode => {
              const { type } = column

              if (type === 'link') return <LinkCell {...column.getProps(...args)} />

              if (type === 'tag') return <TagCell {...column.getProps(...args)} />

              if (type === 'text') return <TextCell {...column.getProps(...args)} />

              if (type === 'textDescription') return <TextDescriptionCell {...column.getProps(...args)} />

              if (type === 'badge') return <BadgeCell {...column.getProps(...args)} />

              throw new Error(
                `Invalid column type specified. Received ${type}, must be one of ${COLUMN_TYPES.toString()}`,
              )
            },
          }
        })}
      />
    </ConfigProvider>
  )
}

TempTable.Column = AntTable.Column
TempTable.ColumnGroup = AntTable.ColumnGroup
TempTable.Summary = AntTable.Summary

TempTable.EXPAND_COLUMN = AntTable.EXPAND_COLUMN
TempTable.SELECTION_NONE = AntTable.SELECTION_NONE
TempTable.SELECTION_ALL = AntTable.SELECTION_ALL
TempTable.SELECTION_INVERT = AntTable.SELECTION_INVERT
TempTable.SELECTION_COLUMN = AntTable.SELECTION_COLUMN
