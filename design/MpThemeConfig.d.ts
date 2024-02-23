import { ThemeConfig } from 'antd'

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
    mpColorBorderDisabled: string
  }
  components: {
    Select: { mpColorBorderDisabled: string }
    Input: { mpColorBorderDisabled: string }
    Checkbox: { mpColorBorderDisabled: string }
    Radio: { mpColorBorderDisabled: string }
    DatePicker: { mpColorBorderDisabled: string }
    TimePicker: { mpColorBorderDisabled: string }
    InputNumber: { mpColorBorderDisabled: string }
  }
}