import { Alert as AntAlert } from 'antd'
import { type AlertProps as AntAlertProps } from 'antd'
import { useState, type ReactNode } from 'react'
import { CloseCircleFilled, InfoCircleFilled, CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons'
import { ConfigProvider } from 'src/components'
import { Flex } from 'src/components/layout/Flex/Flex'
import { Typography } from 'src/components/general/Typography/Typography'
import {
  Size,
  FontSize,
  ColorError,
  ColorSuccess,
  ColorWarning,
  ColorInfo,
  RoktGray6,
  MarginXxs,
  SizeXs,
} from 'src/styles/style'
import './alert.css'

export type AlertType = 'success' | 'info' | 'warning' | 'error' | 'default'

export interface IAlertProps extends Omit<AntAlertProps, 'message' | 'type'> {
  message?: ReactNode
  expandable?: boolean
  expandableContent?: ReactNode
  type?: AlertType
}

const getIconByType = (type?: AlertType) => {
  const iconProps = { style: { fontSize: FontSize, marginTop: MarginXxs } }

  switch (type) {
    case 'error':
      return <CloseCircleFilled {...iconProps} style={{ ...iconProps.style, color: ColorError }} />
    case 'success':
      return <CheckCircleFilled {...iconProps} style={{ ...iconProps.style, color: ColorSuccess }} />
    case 'warning':
      return <ExclamationCircleFilled {...iconProps} style={{ ...iconProps.style, color: ColorWarning }} />
    case 'default':
      return <InfoCircleFilled {...iconProps} style={{ ...iconProps.style, color: RoktGray6 }} />
    case 'info':
    default:
      return <InfoCircleFilled {...iconProps} style={{ ...iconProps.style, color: ColorInfo }} />
  }
}

export const Alert = (props: IAlertProps) => {
  const { expandable, expandableContent, message, type, className, ...restProps } = props
  const [isExpanded, setIsExpanded] = useState(false)
  const isDefault = type === 'default'
  const antType = isDefault ? 'info' : type
  const defaultClass = isDefault ? 'ant-alert-default' : ''

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  if (expandable && expandableContent) {
    const expandableMessage = (
      <Flex gap={SizeXs} align="flex-start">
        {getIconByType(type)}
        <Flex vertical gap={Size} style={{ flex: 1 }}>
          <Typography.Text size="base">
            {message}{' '}
            {!isExpanded && (
              <Typography.Link color="ColorText" underline onClick={toggleExpand} onMouseDown={e => e.preventDefault()}>
                View details
              </Typography.Link>
            )}
          </Typography.Text>
          {isExpanded && (
            <>
              {expandableContent}
              <Typography.Link onClick={toggleExpand} color="ColorText" underline onMouseDown={e => e.preventDefault()}>
                Hide details
              </Typography.Link>
            </>
          )}
        </Flex>
      </Flex>
    )

    return (
      <ConfigProvider>
        <AntAlert
          {...restProps}
          type={antType}
          message={expandableMessage}
          showIcon={false}
          className={`alert-expandable ${defaultClass} ${className ?? ''}`.trim()}
        />
      </ConfigProvider>
    )
  }

  return (
    <ConfigProvider>
      <AntAlert
        {...restProps}
        type={antType}
        message={message}
        className={`${defaultClass} ${className ?? ''}`.trim()}
      />
    </ConfigProvider>
  )
}

Alert.ErrorBoundary = AntAlert.ErrorBoundary
