import { jsx as s, Fragment as K, jsxs as V } from "react/jsx-runtime";
import { ConfigProvider as Gt, Button as Fr, FloatButton as zr, Rate as Yr, Form as Wr, TreeSelect as Ur, Select as Br, Mentions as Gr, Radio as Bn, ColorPicker as qr, Slider as Xr, Cascader as sn, DatePicker as Vr, Checkbox as qt, Input as Me, InputNumber as Kr, Switch as Qr, Upload as Jr, AutoComplete as Zr, TimePicker as ea, Transfer as na, Collapse as ta, Timeline as ra, Calendar as aa, Segmented as ia, Tabs as oa, Tag as Xt, Tour as sa, Carousel as la, Tooltip as fa, Statistic as ca, Tree as ua, Image as da, QRCode as ma, Badge as Vt, Card as va, Avatar as pa, Descriptions as ga, Table as ba, Empty as Gn, Popover as ha, List as Kt, Progress as ya, Result as wa, Spin as ka, Skeleton as xa, Watermark as Sa, Popconfirm as Aa, Drawer as Ea, Modal as Ta, notification as Pa, Alert as Qt, message as Ca, Flex as Oa, Divider as Ia, Space as _a, Layout as $e, Steps as Ra, Anchor as Na, Dropdown as Jt, Breadcrumb as Zt, Pagination as Ma, Menu as $a, Affix as La, App as Da } from "antd";
import { Col as cl, Grid as ul, Row as dl } from "antd";
import er, { useEffect as ja, useState as bn } from "react";
const Ha = {
  token: {
    colorFillContent: "rgba(0, 0, 0, 0.03999999910593033)",
    colorFillAlter: "#f8f6fb",
    colorBgContainerDisabled: "rgba(0, 0, 0, 0)",
    colorLinkHover: "#5f29f8",
    controlOutline: "rgba(0.21176470816135406, 0, 0.8196078538894653, 0.10000000149011612)",
    controlItemBgHover: "#ebe8f8",
    controlItemBgActive: "#ebe8f8",
    colorTextSecondary: "rgba(0, 0, 0, 0.6399999856948853)",
    colorTextTertiary: "rgba(0, 0, 0, 0.47999998927116394)",
    colorTextQuaternary: "rgba(0, 0, 0, 0.23999999463558197)",
    colorFill: "rgba(0, 0, 0, 0.1599999964237213)",
    colorFillSecondary: "#ebe8f8",
    colorFillTertiary: "rgba(0, 0, 0, 0.07999999821186066)",
    colorFillQuaternary: "rgba(0, 0, 0, 0)",
    colorBgLayout: "#ffffff",
    colorBgSpotlight: "rgba(0, 0, 0, 0.6399999856948853)",
    colorBorder: "#c3aeff",
    colorBorderSecondary: "rgba(0, 0, 0, 0.07999999821186066)",
    colorSplit: "rgba(0, 0, 0, 0.07999999821186066)",
    colorBgMask: "rgba(0, 0, 0, 0.23999999463558197)",
    colorTextBase: "#0f0e0e",
    colorPrimary: "#3600d1",
    colorError: "#d95b7c",
    colorWarning: "#f09362",
    colorSuccess: "#5aac6b",
    colorInfo: "#456095",
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
    borderRadiusMD: 6,
    fontFamilyCode: "'RobotoMono', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    "gray.1": "#ffffff",
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
    "whiteAlpha.12": "#ffffff",
    "blackAlpha.2": "rgba(0, 0, 0, 0.03999999910593033)",
    "blackAlpha.12": "#000000",
    colorDisabled: "rgba(0, 0, 0, 0.47999998927116394)"
  },
  components: {
    Menu: {
      controlHeightSM: 32,
      darkItemBg: "#0f0e0e",
      itemSelectedColor: "#0f0e0e",
      lineHeight: 1.5700000524520874
    },
    Button: {
      onlyIconSizeLG: 20,
      onlyIconSizeSM: 12,
      paddingInline: 16,
      paddingInlineLG: 16,
      paddingInlineSM: 8,
      lineHeight: 1.5700000524520874
    },
    Spin: {
      lineHeight: 1.5700000524520874
    },
    Result: {
      lineHeight: 1.5700000524520874,
      lineHeightHeading3: 1.3300000429153442
    },
    Progress: {
      lineHeight: 1.5700000524520874,
      defaultColor: "#3600d1"
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
    Pagination: {
      lineHeight: 1.5700000524520874
    },
    Steps: {
      lineHeight: 1.5700000524520874
    },
    Cascader: {
      lineHeight: 1.5700000524520874
    },
    Checkbox: {
      lineHeight: 1.5700000524520874
    },
    DatePicker: {
      lineHeight: 1.5700000524520874
    },
    Form: {
      lineHeight: 1.5700000524520874
    },
    Input: {
      lineHeight: 1.5700000524520874,
      paddingBlockLG: 8,
      paddingInline: 12,
      paddingInlineLG: 12,
      paddingInlineSM: 8
    },
    InputNumber: {
      paddingBlockLG: 8,
      paddingInline: 12,
      paddingInlineLG: 12,
      paddingInlineSM: 8,
      lineHeight: 1.5700000524520874
    },
    Radio: {
      lineHeight: 1.5700000524520874
    },
    Rate: {
      lineHeight: 1.5700000524520874
    },
    Upload: {
      lineHeight: 1.5700000524520874
    },
    TreeSelect: {
      lineHeight: 1.5700000524520874
    },
    Transfer: {
      lineHeight: 1.5700000524520874,
      listWidth: 200
    },
    Select: {
      lineHeight: 1.5700000524520874,
      optionLineHeight: 1.5700000524520874
    },
    Slider: {
      lineHeight: 1.5700000524520874
    },
    Switch: {
      lineHeight: 1.5700000524520874
    },
    TimePicker: {
      lineHeight: 1.5700000524520874
    },
    Avatar: {
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
    Segmented: {
      lineHeight: 1.5700000524520874
    },
    Statistic: {
      lineHeight: 1.5700000524520874
    },
    Table: {
      lineHeight: 1.5700000524520874,
      footerBg: "#f8f6fb",
      headerBg: "#f8f6fb"
    },
    Tabs: {
      lineHeight: 1.5700000524520874
    },
    Tag: {
      lineHeight: 1.5700000524520874
    },
    Timeline: {
      lineHeight: 1.5700000524520874
    },
    Tooltip: {
      lineHeight: 1.5700000524520874
    },
    Tour: {
      lineHeight: 1.5700000524520874
    },
    Tree: {
      lineHeight: 1.5700000524520874
    },
    AutoComplete: {
      lineHeight: 1.5700000524520874
    }
  }
}, b = (e) => /* @__PURE__ */ s(Gt, { ...e, theme: Ha }), Fa = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Fr, { ...e, children: e.children }) }), gs = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(zr, { ...e }) });
function ct(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function g(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? ct(Object(t), !0).forEach(function(r) {
      U(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ct(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function tn(e) {
  "@babel/helpers - typeof";
  return tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, tn(e);
}
function za(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function ut(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Ya(e, n, t) {
  return n && ut(e.prototype, n), t && ut(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function U(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function qn(e, n) {
  return Ua(e) || Ga(e, n) || nr(e, n) || Xa();
}
function Le(e) {
  return Wa(e) || Ba(e) || nr(e) || qa();
}
function Wa(e) {
  if (Array.isArray(e))
    return On(e);
}
function Ua(e) {
  if (Array.isArray(e))
    return e;
}
function Ba(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Ga(e, n) {
  var t = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (t != null) {
    var r = [], a = !0, i = !1, o, l;
    try {
      for (t = t.call(e); !(a = (o = t.next()).done) && (r.push(o.value), !(n && r.length === n)); a = !0)
        ;
    } catch (f) {
      i = !0, l = f;
    } finally {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return r;
  }
}
function nr(e, n) {
  if (e) {
    if (typeof e == "string")
      return On(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return On(e, n);
  }
}
function On(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function qa() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xa() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var dt = function() {
}, Xn = {}, tr = {}, rr = null, ar = {
  mark: dt,
  measure: dt
};
try {
  typeof window < "u" && (Xn = window), typeof document < "u" && (tr = document), typeof MutationObserver < "u" && (rr = MutationObserver), typeof performance < "u" && (ar = performance);
} catch {
}
var Va = Xn.navigator || {}, mt = Va.userAgent, vt = mt === void 0 ? "" : mt, le = Xn, Y = tr, pt = rr, Ue = ar;
le.document;
var ie = !!Y.documentElement && !!Y.head && typeof Y.addEventListener == "function" && typeof Y.createElement == "function", ir = ~vt.indexOf("MSIE") || ~vt.indexOf("Trident/"), Be, Ge, qe, Xe, Ve, te = "___FONT_AWESOME___", In = 16, or = "fa", sr = "svg-inline--fa", pe = "data-fa-i2svg", _n = "data-fa-pseudo-element", Ka = "data-fa-pseudo-element-pending", Vn = "data-prefix", Kn = "data-icon", gt = "fontawesome-i2svg", Qa = "async", Ja = ["HTML", "HEAD", "STYLE", "SCRIPT"], lr = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), z = "classic", W = "sharp", Qn = [z, W];
function De(e) {
  return new Proxy(e, {
    get: function(t, r) {
      return r in t ? t[r] : t[z];
    }
  });
}
var Oe = De((Be = {}, U(Be, z, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  fakd: "kit",
  "fa-kit": "kit",
  "fa-kit-duotone": "kit"
}), U(Be, W, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), Be)), Ie = De((Ge = {}, U(Ge, z, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), U(Ge, W, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), Ge)), _e = De((qe = {}, U(qe, z, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), U(qe, W, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), qe)), Za = De((Xe = {}, U(Xe, z, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), U(Xe, W, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Xe)), ei = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, fr = "fa-layers-text", ni = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, ti = De((Ve = {}, U(Ve, z, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), U(Ve, W, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), Ve)), cr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ri = cr.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ai = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], me = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Re = /* @__PURE__ */ new Set();
Object.keys(Ie[z]).map(Re.add.bind(Re));
Object.keys(Ie[W]).map(Re.add.bind(Re));
var ii = [].concat(Qn, Le(Re), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", me.GROUP, me.SWAP_OPACITY, me.PRIMARY, me.SECONDARY]).concat(cr.map(function(e) {
  return "".concat(e, "x");
})).concat(ri.map(function(e) {
  return "w-".concat(e);
})), Pe = le.FontAwesomeConfig || {};
function oi(e) {
  var n = Y.querySelector("script[" + e + "]");
  if (n)
    return n.getAttribute(e);
}
function si(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (Y && typeof Y.querySelector == "function") {
  var li = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  li.forEach(function(e) {
    var n = qn(e, 2), t = n[0], r = n[1], a = si(oi(t));
    a != null && (Pe[r] = a);
  });
}
var ur = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: or,
  replacementClass: sr,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
Pe.familyPrefix && (Pe.cssPrefix = Pe.familyPrefix);
var xe = g(g({}, ur), Pe);
xe.autoReplaceSvg || (xe.observeMutations = !1);
var y = {};
Object.keys(ur).forEach(function(e) {
  Object.defineProperty(y, e, {
    enumerable: !0,
    set: function(t) {
      xe[e] = t, Ce.forEach(function(r) {
        return r(y);
      });
    },
    get: function() {
      return xe[e];
    }
  });
});
Object.defineProperty(y, "familyPrefix", {
  enumerable: !0,
  set: function(n) {
    xe.cssPrefix = n, Ce.forEach(function(t) {
      return t(y);
    });
  },
  get: function() {
    return xe.cssPrefix;
  }
});
le.FontAwesomeConfig = y;
var Ce = [];
function fi(e) {
  return Ce.push(e), function() {
    Ce.splice(Ce.indexOf(e), 1);
  };
}
var oe = In, ne = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ci(e) {
  if (!(!e || !ie)) {
    var n = Y.createElement("style");
    n.setAttribute("type", "text/css"), n.innerHTML = e;
    for (var t = Y.head.childNodes, r = null, a = t.length - 1; a > -1; a--) {
      var i = t[a], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
    }
    return Y.head.insertBefore(n, r), e;
  }
}
var ui = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Ne() {
  for (var e = 12, n = ""; e-- > 0; )
    n += ui[Math.random() * 62 | 0];
  return n;
}
function Se(e) {
  for (var n = [], t = (e || []).length >>> 0; t--; )
    n[t] = e[t];
  return n;
}
function Jn(e) {
  return e.classList ? Se(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(n) {
    return n;
  });
}
function dr(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function di(e) {
  return Object.keys(e || {}).reduce(function(n, t) {
    return n + "".concat(t, '="').concat(dr(e[t]), '" ');
  }, "").trim();
}
function ln(e) {
  return Object.keys(e || {}).reduce(function(n, t) {
    return n + "".concat(t, ": ").concat(e[t].trim(), ";");
  }, "");
}
function Zn(e) {
  return e.size !== ne.size || e.x !== ne.x || e.y !== ne.y || e.rotate !== ne.rotate || e.flipX || e.flipY;
}
function mi(e) {
  var n = e.transform, t = e.containerWidth, r = e.iconWidth, a = {
    transform: "translate(".concat(t / 2, " 256)")
  }, i = "translate(".concat(n.x * 32, ", ").concat(n.y * 32, ") "), o = "scale(".concat(n.size / 16 * (n.flipX ? -1 : 1), ", ").concat(n.size / 16 * (n.flipY ? -1 : 1), ") "), l = "rotate(".concat(n.rotate, " 0 0)"), f = {
    transform: "".concat(i, " ").concat(o, " ").concat(l)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: f,
    path: u
  };
}
function vi(e) {
  var n = e.transform, t = e.width, r = t === void 0 ? In : t, a = e.height, i = a === void 0 ? In : a, o = e.startCentered, l = o === void 0 ? !1 : o, f = "";
  return l && ir ? f += "translate(".concat(n.x / oe - r / 2, "em, ").concat(n.y / oe - i / 2, "em) ") : l ? f += "translate(calc(-50% + ".concat(n.x / oe, "em), calc(-50% + ").concat(n.y / oe, "em)) ") : f += "translate(".concat(n.x / oe, "em, ").concat(n.y / oe, "em) "), f += "scale(".concat(n.size / oe * (n.flipX ? -1 : 1), ", ").concat(n.size / oe * (n.flipY ? -1 : 1), ") "), f += "rotate(".concat(n.rotate, "deg) "), f;
}
var pi = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function mr() {
  var e = or, n = sr, t = y.cssPrefix, r = y.replacementClass, a = pi;
  if (t !== e || r !== n) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(n), "g");
    a = a.replace(i, ".".concat(t, "-")).replace(o, "--".concat(t, "-")).replace(l, ".".concat(r));
  }
  return a;
}
var bt = !1;
function hn() {
  y.autoAddCss && !bt && (ci(mr()), bt = !0);
}
var gi = {
  mixout: function() {
    return {
      dom: {
        css: mr,
        insertCss: hn
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        hn();
      },
      beforeI2svg: function() {
        hn();
      }
    };
  }
}, re = le || {};
re[te] || (re[te] = {});
re[te].styles || (re[te].styles = {});
re[te].hooks || (re[te].hooks = {});
re[te].shims || (re[te].shims = []);
var J = re[te], vr = [], bi = function e() {
  Y.removeEventListener("DOMContentLoaded", e), rn = 1, vr.map(function(n) {
    return n();
  });
}, rn = !1;
ie && (rn = (Y.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Y.readyState), rn || Y.addEventListener("DOMContentLoaded", bi));
function hi(e) {
  ie && (rn ? setTimeout(e, 0) : vr.push(e));
}
function je(e) {
  var n = e.tag, t = e.attributes, r = t === void 0 ? {} : t, a = e.children, i = a === void 0 ? [] : a;
  return typeof e == "string" ? dr(e) : "<".concat(n, " ").concat(di(r), ">").concat(i.map(je).join(""), "</").concat(n, ">");
}
function ht(e, n, t) {
  if (e && e[n] && e[n][t])
    return {
      prefix: n,
      iconName: t,
      icon: e[n][t]
    };
}
var yi = function(n, t) {
  return function(r, a, i, o) {
    return n.call(t, r, a, i, o);
  };
}, yn = function(n, t, r, a) {
  var i = Object.keys(n), o = i.length, l = a !== void 0 ? yi(t, a) : t, f, u, c;
  for (r === void 0 ? (f = 1, c = n[i[0]]) : (f = 0, c = r); f < o; f++)
    u = i[f], c = l(c, n[u], u, n);
  return c;
};
function wi(e) {
  for (var n = [], t = 0, r = e.length; t < r; ) {
    var a = e.charCodeAt(t++);
    if (a >= 55296 && a <= 56319 && t < r) {
      var i = e.charCodeAt(t++);
      (i & 64512) == 56320 ? n.push(((a & 1023) << 10) + (i & 1023) + 65536) : (n.push(a), t--);
    } else
      n.push(a);
  }
  return n;
}
function Rn(e) {
  var n = wi(e);
  return n.length === 1 ? n[0].toString(16) : null;
}
function ki(e, n) {
  var t = e.length, r = e.charCodeAt(n), a;
  return r >= 55296 && r <= 56319 && t > n + 1 && (a = e.charCodeAt(n + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function yt(e) {
  return Object.keys(e).reduce(function(n, t) {
    var r = e[t], a = !!r.icon;
    return a ? n[r.iconName] = r.icon : n[t] = r, n;
  }, {});
}
function Nn(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = t.skipHooks, a = r === void 0 ? !1 : r, i = yt(n);
  typeof J.hooks.addPack == "function" && !a ? J.hooks.addPack(e, yt(n)) : J.styles[e] = g(g({}, J.styles[e] || {}), i), e === "fas" && Nn("fa", n);
}
var Ke, Qe, Je, he = J.styles, xi = J.shims, Si = (Ke = {}, U(Ke, z, Object.values(_e[z])), U(Ke, W, Object.values(_e[W])), Ke), et = null, pr = {}, gr = {}, br = {}, hr = {}, yr = {}, Ai = (Qe = {}, U(Qe, z, Object.keys(Oe[z])), U(Qe, W, Object.keys(Oe[W])), Qe);
function Ei(e) {
  return ~ii.indexOf(e);
}
function Ti(e, n) {
  var t = n.split("-"), r = t[0], a = t.slice(1).join("-");
  return r === e && a !== "" && !Ei(a) ? a : null;
}
var wr = function() {
  var n = function(i) {
    return yn(he, function(o, l, f) {
      return o[f] = yn(l, i, {}), o;
    }, {});
  };
  pr = n(function(a, i, o) {
    if (i[3] && (a[i[3]] = o), i[2]) {
      var l = i[2].filter(function(f) {
        return typeof f == "number";
      });
      l.forEach(function(f) {
        a[f.toString(16)] = o;
      });
    }
    return a;
  }), gr = n(function(a, i, o) {
    if (a[o] = o, i[2]) {
      var l = i[2].filter(function(f) {
        return typeof f == "string";
      });
      l.forEach(function(f) {
        a[f] = o;
      });
    }
    return a;
  }), yr = n(function(a, i, o) {
    var l = i[2];
    return a[o] = o, l.forEach(function(f) {
      a[f] = o;
    }), a;
  });
  var t = "far" in he || y.autoFetchSvg, r = yn(xi, function(a, i) {
    var o = i[0], l = i[1], f = i[2];
    return l === "far" && !t && (l = "fas"), typeof o == "string" && (a.names[o] = {
      prefix: l,
      iconName: f
    }), typeof o == "number" && (a.unicodes[o.toString(16)] = {
      prefix: l,
      iconName: f
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  br = r.names, hr = r.unicodes, et = fn(y.styleDefault, {
    family: y.familyDefault
  });
};
fi(function(e) {
  et = fn(e.styleDefault, {
    family: y.familyDefault
  });
});
wr();
function nt(e, n) {
  return (pr[e] || {})[n];
}
function Pi(e, n) {
  return (gr[e] || {})[n];
}
function ve(e, n) {
  return (yr[e] || {})[n];
}
function kr(e) {
  return br[e] || {
    prefix: null,
    iconName: null
  };
}
function Ci(e) {
  var n = hr[e], t = nt("fas", e);
  return n || (t ? {
    prefix: "fas",
    iconName: t
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function fe() {
  return et;
}
var tt = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function fn(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = n.family, r = t === void 0 ? z : t, a = Oe[r][e], i = Ie[r][e] || Ie[r][a], o = e in J.styles ? e : null;
  return i || o || null;
}
var wt = (Je = {}, U(Je, z, Object.keys(_e[z])), U(Je, W, Object.keys(_e[W])), Je);
function cn(e) {
  var n, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipLookups, a = r === void 0 ? !1 : r, i = (n = {}, U(n, z, "".concat(y.cssPrefix, "-").concat(z)), U(n, W, "".concat(y.cssPrefix, "-").concat(W)), n), o = null, l = z;
  (e.includes(i[z]) || e.some(function(u) {
    return wt[z].includes(u);
  })) && (l = z), (e.includes(i[W]) || e.some(function(u) {
    return wt[W].includes(u);
  })) && (l = W);
  var f = e.reduce(function(u, c) {
    var d = Ti(y.cssPrefix, c);
    if (he[c] ? (c = Si[l].includes(c) ? Za[l][c] : c, o = c, u.prefix = c) : Ai[l].indexOf(c) > -1 ? (o = c, u.prefix = fn(c, {
      family: l
    })) : d ? u.iconName = d : c !== y.replacementClass && c !== i[z] && c !== i[W] && u.rest.push(c), !a && u.prefix && u.iconName) {
      var w = o === "fa" ? kr(u.iconName) : {}, k = ve(u.prefix, u.iconName);
      w.prefix && (o = null), u.iconName = w.iconName || k || u.iconName, u.prefix = w.prefix || u.prefix, u.prefix === "far" && !he.far && he.fas && !y.autoFetchSvg && (u.prefix = "fas");
    }
    return u;
  }, tt());
  return (e.includes("fa-brands") || e.includes("fab")) && (f.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (f.prefix = "fad"), !f.prefix && l === W && (he.fass || y.autoFetchSvg) && (f.prefix = "fass", f.iconName = ve(f.prefix, f.iconName) || f.iconName), (f.prefix === "fa" || o === "fa") && (f.prefix = fe() || "fas"), f;
}
var Oi = /* @__PURE__ */ function() {
  function e() {
    za(this, e), this.definitions = {};
  }
  return Ya(e, [{
    key: "add",
    value: function() {
      for (var t = this, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
        a[i] = arguments[i];
      var o = a.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(l) {
        t.definitions[l] = g(g({}, t.definitions[l] || {}), o[l]), Nn(l, o[l]);
        var f = _e[z][l];
        f && Nn(f, o[l]), wr();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(t, r) {
      var a = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(a).map(function(i) {
        var o = a[i], l = o.prefix, f = o.iconName, u = o.icon, c = u[2];
        t[l] || (t[l] = {}), c.length > 0 && c.forEach(function(d) {
          typeof d == "string" && (t[l][d] = u);
        }), t[l][f] = u;
      }), t;
    }
  }]), e;
}(), kt = [], ye = {}, ke = {}, Ii = Object.keys(ke);
function _i(e, n) {
  var t = n.mixoutsTo;
  return kt = e, ye = {}, Object.keys(ke).forEach(function(r) {
    Ii.indexOf(r) === -1 && delete ke[r];
  }), kt.forEach(function(r) {
    var a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach(function(o) {
      typeof a[o] == "function" && (t[o] = a[o]), tn(a[o]) === "object" && Object.keys(a[o]).forEach(function(l) {
        t[o] || (t[o] = {}), t[o][l] = a[o][l];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function(o) {
        ye[o] || (ye[o] = []), ye[o].push(i[o]);
      });
    }
    r.provides && r.provides(ke);
  }), t;
}
function Mn(e, n) {
  for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), a = 2; a < t; a++)
    r[a - 2] = arguments[a];
  var i = ye[e] || [];
  return i.forEach(function(o) {
    n = o.apply(null, [n].concat(r));
  }), n;
}
function ge(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var a = ye[e] || [];
  a.forEach(function(i) {
    i.apply(null, t);
  });
}
function ae() {
  var e = arguments[0], n = Array.prototype.slice.call(arguments, 1);
  return ke[e] ? ke[e].apply(null, n) : void 0;
}
function $n(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var n = e.iconName, t = e.prefix || fe();
  if (n)
    return n = ve(t, n) || n, ht(xr.definitions, t, n) || ht(J.styles, t, n);
}
var xr = new Oi(), Ri = function() {
  y.autoReplaceSvg = !1, y.observeMutations = !1, ge("noAuto");
}, Ni = {
  i2svg: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ie ? (ge("beforeI2svg", n), ae("pseudoElements2svg", n), ae("i2svg", n)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.autoReplaceSvgRoot;
    y.autoReplaceSvg === !1 && (y.autoReplaceSvg = !0), y.observeMutations = !0, hi(function() {
      $i({
        autoReplaceSvgRoot: t
      }), ge("watch", n);
    });
  }
}, Mi = {
  icon: function(n) {
    if (n === null)
      return null;
    if (tn(n) === "object" && n.prefix && n.iconName)
      return {
        prefix: n.prefix,
        iconName: ve(n.prefix, n.iconName) || n.iconName
      };
    if (Array.isArray(n) && n.length === 2) {
      var t = n[1].indexOf("fa-") === 0 ? n[1].slice(3) : n[1], r = fn(n[0]);
      return {
        prefix: r,
        iconName: ve(r, t) || t
      };
    }
    if (typeof n == "string" && (n.indexOf("".concat(y.cssPrefix, "-")) > -1 || n.match(ei))) {
      var a = cn(n.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || fe(),
        iconName: ve(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof n == "string") {
      var i = fe();
      return {
        prefix: i,
        iconName: ve(i, n) || n
      };
    }
  }
}, q = {
  noAuto: Ri,
  config: y,
  dom: Ni,
  parse: Mi,
  library: xr,
  findIconDefinition: $n,
  toHtml: je
}, $i = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.autoReplaceSvgRoot, r = t === void 0 ? Y : t;
  (Object.keys(J.styles).length > 0 || y.autoFetchSvg) && ie && y.autoReplaceSvg && q.dom.i2svg({
    node: r
  });
};
function un(e, n) {
  return Object.defineProperty(e, "abstract", {
    get: n
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return je(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (ie) {
        var r = Y.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function Li(e) {
  var n = e.children, t = e.main, r = e.mask, a = e.attributes, i = e.styles, o = e.transform;
  if (Zn(o) && t.found && !r.found) {
    var l = t.width, f = t.height, u = {
      x: l / f / 2,
      y: 0.5
    };
    a.style = ln(g(g({}, i), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: n
  }];
}
function Di(e) {
  var n = e.prefix, t = e.iconName, r = e.children, a = e.attributes, i = e.symbol, o = i === !0 ? "".concat(n, "-").concat(y.cssPrefix, "-").concat(t) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: g(g({}, a), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function rt(e) {
  var n = e.icons, t = n.main, r = n.mask, a = e.prefix, i = e.iconName, o = e.transform, l = e.symbol, f = e.title, u = e.maskId, c = e.titleId, d = e.extra, w = e.watchable, k = w === void 0 ? !1 : w, _ = r.found ? r : t, x = _.width, A = _.height, H = a === "fak", F = [y.replacementClass, i ? "".concat(y.cssPrefix, "-").concat(i) : ""].filter(function(X) {
    return d.classes.indexOf(X) === -1;
  }).filter(function(X) {
    return X !== "" || !!X;
  }).concat(d.classes).join(" "), E = {
    children: [],
    attributes: g(g({}, d.attributes), {}, {
      "data-prefix": a,
      "data-icon": i,
      class: F,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(x, " ").concat(A)
    })
  }, R = H && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(x / A * 16 * 0.0625, "em")
  } : {};
  k && (E.attributes[pe] = ""), f && (E.children.push({
    tag: "title",
    attributes: {
      id: E.attributes["aria-labelledby"] || "title-".concat(c || Ne())
    },
    children: [f]
  }), delete E.attributes.title);
  var v = g(g({}, E), {}, {
    prefix: a,
    iconName: i,
    main: t,
    mask: r,
    maskId: u,
    transform: o,
    symbol: l,
    styles: g(g({}, R), d.styles)
  }), B = r.found && t.found ? ae("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : ae("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  }, Q = B.children, ue = B.attributes;
  return v.children = Q, v.attributes = ue, l ? Di(v) : Li(v);
}
function xt(e) {
  var n = e.content, t = e.width, r = e.height, a = e.transform, i = e.title, o = e.extra, l = e.watchable, f = l === void 0 ? !1 : l, u = g(g(g({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  f && (u[pe] = "");
  var c = g({}, o.styles);
  Zn(a) && (c.transform = vi({
    transform: a,
    startCentered: !0,
    width: t,
    height: r
  }), c["-webkit-transform"] = c.transform);
  var d = ln(c);
  d.length > 0 && (u.style = d);
  var w = [];
  return w.push({
    tag: "span",
    attributes: u,
    children: [n]
  }), i && w.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), w;
}
function ji(e) {
  var n = e.content, t = e.title, r = e.extra, a = g(g(g({}, r.attributes), t ? {
    title: t
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = ln(r.styles);
  i.length > 0 && (a.style = i);
  var o = [];
  return o.push({
    tag: "span",
    attributes: a,
    children: [n]
  }), t && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [t]
  }), o;
}
var wn = J.styles;
function Ln(e) {
  var n = e[0], t = e[1], r = e.slice(4), a = qn(r, 1), i = a[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(y.cssPrefix, "-").concat(me.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(y.cssPrefix, "-").concat(me.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(y.cssPrefix, "-").concat(me.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: n,
    height: t,
    icon: o
  };
}
var Hi = {
  found: !1,
  width: 512,
  height: 512
};
function Fi(e, n) {
  !lr && !y.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(n, '" is missing.'));
}
function Dn(e, n) {
  var t = n;
  return n === "fa" && y.styleDefault !== null && (n = fe()), new Promise(function(r, a) {
    if (ae("missingIconAbstract"), t === "fa") {
      var i = kr(e) || {};
      e = i.iconName || e, n = i.prefix || n;
    }
    if (e && n && wn[n] && wn[n][e]) {
      var o = wn[n][e];
      return r(Ln(o));
    }
    Fi(e, n), r(g(g({}, Hi), {}, {
      icon: y.showMissingIcons && e ? ae("missingIconAbstract") || {} : {}
    }));
  });
}
var St = function() {
}, jn = y.measurePerformance && Ue && Ue.mark && Ue.measure ? Ue : {
  mark: St,
  measure: St
}, Te = 'FA "6.5.1"', zi = function(n) {
  return jn.mark("".concat(Te, " ").concat(n, " begins")), function() {
    return Sr(n);
  };
}, Sr = function(n) {
  jn.mark("".concat(Te, " ").concat(n, " ends")), jn.measure("".concat(Te, " ").concat(n), "".concat(Te, " ").concat(n, " begins"), "".concat(Te, " ").concat(n, " ends"));
}, at = {
  begin: zi,
  end: Sr
}, en = function() {
};
function At(e) {
  var n = e.getAttribute ? e.getAttribute(pe) : null;
  return typeof n == "string";
}
function Yi(e) {
  var n = e.getAttribute ? e.getAttribute(Vn) : null, t = e.getAttribute ? e.getAttribute(Kn) : null;
  return n && t;
}
function Wi(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(y.replacementClass);
}
function Ui() {
  if (y.autoReplaceSvg === !0)
    return nn.replace;
  var e = nn[y.autoReplaceSvg];
  return e || nn.replace;
}
function Bi(e) {
  return Y.createElementNS("http://www.w3.org/2000/svg", e);
}
function Gi(e) {
  return Y.createElement(e);
}
function Ar(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = n.ceFn, r = t === void 0 ? e.tag === "svg" ? Bi : Gi : t;
  if (typeof e == "string")
    return Y.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    a.setAttribute(o, e.attributes[o]);
  });
  var i = e.children || [];
  return i.forEach(function(o) {
    a.appendChild(Ar(o, {
      ceFn: r
    }));
  }), a;
}
function qi(e) {
  var n = " ".concat(e.outerHTML, " ");
  return n = "".concat(n, "Font Awesome fontawesome.com "), n;
}
var nn = {
  replace: function(n) {
    var t = n[0];
    if (t.parentNode)
      if (n[1].forEach(function(a) {
        t.parentNode.insertBefore(Ar(a), t);
      }), t.getAttribute(pe) === null && y.keepOriginalSource) {
        var r = Y.createComment(qi(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(n) {
    var t = n[0], r = n[1];
    if (~Jn(t).indexOf(y.replacementClass))
      return nn.replace(n);
    var a = new RegExp("".concat(y.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var i = r[0].attributes.class.split(" ").reduce(function(l, f) {
        return f === y.replacementClass || f.match(a) ? l.toSvg.push(f) : l.toNode.push(f), l;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    var o = r.map(function(l) {
      return je(l);
    }).join(`
`);
    t.setAttribute(pe, ""), t.innerHTML = o;
  }
};
function Et(e) {
  e();
}
function Er(e, n) {
  var t = typeof n == "function" ? n : en;
  if (e.length === 0)
    t();
  else {
    var r = Et;
    y.mutateApproach === Qa && (r = le.requestAnimationFrame || Et), r(function() {
      var a = Ui(), i = at.begin("mutate");
      e.map(a), i(), t();
    });
  }
}
var it = !1;
function Tr() {
  it = !0;
}
function Hn() {
  it = !1;
}
var an = null;
function Tt(e) {
  if (pt && y.observeMutations) {
    var n = e.treeCallback, t = n === void 0 ? en : n, r = e.nodeCallback, a = r === void 0 ? en : r, i = e.pseudoElementsCallback, o = i === void 0 ? en : i, l = e.observeMutationsRoot, f = l === void 0 ? Y : l;
    an = new pt(function(u) {
      if (!it) {
        var c = fe();
        Se(u).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !At(d.addedNodes[0]) && (y.searchPseudoElements && o(d.target), t(d.target)), d.type === "attributes" && d.target.parentNode && y.searchPseudoElements && o(d.target.parentNode), d.type === "attributes" && At(d.target) && ~ai.indexOf(d.attributeName))
            if (d.attributeName === "class" && Yi(d.target)) {
              var w = cn(Jn(d.target)), k = w.prefix, _ = w.iconName;
              d.target.setAttribute(Vn, k || c), _ && d.target.setAttribute(Kn, _);
            } else
              Wi(d.target) && a(d.target);
        });
      }
    }), ie && an.observe(f, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Xi() {
  an && an.disconnect();
}
function Vi(e) {
  var n = e.getAttribute("style"), t = [];
  return n && (t = n.split(";").reduce(function(r, a) {
    var i = a.split(":"), o = i[0], l = i.slice(1);
    return o && l.length > 0 && (r[o] = l.join(":").trim()), r;
  }, {})), t;
}
function Ki(e) {
  var n = e.getAttribute("data-prefix"), t = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", a = cn(Jn(e));
  return a.prefix || (a.prefix = fe()), n && t && (a.prefix = n, a.iconName = t), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Pi(a.prefix, e.innerText) || nt(a.prefix, Rn(e.innerText))), !a.iconName && y.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function Qi(e) {
  var n = Se(e.attributes).reduce(function(a, i) {
    return a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a;
  }, {}), t = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return y.autoA11y && (t ? n["aria-labelledby"] = "".concat(y.replacementClass, "-title-").concat(r || Ne()) : (n["aria-hidden"] = "true", n.focusable = "false")), n;
}
function Ji() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ne,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function Pt(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, t = Ki(e), r = t.iconName, a = t.prefix, i = t.rest, o = Qi(e), l = Mn("parseNodeAttributes", {}, e), f = n.styleParser ? Vi(e) : [];
  return g({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: ne,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: f,
      attributes: o
    }
  }, l);
}
var Zi = J.styles;
function Pr(e) {
  var n = y.autoReplaceSvg === "nest" ? Pt(e, {
    styleParser: !1
  }) : Pt(e);
  return ~n.extra.classes.indexOf(fr) ? ae("generateLayersText", e, n) : ae("generateSvgReplacementMutation", e, n);
}
var ce = /* @__PURE__ */ new Set();
Qn.map(function(e) {
  ce.add("fa-".concat(e));
});
Object.keys(Oe[z]).map(ce.add.bind(ce));
Object.keys(Oe[W]).map(ce.add.bind(ce));
ce = Le(ce);
function Ct(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ie)
    return Promise.resolve();
  var t = Y.documentElement.classList, r = function(d) {
    return t.add("".concat(gt, "-").concat(d));
  }, a = function(d) {
    return t.remove("".concat(gt, "-").concat(d));
  }, i = y.autoFetchSvg ? ce : Qn.map(function(c) {
    return "fa-".concat(c);
  }).concat(Object.keys(Zi));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(fr, ":not([").concat(pe, "])")].concat(i.map(function(c) {
    return ".".concat(c, ":not([").concat(pe, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var l = [];
  try {
    l = Se(e.querySelectorAll(o));
  } catch {
  }
  if (l.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  var f = at.begin("onTree"), u = l.reduce(function(c, d) {
    try {
      var w = Pr(d);
      w && c.push(w);
    } catch (k) {
      lr || k.name === "MissingIcon" && console.error(k);
    }
    return c;
  }, []);
  return new Promise(function(c, d) {
    Promise.all(u).then(function(w) {
      Er(w, function() {
        r("active"), r("complete"), a("pending"), typeof n == "function" && n(), f(), c();
      });
    }).catch(function(w) {
      f(), d(w);
    });
  });
}
function eo(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Pr(e).then(function(t) {
    t && Er([t], n);
  });
}
function no(e) {
  return function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (n || {}).icon ? n : $n(n || {}), a = t.mask;
    return a && (a = (a || {}).icon ? a : $n(a || {})), e(r, g(g({}, t), {}, {
      mask: a
    }));
  };
}
var to = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.transform, a = r === void 0 ? ne : r, i = t.symbol, o = i === void 0 ? !1 : i, l = t.mask, f = l === void 0 ? null : l, u = t.maskId, c = u === void 0 ? null : u, d = t.title, w = d === void 0 ? null : d, k = t.titleId, _ = k === void 0 ? null : k, x = t.classes, A = x === void 0 ? [] : x, H = t.attributes, F = H === void 0 ? {} : H, E = t.styles, R = E === void 0 ? {} : E;
  if (n) {
    var v = n.prefix, B = n.iconName, Q = n.icon;
    return un(g({
      type: "icon"
    }, n), function() {
      return ge("beforeDOMElementCreation", {
        iconDefinition: n,
        params: t
      }), y.autoA11y && (w ? F["aria-labelledby"] = "".concat(y.replacementClass, "-title-").concat(_ || Ne()) : (F["aria-hidden"] = "true", F.focusable = "false")), rt({
        icons: {
          main: Ln(Q),
          mask: f ? Ln(f.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: v,
        iconName: B,
        transform: g(g({}, ne), a),
        symbol: o,
        title: w,
        maskId: c,
        titleId: _,
        extra: {
          attributes: F,
          styles: R,
          classes: A
        }
      });
    });
  }
}, ro = {
  mixout: function() {
    return {
      icon: no(to)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.treeCallback = Ct, t.nodeCallback = eo, t;
      }
    };
  },
  provides: function(n) {
    n.i2svg = function(t) {
      var r = t.node, a = r === void 0 ? Y : r, i = t.callback, o = i === void 0 ? function() {
      } : i;
      return Ct(a, o);
    }, n.generateSvgReplacementMutation = function(t, r) {
      var a = r.iconName, i = r.title, o = r.titleId, l = r.prefix, f = r.transform, u = r.symbol, c = r.mask, d = r.maskId, w = r.extra;
      return new Promise(function(k, _) {
        Promise.all([Dn(a, l), c.iconName ? Dn(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(x) {
          var A = qn(x, 2), H = A[0], F = A[1];
          k([t, rt({
            icons: {
              main: H,
              mask: F
            },
            prefix: l,
            iconName: a,
            transform: f,
            symbol: u,
            maskId: d,
            title: i,
            titleId: o,
            extra: w,
            watchable: !0
          })]);
        }).catch(_);
      });
    }, n.generateAbstractIcon = function(t) {
      var r = t.children, a = t.attributes, i = t.main, o = t.transform, l = t.styles, f = ln(l);
      f.length > 0 && (a.style = f);
      var u;
      return Zn(o) && (u = ae("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), r.push(u || i.icon), {
        children: r,
        attributes: a
      };
    };
  }
}, ao = {
  mixout: function() {
    return {
      layer: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.classes, i = a === void 0 ? [] : a;
        return un({
          type: "layer"
        }, function() {
          ge("beforeDOMElementCreation", {
            assembler: t,
            params: r
          });
          var o = [];
          return t(function(l) {
            Array.isArray(l) ? l.map(function(f) {
              o = o.concat(f.abstract);
            }) : o = o.concat(l.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(y.cssPrefix, "-layers")].concat(Le(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, io = {
  mixout: function() {
    return {
      counter: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.title, i = a === void 0 ? null : a, o = r.classes, l = o === void 0 ? [] : o, f = r.attributes, u = f === void 0 ? {} : f, c = r.styles, d = c === void 0 ? {} : c;
        return un({
          type: "counter",
          content: t
        }, function() {
          return ge("beforeDOMElementCreation", {
            content: t,
            params: r
          }), ji({
            content: t.toString(),
            title: i,
            extra: {
              attributes: u,
              styles: d,
              classes: ["".concat(y.cssPrefix, "-layers-counter")].concat(Le(l))
            }
          });
        });
      }
    };
  }
}, oo = {
  mixout: function() {
    return {
      text: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, i = a === void 0 ? ne : a, o = r.title, l = o === void 0 ? null : o, f = r.classes, u = f === void 0 ? [] : f, c = r.attributes, d = c === void 0 ? {} : c, w = r.styles, k = w === void 0 ? {} : w;
        return un({
          type: "text",
          content: t
        }, function() {
          return ge("beforeDOMElementCreation", {
            content: t,
            params: r
          }), xt({
            content: t,
            transform: g(g({}, ne), i),
            title: l,
            extra: {
              attributes: d,
              styles: k,
              classes: ["".concat(y.cssPrefix, "-layers-text")].concat(Le(u))
            }
          });
        });
      }
    };
  },
  provides: function(n) {
    n.generateLayersText = function(t, r) {
      var a = r.title, i = r.transform, o = r.extra, l = null, f = null;
      if (ir) {
        var u = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        l = c.width / u, f = c.height / u;
      }
      return y.autoA11y && !a && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, xt({
        content: t.innerHTML,
        width: l,
        height: f,
        transform: i,
        title: a,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, so = new RegExp('"', "ug"), Ot = [1105920, 1112319];
function lo(e) {
  var n = e.replace(so, ""), t = ki(n, 0), r = t >= Ot[0] && t <= Ot[1], a = n.length === 2 ? n[0] === n[1] : !1;
  return {
    value: Rn(a ? n[0] : n),
    isSecondary: r || a
  };
}
function It(e, n) {
  var t = "".concat(Ka).concat(n.replace(":", "-"));
  return new Promise(function(r, a) {
    if (e.getAttribute(t) !== null)
      return r();
    var i = Se(e.children), o = i.filter(function(Q) {
      return Q.getAttribute(_n) === n;
    })[0], l = le.getComputedStyle(e, n), f = l.getPropertyValue("font-family").match(ni), u = l.getPropertyValue("font-weight"), c = l.getPropertyValue("content");
    if (o && !f)
      return e.removeChild(o), r();
    if (f && c !== "none" && c !== "") {
      var d = l.getPropertyValue("content"), w = ~["Sharp"].indexOf(f[2]) ? W : z, k = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(f[2]) ? Ie[w][f[2].toLowerCase()] : ti[w][u], _ = lo(d), x = _.value, A = _.isSecondary, H = f[0].startsWith("FontAwesome"), F = nt(k, x), E = F;
      if (H) {
        var R = Ci(x);
        R.iconName && R.prefix && (F = R.iconName, k = R.prefix);
      }
      if (F && !A && (!o || o.getAttribute(Vn) !== k || o.getAttribute(Kn) !== E)) {
        e.setAttribute(t, E), o && e.removeChild(o);
        var v = Ji(), B = v.extra;
        B.attributes[_n] = n, Dn(F, k).then(function(Q) {
          var ue = rt(g(g({}, v), {}, {
            icons: {
              main: Q,
              mask: tt()
            },
            prefix: k,
            iconName: E,
            extra: B,
            watchable: !0
          })), X = Y.createElementNS("http://www.w3.org/2000/svg", "svg");
          n === "::before" ? e.insertBefore(X, e.firstChild) : e.appendChild(X), X.outerHTML = ue.map(function(Ee) {
            return je(Ee);
          }).join(`
`), e.removeAttribute(t), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function fo(e) {
  return Promise.all([It(e, "::before"), It(e, "::after")]);
}
function co(e) {
  return e.parentNode !== document.head && !~Ja.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(_n) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function _t(e) {
  if (ie)
    return new Promise(function(n, t) {
      var r = Se(e.querySelectorAll("*")).filter(co).map(fo), a = at.begin("searchPseudoElements");
      Tr(), Promise.all(r).then(function() {
        a(), Hn(), n();
      }).catch(function() {
        a(), Hn(), t();
      });
    });
}
var uo = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.pseudoElementsCallback = _t, t;
      }
    };
  },
  provides: function(n) {
    n.pseudoElements2svg = function(t) {
      var r = t.node, a = r === void 0 ? Y : r;
      y.searchPseudoElements && _t(a);
    };
  }
}, Rt = !1, mo = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Tr(), Rt = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Tt(Mn("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Xi();
      },
      watch: function(t) {
        var r = t.observeMutationsRoot;
        Rt ? Hn() : Tt(Mn("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, Nt = function(n) {
  var t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return n.toLowerCase().split(" ").reduce(function(r, a) {
    var i = a.toLowerCase().split("-"), o = i[0], l = i.slice(1).join("-");
    if (o && l === "h")
      return r.flipX = !0, r;
    if (o && l === "v")
      return r.flipY = !0, r;
    if (l = parseFloat(l), isNaN(l))
      return r;
    switch (o) {
      case "grow":
        r.size = r.size + l;
        break;
      case "shrink":
        r.size = r.size - l;
        break;
      case "left":
        r.x = r.x - l;
        break;
      case "right":
        r.x = r.x + l;
        break;
      case "up":
        r.y = r.y - l;
        break;
      case "down":
        r.y = r.y + l;
        break;
      case "rotate":
        r.rotate = r.rotate + l;
        break;
    }
    return r;
  }, t);
}, vo = {
  mixout: function() {
    return {
      parse: {
        transform: function(t) {
          return Nt(t);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var a = r.getAttribute("data-fa-transform");
        return a && (t.transform = Nt(a)), t;
      }
    };
  },
  provides: function(n) {
    n.generateAbstractTransformGrouping = function(t) {
      var r = t.main, a = t.transform, i = t.containerWidth, o = t.iconWidth, l = {
        transform: "translate(".concat(i / 2, " 256)")
      }, f = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), u = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), c = "rotate(".concat(a.rotate, " 0 0)"), d = {
        transform: "".concat(f, " ").concat(u, " ").concat(c)
      }, w = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, k = {
        outer: l,
        inner: d,
        path: w
      };
      return {
        tag: "g",
        attributes: g({}, k.outer),
        children: [{
          tag: "g",
          attributes: g({}, k.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: g(g({}, r.icon.attributes), k.path)
          }]
        }]
      };
    };
  }
}, kn = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Mt(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || n) && (e.attributes.fill = "black"), e;
}
function po(e) {
  return e.tag === "g" ? e.children : [e];
}
var go = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var a = r.getAttribute("data-fa-mask"), i = a ? cn(a.split(" ").map(function(o) {
          return o.trim();
        })) : tt();
        return i.prefix || (i.prefix = fe()), t.mask = i, t.maskId = r.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides: function(n) {
    n.generateAbstractMask = function(t) {
      var r = t.children, a = t.attributes, i = t.main, o = t.mask, l = t.maskId, f = t.transform, u = i.width, c = i.icon, d = o.width, w = o.icon, k = mi({
        transform: f,
        containerWidth: d,
        iconWidth: u
      }), _ = {
        tag: "rect",
        attributes: g(g({}, kn), {}, {
          fill: "white"
        })
      }, x = c.children ? {
        children: c.children.map(Mt)
      } : {}, A = {
        tag: "g",
        attributes: g({}, k.inner),
        children: [Mt(g({
          tag: c.tag,
          attributes: g(g({}, c.attributes), k.path)
        }, x))]
      }, H = {
        tag: "g",
        attributes: g({}, k.outer),
        children: [A]
      }, F = "mask-".concat(l || Ne()), E = "clip-".concat(l || Ne()), R = {
        tag: "mask",
        attributes: g(g({}, kn), {}, {
          id: F,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [_, H]
      }, v = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: E
          },
          children: po(w)
        }, R]
      };
      return r.push(v, {
        tag: "rect",
        attributes: g({
          fill: "currentColor",
          "clip-path": "url(#".concat(E, ")"),
          mask: "url(#".concat(F, ")")
        }, kn)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, bo = {
  provides: function(n) {
    var t = !1;
    le.matchMedia && (t = le.matchMedia("(prefers-reduced-motion: reduce)").matches), n.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: g(g({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = g(g({}, i), {}, {
        attributeName: "opacity"
      }), l = {
        tag: "circle",
        attributes: g(g({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || l.children.push({
        tag: "animate",
        attributes: g(g({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: g(g({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(l), r.push({
        tag: "path",
        attributes: g(g({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: g(g({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || r.push({
        tag: "path",
        attributes: g(g({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: g(g({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, ho = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var a = r.getAttribute("data-fa-symbol"), i = a === null ? !1 : a === "" ? !0 : a;
        return t.symbol = i, t;
      }
    };
  }
}, yo = [gi, ro, ao, io, oo, uo, mo, vo, go, bo, ho];
_i(yo, {
  mixoutsTo: q
});
q.noAuto;
q.config;
q.library;
q.dom;
var Fn = q.parse;
q.findIconDefinition;
q.toHtml;
var wo = q.icon;
q.layer;
q.text;
q.counter;
function ko(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zn = { exports: {} }, Ze = { exports: {} }, L = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $t;
function xo() {
  if ($t)
    return L;
  $t = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, H = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
  function E(v) {
    if (typeof v == "object" && v !== null) {
      var B = v.$$typeof;
      switch (B) {
        case n:
          switch (v = v.type, v) {
            case f:
            case u:
            case r:
            case i:
            case a:
            case d:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case c:
                case _:
                case k:
                case o:
                  return v;
                default:
                  return B;
              }
          }
        case t:
          return B;
      }
    }
  }
  function R(v) {
    return E(v) === u;
  }
  return L.AsyncMode = f, L.ConcurrentMode = u, L.ContextConsumer = l, L.ContextProvider = o, L.Element = n, L.ForwardRef = c, L.Fragment = r, L.Lazy = _, L.Memo = k, L.Portal = t, L.Profiler = i, L.StrictMode = a, L.Suspense = d, L.isAsyncMode = function(v) {
    return R(v) || E(v) === f;
  }, L.isConcurrentMode = R, L.isContextConsumer = function(v) {
    return E(v) === l;
  }, L.isContextProvider = function(v) {
    return E(v) === o;
  }, L.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === n;
  }, L.isForwardRef = function(v) {
    return E(v) === c;
  }, L.isFragment = function(v) {
    return E(v) === r;
  }, L.isLazy = function(v) {
    return E(v) === _;
  }, L.isMemo = function(v) {
    return E(v) === k;
  }, L.isPortal = function(v) {
    return E(v) === t;
  }, L.isProfiler = function(v) {
    return E(v) === i;
  }, L.isStrictMode = function(v) {
    return E(v) === a;
  }, L.isSuspense = function(v) {
    return E(v) === d;
  }, L.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === u || v === i || v === a || v === d || v === w || typeof v == "object" && v !== null && (v.$$typeof === _ || v.$$typeof === k || v.$$typeof === o || v.$$typeof === l || v.$$typeof === c || v.$$typeof === A || v.$$typeof === H || v.$$typeof === F || v.$$typeof === x);
  }, L.typeOf = E, L;
}
var D = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt;
function So() {
  return Lt || (Lt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, w = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, H = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function E(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === r || p === u || p === i || p === a || p === d || p === w || typeof p == "object" && p !== null && (p.$$typeof === _ || p.$$typeof === k || p.$$typeof === o || p.$$typeof === l || p.$$typeof === c || p.$$typeof === A || p.$$typeof === H || p.$$typeof === F || p.$$typeof === x);
    }
    function R(p) {
      if (typeof p == "object" && p !== null) {
        var ee = p.$$typeof;
        switch (ee) {
          case n:
            var We = p.type;
            switch (We) {
              case f:
              case u:
              case r:
              case i:
              case a:
              case d:
                return We;
              default:
                var ft = We && We.$$typeof;
                switch (ft) {
                  case l:
                  case c:
                  case _:
                  case k:
                  case o:
                    return ft;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var v = f, B = u, Q = l, ue = o, X = n, Ee = c, ze = r, mn = _, vn = k, be = t, pn = i, Z = a, de = d, Ye = !1;
    function gn(p) {
      return Ye || (Ye = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(p) || R(p) === f;
    }
    function m(p) {
      return R(p) === u;
    }
    function h(p) {
      return R(p) === l;
    }
    function I(p) {
      return R(p) === o;
    }
    function C(p) {
      return typeof p == "object" && p !== null && p.$$typeof === n;
    }
    function S(p) {
      return R(p) === c;
    }
    function N(p) {
      return R(p) === r;
    }
    function T(p) {
      return R(p) === _;
    }
    function O(p) {
      return R(p) === k;
    }
    function M(p) {
      return R(p) === t;
    }
    function j(p) {
      return R(p) === i;
    }
    function $(p) {
      return R(p) === a;
    }
    function G(p) {
      return R(p) === d;
    }
    D.AsyncMode = v, D.ConcurrentMode = B, D.ContextConsumer = Q, D.ContextProvider = ue, D.Element = X, D.ForwardRef = Ee, D.Fragment = ze, D.Lazy = mn, D.Memo = vn, D.Portal = be, D.Profiler = pn, D.StrictMode = Z, D.Suspense = de, D.isAsyncMode = gn, D.isConcurrentMode = m, D.isContextConsumer = h, D.isContextProvider = I, D.isElement = C, D.isForwardRef = S, D.isFragment = N, D.isLazy = T, D.isMemo = O, D.isPortal = M, D.isProfiler = j, D.isStrictMode = $, D.isSuspense = G, D.isValidElementType = E, D.typeOf = R;
  }()), D;
}
var Dt;
function Cr() {
  return Dt || (Dt = 1, process.env.NODE_ENV === "production" ? Ze.exports = xo() : Ze.exports = So()), Ze.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var xn, jt;
function Ao() {
  if (jt)
    return xn;
  jt = 1;
  var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, l = 0; l < 10; l++)
        o["_" + String.fromCharCode(l)] = l;
      var f = Object.getOwnPropertyNames(o).map(function(c) {
        return o[c];
      });
      if (f.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        u[c] = c;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return xn = a() ? Object.assign : function(i, o) {
    for (var l, f = r(i), u, c = 1; c < arguments.length; c++) {
      l = Object(arguments[c]);
      for (var d in l)
        n.call(l, d) && (f[d] = l[d]);
      if (e) {
        u = e(l);
        for (var w = 0; w < u.length; w++)
          t.call(l, u[w]) && (f[u[w]] = l[u[w]]);
      }
    }
    return f;
  }, xn;
}
var Sn, Ht;
function ot() {
  if (Ht)
    return Sn;
  Ht = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Sn = e, Sn;
}
var An, Ft;
function Or() {
  return Ft || (Ft = 1, An = Function.call.bind(Object.prototype.hasOwnProperty)), An;
}
var En, zt;
function Eo() {
  if (zt)
    return En;
  zt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = ot(), t = {}, r = Or();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(i, o, l, f, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in i)
        if (r(i, c)) {
          var d;
          try {
            if (typeof i[c] != "function") {
              var w = Error(
                (f || "React class") + ": " + l + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw w.name = "Invariant Violation", w;
            }
            d = i[c](o, c, f, l, null, n);
          } catch (_) {
            d = _;
          }
          if (d && !(d instanceof Error) && e(
            (f || "React class") + ": type specification of " + l + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in t)) {
            t[d.message] = !0;
            var k = u ? u() : "";
            e(
              "Failed " + l + " type: " + d.message + (k ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, En = a, En;
}
var Tn, Yt;
function To() {
  if (Yt)
    return Tn;
  Yt = 1;
  var e = Cr(), n = Ao(), t = ot(), r = Or(), a = Eo(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(l) {
    var f = "Warning: " + l;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Tn = function(l, f) {
    var u = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(m) {
      var h = m && (u && m[u] || m[c]);
      if (typeof h == "function")
        return h;
    }
    var w = "<<anonymous>>", k = {
      array: H("array"),
      bigint: H("bigint"),
      bool: H("boolean"),
      func: H("function"),
      number: H("number"),
      object: H("object"),
      string: H("string"),
      symbol: H("symbol"),
      any: F(),
      arrayOf: E,
      element: R(),
      elementType: v(),
      instanceOf: B,
      node: Ee(),
      objectOf: ue,
      oneOf: Q,
      oneOfType: X,
      shape: mn,
      exact: vn
    };
    function _(m, h) {
      return m === h ? m !== 0 || 1 / m === 1 / h : m !== m && h !== h;
    }
    function x(m, h) {
      this.message = m, this.data = h && typeof h == "object" ? h : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function A(m) {
      if (process.env.NODE_ENV !== "production")
        var h = {}, I = 0;
      function C(N, T, O, M, j, $, G) {
        if (M = M || w, $ = $ || O, G !== t) {
          if (f) {
            var p = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw p.name = "Invariant Violation", p;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ee = M + ":" + O;
            !h[ee] && // Avoid spamming the console because they are often not actionable except for lib authors
            I < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + $ + "` prop on `" + M + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), h[ee] = !0, I++);
          }
        }
        return T[O] == null ? N ? T[O] === null ? new x("The " + j + " `" + $ + "` is marked as required " + ("in `" + M + "`, but its value is `null`.")) : new x("The " + j + " `" + $ + "` is marked as required in " + ("`" + M + "`, but its value is `undefined`.")) : null : m(T, O, M, j, $);
      }
      var S = C.bind(null, !1);
      return S.isRequired = C.bind(null, !0), S;
    }
    function H(m) {
      function h(I, C, S, N, T, O) {
        var M = I[C], j = Z(M);
        if (j !== m) {
          var $ = de(M);
          return new x(
            "Invalid " + N + " `" + T + "` of type " + ("`" + $ + "` supplied to `" + S + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return A(h);
    }
    function F() {
      return A(o);
    }
    function E(m) {
      function h(I, C, S, N, T) {
        if (typeof m != "function")
          return new x("Property `" + T + "` of component `" + S + "` has invalid PropType notation inside arrayOf.");
        var O = I[C];
        if (!Array.isArray(O)) {
          var M = Z(O);
          return new x("Invalid " + N + " `" + T + "` of type " + ("`" + M + "` supplied to `" + S + "`, expected an array."));
        }
        for (var j = 0; j < O.length; j++) {
          var $ = m(O, j, S, N, T + "[" + j + "]", t);
          if ($ instanceof Error)
            return $;
        }
        return null;
      }
      return A(h);
    }
    function R() {
      function m(h, I, C, S, N) {
        var T = h[I];
        if (!l(T)) {
          var O = Z(T);
          return new x("Invalid " + S + " `" + N + "` of type " + ("`" + O + "` supplied to `" + C + "`, expected a single ReactElement."));
        }
        return null;
      }
      return A(m);
    }
    function v() {
      function m(h, I, C, S, N) {
        var T = h[I];
        if (!e.isValidElementType(T)) {
          var O = Z(T);
          return new x("Invalid " + S + " `" + N + "` of type " + ("`" + O + "` supplied to `" + C + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return A(m);
    }
    function B(m) {
      function h(I, C, S, N, T) {
        if (!(I[C] instanceof m)) {
          var O = m.name || w, M = gn(I[C]);
          return new x("Invalid " + N + " `" + T + "` of type " + ("`" + M + "` supplied to `" + S + "`, expected ") + ("instance of `" + O + "`."));
        }
        return null;
      }
      return A(h);
    }
    function Q(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function h(I, C, S, N, T) {
        for (var O = I[C], M = 0; M < m.length; M++)
          if (_(O, m[M]))
            return null;
        var j = JSON.stringify(m, function(G, p) {
          var ee = de(p);
          return ee === "symbol" ? String(p) : p;
        });
        return new x("Invalid " + N + " `" + T + "` of value `" + String(O) + "` " + ("supplied to `" + S + "`, expected one of " + j + "."));
      }
      return A(h);
    }
    function ue(m) {
      function h(I, C, S, N, T) {
        if (typeof m != "function")
          return new x("Property `" + T + "` of component `" + S + "` has invalid PropType notation inside objectOf.");
        var O = I[C], M = Z(O);
        if (M !== "object")
          return new x("Invalid " + N + " `" + T + "` of type " + ("`" + M + "` supplied to `" + S + "`, expected an object."));
        for (var j in O)
          if (r(O, j)) {
            var $ = m(O, j, S, N, T + "." + j, t);
            if ($ instanceof Error)
              return $;
          }
        return null;
      }
      return A(h);
    }
    function X(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var h = 0; h < m.length; h++) {
        var I = m[h];
        if (typeof I != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ye(I) + " at index " + h + "."
          ), o;
      }
      function C(S, N, T, O, M) {
        for (var j = [], $ = 0; $ < m.length; $++) {
          var G = m[$], p = G(S, N, T, O, M, t);
          if (p == null)
            return null;
          p.data && r(p.data, "expectedType") && j.push(p.data.expectedType);
        }
        var ee = j.length > 0 ? ", expected one of type [" + j.join(", ") + "]" : "";
        return new x("Invalid " + O + " `" + M + "` supplied to " + ("`" + T + "`" + ee + "."));
      }
      return A(C);
    }
    function Ee() {
      function m(h, I, C, S, N) {
        return be(h[I]) ? null : new x("Invalid " + S + " `" + N + "` supplied to " + ("`" + C + "`, expected a ReactNode."));
      }
      return A(m);
    }
    function ze(m, h, I, C, S) {
      return new x(
        (m || "React class") + ": " + h + " type `" + I + "." + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + S + "`."
      );
    }
    function mn(m) {
      function h(I, C, S, N, T) {
        var O = I[C], M = Z(O);
        if (M !== "object")
          return new x("Invalid " + N + " `" + T + "` of type `" + M + "` " + ("supplied to `" + S + "`, expected `object`."));
        for (var j in m) {
          var $ = m[j];
          if (typeof $ != "function")
            return ze(S, N, T, j, de($));
          var G = $(O, j, S, N, T + "." + j, t);
          if (G)
            return G;
        }
        return null;
      }
      return A(h);
    }
    function vn(m) {
      function h(I, C, S, N, T) {
        var O = I[C], M = Z(O);
        if (M !== "object")
          return new x("Invalid " + N + " `" + T + "` of type `" + M + "` " + ("supplied to `" + S + "`, expected `object`."));
        var j = n({}, I[C], m);
        for (var $ in j) {
          var G = m[$];
          if (r(m, $) && typeof G != "function")
            return ze(S, N, T, $, de(G));
          if (!G)
            return new x(
              "Invalid " + N + " `" + T + "` key `" + $ + "` supplied to `" + S + "`.\nBad object: " + JSON.stringify(I[C], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var p = G(O, $, S, N, T + "." + $, t);
          if (p)
            return p;
        }
        return null;
      }
      return A(h);
    }
    function be(m) {
      switch (typeof m) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !m;
        case "object":
          if (Array.isArray(m))
            return m.every(be);
          if (m === null || l(m))
            return !0;
          var h = d(m);
          if (h) {
            var I = h.call(m), C;
            if (h !== m.entries) {
              for (; !(C = I.next()).done; )
                if (!be(C.value))
                  return !1;
            } else
              for (; !(C = I.next()).done; ) {
                var S = C.value;
                if (S && !be(S[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function pn(m, h) {
      return m === "symbol" ? !0 : h ? h["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && h instanceof Symbol : !1;
    }
    function Z(m) {
      var h = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : pn(h, m) ? "symbol" : h;
    }
    function de(m) {
      if (typeof m > "u" || m === null)
        return "" + m;
      var h = Z(m);
      if (h === "object") {
        if (m instanceof Date)
          return "date";
        if (m instanceof RegExp)
          return "regexp";
      }
      return h;
    }
    function Ye(m) {
      var h = de(m);
      switch (h) {
        case "array":
        case "object":
          return "an " + h;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + h;
        default:
          return h;
      }
    }
    function gn(m) {
      return !m.constructor || !m.constructor.name ? w : m.constructor.name;
    }
    return k.checkPropTypes = a, k.resetWarningCache = a.resetWarningCache, k.PropTypes = k, k;
  }, Tn;
}
var Pn, Wt;
function Po() {
  if (Wt)
    return Pn;
  Wt = 1;
  var e = ot();
  function n() {
  }
  function t() {
  }
  return t.resetWarningCache = n, Pn = function() {
    function r(o, l, f, u, c, d) {
      if (d !== e) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: t,
      resetWarningCache: n
    };
    return i.PropTypes = i, i;
  }, Pn;
}
if (process.env.NODE_ENV !== "production") {
  var Co = Cr(), Oo = !0;
  zn.exports = To()(Co.isElement, Oo);
} else
  zn.exports = Po()();
var Io = zn.exports;
const P = /* @__PURE__ */ ko(Io);
function Ut(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function se(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Ut(Object(t), !0).forEach(function(r) {
      we(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Ut(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function on(e) {
  "@babel/helpers - typeof";
  return on = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, on(e);
}
function we(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function _o(e, n) {
  if (e == null)
    return {};
  var t = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(n.indexOf(a) >= 0) && (t[a] = e[a]);
  return t;
}
function Ro(e, n) {
  if (e == null)
    return {};
  var t = _o(e, n), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function Yn(e) {
  return No(e) || Mo(e) || $o(e) || Lo();
}
function No(e) {
  if (Array.isArray(e))
    return Wn(e);
}
function Mo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function $o(e, n) {
  if (e) {
    if (typeof e == "string")
      return Wn(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Wn(e, n);
  }
}
function Wn(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function Lo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Do(e) {
  var n, t = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, o = e.shake, l = e.flash, f = e.spin, u = e.spinPulse, c = e.spinReverse, d = e.pulse, w = e.fixedWidth, k = e.inverse, _ = e.border, x = e.listItem, A = e.flip, H = e.size, F = e.rotation, E = e.pull, R = (n = {
    "fa-beat": t,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": o,
    "fa-flash": l,
    "fa-spin": f,
    "fa-spin-reverse": c,
    "fa-spin-pulse": u,
    "fa-pulse": d,
    "fa-fw": w,
    "fa-inverse": k,
    "fa-border": _,
    "fa-li": x,
    "fa-flip": A === !0,
    "fa-flip-horizontal": A === "horizontal" || A === "both",
    "fa-flip-vertical": A === "vertical" || A === "both"
  }, we(n, "fa-".concat(H), typeof H < "u" && H !== null), we(n, "fa-rotate-".concat(F), typeof F < "u" && F !== null && F !== 0), we(n, "fa-pull-".concat(E), typeof E < "u" && E !== null), we(n, "fa-swap-opacity", e.swapOpacity), n);
  return Object.keys(R).map(function(v) {
    return R[v] ? v : null;
  }).filter(function(v) {
    return v;
  });
}
function jo(e) {
  return e = e - 0, e === e;
}
function Ir(e) {
  return jo(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Ho = ["style"];
function Fo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function zo(e) {
  return e.split(";").map(function(n) {
    return n.trim();
  }).filter(function(n) {
    return n;
  }).reduce(function(n, t) {
    var r = t.indexOf(":"), a = Ir(t.slice(0, r)), i = t.slice(r + 1).trim();
    return a.startsWith("webkit") ? n[Fo(a)] = i : n[a] = i, n;
  }, {});
}
function _r(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof n == "string")
    return n;
  var r = (n.children || []).map(function(f) {
    return _r(e, f);
  }), a = Object.keys(n.attributes || {}).reduce(function(f, u) {
    var c = n.attributes[u];
    switch (u) {
      case "class":
        f.attrs.className = c, delete n.attributes.class;
        break;
      case "style":
        f.attrs.style = zo(c);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? f.attrs[u.toLowerCase()] = c : f.attrs[Ir(u)] = c;
    }
    return f;
  }, {
    attrs: {}
  }), i = t.style, o = i === void 0 ? {} : i, l = Ro(t, Ho);
  return a.attrs.style = se(se({}, a.attrs.style), o), e.apply(void 0, [n.tag, se(se({}, a.attrs), l)].concat(Yn(r)));
}
var Rr = !1;
try {
  Rr = process.env.NODE_ENV === "production";
} catch {
}
function Yo() {
  if (!Rr && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Bt(e) {
  if (e && on(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Fn.icon)
    return Fn.icon(e);
  if (e === null)
    return null;
  if (e && on(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function Cn(e, n) {
  return Array.isArray(n) && n.length > 0 || !Array.isArray(n) && n ? we({}, e, n) : {};
}
var He = /* @__PURE__ */ er.forwardRef(function(e, n) {
  var t = e.icon, r = e.mask, a = e.symbol, i = e.className, o = e.title, l = e.titleId, f = e.maskId, u = Bt(t), c = Cn("classes", [].concat(Yn(Do(e)), Yn(i.split(" ")))), d = Cn("transform", typeof e.transform == "string" ? Fn.transform(e.transform) : e.transform), w = Cn("mask", Bt(r)), k = wo(u, se(se(se(se({}, c), d), w), {}, {
    symbol: a,
    title: o,
    titleId: l,
    maskId: f
  }));
  if (!k)
    return Yo("Could not find icon", u), null;
  var _ = k.abstract, x = {
    ref: n
  };
  return Object.keys(e).forEach(function(A) {
    He.defaultProps.hasOwnProperty(A) || (x[A] = e[A]);
  }), Wo(_[0], x);
});
He.displayName = "FontAwesomeIcon";
He.propTypes = {
  beat: P.bool,
  border: P.bool,
  beatFade: P.bool,
  bounce: P.bool,
  className: P.string,
  fade: P.bool,
  flash: P.bool,
  mask: P.oneOfType([P.object, P.array, P.string]),
  maskId: P.string,
  fixedWidth: P.bool,
  inverse: P.bool,
  flip: P.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: P.oneOfType([P.object, P.array, P.string]),
  listItem: P.bool,
  pull: P.oneOf(["right", "left"]),
  pulse: P.bool,
  rotation: P.oneOf([0, 90, 180, 270]),
  shake: P.bool,
  size: P.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: P.bool,
  spinPulse: P.bool,
  spinReverse: P.bool,
  symbol: P.oneOfType([P.bool, P.string]),
  title: P.string,
  titleId: P.string,
  transform: P.oneOfType([P.string, P.object]),
  swapOpacity: P.bool
};
He.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
};
var Wo = _r.bind(null, er.createElement);
const Nr = (e) => /* @__PURE__ */ s(He, { ...e }), bs = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Yr, { ...e }) }), hs = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Wr, { ...e, children: e.children }) }), ys = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Ur, { ...e }) }), ws = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Br, { ...e }) }), ks = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Gr, { ...e }) }), Mr = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Bn, { ...e }) });
Mr.Group = Bn.Group;
Mr.Button = Bn.Button;
const xs = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(qr, { ...e }) }), Ss = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Xr, { ...e }) }), st = (e) => /* @__PURE__ */ s(Gt, { children: /* @__PURE__ */ s(sn, { ...e }) });
st.Panel = sn.Panel;
st.SHOW_PARENT = sn.SHOW_PARENT;
st.SHOW_CHILD = sn.SHOW_CHILD;
const As = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Vr, { ...e }) }), Uo = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(qt, { ...e }) });
Uo.Group = qt.Group;
const dn = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Me, { ...e }) });
dn.Group = Me.Group;
dn.Password = Me.Password;
dn.Search = Me.Search;
dn.TextArea = Me.TextArea;
const Es = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Kr, { ...e }) }), Ts = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Qr, { ...e }) }), Ps = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Jr, { ...e }) }), Cs = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Zr, { ...e }) }), Os = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(ea, { ...e }) }), Is = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(na, { ...e }) }), _s = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(ta, { ...e }) }), Rs = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(ra, { ...e }) }), Ns = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(aa, { ...e }) }), Ms = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(ia, { ...e }) }), $s = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(oa, { ...e }) }), Bo = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Xt, { ...e }) }), Go = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Xt.CheckableTag, { ...e }) });
Bo.CheckableTag = Go;
const Ls = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(sa, { ...e }) }), Ds = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(la, { ...e }) }), $r = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(fa, { ...e, children: /* @__PURE__ */ s(K, { children: e.children }) }) }), js = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(ca, { ...e }) }), Hs = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(ua, { ...e }) }), Fs = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(da, { ...e }) }), zs = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(ma, { ...e }) }), qo = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Vt, { ...e }) });
qo.Ribbon = Vt.Ribbon;
const Ys = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(va, { ...e }) }), Ws = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(pa, { ...e }) }), Us = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(ga, { ...e }) }), Bs = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(ba, { ...e }) }), Lr = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Gn, { ...e }) });
Lr.PRESENTED_IMAGE_DEFAULT = Gn.PRESENTED_IMAGE_DEFAULT;
Lr.PRESENTED_IMAGE_SIMPLE = Gn.PRESENTED_IMAGE_SIMPLE;
const Gs = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(ha, { ...e, children: /* @__PURE__ */ s(K, { children: e.children }) }) }), Xo = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Kt, { ...e }) });
Xo.Item = Kt.Item;
const qs = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(ya, { ...e }) }), Vo = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(wa, { ...e }) }), Xs = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(ka, { ...e }) }), Ko = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(xa, { ...e, active: !0, style: { width: "100%", ...e.style } }) }), Vs = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Sa, { ...e }) }), Ks = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Aa, { ...e }) }), Qs = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Ea, { ...e }) }), Qo = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Ta, { ...e }) }), Js = (e) => {
  const [n, t] = Pa.useNotification();
  return /* @__PURE__ */ V(b, { children: [
    t,
    /* @__PURE__ */ s("span", { onClick: () => {
      n.open({ ...e });
    }, children: e.children })
  ] });
}, Jo = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Qt, { ...e }) });
Jo.ErrorBoundary = Qt.ErrorBoundary;
const Zs = (e) => {
  const [n, t] = Ca.useMessage();
  return /* @__PURE__ */ V(b, { children: [
    t,
    /* @__PURE__ */ s("span", { onClick: () => {
      n.open({ ...e });
    }, children: e.children })
  ] });
}, Zo = (e) => {
  ja(e, []);
};
function es(e) {
  const [n, t] = bn(!0), [r, a] = bn(!1), [i, o] = bn(void 0);
  return Zo(() => {
    e().then((l) => {
      o(l);
    }).catch(() => {
      a(!0);
    }).finally(() => {
      t(!1);
    });
  }), [n, r, i];
}
function el(e) {
  const [n, t, r] = es(e.fetchData);
  return /* @__PURE__ */ s(K, { children: /* @__PURE__ */ V(Qo, { ...e, children: [
    n && /* @__PURE__ */ s(Ko, {}),
    t && /* @__PURE__ */ s(Vo, { status: "error", title: "Error Loading" }),
    !n && !t && e.children(r)
  ] }) });
}
const Dr = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Oa, { ...e }) }), Ae = (e) => /* @__PURE__ */ s(K, { children: /* @__PURE__ */ s(Dr, { align: "center", justify: "center", ...e, children: e.children }) }), nl = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Ia, { ...e }) }), ns = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(_a, { ...e }) }), Fe = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s($e, { ...e }) });
Fe.Sider = $e.Sider;
Fe.Footer = $e.Footer;
Fe.Content = $e.Content;
Fe.Header = $e.Header;
const tl = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Ra, { ...e }) });
function lt(e) {
  return /* @__PURE__ */ V(Ae, { vertical: !0, className: "globalNavigation__icon " + (e.className ?? ""), onClick: e.onClick, children: [
    e.icon,
    !e.hideLabel && /* @__PURE__ */ s("span", { className: "globalNavigation__iconLabel", children: e.label })
  ] });
}
function ts(e) {
  return /* @__PURE__ */ s(K, { children: /* @__PURE__ */ V(Ae, { vertical: !0, className: "globalNavigation__suiteLogo", children: [
    /* @__PURE__ */ s(lt, { icon: e.icon, label: "", hideLabel: !0 }),
    e.label
  ] }) });
}
var rs = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, as = rs, is = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]
};
function os(e) {
  return /* @__PURE__ */ s(K, { children: /* @__PURE__ */ s(
    $r,
    {
      placement: "right",
      title: /* @__PURE__ */ V(ns, { size: "large", children: [
        /* @__PURE__ */ s(K, { children: "Search" }),
        /* @__PURE__ */ s(K, { children: "Ctrl + K" })
      ] }),
      children: /* @__PURE__ */ s(Ae, { style: { height: jr }, children: /* @__PURE__ */ s(Fa, { onClick: e.onClick, icon: /* @__PURE__ */ s(Nr, { icon: as }) }) })
    }
  ) });
}
function ss(e) {
  return /* @__PURE__ */ V(K, { children: [
    e.type === "link" && /* @__PURE__ */ s(K, { children: /* @__PURE__ */ s($r, { title: e.label, placement: "right", children: /* @__PURE__ */ s(
      lt,
      {
        className: "globalNavigation__item",
        icon: e.icon,
        label: e.label,
        onClick: e.onClick,
        hideLabel: e.hideLabel
      }
    ) }) }),
    e.type === "menu" && /* @__PURE__ */ s(Un, { items: e.items })
  ] });
}
function Un({ items: e }) {
  return /* @__PURE__ */ s(Ae, { vertical: !0, children: e.map((n, t) => /* @__PURE__ */ V(K, { children: [
    n.type === "link" && /* @__PURE__ */ s(ss, { ...n }),
    n.type === "menu" && /* @__PURE__ */ s(Hr, { expandIcon: null, items: [ls(n, t)], className: "globalNavigation__menu" })
  ] })) });
}
function ls(e, n) {
  const t = e.children.map((r, a) => ({
    key: `${r.label}${a}`,
    ...r
  }));
  return t.unshift({ label: e.label, type: "group", key: e.label + "_groupTitle" }), {
    icon: /* @__PURE__ */ s(lt, { icon: e.icon, label: e.label, onClick: e.onClick, hideLabel: e.hideLabel }),
    className: "globalNavigation__item",
    key: `${e.label}${n}`,
    children: t
  };
}
function fs({ createItems: e }) {
  return /* @__PURE__ */ s(Ae, { style: { height: jr }, children: /* @__PURE__ */ s(
    Hr,
    {
      items: [
        {
          icon: /* @__PURE__ */ s(Nr, { icon: is, color: "gray", size: "2x" }),
          key: "NavigationCreate",
          children: e
        }
      ]
    }
  ) });
}
const jr = "42px", cs = 90, rl = (e) => {
  var n, t;
  return /* @__PURE__ */ s(
    Fe.Sider,
    {
      className: "globalNavigation",
      width: cs,
      style: {
        // for storybook rendering height only
        minHeight: "850px"
      },
      children: /* @__PURE__ */ V(Dr, { vertical: !0, justify: "space-between", style: { height: "100%", backgroundColor: "white" }, children: [
        /* @__PURE__ */ V("div", { children: [
          /* @__PURE__ */ s(ts, { ...e.logo }),
          /* @__PURE__ */ s("hr", {}),
          /* @__PURE__ */ V(Ae, { vertical: !0, children: [
            e.onSearchClick && /* @__PURE__ */ s(os, { onClick: e.onSearchClick }),
            ((n = e.createOptions) == null ? void 0 : n.canCreate) && ((t = e.createOptions) == null ? void 0 : t.createItems) && /* @__PURE__ */ V(K, { children: [
              /* @__PURE__ */ s(fs, { createItems: e.createOptions.createItems }),
              /* @__PURE__ */ s("hr", {})
            ] })
          ] }),
          /* @__PURE__ */ s(Un, { items: e.tools })
        ] }),
        /* @__PURE__ */ s(Un, { items: e.management })
      ] })
    }
  );
}, al = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Na, { ...e }) }), us = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Jt, { ...e, children: e.children }) });
us.Button = Jt.Button;
const ds = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Zt, { ...e }) });
ds.Item = Zt.Item;
const il = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Ma, { ...e }) }), Hr = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s($a, { ...e }) }), ol = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(La, { ...e }) }), sl = (e) => /* @__PURE__ */ s(b, { children: /* @__PURE__ */ s(Da, { ...e }) });
export {
  ol as Affix,
  Jo as Alert,
  al as Anchor,
  sl as App,
  Cs as AutoComplete,
  Ws as Avatar,
  qo as Badge,
  ds as Breadcrumb,
  Fa as Button,
  Ns as Calendar,
  Ys as Card,
  Ds as Carousel,
  st as Cascader,
  Ae as Center,
  Uo as Checkbox,
  cl as Col,
  _s as Collapse,
  xs as ColorPicker,
  b as ConfigProvider,
  As as DatePicker,
  Us as Descriptions,
  nl as Divider,
  Qs as Drawer,
  us as Dropdown,
  Lr as Empty,
  Dr as Flex,
  gs as FloatButton,
  hs as Form,
  rl as GlobalNavigation,
  ul as Grid,
  Nr as Icon,
  Fs as Image,
  dn as Input,
  Es as InputNumber,
  Fe as Layout,
  Xo as List,
  el as LoadingModal,
  ks as Mentions,
  Hr as Menu,
  Zs as Message,
  Qo as Modal,
  Js as Notification,
  il as Pagination,
  Ks as Popconfirm,
  Gs as Popover,
  qs as Progress,
  zs as QRCode,
  Mr as Radio,
  bs as Rate,
  Vo as Result,
  dl as Row,
  Ms as Segmented,
  ws as Select,
  Ko as Skeleton,
  Ss as Slider,
  ns as Space,
  Xs as Spin,
  js as Statistic,
  tl as Steps,
  Ts as Switch,
  Bs as Table,
  $s as Tabs,
  Bo as Tag,
  Os as TimePicker,
  Rs as Timeline,
  $r as Tooltip,
  Ls as Tour,
  Is as Transfer,
  Hs as Tree,
  ys as TreeSelect,
  Ps as Upload,
  Vs as Watermark
};
