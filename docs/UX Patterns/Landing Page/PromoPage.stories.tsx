import type { Meta, StoryObj } from '@storybook/react'
import { PromoPage } from './PromoPage'
import { PromoPageHero } from './components/PromoPageHero'
import { PromoPageBenefits } from './components/PromoPageBenefits'
import { PromoPageCard } from './components/PromoPageCard'

const meta: Meta<typeof PromoPage> = {
  title: 'UX Patterns/Landing Page/Promo Page',
  component: PromoPage,
}

export default meta

type Story = StoryObj<typeof PromoPage>

export const DefaultPromoPage: Story = {
  render: function Render() {
    return (
      <PromoPage>
        <PromoPageHero
          headline="Create your new feature"
          description="Transform your workflow with our innovative solution designed to boost productivity and streamline your processes."
          buttons={{
            defaultButton: {
              label: 'Read Docs',
              onClick: () => console.log('Read Docs clicked!'),
            },
            primaryButton: {
              label: 'Create new feature',
              iconName: 'add',
              onClick: () => console.log('Create new feature clicked!'),
            },
          }}
        />

        <PromoPageBenefits title="Key Benefits">
          <PromoPageCard
            title="Value #1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper velit eu ipsum vestibulum, non porta tellus rutrum. Nulla nisl odio, tincidunt non nisl at, sodales feugiat sapien."
            displayOptions={{
              type: 'link',
              src: '#',
              text: 'Button',
            }}
          />
          <PromoPageCard
            title="Value #2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper velit eu ipsum vestibulum, non porta tellus rutrum. Nulla nisl odio, tincidunt non nisl at, sodales feugiat sapien."
            displayOptions={{
              type: 'link',
              src: '#',
              text: 'Button',
            }}
          />
          <PromoPageCard
            title="Value #3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper velit eu ipsum vestibulum, non porta tellus rutrum. Nulla nisl odio, tincidunt non nisl at, sodales feugiat sapien."
            displayOptions={{
              type: 'link',
              src: '#',
              text: 'Button',
            }}
          />
        </PromoPageBenefits>
      </PromoPage>
    )
  },
}
