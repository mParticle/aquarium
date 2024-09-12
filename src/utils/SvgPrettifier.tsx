import { useState } from 'react'
import { Upload, Button, List, Space } from 'antd'
import { UploadOutlined, CheckOutlined } from '@ant-design/icons'
import type { UploadFile } from 'antd/es/upload/interface' // Import UploadFile type

export const SVGPrettifier = () => {
  const [files, setFiles] = useState<UploadFile[]>([]) // Specify the type for files
  const [prettifying, setPrettifying] = useState(false)
  const [statusMessage, setStatusMessage] = useState('') // State to hold success/error messages
  const [statusType, setStatusType] = useState('') // State to hold success/error type (for styling)

  const handleUpload = ({ fileList }: { fileList: UploadFile[] }) => {
    setFiles(fileList ?? []) // Use nullish coalescing to ensure fileList is an array

    // Set status message below
    const fileNames = (fileList ?? []).map(file => file.name ?? 'Unknown').join(', ')
    setStatusMessage(`Files uploaded successfully: ${fileNames}`)
    setStatusType('success') // Set message type to success
  }

  const handlePrettify = async () => {
    if ((files ?? []).length === 0) {
      setStatusMessage('No files to prettify')
      setStatusType('error')
      return
    }

    const formData = new FormData()
    ;(files ?? []).forEach(file => {
      formData.append('files', file.originFileObj as File)
    }) // Append all files

    setPrettifying(true)
    setStatusMessage('') // Clear the message while processing

    try {
      const response = await fetch('http://localhost:8000/api', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        // Define the structure of the expected error response
        type ErrorResponse = { message?: string }

        const errorData: ErrorResponse = await response.json() // Expecting server to send JSON error
        const errorMessage = errorData.message ?? 'Error processing files' // Safely access the message
        throw new Error(errorMessage)
      }

      setStatusMessage('All files have been prettified and saved successfully!')
      setStatusType('success')

      // Clear the files from the UI
      setFiles([]) // Reset the file state to clear the list in the UI
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
      setStatusMessage(`Error prettifying the files: ${errorMessage}`)
      setStatusType('error')
    } finally {
      setPrettifying(false)
    }
  }

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '10px' }}>Prettify Your Icons</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Upload your SVG files and make them consistent with our styling guidelines.
      </p>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Upload
          onChange={handleUpload}
          multiple // Allow multiple files
          accept=".svg"
          fileList={files} // Sync fileList with state
          onRemove={file => {
            setFiles((files ?? []).filter(f => f.uid !== file.uid)) // Handle file removal
          }}
          showUploadList={true} // Show uploaded files automatically
          style={{ width: '100%' }}>
          <Button
            icon={<UploadOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />}
            disabled={prettifying}
            style={{ width: '100%' }}>
            Select SVG Files
          </Button>
        </Upload>

        {files.length > 0 && (
          <List
            header={<div>Uploaded Files</div>}
            bordered
            dataSource={files}
            renderItem={file => <List.Item>{file.name}</List.Item>}
          />
        )}

        {statusMessage && (
          <div
            style={{
              color: statusType === 'success' ? 'green' : 'red', // Success or error color
              marginTop: '10px',
              fontWeight: 'bold',
            }}>
            {statusMessage}
          </div>
        )}

        <Button
          type="primary"
          icon={<CheckOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />}
          onClick={() => {
            handlePrettify().catch(console.error) // Correct async handling
          }}
          style={{ width: '100%' }}
          disabled={(files ?? []).length === 0 || prettifying}>
          {prettifying ? 'Prettifying...' : 'Prettify'}
        </Button>
      </Space>
    </div>
  )
}
