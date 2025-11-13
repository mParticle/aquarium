import React, { useState } from 'react'
import { Button } from 'src/components'
import { type Meta, type StoryObj } from '@storybook/react'
import { ErrorModal } from './ErrorModal'

const meta: Meta = {
  title: 'Components/feedback/Modal/Error Modal',
  component: ErrorModal,
  args: {},
}
export default meta

type Story = StoryObj<typeof ErrorModal>

const ErrorModalTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button type="default" onClick={showModal}>
        Show Error Modal
      </Button>

      <ErrorModal open={isModalOpen} onClose={handleOk}>
        <div>
          <p>
            An unexpected error occurred while processing your request. Please try again or contact support if the
            problem persists.
          </p>
        </div>
      </ErrorModal>
    </>
  )
}

export const Default: Story = {
  render: ErrorModalTemplate,
}

const CustomTitleErrorModalTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button type="default" onClick={showModal}>
        Show Custom Title Error Modal
      </Button>

      <ErrorModal title="Connection Failed" open={isModalOpen} onClose={handleOk}>
        <div>
          <p>Unable to connect to the server. Please check your internet connection and try again.</p>
        </div>
      </ErrorModal>
    </>
  )
}

export const CustomTitle: Story = {
  render: CustomTitleErrorModalTemplate,
}
