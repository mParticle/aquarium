import { ThemeConfig } from 'antd'
import { CSSProperties } from 'react';

export type IMpThemeConfig = Optional<ThemeConfig & {
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
    mpColorBorderDisabled: string
    mpQueryItem_borderWidth: '0 0 1px 0'
    mpQueryItem_borderColor: '#c3aeff'
    mpQueryItem_borderColor_active: '#3600d1'
    mpQueryItem_borderColor_disabled: '#dcdcd8'
    mpQueryItem_borderColor_error: '#f5222d'
    mpQueryItem_bgColor: '#ffffff'
    mpQueryItem_bgColor_hover: '#f8f6fb'
    mpQueryItem_bgColor_active: '#ebe8f8'
    mpQueryItem_bgColor_disabled: '#faf9f8'
    mpQueryItem_borderWidth_active: '0 0 2px 0'
    mpQueryItem_shadow_focus: '0 0 0 2px rgba(54, 0, 209, 0.1)'
    mpQueryItem_color_disabled: '#505249'
    'mpQueryItem|valueSelector_fontWeight': '600'
    'mpQueryItem|valueSelector_color': '#20007a'
    mpQueryItem_padding: 4
    mpQueryItem_gap: 4
    mpQueryItem_height: 32
    mpQueryItem_borderRadius: 2
    'mpQueryItem|action|primary_color': '#3600d1'
    'mpQueryItem|action|secondary_color': '#505249'
    'mpQueryItem|action_fontWeight': '400'
    mpQueryItem_shadow_active: '0 0 0 2px rgba(54, 0, 209, 0.1)'
    mpQueryItem_shadow: 'none'
    mpQueryItem_borderColor_focus: '#3600d1'
    mpQueryItem_borderColor_hover: '#3600d1'
  }
  components: {
    Button: ComponentConfig & { style: Record<SemanticDOM, CSSProperties> },
    Select: { mpColorBorderDisabled: string }
    Input: { mpColorBorderDisabled: string }
    Checkbox: { mpColorBorderDisabled: string }
    Radio: { mpColorBorderDisabled: string }
    DatePicker: { mpColorBorderDisabled: string }
    TimePicker: { mpColorBorderDisabled: string }
    InputNumber: { mpColorBorderDisabled: string }
  }
}>;
