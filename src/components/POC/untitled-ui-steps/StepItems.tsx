import React from 'react'
import {
  SizeXxs,
  ColorBorder,
  ColorBgContainer,
  SizeLg,
  SizeXs,
  ColorPrimary,
  SizeXl,
  MpBrandPrimary6,
} from 'src/styles/style'
import { Flex, Icon, Typography } from 'src/components'

interface StepItemProps {
  title: string
  status?: 'finish' | 'process' | 'wait'
}

export const FinishedStepItem = ({ title }: StepItemProps) => ({
  title: <Typography.Text color="ColorTextSecondary">{title}</Typography.Text>,
  icon: (
    <Flex
      vertical
      align="center"
      justify="center"
      style={{ width: SizeLg, height: SizeLg, borderRadius: '50%', backgroundColor: ColorPrimary }}>
      <Icon name="selected" color="white" size="sm" />
    </Flex>
  ),
  status: 'finish' as const,
})

export const ProcessStepItem = ({ title }: StepItemProps) => ({
  title: (
    <Typography.Text strong color="ColorPrimaryText">
      {title}
    </Typography.Text>
  ),
  icon: (
    <>
      <div
        style={{
          position: 'absolute',
          top: `-${SizeXxs}`,
          right: SizeXxs,
          width: SizeXl,
          height: SizeXl,
          borderRadius: '50%',
          backgroundColor: 'white',
          border: `2px solid ${MpBrandPrimary6}`,
          boxSizing: 'border-box',
        }}
      />
      <Flex
        align="center"
        justify="center"
        style={{
          position: 'relative',
          width: SizeLg,
          height: SizeLg,
          borderRadius: '50%',
          backgroundColor: ColorPrimary,
          boxSizing: 'border-box',
        }}>
        <div
          style={{
            width: SizeXs,
            height: SizeXs,
            borderRadius: '50%',
            backgroundColor: 'white',
          }}
        />
      </Flex>
    </>
  ),
  status: 'process' as const,
})

export const WaitStepItem = ({ title }: StepItemProps) => ({
  title: <Typography.Text color="ColorTextSecondary">{title}</Typography.Text>,
  icon: (
    <Flex
      align="center"
      justify="center"
      style={{
        width: SizeLg,
        height: SizeLg,
        borderRadius: '50%',
        backgroundColor: ColorBgContainer,
        border: `2px solid ${ColorBorder}`,
        boxSizing: 'border-box',
      }}>
      <div
        style={{
          width: SizeXs,
          height: SizeXs,
          borderRadius: '50%',
          backgroundColor: ColorBorder,
        }}
      />
    </Flex>
  ),
  status: 'wait' as const,
})

export const createStepItem = ({ title, status = 'wait' }: StepItemProps) => {
  switch (status) {
    case 'finish':
      return FinishedStepItem({ title })
    case 'process':
      return ProcessStepItem({ title })
    case 'wait':
    default:
      return WaitStepItem({ title })
  }
}
