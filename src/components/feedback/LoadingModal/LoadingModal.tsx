import { useInitData } from 'src/hooks/useInitData'
import { Skeleton } from 'src/components/feedback/Skeleton/Skeleton'
import { Modal, type ModalProps, Result } from 'antd'

export interface ILoadingModalProps<Data> extends Omit<ModalProps, 'children'> {
  fetchData: () => Promise<Data>
  children: (initData: Data) => React.ReactNode
}

export function LoadingModal<Data>(props: ILoadingModalProps<Data>) {
  const [isInitLoading, isInitError, initData] = useInitData(props.fetchData)

  return (
    <>
      <Modal {...props}>
        {isInitLoading && <Skeleton />}

        {isInitError && <Result status="error" title="Error Loading" />}

        {!isInitLoading && !isInitError && props.children(initData)}
      </Modal>
    </>
  )
}
