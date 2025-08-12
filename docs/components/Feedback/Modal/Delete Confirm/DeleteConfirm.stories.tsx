import { useState } from 'react'
import { Modal, Button, Dropdown, Icon, Table, message } from 'src/components'
import { type Meta, type StoryObj } from '@storybook/react'
import { FontWeightStrong, ColorErrorText, Margin } from 'src/styles/style'

const meta: Meta = {
  title: 'Components/Feedback/Modal/Delete Confirm',
  component: Modal,
}
export default meta

type Story = StoryObj

const DeleteConfirmTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === 'delete') {
      setIsModalOpen(true)
    } else {
      console.log('Menu item clicked:', key)
    }
  }

  const handleDelete = () => {
    setIsModalOpen(false)
    // Show success message after deletion
    void message.success('Item deleted successfully')
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const menuItems = {
    menu: {
      items: [
        {
          key: 'edit',
          label: 'Edit',
        },
        {
          key: 'duplicate',
          label: 'Duplicate',
        },
        {
          key: 'archive',
          label: 'Archive',
        },
        {
          key: 'delete',
          label: 'Delete',
          danger: true,
        },
      ],
      onClick: handleMenuClick,
    },
  }

  const tableData = [
    {
      key: '1',
      name: 'Item Name',
      type: 'Item Type',
      category: 'Category A',
      createdBy: 'John Doe',
      actions: (
        <Dropdown {...menuItems} placement="bottom">
          <a onClick={e => e.preventDefault()}>
            <Icon name="moreActions" size="lg" color="default" />
          </a>
        </Dropdown>
      ),
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      width: '200px',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: '150px',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      width: '150px',
    },
    {
      title: 'Created by',
      dataIndex: 'createdBy',
      key: 'createdBy',
      width: '150px',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      align: 'center' as const,
      width: '100px',
    },
  ]

  return (
    <>
      <div>
        <Table columns={columns} dataSource={tableData} pagination={false} size="middle" className="no-hover-table" />

        <style>{`
          .no-hover-table .ant-table-tbody > tr:hover > td {
            background: transparent !important;
          }
        `}</style>
      </div>

      <Modal
        title="Delete item?"
        open={isModalOpen}
        onCancel={handleCancel}
        mask={false}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="delete" type="primary" danger onClick={handleDelete}>
            Delete
          </Button>,
        ]}>
        <div>
          <p>
            This action will permanently delete <span style={{ fontWeight: FontWeightStrong }}>Item Name</span> and all
            associated data. If this item is currently being used in other areas of the system, those connections will
            be removed.
          </p>

          <p
            style={{
              color: ColorErrorText,
              marginTop: Margin,
            }}>
            This action can&apos;t be undone.
          </p>
        </div>
      </Modal>
    </>
  )
}

export const UXFlow: Story = {
  render: DeleteConfirmTemplate,
}

const SimpleDeleteConfirmTemplate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleDelete = () => {
    setIsModalOpen(false)
    // Handle delete action here
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <Button type="default" onClick={showModal}>
        View Delete Confirm
      </Button>

      <Modal
        title="Delete item?"
        open={isModalOpen}
        onCancel={handleCancel}
        mask={false}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="delete" type="primary" danger onClick={handleDelete}>
            Delete
          </Button>,
        ]}>
        <div>
          <p>
            This action will permanently delete <span style={{ fontWeight: FontWeightStrong }}>Item Name</span> and all
            associated data. If this item is currently being used in other areas of the system, those connections will
            be removed.
          </p>

          <p
            style={{
              color: ColorErrorText,
              marginTop: Margin,
            }}>
            This action can&apos;t be undone.
          </p>
        </div>
      </Modal>
    </>
  )
}

export const DeleteConfirm: Story = {
  render: SimpleDeleteConfirmTemplate,
}
