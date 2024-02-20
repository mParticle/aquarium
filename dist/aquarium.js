var iD = Object.defineProperty, oD = Object.defineProperties;
var lD = Object.getOwnPropertyDescriptors;
var hx = Object.getOwnPropertySymbols;
var uD = Object.prototype.hasOwnProperty, sD = Object.prototype.propertyIsEnumerable;
var mx = (r, o, s) => o in r ? iD(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[o] = s, Ne = (r, o) => {
  for (var s in o || (o = {}))
    uD.call(o, s) && mx(r, s, o[s]);
  if (hx)
    for (var s of hx(o))
      sD.call(o, s) && mx(r, s, o[s]);
  return r;
}, gi = (r, o) => oD(r, lD(o));
import { jsx as B, Fragment as Al, jsxs as ka } from "react/jsx-runtime";
import { ConfigProvider as LT, Button as PT, FloatButton as cD, Rate as fD, Form as Pl, TreeSelect as dD, Select as vD, Mentions as zT, Radio as s1, ColorPicker as pD, Slider as hD, Cascader as Eg, DatePicker as mD, Checkbox as IT, Input as Jv, InputNumber as gD, Switch as yD, Upload as bD, AutoComplete as SD, TimePicker as CD, Transfer as ED, Collapse as wD, Timeline as xD, Calendar as TD, Segmented as RD, Tabs as _D, Tag as HT, Tour as kD, Carousel as MD, Tooltip as OD, Statistic as ND, Tree as DD, Image as AD, QRCode as LD, Badge as $T, Card as c1, Avatar as UT, Descriptions as jT, Table as PD, Empty as f1, Popover as zD, List as FT, Progress as ID, Result as HD, Spin as $D, Skeleton as UD, Watermark as jD, Popconfirm as FD, Drawer as VD, Modal as BD, notification as WD, Alert as VT, message as KD, Flex as GD, Divider as qD, Space as YD, Layout as ep, Steps as QD, Anchor as XD, Dropdown as BT, Breadcrumb as WT, Pagination as ZD, Menu as JD, Affix as eA, App as tA } from "antd";
import { Col as J3, Grid as eH, Row as tH } from "antd";
import * as T from "react";
import Ma, { useEffect as Bo, useState as Wo, useMemo as wS, useCallback as Ml, useRef as Ka, useLayoutEffect as nA, useImperativeHandle as KT, createContext as wg, useContext as Ou, forwardRef as rA, createElement as aA } from "react";
const iA = {
  token: {
    colorFillContent: "rgba(0, 0, 0, 0.03999999910593033)",
    colorFillAlter: "#f8f6fb",
    colorBgContainerDisabled: "rgba(0, 0, 0, 0)",
    colorLinkHover: "#5f29f8",
    controlOutline: "rgba(0.21176470816135406, 0, 0.8196078538894653, 0.10000000149011612)",
    controlItemBgHover: "#ebe8f8",
    controlItemBgActive: "#ebe8f8",
    colorText: "#0f0e0e",
    colorTextSecondary: "#212020",
    colorTextTertiary: "rgba(0, 0, 0, 0.7200000286102295)",
    colorTextQuaternary: "rgba(0, 0, 0, 0.6399999856948853)",
    colorFill: "rgba(0, 0, 0, 0.1599999964237213)",
    colorFillSecondary: "#f8f6fb",
    colorFillTertiary: "rgba(0, 0, 0, 0.07999999821186066)",
    colorFillQuaternary: "rgba(0, 0, 0, 0)",
    colorBgLayout: "#fff",
    colorBgSpotlight: "rgba(0, 0, 0, 0.6399999856948853)",
    colorBorder: "#c3aeff",
    colorBorderSecondary: "rgba(0, 0, 0, 0.07999999821186066)",
    colorSplit: "rgba(0, 0, 0, 0.07999999821186066)",
    colorBgMask: "rgba(0, 0, 0, 0.23999999463558197)",
    colorTextBase: "#0f0e0e",
    colorPrimary: "#3600d1",
    colorError: "#b03757",
    colorWarning: "#a74d1d",
    colorSuccess: "#204829",
    colorInfo: "#2e436d",
    paddingMD: 18,
    paddingLG: 20,
    paddingXL: 24,
    marginLG: 20,
    marginXL: 24,
    marginXXL: 28,
    paddingContentHorizontalLG: 20,
    paddingContentHorizontalSM: 18,
    marginMD: 16,
    "blue.1": "#f4f8ff",
    "yellow.1": "#fefae3",
    "red.1": "#feeeef",
    "teal.1": "#effffe",
    fontFamily: "'GT America', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontSizeMD: 14,
    lineHeightMD: 1.5700000524520874,
    "whiteAlpha.1": "rgba(1, 1, 1, 0)",
    "blackAlpha.1": "rgba(0, 0, 0, 0)",
    controlHeightMD: 32,
    xXS: 4,
    "orange.1": "#fff0e8",
    "purple.1": "#fef5ff",
    "teal.2": "#ccf8f5",
    "teal.3": "#b2e6e2",
    "teal.4": "#9edad5",
    "teal.5": "#89cbc6",
    "teal.6": "#76bbb6",
    "blackAlpha.3": "rgba(0, 0, 0, 0.07999999821186066)",
    "blackAlpha.4": "rgba(0, 0, 0, 0.11999999731779099)",
    "blackAlpha.5": "rgba(0, 0, 0, 0.1599999964237213)",
    "blackAlpha.6": "rgba(0, 0, 0, 0.23999999463558197)",
    "blackAlpha.7": "rgba(0, 0, 0, 0.3199999928474426)",
    "blackAlpha.8": "rgba(0, 0, 0, 0.47999998927116394)",
    "blackAlpha.9": "rgba(0, 0, 0, 0.6399999856948853)",
    "blackAlpha.10": "rgba(0, 0, 0, 0.7200000286102295)",
    "blackAlpha.11": "rgba(0, 0, 0, 0.8799999952316284)",
    "whiteAlpha.3": "rgba(1, 1, 1, 0.07999999821186066)",
    "whiteAlpha.4": "rgba(1, 1, 1, 0.11999999731779099)",
    "whiteAlpha.5": "rgba(1, 1, 1, 0.1599999964237213)",
    "whiteAlpha.6": "rgba(1, 1, 1, 0.23999999463558197)",
    "whiteAlpha.7": "rgba(1, 1, 1, 0.3199999928474426)",
    "whiteAlpha.8": "rgba(1, 1, 1, 0.47999998927116394)",
    "whiteAlpha.9": "rgba(1, 1, 1, 0.6399999856948853)",
    "whiteAlpha.10": "rgba(1, 1, 1, 0.7200000286102295)",
    "whiteAlpha.11": "rgba(1, 1, 1, 0.8799999952316284)",
    "blue.2": "#d5e3ff",
    "blue.3": "#adc5f3",
    "blue.4": "#7fa1e1",
    "blue.5": "#6486c7",
    "blue.6": "#456095",
    "blue.7": "#2e436d",
    "blue.8": "#253657",
    "yellow.2": "#fdf6cb",
    "orange.2": "#ffe6d9",
    "orange.3": "#fad2bd",
    "orange.4": "#ffc8aa",
    "red.2": "#ffcfdc",
    "red.3": "#ffafc4",
    "red.4": "#fa94ae",
    "purple.2": "#fce0ff",
    "purple.3": "#f9b7ff",
    "purple.4": "#e995f1",
    "blue.9": "#182338",
    "blue.10": "#111928",
    "teal.7": "#498d88",
    "teal.8": "#3b746f",
    "teal.9": "#28504d",
    "teal.10": "#1b3634",
    "yellow.3": "#f7eca3",
    "yellow.4": "#f3e58b",
    "yellow.5": "#e2d272",
    "yellow.6": "#cebe59",
    "yellow.7": "#bdac43",
    "yellow.8": "#a79730",
    "yellow.9": "#786c1e",
    "yellow.10": "#514811",
    "orange.5": "#fdb087",
    "orange.6": "#f09362",
    "orange.7": "#da7743",
    "orange.8": "#c66634",
    "orange.9": "#a74d1d",
    "orange.10": "#78330e",
    "red.5": "#ee7998",
    "red.6": "#d95b7c",
    "red.7": "#c34465",
    "red.8": "#b03757",
    "red.9": "#972a47",
    "red.10": "#721c33",
    "purple.5": "#d278da",
    "purple.6": "#b85fc0",
    "purple.7": "#9842a0",
    "purple.8": "#782c7f",
    "purple.9": "#521d57",
    "purple.10": "#351138",
    xS: 8,
    sM: 12,
    mS: 16,
    lG: 20,
    xL: 24,
    xXL: 28,
    "fontSize-H1": 38,
    "fontSize-H2": 30,
    "fontSize-H3": 24,
    "fontSize-H4": 20,
    "fontSize-H5": 16,
    "fontSize-Icon": 12,
    lineHeightSM: 1.6699999570846558,
    lineHeightH1: 1.2100000381469727,
    lineHeightH2: 1.2699999809265137,
    lineHeightH3: 1.3300000429153442,
    lineHeightH4: 1.399999976158142,
    lineHeightH5: 1.5,
    borderRadiusMD: 4,
    fontFamilyCode: "'RobotoMono', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    "gray.1": "#fff",
    "gray.2": "#faf9f8",
    "gray.3": "#eceae9",
    "gray.4": "#dcdcd8",
    "gray.5": "#babbb5",
    "gray.6": "#717368",
    "gray.7": "#505249",
    "gray.8": "#2c2d2b",
    "gray.9": "#212020",
    "gray.10": "#0f0e0e",
    "green.1": "#eeffef",
    "green.2": "#cffad8",
    "green.3": "#a7ecb6",
    "green.4": "#8bdb9c",
    "green.5": "#6fc281",
    "green.6": "#5aac6b",
    "green.7": "#40874f",
    "green.8": "#2f683b",
    "green.9": "#204829",
    "green.10": "#122816",
    mD: 18,
    "blurple.1": "#f8f6fb",
    "blurple.2": "#ebe8f8",
    "blurple.3": "#dbceff",
    "blurple.4": "#c3aeff",
    "blurple.5": "#ab8eff",
    "blurple.6": "#8255ff",
    "blurple.7": "#5f29f8",
    "blurple.8": "#3600d1",
    "blurple.9": "#2c00aa",
    "blurple.10": "#20007a",
    "whiteAlpha.2": "rgba(1, 1, 1, 0.03999999910593033)",
    "whiteAlpha.12": "#fff",
    "blackAlpha.2": "rgba(0, 0, 0, 0.03999999910593033)",
    "blackAlpha.12": "#000",
    colorDisabled: "rgba(0, 0, 0, 0.7200000286102295)",
    fontSizeXS: 10
  },
  components: {
    Steps: {
      colorPrimary: "#505249",
      controlItemBgActive: "#eceae9",
      lineHeight: 1.5700000524520874
    },
    Progress: {
      colorFillSecondary: "#eceae9",
      lineHeight: 1.5700000524520874,
      defaultColor: "#505249",
      remainingColor: "#eceae9"
    },
    Button: {
      borderRadius: 4,
      defaultGhostBorderColor: "#3600d1",
      defaultGhostColor: "#3600d1",
      onlyIconSizeLG: 20,
      onlyIconSizeSM: 12,
      paddingInline: 16,
      paddingInlineLG: 16,
      paddingInlineSM: 8,
      lineHeight: 1.5700000524520874
    },
    Menu: {
      borderRadius: 4,
      controlHeightSM: 32,
      darkItemBg: "#0f0e0e",
      itemSelectedColor: "#0f0e0e",
      lineHeight: 1.5700000524520874
    },
    Pagination: {
      borderRadius: 4,
      lineHeight: 1.5700000524520874
    },
    DatePicker: {
      borderRadius: 4,
      lineHeight: 1.5700000524520874
    },
    Input: {
      borderRadius: 4,
      lineHeight: 1.5700000524520874,
      paddingBlockLG: 8,
      paddingInline: 12,
      paddingInlineLG: 12,
      paddingInlineSM: 8
    },
    Radio: {
      borderRadius: 4,
      lineHeight: 1.5700000524520874
    },
    Select: {
      borderRadius: 4,
      lineHeight: 1.5700000524520874,
      optionLineHeight: 1.5700000524520874,
      multipleItemHeightSM: 16
    },
    TimePicker: {
      borderRadius: 4,
      lineHeight: 1.5700000524520874
    },
    TreeSelect: {
      borderRadius: 4,
      lineHeight: 1.5700000524520874
    },
    Avatar: {
      borderRadius: 4,
      lineHeight: 1.5700000524520874
    },
    Segmented: {
      borderRadius: 4,
      lineHeight: 1.5700000524520874
    },
    Table: {
      borderRadius: 4,
      lineHeight: 1.5700000524520874,
      footerBg: "#f8f6fb",
      headerBg: "#f8f6fb"
    },
    Tabs: {
      borderRadius: 4,
      lineHeight: 1.5700000524520874
    },
    Tooltip: {
      borderRadius: 4,
      lineHeight: 1.5700000524520874
    },
    Tour: {
      borderRadius: 4,
      lineHeight: 1.5700000524520874
    },
    Spin: {
      lineHeight: 1.5700000524520874
    },
    Result: {
      lineHeight: 1.5700000524520874,
      lineHeightHeading3: 1.3300000429153442
    },
    Notification: {
      lineHeight: 1.5700000524520874
    },
    Modal: {
      lineHeight: 1.5700000524520874
    },
    Message: {
      lineHeight: 1.5700000524520874
    },
    Alert: {
      lineHeight: 1.5700000524520874
    },
    Typography: {
      lineHeight: 1.5700000524520874,
      lineHeightHeading1: 1.2100000381469727,
      lineHeightHeading2: 1.2699999809265137,
      lineHeightHeading3: 1.3300000429153442
    },
    Anchor: {
      lineHeight: 1.5700000524520874
    },
    Breadcrumb: {
      lineHeight: 1.5700000524520874
    },
    Dropdown: {
      lineHeight: 1.5700000524520874
    },
    Cascader: {
      lineHeight: 1.5700000524520874
    },
    Checkbox: {
      lineHeight: 1.5700000524520874
    },
    Form: {
      lineHeight: 1.5700000524520874
    },
    InputNumber: {
      paddingBlockLG: 8,
      paddingInline: 12,
      paddingInlineLG: 12,
      paddingInlineSM: 8,
      lineHeight: 1.5700000524520874,
      borderRadius: 4
    },
    Rate: {
      lineHeight: 1.5700000524520874
    },
    Upload: {
      lineHeight: 1.5700000524520874
    },
    Transfer: {
      lineHeight: 1.5700000524520874,
      listWidth: 200
    },
    Slider: {
      lineHeight: 1.5700000524520874
    },
    Switch: {
      lineHeight: 1.5700000524520874
    },
    Badge: {
      dotSize: 8,
      indicatorHeight: 18,
      indicatorHeightSM: 12,
      statusSize: 8
    },
    Calendar: {
      lineHeight: 1.5700000524520874
    },
    Card: {
      lineHeight: 1.5700000524520874
    },
    Carousel: {
      lineHeight: 1.5700000524520874
    },
    Collapse: {
      lineHeight: 1.5700000524520874
    },
    Descriptions: {
      lineHeight: 1.5700000524520874
    },
    List: {
      lineHeight: 1.5700000524520874
    },
    Popover: {
      lineHeight: 1.5700000524520874
    },
    QRCode: {
      lineHeight: 1.5700000524520874
    },
    Statistic: {
      lineHeight: 1.5700000524520874
    },
    Tag: {
      lineHeight: 1.5700000524520874
    },
    Timeline: {
      lineHeight: 1.5700000524520874
    },
    Tree: {
      borderRadius: 4,
      lineHeight: 1.5700000524520874
    },
    AutoComplete: {
      borderRadius: 4,
      lineHeight: 1.5700000524520874
    }
  }
}, Qe = (r) => /* @__PURE__ */ B(LT, gi(Ne({}, r), { theme: iA })), xg = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(PT, gi(Ne({}, r), { children: r.children })) });
xg.Group = PT.Group;
const c3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(cD, Ne({}, r)) }), f3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(fD, Ne({}, r)) }), Au = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(Pl, gi(Ne({}, r), { children: r.children })) });
Au.useForm = Pl.useForm;
Au.useWatch = Pl.useWatch;
Au.useFormInstance = Pl.useFormInstance;
Au.Item = Pl.Item;
Au.List = Pl.List;
Au.displayName = Pl.displayName;
Au.Provider = Pl.Provider;
Au.ErrorList = Pl.ErrorList;
const d3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(dD, Ne({}, r)) }), v3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(vD, Ne({}, r)) }), oA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(zT, Ne({}, r)) });
oA.getMentions = zT.getMentions;
const GT = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(s1, Ne({}, r)) });
GT.Group = s1.Group;
GT.Button = s1.Button;
const p3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(pD, Ne({}, r)) }), h3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(hD, Ne({}, r)) }), d1 = (r) => /* @__PURE__ */ B(LT, { children: /* @__PURE__ */ B(Eg, Ne({}, r)) });
d1.Panel = Eg.Panel;
d1.SHOW_PARENT = Eg.SHOW_PARENT;
d1.SHOW_CHILD = Eg.SHOW_CHILD;
const m3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(mD, Ne({}, r)) }), lA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(IT, Ne({}, r)) });
lA.Group = IT.Group;
const tp = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(Jv, Ne({}, r)) });
tp.Group = Jv.Group;
tp.Password = Jv.Password;
tp.Search = Jv.Search;
tp.TextArea = Jv.TextArea;
const g3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(gD, Ne({}, r)) }), y3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(yD, Ne({}, r)) }), b3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(bD, Ne({}, r)) }), S3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(SD, Ne({}, r)) }), C3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(CD, Ne({}, r)) }), E3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(ED, Ne({}, r)) }), w3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(wD, Ne({}, r)) }), x3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(xD, Ne({}, r)) }), T3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(TD, Ne({}, r)) }), R3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(RD, Ne({}, r)) }), _3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(_D, Ne({}, r)) }), uA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(HT, Ne({}, r)) }), sA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(HT.CheckableTag, Ne({}, r)) });
uA.CheckableTag = sA;
const k3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(kD, Ne({}, r)) }), M3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(MD, Ne({}, r)) }), Tg = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(OD, gi(Ne({}, r), { children: /* @__PURE__ */ B(Al, { children: r.children }) })) }), O3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(ND, Ne({}, r)) }), N3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(DD, Ne({}, r)) }), D3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(AD, Ne({}, r)) }), A3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(LD, Ne({}, r)) }), cA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B($T, Ne({}, r)) });
cA.Ribbon = $T.Ribbon;
const qT = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(c1, Ne({}, r)) });
qT.Meta = c1.Meta;
qT.Grid = c1.Grid;
const YT = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(UT, Ne({}, r)) });
YT.Group = UT.Group;
const fA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(jT, Ne({}, r)) });
fA.Item = jT.Item;
const L3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(PD, Ne({}, r)) }), QT = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(f1, Ne({}, r)) });
QT.PRESENTED_IMAGE_DEFAULT = f1.PRESENTED_IMAGE_DEFAULT;
QT.PRESENTED_IMAGE_SIMPLE = f1.PRESENTED_IMAGE_SIMPLE;
const P3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(zD, gi(Ne({}, r), { children: /* @__PURE__ */ B(Al, { children: r.children }) })) }), dA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(FT, Ne({}, r)) });
dA.Item = FT.Item;
const z3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(ID, Ne({}, r)) }), XT = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(HD, Ne({}, r)) }), vA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B($D, Ne({}, r)) }), pA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(UD, gi(Ne({}, r), { active: !0, style: Ne({ width: "100%" }, r.style) })) }), I3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(jD, Ne({}, r)) }), H3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(FD, gi(Ne({}, r), { children: /* @__PURE__ */ B(Al, { children: r.children }) })) }), $3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(VD, Ne({}, r)) }), hA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(BD, Ne({}, r)) }), U3 = (r) => {
  const [o, s] = WD.useNotification();
  return /* @__PURE__ */ ka(Qe, { children: [
    s,
    /* @__PURE__ */ B("span", { onClick: () => {
      o.open(Ne({}, r));
    }, children: r.children })
  ] });
}, mA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(VT, Ne({}, r)) });
mA.ErrorBoundary = VT.ErrorBoundary;
const j3 = (r) => {
  const [o, s] = KD.useMessage();
  return /* @__PURE__ */ ka(Qe, { children: [
    s,
    /* @__PURE__ */ B("span", { onClick: () => {
      o.open(Ne({}, r));
    }, children: r.children })
  ] });
}, gA = (r) => {
  Bo(r, []);
};
function yA(r) {
  const [o, s] = Wo(!0), [c, d] = Wo(!1), [m, h] = Wo(void 0);
  return gA(() => {
    r().then((C) => {
      h(C);
    }).catch(() => {
      d(!0);
    }).finally(() => {
      s(!1);
    });
  }), [o, c, m];
}
function F3(r) {
  const [o, s, c] = yA(r.fetchData);
  return /* @__PURE__ */ B(Al, { children: /* @__PURE__ */ ka(hA, gi(Ne({}, r), { children: [
    o && /* @__PURE__ */ B(pA, {}),
    s && /* @__PURE__ */ B(XT, { status: "error", title: "Error Loading" }),
    !o && !s && r.children(c)
  ] })) });
}
const v1 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(GD, Ne({}, r)) }), Ll = (r) => /* @__PURE__ */ B(Al, { children: /* @__PURE__ */ B(v1, gi(Ne({ align: "center", justify: "center" }, r), { children: r.children })) }), V3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(qD, Ne({}, r)) }), bA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(YD, Ne({}, r)) }), Rf = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(ep, Ne({}, r)) });
Rf.Sider = ep.Sider;
Rf.Footer = ep.Footer;
Rf.Content = ep.Content;
Rf.Header = ep.Header;
const B3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(QD, Ne({}, r)) }), W3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(XD, Ne({}, r)) }), SA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(BT, gi(Ne({}, r), { children: r.children })) });
SA.Button = BT.Button;
const CA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(WT, Ne({}, r)) });
CA.Item = WT.Item;
const K3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(ZD, Ne({}, r)) });
function ZT(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var JT = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(r) {
  (function() {
    var o = {}.hasOwnProperty;
    function s() {
      for (var m = "", h = 0; h < arguments.length; h++) {
        var C = arguments[h];
        C && (m = d(m, c(C)));
      }
      return m;
    }
    function c(m) {
      if (typeof m == "string" || typeof m == "number")
        return m;
      if (typeof m != "object")
        return "";
      if (Array.isArray(m))
        return s.apply(null, m);
      if (m.toString !== Object.prototype.toString && !m.toString.toString().includes("[native code]"))
        return m.toString();
      var h = "";
      for (var C in m)
        o.call(m, C) && m[C] && (h = d(h, C));
      return h;
    }
    function d(m, h) {
      return h ? m ? m + " " + h : m + h : m;
    }
    r.exports ? (s.default = s, r.exports = s) : window.classNames = s;
  })();
})(JT);
var EA = JT.exports;
const wn = /* @__PURE__ */ ZT(EA);
function an() {
  return an = Object.assign ? Object.assign.bind() : function(r) {
    for (var o = 1; o < arguments.length; o++) {
      var s = arguments[o];
      for (var c in s)
        Object.prototype.hasOwnProperty.call(s, c) && (r[c] = s[c]);
    }
    return r;
  }, an.apply(this, arguments);
}
function Bn(r) {
  "@babel/helpers - typeof";
  return Bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Bn(r);
}
function wA(r, o) {
  if (Bn(r) != "object" || !r)
    return r;
  var s = r[Symbol.toPrimitive];
  if (s !== void 0) {
    var c = s.call(r, o || "default");
    if (Bn(c) != "object")
      return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(r);
}
function eR(r) {
  var o = wA(r, "string");
  return Bn(o) == "symbol" ? o : String(o);
}
function tt(r, o, s) {
  return o = eR(o), o in r ? Object.defineProperty(r, o, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[o] = s, r;
}
function gx(r, o) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(r);
    o && (c = c.filter(function(d) {
      return Object.getOwnPropertyDescriptor(r, d).enumerable;
    })), s.push.apply(s, c);
  }
  return s;
}
function Te(r) {
  for (var o = 1; o < arguments.length; o++) {
    var s = arguments[o] != null ? arguments[o] : {};
    o % 2 ? gx(Object(s), !0).forEach(function(c) {
      tt(r, c, s[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : gx(Object(s)).forEach(function(c) {
      Object.defineProperty(r, c, Object.getOwnPropertyDescriptor(s, c));
    });
  }
  return r;
}
function xS(r, o) {
  (o == null || o > r.length) && (o = r.length);
  for (var s = 0, c = new Array(o); s < o; s++)
    c[s] = r[s];
  return c;
}
function xA(r) {
  if (Array.isArray(r))
    return xS(r);
}
function tR(r) {
  if (typeof Symbol != "undefined" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function p1(r, o) {
  if (r) {
    if (typeof r == "string")
      return xS(r, o);
    var s = Object.prototype.toString.call(r).slice(8, -1);
    if (s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set")
      return Array.from(r);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return xS(r, o);
  }
}
function TA() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ar(r) {
  return xA(r) || tR(r) || p1(r) || TA();
}
function nR(r) {
  if (Array.isArray(r))
    return r;
}
function RA(r, o) {
  var s = r == null ? null : typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
  if (s != null) {
    var c, d, m, h, C = [], x = !0, E = !1;
    try {
      if (m = (s = s.call(r)).next, o === 0) {
        if (Object(s) !== s)
          return;
        x = !1;
      } else
        for (; !(x = (c = m.call(s)).done) && (C.push(c.value), C.length !== o); x = !0)
          ;
    } catch (M) {
      E = !0, d = M;
    } finally {
      try {
        if (!x && s.return != null && (h = s.return(), Object(h) !== h))
          return;
      } finally {
        if (E)
          throw d;
      }
    }
    return C;
  }
}
function rR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xe(r, o) {
  return nR(r) || RA(r, o) || p1(r, o) || rR();
}
function _A(r, o) {
  if (r == null)
    return {};
  var s = {}, c = Object.keys(r), d, m;
  for (m = 0; m < c.length; m++)
    d = c[m], !(o.indexOf(d) >= 0) && (s[d] = r[d]);
  return s;
}
function Fn(r, o) {
  if (r == null)
    return {};
  var s = _A(r, o), c, d;
  if (Object.getOwnPropertySymbols) {
    var m = Object.getOwnPropertySymbols(r);
    for (d = 0; d < m.length; d++)
      c = m[d], !(o.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(r, c) && (s[c] = r[c]);
  }
  return s;
}
var TS = { exports: {} }, cn = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yx;
function kA() {
  if (yx)
    return cn;
  yx = 1;
  var r = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), h = Symbol.for("react.context"), C = Symbol.for("react.server_context"), x = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), H;
  H = Symbol.for("react.module.reference");
  function V(A) {
    if (typeof A == "object" && A !== null) {
      var G = A.$$typeof;
      switch (G) {
        case r:
          switch (A = A.type, A) {
            case s:
            case d:
            case c:
            case E:
            case M:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case C:
                case h:
                case x:
                case N:
                case _:
                case m:
                  return A;
                default:
                  return G;
              }
          }
        case o:
          return G;
      }
    }
  }
  return cn.ContextConsumer = h, cn.ContextProvider = m, cn.Element = r, cn.ForwardRef = x, cn.Fragment = s, cn.Lazy = N, cn.Memo = _, cn.Portal = o, cn.Profiler = d, cn.StrictMode = c, cn.Suspense = E, cn.SuspenseList = M, cn.isAsyncMode = function() {
    return !1;
  }, cn.isConcurrentMode = function() {
    return !1;
  }, cn.isContextConsumer = function(A) {
    return V(A) === h;
  }, cn.isContextProvider = function(A) {
    return V(A) === m;
  }, cn.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === r;
  }, cn.isForwardRef = function(A) {
    return V(A) === x;
  }, cn.isFragment = function(A) {
    return V(A) === s;
  }, cn.isLazy = function(A) {
    return V(A) === N;
  }, cn.isMemo = function(A) {
    return V(A) === _;
  }, cn.isPortal = function(A) {
    return V(A) === o;
  }, cn.isProfiler = function(A) {
    return V(A) === d;
  }, cn.isStrictMode = function(A) {
    return V(A) === c;
  }, cn.isSuspense = function(A) {
    return V(A) === E;
  }, cn.isSuspenseList = function(A) {
    return V(A) === M;
  }, cn.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === s || A === d || A === c || A === E || A === M || A === L || typeof A == "object" && A !== null && (A.$$typeof === N || A.$$typeof === _ || A.$$typeof === m || A.$$typeof === h || A.$$typeof === x || A.$$typeof === H || A.getModuleId !== void 0);
  }, cn.typeOf = V, cn;
}
var fn = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bx;
function MA() {
  return bx || (bx = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), h = Symbol.for("react.context"), C = Symbol.for("react.server_context"), x = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), H = !1, V = !1, A = !1, G = !1, $ = !1, z;
    z = Symbol.for("react.module.reference");
    function P(Ee) {
      return !!(typeof Ee == "string" || typeof Ee == "function" || Ee === s || Ee === d || $ || Ee === c || Ee === E || Ee === M || G || Ee === L || H || V || A || typeof Ee == "object" && Ee !== null && (Ee.$$typeof === N || Ee.$$typeof === _ || Ee.$$typeof === m || Ee.$$typeof === h || Ee.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Ee.$$typeof === z || Ee.getModuleId !== void 0));
    }
    function I(Ee) {
      if (typeof Ee == "object" && Ee !== null) {
        var mt = Ee.$$typeof;
        switch (mt) {
          case r:
            var Dt = Ee.type;
            switch (Dt) {
              case s:
              case d:
              case c:
              case E:
              case M:
                return Dt;
              default:
                var It = Dt && Dt.$$typeof;
                switch (It) {
                  case C:
                  case h:
                  case x:
                  case N:
                  case _:
                  case m:
                    return It;
                  default:
                    return mt;
                }
            }
          case o:
            return mt;
        }
      }
    }
    var Y = h, q = m, ne = r, oe = x, re = s, ge = N, pe = _, te = o, se = d, de = c, Ce = E, ke = M, we = !1, Ae = !1;
    function ze(Ee) {
      return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(Ee) {
      return Ae || (Ae = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function he(Ee) {
      return I(Ee) === h;
    }
    function Se(Ee) {
      return I(Ee) === m;
    }
    function Ie(Ee) {
      return typeof Ee == "object" && Ee !== null && Ee.$$typeof === r;
    }
    function Ke(Ee) {
      return I(Ee) === x;
    }
    function Xe(Ee) {
      return I(Ee) === s;
    }
    function it(Ee) {
      return I(Ee) === N;
    }
    function Be(Ee) {
      return I(Ee) === _;
    }
    function nt(Ee) {
      return I(Ee) === o;
    }
    function Nt(Ee) {
      return I(Ee) === d;
    }
    function He(Ee) {
      return I(Ee) === c;
    }
    function et(Ee) {
      return I(Ee) === E;
    }
    function Bt(Ee) {
      return I(Ee) === M;
    }
    fn.ContextConsumer = Y, fn.ContextProvider = q, fn.Element = ne, fn.ForwardRef = oe, fn.Fragment = re, fn.Lazy = ge, fn.Memo = pe, fn.Portal = te, fn.Profiler = se, fn.StrictMode = de, fn.Suspense = Ce, fn.SuspenseList = ke, fn.isAsyncMode = ze, fn.isConcurrentMode = ie, fn.isContextConsumer = he, fn.isContextProvider = Se, fn.isElement = Ie, fn.isForwardRef = Ke, fn.isFragment = Xe, fn.isLazy = it, fn.isMemo = Be, fn.isPortal = nt, fn.isProfiler = Nt, fn.isStrictMode = He, fn.isSuspense = et, fn.isSuspenseList = Bt, fn.isValidElementType = P, fn.typeOf = I;
  }()), fn;
}
process.env.NODE_ENV === "production" ? TS.exports = kA() : TS.exports = MA();
var aR = TS.exports;
function Bv(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = [];
  return Ma.Children.forEach(r, function(c) {
    c == null && !o.keepEmpty || (Array.isArray(c) ? s = s.concat(Bv(c)) : aR.isFragment(c) && c.props ? s = s.concat(Bv(c.props.children, o)) : s.push(c));
  }), s;
}
var RS = {}, h1 = [], OA = function(o) {
  h1.push(o);
};
function _f(r, o) {
  if (process.env.NODE_ENV !== "production" && !r && console !== void 0) {
    var s = h1.reduce(function(c, d) {
      return d(c != null ? c : "", "warning");
    }, o);
    s && console.error("Warning: ".concat(s));
  }
}
function NA(r, o) {
  if (process.env.NODE_ENV !== "production" && !r && console !== void 0) {
    var s = h1.reduce(function(c, d) {
      return d(c != null ? c : "", "note");
    }, o);
    s && console.warn("Note: ".concat(s));
  }
}
function iR() {
  RS = {};
}
function oR(r, o, s) {
  !o && !RS[s] && (r(!1, s), RS[s] = !0);
}
function pa(r, o) {
  oR(_f, r, o);
}
function DA(r, o) {
  oR(NA, r, o);
}
pa.preMessage = OA;
pa.resetWarned = iR;
pa.noteOnce = DA;
var _S = { exports: {} }, Fa = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var rS, Sx;
function lR() {
  if (Sx)
    return rS;
  Sx = 1;
  var r = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
  function c(m) {
    if (m == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(m);
  }
  function d() {
    try {
      if (!Object.assign)
        return !1;
      var m = new String("abc");
      if (m[5] = "de", Object.getOwnPropertyNames(m)[0] === "5")
        return !1;
      for (var h = {}, C = 0; C < 10; C++)
        h["_" + String.fromCharCode(C)] = C;
      var x = Object.getOwnPropertyNames(h).map(function(M) {
        return h[M];
      });
      if (x.join("") !== "0123456789")
        return !1;
      var E = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(M) {
        E[M] = M;
      }), Object.keys(Object.assign({}, E)).join("") === "abcdefghijklmnopqrst";
    } catch (M) {
      return !1;
    }
  }
  return rS = d() ? Object.assign : function(m, h) {
    for (var C, x = c(m), E, M = 1; M < arguments.length; M++) {
      C = Object(arguments[M]);
      for (var _ in C)
        o.call(C, _) && (x[_] = C[_]);
      if (r) {
        E = r(C);
        for (var N = 0; N < E.length; N++)
          s.call(C, E[N]) && (x[E[N]] = C[E[N]]);
      }
    }
    return x;
  }, rS;
}
var Wm = { exports: {} }, aS = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cx;
function AA() {
  return Cx || (Cx = 1, function(r) {
    var o, s, c, d;
    if (typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      r.unstable_now = function() {
        return m.now();
      };
    } else {
      var h = Date, C = h.now();
      r.unstable_now = function() {
        return h.now() - C;
      };
    }
    if (typeof window == "undefined" || typeof MessageChannel != "function") {
      var x = null, E = null, M = function() {
        if (x !== null)
          try {
            var ie = r.unstable_now();
            x(!0, ie), x = null;
          } catch (he) {
            throw setTimeout(M, 0), he;
          }
      };
      o = function(ie) {
        x !== null ? setTimeout(o, 0, ie) : (x = ie, setTimeout(M, 0));
      }, s = function(ie, he) {
        E = setTimeout(ie, he);
      }, c = function() {
        clearTimeout(E);
      }, r.unstable_shouldYield = function() {
        return !1;
      }, d = r.unstable_forceFrameRate = function() {
      };
    } else {
      var _ = window.setTimeout, N = window.clearTimeout;
      if (typeof console != "undefined") {
        var L = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof L != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      }
      var H = !1, V = null, A = -1, G = 5, $ = 0;
      r.unstable_shouldYield = function() {
        return r.unstable_now() >= $;
      }, d = function() {
      }, r.unstable_forceFrameRate = function(ie) {
        0 > ie || 125 < ie ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < ie ? Math.floor(1e3 / ie) : 5;
      };
      var z = new MessageChannel(), P = z.port2;
      z.port1.onmessage = function() {
        if (V !== null) {
          var ie = r.unstable_now();
          $ = ie + G;
          try {
            V(!0, ie) ? P.postMessage(null) : (H = !1, V = null);
          } catch (he) {
            throw P.postMessage(null), he;
          }
        } else
          H = !1;
      }, o = function(ie) {
        V = ie, H || (H = !0, P.postMessage(null));
      }, s = function(ie, he) {
        A = _(function() {
          ie(r.unstable_now());
        }, he);
      }, c = function() {
        N(A), A = -1;
      };
    }
    function I(ie, he) {
      var Se = ie.length;
      ie.push(he);
      e:
        for (; ; ) {
          var Ie = Se - 1 >>> 1, Ke = ie[Ie];
          if (Ke !== void 0 && 0 < ne(Ke, he))
            ie[Ie] = he, ie[Se] = Ke, Se = Ie;
          else
            break e;
        }
    }
    function Y(ie) {
      return ie = ie[0], ie === void 0 ? null : ie;
    }
    function q(ie) {
      var he = ie[0];
      if (he !== void 0) {
        var Se = ie.pop();
        if (Se !== he) {
          ie[0] = Se;
          e:
            for (var Ie = 0, Ke = ie.length; Ie < Ke; ) {
              var Xe = 2 * (Ie + 1) - 1, it = ie[Xe], Be = Xe + 1, nt = ie[Be];
              if (it !== void 0 && 0 > ne(it, Se))
                nt !== void 0 && 0 > ne(nt, it) ? (ie[Ie] = nt, ie[Be] = Se, Ie = Be) : (ie[Ie] = it, ie[Xe] = Se, Ie = Xe);
              else if (nt !== void 0 && 0 > ne(nt, Se))
                ie[Ie] = nt, ie[Be] = Se, Ie = Be;
              else
                break e;
            }
        }
        return he;
      }
      return null;
    }
    function ne(ie, he) {
      var Se = ie.sortIndex - he.sortIndex;
      return Se !== 0 ? Se : ie.id - he.id;
    }
    var oe = [], re = [], ge = 1, pe = null, te = 3, se = !1, de = !1, Ce = !1;
    function ke(ie) {
      for (var he = Y(re); he !== null; ) {
        if (he.callback === null)
          q(re);
        else if (he.startTime <= ie)
          q(re), he.sortIndex = he.expirationTime, I(oe, he);
        else
          break;
        he = Y(re);
      }
    }
    function we(ie) {
      if (Ce = !1, ke(ie), !de)
        if (Y(oe) !== null)
          de = !0, o(Ae);
        else {
          var he = Y(re);
          he !== null && s(we, he.startTime - ie);
        }
    }
    function Ae(ie, he) {
      de = !1, Ce && (Ce = !1, c()), se = !0;
      var Se = te;
      try {
        for (ke(he), pe = Y(oe); pe !== null && (!(pe.expirationTime > he) || ie && !r.unstable_shouldYield()); ) {
          var Ie = pe.callback;
          if (typeof Ie == "function") {
            pe.callback = null, te = pe.priorityLevel;
            var Ke = Ie(pe.expirationTime <= he);
            he = r.unstable_now(), typeof Ke == "function" ? pe.callback = Ke : pe === Y(oe) && q(oe), ke(he);
          } else
            q(oe);
          pe = Y(oe);
        }
        if (pe !== null)
          var Xe = !0;
        else {
          var it = Y(re);
          it !== null && s(we, it.startTime - he), Xe = !1;
        }
        return Xe;
      } finally {
        pe = null, te = Se, se = !1;
      }
    }
    var ze = d;
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(ie) {
      ie.callback = null;
    }, r.unstable_continueExecution = function() {
      de || se || (de = !0, o(Ae));
    }, r.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, r.unstable_getFirstCallbackNode = function() {
      return Y(oe);
    }, r.unstable_next = function(ie) {
      switch (te) {
        case 1:
        case 2:
        case 3:
          var he = 3;
          break;
        default:
          he = te;
      }
      var Se = te;
      te = he;
      try {
        return ie();
      } finally {
        te = Se;
      }
    }, r.unstable_pauseExecution = function() {
    }, r.unstable_requestPaint = ze, r.unstable_runWithPriority = function(ie, he) {
      switch (ie) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ie = 3;
      }
      var Se = te;
      te = ie;
      try {
        return he();
      } finally {
        te = Se;
      }
    }, r.unstable_scheduleCallback = function(ie, he, Se) {
      var Ie = r.unstable_now();
      switch (typeof Se == "object" && Se !== null ? (Se = Se.delay, Se = typeof Se == "number" && 0 < Se ? Ie + Se : Ie) : Se = Ie, ie) {
        case 1:
          var Ke = -1;
          break;
        case 2:
          Ke = 250;
          break;
        case 5:
          Ke = 1073741823;
          break;
        case 4:
          Ke = 1e4;
          break;
        default:
          Ke = 5e3;
      }
      return Ke = Se + Ke, ie = { id: ge++, callback: he, priorityLevel: ie, startTime: Se, expirationTime: Ke, sortIndex: -1 }, Se > Ie ? (ie.sortIndex = Se, I(re, ie), Y(oe) === null && ie === Y(re) && (Ce ? c() : Ce = !0, s(we, Se - Ie))) : (ie.sortIndex = Ke, I(oe, ie), de || se || (de = !0, o(Ae))), ie;
    }, r.unstable_wrapCallback = function(ie) {
      var he = te;
      return function() {
        var Se = te;
        te = he;
        try {
          return ie.apply(this, arguments);
        } finally {
          te = Se;
        }
      };
    };
  }(aS)), aS;
}
var iS = {};
/** @license React v0.20.2
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ex;
function LA() {
  return Ex || (Ex = 1, function(r) {
    process.env.NODE_ENV !== "production" && function() {
      var o = !1, s = !1, c, d, m, h, C = typeof performance == "object" && typeof performance.now == "function";
      if (C) {
        var x = performance;
        r.unstable_now = function() {
          return x.now();
        };
      } else {
        var E = Date, M = E.now();
        r.unstable_now = function() {
          return E.now() - M;
        };
      }
      if (
        // If Scheduler runs in a non-DOM environment, it falls back to a naive
        // implementation using setTimeout.
        typeof window == "undefined" || // Check if MessageChannel is supported, too.
        typeof MessageChannel != "function"
      ) {
        var _ = null, N = null, L = function() {
          if (_ !== null)
            try {
              var ye = r.unstable_now(), Oe = !0;
              _(Oe, ye), _ = null;
            } catch (We) {
              throw setTimeout(L, 0), We;
            }
        };
        c = function(ye) {
          _ !== null ? setTimeout(c, 0, ye) : (_ = ye, setTimeout(L, 0));
        }, d = function(ye, Oe) {
          N = setTimeout(ye, Oe);
        }, m = function() {
          clearTimeout(N);
        }, r.unstable_shouldYield = function() {
          return !1;
        }, h = r.unstable_forceFrameRate = function() {
        };
      } else {
        var H = window.setTimeout, V = window.clearTimeout;
        if (typeof console != "undefined") {
          var A = window.requestAnimationFrame, G = window.cancelAnimationFrame;
          typeof A != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof G != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        }
        var $ = !1, z = null, P = -1, I = 5, Y = 0;
        r.unstable_shouldYield = function() {
          return r.unstable_now() >= Y;
        }, h = function() {
        }, r.unstable_forceFrameRate = function(ye) {
          if (ye < 0 || ye > 125) {
            console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
            return;
          }
          ye > 0 ? I = Math.floor(1e3 / ye) : I = 5;
        };
        var q = function() {
          if (z !== null) {
            var ye = r.unstable_now();
            Y = ye + I;
            var Oe = !0;
            try {
              var We = z(Oe, ye);
              We ? oe.postMessage(null) : ($ = !1, z = null);
            } catch (xt) {
              throw oe.postMessage(null), xt;
            }
          } else
            $ = !1;
        }, ne = new MessageChannel(), oe = ne.port2;
        ne.port1.onmessage = q, c = function(ye) {
          z = ye, $ || ($ = !0, oe.postMessage(null));
        }, d = function(ye, Oe) {
          P = H(function() {
            ye(r.unstable_now());
          }, Oe);
        }, m = function() {
          V(P), P = -1;
        };
      }
      function re(ye, Oe) {
        var We = ye.length;
        ye.push(Oe), te(ye, Oe, We);
      }
      function ge(ye) {
        var Oe = ye[0];
        return Oe === void 0 ? null : Oe;
      }
      function pe(ye) {
        var Oe = ye[0];
        if (Oe !== void 0) {
          var We = ye.pop();
          return We !== Oe && (ye[0] = We, se(ye, We, 0)), Oe;
        } else
          return null;
      }
      function te(ye, Oe, We) {
        for (var xt = We; ; ) {
          var Mt = xt - 1 >>> 1, rt = ye[Mt];
          if (rt !== void 0 && de(rt, Oe) > 0)
            ye[Mt] = Oe, ye[xt] = rt, xt = Mt;
          else
            return;
        }
      }
      function se(ye, Oe, We) {
        for (var xt = We, Mt = ye.length; xt < Mt; ) {
          var rt = (xt + 1) * 2 - 1, st = ye[rt], on = rt + 1, Ot = ye[on];
          if (st !== void 0 && de(st, Oe) < 0)
            Ot !== void 0 && de(Ot, st) < 0 ? (ye[xt] = Ot, ye[on] = Oe, xt = on) : (ye[xt] = st, ye[rt] = Oe, xt = rt);
          else if (Ot !== void 0 && de(Ot, Oe) < 0)
            ye[xt] = Ot, ye[on] = Oe, xt = on;
          else
            return;
        }
      }
      function de(ye, Oe) {
        var We = ye.sortIndex - Oe.sortIndex;
        return We !== 0 ? We : ye.id - Oe.id;
      }
      var Ce = 1, ke = 2, we = 3, Ae = 4, ze = 5;
      function ie(ye, Oe) {
      }
      var he = 1073741823, Se = -1, Ie = 250, Ke = 5e3, Xe = 1e4, it = he, Be = [], nt = [], Nt = 1, He = null, et = we, Bt = !1, Ee = !1, mt = !1;
      function Dt(ye) {
        for (var Oe = ge(nt); Oe !== null; ) {
          if (Oe.callback === null)
            pe(nt);
          else if (Oe.startTime <= ye)
            pe(nt), Oe.sortIndex = Oe.expirationTime, re(Be, Oe);
          else
            return;
          Oe = ge(nt);
        }
      }
      function It(ye) {
        if (mt = !1, Dt(ye), !Ee)
          if (ge(Be) !== null)
            Ee = !0, c($t);
          else {
            var Oe = ge(nt);
            Oe !== null && d(It, Oe.startTime - ye);
          }
      }
      function $t(ye, Oe) {
        Ee = !1, mt && (mt = !1, m()), Bt = !0;
        var We = et;
        try {
          var xt;
          if (!s)
            return Ze(ye, Oe);
        } finally {
          He = null, et = We, Bt = !1;
        }
      }
      function Ze(ye, Oe) {
        var We = Oe;
        for (Dt(We), He = ge(Be); He !== null && !o && !(He.expirationTime > We && (!ye || r.unstable_shouldYield())); ) {
          var xt = He.callback;
          if (typeof xt == "function") {
            He.callback = null, et = He.priorityLevel;
            var Mt = He.expirationTime <= We, rt = xt(Mt);
            We = r.unstable_now(), typeof rt == "function" ? He.callback = rt : He === ge(Be) && pe(Be), Dt(We);
          } else
            pe(Be);
          He = ge(Be);
        }
        if (He !== null)
          return !0;
        var st = ge(nt);
        return st !== null && d(It, st.startTime - We), !1;
      }
      function kt(ye, Oe) {
        switch (ye) {
          case Ce:
          case ke:
          case we:
          case Ae:
          case ze:
            break;
          default:
            ye = we;
        }
        var We = et;
        et = ye;
        try {
          return Oe();
        } finally {
          et = We;
        }
      }
      function gt(ye) {
        var Oe;
        switch (et) {
          case Ce:
          case ke:
          case we:
            Oe = we;
            break;
          default:
            Oe = et;
            break;
        }
        var We = et;
        et = Oe;
        try {
          return ye();
        } finally {
          et = We;
        }
      }
      function Zt(ye) {
        var Oe = et;
        return function() {
          var We = et;
          et = Oe;
          try {
            return ye.apply(this, arguments);
          } finally {
            et = We;
          }
        };
      }
      function ot(ye, Oe, We) {
        var xt = r.unstable_now(), Mt;
        if (typeof We == "object" && We !== null) {
          var rt = We.delay;
          typeof rt == "number" && rt > 0 ? Mt = xt + rt : Mt = xt;
        } else
          Mt = xt;
        var st;
        switch (ye) {
          case Ce:
            st = Se;
            break;
          case ke:
            st = Ie;
            break;
          case ze:
            st = it;
            break;
          case Ae:
            st = Xe;
            break;
          case we:
          default:
            st = Ke;
            break;
        }
        var on = Mt + st, Ot = {
          id: Nt++,
          callback: Oe,
          priorityLevel: ye,
          startTime: Mt,
          expirationTime: on,
          sortIndex: -1
        };
        return Mt > xt ? (Ot.sortIndex = Mt, re(nt, Ot), ge(Be) === null && Ot === ge(nt) && (mt ? m() : mt = !0, d(It, Mt - xt))) : (Ot.sortIndex = on, re(Be, Ot), !Ee && !Bt && (Ee = !0, c($t))), Ot;
      }
      function Wt() {
      }
      function Qt() {
        !Ee && !Bt && (Ee = !0, c($t));
      }
      function ut() {
        return ge(Be);
      }
      function Gt(ye) {
        ye.callback = null;
      }
      function Wn() {
        return et;
      }
      var qt = h, en = null;
      r.unstable_IdlePriority = ze, r.unstable_ImmediatePriority = Ce, r.unstable_LowPriority = Ae, r.unstable_NormalPriority = we, r.unstable_Profiling = en, r.unstable_UserBlockingPriority = ke, r.unstable_cancelCallback = Gt, r.unstable_continueExecution = Qt, r.unstable_getCurrentPriorityLevel = Wn, r.unstable_getFirstCallbackNode = ut, r.unstable_next = gt, r.unstable_pauseExecution = Wt, r.unstable_requestPaint = qt, r.unstable_runWithPriority = kt, r.unstable_scheduleCallback = ot, r.unstable_wrapCallback = Zt;
    }();
  }(iS)), iS;
}
var wx;
function uR() {
  return wx || (wx = 1, process.env.NODE_ENV === "production" ? Wm.exports = AA() : Wm.exports = LA()), Wm.exports;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xx;
function PA() {
  if (xx)
    return Fa;
  xx = 1;
  var r = Ma, o = lR(), s = uR();
  function c(n) {
    for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++)
      i += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  if (!r)
    throw Error(c(227));
  var d = /* @__PURE__ */ new Set(), m = {};
  function h(n, i) {
    C(n, i), C(n + "Capture", i);
  }
  function C(n, i) {
    for (m[n] = i, n = 0; n < i.length; n++)
      d.add(i[n]);
  }
  var x = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), E = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = Object.prototype.hasOwnProperty, _ = {}, N = {};
  function L(n) {
    return M.call(N, n) ? !0 : M.call(_, n) ? !1 : E.test(n) ? N[n] = !0 : (_[n] = !0, !1);
  }
  function H(n, i, u, v) {
    if (u !== null && u.type === 0)
      return !1;
    switch (typeof i) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return v ? !1 : u !== null ? !u.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function V(n, i, u, v) {
    if (i === null || typeof i == "undefined" || H(n, i, u, v))
      return !0;
    if (v)
      return !1;
    if (u !== null)
      switch (u.type) {
        case 3:
          return !i;
        case 4:
          return i === !1;
        case 5:
          return isNaN(i);
        case 6:
          return isNaN(i) || 1 > i;
      }
    return !1;
  }
  function A(n, i, u, v, g, S, R) {
    this.acceptsBooleans = i === 2 || i === 3 || i === 4, this.attributeName = v, this.attributeNamespace = g, this.mustUseProperty = u, this.propertyName = n, this.type = i, this.sanitizeURL = S, this.removeEmptyString = R;
  }
  var G = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    G[n] = new A(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var i = n[0];
    G[i] = new A(i, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    G[n] = new A(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    G[n] = new A(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    G[n] = new A(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    G[n] = new A(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    G[n] = new A(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    G[n] = new A(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    G[n] = new A(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var $ = /[\-:]([a-z])/g;
  function z(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var i = n.replace(
      $,
      z
    );
    G[i] = new A(i, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var i = n.replace($, z);
    G[i] = new A(i, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var i = n.replace($, z);
    G[i] = new A(i, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    G[n] = new A(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), G.xlinkHref = new A("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    G[n] = new A(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function P(n, i, u, v) {
    var g = G.hasOwnProperty(i) ? G[i] : null, S = g !== null ? g.type === 0 : v ? !1 : !(!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N");
    S || (V(i, u, g, v) && (u = null), v || g === null ? L(i) && (u === null ? n.removeAttribute(i) : n.setAttribute(i, "" + u)) : g.mustUseProperty ? n[g.propertyName] = u === null ? g.type === 3 ? !1 : "" : u : (i = g.attributeName, v = g.attributeNamespace, u === null ? n.removeAttribute(i) : (g = g.type, u = g === 3 || g === 4 && u === !0 ? "" : "" + u, v ? n.setAttributeNS(v, i, u) : n.setAttribute(i, u))));
  }
  var I = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Y = 60103, q = 60106, ne = 60107, oe = 60108, re = 60114, ge = 60109, pe = 60110, te = 60112, se = 60113, de = 60120, Ce = 60115, ke = 60116, we = 60121, Ae = 60128, ze = 60129, ie = 60130, he = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var Se = Symbol.for;
    Y = Se("react.element"), q = Se("react.portal"), ne = Se("react.fragment"), oe = Se("react.strict_mode"), re = Se("react.profiler"), ge = Se("react.provider"), pe = Se("react.context"), te = Se("react.forward_ref"), se = Se("react.suspense"), de = Se("react.suspense_list"), Ce = Se("react.memo"), ke = Se("react.lazy"), we = Se("react.block"), Se("react.scope"), Ae = Se("react.opaque.id"), ze = Se("react.debug_trace_mode"), ie = Se("react.offscreen"), he = Se("react.legacy_hidden");
  }
  var Ie = typeof Symbol == "function" && Symbol.iterator;
  function Ke(n) {
    return n === null || typeof n != "object" ? null : (n = Ie && n[Ie] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Xe;
  function it(n) {
    if (Xe === void 0)
      try {
        throw Error();
      } catch (u) {
        var i = u.stack.trim().match(/\n( *(at )?)/);
        Xe = i && i[1] || "";
      }
    return `
` + Xe + n;
  }
  var Be = !1;
  function nt(n, i) {
    if (!n || Be)
      return "";
    Be = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (i)
        if (i = function() {
          throw Error();
        }, Object.defineProperty(i.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(i, []);
          } catch (U) {
            var v = U;
          }
          Reflect.construct(n, [], i);
        } else {
          try {
            i.call();
          } catch (U) {
            v = U;
          }
          n.call(i.prototype);
        }
      else {
        try {
          throw Error();
        } catch (U) {
          v = U;
        }
        n();
      }
    } catch (U) {
      if (U && v && typeof U.stack == "string") {
        for (var g = U.stack.split(`
`), S = v.stack.split(`
`), R = g.length - 1, k = S.length - 1; 1 <= R && 0 <= k && g[R] !== S[k]; )
          k--;
        for (; 1 <= R && 0 <= k; R--, k--)
          if (g[R] !== S[k]) {
            if (R !== 1 || k !== 1)
              do
                if (R--, k--, 0 > k || g[R] !== S[k])
                  return `
` + g[R].replace(" at new ", " at ");
              while (1 <= R && 0 <= k);
            break;
          }
      }
    } finally {
      Be = !1, Error.prepareStackTrace = u;
    }
    return (n = n ? n.displayName || n.name : "") ? it(n) : "";
  }
  function Nt(n) {
    switch (n.tag) {
      case 5:
        return it(n.type);
      case 16:
        return it("Lazy");
      case 13:
        return it("Suspense");
      case 19:
        return it("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = nt(n.type, !1), n;
      case 11:
        return n = nt(n.type.render, !1), n;
      case 22:
        return n = nt(n.type._render, !1), n;
      case 1:
        return n = nt(n.type, !0), n;
      default:
        return "";
    }
  }
  function He(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ne:
        return "Fragment";
      case q:
        return "Portal";
      case re:
        return "Profiler";
      case oe:
        return "StrictMode";
      case se:
        return "Suspense";
      case de:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case pe:
          return (n.displayName || "Context") + ".Consumer";
        case ge:
          return (n._context.displayName || "Context") + ".Provider";
        case te:
          var i = n.render;
          return i = i.displayName || i.name || "", n.displayName || (i !== "" ? "ForwardRef(" + i + ")" : "ForwardRef");
        case Ce:
          return He(n.type);
        case we:
          return He(n._render);
        case ke:
          i = n._payload, n = n._init;
          try {
            return He(n(i));
          } catch (u) {
          }
      }
    return null;
  }
  function et(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "object":
      case "string":
      case "undefined":
        return n;
      default:
        return "";
    }
  }
  function Bt(n) {
    var i = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
  }
  function Ee(n) {
    var i = Bt(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(n.constructor.prototype, i), v = "" + n[i];
    if (!n.hasOwnProperty(i) && typeof u != "undefined" && typeof u.get == "function" && typeof u.set == "function") {
      var g = u.get, S = u.set;
      return Object.defineProperty(n, i, { configurable: !0, get: function() {
        return g.call(this);
      }, set: function(R) {
        v = "" + R, S.call(this, R);
      } }), Object.defineProperty(n, i, { enumerable: u.enumerable }), { getValue: function() {
        return v;
      }, setValue: function(R) {
        v = "" + R;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[i];
      } };
    }
  }
  function mt(n) {
    n._valueTracker || (n._valueTracker = Ee(n));
  }
  function Dt(n) {
    if (!n)
      return !1;
    var i = n._valueTracker;
    if (!i)
      return !0;
    var u = i.getValue(), v = "";
    return n && (v = Bt(n) ? n.checked ? "true" : "false" : n.value), n = v, n !== u ? (i.setValue(n), !0) : !1;
  }
  function It(n) {
    if (n = n || (typeof document != "undefined" ? document : void 0), typeof n == "undefined")
      return null;
    try {
      return n.activeElement || n.body;
    } catch (i) {
      return n.body;
    }
  }
  function $t(n, i) {
    var u = i.checked;
    return o({}, i, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: u != null ? u : n._wrapperState.initialChecked });
  }
  function Ze(n, i) {
    var u = i.defaultValue == null ? "" : i.defaultValue, v = i.checked != null ? i.checked : i.defaultChecked;
    u = et(i.value != null ? i.value : u), n._wrapperState = { initialChecked: v, initialValue: u, controlled: i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null };
  }
  function kt(n, i) {
    i = i.checked, i != null && P(n, "checked", i, !1);
  }
  function gt(n, i) {
    kt(n, i);
    var u = et(i.value), v = i.type;
    if (u != null)
      v === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (v === "submit" || v === "reset") {
      n.removeAttribute("value");
      return;
    }
    i.hasOwnProperty("value") ? ot(n, i.type, u) : i.hasOwnProperty("defaultValue") && ot(n, i.type, et(i.defaultValue)), i.checked == null && i.defaultChecked != null && (n.defaultChecked = !!i.defaultChecked);
  }
  function Zt(n, i, u) {
    if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
      var v = i.type;
      if (!(v !== "submit" && v !== "reset" || i.value !== void 0 && i.value !== null))
        return;
      i = "" + n._wrapperState.initialValue, u || i === n.value || (n.value = i), n.defaultValue = i;
    }
    u = n.name, u !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, u !== "" && (n.name = u);
  }
  function ot(n, i, u) {
    (i !== "number" || It(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
  }
  function Wt(n) {
    var i = "";
    return r.Children.forEach(n, function(u) {
      u != null && (i += u);
    }), i;
  }
  function Qt(n, i) {
    return n = o({ children: void 0 }, i), (i = Wt(i.children)) && (n.children = i), n;
  }
  function ut(n, i, u, v) {
    if (n = n.options, i) {
      i = {};
      for (var g = 0; g < u.length; g++)
        i["$" + u[g]] = !0;
      for (u = 0; u < n.length; u++)
        g = i.hasOwnProperty("$" + n[u].value), n[u].selected !== g && (n[u].selected = g), g && v && (n[u].defaultSelected = !0);
    } else {
      for (u = "" + et(u), i = null, g = 0; g < n.length; g++) {
        if (n[g].value === u) {
          n[g].selected = !0, v && (n[g].defaultSelected = !0);
          return;
        }
        i !== null || n[g].disabled || (i = n[g]);
      }
      i !== null && (i.selected = !0);
    }
  }
  function Gt(n, i) {
    if (i.dangerouslySetInnerHTML != null)
      throw Error(c(91));
    return o({}, i, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Wn(n, i) {
    var u = i.value;
    if (u == null) {
      if (u = i.children, i = i.defaultValue, u != null) {
        if (i != null)
          throw Error(c(92));
        if (Array.isArray(u)) {
          if (!(1 >= u.length))
            throw Error(c(93));
          u = u[0];
        }
        i = u;
      }
      i == null && (i = ""), u = i;
    }
    n._wrapperState = { initialValue: et(u) };
  }
  function qt(n, i) {
    var u = et(i.value), v = et(i.defaultValue);
    u != null && (u = "" + u, u !== n.value && (n.value = u), i.defaultValue == null && n.defaultValue !== u && (n.defaultValue = u)), v != null && (n.defaultValue = "" + v);
  }
  function en(n) {
    var i = n.textContent;
    i === n._wrapperState.initialValue && i !== "" && i !== null && (n.value = i);
  }
  var ye = { html: "http://www.w3.org/1999/xhtml", mathml: "http://www.w3.org/1998/Math/MathML", svg: "http://www.w3.org/2000/svg" };
  function Oe(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function We(n, i) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Oe(i) : n === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var xt, Mt = function(n) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(i, u, v, g) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(i, u, v, g);
      });
    } : n;
  }(function(n, i) {
    if (n.namespaceURI !== ye.svg || "innerHTML" in n)
      n.innerHTML = i;
    else {
      for (xt = xt || document.createElement("div"), xt.innerHTML = "<svg>" + i.valueOf().toString() + "</svg>", i = xt.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; i.firstChild; )
        n.appendChild(i.firstChild);
    }
  });
  function rt(n, i) {
    if (i) {
      var u = n.firstChild;
      if (u && u === n.lastChild && u.nodeType === 3) {
        u.nodeValue = i;
        return;
      }
    }
    n.textContent = i;
  }
  var st = {
    animationIterationCount: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, on = ["Webkit", "ms", "Moz", "O"];
  Object.keys(st).forEach(function(n) {
    on.forEach(function(i) {
      i = i + n.charAt(0).toUpperCase() + n.substring(1), st[i] = st[n];
    });
  });
  function Ot(n, i, u) {
    return i == null || typeof i == "boolean" || i === "" ? "" : u || typeof i != "number" || i === 0 || st.hasOwnProperty(n) && st[n] ? ("" + i).trim() : i + "px";
  }
  function Ut(n, i) {
    n = n.style;
    for (var u in i)
      if (i.hasOwnProperty(u)) {
        var v = u.indexOf("--") === 0, g = Ot(u, i[u], v);
        u === "float" && (u = "cssFloat"), v ? n.setProperty(u, g) : n[u] = g;
      }
  }
  var ir = o({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Vt(n, i) {
    if (i) {
      if (ir[n] && (i.children != null || i.dangerouslySetInnerHTML != null))
        throw Error(c(137, n));
      if (i.dangerouslySetInnerHTML != null) {
        if (i.children != null)
          throw Error(c(60));
        if (!(typeof i.dangerouslySetInnerHTML == "object" && "__html" in i.dangerouslySetInnerHTML))
          throw Error(c(61));
      }
      if (i.style != null && typeof i.style != "object")
        throw Error(c(62));
    }
  }
  function dn(n, i) {
    if (n.indexOf("-") === -1)
      return typeof i.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  function jt(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var $e = null, St = null, Me = null;
  function Ge(n) {
    if (n = ua(n)) {
      if (typeof $e != "function")
        throw Error(c(280));
      var i = n.stateNode;
      i && (i = Oi(i), $e(n.stateNode, n.type, i));
    }
  }
  function At(n) {
    St ? Me ? Me.push(n) : Me = [n] : St = n;
  }
  function mn() {
    if (St) {
      var n = St, i = Me;
      if (Me = St = null, Ge(n), i)
        for (n = 0; n < i.length; n++)
          Ge(i[n]);
    }
  }
  function An(n, i) {
    return n(i);
  }
  function gn(n, i, u, v, g) {
    return n(i, u, v, g);
  }
  function oa() {
  }
  var qr = An, Ln = !1, Kt = !1;
  function Vn() {
    (St !== null || Me !== null) && (oa(), mn());
  }
  function Yr(n, i, u) {
    if (Kt)
      return n(i, u);
    Kt = !0;
    try {
      return qr(n, i, u);
    } finally {
      Kt = !1, Vn();
    }
  }
  function ln(n, i) {
    var u = n.stateNode;
    if (u === null)
      return null;
    var v = Oi(u);
    if (v === null)
      return null;
    u = v[i];
    e:
      switch (i) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (v = !v.disabled) || (n = n.type, v = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !v;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (u && typeof u != "function")
      throw Error(c(231, i, typeof u));
    return u;
  }
  var Jn = !1;
  if (x)
    try {
      var Tr = {};
      Object.defineProperty(Tr, "passive", { get: function() {
        Jn = !0;
      } }), window.addEventListener("test", Tr, Tr), window.removeEventListener("test", Tr, Tr);
    } catch (n) {
      Jn = !1;
    }
  function qa(n, i, u, v, g, S, R, k, U) {
    var ee = Array.prototype.slice.call(arguments, 3);
    try {
      i.apply(u, ee);
    } catch (Le) {
      this.onError(Le);
    }
  }
  var Lr = !1, Pr = null, Rr = !1, Ya = null, Pn = { onError: function(n) {
    Lr = !0, Pr = n;
  } };
  function Ei(n, i, u, v, g, S, R, k, U) {
    Lr = !1, Pr = null, qa.apply(Pn, arguments);
  }
  function _r(n, i, u, v, g, S, R, k, U) {
    if (Ei.apply(this, arguments), Lr) {
      if (Lr) {
        var ee = Pr;
        Lr = !1, Pr = null;
      } else
        throw Error(c(198));
      Rr || (Rr = !0, Ya = ee);
    }
  }
  function xn(n) {
    var i = n, u = n;
    if (n.alternate)
      for (; i.return; )
        i = i.return;
    else {
      n = i;
      do
        i = n, i.flags & 1026 && (u = i.return), n = i.return;
      while (n);
    }
    return i.tag === 3 ? u : null;
  }
  function zr(n) {
    if (n.tag === 13) {
      var i = n.memoizedState;
      if (i === null && (n = n.alternate, n !== null && (i = n.memoizedState)), i !== null)
        return i.dehydrated;
    }
    return null;
  }
  function kr(n) {
    if (xn(n) !== n)
      throw Error(c(188));
  }
  function Ir(n) {
    var i = n.alternate;
    if (!i) {
      if (i = xn(n), i === null)
        throw Error(c(188));
      return i !== n ? null : n;
    }
    for (var u = n, v = i; ; ) {
      var g = u.return;
      if (g === null)
        break;
      var S = g.alternate;
      if (S === null) {
        if (v = g.return, v !== null) {
          u = v;
          continue;
        }
        break;
      }
      if (g.child === S.child) {
        for (S = g.child; S; ) {
          if (S === u)
            return kr(g), n;
          if (S === v)
            return kr(g), i;
          S = S.sibling;
        }
        throw Error(c(188));
      }
      if (u.return !== v.return)
        u = g, v = S;
      else {
        for (var R = !1, k = g.child; k; ) {
          if (k === u) {
            R = !0, u = g, v = S;
            break;
          }
          if (k === v) {
            R = !0, v = g, u = S;
            break;
          }
          k = k.sibling;
        }
        if (!R) {
          for (k = S.child; k; ) {
            if (k === u) {
              R = !0, u = S, v = g;
              break;
            }
            if (k === v) {
              R = !0, v = S, u = g;
              break;
            }
            k = k.sibling;
          }
          if (!R)
            throw Error(c(189));
        }
      }
      if (u.alternate !== v)
        throw Error(c(190));
    }
    if (u.tag !== 3)
      throw Error(c(188));
    return u.stateNode.current === u ? n : i;
  }
  function Qa(n) {
    if (n = Ir(n), !n)
      return null;
    for (var i = n; ; ) {
      if (i.tag === 5 || i.tag === 6)
        return i;
      if (i.child)
        i.child.return = i, i = i.child;
      else {
        if (i === n)
          break;
        for (; !i.sibling; ) {
          if (!i.return || i.return === n)
            return null;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    return null;
  }
  function Hr(n, i) {
    for (var u = n.alternate; i !== null; ) {
      if (i === n || i === u)
        return !0;
      i = i.return;
    }
    return !1;
  }
  var Xa, gr, Qr, Mr, ha = !1, zn = [], Kn = null, Or = null, or = null, yr = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), Xt = [], dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ht(n, i, u, v, g) {
    return { blockedOn: n, domEventName: i, eventSystemFlags: u | 16, nativeEvent: g, targetContainers: [v] };
  }
  function Tn(n, i) {
    switch (n) {
      case "focusin":
      case "focusout":
        Kn = null;
        break;
      case "dragenter":
      case "dragleave":
        Or = null;
        break;
      case "mouseover":
      case "mouseout":
        or = null;
        break;
      case "pointerover":
      case "pointerout":
        yr.delete(i.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Re.delete(i.pointerId);
    }
  }
  function On(n, i, u, v, g, S) {
    return n === null || n.nativeEvent !== S ? (n = Ht(i, u, v, g, S), i !== null && (i = ua(i), i !== null && gr(i)), n) : (n.eventSystemFlags |= v, i = n.targetContainers, g !== null && i.indexOf(g) === -1 && i.push(g), n);
  }
  function Nn(n, i, u, v, g) {
    switch (i) {
      case "focusin":
        return Kn = On(Kn, n, i, u, v, g), !0;
      case "dragenter":
        return Or = On(Or, n, i, u, v, g), !0;
      case "mouseover":
        return or = On(or, n, i, u, v, g), !0;
      case "pointerover":
        var S = g.pointerId;
        return yr.set(S, On(yr.get(S) || null, n, i, u, v, g)), !0;
      case "gotpointercapture":
        return S = g.pointerId, Re.set(S, On(Re.get(S) || null, n, i, u, v, g)), !0;
    }
    return !1;
  }
  function vn(n) {
    var i = Jo(n.target);
    if (i !== null) {
      var u = xn(i);
      if (u !== null) {
        if (i = u.tag, i === 13) {
          if (i = zr(u), i !== null) {
            n.blockedOn = i, Mr(n.lanePriority, function() {
              s.unstable_runWithPriority(n.priority, function() {
                Qr(u);
              });
            });
            return;
          }
        } else if (i === 3 && u.stateNode.hydrate) {
          n.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function er(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var i = n.targetContainers; 0 < i.length; ) {
      var u = nc(n.domEventName, n.eventSystemFlags, i[0], n.nativeEvent);
      if (u !== null)
        return i = ua(u), i !== null && gr(i), n.blockedOn = u, !1;
      i.shift();
    }
    return !0;
  }
  function wi(n, i, u) {
    er(n) && u.delete(i);
  }
  function Gn() {
    for (ha = !1; 0 < zn.length; ) {
      var n = zn[0];
      if (n.blockedOn !== null) {
        n = ua(n.blockedOn), n !== null && Xa(n);
        break;
      }
      for (var i = n.targetContainers; 0 < i.length; ) {
        var u = nc(n.domEventName, n.eventSystemFlags, i[0], n.nativeEvent);
        if (u !== null) {
          n.blockedOn = u;
          break;
        }
        i.shift();
      }
      n.blockedOn === null && zn.shift();
    }
    Kn !== null && er(Kn) && (Kn = null), Or !== null && er(Or) && (Or = null), or !== null && er(or) && (or = null), yr.forEach(wi), Re.forEach(wi);
  }
  function In(n, i) {
    n.blockedOn === i && (n.blockedOn = null, ha || (ha = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Gn)));
  }
  function tr(n) {
    function i(g) {
      return In(g, n);
    }
    if (0 < zn.length) {
      In(zn[0], n);
      for (var u = 1; u < zn.length; u++) {
        var v = zn[u];
        v.blockedOn === n && (v.blockedOn = null);
      }
    }
    for (Kn !== null && In(Kn, n), Or !== null && In(Or, n), or !== null && In(or, n), yr.forEach(i), Re.forEach(i), u = 0; u < Xt.length; u++)
      v = Xt[u], v.blockedOn === n && (v.blockedOn = null);
    for (; 0 < Xt.length && (u = Xt[0], u.blockedOn === null); )
      vn(u), u.blockedOn === null && Xt.shift();
  }
  function la(n, i) {
    var u = {};
    return u[n.toLowerCase()] = i.toLowerCase(), u["Webkit" + n] = "webkit" + i, u["Moz" + n] = "moz" + i, u;
  }
  var br = { animationend: la("Animation", "AnimationEnd"), animationiteration: la("Animation", "AnimationIteration"), animationstart: la("Animation", "AnimationStart"), transitionend: la("Transition", "TransitionEnd") }, ma = {}, xi = {};
  x && (xi = document.createElement("div").style, "AnimationEvent" in window || (delete br.animationend.animation, delete br.animationiteration.animation, delete br.animationstart.animation), "TransitionEvent" in window || delete br.transitionend.transition);
  function Oa(n) {
    if (ma[n])
      return ma[n];
    if (!br[n])
      return n;
    var i = br[n], u;
    for (u in i)
      if (i.hasOwnProperty(u) && u in xi)
        return ma[n] = i[u];
    return n;
  }
  var eo = Oa("animationend"), Na = Oa("animationiteration"), to = Oa("animationstart"), Ti = Oa("transitionend"), Ko = /* @__PURE__ */ new Map(), no = /* @__PURE__ */ new Map(), zl = [
    "abort",
    "abort",
    eo,
    "animationEnd",
    Na,
    "animationIteration",
    to,
    "animationStart",
    "canplay",
    "canPlay",
    "canplaythrough",
    "canPlayThrough",
    "durationchange",
    "durationChange",
    "emptied",
    "emptied",
    "encrypted",
    "encrypted",
    "ended",
    "ended",
    "error",
    "error",
    "gotpointercapture",
    "gotPointerCapture",
    "load",
    "load",
    "loadeddata",
    "loadedData",
    "loadedmetadata",
    "loadedMetadata",
    "loadstart",
    "loadStart",
    "lostpointercapture",
    "lostPointerCapture",
    "playing",
    "playing",
    "progress",
    "progress",
    "seeking",
    "seeking",
    "stalled",
    "stalled",
    "suspend",
    "suspend",
    "timeupdate",
    "timeUpdate",
    Ti,
    "transitionEnd",
    "waiting",
    "waiting"
  ];
  function Ve(n, i) {
    for (var u = 0; u < n.length; u += 2) {
      var v = n[u], g = n[u + 1];
      g = "on" + (g[0].toUpperCase() + g.slice(1)), no.set(v, i), Ko.set(v, g), h(g, [v]);
    }
  }
  var yt = s.unstable_now;
  yt();
  var ct = 8;
  function pn(n) {
    if (1 & n)
      return ct = 15, 1;
    if (2 & n)
      return ct = 14, 2;
    if (4 & n)
      return ct = 13, 4;
    var i = 24 & n;
    return i !== 0 ? (ct = 12, i) : n & 32 ? (ct = 11, 32) : (i = 192 & n, i !== 0 ? (ct = 10, i) : n & 256 ? (ct = 9, 256) : (i = 3584 & n, i !== 0 ? (ct = 8, i) : n & 4096 ? (ct = 7, 4096) : (i = 4186112 & n, i !== 0 ? (ct = 6, i) : (i = 62914560 & n, i !== 0 ? (ct = 5, i) : n & 67108864 ? (ct = 4, 67108864) : n & 134217728 ? (ct = 3, 134217728) : (i = 805306368 & n, i !== 0 ? (ct = 2, i) : 1073741824 & n ? (ct = 1, 1073741824) : (ct = 8, n))))));
  }
  function Cn(n) {
    switch (n) {
      case 99:
        return 15;
      case 98:
        return 10;
      case 97:
      case 96:
        return 8;
      case 95:
        return 2;
      default:
        return 0;
    }
  }
  function ro(n) {
    switch (n) {
      case 15:
      case 14:
        return 99;
      case 13:
      case 12:
      case 11:
      case 10:
        return 98;
      case 9:
      case 8:
      case 7:
      case 6:
      case 4:
      case 5:
        return 97;
      case 3:
      case 2:
      case 1:
        return 95;
      case 0:
        return 90;
      default:
        throw Error(c(358, n));
    }
  }
  function Za(n, i) {
    var u = n.pendingLanes;
    if (u === 0)
      return ct = 0;
    var v = 0, g = 0, S = n.expiredLanes, R = n.suspendedLanes, k = n.pingedLanes;
    if (S !== 0)
      v = S, g = ct = 15;
    else if (S = u & 134217727, S !== 0) {
      var U = S & ~R;
      U !== 0 ? (v = pn(U), g = ct) : (k &= S, k !== 0 && (v = pn(k), g = ct));
    } else
      S = u & ~R, S !== 0 ? (v = pn(S), g = ct) : k !== 0 && (v = pn(k), g = ct);
    if (v === 0)
      return 0;
    if (v = 31 - io(v), v = u & ((0 > v ? 0 : 1 << v) << 1) - 1, i !== 0 && i !== v && !(i & R)) {
      if (pn(i), g <= ct)
        return i;
      ct = g;
    }
    if (i = n.entangledLanes, i !== 0)
      for (n = n.entanglements, i &= v; 0 < i; )
        u = 31 - io(i), g = 1 << u, v |= n[u], i &= ~g;
    return v;
  }
  function Lu(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Ri(n, i) {
    switch (n) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return n = ao(24 & ~i), n === 0 ? Ri(10, i) : n;
      case 10:
        return n = ao(192 & ~i), n === 0 ? Ri(8, i) : n;
      case 8:
        return n = ao(3584 & ~i), n === 0 && (n = ao(4186112 & ~i), n === 0 && (n = 512)), n;
      case 2:
        return i = ao(805306368 & ~i), i === 0 && (i = 268435456), i;
    }
    throw Error(c(358, n));
  }
  function ao(n) {
    return n & -n;
  }
  function tc(n) {
    for (var i = [], u = 0; 31 > u; u++)
      i.push(n);
    return i;
  }
  function Pu(n, i, u) {
    n.pendingLanes |= i;
    var v = i - 1;
    n.suspendedLanes &= v, n.pingedLanes &= v, n = n.eventTimes, i = 31 - io(i), n[i] = u;
  }
  var io = Math.clz32 ? Math.clz32 : Pf, ap = Math.log, Yg = Math.LN2;
  function Pf(n) {
    return n === 0 ? 32 : 31 - (ap(n) / Yg | 0) | 0;
  }
  var zf = s.unstable_UserBlockingPriority, ip = s.unstable_runWithPriority, zu = !0;
  function Qg(n, i, u, v) {
    Ln || oa();
    var g = Iu, S = Ln;
    Ln = !0;
    try {
      gn(g, n, i, u, v);
    } finally {
      (Ln = S) || Vn();
    }
  }
  function Il(n, i, u, v) {
    ip(zf, Iu.bind(null, n, i, u, v));
  }
  function Iu(n, i, u, v) {
    if (zu) {
      var g;
      if ((g = (i & 4) === 0) && 0 < zn.length && -1 < dt.indexOf(n))
        n = Ht(null, n, i, u, v), zn.push(n);
      else {
        var S = nc(n, i, u, v);
        if (S === null)
          g && Tn(n, v);
        else {
          if (g) {
            if (-1 < dt.indexOf(n)) {
              n = Ht(S, n, i, u, v), zn.push(n);
              return;
            }
            if (Nn(S, n, i, u, v))
              return;
            Tn(n, v);
          }
          fc(n, i, v, null, u);
        }
      }
    }
  }
  function nc(n, i, u, v) {
    var g = jt(v);
    if (g = Jo(g), g !== null) {
      var S = xn(g);
      if (S === null)
        g = null;
      else {
        var R = S.tag;
        if (R === 13) {
          if (g = zr(S), g !== null)
            return g;
          g = null;
        } else if (R === 3) {
          if (S.stateNode.hydrate)
            return S.tag === 3 ? S.stateNode.containerInfo : null;
          g = null;
        } else
          S !== g && (g = null);
      }
    }
    return fc(n, i, v, g, u), null;
  }
  var oo = null, If = null, rc = null;
  function Hf() {
    if (rc)
      return rc;
    var n, i = If, u = i.length, v, g = "value" in oo ? oo.value : oo.textContent, S = g.length;
    for (n = 0; n < u && i[n] === g[n]; n++)
      ;
    var R = u - n;
    for (v = 1; v <= R && i[u - v] === g[S - v]; v++)
      ;
    return rc = g.slice(n, 1 < v ? 1 - v : void 0);
  }
  function Hl(n) {
    var i = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && i === 13 && (n = 13)) : n = i, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Hu() {
    return !0;
  }
  function $f() {
    return !1;
  }
  function Xr(n) {
    function i(u, v, g, S, R) {
      this._reactName = u, this._targetInst = g, this.type = v, this.nativeEvent = S, this.target = R, this.currentTarget = null;
      for (var k in n)
        n.hasOwnProperty(k) && (u = n[k], this[k] = u ? u(S) : S[k]);
      return this.isDefaultPrevented = (S.defaultPrevented != null ? S.defaultPrevented : S.returnValue === !1) ? Hu : $f, this.isPropagationStopped = $f, this;
    }
    return o(i.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = Hu);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = Hu);
    }, persist: function() {
    }, isPersistent: Hu }), i;
  }
  var $l = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ul = Xr($l), jl = o({}, $l, { view: 0, detail: 0 }), Uf = Xr(jl), ac, $u, Go, ic = o({}, jl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ff, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Go && (Go && n.type === "mousemove" ? (ac = n.screenX - Go.screenX, $u = n.screenY - Go.screenY) : $u = ac = 0, Go = n), ac);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : $u;
  } }), Uu = Xr(ic), op = o({}, ic, { dataTransfer: 0 }), ga = Xr(op), _i = o({}, jl, { relatedTarget: 0 }), $r = Xr(_i), lo = o({}, $l, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lp = Xr(lo), oc = o({}, $l, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Xg = Xr(oc), ju = o({}, $l, { data: 0 }), up = Xr(ju), Zg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, jf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Jg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ey(n) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(n) : (n = Jg[n]) ? !!i[n] : !1;
  }
  function Ff() {
    return ey;
  }
  var sp = o({}, jl, { key: function(n) {
    if (n.key) {
      var i = Zg[n.key] || n.key;
      if (i !== "Unidentified")
        return i;
    }
    return n.type === "keypress" ? (n = Hl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? jf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ff, charCode: function(n) {
    return n.type === "keypress" ? Hl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Hl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ty = Xr(sp), ny = o({}, ic, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cp = Xr(ny), fp = o({}, jl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ff }), Fl = Xr(fp), Vf = o({}, $l, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), dp = Xr(Vf), vp = o({}, ic, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ry = Xr(vp), ay = [9, 13, 27, 32], Bf = x && "CompositionEvent" in window, Fu = null;
  x && "documentMode" in document && (Fu = document.documentMode);
  var iy = x && "TextEvent" in window && !Fu, pp = x && (!Bf || Fu && 8 < Fu && 11 >= Fu), hp = " ", mp = !1;
  function Wf(n, i) {
    switch (n) {
      case "keyup":
        return ay.indexOf(i.keyCode) !== -1;
      case "keydown":
        return i.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function gp(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var qo = !1;
  function oy(n, i) {
    switch (n) {
      case "compositionend":
        return gp(i);
      case "keypress":
        return i.which !== 32 ? null : (mp = !0, hp);
      case "textInput":
        return n = i.data, n === hp && mp ? null : n;
      default:
        return null;
    }
  }
  function ly(n, i) {
    if (qo)
      return n === "compositionend" || !Bf && Wf(n, i) ? (n = Hf(), rc = If = oo = null, qo = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(i.ctrlKey || i.altKey || i.metaKey) || i.ctrlKey && i.altKey) {
          if (i.char && 1 < i.char.length)
            return i.char;
          if (i.which)
            return String.fromCharCode(i.which);
        }
        return null;
      case "compositionend":
        return pp && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var uy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function yp(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i === "input" ? !!uy[n.type] : i === "textarea";
  }
  function lc(n, i, u, v) {
    At(v), i = dc(i, "onChange"), 0 < i.length && (u = new Ul("onChange", "change", null, u, v), n.push({ event: u, listeners: i }));
  }
  var Da = null, uo = null;
  function bp(n) {
    uc(n, 0);
  }
  function ki(n) {
    var i = Fr(n);
    if (Dt(i))
      return n;
  }
  function sy(n, i) {
    if (n === "change")
      return i;
  }
  var Sp = !1;
  if (x) {
    var Kf;
    if (x) {
      var Gf = "oninput" in document;
      if (!Gf) {
        var Cp = document.createElement("div");
        Cp.setAttribute("oninput", "return;"), Gf = typeof Cp.oninput == "function";
      }
      Kf = Gf;
    } else
      Kf = !1;
    Sp = Kf && (!document.documentMode || 9 < document.documentMode);
  }
  function Ep() {
    Da && (Da.detachEvent("onpropertychange", qf), uo = Da = null);
  }
  function qf(n) {
    if (n.propertyName === "value" && ki(uo)) {
      var i = [];
      if (lc(i, uo, n, jt(n)), n = bp, Ln)
        n(i);
      else {
        Ln = !0;
        try {
          An(n, i);
        } finally {
          Ln = !1, Vn();
        }
      }
    }
  }
  function cy(n, i, u) {
    n === "focusin" ? (Ep(), Da = i, uo = u, Da.attachEvent("onpropertychange", qf)) : n === "focusout" && Ep();
  }
  function wp(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ki(uo);
  }
  function Ur(n, i) {
    if (n === "click")
      return ki(i);
  }
  function fy(n, i) {
    if (n === "input" || n === "change")
      return ki(i);
  }
  function xp(n, i) {
    return n === i && (n !== 0 || 1 / n === 1 / i) || n !== n && i !== i;
  }
  var ya = typeof Object.is == "function" ? Object.is : xp, dy = Object.prototype.hasOwnProperty;
  function Vu(n, i) {
    if (ya(n, i))
      return !0;
    if (typeof n != "object" || n === null || typeof i != "object" || i === null)
      return !1;
    var u = Object.keys(n), v = Object.keys(i);
    if (u.length !== v.length)
      return !1;
    for (v = 0; v < u.length; v++)
      if (!dy.call(i, u[v]) || !ya(n[u[v]], i[u[v]]))
        return !1;
    return !0;
  }
  function Tp(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Rp(n, i) {
    var u = Tp(n);
    n = 0;
    for (var v; u; ) {
      if (u.nodeType === 3) {
        if (v = n + u.textContent.length, n <= i && v >= i)
          return { node: u, offset: i - n };
        n = v;
      }
      e: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break e;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = Tp(u);
    }
  }
  function Yf(n, i) {
    return n && i ? n === i ? !0 : n && n.nodeType === 3 ? !1 : i && i.nodeType === 3 ? Yf(n, i.parentNode) : "contains" in n ? n.contains(i) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function Bu() {
    for (var n = window, i = It(); i instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof i.contentWindow.location.href == "string";
      } catch (v) {
        u = !1;
      }
      if (u)
        n = i.contentWindow;
      else
        break;
      i = It(n.document);
    }
    return i;
  }
  function Yo(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i && (i === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || i === "textarea" || n.contentEditable === "true");
  }
  var _p = x && "documentMode" in document && 11 >= document.documentMode, Vl = null, Wu = null, Qo = null, so = !1;
  function Xo(n, i, u) {
    var v = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    so || Vl == null || Vl !== It(v) || (v = Vl, "selectionStart" in v && Yo(v) ? v = { start: v.selectionStart, end: v.selectionEnd } : (v = (v.ownerDocument && v.ownerDocument.defaultView || window).getSelection(), v = { anchorNode: v.anchorNode, anchorOffset: v.anchorOffset, focusNode: v.focusNode, focusOffset: v.focusOffset }), Qo && Vu(Qo, v) || (Qo = v, v = dc(Wu, "onSelect"), 0 < v.length && (i = new Ul("onSelect", "select", null, i, u), n.push({ event: i, listeners: v }), i.target = Vl)));
  }
  Ve(
    "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
    0
  ), Ve("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Ve(zl, 2);
  for (var Qf = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Xf = 0; Xf < Qf.length; Xf++)
    no.set(Qf[Xf], 0);
  C("onMouseEnter", ["mouseout", "mouseover"]), C("onMouseLeave", ["mouseout", "mouseover"]), C("onPointerEnter", ["pointerout", "pointerover"]), C("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Bl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bl));
  function Zf(n, i, u) {
    var v = n.type || "unknown-event";
    n.currentTarget = u, _r(v, i, void 0, n), n.currentTarget = null;
  }
  function uc(n, i) {
    i = (i & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var v = n[u], g = v.event;
      v = v.listeners;
      e: {
        var S = void 0;
        if (i)
          for (var R = v.length - 1; 0 <= R; R--) {
            var k = v[R], U = k.instance, ee = k.currentTarget;
            if (k = k.listener, U !== S && g.isPropagationStopped())
              break e;
            Zf(g, k, ee), S = U;
          }
        else
          for (R = 0; R < v.length; R++) {
            if (k = v[R], U = k.instance, ee = k.currentTarget, k = k.listener, U !== S && g.isPropagationStopped())
              break e;
            Zf(g, k, ee), S = U;
          }
      }
    }
    if (Rr)
      throw n = Ya, Rr = !1, Ya = null, n;
  }
  function yn(n, i) {
    var u = Ap(i), v = n + "__bubble";
    u.has(v) || (cc(i, n, 2, !1), u.add(v));
  }
  var sc = "_reactListening" + Math.random().toString(36).slice(2);
  function Jf(n) {
    n[sc] || (n[sc] = !0, d.forEach(function(i) {
      kp.has(i) || Mi(i, !1, n, null), Mi(i, !0, n, null);
    }));
  }
  function Mi(n, i, u, v) {
    var g = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, S = u;
    if (n === "selectionchange" && u.nodeType !== 9 && (S = u.ownerDocument), v !== null && !i && kp.has(n)) {
      if (n !== "scroll")
        return;
      g |= 2, S = v;
    }
    var R = Ap(S), k = n + "__" + (i ? "capture" : "bubble");
    R.has(k) || (i && (g |= 4), cc(S, n, g, i), R.add(k));
  }
  function cc(n, i, u, v) {
    var g = no.get(i);
    switch (g === void 0 ? 2 : g) {
      case 0:
        g = Qg;
        break;
      case 1:
        g = Il;
        break;
      default:
        g = Iu;
    }
    u = g.bind(null, i, u, n), g = void 0, !Jn || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (g = !0), v ? g !== void 0 ? n.addEventListener(i, u, { capture: !0, passive: g }) : n.addEventListener(i, u, !0) : g !== void 0 ? n.addEventListener(i, u, { passive: g }) : n.addEventListener(i, u, !1);
  }
  function fc(n, i, u, v, g) {
    var S = v;
    if (!(i & 1) && !(i & 2) && v !== null)
      e:
        for (; ; ) {
          if (v === null)
            return;
          var R = v.tag;
          if (R === 3 || R === 4) {
            var k = v.stateNode.containerInfo;
            if (k === g || k.nodeType === 8 && k.parentNode === g)
              break;
            if (R === 4)
              for (R = v.return; R !== null; ) {
                var U = R.tag;
                if ((U === 3 || U === 4) && (U = R.stateNode.containerInfo, U === g || U.nodeType === 8 && U.parentNode === g))
                  return;
                R = R.return;
              }
            for (; k !== null; ) {
              if (R = Jo(k), R === null)
                return;
              if (U = R.tag, U === 5 || U === 6) {
                v = S = R;
                continue e;
              }
              k = k.parentNode;
            }
          }
          v = v.return;
        }
    Yr(function() {
      var ee = S, Le = jt(u), Et = [];
      e: {
        var me = Ko.get(n);
        if (me !== void 0) {
          var Je = Ul, bt = n;
          switch (n) {
            case "keypress":
              if (Hl(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              Je = ty;
              break;
            case "focusin":
              bt = "focus", Je = $r;
              break;
            case "focusout":
              bt = "blur", Je = $r;
              break;
            case "beforeblur":
            case "afterblur":
              Je = $r;
              break;
            case "click":
              if (u.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Je = Uu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Je = ga;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Je = Fl;
              break;
            case eo:
            case Na:
            case to:
              Je = lp;
              break;
            case Ti:
              Je = dp;
              break;
            case "scroll":
              Je = Uf;
              break;
            case "wheel":
              Je = ry;
              break;
            case "copy":
            case "cut":
            case "paste":
              Je = Xg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Je = cp;
          }
          var ft = (i & 4) !== 0, Q = !ft && n === "scroll", F = ft ? me !== null ? me + "Capture" : null : me;
          ft = [];
          for (var W = ee, le; W !== null; ) {
            le = W;
            var ce = le.stateNode;
            if (le.tag === 5 && ce !== null && (le = ce, F !== null && (ce = ln(W, F), ce != null && ft.push(Ku(W, ce, le)))), Q)
              break;
            W = W.return;
          }
          0 < ft.length && (me = new Je(me, bt, null, u, Le), Et.push({ event: me, listeners: ft }));
        }
      }
      if (!(i & 7)) {
        e: {
          if (me = n === "mouseover" || n === "pointerover", Je = n === "mouseout" || n === "pointerout", me && !(i & 16) && (bt = u.relatedTarget || u.fromElement) && (Jo(bt) || bt[jr]))
            break e;
          if ((Je || me) && (me = Le.window === Le ? Le : (me = Le.ownerDocument) ? me.defaultView || me.parentWindow : window, Je ? (bt = u.relatedTarget || u.toElement, Je = ee, bt = bt ? Jo(bt) : null, bt !== null && (Q = xn(bt), bt !== Q || bt.tag !== 5 && bt.tag !== 6) && (bt = null)) : (Je = null, bt = ee), Je !== bt)) {
            if (ft = Uu, ce = "onMouseLeave", F = "onMouseEnter", W = "mouse", (n === "pointerout" || n === "pointerover") && (ft = cp, ce = "onPointerLeave", F = "onPointerEnter", W = "pointer"), Q = Je == null ? me : Fr(Je), le = bt == null ? me : Fr(bt), me = new ft(ce, W + "leave", Je, u, Le), me.target = Q, me.relatedTarget = le, ce = null, Jo(Le) === ee && (ft = new ft(F, W + "enter", bt, u, Le), ft.target = le, ft.relatedTarget = Q, ce = ft), Q = ce, Je && bt)
              t: {
                for (ft = Je, F = bt, W = 0, le = ft; le; le = Wl(le))
                  W++;
                for (le = 0, ce = F; ce; ce = Wl(ce))
                  le++;
                for (; 0 < W - le; )
                  ft = Wl(ft), W--;
                for (; 0 < le - W; )
                  F = Wl(F), le--;
                for (; W--; ) {
                  if (ft === F || F !== null && ft === F.alternate)
                    break t;
                  ft = Wl(ft), F = Wl(F);
                }
                ft = null;
              }
            else
              ft = null;
            Je !== null && Mp(Et, me, Je, ft, !1), bt !== null && Q !== null && Mp(Et, Q, bt, ft, !0);
          }
        }
        e: {
          if (me = ee ? Fr(ee) : window, Je = me.nodeName && me.nodeName.toLowerCase(), Je === "select" || Je === "input" && me.type === "file")
            var Rt = sy;
          else if (yp(me))
            if (Sp)
              Rt = fy;
            else {
              Rt = wp;
              var je = cy;
            }
          else
            (Je = me.nodeName) && Je.toLowerCase() === "input" && (me.type === "checkbox" || me.type === "radio") && (Rt = Ur);
          if (Rt && (Rt = Rt(n, ee))) {
            lc(Et, Rt, u, Le);
            break e;
          }
          je && je(n, me, ee), n === "focusout" && (je = me._wrapperState) && je.controlled && me.type === "number" && ot(me, "number", me.value);
        }
        switch (je = ee ? Fr(ee) : window, n) {
          case "focusin":
            (yp(je) || je.contentEditable === "true") && (Vl = je, Wu = ee, Qo = null);
            break;
          case "focusout":
            Qo = Wu = Vl = null;
            break;
          case "mousedown":
            so = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            so = !1, Xo(Et, u, Le);
            break;
          case "selectionchange":
            if (_p)
              break;
          case "keydown":
          case "keyup":
            Xo(Et, u, Le);
        }
        var wt;
        if (Bf)
          e: {
            switch (n) {
              case "compositionstart":
                var Lt = "onCompositionStart";
                break e;
              case "compositionend":
                Lt = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Lt = "onCompositionUpdate";
                break e;
            }
            Lt = void 0;
          }
        else
          qo ? Wf(n, u) && (Lt = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (Lt = "onCompositionStart");
        Lt && (pp && u.locale !== "ko" && (qo || Lt !== "onCompositionStart" ? Lt === "onCompositionEnd" && qo && (wt = Hf()) : (oo = Le, If = "value" in oo ? oo.value : oo.textContent, qo = !0)), je = dc(ee, Lt), 0 < je.length && (Lt = new up(Lt, n, null, u, Le), Et.push({ event: Lt, listeners: je }), wt ? Lt.data = wt : (wt = gp(u), wt !== null && (Lt.data = wt)))), (wt = iy ? oy(n, u) : ly(n, u)) && (ee = dc(ee, "onBeforeInput"), 0 < ee.length && (Le = new up(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Le
        ), Et.push({ event: Le, listeners: ee }), Le.data = wt));
      }
      uc(Et, i);
    });
  }
  function Ku(n, i, u) {
    return { instance: n, listener: i, currentTarget: u };
  }
  function dc(n, i) {
    for (var u = i + "Capture", v = []; n !== null; ) {
      var g = n, S = g.stateNode;
      g.tag === 5 && S !== null && (g = S, S = ln(n, u), S != null && v.unshift(Ku(n, S, g)), S = ln(n, i), S != null && v.push(Ku(n, S, g))), n = n.return;
    }
    return v;
  }
  function Wl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Mp(n, i, u, v, g) {
    for (var S = i._reactName, R = []; u !== null && u !== v; ) {
      var k = u, U = k.alternate, ee = k.stateNode;
      if (U !== null && U === v)
        break;
      k.tag === 5 && ee !== null && (k = ee, g ? (U = ln(u, S), U != null && R.unshift(Ku(u, U, k))) : g || (U = ln(u, S), U != null && R.push(Ku(u, U, k)))), u = u.return;
    }
    R.length !== 0 && n.push({ event: i, listeners: R });
  }
  function vc() {
  }
  var ed = null, td = null;
  function Kl(n, i) {
    switch (n) {
      case "button":
      case "input":
      case "select":
      case "textarea":
        return !!i.autoFocus;
    }
    return !1;
  }
  function Gu(n, i) {
    return n === "textarea" || n === "option" || n === "noscript" || typeof i.children == "string" || typeof i.children == "number" || typeof i.dangerouslySetInnerHTML == "object" && i.dangerouslySetInnerHTML !== null && i.dangerouslySetInnerHTML.__html != null;
  }
  var Gl = typeof setTimeout == "function" ? setTimeout : void 0, Op = typeof clearTimeout == "function" ? clearTimeout : void 0;
  function pc(n) {
    n.nodeType === 1 ? n.textContent = "" : n.nodeType === 9 && (n = n.body, n != null && (n.textContent = ""));
  }
  function co(n) {
    for (; n != null; n = n.nextSibling) {
      var i = n.nodeType;
      if (i === 1 || i === 3)
        break;
    }
    return n;
  }
  function Np(n) {
    n = n.previousSibling;
    for (var i = 0; n; ) {
      if (n.nodeType === 8) {
        var u = n.data;
        if (u === "$" || u === "$!" || u === "$?") {
          if (i === 0)
            return n;
          i--;
        } else
          u === "/$" && i++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var fo = 0;
  function hc(n) {
    return { $$typeof: Ae, toString: n, valueOf: n };
  }
  var Zo = Math.random().toString(36).slice(2), Ja = "__reactFiber$" + Zo, mc = "__reactProps$" + Zo, jr = "__reactContainer$" + Zo, Dp = "__reactEvents$" + Zo;
  function Jo(n) {
    var i = n[Ja];
    if (i)
      return i;
    for (var u = n.parentNode; u; ) {
      if (i = u[jr] || u[Ja]) {
        if (u = i.alternate, i.child !== null || u !== null && u.child !== null)
          for (n = Np(n); n !== null; ) {
            if (u = n[Ja])
              return u;
            n = Np(n);
          }
        return i;
      }
      n = u, u = n.parentNode;
    }
    return null;
  }
  function ua(n) {
    return n = n[Ja] || n[jr], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Fr(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(c(33));
  }
  function Oi(n) {
    return n[mc] || null;
  }
  function Ap(n) {
    var i = n[Dp];
    return i === void 0 && (i = n[Dp] = /* @__PURE__ */ new Set()), i;
  }
  var nd = [], un = -1;
  function Vr(n) {
    return { current: n };
  }
  function Tt(n) {
    0 > un || (n.current = nd[un], nd[un] = null, un--);
  }
  function vt(n, i) {
    un++, nd[un] = n.current, n.current = i;
  }
  var vo = {}, Rn = Vr(vo), Sr = Vr(!1), po = vo;
  function nn(n, i) {
    var u = n.type.contextTypes;
    if (!u)
      return vo;
    var v = n.stateNode;
    if (v && v.__reactInternalMemoizedUnmaskedChildContext === i)
      return v.__reactInternalMemoizedMaskedChildContext;
    var g = {}, S;
    for (S in u)
      g[S] = i[S];
    return v && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = i, n.__reactInternalMemoizedMaskedChildContext = g), g;
  }
  function Cr(n) {
    return n = n.childContextTypes, n != null;
  }
  function ei() {
    Tt(Sr), Tt(Rn);
  }
  function ql(n, i, u) {
    if (Rn.current !== vo)
      throw Error(c(168));
    vt(Rn, i), vt(Sr, u);
  }
  function Yl(n, i, u) {
    var v = n.stateNode;
    if (n = i.childContextTypes, typeof v.getChildContext != "function")
      return u;
    v = v.getChildContext();
    for (var g in v)
      if (!(g in n))
        throw Error(c(108, He(i) || "Unknown", g));
    return o({}, u, v);
  }
  function ba(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || vo, po = Rn.current, vt(Rn, n), vt(Sr, Sr.current), !0;
  }
  function Lp(n, i, u) {
    var v = n.stateNode;
    if (!v)
      throw Error(c(169));
    u ? (n = Yl(n, i, po), v.__reactInternalMemoizedMergedChildContext = n, Tt(Sr), Tt(Rn), vt(Rn, n)) : Tt(Sr), vt(Sr, u);
  }
  var rd = null, el = null, qu = s.unstable_runWithPriority, Aa = s.unstable_scheduleCallback, Yu = s.unstable_cancelCallback, vy = s.unstable_shouldYield, ho = s.unstable_requestPaint, gc = s.unstable_now, Pp = s.unstable_getCurrentPriorityLevel, yc = s.unstable_ImmediatePriority, zp = s.unstable_UserBlockingPriority, ad = s.unstable_NormalPriority, id = s.unstable_LowPriority, od = s.unstable_IdlePriority, ld = {}, Ip = ho !== void 0 ? ho : function() {
  }, ti = null, bc = null, Qu = !1, Hp = gc(), Er = 1e4 > Hp ? gc : function() {
    return gc() - Hp;
  };
  function Ql() {
    switch (Pp()) {
      case yc:
        return 99;
      case zp:
        return 98;
      case ad:
        return 97;
      case id:
        return 96;
      case od:
        return 95;
      default:
        throw Error(c(332));
    }
  }
  function ud(n) {
    switch (n) {
      case 99:
        return yc;
      case 98:
        return zp;
      case 97:
        return ad;
      case 96:
        return id;
      case 95:
        return od;
      default:
        throw Error(c(332));
    }
  }
  function tl(n, i) {
    return n = ud(n), qu(n, i);
  }
  function nl(n, i, u) {
    return n = ud(n), Aa(n, i, u);
  }
  function lr() {
    if (bc !== null) {
      var n = bc;
      bc = null, Yu(n);
    }
    Ni();
  }
  function Ni() {
    if (!Qu && ti !== null) {
      Qu = !0;
      var n = 0;
      try {
        var i = ti;
        tl(99, function() {
          for (; n < i.length; n++) {
            var u = i[n];
            do
              u = u(!0);
            while (u !== null);
          }
        }), ti = null;
      } catch (u) {
        throw ti !== null && (ti = ti.slice(n + 1)), Aa(yc, lr), u;
      } finally {
        Qu = !1;
      }
    }
  }
  var mo = I.ReactCurrentBatchConfig;
  function ur(n, i) {
    if (n && n.defaultProps) {
      i = o({}, i), n = n.defaultProps;
      for (var u in n)
        i[u] === void 0 && (i[u] = n[u]);
      return i;
    }
    return i;
  }
  var go = Vr(null), yo = null, ni = null, Sc = null;
  function sd() {
    Sc = ni = yo = null;
  }
  function Cc(n) {
    var i = go.current;
    Tt(go), n.type._context._currentValue = i;
  }
  function cd(n, i) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & i) === i) {
        if (u === null || (u.childLanes & i) === i)
          break;
        u.childLanes |= i;
      } else
        n.childLanes |= i, u !== null && (u.childLanes |= i);
      n = n.return;
    }
  }
  function rl(n, i) {
    yo = n, Sc = ni = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & i && (Ca = !0), n.firstContext = null);
  }
  function sa(n, i) {
    if (Sc !== n && i !== !1 && i !== 0)
      if ((typeof i != "number" || i === 1073741823) && (Sc = n, i = 1073741823), i = { context: n, observedBits: i, next: null }, ni === null) {
        if (yo === null)
          throw Error(c(308));
        ni = i, yo.dependencies = { lanes: 0, firstContext: i, responders: null };
      } else
        ni = ni.next = i;
    return n._currentValue;
  }
  var Sa = !1;
  function fd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
  }
  function $p(n, i) {
    n = n.updateQueue, i.updateQueue === n && (i.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function La(n, i) {
    return { eventTime: n, lane: i, tag: 0, payload: null, callback: null, next: null };
  }
  function Di(n, i) {
    if (n = n.updateQueue, n !== null) {
      n = n.shared;
      var u = n.pending;
      u === null ? i.next = i : (i.next = u.next, u.next = i), n.pending = i;
    }
  }
  function Up(n, i) {
    var u = n.updateQueue, v = n.alternate;
    if (v !== null && (v = v.updateQueue, u === v)) {
      var g = null, S = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var R = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          S === null ? g = S = R : S = S.next = R, u = u.next;
        } while (u !== null);
        S === null ? g = S = i : S = S.next = i;
      } else
        g = S = i;
      u = { baseState: v.baseState, firstBaseUpdate: g, lastBaseUpdate: S, shared: v.shared, effects: v.effects }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = i : n.next = i, u.lastBaseUpdate = i;
  }
  function Ai(n, i, u, v) {
    var g = n.updateQueue;
    Sa = !1;
    var S = g.firstBaseUpdate, R = g.lastBaseUpdate, k = g.shared.pending;
    if (k !== null) {
      g.shared.pending = null;
      var U = k, ee = U.next;
      U.next = null, R === null ? S = ee : R.next = ee, R = U;
      var Le = n.alternate;
      if (Le !== null) {
        Le = Le.updateQueue;
        var Et = Le.lastBaseUpdate;
        Et !== R && (Et === null ? Le.firstBaseUpdate = ee : Et.next = ee, Le.lastBaseUpdate = U);
      }
    }
    if (S !== null) {
      Et = g.baseState, R = 0, Le = ee = U = null;
      do {
        k = S.lane;
        var me = S.eventTime;
        if ((v & k) === k) {
          Le !== null && (Le = Le.next = {
            eventTime: me,
            lane: 0,
            tag: S.tag,
            payload: S.payload,
            callback: S.callback,
            next: null
          });
          e: {
            var Je = n, bt = S;
            switch (k = i, me = u, bt.tag) {
              case 1:
                if (Je = bt.payload, typeof Je == "function") {
                  Et = Je.call(me, Et, k);
                  break e;
                }
                Et = Je;
                break e;
              case 3:
                Je.flags = Je.flags & -4097 | 64;
              case 0:
                if (Je = bt.payload, k = typeof Je == "function" ? Je.call(me, Et, k) : Je, k == null)
                  break e;
                Et = o({}, Et, k);
                break e;
              case 2:
                Sa = !0;
            }
          }
          S.callback !== null && (n.flags |= 32, k = g.effects, k === null ? g.effects = [S] : k.push(S));
        } else
          me = { eventTime: me, lane: k, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, Le === null ? (ee = Le = me, U = Et) : Le = Le.next = me, R |= k;
        if (S = S.next, S === null) {
          if (k = g.shared.pending, k === null)
            break;
          S = k.next, k.next = null, g.lastBaseUpdate = k, g.shared.pending = null;
        }
      } while (!0);
      Le === null && (U = Et), g.baseState = U, g.firstBaseUpdate = ee, g.lastBaseUpdate = Le, fl |= R, n.lanes = R, n.memoizedState = Et;
    }
  }
  function dd(n, i, u) {
    if (n = i.effects, i.effects = null, n !== null)
      for (i = 0; i < n.length; i++) {
        var v = n[i], g = v.callback;
        if (g !== null) {
          if (v.callback = null, v = u, typeof g != "function")
            throw Error(c(191, g));
          g.call(v);
        }
      }
  }
  var Ec = new r.Component().refs;
  function Xu(n, i, u, v) {
    i = n.memoizedState, u = u(v, i), u = u == null ? i : o({}, i, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var Xl = { isMounted: function(n) {
    return (n = n._reactInternals) ? xn(n) === n : !1;
  }, enqueueSetState: function(n, i, u) {
    n = n._reactInternals;
    var v = ca(), g = si(n), S = La(v, g);
    S.payload = i, u != null && (S.callback = u), Di(n, S), Ro(n, g, v);
  }, enqueueReplaceState: function(n, i, u) {
    n = n._reactInternals;
    var v = ca(), g = si(n), S = La(v, g);
    S.tag = 1, S.payload = i, u != null && (S.callback = u), Di(n, S), Ro(n, g, v);
  }, enqueueForceUpdate: function(n, i) {
    n = n._reactInternals;
    var u = ca(), v = si(n), g = La(u, v);
    g.tag = 2, i != null && (g.callback = i), Di(n, g), Ro(n, v, u);
  } };
  function Zu(n, i, u, v, g, S, R) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(v, S, R) : i.prototype && i.prototype.isPureReactComponent ? !Vu(u, v) || !Vu(g, S) : !0;
  }
  function al(n, i, u) {
    var v = !1, g = vo, S = i.contextType;
    return typeof S == "object" && S !== null ? S = sa(S) : (g = Cr(i) ? po : Rn.current, v = i.contextTypes, S = (v = v != null) ? nn(n, g) : vo), i = new i(u, S), n.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Xl, n.stateNode = i, i._reactInternals = n, v && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = g, n.__reactInternalMemoizedMaskedChildContext = S), i;
  }
  function wc(n, i, u, v) {
    n = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(u, v), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(u, v), i.state !== n && Xl.enqueueReplaceState(i, i.state, null);
  }
  function xc(n, i, u, v) {
    var g = n.stateNode;
    g.props = u, g.state = n.memoizedState, g.refs = Ec, fd(n);
    var S = i.contextType;
    typeof S == "object" && S !== null ? g.context = sa(S) : (S = Cr(i) ? po : Rn.current, g.context = nn(n, S)), Ai(n, u, g, v), g.state = n.memoizedState, S = i.getDerivedStateFromProps, typeof S == "function" && (Xu(n, i, S, u), g.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function" || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (i = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), i !== g.state && Xl.enqueueReplaceState(g, g.state, null), Ai(n, u, g, v), g.state = n.memoizedState), typeof g.componentDidMount == "function" && (n.flags |= 4);
  }
  var il = Array.isArray;
  function Zl(n, i, u) {
    if (n = u.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (u._owner) {
        if (u = u._owner, u) {
          if (u.tag !== 1)
            throw Error(c(309));
          var v = u.stateNode;
        }
        if (!v)
          throw Error(c(147, n));
        var g = "" + n;
        return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === g ? i.ref : (i = function(S) {
          var R = v.refs;
          R === Ec && (R = v.refs = {}), S === null ? delete R[g] : R[g] = S;
        }, i._stringRef = g, i);
      }
      if (typeof n != "string")
        throw Error(c(284));
      if (!u._owner)
        throw Error(c(290, n));
    }
    return n;
  }
  function Ju(n, i) {
    if (n.type !== "textarea")
      throw Error(c(31, Object.prototype.toString.call(i) === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : i));
  }
  function vd(n) {
    function i(Q, F) {
      if (n) {
        var W = Q.lastEffect;
        W !== null ? (W.nextEffect = F, Q.lastEffect = F) : Q.firstEffect = Q.lastEffect = F, F.nextEffect = null, F.flags = 8;
      }
    }
    function u(Q, F) {
      if (!n)
        return null;
      for (; F !== null; )
        i(Q, F), F = F.sibling;
      return null;
    }
    function v(Q, F) {
      for (Q = /* @__PURE__ */ new Map(); F !== null; )
        F.key !== null ? Q.set(F.key, F) : Q.set(F.index, F), F = F.sibling;
      return Q;
    }
    function g(Q, F) {
      return Q = Oo(Q, F), Q.index = 0, Q.sibling = null, Q;
    }
    function S(Q, F, W) {
      return Q.index = W, n ? (W = Q.alternate, W !== null ? (W = W.index, W < F ? (Q.flags = 2, F) : W) : (Q.flags = 2, F)) : F;
    }
    function R(Q) {
      return n && Q.alternate === null && (Q.flags = 2), Q;
    }
    function k(Q, F, W, le) {
      return F === null || F.tag !== 6 ? (F = Fd(W, Q.mode, le), F.return = Q, F) : (F = g(F, W), F.return = Q, F);
    }
    function U(Q, F, W, le) {
      return F !== null && F.elementType === W.type ? (le = g(F, W.props), le.ref = Zl(Q, F, W), le.return = Q, le) : (le = Es(W.type, W.key, W.props, null, Q.mode, le), le.ref = Zl(Q, F, W), le.return = Q, le);
    }
    function ee(Q, F, W, le) {
      return F === null || F.tag !== 4 || F.stateNode.containerInfo !== W.containerInfo || F.stateNode.implementation !== W.implementation ? (F = Vd(W, Q.mode, le), F.return = Q, F) : (F = g(F, W.children || []), F.return = Q, F);
    }
    function Le(Q, F, W, le, ce) {
      return F === null || F.tag !== 7 ? (F = ci(W, Q.mode, le, ce), F.return = Q, F) : (F = g(F, W), F.return = Q, F);
    }
    function Et(Q, F, W) {
      if (typeof F == "string" || typeof F == "number")
        return F = Fd("" + F, Q.mode, W), F.return = Q, F;
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Y:
            return W = Es(F.type, F.key, F.props, null, Q.mode, W), W.ref = Zl(Q, null, F), W.return = Q, W;
          case q:
            return F = Vd(F, Q.mode, W), F.return = Q, F;
        }
        if (il(F) || Ke(F))
          return F = ci(
            F,
            Q.mode,
            W,
            null
          ), F.return = Q, F;
        Ju(Q, F);
      }
      return null;
    }
    function me(Q, F, W, le) {
      var ce = F !== null ? F.key : null;
      if (typeof W == "string" || typeof W == "number")
        return ce !== null ? null : k(Q, F, "" + W, le);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case Y:
            return W.key === ce ? W.type === ne ? Le(Q, F, W.props.children, le, ce) : U(Q, F, W, le) : null;
          case q:
            return W.key === ce ? ee(Q, F, W, le) : null;
        }
        if (il(W) || Ke(W))
          return ce !== null ? null : Le(Q, F, W, le, null);
        Ju(Q, W);
      }
      return null;
    }
    function Je(Q, F, W, le, ce) {
      if (typeof le == "string" || typeof le == "number")
        return Q = Q.get(W) || null, k(F, Q, "" + le, ce);
      if (typeof le == "object" && le !== null) {
        switch (le.$$typeof) {
          case Y:
            return Q = Q.get(le.key === null ? W : le.key) || null, le.type === ne ? Le(F, Q, le.props.children, ce, le.key) : U(F, Q, le, ce);
          case q:
            return Q = Q.get(le.key === null ? W : le.key) || null, ee(F, Q, le, ce);
        }
        if (il(le) || Ke(le))
          return Q = Q.get(W) || null, Le(F, Q, le, ce, null);
        Ju(F, le);
      }
      return null;
    }
    function bt(Q, F, W, le) {
      for (var ce = null, Rt = null, je = F, wt = F = 0, Lt = null; je !== null && wt < W.length; wt++) {
        je.index > wt ? (Lt = je, je = null) : Lt = je.sibling;
        var _t = me(Q, je, W[wt], le);
        if (_t === null) {
          je === null && (je = Lt);
          break;
        }
        n && je && _t.alternate === null && i(Q, je), F = S(_t, F, wt), Rt === null ? ce = _t : Rt.sibling = _t, Rt = _t, je = Lt;
      }
      if (wt === W.length)
        return u(Q, je), ce;
      if (je === null) {
        for (; wt < W.length; wt++)
          je = Et(Q, W[wt], le), je !== null && (F = S(je, F, wt), Rt === null ? ce = je : Rt.sibling = je, Rt = je);
        return ce;
      }
      for (je = v(Q, je); wt < W.length; wt++)
        Lt = Je(je, Q, wt, W[wt], le), Lt !== null && (n && Lt.alternate !== null && je.delete(Lt.key === null ? wt : Lt.key), F = S(Lt, F, wt), Rt === null ? ce = Lt : Rt.sibling = Lt, Rt = Lt);
      return n && je.forEach(function(No) {
        return i(Q, No);
      }), ce;
    }
    function ft(Q, F, W, le) {
      var ce = Ke(W);
      if (typeof ce != "function")
        throw Error(c(150));
      if (W = ce.call(W), W == null)
        throw Error(c(151));
      for (var Rt = ce = null, je = F, wt = F = 0, Lt = null, _t = W.next(); je !== null && !_t.done; wt++, _t = W.next()) {
        je.index > wt ? (Lt = je, je = null) : Lt = je.sibling;
        var No = me(Q, je, _t.value, le);
        if (No === null) {
          je === null && (je = Lt);
          break;
        }
        n && je && No.alternate === null && i(Q, je), F = S(No, F, wt), Rt === null ? ce = No : Rt.sibling = No, Rt = No, je = Lt;
      }
      if (_t.done)
        return u(Q, je), ce;
      if (je === null) {
        for (; !_t.done; wt++, _t = W.next())
          _t = Et(Q, _t.value, le), _t !== null && (F = S(_t, F, wt), Rt === null ? ce = _t : Rt.sibling = _t, Rt = _t);
        return ce;
      }
      for (je = v(Q, je); !_t.done; wt++, _t = W.next())
        _t = Je(je, Q, wt, _t.value, le), _t !== null && (n && _t.alternate !== null && je.delete(_t.key === null ? wt : _t.key), F = S(_t, F, wt), Rt === null ? ce = _t : Rt.sibling = _t, Rt = _t);
      return n && je.forEach(function(Ly) {
        return i(Q, Ly);
      }), ce;
    }
    return function(Q, F, W, le) {
      var ce = typeof W == "object" && W !== null && W.type === ne && W.key === null;
      ce && (W = W.props.children);
      var Rt = typeof W == "object" && W !== null;
      if (Rt)
        switch (W.$$typeof) {
          case Y:
            e: {
              for (Rt = W.key, ce = F; ce !== null; ) {
                if (ce.key === Rt) {
                  switch (ce.tag) {
                    case 7:
                      if (W.type === ne) {
                        u(Q, ce.sibling), F = g(ce, W.props.children), F.return = Q, Q = F;
                        break e;
                      }
                      break;
                    default:
                      if (ce.elementType === W.type) {
                        u(Q, ce.sibling), F = g(ce, W.props), F.ref = Zl(Q, ce, W), F.return = Q, Q = F;
                        break e;
                      }
                  }
                  u(Q, ce);
                  break;
                } else
                  i(Q, ce);
                ce = ce.sibling;
              }
              W.type === ne ? (F = ci(W.props.children, Q.mode, le, W.key), F.return = Q, Q = F) : (le = Es(W.type, W.key, W.props, null, Q.mode, le), le.ref = Zl(Q, F, W), le.return = Q, Q = le);
            }
            return R(Q);
          case q:
            e: {
              for (ce = W.key; F !== null; ) {
                if (F.key === ce)
                  if (F.tag === 4 && F.stateNode.containerInfo === W.containerInfo && F.stateNode.implementation === W.implementation) {
                    u(Q, F.sibling), F = g(F, W.children || []), F.return = Q, Q = F;
                    break e;
                  } else {
                    u(Q, F);
                    break;
                  }
                else
                  i(Q, F);
                F = F.sibling;
              }
              F = Vd(W, Q.mode, le), F.return = Q, Q = F;
            }
            return R(Q);
        }
      if (typeof W == "string" || typeof W == "number")
        return W = "" + W, F !== null && F.tag === 6 ? (u(Q, F.sibling), F = g(F, W), F.return = Q, Q = F) : (u(Q, F), F = Fd(W, Q.mode, le), F.return = Q, Q = F), R(Q);
      if (il(W))
        return bt(Q, F, W, le);
      if (Ke(W))
        return ft(Q, F, W, le);
      if (Rt && Ju(Q, W), typeof W == "undefined" && !ce)
        switch (Q.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(c(152, He(Q.type) || "Component"));
        }
      return u(Q, F);
    };
  }
  var es = vd(!0), pd = vd(!1), ol = {}, ri = Vr(ol), ts = Vr(ol), ns = Vr(ol);
  function ll(n) {
    if (n === ol)
      throw Error(c(174));
    return n;
  }
  function rs(n, i) {
    switch (vt(ns, i), vt(ts, n), vt(ri, ol), n = i.nodeType, n) {
      case 9:
      case 11:
        i = (i = i.documentElement) ? i.namespaceURI : We(null, "");
        break;
      default:
        n = n === 8 ? i.parentNode : i, i = n.namespaceURI || null, n = n.tagName, i = We(i, n);
    }
    Tt(ri), vt(ri, i);
  }
  function Jl() {
    Tt(ri), Tt(ts), Tt(ns);
  }
  function jp(n) {
    ll(ns.current);
    var i = ll(ri.current), u = We(i, n.type);
    i !== u && (vt(ts, n), vt(ri, u));
  }
  function hd(n) {
    ts.current === n && (Tt(ri), Tt(ts));
  }
  var Hn = Vr(0);
  function as(n) {
    for (var i = n; i !== null; ) {
      if (i.tag === 13) {
        var u = i.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || u.data === "$?" || u.data === "$!"))
          return i;
      } else if (i.tag === 19 && i.memoizedProps.revealOrder !== void 0) {
        if (i.flags & 64)
          return i;
      } else if (i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === n)
        break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === n)
          return null;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
    return null;
  }
  var ai = null, Li = null, ii = !1;
  function md(n, i) {
    var u = wa(5, null, null, 0);
    u.elementType = "DELETED", u.type = "DELETED", u.stateNode = i, u.return = n, u.flags = 8, n.lastEffect !== null ? (n.lastEffect.nextEffect = u, n.lastEffect = u) : n.firstEffect = n.lastEffect = u;
  }
  function Fp(n, i) {
    switch (n.tag) {
      case 5:
        var u = n.type;
        return i = i.nodeType !== 1 || u.toLowerCase() !== i.nodeName.toLowerCase() ? null : i, i !== null ? (n.stateNode = i, !0) : !1;
      case 6:
        return i = n.pendingProps === "" || i.nodeType !== 3 ? null : i, i !== null ? (n.stateNode = i, !0) : !1;
      case 13:
        return !1;
      default:
        return !1;
    }
  }
  function bo(n) {
    if (ii) {
      var i = Li;
      if (i) {
        var u = i;
        if (!Fp(n, i)) {
          if (i = co(u.nextSibling), !i || !Fp(n, i)) {
            n.flags = n.flags & -1025 | 2, ii = !1, ai = n;
            return;
          }
          md(ai, u);
        }
        ai = n, Li = co(i.firstChild);
      } else
        n.flags = n.flags & -1025 | 2, ii = !1, ai = n;
    }
  }
  function is(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ai = n;
  }
  function os(n) {
    if (n !== ai)
      return !1;
    if (!ii)
      return is(n), ii = !0, !1;
    var i = n.type;
    if (n.tag !== 5 || i !== "head" && i !== "body" && !Gu(i, n.memoizedProps))
      for (i = Li; i; )
        md(n, i), i = co(i.nextSibling);
    if (is(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(c(317));
      e: {
        for (n = n.nextSibling, i = 0; n; ) {
          if (n.nodeType === 8) {
            var u = n.data;
            if (u === "/$") {
              if (i === 0) {
                Li = co(n.nextSibling);
                break e;
              }
              i--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || i++;
          }
          n = n.nextSibling;
        }
        Li = null;
      }
    } else
      Li = ai ? co(n.stateNode.nextSibling) : null;
    return !0;
  }
  function eu() {
    Li = ai = null, ii = !1;
  }
  var ul = [];
  function So() {
    for (var n = 0; n < ul.length; n++)
      ul[n]._workInProgressVersionPrimary = null;
    ul.length = 0;
  }
  var tu = I.ReactCurrentDispatcher, sr = I.ReactCurrentBatchConfig, nu = 0, _n = null, cr = null, fr = null, ls = !1, Co = !1;
  function Br() {
    throw Error(c(321));
  }
  function Pi(n, i) {
    if (i === null)
      return !1;
    for (var u = 0; u < i.length && u < n.length; u++)
      if (!ya(n[u], i[u]))
        return !1;
    return !0;
  }
  function gd(n, i, u, v, g, S) {
    if (nu = S, _n = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, tu.current = n === null || n.memoizedState === null ? cs : hy, n = u(v, g), Co) {
      S = 0;
      do {
        if (Co = !1, !(25 > S))
          throw Error(c(301));
        S += 1, fr = cr = null, i.updateQueue = null, tu.current = my, n = u(v, g);
      } while (Co);
    }
    if (tu.current = _c, i = cr !== null && cr.next !== null, nu = 0, fr = cr = _n = null, ls = !1, i)
      throw Error(c(300));
    return n;
  }
  function ue() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return fr === null ? _n.memoizedState = fr = n : fr = fr.next = n, fr;
  }
  function qn() {
    if (cr === null) {
      var n = _n.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = cr.next;
    var i = fr === null ? _n.memoizedState : fr.next;
    if (i !== null)
      fr = i, cr = n;
    else {
      if (n === null)
        throw Error(c(310));
      cr = n, n = { memoizedState: cr.memoizedState, baseState: cr.baseState, baseQueue: cr.baseQueue, queue: cr.queue, next: null }, fr === null ? _n.memoizedState = fr = n : fr = fr.next = n;
    }
    return fr;
  }
  function Ft(n, i) {
    return typeof i == "function" ? i(n) : i;
  }
  function zi(n) {
    var i = qn(), u = i.queue;
    if (u === null)
      throw Error(c(311));
    u.lastRenderedReducer = n;
    var v = cr, g = v.baseQueue, S = u.pending;
    if (S !== null) {
      if (g !== null) {
        var R = g.next;
        g.next = S.next, S.next = R;
      }
      v.baseQueue = g = S, u.pending = null;
    }
    if (g !== null) {
      g = g.next, v = v.baseState;
      var k = R = S = null, U = g;
      do {
        var ee = U.lane;
        if ((nu & ee) === ee)
          k !== null && (k = k.next = { lane: 0, action: U.action, eagerReducer: U.eagerReducer, eagerState: U.eagerState, next: null }), v = U.eagerReducer === n ? U.eagerState : n(v, U.action);
        else {
          var Le = {
            lane: ee,
            action: U.action,
            eagerReducer: U.eagerReducer,
            eagerState: U.eagerState,
            next: null
          };
          k === null ? (R = k = Le, S = v) : k = k.next = Le, _n.lanes |= ee, fl |= ee;
        }
        U = U.next;
      } while (U !== null && U !== g);
      k === null ? S = v : k.next = R, ya(v, i.memoizedState) || (Ca = !0), i.memoizedState = v, i.baseState = S, i.baseQueue = k, u.lastRenderedState = v;
    }
    return [i.memoizedState, u.dispatch];
  }
  function sl(n) {
    var i = qn(), u = i.queue;
    if (u === null)
      throw Error(c(311));
    u.lastRenderedReducer = n;
    var v = u.dispatch, g = u.pending, S = i.memoizedState;
    if (g !== null) {
      u.pending = null;
      var R = g = g.next;
      do
        S = n(S, R.action), R = R.next;
      while (R !== g);
      ya(S, i.memoizedState) || (Ca = !0), i.memoizedState = S, i.baseQueue === null && (i.baseState = S), u.lastRenderedState = S;
    }
    return [S, v];
  }
  function us(n, i, u) {
    var v = i._getVersion;
    v = v(i._source);
    var g = i._workInProgressVersionPrimary;
    if (g !== null ? n = g === v : (n = n.mutableReadLanes, (n = (nu & n) === n) && (i._workInProgressVersionPrimary = v, ul.push(i))), n)
      return u(i._source);
    throw ul.push(i), Error(c(350));
  }
  function yd(n, i, u, v) {
    var g = Wr;
    if (g === null)
      throw Error(c(349));
    var S = i._getVersion, R = S(i._source), k = tu.current, U = k.useState(function() {
      return us(g, i, u);
    }), ee = U[1], Le = U[0];
    U = fr;
    var Et = n.memoizedState, me = Et.refs, Je = me.getSnapshot, bt = Et.source;
    Et = Et.subscribe;
    var ft = _n;
    return n.memoizedState = { refs: me, source: i, subscribe: v }, k.useEffect(function() {
      me.getSnapshot = u, me.setSnapshot = ee;
      var Q = S(i._source);
      if (!ya(R, Q)) {
        Q = u(i._source), ya(Le, Q) || (ee(Q), Q = si(ft), g.mutableReadLanes |= Q & g.pendingLanes), Q = g.mutableReadLanes, g.entangledLanes |= Q;
        for (var F = g.entanglements, W = Q; 0 < W; ) {
          var le = 31 - io(W), ce = 1 << le;
          F[le] |= Q, W &= ~ce;
        }
      }
    }, [u, i, v]), k.useEffect(function() {
      return v(i._source, function() {
        var Q = me.getSnapshot, F = me.setSnapshot;
        try {
          F(Q(i._source));
          var W = si(ft);
          g.mutableReadLanes |= W & g.pendingLanes;
        } catch (le) {
          F(function() {
            throw le;
          });
        }
      });
    }, [i, v]), ya(Je, u) && ya(bt, i) && ya(Et, v) || (n = { pending: null, dispatch: null, lastRenderedReducer: Ft, lastRenderedState: Le }, n.dispatch = ee = Ed.bind(null, _n, n), U.queue = n, U.baseQueue = null, Le = us(g, i, u), U.memoizedState = U.baseState = Le), Le;
  }
  function bd(n, i, u) {
    var v = qn();
    return yd(v, n, i, u);
  }
  function ru(n) {
    var i = ue();
    return typeof n == "function" && (n = n()), i.memoizedState = i.baseState = n, n = i.queue = { pending: null, dispatch: null, lastRenderedReducer: Ft, lastRenderedState: n }, n = n.dispatch = Ed.bind(null, _n, n), [i.memoizedState, n];
  }
  function au(n, i, u, v) {
    return n = { tag: n, create: i, destroy: u, deps: v, next: null }, i = _n.updateQueue, i === null ? (i = { lastEffect: null }, _n.updateQueue = i, i.lastEffect = n.next = n) : (u = i.lastEffect, u === null ? i.lastEffect = n.next = n : (v = u.next, u.next = n, n.next = v, i.lastEffect = n)), n;
  }
  function Sd(n) {
    var i = ue();
    return n = { current: n }, i.memoizedState = n;
  }
  function Ii() {
    return qn().memoizedState;
  }
  function iu(n, i, u, v) {
    var g = ue();
    _n.flags |= n, g.memoizedState = au(1 | i, u, void 0, v === void 0 ? null : v);
  }
  function Eo(n, i, u, v) {
    var g = qn();
    v = v === void 0 ? null : v;
    var S = void 0;
    if (cr !== null) {
      var R = cr.memoizedState;
      if (S = R.destroy, v !== null && Pi(v, R.deps)) {
        au(i, u, S, v);
        return;
      }
    }
    _n.flags |= n, g.memoizedState = au(1 | i, u, S, v);
  }
  function Tc(n, i) {
    return iu(516, 4, n, i);
  }
  function ss(n, i) {
    return Eo(516, 4, n, i);
  }
  function Cd(n, i) {
    return Eo(4, 2, n, i);
  }
  function Rc(n, i) {
    if (typeof i == "function")
      return n = n(), i(n), function() {
        i(null);
      };
    if (i != null)
      return n = n(), i.current = n, function() {
        i.current = null;
      };
  }
  function Pa(n, i, u) {
    return u = u != null ? u.concat([n]) : null, Eo(4, 2, Rc.bind(null, i, n), u);
  }
  function kn() {
  }
  function py(n, i) {
    var u = qn();
    i = i === void 0 ? null : i;
    var v = u.memoizedState;
    return v !== null && i !== null && Pi(i, v[1]) ? v[0] : (u.memoizedState = [n, i], n);
  }
  function hn(n, i) {
    var u = qn();
    i = i === void 0 ? null : i;
    var v = u.memoizedState;
    return v !== null && i !== null && Pi(i, v[1]) ? v[0] : (n = n(), u.memoizedState = [n, i], n);
  }
  function ou(n, i) {
    var u = Ql();
    tl(98 > u ? 98 : u, function() {
      n(!0);
    }), tl(97 < u ? 97 : u, function() {
      var v = sr.transition;
      sr.transition = 1;
      try {
        n(!1), i();
      } finally {
        sr.transition = v;
      }
    });
  }
  function Ed(n, i, u) {
    var v = ca(), g = si(n), S = { lane: g, action: u, eagerReducer: null, eagerState: null, next: null }, R = i.pending;
    if (R === null ? S.next = S : (S.next = R.next, R.next = S), i.pending = S, R = n.alternate, n === _n || R !== null && R === _n)
      Co = ls = !0;
    else {
      if (n.lanes === 0 && (R === null || R.lanes === 0) && (R = i.lastRenderedReducer, R !== null))
        try {
          var k = i.lastRenderedState, U = R(k, u);
          if (S.eagerReducer = R, S.eagerState = U, ya(U, k))
            return;
        } catch (ee) {
        } finally {
        }
      Ro(n, g, v);
    }
  }
  var _c = { readContext: sa, useCallback: Br, useContext: Br, useEffect: Br, useImperativeHandle: Br, useLayoutEffect: Br, useMemo: Br, useReducer: Br, useRef: Br, useState: Br, useDebugValue: Br, useDeferredValue: Br, useTransition: Br, useMutableSource: Br, useOpaqueIdentifier: Br, unstable_isNewReconciler: !1 }, cs = { readContext: sa, useCallback: function(n, i) {
    return ue().memoizedState = [n, i === void 0 ? null : i], n;
  }, useContext: sa, useEffect: Tc, useImperativeHandle: function(n, i, u) {
    return u = u != null ? u.concat([n]) : null, iu(4, 2, Rc.bind(
      null,
      i,
      n
    ), u);
  }, useLayoutEffect: function(n, i) {
    return iu(4, 2, n, i);
  }, useMemo: function(n, i) {
    var u = ue();
    return i = i === void 0 ? null : i, n = n(), u.memoizedState = [n, i], n;
  }, useReducer: function(n, i, u) {
    var v = ue();
    return i = u !== void 0 ? u(i) : i, v.memoizedState = v.baseState = i, n = v.queue = { pending: null, dispatch: null, lastRenderedReducer: n, lastRenderedState: i }, n = n.dispatch = Ed.bind(null, _n, n), [v.memoizedState, n];
  }, useRef: Sd, useState: ru, useDebugValue: kn, useDeferredValue: function(n) {
    var i = ru(n), u = i[0], v = i[1];
    return Tc(function() {
      var g = sr.transition;
      sr.transition = 1;
      try {
        v(n);
      } finally {
        sr.transition = g;
      }
    }, [n]), u;
  }, useTransition: function() {
    var n = ru(!1), i = n[0];
    return n = ou.bind(null, n[1]), Sd(n), [n, i];
  }, useMutableSource: function(n, i, u) {
    var v = ue();
    return v.memoizedState = { refs: { getSnapshot: i, setSnapshot: null }, source: n, subscribe: u }, yd(v, n, i, u);
  }, useOpaqueIdentifier: function() {
    if (ii) {
      var n = !1, i = hc(function() {
        throw n || (n = !0, u("r:" + (fo++).toString(36))), Error(c(355));
      }), u = ru(i)[1];
      return !(_n.mode & 2) && (_n.flags |= 516, au(
        5,
        function() {
          u("r:" + (fo++).toString(36));
        },
        void 0,
        null
      )), i;
    }
    return i = "r:" + (fo++).toString(36), ru(i), i;
  }, unstable_isNewReconciler: !1 }, hy = { readContext: sa, useCallback: py, useContext: sa, useEffect: ss, useImperativeHandle: Pa, useLayoutEffect: Cd, useMemo: hn, useReducer: zi, useRef: Ii, useState: function() {
    return zi(Ft);
  }, useDebugValue: kn, useDeferredValue: function(n) {
    var i = zi(Ft), u = i[0], v = i[1];
    return ss(function() {
      var g = sr.transition;
      sr.transition = 1;
      try {
        v(n);
      } finally {
        sr.transition = g;
      }
    }, [n]), u;
  }, useTransition: function() {
    var n = zi(Ft)[0];
    return [
      Ii().current,
      n
    ];
  }, useMutableSource: bd, useOpaqueIdentifier: function() {
    return zi(Ft)[0];
  }, unstable_isNewReconciler: !1 }, my = { readContext: sa, useCallback: py, useContext: sa, useEffect: ss, useImperativeHandle: Pa, useLayoutEffect: Cd, useMemo: hn, useReducer: sl, useRef: Ii, useState: function() {
    return sl(Ft);
  }, useDebugValue: kn, useDeferredValue: function(n) {
    var i = sl(Ft), u = i[0], v = i[1];
    return ss(function() {
      var g = sr.transition;
      sr.transition = 1;
      try {
        v(n);
      } finally {
        sr.transition = g;
      }
    }, [n]), u;
  }, useTransition: function() {
    var n = sl(Ft)[0];
    return [
      Ii().current,
      n
    ];
  }, useMutableSource: bd, useOpaqueIdentifier: function() {
    return sl(Ft)[0];
  }, unstable_isNewReconciler: !1 }, gy = I.ReactCurrentOwner, Ca = !1;
  function Zr(n, i, u, v) {
    i.child = n === null ? pd(i, null, u, v) : es(i, n.child, u, v);
  }
  function wd(n, i, u, v, g) {
    u = u.render;
    var S = i.ref;
    return rl(i, g), v = gd(n, i, u, v, S, g), n !== null && !Ca ? (i.updateQueue = n.updateQueue, i.flags &= -517, n.lanes &= ~g, Hi(n, i, g)) : (i.flags |= 1, Zr(n, i, v, g), i.child);
  }
  function xd(n, i, u, v, g, S) {
    if (n === null) {
      var R = u.type;
      return typeof R == "function" && !zc(R) && R.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (i.tag = 15, i.type = R, Vp(n, i, R, v, g, S)) : (n = Es(u.type, null, v, i, i.mode, S), n.ref = i.ref, n.return = i, i.child = n);
    }
    return R = n.child, !(g & S) && (g = R.memoizedProps, u = u.compare, u = u !== null ? u : Vu, u(g, v) && n.ref === i.ref) ? Hi(n, i, S) : (i.flags |= 1, n = Oo(R, v), n.ref = i.ref, n.return = i, i.child = n);
  }
  function Vp(n, i, u, v, g, S) {
    if (n !== null && Vu(n.memoizedProps, v) && n.ref === i.ref)
      if (Ca = !1, (S & g) !== 0)
        n.flags & 16384 && (Ca = !0);
      else
        return i.lanes = n.lanes, Hi(n, i, S);
    return Td(n, i, u, v, S);
  }
  function lu(n, i, u) {
    var v = i.pendingProps, g = v.children, S = n !== null ? n.memoizedState : null;
    if (v.mode === "hidden" || v.mode === "unstable-defer-without-hiding")
      if (!(i.mode & 4))
        i.memoizedState = { baseLanes: 0 }, Lc(i, u);
      else if (u & 1073741824)
        i.memoizedState = { baseLanes: 0 }, Lc(i, S !== null ? S.baseLanes : u);
      else
        return n = S !== null ? S.baseLanes | u : u, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: n }, Lc(i, n), null;
    else
      S !== null ? (v = S.baseLanes | u, i.memoizedState = null) : v = u, Lc(i, v);
    return Zr(n, i, g, u), i.child;
  }
  function Bp(n, i) {
    var u = i.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (i.flags |= 128);
  }
  function Td(n, i, u, v, g) {
    var S = Cr(u) ? po : Rn.current;
    return S = nn(i, S), rl(i, g), u = gd(n, i, u, v, S, g), n !== null && !Ca ? (i.updateQueue = n.updateQueue, i.flags &= -517, n.lanes &= ~g, Hi(n, i, g)) : (i.flags |= 1, Zr(n, i, u, g), i.child);
  }
  function Wp(n, i, u, v, g) {
    if (Cr(u)) {
      var S = !0;
      ba(i);
    } else
      S = !1;
    if (rl(i, g), i.stateNode === null)
      n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2), al(i, u, v), xc(i, u, v, g), v = !0;
    else if (n === null) {
      var R = i.stateNode, k = i.memoizedProps;
      R.props = k;
      var U = R.context, ee = u.contextType;
      typeof ee == "object" && ee !== null ? ee = sa(ee) : (ee = Cr(u) ? po : Rn.current, ee = nn(i, ee));
      var Le = u.getDerivedStateFromProps, Et = typeof Le == "function" || typeof R.getSnapshotBeforeUpdate == "function";
      Et || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (k !== v || U !== ee) && wc(i, R, v, ee), Sa = !1;
      var me = i.memoizedState;
      R.state = me, Ai(i, v, R, g), U = i.memoizedState, k !== v || me !== U || Sr.current || Sa ? (typeof Le == "function" && (Xu(i, u, Le, v), U = i.memoizedState), (k = Sa || Zu(i, u, k, v, me, U, ee)) ? (Et || typeof R.UNSAFE_componentWillMount != "function" && typeof R.componentWillMount != "function" || (typeof R.componentWillMount == "function" && R.componentWillMount(), typeof R.UNSAFE_componentWillMount == "function" && R.UNSAFE_componentWillMount()), typeof R.componentDidMount == "function" && (i.flags |= 4)) : (typeof R.componentDidMount == "function" && (i.flags |= 4), i.memoizedProps = v, i.memoizedState = U), R.props = v, R.state = U, R.context = ee, v = k) : (typeof R.componentDidMount == "function" && (i.flags |= 4), v = !1);
    } else {
      R = i.stateNode, $p(n, i), k = i.memoizedProps, ee = i.type === i.elementType ? k : ur(i.type, k), R.props = ee, Et = i.pendingProps, me = R.context, U = u.contextType, typeof U == "object" && U !== null ? U = sa(U) : (U = Cr(u) ? po : Rn.current, U = nn(i, U));
      var Je = u.getDerivedStateFromProps;
      (Le = typeof Je == "function" || typeof R.getSnapshotBeforeUpdate == "function") || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (k !== Et || me !== U) && wc(i, R, v, U), Sa = !1, me = i.memoizedState, R.state = me, Ai(i, v, R, g);
      var bt = i.memoizedState;
      k !== Et || me !== bt || Sr.current || Sa ? (typeof Je == "function" && (Xu(i, u, Je, v), bt = i.memoizedState), (ee = Sa || Zu(i, u, ee, v, me, bt, U)) ? (Le || typeof R.UNSAFE_componentWillUpdate != "function" && typeof R.componentWillUpdate != "function" || (typeof R.componentWillUpdate == "function" && R.componentWillUpdate(
        v,
        bt,
        U
      ), typeof R.UNSAFE_componentWillUpdate == "function" && R.UNSAFE_componentWillUpdate(v, bt, U)), typeof R.componentDidUpdate == "function" && (i.flags |= 4), typeof R.getSnapshotBeforeUpdate == "function" && (i.flags |= 256)) : (typeof R.componentDidUpdate != "function" || k === n.memoizedProps && me === n.memoizedState || (i.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && me === n.memoizedState || (i.flags |= 256), i.memoizedProps = v, i.memoizedState = bt), R.props = v, R.state = bt, R.context = U, v = ee) : (typeof R.componentDidUpdate != "function" || k === n.memoizedProps && me === n.memoizedState || (i.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && me === n.memoizedState || (i.flags |= 256), v = !1);
    }
    return Rd(n, i, u, v, S, g);
  }
  function Rd(n, i, u, v, g, S) {
    Bp(n, i);
    var R = (i.flags & 64) !== 0;
    if (!v && !R)
      return g && Lp(i, u, !1), Hi(n, i, S);
    v = i.stateNode, gy.current = i;
    var k = R && typeof u.getDerivedStateFromError != "function" ? null : v.render();
    return i.flags |= 1, n !== null && R ? (i.child = es(i, n.child, null, S), i.child = es(i, null, k, S)) : Zr(n, i, k, S), i.memoizedState = v.state, g && Lp(i, u, !0), i.child;
  }
  function Kp(n) {
    var i = n.stateNode;
    i.pendingContext ? ql(n, i.pendingContext, i.pendingContext !== i.context) : i.context && ql(n, i.context, !1), rs(n, i.containerInfo);
  }
  var dr = { dehydrated: null, retryLane: 0 };
  function wo(n, i, u) {
    var v = i.pendingProps, g = Hn.current, S = !1, R;
    return (R = (i.flags & 64) !== 0) || (R = n !== null && n.memoizedState === null ? !1 : (g & 2) !== 0), R ? (S = !0, i.flags &= -65) : n !== null && n.memoizedState === null || v.fallback === void 0 || v.unstable_avoidThisFallback === !0 || (g |= 1), vt(Hn, g & 1), n === null ? (v.fallback !== void 0 && bo(i), n = v.children, g = v.fallback, S ? (n = Gp(i, n, g, u), i.child.memoizedState = { baseLanes: u }, i.memoizedState = dr, n) : typeof v.unstable_expectedLoadTime == "number" ? (n = Gp(i, n, g, u), i.child.memoizedState = { baseLanes: u }, i.memoizedState = dr, i.lanes = 33554432, n) : (u = ml({ mode: "visible", children: n }, i.mode, u, null), u.return = i, i.child = u)) : n.memoizedState !== null ? S ? (v = xo(n, i, v.children, v.fallback, u), S = i.child, g = n.child.memoizedState, S.memoizedState = g === null ? { baseLanes: u } : { baseLanes: g.baseLanes | u }, S.childLanes = n.childLanes & ~u, i.memoizedState = dr, v) : (u = wr(n, i, v.children, u), i.memoizedState = null, u) : S ? (v = xo(n, i, v.children, v.fallback, u), S = i.child, g = n.child.memoizedState, S.memoizedState = g === null ? { baseLanes: u } : { baseLanes: g.baseLanes | u }, S.childLanes = n.childLanes & ~u, i.memoizedState = dr, v) : (u = wr(n, i, v.children, u), i.memoizedState = null, u);
  }
  function Gp(n, i, u, v) {
    var g = n.mode, S = n.child;
    return i = { mode: "hidden", children: i }, !(g & 2) && S !== null ? (S.childLanes = 0, S.pendingProps = i) : S = ml(i, g, 0, null), u = ci(u, g, v, null), S.return = n, u.return = n, S.sibling = u, n.child = S, u;
  }
  function wr(n, i, u, v) {
    var g = n.child;
    return n = g.sibling, u = Oo(g, { mode: "visible", children: u }), !(i.mode & 2) && (u.lanes = v), u.return = i, u.sibling = null, n !== null && (n.nextEffect = null, n.flags = 8, i.firstEffect = i.lastEffect = n), i.child = u;
  }
  function xo(n, i, u, v, g) {
    var S = i.mode, R = n.child;
    n = R.sibling;
    var k = { mode: "hidden", children: u };
    return !(S & 2) && i.child !== R ? (u = i.child, u.childLanes = 0, u.pendingProps = k, R = u.lastEffect, R !== null ? (i.firstEffect = u.firstEffect, i.lastEffect = R, R.nextEffect = null) : i.firstEffect = i.lastEffect = null) : u = Oo(R, k), n !== null ? v = Oo(n, v) : (v = ci(v, S, g, null), v.flags |= 2), v.return = i, u.return = i, u.sibling = v, i.child = u, v;
  }
  function tn(n, i) {
    n.lanes |= i;
    var u = n.alternate;
    u !== null && (u.lanes |= i), cd(n.return, i);
  }
  function uu(n, i, u, v, g, S) {
    var R = n.memoizedState;
    R === null ? n.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: v, tail: u, tailMode: g, lastEffect: S } : (R.isBackwards = i, R.rendering = null, R.renderingStartTime = 0, R.last = v, R.tail = u, R.tailMode = g, R.lastEffect = S);
  }
  function yy(n, i, u) {
    var v = i.pendingProps, g = v.revealOrder, S = v.tail;
    if (Zr(n, i, v.children, u), v = Hn.current, v & 2)
      v = v & 1 | 2, i.flags |= 64;
    else {
      if (n !== null && n.flags & 64)
        e:
          for (n = i.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && tn(n, u);
            else if (n.tag === 19)
              tn(n, u);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === i)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === i)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      v &= 1;
    }
    if (vt(Hn, v), !(i.mode & 2))
      i.memoizedState = null;
    else
      switch (g) {
        case "forwards":
          for (u = i.child, g = null; u !== null; )
            n = u.alternate, n !== null && as(n) === null && (g = u), u = u.sibling;
          u = g, u === null ? (g = i.child, i.child = null) : (g = u.sibling, u.sibling = null), uu(i, !1, g, u, S, i.lastEffect);
          break;
        case "backwards":
          for (u = null, g = i.child, i.child = null; g !== null; ) {
            if (n = g.alternate, n !== null && as(n) === null) {
              i.child = g;
              break;
            }
            n = g.sibling, g.sibling = u, u = g, g = n;
          }
          uu(i, !0, u, null, S, i.lastEffect);
          break;
        case "together":
          uu(i, !1, null, null, void 0, i.lastEffect);
          break;
        default:
          i.memoizedState = null;
      }
    return i.child;
  }
  function Hi(n, i, u) {
    if (n !== null && (i.dependencies = n.dependencies), fl |= i.lanes, u & i.childLanes) {
      if (n !== null && i.child !== n.child)
        throw Error(c(153));
      if (i.child !== null) {
        for (n = i.child, u = Oo(n, n.pendingProps), i.child = u, u.return = i; n.sibling !== null; )
          n = n.sibling, u = u.sibling = Oo(n, n.pendingProps), u.return = i;
        u.sibling = null;
      }
      return i.child;
    }
    return null;
  }
  var kc, su, qp, _d;
  kc = function(n, i) {
    for (var u = i.child; u !== null; ) {
      if (u.tag === 5 || u.tag === 6)
        n.appendChild(u.stateNode);
      else if (u.tag !== 4 && u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === i)
        break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === i)
          return;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }, su = function() {
  }, qp = function(n, i, u, v) {
    var g = n.memoizedProps;
    if (g !== v) {
      n = i.stateNode, ll(ri.current);
      var S = null;
      switch (u) {
        case "input":
          g = $t(n, g), v = $t(n, v), S = [];
          break;
        case "option":
          g = Qt(n, g), v = Qt(n, v), S = [];
          break;
        case "select":
          g = o({}, g, { value: void 0 }), v = o({}, v, { value: void 0 }), S = [];
          break;
        case "textarea":
          g = Gt(n, g), v = Gt(n, v), S = [];
          break;
        default:
          typeof g.onClick != "function" && typeof v.onClick == "function" && (n.onclick = vc);
      }
      Vt(u, v);
      var R;
      u = null;
      for (ee in g)
        if (!v.hasOwnProperty(ee) && g.hasOwnProperty(ee) && g[ee] != null)
          if (ee === "style") {
            var k = g[ee];
            for (R in k)
              k.hasOwnProperty(R) && (u || (u = {}), u[R] = "");
          } else
            ee !== "dangerouslySetInnerHTML" && ee !== "children" && ee !== "suppressContentEditableWarning" && ee !== "suppressHydrationWarning" && ee !== "autoFocus" && (m.hasOwnProperty(ee) ? S || (S = []) : (S = S || []).push(ee, null));
      for (ee in v) {
        var U = v[ee];
        if (k = g != null ? g[ee] : void 0, v.hasOwnProperty(ee) && U !== k && (U != null || k != null))
          if (ee === "style")
            if (k) {
              for (R in k)
                !k.hasOwnProperty(R) || U && U.hasOwnProperty(R) || (u || (u = {}), u[R] = "");
              for (R in U)
                U.hasOwnProperty(R) && k[R] !== U[R] && (u || (u = {}), u[R] = U[R]);
            } else
              u || (S || (S = []), S.push(ee, u)), u = U;
          else
            ee === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, k = k ? k.__html : void 0, U != null && k !== U && (S = S || []).push(ee, U)) : ee === "children" ? typeof U != "string" && typeof U != "number" || (S = S || []).push(ee, "" + U) : ee !== "suppressContentEditableWarning" && ee !== "suppressHydrationWarning" && (m.hasOwnProperty(ee) ? (U != null && ee === "onScroll" && yn("scroll", n), S || k === U || (S = [])) : typeof U == "object" && U !== null && U.$$typeof === Ae ? U.toString() : (S = S || []).push(ee, U));
      }
      u && (S = S || []).push(
        "style",
        u
      );
      var ee = S;
      (i.updateQueue = ee) && (i.flags |= 4);
    }
  }, _d = function(n, i, u, v) {
    u !== v && (i.flags |= 4);
  };
  function fs(n, i) {
    if (!ii)
      switch (n.tailMode) {
        case "hidden":
          i = n.tail;
          for (var u = null; i !== null; )
            i.alternate !== null && (u = i), i = i.sibling;
          u === null ? n.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = n.tail;
          for (var v = null; u !== null; )
            u.alternate !== null && (v = u), u = u.sibling;
          v === null ? i || n.tail === null ? n.tail = null : n.tail.sibling = null : v.sibling = null;
      }
  }
  function by(n, i, u) {
    var v = i.pendingProps;
    switch (i.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return null;
      case 1:
        return Cr(i.type) && ei(), null;
      case 3:
        return Jl(), Tt(Sr), Tt(Rn), So(), v = i.stateNode, v.pendingContext && (v.context = v.pendingContext, v.pendingContext = null), (n === null || n.child === null) && (os(i) ? i.flags |= 4 : v.hydrate || (i.flags |= 256)), su(i), null;
      case 5:
        hd(i);
        var g = ll(ns.current);
        if (u = i.type, n !== null && i.stateNode != null)
          qp(n, i, u, v, g), n.ref !== i.ref && (i.flags |= 128);
        else {
          if (!v) {
            if (i.stateNode === null)
              throw Error(c(166));
            return null;
          }
          if (n = ll(ri.current), os(i)) {
            v = i.stateNode, u = i.type;
            var S = i.memoizedProps;
            switch (v[Ja] = i, v[mc] = S, u) {
              case "dialog":
                yn("cancel", v), yn("close", v);
                break;
              case "iframe":
              case "object":
              case "embed":
                yn("load", v);
                break;
              case "video":
              case "audio":
                for (n = 0; n < Bl.length; n++)
                  yn(Bl[n], v);
                break;
              case "source":
                yn("error", v);
                break;
              case "img":
              case "image":
              case "link":
                yn("error", v), yn("load", v);
                break;
              case "details":
                yn("toggle", v);
                break;
              case "input":
                Ze(v, S), yn("invalid", v);
                break;
              case "select":
                v._wrapperState = { wasMultiple: !!S.multiple }, yn("invalid", v);
                break;
              case "textarea":
                Wn(v, S), yn("invalid", v);
            }
            Vt(u, S), n = null;
            for (var R in S)
              S.hasOwnProperty(R) && (g = S[R], R === "children" ? typeof g == "string" ? v.textContent !== g && (n = ["children", g]) : typeof g == "number" && v.textContent !== "" + g && (n = ["children", "" + g]) : m.hasOwnProperty(R) && g != null && R === "onScroll" && yn("scroll", v));
            switch (u) {
              case "input":
                mt(v), Zt(v, S, !0);
                break;
              case "textarea":
                mt(v), en(v);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof S.onClick == "function" && (v.onclick = vc);
            }
            v = n, i.updateQueue = v, v !== null && (i.flags |= 4);
          } else {
            switch (R = g.nodeType === 9 ? g : g.ownerDocument, n === ye.html && (n = Oe(u)), n === ye.html ? u === "script" ? (n = R.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof v.is == "string" ? n = R.createElement(u, { is: v.is }) : (n = R.createElement(u), u === "select" && (R = n, v.multiple ? R.multiple = !0 : v.size && (R.size = v.size))) : n = R.createElementNS(n, u), n[Ja] = i, n[mc] = v, kc(n, i, !1, !1), i.stateNode = n, R = dn(u, v), u) {
              case "dialog":
                yn("cancel", n), yn("close", n), g = v;
                break;
              case "iframe":
              case "object":
              case "embed":
                yn("load", n), g = v;
                break;
              case "video":
              case "audio":
                for (g = 0; g < Bl.length; g++)
                  yn(Bl[g], n);
                g = v;
                break;
              case "source":
                yn("error", n), g = v;
                break;
              case "img":
              case "image":
              case "link":
                yn("error", n), yn("load", n), g = v;
                break;
              case "details":
                yn("toggle", n), g = v;
                break;
              case "input":
                Ze(n, v), g = $t(n, v), yn("invalid", n);
                break;
              case "option":
                g = Qt(n, v);
                break;
              case "select":
                n._wrapperState = { wasMultiple: !!v.multiple }, g = o({}, v, { value: void 0 }), yn("invalid", n);
                break;
              case "textarea":
                Wn(n, v), g = Gt(n, v), yn("invalid", n);
                break;
              default:
                g = v;
            }
            Vt(u, g);
            var k = g;
            for (S in k)
              if (k.hasOwnProperty(S)) {
                var U = k[S];
                S === "style" ? Ut(n, U) : S === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, U != null && Mt(n, U)) : S === "children" ? typeof U == "string" ? (u !== "textarea" || U !== "") && rt(n, U) : typeof U == "number" && rt(n, "" + U) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (m.hasOwnProperty(S) ? U != null && S === "onScroll" && yn("scroll", n) : U != null && P(n, S, U, R));
              }
            switch (u) {
              case "input":
                mt(n), Zt(n, v, !1);
                break;
              case "textarea":
                mt(n), en(n);
                break;
              case "option":
                v.value != null && n.setAttribute("value", "" + et(v.value));
                break;
              case "select":
                n.multiple = !!v.multiple, S = v.value, S != null ? ut(n, !!v.multiple, S, !1) : v.defaultValue != null && ut(n, !!v.multiple, v.defaultValue, !0);
                break;
              default:
                typeof g.onClick == "function" && (n.onclick = vc);
            }
            Kl(u, v) && (i.flags |= 4);
          }
          i.ref !== null && (i.flags |= 128);
        }
        return null;
      case 6:
        if (n && i.stateNode != null)
          _d(n, i, n.memoizedProps, v);
        else {
          if (typeof v != "string" && i.stateNode === null)
            throw Error(c(166));
          u = ll(ns.current), ll(ri.current), os(i) ? (v = i.stateNode, u = i.memoizedProps, v[Ja] = i, v.nodeValue !== u && (i.flags |= 4)) : (v = (u.nodeType === 9 ? u : u.ownerDocument).createTextNode(v), v[Ja] = i, i.stateNode = v);
        }
        return null;
      case 13:
        return Tt(Hn), v = i.memoizedState, i.flags & 64 ? (i.lanes = u, i) : (v = v !== null, u = !1, n === null ? i.memoizedProps.fallback !== void 0 && os(i) : u = n.memoizedState !== null, v && !u && i.mode & 2 && (n === null && i.memoizedProps.unstable_avoidThisFallback !== !0 || Hn.current & 1 ? vr === 0 && (vr = 3) : ((vr === 0 || vr === 3) && (vr = 4), Wr === null || !(fl & 134217727) && !(li & 134217727) || vu(Wr, xr))), (v || u) && (i.flags |= 4), null);
      case 4:
        return Jl(), su(i), n === null && Jf(i.stateNode.containerInfo), null;
      case 10:
        return Cc(i), null;
      case 17:
        return Cr(i.type) && ei(), null;
      case 19:
        if (Tt(Hn), v = i.memoizedState, v === null)
          return null;
        if (S = (i.flags & 64) !== 0, R = v.rendering, R === null)
          if (S)
            fs(v, !1);
          else {
            if (vr !== 0 || n !== null && n.flags & 64)
              for (n = i.child; n !== null; ) {
                if (R = as(n), R !== null) {
                  for (i.flags |= 64, fs(v, !1), S = R.updateQueue, S !== null && (i.updateQueue = S, i.flags |= 4), v.lastEffect === null && (i.firstEffect = null), i.lastEffect = v.lastEffect, v = u, u = i.child; u !== null; )
                    S = u, n = v, S.flags &= 2, S.nextEffect = null, S.firstEffect = null, S.lastEffect = null, R = S.alternate, R === null ? (S.childLanes = 0, S.lanes = n, S.child = null, S.memoizedProps = null, S.memoizedState = null, S.updateQueue = null, S.dependencies = null, S.stateNode = null) : (S.childLanes = R.childLanes, S.lanes = R.lanes, S.child = R.child, S.memoizedProps = R.memoizedProps, S.memoizedState = R.memoizedState, S.updateQueue = R.updateQueue, S.type = R.type, n = R.dependencies, S.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
                  return vt(Hn, Hn.current & 1 | 2), i.child;
                }
                n = n.sibling;
              }
            v.tail !== null && Er() > dl && (i.flags |= 64, S = !0, fs(v, !1), i.lanes = 33554432);
          }
        else {
          if (!S)
            if (n = as(R), n !== null) {
              if (i.flags |= 64, S = !0, u = n.updateQueue, u !== null && (i.updateQueue = u, i.flags |= 4), fs(v, !0), v.tail === null && v.tailMode === "hidden" && !R.alternate && !ii)
                return i = i.lastEffect = v.lastEffect, i !== null && (i.nextEffect = null), null;
            } else
              2 * Er() - v.renderingStartTime > dl && u !== 1073741824 && (i.flags |= 64, S = !0, fs(v, !1), i.lanes = 33554432);
          v.isBackwards ? (R.sibling = i.child, i.child = R) : (u = v.last, u !== null ? u.sibling = R : i.child = R, v.last = R);
        }
        return v.tail !== null ? (u = v.tail, v.rendering = u, v.tail = u.sibling, v.lastEffect = i.lastEffect, v.renderingStartTime = Er(), u.sibling = null, i = Hn.current, vt(Hn, S ? i & 1 | 2 : i & 1), u) : null;
      case 23:
      case 24:
        return $d(), n !== null && n.memoizedState !== null != (i.memoizedState !== null) && v.mode !== "unstable-defer-without-hiding" && (i.flags |= 4), null;
    }
    throw Error(c(156, i.tag));
  }
  function Yp(n) {
    switch (n.tag) {
      case 1:
        Cr(n.type) && ei();
        var i = n.flags;
        return i & 4096 ? (n.flags = i & -4097 | 64, n) : null;
      case 3:
        if (Jl(), Tt(Sr), Tt(Rn), So(), i = n.flags, i & 64)
          throw Error(c(285));
        return n.flags = i & -4097 | 64, n;
      case 5:
        return hd(n), null;
      case 13:
        return Tt(Hn), i = n.flags, i & 4096 ? (n.flags = i & -4097 | 64, n) : null;
      case 19:
        return Tt(Hn), null;
      case 4:
        return Jl(), null;
      case 10:
        return Cc(n), null;
      case 23:
      case 24:
        return $d(), null;
      default:
        return null;
    }
  }
  function kd(n, i) {
    try {
      var u = "", v = i;
      do
        u += Nt(v), v = v.return;
      while (v);
      var g = u;
    } catch (S) {
      g = `
Error generating stack: ` + S.message + `
` + S.stack;
    }
    return { value: n, source: i, stack: g };
  }
  function Md(n, i) {
    try {
      console.error(i.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var Qp = typeof WeakMap == "function" ? WeakMap : Map;
  function Xp(n, i, u) {
    u = La(-1, u), u.tag = 3, u.payload = { element: null };
    var v = i.value;
    return u.callback = function() {
      gs || (gs = !0, Ld = v), Md(n, i);
    }, u;
  }
  function Zp(n, i, u) {
    u = La(-1, u), u.tag = 3;
    var v = n.type.getDerivedStateFromError;
    if (typeof v == "function") {
      var g = i.value;
      u.payload = function() {
        return Md(n, i), v(g);
      };
    }
    var S = n.stateNode;
    return S !== null && typeof S.componentDidCatch == "function" && (u.callback = function() {
      typeof v != "function" && (ui === null ? ui = /* @__PURE__ */ new Set([this]) : ui.add(this), Md(n, i));
      var R = i.stack;
      this.componentDidCatch(i.value, { componentStack: R !== null ? R : "" });
    }), u;
  }
  var Sy = typeof WeakSet == "function" ? WeakSet : Set;
  function Jp(n) {
    var i = n.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (u) {
          Mo(n, u);
        }
      else
        i.current = null;
  }
  function Cy(n, i) {
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (i.flags & 256 && n !== null) {
          var u = n.memoizedProps, v = n.memoizedState;
          n = i.stateNode, i = n.getSnapshotBeforeUpdate(i.elementType === i.type ? u : ur(i.type, u), v), n.__reactInternalSnapshotBeforeUpdate = i;
        }
        return;
      case 3:
        i.flags & 256 && pc(i.stateNode.containerInfo);
        return;
      case 5:
      case 6:
      case 4:
      case 17:
        return;
    }
    throw Error(c(163));
  }
  function Od(n, i, u) {
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        if (i = u.updateQueue, i = i !== null ? i.lastEffect : null, i !== null) {
          n = i = i.next;
          do {
            if ((n.tag & 3) === 3) {
              var v = n.create;
              n.destroy = v();
            }
            n = n.next;
          } while (n !== i);
        }
        if (i = u.updateQueue, i = i !== null ? i.lastEffect : null, i !== null) {
          n = i = i.next;
          do {
            var g = n;
            v = g.next, g = g.tag, g & 4 && g & 1 && (jd(u, n), fh(u, n)), n = v;
          } while (n !== i);
        }
        return;
      case 1:
        n = u.stateNode, u.flags & 4 && (i === null ? n.componentDidMount() : (v = u.elementType === u.type ? i.memoizedProps : ur(u.type, i.memoizedProps), n.componentDidUpdate(
          v,
          i.memoizedState,
          n.__reactInternalSnapshotBeforeUpdate
        ))), i = u.updateQueue, i !== null && dd(u, i, n);
        return;
      case 3:
        if (i = u.updateQueue, i !== null) {
          if (n = null, u.child !== null)
            switch (u.child.tag) {
              case 5:
                n = u.child.stateNode;
                break;
              case 1:
                n = u.child.stateNode;
            }
          dd(u, i, n);
        }
        return;
      case 5:
        n = u.stateNode, i === null && u.flags & 4 && Kl(u.type, u.memoizedProps) && n.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        u.memoizedState === null && (u = u.alternate, u !== null && (u = u.memoizedState, u !== null && (u = u.dehydrated, u !== null && tr(u))));
        return;
      case 19:
      case 17:
      case 20:
      case 21:
      case 23:
      case 24:
        return;
    }
    throw Error(c(163));
  }
  function Nd(n, i) {
    for (var u = n; ; ) {
      if (u.tag === 5) {
        var v = u.stateNode;
        if (i)
          v = v.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
        else {
          v = u.stateNode;
          var g = u.memoizedProps.style;
          g = g != null && g.hasOwnProperty("display") ? g.display : null, v.style.display = Ot("display", g);
        }
      } else if (u.tag === 6)
        u.stateNode.nodeValue = i ? "" : u.memoizedProps;
      else if ((u.tag !== 23 && u.tag !== 24 || u.memoizedState === null || u === n) && u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === n)
        break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === n)
          return;
        u = u.return;
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }
  function eh(n, i) {
    if (el && typeof el.onCommitFiberUnmount == "function")
      try {
        el.onCommitFiberUnmount(rd, i);
      } catch (S) {
      }
    switch (i.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (n = i.updateQueue, n !== null && (n = n.lastEffect, n !== null)) {
          var u = n = n.next;
          do {
            var v = u, g = v.destroy;
            if (v = v.tag, g !== void 0)
              if (v & 4)
                jd(i, u);
              else {
                v = i;
                try {
                  g();
                } catch (S) {
                  Mo(v, S);
                }
              }
            u = u.next;
          } while (u !== n);
        }
        break;
      case 1:
        if (Jp(i), n = i.stateNode, typeof n.componentWillUnmount == "function")
          try {
            n.props = i.memoizedProps, n.state = i.memoizedState, n.componentWillUnmount();
          } catch (S) {
            Mo(
              i,
              S
            );
          }
        break;
      case 5:
        Jp(i);
        break;
      case 4:
        ah(n, i);
    }
  }
  function th(n) {
    n.alternate = null, n.child = null, n.dependencies = null, n.firstEffect = null, n.lastEffect = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.return = null, n.updateQueue = null;
  }
  function nh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function rh(n) {
    e: {
      for (var i = n.return; i !== null; ) {
        if (nh(i))
          break e;
        i = i.return;
      }
      throw Error(c(160));
    }
    var u = i;
    switch (i = u.stateNode, u.tag) {
      case 5:
        var v = !1;
        break;
      case 3:
        i = i.containerInfo, v = !0;
        break;
      case 4:
        i = i.containerInfo, v = !0;
        break;
      default:
        throw Error(c(161));
    }
    u.flags & 16 && (rt(i, ""), u.flags &= -17);
    e:
      t:
        for (u = n; ; ) {
          for (; u.sibling === null; ) {
            if (u.return === null || nh(u.return)) {
              u = null;
              break e;
            }
            u = u.return;
          }
          for (u.sibling.return = u.return, u = u.sibling; u.tag !== 5 && u.tag !== 6 && u.tag !== 18; ) {
            if (u.flags & 2 || u.child === null || u.tag === 4)
              continue t;
            u.child.return = u, u = u.child;
          }
          if (!(u.flags & 2)) {
            u = u.stateNode;
            break e;
          }
        }
    v ? ds(n, u, i) : vs(n, u, i);
  }
  function ds(n, i, u) {
    var v = n.tag, g = v === 5 || v === 6;
    if (g)
      n = g ? n.stateNode : n.stateNode.instance, i ? u.nodeType === 8 ? u.parentNode.insertBefore(n, i) : u.insertBefore(n, i) : (u.nodeType === 8 ? (i = u.parentNode, i.insertBefore(n, u)) : (i = u, i.appendChild(n)), u = u._reactRootContainer, u != null || i.onclick !== null || (i.onclick = vc));
    else if (v !== 4 && (n = n.child, n !== null))
      for (ds(n, i, u), n = n.sibling; n !== null; )
        ds(n, i, u), n = n.sibling;
  }
  function vs(n, i, u) {
    var v = n.tag, g = v === 5 || v === 6;
    if (g)
      n = g ? n.stateNode : n.stateNode.instance, i ? u.insertBefore(n, i) : u.appendChild(n);
    else if (v !== 4 && (n = n.child, n !== null))
      for (vs(n, i, u), n = n.sibling; n !== null; )
        vs(n, i, u), n = n.sibling;
  }
  function ah(n, i) {
    for (var u = i, v = !1, g, S; ; ) {
      if (!v) {
        v = u.return;
        e:
          for (; ; ) {
            if (v === null)
              throw Error(c(160));
            switch (g = v.stateNode, v.tag) {
              case 5:
                S = !1;
                break e;
              case 3:
                g = g.containerInfo, S = !0;
                break e;
              case 4:
                g = g.containerInfo, S = !0;
                break e;
            }
            v = v.return;
          }
        v = !0;
      }
      if (u.tag === 5 || u.tag === 6) {
        e:
          for (var R = n, k = u, U = k; ; )
            if (eh(R, U), U.child !== null && U.tag !== 4)
              U.child.return = U, U = U.child;
            else {
              if (U === k)
                break e;
              for (; U.sibling === null; ) {
                if (U.return === null || U.return === k)
                  break e;
                U = U.return;
              }
              U.sibling.return = U.return, U = U.sibling;
            }
        S ? (R = g, k = u.stateNode, R.nodeType === 8 ? R.parentNode.removeChild(k) : R.removeChild(k)) : g.removeChild(u.stateNode);
      } else if (u.tag === 4) {
        if (u.child !== null) {
          g = u.stateNode.containerInfo, S = !0, u.child.return = u, u = u.child;
          continue;
        }
      } else if (eh(n, u), u.child !== null) {
        u.child.return = u, u = u.child;
        continue;
      }
      if (u === i)
        break;
      for (; u.sibling === null; ) {
        if (u.return === null || u.return === i)
          return;
        u = u.return, u.tag === 4 && (v = !1);
      }
      u.sibling.return = u.return, u = u.sibling;
    }
  }
  function Dd(n, i) {
    switch (i.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var u = i.updateQueue;
        if (u = u !== null ? u.lastEffect : null, u !== null) {
          var v = u = u.next;
          do
            (v.tag & 3) === 3 && (n = v.destroy, v.destroy = void 0, n !== void 0 && n()), v = v.next;
          while (v !== u);
        }
        return;
      case 1:
        return;
      case 5:
        if (u = i.stateNode, u != null) {
          v = i.memoizedProps;
          var g = n !== null ? n.memoizedProps : v;
          n = i.type;
          var S = i.updateQueue;
          if (i.updateQueue = null, S !== null) {
            for (u[mc] = v, n === "input" && v.type === "radio" && v.name != null && kt(u, v), dn(n, g), i = dn(n, v), g = 0; g < S.length; g += 2) {
              var R = S[g], k = S[g + 1];
              R === "style" ? Ut(u, k) : R === "dangerouslySetInnerHTML" ? Mt(u, k) : R === "children" ? rt(u, k) : P(u, R, k, i);
            }
            switch (n) {
              case "input":
                gt(u, v);
                break;
              case "textarea":
                qt(u, v);
                break;
              case "select":
                n = u._wrapperState.wasMultiple, u._wrapperState.wasMultiple = !!v.multiple, S = v.value, S != null ? ut(u, !!v.multiple, S, !1) : n !== !!v.multiple && (v.defaultValue != null ? ut(u, !!v.multiple, v.defaultValue, !0) : ut(u, !!v.multiple, v.multiple ? [] : "", !1));
            }
          }
        }
        return;
      case 6:
        if (i.stateNode === null)
          throw Error(c(162));
        i.stateNode.nodeValue = i.memoizedProps;
        return;
      case 3:
        u = i.stateNode, u.hydrate && (u.hydrate = !1, tr(u.containerInfo));
        return;
      case 12:
        return;
      case 13:
        i.memoizedState !== null && (ms = Er(), Nd(i.child, !0)), ih(i);
        return;
      case 19:
        ih(i);
        return;
      case 17:
        return;
      case 23:
      case 24:
        Nd(i, i.memoizedState !== null);
        return;
    }
    throw Error(c(163));
  }
  function ih(n) {
    var i = n.updateQueue;
    if (i !== null) {
      n.updateQueue = null;
      var u = n.stateNode;
      u === null && (u = n.stateNode = new Sy()), i.forEach(function(v) {
        var g = _y.bind(null, n, v);
        u.has(v) || (u.add(v), v.then(g, g));
      });
    }
  }
  function Ey(n, i) {
    return n !== null && (n = n.memoizedState, n === null || n.dehydrated !== null) ? (i = i.memoizedState, i !== null && i.dehydrated === null) : !1;
  }
  var ps = Math.ceil, cu = I.ReactCurrentDispatcher, cl = I.ReactCurrentOwner, Ct = 0, Wr = null, Yn = null, xr = 0, oi = 0, fu = Vr(0), vr = 0, Nr = null, za = 0, fl = 0, li = 0, Ad = 0, hs = null, ms = 0, dl = 1 / 0;
  function du() {
    dl = Er() + 500;
  }
  var Ue = null, gs = !1, Ld = null, ui = null, To = !1, vl = null, ys = 90, Pd = [], zd = [], $i = null, bs = 0, Mc = null, Oc = -1, Ui = 0, Nc = 0, Ss = null, Dc = !1;
  function ca() {
    return Ct & 48 ? Er() : Oc !== -1 ? Oc : Oc = Er();
  }
  function si(n) {
    if (n = n.mode, !(n & 2))
      return 1;
    if (!(n & 4))
      return Ql() === 99 ? 1 : 2;
    if (Ui === 0 && (Ui = za), mo.transition !== 0) {
      Nc !== 0 && (Nc = hs !== null ? hs.pendingLanes : 0), n = Ui;
      var i = 4186112 & ~Nc;
      return i &= -i, i === 0 && (n = 4186112 & ~n, i = n & -n, i === 0 && (i = 8192)), i;
    }
    return n = Ql(), Ct & 4 && n === 98 ? n = Ri(12, Ui) : (n = Cn(n), n = Ri(n, Ui)), n;
  }
  function Ro(n, i, u) {
    if (50 < bs)
      throw bs = 0, Mc = null, Error(c(185));
    if (n = Ac(n, i), n === null)
      return null;
    Pu(n, i, u), n === Wr && (li |= i, vr === 4 && vu(n, xr));
    var v = Ql();
    i === 1 ? Ct & 8 && !(Ct & 48) ? Hd(n) : (Ea(n, u), Ct === 0 && (du(), lr())) : (!(Ct & 4) || v !== 98 && v !== 99 || ($i === null ? $i = /* @__PURE__ */ new Set([n]) : $i.add(n)), Ea(n, u)), hs = n;
  }
  function Ac(n, i) {
    n.lanes |= i;
    var u = n.alternate;
    for (u !== null && (u.lanes |= i), u = n, n = n.return; n !== null; )
      n.childLanes |= i, u = n.alternate, u !== null && (u.childLanes |= i), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  function Ea(n, i) {
    for (var u = n.callbackNode, v = n.suspendedLanes, g = n.pingedLanes, S = n.expirationTimes, R = n.pendingLanes; 0 < R; ) {
      var k = 31 - io(R), U = 1 << k, ee = S[k];
      if (ee === -1) {
        if (!(U & v) || U & g) {
          ee = i, pn(U);
          var Le = ct;
          S[k] = 10 <= Le ? ee + 250 : 6 <= Le ? ee + 5e3 : -1;
        }
      } else
        ee <= i && (n.expiredLanes |= U);
      R &= ~U;
    }
    if (v = Za(n, n === Wr ? xr : 0), i = ct, v === 0)
      u !== null && (u !== ld && Yu(u), n.callbackNode = null, n.callbackPriority = 0);
    else {
      if (u !== null) {
        if (n.callbackPriority === i)
          return;
        u !== ld && Yu(u);
      }
      i === 15 ? (u = Hd.bind(null, n), ti === null ? (ti = [u], bc = Aa(yc, Ni)) : ti.push(u), u = ld) : i === 14 ? u = nl(99, Hd.bind(null, n)) : (u = ro(i), u = nl(u, Id.bind(null, n))), n.callbackPriority = i, n.callbackNode = u;
    }
  }
  function Id(n) {
    if (Oc = -1, Nc = Ui = 0, Ct & 48)
      throw Error(c(327));
    var i = n.callbackNode;
    if (ko() && n.callbackNode !== i)
      return null;
    var u = Za(n, n === Wr ? xr : 0);
    if (u === 0)
      return null;
    var v = u, g = Ct;
    Ct |= 16;
    var S = pu();
    (Wr !== n || xr !== v) && (du(), pl(n, v));
    do
      try {
        sh();
        break;
      } catch (k) {
        Pc(n, k);
      }
    while (!0);
    if (sd(), cu.current = S, Ct = g, Yn !== null ? v = 0 : (Wr = null, xr = 0, v = vr), za & li)
      pl(n, 0);
    else if (v !== 0) {
      if (v === 2 && (Ct |= 64, n.hydrate && (n.hydrate = !1, pc(n.containerInfo)), u = Lu(n), u !== 0 && (v = Cs(n, u))), v === 1)
        throw i = Nr, pl(n, 0), vu(n, u), Ea(n, Er()), i;
      switch (n.finishedWork = n.current.alternate, n.finishedLanes = u, v) {
        case 0:
        case 1:
          throw Error(c(345));
        case 2:
          _o(n);
          break;
        case 3:
          if (vu(n, u), (u & 62914560) === u && (v = ms + 500 - Er(), 10 < v)) {
            if (Za(n, 0) !== 0)
              break;
            if (g = n.suspendedLanes, (g & u) !== u) {
              ca(), n.pingedLanes |= n.suspendedLanes & g;
              break;
            }
            n.timeoutHandle = Gl(_o.bind(null, n), v);
            break;
          }
          _o(n);
          break;
        case 4:
          if (vu(n, u), (u & 4186112) === u)
            break;
          for (v = n.eventTimes, g = -1; 0 < u; ) {
            var R = 31 - io(u);
            S = 1 << R, R = v[R], R > g && (g = R), u &= ~S;
          }
          if (u = g, u = Er() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * ps(u / 1960)) - u, 10 < u) {
            n.timeoutHandle = Gl(_o.bind(null, n), u);
            break;
          }
          _o(n);
          break;
        case 5:
          _o(n);
          break;
        default:
          throw Error(c(329));
      }
    }
    return Ea(n, Er()), n.callbackNode === i ? Id.bind(null, n) : null;
  }
  function vu(n, i) {
    for (i &= ~Ad, i &= ~li, n.suspendedLanes |= i, n.pingedLanes &= ~i, n = n.expirationTimes; 0 < i; ) {
      var u = 31 - io(i), v = 1 << u;
      n[u] = -1, i &= ~v;
    }
  }
  function Hd(n) {
    if (Ct & 48)
      throw Error(c(327));
    if (ko(), n === Wr && n.expiredLanes & xr) {
      var i = xr, u = Cs(n, i);
      za & li && (i = Za(n, i), u = Cs(n, i));
    } else
      i = Za(n, 0), u = Cs(n, i);
    if (n.tag !== 0 && u === 2 && (Ct |= 64, n.hydrate && (n.hydrate = !1, pc(n.containerInfo)), i = Lu(n), i !== 0 && (u = Cs(n, i))), u === 1)
      throw u = Nr, pl(n, 0), vu(n, i), Ea(n, Er()), u;
    return n.finishedWork = n.current.alternate, n.finishedLanes = i, _o(n), Ea(n, Er()), null;
  }
  function wy() {
    if ($i !== null) {
      var n = $i;
      $i = null, n.forEach(function(i) {
        i.expiredLanes |= 24 & i.pendingLanes, Ea(i, Er());
      });
    }
    lr();
  }
  function oh(n, i) {
    var u = Ct;
    Ct |= 1;
    try {
      return n(i);
    } finally {
      Ct = u, Ct === 0 && (du(), lr());
    }
  }
  function lh(n, i) {
    var u = Ct;
    Ct &= -2, Ct |= 8;
    try {
      return n(i);
    } finally {
      Ct = u, Ct === 0 && (du(), lr());
    }
  }
  function Lc(n, i) {
    vt(fu, oi), oi |= i, za |= i;
  }
  function $d() {
    oi = fu.current, Tt(fu);
  }
  function pl(n, i) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, Op(u)), Yn !== null)
      for (u = Yn.return; u !== null; ) {
        var v = u;
        switch (v.tag) {
          case 1:
            v = v.type.childContextTypes, v != null && ei();
            break;
          case 3:
            Jl(), Tt(Sr), Tt(Rn), So();
            break;
          case 5:
            hd(v);
            break;
          case 4:
            Jl();
            break;
          case 13:
            Tt(Hn);
            break;
          case 19:
            Tt(Hn);
            break;
          case 10:
            Cc(v);
            break;
          case 23:
          case 24:
            $d();
        }
        u = u.return;
      }
    Wr = n, Yn = Oo(n.current, null), xr = oi = za = i, vr = 0, Nr = null, Ad = li = fl = 0;
  }
  function Pc(n, i) {
    do {
      var u = Yn;
      try {
        if (sd(), tu.current = _c, ls) {
          for (var v = _n.memoizedState; v !== null; ) {
            var g = v.queue;
            g !== null && (g.pending = null), v = v.next;
          }
          ls = !1;
        }
        if (nu = 0, fr = cr = _n = null, Co = !1, cl.current = null, u === null || u.return === null) {
          vr = 1, Nr = i, Yn = null;
          break;
        }
        e: {
          var S = n, R = u.return, k = u, U = i;
          if (i = xr, k.flags |= 2048, k.firstEffect = k.lastEffect = null, U !== null && typeof U == "object" && typeof U.then == "function") {
            var ee = U;
            if (!(k.mode & 2)) {
              var Le = k.alternate;
              Le ? (k.updateQueue = Le.updateQueue, k.memoizedState = Le.memoizedState, k.lanes = Le.lanes) : (k.updateQueue = null, k.memoizedState = null);
            }
            var Et = (Hn.current & 1) !== 0, me = R;
            do {
              var Je;
              if (Je = me.tag === 13) {
                var bt = me.memoizedState;
                if (bt !== null)
                  Je = bt.dehydrated !== null;
                else {
                  var ft = me.memoizedProps;
                  Je = ft.fallback === void 0 ? !1 : ft.unstable_avoidThisFallback !== !0 ? !0 : !Et;
                }
              }
              if (Je) {
                var Q = me.updateQueue;
                if (Q === null) {
                  var F = /* @__PURE__ */ new Set();
                  F.add(ee), me.updateQueue = F;
                } else
                  Q.add(ee);
                if (!(me.mode & 2)) {
                  if (me.flags |= 64, k.flags |= 16384, k.flags &= -2981, k.tag === 1)
                    if (k.alternate === null)
                      k.tag = 17;
                    else {
                      var W = La(-1, 1);
                      W.tag = 2, Di(k, W);
                    }
                  k.lanes |= 1;
                  break e;
                }
                U = void 0, k = i;
                var le = S.pingCache;
                if (le === null ? (le = S.pingCache = new Qp(), U = /* @__PURE__ */ new Set(), le.set(ee, U)) : (U = le.get(ee), U === void 0 && (U = /* @__PURE__ */ new Set(), le.set(ee, U))), !U.has(k)) {
                  U.add(k);
                  var ce = Ry.bind(null, S, ee, k);
                  ee.then(ce, ce);
                }
                me.flags |= 4096, me.lanes = i;
                break e;
              }
              me = me.return;
            } while (me !== null);
            U = Error((He(k.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
          }
          vr !== 5 && (vr = 2), U = kd(U, k), me = R;
          do {
            switch (me.tag) {
              case 3:
                S = U, me.flags |= 4096, i &= -i, me.lanes |= i;
                var Rt = Xp(me, S, i);
                Up(me, Rt);
                break e;
              case 1:
                S = U;
                var je = me.type, wt = me.stateNode;
                if (!(me.flags & 64) && (typeof je.getDerivedStateFromError == "function" || wt !== null && typeof wt.componentDidCatch == "function" && (ui === null || !ui.has(wt)))) {
                  me.flags |= 4096, i &= -i, me.lanes |= i;
                  var Lt = Zp(me, S, i);
                  Up(me, Lt);
                  break e;
                }
            }
            me = me.return;
          } while (me !== null);
        }
        ch(u);
      } catch (_t) {
        i = _t, Yn === u && u !== null && (Yn = u = u.return);
        continue;
      }
      break;
    } while (!0);
  }
  function pu() {
    var n = cu.current;
    return cu.current = _c, n === null ? _c : n;
  }
  function Cs(n, i) {
    var u = Ct;
    Ct |= 16;
    var v = pu();
    Wr === n && xr === i || pl(n, i);
    do
      try {
        uh();
        break;
      } catch (g) {
        Pc(n, g);
      }
    while (!0);
    if (sd(), Ct = u, cu.current = v, Yn !== null)
      throw Error(c(261));
    return Wr = null, xr = 0, vr;
  }
  function uh() {
    for (; Yn !== null; )
      Ud(Yn);
  }
  function sh() {
    for (; Yn !== null && !vy(); )
      Ud(Yn);
  }
  function Ud(n) {
    var i = vh(n.alternate, n, oi);
    n.memoizedProps = n.pendingProps, i === null ? ch(n) : Yn = i, cl.current = null;
  }
  function ch(n) {
    var i = n;
    do {
      var u = i.alternate;
      if (n = i.return, i.flags & 2048) {
        if (u = Yp(i), u !== null) {
          u.flags &= 2047, Yn = u;
          return;
        }
        n !== null && (n.firstEffect = n.lastEffect = null, n.flags |= 2048);
      } else {
        if (u = by(u, i, oi), u !== null) {
          Yn = u;
          return;
        }
        if (u = i, u.tag !== 24 && u.tag !== 23 || u.memoizedState === null || oi & 1073741824 || !(u.mode & 4)) {
          for (var v = 0, g = u.child; g !== null; )
            v |= g.lanes | g.childLanes, g = g.sibling;
          u.childLanes = v;
        }
        n !== null && !(n.flags & 2048) && (n.firstEffect === null && (n.firstEffect = i.firstEffect), i.lastEffect !== null && (n.lastEffect !== null && (n.lastEffect.nextEffect = i.firstEffect), n.lastEffect = i.lastEffect), 1 < i.flags && (n.lastEffect !== null ? n.lastEffect.nextEffect = i : n.firstEffect = i, n.lastEffect = i));
      }
      if (i = i.sibling, i !== null) {
        Yn = i;
        return;
      }
      Yn = i = n;
    } while (i !== null);
    vr === 0 && (vr = 5);
  }
  function _o(n) {
    var i = Ql();
    return tl(99, xy.bind(null, n, i)), null;
  }
  function xy(n, i) {
    do
      ko();
    while (vl !== null);
    if (Ct & 48)
      throw Error(c(327));
    var u = n.finishedWork;
    if (u === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current)
      throw Error(c(177));
    n.callbackNode = null;
    var v = u.lanes | u.childLanes, g = v, S = n.pendingLanes & ~g;
    n.pendingLanes = g, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= g, n.mutableReadLanes &= g, n.entangledLanes &= g, g = n.entanglements;
    for (var R = n.eventTimes, k = n.expirationTimes; 0 < S; ) {
      var U = 31 - io(S), ee = 1 << U;
      g[U] = 0, R[U] = -1, k[U] = -1, S &= ~ee;
    }
    if ($i !== null && !(v & 24) && $i.has(n) && $i.delete(n), n === Wr && (Yn = Wr = null, xr = 0), 1 < u.flags ? u.lastEffect !== null ? (u.lastEffect.nextEffect = u, v = u.firstEffect) : v = u : v = u.firstEffect, v !== null) {
      if (g = Ct, Ct |= 32, cl.current = null, ed = zu, R = Bu(), Yo(R)) {
        if ("selectionStart" in R)
          k = { start: R.selectionStart, end: R.selectionEnd };
        else
          e:
            if (k = (k = R.ownerDocument) && k.defaultView || window, (ee = k.getSelection && k.getSelection()) && ee.rangeCount !== 0) {
              k = ee.anchorNode, S = ee.anchorOffset, U = ee.focusNode, ee = ee.focusOffset;
              try {
                k.nodeType, U.nodeType;
              } catch (_t) {
                k = null;
                break e;
              }
              var Le = 0, Et = -1, me = -1, Je = 0, bt = 0, ft = R, Q = null;
              t:
                for (; ; ) {
                  for (var F; ft !== k || S !== 0 && ft.nodeType !== 3 || (Et = Le + S), ft !== U || ee !== 0 && ft.nodeType !== 3 || (me = Le + ee), ft.nodeType === 3 && (Le += ft.nodeValue.length), (F = ft.firstChild) !== null; )
                    Q = ft, ft = F;
                  for (; ; ) {
                    if (ft === R)
                      break t;
                    if (Q === k && ++Je === S && (Et = Le), Q === U && ++bt === ee && (me = Le), (F = ft.nextSibling) !== null)
                      break;
                    ft = Q, Q = ft.parentNode;
                  }
                  ft = F;
                }
              k = Et === -1 || me === -1 ? null : { start: Et, end: me };
            } else
              k = null;
        k = k || { start: 0, end: 0 };
      } else
        k = null;
      td = { focusedElem: R, selectionRange: k }, zu = !1, Ss = null, Dc = !1, Ue = v;
      do
        try {
          Ty();
        } catch (_t) {
          if (Ue === null)
            throw Error(c(330));
          Mo(Ue, _t), Ue = Ue.nextEffect;
        }
      while (Ue !== null);
      Ss = null, Ue = v;
      do
        try {
          for (R = n; Ue !== null; ) {
            var W = Ue.flags;
            if (W & 16 && rt(Ue.stateNode, ""), W & 128) {
              var le = Ue.alternate;
              if (le !== null) {
                var ce = le.ref;
                ce !== null && (typeof ce == "function" ? ce(null) : ce.current = null);
              }
            }
            switch (W & 1038) {
              case 2:
                rh(Ue), Ue.flags &= -3;
                break;
              case 6:
                rh(Ue), Ue.flags &= -3, Dd(Ue.alternate, Ue);
                break;
              case 1024:
                Ue.flags &= -1025;
                break;
              case 1028:
                Ue.flags &= -1025, Dd(Ue.alternate, Ue);
                break;
              case 4:
                Dd(Ue.alternate, Ue);
                break;
              case 8:
                k = Ue, ah(R, k);
                var Rt = k.alternate;
                th(k), Rt !== null && th(Rt);
            }
            Ue = Ue.nextEffect;
          }
        } catch (_t) {
          if (Ue === null)
            throw Error(c(330));
          Mo(Ue, _t), Ue = Ue.nextEffect;
        }
      while (Ue !== null);
      if (ce = td, le = Bu(), W = ce.focusedElem, R = ce.selectionRange, le !== W && W && W.ownerDocument && Yf(W.ownerDocument.documentElement, W)) {
        for (R !== null && Yo(W) && (le = R.start, ce = R.end, ce === void 0 && (ce = le), "selectionStart" in W ? (W.selectionStart = le, W.selectionEnd = Math.min(ce, W.value.length)) : (ce = (le = W.ownerDocument || document) && le.defaultView || window, ce.getSelection && (ce = ce.getSelection(), k = W.textContent.length, Rt = Math.min(R.start, k), R = R.end === void 0 ? Rt : Math.min(R.end, k), !ce.extend && Rt > R && (k = R, R = Rt, Rt = k), k = Rp(W, Rt), S = Rp(W, R), k && S && (ce.rangeCount !== 1 || ce.anchorNode !== k.node || ce.anchorOffset !== k.offset || ce.focusNode !== S.node || ce.focusOffset !== S.offset) && (le = le.createRange(), le.setStart(k.node, k.offset), ce.removeAllRanges(), Rt > R ? (ce.addRange(le), ce.extend(S.node, S.offset)) : (le.setEnd(S.node, S.offset), ce.addRange(le)))))), le = [], ce = W; ce = ce.parentNode; )
          ce.nodeType === 1 && le.push({ element: ce, left: ce.scrollLeft, top: ce.scrollTop });
        for (typeof W.focus == "function" && W.focus(), W = 0; W < le.length; W++)
          ce = le[W], ce.element.scrollLeft = ce.left, ce.element.scrollTop = ce.top;
      }
      zu = !!ed, td = ed = null, n.current = u, Ue = v;
      do
        try {
          for (W = n; Ue !== null; ) {
            var je = Ue.flags;
            if (je & 36 && Od(W, Ue.alternate, Ue), je & 128) {
              le = void 0;
              var wt = Ue.ref;
              if (wt !== null) {
                var Lt = Ue.stateNode;
                switch (Ue.tag) {
                  case 5:
                    le = Lt;
                    break;
                  default:
                    le = Lt;
                }
                typeof wt == "function" ? wt(le) : wt.current = le;
              }
            }
            Ue = Ue.nextEffect;
          }
        } catch (_t) {
          if (Ue === null)
            throw Error(c(330));
          Mo(Ue, _t), Ue = Ue.nextEffect;
        }
      while (Ue !== null);
      Ue = null, Ip(), Ct = g;
    } else
      n.current = u;
    if (To)
      To = !1, vl = n, ys = i;
    else
      for (Ue = v; Ue !== null; )
        i = Ue.nextEffect, Ue.nextEffect = null, Ue.flags & 8 && (je = Ue, je.sibling = null, je.stateNode = null), Ue = i;
    if (v = n.pendingLanes, v === 0 && (ui = null), v === 1 ? n === Mc ? bs++ : (bs = 0, Mc = n) : bs = 0, u = u.stateNode, el && typeof el.onCommitFiberRoot == "function")
      try {
        el.onCommitFiberRoot(rd, u, void 0, (u.current.flags & 64) === 64);
      } catch (_t) {
      }
    if (Ea(n, Er()), gs)
      throw gs = !1, n = Ld, Ld = null, n;
    return Ct & 8 || lr(), null;
  }
  function Ty() {
    for (; Ue !== null; ) {
      var n = Ue.alternate;
      Dc || Ss === null || (Ue.flags & 8 ? Hr(Ue, Ss) && (Dc = !0) : Ue.tag === 13 && Ey(n, Ue) && Hr(Ue, Ss) && (Dc = !0));
      var i = Ue.flags;
      i & 256 && Cy(n, Ue), !(i & 512) || To || (To = !0, nl(97, function() {
        return ko(), null;
      })), Ue = Ue.nextEffect;
    }
  }
  function ko() {
    if (ys !== 90) {
      var n = 97 < ys ? 97 : ys;
      return ys = 90, tl(n, dh);
    }
    return !1;
  }
  function fh(n, i) {
    Pd.push(i, n), To || (To = !0, nl(97, function() {
      return ko(), null;
    }));
  }
  function jd(n, i) {
    zd.push(i, n), To || (To = !0, nl(97, function() {
      return ko(), null;
    }));
  }
  function dh() {
    if (vl === null)
      return !1;
    var n = vl;
    if (vl = null, Ct & 48)
      throw Error(c(331));
    var i = Ct;
    Ct |= 32;
    var u = zd;
    zd = [];
    for (var v = 0; v < u.length; v += 2) {
      var g = u[v], S = u[v + 1], R = g.destroy;
      if (g.destroy = void 0, typeof R == "function")
        try {
          R();
        } catch (U) {
          if (S === null)
            throw Error(c(330));
          Mo(S, U);
        }
    }
    for (u = Pd, Pd = [], v = 0; v < u.length; v += 2) {
      g = u[v], S = u[v + 1];
      try {
        var k = g.create;
        g.destroy = k();
      } catch (U) {
        if (S === null)
          throw Error(c(330));
        Mo(S, U);
      }
    }
    for (k = n.current.firstEffect; k !== null; )
      n = k.nextEffect, k.nextEffect = null, k.flags & 8 && (k.sibling = null, k.stateNode = null), k = n;
    return Ct = i, lr(), !0;
  }
  function hl(n, i, u) {
    i = kd(u, i), i = Xp(n, i, 1), Di(n, i), i = ca(), n = Ac(n, 1), n !== null && (Pu(n, 1, i), Ea(n, i));
  }
  function Mo(n, i) {
    if (n.tag === 3)
      hl(n, n, i);
    else
      for (var u = n.return; u !== null; ) {
        if (u.tag === 3) {
          hl(u, n, i);
          break;
        } else if (u.tag === 1) {
          var v = u.stateNode;
          if (typeof u.type.getDerivedStateFromError == "function" || typeof v.componentDidCatch == "function" && (ui === null || !ui.has(v))) {
            n = kd(i, n);
            var g = Zp(u, n, 1);
            if (Di(u, g), g = ca(), u = Ac(u, 1), u !== null)
              Pu(u, 1, g), Ea(u, g);
            else if (typeof v.componentDidCatch == "function" && (ui === null || !ui.has(v)))
              try {
                v.componentDidCatch(i, n);
              } catch (S) {
              }
            break;
          }
        }
        u = u.return;
      }
  }
  function Ry(n, i, u) {
    var v = n.pingCache;
    v !== null && v.delete(i), i = ca(), n.pingedLanes |= n.suspendedLanes & u, Wr === n && (xr & u) === u && (vr === 4 || vr === 3 && (xr & 62914560) === xr && 500 > Er() - ms ? pl(n, 0) : Ad |= u), Ea(n, i);
  }
  function _y(n, i) {
    var u = n.stateNode;
    u !== null && u.delete(i), i = 0, i === 0 && (i = n.mode, i & 2 ? i & 4 ? (Ui === 0 && (Ui = za), i = ao(62914560 & ~Ui), i === 0 && (i = 4194304)) : i = Ql() === 99 ? 1 : 2 : i = 1), u = ca(), n = Ac(n, i), n !== null && (Pu(n, i, u), Ea(n, u));
  }
  var vh;
  vh = function(n, i, u) {
    var v = i.lanes;
    if (n !== null)
      if (n.memoizedProps !== i.pendingProps || Sr.current)
        Ca = !0;
      else if (u & v)
        Ca = !!(n.flags & 16384);
      else {
        switch (Ca = !1, i.tag) {
          case 3:
            Kp(i), eu();
            break;
          case 5:
            jp(i);
            break;
          case 1:
            Cr(i.type) && ba(i);
            break;
          case 4:
            rs(i, i.stateNode.containerInfo);
            break;
          case 10:
            v = i.memoizedProps.value;
            var g = i.type._context;
            vt(go, g._currentValue), g._currentValue = v;
            break;
          case 13:
            if (i.memoizedState !== null)
              return u & i.child.childLanes ? wo(n, i, u) : (vt(Hn, Hn.current & 1), i = Hi(n, i, u), i !== null ? i.sibling : null);
            vt(Hn, Hn.current & 1);
            break;
          case 19:
            if (v = (u & i.childLanes) !== 0, n.flags & 64) {
              if (v)
                return yy(n, i, u);
              i.flags |= 64;
            }
            if (g = i.memoizedState, g !== null && (g.rendering = null, g.tail = null, g.lastEffect = null), vt(Hn, Hn.current), v)
              break;
            return null;
          case 23:
          case 24:
            return i.lanes = 0, lu(n, i, u);
        }
        return Hi(n, i, u);
      }
    else
      Ca = !1;
    switch (i.lanes = 0, i.tag) {
      case 2:
        if (v = i.type, n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2), n = i.pendingProps, g = nn(i, Rn.current), rl(i, u), g = gd(null, i, v, n, g, u), i.flags |= 1, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
          if (i.tag = 1, i.memoizedState = null, i.updateQueue = null, Cr(v)) {
            var S = !0;
            ba(i);
          } else
            S = !1;
          i.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, fd(i);
          var R = v.getDerivedStateFromProps;
          typeof R == "function" && Xu(i, v, R, n), g.updater = Xl, i.stateNode = g, g._reactInternals = i, xc(i, v, n, u), i = Rd(null, i, v, !0, S, u);
        } else
          i.tag = 0, Zr(null, i, g, u), i = i.child;
        return i;
      case 16:
        g = i.elementType;
        e: {
          switch (n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2), n = i.pendingProps, S = g._init, g = S(g._payload), i.type = g, S = i.tag = My(g), n = ur(g, n), S) {
            case 0:
              i = Td(null, i, g, n, u);
              break e;
            case 1:
              i = Wp(null, i, g, n, u);
              break e;
            case 11:
              i = wd(null, i, g, n, u);
              break e;
            case 14:
              i = xd(null, i, g, ur(g.type, n), v, u);
              break e;
          }
          throw Error(c(306, g, ""));
        }
        return i;
      case 0:
        return v = i.type, g = i.pendingProps, g = i.elementType === v ? g : ur(v, g), Td(n, i, v, g, u);
      case 1:
        return v = i.type, g = i.pendingProps, g = i.elementType === v ? g : ur(v, g), Wp(n, i, v, g, u);
      case 3:
        if (Kp(i), v = i.updateQueue, n === null || v === null)
          throw Error(c(282));
        if (v = i.pendingProps, g = i.memoizedState, g = g !== null ? g.element : null, $p(n, i), Ai(i, v, null, u), v = i.memoizedState.element, v === g)
          eu(), i = Hi(n, i, u);
        else {
          if (g = i.stateNode, (S = g.hydrate) && (Li = co(i.stateNode.containerInfo.firstChild), ai = i, S = ii = !0), S) {
            if (n = g.mutableSourceEagerHydrationData, n != null)
              for (g = 0; g < n.length; g += 2)
                S = n[g], S._workInProgressVersionPrimary = n[g + 1], ul.push(S);
            for (u = pd(i, null, v, u), i.child = u; u; )
              u.flags = u.flags & -3 | 1024, u = u.sibling;
          } else
            Zr(n, i, v, u), eu();
          i = i.child;
        }
        return i;
      case 5:
        return jp(i), n === null && bo(i), v = i.type, g = i.pendingProps, S = n !== null ? n.memoizedProps : null, R = g.children, Gu(v, g) ? R = null : S !== null && Gu(v, S) && (i.flags |= 16), Bp(n, i), Zr(n, i, R, u), i.child;
      case 6:
        return n === null && bo(i), null;
      case 13:
        return wo(n, i, u);
      case 4:
        return rs(i, i.stateNode.containerInfo), v = i.pendingProps, n === null ? i.child = es(i, null, v, u) : Zr(n, i, v, u), i.child;
      case 11:
        return v = i.type, g = i.pendingProps, g = i.elementType === v ? g : ur(v, g), wd(n, i, v, g, u);
      case 7:
        return Zr(n, i, i.pendingProps, u), i.child;
      case 8:
        return Zr(
          n,
          i,
          i.pendingProps.children,
          u
        ), i.child;
      case 12:
        return Zr(n, i, i.pendingProps.children, u), i.child;
      case 10:
        e: {
          v = i.type._context, g = i.pendingProps, R = i.memoizedProps, S = g.value;
          var k = i.type._context;
          if (vt(go, k._currentValue), k._currentValue = S, R !== null)
            if (k = R.value, S = ya(k, S) ? 0 : (typeof v._calculateChangedBits == "function" ? v._calculateChangedBits(k, S) : 1073741823) | 0, S === 0) {
              if (R.children === g.children && !Sr.current) {
                i = Hi(n, i, u);
                break e;
              }
            } else
              for (k = i.child, k !== null && (k.return = i); k !== null; ) {
                var U = k.dependencies;
                if (U !== null) {
                  R = k.child;
                  for (var ee = U.firstContext; ee !== null; ) {
                    if (ee.context === v && ee.observedBits & S) {
                      k.tag === 1 && (ee = La(-1, u & -u), ee.tag = 2, Di(k, ee)), k.lanes |= u, ee = k.alternate, ee !== null && (ee.lanes |= u), cd(k.return, u), U.lanes |= u;
                      break;
                    }
                    ee = ee.next;
                  }
                } else
                  R = k.tag === 10 && k.type === i.type ? null : k.child;
                if (R !== null)
                  R.return = k;
                else
                  for (R = k; R !== null; ) {
                    if (R === i) {
                      R = null;
                      break;
                    }
                    if (k = R.sibling, k !== null) {
                      k.return = R.return, R = k;
                      break;
                    }
                    R = R.return;
                  }
                k = R;
              }
          Zr(n, i, g.children, u), i = i.child;
        }
        return i;
      case 9:
        return g = i.type, S = i.pendingProps, v = S.children, rl(i, u), g = sa(
          g,
          S.unstable_observedBits
        ), v = v(g), i.flags |= 1, Zr(n, i, v, u), i.child;
      case 14:
        return g = i.type, S = ur(g, i.pendingProps), S = ur(g.type, S), xd(n, i, g, S, v, u);
      case 15:
        return Vp(n, i, i.type, i.pendingProps, v, u);
      case 17:
        return v = i.type, g = i.pendingProps, g = i.elementType === v ? g : ur(v, g), n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2), i.tag = 1, Cr(v) ? (n = !0, ba(i)) : n = !1, rl(i, u), al(i, v, g), xc(i, v, g, u), Rd(null, i, v, !0, n, u);
      case 19:
        return yy(n, i, u);
      case 23:
        return lu(n, i, u);
      case 24:
        return lu(n, i, u);
    }
    throw Error(c(156, i.tag));
  };
  function ky(n, i, u, v) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = v, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function wa(n, i, u, v) {
    return new ky(n, i, u, v);
  }
  function zc(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function My(n) {
    if (typeof n == "function")
      return zc(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === te)
        return 11;
      if (n === Ce)
        return 14;
    }
    return 2;
  }
  function Oo(n, i) {
    var u = n.alternate;
    return u === null ? (u = wa(n.tag, i, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = i, u.type = n.type, u.flags = 0, u.nextEffect = null, u.firstEffect = null, u.lastEffect = null), u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, i = n.dependencies, u.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function Es(n, i, u, v, g, S) {
    var R = 2;
    if (v = n, typeof n == "function")
      zc(n) && (R = 1);
    else if (typeof n == "string")
      R = 5;
    else
      e:
        switch (n) {
          case ne:
            return ci(u.children, g, S, i);
          case ze:
            R = 8, g |= 16;
            break;
          case oe:
            R = 8, g |= 1;
            break;
          case re:
            return n = wa(12, u, i, g | 8), n.elementType = re, n.type = re, n.lanes = S, n;
          case se:
            return n = wa(13, u, i, g), n.type = se, n.elementType = se, n.lanes = S, n;
          case de:
            return n = wa(19, u, i, g), n.elementType = de, n.lanes = S, n;
          case ie:
            return ml(u, g, S, i);
          case he:
            return n = wa(24, u, i, g), n.elementType = he, n.lanes = S, n;
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case ge:
                  R = 10;
                  break e;
                case pe:
                  R = 9;
                  break e;
                case te:
                  R = 11;
                  break e;
                case Ce:
                  R = 14;
                  break e;
                case ke:
                  R = 16, v = null;
                  break e;
                case we:
                  R = 22;
                  break e;
              }
            throw Error(c(130, n == null ? n : typeof n, ""));
        }
    return i = wa(R, u, i, g), i.elementType = n, i.type = v, i.lanes = S, i;
  }
  function ci(n, i, u, v) {
    return n = wa(7, n, v, i), n.lanes = u, n;
  }
  function ml(n, i, u, v) {
    return n = wa(23, n, v, i), n.elementType = ie, n.lanes = u, n;
  }
  function Fd(n, i, u) {
    return n = wa(6, n, null, i), n.lanes = u, n;
  }
  function Vd(n, i, u) {
    return i = wa(4, n.children !== null ? n.children : [], n.key, i), i.lanes = u, i.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, i;
  }
  function Oy(n, i, u) {
    this.tag = i, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = u, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = tc(0), this.expirationTimes = tc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tc(0), this.mutableSourceEagerHydrationData = null;
  }
  function Ic(n, i, u) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: q, key: v == null ? null : "" + v, children: n, containerInfo: i, implementation: u };
  }
  function Hc(n, i, u, v) {
    var g = i.current, S = ca(), R = si(g);
    e:
      if (u) {
        u = u._reactInternals;
        t: {
          if (xn(u) !== u || u.tag !== 1)
            throw Error(c(170));
          var k = u;
          do {
            switch (k.tag) {
              case 3:
                k = k.stateNode.context;
                break t;
              case 1:
                if (Cr(k.type)) {
                  k = k.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            k = k.return;
          } while (k !== null);
          throw Error(c(171));
        }
        if (u.tag === 1) {
          var U = u.type;
          if (Cr(U)) {
            u = Yl(u, U, k);
            break e;
          }
        }
        u = k;
      } else
        u = vo;
    return i.context === null ? i.context = u : i.pendingContext = u, i = La(S, R), i.payload = { element: n }, v = v === void 0 ? null : v, v !== null && (i.callback = v), Di(g, i), Ro(g, R, S), R;
  }
  function $c(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function ph(n, i) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < i ? u : i;
    }
  }
  function Uc(n, i) {
    ph(n, i), (n = n.alternate) && ph(n, i);
  }
  function hh() {
    return null;
  }
  function Bd(n, i, u) {
    var v = u != null && u.hydrationOptions != null && u.hydrationOptions.mutableSources || null;
    if (u = new Oy(n, i, u != null && u.hydrate === !0), i = wa(3, null, null, i === 2 ? 7 : i === 1 ? 3 : 0), u.current = i, i.stateNode = u, fd(i), n[jr] = u.current, Jf(n.nodeType === 8 ? n.parentNode : n), v)
      for (n = 0; n < v.length; n++) {
        i = v[n];
        var g = i._getVersion;
        g = g(i._source), u.mutableSourceEagerHydrationData == null ? u.mutableSourceEagerHydrationData = [i, g] : u.mutableSourceEagerHydrationData.push(i, g);
      }
    this._internalRoot = u;
  }
  Bd.prototype.render = function(n) {
    Hc(n, this._internalRoot, null, null);
  }, Bd.prototype.unmount = function() {
    var n = this._internalRoot, i = n.containerInfo;
    Hc(null, n, null, function() {
      i[jr] = null;
    });
  };
  function ws(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Ny(n, i) {
    if (i || (i = n ? n.nodeType === 9 ? n.documentElement : n.firstChild : null, i = !(!i || i.nodeType !== 1 || !i.hasAttribute("data-reactroot"))), !i)
      for (var u; u = n.lastChild; )
        n.removeChild(u);
    return new Bd(n, 0, i ? { hydrate: !0 } : void 0);
  }
  function jc(n, i, u, v, g) {
    var S = u._reactRootContainer;
    if (S) {
      var R = S._internalRoot;
      if (typeof g == "function") {
        var k = g;
        g = function() {
          var ee = $c(R);
          k.call(ee);
        };
      }
      Hc(i, R, n, g);
    } else {
      if (S = u._reactRootContainer = Ny(u, v), R = S._internalRoot, typeof g == "function") {
        var U = g;
        g = function() {
          var ee = $c(R);
          U.call(ee);
        };
      }
      lh(function() {
        Hc(i, R, n, g);
      });
    }
    return $c(R);
  }
  Xa = function(n) {
    if (n.tag === 13) {
      var i = ca();
      Ro(n, 4, i), Uc(n, 4);
    }
  }, gr = function(n) {
    if (n.tag === 13) {
      var i = ca();
      Ro(n, 67108864, i), Uc(n, 67108864);
    }
  }, Qr = function(n) {
    if (n.tag === 13) {
      var i = ca(), u = si(n);
      Ro(n, u, i), Uc(n, u);
    }
  }, Mr = function(n, i) {
    return i();
  }, $e = function(n, i, u) {
    switch (i) {
      case "input":
        if (gt(n, u), i = u.name, u.type === "radio" && i != null) {
          for (u = n; u.parentNode; )
            u = u.parentNode;
          for (u = u.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), i = 0; i < u.length; i++) {
            var v = u[i];
            if (v !== n && v.form === n.form) {
              var g = Oi(v);
              if (!g)
                throw Error(c(90));
              Dt(v), gt(v, g);
            }
          }
        }
        break;
      case "textarea":
        qt(n, u);
        break;
      case "select":
        i = u.value, i != null && ut(n, !!u.multiple, i, !1);
    }
  }, An = oh, gn = function(n, i, u, v, g) {
    var S = Ct;
    Ct |= 4;
    try {
      return tl(98, n.bind(null, i, u, v, g));
    } finally {
      Ct = S, Ct === 0 && (du(), lr());
    }
  }, oa = function() {
    !(Ct & 49) && (wy(), ko());
  }, qr = function(n, i) {
    var u = Ct;
    Ct |= 2;
    try {
      return n(i);
    } finally {
      Ct = u, Ct === 0 && (du(), lr());
    }
  };
  function mh(n, i) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ws(i))
      throw Error(c(200));
    return Ic(n, i, null, u);
  }
  var Dy = { Events: [ua, Fr, Oi, At, mn, ko, { current: !1 }] }, xs = { findFiberByHostInstance: Jo, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, Ay = { bundleType: xs.bundleType, version: xs.version, rendererPackageName: xs.rendererPackageName, rendererConfig: xs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: I.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Qa(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: xs.findFiberByHostInstance || hh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var Fc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fc.isDisabled && Fc.supportsFiber)
      try {
        rd = Fc.inject(Ay), el = Fc;
      } catch (n) {
      }
  }
  return Fa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dy, Fa.createPortal = mh, Fa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var i = n._reactInternals;
    if (i === void 0)
      throw typeof n.render == "function" ? Error(c(188)) : Error(c(268, Object.keys(n)));
    return n = Qa(i), n = n === null ? null : n.stateNode, n;
  }, Fa.flushSync = function(n, i) {
    var u = Ct;
    if (u & 48)
      return n(i);
    Ct |= 1;
    try {
      if (n)
        return tl(99, n.bind(null, i));
    } finally {
      Ct = u, lr();
    }
  }, Fa.hydrate = function(n, i, u) {
    if (!ws(i))
      throw Error(c(200));
    return jc(null, n, i, !0, u);
  }, Fa.render = function(n, i, u) {
    if (!ws(i))
      throw Error(c(200));
    return jc(null, n, i, !1, u);
  }, Fa.unmountComponentAtNode = function(n) {
    if (!ws(n))
      throw Error(c(40));
    return n._reactRootContainer ? (lh(function() {
      jc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[jr] = null;
      });
    }), !0) : !1;
  }, Fa.unstable_batchedUpdates = oh, Fa.unstable_createPortal = function(n, i) {
    return mh(n, i, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  }, Fa.unstable_renderSubtreeIntoContainer = function(n, i, u, v) {
    if (!ws(u))
      throw Error(c(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(c(38));
    return jc(n, i, u, !1, v);
  }, Fa.version = "17.0.2", Fa;
}
var Va = {}, Km = { exports: {} }, Ki = {};
/** @license React v0.20.2
 * scheduler-tracing.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tx;
function zA() {
  if (Tx)
    return Ki;
  Tx = 1;
  var r = 0;
  return Ki.__interactionsRef = null, Ki.__subscriberRef = null, Ki.unstable_clear = function(o) {
    return o();
  }, Ki.unstable_getCurrent = function() {
    return null;
  }, Ki.unstable_getThreadID = function() {
    return ++r;
  }, Ki.unstable_subscribe = function() {
  }, Ki.unstable_trace = function(o, s, c) {
    return c();
  }, Ki.unstable_unsubscribe = function() {
  }, Ki.unstable_wrap = function(o) {
    return o;
  }, Ki;
}
var oS = {};
/** @license React v0.20.2
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rx;
function IA() {
  return Rx || (Rx = 1, function(r) {
    process.env.NODE_ENV !== "production" && function() {
      var o = 0, s = 0, c = 0;
      r.__interactionsRef = null, r.__subscriberRef = null, r.__interactionsRef = {
        current: /* @__PURE__ */ new Set()
      }, r.__subscriberRef = {
        current: null
      };
      function d($) {
        var z = r.__interactionsRef.current;
        r.__interactionsRef.current = /* @__PURE__ */ new Set();
        try {
          return $();
        } finally {
          r.__interactionsRef.current = z;
        }
      }
      function m() {
        return r.__interactionsRef.current;
      }
      function h() {
        return ++c;
      }
      function C($, z, P) {
        var I = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : o, Y = {
          __count: 1,
          id: s++,
          name: $,
          timestamp: z
        }, q = r.__interactionsRef.current, ne = new Set(q);
        ne.add(Y), r.__interactionsRef.current = ne;
        var oe = r.__subscriberRef.current, re;
        try {
          oe !== null && oe.onInteractionTraced(Y);
        } finally {
          try {
            oe !== null && oe.onWorkStarted(ne, I);
          } finally {
            try {
              re = P();
            } finally {
              r.__interactionsRef.current = q;
              try {
                oe !== null && oe.onWorkStopped(ne, I);
              } finally {
                Y.__count--, oe !== null && Y.__count === 0 && oe.onInteractionScheduledWorkCompleted(Y);
              }
            }
          }
        }
        return re;
      }
      function x($) {
        var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o, P = r.__interactionsRef.current, I = r.__subscriberRef.current;
        I !== null && I.onWorkScheduled(P, z), P.forEach(function(ne) {
          ne.__count++;
        });
        var Y = !1;
        function q() {
          var ne = r.__interactionsRef.current;
          r.__interactionsRef.current = P, I = r.__subscriberRef.current;
          try {
            var oe;
            try {
              I !== null && I.onWorkStarted(P, z);
            } finally {
              try {
                oe = $.apply(void 0, arguments);
              } finally {
                r.__interactionsRef.current = ne, I !== null && I.onWorkStopped(P, z);
              }
            }
            return oe;
          } finally {
            Y || (Y = !0, P.forEach(function(re) {
              re.__count--, I !== null && re.__count === 0 && I.onInteractionScheduledWorkCompleted(re);
            }));
          }
        }
        return q.cancel = function() {
          I = r.__subscriberRef.current;
          try {
            I !== null && I.onWorkCanceled(P, z);
          } finally {
            P.forEach(function(oe) {
              oe.__count--, I && oe.__count === 0 && I.onInteractionScheduledWorkCompleted(oe);
            });
          }
        }, q;
      }
      var E = null;
      E = /* @__PURE__ */ new Set();
      function M($) {
        E.add($), E.size === 1 && (r.__subscriberRef.current = {
          onInteractionScheduledWorkCompleted: L,
          onInteractionTraced: N,
          onWorkCanceled: G,
          onWorkScheduled: H,
          onWorkStarted: V,
          onWorkStopped: A
        });
      }
      function _($) {
        E.delete($), E.size === 0 && (r.__subscriberRef.current = null);
      }
      function N($) {
        var z = !1, P = null;
        if (E.forEach(function(I) {
          try {
            I.onInteractionTraced($);
          } catch (Y) {
            z || (z = !0, P = Y);
          }
        }), z)
          throw P;
      }
      function L($) {
        var z = !1, P = null;
        if (E.forEach(function(I) {
          try {
            I.onInteractionScheduledWorkCompleted($);
          } catch (Y) {
            z || (z = !0, P = Y);
          }
        }), z)
          throw P;
      }
      function H($, z) {
        var P = !1, I = null;
        if (E.forEach(function(Y) {
          try {
            Y.onWorkScheduled($, z);
          } catch (q) {
            P || (P = !0, I = q);
          }
        }), P)
          throw I;
      }
      function V($, z) {
        var P = !1, I = null;
        if (E.forEach(function(Y) {
          try {
            Y.onWorkStarted($, z);
          } catch (q) {
            P || (P = !0, I = q);
          }
        }), P)
          throw I;
      }
      function A($, z) {
        var P = !1, I = null;
        if (E.forEach(function(Y) {
          try {
            Y.onWorkStopped($, z);
          } catch (q) {
            P || (P = !0, I = q);
          }
        }), P)
          throw I;
      }
      function G($, z) {
        var P = !1, I = null;
        if (E.forEach(function(Y) {
          try {
            Y.onWorkCanceled($, z);
          } catch (q) {
            P || (P = !0, I = q);
          }
        }), P)
          throw I;
      }
      r.unstable_clear = d, r.unstable_getCurrent = m, r.unstable_getThreadID = h, r.unstable_subscribe = M, r.unstable_trace = C, r.unstable_unsubscribe = _, r.unstable_wrap = x;
    }();
  }(oS)), oS;
}
var _x;
function HA() {
  return _x || (_x = 1, process.env.NODE_ENV === "production" ? Km.exports = zA() : Km.exports = IA()), Km.exports;
}
/** @license React v17.0.2
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kx;
function $A() {
  return kx || (kx = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ma, o = lR(), s = uR(), c = HA(), d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        C("warn", e, a);
      }
    }
    function h(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        C("error", e, a);
      }
    }
    function C(e, t, a) {
      {
        var l = d.ReactDebugCurrentFrame, f = l.getStackAddendum();
        f !== "" && (t += "%s", a = a.concat([f]));
        var p = a.map(function(y) {
          return "" + y;
        });
        p.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, p);
      }
    }
    if (!r)
      throw Error("ReactDOM was loaded before React. Make sure you load the React package before loading ReactDOM.");
    var x = 0, E = 1, M = 2, _ = 3, N = 4, L = 5, H = 6, V = 7, A = 8, G = 9, $ = 10, z = 11, P = 12, I = 13, Y = 14, q = 15, ne = 16, oe = 17, re = 18, ge = 19, pe = 20, te = 21, se = 22, de = 23, Ce = 24, ke = !0, we = !1, Ae = !1, ze = !1, ie = /* @__PURE__ */ new Set(), he = {}, Se = {};
    function Ie(e, t) {
      Ke(e, t), Ke(e + "Capture", t);
    }
    function Ke(e, t) {
      he[e] && h("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), he[e] = t;
      {
        var a = e.toLowerCase();
        Se[a] = e, e === "onDoubleClick" && (Se.ondblclick = e);
      }
      for (var l = 0; l < t.length; l++)
        ie.add(t[l]);
    }
    var Xe = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined", it = 0, Be = 1, nt = 2, Nt = 3, He = 4, et = 5, Bt = 6, Ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", mt = Ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Dt = "data-reactroot", It = new RegExp("^[" + Ee + "][" + mt + "]*$"), $t = Object.prototype.hasOwnProperty, Ze = {}, kt = {};
    function gt(e) {
      return $t.call(kt, e) ? !0 : $t.call(Ze, e) ? !1 : It.test(e) ? (kt[e] = !0, !0) : (Ze[e] = !0, h("Invalid attribute name: `%s`", e), !1);
    }
    function Zt(e, t, a) {
      return t !== null ? t.type === it : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function ot(e, t, a, l) {
      if (a !== null && a.type === it)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (l)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var f = e.toLowerCase().slice(0, 5);
          return f !== "data-" && f !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Wt(e, t, a, l) {
      if (t === null || typeof t == "undefined" || ot(e, t, a, l))
        return !0;
      if (l)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Nt:
            return !t;
          case He:
            return t === !1;
          case et:
            return isNaN(t);
          case Bt:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Qt(e) {
      return Gt.hasOwnProperty(e) ? Gt[e] : null;
    }
    function ut(e, t, a, l, f, p, y) {
      this.acceptsBooleans = t === nt || t === Nt || t === He, this.attributeName = l, this.attributeNamespace = f, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = y;
    }
    var Gt = {}, Wn = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Wn.forEach(function(e) {
      Gt[e] = new ut(
        e,
        it,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Gt[t] = new ut(
        t,
        Be,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Gt[e] = new ut(
        e,
        nt,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Gt[e] = new ut(
        e,
        nt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Gt[e] = new ut(
        e,
        Nt,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Gt[e] = new ut(
        e,
        Nt,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Gt[e] = new ut(
        e,
        He,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Gt[e] = new ut(
        e,
        Bt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Gt[e] = new ut(
        e,
        et,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var qt = /[\-\:]([a-z])/g, en = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(qt, en);
      Gt[t] = new ut(
        t,
        Be,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(qt, en);
      Gt[t] = new ut(
        t,
        Be,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(qt, en);
      Gt[t] = new ut(
        t,
        Be,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Gt[e] = new ut(
        e,
        Be,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ye = "xlinkHref";
    Gt[ye] = new ut(
      "xlinkHref",
      Be,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Gt[e] = new ut(
        e,
        Be,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var Oe = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, We = !1;
    function xt(e) {
      !We && Oe.test(e) && (We = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Mt(e, t, a, l) {
      if (l.mustUseProperty) {
        var f = l.propertyName;
        return e[f];
      } else {
        l.sanitizeURL && xt("" + a);
        var p = l.attributeName, y = null;
        if (l.type === He) {
          if (e.hasAttribute(p)) {
            var b = e.getAttribute(p);
            return b === "" ? !0 : Wt(t, a, l, !1) ? b : b === "" + a ? a : b;
          }
        } else if (e.hasAttribute(p)) {
          if (Wt(t, a, l, !1))
            return e.getAttribute(p);
          if (l.type === Nt)
            return a;
          y = e.getAttribute(p);
        }
        return Wt(t, a, l, !1) ? y === null ? a : y : y === "" + a ? a : y;
      }
    }
    function rt(e, t, a) {
      {
        if (!gt(t))
          return;
        if (OM(a))
          return a;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return l === "" + a ? a : l;
      }
    }
    function st(e, t, a, l) {
      var f = Qt(t);
      if (!Zt(t, f, l)) {
        if (Wt(t, a, f, l) && (a = null), l || f === null) {
          if (gt(t)) {
            var p = t;
            a === null ? e.removeAttribute(p) : e.setAttribute(p, "" + a);
          }
          return;
        }
        var y = f.mustUseProperty;
        if (y) {
          var b = f.propertyName;
          if (a === null) {
            var w = f.type;
            e[b] = w === Nt ? !1 : "";
          } else
            e[b] = a;
          return;
        }
        var O = f.attributeName, D = f.attributeNamespace;
        if (a === null)
          e.removeAttribute(O);
        else {
          var X = f.type, j;
          X === Nt || X === He && a === !0 ? j = "" : (j = "" + a, f.sanitizeURL && xt(j.toString())), D ? e.setAttributeNS(D, O, j) : e.setAttribute(O, j);
        }
      }
    }
    var on = 60103, Ot = 60106, Ut = 60107, ir = 60108, Vt = 60114, dn = 60109, jt = 60110, $e = 60112, St = 60113, Me = 60120, Ge = 60115, At = 60116, mn = 60121, An = 60119, gn = 60128, oa = 60129, qr = 60130, Ln = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var Kt = Symbol.for;
      on = Kt("react.element"), Ot = Kt("react.portal"), Ut = Kt("react.fragment"), ir = Kt("react.strict_mode"), Vt = Kt("react.profiler"), dn = Kt("react.provider"), jt = Kt("react.context"), $e = Kt("react.forward_ref"), St = Kt("react.suspense"), Me = Kt("react.suspense_list"), Ge = Kt("react.memo"), At = Kt("react.lazy"), mn = Kt("react.block"), Kt("react.server.block"), Kt("react.fundamental"), An = Kt("react.scope"), gn = Kt("react.opaque.id"), oa = Kt("react.debug_trace_mode"), qr = Kt("react.offscreen"), Ln = Kt("react.legacy_hidden");
    }
    var Vn = typeof Symbol == "function" && Symbol.iterator, Yr = "@@iterator";
    function ln(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Vn && e[Vn] || e[Yr];
      return typeof t == "function" ? t : null;
    }
    var Jn = 0, Tr, qa, Lr, Pr, Rr, Ya, Pn;
    function Ei() {
    }
    Ei.__reactDisabledLog = !0;
    function _r() {
      {
        if (Jn === 0) {
          Tr = console.log, qa = console.info, Lr = console.warn, Pr = console.error, Rr = console.group, Ya = console.groupCollapsed, Pn = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ei,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Jn++;
      }
    }
    function xn() {
      {
        if (Jn--, Jn === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: o({}, e, {
              value: Tr
            }),
            info: o({}, e, {
              value: qa
            }),
            warn: o({}, e, {
              value: Lr
            }),
            error: o({}, e, {
              value: Pr
            }),
            group: o({}, e, {
              value: Rr
            }),
            groupCollapsed: o({}, e, {
              value: Ya
            }),
            groupEnd: o({}, e, {
              value: Pn
            })
          });
        }
        Jn < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var zr = d.ReactCurrentDispatcher, kr;
    function Ir(e, t, a) {
      {
        if (kr === void 0)
          try {
            throw Error();
          } catch (f) {
            var l = f.stack.trim().match(/\n( *(at )?)/);
            kr = l && l[1] || "";
          }
        return `
` + kr + e;
      }
    }
    var Qa = !1, Hr;
    {
      var Xa = typeof WeakMap == "function" ? WeakMap : Map;
      Hr = new Xa();
    }
    function gr(e, t) {
      if (!e || Qa)
        return "";
      {
        var a = Hr.get(e);
        if (a !== void 0)
          return a;
      }
      var l;
      Qa = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = zr.current, zr.current = null, _r();
      try {
        if (t) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (fe) {
              l = fe;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (fe) {
              l = fe;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (fe) {
            l = fe;
          }
          e();
        }
      } catch (fe) {
        if (fe && l && typeof fe.stack == "string") {
          for (var b = fe.stack.split(`
`), w = l.stack.split(`
`), O = b.length - 1, D = w.length - 1; O >= 1 && D >= 0 && b[O] !== w[D]; )
            D--;
          for (; O >= 1 && D >= 0; O--, D--)
            if (b[O] !== w[D]) {
              if (O !== 1 || D !== 1)
                do
                  if (O--, D--, D < 0 || b[O] !== w[D]) {
                    var X = `
` + b[O].replace(" at new ", " at ");
                    return typeof e == "function" && Hr.set(e, X), X;
                  }
                while (O >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        Qa = !1, zr.current = p, xn(), Error.prepareStackTrace = f;
      }
      var j = e ? e.displayName || e.name : "", J = j ? Ir(j) : "";
      return typeof e == "function" && Hr.set(e, J), J;
    }
    function Qr(e, t, a) {
      return gr(e, !0);
    }
    function Mr(e, t, a) {
      return gr(e, !1);
    }
    function ha(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function zn(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return gr(e, ha(e));
      if (typeof e == "string")
        return Ir(e);
      switch (e) {
        case St:
          return Ir("Suspense");
        case Me:
          return Ir("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $e:
            return Mr(e.render);
          case Ge:
            return zn(e.type, t, a);
          case mn:
            return Mr(e._render);
          case At: {
            var l = e, f = l._payload, p = l._init;
            try {
              return zn(p(f), t, a);
            } catch (y) {
            }
          }
        }
      return "";
    }
    function Kn(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case L:
          return Ir(e.type);
        case ne:
          return Ir("Lazy");
        case I:
          return Ir("Suspense");
        case ge:
          return Ir("SuspenseList");
        case x:
        case M:
        case q:
          return Mr(e.type);
        case z:
          return Mr(e.type.render);
        case se:
          return Mr(e.type._render);
        case E:
          return Qr(e.type);
        default:
          return "";
      }
    }
    function Or(e) {
      try {
        var t = "", a = e;
        do
          t += Kn(a), a = a.return;
        while (a);
        return t;
      } catch (l) {
        return `
Error generating stack: ` + l.message + `
` + l.stack;
      }
    }
    function or(e, t, a) {
      var l = t.displayName || t.name || "";
      return e.displayName || (l !== "" ? a + "(" + l + ")" : a);
    }
    function yr(e) {
      return e.displayName || "Context";
    }
    function Re(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ut:
          return "Fragment";
        case Ot:
          return "Portal";
        case Vt:
          return "Profiler";
        case ir:
          return "StrictMode";
        case St:
          return "Suspense";
        case Me:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case jt:
            var t = e;
            return yr(t) + ".Consumer";
          case dn:
            var a = e;
            return yr(a._context) + ".Provider";
          case $e:
            return or(e, e.render, "ForwardRef");
          case Ge:
            return Re(e.type);
          case mn:
            return Re(e._render);
          case At: {
            var l = e, f = l._payload, p = l._init;
            try {
              return Re(p(f));
            } catch (y) {
              return null;
            }
          }
        }
      return null;
    }
    var Xt = d.ReactDebugCurrentFrame, dt = null, Ht = !1;
    function Tn() {
      {
        if (dt === null)
          return null;
        var e = dt._debugOwner;
        if (e !== null && typeof e != "undefined")
          return Re(e.type);
      }
      return null;
    }
    function On() {
      return dt === null ? "" : Or(dt);
    }
    function Nn() {
      Xt.getCurrentStack = null, dt = null, Ht = !1;
    }
    function vn(e) {
      Xt.getCurrentStack = On, dt = e, Ht = !1;
    }
    function er(e) {
      Ht = e;
    }
    function wi() {
      return Ht;
    }
    function Gn(e) {
      return "" + e;
    }
    function In(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "object":
        case "string":
        case "undefined":
          return e;
        default:
          return "";
      }
    }
    var tr = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function la(e, t) {
      tr[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function br(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ma(e) {
      return e._valueTracker;
    }
    function xi(e) {
      e._valueTracker = null;
    }
    function Oa(e) {
      var t = "";
      return e && (br(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function eo(e) {
      var t = br(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), l = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a == "undefined" || typeof a.get != "function" || typeof a.set != "function")) {
        var f = a.get, p = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return f.call(this);
          },
          set: function(b) {
            l = "" + b, p.call(this, b);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var y = {
          getValue: function() {
            return l;
          },
          setValue: function(b) {
            l = "" + b;
          },
          stopTracking: function() {
            xi(e), delete e[t];
          }
        };
        return y;
      }
    }
    function Na(e) {
      ma(e) || (e._valueTracker = eo(e));
    }
    function to(e) {
      if (!e)
        return !1;
      var t = ma(e);
      if (!t)
        return !0;
      var a = t.getValue(), l = Oa(e);
      return l !== a ? (t.setValue(l), !0) : !1;
    }
    function Ti(e) {
      if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined")
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    var Ko = !1, no = !1, zl = !1, Ve = !1;
    function yt(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function ct(e, t) {
      var a = e, l = t.checked, f = o({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: l != null ? l : a._wrapperState.initialChecked
      });
      return f;
    }
    function pn(e, t) {
      la("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !no && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Tn() || "A component", t.type), no = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ko && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Tn() || "A component", t.type), Ko = !0);
      var a = e, l = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: In(t.value != null ? t.value : l),
        controlled: yt(t)
      };
    }
    function Cn(e, t) {
      var a = e, l = t.checked;
      l != null && st(a, "checked", l, !1);
    }
    function ro(e, t) {
      var a = e;
      {
        var l = yt(t);
        !a._wrapperState.controlled && l && !Ve && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Ve = !0), a._wrapperState.controlled && !l && !zl && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), zl = !0);
      }
      Cn(e, t);
      var f = In(t.value), p = t.type;
      if (f != null)
        p === "number" ? (f === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != f) && (a.value = Gn(f)) : a.value !== Gn(f) && (a.value = Gn(f));
      else if (p === "submit" || p === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ao(a, t.type, f) : t.hasOwnProperty("defaultValue") && ao(a, t.type, In(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Za(e, t, a) {
      var l = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var f = t.type, p = f === "submit" || f === "reset";
        if (p && (t.value === void 0 || t.value === null))
          return;
        var y = Gn(l._wrapperState.initialValue);
        a || y !== l.value && (l.value = y), l.defaultValue = y;
      }
      var b = l.name;
      b !== "" && (l.name = ""), l.defaultChecked = !l.defaultChecked, l.defaultChecked = !!l._wrapperState.initialChecked, b !== "" && (l.name = b);
    }
    function Lu(e, t) {
      var a = e;
      ro(a, t), Ri(a, t);
    }
    function Ri(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var l = e; l.parentNode; )
          l = l.parentNode;
        for (var f = l.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), p = 0; p < f.length; p++) {
          var y = f[p];
          if (!(y === e || y.form !== e.form)) {
            var b = kh(y);
            if (!b)
              throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            to(y), ro(y, b);
          }
        }
      }
    }
    function ao(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ti(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Gn(e._wrapperState.initialValue) : e.defaultValue !== Gn(a) && (e.defaultValue = Gn(a)));
    }
    var tc = !1, Pu = !1;
    function io(e) {
      var t = "";
      return r.Children.forEach(e, function(a) {
        a != null && (t += a);
      }), t;
    }
    function ap(e, t) {
      typeof t.children == "object" && t.children !== null && r.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || typeof a.type == "string" && (Pu || (Pu = !0, h("Only strings and numbers are supported as <option> children."))));
      }), t.selected != null && !tc && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), tc = !0);
    }
    function Yg(e, t) {
      t.value != null && e.setAttribute("value", Gn(In(t.value)));
    }
    function Pf(e, t) {
      var a = o({
        children: void 0
      }, t), l = io(t.children);
      return l && (a.children = l), a;
    }
    var zf;
    zf = !1;
    function ip() {
      var e = Tn();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var zu = ["value", "defaultValue"];
    function Qg(e) {
      {
        la("select", e);
        for (var t = 0; t < zu.length; t++) {
          var a = zu[t];
          if (e[a] != null) {
            var l = Array.isArray(e[a]);
            e.multiple && !l ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, ip()) : !e.multiple && l && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, ip());
          }
        }
      }
    }
    function Il(e, t, a, l) {
      var f = e.options;
      if (t) {
        for (var p = a, y = {}, b = 0; b < p.length; b++)
          y["$" + p[b]] = !0;
        for (var w = 0; w < f.length; w++) {
          var O = y.hasOwnProperty("$" + f[w].value);
          f[w].selected !== O && (f[w].selected = O), O && l && (f[w].defaultSelected = !0);
        }
      } else {
        for (var D = Gn(In(a)), X = null, j = 0; j < f.length; j++) {
          if (f[j].value === D) {
            f[j].selected = !0, l && (f[j].defaultSelected = !0);
            return;
          }
          X === null && !f[j].disabled && (X = f[j]);
        }
        X !== null && (X.selected = !0);
      }
    }
    function Iu(e, t) {
      return o({}, t, {
        value: void 0
      });
    }
    function nc(e, t) {
      var a = e;
      Qg(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !zf && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), zf = !0);
    }
    function oo(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var l = t.value;
      l != null ? Il(a, !!t.multiple, l, !1) : t.defaultValue != null && Il(a, !!t.multiple, t.defaultValue, !0);
    }
    function If(e, t) {
      var a = e, l = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var f = t.value;
      f != null ? Il(a, !!t.multiple, f, !1) : l !== !!t.multiple && (t.defaultValue != null ? Il(a, !!t.multiple, t.defaultValue, !0) : Il(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function rc(e, t) {
      var a = e, l = t.value;
      l != null && Il(a, !!t.multiple, l, !1);
    }
    var Hf = !1;
    function Hl(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var l = o({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: Gn(a._wrapperState.initialValue)
      });
      return l;
    }
    function Hu(e, t) {
      var a = e;
      la("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Hf && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Tn() || "A component"), Hf = !0);
      var l = t.value;
      if (l == null) {
        var f = t.children, p = t.defaultValue;
        if (f != null) {
          h("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (p != null)
              throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Array.isArray(f)) {
              if (!(f.length <= 1))
                throw Error("<textarea> can only have at most one child.");
              f = f[0];
            }
            p = f;
          }
        }
        p == null && (p = ""), l = p;
      }
      a._wrapperState = {
        initialValue: In(l)
      };
    }
    function $f(e, t) {
      var a = e, l = In(t.value), f = In(t.defaultValue);
      if (l != null) {
        var p = Gn(l);
        p !== a.value && (a.value = p), t.defaultValue == null && a.defaultValue !== p && (a.defaultValue = p);
      }
      f != null && (a.defaultValue = Gn(f));
    }
    function Xr(e, t) {
      var a = e, l = a.textContent;
      l === a._wrapperState.initialValue && l !== "" && l !== null && (a.value = l);
    }
    function $l(e, t) {
      $f(e, t);
    }
    var Ul = "http://www.w3.org/1999/xhtml", jl = "http://www.w3.org/1998/Math/MathML", Uf = "http://www.w3.org/2000/svg", ac = {
      html: Ul,
      mathml: jl,
      svg: Uf
    };
    function $u(e) {
      switch (e) {
        case "svg":
          return Uf;
        case "math":
          return jl;
        default:
          return Ul;
      }
    }
    function Go(e, t) {
      return e == null || e === Ul ? $u(t) : e === Uf && t === "foreignObject" ? Ul : e;
    }
    var ic = function(e) {
      return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, a, l, f) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, l, f);
        });
      } : e;
    }, Uu, op = ic(function(e, t) {
      if (e.namespaceURI === ac.svg && !("innerHTML" in e)) {
        Uu = Uu || document.createElement("div"), Uu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Uu.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ga = 1, _i = 3, $r = 8, lo = 9, lp = 11, oc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === _i) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Xg = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, ju = {
      animationIterationCount: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function up(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Zg = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ju).forEach(function(e) {
      Zg.forEach(function(t) {
        ju[up(t, e)] = ju[e];
      });
    });
    function jf(e, t, a) {
      var l = t == null || typeof t == "boolean" || t === "";
      return l ? "" : !a && typeof t == "number" && t !== 0 && !(ju.hasOwnProperty(e) && ju[e]) ? t + "px" : ("" + t).trim();
    }
    var Jg = /([A-Z])/g, ey = /^ms-/;
    function Ff(e) {
      return e.replace(Jg, "-$1").toLowerCase().replace(ey, "-ms-");
    }
    var sp = function() {
    };
    {
      var ty = /^(?:webkit|moz|o)[A-Z]/, ny = /^-ms-/, cp = /-(.)/g, fp = /;\s*$/, Fl = {}, Vf = {}, dp = !1, vp = !1, ry = function(e) {
        return e.replace(cp, function(t, a) {
          return a.toUpperCase();
        });
      }, ay = function(e) {
        Fl.hasOwnProperty(e) && Fl[e] || (Fl[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ry(e.replace(ny, "ms-"))
        ));
      }, Bf = function(e) {
        Fl.hasOwnProperty(e) && Fl[e] || (Fl[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Fu = function(e, t) {
        Vf.hasOwnProperty(t) && Vf[t] || (Vf[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(fp, "")));
      }, iy = function(e, t) {
        dp || (dp = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, pp = function(e, t) {
        vp || (vp = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      sp = function(e, t) {
        e.indexOf("-") > -1 ? ay(e) : ty.test(e) ? Bf(e) : fp.test(t) && Fu(e, t), typeof t == "number" && (isNaN(t) ? iy(e, t) : isFinite(t) || pp(e, t));
      };
    }
    var hp = sp;
    function mp(e) {
      {
        var t = "", a = "";
        for (var l in e)
          if (e.hasOwnProperty(l)) {
            var f = e[l];
            if (f != null) {
              var p = l.indexOf("--") === 0;
              t += a + (p ? l : Ff(l)) + ":", t += jf(l, f, p), a = ";";
            }
          }
        return t || null;
      }
    }
    function Wf(e, t) {
      var a = e.style;
      for (var l in t)
        if (t.hasOwnProperty(l)) {
          var f = l.indexOf("--") === 0;
          f || hp(l, t[l]);
          var p = jf(l, t[l], f);
          l === "float" && (l = "cssFloat"), f ? a.setProperty(l, p) : a[l] = p;
        }
    }
    function gp(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function qo(e) {
      var t = {};
      for (var a in e)
        for (var l = Xg[a] || [a], f = 0; f < l.length; f++)
          t[l[f]] = a;
      return t;
    }
    function oy(e, t) {
      {
        if (!t)
          return;
        var a = qo(e), l = qo(t), f = {};
        for (var p in a) {
          var y = a[p], b = l[p];
          if (b && y !== b) {
            var w = y + "," + b;
            if (f[w])
              continue;
            f[w] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", gp(e[y]) ? "Removing" : "Updating", y, b);
          }
        }
      }
    }
    var ly = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, uy = o({
      menuitem: !0
    }, ly), yp = "__html";
    function lc(e, t) {
      if (t) {
        if (uy[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && yp in t.dangerouslySetInnerHTML))
            throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
          throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Da(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var uo = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, bp = {
      "aria-current": 0,
      // state
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ki = {}, sy = new RegExp("^(aria)-[" + mt + "]*$"), Sp = new RegExp("^(aria)[A-Z][" + mt + "]*$"), Kf = Object.prototype.hasOwnProperty;
    function Gf(e, t) {
      {
        if (Kf.call(ki, t) && ki[t])
          return !0;
        if (Sp.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), l = bp.hasOwnProperty(a) ? a : null;
          if (l == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ki[t] = !0, !0;
          if (t !== l)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, l), ki[t] = !0, !0;
        }
        if (sy.test(t)) {
          var f = t.toLowerCase(), p = bp.hasOwnProperty(f) ? f : null;
          if (p == null)
            return ki[t] = !0, !1;
          if (t !== p)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, p), ki[t] = !0, !0;
        }
      }
      return !0;
    }
    function Cp(e, t) {
      {
        var a = [];
        for (var l in t) {
          var f = Gf(e, l);
          f || a.push(l);
        }
        var p = a.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        a.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e) : a.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e);
      }
    }
    function Ep(e, t) {
      Da(e, t) || Cp(e, t);
    }
    var qf = !1;
    function cy(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !qf && (qf = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var wp = function() {
    };
    {
      var Ur = {}, fy = Object.prototype.hasOwnProperty, xp = /^on./, ya = /^on[^A-Z]/, dy = new RegExp("^(aria)-[" + mt + "]*$"), Vu = new RegExp("^(aria)[A-Z][" + mt + "]*$");
      wp = function(e, t, a, l) {
        if (fy.call(Ur, t) && Ur[t])
          return !0;
        var f = t.toLowerCase();
        if (f === "onfocusin" || f === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ur[t] = !0, !0;
        if (l != null) {
          var p = l.registrationNameDependencies, y = l.possibleRegistrationNames;
          if (p.hasOwnProperty(t))
            return !0;
          var b = y.hasOwnProperty(f) ? y[f] : null;
          if (b != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, b), Ur[t] = !0, !0;
          if (xp.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), Ur[t] = !0, !0;
        } else if (xp.test(t))
          return ya.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Ur[t] = !0, !0;
        if (dy.test(t) || Vu.test(t))
          return !0;
        if (f === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ur[t] = !0, !0;
        if (f === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ur[t] = !0, !0;
        if (f === "is" && a !== null && a !== void 0 && typeof a != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Ur[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Ur[t] = !0, !0;
        var w = Qt(t), O = w !== null && w.type === it;
        if (uo.hasOwnProperty(f)) {
          var D = uo[f];
          if (D !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, D), Ur[t] = !0, !0;
        } else if (!O && t !== f)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, f), Ur[t] = !0, !0;
        return typeof a == "boolean" && ot(t, a, w, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Ur[t] = !0, !0) : O ? !0 : ot(t, a, w, !1) ? (Ur[t] = !0, !1) : ((a === "false" || a === "true") && w !== null && w.type === Nt && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Ur[t] = !0), !0);
      };
    }
    var Tp = function(e, t, a) {
      {
        var l = [];
        for (var f in t) {
          var p = wp(e, f, t[f], a);
          p || l.push(f);
        }
        var y = l.map(function(b) {
          return "`" + b + "`";
        }).join(", ");
        l.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e) : l.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e);
      }
    };
    function Rp(e, t, a) {
      Da(e, t) || Tp(e, t, a);
    }
    var Yf = 1, Bu = 2, Yo = 4, _p = 16, Vl = Yf | Bu | Yo;
    function Wu(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === _i ? t.parentNode : t;
    }
    var Qo = null, so = null, Xo = null;
    function Qf(e) {
      var t = hu(e);
      if (t) {
        if (typeof Qo != "function")
          throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var l = kh(a);
          Qo(t.stateNode, t.type, l);
        }
      }
    }
    function Xf(e) {
      Qo = e;
    }
    function Bl(e) {
      so ? Xo ? Xo.push(e) : Xo = [e] : so = e;
    }
    function kp() {
      return so !== null || Xo !== null;
    }
    function Zf() {
      if (so) {
        var e = so, t = Xo;
        if (so = null, Xo = null, Qf(e), t)
          for (var a = 0; a < t.length; a++)
            Qf(t[a]);
      }
    }
    var uc = function(e, t) {
      return e(t);
    }, yn = function(e, t, a, l, f) {
      return e(t, a, l, f);
    }, sc = function() {
    }, Jf = uc, Mi = !1, cc = !1;
    function fc() {
      var e = kp();
      e && (sc(), Zf());
    }
    function Ku(e, t) {
      if (Mi)
        return e(t);
      Mi = !0;
      try {
        return uc(e, t);
      } finally {
        Mi = !1, fc();
      }
    }
    function dc(e, t, a) {
      if (cc)
        return e(t, a);
      cc = !0;
      try {
        return Jf(e, t, a);
      } finally {
        cc = !1, fc();
      }
    }
    function Wl(e, t, a, l, f) {
      var p = Mi;
      Mi = !0;
      try {
        return yn(e, t, a, l, f);
      } finally {
        Mi = p, Mi || fc();
      }
    }
    function Mp(e) {
      Mi || sc();
    }
    function vc(e, t, a, l) {
      uc = e, yn = t, sc = a, Jf = l;
    }
    function ed(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function td(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && ed(t));
        default:
          return !1;
      }
    }
    function Kl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var l = kh(a);
      if (l === null)
        return null;
      var f = l[t];
      if (td(t, e.type, l))
        return null;
      if (!(!f || typeof f == "function"))
        throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof f + "` type.");
      return f;
    }
    var Gu = !1;
    if (Xe)
      try {
        var Gl = {};
        Object.defineProperty(Gl, "passive", {
          get: function() {
            Gu = !0;
          }
        }), window.addEventListener("test", Gl, Gl), window.removeEventListener("test", Gl, Gl);
      } catch (e) {
        Gu = !1;
      }
    function Op(e, t, a, l, f, p, y, b, w) {
      var O = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, O);
      } catch (D) {
        this.onError(D);
      }
    }
    var pc = Op;
    if (typeof window != "undefined" && typeof window.dispatchEvent == "function" && typeof document != "undefined" && typeof document.createEvent == "function") {
      var co = document.createElement("react");
      pc = function(t, a, l, f, p, y, b, w, O) {
        if (typeof document == "undefined")
          throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var D = document.createEvent("Event"), X = !1, j = !0, J = window.event, fe = Object.getOwnPropertyDescriptor(window, "event");
        function _e() {
          co.removeEventListener(ae, Pt, !1), typeof window.event != "undefined" && window.hasOwnProperty("event") && (window.event = J);
        }
        var lt = Array.prototype.slice.call(arguments, 3);
        function Pt() {
          X = !0, _e(), a.apply(l, lt), j = !1;
        }
        var ht, Jt = !1, Sn = !1;
        function Z(K) {
          if (ht = K.error, Jt = !0, ht === null && K.colno === 0 && K.lineno === 0 && (Sn = !0), K.defaultPrevented && ht != null && typeof ht == "object")
            try {
              ht._suppressLogging = !0;
            } catch (be) {
            }
        }
        var ae = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", Z), co.addEventListener(ae, Pt, !1), D.initEvent(ae, !1, !1), co.dispatchEvent(D), fe && Object.defineProperty(window, "event", fe), X && j && (Jt ? Sn && (ht = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ht = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ht)), window.removeEventListener("error", Z), !X)
          return _e(), Op.apply(this, arguments);
      };
    }
    var Np = pc, fo = !1, hc = null, Zo = !1, Ja = null, mc = {
      onError: function(e) {
        fo = !0, hc = e;
      }
    };
    function jr(e, t, a, l, f, p, y, b, w) {
      fo = !1, hc = null, Np.apply(mc, arguments);
    }
    function Dp(e, t, a, l, f, p, y, b, w) {
      if (jr.apply(this, arguments), fo) {
        var O = Fr();
        Zo || (Zo = !0, Ja = O);
      }
    }
    function Jo() {
      if (Zo) {
        var e = Ja;
        throw Zo = !1, Ja = null, e;
      }
    }
    function ua() {
      return fo;
    }
    function Fr() {
      if (fo) {
        var e = hc;
        return fo = !1, hc = null, e;
      } else
        throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Oi(e) {
      return e._reactInternals;
    }
    function Ap(e) {
      return e._reactInternals !== void 0;
    }
    function nd(e, t) {
      e._reactInternals = t;
    }
    var un = (
      /*                      */
      0
    ), Vr = (
      /*                */
      1
    ), Tt = (
      /*                    */
      2
    ), vt = (
      /*                       */
      4
    ), vo = (
      /*           */
      6
    ), Rn = (
      /*                     */
      8
    ), Sr = (
      /*                 */
      16
    ), po = (
      /*                     */
      32
    ), nn = (
      /*                   */
      64
    ), Cr = (
      /*                          */
      128
    ), ei = (
      /*                     */
      256
    ), ql = (
      /*                      */
      512
    ), Yl = (
      /*     */
      8192
    ), ba = (
      /*                    */
      1024
    ), Lp = (
      /*           */
      1028
    ), rd = (
      /*          */
      932
    ), el = (
      /*               */
      2047
    ), qu = (
      /*                   */
      2048
    ), Aa = (
      /*                */
      4096
    ), Yu = (
      /* */
      16384
    ), vy = d.ReactCurrentOwner;
    function ho(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var l = t;
        do
          t = l, (t.flags & (Tt | ba)) !== un && (a = t.return), l = t.return;
        while (l);
      }
      return t.tag === _ ? a : null;
    }
    function gc(e) {
      if (e.tag === I) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function Pp(e) {
      return e.tag === _ ? e.stateNode.containerInfo : null;
    }
    function yc(e) {
      return ho(e) === e;
    }
    function zp(e) {
      {
        var t = vy.current;
        if (t !== null && t.tag === E) {
          var a = t, l = a.stateNode;
          l._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Re(a.type) || "A component"), l._warnedAboutRefsInRender = !0;
        }
      }
      var f = Oi(e);
      return f ? ho(f) === f : !1;
    }
    function ad(e) {
      if (ho(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function id(e) {
      var t = e.alternate;
      if (!t) {
        var a = ho(e);
        if (a === null)
          throw Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var l = e, f = t; ; ) {
        var p = l.return;
        if (p === null)
          break;
        var y = p.alternate;
        if (y === null) {
          var b = p.return;
          if (b !== null) {
            l = f = b;
            continue;
          }
          break;
        }
        if (p.child === y.child) {
          for (var w = p.child; w; ) {
            if (w === l)
              return ad(p), e;
            if (w === f)
              return ad(p), t;
            w = w.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (l.return !== f.return)
          l = p, f = y;
        else {
          for (var O = !1, D = p.child; D; ) {
            if (D === l) {
              O = !0, l = p, f = y;
              break;
            }
            if (D === f) {
              O = !0, f = p, l = y;
              break;
            }
            D = D.sibling;
          }
          if (!O) {
            for (D = y.child; D; ) {
              if (D === l) {
                O = !0, l = y, f = p;
                break;
              }
              if (D === f) {
                O = !0, f = y, l = p;
                break;
              }
              D = D.sibling;
            }
            if (!O)
              throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (l.alternate !== f)
          throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (l.tag !== _)
        throw Error("Unable to find node on an unmounted component.");
      return l.stateNode.current === l ? e : t;
    }
    function od(e) {
      var t = id(e);
      if (!t)
        return null;
      for (var a = t; ; ) {
        if (a.tag === L || a.tag === H)
          return a;
        if (a.child) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === t)
          return null;
        for (; !a.sibling; ) {
          if (!a.return || a.return === t)
            return null;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return null;
    }
    function ld(e) {
      var t = id(e);
      if (!t)
        return null;
      for (var a = t; ; ) {
        if (a.tag === L || a.tag === H || we)
          return a;
        if (a.child && a.tag !== N) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === t)
          return null;
        for (; !a.sibling; ) {
          if (!a.return || a.return === t)
            return null;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return null;
    }
    function Ip(e, t) {
      for (var a = t, l = e.alternate; a !== null; ) {
        if (a === e || a === l)
          return !0;
        a = a.return;
      }
      return !1;
    }
    var ti;
    function bc(e) {
      ti = e;
    }
    var Qu;
    function Hp(e) {
      Qu = e;
    }
    var Er;
    function Ql(e) {
      Er = e;
    }
    var ud;
    function tl(e) {
      ud = e;
    }
    var nl = !1, lr = [], Ni = null, mo = null, ur = null, go = /* @__PURE__ */ new Map(), yo = /* @__PURE__ */ new Map(), ni = [];
    function Sc() {
      return lr.length > 0;
    }
    var sd = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Cc(e) {
      return sd.indexOf(e) > -1;
    }
    function cd(e, t, a, l, f) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a | _p,
        nativeEvent: f,
        targetContainers: [l]
      };
    }
    function rl(e, t, a, l, f) {
      var p = cd(e, t, a, l, f);
      lr.push(p);
    }
    function sa(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ni = null;
          break;
        case "dragenter":
        case "dragleave":
          mo = null;
          break;
        case "mouseover":
        case "mouseout":
          ur = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          go.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var l = t.pointerId;
          yo.delete(l);
          break;
        }
      }
    }
    function Sa(e, t, a, l, f, p) {
      if (e === null || e.nativeEvent !== p) {
        var y = cd(t, a, l, f, p);
        if (t !== null) {
          var b = hu(t);
          b !== null && Qu(b);
        }
        return y;
      }
      e.eventSystemFlags |= l;
      var w = e.targetContainers;
      return f !== null && w.indexOf(f) === -1 && w.push(f), e;
    }
    function fd(e, t, a, l, f) {
      switch (t) {
        case "focusin": {
          var p = f;
          return Ni = Sa(Ni, e, t, a, l, p), !0;
        }
        case "dragenter": {
          var y = f;
          return mo = Sa(mo, e, t, a, l, y), !0;
        }
        case "mouseover": {
          var b = f;
          return ur = Sa(ur, e, t, a, l, b), !0;
        }
        case "pointerover": {
          var w = f, O = w.pointerId;
          return go.set(O, Sa(go.get(O) || null, e, t, a, l, w)), !0;
        }
        case "gotpointercapture": {
          var D = f, X = D.pointerId;
          return yo.set(X, Sa(yo.get(X) || null, e, t, a, l, D)), !0;
        }
      }
      return !1;
    }
    function $p(e) {
      var t = _s(e.target);
      if (t !== null) {
        var a = ho(t);
        if (a !== null) {
          var l = a.tag;
          if (l === I) {
            var f = gc(a);
            if (f !== null) {
              e.blockedOn = f, ud(e.lanePriority, function() {
                s.unstable_runWithPriority(e.priority, function() {
                  Er(a);
                });
              });
              return;
            }
          } else if (l === _) {
            var p = a.stateNode;
            if (p.hydrate) {
              e.blockedOn = Pp(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function La(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], l = vs(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (l !== null) {
          var f = hu(l);
          return f !== null && Qu(f), e.blockedOn = l, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Di(e, t, a) {
      La(e) && a.delete(t);
    }
    function Up() {
      for (nl = !1; lr.length > 0; ) {
        var e = lr[0];
        if (e.blockedOn !== null) {
          var t = hu(e.blockedOn);
          t !== null && ti(t);
          break;
        }
        for (var a = e.targetContainers; a.length > 0; ) {
          var l = a[0], f = vs(e.domEventName, e.eventSystemFlags, l, e.nativeEvent);
          if (f !== null) {
            e.blockedOn = f;
            break;
          }
          a.shift();
        }
        e.blockedOn === null && lr.shift();
      }
      Ni !== null && La(Ni) && (Ni = null), mo !== null && La(mo) && (mo = null), ur !== null && La(ur) && (ur = null), go.forEach(Di), yo.forEach(Di);
    }
    function Ai(e, t) {
      e.blockedOn === t && (e.blockedOn = null, nl || (nl = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Up)));
    }
    function dd(e) {
      if (lr.length > 0) {
        Ai(lr[0], e);
        for (var t = 1; t < lr.length; t++) {
          var a = lr[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ni !== null && Ai(Ni, e), mo !== null && Ai(mo, e), ur !== null && Ai(ur, e);
      var l = function(b) {
        return Ai(b, e);
      };
      go.forEach(l), yo.forEach(l);
      for (var f = 0; f < ni.length; f++) {
        var p = ni[f];
        p.blockedOn === e && (p.blockedOn = null);
      }
      for (; ni.length > 0; ) {
        var y = ni[0];
        if (y.blockedOn !== null)
          break;
        $p(y), y.blockedOn === null && ni.shift();
      }
    }
    var Ec = 0, Xu = 1, Xl = 2;
    function Zu(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var al = {
      animationend: Zu("Animation", "AnimationEnd"),
      animationiteration: Zu("Animation", "AnimationIteration"),
      animationstart: Zu("Animation", "AnimationStart"),
      transitionend: Zu("Transition", "TransitionEnd")
    }, wc = {}, xc = {};
    Xe && (xc = document.createElement("div").style, "AnimationEvent" in window || (delete al.animationend.animation, delete al.animationiteration.animation, delete al.animationstart.animation), "TransitionEvent" in window || delete al.transitionend.transition);
    function il(e) {
      if (wc[e])
        return wc[e];
      if (!al[e])
        return e;
      var t = al[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in xc)
          return wc[e] = t[a];
      return e;
    }
    var Zl = il("animationend"), Ju = il("animationiteration"), vd = il("animationstart"), es = il("transitionend"), pd = /* @__PURE__ */ new Map(), ol = /* @__PURE__ */ new Map(), ri = [
      "cancel",
      "cancel",
      "click",
      "click",
      "close",
      "close",
      "contextmenu",
      "contextMenu",
      "copy",
      "copy",
      "cut",
      "cut",
      "auxclick",
      "auxClick",
      "dblclick",
      "doubleClick",
      // Careful!
      "dragend",
      "dragEnd",
      "dragstart",
      "dragStart",
      "drop",
      "drop",
      "focusin",
      "focus",
      // Careful!
      "focusout",
      "blur",
      // Careful!
      "input",
      "input",
      "invalid",
      "invalid",
      "keydown",
      "keyDown",
      "keypress",
      "keyPress",
      "keyup",
      "keyUp",
      "mousedown",
      "mouseDown",
      "mouseup",
      "mouseUp",
      "paste",
      "paste",
      "pause",
      "pause",
      "play",
      "play",
      "pointercancel",
      "pointerCancel",
      "pointerdown",
      "pointerDown",
      "pointerup",
      "pointerUp",
      "ratechange",
      "rateChange",
      "reset",
      "reset",
      "seeked",
      "seeked",
      "submit",
      "submit",
      "touchcancel",
      "touchCancel",
      "touchend",
      "touchEnd",
      "touchstart",
      "touchStart",
      "volumechange",
      "volumeChange"
    ], ts = ["change", "selectionchange", "textInput", "compositionstart", "compositionend", "compositionupdate"], ns = ["drag", "drag", "dragenter", "dragEnter", "dragexit", "dragExit", "dragleave", "dragLeave", "dragover", "dragOver", "mousemove", "mouseMove", "mouseout", "mouseOut", "mouseover", "mouseOver", "pointermove", "pointerMove", "pointerout", "pointerOut", "pointerover", "pointerOver", "scroll", "scroll", "toggle", "toggle", "touchmove", "touchMove", "wheel", "wheel"], ll = ["abort", "abort", Zl, "animationEnd", Ju, "animationIteration", vd, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", es, "transitionEnd", "waiting", "waiting"];
    function rs(e, t) {
      for (var a = 0; a < e.length; a += 2) {
        var l = e[a], f = e[a + 1], p = f[0].toUpperCase() + f.slice(1), y = "on" + p;
        ol.set(l, t), pd.set(l, y), Ie(y, [l]);
      }
    }
    function Jl(e, t) {
      for (var a = 0; a < e.length; a++)
        ol.set(e[a], t);
    }
    function jp(e) {
      var t = ol.get(e);
      return t === void 0 ? Xl : t;
    }
    function hd() {
      rs(ri, Ec), rs(ns, Xu), rs(ll, Xl), Jl(ts, Ec);
    }
    var Hn = s.unstable_now;
    if (!(c.__interactionsRef != null && c.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
    var as = 99, ai = 98, Li = 97, ii = 96, md = 95, Fp = 90;
    Hn();
    var bo = 15, is = 14, os = 13, eu = 12, ul = 11, So = 10, tu = 9, sr = 8, nu = 7, _n = 6, cr = 5, fr = 4, ls = 3, Co = 2, Br = 1, Pi = 0, gd = 31, ue = (
      /*                        */
      0
    ), qn = (
      /*                          */
      0
    ), Ft = (
      /*                        */
      1
    ), zi = (
      /*                 */
      2
    ), sl = (
      /*      */
      4
    ), us = (
      /*                    */
      24
    ), yd = (
      /*           */
      32
    ), bd = (
      /*                  */
      192
    ), ru = (
      /*            */
      256
    ), au = (
      /*                   */
      3584
    ), Sd = (
      /*                */
      4096
    ), Ii = (
      /*                       */
      4186112
    ), iu = (
      /*                            */
      62914560
    ), Eo = (
      /*                  */
      33554432
    ), Tc = (
      /*          */
      67108864
    ), ss = (
      /*                                 */
      134217727
    ), Cd = (
      /*               */
      134217728
    ), Rc = (
      /*                             */
      805306368
    ), Pa = (
      /*                   */
      1073741824
    ), kn = -1;
    function py(e) {
    }
    var hn = sr;
    function ou(e) {
      if ((Ft & e) !== ue)
        return hn = bo, Ft;
      if ((zi & e) !== ue)
        return hn = is, zi;
      if ((sl & e) !== ue)
        return hn = os, sl;
      var t = us & e;
      if (t !== ue)
        return hn = eu, t;
      if ((e & yd) !== ue)
        return hn = ul, yd;
      var a = bd & e;
      if (a !== ue)
        return hn = So, a;
      if ((e & ru) !== ue)
        return hn = tu, ru;
      var l = au & e;
      if (l !== ue)
        return hn = sr, l;
      if ((e & Sd) !== ue)
        return hn = nu, Sd;
      var f = Ii & e;
      if (f !== ue)
        return hn = _n, f;
      var p = iu & e;
      if (p !== ue)
        return hn = cr, p;
      if (e & Tc)
        return hn = fr, Tc;
      if ((e & Cd) !== ue)
        return hn = ls, Cd;
      var y = Rc & e;
      return y !== ue ? (hn = Co, y) : (Pa & e) !== ue ? (hn = Br, Pa) : (h("Should have found matching lanes. This is a bug in React."), hn = sr, e);
    }
    function Ed(e) {
      switch (e) {
        case as:
          return bo;
        case ai:
          return So;
        case Li:
        case ii:
          return sr;
        case md:
          return Co;
        default:
          return Pi;
      }
    }
    function _c(e) {
      switch (e) {
        case bo:
        case is:
          return as;
        case os:
        case eu:
        case ul:
        case So:
          return ai;
        case tu:
        case sr:
        case nu:
        case _n:
        case fr:
        case cr:
          return Li;
        case ls:
        case Co:
        case Br:
          return md;
        case Pi:
          return Fp;
        default:
          throw Error("Invalid update priority: " + e + ". This is a bug in React.");
      }
    }
    function cs(e, t) {
      var a = e.pendingLanes;
      if (a === ue)
        return hn = Pi, ue;
      var l = ue, f = Pi, p = e.expiredLanes, y = e.suspendedLanes, b = e.pingedLanes;
      if (p !== ue)
        l = p, f = hn = bo;
      else {
        var w = a & ss;
        if (w !== ue) {
          var O = w & ~y;
          if (O !== ue)
            l = ou(O), f = hn;
          else {
            var D = w & b;
            D !== ue && (l = ou(D), f = hn);
          }
        } else {
          var X = a & ~y;
          X !== ue ? (l = ou(X), f = hn) : b !== ue && (l = ou(b), f = hn);
        }
      }
      if (l === ue)
        return ue;
      if (l = a & Kp(l), t !== ue && t !== l && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & y) === ue) {
        ou(t);
        var j = hn;
        if (f <= j)
          return t;
        hn = f;
      }
      var J = e.entangledLanes;
      if (J !== ue)
        for (var fe = e.entanglements, _e = l & J; _e > 0; ) {
          var lt = wo(_e), Pt = 1 << lt;
          l |= fe[lt], _e &= ~Pt;
        }
      return l;
    }
    function hy(e, t) {
      for (var a = e.eventTimes, l = kn; t > 0; ) {
        var f = wo(t), p = 1 << f, y = a[f];
        y > l && (l = y), t &= ~p;
      }
      return l;
    }
    function my(e, t) {
      ou(e);
      var a = hn;
      return a >= So ? t + 250 : a >= _n ? t + 5e3 : kn;
    }
    function gy(e, t) {
      for (var a = e.pendingLanes, l = e.suspendedLanes, f = e.pingedLanes, p = e.expirationTimes, y = a; y > 0; ) {
        var b = wo(y), w = 1 << b, O = p[b];
        O === kn ? ((w & l) === ue || (w & f) !== ue) && (p[b] = my(w, t)) : O <= t && (e.expiredLanes |= w), y &= ~w;
      }
    }
    function Ca(e) {
      var t = e.pendingLanes & ~Pa;
      return t !== ue ? t : t & Pa ? Pa : ue;
    }
    function Zr() {
      return hn;
    }
    function wd(e) {
      return (e & ss) !== ue;
    }
    function xd(e) {
      return (e & iu) === e;
    }
    function Vp(e) {
      return (e & Ii) === e;
    }
    function lu(e, t) {
      switch (e) {
        case Pi:
          break;
        case bo:
          return Ft;
        case is:
          return zi;
        case eu: {
          var a = dr(us & ~t);
          return a === qn ? lu(So, t) : a;
        }
        case So: {
          var l = dr(bd & ~t);
          return l === qn ? lu(sr, t) : l;
        }
        case sr: {
          var f = dr(au & ~t);
          return f === qn && (f = dr(Ii & ~t), f === qn && (f = dr(au))), f;
        }
        case _n:
        case cr:
          break;
        case Co:
          var p = dr(Rc & ~t);
          return p === qn && (p = dr(Rc)), p;
      }
      throw Error("Invalid update priority: " + e + ". This is a bug in React.");
    }
    function Bp(e, t) {
      var a = dr(Ii & ~t);
      return a === qn && (a = dr(Ii & ~e), a === qn && (a = dr(Ii))), a;
    }
    function Td(e) {
      var t = dr(iu & ~e);
      return t === qn && (t = dr(iu)), t;
    }
    function Wp(e) {
      return e & -e;
    }
    function Rd(e) {
      var t = 31 - Qp(e);
      return t < 0 ? ue : 1 << t;
    }
    function Kp(e) {
      return (Rd(e) << 1) - 1;
    }
    function dr(e) {
      return Wp(e);
    }
    function wo(e) {
      return 31 - Qp(e);
    }
    function Gp(e) {
      return wo(e);
    }
    function wr(e, t) {
      return (e & t) !== ue;
    }
    function xo(e, t) {
      return (e & t) === t;
    }
    function tn(e, t) {
      return e | t;
    }
    function uu(e, t) {
      return e & ~t;
    }
    function yy(e) {
      return e;
    }
    function Hi(e, t) {
      return e !== qn && e < t ? e : t;
    }
    function kc(e) {
      for (var t = [], a = 0; a < gd; a++)
        t.push(e);
      return t;
    }
    function su(e, t, a) {
      e.pendingLanes |= t;
      var l = t - 1;
      e.suspendedLanes &= l, e.pingedLanes &= l;
      var f = e.eventTimes, p = Gp(t);
      f[p] = a;
    }
    function qp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, l = t; l > 0; ) {
        var f = wo(l), p = 1 << f;
        a[f] = kn, l &= ~p;
      }
    }
    function _d(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function fs(e) {
      e.expiredLanes |= us & e.pendingLanes;
    }
    function by(e) {
      return (e & us) !== ue;
    }
    function Yp(e, t) {
      e.mutableReadLanes |= t & e.pendingLanes;
    }
    function kd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var l = e.entanglements, f = e.eventTimes, p = e.expirationTimes, y = a; y > 0; ) {
        var b = wo(y), w = 1 << b;
        l[b] = ue, f[b] = kn, p[b] = kn, y &= ~w;
      }
    }
    function Md(e, t) {
      e.entangledLanes |= t;
      for (var a = e.entanglements, l = t; l > 0; ) {
        var f = wo(l), p = 1 << f;
        a[f] |= t, l &= ~p;
      }
    }
    var Qp = Math.clz32 ? Math.clz32 : Sy, Xp = Math.log, Zp = Math.LN2;
    function Sy(e) {
      return e === 0 ? 32 : 31 - (Xp(e) / Zp | 0) | 0;
    }
    var Jp = s.unstable_UserBlockingPriority, Cy = s.unstable_runWithPriority, Od = !0;
    function Nd(e) {
      Od = !!e;
    }
    function eh() {
      return Od;
    }
    function th(e, t, a) {
      var l = jp(t), f;
      switch (l) {
        case Ec:
          f = nh;
          break;
        case Xu:
          f = rh;
          break;
        case Xl:
        default:
          f = ds;
          break;
      }
      return f.bind(null, t, a, e);
    }
    function nh(e, t, a, l) {
      Mp(l.timeStamp), Wl(ds, e, t, a, l);
    }
    function rh(e, t, a, l) {
      Cy(Jp, ds.bind(null, e, t, a, l));
    }
    function ds(e, t, a, l) {
      if (Od) {
        var f = !0;
        if (f = (t & Yo) === 0, f && Sc() && Cc(e)) {
          rl(
            null,
            // Flags that we're not actually blocked on anything as far as we know.
            e,
            t,
            a,
            l
          );
          return;
        }
        var p = vs(e, t, a, l);
        if (p === null) {
          f && sa(e, l);
          return;
        }
        if (f) {
          if (Cc(e)) {
            rl(p, e, t, a, l);
            return;
          }
          if (fd(p, e, t, a, l))
            return;
          sa(e, l);
        }
        q1(e, t, l, null, a);
      }
    }
    function vs(e, t, a, l) {
      var f = Wu(l), p = _s(f);
      if (p !== null) {
        var y = ho(p);
        if (y === null)
          p = null;
        else {
          var b = y.tag;
          if (b === I) {
            var w = gc(y);
            if (w !== null)
              return w;
            p = null;
          } else if (b === _) {
            var O = y.stateNode;
            if (O.hydrate)
              return Pp(y);
            p = null;
          } else
            y !== p && (p = null);
        }
      }
      return q1(e, t, l, p, a), null;
    }
    function ah(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Dd(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function ih(e, t, a, l) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: l
      }), a;
    }
    function Ey(e, t, a, l) {
      return e.addEventListener(t, a, {
        passive: l
      }), a;
    }
    var ps = null, cu = null, cl = null;
    function Ct(e) {
      return ps = e, cu = xr(), !0;
    }
    function Wr() {
      ps = null, cu = null, cl = null;
    }
    function Yn() {
      if (cl)
        return cl;
      var e, t = cu, a = t.length, l, f = xr(), p = f.length;
      for (e = 0; e < a && t[e] === f[e]; e++)
        ;
      var y = a - e;
      for (l = 1; l <= y && t[a - l] === f[p - l]; l++)
        ;
      var b = l > 1 ? 1 - l : void 0;
      return cl = f.slice(e, b), cl;
    }
    function xr() {
      return "value" in ps ? ps.value : ps.textContent;
    }
    function oi(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function fu() {
      return !0;
    }
    function vr() {
      return !1;
    }
    function Nr(e) {
      function t(a, l, f, p, y) {
        this._reactName = a, this._targetInst = f, this.type = l, this.nativeEvent = p, this.target = y, this.currentTarget = null;
        for (var b in e)
          if (e.hasOwnProperty(b)) {
            var w = e[b];
            w ? this[b] = w(p) : this[b] = p[b];
          }
        var O = p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1;
        return O ? this.isDefaultPrevented = fu : this.isDefaultPrevented = vr, this.isPropagationStopped = vr, this;
      }
      return o(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = fu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = fu);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: fu
      }), t;
    }
    var za = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, fl = Nr(za), li = o({}, za, {
      view: 0,
      detail: 0
    }), Ad = Nr(li), hs, ms, dl;
    function du(e) {
      e !== dl && (dl && e.type === "mousemove" ? (hs = e.screenX - dl.screenX, ms = e.screenY - dl.screenY) : (hs = 0, ms = 0), dl = e);
    }
    var Ue = o({}, li, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: si,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (du(e), hs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : ms;
      }
    }), gs = Nr(Ue), Ld = o({}, Ue, {
      dataTransfer: 0
    }), ui = Nr(Ld), To = o({}, li, {
      relatedTarget: 0
    }), vl = Nr(To), ys = o({}, za, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Pd = Nr(ys), zd = o({}, za, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), $i = Nr(zd), bs = o({}, za, {
      data: 0
    }), Mc = Nr(bs), Oc = Mc, Ui = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Nc = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Ss(e) {
      if (e.key) {
        var t = Ui[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = oi(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Nc[e.keyCode] || "Unidentified" : "";
    }
    var Dc = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function ca(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var l = Dc[e];
      return l ? !!a[l] : !1;
    }
    function si(e) {
      return ca;
    }
    var Ro = o({}, li, {
      key: Ss,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: si,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? oi(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? oi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), Ac = Nr(Ro), Ea = o({}, Ue, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Id = Nr(Ea), vu = o({}, li, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: si
    }), Hd = Nr(vu), wy = o({}, za, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), oh = Nr(wy), lh = o({}, Ue, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Lc = Nr(lh), $d = [9, 13, 27, 32], pl = 229, Pc = Xe && "CompositionEvent" in window, pu = null;
    Xe && "documentMode" in document && (pu = document.documentMode);
    var Cs = Xe && "TextEvent" in window && !pu, uh = Xe && (!Pc || pu && pu > 8 && pu <= 11), sh = 32, Ud = String.fromCharCode(sh);
    function ch() {
      Ie("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ie("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ie("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ie("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var _o = !1;
    function xy(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Ty(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function ko(e, t) {
      return e === "keydown" && t.keyCode === pl;
    }
    function fh(e, t) {
      switch (e) {
        case "keyup":
          return $d.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== pl;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function jd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function dh(e) {
      return e.locale === "ko";
    }
    var hl = !1;
    function Mo(e, t, a, l, f) {
      var p, y;
      if (Pc ? p = Ty(t) : hl ? fh(t, l) && (p = "onCompositionEnd") : ko(t, l) && (p = "onCompositionStart"), !p)
        return null;
      uh && !dh(l) && (!hl && p === "onCompositionStart" ? hl = Ct(f) : p === "onCompositionEnd" && hl && (y = Yn()));
      var b = gh(a, p);
      if (b.length > 0) {
        var w = new Mc(p, t, null, l, f);
        if (e.push({
          event: w,
          listeners: b
        }), y)
          w.data = y;
        else {
          var O = jd(l);
          O !== null && (w.data = O);
        }
      }
    }
    function Ry(e, t) {
      switch (e) {
        case "compositionend":
          return jd(t);
        case "keypress":
          var a = t.which;
          return a !== sh ? null : (_o = !0, Ud);
        case "textInput":
          var l = t.data;
          return l === Ud && _o ? null : l;
        default:
          return null;
      }
    }
    function _y(e, t) {
      if (hl) {
        if (e === "compositionend" || !Pc && fh(e, t)) {
          var a = Yn();
          return Wr(), hl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!xy(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return uh && !dh(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vh(e, t, a, l, f) {
      var p;
      if (Cs ? p = Ry(t, l) : p = _y(t, l), !p)
        return null;
      var y = gh(a, "onBeforeInput");
      if (y.length > 0) {
        var b = new Oc("onBeforeInput", "beforeinput", null, l, f);
        e.push({
          event: b,
          listeners: y
        }), b.data = p;
      }
    }
    function ky(e, t, a, l, f, p, y) {
      Mo(e, t, a, l, f), vh(e, t, a, l, f);
    }
    var wa = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function zc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!wa[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function My(e) {
      if (!Xe)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var l = document.createElement("div");
        l.setAttribute(t, "return;"), a = typeof l[t] == "function";
      }
      return a;
    }
    function Oo() {
      Ie("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Es(e, t, a, l) {
      Bl(l);
      var f = gh(t, "onChange");
      if (f.length > 0) {
        var p = new fl("onChange", "change", null, a, l);
        e.push({
          event: p,
          listeners: f
        });
      }
    }
    var ci = null, ml = null;
    function Fd(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function Vd(e) {
      var t = [];
      Es(t, ml, e, Wu(e)), Ku(Oy, t);
    }
    function Oy(e) {
      F1(e, 0);
    }
    function Ic(e) {
      var t = Kc(e);
      if (to(t))
        return e;
    }
    function Hc(e, t) {
      if (e === "change")
        return t;
    }
    var $c = !1;
    Xe && ($c = My("input") && (!document.documentMode || document.documentMode > 9));
    function ph(e, t) {
      ci = e, ml = t, ci.attachEvent("onpropertychange", hh);
    }
    function Uc() {
      ci && (ci.detachEvent("onpropertychange", hh), ci = null, ml = null);
    }
    function hh(e) {
      e.propertyName === "value" && Ic(ml) && Vd(e);
    }
    function Bd(e, t, a) {
      e === "focusin" ? (Uc(), ph(t, a)) : e === "focusout" && Uc();
    }
    function ws(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ic(ml);
    }
    function Ny(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function jc(e, t) {
      if (e === "click")
        return Ic(t);
    }
    function mh(e, t) {
      if (e === "input" || e === "change")
        return Ic(t);
    }
    function Dy(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ao(e, "number", e.value);
    }
    function xs(e, t, a, l, f, p, y) {
      var b = a ? Kc(a) : window, w, O;
      if (Fd(b) ? w = Hc : zc(b) ? $c ? w = mh : (w = ws, O = Bd) : Ny(b) && (w = jc), w) {
        var D = w(t, a);
        if (D) {
          Es(e, D, l, f);
          return;
        }
      }
      O && O(t, b, a), t === "focusout" && Dy(b);
    }
    function Ay() {
      Ke("onMouseEnter", ["mouseout", "mouseover"]), Ke("onMouseLeave", ["mouseout", "mouseover"]), Ke("onPointerEnter", ["pointerout", "pointerover"]), Ke("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Fc(e, t, a, l, f, p, y) {
      var b = t === "mouseover" || t === "pointerover", w = t === "mouseout" || t === "pointerout";
      if (b && !(p & _p)) {
        var O = l.relatedTarget || l.fromElement;
        if (O && (_s(O) || _h(O)))
          return;
      }
      if (!(!w && !b)) {
        var D;
        if (f.window === f)
          D = f;
        else {
          var X = f.ownerDocument;
          X ? D = X.defaultView || X.parentWindow : D = window;
        }
        var j, J;
        if (w) {
          var fe = l.relatedTarget || l.toElement;
          if (j = a, J = fe ? _s(fe) : null, J !== null) {
            var _e = ho(J);
            (J !== _e || J.tag !== L && J.tag !== H) && (J = null);
          }
        } else
          j = null, J = a;
        if (j !== J) {
          var lt = gs, Pt = "onMouseLeave", ht = "onMouseEnter", Jt = "mouse";
          (t === "pointerout" || t === "pointerover") && (lt = Id, Pt = "onPointerLeave", ht = "onPointerEnter", Jt = "pointer");
          var Sn = j == null ? D : Kc(j), Z = J == null ? D : Kc(J), ae = new lt(Pt, Jt + "leave", j, l, f);
          ae.target = Sn, ae.relatedTarget = Z;
          var K = null, be = _s(f);
          if (be === a) {
            var De = new lt(ht, Jt + "enter", J, l, f);
            De.target = Z, De.relatedTarget = Sn, K = De;
          }
          Sk(e, ae, K, j, J);
        }
      }
    }
    function n(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var i = typeof Object.is == "function" ? Object.is : n, u = Object.prototype.hasOwnProperty;
    function v(e, t) {
      if (i(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), l = Object.keys(t);
      if (a.length !== l.length)
        return !1;
      for (var f = 0; f < a.length; f++)
        if (!u.call(t, a[f]) || !i(e[a[f]], t[a[f]]))
          return !1;
      return !0;
    }
    function g(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function S(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function R(e, t) {
      for (var a = g(e), l = 0, f = 0; a; ) {
        if (a.nodeType === _i) {
          if (f = l + a.textContent.length, l <= t && f >= t)
            return {
              node: a,
              offset: t - l
            };
          l = f;
        }
        a = g(S(a));
      }
    }
    function k(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, l = a.getSelection && a.getSelection();
      if (!l || l.rangeCount === 0)
        return null;
      var f = l.anchorNode, p = l.anchorOffset, y = l.focusNode, b = l.focusOffset;
      try {
        f.nodeType, y.nodeType;
      } catch (w) {
        return null;
      }
      return U(e, f, p, y, b);
    }
    function U(e, t, a, l, f) {
      var p = 0, y = -1, b = -1, w = 0, O = 0, D = e, X = null;
      e:
        for (; ; ) {
          for (var j = null; D === t && (a === 0 || D.nodeType === _i) && (y = p + a), D === l && (f === 0 || D.nodeType === _i) && (b = p + f), D.nodeType === _i && (p += D.nodeValue.length), (j = D.firstChild) !== null; )
            X = D, D = j;
          for (; ; ) {
            if (D === e)
              break e;
            if (X === t && ++w === a && (y = p), X === l && ++O === f && (b = p), (j = D.nextSibling) !== null)
              break;
            D = X, X = D.parentNode;
          }
          D = j;
        }
      return y === -1 || b === -1 ? null : {
        start: y,
        end: b
      };
    }
    function ee(e, t) {
      var a = e.ownerDocument || document, l = a && a.defaultView || window;
      if (l.getSelection) {
        var f = l.getSelection(), p = e.textContent.length, y = Math.min(t.start, p), b = t.end === void 0 ? y : Math.min(t.end, p);
        if (!f.extend && y > b) {
          var w = b;
          b = y, y = w;
        }
        var O = R(e, y), D = R(e, b);
        if (O && D) {
          if (f.rangeCount === 1 && f.anchorNode === O.node && f.anchorOffset === O.offset && f.focusNode === D.node && f.focusOffset === D.offset)
            return;
          var X = a.createRange();
          X.setStart(O.node, O.offset), f.removeAllRanges(), y > b ? (f.addRange(X), f.extend(D.node, D.offset)) : (X.setEnd(D.node, D.offset), f.addRange(X));
        }
      }
    }
    function Le(e) {
      return e && e.nodeType === _i;
    }
    function Et(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Le(e) ? !1 : Le(t) ? Et(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function me(e) {
      return e && e.ownerDocument && Et(e.ownerDocument.documentElement, e);
    }
    function Je(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch (t) {
        return !1;
      }
    }
    function bt() {
      for (var e = window, t = Ti(); t instanceof e.HTMLIFrameElement; ) {
        if (Je(t))
          e = t.contentWindow;
        else
          return t;
        t = Ti(e.document);
      }
      return t;
    }
    function ft(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function Q() {
      var e = bt();
      return {
        focusedElem: e,
        selectionRange: ft(e) ? W(e) : null
      };
    }
    function F(e) {
      var t = bt(), a = e.focusedElem, l = e.selectionRange;
      if (t !== a && me(a)) {
        l !== null && ft(a) && le(a, l);
        for (var f = [], p = a; p = p.parentNode; )
          p.nodeType === ga && f.push({
            element: p,
            left: p.scrollLeft,
            top: p.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var y = 0; y < f.length; y++) {
          var b = f[y];
          b.element.scrollLeft = b.left, b.element.scrollTop = b.top;
        }
      }
    }
    function W(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = k(e), t || {
        start: 0,
        end: 0
      };
    }
    function le(e, t) {
      var a = t.start, l = t.end;
      l === void 0 && (l = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(l, e.value.length)) : ee(e, t);
    }
    var ce = Xe && "documentMode" in document && document.documentMode <= 11;
    function Rt() {
      Ie("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var je = null, wt = null, Lt = null, _t = !1;
    function No(e) {
      if ("selectionStart" in e && ft(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function Ly(e) {
      return e.window === e ? e.document : e.nodeType === lo ? e : e.ownerDocument;
    }
    function $1(e, t, a) {
      var l = Ly(a);
      if (!(_t || je == null || je !== Ti(l))) {
        var f = No(je);
        if (!Lt || !v(Lt, f)) {
          Lt = f;
          var p = gh(wt, "onSelect");
          if (p.length > 0) {
            var y = new fl("onSelect", "select", null, t, a);
            e.push({
              event: y,
              listeners: p
            }), y.target = je;
          }
        }
      }
    }
    function vk(e, t, a, l, f, p, y) {
      var b = a ? Kc(a) : window;
      switch (t) {
        case "focusin":
          (zc(b) || b.contentEditable === "true") && (je = b, wt = a, Lt = null);
          break;
        case "focusout":
          je = null, wt = null, Lt = null;
          break;
        case "mousedown":
          _t = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          _t = !1, $1(e, l, f);
          break;
        case "selectionchange":
          if (ce)
            break;
        case "keydown":
        case "keyup":
          $1(e, l, f);
      }
    }
    function pk(e, t, a, l, f, p, y) {
      var b = pd.get(t);
      if (b !== void 0) {
        var w = fl, O = t;
        switch (t) {
          case "keypress":
            if (oi(l) === 0)
              return;
          case "keydown":
          case "keyup":
            w = Ac;
            break;
          case "focusin":
            O = "focus", w = vl;
            break;
          case "focusout":
            O = "blur", w = vl;
            break;
          case "beforeblur":
          case "afterblur":
            w = vl;
            break;
          case "click":
            if (l.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = gs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = ui;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Hd;
            break;
          case Zl:
          case Ju:
          case vd:
            w = Pd;
            break;
          case es:
            w = oh;
            break;
          case "scroll":
            w = Ad;
            break;
          case "wheel":
            w = Lc;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = $i;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = Id;
            break;
        }
        var D = (p & Yo) !== 0;
        {
          var X = !D && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", j = yk(a, b, l.type, D, X);
          if (j.length > 0) {
            var J = new w(b, O, null, l, f);
            e.push({
              event: J,
              listeners: j
            });
          }
        }
      }
    }
    hd(), Ay(), Oo(), Rt(), ch();
    function hk(e, t, a, l, f, p, y) {
      pk(e, t, a, l, f, p);
      var b = (p & Vl) === 0;
      b && (Fc(e, t, a, l, f, p), xs(e, t, a, l, f), vk(e, t, a, l, f), ky(e, t, a, l, f));
    }
    var Wd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], U1 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Wd));
    function j1(e, t, a) {
      var l = e.type || "unknown-event";
      e.currentTarget = a, Dp(l, t, void 0, e), e.currentTarget = null;
    }
    function mk(e, t, a) {
      var l;
      if (a)
        for (var f = t.length - 1; f >= 0; f--) {
          var p = t[f], y = p.instance, b = p.currentTarget, w = p.listener;
          if (y !== l && e.isPropagationStopped())
            return;
          j1(e, w, b), l = y;
        }
      else
        for (var O = 0; O < t.length; O++) {
          var D = t[O], X = D.instance, j = D.currentTarget, J = D.listener;
          if (X !== l && e.isPropagationStopped())
            return;
          j1(e, J, j), l = X;
        }
    }
    function F1(e, t) {
      for (var a = (t & Yo) !== 0, l = 0; l < e.length; l++) {
        var f = e[l], p = f.event, y = f.listeners;
        mk(p, y, a);
      }
      Jo();
    }
    function gk(e, t, a, l, f) {
      var p = Wu(a), y = [];
      hk(y, e, l, a, p, t), F1(y, t);
    }
    function Dn(e, t) {
      var a = !1, l = CC(t), f = Q1(e, a);
      l.has(f) || (K1(t, e, Bu, a), l.add(f));
    }
    var V1 = "_reactListening" + Math.random().toString(36).slice(2);
    function B1(e) {
      {
        if (e[V1])
          return;
        e[V1] = !0, ie.forEach(function(t) {
          U1.has(t) || W1(t, !1, e, null), W1(t, !0, e, null);
        });
      }
    }
    function W1(e, t, a, l) {
      var f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, p = a;
      if (e === "selectionchange" && a.nodeType !== lo && (p = a.ownerDocument), l !== null && !t && U1.has(e)) {
        if (e !== "scroll")
          return;
        f |= Bu, p = l;
      }
      var y = CC(p), b = Q1(e, t);
      y.has(b) || (t && (f |= Yo), K1(p, e, f, t), y.add(b));
    }
    function K1(e, t, a, l, f) {
      var p = th(e, t, a), y = void 0;
      Gu && (t === "touchstart" || t === "touchmove" || t === "wheel") && (y = !0), e = e, l ? y !== void 0 ? ih(e, t, p, y) : Dd(e, t, p) : y !== void 0 ? Ey(e, t, p, y) : ah(e, t, p);
    }
    function G1(e, t) {
      return e === t || e.nodeType === $r && e.parentNode === t;
    }
    function q1(e, t, a, l, f) {
      var p = l;
      if (!(t & Yf) && !(t & Bu)) {
        var y = f;
        if (l !== null) {
          var b = l;
          e:
            for (; ; ) {
              if (b === null)
                return;
              var w = b.tag;
              if (w === _ || w === N) {
                var O = b.stateNode.containerInfo;
                if (G1(O, y))
                  break;
                if (w === N)
                  for (var D = b.return; D !== null; ) {
                    var X = D.tag;
                    if (X === _ || X === N) {
                      var j = D.stateNode.containerInfo;
                      if (G1(j, y))
                        return;
                    }
                    D = D.return;
                  }
                for (; O !== null; ) {
                  var J = _s(O);
                  if (J === null)
                    return;
                  var fe = J.tag;
                  if (fe === L || fe === H) {
                    b = p = J;
                    continue e;
                  }
                  O = O.parentNode;
                }
              }
              b = b.return;
            }
        }
      }
      dc(function() {
        return gk(e, t, a, p);
      });
    }
    function Kd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function yk(e, t, a, l, f) {
      for (var p = t !== null ? t + "Capture" : null, y = l ? p : t, b = [], w = e, O = null; w !== null; ) {
        var D = w, X = D.stateNode, j = D.tag;
        if (j === L && X !== null && (O = X, y !== null)) {
          var J = Kl(w, y);
          J != null && b.push(Kd(w, J, O));
        }
        if (f)
          break;
        w = w.return;
      }
      return b;
    }
    function gh(e, t) {
      for (var a = t + "Capture", l = [], f = e; f !== null; ) {
        var p = f, y = p.stateNode, b = p.tag;
        if (b === L && y !== null) {
          var w = y, O = Kl(f, a);
          O != null && l.unshift(Kd(f, O, w));
          var D = Kl(f, t);
          D != null && l.push(Kd(f, D, w));
        }
        f = f.return;
      }
      return l;
    }
    function Vc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== L);
      return e || null;
    }
    function bk(e, t) {
      for (var a = e, l = t, f = 0, p = a; p; p = Vc(p))
        f++;
      for (var y = 0, b = l; b; b = Vc(b))
        y++;
      for (; f - y > 0; )
        a = Vc(a), f--;
      for (; y - f > 0; )
        l = Vc(l), y--;
      for (var w = f; w--; ) {
        if (a === l || l !== null && a === l.alternate)
          return a;
        a = Vc(a), l = Vc(l);
      }
      return null;
    }
    function Y1(e, t, a, l, f) {
      for (var p = t._reactName, y = [], b = a; b !== null && b !== l; ) {
        var w = b, O = w.alternate, D = w.stateNode, X = w.tag;
        if (O !== null && O === l)
          break;
        if (X === L && D !== null) {
          var j = D;
          if (f) {
            var J = Kl(b, p);
            J != null && y.unshift(Kd(b, J, j));
          } else if (!f) {
            var fe = Kl(b, p);
            fe != null && y.push(Kd(b, fe, j));
          }
        }
        b = b.return;
      }
      y.length !== 0 && e.push({
        event: t,
        listeners: y
      });
    }
    function Sk(e, t, a, l, f) {
      var p = l && f ? bk(l, f) : null;
      l !== null && Y1(e, t, l, p, !1), f !== null && a !== null && Y1(e, a, f, p, !0);
    }
    function Q1(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var xa = !1, Gd = "dangerouslySetInnerHTML", yh = "suppressContentEditableWarning", qd = "suppressHydrationWarning", X1 = "autoFocus", Ts = "children", Rs = "style", bh = "__html", Bc = ac.html, Py, Yd, Sh, Ch, Qd, Z1, Eh, J1, Xd, eC;
    {
      Py = {
        // There are working polyfills for <dialog>. Let people use it.
        dialog: !0,
        // Electron ships a custom <webview> tag to display external web content in
        // an isolated frame and process.
        // This tag is not present in non Electron environments such as JSDom which
        // is often used for testing purposes.
        // @see https://electronjs.org/docs/api/webview-tag
        webview: !0
      }, Sh = function(e, t) {
        Ep(e, t), cy(e, t), Rp(e, t, {
          registrationNameDependencies: he,
          possibleRegistrationNames: Se
        });
      }, J1 = Xe && !document.documentMode;
      var Ck = /\r\n?/g, Ek = /\u0000|\uFFFD/g;
      Xd = function(e) {
        var t = typeof e == "string" ? e : "" + e;
        return t.replace(Ck, `
`).replace(Ek, "");
      }, Ch = function(e, t) {
        if (!xa) {
          var a = Xd(t), l = Xd(e);
          l !== a && (xa = !0, h('Text content did not match. Server: "%s" Client: "%s"', l, a));
        }
      }, Qd = function(e, t, a) {
        if (!xa) {
          var l = Xd(a), f = Xd(t);
          f !== l && (xa = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(f), JSON.stringify(l)));
        }
      }, Z1 = function(e) {
        if (!xa) {
          xa = !0;
          var t = [];
          e.forEach(function(a) {
            t.push(a);
          }), h("Extra attributes from the server: %s", t);
        }
      }, Eh = function(e, t) {
        t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
      }, eC = function(e, t) {
        var a = e.namespaceURI === Bc ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
        return a.innerHTML = t, a.innerHTML;
      };
    }
    function tC(e) {
      return e.nodeType === lo ? e : e.ownerDocument;
    }
    function wk() {
    }
    function wh(e) {
      e.onclick = wk;
    }
    function xk(e, t, a, l, f) {
      for (var p in l)
        if (l.hasOwnProperty(p)) {
          var y = l[p];
          if (p === Rs)
            y && Object.freeze(y), Wf(t, y);
          else if (p === Gd) {
            var b = y ? y[bh] : void 0;
            b != null && op(t, b);
          } else if (p === Ts)
            if (typeof y == "string") {
              var w = e !== "textarea" || y !== "";
              w && oc(t, y);
            } else
              typeof y == "number" && oc(t, "" + y);
          else
            p === yh || p === qd || p === X1 || (he.hasOwnProperty(p) ? y != null && (typeof y != "function" && Eh(p, y), p === "onScroll" && Dn("scroll", t)) : y != null && st(t, p, y, f));
        }
    }
    function Tk(e, t, a, l) {
      for (var f = 0; f < t.length; f += 2) {
        var p = t[f], y = t[f + 1];
        p === Rs ? Wf(e, y) : p === Gd ? op(e, y) : p === Ts ? oc(e, y) : st(e, p, y, l);
      }
    }
    function Rk(e, t, a, l) {
      var f, p = tC(a), y, b = l;
      if (b === Bc && (b = $u(e)), b === Bc) {
        if (f = Da(e, t), !f && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var w = p.createElement("div");
          w.innerHTML = "<script><\/script>";
          var O = w.firstChild;
          y = w.removeChild(O);
        } else if (typeof t.is == "string")
          y = p.createElement(e, {
            is: t.is
          });
        else if (y = p.createElement(e), e === "select") {
          var D = y;
          t.multiple ? D.multiple = !0 : t.size && (D.size = t.size);
        }
      } else
        y = p.createElementNS(b, e);
      return b === Bc && !f && Object.prototype.toString.call(y) === "[object HTMLUnknownElement]" && !Object.prototype.hasOwnProperty.call(Py, e) && (Py[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), y;
    }
    function _k(e, t) {
      return tC(t).createTextNode(e);
    }
    function kk(e, t, a, l) {
      var f = Da(t, a);
      Sh(t, a);
      var p;
      switch (t) {
        case "dialog":
          Dn("cancel", e), Dn("close", e), p = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Dn("load", e), p = a;
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Wd.length; y++)
            Dn(Wd[y], e);
          p = a;
          break;
        case "source":
          Dn("error", e), p = a;
          break;
        case "img":
        case "image":
        case "link":
          Dn("error", e), Dn("load", e), p = a;
          break;
        case "details":
          Dn("toggle", e), p = a;
          break;
        case "input":
          pn(e, a), p = ct(e, a), Dn("invalid", e);
          break;
        case "option":
          ap(e, a), p = Pf(e, a);
          break;
        case "select":
          nc(e, a), p = Iu(e, a), Dn("invalid", e);
          break;
        case "textarea":
          Hu(e, a), p = Hl(e, a), Dn("invalid", e);
          break;
        default:
          p = a;
      }
      switch (lc(t, p), xk(t, e, l, p, f), t) {
        case "input":
          Na(e), Za(e, a, !1);
          break;
        case "textarea":
          Na(e), Xr(e);
          break;
        case "option":
          Yg(e, a);
          break;
        case "select":
          oo(e, a);
          break;
        default:
          typeof p.onClick == "function" && wh(e);
          break;
      }
    }
    function Mk(e, t, a, l, f) {
      Sh(t, l);
      var p = null, y, b;
      switch (t) {
        case "input":
          y = ct(e, a), b = ct(e, l), p = [];
          break;
        case "option":
          y = Pf(e, a), b = Pf(e, l), p = [];
          break;
        case "select":
          y = Iu(e, a), b = Iu(e, l), p = [];
          break;
        case "textarea":
          y = Hl(e, a), b = Hl(e, l), p = [];
          break;
        default:
          y = a, b = l, typeof y.onClick != "function" && typeof b.onClick == "function" && wh(e);
          break;
      }
      lc(t, b);
      var w, O, D = null;
      for (w in y)
        if (!(b.hasOwnProperty(w) || !y.hasOwnProperty(w) || y[w] == null))
          if (w === Rs) {
            var X = y[w];
            for (O in X)
              X.hasOwnProperty(O) && (D || (D = {}), D[O] = "");
          } else
            w === Gd || w === Ts || w === yh || w === qd || w === X1 || (he.hasOwnProperty(w) ? p || (p = []) : (p = p || []).push(w, null));
      for (w in b) {
        var j = b[w], J = y != null ? y[w] : void 0;
        if (!(!b.hasOwnProperty(w) || j === J || j == null && J == null))
          if (w === Rs)
            if (j && Object.freeze(j), J) {
              for (O in J)
                J.hasOwnProperty(O) && (!j || !j.hasOwnProperty(O)) && (D || (D = {}), D[O] = "");
              for (O in j)
                j.hasOwnProperty(O) && J[O] !== j[O] && (D || (D = {}), D[O] = j[O]);
            } else
              D || (p || (p = []), p.push(w, D)), D = j;
          else if (w === Gd) {
            var fe = j ? j[bh] : void 0, _e = J ? J[bh] : void 0;
            fe != null && _e !== fe && (p = p || []).push(w, fe);
          } else
            w === Ts ? (typeof j == "string" || typeof j == "number") && (p = p || []).push(w, "" + j) : w === yh || w === qd || (he.hasOwnProperty(w) ? (j != null && (typeof j != "function" && Eh(w, j), w === "onScroll" && Dn("scroll", e)), !p && J !== j && (p = [])) : typeof j == "object" && j !== null && j.$$typeof === gn ? j.toString() : (p = p || []).push(w, j));
      }
      return D && (oy(D, b[Rs]), (p = p || []).push(Rs, D)), p;
    }
    function Ok(e, t, a, l, f) {
      a === "input" && f.type === "radio" && f.name != null && Cn(e, f);
      var p = Da(a, l), y = Da(a, f);
      switch (Tk(e, t, p, y), a) {
        case "input":
          ro(e, f);
          break;
        case "textarea":
          $f(e, f);
          break;
        case "select":
          If(e, f);
          break;
      }
    }
    function Nk(e) {
      {
        var t = e.toLowerCase();
        return uo.hasOwnProperty(t) && uo[t] || null;
      }
    }
    function Dk(e, t, a, l, f) {
      var p, y;
      switch (Yd = a[qd] === !0, p = Da(t, a), Sh(t, a), t) {
        case "dialog":
          Dn("cancel", e), Dn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Dn("load", e);
          break;
        case "video":
        case "audio":
          for (var b = 0; b < Wd.length; b++)
            Dn(Wd[b], e);
          break;
        case "source":
          Dn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Dn("error", e), Dn("load", e);
          break;
        case "details":
          Dn("toggle", e);
          break;
        case "input":
          pn(e, a), Dn("invalid", e);
          break;
        case "option":
          ap(e, a);
          break;
        case "select":
          nc(e, a), Dn("invalid", e);
          break;
        case "textarea":
          Hu(e, a), Dn("invalid", e);
          break;
      }
      lc(t, a);
      {
        y = /* @__PURE__ */ new Set();
        for (var w = e.attributes, O = 0; O < w.length; O++) {
          var D = w[O].name.toLowerCase();
          switch (D) {
            case "data-reactroot":
              break;
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(w[O].name);
          }
        }
      }
      var X = null;
      for (var j in a)
        if (a.hasOwnProperty(j)) {
          var J = a[j];
          if (j === Ts)
            typeof J == "string" ? e.textContent !== J && (Yd || Ch(e.textContent, J), X = [Ts, J]) : typeof J == "number" && e.textContent !== "" + J && (Yd || Ch(e.textContent, J), X = [Ts, "" + J]);
          else if (he.hasOwnProperty(j))
            J != null && (typeof J != "function" && Eh(j, J), j === "onScroll" && Dn("scroll", e));
          else if (
            // Convince Flow we've calculated it (it's DEV-only in this method.)
            typeof p == "boolean"
          ) {
            var fe = void 0, _e = Qt(j);
            if (!Yd) {
              if (!(j === yh || j === qd || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              j === "value" || j === "checked" || j === "selected")) {
                if (j === Gd) {
                  var lt = e.innerHTML, Pt = J ? J[bh] : void 0;
                  if (Pt != null) {
                    var ht = eC(e, Pt);
                    ht !== lt && Qd(j, lt, ht);
                  }
                } else if (j === Rs) {
                  if (y.delete(j), J1) {
                    var Jt = mp(J);
                    fe = e.getAttribute("style"), Jt !== fe && Qd(j, fe, Jt);
                  }
                } else if (p)
                  y.delete(j.toLowerCase()), fe = rt(e, j, J), J !== fe && Qd(j, fe, J);
                else if (!Zt(j, _e, p) && !Wt(j, J, _e, p)) {
                  var Sn = !1;
                  if (_e !== null)
                    y.delete(_e.attributeName), fe = Mt(e, j, J, _e);
                  else {
                    var Z = l;
                    if (Z === Bc && (Z = $u(t)), Z === Bc)
                      y.delete(j.toLowerCase());
                    else {
                      var ae = Nk(j);
                      ae !== null && ae !== j && (Sn = !0, y.delete(ae)), y.delete(j);
                    }
                    fe = rt(e, j, J);
                  }
                  J !== fe && !Sn && Qd(j, fe, J);
                }
              }
            }
          }
        }
      switch (y.size > 0 && !Yd && Z1(y), t) {
        case "input":
          Na(e), Za(e, a, !0);
          break;
        case "textarea":
          Na(e), Xr(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && wh(e);
          break;
      }
      return X;
    }
    function Ak(e, t) {
      var a = e.nodeValue !== t;
      return a;
    }
    function nC(e, t) {
      Ch(e.nodeValue, t);
    }
    function rC(e, t) {
      {
        if (xa)
          return;
        xa = !0, h("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function aC(e, t) {
      {
        if (xa)
          return;
        xa = !0, h('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function iC(e, t, a) {
      {
        if (xa)
          return;
        xa = !0, h("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function oC(e, t) {
      {
        if (t === "" || xa)
          return;
        xa = !0, h('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Lk(e, t, a) {
      switch (t) {
        case "input":
          Lu(e, a);
          return;
        case "textarea":
          $l(e, a);
          return;
        case "select":
          rc(e, a);
          return;
      }
    }
    var Zd = function() {
    }, Jd = function() {
    };
    {
      var Pk = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], lC = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], zk = lC.concat(["button"]), Ik = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], uC = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Jd = function(e, t) {
        var a = o({}, e || uC), l = {
          tag: t
        };
        return lC.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), zk.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Pk.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = l, t === "form" && (a.formTag = l), t === "a" && (a.aTagInScope = l), t === "button" && (a.buttonTagInScope = l), t === "nobr" && (a.nobrTagInScope = l), t === "p" && (a.pTagInButtonScope = l), t === "li" && (a.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = l), a;
      };
      var Hk = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Ik.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, $k = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, sC = {};
      Zd = function(e, t, a) {
        a = a || uC;
        var l = a.current, f = l && l.tag;
        t != null && (e != null && h("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var p = Hk(e, f) ? null : l, y = p ? null : $k(e, a), b = p || y;
        if (b) {
          var w = b.tag, O = !!p + "|" + e + "|" + w;
          if (!sC[O]) {
            sC[O] = !0;
            var D = e, X = "";
            if (e === "#text" ? /\S/.test(t) ? D = "Text nodes" : (D = "Whitespace text nodes", X = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : D = "<" + e + ">", p) {
              var j = "";
              w === "table" && e === "tr" && (j += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", D, w, X, j);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", D, w);
          }
        }
      };
    }
    var Wc;
    Wc = "suppressHydrationWarning";
    var cC = "$", fC = "/$", zy = "$?", Iy = "$!", Uk = "style", Hy = null, $y = null;
    function dC(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function jk(e) {
      var t, a, l = e.nodeType;
      switch (l) {
        case lo:
        case lp: {
          t = l === lo ? "#document" : "#fragment";
          var f = e.documentElement;
          a = f ? f.namespaceURI : Go(null, "");
          break;
        }
        default: {
          var p = l === $r ? e.parentNode : e, y = p.namespaceURI || null;
          t = p.tagName, a = Go(y, t);
          break;
        }
      }
      {
        var b = t.toLowerCase(), w = Jd(null, b);
        return {
          namespace: a,
          ancestorInfo: w
        };
      }
    }
    function Fk(e, t, a) {
      {
        var l = e, f = Go(l.namespace, t), p = Jd(l.ancestorInfo, t);
        return {
          namespace: f,
          ancestorInfo: p
        };
      }
    }
    function i3(e) {
      return e;
    }
    function Vk(e) {
      Hy = eh(), $y = Q();
      var t = null;
      return Nd(!1), t;
    }
    function Bk(e) {
      F($y), Nd(Hy), Hy = null, $y = null;
    }
    function Wk(e, t, a, l, f) {
      var p;
      {
        var y = l;
        if (Zd(e, null, y.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var b = "" + t.children, w = Jd(y.ancestorInfo, e);
          Zd(null, b, w);
        }
        p = y.namespace;
      }
      var O = Rk(e, t, a, p);
      return Rh(f, O), Vy(O, t), O;
    }
    function Kk(e, t) {
      e.appendChild(t);
    }
    function Gk(e, t, a, l, f) {
      return kk(e, t, a, l), dC(t, a);
    }
    function qk(e, t, a, l, f, p) {
      {
        var y = p;
        if (typeof l.children != typeof a.children && (typeof l.children == "string" || typeof l.children == "number")) {
          var b = "" + l.children, w = Jd(y.ancestorInfo, t);
          Zd(null, b, w);
        }
      }
      return Mk(e, t, a, l);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Yk(e, t, a, l) {
      {
        var f = a;
        Zd(null, e, f.ancestorInfo);
      }
      var p = _k(e, t);
      return Rh(l, p), p;
    }
    var vC = typeof setTimeout == "function" ? setTimeout : void 0, Qk = typeof clearTimeout == "function" ? clearTimeout : void 0, jy = -1;
    function Xk(e, t, a, l) {
      dC(t, a) && e.focus();
    }
    function Zk(e, t, a, l, f, p) {
      Vy(e, f), Ok(e, t, a, l, f);
    }
    function pC(e) {
      oc(e, "");
    }
    function Jk(e, t, a) {
      e.nodeValue = a;
    }
    function eM(e, t) {
      e.appendChild(t);
    }
    function tM(e, t) {
      var a;
      e.nodeType === $r ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var l = e._reactRootContainer;
      l == null && a.onclick === null && wh(a);
    }
    function nM(e, t, a) {
      e.insertBefore(t, a);
    }
    function rM(e, t, a) {
      e.nodeType === $r ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function aM(e, t) {
      e.removeChild(t);
    }
    function iM(e, t) {
      e.nodeType === $r ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function oM(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function lM(e) {
      e.nodeValue = "";
    }
    function uM(e, t) {
      e = e;
      var a = t[Uk], l = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = jf("display", l);
    }
    function sM(e, t) {
      e.nodeValue = t;
    }
    function Fy(e) {
      if (e.nodeType === ga)
        e.textContent = "";
      else if (e.nodeType === lo) {
        var t = e.body;
        t != null && (t.textContent = "");
      }
    }
    function cM(e, t, a) {
      return e.nodeType !== ga || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function fM(e, t) {
      return t === "" || e.nodeType !== _i ? null : e;
    }
    function dM(e) {
      return e.data === zy;
    }
    function vM(e) {
      return e.data === Iy;
    }
    function hC(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ga || t === _i)
          break;
      }
      return e;
    }
    function xh(e) {
      return hC(e.nextSibling);
    }
    function mC(e) {
      return hC(e.firstChild);
    }
    function pM(e, t, a, l, f, p) {
      Rh(p, e), Vy(e, a);
      var y;
      {
        var b = f;
        y = b.namespace;
      }
      return Dk(e, t, a, y);
    }
    function hM(e, t, a) {
      return Rh(a, e), Ak(e, t);
    }
    function mM(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === $r) {
          var l = t.data;
          if (l === fC) {
            if (a === 0)
              return xh(t);
            a--;
          } else
            (l === cC || l === Iy || l === zy) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function gC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === $r) {
          var l = t.data;
          if (l === cC || l === Iy || l === zy) {
            if (a === 0)
              return t;
            a--;
          } else
            l === fC && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function gM(e) {
      dd(e);
    }
    function yM(e) {
      dd(e);
    }
    function bM(e, t, a) {
      nC(t, a);
    }
    function SM(e, t, a, l, f) {
      t[Wc] !== !0 && nC(l, f);
    }
    function CM(e, t) {
      t.nodeType === ga ? rC(e, t) : t.nodeType === $r || aC(e, t);
    }
    function EM(e, t, a, l) {
      t[Wc] !== !0 && (l.nodeType === ga ? rC(a, l) : l.nodeType === $r || aC(a, l));
    }
    function wM(e, t, a) {
      iC(e, t);
    }
    function xM(e, t) {
      oC(e, t);
    }
    function TM(e, t, a, l, f) {
      t[Wc] !== !0 && iC(a, l);
    }
    function RM(e, t, a, l) {
      t[Wc] !== !0 && oC(a, l);
    }
    function _M(e, t, a) {
      t[Wc];
    }
    var kM = 0;
    function MM(e) {
      var t = "r:" + (kM++).toString(36);
      return {
        toString: function() {
          return e(), t;
        },
        valueOf: function() {
          return e(), t;
        }
      };
    }
    function OM(e) {
      return e !== null && typeof e == "object" && e.$$typeof === gn;
    }
    function NM(e) {
      return {
        $$typeof: gn,
        toString: e,
        valueOf: e
      };
    }
    function DM(e) {
      B1(e);
    }
    var Th = Math.random().toString(36).slice(2), ev = "__reactFiber$" + Th, yC = "__reactProps$" + Th, tv = "__reactContainer$" + Th, bC = "__reactEvents$" + Th;
    function Rh(e, t) {
      t[ev] = e;
    }
    function AM(e, t) {
      t[tv] = e;
    }
    function SC(e) {
      e[tv] = null;
    }
    function _h(e) {
      return !!e[tv];
    }
    function _s(e) {
      var t = e[ev];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[tv] || a[ev], t) {
          var l = t.alternate;
          if (t.child !== null || l !== null && l.child !== null)
            for (var f = gC(e); f !== null; ) {
              var p = f[ev];
              if (p)
                return p;
              f = gC(f);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function hu(e) {
      var t = e[ev] || e[tv];
      return t && (t.tag === L || t.tag === H || t.tag === I || t.tag === _) ? t : null;
    }
    function Kc(e) {
      if (e.tag === L || e.tag === H)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function kh(e) {
      return e[yC] || null;
    }
    function Vy(e, t) {
      e[yC] = t;
    }
    function CC(e) {
      var t = e[bC];
      return t === void 0 && (t = e[bC] = /* @__PURE__ */ new Set()), t;
    }
    var EC = {}, wC = d.ReactDebugCurrentFrame;
    function Mh(e) {
      if (e) {
        var t = e._owner, a = zn(e.type, e._source, t ? t.type : null);
        wC.setExtraStackFrame(a);
      } else
        wC.setExtraStackFrame(null);
    }
    function ji(e, t, a, l, f) {
      {
        var p = Function.call.bind(Object.prototype.hasOwnProperty);
        for (var y in e)
          if (p(e, y)) {
            var b = void 0;
            try {
              if (typeof e[y] != "function") {
                var w = Error((l || "React class") + ": " + a + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              b = e[y](t, y, l, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              b = O;
            }
            b && !(b instanceof Error) && (Mh(f), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, y, typeof b), Mh(null)), b instanceof Error && !(b.message in EC) && (EC[b.message] = !0, Mh(f), h("Failed %s type: %s", a, b.message), Mh(null));
          }
      }
    }
    var By = [], Oh;
    Oh = [];
    var gl = -1;
    function mu(e) {
      return {
        current: e
      };
    }
    function Jr(e, t) {
      if (gl < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== Oh[gl] && h("Unexpected Fiber popped."), e.current = By[gl], By[gl] = null, Oh[gl] = null, gl--;
    }
    function ea(e, t, a) {
      gl++, By[gl] = e.current, Oh[gl] = a, e.current = t;
    }
    var Wy;
    Wy = {};
    var Ia = {};
    Object.freeze(Ia);
    var yl = mu(Ia), Do = mu(!1), Ky = Ia;
    function Gc(e, t, a) {
      return a && Ao(t) ? Ky : yl.current;
    }
    function xC(e, t, a) {
      {
        var l = e.stateNode;
        l.__reactInternalMemoizedUnmaskedChildContext = t, l.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function qc(e, t) {
      {
        var a = e.type, l = a.contextTypes;
        if (!l)
          return Ia;
        var f = e.stateNode;
        if (f && f.__reactInternalMemoizedUnmaskedChildContext === t)
          return f.__reactInternalMemoizedMaskedChildContext;
        var p = {};
        for (var y in l)
          p[y] = t[y];
        {
          var b = Re(a) || "Unknown";
          ji(l, p, "context", b);
        }
        return f && xC(e, t, p), p;
      }
    }
    function Nh() {
      return Do.current;
    }
    function Ao(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Dh(e) {
      Jr(Do, e), Jr(yl, e);
    }
    function Gy(e) {
      Jr(Do, e), Jr(yl, e);
    }
    function TC(e, t, a) {
      {
        if (yl.current !== Ia)
          throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ea(yl, t, e), ea(Do, a, e);
      }
    }
    function RC(e, t, a) {
      {
        var l = e.stateNode, f = t.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var p = Re(t) || "Unknown";
            Wy[p] || (Wy[p] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", p, p));
          }
          return a;
        }
        var y = l.getChildContext();
        for (var b in y)
          if (!(b in f))
            throw Error((Re(t) || "Unknown") + '.getChildContext(): key "' + b + '" is not defined in childContextTypes.');
        {
          var w = Re(t) || "Unknown";
          ji(f, y, "child context", w);
        }
        return o({}, a, y);
      }
    }
    function Ah(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ia;
        return Ky = yl.current, ea(yl, a, e), ea(Do, Do.current, e), !0;
      }
    }
    function _C(e, t, a) {
      {
        var l = e.stateNode;
        if (!l)
          throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var f = RC(e, t, Ky);
          l.__reactInternalMemoizedMergedChildContext = f, Jr(Do, e), Jr(yl, e), ea(yl, f, e), ea(Do, a, e);
        } else
          Jr(Do, e), ea(Do, a, e);
      }
    }
    function LM(e) {
      {
        if (!(yc(e) && e.tag === E))
          throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case _:
              return t.stateNode.context;
            case E: {
              var a = t.type;
              if (Ao(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var qy = 0, kC = 1, MC = 2, Lh = null, Lo = null, Yc = !1, PM = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined";
    function zM(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Lh = t.inject(e), Lo = t;
      } catch (a) {
        h("React instrumentation encountered an error: %s.", a);
      }
      return !0;
    }
    function IM(e, t) {
      if (Lo && typeof Lo.onScheduleFiberRoot == "function")
        try {
          Lo.onScheduleFiberRoot(Lh, e, t);
        } catch (a) {
          Yc || (Yc = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function HM(e, t) {
      if (Lo && typeof Lo.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & nn) === nn;
          ke && Lo.onCommitFiberRoot(Lh, e, t, a);
        } catch (l) {
          Yc || (Yc = !0, h("React instrumentation encountered an error: %s", l));
        }
    }
    function $M(e) {
      if (Lo && typeof Lo.onCommitFiberUnmount == "function")
        try {
          Lo.onCommitFiberUnmount(Lh, e);
        } catch (t) {
          Yc || (Yc = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    var UM = s.unstable_runWithPriority, Yy = s.unstable_scheduleCallback, OC = s.unstable_cancelCallback, jM = s.unstable_shouldYield, NC = s.unstable_requestPaint, Qy = s.unstable_now, FM = s.unstable_getCurrentPriorityLevel, Ph = s.unstable_ImmediatePriority, DC = s.unstable_UserBlockingPriority, AC = s.unstable_NormalPriority, LC = s.unstable_LowPriority, PC = s.unstable_IdlePriority;
    if (!(c.__interactionsRef != null && c.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
    var zC = {}, fi = 99, ks = 98, bl = 97, IC = 96, HC = 95, Xy = 90, VM = jM, BM = (
      // Fall back gracefully if we're running an older version of Scheduler.
      NC !== void 0 ? NC : function() {
      }
    ), Sl = null, zh = null, Zy = !1, $C = Qy(), ta = $C < 1e4 ? Qy : function() {
      return Qy() - $C;
    };
    function Qc() {
      switch (FM()) {
        case Ph:
          return fi;
        case DC:
          return ks;
        case AC:
          return bl;
        case LC:
          return IC;
        case PC:
          return HC;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function UC(e) {
      switch (e) {
        case fi:
          return Ph;
        case ks:
          return DC;
        case bl:
          return AC;
        case IC:
          return LC;
        case HC:
          return PC;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function Ms(e, t) {
      var a = UC(e);
      return UM(a, t);
    }
    function gu(e, t, a) {
      var l = UC(e);
      return Yy(l, t, a);
    }
    function WM(e) {
      return Sl === null ? (Sl = [e], zh = Yy(Ph, FC)) : Sl.push(e), zC;
    }
    function jC(e) {
      e !== zC && OC(e);
    }
    function Po() {
      if (zh !== null) {
        var e = zh;
        zh = null, OC(e);
      }
      FC();
    }
    function FC() {
      if (!Zy && Sl !== null) {
        Zy = !0;
        var e = 0;
        try {
          var t = !0, a = Sl;
          Ms(fi, function() {
            for (; e < a.length; e++) {
              var l = a[e];
              do
                l = l(t);
              while (l !== null);
            }
          }), Sl = null;
        } catch (l) {
          throw Sl !== null && (Sl = Sl.slice(e + 1)), Yy(Ph, Po), l;
        } finally {
          Zy = !1;
        }
      }
    }
    var VC = "17.0.2", $n = 0, Qn = 1, Ta = 2, Os = 4, Ha = 8, KM = 16, GM = d.ReactCurrentBatchConfig, qM = 0;
    function YM() {
      return GM.transition;
    }
    var Fi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var QM = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Qn && (t = a), a = a.return;
        return t;
      }, Ns = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, nv = [], rv = [], av = [], iv = [], ov = [], lv = [], Ds = /* @__PURE__ */ new Set();
      Fi.recordUnsafeLifecycleWarnings = function(e, t) {
        Ds.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && nv.push(e), e.mode & Qn && typeof t.UNSAFE_componentWillMount == "function" && rv.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && av.push(e), e.mode & Qn && typeof t.UNSAFE_componentWillReceiveProps == "function" && iv.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && ov.push(e), e.mode & Qn && typeof t.UNSAFE_componentWillUpdate == "function" && lv.push(e));
      }, Fi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        nv.length > 0 && (nv.forEach(function(j) {
          e.add(Re(j.type) || "Component"), Ds.add(j.type);
        }), nv = []);
        var t = /* @__PURE__ */ new Set();
        rv.length > 0 && (rv.forEach(function(j) {
          t.add(Re(j.type) || "Component"), Ds.add(j.type);
        }), rv = []);
        var a = /* @__PURE__ */ new Set();
        av.length > 0 && (av.forEach(function(j) {
          a.add(Re(j.type) || "Component"), Ds.add(j.type);
        }), av = []);
        var l = /* @__PURE__ */ new Set();
        iv.length > 0 && (iv.forEach(function(j) {
          l.add(Re(j.type) || "Component"), Ds.add(j.type);
        }), iv = []);
        var f = /* @__PURE__ */ new Set();
        ov.length > 0 && (ov.forEach(function(j) {
          f.add(Re(j.type) || "Component"), Ds.add(j.type);
        }), ov = []);
        var p = /* @__PURE__ */ new Set();
        if (lv.length > 0 && (lv.forEach(function(j) {
          p.add(Re(j.type) || "Component"), Ds.add(j.type);
        }), lv = []), t.size > 0) {
          var y = Ns(t);
          h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, y);
        }
        if (l.size > 0) {
          var b = Ns(l);
          h(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, b);
        }
        if (p.size > 0) {
          var w = Ns(p);
          h(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, w);
        }
        if (e.size > 0) {
          var O = Ns(e);
          m(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
        if (a.size > 0) {
          var D = Ns(a);
          m(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, D);
        }
        if (f.size > 0) {
          var X = Ns(f);
          m(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, X);
        }
      };
      var Ih = /* @__PURE__ */ new Map(), BC = /* @__PURE__ */ new Set();
      Fi.recordLegacyContextWarning = function(e, t) {
        var a = QM(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!BC.has(e.type)) {
          var l = Ih.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (l === void 0 && (l = [], Ih.set(a, l)), l.push(e));
        }
      }, Fi.flushLegacyContextWarning = function() {
        Ih.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(p) {
              l.add(Re(p.type) || "Component"), BC.add(p.type);
            });
            var f = Ns(l);
            try {
              vn(a), h(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, f);
            } finally {
              Nn();
            }
          }
        });
      }, Fi.discardPendingWarnings = function() {
        nv = [], rv = [], av = [], iv = [], ov = [], lv = [], Ih = /* @__PURE__ */ new Map();
      };
    }
    function Vi(e, t) {
      if (e && e.defaultProps) {
        var a = o({}, t), l = e.defaultProps;
        for (var f in l)
          a[f] === void 0 && (a[f] = l[f]);
        return a;
      }
      return t;
    }
    var Hh = 1073741823, Jy = mu(null), e0;
    e0 = {};
    var $h = null, Xc = null, Uh = null, jh = !1;
    function Fh() {
      $h = null, Xc = null, Uh = null, jh = !1;
    }
    function WC() {
      jh = !0;
    }
    function KC() {
      jh = !1;
    }
    function GC(e, t) {
      var a = e.type._context;
      ea(Jy, a._currentValue, e), a._currentValue = t, a._currentRenderer !== void 0 && a._currentRenderer !== null && a._currentRenderer !== e0 && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), a._currentRenderer = e0;
    }
    function t0(e) {
      var t = Jy.current;
      Jr(Jy, e);
      var a = e.type._context;
      a._currentValue = t;
    }
    function XM(e, t, a) {
      if (i(a, t))
        return 0;
      var l = typeof e._calculateChangedBits == "function" ? e._calculateChangedBits(a, t) : Hh;
      return (l & Hh) !== l && h("calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", l), l | 0;
    }
    function qC(e, t) {
      for (var a = e; a !== null; ) {
        var l = a.alternate;
        if (!xo(a.childLanes, t))
          a.childLanes = tn(a.childLanes, t), l !== null && (l.childLanes = tn(l.childLanes, t));
        else if (l !== null && !xo(l.childLanes, t))
          l.childLanes = tn(l.childLanes, t);
        else
          break;
        a = a.return;
      }
    }
    function ZM(e, t, a, l) {
      var f = e.child;
      for (f !== null && (f.return = e); f !== null; ) {
        var p = void 0, y = f.dependencies;
        if (y !== null) {
          p = f.child;
          for (var b = y.firstContext; b !== null; ) {
            if (b.context === t && b.observedBits & a) {
              if (f.tag === E) {
                var w = yu(kn, dr(l));
                w.tag = Vh, bu(f, w);
              }
              f.lanes = tn(f.lanes, l);
              var O = f.alternate;
              O !== null && (O.lanes = tn(O.lanes, l)), qC(f.return, l), y.lanes = tn(y.lanes, l);
              break;
            }
            b = b.next;
          }
        } else
          f.tag === $ ? p = f.type === e.type ? null : f.child : p = f.child;
        if (p !== null)
          p.return = f;
        else
          for (p = f; p !== null; ) {
            if (p === e) {
              p = null;
              break;
            }
            var D = p.sibling;
            if (D !== null) {
              D.return = p.return, p = D;
              break;
            }
            p = p.return;
          }
        f = p;
      }
    }
    function Zc(e, t) {
      $h = e, Xc = null, Uh = null;
      var a = e.dependencies;
      if (a !== null) {
        var l = a.firstContext;
        l !== null && (wr(a.lanes, t) && sb(), a.firstContext = null);
      }
    }
    function pr(e, t) {
      if (jh && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Uh !== e) {
        if (!(t === !1 || t === 0)) {
          var a;
          typeof t != "number" || t === Hh ? (Uh = e, a = Hh) : a = t;
          var l = {
            context: e,
            observedBits: a,
            next: null
          };
          if (Xc === null) {
            if ($h === null)
              throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            Xc = l, $h.dependencies = {
              lanes: ue,
              firstContext: l,
              responders: null
            };
          } else
            Xc = Xc.next = l;
        }
      }
      return e._currentValue;
    }
    var YC = 0, QC = 1, Vh = 2, n0 = 3, Bh = !1, r0, Wh;
    r0 = !1, Wh = null;
    function a0(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function XC(e, t) {
      var a = t.updateQueue, l = e.updateQueue;
      if (a === l) {
        var f = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          effects: l.effects
        };
        t.updateQueue = f;
      }
    }
    function yu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: YC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function bu(e, t) {
      var a = e.updateQueue;
      if (a !== null) {
        var l = a.shared, f = l.pending;
        f === null ? t.next = t : (t.next = f.next, f.next = t), l.pending = t, Wh === l && !r0 && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), r0 = !0);
      }
    }
    function ZC(e, t) {
      var a = e.updateQueue, l = e.alternate;
      if (l !== null) {
        var f = l.updateQueue;
        if (a === f) {
          var p = null, y = null, b = a.firstBaseUpdate;
          if (b !== null) {
            var w = b;
            do {
              var O = {
                eventTime: w.eventTime,
                lane: w.lane,
                tag: w.tag,
                payload: w.payload,
                callback: w.callback,
                next: null
              };
              y === null ? p = y = O : (y.next = O, y = O), w = w.next;
            } while (w !== null);
            y === null ? p = y = t : (y.next = t, y = t);
          } else
            p = y = t;
          a = {
            baseState: f.baseState,
            firstBaseUpdate: p,
            lastBaseUpdate: y,
            shared: f.shared,
            effects: f.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var D = a.lastBaseUpdate;
      D === null ? a.firstBaseUpdate = t : D.next = t, a.lastBaseUpdate = t;
    }
    function JM(e, t, a, l, f, p) {
      switch (a.tag) {
        case QC: {
          var y = a.payload;
          if (typeof y == "function") {
            WC();
            var b = y.call(p, l, f);
            {
              if (e.mode & Qn) {
                _r();
                try {
                  y.call(p, l, f);
                } finally {
                  xn();
                }
              }
              KC();
            }
            return b;
          }
          return y;
        }
        case n0:
          e.flags = e.flags & ~Aa | nn;
        case YC: {
          var w = a.payload, O;
          if (typeof w == "function") {
            WC(), O = w.call(p, l, f);
            {
              if (e.mode & Qn) {
                _r();
                try {
                  w.call(p, l, f);
                } finally {
                  xn();
                }
              }
              KC();
            }
          } else
            O = w;
          return O == null ? l : o({}, l, O);
        }
        case Vh:
          return Bh = !0, l;
      }
      return l;
    }
    function uv(e, t, a, l) {
      var f = e.updateQueue;
      Bh = !1, Wh = f.shared;
      var p = f.firstBaseUpdate, y = f.lastBaseUpdate, b = f.shared.pending;
      if (b !== null) {
        f.shared.pending = null;
        var w = b, O = w.next;
        w.next = null, y === null ? p = O : y.next = O, y = w;
        var D = e.alternate;
        if (D !== null) {
          var X = D.updateQueue, j = X.lastBaseUpdate;
          j !== y && (j === null ? X.firstBaseUpdate = O : j.next = O, X.lastBaseUpdate = w);
        }
      }
      if (p !== null) {
        var J = f.baseState, fe = ue, _e = null, lt = null, Pt = null, ht = p;
        do {
          var Jt = ht.lane, Sn = ht.eventTime;
          if (xo(l, Jt)) {
            if (Pt !== null) {
              var ae = {
                eventTime: Sn,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: qn,
                tag: ht.tag,
                payload: ht.payload,
                callback: ht.callback,
                next: null
              };
              Pt = Pt.next = ae;
            }
            J = JM(e, f, ht, J, t, a);
            var K = ht.callback;
            if (K !== null) {
              e.flags |= po;
              var be = f.effects;
              be === null ? f.effects = [ht] : be.push(ht);
            }
          } else {
            var Z = {
              eventTime: Sn,
              lane: Jt,
              tag: ht.tag,
              payload: ht.payload,
              callback: ht.callback,
              next: null
            };
            Pt === null ? (lt = Pt = Z, _e = J) : Pt = Pt.next = Z, fe = tn(fe, Jt);
          }
          if (ht = ht.next, ht === null) {
            if (b = f.shared.pending, b === null)
              break;
            var De = b, Ye = De.next;
            De.next = null, ht = Ye, f.lastBaseUpdate = De, f.shared.pending = null;
          }
        } while (!0);
        Pt === null && (_e = J), f.baseState = _e, f.firstBaseUpdate = lt, f.lastBaseUpdate = Pt, Lb(fe), e.lanes = fe, e.memoizedState = J;
      }
      Wh = null;
    }
    function eO(e, t) {
      if (typeof e != "function")
        throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
      e.call(t);
    }
    function JC() {
      Bh = !1;
    }
    function Kh() {
      return Bh;
    }
    function eE(e, t, a) {
      var l = t.effects;
      if (t.effects = null, l !== null)
        for (var f = 0; f < l.length; f++) {
          var p = l[f], y = p.callback;
          y !== null && (p.callback = null, eO(y, a));
        }
    }
    var i0 = {}, tO = Array.isArray, tE = new r.Component().refs, o0, l0, u0, s0, c0, nE, Gh, f0, d0, v0;
    {
      o0 = /* @__PURE__ */ new Set(), l0 = /* @__PURE__ */ new Set(), u0 = /* @__PURE__ */ new Set(), s0 = /* @__PURE__ */ new Set(), f0 = /* @__PURE__ */ new Set(), c0 = /* @__PURE__ */ new Set(), d0 = /* @__PURE__ */ new Set(), v0 = /* @__PURE__ */ new Set();
      var rE = /* @__PURE__ */ new Set();
      Gh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          rE.has(a) || (rE.add(a), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, nE = function(e, t) {
        if (t === void 0) {
          var a = Re(e) || "Component";
          c0.has(a) || (c0.add(a), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(i0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(i0);
    }
    function qh(e, t, a, l) {
      var f = e.memoizedState;
      if (e.mode & Qn) {
        _r();
        try {
          a(l, f);
        } finally {
          xn();
        }
      }
      var p = a(l, f);
      nE(t, p);
      var y = p == null ? f : o({}, f, p);
      if (e.memoizedState = y, e.lanes === ue) {
        var b = e.updateQueue;
        b.baseState = y;
      }
    }
    var p0 = {
      isMounted: zp,
      enqueueSetState: function(e, t, a) {
        var l = Oi(e), f = Ua(), p = wu(l), y = yu(f, p);
        y.payload = t, a != null && (Gh(a, "setState"), y.callback = a), bu(l, y), ra(l, p, f);
      },
      enqueueReplaceState: function(e, t, a) {
        var l = Oi(e), f = Ua(), p = wu(l), y = yu(f, p);
        y.tag = QC, y.payload = t, a != null && (Gh(a, "replaceState"), y.callback = a), bu(l, y), ra(l, p, f);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Oi(e), l = Ua(), f = wu(a), p = yu(l, f);
        p.tag = Vh, t != null && (Gh(t, "forceUpdate"), p.callback = t), bu(a, p), ra(a, f, l);
      }
    };
    function aE(e, t, a, l, f, p, y) {
      var b = e.stateNode;
      if (typeof b.shouldComponentUpdate == "function") {
        if (e.mode & Qn) {
          _r();
          try {
            b.shouldComponentUpdate(l, p, y);
          } finally {
            xn();
          }
        }
        var w = b.shouldComponentUpdate(l, p, y);
        return w === void 0 && h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Re(t) || "Component"), w;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !v(a, l) || !v(f, p) : !0;
    }
    function nO(e, t, a) {
      var l = e.stateNode;
      {
        var f = Re(t) || "Component", p = l.render;
        p || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", f) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", f)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", f), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", f), l.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", f), l.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", f), l.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", f), t.contextType && t.contextTypes && !d0.has(t) && (d0.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", f)), typeof l.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", f), t.prototype && t.prototype.isPureReactComponent && typeof l.shouldComponentUpdate != "undefined" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Re(t) || "A pure component"), typeof l.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", f), typeof l.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", f), typeof l.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", f), typeof l.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", f);
        var y = l.props !== a;
        l.props !== void 0 && y && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", f, f), l.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", f, f), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !u0.has(t) && (u0.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Re(t))), typeof l.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof l.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", f);
        var b = l.state;
        b && (typeof b != "object" || tO(b)) && h("%s.state: must be set to an object or null", f), typeof l.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", f);
      }
    }
    function iE(e, t) {
      t.updater = p0, e.stateNode = t, nd(t, e), t._reactInternalInstance = i0;
    }
    function oE(e, t, a) {
      var l = !1, f = Ia, p = Ia, y = t.contextType;
      if ("contextType" in t) {
        var b = (
          // Allow null for conditional declaration
          y === null || y !== void 0 && y.$$typeof === jt && y._context === void 0
        );
        if (!b && !v0.has(t)) {
          v0.add(t);
          var w = "";
          y === void 0 ? w = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof y != "object" ? w = " However, it is set to a " + typeof y + "." : y.$$typeof === dn ? w = " Did you accidentally pass the Context.Provider instead?" : y._context !== void 0 ? w = " Did you accidentally pass the Context.Consumer instead?" : w = " However, it is set to an object with keys {" + Object.keys(y).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Re(t) || "Component", w);
        }
      }
      if (typeof y == "object" && y !== null)
        p = pr(y);
      else {
        f = Gc(e, t, !0);
        var O = t.contextTypes;
        l = O != null, p = l ? qc(e, f) : Ia;
      }
      if (e.mode & Qn) {
        _r();
        try {
          new t(a, p);
        } finally {
          xn();
        }
      }
      var D = new t(a, p), X = e.memoizedState = D.state !== null && D.state !== void 0 ? D.state : null;
      iE(e, D);
      {
        if (typeof t.getDerivedStateFromProps == "function" && X === null) {
          var j = Re(t) || "Component";
          l0.has(j) || (l0.add(j), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", j, D.state === null ? "null" : "undefined", j));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof D.getSnapshotBeforeUpdate == "function") {
          var J = null, fe = null, _e = null;
          if (typeof D.componentWillMount == "function" && D.componentWillMount.__suppressDeprecationWarning !== !0 ? J = "componentWillMount" : typeof D.UNSAFE_componentWillMount == "function" && (J = "UNSAFE_componentWillMount"), typeof D.componentWillReceiveProps == "function" && D.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? fe = "componentWillReceiveProps" : typeof D.UNSAFE_componentWillReceiveProps == "function" && (fe = "UNSAFE_componentWillReceiveProps"), typeof D.componentWillUpdate == "function" && D.componentWillUpdate.__suppressDeprecationWarning !== !0 ? _e = "componentWillUpdate" : typeof D.UNSAFE_componentWillUpdate == "function" && (_e = "UNSAFE_componentWillUpdate"), J !== null || fe !== null || _e !== null) {
            var lt = Re(t) || "Component", Pt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            s0.has(lt) || (s0.add(lt), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, lt, Pt, J !== null ? `
  ` + J : "", fe !== null ? `
  ` + fe : "", _e !== null ? `
  ` + _e : ""));
          }
        }
      }
      return l && xC(e, f, p), D;
    }
    function rO(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Re(e.type) || "Component"), p0.enqueueReplaceState(t, t.state, null));
    }
    function lE(e, t, a, l) {
      var f = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== f) {
        {
          var p = Re(e.type) || "Component";
          o0.has(p) || (o0.add(p), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", p));
        }
        p0.enqueueReplaceState(t, t.state, null);
      }
    }
    function h0(e, t, a, l) {
      nO(e, t, a);
      var f = e.stateNode;
      f.props = a, f.state = e.memoizedState, f.refs = tE, a0(e);
      var p = t.contextType;
      if (typeof p == "object" && p !== null)
        f.context = pr(p);
      else {
        var y = Gc(e, t, !0);
        f.context = qc(e, y);
      }
      {
        if (f.state === a) {
          var b = Re(t) || "Component";
          f0.has(b) || (f0.add(b), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", b));
        }
        e.mode & Qn && Fi.recordLegacyContextWarning(e, f), Fi.recordUnsafeLifecycleWarnings(e, f);
      }
      uv(e, a, f, l), f.state = e.memoizedState;
      var w = t.getDerivedStateFromProps;
      typeof w == "function" && (qh(e, t, w, a), f.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof f.getSnapshotBeforeUpdate != "function" && (typeof f.UNSAFE_componentWillMount == "function" || typeof f.componentWillMount == "function") && (rO(e, f), uv(e, a, f, l), f.state = e.memoizedState), typeof f.componentDidMount == "function" && (e.flags |= vt);
    }
    function aO(e, t, a, l) {
      var f = e.stateNode, p = e.memoizedProps;
      f.props = p;
      var y = f.context, b = t.contextType, w = Ia;
      if (typeof b == "object" && b !== null)
        w = pr(b);
      else {
        var O = Gc(e, t, !0);
        w = qc(e, O);
      }
      var D = t.getDerivedStateFromProps, X = typeof D == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      !X && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (p !== a || y !== w) && lE(e, f, a, w), JC();
      var j = e.memoizedState, J = f.state = j;
      if (uv(e, a, f, l), J = e.memoizedState, p === a && j === J && !Nh() && !Kh())
        return typeof f.componentDidMount == "function" && (e.flags |= vt), !1;
      typeof D == "function" && (qh(e, t, D, a), J = e.memoizedState);
      var fe = Kh() || aE(e, t, p, a, j, J, w);
      return fe ? (!X && (typeof f.UNSAFE_componentWillMount == "function" || typeof f.componentWillMount == "function") && (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (e.flags |= vt)) : (typeof f.componentDidMount == "function" && (e.flags |= vt), e.memoizedProps = a, e.memoizedState = J), f.props = a, f.state = J, f.context = w, fe;
    }
    function iO(e, t, a, l, f) {
      var p = t.stateNode;
      XC(e, t);
      var y = t.memoizedProps, b = t.type === t.elementType ? y : Vi(t.type, y);
      p.props = b;
      var w = t.pendingProps, O = p.context, D = a.contextType, X = Ia;
      if (typeof D == "object" && D !== null)
        X = pr(D);
      else {
        var j = Gc(t, a, !0);
        X = qc(t, j);
      }
      var J = a.getDerivedStateFromProps, fe = typeof J == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      !fe && (typeof p.UNSAFE_componentWillReceiveProps == "function" || typeof p.componentWillReceiveProps == "function") && (y !== w || O !== X) && lE(t, p, l, X), JC();
      var _e = t.memoizedState, lt = p.state = _e;
      if (uv(t, l, p, f), lt = t.memoizedState, y === w && _e === lt && !Nh() && !Kh())
        return typeof p.componentDidUpdate == "function" && (y !== e.memoizedProps || _e !== e.memoizedState) && (t.flags |= vt), typeof p.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || _e !== e.memoizedState) && (t.flags |= ei), !1;
      typeof J == "function" && (qh(t, a, J, l), lt = t.memoizedState);
      var Pt = Kh() || aE(t, a, b, l, _e, lt, X);
      return Pt ? (!fe && (typeof p.UNSAFE_componentWillUpdate == "function" || typeof p.componentWillUpdate == "function") && (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(l, lt, X), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(l, lt, X)), typeof p.componentDidUpdate == "function" && (t.flags |= vt), typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= ei)) : (typeof p.componentDidUpdate == "function" && (y !== e.memoizedProps || _e !== e.memoizedState) && (t.flags |= vt), typeof p.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || _e !== e.memoizedState) && (t.flags |= ei), t.memoizedProps = l, t.memoizedState = lt), p.props = l, p.state = lt, p.context = X, Pt;
    }
    var m0, g0, y0, b0, S0, uE = function(e, t) {
    };
    m0 = !1, g0 = !1, y0 = {}, b0 = {}, S0 = {}, uE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Re(t.type) || "Component";
        b0[a] || (b0[a] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    var Yh = Array.isArray;
    function sv(e, t, a) {
      var l = a.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & Qn || ze) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var f = Re(e.type) || "Component";
          y0[f] || (h('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), y0[f] = !0);
        }
        if (a._owner) {
          var p = a._owner, y;
          if (p) {
            var b = p;
            if (b.tag !== E)
              throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            y = b.stateNode;
          }
          if (!y)
            throw Error("Missing owner for string ref " + l + ". This error is likely caused by a bug in React. Please file an issue.");
          var w = "" + l;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === w)
            return t.ref;
          var O = function(D) {
            var X = y.refs;
            X === tE && (X = y.refs = {}), D === null ? delete X[w] : X[w] = D;
          };
          return O._stringRef = w, O;
        } else {
          if (typeof l != "string")
            throw Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw Error("Element ref was specified as a string (" + l + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return l;
    }
    function Qh(e, t) {
      if (e.type !== "textarea")
        throw Error("Objects are not valid as a React child (found: " + (Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Xh(e) {
      {
        var t = Re(e.type) || "Component";
        if (S0[t])
          return;
        S0[t] = !0, h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function sE(e) {
      function t(Z, ae) {
        if (e) {
          var K = Z.lastEffect;
          K !== null ? (K.nextEffect = ae, Z.lastEffect = ae) : Z.firstEffect = Z.lastEffect = ae, ae.nextEffect = null, ae.flags = Rn;
        }
      }
      function a(Z, ae) {
        if (!e)
          return null;
        for (var K = ae; K !== null; )
          t(Z, K), K = K.sibling;
        return null;
      }
      function l(Z, ae) {
        for (var K = /* @__PURE__ */ new Map(), be = ae; be !== null; )
          be.key !== null ? K.set(be.key, be) : K.set(be.index, be), be = be.sibling;
        return K;
      }
      function f(Z, ae) {
        var K = Vs(Z, ae);
        return K.index = 0, K.sibling = null, K;
      }
      function p(Z, ae, K) {
        if (Z.index = K, !e)
          return ae;
        var be = Z.alternate;
        if (be !== null) {
          var De = be.index;
          return De < ae ? (Z.flags = Tt, ae) : De;
        } else
          return Z.flags = Tt, ae;
      }
      function y(Z) {
        return e && Z.alternate === null && (Z.flags = Tt), Z;
      }
      function b(Z, ae, K, be) {
        if (ae === null || ae.tag !== H) {
          var De = qb(K, Z.mode, be);
          return De.return = Z, De;
        } else {
          var Ye = f(ae, K);
          return Ye.return = Z, Ye;
        }
      }
      function w(Z, ae, K, be) {
        if (ae !== null && (ae.elementType === K.type || // Keep this check inline so it only runs on the false path:
        Vw(ae, K))) {
          var De = f(ae, K.props);
          return De.ref = sv(Z, ae, K), De.return = Z, De._debugSource = K._source, De._debugOwner = K._owner, De;
        }
        var Ye = Kb(K, Z.mode, be);
        return Ye.ref = sv(Z, ae, K), Ye.return = Z, Ye;
      }
      function O(Z, ae, K, be) {
        if (ae === null || ae.tag !== N || ae.stateNode.containerInfo !== K.containerInfo || ae.stateNode.implementation !== K.implementation) {
          var De = Yb(K, Z.mode, be);
          return De.return = Z, De;
        } else {
          var Ye = f(ae, K.children || []);
          return Ye.return = Z, Ye;
        }
      }
      function D(Z, ae, K, be, De) {
        if (ae === null || ae.tag !== V) {
          var Ye = Bs(K, Z.mode, be, De);
          return Ye.return = Z, Ye;
        } else {
          var Yt = f(ae, K);
          return Yt.return = Z, Yt;
        }
      }
      function X(Z, ae, K) {
        if (typeof ae == "string" || typeof ae == "number") {
          var be = qb("" + ae, Z.mode, K);
          return be.return = Z, be;
        }
        if (typeof ae == "object" && ae !== null) {
          switch (ae.$$typeof) {
            case on: {
              var De = Kb(ae, Z.mode, K);
              return De.ref = sv(Z, null, ae), De.return = Z, De;
            }
            case Ot: {
              var Ye = Yb(ae, Z.mode, K);
              return Ye.return = Z, Ye;
            }
          }
          if (Yh(ae) || ln(ae)) {
            var Yt = Bs(ae, Z.mode, K, null);
            return Yt.return = Z, Yt;
          }
          Qh(Z, ae);
        }
        return typeof ae == "function" && Xh(Z), null;
      }
      function j(Z, ae, K, be) {
        var De = ae !== null ? ae.key : null;
        if (typeof K == "string" || typeof K == "number")
          return De !== null ? null : b(Z, ae, "" + K, be);
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case on:
              return K.key === De ? K.type === Ut ? D(Z, ae, K.props.children, be, De) : w(Z, ae, K, be) : null;
            case Ot:
              return K.key === De ? O(Z, ae, K, be) : null;
          }
          if (Yh(K) || ln(K))
            return De !== null ? null : D(Z, ae, K, be, null);
          Qh(Z, K);
        }
        return typeof K == "function" && Xh(Z), null;
      }
      function J(Z, ae, K, be, De) {
        if (typeof be == "string" || typeof be == "number") {
          var Ye = Z.get(K) || null;
          return b(ae, Ye, "" + be, De);
        }
        if (typeof be == "object" && be !== null) {
          switch (be.$$typeof) {
            case on: {
              var Yt = Z.get(be.key === null ? K : be.key) || null;
              return be.type === Ut ? D(ae, Yt, be.props.children, De, be.key) : w(ae, Yt, be, De);
            }
            case Ot: {
              var Mn = Z.get(be.key === null ? K : be.key) || null;
              return O(ae, Mn, be, De);
            }
          }
          if (Yh(be) || ln(be)) {
            var Un = Z.get(K) || null;
            return D(ae, Un, be, De, null);
          }
          Qh(ae, be);
        }
        return typeof be == "function" && Xh(ae), null;
      }
      function fe(Z, ae, K) {
        {
          if (typeof Z != "object" || Z === null)
            return ae;
          switch (Z.$$typeof) {
            case on:
            case Ot:
              uE(Z, K);
              var be = Z.key;
              if (typeof be != "string")
                break;
              if (ae === null) {
                ae = /* @__PURE__ */ new Set(), ae.add(be);
                break;
              }
              if (!ae.has(be)) {
                ae.add(be);
                break;
              }
              h("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", be);
              break;
          }
        }
        return ae;
      }
      function _e(Z, ae, K, be) {
        for (var De = null, Ye = 0; Ye < K.length; Ye++) {
          var Yt = K[Ye];
          De = fe(Yt, De, Z);
        }
        for (var Mn = null, Un = null, sn = ae, hr = 0, rn = 0, jn = null; sn !== null && rn < K.length; rn++) {
          sn.index > rn ? (jn = sn, sn = null) : jn = sn.sibling;
          var Ar = j(Z, sn, K[rn], be);
          if (Ar === null) {
            sn === null && (sn = jn);
            break;
          }
          e && sn && Ar.alternate === null && t(Z, sn), hr = p(Ar, hr, rn), Un === null ? Mn = Ar : Un.sibling = Ar, Un = Ar, sn = jn;
        }
        if (rn === K.length)
          return a(Z, sn), Mn;
        if (sn === null) {
          for (; rn < K.length; rn++) {
            var nr = X(Z, K[rn], be);
            nr !== null && (hr = p(nr, hr, rn), Un === null ? Mn = nr : Un.sibling = nr, Un = nr);
          }
          return Mn;
        }
        for (var jo = l(Z, sn); rn < K.length; rn++) {
          var rr = J(jo, Z, rn, K[rn], be);
          rr !== null && (e && rr.alternate !== null && jo.delete(rr.key === null ? rn : rr.key), hr = p(rr, hr, rn), Un === null ? Mn = rr : Un.sibling = rr, Un = rr);
        }
        return e && jo.forEach(function(Fo) {
          return t(Z, Fo);
        }), Mn;
      }
      function lt(Z, ae, K, be) {
        var De = ln(K);
        if (typeof De != "function")
          throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          K[Symbol.toStringTag] === "Generator" && (g0 || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), g0 = !0), K.entries === De && (m0 || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), m0 = !0);
          var Ye = De.call(K);
          if (Ye)
            for (var Yt = null, Mn = Ye.next(); !Mn.done; Mn = Ye.next()) {
              var Un = Mn.value;
              Yt = fe(Un, Yt, Z);
            }
        }
        var sn = De.call(K);
        if (sn == null)
          throw Error("An iterable object provided no iterator.");
        for (var hr = null, rn = null, jn = ae, Ar = 0, nr = 0, jo = null, rr = sn.next(); jn !== null && !rr.done; nr++, rr = sn.next()) {
          jn.index > nr ? (jo = jn, jn = null) : jo = jn.sibling;
          var Fo = j(Z, jn, rr.value, be);
          if (Fo === null) {
            jn === null && (jn = jo);
            break;
          }
          e && jn && Fo.alternate === null && t(Z, jn), Ar = p(Fo, Ar, nr), rn === null ? hr = Fo : rn.sibling = Fo, rn = Fo, jn = jo;
        }
        if (rr.done)
          return a(Z, jn), hr;
        if (jn === null) {
          for (; !rr.done; nr++, rr = sn.next()) {
            var Ws = X(Z, rr.value, be);
            Ws !== null && (Ar = p(Ws, Ar, nr), rn === null ? hr = Ws : rn.sibling = Ws, rn = Ws);
          }
          return hr;
        }
        for (var nS = l(Z, jn); !rr.done; nr++, rr = sn.next()) {
          var Ru = J(nS, Z, nr, rr.value, be);
          Ru !== null && (e && Ru.alternate !== null && nS.delete(Ru.key === null ? nr : Ru.key), Ar = p(Ru, Ar, nr), rn === null ? hr = Ru : rn.sibling = Ru, rn = Ru);
        }
        return e && nS.forEach(function(aD) {
          return t(Z, aD);
        }), hr;
      }
      function Pt(Z, ae, K, be) {
        if (ae !== null && ae.tag === H) {
          a(Z, ae.sibling);
          var De = f(ae, K);
          return De.return = Z, De;
        }
        a(Z, ae);
        var Ye = qb(K, Z.mode, be);
        return Ye.return = Z, Ye;
      }
      function ht(Z, ae, K, be) {
        for (var De = K.key, Ye = ae; Ye !== null; ) {
          if (Ye.key === De) {
            switch (Ye.tag) {
              case V: {
                if (K.type === Ut) {
                  a(Z, Ye.sibling);
                  var Yt = f(Ye, K.props.children);
                  return Yt.return = Z, Yt._debugSource = K._source, Yt._debugOwner = K._owner, Yt;
                }
                break;
              }
              case se:
              default: {
                if (Ye.elementType === K.type || // Keep this check inline so it only runs on the false path:
                Vw(Ye, K)) {
                  a(Z, Ye.sibling);
                  var Mn = f(Ye, K.props);
                  return Mn.ref = sv(Z, Ye, K), Mn.return = Z, Mn._debugSource = K._source, Mn._debugOwner = K._owner, Mn;
                }
                break;
              }
            }
            a(Z, Ye);
            break;
          } else
            t(Z, Ye);
          Ye = Ye.sibling;
        }
        if (K.type === Ut) {
          var Un = Bs(K.props.children, Z.mode, be, K.key);
          return Un.return = Z, Un;
        } else {
          var sn = Kb(K, Z.mode, be);
          return sn.ref = sv(Z, ae, K), sn.return = Z, sn;
        }
      }
      function Jt(Z, ae, K, be) {
        for (var De = K.key, Ye = ae; Ye !== null; ) {
          if (Ye.key === De)
            if (Ye.tag === N && Ye.stateNode.containerInfo === K.containerInfo && Ye.stateNode.implementation === K.implementation) {
              a(Z, Ye.sibling);
              var Yt = f(Ye, K.children || []);
              return Yt.return = Z, Yt;
            } else {
              a(Z, Ye);
              break;
            }
          else
            t(Z, Ye);
          Ye = Ye.sibling;
        }
        var Mn = Yb(K, Z.mode, be);
        return Mn.return = Z, Mn;
      }
      function Sn(Z, ae, K, be) {
        var De = typeof K == "object" && K !== null && K.type === Ut && K.key === null;
        De && (K = K.props.children);
        var Ye = typeof K == "object" && K !== null;
        if (Ye)
          switch (K.$$typeof) {
            case on:
              return y(ht(Z, ae, K, be));
            case Ot:
              return y(Jt(Z, ae, K, be));
          }
        if (typeof K == "string" || typeof K == "number")
          return y(Pt(Z, ae, "" + K, be));
        if (Yh(K))
          return _e(Z, ae, K, be);
        if (ln(K))
          return lt(Z, ae, K, be);
        if (Ye && Qh(Z, K), typeof K == "function" && Xh(Z), typeof K == "undefined" && !De)
          switch (Z.tag) {
            case E: {
              var Yt = Z.stateNode;
              if (Yt.render._isMockFunction)
                break;
            }
            case se:
            case x:
            case z:
            case q:
              throw Error((Re(Z.type) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
          }
        return a(Z, ae);
      }
      return Sn;
    }
    var Zh = sE(!0), cE = sE(!1);
    function oO(e, t) {
      if (!(e === null || t.child === e.child))
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, l = Vs(a, a.pendingProps);
        for (t.child = l, l.return = t; a.sibling !== null; )
          a = a.sibling, l = l.sibling = Vs(a, a.pendingProps), l.return = t;
        l.sibling = null;
      }
    }
    function lO(e, t) {
      for (var a = e.child; a !== null; )
        SN(a, t), a = a.sibling;
    }
    var cv = {}, Su = mu(cv), fv = mu(cv), Jh = mu(cv);
    function em(e) {
      if (e === cv)
        throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function fE() {
      var e = em(Jh.current);
      return e;
    }
    function C0(e, t) {
      ea(Jh, t, e), ea(fv, e, e), ea(Su, cv, e);
      var a = jk(t);
      Jr(Su, e), ea(Su, a, e);
    }
    function Jc(e) {
      Jr(Su, e), Jr(fv, e), Jr(Jh, e);
    }
    function E0() {
      var e = em(Su.current);
      return e;
    }
    function dE(e) {
      em(Jh.current);
      var t = em(Su.current), a = Fk(t, e.type);
      t !== a && (ea(fv, e, e), ea(Su, a, e));
    }
    function w0(e) {
      fv.current === e && (Jr(Su, e), Jr(fv, e));
    }
    var uO = 0, vE = 1, x0 = 1, dv = 2, Bi = mu(uO);
    function tm(e, t) {
      return (e & t) !== 0;
    }
    function vv(e) {
      return e & vE;
    }
    function T0(e, t) {
      return e & vE | t;
    }
    function sO(e, t) {
      return e | t;
    }
    function As(e, t) {
      ea(Bi, t, e);
    }
    function ef(e) {
      Jr(Bi, e);
    }
    function cO(e, t) {
      var a = e.memoizedState;
      if (a !== null)
        return a.dehydrated !== null;
      var l = e.memoizedProps;
      return l.fallback === void 0 ? !1 : l.unstable_avoidThisFallback !== !0 ? !0 : !t;
    }
    function nm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === I) {
          var a = t.memoizedState;
          if (a !== null) {
            var l = a.dehydrated;
            if (l === null || dM(l) || vM(l))
              return t;
          }
        } else if (t.tag === ge && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var f = (t.flags & nn) !== un;
          if (f)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var R0 = (
      /*  */
      0
    ), tf = (
      /* */
      1
    ), nf = (
      /*    */
      2
    ), pv = (
      /*   */
      4
    ), di = null, Ls = null, Cu = !1;
    function fO(e) {
      var t = e.stateNode.containerInfo;
      return Ls = mC(t), di = e, Cu = !0, !0;
    }
    function pE(e, t) {
      switch (e.tag) {
        case _:
          CM(e.stateNode.containerInfo, t);
          break;
        case L:
          EM(e.type, e.memoizedProps, e.stateNode, t);
          break;
      }
      var a = RN();
      a.stateNode = t, a.return = e, a.flags = Rn, e.lastEffect !== null ? (e.lastEffect.nextEffect = a, e.lastEffect = a) : e.firstEffect = e.lastEffect = a;
    }
    function hE(e, t) {
      switch (t.flags = t.flags & ~ba | Tt, e.tag) {
        case _: {
          var a = e.stateNode.containerInfo;
          switch (t.tag) {
            case L:
              var l = t.type;
              t.pendingProps, wM(a, l);
              break;
            case H:
              var f = t.pendingProps;
              xM(a, f);
              break;
          }
          break;
        }
        case L: {
          var p = e.type, y = e.memoizedProps, b = e.stateNode;
          switch (t.tag) {
            case L:
              var w = t.type;
              t.pendingProps, TM(p, y, b, w);
              break;
            case H:
              var O = t.pendingProps;
              RM(p, y, b, O);
              break;
            case I:
              _M(p, y);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
    function mE(e, t) {
      switch (e.tag) {
        case L: {
          var a = e.type;
          e.pendingProps;
          var l = cM(t, a);
          return l !== null ? (e.stateNode = l, !0) : !1;
        }
        case H: {
          var f = e.pendingProps, p = fM(t, f);
          return p !== null ? (e.stateNode = p, !0) : !1;
        }
        case I:
          return !1;
        default:
          return !1;
      }
    }
    function _0(e) {
      if (Cu) {
        var t = Ls;
        if (!t) {
          hE(di, e), Cu = !1, di = e;
          return;
        }
        var a = t;
        if (!mE(e, t)) {
          if (t = xh(a), !t || !mE(e, t)) {
            hE(di, e), Cu = !1, di = e;
            return;
          }
          pE(di, a);
        }
        di = e, Ls = mC(t);
      }
    }
    function dO(e, t, a) {
      var l = e.stateNode, f = pM(l, e.type, e.memoizedProps, t, a, e);
      return e.updateQueue = f, f !== null;
    }
    function vO(e) {
      var t = e.stateNode, a = e.memoizedProps, l = hM(t, a, e);
      if (l) {
        var f = di;
        if (f !== null)
          switch (f.tag) {
            case _: {
              var p = f.stateNode.containerInfo;
              bM(p, t, a);
              break;
            }
            case L: {
              var y = f.type, b = f.memoizedProps, w = f.stateNode;
              SM(y, b, w, t, a);
              break;
            }
          }
      }
      return l;
    }
    function pO(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return mM(a);
    }
    function gE(e) {
      for (var t = e.return; t !== null && t.tag !== L && t.tag !== _ && t.tag !== I; )
        t = t.return;
      di = t;
    }
    function rm(e) {
      if (e !== di)
        return !1;
      if (!Cu)
        return gE(e), Cu = !0, !1;
      var t = e.type;
      if (e.tag !== L || t !== "head" && t !== "body" && !Uy(t, e.memoizedProps))
        for (var a = Ls; a; )
          pE(e, a), a = xh(a);
      return gE(e), e.tag === I ? Ls = pO(e) : Ls = di ? xh(e.stateNode) : null, !0;
    }
    function k0() {
      di = null, Ls = null, Cu = !1;
    }
    function M0() {
      return Cu;
    }
    var hv = [], O0;
    O0 = {};
    function hO(e) {
      hv.push(e);
    }
    function N0() {
      for (var e = 0; e < hv.length; e++) {
        var t = hv[e];
        t._workInProgressVersionPrimary = null;
      }
      hv.length = 0;
    }
    function mO(e) {
      return e._workInProgressVersionPrimary;
    }
    function yE(e, t) {
      e._workInProgressVersionPrimary = t, hv.push(e);
    }
    function gO(e) {
      e._currentPrimaryRenderer == null ? e._currentPrimaryRenderer = O0 : e._currentPrimaryRenderer !== O0 && h("Detected multiple renderers concurrently rendering the same mutable source. This is currently unsupported.");
    }
    var Pe = d.ReactCurrentDispatcher, vi = d.ReactCurrentBatchConfig, D0, A0;
    A0 = {}, D0 = /* @__PURE__ */ new Set();
    var mv = ue, En = null, na = null, Dr = null, am = !1, gv = !1, yO = 25, ve = null, pi = null, Eu = -1, L0 = !1;
    function bn() {
      {
        var e = ve;
        pi === null ? pi = [e] : pi.push(e);
      }
    }
    function Fe() {
      {
        var e = ve;
        pi !== null && (Eu++, pi[Eu] !== e && bO(e));
      }
    }
    function yv(e) {
      e != null && !Array.isArray(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ve, typeof e);
    }
    function bO(e) {
      {
        var t = Re(En.type);
        if (!D0.has(t) && (D0.add(t), pi !== null)) {
          for (var a = "", l = 30, f = 0; f <= Eu; f++) {
            for (var p = pi[f], y = f === Eu ? e : p, b = f + 1 + ". " + p; b.length < l; )
              b += " ";
            b += y + `
`, a += b;
          }
          h(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Ra() {
      throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function P0(e, t) {
      if (L0)
        return !1;
      if (t === null)
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ve), !1;
      e.length !== t.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ve, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!i(e[a], t[a]))
          return !1;
      return !0;
    }
    function rf(e, t, a, l, f, p) {
      mv = p, En = t, pi = e !== null ? e._debugHookTypes : null, Eu = -1, L0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ue, e !== null && e.memoizedState !== null ? Pe.current = AE : pi !== null ? Pe.current = DE : Pe.current = NE;
      var y = a(l, f);
      if (gv) {
        var b = 0;
        do {
          if (gv = !1, !(b < yO))
            throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          b += 1, L0 = !1, na = null, Dr = null, t.updateQueue = null, Eu = -1, Pe.current = LE, y = a(l, f);
        } while (gv);
      }
      Pe.current = mm, t._debugHookTypes = pi;
      var w = na !== null && na.next !== null;
      if (mv = ue, En = null, na = null, Dr = null, ve = null, pi = null, Eu = -1, am = !1, w)
        throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return y;
    }
    function bE(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags &= ~(ql | vt), e.lanes = uu(e.lanes, a);
    }
    function SE() {
      if (Pe.current = mm, am) {
        for (var e = En.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        am = !1;
      }
      mv = ue, En = null, na = null, Dr = null, pi = null, Eu = -1, ve = null, hm = !1, gv = !1;
    }
    function Ps() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Dr === null ? En.memoizedState = Dr = e : Dr = Dr.next = e, Dr;
    }
    function zs() {
      var e;
      if (na === null) {
        var t = En.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = na.next;
      var a;
      if (Dr === null ? a = En.memoizedState : a = Dr.next, a !== null)
        Dr = a, a = Dr.next, na = e;
      else {
        if (e === null)
          throw Error("Rendered more hooks than during the previous render.");
        na = e;
        var l = {
          memoizedState: na.memoizedState,
          baseState: na.baseState,
          baseQueue: na.baseQueue,
          queue: na.queue,
          next: null
        };
        Dr === null ? En.memoizedState = Dr = l : Dr = Dr.next = l;
      }
      return Dr;
    }
    function SO() {
      return {
        lastEffect: null
      };
    }
    function im(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function z0(e, t, a) {
      var l = Ps(), f;
      a !== void 0 ? f = a(t) : f = t, l.memoizedState = l.baseState = f;
      var p = l.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: f
      }, y = p.dispatch = Y0.bind(null, En, p);
      return [l.memoizedState, y];
    }
    function I0(e, t, a) {
      var l = zs(), f = l.queue;
      if (f === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      f.lastRenderedReducer = e;
      var p = na, y = p.baseQueue, b = f.pending;
      if (b !== null) {
        if (y !== null) {
          var w = y.next, O = b.next;
          y.next = O, b.next = w;
        }
        p.baseQueue !== y && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), p.baseQueue = y = b, f.pending = null;
      }
      if (y !== null) {
        var D = y.next, X = p.baseState, j = null, J = null, fe = null, _e = D;
        do {
          var lt = _e.lane;
          if (xo(mv, lt)) {
            if (fe !== null) {
              var ht = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: qn,
                action: _e.action,
                eagerReducer: _e.eagerReducer,
                eagerState: _e.eagerState,
                next: null
              };
              fe = fe.next = ht;
            }
            if (_e.eagerReducer === e)
              X = _e.eagerState;
            else {
              var Jt = _e.action;
              X = e(X, Jt);
            }
          } else {
            var Pt = {
              lane: lt,
              action: _e.action,
              eagerReducer: _e.eagerReducer,
              eagerState: _e.eagerState,
              next: null
            };
            fe === null ? (J = fe = Pt, j = X) : fe = fe.next = Pt, En.lanes = tn(En.lanes, lt), Lb(lt);
          }
          _e = _e.next;
        } while (_e !== null && _e !== D);
        fe === null ? j = X : fe.next = J, i(X, l.memoizedState) || sb(), l.memoizedState = X, l.baseState = j, l.baseQueue = fe, f.lastRenderedState = X;
      }
      var Sn = f.dispatch;
      return [l.memoizedState, Sn];
    }
    function H0(e, t, a) {
      var l = zs(), f = l.queue;
      if (f === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      f.lastRenderedReducer = e;
      var p = f.dispatch, y = f.pending, b = l.memoizedState;
      if (y !== null) {
        f.pending = null;
        var w = y.next, O = w;
        do {
          var D = O.action;
          b = e(b, D), O = O.next;
        } while (O !== w);
        i(b, l.memoizedState) || sb(), l.memoizedState = b, l.baseQueue === null && (l.baseState = b), f.lastRenderedState = b;
      }
      return [b, p];
    }
    function CE(e, t, a) {
      gO(t);
      var l = t._getVersion, f = l(t._source), p = !1, y = mO(t);
      if (y !== null ? p = y === f : (p = xo(mv, e.mutableReadLanes), p && yE(t, f)), p) {
        var b = a(t._source);
        return typeof b == "function" && h("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing."), b;
      } else
        throw hO(t), Error("Cannot read from mutable source during the current render without tearing. This is a bug in React. Please file an issue.");
    }
    function EE(e, t, a, l) {
      var f = x2();
      if (f === null)
        throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      var p = t._getVersion, y = p(t._source), b = Pe.current, w = b.useState(function() {
        return CE(f, t, a);
      }), O = w[0], D = w[1], X = O, j = Dr, J = e.memoizedState, fe = J.refs, _e = fe.getSnapshot, lt = J.source, Pt = J.subscribe, ht = En;
      if (e.memoizedState = {
        refs: fe,
        source: t,
        subscribe: l
      }, b.useEffect(function() {
        fe.getSnapshot = a, fe.setSnapshot = D;
        var Sn = p(t._source);
        if (!i(y, Sn)) {
          var Z = a(t._source);
          if (typeof Z == "function" && h("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing."), !i(X, Z)) {
            D(Z);
            var ae = wu(ht);
            Yp(f, ae);
          }
          Md(f, f.mutableReadLanes);
        }
      }, [a, t, l]), b.useEffect(function() {
        var Sn = function() {
          var ae = fe.getSnapshot, K = fe.setSnapshot;
          try {
            K(ae(t._source));
            var be = wu(ht);
            Yp(f, be);
          } catch (De) {
            K(function() {
              throw De;
            });
          }
        }, Z = l(t._source, Sn);
        return typeof Z != "function" && h("Mutable source subscribe function must return an unsubscribe function."), Z;
      }, [t, l]), !i(_e, a) || !i(lt, t) || !i(Pt, l)) {
        var Jt = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: im,
          lastRenderedState: X
        };
        Jt.dispatch = D = Y0.bind(null, En, Jt), j.queue = Jt, j.baseQueue = null, X = CE(f, t, a), j.memoizedState = j.baseState = X;
      }
      return X;
    }
    function $0(e, t, a) {
      var l = Ps();
      return l.memoizedState = {
        refs: {
          getSnapshot: t,
          setSnapshot: null
        },
        source: e,
        subscribe: a
      }, EE(l, e, t, a);
    }
    function om(e, t, a) {
      var l = zs();
      return EE(l, e, t, a);
    }
    function Is(e) {
      var t = Ps();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = t.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: im,
        lastRenderedState: e
      }, l = a.dispatch = Y0.bind(null, En, a);
      return [t.memoizedState, l];
    }
    function bv(e) {
      return I0(im);
    }
    function Sv(e) {
      return H0(im);
    }
    function lm(e, t, a, l) {
      var f = {
        tag: e,
        create: t,
        destroy: a,
        deps: l,
        // Circular
        next: null
      }, p = En.updateQueue;
      if (p === null)
        p = SO(), En.updateQueue = p, p.lastEffect = f.next = f;
      else {
        var y = p.lastEffect;
        if (y === null)
          p.lastEffect = f.next = f;
        else {
          var b = y.next;
          y.next = f, f.next = b, p.lastEffect = f;
        }
      }
      return f;
    }
    function um(e) {
      var t = Ps(), a = {
        current: e
      };
      return Object.seal(a), t.memoizedState = a, a;
    }
    function af(e) {
      var t = zs();
      return t.memoizedState;
    }
    function U0(e, t, a, l) {
      var f = Ps(), p = l === void 0 ? null : l;
      En.flags |= e, f.memoizedState = lm(tf | t, a, void 0, p);
    }
    function j0(e, t, a, l) {
      var f = zs(), p = l === void 0 ? null : l, y = void 0;
      if (na !== null) {
        var b = na.memoizedState;
        if (y = b.destroy, p !== null) {
          var w = b.deps;
          if (P0(p, w)) {
            lm(t, a, y, p);
            return;
          }
        }
      }
      En.flags |= e, f.memoizedState = lm(tf | t, a, y, p);
    }
    function sm(e, t) {
      return typeof jest != "undefined" && Iw(En), U0(vt | ql, pv, e, t);
    }
    function of(e, t) {
      return typeof jest != "undefined" && Iw(En), j0(vt | ql, pv, e, t);
    }
    function F0(e, t) {
      return U0(vt, nf, e, t);
    }
    function cm(e, t) {
      return j0(vt, nf, e, t);
    }
    function wE(e, t) {
      if (typeof t == "function") {
        var a = t, l = e();
        return a(l), function() {
          a(null);
        };
      } else if (t != null) {
        var f = t;
        f.hasOwnProperty("current") || h("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(f).join(", ") + "}");
        var p = e();
        return f.current = p, function() {
          f.current = null;
        };
      }
    }
    function V0(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return U0(vt, nf, wE.bind(null, t, e), l);
    }
    function fm(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return j0(vt, nf, wE.bind(null, t, e), l);
    }
    function CO(e, t) {
    }
    var dm = CO;
    function B0(e, t) {
      var a = Ps(), l = t === void 0 ? null : t;
      return a.memoizedState = [e, l], e;
    }
    function vm(e, t) {
      var a = zs(), l = t === void 0 ? null : t, f = a.memoizedState;
      if (f !== null && l !== null) {
        var p = f[1];
        if (P0(l, p))
          return f[0];
      }
      return a.memoizedState = [e, l], e;
    }
    function W0(e, t) {
      var a = Ps(), l = t === void 0 ? null : t, f = e();
      return a.memoizedState = [f, l], f;
    }
    function pm(e, t) {
      var a = zs(), l = t === void 0 ? null : t, f = a.memoizedState;
      if (f !== null && l !== null) {
        var p = f[1];
        if (P0(l, p))
          return f[0];
      }
      var y = e();
      return a.memoizedState = [y, l], y;
    }
    function K0(e) {
      var t = Is(e), a = t[0], l = t[1];
      return sm(function() {
        var f = vi.transition;
        vi.transition = 1;
        try {
          l(e);
        } finally {
          vi.transition = f;
        }
      }, [e]), a;
    }
    function xE(e) {
      var t = bv(), a = t[0], l = t[1];
      return of(function() {
        var f = vi.transition;
        vi.transition = 1;
        try {
          l(e);
        } finally {
          vi.transition = f;
        }
      }, [e]), a;
    }
    function TE(e) {
      var t = Sv(), a = t[0], l = t[1];
      return of(function() {
        var f = vi.transition;
        vi.transition = 1;
        try {
          l(e);
        } finally {
          vi.transition = f;
        }
      }, [e]), a;
    }
    function EO(e, t) {
      var a = Qc();
      Ms(a < ks ? ks : a, function() {
        e(!0);
      }), Ms(a > bl ? bl : a, function() {
        var l = vi.transition;
        vi.transition = 1;
        try {
          e(!1), t();
        } finally {
          vi.transition = l;
        }
      });
    }
    function G0() {
      var e = Is(!1), t = e[0], a = e[1], l = EO.bind(null, a);
      return um(l), [l, t];
    }
    function RE() {
      var e = bv(), t = e[0], a = af(), l = a.current;
      return [l, t];
    }
    function _E() {
      var e = Sv(), t = e[0], a = af(), l = a.current;
      return [l, t];
    }
    var hm = !1;
    function wO() {
      return hm;
    }
    function kE(e) {
      {
        var t = Re(e.type) || "Unknown";
        wi() && !A0[t] && (h("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly."), A0[t] = !0);
      }
    }
    function q0() {
      var e = MM.bind(null, kE.bind(null, En));
      if (M0()) {
        var t = !1, a = En, l = function() {
          throw t || (t = !0, hm = !0, p(e()), hm = !1, kE(a)), Error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.");
        }, f = NM(l), p = Is(f)[1];
        return (En.mode & Ta) === $n && (En.flags |= vt | ql, lm(tf | pv, function() {
          p(e());
        }, void 0, null)), f;
      } else {
        var y = e();
        return Is(y), y;
      }
    }
    function ME() {
      var e = bv()[0];
      return e;
    }
    function OE() {
      var e = Sv()[0];
      return e;
    }
    function Y0(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Ua(), f = wu(e), p = {
        lane: f,
        action: a,
        eagerReducer: null,
        eagerState: null,
        next: null
      }, y = t.pending;
      y === null ? p.next = p : (p.next = y.next, y.next = p), t.pending = p;
      var b = e.alternate;
      if (e === En || b !== null && b === En)
        gv = am = !0;
      else {
        if (e.lanes === ue && (b === null || b.lanes === ue)) {
          var w = t.lastRenderedReducer;
          if (w !== null) {
            var O;
            O = Pe.current, Pe.current = Wi;
            try {
              var D = t.lastRenderedState, X = w(D, a);
              if (p.eagerReducer = w, p.eagerState = X, i(X, D))
                return;
            } catch (j) {
            } finally {
              Pe.current = O;
            }
          }
        }
        typeof jest != "undefined" && (zw(e), oN(e)), ra(e, f, l);
      }
    }
    var mm = {
      readContext: pr,
      useCallback: Ra,
      useContext: Ra,
      useEffect: Ra,
      useImperativeHandle: Ra,
      useLayoutEffect: Ra,
      useMemo: Ra,
      useReducer: Ra,
      useRef: Ra,
      useState: Ra,
      useDebugValue: Ra,
      useDeferredValue: Ra,
      useTransition: Ra,
      useMutableSource: Ra,
      useOpaqueIdentifier: Ra,
      unstable_isNewReconciler: Ae
    }, NE = null, DE = null, AE = null, LE = null, zo = null, Wi = null, gm = null;
    {
      var Q0 = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, zt = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      NE = {
        readContext: function(e, t) {
          return pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", bn(), yv(t), B0(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", bn(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", bn(), yv(t), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", bn(), yv(a), V0(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", bn(), yv(t), F0(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", bn(), yv(t);
          var a = Pe.current;
          Pe.current = zo;
          try {
            return W0(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", bn();
          var l = Pe.current;
          Pe.current = zo;
          try {
            return z0(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", bn(), um(e);
        },
        useState: function(e) {
          ve = "useState", bn();
          var t = Pe.current;
          Pe.current = zo;
          try {
            return Is(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", bn(), void 0;
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", bn(), K0(e);
        },
        useTransition: function() {
          return ve = "useTransition", bn(), G0();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", bn(), $0(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", bn(), q0();
        },
        unstable_isNewReconciler: Ae
      }, DE = {
        readContext: function(e, t) {
          return pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", Fe(), B0(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", Fe(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", Fe(), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", Fe(), V0(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", Fe(), F0(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", Fe();
          var a = Pe.current;
          Pe.current = zo;
          try {
            return W0(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", Fe();
          var l = Pe.current;
          Pe.current = zo;
          try {
            return z0(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", Fe(), um(e);
        },
        useState: function(e) {
          ve = "useState", Fe();
          var t = Pe.current;
          Pe.current = zo;
          try {
            return Is(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", Fe(), void 0;
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", Fe(), K0(e);
        },
        useTransition: function() {
          return ve = "useTransition", Fe(), G0();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", Fe(), $0(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", Fe(), q0();
        },
        unstable_isNewReconciler: Ae
      }, AE = {
        readContext: function(e, t) {
          return pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", Fe(), vm(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", Fe(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", Fe(), of(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", Fe(), fm(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", Fe(), cm(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", Fe();
          var a = Pe.current;
          Pe.current = Wi;
          try {
            return pm(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", Fe();
          var l = Pe.current;
          Pe.current = Wi;
          try {
            return I0(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", Fe(), af();
        },
        useState: function(e) {
          ve = "useState", Fe();
          var t = Pe.current;
          Pe.current = Wi;
          try {
            return bv(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", Fe(), dm();
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", Fe(), xE(e);
        },
        useTransition: function() {
          return ve = "useTransition", Fe(), RE();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", Fe(), om(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", Fe(), ME();
        },
        unstable_isNewReconciler: Ae
      }, LE = {
        readContext: function(e, t) {
          return pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", Fe(), vm(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", Fe(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", Fe(), of(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", Fe(), fm(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", Fe(), cm(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", Fe();
          var a = Pe.current;
          Pe.current = gm;
          try {
            return pm(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", Fe();
          var l = Pe.current;
          Pe.current = gm;
          try {
            return H0(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", Fe(), af();
        },
        useState: function(e) {
          ve = "useState", Fe();
          var t = Pe.current;
          Pe.current = gm;
          try {
            return Sv(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", Fe(), dm();
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", Fe(), TE(e);
        },
        useTransition: function() {
          return ve = "useTransition", Fe(), _E();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", Fe(), om(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", Fe(), OE();
        },
        unstable_isNewReconciler: Ae
      }, zo = {
        readContext: function(e, t) {
          return Q0(), pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", zt(), bn(), B0(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", zt(), bn(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", zt(), bn(), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", zt(), bn(), V0(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", zt(), bn(), F0(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", zt(), bn();
          var a = Pe.current;
          Pe.current = zo;
          try {
            return W0(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", zt(), bn();
          var l = Pe.current;
          Pe.current = zo;
          try {
            return z0(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", zt(), bn(), um(e);
        },
        useState: function(e) {
          ve = "useState", zt(), bn();
          var t = Pe.current;
          Pe.current = zo;
          try {
            return Is(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", zt(), bn(), void 0;
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", zt(), bn(), K0(e);
        },
        useTransition: function() {
          return ve = "useTransition", zt(), bn(), G0();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", zt(), bn(), $0(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", zt(), bn(), q0();
        },
        unstable_isNewReconciler: Ae
      }, Wi = {
        readContext: function(e, t) {
          return Q0(), pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", zt(), Fe(), vm(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", zt(), Fe(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", zt(), Fe(), of(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", zt(), Fe(), fm(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", zt(), Fe(), cm(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", zt(), Fe();
          var a = Pe.current;
          Pe.current = Wi;
          try {
            return pm(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", zt(), Fe();
          var l = Pe.current;
          Pe.current = Wi;
          try {
            return I0(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", zt(), Fe(), af();
        },
        useState: function(e) {
          ve = "useState", zt(), Fe();
          var t = Pe.current;
          Pe.current = Wi;
          try {
            return bv(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", zt(), Fe(), dm();
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", zt(), Fe(), xE(e);
        },
        useTransition: function() {
          return ve = "useTransition", zt(), Fe(), RE();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", zt(), Fe(), om(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", zt(), Fe(), ME();
        },
        unstable_isNewReconciler: Ae
      }, gm = {
        readContext: function(e, t) {
          return Q0(), pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", zt(), Fe(), vm(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", zt(), Fe(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", zt(), Fe(), of(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", zt(), Fe(), fm(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", zt(), Fe(), cm(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", zt(), Fe();
          var a = Pe.current;
          Pe.current = Wi;
          try {
            return pm(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", zt(), Fe();
          var l = Pe.current;
          Pe.current = Wi;
          try {
            return H0(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", zt(), Fe(), af();
        },
        useState: function(e) {
          ve = "useState", zt(), Fe();
          var t = Pe.current;
          Pe.current = Wi;
          try {
            return Sv(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", zt(), Fe(), dm();
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", zt(), Fe(), TE(e);
        },
        useTransition: function() {
          return ve = "useTransition", zt(), Fe(), _E();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", zt(), Fe(), om(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", zt(), Fe(), OE();
        },
        unstable_isNewReconciler: Ae
      };
    }
    var ym = s.unstable_now, PE = 0, Cv = -1;
    function xO() {
      return PE;
    }
    function zE() {
      PE = ym();
    }
    function X0(e) {
      Cv = ym(), e.actualStartTime < 0 && (e.actualStartTime = ym());
    }
    function IE(e) {
      Cv = -1;
    }
    function bm(e, t) {
      if (Cv >= 0) {
        var a = ym() - Cv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Cv = -1;
      }
    }
    function Z0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    var Ev = d.ReactCurrentOwner, Io = !1, J0, wv, eb, tb, nb, Hs, rb, Sm;
    J0 = {}, wv = {}, eb = {}, tb = {}, nb = {}, Hs = !1, rb = {}, Sm = {};
    function _a(e, t, a, l) {
      e === null ? t.child = cE(t, null, a, l) : t.child = Zh(t, e.child, a, l);
    }
    function TO(e, t, a, l) {
      t.child = Zh(t, e.child, null, l), t.child = Zh(t, null, a, l);
    }
    function HE(e, t, a, l, f) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && ji(
          p,
          l,
          // Resolved props
          "prop",
          Re(a)
        );
      }
      var y = a.render, b = t.ref, w;
      Zc(t, f);
      {
        if (Ev.current = t, er(!0), w = rf(e, t, y, l, b, f), t.mode & Qn) {
          _r();
          try {
            w = rf(e, t, y, l, b, f);
          } finally {
            xn();
          }
        }
        er(!1);
      }
      return e !== null && !Io ? (bE(e, t, f), Cl(e, t, f)) : (t.flags |= Vr, _a(e, t, w, f), t.child);
    }
    function $E(e, t, a, l, f, p) {
      if (e === null) {
        var y = a.type;
        if (yN(y) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var b = y;
          return b = pf(y), t.tag = q, t.type = b, lb(t, y), UE(e, t, b, l, f, p);
        }
        {
          var w = y.propTypes;
          w && ji(
            w,
            l,
            // Resolved props
            "prop",
            Re(y)
          );
        }
        var O = Wb(a.type, null, l, t, t.mode, p);
        return O.ref = t.ref, O.return = t, t.child = O, O;
      }
      {
        var D = a.type, X = D.propTypes;
        X && ji(
          X,
          l,
          // Resolved props
          "prop",
          Re(D)
        );
      }
      var j = e.child;
      if (!wr(f, p)) {
        var J = j.memoizedProps, fe = a.compare;
        if (fe = fe !== null ? fe : v, fe(J, l) && e.ref === t.ref)
          return Cl(e, t, p);
      }
      t.flags |= Vr;
      var _e = Vs(j, l);
      return _e.ref = t.ref, _e.return = t, t.child = _e, _e;
    }
    function UE(e, t, a, l, f, p) {
      if (t.type !== t.elementType) {
        var y = t.elementType;
        if (y.$$typeof === At) {
          var b = y, w = b._payload, O = b._init;
          try {
            y = O(w);
          } catch (j) {
            y = null;
          }
          var D = y && y.propTypes;
          D && ji(
            D,
            l,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Re(y)
          );
        }
      }
      if (e !== null) {
        var X = e.memoizedProps;
        if (v(X, l) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (Io = !1, wr(p, f))
            (e.flags & Yu) !== un && (Io = !0);
          else
            return t.lanes = e.lanes, Cl(e, t, p);
      }
      return ib(e, t, a, l, p);
    }
    function ab(e, t, a) {
      var l = t.pendingProps, f = l.children, p = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || l.mode === "unstable-defer-without-hiding")
        if ((t.mode & Os) === $n) {
          var y = {
            baseLanes: ue
          };
          t.memoizedState = y, zm(t, a);
        } else if (wr(a, Pa)) {
          var D = {
            baseLanes: ue
          };
          t.memoizedState = D;
          var X = p !== null ? p.baseLanes : a;
          zm(t, X);
        } else {
          var b;
          if (p !== null) {
            var w = p.baseLanes;
            b = tn(w, a);
          } else
            b = a;
          Fm(Pa), t.lanes = t.childLanes = Pa;
          var O = {
            baseLanes: b
          };
          return t.memoizedState = O, zm(t, b), null;
        }
      else {
        var j;
        p !== null ? (j = tn(p.baseLanes, a), t.memoizedState = null) : j = a, zm(t, j);
      }
      return _a(e, t, f, a), t.child;
    }
    var RO = ab;
    function _O(e, t, a) {
      var l = t.pendingProps;
      return _a(e, t, l, a), t.child;
    }
    function kO(e, t, a) {
      var l = t.pendingProps.children;
      return _a(e, t, l, a), t.child;
    }
    function MO(e, t, a) {
      {
        t.flags |= vt;
        var l = t.stateNode;
        l.effectDuration = 0, l.passiveEffectDuration = 0;
      }
      var f = t.pendingProps, p = f.children;
      return _a(e, t, p, a), t.child;
    }
    function jE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Cr);
    }
    function ib(e, t, a, l, f) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && ji(
          p,
          l,
          // Resolved props
          "prop",
          Re(a)
        );
      }
      var y;
      {
        var b = Gc(t, a, !0);
        y = qc(t, b);
      }
      var w;
      Zc(t, f);
      {
        if (Ev.current = t, er(!0), w = rf(e, t, a, l, y, f), t.mode & Qn) {
          _r();
          try {
            w = rf(e, t, a, l, y, f);
          } finally {
            xn();
          }
        }
        er(!1);
      }
      return e !== null && !Io ? (bE(e, t, f), Cl(e, t, f)) : (t.flags |= Vr, _a(e, t, w, f), t.child);
    }
    function FE(e, t, a, l, f) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && ji(
          p,
          l,
          // Resolved props
          "prop",
          Re(a)
        );
      }
      var y;
      Ao(a) ? (y = !0, Ah(t)) : y = !1, Zc(t, f);
      var b = t.stateNode, w;
      b === null ? (e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tt), oE(t, a, l), h0(t, a, l, f), w = !0) : e === null ? w = aO(t, a, l, f) : w = iO(e, t, a, l, f);
      var O = ob(e, t, a, w, y, f);
      {
        var D = t.stateNode;
        w && D.props !== l && (Hs || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Re(t.type) || "a component"), Hs = !0);
      }
      return O;
    }
    function ob(e, t, a, l, f, p) {
      jE(e, t);
      var y = (t.flags & nn) !== un;
      if (!l && !y)
        return f && _C(t, a, !1), Cl(e, t, p);
      var b = t.stateNode;
      Ev.current = t;
      var w;
      if (y && typeof a.getDerivedStateFromError != "function")
        w = null, IE();
      else {
        if (er(!0), w = b.render(), t.mode & Qn) {
          _r();
          try {
            b.render();
          } finally {
            xn();
          }
        }
        er(!1);
      }
      return t.flags |= Vr, e !== null && y ? TO(e, t, w, p) : _a(e, t, w, p), t.memoizedState = b.state, f && _C(t, a, !0), t.child;
    }
    function VE(e) {
      var t = e.stateNode;
      t.pendingContext ? TC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && TC(e, t.context, !1), C0(e, t.containerInfo);
    }
    function OO(e, t, a) {
      VE(t);
      var l = t.updateQueue;
      if (!(e !== null && l !== null))
        throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");
      var f = t.pendingProps, p = t.memoizedState, y = p !== null ? p.element : null;
      XC(e, t), uv(t, f, null, a);
      var b = t.memoizedState, w = b.element;
      if (w === y)
        return k0(), Cl(e, t, a);
      var O = t.stateNode;
      if (O.hydrate && fO(t)) {
        {
          var D = O.mutableSourceEagerHydrationData;
          if (D != null)
            for (var X = 0; X < D.length; X += 2) {
              var j = D[X], J = D[X + 1];
              yE(j, J);
            }
        }
        var fe = cE(t, null, w, a);
        t.child = fe;
        for (var _e = fe; _e; )
          _e.flags = _e.flags & ~Tt | ba, _e = _e.sibling;
      } else
        _a(e, t, w, a), k0();
      return t.child;
    }
    function NO(e, t, a) {
      dE(t), e === null && _0(t);
      var l = t.type, f = t.pendingProps, p = e !== null ? e.memoizedProps : null, y = f.children, b = Uy(l, f);
      return b ? y = null : p !== null && Uy(l, p) && (t.flags |= Sr), jE(e, t), _a(e, t, y, a), t.child;
    }
    function DO(e, t) {
      return e === null && _0(t), null;
    }
    function AO(e, t, a, l, f) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tt);
      var p = t.pendingProps, y = a, b = y._payload, w = y._init, O = w(b);
      t.type = O;
      var D = t.tag = bN(O), X = Vi(O, p), j;
      switch (D) {
        case x:
          return lb(t, O), t.type = O = pf(O), j = ib(null, t, O, X, f), j;
        case E:
          return t.type = O = $b(O), j = FE(null, t, O, X, f), j;
        case z:
          return t.type = O = Ub(O), j = HE(null, t, O, X, f), j;
        case Y: {
          if (t.type !== t.elementType) {
            var J = O.propTypes;
            J && ji(
              J,
              X,
              // Resolved for outer only
              "prop",
              Re(O)
            );
          }
          return j = $E(
            null,
            t,
            O,
            Vi(O.type, X),
            // The inner type can have defaults too
            l,
            f
          ), j;
        }
      }
      var fe = "";
      throw O !== null && typeof O == "object" && O.$$typeof === At && (fe = " Did you wrap a component in React.lazy() more than once?"), Error("Element type is invalid. Received a promise that resolves to: " + O + ". Lazy element type must resolve to a class or function." + fe);
    }
    function LO(e, t, a, l, f) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tt), t.tag = E;
      var p;
      return Ao(a) ? (p = !0, Ah(t)) : p = !1, Zc(t, f), oE(t, a, l), h0(t, a, l, f), ob(null, t, a, !0, p, f);
    }
    function PO(e, t, a, l) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tt);
      var f = t.pendingProps, p;
      {
        var y = Gc(t, a, !1);
        p = qc(t, y);
      }
      Zc(t, l);
      var b;
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var w = Re(a) || "Unknown";
          J0[w] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), J0[w] = !0);
        }
        t.mode & Qn && Fi.recordLegacyContextWarning(t, null), er(!0), Ev.current = t, b = rf(null, t, a, f, p, l), er(!1);
      }
      if (t.flags |= Vr, typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0) {
        var O = Re(a) || "Unknown";
        wv[O] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", O, O, O), wv[O] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0
      ) {
        {
          var D = Re(a) || "Unknown";
          wv[D] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", D, D, D), wv[D] = !0);
        }
        t.tag = E, t.memoizedState = null, t.updateQueue = null;
        var X = !1;
        Ao(a) ? (X = !0, Ah(t)) : X = !1, t.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null, a0(t);
        var j = a.getDerivedStateFromProps;
        return typeof j == "function" && qh(t, a, j, f), iE(t, b), h0(t, a, f, l), ob(null, t, a, !0, X, l);
      } else {
        if (t.tag = x, t.mode & Qn) {
          _r();
          try {
            b = rf(null, t, a, f, p, l);
          } finally {
            xn();
          }
        }
        return _a(null, t, b, l), lb(t, a), t.child;
      }
    }
    function lb(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", l = Tn();
          l && (a += `

Check the render method of \`` + l + "`.");
          var f = l || e._debugID || "", p = e._debugSource;
          p && (f = p.fileName + ":" + p.lineNumber), nb[f] || (nb[f] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = Re(t) || "Unknown";
          tb[y] || (h("%s: Function components do not support getDerivedStateFromProps.", y), tb[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var b = Re(t) || "Unknown";
          eb[b] || (h("%s: Function components do not support contextType.", b), eb[b] = !0);
        }
      }
    }
    var Cm = {
      dehydrated: null,
      retryLane: qn
    };
    function Em(e) {
      return {
        baseLanes: e
      };
    }
    function BE(e, t) {
      return {
        baseLanes: tn(e.baseLanes, t)
      };
    }
    function zO(e, t, a, l) {
      if (t !== null) {
        var f = t.memoizedState;
        if (f === null)
          return !1;
      }
      return tm(e, dv);
    }
    function WE(e, t) {
      return uu(e.childLanes, t);
    }
    function KE(e, t, a) {
      var l = t.pendingProps;
      HN(t) && (t.flags |= nn);
      var f = Bi.current, p = !1, y = (t.flags & nn) !== un;
      if (y || zO(f, e) ? (p = !0, t.flags &= ~nn) : (e === null || e.memoizedState !== null) && l.fallback !== void 0 && l.unstable_avoidThisFallback !== !0 && (f = sO(f, x0)), f = vv(f), As(t, f), e === null) {
        l.fallback !== void 0 && _0(t);
        var b = l.children, w = l.fallback;
        if (p) {
          var O = GE(t, b, w, a), D = t.child;
          return D.memoizedState = Em(a), t.memoizedState = Cm, O;
        } else if (typeof l.unstable_expectedLoadTime == "number") {
          var X = GE(t, b, w, a), j = t.child;
          return j.memoizedState = Em(a), t.memoizedState = Cm, t.lanes = Eo, Fm(Eo), X;
        } else
          return IO(t, b, a);
      } else {
        var J = e.memoizedState;
        if (J !== null)
          if (p) {
            var fe = l.fallback, _e = l.children, lt = QE(e, t, _e, fe, a), Pt = t.child, ht = e.child.memoizedState;
            return Pt.memoizedState = ht === null ? Em(a) : BE(ht, a), Pt.childLanes = WE(e, a), t.memoizedState = Cm, lt;
          } else {
            var Jt = l.children, Sn = YE(e, t, Jt, a);
            return t.memoizedState = null, Sn;
          }
        else if (p) {
          var Z = l.fallback, ae = l.children, K = QE(e, t, ae, Z, a), be = t.child, De = e.child.memoizedState;
          return be.memoizedState = De === null ? Em(a) : BE(De, a), be.childLanes = WE(e, a), t.memoizedState = Cm, K;
        } else {
          var Ye = l.children, Yt = YE(e, t, Ye, a);
          return t.memoizedState = null, Yt;
        }
      }
    }
    function IO(e, t, a) {
      var l = e.mode, f = {
        mode: "visible",
        children: t
      }, p = Gb(f, l, a, null);
      return p.return = e, e.child = p, p;
    }
    function GE(e, t, a, l) {
      var f = e.mode, p = e.child, y = {
        mode: "hidden",
        children: t
      }, b, w;
      return (f & Ta) === $n && p !== null ? (b = p, b.childLanes = ue, b.pendingProps = y, e.mode & Ha && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = 0, b.treeBaseDuration = 0), w = Bs(a, f, l, null)) : (b = Gb(y, f, ue, null), w = Bs(a, f, l, null)), b.return = e, w.return = e, b.sibling = w, e.child = b, w;
    }
    function qE(e, t) {
      return Vs(e, t);
    }
    function YE(e, t, a, l) {
      var f = e.child, p = f.sibling, y = qE(f, {
        mode: "visible",
        children: a
      });
      return (t.mode & Ta) === $n && (y.lanes = l), y.return = t, y.sibling = null, p !== null && (p.nextEffect = null, p.flags = Rn, t.firstEffect = t.lastEffect = p), t.child = y, y;
    }
    function QE(e, t, a, l, f) {
      var p = t.mode, y = e.child, b = y.sibling, w = {
        mode: "hidden",
        children: a
      }, O;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (p & Ta) === $n && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== y
      ) {
        var D = t.child;
        O = D, O.childLanes = ue, O.pendingProps = w, t.mode & Ha && (O.actualDuration = 0, O.actualStartTime = -1, O.selfBaseDuration = y.selfBaseDuration, O.treeBaseDuration = y.treeBaseDuration);
        var X = O.lastEffect;
        X !== null ? (t.firstEffect = O.firstEffect, t.lastEffect = X, X.nextEffect = null) : t.firstEffect = t.lastEffect = null;
      } else
        O = qE(y, w);
      var j;
      return b !== null ? j = Vs(b, l) : (j = Bs(l, p, f, null), j.flags |= Tt), j.return = t, O.return = t, O.sibling = j, t.child = O, j;
    }
    function XE(e, t) {
      e.lanes = tn(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = tn(a.lanes, t)), qC(e.return, t);
    }
    function HO(e, t, a) {
      for (var l = t; l !== null; ) {
        if (l.tag === I) {
          var f = l.memoizedState;
          f !== null && XE(l, a);
        } else if (l.tag === ge)
          XE(l, a);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === e)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === e)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    function $O(e) {
      for (var t = e, a = null; t !== null; ) {
        var l = t.alternate;
        l !== null && nm(l) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function UO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !rb[e])
        if (rb[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              h('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              h('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              h('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          h('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function jO(e, t) {
      e !== void 0 && !Sm[e] && (e !== "collapsed" && e !== "hidden" ? (Sm[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Sm[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function ZE(e, t) {
      {
        var a = Array.isArray(e), l = !a && typeof ln(e) == "function";
        if (a || l) {
          var f = a ? "array" : "iterable";
          return h("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", f, t, f), !1;
        }
      }
      return !0;
    }
    function FO(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Array.isArray(e)) {
          for (var a = 0; a < e.length; a++)
            if (!ZE(e[a], a))
              return;
        } else {
          var l = ln(e);
          if (typeof l == "function") {
            var f = l.call(e);
            if (f)
              for (var p = f.next(), y = 0; !p.done; p = f.next()) {
                if (!ZE(p.value, y))
                  return;
                y++;
              }
          } else
            h('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function ub(e, t, a, l, f, p) {
      var y = e.memoizedState;
      y === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: a,
        tailMode: f,
        lastEffect: p
      } : (y.isBackwards = t, y.rendering = null, y.renderingStartTime = 0, y.last = l, y.tail = a, y.tailMode = f, y.lastEffect = p);
    }
    function JE(e, t, a) {
      var l = t.pendingProps, f = l.revealOrder, p = l.tail, y = l.children;
      UO(f), jO(p, f), FO(y, f), _a(e, t, y, a);
      var b = Bi.current, w = tm(b, dv);
      if (w)
        b = T0(b, dv), t.flags |= nn;
      else {
        var O = e !== null && (e.flags & nn) !== un;
        O && HO(t, t.child, a), b = vv(b);
      }
      if (As(t, b), (t.mode & Ta) === $n)
        t.memoizedState = null;
      else
        switch (f) {
          case "forwards": {
            var D = $O(t.child), X;
            D === null ? (X = t.child, t.child = null) : (X = D.sibling, D.sibling = null), ub(
              t,
              !1,
              // isBackwards
              X,
              D,
              p,
              t.lastEffect
            );
            break;
          }
          case "backwards": {
            var j = null, J = t.child;
            for (t.child = null; J !== null; ) {
              var fe = J.alternate;
              if (fe !== null && nm(fe) === null) {
                t.child = J;
                break;
              }
              var _e = J.sibling;
              J.sibling = j, j = J, J = _e;
            }
            ub(
              t,
              !0,
              // isBackwards
              j,
              null,
              // last
              p,
              t.lastEffect
            );
            break;
          }
          case "together": {
            ub(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0,
              t.lastEffect
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function VO(e, t, a) {
      C0(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = Zh(t, null, l, a) : _a(e, t, l, a), t.child;
    }
    var ew = !1;
    function BO(e, t, a) {
      var l = t.type, f = l._context, p = t.pendingProps, y = t.memoizedProps, b = p.value;
      {
        "value" in p || ew || (ew = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var w = t.type.propTypes;
        w && ji(w, p, "prop", "Context.Provider");
      }
      if (GC(t, b), y !== null) {
        var O = y.value, D = XM(f, b, O);
        if (D === 0) {
          if (y.children === p.children && !Nh())
            return Cl(e, t, a);
        } else
          ZM(t, f, D, a);
      }
      var X = p.children;
      return _a(e, t, X, a), t.child;
    }
    var tw = !1;
    function WO(e, t, a) {
      var l = t.type;
      l._context === void 0 ? l !== l.Consumer && (tw || (tw = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var f = t.pendingProps, p = f.children;
      typeof p != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Zc(t, a);
      var y = pr(l, f.unstable_observedBits), b;
      return Ev.current = t, er(!0), b = p(y), er(!1), t.flags |= Vr, _a(e, t, b, a), t.child;
    }
    function sb() {
      Io = !0;
    }
    function Cl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), IE(), Lb(t.lanes), wr(a, t.childLanes) ? (oO(e, t), t.child) : null;
    }
    function KO(e, t, a) {
      {
        var l = t.return;
        if (l === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === l.child)
          l.child = a;
        else {
          var f = l.child;
          if (f === null)
            throw new Error("Expected parent to have a child.");
          for (; f.sibling !== t; )
            if (f = f.sibling, f === null)
              throw new Error("Expected to find the previous sibling.");
          f.sibling = a;
        }
        var p = l.lastEffect;
        return p !== null ? (p.nextEffect = e, l.lastEffect = e) : l.firstEffect = l.lastEffect = e, e.nextEffect = null, e.flags = Rn, a.flags |= Tt, a;
      }
    }
    function nw(e, t, a) {
      var l = t.lanes;
      if (t._debugNeedsRemount && e !== null)
        return KO(e, t, Wb(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var f = e.memoizedProps, p = t.pendingProps;
        if (f !== p || Nh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Io = !0;
        else if (wr(a, l))
          (e.flags & Yu) !== un ? Io = !0 : Io = !1;
        else {
          switch (Io = !1, t.tag) {
            case _:
              VE(t), k0();
              break;
            case L:
              dE(t);
              break;
            case E: {
              var y = t.type;
              Ao(y) && Ah(t);
              break;
            }
            case N:
              C0(t, t.stateNode.containerInfo);
              break;
            case $: {
              var b = t.memoizedProps.value;
              GC(t, b);
              break;
            }
            case P:
              {
                var w = wr(a, t.childLanes);
                w && (t.flags |= vt);
                var O = t.stateNode;
                O.effectDuration = 0, O.passiveEffectDuration = 0;
              }
              break;
            case I: {
              var D = t.memoizedState;
              if (D !== null) {
                var X = t.child, j = X.childLanes;
                if (wr(a, j))
                  return KE(e, t, a);
                As(t, vv(Bi.current));
                var J = Cl(e, t, a);
                return J !== null ? J.sibling : null;
              } else
                As(t, vv(Bi.current));
              break;
            }
            case ge: {
              var fe = (e.flags & nn) !== un, _e = wr(a, t.childLanes);
              if (fe) {
                if (_e)
                  return JE(e, t, a);
                t.flags |= nn;
              }
              var lt = t.memoizedState;
              if (lt !== null && (lt.rendering = null, lt.tail = null, lt.lastEffect = null), As(t, Bi.current), _e)
                break;
              return null;
            }
            case de:
            case Ce:
              return t.lanes = ue, ab(e, t, a);
          }
          return Cl(e, t, a);
        }
      } else
        Io = !1;
      switch (t.lanes = ue, t.tag) {
        case M:
          return PO(e, t, t.type, a);
        case ne: {
          var Pt = t.elementType;
          return AO(e, t, Pt, l, a);
        }
        case x: {
          var ht = t.type, Jt = t.pendingProps, Sn = t.elementType === ht ? Jt : Vi(ht, Jt);
          return ib(e, t, ht, Sn, a);
        }
        case E: {
          var Z = t.type, ae = t.pendingProps, K = t.elementType === Z ? ae : Vi(Z, ae);
          return FE(e, t, Z, K, a);
        }
        case _:
          return OO(e, t, a);
        case L:
          return NO(e, t, a);
        case H:
          return DO(e, t);
        case I:
          return KE(e, t, a);
        case N:
          return VO(e, t, a);
        case z: {
          var be = t.type, De = t.pendingProps, Ye = t.elementType === be ? De : Vi(be, De);
          return HE(e, t, be, Ye, a);
        }
        case V:
          return _O(e, t, a);
        case A:
          return kO(e, t, a);
        case P:
          return MO(e, t, a);
        case $:
          return BO(e, t, a);
        case G:
          return WO(e, t, a);
        case Y: {
          var Yt = t.type, Mn = t.pendingProps, Un = Vi(Yt, Mn);
          if (t.type !== t.elementType) {
            var sn = Yt.propTypes;
            sn && ji(
              sn,
              Un,
              // Resolved for outer only
              "prop",
              Re(Yt)
            );
          }
          return Un = Vi(Yt.type, Un), $E(e, t, Yt, Un, l, a);
        }
        case q:
          return UE(e, t, t.type, t.pendingProps, l, a);
        case oe: {
          var hr = t.type, rn = t.pendingProps, jn = t.elementType === hr ? rn : Vi(hr, rn);
          return LO(e, t, hr, jn, a);
        }
        case ge:
          return JE(e, t, a);
        case pe:
          break;
        case te:
          break;
        case se:
          break;
        case de:
          return ab(e, t, a);
        case Ce:
          return RO(e, t, a);
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function lf(e) {
      e.flags |= vt;
    }
    function rw(e) {
      e.flags |= Cr;
    }
    var aw, cb, iw, ow;
    aw = function(e, t, a, l) {
      for (var f = t.child; f !== null; ) {
        if (f.tag === L || f.tag === H)
          Kk(e, f.stateNode);
        else if (f.tag !== N) {
          if (f.child !== null) {
            f.child.return = f, f = f.child;
            continue;
          }
        }
        if (f === t)
          return;
        for (; f.sibling === null; ) {
          if (f.return === null || f.return === t)
            return;
          f = f.return;
        }
        f.sibling.return = f.return, f = f.sibling;
      }
    }, cb = function(e) {
    }, iw = function(e, t, a, l, f) {
      var p = e.memoizedProps;
      if (p !== l) {
        var y = t.stateNode, b = E0(), w = qk(y, a, p, l, f, b);
        t.updateQueue = w, w && lf(t);
      }
    }, ow = function(e, t, a, l) {
      a !== l && lf(t);
    };
    function xv(e, t) {
      if (!M0())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, l = null; a !== null; )
              a.alternate !== null && (l = a), a = a.sibling;
            l === null ? e.tail = null : l.sibling = null;
            break;
          }
          case "collapsed": {
            for (var f = e.tail, p = null; f !== null; )
              f.alternate !== null && (p = f), f = f.sibling;
            p === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : p.sibling = null;
            break;
          }
        }
    }
    function lw(e, t, a) {
      var l = t.pendingProps;
      switch (t.tag) {
        case M:
        case ne:
        case q:
        case x:
        case z:
        case V:
        case A:
        case P:
        case G:
        case Y:
          return null;
        case E: {
          var f = t.type;
          return Ao(f) && Dh(t), null;
        }
        case _: {
          Jc(t), Gy(t), N0();
          var p = t.stateNode;
          if (p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), e === null || e.child === null) {
            var y = rm(t);
            y ? lf(t) : p.hydrate || (t.flags |= ei);
          }
          return cb(t), null;
        }
        case L: {
          w0(t);
          var b = fE(), w = t.type;
          if (e !== null && t.stateNode != null)
            iw(e, t, w, l, b), e.ref !== t.ref && rw(t);
          else {
            if (!l) {
              if (t.stateNode === null)
                throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return null;
            }
            var O = E0(), D = rm(t);
            if (D)
              dO(t, b, O) && lf(t);
            else {
              var X = Wk(w, l, b, O, t);
              aw(X, t, !1, !1), t.stateNode = X, Gk(X, w, l, b) && lf(t);
            }
            t.ref !== null && rw(t);
          }
          return null;
        }
        case H: {
          var j = l;
          if (e && t.stateNode != null) {
            var J = e.memoizedProps;
            ow(e, t, J, j);
          } else {
            if (typeof j != "string" && t.stateNode === null)
              throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var fe = fE(), _e = E0(), lt = rm(t);
            lt ? vO(t) && lf(t) : t.stateNode = Yk(j, fe, _e, t);
          }
          return null;
        }
        case I: {
          ef(t);
          var Pt = t.memoizedState;
          if ((t.flags & nn) !== un)
            return t.lanes = a, (t.mode & Ha) !== $n && Z0(t), t;
          var ht = Pt !== null, Jt = !1;
          if (e === null)
            t.memoizedProps.fallback !== void 0 && rm(t);
          else {
            var Sn = e.memoizedState;
            Jt = Sn !== null;
          }
          if (ht && !Jt && (t.mode & Ta) !== $n) {
            var Z = e === null && t.memoizedProps.unstable_avoidThisFallback !== !0;
            Z || tm(Bi.current, x0) ? D2() : A2();
          }
          return (ht || Jt) && (t.flags |= vt), null;
        }
        case N:
          return Jc(t), cb(t), e === null && DM(t.stateNode.containerInfo), null;
        case $:
          return t0(t), null;
        case oe: {
          var ae = t.type;
          return Ao(ae) && Dh(t), null;
        }
        case ge: {
          ef(t);
          var K = t.memoizedState;
          if (K === null)
            return null;
          var be = (t.flags & nn) !== un, De = K.rendering;
          if (De === null)
            if (be)
              xv(K, !1);
            else {
              var Ye = P2() && (e === null || (e.flags & nn) === un);
              if (!Ye)
                for (var Yt = t.child; Yt !== null; ) {
                  var Mn = nm(Yt);
                  if (Mn !== null) {
                    be = !0, t.flags |= nn, xv(K, !1);
                    var Un = Mn.updateQueue;
                    return Un !== null && (t.updateQueue = Un, t.flags |= vt), K.lastEffect === null && (t.firstEffect = null), t.lastEffect = K.lastEffect, lO(t, a), As(t, T0(Bi.current, dv)), t.child;
                  }
                  Yt = Yt.sibling;
                }
              K.tail !== null && ta() > ww() && (t.flags |= nn, be = !0, xv(K, !1), t.lanes = Eo, Fm(Eo));
            }
          else {
            if (!be) {
              var sn = nm(De);
              if (sn !== null) {
                t.flags |= nn, be = !0;
                var hr = sn.updateQueue;
                if (hr !== null && (t.updateQueue = hr, t.flags |= vt), xv(K, !0), K.tail === null && K.tailMode === "hidden" && !De.alternate && !M0()) {
                  var rn = t.lastEffect = K.lastEffect;
                  return rn !== null && (rn.nextEffect = null), null;
                }
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                ta() * 2 - K.renderingStartTime > ww() && a !== Pa && (t.flags |= nn, be = !0, xv(K, !1), t.lanes = Eo, Fm(Eo));
            }
            if (K.isBackwards)
              De.sibling = t.child, t.child = De;
            else {
              var jn = K.last;
              jn !== null ? jn.sibling = De : t.child = De, K.last = De;
            }
          }
          if (K.tail !== null) {
            var Ar = K.tail;
            K.rendering = Ar, K.tail = Ar.sibling, K.lastEffect = t.lastEffect, K.renderingStartTime = ta(), Ar.sibling = null;
            var nr = Bi.current;
            return be ? nr = T0(nr, dv) : nr = vv(nr), As(t, nr), Ar;
          }
          return null;
        }
        case pe:
          break;
        case te:
          break;
        case se:
          break;
        case de:
        case Ce: {
          if (Ab(t), e !== null) {
            var jo = t.memoizedState, rr = e.memoizedState, Fo = rr !== null, Ws = jo !== null;
            Fo !== Ws && l.mode !== "unstable-defer-without-hiding" && (t.flags |= vt);
          }
          return null;
        }
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function GO(e, t) {
      switch (e.tag) {
        case E: {
          var a = e.type;
          Ao(a) && Dh(e);
          var l = e.flags;
          return l & Aa ? (e.flags = l & ~Aa | nn, (e.mode & Ha) !== $n && Z0(e), e) : null;
        }
        case _: {
          Jc(e), Gy(e), N0();
          var f = e.flags;
          if ((f & nn) !== un)
            throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");
          return e.flags = f & ~Aa | nn, e;
        }
        case L:
          return w0(e), null;
        case I: {
          ef(e);
          var p = e.flags;
          return p & Aa ? (e.flags = p & ~Aa | nn, (e.mode & Ha) !== $n && Z0(e), e) : null;
        }
        case ge:
          return ef(e), null;
        case N:
          return Jc(e), null;
        case $:
          return t0(e), null;
        case de:
        case Ce:
          return Ab(e), null;
        default:
          return null;
      }
    }
    function uw(e) {
      switch (e.tag) {
        case E: {
          var t = e.type.childContextTypes;
          t != null && Dh(e);
          break;
        }
        case _: {
          Jc(e), Gy(e), N0();
          break;
        }
        case L: {
          w0(e);
          break;
        }
        case N:
          Jc(e);
          break;
        case I:
          ef(e);
          break;
        case ge:
          ef(e);
          break;
        case $:
          t0(e);
          break;
        case de:
        case Ce:
          Ab(e);
          break;
      }
    }
    function fb(e, t) {
      return {
        value: e,
        source: t,
        stack: Or(t)
      };
    }
    function qO(e, t) {
      return !0;
    }
    function db(e, t) {
      try {
        var a = qO(e, t);
        if (a === !1)
          return;
        var l = t.value, f = t.source, p = t.stack, y = p !== null ? p : "";
        if (l != null && l._suppressLogging) {
          if (e.tag === E)
            return;
          console.error(l);
        }
        var b = f ? Re(f.type) : null, w = b ? "The above error occurred in the <" + b + "> component:" : "The above error occurred in one of your React components:", O, D = Re(e.type);
        D ? O = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + D + ".") : O = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        var X = w + `
` + y + `

` + ("" + O);
        console.error(X);
      } catch (j) {
        setTimeout(function() {
          throw j;
        });
      }
    }
    var YO = typeof WeakMap == "function" ? WeakMap : Map;
    function sw(e, t, a) {
      var l = yu(kn, a);
      l.tag = n0, l.payload = {
        element: null
      };
      var f = t.value;
      return l.callback = function() {
        Y2(f), db(e, t);
      }, l;
    }
    function cw(e, t, a) {
      var l = yu(kn, a);
      l.tag = n0;
      var f = e.type.getDerivedStateFromError;
      if (typeof f == "function") {
        var p = t.value;
        l.payload = function() {
          return db(e, t), f(p);
        };
      }
      var y = e.stateNode;
      return y !== null && typeof y.componentDidCatch == "function" ? l.callback = function() {
        Bw(e), typeof f != "function" && (G2(this), db(e, t));
        var w = t.value, O = t.stack;
        this.componentDidCatch(w, {
          componentStack: O !== null ? O : ""
        }), typeof f != "function" && (wr(e.lanes, Ft) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Re(e.type) || "Unknown"));
      } : l.callback = function() {
        Bw(e);
      }, l;
    }
    function QO(e, t, a) {
      var l = e.pingCache, f;
      if (l === null ? (l = e.pingCache = new YO(), f = /* @__PURE__ */ new Set(), l.set(t, f)) : (f = l.get(t), f === void 0 && (f = /* @__PURE__ */ new Set(), l.set(t, f))), !f.has(a)) {
        f.add(a);
        var p = Q2.bind(null, e, t, a);
        t.then(p, p);
      }
    }
    function XO(e, t, a, l, f) {
      if (a.flags |= qu, a.firstEffect = a.lastEffect = null, l !== null && typeof l == "object" && typeof l.then == "function") {
        var p = l;
        if ((a.mode & Ta) === $n) {
          var y = a.alternate;
          y ? (a.updateQueue = y.updateQueue, a.memoizedState = y.memoizedState, a.lanes = y.lanes) : (a.updateQueue = null, a.memoizedState = null);
        }
        var b = tm(Bi.current, x0), w = t;
        do {
          if (w.tag === I && cO(w, b)) {
            var O = w.updateQueue;
            if (O === null) {
              var D = /* @__PURE__ */ new Set();
              D.add(p), w.updateQueue = D;
            } else
              O.add(p);
            if ((w.mode & Ta) === $n) {
              if (w.flags |= nn, a.flags |= Yu, a.flags &= ~(rd | qu), a.tag === E) {
                var X = a.alternate;
                if (X === null)
                  a.tag = oe;
                else {
                  var j = yu(kn, Ft);
                  j.tag = Vh, bu(a, j);
                }
              }
              a.lanes = tn(a.lanes, Ft);
              return;
            }
            QO(e, p, f), w.flags |= Aa, w.lanes = f;
            return;
          }
          w = w.return;
        } while (w !== null);
        l = new Error((Re(a.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
      }
      L2(), l = fb(l, a);
      var J = t;
      do {
        switch (J.tag) {
          case _: {
            var fe = l;
            J.flags |= Aa;
            var _e = dr(f);
            J.lanes = tn(J.lanes, _e);
            var lt = sw(J, fe, _e);
            ZC(J, lt);
            return;
          }
          case E:
            var Pt = l, ht = J.type, Jt = J.stateNode;
            if ((J.flags & nn) === un && (typeof ht.getDerivedStateFromError == "function" || Jt !== null && typeof Jt.componentDidCatch == "function" && !Pb(Jt))) {
              J.flags |= Aa;
              var Sn = dr(f);
              J.lanes = tn(J.lanes, Sn);
              var Z = cw(J, Pt, Sn);
              ZC(J, Z);
              return;
            }
            break;
        }
        J = J.return;
      } while (J !== null);
    }
    var fw = null;
    fw = /* @__PURE__ */ new Set();
    var ZO = typeof WeakSet == "function" ? WeakSet : Set, JO = function(e, t) {
      t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount();
    };
    function e2(e, t) {
      if (jr(null, JO, null, e, t), ua()) {
        var a = Fr();
        xu(e, a);
      }
    }
    function dw(e) {
      var t = e.ref;
      if (t !== null)
        if (typeof t == "function") {
          if (jr(null, t, null, null), ua()) {
            var a = Fr();
            xu(e, a);
          }
        } else
          t.current = null;
    }
    function t2(e, t) {
      if (jr(null, t, null), ua()) {
        var a = Fr();
        xu(e, a);
      }
    }
    function n2(e, t) {
      switch (t.tag) {
        case x:
        case z:
        case q:
        case se:
          return;
        case E: {
          if (t.flags & ei && e !== null) {
            var a = e.memoizedProps, l = e.memoizedState, f = t.stateNode;
            t.type === t.elementType && !Hs && (f.props !== t.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(t.type) || "instance"), f.state !== t.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(t.type) || "instance"));
            var p = f.getSnapshotBeforeUpdate(t.elementType === t.type ? a : Vi(t.type, a), l);
            {
              var y = fw;
              p === void 0 && !y.has(t.type) && (y.add(t.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Re(t.type)));
            }
            f.__reactInternalSnapshotBeforeUpdate = p;
          }
          return;
        }
        case _: {
          if (t.flags & ei) {
            var b = t.stateNode;
            Fy(b.containerInfo);
          }
          return;
        }
        case L:
        case H:
        case N:
        case oe:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function r2(e, t) {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var f = l.next, p = f;
        do {
          if ((p.tag & e) === e) {
            var y = p.destroy;
            p.destroy = void 0, y !== void 0 && y();
          }
          p = p.next;
        } while (p !== f);
      }
    }
    function a2(e, t) {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var f = l.next, p = f;
        do {
          if ((p.tag & e) === e) {
            var y = p.create;
            p.destroy = y();
            {
              var b = p.destroy;
              if (b !== void 0 && typeof b != "function") {
                var w = void 0;
                b === null ? w = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof b.then == "function" ? w = `

It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : w = " You returned: " + b, h("An effect function must not return anything besides a function, which is used for clean-up.%s", w);
              }
            }
          }
          p = p.next;
        } while (p !== f);
      }
    }
    function i2(e) {
      var t = e.updateQueue, a = t !== null ? t.lastEffect : null;
      if (a !== null) {
        var l = a.next, f = l;
        do {
          var p = f, y = p.next, b = p.tag;
          (b & pv) !== R0 && (b & tf) !== R0 && (Dw(e, f), B2(e, f)), f = y;
        } while (f !== l);
      }
    }
    function o2(e, t, a, l) {
      switch (a.tag) {
        case x:
        case z:
        case q:
        case se: {
          a2(nf | tf, a), i2(a);
          return;
        }
        case E: {
          var f = a.stateNode;
          if (a.flags & vt)
            if (t === null)
              a.type === a.elementType && !Hs && (f.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a.type) || "instance"), f.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a.type) || "instance")), f.componentDidMount();
            else {
              var p = a.elementType === a.type ? t.memoizedProps : Vi(a.type, t.memoizedProps), y = t.memoizedState;
              a.type === a.elementType && !Hs && (f.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a.type) || "instance"), f.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a.type) || "instance")), f.componentDidUpdate(p, y, f.__reactInternalSnapshotBeforeUpdate);
            }
          var b = a.updateQueue;
          b !== null && (a.type === a.elementType && !Hs && (f.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a.type) || "instance"), f.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a.type) || "instance")), eE(a, b, f));
          return;
        }
        case _: {
          var w = a.updateQueue;
          if (w !== null) {
            var O = null;
            if (a.child !== null)
              switch (a.child.tag) {
                case L:
                  O = a.child.stateNode;
                  break;
                case E:
                  O = a.child.stateNode;
                  break;
              }
            eE(a, w, O);
          }
          return;
        }
        case L: {
          var D = a.stateNode;
          if (t === null && a.flags & vt) {
            var X = a.type, j = a.memoizedProps;
            Xk(D, X, j);
          }
          return;
        }
        case H:
          return;
        case N:
          return;
        case P: {
          {
            var J = a.memoizedProps;
            J.onCommit;
            var fe = J.onRender;
            a.stateNode.effectDuration;
            var _e = xO();
            typeof fe == "function" && fe(a.memoizedProps.id, t === null ? "mount" : "update", a.actualDuration, a.treeBaseDuration, a.actualStartTime, _e, e.memoizedInteractions);
          }
          return;
        }
        case I: {
          p2(e, a);
          return;
        }
        case ge:
        case oe:
        case pe:
        case te:
        case de:
        case Ce:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function vw(e, t) {
      for (var a = e; ; ) {
        if (a.tag === L) {
          var l = a.stateNode;
          t ? oM(l) : uM(a.stateNode, a.memoizedProps);
        } else if (a.tag === H) {
          var f = a.stateNode;
          t ? lM(f) : sM(f, a.memoizedProps);
        } else if (!((a.tag === de || a.tag === Ce) && a.memoizedState !== null && a !== e)) {
          if (a.child !== null) {
            a.child.return = a, a = a.child;
            continue;
          }
        }
        if (a === e)
          return;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
    }
    function l2(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, l;
        switch (e.tag) {
          case L:
            l = a;
            break;
          default:
            l = a;
        }
        typeof t == "function" ? t(l) : (t.hasOwnProperty("current") || h("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Re(e.type)), t.current = l);
      }
    }
    function u2(e) {
      var t = e.ref;
      t !== null && (typeof t == "function" ? t(null) : t.current = null);
    }
    function pw(e, t, a) {
      switch ($M(t), t.tag) {
        case x:
        case z:
        case Y:
        case q:
        case se: {
          var l = t.updateQueue;
          if (l !== null) {
            var f = l.lastEffect;
            if (f !== null) {
              var p = f.next, y = p;
              do {
                var b = y, w = b.destroy, O = b.tag;
                w !== void 0 && ((O & pv) !== R0 ? Dw(t, y) : t2(t, w)), y = y.next;
              } while (y !== p);
            }
          }
          return;
        }
        case E: {
          dw(t);
          var D = t.stateNode;
          typeof D.componentWillUnmount == "function" && e2(t, D);
          return;
        }
        case L: {
          dw(t);
          return;
        }
        case N: {
          yw(e, t);
          return;
        }
        case pe:
          return;
        case re:
          return;
        case te:
          return;
      }
    }
    function s2(e, t, a) {
      for (var l = t; ; ) {
        if (pw(e, l), l.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
        // If we don't use mutation we drill down into portals here instead.
        l.tag !== N) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    function hw(e) {
      e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null, e._debugOwner = null;
    }
    function c2(e) {
      for (var t = e.return; t !== null; ) {
        if (mw(t))
          return t;
        t = t.return;
      }
      throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function mw(e) {
      return e.tag === L || e.tag === _ || e.tag === N;
    }
    function f2(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || mw(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== L && t.tag !== H && t.tag !== re; ) {
            if (t.flags & Tt || t.child === null || t.tag === N)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Tt))
            return t.stateNode;
        }
    }
    function gw(e) {
      var t = c2(e), a, l, f = t.stateNode;
      switch (t.tag) {
        case L:
          a = f, l = !1;
          break;
        case _:
          a = f.containerInfo, l = !0;
          break;
        case N:
          a = f.containerInfo, l = !0;
          break;
        case pe:
        default:
          throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
      t.flags & Sr && (pC(a), t.flags &= ~Sr);
      var p = f2(e);
      l ? vb(e, p, a) : pb(e, p, a);
    }
    function vb(e, t, a) {
      var l = e.tag, f = l === L || l === H;
      if (f || we) {
        var p = f ? e.stateNode : e.stateNode.instance;
        t ? rM(a, p, t) : tM(a, p);
      } else if (l !== N) {
        var y = e.child;
        if (y !== null) {
          vb(y, t, a);
          for (var b = y.sibling; b !== null; )
            vb(b, t, a), b = b.sibling;
        }
      }
    }
    function pb(e, t, a) {
      var l = e.tag, f = l === L || l === H;
      if (f || we) {
        var p = f ? e.stateNode : e.stateNode.instance;
        t ? nM(a, p, t) : eM(a, p);
      } else if (l !== N) {
        var y = e.child;
        if (y !== null) {
          pb(y, t, a);
          for (var b = y.sibling; b !== null; )
            pb(b, t, a), b = b.sibling;
        }
      }
    }
    function yw(e, t, a) {
      for (var l = t, f = !1, p, y; ; ) {
        if (!f) {
          var b = l.return;
          e:
            for (; ; ) {
              if (b === null)
                throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
              var w = b.stateNode;
              switch (b.tag) {
                case L:
                  p = w, y = !1;
                  break e;
                case _:
                  p = w.containerInfo, y = !0;
                  break e;
                case N:
                  p = w.containerInfo, y = !0;
                  break e;
              }
              b = b.return;
            }
          f = !0;
        }
        if (l.tag === L || l.tag === H)
          s2(e, l), y ? iM(p, l.stateNode) : aM(p, l.stateNode);
        else if (l.tag === N) {
          if (l.child !== null) {
            p = l.stateNode.containerInfo, y = !0, l.child.return = l, l = l.child;
            continue;
          }
        } else if (pw(e, l), l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return, l.tag === N && (f = !1);
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }
    function d2(e, t, a) {
      yw(e, t);
      var l = t.alternate;
      hw(t), l !== null && hw(l);
    }
    function hb(e, t) {
      switch (t.tag) {
        case x:
        case z:
        case Y:
        case q:
        case se: {
          r2(nf | tf, t);
          return;
        }
        case E:
          return;
        case L: {
          var a = t.stateNode;
          if (a != null) {
            var l = t.memoizedProps, f = e !== null ? e.memoizedProps : l, p = t.type, y = t.updateQueue;
            t.updateQueue = null, y !== null && Zk(a, y, p, f, l);
          }
          return;
        }
        case H: {
          if (t.stateNode === null)
            throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var b = t.stateNode, w = t.memoizedProps, O = e !== null ? e.memoizedProps : w;
          Jk(b, O, w);
          return;
        }
        case _: {
          {
            var D = t.stateNode;
            D.hydrate && (D.hydrate = !1, gM(D.containerInfo));
          }
          return;
        }
        case P:
          return;
        case I: {
          v2(t), bw(t);
          return;
        }
        case ge: {
          bw(t);
          return;
        }
        case oe:
          return;
        case pe:
          break;
        case te:
          break;
        case de:
        case Ce: {
          var X = t.memoizedState, j = X !== null;
          vw(t, j);
          return;
        }
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function v2(e) {
      var t = e.memoizedState;
      if (t !== null) {
        N2();
        {
          var a = e.child;
          vw(a, !0);
        }
      }
    }
    function p2(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var l = t.alternate;
        if (l !== null) {
          var f = l.memoizedState;
          if (f !== null) {
            var p = f.dehydrated;
            p !== null && yM(p);
          }
        }
      }
    }
    function bw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new ZO()), t.forEach(function(l) {
          var f = Z2.bind(null, e, l);
          a.has(l) || (l.__reactDoNotTraceInteractions !== !0 && (f = c.unstable_wrap(f)), a.add(l), l.then(f, f));
        });
      }
    }
    function h2(e, t) {
      if (e !== null) {
        var a = e.memoizedState;
        if (a === null || a.dehydrated !== null) {
          var l = t.memoizedState;
          return l !== null && l.dehydrated === null;
        }
      }
      return !1;
    }
    function m2(e) {
      pC(e.stateNode);
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Tv = Symbol.for;
      Tv("selector.component"), Tv("selector.has_pseudo_class"), Tv("selector.role"), Tv("selector.test_id"), Tv("selector.text");
    }
    var g2 = [];
    function y2() {
      g2.forEach(function(e) {
        return e();
      });
    }
    var b2 = Math.ceil, mb = d.ReactCurrentDispatcher, gb = d.ReactCurrentOwner, yb = d.IsSomeRendererActing, Xn = (
      /*             */
      0
    ), wm = (
      /*               */
      1
    ), S2 = (
      /*                 */
      2
    ), bb = (
      /*         */
      4
    ), Sb = (
      /*       */
      8
    ), $a = (
      /*                */
      16
    ), Ho = (
      /*                */
      32
    ), Sw = (
      /*       */
      64
    ), El = 0, xm = 1, Tm = 2, Rm = 3, _m = 4, Cb = 5, pt = Xn, fa = null, Zn = null, da = ue, $o = ue, Eb = mu(ue), Kr = El, km = null, $s = ue, Mm = ue, Us = ue, Om = ue, wb = null, xb = 0, Cw = 500, Ew = 1 / 0, C2 = 500;
    function uf() {
      Ew = ta() + C2;
    }
    function ww() {
      return Ew;
    }
    var qe = null, Nm = !1, Tb = null, sf = null, wl = !1, cf = null, Rv = Xy, Rb = ue, _b = [], kb = [], xl = null, E2 = 50, _v = 0, Mb = null, w2 = 50, Dm = 0, js = null, kv = kn, Tl = ue, Am = ue, Ob = !1, Mv = null, Lm = !1;
    function x2() {
      return fa;
    }
    function Ua() {
      return (pt & ($a | Ho)) !== Xn ? ta() : (kv !== kn || (kv = ta()), kv);
    }
    function wu(e) {
      var t = e.mode;
      if ((t & Ta) === $n)
        return Ft;
      if ((t & Os) === $n)
        return Qc() === fi ? Ft : zi;
      Tl === ue && (Tl = $s);
      var a = YM() !== qM;
      if (a)
        return Am !== ue && (Am = wb !== null ? wb.pendingLanes : ue), Bp(Tl, Am);
      var l = Qc(), f;
      if (
        // TODO: Temporary. We're removing the concept of discrete updates.
        (pt & bb) !== Xn && l === ks
      )
        f = lu(eu, Tl);
      else {
        var p = Ed(l);
        f = lu(p, Tl);
      }
      return f;
    }
    function T2(e) {
      var t = e.mode;
      return (t & Ta) === $n ? Ft : (t & Os) === $n ? Qc() === fi ? Ft : zi : (Tl === ue && (Tl = $s), Td(Tl));
    }
    function ra(e, t, a) {
      eN(), aN(e);
      var l = Pm(e, t);
      if (l === null)
        return nN(e), null;
      su(l, t, a), l === fa && (Us = tn(Us, t), Kr === _m && ff(l, da));
      var f = Qc();
      t === Ft ? /* Check if we're inside unbatchedUpdates */ (pt & Sb) !== Xn && // Check if we're not already rendering
      (pt & ($a | Ho)) === Xn ? (Tu(l, t), Nb(l)) : (hi(l, a), Tu(l, t), pt === Xn && (uf(), Po())) : ((pt & bb) !== Xn && // Only updates at user-blocking priority or greater are considered
      // discrete, even inside a discrete event.
      (f === ks || f === fi) && (xl === null ? xl = /* @__PURE__ */ new Set([l]) : xl.add(l)), hi(l, a), Tu(l, t)), wb = l;
    }
    function Pm(e, t) {
      e.lanes = tn(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = tn(a.lanes, t)), a === null && (e.flags & (Tt | ba)) !== un && Lw(e);
      for (var l = e, f = e.return; f !== null; )
        f.childLanes = tn(f.childLanes, t), a = f.alternate, a !== null ? a.childLanes = tn(a.childLanes, t) : (f.flags & (Tt | ba)) !== un && Lw(e), l = f, f = f.return;
      if (l.tag === _) {
        var p = l.stateNode;
        return p;
      } else
        return null;
    }
    function hi(e, t) {
      var a = e.callbackNode;
      gy(e, t);
      var l = cs(e, e === fa ? da : ue), f = Zr();
      if (l === ue) {
        a !== null && (jC(a), e.callbackNode = null, e.callbackPriority = Pi);
        return;
      }
      if (a !== null) {
        var p = e.callbackPriority;
        if (p === f)
          return;
        jC(a);
      }
      var y;
      if (f === bo)
        y = WM(Nb.bind(null, e));
      else if (f === is)
        y = gu(fi, Nb.bind(null, e));
      else {
        var b = _c(f);
        y = gu(b, xw.bind(null, e));
      }
      e.callbackPriority = f, e.callbackNode = y;
    }
    function xw(e) {
      if (kv = kn, Tl = ue, Am = ue, (pt & ($a | Ho)) !== Xn)
        throw Error("Should not already be working.");
      var t = e.callbackNode, a = Uo();
      if (a && e.callbackNode !== t)
        return null;
      var l = cs(e, e === fa ? da : ue);
      if (l === ue)
        return null;
      var f = I2(e, l);
      if (wr($s, Us))
        df(e, ue);
      else if (f !== El) {
        if (f === Tm && (pt |= Sw, e.hydrate && (e.hydrate = !1, Fy(e.containerInfo)), l = Ca(e), l !== ue && (f = Ov(e, l))), f === xm) {
          var p = km;
          throw df(e, ue), ff(e, l), hi(e, ta()), p;
        }
        var y = e.current.alternate;
        e.finishedWork = y, e.finishedLanes = l, R2(e, f, l);
      }
      return hi(e, ta()), e.callbackNode === t ? xw.bind(null, e) : null;
    }
    function R2(e, t, a) {
      switch (t) {
        case El:
        case xm:
          throw Error("Root did not complete. This is a bug in React.");
        case Tm: {
          Fs(e);
          break;
        }
        case Rm: {
          if (ff(e, a), xd(a) && // do not delay if we're inside an act() scope
          !uN()) {
            var l = xb + Cw - ta();
            if (l > 10) {
              var f = cs(e, ue);
              if (f !== ue)
                break;
              var p = e.suspendedLanes;
              if (!xo(p, a)) {
                Ua(), _d(e, p);
                break;
              }
              e.timeoutHandle = vC(Fs.bind(null, e), l);
              break;
            }
          }
          Fs(e);
          break;
        }
        case _m: {
          if (ff(e, a), Vp(a))
            break;
          {
            var y = hy(e, a), b = y, w = ta() - b, O = J2(w) - w;
            if (O > 10) {
              e.timeoutHandle = vC(Fs.bind(null, e), O);
              break;
            }
          }
          Fs(e);
          break;
        }
        case Cb: {
          Fs(e);
          break;
        }
        default:
          throw Error("Unknown root exit status.");
      }
    }
    function ff(e, t) {
      t = uu(t, Om), t = uu(t, Us), qp(e, t);
    }
    function Nb(e) {
      if ((pt & ($a | Ho)) !== Xn)
        throw Error("Should not already be working.");
      Uo();
      var t, a;
      if (e === fa && wr(e.expiredLanes, da) ? (t = da, a = Ov(e, t), wr($s, Us) && (t = cs(e, t), a = Ov(e, t))) : (t = cs(e, ue), a = Ov(e, t)), e.tag !== qy && a === Tm && (pt |= Sw, e.hydrate && (e.hydrate = !1, Fy(e.containerInfo)), t = Ca(e), t !== ue && (a = Ov(e, t))), a === xm) {
        var l = km;
        throw df(e, ue), ff(e, t), hi(e, ta()), l;
      }
      var f = e.current.alternate;
      return e.finishedWork = f, e.finishedLanes = t, Fs(e), hi(e, ta()), null;
    }
    function _2() {
      if ((pt & (wm | $a | Ho)) !== Xn) {
        (pt & $a) !== Xn && h("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.");
        return;
      }
      k2(), Uo();
    }
    function k2() {
      if (xl !== null) {
        var e = xl;
        xl = null, e.forEach(function(t) {
          fs(t), hi(t, ta());
        });
      }
      Po();
    }
    function Tw(e, t) {
      var a = pt;
      pt |= wm;
      try {
        return e(t);
      } finally {
        pt = a, pt === Xn && (uf(), Po());
      }
    }
    function M2(e, t) {
      var a = pt;
      pt |= S2;
      try {
        return e(t);
      } finally {
        pt = a, pt === Xn && (uf(), Po());
      }
    }
    function O2(e, t, a, l, f) {
      var p = pt;
      pt |= bb;
      try {
        return Ms(ks, e.bind(null, t, a, l, f));
      } finally {
        pt = p, pt === Xn && (uf(), Po());
      }
    }
    function Rw(e, t) {
      var a = pt;
      pt &= ~wm, pt |= Sb;
      try {
        return e(t);
      } finally {
        pt = a, pt === Xn && (uf(), Po());
      }
    }
    function Db(e, t) {
      var a = pt;
      if ((a & ($a | Ho)) !== Xn)
        return h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), e(t);
      pt |= wm;
      try {
        return e ? Ms(fi, e.bind(null, t)) : void 0;
      } finally {
        pt = a, Po();
      }
    }
    function zm(e, t) {
      ea(Eb, $o, e), $o = tn($o, t), $s = tn($s, t);
    }
    function Ab(e) {
      $o = Eb.current, Jr(Eb, e);
    }
    function df(e, t) {
      e.finishedWork = null, e.finishedLanes = ue;
      var a = e.timeoutHandle;
      if (a !== jy && (e.timeoutHandle = jy, Qk(a)), Zn !== null)
        for (var l = Zn.return; l !== null; )
          uw(l), l = l.return;
      fa = e, Zn = Vs(e.current, null), da = $o = $s = t, Kr = El, km = null, Mm = ue, Us = ue, Om = ue, js = null, Fi.discardPendingWarnings();
    }
    function _w(e, t) {
      do {
        var a = Zn;
        try {
          if (Fh(), SE(), Nn(), gb.current = null, a === null || a.return === null) {
            Kr = xm, km = t, Zn = null;
            return;
          }
          ke && a.mode & Ha && bm(a, !0), XO(e, a.return, a, t, da), Nw(a);
        } catch (l) {
          t = l, Zn === a && a !== null ? (a = a.return, Zn = a) : a = Zn;
          continue;
        }
        return;
      } while (!0);
    }
    function kw() {
      var e = mb.current;
      return mb.current = mm, e === null ? mm : e;
    }
    function Mw(e) {
      mb.current = e;
    }
    function Im(e) {
      {
        var t = c.__interactionsRef.current;
        return c.__interactionsRef.current = e.memoizedInteractions, t;
      }
    }
    function Hm(e) {
      c.__interactionsRef.current = e;
    }
    function N2() {
      xb = ta();
    }
    function Lb(e) {
      Mm = tn(e, Mm);
    }
    function D2() {
      Kr === El && (Kr = Rm);
    }
    function A2() {
      (Kr === El || Kr === Rm) && (Kr = _m), fa !== null && (wd(Mm) || wd(Us)) && ff(fa, da);
    }
    function L2() {
      Kr !== Cb && (Kr = Tm);
    }
    function P2() {
      return Kr === El;
    }
    function Ov(e, t) {
      var a = pt;
      pt |= $a;
      var l = kw();
      (fa !== e || da !== t) && (df(e, t), Uw(e, t));
      var f = Im(e);
      do
        try {
          z2();
          break;
        } catch (p) {
          _w(e, p);
        }
      while (!0);
      if (Fh(), Hm(f), pt = a, Mw(l), Zn !== null)
        throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return fa = null, da = ue, Kr;
    }
    function z2() {
      for (; Zn !== null; )
        Ow(Zn);
    }
    function I2(e, t) {
      var a = pt;
      pt |= $a;
      var l = kw();
      (fa !== e || da !== t) && (uf(), df(e, t), Uw(e, t));
      var f = Im(e);
      do
        try {
          H2();
          break;
        } catch (p) {
          _w(e, p);
        }
      while (!0);
      return Fh(), Hm(f), Mw(l), pt = a, Zn !== null ? El : (fa = null, da = ue, Kr);
    }
    function H2() {
      for (; Zn !== null && !VM(); )
        Ow(Zn);
    }
    function Ow(e) {
      var t = e.alternate;
      vn(e);
      var a;
      (e.mode & Ha) !== $n ? (X0(e), a = zb(t, e, $o), bm(e, !0)) : a = zb(t, e, $o), Nn(), e.memoizedProps = e.pendingProps, a === null ? Nw(e) : Zn = a, gb.current = null;
    }
    function Nw(e) {
      var t = e;
      do {
        var a = t.alternate, l = t.return;
        if ((t.flags & qu) === un) {
          vn(t);
          var f = void 0;
          if ((t.mode & Ha) === $n ? f = lw(a, t, $o) : (X0(t), f = lw(a, t, $o), bm(t, !1)), Nn(), f !== null) {
            Zn = f;
            return;
          }
          if ($2(t), l !== null && // Do not append effects to parents if a sibling failed to complete
          (l.flags & qu) === un) {
            l.firstEffect === null && (l.firstEffect = t.firstEffect), t.lastEffect !== null && (l.lastEffect !== null && (l.lastEffect.nextEffect = t.firstEffect), l.lastEffect = t.lastEffect);
            var p = t.flags;
            p > Vr && (l.lastEffect !== null ? l.lastEffect.nextEffect = t : l.firstEffect = t, l.lastEffect = t);
          }
        } else {
          var y = GO(t);
          if (y !== null) {
            y.flags &= el, Zn = y;
            return;
          }
          if ((t.mode & Ha) !== $n) {
            bm(t, !1);
            for (var b = t.actualDuration, w = t.child; w !== null; )
              b += w.actualDuration, w = w.sibling;
            t.actualDuration = b;
          }
          l !== null && (l.firstEffect = l.lastEffect = null, l.flags |= qu);
        }
        var O = t.sibling;
        if (O !== null) {
          Zn = O;
          return;
        }
        t = l, Zn = t;
      } while (t !== null);
      Kr === El && (Kr = Cb);
    }
    function $2(e) {
      if (
        // TODO: Move this check out of the hot path by moving `resetChildLanes`
        // to switch statement in `completeWork`.
        !((e.tag === Ce || e.tag === de) && e.memoizedState !== null && !wr($o, Pa) && (e.mode & Os) !== ue)
      ) {
        var t = ue;
        if ((e.mode & Ha) !== $n) {
          for (var a = e.actualDuration, l = e.selfBaseDuration, f = e.alternate === null || e.child !== e.alternate.child, p = e.child; p !== null; )
            t = tn(t, tn(p.lanes, p.childLanes)), f && (a += p.actualDuration), l += p.treeBaseDuration, p = p.sibling;
          var y = e.tag === I && e.memoizedState !== null;
          if (y) {
            var b = e.child;
            b !== null && (l -= b.treeBaseDuration);
          }
          e.actualDuration = a, e.treeBaseDuration = l;
        } else
          for (var w = e.child; w !== null; )
            t = tn(t, tn(w.lanes, w.childLanes)), w = w.sibling;
        e.childLanes = t;
      }
    }
    function Fs(e) {
      var t = Qc();
      return Ms(fi, U2.bind(null, e, t)), null;
    }
    function U2(e, t) {
      do
        Uo();
      while (cf !== null);
      if (tN(), (pt & ($a | Ho)) !== Xn)
        throw Error("Should not already be working.");
      var a = e.finishedWork, l = e.finishedLanes;
      if (a === null)
        return null;
      if (e.finishedWork = null, e.finishedLanes = ue, a === e.current)
        throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null;
      var f = tn(a.lanes, a.childLanes);
      kd(e, f), xl !== null && !by(f) && xl.has(e) && xl.delete(e), e === fa && (fa = null, Zn = null, da = ue);
      var p;
      if (a.flags > Vr ? a.lastEffect !== null ? (a.lastEffect.nextEffect = a, p = a.firstEffect) : p = a : p = a.firstEffect, p !== null) {
        var y = pt;
        pt |= Ho;
        var b = Im(e);
        gb.current = null, Mv = Vk(e.containerInfo), Lm = !1, qe = p;
        do
          if (jr(null, j2, null), ua()) {
            if (qe === null)
              throw Error("Should be working on an effect.");
            var w = Fr();
            xu(qe, w), qe = qe.nextEffect;
          }
        while (qe !== null);
        Mv = null, zE(), qe = p;
        do
          if (jr(null, F2, null, e, t), ua()) {
            if (qe === null)
              throw Error("Should be working on an effect.");
            var O = Fr();
            xu(qe, O), qe = qe.nextEffect;
          }
        while (qe !== null);
        Bk(e.containerInfo), e.current = a, qe = p;
        do
          if (jr(null, V2, null, e, l), ua()) {
            if (qe === null)
              throw Error("Should be working on an effect.");
            var D = Fr();
            xu(qe, D), qe = qe.nextEffect;
          }
        while (qe !== null);
        qe = null, BM(), Hm(b), pt = y;
      } else
        e.current = a, zE();
      var X = wl;
      if (wl)
        wl = !1, cf = e, Rb = l, Rv = t;
      else
        for (qe = p; qe !== null; ) {
          var j = qe.nextEffect;
          qe.nextEffect = null, qe.flags & Rn && Fw(qe), qe = j;
        }
      if (f = e.pendingLanes, f !== ue) {
        if (js !== null) {
          var J = js;
          js = null;
          for (var fe = 0; fe < J.length; fe++)
            $w(e, J[fe], e.memoizedInteractions);
        }
        Tu(e, f);
      } else
        sf = null;
      if (X || jw(e, l), f === Ft ? e === Mb ? _v++ : (_v = 0, Mb = e) : _v = 0, HM(a.stateNode, t), y2(), hi(e, ta()), Nm) {
        Nm = !1;
        var _e = Tb;
        throw Tb = null, _e;
      }
      return (pt & Sb) !== Xn || Po(), null;
    }
    function j2() {
      for (; qe !== null; ) {
        var e = qe.alternate;
        !Lm && Mv !== null && ((qe.flags & Rn) !== un ? Ip(qe, Mv) && (Lm = !0) : qe.tag === I && h2(e, qe) && Ip(qe, Mv) && (Lm = !0));
        var t = qe.flags;
        (t & ei) !== un && (vn(qe), n2(e, qe), Nn()), (t & ql) !== un && (wl || (wl = !0, gu(bl, function() {
          return Uo(), null;
        }))), qe = qe.nextEffect;
      }
    }
    function F2(e, t) {
      for (; qe !== null; ) {
        vn(qe);
        var a = qe.flags;
        if (a & Sr && m2(qe), a & Cr) {
          var l = qe.alternate;
          l !== null && u2(l);
        }
        var f = a & (Tt | vt | Rn | ba);
        switch (f) {
          case Tt: {
            gw(qe), qe.flags &= ~Tt;
            break;
          }
          case vo: {
            gw(qe), qe.flags &= ~Tt;
            var p = qe.alternate;
            hb(p, qe);
            break;
          }
          case ba: {
            qe.flags &= ~ba;
            break;
          }
          case Lp: {
            qe.flags &= ~ba;
            var y = qe.alternate;
            hb(y, qe);
            break;
          }
          case vt: {
            var b = qe.alternate;
            hb(b, qe);
            break;
          }
          case Rn: {
            d2(e, qe);
            break;
          }
        }
        Nn(), qe = qe.nextEffect;
      }
    }
    function V2(e, t) {
      for (; qe !== null; ) {
        vn(qe);
        var a = qe.flags;
        if (a & (vt | po)) {
          var l = qe.alternate;
          o2(e, l, qe);
        }
        a & Cr && l2(qe), Nn(), qe = qe.nextEffect;
      }
    }
    function Uo() {
      if (Rv !== Xy) {
        var e = Rv > bl ? bl : Rv;
        return Rv = Xy, Ms(e, K2);
      }
      return !1;
    }
    function B2(e, t) {
      _b.push(t, e), wl || (wl = !0, gu(bl, function() {
        return Uo(), null;
      }));
    }
    function Dw(e, t) {
      kb.push(t, e);
      {
        e.flags |= Yl;
        var a = e.alternate;
        a !== null && (a.flags |= Yl);
      }
      wl || (wl = !0, gu(bl, function() {
        return Uo(), null;
      }));
    }
    function W2(e) {
      var t = e.create;
      e.destroy = t();
    }
    function K2() {
      if (cf === null)
        return !1;
      var e = cf, t = Rb;
      if (cf = null, Rb = ue, (pt & ($a | Ho)) !== Xn)
        throw Error("Cannot flush passive effects while already rendering.");
      Ob = !0;
      var a = pt;
      pt |= Ho;
      var l = Im(e), f = kb;
      kb = [];
      for (var p = 0; p < f.length; p += 2) {
        var y = f[p], b = f[p + 1], w = y.destroy;
        y.destroy = void 0;
        {
          b.flags &= ~Yl;
          var O = b.alternate;
          O !== null && (O.flags &= ~Yl);
        }
        if (typeof w == "function") {
          if (vn(b), jr(null, w, null), ua()) {
            if (b === null)
              throw Error("Should be working on an effect.");
            var D = Fr();
            xu(b, D);
          }
          Nn();
        }
      }
      var X = _b;
      _b = [];
      for (var j = 0; j < X.length; j += 2) {
        var J = X[j], fe = X[j + 1];
        {
          if (vn(fe), jr(null, W2, null, J), ua()) {
            if (fe === null)
              throw Error("Should be working on an effect.");
            var _e = Fr();
            xu(fe, _e);
          }
          Nn();
        }
      }
      for (var lt = e.current.firstEffect; lt !== null; ) {
        var Pt = lt.nextEffect;
        lt.nextEffect = null, lt.flags & Rn && Fw(lt), lt = Pt;
      }
      return Hm(l), jw(e, t), Ob = !1, pt = a, Po(), Dm = cf === null ? 0 : Dm + 1, !0;
    }
    function Pb(e) {
      return sf !== null && sf.has(e);
    }
    function G2(e) {
      sf === null ? sf = /* @__PURE__ */ new Set([e]) : sf.add(e);
    }
    function q2(e) {
      Nm || (Nm = !0, Tb = e);
    }
    var Y2 = q2;
    function Aw(e, t, a) {
      var l = fb(a, t), f = sw(e, l, Ft);
      bu(e, f);
      var p = Ua(), y = Pm(e, Ft);
      y !== null && (su(y, Ft, p), hi(y, p), Tu(y, Ft));
    }
    function xu(e, t) {
      if (e.tag === _) {
        Aw(e, e, t);
        return;
      }
      for (var a = e.return; a !== null; ) {
        if (a.tag === _) {
          Aw(a, e, t);
          return;
        } else if (a.tag === E) {
          var l = a.type, f = a.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && !Pb(f)) {
            var p = fb(t, e), y = cw(a, p, Ft);
            bu(a, y);
            var b = Ua(), w = Pm(a, Ft);
            if (w !== null)
              su(w, Ft, b), hi(w, b), Tu(w, Ft);
            else if (typeof f.componentDidCatch == "function" && !Pb(f))
              try {
                f.componentDidCatch(t, p);
              } catch (O) {
              }
            return;
          }
        }
        a = a.return;
      }
    }
    function Q2(e, t, a) {
      var l = e.pingCache;
      l !== null && l.delete(t);
      var f = Ua();
      _d(e, a), fa === e && xo(da, a) && (Kr === _m || Kr === Rm && xd(da) && ta() - xb < Cw ? df(e, ue) : Om = tn(Om, a)), hi(e, f), Tu(e, a);
    }
    function X2(e, t) {
      t === qn && (t = T2(e));
      var a = Ua(), l = Pm(e, t);
      l !== null && (su(l, t, a), hi(l, a), Tu(l, t));
    }
    function Z2(e, t) {
      var a = qn, l;
      l = e.stateNode, l !== null && l.delete(t), X2(e, a);
    }
    function J2(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : b2(e / 1960) * 1960;
    }
    function eN() {
      if (_v > E2)
        throw _v = 0, Mb = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Dm > w2 && (Dm = 0, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function tN() {
      Fi.flushLegacyContextWarning(), Fi.flushPendingUnsafeLifecycleWarnings();
    }
    var $m = null;
    function Lw(e) {
      {
        if ((pt & $a) !== Xn || !(e.mode & (Ta | Os)))
          return;
        var t = e.tag;
        if (t !== M && t !== _ && t !== E && t !== x && t !== z && t !== Y && t !== q && t !== se)
          return;
        var a = Re(e.type) || "ReactComponent";
        if ($m !== null) {
          if ($m.has(a))
            return;
          $m.add(a);
        } else
          $m = /* @__PURE__ */ new Set([a]);
        var l = dt;
        try {
          vn(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? vn(e) : Nn();
        }
      }
    }
    var Um = null;
    function nN(e) {
      {
        var t = e.tag;
        if (t !== _ && t !== E && t !== x && t !== z && t !== Y && t !== q && t !== se || (e.flags & Yl) !== un)
          return;
        var a = Re(e.type) || "ReactComponent";
        if (Um !== null) {
          if (Um.has(a))
            return;
          Um.add(a);
        } else
          Um = /* @__PURE__ */ new Set([a]);
        if (!Ob) {
          var l = dt;
          try {
            vn(e), h("Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.", t === E ? "the componentWillUnmount method" : "a useEffect cleanup function");
          } finally {
            l ? vn(e) : Nn();
          }
        }
      }
    }
    var zb;
    {
      var rN = null;
      zb = function(e, t, a) {
        var l = Kw(rN, t);
        try {
          return nw(e, t, a);
        } catch (p) {
          if (p !== null && typeof p == "object" && typeof p.then == "function")
            throw p;
          if (Fh(), SE(), uw(t), Kw(t, l), t.mode & Ha && X0(t), jr(null, nw, null, e, t, a), ua()) {
            var f = Fr();
            throw f;
          } else
            throw p;
        }
      };
    }
    var Pw = !1, Ib;
    Ib = /* @__PURE__ */ new Set();
    function aN(e) {
      if (Ht && (pt & $a) !== Xn && !wO())
        switch (e.tag) {
          case x:
          case z:
          case q: {
            var t = Zn && Re(Zn.type) || "Unknown", a = t;
            if (!Ib.has(a)) {
              Ib.add(a);
              var l = Re(e.type) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, t, t);
            }
            break;
          }
          case E: {
            Pw || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Pw = !0);
            break;
          }
        }
    }
    var jm = {
      current: !1
    };
    function zw(e) {
      if (yb.current === !0 && jm.current !== !0) {
        var t = dt;
        try {
          vn(e), h(`It looks like you're using the wrong act() around your test interactions.
Be sure to use the matching version of act() corresponding to your renderer:

// for react-dom:
import {act} from 'react-dom/test-utils';
// ...
act(() => ...);

// for react-test-renderer:
import TestRenderer from react-test-renderer';
const {act} = TestRenderer;
// ...
act(() => ...);`);
        } finally {
          t ? vn(e) : Nn();
        }
      }
    }
    function Iw(e) {
      (e.mode & Qn) !== $n && yb.current === !1 && jm.current === !1 && h(`An update to %s ran an effect, but was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Re(e.type));
    }
    function iN(e) {
      if (pt === Xn && yb.current === !1 && jm.current === !1) {
        var t = dt;
        try {
          vn(e), h(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Re(e.type));
        } finally {
          t ? vn(e) : Nn();
        }
      }
    }
    var oN = iN, Hw = !1;
    function lN(e) {
      Hw === !1 && s.unstable_flushAllWithoutAsserting === void 0 && (e.mode & Ta || e.mode & Os) && (Hw = !0, h(`In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://reactjs.org/link/mock-scheduler`));
    }
    function Hb(e, t) {
      return t * 1e3 + e.interactionThreadID;
    }
    function Fm(e) {
      js === null ? js = [e] : js.push(e);
    }
    function $w(e, t, a) {
      if (a.size > 0) {
        var l = e.pendingInteractionMap, f = l.get(t);
        f != null ? a.forEach(function(b) {
          f.has(b) || b.__count++, f.add(b);
        }) : (l.set(t, new Set(a)), a.forEach(function(b) {
          b.__count++;
        }));
        var p = c.__subscriberRef.current;
        if (p !== null) {
          var y = Hb(e, t);
          p.onWorkScheduled(a, y);
        }
      }
    }
    function Tu(e, t) {
      $w(e, t, c.__interactionsRef.current);
    }
    function Uw(e, t) {
      var a = /* @__PURE__ */ new Set();
      if (e.pendingInteractionMap.forEach(function(p, y) {
        wr(t, y) && p.forEach(function(b) {
          return a.add(b);
        });
      }), e.memoizedInteractions = a, a.size > 0) {
        var l = c.__subscriberRef.current;
        if (l !== null) {
          var f = Hb(e, t);
          try {
            l.onWorkStarted(a, f);
          } catch (p) {
            gu(fi, function() {
              throw p;
            });
          }
        }
      }
    }
    function jw(e, t) {
      var a = e.pendingLanes, l;
      try {
        if (l = c.__subscriberRef.current, l !== null && e.memoizedInteractions.size > 0) {
          var f = Hb(e, t);
          l.onWorkStopped(e.memoizedInteractions, f);
        }
      } catch (y) {
        gu(fi, function() {
          throw y;
        });
      } finally {
        var p = e.pendingInteractionMap;
        p.forEach(function(y, b) {
          wr(a, b) || (p.delete(b), y.forEach(function(w) {
            if (w.__count--, l !== null && w.__count === 0)
              try {
                l.onInteractionScheduledWorkCompleted(w);
              } catch (O) {
                gu(fi, function() {
                  throw O;
                });
              }
          }));
        });
      }
    }
    function uN() {
      return sN > 0;
    }
    var sN = 0;
    function Fw(e) {
      e.sibling = null, e.stateNode = null;
    }
    var mi = null, vf = null, cN = function(e) {
      mi = e;
    };
    function pf(e) {
      {
        if (mi === null)
          return e;
        var t = mi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function $b(e) {
      return pf(e);
    }
    function Ub(e) {
      {
        if (mi === null)
          return e;
        var t = mi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = pf(e.render);
            if (e.render !== a) {
              var l = {
                $$typeof: $e,
                render: a
              };
              return e.displayName !== void 0 && (l.displayName = e.displayName), l;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function Vw(e, t) {
      {
        if (mi === null)
          return !1;
        var a = e.elementType, l = t.type, f = !1, p = typeof l == "object" && l !== null ? l.$$typeof : null;
        switch (e.tag) {
          case E: {
            typeof l == "function" && (f = !0);
            break;
          }
          case x: {
            (typeof l == "function" || p === At) && (f = !0);
            break;
          }
          case z: {
            (p === $e || p === At) && (f = !0);
            break;
          }
          case Y:
          case q: {
            (p === Ge || p === At) && (f = !0);
            break;
          }
          default:
            return !1;
        }
        if (f) {
          var y = mi(a);
          if (y !== void 0 && y === mi(l))
            return !0;
        }
        return !1;
      }
    }
    function Bw(e) {
      {
        if (mi === null || typeof WeakSet != "function")
          return;
        vf === null && (vf = /* @__PURE__ */ new WeakSet()), vf.add(e);
      }
    }
    var fN = function(e, t) {
      {
        if (mi === null)
          return;
        var a = t.staleFamilies, l = t.updatedFamilies;
        Uo(), Db(function() {
          jb(e.current, l, a);
        });
      }
    }, dN = function(e, t) {
      {
        if (e.context !== Ia)
          return;
        Uo(), Db(function() {
          Nv(t, e, null, null);
        });
      }
    };
    function jb(e, t, a) {
      {
        var l = e.alternate, f = e.child, p = e.sibling, y = e.tag, b = e.type, w = null;
        switch (y) {
          case x:
          case q:
          case E:
            w = b;
            break;
          case z:
            w = b.render;
            break;
        }
        if (mi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var O = !1, D = !1;
        if (w !== null) {
          var X = mi(w);
          X !== void 0 && (a.has(X) ? D = !0 : t.has(X) && (y === E ? D = !0 : O = !0));
        }
        vf !== null && (vf.has(e) || l !== null && vf.has(l)) && (D = !0), D && (e._debugNeedsRemount = !0), (D || O) && ra(e, Ft, kn), f !== null && !D && jb(f, t, a), p !== null && jb(p, t, a);
      }
    }
    var vN = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), l = new Set(t.map(function(f) {
          return f.current;
        }));
        return Fb(e.current, l, a), a;
      }
    };
    function Fb(e, t, a) {
      {
        var l = e.child, f = e.sibling, p = e.tag, y = e.type, b = null;
        switch (p) {
          case x:
          case q:
          case E:
            b = y;
            break;
          case z:
            b = y.render;
            break;
        }
        var w = !1;
        b !== null && t.has(b) && (w = !0), w ? pN(e, a) : l !== null && Fb(l, t, a), f !== null && Fb(f, t, a);
      }
    }
    function pN(e, t) {
      {
        var a = hN(e, t);
        if (a)
          return;
        for (var l = e; ; ) {
          switch (l.tag) {
            case L:
              t.add(l.stateNode);
              return;
            case N:
              t.add(l.stateNode.containerInfo);
              return;
            case _:
              t.add(l.stateNode.containerInfo);
              return;
          }
          if (l.return === null)
            throw new Error("Expected to reach root first.");
          l = l.return;
        }
      }
    }
    function hN(e, t) {
      for (var a = e, l = !1; ; ) {
        if (a.tag === L)
          l = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return l;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return l;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var Vb;
    {
      Vb = !1;
      try {
        var Ww = Object.preventExtensions({});
      } catch (e) {
        Vb = !0;
      }
    }
    var mN = 1;
    function gN(e, t, a, l) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = un, this.nextEffect = null, this.firstEffect = null, this.lastEffect = null, this.lanes = ue, this.childLanes = ue, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugID = mN++, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Vb && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var ja = function(e, t, a, l) {
      return new gN(e, t, a, l);
    };
    function Bb(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function yN(e) {
      return typeof e == "function" && !Bb(e) && e.defaultProps === void 0;
    }
    function bN(e) {
      if (typeof e == "function")
        return Bb(e) ? E : x;
      if (e != null) {
        var t = e.$$typeof;
        if (t === $e)
          return z;
        if (t === Ge)
          return Y;
      }
      return M;
    }
    function Vs(e, t) {
      var a = e.alternate;
      a === null ? (a = ja(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugID = e._debugID, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = un, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, a.actualDuration = 0, a.actualStartTime = -1), a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var l = e.dependencies;
      switch (a.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case M:
        case x:
        case q:
          a.type = pf(e.type);
          break;
        case E:
          a.type = $b(e.type);
          break;
        case z:
          a.type = Ub(e.type);
          break;
      }
      return a;
    }
    function SN(e, t) {
      e.flags &= Tt, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ue, e.lanes = t, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var l = a.dependencies;
        e.dependencies = l === null ? null : {
          lanes: l.lanes,
          firstContext: l.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function CN(e) {
      var t;
      return e === MC ? t = Os | Ta | Qn : e === kC ? t = Ta | Qn : t = $n, PM && (t |= Ha), ja(_, null, null, t);
    }
    function Wb(e, t, a, l, f, p) {
      var y = M, b = e;
      if (typeof e == "function")
        Bb(e) ? (y = E, b = $b(b)) : b = pf(b);
      else if (typeof e == "string")
        y = L;
      else
        e:
          switch (e) {
            case Ut:
              return Bs(a.children, f, p, t);
            case oa:
              y = A, f |= KM;
              break;
            case ir:
              y = A, f |= Qn;
              break;
            case Vt:
              return EN(a, f, p, t);
            case St:
              return wN(a, f, p, t);
            case Me:
              return xN(a, f, p, t);
            case qr:
              return Gb(a, f, p, t);
            case Ln:
              return TN(a, f, p, t);
            case An:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case dn:
                    y = $;
                    break e;
                  case jt:
                    y = G;
                    break e;
                  case $e:
                    y = z, b = Ub(b);
                    break e;
                  case Ge:
                    y = Y;
                    break e;
                  case At:
                    y = ne, b = null;
                    break e;
                  case mn:
                    y = se;
                    break e;
                }
              var w = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (w += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var O = l ? Re(l.type) : null;
                O && (w += `

Check the render method of \`` + O + "`.");
              }
              throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (e == null ? e : typeof e) + "." + w);
            }
          }
      var D = ja(y, a, t, f);
      return D.elementType = e, D.type = b, D.lanes = p, D._debugOwner = l, D;
    }
    function Kb(e, t, a) {
      var l = null;
      l = e._owner;
      var f = e.type, p = e.key, y = e.props, b = Wb(f, p, y, l, t, a);
      return b._debugSource = e._source, b._debugOwner = e._owner, b;
    }
    function Bs(e, t, a, l) {
      var f = ja(V, e, l, t);
      return f.lanes = a, f;
    }
    function EN(e, t, a, l) {
      typeof e.id != "string" && h('Profiler must specify an "id" as a prop');
      var f = ja(P, e, l, t | Ha);
      return f.elementType = Vt, f.type = Vt, f.lanes = a, f.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, f;
    }
    function wN(e, t, a, l) {
      var f = ja(I, e, l, t);
      return f.type = St, f.elementType = St, f.lanes = a, f;
    }
    function xN(e, t, a, l) {
      var f = ja(ge, e, l, t);
      return f.type = Me, f.elementType = Me, f.lanes = a, f;
    }
    function Gb(e, t, a, l) {
      var f = ja(de, e, l, t);
      return f.type = qr, f.elementType = qr, f.lanes = a, f;
    }
    function TN(e, t, a, l) {
      var f = ja(Ce, e, l, t);
      return f.type = Ln, f.elementType = Ln, f.lanes = a, f;
    }
    function qb(e, t, a) {
      var l = ja(H, e, null, t);
      return l.lanes = a, l;
    }
    function RN() {
      var e = ja(L, null, null, $n);
      return e.elementType = "DELETED", e.type = "DELETED", e;
    }
    function Yb(e, t, a) {
      var l = e.children !== null ? e.children : [], f = ja(N, l, e.key, t);
      return f.lanes = a, f.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, f;
    }
    function Kw(e, t) {
      return e === null && (e = ja(M, null, null, $n)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.nextEffect = t.nextEffect, e.firstEffect = t.firstEffect, e.lastEffect = t.lastEffect, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugID = t._debugID, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function _N(e, t, a) {
      switch (this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = jy, this.context = null, this.pendingContext = null, this.hydrate = a, this.callbackNode = null, this.callbackPriority = Pi, this.eventTimes = kc(ue), this.expirationTimes = kc(kn), this.pendingLanes = ue, this.suspendedLanes = ue, this.pingedLanes = ue, this.expiredLanes = ue, this.mutableReadLanes = ue, this.finishedLanes = ue, this.entangledLanes = ue, this.entanglements = kc(ue), this.mutableSourceEagerHydrationData = null, this.interactionThreadID = c.unstable_getThreadID(), this.memoizedInteractions = /* @__PURE__ */ new Set(), this.pendingInteractionMap = /* @__PURE__ */ new Map(), t) {
        case kC:
          this._debugRootType = "createBlockingRoot()";
          break;
        case MC:
          this._debugRootType = "createRoot()";
          break;
        case qy:
          this._debugRootType = "createLegacyRoot()";
          break;
      }
    }
    function kN(e, t, a, l) {
      var f = new _N(e, t, a), p = CN(t);
      return f.current = p, p.stateNode = f, a0(p), f;
    }
    function MN(e, t) {
      var a = t._getVersion, l = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, l] : e.mutableSourceEagerHydrationData.push(t, l);
    }
    function ON(e, t, a) {
      var l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Ot,
        key: l == null ? null : "" + l,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var Qb, Xb;
    Qb = !1, Xb = {};
    function NN(e) {
      if (!e)
        return Ia;
      var t = Oi(e), a = LM(t);
      if (t.tag === E) {
        var l = t.type;
        if (Ao(l))
          return RC(t, l, a);
      }
      return a;
    }
    function DN(e, t) {
      {
        var a = Oi(e);
        if (a === void 0)
          throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(e));
        var l = od(a);
        if (l === null)
          return null;
        if (l.mode & Qn) {
          var f = Re(a.type) || "Component";
          if (!Xb[f]) {
            Xb[f] = !0;
            var p = dt;
            try {
              vn(l), a.mode & Qn ? h("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f) : h("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, f);
            } finally {
              p ? vn(p) : Nn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function AN(e, t, a, l) {
      return kN(e, t, a);
    }
    function Nv(e, t, a, l) {
      IM(t, e);
      var f = t.current, p = Ua();
      typeof jest != "undefined" && (lN(f), zw(f));
      var y = wu(f), b = NN(a);
      t.context === null ? t.context = b : t.pendingContext = b, Ht && dt !== null && !Qb && (Qb = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Re(dt.type) || "Unknown"));
      var w = yu(p, y);
      return w.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), w.callback = l), bu(f, w), ra(f, y, p), y;
    }
    function Zb(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case L:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Gw(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Hi(a.retryLane, t));
    }
    function Jb(e, t) {
      Gw(e, t);
      var a = e.alternate;
      a && Gw(a, t);
    }
    function LN(e) {
      if (e.tag === I) {
        var t = Ua(), a = sl;
        ra(e, a, t), Jb(e, a);
      }
    }
    function PN(e) {
      if (e.tag === I) {
        var t = Ua(), a = Tc;
        ra(e, a, t), Jb(e, a);
      }
    }
    function zN(e) {
      if (e.tag === I) {
        var t = Ua(), a = wu(e);
        ra(e, a, t), Jb(e, a);
      }
    }
    function IN(e, t) {
      try {
        return t();
      } finally {
      }
    }
    function qw(e) {
      var t = ld(e);
      return t === null ? null : t.tag === pe ? t.stateNode.instance : t.stateNode;
    }
    var Yw = function(e) {
      return !1;
    };
    function HN(e) {
      return Yw(e);
    }
    var Qw = null, Xw = null, Zw = null, Jw = null, ex = null, tx = null, nx = null, rx = null;
    {
      var ax = function(e, t, a) {
        var l = t[a], f = Array.isArray(e) ? e.slice() : o({}, e);
        return a + 1 === t.length ? (Array.isArray(f) ? f.splice(l, 1) : delete f[l], f) : (f[l] = ax(e[l], t, a + 1), f);
      }, ix = function(e, t) {
        return ax(e, t, 0);
      }, ox = function(e, t, a, l) {
        var f = t[l], p = Array.isArray(e) ? e.slice() : o({}, e);
        if (l + 1 === t.length) {
          var y = a[l];
          p[y] = p[f], Array.isArray(p) ? p.splice(f, 1) : delete p[f];
        } else
          p[f] = ox(
            // $FlowFixMe number or string is fine here
            e[f],
            t,
            a,
            l + 1
          );
        return p;
      }, lx = function(e, t, a) {
        if (t.length !== a.length) {
          m("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < a.length - 1; l++)
            if (t[l] !== a[l]) {
              m("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return ox(e, t, a, 0);
      }, ux = function(e, t, a, l) {
        if (a >= t.length)
          return l;
        var f = t[a], p = Array.isArray(e) ? e.slice() : o({}, e);
        return p[f] = ux(e[f], t, a + 1, l), p;
      }, sx = function(e, t, a) {
        return ux(e, t, 0, a);
      }, eS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Qw = function(e, t, a, l) {
        var f = eS(e, t);
        if (f !== null) {
          var p = sx(f.memoizedState, a, l);
          f.memoizedState = p, f.baseState = p, e.memoizedProps = o({}, e.memoizedProps), ra(e, Ft, kn);
        }
      }, Xw = function(e, t, a) {
        var l = eS(e, t);
        if (l !== null) {
          var f = ix(l.memoizedState, a);
          l.memoizedState = f, l.baseState = f, e.memoizedProps = o({}, e.memoizedProps), ra(e, Ft, kn);
        }
      }, Zw = function(e, t, a, l) {
        var f = eS(e, t);
        if (f !== null) {
          var p = lx(f.memoizedState, a, l);
          f.memoizedState = p, f.baseState = p, e.memoizedProps = o({}, e.memoizedProps), ra(e, Ft, kn);
        }
      }, Jw = function(e, t, a) {
        e.pendingProps = sx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), ra(e, Ft, kn);
      }, ex = function(e, t) {
        e.pendingProps = ix(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps), ra(e, Ft, kn);
      }, tx = function(e, t, a) {
        e.pendingProps = lx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), ra(e, Ft, kn);
      }, nx = function(e) {
        ra(e, Ft, kn);
      }, rx = function(e) {
        Yw = e;
      };
    }
    function $N(e) {
      var t = od(e);
      return t === null ? null : t.stateNode;
    }
    function UN(e) {
      return null;
    }
    function jN() {
      return dt;
    }
    function FN(e) {
      var t = e.findFiberByHostInstance, a = d.ReactCurrentDispatcher;
      return zM({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Qw,
        overrideHookStateDeletePath: Xw,
        overrideHookStateRenamePath: Zw,
        overrideProps: Jw,
        overridePropsDeletePath: ex,
        overridePropsRenamePath: tx,
        setSuspenseHandler: rx,
        scheduleUpdate: nx,
        currentDispatcherRef: a,
        findHostInstanceByFiber: $N,
        findFiberByHostInstance: t || UN,
        // React Refresh
        findHostInstancesForRefresh: vN,
        scheduleRefresh: fN,
        scheduleRoot: dN,
        setRefreshHandler: cN,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: jN
      });
    }
    function tS(e, t, a) {
      this._internalRoot = VN(e, t, a);
    }
    tS.prototype.render = function(e) {
      var t = this._internalRoot;
      {
        typeof arguments[1] == "function" && h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
        var a = t.containerInfo;
        if (a.nodeType !== $r) {
          var l = qw(t.current);
          l && l.parentNode !== a && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Nv(e, t, null, null);
    }, tS.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot, t = e.containerInfo;
      Nv(null, e, null, function() {
        SC(t);
      });
    };
    function VN(e, t, a) {
      var l = a != null && a.hydrate === !0;
      a != null && a.hydrationOptions;
      var f = a != null && a.hydrationOptions != null && a.hydrationOptions.mutableSources || null, p = AN(e, t, l);
      AM(p.current, e), e.nodeType;
      {
        var y = e.nodeType === $r ? e.parentNode : e;
        B1(y);
      }
      if (f)
        for (var b = 0; b < f.length; b++) {
          var w = f[b];
          MN(p, w);
        }
      return p;
    }
    function BN(e, t) {
      return new tS(e, qy, t);
    }
    function hf(e) {
      return !!(e && (e.nodeType === ga || e.nodeType === lo || e.nodeType === lp || e.nodeType === $r && e.nodeValue === " react-mount-point-unstable "));
    }
    var WN = d.ReactCurrentOwner, cx, fx = !1;
    cx = function(e) {
      if (e._reactRootContainer && e.nodeType !== $r) {
        var t = qw(e._reactRootContainer._internalRoot.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, l = Vm(e), f = !!(l && hu(l));
      f && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ga && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Vm(e) {
      return e ? e.nodeType === lo ? e.documentElement : e.firstChild : null;
    }
    function KN(e) {
      var t = Vm(e);
      return !!(t && t.nodeType === ga && t.hasAttribute(Dt));
    }
    function GN(e, t) {
      var a = t || KN(e);
      if (!a)
        for (var l = !1, f; f = e.lastChild; )
          !l && f.nodeType === ga && f.hasAttribute(Dt) && (l = !0, h("render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")), e.removeChild(f);
      return a && !t && !fx && (fx = !0, m("render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v18. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.")), BN(e, a ? {
        hydrate: !0
      } : void 0);
    }
    function qN(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Bm(e, t, a, l, f) {
      cx(a), qN(f === void 0 ? null : f, "render");
      var p = a._reactRootContainer, y;
      if (p) {
        if (y = p._internalRoot, typeof f == "function") {
          var w = f;
          f = function() {
            var O = Zb(y);
            w.call(O);
          };
        }
        Nv(t, y, e, f);
      } else {
        if (p = a._reactRootContainer = GN(a, l), y = p._internalRoot, typeof f == "function") {
          var b = f;
          f = function() {
            var O = Zb(y);
            b.call(O);
          };
        }
        Rw(function() {
          Nv(t, y, e, f);
        });
      }
      return Zb(y);
    }
    function YN(e) {
      {
        var t = WN.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Re(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ga ? e : DN(e, "findDOMNode");
    }
    function QN(e, t, a) {
      if (!hf(t))
        throw Error("Target container is not a DOM element.");
      {
        var l = _h(t) && t._reactRootContainer === void 0;
        l && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?");
      }
      return Bm(null, e, t, !0, a);
    }
    function XN(e, t, a) {
      if (!hf(t))
        throw Error("Target container is not a DOM element.");
      {
        var l = _h(t) && t._reactRootContainer === void 0;
        l && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Bm(null, e, t, !1, a);
    }
    function ZN(e, t, a, l) {
      if (!hf(a))
        throw Error("Target container is not a DOM element.");
      if (!(e != null && Ap(e)))
        throw Error("parentComponent must be a valid React Component");
      return Bm(e, t, a, !1, l);
    }
    function JN(e) {
      if (!hf(e))
        throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = _h(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = Vm(e), l = a && !hu(a);
          l && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Rw(function() {
          Bm(null, null, e, !1, function() {
            e._reactRootContainer = null, SC(e);
          });
        }), !0;
      } else {
        {
          var f = Vm(e), p = !!(f && hu(f)), y = e.nodeType === ga && hf(e.parentNode) && !!e.parentNode._reactRootContainer;
          p && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", y ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    bc(LN), Hp(PN), Ql(zN), tl(IN);
    var dx = !1;
    (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Xf(Lk), vc(Tw, O2, _2, M2);
    function vx(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!hf(t))
        throw Error("Target container is not a DOM element.");
      return ON(e, t, null, a);
    }
    function eD(e, t, a, l) {
      return ZN(e, t, a, l);
    }
    function tD(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      return dx || (dx = !0, m('The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 18+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.')), vx(e, t, a);
    }
    var nD = {
      // Keep in sync with ReactTestUtils.js, and ReactTestUtilsAct.js.
      // This is an array for better minification.
      Events: [
        hu,
        Kc,
        kh,
        Bl,
        Zf,
        Uo,
        // TODO: This is related to `act`, not events. Move to separate key?
        jm
      ]
    }, rD = FN({
      findFiberByHostInstance: _s,
      bundleType: 1,
      version: VC,
      rendererPackageName: "react-dom"
    });
    if (!rD && Xe && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var px = window.location.protocol;
      /^(https?|file):$/.test(px) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (px === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Va.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nD, Va.createPortal = vx, Va.findDOMNode = YN, Va.flushSync = Db, Va.hydrate = QN, Va.render = XN, Va.unmountComponentAtNode = JN, Va.unstable_batchedUpdates = Tw, Va.unstable_createPortal = tD, Va.unstable_renderSubtreeIntoContainer = eD, Va.version = VC;
  }()), Va;
}
function sR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sR);
    } catch (r) {
      console.error(r);
    }
  }
}
process.env.NODE_ENV === "production" ? (sR(), _S.exports = PA()) : _S.exports = $A();
var Rg = _S.exports;
const UA = /* @__PURE__ */ ZT(Rg);
function dg(r) {
  return r instanceof HTMLElement || r instanceof SVGElement;
}
function ag(r) {
  return dg(r) ? r : r instanceof Ma.Component ? UA.findDOMNode(r) : null;
}
function _g(r, o, s) {
  var c = T.useRef({});
  return (!("value" in c.current) || s(c.current.condition, o)) && (c.current.value = r(), c.current.condition = o), c.current.value;
}
function m1(r, o) {
  typeof r == "function" ? r(o) : Bn(r) === "object" && r && "current" in r && (r.current = o);
}
function cR() {
  for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
    o[s] = arguments[s];
  var c = o.filter(function(d) {
    return d;
  });
  return c.length <= 1 ? c[0] : function(d) {
    o.forEach(function(m) {
      m1(m, d);
    });
  };
}
function kg() {
  for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
    o[s] = arguments[s];
  return _g(function() {
    return cR.apply(void 0, o);
  }, o, function(c, d) {
    return c.length !== d.length || c.every(function(m, h) {
      return m !== d[h];
    });
  });
}
function Mg(r) {
  var o, s, c = aR.isMemo(r) ? r.type.type : r.type;
  return !(typeof c == "function" && !((o = c.prototype) !== null && o !== void 0 && o.render) || typeof r == "function" && !((s = r.prototype) !== null && s !== void 0 && s.render));
}
var kS = /* @__PURE__ */ T.createContext(null);
function jA(r) {
  var o = r.children, s = r.onBatchResize, c = T.useRef(0), d = T.useRef([]), m = T.useContext(kS), h = T.useCallback(function(C, x, E) {
    c.current += 1;
    var M = c.current;
    d.current.push({
      size: C,
      element: x,
      data: E
    }), Promise.resolve().then(function() {
      M === c.current && (s == null || s(d.current), d.current = []);
    }), m == null || m(C, x, E);
  }, [s, m]);
  return /* @__PURE__ */ T.createElement(kS.Provider, {
    value: h
  }, o);
}
var fR = function() {
  if (typeof Map != "undefined")
    return Map;
  function r(o, s) {
    var c = -1;
    return o.some(function(d, m) {
      return d[0] === s ? (c = m, !0) : !1;
    }), c;
  }
  return (
    /** @class */
    function() {
      function o() {
        this.__entries__ = [];
      }
      return Object.defineProperty(o.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), o.prototype.get = function(s) {
        var c = r(this.__entries__, s), d = this.__entries__[c];
        return d && d[1];
      }, o.prototype.set = function(s, c) {
        var d = r(this.__entries__, s);
        ~d ? this.__entries__[d][1] = c : this.__entries__.push([s, c]);
      }, o.prototype.delete = function(s) {
        var c = this.__entries__, d = r(c, s);
        ~d && c.splice(d, 1);
      }, o.prototype.has = function(s) {
        return !!~r(this.__entries__, s);
      }, o.prototype.clear = function() {
        this.__entries__.splice(0);
      }, o.prototype.forEach = function(s, c) {
        c === void 0 && (c = null);
        for (var d = 0, m = this.__entries__; d < m.length; d++) {
          var h = m[d];
          s.call(c, h[1], h[0]);
        }
      }, o;
    }()
  );
}(), MS = typeof window != "undefined" && typeof document != "undefined" && window.document === document, vg = function() {
  return typeof global != "undefined" && global.Math === Math ? global : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")();
}(), FA = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(vg) : function(r) {
    return setTimeout(function() {
      return r(Date.now());
    }, 1e3 / 60);
  };
}(), VA = 2;
function BA(r, o) {
  var s = !1, c = !1, d = 0;
  function m() {
    s && (s = !1, r()), c && C();
  }
  function h() {
    FA(m);
  }
  function C() {
    var x = Date.now();
    if (s) {
      if (x - d < VA)
        return;
      c = !0;
    } else
      s = !0, c = !1, setTimeout(h, o);
    d = x;
  }
  return C;
}
var WA = 20, KA = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], GA = typeof MutationObserver != "undefined", qA = (
  /** @class */
  function() {
    function r() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = BA(this.refresh.bind(this), WA);
    }
    return r.prototype.addObserver = function(o) {
      ~this.observers_.indexOf(o) || this.observers_.push(o), this.connected_ || this.connect_();
    }, r.prototype.removeObserver = function(o) {
      var s = this.observers_, c = s.indexOf(o);
      ~c && s.splice(c, 1), !s.length && this.connected_ && this.disconnect_();
    }, r.prototype.refresh = function() {
      var o = this.updateObservers_();
      o && this.refresh();
    }, r.prototype.updateObservers_ = function() {
      var o = this.observers_.filter(function(s) {
        return s.gatherActive(), s.hasActive();
      });
      return o.forEach(function(s) {
        return s.broadcastActive();
      }), o.length > 0;
    }, r.prototype.connect_ = function() {
      !MS || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), GA ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, r.prototype.disconnect_ = function() {
      !MS || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, r.prototype.onTransitionEnd_ = function(o) {
      var s = o.propertyName, c = s === void 0 ? "" : s, d = KA.some(function(m) {
        return !!~c.indexOf(m);
      });
      d && this.refresh();
    }, r.getInstance = function() {
      return this.instance_ || (this.instance_ = new r()), this.instance_;
    }, r.instance_ = null, r;
  }()
), dR = function(r, o) {
  for (var s = 0, c = Object.keys(o); s < c.length; s++) {
    var d = c[s];
    Object.defineProperty(r, d, {
      value: o[d],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return r;
}, kf = function(r) {
  var o = r && r.ownerDocument && r.ownerDocument.defaultView;
  return o || vg;
}, vR = Og(0, 0, 0, 0);
function pg(r) {
  return parseFloat(r) || 0;
}
function Mx(r) {
  for (var o = [], s = 1; s < arguments.length; s++)
    o[s - 1] = arguments[s];
  return o.reduce(function(c, d) {
    var m = r["border-" + d + "-width"];
    return c + pg(m);
  }, 0);
}
function YA(r) {
  for (var o = ["top", "right", "bottom", "left"], s = {}, c = 0, d = o; c < d.length; c++) {
    var m = d[c], h = r["padding-" + m];
    s[m] = pg(h);
  }
  return s;
}
function QA(r) {
  var o = r.getBBox();
  return Og(0, 0, o.width, o.height);
}
function XA(r) {
  var o = r.clientWidth, s = r.clientHeight;
  if (!o && !s)
    return vR;
  var c = kf(r).getComputedStyle(r), d = YA(c), m = d.left + d.right, h = d.top + d.bottom, C = pg(c.width), x = pg(c.height);
  if (c.boxSizing === "border-box" && (Math.round(C + m) !== o && (C -= Mx(c, "left", "right") + m), Math.round(x + h) !== s && (x -= Mx(c, "top", "bottom") + h)), !JA(r)) {
    var E = Math.round(C + m) - o, M = Math.round(x + h) - s;
    Math.abs(E) !== 1 && (C -= E), Math.abs(M) !== 1 && (x -= M);
  }
  return Og(d.left, d.top, C, x);
}
var ZA = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement != "undefined" ? function(r) {
    return r instanceof kf(r).SVGGraphicsElement;
  } : function(r) {
    return r instanceof kf(r).SVGElement && typeof r.getBBox == "function";
  };
}();
function JA(r) {
  return r === kf(r).document.documentElement;
}
function eL(r) {
  return MS ? ZA(r) ? QA(r) : XA(r) : vR;
}
function tL(r) {
  var o = r.x, s = r.y, c = r.width, d = r.height, m = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object, h = Object.create(m.prototype);
  return dR(h, {
    x: o,
    y: s,
    width: c,
    height: d,
    top: s,
    right: o + c,
    bottom: d + s,
    left: o
  }), h;
}
function Og(r, o, s, c) {
  return { x: r, y: o, width: s, height: c };
}
var nL = (
  /** @class */
  function() {
    function r(o) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Og(0, 0, 0, 0), this.target = o;
    }
    return r.prototype.isActive = function() {
      var o = eL(this.target);
      return this.contentRect_ = o, o.width !== this.broadcastWidth || o.height !== this.broadcastHeight;
    }, r.prototype.broadcastRect = function() {
      var o = this.contentRect_;
      return this.broadcastWidth = o.width, this.broadcastHeight = o.height, o;
    }, r;
  }()
), rL = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(o, s) {
      var c = tL(s);
      dR(this, { target: o, contentRect: c });
    }
    return r;
  }()
), aL = (
  /** @class */
  function() {
    function r(o, s, c) {
      if (this.activeObservations_ = [], this.observations_ = new fR(), typeof o != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = o, this.controller_ = s, this.callbackCtx_ = c;
    }
    return r.prototype.observe = function(o) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
        if (!(o instanceof kf(o).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var s = this.observations_;
        s.has(o) || (s.set(o, new nL(o)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, r.prototype.unobserve = function(o) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
        if (!(o instanceof kf(o).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var s = this.observations_;
        s.has(o) && (s.delete(o), s.size || this.controller_.removeObserver(this));
      }
    }, r.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, r.prototype.gatherActive = function() {
      var o = this;
      this.clearActive(), this.observations_.forEach(function(s) {
        s.isActive() && o.activeObservations_.push(s);
      });
    }, r.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var o = this.callbackCtx_, s = this.activeObservations_.map(function(c) {
          return new rL(c.target, c.broadcastRect());
        });
        this.callback_.call(o, s, o), this.clearActive();
      }
    }, r.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, r.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, r;
  }()
), pR = typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : new fR(), hR = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(o) {
      if (!(this instanceof r))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var s = qA.getInstance(), c = new aL(o, s, this);
      pR.set(this, c);
    }
    return r;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(r) {
  hR.prototype[r] = function() {
    var o;
    return (o = pR.get(this))[r].apply(o, arguments);
  };
});
var iL = function() {
  return typeof vg.ResizeObserver != "undefined" ? vg.ResizeObserver : hR;
}(), Nl = /* @__PURE__ */ new Map();
function mR(r) {
  r.forEach(function(o) {
    var s, c = o.target;
    (s = Nl.get(c)) === null || s === void 0 || s.forEach(function(d) {
      return d(c);
    });
  });
}
var gR = new iL(mR);
process.env.NODE_ENV;
process.env.NODE_ENV;
function oL(r, o) {
  Nl.has(r) || (Nl.set(r, /* @__PURE__ */ new Set()), gR.observe(r)), Nl.get(r).add(o);
}
function lL(r, o) {
  Nl.has(r) && (Nl.get(r).delete(o), Nl.get(r).size || (gR.unobserve(r), Nl.delete(r)));
}
function Zi(r, o) {
  if (!(r instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
function Ox(r, o) {
  for (var s = 0; s < o.length; s++) {
    var c = o[s];
    c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(r, eR(c.key), c);
  }
}
function Ji(r, o, s) {
  return o && Ox(r.prototype, o), s && Ox(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function OS(r, o) {
  return OS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, d) {
    return c.__proto__ = d, c;
  }, OS(r, o);
}
function Nf(r, o) {
  if (typeof o != "function" && o !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(o && o.prototype, {
    constructor: {
      value: r,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(r, "prototype", {
    writable: !1
  }), o && OS(r, o);
}
function Nu(r) {
  return Nu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
    return s.__proto__ || Object.getPrototypeOf(s);
  }, Nu(r);
}
function Ng() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (o) {
  }
  return (Ng = function() {
    return !!r;
  })();
}
function NS(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function g1(r, o) {
  if (o && (Bn(o) === "object" || typeof o == "function"))
    return o;
  if (o !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return NS(r);
}
function Dg(r) {
  var o = Ng();
  return function() {
    var c = Nu(r), d;
    if (o) {
      var m = Nu(this).constructor;
      d = Reflect.construct(c, arguments, m);
    } else
      d = c.apply(this, arguments);
    return g1(this, d);
  };
}
var uL = /* @__PURE__ */ function(r) {
  Nf(s, r);
  var o = Dg(s);
  function s() {
    return Zi(this, s), o.apply(this, arguments);
  }
  return Ji(s, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), s;
}(T.Component);
function sL(r, o) {
  var s = r.children, c = r.disabled, d = T.useRef(null), m = T.useRef(null), h = T.useContext(kS), C = typeof s == "function", x = C ? s(d) : s, E = T.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), M = !C && /* @__PURE__ */ T.isValidElement(x) && Mg(x), _ = M ? x.ref : null, N = kg(_, d), L = function() {
    var G;
    return ag(d.current) || // Support `nativeElement` format
    (d.current && Bn(d.current) === "object" ? ag((G = d.current) === null || G === void 0 ? void 0 : G.nativeElement) : null) || ag(m.current);
  };
  T.useImperativeHandle(o, function() {
    return L();
  });
  var H = T.useRef(r);
  H.current = r;
  var V = T.useCallback(function(A) {
    var G = H.current, $ = G.onResize, z = G.data, P = A.getBoundingClientRect(), I = P.width, Y = P.height, q = A.offsetWidth, ne = A.offsetHeight, oe = Math.floor(I), re = Math.floor(Y);
    if (E.current.width !== oe || E.current.height !== re || E.current.offsetWidth !== q || E.current.offsetHeight !== ne) {
      var ge = {
        width: oe,
        height: re,
        offsetWidth: q,
        offsetHeight: ne
      };
      E.current = ge;
      var pe = q === Math.round(I) ? I : q, te = ne === Math.round(Y) ? Y : ne, se = Te(Te({}, ge), {}, {
        offsetWidth: pe,
        offsetHeight: te
      });
      h == null || h(se, A, z), $ && Promise.resolve().then(function() {
        $(se, A);
      });
    }
  }, []);
  return T.useEffect(function() {
    var A = L();
    return A && !c && oL(A, V), function() {
      return lL(A, V);
    };
  }, [d.current, c]), /* @__PURE__ */ T.createElement(uL, {
    ref: m
  }, M ? /* @__PURE__ */ T.cloneElement(x, {
    ref: N
  }) : x);
}
var yR = /* @__PURE__ */ T.forwardRef(sL);
process.env.NODE_ENV !== "production" && (yR.displayName = "SingleObserver");
var cL = "rc-observer-key";
function fL(r, o) {
  var s = r.children, c = typeof s == "function" ? [s] : Bv(s);
  return process.env.NODE_ENV !== "production" && (c.length > 1 ? _f(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : c.length === 0 && _f(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), c.map(function(d, m) {
    var h = (d == null ? void 0 : d.key) || "".concat(cL, "-").concat(m);
    return /* @__PURE__ */ T.createElement(yR, an({}, r, {
      key: h,
      ref: m === 0 ? o : void 0
    }), d);
  });
}
var Df = /* @__PURE__ */ T.forwardRef(fL);
process.env.NODE_ENV !== "production" && (Df.displayName = "ResizeObserver");
Df.Collection = jA;
function va() {
  return !!(typeof window != "undefined" && window.document && window.document.createElement);
}
var Nx = process.env.NODE_ENV !== "test" && va() ? T.useLayoutEffect : T.useEffect, ia = function(o, s) {
  var c = T.useRef(!0);
  Nx(function() {
    return o(c.current);
  }, s), Nx(function() {
    return c.current = !1, function() {
      c.current = !0;
    };
  }, []);
}, Dx = function(o, s) {
  ia(function(c) {
    if (!c)
      return o();
  }, s);
}, dL = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], mf = void 0;
function vL(r, o) {
  var s = r.prefixCls, c = r.invalidate, d = r.item, m = r.renderItem, h = r.responsive, C = r.responsiveDisabled, x = r.registerSize, E = r.itemKey, M = r.className, _ = r.style, N = r.children, L = r.display, H = r.order, V = r.component, A = V === void 0 ? "div" : V, G = Fn(r, dL), $ = h && !L;
  function z(ne) {
    x(E, ne);
  }
  T.useEffect(function() {
    return function() {
      z(null);
    };
  }, []);
  var P = m && d !== mf ? m(d) : N, I;
  c || (I = {
    opacity: $ ? 0 : 1,
    height: $ ? 0 : mf,
    overflowY: $ ? "hidden" : mf,
    order: h ? H : mf,
    pointerEvents: $ ? "none" : mf,
    position: $ ? "absolute" : mf
  });
  var Y = {};
  $ && (Y["aria-hidden"] = !0);
  var q = /* @__PURE__ */ T.createElement(A, an({
    className: wn(!c && s, M),
    style: Te(Te({}, I), _)
  }, Y, G, {
    ref: o
  }), P);
  return h && (q = /* @__PURE__ */ T.createElement(Df, {
    onResize: function(oe) {
      var re = oe.offsetWidth;
      z(re);
    },
    disabled: C
  }, q)), q;
}
var $v = /* @__PURE__ */ T.forwardRef(vL);
$v.displayName = "Item";
function Vo(r) {
  var o = T.useRef();
  o.current = r;
  var s = T.useCallback(function() {
    for (var c, d = arguments.length, m = new Array(d), h = 0; h < d; h++)
      m[h] = arguments[h];
    return (c = o.current) === null || c === void 0 ? void 0 : c.call.apply(c, [o].concat(m));
  }, []);
  return s;
}
var bR = function(o) {
  return +setTimeout(o, 16);
}, SR = function(o) {
  return clearTimeout(o);
};
typeof window != "undefined" && "requestAnimationFrame" in window && (bR = function(o) {
  return window.requestAnimationFrame(o);
}, SR = function(o) {
  return window.cancelAnimationFrame(o);
});
var Ax = 0, Ag = /* @__PURE__ */ new Map();
function CR(r) {
  Ag.delete(r);
}
var bi = function(o) {
  var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Ax += 1;
  var c = Ax;
  function d(m) {
    if (m === 0)
      CR(c), o();
    else {
      var h = bR(function() {
        d(m - 1);
      });
      Ag.set(c, h);
    }
  }
  return d(s), c;
};
bi.cancel = function(r) {
  var o = Ag.get(r);
  return CR(r), SR(o);
};
process.env.NODE_ENV !== "production" && (bi.ids = function() {
  return Ag;
});
function pL(r) {
  if (typeof MessageChannel == "undefined")
    bi(r);
  else {
    var o = new MessageChannel();
    o.port1.onmessage = function() {
      return r();
    }, o.port2.postMessage(void 0);
  }
}
function hL() {
  var r = T.useRef(null), o = function(c) {
    r.current || (r.current = [], pL(function() {
      Rg.unstable_batchedUpdates(function() {
        r.current.forEach(function(d) {
          d();
        }), r.current = null;
      });
    })), r.current.push(c);
  };
  return o;
}
function Dv(r, o) {
  var s = T.useState(o), c = xe(s, 2), d = c[0], m = c[1], h = Vo(function(C) {
    r(function() {
      m(C);
    });
  });
  return [d, h];
}
var hg = /* @__PURE__ */ Ma.createContext(null), mL = ["component"], gL = ["className"], yL = ["className"], bL = function(o, s) {
  var c = T.useContext(hg);
  if (!c) {
    var d = o.component, m = d === void 0 ? "div" : d, h = Fn(o, mL);
    return /* @__PURE__ */ T.createElement(m, an({}, h, {
      ref: s
    }));
  }
  var C = c.className, x = Fn(c, gL), E = o.className, M = Fn(o, yL);
  return /* @__PURE__ */ T.createElement(hg.Provider, {
    value: null
  }, /* @__PURE__ */ T.createElement($v, an({
    ref: s,
    className: wn(C, E)
  }, x, M)));
}, ER = /* @__PURE__ */ T.forwardRef(bL);
ER.displayName = "RawItem";
var SL = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], wR = "responsive", xR = "invalidate";
function CL(r) {
  return "+ ".concat(r.length, " ...");
}
function EL(r, o) {
  var s = r.prefixCls, c = s === void 0 ? "rc-overflow" : s, d = r.data, m = d === void 0 ? [] : d, h = r.renderItem, C = r.renderRawItem, x = r.itemKey, E = r.itemWidth, M = E === void 0 ? 10 : E, _ = r.ssr, N = r.style, L = r.className, H = r.maxCount, V = r.renderRest, A = r.renderRawRest, G = r.suffix, $ = r.component, z = $ === void 0 ? "div" : $, P = r.itemComponent, I = r.onVisibleChange, Y = Fn(r, SL), q = _ === "full", ne = hL(), oe = Dv(ne, null), re = xe(oe, 2), ge = re[0], pe = re[1], te = ge || 0, se = Dv(ne, /* @__PURE__ */ new Map()), de = xe(se, 2), Ce = de[0], ke = de[1], we = Dv(ne, 0), Ae = xe(we, 2), ze = Ae[0], ie = Ae[1], he = Dv(ne, 0), Se = xe(he, 2), Ie = Se[0], Ke = Se[1], Xe = Dv(ne, 0), it = xe(Xe, 2), Be = it[0], nt = it[1], Nt = Wo(null), He = xe(Nt, 2), et = He[0], Bt = He[1], Ee = Wo(null), mt = xe(Ee, 2), Dt = mt[0], It = mt[1], $t = T.useMemo(function() {
    return Dt === null && q ? Number.MAX_SAFE_INTEGER : Dt || 0;
  }, [Dt, ge]), Ze = Wo(!1), kt = xe(Ze, 2), gt = kt[0], Zt = kt[1], ot = "".concat(c, "-item"), Wt = Math.max(ze, Ie), Qt = H === wR, ut = m.length && Qt, Gt = H === xR, Wn = ut || typeof H == "number" && m.length > H, qt = wS(function() {
    var Me = m;
    return ut ? ge === null && q ? Me = m : Me = m.slice(0, Math.min(m.length, te / M)) : typeof H == "number" && (Me = m.slice(0, H)), Me;
  }, [m, M, ge, H, ut]), en = wS(function() {
    return ut ? m.slice($t + 1) : m.slice(qt.length);
  }, [m, qt, ut, $t]), ye = Ml(function(Me, Ge) {
    var At;
    return typeof x == "function" ? x(Me) : (At = x && (Me == null ? void 0 : Me[x])) !== null && At !== void 0 ? At : Ge;
  }, [x]), Oe = Ml(h || function(Me) {
    return Me;
  }, [h]);
  function We(Me, Ge, At) {
    Dt === Me && (Ge === void 0 || Ge === et) || (It(Me), At || (Zt(Me < m.length - 1), I == null || I(Me)), Ge !== void 0 && Bt(Ge));
  }
  function xt(Me, Ge) {
    pe(Ge.clientWidth);
  }
  function Mt(Me, Ge) {
    ke(function(At) {
      var mn = new Map(At);
      return Ge === null ? mn.delete(Me) : mn.set(Me, Ge), mn;
    });
  }
  function rt(Me, Ge) {
    Ke(Ge), ie(Ie);
  }
  function st(Me, Ge) {
    nt(Ge);
  }
  function on(Me) {
    return Ce.get(ye(qt[Me], Me));
  }
  ia(function() {
    if (te && typeof Wt == "number" && qt) {
      var Me = Be, Ge = qt.length, At = Ge - 1;
      if (!Ge) {
        We(0, null);
        return;
      }
      for (var mn = 0; mn < Ge; mn += 1) {
        var An = on(mn);
        if (q && (An = An || 0), An === void 0) {
          We(mn - 1, void 0, !0);
          break;
        }
        if (Me += An, // Only one means `totalWidth` is the final width
        At === 0 && Me <= te || // Last two width will be the final width
        mn === At - 1 && Me + on(At) <= te) {
          We(At, null);
          break;
        } else if (Me + Wt > te) {
          We(mn - 1, Me - An - Be + Ie);
          break;
        }
      }
      G && on(0) + Be > te && Bt(null);
    }
  }, [te, Ce, Ie, Be, ye, qt]);
  var Ot = gt && !!en.length, Ut = {};
  et !== null && ut && (Ut = {
    position: "absolute",
    left: et,
    top: 0
  });
  var ir = {
    prefixCls: ot,
    responsive: ut,
    component: P,
    invalidate: Gt
  }, Vt = C ? function(Me, Ge) {
    var At = ye(Me, Ge);
    return /* @__PURE__ */ T.createElement(hg.Provider, {
      key: At,
      value: Te(Te({}, ir), {}, {
        order: Ge,
        item: Me,
        itemKey: At,
        registerSize: Mt,
        display: Ge <= $t
      })
    }, C(Me, Ge));
  } : function(Me, Ge) {
    var At = ye(Me, Ge);
    return /* @__PURE__ */ T.createElement($v, an({}, ir, {
      order: Ge,
      key: At,
      item: Me,
      renderItem: Oe,
      itemKey: At,
      registerSize: Mt,
      display: Ge <= $t
    }));
  }, dn, jt = {
    order: Ot ? $t : Number.MAX_SAFE_INTEGER,
    className: "".concat(ot, "-rest"),
    registerSize: rt,
    display: Ot
  };
  if (A)
    A && (dn = /* @__PURE__ */ T.createElement(hg.Provider, {
      value: Te(Te({}, ir), jt)
    }, A(en)));
  else {
    var $e = V || CL;
    dn = /* @__PURE__ */ T.createElement($v, an({}, ir, jt), typeof $e == "function" ? $e(en) : $e);
  }
  var St = /* @__PURE__ */ T.createElement(z, an({
    className: wn(!Gt && c, L),
    style: N,
    ref: o
  }, Y), qt.map(Vt), Wn ? dn : null, G && /* @__PURE__ */ T.createElement($v, an({}, ir, {
    responsive: Qt,
    responsiveDisabled: !ut,
    order: $t,
    className: "".concat(ot, "-suffix"),
    registerSize: st,
    display: !0,
    style: Ut
  }), G));
  return Qt && (St = /* @__PURE__ */ T.createElement(Df, {
    onResize: xt,
    disabled: !ut
  }, St)), St;
}
var Dl = /* @__PURE__ */ T.forwardRef(EL);
Dl.displayName = "Overflow";
Dl.Item = ER;
Dl.RESPONSIVE = wR;
Dl.INVALIDATE = xR;
function Tf(r) {
  var o = T.useRef(!1), s = T.useState(r), c = xe(s, 2), d = c[0], m = c[1];
  T.useEffect(function() {
    return o.current = !1, function() {
      o.current = !0;
    };
  }, []);
  function h(C, x) {
    x && o.current || m(C);
  }
  return [d, h];
}
function lS(r) {
  return r !== void 0;
}
function Uv(r, o) {
  var s = o || {}, c = s.defaultValue, d = s.value, m = s.onChange, h = s.postState, C = Tf(function() {
    return lS(d) ? d : lS(c) ? typeof c == "function" ? c() : c : typeof r == "function" ? r() : r;
  }), x = xe(C, 2), E = x[0], M = x[1], _ = d !== void 0 ? d : E, N = h ? h(_) : _, L = Vo(m), H = Tf([_]), V = xe(H, 2), A = V[0], G = V[1];
  Dx(function() {
    var z = A[0];
    E !== z && L(E, z);
  }, [A]), Dx(function() {
    lS(d) || M(d);
  }, [d]);
  var $ = Vo(function(z, P) {
    M(z, P), G([_], P);
  });
  return [N, $];
}
function y1(r, o) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, c = /* @__PURE__ */ new Set();
  function d(m, h) {
    var C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, x = c.has(m);
    if (pa(!x, "Warning: There may be circular references"), x)
      return !1;
    if (m === h)
      return !0;
    if (s && C > 1)
      return !1;
    c.add(m);
    var E = C + 1;
    if (Array.isArray(m)) {
      if (!Array.isArray(h) || m.length !== h.length)
        return !1;
      for (var M = 0; M < m.length; M++)
        if (!d(m[M], h[M], E))
          return !1;
      return !0;
    }
    if (m && h && Bn(m) === "object" && Bn(h) === "object") {
      var _ = Object.keys(m);
      return _.length !== Object.keys(h).length ? !1 : _.every(function(N) {
        return d(m[N], h[N], E);
      });
    }
    return !1;
  }
  return d(r, o);
}
var TR = /* @__PURE__ */ T.createContext(null);
function RR(r, o) {
  return r === void 0 ? null : "".concat(r, "-").concat(o);
}
function _R(r) {
  var o = T.useContext(TR);
  return RR(o, r);
}
var wL = ["children", "locked"], Xi = /* @__PURE__ */ T.createContext(null);
function xL(r, o) {
  var s = Te({}, r);
  return Object.keys(o).forEach(function(c) {
    var d = o[c];
    d !== void 0 && (s[c] = d);
  }), s;
}
function Wv(r) {
  var o = r.children, s = r.locked, c = Fn(r, wL), d = T.useContext(Xi), m = _g(function() {
    return xL(d, c);
  }, [d, c], function(h, C) {
    return !s && (h[0] !== C[0] || !y1(h[1], C[1], !0));
  });
  return /* @__PURE__ */ T.createElement(Xi.Provider, {
    value: m
  }, o);
}
var TL = [], kR = /* @__PURE__ */ T.createContext(null);
function Lg() {
  return T.useContext(kR);
}
var MR = /* @__PURE__ */ T.createContext(TL);
function np(r) {
  var o = T.useContext(MR);
  return T.useMemo(function() {
    return r !== void 0 ? [].concat(ar(o), [r]) : o;
  }, [o, r]);
}
var OR = /* @__PURE__ */ T.createContext(null), b1 = /* @__PURE__ */ T.createContext({});
const NR = function(r) {
  if (!r)
    return !1;
  if (r instanceof Element) {
    if (r.offsetParent)
      return !0;
    if (r.getBBox) {
      var o = r.getBBox(), s = o.width, c = o.height;
      if (s || c)
        return !0;
    }
    if (r.getBoundingClientRect) {
      var d = r.getBoundingClientRect(), m = d.width, h = d.height;
      if (m || h)
        return !0;
    }
  }
  return !1;
};
function Lx(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (NR(r)) {
    var s = r.nodeName.toLowerCase(), c = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(s) || // Editable element
      r.isContentEditable || // Anchor with href element
      s === "a" && !!r.getAttribute("href")
    ), d = r.getAttribute("tabindex"), m = Number(d), h = null;
    return d && !Number.isNaN(m) ? h = m : c && h === null && (h = 0), c && r.disabled && (h = null), h !== null && (h >= 0 || o && h < 0);
  }
  return !1;
}
function RL(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = ar(r.querySelectorAll("*")).filter(function(c) {
    return Lx(c, o);
  });
  return Lx(r, o) && s.unshift(r), s;
}
var at = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(o) {
    var s = o.keyCode;
    if (o.altKey && !o.ctrlKey || o.metaKey || // Function keys don't generate text
    s >= at.F1 && s <= at.F12)
      return !1;
    switch (s) {
      case at.ALT:
      case at.CAPS_LOCK:
      case at.CONTEXT_MENU:
      case at.CTRL:
      case at.DOWN:
      case at.END:
      case at.ESC:
      case at.HOME:
      case at.INSERT:
      case at.LEFT:
      case at.MAC_FF_META:
      case at.META:
      case at.NUMLOCK:
      case at.NUM_CENTER:
      case at.PAGE_DOWN:
      case at.PAGE_UP:
      case at.PAUSE:
      case at.PRINT_SCREEN:
      case at.RIGHT:
      case at.SHIFT:
      case at.UP:
      case at.WIN_KEY:
      case at.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(o) {
    if (o >= at.ZERO && o <= at.NINE || o >= at.NUM_ZERO && o <= at.NUM_MULTIPLY || o >= at.A && o <= at.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && o === 0)
      return !0;
    switch (o) {
      case at.SPACE:
      case at.QUESTION_MARK:
      case at.NUM_PLUS:
      case at.NUM_MINUS:
      case at.NUM_PERIOD:
      case at.NUM_DIVISION:
      case at.SEMICOLON:
      case at.DASH:
      case at.EQUALS:
      case at.COMMA:
      case at.PERIOD:
      case at.SLASH:
      case at.APOSTROPHE:
      case at.SINGLE_QUOTE:
      case at.OPEN_SQUARE_BRACKET:
      case at.BACKSLASH:
      case at.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, DS = at.LEFT, AS = at.RIGHT, LS = at.UP, ig = at.DOWN, og = at.ENTER, DR = at.ESC, Av = at.HOME, Lv = at.END, Px = [LS, ig, DS, AS];
function _L(r, o, s, c) {
  var d, m, h, C, x = "prev", E = "next", M = "children", _ = "parent";
  if (r === "inline" && c === og)
    return {
      inlineTrigger: !0
    };
  var N = (d = {}, tt(d, LS, x), tt(d, ig, E), d), L = (m = {}, tt(m, DS, s ? E : x), tt(m, AS, s ? x : E), tt(m, ig, M), tt(m, og, M), m), H = (h = {}, tt(h, LS, x), tt(h, ig, E), tt(h, og, M), tt(h, DR, _), tt(h, DS, s ? M : _), tt(h, AS, s ? _ : M), h), V = {
    inline: N,
    horizontal: L,
    vertical: H,
    inlineSub: N,
    horizontalSub: H,
    verticalSub: H
  }, A = (C = V["".concat(r).concat(o ? "" : "Sub")]) === null || C === void 0 ? void 0 : C[c];
  switch (A) {
    case x:
      return {
        offset: -1,
        sibling: !0
      };
    case E:
      return {
        offset: 1,
        sibling: !0
      };
    case _:
      return {
        offset: -1,
        sibling: !1
      };
    case M:
      return {
        offset: 1,
        sibling: !1
      };
    default:
      return null;
  }
}
function kL(r) {
  for (var o = r; o; ) {
    if (o.getAttribute("data-menu-list"))
      return o;
    o = o.parentElement;
  }
  return null;
}
function ML(r, o) {
  for (var s = r || document.activeElement; s; ) {
    if (o.has(s))
      return s;
    s = s.parentElement;
  }
  return null;
}
function S1(r, o) {
  var s = RL(r, !0);
  return s.filter(function(c) {
    return o.has(c);
  });
}
function zx(r, o, s) {
  var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!r)
    return null;
  var d = S1(r, o), m = d.length, h = d.findIndex(function(C) {
    return s === C;
  });
  return c < 0 ? h === -1 ? h = m - 1 : h -= 1 : c > 0 && (h += 1), h = (h + m) % m, d[h];
}
var PS = function(o, s) {
  var c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
  return o.forEach(function(h) {
    var C = document.querySelector("[data-menu-id='".concat(RR(s, h), "']"));
    C && (c.add(C), m.set(C, h), d.set(h, C));
  }), {
    elements: c,
    key2element: d,
    element2key: m
  };
};
function OL(r, o, s, c, d, m, h, C, x, E) {
  var M = T.useRef(), _ = T.useRef();
  _.current = o;
  var N = function() {
    bi.cancel(M.current);
  };
  return T.useEffect(function() {
    return function() {
      N();
    };
  }, []), function(L) {
    var H = L.which;
    if ([].concat(Px, [og, DR, Av, Lv]).includes(H)) {
      var V = m(), A = PS(V, c), G = A, $ = G.elements, z = G.key2element, P = G.element2key, I = z.get(o), Y = ML(I, $), q = P.get(Y), ne = _L(r, h(q, !0).length === 1, s, H);
      if (!ne && H !== Av && H !== Lv)
        return;
      (Px.includes(H) || [Av, Lv].includes(H)) && L.preventDefault();
      var oe = function(ke) {
        if (ke) {
          var we = ke, Ae = ke.querySelector("a");
          Ae != null && Ae.getAttribute("href") && (we = Ae);
          var ze = P.get(ke);
          C(ze), N(), M.current = bi(function() {
            _.current === ze && we.focus();
          });
        }
      };
      if ([Av, Lv].includes(H) || ne.sibling || !Y) {
        var re;
        !Y || r === "inline" ? re = d.current : re = kL(Y);
        var ge, pe = S1(re, $);
        H === Av ? ge = pe[0] : H === Lv ? ge = pe[pe.length - 1] : ge = zx(re, $, Y, ne.offset), oe(ge);
      } else if (ne.inlineTrigger)
        x(q);
      else if (ne.offset > 0)
        x(q, !0), N(), M.current = bi(function() {
          A = PS(V, c);
          var Ce = Y.getAttribute("aria-controls"), ke = document.getElementById(Ce), we = zx(ke, A.elements);
          oe(we);
        }, 5);
      else if (ne.offset < 0) {
        var te = h(q, !0), se = te[te.length - 2], de = z.get(se);
        x(se, !1), oe(de);
      }
    }
    E == null || E(L);
  };
}
function NL(r) {
  Promise.resolve().then(r);
}
var C1 = "__RC_UTIL_PATH_SPLIT__", Ix = function(o) {
  return o.join(C1);
}, DL = function(o) {
  return o.split(C1);
}, zS = "rc-menu-more";
function AL() {
  var r = T.useState({}), o = xe(r, 2), s = o[1], c = Ka(/* @__PURE__ */ new Map()), d = Ka(/* @__PURE__ */ new Map()), m = T.useState([]), h = xe(m, 2), C = h[0], x = h[1], E = Ka(0), M = Ka(!1), _ = function() {
    M.current || s({});
  }, N = Ml(function(z, P) {
    process.env.NODE_ENV !== "production" && pa(!c.current.has(z), "Duplicated key '".concat(z, "' used in Menu by path [").concat(P.join(" > "), "]"));
    var I = Ix(P);
    d.current.set(I, z), c.current.set(z, I), E.current += 1;
    var Y = E.current;
    NL(function() {
      Y === E.current && _();
    });
  }, []), L = Ml(function(z, P) {
    var I = Ix(P);
    d.current.delete(I), c.current.delete(z);
  }, []), H = Ml(function(z) {
    x(z);
  }, []), V = Ml(function(z, P) {
    var I = c.current.get(z) || "", Y = DL(I);
    return P && C.includes(Y[0]) && Y.unshift(zS), Y;
  }, [C]), A = Ml(function(z, P) {
    return z.some(function(I) {
      var Y = V(I, !0);
      return Y.includes(P);
    });
  }, [V]), G = function() {
    var P = ar(c.current.keys());
    return C.length && P.push(zS), P;
  }, $ = Ml(function(z) {
    var P = "".concat(c.current.get(z)).concat(C1), I = /* @__PURE__ */ new Set();
    return ar(d.current.keys()).forEach(function(Y) {
      Y.startsWith(P) && I.add(d.current.get(Y));
    }), I;
  }, []);
  return T.useEffect(function() {
    return function() {
      M.current = !0;
    };
  }, []), {
    // Register
    registerPath: N,
    unregisterPath: L,
    refreshOverflowKeys: H,
    // Util
    isSubPathKey: A,
    getKeyPath: V,
    getKeys: G,
    getSubPathKeys: $
  };
}
function Hv(r) {
  var o = T.useRef(r);
  o.current = r;
  var s = T.useCallback(function() {
    for (var c, d = arguments.length, m = new Array(d), h = 0; h < d; h++)
      m[h] = arguments[h];
    return (c = o.current) === null || c === void 0 ? void 0 : c.call.apply(c, [o].concat(m));
  }, []);
  return r ? s : void 0;
}
var LL = Math.random().toFixed(5).toString().slice(2), Hx = 0;
function PL(r) {
  var o = Uv(r, {
    value: r
  }), s = xe(o, 2), c = s[0], d = s[1];
  return T.useEffect(function() {
    Hx += 1;
    var m = process.env.NODE_ENV === "test" ? "test" : "".concat(LL, "-").concat(Hx);
    d("rc-menu-uuid-".concat(m));
  }, []), c;
}
function Pg(r, o) {
  var s = Te({}, r);
  return Array.isArray(o) && o.forEach(function(c) {
    delete s[c];
  }), s;
}
function AR(r, o, s, c) {
  var d = T.useContext(Xi), m = d.activeKey, h = d.onActive, C = d.onInactive, x = {
    active: m === r
  };
  return o || (x.onMouseEnter = function(E) {
    s == null || s({
      key: r,
      domEvent: E
    }), h(r);
  }, x.onMouseLeave = function(E) {
    c == null || c({
      key: r,
      domEvent: E
    }), C(r);
  }), x;
}
function LR(r) {
  var o = T.useContext(Xi), s = o.mode, c = o.rtl, d = o.inlineIndent;
  if (s !== "inline")
    return null;
  var m = r;
  return c ? {
    paddingRight: m * d
  } : {
    paddingLeft: m * d
  };
}
function PR(r) {
  var o = r.icon, s = r.props, c = r.children, d;
  return o === null || o === !1 ? null : (typeof o == "function" ? d = /* @__PURE__ */ T.createElement(o, Te({}, s)) : typeof o != "boolean" && (d = o), d || c || null);
}
var zL = ["item"];
function mg(r) {
  var o = r.item, s = Fn(r, zL);
  return Object.defineProperty(s, "item", {
    get: function() {
      return pa(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), o;
    }
  }), s;
}
var IL = ["title", "attribute", "elementRef"], HL = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], $L = ["active"], UL = /* @__PURE__ */ function(r) {
  Nf(s, r);
  var o = Dg(s);
  function s() {
    return Zi(this, s), o.apply(this, arguments);
  }
  return Ji(s, [{
    key: "render",
    value: function() {
      var d = this.props, m = d.title, h = d.attribute, C = d.elementRef, x = Fn(d, IL), E = Pg(x, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return pa(!h, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ T.createElement(Dl.Item, an({}, h, {
        title: typeof m == "string" ? m : void 0
      }, E, {
        ref: C
      }));
    }
  }]), s;
}(T.Component), jL = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var s, c = r.style, d = r.className, m = r.eventKey, h = r.warnKey, C = r.disabled, x = r.itemIcon, E = r.children, M = r.role, _ = r.onMouseEnter, N = r.onMouseLeave, L = r.onClick, H = r.onKeyDown, V = r.onFocus, A = Fn(r, HL), G = _R(m), $ = T.useContext(Xi), z = $.prefixCls, P = $.onItemClick, I = $.disabled, Y = $.overflowDisabled, q = $.itemIcon, ne = $.selectedKeys, oe = $.onActive, re = T.useContext(b1), ge = re._internalRenderMenuItem, pe = "".concat(z, "-item"), te = T.useRef(), se = T.useRef(), de = I || C, Ce = kg(o, se), ke = np(m);
  process.env.NODE_ENV !== "production" && h && pa(!1, "MenuItem should not leave undefined `key`.");
  var we = function(He) {
    return {
      key: m,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: ar(ke).reverse(),
      item: te.current,
      domEvent: He
    };
  }, Ae = x || q, ze = AR(m, de, _, N), ie = ze.active, he = Fn(ze, $L), Se = ne.includes(m), Ie = LR(ke.length), Ke = function(He) {
    if (!de) {
      var et = we(He);
      L == null || L(mg(et)), P(et);
    }
  }, Xe = function(He) {
    if (H == null || H(He), He.which === at.ENTER) {
      var et = we(He);
      L == null || L(mg(et)), P(et);
    }
  }, it = function(He) {
    oe(m), V == null || V(He);
  }, Be = {};
  r.role === "option" && (Be["aria-selected"] = Se);
  var nt = /* @__PURE__ */ T.createElement(UL, an({
    ref: te,
    elementRef: Ce,
    role: M === null ? "none" : M || "menuitem",
    tabIndex: C ? null : -1,
    "data-menu-id": Y && G ? null : G
  }, A, he, Be, {
    component: "li",
    "aria-disabled": C,
    style: Te(Te({}, Ie), c),
    className: wn(pe, (s = {}, tt(s, "".concat(pe, "-active"), ie), tt(s, "".concat(pe, "-selected"), Se), tt(s, "".concat(pe, "-disabled"), de), s), d),
    onClick: Ke,
    onKeyDown: Xe,
    onFocus: it
  }), E, /* @__PURE__ */ T.createElement(PR, {
    props: Te(Te({}, r), {}, {
      isSelected: Se
    }),
    icon: Ae
  }));
  return ge && (nt = ge(nt, r, {
    selected: Se
  })), nt;
});
function FL(r, o) {
  var s = r.eventKey, c = Lg(), d = np(s);
  return T.useEffect(function() {
    if (c)
      return c.registerPath(s, d), function() {
        c.unregisterPath(s, d);
      };
  }, [d]), c ? null : /* @__PURE__ */ T.createElement(jL, an({}, r, {
    ref: o
  }));
}
const zg = /* @__PURE__ */ T.forwardRef(FL);
var VL = ["className", "children"], BL = function(o, s) {
  var c = o.className, d = o.children, m = Fn(o, VL), h = T.useContext(Xi), C = h.prefixCls, x = h.mode, E = h.rtl;
  return /* @__PURE__ */ T.createElement("ul", an({
    className: wn(C, E && "".concat(C, "-rtl"), "".concat(C, "-sub"), "".concat(C, "-").concat(x === "inline" ? "inline" : "vertical"), c),
    role: "menu"
  }, m, {
    "data-menu-list": !0,
    ref: s
  }), d);
}, E1 = /* @__PURE__ */ T.forwardRef(BL);
E1.displayName = "SubMenuList";
function w1(r, o) {
  return Bv(r).map(function(s, c) {
    if (/* @__PURE__ */ T.isValidElement(s)) {
      var d, m, h = s.key, C = (d = (m = s.props) === null || m === void 0 ? void 0 : m.eventKey) !== null && d !== void 0 ? d : h, x = C == null;
      x && (C = "tmp_key-".concat([].concat(ar(o), [c]).join("-")));
      var E = {
        key: C,
        eventKey: C
      };
      return process.env.NODE_ENV !== "production" && x && (E.warnKey = !0), /* @__PURE__ */ T.cloneElement(s, E);
    }
    return s;
  });
}
var zR = /* @__PURE__ */ T.createContext(null), $x = [];
function WL(r, o) {
  var s = T.useState(function() {
    if (!va())
      return null;
    var H = document.createElement("div");
    return process.env.NODE_ENV !== "production" && o && H.setAttribute("data-debug", o), H;
  }), c = xe(s, 1), d = c[0], m = T.useRef(!1), h = T.useContext(zR), C = T.useState($x), x = xe(C, 2), E = x[0], M = x[1], _ = h || (m.current ? void 0 : function(H) {
    M(function(V) {
      var A = [H].concat(ar(V));
      return A;
    });
  });
  function N() {
    d.parentElement || document.body.appendChild(d), m.current = !0;
  }
  function L() {
    var H;
    (H = d.parentElement) === null || H === void 0 || H.removeChild(d), m.current = !1;
  }
  return ia(function() {
    return r ? h ? h(N) : N() : L(), L;
  }, [r]), ia(function() {
    E.length && (E.forEach(function(H) {
      return H();
    }), M($x));
  }, [E]), [d, _];
}
function KL(r, o) {
  if (!r)
    return !1;
  if (r.contains)
    return r.contains(o);
  for (var s = o; s; ) {
    if (s === r)
      return !0;
    s = s.parentNode;
  }
  return !1;
}
var Ux = "data-rc-order", jx = "data-rc-priority", GL = "rc-util-key", IS = /* @__PURE__ */ new Map();
function IR() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = r.mark;
  return o ? o.startsWith("data-") ? o : "data-".concat(o) : GL;
}
function Ig(r) {
  if (r.attachTo)
    return r.attachTo;
  var o = document.querySelector("head");
  return o || document.body;
}
function qL(r) {
  return r === "queue" ? "prependQueue" : r ? "prepend" : "append";
}
function HR(r) {
  return Array.from((IS.get(r) || r).children).filter(function(o) {
    return o.tagName === "STYLE";
  });
}
function $R(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!va())
    return null;
  var s = o.csp, c = o.prepend, d = o.priority, m = d === void 0 ? 0 : d, h = qL(c), C = h === "prependQueue", x = document.createElement("style");
  x.setAttribute(Ux, h), C && m && x.setAttribute(jx, "".concat(m)), s != null && s.nonce && (x.nonce = s == null ? void 0 : s.nonce), x.innerHTML = r;
  var E = Ig(o), M = E.firstChild;
  if (c) {
    if (C) {
      var _ = HR(E).filter(function(N) {
        if (!["prepend", "prependQueue"].includes(N.getAttribute(Ux)))
          return !1;
        var L = Number(N.getAttribute(jx) || 0);
        return m >= L;
      });
      if (_.length)
        return E.insertBefore(x, _[_.length - 1].nextSibling), x;
    }
    E.insertBefore(x, M);
  } else
    E.appendChild(x);
  return x;
}
function UR(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = Ig(o);
  return HR(s).find(function(c) {
    return c.getAttribute(IR(o)) === r;
  });
}
function Kv(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = UR(r, o);
  if (s) {
    var c = Ig(o);
    c.removeChild(s);
  }
}
function YL(r, o) {
  var s = IS.get(r);
  if (!s || !KL(document, s)) {
    var c = $R("", o), d = c.parentNode;
    IS.set(r, d), r.removeChild(c);
  }
}
function Du(r, o) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = Ig(s);
  YL(c, s);
  var d = UR(o, s);
  if (d) {
    var m, h;
    if ((m = s.csp) !== null && m !== void 0 && m.nonce && d.nonce !== ((h = s.csp) === null || h === void 0 ? void 0 : h.nonce)) {
      var C;
      d.nonce = (C = s.csp) === null || C === void 0 ? void 0 : C.nonce;
    }
    return d.innerHTML !== r && (d.innerHTML = r), d;
  }
  var x = $R(r, s);
  return x.setAttribute(IR(s), o), x;
}
var uS;
function QL(r) {
  if (typeof document == "undefined")
    return 0;
  if (r || uS === void 0) {
    var o = document.createElement("div");
    o.style.width = "100%", o.style.height = "200px";
    var s = document.createElement("div"), c = s.style;
    c.position = "absolute", c.top = "0", c.left = "0", c.pointerEvents = "none", c.visibility = "hidden", c.width = "200px", c.height = "150px", c.overflow = "hidden", s.appendChild(o), document.body.appendChild(s);
    var d = o.offsetWidth;
    s.style.overflow = "scroll";
    var m = o.offsetWidth;
    d === m && (m = s.clientWidth), document.body.removeChild(s), uS = d - m;
  }
  return uS;
}
function Fx(r) {
  var o = r.match(/^(.*)px$/), s = Number(o == null ? void 0 : o[1]);
  return Number.isNaN(s) ? QL() : s;
}
function XL(r) {
  if (typeof document == "undefined" || !r || !(r instanceof Element))
    return {
      width: 0,
      height: 0
    };
  var o = getComputedStyle(r, "::-webkit-scrollbar"), s = o.width, c = o.height;
  return {
    width: Fx(s),
    height: Fx(c)
  };
}
function ZL() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var JL = "rc-util-locker-".concat(Date.now()), Vx = 0;
function eP(r) {
  var o = !!r, s = T.useState(function() {
    return Vx += 1, "".concat(JL, "_").concat(Vx);
  }), c = xe(s, 1), d = c[0];
  ia(function() {
    if (o) {
      var m = XL(document.body).width, h = ZL();
      Du(`
html body {
  overflow-y: hidden;
  `.concat(h ? "width: calc(100% - ".concat(m, "px);") : "", `
}`), d);
    } else
      Kv(d);
    return function() {
      Kv(d);
    };
  }, [o, d]);
}
var Bx = !1;
function tP(r) {
  return typeof r == "boolean" && (Bx = r), Bx;
}
var Wx = function(o) {
  return o === !1 ? !1 : !va() || !o ? null : typeof o == "string" ? document.querySelector(o) : typeof o == "function" ? o() : o;
}, x1 = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var s = r.open, c = r.autoLock, d = r.getContainer, m = r.debug, h = r.autoDestroy, C = h === void 0 ? !0 : h, x = r.children, E = T.useState(s), M = xe(E, 2), _ = M[0], N = M[1], L = _ || s;
  process.env.NODE_ENV !== "production" && pa(va() || !s, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), T.useEffect(function() {
    (C || s) && N(s);
  }, [s, C]);
  var H = T.useState(function() {
    return Wx(d);
  }), V = xe(H, 2), A = V[0], G = V[1];
  T.useEffect(function() {
    var pe = Wx(d);
    G(pe != null ? pe : null);
  });
  var $ = WL(L && !A, m), z = xe($, 2), P = z[0], I = z[1], Y = A != null ? A : P;
  eP(c && s && va() && (Y === P || Y === document.body));
  var q = null;
  if (x && Mg(x) && o) {
    var ne = x;
    q = ne.ref;
  }
  var oe = kg(q, o);
  if (!L || !va() || A === void 0)
    return null;
  var re = Y === !1 || tP(), ge = x;
  return o && (ge = /* @__PURE__ */ T.cloneElement(x, {
    ref: oe
  })), /* @__PURE__ */ T.createElement(zR.Provider, {
    value: I
  }, re ? ge : /* @__PURE__ */ Rg.createPortal(ge, Y));
});
process.env.NODE_ENV !== "production" && (x1.displayName = "Portal");
function jR(r) {
  var o;
  return r == null || (o = r.getRootNode) === null || o === void 0 ? void 0 : o.call(r);
}
function nP(r) {
  return jR(r) instanceof ShadowRoot;
}
function gg(r) {
  return nP(r) ? jR(r) : null;
}
function rP() {
  var r = Te({}, T);
  return r.useId;
}
var Kx = 0, Gx = rP();
const aP = Gx ? (
  // Use React `useId`
  function(o) {
    var s = Gx();
    return o || (process.env.NODE_ENV === "test" ? "test-id" : s);
  }
) : (
  // Use compatible of `useId`
  function(o) {
    var s = T.useState("ssr-id"), c = xe(s, 2), d = c[0], m = c[1];
    return T.useEffect(function() {
      var h = Kx;
      Kx += 1, m("rc_unique_".concat(h));
    }, []), o || (process.env.NODE_ENV === "test" ? "test-id" : d);
  }
), iP = function() {
  if (typeof navigator == "undefined" || typeof window == "undefined")
    return !1;
  var r = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(r) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(r == null ? void 0 : r.substr(0, 4));
};
var oP = ["children"], FR = /* @__PURE__ */ T.createContext({});
function lP(r) {
  var o = r.children, s = Fn(r, oP);
  return /* @__PURE__ */ T.createElement(FR.Provider, {
    value: s
  }, o);
}
var uP = /* @__PURE__ */ function(r) {
  Nf(s, r);
  var o = Dg(s);
  function s() {
    return Zi(this, s), o.apply(this, arguments);
  }
  return Ji(s, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), s;
}(T.Component), Ks = "none", Gm = "appear", qm = "enter", Ym = "leave", qx = "none", qi = "prepare", wf = "start", xf = "active", T1 = "end", VR = "prepared";
function Yx(r, o) {
  var s = {};
  return s[r.toLowerCase()] = o.toLowerCase(), s["Webkit".concat(r)] = "webkit".concat(o), s["Moz".concat(r)] = "moz".concat(o), s["ms".concat(r)] = "MS".concat(o), s["O".concat(r)] = "o".concat(o.toLowerCase()), s;
}
function sP(r, o) {
  var s = {
    animationend: Yx("Animation", "AnimationEnd"),
    transitionend: Yx("Transition", "TransitionEnd")
  };
  return r && ("AnimationEvent" in o || delete s.animationend.animation, "TransitionEvent" in o || delete s.transitionend.transition), s;
}
var cP = sP(va(), typeof window != "undefined" ? window : {}), BR = {};
if (va()) {
  var fP = document.createElement("div");
  BR = fP.style;
}
var Qm = {};
function WR(r) {
  if (Qm[r])
    return Qm[r];
  var o = cP[r];
  if (o)
    for (var s = Object.keys(o), c = s.length, d = 0; d < c; d += 1) {
      var m = s[d];
      if (Object.prototype.hasOwnProperty.call(o, m) && m in BR)
        return Qm[r] = o[m], Qm[r];
    }
  return "";
}
var KR = WR("animationend"), GR = WR("transitionend"), qR = !!(KR && GR), Qx = KR || "animationend", Xx = GR || "transitionend";
function Zx(r, o) {
  if (!r)
    return null;
  if (Bn(r) === "object") {
    var s = o.replace(/-\w/g, function(c) {
      return c[1].toUpperCase();
    });
    return r[s];
  }
  return "".concat(r, "-").concat(o);
}
const dP = function(r) {
  var o = Ka(), s = Ka(r);
  s.current = r;
  var c = T.useCallback(function(h) {
    s.current(h);
  }, []);
  function d(h) {
    h && (h.removeEventListener(Xx, c), h.removeEventListener(Qx, c));
  }
  function m(h) {
    o.current && o.current !== h && d(o.current), h && h !== o.current && (h.addEventListener(Xx, c), h.addEventListener(Qx, c), o.current = h);
  }
  return T.useEffect(function() {
    return function() {
      d(o.current);
    };
  }, []), [m, d];
};
var YR = va() ? nA : Bo;
const vP = function() {
  var r = T.useRef(null);
  function o() {
    bi.cancel(r.current);
  }
  function s(c) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    o();
    var m = bi(function() {
      d <= 1 ? c({
        isCanceled: function() {
          return m !== r.current;
        }
      }) : s(c, d - 1);
    });
    r.current = m;
  }
  return T.useEffect(function() {
    return function() {
      o();
    };
  }, []), [s, o];
};
var pP = [qi, wf, xf, T1], hP = [qi, VR], QR = !1, mP = !0;
function XR(r) {
  return r === xf || r === T1;
}
const gP = function(r, o, s) {
  var c = Tf(qx), d = xe(c, 2), m = d[0], h = d[1], C = vP(), x = xe(C, 2), E = x[0], M = x[1];
  function _() {
    h(qi, !0);
  }
  var N = o ? hP : pP;
  return YR(function() {
    if (m !== qx && m !== T1) {
      var L = N.indexOf(m), H = N[L + 1], V = s(m);
      V === QR ? h(H, !0) : H && E(function(A) {
        function G() {
          A.isCanceled() || h(H, !0);
        }
        V === !0 ? G() : Promise.resolve(V).then(G);
      });
    }
  }, [r, m]), T.useEffect(function() {
    return function() {
      M();
    };
  }, []), [_, m];
};
function yP(r, o, s, c) {
  var d = c.motionEnter, m = d === void 0 ? !0 : d, h = c.motionAppear, C = h === void 0 ? !0 : h, x = c.motionLeave, E = x === void 0 ? !0 : x, M = c.motionDeadline, _ = c.motionLeaveImmediately, N = c.onAppearPrepare, L = c.onEnterPrepare, H = c.onLeavePrepare, V = c.onAppearStart, A = c.onEnterStart, G = c.onLeaveStart, $ = c.onAppearActive, z = c.onEnterActive, P = c.onLeaveActive, I = c.onAppearEnd, Y = c.onEnterEnd, q = c.onLeaveEnd, ne = c.onVisibleChanged, oe = Tf(), re = xe(oe, 2), ge = re[0], pe = re[1], te = Tf(Ks), se = xe(te, 2), de = se[0], Ce = se[1], ke = Tf(null), we = xe(ke, 2), Ae = we[0], ze = we[1], ie = Ka(!1), he = Ka(null);
  function Se() {
    return s();
  }
  var Ie = Ka(!1);
  function Ke() {
    Ce(Ks, !0), ze(null, !0);
  }
  function Xe(Ze) {
    var kt = Se();
    if (!(Ze && !Ze.deadline && Ze.target !== kt)) {
      var gt = Ie.current, Zt;
      de === Gm && gt ? Zt = I == null ? void 0 : I(kt, Ze) : de === qm && gt ? Zt = Y == null ? void 0 : Y(kt, Ze) : de === Ym && gt && (Zt = q == null ? void 0 : q(kt, Ze)), de !== Ks && gt && Zt !== !1 && Ke();
    }
  }
  var it = dP(Xe), Be = xe(it, 1), nt = Be[0], Nt = function(kt) {
    var gt, Zt, ot;
    switch (kt) {
      case Gm:
        return gt = {}, tt(gt, qi, N), tt(gt, wf, V), tt(gt, xf, $), gt;
      case qm:
        return Zt = {}, tt(Zt, qi, L), tt(Zt, wf, A), tt(Zt, xf, z), Zt;
      case Ym:
        return ot = {}, tt(ot, qi, H), tt(ot, wf, G), tt(ot, xf, P), ot;
      default:
        return {};
    }
  }, He = T.useMemo(function() {
    return Nt(de);
  }, [de]), et = gP(de, !r, function(Ze) {
    if (Ze === qi) {
      var kt = He[qi];
      return kt ? kt(Se()) : QR;
    }
    if (mt in He) {
      var gt;
      ze(((gt = He[mt]) === null || gt === void 0 ? void 0 : gt.call(He, Se(), null)) || null);
    }
    return mt === xf && (nt(Se()), M > 0 && (clearTimeout(he.current), he.current = setTimeout(function() {
      Xe({
        deadline: !0
      });
    }, M))), mt === VR && Ke(), mP;
  }), Bt = xe(et, 2), Ee = Bt[0], mt = Bt[1], Dt = XR(mt);
  Ie.current = Dt, YR(function() {
    pe(o);
    var Ze = ie.current;
    ie.current = !0;
    var kt;
    !Ze && o && C && (kt = Gm), Ze && o && m && (kt = qm), (Ze && !o && E || !Ze && _ && !o && E) && (kt = Ym);
    var gt = Nt(kt);
    kt && (r || gt[qi]) ? (Ce(kt), Ee()) : Ce(Ks);
  }, [o]), Bo(function() {
    // Cancel appear
    (de === Gm && !C || // Cancel enter
    de === qm && !m || // Cancel leave
    de === Ym && !E) && Ce(Ks);
  }, [C, m, E]), Bo(function() {
    return function() {
      ie.current = !1, clearTimeout(he.current);
    };
  }, []);
  var It = T.useRef(!1);
  Bo(function() {
    ge && (It.current = !0), ge !== void 0 && de === Ks && ((It.current || ge) && (ne == null || ne(ge)), It.current = !0);
  }, [ge, de]);
  var $t = Ae;
  return He[qi] && mt === wf && ($t = Te({
    transition: "none"
  }, $t)), [de, mt, $t, ge != null ? ge : o];
}
function bP(r) {
  var o = r;
  Bn(r) === "object" && (o = r.transitionSupport);
  function s(d, m) {
    return !!(d.motionName && o && m !== !1);
  }
  var c = /* @__PURE__ */ T.forwardRef(function(d, m) {
    var h = d.visible, C = h === void 0 ? !0 : h, x = d.removeOnLeave, E = x === void 0 ? !0 : x, M = d.forceRender, _ = d.children, N = d.motionName, L = d.leavedClassName, H = d.eventProps, V = T.useContext(FR), A = V.motion, G = s(d, A), $ = Ka(), z = Ka();
    function P() {
      try {
        return $.current instanceof HTMLElement ? $.current : ag(z.current);
      } catch (ze) {
        return null;
      }
    }
    var I = yP(G, C, P, d), Y = xe(I, 4), q = Y[0], ne = Y[1], oe = Y[2], re = Y[3], ge = T.useRef(re);
    re && (ge.current = !0);
    var pe = T.useCallback(function(ze) {
      $.current = ze, m1(m, ze);
    }, [m]), te, se = Te(Te({}, H), {}, {
      visible: C
    });
    if (!_)
      te = null;
    else if (q === Ks)
      re ? te = _(Te({}, se), pe) : !E && ge.current && L ? te = _(Te(Te({}, se), {}, {
        className: L
      }), pe) : M || !E && !L ? te = _(Te(Te({}, se), {}, {
        style: {
          display: "none"
        }
      }), pe) : te = null;
    else {
      var de, Ce;
      ne === qi ? Ce = "prepare" : XR(ne) ? Ce = "active" : ne === wf && (Ce = "start");
      var ke = Zx(N, "".concat(q, "-").concat(Ce));
      te = _(Te(Te({}, se), {}, {
        className: wn(Zx(N, q), (de = {}, tt(de, ke, ke && Ce), tt(de, N, typeof N == "string"), de)),
        style: oe
      }), pe);
    }
    if (/* @__PURE__ */ T.isValidElement(te) && Mg(te)) {
      var we = te, Ae = we.ref;
      Ae || (te = /* @__PURE__ */ T.cloneElement(te, {
        ref: pe
      }));
    }
    return /* @__PURE__ */ T.createElement(uP, {
      ref: z
    }, te);
  });
  return c.displayName = "CSSMotion", c;
}
const Hg = bP(qR);
var HS = "add", $S = "keep", US = "remove", sS = "removed";
function SP(r) {
  var o;
  return r && Bn(r) === "object" && "key" in r ? o = r : o = {
    key: r
  }, Te(Te({}, o), {}, {
    key: String(o.key)
  });
}
function jS() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return r.map(SP);
}
function CP() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], s = [], c = 0, d = o.length, m = jS(r), h = jS(o);
  m.forEach(function(E) {
    for (var M = !1, _ = c; _ < d; _ += 1) {
      var N = h[_];
      if (N.key === E.key) {
        c < _ && (s = s.concat(h.slice(c, _).map(function(L) {
          return Te(Te({}, L), {}, {
            status: HS
          });
        })), c = _), s.push(Te(Te({}, N), {}, {
          status: $S
        })), c += 1, M = !0;
        break;
      }
    }
    M || s.push(Te(Te({}, E), {}, {
      status: US
    }));
  }), c < d && (s = s.concat(h.slice(c).map(function(E) {
    return Te(Te({}, E), {}, {
      status: HS
    });
  })));
  var C = {};
  s.forEach(function(E) {
    var M = E.key;
    C[M] = (C[M] || 0) + 1;
  });
  var x = Object.keys(C).filter(function(E) {
    return C[E] > 1;
  });
  return x.forEach(function(E) {
    s = s.filter(function(M) {
      var _ = M.key, N = M.status;
      return _ !== E || N !== US;
    }), s.forEach(function(M) {
      M.key === E && (M.status = $S);
    });
  }), s;
}
var EP = ["component", "children", "onVisibleChanged", "onAllRemoved"], wP = ["status"], xP = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function TP(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Hg, s = /* @__PURE__ */ function(c) {
    Nf(m, c);
    var d = Dg(m);
    function m() {
      var h;
      Zi(this, m);
      for (var C = arguments.length, x = new Array(C), E = 0; E < C; E++)
        x[E] = arguments[E];
      return h = d.call.apply(d, [this].concat(x)), tt(NS(h), "state", {
        keyEntities: []
      }), tt(NS(h), "removeKey", function(M) {
        var _ = h.state.keyEntities, N = _.map(function(L) {
          return L.key !== M ? L : Te(Te({}, L), {}, {
            status: sS
          });
        });
        return h.setState({
          keyEntities: N
        }), N.filter(function(L) {
          var H = L.status;
          return H !== sS;
        }).length;
      }), h;
    }
    return Ji(m, [{
      key: "render",
      value: function() {
        var C = this, x = this.state.keyEntities, E = this.props, M = E.component, _ = E.children, N = E.onVisibleChanged, L = E.onAllRemoved, H = Fn(E, EP), V = M || T.Fragment, A = {};
        return xP.forEach(function(G) {
          A[G] = H[G], delete H[G];
        }), delete H.keys, /* @__PURE__ */ T.createElement(V, H, x.map(function(G, $) {
          var z = G.status, P = Fn(G, wP), I = z === HS || z === $S;
          return /* @__PURE__ */ T.createElement(o, an({}, A, {
            key: P.key,
            visible: I,
            eventProps: P,
            onVisibleChanged: function(q) {
              if (N == null || N(q, {
                key: P.key
              }), !q) {
                var ne = C.removeKey(P.key);
                ne === 0 && L && L();
              }
            }
          }), function(Y, q) {
            return _(Te(Te({}, Y), {}, {
              index: $
            }), q);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(C, x) {
        var E = C.keys, M = x.keyEntities, _ = jS(E), N = CP(M, _);
        return {
          keyEntities: N.filter(function(L) {
            var H = M.find(function(V) {
              var A = V.key;
              return L.key === A;
            });
            return !(H && H.status === sS && L.status === US);
          })
        };
      }
    }]), m;
  }(T.Component);
  return tt(s, "defaultProps", {
    component: "div"
  }), s;
}
TP(qR);
function RP(r) {
  var o = r.prefixCls, s = r.align, c = r.arrow, d = r.arrowPos, m = c || {}, h = m.className, C = m.content, x = d.x, E = x === void 0 ? 0 : x, M = d.y, _ = M === void 0 ? 0 : M, N = T.useRef();
  if (!s || !s.points)
    return null;
  var L = {
    position: "absolute"
  };
  if (s.autoArrow !== !1) {
    var H = s.points[0], V = s.points[1], A = H[0], G = H[1], $ = V[0], z = V[1];
    A === $ || !["t", "b"].includes(A) ? L.top = _ : A === "t" ? L.top = 0 : L.bottom = 0, G === z || !["l", "r"].includes(G) ? L.left = E : G === "l" ? L.left = 0 : L.right = 0;
  }
  return /* @__PURE__ */ T.createElement("div", {
    ref: N,
    className: wn("".concat(o, "-arrow"), h),
    style: L
  }, C);
}
function _P(r) {
  var o = r.prefixCls, s = r.open, c = r.zIndex, d = r.mask, m = r.motion;
  return d ? /* @__PURE__ */ T.createElement(Hg, an({}, m, {
    motionAppear: !0,
    visible: s,
    removeOnLeave: !0
  }), function(h) {
    var C = h.className;
    return /* @__PURE__ */ T.createElement("div", {
      style: {
        zIndex: c
      },
      className: wn("".concat(o, "-mask"), C)
    });
  }) : null;
}
var ZR = /* @__PURE__ */ T.memo(function(r) {
  var o = r.children;
  return o;
}, function(r, o) {
  return o.cache;
});
process.env.NODE_ENV !== "production" && (ZR.displayName = "PopupContent");
var JR = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var s = r.popup, c = r.className, d = r.prefixCls, m = r.style, h = r.target, C = r.onVisibleChanged, x = r.open, E = r.keepDom, M = r.fresh, _ = r.onClick, N = r.mask, L = r.arrow, H = r.arrowPos, V = r.align, A = r.motion, G = r.maskMotion, $ = r.forceRender, z = r.getPopupContainer, P = r.autoDestroy, I = r.portal, Y = r.zIndex, q = r.onMouseEnter, ne = r.onMouseLeave, oe = r.onPointerEnter, re = r.ready, ge = r.offsetX, pe = r.offsetY, te = r.offsetR, se = r.offsetB, de = r.onAlign, Ce = r.onPrepare, ke = r.stretch, we = r.targetWidth, Ae = r.targetHeight, ze = typeof s == "function" ? s() : s, ie = x || E, he = (z == null ? void 0 : z.length) > 0, Se = T.useState(!z || !he), Ie = xe(Se, 2), Ke = Ie[0], Xe = Ie[1];
  if (ia(function() {
    !Ke && he && h && Xe(!0);
  }, [Ke, he, h]), !Ke)
    return null;
  var it = "auto", Be = {
    left: "-1000vw",
    top: "-1000vh",
    right: it,
    bottom: it
  };
  if (re || !x) {
    var nt, Nt = V.points, He = V.dynamicInset || ((nt = V._experimental) === null || nt === void 0 ? void 0 : nt.dynamicInset), et = He && Nt[0][1] === "r", Bt = He && Nt[0][0] === "b";
    et ? (Be.right = te, Be.left = it) : (Be.left = ge, Be.right = it), Bt ? (Be.bottom = se, Be.top = it) : (Be.top = pe, Be.bottom = it);
  }
  var Ee = {};
  return ke && (ke.includes("height") && Ae ? Ee.height = Ae : ke.includes("minHeight") && Ae && (Ee.minHeight = Ae), ke.includes("width") && we ? Ee.width = we : ke.includes("minWidth") && we && (Ee.minWidth = we)), x || (Ee.pointerEvents = "none"), /* @__PURE__ */ T.createElement(I, {
    open: $ || ie,
    getContainer: z && function() {
      return z(h);
    },
    autoDestroy: P
  }, /* @__PURE__ */ T.createElement(_P, {
    prefixCls: d,
    open: x,
    zIndex: Y,
    mask: N,
    motion: G
  }), /* @__PURE__ */ T.createElement(Df, {
    onResize: de,
    disabled: !x
  }, function(mt) {
    return /* @__PURE__ */ T.createElement(Hg, an({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: $,
      leavedClassName: "".concat(d, "-hidden")
    }, A, {
      onAppearPrepare: Ce,
      onEnterPrepare: Ce,
      visible: x,
      onVisibleChanged: function(It) {
        var $t;
        A == null || ($t = A.onVisibleChanged) === null || $t === void 0 || $t.call(A, It), C(It);
      }
    }), function(Dt, It) {
      var $t = Dt.className, Ze = Dt.style, kt = wn(d, $t, c);
      return /* @__PURE__ */ T.createElement("div", {
        ref: cR(mt, o, It),
        className: kt,
        style: Te(Te(Te(Te({
          "--arrow-x": "".concat(H.x || 0, "px"),
          "--arrow-y": "".concat(H.y || 0, "px")
        }, Be), Ee), Ze), {}, {
          boxSizing: "border-box",
          zIndex: Y
        }, m),
        onMouseEnter: q,
        onMouseLeave: ne,
        onPointerEnter: oe,
        onClick: _
      }, L && /* @__PURE__ */ T.createElement(RP, {
        prefixCls: d,
        arrow: L,
        arrowPos: H,
        align: V
      }), /* @__PURE__ */ T.createElement(ZR, {
        cache: !x && !M
      }, ze));
    });
  }));
});
process.env.NODE_ENV !== "production" && (JR.displayName = "Popup");
var e_ = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var s = r.children, c = r.getTriggerDOMNode, d = Mg(s), m = T.useCallback(function(C) {
    m1(o, c ? c(C) : C);
  }, [c]), h = kg(m, s.ref);
  return d ? /* @__PURE__ */ T.cloneElement(s, {
    ref: h
  }) : s;
});
process.env.NODE_ENV !== "production" && (e_.displayName = "TriggerWrapper");
var Jx = /* @__PURE__ */ T.createContext(null);
function eT(r) {
  return r ? Array.isArray(r) ? r : [r] : [];
}
function kP(r, o, s, c) {
  return T.useMemo(function() {
    var d = eT(s != null ? s : o), m = eT(c != null ? c : o), h = new Set(d), C = new Set(m);
    return r && (h.has("hover") && (h.delete("hover"), h.add("click")), C.has("hover") && (C.delete("hover"), C.add("click"))), [h, C];
  }, [r, o, s, c]);
}
function MP() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], s = arguments.length > 2 ? arguments[2] : void 0;
  return s ? r[0] === o[0] : r[0] === o[0] && r[1] === o[1];
}
function OP(r, o, s, c) {
  for (var d = s.points, m = Object.keys(r), h = 0; h < m.length; h += 1) {
    var C, x = m[h];
    if (MP((C = r[x]) === null || C === void 0 ? void 0 : C.points, d, c))
      return "".concat(o, "-placement-").concat(x);
  }
  return "";
}
function tT(r, o, s, c) {
  return o || (s ? {
    motionName: "".concat(r, "-").concat(s)
  } : c ? {
    motionName: c
  } : null);
}
function rp(r) {
  return r.ownerDocument.defaultView;
}
function FS(r) {
  for (var o = [], s = r == null ? void 0 : r.parentElement, c = ["hidden", "scroll", "clip", "auto"]; s; ) {
    var d = rp(s).getComputedStyle(s), m = d.overflowX, h = d.overflowY, C = d.overflow;
    [m, h, C].some(function(x) {
      return c.includes(x);
    }) && o.push(s), s = s.parentElement;
  }
  return o;
}
function Gv(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(r) ? o : r;
}
function Pv(r) {
  return Gv(parseFloat(r), 0);
}
function nT(r, o) {
  var s = Te({}, r);
  return (o || []).forEach(function(c) {
    if (!(c instanceof HTMLBodyElement || c instanceof HTMLHtmlElement)) {
      var d = rp(c).getComputedStyle(c), m = d.overflow, h = d.overflowClipMargin, C = d.borderTopWidth, x = d.borderBottomWidth, E = d.borderLeftWidth, M = d.borderRightWidth, _ = c.getBoundingClientRect(), N = c.offsetHeight, L = c.clientHeight, H = c.offsetWidth, V = c.clientWidth, A = Pv(C), G = Pv(x), $ = Pv(E), z = Pv(M), P = Gv(Math.round(_.width / H * 1e3) / 1e3), I = Gv(Math.round(_.height / N * 1e3) / 1e3), Y = (H - V - $ - z) * P, q = (N - L - A - G) * I, ne = A * I, oe = G * I, re = $ * P, ge = z * P, pe = 0, te = 0;
      if (m === "clip") {
        var se = Pv(h);
        pe = se * P, te = se * I;
      }
      var de = _.x + re - pe, Ce = _.y + ne - te, ke = de + _.width + 2 * pe - re - ge - Y, we = Ce + _.height + 2 * te - ne - oe - q;
      s.left = Math.max(s.left, de), s.top = Math.max(s.top, Ce), s.right = Math.min(s.right, ke), s.bottom = Math.min(s.bottom, we);
    }
  }), s;
}
function rT(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = "".concat(o), c = s.match(/^(.*)\%$/);
  return c ? r * (parseFloat(c[1]) / 100) : parseFloat(s);
}
function aT(r, o) {
  var s = o || [], c = xe(s, 2), d = c[0], m = c[1];
  return [rT(r.width, d), rT(r.height, m)];
}
function iT() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [r[0], r[1]];
}
function gf(r, o) {
  var s = o[0], c = o[1], d, m;
  return s === "t" ? m = r.y : s === "b" ? m = r.y + r.height : m = r.y + r.height / 2, c === "l" ? d = r.x : c === "r" ? d = r.x + r.width : d = r.x + r.width / 2, {
    x: d,
    y: m
  };
}
function _u(r, o) {
  var s = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return r.map(function(c, d) {
    return d === o ? s[c] || "c" : c;
  }).join("");
}
function NP(r, o, s, c, d, m, h) {
  var C = T.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: d[c] || {}
  }), x = xe(C, 2), E = x[0], M = x[1], _ = T.useRef(0), N = T.useMemo(function() {
    return o ? FS(o) : [];
  }, [o]), L = T.useRef({}), H = function() {
    L.current = {};
  };
  r || H();
  var V = Vo(function() {
    if (o && s && r) {
      let tr = function(br, ma) {
        var xi = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : kt, Oa = ze.x + br, eo = ze.y + ma, Na = Oa + nt, to = eo + Be, Ti = Math.max(Oa, xi.left), Ko = Math.max(eo, xi.top), no = Math.min(Na, xi.right), zl = Math.min(to, xi.bottom);
        return Math.max(0, (no - Ti) * (zl - Ko));
      }, la = function() {
        Yr = ze.y + $e, ln = Yr + Be, Jn = ze.x + jt, Tr = Jn + nt;
      };
      var $, z, P = o, I = P.ownerDocument, Y = rp(P), q = Y.getComputedStyle(P), ne = q.width, oe = q.height, re = q.position, ge = P.style.left, pe = P.style.top, te = P.style.right, se = P.style.bottom, de = P.style.overflow, Ce = Te(Te({}, d[c]), m), ke = I.createElement("div");
      ($ = P.parentElement) === null || $ === void 0 || $.appendChild(ke), ke.style.left = "".concat(P.offsetLeft, "px"), ke.style.top = "".concat(P.offsetTop, "px"), ke.style.position = re, ke.style.height = "".concat(P.offsetHeight, "px"), ke.style.width = "".concat(P.offsetWidth, "px"), P.style.left = "0", P.style.top = "0", P.style.right = "auto", P.style.bottom = "auto", P.style.overflow = "hidden";
      var we;
      if (Array.isArray(s))
        we = {
          x: s[0],
          y: s[1],
          width: 0,
          height: 0
        };
      else {
        var Ae = s.getBoundingClientRect();
        we = {
          x: Ae.x,
          y: Ae.y,
          width: Ae.width,
          height: Ae.height
        };
      }
      var ze = P.getBoundingClientRect(), ie = I.documentElement, he = ie.clientWidth, Se = ie.clientHeight, Ie = ie.scrollWidth, Ke = ie.scrollHeight, Xe = ie.scrollTop, it = ie.scrollLeft, Be = ze.height, nt = ze.width, Nt = we.height, He = we.width, et = {
        left: 0,
        top: 0,
        right: he,
        bottom: Se
      }, Bt = {
        left: -it,
        top: -Xe,
        right: Ie - it,
        bottom: Ke - Xe
      }, Ee = Ce.htmlRegion, mt = "visible", Dt = "visibleFirst";
      Ee !== "scroll" && Ee !== Dt && (Ee = mt);
      var It = Ee === Dt, $t = nT(Bt, N), Ze = nT(et, N), kt = Ee === mt ? Ze : $t, gt = It ? Ze : kt;
      P.style.left = "auto", P.style.top = "auto", P.style.right = "0", P.style.bottom = "0";
      var Zt = P.getBoundingClientRect();
      P.style.left = ge, P.style.top = pe, P.style.right = te, P.style.bottom = se, P.style.overflow = de, (z = P.parentElement) === null || z === void 0 || z.removeChild(ke);
      var ot = Gv(Math.round(nt / parseFloat(ne) * 1e3) / 1e3), Wt = Gv(Math.round(Be / parseFloat(oe) * 1e3) / 1e3);
      if (ot === 0 || Wt === 0 || dg(s) && !NR(s))
        return;
      var Qt = Ce.offset, ut = Ce.targetOffset, Gt = aT(ze, Qt), Wn = xe(Gt, 2), qt = Wn[0], en = Wn[1], ye = aT(we, ut), Oe = xe(ye, 2), We = Oe[0], xt = Oe[1];
      we.x -= We, we.y -= xt;
      var Mt = Ce.points || [], rt = xe(Mt, 2), st = rt[0], on = rt[1], Ot = iT(on), Ut = iT(st), ir = gf(we, Ot), Vt = gf(ze, Ut), dn = Te({}, Ce), jt = ir.x - Vt.x + qt, $e = ir.y - Vt.y + en, St = tr(jt, $e), Me = tr(jt, $e, Ze), Ge = gf(we, ["t", "l"]), At = gf(ze, ["t", "l"]), mn = gf(we, ["b", "r"]), An = gf(ze, ["b", "r"]), gn = Ce.overflow || {}, oa = gn.adjustX, qr = gn.adjustY, Ln = gn.shiftX, Kt = gn.shiftY, Vn = function(ma) {
        return typeof ma == "boolean" ? ma : ma >= 0;
      }, Yr, ln, Jn, Tr;
      la();
      var qa = Vn(qr), Lr = Ut[0] === Ot[0];
      if (qa && Ut[0] === "t" && (ln > gt.bottom || L.current.bt)) {
        var Pr = $e;
        Lr ? Pr -= Be - Nt : Pr = Ge.y - An.y - en;
        var Rr = tr(jt, Pr), Ya = tr(jt, Pr, Ze);
        // Of course use larger one
        Rr > St || Rr === St && (!It || // Choose recommend one
        Ya >= Me) ? (L.current.bt = !0, $e = Pr, en = -en, dn.points = [_u(Ut, 0), _u(Ot, 0)]) : L.current.bt = !1;
      }
      if (qa && Ut[0] === "b" && (Yr < gt.top || L.current.tb)) {
        var Pn = $e;
        Lr ? Pn += Be - Nt : Pn = mn.y - At.y - en;
        var Ei = tr(jt, Pn), _r = tr(jt, Pn, Ze);
        // Of course use larger one
        Ei > St || Ei === St && (!It || // Choose recommend one
        _r >= Me) ? (L.current.tb = !0, $e = Pn, en = -en, dn.points = [_u(Ut, 0), _u(Ot, 0)]) : L.current.tb = !1;
      }
      var xn = Vn(oa), zr = Ut[1] === Ot[1];
      if (xn && Ut[1] === "l" && (Tr > gt.right || L.current.rl)) {
        var kr = jt;
        zr ? kr -= nt - He : kr = Ge.x - An.x - qt;
        var Ir = tr(kr, $e), Qa = tr(kr, $e, Ze);
        // Of course use larger one
        Ir > St || Ir === St && (!It || // Choose recommend one
        Qa >= Me) ? (L.current.rl = !0, jt = kr, qt = -qt, dn.points = [_u(Ut, 1), _u(Ot, 1)]) : L.current.rl = !1;
      }
      if (xn && Ut[1] === "r" && (Jn < gt.left || L.current.lr)) {
        var Hr = jt;
        zr ? Hr += nt - He : Hr = mn.x - At.x - qt;
        var Xa = tr(Hr, $e), gr = tr(Hr, $e, Ze);
        // Of course use larger one
        Xa > St || Xa === St && (!It || // Choose recommend one
        gr >= Me) ? (L.current.lr = !0, jt = Hr, qt = -qt, dn.points = [_u(Ut, 1), _u(Ot, 1)]) : L.current.lr = !1;
      }
      la();
      var Qr = Ln === !0 ? 0 : Ln;
      typeof Qr == "number" && (Jn < Ze.left && (jt -= Jn - Ze.left - qt, we.x + He < Ze.left + Qr && (jt += we.x - Ze.left + He - Qr)), Tr > Ze.right && (jt -= Tr - Ze.right - qt, we.x > Ze.right - Qr && (jt += we.x - Ze.right + Qr)));
      var Mr = Kt === !0 ? 0 : Kt;
      typeof Mr == "number" && (Yr < Ze.top && ($e -= Yr - Ze.top - en, we.y + Nt < Ze.top + Mr && ($e += we.y - Ze.top + Nt - Mr)), ln > Ze.bottom && ($e -= ln - Ze.bottom - en, we.y > Ze.bottom - Mr && ($e += we.y - Ze.bottom + Mr)));
      var ha = ze.x + jt, zn = ha + nt, Kn = ze.y + $e, Or = Kn + Be, or = we.x, yr = or + He, Re = we.y, Xt = Re + Nt, dt = Math.max(ha, or), Ht = Math.min(zn, yr), Tn = (dt + Ht) / 2, On = Tn - ha, Nn = Math.max(Kn, Re), vn = Math.min(Or, Xt), er = (Nn + vn) / 2, wi = er - Kn;
      h == null || h(o, dn);
      var Gn = Zt.right - ze.x - (jt + ze.width), In = Zt.bottom - ze.y - ($e + ze.height);
      M({
        ready: !0,
        offsetX: jt / ot,
        offsetY: $e / Wt,
        offsetR: Gn / ot,
        offsetB: In / Wt,
        arrowX: On / ot,
        arrowY: wi / Wt,
        scaleX: ot,
        scaleY: Wt,
        align: dn
      });
    }
  }), A = function() {
    _.current += 1;
    var z = _.current;
    Promise.resolve().then(function() {
      _.current === z && V();
    });
  }, G = function() {
    M(function(z) {
      return Te(Te({}, z), {}, {
        ready: !1
      });
    });
  };
  return ia(G, [c]), ia(function() {
    r || G();
  }, [r]), [E.ready, E.offsetX, E.offsetY, E.offsetR, E.offsetB, E.arrowX, E.arrowY, E.scaleX, E.scaleY, E.align, A];
}
function DP(r, o, s, c, d) {
  ia(function() {
    if (r && o && s) {
      let _ = function() {
        c(), d();
      };
      var m = o, h = s, C = FS(m), x = FS(h), E = rp(h), M = new Set([E].concat(ar(C), ar(x)));
      return M.forEach(function(N) {
        N.addEventListener("scroll", _, {
          passive: !0
        });
      }), E.addEventListener("resize", _, {
        passive: !0
      }), c(), function() {
        M.forEach(function(N) {
          N.removeEventListener("scroll", _), E.removeEventListener("resize", _);
        });
      };
    }
  }, [r, o, s]);
}
function AP(r, o, s, c, d, m, h, C) {
  var x = T.useRef(r), E = T.useRef(!1);
  x.current !== r && (E.current = !0, x.current = r), T.useEffect(function() {
    var M = bi(function() {
      E.current = !1;
    });
    return function() {
      bi.cancel(M);
    };
  }, [r]), T.useEffect(function() {
    if (o && c && (!d || m)) {
      var M = function() {
        var re = !1, ge = function(se) {
          var de = se.target;
          re = h(de);
        }, pe = function(se) {
          var de = se.target;
          !E.current && x.current && !re && !h(de) && C(!1);
        };
        return [ge, pe];
      }, _ = M(), N = xe(_, 2), L = N[0], H = N[1], V = M(), A = xe(V, 2), G = A[0], $ = A[1], z = rp(c);
      z.addEventListener("mousedown", L, !0), z.addEventListener("click", H, !0), z.addEventListener("contextmenu", H, !0);
      var P = gg(s);
      if (P && (P.addEventListener("mousedown", G, !0), P.addEventListener("click", $, !0), P.addEventListener("contextmenu", $, !0)), process.env.NODE_ENV !== "production") {
        var I, Y, q = s == null || (I = s.getRootNode) === null || I === void 0 ? void 0 : I.call(s), ne = (Y = c.getRootNode) === null || Y === void 0 ? void 0 : Y.call(c);
        _f(q === ne, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        z.removeEventListener("mousedown", L, !0), z.removeEventListener("click", H, !0), z.removeEventListener("contextmenu", H, !0), P && (P.removeEventListener("mousedown", G, !0), P.removeEventListener("click", $, !0), P.removeEventListener("contextmenu", $, !0));
      };
    }
  }, [o, s, c, d, m]);
}
var LP = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function PP() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : x1, o = /* @__PURE__ */ T.forwardRef(function(s, c) {
    var d = s.prefixCls, m = d === void 0 ? "rc-trigger-popup" : d, h = s.children, C = s.action, x = C === void 0 ? "hover" : C, E = s.showAction, M = s.hideAction, _ = s.popupVisible, N = s.defaultPopupVisible, L = s.onPopupVisibleChange, H = s.afterPopupVisibleChange, V = s.mouseEnterDelay, A = s.mouseLeaveDelay, G = A === void 0 ? 0.1 : A, $ = s.focusDelay, z = s.blurDelay, P = s.mask, I = s.maskClosable, Y = I === void 0 ? !0 : I, q = s.getPopupContainer, ne = s.forceRender, oe = s.autoDestroy, re = s.destroyPopupOnHide, ge = s.popup, pe = s.popupClassName, te = s.popupStyle, se = s.popupPlacement, de = s.builtinPlacements, Ce = de === void 0 ? {} : de, ke = s.popupAlign, we = s.zIndex, Ae = s.stretch, ze = s.getPopupClassNameFromAlign, ie = s.fresh, he = s.alignPoint, Se = s.onPopupClick, Ie = s.onPopupAlign, Ke = s.arrow, Xe = s.popupMotion, it = s.maskMotion, Be = s.popupTransitionName, nt = s.popupAnimation, Nt = s.maskTransitionName, He = s.maskAnimation, et = s.className, Bt = s.getTriggerDOMNode, Ee = Fn(s, LP), mt = oe || re || !1, Dt = T.useState(!1), It = xe(Dt, 2), $t = It[0], Ze = It[1];
    ia(function() {
      Ze(iP());
    }, []);
    var kt = T.useRef({}), gt = T.useContext(Jx), Zt = T.useMemo(function() {
      return {
        registerSubPopup: function(yt, ct) {
          kt.current[yt] = ct, gt == null || gt.registerSubPopup(yt, ct);
        }
      };
    }, [gt]), ot = aP(), Wt = T.useState(null), Qt = xe(Wt, 2), ut = Qt[0], Gt = Qt[1], Wn = Vo(function(Ve) {
      dg(Ve) && ut !== Ve && Gt(Ve), gt == null || gt.registerSubPopup(ot, Ve);
    }), qt = T.useState(null), en = xe(qt, 2), ye = en[0], Oe = en[1], We = T.useRef(null), xt = Vo(function(Ve) {
      dg(Ve) && ye !== Ve && (Oe(Ve), We.current = Ve);
    }), Mt = T.Children.only(h), rt = (Mt == null ? void 0 : Mt.props) || {}, st = {}, on = Vo(function(Ve) {
      var yt, ct, pn = ye;
      return (pn == null ? void 0 : pn.contains(Ve)) || ((yt = gg(pn)) === null || yt === void 0 ? void 0 : yt.host) === Ve || Ve === pn || (ut == null ? void 0 : ut.contains(Ve)) || ((ct = gg(ut)) === null || ct === void 0 ? void 0 : ct.host) === Ve || Ve === ut || Object.values(kt.current).some(function(Cn) {
        return (Cn == null ? void 0 : Cn.contains(Ve)) || Ve === Cn;
      });
    }), Ot = tT(m, Xe, nt, Be), Ut = tT(m, it, He, Nt), ir = T.useState(N || !1), Vt = xe(ir, 2), dn = Vt[0], jt = Vt[1], $e = _ != null ? _ : dn, St = Vo(function(Ve) {
      _ === void 0 && jt(Ve);
    });
    ia(function() {
      jt(_ || !1);
    }, [_]);
    var Me = T.useRef($e);
    Me.current = $e;
    var Ge = T.useRef([]);
    Ge.current = [];
    var At = Vo(function(Ve) {
      var yt;
      St(Ve), ((yt = Ge.current[Ge.current.length - 1]) !== null && yt !== void 0 ? yt : $e) !== Ve && (Ge.current.push(Ve), L == null || L(Ve));
    }), mn = T.useRef(), An = function() {
      clearTimeout(mn.current);
    }, gn = function(yt) {
      var ct = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      An(), ct === 0 ? At(yt) : mn.current = setTimeout(function() {
        At(yt);
      }, ct * 1e3);
    };
    T.useEffect(function() {
      return An;
    }, []);
    var oa = T.useState(!1), qr = xe(oa, 2), Ln = qr[0], Kt = qr[1];
    ia(function(Ve) {
      (!Ve || $e) && Kt(!0);
    }, [$e]);
    var Vn = T.useState(null), Yr = xe(Vn, 2), ln = Yr[0], Jn = Yr[1], Tr = T.useState([0, 0]), qa = xe(Tr, 2), Lr = qa[0], Pr = qa[1], Rr = function(yt) {
      Pr([yt.clientX, yt.clientY]);
    }, Ya = NP($e, ut, he ? Lr : ye, se, Ce, ke, Ie), Pn = xe(Ya, 11), Ei = Pn[0], _r = Pn[1], xn = Pn[2], zr = Pn[3], kr = Pn[4], Ir = Pn[5], Qa = Pn[6], Hr = Pn[7], Xa = Pn[8], gr = Pn[9], Qr = Pn[10], Mr = kP($t, x, E, M), ha = xe(Mr, 2), zn = ha[0], Kn = ha[1], Or = zn.has("click"), or = Kn.has("click") || Kn.has("contextMenu"), yr = Vo(function() {
      Ln || Qr();
    }), Re = function() {
      Me.current && he && or && gn(!1);
    };
    DP($e, ye, ut, yr, Re), ia(function() {
      yr();
    }, [Lr, se]), ia(function() {
      $e && !(Ce != null && Ce[se]) && yr();
    }, [JSON.stringify(ke)]);
    var Xt = T.useMemo(function() {
      var Ve = OP(Ce, m, gr, he);
      return wn(Ve, ze == null ? void 0 : ze(gr));
    }, [gr, ze, Ce, m, he]);
    T.useImperativeHandle(c, function() {
      return {
        nativeElement: We.current,
        forceAlign: yr
      };
    });
    var dt = T.useState(0), Ht = xe(dt, 2), Tn = Ht[0], On = Ht[1], Nn = T.useState(0), vn = xe(Nn, 2), er = vn[0], wi = vn[1], Gn = function() {
      if (Ae && ye) {
        var yt = ye.getBoundingClientRect();
        On(yt.width), wi(yt.height);
      }
    }, In = function() {
      Gn(), yr();
    }, tr = function(yt) {
      Kt(!1), Qr(), H == null || H(yt);
    }, la = function() {
      return new Promise(function(yt) {
        Gn(), Jn(function() {
          return yt;
        });
      });
    };
    ia(function() {
      ln && (Qr(), ln(), Jn(null));
    }, [ln]);
    function br(Ve, yt, ct, pn) {
      st[Ve] = function(Cn) {
        var ro;
        pn == null || pn(Cn), gn(yt, ct);
        for (var Za = arguments.length, Lu = new Array(Za > 1 ? Za - 1 : 0), Ri = 1; Ri < Za; Ri++)
          Lu[Ri - 1] = arguments[Ri];
        (ro = rt[Ve]) === null || ro === void 0 || ro.call.apply(ro, [rt, Cn].concat(Lu));
      };
    }
    (Or || or) && (st.onClick = function(Ve) {
      var yt;
      Me.current && or ? gn(!1) : !Me.current && Or && (Rr(Ve), gn(!0));
      for (var ct = arguments.length, pn = new Array(ct > 1 ? ct - 1 : 0), Cn = 1; Cn < ct; Cn++)
        pn[Cn - 1] = arguments[Cn];
      (yt = rt.onClick) === null || yt === void 0 || yt.call.apply(yt, [rt, Ve].concat(pn));
    }), AP($e, or, ye, ut, P, Y, on, gn);
    var ma = zn.has("hover"), xi = Kn.has("hover"), Oa, eo;
    ma && (br("onMouseEnter", !0, V, function(Ve) {
      Rr(Ve);
    }), br("onPointerEnter", !0, V, function(Ve) {
      Rr(Ve);
    }), Oa = function() {
      ($e || Ln) && gn(!0, V);
    }, he && (st.onMouseMove = function(Ve) {
      var yt;
      (yt = rt.onMouseMove) === null || yt === void 0 || yt.call(rt, Ve);
    })), xi && (br("onMouseLeave", !1, G), br("onPointerLeave", !1, G), eo = function() {
      gn(!1, G);
    }), zn.has("focus") && br("onFocus", !0, $), Kn.has("focus") && br("onBlur", !1, z), zn.has("contextMenu") && (st.onContextMenu = function(Ve) {
      var yt;
      Me.current && Kn.has("contextMenu") ? gn(!1) : (Rr(Ve), gn(!0)), Ve.preventDefault();
      for (var ct = arguments.length, pn = new Array(ct > 1 ? ct - 1 : 0), Cn = 1; Cn < ct; Cn++)
        pn[Cn - 1] = arguments[Cn];
      (yt = rt.onContextMenu) === null || yt === void 0 || yt.call.apply(yt, [rt, Ve].concat(pn));
    }), et && (st.className = wn(rt.className, et));
    var Na = Te(Te({}, rt), st), to = {}, Ti = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Ti.forEach(function(Ve) {
      Ee[Ve] && (to[Ve] = function() {
        for (var yt, ct = arguments.length, pn = new Array(ct), Cn = 0; Cn < ct; Cn++)
          pn[Cn] = arguments[Cn];
        (yt = Na[Ve]) === null || yt === void 0 || yt.call.apply(yt, [Na].concat(pn)), Ee[Ve].apply(Ee, pn);
      });
    });
    var Ko = /* @__PURE__ */ T.cloneElement(Mt, Te(Te({}, Na), to)), no = {
      x: Ir,
      y: Qa
    }, zl = Ke ? Te({}, Ke !== !0 ? Ke : {}) : null;
    return /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(Df, {
      disabled: !$e,
      ref: xt,
      onResize: In
    }, /* @__PURE__ */ T.createElement(e_, {
      getTriggerDOMNode: Bt
    }, Ko)), /* @__PURE__ */ T.createElement(Jx.Provider, {
      value: Zt
    }, /* @__PURE__ */ T.createElement(JR, {
      portal: r,
      ref: Wn,
      prefixCls: m,
      popup: ge,
      className: wn(pe, Xt),
      style: te,
      target: ye,
      onMouseEnter: Oa,
      onMouseLeave: eo,
      onPointerEnter: Oa,
      zIndex: we,
      open: $e,
      keepDom: Ln,
      fresh: ie,
      onClick: Se,
      mask: P,
      motion: Ot,
      maskMotion: Ut,
      onVisibleChanged: tr,
      onPrepare: la,
      forceRender: ne,
      autoDestroy: mt,
      getPopupContainer: q,
      align: gr,
      arrow: zl,
      arrowPos: no,
      ready: Ei,
      offsetX: _r,
      offsetY: xn,
      offsetR: zr,
      offsetB: kr,
      onAlign: yr,
      stretch: Ae,
      targetWidth: Tn / Hr,
      targetHeight: er / Xa
    })));
  });
  return process.env.NODE_ENV !== "production" && (o.displayName = "Trigger"), o;
}
const t_ = PP(x1);
var aa = {
  adjustX: 1,
  adjustY: 1
}, zP = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: aa
  },
  topRight: {
    points: ["br", "tr"],
    overflow: aa
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: aa
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: aa
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: aa
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: aa
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: aa
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: aa
  }
}, IP = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: aa
  },
  topRight: {
    points: ["br", "tr"],
    overflow: aa
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: aa
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: aa
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: aa
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: aa
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: aa
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: aa
  }
};
function n_(r, o, s) {
  if (o)
    return o;
  if (s)
    return s[r] || s.other;
}
var HP = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function $P(r) {
  var o = r.prefixCls, s = r.visible, c = r.children, d = r.popup, m = r.popupStyle, h = r.popupClassName, C = r.popupOffset, x = r.disabled, E = r.mode, M = r.onVisibleChange, _ = T.useContext(Xi), N = _.getPopupContainer, L = _.rtl, H = _.subMenuOpenDelay, V = _.subMenuCloseDelay, A = _.builtinPlacements, G = _.triggerSubMenuAction, $ = _.forceSubMenuRender, z = _.rootClassName, P = _.motion, I = _.defaultMotions, Y = T.useState(!1), q = xe(Y, 2), ne = q[0], oe = q[1], re = Te(L ? Te({}, IP) : Te({}, zP), A), ge = HP[E], pe = n_(E, P, I), te = T.useRef(pe);
  E !== "inline" && (te.current = pe);
  var se = Te(Te({}, te.current), {}, {
    leavedClassName: "".concat(o, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), de = T.useRef();
  return T.useEffect(function() {
    return de.current = bi(function() {
      oe(s);
    }), function() {
      bi.cancel(de.current);
    };
  }, [s]), /* @__PURE__ */ T.createElement(t_, {
    prefixCls: o,
    popupClassName: wn("".concat(o, "-popup"), tt({}, "".concat(o, "-rtl"), L), h, z),
    stretch: E === "horizontal" ? "minWidth" : null,
    getPopupContainer: N,
    builtinPlacements: re,
    popupPlacement: ge,
    popupVisible: ne,
    popup: d,
    popupStyle: m,
    popupAlign: C && {
      offset: C
    },
    action: x ? [] : [G],
    mouseEnterDelay: H,
    mouseLeaveDelay: V,
    onPopupVisibleChange: M,
    forceRender: $,
    popupMotion: se,
    fresh: !0
  }, c);
}
function UP(r) {
  var o = r.id, s = r.open, c = r.keyPath, d = r.children, m = "inline", h = T.useContext(Xi), C = h.prefixCls, x = h.forceSubMenuRender, E = h.motion, M = h.defaultMotions, _ = h.mode, N = T.useRef(!1);
  N.current = _ === m;
  var L = T.useState(!N.current), H = xe(L, 2), V = H[0], A = H[1], G = N.current ? s : !1;
  T.useEffect(function() {
    N.current && A(!1);
  }, [_]);
  var $ = Te({}, n_(m, E, M));
  c.length > 1 && ($.motionAppear = !1);
  var z = $.onVisibleChanged;
  return $.onVisibleChanged = function(P) {
    return !N.current && !P && A(!0), z == null ? void 0 : z(P);
  }, V ? null : /* @__PURE__ */ T.createElement(Wv, {
    mode: m,
    locked: !N.current
  }, /* @__PURE__ */ T.createElement(Hg, an({
    visible: G
  }, $, {
    forceRender: x,
    removeOnLeave: !1,
    leavedClassName: "".concat(C, "-hidden")
  }), function(P) {
    var I = P.className, Y = P.style;
    return /* @__PURE__ */ T.createElement(E1, {
      id: o,
      className: I,
      style: Y
    }, d);
  }));
}
var jP = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], FP = ["active"], VP = function(o) {
  var s, c = o.style, d = o.className, m = o.title, h = o.eventKey, C = o.warnKey, x = o.disabled, E = o.internalPopupClose, M = o.children, _ = o.itemIcon, N = o.expandIcon, L = o.popupClassName, H = o.popupOffset, V = o.popupStyle, A = o.onClick, G = o.onMouseEnter, $ = o.onMouseLeave, z = o.onTitleClick, P = o.onTitleMouseEnter, I = o.onTitleMouseLeave, Y = Fn(o, jP), q = _R(h), ne = T.useContext(Xi), oe = ne.prefixCls, re = ne.mode, ge = ne.openKeys, pe = ne.disabled, te = ne.overflowDisabled, se = ne.activeKey, de = ne.selectedKeys, Ce = ne.itemIcon, ke = ne.expandIcon, we = ne.onItemClick, Ae = ne.onOpenChange, ze = ne.onActive, ie = T.useContext(b1), he = ie._internalRenderSubMenuItem, Se = T.useContext(OR), Ie = Se.isSubPathKey, Ke = np(), Xe = "".concat(oe, "-submenu"), it = pe || x, Be = T.useRef(), nt = T.useRef();
  process.env.NODE_ENV !== "production" && C && pa(!1, "SubMenu should not leave undefined `key`.");
  var Nt = _ != null ? _ : Ce, He = N != null ? N : ke, et = ge.includes(h), Bt = !te && et, Ee = Ie(de, h), mt = AR(h, it, P, I), Dt = mt.active, It = Fn(mt, FP), $t = T.useState(!1), Ze = xe($t, 2), kt = Ze[0], gt = Ze[1], Zt = function(st) {
    it || gt(st);
  }, ot = function(st) {
    Zt(!0), G == null || G({
      key: h,
      domEvent: st
    });
  }, Wt = function(st) {
    Zt(!1), $ == null || $({
      key: h,
      domEvent: st
    });
  }, Qt = T.useMemo(function() {
    return Dt || (re !== "inline" ? kt || Ie([se], h) : !1);
  }, [re, Dt, se, kt, h, Ie]), ut = LR(Ke.length), Gt = function(st) {
    it || (z == null || z({
      key: h,
      domEvent: st
    }), re === "inline" && Ae(h, !et));
  }, Wn = Hv(function(rt) {
    A == null || A(mg(rt)), we(rt);
  }), qt = function(st) {
    re !== "inline" && Ae(h, st);
  }, en = function() {
    ze(h);
  }, ye = q && "".concat(q, "-popup"), Oe = /* @__PURE__ */ T.createElement("div", an({
    role: "menuitem",
    style: ut,
    className: "".concat(Xe, "-title"),
    tabIndex: it ? null : -1,
    ref: Be,
    title: typeof m == "string" ? m : null,
    "data-menu-id": te && q ? null : q,
    "aria-expanded": Bt,
    "aria-haspopup": !0,
    "aria-controls": ye,
    "aria-disabled": it,
    onClick: Gt,
    onFocus: en
  }, It), m, /* @__PURE__ */ T.createElement(PR, {
    icon: re !== "horizontal" ? He : void 0,
    props: Te(Te({}, o), {}, {
      isOpen: Bt,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ T.createElement("i", {
    className: "".concat(Xe, "-arrow")
  }))), We = T.useRef(re);
  if (re !== "inline" && Ke.length > 1 ? We.current = "vertical" : We.current = re, !te) {
    var xt = We.current;
    Oe = /* @__PURE__ */ T.createElement($P, {
      mode: xt,
      prefixCls: Xe,
      visible: !E && Bt && re !== "inline",
      popupClassName: L,
      popupOffset: H,
      popupStyle: V,
      popup: /* @__PURE__ */ T.createElement(
        Wv,
        {
          mode: xt === "horizontal" ? "vertical" : xt
        },
        /* @__PURE__ */ T.createElement(E1, {
          id: ye,
          ref: nt
        }, M)
      ),
      disabled: it,
      onVisibleChange: qt
    }, Oe);
  }
  var Mt = /* @__PURE__ */ T.createElement(Dl.Item, an({
    role: "none"
  }, Y, {
    component: "li",
    style: c,
    className: wn(Xe, "".concat(Xe, "-").concat(re), d, (s = {}, tt(s, "".concat(Xe, "-open"), Bt), tt(s, "".concat(Xe, "-active"), Qt), tt(s, "".concat(Xe, "-selected"), Ee), tt(s, "".concat(Xe, "-disabled"), it), s)),
    onMouseEnter: ot,
    onMouseLeave: Wt
  }), Oe, !te && /* @__PURE__ */ T.createElement(UP, {
    id: ye,
    open: Bt,
    keyPath: Ke
  }, M));
  return he && (Mt = he(Mt, o, {
    selected: Ee,
    active: Qt,
    open: Bt,
    disabled: it
  })), /* @__PURE__ */ T.createElement(Wv, {
    onItemClick: Wn,
    mode: re === "horizontal" ? "vertical" : re,
    itemIcon: Nt,
    expandIcon: He
  }, Mt);
};
function R1(r) {
  var o = r.eventKey, s = r.children, c = np(o), d = w1(s, c), m = Lg();
  T.useEffect(function() {
    if (m)
      return m.registerPath(o, c), function() {
        m.unregisterPath(o, c);
      };
  }, [c]);
  var h;
  return m ? h = d : h = /* @__PURE__ */ T.createElement(VP, r, d), /* @__PURE__ */ T.createElement(MR.Provider, {
    value: c
  }, h);
}
var BP = ["className", "title", "eventKey", "children"], WP = ["children"], KP = function(o) {
  var s = o.className, c = o.title;
  o.eventKey;
  var d = o.children, m = Fn(o, BP), h = T.useContext(Xi), C = h.prefixCls, x = "".concat(C, "-item-group");
  return /* @__PURE__ */ T.createElement("li", an({
    role: "presentation"
  }, m, {
    onClick: function(M) {
      return M.stopPropagation();
    },
    className: wn(x, s)
  }), /* @__PURE__ */ T.createElement("div", {
    role: "presentation",
    className: "".concat(x, "-title"),
    title: typeof c == "string" ? c : void 0
  }, c), /* @__PURE__ */ T.createElement("ul", {
    role: "group",
    className: "".concat(x, "-list")
  }, d));
};
function r_(r) {
  var o = r.children, s = Fn(r, WP), c = np(s.eventKey), d = w1(o, c), m = Lg();
  return m ? d : /* @__PURE__ */ T.createElement(KP, Pg(s, ["warnKey"]), d);
}
function a_(r) {
  var o = r.className, s = r.style, c = T.useContext(Xi), d = c.prefixCls, m = Lg();
  return m ? null : /* @__PURE__ */ T.createElement("li", {
    role: "separator",
    className: wn("".concat(d, "-item-divider"), o),
    style: s
  });
}
var GP = ["label", "children", "key", "type"];
function VS(r) {
  return (r || []).map(function(o, s) {
    if (o && Bn(o) === "object") {
      var c = o, d = c.label, m = c.children, h = c.key, C = c.type, x = Fn(c, GP), E = h != null ? h : "tmp-".concat(s);
      return m || C === "group" ? C === "group" ? /* @__PURE__ */ T.createElement(r_, an({
        key: E
      }, x, {
        title: d
      }), VS(m)) : /* @__PURE__ */ T.createElement(R1, an({
        key: E
      }, x, {
        title: d
      }), VS(m)) : C === "divider" ? /* @__PURE__ */ T.createElement(a_, an({
        key: E
      }, x)) : /* @__PURE__ */ T.createElement(zg, an({
        key: E
      }, x), d);
    }
    return null;
  }).filter(function(o) {
    return o;
  });
}
function qP(r, o, s) {
  var c = r;
  return o && (c = VS(o)), w1(c, s);
}
var YP = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"], yf = [], QP = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var s, c, d = r, m = d.prefixCls, h = m === void 0 ? "rc-menu" : m, C = d.rootClassName, x = d.style, E = d.className, M = d.tabIndex, _ = M === void 0 ? 0 : M, N = d.items, L = d.children, H = d.direction, V = d.id, A = d.mode, G = A === void 0 ? "vertical" : A, $ = d.inlineCollapsed, z = d.disabled, P = d.disabledOverflow, I = d.subMenuOpenDelay, Y = I === void 0 ? 0.1 : I, q = d.subMenuCloseDelay, ne = q === void 0 ? 0.1 : q, oe = d.forceSubMenuRender, re = d.defaultOpenKeys, ge = d.openKeys, pe = d.activeKey, te = d.defaultActiveFirst, se = d.selectable, de = se === void 0 ? !0 : se, Ce = d.multiple, ke = Ce === void 0 ? !1 : Ce, we = d.defaultSelectedKeys, Ae = d.selectedKeys, ze = d.onSelect, ie = d.onDeselect, he = d.inlineIndent, Se = he === void 0 ? 24 : he, Ie = d.motion, Ke = d.defaultMotions, Xe = d.triggerSubMenuAction, it = Xe === void 0 ? "hover" : Xe, Be = d.builtinPlacements, nt = d.itemIcon, Nt = d.expandIcon, He = d.overflowedIndicator, et = He === void 0 ? "..." : He, Bt = d.overflowedIndicatorPopupClassName, Ee = d.getPopupContainer, mt = d.onClick, Dt = d.onOpenChange, It = d.onKeyDown, $t = d.openAnimation, Ze = d.openTransitionName, kt = d._internalRenderMenuItem, gt = d._internalRenderSubMenuItem, Zt = Fn(d, YP), ot = T.useMemo(function() {
    return qP(L, N, yf);
  }, [L, N]), Wt = T.useState(!1), Qt = xe(Wt, 2), ut = Qt[0], Gt = Qt[1], Wn = T.useRef(), qt = PL(V), en = H === "rtl";
  process.env.NODE_ENV !== "production" && pa(!$t && !Ze, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var ye = Uv(re, {
    value: ge,
    postState: function(dt) {
      return dt || yf;
    }
  }), Oe = xe(ye, 2), We = Oe[0], xt = Oe[1], Mt = function(dt) {
    var Ht = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function Tn() {
      xt(dt), Dt == null || Dt(dt);
    }
    Ht ? Rg.flushSync(Tn) : Tn();
  }, rt = T.useState(We), st = xe(rt, 2), on = st[0], Ot = st[1], Ut = T.useRef(!1), ir = T.useMemo(function() {
    return (G === "inline" || G === "vertical") && $ ? ["vertical", $] : [G, !1];
  }, [G, $]), Vt = xe(ir, 2), dn = Vt[0], jt = Vt[1], $e = dn === "inline", St = T.useState(dn), Me = xe(St, 2), Ge = Me[0], At = Me[1], mn = T.useState(jt), An = xe(mn, 2), gn = An[0], oa = An[1];
  T.useEffect(function() {
    At(dn), oa(jt), Ut.current && ($e ? xt(on) : Mt(yf));
  }, [dn, jt]);
  var qr = T.useState(0), Ln = xe(qr, 2), Kt = Ln[0], Vn = Ln[1], Yr = Kt >= ot.length - 1 || Ge !== "horizontal" || P;
  T.useEffect(function() {
    $e && Ot(We);
  }, [We]), T.useEffect(function() {
    return Ut.current = !0, function() {
      Ut.current = !1;
    };
  }, []);
  var ln = AL(), Jn = ln.registerPath, Tr = ln.unregisterPath, qa = ln.refreshOverflowKeys, Lr = ln.isSubPathKey, Pr = ln.getKeyPath, Rr = ln.getKeys, Ya = ln.getSubPathKeys, Pn = T.useMemo(function() {
    return {
      registerPath: Jn,
      unregisterPath: Tr
    };
  }, [Jn, Tr]), Ei = T.useMemo(function() {
    return {
      isSubPathKey: Lr
    };
  }, [Lr]);
  T.useEffect(function() {
    qa(Yr ? yf : ot.slice(Kt + 1).map(function(Xt) {
      return Xt.key;
    }));
  }, [Kt, Yr]);
  var _r = Uv(pe || te && ((s = ot[0]) === null || s === void 0 ? void 0 : s.key), {
    value: pe
  }), xn = xe(_r, 2), zr = xn[0], kr = xn[1], Ir = Hv(function(Xt) {
    kr(Xt);
  }), Qa = Hv(function() {
    kr(void 0);
  });
  KT(o, function() {
    return {
      list: Wn.current,
      focus: function(dt) {
        var Ht, Tn = Rr(), On = PS(Tn, qt), Nn = On.elements, vn = On.key2element, er = On.element2key, wi = S1(Wn.current, Nn), Gn = zr != null ? zr : wi[0] ? er.get(wi[0]) : (Ht = ot.find(function(la) {
          return !la.props.disabled;
        })) === null || Ht === void 0 ? void 0 : Ht.key, In = vn.get(Gn);
        if (Gn && In) {
          var tr;
          In == null || (tr = In.focus) === null || tr === void 0 || tr.call(In, dt);
        }
      }
    };
  });
  var Hr = Uv(we || [], {
    value: Ae,
    // Legacy convert key to array
    postState: function(dt) {
      return Array.isArray(dt) ? dt : dt == null ? yf : [dt];
    }
  }), Xa = xe(Hr, 2), gr = Xa[0], Qr = Xa[1], Mr = function(dt) {
    if (de) {
      var Ht = dt.key, Tn = gr.includes(Ht), On;
      ke ? Tn ? On = gr.filter(function(vn) {
        return vn !== Ht;
      }) : On = [].concat(ar(gr), [Ht]) : On = [Ht], Qr(On);
      var Nn = Te(Te({}, dt), {}, {
        selectedKeys: On
      });
      Tn ? ie == null || ie(Nn) : ze == null || ze(Nn);
    }
    !ke && We.length && Ge !== "inline" && Mt(yf);
  }, ha = Hv(function(Xt) {
    mt == null || mt(mg(Xt)), Mr(Xt);
  }), zn = Hv(function(Xt, dt) {
    var Ht = We.filter(function(On) {
      return On !== Xt;
    });
    if (dt)
      Ht.push(Xt);
    else if (Ge !== "inline") {
      var Tn = Ya(Xt);
      Ht = Ht.filter(function(On) {
        return !Tn.has(On);
      });
    }
    y1(We, Ht, !0) || Mt(Ht, !0);
  }), Kn = function(dt, Ht) {
    var Tn = Ht != null ? Ht : !We.includes(dt);
    zn(dt, Tn);
  }, Or = OL(Ge, zr, en, qt, Wn, Rr, Pr, kr, Kn, It);
  T.useEffect(function() {
    Gt(!0);
  }, []);
  var or = T.useMemo(function() {
    return {
      _internalRenderMenuItem: kt,
      _internalRenderSubMenuItem: gt
    };
  }, [kt, gt]), yr = Ge !== "horizontal" || P ? ot : (
    // Need wrap for overflow dropdown that do not response for open
    ot.map(function(Xt, dt) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ T.createElement(Wv, {
          key: Xt.key,
          overflowDisabled: dt > Kt
        }, Xt)
      );
    })
  ), Re = /* @__PURE__ */ T.createElement(Dl, an({
    id: V,
    ref: Wn,
    prefixCls: "".concat(h, "-overflow"),
    component: "ul",
    itemComponent: zg,
    className: wn(h, "".concat(h, "-root"), "".concat(h, "-").concat(Ge), E, (c = {}, tt(c, "".concat(h, "-inline-collapsed"), gn), tt(c, "".concat(h, "-rtl"), en), c), C),
    dir: H,
    style: x,
    role: "menu",
    tabIndex: _,
    data: yr,
    renderRawItem: function(dt) {
      return dt;
    },
    renderRawRest: function(dt) {
      var Ht = dt.length, Tn = Ht ? ot.slice(-Ht) : null;
      return /* @__PURE__ */ T.createElement(R1, {
        eventKey: zS,
        title: et,
        disabled: Yr,
        internalPopupClose: Ht === 0,
        popupClassName: Bt
      }, Tn);
    },
    maxCount: Ge !== "horizontal" || P ? Dl.INVALIDATE : Dl.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(dt) {
      Vn(dt);
    },
    onKeyDown: Or
  }, Zt));
  return /* @__PURE__ */ T.createElement(b1.Provider, {
    value: or
  }, /* @__PURE__ */ T.createElement(TR.Provider, {
    value: qt
  }, /* @__PURE__ */ T.createElement(Wv, {
    prefixCls: h,
    rootClassName: C,
    mode: Ge,
    openKeys: We,
    rtl: en,
    disabled: z,
    motion: ut ? Ie : null,
    defaultMotions: ut ? Ke : null,
    activeKey: zr,
    onActive: Ir,
    onInactive: Qa,
    selectedKeys: gr,
    inlineIndent: Se,
    subMenuOpenDelay: Y,
    subMenuCloseDelay: ne,
    forceSubMenuRender: oe,
    builtinPlacements: Be,
    triggerSubMenuAction: it,
    getPopupContainer: Ee,
    itemIcon: nt,
    expandIcon: Nt,
    onItemClick: ha,
    onOpenChange: zn
  }, /* @__PURE__ */ T.createElement(OR.Provider, {
    value: Ei
  }, Re), /* @__PURE__ */ T.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ T.createElement(kR.Provider, {
    value: Pn
  }, ot)))));
}), $g = QP;
$g.Item = zg;
$g.SubMenu = R1;
$g.ItemGroup = r_;
$g.Divider = a_;
var XP = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" };
const ZP = XP;
function Gr(r, o) {
  JP(r) && (r = "100%");
  var s = ez(r);
  return r = o === 360 ? r : Math.min(o, Math.max(0, parseFloat(r))), s && (r = parseInt(String(r * o), 10) / 100), Math.abs(r - o) < 1e-6 ? 1 : (o === 360 ? r = (r < 0 ? r % o + o : r % o) / parseFloat(String(o)) : r = r % o / parseFloat(String(o)), r);
}
function Xm(r) {
  return Math.min(1, Math.max(0, r));
}
function JP(r) {
  return typeof r == "string" && r.indexOf(".") !== -1 && parseFloat(r) === 1;
}
function ez(r) {
  return typeof r == "string" && r.indexOf("%") !== -1;
}
function i_(r) {
  return r = parseFloat(r), (isNaN(r) || r < 0 || r > 1) && (r = 1), r;
}
function Zm(r) {
  return r <= 1 ? "".concat(Number(r) * 100, "%") : r;
}
function Ys(r) {
  return r.length === 1 ? "0" + r : String(r);
}
function tz(r, o, s) {
  return {
    r: Gr(r, 255) * 255,
    g: Gr(o, 255) * 255,
    b: Gr(s, 255) * 255
  };
}
function oT(r, o, s) {
  r = Gr(r, 255), o = Gr(o, 255), s = Gr(s, 255);
  var c = Math.max(r, o, s), d = Math.min(r, o, s), m = 0, h = 0, C = (c + d) / 2;
  if (c === d)
    h = 0, m = 0;
  else {
    var x = c - d;
    switch (h = C > 0.5 ? x / (2 - c - d) : x / (c + d), c) {
      case r:
        m = (o - s) / x + (o < s ? 6 : 0);
        break;
      case o:
        m = (s - r) / x + 2;
        break;
      case s:
        m = (r - o) / x + 4;
        break;
    }
    m /= 6;
  }
  return { h: m, s: h, l: C };
}
function cS(r, o, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? r + (o - r) * (6 * s) : s < 1 / 2 ? o : s < 2 / 3 ? r + (o - r) * (2 / 3 - s) * 6 : r;
}
function nz(r, o, s) {
  var c, d, m;
  if (r = Gr(r, 360), o = Gr(o, 100), s = Gr(s, 100), o === 0)
    d = s, m = s, c = s;
  else {
    var h = s < 0.5 ? s * (1 + o) : s + o - s * o, C = 2 * s - h;
    c = cS(C, h, r + 1 / 3), d = cS(C, h, r), m = cS(C, h, r - 1 / 3);
  }
  return { r: c * 255, g: d * 255, b: m * 255 };
}
function BS(r, o, s) {
  r = Gr(r, 255), o = Gr(o, 255), s = Gr(s, 255);
  var c = Math.max(r, o, s), d = Math.min(r, o, s), m = 0, h = c, C = c - d, x = c === 0 ? 0 : C / c;
  if (c === d)
    m = 0;
  else {
    switch (c) {
      case r:
        m = (o - s) / C + (o < s ? 6 : 0);
        break;
      case o:
        m = (s - r) / C + 2;
        break;
      case s:
        m = (r - o) / C + 4;
        break;
    }
    m /= 6;
  }
  return { h: m, s: x, v: h };
}
function rz(r, o, s) {
  r = Gr(r, 360) * 6, o = Gr(o, 100), s = Gr(s, 100);
  var c = Math.floor(r), d = r - c, m = s * (1 - o), h = s * (1 - d * o), C = s * (1 - (1 - d) * o), x = c % 6, E = [s, h, m, m, C, s][x], M = [C, s, s, h, m, m][x], _ = [m, m, C, s, s, h][x];
  return { r: E * 255, g: M * 255, b: _ * 255 };
}
function WS(r, o, s, c) {
  var d = [
    Ys(Math.round(r).toString(16)),
    Ys(Math.round(o).toString(16)),
    Ys(Math.round(s).toString(16))
  ];
  return c && d[0].startsWith(d[0].charAt(1)) && d[1].startsWith(d[1].charAt(1)) && d[2].startsWith(d[2].charAt(1)) ? d[0].charAt(0) + d[1].charAt(0) + d[2].charAt(0) : d.join("");
}
function az(r, o, s, c, d) {
  var m = [
    Ys(Math.round(r).toString(16)),
    Ys(Math.round(o).toString(16)),
    Ys(Math.round(s).toString(16)),
    Ys(iz(c))
  ];
  return d && m[0].startsWith(m[0].charAt(1)) && m[1].startsWith(m[1].charAt(1)) && m[2].startsWith(m[2].charAt(1)) && m[3].startsWith(m[3].charAt(1)) ? m[0].charAt(0) + m[1].charAt(0) + m[2].charAt(0) + m[3].charAt(0) : m.join("");
}
function iz(r) {
  return Math.round(parseFloat(r) * 255).toString(16);
}
function lT(r) {
  return Wa(r) / 255;
}
function Wa(r) {
  return parseInt(r, 16);
}
function oz(r) {
  return {
    r: r >> 16,
    g: (r & 65280) >> 8,
    b: r & 255
  };
}
var KS = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Ef(r) {
  var o = { r: 0, g: 0, b: 0 }, s = 1, c = null, d = null, m = null, h = !1, C = !1;
  return typeof r == "string" && (r = sz(r)), typeof r == "object" && (Rl(r.r) && Rl(r.g) && Rl(r.b) ? (o = tz(r.r, r.g, r.b), h = !0, C = String(r.r).substr(-1) === "%" ? "prgb" : "rgb") : Rl(r.h) && Rl(r.s) && Rl(r.v) ? (c = Zm(r.s), d = Zm(r.v), o = rz(r.h, c, d), h = !0, C = "hsv") : Rl(r.h) && Rl(r.s) && Rl(r.l) && (c = Zm(r.s), m = Zm(r.l), o = nz(r.h, c, m), h = !0, C = "hsl"), Object.prototype.hasOwnProperty.call(r, "a") && (s = r.a)), s = i_(s), {
    ok: h,
    format: r.format || C,
    r: Math.min(255, Math.max(o.r, 0)),
    g: Math.min(255, Math.max(o.g, 0)),
    b: Math.min(255, Math.max(o.b, 0)),
    a: s
  };
}
var lz = "[-\\+]?\\d+%?", uz = "[-\\+]?\\d*\\.\\d+%?", ku = "(?:".concat(uz, ")|(?:").concat(lz, ")"), fS = "[\\s|\\(]+(".concat(ku, ")[,|\\s]+(").concat(ku, ")[,|\\s]+(").concat(ku, ")\\s*\\)?"), dS = "[\\s|\\(]+(".concat(ku, ")[,|\\s]+(").concat(ku, ")[,|\\s]+(").concat(ku, ")[,|\\s]+(").concat(ku, ")\\s*\\)?"), Gi = {
  CSS_UNIT: new RegExp(ku),
  rgb: new RegExp("rgb" + fS),
  rgba: new RegExp("rgba" + dS),
  hsl: new RegExp("hsl" + fS),
  hsla: new RegExp("hsla" + dS),
  hsv: new RegExp("hsv" + fS),
  hsva: new RegExp("hsva" + dS),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function sz(r) {
  if (r = r.trim().toLowerCase(), r.length === 0)
    return !1;
  var o = !1;
  if (KS[r])
    r = KS[r], o = !0;
  else if (r === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var s = Gi.rgb.exec(r);
  return s ? { r: s[1], g: s[2], b: s[3] } : (s = Gi.rgba.exec(r), s ? { r: s[1], g: s[2], b: s[3], a: s[4] } : (s = Gi.hsl.exec(r), s ? { h: s[1], s: s[2], l: s[3] } : (s = Gi.hsla.exec(r), s ? { h: s[1], s: s[2], l: s[3], a: s[4] } : (s = Gi.hsv.exec(r), s ? { h: s[1], s: s[2], v: s[3] } : (s = Gi.hsva.exec(r), s ? { h: s[1], s: s[2], v: s[3], a: s[4] } : (s = Gi.hex8.exec(r), s ? {
    r: Wa(s[1]),
    g: Wa(s[2]),
    b: Wa(s[3]),
    a: lT(s[4]),
    format: o ? "name" : "hex8"
  } : (s = Gi.hex6.exec(r), s ? {
    r: Wa(s[1]),
    g: Wa(s[2]),
    b: Wa(s[3]),
    format: o ? "name" : "hex"
  } : (s = Gi.hex4.exec(r), s ? {
    r: Wa(s[1] + s[1]),
    g: Wa(s[2] + s[2]),
    b: Wa(s[3] + s[3]),
    a: lT(s[4] + s[4]),
    format: o ? "name" : "hex8"
  } : (s = Gi.hex3.exec(r), s ? {
    r: Wa(s[1] + s[1]),
    g: Wa(s[2] + s[2]),
    b: Wa(s[3] + s[3]),
    format: o ? "name" : "hex"
  } : !1)))))))));
}
function Rl(r) {
  return !!Gi.CSS_UNIT.exec(String(r));
}
var Ga = (
  /** @class */
  function() {
    function r(o, s) {
      o === void 0 && (o = ""), s === void 0 && (s = {});
      var c;
      if (o instanceof r)
        return o;
      typeof o == "number" && (o = oz(o)), this.originalInput = o;
      var d = Ef(o);
      this.originalInput = o, this.r = d.r, this.g = d.g, this.b = d.b, this.a = d.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (c = s.format) !== null && c !== void 0 ? c : d.format, this.gradientType = s.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = d.ok;
    }
    return r.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, r.prototype.isLight = function() {
      return !this.isDark();
    }, r.prototype.getBrightness = function() {
      var o = this.toRgb();
      return (o.r * 299 + o.g * 587 + o.b * 114) / 1e3;
    }, r.prototype.getLuminance = function() {
      var o = this.toRgb(), s, c, d, m = o.r / 255, h = o.g / 255, C = o.b / 255;
      return m <= 0.03928 ? s = m / 12.92 : s = Math.pow((m + 0.055) / 1.055, 2.4), h <= 0.03928 ? c = h / 12.92 : c = Math.pow((h + 0.055) / 1.055, 2.4), C <= 0.03928 ? d = C / 12.92 : d = Math.pow((C + 0.055) / 1.055, 2.4), 0.2126 * s + 0.7152 * c + 0.0722 * d;
    }, r.prototype.getAlpha = function() {
      return this.a;
    }, r.prototype.setAlpha = function(o) {
      return this.a = i_(o), this.roundA = Math.round(100 * this.a) / 100, this;
    }, r.prototype.isMonochrome = function() {
      var o = this.toHsl().s;
      return o === 0;
    }, r.prototype.toHsv = function() {
      var o = BS(this.r, this.g, this.b);
      return { h: o.h * 360, s: o.s, v: o.v, a: this.a };
    }, r.prototype.toHsvString = function() {
      var o = BS(this.r, this.g, this.b), s = Math.round(o.h * 360), c = Math.round(o.s * 100), d = Math.round(o.v * 100);
      return this.a === 1 ? "hsv(".concat(s, ", ").concat(c, "%, ").concat(d, "%)") : "hsva(".concat(s, ", ").concat(c, "%, ").concat(d, "%, ").concat(this.roundA, ")");
    }, r.prototype.toHsl = function() {
      var o = oT(this.r, this.g, this.b);
      return { h: o.h * 360, s: o.s, l: o.l, a: this.a };
    }, r.prototype.toHslString = function() {
      var o = oT(this.r, this.g, this.b), s = Math.round(o.h * 360), c = Math.round(o.s * 100), d = Math.round(o.l * 100);
      return this.a === 1 ? "hsl(".concat(s, ", ").concat(c, "%, ").concat(d, "%)") : "hsla(".concat(s, ", ").concat(c, "%, ").concat(d, "%, ").concat(this.roundA, ")");
    }, r.prototype.toHex = function(o) {
      return o === void 0 && (o = !1), WS(this.r, this.g, this.b, o);
    }, r.prototype.toHexString = function(o) {
      return o === void 0 && (o = !1), "#" + this.toHex(o);
    }, r.prototype.toHex8 = function(o) {
      return o === void 0 && (o = !1), az(this.r, this.g, this.b, this.a, o);
    }, r.prototype.toHex8String = function(o) {
      return o === void 0 && (o = !1), "#" + this.toHex8(o);
    }, r.prototype.toHexShortString = function(o) {
      return o === void 0 && (o = !1), this.a === 1 ? this.toHexString(o) : this.toHex8String(o);
    }, r.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, r.prototype.toRgbString = function() {
      var o = Math.round(this.r), s = Math.round(this.g), c = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(o, ", ").concat(s, ", ").concat(c, ")") : "rgba(".concat(o, ", ").concat(s, ", ").concat(c, ", ").concat(this.roundA, ")");
    }, r.prototype.toPercentageRgb = function() {
      var o = function(s) {
        return "".concat(Math.round(Gr(s, 255) * 100), "%");
      };
      return {
        r: o(this.r),
        g: o(this.g),
        b: o(this.b),
        a: this.a
      };
    }, r.prototype.toPercentageRgbString = function() {
      var o = function(s) {
        return Math.round(Gr(s, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(o(this.r), "%, ").concat(o(this.g), "%, ").concat(o(this.b), "%)") : "rgba(".concat(o(this.r), "%, ").concat(o(this.g), "%, ").concat(o(this.b), "%, ").concat(this.roundA, ")");
    }, r.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var o = "#" + WS(this.r, this.g, this.b, !1), s = 0, c = Object.entries(KS); s < c.length; s++) {
        var d = c[s], m = d[0], h = d[1];
        if (o === h)
          return m;
      }
      return !1;
    }, r.prototype.toString = function(o) {
      var s = !!o;
      o = o != null ? o : this.format;
      var c = !1, d = this.a < 1 && this.a >= 0, m = !s && d && (o.startsWith("hex") || o === "name");
      return m ? o === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (o === "rgb" && (c = this.toRgbString()), o === "prgb" && (c = this.toPercentageRgbString()), (o === "hex" || o === "hex6") && (c = this.toHexString()), o === "hex3" && (c = this.toHexString(!0)), o === "hex4" && (c = this.toHex8String(!0)), o === "hex8" && (c = this.toHex8String()), o === "name" && (c = this.toName()), o === "hsl" && (c = this.toHslString()), o === "hsv" && (c = this.toHsvString()), c || this.toHexString());
    }, r.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, r.prototype.clone = function() {
      return new r(this.toString());
    }, r.prototype.lighten = function(o) {
      o === void 0 && (o = 10);
      var s = this.toHsl();
      return s.l += o / 100, s.l = Xm(s.l), new r(s);
    }, r.prototype.brighten = function(o) {
      o === void 0 && (o = 10);
      var s = this.toRgb();
      return s.r = Math.max(0, Math.min(255, s.r - Math.round(255 * -(o / 100)))), s.g = Math.max(0, Math.min(255, s.g - Math.round(255 * -(o / 100)))), s.b = Math.max(0, Math.min(255, s.b - Math.round(255 * -(o / 100)))), new r(s);
    }, r.prototype.darken = function(o) {
      o === void 0 && (o = 10);
      var s = this.toHsl();
      return s.l -= o / 100, s.l = Xm(s.l), new r(s);
    }, r.prototype.tint = function(o) {
      return o === void 0 && (o = 10), this.mix("white", o);
    }, r.prototype.shade = function(o) {
      return o === void 0 && (o = 10), this.mix("black", o);
    }, r.prototype.desaturate = function(o) {
      o === void 0 && (o = 10);
      var s = this.toHsl();
      return s.s -= o / 100, s.s = Xm(s.s), new r(s);
    }, r.prototype.saturate = function(o) {
      o === void 0 && (o = 10);
      var s = this.toHsl();
      return s.s += o / 100, s.s = Xm(s.s), new r(s);
    }, r.prototype.greyscale = function() {
      return this.desaturate(100);
    }, r.prototype.spin = function(o) {
      var s = this.toHsl(), c = (s.h + o) % 360;
      return s.h = c < 0 ? 360 + c : c, new r(s);
    }, r.prototype.mix = function(o, s) {
      s === void 0 && (s = 50);
      var c = this.toRgb(), d = new r(o).toRgb(), m = s / 100, h = {
        r: (d.r - c.r) * m + c.r,
        g: (d.g - c.g) * m + c.g,
        b: (d.b - c.b) * m + c.b,
        a: (d.a - c.a) * m + c.a
      };
      return new r(h);
    }, r.prototype.analogous = function(o, s) {
      o === void 0 && (o = 6), s === void 0 && (s = 30);
      var c = this.toHsl(), d = 360 / s, m = [this];
      for (c.h = (c.h - (d * o >> 1) + 720) % 360; --o; )
        c.h = (c.h + d) % 360, m.push(new r(c));
      return m;
    }, r.prototype.complement = function() {
      var o = this.toHsl();
      return o.h = (o.h + 180) % 360, new r(o);
    }, r.prototype.monochromatic = function(o) {
      o === void 0 && (o = 6);
      for (var s = this.toHsv(), c = s.h, d = s.s, m = s.v, h = [], C = 1 / o; o--; )
        h.push(new r({ h: c, s: d, v: m })), m = (m + C) % 1;
      return h;
    }, r.prototype.splitcomplement = function() {
      var o = this.toHsl(), s = o.h;
      return [
        this,
        new r({ h: (s + 72) % 360, s: o.s, l: o.l }),
        new r({ h: (s + 216) % 360, s: o.s, l: o.l })
      ];
    }, r.prototype.onBackground = function(o) {
      var s = this.toRgb(), c = new r(o).toRgb(), d = s.a + c.a * (1 - s.a);
      return new r({
        r: (s.r * s.a + c.r * c.a * (1 - s.a)) / d,
        g: (s.g * s.a + c.g * c.a * (1 - s.a)) / d,
        b: (s.b * s.a + c.b * c.a * (1 - s.a)) / d,
        a: d
      });
    }, r.prototype.triad = function() {
      return this.polyad(3);
    }, r.prototype.tetrad = function() {
      return this.polyad(4);
    }, r.prototype.polyad = function(o) {
      for (var s = this.toHsl(), c = s.h, d = [this], m = 360 / o, h = 1; h < o; h++)
        d.push(new r({ h: (c + h * m) % 360, s: s.s, l: s.l }));
      return d;
    }, r.prototype.equals = function(o) {
      return this.toRgbString() === new r(o).toRgbString();
    }, r;
  }()
), Jm = 2, uT = 0.16, cz = 0.05, fz = 0.05, dz = 0.15, o_ = 5, l_ = 4, vz = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function sT(r) {
  var o = r.r, s = r.g, c = r.b, d = BS(o, s, c);
  return {
    h: d.h * 360,
    s: d.s,
    v: d.v
  };
}
function eg(r) {
  var o = r.r, s = r.g, c = r.b;
  return "#".concat(WS(o, s, c, !1));
}
function pz(r, o, s) {
  var c = s / 100, d = {
    r: (o.r - r.r) * c + r.r,
    g: (o.g - r.g) * c + r.g,
    b: (o.b - r.b) * c + r.b
  };
  return d;
}
function cT(r, o, s) {
  var c;
  return Math.round(r.h) >= 60 && Math.round(r.h) <= 240 ? c = s ? Math.round(r.h) - Jm * o : Math.round(r.h) + Jm * o : c = s ? Math.round(r.h) + Jm * o : Math.round(r.h) - Jm * o, c < 0 ? c += 360 : c >= 360 && (c -= 360), c;
}
function fT(r, o, s) {
  if (r.h === 0 && r.s === 0)
    return r.s;
  var c;
  return s ? c = r.s - uT * o : o === l_ ? c = r.s + uT : c = r.s + cz * o, c > 1 && (c = 1), s && o === o_ && c > 0.1 && (c = 0.1), c < 0.06 && (c = 0.06), Number(c.toFixed(2));
}
function dT(r, o, s) {
  var c;
  return s ? c = r.v + fz * o : c = r.v - dz * o, c > 1 && (c = 1), Number(c.toFixed(2));
}
function Zs(r) {
  for (var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = [], c = Ef(r), d = o_; d > 0; d -= 1) {
    var m = sT(c), h = eg(Ef({
      h: cT(m, d, !0),
      s: fT(m, d, !0),
      v: dT(m, d, !0)
    }));
    s.push(h);
  }
  s.push(eg(c));
  for (var C = 1; C <= l_; C += 1) {
    var x = sT(c), E = eg(Ef({
      h: cT(x, C),
      s: fT(x, C),
      v: dT(x, C)
    }));
    s.push(E);
  }
  return o.theme === "dark" ? vz.map(function(M) {
    var _ = M.index, N = M.opacity, L = eg(pz(Ef(o.backgroundColor || "#141414"), Ef(s[_]), N * 100));
    return L;
  }) : s;
}
var vS = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, lg = {}, pS = {};
Object.keys(vS).forEach(function(r) {
  lg[r] = Zs(vS[r]), lg[r].primary = lg[r][5], pS[r] = Zs(vS[r], {
    theme: "dark",
    backgroundColor: "#141414"
  }), pS[r].primary = pS[r][5];
});
var hz = lg.blue, _1 = /* @__PURE__ */ wg({});
function mz(r) {
  return r.replace(/-(.)/g, function(o, s) {
    return s.toUpperCase();
  });
}
function gz(r, o) {
  pa(r, "[@ant-design/icons] ".concat(o));
}
function vT(r) {
  return Bn(r) === "object" && typeof r.name == "string" && typeof r.theme == "string" && (Bn(r.icon) === "object" || typeof r.icon == "function");
}
function pT() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(r).reduce(function(o, s) {
    var c = r[s];
    switch (s) {
      case "class":
        o.className = c, delete o.class;
        break;
      default:
        delete o[s], o[mz(s)] = c;
    }
    return o;
  }, {});
}
function GS(r, o, s) {
  return s ? /* @__PURE__ */ Ma.createElement(r.tag, Te(Te({
    key: o
  }, pT(r.attrs)), s), (r.children || []).map(function(c, d) {
    return GS(c, "".concat(o, "-").concat(r.tag, "-").concat(d));
  })) : /* @__PURE__ */ Ma.createElement(r.tag, Te({
    key: o
  }, pT(r.attrs)), (r.children || []).map(function(c, d) {
    return GS(c, "".concat(o, "-").concat(r.tag, "-").concat(d));
  }));
}
function u_(r) {
  return Zs(r)[0];
}
function s_(r) {
  return r ? Array.isArray(r) ? r : [r] : [];
}
var yz = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, bz = function(o) {
  var s = Ou(_1), c = s.csp, d = s.prefixCls, m = yz;
  d && (m = m.replace(/anticon/g, d)), Bo(function() {
    var h = o.current, C = gg(h);
    Du(m, "@ant-design-icons", {
      prepend: !0,
      csp: c,
      attachTo: C
    });
  }, []);
}, Sz = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], jv = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Cz(r) {
  var o = r.primaryColor, s = r.secondaryColor;
  jv.primaryColor = o, jv.secondaryColor = s || u_(o), jv.calculated = !!s;
}
function Ez() {
  return Te({}, jv);
}
var Ug = function(o) {
  var s = o.icon, c = o.className, d = o.onClick, m = o.style, h = o.primaryColor, C = o.secondaryColor, x = Fn(o, Sz), E = T.useRef(), M = jv;
  if (h && (M = {
    primaryColor: h,
    secondaryColor: C || u_(h)
  }), bz(E), gz(vT(s), "icon should be icon definiton, but got ".concat(s)), !vT(s))
    return null;
  var _ = s;
  return _ && typeof _.icon == "function" && (_ = Te(Te({}, _), {}, {
    icon: _.icon(M.primaryColor, M.secondaryColor)
  })), GS(_.icon, "svg-".concat(_.name), Te(Te({
    className: c,
    onClick: d,
    style: m,
    "data-icon": _.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, x), {}, {
    ref: E
  }));
};
Ug.displayName = "IconReact";
Ug.getTwoToneColors = Ez;
Ug.setTwoToneColors = Cz;
const k1 = Ug;
function c_(r) {
  var o = s_(r), s = xe(o, 2), c = s[0], d = s[1];
  return k1.setTwoToneColors({
    primaryColor: c,
    secondaryColor: d
  });
}
function wz() {
  var r = k1.getTwoToneColors();
  return r.calculated ? [r.primaryColor, r.secondaryColor] : r.primaryColor;
}
var xz = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
c_(hz.primary);
var jg = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var s, c = r.className, d = r.icon, m = r.spin, h = r.rotate, C = r.tabIndex, x = r.onClick, E = r.twoToneColor, M = Fn(r, xz), _ = T.useContext(_1), N = _.prefixCls, L = N === void 0 ? "anticon" : N, H = _.rootClassName, V = wn(H, L, (s = {}, tt(s, "".concat(L, "-").concat(d.name), !!d.name), tt(s, "".concat(L, "-spin"), !!m || d.name === "loading"), s), c), A = C;
  A === void 0 && x && (A = -1);
  var G = h ? {
    msTransform: "rotate(".concat(h, "deg)"),
    transform: "rotate(".concat(h, "deg)")
  } : void 0, $ = s_(E), z = xe($, 2), P = z[0], I = z[1];
  return /* @__PURE__ */ T.createElement("span", an({
    role: "img",
    "aria-label": d.name
  }, M, {
    ref: o,
    tabIndex: A,
    onClick: x,
    className: V
  }), /* @__PURE__ */ T.createElement(k1, {
    icon: d,
    primaryColor: P,
    secondaryColor: I,
    style: G
  }));
});
jg.displayName = "AntdIcon";
jg.getTwoToneColor = wz;
jg.setTwoToneColor = c_;
const M1 = jg;
var f_ = function(o, s) {
  return /* @__PURE__ */ T.createElement(M1, an({}, o, {
    ref: s,
    icon: ZP
  }));
};
process.env.NODE_ENV !== "production" && (f_.displayName = "BarsOutlined");
const Tz = /* @__PURE__ */ T.forwardRef(f_);
var Rz = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
const _z = Rz;
var d_ = function(o, s) {
  return /* @__PURE__ */ T.createElement(M1, an({}, o, {
    ref: s,
    icon: _z
  }));
};
process.env.NODE_ENV !== "production" && (d_.displayName = "LeftOutlined");
const hT = /* @__PURE__ */ T.forwardRef(d_);
var kz = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
const Mz = kz;
var v_ = function(o, s) {
  return /* @__PURE__ */ T.createElement(M1, an({}, o, {
    ref: s,
    icon: Mz
  }));
};
process.env.NODE_ENV !== "production" && (v_.displayName = "RightOutlined");
const mT = /* @__PURE__ */ T.forwardRef(v_), Oz = (r) => !isNaN(parseFloat(r)) && isFinite(r);
function yg(r) {
  for (var o = 0, s, c = 0, d = r.length; d >= 4; ++c, d -= 4)
    s = r.charCodeAt(c) & 255 | (r.charCodeAt(++c) & 255) << 8 | (r.charCodeAt(++c) & 255) << 16 | (r.charCodeAt(++c) & 255) << 24, s = /* Math.imul(k, m): */
    (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16), s ^= /* k >>> r: */
    s >>> 24, o = /* Math.imul(k, m): */
    (s & 65535) * 1540483477 + ((s >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16);
  switch (d) {
    case 3:
      o ^= (r.charCodeAt(c + 2) & 255) << 16;
    case 2:
      o ^= (r.charCodeAt(c + 1) & 255) << 8;
    case 1:
      o ^= r.charCodeAt(c) & 255, o = /* Math.imul(h, m): */
      (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16);
  }
  return o ^= o >>> 13, o = /* Math.imul(h, m): */
  (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), ((o ^ o >>> 15) >>> 0).toString(36);
}
var Nz = "%";
function qS(r) {
  return r.join(Nz);
}
var Dz = /* @__PURE__ */ function() {
  function r(o) {
    Zi(this, r), tt(this, "instanceId", void 0), tt(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = o;
  }
  return Ji(r, [{
    key: "get",
    value: function(s) {
      return this.opGet(qS(s));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(s) {
      return this.cache.get(s) || null;
    }
  }, {
    key: "update",
    value: function(s, c) {
      return this.opUpdate(qS(s), c);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(s, c) {
      var d = this.cache.get(s), m = c(d);
      m === null ? this.cache.delete(s) : this.cache.set(s, m);
    }
  }]), r;
}(), Mf = "data-token-hash", Yi = "data-css-hash", Az = "data-cache-path", Mu = "__cssinjs_instance__";
function Lz() {
  var r = Math.random().toString(12).slice(2);
  if (typeof document != "undefined" && document.head && document.body) {
    var o = document.body.querySelectorAll("style[".concat(Yi, "]")) || [], s = document.head.firstChild;
    Array.from(o).forEach(function(d) {
      d[Mu] = d[Mu] || r, d[Mu] === r && document.head.insertBefore(d, s);
    });
    var c = {};
    Array.from(document.querySelectorAll("style[".concat(Yi, "]"))).forEach(function(d) {
      var m = d.getAttribute(Yi);
      if (c[m]) {
        if (d[Mu] === r) {
          var h;
          (h = d.parentNode) === null || h === void 0 || h.removeChild(d);
        }
      } else
        c[m] = !0;
    });
  }
  return new Dz(r);
}
var Pz = /* @__PURE__ */ T.createContext({
  hashPriority: "low",
  cache: Lz(),
  defaultCache: !0
});
const Fg = Pz;
function zz(r, o) {
  if (r.length !== o.length)
    return !1;
  for (var s = 0; s < r.length; s++)
    if (r[s] !== o[s])
      return !1;
  return !0;
}
var O1 = /* @__PURE__ */ function() {
  function r() {
    Zi(this, r), tt(this, "cache", void 0), tt(this, "keys", void 0), tt(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Ji(r, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(s) {
      var c, d, m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = {
        map: this.cache
      };
      return s.forEach(function(C) {
        if (!h)
          h = void 0;
        else {
          var x;
          h = (x = h) === null || x === void 0 || (x = x.map) === null || x === void 0 ? void 0 : x.get(C);
        }
      }), (c = h) !== null && c !== void 0 && c.value && m && (h.value[1] = this.cacheCallTimes++), (d = h) === null || d === void 0 ? void 0 : d.value;
    }
  }, {
    key: "get",
    value: function(s) {
      var c;
      return (c = this.internalGet(s, !0)) === null || c === void 0 ? void 0 : c[0];
    }
  }, {
    key: "has",
    value: function(s) {
      return !!this.internalGet(s);
    }
  }, {
    key: "set",
    value: function(s, c) {
      var d = this;
      if (!this.has(s)) {
        if (this.size() + 1 > r.MAX_CACHE_SIZE + r.MAX_CACHE_OFFSET) {
          var m = this.keys.reduce(function(E, M) {
            var _ = xe(E, 2), N = _[1];
            return d.internalGet(M)[1] < N ? [M, d.internalGet(M)[1]] : E;
          }, [this.keys[0], this.cacheCallTimes]), h = xe(m, 1), C = h[0];
          this.delete(C);
        }
        this.keys.push(s);
      }
      var x = this.cache;
      s.forEach(function(E, M) {
        if (M === s.length - 1)
          x.set(E, {
            value: [c, d.cacheCallTimes++]
          });
        else {
          var _ = x.get(E);
          _ ? _.map || (_.map = /* @__PURE__ */ new Map()) : x.set(E, {
            map: /* @__PURE__ */ new Map()
          }), x = x.get(E).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(s, c) {
      var d = s.get(c[0]);
      if (c.length === 1) {
        var m;
        return d.map ? s.set(c[0], {
          map: d.map
        }) : s.delete(c[0]), (m = d.value) === null || m === void 0 ? void 0 : m[0];
      }
      var h = this.deleteByPath(d.map, c.slice(1));
      return (!d.map || d.map.size === 0) && !d.value && s.delete(c[0]), h;
    }
  }, {
    key: "delete",
    value: function(s) {
      if (this.has(s))
        return this.keys = this.keys.filter(function(c) {
          return !zz(c, s);
        }), this.deleteByPath(this.cache, s);
    }
  }]), r;
}();
tt(O1, "MAX_CACHE_SIZE", 20);
tt(O1, "MAX_CACHE_OFFSET", 5);
var gT = 0, p_ = /* @__PURE__ */ function() {
  function r(o) {
    Zi(this, r), tt(this, "derivatives", void 0), tt(this, "id", void 0), this.derivatives = Array.isArray(o) ? o : [o], this.id = gT, o.length === 0 && _f(o.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), gT += 1;
  }
  return Ji(r, [{
    key: "getDerivativeToken",
    value: function(s) {
      return this.derivatives.reduce(function(c, d) {
        return d(s, c);
      }, void 0);
    }
  }]), r;
}(), hS = new O1();
function YS(r) {
  var o = Array.isArray(r) ? r : [r];
  return hS.has(o) || hS.set(o, new p_(o)), hS.get(o);
}
var Iz = /* @__PURE__ */ new WeakMap(), mS = {};
function Hz(r, o) {
  for (var s = Iz, c = 0; c < o.length; c += 1) {
    var d = o[c];
    s.has(d) || s.set(d, /* @__PURE__ */ new WeakMap()), s = s.get(d);
  }
  return s.has(mS) || s.set(mS, r()), s.get(mS);
}
var yT = /* @__PURE__ */ new WeakMap();
function Fv(r) {
  var o = yT.get(r) || "";
  return o || (Object.keys(r).forEach(function(s) {
    var c = r[s];
    o += s, c instanceof p_ ? o += c.id : c && Bn(c) === "object" ? o += Fv(c) : o += c;
  }), yT.set(r, o)), o;
}
function bT(r, o) {
  return yg("".concat(o, "_").concat(Fv(r)));
}
var Vv = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), h_ = "_bAmBoO_";
function $z(r, o, s) {
  if (va()) {
    var c, d;
    Du(r, Vv);
    var m = document.createElement("div");
    m.style.position = "fixed", m.style.left = "0", m.style.top = "0", o == null || o(m), document.body.appendChild(m), process.env.NODE_ENV !== "production" && (m.innerHTML = "Test", m.style.zIndex = "9999999");
    var h = s ? s(m) : (c = getComputedStyle(m).content) === null || c === void 0 ? void 0 : c.includes(h_);
    return (d = m.parentNode) === null || d === void 0 || d.removeChild(m), Kv(Vv), h;
  }
  return !1;
}
var gS = void 0;
function Uz() {
  return gS === void 0 && (gS = $z("@layer ".concat(Vv, " { .").concat(Vv, ' { content: "').concat(h_, '"!important; } }'), function(r) {
    r.className = Vv;
  })), gS;
}
var QS = va();
function qv(r) {
  return typeof r == "number" ? "".concat(r, "px") : r;
}
function bg(r, o, s) {
  var c, d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (m)
    return r;
  var h = Te(Te({}, d), {}, (c = {}, tt(c, Mf, o), tt(c, Yi, s), c)), C = Object.keys(h).map(function(x) {
    var E = h[x];
    return E ? "".concat(x, '="').concat(E, '"') : null;
  }).filter(function(x) {
    return x;
  }).join(" ");
  return "<style ".concat(C, ">").concat(r, "</style>");
}
var m_ = function(o) {
  var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(s ? "".concat(s, "-") : "").concat(o).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, jz = function(o, s, c) {
  return Object.keys(o).length ? ".".concat(s).concat(c != null && c.scope ? ".".concat(c.scope) : "", "{").concat(Object.entries(o).map(function(d) {
    var m = xe(d, 2), h = m[0], C = m[1];
    return "".concat(h, ":").concat(C, ";");
  }).join(""), "}") : "";
}, g_ = function(o, s, c) {
  var d = {}, m = {};
  return Object.entries(o).forEach(function(h) {
    var C, x, E = xe(h, 2), M = E[0], _ = E[1];
    if (c != null && (C = c.preserve) !== null && C !== void 0 && C[M])
      m[M] = _;
    else if ((typeof _ == "string" || typeof _ == "number") && !(c != null && (x = c.ignore) !== null && x !== void 0 && x[M])) {
      var N, L = m_(M, c == null ? void 0 : c.prefix);
      d[L] = typeof _ == "number" && !(c != null && (N = c.unitless) !== null && N !== void 0 && N[M]) ? "".concat(_, "px") : String(_), m[M] = "var(".concat(L, ")");
    }
  }), [m, jz(d, s, {
    scope: c == null ? void 0 : c.scope
  })];
}, Fz = Te({}, T), ST = Fz.useInsertionEffect, Vz = function(o, s, c) {
  T.useMemo(o, c), ia(function() {
    return s(!0);
  }, c);
}, Bz = ST ? function(r, o, s) {
  return ST(function() {
    return r(), o();
  }, s);
} : Vz;
const Wz = Bz;
var Kz = Te({}, T), Gz = Kz.useInsertionEffect, qz = function(o) {
  var s = [], c = !1;
  function d(m) {
    if (c) {
      process.env.NODE_ENV !== "production" && _f(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    s.push(m);
  }
  return T.useEffect(function() {
    return c = !1, function() {
      c = !0, s.length && s.forEach(function(m) {
        return m();
      });
    };
  }, o), d;
}, Yz = function() {
  return function(o) {
    o();
  };
}, Qz = typeof Gz != "undefined" ? qz : Yz;
const Xz = Qz;
function Zz() {
  return !1;
}
var XS = !1;
function Jz() {
  return XS;
}
const eI = process.env.NODE_ENV === "production" ? Zz : Jz;
if (process.env.NODE_ENV !== "production" && typeof module != "undefined" && module && module.hot && typeof window != "undefined") {
  var yS = window;
  if (typeof yS.webpackHotUpdate == "function") {
    var tI = yS.webpackHotUpdate;
    yS.webpackHotUpdate = function() {
      return XS = !0, setTimeout(function() {
        XS = !1;
      }, 0), tI.apply(void 0, arguments);
    };
  }
}
function N1(r, o, s, c, d) {
  var m = T.useContext(Fg), h = m.cache, C = [r].concat(ar(o)), x = qS(C), E = Xz([x]), M = eI(), _ = function(V) {
    h.opUpdate(x, function(A) {
      var G = A || [void 0, void 0], $ = xe(G, 2), z = $[0], P = z === void 0 ? 0 : z, I = $[1], Y = I;
      process.env.NODE_ENV !== "production" && I && M && (c == null || c(Y, M), Y = null);
      var q = Y || s(), ne = [P, q];
      return V ? V(ne) : ne;
    });
  };
  T.useMemo(
    function() {
      _();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [x]
    /* eslint-enable */
  );
  var N = h.opGet(x);
  process.env.NODE_ENV !== "production" && !N && (_(), N = h.opGet(x));
  var L = N[1];
  return Wz(function() {
    d == null || d(L);
  }, function(H) {
    return _(function(V) {
      var A = xe(V, 2), G = A[0], $ = A[1];
      return H && G === 0 && (d == null || d(L)), [G + 1, $];
    }), function() {
      h.opUpdate(x, function(V) {
        var A = V || [], G = xe(A, 2), $ = G[0], z = $ === void 0 ? 0 : $, P = G[1], I = z - 1;
        return I === 0 ? (E(function() {
          (H || !h.opGet(x)) && (c == null || c(P, !1));
        }), null) : [z - 1, P];
      });
    };
  }, [x]), L;
}
var nI = {}, rI = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", qs = /* @__PURE__ */ new Map();
function aI(r) {
  qs.set(r, (qs.get(r) || 0) + 1);
}
function iI(r, o) {
  if (typeof document != "undefined") {
    var s = document.querySelectorAll("style[".concat(Mf, '="').concat(r, '"]'));
    s.forEach(function(c) {
      if (c[Mu] === o) {
        var d;
        (d = c.parentNode) === null || d === void 0 || d.removeChild(c);
      }
    });
  }
}
var oI = 0;
function lI(r, o) {
  qs.set(r, (qs.get(r) || 0) - 1);
  var s = Array.from(qs.keys()), c = s.filter(function(d) {
    var m = qs.get(d) || 0;
    return m <= 0;
  });
  s.length - c.length > oI && c.forEach(function(d) {
    iI(d, o), qs.delete(d);
  });
}
var uI = function(o, s, c, d) {
  var m = c.getDerivativeToken(o), h = Te(Te({}, m), s);
  return d && (h = d(h)), h;
}, y_ = "token";
function sI(r, o) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = Ou(Fg), d = c.cache.instanceId, m = c.container, h = s.salt, C = h === void 0 ? "" : h, x = s.override, E = x === void 0 ? nI : x, M = s.formatToken, _ = s.getComputedToken, N = s.cssVar, L = Hz(function() {
    return Object.assign.apply(Object, [{}].concat(ar(o)));
  }, o), H = Fv(L), V = Fv(E), A = N ? Fv(N) : "", G = N1(y_, [C, r.id, H, V, A], function() {
    var $, z = _ ? _(L, E, r) : uI(L, E, r, M), P = Te({}, z), I = "";
    if (N) {
      var Y = g_(z, N.key, {
        prefix: N.prefix,
        ignore: N.ignore,
        unitless: N.unitless,
        preserve: N.preserve
      }), q = xe(Y, 2);
      z = q[0], I = q[1];
    }
    var ne = bT(z, C);
    z._tokenKey = ne, P._tokenKey = bT(P, C);
    var oe = ($ = N == null ? void 0 : N.key) !== null && $ !== void 0 ? $ : ne;
    z._themeKey = oe, aI(oe);
    var re = "".concat(rI, "-").concat(yg(ne));
    return z._hashId = re, [z, re, P, I, (N == null ? void 0 : N.key) || ""];
  }, function($) {
    lI($[0]._themeKey, d);
  }, function($) {
    var z = xe($, 4), P = z[0], I = z[3];
    if (N && I) {
      var Y = Du(I, yg("css-variables-".concat(P._themeKey)), {
        mark: Yi,
        prepend: "queue",
        attachTo: m,
        priority: -999
      });
      Y[Mu] = d, Y.setAttribute(Mf, P._themeKey);
    }
  });
  return G;
}
var cI = function(o, s, c) {
  var d = xe(o, 5), m = d[2], h = d[3], C = d[4], x = c || {}, E = x.plain;
  if (!h)
    return null;
  var M = m._tokenKey, _ = -999, N = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(_)
  }, L = bg(h, C, M, N, E);
  return [_, M, L];
}, fI = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, b_ = "comm", S_ = "rule", C_ = "decl", dI = "@import", vI = "@keyframes", pI = "@layer", E_ = Math.abs, D1 = String.fromCharCode;
function w_(r) {
  return r.trim();
}
function ug(r, o, s) {
  return r.replace(o, s);
}
function hI(r, o, s) {
  return r.indexOf(o, s);
}
function Yv(r, o) {
  return r.charCodeAt(o) | 0;
}
function Qv(r, o, s) {
  return r.slice(o, s);
}
function Ol(r) {
  return r.length;
}
function mI(r) {
  return r.length;
}
function tg(r, o) {
  return o.push(r), r;
}
var Vg = 1, Of = 1, x_ = 0, Si = 0, mr = 0, Af = "";
function A1(r, o, s, c, d, m, h, C) {
  return { value: r, root: o, parent: s, type: c, props: d, children: m, line: Vg, column: Of, length: h, return: "", siblings: C };
}
function gI() {
  return mr;
}
function yI() {
  return mr = Si > 0 ? Yv(Af, --Si) : 0, Of--, mr === 10 && (Of = 1, Vg--), mr;
}
function Qi() {
  return mr = Si < x_ ? Yv(Af, Si++) : 0, Of++, mr === 10 && (Of = 1, Vg++), mr;
}
function Qs() {
  return Yv(Af, Si);
}
function sg() {
  return Si;
}
function Bg(r, o) {
  return Qv(Af, r, o);
}
function ZS(r) {
  switch (r) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function bI(r) {
  return Vg = Of = 1, x_ = Ol(Af = r), Si = 0, [];
}
function SI(r) {
  return Af = "", r;
}
function bS(r) {
  return w_(Bg(Si - 1, JS(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function CI(r) {
  for (; (mr = Qs()) && mr < 33; )
    Qi();
  return ZS(r) > 2 || ZS(mr) > 3 ? "" : " ";
}
function EI(r, o) {
  for (; --o && Qi() && !(mr < 48 || mr > 102 || mr > 57 && mr < 65 || mr > 70 && mr < 97); )
    ;
  return Bg(r, sg() + (o < 6 && Qs() == 32 && Qi() == 32));
}
function JS(r) {
  for (; Qi(); )
    switch (mr) {
      case r:
        return Si;
      case 34:
      case 39:
        r !== 34 && r !== 39 && JS(mr);
        break;
      case 40:
        r === 41 && JS(r);
        break;
      case 92:
        Qi();
        break;
    }
  return Si;
}
function wI(r, o) {
  for (; Qi() && r + mr !== 57; )
    if (r + mr === 84 && Qs() === 47)
      break;
  return "/*" + Bg(o, Si - 1) + "*" + D1(r === 47 ? r : Qi());
}
function xI(r) {
  for (; !ZS(Qs()); )
    Qi();
  return Bg(r, Si);
}
function TI(r) {
  return SI(cg("", null, null, null, [""], r = bI(r), 0, [0], r));
}
function cg(r, o, s, c, d, m, h, C, x) {
  for (var E = 0, M = 0, _ = h, N = 0, L = 0, H = 0, V = 1, A = 1, G = 1, $ = 0, z = "", P = d, I = m, Y = c, q = z; A; )
    switch (H = $, $ = Qi()) {
      case 40:
        if (H != 108 && Yv(q, _ - 1) == 58) {
          hI(q += ug(bS($), "&", "&\f"), "&\f", E_(E ? C[E - 1] : 0)) != -1 && (G = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        q += bS($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        q += CI(H);
        break;
      case 92:
        q += EI(sg() - 1, 7);
        continue;
      case 47:
        switch (Qs()) {
          case 42:
          case 47:
            tg(RI(wI(Qi(), sg()), o, s, x), x);
            break;
          default:
            q += "/";
        }
        break;
      case 123 * V:
        C[E++] = Ol(q) * G;
      case 125 * V:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            A = 0;
          case 59 + M:
            G == -1 && (q = ug(q, /\f/g, "")), L > 0 && Ol(q) - _ && tg(L > 32 ? ET(q + ";", c, s, _ - 1, x) : ET(ug(q, " ", "") + ";", c, s, _ - 2, x), x);
            break;
          case 59:
            q += ";";
          default:
            if (tg(Y = CT(q, o, s, E, M, d, C, z, P = [], I = [], _, m), m), $ === 123)
              if (M === 0)
                cg(q, o, Y, Y, P, m, _, C, I);
              else
                switch (N === 99 && Yv(q, 3) === 110 ? 100 : N) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    cg(r, Y, Y, c && tg(CT(r, Y, Y, 0, 0, d, C, z, d, P = [], _, I), I), d, I, _, C, c ? P : I);
                    break;
                  default:
                    cg(q, Y, Y, Y, [""], I, 0, C, I);
                }
        }
        E = M = L = 0, V = G = 1, z = q = "", _ = h;
        break;
      case 58:
        _ = 1 + Ol(q), L = H;
      default:
        if (V < 1) {
          if ($ == 123)
            --V;
          else if ($ == 125 && V++ == 0 && yI() == 125)
            continue;
        }
        switch (q += D1($), $ * V) {
          case 38:
            G = M > 0 ? 1 : (q += "\f", -1);
            break;
          case 44:
            C[E++] = (Ol(q) - 1) * G, G = 1;
            break;
          case 64:
            Qs() === 45 && (q += bS(Qi())), N = Qs(), M = _ = Ol(z = q += xI(sg())), $++;
            break;
          case 45:
            H === 45 && Ol(q) == 2 && (V = 0);
        }
    }
  return m;
}
function CT(r, o, s, c, d, m, h, C, x, E, M, _) {
  for (var N = d - 1, L = d === 0 ? m : [""], H = mI(L), V = 0, A = 0, G = 0; V < c; ++V)
    for (var $ = 0, z = Qv(r, N + 1, N = E_(A = h[V])), P = r; $ < H; ++$)
      (P = w_(A > 0 ? L[$] + " " + z : ug(z, /&\f/g, L[$]))) && (x[G++] = P);
  return A1(r, o, s, d === 0 ? S_ : C, x, E, M, _);
}
function RI(r, o, s, c) {
  return A1(r, o, s, b_, D1(gI()), Qv(r, 2, -2), 0, c);
}
function ET(r, o, s, c, d) {
  return A1(r, o, s, C_, Qv(r, 0, c), Qv(r, c + 1, -1), c, d);
}
function e1(r, o) {
  for (var s = "", c = 0; c < r.length; c++)
    s += o(r[c], c, r, o) || "";
  return s;
}
function _I(r, o, s, c) {
  switch (r.type) {
    case pI:
      if (r.children.length)
        break;
    case dI:
    case C_:
      return r.return = r.return || r.value;
    case b_:
      return "";
    case vI:
      return r.return = r.value + "{" + e1(r.children, c) + "}";
    case S_:
      if (!Ol(r.value = r.props.join(",")))
        return "";
  }
  return Ol(s = e1(r.children, c)) ? r.return = r.value + "{" + s + "}" : "";
}
function T_(r, o) {
  var s = o.path, c = o.parentSelectors;
  pa(!1, "[Ant Design CSS-in-JS] ".concat(s ? "Error in ".concat(s, ": ") : "").concat(r).concat(c.length ? " Selector: ".concat(c.join(" | ")) : ""));
}
var kI = function(o, s, c) {
  if (o === "content") {
    var d = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, m = ["normal", "none", "initial", "inherit", "unset"];
    (typeof s != "string" || m.indexOf(s) === -1 && !d.test(s) && (s.charAt(0) !== s.charAt(s.length - 1) || s.charAt(0) !== '"' && s.charAt(0) !== "'")) && T_("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(s, "\"'`."), c);
  }
}, MI = function(o, s, c) {
  o === "animation" && c.hashId && s !== "none" && T_("You seem to be using hashed animation '".concat(s, "', in which case 'animationName' with Keyframe as value is recommended."), c);
}, wT = "data-ant-cssinjs-cache-path", R_ = "_FILE_STYLE__", Xs, __ = !0;
function OI() {
  if (!Xs && (Xs = {}, va())) {
    var r = document.createElement("div");
    r.className = wT, r.style.position = "fixed", r.style.visibility = "hidden", r.style.top = "-9999px", document.body.appendChild(r);
    var o = getComputedStyle(r).content || "";
    o = o.replace(/^"/, "").replace(/"$/, ""), o.split(";").forEach(function(d) {
      var m = d.split(":"), h = xe(m, 2), C = h[0], x = h[1];
      Xs[C] = x;
    });
    var s = document.querySelector("style[".concat(wT, "]"));
    if (s) {
      var c;
      __ = !1, (c = s.parentNode) === null || c === void 0 || c.removeChild(s);
    }
    document.body.removeChild(r);
  }
}
function NI(r) {
  return OI(), !!Xs[r];
}
function DI(r) {
  var o = Xs[r], s = null;
  if (o && va())
    if (__)
      s = R_;
    else {
      var c = document.querySelector("style[".concat(Yi, '="').concat(Xs[r], '"]'));
      c ? s = c.innerHTML : delete Xs[r];
    }
  return [s, o];
}
var k_ = "_skip_check_", M_ = "_multi_value_";
function t1(r) {
  var o = e1(TI(r), _I);
  return o.replace(/\{%%%\:[^;];}/g, ";");
}
function AI(r) {
  return Bn(r) === "object" && r && (k_ in r || M_ in r);
}
function LI(r, o, s) {
  if (!o)
    return r;
  var c = ".".concat(o), d = s === "low" ? ":where(".concat(c, ")") : c, m = r.split(",").map(function(h) {
    var C, x = h.trim().split(/\s+/), E = x[0] || "", M = ((C = E.match(/^\w+/)) === null || C === void 0 ? void 0 : C[0]) || "";
    return E = "".concat(M).concat(d).concat(E.slice(M.length)), [E].concat(ar(x.slice(1))).join(" ");
  });
  return m.join(",");
}
var PI = function r(o) {
  var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, d = c.root, m = c.injectHash, h = c.parentSelectors, C = s.hashId, x = s.layer, E = s.path, M = s.hashPriority, _ = s.transformers, N = _ === void 0 ? [] : _, L = s.linters, H = L === void 0 ? [] : L, V = "", A = {};
  function G(Y) {
    var q = Y.getName(C);
    if (!A[q]) {
      var ne = r(Y.style, s, {
        root: !1,
        parentSelectors: h
      }), oe = xe(ne, 1), re = oe[0];
      A[q] = "@keyframes ".concat(Y.getName(C)).concat(re);
    }
  }
  function $(Y) {
    var q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return Y.forEach(function(ne) {
      Array.isArray(ne) ? $(ne, q) : ne && q.push(ne);
    }), q;
  }
  var z = $(Array.isArray(o) ? o : [o]);
  if (z.forEach(function(Y) {
    var q = typeof Y == "string" && !d ? {} : Y;
    if (typeof q == "string")
      V += "".concat(q, `
`);
    else if (q._keyframe)
      G(q);
    else {
      var ne = N.reduce(function(oe, re) {
        var ge;
        return (re == null || (ge = re.visit) === null || ge === void 0 ? void 0 : ge.call(re, oe)) || oe;
      }, q);
      Object.keys(ne).forEach(function(oe) {
        var re = ne[oe];
        if (Bn(re) === "object" && re && (oe !== "animationName" || !re._keyframe) && !AI(re)) {
          var ge = !1, pe = oe.trim(), te = !1;
          (d || m) && C ? pe.startsWith("@") ? ge = !0 : pe = LI(oe, C, M) : d && !C && (pe === "&" || pe === "") && (pe = "", te = !0);
          var se = r(re, s, {
            root: te,
            injectHash: ge,
            parentSelectors: [].concat(ar(h), [pe])
          }), de = xe(se, 2), Ce = de[0], ke = de[1];
          A = Te(Te({}, A), ke), V += "".concat(pe).concat(Ce);
        } else {
          let ze = function(ie, he) {
            process.env.NODE_ENV !== "production" && (Bn(re) !== "object" || !(re != null && re[k_])) && [kI, MI].concat(ar(H)).forEach(function(Ke) {
              return Ke(ie, he, {
                path: E,
                hashId: C,
                parentSelectors: h
              });
            });
            var Se = ie.replace(/[A-Z]/g, function(Ke) {
              return "-".concat(Ke.toLowerCase());
            }), Ie = he;
            !fI[ie] && typeof Ie == "number" && Ie !== 0 && (Ie = "".concat(Ie, "px")), ie === "animationName" && he !== null && he !== void 0 && he._keyframe && (G(he), Ie = he.getName(C)), V += "".concat(Se, ":").concat(Ie, ";");
          };
          var we, Ae = (we = re == null ? void 0 : re.value) !== null && we !== void 0 ? we : re;
          Bn(re) === "object" && re !== null && re !== void 0 && re[M_] && Array.isArray(Ae) ? Ae.forEach(function(ie) {
            ze(oe, ie);
          }) : ze(oe, Ae);
        }
      });
    }
  }), !d)
    V = "{".concat(V, "}");
  else if (x && Uz()) {
    var P = x.split(","), I = P[P.length - 1].trim();
    V = "@layer ".concat(I, " {").concat(V, "}"), P.length > 1 && (V = "@layer ".concat(x, "{%%%:%}").concat(V));
  }
  return [V, A];
};
function O_(r, o) {
  return yg("".concat(r.join("%")).concat(o));
}
function zI() {
  return null;
}
var N_ = "style";
function n1(r, o) {
  var s = r.token, c = r.path, d = r.hashId, m = r.layer, h = r.nonce, C = r.clientOnly, x = r.order, E = x === void 0 ? 0 : x, M = T.useContext(Fg), _ = M.autoClear, N = M.mock, L = M.defaultCache, H = M.hashPriority, V = M.container, A = M.ssrInline, G = M.transformers, $ = M.linters, z = M.cache, P = s._tokenKey, I = [P].concat(ar(c)), Y = QS;
  process.env.NODE_ENV !== "production" && N !== void 0 && (Y = N === "client");
  var q = N1(
    N_,
    I,
    // Create cache if needed
    function() {
      var pe = I.join("|");
      if (NI(pe)) {
        var te = DI(pe), se = xe(te, 2), de = se[0], Ce = se[1];
        if (de)
          return [de, P, Ce, {}, C, E];
      }
      var ke = o(), we = PI(ke, {
        hashId: d,
        hashPriority: H,
        layer: m,
        path: c.join("-"),
        transformers: G,
        linters: $
      }), Ae = xe(we, 2), ze = Ae[0], ie = Ae[1], he = t1(ze), Se = O_(I, he);
      return [he, P, Se, ie, C, E];
    },
    // Remove cache if no need
    function(pe, te) {
      var se = xe(pe, 3), de = se[2];
      (te || _) && QS && Kv(de, {
        mark: Yi
      });
    },
    // Effect: Inject style here
    function(pe) {
      var te = xe(pe, 4), se = te[0];
      te[1];
      var de = te[2], Ce = te[3];
      if (Y && se !== R_) {
        var ke = {
          mark: Yi,
          prepend: "queue",
          attachTo: V,
          priority: E
        }, we = typeof h == "function" ? h() : h;
        we && (ke.csp = {
          nonce: we
        });
        var Ae = Du(se, de, ke);
        Ae[Mu] = z.instanceId, Ae.setAttribute(Mf, P), process.env.NODE_ENV !== "production" && Ae.setAttribute(Az, I.join("|")), Object.keys(Ce).forEach(function(ze) {
          Du(t1(Ce[ze]), "_effect-".concat(ze), ke);
        });
      }
    }
  ), ne = xe(q, 3), oe = ne[0], re = ne[1], ge = ne[2];
  return function(pe) {
    var te;
    if (!A || Y || !L)
      te = /* @__PURE__ */ T.createElement(zI, null);
    else {
      var se;
      te = /* @__PURE__ */ T.createElement("style", an({}, (se = {}, tt(se, Mf, re), tt(se, Yi, ge), se), {
        dangerouslySetInnerHTML: {
          __html: oe
        }
      }));
    }
    return /* @__PURE__ */ T.createElement(T.Fragment, null, te, pe);
  };
}
var II = function(o, s, c) {
  var d = xe(o, 6), m = d[0], h = d[1], C = d[2], x = d[3], E = d[4], M = d[5], _ = c || {}, N = _.plain;
  if (E)
    return null;
  var L = m, H = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(M)
  };
  return L = bg(m, h, C, H, N), x && Object.keys(x).forEach(function(V) {
    if (!s[V]) {
      s[V] = !0;
      var A = t1(x[V]);
      L += bg(A, h, "_effect-".concat(V), H, N);
    }
  }), [M, C, L];
}, D_ = "cssVar", HI = function(o, s) {
  var c = o.key, d = o.prefix, m = o.unitless, h = o.ignore, C = o.token, x = o.scope, E = x === void 0 ? "" : x, M = Ou(Fg), _ = M.cache.instanceId, N = M.container, L = C._tokenKey, H = [].concat(ar(o.path), [c, E, L]), V = N1(D_, H, function() {
    var A = s(), G = g_(A, c, {
      prefix: d,
      unitless: m,
      ignore: h,
      scope: E
    }), $ = xe(G, 2), z = $[0], P = $[1], I = O_(H, P);
    return [z, P, I, c];
  }, function(A) {
    var G = xe(A, 3), $ = G[2];
    QS && Kv($, {
      mark: Yi
    });
  }, function(A) {
    var G = xe(A, 3), $ = G[1], z = G[2];
    if ($) {
      var P = Du($, z, {
        mark: Yi,
        prepend: "queue",
        attachTo: N,
        priority: -999
      });
      P[Mu] = _, P.setAttribute(Mf, c);
    }
  });
  return V;
}, $I = function(o, s, c) {
  var d = xe(o, 4), m = d[1], h = d[2], C = d[3], x = c || {}, E = x.plain;
  if (!m)
    return null;
  var M = -999, _ = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(M)
  }, N = bg(m, C, h, _, E);
  return [M, h, N];
}, zv;
zv = {}, tt(zv, N_, II), tt(zv, y_, cI), tt(zv, D_, $I);
var Ci = /* @__PURE__ */ function() {
  function r(o, s) {
    Zi(this, r), tt(this, "name", void 0), tt(this, "style", void 0), tt(this, "_keyframe", !0), this.name = o, this.style = s;
  }
  return Ji(r, [{
    key: "getName",
    value: function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return s ? "".concat(s, "-").concat(this.name) : this.name;
    }
  }]), r;
}();
function bf(r) {
  return r.notSplit = !0, r;
}
bf(["borderTop", "borderBottom"]), bf(["borderTop"]), bf(["borderBottom"]), bf(["borderLeft", "borderRight"]), bf(["borderLeft"]), bf(["borderRight"]);
function UI(r) {
  return nR(r) || tR(r) || p1(r) || rR();
}
function r1(r, o) {
  for (var s = r, c = 0; c < o.length; c += 1) {
    if (s == null)
      return;
    s = s[o[c]];
  }
  return s;
}
function A_(r, o, s, c) {
  if (!o.length)
    return s;
  var d = UI(o), m = d[0], h = d.slice(1), C;
  return !r && typeof m == "number" ? C = [] : Array.isArray(r) ? C = ar(r) : C = Te({}, r), c && s === void 0 && h.length === 1 ? delete C[m][h[0]] : C[m] = A_(C[m], h, s, c), C;
}
function SS(r, o, s) {
  var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return o.length && c && s === void 0 && !r1(r, o.slice(0, -1)) ? r : A_(r, o, s, c);
}
function jI(r) {
  return Bn(r) === "object" && r !== null && Object.getPrototypeOf(r) === Object.prototype;
}
function xT(r) {
  return Array.isArray(r) ? [] : {};
}
var FI = typeof Reflect == "undefined" ? Object.keys : Reflect.ownKeys;
function VI() {
  for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
    o[s] = arguments[s];
  var c = xT(o[0]);
  return o.forEach(function(d) {
    function m(h, C) {
      var x = new Set(C), E = r1(d, h), M = Array.isArray(E);
      if (M || jI(E)) {
        if (!x.has(E)) {
          x.add(E);
          var _ = r1(c, h);
          M ? c = SS(c, h, []) : (!_ || Bn(_) !== "object") && (c = SS(c, h, xT(E))), FI(E).forEach(function(N) {
            m([].concat(ar(h), [N]), x);
          });
        }
      } else
        c = SS(c, h, E);
    }
    m([]);
  }), c;
}
function L_() {
}
let kl = null;
function BI() {
  kl = null, iR();
}
let L1 = L_;
process.env.NODE_ENV !== "production" && (L1 = (r, o, s) => {
  pa(r, `[antd: ${o}] ${s}`), process.env.NODE_ENV === "test" && BI();
});
const P_ = /* @__PURE__ */ T.createContext({}), Wg = process.env.NODE_ENV !== "production" ? (r) => {
  const {
    strict: o
  } = T.useContext(P_), s = (c, d, m) => {
    if (!c)
      if (o === !1 && d === "deprecated") {
        const h = kl;
        kl || (kl = {}), kl[r] = kl[r] || [], kl[r].includes(m || "") || kl[r].push(m || ""), h || console.warn("[antd] There exists deprecated usage in your code:", kl);
      } else
        process.env.NODE_ENV !== "production" && L1(c, r, m);
  };
  return s.deprecated = (c, d, m, h) => {
    s(c, "deprecated", `\`${d}\` is deprecated. Please use \`${m}\` instead.${h ? ` ${h}` : ""}`);
  }, s;
} : () => {
  const r = () => {
  };
  return r.deprecated = L_, r;
}, Kg = L1, WI = /* @__PURE__ */ wg(void 0);
var KI = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, GI = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
};
const qI = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, z_ = qI, YI = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, GI),
  timePickerLocale: Object.assign({}, z_)
}, TT = YI, Ba = "${label} is not a valid ${type}", Gg = {
  locale: "en",
  Pagination: KI,
  DatePicker: TT,
  TimePicker: z_,
  Calendar: TT,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: Ba,
        method: Ba,
        array: Ba,
        object: Ba,
        number: Ba,
        date: Ba,
        boolean: Ba,
        integer: Ba,
        float: Ba,
        regexp: Ba,
        email: Ba,
        url: Ba,
        hex: Ba
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty"
  }
};
Object.assign({}, Gg.Modal);
let fg = [];
const RT = () => fg.reduce((r, o) => Object.assign(Object.assign({}, r), o), Gg.Modal);
function QI(r) {
  if (r) {
    const o = Object.assign({}, r);
    return fg.push(o), RT(), () => {
      fg = fg.filter((s) => s !== o), RT();
    };
  }
  Object.assign({}, Gg.Modal);
}
const XI = /* @__PURE__ */ wg(void 0), I_ = XI, H_ = "internalMark", $_ = (r) => {
  const {
    locale: o = {},
    children: s,
    _ANT_MARK__: c
  } = r;
  if (process.env.NODE_ENV !== "production") {
    const m = Wg("LocaleProvider");
    process.env.NODE_ENV !== "production" && m(c === H_, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  T.useEffect(() => QI(o && o.Modal), [o]);
  const d = T.useMemo(() => Object.assign(Object.assign({}, o), {
    exist: !0
  }), [o]);
  return /* @__PURE__ */ T.createElement(I_.Provider, {
    value: d
  }, s);
};
process.env.NODE_ENV !== "production" && ($_.displayName = "LocaleProvider");
const ZI = $_, JI = (r) => {
  const {
    controlHeight: o
  } = r;
  return {
    controlHeightSM: o * 0.75,
    controlHeightXS: o * 0.5,
    controlHeightLG: o * 1.25
  };
};
function e5(r) {
  const {
    sizeUnit: o,
    sizeStep: s
  } = r;
  return {
    sizeXXL: o * (s + 8),
    // 48
    sizeXL: o * (s + 4),
    // 32
    sizeLG: o * (s + 2),
    // 24
    sizeMD: o * (s + 1),
    // 20
    sizeMS: o * s,
    // 16
    size: o * s,
    // 16
    sizeSM: o * (s - 1),
    // 12
    sizeXS: o * (s - 2),
    // 8
    sizeXXS: o * (s - 3)
    // 4
  };
}
const U_ = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, t5 = Object.assign(Object.assign({}, U_), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
}), Xv = t5;
function n5(r, o) {
  let {
    generateColorPalettes: s,
    generateNeutralColorPalettes: c
  } = o;
  const {
    colorSuccess: d,
    colorWarning: m,
    colorError: h,
    colorInfo: C,
    colorPrimary: x,
    colorBgBase: E,
    colorTextBase: M
  } = r, _ = s(x), N = s(d), L = s(m), H = s(h), V = s(C), A = c(E, M), G = r.colorLink || r.colorInfo, $ = s(G);
  return Object.assign(Object.assign({}, A), {
    colorPrimaryBg: _[1],
    colorPrimaryBgHover: _[2],
    colorPrimaryBorder: _[3],
    colorPrimaryBorderHover: _[4],
    colorPrimaryHover: _[5],
    colorPrimary: _[6],
    colorPrimaryActive: _[7],
    colorPrimaryTextHover: _[8],
    colorPrimaryText: _[9],
    colorPrimaryTextActive: _[10],
    colorSuccessBg: N[1],
    colorSuccessBgHover: N[2],
    colorSuccessBorder: N[3],
    colorSuccessBorderHover: N[4],
    colorSuccessHover: N[4],
    colorSuccess: N[6],
    colorSuccessActive: N[7],
    colorSuccessTextHover: N[8],
    colorSuccessText: N[9],
    colorSuccessTextActive: N[10],
    colorErrorBg: H[1],
    colorErrorBgHover: H[2],
    colorErrorBorder: H[3],
    colorErrorBorderHover: H[4],
    colorErrorHover: H[5],
    colorError: H[6],
    colorErrorActive: H[7],
    colorErrorTextHover: H[8],
    colorErrorText: H[9],
    colorErrorTextActive: H[10],
    colorWarningBg: L[1],
    colorWarningBgHover: L[2],
    colorWarningBorder: L[3],
    colorWarningBorderHover: L[4],
    colorWarningHover: L[4],
    colorWarning: L[6],
    colorWarningActive: L[7],
    colorWarningTextHover: L[8],
    colorWarningText: L[9],
    colorWarningTextActive: L[10],
    colorInfoBg: V[1],
    colorInfoBgHover: V[2],
    colorInfoBorder: V[3],
    colorInfoBorderHover: V[4],
    colorInfoHover: V[4],
    colorInfo: V[6],
    colorInfoActive: V[7],
    colorInfoTextHover: V[8],
    colorInfoText: V[9],
    colorInfoTextActive: V[10],
    colorLinkHover: $[4],
    colorLink: $[6],
    colorLinkActive: $[7],
    colorBgMask: new Ga("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const r5 = (r) => {
  let o = r, s = r, c = r, d = r;
  return r < 6 && r >= 5 ? o = r + 1 : r < 16 && r >= 6 ? o = r + 2 : r >= 16 && (o = 16), r < 7 && r >= 5 ? s = 4 : r < 8 && r >= 7 ? s = 5 : r < 14 && r >= 8 ? s = 6 : r < 16 && r >= 14 ? s = 7 : r >= 16 && (s = 8), r < 6 && r >= 2 ? c = 1 : r >= 6 && (c = 2), r > 4 && r < 8 ? d = 4 : r >= 8 && (d = 6), {
    borderRadius: r,
    borderRadiusXS: c,
    borderRadiusSM: s,
    borderRadiusLG: o,
    borderRadiusOuter: d
  };
};
function a5(r) {
  const {
    motionUnit: o,
    motionBase: s,
    borderRadius: c,
    lineWidth: d
  } = r;
  return Object.assign({
    // motion
    motionDurationFast: `${(s + o).toFixed(1)}s`,
    motionDurationMid: `${(s + o * 2).toFixed(1)}s`,
    motionDurationSlow: `${(s + o * 3).toFixed(1)}s`,
    // line
    lineWidthBold: d + 1
  }, r5(c));
}
const _l = (r, o) => new Ga(r).setAlpha(o).toRgbString(), Iv = (r, o) => new Ga(r).darken(o).toHexString(), i5 = (r) => {
  const o = Zs(r);
  return {
    1: o[0],
    2: o[1],
    3: o[2],
    4: o[3],
    5: o[4],
    6: o[5],
    7: o[6],
    8: o[4],
    9: o[5],
    10: o[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, o5 = (r, o) => {
  const s = r || "#fff", c = o || "#000";
  return {
    colorBgBase: s,
    colorTextBase: c,
    colorText: _l(c, 0.88),
    colorTextSecondary: _l(c, 0.65),
    colorTextTertiary: _l(c, 0.45),
    colorTextQuaternary: _l(c, 0.25),
    colorFill: _l(c, 0.15),
    colorFillSecondary: _l(c, 0.06),
    colorFillTertiary: _l(c, 0.04),
    colorFillQuaternary: _l(c, 0.02),
    colorBgLayout: Iv(s, 4),
    colorBgContainer: Iv(s, 0),
    colorBgElevated: Iv(s, 0),
    colorBgSpotlight: _l(c, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Iv(s, 15),
    colorBorderSecondary: Iv(s, 6)
  };
};
function l5(r) {
  return (r + 8) / r;
}
function u5(r) {
  const o = new Array(10).fill(null).map((s, c) => {
    const d = c - 1, m = r * Math.pow(2.71828, d / 5), h = c > 1 ? Math.floor(m) : Math.ceil(m);
    return Math.floor(h / 2) * 2;
  });
  return o[1] = r, o.map((s) => ({
    size: s,
    lineHeight: l5(s)
  }));
}
const s5 = (r) => {
  const o = u5(r), s = o.map((M) => M.size), c = o.map((M) => M.lineHeight), d = s[1], m = s[0], h = s[2], C = c[1], x = c[0], E = c[2];
  return {
    fontSizeSM: m,
    fontSize: d,
    fontSizeLG: h,
    fontSizeXL: s[3],
    fontSizeHeading1: s[6],
    fontSizeHeading2: s[5],
    fontSizeHeading3: s[4],
    fontSizeHeading4: s[3],
    fontSizeHeading5: s[2],
    lineHeight: C,
    lineHeightLG: E,
    lineHeightSM: x,
    fontHeight: Math.round(C * d),
    fontHeightLG: Math.round(E * h),
    fontHeightSM: Math.round(x * m),
    lineHeightHeading1: c[6],
    lineHeightHeading2: c[5],
    lineHeightHeading3: c[4],
    lineHeightHeading4: c[3],
    lineHeightHeading5: c[2]
  };
};
function c5(r) {
  const o = Object.keys(U_).map((s) => {
    const c = Zs(r[s]);
    return new Array(10).fill(1).reduce((d, m, h) => (d[`${s}-${h + 1}`] = c[h], d[`${s}${h + 1}`] = c[h], d), {});
  }).reduce((s, c) => (s = Object.assign(Object.assign({}, s), c), s), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r), o), n5(r, {
    generateColorPalettes: i5,
    generateNeutralColorPalettes: o5
  })), s5(r.fontSize)), e5(r)), JI(r)), a5(r));
}
const j_ = YS(c5), F_ = {
  token: Xv,
  override: {
    override: Xv
  },
  hashed: !0
}, V_ = /* @__PURE__ */ Ma.createContext(F_), B_ = "anticon", f5 = (r, o) => o || (r ? `ant-${r}` : "ant"), ec = /* @__PURE__ */ T.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: f5,
  iconPrefixCls: B_
}), d5 = `-ant-${Date.now()}-${Math.random()}`;
function v5(r, o) {
  const s = {}, c = (h, C) => {
    let x = h.clone();
    return x = (C == null ? void 0 : C(x)) || x, x.toRgbString();
  }, d = (h, C) => {
    const x = new Ga(h), E = Zs(x.toRgbString());
    s[`${C}-color`] = c(x), s[`${C}-color-disabled`] = E[1], s[`${C}-color-hover`] = E[4], s[`${C}-color-active`] = E[6], s[`${C}-color-outline`] = x.clone().setAlpha(0.2).toRgbString(), s[`${C}-color-deprecated-bg`] = E[0], s[`${C}-color-deprecated-border`] = E[2];
  };
  if (o.primaryColor) {
    d(o.primaryColor, "primary");
    const h = new Ga(o.primaryColor), C = Zs(h.toRgbString());
    C.forEach((E, M) => {
      s[`primary-${M + 1}`] = E;
    }), s["primary-color-deprecated-l-35"] = c(h, (E) => E.lighten(35)), s["primary-color-deprecated-l-20"] = c(h, (E) => E.lighten(20)), s["primary-color-deprecated-t-20"] = c(h, (E) => E.tint(20)), s["primary-color-deprecated-t-50"] = c(h, (E) => E.tint(50)), s["primary-color-deprecated-f-12"] = c(h, (E) => E.setAlpha(E.getAlpha() * 0.12));
    const x = new Ga(C[0]);
    s["primary-color-active-deprecated-f-30"] = c(x, (E) => E.setAlpha(E.getAlpha() * 0.3)), s["primary-color-active-deprecated-d-02"] = c(x, (E) => E.darken(2));
  }
  return o.successColor && d(o.successColor, "success"), o.warningColor && d(o.warningColor, "warning"), o.errorColor && d(o.errorColor, "error"), o.infoColor && d(o.infoColor, "info"), `
  :root {
    ${Object.keys(s).map((h) => `--${r}-${h}: ${s[h]};`).join(`
`)}
  }
  `.trim();
}
function p5(r, o) {
  const s = v5(r, o);
  va() ? Du(s, `${d5}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Kg(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const a1 = /* @__PURE__ */ T.createContext(!1), h5 = (r) => {
  let {
    children: o,
    disabled: s
  } = r;
  const c = T.useContext(a1);
  return /* @__PURE__ */ T.createElement(a1.Provider, {
    value: s != null ? s : c
  }, o);
}, m5 = a1, i1 = /* @__PURE__ */ T.createContext(void 0), g5 = (r) => {
  let {
    children: o,
    size: s
  } = r;
  const c = T.useContext(i1);
  return /* @__PURE__ */ T.createElement(i1.Provider, {
    value: s || c
  }, o);
}, P1 = i1;
function y5() {
  const r = Ou(m5), o = Ou(P1);
  return {
    componentDisabled: r,
    componentSize: o
  };
}
const Sg = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], b5 = "5.13.2";
function CS(r) {
  return r >= 0 && r <= 255;
}
function ng(r, o) {
  const {
    r: s,
    g: c,
    b: d,
    a: m
  } = new Ga(r).toRgb();
  if (m < 1)
    return r;
  const {
    r: h,
    g: C,
    b: x
  } = new Ga(o).toRgb();
  for (let E = 0.01; E <= 1; E += 0.01) {
    const M = Math.round((s - h * (1 - E)) / E), _ = Math.round((c - C * (1 - E)) / E), N = Math.round((d - x * (1 - E)) / E);
    if (CS(M) && CS(_) && CS(N))
      return new Ga({
        r: M,
        g: _,
        b: N,
        a: Math.round(E * 100) / 100
      }).toRgbString();
  }
  return new Ga({
    r: s,
    g: c,
    b: d,
    a: 1
  }).toRgbString();
}
var S5 = function(r, o) {
  var s = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (s[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (s[c[d]] = r[c[d]]);
  return s;
};
function W_(r) {
  const {
    override: o
  } = r, s = S5(r, ["override"]), c = Object.assign({}, o);
  Object.keys(Xv).forEach((N) => {
    delete c[N];
  });
  const d = Object.assign(Object.assign({}, s), c), m = 480, h = 576, C = 768, x = 992, E = 1200, M = 1600;
  if (d.motion === !1) {
    const N = "0s";
    d.motionDurationFast = N, d.motionDurationMid = N, d.motionDurationSlow = N;
  }
  return Object.assign(Object.assign(Object.assign({}, d), {
    // ============== Background ============== //
    colorFillContent: d.colorFillSecondary,
    colorFillContentHover: d.colorFill,
    colorFillAlter: d.colorFillQuaternary,
    colorBgContainerDisabled: d.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: d.colorBgContainer,
    colorSplit: ng(d.colorBorderSecondary, d.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: d.colorTextQuaternary,
    colorTextDisabled: d.colorTextQuaternary,
    colorTextHeading: d.colorText,
    colorTextLabel: d.colorTextSecondary,
    colorTextDescription: d.colorTextTertiary,
    colorTextLightSolid: d.colorWhite,
    colorHighlight: d.colorError,
    colorBgTextHover: d.colorFillSecondary,
    colorBgTextActive: d.colorFill,
    colorIcon: d.colorTextTertiary,
    colorIconHover: d.colorText,
    colorErrorOutline: ng(d.colorErrorBg, d.colorBgContainer),
    colorWarningOutline: ng(d.colorWarningBg, d.colorBgContainer),
    // Font
    fontSizeIcon: d.fontSizeSM,
    // Line
    lineWidthFocus: d.lineWidth * 4,
    // Control
    lineWidth: d.lineWidth,
    controlOutlineWidth: d.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: d.controlHeight / 2,
    controlItemBgHover: d.colorFillTertiary,
    controlItemBgActive: d.colorPrimaryBg,
    controlItemBgActiveHover: d.colorPrimaryBgHover,
    controlItemBgActiveDisabled: d.colorFill,
    controlTmpOutline: d.colorFillQuaternary,
    controlOutline: ng(d.colorPrimaryBg, d.colorBgContainer),
    lineType: d.lineType,
    borderRadius: d.borderRadius,
    borderRadiusXS: d.borderRadiusXS,
    borderRadiusSM: d.borderRadiusSM,
    borderRadiusLG: d.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: d.sizeXXS,
    paddingXS: d.sizeXS,
    paddingSM: d.sizeSM,
    padding: d.size,
    paddingMD: d.sizeMD,
    paddingLG: d.sizeLG,
    paddingXL: d.sizeXL,
    paddingContentHorizontalLG: d.sizeLG,
    paddingContentVerticalLG: d.sizeMS,
    paddingContentHorizontal: d.sizeMS,
    paddingContentVertical: d.sizeSM,
    paddingContentHorizontalSM: d.size,
    paddingContentVerticalSM: d.sizeXS,
    marginXXS: d.sizeXXS,
    marginXS: d.sizeXS,
    marginSM: d.sizeSM,
    margin: d.size,
    marginMD: d.sizeMD,
    marginLG: d.sizeLG,
    marginXL: d.sizeXL,
    marginXXL: d.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: m,
    screenXSMin: m,
    screenXSMax: h - 1,
    screenSM: h,
    screenSMMin: h,
    screenSMMax: C - 1,
    screenMD: C,
    screenMDMin: C,
    screenMDMax: x - 1,
    screenLG: x,
    screenLGMin: x,
    screenLGMax: E - 1,
    screenXL: E,
    screenXLMin: E,
    screenXLMax: M - 1,
    screenXXL: M,
    screenXXLMin: M,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new Ga("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Ga("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Ga("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), c);
}
var _T = function(r, o) {
  var s = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (s[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (s[c[d]] = r[c[d]]);
  return s;
};
const K_ = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0
}, G_ = {
  size: !0,
  sizeSM: !0,
  sizeLG: !0,
  sizeMD: !0,
  sizeXS: !0,
  sizeXXS: !0,
  sizeMS: !0,
  sizeXL: !0,
  sizeXXL: !0,
  sizeUnit: !0,
  sizeStep: !0,
  motionBase: !0,
  motionUnit: !0
}, C5 = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, q_ = (r, o, s) => {
  const c = s.getDerivativeToken(r), {
    override: d
  } = o, m = _T(o, ["override"]);
  let h = Object.assign(Object.assign({}, c), {
    override: d
  });
  return h = W_(h), m && Object.entries(m).forEach((C) => {
    let [x, E] = C;
    const {
      theme: M
    } = E, _ = _T(E, ["theme"]);
    let N = _;
    M && (N = q_(Object.assign(Object.assign({}, h), _), {
      override: _
    }, M)), h[x] = N;
  }), h;
};
function Js() {
  const {
    token: r,
    hashed: o,
    theme: s,
    override: c,
    cssVar: d
  } = Ma.useContext(V_), m = `${b5}-${o || ""}`, h = s || j_, [C, x, E] = sI(h, [Xv, r], {
    salt: m,
    override: c,
    getComputedToken: q_,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: W_,
    cssVar: d && {
      prefix: d.prefix,
      key: d.key,
      unitless: K_,
      ignore: G_,
      preserve: C5
    }
  });
  return [h, E, o ? x : "", C, d];
}
const E5 = function(r) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: r.colorText,
    fontSize: r.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: r.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: o ? "inherit" : r.fontFamily
  };
}, w5 = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), x5 = (r) => ({
  a: {
    color: r.colorLink,
    textDecoration: r.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${r.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: r.colorLinkHover
    },
    "&:active": {
      color: r.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: r.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: r.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: r.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), T5 = (r, o) => {
  const {
    fontFamily: s,
    fontSize: c
  } = r, d = `[class^="${o}"], [class*=" ${o}"]`;
  return {
    [d]: {
      fontFamily: s,
      fontSize: c,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [d]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
};
let R5 = /* @__PURE__ */ Ji(function r() {
  Zi(this, r);
});
const Y_ = R5;
function _5(r, o, s) {
  return o = Nu(o), g1(r, Ng() ? Reflect.construct(o, s || [], Nu(r).constructor) : o.apply(r, s));
}
let k5 = /* @__PURE__ */ function(r) {
  Nf(o, r);
  function o(s) {
    var c;
    return Zi(this, o), c = _5(this, o), c.result = 0, s instanceof o ? c.result = s.result : typeof s == "number" && (c.result = s), c;
  }
  return Ji(o, [{
    key: "add",
    value: function(c) {
      return c instanceof o ? this.result += c.result : typeof c == "number" && (this.result += c), this;
    }
  }, {
    key: "sub",
    value: function(c) {
      return c instanceof o ? this.result -= c.result : typeof c == "number" && (this.result -= c), this;
    }
  }, {
    key: "mul",
    value: function(c) {
      return c instanceof o ? this.result *= c.result : typeof c == "number" && (this.result *= c), this;
    }
  }, {
    key: "div",
    value: function(c) {
      return c instanceof o ? this.result /= c.result : typeof c == "number" && (this.result /= c), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), o;
}(Y_);
function M5(r, o, s) {
  return o = Nu(o), g1(r, Ng() ? Reflect.construct(o, s || [], Nu(r).constructor) : o.apply(r, s));
}
const Q_ = "CALC_UNIT";
function ES(r) {
  return typeof r == "number" ? `${r}${Q_}` : r;
}
let O5 = /* @__PURE__ */ function(r) {
  Nf(o, r);
  function o(s) {
    var c;
    return Zi(this, o), c = M5(this, o), c.result = "", s instanceof o ? c.result = `(${s.result})` : typeof s == "number" ? c.result = ES(s) : typeof s == "string" && (c.result = s), c;
  }
  return Ji(o, [{
    key: "add",
    value: function(c) {
      return c instanceof o ? this.result = `${this.result} + ${c.getResult()}` : (typeof c == "number" || typeof c == "string") && (this.result = `${this.result} + ${ES(c)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(c) {
      return c instanceof o ? this.result = `${this.result} - ${c.getResult()}` : (typeof c == "number" || typeof c == "string") && (this.result = `${this.result} - ${ES(c)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(c) {
      return this.lowPriority && (this.result = `(${this.result})`), c instanceof o ? this.result = `${this.result} * ${c.getResult(!0)}` : (typeof c == "number" || typeof c == "string") && (this.result = `${this.result} * ${c}`), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(c) {
      return this.lowPriority && (this.result = `(${this.result})`), c instanceof o ? this.result = `${this.result} / ${c.getResult(!0)}` : (typeof c == "number" || typeof c == "string") && (this.result = `${this.result} / ${c}`), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(c) {
      return this.lowPriority || c ? `(${this.result})` : this.result;
    }
  }, {
    key: "equal",
    value: function(c) {
      const {
        unit: d = !0
      } = c || {}, m = new RegExp(`${Q_}`, "g");
      return this.result = this.result.replace(m, d ? "px" : ""), typeof this.lowPriority != "undefined" ? `calc(${this.result})` : this.result;
    }
  }]), o;
}(Y_);
const N5 = (r) => {
  const o = r === "css" ? O5 : k5;
  return (s) => new o(s);
};
function D5(r) {
  return r === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var o = arguments.length, s = new Array(o), c = 0; c < o; c++)
        s[c] = arguments[c];
      return `max(${s.map((d) => qv(d)).join(",")})`;
    },
    min: function() {
      for (var o = arguments.length, s = new Array(o), c = 0; c < o; c++)
        s[c] = arguments[c];
      return `min(${s.map((d) => qv(d)).join(",")})`;
    }
  };
}
const X_ = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC != "undefined";
let o1 = !0;
function qg() {
  for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
    o[s] = arguments[s];
  if (!X_)
    return Object.assign.apply(Object, [{}].concat(o));
  o1 = !1;
  const c = {};
  return o.forEach((d) => {
    Object.keys(d).forEach((h) => {
      Object.defineProperty(c, h, {
        configurable: !0,
        enumerable: !0,
        get: () => d[h]
      });
    });
  }), o1 = !0, c;
}
const kT = {};
function A5() {
}
const L5 = (r) => {
  let o, s = r, c = A5;
  return X_ && typeof Proxy != "undefined" && (o = /* @__PURE__ */ new Set(), s = new Proxy(r, {
    get(d, m) {
      return o1 && o.add(m), d[m];
    }
  }), c = (d, m) => {
    var h;
    kT[d] = {
      global: Array.from(o),
      component: Object.assign(Object.assign({}, (h = kT[d]) === null || h === void 0 ? void 0 : h.component), m)
    };
  }), {
    token: s,
    keys: o,
    flush: c
  };
}, Z_ = (r, o) => {
  const [s, c] = Js();
  return n1({
    theme: s,
    token: c,
    hashId: "",
    path: ["ant-design-icons", r],
    nonce: () => o == null ? void 0 : o.nonce
  }, () => [{
    [`.${r}`]: Object.assign(Object.assign({}, w5()), {
      [`.${r} .${r}-icon`]: {
        display: "block"
      }
    })
  }]);
}, J_ = (r, o, s) => {
  var c;
  return typeof s == "function" ? s(qg(o, (c = o[r]) !== null && c !== void 0 ? c : {})) : s != null ? s : {};
}, ek = (r, o, s, c) => {
  const d = Object.assign({}, o[r]);
  if (c != null && c.deprecatedTokens) {
    const {
      deprecatedTokens: h
    } = c;
    h.forEach((C) => {
      let [x, E] = C;
      var M;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && pa(!(d != null && d[x]), `Component Token \`${String(x)}\` of ${r} is deprecated. Please use \`${String(E)}\` instead.`), (d != null && d[x] || d != null && d[E]) && ((M = d[E]) !== null && M !== void 0 || (d[E] = d == null ? void 0 : d[x]));
    });
  }
  const m = Object.assign(Object.assign({}, s), d);
  return Object.keys(m).forEach((h) => {
    m[h] === o[h] && delete m[h];
  }), m;
}, P5 = (r, o) => `${[o, r.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function z5(r, o, s) {
  let c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const d = Array.isArray(r) ? r : [r, r], [m] = d, h = d.join("-");
  return (C) => {
    const [x, E, M, _, N] = Js(), {
      getPrefixCls: L,
      iconPrefixCls: H,
      csp: V
    } = Ou(ec), A = L(), G = N ? "css" : "js", $ = N5(G), {
      max: z,
      min: P
    } = D5(G), I = {
      theme: x,
      token: _,
      hashId: M,
      nonce: () => V == null ? void 0 : V.nonce,
      clientOnly: c.clientOnly,
      // antd is always at top of styles
      order: c.order || -999
    };
    return n1(Object.assign(Object.assign({}, I), {
      clientOnly: !1,
      path: ["Shared", A]
    }), () => [{
      // Link
      "&": x5(_)
    }]), Z_(H, V), [n1(Object.assign(Object.assign({}, I), {
      path: [h, C, H]
    }), () => {
      if (c.injectStyle === !1)
        return [];
      const {
        token: q,
        flush: ne
      } = L5(_), oe = J_(m, E, s), re = `.${C}`, ge = ek(m, E, oe, {
        deprecatedTokens: c.deprecatedTokens
      });
      N && Object.keys(oe).forEach((se) => {
        oe[se] = `var(${m_(se, P5(m, N.prefix))})`;
      });
      const pe = qg(q, {
        componentCls: re,
        prefixCls: C,
        iconCls: `.${H}`,
        antCls: `.${A}`,
        calc: $,
        max: z,
        min: P
      }, N ? oe : ge), te = o(pe, {
        hashId: M,
        prefixCls: C,
        rootPrefixCls: A,
        iconPrefixCls: H
      });
      return ne(m, ge), [c.resetStyle === !1 ? null : T5(pe, C), te];
    }), M];
  };
}
const I5 = (r, o, s) => {
  function c(E) {
    return `${r}${E.slice(0, 1).toUpperCase()}${E.slice(1)}`;
  }
  const {
    unitless: d = {},
    injectStyle: m = !0
  } = s != null ? s : {}, h = {
    [c("zIndexPopup")]: !0
  };
  Object.keys(d).forEach((E) => {
    h[c(E)] = d[E];
  });
  const C = (E) => {
    let {
      rootCls: M,
      cssVar: _
    } = E;
    const [, N] = Js();
    return HI({
      path: [r],
      prefix: _.prefix,
      key: _ == null ? void 0 : _.key,
      unitless: Object.assign(Object.assign({}, K_), h),
      ignore: G_,
      token: N,
      scope: M
    }, () => {
      const L = J_(r, N, o), H = ek(r, N, L, {
        deprecatedTokens: s == null ? void 0 : s.deprecatedTokens
      });
      return Object.keys(L).forEach((V) => {
        H[c(V)] = H[V], delete H[V];
      }), H;
    }), null;
  };
  return (E) => {
    const [, , , , M] = Js();
    return [(_) => m && M ? /* @__PURE__ */ Ma.createElement(Ma.Fragment, null, /* @__PURE__ */ Ma.createElement(C, {
      rootCls: E,
      cssVar: M,
      component: r
    }), _) : _, M == null ? void 0 : M.key];
  };
}, H5 = (r, o, s, c) => {
  const d = z5(r, o, s, c), m = I5(Array.isArray(r) ? r[0] : r, s, c);
  return function(h) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : h;
    const [, x] = d(h), [E, M] = m(C);
    return [E, x, M];
  };
};
function $5(r, o) {
  return Sg.reduce((s, c) => {
    const d = r[`${c}1`], m = r[`${c}3`], h = r[`${c}6`], C = r[`${c}7`];
    return Object.assign(Object.assign({}, s), o(c, {
      lightColor: d,
      lightBorderColor: m,
      darkColor: h,
      textColor: C
    }));
  }, {});
}
const U5 = Object.assign({}, T), {
  useId: MT
} = U5, j5 = () => "", F5 = typeof MT == "undefined" ? j5 : MT;
function V5(r, o) {
  var s;
  const c = Wg("ConfigProvider"), d = r || {}, m = d.inherit === !1 || !o ? F_ : o, h = F5();
  if (process.env.NODE_ENV !== "production") {
    const C = d.cssVar || m.cssVar, x = !!(typeof d.cssVar == "object" && (!((s = d.cssVar) === null || s === void 0) && s.key) || h);
    process.env.NODE_ENV !== "production" && c(!C || x, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return _g(() => {
    var C, x;
    if (!r)
      return o;
    const E = Object.assign({}, m.components);
    Object.keys(r.components || {}).forEach((N) => {
      E[N] = Object.assign(Object.assign({}, E[N]), r.components[N]);
    });
    const M = `css-var-${h.replace(/:/g, "")}`, _ = ((C = d.cssVar) !== null && C !== void 0 ? C : m.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: "ant"
    }, typeof m.cssVar == "object" ? m.cssVar : {}), typeof d.cssVar == "object" ? d.cssVar : {}), {
      key: typeof d.cssVar == "object" && ((x = d.cssVar) === null || x === void 0 ? void 0 : x.key) || M
    });
    return Object.assign(Object.assign(Object.assign({}, m), d), {
      token: Object.assign(Object.assign({}, m.token), d.token),
      components: E,
      cssVar: _
    });
  }, [d, m], (C, x) => C.some((E, M) => {
    const _ = x[M];
    return !y1(E, _, !0);
  }));
}
function B5(r) {
  const {
    children: o
  } = r, [, s] = Js(), {
    motion: c
  } = s, d = T.useRef(!1);
  return d.current = d.current || c === !1, d.current ? /* @__PURE__ */ T.createElement(lP, {
    motion: c
  }, o) : o;
}
const tk = /* @__PURE__ */ T.memo((r) => {
  let {
    dropdownMatchSelectWidth: o
  } = r;
  return Wg("ConfigProvider").deprecated(o === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (tk.displayName = "PropWarning");
const W5 = process.env.NODE_ENV !== "production" ? tk : () => null;
var K5 = function(r, o) {
  var s = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (s[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (s[c[d]] = r[c[d]]);
  return s;
};
let l1 = !1;
process.env.NODE_ENV;
const G5 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], q5 = "ant";
let nk;
function Y5() {
  return nk || q5;
}
function Q5(r) {
  return Object.keys(r).some((o) => o.endsWith("Color"));
}
const X5 = (r) => {
  const {
    prefixCls: o,
    iconPrefixCls: s,
    theme: c,
    holderRender: d
  } = r;
  o !== void 0 && (nk = o), c && Q5(c) && (process.env.NODE_ENV !== "production" && Kg(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), p5(Y5(), c));
}, Z5 = (r) => {
  const {
    children: o,
    csp: s,
    autoInsertSpaceInButton: c,
    alert: d,
    anchor: m,
    form: h,
    locale: C,
    componentSize: x,
    direction: E,
    space: M,
    virtual: _,
    dropdownMatchSelectWidth: N,
    popupMatchSelectWidth: L,
    popupOverflow: H,
    legacyLocale: V,
    parentContext: A,
    iconPrefixCls: G,
    theme: $,
    componentDisabled: z,
    segmented: P,
    statistic: I,
    spin: Y,
    calendar: q,
    carousel: ne,
    cascader: oe,
    collapse: re,
    typography: ge,
    checkbox: pe,
    descriptions: te,
    divider: se,
    drawer: de,
    skeleton: Ce,
    steps: ke,
    image: we,
    layout: Ae,
    list: ze,
    mentions: ie,
    modal: he,
    progress: Se,
    result: Ie,
    slider: Ke,
    breadcrumb: Xe,
    menu: it,
    pagination: Be,
    input: nt,
    empty: Nt,
    badge: He,
    radio: et,
    rate: Bt,
    switch: Ee,
    transfer: mt,
    avatar: Dt,
    message: It,
    tag: $t,
    table: Ze,
    card: kt,
    tabs: gt,
    timeline: Zt,
    timePicker: ot,
    upload: Wt,
    notification: Qt,
    tree: ut,
    colorPicker: Gt,
    datePicker: Wn,
    rangePicker: qt,
    flex: en,
    wave: ye,
    dropdown: Oe,
    warning: We
  } = r, xt = T.useCallback(($e, St) => {
    const {
      prefixCls: Me
    } = r;
    if (St)
      return St;
    const Ge = Me || A.getPrefixCls("");
    return $e ? `${Ge}-${$e}` : Ge;
  }, [A.getPrefixCls, r.prefixCls]), Mt = G || A.iconPrefixCls || B_, rt = s || A.csp;
  Z_(Mt, rt);
  const st = V5($, A.theme);
  process.env.NODE_ENV !== "production" && (l1 = l1 || !!st);
  const on = {
    csp: rt,
    autoInsertSpaceInButton: c,
    alert: d,
    anchor: m,
    locale: C || V,
    direction: E,
    space: M,
    virtual: _,
    popupMatchSelectWidth: L != null ? L : N,
    popupOverflow: H,
    getPrefixCls: xt,
    iconPrefixCls: Mt,
    theme: st,
    segmented: P,
    statistic: I,
    spin: Y,
    calendar: q,
    carousel: ne,
    cascader: oe,
    collapse: re,
    typography: ge,
    checkbox: pe,
    descriptions: te,
    divider: se,
    drawer: de,
    skeleton: Ce,
    steps: ke,
    image: we,
    input: nt,
    layout: Ae,
    list: ze,
    mentions: ie,
    modal: he,
    progress: Se,
    result: Ie,
    slider: Ke,
    breadcrumb: Xe,
    menu: it,
    pagination: Be,
    empty: Nt,
    badge: He,
    radio: et,
    rate: Bt,
    switch: Ee,
    transfer: mt,
    avatar: Dt,
    message: It,
    tag: $t,
    table: Ze,
    card: kt,
    tabs: gt,
    timeline: Zt,
    timePicker: ot,
    upload: Wt,
    notification: Qt,
    tree: ut,
    colorPicker: Gt,
    datePicker: Wn,
    rangePicker: qt,
    flex: en,
    wave: ye,
    dropdown: Oe,
    warning: We
  }, Ot = Object.assign({}, A);
  Object.keys(on).forEach(($e) => {
    on[$e] !== void 0 && (Ot[$e] = on[$e]);
  }), G5.forEach(($e) => {
    const St = r[$e];
    St && (Ot[$e] = St);
  });
  const Ut = _g(() => Ot, Ot, ($e, St) => {
    const Me = Object.keys($e), Ge = Object.keys(St);
    return Me.length !== Ge.length || Me.some((At) => $e[At] !== St[At]);
  }), ir = T.useMemo(() => ({
    prefixCls: Mt,
    csp: rt
  }), [Mt, rt]);
  let Vt = /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(W5, {
    dropdownMatchSelectWidth: N
  }), o);
  const dn = T.useMemo(() => {
    var $e, St, Me, Ge;
    return VI((($e = Gg.Form) === null || $e === void 0 ? void 0 : $e.defaultValidateMessages) || {}, ((Me = (St = Ut.locale) === null || St === void 0 ? void 0 : St.Form) === null || Me === void 0 ? void 0 : Me.defaultValidateMessages) || {}, ((Ge = Ut.form) === null || Ge === void 0 ? void 0 : Ge.validateMessages) || {}, (h == null ? void 0 : h.validateMessages) || {});
  }, [Ut, h == null ? void 0 : h.validateMessages]);
  Object.keys(dn).length > 0 && (Vt = /* @__PURE__ */ T.createElement(WI.Provider, {
    value: dn
  }, Vt)), C && (Vt = /* @__PURE__ */ T.createElement(ZI, {
    locale: C,
    _ANT_MARK__: H_
  }, Vt)), (Mt || rt) && (Vt = /* @__PURE__ */ T.createElement(_1.Provider, {
    value: ir
  }, Vt)), x && (Vt = /* @__PURE__ */ T.createElement(g5, {
    size: x
  }, Vt)), Vt = /* @__PURE__ */ T.createElement(B5, null, Vt);
  const jt = T.useMemo(() => {
    const $e = st || {}, {
      algorithm: St,
      token: Me,
      components: Ge,
      cssVar: At
    } = $e, mn = K5($e, ["algorithm", "token", "components", "cssVar"]), An = St && (!Array.isArray(St) || St.length > 0) ? YS(St) : j_, gn = {};
    Object.entries(Ge || {}).forEach((qr) => {
      let [Ln, Kt] = qr;
      const Vn = Object.assign({}, Kt);
      "algorithm" in Vn && (Vn.algorithm === !0 ? Vn.theme = An : (Array.isArray(Vn.algorithm) || typeof Vn.algorithm == "function") && (Vn.theme = YS(Vn.algorithm)), delete Vn.algorithm), gn[Ln] = Vn;
    });
    const oa = Object.assign(Object.assign({}, Xv), Me);
    return Object.assign(Object.assign({}, mn), {
      theme: An,
      token: oa,
      components: gn,
      override: Object.assign({
        override: oa
      }, gn),
      cssVar: At
    });
  }, [st]);
  return $ && (Vt = /* @__PURE__ */ T.createElement(V_.Provider, {
    value: jt
  }, Vt)), Ut.warning && (Vt = /* @__PURE__ */ T.createElement(P_.Provider, {
    value: Ut.warning
  }, Vt)), z !== void 0 && (Vt = /* @__PURE__ */ T.createElement(h5, {
    disabled: z
  }, Vt)), /* @__PURE__ */ T.createElement(ec.Provider, {
    value: Ut
  }, Vt);
}, Lf = (r) => {
  const o = T.useContext(ec), s = T.useContext(I_);
  return /* @__PURE__ */ T.createElement(Z5, Object.assign({
    parentContext: o,
    legacyLocale: s
  }, r));
};
Lf.ConfigContext = ec;
Lf.SizeContext = P1;
Lf.config = X5;
Lf.useConfig = y5;
Object.defineProperty(Lf, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Kg(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), P1)
});
process.env.NODE_ENV !== "production" && (Lf.displayName = "ConfigProvider");
const J5 = /* @__PURE__ */ T.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});
var e4 = function(r, o) {
  var s = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (s[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (s[c[d]] = r[c[d]]);
  return s;
};
const OT = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, rk = /* @__PURE__ */ T.createContext({}), t4 = /* @__PURE__ */ (() => {
  let r = 0;
  return function() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return r += 1, `${o}${r}`;
  };
})(), n4 = /* @__PURE__ */ T.forwardRef((r, o) => {
  const {
    prefixCls: s,
    className: c,
    trigger: d,
    children: m,
    defaultCollapsed: h = !1,
    theme: C = "dark",
    style: x = {},
    collapsible: E = !1,
    reverseArrow: M = !1,
    width: _ = 200,
    collapsedWidth: N = 80,
    zeroWidthTriggerStyle: L,
    breakpoint: H,
    onCollapse: V,
    onBreakpoint: A
  } = r, G = e4(r, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), {
    siderHook: $
  } = Ou(J5), [z, P] = Wo("collapsed" in r ? r.collapsed : h), [I, Y] = Wo(!1);
  Bo(() => {
    "collapsed" in r && P(r.collapsed);
  }, [r.collapsed]);
  const q = (te, se) => {
    "collapsed" in r || P(te), V == null || V(te, se);
  }, ne = Ka();
  ne.current = (te) => {
    Y(te.matches), A == null || A(te.matches), z !== te.matches && q(te.matches, "responsive");
  }, Bo(() => {
    function te(de) {
      return ne.current(de);
    }
    let se;
    if (typeof window != "undefined") {
      const {
        matchMedia: de
      } = window;
      if (de && H && H in OT) {
        se = de(`screen and (max-width: ${OT[H]})`);
        try {
          se.addEventListener("change", te);
        } catch (Ce) {
          se.addListener(te);
        }
        te(se);
      }
    }
    return () => {
      try {
        se == null || se.removeEventListener("change", te);
      } catch (de) {
        se == null || se.removeListener(te);
      }
    };
  }, [H]), Bo(() => {
    const te = t4("ant-sider-");
    return $.addSider(te), () => $.removeSider(te);
  }, []);
  const oe = () => {
    q(!z, "clickTrigger");
  }, {
    getPrefixCls: re
  } = Ou(ec), ge = () => {
    const te = re("layout-sider", s), se = Pg(G, ["collapsed"]), de = z ? N : _, Ce = Oz(de) ? `${de}px` : String(de), ke = parseFloat(String(N || 0)) === 0 ? /* @__PURE__ */ T.createElement("span", {
      onClick: oe,
      className: wn(`${te}-zero-width-trigger`, `${te}-zero-width-trigger-${M ? "right" : "left"}`),
      style: L
    }, d || /* @__PURE__ */ T.createElement(Tz, null)) : null, ze = {
      expanded: M ? /* @__PURE__ */ T.createElement(mT, null) : /* @__PURE__ */ T.createElement(hT, null),
      collapsed: M ? /* @__PURE__ */ T.createElement(hT, null) : /* @__PURE__ */ T.createElement(mT, null)
    }[z ? "collapsed" : "expanded"], ie = d !== null ? ke || /* @__PURE__ */ T.createElement("div", {
      className: `${te}-trigger`,
      onClick: oe,
      style: {
        width: Ce
      }
    }, d || ze) : null, he = Object.assign(Object.assign({}, x), {
      flex: `0 0 ${Ce}`,
      maxWidth: Ce,
      minWidth: Ce,
      width: Ce
    }), Se = wn(te, `${te}-${C}`, {
      [`${te}-collapsed`]: !!z,
      [`${te}-has-trigger`]: E && d !== null && !ke,
      [`${te}-below`]: !!I,
      [`${te}-zero-width`]: parseFloat(Ce) === 0
    }, c);
    return /* @__PURE__ */ T.createElement("aside", Object.assign({
      className: Se
    }, se, {
      style: he,
      ref: o
    }), /* @__PURE__ */ T.createElement("div", {
      className: `${te}-children`
    }, m), E || I && ke ? ie : null);
  }, pe = T.useMemo(() => ({
    siderCollapsed: z
  }), [z]);
  return /* @__PURE__ */ T.createElement(rk.Provider, {
    value: pe
  }, ge());
});
process.env.NODE_ENV !== "production" && (n4.displayName = "Sider");
function ak(r) {
  var o = r.children, s = r.prefixCls, c = r.id, d = r.overlayInnerStyle, m = r.className, h = r.style;
  return /* @__PURE__ */ T.createElement("div", {
    className: wn("".concat(s, "-content"), m),
    style: h
  }, /* @__PURE__ */ T.createElement("div", {
    className: "".concat(s, "-inner"),
    id: c,
    role: "tooltip",
    style: d
  }, typeof o == "function" ? o() : o));
}
var Sf = {
  shiftX: 64,
  adjustY: 1
}, Cf = {
  adjustX: 1,
  shiftY: !0
}, yi = [0, 0], r4 = {
  left: {
    points: ["cr", "cl"],
    overflow: Cf,
    offset: [-4, 0],
    targetOffset: yi
  },
  right: {
    points: ["cl", "cr"],
    overflow: Cf,
    offset: [4, 0],
    targetOffset: yi
  },
  top: {
    points: ["bc", "tc"],
    overflow: Sf,
    offset: [0, -4],
    targetOffset: yi
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Sf,
    offset: [0, 4],
    targetOffset: yi
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Sf,
    offset: [0, -4],
    targetOffset: yi
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Cf,
    offset: [-4, 0],
    targetOffset: yi
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Sf,
    offset: [0, -4],
    targetOffset: yi
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Cf,
    offset: [4, 0],
    targetOffset: yi
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Sf,
    offset: [0, 4],
    targetOffset: yi
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Cf,
    offset: [4, 0],
    targetOffset: yi
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Sf,
    offset: [0, 4],
    targetOffset: yi
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Cf,
    offset: [-4, 0],
    targetOffset: yi
  }
}, a4 = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], i4 = function(o, s) {
  var c = o.overlayClassName, d = o.trigger, m = d === void 0 ? ["hover"] : d, h = o.mouseEnterDelay, C = h === void 0 ? 0 : h, x = o.mouseLeaveDelay, E = x === void 0 ? 0.1 : x, M = o.overlayStyle, _ = o.prefixCls, N = _ === void 0 ? "rc-tooltip" : _, L = o.children, H = o.onVisibleChange, V = o.afterVisibleChange, A = o.transitionName, G = o.animation, $ = o.motion, z = o.placement, P = z === void 0 ? "right" : z, I = o.align, Y = I === void 0 ? {} : I, q = o.destroyTooltipOnHide, ne = q === void 0 ? !1 : q, oe = o.defaultVisible, re = o.getTooltipContainer, ge = o.overlayInnerStyle;
  o.arrowContent;
  var pe = o.overlay, te = o.id, se = o.showArrow, de = se === void 0 ? !0 : se, Ce = Fn(o, a4), ke = Ka(null);
  KT(s, function() {
    return ke.current;
  });
  var we = Te({}, Ce);
  "visible" in o && (we.popupVisible = o.visible);
  var Ae = function() {
    return /* @__PURE__ */ T.createElement(ak, {
      key: "content",
      prefixCls: N,
      id: te,
      overlayInnerStyle: ge
    }, pe);
  };
  return /* @__PURE__ */ T.createElement(t_, an({
    popupClassName: c,
    prefixCls: N,
    popup: Ae,
    action: m,
    builtinPlacements: r4,
    popupPlacement: P,
    ref: ke,
    popupAlign: Y,
    getPopupContainer: re,
    onPopupVisibleChange: H,
    afterPopupVisibleChange: V,
    popupTransitionName: A,
    popupAnimation: G,
    popupMotion: $,
    defaultPopupVisible: oe,
    autoDestroy: ne,
    mouseLeaveDelay: E,
    popupStyle: M,
    mouseEnterDelay: C,
    arrow: de
  }, we), L);
};
const o4 = /* @__PURE__ */ rA(i4), ik = /* @__PURE__ */ Ma.createContext(void 0);
process.env.NODE_ENV !== "production" && (ik.displayName = "zIndexContext");
const ok = ik, Gs = 100, l4 = 10, u4 = Gs * l4, lk = {
  Modal: Gs,
  Drawer: Gs,
  Popover: Gs,
  Popconfirm: Gs,
  Tooltip: Gs,
  Tour: Gs
}, s4 = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function c4(r) {
  return r in lk;
}
function f4(r, o) {
  const [, s] = Js(), c = Ma.useContext(ok), d = c4(r);
  if (o !== void 0)
    return [o, o];
  let m = c != null ? c : 0;
  return d ? (m += // Use preset token zIndex by default but not stack when has parent container
  (c ? 0 : s.zIndexPopupBase) + // Container offset
  lk[r], m = Math.min(m, s.zIndexPopupBase + u4)) : m += s4[r], [c === void 0 ? o : m, m];
}
const d4 = (r, o, s) => s !== void 0 ? s : `${r}-${o}`;
function v4(r) {
  const {
    sizePopupArrow: o,
    borderRadiusXS: s,
    borderRadiusOuter: c
  } = r, d = o / 2, m = 0, h = d, C = c * 1 / Math.sqrt(2), x = d - c * (1 - 1 / Math.sqrt(2)), E = d - s * (1 / Math.sqrt(2)), M = c * (Math.sqrt(2) - 1) + s * (1 / Math.sqrt(2)), _ = 2 * d - E, N = M, L = 2 * d - C, H = x, V = 2 * d - m, A = h, G = d * Math.sqrt(2) + c * (Math.sqrt(2) - 2), $ = c * (Math.sqrt(2) - 1), z = `polygon(${$}px 100%, 50% ${$}px, ${2 * d - $}px 100%, ${$}px 100%)`, P = `path('M ${m} ${h} A ${c} ${c} 0 0 0 ${C} ${x} L ${E} ${M} A ${s} ${s} 0 0 1 ${_} ${N} L ${L} ${H} A ${c} ${c} 0 0 0 ${V} ${A} Z')`;
  return {
    arrowShadowWidth: G,
    arrowPath: P,
    arrowPolygon: z
  };
}
const p4 = (r, o, s) => {
  const {
    sizePopupArrow: c,
    arrowPolygon: d,
    arrowPath: m,
    arrowShadowWidth: h,
    borderRadiusXS: C,
    calc: x
  } = r;
  return {
    pointerEvents: "none",
    width: c,
    height: c,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: c,
      height: x(c).div(2).equal(),
      background: o,
      clipPath: {
        _multi_value_: !0,
        value: [d, m]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: h,
      height: h,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${qv(C)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: s,
      zIndex: 0,
      background: "transparent"
    }
  };
}, uk = 8;
function sk(r) {
  const {
    contentRadius: o,
    limitVerticalRadius: s
  } = r, c = o > 12 ? o + 2 : 12;
  return {
    arrowOffsetHorizontal: c,
    arrowOffsetVertical: s ? uk : c
  };
}
function rg(r, o) {
  return r ? o : {};
}
function h4(r, o, s) {
  const {
    componentCls: c,
    boxShadowPopoverArrow: d,
    arrowOffsetVertical: m,
    arrowOffsetHorizontal: h
  } = r, {
    arrowDistance: C = 0,
    arrowPlacement: x = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = s || {};
  return {
    [c]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${c}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, p4(r, o, d)), {
        "&:before": {
          background: o
        }
      })]
    }, rg(!!x.top, {
      [[`&-placement-top > ${c}-arrow`, `&-placement-topLeft > ${c}-arrow`, `&-placement-topRight > ${c}-arrow`].join(",")]: {
        bottom: C,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${c}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      [`&-placement-topLeft > ${c}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: h
        }
      },
      [`&-placement-topRight > ${c}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: h
        }
      }
    })), rg(!!x.bottom, {
      [[`&-placement-bottom > ${c}-arrow`, `&-placement-bottomLeft > ${c}-arrow`, `&-placement-bottomRight > ${c}-arrow`].join(",")]: {
        top: C,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${c}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      [`&-placement-bottomLeft > ${c}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: h
        }
      },
      [`&-placement-bottomRight > ${c}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: h
        }
      }
    })), rg(!!x.left, {
      [[`&-placement-left > ${c}-arrow`, `&-placement-leftTop > ${c}-arrow`, `&-placement-leftBottom > ${c}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: C
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${c}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${c}-arrow`]: {
        top: m
      },
      [`&-placement-leftBottom > ${c}-arrow`]: {
        bottom: m
      }
    })), rg(!!x.right, {
      [[`&-placement-right > ${c}-arrow`, `&-placement-rightTop > ${c}-arrow`, `&-placement-rightBottom > ${c}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: C
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${c}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${c}-arrow`]: {
        top: m
      },
      [`&-placement-rightBottom > ${c}-arrow`]: {
        bottom: m
      }
    }))
  };
}
function m4(r, o, s, c) {
  if (c === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const d = c && typeof c == "object" ? c : {}, m = {};
  switch (r) {
    case "top":
    case "bottom":
      m.shiftX = o.arrowOffsetHorizontal * 2 + s, m.shiftY = !0, m.adjustY = !0;
      break;
    case "left":
    case "right":
      m.shiftY = o.arrowOffsetVertical * 2 + s, m.shiftX = !0, m.adjustX = !0;
      break;
  }
  const h = Object.assign(Object.assign({}, m), d);
  return h.shiftX || (h.adjustX = !0), h.shiftY || (h.adjustY = !0), h;
}
const NT = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, g4 = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, y4 = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function b4(r) {
  const {
    arrowWidth: o,
    autoAdjustOverflow: s,
    arrowPointAtCenter: c,
    offset: d,
    borderRadius: m,
    visibleFirst: h
  } = r, C = o / 2, x = {};
  return Object.keys(NT).forEach((E) => {
    const M = c && g4[E] || NT[E], _ = Object.assign(Object.assign({}, M), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (x[E] = _, y4.has(E) && (_.autoArrow = !1), E) {
      case "top":
      case "topLeft":
      case "topRight":
        _.offset[1] = -C - d;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        _.offset[1] = C + d;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        _.offset[0] = -C - d;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        _.offset[0] = C + d;
        break;
    }
    const N = sk({
      contentRadius: m,
      limitVerticalRadius: !0
    });
    if (c)
      switch (E) {
        case "topLeft":
        case "bottomLeft":
          _.offset[0] = -N.arrowOffsetHorizontal - C;
          break;
        case "topRight":
        case "bottomRight":
          _.offset[0] = N.arrowOffsetHorizontal + C;
          break;
        case "leftTop":
        case "rightTop":
          _.offset[1] = -N.arrowOffsetHorizontal - C;
          break;
        case "leftBottom":
        case "rightBottom":
          _.offset[1] = N.arrowOffsetHorizontal + C;
          break;
      }
    _.overflow = m4(E, N, o, s), h && (_.htmlRegion = "visibleFirst");
  }), x;
}
const {
  isValidElement: Zv
} = T;
function S4(r) {
  return r && Zv(r) && r.type === T.Fragment;
}
function C4(r, o, s) {
  return Zv(r) ? /* @__PURE__ */ T.cloneElement(r, typeof s == "function" ? s(r.props || {}) : s) : o;
}
function ck(r, o) {
  return C4(r, r, o);
}
const E4 = /* @__PURE__ */ T.createContext(null), w4 = (r) => {
  let {
    children: o
  } = r;
  return /* @__PURE__ */ T.createElement(E4.Provider, {
    value: null
  }, o);
}, x4 = (r) => ({
  animationDuration: r,
  animationFillMode: "both"
}), T4 = (r) => ({
  animationDuration: r,
  animationFillMode: "both"
}), R4 = function(r, o, s, c) {
  const m = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${m}${r}-enter,
      ${m}${r}-appear
    `]: Object.assign(Object.assign({}, x4(c)), {
      animationPlayState: "paused"
    }),
    [`${m}${r}-leave`]: Object.assign(Object.assign({}, T4(c)), {
      animationPlayState: "paused"
    }),
    [`
      ${m}${r}-enter${r}-enter-active,
      ${m}${r}-appear${r}-appear-active
    `]: {
      animationName: o,
      animationPlayState: "running"
    },
    [`${m}${r}-leave${r}-leave-active`]: {
      animationName: s,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, _4 = new Ci("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), k4 = new Ci("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), DT = new Ci("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), AT = new Ci("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), M4 = new Ci("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), O4 = new Ci("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), N4 = new Ci("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), D4 = new Ci("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), A4 = new Ci("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), L4 = new Ci("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), P4 = new Ci("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), z4 = new Ci("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), I4 = {
  zoom: {
    inKeyframes: _4,
    outKeyframes: k4
  },
  "zoom-big": {
    inKeyframes: DT,
    outKeyframes: AT
  },
  "zoom-big-fast": {
    inKeyframes: DT,
    outKeyframes: AT
  },
  "zoom-left": {
    inKeyframes: N4,
    outKeyframes: D4
  },
  "zoom-right": {
    inKeyframes: A4,
    outKeyframes: L4
  },
  "zoom-up": {
    inKeyframes: M4,
    outKeyframes: O4
  },
  "zoom-down": {
    inKeyframes: P4,
    outKeyframes: z4
  }
}, H4 = (r, o) => {
  const {
    antCls: s
  } = r, c = `${s}-${o}`, {
    inKeyframes: d,
    outKeyframes: m
  } = I4[o];
  return [R4(c, d, m, o === "zoom-big-fast" ? r.motionDurationFast : r.motionDurationMid), {
    [`
        ${c}-enter,
        ${c}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: r.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${c}-leave`]: {
      animationTimingFunction: r.motionEaseInOutCirc
    }
  }];
}, $4 = (r) => {
  const {
    componentCls: o,
    // ant-tooltip
    tooltipMaxWidth: s,
    tooltipColor: c,
    tooltipBg: d,
    tooltipBorderRadius: m,
    zIndexPopup: h,
    controlHeight: C,
    boxShadowSecondary: x,
    paddingSM: E,
    paddingXS: M
  } = r;
  return [
    {
      [o]: Object.assign(Object.assign(Object.assign(Object.assign({}, E5(r)), {
        position: "absolute",
        zIndex: h,
        display: "block",
        width: "max-content",
        maxWidth: s,
        visibility: "visible",
        transformOrigin: "var(--arrow-x, 50%) var(--arrow-y, 50%)",
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": d,
        // Wrapper for the tooltip content
        [`${o}-inner`]: {
          minWidth: C,
          minHeight: C,
          padding: `${qv(r.calc(E).div(2).equal())} ${qv(M)}`,
          color: c,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: d,
          borderRadius: m,
          boxShadow: x,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${o}-inner`]: {
            borderRadius: r.min(m, uk)
          }
        },
        [`${o}-content`]: {
          position: "relative"
        }
      }), $5(r, (_, N) => {
        let {
          darkColor: L
        } = N;
        return {
          [`&${o}-${_}`]: {
            [`${o}-inner`]: {
              backgroundColor: L
            },
            [`${o}-arrow`]: {
              "--antd-arrow-background-color": L
            }
          }
        };
      })), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    h4(r, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${o}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: r.sizePopupArrow
      }
    }
  ];
}, U4 = (r) => Object.assign(Object.assign({
  zIndexPopup: r.zIndexPopupBase + 70
}, sk({
  contentRadius: r.borderRadius,
  limitVerticalRadius: !0
})), v4(qg(r, {
  borderRadiusOuter: Math.min(r.borderRadiusOuter, 4)
}))), fk = function(r) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return H5("Tooltip", (c) => {
    const {
      borderRadius: d,
      colorTextLightSolid: m,
      colorBgSpotlight: h
    } = c, C = qg(c, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: m,
      tooltipBorderRadius: d,
      tooltipBg: h
    });
    return [$4(C), H4(c, "zoom-big-fast")];
  }, U4, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: o
  })(r);
}, j4 = Sg.map((r) => `${r}-inverse`);
function F4(r) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(ar(j4), ar(Sg)).includes(r) : Sg.includes(r);
}
function dk(r, o) {
  const s = F4(o), c = wn({
    [`${r}-${o}`]: o && s
  }), d = {}, m = {};
  return o && !s && (d.background = o, m["--antd-arrow-background-color"] = o), {
    className: c,
    overlayStyle: d,
    arrowStyle: m
  };
}
const V4 = (r) => {
  const {
    prefixCls: o,
    className: s,
    placement: c = "top",
    title: d,
    color: m,
    overlayInnerStyle: h
  } = r, {
    getPrefixCls: C
  } = T.useContext(ec), x = C("tooltip", o), [E, M, _] = fk(x), N = dk(x, m), L = N.arrowStyle, H = Object.assign(Object.assign({}, h), N.overlayStyle), V = wn(M, _, x, `${x}-pure`, `${x}-placement-${c}`, s, N.className);
  return E(/* @__PURE__ */ T.createElement("div", {
    className: V,
    style: L
  }, /* @__PURE__ */ T.createElement("div", {
    className: `${x}-arrow`
  }), /* @__PURE__ */ T.createElement(ak, Object.assign({}, r, {
    className: M,
    prefixCls: x,
    overlayInnerStyle: H
  }), d)));
}, B4 = V4;
var W4 = function(r, o) {
  var s = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (s[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (s[c[d]] = r[c[d]]);
  return s;
};
const z1 = /* @__PURE__ */ T.forwardRef((r, o) => {
  var s, c;
  const {
    prefixCls: d,
    openClassName: m,
    getTooltipContainer: h,
    overlayClassName: C,
    color: x,
    overlayInnerStyle: E,
    children: M,
    afterOpenChange: _,
    afterVisibleChange: N,
    destroyTooltipOnHide: L,
    arrow: H = !0,
    title: V,
    overlay: A,
    builtinPlacements: G,
    arrowPointAtCenter: $ = !1,
    autoAdjustOverflow: z = !0
  } = r, P = !!H, [, I] = Js(), {
    getPopupContainer: Y,
    getPrefixCls: q,
    direction: ne
  } = T.useContext(ec), oe = Wg("Tooltip"), re = T.useRef(null), ge = () => {
    var ot;
    (ot = re.current) === null || ot === void 0 || ot.forceAlign();
  };
  T.useImperativeHandle(o, () => ({
    forceAlign: ge,
    forcePopupAlign: () => {
      oe.deprecated(!1, "forcePopupAlign", "forceAlign"), ge();
    }
  })), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((ot) => {
    let [Wt, Qt] = ot;
    oe.deprecated(!(Wt in r), Wt, Qt);
  }), process.env.NODE_ENV !== "production" && oe(!L || typeof L == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && oe(!H || typeof H == "boolean" || !("arrowPointAtCenter" in H), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [pe, te] = Uv(!1, {
    value: (s = r.open) !== null && s !== void 0 ? s : r.visible,
    defaultValue: (c = r.defaultOpen) !== null && c !== void 0 ? c : r.defaultVisible
  }), se = !V && !A && V !== 0, de = (ot) => {
    var Wt, Qt;
    te(se ? !1 : ot), se || ((Wt = r.onOpenChange) === null || Wt === void 0 || Wt.call(r, ot), (Qt = r.onVisibleChange) === null || Qt === void 0 || Qt.call(r, ot));
  }, Ce = T.useMemo(() => {
    var ot, Wt;
    let Qt = $;
    return typeof H == "object" && (Qt = (Wt = (ot = H.pointAtCenter) !== null && ot !== void 0 ? ot : H.arrowPointAtCenter) !== null && Wt !== void 0 ? Wt : $), G || b4({
      arrowPointAtCenter: Qt,
      autoAdjustOverflow: z,
      arrowWidth: P ? I.sizePopupArrow : 0,
      borderRadius: I.borderRadius,
      offset: I.marginXXS,
      visibleFirst: !0
    });
  }, [$, H, G, I]), ke = T.useMemo(() => V === 0 ? V : A || V || "", [A, V]), we = /* @__PURE__ */ T.createElement(w4, null, typeof ke == "function" ? ke() : ke), {
    getPopupContainer: Ae,
    placement: ze = "top",
    mouseEnterDelay: ie = 0.1,
    mouseLeaveDelay: he = 0.1,
    overlayStyle: Se,
    rootClassName: Ie
  } = r, Ke = W4(r, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), Xe = q("tooltip", d), it = q(), Be = r["data-popover-inject"];
  let nt = pe;
  !("open" in r) && !("visible" in r) && se && (nt = !1);
  const Nt = Zv(M) && !S4(M) ? M : /* @__PURE__ */ T.createElement("span", null, M), He = Nt.props, et = !He.className || typeof He.className == "string" ? wn(He.className, m || `${Xe}-open`) : He.className, [Bt, Ee, mt] = fk(Xe, !Be), Dt = dk(Xe, x), It = Dt.arrowStyle, $t = Object.assign(Object.assign({}, E), Dt.overlayStyle), Ze = wn(C, {
    [`${Xe}-rtl`]: ne === "rtl"
  }, Dt.className, Ie, Ee, mt), [kt, gt] = f4("Tooltip", Ke.zIndex), Zt = /* @__PURE__ */ T.createElement(o4, Object.assign({}, Ke, {
    zIndex: kt,
    showArrow: P,
    placement: ze,
    mouseEnterDelay: ie,
    mouseLeaveDelay: he,
    prefixCls: Xe,
    overlayClassName: Ze,
    overlayStyle: Object.assign(Object.assign({}, It), Se),
    getTooltipContainer: Ae || h || Y,
    ref: re,
    builtinPlacements: Ce,
    overlay: we,
    visible: nt,
    onVisibleChange: de,
    afterVisibleChange: _ != null ? _ : N,
    overlayInnerStyle: $t,
    arrowContent: /* @__PURE__ */ T.createElement("span", {
      className: `${Xe}-arrow-content`
    }),
    motion: {
      motionName: d4(it, "zoom-big-fast", r.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!L
  }), nt ? ck(Nt, {
    className: et
  }) : Nt);
  return Bt(/* @__PURE__ */ T.createElement(ok.Provider, {
    value: gt
  }, Zt));
});
process.env.NODE_ENV !== "production" && (z1.displayName = "Tooltip");
z1._InternalPanelDoNotUseOrYouWillBeFired = B4;
const K4 = z1, G4 = /* @__PURE__ */ wg({
  prefixCls: "",
  firstLevel: !0,
  inlineCollapsed: !1
}), q4 = G4, Y4 = (r) => {
  var o;
  const {
    className: s,
    children: c,
    icon: d,
    title: m,
    danger: h
  } = r, {
    prefixCls: C,
    firstLevel: x,
    direction: E,
    disableMenuItemTitleTooltip: M,
    inlineCollapsed: _
  } = T.useContext(q4), N = ($) => {
    const z = /* @__PURE__ */ T.createElement("span", {
      className: `${C}-title-content`
    }, c);
    return (!d || Zv(c) && c.type === "span") && c && $ && x && typeof c == "string" ? /* @__PURE__ */ T.createElement("div", {
      className: `${C}-inline-collapsed-noicon`
    }, c.charAt(0)) : z;
  }, {
    siderCollapsed: L
  } = T.useContext(rk);
  let H = m;
  typeof m == "undefined" ? H = x ? c : "" : m === !1 && (H = "");
  const V = {
    title: H
  };
  !L && !_ && (V.title = null, V.open = !1);
  const A = Bv(c).length;
  let G = /* @__PURE__ */ T.createElement(zg, Object.assign({}, Pg(r, ["title", "icon", "danger"]), {
    className: wn({
      [`${C}-item-danger`]: h,
      [`${C}-item-only-child`]: (d ? A + 1 : A) === 1
    }, s),
    title: typeof m == "string" ? m : void 0
  }), ck(d, {
    className: wn(Zv(d) ? (o = d.props) === null || o === void 0 ? void 0 : o.className : "", `${C}-item-icon`)
  }), N(_));
  return M || (G = /* @__PURE__ */ T.createElement(K4, Object.assign({}, V, {
    placement: E === "rtl" ? "left" : "right",
    overlayClassName: `${C}-inline-collapsed-tooltip`
  }), G)), G;
}, G3 = Y4, I1 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(JD, Ne({}, r)) }), q3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(eA, Ne({}, r)) }), Y3 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(tA, Ne({}, r)) });
function H1(r) {
  var o;
  return /* @__PURE__ */ ka(Ll, { vertical: !0, className: "globalNavigation__icon " + ((o = r.className) != null ? o : ""), onClick: r.onClick, children: [
    r.icon,
    !r.hideLabel && /* @__PURE__ */ B("span", { className: "globalNavigation__iconLabel", children: r.label })
  ] });
}
function Q4(r) {
  return /* @__PURE__ */ ka(Ll, { vertical: !0, className: "globalNavigation__suiteLogo", children: [
    /* @__PURE__ */ B(H1, { icon: r.icon, label: "", hideLabel: !0, className: "globalNavigation__icon--suiteLogo" }),
    r.label,
    /* @__PURE__ */ B("div", { className: "globalNavigation__divider" })
  ] });
}
const Cg = (r) => /* @__PURE__ */ T.createElement("svg", Ne({ id: "mpLogo", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 202.8 169", xmlSpace: "preserve" }, r), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "135.2,126.7 135.2,169 202.8,126.7 202.8,84.5" }), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "67.6,126.7 67.6,169 135.2,126.7 135.2,84.5" }), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "0,126.7 0,169 67.6,126.7 67.6,84.5" }), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "202.8,0 135.2,42.2 135.2,84.5 202.8,42.2" }), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "135.2,0 67.6,42.2 67.6,84.5 135.2,42.2" }), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "67.6,0 0,42.2 0,84.5 67.6,42.2" }));
function X4(r) {
  return /* @__PURE__ */ B("span", { className: "globalNavigation__search", onClick: r.onClick, children: /* @__PURE__ */ B(
    Tg,
    {
      placement: "right",
      title: /* @__PURE__ */ ka(bA, { size: "large", children: [
        /* @__PURE__ */ B(Al, { children: "Search" }),
        /* @__PURE__ */ B(Al, { children: "Ctrl + K" })
      ] }),
      children: /* @__PURE__ */ B(Ll, { className: "globalNavigation__searchButtonWrapper", children: /* @__PURE__ */ B(xg, { className: "globalNavigation__searchButton", shape: "round", icon: /* @__PURE__ */ B(Cg, {}) }) })
    }
  ) });
}
function Z4(r) {
  return /* @__PURE__ */ ka(Al, { children: [
    r.type === "link" && /* @__PURE__ */ B(Tg, { title: r.hideLabel ? r.label : void 0, placement: "right", children: /* @__PURE__ */ B(
      H1,
      {
        className: `globalNavigation__item ${r.isActive ? " globalNavigation__item--active" : ""}`,
        icon: r.icon,
        label: r.label,
        onClick: r.onClick,
        hideLabel: r.hideLabel
      }
    ) }),
    r.type === "menu" && /* @__PURE__ */ B(u1, { items: r.items })
  ] });
}
function u1(r) {
  return /* @__PURE__ */ B(Ll, { vertical: !0, children: r.items.map((o, s) => /* @__PURE__ */ ka(Al, { children: [
    o.type === "link" && /* @__PURE__ */ aA(Z4, gi(Ne({}, o), { key: s })),
    o.type === "menu" && /* @__PURE__ */ B(
      I1,
      {
        expandIcon: o.isNestedMenu ? !0 : null,
        items: [J4(o, s)],
        className: "globalNavigation__menu"
      },
      s
    )
  ] })) });
}
function J4(r, o) {
  let s;
  return r.type === "menu" && r.children && (s = r.children.map((c, d) => Ne({
    key: `${String(c.label)}${d}`
  }, c)), s.unshift({ label: r.label, type: "group", key: r.label + "_groupTitle" })), {
    icon: /* @__PURE__ */ B(
      H1,
      {
        icon: r.icon,
        label: r.label,
        onClick: r.onClick,
        hideLabel: r.hideLabel
      }
    ),
    className: "globalNavigation__item" + (r.isActive ? " globalNavigation__item--active" : ""),
    key: `${r.label}${o}`,
    children: s
  };
}
function e3(r) {
  const o = r.createItems.map((c) => {
    if (c.type === "group")
      return { label: c.label, key: c.label, type: c.type };
    const d = c.isLocked, m = c.disabled;
    let h = "navigationCreate__item";
    return (m != null ? m : d) && (h += " navigationCreate__item--disabled"), {
      key: c.description,
      className: h,
      disabled: c.disabled,
      onClick: (C) => {
        var x;
        c.disabled || ((x = c.onClick) == null || x.call(c), C.domEvent.stopPropagation(), C.domEvent.preventDefault());
      },
      label: /* @__PURE__ */ B(Tg, { title: c.tooltip, children: /* @__PURE__ */ ka(v1, { vertical: !0, gap: "middle", justify: "center", children: [
        /* @__PURE__ */ ka("span", { className: "navigationCreate__itemTitle", children: [
          c.title,
          c.isLoading && /* @__PURE__ */ B(vA, { className: "navigationCreate__itemLoading", size: "small" }),
          d && /* @__PURE__ */ B(Cg, {})
        ] }),
        /* @__PURE__ */ B("span", { className: "navigationCreate__itemDescription", children: c.description })
      ] }) })
    };
  });
  return /* @__PURE__ */ B(Ll, { children: /* @__PURE__ */ B(
    I1,
    {
      className: " globalNavigation__item globalNavigation__item--createNew",
      items: [
        {
          key: "NavigationCreate",
          popupClassName: "navigationCreate__popup",
          icon: /* @__PURE__ */ B(Ll, { className: "navigationCreate__popupButtonWrapper", style: { pointerEvents: "none" }, children: /* @__PURE__ */ B(xg, { className: "navigationCreate__popupButton", icon: /* @__PURE__ */ B(Cg, {}) }) }),
          children: o
        }
      ],
      expandIcon: null
    }
  ) });
}
function t3(r = "") {
  var s;
  const o = new RegExp(
    "^(\\w)\\w*\\b.*\\s(\\w)[\\w-]*$",
    "i"
  );
  return (s = r.replace(o, "$1$2")) == null ? void 0 : s.toUpperCase();
}
const n3 = (r, o) => {
  let s;
  return (...c) => {
    window.clearTimeout(s), s = window.setTimeout(() => {
      r(...c);
    }, o);
  };
};
function r3(r) {
  const [o, s] = Wo(""), [c, d] = Wo(r.orgs);
  Bo(() => {
    d(r.orgs);
  }, r.orgs);
  const m = Ml(n3(d, 200), []), h = wS(
    () => H(),
    c
  ), C = {
    key: "search",
    className: "workspaceSelector__search",
    label: /* @__PURE__ */ B(
      tp,
      {
        placeholder: "Search",
        className: "workspaceSelector__searchInput",
        onChange: V,
        value: o,
        onClick: (G) => {
          G.preventDefault(), G.stopPropagation();
        }
      }
    )
  }, x = {
    key: "signout",
    className: "workspaceSelector__signout",
    label: /* @__PURE__ */ B(
      xg,
      {
        className: "workspaceSelector__signoutButton",
        type: "primary",
        onClick: (G) => {
          var $;
          ($ = r.signout) == null || $.call(r);
        },
        children: "Sign Out of mParticle"
      }
    )
  }, E = {
    key: "no-results",
    className: "workspaceSelector__noResults",
    label: /* @__PURE__ */ B(Ll, { children: /* @__PURE__ */ B(XT, { status: "info", title: "No results found" }) })
  }, M = !!o && !c.length, _ = [
    C,
    ...M ? [E] : h,
    r.signout ? x : null
  ];
  let N = r.orgs.flatMap((G) => {
    let $ = [];
    const { accounts: z } = G;
    if (z) {
      const P = z.flatMap(({ workspaces: I }) => I);
      $ = $.concat(P);
    }
    return $;
  }).find((G) => G.isActive);
  const L = [
    {
      key: "WorkspaceSelector",
      icon: /* @__PURE__ */ B(YT, { className: "workspaceSelector__avatar", children: t3(N == null ? void 0 : N.label) }),
      popupClassName: "workspaceSelector",
      children: _
    }
  ];
  return /* @__PURE__ */ B(
    I1,
    {
      className: "globalNavigation__menu globalNavigation__item globalNavigation__item--workspaceSelector",
      items: L,
      onOpenChange: A,
      expandIcon: null
    }
  );
  function H(G) {
    return c.reduce(($, z) => ($.push({
      type: "org",
      className: "workspaceSelector__orgName" + (z.label ? "" : " u-display-none"),
      label: z.label,
      id: z.id,
      key: z.id,
      accounts: z.accounts,
      workspaces: z.accounts.flatMap((P) => P.workspaces)
    }), z.accounts.forEach((P) => {
      $.push({
        type: "account",
        className: "workspaceSelector__accountName" + (P.label ? "" : " u-display-none"),
        label: P.label,
        id: P.id,
        key: P.id,
        workspaces: P.workspaces
      }), P.workspaces.forEach((I) => {
        $.push({
          type: "workspace",
          className: "workspaceSelector__workspaceName" + (I.isActive ? " workspaceSelector__workspaceName--active" : ""),
          label: I.label,
          id: I.id,
          key: I.id,
          onClick: I.onClick
        });
      });
    }), $), []);
  }
  function V(G) {
    const $ = G.target.value.toLowerCase();
    if (s($), $) {
      const P = z();
      m(P);
    } else
      d(r.orgs);
    function z() {
      return r.orgs.reduce((I, Y) => {
        if (P(Y))
          I.push(Y);
        else {
          const q = Ne({}, Y);
          q.accounts = [], Y.accounts.forEach((ne) => {
            const oe = Ne({}, ne);
            oe.workspaces = [], P(ne) ? q.accounts.push(ne) : (ne.workspaces.forEach((re) => {
              P(re) && oe.workspaces.push(re);
            }), oe.workspaces.length && q.accounts.push(oe));
          }), q.accounts.length && I.push(q);
        }
        return I;
      }, []);
      function P(I) {
        return !!I.label && I.label.toString().toLowerCase().includes($) || !!I.id && I.id.toString().toLowerCase().includes($);
      }
    }
  }
  function A() {
    s(""), d(r.orgs);
  }
}
const a3 = 90, Q3 = (r) => /* @__PURE__ */ B(Rf, { className: "globalNavigation", children: /* @__PURE__ */ B(Rf.Sider, { className: "globalNavigation__sider", width: a3, children: /* @__PURE__ */ ka(v1, { vertical: !0, justify: "space-between", style: { height: "100%" }, children: [
  /* @__PURE__ */ ka("div", { children: [
    /* @__PURE__ */ B(Q4, Ne({}, r.logo)),
    /* @__PURE__ */ ka(Ll, { vertical: !0, children: [
      r.onSearchClick && /* @__PURE__ */ B(X4, { onClick: r.onSearchClick }),
      r.createItems && /* @__PURE__ */ B(e3, { createItems: r.createItems })
    ] }),
    /* @__PURE__ */ B(u1, { items: r.tools })
  ] }),
  /* @__PURE__ */ ka("div", { children: [
    /* @__PURE__ */ B(u1, { items: r.management }),
    r.orgs && /* @__PURE__ */ B(r3, { orgs: r.orgs, signout: r.signout }),
    !r.hideMpHome && /* @__PURE__ */ B(Tg, { title: "mParticle Overview", placement: "right", children: /* @__PURE__ */ B(Ll, { className: "globalNavigation__mpHome", children: /* @__PURE__ */ B(
      Cg,
      {
        className: "globalNavigation__mpSvg",
        onClick: () => {
          r.onMpHomeClick();
        }
      }
    ) }) })
  ] })
] }) }) });
export {
  q3 as Affix,
  mA as Alert,
  W3 as Anchor,
  Y3 as App,
  S3 as AutoComplete,
  YT as Avatar,
  cA as Badge,
  CA as Breadcrumb,
  xg as Button,
  T3 as Calendar,
  qT as Card,
  M3 as Carousel,
  d1 as Cascader,
  Ll as Center,
  lA as Checkbox,
  J3 as Col,
  w3 as Collapse,
  p3 as ColorPicker,
  Qe as ConfigProvider,
  m3 as DatePicker,
  fA as Descriptions,
  V3 as Divider,
  $3 as Drawer,
  SA as Dropdown,
  QT as Empty,
  v1 as Flex,
  c3 as FloatButton,
  Au as Form,
  a3 as GlobalNavWidth,
  Q3 as GlobalNavigation,
  eH as Grid,
  D3 as Image,
  tp as Input,
  g3 as InputNumber,
  Rf as Layout,
  dA as List,
  F3 as LoadingModal,
  oA as Mentions,
  I1 as Menu,
  G3 as MenuItem,
  j3 as Message,
  hA as Modal,
  U3 as Notification,
  K3 as Pagination,
  H3 as Popconfirm,
  P3 as Popover,
  z3 as Progress,
  A3 as QRCode,
  GT as Radio,
  f3 as Rate,
  XT as Result,
  tH as Row,
  R3 as Segmented,
  v3 as Select,
  pA as Skeleton,
  h3 as Slider,
  bA as Space,
  vA as Spin,
  O3 as Statistic,
  B3 as Steps,
  y3 as Switch,
  L3 as Table,
  _3 as Tabs,
  uA as Tag,
  C3 as TimePicker,
  x3 as Timeline,
  Tg as Tooltip,
  k3 as Tour,
  E3 as Transfer,
  N3 as Tree,
  d3 as TreeSelect,
  b3 as Upload,
  I3 as Watermark
};
