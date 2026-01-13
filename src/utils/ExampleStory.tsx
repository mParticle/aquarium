import { Divider, Space } from 'src/components'

interface IExampleStoryProps {
  children: React.ReactNode
  title: React.ReactNode
  description?: React.ReactNode
}

export function ExampleStory(props: IExampleStoryProps) {
  return (
    <>
      <Space orientation="vertical" style={{ maxWidth: '800px' }}>
        {props.title}
        <hr />
        <br />
        {props.children}
        {props.description && (
          <>
            <Divider titlePlacement="center"></Divider>
            {props.description}
          </>
        )}
      </Space>
    </>
  )
}
