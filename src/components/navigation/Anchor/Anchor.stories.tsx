import { Meta } from "@storybook/react";
import { StoryObj } from "@storybook/react";
import { Anchor } from "src/components/navigation/Anchor/Anchor";

const meta: Meta<typeof Anchor> = {
  title: "Aquarium/Navigation/Anchor",
  component: Anchor,

  args: {
    affix: true,
    bounds: 5,
    offsetTop: 0,
    showInkInFixed: false,
    targetOffset: undefined,
    direction: 'vertical',
    replace: false,
    items: [
      { key: '1', href: '#section1', title: 'Section 1', target: '_blank', children: [] },
      { key: '2', href: '#section2', title: 'Section 2', target: '_blank', children: [] },
    ],
    onClick: (e: React.MouseEvent, link: object) => { alert('Anchor Click') },
    // onChange: (currentActiveLink: string) => { alert('Anchor Change') },
    // getContainer: () => window,
    // getCurrentAnchor: (activeLink: string) => activeLink,
  },
  
  argTypes:{
    direction:{
      control: "select", 
      options: ["vertical", "horizontal"],
    }
    
  }
};
export default meta;


type Story = StoryObj<typeof Anchor>

/*
  Initial story templates generated by AI.
  Customize the stories based on specific requirements.
*/

export const Primary: Story = {};

export const HorizontalDirection: Story = {
  args: {
    direction: 'horizontal',
  },
};


export const WithCustomItems: Story = {
  args: {
    items: [
      { key: 'a', href: '#itemA', title: 'Item A', target: '_blank', children: [] },
      { key: 'b', href: '#itemB', title: 'Item B', target: '_blank', children: [] },
      { key: 'c', href: '#itemC', title: 'Item C', target: '_blank', children: [] },
      { key: 'd', href: '#itemD', title: 'Item D', target: '_blank', children: [] },
    ],
  },
};

export const ShowInkInFixed: Story = {
  args: {
    affix: false,
    showInkInFixed: true,
  },
};