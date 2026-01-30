import { type ThemeConfig } from 'antd'

export type IMpThemeConfig = ThemeConfig & {
  token: {
    'mpBrandPrimary.1': string
    ['mpBrandPrimary.2']: string
    ['mpBrandPrimary.3']: string
    ['mpBrandPrimary.4']: string
    ['mpBrandPrimary.5']: string
    ['mpBrandPrimary.6']: string
    ['mpBrandPrimary.7']: string
    ['mpBrandPrimary.8']: string
    ['mpBrandPrimary.9']: string
    ['mpBrandPrimary.10']: string
    ['mpBrandSecondary.1']: string
    ['mpBrandSecondary.2']: string
    ['mpBrandSecondary.3']: string
    ['mpBrandSecondary.4']: string
    ['mpBrandSecondary.5']: string
    ['mpBrandSecondary.6']: string
    ['mpBrandSecondary.7']: string
    ['mpBrandSecondary.8']: string
    ['mpBrandSecondary.9']: string
    ['mpBrandSecondary.10']: string
    ['roktBrand.1']: string
    ['roktBrand.2']: string
    ['roktBrand.3']: string
    ['roktBrand.4']: string
    ['roktBrand.5']: string
    ['roktBrand.6']: string
    ['roktBrand.7']: string
    ['roktBrand.8']: string
    ['roktBrand.9']: string
    ['roktBrand.10']: string
    'roktGray.1': string
    ['roktGray.2']: string
    ['roktGray.3']: string
    ['roktGray.4']: string
    ['roktGray.5']: string
    ['roktGray.6']: string
    ['roktGray.7']: string
    ['roktGray.8']: string
    ['roktGray.9']: string
    ['roktGray.10']: string
    mpColorBorderDisabled: string
    mpColorIconStrong: string
    mpColorIconBrand: string
    mpIconSizeXS: number
    mpIconSizeSM: number
    mpIconSizeMD: number
    mpIconSizeLG: number
    mpIconSizeXL: number
    mpIconSizeXXL: number
    mpIconSizeXXXL: number
    mpIconSizeXXXXL: number
    mpQueryItem_borderWidth: string
    mpQueryItem_borderColor: string
    mpQueryItem_borderColor_active: string
    mpQueryItem_borderColor_disabled: string
    mpQueryItem_borderColor_error: string
    mpQueryItem_bgColor: string
    mpQueryItem_bgColor_hover: string
    mpQueryItem_bgColor_active: string
    mpQueryItem_bgColor_disabled: string
    mpQueryItem_borderWidth_active: string
    mpQueryItem_shadow_focus: string
    mpQueryItem_color_disabled: string
    'mpQueryItem|valueSelector_fontWeight': string
    'mpQueryItem|valueSelector_color': string
    mpQueryItem_padding: number
    mpQueryItem_gap: number
    mpQueryItem_height: number
    mpQueryItem_borderRadius: number
    'mpQueryItem|action|primary_color': string
    'mpQueryItem|action|secondary_color': string
    'mpQueryItem|action_fontWeight': string
    mpQueryItem_shadow_active: string
    mpQueryItem_shadow: string
    mpQueryItem_borderColor_focus: string
    mpQueryItem_borderColor_hover: string
    colorFillAlterSolid: string
    colorFilledHandleBg: string
    solidTextColor: string
    transparent: string
    colorBgSolid: string
    colorBgSolidActive: string
    colorBgSolidHover: string
  }
  components: {
    Steps: {
      colorPrimary: string
      colorPrimaryBorder?: string
      colorPrimaryBg?: string
      colorPrimaryHover?: string
    }
    Slider?: {
      trackHoverBg?: string
      trackBg?: string
      handleColor?: string
      handleActiveColor?: string
      dotActiveBorderColor?: string
      handleActiveOutlineColor?: string
    }
    Progress: {
      defaultColor: string
    }
    Button: {
      borderColorDisabled: string
    }
    Tooltip?: {
      colorTextLightSolid?: string
      colorBgSpotlight?: string
    }
    Input: {
      activeShadow: string
      errorActiveShadow: string
      warningActiveShadow: string
    }
    Cascader: {
      colorHighlight: string
    }
  }
}
