import * as React from "react";
import {ConfigProvider} from "antd";
import {ThemeConfig} from "antd";
import * as primitives from 'src/styles/primitives'
import 'src/styles/_theme.css'
import 'src/styles/_primitives.css'

const baseTheme: ThemeConfig = {
    token: {
        controlItemBgActiveHover: "var(--colors-brand-control-control-item-bg-active-hover)",
        colorPrimaryHover: "var(--colors-brand-primary-color-primary-hover)",

        fontWeightStrong: "var(--typography-font-weight-strong)",
        // fontWeightStrong: primitives.TypographyFontWeightStrong,

        blue1: "var(--colors-blue-1)"
        // blue1: primitives.ColorsBlue1,
    },


    components: {
        Button: {
            colorPrimary: "var(--components-button-global-color-primary)",
            defaultBg: "var(--components-button-component-default-bg)",
        },
    },
} as const;


const ThemeFactory = (theme: ThemeConfig) => (props: any) =>
    <ConfigProvider {...props} theme={{...theme /*cssVar: true*/}}>{props.children}</ConfigProvider>;

export const BaseTheme = ThemeFactory(baseTheme);