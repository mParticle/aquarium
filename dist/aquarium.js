var rT = Object.defineProperty, aT = Object.defineProperties;
var iT = Object.getOwnPropertyDescriptors;
var p4 = Object.getOwnPropertySymbols;
var oT = Object.prototype.hasOwnProperty, lT = Object.prototype.propertyIsEnumerable;
var h4 = (r, o, s) => o in r ? rT(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[o] = s, be = (r, o) => {
  for (var s in o || (o = {}))
    oT.call(o, s) && h4(r, s, o[s]);
  if (p4)
    for (var s of p4(o))
      lT.call(o, s) && h4(r, s, o[s]);
  return r;
}, gi = (r, o) => aT(r, iT(o));
import { jsx as B, Fragment as Mu, jsxs as va } from "react/jsx-runtime";
import { ConfigProvider as LS, Button as AS, FloatButton as uT, Rate as sT, Form as Al, TreeSelect as cT, Select as fT, Mentions as PS, Radio as u2, ColorPicker as dT, Slider as vT, Cascader as bm, DatePicker as pT, Checkbox as IS, Input as Nf, InputNumber as hT, Switch as mT, Upload as gT, AutoComplete as yT, TimePicker as CT, Transfer as bT, Collapse as ST, Timeline as ET, Calendar as wT, Segmented as xT, Tabs as TT, Tag as zS, Tour as RT, Carousel as kT, Tooltip as _T, Statistic as MT, Tree as OT, Image as NT, QRCode as DT, Badge as HS, Card as s2, Avatar as $S, Descriptions as US, Table as LT, Empty as c2, Popover as AT, List as jS, Progress as PT, Result as IT, Spin as zT, Skeleton as HT, Watermark as $T, Popconfirm as UT, Drawer as jT, Modal as VT, notification as FT, Alert as VS, message as BT, Flex as WT, Divider as KT, Space as GT, Layout as e1, Steps as qT, Anchor as YT, Dropdown as FS, Breadcrumb as BS, Pagination as QT, Menu as ZT, Affix as XT, App as JT } from "antd";
import { Col as RA, Grid as kA, Row as _A } from "antd";
import * as S from "react";
import Oa, { useEffect as Bo, useState as Wo, useMemo as E5, useCallback as Ml, useRef as Ma, useLayoutEffect as eR, useImperativeHandle as WS, createContext as Sm, useContext as Ou, forwardRef as tR, Fragment as nR, createElement as rR } from "react";
const aR = {
  token: {
    colorLinkHover: "#ab8eff",
    controlOutline: "rgba(0.21176470816135406, 0, 0.8196078538894653, 0.10000000149011612)",
    colorWarningOutline: "#fffbe6",
    colorErrorOutline: "#fff1f0",
    controlItemBgHover: "#f8f6fb",
    controlItemBgActive: "#ebe8f8",
    controlItemBgActiveHover: "#c3aeff",
    colorText: "#0f0e0e",
    colorTextSecondary: "#212020",
    colorTextTertiary: "#2c2d2b",
    colorTextQuaternary: "#505249",
    colorFill: "#dcdcd8",
    colorFillSecondary: "#ebe8f8",
    colorFillTertiary: "#faf9f8",
    colorFillQuaternary: "#f8f6fb",
    colorBgLayout: "#fff",
    colorBgSpotlight: "#2c2d2b",
    colorBorder: "#c3aeff",
    colorBorderSecondary: "#eceae9",
    colorSplit: "#eceae9",
    colorPrimaryBg: "#f8f6fb",
    colorPrimaryBgHover: "#ebe8f8",
    colorPrimaryBorder: "#c3aeff",
    colorPrimaryBorderHover: "#ab8eff",
    colorPrimaryHover: "#ab8eff",
    colorPrimaryActive: "#8255ff",
    colorPrimaryTextHover: "#5f29f8",
    colorPrimaryText: "#2c00aa",
    colorPrimaryTextActive: "#20007a",
    colorSuccessHover: "#73d13d",
    colorSuccessTextHover: "#237804",
    colorSuccessText: "#135200",
    colorSuccessTextActive: "#092b00",
    colorWarningHover: "#ffc53d",
    colorWarningTextHover: "#ad6800",
    colorWarningText: "#874d00",
    colorWarningTextActive: "#613400",
    colorErrorBg: "#fff1f0",
    colorErrorBgHover: "#ffccc7",
    colorErrorBorder: "#ffa39e",
    colorErrorBorderHover: "#ff7875",
    colorErrorHover: "#ff4d4f",
    colorErrorActive: "#cf1322",
    colorErrorTextHover: "#a8071a",
    colorErrorText: "#820014",
    colorErrorTextActive: "#5c0011",
    colorBgMask: "#babbb5",
    colorTextBase: "#0f0e0e",
    colorPrimary: "#3600d1",
    colorError: "#f5222d",
    borderRadiusLG: 16,
    borderRadius: 8,
    fontFamily: "'GT America', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    fontFamilyCode: "'Roboto Mono', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    "mpBrandPrimary.1": "#f8f6fb",
    "mpBrandPrimary.2": "#ebe8f8",
    "mpBrandPrimary.3": "#dbceff",
    "mpBrandPrimary.4": "#c3aeff",
    "mpBrandPrimary.5": "#ab8eff",
    "mpBrandPrimary.6": "#8255ff",
    "mpBrandPrimary.7": "#5f29f8",
    "mpBrandPrimary.8": "#3600d1",
    "mpBrandPrimary.9": "#2c00aa",
    "mpBrandPrimary.10": "#20007a",
    "mpBrandSecondary.1": "#fff",
    "mpBrandSecondary.2": "#faf9f8",
    "mpBrandSecondary.3": "#eceae9",
    "mpBrandSecondary.4": "#dcdcd8",
    "mpBrandSecondary.5": "#babbb5",
    "mpBrandSecondary.6": "#717368",
    "mpBrandSecondary.7": "#505249",
    "mpBrandSecondary.8": "#2c2d2b",
    "mpBrandSecondary.9": "#212020",
    "mpBrandSecondary.10": "#0f0e0e",
    mpColorBorderDisabled: "#dcdcd8"
  },
  components: {
    Steps: {
      colorFillContent: "#dcdcd8",
      colorPrimary: "#2c2d2b",
      controlItemBgActive: "#babbb5"
    },
    Button: {
      borderColorDisabled: "#dcdcd8",
      primaryShadow: "0 2px 0 rgba(54, 0, 209, 0.1)",
      onlyIconSizeLG: 20,
      onlyIconSizeSM: 12
    },
    Menu: {
      darkItemBg: "#212020",
      darkItemColor: "#babbb5",
      darkItemDisabledColor: "#505249",
      darkSubMenuItemBg: "#0f0e0e",
      itemHoverBg: "#f8f6fb",
      subMenuItemBg: "#faf9f8",
      darkGroupTitleColor: "#babbb5"
    },
    Progress: {
      defaultColor: "#2c2d2b",
      remainingColor: "#eceae9"
    },
    Select: {
      multipleItemBg: "#ebe8f8",
      mpColorBorderDisabled: "#dcdcd8"
    },
    Table: {
      footerBg: "#faf9f8",
      headerBg: "#faf9f8",
      headerSplitColor: "#eceae9",
      rowSelectedHoverBg: "#ebe8f8"
    },
    Input: {
      activeShadow: "0 0 0 2px rgba(54, 0, 209, 0.1)",
      mpColorBorderDisabled: "#dcdcd8"
    },
    Checkbox: {
      mpColorBorderDisabled: "#dcdcd8"
    },
    Radio: {
      mpColorBorderDisabled: "#dcdcd8"
    },
    DatePicker: {
      mpColorBorderDisabled: "#dcdcd8"
    },
    TimePicker: {
      mpColorBorderDisabled: "#dcdcd8"
    },
    InputNumber: {
      mpColorBorderDisabled: "#dcdcd8"
    }
  }
}, Qe = (r) => /* @__PURE__ */ B(LS, gi(be({}, r), { theme: aR })), Em = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(AS, gi(be({}, r), { children: r.children })) });
Em.Group = AS.Group;
const CL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(uT, be({}, r)) }), bL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(sT, be({}, r)) }), Lu = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(Al, gi(be({}, r), { children: r.children })) });
Lu.useForm = Al.useForm;
Lu.useWatch = Al.useWatch;
Lu.useFormInstance = Al.useFormInstance;
Lu.Item = Al.Item;
Lu.List = Al.List;
Lu.displayName = Al.displayName;
Lu.Provider = Al.Provider;
Lu.ErrorList = Al.ErrorList;
const SL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(cT, be({}, r)) }), EL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(fT, be({}, r)) }), iR = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(PS, be({}, r)) });
iR.getMentions = PS.getMentions;
const KS = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(u2, be({}, r)) });
KS.Group = u2.Group;
KS.Button = u2.Button;
const wL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(dT, be({}, r)) }), xL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(vT, be({}, r)) }), f2 = (r) => /* @__PURE__ */ B(LS, { children: /* @__PURE__ */ B(bm, be({}, r)) });
f2.Panel = bm.Panel;
f2.SHOW_PARENT = bm.SHOW_PARENT;
f2.SHOW_CHILD = bm.SHOW_CHILD;
const TL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(pT, be({}, r)) }), oR = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(IS, be({}, r)) });
oR.Group = IS.Group;
const wm = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(Nf, be({}, r)) });
wm.Group = Nf.Group;
wm.Password = Nf.Password;
wm.Search = Nf.Search;
wm.TextArea = Nf.TextArea;
const RL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(hT, be({}, r)) }), kL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(mT, be({}, r)) }), _L = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(gT, be({}, r)) }), ML = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(yT, be({}, r)) }), OL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(CT, be({}, r)) }), NL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(bT, be({}, r)) }), DL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(ST, be({}, r)) }), LL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(ET, be({}, r)) }), AL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(wT, be({}, r)) }), PL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(xT, be({}, r)) }), IL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(TT, be({}, r)) }), lR = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(zS, be({}, r)) }), uR = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(zS.CheckableTag, be({}, r)) });
lR.CheckableTag = uR;
const zL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(RT, be({}, r)) }), HL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(kT, be({}, r)) }), xm = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(_T, gi(be({}, r), { children: /* @__PURE__ */ B(Mu, { children: r.children }) })) }), $L = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(MT, be({}, r)) }), UL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(OT, be({}, r)) }), jL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(NT, be({}, r)) }), VL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(DT, be({}, r)) }), sR = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(HS, be({}, r)) });
sR.Ribbon = HS.Ribbon;
const GS = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(s2, be({}, r)) });
GS.Meta = s2.Meta;
GS.Grid = s2.Grid;
const qS = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B($S, be({}, r)) });
qS.Group = $S.Group;
const cR = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(US, be({}, r)) });
cR.Item = US.Item;
const FL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(LT, be({}, r)) }), d2 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(c2, be({}, r)) });
d2.PRESENTED_IMAGE_DEFAULT = c2.PRESENTED_IMAGE_DEFAULT;
d2.PRESENTED_IMAGE_SIMPLE = c2.PRESENTED_IMAGE_SIMPLE;
const fR = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(AT, gi(be({}, r), { children: /* @__PURE__ */ B(Mu, { children: r.children }) })) }), dR = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(jS, be({}, r)) });
dR.Item = jS.Item;
const BL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(PT, be({}, r)) }), vR = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(IT, be({}, r)) }), pR = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(zT, be({}, r)) }), hR = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(HT, gi(be({}, r), { active: !0, style: be({ width: "100%" }, r.style) })) }), WL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B($T, be({}, r)) }), KL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(UT, gi(be({}, r), { children: /* @__PURE__ */ B(Mu, { children: r.children }) })) }), GL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(jT, be({}, r)) }), mR = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(VT, be({}, r)) }), qL = (r) => {
  const [o, s] = FT.useNotification();
  return /* @__PURE__ */ va(Qe, { children: [
    s,
    /* @__PURE__ */ B("span", { onClick: () => {
      o.open(be({}, r));
    }, children: r.children })
  ] });
}, gR = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(VS, be({}, r)) });
gR.ErrorBoundary = VS.ErrorBoundary;
const YL = (r) => {
  const [o, s] = BT.useMessage();
  return /* @__PURE__ */ va(Qe, { children: [
    s,
    /* @__PURE__ */ B("span", { onClick: () => {
      o.open(be({}, r));
    }, children: r.children })
  ] });
}, yR = (r) => {
  Bo(r, []);
};
function CR(r) {
  const [o, s] = Wo(!0), [c, d] = Wo(!1), [m, h] = Wo(void 0);
  return yR(() => {
    r().then((E) => {
      h(E);
    }).catch(() => {
      d(!0);
    }).finally(() => {
      s(!1);
    });
  }), [o, c, m];
}
function QL(r) {
  const [o, s, c] = CR(r.fetchData);
  return /* @__PURE__ */ B(Mu, { children: /* @__PURE__ */ va(mR, gi(be({}, r), { children: [
    o && /* @__PURE__ */ B(hR, {}),
    s && /* @__PURE__ */ B(vR, { status: "error", title: "Error Loading" }),
    !o && !s && r.children(c)
  ] })) });
}
const v2 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(WT, be({}, r)) }), Ll = (r) => /* @__PURE__ */ B(Mu, { children: /* @__PURE__ */ B(v2, gi(be({ align: "center", justify: "center" }, r), { children: r.children })) }), ZL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(KT, be({}, r)) }), bR = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(GT, be({}, r)) }), Rf = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(e1, be({}, r)) });
Rf.Sider = e1.Sider;
Rf.Footer = e1.Footer;
Rf.Content = e1.Content;
Rf.Header = e1.Header;
const XL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(qT, be({}, r)) }), JL = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(YT, be({}, r)) }), SR = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(FS, gi(be({}, r), { children: r.children })) });
SR.Button = FS.Button;
const ER = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(BS, be({}, r)) });
ER.Item = BS.Item;
const eA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(QT, be({}, r)) });
function YS(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var QS = { exports: {} };
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
        var E = arguments[h];
        E && (m = d(m, c(E)));
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
      for (var E in m)
        o.call(m, E) && m[E] && (h = d(h, E));
      return h;
    }
    function d(m, h) {
      return h ? m ? m + " " + h : m + h : m;
    }
    r.exports ? (s.default = s, r.exports = s) : window.classNames = s;
  })();
})(QS);
var wR = QS.exports;
const wn = /* @__PURE__ */ YS(wR);
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
function xR(r, o) {
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
function ZS(r) {
  var o = xR(r, "string");
  return Bn(o) == "symbol" ? o : String(o);
}
function tt(r, o, s) {
  return o = ZS(o), o in r ? Object.defineProperty(r, o, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[o] = s, r;
}
function m4(r, o) {
  var s = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(r);
    o && (c = c.filter(function(d) {
      return Object.getOwnPropertyDescriptor(r, d).enumerable;
    })), s.push.apply(s, c);
  }
  return s;
}
function Re(r) {
  for (var o = 1; o < arguments.length; o++) {
    var s = arguments[o] != null ? arguments[o] : {};
    o % 2 ? m4(Object(s), !0).forEach(function(c) {
      tt(r, c, s[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : m4(Object(s)).forEach(function(c) {
      Object.defineProperty(r, c, Object.getOwnPropertyDescriptor(s, c));
    });
  }
  return r;
}
function w5(r, o) {
  (o == null || o > r.length) && (o = r.length);
  for (var s = 0, c = new Array(o); s < o; s++)
    c[s] = r[s];
  return c;
}
function TR(r) {
  if (Array.isArray(r))
    return w5(r);
}
function XS(r) {
  if (typeof Symbol != "undefined" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function p2(r, o) {
  if (r) {
    if (typeof r == "string")
      return w5(r, o);
    var s = Object.prototype.toString.call(r).slice(8, -1);
    if (s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set")
      return Array.from(r);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return w5(r, o);
  }
}
function RR() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ar(r) {
  return TR(r) || XS(r) || p2(r) || RR();
}
function JS(r) {
  if (Array.isArray(r))
    return r;
}
function kR(r, o) {
  var s = r == null ? null : typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
  if (s != null) {
    var c, d, m, h, E = [], T = !0, w = !1;
    try {
      if (m = (s = s.call(r)).next, o === 0) {
        if (Object(s) !== s)
          return;
        T = !1;
      } else
        for (; !(T = (c = m.call(s)).done) && (E.push(c.value), E.length !== o); T = !0)
          ;
    } catch (_) {
      w = !0, d = _;
    } finally {
      try {
        if (!T && s.return != null && (h = s.return(), Object(h) !== h))
          return;
      } finally {
        if (w)
          throw d;
      }
    }
    return E;
  }
}
function e3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Te(r, o) {
  return JS(r) || kR(r, o) || p2(r, o) || e3();
}
function _R(r, o) {
  if (r == null)
    return {};
  var s = {}, c = Object.keys(r), d, m;
  for (m = 0; m < c.length; m++)
    d = c[m], !(o.indexOf(d) >= 0) && (s[d] = r[d]);
  return s;
}
function Vn(r, o) {
  if (r == null)
    return {};
  var s = _R(r, o), c, d;
  if (Object.getOwnPropertySymbols) {
    var m = Object.getOwnPropertySymbols(r);
    for (d = 0; d < m.length; d++)
      c = m[d], !(o.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(r, c) && (s[c] = r[c]);
  }
  return s;
}
var x5 = { exports: {} }, cn = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var g4;
function MR() {
  if (g4)
    return cn;
  g4 = 1;
  var r = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), h = Symbol.for("react.context"), E = Symbol.for("react.server_context"), T = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), P;
  P = Symbol.for("react.module.reference");
  function j(D) {
    if (typeof D == "object" && D !== null) {
      var W = D.$$typeof;
      switch (W) {
        case r:
          switch (D = D.type, D) {
            case s:
            case d:
            case c:
            case w:
            case _:
              return D;
            default:
              switch (D = D && D.$$typeof, D) {
                case E:
                case h:
                case T:
                case N:
                case k:
                case m:
                  return D;
                default:
                  return W;
              }
          }
        case o:
          return W;
      }
    }
  }
  return cn.ContextConsumer = h, cn.ContextProvider = m, cn.Element = r, cn.ForwardRef = T, cn.Fragment = s, cn.Lazy = N, cn.Memo = k, cn.Portal = o, cn.Profiler = d, cn.StrictMode = c, cn.Suspense = w, cn.SuspenseList = _, cn.isAsyncMode = function() {
    return !1;
  }, cn.isConcurrentMode = function() {
    return !1;
  }, cn.isContextConsumer = function(D) {
    return j(D) === h;
  }, cn.isContextProvider = function(D) {
    return j(D) === m;
  }, cn.isElement = function(D) {
    return typeof D == "object" && D !== null && D.$$typeof === r;
  }, cn.isForwardRef = function(D) {
    return j(D) === T;
  }, cn.isFragment = function(D) {
    return j(D) === s;
  }, cn.isLazy = function(D) {
    return j(D) === N;
  }, cn.isMemo = function(D) {
    return j(D) === k;
  }, cn.isPortal = function(D) {
    return j(D) === o;
  }, cn.isProfiler = function(D) {
    return j(D) === d;
  }, cn.isStrictMode = function(D) {
    return j(D) === c;
  }, cn.isSuspense = function(D) {
    return j(D) === w;
  }, cn.isSuspenseList = function(D) {
    return j(D) === _;
  }, cn.isValidElementType = function(D) {
    return typeof D == "string" || typeof D == "function" || D === s || D === d || D === c || D === w || D === _ || D === A || typeof D == "object" && D !== null && (D.$$typeof === N || D.$$typeof === k || D.$$typeof === m || D.$$typeof === h || D.$$typeof === T || D.$$typeof === P || D.getModuleId !== void 0);
  }, cn.typeOf = j, cn;
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
var y4;
function OR() {
  return y4 || (y4 = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), h = Symbol.for("react.context"), E = Symbol.for("react.server_context"), T = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), P = !1, j = !1, D = !1, W = !1, V = !1, z;
    z = Symbol.for("react.module.reference");
    function I(we) {
      return !!(typeof we == "string" || typeof we == "function" || we === s || we === d || V || we === c || we === w || we === _ || W || we === A || P || j || D || typeof we == "object" && we !== null && (we.$$typeof === N || we.$$typeof === k || we.$$typeof === m || we.$$typeof === h || we.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      we.$$typeof === z || we.getModuleId !== void 0));
    }
    function U(we) {
      if (typeof we == "object" && we !== null) {
        var mt = we.$$typeof;
        switch (mt) {
          case r:
            var Dt = we.type;
            switch (Dt) {
              case s:
              case d:
              case c:
              case w:
              case _:
                return Dt;
              default:
                var zt = Dt && Dt.$$typeof;
                switch (zt) {
                  case E:
                  case h:
                  case T:
                  case N:
                  case k:
                  case m:
                    return zt;
                  default:
                    return mt;
                }
            }
          case o:
            return mt;
        }
      }
    }
    var Y = h, Q = m, ne = r, ue = T, re = s, ge = N, pe = k, te = o, se = d, de = c, Ee = w, Me = _, xe = !1, Le = !1;
    function Ie(we) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(we) {
      return Le || (Le = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function he(we) {
      return U(we) === h;
    }
    function Se(we) {
      return U(we) === m;
    }
    function ze(we) {
      return typeof we == "object" && we !== null && we.$$typeof === r;
    }
    function Ke(we) {
      return U(we) === T;
    }
    function Ze(we) {
      return U(we) === s;
    }
    function it(we) {
      return U(we) === N;
    }
    function Be(we) {
      return U(we) === k;
    }
    function nt(we) {
      return U(we) === o;
    }
    function Nt(we) {
      return U(we) === d;
    }
    function He(we) {
      return U(we) === c;
    }
    function et(we) {
      return U(we) === w;
    }
    function Bt(we) {
      return U(we) === _;
    }
    fn.ContextConsumer = Y, fn.ContextProvider = Q, fn.Element = ne, fn.ForwardRef = ue, fn.Fragment = re, fn.Lazy = ge, fn.Memo = pe, fn.Portal = te, fn.Profiler = se, fn.StrictMode = de, fn.Suspense = Ee, fn.SuspenseList = Me, fn.isAsyncMode = Ie, fn.isConcurrentMode = ie, fn.isContextConsumer = he, fn.isContextProvider = Se, fn.isElement = ze, fn.isForwardRef = Ke, fn.isFragment = Ze, fn.isLazy = it, fn.isMemo = Be, fn.isPortal = nt, fn.isProfiler = Nt, fn.isStrictMode = He, fn.isSuspense = et, fn.isSuspenseList = Bt, fn.isValidElementType = I, fn.typeOf = U;
  }()), fn;
}
process.env.NODE_ENV === "production" ? x5.exports = MR() : x5.exports = OR();
var t3 = x5.exports;
function Wv(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = [];
  return Oa.Children.forEach(r, function(c) {
    c == null && !o.keepEmpty || (Array.isArray(c) ? s = s.concat(Wv(c)) : t3.isFragment(c) && c.props ? s = s.concat(Wv(c.props.children, o)) : s.push(c));
  }), s;
}
var T5 = {}, h2 = [], NR = function(o) {
  h2.push(o);
};
function kf(r, o) {
  if (process.env.NODE_ENV !== "production" && !r && console !== void 0) {
    var s = h2.reduce(function(c, d) {
      return d(c != null ? c : "", "warning");
    }, o);
    s && console.error("Warning: ".concat(s));
  }
}
function DR(r, o) {
  if (process.env.NODE_ENV !== "production" && !r && console !== void 0) {
    var s = h2.reduce(function(c, d) {
      return d(c != null ? c : "", "note");
    }, o);
    s && console.warn("Note: ".concat(s));
  }
}
function n3() {
  T5 = {};
}
function r3(r, o, s) {
  !o && !T5[s] && (r(!1, s), T5[s] = !0);
}
function ha(r, o) {
  r3(kf, r, o);
}
function LR(r, o) {
  r3(DR, r, o);
}
ha.preMessage = NR;
ha.resetWarned = n3;
ha.noteOnce = LR;
var R5 = { exports: {} }, Fa = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var n5, C4;
function a3() {
  if (C4)
    return n5;
  C4 = 1;
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
      for (var h = {}, E = 0; E < 10; E++)
        h["_" + String.fromCharCode(E)] = E;
      var T = Object.getOwnPropertyNames(h).map(function(_) {
        return h[_];
      });
      if (T.join("") !== "0123456789")
        return !1;
      var w = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(_) {
        w[_] = _;
      }), Object.keys(Object.assign({}, w)).join("") === "abcdefghijklmnopqrst";
    } catch (_) {
      return !1;
    }
  }
  return n5 = d() ? Object.assign : function(m, h) {
    for (var E, T = c(m), w, _ = 1; _ < arguments.length; _++) {
      E = Object(arguments[_]);
      for (var k in E)
        o.call(E, k) && (T[k] = E[k]);
      if (r) {
        w = r(E);
        for (var N = 0; N < w.length; N++)
          s.call(E, w[N]) && (T[w[N]] = E[w[N]]);
      }
    }
    return T;
  }, n5;
}
var Bh = { exports: {} }, r5 = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b4;
function AR() {
  return b4 || (b4 = 1, function(r) {
    var o, s, c, d;
    if (typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      r.unstable_now = function() {
        return m.now();
      };
    } else {
      var h = Date, E = h.now();
      r.unstable_now = function() {
        return h.now() - E;
      };
    }
    if (typeof window == "undefined" || typeof MessageChannel != "function") {
      var T = null, w = null, _ = function() {
        if (T !== null)
          try {
            var ie = r.unstable_now();
            T(!0, ie), T = null;
          } catch (he) {
            throw setTimeout(_, 0), he;
          }
      };
      o = function(ie) {
        T !== null ? setTimeout(o, 0, ie) : (T = ie, setTimeout(_, 0));
      }, s = function(ie, he) {
        w = setTimeout(ie, he);
      }, c = function() {
        clearTimeout(w);
      }, r.unstable_shouldYield = function() {
        return !1;
      }, d = r.unstable_forceFrameRate = function() {
      };
    } else {
      var k = window.setTimeout, N = window.clearTimeout;
      if (typeof console != "undefined") {
        var A = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof A != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      }
      var P = !1, j = null, D = -1, W = 5, V = 0;
      r.unstable_shouldYield = function() {
        return r.unstable_now() >= V;
      }, d = function() {
      }, r.unstable_forceFrameRate = function(ie) {
        0 > ie || 125 < ie ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < ie ? Math.floor(1e3 / ie) : 5;
      };
      var z = new MessageChannel(), I = z.port2;
      z.port1.onmessage = function() {
        if (j !== null) {
          var ie = r.unstable_now();
          V = ie + W;
          try {
            j(!0, ie) ? I.postMessage(null) : (P = !1, j = null);
          } catch (he) {
            throw I.postMessage(null), he;
          }
        } else
          P = !1;
      }, o = function(ie) {
        j = ie, P || (P = !0, I.postMessage(null));
      }, s = function(ie, he) {
        D = k(function() {
          ie(r.unstable_now());
        }, he);
      }, c = function() {
        N(D), D = -1;
      };
    }
    function U(ie, he) {
      var Se = ie.length;
      ie.push(he);
      e:
        for (; ; ) {
          var ze = Se - 1 >>> 1, Ke = ie[ze];
          if (Ke !== void 0 && 0 < ne(Ke, he))
            ie[ze] = he, ie[Se] = Ke, Se = ze;
          else
            break e;
        }
    }
    function Y(ie) {
      return ie = ie[0], ie === void 0 ? null : ie;
    }
    function Q(ie) {
      var he = ie[0];
      if (he !== void 0) {
        var Se = ie.pop();
        if (Se !== he) {
          ie[0] = Se;
          e:
            for (var ze = 0, Ke = ie.length; ze < Ke; ) {
              var Ze = 2 * (ze + 1) - 1, it = ie[Ze], Be = Ze + 1, nt = ie[Be];
              if (it !== void 0 && 0 > ne(it, Se))
                nt !== void 0 && 0 > ne(nt, it) ? (ie[ze] = nt, ie[Be] = Se, ze = Be) : (ie[ze] = it, ie[Ze] = Se, ze = Ze);
              else if (nt !== void 0 && 0 > ne(nt, Se))
                ie[ze] = nt, ie[Be] = Se, ze = Be;
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
    var ue = [], re = [], ge = 1, pe = null, te = 3, se = !1, de = !1, Ee = !1;
    function Me(ie) {
      for (var he = Y(re); he !== null; ) {
        if (he.callback === null)
          Q(re);
        else if (he.startTime <= ie)
          Q(re), he.sortIndex = he.expirationTime, U(ue, he);
        else
          break;
        he = Y(re);
      }
    }
    function xe(ie) {
      if (Ee = !1, Me(ie), !de)
        if (Y(ue) !== null)
          de = !0, o(Le);
        else {
          var he = Y(re);
          he !== null && s(xe, he.startTime - ie);
        }
    }
    function Le(ie, he) {
      de = !1, Ee && (Ee = !1, c()), se = !0;
      var Se = te;
      try {
        for (Me(he), pe = Y(ue); pe !== null && (!(pe.expirationTime > he) || ie && !r.unstable_shouldYield()); ) {
          var ze = pe.callback;
          if (typeof ze == "function") {
            pe.callback = null, te = pe.priorityLevel;
            var Ke = ze(pe.expirationTime <= he);
            he = r.unstable_now(), typeof Ke == "function" ? pe.callback = Ke : pe === Y(ue) && Q(ue), Me(he);
          } else
            Q(ue);
          pe = Y(ue);
        }
        if (pe !== null)
          var Ze = !0;
        else {
          var it = Y(re);
          it !== null && s(xe, it.startTime - he), Ze = !1;
        }
        return Ze;
      } finally {
        pe = null, te = Se, se = !1;
      }
    }
    var Ie = d;
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(ie) {
      ie.callback = null;
    }, r.unstable_continueExecution = function() {
      de || se || (de = !0, o(Le));
    }, r.unstable_getCurrentPriorityLevel = function() {
      return te;
    }, r.unstable_getFirstCallbackNode = function() {
      return Y(ue);
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
    }, r.unstable_requestPaint = Ie, r.unstable_runWithPriority = function(ie, he) {
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
      var ze = r.unstable_now();
      switch (typeof Se == "object" && Se !== null ? (Se = Se.delay, Se = typeof Se == "number" && 0 < Se ? ze + Se : ze) : Se = ze, ie) {
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
      return Ke = Se + Ke, ie = { id: ge++, callback: he, priorityLevel: ie, startTime: Se, expirationTime: Ke, sortIndex: -1 }, Se > ze ? (ie.sortIndex = Se, U(re, ie), Y(ue) === null && ie === Y(re) && (Ee ? c() : Ee = !0, s(xe, Se - ze))) : (ie.sortIndex = Ke, U(ue, ie), de || se || (de = !0, o(Le))), ie;
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
  }(r5)), r5;
}
var a5 = {};
/** @license React v0.20.2
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var S4;
function PR() {
  return S4 || (S4 = 1, function(r) {
    process.env.NODE_ENV !== "production" && function() {
      var o = !1, s = !1, c, d, m, h, E = typeof performance == "object" && typeof performance.now == "function";
      if (E) {
        var T = performance;
        r.unstable_now = function() {
          return T.now();
        };
      } else {
        var w = Date, _ = w.now();
        r.unstable_now = function() {
          return w.now() - _;
        };
      }
      if (
        // If Scheduler runs in a non-DOM environment, it falls back to a naive
        // implementation using setTimeout.
        typeof window == "undefined" || // Check if MessageChannel is supported, too.
        typeof MessageChannel != "function"
      ) {
        var k = null, N = null, A = function() {
          if (k !== null)
            try {
              var ye = r.unstable_now(), Ne = !0;
              k(Ne, ye), k = null;
            } catch (We) {
              throw setTimeout(A, 0), We;
            }
        };
        c = function(ye) {
          k !== null ? setTimeout(c, 0, ye) : (k = ye, setTimeout(A, 0));
        }, d = function(ye, Ne) {
          N = setTimeout(ye, Ne);
        }, m = function() {
          clearTimeout(N);
        }, r.unstable_shouldYield = function() {
          return !1;
        }, h = r.unstable_forceFrameRate = function() {
        };
      } else {
        var P = window.setTimeout, j = window.clearTimeout;
        if (typeof console != "undefined") {
          var D = window.requestAnimationFrame, W = window.cancelAnimationFrame;
          typeof D != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof W != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        }
        var V = !1, z = null, I = -1, U = 5, Y = 0;
        r.unstable_shouldYield = function() {
          return r.unstable_now() >= Y;
        }, h = function() {
        }, r.unstable_forceFrameRate = function(ye) {
          if (ye < 0 || ye > 125) {
            console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
            return;
          }
          ye > 0 ? U = Math.floor(1e3 / ye) : U = 5;
        };
        var Q = function() {
          if (z !== null) {
            var ye = r.unstable_now();
            Y = ye + U;
            var Ne = !0;
            try {
              var We = z(Ne, ye);
              We ? ue.postMessage(null) : (V = !1, z = null);
            } catch (xt) {
              throw ue.postMessage(null), xt;
            }
          } else
            V = !1;
        }, ne = new MessageChannel(), ue = ne.port2;
        ne.port1.onmessage = Q, c = function(ye) {
          z = ye, V || (V = !0, ue.postMessage(null));
        }, d = function(ye, Ne) {
          I = P(function() {
            ye(r.unstable_now());
          }, Ne);
        }, m = function() {
          j(I), I = -1;
        };
      }
      function re(ye, Ne) {
        var We = ye.length;
        ye.push(Ne), te(ye, Ne, We);
      }
      function ge(ye) {
        var Ne = ye[0];
        return Ne === void 0 ? null : Ne;
      }
      function pe(ye) {
        var Ne = ye[0];
        if (Ne !== void 0) {
          var We = ye.pop();
          return We !== Ne && (ye[0] = We, se(ye, We, 0)), Ne;
        } else
          return null;
      }
      function te(ye, Ne, We) {
        for (var xt = We; ; ) {
          var Mt = xt - 1 >>> 1, rt = ye[Mt];
          if (rt !== void 0 && de(rt, Ne) > 0)
            ye[Mt] = Ne, ye[xt] = rt, xt = Mt;
          else
            return;
        }
      }
      function se(ye, Ne, We) {
        for (var xt = We, Mt = ye.length; xt < Mt; ) {
          var rt = (xt + 1) * 2 - 1, st = ye[rt], on = rt + 1, Ot = ye[on];
          if (st !== void 0 && de(st, Ne) < 0)
            Ot !== void 0 && de(Ot, st) < 0 ? (ye[xt] = Ot, ye[on] = Ne, xt = on) : (ye[xt] = st, ye[rt] = Ne, xt = rt);
          else if (Ot !== void 0 && de(Ot, Ne) < 0)
            ye[xt] = Ot, ye[on] = Ne, xt = on;
          else
            return;
        }
      }
      function de(ye, Ne) {
        var We = ye.sortIndex - Ne.sortIndex;
        return We !== 0 ? We : ye.id - Ne.id;
      }
      var Ee = 1, Me = 2, xe = 3, Le = 4, Ie = 5;
      function ie(ye, Ne) {
      }
      var he = 1073741823, Se = -1, ze = 250, Ke = 5e3, Ze = 1e4, it = he, Be = [], nt = [], Nt = 1, He = null, et = xe, Bt = !1, we = !1, mt = !1;
      function Dt(ye) {
        for (var Ne = ge(nt); Ne !== null; ) {
          if (Ne.callback === null)
            pe(nt);
          else if (Ne.startTime <= ye)
            pe(nt), Ne.sortIndex = Ne.expirationTime, re(Be, Ne);
          else
            return;
          Ne = ge(nt);
        }
      }
      function zt(ye) {
        if (mt = !1, Dt(ye), !we)
          if (ge(Be) !== null)
            we = !0, c($t);
          else {
            var Ne = ge(nt);
            Ne !== null && d(zt, Ne.startTime - ye);
          }
      }
      function $t(ye, Ne) {
        we = !1, mt && (mt = !1, m()), Bt = !0;
        var We = et;
        try {
          var xt;
          if (!s)
            return Xe(ye, Ne);
        } finally {
          He = null, et = We, Bt = !1;
        }
      }
      function Xe(ye, Ne) {
        var We = Ne;
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
        return st !== null && d(zt, st.startTime - We), !1;
      }
      function _t(ye, Ne) {
        switch (ye) {
          case Ee:
          case Me:
          case xe:
          case Le:
          case Ie:
            break;
          default:
            ye = xe;
        }
        var We = et;
        et = ye;
        try {
          return Ne();
        } finally {
          et = We;
        }
      }
      function gt(ye) {
        var Ne;
        switch (et) {
          case Ee:
          case Me:
          case xe:
            Ne = xe;
            break;
          default:
            Ne = et;
            break;
        }
        var We = et;
        et = Ne;
        try {
          return ye();
        } finally {
          et = We;
        }
      }
      function Xt(ye) {
        var Ne = et;
        return function() {
          var We = et;
          et = Ne;
          try {
            return ye.apply(this, arguments);
          } finally {
            et = We;
          }
        };
      }
      function ot(ye, Ne, We) {
        var xt = r.unstable_now(), Mt;
        if (typeof We == "object" && We !== null) {
          var rt = We.delay;
          typeof rt == "number" && rt > 0 ? Mt = xt + rt : Mt = xt;
        } else
          Mt = xt;
        var st;
        switch (ye) {
          case Ee:
            st = Se;
            break;
          case Me:
            st = ze;
            break;
          case Ie:
            st = it;
            break;
          case Le:
            st = Ze;
            break;
          case xe:
          default:
            st = Ke;
            break;
        }
        var on = Mt + st, Ot = {
          id: Nt++,
          callback: Ne,
          priorityLevel: ye,
          startTime: Mt,
          expirationTime: on,
          sortIndex: -1
        };
        return Mt > xt ? (Ot.sortIndex = Mt, re(nt, Ot), ge(Be) === null && Ot === ge(nt) && (mt ? m() : mt = !0, d(zt, Mt - xt))) : (Ot.sortIndex = on, re(Be, Ot), !we && !Bt && (we = !0, c($t))), Ot;
      }
      function Wt() {
      }
      function Qt() {
        !we && !Bt && (we = !0, c($t));
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
      r.unstable_IdlePriority = Ie, r.unstable_ImmediatePriority = Ee, r.unstable_LowPriority = Le, r.unstable_NormalPriority = xe, r.unstable_Profiling = en, r.unstable_UserBlockingPriority = Me, r.unstable_cancelCallback = Gt, r.unstable_continueExecution = Qt, r.unstable_getCurrentPriorityLevel = Wn, r.unstable_getFirstCallbackNode = ut, r.unstable_next = gt, r.unstable_pauseExecution = Wt, r.unstable_requestPaint = qt, r.unstable_runWithPriority = _t, r.unstable_scheduleCallback = ot, r.unstable_wrapCallback = Xt;
    }();
  }(a5)), a5;
}
var E4;
function i3() {
  return E4 || (E4 = 1, process.env.NODE_ENV === "production" ? Bh.exports = AR() : Bh.exports = PR()), Bh.exports;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var w4;
function IR() {
  if (w4)
    return Fa;
  w4 = 1;
  var r = Oa, o = a3(), s = i3();
  function c(n) {
    for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, u = 1; u < arguments.length; u++)
      i += "&args[]=" + encodeURIComponent(arguments[u]);
    return "Minified React error #" + n + "; visit " + i + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  if (!r)
    throw Error(c(227));
  var d = /* @__PURE__ */ new Set(), m = {};
  function h(n, i) {
    E(n, i), E(n + "Capture", i);
  }
  function E(n, i) {
    for (m[n] = i, n = 0; n < i.length; n++)
      d.add(i[n]);
  }
  var T = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), w = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, _ = Object.prototype.hasOwnProperty, k = {}, N = {};
  function A(n) {
    return _.call(N, n) ? !0 : _.call(k, n) ? !1 : w.test(n) ? N[n] = !0 : (k[n] = !0, !1);
  }
  function P(n, i, u, v) {
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
  function j(n, i, u, v) {
    if (i === null || typeof i == "undefined" || P(n, i, u, v))
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
  function D(n, i, u, v, g, b, R) {
    this.acceptsBooleans = i === 2 || i === 3 || i === 4, this.attributeName = v, this.attributeNamespace = g, this.mustUseProperty = u, this.propertyName = n, this.type = i, this.sanitizeURL = b, this.removeEmptyString = R;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    W[n] = new D(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var i = n[0];
    W[i] = new D(i, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    W[n] = new D(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    W[n] = new D(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    W[n] = new D(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    W[n] = new D(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    W[n] = new D(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    W[n] = new D(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    W[n] = new D(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var V = /[\-:]([a-z])/g;
  function z(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var i = n.replace(
      V,
      z
    );
    W[i] = new D(i, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var i = n.replace(V, z);
    W[i] = new D(i, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var i = n.replace(V, z);
    W[i] = new D(i, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    W[n] = new D(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new D("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    W[n] = new D(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function I(n, i, u, v) {
    var g = W.hasOwnProperty(i) ? W[i] : null, b = g !== null ? g.type === 0 : v ? !1 : !(!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N");
    b || (j(i, u, g, v) && (u = null), v || g === null ? A(i) && (u === null ? n.removeAttribute(i) : n.setAttribute(i, "" + u)) : g.mustUseProperty ? n[g.propertyName] = u === null ? g.type === 3 ? !1 : "" : u : (i = g.attributeName, v = g.attributeNamespace, u === null ? n.removeAttribute(i) : (g = g.type, u = g === 3 || g === 4 && u === !0 ? "" : "" + u, v ? n.setAttributeNS(v, i, u) : n.setAttribute(i, u))));
  }
  var U = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Y = 60103, Q = 60106, ne = 60107, ue = 60108, re = 60114, ge = 60109, pe = 60110, te = 60112, se = 60113, de = 60120, Ee = 60115, Me = 60116, xe = 60121, Le = 60128, Ie = 60129, ie = 60130, he = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var Se = Symbol.for;
    Y = Se("react.element"), Q = Se("react.portal"), ne = Se("react.fragment"), ue = Se("react.strict_mode"), re = Se("react.profiler"), ge = Se("react.provider"), pe = Se("react.context"), te = Se("react.forward_ref"), se = Se("react.suspense"), de = Se("react.suspense_list"), Ee = Se("react.memo"), Me = Se("react.lazy"), xe = Se("react.block"), Se("react.scope"), Le = Se("react.opaque.id"), Ie = Se("react.debug_trace_mode"), ie = Se("react.offscreen"), he = Se("react.legacy_hidden");
  }
  var ze = typeof Symbol == "function" && Symbol.iterator;
  function Ke(n) {
    return n === null || typeof n != "object" ? null : (n = ze && n[ze] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Ze;
  function it(n) {
    if (Ze === void 0)
      try {
        throw Error();
      } catch (u) {
        var i = u.stack.trim().match(/\n( *(at )?)/);
        Ze = i && i[1] || "";
      }
    return `
` + Ze + n;
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
          } catch (H) {
            var v = H;
          }
          Reflect.construct(n, [], i);
        } else {
          try {
            i.call();
          } catch (H) {
            v = H;
          }
          n.call(i.prototype);
        }
      else {
        try {
          throw Error();
        } catch (H) {
          v = H;
        }
        n();
      }
    } catch (H) {
      if (H && v && typeof H.stack == "string") {
        for (var g = H.stack.split(`
`), b = v.stack.split(`
`), R = g.length - 1, M = b.length - 1; 1 <= R && 0 <= M && g[R] !== b[M]; )
          M--;
        for (; 1 <= R && 0 <= M; R--, M--)
          if (g[R] !== b[M]) {
            if (R !== 1 || M !== 1)
              do
                if (R--, M--, 0 > M || g[R] !== b[M])
                  return `
` + g[R].replace(" at new ", " at ");
              while (1 <= R && 0 <= M);
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
      case Q:
        return "Portal";
      case re:
        return "Profiler";
      case ue:
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
        case Ee:
          return He(n.type);
        case xe:
          return He(n._render);
        case Me:
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
  function we(n) {
    var i = Bt(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(n.constructor.prototype, i), v = "" + n[i];
    if (!n.hasOwnProperty(i) && typeof u != "undefined" && typeof u.get == "function" && typeof u.set == "function") {
      var g = u.get, b = u.set;
      return Object.defineProperty(n, i, { configurable: !0, get: function() {
        return g.call(this);
      }, set: function(R) {
        v = "" + R, b.call(this, R);
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
    n._valueTracker || (n._valueTracker = we(n));
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
  function zt(n) {
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
  function Xe(n, i) {
    var u = i.defaultValue == null ? "" : i.defaultValue, v = i.checked != null ? i.checked : i.defaultChecked;
    u = et(i.value != null ? i.value : u), n._wrapperState = { initialChecked: v, initialValue: u, controlled: i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null };
  }
  function _t(n, i) {
    i = i.checked, i != null && I(n, "checked", i, !1);
  }
  function gt(n, i) {
    _t(n, i);
    var u = et(i.value), v = i.type;
    if (u != null)
      v === "number" ? (u === 0 && n.value === "" || n.value != u) && (n.value = "" + u) : n.value !== "" + u && (n.value = "" + u);
    else if (v === "submit" || v === "reset") {
      n.removeAttribute("value");
      return;
    }
    i.hasOwnProperty("value") ? ot(n, i.type, u) : i.hasOwnProperty("defaultValue") && ot(n, i.type, et(i.defaultValue)), i.checked == null && i.defaultChecked != null && (n.defaultChecked = !!i.defaultChecked);
  }
  function Xt(n, i, u) {
    if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
      var v = i.type;
      if (!(v !== "submit" && v !== "reset" || i.value !== void 0 && i.value !== null))
        return;
      i = "" + n._wrapperState.initialValue, u || i === n.value || (n.value = i), n.defaultValue = i;
    }
    u = n.name, u !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, u !== "" && (n.name = u);
  }
  function ot(n, i, u) {
    (i !== "number" || zt(n.ownerDocument) !== n) && (u == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + u && (n.defaultValue = "" + u));
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
  function Ne(n) {
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
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ne(i) : n === "http://www.w3.org/2000/svg" && i === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
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
  function Ft(n, i) {
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
  var $e = null, bt = null, Oe = null;
  function Ge(n) {
    if (n = ua(n)) {
      if (typeof $e != "function")
        throw Error(c(280));
      var i = n.stateNode;
      i && (i = Oi(i), $e(n.stateNode, n.type, i));
    }
  }
  function Lt(n) {
    bt ? Oe ? Oe.push(n) : Oe = [n] : bt = n;
  }
  function mn() {
    if (bt) {
      var n = bt, i = Oe;
      if (Oe = bt = null, Ge(n), i)
        for (n = 0; n < i.length; n++)
          Ge(i[n]);
    }
  }
  function Ln(n, i) {
    return n(i);
  }
  function gn(n, i, u, v, g) {
    return n(i, u, v, g);
  }
  function oa() {
  }
  var qr = Ln, An = !1, Kt = !1;
  function Fn() {
    (bt !== null || Oe !== null) && (oa(), mn());
  }
  function Yr(n, i, u) {
    if (Kt)
      return n(i, u);
    Kt = !0;
    try {
      return qr(n, i, u);
    } finally {
      Kt = !1, Fn();
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
  if (T)
    try {
      var Tr = {};
      Object.defineProperty(Tr, "passive", { get: function() {
        Jn = !0;
      } }), window.addEventListener("test", Tr, Tr), window.removeEventListener("test", Tr, Tr);
    } catch (n) {
      Jn = !1;
    }
  function qa(n, i, u, v, g, b, R, M, H) {
    var ee = Array.prototype.slice.call(arguments, 3);
    try {
      i.apply(u, ee);
    } catch (Ae) {
      this.onError(Ae);
    }
  }
  var Ar = !1, Pr = null, Rr = !1, Ya = null, Pn = { onError: function(n) {
    Ar = !0, Pr = n;
  } };
  function Ei(n, i, u, v, g, b, R, M, H) {
    Ar = !1, Pr = null, qa.apply(Pn, arguments);
  }
  function kr(n, i, u, v, g, b, R, M, H) {
    if (Ei.apply(this, arguments), Ar) {
      if (Ar) {
        var ee = Pr;
        Ar = !1, Pr = null;
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
  function Ir(n) {
    if (n.tag === 13) {
      var i = n.memoizedState;
      if (i === null && (n = n.alternate, n !== null && (i = n.memoizedState)), i !== null)
        return i.dehydrated;
    }
    return null;
  }
  function _r(n) {
    if (xn(n) !== n)
      throw Error(c(188));
  }
  function zr(n) {
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
      var b = g.alternate;
      if (b === null) {
        if (v = g.return, v !== null) {
          u = v;
          continue;
        }
        break;
      }
      if (g.child === b.child) {
        for (b = g.child; b; ) {
          if (b === u)
            return _r(g), n;
          if (b === v)
            return _r(g), i;
          b = b.sibling;
        }
        throw Error(c(188));
      }
      if (u.return !== v.return)
        u = g, v = b;
      else {
        for (var R = !1, M = g.child; M; ) {
          if (M === u) {
            R = !0, u = g, v = b;
            break;
          }
          if (M === v) {
            R = !0, v = g, u = b;
            break;
          }
          M = M.sibling;
        }
        if (!R) {
          for (M = b.child; M; ) {
            if (M === u) {
              R = !0, u = b, v = g;
              break;
            }
            if (M === v) {
              R = !0, v = b, u = g;
              break;
            }
            M = M.sibling;
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
    if (n = zr(n), !n)
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
  var Za, gr, Qr, Mr, ma = !1, In = [], Kn = null, Or = null, or = null, yr = /* @__PURE__ */ new Map(), ke = /* @__PURE__ */ new Map(), Zt = [], dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        ke.delete(i.pointerId);
    }
  }
  function On(n, i, u, v, g, b) {
    return n === null || n.nativeEvent !== b ? (n = Ht(i, u, v, g, b), i !== null && (i = ua(i), i !== null && gr(i)), n) : (n.eventSystemFlags |= v, i = n.targetContainers, g !== null && i.indexOf(g) === -1 && i.push(g), n);
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
        var b = g.pointerId;
        return yr.set(b, On(yr.get(b) || null, n, i, u, v, g)), !0;
      case "gotpointercapture":
        return b = g.pointerId, ke.set(b, On(ke.get(b) || null, n, i, u, v, g)), !0;
    }
    return !1;
  }
  function vn(n) {
    var i = Jo(n.target);
    if (i !== null) {
      var u = xn(i);
      if (u !== null) {
        if (i = u.tag, i === 13) {
          if (i = Ir(u), i !== null) {
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
    for (ma = !1; 0 < In.length; ) {
      var n = In[0];
      if (n.blockedOn !== null) {
        n = ua(n.blockedOn), n !== null && Za(n);
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
      n.blockedOn === null && In.shift();
    }
    Kn !== null && er(Kn) && (Kn = null), Or !== null && er(Or) && (Or = null), or !== null && er(or) && (or = null), yr.forEach(wi), ke.forEach(wi);
  }
  function zn(n, i) {
    n.blockedOn === i && (n.blockedOn = null, ma || (ma = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Gn)));
  }
  function tr(n) {
    function i(g) {
      return zn(g, n);
    }
    if (0 < In.length) {
      zn(In[0], n);
      for (var u = 1; u < In.length; u++) {
        var v = In[u];
        v.blockedOn === n && (v.blockedOn = null);
      }
    }
    for (Kn !== null && zn(Kn, n), Or !== null && zn(Or, n), or !== null && zn(or, n), yr.forEach(i), ke.forEach(i), u = 0; u < Zt.length; u++)
      v = Zt[u], v.blockedOn === n && (v.blockedOn = null);
    for (; 0 < Zt.length && (u = Zt[0], u.blockedOn === null); )
      vn(u), u.blockedOn === null && Zt.shift();
  }
  function la(n, i) {
    var u = {};
    return u[n.toLowerCase()] = i.toLowerCase(), u["Webkit" + n] = "webkit" + i, u["Moz" + n] = "moz" + i, u;
  }
  var Cr = { animationend: la("Animation", "AnimationEnd"), animationiteration: la("Animation", "AnimationIteration"), animationstart: la("Animation", "AnimationStart"), transitionend: la("Transition", "TransitionEnd") }, ga = {}, xi = {};
  T && (xi = document.createElement("div").style, "AnimationEvent" in window || (delete Cr.animationend.animation, delete Cr.animationiteration.animation, delete Cr.animationstart.animation), "TransitionEvent" in window || delete Cr.transitionend.transition);
  function Na(n) {
    if (ga[n])
      return ga[n];
    if (!Cr[n])
      return n;
    var i = Cr[n], u;
    for (u in i)
      if (i.hasOwnProperty(u) && u in xi)
        return ga[n] = i[u];
    return n;
  }
  var eo = Na("animationend"), Da = Na("animationiteration"), to = Na("animationstart"), Ti = Na("transitionend"), Ko = /* @__PURE__ */ new Map(), no = /* @__PURE__ */ new Map(), Pl = [
    "abort",
    "abort",
    eo,
    "animationEnd",
    Da,
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
  function Fe(n, i) {
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
  function Sn(n) {
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
  function Xa(n, i) {
    var u = n.pendingLanes;
    if (u === 0)
      return ct = 0;
    var v = 0, g = 0, b = n.expiredLanes, R = n.suspendedLanes, M = n.pingedLanes;
    if (b !== 0)
      v = b, g = ct = 15;
    else if (b = u & 134217727, b !== 0) {
      var H = b & ~R;
      H !== 0 ? (v = pn(H), g = ct) : (M &= b, M !== 0 && (v = pn(M), g = ct));
    } else
      b = u & ~R, b !== 0 ? (v = pn(b), g = ct) : M !== 0 && (v = pn(M), g = ct);
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
  function Au(n) {
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
  var io = Math.clz32 ? Math.clz32 : If, r1 = Math.log, qm = Math.LN2;
  function If(n) {
    return n === 0 ? 32 : 31 - (r1(n) / qm | 0) | 0;
  }
  var zf = s.unstable_UserBlockingPriority, a1 = s.unstable_runWithPriority, Iu = !0;
  function Ym(n, i, u, v) {
    An || oa();
    var g = zu, b = An;
    An = !0;
    try {
      gn(g, n, i, u, v);
    } finally {
      (An = b) || Fn();
    }
  }
  function Il(n, i, u, v) {
    a1(zf, zu.bind(null, n, i, u, v));
  }
  function zu(n, i, u, v) {
    if (Iu) {
      var g;
      if ((g = (i & 4) === 0) && 0 < In.length && -1 < dt.indexOf(n))
        n = Ht(null, n, i, u, v), In.push(n);
      else {
        var b = nc(n, i, u, v);
        if (b === null)
          g && Tn(n, v);
        else {
          if (g) {
            if (-1 < dt.indexOf(n)) {
              n = Ht(b, n, i, u, v), In.push(n);
              return;
            }
            if (Nn(b, n, i, u, v))
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
      var b = xn(g);
      if (b === null)
        g = null;
      else {
        var R = b.tag;
        if (R === 13) {
          if (g = Ir(b), g !== null)
            return g;
          g = null;
        } else if (R === 3) {
          if (b.stateNode.hydrate)
            return b.tag === 3 ? b.stateNode.containerInfo : null;
          g = null;
        } else
          b !== g && (g = null);
      }
    }
    return fc(n, i, v, g, u), null;
  }
  var oo = null, Hf = null, rc = null;
  function $f() {
    if (rc)
      return rc;
    var n, i = Hf, u = i.length, v, g = "value" in oo ? oo.value : oo.textContent, b = g.length;
    for (n = 0; n < u && i[n] === g[n]; n++)
      ;
    var R = u - n;
    for (v = 1; v <= R && i[u - v] === g[b - v]; v++)
      ;
    return rc = g.slice(n, 1 < v ? 1 - v : void 0);
  }
  function zl(n) {
    var i = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && i === 13 && (n = 13)) : n = i, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Hu() {
    return !0;
  }
  function Uf() {
    return !1;
  }
  function Zr(n) {
    function i(u, v, g, b, R) {
      this._reactName = u, this._targetInst = g, this.type = v, this.nativeEvent = b, this.target = R, this.currentTarget = null;
      for (var M in n)
        n.hasOwnProperty(M) && (u = n[M], this[M] = u ? u(b) : b[M]);
      return this.isDefaultPrevented = (b.defaultPrevented != null ? b.defaultPrevented : b.returnValue === !1) ? Hu : Uf, this.isPropagationStopped = Uf, this;
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
  var Hl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, $l = Zr(Hl), Ul = o({}, Hl, { view: 0, detail: 0 }), jf = Zr(Ul), ac, $u, Go, ic = o({}, Ul, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ff, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Go && (Go && n.type === "mousemove" ? (ac = n.screenX - Go.screenX, $u = n.screenY - Go.screenY) : $u = ac = 0, Go = n), ac);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : $u;
  } }), Uu = Zr(ic), i1 = o({}, ic, { dataTransfer: 0 }), ya = Zr(i1), ki = o({}, Ul, { relatedTarget: 0 }), $r = Zr(ki), lo = o({}, Hl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), o1 = Zr(lo), oc = o({}, Hl, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Qm = Zr(oc), ju = o({}, Hl, { data: 0 }), l1 = Zr(ju), Zm = {
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
  }, Vf = {
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
  }, Xm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Jm(n) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(n) : (n = Xm[n]) ? !!i[n] : !1;
  }
  function Ff() {
    return Jm;
  }
  var u1 = o({}, Ul, { key: function(n) {
    if (n.key) {
      var i = Zm[n.key] || n.key;
      if (i !== "Unidentified")
        return i;
    }
    return n.type === "keypress" ? (n = zl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Vf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ff, charCode: function(n) {
    return n.type === "keypress" ? zl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? zl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), e0 = Zr(u1), t0 = o({}, ic, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), s1 = Zr(t0), c1 = o({}, Ul, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ff }), jl = Zr(c1), Bf = o({}, Hl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), f1 = Zr(Bf), d1 = o({}, ic, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), n0 = Zr(d1), r0 = [9, 13, 27, 32], Wf = T && "CompositionEvent" in window, Vu = null;
  T && "documentMode" in document && (Vu = document.documentMode);
  var a0 = T && "TextEvent" in window && !Vu, v1 = T && (!Wf || Vu && 8 < Vu && 11 >= Vu), p1 = " ", h1 = !1;
  function Kf(n, i) {
    switch (n) {
      case "keyup":
        return r0.indexOf(i.keyCode) !== -1;
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
  function m1(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var qo = !1;
  function i0(n, i) {
    switch (n) {
      case "compositionend":
        return m1(i);
      case "keypress":
        return i.which !== 32 ? null : (h1 = !0, p1);
      case "textInput":
        return n = i.data, n === p1 && h1 ? null : n;
      default:
        return null;
    }
  }
  function o0(n, i) {
    if (qo)
      return n === "compositionend" || !Wf && Kf(n, i) ? (n = $f(), rc = Hf = oo = null, qo = !1, n) : null;
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
        return v1 && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var l0 = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function g1(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i === "input" ? !!l0[n.type] : i === "textarea";
  }
  function lc(n, i, u, v) {
    Lt(v), i = dc(i, "onChange"), 0 < i.length && (u = new $l("onChange", "change", null, u, v), n.push({ event: u, listeners: i }));
  }
  var La = null, uo = null;
  function y1(n) {
    uc(n, 0);
  }
  function _i(n) {
    var i = Vr(n);
    if (Dt(i))
      return n;
  }
  function u0(n, i) {
    if (n === "change")
      return i;
  }
  var C1 = !1;
  if (T) {
    var Gf;
    if (T) {
      var qf = "oninput" in document;
      if (!qf) {
        var b1 = document.createElement("div");
        b1.setAttribute("oninput", "return;"), qf = typeof b1.oninput == "function";
      }
      Gf = qf;
    } else
      Gf = !1;
    C1 = Gf && (!document.documentMode || 9 < document.documentMode);
  }
  function S1() {
    La && (La.detachEvent("onpropertychange", Yf), uo = La = null);
  }
  function Yf(n) {
    if (n.propertyName === "value" && _i(uo)) {
      var i = [];
      if (lc(i, uo, n, jt(n)), n = y1, An)
        n(i);
      else {
        An = !0;
        try {
          Ln(n, i);
        } finally {
          An = !1, Fn();
        }
      }
    }
  }
  function s0(n, i, u) {
    n === "focusin" ? (S1(), La = i, uo = u, La.attachEvent("onpropertychange", Yf)) : n === "focusout" && S1();
  }
  function E1(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return _i(uo);
  }
  function Ur(n, i) {
    if (n === "click")
      return _i(i);
  }
  function c0(n, i) {
    if (n === "input" || n === "change")
      return _i(i);
  }
  function w1(n, i) {
    return n === i && (n !== 0 || 1 / n === 1 / i) || n !== n && i !== i;
  }
  var Ca = typeof Object.is == "function" ? Object.is : w1, f0 = Object.prototype.hasOwnProperty;
  function Fu(n, i) {
    if (Ca(n, i))
      return !0;
    if (typeof n != "object" || n === null || typeof i != "object" || i === null)
      return !1;
    var u = Object.keys(n), v = Object.keys(i);
    if (u.length !== v.length)
      return !1;
    for (v = 0; v < u.length; v++)
      if (!f0.call(i, u[v]) || !Ca(n[u[v]], i[u[v]]))
        return !1;
    return !0;
  }
  function x1(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function T1(n, i) {
    var u = x1(n);
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
      u = x1(u);
    }
  }
  function Qf(n, i) {
    return n && i ? n === i ? !0 : n && n.nodeType === 3 ? !1 : i && i.nodeType === 3 ? Qf(n, i.parentNode) : "contains" in n ? n.contains(i) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function Bu() {
    for (var n = window, i = zt(); i instanceof n.HTMLIFrameElement; ) {
      try {
        var u = typeof i.contentWindow.location.href == "string";
      } catch (v) {
        u = !1;
      }
      if (u)
        n = i.contentWindow;
      else
        break;
      i = zt(n.document);
    }
    return i;
  }
  function Yo(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i && (i === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || i === "textarea" || n.contentEditable === "true");
  }
  var R1 = T && "documentMode" in document && 11 >= document.documentMode, Vl = null, Wu = null, Qo = null, so = !1;
  function Zo(n, i, u) {
    var v = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    so || Vl == null || Vl !== zt(v) || (v = Vl, "selectionStart" in v && Yo(v) ? v = { start: v.selectionStart, end: v.selectionEnd } : (v = (v.ownerDocument && v.ownerDocument.defaultView || window).getSelection(), v = { anchorNode: v.anchorNode, anchorOffset: v.anchorOffset, focusNode: v.focusNode, focusOffset: v.focusOffset }), Qo && Fu(Qo, v) || (Qo = v, v = dc(Wu, "onSelect"), 0 < v.length && (i = new $l("onSelect", "select", null, i, u), n.push({ event: i, listeners: v }), i.target = Vl)));
  }
  Fe(
    "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
    0
  ), Fe("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Fe(Pl, 2);
  for (var Zf = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Xf = 0; Xf < Zf.length; Xf++)
    no.set(Zf[Xf], 0);
  E("onMouseEnter", ["mouseout", "mouseover"]), E("onMouseLeave", ["mouseout", "mouseover"]), E("onPointerEnter", ["pointerout", "pointerover"]), E("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Fl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), k1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fl));
  function Jf(n, i, u) {
    var v = n.type || "unknown-event";
    n.currentTarget = u, kr(v, i, void 0, n), n.currentTarget = null;
  }
  function uc(n, i) {
    i = (i & 4) !== 0;
    for (var u = 0; u < n.length; u++) {
      var v = n[u], g = v.event;
      v = v.listeners;
      e: {
        var b = void 0;
        if (i)
          for (var R = v.length - 1; 0 <= R; R--) {
            var M = v[R], H = M.instance, ee = M.currentTarget;
            if (M = M.listener, H !== b && g.isPropagationStopped())
              break e;
            Jf(g, M, ee), b = H;
          }
        else
          for (R = 0; R < v.length; R++) {
            if (M = v[R], H = M.instance, ee = M.currentTarget, M = M.listener, H !== b && g.isPropagationStopped())
              break e;
            Jf(g, M, ee), b = H;
          }
      }
    }
    if (Rr)
      throw n = Ya, Rr = !1, Ya = null, n;
  }
  function yn(n, i) {
    var u = D1(i), v = n + "__bubble";
    u.has(v) || (cc(i, n, 2, !1), u.add(v));
  }
  var sc = "_reactListening" + Math.random().toString(36).slice(2);
  function ed(n) {
    n[sc] || (n[sc] = !0, d.forEach(function(i) {
      k1.has(i) || Mi(i, !1, n, null), Mi(i, !0, n, null);
    }));
  }
  function Mi(n, i, u, v) {
    var g = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, b = u;
    if (n === "selectionchange" && u.nodeType !== 9 && (b = u.ownerDocument), v !== null && !i && k1.has(n)) {
      if (n !== "scroll")
        return;
      g |= 2, b = v;
    }
    var R = D1(b), M = n + "__" + (i ? "capture" : "bubble");
    R.has(M) || (i && (g |= 4), cc(b, n, g, i), R.add(M));
  }
  function cc(n, i, u, v) {
    var g = no.get(i);
    switch (g === void 0 ? 2 : g) {
      case 0:
        g = Ym;
        break;
      case 1:
        g = Il;
        break;
      default:
        g = zu;
    }
    u = g.bind(null, i, u, n), g = void 0, !Jn || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (g = !0), v ? g !== void 0 ? n.addEventListener(i, u, { capture: !0, passive: g }) : n.addEventListener(i, u, !0) : g !== void 0 ? n.addEventListener(i, u, { passive: g }) : n.addEventListener(i, u, !1);
  }
  function fc(n, i, u, v, g) {
    var b = v;
    if (!(i & 1) && !(i & 2) && v !== null)
      e:
        for (; ; ) {
          if (v === null)
            return;
          var R = v.tag;
          if (R === 3 || R === 4) {
            var M = v.stateNode.containerInfo;
            if (M === g || M.nodeType === 8 && M.parentNode === g)
              break;
            if (R === 4)
              for (R = v.return; R !== null; ) {
                var H = R.tag;
                if ((H === 3 || H === 4) && (H = R.stateNode.containerInfo, H === g || H.nodeType === 8 && H.parentNode === g))
                  return;
                R = R.return;
              }
            for (; M !== null; ) {
              if (R = Jo(M), R === null)
                return;
              if (H = R.tag, H === 5 || H === 6) {
                v = b = R;
                continue e;
              }
              M = M.parentNode;
            }
          }
          v = v.return;
        }
    Yr(function() {
      var ee = b, Ae = jt(u), Et = [];
      e: {
        var me = Ko.get(n);
        if (me !== void 0) {
          var Je = $l, Ct = n;
          switch (n) {
            case "keypress":
              if (zl(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              Je = e0;
              break;
            case "focusin":
              Ct = "focus", Je = $r;
              break;
            case "focusout":
              Ct = "blur", Je = $r;
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
              Je = ya;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Je = jl;
              break;
            case eo:
            case Da:
            case to:
              Je = o1;
              break;
            case Ti:
              Je = f1;
              break;
            case "scroll":
              Je = jf;
              break;
            case "wheel":
              Je = n0;
              break;
            case "copy":
            case "cut":
            case "paste":
              Je = Qm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Je = s1;
          }
          var ft = (i & 4) !== 0, q = !ft && n === "scroll", F = ft ? me !== null ? me + "Capture" : null : me;
          ft = [];
          for (var K = ee, oe; K !== null; ) {
            oe = K;
            var ce = oe.stateNode;
            if (oe.tag === 5 && ce !== null && (oe = ce, F !== null && (ce = ln(K, F), ce != null && ft.push(Ku(K, ce, oe)))), q)
              break;
            K = K.return;
          }
          0 < ft.length && (me = new Je(me, Ct, null, u, Ae), Et.push({ event: me, listeners: ft }));
        }
      }
      if (!(i & 7)) {
        e: {
          if (me = n === "mouseover" || n === "pointerover", Je = n === "mouseout" || n === "pointerout", me && !(i & 16) && (Ct = u.relatedTarget || u.fromElement) && (Jo(Ct) || Ct[jr]))
            break e;
          if ((Je || me) && (me = Ae.window === Ae ? Ae : (me = Ae.ownerDocument) ? me.defaultView || me.parentWindow : window, Je ? (Ct = u.relatedTarget || u.toElement, Je = ee, Ct = Ct ? Jo(Ct) : null, Ct !== null && (q = xn(Ct), Ct !== q || Ct.tag !== 5 && Ct.tag !== 6) && (Ct = null)) : (Je = null, Ct = ee), Je !== Ct)) {
            if (ft = Uu, ce = "onMouseLeave", F = "onMouseEnter", K = "mouse", (n === "pointerout" || n === "pointerover") && (ft = s1, ce = "onPointerLeave", F = "onPointerEnter", K = "pointer"), q = Je == null ? me : Vr(Je), oe = Ct == null ? me : Vr(Ct), me = new ft(ce, K + "leave", Je, u, Ae), me.target = q, me.relatedTarget = oe, ce = null, Jo(Ae) === ee && (ft = new ft(F, K + "enter", Ct, u, Ae), ft.target = oe, ft.relatedTarget = q, ce = ft), q = ce, Je && Ct)
              t: {
                for (ft = Je, F = Ct, K = 0, oe = ft; oe; oe = Bl(oe))
                  K++;
                for (oe = 0, ce = F; ce; ce = Bl(ce))
                  oe++;
                for (; 0 < K - oe; )
                  ft = Bl(ft), K--;
                for (; 0 < oe - K; )
                  F = Bl(F), oe--;
                for (; K--; ) {
                  if (ft === F || F !== null && ft === F.alternate)
                    break t;
                  ft = Bl(ft), F = Bl(F);
                }
                ft = null;
              }
            else
              ft = null;
            Je !== null && _1(Et, me, Je, ft, !1), Ct !== null && q !== null && _1(Et, q, Ct, ft, !0);
          }
        }
        e: {
          if (me = ee ? Vr(ee) : window, Je = me.nodeName && me.nodeName.toLowerCase(), Je === "select" || Je === "input" && me.type === "file")
            var Rt = u0;
          else if (g1(me))
            if (C1)
              Rt = c0;
            else {
              Rt = E1;
              var je = s0;
            }
          else
            (Je = me.nodeName) && Je.toLowerCase() === "input" && (me.type === "checkbox" || me.type === "radio") && (Rt = Ur);
          if (Rt && (Rt = Rt(n, ee))) {
            lc(Et, Rt, u, Ae);
            break e;
          }
          je && je(n, me, ee), n === "focusout" && (je = me._wrapperState) && je.controlled && me.type === "number" && ot(me, "number", me.value);
        }
        switch (je = ee ? Vr(ee) : window, n) {
          case "focusin":
            (g1(je) || je.contentEditable === "true") && (Vl = je, Wu = ee, Qo = null);
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
            so = !1, Zo(Et, u, Ae);
            break;
          case "selectionchange":
            if (R1)
              break;
          case "keydown":
          case "keyup":
            Zo(Et, u, Ae);
        }
        var wt;
        if (Wf)
          e: {
            switch (n) {
              case "compositionstart":
                var At = "onCompositionStart";
                break e;
              case "compositionend":
                At = "onCompositionEnd";
                break e;
              case "compositionupdate":
                At = "onCompositionUpdate";
                break e;
            }
            At = void 0;
          }
        else
          qo ? Kf(n, u) && (At = "onCompositionEnd") : n === "keydown" && u.keyCode === 229 && (At = "onCompositionStart");
        At && (v1 && u.locale !== "ko" && (qo || At !== "onCompositionStart" ? At === "onCompositionEnd" && qo && (wt = $f()) : (oo = Ae, Hf = "value" in oo ? oo.value : oo.textContent, qo = !0)), je = dc(ee, At), 0 < je.length && (At = new l1(At, n, null, u, Ae), Et.push({ event: At, listeners: je }), wt ? At.data = wt : (wt = m1(u), wt !== null && (At.data = wt)))), (wt = a0 ? i0(n, u) : o0(n, u)) && (ee = dc(ee, "onBeforeInput"), 0 < ee.length && (Ae = new l1(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          Ae
        ), Et.push({ event: Ae, listeners: ee }), Ae.data = wt));
      }
      uc(Et, i);
    });
  }
  function Ku(n, i, u) {
    return { instance: n, listener: i, currentTarget: u };
  }
  function dc(n, i) {
    for (var u = i + "Capture", v = []; n !== null; ) {
      var g = n, b = g.stateNode;
      g.tag === 5 && b !== null && (g = b, b = ln(n, u), b != null && v.unshift(Ku(n, b, g)), b = ln(n, i), b != null && v.push(Ku(n, b, g))), n = n.return;
    }
    return v;
  }
  function Bl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function _1(n, i, u, v, g) {
    for (var b = i._reactName, R = []; u !== null && u !== v; ) {
      var M = u, H = M.alternate, ee = M.stateNode;
      if (H !== null && H === v)
        break;
      M.tag === 5 && ee !== null && (M = ee, g ? (H = ln(u, b), H != null && R.unshift(Ku(u, H, M))) : g || (H = ln(u, b), H != null && R.push(Ku(u, H, M)))), u = u.return;
    }
    R.length !== 0 && n.push({ event: i, listeners: R });
  }
  function vc() {
  }
  var td = null, nd = null;
  function Wl(n, i) {
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
  var Kl = typeof setTimeout == "function" ? setTimeout : void 0, M1 = typeof clearTimeout == "function" ? clearTimeout : void 0;
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
  function O1(n) {
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
    return { $$typeof: Le, toString: n, valueOf: n };
  }
  var Xo = Math.random().toString(36).slice(2), Ja = "__reactFiber$" + Xo, mc = "__reactProps$" + Xo, jr = "__reactContainer$" + Xo, N1 = "__reactEvents$" + Xo;
  function Jo(n) {
    var i = n[Ja];
    if (i)
      return i;
    for (var u = n.parentNode; u; ) {
      if (i = u[jr] || u[Ja]) {
        if (u = i.alternate, i.child !== null || u !== null && u.child !== null)
          for (n = O1(n); n !== null; ) {
            if (u = n[Ja])
              return u;
            n = O1(n);
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
  function Vr(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(c(33));
  }
  function Oi(n) {
    return n[mc] || null;
  }
  function D1(n) {
    var i = n[N1];
    return i === void 0 && (i = n[N1] = /* @__PURE__ */ new Set()), i;
  }
  var rd = [], un = -1;
  function Fr(n) {
    return { current: n };
  }
  function Tt(n) {
    0 > un || (n.current = rd[un], rd[un] = null, un--);
  }
  function vt(n, i) {
    un++, rd[un] = n.current, n.current = i;
  }
  var vo = {}, Rn = Fr(vo), br = Fr(!1), po = vo;
  function nn(n, i) {
    var u = n.type.contextTypes;
    if (!u)
      return vo;
    var v = n.stateNode;
    if (v && v.__reactInternalMemoizedUnmaskedChildContext === i)
      return v.__reactInternalMemoizedMaskedChildContext;
    var g = {}, b;
    for (b in u)
      g[b] = i[b];
    return v && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = i, n.__reactInternalMemoizedMaskedChildContext = g), g;
  }
  function Sr(n) {
    return n = n.childContextTypes, n != null;
  }
  function ei() {
    Tt(br), Tt(Rn);
  }
  function Gl(n, i, u) {
    if (Rn.current !== vo)
      throw Error(c(168));
    vt(Rn, i), vt(br, u);
  }
  function ql(n, i, u) {
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
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || vo, po = Rn.current, vt(Rn, n), vt(br, br.current), !0;
  }
  function L1(n, i, u) {
    var v = n.stateNode;
    if (!v)
      throw Error(c(169));
    u ? (n = ql(n, i, po), v.__reactInternalMemoizedMergedChildContext = n, Tt(br), Tt(Rn), vt(Rn, n)) : Tt(br), vt(br, u);
  }
  var ad = null, el = null, qu = s.unstable_runWithPriority, Aa = s.unstable_scheduleCallback, Yu = s.unstable_cancelCallback, d0 = s.unstable_shouldYield, ho = s.unstable_requestPaint, gc = s.unstable_now, A1 = s.unstable_getCurrentPriorityLevel, yc = s.unstable_ImmediatePriority, P1 = s.unstable_UserBlockingPriority, id = s.unstable_NormalPriority, od = s.unstable_LowPriority, ld = s.unstable_IdlePriority, ud = {}, I1 = ho !== void 0 ? ho : function() {
  }, ti = null, Cc = null, Qu = !1, z1 = gc(), Er = 1e4 > z1 ? gc : function() {
    return gc() - z1;
  };
  function Yl() {
    switch (A1()) {
      case yc:
        return 99;
      case P1:
        return 98;
      case id:
        return 97;
      case od:
        return 96;
      case ld:
        return 95;
      default:
        throw Error(c(332));
    }
  }
  function sd(n) {
    switch (n) {
      case 99:
        return yc;
      case 98:
        return P1;
      case 97:
        return id;
      case 96:
        return od;
      case 95:
        return ld;
      default:
        throw Error(c(332));
    }
  }
  function tl(n, i) {
    return n = sd(n), qu(n, i);
  }
  function nl(n, i, u) {
    return n = sd(n), Aa(n, i, u);
  }
  function lr() {
    if (Cc !== null) {
      var n = Cc;
      Cc = null, Yu(n);
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
  var mo = U.ReactCurrentBatchConfig;
  function ur(n, i) {
    if (n && n.defaultProps) {
      i = o({}, i), n = n.defaultProps;
      for (var u in n)
        i[u] === void 0 && (i[u] = n[u]);
      return i;
    }
    return i;
  }
  var go = Fr(null), yo = null, ni = null, bc = null;
  function cd() {
    bc = ni = yo = null;
  }
  function Sc(n) {
    var i = go.current;
    Tt(go), n.type._context._currentValue = i;
  }
  function fd(n, i) {
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
    yo = n, bc = ni = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & i && (Ea = !0), n.firstContext = null);
  }
  function sa(n, i) {
    if (bc !== n && i !== !1 && i !== 0)
      if ((typeof i != "number" || i === 1073741823) && (bc = n, i = 1073741823), i = { context: n, observedBits: i, next: null }, ni === null) {
        if (yo === null)
          throw Error(c(308));
        ni = i, yo.dependencies = { lanes: 0, firstContext: i, responders: null };
      } else
        ni = ni.next = i;
    return n._currentValue;
  }
  var Sa = !1;
  function dd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
  }
  function H1(n, i) {
    n = n.updateQueue, i.updateQueue === n && (i.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Pa(n, i) {
    return { eventTime: n, lane: i, tag: 0, payload: null, callback: null, next: null };
  }
  function Di(n, i) {
    if (n = n.updateQueue, n !== null) {
      n = n.shared;
      var u = n.pending;
      u === null ? i.next = i : (i.next = u.next, u.next = i), n.pending = i;
    }
  }
  function $1(n, i) {
    var u = n.updateQueue, v = n.alternate;
    if (v !== null && (v = v.updateQueue, u === v)) {
      var g = null, b = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var R = { eventTime: u.eventTime, lane: u.lane, tag: u.tag, payload: u.payload, callback: u.callback, next: null };
          b === null ? g = b = R : b = b.next = R, u = u.next;
        } while (u !== null);
        b === null ? g = b = i : b = b.next = i;
      } else
        g = b = i;
      u = { baseState: v.baseState, firstBaseUpdate: g, lastBaseUpdate: b, shared: v.shared, effects: v.effects }, n.updateQueue = u;
      return;
    }
    n = u.lastBaseUpdate, n === null ? u.firstBaseUpdate = i : n.next = i, u.lastBaseUpdate = i;
  }
  function Li(n, i, u, v) {
    var g = n.updateQueue;
    Sa = !1;
    var b = g.firstBaseUpdate, R = g.lastBaseUpdate, M = g.shared.pending;
    if (M !== null) {
      g.shared.pending = null;
      var H = M, ee = H.next;
      H.next = null, R === null ? b = ee : R.next = ee, R = H;
      var Ae = n.alternate;
      if (Ae !== null) {
        Ae = Ae.updateQueue;
        var Et = Ae.lastBaseUpdate;
        Et !== R && (Et === null ? Ae.firstBaseUpdate = ee : Et.next = ee, Ae.lastBaseUpdate = H);
      }
    }
    if (b !== null) {
      Et = g.baseState, R = 0, Ae = ee = H = null;
      do {
        M = b.lane;
        var me = b.eventTime;
        if ((v & M) === M) {
          Ae !== null && (Ae = Ae.next = {
            eventTime: me,
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          });
          e: {
            var Je = n, Ct = b;
            switch (M = i, me = u, Ct.tag) {
              case 1:
                if (Je = Ct.payload, typeof Je == "function") {
                  Et = Je.call(me, Et, M);
                  break e;
                }
                Et = Je;
                break e;
              case 3:
                Je.flags = Je.flags & -4097 | 64;
              case 0:
                if (Je = Ct.payload, M = typeof Je == "function" ? Je.call(me, Et, M) : Je, M == null)
                  break e;
                Et = o({}, Et, M);
                break e;
              case 2:
                Sa = !0;
            }
          }
          b.callback !== null && (n.flags |= 32, M = g.effects, M === null ? g.effects = [b] : M.push(b));
        } else
          me = { eventTime: me, lane: M, tag: b.tag, payload: b.payload, callback: b.callback, next: null }, Ae === null ? (ee = Ae = me, H = Et) : Ae = Ae.next = me, R |= M;
        if (b = b.next, b === null) {
          if (M = g.shared.pending, M === null)
            break;
          b = M.next, M.next = null, g.lastBaseUpdate = M, g.shared.pending = null;
        }
      } while (!0);
      Ae === null && (H = Et), g.baseState = H, g.firstBaseUpdate = ee, g.lastBaseUpdate = Ae, fl |= R, n.lanes = R, n.memoizedState = Et;
    }
  }
  function vd(n, i, u) {
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
  function Zu(n, i, u, v) {
    i = n.memoizedState, u = u(v, i), u = u == null ? i : o({}, i, u), n.memoizedState = u, n.lanes === 0 && (n.updateQueue.baseState = u);
  }
  var Ql = { isMounted: function(n) {
    return (n = n._reactInternals) ? xn(n) === n : !1;
  }, enqueueSetState: function(n, i, u) {
    n = n._reactInternals;
    var v = ca(), g = si(n), b = Pa(v, g);
    b.payload = i, u != null && (b.callback = u), Di(n, b), Ro(n, g, v);
  }, enqueueReplaceState: function(n, i, u) {
    n = n._reactInternals;
    var v = ca(), g = si(n), b = Pa(v, g);
    b.tag = 1, b.payload = i, u != null && (b.callback = u), Di(n, b), Ro(n, g, v);
  }, enqueueForceUpdate: function(n, i) {
    n = n._reactInternals;
    var u = ca(), v = si(n), g = Pa(u, v);
    g.tag = 2, i != null && (g.callback = i), Di(n, g), Ro(n, v, u);
  } };
  function Xu(n, i, u, v, g, b, R) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(v, b, R) : i.prototype && i.prototype.isPureReactComponent ? !Fu(u, v) || !Fu(g, b) : !0;
  }
  function al(n, i, u) {
    var v = !1, g = vo, b = i.contextType;
    return typeof b == "object" && b !== null ? b = sa(b) : (g = Sr(i) ? po : Rn.current, v = i.contextTypes, b = (v = v != null) ? nn(n, g) : vo), i = new i(u, b), n.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Ql, n.stateNode = i, i._reactInternals = n, v && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = g, n.__reactInternalMemoizedMaskedChildContext = b), i;
  }
  function wc(n, i, u, v) {
    n = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(u, v), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(u, v), i.state !== n && Ql.enqueueReplaceState(i, i.state, null);
  }
  function xc(n, i, u, v) {
    var g = n.stateNode;
    g.props = u, g.state = n.memoizedState, g.refs = Ec, dd(n);
    var b = i.contextType;
    typeof b == "object" && b !== null ? g.context = sa(b) : (b = Sr(i) ? po : Rn.current, g.context = nn(n, b)), Li(n, u, g, v), g.state = n.memoizedState, b = i.getDerivedStateFromProps, typeof b == "function" && (Zu(n, i, b, u), g.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function" || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (i = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), i !== g.state && Ql.enqueueReplaceState(g, g.state, null), Li(n, u, g, v), g.state = n.memoizedState), typeof g.componentDidMount == "function" && (n.flags |= 4);
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
        return i !== null && i.ref !== null && typeof i.ref == "function" && i.ref._stringRef === g ? i.ref : (i = function(b) {
          var R = v.refs;
          R === Ec && (R = v.refs = {}), b === null ? delete R[g] : R[g] = b;
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
  function pd(n) {
    function i(q, F) {
      if (n) {
        var K = q.lastEffect;
        K !== null ? (K.nextEffect = F, q.lastEffect = F) : q.firstEffect = q.lastEffect = F, F.nextEffect = null, F.flags = 8;
      }
    }
    function u(q, F) {
      if (!n)
        return null;
      for (; F !== null; )
        i(q, F), F = F.sibling;
      return null;
    }
    function v(q, F) {
      for (q = /* @__PURE__ */ new Map(); F !== null; )
        F.key !== null ? q.set(F.key, F) : q.set(F.index, F), F = F.sibling;
      return q;
    }
    function g(q, F) {
      return q = Oo(q, F), q.index = 0, q.sibling = null, q;
    }
    function b(q, F, K) {
      return q.index = K, n ? (K = q.alternate, K !== null ? (K = K.index, K < F ? (q.flags = 2, F) : K) : (q.flags = 2, F)) : F;
    }
    function R(q) {
      return n && q.alternate === null && (q.flags = 2), q;
    }
    function M(q, F, K, oe) {
      return F === null || F.tag !== 6 ? (F = Fd(K, q.mode, oe), F.return = q, F) : (F = g(F, K), F.return = q, F);
    }
    function H(q, F, K, oe) {
      return F !== null && F.elementType === K.type ? (oe = g(F, K.props), oe.ref = Zl(q, F, K), oe.return = q, oe) : (oe = Es(K.type, K.key, K.props, null, q.mode, oe), oe.ref = Zl(q, F, K), oe.return = q, oe);
    }
    function ee(q, F, K, oe) {
      return F === null || F.tag !== 4 || F.stateNode.containerInfo !== K.containerInfo || F.stateNode.implementation !== K.implementation ? (F = Bd(K, q.mode, oe), F.return = q, F) : (F = g(F, K.children || []), F.return = q, F);
    }
    function Ae(q, F, K, oe, ce) {
      return F === null || F.tag !== 7 ? (F = ci(K, q.mode, oe, ce), F.return = q, F) : (F = g(F, K), F.return = q, F);
    }
    function Et(q, F, K) {
      if (typeof F == "string" || typeof F == "number")
        return F = Fd("" + F, q.mode, K), F.return = q, F;
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case Y:
            return K = Es(F.type, F.key, F.props, null, q.mode, K), K.ref = Zl(q, null, F), K.return = q, K;
          case Q:
            return F = Bd(F, q.mode, K), F.return = q, F;
        }
        if (il(F) || Ke(F))
          return F = ci(
            F,
            q.mode,
            K,
            null
          ), F.return = q, F;
        Ju(q, F);
      }
      return null;
    }
    function me(q, F, K, oe) {
      var ce = F !== null ? F.key : null;
      if (typeof K == "string" || typeof K == "number")
        return ce !== null ? null : M(q, F, "" + K, oe);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case Y:
            return K.key === ce ? K.type === ne ? Ae(q, F, K.props.children, oe, ce) : H(q, F, K, oe) : null;
          case Q:
            return K.key === ce ? ee(q, F, K, oe) : null;
        }
        if (il(K) || Ke(K))
          return ce !== null ? null : Ae(q, F, K, oe, null);
        Ju(q, K);
      }
      return null;
    }
    function Je(q, F, K, oe, ce) {
      if (typeof oe == "string" || typeof oe == "number")
        return q = q.get(K) || null, M(F, q, "" + oe, ce);
      if (typeof oe == "object" && oe !== null) {
        switch (oe.$$typeof) {
          case Y:
            return q = q.get(oe.key === null ? K : oe.key) || null, oe.type === ne ? Ae(F, q, oe.props.children, ce, oe.key) : H(F, q, oe, ce);
          case Q:
            return q = q.get(oe.key === null ? K : oe.key) || null, ee(F, q, oe, ce);
        }
        if (il(oe) || Ke(oe))
          return q = q.get(K) || null, Ae(F, q, oe, ce, null);
        Ju(F, oe);
      }
      return null;
    }
    function Ct(q, F, K, oe) {
      for (var ce = null, Rt = null, je = F, wt = F = 0, At = null; je !== null && wt < K.length; wt++) {
        je.index > wt ? (At = je, je = null) : At = je.sibling;
        var kt = me(q, je, K[wt], oe);
        if (kt === null) {
          je === null && (je = At);
          break;
        }
        n && je && kt.alternate === null && i(q, je), F = b(kt, F, wt), Rt === null ? ce = kt : Rt.sibling = kt, Rt = kt, je = At;
      }
      if (wt === K.length)
        return u(q, je), ce;
      if (je === null) {
        for (; wt < K.length; wt++)
          je = Et(q, K[wt], oe), je !== null && (F = b(je, F, wt), Rt === null ? ce = je : Rt.sibling = je, Rt = je);
        return ce;
      }
      for (je = v(q, je); wt < K.length; wt++)
        At = Je(je, q, wt, K[wt], oe), At !== null && (n && At.alternate !== null && je.delete(At.key === null ? wt : At.key), F = b(At, F, wt), Rt === null ? ce = At : Rt.sibling = At, Rt = At);
      return n && je.forEach(function(No) {
        return i(q, No);
      }), ce;
    }
    function ft(q, F, K, oe) {
      var ce = Ke(K);
      if (typeof ce != "function")
        throw Error(c(150));
      if (K = ce.call(K), K == null)
        throw Error(c(151));
      for (var Rt = ce = null, je = F, wt = F = 0, At = null, kt = K.next(); je !== null && !kt.done; wt++, kt = K.next()) {
        je.index > wt ? (At = je, je = null) : At = je.sibling;
        var No = me(q, je, kt.value, oe);
        if (No === null) {
          je === null && (je = At);
          break;
        }
        n && je && No.alternate === null && i(q, je), F = b(No, F, wt), Rt === null ? ce = No : Rt.sibling = No, Rt = No, je = At;
      }
      if (kt.done)
        return u(q, je), ce;
      if (je === null) {
        for (; !kt.done; wt++, kt = K.next())
          kt = Et(q, kt.value, oe), kt !== null && (F = b(kt, F, wt), Rt === null ? ce = kt : Rt.sibling = kt, Rt = kt);
        return ce;
      }
      for (je = v(q, je); !kt.done; wt++, kt = K.next())
        kt = Je(je, q, wt, kt.value, oe), kt !== null && (n && kt.alternate !== null && je.delete(kt.key === null ? wt : kt.key), F = b(kt, F, wt), Rt === null ? ce = kt : Rt.sibling = kt, Rt = kt);
      return n && je.forEach(function(L0) {
        return i(q, L0);
      }), ce;
    }
    return function(q, F, K, oe) {
      var ce = typeof K == "object" && K !== null && K.type === ne && K.key === null;
      ce && (K = K.props.children);
      var Rt = typeof K == "object" && K !== null;
      if (Rt)
        switch (K.$$typeof) {
          case Y:
            e: {
              for (Rt = K.key, ce = F; ce !== null; ) {
                if (ce.key === Rt) {
                  switch (ce.tag) {
                    case 7:
                      if (K.type === ne) {
                        u(q, ce.sibling), F = g(ce, K.props.children), F.return = q, q = F;
                        break e;
                      }
                      break;
                    default:
                      if (ce.elementType === K.type) {
                        u(q, ce.sibling), F = g(ce, K.props), F.ref = Zl(q, ce, K), F.return = q, q = F;
                        break e;
                      }
                  }
                  u(q, ce);
                  break;
                } else
                  i(q, ce);
                ce = ce.sibling;
              }
              K.type === ne ? (F = ci(K.props.children, q.mode, oe, K.key), F.return = q, q = F) : (oe = Es(K.type, K.key, K.props, null, q.mode, oe), oe.ref = Zl(q, F, K), oe.return = q, q = oe);
            }
            return R(q);
          case Q:
            e: {
              for (ce = K.key; F !== null; ) {
                if (F.key === ce)
                  if (F.tag === 4 && F.stateNode.containerInfo === K.containerInfo && F.stateNode.implementation === K.implementation) {
                    u(q, F.sibling), F = g(F, K.children || []), F.return = q, q = F;
                    break e;
                  } else {
                    u(q, F);
                    break;
                  }
                else
                  i(q, F);
                F = F.sibling;
              }
              F = Bd(K, q.mode, oe), F.return = q, q = F;
            }
            return R(q);
        }
      if (typeof K == "string" || typeof K == "number")
        return K = "" + K, F !== null && F.tag === 6 ? (u(q, F.sibling), F = g(F, K), F.return = q, q = F) : (u(q, F), F = Fd(K, q.mode, oe), F.return = q, q = F), R(q);
      if (il(K))
        return Ct(q, F, K, oe);
      if (Ke(K))
        return ft(q, F, K, oe);
      if (Rt && Ju(q, K), typeof K == "undefined" && !ce)
        switch (q.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(c(152, He(q.type) || "Component"));
        }
      return u(q, F);
    };
  }
  var es = pd(!0), hd = pd(!1), ol = {}, ri = Fr(ol), ts = Fr(ol), ns = Fr(ol);
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
  function Xl() {
    Tt(ri), Tt(ts), Tt(ns);
  }
  function U1(n) {
    ll(ns.current);
    var i = ll(ri.current), u = We(i, n.type);
    i !== u && (vt(ts, n), vt(ri, u));
  }
  function md(n) {
    ts.current === n && (Tt(ri), Tt(ts));
  }
  var Hn = Fr(0);
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
  var ai = null, Ai = null, ii = !1;
  function gd(n, i) {
    var u = xa(5, null, null, 0);
    u.elementType = "DELETED", u.type = "DELETED", u.stateNode = i, u.return = n, u.flags = 8, n.lastEffect !== null ? (n.lastEffect.nextEffect = u, n.lastEffect = u) : n.firstEffect = n.lastEffect = u;
  }
  function j1(n, i) {
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
  function Co(n) {
    if (ii) {
      var i = Ai;
      if (i) {
        var u = i;
        if (!j1(n, i)) {
          if (i = co(u.nextSibling), !i || !j1(n, i)) {
            n.flags = n.flags & -1025 | 2, ii = !1, ai = n;
            return;
          }
          gd(ai, u);
        }
        ai = n, Ai = co(i.firstChild);
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
      for (i = Ai; i; )
        gd(n, i), i = co(i.nextSibling);
    if (is(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(c(317));
      e: {
        for (n = n.nextSibling, i = 0; n; ) {
          if (n.nodeType === 8) {
            var u = n.data;
            if (u === "/$") {
              if (i === 0) {
                Ai = co(n.nextSibling);
                break e;
              }
              i--;
            } else
              u !== "$" && u !== "$!" && u !== "$?" || i++;
          }
          n = n.nextSibling;
        }
        Ai = null;
      }
    } else
      Ai = ai ? co(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Jl() {
    Ai = ai = null, ii = !1;
  }
  var ul = [];
  function bo() {
    for (var n = 0; n < ul.length; n++)
      ul[n]._workInProgressVersionPrimary = null;
    ul.length = 0;
  }
  var eu = U.ReactCurrentDispatcher, sr = U.ReactCurrentBatchConfig, tu = 0, kn = null, cr = null, fr = null, ls = !1, So = !1;
  function Br() {
    throw Error(c(321));
  }
  function Pi(n, i) {
    if (i === null)
      return !1;
    for (var u = 0; u < i.length && u < n.length; u++)
      if (!Ca(n[u], i[u]))
        return !1;
    return !0;
  }
  function yd(n, i, u, v, g, b) {
    if (tu = b, kn = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, eu.current = n === null || n.memoizedState === null ? cs : p0, n = u(v, g), So) {
      b = 0;
      do {
        if (So = !1, !(25 > b))
          throw Error(c(301));
        b += 1, fr = cr = null, i.updateQueue = null, eu.current = h0, n = u(v, g);
      } while (So);
    }
    if (eu.current = kc, i = cr !== null && cr.next !== null, tu = 0, fr = cr = kn = null, ls = !1, i)
      throw Error(c(300));
    return n;
  }
  function le() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return fr === null ? kn.memoizedState = fr = n : fr = fr.next = n, fr;
  }
  function qn() {
    if (cr === null) {
      var n = kn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = cr.next;
    var i = fr === null ? kn.memoizedState : fr.next;
    if (i !== null)
      fr = i, cr = n;
    else {
      if (n === null)
        throw Error(c(310));
      cr = n, n = { memoizedState: cr.memoizedState, baseState: cr.baseState, baseQueue: cr.baseQueue, queue: cr.queue, next: null }, fr === null ? kn.memoizedState = fr = n : fr = fr.next = n;
    }
    return fr;
  }
  function Vt(n, i) {
    return typeof i == "function" ? i(n) : i;
  }
  function Ii(n) {
    var i = qn(), u = i.queue;
    if (u === null)
      throw Error(c(311));
    u.lastRenderedReducer = n;
    var v = cr, g = v.baseQueue, b = u.pending;
    if (b !== null) {
      if (g !== null) {
        var R = g.next;
        g.next = b.next, b.next = R;
      }
      v.baseQueue = g = b, u.pending = null;
    }
    if (g !== null) {
      g = g.next, v = v.baseState;
      var M = R = b = null, H = g;
      do {
        var ee = H.lane;
        if ((tu & ee) === ee)
          M !== null && (M = M.next = { lane: 0, action: H.action, eagerReducer: H.eagerReducer, eagerState: H.eagerState, next: null }), v = H.eagerReducer === n ? H.eagerState : n(v, H.action);
        else {
          var Ae = {
            lane: ee,
            action: H.action,
            eagerReducer: H.eagerReducer,
            eagerState: H.eagerState,
            next: null
          };
          M === null ? (R = M = Ae, b = v) : M = M.next = Ae, kn.lanes |= ee, fl |= ee;
        }
        H = H.next;
      } while (H !== null && H !== g);
      M === null ? b = v : M.next = R, Ca(v, i.memoizedState) || (Ea = !0), i.memoizedState = v, i.baseState = b, i.baseQueue = M, u.lastRenderedState = v;
    }
    return [i.memoizedState, u.dispatch];
  }
  function sl(n) {
    var i = qn(), u = i.queue;
    if (u === null)
      throw Error(c(311));
    u.lastRenderedReducer = n;
    var v = u.dispatch, g = u.pending, b = i.memoizedState;
    if (g !== null) {
      u.pending = null;
      var R = g = g.next;
      do
        b = n(b, R.action), R = R.next;
      while (R !== g);
      Ca(b, i.memoizedState) || (Ea = !0), i.memoizedState = b, i.baseQueue === null && (i.baseState = b), u.lastRenderedState = b;
    }
    return [b, v];
  }
  function us(n, i, u) {
    var v = i._getVersion;
    v = v(i._source);
    var g = i._workInProgressVersionPrimary;
    if (g !== null ? n = g === v : (n = n.mutableReadLanes, (n = (tu & n) === n) && (i._workInProgressVersionPrimary = v, ul.push(i))), n)
      return u(i._source);
    throw ul.push(i), Error(c(350));
  }
  function Cd(n, i, u, v) {
    var g = Wr;
    if (g === null)
      throw Error(c(349));
    var b = i._getVersion, R = b(i._source), M = eu.current, H = M.useState(function() {
      return us(g, i, u);
    }), ee = H[1], Ae = H[0];
    H = fr;
    var Et = n.memoizedState, me = Et.refs, Je = me.getSnapshot, Ct = Et.source;
    Et = Et.subscribe;
    var ft = kn;
    return n.memoizedState = { refs: me, source: i, subscribe: v }, M.useEffect(function() {
      me.getSnapshot = u, me.setSnapshot = ee;
      var q = b(i._source);
      if (!Ca(R, q)) {
        q = u(i._source), Ca(Ae, q) || (ee(q), q = si(ft), g.mutableReadLanes |= q & g.pendingLanes), q = g.mutableReadLanes, g.entangledLanes |= q;
        for (var F = g.entanglements, K = q; 0 < K; ) {
          var oe = 31 - io(K), ce = 1 << oe;
          F[oe] |= q, K &= ~ce;
        }
      }
    }, [u, i, v]), M.useEffect(function() {
      return v(i._source, function() {
        var q = me.getSnapshot, F = me.setSnapshot;
        try {
          F(q(i._source));
          var K = si(ft);
          g.mutableReadLanes |= K & g.pendingLanes;
        } catch (oe) {
          F(function() {
            throw oe;
          });
        }
      });
    }, [i, v]), Ca(Je, u) && Ca(Ct, i) && Ca(Et, v) || (n = { pending: null, dispatch: null, lastRenderedReducer: Vt, lastRenderedState: Ae }, n.dispatch = ee = wd.bind(null, kn, n), H.queue = n, H.baseQueue = null, Ae = us(g, i, u), H.memoizedState = H.baseState = Ae), Ae;
  }
  function bd(n, i, u) {
    var v = qn();
    return Cd(v, n, i, u);
  }
  function nu(n) {
    var i = le();
    return typeof n == "function" && (n = n()), i.memoizedState = i.baseState = n, n = i.queue = { pending: null, dispatch: null, lastRenderedReducer: Vt, lastRenderedState: n }, n = n.dispatch = wd.bind(null, kn, n), [i.memoizedState, n];
  }
  function ru(n, i, u, v) {
    return n = { tag: n, create: i, destroy: u, deps: v, next: null }, i = kn.updateQueue, i === null ? (i = { lastEffect: null }, kn.updateQueue = i, i.lastEffect = n.next = n) : (u = i.lastEffect, u === null ? i.lastEffect = n.next = n : (v = u.next, u.next = n, n.next = v, i.lastEffect = n)), n;
  }
  function Sd(n) {
    var i = le();
    return n = { current: n }, i.memoizedState = n;
  }
  function zi() {
    return qn().memoizedState;
  }
  function au(n, i, u, v) {
    var g = le();
    kn.flags |= n, g.memoizedState = ru(1 | i, u, void 0, v === void 0 ? null : v);
  }
  function Eo(n, i, u, v) {
    var g = qn();
    v = v === void 0 ? null : v;
    var b = void 0;
    if (cr !== null) {
      var R = cr.memoizedState;
      if (b = R.destroy, v !== null && Pi(v, R.deps)) {
        ru(i, u, b, v);
        return;
      }
    }
    kn.flags |= n, g.memoizedState = ru(1 | i, u, b, v);
  }
  function Tc(n, i) {
    return au(516, 4, n, i);
  }
  function ss(n, i) {
    return Eo(516, 4, n, i);
  }
  function Ed(n, i) {
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
  function Ia(n, i, u) {
    return u = u != null ? u.concat([n]) : null, Eo(4, 2, Rc.bind(null, i, n), u);
  }
  function _n() {
  }
  function v0(n, i) {
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
  function iu(n, i) {
    var u = Yl();
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
  function wd(n, i, u) {
    var v = ca(), g = si(n), b = { lane: g, action: u, eagerReducer: null, eagerState: null, next: null }, R = i.pending;
    if (R === null ? b.next = b : (b.next = R.next, R.next = b), i.pending = b, R = n.alternate, n === kn || R !== null && R === kn)
      So = ls = !0;
    else {
      if (n.lanes === 0 && (R === null || R.lanes === 0) && (R = i.lastRenderedReducer, R !== null))
        try {
          var M = i.lastRenderedState, H = R(M, u);
          if (b.eagerReducer = R, b.eagerState = H, Ca(H, M))
            return;
        } catch (ee) {
        } finally {
        }
      Ro(n, g, v);
    }
  }
  var kc = { readContext: sa, useCallback: Br, useContext: Br, useEffect: Br, useImperativeHandle: Br, useLayoutEffect: Br, useMemo: Br, useReducer: Br, useRef: Br, useState: Br, useDebugValue: Br, useDeferredValue: Br, useTransition: Br, useMutableSource: Br, useOpaqueIdentifier: Br, unstable_isNewReconciler: !1 }, cs = { readContext: sa, useCallback: function(n, i) {
    return le().memoizedState = [n, i === void 0 ? null : i], n;
  }, useContext: sa, useEffect: Tc, useImperativeHandle: function(n, i, u) {
    return u = u != null ? u.concat([n]) : null, au(4, 2, Rc.bind(
      null,
      i,
      n
    ), u);
  }, useLayoutEffect: function(n, i) {
    return au(4, 2, n, i);
  }, useMemo: function(n, i) {
    var u = le();
    return i = i === void 0 ? null : i, n = n(), u.memoizedState = [n, i], n;
  }, useReducer: function(n, i, u) {
    var v = le();
    return i = u !== void 0 ? u(i) : i, v.memoizedState = v.baseState = i, n = v.queue = { pending: null, dispatch: null, lastRenderedReducer: n, lastRenderedState: i }, n = n.dispatch = wd.bind(null, kn, n), [v.memoizedState, n];
  }, useRef: Sd, useState: nu, useDebugValue: _n, useDeferredValue: function(n) {
    var i = nu(n), u = i[0], v = i[1];
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
    var n = nu(!1), i = n[0];
    return n = iu.bind(null, n[1]), Sd(n), [n, i];
  }, useMutableSource: function(n, i, u) {
    var v = le();
    return v.memoizedState = { refs: { getSnapshot: i, setSnapshot: null }, source: n, subscribe: u }, Cd(v, n, i, u);
  }, useOpaqueIdentifier: function() {
    if (ii) {
      var n = !1, i = hc(function() {
        throw n || (n = !0, u("r:" + (fo++).toString(36))), Error(c(355));
      }), u = nu(i)[1];
      return !(kn.mode & 2) && (kn.flags |= 516, ru(
        5,
        function() {
          u("r:" + (fo++).toString(36));
        },
        void 0,
        null
      )), i;
    }
    return i = "r:" + (fo++).toString(36), nu(i), i;
  }, unstable_isNewReconciler: !1 }, p0 = { readContext: sa, useCallback: v0, useContext: sa, useEffect: ss, useImperativeHandle: Ia, useLayoutEffect: Ed, useMemo: hn, useReducer: Ii, useRef: zi, useState: function() {
    return Ii(Vt);
  }, useDebugValue: _n, useDeferredValue: function(n) {
    var i = Ii(Vt), u = i[0], v = i[1];
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
    var n = Ii(Vt)[0];
    return [
      zi().current,
      n
    ];
  }, useMutableSource: bd, useOpaqueIdentifier: function() {
    return Ii(Vt)[0];
  }, unstable_isNewReconciler: !1 }, h0 = { readContext: sa, useCallback: v0, useContext: sa, useEffect: ss, useImperativeHandle: Ia, useLayoutEffect: Ed, useMemo: hn, useReducer: sl, useRef: zi, useState: function() {
    return sl(Vt);
  }, useDebugValue: _n, useDeferredValue: function(n) {
    var i = sl(Vt), u = i[0], v = i[1];
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
    var n = sl(Vt)[0];
    return [
      zi().current,
      n
    ];
  }, useMutableSource: bd, useOpaqueIdentifier: function() {
    return sl(Vt)[0];
  }, unstable_isNewReconciler: !1 }, m0 = U.ReactCurrentOwner, Ea = !1;
  function Xr(n, i, u, v) {
    i.child = n === null ? hd(i, null, u, v) : es(i, n.child, u, v);
  }
  function xd(n, i, u, v, g) {
    u = u.render;
    var b = i.ref;
    return rl(i, g), v = yd(n, i, u, v, b, g), n !== null && !Ea ? (i.updateQueue = n.updateQueue, i.flags &= -517, n.lanes &= ~g, Hi(n, i, g)) : (i.flags |= 1, Xr(n, i, v, g), i.child);
  }
  function Td(n, i, u, v, g, b) {
    if (n === null) {
      var R = u.type;
      return typeof R == "function" && !Ic(R) && R.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (i.tag = 15, i.type = R, V1(n, i, R, v, g, b)) : (n = Es(u.type, null, v, i, i.mode, b), n.ref = i.ref, n.return = i, i.child = n);
    }
    return R = n.child, !(g & b) && (g = R.memoizedProps, u = u.compare, u = u !== null ? u : Fu, u(g, v) && n.ref === i.ref) ? Hi(n, i, b) : (i.flags |= 1, n = Oo(R, v), n.ref = i.ref, n.return = i, i.child = n);
  }
  function V1(n, i, u, v, g, b) {
    if (n !== null && Fu(n.memoizedProps, v) && n.ref === i.ref)
      if (Ea = !1, (b & g) !== 0)
        n.flags & 16384 && (Ea = !0);
      else
        return i.lanes = n.lanes, Hi(n, i, b);
    return Rd(n, i, u, v, b);
  }
  function ou(n, i, u) {
    var v = i.pendingProps, g = v.children, b = n !== null ? n.memoizedState : null;
    if (v.mode === "hidden" || v.mode === "unstable-defer-without-hiding")
      if (!(i.mode & 4))
        i.memoizedState = { baseLanes: 0 }, Ac(i, u);
      else if (u & 1073741824)
        i.memoizedState = { baseLanes: 0 }, Ac(i, b !== null ? b.baseLanes : u);
      else
        return n = b !== null ? b.baseLanes | u : u, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: n }, Ac(i, n), null;
    else
      b !== null ? (v = b.baseLanes | u, i.memoizedState = null) : v = u, Ac(i, v);
    return Xr(n, i, g, u), i.child;
  }
  function F1(n, i) {
    var u = i.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (i.flags |= 128);
  }
  function Rd(n, i, u, v, g) {
    var b = Sr(u) ? po : Rn.current;
    return b = nn(i, b), rl(i, g), u = yd(n, i, u, v, b, g), n !== null && !Ea ? (i.updateQueue = n.updateQueue, i.flags &= -517, n.lanes &= ~g, Hi(n, i, g)) : (i.flags |= 1, Xr(n, i, u, g), i.child);
  }
  function B1(n, i, u, v, g) {
    if (Sr(u)) {
      var b = !0;
      ba(i);
    } else
      b = !1;
    if (rl(i, g), i.stateNode === null)
      n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2), al(i, u, v), xc(i, u, v, g), v = !0;
    else if (n === null) {
      var R = i.stateNode, M = i.memoizedProps;
      R.props = M;
      var H = R.context, ee = u.contextType;
      typeof ee == "object" && ee !== null ? ee = sa(ee) : (ee = Sr(u) ? po : Rn.current, ee = nn(i, ee));
      var Ae = u.getDerivedStateFromProps, Et = typeof Ae == "function" || typeof R.getSnapshotBeforeUpdate == "function";
      Et || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (M !== v || H !== ee) && wc(i, R, v, ee), Sa = !1;
      var me = i.memoizedState;
      R.state = me, Li(i, v, R, g), H = i.memoizedState, M !== v || me !== H || br.current || Sa ? (typeof Ae == "function" && (Zu(i, u, Ae, v), H = i.memoizedState), (M = Sa || Xu(i, u, M, v, me, H, ee)) ? (Et || typeof R.UNSAFE_componentWillMount != "function" && typeof R.componentWillMount != "function" || (typeof R.componentWillMount == "function" && R.componentWillMount(), typeof R.UNSAFE_componentWillMount == "function" && R.UNSAFE_componentWillMount()), typeof R.componentDidMount == "function" && (i.flags |= 4)) : (typeof R.componentDidMount == "function" && (i.flags |= 4), i.memoizedProps = v, i.memoizedState = H), R.props = v, R.state = H, R.context = ee, v = M) : (typeof R.componentDidMount == "function" && (i.flags |= 4), v = !1);
    } else {
      R = i.stateNode, H1(n, i), M = i.memoizedProps, ee = i.type === i.elementType ? M : ur(i.type, M), R.props = ee, Et = i.pendingProps, me = R.context, H = u.contextType, typeof H == "object" && H !== null ? H = sa(H) : (H = Sr(u) ? po : Rn.current, H = nn(i, H));
      var Je = u.getDerivedStateFromProps;
      (Ae = typeof Je == "function" || typeof R.getSnapshotBeforeUpdate == "function") || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (M !== Et || me !== H) && wc(i, R, v, H), Sa = !1, me = i.memoizedState, R.state = me, Li(i, v, R, g);
      var Ct = i.memoizedState;
      M !== Et || me !== Ct || br.current || Sa ? (typeof Je == "function" && (Zu(i, u, Je, v), Ct = i.memoizedState), (ee = Sa || Xu(i, u, ee, v, me, Ct, H)) ? (Ae || typeof R.UNSAFE_componentWillUpdate != "function" && typeof R.componentWillUpdate != "function" || (typeof R.componentWillUpdate == "function" && R.componentWillUpdate(
        v,
        Ct,
        H
      ), typeof R.UNSAFE_componentWillUpdate == "function" && R.UNSAFE_componentWillUpdate(v, Ct, H)), typeof R.componentDidUpdate == "function" && (i.flags |= 4), typeof R.getSnapshotBeforeUpdate == "function" && (i.flags |= 256)) : (typeof R.componentDidUpdate != "function" || M === n.memoizedProps && me === n.memoizedState || (i.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && me === n.memoizedState || (i.flags |= 256), i.memoizedProps = v, i.memoizedState = Ct), R.props = v, R.state = Ct, R.context = H, v = ee) : (typeof R.componentDidUpdate != "function" || M === n.memoizedProps && me === n.memoizedState || (i.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && me === n.memoizedState || (i.flags |= 256), v = !1);
    }
    return kd(n, i, u, v, b, g);
  }
  function kd(n, i, u, v, g, b) {
    F1(n, i);
    var R = (i.flags & 64) !== 0;
    if (!v && !R)
      return g && L1(i, u, !1), Hi(n, i, b);
    v = i.stateNode, m0.current = i;
    var M = R && typeof u.getDerivedStateFromError != "function" ? null : v.render();
    return i.flags |= 1, n !== null && R ? (i.child = es(i, n.child, null, b), i.child = es(i, null, M, b)) : Xr(n, i, M, b), i.memoizedState = v.state, g && L1(i, u, !0), i.child;
  }
  function W1(n) {
    var i = n.stateNode;
    i.pendingContext ? Gl(n, i.pendingContext, i.pendingContext !== i.context) : i.context && Gl(n, i.context, !1), rs(n, i.containerInfo);
  }
  var dr = { dehydrated: null, retryLane: 0 };
  function wo(n, i, u) {
    var v = i.pendingProps, g = Hn.current, b = !1, R;
    return (R = (i.flags & 64) !== 0) || (R = n !== null && n.memoizedState === null ? !1 : (g & 2) !== 0), R ? (b = !0, i.flags &= -65) : n !== null && n.memoizedState === null || v.fallback === void 0 || v.unstable_avoidThisFallback === !0 || (g |= 1), vt(Hn, g & 1), n === null ? (v.fallback !== void 0 && Co(i), n = v.children, g = v.fallback, b ? (n = K1(i, n, g, u), i.child.memoizedState = { baseLanes: u }, i.memoizedState = dr, n) : typeof v.unstable_expectedLoadTime == "number" ? (n = K1(i, n, g, u), i.child.memoizedState = { baseLanes: u }, i.memoizedState = dr, i.lanes = 33554432, n) : (u = ml({ mode: "visible", children: n }, i.mode, u, null), u.return = i, i.child = u)) : n.memoizedState !== null ? b ? (v = xo(n, i, v.children, v.fallback, u), b = i.child, g = n.child.memoizedState, b.memoizedState = g === null ? { baseLanes: u } : { baseLanes: g.baseLanes | u }, b.childLanes = n.childLanes & ~u, i.memoizedState = dr, v) : (u = wr(n, i, v.children, u), i.memoizedState = null, u) : b ? (v = xo(n, i, v.children, v.fallback, u), b = i.child, g = n.child.memoizedState, b.memoizedState = g === null ? { baseLanes: u } : { baseLanes: g.baseLanes | u }, b.childLanes = n.childLanes & ~u, i.memoizedState = dr, v) : (u = wr(n, i, v.children, u), i.memoizedState = null, u);
  }
  function K1(n, i, u, v) {
    var g = n.mode, b = n.child;
    return i = { mode: "hidden", children: i }, !(g & 2) && b !== null ? (b.childLanes = 0, b.pendingProps = i) : b = ml(i, g, 0, null), u = ci(u, g, v, null), b.return = n, u.return = n, b.sibling = u, n.child = b, u;
  }
  function wr(n, i, u, v) {
    var g = n.child;
    return n = g.sibling, u = Oo(g, { mode: "visible", children: u }), !(i.mode & 2) && (u.lanes = v), u.return = i, u.sibling = null, n !== null && (n.nextEffect = null, n.flags = 8, i.firstEffect = i.lastEffect = n), i.child = u;
  }
  function xo(n, i, u, v, g) {
    var b = i.mode, R = n.child;
    n = R.sibling;
    var M = { mode: "hidden", children: u };
    return !(b & 2) && i.child !== R ? (u = i.child, u.childLanes = 0, u.pendingProps = M, R = u.lastEffect, R !== null ? (i.firstEffect = u.firstEffect, i.lastEffect = R, R.nextEffect = null) : i.firstEffect = i.lastEffect = null) : u = Oo(R, M), n !== null ? v = Oo(n, v) : (v = ci(v, b, g, null), v.flags |= 2), v.return = i, u.return = i, u.sibling = v, i.child = u, v;
  }
  function tn(n, i) {
    n.lanes |= i;
    var u = n.alternate;
    u !== null && (u.lanes |= i), fd(n.return, i);
  }
  function lu(n, i, u, v, g, b) {
    var R = n.memoizedState;
    R === null ? n.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: v, tail: u, tailMode: g, lastEffect: b } : (R.isBackwards = i, R.rendering = null, R.renderingStartTime = 0, R.last = v, R.tail = u, R.tailMode = g, R.lastEffect = b);
  }
  function g0(n, i, u) {
    var v = i.pendingProps, g = v.revealOrder, b = v.tail;
    if (Xr(n, i, v.children, u), v = Hn.current, v & 2)
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
          u = g, u === null ? (g = i.child, i.child = null) : (g = u.sibling, u.sibling = null), lu(i, !1, g, u, b, i.lastEffect);
          break;
        case "backwards":
          for (u = null, g = i.child, i.child = null; g !== null; ) {
            if (n = g.alternate, n !== null && as(n) === null) {
              i.child = g;
              break;
            }
            n = g.sibling, g.sibling = u, u = g, g = n;
          }
          lu(i, !0, u, null, b, i.lastEffect);
          break;
        case "together":
          lu(i, !1, null, null, void 0, i.lastEffect);
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
  var _c, uu, G1, _d;
  _c = function(n, i) {
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
  }, uu = function() {
  }, G1 = function(n, i, u, v) {
    var g = n.memoizedProps;
    if (g !== v) {
      n = i.stateNode, ll(ri.current);
      var b = null;
      switch (u) {
        case "input":
          g = $t(n, g), v = $t(n, v), b = [];
          break;
        case "option":
          g = Qt(n, g), v = Qt(n, v), b = [];
          break;
        case "select":
          g = o({}, g, { value: void 0 }), v = o({}, v, { value: void 0 }), b = [];
          break;
        case "textarea":
          g = Gt(n, g), v = Gt(n, v), b = [];
          break;
        default:
          typeof g.onClick != "function" && typeof v.onClick == "function" && (n.onclick = vc);
      }
      Ft(u, v);
      var R;
      u = null;
      for (ee in g)
        if (!v.hasOwnProperty(ee) && g.hasOwnProperty(ee) && g[ee] != null)
          if (ee === "style") {
            var M = g[ee];
            for (R in M)
              M.hasOwnProperty(R) && (u || (u = {}), u[R] = "");
          } else
            ee !== "dangerouslySetInnerHTML" && ee !== "children" && ee !== "suppressContentEditableWarning" && ee !== "suppressHydrationWarning" && ee !== "autoFocus" && (m.hasOwnProperty(ee) ? b || (b = []) : (b = b || []).push(ee, null));
      for (ee in v) {
        var H = v[ee];
        if (M = g != null ? g[ee] : void 0, v.hasOwnProperty(ee) && H !== M && (H != null || M != null))
          if (ee === "style")
            if (M) {
              for (R in M)
                !M.hasOwnProperty(R) || H && H.hasOwnProperty(R) || (u || (u = {}), u[R] = "");
              for (R in H)
                H.hasOwnProperty(R) && M[R] !== H[R] && (u || (u = {}), u[R] = H[R]);
            } else
              u || (b || (b = []), b.push(ee, u)), u = H;
          else
            ee === "dangerouslySetInnerHTML" ? (H = H ? H.__html : void 0, M = M ? M.__html : void 0, H != null && M !== H && (b = b || []).push(ee, H)) : ee === "children" ? typeof H != "string" && typeof H != "number" || (b = b || []).push(ee, "" + H) : ee !== "suppressContentEditableWarning" && ee !== "suppressHydrationWarning" && (m.hasOwnProperty(ee) ? (H != null && ee === "onScroll" && yn("scroll", n), b || M === H || (b = [])) : typeof H == "object" && H !== null && H.$$typeof === Le ? H.toString() : (b = b || []).push(ee, H));
      }
      u && (b = b || []).push(
        "style",
        u
      );
      var ee = b;
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
  function y0(n, i, u) {
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
        return Sr(i.type) && ei(), null;
      case 3:
        return Xl(), Tt(br), Tt(Rn), bo(), v = i.stateNode, v.pendingContext && (v.context = v.pendingContext, v.pendingContext = null), (n === null || n.child === null) && (os(i) ? i.flags |= 4 : v.hydrate || (i.flags |= 256)), uu(i), null;
      case 5:
        md(i);
        var g = ll(ns.current);
        if (u = i.type, n !== null && i.stateNode != null)
          G1(n, i, u, v, g), n.ref !== i.ref && (i.flags |= 128);
        else {
          if (!v) {
            if (i.stateNode === null)
              throw Error(c(166));
            return null;
          }
          if (n = ll(ri.current), os(i)) {
            v = i.stateNode, u = i.type;
            var b = i.memoizedProps;
            switch (v[Ja] = i, v[mc] = b, u) {
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
                for (n = 0; n < Fl.length; n++)
                  yn(Fl[n], v);
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
                Xe(v, b), yn("invalid", v);
                break;
              case "select":
                v._wrapperState = { wasMultiple: !!b.multiple }, yn("invalid", v);
                break;
              case "textarea":
                Wn(v, b), yn("invalid", v);
            }
            Ft(u, b), n = null;
            for (var R in b)
              b.hasOwnProperty(R) && (g = b[R], R === "children" ? typeof g == "string" ? v.textContent !== g && (n = ["children", g]) : typeof g == "number" && v.textContent !== "" + g && (n = ["children", "" + g]) : m.hasOwnProperty(R) && g != null && R === "onScroll" && yn("scroll", v));
            switch (u) {
              case "input":
                mt(v), Xt(v, b, !0);
                break;
              case "textarea":
                mt(v), en(v);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof b.onClick == "function" && (v.onclick = vc);
            }
            v = n, i.updateQueue = v, v !== null && (i.flags |= 4);
          } else {
            switch (R = g.nodeType === 9 ? g : g.ownerDocument, n === ye.html && (n = Ne(u)), n === ye.html ? u === "script" ? (n = R.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof v.is == "string" ? n = R.createElement(u, { is: v.is }) : (n = R.createElement(u), u === "select" && (R = n, v.multiple ? R.multiple = !0 : v.size && (R.size = v.size))) : n = R.createElementNS(n, u), n[Ja] = i, n[mc] = v, _c(n, i, !1, !1), i.stateNode = n, R = dn(u, v), u) {
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
                for (g = 0; g < Fl.length; g++)
                  yn(Fl[g], n);
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
                Xe(n, v), g = $t(n, v), yn("invalid", n);
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
            Ft(u, g);
            var M = g;
            for (b in M)
              if (M.hasOwnProperty(b)) {
                var H = M[b];
                b === "style" ? Ut(n, H) : b === "dangerouslySetInnerHTML" ? (H = H ? H.__html : void 0, H != null && Mt(n, H)) : b === "children" ? typeof H == "string" ? (u !== "textarea" || H !== "") && rt(n, H) : typeof H == "number" && rt(n, "" + H) : b !== "suppressContentEditableWarning" && b !== "suppressHydrationWarning" && b !== "autoFocus" && (m.hasOwnProperty(b) ? H != null && b === "onScroll" && yn("scroll", n) : H != null && I(n, b, H, R));
              }
            switch (u) {
              case "input":
                mt(n), Xt(n, v, !1);
                break;
              case "textarea":
                mt(n), en(n);
                break;
              case "option":
                v.value != null && n.setAttribute("value", "" + et(v.value));
                break;
              case "select":
                n.multiple = !!v.multiple, b = v.value, b != null ? ut(n, !!v.multiple, b, !1) : v.defaultValue != null && ut(n, !!v.multiple, v.defaultValue, !0);
                break;
              default:
                typeof g.onClick == "function" && (n.onclick = vc);
            }
            Wl(u, v) && (i.flags |= 4);
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
        return Tt(Hn), v = i.memoizedState, i.flags & 64 ? (i.lanes = u, i) : (v = v !== null, u = !1, n === null ? i.memoizedProps.fallback !== void 0 && os(i) : u = n.memoizedState !== null, v && !u && i.mode & 2 && (n === null && i.memoizedProps.unstable_avoidThisFallback !== !0 || Hn.current & 1 ? vr === 0 && (vr = 3) : ((vr === 0 || vr === 3) && (vr = 4), Wr === null || !(fl & 134217727) && !(li & 134217727) || du(Wr, xr))), (v || u) && (i.flags |= 4), null);
      case 4:
        return Xl(), uu(i), n === null && ed(i.stateNode.containerInfo), null;
      case 10:
        return Sc(i), null;
      case 17:
        return Sr(i.type) && ei(), null;
      case 19:
        if (Tt(Hn), v = i.memoizedState, v === null)
          return null;
        if (b = (i.flags & 64) !== 0, R = v.rendering, R === null)
          if (b)
            fs(v, !1);
          else {
            if (vr !== 0 || n !== null && n.flags & 64)
              for (n = i.child; n !== null; ) {
                if (R = as(n), R !== null) {
                  for (i.flags |= 64, fs(v, !1), b = R.updateQueue, b !== null && (i.updateQueue = b, i.flags |= 4), v.lastEffect === null && (i.firstEffect = null), i.lastEffect = v.lastEffect, v = u, u = i.child; u !== null; )
                    b = u, n = v, b.flags &= 2, b.nextEffect = null, b.firstEffect = null, b.lastEffect = null, R = b.alternate, R === null ? (b.childLanes = 0, b.lanes = n, b.child = null, b.memoizedProps = null, b.memoizedState = null, b.updateQueue = null, b.dependencies = null, b.stateNode = null) : (b.childLanes = R.childLanes, b.lanes = R.lanes, b.child = R.child, b.memoizedProps = R.memoizedProps, b.memoizedState = R.memoizedState, b.updateQueue = R.updateQueue, b.type = R.type, n = R.dependencies, b.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), u = u.sibling;
                  return vt(Hn, Hn.current & 1 | 2), i.child;
                }
                n = n.sibling;
              }
            v.tail !== null && Er() > dl && (i.flags |= 64, b = !0, fs(v, !1), i.lanes = 33554432);
          }
        else {
          if (!b)
            if (n = as(R), n !== null) {
              if (i.flags |= 64, b = !0, u = n.updateQueue, u !== null && (i.updateQueue = u, i.flags |= 4), fs(v, !0), v.tail === null && v.tailMode === "hidden" && !R.alternate && !ii)
                return i = i.lastEffect = v.lastEffect, i !== null && (i.nextEffect = null), null;
            } else
              2 * Er() - v.renderingStartTime > dl && u !== 1073741824 && (i.flags |= 64, b = !0, fs(v, !1), i.lanes = 33554432);
          v.isBackwards ? (R.sibling = i.child, i.child = R) : (u = v.last, u !== null ? u.sibling = R : i.child = R, v.last = R);
        }
        return v.tail !== null ? (u = v.tail, v.rendering = u, v.tail = u.sibling, v.lastEffect = i.lastEffect, v.renderingStartTime = Er(), u.sibling = null, i = Hn.current, vt(Hn, b ? i & 1 | 2 : i & 1), u) : null;
      case 23:
      case 24:
        return Ud(), n !== null && n.memoizedState !== null != (i.memoizedState !== null) && v.mode !== "unstable-defer-without-hiding" && (i.flags |= 4), null;
    }
    throw Error(c(156, i.tag));
  }
  function q1(n) {
    switch (n.tag) {
      case 1:
        Sr(n.type) && ei();
        var i = n.flags;
        return i & 4096 ? (n.flags = i & -4097 | 64, n) : null;
      case 3:
        if (Xl(), Tt(br), Tt(Rn), bo(), i = n.flags, i & 64)
          throw Error(c(285));
        return n.flags = i & -4097 | 64, n;
      case 5:
        return md(n), null;
      case 13:
        return Tt(Hn), i = n.flags, i & 4096 ? (n.flags = i & -4097 | 64, n) : null;
      case 19:
        return Tt(Hn), null;
      case 4:
        return Xl(), null;
      case 10:
        return Sc(n), null;
      case 23:
      case 24:
        return Ud(), null;
      default:
        return null;
    }
  }
  function Md(n, i) {
    try {
      var u = "", v = i;
      do
        u += Nt(v), v = v.return;
      while (v);
      var g = u;
    } catch (b) {
      g = `
Error generating stack: ` + b.message + `
` + b.stack;
    }
    return { value: n, source: i, stack: g };
  }
  function Od(n, i) {
    try {
      console.error(i.value);
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  var Y1 = typeof WeakMap == "function" ? WeakMap : Map;
  function Q1(n, i, u) {
    u = Pa(-1, u), u.tag = 3, u.payload = { element: null };
    var v = i.value;
    return u.callback = function() {
      gs || (gs = !0, Pd = v), Od(n, i);
    }, u;
  }
  function Z1(n, i, u) {
    u = Pa(-1, u), u.tag = 3;
    var v = n.type.getDerivedStateFromError;
    if (typeof v == "function") {
      var g = i.value;
      u.payload = function() {
        return Od(n, i), v(g);
      };
    }
    var b = n.stateNode;
    return b !== null && typeof b.componentDidCatch == "function" && (u.callback = function() {
      typeof v != "function" && (ui === null ? ui = /* @__PURE__ */ new Set([this]) : ui.add(this), Od(n, i));
      var R = i.stack;
      this.componentDidCatch(i.value, { componentStack: R !== null ? R : "" });
    }), u;
  }
  var C0 = typeof WeakSet == "function" ? WeakSet : Set;
  function X1(n) {
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
  function b0(n, i) {
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
  function Nd(n, i, u) {
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
            v = g.next, g = g.tag, g & 4 && g & 1 && (Vd(u, n), cp(u, n)), n = v;
          } while (n !== i);
        }
        return;
      case 1:
        n = u.stateNode, u.flags & 4 && (i === null ? n.componentDidMount() : (v = u.elementType === u.type ? i.memoizedProps : ur(u.type, i.memoizedProps), n.componentDidUpdate(
          v,
          i.memoizedState,
          n.__reactInternalSnapshotBeforeUpdate
        ))), i = u.updateQueue, i !== null && vd(u, i, n);
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
          vd(u, i, n);
        }
        return;
      case 5:
        n = u.stateNode, i === null && u.flags & 4 && Wl(u.type, u.memoizedProps) && n.focus();
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
  function Dd(n, i) {
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
  function J1(n, i) {
    if (el && typeof el.onCommitFiberUnmount == "function")
      try {
        el.onCommitFiberUnmount(ad, i);
      } catch (b) {
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
                Vd(i, u);
              else {
                v = i;
                try {
                  g();
                } catch (b) {
                  Mo(v, b);
                }
              }
            u = u.next;
          } while (u !== n);
        }
        break;
      case 1:
        if (X1(i), n = i.stateNode, typeof n.componentWillUnmount == "function")
          try {
            n.props = i.memoizedProps, n.state = i.memoizedState, n.componentWillUnmount();
          } catch (b) {
            Mo(
              i,
              b
            );
          }
        break;
      case 5:
        X1(i);
        break;
      case 4:
        rp(n, i);
    }
  }
  function ep(n) {
    n.alternate = null, n.child = null, n.dependencies = null, n.firstEffect = null, n.lastEffect = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.return = null, n.updateQueue = null;
  }
  function tp(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function np(n) {
    e: {
      for (var i = n.return; i !== null; ) {
        if (tp(i))
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
            if (u.return === null || tp(u.return)) {
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
  function rp(n, i) {
    for (var u = i, v = !1, g, b; ; ) {
      if (!v) {
        v = u.return;
        e:
          for (; ; ) {
            if (v === null)
              throw Error(c(160));
            switch (g = v.stateNode, v.tag) {
              case 5:
                b = !1;
                break e;
              case 3:
                g = g.containerInfo, b = !0;
                break e;
              case 4:
                g = g.containerInfo, b = !0;
                break e;
            }
            v = v.return;
          }
        v = !0;
      }
      if (u.tag === 5 || u.tag === 6) {
        e:
          for (var R = n, M = u, H = M; ; )
            if (J1(R, H), H.child !== null && H.tag !== 4)
              H.child.return = H, H = H.child;
            else {
              if (H === M)
                break e;
              for (; H.sibling === null; ) {
                if (H.return === null || H.return === M)
                  break e;
                H = H.return;
              }
              H.sibling.return = H.return, H = H.sibling;
            }
        b ? (R = g, M = u.stateNode, R.nodeType === 8 ? R.parentNode.removeChild(M) : R.removeChild(M)) : g.removeChild(u.stateNode);
      } else if (u.tag === 4) {
        if (u.child !== null) {
          g = u.stateNode.containerInfo, b = !0, u.child.return = u, u = u.child;
          continue;
        }
      } else if (J1(n, u), u.child !== null) {
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
  function Ld(n, i) {
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
          var b = i.updateQueue;
          if (i.updateQueue = null, b !== null) {
            for (u[mc] = v, n === "input" && v.type === "radio" && v.name != null && _t(u, v), dn(n, g), i = dn(n, v), g = 0; g < b.length; g += 2) {
              var R = b[g], M = b[g + 1];
              R === "style" ? Ut(u, M) : R === "dangerouslySetInnerHTML" ? Mt(u, M) : R === "children" ? rt(u, M) : I(u, R, M, i);
            }
            switch (n) {
              case "input":
                gt(u, v);
                break;
              case "textarea":
                qt(u, v);
                break;
              case "select":
                n = u._wrapperState.wasMultiple, u._wrapperState.wasMultiple = !!v.multiple, b = v.value, b != null ? ut(u, !!v.multiple, b, !1) : n !== !!v.multiple && (v.defaultValue != null ? ut(u, !!v.multiple, v.defaultValue, !0) : ut(u, !!v.multiple, v.multiple ? [] : "", !1));
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
        i.memoizedState !== null && (ms = Er(), Dd(i.child, !0)), ap(i);
        return;
      case 19:
        ap(i);
        return;
      case 17:
        return;
      case 23:
      case 24:
        Dd(i, i.memoizedState !== null);
        return;
    }
    throw Error(c(163));
  }
  function ap(n) {
    var i = n.updateQueue;
    if (i !== null) {
      n.updateQueue = null;
      var u = n.stateNode;
      u === null && (u = n.stateNode = new C0()), i.forEach(function(v) {
        var g = R0.bind(null, n, v);
        u.has(v) || (u.add(v), v.then(g, g));
      });
    }
  }
  function S0(n, i) {
    return n !== null && (n = n.memoizedState, n === null || n.dehydrated !== null) ? (i = i.memoizedState, i !== null && i.dehydrated === null) : !1;
  }
  var ps = Math.ceil, su = U.ReactCurrentDispatcher, cl = U.ReactCurrentOwner, St = 0, Wr = null, Yn = null, xr = 0, oi = 0, cu = Fr(0), vr = 0, Nr = null, za = 0, fl = 0, li = 0, Ad = 0, hs = null, ms = 0, dl = 1 / 0;
  function fu() {
    dl = Er() + 500;
  }
  var Ue = null, gs = !1, Pd = null, ui = null, To = !1, vl = null, ys = 90, Id = [], zd = [], $i = null, Cs = 0, Mc = null, Oc = -1, Ui = 0, Nc = 0, bs = null, Dc = !1;
  function ca() {
    return St & 48 ? Er() : Oc !== -1 ? Oc : Oc = Er();
  }
  function si(n) {
    if (n = n.mode, !(n & 2))
      return 1;
    if (!(n & 4))
      return Yl() === 99 ? 1 : 2;
    if (Ui === 0 && (Ui = za), mo.transition !== 0) {
      Nc !== 0 && (Nc = hs !== null ? hs.pendingLanes : 0), n = Ui;
      var i = 4186112 & ~Nc;
      return i &= -i, i === 0 && (n = 4186112 & ~n, i = n & -n, i === 0 && (i = 8192)), i;
    }
    return n = Yl(), St & 4 && n === 98 ? n = Ri(12, Ui) : (n = Sn(n), n = Ri(n, Ui)), n;
  }
  function Ro(n, i, u) {
    if (50 < Cs)
      throw Cs = 0, Mc = null, Error(c(185));
    if (n = Lc(n, i), n === null)
      return null;
    Pu(n, i, u), n === Wr && (li |= i, vr === 4 && du(n, xr));
    var v = Yl();
    i === 1 ? St & 8 && !(St & 48) ? $d(n) : (wa(n, u), St === 0 && (fu(), lr())) : (!(St & 4) || v !== 98 && v !== 99 || ($i === null ? $i = /* @__PURE__ */ new Set([n]) : $i.add(n)), wa(n, u)), hs = n;
  }
  function Lc(n, i) {
    n.lanes |= i;
    var u = n.alternate;
    for (u !== null && (u.lanes |= i), u = n, n = n.return; n !== null; )
      n.childLanes |= i, u = n.alternate, u !== null && (u.childLanes |= i), u = n, n = n.return;
    return u.tag === 3 ? u.stateNode : null;
  }
  function wa(n, i) {
    for (var u = n.callbackNode, v = n.suspendedLanes, g = n.pingedLanes, b = n.expirationTimes, R = n.pendingLanes; 0 < R; ) {
      var M = 31 - io(R), H = 1 << M, ee = b[M];
      if (ee === -1) {
        if (!(H & v) || H & g) {
          ee = i, pn(H);
          var Ae = ct;
          b[M] = 10 <= Ae ? ee + 250 : 6 <= Ae ? ee + 5e3 : -1;
        }
      } else
        ee <= i && (n.expiredLanes |= H);
      R &= ~H;
    }
    if (v = Xa(n, n === Wr ? xr : 0), i = ct, v === 0)
      u !== null && (u !== ud && Yu(u), n.callbackNode = null, n.callbackPriority = 0);
    else {
      if (u !== null) {
        if (n.callbackPriority === i)
          return;
        u !== ud && Yu(u);
      }
      i === 15 ? (u = $d.bind(null, n), ti === null ? (ti = [u], Cc = Aa(yc, Ni)) : ti.push(u), u = ud) : i === 14 ? u = nl(99, $d.bind(null, n)) : (u = ro(i), u = nl(u, Hd.bind(null, n))), n.callbackPriority = i, n.callbackNode = u;
    }
  }
  function Hd(n) {
    if (Oc = -1, Nc = Ui = 0, St & 48)
      throw Error(c(327));
    var i = n.callbackNode;
    if (_o() && n.callbackNode !== i)
      return null;
    var u = Xa(n, n === Wr ? xr : 0);
    if (u === 0)
      return null;
    var v = u, g = St;
    St |= 16;
    var b = vu();
    (Wr !== n || xr !== v) && (fu(), pl(n, v));
    do
      try {
        up();
        break;
      } catch (M) {
        Pc(n, M);
      }
    while (!0);
    if (cd(), su.current = b, St = g, Yn !== null ? v = 0 : (Wr = null, xr = 0, v = vr), za & li)
      pl(n, 0);
    else if (v !== 0) {
      if (v === 2 && (St |= 64, n.hydrate && (n.hydrate = !1, pc(n.containerInfo)), u = Au(n), u !== 0 && (v = Ss(n, u))), v === 1)
        throw i = Nr, pl(n, 0), du(n, u), wa(n, Er()), i;
      switch (n.finishedWork = n.current.alternate, n.finishedLanes = u, v) {
        case 0:
        case 1:
          throw Error(c(345));
        case 2:
          ko(n);
          break;
        case 3:
          if (du(n, u), (u & 62914560) === u && (v = ms + 500 - Er(), 10 < v)) {
            if (Xa(n, 0) !== 0)
              break;
            if (g = n.suspendedLanes, (g & u) !== u) {
              ca(), n.pingedLanes |= n.suspendedLanes & g;
              break;
            }
            n.timeoutHandle = Kl(ko.bind(null, n), v);
            break;
          }
          ko(n);
          break;
        case 4:
          if (du(n, u), (u & 4186112) === u)
            break;
          for (v = n.eventTimes, g = -1; 0 < u; ) {
            var R = 31 - io(u);
            b = 1 << R, R = v[R], R > g && (g = R), u &= ~b;
          }
          if (u = g, u = Er() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * ps(u / 1960)) - u, 10 < u) {
            n.timeoutHandle = Kl(ko.bind(null, n), u);
            break;
          }
          ko(n);
          break;
        case 5:
          ko(n);
          break;
        default:
          throw Error(c(329));
      }
    }
    return wa(n, Er()), n.callbackNode === i ? Hd.bind(null, n) : null;
  }
  function du(n, i) {
    for (i &= ~Ad, i &= ~li, n.suspendedLanes |= i, n.pingedLanes &= ~i, n = n.expirationTimes; 0 < i; ) {
      var u = 31 - io(i), v = 1 << u;
      n[u] = -1, i &= ~v;
    }
  }
  function $d(n) {
    if (St & 48)
      throw Error(c(327));
    if (_o(), n === Wr && n.expiredLanes & xr) {
      var i = xr, u = Ss(n, i);
      za & li && (i = Xa(n, i), u = Ss(n, i));
    } else
      i = Xa(n, 0), u = Ss(n, i);
    if (n.tag !== 0 && u === 2 && (St |= 64, n.hydrate && (n.hydrate = !1, pc(n.containerInfo)), i = Au(n), i !== 0 && (u = Ss(n, i))), u === 1)
      throw u = Nr, pl(n, 0), du(n, i), wa(n, Er()), u;
    return n.finishedWork = n.current.alternate, n.finishedLanes = i, ko(n), wa(n, Er()), null;
  }
  function E0() {
    if ($i !== null) {
      var n = $i;
      $i = null, n.forEach(function(i) {
        i.expiredLanes |= 24 & i.pendingLanes, wa(i, Er());
      });
    }
    lr();
  }
  function ip(n, i) {
    var u = St;
    St |= 1;
    try {
      return n(i);
    } finally {
      St = u, St === 0 && (fu(), lr());
    }
  }
  function op(n, i) {
    var u = St;
    St &= -2, St |= 8;
    try {
      return n(i);
    } finally {
      St = u, St === 0 && (fu(), lr());
    }
  }
  function Ac(n, i) {
    vt(cu, oi), oi |= i, za |= i;
  }
  function Ud() {
    oi = cu.current, Tt(cu);
  }
  function pl(n, i) {
    n.finishedWork = null, n.finishedLanes = 0;
    var u = n.timeoutHandle;
    if (u !== -1 && (n.timeoutHandle = -1, M1(u)), Yn !== null)
      for (u = Yn.return; u !== null; ) {
        var v = u;
        switch (v.tag) {
          case 1:
            v = v.type.childContextTypes, v != null && ei();
            break;
          case 3:
            Xl(), Tt(br), Tt(Rn), bo();
            break;
          case 5:
            md(v);
            break;
          case 4:
            Xl();
            break;
          case 13:
            Tt(Hn);
            break;
          case 19:
            Tt(Hn);
            break;
          case 10:
            Sc(v);
            break;
          case 23:
          case 24:
            Ud();
        }
        u = u.return;
      }
    Wr = n, Yn = Oo(n.current, null), xr = oi = za = i, vr = 0, Nr = null, Ad = li = fl = 0;
  }
  function Pc(n, i) {
    do {
      var u = Yn;
      try {
        if (cd(), eu.current = kc, ls) {
          for (var v = kn.memoizedState; v !== null; ) {
            var g = v.queue;
            g !== null && (g.pending = null), v = v.next;
          }
          ls = !1;
        }
        if (tu = 0, fr = cr = kn = null, So = !1, cl.current = null, u === null || u.return === null) {
          vr = 1, Nr = i, Yn = null;
          break;
        }
        e: {
          var b = n, R = u.return, M = u, H = i;
          if (i = xr, M.flags |= 2048, M.firstEffect = M.lastEffect = null, H !== null && typeof H == "object" && typeof H.then == "function") {
            var ee = H;
            if (!(M.mode & 2)) {
              var Ae = M.alternate;
              Ae ? (M.updateQueue = Ae.updateQueue, M.memoizedState = Ae.memoizedState, M.lanes = Ae.lanes) : (M.updateQueue = null, M.memoizedState = null);
            }
            var Et = (Hn.current & 1) !== 0, me = R;
            do {
              var Je;
              if (Je = me.tag === 13) {
                var Ct = me.memoizedState;
                if (Ct !== null)
                  Je = Ct.dehydrated !== null;
                else {
                  var ft = me.memoizedProps;
                  Je = ft.fallback === void 0 ? !1 : ft.unstable_avoidThisFallback !== !0 ? !0 : !Et;
                }
              }
              if (Je) {
                var q = me.updateQueue;
                if (q === null) {
                  var F = /* @__PURE__ */ new Set();
                  F.add(ee), me.updateQueue = F;
                } else
                  q.add(ee);
                if (!(me.mode & 2)) {
                  if (me.flags |= 64, M.flags |= 16384, M.flags &= -2981, M.tag === 1)
                    if (M.alternate === null)
                      M.tag = 17;
                    else {
                      var K = Pa(-1, 1);
                      K.tag = 2, Di(M, K);
                    }
                  M.lanes |= 1;
                  break e;
                }
                H = void 0, M = i;
                var oe = b.pingCache;
                if (oe === null ? (oe = b.pingCache = new Y1(), H = /* @__PURE__ */ new Set(), oe.set(ee, H)) : (H = oe.get(ee), H === void 0 && (H = /* @__PURE__ */ new Set(), oe.set(ee, H))), !H.has(M)) {
                  H.add(M);
                  var ce = T0.bind(null, b, ee, M);
                  ee.then(ce, ce);
                }
                me.flags |= 4096, me.lanes = i;
                break e;
              }
              me = me.return;
            } while (me !== null);
            H = Error((He(M.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
          }
          vr !== 5 && (vr = 2), H = Md(H, M), me = R;
          do {
            switch (me.tag) {
              case 3:
                b = H, me.flags |= 4096, i &= -i, me.lanes |= i;
                var Rt = Q1(me, b, i);
                $1(me, Rt);
                break e;
              case 1:
                b = H;
                var je = me.type, wt = me.stateNode;
                if (!(me.flags & 64) && (typeof je.getDerivedStateFromError == "function" || wt !== null && typeof wt.componentDidCatch == "function" && (ui === null || !ui.has(wt)))) {
                  me.flags |= 4096, i &= -i, me.lanes |= i;
                  var At = Z1(me, b, i);
                  $1(me, At);
                  break e;
                }
            }
            me = me.return;
          } while (me !== null);
        }
        sp(u);
      } catch (kt) {
        i = kt, Yn === u && u !== null && (Yn = u = u.return);
        continue;
      }
      break;
    } while (!0);
  }
  function vu() {
    var n = su.current;
    return su.current = kc, n === null ? kc : n;
  }
  function Ss(n, i) {
    var u = St;
    St |= 16;
    var v = vu();
    Wr === n && xr === i || pl(n, i);
    do
      try {
        lp();
        break;
      } catch (g) {
        Pc(n, g);
      }
    while (!0);
    if (cd(), St = u, su.current = v, Yn !== null)
      throw Error(c(261));
    return Wr = null, xr = 0, vr;
  }
  function lp() {
    for (; Yn !== null; )
      jd(Yn);
  }
  function up() {
    for (; Yn !== null && !d0(); )
      jd(Yn);
  }
  function jd(n) {
    var i = dp(n.alternate, n, oi);
    n.memoizedProps = n.pendingProps, i === null ? sp(n) : Yn = i, cl.current = null;
  }
  function sp(n) {
    var i = n;
    do {
      var u = i.alternate;
      if (n = i.return, i.flags & 2048) {
        if (u = q1(i), u !== null) {
          u.flags &= 2047, Yn = u;
          return;
        }
        n !== null && (n.firstEffect = n.lastEffect = null, n.flags |= 2048);
      } else {
        if (u = y0(u, i, oi), u !== null) {
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
  function ko(n) {
    var i = Yl();
    return tl(99, w0.bind(null, n, i)), null;
  }
  function w0(n, i) {
    do
      _o();
    while (vl !== null);
    if (St & 48)
      throw Error(c(327));
    var u = n.finishedWork;
    if (u === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, u === n.current)
      throw Error(c(177));
    n.callbackNode = null;
    var v = u.lanes | u.childLanes, g = v, b = n.pendingLanes & ~g;
    n.pendingLanes = g, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= g, n.mutableReadLanes &= g, n.entangledLanes &= g, g = n.entanglements;
    for (var R = n.eventTimes, M = n.expirationTimes; 0 < b; ) {
      var H = 31 - io(b), ee = 1 << H;
      g[H] = 0, R[H] = -1, M[H] = -1, b &= ~ee;
    }
    if ($i !== null && !(v & 24) && $i.has(n) && $i.delete(n), n === Wr && (Yn = Wr = null, xr = 0), 1 < u.flags ? u.lastEffect !== null ? (u.lastEffect.nextEffect = u, v = u.firstEffect) : v = u : v = u.firstEffect, v !== null) {
      if (g = St, St |= 32, cl.current = null, td = Iu, R = Bu(), Yo(R)) {
        if ("selectionStart" in R)
          M = { start: R.selectionStart, end: R.selectionEnd };
        else
          e:
            if (M = (M = R.ownerDocument) && M.defaultView || window, (ee = M.getSelection && M.getSelection()) && ee.rangeCount !== 0) {
              M = ee.anchorNode, b = ee.anchorOffset, H = ee.focusNode, ee = ee.focusOffset;
              try {
                M.nodeType, H.nodeType;
              } catch (kt) {
                M = null;
                break e;
              }
              var Ae = 0, Et = -1, me = -1, Je = 0, Ct = 0, ft = R, q = null;
              t:
                for (; ; ) {
                  for (var F; ft !== M || b !== 0 && ft.nodeType !== 3 || (Et = Ae + b), ft !== H || ee !== 0 && ft.nodeType !== 3 || (me = Ae + ee), ft.nodeType === 3 && (Ae += ft.nodeValue.length), (F = ft.firstChild) !== null; )
                    q = ft, ft = F;
                  for (; ; ) {
                    if (ft === R)
                      break t;
                    if (q === M && ++Je === b && (Et = Ae), q === H && ++Ct === ee && (me = Ae), (F = ft.nextSibling) !== null)
                      break;
                    ft = q, q = ft.parentNode;
                  }
                  ft = F;
                }
              M = Et === -1 || me === -1 ? null : { start: Et, end: me };
            } else
              M = null;
        M = M || { start: 0, end: 0 };
      } else
        M = null;
      nd = { focusedElem: R, selectionRange: M }, Iu = !1, bs = null, Dc = !1, Ue = v;
      do
        try {
          x0();
        } catch (kt) {
          if (Ue === null)
            throw Error(c(330));
          Mo(Ue, kt), Ue = Ue.nextEffect;
        }
      while (Ue !== null);
      bs = null, Ue = v;
      do
        try {
          for (R = n; Ue !== null; ) {
            var K = Ue.flags;
            if (K & 16 && rt(Ue.stateNode, ""), K & 128) {
              var oe = Ue.alternate;
              if (oe !== null) {
                var ce = oe.ref;
                ce !== null && (typeof ce == "function" ? ce(null) : ce.current = null);
              }
            }
            switch (K & 1038) {
              case 2:
                np(Ue), Ue.flags &= -3;
                break;
              case 6:
                np(Ue), Ue.flags &= -3, Ld(Ue.alternate, Ue);
                break;
              case 1024:
                Ue.flags &= -1025;
                break;
              case 1028:
                Ue.flags &= -1025, Ld(Ue.alternate, Ue);
                break;
              case 4:
                Ld(Ue.alternate, Ue);
                break;
              case 8:
                M = Ue, rp(R, M);
                var Rt = M.alternate;
                ep(M), Rt !== null && ep(Rt);
            }
            Ue = Ue.nextEffect;
          }
        } catch (kt) {
          if (Ue === null)
            throw Error(c(330));
          Mo(Ue, kt), Ue = Ue.nextEffect;
        }
      while (Ue !== null);
      if (ce = nd, oe = Bu(), K = ce.focusedElem, R = ce.selectionRange, oe !== K && K && K.ownerDocument && Qf(K.ownerDocument.documentElement, K)) {
        for (R !== null && Yo(K) && (oe = R.start, ce = R.end, ce === void 0 && (ce = oe), "selectionStart" in K ? (K.selectionStart = oe, K.selectionEnd = Math.min(ce, K.value.length)) : (ce = (oe = K.ownerDocument || document) && oe.defaultView || window, ce.getSelection && (ce = ce.getSelection(), M = K.textContent.length, Rt = Math.min(R.start, M), R = R.end === void 0 ? Rt : Math.min(R.end, M), !ce.extend && Rt > R && (M = R, R = Rt, Rt = M), M = T1(K, Rt), b = T1(K, R), M && b && (ce.rangeCount !== 1 || ce.anchorNode !== M.node || ce.anchorOffset !== M.offset || ce.focusNode !== b.node || ce.focusOffset !== b.offset) && (oe = oe.createRange(), oe.setStart(M.node, M.offset), ce.removeAllRanges(), Rt > R ? (ce.addRange(oe), ce.extend(b.node, b.offset)) : (oe.setEnd(b.node, b.offset), ce.addRange(oe)))))), oe = [], ce = K; ce = ce.parentNode; )
          ce.nodeType === 1 && oe.push({ element: ce, left: ce.scrollLeft, top: ce.scrollTop });
        for (typeof K.focus == "function" && K.focus(), K = 0; K < oe.length; K++)
          ce = oe[K], ce.element.scrollLeft = ce.left, ce.element.scrollTop = ce.top;
      }
      Iu = !!td, nd = td = null, n.current = u, Ue = v;
      do
        try {
          for (K = n; Ue !== null; ) {
            var je = Ue.flags;
            if (je & 36 && Nd(K, Ue.alternate, Ue), je & 128) {
              oe = void 0;
              var wt = Ue.ref;
              if (wt !== null) {
                var At = Ue.stateNode;
                switch (Ue.tag) {
                  case 5:
                    oe = At;
                    break;
                  default:
                    oe = At;
                }
                typeof wt == "function" ? wt(oe) : wt.current = oe;
              }
            }
            Ue = Ue.nextEffect;
          }
        } catch (kt) {
          if (Ue === null)
            throw Error(c(330));
          Mo(Ue, kt), Ue = Ue.nextEffect;
        }
      while (Ue !== null);
      Ue = null, I1(), St = g;
    } else
      n.current = u;
    if (To)
      To = !1, vl = n, ys = i;
    else
      for (Ue = v; Ue !== null; )
        i = Ue.nextEffect, Ue.nextEffect = null, Ue.flags & 8 && (je = Ue, je.sibling = null, je.stateNode = null), Ue = i;
    if (v = n.pendingLanes, v === 0 && (ui = null), v === 1 ? n === Mc ? Cs++ : (Cs = 0, Mc = n) : Cs = 0, u = u.stateNode, el && typeof el.onCommitFiberRoot == "function")
      try {
        el.onCommitFiberRoot(ad, u, void 0, (u.current.flags & 64) === 64);
      } catch (kt) {
      }
    if (wa(n, Er()), gs)
      throw gs = !1, n = Pd, Pd = null, n;
    return St & 8 || lr(), null;
  }
  function x0() {
    for (; Ue !== null; ) {
      var n = Ue.alternate;
      Dc || bs === null || (Ue.flags & 8 ? Hr(Ue, bs) && (Dc = !0) : Ue.tag === 13 && S0(n, Ue) && Hr(Ue, bs) && (Dc = !0));
      var i = Ue.flags;
      i & 256 && b0(n, Ue), !(i & 512) || To || (To = !0, nl(97, function() {
        return _o(), null;
      })), Ue = Ue.nextEffect;
    }
  }
  function _o() {
    if (ys !== 90) {
      var n = 97 < ys ? 97 : ys;
      return ys = 90, tl(n, fp);
    }
    return !1;
  }
  function cp(n, i) {
    Id.push(i, n), To || (To = !0, nl(97, function() {
      return _o(), null;
    }));
  }
  function Vd(n, i) {
    zd.push(i, n), To || (To = !0, nl(97, function() {
      return _o(), null;
    }));
  }
  function fp() {
    if (vl === null)
      return !1;
    var n = vl;
    if (vl = null, St & 48)
      throw Error(c(331));
    var i = St;
    St |= 32;
    var u = zd;
    zd = [];
    for (var v = 0; v < u.length; v += 2) {
      var g = u[v], b = u[v + 1], R = g.destroy;
      if (g.destroy = void 0, typeof R == "function")
        try {
          R();
        } catch (H) {
          if (b === null)
            throw Error(c(330));
          Mo(b, H);
        }
    }
    for (u = Id, Id = [], v = 0; v < u.length; v += 2) {
      g = u[v], b = u[v + 1];
      try {
        var M = g.create;
        g.destroy = M();
      } catch (H) {
        if (b === null)
          throw Error(c(330));
        Mo(b, H);
      }
    }
    for (M = n.current.firstEffect; M !== null; )
      n = M.nextEffect, M.nextEffect = null, M.flags & 8 && (M.sibling = null, M.stateNode = null), M = n;
    return St = i, lr(), !0;
  }
  function hl(n, i, u) {
    i = Md(u, i), i = Q1(n, i, 1), Di(n, i), i = ca(), n = Lc(n, 1), n !== null && (Pu(n, 1, i), wa(n, i));
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
            n = Md(i, n);
            var g = Z1(u, n, 1);
            if (Di(u, g), g = ca(), u = Lc(u, 1), u !== null)
              Pu(u, 1, g), wa(u, g);
            else if (typeof v.componentDidCatch == "function" && (ui === null || !ui.has(v)))
              try {
                v.componentDidCatch(i, n);
              } catch (b) {
              }
            break;
          }
        }
        u = u.return;
      }
  }
  function T0(n, i, u) {
    var v = n.pingCache;
    v !== null && v.delete(i), i = ca(), n.pingedLanes |= n.suspendedLanes & u, Wr === n && (xr & u) === u && (vr === 4 || vr === 3 && (xr & 62914560) === xr && 500 > Er() - ms ? pl(n, 0) : Ad |= u), wa(n, i);
  }
  function R0(n, i) {
    var u = n.stateNode;
    u !== null && u.delete(i), i = 0, i === 0 && (i = n.mode, i & 2 ? i & 4 ? (Ui === 0 && (Ui = za), i = ao(62914560 & ~Ui), i === 0 && (i = 4194304)) : i = Yl() === 99 ? 1 : 2 : i = 1), u = ca(), n = Lc(n, i), n !== null && (Pu(n, i, u), wa(n, u));
  }
  var dp;
  dp = function(n, i, u) {
    var v = i.lanes;
    if (n !== null)
      if (n.memoizedProps !== i.pendingProps || br.current)
        Ea = !0;
      else if (u & v)
        Ea = !!(n.flags & 16384);
      else {
        switch (Ea = !1, i.tag) {
          case 3:
            W1(i), Jl();
            break;
          case 5:
            U1(i);
            break;
          case 1:
            Sr(i.type) && ba(i);
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
                return g0(n, i, u);
              i.flags |= 64;
            }
            if (g = i.memoizedState, g !== null && (g.rendering = null, g.tail = null, g.lastEffect = null), vt(Hn, Hn.current), v)
              break;
            return null;
          case 23:
          case 24:
            return i.lanes = 0, ou(n, i, u);
        }
        return Hi(n, i, u);
      }
    else
      Ea = !1;
    switch (i.lanes = 0, i.tag) {
      case 2:
        if (v = i.type, n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2), n = i.pendingProps, g = nn(i, Rn.current), rl(i, u), g = yd(null, i, v, n, g, u), i.flags |= 1, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
          if (i.tag = 1, i.memoizedState = null, i.updateQueue = null, Sr(v)) {
            var b = !0;
            ba(i);
          } else
            b = !1;
          i.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, dd(i);
          var R = v.getDerivedStateFromProps;
          typeof R == "function" && Zu(i, v, R, n), g.updater = Ql, i.stateNode = g, g._reactInternals = i, xc(i, v, n, u), i = kd(null, i, v, !0, b, u);
        } else
          i.tag = 0, Xr(null, i, g, u), i = i.child;
        return i;
      case 16:
        g = i.elementType;
        e: {
          switch (n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2), n = i.pendingProps, b = g._init, g = b(g._payload), i.type = g, b = i.tag = _0(g), n = ur(g, n), b) {
            case 0:
              i = Rd(null, i, g, n, u);
              break e;
            case 1:
              i = B1(null, i, g, n, u);
              break e;
            case 11:
              i = xd(null, i, g, n, u);
              break e;
            case 14:
              i = Td(null, i, g, ur(g.type, n), v, u);
              break e;
          }
          throw Error(c(306, g, ""));
        }
        return i;
      case 0:
        return v = i.type, g = i.pendingProps, g = i.elementType === v ? g : ur(v, g), Rd(n, i, v, g, u);
      case 1:
        return v = i.type, g = i.pendingProps, g = i.elementType === v ? g : ur(v, g), B1(n, i, v, g, u);
      case 3:
        if (W1(i), v = i.updateQueue, n === null || v === null)
          throw Error(c(282));
        if (v = i.pendingProps, g = i.memoizedState, g = g !== null ? g.element : null, H1(n, i), Li(i, v, null, u), v = i.memoizedState.element, v === g)
          Jl(), i = Hi(n, i, u);
        else {
          if (g = i.stateNode, (b = g.hydrate) && (Ai = co(i.stateNode.containerInfo.firstChild), ai = i, b = ii = !0), b) {
            if (n = g.mutableSourceEagerHydrationData, n != null)
              for (g = 0; g < n.length; g += 2)
                b = n[g], b._workInProgressVersionPrimary = n[g + 1], ul.push(b);
            for (u = hd(i, null, v, u), i.child = u; u; )
              u.flags = u.flags & -3 | 1024, u = u.sibling;
          } else
            Xr(n, i, v, u), Jl();
          i = i.child;
        }
        return i;
      case 5:
        return U1(i), n === null && Co(i), v = i.type, g = i.pendingProps, b = n !== null ? n.memoizedProps : null, R = g.children, Gu(v, g) ? R = null : b !== null && Gu(v, b) && (i.flags |= 16), F1(n, i), Xr(n, i, R, u), i.child;
      case 6:
        return n === null && Co(i), null;
      case 13:
        return wo(n, i, u);
      case 4:
        return rs(i, i.stateNode.containerInfo), v = i.pendingProps, n === null ? i.child = es(i, null, v, u) : Xr(n, i, v, u), i.child;
      case 11:
        return v = i.type, g = i.pendingProps, g = i.elementType === v ? g : ur(v, g), xd(n, i, v, g, u);
      case 7:
        return Xr(n, i, i.pendingProps, u), i.child;
      case 8:
        return Xr(
          n,
          i,
          i.pendingProps.children,
          u
        ), i.child;
      case 12:
        return Xr(n, i, i.pendingProps.children, u), i.child;
      case 10:
        e: {
          v = i.type._context, g = i.pendingProps, R = i.memoizedProps, b = g.value;
          var M = i.type._context;
          if (vt(go, M._currentValue), M._currentValue = b, R !== null)
            if (M = R.value, b = Ca(M, b) ? 0 : (typeof v._calculateChangedBits == "function" ? v._calculateChangedBits(M, b) : 1073741823) | 0, b === 0) {
              if (R.children === g.children && !br.current) {
                i = Hi(n, i, u);
                break e;
              }
            } else
              for (M = i.child, M !== null && (M.return = i); M !== null; ) {
                var H = M.dependencies;
                if (H !== null) {
                  R = M.child;
                  for (var ee = H.firstContext; ee !== null; ) {
                    if (ee.context === v && ee.observedBits & b) {
                      M.tag === 1 && (ee = Pa(-1, u & -u), ee.tag = 2, Di(M, ee)), M.lanes |= u, ee = M.alternate, ee !== null && (ee.lanes |= u), fd(M.return, u), H.lanes |= u;
                      break;
                    }
                    ee = ee.next;
                  }
                } else
                  R = M.tag === 10 && M.type === i.type ? null : M.child;
                if (R !== null)
                  R.return = M;
                else
                  for (R = M; R !== null; ) {
                    if (R === i) {
                      R = null;
                      break;
                    }
                    if (M = R.sibling, M !== null) {
                      M.return = R.return, R = M;
                      break;
                    }
                    R = R.return;
                  }
                M = R;
              }
          Xr(n, i, g.children, u), i = i.child;
        }
        return i;
      case 9:
        return g = i.type, b = i.pendingProps, v = b.children, rl(i, u), g = sa(
          g,
          b.unstable_observedBits
        ), v = v(g), i.flags |= 1, Xr(n, i, v, u), i.child;
      case 14:
        return g = i.type, b = ur(g, i.pendingProps), b = ur(g.type, b), Td(n, i, g, b, v, u);
      case 15:
        return V1(n, i, i.type, i.pendingProps, v, u);
      case 17:
        return v = i.type, g = i.pendingProps, g = i.elementType === v ? g : ur(v, g), n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2), i.tag = 1, Sr(v) ? (n = !0, ba(i)) : n = !1, rl(i, u), al(i, v, g), xc(i, v, g, u), kd(null, i, v, !0, n, u);
      case 19:
        return g0(n, i, u);
      case 23:
        return ou(n, i, u);
      case 24:
        return ou(n, i, u);
    }
    throw Error(c(156, i.tag));
  };
  function k0(n, i, u, v) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = v, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function xa(n, i, u, v) {
    return new k0(n, i, u, v);
  }
  function Ic(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function _0(n) {
    if (typeof n == "function")
      return Ic(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === te)
        return 11;
      if (n === Ee)
        return 14;
    }
    return 2;
  }
  function Oo(n, i) {
    var u = n.alternate;
    return u === null ? (u = xa(n.tag, i, n.key, n.mode), u.elementType = n.elementType, u.type = n.type, u.stateNode = n.stateNode, u.alternate = n, n.alternate = u) : (u.pendingProps = i, u.type = n.type, u.flags = 0, u.nextEffect = null, u.firstEffect = null, u.lastEffect = null), u.childLanes = n.childLanes, u.lanes = n.lanes, u.child = n.child, u.memoizedProps = n.memoizedProps, u.memoizedState = n.memoizedState, u.updateQueue = n.updateQueue, i = n.dependencies, u.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, u.sibling = n.sibling, u.index = n.index, u.ref = n.ref, u;
  }
  function Es(n, i, u, v, g, b) {
    var R = 2;
    if (v = n, typeof n == "function")
      Ic(n) && (R = 1);
    else if (typeof n == "string")
      R = 5;
    else
      e:
        switch (n) {
          case ne:
            return ci(u.children, g, b, i);
          case Ie:
            R = 8, g |= 16;
            break;
          case ue:
            R = 8, g |= 1;
            break;
          case re:
            return n = xa(12, u, i, g | 8), n.elementType = re, n.type = re, n.lanes = b, n;
          case se:
            return n = xa(13, u, i, g), n.type = se, n.elementType = se, n.lanes = b, n;
          case de:
            return n = xa(19, u, i, g), n.elementType = de, n.lanes = b, n;
          case ie:
            return ml(u, g, b, i);
          case he:
            return n = xa(24, u, i, g), n.elementType = he, n.lanes = b, n;
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
                case Ee:
                  R = 14;
                  break e;
                case Me:
                  R = 16, v = null;
                  break e;
                case xe:
                  R = 22;
                  break e;
              }
            throw Error(c(130, n == null ? n : typeof n, ""));
        }
    return i = xa(R, u, i, g), i.elementType = n, i.type = v, i.lanes = b, i;
  }
  function ci(n, i, u, v) {
    return n = xa(7, n, v, i), n.lanes = u, n;
  }
  function ml(n, i, u, v) {
    return n = xa(23, n, v, i), n.elementType = ie, n.lanes = u, n;
  }
  function Fd(n, i, u) {
    return n = xa(6, n, null, i), n.lanes = u, n;
  }
  function Bd(n, i, u) {
    return i = xa(4, n.children !== null ? n.children : [], n.key, i), i.lanes = u, i.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, i;
  }
  function M0(n, i, u) {
    this.tag = i, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = u, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = tc(0), this.expirationTimes = tc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tc(0), this.mutableSourceEagerHydrationData = null;
  }
  function zc(n, i, u) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Q, key: v == null ? null : "" + v, children: n, containerInfo: i, implementation: u };
  }
  function Hc(n, i, u, v) {
    var g = i.current, b = ca(), R = si(g);
    e:
      if (u) {
        u = u._reactInternals;
        t: {
          if (xn(u) !== u || u.tag !== 1)
            throw Error(c(170));
          var M = u;
          do {
            switch (M.tag) {
              case 3:
                M = M.stateNode.context;
                break t;
              case 1:
                if (Sr(M.type)) {
                  M = M.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            M = M.return;
          } while (M !== null);
          throw Error(c(171));
        }
        if (u.tag === 1) {
          var H = u.type;
          if (Sr(H)) {
            u = ql(u, H, M);
            break e;
          }
        }
        u = M;
      } else
        u = vo;
    return i.context === null ? i.context = u : i.pendingContext = u, i = Pa(b, R), i.payload = { element: n }, v = v === void 0 ? null : v, v !== null && (i.callback = v), Di(g, i), Ro(g, R, b), R;
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
  function vp(n, i) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var u = n.retryLane;
      n.retryLane = u !== 0 && u < i ? u : i;
    }
  }
  function Uc(n, i) {
    vp(n, i), (n = n.alternate) && vp(n, i);
  }
  function pp() {
    return null;
  }
  function Wd(n, i, u) {
    var v = u != null && u.hydrationOptions != null && u.hydrationOptions.mutableSources || null;
    if (u = new M0(n, i, u != null && u.hydrate === !0), i = xa(3, null, null, i === 2 ? 7 : i === 1 ? 3 : 0), u.current = i, i.stateNode = u, dd(i), n[jr] = u.current, ed(n.nodeType === 8 ? n.parentNode : n), v)
      for (n = 0; n < v.length; n++) {
        i = v[n];
        var g = i._getVersion;
        g = g(i._source), u.mutableSourceEagerHydrationData == null ? u.mutableSourceEagerHydrationData = [i, g] : u.mutableSourceEagerHydrationData.push(i, g);
      }
    this._internalRoot = u;
  }
  Wd.prototype.render = function(n) {
    Hc(n, this._internalRoot, null, null);
  }, Wd.prototype.unmount = function() {
    var n = this._internalRoot, i = n.containerInfo;
    Hc(null, n, null, function() {
      i[jr] = null;
    });
  };
  function ws(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function O0(n, i) {
    if (i || (i = n ? n.nodeType === 9 ? n.documentElement : n.firstChild : null, i = !(!i || i.nodeType !== 1 || !i.hasAttribute("data-reactroot"))), !i)
      for (var u; u = n.lastChild; )
        n.removeChild(u);
    return new Wd(n, 0, i ? { hydrate: !0 } : void 0);
  }
  function jc(n, i, u, v, g) {
    var b = u._reactRootContainer;
    if (b) {
      var R = b._internalRoot;
      if (typeof g == "function") {
        var M = g;
        g = function() {
          var ee = $c(R);
          M.call(ee);
        };
      }
      Hc(i, R, n, g);
    } else {
      if (b = u._reactRootContainer = O0(u, v), R = b._internalRoot, typeof g == "function") {
        var H = g;
        g = function() {
          var ee = $c(R);
          H.call(ee);
        };
      }
      op(function() {
        Hc(i, R, n, g);
      });
    }
    return $c(R);
  }
  Za = function(n) {
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
  }, Ln = ip, gn = function(n, i, u, v, g) {
    var b = St;
    St |= 4;
    try {
      return tl(98, n.bind(null, i, u, v, g));
    } finally {
      St = b, St === 0 && (fu(), lr());
    }
  }, oa = function() {
    !(St & 49) && (E0(), _o());
  }, qr = function(n, i) {
    var u = St;
    St |= 2;
    try {
      return n(i);
    } finally {
      St = u, St === 0 && (fu(), lr());
    }
  };
  function hp(n, i) {
    var u = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ws(i))
      throw Error(c(200));
    return zc(n, i, null, u);
  }
  var N0 = { Events: [ua, Vr, Oi, Lt, mn, _o, { current: !1 }] }, xs = { findFiberByHostInstance: Jo, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, D0 = { bundleType: xs.bundleType, version: xs.version, rendererPackageName: xs.rendererPackageName, rendererConfig: xs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: U.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Qa(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: xs.findFiberByHostInstance || pp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var Vc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vc.isDisabled && Vc.supportsFiber)
      try {
        ad = Vc.inject(D0), el = Vc;
      } catch (n) {
      }
  }
  return Fa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N0, Fa.createPortal = hp, Fa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var i = n._reactInternals;
    if (i === void 0)
      throw typeof n.render == "function" ? Error(c(188)) : Error(c(268, Object.keys(n)));
    return n = Qa(i), n = n === null ? null : n.stateNode, n;
  }, Fa.flushSync = function(n, i) {
    var u = St;
    if (u & 48)
      return n(i);
    St |= 1;
    try {
      if (n)
        return tl(99, n.bind(null, i));
    } finally {
      St = u, lr();
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
    return n._reactRootContainer ? (op(function() {
      jc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[jr] = null;
      });
    }), !0) : !1;
  }, Fa.unstable_batchedUpdates = ip, Fa.unstable_createPortal = function(n, i) {
    return hp(n, i, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  }, Fa.unstable_renderSubtreeIntoContainer = function(n, i, u, v) {
    if (!ws(u))
      throw Error(c(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(c(38));
    return jc(n, i, u, !1, v);
  }, Fa.version = "17.0.2", Fa;
}
var Ba = {}, Wh = { exports: {} }, Ki = {};
/** @license React v0.20.2
 * scheduler-tracing.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var x4;
function zR() {
  if (x4)
    return Ki;
  x4 = 1;
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
var i5 = {};
/** @license React v0.20.2
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var T4;
function HR() {
  return T4 || (T4 = 1, function(r) {
    process.env.NODE_ENV !== "production" && function() {
      var o = 0, s = 0, c = 0;
      r.__interactionsRef = null, r.__subscriberRef = null, r.__interactionsRef = {
        current: /* @__PURE__ */ new Set()
      }, r.__subscriberRef = {
        current: null
      };
      function d(V) {
        var z = r.__interactionsRef.current;
        r.__interactionsRef.current = /* @__PURE__ */ new Set();
        try {
          return V();
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
      function E(V, z, I) {
        var U = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : o, Y = {
          __count: 1,
          id: s++,
          name: V,
          timestamp: z
        }, Q = r.__interactionsRef.current, ne = new Set(Q);
        ne.add(Y), r.__interactionsRef.current = ne;
        var ue = r.__subscriberRef.current, re;
        try {
          ue !== null && ue.onInteractionTraced(Y);
        } finally {
          try {
            ue !== null && ue.onWorkStarted(ne, U);
          } finally {
            try {
              re = I();
            } finally {
              r.__interactionsRef.current = Q;
              try {
                ue !== null && ue.onWorkStopped(ne, U);
              } finally {
                Y.__count--, ue !== null && Y.__count === 0 && ue.onInteractionScheduledWorkCompleted(Y);
              }
            }
          }
        }
        return re;
      }
      function T(V) {
        var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o, I = r.__interactionsRef.current, U = r.__subscriberRef.current;
        U !== null && U.onWorkScheduled(I, z), I.forEach(function(ne) {
          ne.__count++;
        });
        var Y = !1;
        function Q() {
          var ne = r.__interactionsRef.current;
          r.__interactionsRef.current = I, U = r.__subscriberRef.current;
          try {
            var ue;
            try {
              U !== null && U.onWorkStarted(I, z);
            } finally {
              try {
                ue = V.apply(void 0, arguments);
              } finally {
                r.__interactionsRef.current = ne, U !== null && U.onWorkStopped(I, z);
              }
            }
            return ue;
          } finally {
            Y || (Y = !0, I.forEach(function(re) {
              re.__count--, U !== null && re.__count === 0 && U.onInteractionScheduledWorkCompleted(re);
            }));
          }
        }
        return Q.cancel = function() {
          U = r.__subscriberRef.current;
          try {
            U !== null && U.onWorkCanceled(I, z);
          } finally {
            I.forEach(function(ue) {
              ue.__count--, U && ue.__count === 0 && U.onInteractionScheduledWorkCompleted(ue);
            });
          }
        }, Q;
      }
      var w = null;
      w = /* @__PURE__ */ new Set();
      function _(V) {
        w.add(V), w.size === 1 && (r.__subscriberRef.current = {
          onInteractionScheduledWorkCompleted: A,
          onInteractionTraced: N,
          onWorkCanceled: W,
          onWorkScheduled: P,
          onWorkStarted: j,
          onWorkStopped: D
        });
      }
      function k(V) {
        w.delete(V), w.size === 0 && (r.__subscriberRef.current = null);
      }
      function N(V) {
        var z = !1, I = null;
        if (w.forEach(function(U) {
          try {
            U.onInteractionTraced(V);
          } catch (Y) {
            z || (z = !0, I = Y);
          }
        }), z)
          throw I;
      }
      function A(V) {
        var z = !1, I = null;
        if (w.forEach(function(U) {
          try {
            U.onInteractionScheduledWorkCompleted(V);
          } catch (Y) {
            z || (z = !0, I = Y);
          }
        }), z)
          throw I;
      }
      function P(V, z) {
        var I = !1, U = null;
        if (w.forEach(function(Y) {
          try {
            Y.onWorkScheduled(V, z);
          } catch (Q) {
            I || (I = !0, U = Q);
          }
        }), I)
          throw U;
      }
      function j(V, z) {
        var I = !1, U = null;
        if (w.forEach(function(Y) {
          try {
            Y.onWorkStarted(V, z);
          } catch (Q) {
            I || (I = !0, U = Q);
          }
        }), I)
          throw U;
      }
      function D(V, z) {
        var I = !1, U = null;
        if (w.forEach(function(Y) {
          try {
            Y.onWorkStopped(V, z);
          } catch (Q) {
            I || (I = !0, U = Q);
          }
        }), I)
          throw U;
      }
      function W(V, z) {
        var I = !1, U = null;
        if (w.forEach(function(Y) {
          try {
            Y.onWorkCanceled(V, z);
          } catch (Q) {
            I || (I = !0, U = Q);
          }
        }), I)
          throw U;
      }
      r.unstable_clear = d, r.unstable_getCurrent = m, r.unstable_getThreadID = h, r.unstable_subscribe = _, r.unstable_trace = E, r.unstable_unsubscribe = k, r.unstable_wrap = T;
    }();
  }(i5)), i5;
}
var R4;
function $R() {
  return R4 || (R4 = 1, process.env.NODE_ENV === "production" ? Wh.exports = zR() : Wh.exports = HR()), Wh.exports;
}
/** @license React v17.0.2
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var k4;
function UR() {
  return k4 || (k4 = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Oa, o = a3(), s = i3(), c = $R(), d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        E("warn", e, a);
      }
    }
    function h(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          a[l - 1] = arguments[l];
        E("error", e, a);
      }
    }
    function E(e, t, a) {
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
    var T = 0, w = 1, _ = 2, k = 3, N = 4, A = 5, P = 6, j = 7, D = 8, W = 9, V = 10, z = 11, I = 12, U = 13, Y = 14, Q = 15, ne = 16, ue = 17, re = 18, ge = 19, pe = 20, te = 21, se = 22, de = 23, Ee = 24, Me = !0, xe = !1, Le = !1, Ie = !1, ie = /* @__PURE__ */ new Set(), he = {}, Se = {};
    function ze(e, t) {
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
    var Ze = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined", it = 0, Be = 1, nt = 2, Nt = 3, He = 4, et = 5, Bt = 6, we = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", mt = we + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Dt = "data-reactroot", zt = new RegExp("^[" + we + "][" + mt + "]*$"), $t = Object.prototype.hasOwnProperty, Xe = {}, _t = {};
    function gt(e) {
      return $t.call(_t, e) ? !0 : $t.call(Xe, e) ? !1 : zt.test(e) ? (_t[e] = !0, !0) : (Xe[e] = !0, h("Invalid attribute name: `%s`", e), !1);
    }
    function Xt(e, t, a) {
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
    var Ne = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, We = !1;
    function xt(e) {
      !We && Ne.test(e) && (We = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
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
            var C = e.getAttribute(p);
            return C === "" ? !0 : Wt(t, a, l, !1) ? C : C === "" + a ? a : C;
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
        if (_E(a))
          return a;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return l === "" + a ? a : l;
      }
    }
    function st(e, t, a, l) {
      var f = Qt(t);
      if (!Xt(t, f, l)) {
        if (Wt(t, a, f, l) && (a = null), l || f === null) {
          if (gt(t)) {
            var p = t;
            a === null ? e.removeAttribute(p) : e.setAttribute(p, "" + a);
          }
          return;
        }
        var y = f.mustUseProperty;
        if (y) {
          var C = f.propertyName;
          if (a === null) {
            var x = f.type;
            e[C] = x === Nt ? !1 : "";
          } else
            e[C] = a;
          return;
        }
        var O = f.attributeName, L = f.attributeNamespace;
        if (a === null)
          e.removeAttribute(O);
        else {
          var Z = f.type, $;
          Z === Nt || Z === He && a === !0 ? $ = "" : ($ = "" + a, f.sanitizeURL && xt($.toString())), L ? e.setAttributeNS(L, O, $) : e.setAttribute(O, $);
        }
      }
    }
    var on = 60103, Ot = 60106, Ut = 60107, ir = 60108, Ft = 60114, dn = 60109, jt = 60110, $e = 60112, bt = 60113, Oe = 60120, Ge = 60115, Lt = 60116, mn = 60121, Ln = 60119, gn = 60128, oa = 60129, qr = 60130, An = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var Kt = Symbol.for;
      on = Kt("react.element"), Ot = Kt("react.portal"), Ut = Kt("react.fragment"), ir = Kt("react.strict_mode"), Ft = Kt("react.profiler"), dn = Kt("react.provider"), jt = Kt("react.context"), $e = Kt("react.forward_ref"), bt = Kt("react.suspense"), Oe = Kt("react.suspense_list"), Ge = Kt("react.memo"), Lt = Kt("react.lazy"), mn = Kt("react.block"), Kt("react.server.block"), Kt("react.fundamental"), Ln = Kt("react.scope"), gn = Kt("react.opaque.id"), oa = Kt("react.debug_trace_mode"), qr = Kt("react.offscreen"), An = Kt("react.legacy_hidden");
    }
    var Fn = typeof Symbol == "function" && Symbol.iterator, Yr = "@@iterator";
    function ln(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Fn && e[Fn] || e[Yr];
      return typeof t == "function" ? t : null;
    }
    var Jn = 0, Tr, qa, Ar, Pr, Rr, Ya, Pn;
    function Ei() {
    }
    Ei.__reactDisabledLog = !0;
    function kr() {
      {
        if (Jn === 0) {
          Tr = console.log, qa = console.info, Ar = console.warn, Pr = console.error, Rr = console.group, Ya = console.groupCollapsed, Pn = console.groupEnd;
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
              value: Ar
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
    var Ir = d.ReactCurrentDispatcher, _r;
    function zr(e, t, a) {
      {
        if (_r === void 0)
          try {
            throw Error();
          } catch (f) {
            var l = f.stack.trim().match(/\n( *(at )?)/);
            _r = l && l[1] || "";
          }
        return `
` + _r + e;
      }
    }
    var Qa = !1, Hr;
    {
      var Za = typeof WeakMap == "function" ? WeakMap : Map;
      Hr = new Za();
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
      p = Ir.current, Ir.current = null, kr();
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
          for (var C = fe.stack.split(`
`), x = l.stack.split(`
`), O = C.length - 1, L = x.length - 1; O >= 1 && L >= 0 && C[O] !== x[L]; )
            L--;
          for (; O >= 1 && L >= 0; O--, L--)
            if (C[O] !== x[L]) {
              if (O !== 1 || L !== 1)
                do
                  if (O--, L--, L < 0 || C[O] !== x[L]) {
                    var Z = `
` + C[O].replace(" at new ", " at ");
                    return typeof e == "function" && Hr.set(e, Z), Z;
                  }
                while (O >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        Qa = !1, Ir.current = p, xn(), Error.prepareStackTrace = f;
      }
      var $ = e ? e.displayName || e.name : "", J = $ ? zr($) : "";
      return typeof e == "function" && Hr.set(e, J), J;
    }
    function Qr(e, t, a) {
      return gr(e, !0);
    }
    function Mr(e, t, a) {
      return gr(e, !1);
    }
    function ma(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function In(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return gr(e, ma(e));
      if (typeof e == "string")
        return zr(e);
      switch (e) {
        case bt:
          return zr("Suspense");
        case Oe:
          return zr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case $e:
            return Mr(e.render);
          case Ge:
            return In(e.type, t, a);
          case mn:
            return Mr(e._render);
          case Lt: {
            var l = e, f = l._payload, p = l._init;
            try {
              return In(p(f), t, a);
            } catch (y) {
            }
          }
        }
      return "";
    }
    function Kn(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case A:
          return zr(e.type);
        case ne:
          return zr("Lazy");
        case U:
          return zr("Suspense");
        case ge:
          return zr("SuspenseList");
        case T:
        case _:
        case Q:
          return Mr(e.type);
        case z:
          return Mr(e.type.render);
        case se:
          return Mr(e.type._render);
        case w:
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
    function ke(e) {
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
        case Ft:
          return "Profiler";
        case ir:
          return "StrictMode";
        case bt:
          return "Suspense";
        case Oe:
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
            return ke(e.type);
          case mn:
            return ke(e._render);
          case Lt: {
            var l = e, f = l._payload, p = l._init;
            try {
              return ke(p(f));
            } catch (y) {
              return null;
            }
          }
        }
      return null;
    }
    var Zt = d.ReactDebugCurrentFrame, dt = null, Ht = !1;
    function Tn() {
      {
        if (dt === null)
          return null;
        var e = dt._debugOwner;
        if (e !== null && typeof e != "undefined")
          return ke(e.type);
      }
      return null;
    }
    function On() {
      return dt === null ? "" : Or(dt);
    }
    function Nn() {
      Zt.getCurrentStack = null, dt = null, Ht = !1;
    }
    function vn(e) {
      Zt.getCurrentStack = On, dt = e, Ht = !1;
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
    function zn(e) {
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
    function Cr(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function ga(e) {
      return e._valueTracker;
    }
    function xi(e) {
      e._valueTracker = null;
    }
    function Na(e) {
      var t = "";
      return e && (Cr(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function eo(e) {
      var t = Cr(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), l = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a == "undefined" || typeof a.get != "function" || typeof a.set != "function")) {
        var f = a.get, p = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return f.call(this);
          },
          set: function(C) {
            l = "" + C, p.call(this, C);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var y = {
          getValue: function() {
            return l;
          },
          setValue: function(C) {
            l = "" + C;
          },
          stopTracking: function() {
            xi(e), delete e[t];
          }
        };
        return y;
      }
    }
    function Da(e) {
      ga(e) || (e._valueTracker = eo(e));
    }
    function to(e) {
      if (!e)
        return !1;
      var t = ga(e);
      if (!t)
        return !0;
      var a = t.getValue(), l = Na(e);
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
    var Ko = !1, no = !1, Pl = !1, Fe = !1;
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
        initialValue: zn(t.value != null ? t.value : l),
        controlled: yt(t)
      };
    }
    function Sn(e, t) {
      var a = e, l = t.checked;
      l != null && st(a, "checked", l, !1);
    }
    function ro(e, t) {
      var a = e;
      {
        var l = yt(t);
        !a._wrapperState.controlled && l && !Fe && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Fe = !0), a._wrapperState.controlled && !l && !Pl && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Pl = !0);
      }
      Sn(e, t);
      var f = zn(t.value), p = t.type;
      if (f != null)
        p === "number" ? (f === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != f) && (a.value = Gn(f)) : a.value !== Gn(f) && (a.value = Gn(f));
      else if (p === "submit" || p === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? ao(a, t.type, f) : t.hasOwnProperty("defaultValue") && ao(a, t.type, zn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Xa(e, t, a) {
      var l = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var f = t.type, p = f === "submit" || f === "reset";
        if (p && (t.value === void 0 || t.value === null))
          return;
        var y = Gn(l._wrapperState.initialValue);
        a || y !== l.value && (l.value = y), l.defaultValue = y;
      }
      var C = l.name;
      C !== "" && (l.name = ""), l.defaultChecked = !l.defaultChecked, l.defaultChecked = !!l._wrapperState.initialChecked, C !== "" && (l.name = C);
    }
    function Au(e, t) {
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
            var C = kp(y);
            if (!C)
              throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            to(y), ro(y, C);
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
    function r1(e, t) {
      typeof t.children == "object" && t.children !== null && r.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || typeof a.type == "string" && (Pu || (Pu = !0, h("Only strings and numbers are supported as <option> children."))));
      }), t.selected != null && !tc && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), tc = !0);
    }
    function qm(e, t) {
      t.value != null && e.setAttribute("value", Gn(zn(t.value)));
    }
    function If(e, t) {
      var a = o({
        children: void 0
      }, t), l = io(t.children);
      return l && (a.children = l), a;
    }
    var zf;
    zf = !1;
    function a1() {
      var e = Tn();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Iu = ["value", "defaultValue"];
    function Ym(e) {
      {
        la("select", e);
        for (var t = 0; t < Iu.length; t++) {
          var a = Iu[t];
          if (e[a] != null) {
            var l = Array.isArray(e[a]);
            e.multiple && !l ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, a1()) : !e.multiple && l && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, a1());
          }
        }
      }
    }
    function Il(e, t, a, l) {
      var f = e.options;
      if (t) {
        for (var p = a, y = {}, C = 0; C < p.length; C++)
          y["$" + p[C]] = !0;
        for (var x = 0; x < f.length; x++) {
          var O = y.hasOwnProperty("$" + f[x].value);
          f[x].selected !== O && (f[x].selected = O), O && l && (f[x].defaultSelected = !0);
        }
      } else {
        for (var L = Gn(zn(a)), Z = null, $ = 0; $ < f.length; $++) {
          if (f[$].value === L) {
            f[$].selected = !0, l && (f[$].defaultSelected = !0);
            return;
          }
          Z === null && !f[$].disabled && (Z = f[$]);
        }
        Z !== null && (Z.selected = !0);
      }
    }
    function zu(e, t) {
      return o({}, t, {
        value: void 0
      });
    }
    function nc(e, t) {
      var a = e;
      Ym(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !zf && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), zf = !0);
    }
    function oo(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var l = t.value;
      l != null ? Il(a, !!t.multiple, l, !1) : t.defaultValue != null && Il(a, !!t.multiple, t.defaultValue, !0);
    }
    function Hf(e, t) {
      var a = e, l = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var f = t.value;
      f != null ? Il(a, !!t.multiple, f, !1) : l !== !!t.multiple && (t.defaultValue != null ? Il(a, !!t.multiple, t.defaultValue, !0) : Il(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function rc(e, t) {
      var a = e, l = t.value;
      l != null && Il(a, !!t.multiple, l, !1);
    }
    var $f = !1;
    function zl(e, t) {
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
      la("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !$f && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Tn() || "A component"), $f = !0);
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
        initialValue: zn(l)
      };
    }
    function Uf(e, t) {
      var a = e, l = zn(t.value), f = zn(t.defaultValue);
      if (l != null) {
        var p = Gn(l);
        p !== a.value && (a.value = p), t.defaultValue == null && a.defaultValue !== p && (a.defaultValue = p);
      }
      f != null && (a.defaultValue = Gn(f));
    }
    function Zr(e, t) {
      var a = e, l = a.textContent;
      l === a._wrapperState.initialValue && l !== "" && l !== null && (a.value = l);
    }
    function Hl(e, t) {
      Uf(e, t);
    }
    var $l = "http://www.w3.org/1999/xhtml", Ul = "http://www.w3.org/1998/Math/MathML", jf = "http://www.w3.org/2000/svg", ac = {
      html: $l,
      mathml: Ul,
      svg: jf
    };
    function $u(e) {
      switch (e) {
        case "svg":
          return jf;
        case "math":
          return Ul;
        default:
          return $l;
      }
    }
    function Go(e, t) {
      return e == null || e === $l ? $u(t) : e === jf && t === "foreignObject" ? $l : e;
    }
    var ic = function(e) {
      return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, a, l, f) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, l, f);
        });
      } : e;
    }, Uu, i1 = ic(function(e, t) {
      if (e.namespaceURI === ac.svg && !("innerHTML" in e)) {
        Uu = Uu || document.createElement("div"), Uu.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Uu.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ya = 1, ki = 3, $r = 8, lo = 9, o1 = 11, oc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ki) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Qm = {
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
    function l1(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Zm = ["Webkit", "ms", "Moz", "O"];
    Object.keys(ju).forEach(function(e) {
      Zm.forEach(function(t) {
        ju[l1(t, e)] = ju[e];
      });
    });
    function Vf(e, t, a) {
      var l = t == null || typeof t == "boolean" || t === "";
      return l ? "" : !a && typeof t == "number" && t !== 0 && !(ju.hasOwnProperty(e) && ju[e]) ? t + "px" : ("" + t).trim();
    }
    var Xm = /([A-Z])/g, Jm = /^ms-/;
    function Ff(e) {
      return e.replace(Xm, "-$1").toLowerCase().replace(Jm, "-ms-");
    }
    var u1 = function() {
    };
    {
      var e0 = /^(?:webkit|moz|o)[A-Z]/, t0 = /^-ms-/, s1 = /-(.)/g, c1 = /;\s*$/, jl = {}, Bf = {}, f1 = !1, d1 = !1, n0 = function(e) {
        return e.replace(s1, function(t, a) {
          return a.toUpperCase();
        });
      }, r0 = function(e) {
        jl.hasOwnProperty(e) && jl[e] || (jl[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          n0(e.replace(t0, "ms-"))
        ));
      }, Wf = function(e) {
        jl.hasOwnProperty(e) && jl[e] || (jl[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Vu = function(e, t) {
        Bf.hasOwnProperty(t) && Bf[t] || (Bf[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(c1, "")));
      }, a0 = function(e, t) {
        f1 || (f1 = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, v1 = function(e, t) {
        d1 || (d1 = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      u1 = function(e, t) {
        e.indexOf("-") > -1 ? r0(e) : e0.test(e) ? Wf(e) : c1.test(t) && Vu(e, t), typeof t == "number" && (isNaN(t) ? a0(e, t) : isFinite(t) || v1(e, t));
      };
    }
    var p1 = u1;
    function h1(e) {
      {
        var t = "", a = "";
        for (var l in e)
          if (e.hasOwnProperty(l)) {
            var f = e[l];
            if (f != null) {
              var p = l.indexOf("--") === 0;
              t += a + (p ? l : Ff(l)) + ":", t += Vf(l, f, p), a = ";";
            }
          }
        return t || null;
      }
    }
    function Kf(e, t) {
      var a = e.style;
      for (var l in t)
        if (t.hasOwnProperty(l)) {
          var f = l.indexOf("--") === 0;
          f || p1(l, t[l]);
          var p = Vf(l, t[l], f);
          l === "float" && (l = "cssFloat"), f ? a.setProperty(l, p) : a[l] = p;
        }
    }
    function m1(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function qo(e) {
      var t = {};
      for (var a in e)
        for (var l = Qm[a] || [a], f = 0; f < l.length; f++)
          t[l[f]] = a;
      return t;
    }
    function i0(e, t) {
      {
        if (!t)
          return;
        var a = qo(e), l = qo(t), f = {};
        for (var p in a) {
          var y = a[p], C = l[p];
          if (C && y !== C) {
            var x = y + "," + C;
            if (f[x])
              continue;
            f[x] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", m1(e[y]) ? "Removing" : "Updating", y, C);
          }
        }
      }
    }
    var o0 = {
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
    }, l0 = o({
      menuitem: !0
    }, o0), g1 = "__html";
    function lc(e, t) {
      if (t) {
        if (l0[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && g1 in t.dangerouslySetInnerHTML))
            throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), !(t.style == null || typeof t.style == "object"))
          throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function La(e, t) {
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
    }, y1 = {
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
    }, _i = {}, u0 = new RegExp("^(aria)-[" + mt + "]*$"), C1 = new RegExp("^(aria)[A-Z][" + mt + "]*$"), Gf = Object.prototype.hasOwnProperty;
    function qf(e, t) {
      {
        if (Gf.call(_i, t) && _i[t])
          return !0;
        if (C1.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), l = y1.hasOwnProperty(a) ? a : null;
          if (l == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), _i[t] = !0, !0;
          if (t !== l)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, l), _i[t] = !0, !0;
        }
        if (u0.test(t)) {
          var f = t.toLowerCase(), p = y1.hasOwnProperty(f) ? f : null;
          if (p == null)
            return _i[t] = !0, !1;
          if (t !== p)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, p), _i[t] = !0, !0;
        }
      }
      return !0;
    }
    function b1(e, t) {
      {
        var a = [];
        for (var l in t) {
          var f = qf(e, l);
          f || a.push(l);
        }
        var p = a.map(function(y) {
          return "`" + y + "`";
        }).join(", ");
        a.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e) : a.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", p, e);
      }
    }
    function S1(e, t) {
      La(e, t) || b1(e, t);
    }
    var Yf = !1;
    function s0(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Yf && (Yf = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var E1 = function() {
    };
    {
      var Ur = {}, c0 = Object.prototype.hasOwnProperty, w1 = /^on./, Ca = /^on[^A-Z]/, f0 = new RegExp("^(aria)-[" + mt + "]*$"), Fu = new RegExp("^(aria)[A-Z][" + mt + "]*$");
      E1 = function(e, t, a, l) {
        if (c0.call(Ur, t) && Ur[t])
          return !0;
        var f = t.toLowerCase();
        if (f === "onfocusin" || f === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ur[t] = !0, !0;
        if (l != null) {
          var p = l.registrationNameDependencies, y = l.possibleRegistrationNames;
          if (p.hasOwnProperty(t))
            return !0;
          var C = y.hasOwnProperty(f) ? y[f] : null;
          if (C != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, C), Ur[t] = !0, !0;
          if (w1.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), Ur[t] = !0, !0;
        } else if (w1.test(t))
          return Ca.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Ur[t] = !0, !0;
        if (f0.test(t) || Fu.test(t))
          return !0;
        if (f === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ur[t] = !0, !0;
        if (f === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ur[t] = !0, !0;
        if (f === "is" && a !== null && a !== void 0 && typeof a != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Ur[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Ur[t] = !0, !0;
        var x = Qt(t), O = x !== null && x.type === it;
        if (uo.hasOwnProperty(f)) {
          var L = uo[f];
          if (L !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, L), Ur[t] = !0, !0;
        } else if (!O && t !== f)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, f), Ur[t] = !0, !0;
        return typeof a == "boolean" && ot(t, a, x, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Ur[t] = !0, !0) : O ? !0 : ot(t, a, x, !1) ? (Ur[t] = !0, !1) : ((a === "false" || a === "true") && x !== null && x.type === Nt && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Ur[t] = !0), !0);
      };
    }
    var x1 = function(e, t, a) {
      {
        var l = [];
        for (var f in t) {
          var p = E1(e, f, t[f], a);
          p || l.push(f);
        }
        var y = l.map(function(C) {
          return "`" + C + "`";
        }).join(", ");
        l.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e) : l.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e);
      }
    };
    function T1(e, t, a) {
      La(e, t) || x1(e, t, a);
    }
    var Qf = 1, Bu = 2, Yo = 4, R1 = 16, Vl = Qf | Bu | Yo;
    function Wu(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ki ? t.parentNode : t;
    }
    var Qo = null, so = null, Zo = null;
    function Zf(e) {
      var t = pu(e);
      if (t) {
        if (typeof Qo != "function")
          throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var l = kp(a);
          Qo(t.stateNode, t.type, l);
        }
      }
    }
    function Xf(e) {
      Qo = e;
    }
    function Fl(e) {
      so ? Zo ? Zo.push(e) : Zo = [e] : so = e;
    }
    function k1() {
      return so !== null || Zo !== null;
    }
    function Jf() {
      if (so) {
        var e = so, t = Zo;
        if (so = null, Zo = null, Zf(e), t)
          for (var a = 0; a < t.length; a++)
            Zf(t[a]);
      }
    }
    var uc = function(e, t) {
      return e(t);
    }, yn = function(e, t, a, l, f) {
      return e(t, a, l, f);
    }, sc = function() {
    }, ed = uc, Mi = !1, cc = !1;
    function fc() {
      var e = k1();
      e && (sc(), Jf());
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
        return ed(e, t, a);
      } finally {
        cc = !1, fc();
      }
    }
    function Bl(e, t, a, l, f) {
      var p = Mi;
      Mi = !0;
      try {
        return yn(e, t, a, l, f);
      } finally {
        Mi = p, Mi || fc();
      }
    }
    function _1(e) {
      Mi || sc();
    }
    function vc(e, t, a, l) {
      uc = e, yn = t, sc = a, ed = l;
    }
    function td(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function nd(e, t, a) {
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
          return !!(a.disabled && td(t));
        default:
          return !1;
      }
    }
    function Wl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var l = kp(a);
      if (l === null)
        return null;
      var f = l[t];
      if (nd(t, e.type, l))
        return null;
      if (!(!f || typeof f == "function"))
        throw Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof f + "` type.");
      return f;
    }
    var Gu = !1;
    if (Ze)
      try {
        var Kl = {};
        Object.defineProperty(Kl, "passive", {
          get: function() {
            Gu = !0;
          }
        }), window.addEventListener("test", Kl, Kl), window.removeEventListener("test", Kl, Kl);
      } catch (e) {
        Gu = !1;
      }
    function M1(e, t, a, l, f, p, y, C, x) {
      var O = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, O);
      } catch (L) {
        this.onError(L);
      }
    }
    var pc = M1;
    if (typeof window != "undefined" && typeof window.dispatchEvent == "function" && typeof document != "undefined" && typeof document.createEvent == "function") {
      var co = document.createElement("react");
      pc = function(t, a, l, f, p, y, C, x, O) {
        if (typeof document == "undefined")
          throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var L = document.createEvent("Event"), Z = !1, $ = !0, J = window.event, fe = Object.getOwnPropertyDescriptor(window, "event");
        function _e() {
          co.removeEventListener(ae, Pt, !1), typeof window.event != "undefined" && window.hasOwnProperty("event") && (window.event = J);
        }
        var lt = Array.prototype.slice.call(arguments, 3);
        function Pt() {
          Z = !0, _e(), a.apply(l, lt), $ = !1;
        }
        var ht, Jt = !1, bn = !1;
        function X(G) {
          if (ht = G.error, Jt = !0, ht === null && G.colno === 0 && G.lineno === 0 && (bn = !0), G.defaultPrevented && ht != null && typeof ht == "object")
            try {
              ht._suppressLogging = !0;
            } catch (Ce) {
            }
        }
        var ae = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", X), co.addEventListener(ae, Pt, !1), L.initEvent(ae, !1, !1), co.dispatchEvent(L), fe && Object.defineProperty(window, "event", fe), Z && $ && (Jt ? bn && (ht = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ht = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ht)), window.removeEventListener("error", X), !Z)
          return _e(), M1.apply(this, arguments);
      };
    }
    var O1 = pc, fo = !1, hc = null, Xo = !1, Ja = null, mc = {
      onError: function(e) {
        fo = !0, hc = e;
      }
    };
    function jr(e, t, a, l, f, p, y, C, x) {
      fo = !1, hc = null, O1.apply(mc, arguments);
    }
    function N1(e, t, a, l, f, p, y, C, x) {
      if (jr.apply(this, arguments), fo) {
        var O = Vr();
        Xo || (Xo = !0, Ja = O);
      }
    }
    function Jo() {
      if (Xo) {
        var e = Ja;
        throw Xo = !1, Ja = null, e;
      }
    }
    function ua() {
      return fo;
    }
    function Vr() {
      if (fo) {
        var e = hc;
        return fo = !1, hc = null, e;
      } else
        throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Oi(e) {
      return e._reactInternals;
    }
    function D1(e) {
      return e._reactInternals !== void 0;
    }
    function rd(e, t) {
      e._reactInternals = t;
    }
    var un = (
      /*                      */
      0
    ), Fr = (
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
    ), br = (
      /*                 */
      16
    ), po = (
      /*                     */
      32
    ), nn = (
      /*                   */
      64
    ), Sr = (
      /*                          */
      128
    ), ei = (
      /*                     */
      256
    ), Gl = (
      /*                      */
      512
    ), ql = (
      /*     */
      8192
    ), ba = (
      /*                    */
      1024
    ), L1 = (
      /*           */
      1028
    ), ad = (
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
    ), d0 = d.ReactCurrentOwner;
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
      return t.tag === k ? a : null;
    }
    function gc(e) {
      if (e.tag === U) {
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
    function A1(e) {
      return e.tag === k ? e.stateNode.containerInfo : null;
    }
    function yc(e) {
      return ho(e) === e;
    }
    function P1(e) {
      {
        var t = d0.current;
        if (t !== null && t.tag === w) {
          var a = t, l = a.stateNode;
          l._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ke(a.type) || "A component"), l._warnedAboutRefsInRender = !0;
        }
      }
      var f = Oi(e);
      return f ? ho(f) === f : !1;
    }
    function id(e) {
      if (ho(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function od(e) {
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
          var C = p.return;
          if (C !== null) {
            l = f = C;
            continue;
          }
          break;
        }
        if (p.child === y.child) {
          for (var x = p.child; x; ) {
            if (x === l)
              return id(p), e;
            if (x === f)
              return id(p), t;
            x = x.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (l.return !== f.return)
          l = p, f = y;
        else {
          for (var O = !1, L = p.child; L; ) {
            if (L === l) {
              O = !0, l = p, f = y;
              break;
            }
            if (L === f) {
              O = !0, f = p, l = y;
              break;
            }
            L = L.sibling;
          }
          if (!O) {
            for (L = y.child; L; ) {
              if (L === l) {
                O = !0, l = y, f = p;
                break;
              }
              if (L === f) {
                O = !0, f = y, l = p;
                break;
              }
              L = L.sibling;
            }
            if (!O)
              throw Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (l.alternate !== f)
          throw Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (l.tag !== k)
        throw Error("Unable to find node on an unmounted component.");
      return l.stateNode.current === l ? e : t;
    }
    function ld(e) {
      var t = od(e);
      if (!t)
        return null;
      for (var a = t; ; ) {
        if (a.tag === A || a.tag === P)
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
    function ud(e) {
      var t = od(e);
      if (!t)
        return null;
      for (var a = t; ; ) {
        if (a.tag === A || a.tag === P || xe)
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
    function I1(e, t) {
      for (var a = t, l = e.alternate; a !== null; ) {
        if (a === e || a === l)
          return !0;
        a = a.return;
      }
      return !1;
    }
    var ti;
    function Cc(e) {
      ti = e;
    }
    var Qu;
    function z1(e) {
      Qu = e;
    }
    var Er;
    function Yl(e) {
      Er = e;
    }
    var sd;
    function tl(e) {
      sd = e;
    }
    var nl = !1, lr = [], Ni = null, mo = null, ur = null, go = /* @__PURE__ */ new Map(), yo = /* @__PURE__ */ new Map(), ni = [];
    function bc() {
      return lr.length > 0;
    }
    var cd = [
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
    function Sc(e) {
      return cd.indexOf(e) > -1;
    }
    function fd(e, t, a, l, f) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a | R1,
        nativeEvent: f,
        targetContainers: [l]
      };
    }
    function rl(e, t, a, l, f) {
      var p = fd(e, t, a, l, f);
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
        var y = fd(t, a, l, f, p);
        if (t !== null) {
          var C = pu(t);
          C !== null && Qu(C);
        }
        return y;
      }
      e.eventSystemFlags |= l;
      var x = e.targetContainers;
      return f !== null && x.indexOf(f) === -1 && x.push(f), e;
    }
    function dd(e, t, a, l, f) {
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
          var C = f;
          return ur = Sa(ur, e, t, a, l, C), !0;
        }
        case "pointerover": {
          var x = f, O = x.pointerId;
          return go.set(O, Sa(go.get(O) || null, e, t, a, l, x)), !0;
        }
        case "gotpointercapture": {
          var L = f, Z = L.pointerId;
          return yo.set(Z, Sa(yo.get(Z) || null, e, t, a, l, L)), !0;
        }
      }
      return !1;
    }
    function H1(e) {
      var t = ks(e.target);
      if (t !== null) {
        var a = ho(t);
        if (a !== null) {
          var l = a.tag;
          if (l === U) {
            var f = gc(a);
            if (f !== null) {
              e.blockedOn = f, sd(e.lanePriority, function() {
                s.unstable_runWithPriority(e.priority, function() {
                  Er(a);
                });
              });
              return;
            }
          } else if (l === k) {
            var p = a.stateNode;
            if (p.hydrate) {
              e.blockedOn = A1(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Pa(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], l = vs(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (l !== null) {
          var f = pu(l);
          return f !== null && Qu(f), e.blockedOn = l, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Di(e, t, a) {
      Pa(e) && a.delete(t);
    }
    function $1() {
      for (nl = !1; lr.length > 0; ) {
        var e = lr[0];
        if (e.blockedOn !== null) {
          var t = pu(e.blockedOn);
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
      Ni !== null && Pa(Ni) && (Ni = null), mo !== null && Pa(mo) && (mo = null), ur !== null && Pa(ur) && (ur = null), go.forEach(Di), yo.forEach(Di);
    }
    function Li(e, t) {
      e.blockedOn === t && (e.blockedOn = null, nl || (nl = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, $1)));
    }
    function vd(e) {
      if (lr.length > 0) {
        Li(lr[0], e);
        for (var t = 1; t < lr.length; t++) {
          var a = lr[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Ni !== null && Li(Ni, e), mo !== null && Li(mo, e), ur !== null && Li(ur, e);
      var l = function(C) {
        return Li(C, e);
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
        H1(y), y.blockedOn === null && ni.shift();
      }
    }
    var Ec = 0, Zu = 1, Ql = 2;
    function Xu(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var al = {
      animationend: Xu("Animation", "AnimationEnd"),
      animationiteration: Xu("Animation", "AnimationIteration"),
      animationstart: Xu("Animation", "AnimationStart"),
      transitionend: Xu("Transition", "TransitionEnd")
    }, wc = {}, xc = {};
    Ze && (xc = document.createElement("div").style, "AnimationEvent" in window || (delete al.animationend.animation, delete al.animationiteration.animation, delete al.animationstart.animation), "TransitionEvent" in window || delete al.transitionend.transition);
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
    var Zl = il("animationend"), Ju = il("animationiteration"), pd = il("animationstart"), es = il("transitionend"), hd = /* @__PURE__ */ new Map(), ol = /* @__PURE__ */ new Map(), ri = [
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
    ], ts = ["change", "selectionchange", "textInput", "compositionstart", "compositionend", "compositionupdate"], ns = ["drag", "drag", "dragenter", "dragEnter", "dragexit", "dragExit", "dragleave", "dragLeave", "dragover", "dragOver", "mousemove", "mouseMove", "mouseout", "mouseOut", "mouseover", "mouseOver", "pointermove", "pointerMove", "pointerout", "pointerOut", "pointerover", "pointerOver", "scroll", "scroll", "toggle", "toggle", "touchmove", "touchMove", "wheel", "wheel"], ll = ["abort", "abort", Zl, "animationEnd", Ju, "animationIteration", pd, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", es, "transitionEnd", "waiting", "waiting"];
    function rs(e, t) {
      for (var a = 0; a < e.length; a += 2) {
        var l = e[a], f = e[a + 1], p = f[0].toUpperCase() + f.slice(1), y = "on" + p;
        ol.set(l, t), hd.set(l, y), ze(y, [l]);
      }
    }
    function Xl(e, t) {
      for (var a = 0; a < e.length; a++)
        ol.set(e[a], t);
    }
    function U1(e) {
      var t = ol.get(e);
      return t === void 0 ? Ql : t;
    }
    function md() {
      rs(ri, Ec), rs(ns, Zu), rs(ll, Ql), Xl(ts, Ec);
    }
    var Hn = s.unstable_now;
    if (!(c.__interactionsRef != null && c.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
    var as = 99, ai = 98, Ai = 97, ii = 96, gd = 95, j1 = 90;
    Hn();
    var Co = 15, is = 14, os = 13, Jl = 12, ul = 11, bo = 10, eu = 9, sr = 8, tu = 7, kn = 6, cr = 5, fr = 4, ls = 3, So = 2, Br = 1, Pi = 0, yd = 31, le = (
      /*                        */
      0
    ), qn = (
      /*                          */
      0
    ), Vt = (
      /*                        */
      1
    ), Ii = (
      /*                 */
      2
    ), sl = (
      /*      */
      4
    ), us = (
      /*                    */
      24
    ), Cd = (
      /*           */
      32
    ), bd = (
      /*                  */
      192
    ), nu = (
      /*            */
      256
    ), ru = (
      /*                   */
      3584
    ), Sd = (
      /*                */
      4096
    ), zi = (
      /*                       */
      4186112
    ), au = (
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
    ), Ed = (
      /*               */
      134217728
    ), Rc = (
      /*                             */
      805306368
    ), Ia = (
      /*                   */
      1073741824
    ), _n = -1;
    function v0(e) {
    }
    var hn = sr;
    function iu(e) {
      if ((Vt & e) !== le)
        return hn = Co, Vt;
      if ((Ii & e) !== le)
        return hn = is, Ii;
      if ((sl & e) !== le)
        return hn = os, sl;
      var t = us & e;
      if (t !== le)
        return hn = Jl, t;
      if ((e & Cd) !== le)
        return hn = ul, Cd;
      var a = bd & e;
      if (a !== le)
        return hn = bo, a;
      if ((e & nu) !== le)
        return hn = eu, nu;
      var l = ru & e;
      if (l !== le)
        return hn = sr, l;
      if ((e & Sd) !== le)
        return hn = tu, Sd;
      var f = zi & e;
      if (f !== le)
        return hn = kn, f;
      var p = au & e;
      if (p !== le)
        return hn = cr, p;
      if (e & Tc)
        return hn = fr, Tc;
      if ((e & Ed) !== le)
        return hn = ls, Ed;
      var y = Rc & e;
      return y !== le ? (hn = So, y) : (Ia & e) !== le ? (hn = Br, Ia) : (h("Should have found matching lanes. This is a bug in React."), hn = sr, e);
    }
    function wd(e) {
      switch (e) {
        case as:
          return Co;
        case ai:
          return bo;
        case Ai:
        case ii:
          return sr;
        case gd:
          return So;
        default:
          return Pi;
      }
    }
    function kc(e) {
      switch (e) {
        case Co:
        case is:
          return as;
        case os:
        case Jl:
        case ul:
        case bo:
          return ai;
        case eu:
        case sr:
        case tu:
        case kn:
        case fr:
        case cr:
          return Ai;
        case ls:
        case So:
        case Br:
          return gd;
        case Pi:
          return j1;
        default:
          throw Error("Invalid update priority: " + e + ". This is a bug in React.");
      }
    }
    function cs(e, t) {
      var a = e.pendingLanes;
      if (a === le)
        return hn = Pi, le;
      var l = le, f = Pi, p = e.expiredLanes, y = e.suspendedLanes, C = e.pingedLanes;
      if (p !== le)
        l = p, f = hn = Co;
      else {
        var x = a & ss;
        if (x !== le) {
          var O = x & ~y;
          if (O !== le)
            l = iu(O), f = hn;
          else {
            var L = x & C;
            L !== le && (l = iu(L), f = hn);
          }
        } else {
          var Z = a & ~y;
          Z !== le ? (l = iu(Z), f = hn) : C !== le && (l = iu(C), f = hn);
        }
      }
      if (l === le)
        return le;
      if (l = a & W1(l), t !== le && t !== l && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & y) === le) {
        iu(t);
        var $ = hn;
        if (f <= $)
          return t;
        hn = f;
      }
      var J = e.entangledLanes;
      if (J !== le)
        for (var fe = e.entanglements, _e = l & J; _e > 0; ) {
          var lt = wo(_e), Pt = 1 << lt;
          l |= fe[lt], _e &= ~Pt;
        }
      return l;
    }
    function p0(e, t) {
      for (var a = e.eventTimes, l = _n; t > 0; ) {
        var f = wo(t), p = 1 << f, y = a[f];
        y > l && (l = y), t &= ~p;
      }
      return l;
    }
    function h0(e, t) {
      iu(e);
      var a = hn;
      return a >= bo ? t + 250 : a >= kn ? t + 5e3 : _n;
    }
    function m0(e, t) {
      for (var a = e.pendingLanes, l = e.suspendedLanes, f = e.pingedLanes, p = e.expirationTimes, y = a; y > 0; ) {
        var C = wo(y), x = 1 << C, O = p[C];
        O === _n ? ((x & l) === le || (x & f) !== le) && (p[C] = h0(x, t)) : O <= t && (e.expiredLanes |= x), y &= ~x;
      }
    }
    function Ea(e) {
      var t = e.pendingLanes & ~Ia;
      return t !== le ? t : t & Ia ? Ia : le;
    }
    function Xr() {
      return hn;
    }
    function xd(e) {
      return (e & ss) !== le;
    }
    function Td(e) {
      return (e & au) === e;
    }
    function V1(e) {
      return (e & zi) === e;
    }
    function ou(e, t) {
      switch (e) {
        case Pi:
          break;
        case Co:
          return Vt;
        case is:
          return Ii;
        case Jl: {
          var a = dr(us & ~t);
          return a === qn ? ou(bo, t) : a;
        }
        case bo: {
          var l = dr(bd & ~t);
          return l === qn ? ou(sr, t) : l;
        }
        case sr: {
          var f = dr(ru & ~t);
          return f === qn && (f = dr(zi & ~t), f === qn && (f = dr(ru))), f;
        }
        case kn:
        case cr:
          break;
        case So:
          var p = dr(Rc & ~t);
          return p === qn && (p = dr(Rc)), p;
      }
      throw Error("Invalid update priority: " + e + ". This is a bug in React.");
    }
    function F1(e, t) {
      var a = dr(zi & ~t);
      return a === qn && (a = dr(zi & ~e), a === qn && (a = dr(zi))), a;
    }
    function Rd(e) {
      var t = dr(au & ~e);
      return t === qn && (t = dr(au)), t;
    }
    function B1(e) {
      return e & -e;
    }
    function kd(e) {
      var t = 31 - Y1(e);
      return t < 0 ? le : 1 << t;
    }
    function W1(e) {
      return (kd(e) << 1) - 1;
    }
    function dr(e) {
      return B1(e);
    }
    function wo(e) {
      return 31 - Y1(e);
    }
    function K1(e) {
      return wo(e);
    }
    function wr(e, t) {
      return (e & t) !== le;
    }
    function xo(e, t) {
      return (e & t) === t;
    }
    function tn(e, t) {
      return e | t;
    }
    function lu(e, t) {
      return e & ~t;
    }
    function g0(e) {
      return e;
    }
    function Hi(e, t) {
      return e !== qn && e < t ? e : t;
    }
    function _c(e) {
      for (var t = [], a = 0; a < yd; a++)
        t.push(e);
      return t;
    }
    function uu(e, t, a) {
      e.pendingLanes |= t;
      var l = t - 1;
      e.suspendedLanes &= l, e.pingedLanes &= l;
      var f = e.eventTimes, p = K1(t);
      f[p] = a;
    }
    function G1(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, l = t; l > 0; ) {
        var f = wo(l), p = 1 << f;
        a[f] = _n, l &= ~p;
      }
    }
    function _d(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function fs(e) {
      e.expiredLanes |= us & e.pendingLanes;
    }
    function y0(e) {
      return (e & us) !== le;
    }
    function q1(e, t) {
      e.mutableReadLanes |= t & e.pendingLanes;
    }
    function Md(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var l = e.entanglements, f = e.eventTimes, p = e.expirationTimes, y = a; y > 0; ) {
        var C = wo(y), x = 1 << C;
        l[C] = le, f[C] = _n, p[C] = _n, y &= ~x;
      }
    }
    function Od(e, t) {
      e.entangledLanes |= t;
      for (var a = e.entanglements, l = t; l > 0; ) {
        var f = wo(l), p = 1 << f;
        a[f] |= t, l &= ~p;
      }
    }
    var Y1 = Math.clz32 ? Math.clz32 : C0, Q1 = Math.log, Z1 = Math.LN2;
    function C0(e) {
      return e === 0 ? 32 : 31 - (Q1(e) / Z1 | 0) | 0;
    }
    var X1 = s.unstable_UserBlockingPriority, b0 = s.unstable_runWithPriority, Nd = !0;
    function Dd(e) {
      Nd = !!e;
    }
    function J1() {
      return Nd;
    }
    function ep(e, t, a) {
      var l = U1(t), f;
      switch (l) {
        case Ec:
          f = tp;
          break;
        case Zu:
          f = np;
          break;
        case Ql:
        default:
          f = ds;
          break;
      }
      return f.bind(null, t, a, e);
    }
    function tp(e, t, a, l) {
      _1(l.timeStamp), Bl(ds, e, t, a, l);
    }
    function np(e, t, a, l) {
      b0(X1, ds.bind(null, e, t, a, l));
    }
    function ds(e, t, a, l) {
      if (Nd) {
        var f = !0;
        if (f = (t & Yo) === 0, f && bc() && Sc(e)) {
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
          if (Sc(e)) {
            rl(p, e, t, a, l);
            return;
          }
          if (dd(p, e, t, a, l))
            return;
          sa(e, l);
        }
        G2(e, t, l, null, a);
      }
    }
    function vs(e, t, a, l) {
      var f = Wu(l), p = ks(f);
      if (p !== null) {
        var y = ho(p);
        if (y === null)
          p = null;
        else {
          var C = y.tag;
          if (C === U) {
            var x = gc(y);
            if (x !== null)
              return x;
            p = null;
          } else if (C === k) {
            var O = y.stateNode;
            if (O.hydrate)
              return A1(y);
            p = null;
          } else
            y !== p && (p = null);
        }
      }
      return G2(e, t, l, p, a), null;
    }
    function rp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Ld(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function ap(e, t, a, l) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: l
      }), a;
    }
    function S0(e, t, a, l) {
      return e.addEventListener(t, a, {
        passive: l
      }), a;
    }
    var ps = null, su = null, cl = null;
    function St(e) {
      return ps = e, su = xr(), !0;
    }
    function Wr() {
      ps = null, su = null, cl = null;
    }
    function Yn() {
      if (cl)
        return cl;
      var e, t = su, a = t.length, l, f = xr(), p = f.length;
      for (e = 0; e < a && t[e] === f[e]; e++)
        ;
      var y = a - e;
      for (l = 1; l <= y && t[a - l] === f[p - l]; l++)
        ;
      var C = l > 1 ? 1 - l : void 0;
      return cl = f.slice(e, C), cl;
    }
    function xr() {
      return "value" in ps ? ps.value : ps.textContent;
    }
    function oi(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function cu() {
      return !0;
    }
    function vr() {
      return !1;
    }
    function Nr(e) {
      function t(a, l, f, p, y) {
        this._reactName = a, this._targetInst = f, this.type = l, this.nativeEvent = p, this.target = y, this.currentTarget = null;
        for (var C in e)
          if (e.hasOwnProperty(C)) {
            var x = e[C];
            x ? this[C] = x(p) : this[C] = p[C];
          }
        var O = p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1;
        return O ? this.isDefaultPrevented = cu : this.isDefaultPrevented = vr, this.isPropagationStopped = vr, this;
      }
      return o(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = cu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = cu);
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
        isPersistent: cu
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
    function fu(e) {
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
        return "movementX" in e ? e.movementX : (fu(e), hs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : ms;
      }
    }), gs = Nr(Ue), Pd = o({}, Ue, {
      dataTransfer: 0
    }), ui = Nr(Pd), To = o({}, li, {
      relatedTarget: 0
    }), vl = Nr(To), ys = o({}, za, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Id = Nr(ys), zd = o({}, za, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), $i = Nr(zd), Cs = o({}, za, {
      data: 0
    }), Mc = Nr(Cs), Oc = Mc, Ui = {
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
    function bs(e) {
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
      key: bs,
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
    }), Lc = Nr(Ro), wa = o({}, Ue, {
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
    }), Hd = Nr(wa), du = o({}, li, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: si
    }), $d = Nr(du), E0 = o({}, za, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ip = Nr(E0), op = o({}, Ue, {
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
    }), Ac = Nr(op), Ud = [9, 13, 27, 32], pl = 229, Pc = Ze && "CompositionEvent" in window, vu = null;
    Ze && "documentMode" in document && (vu = document.documentMode);
    var Ss = Ze && "TextEvent" in window && !vu, lp = Ze && (!Pc || vu && vu > 8 && vu <= 11), up = 32, jd = String.fromCharCode(up);
    function sp() {
      ze("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ze("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ze("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ze("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ko = !1;
    function w0(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function x0(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function _o(e, t) {
      return e === "keydown" && t.keyCode === pl;
    }
    function cp(e, t) {
      switch (e) {
        case "keyup":
          return Ud.indexOf(t.keyCode) !== -1;
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
    function Vd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function fp(e) {
      return e.locale === "ko";
    }
    var hl = !1;
    function Mo(e, t, a, l, f) {
      var p, y;
      if (Pc ? p = x0(t) : hl ? cp(t, l) && (p = "onCompositionEnd") : _o(t, l) && (p = "onCompositionStart"), !p)
        return null;
      lp && !fp(l) && (!hl && p === "onCompositionStart" ? hl = St(f) : p === "onCompositionEnd" && hl && (y = Yn()));
      var C = mp(a, p);
      if (C.length > 0) {
        var x = new Mc(p, t, null, l, f);
        if (e.push({
          event: x,
          listeners: C
        }), y)
          x.data = y;
        else {
          var O = Vd(l);
          O !== null && (x.data = O);
        }
      }
    }
    function T0(e, t) {
      switch (e) {
        case "compositionend":
          return Vd(t);
        case "keypress":
          var a = t.which;
          return a !== up ? null : (ko = !0, jd);
        case "textInput":
          var l = t.data;
          return l === jd && ko ? null : l;
        default:
          return null;
      }
    }
    function R0(e, t) {
      if (hl) {
        if (e === "compositionend" || !Pc && cp(e, t)) {
          var a = Yn();
          return Wr(), hl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!w0(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return lp && !fp(t) ? null : t.data;
        default:
          return null;
      }
    }
    function dp(e, t, a, l, f) {
      var p;
      if (Ss ? p = T0(t, l) : p = R0(t, l), !p)
        return null;
      var y = mp(a, "onBeforeInput");
      if (y.length > 0) {
        var C = new Oc("onBeforeInput", "beforeinput", null, l, f);
        e.push({
          event: C,
          listeners: y
        }), C.data = p;
      }
    }
    function k0(e, t, a, l, f, p, y) {
      Mo(e, t, a, l, f), dp(e, t, a, l, f);
    }
    var xa = {
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
    function Ic(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!xa[e.type] : t === "textarea";
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
    function _0(e) {
      if (!Ze)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var l = document.createElement("div");
        l.setAttribute(t, "return;"), a = typeof l[t] == "function";
      }
      return a;
    }
    function Oo() {
      ze("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Es(e, t, a, l) {
      Fl(l);
      var f = mp(t, "onChange");
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
    function Bd(e) {
      var t = [];
      Es(t, ml, e, Wu(e)), Ku(M0, t);
    }
    function M0(e) {
      j2(e, 0);
    }
    function zc(e) {
      var t = Kc(e);
      if (to(t))
        return e;
    }
    function Hc(e, t) {
      if (e === "change")
        return t;
    }
    var $c = !1;
    Ze && ($c = _0("input") && (!document.documentMode || document.documentMode > 9));
    function vp(e, t) {
      ci = e, ml = t, ci.attachEvent("onpropertychange", pp);
    }
    function Uc() {
      ci && (ci.detachEvent("onpropertychange", pp), ci = null, ml = null);
    }
    function pp(e) {
      e.propertyName === "value" && zc(ml) && Bd(e);
    }
    function Wd(e, t, a) {
      e === "focusin" ? (Uc(), vp(t, a)) : e === "focusout" && Uc();
    }
    function ws(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return zc(ml);
    }
    function O0(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function jc(e, t) {
      if (e === "click")
        return zc(t);
    }
    function hp(e, t) {
      if (e === "input" || e === "change")
        return zc(t);
    }
    function N0(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ao(e, "number", e.value);
    }
    function xs(e, t, a, l, f, p, y) {
      var C = a ? Kc(a) : window, x, O;
      if (Fd(C) ? x = Hc : Ic(C) ? $c ? x = hp : (x = ws, O = Wd) : O0(C) && (x = jc), x) {
        var L = x(t, a);
        if (L) {
          Es(e, L, l, f);
          return;
        }
      }
      O && O(t, C, a), t === "focusout" && N0(C);
    }
    function D0() {
      Ke("onMouseEnter", ["mouseout", "mouseover"]), Ke("onMouseLeave", ["mouseout", "mouseover"]), Ke("onPointerEnter", ["pointerout", "pointerover"]), Ke("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Vc(e, t, a, l, f, p, y) {
      var C = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout";
      if (C && !(p & R1)) {
        var O = l.relatedTarget || l.fromElement;
        if (O && (ks(O) || Rp(O)))
          return;
      }
      if (!(!x && !C)) {
        var L;
        if (f.window === f)
          L = f;
        else {
          var Z = f.ownerDocument;
          Z ? L = Z.defaultView || Z.parentWindow : L = window;
        }
        var $, J;
        if (x) {
          var fe = l.relatedTarget || l.toElement;
          if ($ = a, J = fe ? ks(fe) : null, J !== null) {
            var _e = ho(J);
            (J !== _e || J.tag !== A && J.tag !== P) && (J = null);
          }
        } else
          $ = null, J = a;
        if ($ !== J) {
          var lt = gs, Pt = "onMouseLeave", ht = "onMouseEnter", Jt = "mouse";
          (t === "pointerout" || t === "pointerover") && (lt = Hd, Pt = "onPointerLeave", ht = "onPointerEnter", Jt = "pointer");
          var bn = $ == null ? L : Kc($), X = J == null ? L : Kc(J), ae = new lt(Pt, Jt + "leave", $, l, f);
          ae.target = bn, ae.relatedTarget = X;
          var G = null, Ce = ks(f);
          if (Ce === a) {
            var De = new lt(ht, Jt + "enter", J, l, f);
            De.target = X, De.relatedTarget = bn, G = De;
          }
          y9(e, ae, G, $, J);
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
    function b(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function R(e, t) {
      for (var a = g(e), l = 0, f = 0; a; ) {
        if (a.nodeType === ki) {
          if (f = l + a.textContent.length, l <= t && f >= t)
            return {
              node: a,
              offset: t - l
            };
          l = f;
        }
        a = g(b(a));
      }
    }
    function M(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, l = a.getSelection && a.getSelection();
      if (!l || l.rangeCount === 0)
        return null;
      var f = l.anchorNode, p = l.anchorOffset, y = l.focusNode, C = l.focusOffset;
      try {
        f.nodeType, y.nodeType;
      } catch (x) {
        return null;
      }
      return H(e, f, p, y, C);
    }
    function H(e, t, a, l, f) {
      var p = 0, y = -1, C = -1, x = 0, O = 0, L = e, Z = null;
      e:
        for (; ; ) {
          for (var $ = null; L === t && (a === 0 || L.nodeType === ki) && (y = p + a), L === l && (f === 0 || L.nodeType === ki) && (C = p + f), L.nodeType === ki && (p += L.nodeValue.length), ($ = L.firstChild) !== null; )
            Z = L, L = $;
          for (; ; ) {
            if (L === e)
              break e;
            if (Z === t && ++x === a && (y = p), Z === l && ++O === f && (C = p), ($ = L.nextSibling) !== null)
              break;
            L = Z, Z = L.parentNode;
          }
          L = $;
        }
      return y === -1 || C === -1 ? null : {
        start: y,
        end: C
      };
    }
    function ee(e, t) {
      var a = e.ownerDocument || document, l = a && a.defaultView || window;
      if (l.getSelection) {
        var f = l.getSelection(), p = e.textContent.length, y = Math.min(t.start, p), C = t.end === void 0 ? y : Math.min(t.end, p);
        if (!f.extend && y > C) {
          var x = C;
          C = y, y = x;
        }
        var O = R(e, y), L = R(e, C);
        if (O && L) {
          if (f.rangeCount === 1 && f.anchorNode === O.node && f.anchorOffset === O.offset && f.focusNode === L.node && f.focusOffset === L.offset)
            return;
          var Z = a.createRange();
          Z.setStart(O.node, O.offset), f.removeAllRanges(), y > C ? (f.addRange(Z), f.extend(L.node, L.offset)) : (Z.setEnd(L.node, L.offset), f.addRange(Z));
        }
      }
    }
    function Ae(e) {
      return e && e.nodeType === ki;
    }
    function Et(e, t) {
      return !e || !t ? !1 : e === t ? !0 : Ae(e) ? !1 : Ae(t) ? Et(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
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
    function Ct() {
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
    function q() {
      var e = Ct();
      return {
        focusedElem: e,
        selectionRange: ft(e) ? K(e) : null
      };
    }
    function F(e) {
      var t = Ct(), a = e.focusedElem, l = e.selectionRange;
      if (t !== a && me(a)) {
        l !== null && ft(a) && oe(a, l);
        for (var f = [], p = a; p = p.parentNode; )
          p.nodeType === ya && f.push({
            element: p,
            left: p.scrollLeft,
            top: p.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var y = 0; y < f.length; y++) {
          var C = f[y];
          C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
        }
      }
    }
    function K(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = M(e), t || {
        start: 0,
        end: 0
      };
    }
    function oe(e, t) {
      var a = t.start, l = t.end;
      l === void 0 && (l = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(l, e.value.length)) : ee(e, t);
    }
    var ce = Ze && "documentMode" in document && document.documentMode <= 11;
    function Rt() {
      ze("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var je = null, wt = null, At = null, kt = !1;
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
    function L0(e) {
      return e.window === e ? e.document : e.nodeType === lo ? e : e.ownerDocument;
    }
    function H2(e, t, a) {
      var l = L0(a);
      if (!(kt || je == null || je !== Ti(l))) {
        var f = No(je);
        if (!At || !v(At, f)) {
          At = f;
          var p = mp(wt, "onSelect");
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
    function f9(e, t, a, l, f, p, y) {
      var C = a ? Kc(a) : window;
      switch (t) {
        case "focusin":
          (Ic(C) || C.contentEditable === "true") && (je = C, wt = a, At = null);
          break;
        case "focusout":
          je = null, wt = null, At = null;
          break;
        case "mousedown":
          kt = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          kt = !1, H2(e, l, f);
          break;
        case "selectionchange":
          if (ce)
            break;
        case "keydown":
        case "keyup":
          H2(e, l, f);
      }
    }
    function d9(e, t, a, l, f, p, y) {
      var C = hd.get(t);
      if (C !== void 0) {
        var x = fl, O = t;
        switch (t) {
          case "keypress":
            if (oi(l) === 0)
              return;
          case "keydown":
          case "keyup":
            x = Lc;
            break;
          case "focusin":
            O = "focus", x = vl;
            break;
          case "focusout":
            O = "blur", x = vl;
            break;
          case "beforeblur":
          case "afterblur":
            x = vl;
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
            x = gs;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = ui;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = $d;
            break;
          case Zl:
          case Ju:
          case pd:
            x = Id;
            break;
          case es:
            x = ip;
            break;
          case "scroll":
            x = Ad;
            break;
          case "wheel":
            x = Ac;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = $i;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = Hd;
            break;
        }
        var L = (p & Yo) !== 0;
        {
          var Z = !L && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", $ = m9(a, C, l.type, L, Z);
          if ($.length > 0) {
            var J = new x(C, O, null, l, f);
            e.push({
              event: J,
              listeners: $
            });
          }
        }
      }
    }
    md(), D0(), Oo(), Rt(), sp();
    function v9(e, t, a, l, f, p, y) {
      d9(e, t, a, l, f, p);
      var C = (p & Vl) === 0;
      C && (Vc(e, t, a, l, f, p), xs(e, t, a, l, f), f9(e, t, a, l, f), k0(e, t, a, l, f));
    }
    var Kd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], $2 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Kd));
    function U2(e, t, a) {
      var l = e.type || "unknown-event";
      e.currentTarget = a, N1(l, t, void 0, e), e.currentTarget = null;
    }
    function p9(e, t, a) {
      var l;
      if (a)
        for (var f = t.length - 1; f >= 0; f--) {
          var p = t[f], y = p.instance, C = p.currentTarget, x = p.listener;
          if (y !== l && e.isPropagationStopped())
            return;
          U2(e, x, C), l = y;
        }
      else
        for (var O = 0; O < t.length; O++) {
          var L = t[O], Z = L.instance, $ = L.currentTarget, J = L.listener;
          if (Z !== l && e.isPropagationStopped())
            return;
          U2(e, J, $), l = Z;
        }
    }
    function j2(e, t) {
      for (var a = (t & Yo) !== 0, l = 0; l < e.length; l++) {
        var f = e[l], p = f.event, y = f.listeners;
        p9(p, y, a);
      }
      Jo();
    }
    function h9(e, t, a, l, f) {
      var p = Wu(a), y = [];
      v9(y, e, l, a, p, t), j2(y, t);
    }
    function Dn(e, t) {
      var a = !1, l = bC(t), f = Y2(e, a);
      l.has(f) || (W2(t, e, Bu, a), l.add(f));
    }
    var V2 = "_reactListening" + Math.random().toString(36).slice(2);
    function F2(e) {
      {
        if (e[V2])
          return;
        e[V2] = !0, ie.forEach(function(t) {
          $2.has(t) || B2(t, !1, e, null), B2(t, !0, e, null);
        });
      }
    }
    function B2(e, t, a, l) {
      var f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, p = a;
      if (e === "selectionchange" && a.nodeType !== lo && (p = a.ownerDocument), l !== null && !t && $2.has(e)) {
        if (e !== "scroll")
          return;
        f |= Bu, p = l;
      }
      var y = bC(p), C = Y2(e, t);
      y.has(C) || (t && (f |= Yo), W2(p, e, f, t), y.add(C));
    }
    function W2(e, t, a, l, f) {
      var p = ep(e, t, a), y = void 0;
      Gu && (t === "touchstart" || t === "touchmove" || t === "wheel") && (y = !0), e = e, l ? y !== void 0 ? ap(e, t, p, y) : Ld(e, t, p) : y !== void 0 ? S0(e, t, p, y) : rp(e, t, p);
    }
    function K2(e, t) {
      return e === t || e.nodeType === $r && e.parentNode === t;
    }
    function G2(e, t, a, l, f) {
      var p = l;
      if (!(t & Qf) && !(t & Bu)) {
        var y = f;
        if (l !== null) {
          var C = l;
          e:
            for (; ; ) {
              if (C === null)
                return;
              var x = C.tag;
              if (x === k || x === N) {
                var O = C.stateNode.containerInfo;
                if (K2(O, y))
                  break;
                if (x === N)
                  for (var L = C.return; L !== null; ) {
                    var Z = L.tag;
                    if (Z === k || Z === N) {
                      var $ = L.stateNode.containerInfo;
                      if (K2($, y))
                        return;
                    }
                    L = L.return;
                  }
                for (; O !== null; ) {
                  var J = ks(O);
                  if (J === null)
                    return;
                  var fe = J.tag;
                  if (fe === A || fe === P) {
                    C = p = J;
                    continue e;
                  }
                  O = O.parentNode;
                }
              }
              C = C.return;
            }
        }
      }
      dc(function() {
        return h9(e, t, a, p);
      });
    }
    function Gd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function m9(e, t, a, l, f) {
      for (var p = t !== null ? t + "Capture" : null, y = l ? p : t, C = [], x = e, O = null; x !== null; ) {
        var L = x, Z = L.stateNode, $ = L.tag;
        if ($ === A && Z !== null && (O = Z, y !== null)) {
          var J = Wl(x, y);
          J != null && C.push(Gd(x, J, O));
        }
        if (f)
          break;
        x = x.return;
      }
      return C;
    }
    function mp(e, t) {
      for (var a = t + "Capture", l = [], f = e; f !== null; ) {
        var p = f, y = p.stateNode, C = p.tag;
        if (C === A && y !== null) {
          var x = y, O = Wl(f, a);
          O != null && l.unshift(Gd(f, O, x));
          var L = Wl(f, t);
          L != null && l.push(Gd(f, L, x));
        }
        f = f.return;
      }
      return l;
    }
    function Fc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== A);
      return e || null;
    }
    function g9(e, t) {
      for (var a = e, l = t, f = 0, p = a; p; p = Fc(p))
        f++;
      for (var y = 0, C = l; C; C = Fc(C))
        y++;
      for (; f - y > 0; )
        a = Fc(a), f--;
      for (; y - f > 0; )
        l = Fc(l), y--;
      for (var x = f; x--; ) {
        if (a === l || l !== null && a === l.alternate)
          return a;
        a = Fc(a), l = Fc(l);
      }
      return null;
    }
    function q2(e, t, a, l, f) {
      for (var p = t._reactName, y = [], C = a; C !== null && C !== l; ) {
        var x = C, O = x.alternate, L = x.stateNode, Z = x.tag;
        if (O !== null && O === l)
          break;
        if (Z === A && L !== null) {
          var $ = L;
          if (f) {
            var J = Wl(C, p);
            J != null && y.unshift(Gd(C, J, $));
          } else if (!f) {
            var fe = Wl(C, p);
            fe != null && y.push(Gd(C, fe, $));
          }
        }
        C = C.return;
      }
      y.length !== 0 && e.push({
        event: t,
        listeners: y
      });
    }
    function y9(e, t, a, l, f) {
      var p = l && f ? g9(l, f) : null;
      l !== null && q2(e, t, l, p, !1), f !== null && a !== null && q2(e, a, f, p, !0);
    }
    function Y2(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ta = !1, qd = "dangerouslySetInnerHTML", gp = "suppressContentEditableWarning", Yd = "suppressHydrationWarning", Q2 = "autoFocus", Ts = "children", Rs = "style", yp = "__html", Bc = ac.html, A0, Qd, Cp, bp, Zd, Z2, Sp, X2, Xd, J2;
    {
      A0 = {
        // There are working polyfills for <dialog>. Let people use it.
        dialog: !0,
        // Electron ships a custom <webview> tag to display external web content in
        // an isolated frame and process.
        // This tag is not present in non Electron environments such as JSDom which
        // is often used for testing purposes.
        // @see https://electronjs.org/docs/api/webview-tag
        webview: !0
      }, Cp = function(e, t) {
        S1(e, t), s0(e, t), T1(e, t, {
          registrationNameDependencies: he,
          possibleRegistrationNames: Se
        });
      }, X2 = Ze && !document.documentMode;
      var C9 = /\r\n?/g, b9 = /\u0000|\uFFFD/g;
      Xd = function(e) {
        var t = typeof e == "string" ? e : "" + e;
        return t.replace(C9, `
`).replace(b9, "");
      }, bp = function(e, t) {
        if (!Ta) {
          var a = Xd(t), l = Xd(e);
          l !== a && (Ta = !0, h('Text content did not match. Server: "%s" Client: "%s"', l, a));
        }
      }, Zd = function(e, t, a) {
        if (!Ta) {
          var l = Xd(a), f = Xd(t);
          f !== l && (Ta = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(f), JSON.stringify(l)));
        }
      }, Z2 = function(e) {
        if (!Ta) {
          Ta = !0;
          var t = [];
          e.forEach(function(a) {
            t.push(a);
          }), h("Extra attributes from the server: %s", t);
        }
      }, Sp = function(e, t) {
        t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
      }, J2 = function(e, t) {
        var a = e.namespaceURI === Bc ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
        return a.innerHTML = t, a.innerHTML;
      };
    }
    function eC(e) {
      return e.nodeType === lo ? e : e.ownerDocument;
    }
    function S9() {
    }
    function Ep(e) {
      e.onclick = S9;
    }
    function E9(e, t, a, l, f) {
      for (var p in l)
        if (l.hasOwnProperty(p)) {
          var y = l[p];
          if (p === Rs)
            y && Object.freeze(y), Kf(t, y);
          else if (p === qd) {
            var C = y ? y[yp] : void 0;
            C != null && i1(t, C);
          } else if (p === Ts)
            if (typeof y == "string") {
              var x = e !== "textarea" || y !== "";
              x && oc(t, y);
            } else
              typeof y == "number" && oc(t, "" + y);
          else
            p === gp || p === Yd || p === Q2 || (he.hasOwnProperty(p) ? y != null && (typeof y != "function" && Sp(p, y), p === "onScroll" && Dn("scroll", t)) : y != null && st(t, p, y, f));
        }
    }
    function w9(e, t, a, l) {
      for (var f = 0; f < t.length; f += 2) {
        var p = t[f], y = t[f + 1];
        p === Rs ? Kf(e, y) : p === qd ? i1(e, y) : p === Ts ? oc(e, y) : st(e, p, y, l);
      }
    }
    function x9(e, t, a, l) {
      var f, p = eC(a), y, C = l;
      if (C === Bc && (C = $u(e)), C === Bc) {
        if (f = La(e, t), !f && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var x = p.createElement("div");
          x.innerHTML = "<script><\/script>";
          var O = x.firstChild;
          y = x.removeChild(O);
        } else if (typeof t.is == "string")
          y = p.createElement(e, {
            is: t.is
          });
        else if (y = p.createElement(e), e === "select") {
          var L = y;
          t.multiple ? L.multiple = !0 : t.size && (L.size = t.size);
        }
      } else
        y = p.createElementNS(C, e);
      return C === Bc && !f && Object.prototype.toString.call(y) === "[object HTMLUnknownElement]" && !Object.prototype.hasOwnProperty.call(A0, e) && (A0[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), y;
    }
    function T9(e, t) {
      return eC(t).createTextNode(e);
    }
    function R9(e, t, a, l) {
      var f = La(t, a);
      Cp(t, a);
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
          for (var y = 0; y < Kd.length; y++)
            Dn(Kd[y], e);
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
          r1(e, a), p = If(e, a);
          break;
        case "select":
          nc(e, a), p = zu(e, a), Dn("invalid", e);
          break;
        case "textarea":
          Hu(e, a), p = zl(e, a), Dn("invalid", e);
          break;
        default:
          p = a;
      }
      switch (lc(t, p), E9(t, e, l, p, f), t) {
        case "input":
          Da(e), Xa(e, a, !1);
          break;
        case "textarea":
          Da(e), Zr(e);
          break;
        case "option":
          qm(e, a);
          break;
        case "select":
          oo(e, a);
          break;
        default:
          typeof p.onClick == "function" && Ep(e);
          break;
      }
    }
    function k9(e, t, a, l, f) {
      Cp(t, l);
      var p = null, y, C;
      switch (t) {
        case "input":
          y = ct(e, a), C = ct(e, l), p = [];
          break;
        case "option":
          y = If(e, a), C = If(e, l), p = [];
          break;
        case "select":
          y = zu(e, a), C = zu(e, l), p = [];
          break;
        case "textarea":
          y = zl(e, a), C = zl(e, l), p = [];
          break;
        default:
          y = a, C = l, typeof y.onClick != "function" && typeof C.onClick == "function" && Ep(e);
          break;
      }
      lc(t, C);
      var x, O, L = null;
      for (x in y)
        if (!(C.hasOwnProperty(x) || !y.hasOwnProperty(x) || y[x] == null))
          if (x === Rs) {
            var Z = y[x];
            for (O in Z)
              Z.hasOwnProperty(O) && (L || (L = {}), L[O] = "");
          } else
            x === qd || x === Ts || x === gp || x === Yd || x === Q2 || (he.hasOwnProperty(x) ? p || (p = []) : (p = p || []).push(x, null));
      for (x in C) {
        var $ = C[x], J = y != null ? y[x] : void 0;
        if (!(!C.hasOwnProperty(x) || $ === J || $ == null && J == null))
          if (x === Rs)
            if ($ && Object.freeze($), J) {
              for (O in J)
                J.hasOwnProperty(O) && (!$ || !$.hasOwnProperty(O)) && (L || (L = {}), L[O] = "");
              for (O in $)
                $.hasOwnProperty(O) && J[O] !== $[O] && (L || (L = {}), L[O] = $[O]);
            } else
              L || (p || (p = []), p.push(x, L)), L = $;
          else if (x === qd) {
            var fe = $ ? $[yp] : void 0, _e = J ? J[yp] : void 0;
            fe != null && _e !== fe && (p = p || []).push(x, fe);
          } else
            x === Ts ? (typeof $ == "string" || typeof $ == "number") && (p = p || []).push(x, "" + $) : x === gp || x === Yd || (he.hasOwnProperty(x) ? ($ != null && (typeof $ != "function" && Sp(x, $), x === "onScroll" && Dn("scroll", e)), !p && J !== $ && (p = [])) : typeof $ == "object" && $ !== null && $.$$typeof === gn ? $.toString() : (p = p || []).push(x, $));
      }
      return L && (i0(L, C[Rs]), (p = p || []).push(Rs, L)), p;
    }
    function _9(e, t, a, l, f) {
      a === "input" && f.type === "radio" && f.name != null && Sn(e, f);
      var p = La(a, l), y = La(a, f);
      switch (w9(e, t, p, y), a) {
        case "input":
          ro(e, f);
          break;
        case "textarea":
          Uf(e, f);
          break;
        case "select":
          Hf(e, f);
          break;
      }
    }
    function M9(e) {
      {
        var t = e.toLowerCase();
        return uo.hasOwnProperty(t) && uo[t] || null;
      }
    }
    function O9(e, t, a, l, f) {
      var p, y;
      switch (Qd = a[Yd] === !0, p = La(t, a), Cp(t, a), t) {
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
          for (var C = 0; C < Kd.length; C++)
            Dn(Kd[C], e);
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
          r1(e, a);
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
        for (var x = e.attributes, O = 0; O < x.length; O++) {
          var L = x[O].name.toLowerCase();
          switch (L) {
            case "data-reactroot":
              break;
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(x[O].name);
          }
        }
      }
      var Z = null;
      for (var $ in a)
        if (a.hasOwnProperty($)) {
          var J = a[$];
          if ($ === Ts)
            typeof J == "string" ? e.textContent !== J && (Qd || bp(e.textContent, J), Z = [Ts, J]) : typeof J == "number" && e.textContent !== "" + J && (Qd || bp(e.textContent, J), Z = [Ts, "" + J]);
          else if (he.hasOwnProperty($))
            J != null && (typeof J != "function" && Sp($, J), $ === "onScroll" && Dn("scroll", e));
          else if (
            // Convince Flow we've calculated it (it's DEV-only in this method.)
            typeof p == "boolean"
          ) {
            var fe = void 0, _e = Qt($);
            if (!Qd) {
              if (!($ === gp || $ === Yd || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              $ === "value" || $ === "checked" || $ === "selected")) {
                if ($ === qd) {
                  var lt = e.innerHTML, Pt = J ? J[yp] : void 0;
                  if (Pt != null) {
                    var ht = J2(e, Pt);
                    ht !== lt && Zd($, lt, ht);
                  }
                } else if ($ === Rs) {
                  if (y.delete($), X2) {
                    var Jt = h1(J);
                    fe = e.getAttribute("style"), Jt !== fe && Zd($, fe, Jt);
                  }
                } else if (p)
                  y.delete($.toLowerCase()), fe = rt(e, $, J), J !== fe && Zd($, fe, J);
                else if (!Xt($, _e, p) && !Wt($, J, _e, p)) {
                  var bn = !1;
                  if (_e !== null)
                    y.delete(_e.attributeName), fe = Mt(e, $, J, _e);
                  else {
                    var X = l;
                    if (X === Bc && (X = $u(t)), X === Bc)
                      y.delete($.toLowerCase());
                    else {
                      var ae = M9($);
                      ae !== null && ae !== $ && (bn = !0, y.delete(ae)), y.delete($);
                    }
                    fe = rt(e, $, J);
                  }
                  J !== fe && !bn && Zd($, fe, J);
                }
              }
            }
          }
        }
      switch (y.size > 0 && !Qd && Z2(y), t) {
        case "input":
          Da(e), Xa(e, a, !0);
          break;
        case "textarea":
          Da(e), Zr(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Ep(e);
          break;
      }
      return Z;
    }
    function N9(e, t) {
      var a = e.nodeValue !== t;
      return a;
    }
    function tC(e, t) {
      bp(e.nodeValue, t);
    }
    function nC(e, t) {
      {
        if (Ta)
          return;
        Ta = !0, h("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function rC(e, t) {
      {
        if (Ta)
          return;
        Ta = !0, h('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function aC(e, t, a) {
      {
        if (Ta)
          return;
        Ta = !0, h("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function iC(e, t) {
      {
        if (t === "" || Ta)
          return;
        Ta = !0, h('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function D9(e, t, a) {
      switch (t) {
        case "input":
          Au(e, a);
          return;
        case "textarea":
          Hl(e, a);
          return;
        case "select":
          rc(e, a);
          return;
      }
    }
    var Jd = function() {
    }, ev = function() {
    };
    {
      var L9 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], oC = [
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
      ], A9 = oC.concat(["button"]), P9 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], lC = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ev = function(e, t) {
        var a = o({}, e || lC), l = {
          tag: t
        };
        return oC.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), A9.indexOf(t) !== -1 && (a.pTagInButtonScope = null), L9.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = l, t === "form" && (a.formTag = l), t === "a" && (a.aTagInScope = l), t === "button" && (a.buttonTagInScope = l), t === "nobr" && (a.nobrTagInScope = l), t === "p" && (a.pTagInButtonScope = l), t === "li" && (a.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = l), a;
      };
      var I9 = function(e, t) {
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
            return P9.indexOf(t) === -1;
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
      }, z9 = function(e, t) {
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
      }, uC = {};
      Jd = function(e, t, a) {
        a = a || lC;
        var l = a.current, f = l && l.tag;
        t != null && (e != null && h("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var p = I9(e, f) ? null : l, y = p ? null : z9(e, a), C = p || y;
        if (C) {
          var x = C.tag, O = !!p + "|" + e + "|" + x;
          if (!uC[O]) {
            uC[O] = !0;
            var L = e, Z = "";
            if (e === "#text" ? /\S/.test(t) ? L = "Text nodes" : (L = "Whitespace text nodes", Z = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : L = "<" + e + ">", p) {
              var $ = "";
              x === "table" && e === "tr" && ($ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", L, x, Z, $);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", L, x);
          }
        }
      };
    }
    var Wc;
    Wc = "suppressHydrationWarning";
    var sC = "$", cC = "/$", P0 = "$?", I0 = "$!", H9 = "style", z0 = null, H0 = null;
    function fC(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function $9(e) {
      var t, a, l = e.nodeType;
      switch (l) {
        case lo:
        case o1: {
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
        var C = t.toLowerCase(), x = ev(null, C);
        return {
          namespace: a,
          ancestorInfo: x
        };
      }
    }
    function U9(e, t, a) {
      {
        var l = e, f = Go(l.namespace, t), p = ev(l.ancestorInfo, t);
        return {
          namespace: f,
          ancestorInfo: p
        };
      }
    }
    function pL(e) {
      return e;
    }
    function j9(e) {
      z0 = J1(), H0 = q();
      var t = null;
      return Dd(!1), t;
    }
    function V9(e) {
      F(H0), Dd(z0), z0 = null, H0 = null;
    }
    function F9(e, t, a, l, f) {
      var p;
      {
        var y = l;
        if (Jd(e, null, y.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var C = "" + t.children, x = ev(y.ancestorInfo, e);
          Jd(null, C, x);
        }
        p = y.namespace;
      }
      var O = x9(e, t, a, p);
      return Tp(f, O), V0(O, t), O;
    }
    function B9(e, t) {
      e.appendChild(t);
    }
    function W9(e, t, a, l, f) {
      return R9(e, t, a, l), fC(t, a);
    }
    function K9(e, t, a, l, f, p) {
      {
        var y = p;
        if (typeof l.children != typeof a.children && (typeof l.children == "string" || typeof l.children == "number")) {
          var C = "" + l.children, x = ev(y.ancestorInfo, t);
          Jd(null, C, x);
        }
      }
      return k9(e, t, a, l);
    }
    function $0(e, t) {
      return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function G9(e, t, a, l) {
      {
        var f = a;
        Jd(null, e, f.ancestorInfo);
      }
      var p = T9(e, t);
      return Tp(l, p), p;
    }
    var dC = typeof setTimeout == "function" ? setTimeout : void 0, q9 = typeof clearTimeout == "function" ? clearTimeout : void 0, U0 = -1;
    function Y9(e, t, a, l) {
      fC(t, a) && e.focus();
    }
    function Q9(e, t, a, l, f, p) {
      V0(e, f), _9(e, t, a, l, f);
    }
    function vC(e) {
      oc(e, "");
    }
    function Z9(e, t, a) {
      e.nodeValue = a;
    }
    function X9(e, t) {
      e.appendChild(t);
    }
    function J9(e, t) {
      var a;
      e.nodeType === $r ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var l = e._reactRootContainer;
      l == null && a.onclick === null && Ep(a);
    }
    function eE(e, t, a) {
      e.insertBefore(t, a);
    }
    function tE(e, t, a) {
      e.nodeType === $r ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function nE(e, t) {
      e.removeChild(t);
    }
    function rE(e, t) {
      e.nodeType === $r ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function aE(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function iE(e) {
      e.nodeValue = "";
    }
    function oE(e, t) {
      e = e;
      var a = t[H9], l = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Vf("display", l);
    }
    function lE(e, t) {
      e.nodeValue = t;
    }
    function j0(e) {
      if (e.nodeType === ya)
        e.textContent = "";
      else if (e.nodeType === lo) {
        var t = e.body;
        t != null && (t.textContent = "");
      }
    }
    function uE(e, t, a) {
      return e.nodeType !== ya || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function sE(e, t) {
      return t === "" || e.nodeType !== ki ? null : e;
    }
    function cE(e) {
      return e.data === P0;
    }
    function fE(e) {
      return e.data === I0;
    }
    function pC(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ya || t === ki)
          break;
      }
      return e;
    }
    function wp(e) {
      return pC(e.nextSibling);
    }
    function hC(e) {
      return pC(e.firstChild);
    }
    function dE(e, t, a, l, f, p) {
      Tp(p, e), V0(e, a);
      var y;
      {
        var C = f;
        y = C.namespace;
      }
      return O9(e, t, a, y);
    }
    function vE(e, t, a) {
      return Tp(a, e), N9(e, t);
    }
    function pE(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === $r) {
          var l = t.data;
          if (l === cC) {
            if (a === 0)
              return wp(t);
            a--;
          } else
            (l === sC || l === I0 || l === P0) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function mC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === $r) {
          var l = t.data;
          if (l === sC || l === I0 || l === P0) {
            if (a === 0)
              return t;
            a--;
          } else
            l === cC && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function hE(e) {
      vd(e);
    }
    function mE(e) {
      vd(e);
    }
    function gE(e, t, a) {
      tC(t, a);
    }
    function yE(e, t, a, l, f) {
      t[Wc] !== !0 && tC(l, f);
    }
    function CE(e, t) {
      t.nodeType === ya ? nC(e, t) : t.nodeType === $r || rC(e, t);
    }
    function bE(e, t, a, l) {
      t[Wc] !== !0 && (l.nodeType === ya ? nC(a, l) : l.nodeType === $r || rC(a, l));
    }
    function SE(e, t, a) {
      aC(e, t);
    }
    function EE(e, t) {
      iC(e, t);
    }
    function wE(e, t, a, l, f) {
      t[Wc] !== !0 && aC(a, l);
    }
    function xE(e, t, a, l) {
      t[Wc] !== !0 && iC(a, l);
    }
    function TE(e, t, a) {
      t[Wc];
    }
    var RE = 0;
    function kE(e) {
      var t = "r:" + (RE++).toString(36);
      return {
        toString: function() {
          return e(), t;
        },
        valueOf: function() {
          return e(), t;
        }
      };
    }
    function _E(e) {
      return e !== null && typeof e == "object" && e.$$typeof === gn;
    }
    function ME(e) {
      return {
        $$typeof: gn,
        toString: e,
        valueOf: e
      };
    }
    function OE(e) {
      F2(e);
    }
    var xp = Math.random().toString(36).slice(2), tv = "__reactFiber$" + xp, gC = "__reactProps$" + xp, nv = "__reactContainer$" + xp, yC = "__reactEvents$" + xp;
    function Tp(e, t) {
      t[tv] = e;
    }
    function NE(e, t) {
      t[nv] = e;
    }
    function CC(e) {
      e[nv] = null;
    }
    function Rp(e) {
      return !!e[nv];
    }
    function ks(e) {
      var t = e[tv];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[nv] || a[tv], t) {
          var l = t.alternate;
          if (t.child !== null || l !== null && l.child !== null)
            for (var f = mC(e); f !== null; ) {
              var p = f[tv];
              if (p)
                return p;
              f = mC(f);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function pu(e) {
      var t = e[tv] || e[nv];
      return t && (t.tag === A || t.tag === P || t.tag === U || t.tag === k) ? t : null;
    }
    function Kc(e) {
      if (e.tag === A || e.tag === P)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function kp(e) {
      return e[gC] || null;
    }
    function V0(e, t) {
      e[gC] = t;
    }
    function bC(e) {
      var t = e[yC];
      return t === void 0 && (t = e[yC] = /* @__PURE__ */ new Set()), t;
    }
    var SC = {}, EC = d.ReactDebugCurrentFrame;
    function _p(e) {
      if (e) {
        var t = e._owner, a = In(e.type, e._source, t ? t.type : null);
        EC.setExtraStackFrame(a);
      } else
        EC.setExtraStackFrame(null);
    }
    function ji(e, t, a, l, f) {
      {
        var p = Function.call.bind(Object.prototype.hasOwnProperty);
        for (var y in e)
          if (p(e, y)) {
            var C = void 0;
            try {
              if (typeof e[y] != "function") {
                var x = Error((l || "React class") + ": " + a + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              C = e[y](t, y, l, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              C = O;
            }
            C && !(C instanceof Error) && (_p(f), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, y, typeof C), _p(null)), C instanceof Error && !(C.message in SC) && (SC[C.message] = !0, _p(f), h("Failed %s type: %s", a, C.message), _p(null));
          }
      }
    }
    var F0 = [], Mp;
    Mp = [];
    var gl = -1;
    function hu(e) {
      return {
        current: e
      };
    }
    function Jr(e, t) {
      if (gl < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== Mp[gl] && h("Unexpected Fiber popped."), e.current = F0[gl], F0[gl] = null, Mp[gl] = null, gl--;
    }
    function ea(e, t, a) {
      gl++, F0[gl] = e.current, Mp[gl] = a, e.current = t;
    }
    var B0;
    B0 = {};
    var Ha = {};
    Object.freeze(Ha);
    var yl = hu(Ha), Do = hu(!1), W0 = Ha;
    function Gc(e, t, a) {
      return a && Lo(t) ? W0 : yl.current;
    }
    function wC(e, t, a) {
      {
        var l = e.stateNode;
        l.__reactInternalMemoizedUnmaskedChildContext = t, l.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function qc(e, t) {
      {
        var a = e.type, l = a.contextTypes;
        if (!l)
          return Ha;
        var f = e.stateNode;
        if (f && f.__reactInternalMemoizedUnmaskedChildContext === t)
          return f.__reactInternalMemoizedMaskedChildContext;
        var p = {};
        for (var y in l)
          p[y] = t[y];
        {
          var C = ke(a) || "Unknown";
          ji(l, p, "context", C);
        }
        return f && wC(e, t, p), p;
      }
    }
    function Op() {
      return Do.current;
    }
    function Lo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Np(e) {
      Jr(Do, e), Jr(yl, e);
    }
    function K0(e) {
      Jr(Do, e), Jr(yl, e);
    }
    function xC(e, t, a) {
      {
        if (yl.current !== Ha)
          throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ea(yl, t, e), ea(Do, a, e);
      }
    }
    function TC(e, t, a) {
      {
        var l = e.stateNode, f = t.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var p = ke(t) || "Unknown";
            B0[p] || (B0[p] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", p, p));
          }
          return a;
        }
        var y = l.getChildContext();
        for (var C in y)
          if (!(C in f))
            throw Error((ke(t) || "Unknown") + '.getChildContext(): key "' + C + '" is not defined in childContextTypes.');
        {
          var x = ke(t) || "Unknown";
          ji(f, y, "child context", x);
        }
        return o({}, a, y);
      }
    }
    function Dp(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ha;
        return W0 = yl.current, ea(yl, a, e), ea(Do, Do.current, e), !0;
      }
    }
    function RC(e, t, a) {
      {
        var l = e.stateNode;
        if (!l)
          throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var f = TC(e, t, W0);
          l.__reactInternalMemoizedMergedChildContext = f, Jr(Do, e), Jr(yl, e), ea(yl, f, e), ea(Do, a, e);
        } else
          Jr(Do, e), ea(Do, a, e);
      }
    }
    function DE(e) {
      {
        if (!(yc(e) && e.tag === w))
          throw Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case k:
              return t.stateNode.context;
            case w: {
              var a = t.type;
              if (Lo(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var G0 = 0, kC = 1, _C = 2, Lp = null, Ao = null, Yc = !1, LE = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined";
    function AE(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Lp = t.inject(e), Ao = t;
      } catch (a) {
        h("React instrumentation encountered an error: %s.", a);
      }
      return !0;
    }
    function PE(e, t) {
      if (Ao && typeof Ao.onScheduleFiberRoot == "function")
        try {
          Ao.onScheduleFiberRoot(Lp, e, t);
        } catch (a) {
          Yc || (Yc = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function IE(e, t) {
      if (Ao && typeof Ao.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & nn) === nn;
          Me && Ao.onCommitFiberRoot(Lp, e, t, a);
        } catch (l) {
          Yc || (Yc = !0, h("React instrumentation encountered an error: %s", l));
        }
    }
    function zE(e) {
      if (Ao && typeof Ao.onCommitFiberUnmount == "function")
        try {
          Ao.onCommitFiberUnmount(Lp, e);
        } catch (t) {
          Yc || (Yc = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    var HE = s.unstable_runWithPriority, q0 = s.unstable_scheduleCallback, MC = s.unstable_cancelCallback, $E = s.unstable_shouldYield, OC = s.unstable_requestPaint, Y0 = s.unstable_now, UE = s.unstable_getCurrentPriorityLevel, Ap = s.unstable_ImmediatePriority, NC = s.unstable_UserBlockingPriority, DC = s.unstable_NormalPriority, LC = s.unstable_LowPriority, AC = s.unstable_IdlePriority;
    if (!(c.__interactionsRef != null && c.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
    var PC = {}, fi = 99, _s = 98, Cl = 97, IC = 96, zC = 95, Q0 = 90, jE = $E, VE = (
      // Fall back gracefully if we're running an older version of Scheduler.
      OC !== void 0 ? OC : function() {
      }
    ), bl = null, Pp = null, Z0 = !1, HC = Y0(), ta = HC < 1e4 ? Y0 : function() {
      return Y0() - HC;
    };
    function Qc() {
      switch (UE()) {
        case Ap:
          return fi;
        case NC:
          return _s;
        case DC:
          return Cl;
        case LC:
          return IC;
        case AC:
          return zC;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function $C(e) {
      switch (e) {
        case fi:
          return Ap;
        case _s:
          return NC;
        case Cl:
          return DC;
        case IC:
          return LC;
        case zC:
          return AC;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function Ms(e, t) {
      var a = $C(e);
      return HE(a, t);
    }
    function mu(e, t, a) {
      var l = $C(e);
      return q0(l, t, a);
    }
    function FE(e) {
      return bl === null ? (bl = [e], Pp = q0(Ap, jC)) : bl.push(e), PC;
    }
    function UC(e) {
      e !== PC && MC(e);
    }
    function Po() {
      if (Pp !== null) {
        var e = Pp;
        Pp = null, MC(e);
      }
      jC();
    }
    function jC() {
      if (!Z0 && bl !== null) {
        Z0 = !0;
        var e = 0;
        try {
          var t = !0, a = bl;
          Ms(fi, function() {
            for (; e < a.length; e++) {
              var l = a[e];
              do
                l = l(t);
              while (l !== null);
            }
          }), bl = null;
        } catch (l) {
          throw bl !== null && (bl = bl.slice(e + 1)), q0(Ap, Po), l;
        } finally {
          Z0 = !1;
        }
      }
    }
    var VC = "17.0.2", $n = 0, Qn = 1, Ra = 2, Os = 4, $a = 8, BE = 16, WE = d.ReactCurrentBatchConfig, KE = 0;
    function GE() {
      return WE.transition;
    }
    var Vi = {
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
      var qE = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Qn && (t = a), a = a.return;
        return t;
      }, Ns = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, rv = [], av = [], iv = [], ov = [], lv = [], uv = [], Ds = /* @__PURE__ */ new Set();
      Vi.recordUnsafeLifecycleWarnings = function(e, t) {
        Ds.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && rv.push(e), e.mode & Qn && typeof t.UNSAFE_componentWillMount == "function" && av.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && iv.push(e), e.mode & Qn && typeof t.UNSAFE_componentWillReceiveProps == "function" && ov.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && lv.push(e), e.mode & Qn && typeof t.UNSAFE_componentWillUpdate == "function" && uv.push(e));
      }, Vi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        rv.length > 0 && (rv.forEach(function($) {
          e.add(ke($.type) || "Component"), Ds.add($.type);
        }), rv = []);
        var t = /* @__PURE__ */ new Set();
        av.length > 0 && (av.forEach(function($) {
          t.add(ke($.type) || "Component"), Ds.add($.type);
        }), av = []);
        var a = /* @__PURE__ */ new Set();
        iv.length > 0 && (iv.forEach(function($) {
          a.add(ke($.type) || "Component"), Ds.add($.type);
        }), iv = []);
        var l = /* @__PURE__ */ new Set();
        ov.length > 0 && (ov.forEach(function($) {
          l.add(ke($.type) || "Component"), Ds.add($.type);
        }), ov = []);
        var f = /* @__PURE__ */ new Set();
        lv.length > 0 && (lv.forEach(function($) {
          f.add(ke($.type) || "Component"), Ds.add($.type);
        }), lv = []);
        var p = /* @__PURE__ */ new Set();
        if (uv.length > 0 && (uv.forEach(function($) {
          p.add(ke($.type) || "Component"), Ds.add($.type);
        }), uv = []), t.size > 0) {
          var y = Ns(t);
          h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, y);
        }
        if (l.size > 0) {
          var C = Ns(l);
          h(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, C);
        }
        if (p.size > 0) {
          var x = Ns(p);
          h(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, x);
        }
        if (e.size > 0) {
          var O = Ns(e);
          m(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, O);
        }
        if (a.size > 0) {
          var L = Ns(a);
          m(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, L);
        }
        if (f.size > 0) {
          var Z = Ns(f);
          m(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, Z);
        }
      };
      var Ip = /* @__PURE__ */ new Map(), FC = /* @__PURE__ */ new Set();
      Vi.recordLegacyContextWarning = function(e, t) {
        var a = qE(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!FC.has(e.type)) {
          var l = Ip.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (l === void 0 && (l = [], Ip.set(a, l)), l.push(e));
        }
      }, Vi.flushLegacyContextWarning = function() {
        Ip.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(p) {
              l.add(ke(p.type) || "Component"), FC.add(p.type);
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
      }, Vi.discardPendingWarnings = function() {
        rv = [], av = [], iv = [], ov = [], lv = [], uv = [], Ip = /* @__PURE__ */ new Map();
      };
    }
    function Fi(e, t) {
      if (e && e.defaultProps) {
        var a = o({}, t), l = e.defaultProps;
        for (var f in l)
          a[f] === void 0 && (a[f] = l[f]);
        return a;
      }
      return t;
    }
    var zp = 1073741823, X0 = hu(null), J0;
    J0 = {};
    var Hp = null, Zc = null, $p = null, Up = !1;
    function jp() {
      Hp = null, Zc = null, $p = null, Up = !1;
    }
    function BC() {
      Up = !0;
    }
    function WC() {
      Up = !1;
    }
    function KC(e, t) {
      var a = e.type._context;
      ea(X0, a._currentValue, e), a._currentValue = t, a._currentRenderer !== void 0 && a._currentRenderer !== null && a._currentRenderer !== J0 && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), a._currentRenderer = J0;
    }
    function eg(e) {
      var t = X0.current;
      Jr(X0, e);
      var a = e.type._context;
      a._currentValue = t;
    }
    function YE(e, t, a) {
      if (i(a, t))
        return 0;
      var l = typeof e._calculateChangedBits == "function" ? e._calculateChangedBits(a, t) : zp;
      return (l & zp) !== l && h("calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", l), l | 0;
    }
    function GC(e, t) {
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
    function QE(e, t, a, l) {
      var f = e.child;
      for (f !== null && (f.return = e); f !== null; ) {
        var p = void 0, y = f.dependencies;
        if (y !== null) {
          p = f.child;
          for (var C = y.firstContext; C !== null; ) {
            if (C.context === t && C.observedBits & a) {
              if (f.tag === w) {
                var x = gu(_n, dr(l));
                x.tag = Vp, yu(f, x);
              }
              f.lanes = tn(f.lanes, l);
              var O = f.alternate;
              O !== null && (O.lanes = tn(O.lanes, l)), GC(f.return, l), y.lanes = tn(y.lanes, l);
              break;
            }
            C = C.next;
          }
        } else
          f.tag === V ? p = f.type === e.type ? null : f.child : p = f.child;
        if (p !== null)
          p.return = f;
        else
          for (p = f; p !== null; ) {
            if (p === e) {
              p = null;
              break;
            }
            var L = p.sibling;
            if (L !== null) {
              L.return = p.return, p = L;
              break;
            }
            p = p.return;
          }
        f = p;
      }
    }
    function Xc(e, t) {
      Hp = e, Zc = null, $p = null;
      var a = e.dependencies;
      if (a !== null) {
        var l = a.firstContext;
        l !== null && (wr(a.lanes, t) && uy(), a.firstContext = null);
      }
    }
    function pr(e, t) {
      if (Up && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), $p !== e) {
        if (!(t === !1 || t === 0)) {
          var a;
          typeof t != "number" || t === zp ? ($p = e, a = zp) : a = t;
          var l = {
            context: e,
            observedBits: a,
            next: null
          };
          if (Zc === null) {
            if (Hp === null)
              throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            Zc = l, Hp.dependencies = {
              lanes: le,
              firstContext: l,
              responders: null
            };
          } else
            Zc = Zc.next = l;
        }
      }
      return e._currentValue;
    }
    var qC = 0, YC = 1, Vp = 2, tg = 3, Fp = !1, ng, Bp;
    ng = !1, Bp = null;
    function rg(e) {
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
    function QC(e, t) {
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
    function gu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: qC,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function yu(e, t) {
      var a = e.updateQueue;
      if (a !== null) {
        var l = a.shared, f = l.pending;
        f === null ? t.next = t : (t.next = f.next, f.next = t), l.pending = t, Bp === l && !ng && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), ng = !0);
      }
    }
    function ZC(e, t) {
      var a = e.updateQueue, l = e.alternate;
      if (l !== null) {
        var f = l.updateQueue;
        if (a === f) {
          var p = null, y = null, C = a.firstBaseUpdate;
          if (C !== null) {
            var x = C;
            do {
              var O = {
                eventTime: x.eventTime,
                lane: x.lane,
                tag: x.tag,
                payload: x.payload,
                callback: x.callback,
                next: null
              };
              y === null ? p = y = O : (y.next = O, y = O), x = x.next;
            } while (x !== null);
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
      var L = a.lastBaseUpdate;
      L === null ? a.firstBaseUpdate = t : L.next = t, a.lastBaseUpdate = t;
    }
    function ZE(e, t, a, l, f, p) {
      switch (a.tag) {
        case YC: {
          var y = a.payload;
          if (typeof y == "function") {
            BC();
            var C = y.call(p, l, f);
            {
              if (e.mode & Qn) {
                kr();
                try {
                  y.call(p, l, f);
                } finally {
                  xn();
                }
              }
              WC();
            }
            return C;
          }
          return y;
        }
        case tg:
          e.flags = e.flags & ~Aa | nn;
        case qC: {
          var x = a.payload, O;
          if (typeof x == "function") {
            BC(), O = x.call(p, l, f);
            {
              if (e.mode & Qn) {
                kr();
                try {
                  x.call(p, l, f);
                } finally {
                  xn();
                }
              }
              WC();
            }
          } else
            O = x;
          return O == null ? l : o({}, l, O);
        }
        case Vp:
          return Fp = !0, l;
      }
      return l;
    }
    function sv(e, t, a, l) {
      var f = e.updateQueue;
      Fp = !1, Bp = f.shared;
      var p = f.firstBaseUpdate, y = f.lastBaseUpdate, C = f.shared.pending;
      if (C !== null) {
        f.shared.pending = null;
        var x = C, O = x.next;
        x.next = null, y === null ? p = O : y.next = O, y = x;
        var L = e.alternate;
        if (L !== null) {
          var Z = L.updateQueue, $ = Z.lastBaseUpdate;
          $ !== y && ($ === null ? Z.firstBaseUpdate = O : $.next = O, Z.lastBaseUpdate = x);
        }
      }
      if (p !== null) {
        var J = f.baseState, fe = le, _e = null, lt = null, Pt = null, ht = p;
        do {
          var Jt = ht.lane, bn = ht.eventTime;
          if (xo(l, Jt)) {
            if (Pt !== null) {
              var ae = {
                eventTime: bn,
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
            J = ZE(e, f, ht, J, t, a);
            var G = ht.callback;
            if (G !== null) {
              e.flags |= po;
              var Ce = f.effects;
              Ce === null ? f.effects = [ht] : Ce.push(ht);
            }
          } else {
            var X = {
              eventTime: bn,
              lane: Jt,
              tag: ht.tag,
              payload: ht.payload,
              callback: ht.callback,
              next: null
            };
            Pt === null ? (lt = Pt = X, _e = J) : Pt = Pt.next = X, fe = tn(fe, Jt);
          }
          if (ht = ht.next, ht === null) {
            if (C = f.shared.pending, C === null)
              break;
            var De = C, Ye = De.next;
            De.next = null, ht = Ye, f.lastBaseUpdate = De, f.shared.pending = null;
          }
        } while (!0);
        Pt === null && (_e = J), f.baseState = _e, f.firstBaseUpdate = lt, f.lastBaseUpdate = Pt, Ly(fe), e.lanes = fe, e.memoizedState = J;
      }
      Bp = null;
    }
    function XE(e, t) {
      if (typeof e != "function")
        throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
      e.call(t);
    }
    function XC() {
      Fp = !1;
    }
    function Wp() {
      return Fp;
    }
    function JC(e, t, a) {
      var l = t.effects;
      if (t.effects = null, l !== null)
        for (var f = 0; f < l.length; f++) {
          var p = l[f], y = p.callback;
          y !== null && (p.callback = null, XE(y, a));
        }
    }
    var ag = {}, JE = Array.isArray, e6 = new r.Component().refs, ig, og, lg, ug, sg, t6, Kp, cg, fg, dg;
    {
      ig = /* @__PURE__ */ new Set(), og = /* @__PURE__ */ new Set(), lg = /* @__PURE__ */ new Set(), ug = /* @__PURE__ */ new Set(), cg = /* @__PURE__ */ new Set(), sg = /* @__PURE__ */ new Set(), fg = /* @__PURE__ */ new Set(), dg = /* @__PURE__ */ new Set();
      var n6 = /* @__PURE__ */ new Set();
      Kp = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          n6.has(a) || (n6.add(a), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, t6 = function(e, t) {
        if (t === void 0) {
          var a = ke(e) || "Component";
          sg.has(a) || (sg.add(a), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(ag, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(ag);
    }
    function Gp(e, t, a, l) {
      var f = e.memoizedState;
      if (e.mode & Qn) {
        kr();
        try {
          a(l, f);
        } finally {
          xn();
        }
      }
      var p = a(l, f);
      t6(t, p);
      var y = p == null ? f : o({}, f, p);
      if (e.memoizedState = y, e.lanes === le) {
        var C = e.updateQueue;
        C.baseState = y;
      }
    }
    var vg = {
      isMounted: P1,
      enqueueSetState: function(e, t, a) {
        var l = Oi(e), f = ja(), p = Eu(l), y = gu(f, p);
        y.payload = t, a != null && (Kp(a, "setState"), y.callback = a), yu(l, y), ra(l, p, f);
      },
      enqueueReplaceState: function(e, t, a) {
        var l = Oi(e), f = ja(), p = Eu(l), y = gu(f, p);
        y.tag = YC, y.payload = t, a != null && (Kp(a, "replaceState"), y.callback = a), yu(l, y), ra(l, p, f);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Oi(e), l = ja(), f = Eu(a), p = gu(l, f);
        p.tag = Vp, t != null && (Kp(t, "forceUpdate"), p.callback = t), yu(a, p), ra(a, f, l);
      }
    };
    function r6(e, t, a, l, f, p, y) {
      var C = e.stateNode;
      if (typeof C.shouldComponentUpdate == "function") {
        if (e.mode & Qn) {
          kr();
          try {
            C.shouldComponentUpdate(l, p, y);
          } finally {
            xn();
          }
        }
        var x = C.shouldComponentUpdate(l, p, y);
        return x === void 0 && h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", ke(t) || "Component"), x;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !v(a, l) || !v(f, p) : !0;
    }
    function e7(e, t, a) {
      var l = e.stateNode;
      {
        var f = ke(t) || "Component", p = l.render;
        p || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", f) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", f)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", f), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", f), l.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", f), l.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", f), l.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", f), t.contextType && t.contextTypes && !fg.has(t) && (fg.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", f)), typeof l.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", f), t.prototype && t.prototype.isPureReactComponent && typeof l.shouldComponentUpdate != "undefined" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", ke(t) || "A pure component"), typeof l.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", f), typeof l.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", f), typeof l.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", f), typeof l.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", f);
        var y = l.props !== a;
        l.props !== void 0 && y && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", f, f), l.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", f, f), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !lg.has(t) && (lg.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", ke(t))), typeof l.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof l.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", f);
        var C = l.state;
        C && (typeof C != "object" || JE(C)) && h("%s.state: must be set to an object or null", f), typeof l.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", f);
      }
    }
    function a6(e, t) {
      t.updater = vg, e.stateNode = t, rd(t, e), t._reactInternalInstance = ag;
    }
    function i6(e, t, a) {
      var l = !1, f = Ha, p = Ha, y = t.contextType;
      if ("contextType" in t) {
        var C = (
          // Allow null for conditional declaration
          y === null || y !== void 0 && y.$$typeof === jt && y._context === void 0
        );
        if (!C && !dg.has(t)) {
          dg.add(t);
          var x = "";
          y === void 0 ? x = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof y != "object" ? x = " However, it is set to a " + typeof y + "." : y.$$typeof === dn ? x = " Did you accidentally pass the Context.Provider instead?" : y._context !== void 0 ? x = " Did you accidentally pass the Context.Consumer instead?" : x = " However, it is set to an object with keys {" + Object.keys(y).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", ke(t) || "Component", x);
        }
      }
      if (typeof y == "object" && y !== null)
        p = pr(y);
      else {
        f = Gc(e, t, !0);
        var O = t.contextTypes;
        l = O != null, p = l ? qc(e, f) : Ha;
      }
      if (e.mode & Qn) {
        kr();
        try {
          new t(a, p);
        } finally {
          xn();
        }
      }
      var L = new t(a, p), Z = e.memoizedState = L.state !== null && L.state !== void 0 ? L.state : null;
      a6(e, L);
      {
        if (typeof t.getDerivedStateFromProps == "function" && Z === null) {
          var $ = ke(t) || "Component";
          og.has($) || (og.add($), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", $, L.state === null ? "null" : "undefined", $));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof L.getSnapshotBeforeUpdate == "function") {
          var J = null, fe = null, _e = null;
          if (typeof L.componentWillMount == "function" && L.componentWillMount.__suppressDeprecationWarning !== !0 ? J = "componentWillMount" : typeof L.UNSAFE_componentWillMount == "function" && (J = "UNSAFE_componentWillMount"), typeof L.componentWillReceiveProps == "function" && L.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? fe = "componentWillReceiveProps" : typeof L.UNSAFE_componentWillReceiveProps == "function" && (fe = "UNSAFE_componentWillReceiveProps"), typeof L.componentWillUpdate == "function" && L.componentWillUpdate.__suppressDeprecationWarning !== !0 ? _e = "componentWillUpdate" : typeof L.UNSAFE_componentWillUpdate == "function" && (_e = "UNSAFE_componentWillUpdate"), J !== null || fe !== null || _e !== null) {
            var lt = ke(t) || "Component", Pt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            ug.has(lt) || (ug.add(lt), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, lt, Pt, J !== null ? `
  ` + J : "", fe !== null ? `
  ` + fe : "", _e !== null ? `
  ` + _e : ""));
          }
        }
      }
      return l && wC(e, f, p), L;
    }
    function t7(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ke(e.type) || "Component"), vg.enqueueReplaceState(t, t.state, null));
    }
    function o6(e, t, a, l) {
      var f = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== f) {
        {
          var p = ke(e.type) || "Component";
          ig.has(p) || (ig.add(p), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", p));
        }
        vg.enqueueReplaceState(t, t.state, null);
      }
    }
    function pg(e, t, a, l) {
      e7(e, t, a);
      var f = e.stateNode;
      f.props = a, f.state = e.memoizedState, f.refs = e6, rg(e);
      var p = t.contextType;
      if (typeof p == "object" && p !== null)
        f.context = pr(p);
      else {
        var y = Gc(e, t, !0);
        f.context = qc(e, y);
      }
      {
        if (f.state === a) {
          var C = ke(t) || "Component";
          cg.has(C) || (cg.add(C), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", C));
        }
        e.mode & Qn && Vi.recordLegacyContextWarning(e, f), Vi.recordUnsafeLifecycleWarnings(e, f);
      }
      sv(e, a, f, l), f.state = e.memoizedState;
      var x = t.getDerivedStateFromProps;
      typeof x == "function" && (Gp(e, t, x, a), f.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof f.getSnapshotBeforeUpdate != "function" && (typeof f.UNSAFE_componentWillMount == "function" || typeof f.componentWillMount == "function") && (t7(e, f), sv(e, a, f, l), f.state = e.memoizedState), typeof f.componentDidMount == "function" && (e.flags |= vt);
    }
    function n7(e, t, a, l) {
      var f = e.stateNode, p = e.memoizedProps;
      f.props = p;
      var y = f.context, C = t.contextType, x = Ha;
      if (typeof C == "object" && C !== null)
        x = pr(C);
      else {
        var O = Gc(e, t, !0);
        x = qc(e, O);
      }
      var L = t.getDerivedStateFromProps, Z = typeof L == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      !Z && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (p !== a || y !== x) && o6(e, f, a, x), XC();
      var $ = e.memoizedState, J = f.state = $;
      if (sv(e, a, f, l), J = e.memoizedState, p === a && $ === J && !Op() && !Wp())
        return typeof f.componentDidMount == "function" && (e.flags |= vt), !1;
      typeof L == "function" && (Gp(e, t, L, a), J = e.memoizedState);
      var fe = Wp() || r6(e, t, p, a, $, J, x);
      return fe ? (!Z && (typeof f.UNSAFE_componentWillMount == "function" || typeof f.componentWillMount == "function") && (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (e.flags |= vt)) : (typeof f.componentDidMount == "function" && (e.flags |= vt), e.memoizedProps = a, e.memoizedState = J), f.props = a, f.state = J, f.context = x, fe;
    }
    function r7(e, t, a, l, f) {
      var p = t.stateNode;
      QC(e, t);
      var y = t.memoizedProps, C = t.type === t.elementType ? y : Fi(t.type, y);
      p.props = C;
      var x = t.pendingProps, O = p.context, L = a.contextType, Z = Ha;
      if (typeof L == "object" && L !== null)
        Z = pr(L);
      else {
        var $ = Gc(t, a, !0);
        Z = qc(t, $);
      }
      var J = a.getDerivedStateFromProps, fe = typeof J == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      !fe && (typeof p.UNSAFE_componentWillReceiveProps == "function" || typeof p.componentWillReceiveProps == "function") && (y !== x || O !== Z) && o6(t, p, l, Z), XC();
      var _e = t.memoizedState, lt = p.state = _e;
      if (sv(t, l, p, f), lt = t.memoizedState, y === x && _e === lt && !Op() && !Wp())
        return typeof p.componentDidUpdate == "function" && (y !== e.memoizedProps || _e !== e.memoizedState) && (t.flags |= vt), typeof p.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || _e !== e.memoizedState) && (t.flags |= ei), !1;
      typeof J == "function" && (Gp(t, a, J, l), lt = t.memoizedState);
      var Pt = Wp() || r6(t, a, C, l, _e, lt, Z);
      return Pt ? (!fe && (typeof p.UNSAFE_componentWillUpdate == "function" || typeof p.componentWillUpdate == "function") && (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(l, lt, Z), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(l, lt, Z)), typeof p.componentDidUpdate == "function" && (t.flags |= vt), typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= ei)) : (typeof p.componentDidUpdate == "function" && (y !== e.memoizedProps || _e !== e.memoizedState) && (t.flags |= vt), typeof p.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || _e !== e.memoizedState) && (t.flags |= ei), t.memoizedProps = l, t.memoizedState = lt), p.props = l, p.state = lt, p.context = Z, Pt;
    }
    var hg, mg, gg, yg, Cg, l6 = function(e, t) {
    };
    hg = !1, mg = !1, gg = {}, yg = {}, Cg = {}, l6 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ke(t.type) || "Component";
        yg[a] || (yg[a] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    var qp = Array.isArray;
    function cv(e, t, a) {
      var l = a.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & Qn || Ie) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var f = ke(e.type) || "Component";
          gg[f] || (h('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), gg[f] = !0);
        }
        if (a._owner) {
          var p = a._owner, y;
          if (p) {
            var C = p;
            if (C.tag !== w)
              throw Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            y = C.stateNode;
          }
          if (!y)
            throw Error("Missing owner for string ref " + l + ". This error is likely caused by a bug in React. Please file an issue.");
          var x = "" + l;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === x)
            return t.ref;
          var O = function(L) {
            var Z = y.refs;
            Z === e6 && (Z = y.refs = {}), L === null ? delete Z[x] : Z[x] = L;
          };
          return O._stringRef = x, O;
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
    function Yp(e, t) {
      if (e.type !== "textarea")
        throw Error("Objects are not valid as a React child (found: " + (Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Qp(e) {
      {
        var t = ke(e.type) || "Component";
        if (Cg[t])
          return;
        Cg[t] = !0, h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function u6(e) {
      function t(X, ae) {
        if (e) {
          var G = X.lastEffect;
          G !== null ? (G.nextEffect = ae, X.lastEffect = ae) : X.firstEffect = X.lastEffect = ae, ae.nextEffect = null, ae.flags = Rn;
        }
      }
      function a(X, ae) {
        if (!e)
          return null;
        for (var G = ae; G !== null; )
          t(X, G), G = G.sibling;
        return null;
      }
      function l(X, ae) {
        for (var G = /* @__PURE__ */ new Map(), Ce = ae; Ce !== null; )
          Ce.key !== null ? G.set(Ce.key, Ce) : G.set(Ce.index, Ce), Ce = Ce.sibling;
        return G;
      }
      function f(X, ae) {
        var G = Fs(X, ae);
        return G.index = 0, G.sibling = null, G;
      }
      function p(X, ae, G) {
        if (X.index = G, !e)
          return ae;
        var Ce = X.alternate;
        if (Ce !== null) {
          var De = Ce.index;
          return De < ae ? (X.flags = Tt, ae) : De;
        } else
          return X.flags = Tt, ae;
      }
      function y(X) {
        return e && X.alternate === null && (X.flags = Tt), X;
      }
      function C(X, ae, G, Ce) {
        if (ae === null || ae.tag !== P) {
          var De = Gy(G, X.mode, Ce);
          return De.return = X, De;
        } else {
          var Ye = f(ae, G);
          return Ye.return = X, Ye;
        }
      }
      function x(X, ae, G, Ce) {
        if (ae !== null && (ae.elementType === G.type || // Keep this check inline so it only runs on the false path:
        Vb(ae, G))) {
          var De = f(ae, G.props);
          return De.ref = cv(X, ae, G), De.return = X, De._debugSource = G._source, De._debugOwner = G._owner, De;
        }
        var Ye = Wy(G, X.mode, Ce);
        return Ye.ref = cv(X, ae, G), Ye.return = X, Ye;
      }
      function O(X, ae, G, Ce) {
        if (ae === null || ae.tag !== N || ae.stateNode.containerInfo !== G.containerInfo || ae.stateNode.implementation !== G.implementation) {
          var De = qy(G, X.mode, Ce);
          return De.return = X, De;
        } else {
          var Ye = f(ae, G.children || []);
          return Ye.return = X, Ye;
        }
      }
      function L(X, ae, G, Ce, De) {
        if (ae === null || ae.tag !== j) {
          var Ye = Bs(G, X.mode, Ce, De);
          return Ye.return = X, Ye;
        } else {
          var Yt = f(ae, G);
          return Yt.return = X, Yt;
        }
      }
      function Z(X, ae, G) {
        if (typeof ae == "string" || typeof ae == "number") {
          var Ce = Gy("" + ae, X.mode, G);
          return Ce.return = X, Ce;
        }
        if (typeof ae == "object" && ae !== null) {
          switch (ae.$$typeof) {
            case on: {
              var De = Wy(ae, X.mode, G);
              return De.ref = cv(X, null, ae), De.return = X, De;
            }
            case Ot: {
              var Ye = qy(ae, X.mode, G);
              return Ye.return = X, Ye;
            }
          }
          if (qp(ae) || ln(ae)) {
            var Yt = Bs(ae, X.mode, G, null);
            return Yt.return = X, Yt;
          }
          Yp(X, ae);
        }
        return typeof ae == "function" && Qp(X), null;
      }
      function $(X, ae, G, Ce) {
        var De = ae !== null ? ae.key : null;
        if (typeof G == "string" || typeof G == "number")
          return De !== null ? null : C(X, ae, "" + G, Ce);
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case on:
              return G.key === De ? G.type === Ut ? L(X, ae, G.props.children, Ce, De) : x(X, ae, G, Ce) : null;
            case Ot:
              return G.key === De ? O(X, ae, G, Ce) : null;
          }
          if (qp(G) || ln(G))
            return De !== null ? null : L(X, ae, G, Ce, null);
          Yp(X, G);
        }
        return typeof G == "function" && Qp(X), null;
      }
      function J(X, ae, G, Ce, De) {
        if (typeof Ce == "string" || typeof Ce == "number") {
          var Ye = X.get(G) || null;
          return C(ae, Ye, "" + Ce, De);
        }
        if (typeof Ce == "object" && Ce !== null) {
          switch (Ce.$$typeof) {
            case on: {
              var Yt = X.get(Ce.key === null ? G : Ce.key) || null;
              return Ce.type === Ut ? L(ae, Yt, Ce.props.children, De, Ce.key) : x(ae, Yt, Ce, De);
            }
            case Ot: {
              var Mn = X.get(Ce.key === null ? G : Ce.key) || null;
              return O(ae, Mn, Ce, De);
            }
          }
          if (qp(Ce) || ln(Ce)) {
            var Un = X.get(G) || null;
            return L(ae, Un, Ce, De, null);
          }
          Yp(ae, Ce);
        }
        return typeof Ce == "function" && Qp(ae), null;
      }
      function fe(X, ae, G) {
        {
          if (typeof X != "object" || X === null)
            return ae;
          switch (X.$$typeof) {
            case on:
            case Ot:
              l6(X, G);
              var Ce = X.key;
              if (typeof Ce != "string")
                break;
              if (ae === null) {
                ae = /* @__PURE__ */ new Set(), ae.add(Ce);
                break;
              }
              if (!ae.has(Ce)) {
                ae.add(Ce);
                break;
              }
              h("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", Ce);
              break;
          }
        }
        return ae;
      }
      function _e(X, ae, G, Ce) {
        for (var De = null, Ye = 0; Ye < G.length; Ye++) {
          var Yt = G[Ye];
          De = fe(Yt, De, X);
        }
        for (var Mn = null, Un = null, sn = ae, hr = 0, rn = 0, jn = null; sn !== null && rn < G.length; rn++) {
          sn.index > rn ? (jn = sn, sn = null) : jn = sn.sibling;
          var Lr = $(X, sn, G[rn], Ce);
          if (Lr === null) {
            sn === null && (sn = jn);
            break;
          }
          e && sn && Lr.alternate === null && t(X, sn), hr = p(Lr, hr, rn), Un === null ? Mn = Lr : Un.sibling = Lr, Un = Lr, sn = jn;
        }
        if (rn === G.length)
          return a(X, sn), Mn;
        if (sn === null) {
          for (; rn < G.length; rn++) {
            var nr = Z(X, G[rn], Ce);
            nr !== null && (hr = p(nr, hr, rn), Un === null ? Mn = nr : Un.sibling = nr, Un = nr);
          }
          return Mn;
        }
        for (var jo = l(X, sn); rn < G.length; rn++) {
          var rr = J(jo, X, rn, G[rn], Ce);
          rr !== null && (e && rr.alternate !== null && jo.delete(rr.key === null ? rn : rr.key), hr = p(rr, hr, rn), Un === null ? Mn = rr : Un.sibling = rr, Un = rr);
        }
        return e && jo.forEach(function(Vo) {
          return t(X, Vo);
        }), Mn;
      }
      function lt(X, ae, G, Ce) {
        var De = ln(G);
        if (typeof De != "function")
          throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          G[Symbol.toStringTag] === "Generator" && (mg || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), mg = !0), G.entries === De && (hg || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), hg = !0);
          var Ye = De.call(G);
          if (Ye)
            for (var Yt = null, Mn = Ye.next(); !Mn.done; Mn = Ye.next()) {
              var Un = Mn.value;
              Yt = fe(Un, Yt, X);
            }
        }
        var sn = De.call(G);
        if (sn == null)
          throw Error("An iterable object provided no iterator.");
        for (var hr = null, rn = null, jn = ae, Lr = 0, nr = 0, jo = null, rr = sn.next(); jn !== null && !rr.done; nr++, rr = sn.next()) {
          jn.index > nr ? (jo = jn, jn = null) : jo = jn.sibling;
          var Vo = $(X, jn, rr.value, Ce);
          if (Vo === null) {
            jn === null && (jn = jo);
            break;
          }
          e && jn && Vo.alternate === null && t(X, jn), Lr = p(Vo, Lr, nr), rn === null ? hr = Vo : rn.sibling = Vo, rn = Vo, jn = jo;
        }
        if (rr.done)
          return a(X, jn), hr;
        if (jn === null) {
          for (; !rr.done; nr++, rr = sn.next()) {
            var Ws = Z(X, rr.value, Ce);
            Ws !== null && (Lr = p(Ws, Lr, nr), rn === null ? hr = Ws : rn.sibling = Ws, rn = Ws);
          }
          return hr;
        }
        for (var t5 = l(X, jn); !rr.done; nr++, rr = sn.next()) {
          var Tu = J(t5, X, nr, rr.value, Ce);
          Tu !== null && (e && Tu.alternate !== null && t5.delete(Tu.key === null ? nr : Tu.key), Lr = p(Tu, Lr, nr), rn === null ? hr = Tu : rn.sibling = Tu, rn = Tu);
        }
        return e && t5.forEach(function(nT) {
          return t(X, nT);
        }), hr;
      }
      function Pt(X, ae, G, Ce) {
        if (ae !== null && ae.tag === P) {
          a(X, ae.sibling);
          var De = f(ae, G);
          return De.return = X, De;
        }
        a(X, ae);
        var Ye = Gy(G, X.mode, Ce);
        return Ye.return = X, Ye;
      }
      function ht(X, ae, G, Ce) {
        for (var De = G.key, Ye = ae; Ye !== null; ) {
          if (Ye.key === De) {
            switch (Ye.tag) {
              case j: {
                if (G.type === Ut) {
                  a(X, Ye.sibling);
                  var Yt = f(Ye, G.props.children);
                  return Yt.return = X, Yt._debugSource = G._source, Yt._debugOwner = G._owner, Yt;
                }
                break;
              }
              case se:
              default: {
                if (Ye.elementType === G.type || // Keep this check inline so it only runs on the false path:
                Vb(Ye, G)) {
                  a(X, Ye.sibling);
                  var Mn = f(Ye, G.props);
                  return Mn.ref = cv(X, Ye, G), Mn.return = X, Mn._debugSource = G._source, Mn._debugOwner = G._owner, Mn;
                }
                break;
              }
            }
            a(X, Ye);
            break;
          } else
            t(X, Ye);
          Ye = Ye.sibling;
        }
        if (G.type === Ut) {
          var Un = Bs(G.props.children, X.mode, Ce, G.key);
          return Un.return = X, Un;
        } else {
          var sn = Wy(G, X.mode, Ce);
          return sn.ref = cv(X, ae, G), sn.return = X, sn;
        }
      }
      function Jt(X, ae, G, Ce) {
        for (var De = G.key, Ye = ae; Ye !== null; ) {
          if (Ye.key === De)
            if (Ye.tag === N && Ye.stateNode.containerInfo === G.containerInfo && Ye.stateNode.implementation === G.implementation) {
              a(X, Ye.sibling);
              var Yt = f(Ye, G.children || []);
              return Yt.return = X, Yt;
            } else {
              a(X, Ye);
              break;
            }
          else
            t(X, Ye);
          Ye = Ye.sibling;
        }
        var Mn = qy(G, X.mode, Ce);
        return Mn.return = X, Mn;
      }
      function bn(X, ae, G, Ce) {
        var De = typeof G == "object" && G !== null && G.type === Ut && G.key === null;
        De && (G = G.props.children);
        var Ye = typeof G == "object" && G !== null;
        if (Ye)
          switch (G.$$typeof) {
            case on:
              return y(ht(X, ae, G, Ce));
            case Ot:
              return y(Jt(X, ae, G, Ce));
          }
        if (typeof G == "string" || typeof G == "number")
          return y(Pt(X, ae, "" + G, Ce));
        if (qp(G))
          return _e(X, ae, G, Ce);
        if (ln(G))
          return lt(X, ae, G, Ce);
        if (Ye && Yp(X, G), typeof G == "function" && Qp(X), typeof G == "undefined" && !De)
          switch (X.tag) {
            case w: {
              var Yt = X.stateNode;
              if (Yt.render._isMockFunction)
                break;
            }
            case se:
            case T:
            case z:
            case Q:
              throw Error((ke(X.type) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
          }
        return a(X, ae);
      }
      return bn;
    }
    var Zp = u6(!0), s6 = u6(!1);
    function a7(e, t) {
      if (!(e === null || t.child === e.child))
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, l = Fs(a, a.pendingProps);
        for (t.child = l, l.return = t; a.sibling !== null; )
          a = a.sibling, l = l.sibling = Fs(a, a.pendingProps), l.return = t;
        l.sibling = null;
      }
    }
    function i7(e, t) {
      for (var a = e.child; a !== null; )
        yx(a, t), a = a.sibling;
    }
    var fv = {}, Cu = hu(fv), dv = hu(fv), Xp = hu(fv);
    function Jp(e) {
      if (e === fv)
        throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function c6() {
      var e = Jp(Xp.current);
      return e;
    }
    function bg(e, t) {
      ea(Xp, t, e), ea(dv, e, e), ea(Cu, fv, e);
      var a = $9(t);
      Jr(Cu, e), ea(Cu, a, e);
    }
    function Jc(e) {
      Jr(Cu, e), Jr(dv, e), Jr(Xp, e);
    }
    function Sg() {
      var e = Jp(Cu.current);
      return e;
    }
    function f6(e) {
      Jp(Xp.current);
      var t = Jp(Cu.current), a = U9(t, e.type);
      t !== a && (ea(dv, e, e), ea(Cu, a, e));
    }
    function Eg(e) {
      dv.current === e && (Jr(Cu, e), Jr(dv, e));
    }
    var o7 = 0, d6 = 1, wg = 1, vv = 2, Bi = hu(o7);
    function eh(e, t) {
      return (e & t) !== 0;
    }
    function pv(e) {
      return e & d6;
    }
    function xg(e, t) {
      return e & d6 | t;
    }
    function l7(e, t) {
      return e | t;
    }
    function Ls(e, t) {
      ea(Bi, t, e);
    }
    function ef(e) {
      Jr(Bi, e);
    }
    function u7(e, t) {
      var a = e.memoizedState;
      if (a !== null)
        return a.dehydrated !== null;
      var l = e.memoizedProps;
      return l.fallback === void 0 ? !1 : l.unstable_avoidThisFallback !== !0 ? !0 : !t;
    }
    function th(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === U) {
          var a = t.memoizedState;
          if (a !== null) {
            var l = a.dehydrated;
            if (l === null || cE(l) || fE(l))
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
    var Tg = (
      /*  */
      0
    ), tf = (
      /* */
      1
    ), nf = (
      /*    */
      2
    ), hv = (
      /*   */
      4
    ), di = null, As = null, bu = !1;
    function s7(e) {
      var t = e.stateNode.containerInfo;
      return As = hC(t), di = e, bu = !0, !0;
    }
    function v6(e, t) {
      switch (e.tag) {
        case k:
          CE(e.stateNode.containerInfo, t);
          break;
        case A:
          bE(e.type, e.memoizedProps, e.stateNode, t);
          break;
      }
      var a = xx();
      a.stateNode = t, a.return = e, a.flags = Rn, e.lastEffect !== null ? (e.lastEffect.nextEffect = a, e.lastEffect = a) : e.firstEffect = e.lastEffect = a;
    }
    function p6(e, t) {
      switch (t.flags = t.flags & ~ba | Tt, e.tag) {
        case k: {
          var a = e.stateNode.containerInfo;
          switch (t.tag) {
            case A:
              var l = t.type;
              t.pendingProps, SE(a, l);
              break;
            case P:
              var f = t.pendingProps;
              EE(a, f);
              break;
          }
          break;
        }
        case A: {
          var p = e.type, y = e.memoizedProps, C = e.stateNode;
          switch (t.tag) {
            case A:
              var x = t.type;
              t.pendingProps, wE(p, y, C, x);
              break;
            case P:
              var O = t.pendingProps;
              xE(p, y, C, O);
              break;
            case U:
              TE(p, y);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
    function h6(e, t) {
      switch (e.tag) {
        case A: {
          var a = e.type;
          e.pendingProps;
          var l = uE(t, a);
          return l !== null ? (e.stateNode = l, !0) : !1;
        }
        case P: {
          var f = e.pendingProps, p = sE(t, f);
          return p !== null ? (e.stateNode = p, !0) : !1;
        }
        case U:
          return !1;
        default:
          return !1;
      }
    }
    function Rg(e) {
      if (bu) {
        var t = As;
        if (!t) {
          p6(di, e), bu = !1, di = e;
          return;
        }
        var a = t;
        if (!h6(e, t)) {
          if (t = wp(a), !t || !h6(e, t)) {
            p6(di, e), bu = !1, di = e;
            return;
          }
          v6(di, a);
        }
        di = e, As = hC(t);
      }
    }
    function c7(e, t, a) {
      var l = e.stateNode, f = dE(l, e.type, e.memoizedProps, t, a, e);
      return e.updateQueue = f, f !== null;
    }
    function f7(e) {
      var t = e.stateNode, a = e.memoizedProps, l = vE(t, a, e);
      if (l) {
        var f = di;
        if (f !== null)
          switch (f.tag) {
            case k: {
              var p = f.stateNode.containerInfo;
              gE(p, t, a);
              break;
            }
            case A: {
              var y = f.type, C = f.memoizedProps, x = f.stateNode;
              yE(y, C, x, t, a);
              break;
            }
          }
      }
      return l;
    }
    function d7(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return pE(a);
    }
    function m6(e) {
      for (var t = e.return; t !== null && t.tag !== A && t.tag !== k && t.tag !== U; )
        t = t.return;
      di = t;
    }
    function nh(e) {
      if (e !== di)
        return !1;
      if (!bu)
        return m6(e), bu = !0, !1;
      var t = e.type;
      if (e.tag !== A || t !== "head" && t !== "body" && !$0(t, e.memoizedProps))
        for (var a = As; a; )
          v6(e, a), a = wp(a);
      return m6(e), e.tag === U ? As = d7(e) : As = di ? wp(e.stateNode) : null, !0;
    }
    function kg() {
      di = null, As = null, bu = !1;
    }
    function _g() {
      return bu;
    }
    var mv = [], Mg;
    Mg = {};
    function v7(e) {
      mv.push(e);
    }
    function Og() {
      for (var e = 0; e < mv.length; e++) {
        var t = mv[e];
        t._workInProgressVersionPrimary = null;
      }
      mv.length = 0;
    }
    function p7(e) {
      return e._workInProgressVersionPrimary;
    }
    function g6(e, t) {
      e._workInProgressVersionPrimary = t, mv.push(e);
    }
    function h7(e) {
      e._currentPrimaryRenderer == null ? e._currentPrimaryRenderer = Mg : e._currentPrimaryRenderer !== Mg && h("Detected multiple renderers concurrently rendering the same mutable source. This is currently unsupported.");
    }
    var Pe = d.ReactCurrentDispatcher, vi = d.ReactCurrentBatchConfig, Ng, Dg;
    Dg = {}, Ng = /* @__PURE__ */ new Set();
    var gv = le, En = null, na = null, Dr = null, rh = !1, yv = !1, m7 = 25, ve = null, pi = null, Su = -1, Lg = !1;
    function Cn() {
      {
        var e = ve;
        pi === null ? pi = [e] : pi.push(e);
      }
    }
    function Ve() {
      {
        var e = ve;
        pi !== null && (Su++, pi[Su] !== e && g7(e));
      }
    }
    function Cv(e) {
      e != null && !Array.isArray(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ve, typeof e);
    }
    function g7(e) {
      {
        var t = ke(En.type);
        if (!Ng.has(t) && (Ng.add(t), pi !== null)) {
          for (var a = "", l = 30, f = 0; f <= Su; f++) {
            for (var p = pi[f], y = f === Su ? e : p, C = f + 1 + ". " + p; C.length < l; )
              C += " ";
            C += y + `
`, a += C;
          }
          h(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ka() {
      throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Ag(e, t) {
      if (Lg)
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
      gv = p, En = t, pi = e !== null ? e._debugHookTypes : null, Su = -1, Lg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = le, e !== null && e.memoizedState !== null ? Pe.current = D6 : pi !== null ? Pe.current = N6 : Pe.current = O6;
      var y = a(l, f);
      if (yv) {
        var C = 0;
        do {
          if (yv = !1, !(C < m7))
            throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          C += 1, Lg = !1, na = null, Dr = null, t.updateQueue = null, Su = -1, Pe.current = L6, y = a(l, f);
        } while (yv);
      }
      Pe.current = hh, t._debugHookTypes = pi;
      var x = na !== null && na.next !== null;
      if (gv = le, En = null, na = null, Dr = null, ve = null, pi = null, Su = -1, rh = !1, x)
        throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return y;
    }
    function y6(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags &= ~(Gl | vt), e.lanes = lu(e.lanes, a);
    }
    function C6() {
      if (Pe.current = hh, rh) {
        for (var e = En.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        rh = !1;
      }
      gv = le, En = null, na = null, Dr = null, pi = null, Su = -1, ve = null, ph = !1, yv = !1;
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
    function Is() {
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
    function y7() {
      return {
        lastEffect: null
      };
    }
    function ah(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Pg(e, t, a) {
      var l = Ps(), f;
      a !== void 0 ? f = a(t) : f = t, l.memoizedState = l.baseState = f;
      var p = l.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: f
      }, y = p.dispatch = qg.bind(null, En, p);
      return [l.memoizedState, y];
    }
    function Ig(e, t, a) {
      var l = Is(), f = l.queue;
      if (f === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      f.lastRenderedReducer = e;
      var p = na, y = p.baseQueue, C = f.pending;
      if (C !== null) {
        if (y !== null) {
          var x = y.next, O = C.next;
          y.next = O, C.next = x;
        }
        p.baseQueue !== y && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), p.baseQueue = y = C, f.pending = null;
      }
      if (y !== null) {
        var L = y.next, Z = p.baseState, $ = null, J = null, fe = null, _e = L;
        do {
          var lt = _e.lane;
          if (xo(gv, lt)) {
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
              Z = _e.eagerState;
            else {
              var Jt = _e.action;
              Z = e(Z, Jt);
            }
          } else {
            var Pt = {
              lane: lt,
              action: _e.action,
              eagerReducer: _e.eagerReducer,
              eagerState: _e.eagerState,
              next: null
            };
            fe === null ? (J = fe = Pt, $ = Z) : fe = fe.next = Pt, En.lanes = tn(En.lanes, lt), Ly(lt);
          }
          _e = _e.next;
        } while (_e !== null && _e !== L);
        fe === null ? $ = Z : fe.next = J, i(Z, l.memoizedState) || uy(), l.memoizedState = Z, l.baseState = $, l.baseQueue = fe, f.lastRenderedState = Z;
      }
      var bn = f.dispatch;
      return [l.memoizedState, bn];
    }
    function zg(e, t, a) {
      var l = Is(), f = l.queue;
      if (f === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      f.lastRenderedReducer = e;
      var p = f.dispatch, y = f.pending, C = l.memoizedState;
      if (y !== null) {
        f.pending = null;
        var x = y.next, O = x;
        do {
          var L = O.action;
          C = e(C, L), O = O.next;
        } while (O !== x);
        i(C, l.memoizedState) || uy(), l.memoizedState = C, l.baseQueue === null && (l.baseState = C), f.lastRenderedState = C;
      }
      return [C, p];
    }
    function b6(e, t, a) {
      h7(t);
      var l = t._getVersion, f = l(t._source), p = !1, y = p7(t);
      if (y !== null ? p = y === f : (p = xo(gv, e.mutableReadLanes), p && g6(t, f)), p) {
        var C = a(t._source);
        return typeof C == "function" && h("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing."), C;
      } else
        throw v7(t), Error("Cannot read from mutable source during the current render without tearing. This is a bug in React. Please file an issue.");
    }
    function S6(e, t, a, l) {
      var f = Ew();
      if (f === null)
        throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      var p = t._getVersion, y = p(t._source), C = Pe.current, x = C.useState(function() {
        return b6(f, t, a);
      }), O = x[0], L = x[1], Z = O, $ = Dr, J = e.memoizedState, fe = J.refs, _e = fe.getSnapshot, lt = J.source, Pt = J.subscribe, ht = En;
      if (e.memoizedState = {
        refs: fe,
        source: t,
        subscribe: l
      }, C.useEffect(function() {
        fe.getSnapshot = a, fe.setSnapshot = L;
        var bn = p(t._source);
        if (!i(y, bn)) {
          var X = a(t._source);
          if (typeof X == "function" && h("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing."), !i(Z, X)) {
            L(X);
            var ae = Eu(ht);
            q1(f, ae);
          }
          Od(f, f.mutableReadLanes);
        }
      }, [a, t, l]), C.useEffect(function() {
        var bn = function() {
          var ae = fe.getSnapshot, G = fe.setSnapshot;
          try {
            G(ae(t._source));
            var Ce = Eu(ht);
            q1(f, Ce);
          } catch (De) {
            G(function() {
              throw De;
            });
          }
        }, X = l(t._source, bn);
        return typeof X != "function" && h("Mutable source subscribe function must return an unsubscribe function."), X;
      }, [t, l]), !i(_e, a) || !i(lt, t) || !i(Pt, l)) {
        var Jt = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: ah,
          lastRenderedState: Z
        };
        Jt.dispatch = L = qg.bind(null, En, Jt), $.queue = Jt, $.baseQueue = null, Z = b6(f, t, a), $.memoizedState = $.baseState = Z;
      }
      return Z;
    }
    function Hg(e, t, a) {
      var l = Ps();
      return l.memoizedState = {
        refs: {
          getSnapshot: t,
          setSnapshot: null
        },
        source: e,
        subscribe: a
      }, S6(l, e, t, a);
    }
    function ih(e, t, a) {
      var l = Is();
      return S6(l, e, t, a);
    }
    function zs(e) {
      var t = Ps();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = t.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: ah,
        lastRenderedState: e
      }, l = a.dispatch = qg.bind(null, En, a);
      return [t.memoizedState, l];
    }
    function bv(e) {
      return Ig(ah);
    }
    function Sv(e) {
      return zg(ah);
    }
    function oh(e, t, a, l) {
      var f = {
        tag: e,
        create: t,
        destroy: a,
        deps: l,
        // Circular
        next: null
      }, p = En.updateQueue;
      if (p === null)
        p = y7(), En.updateQueue = p, p.lastEffect = f.next = f;
      else {
        var y = p.lastEffect;
        if (y === null)
          p.lastEffect = f.next = f;
        else {
          var C = y.next;
          y.next = f, f.next = C, p.lastEffect = f;
        }
      }
      return f;
    }
    function lh(e) {
      var t = Ps(), a = {
        current: e
      };
      return Object.seal(a), t.memoizedState = a, a;
    }
    function af(e) {
      var t = Is();
      return t.memoizedState;
    }
    function $g(e, t, a, l) {
      var f = Ps(), p = l === void 0 ? null : l;
      En.flags |= e, f.memoizedState = oh(tf | t, a, void 0, p);
    }
    function Ug(e, t, a, l) {
      var f = Is(), p = l === void 0 ? null : l, y = void 0;
      if (na !== null) {
        var C = na.memoizedState;
        if (y = C.destroy, p !== null) {
          var x = C.deps;
          if (Ag(p, x)) {
            oh(t, a, y, p);
            return;
          }
        }
      }
      En.flags |= e, f.memoizedState = oh(tf | t, a, y, p);
    }
    function uh(e, t) {
      return typeof jest != "undefined" && Ib(En), $g(vt | Gl, hv, e, t);
    }
    function of(e, t) {
      return typeof jest != "undefined" && Ib(En), Ug(vt | Gl, hv, e, t);
    }
    function jg(e, t) {
      return $g(vt, nf, e, t);
    }
    function sh(e, t) {
      return Ug(vt, nf, e, t);
    }
    function E6(e, t) {
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
    function Vg(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return $g(vt, nf, E6.bind(null, t, e), l);
    }
    function ch(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return Ug(vt, nf, E6.bind(null, t, e), l);
    }
    function C7(e, t) {
    }
    var fh = C7;
    function Fg(e, t) {
      var a = Ps(), l = t === void 0 ? null : t;
      return a.memoizedState = [e, l], e;
    }
    function dh(e, t) {
      var a = Is(), l = t === void 0 ? null : t, f = a.memoizedState;
      if (f !== null && l !== null) {
        var p = f[1];
        if (Ag(l, p))
          return f[0];
      }
      return a.memoizedState = [e, l], e;
    }
    function Bg(e, t) {
      var a = Ps(), l = t === void 0 ? null : t, f = e();
      return a.memoizedState = [f, l], f;
    }
    function vh(e, t) {
      var a = Is(), l = t === void 0 ? null : t, f = a.memoizedState;
      if (f !== null && l !== null) {
        var p = f[1];
        if (Ag(l, p))
          return f[0];
      }
      var y = e();
      return a.memoizedState = [y, l], y;
    }
    function Wg(e) {
      var t = zs(e), a = t[0], l = t[1];
      return uh(function() {
        var f = vi.transition;
        vi.transition = 1;
        try {
          l(e);
        } finally {
          vi.transition = f;
        }
      }, [e]), a;
    }
    function w6(e) {
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
    function x6(e) {
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
    function b7(e, t) {
      var a = Qc();
      Ms(a < _s ? _s : a, function() {
        e(!0);
      }), Ms(a > Cl ? Cl : a, function() {
        var l = vi.transition;
        vi.transition = 1;
        try {
          e(!1), t();
        } finally {
          vi.transition = l;
        }
      });
    }
    function Kg() {
      var e = zs(!1), t = e[0], a = e[1], l = b7.bind(null, a);
      return lh(l), [l, t];
    }
    function T6() {
      var e = bv(), t = e[0], a = af(), l = a.current;
      return [l, t];
    }
    function R6() {
      var e = Sv(), t = e[0], a = af(), l = a.current;
      return [l, t];
    }
    var ph = !1;
    function S7() {
      return ph;
    }
    function k6(e) {
      {
        var t = ke(e.type) || "Unknown";
        wi() && !Dg[t] && (h("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly."), Dg[t] = !0);
      }
    }
    function Gg() {
      var e = kE.bind(null, k6.bind(null, En));
      if (_g()) {
        var t = !1, a = En, l = function() {
          throw t || (t = !0, ph = !0, p(e()), ph = !1, k6(a)), Error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.");
        }, f = ME(l), p = zs(f)[1];
        return (En.mode & Ra) === $n && (En.flags |= vt | Gl, oh(tf | hv, function() {
          p(e());
        }, void 0, null)), f;
      } else {
        var y = e();
        return zs(y), y;
      }
    }
    function _6() {
      var e = bv()[0];
      return e;
    }
    function M6() {
      var e = Sv()[0];
      return e;
    }
    function qg(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = ja(), f = Eu(e), p = {
        lane: f,
        action: a,
        eagerReducer: null,
        eagerState: null,
        next: null
      }, y = t.pending;
      y === null ? p.next = p : (p.next = y.next, y.next = p), t.pending = p;
      var C = e.alternate;
      if (e === En || C !== null && C === En)
        yv = rh = !0;
      else {
        if (e.lanes === le && (C === null || C.lanes === le)) {
          var x = t.lastRenderedReducer;
          if (x !== null) {
            var O;
            O = Pe.current, Pe.current = Wi;
            try {
              var L = t.lastRenderedState, Z = x(L, a);
              if (p.eagerReducer = x, p.eagerState = Z, i(Z, L))
                return;
            } catch ($) {
            } finally {
              Pe.current = O;
            }
          }
        }
        typeof jest != "undefined" && (Pb(e), ax(e)), ra(e, f, l);
      }
    }
    var hh = {
      readContext: pr,
      useCallback: ka,
      useContext: ka,
      useEffect: ka,
      useImperativeHandle: ka,
      useLayoutEffect: ka,
      useMemo: ka,
      useReducer: ka,
      useRef: ka,
      useState: ka,
      useDebugValue: ka,
      useDeferredValue: ka,
      useTransition: ka,
      useMutableSource: ka,
      useOpaqueIdentifier: ka,
      unstable_isNewReconciler: Le
    }, O6 = null, N6 = null, D6 = null, L6 = null, Io = null, Wi = null, mh = null;
    {
      var Yg = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, It = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      O6 = {
        readContext: function(e, t) {
          return pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", Cn(), Cv(t), Fg(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", Cn(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", Cn(), Cv(t), uh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", Cn(), Cv(a), Vg(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", Cn(), Cv(t), jg(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", Cn(), Cv(t);
          var a = Pe.current;
          Pe.current = Io;
          try {
            return Bg(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", Cn();
          var l = Pe.current;
          Pe.current = Io;
          try {
            return Pg(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", Cn(), lh(e);
        },
        useState: function(e) {
          ve = "useState", Cn();
          var t = Pe.current;
          Pe.current = Io;
          try {
            return zs(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", Cn(), void 0;
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", Cn(), Wg(e);
        },
        useTransition: function() {
          return ve = "useTransition", Cn(), Kg();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", Cn(), Hg(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", Cn(), Gg();
        },
        unstable_isNewReconciler: Le
      }, N6 = {
        readContext: function(e, t) {
          return pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", Ve(), Fg(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", Ve(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", Ve(), uh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", Ve(), Vg(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", Ve(), jg(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", Ve();
          var a = Pe.current;
          Pe.current = Io;
          try {
            return Bg(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", Ve();
          var l = Pe.current;
          Pe.current = Io;
          try {
            return Pg(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", Ve(), lh(e);
        },
        useState: function(e) {
          ve = "useState", Ve();
          var t = Pe.current;
          Pe.current = Io;
          try {
            return zs(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", Ve(), void 0;
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", Ve(), Wg(e);
        },
        useTransition: function() {
          return ve = "useTransition", Ve(), Kg();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", Ve(), Hg(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", Ve(), Gg();
        },
        unstable_isNewReconciler: Le
      }, D6 = {
        readContext: function(e, t) {
          return pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", Ve(), dh(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", Ve(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", Ve(), of(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", Ve(), ch(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", Ve(), sh(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", Ve();
          var a = Pe.current;
          Pe.current = Wi;
          try {
            return vh(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", Ve();
          var l = Pe.current;
          Pe.current = Wi;
          try {
            return Ig(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", Ve(), af();
        },
        useState: function(e) {
          ve = "useState", Ve();
          var t = Pe.current;
          Pe.current = Wi;
          try {
            return bv(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", Ve(), fh();
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", Ve(), w6(e);
        },
        useTransition: function() {
          return ve = "useTransition", Ve(), T6();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", Ve(), ih(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", Ve(), _6();
        },
        unstable_isNewReconciler: Le
      }, L6 = {
        readContext: function(e, t) {
          return pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", Ve(), dh(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", Ve(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", Ve(), of(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", Ve(), ch(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", Ve(), sh(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", Ve();
          var a = Pe.current;
          Pe.current = mh;
          try {
            return vh(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", Ve();
          var l = Pe.current;
          Pe.current = mh;
          try {
            return zg(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", Ve(), af();
        },
        useState: function(e) {
          ve = "useState", Ve();
          var t = Pe.current;
          Pe.current = mh;
          try {
            return Sv(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", Ve(), fh();
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", Ve(), x6(e);
        },
        useTransition: function() {
          return ve = "useTransition", Ve(), R6();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", Ve(), ih(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", Ve(), M6();
        },
        unstable_isNewReconciler: Le
      }, Io = {
        readContext: function(e, t) {
          return Yg(), pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", It(), Cn(), Fg(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", It(), Cn(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", It(), Cn(), uh(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", It(), Cn(), Vg(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", It(), Cn(), jg(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", It(), Cn();
          var a = Pe.current;
          Pe.current = Io;
          try {
            return Bg(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", It(), Cn();
          var l = Pe.current;
          Pe.current = Io;
          try {
            return Pg(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", It(), Cn(), lh(e);
        },
        useState: function(e) {
          ve = "useState", It(), Cn();
          var t = Pe.current;
          Pe.current = Io;
          try {
            return zs(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", It(), Cn(), void 0;
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", It(), Cn(), Wg(e);
        },
        useTransition: function() {
          return ve = "useTransition", It(), Cn(), Kg();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", It(), Cn(), Hg(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", It(), Cn(), Gg();
        },
        unstable_isNewReconciler: Le
      }, Wi = {
        readContext: function(e, t) {
          return Yg(), pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", It(), Ve(), dh(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", It(), Ve(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", It(), Ve(), of(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", It(), Ve(), ch(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", It(), Ve(), sh(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", It(), Ve();
          var a = Pe.current;
          Pe.current = Wi;
          try {
            return vh(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", It(), Ve();
          var l = Pe.current;
          Pe.current = Wi;
          try {
            return Ig(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", It(), Ve(), af();
        },
        useState: function(e) {
          ve = "useState", It(), Ve();
          var t = Pe.current;
          Pe.current = Wi;
          try {
            return bv(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", It(), Ve(), fh();
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", It(), Ve(), w6(e);
        },
        useTransition: function() {
          return ve = "useTransition", It(), Ve(), T6();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", It(), Ve(), ih(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", It(), Ve(), _6();
        },
        unstable_isNewReconciler: Le
      }, mh = {
        readContext: function(e, t) {
          return Yg(), pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", It(), Ve(), dh(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", It(), Ve(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", It(), Ve(), of(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", It(), Ve(), ch(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", It(), Ve(), sh(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", It(), Ve();
          var a = Pe.current;
          Pe.current = Wi;
          try {
            return vh(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", It(), Ve();
          var l = Pe.current;
          Pe.current = Wi;
          try {
            return zg(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", It(), Ve(), af();
        },
        useState: function(e) {
          ve = "useState", It(), Ve();
          var t = Pe.current;
          Pe.current = Wi;
          try {
            return Sv(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", It(), Ve(), fh();
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", It(), Ve(), x6(e);
        },
        useTransition: function() {
          return ve = "useTransition", It(), Ve(), R6();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", It(), Ve(), ih(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", It(), Ve(), M6();
        },
        unstable_isNewReconciler: Le
      };
    }
    var gh = s.unstable_now, A6 = 0, Ev = -1;
    function E7() {
      return A6;
    }
    function P6() {
      A6 = gh();
    }
    function Qg(e) {
      Ev = gh(), e.actualStartTime < 0 && (e.actualStartTime = gh());
    }
    function I6(e) {
      Ev = -1;
    }
    function yh(e, t) {
      if (Ev >= 0) {
        var a = gh() - Ev;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Ev = -1;
      }
    }
    function Zg(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    var wv = d.ReactCurrentOwner, zo = !1, Xg, xv, Jg, ey, ty, Hs, ny, Ch;
    Xg = {}, xv = {}, Jg = {}, ey = {}, ty = {}, Hs = !1, ny = {}, Ch = {};
    function _a(e, t, a, l) {
      e === null ? t.child = s6(t, null, a, l) : t.child = Zp(t, e.child, a, l);
    }
    function w7(e, t, a, l) {
      t.child = Zp(t, e.child, null, l), t.child = Zp(t, null, a, l);
    }
    function z6(e, t, a, l, f) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && ji(
          p,
          l,
          // Resolved props
          "prop",
          ke(a)
        );
      }
      var y = a.render, C = t.ref, x;
      Xc(t, f);
      {
        if (wv.current = t, er(!0), x = rf(e, t, y, l, C, f), t.mode & Qn) {
          kr();
          try {
            x = rf(e, t, y, l, C, f);
          } finally {
            xn();
          }
        }
        er(!1);
      }
      return e !== null && !zo ? (y6(e, t, f), Sl(e, t, f)) : (t.flags |= Fr, _a(e, t, x, f), t.child);
    }
    function H6(e, t, a, l, f, p) {
      if (e === null) {
        var y = a.type;
        if (mx(y) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var C = y;
          return C = pf(y), t.tag = Q, t.type = C, oy(t, y), $6(e, t, C, l, f, p);
        }
        {
          var x = y.propTypes;
          x && ji(
            x,
            l,
            // Resolved props
            "prop",
            ke(y)
          );
        }
        var O = By(a.type, null, l, t, t.mode, p);
        return O.ref = t.ref, O.return = t, t.child = O, O;
      }
      {
        var L = a.type, Z = L.propTypes;
        Z && ji(
          Z,
          l,
          // Resolved props
          "prop",
          ke(L)
        );
      }
      var $ = e.child;
      if (!wr(f, p)) {
        var J = $.memoizedProps, fe = a.compare;
        if (fe = fe !== null ? fe : v, fe(J, l) && e.ref === t.ref)
          return Sl(e, t, p);
      }
      t.flags |= Fr;
      var _e = Fs($, l);
      return _e.ref = t.ref, _e.return = t, t.child = _e, _e;
    }
    function $6(e, t, a, l, f, p) {
      if (t.type !== t.elementType) {
        var y = t.elementType;
        if (y.$$typeof === Lt) {
          var C = y, x = C._payload, O = C._init;
          try {
            y = O(x);
          } catch ($) {
            y = null;
          }
          var L = y && y.propTypes;
          L && ji(
            L,
            l,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            ke(y)
          );
        }
      }
      if (e !== null) {
        var Z = e.memoizedProps;
        if (v(Z, l) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (zo = !1, wr(p, f))
            (e.flags & Yu) !== un && (zo = !0);
          else
            return t.lanes = e.lanes, Sl(e, t, p);
      }
      return ay(e, t, a, l, p);
    }
    function ry(e, t, a) {
      var l = t.pendingProps, f = l.children, p = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || l.mode === "unstable-defer-without-hiding")
        if ((t.mode & Os) === $n) {
          var y = {
            baseLanes: le
          };
          t.memoizedState = y, Ph(t, a);
        } else if (wr(a, Ia)) {
          var L = {
            baseLanes: le
          };
          t.memoizedState = L;
          var Z = p !== null ? p.baseLanes : a;
          Ph(t, Z);
        } else {
          var C;
          if (p !== null) {
            var x = p.baseLanes;
            C = tn(x, a);
          } else
            C = a;
          jh(Ia), t.lanes = t.childLanes = Ia;
          var O = {
            baseLanes: C
          };
          return t.memoizedState = O, Ph(t, C), null;
        }
      else {
        var $;
        p !== null ? ($ = tn(p.baseLanes, a), t.memoizedState = null) : $ = a, Ph(t, $);
      }
      return _a(e, t, f, a), t.child;
    }
    var x7 = ry;
    function T7(e, t, a) {
      var l = t.pendingProps;
      return _a(e, t, l, a), t.child;
    }
    function R7(e, t, a) {
      var l = t.pendingProps.children;
      return _a(e, t, l, a), t.child;
    }
    function k7(e, t, a) {
      {
        t.flags |= vt;
        var l = t.stateNode;
        l.effectDuration = 0, l.passiveEffectDuration = 0;
      }
      var f = t.pendingProps, p = f.children;
      return _a(e, t, p, a), t.child;
    }
    function U6(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Sr);
    }
    function ay(e, t, a, l, f) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && ji(
          p,
          l,
          // Resolved props
          "prop",
          ke(a)
        );
      }
      var y;
      {
        var C = Gc(t, a, !0);
        y = qc(t, C);
      }
      var x;
      Xc(t, f);
      {
        if (wv.current = t, er(!0), x = rf(e, t, a, l, y, f), t.mode & Qn) {
          kr();
          try {
            x = rf(e, t, a, l, y, f);
          } finally {
            xn();
          }
        }
        er(!1);
      }
      return e !== null && !zo ? (y6(e, t, f), Sl(e, t, f)) : (t.flags |= Fr, _a(e, t, x, f), t.child);
    }
    function j6(e, t, a, l, f) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && ji(
          p,
          l,
          // Resolved props
          "prop",
          ke(a)
        );
      }
      var y;
      Lo(a) ? (y = !0, Dp(t)) : y = !1, Xc(t, f);
      var C = t.stateNode, x;
      C === null ? (e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tt), i6(t, a, l), pg(t, a, l, f), x = !0) : e === null ? x = n7(t, a, l, f) : x = r7(e, t, a, l, f);
      var O = iy(e, t, a, x, y, f);
      {
        var L = t.stateNode;
        x && L.props !== l && (Hs || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ke(t.type) || "a component"), Hs = !0);
      }
      return O;
    }
    function iy(e, t, a, l, f, p) {
      U6(e, t);
      var y = (t.flags & nn) !== un;
      if (!l && !y)
        return f && RC(t, a, !1), Sl(e, t, p);
      var C = t.stateNode;
      wv.current = t;
      var x;
      if (y && typeof a.getDerivedStateFromError != "function")
        x = null, I6();
      else {
        if (er(!0), x = C.render(), t.mode & Qn) {
          kr();
          try {
            C.render();
          } finally {
            xn();
          }
        }
        er(!1);
      }
      return t.flags |= Fr, e !== null && y ? w7(e, t, x, p) : _a(e, t, x, p), t.memoizedState = C.state, f && RC(t, a, !0), t.child;
    }
    function V6(e) {
      var t = e.stateNode;
      t.pendingContext ? xC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xC(e, t.context, !1), bg(e, t.containerInfo);
    }
    function _7(e, t, a) {
      V6(t);
      var l = t.updateQueue;
      if (!(e !== null && l !== null))
        throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");
      var f = t.pendingProps, p = t.memoizedState, y = p !== null ? p.element : null;
      QC(e, t), sv(t, f, null, a);
      var C = t.memoizedState, x = C.element;
      if (x === y)
        return kg(), Sl(e, t, a);
      var O = t.stateNode;
      if (O.hydrate && s7(t)) {
        {
          var L = O.mutableSourceEagerHydrationData;
          if (L != null)
            for (var Z = 0; Z < L.length; Z += 2) {
              var $ = L[Z], J = L[Z + 1];
              g6($, J);
            }
        }
        var fe = s6(t, null, x, a);
        t.child = fe;
        for (var _e = fe; _e; )
          _e.flags = _e.flags & ~Tt | ba, _e = _e.sibling;
      } else
        _a(e, t, x, a), kg();
      return t.child;
    }
    function M7(e, t, a) {
      f6(t), e === null && Rg(t);
      var l = t.type, f = t.pendingProps, p = e !== null ? e.memoizedProps : null, y = f.children, C = $0(l, f);
      return C ? y = null : p !== null && $0(l, p) && (t.flags |= br), U6(e, t), _a(e, t, y, a), t.child;
    }
    function O7(e, t) {
      return e === null && Rg(t), null;
    }
    function N7(e, t, a, l, f) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tt);
      var p = t.pendingProps, y = a, C = y._payload, x = y._init, O = x(C);
      t.type = O;
      var L = t.tag = gx(O), Z = Fi(O, p), $;
      switch (L) {
        case T:
          return oy(t, O), t.type = O = pf(O), $ = ay(null, t, O, Z, f), $;
        case w:
          return t.type = O = Hy(O), $ = j6(null, t, O, Z, f), $;
        case z:
          return t.type = O = $y(O), $ = z6(null, t, O, Z, f), $;
        case Y: {
          if (t.type !== t.elementType) {
            var J = O.propTypes;
            J && ji(
              J,
              Z,
              // Resolved for outer only
              "prop",
              ke(O)
            );
          }
          return $ = H6(
            null,
            t,
            O,
            Fi(O.type, Z),
            // The inner type can have defaults too
            l,
            f
          ), $;
        }
      }
      var fe = "";
      throw O !== null && typeof O == "object" && O.$$typeof === Lt && (fe = " Did you wrap a component in React.lazy() more than once?"), Error("Element type is invalid. Received a promise that resolves to: " + O + ". Lazy element type must resolve to a class or function." + fe);
    }
    function D7(e, t, a, l, f) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tt), t.tag = w;
      var p;
      return Lo(a) ? (p = !0, Dp(t)) : p = !1, Xc(t, f), i6(t, a, l), pg(t, a, l, f), iy(null, t, a, !0, p, f);
    }
    function L7(e, t, a, l) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tt);
      var f = t.pendingProps, p;
      {
        var y = Gc(t, a, !1);
        p = qc(t, y);
      }
      Xc(t, l);
      var C;
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var x = ke(a) || "Unknown";
          Xg[x] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", x, x), Xg[x] = !0);
        }
        t.mode & Qn && Vi.recordLegacyContextWarning(t, null), er(!0), wv.current = t, C = rf(null, t, a, f, p, l), er(!1);
      }
      if (t.flags |= Fr, typeof C == "object" && C !== null && typeof C.render == "function" && C.$$typeof === void 0) {
        var O = ke(a) || "Unknown";
        xv[O] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", O, O, O), xv[O] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof C == "object" && C !== null && typeof C.render == "function" && C.$$typeof === void 0
      ) {
        {
          var L = ke(a) || "Unknown";
          xv[L] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", L, L, L), xv[L] = !0);
        }
        t.tag = w, t.memoizedState = null, t.updateQueue = null;
        var Z = !1;
        Lo(a) ? (Z = !0, Dp(t)) : Z = !1, t.memoizedState = C.state !== null && C.state !== void 0 ? C.state : null, rg(t);
        var $ = a.getDerivedStateFromProps;
        return typeof $ == "function" && Gp(t, a, $, f), a6(t, C), pg(t, a, f, l), iy(null, t, a, !0, Z, l);
      } else {
        if (t.tag = T, t.mode & Qn) {
          kr();
          try {
            C = rf(null, t, a, f, p, l);
          } finally {
            xn();
          }
        }
        return _a(null, t, C, l), oy(t, a), t.child;
      }
    }
    function oy(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", l = Tn();
          l && (a += `

Check the render method of \`` + l + "`.");
          var f = l || e._debugID || "", p = e._debugSource;
          p && (f = p.fileName + ":" + p.lineNumber), ty[f] || (ty[f] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = ke(t) || "Unknown";
          ey[y] || (h("%s: Function components do not support getDerivedStateFromProps.", y), ey[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var C = ke(t) || "Unknown";
          Jg[C] || (h("%s: Function components do not support contextType.", C), Jg[C] = !0);
        }
      }
    }
    var bh = {
      dehydrated: null,
      retryLane: qn
    };
    function Sh(e) {
      return {
        baseLanes: e
      };
    }
    function F6(e, t) {
      return {
        baseLanes: tn(e.baseLanes, t)
      };
    }
    function A7(e, t, a, l) {
      if (t !== null) {
        var f = t.memoizedState;
        if (f === null)
          return !1;
      }
      return eh(e, vv);
    }
    function B6(e, t) {
      return lu(e.childLanes, t);
    }
    function W6(e, t, a) {
      var l = t.pendingProps;
      Ix(t) && (t.flags |= nn);
      var f = Bi.current, p = !1, y = (t.flags & nn) !== un;
      if (y || A7(f, e) ? (p = !0, t.flags &= ~nn) : (e === null || e.memoizedState !== null) && l.fallback !== void 0 && l.unstable_avoidThisFallback !== !0 && (f = l7(f, wg)), f = pv(f), Ls(t, f), e === null) {
        l.fallback !== void 0 && Rg(t);
        var C = l.children, x = l.fallback;
        if (p) {
          var O = K6(t, C, x, a), L = t.child;
          return L.memoizedState = Sh(a), t.memoizedState = bh, O;
        } else if (typeof l.unstable_expectedLoadTime == "number") {
          var Z = K6(t, C, x, a), $ = t.child;
          return $.memoizedState = Sh(a), t.memoizedState = bh, t.lanes = Eo, jh(Eo), Z;
        } else
          return P7(t, C, a);
      } else {
        var J = e.memoizedState;
        if (J !== null)
          if (p) {
            var fe = l.fallback, _e = l.children, lt = Y6(e, t, _e, fe, a), Pt = t.child, ht = e.child.memoizedState;
            return Pt.memoizedState = ht === null ? Sh(a) : F6(ht, a), Pt.childLanes = B6(e, a), t.memoizedState = bh, lt;
          } else {
            var Jt = l.children, bn = q6(e, t, Jt, a);
            return t.memoizedState = null, bn;
          }
        else if (p) {
          var X = l.fallback, ae = l.children, G = Y6(e, t, ae, X, a), Ce = t.child, De = e.child.memoizedState;
          return Ce.memoizedState = De === null ? Sh(a) : F6(De, a), Ce.childLanes = B6(e, a), t.memoizedState = bh, G;
        } else {
          var Ye = l.children, Yt = q6(e, t, Ye, a);
          return t.memoizedState = null, Yt;
        }
      }
    }
    function P7(e, t, a) {
      var l = e.mode, f = {
        mode: "visible",
        children: t
      }, p = Ky(f, l, a, null);
      return p.return = e, e.child = p, p;
    }
    function K6(e, t, a, l) {
      var f = e.mode, p = e.child, y = {
        mode: "hidden",
        children: t
      }, C, x;
      return (f & Ra) === $n && p !== null ? (C = p, C.childLanes = le, C.pendingProps = y, e.mode & $a && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = 0, C.treeBaseDuration = 0), x = Bs(a, f, l, null)) : (C = Ky(y, f, le, null), x = Bs(a, f, l, null)), C.return = e, x.return = e, C.sibling = x, e.child = C, x;
    }
    function G6(e, t) {
      return Fs(e, t);
    }
    function q6(e, t, a, l) {
      var f = e.child, p = f.sibling, y = G6(f, {
        mode: "visible",
        children: a
      });
      return (t.mode & Ra) === $n && (y.lanes = l), y.return = t, y.sibling = null, p !== null && (p.nextEffect = null, p.flags = Rn, t.firstEffect = t.lastEffect = p), t.child = y, y;
    }
    function Y6(e, t, a, l, f) {
      var p = t.mode, y = e.child, C = y.sibling, x = {
        mode: "hidden",
        children: a
      }, O;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (p & Ra) === $n && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== y
      ) {
        var L = t.child;
        O = L, O.childLanes = le, O.pendingProps = x, t.mode & $a && (O.actualDuration = 0, O.actualStartTime = -1, O.selfBaseDuration = y.selfBaseDuration, O.treeBaseDuration = y.treeBaseDuration);
        var Z = O.lastEffect;
        Z !== null ? (t.firstEffect = O.firstEffect, t.lastEffect = Z, Z.nextEffect = null) : t.firstEffect = t.lastEffect = null;
      } else
        O = G6(y, x);
      var $;
      return C !== null ? $ = Fs(C, l) : ($ = Bs(l, p, f, null), $.flags |= Tt), $.return = t, O.return = t, O.sibling = $, t.child = O, $;
    }
    function Q6(e, t) {
      e.lanes = tn(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = tn(a.lanes, t)), GC(e.return, t);
    }
    function I7(e, t, a) {
      for (var l = t; l !== null; ) {
        if (l.tag === U) {
          var f = l.memoizedState;
          f !== null && Q6(l, a);
        } else if (l.tag === ge)
          Q6(l, a);
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
    function z7(e) {
      for (var t = e, a = null; t !== null; ) {
        var l = t.alternate;
        l !== null && th(l) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function H7(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !ny[e])
        if (ny[e] = !0, typeof e == "string")
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
    function $7(e, t) {
      e !== void 0 && !Ch[e] && (e !== "collapsed" && e !== "hidden" ? (Ch[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Ch[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Z6(e, t) {
      {
        var a = Array.isArray(e), l = !a && typeof ln(e) == "function";
        if (a || l) {
          var f = a ? "array" : "iterable";
          return h("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", f, t, f), !1;
        }
      }
      return !0;
    }
    function U7(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Array.isArray(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Z6(e[a], a))
              return;
        } else {
          var l = ln(e);
          if (typeof l == "function") {
            var f = l.call(e);
            if (f)
              for (var p = f.next(), y = 0; !p.done; p = f.next()) {
                if (!Z6(p.value, y))
                  return;
                y++;
              }
          } else
            h('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function ly(e, t, a, l, f, p) {
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
    function X6(e, t, a) {
      var l = t.pendingProps, f = l.revealOrder, p = l.tail, y = l.children;
      H7(f), $7(p, f), U7(y, f), _a(e, t, y, a);
      var C = Bi.current, x = eh(C, vv);
      if (x)
        C = xg(C, vv), t.flags |= nn;
      else {
        var O = e !== null && (e.flags & nn) !== un;
        O && I7(t, t.child, a), C = pv(C);
      }
      if (Ls(t, C), (t.mode & Ra) === $n)
        t.memoizedState = null;
      else
        switch (f) {
          case "forwards": {
            var L = z7(t.child), Z;
            L === null ? (Z = t.child, t.child = null) : (Z = L.sibling, L.sibling = null), ly(
              t,
              !1,
              // isBackwards
              Z,
              L,
              p,
              t.lastEffect
            );
            break;
          }
          case "backwards": {
            var $ = null, J = t.child;
            for (t.child = null; J !== null; ) {
              var fe = J.alternate;
              if (fe !== null && th(fe) === null) {
                t.child = J;
                break;
              }
              var _e = J.sibling;
              J.sibling = $, $ = J, J = _e;
            }
            ly(
              t,
              !0,
              // isBackwards
              $,
              null,
              // last
              p,
              t.lastEffect
            );
            break;
          }
          case "together": {
            ly(
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
    function j7(e, t, a) {
      bg(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = Zp(t, null, l, a) : _a(e, t, l, a), t.child;
    }
    var J6 = !1;
    function V7(e, t, a) {
      var l = t.type, f = l._context, p = t.pendingProps, y = t.memoizedProps, C = p.value;
      {
        "value" in p || J6 || (J6 = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var x = t.type.propTypes;
        x && ji(x, p, "prop", "Context.Provider");
      }
      if (KC(t, C), y !== null) {
        var O = y.value, L = YE(f, C, O);
        if (L === 0) {
          if (y.children === p.children && !Op())
            return Sl(e, t, a);
        } else
          QE(t, f, L, a);
      }
      var Z = p.children;
      return _a(e, t, Z, a), t.child;
    }
    var eb = !1;
    function F7(e, t, a) {
      var l = t.type;
      l._context === void 0 ? l !== l.Consumer && (eb || (eb = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var f = t.pendingProps, p = f.children;
      typeof p != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Xc(t, a);
      var y = pr(l, f.unstable_observedBits), C;
      return wv.current = t, er(!0), C = p(y), er(!1), t.flags |= Fr, _a(e, t, C, a), t.child;
    }
    function uy() {
      zo = !0;
    }
    function Sl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), I6(), Ly(t.lanes), wr(a, t.childLanes) ? (a7(e, t), t.child) : null;
    }
    function B7(e, t, a) {
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
    function tb(e, t, a) {
      var l = t.lanes;
      if (t._debugNeedsRemount && e !== null)
        return B7(e, t, By(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var f = e.memoizedProps, p = t.pendingProps;
        if (f !== p || Op() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          zo = !0;
        else if (wr(a, l))
          (e.flags & Yu) !== un ? zo = !0 : zo = !1;
        else {
          switch (zo = !1, t.tag) {
            case k:
              V6(t), kg();
              break;
            case A:
              f6(t);
              break;
            case w: {
              var y = t.type;
              Lo(y) && Dp(t);
              break;
            }
            case N:
              bg(t, t.stateNode.containerInfo);
              break;
            case V: {
              var C = t.memoizedProps.value;
              KC(t, C);
              break;
            }
            case I:
              {
                var x = wr(a, t.childLanes);
                x && (t.flags |= vt);
                var O = t.stateNode;
                O.effectDuration = 0, O.passiveEffectDuration = 0;
              }
              break;
            case U: {
              var L = t.memoizedState;
              if (L !== null) {
                var Z = t.child, $ = Z.childLanes;
                if (wr(a, $))
                  return W6(e, t, a);
                Ls(t, pv(Bi.current));
                var J = Sl(e, t, a);
                return J !== null ? J.sibling : null;
              } else
                Ls(t, pv(Bi.current));
              break;
            }
            case ge: {
              var fe = (e.flags & nn) !== un, _e = wr(a, t.childLanes);
              if (fe) {
                if (_e)
                  return X6(e, t, a);
                t.flags |= nn;
              }
              var lt = t.memoizedState;
              if (lt !== null && (lt.rendering = null, lt.tail = null, lt.lastEffect = null), Ls(t, Bi.current), _e)
                break;
              return null;
            }
            case de:
            case Ee:
              return t.lanes = le, ry(e, t, a);
          }
          return Sl(e, t, a);
        }
      } else
        zo = !1;
      switch (t.lanes = le, t.tag) {
        case _:
          return L7(e, t, t.type, a);
        case ne: {
          var Pt = t.elementType;
          return N7(e, t, Pt, l, a);
        }
        case T: {
          var ht = t.type, Jt = t.pendingProps, bn = t.elementType === ht ? Jt : Fi(ht, Jt);
          return ay(e, t, ht, bn, a);
        }
        case w: {
          var X = t.type, ae = t.pendingProps, G = t.elementType === X ? ae : Fi(X, ae);
          return j6(e, t, X, G, a);
        }
        case k:
          return _7(e, t, a);
        case A:
          return M7(e, t, a);
        case P:
          return O7(e, t);
        case U:
          return W6(e, t, a);
        case N:
          return j7(e, t, a);
        case z: {
          var Ce = t.type, De = t.pendingProps, Ye = t.elementType === Ce ? De : Fi(Ce, De);
          return z6(e, t, Ce, Ye, a);
        }
        case j:
          return T7(e, t, a);
        case D:
          return R7(e, t, a);
        case I:
          return k7(e, t, a);
        case V:
          return V7(e, t, a);
        case W:
          return F7(e, t, a);
        case Y: {
          var Yt = t.type, Mn = t.pendingProps, Un = Fi(Yt, Mn);
          if (t.type !== t.elementType) {
            var sn = Yt.propTypes;
            sn && ji(
              sn,
              Un,
              // Resolved for outer only
              "prop",
              ke(Yt)
            );
          }
          return Un = Fi(Yt.type, Un), H6(e, t, Yt, Un, l, a);
        }
        case Q:
          return $6(e, t, t.type, t.pendingProps, l, a);
        case ue: {
          var hr = t.type, rn = t.pendingProps, jn = t.elementType === hr ? rn : Fi(hr, rn);
          return D7(e, t, hr, jn, a);
        }
        case ge:
          return X6(e, t, a);
        case pe:
          break;
        case te:
          break;
        case se:
          break;
        case de:
          return ry(e, t, a);
        case Ee:
          return x7(e, t, a);
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function lf(e) {
      e.flags |= vt;
    }
    function nb(e) {
      e.flags |= Sr;
    }
    var rb, sy, ab, ib;
    rb = function(e, t, a, l) {
      for (var f = t.child; f !== null; ) {
        if (f.tag === A || f.tag === P)
          B9(e, f.stateNode);
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
    }, sy = function(e) {
    }, ab = function(e, t, a, l, f) {
      var p = e.memoizedProps;
      if (p !== l) {
        var y = t.stateNode, C = Sg(), x = K9(y, a, p, l, f, C);
        t.updateQueue = x, x && lf(t);
      }
    }, ib = function(e, t, a, l) {
      a !== l && lf(t);
    };
    function Tv(e, t) {
      if (!_g())
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
    function ob(e, t, a) {
      var l = t.pendingProps;
      switch (t.tag) {
        case _:
        case ne:
        case Q:
        case T:
        case z:
        case j:
        case D:
        case I:
        case W:
        case Y:
          return null;
        case w: {
          var f = t.type;
          return Lo(f) && Np(t), null;
        }
        case k: {
          Jc(t), K0(t), Og();
          var p = t.stateNode;
          if (p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), e === null || e.child === null) {
            var y = nh(t);
            y ? lf(t) : p.hydrate || (t.flags |= ei);
          }
          return sy(t), null;
        }
        case A: {
          Eg(t);
          var C = c6(), x = t.type;
          if (e !== null && t.stateNode != null)
            ab(e, t, x, l, C), e.ref !== t.ref && nb(t);
          else {
            if (!l) {
              if (t.stateNode === null)
                throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return null;
            }
            var O = Sg(), L = nh(t);
            if (L)
              c7(t, C, O) && lf(t);
            else {
              var Z = F9(x, l, C, O, t);
              rb(Z, t, !1, !1), t.stateNode = Z, W9(Z, x, l, C) && lf(t);
            }
            t.ref !== null && nb(t);
          }
          return null;
        }
        case P: {
          var $ = l;
          if (e && t.stateNode != null) {
            var J = e.memoizedProps;
            ib(e, t, J, $);
          } else {
            if (typeof $ != "string" && t.stateNode === null)
              throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var fe = c6(), _e = Sg(), lt = nh(t);
            lt ? f7(t) && lf(t) : t.stateNode = G9($, fe, _e, t);
          }
          return null;
        }
        case U: {
          ef(t);
          var Pt = t.memoizedState;
          if ((t.flags & nn) !== un)
            return t.lanes = a, (t.mode & $a) !== $n && Zg(t), t;
          var ht = Pt !== null, Jt = !1;
          if (e === null)
            t.memoizedProps.fallback !== void 0 && nh(t);
          else {
            var bn = e.memoizedState;
            Jt = bn !== null;
          }
          if (ht && !Jt && (t.mode & Ra) !== $n) {
            var X = e === null && t.memoizedProps.unstable_avoidThisFallback !== !0;
            X || eh(Bi.current, wg) ? Ow() : Nw();
          }
          return (ht || Jt) && (t.flags |= vt), null;
        }
        case N:
          return Jc(t), sy(t), e === null && OE(t.stateNode.containerInfo), null;
        case V:
          return eg(t), null;
        case ue: {
          var ae = t.type;
          return Lo(ae) && Np(t), null;
        }
        case ge: {
          ef(t);
          var G = t.memoizedState;
          if (G === null)
            return null;
          var Ce = (t.flags & nn) !== un, De = G.rendering;
          if (De === null)
            if (Ce)
              Tv(G, !1);
            else {
              var Ye = Lw() && (e === null || (e.flags & nn) === un);
              if (!Ye)
                for (var Yt = t.child; Yt !== null; ) {
                  var Mn = th(Yt);
                  if (Mn !== null) {
                    Ce = !0, t.flags |= nn, Tv(G, !1);
                    var Un = Mn.updateQueue;
                    return Un !== null && (t.updateQueue = Un, t.flags |= vt), G.lastEffect === null && (t.firstEffect = null), t.lastEffect = G.lastEffect, i7(t, a), Ls(t, xg(Bi.current, vv)), t.child;
                  }
                  Yt = Yt.sibling;
                }
              G.tail !== null && ta() > Eb() && (t.flags |= nn, Ce = !0, Tv(G, !1), t.lanes = Eo, jh(Eo));
            }
          else {
            if (!Ce) {
              var sn = th(De);
              if (sn !== null) {
                t.flags |= nn, Ce = !0;
                var hr = sn.updateQueue;
                if (hr !== null && (t.updateQueue = hr, t.flags |= vt), Tv(G, !0), G.tail === null && G.tailMode === "hidden" && !De.alternate && !_g()) {
                  var rn = t.lastEffect = G.lastEffect;
                  return rn !== null && (rn.nextEffect = null), null;
                }
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                ta() * 2 - G.renderingStartTime > Eb() && a !== Ia && (t.flags |= nn, Ce = !0, Tv(G, !1), t.lanes = Eo, jh(Eo));
            }
            if (G.isBackwards)
              De.sibling = t.child, t.child = De;
            else {
              var jn = G.last;
              jn !== null ? jn.sibling = De : t.child = De, G.last = De;
            }
          }
          if (G.tail !== null) {
            var Lr = G.tail;
            G.rendering = Lr, G.tail = Lr.sibling, G.lastEffect = t.lastEffect, G.renderingStartTime = ta(), Lr.sibling = null;
            var nr = Bi.current;
            return Ce ? nr = xg(nr, vv) : nr = pv(nr), Ls(t, nr), Lr;
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
        case Ee: {
          if (Dy(t), e !== null) {
            var jo = t.memoizedState, rr = e.memoizedState, Vo = rr !== null, Ws = jo !== null;
            Vo !== Ws && l.mode !== "unstable-defer-without-hiding" && (t.flags |= vt);
          }
          return null;
        }
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function W7(e, t) {
      switch (e.tag) {
        case w: {
          var a = e.type;
          Lo(a) && Np(e);
          var l = e.flags;
          return l & Aa ? (e.flags = l & ~Aa | nn, (e.mode & $a) !== $n && Zg(e), e) : null;
        }
        case k: {
          Jc(e), K0(e), Og();
          var f = e.flags;
          if ((f & nn) !== un)
            throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");
          return e.flags = f & ~Aa | nn, e;
        }
        case A:
          return Eg(e), null;
        case U: {
          ef(e);
          var p = e.flags;
          return p & Aa ? (e.flags = p & ~Aa | nn, (e.mode & $a) !== $n && Zg(e), e) : null;
        }
        case ge:
          return ef(e), null;
        case N:
          return Jc(e), null;
        case V:
          return eg(e), null;
        case de:
        case Ee:
          return Dy(e), null;
        default:
          return null;
      }
    }
    function lb(e) {
      switch (e.tag) {
        case w: {
          var t = e.type.childContextTypes;
          t != null && Np(e);
          break;
        }
        case k: {
          Jc(e), K0(e), Og();
          break;
        }
        case A: {
          Eg(e);
          break;
        }
        case N:
          Jc(e);
          break;
        case U:
          ef(e);
          break;
        case ge:
          ef(e);
          break;
        case V:
          eg(e);
          break;
        case de:
        case Ee:
          Dy(e);
          break;
      }
    }
    function cy(e, t) {
      return {
        value: e,
        source: t,
        stack: Or(t)
      };
    }
    function K7(e, t) {
      return !0;
    }
    function fy(e, t) {
      try {
        var a = K7(e, t);
        if (a === !1)
          return;
        var l = t.value, f = t.source, p = t.stack, y = p !== null ? p : "";
        if (l != null && l._suppressLogging) {
          if (e.tag === w)
            return;
          console.error(l);
        }
        var C = f ? ke(f.type) : null, x = C ? "The above error occurred in the <" + C + "> component:" : "The above error occurred in one of your React components:", O, L = ke(e.type);
        L ? O = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + L + ".") : O = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        var Z = x + `
` + y + `

` + ("" + O);
        console.error(Z);
      } catch ($) {
        setTimeout(function() {
          throw $;
        });
      }
    }
    var G7 = typeof WeakMap == "function" ? WeakMap : Map;
    function ub(e, t, a) {
      var l = gu(_n, a);
      l.tag = tg, l.payload = {
        element: null
      };
      var f = t.value;
      return l.callback = function() {
        Gw(f), fy(e, t);
      }, l;
    }
    function sb(e, t, a) {
      var l = gu(_n, a);
      l.tag = tg;
      var f = e.type.getDerivedStateFromError;
      if (typeof f == "function") {
        var p = t.value;
        l.payload = function() {
          return fy(e, t), f(p);
        };
      }
      var y = e.stateNode;
      return y !== null && typeof y.componentDidCatch == "function" ? l.callback = function() {
        Fb(e), typeof f != "function" && (Ww(this), fy(e, t));
        var x = t.value, O = t.stack;
        this.componentDidCatch(x, {
          componentStack: O !== null ? O : ""
        }), typeof f != "function" && (wr(e.lanes, Vt) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ke(e.type) || "Unknown"));
      } : l.callback = function() {
        Fb(e);
      }, l;
    }
    function q7(e, t, a) {
      var l = e.pingCache, f;
      if (l === null ? (l = e.pingCache = new G7(), f = /* @__PURE__ */ new Set(), l.set(t, f)) : (f = l.get(t), f === void 0 && (f = /* @__PURE__ */ new Set(), l.set(t, f))), !f.has(a)) {
        f.add(a);
        var p = qw.bind(null, e, t, a);
        t.then(p, p);
      }
    }
    function Y7(e, t, a, l, f) {
      if (a.flags |= qu, a.firstEffect = a.lastEffect = null, l !== null && typeof l == "object" && typeof l.then == "function") {
        var p = l;
        if ((a.mode & Ra) === $n) {
          var y = a.alternate;
          y ? (a.updateQueue = y.updateQueue, a.memoizedState = y.memoizedState, a.lanes = y.lanes) : (a.updateQueue = null, a.memoizedState = null);
        }
        var C = eh(Bi.current, wg), x = t;
        do {
          if (x.tag === U && u7(x, C)) {
            var O = x.updateQueue;
            if (O === null) {
              var L = /* @__PURE__ */ new Set();
              L.add(p), x.updateQueue = L;
            } else
              O.add(p);
            if ((x.mode & Ra) === $n) {
              if (x.flags |= nn, a.flags |= Yu, a.flags &= ~(ad | qu), a.tag === w) {
                var Z = a.alternate;
                if (Z === null)
                  a.tag = ue;
                else {
                  var $ = gu(_n, Vt);
                  $.tag = Vp, yu(a, $);
                }
              }
              a.lanes = tn(a.lanes, Vt);
              return;
            }
            q7(e, p, f), x.flags |= Aa, x.lanes = f;
            return;
          }
          x = x.return;
        } while (x !== null);
        l = new Error((ke(a.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
      }
      Dw(), l = cy(l, a);
      var J = t;
      do {
        switch (J.tag) {
          case k: {
            var fe = l;
            J.flags |= Aa;
            var _e = dr(f);
            J.lanes = tn(J.lanes, _e);
            var lt = ub(J, fe, _e);
            ZC(J, lt);
            return;
          }
          case w:
            var Pt = l, ht = J.type, Jt = J.stateNode;
            if ((J.flags & nn) === un && (typeof ht.getDerivedStateFromError == "function" || Jt !== null && typeof Jt.componentDidCatch == "function" && !Ay(Jt))) {
              J.flags |= Aa;
              var bn = dr(f);
              J.lanes = tn(J.lanes, bn);
              var X = sb(J, Pt, bn);
              ZC(J, X);
              return;
            }
            break;
        }
        J = J.return;
      } while (J !== null);
    }
    var cb = null;
    cb = /* @__PURE__ */ new Set();
    var Q7 = typeof WeakSet == "function" ? WeakSet : Set, Z7 = function(e, t) {
      t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount();
    };
    function X7(e, t) {
      if (jr(null, Z7, null, e, t), ua()) {
        var a = Vr();
        wu(e, a);
      }
    }
    function fb(e) {
      var t = e.ref;
      if (t !== null)
        if (typeof t == "function") {
          if (jr(null, t, null, null), ua()) {
            var a = Vr();
            wu(e, a);
          }
        } else
          t.current = null;
    }
    function J7(e, t) {
      if (jr(null, t, null), ua()) {
        var a = Vr();
        wu(e, a);
      }
    }
    function ew(e, t) {
      switch (t.tag) {
        case T:
        case z:
        case Q:
        case se:
          return;
        case w: {
          if (t.flags & ei && e !== null) {
            var a = e.memoizedProps, l = e.memoizedState, f = t.stateNode;
            t.type === t.elementType && !Hs && (f.props !== t.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ke(t.type) || "instance"), f.state !== t.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ke(t.type) || "instance"));
            var p = f.getSnapshotBeforeUpdate(t.elementType === t.type ? a : Fi(t.type, a), l);
            {
              var y = cb;
              p === void 0 && !y.has(t.type) && (y.add(t.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ke(t.type)));
            }
            f.__reactInternalSnapshotBeforeUpdate = p;
          }
          return;
        }
        case k: {
          if (t.flags & ei) {
            var C = t.stateNode;
            j0(C.containerInfo);
          }
          return;
        }
        case A:
        case P:
        case N:
        case ue:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function tw(e, t) {
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
    function nw(e, t) {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var f = l.next, p = f;
        do {
          if ((p.tag & e) === e) {
            var y = p.create;
            p.destroy = y();
            {
              var C = p.destroy;
              if (C !== void 0 && typeof C != "function") {
                var x = void 0;
                C === null ? x = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof C.then == "function" ? x = `

It looks like you wrote useEffect(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

useEffect(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : x = " You returned: " + C, h("An effect function must not return anything besides a function, which is used for clean-up.%s", x);
              }
            }
          }
          p = p.next;
        } while (p !== f);
      }
    }
    function rw(e) {
      var t = e.updateQueue, a = t !== null ? t.lastEffect : null;
      if (a !== null) {
        var l = a.next, f = l;
        do {
          var p = f, y = p.next, C = p.tag;
          (C & hv) !== Tg && (C & tf) !== Tg && (Nb(e, f), Vw(e, f)), f = y;
        } while (f !== l);
      }
    }
    function aw(e, t, a, l) {
      switch (a.tag) {
        case T:
        case z:
        case Q:
        case se: {
          nw(nf | tf, a), rw(a);
          return;
        }
        case w: {
          var f = a.stateNode;
          if (a.flags & vt)
            if (t === null)
              a.type === a.elementType && !Hs && (f.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ke(a.type) || "instance"), f.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ke(a.type) || "instance")), f.componentDidMount();
            else {
              var p = a.elementType === a.type ? t.memoizedProps : Fi(a.type, t.memoizedProps), y = t.memoizedState;
              a.type === a.elementType && !Hs && (f.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ke(a.type) || "instance"), f.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ke(a.type) || "instance")), f.componentDidUpdate(p, y, f.__reactInternalSnapshotBeforeUpdate);
            }
          var C = a.updateQueue;
          C !== null && (a.type === a.elementType && !Hs && (f.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ke(a.type) || "instance"), f.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ke(a.type) || "instance")), JC(a, C, f));
          return;
        }
        case k: {
          var x = a.updateQueue;
          if (x !== null) {
            var O = null;
            if (a.child !== null)
              switch (a.child.tag) {
                case A:
                  O = a.child.stateNode;
                  break;
                case w:
                  O = a.child.stateNode;
                  break;
              }
            JC(a, x, O);
          }
          return;
        }
        case A: {
          var L = a.stateNode;
          if (t === null && a.flags & vt) {
            var Z = a.type, $ = a.memoizedProps;
            Y9(L, Z, $);
          }
          return;
        }
        case P:
          return;
        case N:
          return;
        case I: {
          {
            var J = a.memoizedProps;
            J.onCommit;
            var fe = J.onRender;
            a.stateNode.effectDuration;
            var _e = E7();
            typeof fe == "function" && fe(a.memoizedProps.id, t === null ? "mount" : "update", a.actualDuration, a.treeBaseDuration, a.actualStartTime, _e, e.memoizedInteractions);
          }
          return;
        }
        case U: {
          dw(e, a);
          return;
        }
        case ge:
        case ue:
        case pe:
        case te:
        case de:
        case Ee:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function db(e, t) {
      for (var a = e; ; ) {
        if (a.tag === A) {
          var l = a.stateNode;
          t ? aE(l) : oE(a.stateNode, a.memoizedProps);
        } else if (a.tag === P) {
          var f = a.stateNode;
          t ? iE(f) : lE(f, a.memoizedProps);
        } else if (!((a.tag === de || a.tag === Ee) && a.memoizedState !== null && a !== e)) {
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
    function iw(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, l;
        switch (e.tag) {
          case A:
            l = a;
            break;
          default:
            l = a;
        }
        typeof t == "function" ? t(l) : (t.hasOwnProperty("current") || h("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ke(e.type)), t.current = l);
      }
    }
    function ow(e) {
      var t = e.ref;
      t !== null && (typeof t == "function" ? t(null) : t.current = null);
    }
    function vb(e, t, a) {
      switch (zE(t), t.tag) {
        case T:
        case z:
        case Y:
        case Q:
        case se: {
          var l = t.updateQueue;
          if (l !== null) {
            var f = l.lastEffect;
            if (f !== null) {
              var p = f.next, y = p;
              do {
                var C = y, x = C.destroy, O = C.tag;
                x !== void 0 && ((O & hv) !== Tg ? Nb(t, y) : J7(t, x)), y = y.next;
              } while (y !== p);
            }
          }
          return;
        }
        case w: {
          fb(t);
          var L = t.stateNode;
          typeof L.componentWillUnmount == "function" && X7(t, L);
          return;
        }
        case A: {
          fb(t);
          return;
        }
        case N: {
          gb(e, t);
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
    function lw(e, t, a) {
      for (var l = t; ; ) {
        if (vb(e, l), l.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
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
    function pb(e) {
      e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null, e._debugOwner = null;
    }
    function uw(e) {
      for (var t = e.return; t !== null; ) {
        if (hb(t))
          return t;
        t = t.return;
      }
      throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function hb(e) {
      return e.tag === A || e.tag === k || e.tag === N;
    }
    function sw(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || hb(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== A && t.tag !== P && t.tag !== re; ) {
            if (t.flags & Tt || t.child === null || t.tag === N)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Tt))
            return t.stateNode;
        }
    }
    function mb(e) {
      var t = uw(e), a, l, f = t.stateNode;
      switch (t.tag) {
        case A:
          a = f, l = !1;
          break;
        case k:
          a = f.containerInfo, l = !0;
          break;
        case N:
          a = f.containerInfo, l = !0;
          break;
        case pe:
        default:
          throw Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
      t.flags & br && (vC(a), t.flags &= ~br);
      var p = sw(e);
      l ? dy(e, p, a) : vy(e, p, a);
    }
    function dy(e, t, a) {
      var l = e.tag, f = l === A || l === P;
      if (f || xe) {
        var p = f ? e.stateNode : e.stateNode.instance;
        t ? tE(a, p, t) : J9(a, p);
      } else if (l !== N) {
        var y = e.child;
        if (y !== null) {
          dy(y, t, a);
          for (var C = y.sibling; C !== null; )
            dy(C, t, a), C = C.sibling;
        }
      }
    }
    function vy(e, t, a) {
      var l = e.tag, f = l === A || l === P;
      if (f || xe) {
        var p = f ? e.stateNode : e.stateNode.instance;
        t ? eE(a, p, t) : X9(a, p);
      } else if (l !== N) {
        var y = e.child;
        if (y !== null) {
          vy(y, t, a);
          for (var C = y.sibling; C !== null; )
            vy(C, t, a), C = C.sibling;
        }
      }
    }
    function gb(e, t, a) {
      for (var l = t, f = !1, p, y; ; ) {
        if (!f) {
          var C = l.return;
          e:
            for (; ; ) {
              if (C === null)
                throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
              var x = C.stateNode;
              switch (C.tag) {
                case A:
                  p = x, y = !1;
                  break e;
                case k:
                  p = x.containerInfo, y = !0;
                  break e;
                case N:
                  p = x.containerInfo, y = !0;
                  break e;
              }
              C = C.return;
            }
          f = !0;
        }
        if (l.tag === A || l.tag === P)
          lw(e, l), y ? rE(p, l.stateNode) : nE(p, l.stateNode);
        else if (l.tag === N) {
          if (l.child !== null) {
            p = l.stateNode.containerInfo, y = !0, l.child.return = l, l = l.child;
            continue;
          }
        } else if (vb(e, l), l.child !== null) {
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
    function cw(e, t, a) {
      gb(e, t);
      var l = t.alternate;
      pb(t), l !== null && pb(l);
    }
    function py(e, t) {
      switch (t.tag) {
        case T:
        case z:
        case Y:
        case Q:
        case se: {
          tw(nf | tf, t);
          return;
        }
        case w:
          return;
        case A: {
          var a = t.stateNode;
          if (a != null) {
            var l = t.memoizedProps, f = e !== null ? e.memoizedProps : l, p = t.type, y = t.updateQueue;
            t.updateQueue = null, y !== null && Q9(a, y, p, f, l);
          }
          return;
        }
        case P: {
          if (t.stateNode === null)
            throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var C = t.stateNode, x = t.memoizedProps, O = e !== null ? e.memoizedProps : x;
          Z9(C, O, x);
          return;
        }
        case k: {
          {
            var L = t.stateNode;
            L.hydrate && (L.hydrate = !1, hE(L.containerInfo));
          }
          return;
        }
        case I:
          return;
        case U: {
          fw(t), yb(t);
          return;
        }
        case ge: {
          yb(t);
          return;
        }
        case ue:
          return;
        case pe:
          break;
        case te:
          break;
        case de:
        case Ee: {
          var Z = t.memoizedState, $ = Z !== null;
          db(t, $);
          return;
        }
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function fw(e) {
      var t = e.memoizedState;
      if (t !== null) {
        Mw();
        {
          var a = e.child;
          db(a, !0);
        }
      }
    }
    function dw(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var l = t.alternate;
        if (l !== null) {
          var f = l.memoizedState;
          if (f !== null) {
            var p = f.dehydrated;
            p !== null && mE(p);
          }
        }
      }
    }
    function yb(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Q7()), t.forEach(function(l) {
          var f = Qw.bind(null, e, l);
          a.has(l) || (l.__reactDoNotTraceInteractions !== !0 && (f = c.unstable_wrap(f)), a.add(l), l.then(f, f));
        });
      }
    }
    function vw(e, t) {
      if (e !== null) {
        var a = e.memoizedState;
        if (a === null || a.dehydrated !== null) {
          var l = t.memoizedState;
          return l !== null && l.dehydrated === null;
        }
      }
      return !1;
    }
    function pw(e) {
      vC(e.stateNode);
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Rv = Symbol.for;
      Rv("selector.component"), Rv("selector.has_pseudo_class"), Rv("selector.role"), Rv("selector.test_id"), Rv("selector.text");
    }
    var hw = [];
    function mw() {
      hw.forEach(function(e) {
        return e();
      });
    }
    var gw = Math.ceil, hy = d.ReactCurrentDispatcher, my = d.ReactCurrentOwner, gy = d.IsSomeRendererActing, Zn = (
      /*             */
      0
    ), Eh = (
      /*               */
      1
    ), yw = (
      /*                 */
      2
    ), yy = (
      /*         */
      4
    ), Cy = (
      /*       */
      8
    ), Ua = (
      /*                */
      16
    ), Ho = (
      /*                */
      32
    ), Cb = (
      /*       */
      64
    ), El = 0, wh = 1, xh = 2, Th = 3, Rh = 4, by = 5, pt = Zn, fa = null, Xn = null, da = le, $o = le, Sy = hu(le), Kr = El, kh = null, $s = le, _h = le, Us = le, Mh = le, Ey = null, wy = 0, bb = 500, Sb = 1 / 0, Cw = 500;
    function uf() {
      Sb = ta() + Cw;
    }
    function Eb() {
      return Sb;
    }
    var qe = null, Oh = !1, xy = null, sf = null, wl = !1, cf = null, kv = Q0, Ty = le, Ry = [], ky = [], xl = null, bw = 50, _v = 0, _y = null, Sw = 50, Nh = 0, js = null, Mv = _n, Tl = le, Dh = le, My = !1, Ov = null, Lh = !1;
    function Ew() {
      return fa;
    }
    function ja() {
      return (pt & (Ua | Ho)) !== Zn ? ta() : (Mv !== _n || (Mv = ta()), Mv);
    }
    function Eu(e) {
      var t = e.mode;
      if ((t & Ra) === $n)
        return Vt;
      if ((t & Os) === $n)
        return Qc() === fi ? Vt : Ii;
      Tl === le && (Tl = $s);
      var a = GE() !== KE;
      if (a)
        return Dh !== le && (Dh = Ey !== null ? Ey.pendingLanes : le), F1(Tl, Dh);
      var l = Qc(), f;
      if (
        // TODO: Temporary. We're removing the concept of discrete updates.
        (pt & yy) !== Zn && l === _s
      )
        f = ou(Jl, Tl);
      else {
        var p = wd(l);
        f = ou(p, Tl);
      }
      return f;
    }
    function ww(e) {
      var t = e.mode;
      return (t & Ra) === $n ? Vt : (t & Os) === $n ? Qc() === fi ? Vt : Ii : (Tl === le && (Tl = $s), Rd(Tl));
    }
    function ra(e, t, a) {
      Xw(), nx(e);
      var l = Ah(e, t);
      if (l === null)
        return ex(e), null;
      uu(l, t, a), l === fa && (Us = tn(Us, t), Kr === Rh && ff(l, da));
      var f = Qc();
      t === Vt ? /* Check if we're inside unbatchedUpdates */ (pt & Cy) !== Zn && // Check if we're not already rendering
      (pt & (Ua | Ho)) === Zn ? (xu(l, t), Oy(l)) : (hi(l, a), xu(l, t), pt === Zn && (uf(), Po())) : ((pt & yy) !== Zn && // Only updates at user-blocking priority or greater are considered
      // discrete, even inside a discrete event.
      (f === _s || f === fi) && (xl === null ? xl = /* @__PURE__ */ new Set([l]) : xl.add(l)), hi(l, a), xu(l, t)), Ey = l;
    }
    function Ah(e, t) {
      e.lanes = tn(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = tn(a.lanes, t)), a === null && (e.flags & (Tt | ba)) !== un && Lb(e);
      for (var l = e, f = e.return; f !== null; )
        f.childLanes = tn(f.childLanes, t), a = f.alternate, a !== null ? a.childLanes = tn(a.childLanes, t) : (f.flags & (Tt | ba)) !== un && Lb(e), l = f, f = f.return;
      if (l.tag === k) {
        var p = l.stateNode;
        return p;
      } else
        return null;
    }
    function hi(e, t) {
      var a = e.callbackNode;
      m0(e, t);
      var l = cs(e, e === fa ? da : le), f = Xr();
      if (l === le) {
        a !== null && (UC(a), e.callbackNode = null, e.callbackPriority = Pi);
        return;
      }
      if (a !== null) {
        var p = e.callbackPriority;
        if (p === f)
          return;
        UC(a);
      }
      var y;
      if (f === Co)
        y = FE(Oy.bind(null, e));
      else if (f === is)
        y = mu(fi, Oy.bind(null, e));
      else {
        var C = kc(f);
        y = mu(C, wb.bind(null, e));
      }
      e.callbackPriority = f, e.callbackNode = y;
    }
    function wb(e) {
      if (Mv = _n, Tl = le, Dh = le, (pt & (Ua | Ho)) !== Zn)
        throw Error("Should not already be working.");
      var t = e.callbackNode, a = Uo();
      if (a && e.callbackNode !== t)
        return null;
      var l = cs(e, e === fa ? da : le);
      if (l === le)
        return null;
      var f = Pw(e, l);
      if (wr($s, Us))
        df(e, le);
      else if (f !== El) {
        if (f === xh && (pt |= Cb, e.hydrate && (e.hydrate = !1, j0(e.containerInfo)), l = Ea(e), l !== le && (f = Nv(e, l))), f === wh) {
          var p = kh;
          throw df(e, le), ff(e, l), hi(e, ta()), p;
        }
        var y = e.current.alternate;
        e.finishedWork = y, e.finishedLanes = l, xw(e, f, l);
      }
      return hi(e, ta()), e.callbackNode === t ? wb.bind(null, e) : null;
    }
    function xw(e, t, a) {
      switch (t) {
        case El:
        case wh:
          throw Error("Root did not complete. This is a bug in React.");
        case xh: {
          Vs(e);
          break;
        }
        case Th: {
          if (ff(e, a), Td(a) && // do not delay if we're inside an act() scope
          !ox()) {
            var l = wy + bb - ta();
            if (l > 10) {
              var f = cs(e, le);
              if (f !== le)
                break;
              var p = e.suspendedLanes;
              if (!xo(p, a)) {
                ja(), _d(e, p);
                break;
              }
              e.timeoutHandle = dC(Vs.bind(null, e), l);
              break;
            }
          }
          Vs(e);
          break;
        }
        case Rh: {
          if (ff(e, a), V1(a))
            break;
          {
            var y = p0(e, a), C = y, x = ta() - C, O = Zw(x) - x;
            if (O > 10) {
              e.timeoutHandle = dC(Vs.bind(null, e), O);
              break;
            }
          }
          Vs(e);
          break;
        }
        case by: {
          Vs(e);
          break;
        }
        default:
          throw Error("Unknown root exit status.");
      }
    }
    function ff(e, t) {
      t = lu(t, Mh), t = lu(t, Us), G1(e, t);
    }
    function Oy(e) {
      if ((pt & (Ua | Ho)) !== Zn)
        throw Error("Should not already be working.");
      Uo();
      var t, a;
      if (e === fa && wr(e.expiredLanes, da) ? (t = da, a = Nv(e, t), wr($s, Us) && (t = cs(e, t), a = Nv(e, t))) : (t = cs(e, le), a = Nv(e, t)), e.tag !== G0 && a === xh && (pt |= Cb, e.hydrate && (e.hydrate = !1, j0(e.containerInfo)), t = Ea(e), t !== le && (a = Nv(e, t))), a === wh) {
        var l = kh;
        throw df(e, le), ff(e, t), hi(e, ta()), l;
      }
      var f = e.current.alternate;
      return e.finishedWork = f, e.finishedLanes = t, Vs(e), hi(e, ta()), null;
    }
    function Tw() {
      if ((pt & (Eh | Ua | Ho)) !== Zn) {
        (pt & Ua) !== Zn && h("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.");
        return;
      }
      Rw(), Uo();
    }
    function Rw() {
      if (xl !== null) {
        var e = xl;
        xl = null, e.forEach(function(t) {
          fs(t), hi(t, ta());
        });
      }
      Po();
    }
    function xb(e, t) {
      var a = pt;
      pt |= Eh;
      try {
        return e(t);
      } finally {
        pt = a, pt === Zn && (uf(), Po());
      }
    }
    function kw(e, t) {
      var a = pt;
      pt |= yw;
      try {
        return e(t);
      } finally {
        pt = a, pt === Zn && (uf(), Po());
      }
    }
    function _w(e, t, a, l, f) {
      var p = pt;
      pt |= yy;
      try {
        return Ms(_s, e.bind(null, t, a, l, f));
      } finally {
        pt = p, pt === Zn && (uf(), Po());
      }
    }
    function Tb(e, t) {
      var a = pt;
      pt &= ~Eh, pt |= Cy;
      try {
        return e(t);
      } finally {
        pt = a, pt === Zn && (uf(), Po());
      }
    }
    function Ny(e, t) {
      var a = pt;
      if ((a & (Ua | Ho)) !== Zn)
        return h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), e(t);
      pt |= Eh;
      try {
        return e ? Ms(fi, e.bind(null, t)) : void 0;
      } finally {
        pt = a, Po();
      }
    }
    function Ph(e, t) {
      ea(Sy, $o, e), $o = tn($o, t), $s = tn($s, t);
    }
    function Dy(e) {
      $o = Sy.current, Jr(Sy, e);
    }
    function df(e, t) {
      e.finishedWork = null, e.finishedLanes = le;
      var a = e.timeoutHandle;
      if (a !== U0 && (e.timeoutHandle = U0, q9(a)), Xn !== null)
        for (var l = Xn.return; l !== null; )
          lb(l), l = l.return;
      fa = e, Xn = Fs(e.current, null), da = $o = $s = t, Kr = El, kh = null, _h = le, Us = le, Mh = le, js = null, Vi.discardPendingWarnings();
    }
    function Rb(e, t) {
      do {
        var a = Xn;
        try {
          if (jp(), C6(), Nn(), my.current = null, a === null || a.return === null) {
            Kr = wh, kh = t, Xn = null;
            return;
          }
          Me && a.mode & $a && yh(a, !0), Y7(e, a.return, a, t, da), Ob(a);
        } catch (l) {
          t = l, Xn === a && a !== null ? (a = a.return, Xn = a) : a = Xn;
          continue;
        }
        return;
      } while (!0);
    }
    function kb() {
      var e = hy.current;
      return hy.current = hh, e === null ? hh : e;
    }
    function _b(e) {
      hy.current = e;
    }
    function Ih(e) {
      {
        var t = c.__interactionsRef.current;
        return c.__interactionsRef.current = e.memoizedInteractions, t;
      }
    }
    function zh(e) {
      c.__interactionsRef.current = e;
    }
    function Mw() {
      wy = ta();
    }
    function Ly(e) {
      _h = tn(e, _h);
    }
    function Ow() {
      Kr === El && (Kr = Th);
    }
    function Nw() {
      (Kr === El || Kr === Th) && (Kr = Rh), fa !== null && (xd(_h) || xd(Us)) && ff(fa, da);
    }
    function Dw() {
      Kr !== by && (Kr = xh);
    }
    function Lw() {
      return Kr === El;
    }
    function Nv(e, t) {
      var a = pt;
      pt |= Ua;
      var l = kb();
      (fa !== e || da !== t) && (df(e, t), $b(e, t));
      var f = Ih(e);
      do
        try {
          Aw();
          break;
        } catch (p) {
          Rb(e, p);
        }
      while (!0);
      if (jp(), zh(f), pt = a, _b(l), Xn !== null)
        throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return fa = null, da = le, Kr;
    }
    function Aw() {
      for (; Xn !== null; )
        Mb(Xn);
    }
    function Pw(e, t) {
      var a = pt;
      pt |= Ua;
      var l = kb();
      (fa !== e || da !== t) && (uf(), df(e, t), $b(e, t));
      var f = Ih(e);
      do
        try {
          Iw();
          break;
        } catch (p) {
          Rb(e, p);
        }
      while (!0);
      return jp(), zh(f), _b(l), pt = a, Xn !== null ? El : (fa = null, da = le, Kr);
    }
    function Iw() {
      for (; Xn !== null && !jE(); )
        Mb(Xn);
    }
    function Mb(e) {
      var t = e.alternate;
      vn(e);
      var a;
      (e.mode & $a) !== $n ? (Qg(e), a = Py(t, e, $o), yh(e, !0)) : a = Py(t, e, $o), Nn(), e.memoizedProps = e.pendingProps, a === null ? Ob(e) : Xn = a, my.current = null;
    }
    function Ob(e) {
      var t = e;
      do {
        var a = t.alternate, l = t.return;
        if ((t.flags & qu) === un) {
          vn(t);
          var f = void 0;
          if ((t.mode & $a) === $n ? f = ob(a, t, $o) : (Qg(t), f = ob(a, t, $o), yh(t, !1)), Nn(), f !== null) {
            Xn = f;
            return;
          }
          if (zw(t), l !== null && // Do not append effects to parents if a sibling failed to complete
          (l.flags & qu) === un) {
            l.firstEffect === null && (l.firstEffect = t.firstEffect), t.lastEffect !== null && (l.lastEffect !== null && (l.lastEffect.nextEffect = t.firstEffect), l.lastEffect = t.lastEffect);
            var p = t.flags;
            p > Fr && (l.lastEffect !== null ? l.lastEffect.nextEffect = t : l.firstEffect = t, l.lastEffect = t);
          }
        } else {
          var y = W7(t);
          if (y !== null) {
            y.flags &= el, Xn = y;
            return;
          }
          if ((t.mode & $a) !== $n) {
            yh(t, !1);
            for (var C = t.actualDuration, x = t.child; x !== null; )
              C += x.actualDuration, x = x.sibling;
            t.actualDuration = C;
          }
          l !== null && (l.firstEffect = l.lastEffect = null, l.flags |= qu);
        }
        var O = t.sibling;
        if (O !== null) {
          Xn = O;
          return;
        }
        t = l, Xn = t;
      } while (t !== null);
      Kr === El && (Kr = by);
    }
    function zw(e) {
      if (
        // TODO: Move this check out of the hot path by moving `resetChildLanes`
        // to switch statement in `completeWork`.
        !((e.tag === Ee || e.tag === de) && e.memoizedState !== null && !wr($o, Ia) && (e.mode & Os) !== le)
      ) {
        var t = le;
        if ((e.mode & $a) !== $n) {
          for (var a = e.actualDuration, l = e.selfBaseDuration, f = e.alternate === null || e.child !== e.alternate.child, p = e.child; p !== null; )
            t = tn(t, tn(p.lanes, p.childLanes)), f && (a += p.actualDuration), l += p.treeBaseDuration, p = p.sibling;
          var y = e.tag === U && e.memoizedState !== null;
          if (y) {
            var C = e.child;
            C !== null && (l -= C.treeBaseDuration);
          }
          e.actualDuration = a, e.treeBaseDuration = l;
        } else
          for (var x = e.child; x !== null; )
            t = tn(t, tn(x.lanes, x.childLanes)), x = x.sibling;
        e.childLanes = t;
      }
    }
    function Vs(e) {
      var t = Qc();
      return Ms(fi, Hw.bind(null, e, t)), null;
    }
    function Hw(e, t) {
      do
        Uo();
      while (cf !== null);
      if (Jw(), (pt & (Ua | Ho)) !== Zn)
        throw Error("Should not already be working.");
      var a = e.finishedWork, l = e.finishedLanes;
      if (a === null)
        return null;
      if (e.finishedWork = null, e.finishedLanes = le, a === e.current)
        throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null;
      var f = tn(a.lanes, a.childLanes);
      Md(e, f), xl !== null && !y0(f) && xl.has(e) && xl.delete(e), e === fa && (fa = null, Xn = null, da = le);
      var p;
      if (a.flags > Fr ? a.lastEffect !== null ? (a.lastEffect.nextEffect = a, p = a.firstEffect) : p = a : p = a.firstEffect, p !== null) {
        var y = pt;
        pt |= Ho;
        var C = Ih(e);
        my.current = null, Ov = j9(e.containerInfo), Lh = !1, qe = p;
        do
          if (jr(null, $w, null), ua()) {
            if (qe === null)
              throw Error("Should be working on an effect.");
            var x = Vr();
            wu(qe, x), qe = qe.nextEffect;
          }
        while (qe !== null);
        Ov = null, P6(), qe = p;
        do
          if (jr(null, Uw, null, e, t), ua()) {
            if (qe === null)
              throw Error("Should be working on an effect.");
            var O = Vr();
            wu(qe, O), qe = qe.nextEffect;
          }
        while (qe !== null);
        V9(e.containerInfo), e.current = a, qe = p;
        do
          if (jr(null, jw, null, e, l), ua()) {
            if (qe === null)
              throw Error("Should be working on an effect.");
            var L = Vr();
            wu(qe, L), qe = qe.nextEffect;
          }
        while (qe !== null);
        qe = null, VE(), zh(C), pt = y;
      } else
        e.current = a, P6();
      var Z = wl;
      if (wl)
        wl = !1, cf = e, Ty = l, kv = t;
      else
        for (qe = p; qe !== null; ) {
          var $ = qe.nextEffect;
          qe.nextEffect = null, qe.flags & Rn && jb(qe), qe = $;
        }
      if (f = e.pendingLanes, f !== le) {
        if (js !== null) {
          var J = js;
          js = null;
          for (var fe = 0; fe < J.length; fe++)
            Hb(e, J[fe], e.memoizedInteractions);
        }
        xu(e, f);
      } else
        sf = null;
      if (Z || Ub(e, l), f === Vt ? e === _y ? _v++ : (_v = 0, _y = e) : _v = 0, IE(a.stateNode, t), mw(), hi(e, ta()), Oh) {
        Oh = !1;
        var _e = xy;
        throw xy = null, _e;
      }
      return (pt & Cy) !== Zn || Po(), null;
    }
    function $w() {
      for (; qe !== null; ) {
        var e = qe.alternate;
        !Lh && Ov !== null && ((qe.flags & Rn) !== un ? I1(qe, Ov) && (Lh = !0) : qe.tag === U && vw(e, qe) && I1(qe, Ov) && (Lh = !0));
        var t = qe.flags;
        (t & ei) !== un && (vn(qe), ew(e, qe), Nn()), (t & Gl) !== un && (wl || (wl = !0, mu(Cl, function() {
          return Uo(), null;
        }))), qe = qe.nextEffect;
      }
    }
    function Uw(e, t) {
      for (; qe !== null; ) {
        vn(qe);
        var a = qe.flags;
        if (a & br && pw(qe), a & Sr) {
          var l = qe.alternate;
          l !== null && ow(l);
        }
        var f = a & (Tt | vt | Rn | ba);
        switch (f) {
          case Tt: {
            mb(qe), qe.flags &= ~Tt;
            break;
          }
          case vo: {
            mb(qe), qe.flags &= ~Tt;
            var p = qe.alternate;
            py(p, qe);
            break;
          }
          case ba: {
            qe.flags &= ~ba;
            break;
          }
          case L1: {
            qe.flags &= ~ba;
            var y = qe.alternate;
            py(y, qe);
            break;
          }
          case vt: {
            var C = qe.alternate;
            py(C, qe);
            break;
          }
          case Rn: {
            cw(e, qe);
            break;
          }
        }
        Nn(), qe = qe.nextEffect;
      }
    }
    function jw(e, t) {
      for (; qe !== null; ) {
        vn(qe);
        var a = qe.flags;
        if (a & (vt | po)) {
          var l = qe.alternate;
          aw(e, l, qe);
        }
        a & Sr && iw(qe), Nn(), qe = qe.nextEffect;
      }
    }
    function Uo() {
      if (kv !== Q0) {
        var e = kv > Cl ? Cl : kv;
        return kv = Q0, Ms(e, Bw);
      }
      return !1;
    }
    function Vw(e, t) {
      Ry.push(t, e), wl || (wl = !0, mu(Cl, function() {
        return Uo(), null;
      }));
    }
    function Nb(e, t) {
      ky.push(t, e);
      {
        e.flags |= ql;
        var a = e.alternate;
        a !== null && (a.flags |= ql);
      }
      wl || (wl = !0, mu(Cl, function() {
        return Uo(), null;
      }));
    }
    function Fw(e) {
      var t = e.create;
      e.destroy = t();
    }
    function Bw() {
      if (cf === null)
        return !1;
      var e = cf, t = Ty;
      if (cf = null, Ty = le, (pt & (Ua | Ho)) !== Zn)
        throw Error("Cannot flush passive effects while already rendering.");
      My = !0;
      var a = pt;
      pt |= Ho;
      var l = Ih(e), f = ky;
      ky = [];
      for (var p = 0; p < f.length; p += 2) {
        var y = f[p], C = f[p + 1], x = y.destroy;
        y.destroy = void 0;
        {
          C.flags &= ~ql;
          var O = C.alternate;
          O !== null && (O.flags &= ~ql);
        }
        if (typeof x == "function") {
          if (vn(C), jr(null, x, null), ua()) {
            if (C === null)
              throw Error("Should be working on an effect.");
            var L = Vr();
            wu(C, L);
          }
          Nn();
        }
      }
      var Z = Ry;
      Ry = [];
      for (var $ = 0; $ < Z.length; $ += 2) {
        var J = Z[$], fe = Z[$ + 1];
        {
          if (vn(fe), jr(null, Fw, null, J), ua()) {
            if (fe === null)
              throw Error("Should be working on an effect.");
            var _e = Vr();
            wu(fe, _e);
          }
          Nn();
        }
      }
      for (var lt = e.current.firstEffect; lt !== null; ) {
        var Pt = lt.nextEffect;
        lt.nextEffect = null, lt.flags & Rn && jb(lt), lt = Pt;
      }
      return zh(l), Ub(e, t), My = !1, pt = a, Po(), Nh = cf === null ? 0 : Nh + 1, !0;
    }
    function Ay(e) {
      return sf !== null && sf.has(e);
    }
    function Ww(e) {
      sf === null ? sf = /* @__PURE__ */ new Set([e]) : sf.add(e);
    }
    function Kw(e) {
      Oh || (Oh = !0, xy = e);
    }
    var Gw = Kw;
    function Db(e, t, a) {
      var l = cy(a, t), f = ub(e, l, Vt);
      yu(e, f);
      var p = ja(), y = Ah(e, Vt);
      y !== null && (uu(y, Vt, p), hi(y, p), xu(y, Vt));
    }
    function wu(e, t) {
      if (e.tag === k) {
        Db(e, e, t);
        return;
      }
      for (var a = e.return; a !== null; ) {
        if (a.tag === k) {
          Db(a, e, t);
          return;
        } else if (a.tag === w) {
          var l = a.type, f = a.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && !Ay(f)) {
            var p = cy(t, e), y = sb(a, p, Vt);
            yu(a, y);
            var C = ja(), x = Ah(a, Vt);
            if (x !== null)
              uu(x, Vt, C), hi(x, C), xu(x, Vt);
            else if (typeof f.componentDidCatch == "function" && !Ay(f))
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
    function qw(e, t, a) {
      var l = e.pingCache;
      l !== null && l.delete(t);
      var f = ja();
      _d(e, a), fa === e && xo(da, a) && (Kr === Rh || Kr === Th && Td(da) && ta() - wy < bb ? df(e, le) : Mh = tn(Mh, a)), hi(e, f), xu(e, a);
    }
    function Yw(e, t) {
      t === qn && (t = ww(e));
      var a = ja(), l = Ah(e, t);
      l !== null && (uu(l, t, a), hi(l, a), xu(l, t));
    }
    function Qw(e, t) {
      var a = qn, l;
      l = e.stateNode, l !== null && l.delete(t), Yw(e, a);
    }
    function Zw(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : gw(e / 1960) * 1960;
    }
    function Xw() {
      if (_v > bw)
        throw _v = 0, _y = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Nh > Sw && (Nh = 0, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Jw() {
      Vi.flushLegacyContextWarning(), Vi.flushPendingUnsafeLifecycleWarnings();
    }
    var Hh = null;
    function Lb(e) {
      {
        if ((pt & Ua) !== Zn || !(e.mode & (Ra | Os)))
          return;
        var t = e.tag;
        if (t !== _ && t !== k && t !== w && t !== T && t !== z && t !== Y && t !== Q && t !== se)
          return;
        var a = ke(e.type) || "ReactComponent";
        if (Hh !== null) {
          if (Hh.has(a))
            return;
          Hh.add(a);
        } else
          Hh = /* @__PURE__ */ new Set([a]);
        var l = dt;
        try {
          vn(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? vn(e) : Nn();
        }
      }
    }
    var $h = null;
    function ex(e) {
      {
        var t = e.tag;
        if (t !== k && t !== w && t !== T && t !== z && t !== Y && t !== Q && t !== se || (e.flags & ql) !== un)
          return;
        var a = ke(e.type) || "ReactComponent";
        if ($h !== null) {
          if ($h.has(a))
            return;
          $h.add(a);
        } else
          $h = /* @__PURE__ */ new Set([a]);
        if (!My) {
          var l = dt;
          try {
            vn(e), h("Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.", t === w ? "the componentWillUnmount method" : "a useEffect cleanup function");
          } finally {
            l ? vn(e) : Nn();
          }
        }
      }
    }
    var Py;
    {
      var tx = null;
      Py = function(e, t, a) {
        var l = Wb(tx, t);
        try {
          return tb(e, t, a);
        } catch (p) {
          if (p !== null && typeof p == "object" && typeof p.then == "function")
            throw p;
          if (jp(), C6(), lb(t), Wb(t, l), t.mode & $a && Qg(t), jr(null, tb, null, e, t, a), ua()) {
            var f = Vr();
            throw f;
          } else
            throw p;
        }
      };
    }
    var Ab = !1, Iy;
    Iy = /* @__PURE__ */ new Set();
    function nx(e) {
      if (Ht && (pt & Ua) !== Zn && !S7())
        switch (e.tag) {
          case T:
          case z:
          case Q: {
            var t = Xn && ke(Xn.type) || "Unknown", a = t;
            if (!Iy.has(a)) {
              Iy.add(a);
              var l = ke(e.type) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, t, t);
            }
            break;
          }
          case w: {
            Ab || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Ab = !0);
            break;
          }
        }
    }
    var Uh = {
      current: !1
    };
    function Pb(e) {
      if (gy.current === !0 && Uh.current !== !0) {
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
    function Ib(e) {
      (e.mode & Qn) !== $n && gy.current === !1 && Uh.current === !1 && h(`An update to %s ran an effect, but was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ke(e.type));
    }
    function rx(e) {
      if (pt === Zn && gy.current === !1 && Uh.current === !1) {
        var t = dt;
        try {
          vn(e), h(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ke(e.type));
        } finally {
          t ? vn(e) : Nn();
        }
      }
    }
    var ax = rx, zb = !1;
    function ix(e) {
      zb === !1 && s.unstable_flushAllWithoutAsserting === void 0 && (e.mode & Ra || e.mode & Os) && (zb = !0, h(`In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://reactjs.org/link/mock-scheduler`));
    }
    function zy(e, t) {
      return t * 1e3 + e.interactionThreadID;
    }
    function jh(e) {
      js === null ? js = [e] : js.push(e);
    }
    function Hb(e, t, a) {
      if (a.size > 0) {
        var l = e.pendingInteractionMap, f = l.get(t);
        f != null ? a.forEach(function(C) {
          f.has(C) || C.__count++, f.add(C);
        }) : (l.set(t, new Set(a)), a.forEach(function(C) {
          C.__count++;
        }));
        var p = c.__subscriberRef.current;
        if (p !== null) {
          var y = zy(e, t);
          p.onWorkScheduled(a, y);
        }
      }
    }
    function xu(e, t) {
      Hb(e, t, c.__interactionsRef.current);
    }
    function $b(e, t) {
      var a = /* @__PURE__ */ new Set();
      if (e.pendingInteractionMap.forEach(function(p, y) {
        wr(t, y) && p.forEach(function(C) {
          return a.add(C);
        });
      }), e.memoizedInteractions = a, a.size > 0) {
        var l = c.__subscriberRef.current;
        if (l !== null) {
          var f = zy(e, t);
          try {
            l.onWorkStarted(a, f);
          } catch (p) {
            mu(fi, function() {
              throw p;
            });
          }
        }
      }
    }
    function Ub(e, t) {
      var a = e.pendingLanes, l;
      try {
        if (l = c.__subscriberRef.current, l !== null && e.memoizedInteractions.size > 0) {
          var f = zy(e, t);
          l.onWorkStopped(e.memoizedInteractions, f);
        }
      } catch (y) {
        mu(fi, function() {
          throw y;
        });
      } finally {
        var p = e.pendingInteractionMap;
        p.forEach(function(y, C) {
          wr(a, C) || (p.delete(C), y.forEach(function(x) {
            if (x.__count--, l !== null && x.__count === 0)
              try {
                l.onInteractionScheduledWorkCompleted(x);
              } catch (O) {
                mu(fi, function() {
                  throw O;
                });
              }
          }));
        });
      }
    }
    function ox() {
      return lx > 0;
    }
    var lx = 0;
    function jb(e) {
      e.sibling = null, e.stateNode = null;
    }
    var mi = null, vf = null, ux = function(e) {
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
    function Hy(e) {
      return pf(e);
    }
    function $y(e) {
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
    function Vb(e, t) {
      {
        if (mi === null)
          return !1;
        var a = e.elementType, l = t.type, f = !1, p = typeof l == "object" && l !== null ? l.$$typeof : null;
        switch (e.tag) {
          case w: {
            typeof l == "function" && (f = !0);
            break;
          }
          case T: {
            (typeof l == "function" || p === Lt) && (f = !0);
            break;
          }
          case z: {
            (p === $e || p === Lt) && (f = !0);
            break;
          }
          case Y:
          case Q: {
            (p === Ge || p === Lt) && (f = !0);
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
    function Fb(e) {
      {
        if (mi === null || typeof WeakSet != "function")
          return;
        vf === null && (vf = /* @__PURE__ */ new WeakSet()), vf.add(e);
      }
    }
    var sx = function(e, t) {
      {
        if (mi === null)
          return;
        var a = t.staleFamilies, l = t.updatedFamilies;
        Uo(), Ny(function() {
          Uy(e.current, l, a);
        });
      }
    }, cx = function(e, t) {
      {
        if (e.context !== Ha)
          return;
        Uo(), Ny(function() {
          Dv(t, e, null, null);
        });
      }
    };
    function Uy(e, t, a) {
      {
        var l = e.alternate, f = e.child, p = e.sibling, y = e.tag, C = e.type, x = null;
        switch (y) {
          case T:
          case Q:
          case w:
            x = C;
            break;
          case z:
            x = C.render;
            break;
        }
        if (mi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var O = !1, L = !1;
        if (x !== null) {
          var Z = mi(x);
          Z !== void 0 && (a.has(Z) ? L = !0 : t.has(Z) && (y === w ? L = !0 : O = !0));
        }
        vf !== null && (vf.has(e) || l !== null && vf.has(l)) && (L = !0), L && (e._debugNeedsRemount = !0), (L || O) && ra(e, Vt, _n), f !== null && !L && Uy(f, t, a), p !== null && Uy(p, t, a);
      }
    }
    var fx = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), l = new Set(t.map(function(f) {
          return f.current;
        }));
        return jy(e.current, l, a), a;
      }
    };
    function jy(e, t, a) {
      {
        var l = e.child, f = e.sibling, p = e.tag, y = e.type, C = null;
        switch (p) {
          case T:
          case Q:
          case w:
            C = y;
            break;
          case z:
            C = y.render;
            break;
        }
        var x = !1;
        C !== null && t.has(C) && (x = !0), x ? dx(e, a) : l !== null && jy(l, t, a), f !== null && jy(f, t, a);
      }
    }
    function dx(e, t) {
      {
        var a = vx(e, t);
        if (a)
          return;
        for (var l = e; ; ) {
          switch (l.tag) {
            case A:
              t.add(l.stateNode);
              return;
            case N:
              t.add(l.stateNode.containerInfo);
              return;
            case k:
              t.add(l.stateNode.containerInfo);
              return;
          }
          if (l.return === null)
            throw new Error("Expected to reach root first.");
          l = l.return;
        }
      }
    }
    function vx(e, t) {
      for (var a = e, l = !1; ; ) {
        if (a.tag === A)
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
    var Vy;
    {
      Vy = !1;
      try {
        var Bb = Object.preventExtensions({});
      } catch (e) {
        Vy = !0;
      }
    }
    var px = 1;
    function hx(e, t, a, l) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = un, this.nextEffect = null, this.firstEffect = null, this.lastEffect = null, this.lanes = le, this.childLanes = le, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugID = px++, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Vy && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Va = function(e, t, a, l) {
      return new hx(e, t, a, l);
    };
    function Fy(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function mx(e) {
      return typeof e == "function" && !Fy(e) && e.defaultProps === void 0;
    }
    function gx(e) {
      if (typeof e == "function")
        return Fy(e) ? w : T;
      if (e != null) {
        var t = e.$$typeof;
        if (t === $e)
          return z;
        if (t === Ge)
          return Y;
      }
      return _;
    }
    function Fs(e, t) {
      var a = e.alternate;
      a === null ? (a = Va(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugID = e._debugID, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = un, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, a.actualDuration = 0, a.actualStartTime = -1), a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var l = e.dependencies;
      switch (a.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case _:
        case T:
        case Q:
          a.type = pf(e.type);
          break;
        case w:
          a.type = Hy(e.type);
          break;
        case z:
          a.type = $y(e.type);
          break;
      }
      return a;
    }
    function yx(e, t) {
      e.flags &= Tt, e.nextEffect = null, e.firstEffect = null, e.lastEffect = null;
      var a = e.alternate;
      if (a === null)
        e.childLanes = le, e.lanes = t, e.child = null, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
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
    function Cx(e) {
      var t;
      return e === _C ? t = Os | Ra | Qn : e === kC ? t = Ra | Qn : t = $n, LE && (t |= $a), Va(k, null, null, t);
    }
    function By(e, t, a, l, f, p) {
      var y = _, C = e;
      if (typeof e == "function")
        Fy(e) ? (y = w, C = Hy(C)) : C = pf(C);
      else if (typeof e == "string")
        y = A;
      else
        e:
          switch (e) {
            case Ut:
              return Bs(a.children, f, p, t);
            case oa:
              y = D, f |= BE;
              break;
            case ir:
              y = D, f |= Qn;
              break;
            case Ft:
              return bx(a, f, p, t);
            case bt:
              return Sx(a, f, p, t);
            case Oe:
              return Ex(a, f, p, t);
            case qr:
              return Ky(a, f, p, t);
            case An:
              return wx(a, f, p, t);
            case Ln:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case dn:
                    y = V;
                    break e;
                  case jt:
                    y = W;
                    break e;
                  case $e:
                    y = z, C = $y(C);
                    break e;
                  case Ge:
                    y = Y;
                    break e;
                  case Lt:
                    y = ne, C = null;
                    break e;
                  case mn:
                    y = se;
                    break e;
                }
              var x = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var O = l ? ke(l.type) : null;
                O && (x += `

Check the render method of \`` + O + "`.");
              }
              throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + (e == null ? e : typeof e) + "." + x);
            }
          }
      var L = Va(y, a, t, f);
      return L.elementType = e, L.type = C, L.lanes = p, L._debugOwner = l, L;
    }
    function Wy(e, t, a) {
      var l = null;
      l = e._owner;
      var f = e.type, p = e.key, y = e.props, C = By(f, p, y, l, t, a);
      return C._debugSource = e._source, C._debugOwner = e._owner, C;
    }
    function Bs(e, t, a, l) {
      var f = Va(j, e, l, t);
      return f.lanes = a, f;
    }
    function bx(e, t, a, l) {
      typeof e.id != "string" && h('Profiler must specify an "id" as a prop');
      var f = Va(I, e, l, t | $a);
      return f.elementType = Ft, f.type = Ft, f.lanes = a, f.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, f;
    }
    function Sx(e, t, a, l) {
      var f = Va(U, e, l, t);
      return f.type = bt, f.elementType = bt, f.lanes = a, f;
    }
    function Ex(e, t, a, l) {
      var f = Va(ge, e, l, t);
      return f.type = Oe, f.elementType = Oe, f.lanes = a, f;
    }
    function Ky(e, t, a, l) {
      var f = Va(de, e, l, t);
      return f.type = qr, f.elementType = qr, f.lanes = a, f;
    }
    function wx(e, t, a, l) {
      var f = Va(Ee, e, l, t);
      return f.type = An, f.elementType = An, f.lanes = a, f;
    }
    function Gy(e, t, a) {
      var l = Va(P, e, null, t);
      return l.lanes = a, l;
    }
    function xx() {
      var e = Va(A, null, null, $n);
      return e.elementType = "DELETED", e.type = "DELETED", e;
    }
    function qy(e, t, a) {
      var l = e.children !== null ? e.children : [], f = Va(N, l, e.key, t);
      return f.lanes = a, f.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, f;
    }
    function Wb(e, t) {
      return e === null && (e = Va(_, null, null, $n)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.nextEffect = t.nextEffect, e.firstEffect = t.firstEffect, e.lastEffect = t.lastEffect, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugID = t._debugID, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Tx(e, t, a) {
      switch (this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = U0, this.context = null, this.pendingContext = null, this.hydrate = a, this.callbackNode = null, this.callbackPriority = Pi, this.eventTimes = _c(le), this.expirationTimes = _c(_n), this.pendingLanes = le, this.suspendedLanes = le, this.pingedLanes = le, this.expiredLanes = le, this.mutableReadLanes = le, this.finishedLanes = le, this.entangledLanes = le, this.entanglements = _c(le), this.mutableSourceEagerHydrationData = null, this.interactionThreadID = c.unstable_getThreadID(), this.memoizedInteractions = /* @__PURE__ */ new Set(), this.pendingInteractionMap = /* @__PURE__ */ new Map(), t) {
        case kC:
          this._debugRootType = "createBlockingRoot()";
          break;
        case _C:
          this._debugRootType = "createRoot()";
          break;
        case G0:
          this._debugRootType = "createLegacyRoot()";
          break;
      }
    }
    function Rx(e, t, a, l) {
      var f = new Tx(e, t, a), p = Cx(t);
      return f.current = p, p.stateNode = f, rg(p), f;
    }
    function kx(e, t) {
      var a = t._getVersion, l = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, l] : e.mutableSourceEagerHydrationData.push(t, l);
    }
    function _x(e, t, a) {
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
    var Yy, Qy;
    Yy = !1, Qy = {};
    function Mx(e) {
      if (!e)
        return Ha;
      var t = Oi(e), a = DE(t);
      if (t.tag === w) {
        var l = t.type;
        if (Lo(l))
          return TC(t, l, a);
      }
      return a;
    }
    function Ox(e, t) {
      {
        var a = Oi(e);
        if (a === void 0)
          throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(e));
        var l = ld(a);
        if (l === null)
          return null;
        if (l.mode & Qn) {
          var f = ke(a.type) || "Component";
          if (!Qy[f]) {
            Qy[f] = !0;
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
    function Nx(e, t, a, l) {
      return Rx(e, t, a);
    }
    function Dv(e, t, a, l) {
      PE(t, e);
      var f = t.current, p = ja();
      typeof jest != "undefined" && (ix(f), Pb(f));
      var y = Eu(f), C = Mx(a);
      t.context === null ? t.context = C : t.pendingContext = C, Ht && dt !== null && !Yy && (Yy = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ke(dt.type) || "Unknown"));
      var x = gu(p, y);
      return x.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), x.callback = l), yu(f, x), ra(f, y, p), y;
    }
    function Zy(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case A:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Kb(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Hi(a.retryLane, t));
    }
    function Xy(e, t) {
      Kb(e, t);
      var a = e.alternate;
      a && Kb(a, t);
    }
    function Dx(e) {
      if (e.tag === U) {
        var t = ja(), a = sl;
        ra(e, a, t), Xy(e, a);
      }
    }
    function Lx(e) {
      if (e.tag === U) {
        var t = ja(), a = Tc;
        ra(e, a, t), Xy(e, a);
      }
    }
    function Ax(e) {
      if (e.tag === U) {
        var t = ja(), a = Eu(e);
        ra(e, a, t), Xy(e, a);
      }
    }
    function Px(e, t) {
      try {
        return t();
      } finally {
      }
    }
    function Gb(e) {
      var t = ud(e);
      return t === null ? null : t.tag === pe ? t.stateNode.instance : t.stateNode;
    }
    var qb = function(e) {
      return !1;
    };
    function Ix(e) {
      return qb(e);
    }
    var Yb = null, Qb = null, Zb = null, Xb = null, Jb = null, e4 = null, t4 = null, n4 = null;
    {
      var r4 = function(e, t, a) {
        var l = t[a], f = Array.isArray(e) ? e.slice() : o({}, e);
        return a + 1 === t.length ? (Array.isArray(f) ? f.splice(l, 1) : delete f[l], f) : (f[l] = r4(e[l], t, a + 1), f);
      }, a4 = function(e, t) {
        return r4(e, t, 0);
      }, i4 = function(e, t, a, l) {
        var f = t[l], p = Array.isArray(e) ? e.slice() : o({}, e);
        if (l + 1 === t.length) {
          var y = a[l];
          p[y] = p[f], Array.isArray(p) ? p.splice(f, 1) : delete p[f];
        } else
          p[f] = i4(
            // $FlowFixMe number or string is fine here
            e[f],
            t,
            a,
            l + 1
          );
        return p;
      }, o4 = function(e, t, a) {
        if (t.length !== a.length) {
          m("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < a.length - 1; l++)
            if (t[l] !== a[l]) {
              m("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return i4(e, t, a, 0);
      }, l4 = function(e, t, a, l) {
        if (a >= t.length)
          return l;
        var f = t[a], p = Array.isArray(e) ? e.slice() : o({}, e);
        return p[f] = l4(e[f], t, a + 1, l), p;
      }, u4 = function(e, t, a) {
        return l4(e, t, 0, a);
      }, Jy = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Yb = function(e, t, a, l) {
        var f = Jy(e, t);
        if (f !== null) {
          var p = u4(f.memoizedState, a, l);
          f.memoizedState = p, f.baseState = p, e.memoizedProps = o({}, e.memoizedProps), ra(e, Vt, _n);
        }
      }, Qb = function(e, t, a) {
        var l = Jy(e, t);
        if (l !== null) {
          var f = a4(l.memoizedState, a);
          l.memoizedState = f, l.baseState = f, e.memoizedProps = o({}, e.memoizedProps), ra(e, Vt, _n);
        }
      }, Zb = function(e, t, a, l) {
        var f = Jy(e, t);
        if (f !== null) {
          var p = o4(f.memoizedState, a, l);
          f.memoizedState = p, f.baseState = p, e.memoizedProps = o({}, e.memoizedProps), ra(e, Vt, _n);
        }
      }, Xb = function(e, t, a) {
        e.pendingProps = u4(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), ra(e, Vt, _n);
      }, Jb = function(e, t) {
        e.pendingProps = a4(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps), ra(e, Vt, _n);
      }, e4 = function(e, t, a) {
        e.pendingProps = o4(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), ra(e, Vt, _n);
      }, t4 = function(e) {
        ra(e, Vt, _n);
      }, n4 = function(e) {
        qb = e;
      };
    }
    function zx(e) {
      var t = ld(e);
      return t === null ? null : t.stateNode;
    }
    function Hx(e) {
      return null;
    }
    function $x() {
      return dt;
    }
    function Ux(e) {
      var t = e.findFiberByHostInstance, a = d.ReactCurrentDispatcher;
      return AE({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Yb,
        overrideHookStateDeletePath: Qb,
        overrideHookStateRenamePath: Zb,
        overrideProps: Xb,
        overridePropsDeletePath: Jb,
        overridePropsRenamePath: e4,
        setSuspenseHandler: n4,
        scheduleUpdate: t4,
        currentDispatcherRef: a,
        findHostInstanceByFiber: zx,
        findFiberByHostInstance: t || Hx,
        // React Refresh
        findHostInstancesForRefresh: fx,
        scheduleRefresh: sx,
        scheduleRoot: cx,
        setRefreshHandler: ux,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: $x
      });
    }
    function e5(e, t, a) {
      this._internalRoot = jx(e, t, a);
    }
    e5.prototype.render = function(e) {
      var t = this._internalRoot;
      {
        typeof arguments[1] == "function" && h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
        var a = t.containerInfo;
        if (a.nodeType !== $r) {
          var l = Gb(t.current);
          l && l.parentNode !== a && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Dv(e, t, null, null);
    }, e5.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot, t = e.containerInfo;
      Dv(null, e, null, function() {
        CC(t);
      });
    };
    function jx(e, t, a) {
      var l = a != null && a.hydrate === !0;
      a != null && a.hydrationOptions;
      var f = a != null && a.hydrationOptions != null && a.hydrationOptions.mutableSources || null, p = Nx(e, t, l);
      NE(p.current, e), e.nodeType;
      {
        var y = e.nodeType === $r ? e.parentNode : e;
        F2(y);
      }
      if (f)
        for (var C = 0; C < f.length; C++) {
          var x = f[C];
          kx(p, x);
        }
      return p;
    }
    function Vx(e, t) {
      return new e5(e, G0, t);
    }
    function hf(e) {
      return !!(e && (e.nodeType === ya || e.nodeType === lo || e.nodeType === o1 || e.nodeType === $r && e.nodeValue === " react-mount-point-unstable "));
    }
    var Fx = d.ReactCurrentOwner, s4, c4 = !1;
    s4 = function(e) {
      if (e._reactRootContainer && e.nodeType !== $r) {
        var t = Gb(e._reactRootContainer._internalRoot.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, l = Vh(e), f = !!(l && pu(l));
      f && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ya && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Vh(e) {
      return e ? e.nodeType === lo ? e.documentElement : e.firstChild : null;
    }
    function Bx(e) {
      var t = Vh(e);
      return !!(t && t.nodeType === ya && t.hasAttribute(Dt));
    }
    function Wx(e, t) {
      var a = t || Bx(e);
      if (!a)
        for (var l = !1, f; f = e.lastChild; )
          !l && f.nodeType === ya && f.hasAttribute(Dt) && (l = !0, h("render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")), e.removeChild(f);
      return a && !t && !c4 && (c4 = !0, m("render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v18. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.")), Vx(e, a ? {
        hydrate: !0
      } : void 0);
    }
    function Kx(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Fh(e, t, a, l, f) {
      s4(a), Kx(f === void 0 ? null : f, "render");
      var p = a._reactRootContainer, y;
      if (p) {
        if (y = p._internalRoot, typeof f == "function") {
          var x = f;
          f = function() {
            var O = Zy(y);
            x.call(O);
          };
        }
        Dv(t, y, e, f);
      } else {
        if (p = a._reactRootContainer = Wx(a, l), y = p._internalRoot, typeof f == "function") {
          var C = f;
          f = function() {
            var O = Zy(y);
            C.call(O);
          };
        }
        Tb(function() {
          Dv(t, y, e, f);
        });
      }
      return Zy(y);
    }
    function Gx(e) {
      {
        var t = Fx.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ke(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ya ? e : Ox(e, "findDOMNode");
    }
    function qx(e, t, a) {
      if (!hf(t))
        throw Error("Target container is not a DOM element.");
      {
        var l = Rp(t) && t._reactRootContainer === void 0;
        l && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?");
      }
      return Fh(null, e, t, !0, a);
    }
    function Yx(e, t, a) {
      if (!hf(t))
        throw Error("Target container is not a DOM element.");
      {
        var l = Rp(t) && t._reactRootContainer === void 0;
        l && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Fh(null, e, t, !1, a);
    }
    function Qx(e, t, a, l) {
      if (!hf(a))
        throw Error("Target container is not a DOM element.");
      if (!(e != null && D1(e)))
        throw Error("parentComponent must be a valid React Component");
      return Fh(e, t, a, !1, l);
    }
    function Zx(e) {
      if (!hf(e))
        throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Rp(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = Vh(e), l = a && !pu(a);
          l && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Tb(function() {
          Fh(null, null, e, !1, function() {
            e._reactRootContainer = null, CC(e);
          });
        }), !0;
      } else {
        {
          var f = Vh(e), p = !!(f && pu(f)), y = e.nodeType === ya && hf(e.parentNode) && !!e.parentNode._reactRootContainer;
          p && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", y ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Cc(Dx), z1(Lx), Yl(Ax), tl(Px);
    var f4 = !1;
    (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Xf(D9), vc(xb, _w, Tw, kw);
    function d4(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!hf(t))
        throw Error("Target container is not a DOM element.");
      return _x(e, t, null, a);
    }
    function Xx(e, t, a, l) {
      return Qx(e, t, a, l);
    }
    function Jx(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      return f4 || (f4 = !0, m('The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 18+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.')), d4(e, t, a);
    }
    var eT = {
      // Keep in sync with ReactTestUtils.js, and ReactTestUtilsAct.js.
      // This is an array for better minification.
      Events: [
        pu,
        Kc,
        kp,
        Fl,
        Jf,
        Uo,
        // TODO: This is related to `act`, not events. Move to separate key?
        Uh
      ]
    }, tT = Ux({
      findFiberByHostInstance: ks,
      bundleType: 1,
      version: VC,
      rendererPackageName: "react-dom"
    });
    if (!tT && Ze && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var v4 = window.location.protocol;
      /^(https?|file):$/.test(v4) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (v4 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eT, Ba.createPortal = d4, Ba.findDOMNode = Gx, Ba.flushSync = Ny, Ba.hydrate = qx, Ba.render = Yx, Ba.unmountComponentAtNode = Zx, Ba.unstable_batchedUpdates = xb, Ba.unstable_createPortal = Jx, Ba.unstable_renderSubtreeIntoContainer = Xx, Ba.version = VC;
  }()), Ba;
}
function o3() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o3);
    } catch (r) {
      console.error(r);
    }
  }
}
process.env.NODE_ENV === "production" ? (o3(), R5.exports = IR()) : R5.exports = UR();
var Tm = R5.exports;
const jR = /* @__PURE__ */ YS(Tm);
function fm(r) {
  return r instanceof HTMLElement || r instanceof SVGElement;
}
function rm(r) {
  return fm(r) ? r : r instanceof Oa.Component ? jR.findDOMNode(r) : null;
}
function Rm(r, o, s) {
  var c = S.useRef({});
  return (!("value" in c.current) || s(c.current.condition, o)) && (c.current.value = r(), c.current.condition = o), c.current.value;
}
function m2(r, o) {
  typeof r == "function" ? r(o) : Bn(r) === "object" && r && "current" in r && (r.current = o);
}
function l3() {
  for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
    o[s] = arguments[s];
  var c = o.filter(function(d) {
    return d;
  });
  return c.length <= 1 ? c[0] : function(d) {
    o.forEach(function(m) {
      m2(m, d);
    });
  };
}
function km() {
  for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
    o[s] = arguments[s];
  return Rm(function() {
    return l3.apply(void 0, o);
  }, o, function(c, d) {
    return c.length !== d.length || c.every(function(m, h) {
      return m !== d[h];
    });
  });
}
function _m(r) {
  var o, s, c = t3.isMemo(r) ? r.type.type : r.type;
  return !(typeof c == "function" && !((o = c.prototype) !== null && o !== void 0 && o.render) || typeof r == "function" && !((s = r.prototype) !== null && s !== void 0 && s.render));
}
var k5 = /* @__PURE__ */ S.createContext(null);
function VR(r) {
  var o = r.children, s = r.onBatchResize, c = S.useRef(0), d = S.useRef([]), m = S.useContext(k5), h = S.useCallback(function(E, T, w) {
    c.current += 1;
    var _ = c.current;
    d.current.push({
      size: E,
      element: T,
      data: w
    }), Promise.resolve().then(function() {
      _ === c.current && (s == null || s(d.current), d.current = []);
    }), m == null || m(E, T, w);
  }, [s, m]);
  return /* @__PURE__ */ S.createElement(k5.Provider, {
    value: h
  }, o);
}
var u3 = function() {
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
}(), _5 = typeof window != "undefined" && typeof document != "undefined" && window.document === document, dm = function() {
  return typeof global != "undefined" && global.Math === Math ? global : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")();
}(), FR = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(dm) : function(r) {
    return setTimeout(function() {
      return r(Date.now());
    }, 1e3 / 60);
  };
}(), BR = 2;
function WR(r, o) {
  var s = !1, c = !1, d = 0;
  function m() {
    s && (s = !1, r()), c && E();
  }
  function h() {
    FR(m);
  }
  function E() {
    var T = Date.now();
    if (s) {
      if (T - d < BR)
        return;
      c = !0;
    } else
      s = !0, c = !1, setTimeout(h, o);
    d = T;
  }
  return E;
}
var KR = 20, GR = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], qR = typeof MutationObserver != "undefined", YR = (
  /** @class */
  function() {
    function r() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = WR(this.refresh.bind(this), KR);
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
      !_5 || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), qR ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, r.prototype.disconnect_ = function() {
      !_5 || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, r.prototype.onTransitionEnd_ = function(o) {
      var s = o.propertyName, c = s === void 0 ? "" : s, d = GR.some(function(m) {
        return !!~c.indexOf(m);
      });
      d && this.refresh();
    }, r.getInstance = function() {
      return this.instance_ || (this.instance_ = new r()), this.instance_;
    }, r.instance_ = null, r;
  }()
), s3 = function(r, o) {
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
}, _f = function(r) {
  var o = r && r.ownerDocument && r.ownerDocument.defaultView;
  return o || dm;
}, c3 = Mm(0, 0, 0, 0);
function vm(r) {
  return parseFloat(r) || 0;
}
function _4(r) {
  for (var o = [], s = 1; s < arguments.length; s++)
    o[s - 1] = arguments[s];
  return o.reduce(function(c, d) {
    var m = r["border-" + d + "-width"];
    return c + vm(m);
  }, 0);
}
function QR(r) {
  for (var o = ["top", "right", "bottom", "left"], s = {}, c = 0, d = o; c < d.length; c++) {
    var m = d[c], h = r["padding-" + m];
    s[m] = vm(h);
  }
  return s;
}
function ZR(r) {
  var o = r.getBBox();
  return Mm(0, 0, o.width, o.height);
}
function XR(r) {
  var o = r.clientWidth, s = r.clientHeight;
  if (!o && !s)
    return c3;
  var c = _f(r).getComputedStyle(r), d = QR(c), m = d.left + d.right, h = d.top + d.bottom, E = vm(c.width), T = vm(c.height);
  if (c.boxSizing === "border-box" && (Math.round(E + m) !== o && (E -= _4(c, "left", "right") + m), Math.round(T + h) !== s && (T -= _4(c, "top", "bottom") + h)), !ek(r)) {
    var w = Math.round(E + m) - o, _ = Math.round(T + h) - s;
    Math.abs(w) !== 1 && (E -= w), Math.abs(_) !== 1 && (T -= _);
  }
  return Mm(d.left, d.top, E, T);
}
var JR = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement != "undefined" ? function(r) {
    return r instanceof _f(r).SVGGraphicsElement;
  } : function(r) {
    return r instanceof _f(r).SVGElement && typeof r.getBBox == "function";
  };
}();
function ek(r) {
  return r === _f(r).document.documentElement;
}
function tk(r) {
  return _5 ? JR(r) ? ZR(r) : XR(r) : c3;
}
function nk(r) {
  var o = r.x, s = r.y, c = r.width, d = r.height, m = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object, h = Object.create(m.prototype);
  return s3(h, {
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
function Mm(r, o, s, c) {
  return { x: r, y: o, width: s, height: c };
}
var rk = (
  /** @class */
  function() {
    function r(o) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Mm(0, 0, 0, 0), this.target = o;
    }
    return r.prototype.isActive = function() {
      var o = tk(this.target);
      return this.contentRect_ = o, o.width !== this.broadcastWidth || o.height !== this.broadcastHeight;
    }, r.prototype.broadcastRect = function() {
      var o = this.contentRect_;
      return this.broadcastWidth = o.width, this.broadcastHeight = o.height, o;
    }, r;
  }()
), ak = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(o, s) {
      var c = nk(s);
      s3(this, { target: o, contentRect: c });
    }
    return r;
  }()
), ik = (
  /** @class */
  function() {
    function r(o, s, c) {
      if (this.activeObservations_ = [], this.observations_ = new u3(), typeof o != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = o, this.controller_ = s, this.callbackCtx_ = c;
    }
    return r.prototype.observe = function(o) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
        if (!(o instanceof _f(o).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var s = this.observations_;
        s.has(o) || (s.set(o, new rk(o)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, r.prototype.unobserve = function(o) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
        if (!(o instanceof _f(o).Element))
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
          return new ak(c.target, c.broadcastRect());
        });
        this.callback_.call(o, s, o), this.clearActive();
      }
    }, r.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, r.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, r;
  }()
), f3 = typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : new u3(), d3 = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(o) {
      if (!(this instanceof r))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var s = YR.getInstance(), c = new ik(o, s, this);
      f3.set(this, c);
    }
    return r;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(r) {
  d3.prototype[r] = function() {
    var o;
    return (o = f3.get(this))[r].apply(o, arguments);
  };
});
var ok = function() {
  return typeof dm.ResizeObserver != "undefined" ? dm.ResizeObserver : d3;
}(), Nl = /* @__PURE__ */ new Map();
function v3(r) {
  r.forEach(function(o) {
    var s, c = o.target;
    (s = Nl.get(c)) === null || s === void 0 || s.forEach(function(d) {
      return d(c);
    });
  });
}
var p3 = new ok(v3);
process.env.NODE_ENV;
process.env.NODE_ENV;
function lk(r, o) {
  Nl.has(r) || (Nl.set(r, /* @__PURE__ */ new Set()), p3.observe(r)), Nl.get(r).add(o);
}
function uk(r, o) {
  Nl.has(r) && (Nl.get(r).delete(o), Nl.get(r).size || (p3.unobserve(r), Nl.delete(r)));
}
function Xi(r, o) {
  if (!(r instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
function M4(r, o) {
  for (var s = 0; s < o.length; s++) {
    var c = o[s];
    c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(r, ZS(c.key), c);
  }
}
function Ji(r, o, s) {
  return o && M4(r.prototype, o), s && M4(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function M5(r, o) {
  return M5 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, d) {
    return c.__proto__ = d, c;
  }, M5(r, o);
}
function Df(r, o) {
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
  }), o && M5(r, o);
}
function Nu(r) {
  return Nu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
    return s.__proto__ || Object.getPrototypeOf(s);
  }, Nu(r);
}
function Om() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (o) {
  }
  return (Om = function() {
    return !!r;
  })();
}
function O5(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function g2(r, o) {
  if (o && (Bn(o) === "object" || typeof o == "function"))
    return o;
  if (o !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return O5(r);
}
function Nm(r) {
  var o = Om();
  return function() {
    var c = Nu(r), d;
    if (o) {
      var m = Nu(this).constructor;
      d = Reflect.construct(c, arguments, m);
    } else
      d = c.apply(this, arguments);
    return g2(this, d);
  };
}
var sk = /* @__PURE__ */ function(r) {
  Df(s, r);
  var o = Nm(s);
  function s() {
    return Xi(this, s), o.apply(this, arguments);
  }
  return Ji(s, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), s;
}(S.Component);
function ck(r, o) {
  var s = r.children, c = r.disabled, d = S.useRef(null), m = S.useRef(null), h = S.useContext(k5), E = typeof s == "function", T = E ? s(d) : s, w = S.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), _ = !E && /* @__PURE__ */ S.isValidElement(T) && _m(T), k = _ ? T.ref : null, N = km(k, d), A = function() {
    var W;
    return rm(d.current) || // Support `nativeElement` format
    (d.current && Bn(d.current) === "object" ? rm((W = d.current) === null || W === void 0 ? void 0 : W.nativeElement) : null) || rm(m.current);
  };
  S.useImperativeHandle(o, function() {
    return A();
  });
  var P = S.useRef(r);
  P.current = r;
  var j = S.useCallback(function(D) {
    var W = P.current, V = W.onResize, z = W.data, I = D.getBoundingClientRect(), U = I.width, Y = I.height, Q = D.offsetWidth, ne = D.offsetHeight, ue = Math.floor(U), re = Math.floor(Y);
    if (w.current.width !== ue || w.current.height !== re || w.current.offsetWidth !== Q || w.current.offsetHeight !== ne) {
      var ge = {
        width: ue,
        height: re,
        offsetWidth: Q,
        offsetHeight: ne
      };
      w.current = ge;
      var pe = Q === Math.round(U) ? U : Q, te = ne === Math.round(Y) ? Y : ne, se = Re(Re({}, ge), {}, {
        offsetWidth: pe,
        offsetHeight: te
      });
      h == null || h(se, D, z), V && Promise.resolve().then(function() {
        V(se, D);
      });
    }
  }, []);
  return S.useEffect(function() {
    var D = A();
    return D && !c && lk(D, j), function() {
      return uk(D, j);
    };
  }, [d.current, c]), /* @__PURE__ */ S.createElement(sk, {
    ref: m
  }, _ ? /* @__PURE__ */ S.cloneElement(T, {
    ref: N
  }) : T);
}
var h3 = /* @__PURE__ */ S.forwardRef(ck);
process.env.NODE_ENV !== "production" && (h3.displayName = "SingleObserver");
var fk = "rc-observer-key";
function dk(r, o) {
  var s = r.children, c = typeof s == "function" ? [s] : Wv(s);
  return process.env.NODE_ENV !== "production" && (c.length > 1 ? kf(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : c.length === 0 && kf(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), c.map(function(d, m) {
    var h = (d == null ? void 0 : d.key) || "".concat(fk, "-").concat(m);
    return /* @__PURE__ */ S.createElement(h3, an({}, r, {
      key: h,
      ref: m === 0 ? o : void 0
    }), d);
  });
}
var Lf = /* @__PURE__ */ S.forwardRef(dk);
process.env.NODE_ENV !== "production" && (Lf.displayName = "ResizeObserver");
Lf.Collection = VR;
function pa() {
  return !!(typeof window != "undefined" && window.document && window.document.createElement);
}
var O4 = process.env.NODE_ENV !== "test" && pa() ? S.useLayoutEffect : S.useEffect, ia = function(o, s) {
  var c = S.useRef(!0);
  O4(function() {
    return o(c.current);
  }, s), O4(function() {
    return c.current = !1, function() {
      c.current = !0;
    };
  }, []);
}, N4 = function(o, s) {
  ia(function(c) {
    if (!c)
      return o();
  }, s);
}, vk = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], mf = void 0;
function pk(r, o) {
  var s = r.prefixCls, c = r.invalidate, d = r.item, m = r.renderItem, h = r.responsive, E = r.responsiveDisabled, T = r.registerSize, w = r.itemKey, _ = r.className, k = r.style, N = r.children, A = r.display, P = r.order, j = r.component, D = j === void 0 ? "div" : j, W = Vn(r, vk), V = h && !A;
  function z(ne) {
    T(w, ne);
  }
  S.useEffect(function() {
    return function() {
      z(null);
    };
  }, []);
  var I = m && d !== mf ? m(d) : N, U;
  c || (U = {
    opacity: V ? 0 : 1,
    height: V ? 0 : mf,
    overflowY: V ? "hidden" : mf,
    order: h ? P : mf,
    pointerEvents: V ? "none" : mf,
    position: V ? "absolute" : mf
  });
  var Y = {};
  V && (Y["aria-hidden"] = !0);
  var Q = /* @__PURE__ */ S.createElement(D, an({
    className: wn(!c && s, _),
    style: Re(Re({}, U), k)
  }, Y, W, {
    ref: o
  }), I);
  return h && (Q = /* @__PURE__ */ S.createElement(Lf, {
    onResize: function(ue) {
      var re = ue.offsetWidth;
      z(re);
    },
    disabled: E
  }, Q)), Q;
}
var Uv = /* @__PURE__ */ S.forwardRef(pk);
Uv.displayName = "Item";
function Fo(r) {
  var o = S.useRef();
  o.current = r;
  var s = S.useCallback(function() {
    for (var c, d = arguments.length, m = new Array(d), h = 0; h < d; h++)
      m[h] = arguments[h];
    return (c = o.current) === null || c === void 0 ? void 0 : c.call.apply(c, [o].concat(m));
  }, []);
  return s;
}
var m3 = function(o) {
  return +setTimeout(o, 16);
}, g3 = function(o) {
  return clearTimeout(o);
};
typeof window != "undefined" && "requestAnimationFrame" in window && (m3 = function(o) {
  return window.requestAnimationFrame(o);
}, g3 = function(o) {
  return window.cancelAnimationFrame(o);
});
var D4 = 0, Dm = /* @__PURE__ */ new Map();
function y3(r) {
  Dm.delete(r);
}
var Ci = function(o) {
  var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  D4 += 1;
  var c = D4;
  function d(m) {
    if (m === 0)
      y3(c), o();
    else {
      var h = m3(function() {
        d(m - 1);
      });
      Dm.set(c, h);
    }
  }
  return d(s), c;
};
Ci.cancel = function(r) {
  var o = Dm.get(r);
  return y3(r), g3(o);
};
process.env.NODE_ENV !== "production" && (Ci.ids = function() {
  return Dm;
});
function hk(r) {
  if (typeof MessageChannel == "undefined")
    Ci(r);
  else {
    var o = new MessageChannel();
    o.port1.onmessage = function() {
      return r();
    }, o.port2.postMessage(void 0);
  }
}
function mk() {
  var r = S.useRef(null), o = function(c) {
    r.current || (r.current = [], hk(function() {
      Tm.unstable_batchedUpdates(function() {
        r.current.forEach(function(d) {
          d();
        }), r.current = null;
      });
    })), r.current.push(c);
  };
  return o;
}
function Lv(r, o) {
  var s = S.useState(o), c = Te(s, 2), d = c[0], m = c[1], h = Fo(function(E) {
    r(function() {
      m(E);
    });
  });
  return [d, h];
}
var pm = /* @__PURE__ */ Oa.createContext(null), gk = ["component"], yk = ["className"], Ck = ["className"], bk = function(o, s) {
  var c = S.useContext(pm);
  if (!c) {
    var d = o.component, m = d === void 0 ? "div" : d, h = Vn(o, gk);
    return /* @__PURE__ */ S.createElement(m, an({}, h, {
      ref: s
    }));
  }
  var E = c.className, T = Vn(c, yk), w = o.className, _ = Vn(o, Ck);
  return /* @__PURE__ */ S.createElement(pm.Provider, {
    value: null
  }, /* @__PURE__ */ S.createElement(Uv, an({
    ref: s,
    className: wn(E, w)
  }, T, _)));
}, C3 = /* @__PURE__ */ S.forwardRef(bk);
C3.displayName = "RawItem";
var Sk = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], b3 = "responsive", S3 = "invalidate";
function Ek(r) {
  return "+ ".concat(r.length, " ...");
}
function wk(r, o) {
  var s = r.prefixCls, c = s === void 0 ? "rc-overflow" : s, d = r.data, m = d === void 0 ? [] : d, h = r.renderItem, E = r.renderRawItem, T = r.itemKey, w = r.itemWidth, _ = w === void 0 ? 10 : w, k = r.ssr, N = r.style, A = r.className, P = r.maxCount, j = r.renderRest, D = r.renderRawRest, W = r.suffix, V = r.component, z = V === void 0 ? "div" : V, I = r.itemComponent, U = r.onVisibleChange, Y = Vn(r, Sk), Q = k === "full", ne = mk(), ue = Lv(ne, null), re = Te(ue, 2), ge = re[0], pe = re[1], te = ge || 0, se = Lv(ne, /* @__PURE__ */ new Map()), de = Te(se, 2), Ee = de[0], Me = de[1], xe = Lv(ne, 0), Le = Te(xe, 2), Ie = Le[0], ie = Le[1], he = Lv(ne, 0), Se = Te(he, 2), ze = Se[0], Ke = Se[1], Ze = Lv(ne, 0), it = Te(Ze, 2), Be = it[0], nt = it[1], Nt = Wo(null), He = Te(Nt, 2), et = He[0], Bt = He[1], we = Wo(null), mt = Te(we, 2), Dt = mt[0], zt = mt[1], $t = S.useMemo(function() {
    return Dt === null && Q ? Number.MAX_SAFE_INTEGER : Dt || 0;
  }, [Dt, ge]), Xe = Wo(!1), _t = Te(Xe, 2), gt = _t[0], Xt = _t[1], ot = "".concat(c, "-item"), Wt = Math.max(Ie, ze), Qt = P === b3, ut = m.length && Qt, Gt = P === S3, Wn = ut || typeof P == "number" && m.length > P, qt = E5(function() {
    var Oe = m;
    return ut ? ge === null && Q ? Oe = m : Oe = m.slice(0, Math.min(m.length, te / _)) : typeof P == "number" && (Oe = m.slice(0, P)), Oe;
  }, [m, _, ge, P, ut]), en = E5(function() {
    return ut ? m.slice($t + 1) : m.slice(qt.length);
  }, [m, qt, ut, $t]), ye = Ml(function(Oe, Ge) {
    var Lt;
    return typeof T == "function" ? T(Oe) : (Lt = T && (Oe == null ? void 0 : Oe[T])) !== null && Lt !== void 0 ? Lt : Ge;
  }, [T]), Ne = Ml(h || function(Oe) {
    return Oe;
  }, [h]);
  function We(Oe, Ge, Lt) {
    Dt === Oe && (Ge === void 0 || Ge === et) || (zt(Oe), Lt || (Xt(Oe < m.length - 1), U == null || U(Oe)), Ge !== void 0 && Bt(Ge));
  }
  function xt(Oe, Ge) {
    pe(Ge.clientWidth);
  }
  function Mt(Oe, Ge) {
    Me(function(Lt) {
      var mn = new Map(Lt);
      return Ge === null ? mn.delete(Oe) : mn.set(Oe, Ge), mn;
    });
  }
  function rt(Oe, Ge) {
    Ke(Ge), ie(ze);
  }
  function st(Oe, Ge) {
    nt(Ge);
  }
  function on(Oe) {
    return Ee.get(ye(qt[Oe], Oe));
  }
  ia(function() {
    if (te && typeof Wt == "number" && qt) {
      var Oe = Be, Ge = qt.length, Lt = Ge - 1;
      if (!Ge) {
        We(0, null);
        return;
      }
      for (var mn = 0; mn < Ge; mn += 1) {
        var Ln = on(mn);
        if (Q && (Ln = Ln || 0), Ln === void 0) {
          We(mn - 1, void 0, !0);
          break;
        }
        if (Oe += Ln, // Only one means `totalWidth` is the final width
        Lt === 0 && Oe <= te || // Last two width will be the final width
        mn === Lt - 1 && Oe + on(Lt) <= te) {
          We(Lt, null);
          break;
        } else if (Oe + Wt > te) {
          We(mn - 1, Oe - Ln - Be + ze);
          break;
        }
      }
      W && on(0) + Be > te && Bt(null);
    }
  }, [te, Ee, ze, Be, ye, qt]);
  var Ot = gt && !!en.length, Ut = {};
  et !== null && ut && (Ut = {
    position: "absolute",
    left: et,
    top: 0
  });
  var ir = {
    prefixCls: ot,
    responsive: ut,
    component: I,
    invalidate: Gt
  }, Ft = E ? function(Oe, Ge) {
    var Lt = ye(Oe, Ge);
    return /* @__PURE__ */ S.createElement(pm.Provider, {
      key: Lt,
      value: Re(Re({}, ir), {}, {
        order: Ge,
        item: Oe,
        itemKey: Lt,
        registerSize: Mt,
        display: Ge <= $t
      })
    }, E(Oe, Ge));
  } : function(Oe, Ge) {
    var Lt = ye(Oe, Ge);
    return /* @__PURE__ */ S.createElement(Uv, an({}, ir, {
      order: Ge,
      key: Lt,
      item: Oe,
      renderItem: Ne,
      itemKey: Lt,
      registerSize: Mt,
      display: Ge <= $t
    }));
  }, dn, jt = {
    order: Ot ? $t : Number.MAX_SAFE_INTEGER,
    className: "".concat(ot, "-rest"),
    registerSize: rt,
    display: Ot
  };
  if (D)
    D && (dn = /* @__PURE__ */ S.createElement(pm.Provider, {
      value: Re(Re({}, ir), jt)
    }, D(en)));
  else {
    var $e = j || Ek;
    dn = /* @__PURE__ */ S.createElement(Uv, an({}, ir, jt), typeof $e == "function" ? $e(en) : $e);
  }
  var bt = /* @__PURE__ */ S.createElement(z, an({
    className: wn(!Gt && c, A),
    style: N,
    ref: o
  }, Y), qt.map(Ft), Wn ? dn : null, W && /* @__PURE__ */ S.createElement(Uv, an({}, ir, {
    responsive: Qt,
    responsiveDisabled: !ut,
    order: $t,
    className: "".concat(ot, "-suffix"),
    registerSize: st,
    display: !0,
    style: Ut
  }), W));
  return Qt && (bt = /* @__PURE__ */ S.createElement(Lf, {
    onResize: xt,
    disabled: !ut
  }, bt)), bt;
}
var Dl = /* @__PURE__ */ S.forwardRef(wk);
Dl.displayName = "Overflow";
Dl.Item = C3;
Dl.RESPONSIVE = b3;
Dl.INVALIDATE = S3;
function Tf(r) {
  var o = S.useRef(!1), s = S.useState(r), c = Te(s, 2), d = c[0], m = c[1];
  S.useEffect(function() {
    return o.current = !1, function() {
      o.current = !0;
    };
  }, []);
  function h(E, T) {
    T && o.current || m(E);
  }
  return [d, h];
}
function o5(r) {
  return r !== void 0;
}
function jv(r, o) {
  var s = o || {}, c = s.defaultValue, d = s.value, m = s.onChange, h = s.postState, E = Tf(function() {
    return o5(d) ? d : o5(c) ? typeof c == "function" ? c() : c : typeof r == "function" ? r() : r;
  }), T = Te(E, 2), w = T[0], _ = T[1], k = d !== void 0 ? d : w, N = h ? h(k) : k, A = Fo(m), P = Tf([k]), j = Te(P, 2), D = j[0], W = j[1];
  N4(function() {
    var z = D[0];
    w !== z && A(w, z);
  }, [D]), N4(function() {
    o5(d) || _(d);
  }, [d]);
  var V = Fo(function(z, I) {
    _(z, I), W([k], I);
  });
  return [N, V];
}
function y2(r, o) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, c = /* @__PURE__ */ new Set();
  function d(m, h) {
    var E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, T = c.has(m);
    if (ha(!T, "Warning: There may be circular references"), T)
      return !1;
    if (m === h)
      return !0;
    if (s && E > 1)
      return !1;
    c.add(m);
    var w = E + 1;
    if (Array.isArray(m)) {
      if (!Array.isArray(h) || m.length !== h.length)
        return !1;
      for (var _ = 0; _ < m.length; _++)
        if (!d(m[_], h[_], w))
          return !1;
      return !0;
    }
    if (m && h && Bn(m) === "object" && Bn(h) === "object") {
      var k = Object.keys(m);
      return k.length !== Object.keys(h).length ? !1 : k.every(function(N) {
        return d(m[N], h[N], w);
      });
    }
    return !1;
  }
  return d(r, o);
}
var E3 = /* @__PURE__ */ S.createContext(null);
function w3(r, o) {
  return r === void 0 ? null : "".concat(r, "-").concat(o);
}
function x3(r) {
  var o = S.useContext(E3);
  return w3(o, r);
}
var xk = ["children", "locked"], Zi = /* @__PURE__ */ S.createContext(null);
function Tk(r, o) {
  var s = Re({}, r);
  return Object.keys(o).forEach(function(c) {
    var d = o[c];
    d !== void 0 && (s[c] = d);
  }), s;
}
function Kv(r) {
  var o = r.children, s = r.locked, c = Vn(r, xk), d = S.useContext(Zi), m = Rm(function() {
    return Tk(d, c);
  }, [d, c], function(h, E) {
    return !s && (h[0] !== E[0] || !y2(h[1], E[1], !0));
  });
  return /* @__PURE__ */ S.createElement(Zi.Provider, {
    value: m
  }, o);
}
var Rk = [], T3 = /* @__PURE__ */ S.createContext(null);
function Lm() {
  return S.useContext(T3);
}
var R3 = /* @__PURE__ */ S.createContext(Rk);
function t1(r) {
  var o = S.useContext(R3);
  return S.useMemo(function() {
    return r !== void 0 ? [].concat(ar(o), [r]) : o;
  }, [o, r]);
}
var k3 = /* @__PURE__ */ S.createContext(null), C2 = /* @__PURE__ */ S.createContext({});
const _3 = function(r) {
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
function L4(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (_3(r)) {
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
function kk(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = ar(r.querySelectorAll("*")).filter(function(c) {
    return L4(c, o);
  });
  return L4(r, o) && s.unshift(r), s;
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
}, N5 = at.LEFT, D5 = at.RIGHT, L5 = at.UP, am = at.DOWN, im = at.ENTER, M3 = at.ESC, Av = at.HOME, Pv = at.END, A4 = [L5, am, N5, D5];
function _k(r, o, s, c) {
  var d, m, h, E, T = "prev", w = "next", _ = "children", k = "parent";
  if (r === "inline" && c === im)
    return {
      inlineTrigger: !0
    };
  var N = (d = {}, tt(d, L5, T), tt(d, am, w), d), A = (m = {}, tt(m, N5, s ? w : T), tt(m, D5, s ? T : w), tt(m, am, _), tt(m, im, _), m), P = (h = {}, tt(h, L5, T), tt(h, am, w), tt(h, im, _), tt(h, M3, k), tt(h, N5, s ? _ : k), tt(h, D5, s ? k : _), h), j = {
    inline: N,
    horizontal: A,
    vertical: P,
    inlineSub: N,
    horizontalSub: P,
    verticalSub: P
  }, D = (E = j["".concat(r).concat(o ? "" : "Sub")]) === null || E === void 0 ? void 0 : E[c];
  switch (D) {
    case T:
      return {
        offset: -1,
        sibling: !0
      };
    case w:
      return {
        offset: 1,
        sibling: !0
      };
    case k:
      return {
        offset: -1,
        sibling: !1
      };
    case _:
      return {
        offset: 1,
        sibling: !1
      };
    default:
      return null;
  }
}
function Mk(r) {
  for (var o = r; o; ) {
    if (o.getAttribute("data-menu-list"))
      return o;
    o = o.parentElement;
  }
  return null;
}
function Ok(r, o) {
  for (var s = r || document.activeElement; s; ) {
    if (o.has(s))
      return s;
    s = s.parentElement;
  }
  return null;
}
function b2(r, o) {
  var s = kk(r, !0);
  return s.filter(function(c) {
    return o.has(c);
  });
}
function P4(r, o, s) {
  var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!r)
    return null;
  var d = b2(r, o), m = d.length, h = d.findIndex(function(E) {
    return s === E;
  });
  return c < 0 ? h === -1 ? h = m - 1 : h -= 1 : c > 0 && (h += 1), h = (h + m) % m, d[h];
}
var A5 = function(o, s) {
  var c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
  return o.forEach(function(h) {
    var E = document.querySelector("[data-menu-id='".concat(w3(s, h), "']"));
    E && (c.add(E), m.set(E, h), d.set(h, E));
  }), {
    elements: c,
    key2element: d,
    element2key: m
  };
};
function Nk(r, o, s, c, d, m, h, E, T, w) {
  var _ = S.useRef(), k = S.useRef();
  k.current = o;
  var N = function() {
    Ci.cancel(_.current);
  };
  return S.useEffect(function() {
    return function() {
      N();
    };
  }, []), function(A) {
    var P = A.which;
    if ([].concat(A4, [im, M3, Av, Pv]).includes(P)) {
      var j = m(), D = A5(j, c), W = D, V = W.elements, z = W.key2element, I = W.element2key, U = z.get(o), Y = Ok(U, V), Q = I.get(Y), ne = _k(r, h(Q, !0).length === 1, s, P);
      if (!ne && P !== Av && P !== Pv)
        return;
      (A4.includes(P) || [Av, Pv].includes(P)) && A.preventDefault();
      var ue = function(Me) {
        if (Me) {
          var xe = Me, Le = Me.querySelector("a");
          Le != null && Le.getAttribute("href") && (xe = Le);
          var Ie = I.get(Me);
          E(Ie), N(), _.current = Ci(function() {
            k.current === Ie && xe.focus();
          });
        }
      };
      if ([Av, Pv].includes(P) || ne.sibling || !Y) {
        var re;
        !Y || r === "inline" ? re = d.current : re = Mk(Y);
        var ge, pe = b2(re, V);
        P === Av ? ge = pe[0] : P === Pv ? ge = pe[pe.length - 1] : ge = P4(re, V, Y, ne.offset), ue(ge);
      } else if (ne.inlineTrigger)
        T(Q);
      else if (ne.offset > 0)
        T(Q, !0), N(), _.current = Ci(function() {
          D = A5(j, c);
          var Ee = Y.getAttribute("aria-controls"), Me = document.getElementById(Ee), xe = P4(Me, D.elements);
          ue(xe);
        }, 5);
      else if (ne.offset < 0) {
        var te = h(Q, !0), se = te[te.length - 2], de = z.get(se);
        T(se, !1), ue(de);
      }
    }
    w == null || w(A);
  };
}
function Dk(r) {
  Promise.resolve().then(r);
}
var S2 = "__RC_UTIL_PATH_SPLIT__", I4 = function(o) {
  return o.join(S2);
}, Lk = function(o) {
  return o.split(S2);
}, P5 = "rc-menu-more";
function Ak() {
  var r = S.useState({}), o = Te(r, 2), s = o[1], c = Ma(/* @__PURE__ */ new Map()), d = Ma(/* @__PURE__ */ new Map()), m = S.useState([]), h = Te(m, 2), E = h[0], T = h[1], w = Ma(0), _ = Ma(!1), k = function() {
    _.current || s({});
  }, N = Ml(function(z, I) {
    process.env.NODE_ENV !== "production" && ha(!c.current.has(z), "Duplicated key '".concat(z, "' used in Menu by path [").concat(I.join(" > "), "]"));
    var U = I4(I);
    d.current.set(U, z), c.current.set(z, U), w.current += 1;
    var Y = w.current;
    Dk(function() {
      Y === w.current && k();
    });
  }, []), A = Ml(function(z, I) {
    var U = I4(I);
    d.current.delete(U), c.current.delete(z);
  }, []), P = Ml(function(z) {
    T(z);
  }, []), j = Ml(function(z, I) {
    var U = c.current.get(z) || "", Y = Lk(U);
    return I && E.includes(Y[0]) && Y.unshift(P5), Y;
  }, [E]), D = Ml(function(z, I) {
    return z.some(function(U) {
      var Y = j(U, !0);
      return Y.includes(I);
    });
  }, [j]), W = function() {
    var I = ar(c.current.keys());
    return E.length && I.push(P5), I;
  }, V = Ml(function(z) {
    var I = "".concat(c.current.get(z)).concat(S2), U = /* @__PURE__ */ new Set();
    return ar(d.current.keys()).forEach(function(Y) {
      Y.startsWith(I) && U.add(d.current.get(Y));
    }), U;
  }, []);
  return S.useEffect(function() {
    return function() {
      _.current = !0;
    };
  }, []), {
    // Register
    registerPath: N,
    unregisterPath: A,
    refreshOverflowKeys: P,
    // Util
    isSubPathKey: D,
    getKeyPath: j,
    getKeys: W,
    getSubPathKeys: V
  };
}
function $v(r) {
  var o = S.useRef(r);
  o.current = r;
  var s = S.useCallback(function() {
    for (var c, d = arguments.length, m = new Array(d), h = 0; h < d; h++)
      m[h] = arguments[h];
    return (c = o.current) === null || c === void 0 ? void 0 : c.call.apply(c, [o].concat(m));
  }, []);
  return r ? s : void 0;
}
var Pk = Math.random().toFixed(5).toString().slice(2), z4 = 0;
function Ik(r) {
  var o = jv(r, {
    value: r
  }), s = Te(o, 2), c = s[0], d = s[1];
  return S.useEffect(function() {
    z4 += 1;
    var m = process.env.NODE_ENV === "test" ? "test" : "".concat(Pk, "-").concat(z4);
    d("rc-menu-uuid-".concat(m));
  }, []), c;
}
function Am(r, o) {
  var s = Re({}, r);
  return Array.isArray(o) && o.forEach(function(c) {
    delete s[c];
  }), s;
}
function O3(r, o, s, c) {
  var d = S.useContext(Zi), m = d.activeKey, h = d.onActive, E = d.onInactive, T = {
    active: m === r
  };
  return o || (T.onMouseEnter = function(w) {
    s == null || s({
      key: r,
      domEvent: w
    }), h(r);
  }, T.onMouseLeave = function(w) {
    c == null || c({
      key: r,
      domEvent: w
    }), E(r);
  }), T;
}
function N3(r) {
  var o = S.useContext(Zi), s = o.mode, c = o.rtl, d = o.inlineIndent;
  if (s !== "inline")
    return null;
  var m = r;
  return c ? {
    paddingRight: m * d
  } : {
    paddingLeft: m * d
  };
}
function D3(r) {
  var o = r.icon, s = r.props, c = r.children, d;
  return o === null || o === !1 ? null : (typeof o == "function" ? d = /* @__PURE__ */ S.createElement(o, Re({}, s)) : typeof o != "boolean" && (d = o), d || c || null);
}
var zk = ["item"];
function hm(r) {
  var o = r.item, s = Vn(r, zk);
  return Object.defineProperty(s, "item", {
    get: function() {
      return ha(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), o;
    }
  }), s;
}
var Hk = ["title", "attribute", "elementRef"], $k = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], Uk = ["active"], jk = /* @__PURE__ */ function(r) {
  Df(s, r);
  var o = Nm(s);
  function s() {
    return Xi(this, s), o.apply(this, arguments);
  }
  return Ji(s, [{
    key: "render",
    value: function() {
      var d = this.props, m = d.title, h = d.attribute, E = d.elementRef, T = Vn(d, Hk), w = Am(T, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return ha(!h, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ S.createElement(Dl.Item, an({}, h, {
        title: typeof m == "string" ? m : void 0
      }, w, {
        ref: E
      }));
    }
  }]), s;
}(S.Component), Vk = /* @__PURE__ */ S.forwardRef(function(r, o) {
  var s, c = r.style, d = r.className, m = r.eventKey, h = r.warnKey, E = r.disabled, T = r.itemIcon, w = r.children, _ = r.role, k = r.onMouseEnter, N = r.onMouseLeave, A = r.onClick, P = r.onKeyDown, j = r.onFocus, D = Vn(r, $k), W = x3(m), V = S.useContext(Zi), z = V.prefixCls, I = V.onItemClick, U = V.disabled, Y = V.overflowDisabled, Q = V.itemIcon, ne = V.selectedKeys, ue = V.onActive, re = S.useContext(C2), ge = re._internalRenderMenuItem, pe = "".concat(z, "-item"), te = S.useRef(), se = S.useRef(), de = U || E, Ee = km(o, se), Me = t1(m);
  process.env.NODE_ENV !== "production" && h && ha(!1, "MenuItem should not leave undefined `key`.");
  var xe = function(He) {
    return {
      key: m,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: ar(Me).reverse(),
      item: te.current,
      domEvent: He
    };
  }, Le = T || Q, Ie = O3(m, de, k, N), ie = Ie.active, he = Vn(Ie, Uk), Se = ne.includes(m), ze = N3(Me.length), Ke = function(He) {
    if (!de) {
      var et = xe(He);
      A == null || A(hm(et)), I(et);
    }
  }, Ze = function(He) {
    if (P == null || P(He), He.which === at.ENTER) {
      var et = xe(He);
      A == null || A(hm(et)), I(et);
    }
  }, it = function(He) {
    ue(m), j == null || j(He);
  }, Be = {};
  r.role === "option" && (Be["aria-selected"] = Se);
  var nt = /* @__PURE__ */ S.createElement(jk, an({
    ref: te,
    elementRef: Ee,
    role: _ === null ? "none" : _ || "menuitem",
    tabIndex: E ? null : -1,
    "data-menu-id": Y && W ? null : W
  }, D, he, Be, {
    component: "li",
    "aria-disabled": E,
    style: Re(Re({}, ze), c),
    className: wn(pe, (s = {}, tt(s, "".concat(pe, "-active"), ie), tt(s, "".concat(pe, "-selected"), Se), tt(s, "".concat(pe, "-disabled"), de), s), d),
    onClick: Ke,
    onKeyDown: Ze,
    onFocus: it
  }), w, /* @__PURE__ */ S.createElement(D3, {
    props: Re(Re({}, r), {}, {
      isSelected: Se
    }),
    icon: Le
  }));
  return ge && (nt = ge(nt, r, {
    selected: Se
  })), nt;
});
function Fk(r, o) {
  var s = r.eventKey, c = Lm(), d = t1(s);
  return S.useEffect(function() {
    if (c)
      return c.registerPath(s, d), function() {
        c.unregisterPath(s, d);
      };
  }, [d]), c ? null : /* @__PURE__ */ S.createElement(Vk, an({}, r, {
    ref: o
  }));
}
const Pm = /* @__PURE__ */ S.forwardRef(Fk);
var Bk = ["className", "children"], Wk = function(o, s) {
  var c = o.className, d = o.children, m = Vn(o, Bk), h = S.useContext(Zi), E = h.prefixCls, T = h.mode, w = h.rtl;
  return /* @__PURE__ */ S.createElement("ul", an({
    className: wn(E, w && "".concat(E, "-rtl"), "".concat(E, "-sub"), "".concat(E, "-").concat(T === "inline" ? "inline" : "vertical"), c),
    role: "menu"
  }, m, {
    "data-menu-list": !0,
    ref: s
  }), d);
}, E2 = /* @__PURE__ */ S.forwardRef(Wk);
E2.displayName = "SubMenuList";
function w2(r, o) {
  return Wv(r).map(function(s, c) {
    if (/* @__PURE__ */ S.isValidElement(s)) {
      var d, m, h = s.key, E = (d = (m = s.props) === null || m === void 0 ? void 0 : m.eventKey) !== null && d !== void 0 ? d : h, T = E == null;
      T && (E = "tmp_key-".concat([].concat(ar(o), [c]).join("-")));
      var w = {
        key: E,
        eventKey: E
      };
      return process.env.NODE_ENV !== "production" && T && (w.warnKey = !0), /* @__PURE__ */ S.cloneElement(s, w);
    }
    return s;
  });
}
var L3 = /* @__PURE__ */ S.createContext(null), H4 = [];
function Kk(r, o) {
  var s = S.useState(function() {
    if (!pa())
      return null;
    var P = document.createElement("div");
    return process.env.NODE_ENV !== "production" && o && P.setAttribute("data-debug", o), P;
  }), c = Te(s, 1), d = c[0], m = S.useRef(!1), h = S.useContext(L3), E = S.useState(H4), T = Te(E, 2), w = T[0], _ = T[1], k = h || (m.current ? void 0 : function(P) {
    _(function(j) {
      var D = [P].concat(ar(j));
      return D;
    });
  });
  function N() {
    d.parentElement || document.body.appendChild(d), m.current = !0;
  }
  function A() {
    var P;
    (P = d.parentElement) === null || P === void 0 || P.removeChild(d), m.current = !1;
  }
  return ia(function() {
    return r ? h ? h(N) : N() : A(), A;
  }, [r]), ia(function() {
    w.length && (w.forEach(function(P) {
      return P();
    }), _(H4));
  }, [w]), [d, k];
}
function Gk(r, o) {
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
var $4 = "data-rc-order", U4 = "data-rc-priority", qk = "rc-util-key", I5 = /* @__PURE__ */ new Map();
function A3() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = r.mark;
  return o ? o.startsWith("data-") ? o : "data-".concat(o) : qk;
}
function Im(r) {
  if (r.attachTo)
    return r.attachTo;
  var o = document.querySelector("head");
  return o || document.body;
}
function Yk(r) {
  return r === "queue" ? "prependQueue" : r ? "prepend" : "append";
}
function P3(r) {
  return Array.from((I5.get(r) || r).children).filter(function(o) {
    return o.tagName === "STYLE";
  });
}
function I3(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!pa())
    return null;
  var s = o.csp, c = o.prepend, d = o.priority, m = d === void 0 ? 0 : d, h = Yk(c), E = h === "prependQueue", T = document.createElement("style");
  T.setAttribute($4, h), E && m && T.setAttribute(U4, "".concat(m)), s != null && s.nonce && (T.nonce = s == null ? void 0 : s.nonce), T.innerHTML = r;
  var w = Im(o), _ = w.firstChild;
  if (c) {
    if (E) {
      var k = P3(w).filter(function(N) {
        if (!["prepend", "prependQueue"].includes(N.getAttribute($4)))
          return !1;
        var A = Number(N.getAttribute(U4) || 0);
        return m >= A;
      });
      if (k.length)
        return w.insertBefore(T, k[k.length - 1].nextSibling), T;
    }
    w.insertBefore(T, _);
  } else
    w.appendChild(T);
  return T;
}
function z3(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = Im(o);
  return P3(s).find(function(c) {
    return c.getAttribute(A3(o)) === r;
  });
}
function Gv(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = z3(r, o);
  if (s) {
    var c = Im(o);
    c.removeChild(s);
  }
}
function Qk(r, o) {
  var s = I5.get(r);
  if (!s || !Gk(document, s)) {
    var c = I3("", o), d = c.parentNode;
    I5.set(r, d), r.removeChild(c);
  }
}
function Du(r, o) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = Im(s);
  Qk(c, s);
  var d = z3(o, s);
  if (d) {
    var m, h;
    if ((m = s.csp) !== null && m !== void 0 && m.nonce && d.nonce !== ((h = s.csp) === null || h === void 0 ? void 0 : h.nonce)) {
      var E;
      d.nonce = (E = s.csp) === null || E === void 0 ? void 0 : E.nonce;
    }
    return d.innerHTML !== r && (d.innerHTML = r), d;
  }
  var T = I3(r, s);
  return T.setAttribute(A3(s), o), T;
}
var l5;
function Zk(r) {
  if (typeof document == "undefined")
    return 0;
  if (r || l5 === void 0) {
    var o = document.createElement("div");
    o.style.width = "100%", o.style.height = "200px";
    var s = document.createElement("div"), c = s.style;
    c.position = "absolute", c.top = "0", c.left = "0", c.pointerEvents = "none", c.visibility = "hidden", c.width = "200px", c.height = "150px", c.overflow = "hidden", s.appendChild(o), document.body.appendChild(s);
    var d = o.offsetWidth;
    s.style.overflow = "scroll";
    var m = o.offsetWidth;
    d === m && (m = s.clientWidth), document.body.removeChild(s), l5 = d - m;
  }
  return l5;
}
function j4(r) {
  var o = r.match(/^(.*)px$/), s = Number(o == null ? void 0 : o[1]);
  return Number.isNaN(s) ? Zk() : s;
}
function Xk(r) {
  if (typeof document == "undefined" || !r || !(r instanceof Element))
    return {
      width: 0,
      height: 0
    };
  var o = getComputedStyle(r, "::-webkit-scrollbar"), s = o.width, c = o.height;
  return {
    width: j4(s),
    height: j4(c)
  };
}
function Jk() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var e_ = "rc-util-locker-".concat(Date.now()), V4 = 0;
function t_(r) {
  var o = !!r, s = S.useState(function() {
    return V4 += 1, "".concat(e_, "_").concat(V4);
  }), c = Te(s, 1), d = c[0];
  ia(function() {
    if (o) {
      var m = Xk(document.body).width, h = Jk();
      Du(`
html body {
  overflow-y: hidden;
  `.concat(h ? "width: calc(100% - ".concat(m, "px);") : "", `
}`), d);
    } else
      Gv(d);
    return function() {
      Gv(d);
    };
  }, [o, d]);
}
var F4 = !1;
function n_(r) {
  return typeof r == "boolean" && (F4 = r), F4;
}
var B4 = function(o) {
  return o === !1 ? !1 : !pa() || !o ? null : typeof o == "string" ? document.querySelector(o) : typeof o == "function" ? o() : o;
}, x2 = /* @__PURE__ */ S.forwardRef(function(r, o) {
  var s = r.open, c = r.autoLock, d = r.getContainer, m = r.debug, h = r.autoDestroy, E = h === void 0 ? !0 : h, T = r.children, w = S.useState(s), _ = Te(w, 2), k = _[0], N = _[1], A = k || s;
  process.env.NODE_ENV !== "production" && ha(pa() || !s, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), S.useEffect(function() {
    (E || s) && N(s);
  }, [s, E]);
  var P = S.useState(function() {
    return B4(d);
  }), j = Te(P, 2), D = j[0], W = j[1];
  S.useEffect(function() {
    var pe = B4(d);
    W(pe != null ? pe : null);
  });
  var V = Kk(A && !D, m), z = Te(V, 2), I = z[0], U = z[1], Y = D != null ? D : I;
  t_(c && s && pa() && (Y === I || Y === document.body));
  var Q = null;
  if (T && _m(T) && o) {
    var ne = T;
    Q = ne.ref;
  }
  var ue = km(Q, o);
  if (!A || !pa() || D === void 0)
    return null;
  var re = Y === !1 || n_(), ge = T;
  return o && (ge = /* @__PURE__ */ S.cloneElement(T, {
    ref: ue
  })), /* @__PURE__ */ S.createElement(L3.Provider, {
    value: U
  }, re ? ge : /* @__PURE__ */ Tm.createPortal(ge, Y));
});
process.env.NODE_ENV !== "production" && (x2.displayName = "Portal");
function H3(r) {
  var o;
  return r == null || (o = r.getRootNode) === null || o === void 0 ? void 0 : o.call(r);
}
function r_(r) {
  return H3(r) instanceof ShadowRoot;
}
function mm(r) {
  return r_(r) ? H3(r) : null;
}
function a_() {
  var r = Re({}, S);
  return r.useId;
}
var W4 = 0, K4 = a_();
const i_ = K4 ? (
  // Use React `useId`
  function(o) {
    var s = K4();
    return o || (process.env.NODE_ENV === "test" ? "test-id" : s);
  }
) : (
  // Use compatible of `useId`
  function(o) {
    var s = S.useState("ssr-id"), c = Te(s, 2), d = c[0], m = c[1];
    return S.useEffect(function() {
      var h = W4;
      W4 += 1, m("rc_unique_".concat(h));
    }, []), o || (process.env.NODE_ENV === "test" ? "test-id" : d);
  }
), o_ = function() {
  if (typeof navigator == "undefined" || typeof window == "undefined")
    return !1;
  var r = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(r) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(r == null ? void 0 : r.substr(0, 4));
};
var l_ = ["children"], $3 = /* @__PURE__ */ S.createContext({});
function u_(r) {
  var o = r.children, s = Vn(r, l_);
  return /* @__PURE__ */ S.createElement($3.Provider, {
    value: s
  }, o);
}
var s_ = /* @__PURE__ */ function(r) {
  Df(s, r);
  var o = Nm(s);
  function s() {
    return Xi(this, s), o.apply(this, arguments);
  }
  return Ji(s, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), s;
}(S.Component), Ks = "none", Kh = "appear", Gh = "enter", qh = "leave", G4 = "none", qi = "prepare", wf = "start", xf = "active", T2 = "end", U3 = "prepared";
function q4(r, o) {
  var s = {};
  return s[r.toLowerCase()] = o.toLowerCase(), s["Webkit".concat(r)] = "webkit".concat(o), s["Moz".concat(r)] = "moz".concat(o), s["ms".concat(r)] = "MS".concat(o), s["O".concat(r)] = "o".concat(o.toLowerCase()), s;
}
function c_(r, o) {
  var s = {
    animationend: q4("Animation", "AnimationEnd"),
    transitionend: q4("Transition", "TransitionEnd")
  };
  return r && ("AnimationEvent" in o || delete s.animationend.animation, "TransitionEvent" in o || delete s.transitionend.transition), s;
}
var f_ = c_(pa(), typeof window != "undefined" ? window : {}), j3 = {};
if (pa()) {
  var d_ = document.createElement("div");
  j3 = d_.style;
}
var Yh = {};
function V3(r) {
  if (Yh[r])
    return Yh[r];
  var o = f_[r];
  if (o)
    for (var s = Object.keys(o), c = s.length, d = 0; d < c; d += 1) {
      var m = s[d];
      if (Object.prototype.hasOwnProperty.call(o, m) && m in j3)
        return Yh[r] = o[m], Yh[r];
    }
  return "";
}
var F3 = V3("animationend"), B3 = V3("transitionend"), W3 = !!(F3 && B3), Y4 = F3 || "animationend", Q4 = B3 || "transitionend";
function Z4(r, o) {
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
const v_ = function(r) {
  var o = Ma(), s = Ma(r);
  s.current = r;
  var c = S.useCallback(function(h) {
    s.current(h);
  }, []);
  function d(h) {
    h && (h.removeEventListener(Q4, c), h.removeEventListener(Y4, c));
  }
  function m(h) {
    o.current && o.current !== h && d(o.current), h && h !== o.current && (h.addEventListener(Q4, c), h.addEventListener(Y4, c), o.current = h);
  }
  return S.useEffect(function() {
    return function() {
      d(o.current);
    };
  }, []), [m, d];
};
var K3 = pa() ? eR : Bo;
const p_ = function() {
  var r = S.useRef(null);
  function o() {
    Ci.cancel(r.current);
  }
  function s(c) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    o();
    var m = Ci(function() {
      d <= 1 ? c({
        isCanceled: function() {
          return m !== r.current;
        }
      }) : s(c, d - 1);
    });
    r.current = m;
  }
  return S.useEffect(function() {
    return function() {
      o();
    };
  }, []), [s, o];
};
var h_ = [qi, wf, xf, T2], m_ = [qi, U3], G3 = !1, g_ = !0;
function q3(r) {
  return r === xf || r === T2;
}
const y_ = function(r, o, s) {
  var c = Tf(G4), d = Te(c, 2), m = d[0], h = d[1], E = p_(), T = Te(E, 2), w = T[0], _ = T[1];
  function k() {
    h(qi, !0);
  }
  var N = o ? m_ : h_;
  return K3(function() {
    if (m !== G4 && m !== T2) {
      var A = N.indexOf(m), P = N[A + 1], j = s(m);
      j === G3 ? h(P, !0) : P && w(function(D) {
        function W() {
          D.isCanceled() || h(P, !0);
        }
        j === !0 ? W() : Promise.resolve(j).then(W);
      });
    }
  }, [r, m]), S.useEffect(function() {
    return function() {
      _();
    };
  }, []), [k, m];
};
function C_(r, o, s, c) {
  var d = c.motionEnter, m = d === void 0 ? !0 : d, h = c.motionAppear, E = h === void 0 ? !0 : h, T = c.motionLeave, w = T === void 0 ? !0 : T, _ = c.motionDeadline, k = c.motionLeaveImmediately, N = c.onAppearPrepare, A = c.onEnterPrepare, P = c.onLeavePrepare, j = c.onAppearStart, D = c.onEnterStart, W = c.onLeaveStart, V = c.onAppearActive, z = c.onEnterActive, I = c.onLeaveActive, U = c.onAppearEnd, Y = c.onEnterEnd, Q = c.onLeaveEnd, ne = c.onVisibleChanged, ue = Tf(), re = Te(ue, 2), ge = re[0], pe = re[1], te = Tf(Ks), se = Te(te, 2), de = se[0], Ee = se[1], Me = Tf(null), xe = Te(Me, 2), Le = xe[0], Ie = xe[1], ie = Ma(!1), he = Ma(null);
  function Se() {
    return s();
  }
  var ze = Ma(!1);
  function Ke() {
    Ee(Ks, !0), Ie(null, !0);
  }
  function Ze(Xe) {
    var _t = Se();
    if (!(Xe && !Xe.deadline && Xe.target !== _t)) {
      var gt = ze.current, Xt;
      de === Kh && gt ? Xt = U == null ? void 0 : U(_t, Xe) : de === Gh && gt ? Xt = Y == null ? void 0 : Y(_t, Xe) : de === qh && gt && (Xt = Q == null ? void 0 : Q(_t, Xe)), de !== Ks && gt && Xt !== !1 && Ke();
    }
  }
  var it = v_(Ze), Be = Te(it, 1), nt = Be[0], Nt = function(_t) {
    var gt, Xt, ot;
    switch (_t) {
      case Kh:
        return gt = {}, tt(gt, qi, N), tt(gt, wf, j), tt(gt, xf, V), gt;
      case Gh:
        return Xt = {}, tt(Xt, qi, A), tt(Xt, wf, D), tt(Xt, xf, z), Xt;
      case qh:
        return ot = {}, tt(ot, qi, P), tt(ot, wf, W), tt(ot, xf, I), ot;
      default:
        return {};
    }
  }, He = S.useMemo(function() {
    return Nt(de);
  }, [de]), et = y_(de, !r, function(Xe) {
    if (Xe === qi) {
      var _t = He[qi];
      return _t ? _t(Se()) : G3;
    }
    if (mt in He) {
      var gt;
      Ie(((gt = He[mt]) === null || gt === void 0 ? void 0 : gt.call(He, Se(), null)) || null);
    }
    return mt === xf && (nt(Se()), _ > 0 && (clearTimeout(he.current), he.current = setTimeout(function() {
      Ze({
        deadline: !0
      });
    }, _))), mt === U3 && Ke(), g_;
  }), Bt = Te(et, 2), we = Bt[0], mt = Bt[1], Dt = q3(mt);
  ze.current = Dt, K3(function() {
    pe(o);
    var Xe = ie.current;
    ie.current = !0;
    var _t;
    !Xe && o && E && (_t = Kh), Xe && o && m && (_t = Gh), (Xe && !o && w || !Xe && k && !o && w) && (_t = qh);
    var gt = Nt(_t);
    _t && (r || gt[qi]) ? (Ee(_t), we()) : Ee(Ks);
  }, [o]), Bo(function() {
    // Cancel appear
    (de === Kh && !E || // Cancel enter
    de === Gh && !m || // Cancel leave
    de === qh && !w) && Ee(Ks);
  }, [E, m, w]), Bo(function() {
    return function() {
      ie.current = !1, clearTimeout(he.current);
    };
  }, []);
  var zt = S.useRef(!1);
  Bo(function() {
    ge && (zt.current = !0), ge !== void 0 && de === Ks && ((zt.current || ge) && (ne == null || ne(ge)), zt.current = !0);
  }, [ge, de]);
  var $t = Le;
  return He[qi] && mt === wf && ($t = Re({
    transition: "none"
  }, $t)), [de, mt, $t, ge != null ? ge : o];
}
function b_(r) {
  var o = r;
  Bn(r) === "object" && (o = r.transitionSupport);
  function s(d, m) {
    return !!(d.motionName && o && m !== !1);
  }
  var c = /* @__PURE__ */ S.forwardRef(function(d, m) {
    var h = d.visible, E = h === void 0 ? !0 : h, T = d.removeOnLeave, w = T === void 0 ? !0 : T, _ = d.forceRender, k = d.children, N = d.motionName, A = d.leavedClassName, P = d.eventProps, j = S.useContext($3), D = j.motion, W = s(d, D), V = Ma(), z = Ma();
    function I() {
      try {
        return V.current instanceof HTMLElement ? V.current : rm(z.current);
      } catch (Ie) {
        return null;
      }
    }
    var U = C_(W, E, I, d), Y = Te(U, 4), Q = Y[0], ne = Y[1], ue = Y[2], re = Y[3], ge = S.useRef(re);
    re && (ge.current = !0);
    var pe = S.useCallback(function(Ie) {
      V.current = Ie, m2(m, Ie);
    }, [m]), te, se = Re(Re({}, P), {}, {
      visible: E
    });
    if (!k)
      te = null;
    else if (Q === Ks)
      re ? te = k(Re({}, se), pe) : !w && ge.current && A ? te = k(Re(Re({}, se), {}, {
        className: A
      }), pe) : _ || !w && !A ? te = k(Re(Re({}, se), {}, {
        style: {
          display: "none"
        }
      }), pe) : te = null;
    else {
      var de, Ee;
      ne === qi ? Ee = "prepare" : q3(ne) ? Ee = "active" : ne === wf && (Ee = "start");
      var Me = Z4(N, "".concat(Q, "-").concat(Ee));
      te = k(Re(Re({}, se), {}, {
        className: wn(Z4(N, Q), (de = {}, tt(de, Me, Me && Ee), tt(de, N, typeof N == "string"), de)),
        style: ue
      }), pe);
    }
    if (/* @__PURE__ */ S.isValidElement(te) && _m(te)) {
      var xe = te, Le = xe.ref;
      Le || (te = /* @__PURE__ */ S.cloneElement(te, {
        ref: pe
      }));
    }
    return /* @__PURE__ */ S.createElement(s_, {
      ref: z
    }, te);
  });
  return c.displayName = "CSSMotion", c;
}
const zm = b_(W3);
var z5 = "add", H5 = "keep", $5 = "remove", u5 = "removed";
function S_(r) {
  var o;
  return r && Bn(r) === "object" && "key" in r ? o = r : o = {
    key: r
  }, Re(Re({}, o), {}, {
    key: String(o.key)
  });
}
function U5() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return r.map(S_);
}
function E_() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], s = [], c = 0, d = o.length, m = U5(r), h = U5(o);
  m.forEach(function(w) {
    for (var _ = !1, k = c; k < d; k += 1) {
      var N = h[k];
      if (N.key === w.key) {
        c < k && (s = s.concat(h.slice(c, k).map(function(A) {
          return Re(Re({}, A), {}, {
            status: z5
          });
        })), c = k), s.push(Re(Re({}, N), {}, {
          status: H5
        })), c += 1, _ = !0;
        break;
      }
    }
    _ || s.push(Re(Re({}, w), {}, {
      status: $5
    }));
  }), c < d && (s = s.concat(h.slice(c).map(function(w) {
    return Re(Re({}, w), {}, {
      status: z5
    });
  })));
  var E = {};
  s.forEach(function(w) {
    var _ = w.key;
    E[_] = (E[_] || 0) + 1;
  });
  var T = Object.keys(E).filter(function(w) {
    return E[w] > 1;
  });
  return T.forEach(function(w) {
    s = s.filter(function(_) {
      var k = _.key, N = _.status;
      return k !== w || N !== $5;
    }), s.forEach(function(_) {
      _.key === w && (_.status = H5);
    });
  }), s;
}
var w_ = ["component", "children", "onVisibleChanged", "onAllRemoved"], x_ = ["status"], T_ = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function R_(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zm, s = /* @__PURE__ */ function(c) {
    Df(m, c);
    var d = Nm(m);
    function m() {
      var h;
      Xi(this, m);
      for (var E = arguments.length, T = new Array(E), w = 0; w < E; w++)
        T[w] = arguments[w];
      return h = d.call.apply(d, [this].concat(T)), tt(O5(h), "state", {
        keyEntities: []
      }), tt(O5(h), "removeKey", function(_) {
        var k = h.state.keyEntities, N = k.map(function(A) {
          return A.key !== _ ? A : Re(Re({}, A), {}, {
            status: u5
          });
        });
        return h.setState({
          keyEntities: N
        }), N.filter(function(A) {
          var P = A.status;
          return P !== u5;
        }).length;
      }), h;
    }
    return Ji(m, [{
      key: "render",
      value: function() {
        var E = this, T = this.state.keyEntities, w = this.props, _ = w.component, k = w.children, N = w.onVisibleChanged, A = w.onAllRemoved, P = Vn(w, w_), j = _ || S.Fragment, D = {};
        return T_.forEach(function(W) {
          D[W] = P[W], delete P[W];
        }), delete P.keys, /* @__PURE__ */ S.createElement(j, P, T.map(function(W, V) {
          var z = W.status, I = Vn(W, x_), U = z === z5 || z === H5;
          return /* @__PURE__ */ S.createElement(o, an({}, D, {
            key: I.key,
            visible: U,
            eventProps: I,
            onVisibleChanged: function(Q) {
              if (N == null || N(Q, {
                key: I.key
              }), !Q) {
                var ne = E.removeKey(I.key);
                ne === 0 && A && A();
              }
            }
          }), function(Y, Q) {
            return k(Re(Re({}, Y), {}, {
              index: V
            }), Q);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(E, T) {
        var w = E.keys, _ = T.keyEntities, k = U5(w), N = E_(_, k);
        return {
          keyEntities: N.filter(function(A) {
            var P = _.find(function(j) {
              var D = j.key;
              return A.key === D;
            });
            return !(P && P.status === u5 && A.status === $5);
          })
        };
      }
    }]), m;
  }(S.Component);
  return tt(s, "defaultProps", {
    component: "div"
  }), s;
}
R_(W3);
function k_(r) {
  var o = r.prefixCls, s = r.align, c = r.arrow, d = r.arrowPos, m = c || {}, h = m.className, E = m.content, T = d.x, w = T === void 0 ? 0 : T, _ = d.y, k = _ === void 0 ? 0 : _, N = S.useRef();
  if (!s || !s.points)
    return null;
  var A = {
    position: "absolute"
  };
  if (s.autoArrow !== !1) {
    var P = s.points[0], j = s.points[1], D = P[0], W = P[1], V = j[0], z = j[1];
    D === V || !["t", "b"].includes(D) ? A.top = k : D === "t" ? A.top = 0 : A.bottom = 0, W === z || !["l", "r"].includes(W) ? A.left = w : W === "l" ? A.left = 0 : A.right = 0;
  }
  return /* @__PURE__ */ S.createElement("div", {
    ref: N,
    className: wn("".concat(o, "-arrow"), h),
    style: A
  }, E);
}
function __(r) {
  var o = r.prefixCls, s = r.open, c = r.zIndex, d = r.mask, m = r.motion;
  return d ? /* @__PURE__ */ S.createElement(zm, an({}, m, {
    motionAppear: !0,
    visible: s,
    removeOnLeave: !0
  }), function(h) {
    var E = h.className;
    return /* @__PURE__ */ S.createElement("div", {
      style: {
        zIndex: c
      },
      className: wn("".concat(o, "-mask"), E)
    });
  }) : null;
}
var Y3 = /* @__PURE__ */ S.memo(function(r) {
  var o = r.children;
  return o;
}, function(r, o) {
  return o.cache;
});
process.env.NODE_ENV !== "production" && (Y3.displayName = "PopupContent");
var Q3 = /* @__PURE__ */ S.forwardRef(function(r, o) {
  var s = r.popup, c = r.className, d = r.prefixCls, m = r.style, h = r.target, E = r.onVisibleChanged, T = r.open, w = r.keepDom, _ = r.fresh, k = r.onClick, N = r.mask, A = r.arrow, P = r.arrowPos, j = r.align, D = r.motion, W = r.maskMotion, V = r.forceRender, z = r.getPopupContainer, I = r.autoDestroy, U = r.portal, Y = r.zIndex, Q = r.onMouseEnter, ne = r.onMouseLeave, ue = r.onPointerEnter, re = r.ready, ge = r.offsetX, pe = r.offsetY, te = r.offsetR, se = r.offsetB, de = r.onAlign, Ee = r.onPrepare, Me = r.stretch, xe = r.targetWidth, Le = r.targetHeight, Ie = typeof s == "function" ? s() : s, ie = T || w, he = (z == null ? void 0 : z.length) > 0, Se = S.useState(!z || !he), ze = Te(Se, 2), Ke = ze[0], Ze = ze[1];
  if (ia(function() {
    !Ke && he && h && Ze(!0);
  }, [Ke, he, h]), !Ke)
    return null;
  var it = "auto", Be = {
    left: "-1000vw",
    top: "-1000vh",
    right: it,
    bottom: it
  };
  if (re || !T) {
    var nt, Nt = j.points, He = j.dynamicInset || ((nt = j._experimental) === null || nt === void 0 ? void 0 : nt.dynamicInset), et = He && Nt[0][1] === "r", Bt = He && Nt[0][0] === "b";
    et ? (Be.right = te, Be.left = it) : (Be.left = ge, Be.right = it), Bt ? (Be.bottom = se, Be.top = it) : (Be.top = pe, Be.bottom = it);
  }
  var we = {};
  return Me && (Me.includes("height") && Le ? we.height = Le : Me.includes("minHeight") && Le && (we.minHeight = Le), Me.includes("width") && xe ? we.width = xe : Me.includes("minWidth") && xe && (we.minWidth = xe)), T || (we.pointerEvents = "none"), /* @__PURE__ */ S.createElement(U, {
    open: V || ie,
    getContainer: z && function() {
      return z(h);
    },
    autoDestroy: I
  }, /* @__PURE__ */ S.createElement(__, {
    prefixCls: d,
    open: T,
    zIndex: Y,
    mask: N,
    motion: W
  }), /* @__PURE__ */ S.createElement(Lf, {
    onResize: de,
    disabled: !T
  }, function(mt) {
    return /* @__PURE__ */ S.createElement(zm, an({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: V,
      leavedClassName: "".concat(d, "-hidden")
    }, D, {
      onAppearPrepare: Ee,
      onEnterPrepare: Ee,
      visible: T,
      onVisibleChanged: function(zt) {
        var $t;
        D == null || ($t = D.onVisibleChanged) === null || $t === void 0 || $t.call(D, zt), E(zt);
      }
    }), function(Dt, zt) {
      var $t = Dt.className, Xe = Dt.style, _t = wn(d, $t, c);
      return /* @__PURE__ */ S.createElement("div", {
        ref: l3(mt, o, zt),
        className: _t,
        style: Re(Re(Re(Re({
          "--arrow-x": "".concat(P.x || 0, "px"),
          "--arrow-y": "".concat(P.y || 0, "px")
        }, Be), we), Xe), {}, {
          boxSizing: "border-box",
          zIndex: Y
        }, m),
        onMouseEnter: Q,
        onMouseLeave: ne,
        onPointerEnter: ue,
        onClick: k
      }, A && /* @__PURE__ */ S.createElement(k_, {
        prefixCls: d,
        arrow: A,
        arrowPos: P,
        align: j
      }), /* @__PURE__ */ S.createElement(Y3, {
        cache: !T && !_
      }, Ie));
    });
  }));
});
process.env.NODE_ENV !== "production" && (Q3.displayName = "Popup");
var Z3 = /* @__PURE__ */ S.forwardRef(function(r, o) {
  var s = r.children, c = r.getTriggerDOMNode, d = _m(s), m = S.useCallback(function(E) {
    m2(o, c ? c(E) : E);
  }, [c]), h = km(m, s.ref);
  return d ? /* @__PURE__ */ S.cloneElement(s, {
    ref: h
  }) : s;
});
process.env.NODE_ENV !== "production" && (Z3.displayName = "TriggerWrapper");
var X4 = /* @__PURE__ */ S.createContext(null);
function J4(r) {
  return r ? Array.isArray(r) ? r : [r] : [];
}
function M_(r, o, s, c) {
  return S.useMemo(function() {
    var d = J4(s != null ? s : o), m = J4(c != null ? c : o), h = new Set(d), E = new Set(m);
    return r && (h.has("hover") && (h.delete("hover"), h.add("click")), E.has("hover") && (E.delete("hover"), E.add("click"))), [h, E];
  }, [r, o, s, c]);
}
function O_() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], s = arguments.length > 2 ? arguments[2] : void 0;
  return s ? r[0] === o[0] : r[0] === o[0] && r[1] === o[1];
}
function N_(r, o, s, c) {
  for (var d = s.points, m = Object.keys(r), h = 0; h < m.length; h += 1) {
    var E, T = m[h];
    if (O_((E = r[T]) === null || E === void 0 ? void 0 : E.points, d, c))
      return "".concat(o, "-placement-").concat(T);
  }
  return "";
}
function eS(r, o, s, c) {
  return o || (s ? {
    motionName: "".concat(r, "-").concat(s)
  } : c ? {
    motionName: c
  } : null);
}
function n1(r) {
  return r.ownerDocument.defaultView;
}
function j5(r) {
  for (var o = [], s = r == null ? void 0 : r.parentElement, c = ["hidden", "scroll", "clip", "auto"]; s; ) {
    var d = n1(s).getComputedStyle(s), m = d.overflowX, h = d.overflowY, E = d.overflow;
    [m, h, E].some(function(T) {
      return c.includes(T);
    }) && o.push(s), s = s.parentElement;
  }
  return o;
}
function qv(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(r) ? o : r;
}
function Iv(r) {
  return qv(parseFloat(r), 0);
}
function tS(r, o) {
  var s = Re({}, r);
  return (o || []).forEach(function(c) {
    if (!(c instanceof HTMLBodyElement || c instanceof HTMLHtmlElement)) {
      var d = n1(c).getComputedStyle(c), m = d.overflow, h = d.overflowClipMargin, E = d.borderTopWidth, T = d.borderBottomWidth, w = d.borderLeftWidth, _ = d.borderRightWidth, k = c.getBoundingClientRect(), N = c.offsetHeight, A = c.clientHeight, P = c.offsetWidth, j = c.clientWidth, D = Iv(E), W = Iv(T), V = Iv(w), z = Iv(_), I = qv(Math.round(k.width / P * 1e3) / 1e3), U = qv(Math.round(k.height / N * 1e3) / 1e3), Y = (P - j - V - z) * I, Q = (N - A - D - W) * U, ne = D * U, ue = W * U, re = V * I, ge = z * I, pe = 0, te = 0;
      if (m === "clip") {
        var se = Iv(h);
        pe = se * I, te = se * U;
      }
      var de = k.x + re - pe, Ee = k.y + ne - te, Me = de + k.width + 2 * pe - re - ge - Y, xe = Ee + k.height + 2 * te - ne - ue - Q;
      s.left = Math.max(s.left, de), s.top = Math.max(s.top, Ee), s.right = Math.min(s.right, Me), s.bottom = Math.min(s.bottom, xe);
    }
  }), s;
}
function nS(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = "".concat(o), c = s.match(/^(.*)\%$/);
  return c ? r * (parseFloat(c[1]) / 100) : parseFloat(s);
}
function rS(r, o) {
  var s = o || [], c = Te(s, 2), d = c[0], m = c[1];
  return [nS(r.width, d), nS(r.height, m)];
}
function aS() {
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
function Ru(r, o) {
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
function D_(r, o, s, c, d, m, h) {
  var E = S.useState({
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
  }), T = Te(E, 2), w = T[0], _ = T[1], k = S.useRef(0), N = S.useMemo(function() {
    return o ? j5(o) : [];
  }, [o]), A = S.useRef({}), P = function() {
    A.current = {};
  };
  r || P();
  var j = Fo(function() {
    if (o && s && r) {
      let tr = function(Cr, ga) {
        var xi = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : _t, Na = Ie.x + Cr, eo = Ie.y + ga, Da = Na + nt, to = eo + Be, Ti = Math.max(Na, xi.left), Ko = Math.max(eo, xi.top), no = Math.min(Da, xi.right), Pl = Math.min(to, xi.bottom);
        return Math.max(0, (no - Ti) * (Pl - Ko));
      }, la = function() {
        Yr = Ie.y + $e, ln = Yr + Be, Jn = Ie.x + jt, Tr = Jn + nt;
      };
      var V, z, I = o, U = I.ownerDocument, Y = n1(I), Q = Y.getComputedStyle(I), ne = Q.width, ue = Q.height, re = Q.position, ge = I.style.left, pe = I.style.top, te = I.style.right, se = I.style.bottom, de = I.style.overflow, Ee = Re(Re({}, d[c]), m), Me = U.createElement("div");
      (V = I.parentElement) === null || V === void 0 || V.appendChild(Me), Me.style.left = "".concat(I.offsetLeft, "px"), Me.style.top = "".concat(I.offsetTop, "px"), Me.style.position = re, Me.style.height = "".concat(I.offsetHeight, "px"), Me.style.width = "".concat(I.offsetWidth, "px"), I.style.left = "0", I.style.top = "0", I.style.right = "auto", I.style.bottom = "auto", I.style.overflow = "hidden";
      var xe;
      if (Array.isArray(s))
        xe = {
          x: s[0],
          y: s[1],
          width: 0,
          height: 0
        };
      else {
        var Le = s.getBoundingClientRect();
        xe = {
          x: Le.x,
          y: Le.y,
          width: Le.width,
          height: Le.height
        };
      }
      var Ie = I.getBoundingClientRect(), ie = U.documentElement, he = ie.clientWidth, Se = ie.clientHeight, ze = ie.scrollWidth, Ke = ie.scrollHeight, Ze = ie.scrollTop, it = ie.scrollLeft, Be = Ie.height, nt = Ie.width, Nt = xe.height, He = xe.width, et = {
        left: 0,
        top: 0,
        right: he,
        bottom: Se
      }, Bt = {
        left: -it,
        top: -Ze,
        right: ze - it,
        bottom: Ke - Ze
      }, we = Ee.htmlRegion, mt = "visible", Dt = "visibleFirst";
      we !== "scroll" && we !== Dt && (we = mt);
      var zt = we === Dt, $t = tS(Bt, N), Xe = tS(et, N), _t = we === mt ? Xe : $t, gt = zt ? Xe : _t;
      I.style.left = "auto", I.style.top = "auto", I.style.right = "0", I.style.bottom = "0";
      var Xt = I.getBoundingClientRect();
      I.style.left = ge, I.style.top = pe, I.style.right = te, I.style.bottom = se, I.style.overflow = de, (z = I.parentElement) === null || z === void 0 || z.removeChild(Me);
      var ot = qv(Math.round(nt / parseFloat(ne) * 1e3) / 1e3), Wt = qv(Math.round(Be / parseFloat(ue) * 1e3) / 1e3);
      if (ot === 0 || Wt === 0 || fm(s) && !_3(s))
        return;
      var Qt = Ee.offset, ut = Ee.targetOffset, Gt = rS(Ie, Qt), Wn = Te(Gt, 2), qt = Wn[0], en = Wn[1], ye = rS(xe, ut), Ne = Te(ye, 2), We = Ne[0], xt = Ne[1];
      xe.x -= We, xe.y -= xt;
      var Mt = Ee.points || [], rt = Te(Mt, 2), st = rt[0], on = rt[1], Ot = aS(on), Ut = aS(st), ir = gf(xe, Ot), Ft = gf(Ie, Ut), dn = Re({}, Ee), jt = ir.x - Ft.x + qt, $e = ir.y - Ft.y + en, bt = tr(jt, $e), Oe = tr(jt, $e, Xe), Ge = gf(xe, ["t", "l"]), Lt = gf(Ie, ["t", "l"]), mn = gf(xe, ["b", "r"]), Ln = gf(Ie, ["b", "r"]), gn = Ee.overflow || {}, oa = gn.adjustX, qr = gn.adjustY, An = gn.shiftX, Kt = gn.shiftY, Fn = function(ga) {
        return typeof ga == "boolean" ? ga : ga >= 0;
      }, Yr, ln, Jn, Tr;
      la();
      var qa = Fn(qr), Ar = Ut[0] === Ot[0];
      if (qa && Ut[0] === "t" && (ln > gt.bottom || A.current.bt)) {
        var Pr = $e;
        Ar ? Pr -= Be - Nt : Pr = Ge.y - Ln.y - en;
        var Rr = tr(jt, Pr), Ya = tr(jt, Pr, Xe);
        // Of course use larger one
        Rr > bt || Rr === bt && (!zt || // Choose recommend one
        Ya >= Oe) ? (A.current.bt = !0, $e = Pr, en = -en, dn.points = [Ru(Ut, 0), Ru(Ot, 0)]) : A.current.bt = !1;
      }
      if (qa && Ut[0] === "b" && (Yr < gt.top || A.current.tb)) {
        var Pn = $e;
        Ar ? Pn += Be - Nt : Pn = mn.y - Lt.y - en;
        var Ei = tr(jt, Pn), kr = tr(jt, Pn, Xe);
        // Of course use larger one
        Ei > bt || Ei === bt && (!zt || // Choose recommend one
        kr >= Oe) ? (A.current.tb = !0, $e = Pn, en = -en, dn.points = [Ru(Ut, 0), Ru(Ot, 0)]) : A.current.tb = !1;
      }
      var xn = Fn(oa), Ir = Ut[1] === Ot[1];
      if (xn && Ut[1] === "l" && (Tr > gt.right || A.current.rl)) {
        var _r = jt;
        Ir ? _r -= nt - He : _r = Ge.x - Ln.x - qt;
        var zr = tr(_r, $e), Qa = tr(_r, $e, Xe);
        // Of course use larger one
        zr > bt || zr === bt && (!zt || // Choose recommend one
        Qa >= Oe) ? (A.current.rl = !0, jt = _r, qt = -qt, dn.points = [Ru(Ut, 1), Ru(Ot, 1)]) : A.current.rl = !1;
      }
      if (xn && Ut[1] === "r" && (Jn < gt.left || A.current.lr)) {
        var Hr = jt;
        Ir ? Hr += nt - He : Hr = mn.x - Lt.x - qt;
        var Za = tr(Hr, $e), gr = tr(Hr, $e, Xe);
        // Of course use larger one
        Za > bt || Za === bt && (!zt || // Choose recommend one
        gr >= Oe) ? (A.current.lr = !0, jt = Hr, qt = -qt, dn.points = [Ru(Ut, 1), Ru(Ot, 1)]) : A.current.lr = !1;
      }
      la();
      var Qr = An === !0 ? 0 : An;
      typeof Qr == "number" && (Jn < Xe.left && (jt -= Jn - Xe.left - qt, xe.x + He < Xe.left + Qr && (jt += xe.x - Xe.left + He - Qr)), Tr > Xe.right && (jt -= Tr - Xe.right - qt, xe.x > Xe.right - Qr && (jt += xe.x - Xe.right + Qr)));
      var Mr = Kt === !0 ? 0 : Kt;
      typeof Mr == "number" && (Yr < Xe.top && ($e -= Yr - Xe.top - en, xe.y + Nt < Xe.top + Mr && ($e += xe.y - Xe.top + Nt - Mr)), ln > Xe.bottom && ($e -= ln - Xe.bottom - en, xe.y > Xe.bottom - Mr && ($e += xe.y - Xe.bottom + Mr)));
      var ma = Ie.x + jt, In = ma + nt, Kn = Ie.y + $e, Or = Kn + Be, or = xe.x, yr = or + He, ke = xe.y, Zt = ke + Nt, dt = Math.max(ma, or), Ht = Math.min(In, yr), Tn = (dt + Ht) / 2, On = Tn - ma, Nn = Math.max(Kn, ke), vn = Math.min(Or, Zt), er = (Nn + vn) / 2, wi = er - Kn;
      h == null || h(o, dn);
      var Gn = Xt.right - Ie.x - (jt + Ie.width), zn = Xt.bottom - Ie.y - ($e + Ie.height);
      _({
        ready: !0,
        offsetX: jt / ot,
        offsetY: $e / Wt,
        offsetR: Gn / ot,
        offsetB: zn / Wt,
        arrowX: On / ot,
        arrowY: wi / Wt,
        scaleX: ot,
        scaleY: Wt,
        align: dn
      });
    }
  }), D = function() {
    k.current += 1;
    var z = k.current;
    Promise.resolve().then(function() {
      k.current === z && j();
    });
  }, W = function() {
    _(function(z) {
      return Re(Re({}, z), {}, {
        ready: !1
      });
    });
  };
  return ia(W, [c]), ia(function() {
    r || W();
  }, [r]), [w.ready, w.offsetX, w.offsetY, w.offsetR, w.offsetB, w.arrowX, w.arrowY, w.scaleX, w.scaleY, w.align, D];
}
function L_(r, o, s, c, d) {
  ia(function() {
    if (r && o && s) {
      let k = function() {
        c(), d();
      };
      var m = o, h = s, E = j5(m), T = j5(h), w = n1(h), _ = new Set([w].concat(ar(E), ar(T)));
      return _.forEach(function(N) {
        N.addEventListener("scroll", k, {
          passive: !0
        });
      }), w.addEventListener("resize", k, {
        passive: !0
      }), c(), function() {
        _.forEach(function(N) {
          N.removeEventListener("scroll", k), w.removeEventListener("resize", k);
        });
      };
    }
  }, [r, o, s]);
}
function A_(r, o, s, c, d, m, h, E) {
  var T = S.useRef(r), w = S.useRef(!1);
  T.current !== r && (w.current = !0, T.current = r), S.useEffect(function() {
    var _ = Ci(function() {
      w.current = !1;
    });
    return function() {
      Ci.cancel(_);
    };
  }, [r]), S.useEffect(function() {
    if (o && c && (!d || m)) {
      var _ = function() {
        var re = !1, ge = function(se) {
          var de = se.target;
          re = h(de);
        }, pe = function(se) {
          var de = se.target;
          !w.current && T.current && !re && !h(de) && E(!1);
        };
        return [ge, pe];
      }, k = _(), N = Te(k, 2), A = N[0], P = N[1], j = _(), D = Te(j, 2), W = D[0], V = D[1], z = n1(c);
      z.addEventListener("mousedown", A, !0), z.addEventListener("click", P, !0), z.addEventListener("contextmenu", P, !0);
      var I = mm(s);
      if (I && (I.addEventListener("mousedown", W, !0), I.addEventListener("click", V, !0), I.addEventListener("contextmenu", V, !0)), process.env.NODE_ENV !== "production") {
        var U, Y, Q = s == null || (U = s.getRootNode) === null || U === void 0 ? void 0 : U.call(s), ne = (Y = c.getRootNode) === null || Y === void 0 ? void 0 : Y.call(c);
        kf(Q === ne, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        z.removeEventListener("mousedown", A, !0), z.removeEventListener("click", P, !0), z.removeEventListener("contextmenu", P, !0), I && (I.removeEventListener("mousedown", W, !0), I.removeEventListener("click", V, !0), I.removeEventListener("contextmenu", V, !0));
      };
    }
  }, [o, s, c, d, m]);
}
var P_ = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function I_() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : x2, o = /* @__PURE__ */ S.forwardRef(function(s, c) {
    var d = s.prefixCls, m = d === void 0 ? "rc-trigger-popup" : d, h = s.children, E = s.action, T = E === void 0 ? "hover" : E, w = s.showAction, _ = s.hideAction, k = s.popupVisible, N = s.defaultPopupVisible, A = s.onPopupVisibleChange, P = s.afterPopupVisibleChange, j = s.mouseEnterDelay, D = s.mouseLeaveDelay, W = D === void 0 ? 0.1 : D, V = s.focusDelay, z = s.blurDelay, I = s.mask, U = s.maskClosable, Y = U === void 0 ? !0 : U, Q = s.getPopupContainer, ne = s.forceRender, ue = s.autoDestroy, re = s.destroyPopupOnHide, ge = s.popup, pe = s.popupClassName, te = s.popupStyle, se = s.popupPlacement, de = s.builtinPlacements, Ee = de === void 0 ? {} : de, Me = s.popupAlign, xe = s.zIndex, Le = s.stretch, Ie = s.getPopupClassNameFromAlign, ie = s.fresh, he = s.alignPoint, Se = s.onPopupClick, ze = s.onPopupAlign, Ke = s.arrow, Ze = s.popupMotion, it = s.maskMotion, Be = s.popupTransitionName, nt = s.popupAnimation, Nt = s.maskTransitionName, He = s.maskAnimation, et = s.className, Bt = s.getTriggerDOMNode, we = Vn(s, P_), mt = ue || re || !1, Dt = S.useState(!1), zt = Te(Dt, 2), $t = zt[0], Xe = zt[1];
    ia(function() {
      Xe(o_());
    }, []);
    var _t = S.useRef({}), gt = S.useContext(X4), Xt = S.useMemo(function() {
      return {
        registerSubPopup: function(yt, ct) {
          _t.current[yt] = ct, gt == null || gt.registerSubPopup(yt, ct);
        }
      };
    }, [gt]), ot = i_(), Wt = S.useState(null), Qt = Te(Wt, 2), ut = Qt[0], Gt = Qt[1], Wn = Fo(function(Fe) {
      fm(Fe) && ut !== Fe && Gt(Fe), gt == null || gt.registerSubPopup(ot, Fe);
    }), qt = S.useState(null), en = Te(qt, 2), ye = en[0], Ne = en[1], We = S.useRef(null), xt = Fo(function(Fe) {
      fm(Fe) && ye !== Fe && (Ne(Fe), We.current = Fe);
    }), Mt = S.Children.only(h), rt = (Mt == null ? void 0 : Mt.props) || {}, st = {}, on = Fo(function(Fe) {
      var yt, ct, pn = ye;
      return (pn == null ? void 0 : pn.contains(Fe)) || ((yt = mm(pn)) === null || yt === void 0 ? void 0 : yt.host) === Fe || Fe === pn || (ut == null ? void 0 : ut.contains(Fe)) || ((ct = mm(ut)) === null || ct === void 0 ? void 0 : ct.host) === Fe || Fe === ut || Object.values(_t.current).some(function(Sn) {
        return (Sn == null ? void 0 : Sn.contains(Fe)) || Fe === Sn;
      });
    }), Ot = eS(m, Ze, nt, Be), Ut = eS(m, it, He, Nt), ir = S.useState(N || !1), Ft = Te(ir, 2), dn = Ft[0], jt = Ft[1], $e = k != null ? k : dn, bt = Fo(function(Fe) {
      k === void 0 && jt(Fe);
    });
    ia(function() {
      jt(k || !1);
    }, [k]);
    var Oe = S.useRef($e);
    Oe.current = $e;
    var Ge = S.useRef([]);
    Ge.current = [];
    var Lt = Fo(function(Fe) {
      var yt;
      bt(Fe), ((yt = Ge.current[Ge.current.length - 1]) !== null && yt !== void 0 ? yt : $e) !== Fe && (Ge.current.push(Fe), A == null || A(Fe));
    }), mn = S.useRef(), Ln = function() {
      clearTimeout(mn.current);
    }, gn = function(yt) {
      var ct = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Ln(), ct === 0 ? Lt(yt) : mn.current = setTimeout(function() {
        Lt(yt);
      }, ct * 1e3);
    };
    S.useEffect(function() {
      return Ln;
    }, []);
    var oa = S.useState(!1), qr = Te(oa, 2), An = qr[0], Kt = qr[1];
    ia(function(Fe) {
      (!Fe || $e) && Kt(!0);
    }, [$e]);
    var Fn = S.useState(null), Yr = Te(Fn, 2), ln = Yr[0], Jn = Yr[1], Tr = S.useState([0, 0]), qa = Te(Tr, 2), Ar = qa[0], Pr = qa[1], Rr = function(yt) {
      Pr([yt.clientX, yt.clientY]);
    }, Ya = D_($e, ut, he ? Ar : ye, se, Ee, Me, ze), Pn = Te(Ya, 11), Ei = Pn[0], kr = Pn[1], xn = Pn[2], Ir = Pn[3], _r = Pn[4], zr = Pn[5], Qa = Pn[6], Hr = Pn[7], Za = Pn[8], gr = Pn[9], Qr = Pn[10], Mr = M_($t, T, w, _), ma = Te(Mr, 2), In = ma[0], Kn = ma[1], Or = In.has("click"), or = Kn.has("click") || Kn.has("contextMenu"), yr = Fo(function() {
      An || Qr();
    }), ke = function() {
      Oe.current && he && or && gn(!1);
    };
    L_($e, ye, ut, yr, ke), ia(function() {
      yr();
    }, [Ar, se]), ia(function() {
      $e && !(Ee != null && Ee[se]) && yr();
    }, [JSON.stringify(Me)]);
    var Zt = S.useMemo(function() {
      var Fe = N_(Ee, m, gr, he);
      return wn(Fe, Ie == null ? void 0 : Ie(gr));
    }, [gr, Ie, Ee, m, he]);
    S.useImperativeHandle(c, function() {
      return {
        nativeElement: We.current,
        forceAlign: yr
      };
    });
    var dt = S.useState(0), Ht = Te(dt, 2), Tn = Ht[0], On = Ht[1], Nn = S.useState(0), vn = Te(Nn, 2), er = vn[0], wi = vn[1], Gn = function() {
      if (Le && ye) {
        var yt = ye.getBoundingClientRect();
        On(yt.width), wi(yt.height);
      }
    }, zn = function() {
      Gn(), yr();
    }, tr = function(yt) {
      Kt(!1), Qr(), P == null || P(yt);
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
    function Cr(Fe, yt, ct, pn) {
      st[Fe] = function(Sn) {
        var ro;
        pn == null || pn(Sn), gn(yt, ct);
        for (var Xa = arguments.length, Au = new Array(Xa > 1 ? Xa - 1 : 0), Ri = 1; Ri < Xa; Ri++)
          Au[Ri - 1] = arguments[Ri];
        (ro = rt[Fe]) === null || ro === void 0 || ro.call.apply(ro, [rt, Sn].concat(Au));
      };
    }
    (Or || or) && (st.onClick = function(Fe) {
      var yt;
      Oe.current && or ? gn(!1) : !Oe.current && Or && (Rr(Fe), gn(!0));
      for (var ct = arguments.length, pn = new Array(ct > 1 ? ct - 1 : 0), Sn = 1; Sn < ct; Sn++)
        pn[Sn - 1] = arguments[Sn];
      (yt = rt.onClick) === null || yt === void 0 || yt.call.apply(yt, [rt, Fe].concat(pn));
    }), A_($e, or, ye, ut, I, Y, on, gn);
    var ga = In.has("hover"), xi = Kn.has("hover"), Na, eo;
    ga && (Cr("onMouseEnter", !0, j, function(Fe) {
      Rr(Fe);
    }), Cr("onPointerEnter", !0, j, function(Fe) {
      Rr(Fe);
    }), Na = function() {
      ($e || An) && gn(!0, j);
    }, he && (st.onMouseMove = function(Fe) {
      var yt;
      (yt = rt.onMouseMove) === null || yt === void 0 || yt.call(rt, Fe);
    })), xi && (Cr("onMouseLeave", !1, W), Cr("onPointerLeave", !1, W), eo = function() {
      gn(!1, W);
    }), In.has("focus") && Cr("onFocus", !0, V), Kn.has("focus") && Cr("onBlur", !1, z), In.has("contextMenu") && (st.onContextMenu = function(Fe) {
      var yt;
      Oe.current && Kn.has("contextMenu") ? gn(!1) : (Rr(Fe), gn(!0)), Fe.preventDefault();
      for (var ct = arguments.length, pn = new Array(ct > 1 ? ct - 1 : 0), Sn = 1; Sn < ct; Sn++)
        pn[Sn - 1] = arguments[Sn];
      (yt = rt.onContextMenu) === null || yt === void 0 || yt.call.apply(yt, [rt, Fe].concat(pn));
    }), et && (st.className = wn(rt.className, et));
    var Da = Re(Re({}, rt), st), to = {}, Ti = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Ti.forEach(function(Fe) {
      we[Fe] && (to[Fe] = function() {
        for (var yt, ct = arguments.length, pn = new Array(ct), Sn = 0; Sn < ct; Sn++)
          pn[Sn] = arguments[Sn];
        (yt = Da[Fe]) === null || yt === void 0 || yt.call.apply(yt, [Da].concat(pn)), we[Fe].apply(we, pn);
      });
    });
    var Ko = /* @__PURE__ */ S.cloneElement(Mt, Re(Re({}, Da), to)), no = {
      x: zr,
      y: Qa
    }, Pl = Ke ? Re({}, Ke !== !0 ? Ke : {}) : null;
    return /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Lf, {
      disabled: !$e,
      ref: xt,
      onResize: zn
    }, /* @__PURE__ */ S.createElement(Z3, {
      getTriggerDOMNode: Bt
    }, Ko)), /* @__PURE__ */ S.createElement(X4.Provider, {
      value: Xt
    }, /* @__PURE__ */ S.createElement(Q3, {
      portal: r,
      ref: Wn,
      prefixCls: m,
      popup: ge,
      className: wn(pe, Zt),
      style: te,
      target: ye,
      onMouseEnter: Na,
      onMouseLeave: eo,
      onPointerEnter: Na,
      zIndex: xe,
      open: $e,
      keepDom: An,
      fresh: ie,
      onClick: Se,
      mask: I,
      motion: Ot,
      maskMotion: Ut,
      onVisibleChanged: tr,
      onPrepare: la,
      forceRender: ne,
      autoDestroy: mt,
      getPopupContainer: Q,
      align: gr,
      arrow: Pl,
      arrowPos: no,
      ready: Ei,
      offsetX: kr,
      offsetY: xn,
      offsetR: Ir,
      offsetB: _r,
      onAlign: yr,
      stretch: Le,
      targetWidth: Tn / Hr,
      targetHeight: er / Za
    })));
  });
  return process.env.NODE_ENV !== "production" && (o.displayName = "Trigger"), o;
}
const X3 = I_(x2);
var aa = {
  adjustX: 1,
  adjustY: 1
}, z_ = {
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
}, H_ = {
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
function J3(r, o, s) {
  if (o)
    return o;
  if (s)
    return s[r] || s.other;
}
var $_ = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function U_(r) {
  var o = r.prefixCls, s = r.visible, c = r.children, d = r.popup, m = r.popupStyle, h = r.popupClassName, E = r.popupOffset, T = r.disabled, w = r.mode, _ = r.onVisibleChange, k = S.useContext(Zi), N = k.getPopupContainer, A = k.rtl, P = k.subMenuOpenDelay, j = k.subMenuCloseDelay, D = k.builtinPlacements, W = k.triggerSubMenuAction, V = k.forceSubMenuRender, z = k.rootClassName, I = k.motion, U = k.defaultMotions, Y = S.useState(!1), Q = Te(Y, 2), ne = Q[0], ue = Q[1], re = Re(A ? Re({}, H_) : Re({}, z_), D), ge = $_[w], pe = J3(w, I, U), te = S.useRef(pe);
  w !== "inline" && (te.current = pe);
  var se = Re(Re({}, te.current), {}, {
    leavedClassName: "".concat(o, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), de = S.useRef();
  return S.useEffect(function() {
    return de.current = Ci(function() {
      ue(s);
    }), function() {
      Ci.cancel(de.current);
    };
  }, [s]), /* @__PURE__ */ S.createElement(X3, {
    prefixCls: o,
    popupClassName: wn("".concat(o, "-popup"), tt({}, "".concat(o, "-rtl"), A), h, z),
    stretch: w === "horizontal" ? "minWidth" : null,
    getPopupContainer: N,
    builtinPlacements: re,
    popupPlacement: ge,
    popupVisible: ne,
    popup: d,
    popupStyle: m,
    popupAlign: E && {
      offset: E
    },
    action: T ? [] : [W],
    mouseEnterDelay: P,
    mouseLeaveDelay: j,
    onPopupVisibleChange: _,
    forceRender: V,
    popupMotion: se,
    fresh: !0
  }, c);
}
function j_(r) {
  var o = r.id, s = r.open, c = r.keyPath, d = r.children, m = "inline", h = S.useContext(Zi), E = h.prefixCls, T = h.forceSubMenuRender, w = h.motion, _ = h.defaultMotions, k = h.mode, N = S.useRef(!1);
  N.current = k === m;
  var A = S.useState(!N.current), P = Te(A, 2), j = P[0], D = P[1], W = N.current ? s : !1;
  S.useEffect(function() {
    N.current && D(!1);
  }, [k]);
  var V = Re({}, J3(m, w, _));
  c.length > 1 && (V.motionAppear = !1);
  var z = V.onVisibleChanged;
  return V.onVisibleChanged = function(I) {
    return !N.current && !I && D(!0), z == null ? void 0 : z(I);
  }, j ? null : /* @__PURE__ */ S.createElement(Kv, {
    mode: m,
    locked: !N.current
  }, /* @__PURE__ */ S.createElement(zm, an({
    visible: W
  }, V, {
    forceRender: T,
    removeOnLeave: !1,
    leavedClassName: "".concat(E, "-hidden")
  }), function(I) {
    var U = I.className, Y = I.style;
    return /* @__PURE__ */ S.createElement(E2, {
      id: o,
      className: U,
      style: Y
    }, d);
  }));
}
var V_ = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], F_ = ["active"], B_ = function(o) {
  var s, c = o.style, d = o.className, m = o.title, h = o.eventKey, E = o.warnKey, T = o.disabled, w = o.internalPopupClose, _ = o.children, k = o.itemIcon, N = o.expandIcon, A = o.popupClassName, P = o.popupOffset, j = o.popupStyle, D = o.onClick, W = o.onMouseEnter, V = o.onMouseLeave, z = o.onTitleClick, I = o.onTitleMouseEnter, U = o.onTitleMouseLeave, Y = Vn(o, V_), Q = x3(h), ne = S.useContext(Zi), ue = ne.prefixCls, re = ne.mode, ge = ne.openKeys, pe = ne.disabled, te = ne.overflowDisabled, se = ne.activeKey, de = ne.selectedKeys, Ee = ne.itemIcon, Me = ne.expandIcon, xe = ne.onItemClick, Le = ne.onOpenChange, Ie = ne.onActive, ie = S.useContext(C2), he = ie._internalRenderSubMenuItem, Se = S.useContext(k3), ze = Se.isSubPathKey, Ke = t1(), Ze = "".concat(ue, "-submenu"), it = pe || T, Be = S.useRef(), nt = S.useRef();
  process.env.NODE_ENV !== "production" && E && ha(!1, "SubMenu should not leave undefined `key`.");
  var Nt = k != null ? k : Ee, He = N != null ? N : Me, et = ge.includes(h), Bt = !te && et, we = ze(de, h), mt = O3(h, it, I, U), Dt = mt.active, zt = Vn(mt, F_), $t = S.useState(!1), Xe = Te($t, 2), _t = Xe[0], gt = Xe[1], Xt = function(st) {
    it || gt(st);
  }, ot = function(st) {
    Xt(!0), W == null || W({
      key: h,
      domEvent: st
    });
  }, Wt = function(st) {
    Xt(!1), V == null || V({
      key: h,
      domEvent: st
    });
  }, Qt = S.useMemo(function() {
    return Dt || (re !== "inline" ? _t || ze([se], h) : !1);
  }, [re, Dt, se, _t, h, ze]), ut = N3(Ke.length), Gt = function(st) {
    it || (z == null || z({
      key: h,
      domEvent: st
    }), re === "inline" && Le(h, !et));
  }, Wn = $v(function(rt) {
    D == null || D(hm(rt)), xe(rt);
  }), qt = function(st) {
    re !== "inline" && Le(h, st);
  }, en = function() {
    Ie(h);
  }, ye = Q && "".concat(Q, "-popup"), Ne = /* @__PURE__ */ S.createElement("div", an({
    role: "menuitem",
    style: ut,
    className: "".concat(Ze, "-title"),
    tabIndex: it ? null : -1,
    ref: Be,
    title: typeof m == "string" ? m : null,
    "data-menu-id": te && Q ? null : Q,
    "aria-expanded": Bt,
    "aria-haspopup": !0,
    "aria-controls": ye,
    "aria-disabled": it,
    onClick: Gt,
    onFocus: en
  }, zt), m, /* @__PURE__ */ S.createElement(D3, {
    icon: re !== "horizontal" ? He : void 0,
    props: Re(Re({}, o), {}, {
      isOpen: Bt,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ S.createElement("i", {
    className: "".concat(Ze, "-arrow")
  }))), We = S.useRef(re);
  if (re !== "inline" && Ke.length > 1 ? We.current = "vertical" : We.current = re, !te) {
    var xt = We.current;
    Ne = /* @__PURE__ */ S.createElement(U_, {
      mode: xt,
      prefixCls: Ze,
      visible: !w && Bt && re !== "inline",
      popupClassName: A,
      popupOffset: P,
      popupStyle: j,
      popup: /* @__PURE__ */ S.createElement(
        Kv,
        {
          mode: xt === "horizontal" ? "vertical" : xt
        },
        /* @__PURE__ */ S.createElement(E2, {
          id: ye,
          ref: nt
        }, _)
      ),
      disabled: it,
      onVisibleChange: qt
    }, Ne);
  }
  var Mt = /* @__PURE__ */ S.createElement(Dl.Item, an({
    role: "none"
  }, Y, {
    component: "li",
    style: c,
    className: wn(Ze, "".concat(Ze, "-").concat(re), d, (s = {}, tt(s, "".concat(Ze, "-open"), Bt), tt(s, "".concat(Ze, "-active"), Qt), tt(s, "".concat(Ze, "-selected"), we), tt(s, "".concat(Ze, "-disabled"), it), s)),
    onMouseEnter: ot,
    onMouseLeave: Wt
  }), Ne, !te && /* @__PURE__ */ S.createElement(j_, {
    id: ye,
    open: Bt,
    keyPath: Ke
  }, _));
  return he && (Mt = he(Mt, o, {
    selected: we,
    active: Qt,
    open: Bt,
    disabled: it
  })), /* @__PURE__ */ S.createElement(Kv, {
    onItemClick: Wn,
    mode: re === "horizontal" ? "vertical" : re,
    itemIcon: Nt,
    expandIcon: He
  }, Mt);
};
function R2(r) {
  var o = r.eventKey, s = r.children, c = t1(o), d = w2(s, c), m = Lm();
  S.useEffect(function() {
    if (m)
      return m.registerPath(o, c), function() {
        m.unregisterPath(o, c);
      };
  }, [c]);
  var h;
  return m ? h = d : h = /* @__PURE__ */ S.createElement(B_, r, d), /* @__PURE__ */ S.createElement(R3.Provider, {
    value: c
  }, h);
}
var W_ = ["className", "title", "eventKey", "children"], K_ = ["children"], G_ = function(o) {
  var s = o.className, c = o.title;
  o.eventKey;
  var d = o.children, m = Vn(o, W_), h = S.useContext(Zi), E = h.prefixCls, T = "".concat(E, "-item-group");
  return /* @__PURE__ */ S.createElement("li", an({
    role: "presentation"
  }, m, {
    onClick: function(_) {
      return _.stopPropagation();
    },
    className: wn(T, s)
  }), /* @__PURE__ */ S.createElement("div", {
    role: "presentation",
    className: "".concat(T, "-title"),
    title: typeof c == "string" ? c : void 0
  }, c), /* @__PURE__ */ S.createElement("ul", {
    role: "group",
    className: "".concat(T, "-list")
  }, d));
};
function e8(r) {
  var o = r.children, s = Vn(r, K_), c = t1(s.eventKey), d = w2(o, c), m = Lm();
  return m ? d : /* @__PURE__ */ S.createElement(G_, Am(s, ["warnKey"]), d);
}
function t8(r) {
  var o = r.className, s = r.style, c = S.useContext(Zi), d = c.prefixCls, m = Lm();
  return m ? null : /* @__PURE__ */ S.createElement("li", {
    role: "separator",
    className: wn("".concat(d, "-item-divider"), o),
    style: s
  });
}
var q_ = ["label", "children", "key", "type"];
function V5(r) {
  return (r || []).map(function(o, s) {
    if (o && Bn(o) === "object") {
      var c = o, d = c.label, m = c.children, h = c.key, E = c.type, T = Vn(c, q_), w = h != null ? h : "tmp-".concat(s);
      return m || E === "group" ? E === "group" ? /* @__PURE__ */ S.createElement(e8, an({
        key: w
      }, T, {
        title: d
      }), V5(m)) : /* @__PURE__ */ S.createElement(R2, an({
        key: w
      }, T, {
        title: d
      }), V5(m)) : E === "divider" ? /* @__PURE__ */ S.createElement(t8, an({
        key: w
      }, T)) : /* @__PURE__ */ S.createElement(Pm, an({
        key: w
      }, T), d);
    }
    return null;
  }).filter(function(o) {
    return o;
  });
}
function Y_(r, o, s) {
  var c = r;
  return o && (c = V5(o)), w2(c, s);
}
var Q_ = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"], yf = [], Z_ = /* @__PURE__ */ S.forwardRef(function(r, o) {
  var s, c, d = r, m = d.prefixCls, h = m === void 0 ? "rc-menu" : m, E = d.rootClassName, T = d.style, w = d.className, _ = d.tabIndex, k = _ === void 0 ? 0 : _, N = d.items, A = d.children, P = d.direction, j = d.id, D = d.mode, W = D === void 0 ? "vertical" : D, V = d.inlineCollapsed, z = d.disabled, I = d.disabledOverflow, U = d.subMenuOpenDelay, Y = U === void 0 ? 0.1 : U, Q = d.subMenuCloseDelay, ne = Q === void 0 ? 0.1 : Q, ue = d.forceSubMenuRender, re = d.defaultOpenKeys, ge = d.openKeys, pe = d.activeKey, te = d.defaultActiveFirst, se = d.selectable, de = se === void 0 ? !0 : se, Ee = d.multiple, Me = Ee === void 0 ? !1 : Ee, xe = d.defaultSelectedKeys, Le = d.selectedKeys, Ie = d.onSelect, ie = d.onDeselect, he = d.inlineIndent, Se = he === void 0 ? 24 : he, ze = d.motion, Ke = d.defaultMotions, Ze = d.triggerSubMenuAction, it = Ze === void 0 ? "hover" : Ze, Be = d.builtinPlacements, nt = d.itemIcon, Nt = d.expandIcon, He = d.overflowedIndicator, et = He === void 0 ? "..." : He, Bt = d.overflowedIndicatorPopupClassName, we = d.getPopupContainer, mt = d.onClick, Dt = d.onOpenChange, zt = d.onKeyDown, $t = d.openAnimation, Xe = d.openTransitionName, _t = d._internalRenderMenuItem, gt = d._internalRenderSubMenuItem, Xt = Vn(d, Q_), ot = S.useMemo(function() {
    return Y_(A, N, yf);
  }, [A, N]), Wt = S.useState(!1), Qt = Te(Wt, 2), ut = Qt[0], Gt = Qt[1], Wn = S.useRef(), qt = Ik(j), en = P === "rtl";
  process.env.NODE_ENV !== "production" && ha(!$t && !Xe, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var ye = jv(re, {
    value: ge,
    postState: function(dt) {
      return dt || yf;
    }
  }), Ne = Te(ye, 2), We = Ne[0], xt = Ne[1], Mt = function(dt) {
    var Ht = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function Tn() {
      xt(dt), Dt == null || Dt(dt);
    }
    Ht ? Tm.flushSync(Tn) : Tn();
  }, rt = S.useState(We), st = Te(rt, 2), on = st[0], Ot = st[1], Ut = S.useRef(!1), ir = S.useMemo(function() {
    return (W === "inline" || W === "vertical") && V ? ["vertical", V] : [W, !1];
  }, [W, V]), Ft = Te(ir, 2), dn = Ft[0], jt = Ft[1], $e = dn === "inline", bt = S.useState(dn), Oe = Te(bt, 2), Ge = Oe[0], Lt = Oe[1], mn = S.useState(jt), Ln = Te(mn, 2), gn = Ln[0], oa = Ln[1];
  S.useEffect(function() {
    Lt(dn), oa(jt), Ut.current && ($e ? xt(on) : Mt(yf));
  }, [dn, jt]);
  var qr = S.useState(0), An = Te(qr, 2), Kt = An[0], Fn = An[1], Yr = Kt >= ot.length - 1 || Ge !== "horizontal" || I;
  S.useEffect(function() {
    $e && Ot(We);
  }, [We]), S.useEffect(function() {
    return Ut.current = !0, function() {
      Ut.current = !1;
    };
  }, []);
  var ln = Ak(), Jn = ln.registerPath, Tr = ln.unregisterPath, qa = ln.refreshOverflowKeys, Ar = ln.isSubPathKey, Pr = ln.getKeyPath, Rr = ln.getKeys, Ya = ln.getSubPathKeys, Pn = S.useMemo(function() {
    return {
      registerPath: Jn,
      unregisterPath: Tr
    };
  }, [Jn, Tr]), Ei = S.useMemo(function() {
    return {
      isSubPathKey: Ar
    };
  }, [Ar]);
  S.useEffect(function() {
    qa(Yr ? yf : ot.slice(Kt + 1).map(function(Zt) {
      return Zt.key;
    }));
  }, [Kt, Yr]);
  var kr = jv(pe || te && ((s = ot[0]) === null || s === void 0 ? void 0 : s.key), {
    value: pe
  }), xn = Te(kr, 2), Ir = xn[0], _r = xn[1], zr = $v(function(Zt) {
    _r(Zt);
  }), Qa = $v(function() {
    _r(void 0);
  });
  WS(o, function() {
    return {
      list: Wn.current,
      focus: function(dt) {
        var Ht, Tn = Rr(), On = A5(Tn, qt), Nn = On.elements, vn = On.key2element, er = On.element2key, wi = b2(Wn.current, Nn), Gn = Ir != null ? Ir : wi[0] ? er.get(wi[0]) : (Ht = ot.find(function(la) {
          return !la.props.disabled;
        })) === null || Ht === void 0 ? void 0 : Ht.key, zn = vn.get(Gn);
        if (Gn && zn) {
          var tr;
          zn == null || (tr = zn.focus) === null || tr === void 0 || tr.call(zn, dt);
        }
      }
    };
  });
  var Hr = jv(xe || [], {
    value: Le,
    // Legacy convert key to array
    postState: function(dt) {
      return Array.isArray(dt) ? dt : dt == null ? yf : [dt];
    }
  }), Za = Te(Hr, 2), gr = Za[0], Qr = Za[1], Mr = function(dt) {
    if (de) {
      var Ht = dt.key, Tn = gr.includes(Ht), On;
      Me ? Tn ? On = gr.filter(function(vn) {
        return vn !== Ht;
      }) : On = [].concat(ar(gr), [Ht]) : On = [Ht], Qr(On);
      var Nn = Re(Re({}, dt), {}, {
        selectedKeys: On
      });
      Tn ? ie == null || ie(Nn) : Ie == null || Ie(Nn);
    }
    !Me && We.length && Ge !== "inline" && Mt(yf);
  }, ma = $v(function(Zt) {
    mt == null || mt(hm(Zt)), Mr(Zt);
  }), In = $v(function(Zt, dt) {
    var Ht = We.filter(function(On) {
      return On !== Zt;
    });
    if (dt)
      Ht.push(Zt);
    else if (Ge !== "inline") {
      var Tn = Ya(Zt);
      Ht = Ht.filter(function(On) {
        return !Tn.has(On);
      });
    }
    y2(We, Ht, !0) || Mt(Ht, !0);
  }), Kn = function(dt, Ht) {
    var Tn = Ht != null ? Ht : !We.includes(dt);
    In(dt, Tn);
  }, Or = Nk(Ge, Ir, en, qt, Wn, Rr, Pr, _r, Kn, zt);
  S.useEffect(function() {
    Gt(!0);
  }, []);
  var or = S.useMemo(function() {
    return {
      _internalRenderMenuItem: _t,
      _internalRenderSubMenuItem: gt
    };
  }, [_t, gt]), yr = Ge !== "horizontal" || I ? ot : (
    // Need wrap for overflow dropdown that do not response for open
    ot.map(function(Zt, dt) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ S.createElement(Kv, {
          key: Zt.key,
          overflowDisabled: dt > Kt
        }, Zt)
      );
    })
  ), ke = /* @__PURE__ */ S.createElement(Dl, an({
    id: j,
    ref: Wn,
    prefixCls: "".concat(h, "-overflow"),
    component: "ul",
    itemComponent: Pm,
    className: wn(h, "".concat(h, "-root"), "".concat(h, "-").concat(Ge), w, (c = {}, tt(c, "".concat(h, "-inline-collapsed"), gn), tt(c, "".concat(h, "-rtl"), en), c), E),
    dir: P,
    style: T,
    role: "menu",
    tabIndex: k,
    data: yr,
    renderRawItem: function(dt) {
      return dt;
    },
    renderRawRest: function(dt) {
      var Ht = dt.length, Tn = Ht ? ot.slice(-Ht) : null;
      return /* @__PURE__ */ S.createElement(R2, {
        eventKey: P5,
        title: et,
        disabled: Yr,
        internalPopupClose: Ht === 0,
        popupClassName: Bt
      }, Tn);
    },
    maxCount: Ge !== "horizontal" || I ? Dl.INVALIDATE : Dl.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(dt) {
      Fn(dt);
    },
    onKeyDown: Or
  }, Xt));
  return /* @__PURE__ */ S.createElement(C2.Provider, {
    value: or
  }, /* @__PURE__ */ S.createElement(E3.Provider, {
    value: qt
  }, /* @__PURE__ */ S.createElement(Kv, {
    prefixCls: h,
    rootClassName: E,
    mode: Ge,
    openKeys: We,
    rtl: en,
    disabled: z,
    motion: ut ? ze : null,
    defaultMotions: ut ? Ke : null,
    activeKey: Ir,
    onActive: zr,
    onInactive: Qa,
    selectedKeys: gr,
    inlineIndent: Se,
    subMenuOpenDelay: Y,
    subMenuCloseDelay: ne,
    forceSubMenuRender: ue,
    builtinPlacements: Be,
    triggerSubMenuAction: it,
    getPopupContainer: we,
    itemIcon: nt,
    expandIcon: Nt,
    onItemClick: ma,
    onOpenChange: In
  }, /* @__PURE__ */ S.createElement(k3.Provider, {
    value: Ei
  }, ke), /* @__PURE__ */ S.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ S.createElement(T3.Provider, {
    value: Pn
  }, ot)))));
}), Hm = Z_;
Hm.Item = Pm;
Hm.SubMenu = R2;
Hm.ItemGroup = e8;
Hm.Divider = t8;
var X_ = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" };
const J_ = X_;
function Gr(r, o) {
  eM(r) && (r = "100%");
  var s = tM(r);
  return r = o === 360 ? r : Math.min(o, Math.max(0, parseFloat(r))), s && (r = parseInt(String(r * o), 10) / 100), Math.abs(r - o) < 1e-6 ? 1 : (o === 360 ? r = (r < 0 ? r % o + o : r % o) / parseFloat(String(o)) : r = r % o / parseFloat(String(o)), r);
}
function Qh(r) {
  return Math.min(1, Math.max(0, r));
}
function eM(r) {
  return typeof r == "string" && r.indexOf(".") !== -1 && parseFloat(r) === 1;
}
function tM(r) {
  return typeof r == "string" && r.indexOf("%") !== -1;
}
function n8(r) {
  return r = parseFloat(r), (isNaN(r) || r < 0 || r > 1) && (r = 1), r;
}
function Zh(r) {
  return r <= 1 ? "".concat(Number(r) * 100, "%") : r;
}
function Ys(r) {
  return r.length === 1 ? "0" + r : String(r);
}
function nM(r, o, s) {
  return {
    r: Gr(r, 255) * 255,
    g: Gr(o, 255) * 255,
    b: Gr(s, 255) * 255
  };
}
function iS(r, o, s) {
  r = Gr(r, 255), o = Gr(o, 255), s = Gr(s, 255);
  var c = Math.max(r, o, s), d = Math.min(r, o, s), m = 0, h = 0, E = (c + d) / 2;
  if (c === d)
    h = 0, m = 0;
  else {
    var T = c - d;
    switch (h = E > 0.5 ? T / (2 - c - d) : T / (c + d), c) {
      case r:
        m = (o - s) / T + (o < s ? 6 : 0);
        break;
      case o:
        m = (s - r) / T + 2;
        break;
      case s:
        m = (r - o) / T + 4;
        break;
    }
    m /= 6;
  }
  return { h: m, s: h, l: E };
}
function s5(r, o, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? r + (o - r) * (6 * s) : s < 1 / 2 ? o : s < 2 / 3 ? r + (o - r) * (2 / 3 - s) * 6 : r;
}
function rM(r, o, s) {
  var c, d, m;
  if (r = Gr(r, 360), o = Gr(o, 100), s = Gr(s, 100), o === 0)
    d = s, m = s, c = s;
  else {
    var h = s < 0.5 ? s * (1 + o) : s + o - s * o, E = 2 * s - h;
    c = s5(E, h, r + 1 / 3), d = s5(E, h, r), m = s5(E, h, r - 1 / 3);
  }
  return { r: c * 255, g: d * 255, b: m * 255 };
}
function F5(r, o, s) {
  r = Gr(r, 255), o = Gr(o, 255), s = Gr(s, 255);
  var c = Math.max(r, o, s), d = Math.min(r, o, s), m = 0, h = c, E = c - d, T = c === 0 ? 0 : E / c;
  if (c === d)
    m = 0;
  else {
    switch (c) {
      case r:
        m = (o - s) / E + (o < s ? 6 : 0);
        break;
      case o:
        m = (s - r) / E + 2;
        break;
      case s:
        m = (r - o) / E + 4;
        break;
    }
    m /= 6;
  }
  return { h: m, s: T, v: h };
}
function aM(r, o, s) {
  r = Gr(r, 360) * 6, o = Gr(o, 100), s = Gr(s, 100);
  var c = Math.floor(r), d = r - c, m = s * (1 - o), h = s * (1 - d * o), E = s * (1 - (1 - d) * o), T = c % 6, w = [s, h, m, m, E, s][T], _ = [E, s, s, h, m, m][T], k = [m, m, E, s, s, h][T];
  return { r: w * 255, g: _ * 255, b: k * 255 };
}
function B5(r, o, s, c) {
  var d = [
    Ys(Math.round(r).toString(16)),
    Ys(Math.round(o).toString(16)),
    Ys(Math.round(s).toString(16))
  ];
  return c && d[0].startsWith(d[0].charAt(1)) && d[1].startsWith(d[1].charAt(1)) && d[2].startsWith(d[2].charAt(1)) ? d[0].charAt(0) + d[1].charAt(0) + d[2].charAt(0) : d.join("");
}
function iM(r, o, s, c, d) {
  var m = [
    Ys(Math.round(r).toString(16)),
    Ys(Math.round(o).toString(16)),
    Ys(Math.round(s).toString(16)),
    Ys(oM(c))
  ];
  return d && m[0].startsWith(m[0].charAt(1)) && m[1].startsWith(m[1].charAt(1)) && m[2].startsWith(m[2].charAt(1)) && m[3].startsWith(m[3].charAt(1)) ? m[0].charAt(0) + m[1].charAt(0) + m[2].charAt(0) + m[3].charAt(0) : m.join("");
}
function oM(r) {
  return Math.round(parseFloat(r) * 255).toString(16);
}
function oS(r) {
  return Ka(r) / 255;
}
function Ka(r) {
  return parseInt(r, 16);
}
function lM(r) {
  return {
    r: r >> 16,
    g: (r & 65280) >> 8,
    b: r & 255
  };
}
var W5 = {
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
  var o = { r: 0, g: 0, b: 0 }, s = 1, c = null, d = null, m = null, h = !1, E = !1;
  return typeof r == "string" && (r = cM(r)), typeof r == "object" && (Rl(r.r) && Rl(r.g) && Rl(r.b) ? (o = nM(r.r, r.g, r.b), h = !0, E = String(r.r).substr(-1) === "%" ? "prgb" : "rgb") : Rl(r.h) && Rl(r.s) && Rl(r.v) ? (c = Zh(r.s), d = Zh(r.v), o = aM(r.h, c, d), h = !0, E = "hsv") : Rl(r.h) && Rl(r.s) && Rl(r.l) && (c = Zh(r.s), m = Zh(r.l), o = rM(r.h, c, m), h = !0, E = "hsl"), Object.prototype.hasOwnProperty.call(r, "a") && (s = r.a)), s = n8(s), {
    ok: h,
    format: r.format || E,
    r: Math.min(255, Math.max(o.r, 0)),
    g: Math.min(255, Math.max(o.g, 0)),
    b: Math.min(255, Math.max(o.b, 0)),
    a: s
  };
}
var uM = "[-\\+]?\\d+%?", sM = "[-\\+]?\\d*\\.\\d+%?", ku = "(?:".concat(sM, ")|(?:").concat(uM, ")"), c5 = "[\\s|\\(]+(".concat(ku, ")[,|\\s]+(").concat(ku, ")[,|\\s]+(").concat(ku, ")\\s*\\)?"), f5 = "[\\s|\\(]+(".concat(ku, ")[,|\\s]+(").concat(ku, ")[,|\\s]+(").concat(ku, ")[,|\\s]+(").concat(ku, ")\\s*\\)?"), Gi = {
  CSS_UNIT: new RegExp(ku),
  rgb: new RegExp("rgb" + c5),
  rgba: new RegExp("rgba" + f5),
  hsl: new RegExp("hsl" + c5),
  hsla: new RegExp("hsla" + f5),
  hsv: new RegExp("hsv" + c5),
  hsva: new RegExp("hsva" + f5),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function cM(r) {
  if (r = r.trim().toLowerCase(), r.length === 0)
    return !1;
  var o = !1;
  if (W5[r])
    r = W5[r], o = !0;
  else if (r === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var s = Gi.rgb.exec(r);
  return s ? { r: s[1], g: s[2], b: s[3] } : (s = Gi.rgba.exec(r), s ? { r: s[1], g: s[2], b: s[3], a: s[4] } : (s = Gi.hsl.exec(r), s ? { h: s[1], s: s[2], l: s[3] } : (s = Gi.hsla.exec(r), s ? { h: s[1], s: s[2], l: s[3], a: s[4] } : (s = Gi.hsv.exec(r), s ? { h: s[1], s: s[2], v: s[3] } : (s = Gi.hsva.exec(r), s ? { h: s[1], s: s[2], v: s[3], a: s[4] } : (s = Gi.hex8.exec(r), s ? {
    r: Ka(s[1]),
    g: Ka(s[2]),
    b: Ka(s[3]),
    a: oS(s[4]),
    format: o ? "name" : "hex8"
  } : (s = Gi.hex6.exec(r), s ? {
    r: Ka(s[1]),
    g: Ka(s[2]),
    b: Ka(s[3]),
    format: o ? "name" : "hex"
  } : (s = Gi.hex4.exec(r), s ? {
    r: Ka(s[1] + s[1]),
    g: Ka(s[2] + s[2]),
    b: Ka(s[3] + s[3]),
    a: oS(s[4] + s[4]),
    format: o ? "name" : "hex8"
  } : (s = Gi.hex3.exec(r), s ? {
    r: Ka(s[1] + s[1]),
    g: Ka(s[2] + s[2]),
    b: Ka(s[3] + s[3]),
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
      typeof o == "number" && (o = lM(o)), this.originalInput = o;
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
      var o = this.toRgb(), s, c, d, m = o.r / 255, h = o.g / 255, E = o.b / 255;
      return m <= 0.03928 ? s = m / 12.92 : s = Math.pow((m + 0.055) / 1.055, 2.4), h <= 0.03928 ? c = h / 12.92 : c = Math.pow((h + 0.055) / 1.055, 2.4), E <= 0.03928 ? d = E / 12.92 : d = Math.pow((E + 0.055) / 1.055, 2.4), 0.2126 * s + 0.7152 * c + 0.0722 * d;
    }, r.prototype.getAlpha = function() {
      return this.a;
    }, r.prototype.setAlpha = function(o) {
      return this.a = n8(o), this.roundA = Math.round(100 * this.a) / 100, this;
    }, r.prototype.isMonochrome = function() {
      var o = this.toHsl().s;
      return o === 0;
    }, r.prototype.toHsv = function() {
      var o = F5(this.r, this.g, this.b);
      return { h: o.h * 360, s: o.s, v: o.v, a: this.a };
    }, r.prototype.toHsvString = function() {
      var o = F5(this.r, this.g, this.b), s = Math.round(o.h * 360), c = Math.round(o.s * 100), d = Math.round(o.v * 100);
      return this.a === 1 ? "hsv(".concat(s, ", ").concat(c, "%, ").concat(d, "%)") : "hsva(".concat(s, ", ").concat(c, "%, ").concat(d, "%, ").concat(this.roundA, ")");
    }, r.prototype.toHsl = function() {
      var o = iS(this.r, this.g, this.b);
      return { h: o.h * 360, s: o.s, l: o.l, a: this.a };
    }, r.prototype.toHslString = function() {
      var o = iS(this.r, this.g, this.b), s = Math.round(o.h * 360), c = Math.round(o.s * 100), d = Math.round(o.l * 100);
      return this.a === 1 ? "hsl(".concat(s, ", ").concat(c, "%, ").concat(d, "%)") : "hsla(".concat(s, ", ").concat(c, "%, ").concat(d, "%, ").concat(this.roundA, ")");
    }, r.prototype.toHex = function(o) {
      return o === void 0 && (o = !1), B5(this.r, this.g, this.b, o);
    }, r.prototype.toHexString = function(o) {
      return o === void 0 && (o = !1), "#" + this.toHex(o);
    }, r.prototype.toHex8 = function(o) {
      return o === void 0 && (o = !1), iM(this.r, this.g, this.b, this.a, o);
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
      for (var o = "#" + B5(this.r, this.g, this.b, !1), s = 0, c = Object.entries(W5); s < c.length; s++) {
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
      return s.l += o / 100, s.l = Qh(s.l), new r(s);
    }, r.prototype.brighten = function(o) {
      o === void 0 && (o = 10);
      var s = this.toRgb();
      return s.r = Math.max(0, Math.min(255, s.r - Math.round(255 * -(o / 100)))), s.g = Math.max(0, Math.min(255, s.g - Math.round(255 * -(o / 100)))), s.b = Math.max(0, Math.min(255, s.b - Math.round(255 * -(o / 100)))), new r(s);
    }, r.prototype.darken = function(o) {
      o === void 0 && (o = 10);
      var s = this.toHsl();
      return s.l -= o / 100, s.l = Qh(s.l), new r(s);
    }, r.prototype.tint = function(o) {
      return o === void 0 && (o = 10), this.mix("white", o);
    }, r.prototype.shade = function(o) {
      return o === void 0 && (o = 10), this.mix("black", o);
    }, r.prototype.desaturate = function(o) {
      o === void 0 && (o = 10);
      var s = this.toHsl();
      return s.s -= o / 100, s.s = Qh(s.s), new r(s);
    }, r.prototype.saturate = function(o) {
      o === void 0 && (o = 10);
      var s = this.toHsl();
      return s.s += o / 100, s.s = Qh(s.s), new r(s);
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
      for (var s = this.toHsv(), c = s.h, d = s.s, m = s.v, h = [], E = 1 / o; o--; )
        h.push(new r({ h: c, s: d, v: m })), m = (m + E) % 1;
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
), Xh = 2, lS = 0.16, fM = 0.05, dM = 0.05, vM = 0.15, r8 = 5, a8 = 4, pM = [{
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
function uS(r) {
  var o = r.r, s = r.g, c = r.b, d = F5(o, s, c);
  return {
    h: d.h * 360,
    s: d.s,
    v: d.v
  };
}
function Jh(r) {
  var o = r.r, s = r.g, c = r.b;
  return "#".concat(B5(o, s, c, !1));
}
function hM(r, o, s) {
  var c = s / 100, d = {
    r: (o.r - r.r) * c + r.r,
    g: (o.g - r.g) * c + r.g,
    b: (o.b - r.b) * c + r.b
  };
  return d;
}
function sS(r, o, s) {
  var c;
  return Math.round(r.h) >= 60 && Math.round(r.h) <= 240 ? c = s ? Math.round(r.h) - Xh * o : Math.round(r.h) + Xh * o : c = s ? Math.round(r.h) + Xh * o : Math.round(r.h) - Xh * o, c < 0 ? c += 360 : c >= 360 && (c -= 360), c;
}
function cS(r, o, s) {
  if (r.h === 0 && r.s === 0)
    return r.s;
  var c;
  return s ? c = r.s - lS * o : o === a8 ? c = r.s + lS : c = r.s + fM * o, c > 1 && (c = 1), s && o === r8 && c > 0.1 && (c = 0.1), c < 0.06 && (c = 0.06), Number(c.toFixed(2));
}
function fS(r, o, s) {
  var c;
  return s ? c = r.v + dM * o : c = r.v - vM * o, c > 1 && (c = 1), Number(c.toFixed(2));
}
function Xs(r) {
  for (var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = [], c = Ef(r), d = r8; d > 0; d -= 1) {
    var m = uS(c), h = Jh(Ef({
      h: sS(m, d, !0),
      s: cS(m, d, !0),
      v: fS(m, d, !0)
    }));
    s.push(h);
  }
  s.push(Jh(c));
  for (var E = 1; E <= a8; E += 1) {
    var T = uS(c), w = Jh(Ef({
      h: sS(T, E),
      s: cS(T, E),
      v: fS(T, E)
    }));
    s.push(w);
  }
  return o.theme === "dark" ? pM.map(function(_) {
    var k = _.index, N = _.opacity, A = Jh(hM(Ef(o.backgroundColor || "#141414"), Ef(s[k]), N * 100));
    return A;
  }) : s;
}
var d5 = {
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
}, om = {}, v5 = {};
Object.keys(d5).forEach(function(r) {
  om[r] = Xs(d5[r]), om[r].primary = om[r][5], v5[r] = Xs(d5[r], {
    theme: "dark",
    backgroundColor: "#141414"
  }), v5[r].primary = v5[r][5];
});
var mM = om.blue, k2 = /* @__PURE__ */ Sm({});
function gM(r) {
  return r.replace(/-(.)/g, function(o, s) {
    return s.toUpperCase();
  });
}
function yM(r, o) {
  ha(r, "[@ant-design/icons] ".concat(o));
}
function dS(r) {
  return Bn(r) === "object" && typeof r.name == "string" && typeof r.theme == "string" && (Bn(r.icon) === "object" || typeof r.icon == "function");
}
function vS() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(r).reduce(function(o, s) {
    var c = r[s];
    switch (s) {
      case "class":
        o.className = c, delete o.class;
        break;
      default:
        delete o[s], o[gM(s)] = c;
    }
    return o;
  }, {});
}
function K5(r, o, s) {
  return s ? /* @__PURE__ */ Oa.createElement(r.tag, Re(Re({
    key: o
  }, vS(r.attrs)), s), (r.children || []).map(function(c, d) {
    return K5(c, "".concat(o, "-").concat(r.tag, "-").concat(d));
  })) : /* @__PURE__ */ Oa.createElement(r.tag, Re({
    key: o
  }, vS(r.attrs)), (r.children || []).map(function(c, d) {
    return K5(c, "".concat(o, "-").concat(r.tag, "-").concat(d));
  }));
}
function i8(r) {
  return Xs(r)[0];
}
function o8(r) {
  return r ? Array.isArray(r) ? r : [r] : [];
}
var CM = `
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
`, bM = function(o) {
  var s = Ou(k2), c = s.csp, d = s.prefixCls, m = CM;
  d && (m = m.replace(/anticon/g, d)), Bo(function() {
    var h = o.current, E = mm(h);
    Du(m, "@ant-design-icons", {
      prepend: !0,
      csp: c,
      attachTo: E
    });
  }, []);
}, SM = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Vv = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function EM(r) {
  var o = r.primaryColor, s = r.secondaryColor;
  Vv.primaryColor = o, Vv.secondaryColor = s || i8(o), Vv.calculated = !!s;
}
function wM() {
  return Re({}, Vv);
}
var $m = function(o) {
  var s = o.icon, c = o.className, d = o.onClick, m = o.style, h = o.primaryColor, E = o.secondaryColor, T = Vn(o, SM), w = S.useRef(), _ = Vv;
  if (h && (_ = {
    primaryColor: h,
    secondaryColor: E || i8(h)
  }), bM(w), yM(dS(s), "icon should be icon definiton, but got ".concat(s)), !dS(s))
    return null;
  var k = s;
  return k && typeof k.icon == "function" && (k = Re(Re({}, k), {}, {
    icon: k.icon(_.primaryColor, _.secondaryColor)
  })), K5(k.icon, "svg-".concat(k.name), Re(Re({
    className: c,
    onClick: d,
    style: m,
    "data-icon": k.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, T), {}, {
    ref: w
  }));
};
$m.displayName = "IconReact";
$m.getTwoToneColors = wM;
$m.setTwoToneColors = EM;
const _2 = $m;
function l8(r) {
  var o = o8(r), s = Te(o, 2), c = s[0], d = s[1];
  return _2.setTwoToneColors({
    primaryColor: c,
    secondaryColor: d
  });
}
function xM() {
  var r = _2.getTwoToneColors();
  return r.calculated ? [r.primaryColor, r.secondaryColor] : r.primaryColor;
}
var TM = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
l8(mM.primary);
var Um = /* @__PURE__ */ S.forwardRef(function(r, o) {
  var s, c = r.className, d = r.icon, m = r.spin, h = r.rotate, E = r.tabIndex, T = r.onClick, w = r.twoToneColor, _ = Vn(r, TM), k = S.useContext(k2), N = k.prefixCls, A = N === void 0 ? "anticon" : N, P = k.rootClassName, j = wn(P, A, (s = {}, tt(s, "".concat(A, "-").concat(d.name), !!d.name), tt(s, "".concat(A, "-spin"), !!m || d.name === "loading"), s), c), D = E;
  D === void 0 && T && (D = -1);
  var W = h ? {
    msTransform: "rotate(".concat(h, "deg)"),
    transform: "rotate(".concat(h, "deg)")
  } : void 0, V = o8(w), z = Te(V, 2), I = z[0], U = z[1];
  return /* @__PURE__ */ S.createElement("span", an({
    role: "img",
    "aria-label": d.name
  }, _, {
    ref: o,
    tabIndex: D,
    onClick: T,
    className: j
  }), /* @__PURE__ */ S.createElement(_2, {
    icon: d,
    primaryColor: I,
    secondaryColor: U,
    style: W
  }));
});
Um.displayName = "AntdIcon";
Um.getTwoToneColor = xM;
Um.setTwoToneColor = l8;
const M2 = Um;
var u8 = function(o, s) {
  return /* @__PURE__ */ S.createElement(M2, an({}, o, {
    ref: s,
    icon: J_
  }));
};
process.env.NODE_ENV !== "production" && (u8.displayName = "BarsOutlined");
const RM = /* @__PURE__ */ S.forwardRef(u8);
var kM = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
const _M = kM;
var s8 = function(o, s) {
  return /* @__PURE__ */ S.createElement(M2, an({}, o, {
    ref: s,
    icon: _M
  }));
};
process.env.NODE_ENV !== "production" && (s8.displayName = "LeftOutlined");
const pS = /* @__PURE__ */ S.forwardRef(s8);
var MM = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
const OM = MM;
var c8 = function(o, s) {
  return /* @__PURE__ */ S.createElement(M2, an({}, o, {
    ref: s,
    icon: OM
  }));
};
process.env.NODE_ENV !== "production" && (c8.displayName = "RightOutlined");
const hS = /* @__PURE__ */ S.forwardRef(c8), NM = (r) => !isNaN(parseFloat(r)) && isFinite(r);
function gm(r) {
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
var DM = "%";
function G5(r) {
  return r.join(DM);
}
var LM = /* @__PURE__ */ function() {
  function r(o) {
    Xi(this, r), tt(this, "instanceId", void 0), tt(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = o;
  }
  return Ji(r, [{
    key: "get",
    value: function(s) {
      return this.opGet(G5(s));
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
      return this.opUpdate(G5(s), c);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(s, c) {
      var d = this.cache.get(s), m = c(d);
      m === null ? this.cache.delete(s) : this.cache.set(s, m);
    }
  }]), r;
}(), Mf = "data-token-hash", Yi = "data-css-hash", AM = "data-cache-path", _u = "__cssinjs_instance__";
function PM() {
  var r = Math.random().toString(12).slice(2);
  if (typeof document != "undefined" && document.head && document.body) {
    var o = document.body.querySelectorAll("style[".concat(Yi, "]")) || [], s = document.head.firstChild;
    Array.from(o).forEach(function(d) {
      d[_u] = d[_u] || r, d[_u] === r && document.head.insertBefore(d, s);
    });
    var c = {};
    Array.from(document.querySelectorAll("style[".concat(Yi, "]"))).forEach(function(d) {
      var m = d.getAttribute(Yi);
      if (c[m]) {
        if (d[_u] === r) {
          var h;
          (h = d.parentNode) === null || h === void 0 || h.removeChild(d);
        }
      } else
        c[m] = !0;
    });
  }
  return new LM(r);
}
var IM = /* @__PURE__ */ S.createContext({
  hashPriority: "low",
  cache: PM(),
  defaultCache: !0
});
const jm = IM;
function zM(r, o) {
  if (r.length !== o.length)
    return !1;
  for (var s = 0; s < r.length; s++)
    if (r[s] !== o[s])
      return !1;
  return !0;
}
var O2 = /* @__PURE__ */ function() {
  function r() {
    Xi(this, r), tt(this, "cache", void 0), tt(this, "keys", void 0), tt(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
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
      return s.forEach(function(E) {
        if (!h)
          h = void 0;
        else {
          var T;
          h = (T = h) === null || T === void 0 || (T = T.map) === null || T === void 0 ? void 0 : T.get(E);
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
          var m = this.keys.reduce(function(w, _) {
            var k = Te(w, 2), N = k[1];
            return d.internalGet(_)[1] < N ? [_, d.internalGet(_)[1]] : w;
          }, [this.keys[0], this.cacheCallTimes]), h = Te(m, 1), E = h[0];
          this.delete(E);
        }
        this.keys.push(s);
      }
      var T = this.cache;
      s.forEach(function(w, _) {
        if (_ === s.length - 1)
          T.set(w, {
            value: [c, d.cacheCallTimes++]
          });
        else {
          var k = T.get(w);
          k ? k.map || (k.map = /* @__PURE__ */ new Map()) : T.set(w, {
            map: /* @__PURE__ */ new Map()
          }), T = T.get(w).map;
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
          return !zM(c, s);
        }), this.deleteByPath(this.cache, s);
    }
  }]), r;
}();
tt(O2, "MAX_CACHE_SIZE", 20);
tt(O2, "MAX_CACHE_OFFSET", 5);
var mS = 0, f8 = /* @__PURE__ */ function() {
  function r(o) {
    Xi(this, r), tt(this, "derivatives", void 0), tt(this, "id", void 0), this.derivatives = Array.isArray(o) ? o : [o], this.id = mS, o.length === 0 && kf(o.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), mS += 1;
  }
  return Ji(r, [{
    key: "getDerivativeToken",
    value: function(s) {
      return this.derivatives.reduce(function(c, d) {
        return d(s, c);
      }, void 0);
    }
  }]), r;
}(), p5 = new O2();
function q5(r) {
  var o = Array.isArray(r) ? r : [r];
  return p5.has(o) || p5.set(o, new f8(o)), p5.get(o);
}
var HM = /* @__PURE__ */ new WeakMap(), h5 = {};
function $M(r, o) {
  for (var s = HM, c = 0; c < o.length; c += 1) {
    var d = o[c];
    s.has(d) || s.set(d, /* @__PURE__ */ new WeakMap()), s = s.get(d);
  }
  return s.has(h5) || s.set(h5, r()), s.get(h5);
}
var gS = /* @__PURE__ */ new WeakMap();
function Fv(r) {
  var o = gS.get(r) || "";
  return o || (Object.keys(r).forEach(function(s) {
    var c = r[s];
    o += s, c instanceof f8 ? o += c.id : c && Bn(c) === "object" ? o += Fv(c) : o += c;
  }), gS.set(r, o)), o;
}
function yS(r, o) {
  return gm("".concat(o, "_").concat(Fv(r)));
}
var Bv = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), d8 = "_bAmBoO_";
function UM(r, o, s) {
  if (pa()) {
    var c, d;
    Du(r, Bv);
    var m = document.createElement("div");
    m.style.position = "fixed", m.style.left = "0", m.style.top = "0", o == null || o(m), document.body.appendChild(m), process.env.NODE_ENV !== "production" && (m.innerHTML = "Test", m.style.zIndex = "9999999");
    var h = s ? s(m) : (c = getComputedStyle(m).content) === null || c === void 0 ? void 0 : c.includes(d8);
    return (d = m.parentNode) === null || d === void 0 || d.removeChild(m), Gv(Bv), h;
  }
  return !1;
}
var m5 = void 0;
function jM() {
  return m5 === void 0 && (m5 = UM("@layer ".concat(Bv, " { .").concat(Bv, ' { content: "').concat(d8, '"!important; } }'), function(r) {
    r.className = Bv;
  })), m5;
}
var Y5 = pa();
function Yv(r) {
  return typeof r == "number" ? "".concat(r, "px") : r;
}
function ym(r, o, s) {
  var c, d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (m)
    return r;
  var h = Re(Re({}, d), {}, (c = {}, tt(c, Mf, o), tt(c, Yi, s), c)), E = Object.keys(h).map(function(T) {
    var w = h[T];
    return w ? "".concat(T, '="').concat(w, '"') : null;
  }).filter(function(T) {
    return T;
  }).join(" ");
  return "<style ".concat(E, ">").concat(r, "</style>");
}
var v8 = function(o) {
  var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(s ? "".concat(s, "-") : "").concat(o).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, VM = function(o, s, c) {
  return Object.keys(o).length ? ".".concat(s).concat(c != null && c.scope ? ".".concat(c.scope) : "", "{").concat(Object.entries(o).map(function(d) {
    var m = Te(d, 2), h = m[0], E = m[1];
    return "".concat(h, ":").concat(E, ";");
  }).join(""), "}") : "";
}, p8 = function(o, s, c) {
  var d = {}, m = {};
  return Object.entries(o).forEach(function(h) {
    var E, T, w = Te(h, 2), _ = w[0], k = w[1];
    if (c != null && (E = c.preserve) !== null && E !== void 0 && E[_])
      m[_] = k;
    else if ((typeof k == "string" || typeof k == "number") && !(c != null && (T = c.ignore) !== null && T !== void 0 && T[_])) {
      var N, A = v8(_, c == null ? void 0 : c.prefix);
      d[A] = typeof k == "number" && !(c != null && (N = c.unitless) !== null && N !== void 0 && N[_]) ? "".concat(k, "px") : String(k), m[_] = "var(".concat(A, ")");
    }
  }), [m, VM(d, s, {
    scope: c == null ? void 0 : c.scope
  })];
}, FM = Re({}, S), CS = FM.useInsertionEffect, BM = function(o, s, c) {
  S.useMemo(o, c), ia(function() {
    return s(!0);
  }, c);
}, WM = CS ? function(r, o, s) {
  return CS(function() {
    return r(), o();
  }, s);
} : BM;
const KM = WM;
var GM = Re({}, S), qM = GM.useInsertionEffect, YM = function(o) {
  var s = [], c = !1;
  function d(m) {
    if (c) {
      process.env.NODE_ENV !== "production" && kf(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    s.push(m);
  }
  return S.useEffect(function() {
    return c = !1, function() {
      c = !0, s.length && s.forEach(function(m) {
        return m();
      });
    };
  }, o), d;
}, QM = function() {
  return function(o) {
    o();
  };
}, ZM = typeof qM != "undefined" ? YM : QM;
const XM = ZM;
function JM() {
  return !1;
}
var Q5 = !1;
function eO() {
  return Q5;
}
const tO = process.env.NODE_ENV === "production" ? JM : eO;
if (process.env.NODE_ENV !== "production" && typeof module != "undefined" && module && module.hot && typeof window != "undefined") {
  var g5 = window;
  if (typeof g5.webpackHotUpdate == "function") {
    var nO = g5.webpackHotUpdate;
    g5.webpackHotUpdate = function() {
      return Q5 = !0, setTimeout(function() {
        Q5 = !1;
      }, 0), nO.apply(void 0, arguments);
    };
  }
}
function N2(r, o, s, c, d) {
  var m = S.useContext(jm), h = m.cache, E = [r].concat(ar(o)), T = G5(E), w = XM([T]), _ = tO(), k = function(j) {
    h.opUpdate(T, function(D) {
      var W = D || [void 0, void 0], V = Te(W, 2), z = V[0], I = z === void 0 ? 0 : z, U = V[1], Y = U;
      process.env.NODE_ENV !== "production" && U && _ && (c == null || c(Y, _), Y = null);
      var Q = Y || s(), ne = [I, Q];
      return j ? j(ne) : ne;
    });
  };
  S.useMemo(
    function() {
      k();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [T]
    /* eslint-enable */
  );
  var N = h.opGet(T);
  process.env.NODE_ENV !== "production" && !N && (k(), N = h.opGet(T));
  var A = N[1];
  return KM(function() {
    d == null || d(A);
  }, function(P) {
    return k(function(j) {
      var D = Te(j, 2), W = D[0], V = D[1];
      return P && W === 0 && (d == null || d(A)), [W + 1, V];
    }), function() {
      h.opUpdate(T, function(j) {
        var D = j || [], W = Te(D, 2), V = W[0], z = V === void 0 ? 0 : V, I = W[1], U = z - 1;
        return U === 0 ? (w(function() {
          (P || !h.opGet(T)) && (c == null || c(I, !1));
        }), null) : [z - 1, I];
      });
    };
  }, [T]), A;
}
var rO = {}, aO = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", qs = /* @__PURE__ */ new Map();
function iO(r) {
  qs.set(r, (qs.get(r) || 0) + 1);
}
function oO(r, o) {
  if (typeof document != "undefined") {
    var s = document.querySelectorAll("style[".concat(Mf, '="').concat(r, '"]'));
    s.forEach(function(c) {
      if (c[_u] === o) {
        var d;
        (d = c.parentNode) === null || d === void 0 || d.removeChild(c);
      }
    });
  }
}
var lO = 0;
function uO(r, o) {
  qs.set(r, (qs.get(r) || 0) - 1);
  var s = Array.from(qs.keys()), c = s.filter(function(d) {
    var m = qs.get(d) || 0;
    return m <= 0;
  });
  s.length - c.length > lO && c.forEach(function(d) {
    oO(d, o), qs.delete(d);
  });
}
var sO = function(o, s, c, d) {
  var m = c.getDerivativeToken(o), h = Re(Re({}, m), s);
  return d && (h = d(h)), h;
}, h8 = "token";
function cO(r, o) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = Ou(jm), d = c.cache.instanceId, m = c.container, h = s.salt, E = h === void 0 ? "" : h, T = s.override, w = T === void 0 ? rO : T, _ = s.formatToken, k = s.getComputedToken, N = s.cssVar, A = $M(function() {
    return Object.assign.apply(Object, [{}].concat(ar(o)));
  }, o), P = Fv(A), j = Fv(w), D = N ? Fv(N) : "", W = N2(h8, [E, r.id, P, j, D], function() {
    var V, z = k ? k(A, w, r) : sO(A, w, r, _), I = Re({}, z), U = "";
    if (N) {
      var Y = p8(z, N.key, {
        prefix: N.prefix,
        ignore: N.ignore,
        unitless: N.unitless,
        preserve: N.preserve
      }), Q = Te(Y, 2);
      z = Q[0], U = Q[1];
    }
    var ne = yS(z, E);
    z._tokenKey = ne, I._tokenKey = yS(I, E);
    var ue = (V = N == null ? void 0 : N.key) !== null && V !== void 0 ? V : ne;
    z._themeKey = ue, iO(ue);
    var re = "".concat(aO, "-").concat(gm(ne));
    return z._hashId = re, [z, re, I, U, (N == null ? void 0 : N.key) || ""];
  }, function(V) {
    uO(V[0]._themeKey, d);
  }, function(V) {
    var z = Te(V, 4), I = z[0], U = z[3];
    if (N && U) {
      var Y = Du(U, gm("css-variables-".concat(I._themeKey)), {
        mark: Yi,
        prepend: "queue",
        attachTo: m,
        priority: -999
      });
      Y[_u] = d, Y.setAttribute(Mf, I._themeKey);
    }
  });
  return W;
}
var fO = function(o, s, c) {
  var d = Te(o, 5), m = d[2], h = d[3], E = d[4], T = c || {}, w = T.plain;
  if (!h)
    return null;
  var _ = m._tokenKey, k = -999, N = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(k)
  }, A = ym(h, E, _, N, w);
  return [k, _, A];
}, dO = {
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
}, m8 = "comm", g8 = "rule", y8 = "decl", vO = "@import", pO = "@keyframes", hO = "@layer", C8 = Math.abs, D2 = String.fromCharCode;
function b8(r) {
  return r.trim();
}
function lm(r, o, s) {
  return r.replace(o, s);
}
function mO(r, o, s) {
  return r.indexOf(o, s);
}
function Qv(r, o) {
  return r.charCodeAt(o) | 0;
}
function Zv(r, o, s) {
  return r.slice(o, s);
}
function Ol(r) {
  return r.length;
}
function gO(r) {
  return r.length;
}
function em(r, o) {
  return o.push(r), r;
}
var Vm = 1, Of = 1, S8 = 0, bi = 0, mr = 0, Af = "";
function L2(r, o, s, c, d, m, h, E) {
  return { value: r, root: o, parent: s, type: c, props: d, children: m, line: Vm, column: Of, length: h, return: "", siblings: E };
}
function yO() {
  return mr;
}
function CO() {
  return mr = bi > 0 ? Qv(Af, --bi) : 0, Of--, mr === 10 && (Of = 1, Vm--), mr;
}
function Qi() {
  return mr = bi < S8 ? Qv(Af, bi++) : 0, Of++, mr === 10 && (Of = 1, Vm++), mr;
}
function Qs() {
  return Qv(Af, bi);
}
function um() {
  return bi;
}
function Fm(r, o) {
  return Zv(Af, r, o);
}
function Z5(r) {
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
function bO(r) {
  return Vm = Of = 1, S8 = Ol(Af = r), bi = 0, [];
}
function SO(r) {
  return Af = "", r;
}
function y5(r) {
  return b8(Fm(bi - 1, X5(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function EO(r) {
  for (; (mr = Qs()) && mr < 33; )
    Qi();
  return Z5(r) > 2 || Z5(mr) > 3 ? "" : " ";
}
function wO(r, o) {
  for (; --o && Qi() && !(mr < 48 || mr > 102 || mr > 57 && mr < 65 || mr > 70 && mr < 97); )
    ;
  return Fm(r, um() + (o < 6 && Qs() == 32 && Qi() == 32));
}
function X5(r) {
  for (; Qi(); )
    switch (mr) {
      case r:
        return bi;
      case 34:
      case 39:
        r !== 34 && r !== 39 && X5(mr);
        break;
      case 40:
        r === 41 && X5(r);
        break;
      case 92:
        Qi();
        break;
    }
  return bi;
}
function xO(r, o) {
  for (; Qi() && r + mr !== 57; )
    if (r + mr === 84 && Qs() === 47)
      break;
  return "/*" + Fm(o, bi - 1) + "*" + D2(r === 47 ? r : Qi());
}
function TO(r) {
  for (; !Z5(Qs()); )
    Qi();
  return Fm(r, bi);
}
function RO(r) {
  return SO(sm("", null, null, null, [""], r = bO(r), 0, [0], r));
}
function sm(r, o, s, c, d, m, h, E, T) {
  for (var w = 0, _ = 0, k = h, N = 0, A = 0, P = 0, j = 1, D = 1, W = 1, V = 0, z = "", I = d, U = m, Y = c, Q = z; D; )
    switch (P = V, V = Qi()) {
      case 40:
        if (P != 108 && Qv(Q, k - 1) == 58) {
          mO(Q += lm(y5(V), "&", "&\f"), "&\f", C8(w ? E[w - 1] : 0)) != -1 && (W = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        Q += y5(V);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        Q += EO(P);
        break;
      case 92:
        Q += wO(um() - 1, 7);
        continue;
      case 47:
        switch (Qs()) {
          case 42:
          case 47:
            em(kO(xO(Qi(), um()), o, s, T), T);
            break;
          default:
            Q += "/";
        }
        break;
      case 123 * j:
        E[w++] = Ol(Q) * W;
      case 125 * j:
      case 59:
      case 0:
        switch (V) {
          case 0:
          case 125:
            D = 0;
          case 59 + _:
            W == -1 && (Q = lm(Q, /\f/g, "")), A > 0 && Ol(Q) - k && em(A > 32 ? SS(Q + ";", c, s, k - 1, T) : SS(lm(Q, " ", "") + ";", c, s, k - 2, T), T);
            break;
          case 59:
            Q += ";";
          default:
            if (em(Y = bS(Q, o, s, w, _, d, E, z, I = [], U = [], k, m), m), V === 123)
              if (_ === 0)
                sm(Q, o, Y, Y, I, m, k, E, U);
              else
                switch (N === 99 && Qv(Q, 3) === 110 ? 100 : N) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    sm(r, Y, Y, c && em(bS(r, Y, Y, 0, 0, d, E, z, d, I = [], k, U), U), d, U, k, E, c ? I : U);
                    break;
                  default:
                    sm(Q, Y, Y, Y, [""], U, 0, E, U);
                }
        }
        w = _ = A = 0, j = W = 1, z = Q = "", k = h;
        break;
      case 58:
        k = 1 + Ol(Q), A = P;
      default:
        if (j < 1) {
          if (V == 123)
            --j;
          else if (V == 125 && j++ == 0 && CO() == 125)
            continue;
        }
        switch (Q += D2(V), V * j) {
          case 38:
            W = _ > 0 ? 1 : (Q += "\f", -1);
            break;
          case 44:
            E[w++] = (Ol(Q) - 1) * W, W = 1;
            break;
          case 64:
            Qs() === 45 && (Q += y5(Qi())), N = Qs(), _ = k = Ol(z = Q += TO(um())), V++;
            break;
          case 45:
            P === 45 && Ol(Q) == 2 && (j = 0);
        }
    }
  return m;
}
function bS(r, o, s, c, d, m, h, E, T, w, _, k) {
  for (var N = d - 1, A = d === 0 ? m : [""], P = gO(A), j = 0, D = 0, W = 0; j < c; ++j)
    for (var V = 0, z = Zv(r, N + 1, N = C8(D = h[j])), I = r; V < P; ++V)
      (I = b8(D > 0 ? A[V] + " " + z : lm(z, /&\f/g, A[V]))) && (T[W++] = I);
  return L2(r, o, s, d === 0 ? g8 : E, T, w, _, k);
}
function kO(r, o, s, c) {
  return L2(r, o, s, m8, D2(yO()), Zv(r, 2, -2), 0, c);
}
function SS(r, o, s, c, d) {
  return L2(r, o, s, y8, Zv(r, 0, c), Zv(r, c + 1, -1), c, d);
}
function J5(r, o) {
  for (var s = "", c = 0; c < r.length; c++)
    s += o(r[c], c, r, o) || "";
  return s;
}
function _O(r, o, s, c) {
  switch (r.type) {
    case hO:
      if (r.children.length)
        break;
    case vO:
    case y8:
      return r.return = r.return || r.value;
    case m8:
      return "";
    case pO:
      return r.return = r.value + "{" + J5(r.children, c) + "}";
    case g8:
      if (!Ol(r.value = r.props.join(",")))
        return "";
  }
  return Ol(s = J5(r.children, c)) ? r.return = r.value + "{" + s + "}" : "";
}
function E8(r, o) {
  var s = o.path, c = o.parentSelectors;
  ha(!1, "[Ant Design CSS-in-JS] ".concat(s ? "Error in ".concat(s, ": ") : "").concat(r).concat(c.length ? " Selector: ".concat(c.join(" | ")) : ""));
}
var MO = function(o, s, c) {
  if (o === "content") {
    var d = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, m = ["normal", "none", "initial", "inherit", "unset"];
    (typeof s != "string" || m.indexOf(s) === -1 && !d.test(s) && (s.charAt(0) !== s.charAt(s.length - 1) || s.charAt(0) !== '"' && s.charAt(0) !== "'")) && E8("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(s, "\"'`."), c);
  }
}, OO = function(o, s, c) {
  o === "animation" && c.hashId && s !== "none" && E8("You seem to be using hashed animation '".concat(s, "', in which case 'animationName' with Keyframe as value is recommended."), c);
}, ES = "data-ant-cssinjs-cache-path", w8 = "_FILE_STYLE__", Zs, x8 = !0;
function NO() {
  if (!Zs && (Zs = {}, pa())) {
    var r = document.createElement("div");
    r.className = ES, r.style.position = "fixed", r.style.visibility = "hidden", r.style.top = "-9999px", document.body.appendChild(r);
    var o = getComputedStyle(r).content || "";
    o = o.replace(/^"/, "").replace(/"$/, ""), o.split(";").forEach(function(d) {
      var m = d.split(":"), h = Te(m, 2), E = h[0], T = h[1];
      Zs[E] = T;
    });
    var s = document.querySelector("style[".concat(ES, "]"));
    if (s) {
      var c;
      x8 = !1, (c = s.parentNode) === null || c === void 0 || c.removeChild(s);
    }
    document.body.removeChild(r);
  }
}
function DO(r) {
  return NO(), !!Zs[r];
}
function LO(r) {
  var o = Zs[r], s = null;
  if (o && pa())
    if (x8)
      s = w8;
    else {
      var c = document.querySelector("style[".concat(Yi, '="').concat(Zs[r], '"]'));
      c ? s = c.innerHTML : delete Zs[r];
    }
  return [s, o];
}
var T8 = "_skip_check_", R8 = "_multi_value_";
function e2(r) {
  var o = J5(RO(r), _O);
  return o.replace(/\{%%%\:[^;];}/g, ";");
}
function AO(r) {
  return Bn(r) === "object" && r && (T8 in r || R8 in r);
}
function PO(r, o, s) {
  if (!o)
    return r;
  var c = ".".concat(o), d = s === "low" ? ":where(".concat(c, ")") : c, m = r.split(",").map(function(h) {
    var E, T = h.trim().split(/\s+/), w = T[0] || "", _ = ((E = w.match(/^\w+/)) === null || E === void 0 ? void 0 : E[0]) || "";
    return w = "".concat(_).concat(d).concat(w.slice(_.length)), [w].concat(ar(T.slice(1))).join(" ");
  });
  return m.join(",");
}
var IO = function r(o) {
  var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, d = c.root, m = c.injectHash, h = c.parentSelectors, E = s.hashId, T = s.layer, w = s.path, _ = s.hashPriority, k = s.transformers, N = k === void 0 ? [] : k, A = s.linters, P = A === void 0 ? [] : A, j = "", D = {};
  function W(Y) {
    var Q = Y.getName(E);
    if (!D[Q]) {
      var ne = r(Y.style, s, {
        root: !1,
        parentSelectors: h
      }), ue = Te(ne, 1), re = ue[0];
      D[Q] = "@keyframes ".concat(Y.getName(E)).concat(re);
    }
  }
  function V(Y) {
    var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return Y.forEach(function(ne) {
      Array.isArray(ne) ? V(ne, Q) : ne && Q.push(ne);
    }), Q;
  }
  var z = V(Array.isArray(o) ? o : [o]);
  if (z.forEach(function(Y) {
    var Q = typeof Y == "string" && !d ? {} : Y;
    if (typeof Q == "string")
      j += "".concat(Q, `
`);
    else if (Q._keyframe)
      W(Q);
    else {
      var ne = N.reduce(function(ue, re) {
        var ge;
        return (re == null || (ge = re.visit) === null || ge === void 0 ? void 0 : ge.call(re, ue)) || ue;
      }, Q);
      Object.keys(ne).forEach(function(ue) {
        var re = ne[ue];
        if (Bn(re) === "object" && re && (ue !== "animationName" || !re._keyframe) && !AO(re)) {
          var ge = !1, pe = ue.trim(), te = !1;
          (d || m) && E ? pe.startsWith("@") ? ge = !0 : pe = PO(ue, E, _) : d && !E && (pe === "&" || pe === "") && (pe = "", te = !0);
          var se = r(re, s, {
            root: te,
            injectHash: ge,
            parentSelectors: [].concat(ar(h), [pe])
          }), de = Te(se, 2), Ee = de[0], Me = de[1];
          D = Re(Re({}, D), Me), j += "".concat(pe).concat(Ee);
        } else {
          let Ie = function(ie, he) {
            process.env.NODE_ENV !== "production" && (Bn(re) !== "object" || !(re != null && re[T8])) && [MO, OO].concat(ar(P)).forEach(function(Ke) {
              return Ke(ie, he, {
                path: w,
                hashId: E,
                parentSelectors: h
              });
            });
            var Se = ie.replace(/[A-Z]/g, function(Ke) {
              return "-".concat(Ke.toLowerCase());
            }), ze = he;
            !dO[ie] && typeof ze == "number" && ze !== 0 && (ze = "".concat(ze, "px")), ie === "animationName" && he !== null && he !== void 0 && he._keyframe && (W(he), ze = he.getName(E)), j += "".concat(Se, ":").concat(ze, ";");
          };
          var xe, Le = (xe = re == null ? void 0 : re.value) !== null && xe !== void 0 ? xe : re;
          Bn(re) === "object" && re !== null && re !== void 0 && re[R8] && Array.isArray(Le) ? Le.forEach(function(ie) {
            Ie(ue, ie);
          }) : Ie(ue, Le);
        }
      });
    }
  }), !d)
    j = "{".concat(j, "}");
  else if (T && jM()) {
    var I = T.split(","), U = I[I.length - 1].trim();
    j = "@layer ".concat(U, " {").concat(j, "}"), I.length > 1 && (j = "@layer ".concat(T, "{%%%:%}").concat(j));
  }
  return [j, D];
};
function k8(r, o) {
  return gm("".concat(r.join("%")).concat(o));
}
function zO() {
  return null;
}
var _8 = "style";
function t2(r, o) {
  var s = r.token, c = r.path, d = r.hashId, m = r.layer, h = r.nonce, E = r.clientOnly, T = r.order, w = T === void 0 ? 0 : T, _ = S.useContext(jm), k = _.autoClear, N = _.mock, A = _.defaultCache, P = _.hashPriority, j = _.container, D = _.ssrInline, W = _.transformers, V = _.linters, z = _.cache, I = s._tokenKey, U = [I].concat(ar(c)), Y = Y5;
  process.env.NODE_ENV !== "production" && N !== void 0 && (Y = N === "client");
  var Q = N2(
    _8,
    U,
    // Create cache if needed
    function() {
      var pe = U.join("|");
      if (DO(pe)) {
        var te = LO(pe), se = Te(te, 2), de = se[0], Ee = se[1];
        if (de)
          return [de, I, Ee, {}, E, w];
      }
      var Me = o(), xe = IO(Me, {
        hashId: d,
        hashPriority: P,
        layer: m,
        path: c.join("-"),
        transformers: W,
        linters: V
      }), Le = Te(xe, 2), Ie = Le[0], ie = Le[1], he = e2(Ie), Se = k8(U, he);
      return [he, I, Se, ie, E, w];
    },
    // Remove cache if no need
    function(pe, te) {
      var se = Te(pe, 3), de = se[2];
      (te || k) && Y5 && Gv(de, {
        mark: Yi
      });
    },
    // Effect: Inject style here
    function(pe) {
      var te = Te(pe, 4), se = te[0];
      te[1];
      var de = te[2], Ee = te[3];
      if (Y && se !== w8) {
        var Me = {
          mark: Yi,
          prepend: "queue",
          attachTo: j,
          priority: w
        }, xe = typeof h == "function" ? h() : h;
        xe && (Me.csp = {
          nonce: xe
        });
        var Le = Du(se, de, Me);
        Le[_u] = z.instanceId, Le.setAttribute(Mf, I), process.env.NODE_ENV !== "production" && Le.setAttribute(AM, U.join("|")), Object.keys(Ee).forEach(function(Ie) {
          Du(e2(Ee[Ie]), "_effect-".concat(Ie), Me);
        });
      }
    }
  ), ne = Te(Q, 3), ue = ne[0], re = ne[1], ge = ne[2];
  return function(pe) {
    var te;
    if (!D || Y || !A)
      te = /* @__PURE__ */ S.createElement(zO, null);
    else {
      var se;
      te = /* @__PURE__ */ S.createElement("style", an({}, (se = {}, tt(se, Mf, re), tt(se, Yi, ge), se), {
        dangerouslySetInnerHTML: {
          __html: ue
        }
      }));
    }
    return /* @__PURE__ */ S.createElement(S.Fragment, null, te, pe);
  };
}
var HO = function(o, s, c) {
  var d = Te(o, 6), m = d[0], h = d[1], E = d[2], T = d[3], w = d[4], _ = d[5], k = c || {}, N = k.plain;
  if (w)
    return null;
  var A = m, P = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(_)
  };
  return A = ym(m, h, E, P, N), T && Object.keys(T).forEach(function(j) {
    if (!s[j]) {
      s[j] = !0;
      var D = e2(T[j]);
      A += ym(D, h, "_effect-".concat(j), P, N);
    }
  }), [_, E, A];
}, M8 = "cssVar", $O = function(o, s) {
  var c = o.key, d = o.prefix, m = o.unitless, h = o.ignore, E = o.token, T = o.scope, w = T === void 0 ? "" : T, _ = Ou(jm), k = _.cache.instanceId, N = _.container, A = E._tokenKey, P = [].concat(ar(o.path), [c, w, A]), j = N2(M8, P, function() {
    var D = s(), W = p8(D, c, {
      prefix: d,
      unitless: m,
      ignore: h,
      scope: w
    }), V = Te(W, 2), z = V[0], I = V[1], U = k8(P, I);
    return [z, I, U, c];
  }, function(D) {
    var W = Te(D, 3), V = W[2];
    Y5 && Gv(V, {
      mark: Yi
    });
  }, function(D) {
    var W = Te(D, 3), V = W[1], z = W[2];
    if (V) {
      var I = Du(V, z, {
        mark: Yi,
        prepend: "queue",
        attachTo: N,
        priority: -999
      });
      I[_u] = k, I.setAttribute(Mf, c);
    }
  });
  return j;
}, UO = function(o, s, c) {
  var d = Te(o, 4), m = d[1], h = d[2], E = d[3], T = c || {}, w = T.plain;
  if (!m)
    return null;
  var _ = -999, k = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(_)
  }, N = ym(m, E, h, k, w);
  return [_, h, N];
}, zv;
zv = {}, tt(zv, _8, HO), tt(zv, h8, fO), tt(zv, M8, UO);
var Si = /* @__PURE__ */ function() {
  function r(o, s) {
    Xi(this, r), tt(this, "name", void 0), tt(this, "style", void 0), tt(this, "_keyframe", !0), this.name = o, this.style = s;
  }
  return Ji(r, [{
    key: "getName",
    value: function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return s ? "".concat(s, "-").concat(this.name) : this.name;
    }
  }]), r;
}();
function Cf(r) {
  return r.notSplit = !0, r;
}
Cf(["borderTop", "borderBottom"]), Cf(["borderTop"]), Cf(["borderBottom"]), Cf(["borderLeft", "borderRight"]), Cf(["borderLeft"]), Cf(["borderRight"]);
function jO(r) {
  return JS(r) || XS(r) || p2(r) || e3();
}
function n2(r, o) {
  for (var s = r, c = 0; c < o.length; c += 1) {
    if (s == null)
      return;
    s = s[o[c]];
  }
  return s;
}
function O8(r, o, s, c) {
  if (!o.length)
    return s;
  var d = jO(o), m = d[0], h = d.slice(1), E;
  return !r && typeof m == "number" ? E = [] : Array.isArray(r) ? E = ar(r) : E = Re({}, r), c && s === void 0 && h.length === 1 ? delete E[m][h[0]] : E[m] = O8(E[m], h, s, c), E;
}
function C5(r, o, s) {
  var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return o.length && c && s === void 0 && !n2(r, o.slice(0, -1)) ? r : O8(r, o, s, c);
}
function VO(r) {
  return Bn(r) === "object" && r !== null && Object.getPrototypeOf(r) === Object.prototype;
}
function wS(r) {
  return Array.isArray(r) ? [] : {};
}
var FO = typeof Reflect == "undefined" ? Object.keys : Reflect.ownKeys;
function BO() {
  for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
    o[s] = arguments[s];
  var c = wS(o[0]);
  return o.forEach(function(d) {
    function m(h, E) {
      var T = new Set(E), w = n2(d, h), _ = Array.isArray(w);
      if (_ || VO(w)) {
        if (!T.has(w)) {
          T.add(w);
          var k = n2(c, h);
          _ ? c = C5(c, h, []) : (!k || Bn(k) !== "object") && (c = C5(c, h, wS(w))), FO(w).forEach(function(N) {
            m([].concat(ar(h), [N]), T);
          });
        }
      } else
        c = C5(c, h, w);
    }
    m([]);
  }), c;
}
function N8() {
}
let _l = null;
function WO() {
  _l = null, n3();
}
let A2 = N8;
process.env.NODE_ENV !== "production" && (A2 = (r, o, s) => {
  ha(r, `[antd: ${o}] ${s}`), process.env.NODE_ENV === "test" && WO();
});
const D8 = /* @__PURE__ */ S.createContext({}), Bm = process.env.NODE_ENV !== "production" ? (r) => {
  const {
    strict: o
  } = S.useContext(D8), s = (c, d, m) => {
    if (!c)
      if (o === !1 && d === "deprecated") {
        const h = _l;
        _l || (_l = {}), _l[r] = _l[r] || [], _l[r].includes(m || "") || _l[r].push(m || ""), h || console.warn("[antd] There exists deprecated usage in your code:", _l);
      } else
        process.env.NODE_ENV !== "production" && A2(c, r, m);
  };
  return s.deprecated = (c, d, m, h) => {
    s(c, "deprecated", `\`${d}\` is deprecated. Please use \`${m}\` instead.${h ? ` ${h}` : ""}`);
  }, s;
} : () => {
  const r = () => {
  };
  return r.deprecated = N8, r;
}, Wm = A2, KO = /* @__PURE__ */ Sm(void 0);
var GO = {
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
}, qO = {
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
const YO = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, L8 = YO, QO = {
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
  }, qO),
  timePickerLocale: Object.assign({}, L8)
}, xS = QO, Wa = "${label} is not a valid ${type}", Km = {
  locale: "en",
  Pagination: GO,
  DatePicker: xS,
  TimePicker: L8,
  Calendar: xS,
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
        string: Wa,
        method: Wa,
        array: Wa,
        object: Wa,
        number: Wa,
        date: Wa,
        boolean: Wa,
        integer: Wa,
        float: Wa,
        regexp: Wa,
        email: Wa,
        url: Wa,
        hex: Wa
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
Object.assign({}, Km.Modal);
let cm = [];
const TS = () => cm.reduce((r, o) => Object.assign(Object.assign({}, r), o), Km.Modal);
function ZO(r) {
  if (r) {
    const o = Object.assign({}, r);
    return cm.push(o), TS(), () => {
      cm = cm.filter((s) => s !== o), TS();
    };
  }
  Object.assign({}, Km.Modal);
}
const XO = /* @__PURE__ */ Sm(void 0), A8 = XO, P8 = "internalMark", I8 = (r) => {
  const {
    locale: o = {},
    children: s,
    _ANT_MARK__: c
  } = r;
  if (process.env.NODE_ENV !== "production") {
    const m = Bm("LocaleProvider");
    process.env.NODE_ENV !== "production" && m(c === P8, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  S.useEffect(() => ZO(o && o.Modal), [o]);
  const d = S.useMemo(() => Object.assign(Object.assign({}, o), {
    exist: !0
  }), [o]);
  return /* @__PURE__ */ S.createElement(A8.Provider, {
    value: d
  }, s);
};
process.env.NODE_ENV !== "production" && (I8.displayName = "LocaleProvider");
const JO = I8, eN = (r) => {
  const {
    controlHeight: o
  } = r;
  return {
    controlHeightSM: o * 0.75,
    controlHeightXS: o * 0.5,
    controlHeightLG: o * 1.25
  };
};
function tN(r) {
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
const z8 = {
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
}, nN = Object.assign(Object.assign({}, z8), {
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
}), Xv = nN;
function rN(r, o) {
  let {
    generateColorPalettes: s,
    generateNeutralColorPalettes: c
  } = o;
  const {
    colorSuccess: d,
    colorWarning: m,
    colorError: h,
    colorInfo: E,
    colorPrimary: T,
    colorBgBase: w,
    colorTextBase: _
  } = r, k = s(T), N = s(d), A = s(m), P = s(h), j = s(E), D = c(w, _), W = r.colorLink || r.colorInfo, V = s(W);
  return Object.assign(Object.assign({}, D), {
    colorPrimaryBg: k[1],
    colorPrimaryBgHover: k[2],
    colorPrimaryBorder: k[3],
    colorPrimaryBorderHover: k[4],
    colorPrimaryHover: k[5],
    colorPrimary: k[6],
    colorPrimaryActive: k[7],
    colorPrimaryTextHover: k[8],
    colorPrimaryText: k[9],
    colorPrimaryTextActive: k[10],
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
    colorErrorBg: P[1],
    colorErrorBgHover: P[2],
    colorErrorBorder: P[3],
    colorErrorBorderHover: P[4],
    colorErrorHover: P[5],
    colorError: P[6],
    colorErrorActive: P[7],
    colorErrorTextHover: P[8],
    colorErrorText: P[9],
    colorErrorTextActive: P[10],
    colorWarningBg: A[1],
    colorWarningBgHover: A[2],
    colorWarningBorder: A[3],
    colorWarningBorderHover: A[4],
    colorWarningHover: A[4],
    colorWarning: A[6],
    colorWarningActive: A[7],
    colorWarningTextHover: A[8],
    colorWarningText: A[9],
    colorWarningTextActive: A[10],
    colorInfoBg: j[1],
    colorInfoBgHover: j[2],
    colorInfoBorder: j[3],
    colorInfoBorderHover: j[4],
    colorInfoHover: j[4],
    colorInfo: j[6],
    colorInfoActive: j[7],
    colorInfoTextHover: j[8],
    colorInfoText: j[9],
    colorInfoTextActive: j[10],
    colorLinkHover: V[4],
    colorLink: V[6],
    colorLinkActive: V[7],
    colorBgMask: new Ga("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const aN = (r) => {
  let o = r, s = r, c = r, d = r;
  return r < 6 && r >= 5 ? o = r + 1 : r < 16 && r >= 6 ? o = r + 2 : r >= 16 && (o = 16), r < 7 && r >= 5 ? s = 4 : r < 8 && r >= 7 ? s = 5 : r < 14 && r >= 8 ? s = 6 : r < 16 && r >= 14 ? s = 7 : r >= 16 && (s = 8), r < 6 && r >= 2 ? c = 1 : r >= 6 && (c = 2), r > 4 && r < 8 ? d = 4 : r >= 8 && (d = 6), {
    borderRadius: r,
    borderRadiusXS: c,
    borderRadiusSM: s,
    borderRadiusLG: o,
    borderRadiusOuter: d
  };
};
function iN(r) {
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
  }, aN(c));
}
const kl = (r, o) => new Ga(r).setAlpha(o).toRgbString(), Hv = (r, o) => new Ga(r).darken(o).toHexString(), oN = (r) => {
  const o = Xs(r);
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
}, lN = (r, o) => {
  const s = r || "#fff", c = o || "#000";
  return {
    colorBgBase: s,
    colorTextBase: c,
    colorText: kl(c, 0.88),
    colorTextSecondary: kl(c, 0.65),
    colorTextTertiary: kl(c, 0.45),
    colorTextQuaternary: kl(c, 0.25),
    colorFill: kl(c, 0.15),
    colorFillSecondary: kl(c, 0.06),
    colorFillTertiary: kl(c, 0.04),
    colorFillQuaternary: kl(c, 0.02),
    colorBgLayout: Hv(s, 4),
    colorBgContainer: Hv(s, 0),
    colorBgElevated: Hv(s, 0),
    colorBgSpotlight: kl(c, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Hv(s, 15),
    colorBorderSecondary: Hv(s, 6)
  };
};
function uN(r) {
  return (r + 8) / r;
}
function sN(r) {
  const o = new Array(10).fill(null).map((s, c) => {
    const d = c - 1, m = r * Math.pow(2.71828, d / 5), h = c > 1 ? Math.floor(m) : Math.ceil(m);
    return Math.floor(h / 2) * 2;
  });
  return o[1] = r, o.map((s) => ({
    size: s,
    lineHeight: uN(s)
  }));
}
const cN = (r) => {
  const o = sN(r), s = o.map((_) => _.size), c = o.map((_) => _.lineHeight), d = s[1], m = s[0], h = s[2], E = c[1], T = c[0], w = c[2];
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
    lineHeight: E,
    lineHeightLG: w,
    lineHeightSM: T,
    fontHeight: Math.round(E * d),
    fontHeightLG: Math.round(w * h),
    fontHeightSM: Math.round(T * m),
    lineHeightHeading1: c[6],
    lineHeightHeading2: c[5],
    lineHeightHeading3: c[4],
    lineHeightHeading4: c[3],
    lineHeightHeading5: c[2]
  };
};
function fN(r) {
  const o = Object.keys(z8).map((s) => {
    const c = Xs(r[s]);
    return new Array(10).fill(1).reduce((d, m, h) => (d[`${s}-${h + 1}`] = c[h], d[`${s}${h + 1}`] = c[h], d), {});
  }).reduce((s, c) => (s = Object.assign(Object.assign({}, s), c), s), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r), o), rN(r, {
    generateColorPalettes: oN,
    generateNeutralColorPalettes: lN
  })), cN(r.fontSize)), tN(r)), eN(r)), iN(r));
}
const H8 = q5(fN), $8 = {
  token: Xv,
  override: {
    override: Xv
  },
  hashed: !0
}, U8 = /* @__PURE__ */ Oa.createContext($8), j8 = "anticon", dN = (r, o) => o || (r ? `ant-${r}` : "ant"), ec = /* @__PURE__ */ S.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: dN,
  iconPrefixCls: j8
}), vN = `-ant-${Date.now()}-${Math.random()}`;
function pN(r, o) {
  const s = {}, c = (h, E) => {
    let T = h.clone();
    return T = (E == null ? void 0 : E(T)) || T, T.toRgbString();
  }, d = (h, E) => {
    const T = new Ga(h), w = Xs(T.toRgbString());
    s[`${E}-color`] = c(T), s[`${E}-color-disabled`] = w[1], s[`${E}-color-hover`] = w[4], s[`${E}-color-active`] = w[6], s[`${E}-color-outline`] = T.clone().setAlpha(0.2).toRgbString(), s[`${E}-color-deprecated-bg`] = w[0], s[`${E}-color-deprecated-border`] = w[2];
  };
  if (o.primaryColor) {
    d(o.primaryColor, "primary");
    const h = new Ga(o.primaryColor), E = Xs(h.toRgbString());
    E.forEach((w, _) => {
      s[`primary-${_ + 1}`] = w;
    }), s["primary-color-deprecated-l-35"] = c(h, (w) => w.lighten(35)), s["primary-color-deprecated-l-20"] = c(h, (w) => w.lighten(20)), s["primary-color-deprecated-t-20"] = c(h, (w) => w.tint(20)), s["primary-color-deprecated-t-50"] = c(h, (w) => w.tint(50)), s["primary-color-deprecated-f-12"] = c(h, (w) => w.setAlpha(w.getAlpha() * 0.12));
    const T = new Ga(E[0]);
    s["primary-color-active-deprecated-f-30"] = c(T, (w) => w.setAlpha(w.getAlpha() * 0.3)), s["primary-color-active-deprecated-d-02"] = c(T, (w) => w.darken(2));
  }
  return o.successColor && d(o.successColor, "success"), o.warningColor && d(o.warningColor, "warning"), o.errorColor && d(o.errorColor, "error"), o.infoColor && d(o.infoColor, "info"), `
  :root {
    ${Object.keys(s).map((h) => `--${r}-${h}: ${s[h]};`).join(`
`)}
  }
  `.trim();
}
function hN(r, o) {
  const s = pN(r, o);
  pa() ? Du(s, `${vN}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Wm(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const r2 = /* @__PURE__ */ S.createContext(!1), mN = (r) => {
  let {
    children: o,
    disabled: s
  } = r;
  const c = S.useContext(r2);
  return /* @__PURE__ */ S.createElement(r2.Provider, {
    value: s != null ? s : c
  }, o);
}, gN = r2, a2 = /* @__PURE__ */ S.createContext(void 0), yN = (r) => {
  let {
    children: o,
    size: s
  } = r;
  const c = S.useContext(a2);
  return /* @__PURE__ */ S.createElement(a2.Provider, {
    value: s || c
  }, o);
}, P2 = a2;
function CN() {
  const r = Ou(gN), o = Ou(P2);
  return {
    componentDisabled: r,
    componentSize: o
  };
}
const Cm = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], bN = "5.13.2";
function b5(r) {
  return r >= 0 && r <= 255;
}
function tm(r, o) {
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
    g: E,
    b: T
  } = new Ga(o).toRgb();
  for (let w = 0.01; w <= 1; w += 0.01) {
    const _ = Math.round((s - h * (1 - w)) / w), k = Math.round((c - E * (1 - w)) / w), N = Math.round((d - T * (1 - w)) / w);
    if (b5(_) && b5(k) && b5(N))
      return new Ga({
        r: _,
        g: k,
        b: N,
        a: Math.round(w * 100) / 100
      }).toRgbString();
  }
  return new Ga({
    r: s,
    g: c,
    b: d,
    a: 1
  }).toRgbString();
}
var SN = function(r, o) {
  var s = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (s[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (s[c[d]] = r[c[d]]);
  return s;
};
function V8(r) {
  const {
    override: o
  } = r, s = SN(r, ["override"]), c = Object.assign({}, o);
  Object.keys(Xv).forEach((N) => {
    delete c[N];
  });
  const d = Object.assign(Object.assign({}, s), c), m = 480, h = 576, E = 768, T = 992, w = 1200, _ = 1600;
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
    colorSplit: tm(d.colorBorderSecondary, d.colorBgContainer),
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
    colorErrorOutline: tm(d.colorErrorBg, d.colorBgContainer),
    colorWarningOutline: tm(d.colorWarningBg, d.colorBgContainer),
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
    controlOutline: tm(d.colorPrimaryBg, d.colorBgContainer),
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
    screenSMMax: E - 1,
    screenMD: E,
    screenMDMin: E,
    screenMDMax: T - 1,
    screenLG: T,
    screenLGMin: T,
    screenLGMax: w - 1,
    screenXL: w,
    screenXLMin: w,
    screenXLMax: _ - 1,
    screenXXL: _,
    screenXXLMin: _,
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
var RS = function(r, o) {
  var s = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (s[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (s[c[d]] = r[c[d]]);
  return s;
};
const F8 = {
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
}, B8 = {
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
}, EN = {
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
}, W8 = (r, o, s) => {
  const c = s.getDerivativeToken(r), {
    override: d
  } = o, m = RS(o, ["override"]);
  let h = Object.assign(Object.assign({}, c), {
    override: d
  });
  return h = V8(h), m && Object.entries(m).forEach((E) => {
    let [T, w] = E;
    const {
      theme: _
    } = w, k = RS(w, ["theme"]);
    let N = k;
    _ && (N = W8(Object.assign(Object.assign({}, h), k), {
      override: k
    }, _)), h[T] = N;
  }), h;
};
function Js() {
  const {
    token: r,
    hashed: o,
    theme: s,
    override: c,
    cssVar: d
  } = Oa.useContext(U8), m = `${bN}-${o || ""}`, h = s || H8, [E, T, w] = cO(h, [Xv, r], {
    salt: m,
    override: c,
    getComputedToken: W8,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: V8,
    cssVar: d && {
      prefix: d.prefix,
      key: d.key,
      unitless: F8,
      ignore: B8,
      preserve: EN
    }
  });
  return [h, w, o ? T : "", E, d];
}
const wN = function(r) {
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
}, xN = () => ({
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
}), TN = (r) => ({
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
}), RN = (r, o) => {
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
let kN = /* @__PURE__ */ Ji(function r() {
  Xi(this, r);
});
const K8 = kN;
function _N(r, o, s) {
  return o = Nu(o), g2(r, Om() ? Reflect.construct(o, s || [], Nu(r).constructor) : o.apply(r, s));
}
let MN = /* @__PURE__ */ function(r) {
  Df(o, r);
  function o(s) {
    var c;
    return Xi(this, o), c = _N(this, o), c.result = 0, s instanceof o ? c.result = s.result : typeof s == "number" && (c.result = s), c;
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
}(K8);
function ON(r, o, s) {
  return o = Nu(o), g2(r, Om() ? Reflect.construct(o, s || [], Nu(r).constructor) : o.apply(r, s));
}
const G8 = "CALC_UNIT";
function S5(r) {
  return typeof r == "number" ? `${r}${G8}` : r;
}
let NN = /* @__PURE__ */ function(r) {
  Df(o, r);
  function o(s) {
    var c;
    return Xi(this, o), c = ON(this, o), c.result = "", s instanceof o ? c.result = `(${s.result})` : typeof s == "number" ? c.result = S5(s) : typeof s == "string" && (c.result = s), c;
  }
  return Ji(o, [{
    key: "add",
    value: function(c) {
      return c instanceof o ? this.result = `${this.result} + ${c.getResult()}` : (typeof c == "number" || typeof c == "string") && (this.result = `${this.result} + ${S5(c)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(c) {
      return c instanceof o ? this.result = `${this.result} - ${c.getResult()}` : (typeof c == "number" || typeof c == "string") && (this.result = `${this.result} - ${S5(c)}`), this.lowPriority = !0, this;
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
      } = c || {}, m = new RegExp(`${G8}`, "g");
      return this.result = this.result.replace(m, d ? "px" : ""), typeof this.lowPriority != "undefined" ? `calc(${this.result})` : this.result;
    }
  }]), o;
}(K8);
const DN = (r) => {
  const o = r === "css" ? NN : MN;
  return (s) => new o(s);
};
function LN(r) {
  return r === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var o = arguments.length, s = new Array(o), c = 0; c < o; c++)
        s[c] = arguments[c];
      return `max(${s.map((d) => Yv(d)).join(",")})`;
    },
    min: function() {
      for (var o = arguments.length, s = new Array(o), c = 0; c < o; c++)
        s[c] = arguments[c];
      return `min(${s.map((d) => Yv(d)).join(",")})`;
    }
  };
}
const q8 = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC != "undefined";
let i2 = !0;
function Gm() {
  for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
    o[s] = arguments[s];
  if (!q8)
    return Object.assign.apply(Object, [{}].concat(o));
  i2 = !1;
  const c = {};
  return o.forEach((d) => {
    Object.keys(d).forEach((h) => {
      Object.defineProperty(c, h, {
        configurable: !0,
        enumerable: !0,
        get: () => d[h]
      });
    });
  }), i2 = !0, c;
}
const kS = {};
function AN() {
}
const PN = (r) => {
  let o, s = r, c = AN;
  return q8 && typeof Proxy != "undefined" && (o = /* @__PURE__ */ new Set(), s = new Proxy(r, {
    get(d, m) {
      return i2 && o.add(m), d[m];
    }
  }), c = (d, m) => {
    var h;
    kS[d] = {
      global: Array.from(o),
      component: Object.assign(Object.assign({}, (h = kS[d]) === null || h === void 0 ? void 0 : h.component), m)
    };
  }), {
    token: s,
    keys: o,
    flush: c
  };
}, Y8 = (r, o) => {
  const [s, c] = Js();
  return t2({
    theme: s,
    token: c,
    hashId: "",
    path: ["ant-design-icons", r],
    nonce: () => o == null ? void 0 : o.nonce
  }, () => [{
    [`.${r}`]: Object.assign(Object.assign({}, xN()), {
      [`.${r} .${r}-icon`]: {
        display: "block"
      }
    })
  }]);
}, Q8 = (r, o, s) => {
  var c;
  return typeof s == "function" ? s(Gm(o, (c = o[r]) !== null && c !== void 0 ? c : {})) : s != null ? s : {};
}, Z8 = (r, o, s, c) => {
  const d = Object.assign({}, o[r]);
  if (c != null && c.deprecatedTokens) {
    const {
      deprecatedTokens: h
    } = c;
    h.forEach((E) => {
      let [T, w] = E;
      var _;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && ha(!(d != null && d[T]), `Component Token \`${String(T)}\` of ${r} is deprecated. Please use \`${String(w)}\` instead.`), (d != null && d[T] || d != null && d[w]) && ((_ = d[w]) !== null && _ !== void 0 || (d[w] = d == null ? void 0 : d[T]));
    });
  }
  const m = Object.assign(Object.assign({}, s), d);
  return Object.keys(m).forEach((h) => {
    m[h] === o[h] && delete m[h];
  }), m;
}, IN = (r, o) => `${[o, r.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function zN(r, o, s) {
  let c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const d = Array.isArray(r) ? r : [r, r], [m] = d, h = d.join("-");
  return (E) => {
    const [T, w, _, k, N] = Js(), {
      getPrefixCls: A,
      iconPrefixCls: P,
      csp: j
    } = Ou(ec), D = A(), W = N ? "css" : "js", V = DN(W), {
      max: z,
      min: I
    } = LN(W), U = {
      theme: T,
      token: k,
      hashId: _,
      nonce: () => j == null ? void 0 : j.nonce,
      clientOnly: c.clientOnly,
      // antd is always at top of styles
      order: c.order || -999
    };
    return t2(Object.assign(Object.assign({}, U), {
      clientOnly: !1,
      path: ["Shared", D]
    }), () => [{
      // Link
      "&": TN(k)
    }]), Y8(P, j), [t2(Object.assign(Object.assign({}, U), {
      path: [h, E, P]
    }), () => {
      if (c.injectStyle === !1)
        return [];
      const {
        token: Q,
        flush: ne
      } = PN(k), ue = Q8(m, w, s), re = `.${E}`, ge = Z8(m, w, ue, {
        deprecatedTokens: c.deprecatedTokens
      });
      N && Object.keys(ue).forEach((se) => {
        ue[se] = `var(${v8(se, IN(m, N.prefix))})`;
      });
      const pe = Gm(Q, {
        componentCls: re,
        prefixCls: E,
        iconCls: `.${P}`,
        antCls: `.${D}`,
        calc: V,
        max: z,
        min: I
      }, N ? ue : ge), te = o(pe, {
        hashId: _,
        prefixCls: E,
        rootPrefixCls: D,
        iconPrefixCls: P
      });
      return ne(m, ge), [c.resetStyle === !1 ? null : RN(pe, E), te];
    }), _];
  };
}
const HN = (r, o, s) => {
  function c(w) {
    return `${r}${w.slice(0, 1).toUpperCase()}${w.slice(1)}`;
  }
  const {
    unitless: d = {},
    injectStyle: m = !0
  } = s != null ? s : {}, h = {
    [c("zIndexPopup")]: !0
  };
  Object.keys(d).forEach((w) => {
    h[c(w)] = d[w];
  });
  const E = (w) => {
    let {
      rootCls: _,
      cssVar: k
    } = w;
    const [, N] = Js();
    return $O({
      path: [r],
      prefix: k.prefix,
      key: k == null ? void 0 : k.key,
      unitless: Object.assign(Object.assign({}, F8), h),
      ignore: B8,
      token: N,
      scope: _
    }, () => {
      const A = Q8(r, N, o), P = Z8(r, N, A, {
        deprecatedTokens: s == null ? void 0 : s.deprecatedTokens
      });
      return Object.keys(A).forEach((j) => {
        P[c(j)] = P[j], delete P[j];
      }), P;
    }), null;
  };
  return (w) => {
    const [, , , , _] = Js();
    return [(k) => m && _ ? /* @__PURE__ */ Oa.createElement(Oa.Fragment, null, /* @__PURE__ */ Oa.createElement(E, {
      rootCls: w,
      cssVar: _,
      component: r
    }), k) : k, _ == null ? void 0 : _.key];
  };
}, $N = (r, o, s, c) => {
  const d = zN(r, o, s, c), m = HN(Array.isArray(r) ? r[0] : r, s, c);
  return function(h) {
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : h;
    const [, T] = d(h), [w, _] = m(E);
    return [w, T, _];
  };
};
function UN(r, o) {
  return Cm.reduce((s, c) => {
    const d = r[`${c}1`], m = r[`${c}3`], h = r[`${c}6`], E = r[`${c}7`];
    return Object.assign(Object.assign({}, s), o(c, {
      lightColor: d,
      lightBorderColor: m,
      darkColor: h,
      textColor: E
    }));
  }, {});
}
const jN = Object.assign({}, S), {
  useId: _S
} = jN, VN = () => "", FN = typeof _S == "undefined" ? VN : _S;
function BN(r, o) {
  var s;
  const c = Bm("ConfigProvider"), d = r || {}, m = d.inherit === !1 || !o ? $8 : o, h = FN();
  if (process.env.NODE_ENV !== "production") {
    const E = d.cssVar || m.cssVar, T = !!(typeof d.cssVar == "object" && (!((s = d.cssVar) === null || s === void 0) && s.key) || h);
    process.env.NODE_ENV !== "production" && c(!E || T, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Rm(() => {
    var E, T;
    if (!r)
      return o;
    const w = Object.assign({}, m.components);
    Object.keys(r.components || {}).forEach((N) => {
      w[N] = Object.assign(Object.assign({}, w[N]), r.components[N]);
    });
    const _ = `css-var-${h.replace(/:/g, "")}`, k = ((E = d.cssVar) !== null && E !== void 0 ? E : m.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: "ant"
    }, typeof m.cssVar == "object" ? m.cssVar : {}), typeof d.cssVar == "object" ? d.cssVar : {}), {
      key: typeof d.cssVar == "object" && ((T = d.cssVar) === null || T === void 0 ? void 0 : T.key) || _
    });
    return Object.assign(Object.assign(Object.assign({}, m), d), {
      token: Object.assign(Object.assign({}, m.token), d.token),
      components: w,
      cssVar: k
    });
  }, [d, m], (E, T) => E.some((w, _) => {
    const k = T[_];
    return !y2(w, k, !0);
  }));
}
function WN(r) {
  const {
    children: o
  } = r, [, s] = Js(), {
    motion: c
  } = s, d = S.useRef(!1);
  return d.current = d.current || c === !1, d.current ? /* @__PURE__ */ S.createElement(u_, {
    motion: c
  }, o) : o;
}
const X8 = /* @__PURE__ */ S.memo((r) => {
  let {
    dropdownMatchSelectWidth: o
  } = r;
  return Bm("ConfigProvider").deprecated(o === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (X8.displayName = "PropWarning");
const KN = process.env.NODE_ENV !== "production" ? X8 : () => null;
var GN = function(r, o) {
  var s = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (s[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (s[c[d]] = r[c[d]]);
  return s;
};
let o2 = !1;
process.env.NODE_ENV;
const qN = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], YN = "ant";
let J8;
function QN() {
  return J8 || YN;
}
function ZN(r) {
  return Object.keys(r).some((o) => o.endsWith("Color"));
}
const XN = (r) => {
  const {
    prefixCls: o,
    iconPrefixCls: s,
    theme: c,
    holderRender: d
  } = r;
  o !== void 0 && (J8 = o), c && ZN(c) && (process.env.NODE_ENV !== "production" && Wm(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), hN(QN(), c));
}, JN = (r) => {
  const {
    children: o,
    csp: s,
    autoInsertSpaceInButton: c,
    alert: d,
    anchor: m,
    form: h,
    locale: E,
    componentSize: T,
    direction: w,
    space: _,
    virtual: k,
    dropdownMatchSelectWidth: N,
    popupMatchSelectWidth: A,
    popupOverflow: P,
    legacyLocale: j,
    parentContext: D,
    iconPrefixCls: W,
    theme: V,
    componentDisabled: z,
    segmented: I,
    statistic: U,
    spin: Y,
    calendar: Q,
    carousel: ne,
    cascader: ue,
    collapse: re,
    typography: ge,
    checkbox: pe,
    descriptions: te,
    divider: se,
    drawer: de,
    skeleton: Ee,
    steps: Me,
    image: xe,
    layout: Le,
    list: Ie,
    mentions: ie,
    modal: he,
    progress: Se,
    result: ze,
    slider: Ke,
    breadcrumb: Ze,
    menu: it,
    pagination: Be,
    input: nt,
    empty: Nt,
    badge: He,
    radio: et,
    rate: Bt,
    switch: we,
    transfer: mt,
    avatar: Dt,
    message: zt,
    tag: $t,
    table: Xe,
    card: _t,
    tabs: gt,
    timeline: Xt,
    timePicker: ot,
    upload: Wt,
    notification: Qt,
    tree: ut,
    colorPicker: Gt,
    datePicker: Wn,
    rangePicker: qt,
    flex: en,
    wave: ye,
    dropdown: Ne,
    warning: We
  } = r, xt = S.useCallback(($e, bt) => {
    const {
      prefixCls: Oe
    } = r;
    if (bt)
      return bt;
    const Ge = Oe || D.getPrefixCls("");
    return $e ? `${Ge}-${$e}` : Ge;
  }, [D.getPrefixCls, r.prefixCls]), Mt = W || D.iconPrefixCls || j8, rt = s || D.csp;
  Y8(Mt, rt);
  const st = BN(V, D.theme);
  process.env.NODE_ENV !== "production" && (o2 = o2 || !!st);
  const on = {
    csp: rt,
    autoInsertSpaceInButton: c,
    alert: d,
    anchor: m,
    locale: E || j,
    direction: w,
    space: _,
    virtual: k,
    popupMatchSelectWidth: A != null ? A : N,
    popupOverflow: P,
    getPrefixCls: xt,
    iconPrefixCls: Mt,
    theme: st,
    segmented: I,
    statistic: U,
    spin: Y,
    calendar: Q,
    carousel: ne,
    cascader: ue,
    collapse: re,
    typography: ge,
    checkbox: pe,
    descriptions: te,
    divider: se,
    drawer: de,
    skeleton: Ee,
    steps: Me,
    image: xe,
    input: nt,
    layout: Le,
    list: Ie,
    mentions: ie,
    modal: he,
    progress: Se,
    result: ze,
    slider: Ke,
    breadcrumb: Ze,
    menu: it,
    pagination: Be,
    empty: Nt,
    badge: He,
    radio: et,
    rate: Bt,
    switch: we,
    transfer: mt,
    avatar: Dt,
    message: zt,
    tag: $t,
    table: Xe,
    card: _t,
    tabs: gt,
    timeline: Xt,
    timePicker: ot,
    upload: Wt,
    notification: Qt,
    tree: ut,
    colorPicker: Gt,
    datePicker: Wn,
    rangePicker: qt,
    flex: en,
    wave: ye,
    dropdown: Ne,
    warning: We
  }, Ot = Object.assign({}, D);
  Object.keys(on).forEach(($e) => {
    on[$e] !== void 0 && (Ot[$e] = on[$e]);
  }), qN.forEach(($e) => {
    const bt = r[$e];
    bt && (Ot[$e] = bt);
  });
  const Ut = Rm(() => Ot, Ot, ($e, bt) => {
    const Oe = Object.keys($e), Ge = Object.keys(bt);
    return Oe.length !== Ge.length || Oe.some((Lt) => $e[Lt] !== bt[Lt]);
  }), ir = S.useMemo(() => ({
    prefixCls: Mt,
    csp: rt
  }), [Mt, rt]);
  let Ft = /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(KN, {
    dropdownMatchSelectWidth: N
  }), o);
  const dn = S.useMemo(() => {
    var $e, bt, Oe, Ge;
    return BO((($e = Km.Form) === null || $e === void 0 ? void 0 : $e.defaultValidateMessages) || {}, ((Oe = (bt = Ut.locale) === null || bt === void 0 ? void 0 : bt.Form) === null || Oe === void 0 ? void 0 : Oe.defaultValidateMessages) || {}, ((Ge = Ut.form) === null || Ge === void 0 ? void 0 : Ge.validateMessages) || {}, (h == null ? void 0 : h.validateMessages) || {});
  }, [Ut, h == null ? void 0 : h.validateMessages]);
  Object.keys(dn).length > 0 && (Ft = /* @__PURE__ */ S.createElement(KO.Provider, {
    value: dn
  }, Ft)), E && (Ft = /* @__PURE__ */ S.createElement(JO, {
    locale: E,
    _ANT_MARK__: P8
  }, Ft)), (Mt || rt) && (Ft = /* @__PURE__ */ S.createElement(k2.Provider, {
    value: ir
  }, Ft)), T && (Ft = /* @__PURE__ */ S.createElement(yN, {
    size: T
  }, Ft)), Ft = /* @__PURE__ */ S.createElement(WN, null, Ft);
  const jt = S.useMemo(() => {
    const $e = st || {}, {
      algorithm: bt,
      token: Oe,
      components: Ge,
      cssVar: Lt
    } = $e, mn = GN($e, ["algorithm", "token", "components", "cssVar"]), Ln = bt && (!Array.isArray(bt) || bt.length > 0) ? q5(bt) : H8, gn = {};
    Object.entries(Ge || {}).forEach((qr) => {
      let [An, Kt] = qr;
      const Fn = Object.assign({}, Kt);
      "algorithm" in Fn && (Fn.algorithm === !0 ? Fn.theme = Ln : (Array.isArray(Fn.algorithm) || typeof Fn.algorithm == "function") && (Fn.theme = q5(Fn.algorithm)), delete Fn.algorithm), gn[An] = Fn;
    });
    const oa = Object.assign(Object.assign({}, Xv), Oe);
    return Object.assign(Object.assign({}, mn), {
      theme: Ln,
      token: oa,
      components: gn,
      override: Object.assign({
        override: oa
      }, gn),
      cssVar: Lt
    });
  }, [st]);
  return V && (Ft = /* @__PURE__ */ S.createElement(U8.Provider, {
    value: jt
  }, Ft)), Ut.warning && (Ft = /* @__PURE__ */ S.createElement(D8.Provider, {
    value: Ut.warning
  }, Ft)), z !== void 0 && (Ft = /* @__PURE__ */ S.createElement(mN, {
    disabled: z
  }, Ft)), /* @__PURE__ */ S.createElement(ec.Provider, {
    value: Ut
  }, Ft);
}, Pf = (r) => {
  const o = S.useContext(ec), s = S.useContext(A8);
  return /* @__PURE__ */ S.createElement(JN, Object.assign({
    parentContext: o,
    legacyLocale: s
  }, r));
};
Pf.ConfigContext = ec;
Pf.SizeContext = P2;
Pf.config = XN;
Pf.useConfig = CN;
Object.defineProperty(Pf, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Wm(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), P2)
});
process.env.NODE_ENV !== "production" && (Pf.displayName = "ConfigProvider");
const eD = /* @__PURE__ */ S.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});
var tD = function(r, o) {
  var s = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (s[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (s[c[d]] = r[c[d]]);
  return s;
};
const MS = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, e9 = /* @__PURE__ */ S.createContext({}), nD = /* @__PURE__ */ (() => {
  let r = 0;
  return function() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return r += 1, `${o}${r}`;
  };
})(), rD = /* @__PURE__ */ S.forwardRef((r, o) => {
  const {
    prefixCls: s,
    className: c,
    trigger: d,
    children: m,
    defaultCollapsed: h = !1,
    theme: E = "dark",
    style: T = {},
    collapsible: w = !1,
    reverseArrow: _ = !1,
    width: k = 200,
    collapsedWidth: N = 80,
    zeroWidthTriggerStyle: A,
    breakpoint: P,
    onCollapse: j,
    onBreakpoint: D
  } = r, W = tD(r, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), {
    siderHook: V
  } = Ou(eD), [z, I] = Wo("collapsed" in r ? r.collapsed : h), [U, Y] = Wo(!1);
  Bo(() => {
    "collapsed" in r && I(r.collapsed);
  }, [r.collapsed]);
  const Q = (te, se) => {
    "collapsed" in r || I(te), j == null || j(te, se);
  }, ne = Ma();
  ne.current = (te) => {
    Y(te.matches), D == null || D(te.matches), z !== te.matches && Q(te.matches, "responsive");
  }, Bo(() => {
    function te(de) {
      return ne.current(de);
    }
    let se;
    if (typeof window != "undefined") {
      const {
        matchMedia: de
      } = window;
      if (de && P && P in MS) {
        se = de(`screen and (max-width: ${MS[P]})`);
        try {
          se.addEventListener("change", te);
        } catch (Ee) {
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
  }, [P]), Bo(() => {
    const te = nD("ant-sider-");
    return V.addSider(te), () => V.removeSider(te);
  }, []);
  const ue = () => {
    Q(!z, "clickTrigger");
  }, {
    getPrefixCls: re
  } = Ou(ec), ge = () => {
    const te = re("layout-sider", s), se = Am(W, ["collapsed"]), de = z ? N : k, Ee = NM(de) ? `${de}px` : String(de), Me = parseFloat(String(N || 0)) === 0 ? /* @__PURE__ */ S.createElement("span", {
      onClick: ue,
      className: wn(`${te}-zero-width-trigger`, `${te}-zero-width-trigger-${_ ? "right" : "left"}`),
      style: A
    }, d || /* @__PURE__ */ S.createElement(RM, null)) : null, Ie = {
      expanded: _ ? /* @__PURE__ */ S.createElement(hS, null) : /* @__PURE__ */ S.createElement(pS, null),
      collapsed: _ ? /* @__PURE__ */ S.createElement(pS, null) : /* @__PURE__ */ S.createElement(hS, null)
    }[z ? "collapsed" : "expanded"], ie = d !== null ? Me || /* @__PURE__ */ S.createElement("div", {
      className: `${te}-trigger`,
      onClick: ue,
      style: {
        width: Ee
      }
    }, d || Ie) : null, he = Object.assign(Object.assign({}, T), {
      flex: `0 0 ${Ee}`,
      maxWidth: Ee,
      minWidth: Ee,
      width: Ee
    }), Se = wn(te, `${te}-${E}`, {
      [`${te}-collapsed`]: !!z,
      [`${te}-has-trigger`]: w && d !== null && !Me,
      [`${te}-below`]: !!U,
      [`${te}-zero-width`]: parseFloat(Ee) === 0
    }, c);
    return /* @__PURE__ */ S.createElement("aside", Object.assign({
      className: Se
    }, se, {
      style: he,
      ref: o
    }), /* @__PURE__ */ S.createElement("div", {
      className: `${te}-children`
    }, m), w || U && Me ? ie : null);
  }, pe = S.useMemo(() => ({
    siderCollapsed: z
  }), [z]);
  return /* @__PURE__ */ S.createElement(e9.Provider, {
    value: pe
  }, ge());
});
process.env.NODE_ENV !== "production" && (rD.displayName = "Sider");
function t9(r) {
  var o = r.children, s = r.prefixCls, c = r.id, d = r.overlayInnerStyle, m = r.className, h = r.style;
  return /* @__PURE__ */ S.createElement("div", {
    className: wn("".concat(s, "-content"), m),
    style: h
  }, /* @__PURE__ */ S.createElement("div", {
    className: "".concat(s, "-inner"),
    id: c,
    role: "tooltip",
    style: d
  }, typeof o == "function" ? o() : o));
}
var bf = {
  shiftX: 64,
  adjustY: 1
}, Sf = {
  adjustX: 1,
  shiftY: !0
}, yi = [0, 0], aD = {
  left: {
    points: ["cr", "cl"],
    overflow: Sf,
    offset: [-4, 0],
    targetOffset: yi
  },
  right: {
    points: ["cl", "cr"],
    overflow: Sf,
    offset: [4, 0],
    targetOffset: yi
  },
  top: {
    points: ["bc", "tc"],
    overflow: bf,
    offset: [0, -4],
    targetOffset: yi
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: bf,
    offset: [0, 4],
    targetOffset: yi
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: bf,
    offset: [0, -4],
    targetOffset: yi
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Sf,
    offset: [-4, 0],
    targetOffset: yi
  },
  topRight: {
    points: ["br", "tr"],
    overflow: bf,
    offset: [0, -4],
    targetOffset: yi
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Sf,
    offset: [4, 0],
    targetOffset: yi
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: bf,
    offset: [0, 4],
    targetOffset: yi
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Sf,
    offset: [4, 0],
    targetOffset: yi
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: bf,
    offset: [0, 4],
    targetOffset: yi
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Sf,
    offset: [-4, 0],
    targetOffset: yi
  }
}, iD = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], oD = function(o, s) {
  var c = o.overlayClassName, d = o.trigger, m = d === void 0 ? ["hover"] : d, h = o.mouseEnterDelay, E = h === void 0 ? 0 : h, T = o.mouseLeaveDelay, w = T === void 0 ? 0.1 : T, _ = o.overlayStyle, k = o.prefixCls, N = k === void 0 ? "rc-tooltip" : k, A = o.children, P = o.onVisibleChange, j = o.afterVisibleChange, D = o.transitionName, W = o.animation, V = o.motion, z = o.placement, I = z === void 0 ? "right" : z, U = o.align, Y = U === void 0 ? {} : U, Q = o.destroyTooltipOnHide, ne = Q === void 0 ? !1 : Q, ue = o.defaultVisible, re = o.getTooltipContainer, ge = o.overlayInnerStyle;
  o.arrowContent;
  var pe = o.overlay, te = o.id, se = o.showArrow, de = se === void 0 ? !0 : se, Ee = Vn(o, iD), Me = Ma(null);
  WS(s, function() {
    return Me.current;
  });
  var xe = Re({}, Ee);
  "visible" in o && (xe.popupVisible = o.visible);
  var Le = function() {
    return /* @__PURE__ */ S.createElement(t9, {
      key: "content",
      prefixCls: N,
      id: te,
      overlayInnerStyle: ge
    }, pe);
  };
  return /* @__PURE__ */ S.createElement(X3, an({
    popupClassName: c,
    prefixCls: N,
    popup: Le,
    action: m,
    builtinPlacements: aD,
    popupPlacement: I,
    ref: Me,
    popupAlign: Y,
    getPopupContainer: re,
    onPopupVisibleChange: P,
    afterPopupVisibleChange: j,
    popupTransitionName: D,
    popupAnimation: W,
    popupMotion: V,
    defaultPopupVisible: ue,
    autoDestroy: ne,
    mouseLeaveDelay: w,
    popupStyle: _,
    mouseEnterDelay: E,
    arrow: de
  }, xe), A);
};
const lD = /* @__PURE__ */ tR(oD), n9 = /* @__PURE__ */ Oa.createContext(void 0);
process.env.NODE_ENV !== "production" && (n9.displayName = "zIndexContext");
const r9 = n9, Gs = 100, uD = 10, sD = Gs * uD, a9 = {
  Modal: Gs,
  Drawer: Gs,
  Popover: Gs,
  Popconfirm: Gs,
  Tooltip: Gs,
  Tour: Gs
}, cD = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function fD(r) {
  return r in a9;
}
function dD(r, o) {
  const [, s] = Js(), c = Oa.useContext(r9), d = fD(r);
  if (o !== void 0)
    return [o, o];
  let m = c != null ? c : 0;
  return d ? (m += // Use preset token zIndex by default but not stack when has parent container
  (c ? 0 : s.zIndexPopupBase) + // Container offset
  a9[r], m = Math.min(m, s.zIndexPopupBase + sD)) : m += cD[r], [c === void 0 ? o : m, m];
}
const vD = (r, o, s) => s !== void 0 ? s : `${r}-${o}`;
function pD(r) {
  const {
    sizePopupArrow: o,
    borderRadiusXS: s,
    borderRadiusOuter: c
  } = r, d = o / 2, m = 0, h = d, E = c * 1 / Math.sqrt(2), T = d - c * (1 - 1 / Math.sqrt(2)), w = d - s * (1 / Math.sqrt(2)), _ = c * (Math.sqrt(2) - 1) + s * (1 / Math.sqrt(2)), k = 2 * d - w, N = _, A = 2 * d - E, P = T, j = 2 * d - m, D = h, W = d * Math.sqrt(2) + c * (Math.sqrt(2) - 2), V = c * (Math.sqrt(2) - 1), z = `polygon(${V}px 100%, 50% ${V}px, ${2 * d - V}px 100%, ${V}px 100%)`, I = `path('M ${m} ${h} A ${c} ${c} 0 0 0 ${E} ${T} L ${w} ${_} A ${s} ${s} 0 0 1 ${k} ${N} L ${A} ${P} A ${c} ${c} 0 0 0 ${j} ${D} Z')`;
  return {
    arrowShadowWidth: W,
    arrowPath: I,
    arrowPolygon: z
  };
}
const hD = (r, o, s) => {
  const {
    sizePopupArrow: c,
    arrowPolygon: d,
    arrowPath: m,
    arrowShadowWidth: h,
    borderRadiusXS: E,
    calc: T
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
      height: T(c).div(2).equal(),
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
        value: `0 0 ${Yv(E)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: s,
      zIndex: 0,
      background: "transparent"
    }
  };
}, i9 = 8;
function o9(r) {
  const {
    contentRadius: o,
    limitVerticalRadius: s
  } = r, c = o > 12 ? o + 2 : 12;
  return {
    arrowOffsetHorizontal: c,
    arrowOffsetVertical: s ? i9 : c
  };
}
function nm(r, o) {
  return r ? o : {};
}
function mD(r, o, s) {
  const {
    componentCls: c,
    boxShadowPopoverArrow: d,
    arrowOffsetVertical: m,
    arrowOffsetHorizontal: h
  } = r, {
    arrowDistance: E = 0,
    arrowPlacement: T = {
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
      }, hD(r, o, d)), {
        "&:before": {
          background: o
        }
      })]
    }, nm(!!T.top, {
      [[`&-placement-top > ${c}-arrow`, `&-placement-topLeft > ${c}-arrow`, `&-placement-topRight > ${c}-arrow`].join(",")]: {
        bottom: E,
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
    })), nm(!!T.bottom, {
      [[`&-placement-bottom > ${c}-arrow`, `&-placement-bottomLeft > ${c}-arrow`, `&-placement-bottomRight > ${c}-arrow`].join(",")]: {
        top: E,
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
    })), nm(!!T.left, {
      [[`&-placement-left > ${c}-arrow`, `&-placement-leftTop > ${c}-arrow`, `&-placement-leftBottom > ${c}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: E
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
    })), nm(!!T.right, {
      [[`&-placement-right > ${c}-arrow`, `&-placement-rightTop > ${c}-arrow`, `&-placement-rightBottom > ${c}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: E
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
function gD(r, o, s, c) {
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
const OS = {
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
}, yD = {
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
}, CD = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function bD(r) {
  const {
    arrowWidth: o,
    autoAdjustOverflow: s,
    arrowPointAtCenter: c,
    offset: d,
    borderRadius: m,
    visibleFirst: h
  } = r, E = o / 2, T = {};
  return Object.keys(OS).forEach((w) => {
    const _ = c && yD[w] || OS[w], k = Object.assign(Object.assign({}, _), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (T[w] = k, CD.has(w) && (k.autoArrow = !1), w) {
      case "top":
      case "topLeft":
      case "topRight":
        k.offset[1] = -E - d;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        k.offset[1] = E + d;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        k.offset[0] = -E - d;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        k.offset[0] = E + d;
        break;
    }
    const N = o9({
      contentRadius: m,
      limitVerticalRadius: !0
    });
    if (c)
      switch (w) {
        case "topLeft":
        case "bottomLeft":
          k.offset[0] = -N.arrowOffsetHorizontal - E;
          break;
        case "topRight":
        case "bottomRight":
          k.offset[0] = N.arrowOffsetHorizontal + E;
          break;
        case "leftTop":
        case "rightTop":
          k.offset[1] = -N.arrowOffsetHorizontal - E;
          break;
        case "leftBottom":
        case "rightBottom":
          k.offset[1] = N.arrowOffsetHorizontal + E;
          break;
      }
    k.overflow = gD(w, N, o, s), h && (k.htmlRegion = "visibleFirst");
  }), T;
}
const {
  isValidElement: Jv
} = S;
function SD(r) {
  return r && Jv(r) && r.type === S.Fragment;
}
function ED(r, o, s) {
  return Jv(r) ? /* @__PURE__ */ S.cloneElement(r, typeof s == "function" ? s(r.props || {}) : s) : o;
}
function l9(r, o) {
  return ED(r, r, o);
}
const wD = /* @__PURE__ */ S.createContext(null), xD = (r) => {
  let {
    children: o
  } = r;
  return /* @__PURE__ */ S.createElement(wD.Provider, {
    value: null
  }, o);
}, TD = (r) => ({
  animationDuration: r,
  animationFillMode: "both"
}), RD = (r) => ({
  animationDuration: r,
  animationFillMode: "both"
}), kD = function(r, o, s, c) {
  const m = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${m}${r}-enter,
      ${m}${r}-appear
    `]: Object.assign(Object.assign({}, TD(c)), {
      animationPlayState: "paused"
    }),
    [`${m}${r}-leave`]: Object.assign(Object.assign({}, RD(c)), {
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
}, _D = new Si("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), MD = new Si("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), NS = new Si("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), DS = new Si("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), OD = new Si("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), ND = new Si("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), DD = new Si("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), LD = new Si("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), AD = new Si("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), PD = new Si("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), ID = new Si("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), zD = new Si("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), HD = {
  zoom: {
    inKeyframes: _D,
    outKeyframes: MD
  },
  "zoom-big": {
    inKeyframes: NS,
    outKeyframes: DS
  },
  "zoom-big-fast": {
    inKeyframes: NS,
    outKeyframes: DS
  },
  "zoom-left": {
    inKeyframes: DD,
    outKeyframes: LD
  },
  "zoom-right": {
    inKeyframes: AD,
    outKeyframes: PD
  },
  "zoom-up": {
    inKeyframes: OD,
    outKeyframes: ND
  },
  "zoom-down": {
    inKeyframes: ID,
    outKeyframes: zD
  }
}, $D = (r, o) => {
  const {
    antCls: s
  } = r, c = `${s}-${o}`, {
    inKeyframes: d,
    outKeyframes: m
  } = HD[o];
  return [kD(c, d, m, o === "zoom-big-fast" ? r.motionDurationFast : r.motionDurationMid), {
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
}, UD = (r) => {
  const {
    componentCls: o,
    // ant-tooltip
    tooltipMaxWidth: s,
    tooltipColor: c,
    tooltipBg: d,
    tooltipBorderRadius: m,
    zIndexPopup: h,
    controlHeight: E,
    boxShadowSecondary: T,
    paddingSM: w,
    paddingXS: _
  } = r;
  return [
    {
      [o]: Object.assign(Object.assign(Object.assign(Object.assign({}, wN(r)), {
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
          minWidth: E,
          minHeight: E,
          padding: `${Yv(r.calc(w).div(2).equal())} ${Yv(_)}`,
          color: c,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: d,
          borderRadius: m,
          boxShadow: T,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${o}-inner`]: {
            borderRadius: r.min(m, i9)
          }
        },
        [`${o}-content`]: {
          position: "relative"
        }
      }), UN(r, (k, N) => {
        let {
          darkColor: A
        } = N;
        return {
          [`&${o}-${k}`]: {
            [`${o}-inner`]: {
              backgroundColor: A
            },
            [`${o}-arrow`]: {
              "--antd-arrow-background-color": A
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
    mD(r, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${o}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: r.sizePopupArrow
      }
    }
  ];
}, jD = (r) => Object.assign(Object.assign({
  zIndexPopup: r.zIndexPopupBase + 70
}, o9({
  contentRadius: r.borderRadius,
  limitVerticalRadius: !0
})), pD(Gm(r, {
  borderRadiusOuter: Math.min(r.borderRadiusOuter, 4)
}))), u9 = function(r) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return $N("Tooltip", (c) => {
    const {
      borderRadius: d,
      colorTextLightSolid: m,
      colorBgSpotlight: h
    } = c, E = Gm(c, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: m,
      tooltipBorderRadius: d,
      tooltipBg: h
    });
    return [UD(E), $D(c, "zoom-big-fast")];
  }, jD, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: o
  })(r);
}, VD = Cm.map((r) => `${r}-inverse`);
function FD(r) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(ar(VD), ar(Cm)).includes(r) : Cm.includes(r);
}
function s9(r, o) {
  const s = FD(o), c = wn({
    [`${r}-${o}`]: o && s
  }), d = {}, m = {};
  return o && !s && (d.background = o, m["--antd-arrow-background-color"] = o), {
    className: c,
    overlayStyle: d,
    arrowStyle: m
  };
}
const BD = (r) => {
  const {
    prefixCls: o,
    className: s,
    placement: c = "top",
    title: d,
    color: m,
    overlayInnerStyle: h
  } = r, {
    getPrefixCls: E
  } = S.useContext(ec), T = E("tooltip", o), [w, _, k] = u9(T), N = s9(T, m), A = N.arrowStyle, P = Object.assign(Object.assign({}, h), N.overlayStyle), j = wn(_, k, T, `${T}-pure`, `${T}-placement-${c}`, s, N.className);
  return w(/* @__PURE__ */ S.createElement("div", {
    className: j,
    style: A
  }, /* @__PURE__ */ S.createElement("div", {
    className: `${T}-arrow`
  }), /* @__PURE__ */ S.createElement(t9, Object.assign({}, r, {
    className: _,
    prefixCls: T,
    overlayInnerStyle: P
  }), d)));
}, WD = BD;
var KD = function(r, o) {
  var s = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (s[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (s[c[d]] = r[c[d]]);
  return s;
};
const I2 = /* @__PURE__ */ S.forwardRef((r, o) => {
  var s, c;
  const {
    prefixCls: d,
    openClassName: m,
    getTooltipContainer: h,
    overlayClassName: E,
    color: T,
    overlayInnerStyle: w,
    children: _,
    afterOpenChange: k,
    afterVisibleChange: N,
    destroyTooltipOnHide: A,
    arrow: P = !0,
    title: j,
    overlay: D,
    builtinPlacements: W,
    arrowPointAtCenter: V = !1,
    autoAdjustOverflow: z = !0
  } = r, I = !!P, [, U] = Js(), {
    getPopupContainer: Y,
    getPrefixCls: Q,
    direction: ne
  } = S.useContext(ec), ue = Bm("Tooltip"), re = S.useRef(null), ge = () => {
    var ot;
    (ot = re.current) === null || ot === void 0 || ot.forceAlign();
  };
  S.useImperativeHandle(o, () => ({
    forceAlign: ge,
    forcePopupAlign: () => {
      ue.deprecated(!1, "forcePopupAlign", "forceAlign"), ge();
    }
  })), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((ot) => {
    let [Wt, Qt] = ot;
    ue.deprecated(!(Wt in r), Wt, Qt);
  }), process.env.NODE_ENV !== "production" && ue(!A || typeof A == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && ue(!P || typeof P == "boolean" || !("arrowPointAtCenter" in P), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [pe, te] = jv(!1, {
    value: (s = r.open) !== null && s !== void 0 ? s : r.visible,
    defaultValue: (c = r.defaultOpen) !== null && c !== void 0 ? c : r.defaultVisible
  }), se = !j && !D && j !== 0, de = (ot) => {
    var Wt, Qt;
    te(se ? !1 : ot), se || ((Wt = r.onOpenChange) === null || Wt === void 0 || Wt.call(r, ot), (Qt = r.onVisibleChange) === null || Qt === void 0 || Qt.call(r, ot));
  }, Ee = S.useMemo(() => {
    var ot, Wt;
    let Qt = V;
    return typeof P == "object" && (Qt = (Wt = (ot = P.pointAtCenter) !== null && ot !== void 0 ? ot : P.arrowPointAtCenter) !== null && Wt !== void 0 ? Wt : V), W || bD({
      arrowPointAtCenter: Qt,
      autoAdjustOverflow: z,
      arrowWidth: I ? U.sizePopupArrow : 0,
      borderRadius: U.borderRadius,
      offset: U.marginXXS,
      visibleFirst: !0
    });
  }, [V, P, W, U]), Me = S.useMemo(() => j === 0 ? j : D || j || "", [D, j]), xe = /* @__PURE__ */ S.createElement(xD, null, typeof Me == "function" ? Me() : Me), {
    getPopupContainer: Le,
    placement: Ie = "top",
    mouseEnterDelay: ie = 0.1,
    mouseLeaveDelay: he = 0.1,
    overlayStyle: Se,
    rootClassName: ze
  } = r, Ke = KD(r, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), Ze = Q("tooltip", d), it = Q(), Be = r["data-popover-inject"];
  let nt = pe;
  !("open" in r) && !("visible" in r) && se && (nt = !1);
  const Nt = Jv(_) && !SD(_) ? _ : /* @__PURE__ */ S.createElement("span", null, _), He = Nt.props, et = !He.className || typeof He.className == "string" ? wn(He.className, m || `${Ze}-open`) : He.className, [Bt, we, mt] = u9(Ze, !Be), Dt = s9(Ze, T), zt = Dt.arrowStyle, $t = Object.assign(Object.assign({}, w), Dt.overlayStyle), Xe = wn(E, {
    [`${Ze}-rtl`]: ne === "rtl"
  }, Dt.className, ze, we, mt), [_t, gt] = dD("Tooltip", Ke.zIndex), Xt = /* @__PURE__ */ S.createElement(lD, Object.assign({}, Ke, {
    zIndex: _t,
    showArrow: I,
    placement: Ie,
    mouseEnterDelay: ie,
    mouseLeaveDelay: he,
    prefixCls: Ze,
    overlayClassName: Xe,
    overlayStyle: Object.assign(Object.assign({}, zt), Se),
    getTooltipContainer: Le || h || Y,
    ref: re,
    builtinPlacements: Ee,
    overlay: xe,
    visible: nt,
    onVisibleChange: de,
    afterVisibleChange: k != null ? k : N,
    overlayInnerStyle: $t,
    arrowContent: /* @__PURE__ */ S.createElement("span", {
      className: `${Ze}-arrow-content`
    }),
    motion: {
      motionName: vD(it, "zoom-big-fast", r.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!A
  }), nt ? l9(Nt, {
    className: et
  }) : Nt);
  return Bt(/* @__PURE__ */ S.createElement(r9.Provider, {
    value: gt
  }, Xt));
});
process.env.NODE_ENV !== "production" && (I2.displayName = "Tooltip");
I2._InternalPanelDoNotUseOrYouWillBeFired = WD;
const GD = I2, qD = /* @__PURE__ */ Sm({
  prefixCls: "",
  firstLevel: !0,
  inlineCollapsed: !1
}), YD = qD, QD = (r) => {
  var o;
  const {
    className: s,
    children: c,
    icon: d,
    title: m,
    danger: h
  } = r, {
    prefixCls: E,
    firstLevel: T,
    direction: w,
    disableMenuItemTitleTooltip: _,
    inlineCollapsed: k
  } = S.useContext(YD), N = (V) => {
    const z = /* @__PURE__ */ S.createElement("span", {
      className: `${E}-title-content`
    }, c);
    return (!d || Jv(c) && c.type === "span") && c && V && T && typeof c == "string" ? /* @__PURE__ */ S.createElement("div", {
      className: `${E}-inline-collapsed-noicon`
    }, c.charAt(0)) : z;
  }, {
    siderCollapsed: A
  } = S.useContext(e9);
  let P = m;
  typeof m == "undefined" ? P = T ? c : "" : m === !1 && (P = "");
  const j = {
    title: P
  };
  !A && !k && (j.title = null, j.open = !1);
  const D = Wv(c).length;
  let W = /* @__PURE__ */ S.createElement(Pm, Object.assign({}, Am(r, ["title", "icon", "danger"]), {
    className: wn({
      [`${E}-item-danger`]: h,
      [`${E}-item-only-child`]: (d ? D + 1 : D) === 1
    }, s),
    title: typeof m == "string" ? m : void 0
  }), l9(d, {
    className: wn(Jv(d) ? (o = d.props) === null || o === void 0 ? void 0 : o.className : "", `${E}-item-icon`)
  }), N(k));
  return _ || (W = /* @__PURE__ */ S.createElement(GD, Object.assign({}, j, {
    placement: w === "rtl" ? "left" : "right",
    overlayClassName: `${E}-inline-collapsed-tooltip`
  }), W)), W;
}, tA = QD, c9 = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(ZT, be({}, r)) }), nA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(XT, be({}, r)) }), rA = (r) => /* @__PURE__ */ B(Qe, { children: /* @__PURE__ */ B(JT, be({}, r)) });
function z2(r) {
  var o;
  return /* @__PURE__ */ va(Ll, { vertical: !0, className: "globalNavigation__icon " + ((o = r.className) != null ? o : ""), onClick: r.onClick, children: [
    r.icon,
    !r.hideLabel && /* @__PURE__ */ B("span", { className: "globalNavigation__iconLabel", children: r.label })
  ] });
}
function ZD(r) {
  return /* @__PURE__ */ va(Ll, { vertical: !0, className: "globalNavigation__suiteLogo", onClick: r.onSuiteLogoClick, children: [
    /* @__PURE__ */ B(z2, { icon: r.icon, label: "", hideLabel: !0, className: "globalNavigation__icon--suiteLogo" }),
    r.label
  ] });
}
const XD = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", id: "search-colorable" }, r), /* @__PURE__ */ S.createElement("path", { d: "M16.8004 10.2004C16.8004 9.33367 16.6297 8.47543 16.298 7.67468C15.9663 6.87393 15.4802 6.14635 14.8673 5.53349C14.2544 4.92062 13.5268 4.43447 12.7261 4.10279C11.9254 3.7711 11.0671 3.60039 10.2004 3.60039C9.33367 3.60039 8.47543 3.7711 7.67468 4.10279C6.87393 4.43447 6.14635 4.92062 5.53349 5.53349C4.92062 6.14635 4.43447 6.87393 4.10279 7.67468C3.7711 8.47543 3.60039 9.33367 3.60039 10.2004C3.60039 11.0671 3.7711 11.9254 4.10279 12.7261C4.43447 13.5268 4.92062 14.2544 5.53349 14.8673C6.14635 15.4802 6.87393 15.9663 7.67468 16.298C8.47543 16.6297 9.33367 16.8004 10.2004 16.8004C11.0671 16.8004 11.9254 16.6297 12.7261 16.298C13.5268 15.9663 14.2544 15.4802 14.8673 14.8673C15.4802 14.2544 15.9663 13.5268 16.298 12.7261C16.6297 11.9254 16.8004 11.0671 16.8004 10.2004ZM15.2741 16.1254C13.9129 17.2954 12.1391 18.0004 10.2004 18.0004C5.89164 18.0004 2.40039 14.5091 2.40039 10.2004C2.40039 5.89164 5.89164 2.40039 10.2004 2.40039C14.5091 2.40039 18.0004 5.89164 18.0004 10.2004C18.0004 12.1391 17.2954 13.9129 16.1254 15.2741L21.4241 20.5766C21.6566 20.8091 21.6566 21.1916 21.4241 21.4241C21.1916 21.6566 20.8091 21.6566 20.5766 21.4241L15.2741 16.1254Z", fill: "currentColor" }));
function JD(r) {
  return /* @__PURE__ */ B("span", { className: "globalNavigation__search", onClick: r.onClick, children: /* @__PURE__ */ B(
    xm,
    {
      placement: "right",
      title: /* @__PURE__ */ va(bR, { size: "large", children: [
        /* @__PURE__ */ B(Mu, { children: "Search" }),
        /* @__PURE__ */ B(Mu, { children: "Ctrl + K" })
      ] }),
      children: /* @__PURE__ */ B(Ll, { className: "globalNavigation__searchButtonWrapper", children: /* @__PURE__ */ B(Em, { className: "globalNavigation__searchButton", shape: "round", icon: /* @__PURE__ */ B(XD, { className: "globalNavigation__searchIcon" }) }) })
    }
  ) });
}
function eL(r) {
  return /* @__PURE__ */ va(Mu, { children: [
    r.type === "link" && /* @__PURE__ */ B(xm, { title: r.hideLabel ? r.label : void 0, placement: "right", children: /* @__PURE__ */ B(
      z2,
      {
        className: `globalNavigation__item ${r.isActive ? " globalNavigation__item--active" : ""}`,
        icon: r.icon,
        label: r.label,
        onClick: r.onClick,
        hideLabel: r.hideLabel
      }
    ) }),
    r.type === "menu" && /* @__PURE__ */ B(l2, { items: r.items })
  ] });
}
function l2(r) {
  return /* @__PURE__ */ B(Ll, { vertical: !0, children: r.items.map((o, s) => /* @__PURE__ */ va(nR, { children: [
    o.type === "link" && /* @__PURE__ */ rR(eL, gi(be({}, o), { key: s })),
    o.type === "menu" && /* @__PURE__ */ B(
      c9,
      {
        expandIcon: o.isNestedMenu ? !0 : null,
        items: [tL(o, s)],
        className: "globalNavigation__menu"
      },
      s
    )
  ] }, s)) });
}
function tL(r, o) {
  let s;
  return r.type === "menu" && r.children && (s = r.children.map((c, d) => be({
    expandIcon: c.isNestedMenu ? !0 : null,
    key: `${String(c.label)}${d}`
  }, c)), s.unshift({ label: r.label, type: "group", key: r.label + "_groupTitle" })), {
    icon: /* @__PURE__ */ B(
      z2,
      {
        icon: r.icon,
        label: r.label,
        onClick: r.onClick,
        hideLabel: r.hideLabel
      }
    ),
    popupClassName: "globalNavigation__popup",
    className: "globalNavigation__item" + (r.isActive ? " globalNavigation__item--active" : ""),
    key: `${r.label}${o}`,
    children: s
  };
}
const nL = (r) => /* @__PURE__ */ S.createElement("svg", be({ xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24" }, r), /* @__PURE__ */ S.createElement("title", null, "lock"), /* @__PURE__ */ S.createElement("g", { strokeLinecap: "square", strokeLinejoin: "miter", strokeWidth: 1, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" }, /* @__PURE__ */ S.createElement("path", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, d: "M12,1L12,1 C9.2,1,7,3.2,7,6v3h10V6C17,3.2,14.8,1,12,1z" }), /* @__PURE__ */ S.createElement("rect", { x: 4, y: 9, fill: "none", stroke: "currentColor", strokeMiterlimit: 10, width: 16, height: 14 }), /* @__PURE__ */ S.createElement("circle", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, cx: 12, cy: 15, r: 2 }), /* @__PURE__ */ S.createElement("line", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, x1: 12, y1: 17, x2: 12, y2: 19 }))), rL = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", id: "add-colorable" }, r), `>
    `, /* @__PURE__ */ S.createElement("path", { d: "M12.5992 4.8002C12.5992 4.4702 12.3292 4.2002 11.9992 4.2002C11.6692 4.2002 11.3992 4.4702 11.3992 4.8002V11.4002H4.79922C4.46922 11.4002 4.19922 11.6702 4.19922 12.0002C4.19922 12.3302 4.46922 12.6002 4.79922 12.6002H11.3992V19.2002C11.3992 19.5302 11.6692 19.8002 11.9992 19.8002C12.3292 19.8002 12.5992 19.5302 12.5992 19.2002V12.6002H19.1992C19.5292 12.6002 19.7992 12.3302 19.7992 12.0002C19.7992 11.6702 19.5292 11.4002 19.1992 11.4002H12.5992V4.8002Z", fill: "currentColor" }));
function aL(r) {
  const o = r.createItems.map((c) => {
    var E;
    if (c.type === "group")
      return { label: c.label, key: c.label, type: c.type };
    const d = c.isLocked, m = c.disabled;
    let h = "navigationCreate__item";
    return ((E = m != null ? m : d) != null ? E : c.isLoading) && (h += " navigationCreate__item--disabled"), {
      key: c.description,
      className: h,
      disabled: c.disabled,
      onClick: (T) => {
        var w;
        c.disabled || ((w = c.onClick) == null || w.call(c), T.domEvent.stopPropagation(), T.domEvent.preventDefault());
      },
      label: /* @__PURE__ */ B(xm, { title: c.tooltip, children: /* @__PURE__ */ va(v2, { vertical: !0, gap: "middle", justify: "center", children: [
        /* @__PURE__ */ va("span", { className: "navigationCreate__itemTitle", children: [
          c.title,
          c.isLoading && /* @__PURE__ */ B(pR, { className: "navigationCreate__itemLoading", size: "small" }),
          d && /* @__PURE__ */ B(nL, { className: "navigationCreate__lockIcon" })
        ] }),
        /* @__PURE__ */ B("span", { className: "navigationCreate__itemDescription", children: c.description })
      ] }) })
    };
  });
  return /* @__PURE__ */ B(Ll, { children: /* @__PURE__ */ B(
    c9,
    {
      className: "globalNavigation__item globalNavigation__item--createNew",
      items: [
        {
          key: "NavigationCreate",
          popupClassName: "globalNavigation__popup globalNavigation__popup--navigationCreate",
          icon: /* @__PURE__ */ B(Ll, { className: "navigationCreate__popupButtonWrapper", style: { pointerEvents: "none" }, children: /* @__PURE__ */ B(
            Em,
            {
              className: "navigationCreate__popupButton",
              icon: /* @__PURE__ */ B(rL, { className: "navigationCreate__popupIcon" })
            }
          ) }),
          children: o
        }
      ],
      expandIcon: null
    }
  ) });
}
function iL(r = "") {
  var s;
  const o = new RegExp(
    "(?:[\\W\\d]*\\b)*([A-Za-z])\\w*\\b(?:.*\\s(\\w)[\\w-]*$)?",
    "i"
  );
  return (s = r.replace(o, "$1$2")) == null ? void 0 : s.toUpperCase();
}
const oL = (r, o) => {
  let s;
  return (...c) => {
    window.clearTimeout(s), s = window.setTimeout(() => {
      r(...c);
    }, o);
  };
};
function lL({ menuItems: r }) {
  return /* @__PURE__ */ B("ul", { className: "workspaceSelector__itemsList", children: r.map((o) => /* @__PURE__ */ B("li", { className: o.className, onClick: o.onClick, children: o.label }, o.key)) });
}
const uL = () => /* @__PURE__ */ B(Ll, { className: "workspaceSelector__noResults", children: /* @__PURE__ */ B(d2, { description: "No results found", imageStyle: { height: "60px" } }) }), sL = ({ signoutOptions: r }) => {
  var o;
  return /* @__PURE__ */ B("div", { className: "workspaceSelector__signoutButtonContainer", children: /* @__PURE__ */ B(
    Em,
    {
      className: "workspaceSelector__signoutButton",
      type: "primary",
      onClick: (s) => {
        r == null || r.onSignout();
      },
      children: (o = r == null ? void 0 : r.label) != null ? o : "Sign Out of mParticle"
    }
  ) });
};
function cL(r) {
  const { onSearch: o, searchTerm: s, inputRef: c, hasNoResults: d, menuItems: m, signoutOptions: h } = r;
  return /* @__PURE__ */ va("div", { className: "workspaceSelector__popoverContent", children: [
    /* @__PURE__ */ B("div", { className: "workspaceSelector__search", children: /* @__PURE__ */ B(
      Nf,
      {
        placeholder: "Search",
        className: "workspaceSelector__searchInput",
        onChange: o,
        value: s,
        ref: c,
        onClick: (E) => {
          E.preventDefault(), E.stopPropagation();
        }
      }
    ) }),
    d ? /* @__PURE__ */ B(uL, {}) : /* @__PURE__ */ B(lL, { menuItems: m }),
    /* @__PURE__ */ B(sL, { signoutOptions: h })
  ] });
}
function fL(r) {
  const [o, s] = Wo(""), c = Ma(null), [d, m] = Wo(r.orgs);
  Bo(() => {
    m(r.orgs);
  }, r.orgs);
  const h = Ml(oL(m, 200), []), E = !!o && !d.length, T = E5(
    () => k(
      /* currentFilteredOrgs */
    ),
    [d]
  ), w = r.orgs.flatMap((A) => {
    let P = [];
    const { accounts: j } = A;
    if (j) {
      const D = j.flatMap(({ workspaces: W }) => W);
      P = P.concat(D);
    }
    return P;
  }).find((A) => A.isActive), _ = (A) => {
    A && setTimeout(() => {
      var P;
      (P = c.current) == null || P.focus({
        cursor: "all"
      });
    }, 0);
  };
  return /* @__PURE__ */ B(
    fR,
    {
      arrow: !1,
      placement: "right",
      overlayInnerStyle: { padding: 4 },
      overlayClassName: "workspaceSelector__popover",
      onOpenChange: _,
      afterOpenChange: _,
      content: /* @__PURE__ */ B(
        cL,
        {
          onSearch: N,
          searchTerm: o,
          inputRef: c,
          hasNoResults: E,
          signoutOptions: r.signoutOptions,
          menuItems: T
        }
      ),
      children: /* @__PURE__ */ B("div", { className: "globalNavigation__item workspaceSelector__menuItem", children: /* @__PURE__ */ B(qS, { className: "workspaceSelector__avatar", children: iL(w == null ? void 0 : w.label) }) })
    }
  );
  function k() {
    return d.reduce((P, j) => (P.push({
      type: "org",
      className: "workspaceSelector__orgName" + (j.label ? "" : " u-display-none"),
      label: j.label,
      id: j.id,
      key: `${j.id}_${j.label}`,
      accounts: j.accounts,
      workspaces: j.accounts.flatMap((D) => D.workspaces)
    }), j.accounts.forEach((D) => {
      P.push({
        type: "account",
        className: "workspaceSelector__accountName" + (D.label ? "" : " u-display-none"),
        label: D.label,
        id: D.id,
        key: `${D.id}_${D.label}`,
        workspaces: D.workspaces
      }), D.workspaces.forEach((W) => {
        P.push({
          type: "workspace",
          className: "workspaceSelector__workspaceName" + (W.isActive ? " workspaceSelector__workspaceName--active" : ""),
          label: W.label,
          id: W.id,
          key: `${W.id}_${W.label}`,
          onClick: W.onClick
        });
      });
    }), P), []).map((P) => ({
      type: P.type,
      className: P.className,
      label: P.label,
      id: P.id,
      key: P.key,
      onClick: P.onClick
    }));
  }
  function N(A) {
    const P = A.target.value.toLowerCase();
    if (s(P), P) {
      const D = j();
      h(D);
    } else
      m(r.orgs);
    function j() {
      return r.orgs.reduce((W, V) => {
        if (D(V))
          W.push(V);
        else {
          const z = be({}, V);
          z.accounts = [], V.accounts.forEach((I) => {
            const U = be({}, I);
            U.workspaces = [], D(I) ? z.accounts.push(I) : (I.workspaces.forEach((Y) => {
              D(Y) && U.workspaces.push(Y);
            }), U.workspaces.length && z.accounts.push(U));
          }), z.accounts.length && W.push(z);
        }
        return W;
      }, []);
      function D(W) {
        return !!W.label && W.label.toString().toLowerCase().includes(P) || !!W.id && W.id.toString().toLowerCase().includes(P);
      }
    }
  }
}
const dL = (r) => /* @__PURE__ */ S.createElement("svg", be({ id: "mpLogo", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 202.8 169", xmlSpace: "preserve" }, r), /* @__PURE__ */ S.createElement("polygon", { fill: "currentColor", points: "135.2,126.7 135.2,169 202.8,126.7 202.8,84.5" }), /* @__PURE__ */ S.createElement("polygon", { fill: "currentColor", points: "67.6,126.7 67.6,169 135.2,126.7 135.2,84.5" }), /* @__PURE__ */ S.createElement("polygon", { fill: "currentColor", points: "0,126.7 0,169 67.6,126.7 67.6,84.5" }), /* @__PURE__ */ S.createElement("polygon", { fill: "currentColor", points: "202.8,0 135.2,42.2 135.2,84.5 202.8,42.2" }), /* @__PURE__ */ S.createElement("polygon", { fill: "currentColor", points: "135.2,0 67.6,42.2 67.6,84.5 135.2,42.2" }), /* @__PURE__ */ S.createElement("polygon", { fill: "currentColor", points: "67.6,0 0,42.2 0,84.5 67.6,42.2" })), vL = 90, aA = (r) => /* @__PURE__ */ B(Rf, { className: "globalNavigation", children: /* @__PURE__ */ B(Rf.Sider, { className: "globalNavigation__sider", width: vL, children: /* @__PURE__ */ va(v2, { vertical: !0, justify: "space-between", style: { height: "100%" }, children: [
  /* @__PURE__ */ va("div", { children: [
    /* @__PURE__ */ B(ZD, be({}, r.logo)),
    /* @__PURE__ */ B("div", { className: "globalNavigation__divider" }),
    /* @__PURE__ */ va(Ll, { vertical: !0, children: [
      r.onSearchClick && /* @__PURE__ */ B(JD, { onClick: r.onSearchClick }),
      r.createItems && /* @__PURE__ */ B(aL, { createItems: r.createItems })
    ] }),
    /* @__PURE__ */ B(l2, { items: r.tools })
  ] }),
  /* @__PURE__ */ va("div", { children: [
    /* @__PURE__ */ B(l2, { items: r.management }),
    r.orgs && /* @__PURE__ */ B(fL, { orgs: r.orgs, signoutOptions: r.signoutOptions }),
    !r.hideMpHome && /* @__PURE__ */ B(xm, { title: "mParticle Overview", placement: "right", children: /* @__PURE__ */ B(
      Ll,
      {
        className: "globalNavigation__mpHome",
        onClick: () => {
          r.onMpHomeClick();
        },
        children: /* @__PURE__ */ B(dL, { className: "globalNavigation__mpSvg" })
      }
    ) })
  ] })
] }) }) }), iA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M5 5.5C5 5.225 4.775 5 4.5 5C4.225 5 4 5.225 4 5.5V16.5C4 17.8813 5.11875 19 6.5 19H19.5C19.775 19 20 18.775 20 18.5C20 18.225 19.775 18 19.5 18H6.5C5.67188 18 5 17.3281 5 16.5V5.5ZM18.8531 8.85313C19.0469 8.65938 19.0469 8.34062 18.8531 8.14687C18.6594 7.95312 18.3406 7.95312 18.1469 8.14687L14 12.2937L11.3531 9.64687C11.1594 9.45312 10.8406 9.45312 10.6469 9.64687L7.14687 13.1469C6.95312 13.3406 6.95312 13.6594 7.14687 13.8531C7.34062 14.0469 7.65938 14.0469 7.85313 13.8531L11 10.7063L13.6469 13.3531C13.8406 13.5469 14.1594 13.5469 14.3531 13.3531L18.8531 8.85313Z", fill: "black" })), oA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M18 13C18 13.275 17.775 13.5 17.5 13.5H15.5C15.225 13.5 15 13.275 15 13V11C15 10.725 15.225 10.5 15.5 10.5H17.5C17.775 10.5 18 10.725 18 11V13ZM14 11V11.5H12.5V6.5C12.5 5.67188 11.8281 5 11 5H10V4.5C10 3.67188 9.32812 3 8.5 3H6.5C5.67188 3 5 3.67188 5 4.5V6.5C5 7.32812 5.67188 8 6.5 8H8.5C9.32812 8 10 7.32812 10 6.5V6H11C11.275 6 11.5 6.225 11.5 6.5V11.5H10V11C10 10.1719 9.32812 9.5 8.5 9.5H6.5C5.67188 9.5 5 10.1719 5 11V13C5 13.8281 5.67188 14.5 6.5 14.5H8.5C9.32812 14.5 10 13.8281 10 13V12.5H11.5V17.5C11.5 17.775 11.275 18 11 18H10V17.5C10 16.6719 9.32812 16 8.5 16H6.5C5.67188 16 5 16.6719 5 17.5V19.5C5 20.3281 5.67188 21 6.5 21H8.5C9.32812 21 10 20.3281 10 19.5V19H11C11.8281 19 12.5 18.3281 12.5 17.5V12.5H14V13C14 13.8281 14.6719 14.5 15.5 14.5H17.5C18.3281 14.5 19 13.8281 19 13V11C19 10.1719 18.3281 9.5 17.5 9.5H15.5C14.6719 9.5 14 10.1719 14 11ZM9 4.5V6.5C9 6.775 8.775 7 8.5 7H6.5C6.225 7 6 6.775 6 6.5V4.5C6 4.225 6.225 4 6.5 4H8.5C8.775 4 9 4.225 9 4.5ZM9 11V13C9 13.275 8.775 13.5 8.5 13.5H6.5C6.225 13.5 6 13.275 6 13V11C6 10.725 6.225 10.5 6.5 10.5H8.5C8.775 10.5 9 10.725 9 11ZM9 17.5V19.5C9 19.775 8.775 20 8.5 20H6.5C6.225 20 6 19.775 6 19.5V17.5C6 17.225 6.225 17 6.5 17H8.5C8.775 17 9 17.225 9 17.5Z", fill: "black" })), lA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M18 17C18 17.075 17.9688 17.2312 17.7375 17.4656C17.5031 17.7031 17.1156 17.9625 16.5562 18.2031C15.4406 18.6812 13.8313 19 12 19C10.1687 19 8.55937 18.6812 7.44375 18.2031C6.88437 17.9625 6.49688 17.7031 6.2625 17.4656C6.03125 17.2312 6 17.075 6 17V14.3594C6.5375 14.6375 7.19062 14.8687 7.9125 15.0437C9.08437 15.3344 10.4938 15.5 12 15.5C13.5063 15.5 14.9156 15.3344 16.0875 15.0469C16.8094 14.8687 17.4625 14.6406 18 14.3625V17ZM18 10.3594V13.1906C17.5469 13.5219 16.8156 13.8344 15.8469 14.075C14.7656 14.3406 13.4375 14.5 12 14.5C10.5625 14.5 9.23438 14.3406 8.15313 14.075C7.18438 13.8375 6.45312 13.5219 6 13.1906V10.3594C6.5375 10.6375 7.19062 10.8687 7.9125 11.0437C9.08437 11.3344 10.4938 11.5 12 11.5C13.5063 11.5 14.9156 11.3344 16.0875 11.0469C16.8094 10.8688 17.4625 10.6406 18 10.3625V10.3594ZM18 9.19063C17.5469 9.52188 16.8156 9.83437 15.8469 10.075C14.7656 10.3406 13.4375 10.5 12 10.5C10.5625 10.5 9.23438 10.3406 8.15313 10.075C7.18438 9.8375 6.45312 9.52188 6 9.19063V7C6 6.925 6.03125 6.76875 6.2625 6.53437C6.49688 6.29688 6.88437 6.0375 7.44375 5.79688C8.55937 5.31875 10.1687 5 12 5C13.8313 5 15.4406 5.31875 16.5562 5.79688C17.1156 6.0375 17.5031 6.29688 17.7375 6.53437C17.9688 6.76875 18 6.925 18 7V9.19063ZM19 17V7C19 5.34375 15.8656 4 12 4C8.13438 4 5 5.34375 5 7V17C5 18.6562 8.13438 20 12 20C15.8656 20 19 18.6562 19 17Z", fill: "black" })), uA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M6.5 6C6.225 6 6 6.225 6 6.5V9.5C6 9.775 6.225 10 6.5 10H9.5C9.775 10 10 9.775 10 9.5V6.5C10 6.225 9.775 6 9.5 6H6.5ZM5 6.5C5 5.67188 5.67188 5 6.5 5H9.5C10.3281 5 11 5.67188 11 6.5V9.5C11 10.3281 10.3281 11 9.5 11H6.5C5.67188 11 5 10.3281 5 9.5V6.5ZM6.5 14C6.225 14 6 14.225 6 14.5V17.5C6 17.775 6.225 18 6.5 18H9.5C9.775 18 10 17.775 10 17.5V14.5C10 14.225 9.775 14 9.5 14H6.5ZM5 14.5C5 13.6719 5.67188 13 6.5 13H9.5C10.3281 13 11 13.6719 11 14.5V17.5C11 18.3281 10.3281 19 9.5 19H6.5C5.67188 19 5 18.3281 5 17.5V14.5ZM17.5 6H14.5C14.225 6 14 6.225 14 6.5V9.5C14 9.775 14.225 10 14.5 10H17.5C17.775 10 18 9.775 18 9.5V6.5C18 6.225 17.775 6 17.5 6ZM14.5 5H17.5C18.3281 5 19 5.67188 19 6.5V9.5C19 10.3281 18.3281 11 17.5 11H14.5C13.6719 11 13 10.3281 13 9.5V6.5C13 5.67188 13.6719 5 14.5 5ZM14.5 14C14.225 14 14 14.225 14 14.5V17.5C14 17.775 14.225 18 14.5 18H17.5C17.775 18 18 17.775 18 17.5V14.5C18 14.225 17.775 14 17.5 14H14.5ZM13 14.5C13 13.6719 13.6719 13 14.5 13H17.5C18.3281 13 19 13.6719 19 14.5V17.5C19 18.3281 18.3281 19 17.5 19H14.5C13.6719 19 13 18.3281 13 17.5V14.5Z", fill: "black" })), sA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M11.6094 5.16621C11.8594 5.05996 12.1406 5.05996 12.3906 5.16621L17.9125 7.50996C18.2656 7.65996 18.5031 7.99434 18.5 8.37246C18.4844 11.31 17.2688 16.4912 12.3906 18.8256C12.1438 18.9443 11.8531 18.9443 11.6063 18.8256C6.72814 16.4881 5.51564 11.3068 5.50001 8.36934C5.49689 7.99121 5.73439 7.65684 6.08751 7.50684L11.6094 5.16309V5.16621ZM12.7813 4.24434C12.2813 4.03184 11.7188 4.03184 11.2188 4.24434L5.69689 6.58809C5.00939 6.87871 4.49689 7.55684 4.50001 8.37559C4.51564 11.4756 5.79064 17.1475 11.175 19.7256C11.6969 19.9756 12.3031 19.9756 12.825 19.7256C18.2094 17.1475 19.4844 11.4756 19.5 8.37559C19.5031 7.55684 18.9906 6.87871 18.3031 6.58809L12.7813 4.24434ZM12 9.75059C12.1989 9.75059 12.3897 9.8296 12.5303 9.97026C12.671 10.1109 12.75 10.3017 12.75 10.5006C12.75 10.6995 12.671 10.8903 12.5303 11.0309C12.3897 11.1716 12.1989 11.2506 12 11.2506C11.8011 11.2506 11.6103 11.1716 11.4697 11.0309C11.329 10.8903 11.25 10.6995 11.25 10.5006C11.25 10.3017 11.329 10.1109 11.4697 9.97026C11.6103 9.8296 11.8011 9.75059 12 9.75059ZM13.75 10.5006C13.75 9.53496 12.9656 8.75059 12 8.75059C11.0344 8.75059 10.25 9.53496 10.25 10.5006C10.25 11.2943 10.7781 11.9631 11.5 12.1787V14.5006C11.5 14.7756 11.725 15.0006 12 15.0006C12.275 15.0006 12.5 14.7756 12.5 14.5006V12.1787C13.2219 11.9631 13.75 11.2943 13.75 10.5006Z", fill: "black" })), cA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M5 6.5C5 6.10218 5.15804 5.72064 5.43934 5.43934C5.72064 5.15804 6.10218 5 6.5 5C6.89782 5 7.27936 5.15804 7.56066 5.43934C7.84196 5.72064 8 6.10218 8 6.5C8 6.89782 7.84196 7.27936 7.56066 7.56066C7.27936 7.84196 6.89782 8 6.5 8C6.10218 8 5.72064 7.84196 5.43934 7.56066C5.15804 7.27936 5 6.89782 5 6.5ZM9 6.5C9 5.83696 8.73661 5.20107 8.26777 4.73223C7.79893 4.26339 7.16304 4 6.5 4C5.83696 4 5.20107 4.26339 4.73223 4.73223C4.26339 5.20107 4 5.83696 4 6.5C4 7.16304 4.26339 7.79893 4.73223 8.26777C5.20107 8.73661 5.83696 9 6.5 9C7.16304 9 7.79893 8.73661 8.26777 8.26777C8.73661 7.79893 9 7.16304 9 6.5ZM12 9C12.5304 9 13.0391 9.21071 13.4142 9.58579C13.7893 9.96086 14 10.4696 14 11C14 11.5304 13.7893 12.0391 13.4142 12.4142C13.0391 12.7893 12.5304 13 12 13C11.4696 13 10.9609 12.7893 10.5858 12.4142C10.2107 12.0391 10 11.5304 10 11C10 10.4696 10.2107 9.96086 10.5858 9.58579C10.9609 9.21071 11.4696 9 12 9ZM12 14C12.394 14 12.7841 13.9224 13.1481 13.7716C13.512 13.6209 13.8427 13.3999 14.1213 13.1213C14.3999 12.8427 14.6209 12.512 14.7716 12.1481C14.9224 11.7841 15 11.394 15 11C15 10.606 14.9224 10.2159 14.7716 9.85195C14.6209 9.48797 14.3999 9.15726 14.1213 8.87868C13.8427 8.6001 13.512 8.37913 13.1481 8.22836C12.7841 8.0776 12.394 8 12 8C11.606 8 11.2159 8.0776 10.8519 8.22836C10.488 8.37913 10.1573 8.6001 9.87868 8.87868C9.6001 9.15726 9.37913 9.48797 9.22836 9.85195C9.0776 10.2159 9 10.606 9 11C9 11.394 9.0776 11.7841 9.22836 12.1481C9.37913 12.512 9.6001 12.8427 9.87868 13.1213C10.1573 13.3999 10.488 13.6209 10.8519 13.7716C11.2159 13.9224 11.606 14 12 14ZM10.1656 16H13.8344C15.5281 16 16.9094 17.3281 16.9969 19H7.00313C7.09063 17.3281 8.47187 16 10.1656 16ZM10.1656 15C7.86562 15 6 16.8656 6 19.1656C6 19.625 6.37187 20 6.83437 20H17.1656C17.625 20 18 19.6281 18 19.1656C18 16.8656 16.1344 15 13.8344 15H10.1656ZM18 5C18.3978 5 18.7794 5.15804 19.0607 5.43934C19.342 5.72064 19.5 6.10218 19.5 6.5C19.5 6.89782 19.342 7.27936 19.0607 7.56066C18.7794 7.84196 18.3978 8 18 8C17.6022 8 17.2206 7.84196 16.9393 7.56066C16.658 7.27936 16.5 6.89782 16.5 6.5C16.5 6.10218 16.658 5.72064 16.9393 5.43934C17.2206 5.15804 17.6022 5 18 5ZM18 9C18.663 9 19.2989 8.73661 19.7678 8.26777C20.2366 7.79893 20.5 7.16304 20.5 6.5C20.5 5.83696 20.2366 5.20107 19.7678 4.73223C19.2989 4.26339 18.663 4 18 4C17.337 4 16.7011 4.26339 16.2322 4.73223C15.7634 5.20107 15.5 5.83696 15.5 6.5C15.5 7.16304 15.7634 7.79893 16.2322 8.26777C16.7011 8.73661 17.337 9 18 9ZM18.5 11C19.8813 11 21 12.1187 21 13.5C21 13.775 21.225 14 21.5 14C21.775 14 22 13.775 22 13.5C22 11.5656 20.4344 10 18.5 10H15.875C15.9563 10.3187 16 10.6562 16 11H18.5ZM8 11C8 10.6562 8.04375 10.3187 8.125 10H5.5C3.56562 10 2 11.5656 2 13.5C2 13.775 2.225 14 2.5 14C2.775 14 3 13.775 3 13.5C3 12.1187 4.11875 11 5.5 11H8Z", fill: "black" })), fA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M19 9C19 8.66563 18.9594 8.34062 18.8813 8.03125L17.3531 9.55937C17.0719 9.84062 16.6906 10 16.2937 10H15.5C14.6719 10 14 9.32812 14 8.5V7.70625C14 7.30938 14.1594 6.92812 14.4406 6.64687L15.9688 5.11875C15.6594 5.04062 15.3344 5 15 5C12.7906 5 11 6.79063 11 9C11 9.2875 11.0312 9.56562 11.0875 9.83437C11.1875 10.3094 11.0687 10.8469 10.6781 11.2375L5.43125 16.4812C5.15625 16.7594 5 17.1344 5 17.525C5 18.3406 5.65937 19 6.475 19C6.86562 19 7.24062 18.8438 7.51875 18.5688L12.7656 13.3219C13.1531 12.9344 13.6937 12.8125 14.1687 12.9125C14.4375 12.9688 14.7156 13 15.0031 13C17.2125 13 19.0031 11.2094 19.0031 9H19ZM20 9C20 11.7625 17.7625 14 15 14C14.6438 14 14.2938 13.9625 13.9594 13.8906C13.7844 13.8531 13.6 13.9 13.4719 14.0281L8.225 19.275C7.75937 19.7406 7.13125 20 6.475 20C5.10937 20 4 18.8906 4 17.525C4 16.8687 4.25938 16.2406 4.725 15.775L9.97188 10.5281C10.1 10.4 10.1469 10.2156 10.1094 10.0406C10.0375 9.70625 10 9.35625 10 9C10 6.2375 12.2375 4 15 4C15.775 4 16.5094 4.17812 17.1656 4.49062C17.4531 4.62813 17.4938 5.00625 17.2688 5.23125L15.1469 7.35313C15.0531 7.44688 15 7.575 15 7.70625V8.5C15 8.775 15.225 9 15.5 9H16.2937C16.425 9 16.5531 8.94688 16.6469 8.85313L18.7688 6.73125C18.9938 6.50625 19.3719 6.54688 19.5094 6.83437C19.825 7.49062 20 8.225 20 9ZM6.75 16.75C6.88261 16.75 7.00979 16.8027 7.10355 16.8964C7.19732 16.9902 7.25 17.1174 7.25 17.25C7.25 17.3826 7.19732 17.5098 7.10355 17.6036C7.00979 17.6973 6.88261 17.75 6.75 17.75C6.61739 17.75 6.49021 17.6973 6.39645 17.6036C6.30268 17.5098 6.25 17.3826 6.25 17.25C6.25 17.1174 6.30268 16.9902 6.39645 16.8964C6.49021 16.8027 6.61739 16.75 6.75 16.75Z", fill: "black" })), dA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M12.5813 7.95414C12.5625 8.02539 12.5325 8.08914 12.4875 8.14914C12.435 8.22039 12.3713 8.27664 12.3 8.31789C12.2288 8.35914 12.1463 8.38539 12.06 8.39664C11.94 8.40789 11.8125 8.38539 11.7 8.32164L6.37125 5.27289C6.63375 7.23039 7.57875 8.69289 8.53875 9.71289C9.105 10.3129 9.6675 10.7554 10.0913 11.0441C10.3013 11.1904 10.4775 11.2954 10.5975 11.3666C10.6575 11.4004 10.7025 11.4266 10.7325 11.4416L10.7663 11.4604L10.7737 11.4641C11.07 11.6141 11.19 11.9741 11.04 12.2704C10.89 12.5666 10.53 12.6866 10.2338 12.5404L10.5 12.0004C10.23 12.5366 10.23 12.5366 10.23 12.5366L10.2263 12.5329L10.2112 12.5254C10.2 12.5179 10.185 12.5104 10.1625 12.4991C10.1213 12.4766 10.065 12.4466 9.99375 12.4054C9.85125 12.3229 9.64875 12.1991 9.4125 12.0341C8.93625 11.7079 8.3025 11.2091 7.665 10.5341C6.39 9.18414 5.1 7.09539 5.1 4.20039C5.1 3.98664 5.2125 3.78789 5.4 3.68289C5.5875 3.57789 5.8125 3.57414 6 3.67914L11.49 6.81789C11.9513 4.30539 14.1525 2.40039 16.8 2.40039H17.7H18H18.2175H20.4C20.73 2.40039 21 2.67039 21 3.00039C21 3.26289 20.8313 3.48789 20.595 3.56664C20.8688 3.92289 21.0638 4.33914 21.1575 4.80039H23.6513C23.8425 4.80039 24 4.95789 24 5.14914C24 5.29914 23.9025 5.43414 23.76 5.47914L21.315 6.29289L21.4912 8.14539C21.5775 9.04164 21.1463 9.91164 20.3813 10.3916C19.29 11.0741 17.8538 10.7666 17.1375 9.69414L17.0738 9.60039H16.8V11.1004C16.8 11.1266 16.7963 11.1566 16.7963 11.1829C16.8 11.2541 16.8 11.3291 16.8 11.4004C16.8 12.5591 16.335 13.5904 15.6 14.3404V20.1004C15.6 20.9291 14.9288 21.6004 14.1 21.6004H12.9C12.0713 21.6004 11.4 20.9291 11.4 20.1004V15.4354L8.09625 14.6929C8.0775 15.2291 7.96125 15.7541 7.75125 16.2454L7.4475 16.9579C7.365 17.1454 7.35375 17.3554 7.40625 17.5541L8.0025 19.6991C8.26875 20.6554 7.54875 21.6004 6.55875 21.6004H5.31C4.635 21.6004 4.04625 21.1504 3.86625 20.5016L3.36 18.6791C3.04875 17.5616 3.1275 16.3729 3.585 15.3041L3.88875 14.5916C3.89625 14.5766 3.9 14.5616 3.9 14.5429C3.9 14.5279 3.89625 14.5129 3.8925 14.4979L2.64 11.4941C2.4825 11.1154 2.4 10.7141 2.4 10.3054C1.7025 10.5529 1.2 11.2204 1.2 12.0041V13.8041C1.2 14.1341 0.93 14.4041 0.6 14.4041C0.27 14.4041 0 14.1341 0 13.8041V12.0004C0 10.4516 1.17375 9.18039 2.6775 9.01914C3.015 8.27664 3.6375 7.69164 4.4025 7.40289C4.53 7.79289 4.68 8.16789 4.845 8.52039C4.1175 8.78289 3.6 9.48039 3.6 10.3016C3.6 10.5529 3.64875 10.8004 3.74625 11.0329L4.99875 14.0366C5.06625 14.1979 5.1 14.3704 5.1 14.5429C5.1 14.7229 5.0625 14.8991 4.995 15.0641L4.69125 15.7766C4.3425 16.5904 4.2825 17.5016 4.51875 18.3566L5.025 20.1791C5.0625 20.3104 5.17875 20.4004 5.31375 20.4004H6.55875C6.7575 20.4004 6.9 20.2129 6.8475 20.0216L6.25125 17.8766C6.12375 17.4154 6.1575 16.9279 6.345 16.4891L6.64875 15.7766C6.81375 15.3866 6.9 14.9704 6.9 14.5466C6.9 14.3741 6.885 14.2016 6.85875 14.0329C6.825 13.8341 6.8925 13.6354 7.03875 13.4966C7.185 13.3579 7.3875 13.3016 7.5825 13.3466L11.94 14.3254C11.9925 14.3366 12.045 14.3479 12.1013 14.3554C12.39 14.4041 12.6 14.6554 12.6 14.9479V20.1004C12.6 20.2654 12.735 20.4004 12.9 20.4004H14.1C14.265 20.4004 14.4 20.2654 14.4 20.1004V14.0854C14.4 13.9129 14.4713 13.7516 14.5988 13.6391C15.21 13.0916 15.6 12.3004 15.6 11.4004C15.6 11.3141 15.5963 11.2316 15.5888 11.1491C15.585 11.0929 15.5888 11.0329 15.6 10.9804V9.00039C15.6 8.67039 15.87 8.40039 16.2 8.40039H17.4C17.6025 8.40039 17.7863 8.50164 17.8988 8.66664L18.1388 9.02664C18.4913 9.55914 19.2075 9.71289 19.7475 9.37164C20.1262 9.13539 20.34 8.70414 20.2988 8.25789L20.01 5.22789C19.9237 4.30539 19.1475 3.60039 18.2175 3.60039H18H17.7H16.8C14.4825 3.60039 12.6038 5.47539 12.6 7.78914C12.6 7.84539 12.5963 7.89789 12.5813 7.95414ZM17.4 6.00039C17.4 5.84126 17.4632 5.68865 17.5757 5.57613C17.6883 5.4636 17.8409 5.40039 18 5.40039C18.1591 5.40039 18.3117 5.4636 18.4243 5.57613C18.5368 5.68865 18.6 5.84126 18.6 6.00039C18.6 6.15952 18.5368 6.31213 18.4243 6.42465C18.3117 6.53718 18.1591 6.60039 18 6.60039C17.8409 6.60039 17.6883 6.53718 17.5757 6.42465C17.4632 6.31213 17.4 6.15952 17.4 6.00039Z", fill: "black" })), vA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M10 17C10 16.4469 9.55312 16 9 16H6C5.44687 16 5 15.5531 5 15V6C5 5.44687 5.44687 5 6 5H18C18.5531 5 19 5.44687 19 6V15C19 15.5531 18.5531 16 18 16H13.6656C13.45 16 13.2375 16.0687 13.0656 16.2L10 18.5V17ZM6 4C4.89688 4 4 4.89688 4 6V15C4 16.1031 4.89688 17 6 17H8H9V18V19.5C9 19.6906 9.10625 19.8625 9.275 19.9469C9.44375 20.0312 9.64688 20.0125 9.8 19.9L13.6656 17H18C19.1031 17 20 16.1031 20 15V6C20 4.89688 19.1031 4 18 4H6ZM9.27187 7.80625L9.26562 7.82812C9.19688 8.09375 9.35625 8.36875 9.62187 8.4375C9.8875 8.50625 10.1625 8.34688 10.2312 8.08125L10.2375 8.05937C10.325 7.72812 10.6219 7.5 10.9625 7.5H12.75C13.3 7.5 13.75 7.95312 13.75 8.50938C13.75 8.8875 13.5375 9.23438 13.2031 9.40625L11.7719 10.1375C11.6031 10.2219 11.5 10.3937 11.5 10.5844V11.5C11.5 11.775 11.725 12 12 12C12.275 12 12.5 11.775 12.5 11.5V10.8844L13.6594 10.2937C14.3313 9.95 14.75 9.25625 14.75 8.50625C14.75 7.40625 13.8594 6.5 12.75 6.5H10.9656C10.1687 6.5 9.475 7.0375 9.27187 7.80625ZM12.75 13.5C12.75 13.3011 12.671 13.1103 12.5303 12.9697C12.3897 12.829 12.1989 12.75 12 12.75C11.8011 12.75 11.6103 12.829 11.4697 12.9697C11.329 13.1103 11.25 13.3011 11.25 13.5C11.25 13.6989 11.329 13.8897 11.4697 14.0303C11.6103 14.171 11.8011 14.25 12 14.25C12.1989 14.25 12.3897 14.171 12.5303 14.0303C12.671 13.8897 12.75 13.6989 12.75 13.5Z", fill: "black" })), pA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M10.9785 5.18125C10.991 5.13437 11.0191 5.09375 11.0535 5.0625C11.3629 5.02188 11.6785 5 12.0004 5C12.3223 5 12.6379 5.02188 12.9473 5.0625C12.9816 5.09375 13.0066 5.13437 13.0223 5.18125L13.4504 6.67188C13.5598 7.05 13.8316 7.33125 14.1535 7.4875C14.391 7.6 14.616 7.73125 14.8316 7.87812C15.1254 8.08125 15.5098 8.175 15.891 8.08125L17.3973 7.70625C17.4441 7.69375 17.491 7.69688 17.5348 7.7125C17.7035 7.92813 17.8598 8.15625 18.0004 8.39375L18.1348 8.625C18.266 8.85938 18.3816 9.10313 18.4848 9.35313C18.4754 9.4 18.4535 9.44375 18.4191 9.47813L17.3379 10.5938C17.066 10.875 16.9566 11.2531 16.9848 11.6094C16.9941 11.7375 17.0004 11.8688 17.0004 12C17.0004 12.1313 16.9941 12.2625 16.9848 12.3906C16.9566 12.7469 17.066 13.125 17.3379 13.4062L18.416 14.5219C18.4504 14.5563 18.4723 14.6 18.4816 14.6469C18.3785 14.8969 18.2629 15.1406 18.1316 15.3781L18.0004 15.6062C17.8566 15.8438 17.7004 16.0688 17.5348 16.2875C17.491 16.3031 17.4441 16.3031 17.3973 16.2937L15.891 15.9187C15.5098 15.825 15.1285 15.9187 14.8316 16.1219C14.616 16.2688 14.391 16.4 14.1535 16.5125C13.8316 16.6656 13.5566 16.95 13.4504 17.3281L13.0223 18.8188C13.0098 18.8656 12.9816 18.9062 12.9473 18.9375C12.6379 18.9781 12.3223 19 12.0004 19C11.6785 19 11.3629 18.9781 11.0535 18.9375C11.0191 18.9062 10.9941 18.8656 10.9785 18.8188L10.5504 17.3281C10.441 16.95 10.1691 16.6687 9.84726 16.5125C9.60976 16.4 9.38476 16.2688 9.16914 16.1219C8.87539 15.9187 8.49101 15.825 8.10976 15.9187L6.60351 16.2937C6.55664 16.3062 6.50976 16.3031 6.46601 16.2875C6.29726 16.0688 6.14101 15.8438 5.99726 15.6062L5.86601 15.3781C5.73476 15.1438 5.61914 14.9 5.51601 14.6469C5.52539 14.6 5.54726 14.5563 5.58164 14.5219L6.66289 13.4062C6.93476 13.125 7.04414 12.7469 7.01601 12.3906C7.00664 12.2625 7.00039 12.1313 7.00039 12C7.00039 11.8688 7.00664 11.7375 7.01601 11.6094C7.04414 11.2531 6.93476 10.875 6.66289 10.5938L5.58476 9.475C5.55039 9.44062 5.52851 9.39687 5.51914 9.35C5.62226 9.1 5.73789 8.85625 5.86914 8.61875L6.00039 8.39062C6.14414 8.15312 6.30039 7.92812 6.46914 7.70937C6.51289 7.69375 6.55976 7.69375 6.60664 7.70312L8.11289 8.07812C8.49414 8.17188 8.87539 8.07812 9.17226 7.875C9.38789 7.72813 9.61289 7.59687 9.85039 7.48438C10.1723 7.33125 10.4473 7.04688 10.5535 6.66875L10.9816 5.17813L10.9785 5.18125ZM12.0004 4C11.5941 4 11.191 4.03125 10.8004 4.09063C10.7473 4.1 10.6941 4.11563 10.6441 4.14062C10.3473 4.29375 10.116 4.56563 10.0191 4.90625L9.59101 6.39687C9.57226 6.46562 9.51289 6.5375 9.41601 6.58437C9.13164 6.71875 8.85976 6.87812 8.60351 7.05312C8.51601 7.1125 8.42226 7.12812 8.35351 7.10938L6.84726 6.73438C6.50664 6.65 6.15664 6.71563 5.87539 6.89375C5.82851 6.92188 5.78789 6.95937 5.75351 7.00312C5.53164 7.28125 5.32539 7.57187 5.14101 7.87812L5.13789 7.8875L5.00039 8.125L4.99726 8.13438C4.82851 8.44063 4.67851 8.75625 4.55039 9.08437C4.53164 9.13438 4.51914 9.1875 4.51601 9.24062C4.50039 9.57812 4.61914 9.91563 4.86601 10.1719L5.94414 11.2875C5.99414 11.3406 6.02851 11.425 6.01914 11.5312C6.00664 11.6875 6.00039 11.8438 6.00039 12C6.00039 12.1562 6.00664 12.3156 6.01914 12.4688C6.02851 12.575 5.99414 12.6625 5.94414 12.7125L4.86601 13.8313C4.61914 14.0875 4.50039 14.425 4.51601 14.7625C4.51914 14.8156 4.53164 14.8687 4.55039 14.9187C4.67851 15.2469 4.82851 15.5625 4.99726 15.8687L5.00039 15.8781L5.13789 16.1156L5.14101 16.125C5.32539 16.4312 5.52851 16.725 5.75351 17.0031C5.78789 17.0469 5.82851 17.0844 5.87539 17.1125C6.15664 17.2906 6.50664 17.3563 6.84726 17.2719L8.35351 16.8969C8.42226 16.8781 8.51601 16.8938 8.60351 16.9531C8.85976 17.1313 9.13164 17.2875 9.41601 17.4219C9.51289 17.4688 9.56914 17.5406 9.59101 17.6094L10.0191 19.0938C10.116 19.4312 10.3473 19.7031 10.6441 19.8594C10.6941 19.8844 10.7441 19.9031 10.8004 19.9094C11.191 19.9688 11.5941 20 12.0004 20C12.4066 20 12.8098 19.9688 13.2004 19.9094C13.2535 19.9 13.3066 19.8844 13.3566 19.8594C13.6535 19.7063 13.8848 19.4344 13.9816 19.0938L14.4098 17.6031C14.4285 17.5344 14.4879 17.4625 14.5848 17.4156C14.8691 17.2812 15.141 17.1219 15.3973 16.9469C15.4848 16.8875 15.5785 16.8719 15.6473 16.8906L17.1535 17.2656C17.4941 17.35 17.8441 17.2875 18.1254 17.1062C18.1723 17.0781 18.2129 17.0406 18.2473 16.9969C18.4691 16.7188 18.6723 16.4281 18.8566 16.1219L18.8598 16.1125L19.0004 15.875L19.0035 15.8656C19.1723 15.5625 19.3223 15.2437 19.4504 14.9156C19.4691 14.8656 19.4816 14.8125 19.4848 14.7594C19.5004 14.4219 19.3816 14.0844 19.1348 13.8281L18.0566 12.7125C18.0066 12.6594 17.9723 12.575 17.9816 12.4688C17.9941 12.3125 18.0004 12.1562 18.0004 12C18.0004 11.8438 17.9941 11.6844 17.9816 11.5312C17.9723 11.425 18.0066 11.3375 18.0566 11.2875L19.1348 10.1719C19.3816 9.91563 19.5004 9.57812 19.4848 9.24062C19.4816 9.1875 19.4691 9.13438 19.4504 9.08437C19.3223 8.75625 19.1723 8.44063 19.0035 8.13438L19.0004 8.125L18.8629 7.8875L18.8598 7.87812C18.6754 7.57187 18.4723 7.27813 18.2504 7.00312C18.216 6.95937 18.1754 6.92188 18.1285 6.89375C17.8473 6.71563 17.4973 6.65 17.1566 6.73438L15.6504 7.10938C15.5816 7.12812 15.4879 7.1125 15.4004 7.05312C15.1441 6.875 14.8723 6.71875 14.5879 6.58437C14.491 6.5375 14.4348 6.46562 14.4129 6.39687L13.9816 4.90625C13.8848 4.56875 13.6535 4.29688 13.3566 4.14062C13.3066 4.11563 13.2566 4.09688 13.2004 4.09063C12.8098 4.03125 12.4066 4 12.0004 4ZM10.2504 12C10.2504 11.5359 10.4348 11.0908 10.763 10.7626C11.0911 10.4344 11.5363 10.25 12.0004 10.25C12.4645 10.25 12.9096 10.4344 13.2378 10.7626C13.566 11.0908 13.7504 11.5359 13.7504 12C13.7504 12.4641 13.566 12.9092 13.2378 13.2374C12.9096 13.5656 12.4645 13.75 12.0004 13.75C11.5363 13.75 11.0911 13.5656 10.763 13.2374C10.4348 12.9092 10.2504 12.4641 10.2504 12ZM14.7504 12C14.7504 11.2707 14.4607 10.5712 13.9449 10.0555C13.4292 9.53973 12.7297 9.25 12.0004 9.25C11.271 9.25 10.5716 9.53973 10.0558 10.0555C9.54012 10.5712 9.25039 11.2707 9.25039 12C9.25039 12.7293 9.54012 13.4288 10.0558 13.9445C10.5716 14.4603 11.271 14.75 12.0004 14.75C12.7297 14.75 13.4292 14.4603 13.9449 13.9445C14.4607 13.4288 14.7504 12.7293 14.7504 12Z", fill: "black" })), hA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { opacity: 0.4, d: "M11.8623 5.552L13.3337 4.99992L13.8857 3.52856C13.93 3.41138 14.042 3.33325 14.167 3.33325C14.292 3.33325 14.404 3.41138 14.4482 3.52856L15.0003 4.99992L16.4717 5.552C16.5889 5.59627 16.667 5.70825 16.667 5.83325C16.667 5.95825 16.5889 6.07023 16.4717 6.1145L15.0003 6.66659L14.4482 8.13794C14.404 8.25513 14.292 8.33325 14.167 8.33325C14.042 8.33325 13.93 8.25513 13.8857 8.13794L13.3337 6.66659L11.8623 6.1145C11.7451 6.07023 11.667 5.95825 11.667 5.83325C11.667 5.70825 11.7451 5.59627 11.8623 5.552ZM11.8623 13.8853L13.3337 13.3333L13.8857 11.8619C13.93 11.7447 14.042 11.6666 14.167 11.6666C14.292 11.6666 14.404 11.7447 14.4482 11.8619L15.0003 13.3333L16.4717 13.8853C16.5889 13.9296 16.667 14.0416 16.667 14.1666C16.667 14.2916 16.5889 14.4036 16.4717 14.4478L15.0003 14.9999L14.4482 16.4713C14.404 16.5885 14.292 16.6666 14.167 16.6666C14.042 16.6666 13.93 16.5885 13.8857 16.4713L13.3337 14.9999L11.8623 14.4478C11.7451 14.4036 11.667 14.2916 11.667 14.1666C11.667 14.0416 11.7451 13.9296 11.8623 13.8853Z", fill: "black", fillOpacity: 0.88 }), /* @__PURE__ */ S.createElement("path", { d: "M8.67415 5.24219C8.60645 5.09375 8.45801 5 8.29655 5C8.13509 5 7.98665 5.09375 7.91895 5.24219L6.54655 8.21354L3.5752 9.58333C3.42676 9.65104 3.33301 9.79948 3.33301 9.96354C3.33301 10.1276 3.42676 10.2734 3.5752 10.3411L6.54655 11.7135L7.91634 14.6823C7.98405 14.8307 8.13249 14.9245 8.29395 14.9245C8.4554 14.9245 8.60384 14.8307 8.67155 14.6823L10.0439 11.7109L13.0153 10.3385C13.1637 10.2708 13.2575 10.1224 13.2575 9.96094C13.2575 9.79948 13.1637 9.65104 13.0153 9.58333L10.0465 8.21354L8.67415 5.24219Z", fill: "black" })), mA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { opacity: 0.4, d: "M11.25 11.25L10 11.25L10 12.75L11.25 12.75L11.25 17.5C11.25 17.6375 11.1375 17.75 11 17.75L10 17.75L10 19.25L11 19.25C11.9656 19.25 12.75 18.4656 12.75 17.5L12.75 12.75L14 12.75L14 11.25L12.75 11.25L12.75 6.5C12.75 5.53437 11.9656 4.75 11 4.75L10 4.75L10 6.25L11 6.25C11.1375 6.25 11.25 6.3625 11.25 6.5L11.25 11.25Z", fill: "black" }), /* @__PURE__ */ S.createElement("path", { d: "M17.5 9.5C18.3281 9.5 19 10.1719 19 11L19 13C19 13.8281 18.3281 14.5 17.5 14.5L15.5 14.5C14.6719 14.5 14 13.8281 14 13L14 11C14 10.1719 14.6719 9.5 15.5 9.5L17.5 9.5ZM10 4.5L10 6.5C10 7.32812 9.32812 8 8.5 8L6.5 8C5.67187 8 5 7.32812 5 6.5L5 4.5C5 3.67187 5.67188 3 6.5 3L8.5 3C9.32812 3 10 3.67187 10 4.5ZM10 11L10 13C10 13.8281 9.32812 14.5 8.5 14.5L6.5 14.5C5.67187 14.5 5 13.8281 5 13L5 11C5 10.1719 5.67187 9.5 6.5 9.5L8.5 9.5C9.32812 9.5 10 10.1719 10 11ZM10 17.5L10 19.5C10 20.3281 9.32812 21 8.5 21L6.5 21C5.67187 21 5 20.3281 5 19.5L5 17.5C5 16.6719 5.67187 16 6.5 16L8.5 16C9.32812 16 10 16.6719 10 17.5Z", fill: "black" })), gA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { opacity: 0.4, d: "M5 5C5.55313 5 6 5.44687 6 6V16.5C6 16.775 6.225 17 6.5 17H19C19.5531 17 20 17.4469 20 18C20 18.5531 19.5531 19 19 19H6.5C5.11875 19 4 17.8813 4 16.5V6C4 5.44687 4.44687 5 5 5Z", fill: "black" }), /* @__PURE__ */ S.createElement("path", { d: "M19 7C19 6.44687 18.5531 6 18 6C17.4469 6 17 6.44687 17 7V14C17 14.5531 17.4469 15 18 15C18.5531 15 19 14.5531 19 14V7ZM13 9C13 8.44688 12.5531 8 12 8C11.4469 8 11 8.44688 11 9V14C11 14.5531 11.4469 15 12 15C12.5531 15 13 14.5531 13 14V9ZM10 12C10 11.4469 9.55313 11 9 11C8.44687 11 8 11.4469 8 12V14C8 14.5531 8.44687 15 9 15C9.55313 15 10 14.5531 10 14V12ZM15 10C14.4469 10 14 10.4469 14 11V14C14 14.5531 14.4469 15 15 15C15.5531 15 16 14.5531 16 14V11C16 10.4469 15.5531 10 15 10Z", fill: "black" })), yA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M11.625 8.08104L11.25 7.65917L11.1188 7.51229C10.3063 6.59979 9.07812 6.17479 7.875 6.39354C6.20937 6.69667 5 8.14667 5 9.84042V9.94979C5 10.9592 5.41875 11.9217 6.15937 12.6092L11.9062 17.9623C11.9313 17.9842 11.9656 17.9998 12 17.9998C12.0344 17.9998 12.0688 17.9873 12.0938 17.9623L17.8438 12.6092C18.5813 11.9217 19 10.9592 19 9.94979V9.84042C19 8.14667 17.7906 6.69667 16.125 6.39354C14.9219 6.17479 13.6938 6.59979 12.8813 7.51229L12.75 7.65917L12.375 8.08104C12.2812 8.18729 12.1438 8.24979 12 8.24979C11.8562 8.24979 11.7219 8.18729 11.625 8.08104ZM12.7156 6.29667C13.7188 5.51229 15.0219 5.17792 16.3031 5.40917C18.4438 5.79979 20 7.66542 20 9.84042V9.94979C20 11.0748 19.5906 12.156 18.8562 12.9967C18.75 13.1154 18.6406 13.231 18.5219 13.3404L12.7719 18.6935C12.7469 18.7185 12.7188 18.7404 12.6906 18.7623C12.4938 18.9154 12.25 18.9967 12 18.9967C11.7125 18.9967 11.4375 18.8873 11.225 18.6935L5.475 13.3435C5.35625 13.2342 5.24688 13.1185 5.14062 12.9998C4.40938 12.156 4 11.0748 4 9.94979V9.84042C4 7.66542 5.55625 5.79979 7.69688 5.40917C8.975 5.17792 10.2781 5.50917 11.2812 6.29667C11.4906 6.46229 11.6875 6.64354 11.8656 6.84667L11.9969 6.99354L12.1281 6.84667C12.2594 6.69979 12.3969 6.56229 12.5437 6.43729C12.6 6.39042 12.6562 6.34354 12.7125 6.29667H12.7156Z", fill: "black" })), CA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M15.6969 12.0656C16.2031 11.3375 16.5 10.4563 16.5 9.5C16.5 7.01562 14.4844 5 12 5C9.51562 5 7.5 7.01562 7.5 9.5C7.5 10.4563 7.79687 11.3375 8.30312 12.0656C8.43125 12.25 8.57812 12.45 8.72813 12.6594C9.125 13.2063 9.575 13.8219 9.91563 14.4438C10.1938 14.95 10.3438 15.4844 10.4219 16.0031H9.40625C9.3375 15.6281 9.22187 15.2625 9.0375 14.925C8.72812 14.3625 8.34375 13.8344 7.95938 13.3062C7.79688 13.0844 7.63437 12.8625 7.47812 12.6375C6.8625 11.7469 6.5 10.6656 6.5 9.5C6.5 6.4625 8.9625 4 12 4C15.0375 4 17.5 6.4625 17.5 9.5C17.5 10.6656 17.1375 11.7469 16.5188 12.6344C16.3625 12.8594 16.2 13.0813 16.0375 13.3031C15.6531 13.8281 15.2688 14.3562 14.9594 14.9219C14.775 15.2594 14.6594 15.625 14.5906 16H13.5781C13.6562 15.4812 13.8063 14.9469 14.0844 14.4406C14.425 13.8156 14.875 13.2 15.2719 12.6562C15.425 12.4469 15.5687 12.25 15.6969 12.0625V12.0656ZM12 7C10.6188 7 9.5 8.11875 9.5 9.5C9.5 9.775 9.275 10 9 10C8.725 10 8.5 9.775 8.5 9.5C8.5 7.56562 10.0656 6 12 6C12.275 6 12.5 6.225 12.5 6.5C12.5 6.775 12.275 7 12 7ZM10.5844 18C10.7906 18.5813 11.3469 19 12 19C12.6531 19 13.2094 18.5813 13.4156 18H10.5844ZM9.5 17.5V17.3344C9.5 17.15 9.65 17 9.83437 17H14.1656C14.35 17 14.5 17.15 14.5 17.3344V17.5C14.5 18.8813 13.3812 20 12 20C10.6188 20 9.5 18.8813 9.5 17.5Z", fill: "black" })), bA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M16.6469 5.14629C16.8406 4.95254 17.1594 4.95254 17.3531 5.14629L19.8531 7.64629C20.0469 7.84004 20.0469 8.15879 19.8531 8.35254L17.3531 10.8525C17.1594 11.0463 16.8406 11.0463 16.6469 10.8525C16.4531 10.6588 16.4531 10.34 16.6469 10.1463L18.2937 8.49941H16.5H14.6219C14.3562 8.49941 14.1031 8.60566 13.9156 8.79316L10.7063 11.9994L13.9156 15.2057C14.1031 15.3932 14.3562 15.4994 14.6219 15.4994H16.5H18.2937L16.6469 13.8525C16.4531 13.6588 16.4531 13.34 16.6469 13.1463C16.8406 12.9525 17.1594 12.9525 17.3531 13.1463L19.8531 15.6463C20.0469 15.84 20.0469 16.1588 19.8531 16.3525L17.3531 18.8525C17.1594 19.0463 16.8406 19.0463 16.6469 18.8525C16.4531 18.6588 16.4531 18.34 16.6469 18.1463L18.2937 16.4994H16.5H14.6219C14.0906 16.4994 13.5813 16.29 13.2063 15.915L9.94063 12.6463C9.84688 12.5525 9.71875 12.4994 9.5875 12.4994H5.5H4.5C4.225 12.4994 4 12.2744 4 11.9994C4 11.7244 4.225 11.4994 4.5 11.4994H5.5H9.58437C9.71562 11.4994 9.84375 11.4463 9.9375 11.3525L13.2063 8.08379C13.5813 7.70879 14.0906 7.49941 14.6219 7.49941H16.5H18.2937L16.6469 5.85254C16.4531 5.65879 16.4531 5.34004 16.6469 5.14629Z", fill: "black" })), SA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M15.7563 7.80312C15.975 7.92812 16.2312 8 16.5 8C16.5813 8 16.6625 7.99375 16.7375 7.98125C17.4531 7.86563 18 7.24688 18 6.5C18 5.67188 17.3281 5 16.5 5C15.6719 5 15 5.67188 15 6.5C15 6.52187 15 6.54063 15 6.5625C15.0156 6.91875 15.1531 7.24062 15.3719 7.49062C15.4812 7.61562 15.6094 7.72187 15.7531 7.80312H15.7563ZM15.5719 8.82188C15.0969 8.63125 14.6906 8.29688 14.4125 7.875L8.95937 10.0531C8.98438 10.1969 9 10.3469 9 10.5C9 10.95 8.88125 11.3719 8.67188 11.7375L12.9844 15.5125C13.3906 15.2031 13.8969 15.0125 14.4438 15.0031L15.5688 8.825L15.5719 8.82188ZM15.4312 15.1781C16.35 15.5469 17 16.4469 17 17.5C17 18.8813 15.8813 20 14.5 20C13.1187 20 12 18.8813 12 17.5C12 17.05 12.1187 16.6281 12.3281 16.2625L8.01562 12.4875C7.59375 12.8094 7.06875 13 6.5 13C5.11875 13 4 11.8812 4 10.5C4 9.11875 5.11875 8 6.5 8C7.37188 8 8.14062 8.44688 8.5875 9.125L14.0406 6.94688C14.0156 6.80313 14 6.65313 14 6.5C14 5.11875 15.1187 4 16.5 4C17.8813 4 19 5.11875 19 6.5C19 7.8625 17.9094 8.97188 16.5531 9L15.4281 15.1781H15.4312ZM7.74375 11.3375C7.76562 11.3063 7.78437 11.275 7.80312 11.2406C7.92812 11.0219 8 10.7687 8 10.4969C8 9.66875 7.32812 8.99687 6.5 8.99687C5.67188 8.99687 5 9.66875 5 10.4969C5 11.325 5.67188 11.9969 6.5 11.9969C6.76562 11.9969 7.01875 11.9281 7.23438 11.8031C7.4375 11.6875 7.6125 11.5281 7.74375 11.3344V11.3375ZM13.1062 16.9438C13.0375 17.1156 13 17.3031 13 17.5C13 18.3281 13.6719 19 14.5 19C15.3281 19 16 18.3281 16 17.5C16 16.6719 15.3281 16 14.5 16C14.0625 16 13.6688 16.1875 13.3969 16.4844C13.3125 16.575 13.2406 16.675 13.1812 16.7844C13.1531 16.8344 13.1281 16.8906 13.1062 16.9438Z", fill: "black" })), EA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M15.4281 8.24062C15.75 8.0875 16.1125 8 16.5 8C17.8813 8 19 9.11875 19 10.5C19 10.7406 18.9656 10.9688 18.9062 11.1875C18.7781 11.6406 18.9844 12.125 19.4 12.3469C20.3531 12.85 21 13.85 21 15C21 16.6562 19.6562 18 18 18H6.5C4.56562 18 3 16.4344 3 14.5C3 12.975 3.975 11.6781 5.3375 11.1969C5.72188 11.0625 5.9875 10.7063 6.00313 10.2969C6.10938 7.90625 8.08125 6 10.5 6C12.0219 6 13.3656 6.75312 14.1812 7.9125C14.4625 8.30937 14.9875 8.45 15.4281 8.24062ZM15 7.3375C14.0031 5.92188 12.3594 5 10.5 5C7.54375 5 5.13437 7.33125 5.00625 10.2531C3.25625 10.8719 2 12.5375 2 14.5C2 16.9844 4.01562 19 6.5 19H18C20.2094 19 22 17.2094 22 15C22 13.4656 21.1344 12.1312 19.8656 11.4625C19.9531 11.1562 20 10.8344 20 10.5C20 8.56562 18.4344 7 16.5 7C15.9625 7 15.4531 7.12188 15 7.3375Z", fill: "black" })), wA = (r) => /* @__PURE__ */ S.createElement("svg", be({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, r), /* @__PURE__ */ S.createElement("path", { d: "M5 7C5 6.44687 5.44687 6 6 6H9.87813C10.1438 6 10.3969 6.10625 10.5844 6.29375L11.7063 7.41563C12.0813 7.79063 12.5906 8 13.1219 8H18C18.5531 8 19 8.44688 19 9V10H5V7ZM5 11H19V17C19 17.5531 18.5531 18 18 18H6C5.44687 18 5 17.5531 5 17V11ZM6 5C4.89688 5 4 5.89688 4 7V17C4 18.1031 4.89688 19 6 19H18C19.1031 19 20 18.1031 20 17V9C20 7.89687 19.1031 7 18 7H13.1219C12.8562 7 12.6031 6.89375 12.4156 6.70625L11.2937 5.58438C10.9187 5.20938 10.4094 5 9.87813 5H6Z", fill: "black" }));
export {
  rL as AddIcon,
  nA as Affix,
  gR as Alert,
  dA as AlicornIcon,
  JL as Anchor,
  rA as App,
  ML as AutoComplete,
  qS as Avatar,
  sR as Badge,
  ER as Breadcrumb,
  Em as Button,
  AL as Calendar,
  GS as Card,
  HL as Carousel,
  f2 as Cascader,
  Ll as Center,
  gA as ChartColumnIcon,
  iA as ChartLineIcon,
  oR as Checkbox,
  SA as CircleNodesIcon,
  EA as CloudIcon,
  RA as Col,
  DL as Collapse,
  wL as ColorPicker,
  Qe as ConfigProvider,
  oA as ConnectionsIcon,
  lA as DatabaseIcon,
  TL as DatePicker,
  cR as Descriptions,
  ZL as Divider,
  GL as Drawer,
  SR as Dropdown,
  d2 as Empty,
  v2 as Flex,
  CL as FloatButton,
  wA as FolderClosedIcon,
  Lu as Form,
  pA as GearIcon,
  vL as GlobalNavWidth,
  aA as GlobalNavigation,
  kA as Grid,
  uA as GridIcon,
  yA as HeartIcon,
  jL as Image,
  wm as Input,
  RL as InputNumber,
  Rf as Layout,
  CA as LightBulbIcon,
  dR as List,
  QL as LoadingModal,
  nL as LockIcon,
  iR as Mentions,
  c9 as Menu,
  tA as MenuItem,
  YL as Message,
  vA as MessageQuestionIcon,
  mR as Modal,
  dL as MpLogoIcon,
  qL as Notification,
  eA as Pagination,
  KL as Popconfirm,
  fR as Popover,
  BL as Progress,
  VL as QRCode,
  KS as Radio,
  bL as Rate,
  vR as Result,
  _A as Row,
  XD as SearchIcon,
  PL as Segmented,
  EL as Select,
  sA as ShieldKeyholeIcon,
  mA as SiteMapIcon,
  hR as Skeleton,
  xL as Slider,
  bR as Space,
  hA as SparklesIcon,
  pR as Spin,
  bA as SplitIcon,
  $L as Statistic,
  XL as Steps,
  ZD as SuiteLogo,
  kL as Switch,
  FL as Table,
  IL as Tabs,
  lR as Tag,
  OL as TimePicker,
  LL as Timeline,
  xm as Tooltip,
  zL as Tour,
  NL as Transfer,
  UL as Tree,
  SL as TreeSelect,
  _L as Upload,
  cA as UsersIcon,
  WL as Watermark,
  fA as WrenchIcon
};
