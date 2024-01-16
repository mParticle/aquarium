import React, { useState } from "react";

import { type Meta, type StoryObj } from "@storybook/react";

import { Button } from "src/components/general/Button/Button";
import { AnnotationModal } from "src/components/feedback/AnnotationModal/AnnotationModal";

const meta: Meta<typeof AnnotationModal> = {
  title: "Aquarium/Feedback/Annotations Modal",
  component: AnnotationModal,

  args: {},
};
export default meta;

type Story = StoryObj<typeof AnnotationModal>;

const BaseTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Annotation Modal
      </Button>

      {isModalOpen && (
        <AnnotationModal
          onOk={closeModal}
          onCancel={closeModal}
          open={isModalOpen}
        />
      )}
    </>
  );
};

const PrimaryTemplate = () => BaseTemplate();

export const Primary: Story = {
  render: PrimaryTemplate,
};
