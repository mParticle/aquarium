import { Skeleton as AntSkeleton } from 'antd'
import { type SkeletonProps as AntSkeletonProps } from 'antd'
import { ConfigProvider } from 'src/components'

export interface ISkeletonProps extends Omit<AntSkeletonProps, 'active'> {}

export const Skeleton = (props: ISkeletonProps) => {
  const defaultWidth = '100%' as const
  return (
    <ConfigProvider>
      <AntSkeleton {...props} active={true} style={{ width: defaultWidth, ...props.style }} />
    </ConfigProvider>
  )
}
