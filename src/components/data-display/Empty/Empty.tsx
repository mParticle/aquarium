import React from 'react'
import { Empty as AntEmpty } from 'antd'
import { type EmptyProps as AntEmptyProps } from 'antd'
import { ConfigProvider, Button, Space, Icon, Typography, Flex } from 'src/components'
import './empty.css'
import { Margin } from 'src/styles/style'

export type EmptyState = 'empty' | 'error'

export interface IEmptyProps extends Omit<AntEmptyProps, 'description'> {
  /** The state of the empty component - determines the icon and styling */
  state?: EmptyState
  /** Title text - will be rendered with proper Typography */
  title?: string
  /** Description text - will be rendered with proper Typography, or JSX for custom content (legacy) */
  description?: string | React.ReactNode
  /** Button configuration - legacy single button support */
  button?: {
    text: string
    onClick: () => void
    type?: 'primary' | 'default'
    icon?: React.ReactNode
  }
  /** Primary button configuration */
  primaryButton?: {
    text: string
    onClick: () => void
    icon?: React.ReactNode
  }
  /** Default button configuration */
  defaultButton?: {
    text: string
    onClick: () => void
    icon?: React.ReactNode
  }
}

export const Empty = (props: IEmptyProps) => {
  const { state = 'empty', title, description, button, primaryButton, defaultButton, image, ...restProps } = props

  // Determine the image based on state or use legacy image prop
  const getImage = () => {
    // If legacy image prop is provided, use it
    if (image !== undefined) {
      return image
    }

    // Otherwise use state-based approach
    if (state === 'error') {
      return <Icon name="stateError" size="lg" color="error" />
    }
    return AntEmpty.PRESENTED_IMAGE_SIMPLE
  }

  // Build unified description content
  const getDescription = () => {
    const hasButtons = button ?? primaryButton ?? defaultButton
    if (!title && !description && !hasButtons) {
      return null
    }

    const renderButtons = () => {
      // Legacy single button support
      if (button && !primaryButton && !defaultButton) {
        return (
          <Button type={button.type ?? 'default'} onClick={button.onClick} icon={button.icon}>
            {button.text}
          </Button>
        )
      }

      const buttons = []

      if (defaultButton) {
        buttons.push(
          <Button key="default" type="default" onClick={defaultButton.onClick} icon={defaultButton.icon}>
            {defaultButton.text}
          </Button>,
        )
      }

      if (primaryButton) {
        buttons.push(
          <Button key="primary" type="primary" onClick={primaryButton.onClick} icon={primaryButton.icon}>
            {primaryButton.text}
          </Button>,
        )
      }

      return buttons.length > 0 ? <Space size={8}>{buttons}</Space> : null
    }

    return (
      <Flex vertical gap={16} align="center" style={{ marginTop: Margin }}>
        <Space direction="vertical" size={2}>
          {title && <Typography.Text size="lg">{title}</Typography.Text>}
          {description &&
            (typeof description === 'string' ? (
              <Typography.Text color="ColorTextDescription">{description}</Typography.Text>
            ) : (
              description
            ))}
        </Space>

        {renderButtons()}
      </Flex>
    )
  }

  return (
    <ConfigProvider>
      <AntEmpty image={getImage()} description={getDescription()} {...restProps} />
    </ConfigProvider>
  )
}

// Maintain backward compatibility with static properties
Empty.PRESENTED_IMAGE_DEFAULT = AntEmpty.PRESENTED_IMAGE_DEFAULT
Empty.PRESENTED_IMAGE_SIMPLE = AntEmpty.PRESENTED_IMAGE_SIMPLE
