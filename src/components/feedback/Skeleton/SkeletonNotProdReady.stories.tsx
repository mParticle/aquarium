import { Skeleton } from 'src/components/feedback/Skeleton/Skeleton'
import { type Meta, type StoryObj } from '@storybook/react'
import { ExampleStory } from 'src/utils/ExampleStory'
import { Avatar, Button, Icon, Radio, Switch } from 'src/components'
import { useState } from 'react'
import { List, type RadioChangeEvent } from 'antd'
import { Space } from 'src/components'
import { Form } from 'src/components'
import { Divider } from 'src/components'
import { createElement } from 'react'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Not Prod Ready/Feedback/Skeleton',
  component: props => <Skeleton {...props} style={{ height: '200px', width: '200px' }}></Skeleton>,

  args: {
    avatar: false,
    loading: true,
    paragraph: false,
    round: false,
    title: false,
  },
}
export default meta

type Story = StoryObj<typeof Skeleton>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {
  args: {
    paragraph: true,
  },
}

export const AvatarPlaceholder: Story = {
  args: {
    avatar: {
      shape: 'circle',
      size: 'large',
    },
  },
}

export const Paragraph: Story = {
  args: {
    paragraph: { rows: 7 },
  },
}

export const RoundEdges: Story = {
  args: {
    round: true,
    paragraph: true,
  },
}

export const Title: Story = {
  args: {
    title: {
      width: 70,
    },
  },
}

export const ExampleBasic: Story = {
  render: () => {
    return (
      <ExampleStory title="Simplest Skeleton usage.">
        <Skeleton />
      </ExampleStory>
    )
  },
}

export const ExampleCombiniation: Story = {
  render: () => {
    return (
      <ExampleStory title="Complex combination with avatar and multiple paragraphs.">
        <Skeleton avatar paragraph={{ rows: 4 }} />
      </ExampleStory>
    )
  },
}

export const ExampleConfigs: Story = {
  render: () => {
    type SizeType = 'default' | 'small' | 'large'
    type ButtonShapeType = 'circle' | 'square' | 'round' | 'default'
    type AvatarShapeType = 'circle' | 'square'

    const [active, setActive] = useState(false)
    const [block, setBlock] = useState(false)
    const [size, setSize] = useState<SizeType>('default')
    const [buttonShape, setButtonShape] = useState<ButtonShapeType>('default')
    const [avatarShape, setAvatarShape] = useState<AvatarShapeType>('circle')

    const handleActiveChange = (checked: boolean): void => {
      setActive(checked)
    }

    const handleBlockChange = (checked: boolean): void => {
      setBlock(checked)
    }

    const handleSizeChange = (e: RadioChangeEvent): void => {
      setSize(e.target.value as SizeType)
    }

    const handleShapeButton = (e: RadioChangeEvent): void => {
      setButtonShape(e.target.value as ButtonShapeType)
    }

    const handleAvatarShape = (e: RadioChangeEvent): void => {
      setAvatarShape(e.target.value as AvatarShapeType)
    }

    return (
      <ExampleStory title="Skeleton Button, Avatar, Input, Image and Node.">
        <Space>
          <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
          <Skeleton.Avatar active={active} size={size} shape={avatarShape} />
          <Skeleton.Input active={active} size={size} />
        </Space>
        <br />
        <br />
        <Skeleton.Button active={active} size={size} shape={buttonShape} block={block} />
        <br />
        <br />
        <Skeleton.Input active={active} size={size} block={block} />
        <br />
        <br />
        <Space>
          <Skeleton.Image active={active} />
          <Skeleton.Node active={active}>
            <Icon name="mpLogo" size="xxxxl" color="success" />
          </Skeleton.Node>
        </Space>
        <Divider />
        <Form layout="inline" style={{ margin: '16px 0' }}>
          <Space size={16} wrap>
            <Form.Item label="Active">
              <Switch checked={active} onChange={handleActiveChange} />
            </Form.Item>
            <Form.Item label="Button and Input Block">
              <Switch checked={block} onChange={handleBlockChange} />
            </Form.Item>
            <Form.Item label="Size">
              <Radio.Group value={size} onChange={handleSizeChange}>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="small">Small</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Button Shape">
              <Radio.Group value={buttonShape} onChange={handleShapeButton}>
                <Radio.Button value="default">Default</Radio.Button>
                <Radio.Button value="square">Square</Radio.Button>
                <Radio.Button value="round">Round</Radio.Button>
                <Radio.Button value="circle">Circle</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Avatar Shape">
              <Radio.Group value={avatarShape} onChange={handleAvatarShape}>
                <Radio.Button value="square">Square</Radio.Button>
                <Radio.Button value="circle">Circle</Radio.Button>
              </Radio.Group>
            </Form.Item>
          </Space>
        </Form>
      </ExampleStory>
    )
  },
}

export const ExampleSubComponent: Story = {
  render: () => {
    const [loading, setLoading] = useState<boolean>(false)

    const showSkeleton = () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }

    return (
      <ExampleStory title="Skeleton contains sub component.">
        <Space direction="vertical" style={{ width: '100%' }} size={16}>
          <Skeleton loading={loading}>
            <h4 style={{ marginBottom: 16 }}>Ant Design, a design language</h4>
            <p>
              We supply a series of design principles, practical patterns and high quality design resources (Sketch and
              Axure), to help people create their product prototypes beautifully and efficiently.
            </p>
          </Skeleton>
          <Button onClick={showSkeleton} disabled={loading}>
            Show Skeleton
          </Button>
        </Space>
      </ExampleStory>
    )
  },
}

export const ExampleList: Story = {
  render: () => {
    interface IconTextProps {
      icon: any
      text: React.ReactNode
    }

    const listData = Array.from({ length: 3 }).map((_, i) => ({
      href: 'https://ant.design',
      title: `ant design part ${i + 1}`,
      avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
      description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
      content:
        'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    }))

    const IconText: React.FC<IconTextProps> = ({ icon, text }: { icon: any; text: any }) => (
      <>
        {createElement(icon, { style: { marginRight: 8 } })}
        {text}
      </>
    )

    const [loading, setLoading] = useState(true)

    const onChange = (checked: boolean) => {
      setLoading(!checked)
    }
    return (
      <ExampleStory title="Use skeleton in list component.">
        <Switch checked={!loading} onChange={onChange} style={{ marginBottom: 16 }} />
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              actions={
                !loading
                  ? [
                      <IconText icon={<Icon name="alicorn"></Icon>} text="156" key="list-vertical-star-o" />,
                      <IconText icon={<Icon name="users" />} text="156" key="list-vertical-like-o" />,
                      <IconText icon={<Icon name="setup" />} text="2" key="list-vertical-message" />,
                    ]
                  : undefined
              }
              extra={
                !loading && (
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                )
              }>
              <Skeleton loading={loading} avatar>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<a href={item.href}>{item.title}</a>}
                  description={item.description}
                />
                {item.content}
              </Skeleton>
            </List.Item>
          )}
        />
      </ExampleStory>
    )
  },
}
