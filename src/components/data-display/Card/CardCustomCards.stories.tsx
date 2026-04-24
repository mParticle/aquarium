import { type Meta, type StoryObj } from '@storybook/react'
import { Button, Flex, Icon, Typography } from 'src/components'
import {
  RoktAnnouncement,
  RoktBuilding,
  RoktCheckCircle,
  RoktClock,
  RoktCoinsHand,
  RoktGlobe,
  RoktLightbulb,
  RoktMail,
  RoktMarkerPin,
  RoktMonitor,
  RoktPackageSearch,
  RoktShoppingCart,
  RoktStars,
  RoktTag,
  RoktTruck,
  RoktUser,
} from 'src/components'
import {
  Blue1,
  BorderRadius,
  BorderRadiusLg,
  BoxShadowTertiary,
  ColorBgBase,
  ColorSplit,
  ColorTextTertiary,
  FontSizeSm,
  FontWeightStrong,
  Margin,
  MarginXl,
  MarginXs,
  MarginXxs,
} from 'src/styles/style'
import { ExampleStory } from 'src/utils/ExampleStory'
import React from 'react'

const iconOptions = {
  Truck: RoktTruck,
  Announcement: RoktAnnouncement,
  Building: RoktBuilding,
  CheckCircle: RoktCheckCircle,
  Clock: RoktClock,
  CoinsHand: RoktCoinsHand,
  Globe: RoktGlobe,
  Lightbulb: RoktLightbulb,
  Mail: RoktMail,
  MarkerPin: RoktMarkerPin,
  Monitor: RoktMonitor,
  PackageSearch: RoktPackageSearch,
  ShoppingCart: RoktShoppingCart,
  Stars: RoktStars,
  Tag: RoktTag,
  User: RoktUser,
} as const

type IconKey = keyof typeof iconOptions

interface ICustomCardProps {
  icon: IconKey
  eyebrow: string
  title: string
  secondaryText: string
  showButtons: boolean
  primaryButtonLabel: string
  defaultButtonLabel: string
}

function CustomCard({
  icon,
  eyebrow,
  title,
  secondaryText,
  showButtons,
  primaryButtonLabel,
  defaultButtonLabel,
}: ICustomCardProps) {
  const IconComponent = iconOptions[icon]
  return (
    <div
      style={{
        background: ColorBgBase,
        padding: MarginXl,
        display: 'flex',
        flexDirection: 'column',
        gap: Margin,
        borderRadius: BorderRadiusLg,
        boxShadow: BoxShadowTertiary,
        border: `1px solid ${ColorSplit}`,
        width: 250,
      }}>
      <div
        style={{
          background: Blue1,
          padding: Margin,
          borderRadius: BorderRadius,
          display: 'flex',
          alignSelf: 'flex-start',
          alignItems: 'center',
        }}>
        <Icon name={IconComponent} color="info" />
      </div>

      <Flex vertical gap={MarginXxs}>
        <Typography.Text
          style={{
            fontSize: FontSizeSm,
            color: ColorTextTertiary,
            fontWeight: FontWeightStrong,
            textTransform: 'uppercase',
          }}>
          {eyebrow}
        </Typography.Text>
        <Typography.Title level={4} style={{ margin: 0 }}>
          {title}
        </Typography.Title>
        <Typography.Text style={{ fontSize: FontSizeSm, color: ColorTextTertiary }}>{secondaryText}</Typography.Text>
      </Flex>

      {showButtons && (
        <Flex gap={MarginXs}>
          <Button type="primary">{primaryButtonLabel}</Button>
          <Button>{defaultButtonLabel}</Button>
        </Flex>
      )}
    </div>
  )
}

const defaultArgs: ICustomCardProps = {
  icon: 'Truck',
  eyebrow: 'Eyebrow line',
  title: 'Card title',
  secondaryText: 'Secondary text',
  showButtons: false,
  primaryButtonLabel: 'Button',
  defaultButtonLabel: 'Button',
}

const argTypes = {
  icon: {
    control: 'select' as const,
    options: Object.keys(iconOptions),
  },
  eyebrow: { control: 'text' as const },
  title: { control: 'text' as const },
  secondaryText: { control: 'text' as const },
  showButtons: { control: 'boolean' as const },
  primaryButtonLabel: { control: 'text' as const },
  defaultButtonLabel: { control: 'text' as const },
}

const meta: Meta<ICustomCardProps> = {
  title: 'Components/Data Display/Card/Custom Cards',
  args: defaultArgs,
  argTypes,
}
export default meta

type Story = StoryObj<ICustomCardProps>

export const Basic: Story = {
  render: args => (
    <ExampleStory title="A card with an icon, eyebrow label, title, and supporting secondary text.">
      <CustomCard {...args} showButtons={false} />
    </ExampleStory>
  ),
}

export const WithButtons: Story = {
  args: {
    primaryButtonLabel: 'Primary\n',
    defaultButtonLabel: 'Secondary',
    showButtons: true,
  },

  render: args => (
    <ExampleStory title="Custom card with primary and secondary action buttons.">
      <CustomCard {...args} showButtons={true} />
    </ExampleStory>
  ),
}
