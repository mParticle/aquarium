import { jsx as s, Fragment as te, jsxs as Q } from "react/jsx-runtime";
import { ConfigProvider as Xt, Button as zr, FloatButton as Yr, Rate as Wr, Form as Ur, TreeSelect as Br, Select as Gr, Mentions as qr, Radio as Gn, ColorPicker as Xr, Slider as Vr, Cascader as cn, DatePicker as Kr, Checkbox as Vt, Input as $e, InputNumber as Qr, Switch as Jr, Upload as Zr, AutoComplete as ea, TimePicker as na, Transfer as ta, Collapse as ra, Timeline as aa, Calendar as ia, Segmented as oa, Tabs as sa, Tag as Kt, Tour as la, Carousel as fa, Tooltip as ca, Statistic as ua, Tree as da, Image as ma, QRCode as va, Badge as Qt, Card as ga, Avatar as pa, Descriptions as ba, Table as ha, Empty as qn, Popover as ya, List as Jt, Progress as ka, Result as wa, Spin as xa, Skeleton as Sa, Watermark as Aa, Popconfirm as Ea, Drawer as Ca, Modal as Ta, notification as Pa, Alert as Zt, message as Oa, Flex as _a, Divider as Ia, Space as Na, Layout as De, Steps as Ra, Anchor as Ma, Dropdown as er, Breadcrumb as nr, Pagination as La, Menu as $a, Affix as Da, App as ja } from "antd";
import { Col as ml, Grid as vl, Row as gl } from "antd";
import * as ve from "react";
import tr, { useEffect as Ha, useState as tn, useMemo as Fa } from "react";
const za = {
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
}, h = (e) => /* @__PURE__ */ s(Xt, { ...e, theme: za }), rr = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(zr, { ...e, children: e.children }) }), ks = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Yr, { ...e }) });
function dt(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function b(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? dt(Object(t), !0).forEach(function(r) {
      U(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : dt(Object(t)).forEach(function(r) {
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
function Ya(e, n) {
  if (!(e instanceof n))
    throw new TypeError("Cannot call a class as a function");
}
function mt(e, n) {
  for (var t = 0; t < n.length; t++) {
    var r = n[t];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Wa(e, n, t) {
  return n && mt(e.prototype, n), t && mt(e, t), Object.defineProperty(e, "prototype", {
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
function Xn(e, n) {
  return Ba(e) || qa(e, n) || ar(e, n) || Va();
}
function je(e) {
  return Ua(e) || Ga(e) || ar(e) || Xa();
}
function Ua(e) {
  if (Array.isArray(e))
    return _n(e);
}
function Ba(e) {
  if (Array.isArray(e))
    return e;
}
function Ga(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function qa(e, n) {
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
function ar(e, n) {
  if (e) {
    if (typeof e == "string")
      return _n(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _n(e, n);
  }
}
function _n(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function Xa() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Va() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var vt = function() {
}, Vn = {}, ir = {}, or = null, sr = {
  mark: vt,
  measure: vt
};
try {
  typeof window < "u" && (Vn = window), typeof document < "u" && (ir = document), typeof MutationObserver < "u" && (or = MutationObserver), typeof performance < "u" && (sr = performance);
} catch {
}
var Ka = Vn.navigator || {}, gt = Ka.userAgent, pt = gt === void 0 ? "" : gt, fe = Vn, Y = ir, bt = or, Ge = sr;
fe.document;
var oe = !!Y.documentElement && !!Y.head && typeof Y.addEventListener == "function" && typeof Y.createElement == "function", lr = ~pt.indexOf("MSIE") || ~pt.indexOf("Trident/"), qe, Xe, Ve, Ke, Qe, re = "___FONT_AWESOME___", In = 16, fr = "fa", cr = "svg-inline--fa", be = "data-fa-i2svg", Nn = "data-fa-pseudo-element", Qa = "data-fa-pseudo-element-pending", Kn = "data-prefix", Qn = "data-icon", ht = "fontawesome-i2svg", Ja = "async", Za = ["HTML", "HEAD", "STYLE", "SCRIPT"], ur = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), z = "classic", W = "sharp", Jn = [z, W];
function He(e) {
  return new Proxy(e, {
    get: function(t, r) {
      return r in t ? t[r] : t[z];
    }
  });
}
var Ie = He((qe = {}, U(qe, z, {
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
}), U(qe, W, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), qe)), Ne = He((Xe = {}, U(Xe, z, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), U(Xe, W, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), Xe)), Re = He((Ve = {}, U(Ve, z, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), U(Ve, W, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), Ve)), ei = He((Ke = {}, U(Ke, z, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), U(Ke, W, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Ke)), ni = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, dr = "fa-layers-text", ti = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, ri = He((Qe = {}, U(Qe, z, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), U(Qe, W, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), Qe)), mr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ai = mr.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ii = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ge = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Me = /* @__PURE__ */ new Set();
Object.keys(Ne[z]).map(Me.add.bind(Me));
Object.keys(Ne[W]).map(Me.add.bind(Me));
var oi = [].concat(Jn, je(Me), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ge.GROUP, ge.SWAP_OPACITY, ge.PRIMARY, ge.SECONDARY]).concat(mr.map(function(e) {
  return "".concat(e, "x");
})).concat(ai.map(function(e) {
  return "w-".concat(e);
})), Oe = fe.FontAwesomeConfig || {};
function si(e) {
  var n = Y.querySelector("script[" + e + "]");
  if (n)
    return n.getAttribute(e);
}
function li(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (Y && typeof Y.querySelector == "function") {
  var fi = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  fi.forEach(function(e) {
    var n = Xn(e, 2), t = n[0], r = n[1], a = li(si(t));
    a != null && (Oe[r] = a);
  });
}
var vr = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: fr,
  replacementClass: cr,
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
Oe.familyPrefix && (Oe.cssPrefix = Oe.familyPrefix);
var Ae = b(b({}, vr), Oe);
Ae.autoReplaceSvg || (Ae.observeMutations = !1);
var k = {};
Object.keys(vr).forEach(function(e) {
  Object.defineProperty(k, e, {
    enumerable: !0,
    set: function(t) {
      Ae[e] = t, _e.forEach(function(r) {
        return r(k);
      });
    },
    get: function() {
      return Ae[e];
    }
  });
});
Object.defineProperty(k, "familyPrefix", {
  enumerable: !0,
  set: function(n) {
    Ae.cssPrefix = n, _e.forEach(function(t) {
      return t(k);
    });
  },
  get: function() {
    return Ae.cssPrefix;
  }
});
fe.FontAwesomeConfig = k;
var _e = [];
function ci(e) {
  return _e.push(e), function() {
    _e.splice(_e.indexOf(e), 1);
  };
}
var se = In, ee = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ui(e) {
  if (!(!e || !oe)) {
    var n = Y.createElement("style");
    n.setAttribute("type", "text/css"), n.innerHTML = e;
    for (var t = Y.head.childNodes, r = null, a = t.length - 1; a > -1; a--) {
      var i = t[a], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
    }
    return Y.head.insertBefore(n, r), e;
  }
}
var di = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Le() {
  for (var e = 12, n = ""; e-- > 0; )
    n += di[Math.random() * 62 | 0];
  return n;
}
function Ce(e) {
  for (var n = [], t = (e || []).length >>> 0; t--; )
    n[t] = e[t];
  return n;
}
function Zn(e) {
  return e.classList ? Ce(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(n) {
    return n;
  });
}
function gr(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function mi(e) {
  return Object.keys(e || {}).reduce(function(n, t) {
    return n + "".concat(t, '="').concat(gr(e[t]), '" ');
  }, "").trim();
}
function un(e) {
  return Object.keys(e || {}).reduce(function(n, t) {
    return n + "".concat(t, ": ").concat(e[t].trim(), ";");
  }, "");
}
function et(e) {
  return e.size !== ee.size || e.x !== ee.x || e.y !== ee.y || e.rotate !== ee.rotate || e.flipX || e.flipY;
}
function vi(e) {
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
function gi(e) {
  var n = e.transform, t = e.width, r = t === void 0 ? In : t, a = e.height, i = a === void 0 ? In : a, o = e.startCentered, l = o === void 0 ? !1 : o, f = "";
  return l && lr ? f += "translate(".concat(n.x / se - r / 2, "em, ").concat(n.y / se - i / 2, "em) ") : l ? f += "translate(calc(-50% + ".concat(n.x / se, "em), calc(-50% + ").concat(n.y / se, "em)) ") : f += "translate(".concat(n.x / se, "em, ").concat(n.y / se, "em) "), f += "scale(".concat(n.size / se * (n.flipX ? -1 : 1), ", ").concat(n.size / se * (n.flipY ? -1 : 1), ") "), f += "rotate(".concat(n.rotate, "deg) "), f;
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
function pr() {
  var e = fr, n = cr, t = k.cssPrefix, r = k.replacementClass, a = pi;
  if (t !== e || r !== n) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(n), "g");
    a = a.replace(i, ".".concat(t, "-")).replace(o, "--".concat(t, "-")).replace(l, ".".concat(r));
  }
  return a;
}
var yt = !1;
function yn() {
  k.autoAddCss && !yt && (ui(pr()), yt = !0);
}
var bi = {
  mixout: function() {
    return {
      dom: {
        css: pr,
        insertCss: yn
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        yn();
      },
      beforeI2svg: function() {
        yn();
      }
    };
  }
}, ae = fe || {};
ae[re] || (ae[re] = {});
ae[re].styles || (ae[re].styles = {});
ae[re].hooks || (ae[re].hooks = {});
ae[re].shims || (ae[re].shims = []);
var K = ae[re], br = [], hi = function e() {
  Y.removeEventListener("DOMContentLoaded", e), sn = 1, br.map(function(n) {
    return n();
  });
}, sn = !1;
oe && (sn = (Y.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Y.readyState), sn || Y.addEventListener("DOMContentLoaded", hi));
function yi(e) {
  oe && (sn ? setTimeout(e, 0) : br.push(e));
}
function Fe(e) {
  var n = e.tag, t = e.attributes, r = t === void 0 ? {} : t, a = e.children, i = a === void 0 ? [] : a;
  return typeof e == "string" ? gr(e) : "<".concat(n, " ").concat(mi(r), ">").concat(i.map(Fe).join(""), "</").concat(n, ">");
}
function kt(e, n, t) {
  if (e && e[n] && e[n][t])
    return {
      prefix: n,
      iconName: t,
      icon: e[n][t]
    };
}
var ki = function(n, t) {
  return function(r, a, i, o) {
    return n.call(t, r, a, i, o);
  };
}, kn = function(n, t, r, a) {
  var i = Object.keys(n), o = i.length, l = a !== void 0 ? ki(t, a) : t, f, u, c;
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
function xi(e, n) {
  var t = e.length, r = e.charCodeAt(n), a;
  return r >= 55296 && r <= 56319 && t > n + 1 && (a = e.charCodeAt(n + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function wt(e) {
  return Object.keys(e).reduce(function(n, t) {
    var r = e[t], a = !!r.icon;
    return a ? n[r.iconName] = r.icon : n[t] = r, n;
  }, {});
}
function Mn(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = t.skipHooks, a = r === void 0 ? !1 : r, i = wt(n);
  typeof K.hooks.addPack == "function" && !a ? K.hooks.addPack(e, wt(n)) : K.styles[e] = b(b({}, K.styles[e] || {}), i), e === "fas" && Mn("fa", n);
}
var Je, Ze, en, ke = K.styles, Si = K.shims, Ai = (Je = {}, U(Je, z, Object.values(Re[z])), U(Je, W, Object.values(Re[W])), Je), nt = null, hr = {}, yr = {}, kr = {}, wr = {}, xr = {}, Ei = (Ze = {}, U(Ze, z, Object.keys(Ie[z])), U(Ze, W, Object.keys(Ie[W])), Ze);
function Ci(e) {
  return ~oi.indexOf(e);
}
function Ti(e, n) {
  var t = n.split("-"), r = t[0], a = t.slice(1).join("-");
  return r === e && a !== "" && !Ci(a) ? a : null;
}
var Sr = function() {
  var n = function(i) {
    return kn(ke, function(o, l, f) {
      return o[f] = kn(l, i, {}), o;
    }, {});
  };
  hr = n(function(a, i, o) {
    if (i[3] && (a[i[3]] = o), i[2]) {
      var l = i[2].filter(function(f) {
        return typeof f == "number";
      });
      l.forEach(function(f) {
        a[f.toString(16)] = o;
      });
    }
    return a;
  }), yr = n(function(a, i, o) {
    if (a[o] = o, i[2]) {
      var l = i[2].filter(function(f) {
        return typeof f == "string";
      });
      l.forEach(function(f) {
        a[f] = o;
      });
    }
    return a;
  }), xr = n(function(a, i, o) {
    var l = i[2];
    return a[o] = o, l.forEach(function(f) {
      a[f] = o;
    }), a;
  });
  var t = "far" in ke || k.autoFetchSvg, r = kn(Si, function(a, i) {
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
  kr = r.names, wr = r.unicodes, nt = dn(k.styleDefault, {
    family: k.familyDefault
  });
};
ci(function(e) {
  nt = dn(e.styleDefault, {
    family: k.familyDefault
  });
});
Sr();
function tt(e, n) {
  return (hr[e] || {})[n];
}
function Pi(e, n) {
  return (yr[e] || {})[n];
}
function pe(e, n) {
  return (xr[e] || {})[n];
}
function Ar(e) {
  return kr[e] || {
    prefix: null,
    iconName: null
  };
}
function Oi(e) {
  var n = wr[e], t = tt("fas", e);
  return n || (t ? {
    prefix: "fas",
    iconName: t
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function ce() {
  return nt;
}
var rt = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function dn(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = n.family, r = t === void 0 ? z : t, a = Ie[r][e], i = Ne[r][e] || Ne[r][a], o = e in K.styles ? e : null;
  return i || o || null;
}
var xt = (en = {}, U(en, z, Object.keys(Re[z])), U(en, W, Object.keys(Re[W])), en);
function mn(e) {
  var n, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.skipLookups, a = r === void 0 ? !1 : r, i = (n = {}, U(n, z, "".concat(k.cssPrefix, "-").concat(z)), U(n, W, "".concat(k.cssPrefix, "-").concat(W)), n), o = null, l = z;
  (e.includes(i[z]) || e.some(function(u) {
    return xt[z].includes(u);
  })) && (l = z), (e.includes(i[W]) || e.some(function(u) {
    return xt[W].includes(u);
  })) && (l = W);
  var f = e.reduce(function(u, c) {
    var d = Ti(k.cssPrefix, c);
    if (ke[c] ? (c = Ai[l].includes(c) ? ei[l][c] : c, o = c, u.prefix = c) : Ei[l].indexOf(c) > -1 ? (o = c, u.prefix = dn(c, {
      family: l
    })) : d ? u.iconName = d : c !== k.replacementClass && c !== i[z] && c !== i[W] && u.rest.push(c), !a && u.prefix && u.iconName) {
      var g = o === "fa" ? Ar(u.iconName) : {}, w = pe(u.prefix, u.iconName);
      g.prefix && (o = null), u.iconName = g.iconName || w || u.iconName, u.prefix = g.prefix || u.prefix, u.prefix === "far" && !ke.far && ke.fas && !k.autoFetchSvg && (u.prefix = "fas");
    }
    return u;
  }, rt());
  return (e.includes("fa-brands") || e.includes("fab")) && (f.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (f.prefix = "fad"), !f.prefix && l === W && (ke.fass || k.autoFetchSvg) && (f.prefix = "fass", f.iconName = pe(f.prefix, f.iconName) || f.iconName), (f.prefix === "fa" || o === "fa") && (f.prefix = ce() || "fas"), f;
}
var _i = /* @__PURE__ */ function() {
  function e() {
    Ya(this, e), this.definitions = {};
  }
  return Wa(e, [{
    key: "add",
    value: function() {
      for (var t = this, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
        a[i] = arguments[i];
      var o = a.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(l) {
        t.definitions[l] = b(b({}, t.definitions[l] || {}), o[l]), Mn(l, o[l]);
        var f = Re[z][l];
        f && Mn(f, o[l]), Sr();
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
}(), St = [], we = {}, Se = {}, Ii = Object.keys(Se);
function Ni(e, n) {
  var t = n.mixoutsTo;
  return St = e, we = {}, Object.keys(Se).forEach(function(r) {
    Ii.indexOf(r) === -1 && delete Se[r];
  }), St.forEach(function(r) {
    var a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach(function(o) {
      typeof a[o] == "function" && (t[o] = a[o]), on(a[o]) === "object" && Object.keys(a[o]).forEach(function(l) {
        t[o] || (t[o] = {}), t[o][l] = a[o][l];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function(o) {
        we[o] || (we[o] = []), we[o].push(i[o]);
      });
    }
    r.provides && r.provides(Se);
  }), t;
}
function Ln(e, n) {
  for (var t = arguments.length, r = new Array(t > 2 ? t - 2 : 0), a = 2; a < t; a++)
    r[a - 2] = arguments[a];
  var i = we[e] || [];
  return i.forEach(function(o) {
    n = o.apply(null, [n].concat(r));
  }), n;
}
function he(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var a = we[e] || [];
  a.forEach(function(i) {
    i.apply(null, t);
  });
}
function ie() {
  var e = arguments[0], n = Array.prototype.slice.call(arguments, 1);
  return Se[e] ? Se[e].apply(null, n) : void 0;
}
function $n(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var n = e.iconName, t = e.prefix || ce();
  if (n)
    return n = pe(t, n) || n, kt(Er.definitions, t, n) || kt(K.styles, t, n);
}
var Er = new _i(), Ri = function() {
  k.autoReplaceSvg = !1, k.observeMutations = !1, he("noAuto");
}, Mi = {
  i2svg: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return oe ? (he("beforeI2svg", n), ie("pseudoElements2svg", n), ie("i2svg", n)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.autoReplaceSvgRoot;
    k.autoReplaceSvg === !1 && (k.autoReplaceSvg = !0), k.observeMutations = !0, yi(function() {
      $i({
        autoReplaceSvgRoot: t
      }), he("watch", n);
    });
  }
}, Li = {
  icon: function(n) {
    if (n === null)
      return null;
    if (on(n) === "object" && n.prefix && n.iconName)
      return {
        prefix: n.prefix,
        iconName: pe(n.prefix, n.iconName) || n.iconName
      };
    if (Array.isArray(n) && n.length === 2) {
      var t = n[1].indexOf("fa-") === 0 ? n[1].slice(3) : n[1], r = dn(n[0]);
      return {
        prefix: r,
        iconName: pe(r, t) || t
      };
    }
    if (typeof n == "string" && (n.indexOf("".concat(k.cssPrefix, "-")) > -1 || n.match(ni))) {
      var a = mn(n.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || ce(),
        iconName: pe(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof n == "string") {
      var i = ce();
      return {
        prefix: i,
        iconName: pe(i, n) || n
      };
    }
  }
}, q = {
  noAuto: Ri,
  config: k,
  dom: Mi,
  parse: Li,
  library: Er,
  findIconDefinition: $n,
  toHtml: Fe
}, $i = function() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = n.autoReplaceSvgRoot, r = t === void 0 ? Y : t;
  (Object.keys(K.styles).length > 0 || k.autoFetchSvg) && oe && k.autoReplaceSvg && q.dom.i2svg({
    node: r
  });
};
function vn(e, n) {
  return Object.defineProperty(e, "abstract", {
    get: n
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return Fe(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (oe) {
        var r = Y.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function Di(e) {
  var n = e.children, t = e.main, r = e.mask, a = e.attributes, i = e.styles, o = e.transform;
  if (et(o) && t.found && !r.found) {
    var l = t.width, f = t.height, u = {
      x: l / f / 2,
      y: 0.5
    };
    a.style = un(b(b({}, i), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: n
  }];
}
function ji(e) {
  var n = e.prefix, t = e.iconName, r = e.children, a = e.attributes, i = e.symbol, o = i === !0 ? "".concat(n, "-").concat(k.cssPrefix, "-").concat(t) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: b(b({}, a), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function at(e) {
  var n = e.icons, t = n.main, r = n.mask, a = e.prefix, i = e.iconName, o = e.transform, l = e.symbol, f = e.title, u = e.maskId, c = e.titleId, d = e.extra, g = e.watchable, w = g === void 0 ? !1 : g, P = r.found ? r : t, x = P.width, A = P.height, H = a === "fak", F = [k.replacementClass, i ? "".concat(k.cssPrefix, "-").concat(i) : ""].filter(function(X) {
    return d.classes.indexOf(X) === -1;
  }).filter(function(X) {
    return X !== "" || !!X;
  }).concat(d.classes).join(" "), E = {
    children: [],
    attributes: b(b({}, d.attributes), {}, {
      "data-prefix": a,
      "data-icon": i,
      class: F,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(x, " ").concat(A)
    })
  }, N = H && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(x / A * 16 * 0.0625, "em")
  } : {};
  w && (E.attributes[be] = ""), f && (E.children.push({
    tag: "title",
    attributes: {
      id: E.attributes["aria-labelledby"] || "title-".concat(c || Le())
    },
    children: [f]
  }), delete E.attributes.title);
  var v = b(b({}, E), {}, {
    prefix: a,
    iconName: i,
    main: t,
    mask: r,
    maskId: u,
    transform: o,
    symbol: l,
    styles: b(b({}, N), d.styles)
  }), B = r.found && t.found ? ie("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : ie("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  }, V = B.children, de = B.attributes;
  return v.children = V, v.attributes = de, l ? ji(v) : Di(v);
}
function At(e) {
  var n = e.content, t = e.width, r = e.height, a = e.transform, i = e.title, o = e.extra, l = e.watchable, f = l === void 0 ? !1 : l, u = b(b(b({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  f && (u[be] = "");
  var c = b({}, o.styles);
  et(a) && (c.transform = gi({
    transform: a,
    startCentered: !0,
    width: t,
    height: r
  }), c["-webkit-transform"] = c.transform);
  var d = un(c);
  d.length > 0 && (u.style = d);
  var g = [];
  return g.push({
    tag: "span",
    attributes: u,
    children: [n]
  }), i && g.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), g;
}
function Hi(e) {
  var n = e.content, t = e.title, r = e.extra, a = b(b(b({}, r.attributes), t ? {
    title: t
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = un(r.styles);
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
var wn = K.styles;
function Dn(e) {
  var n = e[0], t = e[1], r = e.slice(4), a = Xn(r, 1), i = a[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(k.cssPrefix, "-").concat(ge.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(k.cssPrefix, "-").concat(ge.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(k.cssPrefix, "-").concat(ge.PRIMARY),
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
var Fi = {
  found: !1,
  width: 512,
  height: 512
};
function zi(e, n) {
  !ur && !k.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(n, '" is missing.'));
}
function jn(e, n) {
  var t = n;
  return n === "fa" && k.styleDefault !== null && (n = ce()), new Promise(function(r, a) {
    if (ie("missingIconAbstract"), t === "fa") {
      var i = Ar(e) || {};
      e = i.iconName || e, n = i.prefix || n;
    }
    if (e && n && wn[n] && wn[n][e]) {
      var o = wn[n][e];
      return r(Dn(o));
    }
    zi(e, n), r(b(b({}, Fi), {}, {
      icon: k.showMissingIcons && e ? ie("missingIconAbstract") || {} : {}
    }));
  });
}
var Et = function() {
}, Hn = k.measurePerformance && Ge && Ge.mark && Ge.measure ? Ge : {
  mark: Et,
  measure: Et
}, Pe = 'FA "6.5.1"', Yi = function(n) {
  return Hn.mark("".concat(Pe, " ").concat(n, " begins")), function() {
    return Cr(n);
  };
}, Cr = function(n) {
  Hn.mark("".concat(Pe, " ").concat(n, " ends")), Hn.measure("".concat(Pe, " ").concat(n), "".concat(Pe, " ").concat(n, " begins"), "".concat(Pe, " ").concat(n, " ends"));
}, it = {
  begin: Yi,
  end: Cr
}, rn = function() {
};
function Ct(e) {
  var n = e.getAttribute ? e.getAttribute(be) : null;
  return typeof n == "string";
}
function Wi(e) {
  var n = e.getAttribute ? e.getAttribute(Kn) : null, t = e.getAttribute ? e.getAttribute(Qn) : null;
  return n && t;
}
function Ui(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(k.replacementClass);
}
function Bi() {
  if (k.autoReplaceSvg === !0)
    return an.replace;
  var e = an[k.autoReplaceSvg];
  return e || an.replace;
}
function Gi(e) {
  return Y.createElementNS("http://www.w3.org/2000/svg", e);
}
function qi(e) {
  return Y.createElement(e);
}
function Tr(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, t = n.ceFn, r = t === void 0 ? e.tag === "svg" ? Gi : qi : t;
  if (typeof e == "string")
    return Y.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    a.setAttribute(o, e.attributes[o]);
  });
  var i = e.children || [];
  return i.forEach(function(o) {
    a.appendChild(Tr(o, {
      ceFn: r
    }));
  }), a;
}
function Xi(e) {
  var n = " ".concat(e.outerHTML, " ");
  return n = "".concat(n, "Font Awesome fontawesome.com "), n;
}
var an = {
  replace: function(n) {
    var t = n[0];
    if (t.parentNode)
      if (n[1].forEach(function(a) {
        t.parentNode.insertBefore(Tr(a), t);
      }), t.getAttribute(be) === null && k.keepOriginalSource) {
        var r = Y.createComment(Xi(t));
        t.parentNode.replaceChild(r, t);
      } else
        t.remove();
  },
  nest: function(n) {
    var t = n[0], r = n[1];
    if (~Zn(t).indexOf(k.replacementClass))
      return an.replace(n);
    var a = new RegExp("".concat(k.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var i = r[0].attributes.class.split(" ").reduce(function(l, f) {
        return f === k.replacementClass || f.match(a) ? l.toSvg.push(f) : l.toNode.push(f), l;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    var o = r.map(function(l) {
      return Fe(l);
    }).join(`
`);
    t.setAttribute(be, ""), t.innerHTML = o;
  }
};
function Tt(e) {
  e();
}
function Pr(e, n) {
  var t = typeof n == "function" ? n : rn;
  if (e.length === 0)
    t();
  else {
    var r = Tt;
    k.mutateApproach === Ja && (r = fe.requestAnimationFrame || Tt), r(function() {
      var a = Bi(), i = it.begin("mutate");
      e.map(a), i(), t();
    });
  }
}
var ot = !1;
function Or() {
  ot = !0;
}
function Fn() {
  ot = !1;
}
var ln = null;
function Pt(e) {
  if (bt && k.observeMutations) {
    var n = e.treeCallback, t = n === void 0 ? rn : n, r = e.nodeCallback, a = r === void 0 ? rn : r, i = e.pseudoElementsCallback, o = i === void 0 ? rn : i, l = e.observeMutationsRoot, f = l === void 0 ? Y : l;
    ln = new bt(function(u) {
      if (!ot) {
        var c = ce();
        Ce(u).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !Ct(d.addedNodes[0]) && (k.searchPseudoElements && o(d.target), t(d.target)), d.type === "attributes" && d.target.parentNode && k.searchPseudoElements && o(d.target.parentNode), d.type === "attributes" && Ct(d.target) && ~ii.indexOf(d.attributeName))
            if (d.attributeName === "class" && Wi(d.target)) {
              var g = mn(Zn(d.target)), w = g.prefix, P = g.iconName;
              d.target.setAttribute(Kn, w || c), P && d.target.setAttribute(Qn, P);
            } else
              Ui(d.target) && a(d.target);
        });
      }
    }), oe && ln.observe(f, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function Vi() {
  ln && ln.disconnect();
}
function Ki(e) {
  var n = e.getAttribute("style"), t = [];
  return n && (t = n.split(";").reduce(function(r, a) {
    var i = a.split(":"), o = i[0], l = i.slice(1);
    return o && l.length > 0 && (r[o] = l.join(":").trim()), r;
  }, {})), t;
}
function Qi(e) {
  var n = e.getAttribute("data-prefix"), t = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", a = mn(Zn(e));
  return a.prefix || (a.prefix = ce()), n && t && (a.prefix = n, a.iconName = t), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Pi(a.prefix, e.innerText) || tt(a.prefix, Rn(e.innerText))), !a.iconName && k.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function Ji(e) {
  var n = Ce(e.attributes).reduce(function(a, i) {
    return a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a;
  }, {}), t = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return k.autoA11y && (t ? n["aria-labelledby"] = "".concat(k.replacementClass, "-title-").concat(r || Le()) : (n["aria-hidden"] = "true", n.focusable = "false")), n;
}
function Zi() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: ee,
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
function Ot(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, t = Qi(e), r = t.iconName, a = t.prefix, i = t.rest, o = Ji(e), l = Ln("parseNodeAttributes", {}, e), f = n.styleParser ? Ki(e) : [];
  return b({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: ee,
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
var eo = K.styles;
function _r(e) {
  var n = k.autoReplaceSvg === "nest" ? Ot(e, {
    styleParser: !1
  }) : Ot(e);
  return ~n.extra.classes.indexOf(dr) ? ie("generateLayersText", e, n) : ie("generateSvgReplacementMutation", e, n);
}
var ue = /* @__PURE__ */ new Set();
Jn.map(function(e) {
  ue.add("fa-".concat(e));
});
Object.keys(Ie[z]).map(ue.add.bind(ue));
Object.keys(Ie[W]).map(ue.add.bind(ue));
ue = je(ue);
function _t(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!oe)
    return Promise.resolve();
  var t = Y.documentElement.classList, r = function(d) {
    return t.add("".concat(ht, "-").concat(d));
  }, a = function(d) {
    return t.remove("".concat(ht, "-").concat(d));
  }, i = k.autoFetchSvg ? ue : Jn.map(function(c) {
    return "fa-".concat(c);
  }).concat(Object.keys(eo));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(dr, ":not([").concat(be, "])")].concat(i.map(function(c) {
    return ".".concat(c, ":not([").concat(be, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var l = [];
  try {
    l = Ce(e.querySelectorAll(o));
  } catch {
  }
  if (l.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  var f = it.begin("onTree"), u = l.reduce(function(c, d) {
    try {
      var g = _r(d);
      g && c.push(g);
    } catch (w) {
      ur || w.name === "MissingIcon" && console.error(w);
    }
    return c;
  }, []);
  return new Promise(function(c, d) {
    Promise.all(u).then(function(g) {
      Pr(g, function() {
        r("active"), r("complete"), a("pending"), typeof n == "function" && n(), f(), c();
      });
    }).catch(function(g) {
      f(), d(g);
    });
  });
}
function no(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  _r(e).then(function(t) {
    t && Pr([t], n);
  });
}
function to(e) {
  return function(n) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (n || {}).icon ? n : $n(n || {}), a = t.mask;
    return a && (a = (a || {}).icon ? a : $n(a || {})), e(r, b(b({}, t), {}, {
      mask: a
    }));
  };
}
var ro = function(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = t.transform, a = r === void 0 ? ee : r, i = t.symbol, o = i === void 0 ? !1 : i, l = t.mask, f = l === void 0 ? null : l, u = t.maskId, c = u === void 0 ? null : u, d = t.title, g = d === void 0 ? null : d, w = t.titleId, P = w === void 0 ? null : w, x = t.classes, A = x === void 0 ? [] : x, H = t.attributes, F = H === void 0 ? {} : H, E = t.styles, N = E === void 0 ? {} : E;
  if (n) {
    var v = n.prefix, B = n.iconName, V = n.icon;
    return vn(b({
      type: "icon"
    }, n), function() {
      return he("beforeDOMElementCreation", {
        iconDefinition: n,
        params: t
      }), k.autoA11y && (g ? F["aria-labelledby"] = "".concat(k.replacementClass, "-title-").concat(P || Le()) : (F["aria-hidden"] = "true", F.focusable = "false")), at({
        icons: {
          main: Dn(V),
          mask: f ? Dn(f.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: v,
        iconName: B,
        transform: b(b({}, ee), a),
        symbol: o,
        title: g,
        maskId: c,
        titleId: P,
        extra: {
          attributes: F,
          styles: N,
          classes: A
        }
      });
    });
  }
}, ao = {
  mixout: function() {
    return {
      icon: to(ro)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.treeCallback = _t, t.nodeCallback = no, t;
      }
    };
  },
  provides: function(n) {
    n.i2svg = function(t) {
      var r = t.node, a = r === void 0 ? Y : r, i = t.callback, o = i === void 0 ? function() {
      } : i;
      return _t(a, o);
    }, n.generateSvgReplacementMutation = function(t, r) {
      var a = r.iconName, i = r.title, o = r.titleId, l = r.prefix, f = r.transform, u = r.symbol, c = r.mask, d = r.maskId, g = r.extra;
      return new Promise(function(w, P) {
        Promise.all([jn(a, l), c.iconName ? jn(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(x) {
          var A = Xn(x, 2), H = A[0], F = A[1];
          w([t, at({
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
            extra: g,
            watchable: !0
          })]);
        }).catch(P);
      });
    }, n.generateAbstractIcon = function(t) {
      var r = t.children, a = t.attributes, i = t.main, o = t.transform, l = t.styles, f = un(l);
      f.length > 0 && (a.style = f);
      var u;
      return et(o) && (u = ie("generateAbstractTransformGrouping", {
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
}, io = {
  mixout: function() {
    return {
      layer: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.classes, i = a === void 0 ? [] : a;
        return vn({
          type: "layer"
        }, function() {
          he("beforeDOMElementCreation", {
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
              class: ["".concat(k.cssPrefix, "-layers")].concat(je(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, oo = {
  mixout: function() {
    return {
      counter: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.title, i = a === void 0 ? null : a, o = r.classes, l = o === void 0 ? [] : o, f = r.attributes, u = f === void 0 ? {} : f, c = r.styles, d = c === void 0 ? {} : c;
        return vn({
          type: "counter",
          content: t
        }, function() {
          return he("beforeDOMElementCreation", {
            content: t,
            params: r
          }), Hi({
            content: t.toString(),
            title: i,
            extra: {
              attributes: u,
              styles: d,
              classes: ["".concat(k.cssPrefix, "-layers-counter")].concat(je(l))
            }
          });
        });
      }
    };
  }
}, so = {
  mixout: function() {
    return {
      text: function(t) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, i = a === void 0 ? ee : a, o = r.title, l = o === void 0 ? null : o, f = r.classes, u = f === void 0 ? [] : f, c = r.attributes, d = c === void 0 ? {} : c, g = r.styles, w = g === void 0 ? {} : g;
        return vn({
          type: "text",
          content: t
        }, function() {
          return he("beforeDOMElementCreation", {
            content: t,
            params: r
          }), At({
            content: t,
            transform: b(b({}, ee), i),
            title: l,
            extra: {
              attributes: d,
              styles: w,
              classes: ["".concat(k.cssPrefix, "-layers-text")].concat(je(u))
            }
          });
        });
      }
    };
  },
  provides: function(n) {
    n.generateLayersText = function(t, r) {
      var a = r.title, i = r.transform, o = r.extra, l = null, f = null;
      if (lr) {
        var u = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        l = c.width / u, f = c.height / u;
      }
      return k.autoA11y && !a && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, At({
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
}, lo = new RegExp('"', "ug"), It = [1105920, 1112319];
function fo(e) {
  var n = e.replace(lo, ""), t = xi(n, 0), r = t >= It[0] && t <= It[1], a = n.length === 2 ? n[0] === n[1] : !1;
  return {
    value: Rn(a ? n[0] : n),
    isSecondary: r || a
  };
}
function Nt(e, n) {
  var t = "".concat(Qa).concat(n.replace(":", "-"));
  return new Promise(function(r, a) {
    if (e.getAttribute(t) !== null)
      return r();
    var i = Ce(e.children), o = i.filter(function(V) {
      return V.getAttribute(Nn) === n;
    })[0], l = fe.getComputedStyle(e, n), f = l.getPropertyValue("font-family").match(ti), u = l.getPropertyValue("font-weight"), c = l.getPropertyValue("content");
    if (o && !f)
      return e.removeChild(o), r();
    if (f && c !== "none" && c !== "") {
      var d = l.getPropertyValue("content"), g = ~["Sharp"].indexOf(f[2]) ? W : z, w = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(f[2]) ? Ne[g][f[2].toLowerCase()] : ri[g][u], P = fo(d), x = P.value, A = P.isSecondary, H = f[0].startsWith("FontAwesome"), F = tt(w, x), E = F;
      if (H) {
        var N = Oi(x);
        N.iconName && N.prefix && (F = N.iconName, w = N.prefix);
      }
      if (F && !A && (!o || o.getAttribute(Kn) !== w || o.getAttribute(Qn) !== E)) {
        e.setAttribute(t, E), o && e.removeChild(o);
        var v = Zi(), B = v.extra;
        B.attributes[Nn] = n, jn(F, w).then(function(V) {
          var de = at(b(b({}, v), {}, {
            icons: {
              main: V,
              mask: rt()
            },
            prefix: w,
            iconName: E,
            extra: B,
            watchable: !0
          })), X = Y.createElementNS("http://www.w3.org/2000/svg", "svg");
          n === "::before" ? e.insertBefore(X, e.firstChild) : e.appendChild(X), X.outerHTML = de.map(function(Te) {
            return Fe(Te);
          }).join(`
`), e.removeAttribute(t), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function co(e) {
  return Promise.all([Nt(e, "::before"), Nt(e, "::after")]);
}
function uo(e) {
  return e.parentNode !== document.head && !~Za.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Nn) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Rt(e) {
  if (oe)
    return new Promise(function(n, t) {
      var r = Ce(e.querySelectorAll("*")).filter(uo).map(co), a = it.begin("searchPseudoElements");
      Or(), Promise.all(r).then(function() {
        a(), Fn(), n();
      }).catch(function() {
        a(), Fn(), t();
      });
    });
}
var mo = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(t) {
        return t.pseudoElementsCallback = Rt, t;
      }
    };
  },
  provides: function(n) {
    n.pseudoElements2svg = function(t) {
      var r = t.node, a = r === void 0 ? Y : r;
      k.searchPseudoElements && Rt(a);
    };
  }
}, Mt = !1, vo = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Or(), Mt = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        Pt(Ln("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        Vi();
      },
      watch: function(t) {
        var r = t.observeMutationsRoot;
        Mt ? Fn() : Pt(Ln("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, Lt = function(n) {
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
}, go = {
  mixout: function() {
    return {
      parse: {
        transform: function(t) {
          return Lt(t);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var a = r.getAttribute("data-fa-transform");
        return a && (t.transform = Lt(a)), t;
      }
    };
  },
  provides: function(n) {
    n.generateAbstractTransformGrouping = function(t) {
      var r = t.main, a = t.transform, i = t.containerWidth, o = t.iconWidth, l = {
        transform: "translate(".concat(i / 2, " 256)")
      }, f = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), u = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), c = "rotate(".concat(a.rotate, " 0 0)"), d = {
        transform: "".concat(f, " ").concat(u, " ").concat(c)
      }, g = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, w = {
        outer: l,
        inner: d,
        path: g
      };
      return {
        tag: "g",
        attributes: b({}, w.outer),
        children: [{
          tag: "g",
          attributes: b({}, w.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: b(b({}, r.icon.attributes), w.path)
          }]
        }]
      };
    };
  }
}, xn = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function $t(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || n) && (e.attributes.fill = "black"), e;
}
function po(e) {
  return e.tag === "g" ? e.children : [e];
}
var bo = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var a = r.getAttribute("data-fa-mask"), i = a ? mn(a.split(" ").map(function(o) {
          return o.trim();
        })) : rt();
        return i.prefix || (i.prefix = ce()), t.mask = i, t.maskId = r.getAttribute("data-fa-mask-id"), t;
      }
    };
  },
  provides: function(n) {
    n.generateAbstractMask = function(t) {
      var r = t.children, a = t.attributes, i = t.main, o = t.mask, l = t.maskId, f = t.transform, u = i.width, c = i.icon, d = o.width, g = o.icon, w = vi({
        transform: f,
        containerWidth: d,
        iconWidth: u
      }), P = {
        tag: "rect",
        attributes: b(b({}, xn), {}, {
          fill: "white"
        })
      }, x = c.children ? {
        children: c.children.map($t)
      } : {}, A = {
        tag: "g",
        attributes: b({}, w.inner),
        children: [$t(b({
          tag: c.tag,
          attributes: b(b({}, c.attributes), w.path)
        }, x))]
      }, H = {
        tag: "g",
        attributes: b({}, w.outer),
        children: [A]
      }, F = "mask-".concat(l || Le()), E = "clip-".concat(l || Le()), N = {
        tag: "mask",
        attributes: b(b({}, xn), {}, {
          id: F,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [P, H]
      }, v = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: E
          },
          children: po(g)
        }, N]
      };
      return r.push(v, {
        tag: "rect",
        attributes: b({
          fill: "currentColor",
          "clip-path": "url(#".concat(E, ")"),
          mask: "url(#".concat(F, ")")
        }, xn)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, ho = {
  provides: function(n) {
    var t = !1;
    fe.matchMedia && (t = fe.matchMedia("(prefers-reduced-motion: reduce)").matches), n.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: b(b({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = b(b({}, i), {}, {
        attributeName: "opacity"
      }), l = {
        tag: "circle",
        attributes: b(b({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return t || l.children.push({
        tag: "animate",
        attributes: b(b({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: b(b({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(l), r.push({
        tag: "path",
        attributes: b(b({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: t ? [] : [{
          tag: "animate",
          attributes: b(b({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), t || r.push({
        tag: "path",
        attributes: b(b({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: b(b({}, o), {}, {
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
}, yo = {
  hooks: function() {
    return {
      parseNodeAttributes: function(t, r) {
        var a = r.getAttribute("data-fa-symbol"), i = a === null ? !1 : a === "" ? !0 : a;
        return t.symbol = i, t;
      }
    };
  }
}, ko = [bi, ao, io, oo, so, mo, vo, go, bo, ho, yo];
Ni(ko, {
  mixoutsTo: q
});
q.noAuto;
q.config;
q.library;
q.dom;
var zn = q.parse;
q.findIconDefinition;
q.toHtml;
var wo = q.icon;
q.layer;
q.text;
q.counter;
function xo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yn = { exports: {} }, nn = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dt;
function So() {
  if (Dt)
    return $;
  Dt = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, P = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, H = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
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
                case P:
                case w:
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
  function N(v) {
    return E(v) === u;
  }
  return $.AsyncMode = f, $.ConcurrentMode = u, $.ContextConsumer = l, $.ContextProvider = o, $.Element = n, $.ForwardRef = c, $.Fragment = r, $.Lazy = P, $.Memo = w, $.Portal = t, $.Profiler = i, $.StrictMode = a, $.Suspense = d, $.isAsyncMode = function(v) {
    return N(v) || E(v) === f;
  }, $.isConcurrentMode = N, $.isContextConsumer = function(v) {
    return E(v) === l;
  }, $.isContextProvider = function(v) {
    return E(v) === o;
  }, $.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === n;
  }, $.isForwardRef = function(v) {
    return E(v) === c;
  }, $.isFragment = function(v) {
    return E(v) === r;
  }, $.isLazy = function(v) {
    return E(v) === P;
  }, $.isMemo = function(v) {
    return E(v) === w;
  }, $.isPortal = function(v) {
    return E(v) === t;
  }, $.isProfiler = function(v) {
    return E(v) === i;
  }, $.isStrictMode = function(v) {
    return E(v) === a;
  }, $.isSuspense = function(v) {
    return E(v) === d;
  }, $.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === u || v === i || v === a || v === d || v === g || typeof v == "object" && v !== null && (v.$$typeof === P || v.$$typeof === w || v.$$typeof === o || v.$$typeof === l || v.$$typeof === c || v.$$typeof === A || v.$$typeof === H || v.$$typeof === F || v.$$typeof === x);
  }, $.typeOf = E, $;
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
var jt;
function Ao() {
  return jt || (jt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, P = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, A = e ? Symbol.for("react.fundamental") : 60117, H = e ? Symbol.for("react.responder") : 60118, F = e ? Symbol.for("react.scope") : 60119;
    function E(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === r || p === u || p === i || p === a || p === d || p === g || typeof p == "object" && p !== null && (p.$$typeof === P || p.$$typeof === w || p.$$typeof === o || p.$$typeof === l || p.$$typeof === c || p.$$typeof === A || p.$$typeof === H || p.$$typeof === F || p.$$typeof === x);
    }
    function N(p) {
      if (typeof p == "object" && p !== null) {
        var Z = p.$$typeof;
        switch (Z) {
          case n:
            var Be = p.type;
            switch (Be) {
              case f:
              case u:
              case r:
              case i:
              case a:
              case d:
                return Be;
              default:
                var ut = Be && Be.$$typeof;
                switch (ut) {
                  case l:
                  case c:
                  case P:
                  case w:
                  case o:
                    return ut;
                  default:
                    return Z;
                }
            }
          case t:
            return Z;
        }
      }
    }
    var v = f, B = u, V = l, de = o, X = n, Te = c, We = r, gn = P, pn = w, ye = t, bn = i, J = a, me = d, Ue = !1;
    function hn(p) {
      return Ue || (Ue = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), m(p) || N(p) === f;
    }
    function m(p) {
      return N(p) === u;
    }
    function y(p) {
      return N(p) === l;
    }
    function I(p) {
      return N(p) === o;
    }
    function O(p) {
      return typeof p == "object" && p !== null && p.$$typeof === n;
    }
    function S(p) {
      return N(p) === c;
    }
    function R(p) {
      return N(p) === r;
    }
    function C(p) {
      return N(p) === P;
    }
    function _(p) {
      return N(p) === w;
    }
    function M(p) {
      return N(p) === t;
    }
    function j(p) {
      return N(p) === i;
    }
    function L(p) {
      return N(p) === a;
    }
    function G(p) {
      return N(p) === d;
    }
    D.AsyncMode = v, D.ConcurrentMode = B, D.ContextConsumer = V, D.ContextProvider = de, D.Element = X, D.ForwardRef = Te, D.Fragment = We, D.Lazy = gn, D.Memo = pn, D.Portal = ye, D.Profiler = bn, D.StrictMode = J, D.Suspense = me, D.isAsyncMode = hn, D.isConcurrentMode = m, D.isContextConsumer = y, D.isContextProvider = I, D.isElement = O, D.isForwardRef = S, D.isFragment = R, D.isLazy = C, D.isMemo = _, D.isPortal = M, D.isProfiler = j, D.isStrictMode = L, D.isSuspense = G, D.isValidElementType = E, D.typeOf = N;
  }()), D;
}
var Ht;
function Ir() {
  return Ht || (Ht = 1, process.env.NODE_ENV === "production" ? nn.exports = So() : nn.exports = Ao()), nn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Sn, Ft;
function Eo() {
  if (Ft)
    return Sn;
  Ft = 1;
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
  return Sn = a() ? Object.assign : function(i, o) {
    for (var l, f = r(i), u, c = 1; c < arguments.length; c++) {
      l = Object(arguments[c]);
      for (var d in l)
        n.call(l, d) && (f[d] = l[d]);
      if (e) {
        u = e(l);
        for (var g = 0; g < u.length; g++)
          t.call(l, u[g]) && (f[u[g]] = l[u[g]]);
      }
    }
    return f;
  }, Sn;
}
var An, zt;
function st() {
  if (zt)
    return An;
  zt = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return An = e, An;
}
var En, Yt;
function Nr() {
  return Yt || (Yt = 1, En = Function.call.bind(Object.prototype.hasOwnProperty)), En;
}
var Cn, Wt;
function Co() {
  if (Wt)
    return Cn;
  Wt = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var n = st(), t = {}, r = Nr();
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
              var g = Error(
                (f || "React class") + ": " + l + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw g.name = "Invariant Violation", g;
            }
            d = i[c](o, c, f, l, null, n);
          } catch (P) {
            d = P;
          }
          if (d && !(d instanceof Error) && e(
            (f || "React class") + ": type specification of " + l + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in t)) {
            t[d.message] = !0;
            var w = u ? u() : "";
            e(
              "Failed " + l + " type: " + d.message + (w ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, Cn = a, Cn;
}
var Tn, Ut;
function To() {
  if (Ut)
    return Tn;
  Ut = 1;
  var e = Ir(), n = Eo(), t = st(), r = Nr(), a = Co(), i = function() {
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
      var y = m && (u && m[u] || m[c]);
      if (typeof y == "function")
        return y;
    }
    var g = "<<anonymous>>", w = {
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
      element: N(),
      elementType: v(),
      instanceOf: B,
      node: Te(),
      objectOf: de,
      oneOf: V,
      oneOfType: X,
      shape: gn,
      exact: pn
    };
    function P(m, y) {
      return m === y ? m !== 0 || 1 / m === 1 / y : m !== m && y !== y;
    }
    function x(m, y) {
      this.message = m, this.data = y && typeof y == "object" ? y : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function A(m) {
      if (process.env.NODE_ENV !== "production")
        var y = {}, I = 0;
      function O(R, C, _, M, j, L, G) {
        if (M = M || g, L = L || _, G !== t) {
          if (f) {
            var p = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw p.name = "Invariant Violation", p;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Z = M + ":" + _;
            !y[Z] && // Avoid spamming the console because they are often not actionable except for lib authors
            I < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + L + "` prop on `" + M + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), y[Z] = !0, I++);
          }
        }
        return C[_] == null ? R ? C[_] === null ? new x("The " + j + " `" + L + "` is marked as required " + ("in `" + M + "`, but its value is `null`.")) : new x("The " + j + " `" + L + "` is marked as required in " + ("`" + M + "`, but its value is `undefined`.")) : null : m(C, _, M, j, L);
      }
      var S = O.bind(null, !1);
      return S.isRequired = O.bind(null, !0), S;
    }
    function H(m) {
      function y(I, O, S, R, C, _) {
        var M = I[O], j = J(M);
        if (j !== m) {
          var L = me(M);
          return new x(
            "Invalid " + R + " `" + C + "` of type " + ("`" + L + "` supplied to `" + S + "`, expected ") + ("`" + m + "`."),
            { expectedType: m }
          );
        }
        return null;
      }
      return A(y);
    }
    function F() {
      return A(o);
    }
    function E(m) {
      function y(I, O, S, R, C) {
        if (typeof m != "function")
          return new x("Property `" + C + "` of component `" + S + "` has invalid PropType notation inside arrayOf.");
        var _ = I[O];
        if (!Array.isArray(_)) {
          var M = J(_);
          return new x("Invalid " + R + " `" + C + "` of type " + ("`" + M + "` supplied to `" + S + "`, expected an array."));
        }
        for (var j = 0; j < _.length; j++) {
          var L = m(_, j, S, R, C + "[" + j + "]", t);
          if (L instanceof Error)
            return L;
        }
        return null;
      }
      return A(y);
    }
    function N() {
      function m(y, I, O, S, R) {
        var C = y[I];
        if (!l(C)) {
          var _ = J(C);
          return new x("Invalid " + S + " `" + R + "` of type " + ("`" + _ + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return A(m);
    }
    function v() {
      function m(y, I, O, S, R) {
        var C = y[I];
        if (!e.isValidElementType(C)) {
          var _ = J(C);
          return new x("Invalid " + S + " `" + R + "` of type " + ("`" + _ + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return A(m);
    }
    function B(m) {
      function y(I, O, S, R, C) {
        if (!(I[O] instanceof m)) {
          var _ = m.name || g, M = hn(I[O]);
          return new x("Invalid " + R + " `" + C + "` of type " + ("`" + M + "` supplied to `" + S + "`, expected ") + ("instance of `" + _ + "`."));
        }
        return null;
      }
      return A(y);
    }
    function V(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function y(I, O, S, R, C) {
        for (var _ = I[O], M = 0; M < m.length; M++)
          if (P(_, m[M]))
            return null;
        var j = JSON.stringify(m, function(G, p) {
          var Z = me(p);
          return Z === "symbol" ? String(p) : p;
        });
        return new x("Invalid " + R + " `" + C + "` of value `" + String(_) + "` " + ("supplied to `" + S + "`, expected one of " + j + "."));
      }
      return A(y);
    }
    function de(m) {
      function y(I, O, S, R, C) {
        if (typeof m != "function")
          return new x("Property `" + C + "` of component `" + S + "` has invalid PropType notation inside objectOf.");
        var _ = I[O], M = J(_);
        if (M !== "object")
          return new x("Invalid " + R + " `" + C + "` of type " + ("`" + M + "` supplied to `" + S + "`, expected an object."));
        for (var j in _)
          if (r(_, j)) {
            var L = m(_, j, S, R, C + "." + j, t);
            if (L instanceof Error)
              return L;
          }
        return null;
      }
      return A(y);
    }
    function X(m) {
      if (!Array.isArray(m))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var y = 0; y < m.length; y++) {
        var I = m[y];
        if (typeof I != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Ue(I) + " at index " + y + "."
          ), o;
      }
      function O(S, R, C, _, M) {
        for (var j = [], L = 0; L < m.length; L++) {
          var G = m[L], p = G(S, R, C, _, M, t);
          if (p == null)
            return null;
          p.data && r(p.data, "expectedType") && j.push(p.data.expectedType);
        }
        var Z = j.length > 0 ? ", expected one of type [" + j.join(", ") + "]" : "";
        return new x("Invalid " + _ + " `" + M + "` supplied to " + ("`" + C + "`" + Z + "."));
      }
      return A(O);
    }
    function Te() {
      function m(y, I, O, S, R) {
        return ye(y[I]) ? null : new x("Invalid " + S + " `" + R + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return A(m);
    }
    function We(m, y, I, O, S) {
      return new x(
        (m || "React class") + ": " + y + " type `" + I + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + S + "`."
      );
    }
    function gn(m) {
      function y(I, O, S, R, C) {
        var _ = I[O], M = J(_);
        if (M !== "object")
          return new x("Invalid " + R + " `" + C + "` of type `" + M + "` " + ("supplied to `" + S + "`, expected `object`."));
        for (var j in m) {
          var L = m[j];
          if (typeof L != "function")
            return We(S, R, C, j, me(L));
          var G = L(_, j, S, R, C + "." + j, t);
          if (G)
            return G;
        }
        return null;
      }
      return A(y);
    }
    function pn(m) {
      function y(I, O, S, R, C) {
        var _ = I[O], M = J(_);
        if (M !== "object")
          return new x("Invalid " + R + " `" + C + "` of type `" + M + "` " + ("supplied to `" + S + "`, expected `object`."));
        var j = n({}, I[O], m);
        for (var L in j) {
          var G = m[L];
          if (r(m, L) && typeof G != "function")
            return We(S, R, C, L, me(G));
          if (!G)
            return new x(
              "Invalid " + R + " `" + C + "` key `" + L + "` supplied to `" + S + "`.\nBad object: " + JSON.stringify(I[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(m), null, "  ")
            );
          var p = G(_, L, S, R, C + "." + L, t);
          if (p)
            return p;
        }
        return null;
      }
      return A(y);
    }
    function ye(m) {
      switch (typeof m) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !m;
        case "object":
          if (Array.isArray(m))
            return m.every(ye);
          if (m === null || l(m))
            return !0;
          var y = d(m);
          if (y) {
            var I = y.call(m), O;
            if (y !== m.entries) {
              for (; !(O = I.next()).done; )
                if (!ye(O.value))
                  return !1;
            } else
              for (; !(O = I.next()).done; ) {
                var S = O.value;
                if (S && !ye(S[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function bn(m, y) {
      return m === "symbol" ? !0 : y ? y["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && y instanceof Symbol : !1;
    }
    function J(m) {
      var y = typeof m;
      return Array.isArray(m) ? "array" : m instanceof RegExp ? "object" : bn(y, m) ? "symbol" : y;
    }
    function me(m) {
      if (typeof m > "u" || m === null)
        return "" + m;
      var y = J(m);
      if (y === "object") {
        if (m instanceof Date)
          return "date";
        if (m instanceof RegExp)
          return "regexp";
      }
      return y;
    }
    function Ue(m) {
      var y = me(m);
      switch (y) {
        case "array":
        case "object":
          return "an " + y;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + y;
        default:
          return y;
      }
    }
    function hn(m) {
      return !m.constructor || !m.constructor.name ? g : m.constructor.name;
    }
    return w.checkPropTypes = a, w.resetWarningCache = a.resetWarningCache, w.PropTypes = w, w;
  }, Tn;
}
var Pn, Bt;
function Po() {
  if (Bt)
    return Pn;
  Bt = 1;
  var e = st();
  function n() {
  }
  function t() {
  }
  return t.resetWarningCache = n, Pn = function() {
    function r(o, l, f, u, c, d) {
      if (d !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
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
  var Oo = Ir(), _o = !0;
  Yn.exports = To()(Oo.isElement, _o);
} else
  Yn.exports = Po()();
var Io = Yn.exports;
const T = /* @__PURE__ */ xo(Io);
function Gt(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    n && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function le(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2 ? Gt(Object(t), !0).forEach(function(r) {
      xe(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Gt(Object(t)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function fn(e) {
  "@babel/helpers - typeof";
  return fn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
    return typeof n;
  } : function(n) {
    return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
  }, fn(e);
}
function xe(e, n, t) {
  return n in e ? Object.defineProperty(e, n, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[n] = t, e;
}
function No(e, n) {
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
  var t = No(e, n), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(n.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (t[r] = e[r]);
  }
  return t;
}
function Wn(e) {
  return Mo(e) || Lo(e) || $o(e) || Do();
}
function Mo(e) {
  if (Array.isArray(e))
    return Un(e);
}
function Lo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function $o(e, n) {
  if (e) {
    if (typeof e == "string")
      return Un(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set")
      return Array.from(e);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Un(e, n);
  }
}
function Un(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, r = new Array(n); t < n; t++)
    r[t] = e[t];
  return r;
}
function Do() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function jo(e) {
  var n, t = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, o = e.shake, l = e.flash, f = e.spin, u = e.spinPulse, c = e.spinReverse, d = e.pulse, g = e.fixedWidth, w = e.inverse, P = e.border, x = e.listItem, A = e.flip, H = e.size, F = e.rotation, E = e.pull, N = (n = {
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
    "fa-fw": g,
    "fa-inverse": w,
    "fa-border": P,
    "fa-li": x,
    "fa-flip": A === !0,
    "fa-flip-horizontal": A === "horizontal" || A === "both",
    "fa-flip-vertical": A === "vertical" || A === "both"
  }, xe(n, "fa-".concat(H), typeof H < "u" && H !== null), xe(n, "fa-rotate-".concat(F), typeof F < "u" && F !== null && F !== 0), xe(n, "fa-pull-".concat(E), typeof E < "u" && E !== null), xe(n, "fa-swap-opacity", e.swapOpacity), n);
  return Object.keys(N).map(function(v) {
    return N[v] ? v : null;
  }).filter(function(v) {
    return v;
  });
}
function Ho(e) {
  return e = e - 0, e === e;
}
function Rr(e) {
  return Ho(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(n, t) {
    return t ? t.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Fo = ["style"];
function zo(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Yo(e) {
  return e.split(";").map(function(n) {
    return n.trim();
  }).filter(function(n) {
    return n;
  }).reduce(function(n, t) {
    var r = t.indexOf(":"), a = Rr(t.slice(0, r)), i = t.slice(r + 1).trim();
    return a.startsWith("webkit") ? n[zo(a)] = i : n[a] = i, n;
  }, {});
}
function Mr(e, n) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof n == "string")
    return n;
  var r = (n.children || []).map(function(f) {
    return Mr(e, f);
  }), a = Object.keys(n.attributes || {}).reduce(function(f, u) {
    var c = n.attributes[u];
    switch (u) {
      case "class":
        f.attrs.className = c, delete n.attributes.class;
        break;
      case "style":
        f.attrs.style = Yo(c);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? f.attrs[u.toLowerCase()] = c : f.attrs[Rr(u)] = c;
    }
    return f;
  }, {
    attrs: {}
  }), i = t.style, o = i === void 0 ? {} : i, l = Ro(t, Fo);
  return a.attrs.style = le(le({}, a.attrs.style), o), e.apply(void 0, [n.tag, le(le({}, a.attrs), l)].concat(Wn(r)));
}
var Lr = !1;
try {
  Lr = process.env.NODE_ENV === "production";
} catch {
}
function Wo() {
  if (!Lr && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function qt(e) {
  if (e && fn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (zn.icon)
    return zn.icon(e);
  if (e === null)
    return null;
  if (e && fn(e) === "object" && e.prefix && e.iconName)
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
function On(e, n) {
  return Array.isArray(n) && n.length > 0 || !Array.isArray(n) && n ? xe({}, e, n) : {};
}
var ze = /* @__PURE__ */ tr.forwardRef(function(e, n) {
  var t = e.icon, r = e.mask, a = e.symbol, i = e.className, o = e.title, l = e.titleId, f = e.maskId, u = qt(t), c = On("classes", [].concat(Wn(jo(e)), Wn(i.split(" ")))), d = On("transform", typeof e.transform == "string" ? zn.transform(e.transform) : e.transform), g = On("mask", qt(r)), w = wo(u, le(le(le(le({}, c), d), g), {}, {
    symbol: a,
    title: o,
    titleId: l,
    maskId: f
  }));
  if (!w)
    return Wo("Could not find icon", u), null;
  var P = w.abstract, x = {
    ref: n
  };
  return Object.keys(e).forEach(function(A) {
    ze.defaultProps.hasOwnProperty(A) || (x[A] = e[A]);
  }), Uo(P[0], x);
});
ze.displayName = "FontAwesomeIcon";
ze.propTypes = {
  beat: T.bool,
  border: T.bool,
  beatFade: T.bool,
  bounce: T.bool,
  className: T.string,
  fade: T.bool,
  flash: T.bool,
  mask: T.oneOfType([T.object, T.array, T.string]),
  maskId: T.string,
  fixedWidth: T.bool,
  inverse: T.bool,
  flip: T.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: T.oneOfType([T.object, T.array, T.string]),
  listItem: T.bool,
  pull: T.oneOf(["right", "left"]),
  pulse: T.bool,
  rotation: T.oneOf([0, 90, 180, 270]),
  shake: T.bool,
  size: T.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: T.bool,
  spinPulse: T.bool,
  spinReverse: T.bool,
  symbol: T.oneOfType([T.bool, T.string]),
  title: T.string,
  titleId: T.string,
  transform: T.oneOfType([T.string, T.object]),
  swapOpacity: T.bool
};
ze.defaultProps = {
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
var Uo = Mr.bind(null, tr.createElement);
const $r = (e) => /* @__PURE__ */ s(ze, { ...e }), ws = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Wr, { ...e }) }), xs = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Ur, { ...e, children: e.children }) }), Ss = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Br, { ...e }) }), As = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Gr, { ...e }) }), Es = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(qr, { ...e }) }), Dr = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Gn, { ...e }) });
Dr.Group = Gn.Group;
Dr.Button = Gn.Button;
const Cs = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Xr, { ...e }) }), Ts = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Vr, { ...e }) }), lt = (e) => /* @__PURE__ */ s(Xt, { children: /* @__PURE__ */ s(cn, { ...e }) });
lt.Panel = cn.Panel;
lt.SHOW_PARENT = cn.SHOW_PARENT;
lt.SHOW_CHILD = cn.SHOW_CHILD;
const Ps = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Kr, { ...e }) }), Bo = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Vt, { ...e }) });
Bo.Group = Vt.Group;
const Ye = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s($e, { ...e }) });
Ye.Group = $e.Group;
Ye.Password = $e.Password;
Ye.Search = $e.Search;
Ye.TextArea = $e.TextArea;
const Os = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Qr, { ...e }) }), _s = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Jr, { ...e }) }), Is = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Zr, { ...e }) }), Ns = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(ea, { ...e }) }), Rs = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(na, { ...e }) }), Ms = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(ta, { ...e }) }), Ls = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(ra, { ...e }) }), $s = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(aa, { ...e }) }), Ds = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(ia, { ...e }) }), js = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(oa, { ...e }) }), Hs = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(sa, { ...e }) }), Go = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Kt, { ...e }) }), qo = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Kt.CheckableTag, { ...e }) });
Go.CheckableTag = qo;
const Fs = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(la, { ...e }) }), zs = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(fa, { ...e }) }), jr = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(ca, { ...e, children: /* @__PURE__ */ s(te, { children: e.children }) }) }), Ys = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(ua, { ...e }) }), Ws = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(da, { ...e }) }), Us = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(ma, { ...e }) }), Bs = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(va, { ...e }) }), Xo = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Qt, { ...e }) });
Xo.Ribbon = Qt.Ribbon;
const Gs = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(ga, { ...e }) }), Vo = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(pa, { ...e }) }), qs = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(ba, { ...e }) }), Xs = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(ha, { ...e }) }), Hr = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(qn, { ...e }) });
Hr.PRESENTED_IMAGE_DEFAULT = qn.PRESENTED_IMAGE_DEFAULT;
Hr.PRESENTED_IMAGE_SIMPLE = qn.PRESENTED_IMAGE_SIMPLE;
const Vs = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(ya, { ...e, children: /* @__PURE__ */ s(te, { children: e.children }) }) }), Ko = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Jt, { ...e }) });
Ko.Item = Jt.Item;
const Ks = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(ka, { ...e }) }), Qo = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(wa, { ...e }) }), Qs = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(xa, { ...e }) }), Jo = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Sa, { ...e, active: !0, style: { width: "100%", ...e.style } }) }), Js = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Aa, { ...e }) }), Zs = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Ea, { ...e }) }), el = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Ca, { ...e }) }), Zo = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Ta, { ...e }) }), nl = (e) => {
  const [n, t] = Pa.useNotification();
  return /* @__PURE__ */ Q(h, { children: [
    t,
    /* @__PURE__ */ s("span", { onClick: () => {
      n.open({ ...e });
    }, children: e.children })
  ] });
}, es = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Zt, { ...e }) });
es.ErrorBoundary = Zt.ErrorBoundary;
const tl = (e) => {
  const [n, t] = Oa.useMessage();
  return /* @__PURE__ */ Q(h, { children: [
    t,
    /* @__PURE__ */ s("span", { onClick: () => {
      n.open({ ...e });
    }, children: e.children })
  ] });
}, ns = (e) => {
  Ha(e, []);
};
function ts(e) {
  const [n, t] = tn(!0), [r, a] = tn(!1), [i, o] = tn(void 0);
  return ns(() => {
    e().then((l) => {
      o(l);
    }).catch(() => {
      a(!0);
    }).finally(() => {
      t(!1);
    });
  }), [n, r, i];
}
function rl(e) {
  const [n, t, r] = ts(e.fetchData);
  return /* @__PURE__ */ s(te, { children: /* @__PURE__ */ Q(Zo, { ...e, children: [
    n && /* @__PURE__ */ s(Jo, {}),
    t && /* @__PURE__ */ s(Qo, { status: "error", title: "Error Loading" }),
    !n && !t && e.children(r)
  ] }) });
}
const Fr = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(_a, { ...e }) }), ne = (e) => /* @__PURE__ */ s(te, { children: /* @__PURE__ */ s(Fr, { align: "center", justify: "center", ...e, children: e.children }) }), al = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Ia, { ...e }) }), rs = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Na, { ...e }) }), Ee = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(De, { ...e }) });
Ee.Sider = De.Sider;
Ee.Footer = De.Footer;
Ee.Content = De.Content;
Ee.Header = De.Header;
const il = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Ra, { ...e }) });
function ft(e) {
  return /* @__PURE__ */ Q(ne, { vertical: !0, className: "globalNavigation__icon " + (e.className ?? ""), onClick: e.onClick, children: [
    e.icon,
    !e.hideLabel && /* @__PURE__ */ s("span", { className: "globalNavigation__iconLabel", children: e.label })
  ] });
}
function as(e) {
  return /* @__PURE__ */ Q(ne, { vertical: !0, className: "globalNavigation__suiteLogo", children: [
    /* @__PURE__ */ s(ft, { icon: e.icon, label: "", hideLabel: !0, className: "globalNavigation__icon--suiteLogo" }),
    e.label,
    /* @__PURE__ */ s("div", { className: "globalNavigation__divider" })
  ] });
}
var is = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, os = is, ss = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]
};
function ls(e) {
  return /* @__PURE__ */ s("span", { className: "globalNavigation__search", onClick: e.onClick, children: /* @__PURE__ */ s(
    jr,
    {
      placement: "right",
      title: /* @__PURE__ */ Q(rs, { size: "large", children: [
        /* @__PURE__ */ s(te, { children: "Search" }),
        /* @__PURE__ */ s(te, { children: "Ctrl + K" })
      ] }),
      children: /* @__PURE__ */ s(ne, { children: /* @__PURE__ */ s(rr, { icon: /* @__PURE__ */ s($r, { icon: os }) }) })
    }
  ) });
}
function fs(e) {
  return /* @__PURE__ */ Q(te, { children: [
    e.type === "link" && /* @__PURE__ */ s(te, { children: /* @__PURE__ */ s(jr, { title: e.label, placement: "right", children: /* @__PURE__ */ s(
      ft,
      {
        className: "globalNavigation__item",
        icon: e.icon,
        label: e.label,
        onClick: e.onClick,
        hideLabel: e.hideLabel
      }
    ) }) }),
    e.type === "menu" && /* @__PURE__ */ s(Bn, { onClick: e.onClick, items: e.items })
  ] });
}
function Bn(e) {
  return /* @__PURE__ */ s(ne, { vertical: !0, children: e.items.map((n, t) => /* @__PURE__ */ Q(te, { children: [
    n.type === "link" && /* @__PURE__ */ s(fs, { onClick: () => {
      var r;
      return (r = e.onClick) == null ? void 0 : r.call(e, n);
    }, ...n }),
    n.type === "menu" && /* @__PURE__ */ s(
      ct,
      {
        expandIcon: null,
        items: [cs(n, t)],
        className: "globalNavigation__menu",
        onClick: (r) => {
          var a;
          return (a = e.onClick) == null ? void 0 : a.call(e, n);
        }
      }
    )
  ] })) });
}
function cs(e, n) {
  let t;
  return e.children && (t = e.children.map((r, a) => ({
    key: `${String(r.label)}${a}`,
    ...r
  })), t.unshift({ label: e.label, type: "group", key: e.label + "_groupTitle" })), {
    icon: /* @__PURE__ */ s(ft, { icon: e.icon, label: e.label, onClick: e.onClick, hideLabel: e.hideLabel }),
    className: "globalNavigation__item",
    key: `${e.label}${n}`,
    children: t
  };
}
function us(e) {
  const n = [
    {
      key: "NavigationCreate",
      icon: /* @__PURE__ */ s(ne, { style: { pointerEvents: "none" }, children: /* @__PURE__ */ s(rr, { icon: /* @__PURE__ */ s($r, { icon: ss }) }) }),
      children: e.createItems
    }
  ];
  return /* @__PURE__ */ s(ne, { children: /* @__PURE__ */ s(
    ct,
    {
      className: "globalNavigation__menu globalNavigation__item",
      items: n,
      expandIcon: null,
      defaultOpenKeys: ["NavigationCreate"]
    }
  ) });
}
function ds(e) {
  const n = Fa(o, [e.orgs]), [t, r] = tn(n), i = [
    {
      key: "WorkspaceSelector",
      icon: /* @__PURE__ */ s(Vo, { className: "workspaceSelector__avatar", children: "WS" }),
      children: [{
        key: "search",
        className: "workspaceSelector__search",
        label: /* @__PURE__ */ s(
          Ye,
          {
            placeholder: "Search",
            className: "workspaceSelector__searchInput",
            onChange: l,
            onClick: (f) => {
              f.preventDefault(), f.stopPropagation();
            }
          }
        )
      }, ...t]
    }
  ];
  return /* @__PURE__ */ s(
    ct,
    {
      className: "globalNavigation__menu globalNavigation__item",
      items: i,
      expandIcon: null
    }
  );
  function o() {
    return e.orgs.reduce((f, u) => (f.push({
      type: "org",
      className: "workspaceSelector__orgName",
      label: u.label,
      id: u.id,
      key: u.id,
      accounts: u.accounts,
      workspaces: u.accounts.flatMap((c) => c.workspaces)
    }), u.accounts.forEach((c) => {
      const d = "workspaceSelector__accountName" + (c.label ? "" : " workspaceSelector__accountName--hidden");
      f.push({
        type: "account",
        className: d,
        label: c.label,
        id: c.id,
        key: c.id,
        workspaces: c.workspaces
      }), c.workspaces.forEach((g) => {
        f.push({
          type: "workspace",
          className: "workspaceSelector__workspaceName",
          label: g.label,
          id: g.id,
          key: g.id,
          onClick: g.onClick
        });
      });
    }), f), []);
  }
  function l(f) {
    const u = f.target.value.toLowerCase(), c = n == null ? void 0 : n.filter((d) => {
      var w, P;
      return g(d) || ((w = d.accounts) == null ? void 0 : w.some(g)) || ((P = d.workspaces) == null ? void 0 : P.some(g));
      function g(x) {
        return x.label.toString().toLowerCase().includes(u) || x.id.toString().toLowerCase().includes(u);
      }
    });
    r(c);
  }
}
const ms = (e) => /* @__PURE__ */ ve.createElement("svg", { id: "mpLogo", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 202.8 169", xmlSpace: "preserve", ...e }, /* @__PURE__ */ ve.createElement("polygon", { fill: "currentColor", points: "135.2,126.7 135.2,169 202.8,126.7 202.8,84.5" }), /* @__PURE__ */ ve.createElement("polygon", { fill: "currentColor", points: "67.6,126.7 67.6,169 135.2,126.7 135.2,84.5" }), /* @__PURE__ */ ve.createElement("polygon", { fill: "currentColor", points: "0,126.7 0,169 67.6,126.7 67.6,84.5" }), /* @__PURE__ */ ve.createElement("polygon", { fill: "currentColor", points: "202.8,0 135.2,42.2 135.2,84.5 202.8,42.2" }), /* @__PURE__ */ ve.createElement("polygon", { fill: "currentColor", points: "135.2,0 67.6,42.2 67.6,84.5 135.2,42.2" }), /* @__PURE__ */ ve.createElement("polygon", { fill: "currentColor", points: "67.6,0 0,42.2 0,84.5 67.6,42.2" })), vs = 90, ol = (e) => /* @__PURE__ */ s(Ee, { className: "globalNavigation", children: /* @__PURE__ */ s(Ee.Sider, { className: "globalNavigation__sider", width: vs, children: /* @__PURE__ */ Q(Fr, { vertical: !0, justify: "space-between", style: { height: "100%" }, children: [
  /* @__PURE__ */ Q("div", { children: [
    /* @__PURE__ */ s(as, { ...e.logo }),
    /* @__PURE__ */ Q(ne, { vertical: !0, children: [
      e.onSearchClick && /* @__PURE__ */ s(ls, { onClick: e.onSearchClick }),
      e.createItems && /* @__PURE__ */ s(us, { createItems: e.createItems })
    ] }),
    /* @__PURE__ */ s(Bn, { items: e.tools, onClick: e.onClick })
  ] }),
  /* @__PURE__ */ s(ne, { children: /* @__PURE__ */ s("div", { className: "globalNavigation__divider" }) }),
  /* @__PURE__ */ s(Bn, { items: e.management, onClick: e.onClick }),
  e.orgs && /* @__PURE__ */ s(ds, { orgs: e.orgs }),
  /* @__PURE__ */ s(ne, { className: "globalNavigation__mpHome", children: /* @__PURE__ */ s(ms, { className: "globalNavigation__mpSvg" }) })
] }) }) }), sl = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Ma, { ...e }) }), gs = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(er, { ...e, children: e.children }) });
gs.Button = er.Button;
const ps = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(nr, { ...e }) });
ps.Item = nr.Item;
const ll = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(La, { ...e }) }), ct = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s($a, { ...e }) }), fl = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(Da, { ...e }) }), cl = (e) => /* @__PURE__ */ s(h, { children: /* @__PURE__ */ s(ja, { ...e }) });
export {
  fl as Affix,
  es as Alert,
  sl as Anchor,
  cl as App,
  Ns as AutoComplete,
  Vo as Avatar,
  Xo as Badge,
  ps as Breadcrumb,
  rr as Button,
  Ds as Calendar,
  Gs as Card,
  zs as Carousel,
  lt as Cascader,
  ne as Center,
  Bo as Checkbox,
  ml as Col,
  Ls as Collapse,
  Cs as ColorPicker,
  h as ConfigProvider,
  Ps as DatePicker,
  qs as Descriptions,
  al as Divider,
  el as Drawer,
  gs as Dropdown,
  Hr as Empty,
  Fr as Flex,
  ks as FloatButton,
  xs as Form,
  ol as GlobalNavigation,
  vl as Grid,
  $r as Icon,
  Us as Image,
  Ye as Input,
  Os as InputNumber,
  Ee as Layout,
  Ko as List,
  rl as LoadingModal,
  Es as Mentions,
  ct as Menu,
  tl as Message,
  Zo as Modal,
  nl as Notification,
  ll as Pagination,
  Zs as Popconfirm,
  Vs as Popover,
  Ks as Progress,
  Bs as QRCode,
  Dr as Radio,
  ws as Rate,
  Qo as Result,
  gl as Row,
  js as Segmented,
  As as Select,
  Jo as Skeleton,
  Ts as Slider,
  rs as Space,
  Qs as Spin,
  Ys as Statistic,
  il as Steps,
  _s as Switch,
  Xs as Table,
  Hs as Tabs,
  Go as Tag,
  Rs as TimePicker,
  $s as Timeline,
  jr as Tooltip,
  Fs as Tour,
  Ms as Transfer,
  Ws as Tree,
  Ss as TreeSelect,
  Is as Upload,
  Js as Watermark
};
