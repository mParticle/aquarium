import { Flex, type FlexProps } from 'antd'
import React from 'react'

export const Center = (props: Omit<FlexProps, 'justify' | 'align'>) => {
  return (
    <>
      <Flex align="center" justify="center" {...props}>
        {props.children}
      </Flex>
    </>
  )
}
