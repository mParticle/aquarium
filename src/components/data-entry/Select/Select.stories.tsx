import { type Meta, type StoryObj } from '@storybook/react'
import { Avatar } from 'src/components/data-display/Avatar/Avatar'
import { Tag } from 'src/components/data-display/Tag/Tag'
import { type ISelectProps, Select } from 'src/components/data-entry/Select/Select'

type TagRender = ISelectProps['tagRender']

const options: ISelectProps['options'] = [{ value: 'gold1' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }]

const meta: Meta<typeof Select> = {
  title: 'Aquarium/Data Entry/Select',
  component: Select,

  args: {
    options,
    style: { width: 200 },
    mode: 'tags',
  },
}
export default meta

type Story = StoryObj<typeof Select>

export const LegalComponent: Story = {
  name: 'Single Legal Component',
  args: {
    tagRender: props => {
      const { label, value, closable, onClose } = props
      const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>): void => {
        event.preventDefault()
        event.stopPropagation()
      }
      return (
        <Tag
          color={value}
          onMouseDown={onPreventMouseDown}
          closable={closable}
          onClose={onClose}
          style={{ marginInlineEnd: 4 }}>
          {label}
        </Tag>
      )
    },
  },
}

export const IllegalComponent: Story = {
  name: 'Single Illegal Component',
  args: {
    tagRender: _ => {
      return <Avatar />
    },
  },
}

export const LegalComponentInContainer: Story = {
  name: 'Single Legal Component In Container',
  args: {
    tagRender: props => {
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
    },
  },
};


export const LegalAndIllegalComponentInContainer: Story = {
  name: 'Legal and Illegal Component In Container',
  args: {
    tagRender: props => {
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
          <Avatar />
        </>
      )
    },
  },
}


export const PrimitiveComponent: Story = {
  name: 'Primitive Component',
  args: {
    tagRender: props => {
      return 'Primitive' as unknown as React.ReactElement;
    },
  },
}


export const PrimitiveComponentInContainer: Story = {
  name: 'Primitive Component in Container',
  args: {
    tagRender: props => {
      return <>{'Primitive'} {1}</>
    },
  },
}