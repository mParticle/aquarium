import { Modal as AntModal } from "antd";
import { ModalProps as AntModalProps } from "antd";

export interface IModalProps extends AntModalProps {
}

export const Modal = (props: IModalProps) => {
  return <>
    <AntModal {...props}/>
  </>;
};