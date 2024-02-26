import React from 'react'
import { type IFlexProps } from 'src/components/layout/Flex/Flex'
import { Flex } from 'src/components/layout/Flex/Flex'

export const Center = (props: Omit<IFlexProps, 'justify' | 'align'>) => {
  return (
    <>
      <Flex align="center" justify="center" {...props}>
        {props.children}
      </Flex>
    </>
  )
}
