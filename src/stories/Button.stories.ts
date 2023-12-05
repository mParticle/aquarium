import { Button } from "src/components/Button"
import { Meta } from "@storybook/react"
import { StoryObj } from "@storybook/react"

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  
  tags: ["autodocs"],
  
  argTypes: {
    backgroundColor: { control: "color" },
  },
}
export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {

    // Props go here
    
  },
}