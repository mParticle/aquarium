import { type Meta } from '@storybook/react'
import { ButtonProps, Divider, Typography } from 'antd'
import AntIcon from '@ant-design/icons'
import { Icon, Button, ConfigProvider } from 'src/components'
import { Icons } from 'src/constants/Icons'

type DemoProps = {
  buttonSize: ButtonProps['size']
  buttonType: ButtonProps['type']
  iconName: keyof typeof Icons
}

export const Demo = ({ buttonSize, buttonType, iconName = 'C360' }: DemoProps) => {
  return (
    <>
      <Typography.Title>Aquarium Icon Wrapped in Ant Component</Typography.Title>
      <Button size={buttonSize} type={buttonType} icon={<AntIcon component={Icons[iconName]} />}>
        Click me
      </Button>
      <Divider />
      <Typography.Title>Aquarium Icon Component</Typography.Title>
      <Button size={buttonSize} type={buttonType} icon={<Icon name={iconName} />}>
        Click me
      </Button>
    </>
  )
}

const meta: Meta = {
  title: 'Aquarium/General/AntIcons',
  component: Demo,
  decorators: [
    Story => (
      <ConfigProvider>
        <Story />
      </ConfigProvider>
    ),
  ],
  argTypes: {
    buttonSize: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    buttonType: {
      control: 'select',
      options: ['default', 'primary', 'dashed', 'link', 'text'],
    },
    icon: {
      controls: 'select',
      options: Object.keys(Icon),
    },
  },
}

export default meta
