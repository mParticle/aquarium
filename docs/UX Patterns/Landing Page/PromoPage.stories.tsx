import type { Meta, StoryObj } from '@storybook/react'
import { PromoPage } from './PromoPage'
import { PromoPageHero } from './components/PromoPageHero'
import { PromoPageBenefits } from './components/PromoPageBenefits'
import { PromoPageCard } from './components/PromoPageCard'
import zeroCopyImg from './assets/zero-copy-activation.png'
import warehouseSyncImg from './assets/warehouse-sync.png'
import architecturalFlexibilityImg from './assets/architectural-flexibility.png'

const meta: Meta<typeof PromoPage> = {
  title: 'UX Patterns/Flows/Landing Page',
  component: PromoPage,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof PromoPage>

export const FeatureLandingPage: Story = {
  name: 'Feature Landing Page',
  render: () => (
    <PromoPage>
      <PromoPageHero
        headline="Connect to your data warehouse"
        description="Activate directly from your warehouse with a zero-copy setup, or enrich your customer data with scheduled event syncs."
        buttons={{
          defaultButton: {
            label: 'Read Docs',
            onClick: () => console.log('Read docs'),
          },
          primaryButton: {
            label: 'Get Started',
            onClick: () => console.log('Get started'),
          },
        }}
      />

      <PromoPageBenefits title="Key Benefits">
        <PromoPageCard
          title="Zero-Copy Activation"
          description="Activate directly from your warehouse. Compute runs in your environment, so you maintain full control over governance, performance, and cost."
          displayOptions={{ src: zeroCopyImg, text: 'Zero-Copy Activation', type: 'img' }}
        />
        <PromoPageCard
          title="Warehouse Sync"
          description="Ingest events from your warehouse on a schedule. Combine them with other event streams to unify, enrich, and activate everywhere."
          displayOptions={{ src: warehouseSyncImg, text: 'Warehouse Sync', type: 'img' }}
        />
        <PromoPageCard
          title="Architectural Flexibility"
          description="Use zero-copy activation and warehouse sync in the same environment. Start with the model that fits today, and adapt as your stack and strategy evolve."
          displayOptions={{ src: architecturalFlexibilityImg, text: 'Architectural Flexibility', type: 'img' }}
        />
      </PromoPageBenefits>
    </PromoPage>
  ),
}
