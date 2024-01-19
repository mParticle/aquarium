import { Skeleton as AntSkeleton, type SkeletonProps as AntSkeletonProps } from 'antd'

export interface ISkeletonProps extends Omit<AntSkeletonProps, 'active'> {}

export const Skeleton = (props: ISkeletonProps) => {
  const defaultWidth = '100%' as const
  return <AntSkeleton {...props} active={true} style={{ width: defaultWidth, ...props.style }} />
}
