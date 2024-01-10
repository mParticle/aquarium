import * as React from "react";
import { ConfigProvider } from "antd";
import { ThemeConfig } from "antd";
import "src/styles/_theme.css";
import "src/styles/_primitives.css";

const baseTheme: ThemeConfig = {
  // token: {
  //     controlItemBgActiveHover: "var(--colors-brand-control-control-item-bg-active-hover)",
  //     colorPrimaryHover: "var(--colors-brand-primary-color-primary-hover)",
  //     fontWeightStrong: "var(--typography-font-weight-strong)",
  //     // fontWeightStrong: primitives.TypographyFontWeightStrong,
  //     blue1: "var(--colors-blue-1)"
  //     // blue1: primitives.ColorsBlue1,
  // },


  components: {
    Button: {
      colorPrimary: "var(--components-button-global-color-primary)",
      defaultBg: "var(--components-button-component-default-bg)",
      borderColorDisabled: "var(--components-button-component-border-color-disabled)",
      defaultBg: "var(--components-button-component-default-bg)",
      dangerColor: "var(--components-button-component-danger-color)",
      defaultBorderColor: "var(--components-button-component-default-border-color)",
      defaultColor: "var(--components-button-component-default-color)",
      defaultGhostBorderColor: "var(--components-button-component-default-ghost-border-color)",
      defaultGhostColor: "var(--components-button-component-default-ghost-color)",
      ghostBg: "var(--components-button-component-ghost-bg)",
      groupBorderColor: "var(--components-button-component-group-border-color)",
      linkHoverBg: "var(--components-button-component-link-hover-bg)",
      onlyIconSize: "var(--components-button-component-only-icon-size)",
      onlyIconSizeLG: "var(--components-button-component-only-icon-size-lg)",
      onlyIconSizeSM: "var(--components-button-component-only-icon-size-sm)",
      paddingInline: "var(--components-button-component-padding-inline)",
      paddingInlineLg: "var(--components-button-component-padding-inline-lg)",
      paddingInlineSm: "var(--components-button-component-padding-inline-sm)",
      primaryColor:"var(--components-button-component-primary-color)",
      textHoverBg: "var(--components-button-component-text-hover-bg)",
      colorBgContainer: "var(--components-button-global-color-bg-container)",
      borderColorDisabled: "var(--components-button-global-color-bg-container-disabled)",
      colorBgTextActive: "var(--components-button-global-color-bg-text-active)",
      colorBorder: "var(--components-button-global-color-border)",
      colorError: "var(--components-button-global-color-error)",
      colorErrorActive: "var(--components-button-global-color-error-active)",
      colorErrorBg: "var(--components-button-global-color-error-bg)",
      colorErrorBorderHover: "var(--components-button-global-color-error-border-hover)",
      colorErrorHover: "var(--components-button-global-color-error-hover)",
      colorErrorOutline: "var(--components-button-global-color-error-outline)",
      colorLink: "var(--components-button-global-color-link)",
      colorLinkActive: "var(--components-button-global-color-link-active)",
      colorLinkHover: "var(--components-button-global-color-link-hover)",
      colorPrimary: "var(--components-button-global-color-primary)",
      colorPrimaryActive: "var(--components-button-global-color-primary-active)",
      colorPrimaryBorder: "var(--components-button-global-color-primary-border)",
      colorPrimaryHover: "var(--components-button-global-color-primary-hover)",
      colorText: "var(--components-button-global-color-text)",
      colorTextDisabled: "var(--components-button-global-color-text-disabled)",
      colorTextLightSolid: "var(--components-button-global-color-text-light-solid)",
      borderRadius: "var(--components-button-global-border-radius)",
      borderRadiusLg: "var(--components-button-global-border-radius-lg)",
      borderRadiusSm: "var(--components-button-global-border-radius-sm)",
      controlHeight: "var(--components-button-global-control-height)",
      controlHeightLg: "var(--components-button-global-control-height-lg)",
      controlHeightSm: "var(--components-button-global-control-height-sm)",
      controlOutline: "var(--components-button-global-control-outline)",
      controlOutlineWidth: "var(--components-button-global-control-outline-width)",
      fontSize: "var(--components-button-global-font-size)",
      fontSizeLg: "var(--components-button-global-font-size-lg)",
      lineHeight: "var(--components-button-global-line-height)",
      lineWidth: "var(--components-button-global-line-width)",
      lineWidthFocus: "var(--components-button-global-line-width-focus)",
      marginXs: "var(--components-button-global-margin-xs)",
      paddingContentHorizontal: "var(--components-button-global-padding-content-horizontal)",
      paddingXs: "var(--components-button-global-padding-xs)",
    },
  },
} as const;


const ThemeFactory = (theme: ThemeConfig) => (props: any) =>
  <ConfigProvider {...props} theme={{ ...theme /*cssVar: true*/ }}>{props.children}</ConfigProvider>;

export const BaseTheme = ThemeFactory(baseTheme);