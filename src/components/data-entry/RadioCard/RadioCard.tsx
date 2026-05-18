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
import './RadioCard.css'

export interface RadioCardOption<T extends React.Key> {
  value: T
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
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
  radioPosition?: 'start' | 'end'
  gap?: number | string
}

interface RadioCardProps {
  value: string
  title: React.ReactNode
  description?: React.ReactNode
  icon?: React.ReactNode
  disabled?: boolean
  checked?: boolean
  onChange?: (value: string) => void
  radioAlign?: 'start' | 'center'
  radioPosition?: 'start' | 'end'
  orientation?: 'vertical' | 'horizontal'
}

const RadioCard: React.FC<RadioCardProps> = ({
  title,
  description,
  icon,
  value,
  checked = false,
  onChange,
  orientation = 'vertical',
  radioAlign = 'start',
  radioPosition = 'start',
  disabled = false,
}) => {
  const handleClick = () => {
    if (!disabled && onChange) {
      onChange(value)
    }
  }

  const radioGap = orientation === 'horizontal' ? SizeSm : SizeXs
  const radioMarginTop = radioAlign === 'center' ? undefined : '2px'

  const radio = (
    <Radio
      value={value}
      checked={checked}
      disabled={disabled}
      style={{
        pointerEvents: 'none',
        marginTop: radioMarginTop,
        marginRight: radioPosition === 'start' ? radioGap : 0,
        marginLeft: radioPosition === 'end' ? radioGap : 0,
      }}
    />
  )

  const iconNode = icon ? (
    <Flex align={radioAlign === 'center' ? 'center' : 'flex-start'} style={{ marginRight: SizeXs }}>
      {icon}
    </Flex>
  ) : null

  return (
    <Card
      onClick={handleClick}
      hoverable={!disabled}
      className="radio-card"
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
        {radioPosition === 'start' && radio}
        {iconNode}
        <Flex vertical style={{ flex: 1 }}>
          <Typography.Text size="lg">{title}</Typography.Text>
          <Typography.Text color="ColorTextDescription">{description}</Typography.Text>
        </Flex>
        {radioPosition === 'end' && radio}
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
  radioPosition = 'start',
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
            radioPosition={radioPosition}
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
