import { type Meta, type StoryObj } from '@storybook/react'
import { Flex } from 'src/components/layout/Flex/Flex'
import { ExampleStory } from 'src/utils/ExampleStory'
import { Radio } from 'src/components'
import { useState } from 'react'
import { type IFlexProps } from 'src/components/layout/Flex/Flex'
import { Segmented } from 'src/components'
import { type SegmentedProps } from 'antd'
import { Button } from 'src/components'
import { type IConfigProviderProps } from 'src/components'
import { Slider } from 'src/components'
import { Card } from 'src/components'
import { Typography } from 'src/components/general/Typography/Typography'

const meta: Meta<typeof Flex> = {
  title: 'Components/Layout/Flex',
  component: props => (
    <>
      <Flex
        {...props}
        style={{
          width: 200,
          height: 108,
          borderRadius: 6,
          border: '1px solid #40a9ff',
        }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: 20,
              height: 54,
              backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf',
            }}
          />
        ))}
      </Flex>
    </>
  ),

  args: {
    vertical: false,
    wrap: 'nowrap',
    justify: 'stretch',
    align: 'normal',
    flex: '0 1 auto',
    gap: 'middle',
    component: 'div',
  },

  argTypes: {
    wrap: {
      control: 'select',
      options: ['nowrap', 'wrap', 'wrap-reverse', 'initial', 'revert', 'revert-layer', 'unset'],
    },
    justify: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly', 'stretch'],
    },
    align: {
      control: 'select',
      options: ['normal', 'stretch', 'center', 'flex-start', 'flex-end', 'self-start', 'self-end', 'baseline'],
    },
  },
}
export default meta

type Story = StoryObj<typeof Flex>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {}

export const VerticalFlex: Story = {
  args: {
    vertical: true,
  },
}

export const JustifyFlexStart: Story = {
  args: {
    justify: 'flex-start',
  },
}

export const JustifyCenter: Story = {
  args: {
    justify: 'center',
  },
}

export const JustifyFlexEnd: Story = {
  args: {
    justify: 'flex-end',
  },
}

export const AlignFlexStart: Story = {
  args: {
    align: 'flex-start',
  },
}

export const AlignCenter: Story = {
  args: {
    align: 'center',
  },
}

export const AlignFlexEnd: Story = {
  args: {
    align: 'flex-end',
  },
}

export const LargeGap: Story = {
  args: {
    gap: 'large',
  },
}

export const ExampleBasic: Story = {
  render: () => {
    const baseStyle: React.CSSProperties = {
      width: '25%',
      height: 54,
    }
    const [value, setValue] = useState<string>('horizontal')

    return (
      <ExampleStory title="The basic usage.">
        <Flex gap="middle" vertical>
          <Radio.Group
            value={value}
            onChange={e => {
              // TODO added a todo in Radio component to see if we can better type this
              setValue(e.target.value as string)
            }}>
            <Radio value="horizontal">horizontal</Radio>
            <Radio value="vertical">vertical</Radio>
          </Radio.Group>
          <Flex vertical={value === 'vertical'}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} style={{ ...baseStyle, backgroundColor: i % 2 ? '#1677ff' : '#1677ffbf' }} />
            ))}
          </Flex>
        </Flex>
      </ExampleStory>
    )
  },
}

export const ExampleAlign: Story = {
  render: () => {
    const boxStyle: React.CSSProperties = {
      width: '100%',
      height: 120,
      borderRadius: 6,
      border: '1px solid #40a9ff',
    }

    const justifyOptions = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly']

    const alignOptions = ['flex-start', 'center', 'flex-end']

    const [justify, setJustify] = useState<IFlexProps['justify']>(justifyOptions[0])
    const [alignItems, setAlignItems] = useState<IFlexProps['align']>(alignOptions[0])
    return (
      <ExampleStory title="Set align.">
        <Flex gap="middle" align="start" vertical>
          <p>Select justify :</p>
          <Segmented options={justifyOptions} onChange={setJustify as SegmentedProps['onChange']} />
          <p>Select align :</p>
          <Segmented options={alignOptions} onChange={setAlignItems as SegmentedProps['onChange']} />
          <Flex style={boxStyle} justify={justify} align={alignItems}>
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>
            <Button type="primary">Primary</Button>
          </Flex>
        </Flex>
      </ExampleStory>
    )
  },
}

export const ExampleGap: Story = {
  render: () => {
    type SizeType = IConfigProviderProps['componentSize']
    const [gapSize, setGapSize] = useState<SizeType | 'customize'>('small')
    const [customGapSize, setCustomGapSize] = useState<number>(0)

    return (
      <ExampleStory title="Set the gap between elements, which has three preset sizes: small, middle, large, You can also customize the gap size.">
        <Flex gap="middle" vertical>
          <Radio.Group
            value={gapSize}
            onChange={e => {
              setGapSize(e.target.value as SizeType | 'customize')
            }}>
            {['small', 'middle', 'large', 'customize'].map(size => (
              <Radio key={size} value={size}>
                {size}
              </Radio>
            ))}
          </Radio.Group>
          {gapSize === 'customize' && <Slider value={customGapSize} onChange={setCustomGapSize} />}
          <Flex gap={gapSize !== 'customize' ? gapSize : customGapSize}>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="link">Link</Button>
          </Flex>
        </Flex>
      </ExampleStory>
    )
  },
}

export const ExampleWrap: Story = {
  render: () => {
    return (
      <ExampleStory title="Auto wrap line.">
        <Flex wrap="wrap" gap="small">
          {Array.from({ length: 24 }, (_, i) => (
            <Button key={i} type="primary">
              Button
            </Button>
          ))}
        </Flex>
      </ExampleStory>
    )
  },
}

export const ExampleNesting: Story = {
  render: () => {
    const cardStyle: React.CSSProperties = {
      width: 620,
    }

    const imgStyle: React.CSSProperties = {
      display: 'block',
      width: 273,
    }
    return (
      <ExampleStory title="Nesting can achieve more complex layouts.">
        <Card hoverable style={cardStyle} styles={{ body: { padding: 0, overflow: 'hidden' } }}>
          <Flex justify="space-between">
            <img alt="avatar" style={imgStyle} />
            <Flex vertical align="flex-end" justify="space-between" style={{ padding: 32 }}>
              <Typography.Title level={3}>
                “antd is an enterprise-class UI design language and React UI library.”
              </Typography.Title>
              <Button type="primary" href="https://ant.design" target="_blank">
                Get Started
              </Button>
            </Flex>
          </Flex>
        </Card>
      </ExampleStory>
    )
  },
}
