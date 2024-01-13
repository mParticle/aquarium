import { useState } from "react";
import { Modal } from "src/components/feedback/Modal/Modal";
import { IModalProps } from "src/components/feedback/Modal/Modal";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Button } from "src/components/general/Button/Button";

const meta: Meta<typeof Modal> = {
  title: "Aquarium/Feedback/Modal",
  component: Modal,

  args: {},
};
export default meta;


type Story = StoryObj<typeof Modal>

const PrimaryTemplate = (args: IModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => { setIsModalOpen(true); };

  const handleOk = () => { setIsModalOpen(false); };

  const handleCancel = () => { setIsModalOpen(false); };

  return (<>
    <Button type="primary"
            onClick={showModal}>
      Open Modal
    </Button>
    
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


export const Primary: Story = {
  render: PrimaryTemplate,
}; 