import React from 'react'
import { Card } from 'src/components/data-display/Card/Card'
import { Tooltip } from 'src/components/data-display/Tooltip/Tooltip'
import { Typography } from 'src/components/general/Typography/Typography'
import { Flex } from 'src/components/layout/Flex/Flex'
import { Radio } from 'src/components/data-entry/Radio/Radio'
import {
  ColorBorderSecondary,
  ColorPrimary,
  LineType,
  LineWidth,
  Size,
  OpacityLoading,
  Padding,
  SizeSm,
  SizeXs,
} from 'src/styles/style'

export interface RadioCardOption<T extends React.Key> {
  value: T
  title: React.ReactNode
  description?: React.ReactNode
  disabled?: boolean
  tooltipTitle?: React.ReactNode
  testId?: string
}

export interface RadioCardsProps<T extends React.Key> {
  options: Array<RadioCardOption<T>>
  value?: T
  onChange?: (value: T) => void
  disabled?: boolean
  orientation?: 'vertical' | 'horizontal'
  radioAlign?: 'start' | 'center'
  gap?: number | string
}

interface RadioCardProps {
  value: string
  title: React.ReactNode
  description?: React.ReactNode
  disabled?: boolean
  checked?: boolean
  onChange?: (value: string) => void
  radioAlign?: 'start' | 'center'
  orientation?: 'vertical' | 'horizontal'
}

const RadioCard: React.FC<RadioCardProps> = ({
  title,
  description,
  value,
  checked = false,
  onChange,
  orientation = 'vertical',
  radioAlign = 'start',
  disabled = false,
}) => {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(value)
    }
  }

  return (
    <Card
      onClick={handleClick}
      hoverable={!disabled}
      style={{
        width: '100%',
        height: '100%',
        border: `${LineWidth} ${LineType} ${checked ? ColorPrimary : ColorBorderSecondary}`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? OpacityLoading : 1,
      }}
      styles={{
        body: {
          width: '100%',
          height: '100%',
          padding: Padding,
          cursor: disabled ? 'not-allowed' : 'pointer',
        },
      }}>
      <Flex align={radioAlign === 'center' ? 'center' : 'flex-start'} style={{ width: '100%', height: '100%' }}>
        <Radio
          value={value}
          checked={checked}
          disabled={disabled}
          style={{
            pointerEvents: 'none',
            marginTop: radioAlign === 'center' ? undefined : '2px',
            marginRight: orientation === 'horizontal' ? SizeSm : SizeXs,
          }}
        />
        <Flex vertical style={{ flex: 1 }}>
          <Typography.Text size="lg">{title}</Typography.Text>
          <Typography.Text color="ColorTextDescription">{description}</Typography.Text>
        </Flex>
      </Flex>
    </Card>
  )
}

export const RadioCards = <T extends React.Key>({
  options,
  value,
  onChange,
  disabled = false,
  orientation = 'vertical',
  radioAlign = 'start',
  gap = Size,
}: RadioCardsProps<T>) => {
  return (
    <Flex vertical={orientation === 'vertical'} gap={gap}>
      {options.map(option => {
        const isDisabled = disabled || option.disabled
        const isSelected = value === option.value
        const cardValue = String(option.value)

        const card = (
          <RadioCard
            {...option}
            value={cardValue}
            checked={isSelected}
            onChange={() => onChange?.(option.value)}
            radioAlign={radioAlign}
            orientation={orientation}
            disabled={isDisabled}
          />
        )

        return (
          <Flex key={cardValue} style={{ flex: '1 1 0' }}>
            {option.tooltipTitle ? <Tooltip title={option.tooltipTitle}>{card}</Tooltip> : card}
          </Flex>
        )
      })}
    </Flex>
  )
}
