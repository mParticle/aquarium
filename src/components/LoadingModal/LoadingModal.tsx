import React from "react";
import { useInitData } from "src/hooks/useInitData";
import { Modal } from "src/components/Modal/Modal";
import { IModalProps } from "src/components/Modal/Modal";
import { Result } from "src/components/Result/Result";
import { Skeleton } from "src/components/Skeleton/Skeleton";

export interface ILoadingModalProps<Data> extends Omit<IModalProps, "children"> {
  fetchData(): Promise<Data>;
  children(initData: Data): React.ReactNode;
}

export function LoadingModal<Data>(props: ILoadingModalProps<Data>) {
  const [isInitLoading, isInitError, initData] = useInitData(props.fetchData);
  if (initData) debugger;

  return <>
    <Modal {...props}>

      {isInitLoading && <Skeleton/>}

      {isInitError &&
       <Result status="error"
               title="Error Loading"/>}

      {!isInitLoading && !isInitError &&
       props.children(initData)}

    </Modal>
  </>;

}