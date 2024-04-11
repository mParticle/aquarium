import Action from './Action'
import { Qualifier } from './Qualifier'
import { IMpThemeConfig } from 'design/MpThemeConfig'
import { useTheme } from 'src/components/other/ThemeContext/ThemeContext'
import { MpQueryItemActionPrimaryColor, MpQueryItemBgColor, MpQueryItemBgColorHover, MpQueryItemBorderColor, MpQueryItemBorderRadius, MpQueryItemBorderWidth, MpQueryItemHeight, MpQueryItemPadding } from 'src/styles/style'

export const QueryItem = () => {
  return <>DO NOT USE THIS OR YOU WILL BE FIRED!</>
}

const queryItemTheme: IMpThemeConfig = {
  token: {
    borderRadius: parseInt(MpQueryItemBorderRadius),
    colorPrimary: MpQueryItemBgColor,
    colorPrimaryHover: MpQueryItemBgColorHover,
    colorPrimaryBorder: MpQueryItemBorderColor,
    controlHeight: parseInt(MpQueryItemHeight)
  },
  components: {
    Button: {
      lineWidth: 0,
      paddingBlock: MpQueryItemPadding,
      paddingInline: MpQueryItemPadding,
      primaryColor: MpQueryItemActionPrimaryColor,
  
      style: {
        "border-width": MpQueryItemBorderWidth,
        "border-color": MpQueryItemBorderColor
      }
    }
  }
}

QueryItem.Action = useTheme(queryItemTheme, Action)
QueryItem.Qualifier = useTheme(queryItemTheme, Qualifier)

