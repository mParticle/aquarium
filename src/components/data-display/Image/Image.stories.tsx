import { type Meta, type StoryObj } from '@storybook/react'
import { Image } from 'src/components/data-display/Image/Image'

const meta: Meta<typeof Image> = {
  title: 'Components/Data Display/Image',
  component: Image,

  args: {},
}
export default meta

type Story = StoryObj<typeof Image>

export const Primary: Story = {
  args: {
    src: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
    preview: false,
    width: 100,
    height: 100,
  },
}

// <Image src={src} alt={text} width={140} height={100} preview={false} />
