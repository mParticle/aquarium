import { Select as AntSelect, Tag } from 'antd'
import type { SelectProps } from 'antd'
import { type SelectProps as AntSelectProps } from 'antd'
import { type BaseOptionType, type DefaultOptionType } from 'antd/es/select'
import type { CustomTagProps } from 'rc-select/lib/BaseSelect'
import React from 'react'
import { ConfigProvider } from 'src/components'

export interface ISelectProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> extends AntSelectProps<ValueType, OptionType> {}

type TagRender = SelectProps['tagRender']

const tagRender: TagRender = props => {
  const { label, value, closable, onClose } = props
  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>): void => {
    event.preventDefault()
    event.stopPropagation()
  }
  return (
    <>
      <Tag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginInlineEnd: 4 }}>
        {label}
      </Tag>
    </>
  )
}

enum AllowedPrimitiveTypes {
  string = 'string',
  number = 'number',
}

enum AllowedComponentTypes {
  CheckableTag = 'CheckableTag',
  OptGroup = 'OptGroup',
  Option = 'Option',
}

export const Select = (props: ISelectProps) => {
  const internalTagRender = (props: CustomTagProps): React.ReactElement => {
    const tag = tagRender(props)

    if (validateRender(tag)) {
      console.log('Valid tag render')

      return tag
    }

    console.log('Invalid tag render')

    return <></>
  }
  const effectiveProps = {
    ...props,
    tagRender: internalTagRender,
  }

  return (
    <ConfigProvider>
      <AntSelect {...effectiveProps} />
    </ConfigProvider>
  )
}

Select.Option = AntSelect.Option
Select.OptGroup = AntSelect.OptGroup

function validateRender(node: React.ReactElement): boolean {
  if (isPrimitive(node)) return true

  if (typeof node === 'object' && node !== null) {
    if (isContainerNode(node)) {
      return areChildrenComponents(node)
    }
    return isComponent(node)
  }

  return false
}

function areChildrenComponents(node: React.ReactElement): boolean {
  const children: React.ReactElement = node?.props?.children
  if (!children) return false

  return Array.isArray(children)
    ? children.every((child: React.ReactElement) => isPrimitive(child) || isComponent(child))
    : isPrimitive(children) || isComponent(children)
}

function isComponent(node?: React.ReactElement): boolean {
  return !!(node?.type && Object.keys(node.type).some(key => key in AllowedComponentTypes))
}

function isPrimitive(node: React.ReactElement): boolean {
  return Object.keys(AllowedPrimitiveTypes).includes(typeof node);
}

function isContainerNode(node?: { type: symbol }): boolean {
  return node?.type === Symbol.for('react.fragment')
}
