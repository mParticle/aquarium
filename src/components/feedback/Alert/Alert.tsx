import { Alert as AntAlert } from 'antd'
import { type AlertProps as AntAlertProps } from 'antd'
import { useState, type ReactNode } from 'react'
import { CloseCircleFilled, InfoCircleFilled, CheckCircleFilled, ExclamationCircleFilled } from '@ant-design/icons'
import { ConfigProvider } from 'src/components'
import { Flex } from 'src/components/layout/Flex/Flex'
import { Typography } from 'src/components/general/Typography/Typography'
import { Size, FontSize, ColorError, ColorSuccess, ColorWarning, ColorInfo, MarginXxs, SizeXs } from 'src/styles/style'
import './alert.css'

export interface IAlertProps extends Omit<AntAlertProps, 'message'> {
  message?: ReactNode
  expandable?: boolean
  expandableContent?: ReactNode
}

const getIconByType = (type?: 'success' | 'info' | 'warning' | 'error') => {
  const iconProps = { style: { fontSize: FontSize, marginTop: MarginXxs } }

  switch (type) {
    case 'error':
      return <CloseCircleFilled {...iconProps} style={{ ...iconProps.style, color: ColorError }} />
    case 'success':
      return <CheckCircleFilled {...iconProps} style={{ ...iconProps.style, color: ColorSuccess }} />
    case 'warning':
      return <ExclamationCircleFilled {...iconProps} style={{ ...iconProps.style, color: ColorWarning }} />
    case 'info':
    default:
      return <InfoCircleFilled {...iconProps} style={{ ...iconProps.style, color: ColorInfo }} />
  }
}

export const Alert = (props: IAlertProps) => {
  const { expandable, expandableContent, message, type, className, ...restProps } = props
  const [isExpanded, setIsExpanded] = useState(false)

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
          type={type}
          message={expandableMessage}
          showIcon={false}
          className={`alert-expandable ${className ?? ''}`}
        />
      </ConfigProvider>
    )
  }

  return (
    <ConfigProvider>
      <AntAlert {...restProps} type={type} message={message} className={className} />
    </ConfigProvider>
  )
}

Alert.ErrorBoundary = AntAlert.ErrorBoundary
