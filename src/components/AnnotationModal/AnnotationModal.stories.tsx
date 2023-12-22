import React from "react";
import { useState } from "react";
import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Button } from "src/components/general/Button/Button";
import { AnnotationModal } from "src/components/AnnotationModal/AnnotationModal";

const meta: Meta<typeof AnnotationModal> = {
  title: "Aquarium/Unknown/Annotations Modal",
  component: AnnotationModal,

  args: {},
};
export default meta;


type Story = StoryObj<typeof AnnotationModal>

const BaseTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => { setIsModalOpen(true); };

  return <>
    <Button copy="Open Annotation Modal"
            type="primary"
            onClick={showModal}/>

    {isModalOpen &&
     <AnnotationModal/>}
  </>;
};

const PrimaryTemplate = () => BaseTemplate();

export const Primary: Story = {
  render: PrimaryTemplate,
};