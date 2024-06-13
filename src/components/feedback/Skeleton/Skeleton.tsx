import { Skeleton as AntSkeleton } from 'antd'
import { type SkeletonProps as AntSkeletonProps } from 'antd'

export interface ISkeletonProps extends Omit<AntSkeletonProps, 'active'> {}

export const Skeleton = (props: ISkeletonProps) => {
  const defaultWidth = '100%' as const
  return <AntSkeleton {...props} active style={{ width: defaultWidth, ...props.style }} />
}

Skeleton.Avatar = AntSkeleton.Avatar
Skeleton.Button = AntSkeleton.Button
Skeleton.Node = AntSkeleton.Node
Skeleton.Image = AntSkeleton.Image
Skeleton.Input = AntSkeleton.Input
