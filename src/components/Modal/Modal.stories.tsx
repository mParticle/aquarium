import React from "react";
import { useState } from "react";
import { Modal } from "src/components/Modal/Modal";
import { IModalProps } from "src/components/Modal/Modal";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Button } from "src/components/Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Aquarium/Feedback/Modal",
  component: Modal,

  args: {},

  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Modal>


const PrimaryTemplate = (args: IModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => { setIsModalOpen(true); };

  const handleOk = () => { setIsModalOpen(false); };

  const handleCancel = () => { setIsModalOpen(false); };

  return (<>
    <Button copy="Open Modal"
            type="primary"
            onClick={showModal}/>

    <Modal title="Basic Modal"
           open={isModalOpen}
           onOk={handleOk}
           onCancel={handleCancel}>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  </>);
};


export const Primary = PrimaryTemplate.bind(undefined);
Primary.args = {};