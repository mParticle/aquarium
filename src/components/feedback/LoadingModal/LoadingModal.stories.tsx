import { useState } from 'react'
import { type Meta, type StoryObj } from '@storybook/react'

import { Button } from 'src/components/general/Button/Button'
import {
  LoadingModal,
  type ILoadingModalProps,
} from 'src/components/feedback/LoadingModal/LoadingModal'

const meta: Meta<typeof LoadingModal> = {
  title: 'Aquarium/Feedback/Loading Modal',
  component: LoadingModal,

  args: {},
}
export default meta

type Story = StoryObj<typeof LoadingModal>

const BaseTemplate = (args: ILoadingModalProps<unknown>, fetchData: () => Promise<boolean>) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Loading Modal
      </Button>

      {isModalOpen && (
        <LoadingModal<boolean>
          fetchData={fetchData}
          title="Loading Modal"
          open={true}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {initData => <>Data resolved with - {initData + ''}</>}
        </LoadingModal>
      )}
    </>
  )
}

const PrimaryTemplate = (args: ILoadingModalProps<unknown>) =>
  BaseTemplate(
    args,
    async () =>
      await new Promise<boolean>((resolve, reject) => {
        setTimeout(() => {
          resolve(true)
        }, 1000)
      }),
  )

const ErrorTemplate = (args: ILoadingModalProps<unknown>) =>
  BaseTemplate(
    args,
    async () =>
      await new Promise<boolean>((resolve, reject) => {
        setTimeout(() => {
          reject(new Error())
        }, 1000)
      }),
  )

export const Primary: Story = {
  render: PrimaryTemplate,
}

export const ErrorStory: Story = {
  render: ErrorTemplate,
}
