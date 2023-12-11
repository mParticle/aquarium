import React from "react";
import { useState } from "react";
import { Modal } from "src/components/Modal/Modal";
import { IModalProps } from "src/components/Modal/Modal";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Button } from "src/components/Button/Button";
import { LoadingModal } from "src/components/LoadingModal/LoadingModal";

const meta: Meta<typeof Modal> = {
  title: "Aquarium/Feedback/Loading Modal",
  component: Modal,

  args: {},
};
export default meta;


type Story = StoryObj<typeof Modal>

const BaseTemplate = (args: IModalProps, fetchData: () => Promise<boolean>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => { setIsModalOpen(true); };
  const handleOk = () => { setIsModalOpen(false); };
  const handleCancel = () => { setIsModalOpen(false); };

  return <>
    <Button copy="Open Loading Modal"
            type="primary"
            onClick={showModal}/>

    {isModalOpen &&
     <LoadingModal<boolean>
       fetchData={fetchData}

       title="Loading Modal"
       open={true}
       onOk={handleOk}
       onCancel={handleCancel}>

       {initData => <>
         Data resolved with - {initData + ""}
       </>}

     </LoadingModal>}
  </>;
};


const PrimaryTemplate = (args: IModalProps) => {
  return BaseTemplate(args, () => new Promise<boolean>((resolve, reject) => {
    setTimeout(() => resolve(true), 1000);
  }));
};


const ErrorTemplate = (args: IModalProps) => {
  return BaseTemplate(args, () => new Promise<boolean>((resolve, reject) => {
    setTimeout(() => reject(true), 1000);
  }));
};


export const Primary: Story = {
  render: PrimaryTemplate,
};


export const Error: Story = {
  render: ErrorTemplate,
}; 