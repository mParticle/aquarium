import { type Meta, type StoryObj } from '@storybook/react'
import { Icon } from 'src/components'
import { Upload } from 'src/components/data-entry/Upload/Upload'
import { Button } from 'src/components/general/Button/Button'

const meta: Meta<typeof Upload> = {
  title: 'Components/Not Prod Ready/Data Entry/Upload',
  component: props => (
    <Upload {...props}>
      <Button icon={<Icon name="mpLogo" />}>Click to Upload</Button>
    </Upload>
  ),

  args: {
    accept: '.jpg,.png,.gif',
    action: '/upload',
    beforeUpload: (file, fileList) => {
      alert('Before Upload:')
      // Customize before upload logic
      return true
    },
    customRequest: undefined,
    data: file => {
      alert('Custom Data:')
      // Customize data logic
      return { name: file.name, type: file.type }
    },
    defaultFileList: [],
    directory: false,
    disabled: false,
    fileList: [],
    headers: { Authorization: 'Bearer token' },
    iconRender: undefined,
    isImageUrl: undefined,
    itemRender: undefined,
    listType: 'text',
    maxCount: undefined,
    method: 'post',
    multiple: false,
    name: 'file',
    openFileDialogOnClick: true,
    previewFile: undefined,
    progress: { strokeWidth: 2, showInfo: false },
    showUploadList: true,
    withCredentials: false,
    onChange: info => {
      alert('Upload Change:')
    },
    onDrop: event => {
      alert('File Drop:')
    },
    onDownload: file => {
      alert('Download:')
    },
    onPreview: file => {
      alert('Preview:')
    },
    onRemove: file => {
      alert('Remove:')
      // Customize remove logic
      return true
    },
  },
}
export default meta

type Story = StoryObj<typeof Upload>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {}

export const CustomListType: Story = {
  args: {
    listType: 'picture-card',
  },
}

export const DragAndDropUpload: Story = {
  args: {
    onDrop: event => {
      alert('File Drop:')
    },
  },
}

export const CustomProgress: Story = {
  args: {
    progress: { strokeWidth: 5, showInfo: true },
  },
}

export const CustomAcceptFileType: Story = {
  args: {
    accept: '.pdf,.docx',
  },
}

export const DisabledUpload: Story = {
  args: {
    disabled: true,
  },
}
