import { create } from '@storybook/theming'
import { LightTheme } from '../design/LightTheme'

export default create({
  base: 'light',
  colorPrimary: LightTheme.token.colorPrimary,
  colorSecondary: LightTheme.token.colorPrimaryText,
  appBg: LightTheme.token.colorPrimaryBgHover,
  appContentBg: LightTheme.token.colorPrimaryBg,
  textColor: LightTheme.token.colorText,
  textInverseColor: LightTheme.token.colorTextQuaternary,
  brandTitle: 'Aquarium',
  brandImage: '/images/mParticle_by_Rokt-Blk.svg',
  brandUrl: 'https://github.com/mParticle/aquarium/',
})
