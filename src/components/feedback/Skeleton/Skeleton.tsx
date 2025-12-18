import { type ReactNode } from 'react'
import { Skeleton as AntSkeleton } from 'antd'
import { type SkeletonProps as AntSkeletonProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface ISkeletonProps extends Omit<AntSkeletonProps, 'active'> {
  children?: ReactNode
}

export const Skeleton = (props: ISkeletonProps) => {
  const defaultWidth = '100%' as const
  return (
    <ConfigProvider>
      <AntSkeleton {...props} active style={{ width: defaultWidth, ...props.style }}>
        {props.children}
      </AntSkeleton>
    </ConfigProvider>
  )
}

Skeleton.Avatar = AntSkeleton.Avatar
Skeleton.Button = AntSkeleton.Button
Skeleton.Node = AntSkeleton.Node
Skeleton.Image = AntSkeleton.Image
Skeleton.Input = AntSkeleton.Input
