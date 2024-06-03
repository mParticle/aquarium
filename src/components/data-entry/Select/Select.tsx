import { Select as AntSelect } from 'antd'
import { type SelectProps as AntSelectProps } from 'antd'
import { type BaseOptionType, type DefaultOptionType } from 'antd/es/select'
import type { CustomTagProps } from 'rc-select/lib/BaseSelect'
import React from 'react'
import { ConfigProvider } from 'src/components'

export interface ISelectProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType,
> extends AntSelectProps<ValueType, OptionType> {}


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
  const internalTagRender = (internalTagRenderProps: CustomTagProps): React.ReactElement => {
    const tag = props.tagRender?.(internalTagRenderProps)

    if (validateRender(tag)) {
      return <>All components valid</>;
    }

    return <>Something is invalid</>
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

/**
 * The validate render fn depends on the diversity of the React.ReactElement that could be a primitive, a component or a 
 * container node.
 */
function validateRender(node?: React.ReactElement): boolean {
  if (!node) return true;

  if (isPrimitive(node)) return true

  if (isObject(node)) {
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

function isObject(value: unknown): boolean {
  return typeof value === 'object' && value !== null;
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
