import { type Meta, type StoryObj } from '@storybook/react'
import { Segmented } from 'src/components/data-display/Segmented/Segmented'
import { useState } from 'react'
import { Tooltip, Button } from 'src/components'
import {
  FontFamilyCode,
  PaddingLg,
  Padding,
  PaddingMd,
  BorderRadius,
  FontSize,
  MpBrandSecondary2,
  ColorBorderSecondary,
  Purple6,
  Green6,
  ColorTextSecondary,
  Geekblue6,
} from 'src/styles/style'

const meta: Meta<typeof Segmented> = {
  title: 'Components/Data Display/Segmented',
  component: Segmented,

  args: {
    options: ['Mode A', 'Mode B'],
  },
}
export default meta

type Story = StoryObj<typeof Segmented>

export const Primary: Story = {}

export const CodeExample: Story = {
  render: () => {
    const [viewMode, setViewMode] = useState('Preview')

    return (
      <div
        style={{
          padding: PaddingLg,
          border: `1px solid ${ColorBorderSecondary}`,
          borderRadius: BorderRadius,
          boxSizing: 'border-box',
        }}>
        <Segmented
          options={['Preview', 'Code']}
          value={viewMode}
          onChange={value => setViewMode(String(value))}
          style={{ marginBottom: PaddingMd }}
        />

        <div
          style={{
            background: MpBrandSecondary2,
            border: `1px solid ${ColorBorderSecondary}`,
            borderRadius: BorderRadius,
            padding: Padding,
            fontFamily: FontFamilyCode,
            fontSize: FontSize,
            height: '120px',
            width: '400px',
            boxSizing: 'border-box',
            overflow: 'hidden',
          }}>
          {viewMode === 'Preview' ? (
            <div
              style={{
                margin: 0,
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}>
              <Button variant="default">Button</Button>
            </div>
          ) : (
            <div style={{ margin: 0, padding: 0 }}>
              <div style={{ margin: 0, lineHeight: 1.4 }}>
                <span style={{ color: ColorTextSecondary }}>1 </span>
                <span style={{ color: Purple6 }}>const</span> <span style={{ color: Geekblue6 }}>MyButton</span> = (){' '}
                {'=> {'}
              </div>
              <div style={{ margin: 0, lineHeight: 1.4 }}>
                <span style={{ color: ColorTextSecondary }}>2 </span>
                <span style={{ color: Purple6 }}>return</span> {'<'}
                <span style={{ color: Geekblue6 }}>Button</span> variant=
                <span style={{ color: Green6 }}>&quot;default&quot;</span>
                {'>'}
              </div>
              <div style={{ margin: 0, lineHeight: 1.4 }}>
                <span style={{ color: ColorTextSecondary }}>3 </span>
                Button
              </div>
              <div style={{ margin: 0, lineHeight: 1.4 }}>
                <span style={{ color: ColorTextSecondary }}>4 </span>
                {'</'}
                <span style={{ color: Geekblue6 }}>Button</span>
                {'>'}
              </div>
              <div style={{ margin: 0, lineHeight: 1.4 }}>
                <span style={{ color: ColorTextSecondary }}>5 </span>
                {'}'}
              </div>
            </div>
          )}
        </div>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: {
    options: ['Mode A', 'Mode B'],
    disabled: true,
  },
}

export const DisabledWithTooltip: Story = {
  render: () => {
    const [mode, setMode] = useState('Mode A')
    return (
      <Segmented
        value={mode}
        onChange={value => setMode(String(value))}
        options={[
          'Mode A',
          {
            label: (
              <Tooltip title="Your plan does not support this feature. Contact your admin for access">
                <span style={{ cursor: 'not-allowed', color: '#999' }}>Mode B</span>
              </Tooltip>
            ),
            value: 'Mode B',
            disabled: true,
          },
        ]}
      />
    )
  },
}
