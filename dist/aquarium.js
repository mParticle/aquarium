var rD = Object.defineProperty, aD = Object.defineProperties;
var iD = Object.getOwnPropertyDescriptors;
var hx = Object.getOwnPropertySymbols;
var oD = Object.prototype.hasOwnProperty, lD = Object.prototype.propertyIsEnumerable;
var mx = (r, o, s) => o in r ? rD(r, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[o] = s, Me = (r, o) => {
  for (var s in o || (o = {}))
    oD.call(o, s) && mx(r, s, o[s]);
  if (hx)
    for (var s of hx(o))
      lD.call(o, s) && mx(r, s, o[s]);
  return r;
}, gi = (r, o) => aD(r, iD(o));
import { jsx as V, Fragment as Al, jsxs as ka } from "react/jsx-runtime";
import { ConfigProvider as LT, Button as PT, FloatButton as uD, Rate as sD, Form as Pl, TreeSelect as cD, Select as fD, Mentions as IT, Radio as uS, ColorPicker as dD, Slider as vD, Cascader as Cg, DatePicker as pD, Checkbox as zT, Input as Jv, InputNumber as hD, Switch as mD, Upload as gD, AutoComplete as yD, TimePicker as bD, Transfer as SD, Collapse as CD, Timeline as ED, Calendar as wD, Segmented as xD, Tabs as TD, Tag as $T, Tour as RD, Carousel as _D, Tooltip as kD, Statistic as MD, Tree as OD, Image as ND, QRCode as DD, Badge as UT, Card as sS, Avatar as jT, Descriptions as HT, Table as AD, Empty as cS, Popover as LD, List as FT, Progress as PD, Result as ID, Spin as zD, Skeleton as $D, Watermark as UD, Popconfirm as jD, Drawer as HD, Modal as FD, notification as BD, Alert as BT, message as VD, Flex as WD, Divider as KD, Space as GD, Layout as ep, Steps as qD, Anchor as YD, Dropdown as VT, Breadcrumb as WT, Pagination as QD, Menu as XD, Affix as ZD, App as JD } from "antd";
import { Col as oU, Grid as lU, Row as uU } from "antd";
import * as T from "react";
import Oa, { useEffect as Vo, useState as Wo, useMemo as E1, useCallback as Ml, useRef as Ma, useLayoutEffect as eA, useImperativeHandle as KT, createContext as Eg, useContext as Ou, forwardRef as tA, Fragment as nA, createElement as rA } from "react";
const aA = {
  token: {
    colorLinkHover: "#ab8eff",
    controlOutline: "rgba(0.21176470816135406, 0, 0.8196078538894653, 0.10000000149011612)",
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
    colorBgMask: "#babbb5",
    colorTextBase: "#0f0e0e",
    colorPrimary: "#3600d1",
    colorError: "#f5222d",
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
      primaryShadow: "0 2px 0 rgba(54, 0, 209, 0.1)"
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
}, Qe = (r) => /* @__PURE__ */ V(LT, gi(Me({}, r), { theme: aA })), wg = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(PT, gi(Me({}, r), { children: r.children })) });
wg.Group = PT.Group;
const g$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(uD, Me({}, r)) }), y$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(sD, Me({}, r)) }), Au = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(Pl, gi(Me({}, r), { children: r.children })) });
Au.useForm = Pl.useForm;
Au.useWatch = Pl.useWatch;
Au.useFormInstance = Pl.useFormInstance;
Au.Item = Pl.Item;
Au.List = Pl.List;
Au.displayName = Pl.displayName;
Au.Provider = Pl.Provider;
Au.ErrorList = Pl.ErrorList;
const b$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(cD, Me({}, r)) }), S$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(fD, Me({}, r)) }), iA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(IT, Me({}, r)) });
iA.getMentions = IT.getMentions;
const GT = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(uS, Me({}, r)) });
GT.Group = uS.Group;
GT.Button = uS.Button;
const C$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(dD, Me({}, r)) }), E$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(vD, Me({}, r)) }), fS = (r) => /* @__PURE__ */ V(LT, { children: /* @__PURE__ */ V(Cg, Me({}, r)) });
fS.Panel = Cg.Panel;
fS.SHOW_PARENT = Cg.SHOW_PARENT;
fS.SHOW_CHILD = Cg.SHOW_CHILD;
const w$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(pD, Me({}, r)) }), oA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(zT, Me({}, r)) });
oA.Group = zT.Group;
const tp = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(Jv, Me({}, r)) });
tp.Group = Jv.Group;
tp.Password = Jv.Password;
tp.Search = Jv.Search;
tp.TextArea = Jv.TextArea;
const x$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(hD, Me({}, r)) }), T$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(mD, Me({}, r)) }), R$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(gD, Me({}, r)) }), _$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(yD, Me({}, r)) }), k$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(bD, Me({}, r)) }), M$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(SD, Me({}, r)) }), O$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(CD, Me({}, r)) }), N$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(ED, Me({}, r)) }), D$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(wD, Me({}, r)) }), A$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(xD, Me({}, r)) }), L$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(TD, Me({}, r)) }), lA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V($T, Me({}, r)) }), uA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V($T.CheckableTag, Me({}, r)) });
lA.CheckableTag = uA;
const P$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(RD, Me({}, r)) }), I$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(_D, Me({}, r)) }), xg = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(kD, gi(Me({}, r), { children: /* @__PURE__ */ V(Al, { children: r.children }) })) }), z$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(MD, Me({}, r)) }), $$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(OD, Me({}, r)) }), U$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(ND, Me({}, r)) }), j$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(DD, Me({}, r)) }), sA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(UT, Me({}, r)) });
sA.Ribbon = UT.Ribbon;
const qT = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(sS, Me({}, r)) });
qT.Meta = sS.Meta;
qT.Grid = sS.Grid;
const YT = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(jT, Me({}, r)) });
YT.Group = jT.Group;
const cA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(HT, Me({}, r)) });
cA.Item = HT.Item;
const H$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(AD, Me({}, r)) }), dS = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(cS, Me({}, r)) });
dS.PRESENTED_IMAGE_DEFAULT = cS.PRESENTED_IMAGE_DEFAULT;
dS.PRESENTED_IMAGE_SIMPLE = cS.PRESENTED_IMAGE_SIMPLE;
const F$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(LD, gi(Me({}, r), { children: /* @__PURE__ */ V(Al, { children: r.children }) })) }), fA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(FT, Me({}, r)) });
fA.Item = FT.Item;
const B$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(PD, Me({}, r)) }), dA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(ID, Me({}, r)) }), vA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(zD, Me({}, r)) }), pA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V($D, gi(Me({}, r), { active: !0, style: Me({ width: "100%" }, r.style) })) }), V$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(UD, Me({}, r)) }), W$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(jD, gi(Me({}, r), { children: /* @__PURE__ */ V(Al, { children: r.children }) })) }), K$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(HD, Me({}, r)) }), hA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(FD, Me({}, r)) }), G$ = (r) => {
  const [o, s] = BD.useNotification();
  return /* @__PURE__ */ ka(Qe, { children: [
    s,
    /* @__PURE__ */ V("span", { onClick: () => {
      o.open(Me({}, r));
    }, children: r.children })
  ] });
}, mA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(BT, Me({}, r)) });
mA.ErrorBoundary = BT.ErrorBoundary;
const q$ = (r) => {
  const [o, s] = VD.useMessage();
  return /* @__PURE__ */ ka(Qe, { children: [
    s,
    /* @__PURE__ */ V("span", { onClick: () => {
      o.open(Me({}, r));
    }, children: r.children })
  ] });
}, gA = (r) => {
  Vo(r, []);
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
function Y$(r) {
  const [o, s, c] = yA(r.fetchData);
  return /* @__PURE__ */ V(Al, { children: /* @__PURE__ */ ka(hA, gi(Me({}, r), { children: [
    o && /* @__PURE__ */ V(pA, {}),
    s && /* @__PURE__ */ V(dA, { status: "error", title: "Error Loading" }),
    !o && !s && r.children(c)
  ] })) });
}
const vS = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(WD, Me({}, r)) }), Ll = (r) => /* @__PURE__ */ V(Al, { children: /* @__PURE__ */ V(vS, gi(Me({ align: "center", justify: "center" }, r), { children: r.children })) }), Q$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(KD, Me({}, r)) }), bA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(GD, Me({}, r)) }), Rf = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(ep, Me({}, r)) });
Rf.Sider = ep.Sider;
Rf.Footer = ep.Footer;
Rf.Content = ep.Content;
Rf.Header = ep.Header;
const X$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(qD, Me({}, r)) }), Z$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(YD, Me({}, r)) }), SA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(VT, gi(Me({}, r), { children: r.children })) });
SA.Button = VT.Button;
const CA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(WT, Me({}, r)) });
CA.Item = WT.Item;
const J$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(QD, Me({}, r)) });
function QT(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var XT = { exports: {} };
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
})(XT);
var EA = XT.exports;
const wn = /* @__PURE__ */ QT(EA);
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
function Vn(r) {
  "@babel/helpers - typeof";
  return Vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(o) {
    return typeof o;
  } : function(o) {
    return o && typeof Symbol == "function" && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, Vn(r);
}
function wA(r, o) {
  if (Vn(r) != "object" || !r)
    return r;
  var s = r[Symbol.toPrimitive];
  if (s !== void 0) {
    var c = s.call(r, o || "default");
    if (Vn(c) != "object")
      return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(r);
}
function ZT(r) {
  var o = wA(r, "string");
  return Vn(o) == "symbol" ? o : String(o);
}
function tt(r, o, s) {
  return o = ZT(o), o in r ? Object.defineProperty(r, o, {
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
function w1(r, o) {
  (o == null || o > r.length) && (o = r.length);
  for (var s = 0, c = new Array(o); s < o; s++)
    c[s] = r[s];
  return c;
}
function xA(r) {
  if (Array.isArray(r))
    return w1(r);
}
function JT(r) {
  if (typeof Symbol != "undefined" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function pS(r, o) {
  if (r) {
    if (typeof r == "string")
      return w1(r, o);
    var s = Object.prototype.toString.call(r).slice(8, -1);
    if (s === "Object" && r.constructor && (s = r.constructor.name), s === "Map" || s === "Set")
      return Array.from(r);
    if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
      return w1(r, o);
  }
}
function TA() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ar(r) {
  return xA(r) || JT(r) || pS(r) || TA();
}
function eR(r) {
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
function tR() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xe(r, o) {
  return eR(r) || RA(r, o) || pS(r, o) || tR();
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
var x1 = { exports: {} }, cn = {};
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
  var r = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), h = Symbol.for("react.context"), C = Symbol.for("react.server_context"), x = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), z;
  z = Symbol.for("react.module.reference");
  function B(A) {
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
    return B(A) === h;
  }, cn.isContextProvider = function(A) {
    return B(A) === m;
  }, cn.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === r;
  }, cn.isForwardRef = function(A) {
    return B(A) === x;
  }, cn.isFragment = function(A) {
    return B(A) === s;
  }, cn.isLazy = function(A) {
    return B(A) === N;
  }, cn.isMemo = function(A) {
    return B(A) === _;
  }, cn.isPortal = function(A) {
    return B(A) === o;
  }, cn.isProfiler = function(A) {
    return B(A) === d;
  }, cn.isStrictMode = function(A) {
    return B(A) === c;
  }, cn.isSuspense = function(A) {
    return B(A) === E;
  }, cn.isSuspenseList = function(A) {
    return B(A) === M;
  }, cn.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === s || A === d || A === c || A === E || A === M || A === L || typeof A == "object" && A !== null && (A.$$typeof === N || A.$$typeof === _ || A.$$typeof === m || A.$$typeof === h || A.$$typeof === x || A.$$typeof === z || A.getModuleId !== void 0);
  }, cn.typeOf = B, cn;
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
    var r = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), h = Symbol.for("react.context"), C = Symbol.for("react.server_context"), x = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), z = !1, B = !1, A = !1, G = !1, $ = !1, I;
    I = Symbol.for("react.module.reference");
    function P(Ee) {
      return !!(typeof Ee == "string" || typeof Ee == "function" || Ee === s || Ee === d || $ || Ee === c || Ee === E || Ee === M || G || Ee === L || z || B || A || typeof Ee == "object" && Ee !== null && (Ee.$$typeof === N || Ee.$$typeof === _ || Ee.$$typeof === m || Ee.$$typeof === h || Ee.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Ee.$$typeof === I || Ee.getModuleId !== void 0));
    }
    function U(Ee) {
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
                var zt = Dt && Dt.$$typeof;
                switch (zt) {
                  case C:
                  case h:
                  case x:
                  case N:
                  case _:
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
    var Y = h, q = m, ne = r, oe = x, re = s, ge = N, pe = _, te = o, se = d, de = c, Ce = E, ke = M, we = !1, Ae = !1;
    function Ie(Ee) {
      return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ie(Ee) {
      return Ae || (Ae = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function he(Ee) {
      return U(Ee) === h;
    }
    function Se(Ee) {
      return U(Ee) === m;
    }
    function ze(Ee) {
      return typeof Ee == "object" && Ee !== null && Ee.$$typeof === r;
    }
    function Ke(Ee) {
      return U(Ee) === x;
    }
    function Xe(Ee) {
      return U(Ee) === s;
    }
    function it(Ee) {
      return U(Ee) === N;
    }
    function Ve(Ee) {
      return U(Ee) === _;
    }
    function nt(Ee) {
      return U(Ee) === o;
    }
    function Nt(Ee) {
      return U(Ee) === d;
    }
    function $e(Ee) {
      return U(Ee) === c;
    }
    function et(Ee) {
      return U(Ee) === E;
    }
    function Vt(Ee) {
      return U(Ee) === M;
    }
    fn.ContextConsumer = Y, fn.ContextProvider = q, fn.Element = ne, fn.ForwardRef = oe, fn.Fragment = re, fn.Lazy = ge, fn.Memo = pe, fn.Portal = te, fn.Profiler = se, fn.StrictMode = de, fn.Suspense = Ce, fn.SuspenseList = ke, fn.isAsyncMode = Ie, fn.isConcurrentMode = ie, fn.isContextConsumer = he, fn.isContextProvider = Se, fn.isElement = ze, fn.isForwardRef = Ke, fn.isFragment = Xe, fn.isLazy = it, fn.isMemo = Ve, fn.isPortal = nt, fn.isProfiler = Nt, fn.isStrictMode = $e, fn.isSuspense = et, fn.isSuspenseList = Vt, fn.isValidElementType = P, fn.typeOf = U;
  }()), fn;
}
process.env.NODE_ENV === "production" ? x1.exports = kA() : x1.exports = MA();
var nR = x1.exports;
function Vv(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = [];
  return Oa.Children.forEach(r, function(c) {
    c == null && !o.keepEmpty || (Array.isArray(c) ? s = s.concat(Vv(c)) : nR.isFragment(c) && c.props ? s = s.concat(Vv(c.props.children, o)) : s.push(c));
  }), s;
}
var T1 = {}, hS = [], OA = function(o) {
  hS.push(o);
};
function _f(r, o) {
  if (process.env.NODE_ENV !== "production" && !r && console !== void 0) {
    var s = hS.reduce(function(c, d) {
      return d(c != null ? c : "", "warning");
    }, o);
    s && console.error("Warning: ".concat(s));
  }
}
function NA(r, o) {
  if (process.env.NODE_ENV !== "production" && !r && console !== void 0) {
    var s = hS.reduce(function(c, d) {
      return d(c != null ? c : "", "note");
    }, o);
    s && console.warn("Note: ".concat(s));
  }
}
function rR() {
  T1 = {};
}
function aR(r, o, s) {
  !o && !T1[s] && (r(!1, s), T1[s] = !0);
}
function pa(r, o) {
  aR(_f, r, o);
}
function DA(r, o) {
  aR(NA, r, o);
}
pa.preMessage = OA;
pa.resetWarned = rR;
pa.noteOnce = DA;
var R1 = { exports: {} }, Ba = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var n1, Sx;
function iR() {
  if (Sx)
    return n1;
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
  return n1 = d() ? Object.assign : function(m, h) {
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
  }, n1;
}
var Wm = { exports: {} }, r1 = {};
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
      var z = !1, B = null, A = -1, G = 5, $ = 0;
      r.unstable_shouldYield = function() {
        return r.unstable_now() >= $;
      }, d = function() {
      }, r.unstable_forceFrameRate = function(ie) {
        0 > ie || 125 < ie ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : G = 0 < ie ? Math.floor(1e3 / ie) : 5;
      };
      var I = new MessageChannel(), P = I.port2;
      I.port1.onmessage = function() {
        if (B !== null) {
          var ie = r.unstable_now();
          $ = ie + G;
          try {
            B(!0, ie) ? P.postMessage(null) : (z = !1, B = null);
          } catch (he) {
            throw P.postMessage(null), he;
          }
        } else
          z = !1;
      }, o = function(ie) {
        B = ie, z || (z = !0, P.postMessage(null));
      }, s = function(ie, he) {
        A = _(function() {
          ie(r.unstable_now());
        }, he);
      }, c = function() {
        N(A), A = -1;
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
    function q(ie) {
      var he = ie[0];
      if (he !== void 0) {
        var Se = ie.pop();
        if (Se !== he) {
          ie[0] = Se;
          e:
            for (var ze = 0, Ke = ie.length; ze < Ke; ) {
              var Xe = 2 * (ze + 1) - 1, it = ie[Xe], Ve = Xe + 1, nt = ie[Ve];
              if (it !== void 0 && 0 > ne(it, Se))
                nt !== void 0 && 0 > ne(nt, it) ? (ie[ze] = nt, ie[Ve] = Se, ze = Ve) : (ie[ze] = it, ie[Xe] = Se, ze = Xe);
              else if (nt !== void 0 && 0 > ne(nt, Se))
                ie[ze] = nt, ie[Ve] = Se, ze = Ve;
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
          q(re), he.sortIndex = he.expirationTime, U(oe, he);
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
          var ze = pe.callback;
          if (typeof ze == "function") {
            pe.callback = null, te = pe.priorityLevel;
            var Ke = ze(pe.expirationTime <= he);
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
    var Ie = d;
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
      return Ke = Se + Ke, ie = { id: ge++, callback: he, priorityLevel: ie, startTime: Se, expirationTime: Ke, sortIndex: -1 }, Se > ze ? (ie.sortIndex = Se, U(re, ie), Y(oe) === null && ie === Y(re) && (Ce ? c() : Ce = !0, s(we, Se - ze))) : (ie.sortIndex = Ke, U(oe, ie), de || se || (de = !0, o(Ae))), ie;
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
  }(r1)), r1;
}
var a1 = {};
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
              var ye = r.unstable_now(), Ne = !0;
              _(Ne, ye), _ = null;
            } catch (We) {
              throw setTimeout(L, 0), We;
            }
        };
        c = function(ye) {
          _ !== null ? setTimeout(c, 0, ye) : (_ = ye, setTimeout(L, 0));
        }, d = function(ye, Ne) {
          N = setTimeout(ye, Ne);
        }, m = function() {
          clearTimeout(N);
        }, r.unstable_shouldYield = function() {
          return !1;
        }, h = r.unstable_forceFrameRate = function() {
        };
      } else {
        var z = window.setTimeout, B = window.clearTimeout;
        if (typeof console != "undefined") {
          var A = window.requestAnimationFrame, G = window.cancelAnimationFrame;
          typeof A != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof G != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        }
        var $ = !1, I = null, P = -1, U = 5, Y = 0;
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
        var q = function() {
          if (I !== null) {
            var ye = r.unstable_now();
            Y = ye + U;
            var Ne = !0;
            try {
              var We = I(Ne, ye);
              We ? oe.postMessage(null) : ($ = !1, I = null);
            } catch (xt) {
              throw oe.postMessage(null), xt;
            }
          } else
            $ = !1;
        }, ne = new MessageChannel(), oe = ne.port2;
        ne.port1.onmessage = q, c = function(ye) {
          I = ye, $ || ($ = !0, oe.postMessage(null));
        }, d = function(ye, Ne) {
          P = z(function() {
            ye(r.unstable_now());
          }, Ne);
        }, m = function() {
          B(P), P = -1;
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
      var Ce = 1, ke = 2, we = 3, Ae = 4, Ie = 5;
      function ie(ye, Ne) {
      }
      var he = 1073741823, Se = -1, ze = 250, Ke = 5e3, Xe = 1e4, it = he, Ve = [], nt = [], Nt = 1, $e = null, et = we, Vt = !1, Ee = !1, mt = !1;
      function Dt(ye) {
        for (var Ne = ge(nt); Ne !== null; ) {
          if (Ne.callback === null)
            pe(nt);
          else if (Ne.startTime <= ye)
            pe(nt), Ne.sortIndex = Ne.expirationTime, re(Ve, Ne);
          else
            return;
          Ne = ge(nt);
        }
      }
      function zt(ye) {
        if (mt = !1, Dt(ye), !Ee)
          if (ge(Ve) !== null)
            Ee = !0, c(Ut);
          else {
            var Ne = ge(nt);
            Ne !== null && d(zt, Ne.startTime - ye);
          }
      }
      function Ut(ye, Ne) {
        Ee = !1, mt && (mt = !1, m()), Vt = !0;
        var We = et;
        try {
          var xt;
          if (!s)
            return Ze(ye, Ne);
        } finally {
          $e = null, et = We, Vt = !1;
        }
      }
      function Ze(ye, Ne) {
        var We = Ne;
        for (Dt(We), $e = ge(Ve); $e !== null && !o && !($e.expirationTime > We && (!ye || r.unstable_shouldYield())); ) {
          var xt = $e.callback;
          if (typeof xt == "function") {
            $e.callback = null, et = $e.priorityLevel;
            var Mt = $e.expirationTime <= We, rt = xt(Mt);
            We = r.unstable_now(), typeof rt == "function" ? $e.callback = rt : $e === ge(Ve) && pe(Ve), Dt(We);
          } else
            pe(Ve);
          $e = ge(Ve);
        }
        if ($e !== null)
          return !0;
        var st = ge(nt);
        return st !== null && d(zt, st.startTime - We), !1;
      }
      function kt(ye, Ne) {
        switch (ye) {
          case Ce:
          case ke:
          case we:
          case Ae:
          case Ie:
            break;
          default:
            ye = we;
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
          case Ce:
          case ke:
          case we:
            Ne = we;
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
      function Zt(ye) {
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
          case Ce:
            st = Se;
            break;
          case ke:
            st = ze;
            break;
          case Ie:
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
          callback: Ne,
          priorityLevel: ye,
          startTime: Mt,
          expirationTime: on,
          sortIndex: -1
        };
        return Mt > xt ? (Ot.sortIndex = Mt, re(nt, Ot), ge(Ve) === null && Ot === ge(nt) && (mt ? m() : mt = !0, d(zt, Mt - xt))) : (Ot.sortIndex = on, re(Ve, Ot), !Ee && !Vt && (Ee = !0, c(Ut))), Ot;
      }
      function Wt() {
      }
      function Qt() {
        !Ee && !Vt && (Ee = !0, c(Ut));
      }
      function ut() {
        return ge(Ve);
      }
      function Gt(ye) {
        ye.callback = null;
      }
      function Wn() {
        return et;
      }
      var qt = h, en = null;
      r.unstable_IdlePriority = Ie, r.unstable_ImmediatePriority = Ce, r.unstable_LowPriority = Ae, r.unstable_NormalPriority = we, r.unstable_Profiling = en, r.unstable_UserBlockingPriority = ke, r.unstable_cancelCallback = Gt, r.unstable_continueExecution = Qt, r.unstable_getCurrentPriorityLevel = Wn, r.unstable_getFirstCallbackNode = ut, r.unstable_next = gt, r.unstable_pauseExecution = Wt, r.unstable_requestPaint = qt, r.unstable_runWithPriority = kt, r.unstable_scheduleCallback = ot, r.unstable_wrapCallback = Zt;
    }();
  }(a1)), a1;
}
var wx;
function oR() {
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
    return Ba;
  xx = 1;
  var r = Oa, o = iR(), s = oR();
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
  function z(n, i, u, v) {
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
  function B(n, i, u, v) {
    if (i === null || typeof i == "undefined" || z(n, i, u, v))
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
  function I(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var i = n.replace(
      $,
      I
    );
    G[i] = new A(i, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var i = n.replace($, I);
    G[i] = new A(i, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var i = n.replace($, I);
    G[i] = new A(i, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    G[n] = new A(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), G.xlinkHref = new A("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    G[n] = new A(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function P(n, i, u, v) {
    var g = G.hasOwnProperty(i) ? G[i] : null, S = g !== null ? g.type === 0 : v ? !1 : !(!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N");
    S || (B(i, u, g, v) && (u = null), v || g === null ? L(i) && (u === null ? n.removeAttribute(i) : n.setAttribute(i, "" + u)) : g.mustUseProperty ? n[g.propertyName] = u === null ? g.type === 3 ? !1 : "" : u : (i = g.attributeName, v = g.attributeNamespace, u === null ? n.removeAttribute(i) : (g = g.type, u = g === 3 || g === 4 && u === !0 ? "" : "" + u, v ? n.setAttributeNS(v, i, u) : n.setAttribute(i, u))));
  }
  var U = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Y = 60103, q = 60106, ne = 60107, oe = 60108, re = 60114, ge = 60109, pe = 60110, te = 60112, se = 60113, de = 60120, Ce = 60115, ke = 60116, we = 60121, Ae = 60128, Ie = 60129, ie = 60130, he = 60131;
  if (typeof Symbol == "function" && Symbol.for) {
    var Se = Symbol.for;
    Y = Se("react.element"), q = Se("react.portal"), ne = Se("react.fragment"), oe = Se("react.strict_mode"), re = Se("react.profiler"), ge = Se("react.provider"), pe = Se("react.context"), te = Se("react.forward_ref"), se = Se("react.suspense"), de = Se("react.suspense_list"), Ce = Se("react.memo"), ke = Se("react.lazy"), we = Se("react.block"), Se("react.scope"), Ae = Se("react.opaque.id"), Ie = Se("react.debug_trace_mode"), ie = Se("react.offscreen"), he = Se("react.legacy_hidden");
  }
  var ze = typeof Symbol == "function" && Symbol.iterator;
  function Ke(n) {
    return n === null || typeof n != "object" ? null : (n = ze && n[ze] || n["@@iterator"], typeof n == "function" ? n : null);
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
  var Ve = !1;
  function nt(n, i) {
    if (!n || Ve)
      return "";
    Ve = !0;
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
          } catch (j) {
            var v = j;
          }
          Reflect.construct(n, [], i);
        } else {
          try {
            i.call();
          } catch (j) {
            v = j;
          }
          n.call(i.prototype);
        }
      else {
        try {
          throw Error();
        } catch (j) {
          v = j;
        }
        n();
      }
    } catch (j) {
      if (j && v && typeof j.stack == "string") {
        for (var g = j.stack.split(`
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
      Ve = !1, Error.prepareStackTrace = u;
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
  function $e(n) {
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
          return $e(n.type);
        case we:
          return $e(n._render);
        case ke:
          i = n._payload, n = n._init;
          try {
            return $e(n(i));
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
  function Vt(n) {
    var i = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (i === "checkbox" || i === "radio");
  }
  function Ee(n) {
    var i = Vt(n) ? "checked" : "value", u = Object.getOwnPropertyDescriptor(n.constructor.prototype, i), v = "" + n[i];
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
    return n && (v = Vt(n) ? n.checked ? "true" : "false" : n.value), n = v, n !== u ? (i.setValue(n), !0) : !1;
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
  function Ut(n, i) {
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
  function jt(n, i) {
    n = n.style;
    for (var u in i)
      if (i.hasOwnProperty(u)) {
        var v = u.indexOf("--") === 0, g = Ot(u, i[u], v);
        u === "float" && (u = "cssFloat"), v ? n.setProperty(u, g) : n[u] = g;
      }
  }
  var ir = o({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Bt(n, i) {
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
  function Ht(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ue = null, St = null, Oe = null;
  function Ge(n) {
    if (n = ua(n)) {
      if (typeof Ue != "function")
        throw Error(c(280));
      var i = n.stateNode;
      i && (i = Oi(i), Ue(n.stateNode, n.type, i));
    }
  }
  function At(n) {
    St ? Oe ? Oe.push(n) : Oe = [n] : St = n;
  }
  function mn() {
    if (St) {
      var n = St, i = Oe;
      if (Oe = St = null, Ge(n), i)
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
  function Bn() {
    (St !== null || Oe !== null) && (oa(), mn());
  }
  function Yr(n, i, u) {
    if (Kt)
      return n(i, u);
    Kt = !0;
    try {
      return qr(n, i, u);
    } finally {
      Kt = !1, Bn();
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
  function qa(n, i, u, v, g, S, R, k, j) {
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
  function Ei(n, i, u, v, g, S, R, k, j) {
    Lr = !1, Pr = null, qa.apply(Pn, arguments);
  }
  function _r(n, i, u, v, g, S, R, k, j) {
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
  function Ir(n) {
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
  function $r(n, i) {
    for (var u = n.alternate; i !== null; ) {
      if (i === n || i === u)
        return !0;
      i = i.return;
    }
    return !1;
  }
  var Xa, gr, Qr, Mr, ha = !1, In = [], Kn = null, Or = null, or = null, yr = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), Xt = [], dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function $t(n, i, u, v, g) {
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
    return n === null || n.nativeEvent !== S ? (n = $t(i, u, v, g, S), i !== null && (i = ua(i), i !== null && gr(i)), n) : (n.eventSystemFlags |= v, i = n.targetContainers, g !== null && i.indexOf(g) === -1 && i.push(g), n);
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
    for (ha = !1; 0 < In.length; ) {
      var n = In[0];
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
      n.blockedOn === null && In.shift();
    }
    Kn !== null && er(Kn) && (Kn = null), Or !== null && er(Or) && (Or = null), or !== null && er(or) && (or = null), yr.forEach(wi), Re.forEach(wi);
  }
  function zn(n, i) {
    n.blockedOn === i && (n.blockedOn = null, ha || (ha = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Gn)));
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
    for (Kn !== null && zn(Kn, n), Or !== null && zn(Or, n), or !== null && zn(or, n), yr.forEach(i), Re.forEach(i), u = 0; u < Xt.length; u++)
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
  function Na(n) {
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
  var eo = Na("animationend"), Da = Na("animationiteration"), to = Na("animationstart"), Ti = Na("transitionend"), Ko = /* @__PURE__ */ new Map(), no = /* @__PURE__ */ new Map(), Il = [
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
  function Be(n, i) {
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
      var j = S & ~R;
      j !== 0 ? (v = pn(j), g = ct) : (k &= S, k !== 0 && (v = pn(k), g = ct));
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
  var io = Math.clz32 ? Math.clz32 : Pf, ap = Math.log, qg = Math.LN2;
  function Pf(n) {
    return n === 0 ? 32 : 31 - (ap(n) / qg | 0) | 0;
  }
  var If = s.unstable_UserBlockingPriority, ip = s.unstable_runWithPriority, Iu = !0;
  function Yg(n, i, u, v) {
    Ln || oa();
    var g = zu, S = Ln;
    Ln = !0;
    try {
      gn(g, n, i, u, v);
    } finally {
      (Ln = S) || Bn();
    }
  }
  function zl(n, i, u, v) {
    ip(If, zu.bind(null, n, i, u, v));
  }
  function zu(n, i, u, v) {
    if (Iu) {
      var g;
      if ((g = (i & 4) === 0) && 0 < In.length && -1 < dt.indexOf(n))
        n = $t(null, n, i, u, v), In.push(n);
      else {
        var S = nc(n, i, u, v);
        if (S === null)
          g && Tn(n, v);
        else {
          if (g) {
            if (-1 < dt.indexOf(n)) {
              n = $t(S, n, i, u, v), In.push(n);
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
    var g = Ht(v);
    if (g = Jo(g), g !== null) {
      var S = xn(g);
      if (S === null)
        g = null;
      else {
        var R = S.tag;
        if (R === 13) {
          if (g = Ir(S), g !== null)
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
  var oo = null, zf = null, rc = null;
  function $f() {
    if (rc)
      return rc;
    var n, i = zf, u = i.length, v, g = "value" in oo ? oo.value : oo.textContent, S = g.length;
    for (n = 0; n < u && i[n] === g[n]; n++)
      ;
    var R = u - n;
    for (v = 1; v <= R && i[u - v] === g[S - v]; v++)
      ;
    return rc = g.slice(n, 1 < v ? 1 - v : void 0);
  }
  function $l(n) {
    var i = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && i === 13 && (n = 13)) : n = i, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function $u() {
    return !0;
  }
  function Uf() {
    return !1;
  }
  function Xr(n) {
    function i(u, v, g, S, R) {
      this._reactName = u, this._targetInst = g, this.type = v, this.nativeEvent = S, this.target = R, this.currentTarget = null;
      for (var k in n)
        n.hasOwnProperty(k) && (u = n[k], this[k] = u ? u(S) : S[k]);
      return this.isDefaultPrevented = (S.defaultPrevented != null ? S.defaultPrevented : S.returnValue === !1) ? $u : Uf, this.isPropagationStopped = Uf, this;
    }
    return o(i.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var u = this.nativeEvent;
      u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = $u);
    }, stopPropagation: function() {
      var u = this.nativeEvent;
      u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = $u);
    }, persist: function() {
    }, isPersistent: $u }), i;
  }
  var Ul = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, jl = Xr(Ul), Hl = o({}, Ul, { view: 0, detail: 0 }), jf = Xr(Hl), ac, Uu, Go, ic = o({}, Hl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ff, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Go && (Go && n.type === "mousemove" ? (ac = n.screenX - Go.screenX, Uu = n.screenY - Go.screenY) : Uu = ac = 0, Go = n), ac);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Uu;
  } }), ju = Xr(ic), op = o({}, ic, { dataTransfer: 0 }), ga = Xr(op), _i = o({}, Hl, { relatedTarget: 0 }), Ur = Xr(_i), lo = o({}, Ul, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), lp = Xr(lo), oc = o({}, Ul, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Qg = Xr(oc), Hu = o({}, Ul, { data: 0 }), up = Xr(Hu), Xg = {
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
  }, Hf = {
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
  }, Zg = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Jg(n) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(n) : (n = Zg[n]) ? !!i[n] : !1;
  }
  function Ff() {
    return Jg;
  }
  var sp = o({}, Hl, { key: function(n) {
    if (n.key) {
      var i = Xg[n.key] || n.key;
      if (i !== "Unidentified")
        return i;
    }
    return n.type === "keypress" ? (n = $l(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Hf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ff, charCode: function(n) {
    return n.type === "keypress" ? $l(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? $l(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ey = Xr(sp), ty = o({}, ic, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), cp = Xr(ty), fp = o({}, Hl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ff }), Fl = Xr(fp), Bf = o({}, Ul, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), dp = Xr(Bf), vp = o({}, ic, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ny = Xr(vp), ry = [9, 13, 27, 32], Vf = x && "CompositionEvent" in window, Fu = null;
  x && "documentMode" in document && (Fu = document.documentMode);
  var ay = x && "TextEvent" in window && !Fu, pp = x && (!Vf || Fu && 8 < Fu && 11 >= Fu), hp = " ", mp = !1;
  function Wf(n, i) {
    switch (n) {
      case "keyup":
        return ry.indexOf(i.keyCode) !== -1;
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
  function iy(n, i) {
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
  function oy(n, i) {
    if (qo)
      return n === "compositionend" || !Vf && Wf(n, i) ? (n = $f(), rc = zf = oo = null, qo = !1, n) : null;
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
  var ly = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function yp(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i === "input" ? !!ly[n.type] : i === "textarea";
  }
  function lc(n, i, u, v) {
    At(v), i = dc(i, "onChange"), 0 < i.length && (u = new jl("onChange", "change", null, u, v), n.push({ event: u, listeners: i }));
  }
  var Aa = null, uo = null;
  function bp(n) {
    uc(n, 0);
  }
  function ki(n) {
    var i = Fr(n);
    if (Dt(i))
      return n;
  }
  function uy(n, i) {
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
    Aa && (Aa.detachEvent("onpropertychange", qf), uo = Aa = null);
  }
  function qf(n) {
    if (n.propertyName === "value" && ki(uo)) {
      var i = [];
      if (lc(i, uo, n, Ht(n)), n = bp, Ln)
        n(i);
      else {
        Ln = !0;
        try {
          An(n, i);
        } finally {
          Ln = !1, Bn();
        }
      }
    }
  }
  function sy(n, i, u) {
    n === "focusin" ? (Ep(), Aa = i, uo = u, Aa.attachEvent("onpropertychange", qf)) : n === "focusout" && Ep();
  }
  function wp(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return ki(uo);
  }
  function jr(n, i) {
    if (n === "click")
      return ki(i);
  }
  function cy(n, i) {
    if (n === "input" || n === "change")
      return ki(i);
  }
  function xp(n, i) {
    return n === i && (n !== 0 || 1 / n === 1 / i) || n !== n && i !== i;
  }
  var ya = typeof Object.is == "function" ? Object.is : xp, fy = Object.prototype.hasOwnProperty;
  function Bu(n, i) {
    if (ya(n, i))
      return !0;
    if (typeof n != "object" || n === null || typeof i != "object" || i === null)
      return !1;
    var u = Object.keys(n), v = Object.keys(i);
    if (u.length !== v.length)
      return !1;
    for (v = 0; v < u.length; v++)
      if (!fy.call(i, u[v]) || !ya(n[u[v]], i[u[v]]))
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
  function Vu() {
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
  var _p = x && "documentMode" in document && 11 >= document.documentMode, Bl = null, Wu = null, Qo = null, so = !1;
  function Xo(n, i, u) {
    var v = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    so || Bl == null || Bl !== zt(v) || (v = Bl, "selectionStart" in v && Yo(v) ? v = { start: v.selectionStart, end: v.selectionEnd } : (v = (v.ownerDocument && v.ownerDocument.defaultView || window).getSelection(), v = { anchorNode: v.anchorNode, anchorOffset: v.anchorOffset, focusNode: v.focusNode, focusOffset: v.focusOffset }), Qo && Bu(Qo, v) || (Qo = v, v = dc(Wu, "onSelect"), 0 < v.length && (i = new jl("onSelect", "select", null, i, u), n.push({ event: i, listeners: v }), i.target = Bl)));
  }
  Be(
    "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
    0
  ), Be("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Be(Il, 2);
  for (var Qf = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Xf = 0; Xf < Qf.length; Xf++)
    no.set(Qf[Xf], 0);
  C("onMouseEnter", ["mouseout", "mouseover"]), C("onMouseLeave", ["mouseout", "mouseover"]), C("onPointerEnter", ["pointerout", "pointerover"]), C("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Vl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kp = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vl));
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
            var k = v[R], j = k.instance, ee = k.currentTarget;
            if (k = k.listener, j !== S && g.isPropagationStopped())
              break e;
            Zf(g, k, ee), S = j;
          }
        else
          for (R = 0; R < v.length; R++) {
            if (k = v[R], j = k.instance, ee = k.currentTarget, k = k.listener, j !== S && g.isPropagationStopped())
              break e;
            Zf(g, k, ee), S = j;
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
        g = Yg;
        break;
      case 1:
        g = zl;
        break;
      default:
        g = zu;
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
                var j = R.tag;
                if ((j === 3 || j === 4) && (j = R.stateNode.containerInfo, j === g || j.nodeType === 8 && j.parentNode === g))
                  return;
                R = R.return;
              }
            for (; k !== null; ) {
              if (R = Jo(k), R === null)
                return;
              if (j = R.tag, j === 5 || j === 6) {
                v = S = R;
                continue e;
              }
              k = k.parentNode;
            }
          }
          v = v.return;
        }
    Yr(function() {
      var ee = S, Le = Ht(u), Et = [];
      e: {
        var me = Ko.get(n);
        if (me !== void 0) {
          var Je = jl, bt = n;
          switch (n) {
            case "keypress":
              if ($l(u) === 0)
                break e;
            case "keydown":
            case "keyup":
              Je = ey;
              break;
            case "focusin":
              bt = "focus", Je = Ur;
              break;
            case "focusout":
              bt = "blur", Je = Ur;
              break;
            case "beforeblur":
            case "afterblur":
              Je = Ur;
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
              Je = ju;
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
            case Da:
            case to:
              Je = lp;
              break;
            case Ti:
              Je = dp;
              break;
            case "scroll":
              Je = jf;
              break;
            case "wheel":
              Je = ny;
              break;
            case "copy":
            case "cut":
            case "paste":
              Je = Qg;
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
          if (me = n === "mouseover" || n === "pointerover", Je = n === "mouseout" || n === "pointerout", me && !(i & 16) && (bt = u.relatedTarget || u.fromElement) && (Jo(bt) || bt[Hr]))
            break e;
          if ((Je || me) && (me = Le.window === Le ? Le : (me = Le.ownerDocument) ? me.defaultView || me.parentWindow : window, Je ? (bt = u.relatedTarget || u.toElement, Je = ee, bt = bt ? Jo(bt) : null, bt !== null && (Q = xn(bt), bt !== Q || bt.tag !== 5 && bt.tag !== 6) && (bt = null)) : (Je = null, bt = ee), Je !== bt)) {
            if (ft = ju, ce = "onMouseLeave", F = "onMouseEnter", W = "mouse", (n === "pointerout" || n === "pointerover") && (ft = cp, ce = "onPointerLeave", F = "onPointerEnter", W = "pointer"), Q = Je == null ? me : Fr(Je), le = bt == null ? me : Fr(bt), me = new ft(ce, W + "leave", Je, u, Le), me.target = Q, me.relatedTarget = le, ce = null, Jo(Le) === ee && (ft = new ft(F, W + "enter", bt, u, Le), ft.target = le, ft.relatedTarget = Q, ce = ft), Q = ce, Je && bt)
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
            var Rt = uy;
          else if (yp(me))
            if (Sp)
              Rt = cy;
            else {
              Rt = wp;
              var He = sy;
            }
          else
            (Je = me.nodeName) && Je.toLowerCase() === "input" && (me.type === "checkbox" || me.type === "radio") && (Rt = jr);
          if (Rt && (Rt = Rt(n, ee))) {
            lc(Et, Rt, u, Le);
            break e;
          }
          He && He(n, me, ee), n === "focusout" && (He = me._wrapperState) && He.controlled && me.type === "number" && ot(me, "number", me.value);
        }
        switch (He = ee ? Fr(ee) : window, n) {
          case "focusin":
            (yp(He) || He.contentEditable === "true") && (Bl = He, Wu = ee, Qo = null);
            break;
          case "focusout":
            Qo = Wu = Bl = null;
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
        if (Vf)
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
        Lt && (pp && u.locale !== "ko" && (qo || Lt !== "onCompositionStart" ? Lt === "onCompositionEnd" && qo && (wt = $f()) : (oo = Le, zf = "value" in oo ? oo.value : oo.textContent, qo = !0)), He = dc(ee, Lt), 0 < He.length && (Lt = new up(Lt, n, null, u, Le), Et.push({ event: Lt, listeners: He }), wt ? Lt.data = wt : (wt = gp(u), wt !== null && (Lt.data = wt)))), (wt = ay ? iy(n, u) : oy(n, u)) && (ee = dc(ee, "onBeforeInput"), 0 < ee.length && (Le = new up(
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
      var k = u, j = k.alternate, ee = k.stateNode;
      if (j !== null && j === v)
        break;
      k.tag === 5 && ee !== null && (k = ee, g ? (j = ln(u, S), j != null && R.unshift(Ku(u, j, k))) : g || (j = ln(u, S), j != null && R.push(Ku(u, j, k)))), u = u.return;
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
  var Zo = Math.random().toString(36).slice(2), Ja = "__reactFiber$" + Zo, mc = "__reactProps$" + Zo, Hr = "__reactContainer$" + Zo, Dp = "__reactEvents$" + Zo;
  function Jo(n) {
    var i = n[Ja];
    if (i)
      return i;
    for (var u = n.parentNode; u; ) {
      if (i = u[Hr] || u[Ja]) {
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
    return n = n[Ja] || n[Hr], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
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
  function Br(n) {
    return { current: n };
  }
  function Tt(n) {
    0 > un || (n.current = nd[un], nd[un] = null, un--);
  }
  function vt(n, i) {
    un++, nd[un] = n.current, n.current = i;
  }
  var vo = {}, Rn = Br(vo), Sr = Br(!1), po = vo;
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
        throw Error(c(108, $e(i) || "Unknown", g));
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
  var rd = null, el = null, qu = s.unstable_runWithPriority, La = s.unstable_scheduleCallback, Yu = s.unstable_cancelCallback, dy = s.unstable_shouldYield, ho = s.unstable_requestPaint, gc = s.unstable_now, Pp = s.unstable_getCurrentPriorityLevel, yc = s.unstable_ImmediatePriority, Ip = s.unstable_UserBlockingPriority, ad = s.unstable_NormalPriority, id = s.unstable_LowPriority, od = s.unstable_IdlePriority, ld = {}, zp = ho !== void 0 ? ho : function() {
  }, ti = null, bc = null, Qu = !1, $p = gc(), Er = 1e4 > $p ? gc : function() {
    return gc() - $p;
  };
  function Ql() {
    switch (Pp()) {
      case yc:
        return 99;
      case Ip:
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
        return Ip;
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
    return n = ud(n), La(n, i, u);
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
        throw ti !== null && (ti = ti.slice(n + 1)), La(yc, lr), u;
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
  var go = Br(null), yo = null, ni = null, Sc = null;
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
  function Up(n, i) {
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
  function jp(n, i) {
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
      var j = k, ee = j.next;
      j.next = null, R === null ? S = ee : R.next = ee, R = j;
      var Le = n.alternate;
      if (Le !== null) {
        Le = Le.updateQueue;
        var Et = Le.lastBaseUpdate;
        Et !== R && (Et === null ? Le.firstBaseUpdate = ee : Et.next = ee, Le.lastBaseUpdate = j);
      }
    }
    if (S !== null) {
      Et = g.baseState, R = 0, Le = ee = j = null;
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
          me = { eventTime: me, lane: k, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, Le === null ? (ee = Le = me, j = Et) : Le = Le.next = me, R |= k;
        if (S = S.next, S === null) {
          if (k = g.shared.pending, k === null)
            break;
          S = k.next, k.next = null, g.lastBaseUpdate = k, g.shared.pending = null;
        }
      } while (!0);
      Le === null && (j = Et), g.baseState = j, g.firstBaseUpdate = ee, g.lastBaseUpdate = Le, fl |= R, n.lanes = R, n.memoizedState = Et;
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
    var v = ca(), g = si(n), S = Pa(v, g);
    S.payload = i, u != null && (S.callback = u), Di(n, S), Ro(n, g, v);
  }, enqueueReplaceState: function(n, i, u) {
    n = n._reactInternals;
    var v = ca(), g = si(n), S = Pa(v, g);
    S.tag = 1, S.payload = i, u != null && (S.callback = u), Di(n, S), Ro(n, g, v);
  }, enqueueForceUpdate: function(n, i) {
    n = n._reactInternals;
    var u = ca(), v = si(n), g = Pa(u, v);
    g.tag = 2, i != null && (g.callback = i), Di(n, g), Ro(n, v, u);
  } };
  function Zu(n, i, u, v, g, S, R) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(v, S, R) : i.prototype && i.prototype.isPureReactComponent ? !Bu(u, v) || !Bu(g, S) : !0;
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
    function j(Q, F, W, le) {
      return F !== null && F.elementType === W.type ? (le = g(F, W.props), le.ref = Zl(Q, F, W), le.return = Q, le) : (le = Es(W.type, W.key, W.props, null, Q.mode, le), le.ref = Zl(Q, F, W), le.return = Q, le);
    }
    function ee(Q, F, W, le) {
      return F === null || F.tag !== 4 || F.stateNode.containerInfo !== W.containerInfo || F.stateNode.implementation !== W.implementation ? (F = Bd(W, Q.mode, le), F.return = Q, F) : (F = g(F, W.children || []), F.return = Q, F);
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
            return F = Bd(F, Q.mode, W), F.return = Q, F;
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
            return W.key === ce ? W.type === ne ? Le(Q, F, W.props.children, le, ce) : j(Q, F, W, le) : null;
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
            return Q = Q.get(le.key === null ? W : le.key) || null, le.type === ne ? Le(F, Q, le.props.children, ce, le.key) : j(F, Q, le, ce);
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
      for (var ce = null, Rt = null, He = F, wt = F = 0, Lt = null; He !== null && wt < W.length; wt++) {
        He.index > wt ? (Lt = He, He = null) : Lt = He.sibling;
        var _t = me(Q, He, W[wt], le);
        if (_t === null) {
          He === null && (He = Lt);
          break;
        }
        n && He && _t.alternate === null && i(Q, He), F = S(_t, F, wt), Rt === null ? ce = _t : Rt.sibling = _t, Rt = _t, He = Lt;
      }
      if (wt === W.length)
        return u(Q, He), ce;
      if (He === null) {
        for (; wt < W.length; wt++)
          He = Et(Q, W[wt], le), He !== null && (F = S(He, F, wt), Rt === null ? ce = He : Rt.sibling = He, Rt = He);
        return ce;
      }
      for (He = v(Q, He); wt < W.length; wt++)
        Lt = Je(He, Q, wt, W[wt], le), Lt !== null && (n && Lt.alternate !== null && He.delete(Lt.key === null ? wt : Lt.key), F = S(Lt, F, wt), Rt === null ? ce = Lt : Rt.sibling = Lt, Rt = Lt);
      return n && He.forEach(function(No) {
        return i(Q, No);
      }), ce;
    }
    function ft(Q, F, W, le) {
      var ce = Ke(W);
      if (typeof ce != "function")
        throw Error(c(150));
      if (W = ce.call(W), W == null)
        throw Error(c(151));
      for (var Rt = ce = null, He = F, wt = F = 0, Lt = null, _t = W.next(); He !== null && !_t.done; wt++, _t = W.next()) {
        He.index > wt ? (Lt = He, He = null) : Lt = He.sibling;
        var No = me(Q, He, _t.value, le);
        if (No === null) {
          He === null && (He = Lt);
          break;
        }
        n && He && No.alternate === null && i(Q, He), F = S(No, F, wt), Rt === null ? ce = No : Rt.sibling = No, Rt = No, He = Lt;
      }
      if (_t.done)
        return u(Q, He), ce;
      if (He === null) {
        for (; !_t.done; wt++, _t = W.next())
          _t = Et(Q, _t.value, le), _t !== null && (F = S(_t, F, wt), Rt === null ? ce = _t : Rt.sibling = _t, Rt = _t);
        return ce;
      }
      for (He = v(Q, He); !_t.done; wt++, _t = W.next())
        _t = Je(He, Q, wt, _t.value, le), _t !== null && (n && _t.alternate !== null && He.delete(_t.key === null ? wt : _t.key), F = S(_t, F, wt), Rt === null ? ce = _t : Rt.sibling = _t, Rt = _t);
      return n && He.forEach(function(Ay) {
        return i(Q, Ay);
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
              F = Bd(W, Q.mode, le), F.return = Q, Q = F;
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
            throw Error(c(152, $e(Q.type) || "Component"));
        }
      return u(Q, F);
    };
  }
  var es = vd(!0), pd = vd(!1), ol = {}, ri = Br(ol), ts = Br(ol), ns = Br(ol);
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
  function Hp(n) {
    ll(ns.current);
    var i = ll(ri.current), u = We(i, n.type);
    i !== u && (vt(ts, n), vt(ri, u));
  }
  function hd(n) {
    ts.current === n && (Tt(ri), Tt(ts));
  }
  var $n = Br(0);
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
  var tu = U.ReactCurrentDispatcher, sr = U.ReactCurrentBatchConfig, nu = 0, _n = null, cr = null, fr = null, ls = !1, Co = !1;
  function Vr() {
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
    if (nu = S, _n = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, tu.current = n === null || n.memoizedState === null ? cs : py, n = u(v, g), Co) {
      S = 0;
      do {
        if (Co = !1, !(25 > S))
          throw Error(c(301));
        S += 1, fr = cr = null, i.updateQueue = null, tu.current = hy, n = u(v, g);
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
  function Ii(n) {
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
      var k = R = S = null, j = g;
      do {
        var ee = j.lane;
        if ((nu & ee) === ee)
          k !== null && (k = k.next = { lane: 0, action: j.action, eagerReducer: j.eagerReducer, eagerState: j.eagerState, next: null }), v = j.eagerReducer === n ? j.eagerState : n(v, j.action);
        else {
          var Le = {
            lane: ee,
            action: j.action,
            eagerReducer: j.eagerReducer,
            eagerState: j.eagerState,
            next: null
          };
          k === null ? (R = k = Le, S = v) : k = k.next = Le, _n.lanes |= ee, fl |= ee;
        }
        j = j.next;
      } while (j !== null && j !== g);
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
    var S = i._getVersion, R = S(i._source), k = tu.current, j = k.useState(function() {
      return us(g, i, u);
    }), ee = j[1], Le = j[0];
    j = fr;
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
    }, [i, v]), ya(Je, u) && ya(bt, i) && ya(Et, v) || (n = { pending: null, dispatch: null, lastRenderedReducer: Ft, lastRenderedState: Le }, n.dispatch = ee = Ed.bind(null, _n, n), j.queue = n, j.baseQueue = null, Le = us(g, i, u), j.memoizedState = j.baseState = Le), Le;
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
  function zi() {
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
  function Ia(n, i, u) {
    return u = u != null ? u.concat([n]) : null, Eo(4, 2, Rc.bind(null, i, n), u);
  }
  function kn() {
  }
  function vy(n, i) {
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
          var k = i.lastRenderedState, j = R(k, u);
          if (S.eagerReducer = R, S.eagerState = j, ya(j, k))
            return;
        } catch (ee) {
        } finally {
        }
      Ro(n, g, v);
    }
  }
  var _c = { readContext: sa, useCallback: Vr, useContext: Vr, useEffect: Vr, useImperativeHandle: Vr, useLayoutEffect: Vr, useMemo: Vr, useReducer: Vr, useRef: Vr, useState: Vr, useDebugValue: Vr, useDeferredValue: Vr, useTransition: Vr, useMutableSource: Vr, useOpaqueIdentifier: Vr, unstable_isNewReconciler: !1 }, cs = { readContext: sa, useCallback: function(n, i) {
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
  }, unstable_isNewReconciler: !1 }, py = { readContext: sa, useCallback: vy, useContext: sa, useEffect: ss, useImperativeHandle: Ia, useLayoutEffect: Cd, useMemo: hn, useReducer: Ii, useRef: zi, useState: function() {
    return Ii(Ft);
  }, useDebugValue: kn, useDeferredValue: function(n) {
    var i = Ii(Ft), u = i[0], v = i[1];
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
    var n = Ii(Ft)[0];
    return [
      zi().current,
      n
    ];
  }, useMutableSource: bd, useOpaqueIdentifier: function() {
    return Ii(Ft)[0];
  }, unstable_isNewReconciler: !1 }, hy = { readContext: sa, useCallback: vy, useContext: sa, useEffect: ss, useImperativeHandle: Ia, useLayoutEffect: Cd, useMemo: hn, useReducer: sl, useRef: zi, useState: function() {
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
      zi().current,
      n
    ];
  }, useMutableSource: bd, useOpaqueIdentifier: function() {
    return sl(Ft)[0];
  }, unstable_isNewReconciler: !1 }, my = U.ReactCurrentOwner, Ca = !1;
  function Zr(n, i, u, v) {
    i.child = n === null ? pd(i, null, u, v) : es(i, n.child, u, v);
  }
  function wd(n, i, u, v, g) {
    u = u.render;
    var S = i.ref;
    return rl(i, g), v = gd(n, i, u, v, S, g), n !== null && !Ca ? (i.updateQueue = n.updateQueue, i.flags &= -517, n.lanes &= ~g, $i(n, i, g)) : (i.flags |= 1, Zr(n, i, v, g), i.child);
  }
  function xd(n, i, u, v, g, S) {
    if (n === null) {
      var R = u.type;
      return typeof R == "function" && !Ic(R) && R.defaultProps === void 0 && u.compare === null && u.defaultProps === void 0 ? (i.tag = 15, i.type = R, Bp(n, i, R, v, g, S)) : (n = Es(u.type, null, v, i, i.mode, S), n.ref = i.ref, n.return = i, i.child = n);
    }
    return R = n.child, !(g & S) && (g = R.memoizedProps, u = u.compare, u = u !== null ? u : Bu, u(g, v) && n.ref === i.ref) ? $i(n, i, S) : (i.flags |= 1, n = Oo(R, v), n.ref = i.ref, n.return = i, i.child = n);
  }
  function Bp(n, i, u, v, g, S) {
    if (n !== null && Bu(n.memoizedProps, v) && n.ref === i.ref)
      if (Ca = !1, (S & g) !== 0)
        n.flags & 16384 && (Ca = !0);
      else
        return i.lanes = n.lanes, $i(n, i, S);
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
  function Vp(n, i) {
    var u = i.ref;
    (n === null && u !== null || n !== null && n.ref !== u) && (i.flags |= 128);
  }
  function Td(n, i, u, v, g) {
    var S = Cr(u) ? po : Rn.current;
    return S = nn(i, S), rl(i, g), u = gd(n, i, u, v, S, g), n !== null && !Ca ? (i.updateQueue = n.updateQueue, i.flags &= -517, n.lanes &= ~g, $i(n, i, g)) : (i.flags |= 1, Zr(n, i, u, g), i.child);
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
      var j = R.context, ee = u.contextType;
      typeof ee == "object" && ee !== null ? ee = sa(ee) : (ee = Cr(u) ? po : Rn.current, ee = nn(i, ee));
      var Le = u.getDerivedStateFromProps, Et = typeof Le == "function" || typeof R.getSnapshotBeforeUpdate == "function";
      Et || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (k !== v || j !== ee) && wc(i, R, v, ee), Sa = !1;
      var me = i.memoizedState;
      R.state = me, Ai(i, v, R, g), j = i.memoizedState, k !== v || me !== j || Sr.current || Sa ? (typeof Le == "function" && (Xu(i, u, Le, v), j = i.memoizedState), (k = Sa || Zu(i, u, k, v, me, j, ee)) ? (Et || typeof R.UNSAFE_componentWillMount != "function" && typeof R.componentWillMount != "function" || (typeof R.componentWillMount == "function" && R.componentWillMount(), typeof R.UNSAFE_componentWillMount == "function" && R.UNSAFE_componentWillMount()), typeof R.componentDidMount == "function" && (i.flags |= 4)) : (typeof R.componentDidMount == "function" && (i.flags |= 4), i.memoizedProps = v, i.memoizedState = j), R.props = v, R.state = j, R.context = ee, v = k) : (typeof R.componentDidMount == "function" && (i.flags |= 4), v = !1);
    } else {
      R = i.stateNode, Up(n, i), k = i.memoizedProps, ee = i.type === i.elementType ? k : ur(i.type, k), R.props = ee, Et = i.pendingProps, me = R.context, j = u.contextType, typeof j == "object" && j !== null ? j = sa(j) : (j = Cr(u) ? po : Rn.current, j = nn(i, j));
      var Je = u.getDerivedStateFromProps;
      (Le = typeof Je == "function" || typeof R.getSnapshotBeforeUpdate == "function") || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (k !== Et || me !== j) && wc(i, R, v, j), Sa = !1, me = i.memoizedState, R.state = me, Ai(i, v, R, g);
      var bt = i.memoizedState;
      k !== Et || me !== bt || Sr.current || Sa ? (typeof Je == "function" && (Xu(i, u, Je, v), bt = i.memoizedState), (ee = Sa || Zu(i, u, ee, v, me, bt, j)) ? (Le || typeof R.UNSAFE_componentWillUpdate != "function" && typeof R.componentWillUpdate != "function" || (typeof R.componentWillUpdate == "function" && R.componentWillUpdate(
        v,
        bt,
        j
      ), typeof R.UNSAFE_componentWillUpdate == "function" && R.UNSAFE_componentWillUpdate(v, bt, j)), typeof R.componentDidUpdate == "function" && (i.flags |= 4), typeof R.getSnapshotBeforeUpdate == "function" && (i.flags |= 256)) : (typeof R.componentDidUpdate != "function" || k === n.memoizedProps && me === n.memoizedState || (i.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && me === n.memoizedState || (i.flags |= 256), i.memoizedProps = v, i.memoizedState = bt), R.props = v, R.state = bt, R.context = j, v = ee) : (typeof R.componentDidUpdate != "function" || k === n.memoizedProps && me === n.memoizedState || (i.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || k === n.memoizedProps && me === n.memoizedState || (i.flags |= 256), v = !1);
    }
    return Rd(n, i, u, v, S, g);
  }
  function Rd(n, i, u, v, g, S) {
    Vp(n, i);
    var R = (i.flags & 64) !== 0;
    if (!v && !R)
      return g && Lp(i, u, !1), $i(n, i, S);
    v = i.stateNode, my.current = i;
    var k = R && typeof u.getDerivedStateFromError != "function" ? null : v.render();
    return i.flags |= 1, n !== null && R ? (i.child = es(i, n.child, null, S), i.child = es(i, null, k, S)) : Zr(n, i, k, S), i.memoizedState = v.state, g && Lp(i, u, !0), i.child;
  }
  function Kp(n) {
    var i = n.stateNode;
    i.pendingContext ? ql(n, i.pendingContext, i.pendingContext !== i.context) : i.context && ql(n, i.context, !1), rs(n, i.containerInfo);
  }
  var dr = { dehydrated: null, retryLane: 0 };
  function wo(n, i, u) {
    var v = i.pendingProps, g = $n.current, S = !1, R;
    return (R = (i.flags & 64) !== 0) || (R = n !== null && n.memoizedState === null ? !1 : (g & 2) !== 0), R ? (S = !0, i.flags &= -65) : n !== null && n.memoizedState === null || v.fallback === void 0 || v.unstable_avoidThisFallback === !0 || (g |= 1), vt($n, g & 1), n === null ? (v.fallback !== void 0 && bo(i), n = v.children, g = v.fallback, S ? (n = Gp(i, n, g, u), i.child.memoizedState = { baseLanes: u }, i.memoizedState = dr, n) : typeof v.unstable_expectedLoadTime == "number" ? (n = Gp(i, n, g, u), i.child.memoizedState = { baseLanes: u }, i.memoizedState = dr, i.lanes = 33554432, n) : (u = ml({ mode: "visible", children: n }, i.mode, u, null), u.return = i, i.child = u)) : n.memoizedState !== null ? S ? (v = xo(n, i, v.children, v.fallback, u), S = i.child, g = n.child.memoizedState, S.memoizedState = g === null ? { baseLanes: u } : { baseLanes: g.baseLanes | u }, S.childLanes = n.childLanes & ~u, i.memoizedState = dr, v) : (u = wr(n, i, v.children, u), i.memoizedState = null, u) : S ? (v = xo(n, i, v.children, v.fallback, u), S = i.child, g = n.child.memoizedState, S.memoizedState = g === null ? { baseLanes: u } : { baseLanes: g.baseLanes | u }, S.childLanes = n.childLanes & ~u, i.memoizedState = dr, v) : (u = wr(n, i, v.children, u), i.memoizedState = null, u);
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
  function gy(n, i, u) {
    var v = i.pendingProps, g = v.revealOrder, S = v.tail;
    if (Zr(n, i, v.children, u), v = $n.current, v & 2)
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
    if (vt($n, v), !(i.mode & 2))
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
  function $i(n, i, u) {
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
          g = Ut(n, g), v = Ut(n, v), S = [];
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
      Bt(u, v);
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
        var j = v[ee];
        if (k = g != null ? g[ee] : void 0, v.hasOwnProperty(ee) && j !== k && (j != null || k != null))
          if (ee === "style")
            if (k) {
              for (R in k)
                !k.hasOwnProperty(R) || j && j.hasOwnProperty(R) || (u || (u = {}), u[R] = "");
              for (R in j)
                j.hasOwnProperty(R) && k[R] !== j[R] && (u || (u = {}), u[R] = j[R]);
            } else
              u || (S || (S = []), S.push(ee, u)), u = j;
          else
            ee === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, k = k ? k.__html : void 0, j != null && k !== j && (S = S || []).push(ee, j)) : ee === "children" ? typeof j != "string" && typeof j != "number" || (S = S || []).push(ee, "" + j) : ee !== "suppressContentEditableWarning" && ee !== "suppressHydrationWarning" && (m.hasOwnProperty(ee) ? (j != null && ee === "onScroll" && yn("scroll", n), S || k === j || (S = [])) : typeof j == "object" && j !== null && j.$$typeof === Ae ? j.toString() : (S = S || []).push(ee, j));
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
  function yy(n, i, u) {
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
                for (n = 0; n < Vl.length; n++)
                  yn(Vl[n], v);
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
            Bt(u, S), n = null;
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
            switch (R = g.nodeType === 9 ? g : g.ownerDocument, n === ye.html && (n = Ne(u)), n === ye.html ? u === "script" ? (n = R.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof v.is == "string" ? n = R.createElement(u, { is: v.is }) : (n = R.createElement(u), u === "select" && (R = n, v.multiple ? R.multiple = !0 : v.size && (R.size = v.size))) : n = R.createElementNS(n, u), n[Ja] = i, n[mc] = v, kc(n, i, !1, !1), i.stateNode = n, R = dn(u, v), u) {
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
                for (g = 0; g < Vl.length; g++)
                  yn(Vl[g], n);
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
                Ze(n, v), g = Ut(n, v), yn("invalid", n);
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
            Bt(u, g);
            var k = g;
            for (S in k)
              if (k.hasOwnProperty(S)) {
                var j = k[S];
                S === "style" ? jt(n, j) : S === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && Mt(n, j)) : S === "children" ? typeof j == "string" ? (u !== "textarea" || j !== "") && rt(n, j) : typeof j == "number" && rt(n, "" + j) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (m.hasOwnProperty(S) ? j != null && S === "onScroll" && yn("scroll", n) : j != null && P(n, S, j, R));
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
        return Tt($n), v = i.memoizedState, i.flags & 64 ? (i.lanes = u, i) : (v = v !== null, u = !1, n === null ? i.memoizedProps.fallback !== void 0 && os(i) : u = n.memoizedState !== null, v && !u && i.mode & 2 && (n === null && i.memoizedProps.unstable_avoidThisFallback !== !0 || $n.current & 1 ? vr === 0 && (vr = 3) : ((vr === 0 || vr === 3) && (vr = 4), Wr === null || !(fl & 134217727) && !(li & 134217727) || vu(Wr, xr))), (v || u) && (i.flags |= 4), null);
      case 4:
        return Jl(), su(i), n === null && Jf(i.stateNode.containerInfo), null;
      case 10:
        return Cc(i), null;
      case 17:
        return Cr(i.type) && ei(), null;
      case 19:
        if (Tt($n), v = i.memoizedState, v === null)
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
                  return vt($n, $n.current & 1 | 2), i.child;
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
        return v.tail !== null ? (u = v.tail, v.rendering = u, v.tail = u.sibling, v.lastEffect = i.lastEffect, v.renderingStartTime = Er(), u.sibling = null, i = $n.current, vt($n, S ? i & 1 | 2 : i & 1), u) : null;
      case 23:
      case 24:
        return Ud(), n !== null && n.memoizedState !== null != (i.memoizedState !== null) && v.mode !== "unstable-defer-without-hiding" && (i.flags |= 4), null;
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
        return Tt($n), i = n.flags, i & 4096 ? (n.flags = i & -4097 | 64, n) : null;
      case 19:
        return Tt($n), null;
      case 4:
        return Jl(), null;
      case 10:
        return Cc(n), null;
      case 23:
      case 24:
        return Ud(), null;
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
    u = Pa(-1, u), u.tag = 3, u.payload = { element: null };
    var v = i.value;
    return u.callback = function() {
      gs || (gs = !0, Ld = v), Md(n, i);
    }, u;
  }
  function Zp(n, i, u) {
    u = Pa(-1, u), u.tag = 3;
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
  var by = typeof WeakSet == "function" ? WeakSet : Set;
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
  function Sy(n, i) {
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
            v = g.next, g = g.tag, g & 4 && g & 1 && (Hd(u, n), fh(u, n)), n = v;
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
                Hd(i, u);
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
          for (var R = n, k = u, j = k; ; )
            if (eh(R, j), j.child !== null && j.tag !== 4)
              j.child.return = j, j = j.child;
            else {
              if (j === k)
                break e;
              for (; j.sibling === null; ) {
                if (j.return === null || j.return === k)
                  break e;
                j = j.return;
              }
              j.sibling.return = j.return, j = j.sibling;
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
              R === "style" ? jt(u, k) : R === "dangerouslySetInnerHTML" ? Mt(u, k) : R === "children" ? rt(u, k) : P(u, R, k, i);
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
      u === null && (u = n.stateNode = new by()), i.forEach(function(v) {
        var g = Ry.bind(null, n, v);
        u.has(v) || (u.add(v), v.then(g, g));
      });
    }
  }
  function Cy(n, i) {
    return n !== null && (n = n.memoizedState, n === null || n.dehydrated !== null) ? (i = i.memoizedState, i !== null && i.dehydrated === null) : !1;
  }
  var ps = Math.ceil, cu = U.ReactCurrentDispatcher, cl = U.ReactCurrentOwner, Ct = 0, Wr = null, Yn = null, xr = 0, oi = 0, fu = Br(0), vr = 0, Nr = null, za = 0, fl = 0, li = 0, Ad = 0, hs = null, ms = 0, dl = 1 / 0;
  function du() {
    dl = Er() + 500;
  }
  var je = null, gs = !1, Ld = null, ui = null, To = !1, vl = null, ys = 90, Pd = [], Id = [], Ui = null, bs = 0, Mc = null, Oc = -1, ji = 0, Nc = 0, Ss = null, Dc = !1;
  function ca() {
    return Ct & 48 ? Er() : Oc !== -1 ? Oc : Oc = Er();
  }
  function si(n) {
    if (n = n.mode, !(n & 2))
      return 1;
    if (!(n & 4))
      return Ql() === 99 ? 1 : 2;
    if (ji === 0 && (ji = za), mo.transition !== 0) {
      Nc !== 0 && (Nc = hs !== null ? hs.pendingLanes : 0), n = ji;
      var i = 4186112 & ~Nc;
      return i &= -i, i === 0 && (n = 4186112 & ~n, i = n & -n, i === 0 && (i = 8192)), i;
    }
    return n = Ql(), Ct & 4 && n === 98 ? n = Ri(12, ji) : (n = Cn(n), n = Ri(n, ji)), n;
  }
  function Ro(n, i, u) {
    if (50 < bs)
      throw bs = 0, Mc = null, Error(c(185));
    if (n = Ac(n, i), n === null)
      return null;
    Pu(n, i, u), n === Wr && (li |= i, vr === 4 && vu(n, xr));
    var v = Ql();
    i === 1 ? Ct & 8 && !(Ct & 48) ? $d(n) : (Ea(n, u), Ct === 0 && (du(), lr())) : (!(Ct & 4) || v !== 98 && v !== 99 || (Ui === null ? Ui = /* @__PURE__ */ new Set([n]) : Ui.add(n)), Ea(n, u)), hs = n;
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
      var k = 31 - io(R), j = 1 << k, ee = S[k];
      if (ee === -1) {
        if (!(j & v) || j & g) {
          ee = i, pn(j);
          var Le = ct;
          S[k] = 10 <= Le ? ee + 250 : 6 <= Le ? ee + 5e3 : -1;
        }
      } else
        ee <= i && (n.expiredLanes |= j);
      R &= ~j;
    }
    if (v = Za(n, n === Wr ? xr : 0), i = ct, v === 0)
      u !== null && (u !== ld && Yu(u), n.callbackNode = null, n.callbackPriority = 0);
    else {
      if (u !== null) {
        if (n.callbackPriority === i)
          return;
        u !== ld && Yu(u);
      }
      i === 15 ? (u = $d.bind(null, n), ti === null ? (ti = [u], bc = La(yc, Ni)) : ti.push(u), u = ld) : i === 14 ? u = nl(99, $d.bind(null, n)) : (u = ro(i), u = nl(u, zd.bind(null, n))), n.callbackPriority = i, n.callbackNode = u;
    }
  }
  function zd(n) {
    if (Oc = -1, Nc = ji = 0, Ct & 48)
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
    return Ea(n, Er()), n.callbackNode === i ? zd.bind(null, n) : null;
  }
  function vu(n, i) {
    for (i &= ~Ad, i &= ~li, n.suspendedLanes |= i, n.pingedLanes &= ~i, n = n.expirationTimes; 0 < i; ) {
      var u = 31 - io(i), v = 1 << u;
      n[u] = -1, i &= ~v;
    }
  }
  function $d(n) {
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
  function Ey() {
    if (Ui !== null) {
      var n = Ui;
      Ui = null, n.forEach(function(i) {
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
  function Ud() {
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
            Tt($n);
            break;
          case 19:
            Tt($n);
            break;
          case 10:
            Cc(v);
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
          var S = n, R = u.return, k = u, j = i;
          if (i = xr, k.flags |= 2048, k.firstEffect = k.lastEffect = null, j !== null && typeof j == "object" && typeof j.then == "function") {
            var ee = j;
            if (!(k.mode & 2)) {
              var Le = k.alternate;
              Le ? (k.updateQueue = Le.updateQueue, k.memoizedState = Le.memoizedState, k.lanes = Le.lanes) : (k.updateQueue = null, k.memoizedState = null);
            }
            var Et = ($n.current & 1) !== 0, me = R;
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
                      var W = Pa(-1, 1);
                      W.tag = 2, Di(k, W);
                    }
                  k.lanes |= 1;
                  break e;
                }
                j = void 0, k = i;
                var le = S.pingCache;
                if (le === null ? (le = S.pingCache = new Qp(), j = /* @__PURE__ */ new Set(), le.set(ee, j)) : (j = le.get(ee), j === void 0 && (j = /* @__PURE__ */ new Set(), le.set(ee, j))), !j.has(k)) {
                  j.add(k);
                  var ce = Ty.bind(null, S, ee, k);
                  ee.then(ce, ce);
                }
                me.flags |= 4096, me.lanes = i;
                break e;
              }
              me = me.return;
            } while (me !== null);
            j = Error(($e(k.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
          }
          vr !== 5 && (vr = 2), j = kd(j, k), me = R;
          do {
            switch (me.tag) {
              case 3:
                S = j, me.flags |= 4096, i &= -i, me.lanes |= i;
                var Rt = Xp(me, S, i);
                jp(me, Rt);
                break e;
              case 1:
                S = j;
                var He = me.type, wt = me.stateNode;
                if (!(me.flags & 64) && (typeof He.getDerivedStateFromError == "function" || wt !== null && typeof wt.componentDidCatch == "function" && (ui === null || !ui.has(wt)))) {
                  me.flags |= 4096, i &= -i, me.lanes |= i;
                  var Lt = Zp(me, S, i);
                  jp(me, Lt);
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
      jd(Yn);
  }
  function sh() {
    for (; Yn !== null && !dy(); )
      jd(Yn);
  }
  function jd(n) {
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
        if (u = yy(u, i, oi), u !== null) {
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
    return tl(99, wy.bind(null, n, i)), null;
  }
  function wy(n, i) {
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
      var j = 31 - io(S), ee = 1 << j;
      g[j] = 0, R[j] = -1, k[j] = -1, S &= ~ee;
    }
    if (Ui !== null && !(v & 24) && Ui.has(n) && Ui.delete(n), n === Wr && (Yn = Wr = null, xr = 0), 1 < u.flags ? u.lastEffect !== null ? (u.lastEffect.nextEffect = u, v = u.firstEffect) : v = u : v = u.firstEffect, v !== null) {
      if (g = Ct, Ct |= 32, cl.current = null, ed = Iu, R = Vu(), Yo(R)) {
        if ("selectionStart" in R)
          k = { start: R.selectionStart, end: R.selectionEnd };
        else
          e:
            if (k = (k = R.ownerDocument) && k.defaultView || window, (ee = k.getSelection && k.getSelection()) && ee.rangeCount !== 0) {
              k = ee.anchorNode, S = ee.anchorOffset, j = ee.focusNode, ee = ee.focusOffset;
              try {
                k.nodeType, j.nodeType;
              } catch (_t) {
                k = null;
                break e;
              }
              var Le = 0, Et = -1, me = -1, Je = 0, bt = 0, ft = R, Q = null;
              t:
                for (; ; ) {
                  for (var F; ft !== k || S !== 0 && ft.nodeType !== 3 || (Et = Le + S), ft !== j || ee !== 0 && ft.nodeType !== 3 || (me = Le + ee), ft.nodeType === 3 && (Le += ft.nodeValue.length), (F = ft.firstChild) !== null; )
                    Q = ft, ft = F;
                  for (; ; ) {
                    if (ft === R)
                      break t;
                    if (Q === k && ++Je === S && (Et = Le), Q === j && ++bt === ee && (me = Le), (F = ft.nextSibling) !== null)
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
      td = { focusedElem: R, selectionRange: k }, Iu = !1, Ss = null, Dc = !1, je = v;
      do
        try {
          xy();
        } catch (_t) {
          if (je === null)
            throw Error(c(330));
          Mo(je, _t), je = je.nextEffect;
        }
      while (je !== null);
      Ss = null, je = v;
      do
        try {
          for (R = n; je !== null; ) {
            var W = je.flags;
            if (W & 16 && rt(je.stateNode, ""), W & 128) {
              var le = je.alternate;
              if (le !== null) {
                var ce = le.ref;
                ce !== null && (typeof ce == "function" ? ce(null) : ce.current = null);
              }
            }
            switch (W & 1038) {
              case 2:
                rh(je), je.flags &= -3;
                break;
              case 6:
                rh(je), je.flags &= -3, Dd(je.alternate, je);
                break;
              case 1024:
                je.flags &= -1025;
                break;
              case 1028:
                je.flags &= -1025, Dd(je.alternate, je);
                break;
              case 4:
                Dd(je.alternate, je);
                break;
              case 8:
                k = je, ah(R, k);
                var Rt = k.alternate;
                th(k), Rt !== null && th(Rt);
            }
            je = je.nextEffect;
          }
        } catch (_t) {
          if (je === null)
            throw Error(c(330));
          Mo(je, _t), je = je.nextEffect;
        }
      while (je !== null);
      if (ce = td, le = Vu(), W = ce.focusedElem, R = ce.selectionRange, le !== W && W && W.ownerDocument && Yf(W.ownerDocument.documentElement, W)) {
        for (R !== null && Yo(W) && (le = R.start, ce = R.end, ce === void 0 && (ce = le), "selectionStart" in W ? (W.selectionStart = le, W.selectionEnd = Math.min(ce, W.value.length)) : (ce = (le = W.ownerDocument || document) && le.defaultView || window, ce.getSelection && (ce = ce.getSelection(), k = W.textContent.length, Rt = Math.min(R.start, k), R = R.end === void 0 ? Rt : Math.min(R.end, k), !ce.extend && Rt > R && (k = R, R = Rt, Rt = k), k = Rp(W, Rt), S = Rp(W, R), k && S && (ce.rangeCount !== 1 || ce.anchorNode !== k.node || ce.anchorOffset !== k.offset || ce.focusNode !== S.node || ce.focusOffset !== S.offset) && (le = le.createRange(), le.setStart(k.node, k.offset), ce.removeAllRanges(), Rt > R ? (ce.addRange(le), ce.extend(S.node, S.offset)) : (le.setEnd(S.node, S.offset), ce.addRange(le)))))), le = [], ce = W; ce = ce.parentNode; )
          ce.nodeType === 1 && le.push({ element: ce, left: ce.scrollLeft, top: ce.scrollTop });
        for (typeof W.focus == "function" && W.focus(), W = 0; W < le.length; W++)
          ce = le[W], ce.element.scrollLeft = ce.left, ce.element.scrollTop = ce.top;
      }
      Iu = !!ed, td = ed = null, n.current = u, je = v;
      do
        try {
          for (W = n; je !== null; ) {
            var He = je.flags;
            if (He & 36 && Od(W, je.alternate, je), He & 128) {
              le = void 0;
              var wt = je.ref;
              if (wt !== null) {
                var Lt = je.stateNode;
                switch (je.tag) {
                  case 5:
                    le = Lt;
                    break;
                  default:
                    le = Lt;
                }
                typeof wt == "function" ? wt(le) : wt.current = le;
              }
            }
            je = je.nextEffect;
          }
        } catch (_t) {
          if (je === null)
            throw Error(c(330));
          Mo(je, _t), je = je.nextEffect;
        }
      while (je !== null);
      je = null, zp(), Ct = g;
    } else
      n.current = u;
    if (To)
      To = !1, vl = n, ys = i;
    else
      for (je = v; je !== null; )
        i = je.nextEffect, je.nextEffect = null, je.flags & 8 && (He = je, He.sibling = null, He.stateNode = null), je = i;
    if (v = n.pendingLanes, v === 0 && (ui = null), v === 1 ? n === Mc ? bs++ : (bs = 0, Mc = n) : bs = 0, u = u.stateNode, el && typeof el.onCommitFiberRoot == "function")
      try {
        el.onCommitFiberRoot(rd, u, void 0, (u.current.flags & 64) === 64);
      } catch (_t) {
      }
    if (Ea(n, Er()), gs)
      throw gs = !1, n = Ld, Ld = null, n;
    return Ct & 8 || lr(), null;
  }
  function xy() {
    for (; je !== null; ) {
      var n = je.alternate;
      Dc || Ss === null || (je.flags & 8 ? $r(je, Ss) && (Dc = !0) : je.tag === 13 && Cy(n, je) && $r(je, Ss) && (Dc = !0));
      var i = je.flags;
      i & 256 && Sy(n, je), !(i & 512) || To || (To = !0, nl(97, function() {
        return ko(), null;
      })), je = je.nextEffect;
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
  function Hd(n, i) {
    Id.push(i, n), To || (To = !0, nl(97, function() {
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
    var u = Id;
    Id = [];
    for (var v = 0; v < u.length; v += 2) {
      var g = u[v], S = u[v + 1], R = g.destroy;
      if (g.destroy = void 0, typeof R == "function")
        try {
          R();
        } catch (j) {
          if (S === null)
            throw Error(c(330));
          Mo(S, j);
        }
    }
    for (u = Pd, Pd = [], v = 0; v < u.length; v += 2) {
      g = u[v], S = u[v + 1];
      try {
        var k = g.create;
        g.destroy = k();
      } catch (j) {
        if (S === null)
          throw Error(c(330));
        Mo(S, j);
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
  function Ty(n, i, u) {
    var v = n.pingCache;
    v !== null && v.delete(i), i = ca(), n.pingedLanes |= n.suspendedLanes & u, Wr === n && (xr & u) === u && (vr === 4 || vr === 3 && (xr & 62914560) === xr && 500 > Er() - ms ? pl(n, 0) : Ad |= u), Ea(n, i);
  }
  function Ry(n, i) {
    var u = n.stateNode;
    u !== null && u.delete(i), i = 0, i === 0 && (i = n.mode, i & 2 ? i & 4 ? (ji === 0 && (ji = za), i = ao(62914560 & ~ji), i === 0 && (i = 4194304)) : i = Ql() === 99 ? 1 : 2 : i = 1), u = ca(), n = Ac(n, i), n !== null && (Pu(n, i, u), Ea(n, u));
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
            Hp(i);
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
              return u & i.child.childLanes ? wo(n, i, u) : (vt($n, $n.current & 1), i = $i(n, i, u), i !== null ? i.sibling : null);
            vt($n, $n.current & 1);
            break;
          case 19:
            if (v = (u & i.childLanes) !== 0, n.flags & 64) {
              if (v)
                return gy(n, i, u);
              i.flags |= 64;
            }
            if (g = i.memoizedState, g !== null && (g.rendering = null, g.tail = null, g.lastEffect = null), vt($n, $n.current), v)
              break;
            return null;
          case 23:
          case 24:
            return i.lanes = 0, lu(n, i, u);
        }
        return $i(n, i, u);
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
          switch (n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2), n = i.pendingProps, S = g._init, g = S(g._payload), i.type = g, S = i.tag = ky(g), n = ur(g, n), S) {
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
        if (v = i.pendingProps, g = i.memoizedState, g = g !== null ? g.element : null, Up(n, i), Ai(i, v, null, u), v = i.memoizedState.element, v === g)
          eu(), i = $i(n, i, u);
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
        return Hp(i), n === null && bo(i), v = i.type, g = i.pendingProps, S = n !== null ? n.memoizedProps : null, R = g.children, Gu(v, g) ? R = null : S !== null && Gu(v, S) && (i.flags |= 16), Vp(n, i), Zr(n, i, R, u), i.child;
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
                i = $i(n, i, u);
                break e;
              }
            } else
              for (k = i.child, k !== null && (k.return = i); k !== null; ) {
                var j = k.dependencies;
                if (j !== null) {
                  R = k.child;
                  for (var ee = j.firstContext; ee !== null; ) {
                    if (ee.context === v && ee.observedBits & S) {
                      k.tag === 1 && (ee = Pa(-1, u & -u), ee.tag = 2, Di(k, ee)), k.lanes |= u, ee = k.alternate, ee !== null && (ee.lanes |= u), cd(k.return, u), j.lanes |= u;
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
        return Bp(n, i, i.type, i.pendingProps, v, u);
      case 17:
        return v = i.type, g = i.pendingProps, g = i.elementType === v ? g : ur(v, g), n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2), i.tag = 1, Cr(v) ? (n = !0, ba(i)) : n = !1, rl(i, u), al(i, v, g), xc(i, v, g, u), Rd(null, i, v, !0, n, u);
      case 19:
        return gy(n, i, u);
      case 23:
        return lu(n, i, u);
      case 24:
        return lu(n, i, u);
    }
    throw Error(c(156, i.tag));
  };
  function _y(n, i, u, v) {
    this.tag = n, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = v, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function wa(n, i, u, v) {
    return new _y(n, i, u, v);
  }
  function Ic(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function ky(n) {
    if (typeof n == "function")
      return Ic(n) ? 1 : 0;
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
      Ic(n) && (R = 1);
    else if (typeof n == "string")
      R = 5;
    else
      e:
        switch (n) {
          case ne:
            return ci(u.children, g, S, i);
          case Ie:
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
  function Bd(n, i, u) {
    return i = wa(4, n.children !== null ? n.children : [], n.key, i), i.lanes = u, i.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, i;
  }
  function My(n, i, u) {
    this.tag = i, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = u, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = tc(0), this.expirationTimes = tc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tc(0), this.mutableSourceEagerHydrationData = null;
  }
  function zc(n, i, u) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: q, key: v == null ? null : "" + v, children: n, containerInfo: i, implementation: u };
  }
  function $c(n, i, u, v) {
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
          var j = u.type;
          if (Cr(j)) {
            u = Yl(u, j, k);
            break e;
          }
        }
        u = k;
      } else
        u = vo;
    return i.context === null ? i.context = u : i.pendingContext = u, i = Pa(S, R), i.payload = { element: n }, v = v === void 0 ? null : v, v !== null && (i.callback = v), Di(g, i), Ro(g, R, S), R;
  }
  function Uc(n) {
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
  function jc(n, i) {
    ph(n, i), (n = n.alternate) && ph(n, i);
  }
  function hh() {
    return null;
  }
  function Vd(n, i, u) {
    var v = u != null && u.hydrationOptions != null && u.hydrationOptions.mutableSources || null;
    if (u = new My(n, i, u != null && u.hydrate === !0), i = wa(3, null, null, i === 2 ? 7 : i === 1 ? 3 : 0), u.current = i, i.stateNode = u, fd(i), n[Hr] = u.current, Jf(n.nodeType === 8 ? n.parentNode : n), v)
      for (n = 0; n < v.length; n++) {
        i = v[n];
        var g = i._getVersion;
        g = g(i._source), u.mutableSourceEagerHydrationData == null ? u.mutableSourceEagerHydrationData = [i, g] : u.mutableSourceEagerHydrationData.push(i, g);
      }
    this._internalRoot = u;
  }
  Vd.prototype.render = function(n) {
    $c(n, this._internalRoot, null, null);
  }, Vd.prototype.unmount = function() {
    var n = this._internalRoot, i = n.containerInfo;
    $c(null, n, null, function() {
      i[Hr] = null;
    });
  };
  function ws(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Oy(n, i) {
    if (i || (i = n ? n.nodeType === 9 ? n.documentElement : n.firstChild : null, i = !(!i || i.nodeType !== 1 || !i.hasAttribute("data-reactroot"))), !i)
      for (var u; u = n.lastChild; )
        n.removeChild(u);
    return new Vd(n, 0, i ? { hydrate: !0 } : void 0);
  }
  function Hc(n, i, u, v, g) {
    var S = u._reactRootContainer;
    if (S) {
      var R = S._internalRoot;
      if (typeof g == "function") {
        var k = g;
        g = function() {
          var ee = Uc(R);
          k.call(ee);
        };
      }
      $c(i, R, n, g);
    } else {
      if (S = u._reactRootContainer = Oy(u, v), R = S._internalRoot, typeof g == "function") {
        var j = g;
        g = function() {
          var ee = Uc(R);
          j.call(ee);
        };
      }
      lh(function() {
        $c(i, R, n, g);
      });
    }
    return Uc(R);
  }
  Xa = function(n) {
    if (n.tag === 13) {
      var i = ca();
      Ro(n, 4, i), jc(n, 4);
    }
  }, gr = function(n) {
    if (n.tag === 13) {
      var i = ca();
      Ro(n, 67108864, i), jc(n, 67108864);
    }
  }, Qr = function(n) {
    if (n.tag === 13) {
      var i = ca(), u = si(n);
      Ro(n, u, i), jc(n, u);
    }
  }, Mr = function(n, i) {
    return i();
  }, Ue = function(n, i, u) {
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
    !(Ct & 49) && (Ey(), ko());
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
    return zc(n, i, null, u);
  }
  var Ny = { Events: [ua, Fr, Oi, At, mn, ko, { current: !1 }] }, xs = { findFiberByHostInstance: Jo, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, Dy = { bundleType: xs.bundleType, version: xs.version, rendererPackageName: xs.rendererPackageName, rendererConfig: xs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: U.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Qa(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: xs.findFiberByHostInstance || hh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var Fc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fc.isDisabled && Fc.supportsFiber)
      try {
        rd = Fc.inject(Dy), el = Fc;
      } catch (n) {
      }
  }
  return Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ny, Ba.createPortal = mh, Ba.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var i = n._reactInternals;
    if (i === void 0)
      throw typeof n.render == "function" ? Error(c(188)) : Error(c(268, Object.keys(n)));
    return n = Qa(i), n = n === null ? null : n.stateNode, n;
  }, Ba.flushSync = function(n, i) {
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
  }, Ba.hydrate = function(n, i, u) {
    if (!ws(i))
      throw Error(c(200));
    return Hc(null, n, i, !0, u);
  }, Ba.render = function(n, i, u) {
    if (!ws(i))
      throw Error(c(200));
    return Hc(null, n, i, !1, u);
  }, Ba.unmountComponentAtNode = function(n) {
    if (!ws(n))
      throw Error(c(40));
    return n._reactRootContainer ? (lh(function() {
      Hc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Hr] = null;
      });
    }), !0) : !1;
  }, Ba.unstable_batchedUpdates = oh, Ba.unstable_createPortal = function(n, i) {
    return mh(n, i, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  }, Ba.unstable_renderSubtreeIntoContainer = function(n, i, u, v) {
    if (!ws(u))
      throw Error(c(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(c(38));
    return Hc(n, i, u, !1, v);
  }, Ba.version = "17.0.2", Ba;
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
function IA() {
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
var i1 = {};
/** @license React v0.20.2
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rx;
function zA() {
  return Rx || (Rx = 1, function(r) {
    process.env.NODE_ENV !== "production" && function() {
      var o = 0, s = 0, c = 0;
      r.__interactionsRef = null, r.__subscriberRef = null, r.__interactionsRef = {
        current: /* @__PURE__ */ new Set()
      }, r.__subscriberRef = {
        current: null
      };
      function d($) {
        var I = r.__interactionsRef.current;
        r.__interactionsRef.current = /* @__PURE__ */ new Set();
        try {
          return $();
        } finally {
          r.__interactionsRef.current = I;
        }
      }
      function m() {
        return r.__interactionsRef.current;
      }
      function h() {
        return ++c;
      }
      function C($, I, P) {
        var U = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : o, Y = {
          __count: 1,
          id: s++,
          name: $,
          timestamp: I
        }, q = r.__interactionsRef.current, ne = new Set(q);
        ne.add(Y), r.__interactionsRef.current = ne;
        var oe = r.__subscriberRef.current, re;
        try {
          oe !== null && oe.onInteractionTraced(Y);
        } finally {
          try {
            oe !== null && oe.onWorkStarted(ne, U);
          } finally {
            try {
              re = P();
            } finally {
              r.__interactionsRef.current = q;
              try {
                oe !== null && oe.onWorkStopped(ne, U);
              } finally {
                Y.__count--, oe !== null && Y.__count === 0 && oe.onInteractionScheduledWorkCompleted(Y);
              }
            }
          }
        }
        return re;
      }
      function x($) {
        var I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o, P = r.__interactionsRef.current, U = r.__subscriberRef.current;
        U !== null && U.onWorkScheduled(P, I), P.forEach(function(ne) {
          ne.__count++;
        });
        var Y = !1;
        function q() {
          var ne = r.__interactionsRef.current;
          r.__interactionsRef.current = P, U = r.__subscriberRef.current;
          try {
            var oe;
            try {
              U !== null && U.onWorkStarted(P, I);
            } finally {
              try {
                oe = $.apply(void 0, arguments);
              } finally {
                r.__interactionsRef.current = ne, U !== null && U.onWorkStopped(P, I);
              }
            }
            return oe;
          } finally {
            Y || (Y = !0, P.forEach(function(re) {
              re.__count--, U !== null && re.__count === 0 && U.onInteractionScheduledWorkCompleted(re);
            }));
          }
        }
        return q.cancel = function() {
          U = r.__subscriberRef.current;
          try {
            U !== null && U.onWorkCanceled(P, I);
          } finally {
            P.forEach(function(oe) {
              oe.__count--, U && oe.__count === 0 && U.onInteractionScheduledWorkCompleted(oe);
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
          onWorkScheduled: z,
          onWorkStarted: B,
          onWorkStopped: A
        });
      }
      function _($) {
        E.delete($), E.size === 0 && (r.__subscriberRef.current = null);
      }
      function N($) {
        var I = !1, P = null;
        if (E.forEach(function(U) {
          try {
            U.onInteractionTraced($);
          } catch (Y) {
            I || (I = !0, P = Y);
          }
        }), I)
          throw P;
      }
      function L($) {
        var I = !1, P = null;
        if (E.forEach(function(U) {
          try {
            U.onInteractionScheduledWorkCompleted($);
          } catch (Y) {
            I || (I = !0, P = Y);
          }
        }), I)
          throw P;
      }
      function z($, I) {
        var P = !1, U = null;
        if (E.forEach(function(Y) {
          try {
            Y.onWorkScheduled($, I);
          } catch (q) {
            P || (P = !0, U = q);
          }
        }), P)
          throw U;
      }
      function B($, I) {
        var P = !1, U = null;
        if (E.forEach(function(Y) {
          try {
            Y.onWorkStarted($, I);
          } catch (q) {
            P || (P = !0, U = q);
          }
        }), P)
          throw U;
      }
      function A($, I) {
        var P = !1, U = null;
        if (E.forEach(function(Y) {
          try {
            Y.onWorkStopped($, I);
          } catch (q) {
            P || (P = !0, U = q);
          }
        }), P)
          throw U;
      }
      function G($, I) {
        var P = !1, U = null;
        if (E.forEach(function(Y) {
          try {
            Y.onWorkCanceled($, I);
          } catch (q) {
            P || (P = !0, U = q);
          }
        }), P)
          throw U;
      }
      r.unstable_clear = d, r.unstable_getCurrent = m, r.unstable_getThreadID = h, r.unstable_subscribe = M, r.unstable_trace = C, r.unstable_unsubscribe = _, r.unstable_wrap = x;
    }();
  }(i1)), i1;
}
var _x;
function $A() {
  return _x || (_x = 1, process.env.NODE_ENV === "production" ? Km.exports = IA() : Km.exports = zA()), Km.exports;
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
function UA() {
  return kx || (kx = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Oa, o = iR(), s = oR(), c = $A(), d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
    var x = 0, E = 1, M = 2, _ = 3, N = 4, L = 5, z = 6, B = 7, A = 8, G = 9, $ = 10, I = 11, P = 12, U = 13, Y = 14, q = 15, ne = 16, oe = 17, re = 18, ge = 19, pe = 20, te = 21, se = 22, de = 23, Ce = 24, ke = !0, we = !1, Ae = !1, Ie = !1, ie = /* @__PURE__ */ new Set(), he = {}, Se = {};
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
    var Xe = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined", it = 0, Ve = 1, nt = 2, Nt = 3, $e = 4, et = 5, Vt = 6, Ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", mt = Ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Dt = "data-reactroot", zt = new RegExp("^[" + Ee + "][" + mt + "]*$"), Ut = Object.prototype.hasOwnProperty, Ze = {}, kt = {};
    function gt(e) {
      return Ut.call(kt, e) ? !0 : Ut.call(Ze, e) ? !1 : zt.test(e) ? (kt[e] = !0, !0) : (Ze[e] = !0, h("Invalid attribute name: `%s`", e), !1);
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
          case $e:
            return t === !1;
          case et:
            return isNaN(t);
          case Vt:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Qt(e) {
      return Gt.hasOwnProperty(e) ? Gt[e] : null;
    }
    function ut(e, t, a, l, f, p, y) {
      this.acceptsBooleans = t === nt || t === Nt || t === $e, this.attributeName = l, this.attributeNamespace = f, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = p, this.removeEmptyString = y;
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
        Ve,
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
        $e,
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
        Vt,
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
        Ve,
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
        Ve,
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
        Ve,
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
        Ve,
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
      Ve,
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
        Ve,
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
        if (l.type === $e) {
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
        if (kM(a))
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
          var X = f.type, H;
          X === Nt || X === $e && a === !0 ? H = "" : (H = "" + a, f.sanitizeURL && xt(H.toString())), D ? e.setAttributeNS(D, O, H) : e.setAttribute(O, H);
        }
      }
    }
    var on = 60103, Ot = 60106, jt = 60107, ir = 60108, Bt = 60114, dn = 60109, Ht = 60110, Ue = 60112, St = 60113, Oe = 60120, Ge = 60115, At = 60116, mn = 60121, An = 60119, gn = 60128, oa = 60129, qr = 60130, Ln = 60131;
    if (typeof Symbol == "function" && Symbol.for) {
      var Kt = Symbol.for;
      on = Kt("react.element"), Ot = Kt("react.portal"), jt = Kt("react.fragment"), ir = Kt("react.strict_mode"), Bt = Kt("react.profiler"), dn = Kt("react.provider"), Ht = Kt("react.context"), Ue = Kt("react.forward_ref"), St = Kt("react.suspense"), Oe = Kt("react.suspense_list"), Ge = Kt("react.memo"), At = Kt("react.lazy"), mn = Kt("react.block"), Kt("react.server.block"), Kt("react.fundamental"), An = Kt("react.scope"), gn = Kt("react.opaque.id"), oa = Kt("react.debug_trace_mode"), qr = Kt("react.offscreen"), Ln = Kt("react.legacy_hidden");
    }
    var Bn = typeof Symbol == "function" && Symbol.iterator, Yr = "@@iterator";
    function ln(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Bn && e[Bn] || e[Yr];
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
    var Ir = d.ReactCurrentDispatcher, kr;
    function zr(e, t, a) {
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
    var Qa = !1, $r;
    {
      var Xa = typeof WeakMap == "function" ? WeakMap : Map;
      $r = new Xa();
    }
    function gr(e, t) {
      if (!e || Qa)
        return "";
      {
        var a = $r.get(e);
        if (a !== void 0)
          return a;
      }
      var l;
      Qa = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var p;
      p = Ir.current, Ir.current = null, _r();
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
                    return typeof e == "function" && $r.set(e, X), X;
                  }
                while (O >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        Qa = !1, Ir.current = p, xn(), Error.prepareStackTrace = f;
      }
      var H = e ? e.displayName || e.name : "", J = H ? zr(H) : "";
      return typeof e == "function" && $r.set(e, J), J;
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
    function In(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return gr(e, ha(e));
      if (typeof e == "string")
        return zr(e);
      switch (e) {
        case St:
          return zr("Suspense");
        case Oe:
          return zr("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ue:
            return Mr(e.render);
          case Ge:
            return In(e.type, t, a);
          case mn:
            return Mr(e._render);
          case At: {
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
        case L:
          return zr(e.type);
        case ne:
          return zr("Lazy");
        case U:
          return zr("Suspense");
        case ge:
          return zr("SuspenseList");
        case x:
        case M:
        case q:
          return Mr(e.type);
        case I:
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
        case jt:
          return "Fragment";
        case Ot:
          return "Portal";
        case Bt:
          return "Profiler";
        case ir:
          return "StrictMode";
        case St:
          return "Suspense";
        case Oe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ht:
            var t = e;
            return yr(t) + ".Consumer";
          case dn:
            var a = e;
            return yr(a._context) + ".Provider";
          case Ue:
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
    var Xt = d.ReactDebugCurrentFrame, dt = null, $t = !1;
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
      Xt.getCurrentStack = null, dt = null, $t = !1;
    }
    function vn(e) {
      Xt.getCurrentStack = On, dt = e, $t = !1;
    }
    function er(e) {
      $t = e;
    }
    function wi() {
      return $t;
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
    function Na(e) {
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
    function Da(e) {
      ma(e) || (e._valueTracker = eo(e));
    }
    function to(e) {
      if (!e)
        return !1;
      var t = ma(e);
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
    var Ko = !1, no = !1, Il = !1, Be = !1;
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
    function Cn(e, t) {
      var a = e, l = t.checked;
      l != null && st(a, "checked", l, !1);
    }
    function ro(e, t) {
      var a = e;
      {
        var l = yt(t);
        !a._wrapperState.controlled && l && !Be && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Be = !0), a._wrapperState.controlled && !l && !Il && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Il = !0);
      }
      Cn(e, t);
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
    function qg(e, t) {
      t.value != null && e.setAttribute("value", Gn(zn(t.value)));
    }
    function Pf(e, t) {
      var a = o({
        children: void 0
      }, t), l = io(t.children);
      return l && (a.children = l), a;
    }
    var If;
    If = !1;
    function ip() {
      var e = Tn();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Iu = ["value", "defaultValue"];
    function Yg(e) {
      {
        la("select", e);
        for (var t = 0; t < Iu.length; t++) {
          var a = Iu[t];
          if (e[a] != null) {
            var l = Array.isArray(e[a]);
            e.multiple && !l ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, ip()) : !e.multiple && l && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, ip());
          }
        }
      }
    }
    function zl(e, t, a, l) {
      var f = e.options;
      if (t) {
        for (var p = a, y = {}, b = 0; b < p.length; b++)
          y["$" + p[b]] = !0;
        for (var w = 0; w < f.length; w++) {
          var O = y.hasOwnProperty("$" + f[w].value);
          f[w].selected !== O && (f[w].selected = O), O && l && (f[w].defaultSelected = !0);
        }
      } else {
        for (var D = Gn(zn(a)), X = null, H = 0; H < f.length; H++) {
          if (f[H].value === D) {
            f[H].selected = !0, l && (f[H].defaultSelected = !0);
            return;
          }
          X === null && !f[H].disabled && (X = f[H]);
        }
        X !== null && (X.selected = !0);
      }
    }
    function zu(e, t) {
      return o({}, t, {
        value: void 0
      });
    }
    function nc(e, t) {
      var a = e;
      Yg(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !If && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), If = !0);
    }
    function oo(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var l = t.value;
      l != null ? zl(a, !!t.multiple, l, !1) : t.defaultValue != null && zl(a, !!t.multiple, t.defaultValue, !0);
    }
    function zf(e, t) {
      var a = e, l = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var f = t.value;
      f != null ? zl(a, !!t.multiple, f, !1) : l !== !!t.multiple && (t.defaultValue != null ? zl(a, !!t.multiple, t.defaultValue, !0) : zl(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function rc(e, t) {
      var a = e, l = t.value;
      l != null && zl(a, !!t.multiple, l, !1);
    }
    var $f = !1;
    function $l(e, t) {
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
    function $u(e, t) {
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
    function Xr(e, t) {
      var a = e, l = a.textContent;
      l === a._wrapperState.initialValue && l !== "" && l !== null && (a.value = l);
    }
    function Ul(e, t) {
      Uf(e, t);
    }
    var jl = "http://www.w3.org/1999/xhtml", Hl = "http://www.w3.org/1998/Math/MathML", jf = "http://www.w3.org/2000/svg", ac = {
      html: jl,
      mathml: Hl,
      svg: jf
    };
    function Uu(e) {
      switch (e) {
        case "svg":
          return jf;
        case "math":
          return Hl;
        default:
          return jl;
      }
    }
    function Go(e, t) {
      return e == null || e === jl ? Uu(t) : e === jf && t === "foreignObject" ? jl : e;
    }
    var ic = function(e) {
      return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, a, l, f) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, l, f);
        });
      } : e;
    }, ju, op = ic(function(e, t) {
      if (e.namespaceURI === ac.svg && !("innerHTML" in e)) {
        ju = ju || document.createElement("div"), ju.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = ju.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ga = 1, _i = 3, Ur = 8, lo = 9, lp = 11, oc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === _i) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Qg = {
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
    }, Hu = {
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
    var Xg = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Hu).forEach(function(e) {
      Xg.forEach(function(t) {
        Hu[up(t, e)] = Hu[e];
      });
    });
    function Hf(e, t, a) {
      var l = t == null || typeof t == "boolean" || t === "";
      return l ? "" : !a && typeof t == "number" && t !== 0 && !(Hu.hasOwnProperty(e) && Hu[e]) ? t + "px" : ("" + t).trim();
    }
    var Zg = /([A-Z])/g, Jg = /^ms-/;
    function Ff(e) {
      return e.replace(Zg, "-$1").toLowerCase().replace(Jg, "-ms-");
    }
    var sp = function() {
    };
    {
      var ey = /^(?:webkit|moz|o)[A-Z]/, ty = /^-ms-/, cp = /-(.)/g, fp = /;\s*$/, Fl = {}, Bf = {}, dp = !1, vp = !1, ny = function(e) {
        return e.replace(cp, function(t, a) {
          return a.toUpperCase();
        });
      }, ry = function(e) {
        Fl.hasOwnProperty(e) && Fl[e] || (Fl[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ny(e.replace(ty, "ms-"))
        ));
      }, Vf = function(e) {
        Fl.hasOwnProperty(e) && Fl[e] || (Fl[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Fu = function(e, t) {
        Bf.hasOwnProperty(t) && Bf[t] || (Bf[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(fp, "")));
      }, ay = function(e, t) {
        dp || (dp = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, pp = function(e, t) {
        vp || (vp = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      sp = function(e, t) {
        e.indexOf("-") > -1 ? ry(e) : ey.test(e) ? Vf(e) : fp.test(t) && Fu(e, t), typeof t == "number" && (isNaN(t) ? ay(e, t) : isFinite(t) || pp(e, t));
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
              t += a + (p ? l : Ff(l)) + ":", t += Hf(l, f, p), a = ";";
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
          var p = Hf(l, t[l], f);
          l === "float" && (l = "cssFloat"), f ? a.setProperty(l, p) : a[l] = p;
        }
    }
    function gp(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function qo(e) {
      var t = {};
      for (var a in e)
        for (var l = Qg[a] || [a], f = 0; f < l.length; f++)
          t[l[f]] = a;
      return t;
    }
    function iy(e, t) {
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
    var oy = {
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
    }, ly = o({
      menuitem: !0
    }, oy), yp = "__html";
    function lc(e, t) {
      if (t) {
        if (ly[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
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
    function Aa(e, t) {
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
    }, ki = {}, uy = new RegExp("^(aria)-[" + mt + "]*$"), Sp = new RegExp("^(aria)[A-Z][" + mt + "]*$"), Kf = Object.prototype.hasOwnProperty;
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
        if (uy.test(t)) {
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
      Aa(e, t) || Cp(e, t);
    }
    var qf = !1;
    function sy(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !qf && (qf = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var wp = function() {
    };
    {
      var jr = {}, cy = Object.prototype.hasOwnProperty, xp = /^on./, ya = /^on[^A-Z]/, fy = new RegExp("^(aria)-[" + mt + "]*$"), Bu = new RegExp("^(aria)[A-Z][" + mt + "]*$");
      wp = function(e, t, a, l) {
        if (cy.call(jr, t) && jr[t])
          return !0;
        var f = t.toLowerCase();
        if (f === "onfocusin" || f === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), jr[t] = !0, !0;
        if (l != null) {
          var p = l.registrationNameDependencies, y = l.possibleRegistrationNames;
          if (p.hasOwnProperty(t))
            return !0;
          var b = y.hasOwnProperty(f) ? y[f] : null;
          if (b != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, b), jr[t] = !0, !0;
          if (xp.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), jr[t] = !0, !0;
        } else if (xp.test(t))
          return ya.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), jr[t] = !0, !0;
        if (fy.test(t) || Bu.test(t))
          return !0;
        if (f === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), jr[t] = !0, !0;
        if (f === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), jr[t] = !0, !0;
        if (f === "is" && a !== null && a !== void 0 && typeof a != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), jr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), jr[t] = !0, !0;
        var w = Qt(t), O = w !== null && w.type === it;
        if (uo.hasOwnProperty(f)) {
          var D = uo[f];
          if (D !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, D), jr[t] = !0, !0;
        } else if (!O && t !== f)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, f), jr[t] = !0, !0;
        return typeof a == "boolean" && ot(t, a, w, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), jr[t] = !0, !0) : O ? !0 : ot(t, a, w, !1) ? (jr[t] = !0, !1) : ((a === "false" || a === "true") && w !== null && w.type === Nt && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), jr[t] = !0), !0);
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
      Aa(e, t) || Tp(e, t, a);
    }
    var Yf = 1, Vu = 2, Yo = 4, _p = 16, Bl = Yf | Vu | Yo;
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
    function Vl(e) {
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
        var D = document.createEvent("Event"), X = !1, H = !0, J = window.event, fe = Object.getOwnPropertyDescriptor(window, "event");
        function _e() {
          co.removeEventListener(ae, Pt, !1), typeof window.event != "undefined" && window.hasOwnProperty("event") && (window.event = J);
        }
        var lt = Array.prototype.slice.call(arguments, 3);
        function Pt() {
          X = !0, _e(), a.apply(l, lt), H = !1;
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
        if (window.addEventListener("error", Z), co.addEventListener(ae, Pt, !1), D.initEvent(ae, !1, !1), co.dispatchEvent(D), fe && Object.defineProperty(window, "event", fe), X && H && (Jt ? Sn && (ht = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ht = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ht)), window.removeEventListener("error", Z), !X)
          return _e(), Op.apply(this, arguments);
      };
    }
    var Np = pc, fo = !1, hc = null, Zo = !1, Ja = null, mc = {
      onError: function(e) {
        fo = !0, hc = e;
      }
    };
    function Hr(e, t, a, l, f, p, y, b, w) {
      fo = !1, hc = null, Np.apply(mc, arguments);
    }
    function Dp(e, t, a, l, f, p, y, b, w) {
      if (Hr.apply(this, arguments), fo) {
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
    ), Br = (
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
    ), La = (
      /*                */
      4096
    ), Yu = (
      /* */
      16384
    ), dy = d.ReactCurrentOwner;
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
    function Pp(e) {
      return e.tag === _ ? e.stateNode.containerInfo : null;
    }
    function yc(e) {
      return ho(e) === e;
    }
    function Ip(e) {
      {
        var t = dy.current;
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
        if (a.tag === L || a.tag === z)
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
        if (a.tag === L || a.tag === z || we)
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
    function zp(e, t) {
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
    function $p(e) {
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
    function Up(e) {
      var t = _s(e.target);
      if (t !== null) {
        var a = ho(t);
        if (a !== null) {
          var l = a.tag;
          if (l === U) {
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
    function Pa(e) {
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
      Pa(e) && a.delete(t);
    }
    function jp() {
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
      Ni !== null && Pa(Ni) && (Ni = null), mo !== null && Pa(mo) && (mo = null), ur !== null && Pa(ur) && (ur = null), go.forEach(Di), yo.forEach(Di);
    }
    function Ai(e, t) {
      e.blockedOn === t && (e.blockedOn = null, nl || (nl = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, jp)));
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
        Up(y), y.blockedOn === null && ni.shift();
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
        ol.set(l, t), pd.set(l, y), ze(y, [l]);
      }
    }
    function Jl(e, t) {
      for (var a = 0; a < e.length; a++)
        ol.set(e[a], t);
    }
    function Hp(e) {
      var t = ol.get(e);
      return t === void 0 ? Xl : t;
    }
    function hd() {
      rs(ri, Ec), rs(ns, Xu), rs(ll, Xl), Jl(ts, Ec);
    }
    var $n = s.unstable_now;
    if (!(c.__interactionsRef != null && c.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
    var as = 99, ai = 98, Li = 97, ii = 96, md = 95, Fp = 90;
    $n();
    var bo = 15, is = 14, os = 13, eu = 12, ul = 11, So = 10, tu = 9, sr = 8, nu = 7, _n = 6, cr = 5, fr = 4, ls = 3, Co = 2, Vr = 1, Pi = 0, gd = 31, ue = (
      /*                        */
      0
    ), qn = (
      /*                          */
      0
    ), Ft = (
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
    ), zi = (
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
    ), Ia = (
      /*                   */
      1073741824
    ), kn = -1;
    function vy(e) {
    }
    var hn = sr;
    function ou(e) {
      if ((Ft & e) !== ue)
        return hn = bo, Ft;
      if ((Ii & e) !== ue)
        return hn = is, Ii;
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
      var f = zi & e;
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
      return y !== ue ? (hn = Co, y) : (Ia & e) !== ue ? (hn = Vr, Ia) : (h("Should have found matching lanes. This is a bug in React."), hn = sr, e);
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
        case Vr:
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
        var H = hn;
        if (f <= H)
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
    function py(e, t) {
      for (var a = e.eventTimes, l = kn; t > 0; ) {
        var f = wo(t), p = 1 << f, y = a[f];
        y > l && (l = y), t &= ~p;
      }
      return l;
    }
    function hy(e, t) {
      ou(e);
      var a = hn;
      return a >= So ? t + 250 : a >= _n ? t + 5e3 : kn;
    }
    function my(e, t) {
      for (var a = e.pendingLanes, l = e.suspendedLanes, f = e.pingedLanes, p = e.expirationTimes, y = a; y > 0; ) {
        var b = wo(y), w = 1 << b, O = p[b];
        O === kn ? ((w & l) === ue || (w & f) !== ue) && (p[b] = hy(w, t)) : O <= t && (e.expiredLanes |= w), y &= ~w;
      }
    }
    function Ca(e) {
      var t = e.pendingLanes & ~Ia;
      return t !== ue ? t : t & Ia ? Ia : ue;
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
    function Bp(e) {
      return (e & zi) === e;
    }
    function lu(e, t) {
      switch (e) {
        case Pi:
          break;
        case bo:
          return Ft;
        case is:
          return Ii;
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
          return f === qn && (f = dr(zi & ~t), f === qn && (f = dr(au))), f;
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
    function Vp(e, t) {
      var a = dr(zi & ~t);
      return a === qn && (a = dr(zi & ~e), a === qn && (a = dr(zi))), a;
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
    function gy(e) {
      return e;
    }
    function $i(e, t) {
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
    function yy(e) {
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
    var Qp = Math.clz32 ? Math.clz32 : by, Xp = Math.log, Zp = Math.LN2;
    function by(e) {
      return e === 0 ? 32 : 31 - (Xp(e) / Zp | 0) | 0;
    }
    var Jp = s.unstable_UserBlockingPriority, Sy = s.unstable_runWithPriority, Od = !0;
    function Nd(e) {
      Od = !!e;
    }
    function eh() {
      return Od;
    }
    function th(e, t, a) {
      var l = Hp(t), f;
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
      Sy(Jp, ds.bind(null, e, t, a, l));
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
        qS(e, t, l, null, a);
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
          if (b === U) {
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
      return qS(e, t, l, p, a), null;
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
    function Cy(e, t, a, l) {
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
    var je = o({}, li, {
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
    }), gs = Nr(je), Ld = o({}, je, {
      dataTransfer: 0
    }), ui = Nr(Ld), To = o({}, li, {
      relatedTarget: 0
    }), vl = Nr(To), ys = o({}, za, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Pd = Nr(ys), Id = o({}, za, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Ui = Nr(Id), bs = o({}, za, {
      data: 0
    }), Mc = Nr(bs), Oc = Mc, ji = {
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
        var t = ji[e.key] || e.key;
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
    }), Ac = Nr(Ro), Ea = o({}, je, {
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
    }), zd = Nr(Ea), vu = o({}, li, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: si
    }), $d = Nr(vu), Ey = o({}, za, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), oh = Nr(Ey), lh = o({}, je, {
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
    }), Lc = Nr(lh), Ud = [9, 13, 27, 32], pl = 229, Pc = Xe && "CompositionEvent" in window, pu = null;
    Xe && "documentMode" in document && (pu = document.documentMode);
    var Cs = Xe && "TextEvent" in window && !pu, uh = Xe && (!Pc || pu && pu > 8 && pu <= 11), sh = 32, jd = String.fromCharCode(sh);
    function ch() {
      ze("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ze("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ze("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ze("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var _o = !1;
    function wy(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function xy(e) {
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
    function Hd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function dh(e) {
      return e.locale === "ko";
    }
    var hl = !1;
    function Mo(e, t, a, l, f) {
      var p, y;
      if (Pc ? p = xy(t) : hl ? fh(t, l) && (p = "onCompositionEnd") : ko(t, l) && (p = "onCompositionStart"), !p)
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
          var O = Hd(l);
          O !== null && (w.data = O);
        }
      }
    }
    function Ty(e, t) {
      switch (e) {
        case "compositionend":
          return Hd(t);
        case "keypress":
          var a = t.which;
          return a !== sh ? null : (_o = !0, jd);
        case "textInput":
          var l = t.data;
          return l === jd && _o ? null : l;
        default:
          return null;
      }
    }
    function Ry(e, t) {
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
          if (!wy(t)) {
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
      if (Cs ? p = Ty(t, l) : p = Ry(t, l), !p)
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
    function _y(e, t, a, l, f, p, y) {
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
    function Ic(e) {
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
    function ky(e) {
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
      ze("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Es(e, t, a, l) {
      Vl(l);
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
    function Bd(e) {
      var t = [];
      Es(t, ml, e, Wu(e)), Ku(My, t);
    }
    function My(e) {
      FS(e, 0);
    }
    function zc(e) {
      var t = Kc(e);
      if (to(t))
        return e;
    }
    function $c(e, t) {
      if (e === "change")
        return t;
    }
    var Uc = !1;
    Xe && (Uc = ky("input") && (!document.documentMode || document.documentMode > 9));
    function ph(e, t) {
      ci = e, ml = t, ci.attachEvent("onpropertychange", hh);
    }
    function jc() {
      ci && (ci.detachEvent("onpropertychange", hh), ci = null, ml = null);
    }
    function hh(e) {
      e.propertyName === "value" && zc(ml) && Bd(e);
    }
    function Vd(e, t, a) {
      e === "focusin" ? (jc(), ph(t, a)) : e === "focusout" && jc();
    }
    function ws(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return zc(ml);
    }
    function Oy(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Hc(e, t) {
      if (e === "click")
        return zc(t);
    }
    function mh(e, t) {
      if (e === "input" || e === "change")
        return zc(t);
    }
    function Ny(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || ao(e, "number", e.value);
    }
    function xs(e, t, a, l, f, p, y) {
      var b = a ? Kc(a) : window, w, O;
      if (Fd(b) ? w = $c : Ic(b) ? Uc ? w = mh : (w = ws, O = Vd) : Oy(b) && (w = Hc), w) {
        var D = w(t, a);
        if (D) {
          Es(e, D, l, f);
          return;
        }
      }
      O && O(t, b, a), t === "focusout" && Ny(b);
    }
    function Dy() {
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
        var H, J;
        if (w) {
          var fe = l.relatedTarget || l.toElement;
          if (H = a, J = fe ? _s(fe) : null, J !== null) {
            var _e = ho(J);
            (J !== _e || J.tag !== L && J.tag !== z) && (J = null);
          }
        } else
          H = null, J = a;
        if (H !== J) {
          var lt = gs, Pt = "onMouseLeave", ht = "onMouseEnter", Jt = "mouse";
          (t === "pointerout" || t === "pointerover") && (lt = zd, Pt = "onPointerLeave", ht = "onPointerEnter", Jt = "pointer");
          var Sn = H == null ? D : Kc(H), Z = J == null ? D : Kc(J), ae = new lt(Pt, Jt + "leave", H, l, f);
          ae.target = Sn, ae.relatedTarget = Z;
          var K = null, be = _s(f);
          if (be === a) {
            var De = new lt(ht, Jt + "enter", J, l, f);
            De.target = Z, De.relatedTarget = Sn, K = De;
          }
          yk(e, ae, K, H, J);
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
      return j(e, f, p, y, b);
    }
    function j(e, t, a, l, f) {
      var p = 0, y = -1, b = -1, w = 0, O = 0, D = e, X = null;
      e:
        for (; ; ) {
          for (var H = null; D === t && (a === 0 || D.nodeType === _i) && (y = p + a), D === l && (f === 0 || D.nodeType === _i) && (b = p + f), D.nodeType === _i && (p += D.nodeValue.length), (H = D.firstChild) !== null; )
            X = D, D = H;
          for (; ; ) {
            if (D === e)
              break e;
            if (X === t && ++w === a && (y = p), X === l && ++O === f && (b = p), (H = D.nextSibling) !== null)
              break;
            D = X, X = D.parentNode;
          }
          D = H;
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
      ze("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var He = null, wt = null, Lt = null, _t = !1;
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
    function Ay(e) {
      return e.window === e ? e.document : e.nodeType === lo ? e : e.ownerDocument;
    }
    function US(e, t, a) {
      var l = Ay(a);
      if (!(_t || He == null || He !== Ti(l))) {
        var f = No(He);
        if (!Lt || !v(Lt, f)) {
          Lt = f;
          var p = gh(wt, "onSelect");
          if (p.length > 0) {
            var y = new fl("onSelect", "select", null, t, a);
            e.push({
              event: y,
              listeners: p
            }), y.target = He;
          }
        }
      }
    }
    function fk(e, t, a, l, f, p, y) {
      var b = a ? Kc(a) : window;
      switch (t) {
        case "focusin":
          (Ic(b) || b.contentEditable === "true") && (He = b, wt = a, Lt = null);
          break;
        case "focusout":
          He = null, wt = null, Lt = null;
          break;
        case "mousedown":
          _t = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          _t = !1, US(e, l, f);
          break;
        case "selectionchange":
          if (ce)
            break;
        case "keydown":
        case "keyup":
          US(e, l, f);
      }
    }
    function dk(e, t, a, l, f, p, y) {
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
            w = $d;
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
            w = Ui;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = zd;
            break;
        }
        var D = (p & Yo) !== 0;
        {
          var X = !D && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", H = mk(a, b, l.type, D, X);
          if (H.length > 0) {
            var J = new w(b, O, null, l, f);
            e.push({
              event: J,
              listeners: H
            });
          }
        }
      }
    }
    hd(), Dy(), Oo(), Rt(), ch();
    function vk(e, t, a, l, f, p, y) {
      dk(e, t, a, l, f, p);
      var b = (p & Bl) === 0;
      b && (Fc(e, t, a, l, f, p), xs(e, t, a, l, f), fk(e, t, a, l, f), _y(e, t, a, l, f));
    }
    var Wd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], jS = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Wd));
    function HS(e, t, a) {
      var l = e.type || "unknown-event";
      e.currentTarget = a, Dp(l, t, void 0, e), e.currentTarget = null;
    }
    function pk(e, t, a) {
      var l;
      if (a)
        for (var f = t.length - 1; f >= 0; f--) {
          var p = t[f], y = p.instance, b = p.currentTarget, w = p.listener;
          if (y !== l && e.isPropagationStopped())
            return;
          HS(e, w, b), l = y;
        }
      else
        for (var O = 0; O < t.length; O++) {
          var D = t[O], X = D.instance, H = D.currentTarget, J = D.listener;
          if (X !== l && e.isPropagationStopped())
            return;
          HS(e, J, H), l = X;
        }
    }
    function FS(e, t) {
      for (var a = (t & Yo) !== 0, l = 0; l < e.length; l++) {
        var f = e[l], p = f.event, y = f.listeners;
        pk(p, y, a);
      }
      Jo();
    }
    function hk(e, t, a, l, f) {
      var p = Wu(a), y = [];
      vk(y, e, l, a, p, t), FS(y, t);
    }
    function Dn(e, t) {
      var a = !1, l = CC(t), f = QS(e, a);
      l.has(f) || (KS(t, e, Vu, a), l.add(f));
    }
    var BS = "_reactListening" + Math.random().toString(36).slice(2);
    function VS(e) {
      {
        if (e[BS])
          return;
        e[BS] = !0, ie.forEach(function(t) {
          jS.has(t) || WS(t, !1, e, null), WS(t, !0, e, null);
        });
      }
    }
    function WS(e, t, a, l) {
      var f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, p = a;
      if (e === "selectionchange" && a.nodeType !== lo && (p = a.ownerDocument), l !== null && !t && jS.has(e)) {
        if (e !== "scroll")
          return;
        f |= Vu, p = l;
      }
      var y = CC(p), b = QS(e, t);
      y.has(b) || (t && (f |= Yo), KS(p, e, f, t), y.add(b));
    }
    function KS(e, t, a, l, f) {
      var p = th(e, t, a), y = void 0;
      Gu && (t === "touchstart" || t === "touchmove" || t === "wheel") && (y = !0), e = e, l ? y !== void 0 ? ih(e, t, p, y) : Dd(e, t, p) : y !== void 0 ? Cy(e, t, p, y) : ah(e, t, p);
    }
    function GS(e, t) {
      return e === t || e.nodeType === Ur && e.parentNode === t;
    }
    function qS(e, t, a, l, f) {
      var p = l;
      if (!(t & Yf) && !(t & Vu)) {
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
                if (GS(O, y))
                  break;
                if (w === N)
                  for (var D = b.return; D !== null; ) {
                    var X = D.tag;
                    if (X === _ || X === N) {
                      var H = D.stateNode.containerInfo;
                      if (GS(H, y))
                        return;
                    }
                    D = D.return;
                  }
                for (; O !== null; ) {
                  var J = _s(O);
                  if (J === null)
                    return;
                  var fe = J.tag;
                  if (fe === L || fe === z) {
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
        return hk(e, t, a, p);
      });
    }
    function Kd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function mk(e, t, a, l, f) {
      for (var p = t !== null ? t + "Capture" : null, y = l ? p : t, b = [], w = e, O = null; w !== null; ) {
        var D = w, X = D.stateNode, H = D.tag;
        if (H === L && X !== null && (O = X, y !== null)) {
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
    function Bc(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== L);
      return e || null;
    }
    function gk(e, t) {
      for (var a = e, l = t, f = 0, p = a; p; p = Bc(p))
        f++;
      for (var y = 0, b = l; b; b = Bc(b))
        y++;
      for (; f - y > 0; )
        a = Bc(a), f--;
      for (; y - f > 0; )
        l = Bc(l), y--;
      for (var w = f; w--; ) {
        if (a === l || l !== null && a === l.alternate)
          return a;
        a = Bc(a), l = Bc(l);
      }
      return null;
    }
    function YS(e, t, a, l, f) {
      for (var p = t._reactName, y = [], b = a; b !== null && b !== l; ) {
        var w = b, O = w.alternate, D = w.stateNode, X = w.tag;
        if (O !== null && O === l)
          break;
        if (X === L && D !== null) {
          var H = D;
          if (f) {
            var J = Kl(b, p);
            J != null && y.unshift(Kd(b, J, H));
          } else if (!f) {
            var fe = Kl(b, p);
            fe != null && y.push(Kd(b, fe, H));
          }
        }
        b = b.return;
      }
      y.length !== 0 && e.push({
        event: t,
        listeners: y
      });
    }
    function yk(e, t, a, l, f) {
      var p = l && f ? gk(l, f) : null;
      l !== null && YS(e, t, l, p, !1), f !== null && a !== null && YS(e, a, f, p, !0);
    }
    function QS(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var xa = !1, Gd = "dangerouslySetInnerHTML", yh = "suppressContentEditableWarning", qd = "suppressHydrationWarning", XS = "autoFocus", Ts = "children", Rs = "style", bh = "__html", Vc = ac.html, Ly, Yd, Sh, Ch, Qd, ZS, Eh, JS, Xd, eC;
    {
      Ly = {
        // There are working polyfills for <dialog>. Let people use it.
        dialog: !0,
        // Electron ships a custom <webview> tag to display external web content in
        // an isolated frame and process.
        // This tag is not present in non Electron environments such as JSDom which
        // is often used for testing purposes.
        // @see https://electronjs.org/docs/api/webview-tag
        webview: !0
      }, Sh = function(e, t) {
        Ep(e, t), sy(e, t), Rp(e, t, {
          registrationNameDependencies: he,
          possibleRegistrationNames: Se
        });
      }, JS = Xe && !document.documentMode;
      var bk = /\r\n?/g, Sk = /\u0000|\uFFFD/g;
      Xd = function(e) {
        var t = typeof e == "string" ? e : "" + e;
        return t.replace(bk, `
`).replace(Sk, "");
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
      }, ZS = function(e) {
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
        var a = e.namespaceURI === Vc ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
        return a.innerHTML = t, a.innerHTML;
      };
    }
    function tC(e) {
      return e.nodeType === lo ? e : e.ownerDocument;
    }
    function Ck() {
    }
    function wh(e) {
      e.onclick = Ck;
    }
    function Ek(e, t, a, l, f) {
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
            p === yh || p === qd || p === XS || (he.hasOwnProperty(p) ? y != null && (typeof y != "function" && Eh(p, y), p === "onScroll" && Dn("scroll", t)) : y != null && st(t, p, y, f));
        }
    }
    function wk(e, t, a, l) {
      for (var f = 0; f < t.length; f += 2) {
        var p = t[f], y = t[f + 1];
        p === Rs ? Wf(e, y) : p === Gd ? op(e, y) : p === Ts ? oc(e, y) : st(e, p, y, l);
      }
    }
    function xk(e, t, a, l) {
      var f, p = tC(a), y, b = l;
      if (b === Vc && (b = Uu(e)), b === Vc) {
        if (f = Aa(e, t), !f && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return b === Vc && !f && Object.prototype.toString.call(y) === "[object HTMLUnknownElement]" && !Object.prototype.hasOwnProperty.call(Ly, e) && (Ly[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), y;
    }
    function Tk(e, t) {
      return tC(t).createTextNode(e);
    }
    function Rk(e, t, a, l) {
      var f = Aa(t, a);
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
          nc(e, a), p = zu(e, a), Dn("invalid", e);
          break;
        case "textarea":
          $u(e, a), p = $l(e, a), Dn("invalid", e);
          break;
        default:
          p = a;
      }
      switch (lc(t, p), Ek(t, e, l, p, f), t) {
        case "input":
          Da(e), Za(e, a, !1);
          break;
        case "textarea":
          Da(e), Xr(e);
          break;
        case "option":
          qg(e, a);
          break;
        case "select":
          oo(e, a);
          break;
        default:
          typeof p.onClick == "function" && wh(e);
          break;
      }
    }
    function _k(e, t, a, l, f) {
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
          y = zu(e, a), b = zu(e, l), p = [];
          break;
        case "textarea":
          y = $l(e, a), b = $l(e, l), p = [];
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
            w === Gd || w === Ts || w === yh || w === qd || w === XS || (he.hasOwnProperty(w) ? p || (p = []) : (p = p || []).push(w, null));
      for (w in b) {
        var H = b[w], J = y != null ? y[w] : void 0;
        if (!(!b.hasOwnProperty(w) || H === J || H == null && J == null))
          if (w === Rs)
            if (H && Object.freeze(H), J) {
              for (O in J)
                J.hasOwnProperty(O) && (!H || !H.hasOwnProperty(O)) && (D || (D = {}), D[O] = "");
              for (O in H)
                H.hasOwnProperty(O) && J[O] !== H[O] && (D || (D = {}), D[O] = H[O]);
            } else
              D || (p || (p = []), p.push(w, D)), D = H;
          else if (w === Gd) {
            var fe = H ? H[bh] : void 0, _e = J ? J[bh] : void 0;
            fe != null && _e !== fe && (p = p || []).push(w, fe);
          } else
            w === Ts ? (typeof H == "string" || typeof H == "number") && (p = p || []).push(w, "" + H) : w === yh || w === qd || (he.hasOwnProperty(w) ? (H != null && (typeof H != "function" && Eh(w, H), w === "onScroll" && Dn("scroll", e)), !p && J !== H && (p = [])) : typeof H == "object" && H !== null && H.$$typeof === gn ? H.toString() : (p = p || []).push(w, H));
      }
      return D && (iy(D, b[Rs]), (p = p || []).push(Rs, D)), p;
    }
    function kk(e, t, a, l, f) {
      a === "input" && f.type === "radio" && f.name != null && Cn(e, f);
      var p = Aa(a, l), y = Aa(a, f);
      switch (wk(e, t, p, y), a) {
        case "input":
          ro(e, f);
          break;
        case "textarea":
          Uf(e, f);
          break;
        case "select":
          zf(e, f);
          break;
      }
    }
    function Mk(e) {
      {
        var t = e.toLowerCase();
        return uo.hasOwnProperty(t) && uo[t] || null;
      }
    }
    function Ok(e, t, a, l, f) {
      var p, y;
      switch (Yd = a[qd] === !0, p = Aa(t, a), Sh(t, a), t) {
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
          $u(e, a), Dn("invalid", e);
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
      for (var H in a)
        if (a.hasOwnProperty(H)) {
          var J = a[H];
          if (H === Ts)
            typeof J == "string" ? e.textContent !== J && (Yd || Ch(e.textContent, J), X = [Ts, J]) : typeof J == "number" && e.textContent !== "" + J && (Yd || Ch(e.textContent, J), X = [Ts, "" + J]);
          else if (he.hasOwnProperty(H))
            J != null && (typeof J != "function" && Eh(H, J), H === "onScroll" && Dn("scroll", e));
          else if (
            // Convince Flow we've calculated it (it's DEV-only in this method.)
            typeof p == "boolean"
          ) {
            var fe = void 0, _e = Qt(H);
            if (!Yd) {
              if (!(H === yh || H === qd || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              H === "value" || H === "checked" || H === "selected")) {
                if (H === Gd) {
                  var lt = e.innerHTML, Pt = J ? J[bh] : void 0;
                  if (Pt != null) {
                    var ht = eC(e, Pt);
                    ht !== lt && Qd(H, lt, ht);
                  }
                } else if (H === Rs) {
                  if (y.delete(H), JS) {
                    var Jt = mp(J);
                    fe = e.getAttribute("style"), Jt !== fe && Qd(H, fe, Jt);
                  }
                } else if (p)
                  y.delete(H.toLowerCase()), fe = rt(e, H, J), J !== fe && Qd(H, fe, J);
                else if (!Zt(H, _e, p) && !Wt(H, J, _e, p)) {
                  var Sn = !1;
                  if (_e !== null)
                    y.delete(_e.attributeName), fe = Mt(e, H, J, _e);
                  else {
                    var Z = l;
                    if (Z === Vc && (Z = Uu(t)), Z === Vc)
                      y.delete(H.toLowerCase());
                    else {
                      var ae = Mk(H);
                      ae !== null && ae !== H && (Sn = !0, y.delete(ae)), y.delete(H);
                    }
                    fe = rt(e, H, J);
                  }
                  J !== fe && !Sn && Qd(H, fe, J);
                }
              }
            }
          }
        }
      switch (y.size > 0 && !Yd && ZS(y), t) {
        case "input":
          Da(e), Za(e, a, !0);
          break;
        case "textarea":
          Da(e), Xr(e);
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
    function Nk(e, t) {
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
    function Dk(e, t, a) {
      switch (t) {
        case "input":
          Lu(e, a);
          return;
        case "textarea":
          Ul(e, a);
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
      var Ak = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], lC = [
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
      ], Lk = lC.concat(["button"]), Pk = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], uC = {
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
        return lC.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Lk.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Ak.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = l, t === "form" && (a.formTag = l), t === "a" && (a.aTagInScope = l), t === "button" && (a.buttonTagInScope = l), t === "nobr" && (a.nobrTagInScope = l), t === "p" && (a.pTagInButtonScope = l), t === "li" && (a.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = l), a;
      };
      var Ik = function(e, t) {
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
            return Pk.indexOf(t) === -1;
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
      }, zk = function(e, t) {
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
        var p = Ik(e, f) ? null : l, y = p ? null : zk(e, a), b = p || y;
        if (b) {
          var w = b.tag, O = !!p + "|" + e + "|" + w;
          if (!sC[O]) {
            sC[O] = !0;
            var D = e, X = "";
            if (e === "#text" ? /\S/.test(t) ? D = "Text nodes" : (D = "Whitespace text nodes", X = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : D = "<" + e + ">", p) {
              var H = "";
              w === "table" && e === "tr" && (H += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", D, w, X, H);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", D, w);
          }
        }
      };
    }
    var Wc;
    Wc = "suppressHydrationWarning";
    var cC = "$", fC = "/$", Py = "$?", Iy = "$!", $k = "style", zy = null, $y = null;
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
    function Uk(e) {
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
          var p = l === Ur ? e.parentNode : e, y = p.namespaceURI || null;
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
    function jk(e, t, a) {
      {
        var l = e, f = Go(l.namespace, t), p = Jd(l.ancestorInfo, t);
        return {
          namespace: f,
          ancestorInfo: p
        };
      }
    }
    function d$(e) {
      return e;
    }
    function Hk(e) {
      zy = eh(), $y = Q();
      var t = null;
      return Nd(!1), t;
    }
    function Fk(e) {
      F($y), Nd(zy), zy = null, $y = null;
    }
    function Bk(e, t, a, l, f) {
      var p;
      {
        var y = l;
        if (Zd(e, null, y.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var b = "" + t.children, w = Jd(y.ancestorInfo, e);
          Zd(null, b, w);
        }
        p = y.namespace;
      }
      var O = xk(e, t, a, p);
      return Rh(f, O), Fy(O, t), O;
    }
    function Vk(e, t) {
      e.appendChild(t);
    }
    function Wk(e, t, a, l, f) {
      return Rk(e, t, a, l), dC(t, a);
    }
    function Kk(e, t, a, l, f, p) {
      {
        var y = p;
        if (typeof l.children != typeof a.children && (typeof l.children == "string" || typeof l.children == "number")) {
          var b = "" + l.children, w = Jd(y.ancestorInfo, t);
          Zd(null, b, w);
        }
      }
      return _k(e, t, a, l);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Gk(e, t, a, l) {
      {
        var f = a;
        Zd(null, e, f.ancestorInfo);
      }
      var p = Tk(e, t);
      return Rh(l, p), p;
    }
    var vC = typeof setTimeout == "function" ? setTimeout : void 0, qk = typeof clearTimeout == "function" ? clearTimeout : void 0, jy = -1;
    function Yk(e, t, a, l) {
      dC(t, a) && e.focus();
    }
    function Qk(e, t, a, l, f, p) {
      Fy(e, f), kk(e, t, a, l, f);
    }
    function pC(e) {
      oc(e, "");
    }
    function Xk(e, t, a) {
      e.nodeValue = a;
    }
    function Zk(e, t) {
      e.appendChild(t);
    }
    function Jk(e, t) {
      var a;
      e.nodeType === Ur ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var l = e._reactRootContainer;
      l == null && a.onclick === null && wh(a);
    }
    function eM(e, t, a) {
      e.insertBefore(t, a);
    }
    function tM(e, t, a) {
      e.nodeType === Ur ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function nM(e, t) {
      e.removeChild(t);
    }
    function rM(e, t) {
      e.nodeType === Ur ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function aM(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function iM(e) {
      e.nodeValue = "";
    }
    function oM(e, t) {
      e = e;
      var a = t[$k], l = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Hf("display", l);
    }
    function lM(e, t) {
      e.nodeValue = t;
    }
    function Hy(e) {
      if (e.nodeType === ga)
        e.textContent = "";
      else if (e.nodeType === lo) {
        var t = e.body;
        t != null && (t.textContent = "");
      }
    }
    function uM(e, t, a) {
      return e.nodeType !== ga || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function sM(e, t) {
      return t === "" || e.nodeType !== _i ? null : e;
    }
    function cM(e) {
      return e.data === Py;
    }
    function fM(e) {
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
    function dM(e, t, a, l, f, p) {
      Rh(p, e), Fy(e, a);
      var y;
      {
        var b = f;
        y = b.namespace;
      }
      return Ok(e, t, a, y);
    }
    function vM(e, t, a) {
      return Rh(a, e), Nk(e, t);
    }
    function pM(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ur) {
          var l = t.data;
          if (l === fC) {
            if (a === 0)
              return xh(t);
            a--;
          } else
            (l === cC || l === Iy || l === Py) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function gC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ur) {
          var l = t.data;
          if (l === cC || l === Iy || l === Py) {
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
    function hM(e) {
      dd(e);
    }
    function mM(e) {
      dd(e);
    }
    function gM(e, t, a) {
      nC(t, a);
    }
    function yM(e, t, a, l, f) {
      t[Wc] !== !0 && nC(l, f);
    }
    function bM(e, t) {
      t.nodeType === ga ? rC(e, t) : t.nodeType === Ur || aC(e, t);
    }
    function SM(e, t, a, l) {
      t[Wc] !== !0 && (l.nodeType === ga ? rC(a, l) : l.nodeType === Ur || aC(a, l));
    }
    function CM(e, t, a) {
      iC(e, t);
    }
    function EM(e, t) {
      oC(e, t);
    }
    function wM(e, t, a, l, f) {
      t[Wc] !== !0 && iC(a, l);
    }
    function xM(e, t, a, l) {
      t[Wc] !== !0 && oC(a, l);
    }
    function TM(e, t, a) {
      t[Wc];
    }
    var RM = 0;
    function _M(e) {
      var t = "r:" + (RM++).toString(36);
      return {
        toString: function() {
          return e(), t;
        },
        valueOf: function() {
          return e(), t;
        }
      };
    }
    function kM(e) {
      return e !== null && typeof e == "object" && e.$$typeof === gn;
    }
    function MM(e) {
      return {
        $$typeof: gn,
        toString: e,
        valueOf: e
      };
    }
    function OM(e) {
      VS(e);
    }
    var Th = Math.random().toString(36).slice(2), ev = "__reactFiber$" + Th, yC = "__reactProps$" + Th, tv = "__reactContainer$" + Th, bC = "__reactEvents$" + Th;
    function Rh(e, t) {
      t[ev] = e;
    }
    function NM(e, t) {
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
      return t && (t.tag === L || t.tag === z || t.tag === U || t.tag === _) ? t : null;
    }
    function Kc(e) {
      if (e.tag === L || e.tag === z)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function kh(e) {
      return e[yC] || null;
    }
    function Fy(e, t) {
      e[yC] = t;
    }
    function CC(e) {
      var t = e[bC];
      return t === void 0 && (t = e[bC] = /* @__PURE__ */ new Set()), t;
    }
    var EC = {}, wC = d.ReactDebugCurrentFrame;
    function Mh(e) {
      if (e) {
        var t = e._owner, a = In(e.type, e._source, t ? t.type : null);
        wC.setExtraStackFrame(a);
      } else
        wC.setExtraStackFrame(null);
    }
    function Hi(e, t, a, l, f) {
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
    var Vy;
    Vy = {};
    var $a = {};
    Object.freeze($a);
    var yl = mu($a), Do = mu(!1), Wy = $a;
    function Gc(e, t, a) {
      return a && Ao(t) ? Wy : yl.current;
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
          return $a;
        var f = e.stateNode;
        if (f && f.__reactInternalMemoizedUnmaskedChildContext === t)
          return f.__reactInternalMemoizedMaskedChildContext;
        var p = {};
        for (var y in l)
          p[y] = t[y];
        {
          var b = Re(a) || "Unknown";
          Hi(l, p, "context", b);
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
    function Ky(e) {
      Jr(Do, e), Jr(yl, e);
    }
    function TC(e, t, a) {
      {
        if (yl.current !== $a)
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
            Vy[p] || (Vy[p] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", p, p));
          }
          return a;
        }
        var y = l.getChildContext();
        for (var b in y)
          if (!(b in f))
            throw Error((Re(t) || "Unknown") + '.getChildContext(): key "' + b + '" is not defined in childContextTypes.');
        {
          var w = Re(t) || "Unknown";
          Hi(f, y, "child context", w);
        }
        return o({}, a, y);
      }
    }
    function Ah(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || $a;
        return Wy = yl.current, ea(yl, a, e), ea(Do, Do.current, e), !0;
      }
    }
    function _C(e, t, a) {
      {
        var l = e.stateNode;
        if (!l)
          throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var f = RC(e, t, Wy);
          l.__reactInternalMemoizedMergedChildContext = f, Jr(Do, e), Jr(yl, e), ea(yl, f, e), ea(Do, a, e);
        } else
          Jr(Do, e), ea(Do, a, e);
      }
    }
    function DM(e) {
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
    var Gy = 0, kC = 1, MC = 2, Lh = null, Lo = null, Yc = !1, AM = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined";
    function LM(e) {
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
    function PM(e, t) {
      if (Lo && typeof Lo.onScheduleFiberRoot == "function")
        try {
          Lo.onScheduleFiberRoot(Lh, e, t);
        } catch (a) {
          Yc || (Yc = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function IM(e, t) {
      if (Lo && typeof Lo.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & nn) === nn;
          ke && Lo.onCommitFiberRoot(Lh, e, t, a);
        } catch (l) {
          Yc || (Yc = !0, h("React instrumentation encountered an error: %s", l));
        }
    }
    function zM(e) {
      if (Lo && typeof Lo.onCommitFiberUnmount == "function")
        try {
          Lo.onCommitFiberUnmount(Lh, e);
        } catch (t) {
          Yc || (Yc = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    var $M = s.unstable_runWithPriority, qy = s.unstable_scheduleCallback, OC = s.unstable_cancelCallback, UM = s.unstable_shouldYield, NC = s.unstable_requestPaint, Yy = s.unstable_now, jM = s.unstable_getCurrentPriorityLevel, Ph = s.unstable_ImmediatePriority, DC = s.unstable_UserBlockingPriority, AC = s.unstable_NormalPriority, LC = s.unstable_LowPriority, PC = s.unstable_IdlePriority;
    if (!(c.__interactionsRef != null && c.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
    var IC = {}, fi = 99, ks = 98, bl = 97, zC = 96, $C = 95, Qy = 90, HM = UM, FM = (
      // Fall back gracefully if we're running an older version of Scheduler.
      NC !== void 0 ? NC : function() {
      }
    ), Sl = null, Ih = null, Xy = !1, UC = Yy(), ta = UC < 1e4 ? Yy : function() {
      return Yy() - UC;
    };
    function Qc() {
      switch (jM()) {
        case Ph:
          return fi;
        case DC:
          return ks;
        case AC:
          return bl;
        case LC:
          return zC;
        case PC:
          return $C;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function jC(e) {
      switch (e) {
        case fi:
          return Ph;
        case ks:
          return DC;
        case bl:
          return AC;
        case zC:
          return LC;
        case $C:
          return PC;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function Ms(e, t) {
      var a = jC(e);
      return $M(a, t);
    }
    function gu(e, t, a) {
      var l = jC(e);
      return qy(l, t, a);
    }
    function BM(e) {
      return Sl === null ? (Sl = [e], Ih = qy(Ph, FC)) : Sl.push(e), IC;
    }
    function HC(e) {
      e !== IC && OC(e);
    }
    function Po() {
      if (Ih !== null) {
        var e = Ih;
        Ih = null, OC(e);
      }
      FC();
    }
    function FC() {
      if (!Xy && Sl !== null) {
        Xy = !0;
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
          throw Sl !== null && (Sl = Sl.slice(e + 1)), qy(Ph, Po), l;
        } finally {
          Xy = !1;
        }
      }
    }
    var BC = "17.0.2", Un = 0, Qn = 1, Ta = 2, Os = 4, Ua = 8, VM = 16, WM = d.ReactCurrentBatchConfig, KM = 0;
    function GM() {
      return WM.transition;
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
      var qM = function(e) {
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
        nv.length > 0 && (nv.forEach(function(H) {
          e.add(Re(H.type) || "Component"), Ds.add(H.type);
        }), nv = []);
        var t = /* @__PURE__ */ new Set();
        rv.length > 0 && (rv.forEach(function(H) {
          t.add(Re(H.type) || "Component"), Ds.add(H.type);
        }), rv = []);
        var a = /* @__PURE__ */ new Set();
        av.length > 0 && (av.forEach(function(H) {
          a.add(Re(H.type) || "Component"), Ds.add(H.type);
        }), av = []);
        var l = /* @__PURE__ */ new Set();
        iv.length > 0 && (iv.forEach(function(H) {
          l.add(Re(H.type) || "Component"), Ds.add(H.type);
        }), iv = []);
        var f = /* @__PURE__ */ new Set();
        ov.length > 0 && (ov.forEach(function(H) {
          f.add(Re(H.type) || "Component"), Ds.add(H.type);
        }), ov = []);
        var p = /* @__PURE__ */ new Set();
        if (lv.length > 0 && (lv.forEach(function(H) {
          p.add(Re(H.type) || "Component"), Ds.add(H.type);
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
      var zh = /* @__PURE__ */ new Map(), VC = /* @__PURE__ */ new Set();
      Fi.recordLegacyContextWarning = function(e, t) {
        var a = qM(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!VC.has(e.type)) {
          var l = zh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (l === void 0 && (l = [], zh.set(a, l)), l.push(e));
        }
      }, Fi.flushLegacyContextWarning = function() {
        zh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(p) {
              l.add(Re(p.type) || "Component"), VC.add(p.type);
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
        nv = [], rv = [], av = [], iv = [], ov = [], lv = [], zh = /* @__PURE__ */ new Map();
      };
    }
    function Bi(e, t) {
      if (e && e.defaultProps) {
        var a = o({}, t), l = e.defaultProps;
        for (var f in l)
          a[f] === void 0 && (a[f] = l[f]);
        return a;
      }
      return t;
    }
    var $h = 1073741823, Zy = mu(null), Jy;
    Jy = {};
    var Uh = null, Xc = null, jh = null, Hh = !1;
    function Fh() {
      Uh = null, Xc = null, jh = null, Hh = !1;
    }
    function WC() {
      Hh = !0;
    }
    function KC() {
      Hh = !1;
    }
    function GC(e, t) {
      var a = e.type._context;
      ea(Zy, a._currentValue, e), a._currentValue = t, a._currentRenderer !== void 0 && a._currentRenderer !== null && a._currentRenderer !== Jy && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), a._currentRenderer = Jy;
    }
    function e0(e) {
      var t = Zy.current;
      Jr(Zy, e);
      var a = e.type._context;
      a._currentValue = t;
    }
    function YM(e, t, a) {
      if (i(a, t))
        return 0;
      var l = typeof e._calculateChangedBits == "function" ? e._calculateChangedBits(a, t) : $h;
      return (l & $h) !== l && h("calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", l), l | 0;
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
    function QM(e, t, a, l) {
      var f = e.child;
      for (f !== null && (f.return = e); f !== null; ) {
        var p = void 0, y = f.dependencies;
        if (y !== null) {
          p = f.child;
          for (var b = y.firstContext; b !== null; ) {
            if (b.context === t && b.observedBits & a) {
              if (f.tag === E) {
                var w = yu(kn, dr(l));
                w.tag = Bh, bu(f, w);
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
      Uh = e, Xc = null, jh = null;
      var a = e.dependencies;
      if (a !== null) {
        var l = a.firstContext;
        l !== null && (wr(a.lanes, t) && ub(), a.firstContext = null);
      }
    }
    function pr(e, t) {
      if (Hh && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), jh !== e) {
        if (!(t === !1 || t === 0)) {
          var a;
          typeof t != "number" || t === $h ? (jh = e, a = $h) : a = t;
          var l = {
            context: e,
            observedBits: a,
            next: null
          };
          if (Xc === null) {
            if (Uh === null)
              throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            Xc = l, Uh.dependencies = {
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
    var YC = 0, QC = 1, Bh = 2, t0 = 3, Vh = !1, n0, Wh;
    n0 = !1, Wh = null;
    function r0(e) {
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
        f === null ? t.next = t : (t.next = f.next, f.next = t), l.pending = t, Wh === l && !n0 && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), n0 = !0);
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
    function XM(e, t, a, l, f, p) {
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
        case t0:
          e.flags = e.flags & ~La | nn;
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
        case Bh:
          return Vh = !0, l;
      }
      return l;
    }
    function uv(e, t, a, l) {
      var f = e.updateQueue;
      Vh = !1, Wh = f.shared;
      var p = f.firstBaseUpdate, y = f.lastBaseUpdate, b = f.shared.pending;
      if (b !== null) {
        f.shared.pending = null;
        var w = b, O = w.next;
        w.next = null, y === null ? p = O : y.next = O, y = w;
        var D = e.alternate;
        if (D !== null) {
          var X = D.updateQueue, H = X.lastBaseUpdate;
          H !== y && (H === null ? X.firstBaseUpdate = O : H.next = O, X.lastBaseUpdate = w);
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
            J = XM(e, f, ht, J, t, a);
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
        Pt === null && (_e = J), f.baseState = _e, f.firstBaseUpdate = lt, f.lastBaseUpdate = Pt, Ab(fe), e.lanes = fe, e.memoizedState = J;
      }
      Wh = null;
    }
    function ZM(e, t) {
      if (typeof e != "function")
        throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
      e.call(t);
    }
    function JC() {
      Vh = !1;
    }
    function Kh() {
      return Vh;
    }
    function eE(e, t, a) {
      var l = t.effects;
      if (t.effects = null, l !== null)
        for (var f = 0; f < l.length; f++) {
          var p = l[f], y = p.callback;
          y !== null && (p.callback = null, ZM(y, a));
        }
    }
    var a0 = {}, JM = Array.isArray, tE = new r.Component().refs, i0, o0, l0, u0, s0, nE, Gh, c0, f0, d0;
    {
      i0 = /* @__PURE__ */ new Set(), o0 = /* @__PURE__ */ new Set(), l0 = /* @__PURE__ */ new Set(), u0 = /* @__PURE__ */ new Set(), c0 = /* @__PURE__ */ new Set(), s0 = /* @__PURE__ */ new Set(), f0 = /* @__PURE__ */ new Set(), d0 = /* @__PURE__ */ new Set();
      var rE = /* @__PURE__ */ new Set();
      Gh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          rE.has(a) || (rE.add(a), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, nE = function(e, t) {
        if (t === void 0) {
          var a = Re(e) || "Component";
          s0.has(a) || (s0.add(a), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(a0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(a0);
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
    var v0 = {
      isMounted: Ip,
      enqueueSetState: function(e, t, a) {
        var l = Oi(e), f = Ha(), p = wu(l), y = yu(f, p);
        y.payload = t, a != null && (Gh(a, "setState"), y.callback = a), bu(l, y), ra(l, p, f);
      },
      enqueueReplaceState: function(e, t, a) {
        var l = Oi(e), f = Ha(), p = wu(l), y = yu(f, p);
        y.tag = QC, y.payload = t, a != null && (Gh(a, "replaceState"), y.callback = a), bu(l, y), ra(l, p, f);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Oi(e), l = Ha(), f = wu(a), p = yu(l, f);
        p.tag = Bh, t != null && (Gh(t, "forceUpdate"), p.callback = t), bu(a, p), ra(a, f, l);
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
    function eO(e, t, a) {
      var l = e.stateNode;
      {
        var f = Re(t) || "Component", p = l.render;
        p || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", f) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", f)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", f), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", f), l.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", f), l.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", f), l.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", f), t.contextType && t.contextTypes && !f0.has(t) && (f0.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", f)), typeof l.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", f), t.prototype && t.prototype.isPureReactComponent && typeof l.shouldComponentUpdate != "undefined" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Re(t) || "A pure component"), typeof l.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", f), typeof l.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", f), typeof l.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", f), typeof l.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", f);
        var y = l.props !== a;
        l.props !== void 0 && y && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", f, f), l.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", f, f), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !l0.has(t) && (l0.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Re(t))), typeof l.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof l.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", f);
        var b = l.state;
        b && (typeof b != "object" || JM(b)) && h("%s.state: must be set to an object or null", f), typeof l.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", f);
      }
    }
    function iE(e, t) {
      t.updater = v0, e.stateNode = t, nd(t, e), t._reactInternalInstance = a0;
    }
    function oE(e, t, a) {
      var l = !1, f = $a, p = $a, y = t.contextType;
      if ("contextType" in t) {
        var b = (
          // Allow null for conditional declaration
          y === null || y !== void 0 && y.$$typeof === Ht && y._context === void 0
        );
        if (!b && !d0.has(t)) {
          d0.add(t);
          var w = "";
          y === void 0 ? w = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof y != "object" ? w = " However, it is set to a " + typeof y + "." : y.$$typeof === dn ? w = " Did you accidentally pass the Context.Provider instead?" : y._context !== void 0 ? w = " Did you accidentally pass the Context.Consumer instead?" : w = " However, it is set to an object with keys {" + Object.keys(y).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Re(t) || "Component", w);
        }
      }
      if (typeof y == "object" && y !== null)
        p = pr(y);
      else {
        f = Gc(e, t, !0);
        var O = t.contextTypes;
        l = O != null, p = l ? qc(e, f) : $a;
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
          var H = Re(t) || "Component";
          o0.has(H) || (o0.add(H), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", H, D.state === null ? "null" : "undefined", H));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof D.getSnapshotBeforeUpdate == "function") {
          var J = null, fe = null, _e = null;
          if (typeof D.componentWillMount == "function" && D.componentWillMount.__suppressDeprecationWarning !== !0 ? J = "componentWillMount" : typeof D.UNSAFE_componentWillMount == "function" && (J = "UNSAFE_componentWillMount"), typeof D.componentWillReceiveProps == "function" && D.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? fe = "componentWillReceiveProps" : typeof D.UNSAFE_componentWillReceiveProps == "function" && (fe = "UNSAFE_componentWillReceiveProps"), typeof D.componentWillUpdate == "function" && D.componentWillUpdate.__suppressDeprecationWarning !== !0 ? _e = "componentWillUpdate" : typeof D.UNSAFE_componentWillUpdate == "function" && (_e = "UNSAFE_componentWillUpdate"), J !== null || fe !== null || _e !== null) {
            var lt = Re(t) || "Component", Pt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            u0.has(lt) || (u0.add(lt), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

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
    function tO(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Re(e.type) || "Component"), v0.enqueueReplaceState(t, t.state, null));
    }
    function lE(e, t, a, l) {
      var f = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== f) {
        {
          var p = Re(e.type) || "Component";
          i0.has(p) || (i0.add(p), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", p));
        }
        v0.enqueueReplaceState(t, t.state, null);
      }
    }
    function p0(e, t, a, l) {
      eO(e, t, a);
      var f = e.stateNode;
      f.props = a, f.state = e.memoizedState, f.refs = tE, r0(e);
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
          c0.has(b) || (c0.add(b), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", b));
        }
        e.mode & Qn && Fi.recordLegacyContextWarning(e, f), Fi.recordUnsafeLifecycleWarnings(e, f);
      }
      uv(e, a, f, l), f.state = e.memoizedState;
      var w = t.getDerivedStateFromProps;
      typeof w == "function" && (qh(e, t, w, a), f.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof f.getSnapshotBeforeUpdate != "function" && (typeof f.UNSAFE_componentWillMount == "function" || typeof f.componentWillMount == "function") && (tO(e, f), uv(e, a, f, l), f.state = e.memoizedState), typeof f.componentDidMount == "function" && (e.flags |= vt);
    }
    function nO(e, t, a, l) {
      var f = e.stateNode, p = e.memoizedProps;
      f.props = p;
      var y = f.context, b = t.contextType, w = $a;
      if (typeof b == "object" && b !== null)
        w = pr(b);
      else {
        var O = Gc(e, t, !0);
        w = qc(e, O);
      }
      var D = t.getDerivedStateFromProps, X = typeof D == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      !X && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (p !== a || y !== w) && lE(e, f, a, w), JC();
      var H = e.memoizedState, J = f.state = H;
      if (uv(e, a, f, l), J = e.memoizedState, p === a && H === J && !Nh() && !Kh())
        return typeof f.componentDidMount == "function" && (e.flags |= vt), !1;
      typeof D == "function" && (qh(e, t, D, a), J = e.memoizedState);
      var fe = Kh() || aE(e, t, p, a, H, J, w);
      return fe ? (!X && (typeof f.UNSAFE_componentWillMount == "function" || typeof f.componentWillMount == "function") && (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (e.flags |= vt)) : (typeof f.componentDidMount == "function" && (e.flags |= vt), e.memoizedProps = a, e.memoizedState = J), f.props = a, f.state = J, f.context = w, fe;
    }
    function rO(e, t, a, l, f) {
      var p = t.stateNode;
      XC(e, t);
      var y = t.memoizedProps, b = t.type === t.elementType ? y : Bi(t.type, y);
      p.props = b;
      var w = t.pendingProps, O = p.context, D = a.contextType, X = $a;
      if (typeof D == "object" && D !== null)
        X = pr(D);
      else {
        var H = Gc(t, a, !0);
        X = qc(t, H);
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
    var h0, m0, g0, y0, b0, uE = function(e, t) {
    };
    h0 = !1, m0 = !1, g0 = {}, y0 = {}, b0 = {}, uE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Re(t.type) || "Component";
        y0[a] || (y0[a] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    var Yh = Array.isArray;
    function sv(e, t, a) {
      var l = a.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & Qn || Ie) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var f = Re(e.type) || "Component";
          g0[f] || (h('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), g0[f] = !0);
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
        if (b0[t])
          return;
        b0[t] = !0, h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
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
        var K = Bs(Z, ae);
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
        if (ae === null || ae.tag !== z) {
          var De = Gb(K, Z.mode, be);
          return De.return = Z, De;
        } else {
          var Ye = f(ae, K);
          return Ye.return = Z, Ye;
        }
      }
      function w(Z, ae, K, be) {
        if (ae !== null && (ae.elementType === K.type || // Keep this check inline so it only runs on the false path:
        Bw(ae, K))) {
          var De = f(ae, K.props);
          return De.ref = sv(Z, ae, K), De.return = Z, De._debugSource = K._source, De._debugOwner = K._owner, De;
        }
        var Ye = Wb(K, Z.mode, be);
        return Ye.ref = sv(Z, ae, K), Ye.return = Z, Ye;
      }
      function O(Z, ae, K, be) {
        if (ae === null || ae.tag !== N || ae.stateNode.containerInfo !== K.containerInfo || ae.stateNode.implementation !== K.implementation) {
          var De = qb(K, Z.mode, be);
          return De.return = Z, De;
        } else {
          var Ye = f(ae, K.children || []);
          return Ye.return = Z, Ye;
        }
      }
      function D(Z, ae, K, be, De) {
        if (ae === null || ae.tag !== B) {
          var Ye = Vs(K, Z.mode, be, De);
          return Ye.return = Z, Ye;
        } else {
          var Yt = f(ae, K);
          return Yt.return = Z, Yt;
        }
      }
      function X(Z, ae, K) {
        if (typeof ae == "string" || typeof ae == "number") {
          var be = Gb("" + ae, Z.mode, K);
          return be.return = Z, be;
        }
        if (typeof ae == "object" && ae !== null) {
          switch (ae.$$typeof) {
            case on: {
              var De = Wb(ae, Z.mode, K);
              return De.ref = sv(Z, null, ae), De.return = Z, De;
            }
            case Ot: {
              var Ye = qb(ae, Z.mode, K);
              return Ye.return = Z, Ye;
            }
          }
          if (Yh(ae) || ln(ae)) {
            var Yt = Vs(ae, Z.mode, K, null);
            return Yt.return = Z, Yt;
          }
          Qh(Z, ae);
        }
        return typeof ae == "function" && Xh(Z), null;
      }
      function H(Z, ae, K, be) {
        var De = ae !== null ? ae.key : null;
        if (typeof K == "string" || typeof K == "number")
          return De !== null ? null : b(Z, ae, "" + K, be);
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case on:
              return K.key === De ? K.type === jt ? D(Z, ae, K.props.children, be, De) : w(Z, ae, K, be) : null;
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
              return be.type === jt ? D(ae, Yt, be.props.children, De, be.key) : w(ae, Yt, be, De);
            }
            case Ot: {
              var Mn = Z.get(be.key === null ? K : be.key) || null;
              return O(ae, Mn, be, De);
            }
          }
          if (Yh(be) || ln(be)) {
            var jn = Z.get(K) || null;
            return D(ae, jn, be, De, null);
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
        for (var Mn = null, jn = null, sn = ae, hr = 0, rn = 0, Hn = null; sn !== null && rn < K.length; rn++) {
          sn.index > rn ? (Hn = sn, sn = null) : Hn = sn.sibling;
          var Ar = H(Z, sn, K[rn], be);
          if (Ar === null) {
            sn === null && (sn = Hn);
            break;
          }
          e && sn && Ar.alternate === null && t(Z, sn), hr = p(Ar, hr, rn), jn === null ? Mn = Ar : jn.sibling = Ar, jn = Ar, sn = Hn;
        }
        if (rn === K.length)
          return a(Z, sn), Mn;
        if (sn === null) {
          for (; rn < K.length; rn++) {
            var nr = X(Z, K[rn], be);
            nr !== null && (hr = p(nr, hr, rn), jn === null ? Mn = nr : jn.sibling = nr, jn = nr);
          }
          return Mn;
        }
        for (var Ho = l(Z, sn); rn < K.length; rn++) {
          var rr = J(Ho, Z, rn, K[rn], be);
          rr !== null && (e && rr.alternate !== null && Ho.delete(rr.key === null ? rn : rr.key), hr = p(rr, hr, rn), jn === null ? Mn = rr : jn.sibling = rr, jn = rr);
        }
        return e && Ho.forEach(function(Fo) {
          return t(Z, Fo);
        }), Mn;
      }
      function lt(Z, ae, K, be) {
        var De = ln(K);
        if (typeof De != "function")
          throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          K[Symbol.toStringTag] === "Generator" && (m0 || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), m0 = !0), K.entries === De && (h0 || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), h0 = !0);
          var Ye = De.call(K);
          if (Ye)
            for (var Yt = null, Mn = Ye.next(); !Mn.done; Mn = Ye.next()) {
              var jn = Mn.value;
              Yt = fe(jn, Yt, Z);
            }
        }
        var sn = De.call(K);
        if (sn == null)
          throw Error("An iterable object provided no iterator.");
        for (var hr = null, rn = null, Hn = ae, Ar = 0, nr = 0, Ho = null, rr = sn.next(); Hn !== null && !rr.done; nr++, rr = sn.next()) {
          Hn.index > nr ? (Ho = Hn, Hn = null) : Ho = Hn.sibling;
          var Fo = H(Z, Hn, rr.value, be);
          if (Fo === null) {
            Hn === null && (Hn = Ho);
            break;
          }
          e && Hn && Fo.alternate === null && t(Z, Hn), Ar = p(Fo, Ar, nr), rn === null ? hr = Fo : rn.sibling = Fo, rn = Fo, Hn = Ho;
        }
        if (rr.done)
          return a(Z, Hn), hr;
        if (Hn === null) {
          for (; !rr.done; nr++, rr = sn.next()) {
            var Ws = X(Z, rr.value, be);
            Ws !== null && (Ar = p(Ws, Ar, nr), rn === null ? hr = Ws : rn.sibling = Ws, rn = Ws);
          }
          return hr;
        }
        for (var t1 = l(Z, Hn); !rr.done; nr++, rr = sn.next()) {
          var Ru = J(t1, Z, nr, rr.value, be);
          Ru !== null && (e && Ru.alternate !== null && t1.delete(Ru.key === null ? nr : Ru.key), Ar = p(Ru, Ar, nr), rn === null ? hr = Ru : rn.sibling = Ru, rn = Ru);
        }
        return e && t1.forEach(function(nD) {
          return t(Z, nD);
        }), hr;
      }
      function Pt(Z, ae, K, be) {
        if (ae !== null && ae.tag === z) {
          a(Z, ae.sibling);
          var De = f(ae, K);
          return De.return = Z, De;
        }
        a(Z, ae);
        var Ye = Gb(K, Z.mode, be);
        return Ye.return = Z, Ye;
      }
      function ht(Z, ae, K, be) {
        for (var De = K.key, Ye = ae; Ye !== null; ) {
          if (Ye.key === De) {
            switch (Ye.tag) {
              case B: {
                if (K.type === jt) {
                  a(Z, Ye.sibling);
                  var Yt = f(Ye, K.props.children);
                  return Yt.return = Z, Yt._debugSource = K._source, Yt._debugOwner = K._owner, Yt;
                }
                break;
              }
              case se:
              default: {
                if (Ye.elementType === K.type || // Keep this check inline so it only runs on the false path:
                Bw(Ye, K)) {
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
        if (K.type === jt) {
          var jn = Vs(K.props.children, Z.mode, be, K.key);
          return jn.return = Z, jn;
        } else {
          var sn = Wb(K, Z.mode, be);
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
        var Mn = qb(K, Z.mode, be);
        return Mn.return = Z, Mn;
      }
      function Sn(Z, ae, K, be) {
        var De = typeof K == "object" && K !== null && K.type === jt && K.key === null;
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
            case I:
            case q:
              throw Error((Re(Z.type) || "Component") + "(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.");
          }
        return a(Z, ae);
      }
      return Sn;
    }
    var Zh = sE(!0), cE = sE(!1);
    function aO(e, t) {
      if (!(e === null || t.child === e.child))
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, l = Bs(a, a.pendingProps);
        for (t.child = l, l.return = t; a.sibling !== null; )
          a = a.sibling, l = l.sibling = Bs(a, a.pendingProps), l.return = t;
        l.sibling = null;
      }
    }
    function iO(e, t) {
      for (var a = e.child; a !== null; )
        yN(a, t), a = a.sibling;
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
    function S0(e, t) {
      ea(Jh, t, e), ea(fv, e, e), ea(Su, cv, e);
      var a = Uk(t);
      Jr(Su, e), ea(Su, a, e);
    }
    function Jc(e) {
      Jr(Su, e), Jr(fv, e), Jr(Jh, e);
    }
    function C0() {
      var e = em(Su.current);
      return e;
    }
    function dE(e) {
      em(Jh.current);
      var t = em(Su.current), a = jk(t, e.type);
      t !== a && (ea(fv, e, e), ea(Su, a, e));
    }
    function E0(e) {
      fv.current === e && (Jr(Su, e), Jr(fv, e));
    }
    var oO = 0, vE = 1, w0 = 1, dv = 2, Vi = mu(oO);
    function tm(e, t) {
      return (e & t) !== 0;
    }
    function vv(e) {
      return e & vE;
    }
    function x0(e, t) {
      return e & vE | t;
    }
    function lO(e, t) {
      return e | t;
    }
    function As(e, t) {
      ea(Vi, t, e);
    }
    function ef(e) {
      Jr(Vi, e);
    }
    function uO(e, t) {
      var a = e.memoizedState;
      if (a !== null)
        return a.dehydrated !== null;
      var l = e.memoizedProps;
      return l.fallback === void 0 ? !1 : l.unstable_avoidThisFallback !== !0 ? !0 : !t;
    }
    function nm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === U) {
          var a = t.memoizedState;
          if (a !== null) {
            var l = a.dehydrated;
            if (l === null || cM(l) || fM(l))
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
    var T0 = (
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
    function sO(e) {
      var t = e.stateNode.containerInfo;
      return Ls = mC(t), di = e, Cu = !0, !0;
    }
    function pE(e, t) {
      switch (e.tag) {
        case _:
          bM(e.stateNode.containerInfo, t);
          break;
        case L:
          SM(e.type, e.memoizedProps, e.stateNode, t);
          break;
      }
      var a = xN();
      a.stateNode = t, a.return = e, a.flags = Rn, e.lastEffect !== null ? (e.lastEffect.nextEffect = a, e.lastEffect = a) : e.firstEffect = e.lastEffect = a;
    }
    function hE(e, t) {
      switch (t.flags = t.flags & ~ba | Tt, e.tag) {
        case _: {
          var a = e.stateNode.containerInfo;
          switch (t.tag) {
            case L:
              var l = t.type;
              t.pendingProps, CM(a, l);
              break;
            case z:
              var f = t.pendingProps;
              EM(a, f);
              break;
          }
          break;
        }
        case L: {
          var p = e.type, y = e.memoizedProps, b = e.stateNode;
          switch (t.tag) {
            case L:
              var w = t.type;
              t.pendingProps, wM(p, y, b, w);
              break;
            case z:
              var O = t.pendingProps;
              xM(p, y, b, O);
              break;
            case U:
              TM(p, y);
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
          var l = uM(t, a);
          return l !== null ? (e.stateNode = l, !0) : !1;
        }
        case z: {
          var f = e.pendingProps, p = sM(t, f);
          return p !== null ? (e.stateNode = p, !0) : !1;
        }
        case U:
          return !1;
        default:
          return !1;
      }
    }
    function R0(e) {
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
    function cO(e, t, a) {
      var l = e.stateNode, f = dM(l, e.type, e.memoizedProps, t, a, e);
      return e.updateQueue = f, f !== null;
    }
    function fO(e) {
      var t = e.stateNode, a = e.memoizedProps, l = vM(t, a, e);
      if (l) {
        var f = di;
        if (f !== null)
          switch (f.tag) {
            case _: {
              var p = f.stateNode.containerInfo;
              gM(p, t, a);
              break;
            }
            case L: {
              var y = f.type, b = f.memoizedProps, w = f.stateNode;
              yM(y, b, w, t, a);
              break;
            }
          }
      }
      return l;
    }
    function dO(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return pM(a);
    }
    function gE(e) {
      for (var t = e.return; t !== null && t.tag !== L && t.tag !== _ && t.tag !== U; )
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
      return gE(e), e.tag === U ? Ls = dO(e) : Ls = di ? xh(e.stateNode) : null, !0;
    }
    function _0() {
      di = null, Ls = null, Cu = !1;
    }
    function k0() {
      return Cu;
    }
    var hv = [], M0;
    M0 = {};
    function vO(e) {
      hv.push(e);
    }
    function O0() {
      for (var e = 0; e < hv.length; e++) {
        var t = hv[e];
        t._workInProgressVersionPrimary = null;
      }
      hv.length = 0;
    }
    function pO(e) {
      return e._workInProgressVersionPrimary;
    }
    function yE(e, t) {
      e._workInProgressVersionPrimary = t, hv.push(e);
    }
    function hO(e) {
      e._currentPrimaryRenderer == null ? e._currentPrimaryRenderer = M0 : e._currentPrimaryRenderer !== M0 && h("Detected multiple renderers concurrently rendering the same mutable source. This is currently unsupported.");
    }
    var Pe = d.ReactCurrentDispatcher, vi = d.ReactCurrentBatchConfig, N0, D0;
    D0 = {}, N0 = /* @__PURE__ */ new Set();
    var mv = ue, En = null, na = null, Dr = null, am = !1, gv = !1, mO = 25, ve = null, pi = null, Eu = -1, A0 = !1;
    function bn() {
      {
        var e = ve;
        pi === null ? pi = [e] : pi.push(e);
      }
    }
    function Fe() {
      {
        var e = ve;
        pi !== null && (Eu++, pi[Eu] !== e && gO(e));
      }
    }
    function yv(e) {
      e != null && !Array.isArray(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ve, typeof e);
    }
    function gO(e) {
      {
        var t = Re(En.type);
        if (!N0.has(t) && (N0.add(t), pi !== null)) {
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
    function L0(e, t) {
      if (A0)
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
      mv = p, En = t, pi = e !== null ? e._debugHookTypes : null, Eu = -1, A0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ue, e !== null && e.memoizedState !== null ? Pe.current = AE : pi !== null ? Pe.current = DE : Pe.current = NE;
      var y = a(l, f);
      if (gv) {
        var b = 0;
        do {
          if (gv = !1, !(b < mO))
            throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          b += 1, A0 = !1, na = null, Dr = null, t.updateQueue = null, Eu = -1, Pe.current = LE, y = a(l, f);
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
    function yO() {
      return {
        lastEffect: null
      };
    }
    function im(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function P0(e, t, a) {
      var l = Ps(), f;
      a !== void 0 ? f = a(t) : f = t, l.memoizedState = l.baseState = f;
      var p = l.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: f
      }, y = p.dispatch = q0.bind(null, En, p);
      return [l.memoizedState, y];
    }
    function I0(e, t, a) {
      var l = Is(), f = l.queue;
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
        var D = y.next, X = p.baseState, H = null, J = null, fe = null, _e = D;
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
            fe === null ? (J = fe = Pt, H = X) : fe = fe.next = Pt, En.lanes = tn(En.lanes, lt), Ab(lt);
          }
          _e = _e.next;
        } while (_e !== null && _e !== D);
        fe === null ? H = X : fe.next = J, i(X, l.memoizedState) || ub(), l.memoizedState = X, l.baseState = H, l.baseQueue = fe, f.lastRenderedState = X;
      }
      var Sn = f.dispatch;
      return [l.memoizedState, Sn];
    }
    function z0(e, t, a) {
      var l = Is(), f = l.queue;
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
        i(b, l.memoizedState) || ub(), l.memoizedState = b, l.baseQueue === null && (l.baseState = b), f.lastRenderedState = b;
      }
      return [b, p];
    }
    function CE(e, t, a) {
      hO(t);
      var l = t._getVersion, f = l(t._source), p = !1, y = pO(t);
      if (y !== null ? p = y === f : (p = xo(mv, e.mutableReadLanes), p && yE(t, f)), p) {
        var b = a(t._source);
        return typeof b == "function" && h("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing."), b;
      } else
        throw vO(t), Error("Cannot read from mutable source during the current render without tearing. This is a bug in React. Please file an issue.");
    }
    function EE(e, t, a, l) {
      var f = E2();
      if (f === null)
        throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      var p = t._getVersion, y = p(t._source), b = Pe.current, w = b.useState(function() {
        return CE(f, t, a);
      }), O = w[0], D = w[1], X = O, H = Dr, J = e.memoizedState, fe = J.refs, _e = fe.getSnapshot, lt = J.source, Pt = J.subscribe, ht = En;
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
        Jt.dispatch = D = q0.bind(null, En, Jt), H.queue = Jt, H.baseQueue = null, X = CE(f, t, a), H.memoizedState = H.baseState = X;
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
      var l = Is();
      return EE(l, e, t, a);
    }
    function zs(e) {
      var t = Ps();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = t.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: im,
        lastRenderedState: e
      }, l = a.dispatch = q0.bind(null, En, a);
      return [t.memoizedState, l];
    }
    function bv(e) {
      return I0(im);
    }
    function Sv(e) {
      return z0(im);
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
        p = yO(), En.updateQueue = p, p.lastEffect = f.next = f;
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
      var t = Is();
      return t.memoizedState;
    }
    function U0(e, t, a, l) {
      var f = Ps(), p = l === void 0 ? null : l;
      En.flags |= e, f.memoizedState = lm(tf | t, a, void 0, p);
    }
    function j0(e, t, a, l) {
      var f = Is(), p = l === void 0 ? null : l, y = void 0;
      if (na !== null) {
        var b = na.memoizedState;
        if (y = b.destroy, p !== null) {
          var w = b.deps;
          if (L0(p, w)) {
            lm(t, a, y, p);
            return;
          }
        }
      }
      En.flags |= e, f.memoizedState = lm(tf | t, a, y, p);
    }
    function sm(e, t) {
      return typeof jest != "undefined" && zw(En), U0(vt | ql, pv, e, t);
    }
    function of(e, t) {
      return typeof jest != "undefined" && zw(En), j0(vt | ql, pv, e, t);
    }
    function H0(e, t) {
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
    function F0(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return U0(vt, nf, wE.bind(null, t, e), l);
    }
    function fm(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return j0(vt, nf, wE.bind(null, t, e), l);
    }
    function bO(e, t) {
    }
    var dm = bO;
    function B0(e, t) {
      var a = Ps(), l = t === void 0 ? null : t;
      return a.memoizedState = [e, l], e;
    }
    function vm(e, t) {
      var a = Is(), l = t === void 0 ? null : t, f = a.memoizedState;
      if (f !== null && l !== null) {
        var p = f[1];
        if (L0(l, p))
          return f[0];
      }
      return a.memoizedState = [e, l], e;
    }
    function V0(e, t) {
      var a = Ps(), l = t === void 0 ? null : t, f = e();
      return a.memoizedState = [f, l], f;
    }
    function pm(e, t) {
      var a = Is(), l = t === void 0 ? null : t, f = a.memoizedState;
      if (f !== null && l !== null) {
        var p = f[1];
        if (L0(l, p))
          return f[0];
      }
      var y = e();
      return a.memoizedState = [y, l], y;
    }
    function W0(e) {
      var t = zs(e), a = t[0], l = t[1];
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
    function SO(e, t) {
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
    function K0() {
      var e = zs(!1), t = e[0], a = e[1], l = SO.bind(null, a);
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
    function CO() {
      return hm;
    }
    function kE(e) {
      {
        var t = Re(e.type) || "Unknown";
        wi() && !D0[t] && (h("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly."), D0[t] = !0);
      }
    }
    function G0() {
      var e = _M.bind(null, kE.bind(null, En));
      if (k0()) {
        var t = !1, a = En, l = function() {
          throw t || (t = !0, hm = !0, p(e()), hm = !1, kE(a)), Error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.");
        }, f = MM(l), p = zs(f)[1];
        return (En.mode & Ta) === Un && (En.flags |= vt | ql, lm(tf | pv, function() {
          p(e());
        }, void 0, null)), f;
      } else {
        var y = e();
        return zs(y), y;
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
    function q0(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var l = Ha(), f = wu(e), p = {
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
            } catch (H) {
            } finally {
              Pe.current = O;
            }
          }
        }
        typeof jest != "undefined" && (Iw(e), aN(e)), ra(e, f, l);
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
    }, NE = null, DE = null, AE = null, LE = null, Io = null, Wi = null, gm = null;
    {
      var Y0 = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, It = function() {
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
          return ve = "useImperativeHandle", bn(), yv(a), F0(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", bn(), yv(t), H0(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", bn(), yv(t);
          var a = Pe.current;
          Pe.current = Io;
          try {
            return V0(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", bn();
          var l = Pe.current;
          Pe.current = Io;
          try {
            return P0(e, t, a);
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
          Pe.current = Io;
          try {
            return zs(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", bn(), void 0;
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", bn(), W0(e);
        },
        useTransition: function() {
          return ve = "useTransition", bn(), K0();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", bn(), $0(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", bn(), G0();
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
          return ve = "useImperativeHandle", Fe(), F0(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", Fe(), H0(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", Fe();
          var a = Pe.current;
          Pe.current = Io;
          try {
            return V0(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", Fe();
          var l = Pe.current;
          Pe.current = Io;
          try {
            return P0(e, t, a);
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
          Pe.current = Io;
          try {
            return zs(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", Fe(), void 0;
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", Fe(), W0(e);
        },
        useTransition: function() {
          return ve = "useTransition", Fe(), K0();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", Fe(), $0(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", Fe(), G0();
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
            return z0(e, t, a);
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
      }, Io = {
        readContext: function(e, t) {
          return Y0(), pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", It(), bn(), B0(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", It(), bn(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", It(), bn(), sm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", It(), bn(), F0(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", It(), bn(), H0(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", It(), bn();
          var a = Pe.current;
          Pe.current = Io;
          try {
            return V0(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", It(), bn();
          var l = Pe.current;
          Pe.current = Io;
          try {
            return P0(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", It(), bn(), um(e);
        },
        useState: function(e) {
          ve = "useState", It(), bn();
          var t = Pe.current;
          Pe.current = Io;
          try {
            return zs(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", It(), bn(), void 0;
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", It(), bn(), W0(e);
        },
        useTransition: function() {
          return ve = "useTransition", It(), bn(), K0();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", It(), bn(), $0(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", It(), bn(), G0();
        },
        unstable_isNewReconciler: Ae
      }, Wi = {
        readContext: function(e, t) {
          return Y0(), pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", It(), Fe(), vm(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", It(), Fe(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", It(), Fe(), of(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", It(), Fe(), fm(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", It(), Fe(), cm(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", It(), Fe();
          var a = Pe.current;
          Pe.current = Wi;
          try {
            return pm(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", It(), Fe();
          var l = Pe.current;
          Pe.current = Wi;
          try {
            return I0(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", It(), Fe(), af();
        },
        useState: function(e) {
          ve = "useState", It(), Fe();
          var t = Pe.current;
          Pe.current = Wi;
          try {
            return bv(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", It(), Fe(), dm();
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", It(), Fe(), xE(e);
        },
        useTransition: function() {
          return ve = "useTransition", It(), Fe(), RE();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", It(), Fe(), om(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", It(), Fe(), ME();
        },
        unstable_isNewReconciler: Ae
      }, gm = {
        readContext: function(e, t) {
          return Y0(), pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", It(), Fe(), vm(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", It(), Fe(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", It(), Fe(), of(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", It(), Fe(), fm(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", It(), Fe(), cm(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", It(), Fe();
          var a = Pe.current;
          Pe.current = Wi;
          try {
            return pm(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", It(), Fe();
          var l = Pe.current;
          Pe.current = Wi;
          try {
            return z0(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", It(), Fe(), af();
        },
        useState: function(e) {
          ve = "useState", It(), Fe();
          var t = Pe.current;
          Pe.current = Wi;
          try {
            return Sv(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", It(), Fe(), dm();
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", It(), Fe(), TE(e);
        },
        useTransition: function() {
          return ve = "useTransition", It(), Fe(), _E();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", It(), Fe(), om(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", It(), Fe(), OE();
        },
        unstable_isNewReconciler: Ae
      };
    }
    var ym = s.unstable_now, PE = 0, Cv = -1;
    function EO() {
      return PE;
    }
    function IE() {
      PE = ym();
    }
    function Q0(e) {
      Cv = ym(), e.actualStartTime < 0 && (e.actualStartTime = ym());
    }
    function zE(e) {
      Cv = -1;
    }
    function bm(e, t) {
      if (Cv >= 0) {
        var a = ym() - Cv;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Cv = -1;
      }
    }
    function X0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    var Ev = d.ReactCurrentOwner, zo = !1, Z0, wv, J0, eb, tb, $s, nb, Sm;
    Z0 = {}, wv = {}, J0 = {}, eb = {}, tb = {}, $s = !1, nb = {}, Sm = {};
    function _a(e, t, a, l) {
      e === null ? t.child = cE(t, null, a, l) : t.child = Zh(t, e.child, a, l);
    }
    function wO(e, t, a, l) {
      t.child = Zh(t, e.child, null, l), t.child = Zh(t, null, a, l);
    }
    function $E(e, t, a, l, f) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && Hi(
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
      return e !== null && !zo ? (bE(e, t, f), Cl(e, t, f)) : (t.flags |= Br, _a(e, t, w, f), t.child);
    }
    function UE(e, t, a, l, f, p) {
      if (e === null) {
        var y = a.type;
        if (mN(y) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var b = y;
          return b = pf(y), t.tag = q, t.type = b, ob(t, y), jE(e, t, b, l, f, p);
        }
        {
          var w = y.propTypes;
          w && Hi(
            w,
            l,
            // Resolved props
            "prop",
            Re(y)
          );
        }
        var O = Vb(a.type, null, l, t, t.mode, p);
        return O.ref = t.ref, O.return = t, t.child = O, O;
      }
      {
        var D = a.type, X = D.propTypes;
        X && Hi(
          X,
          l,
          // Resolved props
          "prop",
          Re(D)
        );
      }
      var H = e.child;
      if (!wr(f, p)) {
        var J = H.memoizedProps, fe = a.compare;
        if (fe = fe !== null ? fe : v, fe(J, l) && e.ref === t.ref)
          return Cl(e, t, p);
      }
      t.flags |= Br;
      var _e = Bs(H, l);
      return _e.ref = t.ref, _e.return = t, t.child = _e, _e;
    }
    function jE(e, t, a, l, f, p) {
      if (t.type !== t.elementType) {
        var y = t.elementType;
        if (y.$$typeof === At) {
          var b = y, w = b._payload, O = b._init;
          try {
            y = O(w);
          } catch (H) {
            y = null;
          }
          var D = y && y.propTypes;
          D && Hi(
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
          if (zo = !1, wr(p, f))
            (e.flags & Yu) !== un && (zo = !0);
          else
            return t.lanes = e.lanes, Cl(e, t, p);
      }
      return ab(e, t, a, l, p);
    }
    function rb(e, t, a) {
      var l = t.pendingProps, f = l.children, p = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || l.mode === "unstable-defer-without-hiding")
        if ((t.mode & Os) === Un) {
          var y = {
            baseLanes: ue
          };
          t.memoizedState = y, Im(t, a);
        } else if (wr(a, Ia)) {
          var D = {
            baseLanes: ue
          };
          t.memoizedState = D;
          var X = p !== null ? p.baseLanes : a;
          Im(t, X);
        } else {
          var b;
          if (p !== null) {
            var w = p.baseLanes;
            b = tn(w, a);
          } else
            b = a;
          Fm(Ia), t.lanes = t.childLanes = Ia;
          var O = {
            baseLanes: b
          };
          return t.memoizedState = O, Im(t, b), null;
        }
      else {
        var H;
        p !== null ? (H = tn(p.baseLanes, a), t.memoizedState = null) : H = a, Im(t, H);
      }
      return _a(e, t, f, a), t.child;
    }
    var xO = rb;
    function TO(e, t, a) {
      var l = t.pendingProps;
      return _a(e, t, l, a), t.child;
    }
    function RO(e, t, a) {
      var l = t.pendingProps.children;
      return _a(e, t, l, a), t.child;
    }
    function _O(e, t, a) {
      {
        t.flags |= vt;
        var l = t.stateNode;
        l.effectDuration = 0, l.passiveEffectDuration = 0;
      }
      var f = t.pendingProps, p = f.children;
      return _a(e, t, p, a), t.child;
    }
    function HE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Cr);
    }
    function ab(e, t, a, l, f) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && Hi(
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
      return e !== null && !zo ? (bE(e, t, f), Cl(e, t, f)) : (t.flags |= Br, _a(e, t, w, f), t.child);
    }
    function FE(e, t, a, l, f) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && Hi(
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
      b === null ? (e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tt), oE(t, a, l), p0(t, a, l, f), w = !0) : e === null ? w = nO(t, a, l, f) : w = rO(e, t, a, l, f);
      var O = ib(e, t, a, w, y, f);
      {
        var D = t.stateNode;
        w && D.props !== l && ($s || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Re(t.type) || "a component"), $s = !0);
      }
      return O;
    }
    function ib(e, t, a, l, f, p) {
      HE(e, t);
      var y = (t.flags & nn) !== un;
      if (!l && !y)
        return f && _C(t, a, !1), Cl(e, t, p);
      var b = t.stateNode;
      Ev.current = t;
      var w;
      if (y && typeof a.getDerivedStateFromError != "function")
        w = null, zE();
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
      return t.flags |= Br, e !== null && y ? wO(e, t, w, p) : _a(e, t, w, p), t.memoizedState = b.state, f && _C(t, a, !0), t.child;
    }
    function BE(e) {
      var t = e.stateNode;
      t.pendingContext ? TC(e, t.pendingContext, t.pendingContext !== t.context) : t.context && TC(e, t.context, !1), S0(e, t.containerInfo);
    }
    function kO(e, t, a) {
      BE(t);
      var l = t.updateQueue;
      if (!(e !== null && l !== null))
        throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");
      var f = t.pendingProps, p = t.memoizedState, y = p !== null ? p.element : null;
      XC(e, t), uv(t, f, null, a);
      var b = t.memoizedState, w = b.element;
      if (w === y)
        return _0(), Cl(e, t, a);
      var O = t.stateNode;
      if (O.hydrate && sO(t)) {
        {
          var D = O.mutableSourceEagerHydrationData;
          if (D != null)
            for (var X = 0; X < D.length; X += 2) {
              var H = D[X], J = D[X + 1];
              yE(H, J);
            }
        }
        var fe = cE(t, null, w, a);
        t.child = fe;
        for (var _e = fe; _e; )
          _e.flags = _e.flags & ~Tt | ba, _e = _e.sibling;
      } else
        _a(e, t, w, a), _0();
      return t.child;
    }
    function MO(e, t, a) {
      dE(t), e === null && R0(t);
      var l = t.type, f = t.pendingProps, p = e !== null ? e.memoizedProps : null, y = f.children, b = Uy(l, f);
      return b ? y = null : p !== null && Uy(l, p) && (t.flags |= Sr), HE(e, t), _a(e, t, y, a), t.child;
    }
    function OO(e, t) {
      return e === null && R0(t), null;
    }
    function NO(e, t, a, l, f) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tt);
      var p = t.pendingProps, y = a, b = y._payload, w = y._init, O = w(b);
      t.type = O;
      var D = t.tag = gN(O), X = Bi(O, p), H;
      switch (D) {
        case x:
          return ob(t, O), t.type = O = pf(O), H = ab(null, t, O, X, f), H;
        case E:
          return t.type = O = $b(O), H = FE(null, t, O, X, f), H;
        case I:
          return t.type = O = Ub(O), H = $E(null, t, O, X, f), H;
        case Y: {
          if (t.type !== t.elementType) {
            var J = O.propTypes;
            J && Hi(
              J,
              X,
              // Resolved for outer only
              "prop",
              Re(O)
            );
          }
          return H = UE(
            null,
            t,
            O,
            Bi(O.type, X),
            // The inner type can have defaults too
            l,
            f
          ), H;
        }
      }
      var fe = "";
      throw O !== null && typeof O == "object" && O.$$typeof === At && (fe = " Did you wrap a component in React.lazy() more than once?"), Error("Element type is invalid. Received a promise that resolves to: " + O + ". Lazy element type must resolve to a class or function." + fe);
    }
    function DO(e, t, a, l, f) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tt), t.tag = E;
      var p;
      return Ao(a) ? (p = !0, Ah(t)) : p = !1, Zc(t, f), oE(t, a, l), p0(t, a, l, f), ib(null, t, a, !0, p, f);
    }
    function AO(e, t, a, l) {
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
          Z0[w] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), Z0[w] = !0);
        }
        t.mode & Qn && Fi.recordLegacyContextWarning(t, null), er(!0), Ev.current = t, b = rf(null, t, a, f, p, l), er(!1);
      }
      if (t.flags |= Br, typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0) {
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
        Ao(a) ? (X = !0, Ah(t)) : X = !1, t.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null, r0(t);
        var H = a.getDerivedStateFromProps;
        return typeof H == "function" && qh(t, a, H, f), iE(t, b), p0(t, a, f, l), ib(null, t, a, !0, X, l);
      } else {
        if (t.tag = x, t.mode & Qn) {
          _r();
          try {
            b = rf(null, t, a, f, p, l);
          } finally {
            xn();
          }
        }
        return _a(null, t, b, l), ob(t, a), t.child;
      }
    }
    function ob(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", l = Tn();
          l && (a += `

Check the render method of \`` + l + "`.");
          var f = l || e._debugID || "", p = e._debugSource;
          p && (f = p.fileName + ":" + p.lineNumber), tb[f] || (tb[f] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = Re(t) || "Unknown";
          eb[y] || (h("%s: Function components do not support getDerivedStateFromProps.", y), eb[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var b = Re(t) || "Unknown";
          J0[b] || (h("%s: Function components do not support contextType.", b), J0[b] = !0);
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
    function VE(e, t) {
      return {
        baseLanes: tn(e.baseLanes, t)
      };
    }
    function LO(e, t, a, l) {
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
      IN(t) && (t.flags |= nn);
      var f = Vi.current, p = !1, y = (t.flags & nn) !== un;
      if (y || LO(f, e) ? (p = !0, t.flags &= ~nn) : (e === null || e.memoizedState !== null) && l.fallback !== void 0 && l.unstable_avoidThisFallback !== !0 && (f = lO(f, w0)), f = vv(f), As(t, f), e === null) {
        l.fallback !== void 0 && R0(t);
        var b = l.children, w = l.fallback;
        if (p) {
          var O = GE(t, b, w, a), D = t.child;
          return D.memoizedState = Em(a), t.memoizedState = Cm, O;
        } else if (typeof l.unstable_expectedLoadTime == "number") {
          var X = GE(t, b, w, a), H = t.child;
          return H.memoizedState = Em(a), t.memoizedState = Cm, t.lanes = Eo, Fm(Eo), X;
        } else
          return PO(t, b, a);
      } else {
        var J = e.memoizedState;
        if (J !== null)
          if (p) {
            var fe = l.fallback, _e = l.children, lt = QE(e, t, _e, fe, a), Pt = t.child, ht = e.child.memoizedState;
            return Pt.memoizedState = ht === null ? Em(a) : VE(ht, a), Pt.childLanes = WE(e, a), t.memoizedState = Cm, lt;
          } else {
            var Jt = l.children, Sn = YE(e, t, Jt, a);
            return t.memoizedState = null, Sn;
          }
        else if (p) {
          var Z = l.fallback, ae = l.children, K = QE(e, t, ae, Z, a), be = t.child, De = e.child.memoizedState;
          return be.memoizedState = De === null ? Em(a) : VE(De, a), be.childLanes = WE(e, a), t.memoizedState = Cm, K;
        } else {
          var Ye = l.children, Yt = YE(e, t, Ye, a);
          return t.memoizedState = null, Yt;
        }
      }
    }
    function PO(e, t, a) {
      var l = e.mode, f = {
        mode: "visible",
        children: t
      }, p = Kb(f, l, a, null);
      return p.return = e, e.child = p, p;
    }
    function GE(e, t, a, l) {
      var f = e.mode, p = e.child, y = {
        mode: "hidden",
        children: t
      }, b, w;
      return (f & Ta) === Un && p !== null ? (b = p, b.childLanes = ue, b.pendingProps = y, e.mode & Ua && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = 0, b.treeBaseDuration = 0), w = Vs(a, f, l, null)) : (b = Kb(y, f, ue, null), w = Vs(a, f, l, null)), b.return = e, w.return = e, b.sibling = w, e.child = b, w;
    }
    function qE(e, t) {
      return Bs(e, t);
    }
    function YE(e, t, a, l) {
      var f = e.child, p = f.sibling, y = qE(f, {
        mode: "visible",
        children: a
      });
      return (t.mode & Ta) === Un && (y.lanes = l), y.return = t, y.sibling = null, p !== null && (p.nextEffect = null, p.flags = Rn, t.firstEffect = t.lastEffect = p), t.child = y, y;
    }
    function QE(e, t, a, l, f) {
      var p = t.mode, y = e.child, b = y.sibling, w = {
        mode: "hidden",
        children: a
      }, O;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (p & Ta) === Un && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== y
      ) {
        var D = t.child;
        O = D, O.childLanes = ue, O.pendingProps = w, t.mode & Ua && (O.actualDuration = 0, O.actualStartTime = -1, O.selfBaseDuration = y.selfBaseDuration, O.treeBaseDuration = y.treeBaseDuration);
        var X = O.lastEffect;
        X !== null ? (t.firstEffect = O.firstEffect, t.lastEffect = X, X.nextEffect = null) : t.firstEffect = t.lastEffect = null;
      } else
        O = qE(y, w);
      var H;
      return b !== null ? H = Bs(b, l) : (H = Vs(l, p, f, null), H.flags |= Tt), H.return = t, O.return = t, O.sibling = H, t.child = O, H;
    }
    function XE(e, t) {
      e.lanes = tn(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = tn(a.lanes, t)), qC(e.return, t);
    }
    function IO(e, t, a) {
      for (var l = t; l !== null; ) {
        if (l.tag === U) {
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
    function zO(e) {
      for (var t = e, a = null; t !== null; ) {
        var l = t.alternate;
        l !== null && nm(l) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function $O(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !nb[e])
        if (nb[e] = !0, typeof e == "string")
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
    function UO(e, t) {
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
    function jO(e, t) {
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
    function lb(e, t, a, l, f, p) {
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
      $O(f), UO(p, f), jO(y, f), _a(e, t, y, a);
      var b = Vi.current, w = tm(b, dv);
      if (w)
        b = x0(b, dv), t.flags |= nn;
      else {
        var O = e !== null && (e.flags & nn) !== un;
        O && IO(t, t.child, a), b = vv(b);
      }
      if (As(t, b), (t.mode & Ta) === Un)
        t.memoizedState = null;
      else
        switch (f) {
          case "forwards": {
            var D = zO(t.child), X;
            D === null ? (X = t.child, t.child = null) : (X = D.sibling, D.sibling = null), lb(
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
            var H = null, J = t.child;
            for (t.child = null; J !== null; ) {
              var fe = J.alternate;
              if (fe !== null && nm(fe) === null) {
                t.child = J;
                break;
              }
              var _e = J.sibling;
              J.sibling = H, H = J, J = _e;
            }
            lb(
              t,
              !0,
              // isBackwards
              H,
              null,
              // last
              p,
              t.lastEffect
            );
            break;
          }
          case "together": {
            lb(
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
    function HO(e, t, a) {
      S0(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = Zh(t, null, l, a) : _a(e, t, l, a), t.child;
    }
    var ew = !1;
    function FO(e, t, a) {
      var l = t.type, f = l._context, p = t.pendingProps, y = t.memoizedProps, b = p.value;
      {
        "value" in p || ew || (ew = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var w = t.type.propTypes;
        w && Hi(w, p, "prop", "Context.Provider");
      }
      if (GC(t, b), y !== null) {
        var O = y.value, D = YM(f, b, O);
        if (D === 0) {
          if (y.children === p.children && !Nh())
            return Cl(e, t, a);
        } else
          QM(t, f, D, a);
      }
      var X = p.children;
      return _a(e, t, X, a), t.child;
    }
    var tw = !1;
    function BO(e, t, a) {
      var l = t.type;
      l._context === void 0 ? l !== l.Consumer && (tw || (tw = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var f = t.pendingProps, p = f.children;
      typeof p != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Zc(t, a);
      var y = pr(l, f.unstable_observedBits), b;
      return Ev.current = t, er(!0), b = p(y), er(!1), t.flags |= Br, _a(e, t, b, a), t.child;
    }
    function ub() {
      zo = !0;
    }
    function Cl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), zE(), Ab(t.lanes), wr(a, t.childLanes) ? (aO(e, t), t.child) : null;
    }
    function VO(e, t, a) {
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
        return VO(e, t, Vb(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var f = e.memoizedProps, p = t.pendingProps;
        if (f !== p || Nh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          zo = !0;
        else if (wr(a, l))
          (e.flags & Yu) !== un ? zo = !0 : zo = !1;
        else {
          switch (zo = !1, t.tag) {
            case _:
              BE(t), _0();
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
              S0(t, t.stateNode.containerInfo);
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
            case U: {
              var D = t.memoizedState;
              if (D !== null) {
                var X = t.child, H = X.childLanes;
                if (wr(a, H))
                  return KE(e, t, a);
                As(t, vv(Vi.current));
                var J = Cl(e, t, a);
                return J !== null ? J.sibling : null;
              } else
                As(t, vv(Vi.current));
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
              if (lt !== null && (lt.rendering = null, lt.tail = null, lt.lastEffect = null), As(t, Vi.current), _e)
                break;
              return null;
            }
            case de:
            case Ce:
              return t.lanes = ue, rb(e, t, a);
          }
          return Cl(e, t, a);
        }
      } else
        zo = !1;
      switch (t.lanes = ue, t.tag) {
        case M:
          return AO(e, t, t.type, a);
        case ne: {
          var Pt = t.elementType;
          return NO(e, t, Pt, l, a);
        }
        case x: {
          var ht = t.type, Jt = t.pendingProps, Sn = t.elementType === ht ? Jt : Bi(ht, Jt);
          return ab(e, t, ht, Sn, a);
        }
        case E: {
          var Z = t.type, ae = t.pendingProps, K = t.elementType === Z ? ae : Bi(Z, ae);
          return FE(e, t, Z, K, a);
        }
        case _:
          return kO(e, t, a);
        case L:
          return MO(e, t, a);
        case z:
          return OO(e, t);
        case U:
          return KE(e, t, a);
        case N:
          return HO(e, t, a);
        case I: {
          var be = t.type, De = t.pendingProps, Ye = t.elementType === be ? De : Bi(be, De);
          return $E(e, t, be, Ye, a);
        }
        case B:
          return TO(e, t, a);
        case A:
          return RO(e, t, a);
        case P:
          return _O(e, t, a);
        case $:
          return FO(e, t, a);
        case G:
          return BO(e, t, a);
        case Y: {
          var Yt = t.type, Mn = t.pendingProps, jn = Bi(Yt, Mn);
          if (t.type !== t.elementType) {
            var sn = Yt.propTypes;
            sn && Hi(
              sn,
              jn,
              // Resolved for outer only
              "prop",
              Re(Yt)
            );
          }
          return jn = Bi(Yt.type, jn), UE(e, t, Yt, jn, l, a);
        }
        case q:
          return jE(e, t, t.type, t.pendingProps, l, a);
        case oe: {
          var hr = t.type, rn = t.pendingProps, Hn = t.elementType === hr ? rn : Bi(hr, rn);
          return DO(e, t, hr, Hn, a);
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
          return rb(e, t, a);
        case Ce:
          return xO(e, t, a);
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function lf(e) {
      e.flags |= vt;
    }
    function rw(e) {
      e.flags |= Cr;
    }
    var aw, sb, iw, ow;
    aw = function(e, t, a, l) {
      for (var f = t.child; f !== null; ) {
        if (f.tag === L || f.tag === z)
          Vk(e, f.stateNode);
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
    }, sb = function(e) {
    }, iw = function(e, t, a, l, f) {
      var p = e.memoizedProps;
      if (p !== l) {
        var y = t.stateNode, b = C0(), w = Kk(y, a, p, l, f, b);
        t.updateQueue = w, w && lf(t);
      }
    }, ow = function(e, t, a, l) {
      a !== l && lf(t);
    };
    function xv(e, t) {
      if (!k0())
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
        case I:
        case B:
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
          Jc(t), Ky(t), O0();
          var p = t.stateNode;
          if (p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), e === null || e.child === null) {
            var y = rm(t);
            y ? lf(t) : p.hydrate || (t.flags |= ei);
          }
          return sb(t), null;
        }
        case L: {
          E0(t);
          var b = fE(), w = t.type;
          if (e !== null && t.stateNode != null)
            iw(e, t, w, l, b), e.ref !== t.ref && rw(t);
          else {
            if (!l) {
              if (t.stateNode === null)
                throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return null;
            }
            var O = C0(), D = rm(t);
            if (D)
              cO(t, b, O) && lf(t);
            else {
              var X = Bk(w, l, b, O, t);
              aw(X, t, !1, !1), t.stateNode = X, Wk(X, w, l, b) && lf(t);
            }
            t.ref !== null && rw(t);
          }
          return null;
        }
        case z: {
          var H = l;
          if (e && t.stateNode != null) {
            var J = e.memoizedProps;
            ow(e, t, J, H);
          } else {
            if (typeof H != "string" && t.stateNode === null)
              throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var fe = fE(), _e = C0(), lt = rm(t);
            lt ? fO(t) && lf(t) : t.stateNode = Gk(H, fe, _e, t);
          }
          return null;
        }
        case U: {
          ef(t);
          var Pt = t.memoizedState;
          if ((t.flags & nn) !== un)
            return t.lanes = a, (t.mode & Ua) !== Un && X0(t), t;
          var ht = Pt !== null, Jt = !1;
          if (e === null)
            t.memoizedProps.fallback !== void 0 && rm(t);
          else {
            var Sn = e.memoizedState;
            Jt = Sn !== null;
          }
          if (ht && !Jt && (t.mode & Ta) !== Un) {
            var Z = e === null && t.memoizedProps.unstable_avoidThisFallback !== !0;
            Z || tm(Vi.current, w0) ? O2() : N2();
          }
          return (ht || Jt) && (t.flags |= vt), null;
        }
        case N:
          return Jc(t), sb(t), e === null && OM(t.stateNode.containerInfo), null;
        case $:
          return e0(t), null;
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
              var Ye = A2() && (e === null || (e.flags & nn) === un);
              if (!Ye)
                for (var Yt = t.child; Yt !== null; ) {
                  var Mn = nm(Yt);
                  if (Mn !== null) {
                    be = !0, t.flags |= nn, xv(K, !1);
                    var jn = Mn.updateQueue;
                    return jn !== null && (t.updateQueue = jn, t.flags |= vt), K.lastEffect === null && (t.firstEffect = null), t.lastEffect = K.lastEffect, iO(t, a), As(t, x0(Vi.current, dv)), t.child;
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
                if (hr !== null && (t.updateQueue = hr, t.flags |= vt), xv(K, !0), K.tail === null && K.tailMode === "hidden" && !De.alternate && !k0()) {
                  var rn = t.lastEffect = K.lastEffect;
                  return rn !== null && (rn.nextEffect = null), null;
                }
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                ta() * 2 - K.renderingStartTime > ww() && a !== Ia && (t.flags |= nn, be = !0, xv(K, !1), t.lanes = Eo, Fm(Eo));
            }
            if (K.isBackwards)
              De.sibling = t.child, t.child = De;
            else {
              var Hn = K.last;
              Hn !== null ? Hn.sibling = De : t.child = De, K.last = De;
            }
          }
          if (K.tail !== null) {
            var Ar = K.tail;
            K.rendering = Ar, K.tail = Ar.sibling, K.lastEffect = t.lastEffect, K.renderingStartTime = ta(), Ar.sibling = null;
            var nr = Vi.current;
            return be ? nr = x0(nr, dv) : nr = vv(nr), As(t, nr), Ar;
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
          if (Db(t), e !== null) {
            var Ho = t.memoizedState, rr = e.memoizedState, Fo = rr !== null, Ws = Ho !== null;
            Fo !== Ws && l.mode !== "unstable-defer-without-hiding" && (t.flags |= vt);
          }
          return null;
        }
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function WO(e, t) {
      switch (e.tag) {
        case E: {
          var a = e.type;
          Ao(a) && Dh(e);
          var l = e.flags;
          return l & La ? (e.flags = l & ~La | nn, (e.mode & Ua) !== Un && X0(e), e) : null;
        }
        case _: {
          Jc(e), Ky(e), O0();
          var f = e.flags;
          if ((f & nn) !== un)
            throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");
          return e.flags = f & ~La | nn, e;
        }
        case L:
          return E0(e), null;
        case U: {
          ef(e);
          var p = e.flags;
          return p & La ? (e.flags = p & ~La | nn, (e.mode & Ua) !== Un && X0(e), e) : null;
        }
        case ge:
          return ef(e), null;
        case N:
          return Jc(e), null;
        case $:
          return e0(e), null;
        case de:
        case Ce:
          return Db(e), null;
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
          Jc(e), Ky(e), O0();
          break;
        }
        case L: {
          E0(e);
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
        case $:
          e0(e);
          break;
        case de:
        case Ce:
          Db(e);
          break;
      }
    }
    function cb(e, t) {
      return {
        value: e,
        source: t,
        stack: Or(t)
      };
    }
    function KO(e, t) {
      return !0;
    }
    function fb(e, t) {
      try {
        var a = KO(e, t);
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
      } catch (H) {
        setTimeout(function() {
          throw H;
        });
      }
    }
    var GO = typeof WeakMap == "function" ? WeakMap : Map;
    function sw(e, t, a) {
      var l = yu(kn, a);
      l.tag = t0, l.payload = {
        element: null
      };
      var f = t.value;
      return l.callback = function() {
        G2(f), fb(e, t);
      }, l;
    }
    function cw(e, t, a) {
      var l = yu(kn, a);
      l.tag = t0;
      var f = e.type.getDerivedStateFromError;
      if (typeof f == "function") {
        var p = t.value;
        l.payload = function() {
          return fb(e, t), f(p);
        };
      }
      var y = e.stateNode;
      return y !== null && typeof y.componentDidCatch == "function" ? l.callback = function() {
        Vw(e), typeof f != "function" && (W2(this), fb(e, t));
        var w = t.value, O = t.stack;
        this.componentDidCatch(w, {
          componentStack: O !== null ? O : ""
        }), typeof f != "function" && (wr(e.lanes, Ft) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Re(e.type) || "Unknown"));
      } : l.callback = function() {
        Vw(e);
      }, l;
    }
    function qO(e, t, a) {
      var l = e.pingCache, f;
      if (l === null ? (l = e.pingCache = new GO(), f = /* @__PURE__ */ new Set(), l.set(t, f)) : (f = l.get(t), f === void 0 && (f = /* @__PURE__ */ new Set(), l.set(t, f))), !f.has(a)) {
        f.add(a);
        var p = q2.bind(null, e, t, a);
        t.then(p, p);
      }
    }
    function YO(e, t, a, l, f) {
      if (a.flags |= qu, a.firstEffect = a.lastEffect = null, l !== null && typeof l == "object" && typeof l.then == "function") {
        var p = l;
        if ((a.mode & Ta) === Un) {
          var y = a.alternate;
          y ? (a.updateQueue = y.updateQueue, a.memoizedState = y.memoizedState, a.lanes = y.lanes) : (a.updateQueue = null, a.memoizedState = null);
        }
        var b = tm(Vi.current, w0), w = t;
        do {
          if (w.tag === U && uO(w, b)) {
            var O = w.updateQueue;
            if (O === null) {
              var D = /* @__PURE__ */ new Set();
              D.add(p), w.updateQueue = D;
            } else
              O.add(p);
            if ((w.mode & Ta) === Un) {
              if (w.flags |= nn, a.flags |= Yu, a.flags &= ~(rd | qu), a.tag === E) {
                var X = a.alternate;
                if (X === null)
                  a.tag = oe;
                else {
                  var H = yu(kn, Ft);
                  H.tag = Bh, bu(a, H);
                }
              }
              a.lanes = tn(a.lanes, Ft);
              return;
            }
            qO(e, p, f), w.flags |= La, w.lanes = f;
            return;
          }
          w = w.return;
        } while (w !== null);
        l = new Error((Re(a.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
      }
      D2(), l = cb(l, a);
      var J = t;
      do {
        switch (J.tag) {
          case _: {
            var fe = l;
            J.flags |= La;
            var _e = dr(f);
            J.lanes = tn(J.lanes, _e);
            var lt = sw(J, fe, _e);
            ZC(J, lt);
            return;
          }
          case E:
            var Pt = l, ht = J.type, Jt = J.stateNode;
            if ((J.flags & nn) === un && (typeof ht.getDerivedStateFromError == "function" || Jt !== null && typeof Jt.componentDidCatch == "function" && !Lb(Jt))) {
              J.flags |= La;
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
    var QO = typeof WeakSet == "function" ? WeakSet : Set, XO = function(e, t) {
      t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount();
    };
    function ZO(e, t) {
      if (Hr(null, XO, null, e, t), ua()) {
        var a = Fr();
        xu(e, a);
      }
    }
    function dw(e) {
      var t = e.ref;
      if (t !== null)
        if (typeof t == "function") {
          if (Hr(null, t, null, null), ua()) {
            var a = Fr();
            xu(e, a);
          }
        } else
          t.current = null;
    }
    function JO(e, t) {
      if (Hr(null, t, null), ua()) {
        var a = Fr();
        xu(e, a);
      }
    }
    function e2(e, t) {
      switch (t.tag) {
        case x:
        case I:
        case q:
        case se:
          return;
        case E: {
          if (t.flags & ei && e !== null) {
            var a = e.memoizedProps, l = e.memoizedState, f = t.stateNode;
            t.type === t.elementType && !$s && (f.props !== t.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(t.type) || "instance"), f.state !== t.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(t.type) || "instance"));
            var p = f.getSnapshotBeforeUpdate(t.elementType === t.type ? a : Bi(t.type, a), l);
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
            Hy(b.containerInfo);
          }
          return;
        }
        case L:
        case z:
        case N:
        case oe:
          return;
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function t2(e, t) {
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
    function n2(e, t) {
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
    function r2(e) {
      var t = e.updateQueue, a = t !== null ? t.lastEffect : null;
      if (a !== null) {
        var l = a.next, f = l;
        do {
          var p = f, y = p.next, b = p.tag;
          (b & pv) !== T0 && (b & tf) !== T0 && (Dw(e, f), F2(e, f)), f = y;
        } while (f !== l);
      }
    }
    function a2(e, t, a, l) {
      switch (a.tag) {
        case x:
        case I:
        case q:
        case se: {
          n2(nf | tf, a), r2(a);
          return;
        }
        case E: {
          var f = a.stateNode;
          if (a.flags & vt)
            if (t === null)
              a.type === a.elementType && !$s && (f.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a.type) || "instance"), f.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a.type) || "instance")), f.componentDidMount();
            else {
              var p = a.elementType === a.type ? t.memoizedProps : Bi(a.type, t.memoizedProps), y = t.memoizedState;
              a.type === a.elementType && !$s && (f.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a.type) || "instance"), f.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a.type) || "instance")), f.componentDidUpdate(p, y, f.__reactInternalSnapshotBeforeUpdate);
            }
          var b = a.updateQueue;
          b !== null && (a.type === a.elementType && !$s && (f.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a.type) || "instance"), f.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a.type) || "instance")), eE(a, b, f));
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
            var X = a.type, H = a.memoizedProps;
            Yk(D, X, H);
          }
          return;
        }
        case z:
          return;
        case N:
          return;
        case P: {
          {
            var J = a.memoizedProps;
            J.onCommit;
            var fe = J.onRender;
            a.stateNode.effectDuration;
            var _e = EO();
            typeof fe == "function" && fe(a.memoizedProps.id, t === null ? "mount" : "update", a.actualDuration, a.treeBaseDuration, a.actualStartTime, _e, e.memoizedInteractions);
          }
          return;
        }
        case U: {
          d2(e, a);
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
          t ? aM(l) : oM(a.stateNode, a.memoizedProps);
        } else if (a.tag === z) {
          var f = a.stateNode;
          t ? iM(f) : lM(f, a.memoizedProps);
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
    function i2(e) {
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
    function o2(e) {
      var t = e.ref;
      t !== null && (typeof t == "function" ? t(null) : t.current = null);
    }
    function pw(e, t, a) {
      switch (zM(t), t.tag) {
        case x:
        case I:
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
                w !== void 0 && ((O & pv) !== T0 ? Dw(t, y) : JO(t, w)), y = y.next;
              } while (y !== p);
            }
          }
          return;
        }
        case E: {
          dw(t);
          var D = t.stateNode;
          typeof D.componentWillUnmount == "function" && ZO(t, D);
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
    function l2(e, t, a) {
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
    function u2(e) {
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
    function s2(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || mw(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== L && t.tag !== z && t.tag !== re; ) {
            if (t.flags & Tt || t.child === null || t.tag === N)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Tt))
            return t.stateNode;
        }
    }
    function gw(e) {
      var t = u2(e), a, l, f = t.stateNode;
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
      var p = s2(e);
      l ? db(e, p, a) : vb(e, p, a);
    }
    function db(e, t, a) {
      var l = e.tag, f = l === L || l === z;
      if (f || we) {
        var p = f ? e.stateNode : e.stateNode.instance;
        t ? tM(a, p, t) : Jk(a, p);
      } else if (l !== N) {
        var y = e.child;
        if (y !== null) {
          db(y, t, a);
          for (var b = y.sibling; b !== null; )
            db(b, t, a), b = b.sibling;
        }
      }
    }
    function vb(e, t, a) {
      var l = e.tag, f = l === L || l === z;
      if (f || we) {
        var p = f ? e.stateNode : e.stateNode.instance;
        t ? eM(a, p, t) : Zk(a, p);
      } else if (l !== N) {
        var y = e.child;
        if (y !== null) {
          vb(y, t, a);
          for (var b = y.sibling; b !== null; )
            vb(b, t, a), b = b.sibling;
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
        if (l.tag === L || l.tag === z)
          l2(e, l), y ? rM(p, l.stateNode) : nM(p, l.stateNode);
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
    function c2(e, t, a) {
      yw(e, t);
      var l = t.alternate;
      hw(t), l !== null && hw(l);
    }
    function pb(e, t) {
      switch (t.tag) {
        case x:
        case I:
        case Y:
        case q:
        case se: {
          t2(nf | tf, t);
          return;
        }
        case E:
          return;
        case L: {
          var a = t.stateNode;
          if (a != null) {
            var l = t.memoizedProps, f = e !== null ? e.memoizedProps : l, p = t.type, y = t.updateQueue;
            t.updateQueue = null, y !== null && Qk(a, y, p, f, l);
          }
          return;
        }
        case z: {
          if (t.stateNode === null)
            throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var b = t.stateNode, w = t.memoizedProps, O = e !== null ? e.memoizedProps : w;
          Xk(b, O, w);
          return;
        }
        case _: {
          {
            var D = t.stateNode;
            D.hydrate && (D.hydrate = !1, hM(D.containerInfo));
          }
          return;
        }
        case P:
          return;
        case U: {
          f2(t), bw(t);
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
          var X = t.memoizedState, H = X !== null;
          vw(t, H);
          return;
        }
      }
      throw Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
    }
    function f2(e) {
      var t = e.memoizedState;
      if (t !== null) {
        M2();
        {
          var a = e.child;
          vw(a, !0);
        }
      }
    }
    function d2(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var l = t.alternate;
        if (l !== null) {
          var f = l.memoizedState;
          if (f !== null) {
            var p = f.dehydrated;
            p !== null && mM(p);
          }
        }
      }
    }
    function bw(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new QO()), t.forEach(function(l) {
          var f = Q2.bind(null, e, l);
          a.has(l) || (l.__reactDoNotTraceInteractions !== !0 && (f = c.unstable_wrap(f)), a.add(l), l.then(f, f));
        });
      }
    }
    function v2(e, t) {
      if (e !== null) {
        var a = e.memoizedState;
        if (a === null || a.dehydrated !== null) {
          var l = t.memoizedState;
          return l !== null && l.dehydrated === null;
        }
      }
      return !1;
    }
    function p2(e) {
      pC(e.stateNode);
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Tv = Symbol.for;
      Tv("selector.component"), Tv("selector.has_pseudo_class"), Tv("selector.role"), Tv("selector.test_id"), Tv("selector.text");
    }
    var h2 = [];
    function m2() {
      h2.forEach(function(e) {
        return e();
      });
    }
    var g2 = Math.ceil, hb = d.ReactCurrentDispatcher, mb = d.ReactCurrentOwner, gb = d.IsSomeRendererActing, Xn = (
      /*             */
      0
    ), wm = (
      /*               */
      1
    ), y2 = (
      /*                 */
      2
    ), yb = (
      /*         */
      4
    ), bb = (
      /*       */
      8
    ), ja = (
      /*                */
      16
    ), $o = (
      /*                */
      32
    ), Sw = (
      /*       */
      64
    ), El = 0, xm = 1, Tm = 2, Rm = 3, _m = 4, Sb = 5, pt = Xn, fa = null, Zn = null, da = ue, Uo = ue, Cb = mu(ue), Kr = El, km = null, Us = ue, Mm = ue, js = ue, Om = ue, Eb = null, wb = 0, Cw = 500, Ew = 1 / 0, b2 = 500;
    function uf() {
      Ew = ta() + b2;
    }
    function ww() {
      return Ew;
    }
    var qe = null, Nm = !1, xb = null, sf = null, wl = !1, cf = null, Rv = Qy, Tb = ue, Rb = [], _b = [], xl = null, S2 = 50, _v = 0, kb = null, C2 = 50, Dm = 0, Hs = null, kv = kn, Tl = ue, Am = ue, Mb = !1, Mv = null, Lm = !1;
    function E2() {
      return fa;
    }
    function Ha() {
      return (pt & (ja | $o)) !== Xn ? ta() : (kv !== kn || (kv = ta()), kv);
    }
    function wu(e) {
      var t = e.mode;
      if ((t & Ta) === Un)
        return Ft;
      if ((t & Os) === Un)
        return Qc() === fi ? Ft : Ii;
      Tl === ue && (Tl = Us);
      var a = GM() !== KM;
      if (a)
        return Am !== ue && (Am = Eb !== null ? Eb.pendingLanes : ue), Vp(Tl, Am);
      var l = Qc(), f;
      if (
        // TODO: Temporary. We're removing the concept of discrete updates.
        (pt & yb) !== Xn && l === ks
      )
        f = lu(eu, Tl);
      else {
        var p = Ed(l);
        f = lu(p, Tl);
      }
      return f;
    }
    function w2(e) {
      var t = e.mode;
      return (t & Ta) === Un ? Ft : (t & Os) === Un ? Qc() === fi ? Ft : Ii : (Tl === ue && (Tl = Us), Td(Tl));
    }
    function ra(e, t, a) {
      Z2(), nN(e);
      var l = Pm(e, t);
      if (l === null)
        return eN(e), null;
      su(l, t, a), l === fa && (js = tn(js, t), Kr === _m && ff(l, da));
      var f = Qc();
      t === Ft ? /* Check if we're inside unbatchedUpdates */ (pt & bb) !== Xn && // Check if we're not already rendering
      (pt & (ja | $o)) === Xn ? (Tu(l, t), Ob(l)) : (hi(l, a), Tu(l, t), pt === Xn && (uf(), Po())) : ((pt & yb) !== Xn && // Only updates at user-blocking priority or greater are considered
      // discrete, even inside a discrete event.
      (f === ks || f === fi) && (xl === null ? xl = /* @__PURE__ */ new Set([l]) : xl.add(l)), hi(l, a), Tu(l, t)), Eb = l;
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
      my(e, t);
      var l = cs(e, e === fa ? da : ue), f = Zr();
      if (l === ue) {
        a !== null && (HC(a), e.callbackNode = null, e.callbackPriority = Pi);
        return;
      }
      if (a !== null) {
        var p = e.callbackPriority;
        if (p === f)
          return;
        HC(a);
      }
      var y;
      if (f === bo)
        y = BM(Ob.bind(null, e));
      else if (f === is)
        y = gu(fi, Ob.bind(null, e));
      else {
        var b = _c(f);
        y = gu(b, xw.bind(null, e));
      }
      e.callbackPriority = f, e.callbackNode = y;
    }
    function xw(e) {
      if (kv = kn, Tl = ue, Am = ue, (pt & (ja | $o)) !== Xn)
        throw Error("Should not already be working.");
      var t = e.callbackNode, a = jo();
      if (a && e.callbackNode !== t)
        return null;
      var l = cs(e, e === fa ? da : ue);
      if (l === ue)
        return null;
      var f = P2(e, l);
      if (wr(Us, js))
        df(e, ue);
      else if (f !== El) {
        if (f === Tm && (pt |= Sw, e.hydrate && (e.hydrate = !1, Hy(e.containerInfo)), l = Ca(e), l !== ue && (f = Ov(e, l))), f === xm) {
          var p = km;
          throw df(e, ue), ff(e, l), hi(e, ta()), p;
        }
        var y = e.current.alternate;
        e.finishedWork = y, e.finishedLanes = l, x2(e, f, l);
      }
      return hi(e, ta()), e.callbackNode === t ? xw.bind(null, e) : null;
    }
    function x2(e, t, a) {
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
          !oN()) {
            var l = wb + Cw - ta();
            if (l > 10) {
              var f = cs(e, ue);
              if (f !== ue)
                break;
              var p = e.suspendedLanes;
              if (!xo(p, a)) {
                Ha(), _d(e, p);
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
          if (ff(e, a), Bp(a))
            break;
          {
            var y = py(e, a), b = y, w = ta() - b, O = X2(w) - w;
            if (O > 10) {
              e.timeoutHandle = vC(Fs.bind(null, e), O);
              break;
            }
          }
          Fs(e);
          break;
        }
        case Sb: {
          Fs(e);
          break;
        }
        default:
          throw Error("Unknown root exit status.");
      }
    }
    function ff(e, t) {
      t = uu(t, Om), t = uu(t, js), qp(e, t);
    }
    function Ob(e) {
      if ((pt & (ja | $o)) !== Xn)
        throw Error("Should not already be working.");
      jo();
      var t, a;
      if (e === fa && wr(e.expiredLanes, da) ? (t = da, a = Ov(e, t), wr(Us, js) && (t = cs(e, t), a = Ov(e, t))) : (t = cs(e, ue), a = Ov(e, t)), e.tag !== Gy && a === Tm && (pt |= Sw, e.hydrate && (e.hydrate = !1, Hy(e.containerInfo)), t = Ca(e), t !== ue && (a = Ov(e, t))), a === xm) {
        var l = km;
        throw df(e, ue), ff(e, t), hi(e, ta()), l;
      }
      var f = e.current.alternate;
      return e.finishedWork = f, e.finishedLanes = t, Fs(e), hi(e, ta()), null;
    }
    function T2() {
      if ((pt & (wm | ja | $o)) !== Xn) {
        (pt & ja) !== Xn && h("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.");
        return;
      }
      R2(), jo();
    }
    function R2() {
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
    function _2(e, t) {
      var a = pt;
      pt |= y2;
      try {
        return e(t);
      } finally {
        pt = a, pt === Xn && (uf(), Po());
      }
    }
    function k2(e, t, a, l, f) {
      var p = pt;
      pt |= yb;
      try {
        return Ms(ks, e.bind(null, t, a, l, f));
      } finally {
        pt = p, pt === Xn && (uf(), Po());
      }
    }
    function Rw(e, t) {
      var a = pt;
      pt &= ~wm, pt |= bb;
      try {
        return e(t);
      } finally {
        pt = a, pt === Xn && (uf(), Po());
      }
    }
    function Nb(e, t) {
      var a = pt;
      if ((a & (ja | $o)) !== Xn)
        return h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), e(t);
      pt |= wm;
      try {
        return e ? Ms(fi, e.bind(null, t)) : void 0;
      } finally {
        pt = a, Po();
      }
    }
    function Im(e, t) {
      ea(Cb, Uo, e), Uo = tn(Uo, t), Us = tn(Us, t);
    }
    function Db(e) {
      Uo = Cb.current, Jr(Cb, e);
    }
    function df(e, t) {
      e.finishedWork = null, e.finishedLanes = ue;
      var a = e.timeoutHandle;
      if (a !== jy && (e.timeoutHandle = jy, qk(a)), Zn !== null)
        for (var l = Zn.return; l !== null; )
          uw(l), l = l.return;
      fa = e, Zn = Bs(e.current, null), da = Uo = Us = t, Kr = El, km = null, Mm = ue, js = ue, Om = ue, Hs = null, Fi.discardPendingWarnings();
    }
    function _w(e, t) {
      do {
        var a = Zn;
        try {
          if (Fh(), SE(), Nn(), mb.current = null, a === null || a.return === null) {
            Kr = xm, km = t, Zn = null;
            return;
          }
          ke && a.mode & Ua && bm(a, !0), YO(e, a.return, a, t, da), Nw(a);
        } catch (l) {
          t = l, Zn === a && a !== null ? (a = a.return, Zn = a) : a = Zn;
          continue;
        }
        return;
      } while (!0);
    }
    function kw() {
      var e = hb.current;
      return hb.current = mm, e === null ? mm : e;
    }
    function Mw(e) {
      hb.current = e;
    }
    function zm(e) {
      {
        var t = c.__interactionsRef.current;
        return c.__interactionsRef.current = e.memoizedInteractions, t;
      }
    }
    function $m(e) {
      c.__interactionsRef.current = e;
    }
    function M2() {
      wb = ta();
    }
    function Ab(e) {
      Mm = tn(e, Mm);
    }
    function O2() {
      Kr === El && (Kr = Rm);
    }
    function N2() {
      (Kr === El || Kr === Rm) && (Kr = _m), fa !== null && (wd(Mm) || wd(js)) && ff(fa, da);
    }
    function D2() {
      Kr !== Sb && (Kr = Tm);
    }
    function A2() {
      return Kr === El;
    }
    function Ov(e, t) {
      var a = pt;
      pt |= ja;
      var l = kw();
      (fa !== e || da !== t) && (df(e, t), jw(e, t));
      var f = zm(e);
      do
        try {
          L2();
          break;
        } catch (p) {
          _w(e, p);
        }
      while (!0);
      if (Fh(), $m(f), pt = a, Mw(l), Zn !== null)
        throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return fa = null, da = ue, Kr;
    }
    function L2() {
      for (; Zn !== null; )
        Ow(Zn);
    }
    function P2(e, t) {
      var a = pt;
      pt |= ja;
      var l = kw();
      (fa !== e || da !== t) && (uf(), df(e, t), jw(e, t));
      var f = zm(e);
      do
        try {
          I2();
          break;
        } catch (p) {
          _w(e, p);
        }
      while (!0);
      return Fh(), $m(f), Mw(l), pt = a, Zn !== null ? El : (fa = null, da = ue, Kr);
    }
    function I2() {
      for (; Zn !== null && !HM(); )
        Ow(Zn);
    }
    function Ow(e) {
      var t = e.alternate;
      vn(e);
      var a;
      (e.mode & Ua) !== Un ? (Q0(e), a = Pb(t, e, Uo), bm(e, !0)) : a = Pb(t, e, Uo), Nn(), e.memoizedProps = e.pendingProps, a === null ? Nw(e) : Zn = a, mb.current = null;
    }
    function Nw(e) {
      var t = e;
      do {
        var a = t.alternate, l = t.return;
        if ((t.flags & qu) === un) {
          vn(t);
          var f = void 0;
          if ((t.mode & Ua) === Un ? f = lw(a, t, Uo) : (Q0(t), f = lw(a, t, Uo), bm(t, !1)), Nn(), f !== null) {
            Zn = f;
            return;
          }
          if (z2(t), l !== null && // Do not append effects to parents if a sibling failed to complete
          (l.flags & qu) === un) {
            l.firstEffect === null && (l.firstEffect = t.firstEffect), t.lastEffect !== null && (l.lastEffect !== null && (l.lastEffect.nextEffect = t.firstEffect), l.lastEffect = t.lastEffect);
            var p = t.flags;
            p > Br && (l.lastEffect !== null ? l.lastEffect.nextEffect = t : l.firstEffect = t, l.lastEffect = t);
          }
        } else {
          var y = WO(t);
          if (y !== null) {
            y.flags &= el, Zn = y;
            return;
          }
          if ((t.mode & Ua) !== Un) {
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
      Kr === El && (Kr = Sb);
    }
    function z2(e) {
      if (
        // TODO: Move this check out of the hot path by moving `resetChildLanes`
        // to switch statement in `completeWork`.
        !((e.tag === Ce || e.tag === de) && e.memoizedState !== null && !wr(Uo, Ia) && (e.mode & Os) !== ue)
      ) {
        var t = ue;
        if ((e.mode & Ua) !== Un) {
          for (var a = e.actualDuration, l = e.selfBaseDuration, f = e.alternate === null || e.child !== e.alternate.child, p = e.child; p !== null; )
            t = tn(t, tn(p.lanes, p.childLanes)), f && (a += p.actualDuration), l += p.treeBaseDuration, p = p.sibling;
          var y = e.tag === U && e.memoizedState !== null;
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
      return Ms(fi, $2.bind(null, e, t)), null;
    }
    function $2(e, t) {
      do
        jo();
      while (cf !== null);
      if (J2(), (pt & (ja | $o)) !== Xn)
        throw Error("Should not already be working.");
      var a = e.finishedWork, l = e.finishedLanes;
      if (a === null)
        return null;
      if (e.finishedWork = null, e.finishedLanes = ue, a === e.current)
        throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null;
      var f = tn(a.lanes, a.childLanes);
      kd(e, f), xl !== null && !yy(f) && xl.has(e) && xl.delete(e), e === fa && (fa = null, Zn = null, da = ue);
      var p;
      if (a.flags > Br ? a.lastEffect !== null ? (a.lastEffect.nextEffect = a, p = a.firstEffect) : p = a : p = a.firstEffect, p !== null) {
        var y = pt;
        pt |= $o;
        var b = zm(e);
        mb.current = null, Mv = Hk(e.containerInfo), Lm = !1, qe = p;
        do
          if (Hr(null, U2, null), ua()) {
            if (qe === null)
              throw Error("Should be working on an effect.");
            var w = Fr();
            xu(qe, w), qe = qe.nextEffect;
          }
        while (qe !== null);
        Mv = null, IE(), qe = p;
        do
          if (Hr(null, j2, null, e, t), ua()) {
            if (qe === null)
              throw Error("Should be working on an effect.");
            var O = Fr();
            xu(qe, O), qe = qe.nextEffect;
          }
        while (qe !== null);
        Fk(e.containerInfo), e.current = a, qe = p;
        do
          if (Hr(null, H2, null, e, l), ua()) {
            if (qe === null)
              throw Error("Should be working on an effect.");
            var D = Fr();
            xu(qe, D), qe = qe.nextEffect;
          }
        while (qe !== null);
        qe = null, FM(), $m(b), pt = y;
      } else
        e.current = a, IE();
      var X = wl;
      if (wl)
        wl = !1, cf = e, Tb = l, Rv = t;
      else
        for (qe = p; qe !== null; ) {
          var H = qe.nextEffect;
          qe.nextEffect = null, qe.flags & Rn && Fw(qe), qe = H;
        }
      if (f = e.pendingLanes, f !== ue) {
        if (Hs !== null) {
          var J = Hs;
          Hs = null;
          for (var fe = 0; fe < J.length; fe++)
            Uw(e, J[fe], e.memoizedInteractions);
        }
        Tu(e, f);
      } else
        sf = null;
      if (X || Hw(e, l), f === Ft ? e === kb ? _v++ : (_v = 0, kb = e) : _v = 0, IM(a.stateNode, t), m2(), hi(e, ta()), Nm) {
        Nm = !1;
        var _e = xb;
        throw xb = null, _e;
      }
      return (pt & bb) !== Xn || Po(), null;
    }
    function U2() {
      for (; qe !== null; ) {
        var e = qe.alternate;
        !Lm && Mv !== null && ((qe.flags & Rn) !== un ? zp(qe, Mv) && (Lm = !0) : qe.tag === U && v2(e, qe) && zp(qe, Mv) && (Lm = !0));
        var t = qe.flags;
        (t & ei) !== un && (vn(qe), e2(e, qe), Nn()), (t & ql) !== un && (wl || (wl = !0, gu(bl, function() {
          return jo(), null;
        }))), qe = qe.nextEffect;
      }
    }
    function j2(e, t) {
      for (; qe !== null; ) {
        vn(qe);
        var a = qe.flags;
        if (a & Sr && p2(qe), a & Cr) {
          var l = qe.alternate;
          l !== null && o2(l);
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
            pb(p, qe);
            break;
          }
          case ba: {
            qe.flags &= ~ba;
            break;
          }
          case Lp: {
            qe.flags &= ~ba;
            var y = qe.alternate;
            pb(y, qe);
            break;
          }
          case vt: {
            var b = qe.alternate;
            pb(b, qe);
            break;
          }
          case Rn: {
            c2(e, qe);
            break;
          }
        }
        Nn(), qe = qe.nextEffect;
      }
    }
    function H2(e, t) {
      for (; qe !== null; ) {
        vn(qe);
        var a = qe.flags;
        if (a & (vt | po)) {
          var l = qe.alternate;
          a2(e, l, qe);
        }
        a & Cr && i2(qe), Nn(), qe = qe.nextEffect;
      }
    }
    function jo() {
      if (Rv !== Qy) {
        var e = Rv > bl ? bl : Rv;
        return Rv = Qy, Ms(e, V2);
      }
      return !1;
    }
    function F2(e, t) {
      Rb.push(t, e), wl || (wl = !0, gu(bl, function() {
        return jo(), null;
      }));
    }
    function Dw(e, t) {
      _b.push(t, e);
      {
        e.flags |= Yl;
        var a = e.alternate;
        a !== null && (a.flags |= Yl);
      }
      wl || (wl = !0, gu(bl, function() {
        return jo(), null;
      }));
    }
    function B2(e) {
      var t = e.create;
      e.destroy = t();
    }
    function V2() {
      if (cf === null)
        return !1;
      var e = cf, t = Tb;
      if (cf = null, Tb = ue, (pt & (ja | $o)) !== Xn)
        throw Error("Cannot flush passive effects while already rendering.");
      Mb = !0;
      var a = pt;
      pt |= $o;
      var l = zm(e), f = _b;
      _b = [];
      for (var p = 0; p < f.length; p += 2) {
        var y = f[p], b = f[p + 1], w = y.destroy;
        y.destroy = void 0;
        {
          b.flags &= ~Yl;
          var O = b.alternate;
          O !== null && (O.flags &= ~Yl);
        }
        if (typeof w == "function") {
          if (vn(b), Hr(null, w, null), ua()) {
            if (b === null)
              throw Error("Should be working on an effect.");
            var D = Fr();
            xu(b, D);
          }
          Nn();
        }
      }
      var X = Rb;
      Rb = [];
      for (var H = 0; H < X.length; H += 2) {
        var J = X[H], fe = X[H + 1];
        {
          if (vn(fe), Hr(null, B2, null, J), ua()) {
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
      return $m(l), Hw(e, t), Mb = !1, pt = a, Po(), Dm = cf === null ? 0 : Dm + 1, !0;
    }
    function Lb(e) {
      return sf !== null && sf.has(e);
    }
    function W2(e) {
      sf === null ? sf = /* @__PURE__ */ new Set([e]) : sf.add(e);
    }
    function K2(e) {
      Nm || (Nm = !0, xb = e);
    }
    var G2 = K2;
    function Aw(e, t, a) {
      var l = cb(a, t), f = sw(e, l, Ft);
      bu(e, f);
      var p = Ha(), y = Pm(e, Ft);
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
          if (typeof l.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && !Lb(f)) {
            var p = cb(t, e), y = cw(a, p, Ft);
            bu(a, y);
            var b = Ha(), w = Pm(a, Ft);
            if (w !== null)
              su(w, Ft, b), hi(w, b), Tu(w, Ft);
            else if (typeof f.componentDidCatch == "function" && !Lb(f))
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
    function q2(e, t, a) {
      var l = e.pingCache;
      l !== null && l.delete(t);
      var f = Ha();
      _d(e, a), fa === e && xo(da, a) && (Kr === _m || Kr === Rm && xd(da) && ta() - wb < Cw ? df(e, ue) : Om = tn(Om, a)), hi(e, f), Tu(e, a);
    }
    function Y2(e, t) {
      t === qn && (t = w2(e));
      var a = Ha(), l = Pm(e, t);
      l !== null && (su(l, t, a), hi(l, a), Tu(l, t));
    }
    function Q2(e, t) {
      var a = qn, l;
      l = e.stateNode, l !== null && l.delete(t), Y2(e, a);
    }
    function X2(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : g2(e / 1960) * 1960;
    }
    function Z2() {
      if (_v > S2)
        throw _v = 0, kb = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Dm > C2 && (Dm = 0, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function J2() {
      Fi.flushLegacyContextWarning(), Fi.flushPendingUnsafeLifecycleWarnings();
    }
    var Um = null;
    function Lw(e) {
      {
        if ((pt & ja) !== Xn || !(e.mode & (Ta | Os)))
          return;
        var t = e.tag;
        if (t !== M && t !== _ && t !== E && t !== x && t !== I && t !== Y && t !== q && t !== se)
          return;
        var a = Re(e.type) || "ReactComponent";
        if (Um !== null) {
          if (Um.has(a))
            return;
          Um.add(a);
        } else
          Um = /* @__PURE__ */ new Set([a]);
        var l = dt;
        try {
          vn(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? vn(e) : Nn();
        }
      }
    }
    var jm = null;
    function eN(e) {
      {
        var t = e.tag;
        if (t !== _ && t !== E && t !== x && t !== I && t !== Y && t !== q && t !== se || (e.flags & Yl) !== un)
          return;
        var a = Re(e.type) || "ReactComponent";
        if (jm !== null) {
          if (jm.has(a))
            return;
          jm.add(a);
        } else
          jm = /* @__PURE__ */ new Set([a]);
        if (!Mb) {
          var l = dt;
          try {
            vn(e), h("Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in %s.", t === E ? "the componentWillUnmount method" : "a useEffect cleanup function");
          } finally {
            l ? vn(e) : Nn();
          }
        }
      }
    }
    var Pb;
    {
      var tN = null;
      Pb = function(e, t, a) {
        var l = Kw(tN, t);
        try {
          return nw(e, t, a);
        } catch (p) {
          if (p !== null && typeof p == "object" && typeof p.then == "function")
            throw p;
          if (Fh(), SE(), uw(t), Kw(t, l), t.mode & Ua && Q0(t), Hr(null, nw, null, e, t, a), ua()) {
            var f = Fr();
            throw f;
          } else
            throw p;
        }
      };
    }
    var Pw = !1, Ib;
    Ib = /* @__PURE__ */ new Set();
    function nN(e) {
      if ($t && (pt & ja) !== Xn && !CO())
        switch (e.tag) {
          case x:
          case I:
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
    var Hm = {
      current: !1
    };
    function Iw(e) {
      if (gb.current === !0 && Hm.current !== !0) {
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
    function zw(e) {
      (e.mode & Qn) !== Un && gb.current === !1 && Hm.current === !1 && h(`An update to %s ran an effect, but was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Re(e.type));
    }
    function rN(e) {
      if (pt === Xn && gb.current === !1 && Hm.current === !1) {
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
    var aN = rN, $w = !1;
    function iN(e) {
      $w === !1 && s.unstable_flushAllWithoutAsserting === void 0 && (e.mode & Ta || e.mode & Os) && ($w = !0, h(`In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://reactjs.org/link/mock-scheduler`));
    }
    function zb(e, t) {
      return t * 1e3 + e.interactionThreadID;
    }
    function Fm(e) {
      Hs === null ? Hs = [e] : Hs.push(e);
    }
    function Uw(e, t, a) {
      if (a.size > 0) {
        var l = e.pendingInteractionMap, f = l.get(t);
        f != null ? a.forEach(function(b) {
          f.has(b) || b.__count++, f.add(b);
        }) : (l.set(t, new Set(a)), a.forEach(function(b) {
          b.__count++;
        }));
        var p = c.__subscriberRef.current;
        if (p !== null) {
          var y = zb(e, t);
          p.onWorkScheduled(a, y);
        }
      }
    }
    function Tu(e, t) {
      Uw(e, t, c.__interactionsRef.current);
    }
    function jw(e, t) {
      var a = /* @__PURE__ */ new Set();
      if (e.pendingInteractionMap.forEach(function(p, y) {
        wr(t, y) && p.forEach(function(b) {
          return a.add(b);
        });
      }), e.memoizedInteractions = a, a.size > 0) {
        var l = c.__subscriberRef.current;
        if (l !== null) {
          var f = zb(e, t);
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
    function Hw(e, t) {
      var a = e.pendingLanes, l;
      try {
        if (l = c.__subscriberRef.current, l !== null && e.memoizedInteractions.size > 0) {
          var f = zb(e, t);
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
    function oN() {
      return lN > 0;
    }
    var lN = 0;
    function Fw(e) {
      e.sibling = null, e.stateNode = null;
    }
    var mi = null, vf = null, uN = function(e) {
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
                $$typeof: Ue,
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
    function Bw(e, t) {
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
          case I: {
            (p === Ue || p === At) && (f = !0);
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
    function Vw(e) {
      {
        if (mi === null || typeof WeakSet != "function")
          return;
        vf === null && (vf = /* @__PURE__ */ new WeakSet()), vf.add(e);
      }
    }
    var sN = function(e, t) {
      {
        if (mi === null)
          return;
        var a = t.staleFamilies, l = t.updatedFamilies;
        jo(), Nb(function() {
          jb(e.current, l, a);
        });
      }
    }, cN = function(e, t) {
      {
        if (e.context !== $a)
          return;
        jo(), Nb(function() {
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
          case I:
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
    var fN = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), l = new Set(t.map(function(f) {
          return f.current;
        }));
        return Hb(e.current, l, a), a;
      }
    };
    function Hb(e, t, a) {
      {
        var l = e.child, f = e.sibling, p = e.tag, y = e.type, b = null;
        switch (p) {
          case x:
          case q:
          case E:
            b = y;
            break;
          case I:
            b = y.render;
            break;
        }
        var w = !1;
        b !== null && t.has(b) && (w = !0), w ? dN(e, a) : l !== null && Hb(l, t, a), f !== null && Hb(f, t, a);
      }
    }
    function dN(e, t) {
      {
        var a = vN(e, t);
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
    function vN(e, t) {
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
    var Fb;
    {
      Fb = !1;
      try {
        var Ww = Object.preventExtensions({});
      } catch (e) {
        Fb = !0;
      }
    }
    var pN = 1;
    function hN(e, t, a, l) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = un, this.nextEffect = null, this.firstEffect = null, this.lastEffect = null, this.lanes = ue, this.childLanes = ue, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugID = pN++, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Fb && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Fa = function(e, t, a, l) {
      return new hN(e, t, a, l);
    };
    function Bb(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function mN(e) {
      return typeof e == "function" && !Bb(e) && e.defaultProps === void 0;
    }
    function gN(e) {
      if (typeof e == "function")
        return Bb(e) ? E : x;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ue)
          return I;
        if (t === Ge)
          return Y;
      }
      return M;
    }
    function Bs(e, t) {
      var a = e.alternate;
      a === null ? (a = Fa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugID = e._debugID, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = un, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, a.actualDuration = 0, a.actualStartTime = -1), a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
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
        case I:
          a.type = Ub(e.type);
          break;
      }
      return a;
    }
    function yN(e, t) {
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
    function bN(e) {
      var t;
      return e === MC ? t = Os | Ta | Qn : e === kC ? t = Ta | Qn : t = Un, AM && (t |= Ua), Fa(_, null, null, t);
    }
    function Vb(e, t, a, l, f, p) {
      var y = M, b = e;
      if (typeof e == "function")
        Bb(e) ? (y = E, b = $b(b)) : b = pf(b);
      else if (typeof e == "string")
        y = L;
      else
        e:
          switch (e) {
            case jt:
              return Vs(a.children, f, p, t);
            case oa:
              y = A, f |= VM;
              break;
            case ir:
              y = A, f |= Qn;
              break;
            case Bt:
              return SN(a, f, p, t);
            case St:
              return CN(a, f, p, t);
            case Oe:
              return EN(a, f, p, t);
            case qr:
              return Kb(a, f, p, t);
            case Ln:
              return wN(a, f, p, t);
            case An:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case dn:
                    y = $;
                    break e;
                  case Ht:
                    y = G;
                    break e;
                  case Ue:
                    y = I, b = Ub(b);
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
      var D = Fa(y, a, t, f);
      return D.elementType = e, D.type = b, D.lanes = p, D._debugOwner = l, D;
    }
    function Wb(e, t, a) {
      var l = null;
      l = e._owner;
      var f = e.type, p = e.key, y = e.props, b = Vb(f, p, y, l, t, a);
      return b._debugSource = e._source, b._debugOwner = e._owner, b;
    }
    function Vs(e, t, a, l) {
      var f = Fa(B, e, l, t);
      return f.lanes = a, f;
    }
    function SN(e, t, a, l) {
      typeof e.id != "string" && h('Profiler must specify an "id" as a prop');
      var f = Fa(P, e, l, t | Ua);
      return f.elementType = Bt, f.type = Bt, f.lanes = a, f.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, f;
    }
    function CN(e, t, a, l) {
      var f = Fa(U, e, l, t);
      return f.type = St, f.elementType = St, f.lanes = a, f;
    }
    function EN(e, t, a, l) {
      var f = Fa(ge, e, l, t);
      return f.type = Oe, f.elementType = Oe, f.lanes = a, f;
    }
    function Kb(e, t, a, l) {
      var f = Fa(de, e, l, t);
      return f.type = qr, f.elementType = qr, f.lanes = a, f;
    }
    function wN(e, t, a, l) {
      var f = Fa(Ce, e, l, t);
      return f.type = Ln, f.elementType = Ln, f.lanes = a, f;
    }
    function Gb(e, t, a) {
      var l = Fa(z, e, null, t);
      return l.lanes = a, l;
    }
    function xN() {
      var e = Fa(L, null, null, Un);
      return e.elementType = "DELETED", e.type = "DELETED", e;
    }
    function qb(e, t, a) {
      var l = e.children !== null ? e.children : [], f = Fa(N, l, e.key, t);
      return f.lanes = a, f.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, f;
    }
    function Kw(e, t) {
      return e === null && (e = Fa(M, null, null, Un)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.nextEffect = t.nextEffect, e.firstEffect = t.firstEffect, e.lastEffect = t.lastEffect, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugID = t._debugID, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function TN(e, t, a) {
      switch (this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = jy, this.context = null, this.pendingContext = null, this.hydrate = a, this.callbackNode = null, this.callbackPriority = Pi, this.eventTimes = kc(ue), this.expirationTimes = kc(kn), this.pendingLanes = ue, this.suspendedLanes = ue, this.pingedLanes = ue, this.expiredLanes = ue, this.mutableReadLanes = ue, this.finishedLanes = ue, this.entangledLanes = ue, this.entanglements = kc(ue), this.mutableSourceEagerHydrationData = null, this.interactionThreadID = c.unstable_getThreadID(), this.memoizedInteractions = /* @__PURE__ */ new Set(), this.pendingInteractionMap = /* @__PURE__ */ new Map(), t) {
        case kC:
          this._debugRootType = "createBlockingRoot()";
          break;
        case MC:
          this._debugRootType = "createRoot()";
          break;
        case Gy:
          this._debugRootType = "createLegacyRoot()";
          break;
      }
    }
    function RN(e, t, a, l) {
      var f = new TN(e, t, a), p = bN(t);
      return f.current = p, p.stateNode = f, r0(p), f;
    }
    function _N(e, t) {
      var a = t._getVersion, l = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, l] : e.mutableSourceEagerHydrationData.push(t, l);
    }
    function kN(e, t, a) {
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
    var Yb, Qb;
    Yb = !1, Qb = {};
    function MN(e) {
      if (!e)
        return $a;
      var t = Oi(e), a = DM(t);
      if (t.tag === E) {
        var l = t.type;
        if (Ao(l))
          return RC(t, l, a);
      }
      return a;
    }
    function ON(e, t) {
      {
        var a = Oi(e);
        if (a === void 0)
          throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(e));
        var l = od(a);
        if (l === null)
          return null;
        if (l.mode & Qn) {
          var f = Re(a.type) || "Component";
          if (!Qb[f]) {
            Qb[f] = !0;
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
    function NN(e, t, a, l) {
      return RN(e, t, a);
    }
    function Nv(e, t, a, l) {
      PM(t, e);
      var f = t.current, p = Ha();
      typeof jest != "undefined" && (iN(f), Iw(f));
      var y = wu(f), b = MN(a);
      t.context === null ? t.context = b : t.pendingContext = b, $t && dt !== null && !Yb && (Yb = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Re(dt.type) || "Unknown"));
      var w = yu(p, y);
      return w.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), w.callback = l), bu(f, w), ra(f, y, p), y;
    }
    function Xb(e) {
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
      a !== null && a.dehydrated !== null && (a.retryLane = $i(a.retryLane, t));
    }
    function Zb(e, t) {
      Gw(e, t);
      var a = e.alternate;
      a && Gw(a, t);
    }
    function DN(e) {
      if (e.tag === U) {
        var t = Ha(), a = sl;
        ra(e, a, t), Zb(e, a);
      }
    }
    function AN(e) {
      if (e.tag === U) {
        var t = Ha(), a = Tc;
        ra(e, a, t), Zb(e, a);
      }
    }
    function LN(e) {
      if (e.tag === U) {
        var t = Ha(), a = wu(e);
        ra(e, a, t), Zb(e, a);
      }
    }
    function PN(e, t) {
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
    function IN(e) {
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
      }, Jb = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Qw = function(e, t, a, l) {
        var f = Jb(e, t);
        if (f !== null) {
          var p = sx(f.memoizedState, a, l);
          f.memoizedState = p, f.baseState = p, e.memoizedProps = o({}, e.memoizedProps), ra(e, Ft, kn);
        }
      }, Xw = function(e, t, a) {
        var l = Jb(e, t);
        if (l !== null) {
          var f = ix(l.memoizedState, a);
          l.memoizedState = f, l.baseState = f, e.memoizedProps = o({}, e.memoizedProps), ra(e, Ft, kn);
        }
      }, Zw = function(e, t, a, l) {
        var f = Jb(e, t);
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
    function zN(e) {
      var t = od(e);
      return t === null ? null : t.stateNode;
    }
    function $N(e) {
      return null;
    }
    function UN() {
      return dt;
    }
    function jN(e) {
      var t = e.findFiberByHostInstance, a = d.ReactCurrentDispatcher;
      return LM({
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
        findHostInstanceByFiber: zN,
        findFiberByHostInstance: t || $N,
        // React Refresh
        findHostInstancesForRefresh: fN,
        scheduleRefresh: sN,
        scheduleRoot: cN,
        setRefreshHandler: uN,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: UN
      });
    }
    function e1(e, t, a) {
      this._internalRoot = HN(e, t, a);
    }
    e1.prototype.render = function(e) {
      var t = this._internalRoot;
      {
        typeof arguments[1] == "function" && h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
        var a = t.containerInfo;
        if (a.nodeType !== Ur) {
          var l = qw(t.current);
          l && l.parentNode !== a && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Nv(e, t, null, null);
    }, e1.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot, t = e.containerInfo;
      Nv(null, e, null, function() {
        SC(t);
      });
    };
    function HN(e, t, a) {
      var l = a != null && a.hydrate === !0;
      a != null && a.hydrationOptions;
      var f = a != null && a.hydrationOptions != null && a.hydrationOptions.mutableSources || null, p = NN(e, t, l);
      NM(p.current, e), e.nodeType;
      {
        var y = e.nodeType === Ur ? e.parentNode : e;
        VS(y);
      }
      if (f)
        for (var b = 0; b < f.length; b++) {
          var w = f[b];
          _N(p, w);
        }
      return p;
    }
    function FN(e, t) {
      return new e1(e, Gy, t);
    }
    function hf(e) {
      return !!(e && (e.nodeType === ga || e.nodeType === lo || e.nodeType === lp || e.nodeType === Ur && e.nodeValue === " react-mount-point-unstable "));
    }
    var BN = d.ReactCurrentOwner, cx, fx = !1;
    cx = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ur) {
        var t = qw(e._reactRootContainer._internalRoot.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, l = Bm(e), f = !!(l && hu(l));
      f && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ga && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Bm(e) {
      return e ? e.nodeType === lo ? e.documentElement : e.firstChild : null;
    }
    function VN(e) {
      var t = Bm(e);
      return !!(t && t.nodeType === ga && t.hasAttribute(Dt));
    }
    function WN(e, t) {
      var a = t || VN(e);
      if (!a)
        for (var l = !1, f; f = e.lastChild; )
          !l && f.nodeType === ga && f.hasAttribute(Dt) && (l = !0, h("render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")), e.removeChild(f);
      return a && !t && !fx && (fx = !0, m("render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v18. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.")), FN(e, a ? {
        hydrate: !0
      } : void 0);
    }
    function KN(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Vm(e, t, a, l, f) {
      cx(a), KN(f === void 0 ? null : f, "render");
      var p = a._reactRootContainer, y;
      if (p) {
        if (y = p._internalRoot, typeof f == "function") {
          var w = f;
          f = function() {
            var O = Xb(y);
            w.call(O);
          };
        }
        Nv(t, y, e, f);
      } else {
        if (p = a._reactRootContainer = WN(a, l), y = p._internalRoot, typeof f == "function") {
          var b = f;
          f = function() {
            var O = Xb(y);
            b.call(O);
          };
        }
        Rw(function() {
          Nv(t, y, e, f);
        });
      }
      return Xb(y);
    }
    function GN(e) {
      {
        var t = BN.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Re(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ga ? e : ON(e, "findDOMNode");
    }
    function qN(e, t, a) {
      if (!hf(t))
        throw Error("Target container is not a DOM element.");
      {
        var l = _h(t) && t._reactRootContainer === void 0;
        l && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?");
      }
      return Vm(null, e, t, !0, a);
    }
    function YN(e, t, a) {
      if (!hf(t))
        throw Error("Target container is not a DOM element.");
      {
        var l = _h(t) && t._reactRootContainer === void 0;
        l && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Vm(null, e, t, !1, a);
    }
    function QN(e, t, a, l) {
      if (!hf(a))
        throw Error("Target container is not a DOM element.");
      if (!(e != null && Ap(e)))
        throw Error("parentComponent must be a valid React Component");
      return Vm(e, t, a, !1, l);
    }
    function XN(e) {
      if (!hf(e))
        throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = _h(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = Bm(e), l = a && !hu(a);
          l && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Rw(function() {
          Vm(null, null, e, !1, function() {
            e._reactRootContainer = null, SC(e);
          });
        }), !0;
      } else {
        {
          var f = Bm(e), p = !!(f && hu(f)), y = e.nodeType === ga && hf(e.parentNode) && !!e.parentNode._reactRootContainer;
          p && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", y ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    bc(DN), $p(AN), Ql(LN), tl(PN);
    var dx = !1;
    (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Xf(Dk), vc(Tw, k2, T2, _2);
    function vx(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!hf(t))
        throw Error("Target container is not a DOM element.");
      return kN(e, t, null, a);
    }
    function ZN(e, t, a, l) {
      return QN(e, t, a, l);
    }
    function JN(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      return dx || (dx = !0, m('The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 18+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.')), vx(e, t, a);
    }
    var eD = {
      // Keep in sync with ReactTestUtils.js, and ReactTestUtilsAct.js.
      // This is an array for better minification.
      Events: [
        hu,
        Kc,
        kh,
        Vl,
        Zf,
        jo,
        // TODO: This is related to `act`, not events. Move to separate key?
        Hm
      ]
    }, tD = jN({
      findFiberByHostInstance: _s,
      bundleType: 1,
      version: BC,
      rendererPackageName: "react-dom"
    });
    if (!tD && Xe && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var px = window.location.protocol;
      /^(https?|file):$/.test(px) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (px === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Va.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eD, Va.createPortal = vx, Va.findDOMNode = GN, Va.flushSync = Nb, Va.hydrate = qN, Va.render = YN, Va.unmountComponentAtNode = XN, Va.unstable_batchedUpdates = Tw, Va.unstable_createPortal = JN, Va.unstable_renderSubtreeIntoContainer = ZN, Va.version = BC;
  }()), Va;
}
function lR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(lR);
    } catch (r) {
      console.error(r);
    }
  }
}
process.env.NODE_ENV === "production" ? (lR(), R1.exports = PA()) : R1.exports = UA();
var Tg = R1.exports;
const jA = /* @__PURE__ */ QT(Tg);
function dg(r) {
  return r instanceof HTMLElement || r instanceof SVGElement;
}
function ag(r) {
  return dg(r) ? r : r instanceof Oa.Component ? jA.findDOMNode(r) : null;
}
function Rg(r, o, s) {
  var c = T.useRef({});
  return (!("value" in c.current) || s(c.current.condition, o)) && (c.current.value = r(), c.current.condition = o), c.current.value;
}
function mS(r, o) {
  typeof r == "function" ? r(o) : Vn(r) === "object" && r && "current" in r && (r.current = o);
}
function uR() {
  for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
    o[s] = arguments[s];
  var c = o.filter(function(d) {
    return d;
  });
  return c.length <= 1 ? c[0] : function(d) {
    o.forEach(function(m) {
      mS(m, d);
    });
  };
}
function _g() {
  for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
    o[s] = arguments[s];
  return Rg(function() {
    return uR.apply(void 0, o);
  }, o, function(c, d) {
    return c.length !== d.length || c.every(function(m, h) {
      return m !== d[h];
    });
  });
}
function kg(r) {
  var o, s, c = nR.isMemo(r) ? r.type.type : r.type;
  return !(typeof c == "function" && !((o = c.prototype) !== null && o !== void 0 && o.render) || typeof r == "function" && !((s = r.prototype) !== null && s !== void 0 && s.render));
}
var _1 = /* @__PURE__ */ T.createContext(null);
function HA(r) {
  var o = r.children, s = r.onBatchResize, c = T.useRef(0), d = T.useRef([]), m = T.useContext(_1), h = T.useCallback(function(C, x, E) {
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
  return /* @__PURE__ */ T.createElement(_1.Provider, {
    value: h
  }, o);
}
var sR = function() {
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
}(), k1 = typeof window != "undefined" && typeof document != "undefined" && window.document === document, vg = function() {
  return typeof global != "undefined" && global.Math === Math ? global : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")();
}(), FA = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(vg) : function(r) {
    return setTimeout(function() {
      return r(Date.now());
    }, 1e3 / 60);
  };
}(), BA = 2;
function VA(r, o) {
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
      if (x - d < BA)
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
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = VA(this.refresh.bind(this), WA);
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
      !k1 || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), GA ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, r.prototype.disconnect_ = function() {
      !k1 || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, r.prototype.onTransitionEnd_ = function(o) {
      var s = o.propertyName, c = s === void 0 ? "" : s, d = KA.some(function(m) {
        return !!~c.indexOf(m);
      });
      d && this.refresh();
    }, r.getInstance = function() {
      return this.instance_ || (this.instance_ = new r()), this.instance_;
    }, r.instance_ = null, r;
  }()
), cR = function(r, o) {
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
}, fR = Mg(0, 0, 0, 0);
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
  return Mg(0, 0, o.width, o.height);
}
function XA(r) {
  var o = r.clientWidth, s = r.clientHeight;
  if (!o && !s)
    return fR;
  var c = kf(r).getComputedStyle(r), d = YA(c), m = d.left + d.right, h = d.top + d.bottom, C = pg(c.width), x = pg(c.height);
  if (c.boxSizing === "border-box" && (Math.round(C + m) !== o && (C -= Mx(c, "left", "right") + m), Math.round(x + h) !== s && (x -= Mx(c, "top", "bottom") + h)), !JA(r)) {
    var E = Math.round(C + m) - o, M = Math.round(x + h) - s;
    Math.abs(E) !== 1 && (C -= E), Math.abs(M) !== 1 && (x -= M);
  }
  return Mg(d.left, d.top, C, x);
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
  return k1 ? ZA(r) ? QA(r) : XA(r) : fR;
}
function tL(r) {
  var o = r.x, s = r.y, c = r.width, d = r.height, m = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object, h = Object.create(m.prototype);
  return cR(h, {
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
function Mg(r, o, s, c) {
  return { x: r, y: o, width: s, height: c };
}
var nL = (
  /** @class */
  function() {
    function r(o) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Mg(0, 0, 0, 0), this.target = o;
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
      cR(this, { target: o, contentRect: c });
    }
    return r;
  }()
), aL = (
  /** @class */
  function() {
    function r(o, s, c) {
      if (this.activeObservations_ = [], this.observations_ = new sR(), typeof o != "function")
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
), dR = typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : new sR(), vR = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(o) {
      if (!(this instanceof r))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var s = qA.getInstance(), c = new aL(o, s, this);
      dR.set(this, c);
    }
    return r;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(r) {
  vR.prototype[r] = function() {
    var o;
    return (o = dR.get(this))[r].apply(o, arguments);
  };
});
var iL = function() {
  return typeof vg.ResizeObserver != "undefined" ? vg.ResizeObserver : vR;
}(), Nl = /* @__PURE__ */ new Map();
function pR(r) {
  r.forEach(function(o) {
    var s, c = o.target;
    (s = Nl.get(c)) === null || s === void 0 || s.forEach(function(d) {
      return d(c);
    });
  });
}
var hR = new iL(pR);
process.env.NODE_ENV;
process.env.NODE_ENV;
function oL(r, o) {
  Nl.has(r) || (Nl.set(r, /* @__PURE__ */ new Set()), hR.observe(r)), Nl.get(r).add(o);
}
function lL(r, o) {
  Nl.has(r) && (Nl.get(r).delete(o), Nl.get(r).size || (hR.unobserve(r), Nl.delete(r)));
}
function Zi(r, o) {
  if (!(r instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
function Ox(r, o) {
  for (var s = 0; s < o.length; s++) {
    var c = o[s];
    c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(r, ZT(c.key), c);
  }
}
function Ji(r, o, s) {
  return o && Ox(r.prototype, o), s && Ox(r, s), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function M1(r, o) {
  return M1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, d) {
    return c.__proto__ = d, c;
  }, M1(r, o);
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
  }), o && M1(r, o);
}
function Nu(r) {
  return Nu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(s) {
    return s.__proto__ || Object.getPrototypeOf(s);
  }, Nu(r);
}
function Og() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (o) {
  }
  return (Og = function() {
    return !!r;
  })();
}
function O1(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function gS(r, o) {
  if (o && (Vn(o) === "object" || typeof o == "function"))
    return o;
  if (o !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return O1(r);
}
function Ng(r) {
  var o = Og();
  return function() {
    var c = Nu(r), d;
    if (o) {
      var m = Nu(this).constructor;
      d = Reflect.construct(c, arguments, m);
    } else
      d = c.apply(this, arguments);
    return gS(this, d);
  };
}
var uL = /* @__PURE__ */ function(r) {
  Nf(s, r);
  var o = Ng(s);
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
  var s = r.children, c = r.disabled, d = T.useRef(null), m = T.useRef(null), h = T.useContext(_1), C = typeof s == "function", x = C ? s(d) : s, E = T.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), M = !C && /* @__PURE__ */ T.isValidElement(x) && kg(x), _ = M ? x.ref : null, N = _g(_, d), L = function() {
    var G;
    return ag(d.current) || // Support `nativeElement` format
    (d.current && Vn(d.current) === "object" ? ag((G = d.current) === null || G === void 0 ? void 0 : G.nativeElement) : null) || ag(m.current);
  };
  T.useImperativeHandle(o, function() {
    return L();
  });
  var z = T.useRef(r);
  z.current = r;
  var B = T.useCallback(function(A) {
    var G = z.current, $ = G.onResize, I = G.data, P = A.getBoundingClientRect(), U = P.width, Y = P.height, q = A.offsetWidth, ne = A.offsetHeight, oe = Math.floor(U), re = Math.floor(Y);
    if (E.current.width !== oe || E.current.height !== re || E.current.offsetWidth !== q || E.current.offsetHeight !== ne) {
      var ge = {
        width: oe,
        height: re,
        offsetWidth: q,
        offsetHeight: ne
      };
      E.current = ge;
      var pe = q === Math.round(U) ? U : q, te = ne === Math.round(Y) ? Y : ne, se = Te(Te({}, ge), {}, {
        offsetWidth: pe,
        offsetHeight: te
      });
      h == null || h(se, A, I), $ && Promise.resolve().then(function() {
        $(se, A);
      });
    }
  }, []);
  return T.useEffect(function() {
    var A = L();
    return A && !c && oL(A, B), function() {
      return lL(A, B);
    };
  }, [d.current, c]), /* @__PURE__ */ T.createElement(uL, {
    ref: m
  }, M ? /* @__PURE__ */ T.cloneElement(x, {
    ref: N
  }) : x);
}
var mR = /* @__PURE__ */ T.forwardRef(sL);
process.env.NODE_ENV !== "production" && (mR.displayName = "SingleObserver");
var cL = "rc-observer-key";
function fL(r, o) {
  var s = r.children, c = typeof s == "function" ? [s] : Vv(s);
  return process.env.NODE_ENV !== "production" && (c.length > 1 ? _f(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : c.length === 0 && _f(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), c.map(function(d, m) {
    var h = (d == null ? void 0 : d.key) || "".concat(cL, "-").concat(m);
    return /* @__PURE__ */ T.createElement(mR, an({}, r, {
      key: h,
      ref: m === 0 ? o : void 0
    }), d);
  });
}
var Df = /* @__PURE__ */ T.forwardRef(fL);
process.env.NODE_ENV !== "production" && (Df.displayName = "ResizeObserver");
Df.Collection = HA;
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
  var s = r.prefixCls, c = r.invalidate, d = r.item, m = r.renderItem, h = r.responsive, C = r.responsiveDisabled, x = r.registerSize, E = r.itemKey, M = r.className, _ = r.style, N = r.children, L = r.display, z = r.order, B = r.component, A = B === void 0 ? "div" : B, G = Fn(r, dL), $ = h && !L;
  function I(ne) {
    x(E, ne);
  }
  T.useEffect(function() {
    return function() {
      I(null);
    };
  }, []);
  var P = m && d !== mf ? m(d) : N, U;
  c || (U = {
    opacity: $ ? 0 : 1,
    height: $ ? 0 : mf,
    overflowY: $ ? "hidden" : mf,
    order: h ? z : mf,
    pointerEvents: $ ? "none" : mf,
    position: $ ? "absolute" : mf
  });
  var Y = {};
  $ && (Y["aria-hidden"] = !0);
  var q = /* @__PURE__ */ T.createElement(A, an({
    className: wn(!c && s, M),
    style: Te(Te({}, U), _)
  }, Y, G, {
    ref: o
  }), P);
  return h && (q = /* @__PURE__ */ T.createElement(Df, {
    onResize: function(oe) {
      var re = oe.offsetWidth;
      I(re);
    },
    disabled: C
  }, q)), q;
}
var Uv = /* @__PURE__ */ T.forwardRef(vL);
Uv.displayName = "Item";
function Bo(r) {
  var o = T.useRef();
  o.current = r;
  var s = T.useCallback(function() {
    for (var c, d = arguments.length, m = new Array(d), h = 0; h < d; h++)
      m[h] = arguments[h];
    return (c = o.current) === null || c === void 0 ? void 0 : c.call.apply(c, [o].concat(m));
  }, []);
  return s;
}
var gR = function(o) {
  return +setTimeout(o, 16);
}, yR = function(o) {
  return clearTimeout(o);
};
typeof window != "undefined" && "requestAnimationFrame" in window && (gR = function(o) {
  return window.requestAnimationFrame(o);
}, yR = function(o) {
  return window.cancelAnimationFrame(o);
});
var Ax = 0, Dg = /* @__PURE__ */ new Map();
function bR(r) {
  Dg.delete(r);
}
var bi = function(o) {
  var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Ax += 1;
  var c = Ax;
  function d(m) {
    if (m === 0)
      bR(c), o();
    else {
      var h = gR(function() {
        d(m - 1);
      });
      Dg.set(c, h);
    }
  }
  return d(s), c;
};
bi.cancel = function(r) {
  var o = Dg.get(r);
  return bR(r), yR(o);
};
process.env.NODE_ENV !== "production" && (bi.ids = function() {
  return Dg;
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
      Tg.unstable_batchedUpdates(function() {
        r.current.forEach(function(d) {
          d();
        }), r.current = null;
      });
    })), r.current.push(c);
  };
  return o;
}
function Dv(r, o) {
  var s = T.useState(o), c = xe(s, 2), d = c[0], m = c[1], h = Bo(function(C) {
    r(function() {
      m(C);
    });
  });
  return [d, h];
}
var hg = /* @__PURE__ */ Oa.createContext(null), mL = ["component"], gL = ["className"], yL = ["className"], bL = function(o, s) {
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
  }, /* @__PURE__ */ T.createElement(Uv, an({
    ref: s,
    className: wn(C, E)
  }, x, M)));
}, SR = /* @__PURE__ */ T.forwardRef(bL);
SR.displayName = "RawItem";
var SL = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], CR = "responsive", ER = "invalidate";
function CL(r) {
  return "+ ".concat(r.length, " ...");
}
function EL(r, o) {
  var s = r.prefixCls, c = s === void 0 ? "rc-overflow" : s, d = r.data, m = d === void 0 ? [] : d, h = r.renderItem, C = r.renderRawItem, x = r.itemKey, E = r.itemWidth, M = E === void 0 ? 10 : E, _ = r.ssr, N = r.style, L = r.className, z = r.maxCount, B = r.renderRest, A = r.renderRawRest, G = r.suffix, $ = r.component, I = $ === void 0 ? "div" : $, P = r.itemComponent, U = r.onVisibleChange, Y = Fn(r, SL), q = _ === "full", ne = hL(), oe = Dv(ne, null), re = xe(oe, 2), ge = re[0], pe = re[1], te = ge || 0, se = Dv(ne, /* @__PURE__ */ new Map()), de = xe(se, 2), Ce = de[0], ke = de[1], we = Dv(ne, 0), Ae = xe(we, 2), Ie = Ae[0], ie = Ae[1], he = Dv(ne, 0), Se = xe(he, 2), ze = Se[0], Ke = Se[1], Xe = Dv(ne, 0), it = xe(Xe, 2), Ve = it[0], nt = it[1], Nt = Wo(null), $e = xe(Nt, 2), et = $e[0], Vt = $e[1], Ee = Wo(null), mt = xe(Ee, 2), Dt = mt[0], zt = mt[1], Ut = T.useMemo(function() {
    return Dt === null && q ? Number.MAX_SAFE_INTEGER : Dt || 0;
  }, [Dt, ge]), Ze = Wo(!1), kt = xe(Ze, 2), gt = kt[0], Zt = kt[1], ot = "".concat(c, "-item"), Wt = Math.max(Ie, ze), Qt = z === CR, ut = m.length && Qt, Gt = z === ER, Wn = ut || typeof z == "number" && m.length > z, qt = E1(function() {
    var Oe = m;
    return ut ? ge === null && q ? Oe = m : Oe = m.slice(0, Math.min(m.length, te / M)) : typeof z == "number" && (Oe = m.slice(0, z)), Oe;
  }, [m, M, ge, z, ut]), en = E1(function() {
    return ut ? m.slice(Ut + 1) : m.slice(qt.length);
  }, [m, qt, ut, Ut]), ye = Ml(function(Oe, Ge) {
    var At;
    return typeof x == "function" ? x(Oe) : (At = x && (Oe == null ? void 0 : Oe[x])) !== null && At !== void 0 ? At : Ge;
  }, [x]), Ne = Ml(h || function(Oe) {
    return Oe;
  }, [h]);
  function We(Oe, Ge, At) {
    Dt === Oe && (Ge === void 0 || Ge === et) || (zt(Oe), At || (Zt(Oe < m.length - 1), U == null || U(Oe)), Ge !== void 0 && Vt(Ge));
  }
  function xt(Oe, Ge) {
    pe(Ge.clientWidth);
  }
  function Mt(Oe, Ge) {
    ke(function(At) {
      var mn = new Map(At);
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
    return Ce.get(ye(qt[Oe], Oe));
  }
  ia(function() {
    if (te && typeof Wt == "number" && qt) {
      var Oe = Ve, Ge = qt.length, At = Ge - 1;
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
        if (Oe += An, // Only one means `totalWidth` is the final width
        At === 0 && Oe <= te || // Last two width will be the final width
        mn === At - 1 && Oe + on(At) <= te) {
          We(At, null);
          break;
        } else if (Oe + Wt > te) {
          We(mn - 1, Oe - An - Ve + ze);
          break;
        }
      }
      G && on(0) + Ve > te && Vt(null);
    }
  }, [te, Ce, ze, Ve, ye, qt]);
  var Ot = gt && !!en.length, jt = {};
  et !== null && ut && (jt = {
    position: "absolute",
    left: et,
    top: 0
  });
  var ir = {
    prefixCls: ot,
    responsive: ut,
    component: P,
    invalidate: Gt
  }, Bt = C ? function(Oe, Ge) {
    var At = ye(Oe, Ge);
    return /* @__PURE__ */ T.createElement(hg.Provider, {
      key: At,
      value: Te(Te({}, ir), {}, {
        order: Ge,
        item: Oe,
        itemKey: At,
        registerSize: Mt,
        display: Ge <= Ut
      })
    }, C(Oe, Ge));
  } : function(Oe, Ge) {
    var At = ye(Oe, Ge);
    return /* @__PURE__ */ T.createElement(Uv, an({}, ir, {
      order: Ge,
      key: At,
      item: Oe,
      renderItem: Ne,
      itemKey: At,
      registerSize: Mt,
      display: Ge <= Ut
    }));
  }, dn, Ht = {
    order: Ot ? Ut : Number.MAX_SAFE_INTEGER,
    className: "".concat(ot, "-rest"),
    registerSize: rt,
    display: Ot
  };
  if (A)
    A && (dn = /* @__PURE__ */ T.createElement(hg.Provider, {
      value: Te(Te({}, ir), Ht)
    }, A(en)));
  else {
    var Ue = B || CL;
    dn = /* @__PURE__ */ T.createElement(Uv, an({}, ir, Ht), typeof Ue == "function" ? Ue(en) : Ue);
  }
  var St = /* @__PURE__ */ T.createElement(I, an({
    className: wn(!Gt && c, L),
    style: N,
    ref: o
  }, Y), qt.map(Bt), Wn ? dn : null, G && /* @__PURE__ */ T.createElement(Uv, an({}, ir, {
    responsive: Qt,
    responsiveDisabled: !ut,
    order: Ut,
    className: "".concat(ot, "-suffix"),
    registerSize: st,
    display: !0,
    style: jt
  }), G));
  return Qt && (St = /* @__PURE__ */ T.createElement(Df, {
    onResize: xt,
    disabled: !ut
  }, St)), St;
}
var Dl = /* @__PURE__ */ T.forwardRef(EL);
Dl.displayName = "Overflow";
Dl.Item = SR;
Dl.RESPONSIVE = CR;
Dl.INVALIDATE = ER;
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
function o1(r) {
  return r !== void 0;
}
function jv(r, o) {
  var s = o || {}, c = s.defaultValue, d = s.value, m = s.onChange, h = s.postState, C = Tf(function() {
    return o1(d) ? d : o1(c) ? typeof c == "function" ? c() : c : typeof r == "function" ? r() : r;
  }), x = xe(C, 2), E = x[0], M = x[1], _ = d !== void 0 ? d : E, N = h ? h(_) : _, L = Bo(m), z = Tf([_]), B = xe(z, 2), A = B[0], G = B[1];
  Dx(function() {
    var I = A[0];
    E !== I && L(E, I);
  }, [A]), Dx(function() {
    o1(d) || M(d);
  }, [d]);
  var $ = Bo(function(I, P) {
    M(I, P), G([_], P);
  });
  return [N, $];
}
function yS(r, o) {
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
    if (m && h && Vn(m) === "object" && Vn(h) === "object") {
      var _ = Object.keys(m);
      return _.length !== Object.keys(h).length ? !1 : _.every(function(N) {
        return d(m[N], h[N], E);
      });
    }
    return !1;
  }
  return d(r, o);
}
var wR = /* @__PURE__ */ T.createContext(null);
function xR(r, o) {
  return r === void 0 ? null : "".concat(r, "-").concat(o);
}
function TR(r) {
  var o = T.useContext(wR);
  return xR(o, r);
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
  var o = r.children, s = r.locked, c = Fn(r, wL), d = T.useContext(Xi), m = Rg(function() {
    return xL(d, c);
  }, [d, c], function(h, C) {
    return !s && (h[0] !== C[0] || !yS(h[1], C[1], !0));
  });
  return /* @__PURE__ */ T.createElement(Xi.Provider, {
    value: m
  }, o);
}
var TL = [], RR = /* @__PURE__ */ T.createContext(null);
function Ag() {
  return T.useContext(RR);
}
var _R = /* @__PURE__ */ T.createContext(TL);
function np(r) {
  var o = T.useContext(_R);
  return T.useMemo(function() {
    return r !== void 0 ? [].concat(ar(o), [r]) : o;
  }, [o, r]);
}
var kR = /* @__PURE__ */ T.createContext(null), bS = /* @__PURE__ */ T.createContext({});
const MR = function(r) {
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
  if (MR(r)) {
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
}, N1 = at.LEFT, D1 = at.RIGHT, A1 = at.UP, ig = at.DOWN, og = at.ENTER, OR = at.ESC, Av = at.HOME, Lv = at.END, Px = [A1, ig, N1, D1];
function _L(r, o, s, c) {
  var d, m, h, C, x = "prev", E = "next", M = "children", _ = "parent";
  if (r === "inline" && c === og)
    return {
      inlineTrigger: !0
    };
  var N = (d = {}, tt(d, A1, x), tt(d, ig, E), d), L = (m = {}, tt(m, N1, s ? E : x), tt(m, D1, s ? x : E), tt(m, ig, M), tt(m, og, M), m), z = (h = {}, tt(h, A1, x), tt(h, ig, E), tt(h, og, M), tt(h, OR, _), tt(h, N1, s ? M : _), tt(h, D1, s ? _ : M), h), B = {
    inline: N,
    horizontal: L,
    vertical: z,
    inlineSub: N,
    horizontalSub: z,
    verticalSub: z
  }, A = (C = B["".concat(r).concat(o ? "" : "Sub")]) === null || C === void 0 ? void 0 : C[c];
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
function SS(r, o) {
  var s = RL(r, !0);
  return s.filter(function(c) {
    return o.has(c);
  });
}
function Ix(r, o, s) {
  var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!r)
    return null;
  var d = SS(r, o), m = d.length, h = d.findIndex(function(C) {
    return s === C;
  });
  return c < 0 ? h === -1 ? h = m - 1 : h -= 1 : c > 0 && (h += 1), h = (h + m) % m, d[h];
}
var L1 = function(o, s) {
  var c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
  return o.forEach(function(h) {
    var C = document.querySelector("[data-menu-id='".concat(xR(s, h), "']"));
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
    var z = L.which;
    if ([].concat(Px, [og, OR, Av, Lv]).includes(z)) {
      var B = m(), A = L1(B, c), G = A, $ = G.elements, I = G.key2element, P = G.element2key, U = I.get(o), Y = ML(U, $), q = P.get(Y), ne = _L(r, h(q, !0).length === 1, s, z);
      if (!ne && z !== Av && z !== Lv)
        return;
      (Px.includes(z) || [Av, Lv].includes(z)) && L.preventDefault();
      var oe = function(ke) {
        if (ke) {
          var we = ke, Ae = ke.querySelector("a");
          Ae != null && Ae.getAttribute("href") && (we = Ae);
          var Ie = P.get(ke);
          C(Ie), N(), M.current = bi(function() {
            _.current === Ie && we.focus();
          });
        }
      };
      if ([Av, Lv].includes(z) || ne.sibling || !Y) {
        var re;
        !Y || r === "inline" ? re = d.current : re = kL(Y);
        var ge, pe = SS(re, $);
        z === Av ? ge = pe[0] : z === Lv ? ge = pe[pe.length - 1] : ge = Ix(re, $, Y, ne.offset), oe(ge);
      } else if (ne.inlineTrigger)
        x(q);
      else if (ne.offset > 0)
        x(q, !0), N(), M.current = bi(function() {
          A = L1(B, c);
          var Ce = Y.getAttribute("aria-controls"), ke = document.getElementById(Ce), we = Ix(ke, A.elements);
          oe(we);
        }, 5);
      else if (ne.offset < 0) {
        var te = h(q, !0), se = te[te.length - 2], de = I.get(se);
        x(se, !1), oe(de);
      }
    }
    E == null || E(L);
  };
}
function NL(r) {
  Promise.resolve().then(r);
}
var CS = "__RC_UTIL_PATH_SPLIT__", zx = function(o) {
  return o.join(CS);
}, DL = function(o) {
  return o.split(CS);
}, P1 = "rc-menu-more";
function AL() {
  var r = T.useState({}), o = xe(r, 2), s = o[1], c = Ma(/* @__PURE__ */ new Map()), d = Ma(/* @__PURE__ */ new Map()), m = T.useState([]), h = xe(m, 2), C = h[0], x = h[1], E = Ma(0), M = Ma(!1), _ = function() {
    M.current || s({});
  }, N = Ml(function(I, P) {
    process.env.NODE_ENV !== "production" && pa(!c.current.has(I), "Duplicated key '".concat(I, "' used in Menu by path [").concat(P.join(" > "), "]"));
    var U = zx(P);
    d.current.set(U, I), c.current.set(I, U), E.current += 1;
    var Y = E.current;
    NL(function() {
      Y === E.current && _();
    });
  }, []), L = Ml(function(I, P) {
    var U = zx(P);
    d.current.delete(U), c.current.delete(I);
  }, []), z = Ml(function(I) {
    x(I);
  }, []), B = Ml(function(I, P) {
    var U = c.current.get(I) || "", Y = DL(U);
    return P && C.includes(Y[0]) && Y.unshift(P1), Y;
  }, [C]), A = Ml(function(I, P) {
    return I.some(function(U) {
      var Y = B(U, !0);
      return Y.includes(P);
    });
  }, [B]), G = function() {
    var P = ar(c.current.keys());
    return C.length && P.push(P1), P;
  }, $ = Ml(function(I) {
    var P = "".concat(c.current.get(I)).concat(CS), U = /* @__PURE__ */ new Set();
    return ar(d.current.keys()).forEach(function(Y) {
      Y.startsWith(P) && U.add(d.current.get(Y));
    }), U;
  }, []);
  return T.useEffect(function() {
    return function() {
      M.current = !0;
    };
  }, []), {
    // Register
    registerPath: N,
    unregisterPath: L,
    refreshOverflowKeys: z,
    // Util
    isSubPathKey: A,
    getKeyPath: B,
    getKeys: G,
    getSubPathKeys: $
  };
}
function $v(r) {
  var o = T.useRef(r);
  o.current = r;
  var s = T.useCallback(function() {
    for (var c, d = arguments.length, m = new Array(d), h = 0; h < d; h++)
      m[h] = arguments[h];
    return (c = o.current) === null || c === void 0 ? void 0 : c.call.apply(c, [o].concat(m));
  }, []);
  return r ? s : void 0;
}
var LL = Math.random().toFixed(5).toString().slice(2), $x = 0;
function PL(r) {
  var o = jv(r, {
    value: r
  }), s = xe(o, 2), c = s[0], d = s[1];
  return T.useEffect(function() {
    $x += 1;
    var m = process.env.NODE_ENV === "test" ? "test" : "".concat(LL, "-").concat($x);
    d("rc-menu-uuid-".concat(m));
  }, []), c;
}
function Lg(r, o) {
  var s = Te({}, r);
  return Array.isArray(o) && o.forEach(function(c) {
    delete s[c];
  }), s;
}
function NR(r, o, s, c) {
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
function DR(r) {
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
function AR(r) {
  var o = r.icon, s = r.props, c = r.children, d;
  return o === null || o === !1 ? null : (typeof o == "function" ? d = /* @__PURE__ */ T.createElement(o, Te({}, s)) : typeof o != "boolean" && (d = o), d || c || null);
}
var IL = ["item"];
function mg(r) {
  var o = r.item, s = Fn(r, IL);
  return Object.defineProperty(s, "item", {
    get: function() {
      return pa(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), o;
    }
  }), s;
}
var zL = ["title", "attribute", "elementRef"], $L = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], UL = ["active"], jL = /* @__PURE__ */ function(r) {
  Nf(s, r);
  var o = Ng(s);
  function s() {
    return Zi(this, s), o.apply(this, arguments);
  }
  return Ji(s, [{
    key: "render",
    value: function() {
      var d = this.props, m = d.title, h = d.attribute, C = d.elementRef, x = Fn(d, zL), E = Lg(x, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return pa(!h, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ T.createElement(Dl.Item, an({}, h, {
        title: typeof m == "string" ? m : void 0
      }, E, {
        ref: C
      }));
    }
  }]), s;
}(T.Component), HL = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var s, c = r.style, d = r.className, m = r.eventKey, h = r.warnKey, C = r.disabled, x = r.itemIcon, E = r.children, M = r.role, _ = r.onMouseEnter, N = r.onMouseLeave, L = r.onClick, z = r.onKeyDown, B = r.onFocus, A = Fn(r, $L), G = TR(m), $ = T.useContext(Xi), I = $.prefixCls, P = $.onItemClick, U = $.disabled, Y = $.overflowDisabled, q = $.itemIcon, ne = $.selectedKeys, oe = $.onActive, re = T.useContext(bS), ge = re._internalRenderMenuItem, pe = "".concat(I, "-item"), te = T.useRef(), se = T.useRef(), de = U || C, Ce = _g(o, se), ke = np(m);
  process.env.NODE_ENV !== "production" && h && pa(!1, "MenuItem should not leave undefined `key`.");
  var we = function($e) {
    return {
      key: m,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: ar(ke).reverse(),
      item: te.current,
      domEvent: $e
    };
  }, Ae = x || q, Ie = NR(m, de, _, N), ie = Ie.active, he = Fn(Ie, UL), Se = ne.includes(m), ze = DR(ke.length), Ke = function($e) {
    if (!de) {
      var et = we($e);
      L == null || L(mg(et)), P(et);
    }
  }, Xe = function($e) {
    if (z == null || z($e), $e.which === at.ENTER) {
      var et = we($e);
      L == null || L(mg(et)), P(et);
    }
  }, it = function($e) {
    oe(m), B == null || B($e);
  }, Ve = {};
  r.role === "option" && (Ve["aria-selected"] = Se);
  var nt = /* @__PURE__ */ T.createElement(jL, an({
    ref: te,
    elementRef: Ce,
    role: M === null ? "none" : M || "menuitem",
    tabIndex: C ? null : -1,
    "data-menu-id": Y && G ? null : G
  }, A, he, Ve, {
    component: "li",
    "aria-disabled": C,
    style: Te(Te({}, ze), c),
    className: wn(pe, (s = {}, tt(s, "".concat(pe, "-active"), ie), tt(s, "".concat(pe, "-selected"), Se), tt(s, "".concat(pe, "-disabled"), de), s), d),
    onClick: Ke,
    onKeyDown: Xe,
    onFocus: it
  }), E, /* @__PURE__ */ T.createElement(AR, {
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
  var s = r.eventKey, c = Ag(), d = np(s);
  return T.useEffect(function() {
    if (c)
      return c.registerPath(s, d), function() {
        c.unregisterPath(s, d);
      };
  }, [d]), c ? null : /* @__PURE__ */ T.createElement(HL, an({}, r, {
    ref: o
  }));
}
const Pg = /* @__PURE__ */ T.forwardRef(FL);
var BL = ["className", "children"], VL = function(o, s) {
  var c = o.className, d = o.children, m = Fn(o, BL), h = T.useContext(Xi), C = h.prefixCls, x = h.mode, E = h.rtl;
  return /* @__PURE__ */ T.createElement("ul", an({
    className: wn(C, E && "".concat(C, "-rtl"), "".concat(C, "-sub"), "".concat(C, "-").concat(x === "inline" ? "inline" : "vertical"), c),
    role: "menu"
  }, m, {
    "data-menu-list": !0,
    ref: s
  }), d);
}, ES = /* @__PURE__ */ T.forwardRef(VL);
ES.displayName = "SubMenuList";
function wS(r, o) {
  return Vv(r).map(function(s, c) {
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
var LR = /* @__PURE__ */ T.createContext(null), Ux = [];
function WL(r, o) {
  var s = T.useState(function() {
    if (!va())
      return null;
    var z = document.createElement("div");
    return process.env.NODE_ENV !== "production" && o && z.setAttribute("data-debug", o), z;
  }), c = xe(s, 1), d = c[0], m = T.useRef(!1), h = T.useContext(LR), C = T.useState(Ux), x = xe(C, 2), E = x[0], M = x[1], _ = h || (m.current ? void 0 : function(z) {
    M(function(B) {
      var A = [z].concat(ar(B));
      return A;
    });
  });
  function N() {
    d.parentElement || document.body.appendChild(d), m.current = !0;
  }
  function L() {
    var z;
    (z = d.parentElement) === null || z === void 0 || z.removeChild(d), m.current = !1;
  }
  return ia(function() {
    return r ? h ? h(N) : N() : L(), L;
  }, [r]), ia(function() {
    E.length && (E.forEach(function(z) {
      return z();
    }), M(Ux));
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
var jx = "data-rc-order", Hx = "data-rc-priority", GL = "rc-util-key", I1 = /* @__PURE__ */ new Map();
function PR() {
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
function IR(r) {
  return Array.from((I1.get(r) || r).children).filter(function(o) {
    return o.tagName === "STYLE";
  });
}
function zR(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!va())
    return null;
  var s = o.csp, c = o.prepend, d = o.priority, m = d === void 0 ? 0 : d, h = qL(c), C = h === "prependQueue", x = document.createElement("style");
  x.setAttribute(jx, h), C && m && x.setAttribute(Hx, "".concat(m)), s != null && s.nonce && (x.nonce = s == null ? void 0 : s.nonce), x.innerHTML = r;
  var E = Ig(o), M = E.firstChild;
  if (c) {
    if (C) {
      var _ = IR(E).filter(function(N) {
        if (!["prepend", "prependQueue"].includes(N.getAttribute(jx)))
          return !1;
        var L = Number(N.getAttribute(Hx) || 0);
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
function $R(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = Ig(o);
  return IR(s).find(function(c) {
    return c.getAttribute(PR(o)) === r;
  });
}
function Kv(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = $R(r, o);
  if (s) {
    var c = Ig(o);
    c.removeChild(s);
  }
}
function YL(r, o) {
  var s = I1.get(r);
  if (!s || !KL(document, s)) {
    var c = zR("", o), d = c.parentNode;
    I1.set(r, d), r.removeChild(c);
  }
}
function Du(r, o) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = Ig(s);
  YL(c, s);
  var d = $R(o, s);
  if (d) {
    var m, h;
    if ((m = s.csp) !== null && m !== void 0 && m.nonce && d.nonce !== ((h = s.csp) === null || h === void 0 ? void 0 : h.nonce)) {
      var C;
      d.nonce = (C = s.csp) === null || C === void 0 ? void 0 : C.nonce;
    }
    return d.innerHTML !== r && (d.innerHTML = r), d;
  }
  var x = zR(r, s);
  return x.setAttribute(PR(s), o), x;
}
var l1;
function QL(r) {
  if (typeof document == "undefined")
    return 0;
  if (r || l1 === void 0) {
    var o = document.createElement("div");
    o.style.width = "100%", o.style.height = "200px";
    var s = document.createElement("div"), c = s.style;
    c.position = "absolute", c.top = "0", c.left = "0", c.pointerEvents = "none", c.visibility = "hidden", c.width = "200px", c.height = "150px", c.overflow = "hidden", s.appendChild(o), document.body.appendChild(s);
    var d = o.offsetWidth;
    s.style.overflow = "scroll";
    var m = o.offsetWidth;
    d === m && (m = s.clientWidth), document.body.removeChild(s), l1 = d - m;
  }
  return l1;
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
var JL = "rc-util-locker-".concat(Date.now()), Bx = 0;
function eP(r) {
  var o = !!r, s = T.useState(function() {
    return Bx += 1, "".concat(JL, "_").concat(Bx);
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
var Vx = !1;
function tP(r) {
  return typeof r == "boolean" && (Vx = r), Vx;
}
var Wx = function(o) {
  return o === !1 ? !1 : !va() || !o ? null : typeof o == "string" ? document.querySelector(o) : typeof o == "function" ? o() : o;
}, xS = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var s = r.open, c = r.autoLock, d = r.getContainer, m = r.debug, h = r.autoDestroy, C = h === void 0 ? !0 : h, x = r.children, E = T.useState(s), M = xe(E, 2), _ = M[0], N = M[1], L = _ || s;
  process.env.NODE_ENV !== "production" && pa(va() || !s, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), T.useEffect(function() {
    (C || s) && N(s);
  }, [s, C]);
  var z = T.useState(function() {
    return Wx(d);
  }), B = xe(z, 2), A = B[0], G = B[1];
  T.useEffect(function() {
    var pe = Wx(d);
    G(pe != null ? pe : null);
  });
  var $ = WL(L && !A, m), I = xe($, 2), P = I[0], U = I[1], Y = A != null ? A : P;
  eP(c && s && va() && (Y === P || Y === document.body));
  var q = null;
  if (x && kg(x) && o) {
    var ne = x;
    q = ne.ref;
  }
  var oe = _g(q, o);
  if (!L || !va() || A === void 0)
    return null;
  var re = Y === !1 || tP(), ge = x;
  return o && (ge = /* @__PURE__ */ T.cloneElement(x, {
    ref: oe
  })), /* @__PURE__ */ T.createElement(LR.Provider, {
    value: U
  }, re ? ge : /* @__PURE__ */ Tg.createPortal(ge, Y));
});
process.env.NODE_ENV !== "production" && (xS.displayName = "Portal");
function UR(r) {
  var o;
  return r == null || (o = r.getRootNode) === null || o === void 0 ? void 0 : o.call(r);
}
function nP(r) {
  return UR(r) instanceof ShadowRoot;
}
function gg(r) {
  return nP(r) ? UR(r) : null;
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
var oP = ["children"], jR = /* @__PURE__ */ T.createContext({});
function lP(r) {
  var o = r.children, s = Fn(r, oP);
  return /* @__PURE__ */ T.createElement(jR.Provider, {
    value: s
  }, o);
}
var uP = /* @__PURE__ */ function(r) {
  Nf(s, r);
  var o = Ng(s);
  function s() {
    return Zi(this, s), o.apply(this, arguments);
  }
  return Ji(s, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), s;
}(T.Component), Ks = "none", Gm = "appear", qm = "enter", Ym = "leave", qx = "none", qi = "prepare", wf = "start", xf = "active", TS = "end", HR = "prepared";
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
var cP = sP(va(), typeof window != "undefined" ? window : {}), FR = {};
if (va()) {
  var fP = document.createElement("div");
  FR = fP.style;
}
var Qm = {};
function BR(r) {
  if (Qm[r])
    return Qm[r];
  var o = cP[r];
  if (o)
    for (var s = Object.keys(o), c = s.length, d = 0; d < c; d += 1) {
      var m = s[d];
      if (Object.prototype.hasOwnProperty.call(o, m) && m in FR)
        return Qm[r] = o[m], Qm[r];
    }
  return "";
}
var VR = BR("animationend"), WR = BR("transitionend"), KR = !!(VR && WR), Qx = VR || "animationend", Xx = WR || "transitionend";
function Zx(r, o) {
  if (!r)
    return null;
  if (Vn(r) === "object") {
    var s = o.replace(/-\w/g, function(c) {
      return c[1].toUpperCase();
    });
    return r[s];
  }
  return "".concat(r, "-").concat(o);
}
const dP = function(r) {
  var o = Ma(), s = Ma(r);
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
var GR = va() ? eA : Vo;
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
var pP = [qi, wf, xf, TS], hP = [qi, HR], qR = !1, mP = !0;
function YR(r) {
  return r === xf || r === TS;
}
const gP = function(r, o, s) {
  var c = Tf(qx), d = xe(c, 2), m = d[0], h = d[1], C = vP(), x = xe(C, 2), E = x[0], M = x[1];
  function _() {
    h(qi, !0);
  }
  var N = o ? hP : pP;
  return GR(function() {
    if (m !== qx && m !== TS) {
      var L = N.indexOf(m), z = N[L + 1], B = s(m);
      B === qR ? h(z, !0) : z && E(function(A) {
        function G() {
          A.isCanceled() || h(z, !0);
        }
        B === !0 ? G() : Promise.resolve(B).then(G);
      });
    }
  }, [r, m]), T.useEffect(function() {
    return function() {
      M();
    };
  }, []), [_, m];
};
function yP(r, o, s, c) {
  var d = c.motionEnter, m = d === void 0 ? !0 : d, h = c.motionAppear, C = h === void 0 ? !0 : h, x = c.motionLeave, E = x === void 0 ? !0 : x, M = c.motionDeadline, _ = c.motionLeaveImmediately, N = c.onAppearPrepare, L = c.onEnterPrepare, z = c.onLeavePrepare, B = c.onAppearStart, A = c.onEnterStart, G = c.onLeaveStart, $ = c.onAppearActive, I = c.onEnterActive, P = c.onLeaveActive, U = c.onAppearEnd, Y = c.onEnterEnd, q = c.onLeaveEnd, ne = c.onVisibleChanged, oe = Tf(), re = xe(oe, 2), ge = re[0], pe = re[1], te = Tf(Ks), se = xe(te, 2), de = se[0], Ce = se[1], ke = Tf(null), we = xe(ke, 2), Ae = we[0], Ie = we[1], ie = Ma(!1), he = Ma(null);
  function Se() {
    return s();
  }
  var ze = Ma(!1);
  function Ke() {
    Ce(Ks, !0), Ie(null, !0);
  }
  function Xe(Ze) {
    var kt = Se();
    if (!(Ze && !Ze.deadline && Ze.target !== kt)) {
      var gt = ze.current, Zt;
      de === Gm && gt ? Zt = U == null ? void 0 : U(kt, Ze) : de === qm && gt ? Zt = Y == null ? void 0 : Y(kt, Ze) : de === Ym && gt && (Zt = q == null ? void 0 : q(kt, Ze)), de !== Ks && gt && Zt !== !1 && Ke();
    }
  }
  var it = dP(Xe), Ve = xe(it, 1), nt = Ve[0], Nt = function(kt) {
    var gt, Zt, ot;
    switch (kt) {
      case Gm:
        return gt = {}, tt(gt, qi, N), tt(gt, wf, B), tt(gt, xf, $), gt;
      case qm:
        return Zt = {}, tt(Zt, qi, L), tt(Zt, wf, A), tt(Zt, xf, I), Zt;
      case Ym:
        return ot = {}, tt(ot, qi, z), tt(ot, wf, G), tt(ot, xf, P), ot;
      default:
        return {};
    }
  }, $e = T.useMemo(function() {
    return Nt(de);
  }, [de]), et = gP(de, !r, function(Ze) {
    if (Ze === qi) {
      var kt = $e[qi];
      return kt ? kt(Se()) : qR;
    }
    if (mt in $e) {
      var gt;
      Ie(((gt = $e[mt]) === null || gt === void 0 ? void 0 : gt.call($e, Se(), null)) || null);
    }
    return mt === xf && (nt(Se()), M > 0 && (clearTimeout(he.current), he.current = setTimeout(function() {
      Xe({
        deadline: !0
      });
    }, M))), mt === HR && Ke(), mP;
  }), Vt = xe(et, 2), Ee = Vt[0], mt = Vt[1], Dt = YR(mt);
  ze.current = Dt, GR(function() {
    pe(o);
    var Ze = ie.current;
    ie.current = !0;
    var kt;
    !Ze && o && C && (kt = Gm), Ze && o && m && (kt = qm), (Ze && !o && E || !Ze && _ && !o && E) && (kt = Ym);
    var gt = Nt(kt);
    kt && (r || gt[qi]) ? (Ce(kt), Ee()) : Ce(Ks);
  }, [o]), Vo(function() {
    // Cancel appear
    (de === Gm && !C || // Cancel enter
    de === qm && !m || // Cancel leave
    de === Ym && !E) && Ce(Ks);
  }, [C, m, E]), Vo(function() {
    return function() {
      ie.current = !1, clearTimeout(he.current);
    };
  }, []);
  var zt = T.useRef(!1);
  Vo(function() {
    ge && (zt.current = !0), ge !== void 0 && de === Ks && ((zt.current || ge) && (ne == null || ne(ge)), zt.current = !0);
  }, [ge, de]);
  var Ut = Ae;
  return $e[qi] && mt === wf && (Ut = Te({
    transition: "none"
  }, Ut)), [de, mt, Ut, ge != null ? ge : o];
}
function bP(r) {
  var o = r;
  Vn(r) === "object" && (o = r.transitionSupport);
  function s(d, m) {
    return !!(d.motionName && o && m !== !1);
  }
  var c = /* @__PURE__ */ T.forwardRef(function(d, m) {
    var h = d.visible, C = h === void 0 ? !0 : h, x = d.removeOnLeave, E = x === void 0 ? !0 : x, M = d.forceRender, _ = d.children, N = d.motionName, L = d.leavedClassName, z = d.eventProps, B = T.useContext(jR), A = B.motion, G = s(d, A), $ = Ma(), I = Ma();
    function P() {
      try {
        return $.current instanceof HTMLElement ? $.current : ag(I.current);
      } catch (Ie) {
        return null;
      }
    }
    var U = yP(G, C, P, d), Y = xe(U, 4), q = Y[0], ne = Y[1], oe = Y[2], re = Y[3], ge = T.useRef(re);
    re && (ge.current = !0);
    var pe = T.useCallback(function(Ie) {
      $.current = Ie, mS(m, Ie);
    }, [m]), te, se = Te(Te({}, z), {}, {
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
      ne === qi ? Ce = "prepare" : YR(ne) ? Ce = "active" : ne === wf && (Ce = "start");
      var ke = Zx(N, "".concat(q, "-").concat(Ce));
      te = _(Te(Te({}, se), {}, {
        className: wn(Zx(N, q), (de = {}, tt(de, ke, ke && Ce), tt(de, N, typeof N == "string"), de)),
        style: oe
      }), pe);
    }
    if (/* @__PURE__ */ T.isValidElement(te) && kg(te)) {
      var we = te, Ae = we.ref;
      Ae || (te = /* @__PURE__ */ T.cloneElement(te, {
        ref: pe
      }));
    }
    return /* @__PURE__ */ T.createElement(uP, {
      ref: I
    }, te);
  });
  return c.displayName = "CSSMotion", c;
}
const zg = bP(KR);
var z1 = "add", $1 = "keep", U1 = "remove", u1 = "removed";
function SP(r) {
  var o;
  return r && Vn(r) === "object" && "key" in r ? o = r : o = {
    key: r
  }, Te(Te({}, o), {}, {
    key: String(o.key)
  });
}
function j1() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return r.map(SP);
}
function CP() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], s = [], c = 0, d = o.length, m = j1(r), h = j1(o);
  m.forEach(function(E) {
    for (var M = !1, _ = c; _ < d; _ += 1) {
      var N = h[_];
      if (N.key === E.key) {
        c < _ && (s = s.concat(h.slice(c, _).map(function(L) {
          return Te(Te({}, L), {}, {
            status: z1
          });
        })), c = _), s.push(Te(Te({}, N), {}, {
          status: $1
        })), c += 1, M = !0;
        break;
      }
    }
    M || s.push(Te(Te({}, E), {}, {
      status: U1
    }));
  }), c < d && (s = s.concat(h.slice(c).map(function(E) {
    return Te(Te({}, E), {}, {
      status: z1
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
      return _ !== E || N !== U1;
    }), s.forEach(function(M) {
      M.key === E && (M.status = $1);
    });
  }), s;
}
var EP = ["component", "children", "onVisibleChanged", "onAllRemoved"], wP = ["status"], xP = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function TP(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : zg, s = /* @__PURE__ */ function(c) {
    Nf(m, c);
    var d = Ng(m);
    function m() {
      var h;
      Zi(this, m);
      for (var C = arguments.length, x = new Array(C), E = 0; E < C; E++)
        x[E] = arguments[E];
      return h = d.call.apply(d, [this].concat(x)), tt(O1(h), "state", {
        keyEntities: []
      }), tt(O1(h), "removeKey", function(M) {
        var _ = h.state.keyEntities, N = _.map(function(L) {
          return L.key !== M ? L : Te(Te({}, L), {}, {
            status: u1
          });
        });
        return h.setState({
          keyEntities: N
        }), N.filter(function(L) {
          var z = L.status;
          return z !== u1;
        }).length;
      }), h;
    }
    return Ji(m, [{
      key: "render",
      value: function() {
        var C = this, x = this.state.keyEntities, E = this.props, M = E.component, _ = E.children, N = E.onVisibleChanged, L = E.onAllRemoved, z = Fn(E, EP), B = M || T.Fragment, A = {};
        return xP.forEach(function(G) {
          A[G] = z[G], delete z[G];
        }), delete z.keys, /* @__PURE__ */ T.createElement(B, z, x.map(function(G, $) {
          var I = G.status, P = Fn(G, wP), U = I === z1 || I === $1;
          return /* @__PURE__ */ T.createElement(o, an({}, A, {
            key: P.key,
            visible: U,
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
        var E = C.keys, M = x.keyEntities, _ = j1(E), N = CP(M, _);
        return {
          keyEntities: N.filter(function(L) {
            var z = M.find(function(B) {
              var A = B.key;
              return L.key === A;
            });
            return !(z && z.status === u1 && L.status === U1);
          })
        };
      }
    }]), m;
  }(T.Component);
  return tt(s, "defaultProps", {
    component: "div"
  }), s;
}
TP(KR);
function RP(r) {
  var o = r.prefixCls, s = r.align, c = r.arrow, d = r.arrowPos, m = c || {}, h = m.className, C = m.content, x = d.x, E = x === void 0 ? 0 : x, M = d.y, _ = M === void 0 ? 0 : M, N = T.useRef();
  if (!s || !s.points)
    return null;
  var L = {
    position: "absolute"
  };
  if (s.autoArrow !== !1) {
    var z = s.points[0], B = s.points[1], A = z[0], G = z[1], $ = B[0], I = B[1];
    A === $ || !["t", "b"].includes(A) ? L.top = _ : A === "t" ? L.top = 0 : L.bottom = 0, G === I || !["l", "r"].includes(G) ? L.left = E : G === "l" ? L.left = 0 : L.right = 0;
  }
  return /* @__PURE__ */ T.createElement("div", {
    ref: N,
    className: wn("".concat(o, "-arrow"), h),
    style: L
  }, C);
}
function _P(r) {
  var o = r.prefixCls, s = r.open, c = r.zIndex, d = r.mask, m = r.motion;
  return d ? /* @__PURE__ */ T.createElement(zg, an({}, m, {
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
var QR = /* @__PURE__ */ T.memo(function(r) {
  var o = r.children;
  return o;
}, function(r, o) {
  return o.cache;
});
process.env.NODE_ENV !== "production" && (QR.displayName = "PopupContent");
var XR = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var s = r.popup, c = r.className, d = r.prefixCls, m = r.style, h = r.target, C = r.onVisibleChanged, x = r.open, E = r.keepDom, M = r.fresh, _ = r.onClick, N = r.mask, L = r.arrow, z = r.arrowPos, B = r.align, A = r.motion, G = r.maskMotion, $ = r.forceRender, I = r.getPopupContainer, P = r.autoDestroy, U = r.portal, Y = r.zIndex, q = r.onMouseEnter, ne = r.onMouseLeave, oe = r.onPointerEnter, re = r.ready, ge = r.offsetX, pe = r.offsetY, te = r.offsetR, se = r.offsetB, de = r.onAlign, Ce = r.onPrepare, ke = r.stretch, we = r.targetWidth, Ae = r.targetHeight, Ie = typeof s == "function" ? s() : s, ie = x || E, he = (I == null ? void 0 : I.length) > 0, Se = T.useState(!I || !he), ze = xe(Se, 2), Ke = ze[0], Xe = ze[1];
  if (ia(function() {
    !Ke && he && h && Xe(!0);
  }, [Ke, he, h]), !Ke)
    return null;
  var it = "auto", Ve = {
    left: "-1000vw",
    top: "-1000vh",
    right: it,
    bottom: it
  };
  if (re || !x) {
    var nt, Nt = B.points, $e = B.dynamicInset || ((nt = B._experimental) === null || nt === void 0 ? void 0 : nt.dynamicInset), et = $e && Nt[0][1] === "r", Vt = $e && Nt[0][0] === "b";
    et ? (Ve.right = te, Ve.left = it) : (Ve.left = ge, Ve.right = it), Vt ? (Ve.bottom = se, Ve.top = it) : (Ve.top = pe, Ve.bottom = it);
  }
  var Ee = {};
  return ke && (ke.includes("height") && Ae ? Ee.height = Ae : ke.includes("minHeight") && Ae && (Ee.minHeight = Ae), ke.includes("width") && we ? Ee.width = we : ke.includes("minWidth") && we && (Ee.minWidth = we)), x || (Ee.pointerEvents = "none"), /* @__PURE__ */ T.createElement(U, {
    open: $ || ie,
    getContainer: I && function() {
      return I(h);
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
    return /* @__PURE__ */ T.createElement(zg, an({
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
      onVisibleChanged: function(zt) {
        var Ut;
        A == null || (Ut = A.onVisibleChanged) === null || Ut === void 0 || Ut.call(A, zt), C(zt);
      }
    }), function(Dt, zt) {
      var Ut = Dt.className, Ze = Dt.style, kt = wn(d, Ut, c);
      return /* @__PURE__ */ T.createElement("div", {
        ref: uR(mt, o, zt),
        className: kt,
        style: Te(Te(Te(Te({
          "--arrow-x": "".concat(z.x || 0, "px"),
          "--arrow-y": "".concat(z.y || 0, "px")
        }, Ve), Ee), Ze), {}, {
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
        arrowPos: z,
        align: B
      }), /* @__PURE__ */ T.createElement(QR, {
        cache: !x && !M
      }, Ie));
    });
  }));
});
process.env.NODE_ENV !== "production" && (XR.displayName = "Popup");
var ZR = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var s = r.children, c = r.getTriggerDOMNode, d = kg(s), m = T.useCallback(function(C) {
    mS(o, c ? c(C) : C);
  }, [c]), h = _g(m, s.ref);
  return d ? /* @__PURE__ */ T.cloneElement(s, {
    ref: h
  }) : s;
});
process.env.NODE_ENV !== "production" && (ZR.displayName = "TriggerWrapper");
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
function H1(r) {
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
      var d = rp(c).getComputedStyle(c), m = d.overflow, h = d.overflowClipMargin, C = d.borderTopWidth, x = d.borderBottomWidth, E = d.borderLeftWidth, M = d.borderRightWidth, _ = c.getBoundingClientRect(), N = c.offsetHeight, L = c.clientHeight, z = c.offsetWidth, B = c.clientWidth, A = Pv(C), G = Pv(x), $ = Pv(E), I = Pv(M), P = Gv(Math.round(_.width / z * 1e3) / 1e3), U = Gv(Math.round(_.height / N * 1e3) / 1e3), Y = (z - B - $ - I) * P, q = (N - L - A - G) * U, ne = A * U, oe = G * U, re = $ * P, ge = I * P, pe = 0, te = 0;
      if (m === "clip") {
        var se = Pv(h);
        pe = se * P, te = se * U;
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
    return o ? H1(o) : [];
  }, [o]), L = T.useRef({}), z = function() {
    L.current = {};
  };
  r || z();
  var B = Bo(function() {
    if (o && s && r) {
      let tr = function(br, ma) {
        var xi = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : kt, Na = Ie.x + br, eo = Ie.y + ma, Da = Na + nt, to = eo + Ve, Ti = Math.max(Na, xi.left), Ko = Math.max(eo, xi.top), no = Math.min(Da, xi.right), Il = Math.min(to, xi.bottom);
        return Math.max(0, (no - Ti) * (Il - Ko));
      }, la = function() {
        Yr = Ie.y + Ue, ln = Yr + Ve, Jn = Ie.x + Ht, Tr = Jn + nt;
      };
      var $, I, P = o, U = P.ownerDocument, Y = rp(P), q = Y.getComputedStyle(P), ne = q.width, oe = q.height, re = q.position, ge = P.style.left, pe = P.style.top, te = P.style.right, se = P.style.bottom, de = P.style.overflow, Ce = Te(Te({}, d[c]), m), ke = U.createElement("div");
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
      var Ie = P.getBoundingClientRect(), ie = U.documentElement, he = ie.clientWidth, Se = ie.clientHeight, ze = ie.scrollWidth, Ke = ie.scrollHeight, Xe = ie.scrollTop, it = ie.scrollLeft, Ve = Ie.height, nt = Ie.width, Nt = we.height, $e = we.width, et = {
        left: 0,
        top: 0,
        right: he,
        bottom: Se
      }, Vt = {
        left: -it,
        top: -Xe,
        right: ze - it,
        bottom: Ke - Xe
      }, Ee = Ce.htmlRegion, mt = "visible", Dt = "visibleFirst";
      Ee !== "scroll" && Ee !== Dt && (Ee = mt);
      var zt = Ee === Dt, Ut = nT(Vt, N), Ze = nT(et, N), kt = Ee === mt ? Ze : Ut, gt = zt ? Ze : kt;
      P.style.left = "auto", P.style.top = "auto", P.style.right = "0", P.style.bottom = "0";
      var Zt = P.getBoundingClientRect();
      P.style.left = ge, P.style.top = pe, P.style.right = te, P.style.bottom = se, P.style.overflow = de, (I = P.parentElement) === null || I === void 0 || I.removeChild(ke);
      var ot = Gv(Math.round(nt / parseFloat(ne) * 1e3) / 1e3), Wt = Gv(Math.round(Ve / parseFloat(oe) * 1e3) / 1e3);
      if (ot === 0 || Wt === 0 || dg(s) && !MR(s))
        return;
      var Qt = Ce.offset, ut = Ce.targetOffset, Gt = aT(Ie, Qt), Wn = xe(Gt, 2), qt = Wn[0], en = Wn[1], ye = aT(we, ut), Ne = xe(ye, 2), We = Ne[0], xt = Ne[1];
      we.x -= We, we.y -= xt;
      var Mt = Ce.points || [], rt = xe(Mt, 2), st = rt[0], on = rt[1], Ot = iT(on), jt = iT(st), ir = gf(we, Ot), Bt = gf(Ie, jt), dn = Te({}, Ce), Ht = ir.x - Bt.x + qt, Ue = ir.y - Bt.y + en, St = tr(Ht, Ue), Oe = tr(Ht, Ue, Ze), Ge = gf(we, ["t", "l"]), At = gf(Ie, ["t", "l"]), mn = gf(we, ["b", "r"]), An = gf(Ie, ["b", "r"]), gn = Ce.overflow || {}, oa = gn.adjustX, qr = gn.adjustY, Ln = gn.shiftX, Kt = gn.shiftY, Bn = function(ma) {
        return typeof ma == "boolean" ? ma : ma >= 0;
      }, Yr, ln, Jn, Tr;
      la();
      var qa = Bn(qr), Lr = jt[0] === Ot[0];
      if (qa && jt[0] === "t" && (ln > gt.bottom || L.current.bt)) {
        var Pr = Ue;
        Lr ? Pr -= Ve - Nt : Pr = Ge.y - An.y - en;
        var Rr = tr(Ht, Pr), Ya = tr(Ht, Pr, Ze);
        // Of course use larger one
        Rr > St || Rr === St && (!zt || // Choose recommend one
        Ya >= Oe) ? (L.current.bt = !0, Ue = Pr, en = -en, dn.points = [_u(jt, 0), _u(Ot, 0)]) : L.current.bt = !1;
      }
      if (qa && jt[0] === "b" && (Yr < gt.top || L.current.tb)) {
        var Pn = Ue;
        Lr ? Pn += Ve - Nt : Pn = mn.y - At.y - en;
        var Ei = tr(Ht, Pn), _r = tr(Ht, Pn, Ze);
        // Of course use larger one
        Ei > St || Ei === St && (!zt || // Choose recommend one
        _r >= Oe) ? (L.current.tb = !0, Ue = Pn, en = -en, dn.points = [_u(jt, 0), _u(Ot, 0)]) : L.current.tb = !1;
      }
      var xn = Bn(oa), Ir = jt[1] === Ot[1];
      if (xn && jt[1] === "l" && (Tr > gt.right || L.current.rl)) {
        var kr = Ht;
        Ir ? kr -= nt - $e : kr = Ge.x - An.x - qt;
        var zr = tr(kr, Ue), Qa = tr(kr, Ue, Ze);
        // Of course use larger one
        zr > St || zr === St && (!zt || // Choose recommend one
        Qa >= Oe) ? (L.current.rl = !0, Ht = kr, qt = -qt, dn.points = [_u(jt, 1), _u(Ot, 1)]) : L.current.rl = !1;
      }
      if (xn && jt[1] === "r" && (Jn < gt.left || L.current.lr)) {
        var $r = Ht;
        Ir ? $r += nt - $e : $r = mn.x - At.x - qt;
        var Xa = tr($r, Ue), gr = tr($r, Ue, Ze);
        // Of course use larger one
        Xa > St || Xa === St && (!zt || // Choose recommend one
        gr >= Oe) ? (L.current.lr = !0, Ht = $r, qt = -qt, dn.points = [_u(jt, 1), _u(Ot, 1)]) : L.current.lr = !1;
      }
      la();
      var Qr = Ln === !0 ? 0 : Ln;
      typeof Qr == "number" && (Jn < Ze.left && (Ht -= Jn - Ze.left - qt, we.x + $e < Ze.left + Qr && (Ht += we.x - Ze.left + $e - Qr)), Tr > Ze.right && (Ht -= Tr - Ze.right - qt, we.x > Ze.right - Qr && (Ht += we.x - Ze.right + Qr)));
      var Mr = Kt === !0 ? 0 : Kt;
      typeof Mr == "number" && (Yr < Ze.top && (Ue -= Yr - Ze.top - en, we.y + Nt < Ze.top + Mr && (Ue += we.y - Ze.top + Nt - Mr)), ln > Ze.bottom && (Ue -= ln - Ze.bottom - en, we.y > Ze.bottom - Mr && (Ue += we.y - Ze.bottom + Mr)));
      var ha = Ie.x + Ht, In = ha + nt, Kn = Ie.y + Ue, Or = Kn + Ve, or = we.x, yr = or + $e, Re = we.y, Xt = Re + Nt, dt = Math.max(ha, or), $t = Math.min(In, yr), Tn = (dt + $t) / 2, On = Tn - ha, Nn = Math.max(Kn, Re), vn = Math.min(Or, Xt), er = (Nn + vn) / 2, wi = er - Kn;
      h == null || h(o, dn);
      var Gn = Zt.right - Ie.x - (Ht + Ie.width), zn = Zt.bottom - Ie.y - (Ue + Ie.height);
      M({
        ready: !0,
        offsetX: Ht / ot,
        offsetY: Ue / Wt,
        offsetR: Gn / ot,
        offsetB: zn / Wt,
        arrowX: On / ot,
        arrowY: wi / Wt,
        scaleX: ot,
        scaleY: Wt,
        align: dn
      });
    }
  }), A = function() {
    _.current += 1;
    var I = _.current;
    Promise.resolve().then(function() {
      _.current === I && B();
    });
  }, G = function() {
    M(function(I) {
      return Te(Te({}, I), {}, {
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
      var m = o, h = s, C = H1(m), x = H1(h), E = rp(h), M = new Set([E].concat(ar(C), ar(x)));
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
      }, _ = M(), N = xe(_, 2), L = N[0], z = N[1], B = M(), A = xe(B, 2), G = A[0], $ = A[1], I = rp(c);
      I.addEventListener("mousedown", L, !0), I.addEventListener("click", z, !0), I.addEventListener("contextmenu", z, !0);
      var P = gg(s);
      if (P && (P.addEventListener("mousedown", G, !0), P.addEventListener("click", $, !0), P.addEventListener("contextmenu", $, !0)), process.env.NODE_ENV !== "production") {
        var U, Y, q = s == null || (U = s.getRootNode) === null || U === void 0 ? void 0 : U.call(s), ne = (Y = c.getRootNode) === null || Y === void 0 ? void 0 : Y.call(c);
        _f(q === ne, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        I.removeEventListener("mousedown", L, !0), I.removeEventListener("click", z, !0), I.removeEventListener("contextmenu", z, !0), P && (P.removeEventListener("mousedown", G, !0), P.removeEventListener("click", $, !0), P.removeEventListener("contextmenu", $, !0));
      };
    }
  }, [o, s, c, d, m]);
}
var LP = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function PP() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : xS, o = /* @__PURE__ */ T.forwardRef(function(s, c) {
    var d = s.prefixCls, m = d === void 0 ? "rc-trigger-popup" : d, h = s.children, C = s.action, x = C === void 0 ? "hover" : C, E = s.showAction, M = s.hideAction, _ = s.popupVisible, N = s.defaultPopupVisible, L = s.onPopupVisibleChange, z = s.afterPopupVisibleChange, B = s.mouseEnterDelay, A = s.mouseLeaveDelay, G = A === void 0 ? 0.1 : A, $ = s.focusDelay, I = s.blurDelay, P = s.mask, U = s.maskClosable, Y = U === void 0 ? !0 : U, q = s.getPopupContainer, ne = s.forceRender, oe = s.autoDestroy, re = s.destroyPopupOnHide, ge = s.popup, pe = s.popupClassName, te = s.popupStyle, se = s.popupPlacement, de = s.builtinPlacements, Ce = de === void 0 ? {} : de, ke = s.popupAlign, we = s.zIndex, Ae = s.stretch, Ie = s.getPopupClassNameFromAlign, ie = s.fresh, he = s.alignPoint, Se = s.onPopupClick, ze = s.onPopupAlign, Ke = s.arrow, Xe = s.popupMotion, it = s.maskMotion, Ve = s.popupTransitionName, nt = s.popupAnimation, Nt = s.maskTransitionName, $e = s.maskAnimation, et = s.className, Vt = s.getTriggerDOMNode, Ee = Fn(s, LP), mt = oe || re || !1, Dt = T.useState(!1), zt = xe(Dt, 2), Ut = zt[0], Ze = zt[1];
    ia(function() {
      Ze(iP());
    }, []);
    var kt = T.useRef({}), gt = T.useContext(Jx), Zt = T.useMemo(function() {
      return {
        registerSubPopup: function(yt, ct) {
          kt.current[yt] = ct, gt == null || gt.registerSubPopup(yt, ct);
        }
      };
    }, [gt]), ot = aP(), Wt = T.useState(null), Qt = xe(Wt, 2), ut = Qt[0], Gt = Qt[1], Wn = Bo(function(Be) {
      dg(Be) && ut !== Be && Gt(Be), gt == null || gt.registerSubPopup(ot, Be);
    }), qt = T.useState(null), en = xe(qt, 2), ye = en[0], Ne = en[1], We = T.useRef(null), xt = Bo(function(Be) {
      dg(Be) && ye !== Be && (Ne(Be), We.current = Be);
    }), Mt = T.Children.only(h), rt = (Mt == null ? void 0 : Mt.props) || {}, st = {}, on = Bo(function(Be) {
      var yt, ct, pn = ye;
      return (pn == null ? void 0 : pn.contains(Be)) || ((yt = gg(pn)) === null || yt === void 0 ? void 0 : yt.host) === Be || Be === pn || (ut == null ? void 0 : ut.contains(Be)) || ((ct = gg(ut)) === null || ct === void 0 ? void 0 : ct.host) === Be || Be === ut || Object.values(kt.current).some(function(Cn) {
        return (Cn == null ? void 0 : Cn.contains(Be)) || Be === Cn;
      });
    }), Ot = tT(m, Xe, nt, Ve), jt = tT(m, it, $e, Nt), ir = T.useState(N || !1), Bt = xe(ir, 2), dn = Bt[0], Ht = Bt[1], Ue = _ != null ? _ : dn, St = Bo(function(Be) {
      _ === void 0 && Ht(Be);
    });
    ia(function() {
      Ht(_ || !1);
    }, [_]);
    var Oe = T.useRef(Ue);
    Oe.current = Ue;
    var Ge = T.useRef([]);
    Ge.current = [];
    var At = Bo(function(Be) {
      var yt;
      St(Be), ((yt = Ge.current[Ge.current.length - 1]) !== null && yt !== void 0 ? yt : Ue) !== Be && (Ge.current.push(Be), L == null || L(Be));
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
    ia(function(Be) {
      (!Be || Ue) && Kt(!0);
    }, [Ue]);
    var Bn = T.useState(null), Yr = xe(Bn, 2), ln = Yr[0], Jn = Yr[1], Tr = T.useState([0, 0]), qa = xe(Tr, 2), Lr = qa[0], Pr = qa[1], Rr = function(yt) {
      Pr([yt.clientX, yt.clientY]);
    }, Ya = NP(Ue, ut, he ? Lr : ye, se, Ce, ke, ze), Pn = xe(Ya, 11), Ei = Pn[0], _r = Pn[1], xn = Pn[2], Ir = Pn[3], kr = Pn[4], zr = Pn[5], Qa = Pn[6], $r = Pn[7], Xa = Pn[8], gr = Pn[9], Qr = Pn[10], Mr = kP(Ut, x, E, M), ha = xe(Mr, 2), In = ha[0], Kn = ha[1], Or = In.has("click"), or = Kn.has("click") || Kn.has("contextMenu"), yr = Bo(function() {
      Ln || Qr();
    }), Re = function() {
      Oe.current && he && or && gn(!1);
    };
    DP(Ue, ye, ut, yr, Re), ia(function() {
      yr();
    }, [Lr, se]), ia(function() {
      Ue && !(Ce != null && Ce[se]) && yr();
    }, [JSON.stringify(ke)]);
    var Xt = T.useMemo(function() {
      var Be = OP(Ce, m, gr, he);
      return wn(Be, Ie == null ? void 0 : Ie(gr));
    }, [gr, Ie, Ce, m, he]);
    T.useImperativeHandle(c, function() {
      return {
        nativeElement: We.current,
        forceAlign: yr
      };
    });
    var dt = T.useState(0), $t = xe(dt, 2), Tn = $t[0], On = $t[1], Nn = T.useState(0), vn = xe(Nn, 2), er = vn[0], wi = vn[1], Gn = function() {
      if (Ae && ye) {
        var yt = ye.getBoundingClientRect();
        On(yt.width), wi(yt.height);
      }
    }, zn = function() {
      Gn(), yr();
    }, tr = function(yt) {
      Kt(!1), Qr(), z == null || z(yt);
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
    function br(Be, yt, ct, pn) {
      st[Be] = function(Cn) {
        var ro;
        pn == null || pn(Cn), gn(yt, ct);
        for (var Za = arguments.length, Lu = new Array(Za > 1 ? Za - 1 : 0), Ri = 1; Ri < Za; Ri++)
          Lu[Ri - 1] = arguments[Ri];
        (ro = rt[Be]) === null || ro === void 0 || ro.call.apply(ro, [rt, Cn].concat(Lu));
      };
    }
    (Or || or) && (st.onClick = function(Be) {
      var yt;
      Oe.current && or ? gn(!1) : !Oe.current && Or && (Rr(Be), gn(!0));
      for (var ct = arguments.length, pn = new Array(ct > 1 ? ct - 1 : 0), Cn = 1; Cn < ct; Cn++)
        pn[Cn - 1] = arguments[Cn];
      (yt = rt.onClick) === null || yt === void 0 || yt.call.apply(yt, [rt, Be].concat(pn));
    }), AP(Ue, or, ye, ut, P, Y, on, gn);
    var ma = In.has("hover"), xi = Kn.has("hover"), Na, eo;
    ma && (br("onMouseEnter", !0, B, function(Be) {
      Rr(Be);
    }), br("onPointerEnter", !0, B, function(Be) {
      Rr(Be);
    }), Na = function() {
      (Ue || Ln) && gn(!0, B);
    }, he && (st.onMouseMove = function(Be) {
      var yt;
      (yt = rt.onMouseMove) === null || yt === void 0 || yt.call(rt, Be);
    })), xi && (br("onMouseLeave", !1, G), br("onPointerLeave", !1, G), eo = function() {
      gn(!1, G);
    }), In.has("focus") && br("onFocus", !0, $), Kn.has("focus") && br("onBlur", !1, I), In.has("contextMenu") && (st.onContextMenu = function(Be) {
      var yt;
      Oe.current && Kn.has("contextMenu") ? gn(!1) : (Rr(Be), gn(!0)), Be.preventDefault();
      for (var ct = arguments.length, pn = new Array(ct > 1 ? ct - 1 : 0), Cn = 1; Cn < ct; Cn++)
        pn[Cn - 1] = arguments[Cn];
      (yt = rt.onContextMenu) === null || yt === void 0 || yt.call.apply(yt, [rt, Be].concat(pn));
    }), et && (st.className = wn(rt.className, et));
    var Da = Te(Te({}, rt), st), to = {}, Ti = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Ti.forEach(function(Be) {
      Ee[Be] && (to[Be] = function() {
        for (var yt, ct = arguments.length, pn = new Array(ct), Cn = 0; Cn < ct; Cn++)
          pn[Cn] = arguments[Cn];
        (yt = Da[Be]) === null || yt === void 0 || yt.call.apply(yt, [Da].concat(pn)), Ee[Be].apply(Ee, pn);
      });
    });
    var Ko = /* @__PURE__ */ T.cloneElement(Mt, Te(Te({}, Da), to)), no = {
      x: zr,
      y: Qa
    }, Il = Ke ? Te({}, Ke !== !0 ? Ke : {}) : null;
    return /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(Df, {
      disabled: !Ue,
      ref: xt,
      onResize: zn
    }, /* @__PURE__ */ T.createElement(ZR, {
      getTriggerDOMNode: Vt
    }, Ko)), /* @__PURE__ */ T.createElement(Jx.Provider, {
      value: Zt
    }, /* @__PURE__ */ T.createElement(XR, {
      portal: r,
      ref: Wn,
      prefixCls: m,
      popup: ge,
      className: wn(pe, Xt),
      style: te,
      target: ye,
      onMouseEnter: Na,
      onMouseLeave: eo,
      onPointerEnter: Na,
      zIndex: we,
      open: Ue,
      keepDom: Ln,
      fresh: ie,
      onClick: Se,
      mask: P,
      motion: Ot,
      maskMotion: jt,
      onVisibleChanged: tr,
      onPrepare: la,
      forceRender: ne,
      autoDestroy: mt,
      getPopupContainer: q,
      align: gr,
      arrow: Il,
      arrowPos: no,
      ready: Ei,
      offsetX: _r,
      offsetY: xn,
      offsetR: Ir,
      offsetB: kr,
      onAlign: yr,
      stretch: Ae,
      targetWidth: Tn / $r,
      targetHeight: er / Xa
    })));
  });
  return process.env.NODE_ENV !== "production" && (o.displayName = "Trigger"), o;
}
const JR = PP(xS);
var aa = {
  adjustX: 1,
  adjustY: 1
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
function e_(r, o, s) {
  if (o)
    return o;
  if (s)
    return s[r] || s.other;
}
var $P = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function UP(r) {
  var o = r.prefixCls, s = r.visible, c = r.children, d = r.popup, m = r.popupStyle, h = r.popupClassName, C = r.popupOffset, x = r.disabled, E = r.mode, M = r.onVisibleChange, _ = T.useContext(Xi), N = _.getPopupContainer, L = _.rtl, z = _.subMenuOpenDelay, B = _.subMenuCloseDelay, A = _.builtinPlacements, G = _.triggerSubMenuAction, $ = _.forceSubMenuRender, I = _.rootClassName, P = _.motion, U = _.defaultMotions, Y = T.useState(!1), q = xe(Y, 2), ne = q[0], oe = q[1], re = Te(L ? Te({}, zP) : Te({}, IP), A), ge = $P[E], pe = e_(E, P, U), te = T.useRef(pe);
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
  }, [s]), /* @__PURE__ */ T.createElement(JR, {
    prefixCls: o,
    popupClassName: wn("".concat(o, "-popup"), tt({}, "".concat(o, "-rtl"), L), h, I),
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
    mouseEnterDelay: z,
    mouseLeaveDelay: B,
    onPopupVisibleChange: M,
    forceRender: $,
    popupMotion: se,
    fresh: !0
  }, c);
}
function jP(r) {
  var o = r.id, s = r.open, c = r.keyPath, d = r.children, m = "inline", h = T.useContext(Xi), C = h.prefixCls, x = h.forceSubMenuRender, E = h.motion, M = h.defaultMotions, _ = h.mode, N = T.useRef(!1);
  N.current = _ === m;
  var L = T.useState(!N.current), z = xe(L, 2), B = z[0], A = z[1], G = N.current ? s : !1;
  T.useEffect(function() {
    N.current && A(!1);
  }, [_]);
  var $ = Te({}, e_(m, E, M));
  c.length > 1 && ($.motionAppear = !1);
  var I = $.onVisibleChanged;
  return $.onVisibleChanged = function(P) {
    return !N.current && !P && A(!0), I == null ? void 0 : I(P);
  }, B ? null : /* @__PURE__ */ T.createElement(Wv, {
    mode: m,
    locked: !N.current
  }, /* @__PURE__ */ T.createElement(zg, an({
    visible: G
  }, $, {
    forceRender: x,
    removeOnLeave: !1,
    leavedClassName: "".concat(C, "-hidden")
  }), function(P) {
    var U = P.className, Y = P.style;
    return /* @__PURE__ */ T.createElement(ES, {
      id: o,
      className: U,
      style: Y
    }, d);
  }));
}
var HP = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], FP = ["active"], BP = function(o) {
  var s, c = o.style, d = o.className, m = o.title, h = o.eventKey, C = o.warnKey, x = o.disabled, E = o.internalPopupClose, M = o.children, _ = o.itemIcon, N = o.expandIcon, L = o.popupClassName, z = o.popupOffset, B = o.popupStyle, A = o.onClick, G = o.onMouseEnter, $ = o.onMouseLeave, I = o.onTitleClick, P = o.onTitleMouseEnter, U = o.onTitleMouseLeave, Y = Fn(o, HP), q = TR(h), ne = T.useContext(Xi), oe = ne.prefixCls, re = ne.mode, ge = ne.openKeys, pe = ne.disabled, te = ne.overflowDisabled, se = ne.activeKey, de = ne.selectedKeys, Ce = ne.itemIcon, ke = ne.expandIcon, we = ne.onItemClick, Ae = ne.onOpenChange, Ie = ne.onActive, ie = T.useContext(bS), he = ie._internalRenderSubMenuItem, Se = T.useContext(kR), ze = Se.isSubPathKey, Ke = np(), Xe = "".concat(oe, "-submenu"), it = pe || x, Ve = T.useRef(), nt = T.useRef();
  process.env.NODE_ENV !== "production" && C && pa(!1, "SubMenu should not leave undefined `key`.");
  var Nt = _ != null ? _ : Ce, $e = N != null ? N : ke, et = ge.includes(h), Vt = !te && et, Ee = ze(de, h), mt = NR(h, it, P, U), Dt = mt.active, zt = Fn(mt, FP), Ut = T.useState(!1), Ze = xe(Ut, 2), kt = Ze[0], gt = Ze[1], Zt = function(st) {
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
    return Dt || (re !== "inline" ? kt || ze([se], h) : !1);
  }, [re, Dt, se, kt, h, ze]), ut = DR(Ke.length), Gt = function(st) {
    it || (I == null || I({
      key: h,
      domEvent: st
    }), re === "inline" && Ae(h, !et));
  }, Wn = $v(function(rt) {
    A == null || A(mg(rt)), we(rt);
  }), qt = function(st) {
    re !== "inline" && Ae(h, st);
  }, en = function() {
    Ie(h);
  }, ye = q && "".concat(q, "-popup"), Ne = /* @__PURE__ */ T.createElement("div", an({
    role: "menuitem",
    style: ut,
    className: "".concat(Xe, "-title"),
    tabIndex: it ? null : -1,
    ref: Ve,
    title: typeof m == "string" ? m : null,
    "data-menu-id": te && q ? null : q,
    "aria-expanded": Vt,
    "aria-haspopup": !0,
    "aria-controls": ye,
    "aria-disabled": it,
    onClick: Gt,
    onFocus: en
  }, zt), m, /* @__PURE__ */ T.createElement(AR, {
    icon: re !== "horizontal" ? $e : void 0,
    props: Te(Te({}, o), {}, {
      isOpen: Vt,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ T.createElement("i", {
    className: "".concat(Xe, "-arrow")
  }))), We = T.useRef(re);
  if (re !== "inline" && Ke.length > 1 ? We.current = "vertical" : We.current = re, !te) {
    var xt = We.current;
    Ne = /* @__PURE__ */ T.createElement(UP, {
      mode: xt,
      prefixCls: Xe,
      visible: !E && Vt && re !== "inline",
      popupClassName: L,
      popupOffset: z,
      popupStyle: B,
      popup: /* @__PURE__ */ T.createElement(
        Wv,
        {
          mode: xt === "horizontal" ? "vertical" : xt
        },
        /* @__PURE__ */ T.createElement(ES, {
          id: ye,
          ref: nt
        }, M)
      ),
      disabled: it,
      onVisibleChange: qt
    }, Ne);
  }
  var Mt = /* @__PURE__ */ T.createElement(Dl.Item, an({
    role: "none"
  }, Y, {
    component: "li",
    style: c,
    className: wn(Xe, "".concat(Xe, "-").concat(re), d, (s = {}, tt(s, "".concat(Xe, "-open"), Vt), tt(s, "".concat(Xe, "-active"), Qt), tt(s, "".concat(Xe, "-selected"), Ee), tt(s, "".concat(Xe, "-disabled"), it), s)),
    onMouseEnter: ot,
    onMouseLeave: Wt
  }), Ne, !te && /* @__PURE__ */ T.createElement(jP, {
    id: ye,
    open: Vt,
    keyPath: Ke
  }, M));
  return he && (Mt = he(Mt, o, {
    selected: Ee,
    active: Qt,
    open: Vt,
    disabled: it
  })), /* @__PURE__ */ T.createElement(Wv, {
    onItemClick: Wn,
    mode: re === "horizontal" ? "vertical" : re,
    itemIcon: Nt,
    expandIcon: $e
  }, Mt);
};
function RS(r) {
  var o = r.eventKey, s = r.children, c = np(o), d = wS(s, c), m = Ag();
  T.useEffect(function() {
    if (m)
      return m.registerPath(o, c), function() {
        m.unregisterPath(o, c);
      };
  }, [c]);
  var h;
  return m ? h = d : h = /* @__PURE__ */ T.createElement(BP, r, d), /* @__PURE__ */ T.createElement(_R.Provider, {
    value: c
  }, h);
}
var VP = ["className", "title", "eventKey", "children"], WP = ["children"], KP = function(o) {
  var s = o.className, c = o.title;
  o.eventKey;
  var d = o.children, m = Fn(o, VP), h = T.useContext(Xi), C = h.prefixCls, x = "".concat(C, "-item-group");
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
function t_(r) {
  var o = r.children, s = Fn(r, WP), c = np(s.eventKey), d = wS(o, c), m = Ag();
  return m ? d : /* @__PURE__ */ T.createElement(KP, Lg(s, ["warnKey"]), d);
}
function n_(r) {
  var o = r.className, s = r.style, c = T.useContext(Xi), d = c.prefixCls, m = Ag();
  return m ? null : /* @__PURE__ */ T.createElement("li", {
    role: "separator",
    className: wn("".concat(d, "-item-divider"), o),
    style: s
  });
}
var GP = ["label", "children", "key", "type"];
function F1(r) {
  return (r || []).map(function(o, s) {
    if (o && Vn(o) === "object") {
      var c = o, d = c.label, m = c.children, h = c.key, C = c.type, x = Fn(c, GP), E = h != null ? h : "tmp-".concat(s);
      return m || C === "group" ? C === "group" ? /* @__PURE__ */ T.createElement(t_, an({
        key: E
      }, x, {
        title: d
      }), F1(m)) : /* @__PURE__ */ T.createElement(RS, an({
        key: E
      }, x, {
        title: d
      }), F1(m)) : C === "divider" ? /* @__PURE__ */ T.createElement(n_, an({
        key: E
      }, x)) : /* @__PURE__ */ T.createElement(Pg, an({
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
  return o && (c = F1(o)), wS(c, s);
}
var YP = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"], yf = [], QP = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var s, c, d = r, m = d.prefixCls, h = m === void 0 ? "rc-menu" : m, C = d.rootClassName, x = d.style, E = d.className, M = d.tabIndex, _ = M === void 0 ? 0 : M, N = d.items, L = d.children, z = d.direction, B = d.id, A = d.mode, G = A === void 0 ? "vertical" : A, $ = d.inlineCollapsed, I = d.disabled, P = d.disabledOverflow, U = d.subMenuOpenDelay, Y = U === void 0 ? 0.1 : U, q = d.subMenuCloseDelay, ne = q === void 0 ? 0.1 : q, oe = d.forceSubMenuRender, re = d.defaultOpenKeys, ge = d.openKeys, pe = d.activeKey, te = d.defaultActiveFirst, se = d.selectable, de = se === void 0 ? !0 : se, Ce = d.multiple, ke = Ce === void 0 ? !1 : Ce, we = d.defaultSelectedKeys, Ae = d.selectedKeys, Ie = d.onSelect, ie = d.onDeselect, he = d.inlineIndent, Se = he === void 0 ? 24 : he, ze = d.motion, Ke = d.defaultMotions, Xe = d.triggerSubMenuAction, it = Xe === void 0 ? "hover" : Xe, Ve = d.builtinPlacements, nt = d.itemIcon, Nt = d.expandIcon, $e = d.overflowedIndicator, et = $e === void 0 ? "..." : $e, Vt = d.overflowedIndicatorPopupClassName, Ee = d.getPopupContainer, mt = d.onClick, Dt = d.onOpenChange, zt = d.onKeyDown, Ut = d.openAnimation, Ze = d.openTransitionName, kt = d._internalRenderMenuItem, gt = d._internalRenderSubMenuItem, Zt = Fn(d, YP), ot = T.useMemo(function() {
    return qP(L, N, yf);
  }, [L, N]), Wt = T.useState(!1), Qt = xe(Wt, 2), ut = Qt[0], Gt = Qt[1], Wn = T.useRef(), qt = PL(B), en = z === "rtl";
  process.env.NODE_ENV !== "production" && pa(!Ut && !Ze, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var ye = jv(re, {
    value: ge,
    postState: function(dt) {
      return dt || yf;
    }
  }), Ne = xe(ye, 2), We = Ne[0], xt = Ne[1], Mt = function(dt) {
    var $t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function Tn() {
      xt(dt), Dt == null || Dt(dt);
    }
    $t ? Tg.flushSync(Tn) : Tn();
  }, rt = T.useState(We), st = xe(rt, 2), on = st[0], Ot = st[1], jt = T.useRef(!1), ir = T.useMemo(function() {
    return (G === "inline" || G === "vertical") && $ ? ["vertical", $] : [G, !1];
  }, [G, $]), Bt = xe(ir, 2), dn = Bt[0], Ht = Bt[1], Ue = dn === "inline", St = T.useState(dn), Oe = xe(St, 2), Ge = Oe[0], At = Oe[1], mn = T.useState(Ht), An = xe(mn, 2), gn = An[0], oa = An[1];
  T.useEffect(function() {
    At(dn), oa(Ht), jt.current && (Ue ? xt(on) : Mt(yf));
  }, [dn, Ht]);
  var qr = T.useState(0), Ln = xe(qr, 2), Kt = Ln[0], Bn = Ln[1], Yr = Kt >= ot.length - 1 || Ge !== "horizontal" || P;
  T.useEffect(function() {
    Ue && Ot(We);
  }, [We]), T.useEffect(function() {
    return jt.current = !0, function() {
      jt.current = !1;
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
  var _r = jv(pe || te && ((s = ot[0]) === null || s === void 0 ? void 0 : s.key), {
    value: pe
  }), xn = xe(_r, 2), Ir = xn[0], kr = xn[1], zr = $v(function(Xt) {
    kr(Xt);
  }), Qa = $v(function() {
    kr(void 0);
  });
  KT(o, function() {
    return {
      list: Wn.current,
      focus: function(dt) {
        var $t, Tn = Rr(), On = L1(Tn, qt), Nn = On.elements, vn = On.key2element, er = On.element2key, wi = SS(Wn.current, Nn), Gn = Ir != null ? Ir : wi[0] ? er.get(wi[0]) : ($t = ot.find(function(la) {
          return !la.props.disabled;
        })) === null || $t === void 0 ? void 0 : $t.key, zn = vn.get(Gn);
        if (Gn && zn) {
          var tr;
          zn == null || (tr = zn.focus) === null || tr === void 0 || tr.call(zn, dt);
        }
      }
    };
  });
  var $r = jv(we || [], {
    value: Ae,
    // Legacy convert key to array
    postState: function(dt) {
      return Array.isArray(dt) ? dt : dt == null ? yf : [dt];
    }
  }), Xa = xe($r, 2), gr = Xa[0], Qr = Xa[1], Mr = function(dt) {
    if (de) {
      var $t = dt.key, Tn = gr.includes($t), On;
      ke ? Tn ? On = gr.filter(function(vn) {
        return vn !== $t;
      }) : On = [].concat(ar(gr), [$t]) : On = [$t], Qr(On);
      var Nn = Te(Te({}, dt), {}, {
        selectedKeys: On
      });
      Tn ? ie == null || ie(Nn) : Ie == null || Ie(Nn);
    }
    !ke && We.length && Ge !== "inline" && Mt(yf);
  }, ha = $v(function(Xt) {
    mt == null || mt(mg(Xt)), Mr(Xt);
  }), In = $v(function(Xt, dt) {
    var $t = We.filter(function(On) {
      return On !== Xt;
    });
    if (dt)
      $t.push(Xt);
    else if (Ge !== "inline") {
      var Tn = Ya(Xt);
      $t = $t.filter(function(On) {
        return !Tn.has(On);
      });
    }
    yS(We, $t, !0) || Mt($t, !0);
  }), Kn = function(dt, $t) {
    var Tn = $t != null ? $t : !We.includes(dt);
    In(dt, Tn);
  }, Or = OL(Ge, Ir, en, qt, Wn, Rr, Pr, kr, Kn, zt);
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
    id: B,
    ref: Wn,
    prefixCls: "".concat(h, "-overflow"),
    component: "ul",
    itemComponent: Pg,
    className: wn(h, "".concat(h, "-root"), "".concat(h, "-").concat(Ge), E, (c = {}, tt(c, "".concat(h, "-inline-collapsed"), gn), tt(c, "".concat(h, "-rtl"), en), c), C),
    dir: z,
    style: x,
    role: "menu",
    tabIndex: _,
    data: yr,
    renderRawItem: function(dt) {
      return dt;
    },
    renderRawRest: function(dt) {
      var $t = dt.length, Tn = $t ? ot.slice(-$t) : null;
      return /* @__PURE__ */ T.createElement(RS, {
        eventKey: P1,
        title: et,
        disabled: Yr,
        internalPopupClose: $t === 0,
        popupClassName: Vt
      }, Tn);
    },
    maxCount: Ge !== "horizontal" || P ? Dl.INVALIDATE : Dl.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(dt) {
      Bn(dt);
    },
    onKeyDown: Or
  }, Zt));
  return /* @__PURE__ */ T.createElement(bS.Provider, {
    value: or
  }, /* @__PURE__ */ T.createElement(wR.Provider, {
    value: qt
  }, /* @__PURE__ */ T.createElement(Wv, {
    prefixCls: h,
    rootClassName: C,
    mode: Ge,
    openKeys: We,
    rtl: en,
    disabled: I,
    motion: ut ? ze : null,
    defaultMotions: ut ? Ke : null,
    activeKey: Ir,
    onActive: zr,
    onInactive: Qa,
    selectedKeys: gr,
    inlineIndent: Se,
    subMenuOpenDelay: Y,
    subMenuCloseDelay: ne,
    forceSubMenuRender: oe,
    builtinPlacements: Ve,
    triggerSubMenuAction: it,
    getPopupContainer: Ee,
    itemIcon: nt,
    expandIcon: Nt,
    onItemClick: ha,
    onOpenChange: In
  }, /* @__PURE__ */ T.createElement(kR.Provider, {
    value: Ei
  }, Re), /* @__PURE__ */ T.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ T.createElement(RR.Provider, {
    value: Pn
  }, ot)))));
}), $g = QP;
$g.Item = Pg;
$g.SubMenu = RS;
$g.ItemGroup = t_;
$g.Divider = n_;
var XP = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" };
const ZP = XP;
function Gr(r, o) {
  JP(r) && (r = "100%");
  var s = eI(r);
  return r = o === 360 ? r : Math.min(o, Math.max(0, parseFloat(r))), s && (r = parseInt(String(r * o), 10) / 100), Math.abs(r - o) < 1e-6 ? 1 : (o === 360 ? r = (r < 0 ? r % o + o : r % o) / parseFloat(String(o)) : r = r % o / parseFloat(String(o)), r);
}
function Xm(r) {
  return Math.min(1, Math.max(0, r));
}
function JP(r) {
  return typeof r == "string" && r.indexOf(".") !== -1 && parseFloat(r) === 1;
}
function eI(r) {
  return typeof r == "string" && r.indexOf("%") !== -1;
}
function r_(r) {
  return r = parseFloat(r), (isNaN(r) || r < 0 || r > 1) && (r = 1), r;
}
function Zm(r) {
  return r <= 1 ? "".concat(Number(r) * 100, "%") : r;
}
function Ys(r) {
  return r.length === 1 ? "0" + r : String(r);
}
function tI(r, o, s) {
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
function s1(r, o, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? r + (o - r) * (6 * s) : s < 1 / 2 ? o : s < 2 / 3 ? r + (o - r) * (2 / 3 - s) * 6 : r;
}
function nI(r, o, s) {
  var c, d, m;
  if (r = Gr(r, 360), o = Gr(o, 100), s = Gr(s, 100), o === 0)
    d = s, m = s, c = s;
  else {
    var h = s < 0.5 ? s * (1 + o) : s + o - s * o, C = 2 * s - h;
    c = s1(C, h, r + 1 / 3), d = s1(C, h, r), m = s1(C, h, r - 1 / 3);
  }
  return { r: c * 255, g: d * 255, b: m * 255 };
}
function B1(r, o, s) {
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
function rI(r, o, s) {
  r = Gr(r, 360) * 6, o = Gr(o, 100), s = Gr(s, 100);
  var c = Math.floor(r), d = r - c, m = s * (1 - o), h = s * (1 - d * o), C = s * (1 - (1 - d) * o), x = c % 6, E = [s, h, m, m, C, s][x], M = [C, s, s, h, m, m][x], _ = [m, m, C, s, s, h][x];
  return { r: E * 255, g: M * 255, b: _ * 255 };
}
function V1(r, o, s, c) {
  var d = [
    Ys(Math.round(r).toString(16)),
    Ys(Math.round(o).toString(16)),
    Ys(Math.round(s).toString(16))
  ];
  return c && d[0].startsWith(d[0].charAt(1)) && d[1].startsWith(d[1].charAt(1)) && d[2].startsWith(d[2].charAt(1)) ? d[0].charAt(0) + d[1].charAt(0) + d[2].charAt(0) : d.join("");
}
function aI(r, o, s, c, d) {
  var m = [
    Ys(Math.round(r).toString(16)),
    Ys(Math.round(o).toString(16)),
    Ys(Math.round(s).toString(16)),
    Ys(iI(c))
  ];
  return d && m[0].startsWith(m[0].charAt(1)) && m[1].startsWith(m[1].charAt(1)) && m[2].startsWith(m[2].charAt(1)) && m[3].startsWith(m[3].charAt(1)) ? m[0].charAt(0) + m[1].charAt(0) + m[2].charAt(0) + m[3].charAt(0) : m.join("");
}
function iI(r) {
  return Math.round(parseFloat(r) * 255).toString(16);
}
function lT(r) {
  return Ka(r) / 255;
}
function Ka(r) {
  return parseInt(r, 16);
}
function oI(r) {
  return {
    r: r >> 16,
    g: (r & 65280) >> 8,
    b: r & 255
  };
}
var W1 = {
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
  return typeof r == "string" && (r = sI(r)), typeof r == "object" && (Rl(r.r) && Rl(r.g) && Rl(r.b) ? (o = tI(r.r, r.g, r.b), h = !0, C = String(r.r).substr(-1) === "%" ? "prgb" : "rgb") : Rl(r.h) && Rl(r.s) && Rl(r.v) ? (c = Zm(r.s), d = Zm(r.v), o = rI(r.h, c, d), h = !0, C = "hsv") : Rl(r.h) && Rl(r.s) && Rl(r.l) && (c = Zm(r.s), m = Zm(r.l), o = nI(r.h, c, m), h = !0, C = "hsl"), Object.prototype.hasOwnProperty.call(r, "a") && (s = r.a)), s = r_(s), {
    ok: h,
    format: r.format || C,
    r: Math.min(255, Math.max(o.r, 0)),
    g: Math.min(255, Math.max(o.g, 0)),
    b: Math.min(255, Math.max(o.b, 0)),
    a: s
  };
}
var lI = "[-\\+]?\\d+%?", uI = "[-\\+]?\\d*\\.\\d+%?", ku = "(?:".concat(uI, ")|(?:").concat(lI, ")"), c1 = "[\\s|\\(]+(".concat(ku, ")[,|\\s]+(").concat(ku, ")[,|\\s]+(").concat(ku, ")\\s*\\)?"), f1 = "[\\s|\\(]+(".concat(ku, ")[,|\\s]+(").concat(ku, ")[,|\\s]+(").concat(ku, ")[,|\\s]+(").concat(ku, ")\\s*\\)?"), Gi = {
  CSS_UNIT: new RegExp(ku),
  rgb: new RegExp("rgb" + c1),
  rgba: new RegExp("rgba" + f1),
  hsl: new RegExp("hsl" + c1),
  hsla: new RegExp("hsla" + f1),
  hsv: new RegExp("hsv" + c1),
  hsva: new RegExp("hsva" + f1),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function sI(r) {
  if (r = r.trim().toLowerCase(), r.length === 0)
    return !1;
  var o = !1;
  if (W1[r])
    r = W1[r], o = !0;
  else if (r === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var s = Gi.rgb.exec(r);
  return s ? { r: s[1], g: s[2], b: s[3] } : (s = Gi.rgba.exec(r), s ? { r: s[1], g: s[2], b: s[3], a: s[4] } : (s = Gi.hsl.exec(r), s ? { h: s[1], s: s[2], l: s[3] } : (s = Gi.hsla.exec(r), s ? { h: s[1], s: s[2], l: s[3], a: s[4] } : (s = Gi.hsv.exec(r), s ? { h: s[1], s: s[2], v: s[3] } : (s = Gi.hsva.exec(r), s ? { h: s[1], s: s[2], v: s[3], a: s[4] } : (s = Gi.hex8.exec(r), s ? {
    r: Ka(s[1]),
    g: Ka(s[2]),
    b: Ka(s[3]),
    a: lT(s[4]),
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
    a: lT(s[4] + s[4]),
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
      typeof o == "number" && (o = oI(o)), this.originalInput = o;
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
      return this.a = r_(o), this.roundA = Math.round(100 * this.a) / 100, this;
    }, r.prototype.isMonochrome = function() {
      var o = this.toHsl().s;
      return o === 0;
    }, r.prototype.toHsv = function() {
      var o = B1(this.r, this.g, this.b);
      return { h: o.h * 360, s: o.s, v: o.v, a: this.a };
    }, r.prototype.toHsvString = function() {
      var o = B1(this.r, this.g, this.b), s = Math.round(o.h * 360), c = Math.round(o.s * 100), d = Math.round(o.v * 100);
      return this.a === 1 ? "hsv(".concat(s, ", ").concat(c, "%, ").concat(d, "%)") : "hsva(".concat(s, ", ").concat(c, "%, ").concat(d, "%, ").concat(this.roundA, ")");
    }, r.prototype.toHsl = function() {
      var o = oT(this.r, this.g, this.b);
      return { h: o.h * 360, s: o.s, l: o.l, a: this.a };
    }, r.prototype.toHslString = function() {
      var o = oT(this.r, this.g, this.b), s = Math.round(o.h * 360), c = Math.round(o.s * 100), d = Math.round(o.l * 100);
      return this.a === 1 ? "hsl(".concat(s, ", ").concat(c, "%, ").concat(d, "%)") : "hsla(".concat(s, ", ").concat(c, "%, ").concat(d, "%, ").concat(this.roundA, ")");
    }, r.prototype.toHex = function(o) {
      return o === void 0 && (o = !1), V1(this.r, this.g, this.b, o);
    }, r.prototype.toHexString = function(o) {
      return o === void 0 && (o = !1), "#" + this.toHex(o);
    }, r.prototype.toHex8 = function(o) {
      return o === void 0 && (o = !1), aI(this.r, this.g, this.b, this.a, o);
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
      for (var o = "#" + V1(this.r, this.g, this.b, !1), s = 0, c = Object.entries(W1); s < c.length; s++) {
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
), Jm = 2, uT = 0.16, cI = 0.05, fI = 0.05, dI = 0.15, a_ = 5, i_ = 4, vI = [{
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
  var o = r.r, s = r.g, c = r.b, d = B1(o, s, c);
  return {
    h: d.h * 360,
    s: d.s,
    v: d.v
  };
}
function eg(r) {
  var o = r.r, s = r.g, c = r.b;
  return "#".concat(V1(o, s, c, !1));
}
function pI(r, o, s) {
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
  return s ? c = r.s - uT * o : o === i_ ? c = r.s + uT : c = r.s + cI * o, c > 1 && (c = 1), s && o === a_ && c > 0.1 && (c = 0.1), c < 0.06 && (c = 0.06), Number(c.toFixed(2));
}
function dT(r, o, s) {
  var c;
  return s ? c = r.v + fI * o : c = r.v - dI * o, c > 1 && (c = 1), Number(c.toFixed(2));
}
function Zs(r) {
  for (var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, s = [], c = Ef(r), d = a_; d > 0; d -= 1) {
    var m = sT(c), h = eg(Ef({
      h: cT(m, d, !0),
      s: fT(m, d, !0),
      v: dT(m, d, !0)
    }));
    s.push(h);
  }
  s.push(eg(c));
  for (var C = 1; C <= i_; C += 1) {
    var x = sT(c), E = eg(Ef({
      h: cT(x, C),
      s: fT(x, C),
      v: dT(x, C)
    }));
    s.push(E);
  }
  return o.theme === "dark" ? vI.map(function(M) {
    var _ = M.index, N = M.opacity, L = eg(pI(Ef(o.backgroundColor || "#141414"), Ef(s[_]), N * 100));
    return L;
  }) : s;
}
var d1 = {
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
}, lg = {}, v1 = {};
Object.keys(d1).forEach(function(r) {
  lg[r] = Zs(d1[r]), lg[r].primary = lg[r][5], v1[r] = Zs(d1[r], {
    theme: "dark",
    backgroundColor: "#141414"
  }), v1[r].primary = v1[r][5];
});
var hI = lg.blue, _S = /* @__PURE__ */ Eg({});
function mI(r) {
  return r.replace(/-(.)/g, function(o, s) {
    return s.toUpperCase();
  });
}
function gI(r, o) {
  pa(r, "[@ant-design/icons] ".concat(o));
}
function vT(r) {
  return Vn(r) === "object" && typeof r.name == "string" && typeof r.theme == "string" && (Vn(r.icon) === "object" || typeof r.icon == "function");
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
        delete o[s], o[mI(s)] = c;
    }
    return o;
  }, {});
}
function K1(r, o, s) {
  return s ? /* @__PURE__ */ Oa.createElement(r.tag, Te(Te({
    key: o
  }, pT(r.attrs)), s), (r.children || []).map(function(c, d) {
    return K1(c, "".concat(o, "-").concat(r.tag, "-").concat(d));
  })) : /* @__PURE__ */ Oa.createElement(r.tag, Te({
    key: o
  }, pT(r.attrs)), (r.children || []).map(function(c, d) {
    return K1(c, "".concat(o, "-").concat(r.tag, "-").concat(d));
  }));
}
function o_(r) {
  return Zs(r)[0];
}
function l_(r) {
  return r ? Array.isArray(r) ? r : [r] : [];
}
var yI = `
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
`, bI = function(o) {
  var s = Ou(_S), c = s.csp, d = s.prefixCls, m = yI;
  d && (m = m.replace(/anticon/g, d)), Vo(function() {
    var h = o.current, C = gg(h);
    Du(m, "@ant-design-icons", {
      prepend: !0,
      csp: c,
      attachTo: C
    });
  }, []);
}, SI = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Hv = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function CI(r) {
  var o = r.primaryColor, s = r.secondaryColor;
  Hv.primaryColor = o, Hv.secondaryColor = s || o_(o), Hv.calculated = !!s;
}
function EI() {
  return Te({}, Hv);
}
var Ug = function(o) {
  var s = o.icon, c = o.className, d = o.onClick, m = o.style, h = o.primaryColor, C = o.secondaryColor, x = Fn(o, SI), E = T.useRef(), M = Hv;
  if (h && (M = {
    primaryColor: h,
    secondaryColor: C || o_(h)
  }), bI(E), gI(vT(s), "icon should be icon definiton, but got ".concat(s)), !vT(s))
    return null;
  var _ = s;
  return _ && typeof _.icon == "function" && (_ = Te(Te({}, _), {}, {
    icon: _.icon(M.primaryColor, M.secondaryColor)
  })), K1(_.icon, "svg-".concat(_.name), Te(Te({
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
Ug.getTwoToneColors = EI;
Ug.setTwoToneColors = CI;
const kS = Ug;
function u_(r) {
  var o = l_(r), s = xe(o, 2), c = s[0], d = s[1];
  return kS.setTwoToneColors({
    primaryColor: c,
    secondaryColor: d
  });
}
function wI() {
  var r = kS.getTwoToneColors();
  return r.calculated ? [r.primaryColor, r.secondaryColor] : r.primaryColor;
}
var xI = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
u_(hI.primary);
var jg = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var s, c = r.className, d = r.icon, m = r.spin, h = r.rotate, C = r.tabIndex, x = r.onClick, E = r.twoToneColor, M = Fn(r, xI), _ = T.useContext(_S), N = _.prefixCls, L = N === void 0 ? "anticon" : N, z = _.rootClassName, B = wn(z, L, (s = {}, tt(s, "".concat(L, "-").concat(d.name), !!d.name), tt(s, "".concat(L, "-spin"), !!m || d.name === "loading"), s), c), A = C;
  A === void 0 && x && (A = -1);
  var G = h ? {
    msTransform: "rotate(".concat(h, "deg)"),
    transform: "rotate(".concat(h, "deg)")
  } : void 0, $ = l_(E), I = xe($, 2), P = I[0], U = I[1];
  return /* @__PURE__ */ T.createElement("span", an({
    role: "img",
    "aria-label": d.name
  }, M, {
    ref: o,
    tabIndex: A,
    onClick: x,
    className: B
  }), /* @__PURE__ */ T.createElement(kS, {
    icon: d,
    primaryColor: P,
    secondaryColor: U,
    style: G
  }));
});
jg.displayName = "AntdIcon";
jg.getTwoToneColor = wI;
jg.setTwoToneColor = u_;
const MS = jg;
var s_ = function(o, s) {
  return /* @__PURE__ */ T.createElement(MS, an({}, o, {
    ref: s,
    icon: ZP
  }));
};
process.env.NODE_ENV !== "production" && (s_.displayName = "BarsOutlined");
const TI = /* @__PURE__ */ T.forwardRef(s_);
var RI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
const _I = RI;
var c_ = function(o, s) {
  return /* @__PURE__ */ T.createElement(MS, an({}, o, {
    ref: s,
    icon: _I
  }));
};
process.env.NODE_ENV !== "production" && (c_.displayName = "LeftOutlined");
const hT = /* @__PURE__ */ T.forwardRef(c_);
var kI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
const MI = kI;
var f_ = function(o, s) {
  return /* @__PURE__ */ T.createElement(MS, an({}, o, {
    ref: s,
    icon: MI
  }));
};
process.env.NODE_ENV !== "production" && (f_.displayName = "RightOutlined");
const mT = /* @__PURE__ */ T.forwardRef(f_), OI = (r) => !isNaN(parseFloat(r)) && isFinite(r);
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
var NI = "%";
function G1(r) {
  return r.join(NI);
}
var DI = /* @__PURE__ */ function() {
  function r(o) {
    Zi(this, r), tt(this, "instanceId", void 0), tt(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = o;
  }
  return Ji(r, [{
    key: "get",
    value: function(s) {
      return this.opGet(G1(s));
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
      return this.opUpdate(G1(s), c);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(s, c) {
      var d = this.cache.get(s), m = c(d);
      m === null ? this.cache.delete(s) : this.cache.set(s, m);
    }
  }]), r;
}(), Mf = "data-token-hash", Yi = "data-css-hash", AI = "data-cache-path", Mu = "__cssinjs_instance__";
function LI() {
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
  return new DI(r);
}
var PI = /* @__PURE__ */ T.createContext({
  hashPriority: "low",
  cache: LI(),
  defaultCache: !0
});
const Hg = PI;
function II(r, o) {
  if (r.length !== o.length)
    return !1;
  for (var s = 0; s < r.length; s++)
    if (r[s] !== o[s])
      return !1;
  return !0;
}
var OS = /* @__PURE__ */ function() {
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
          return !II(c, s);
        }), this.deleteByPath(this.cache, s);
    }
  }]), r;
}();
tt(OS, "MAX_CACHE_SIZE", 20);
tt(OS, "MAX_CACHE_OFFSET", 5);
var gT = 0, d_ = /* @__PURE__ */ function() {
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
}(), p1 = new OS();
function q1(r) {
  var o = Array.isArray(r) ? r : [r];
  return p1.has(o) || p1.set(o, new d_(o)), p1.get(o);
}
var zI = /* @__PURE__ */ new WeakMap(), h1 = {};
function $I(r, o) {
  for (var s = zI, c = 0; c < o.length; c += 1) {
    var d = o[c];
    s.has(d) || s.set(d, /* @__PURE__ */ new WeakMap()), s = s.get(d);
  }
  return s.has(h1) || s.set(h1, r()), s.get(h1);
}
var yT = /* @__PURE__ */ new WeakMap();
function Fv(r) {
  var o = yT.get(r) || "";
  return o || (Object.keys(r).forEach(function(s) {
    var c = r[s];
    o += s, c instanceof d_ ? o += c.id : c && Vn(c) === "object" ? o += Fv(c) : o += c;
  }), yT.set(r, o)), o;
}
function bT(r, o) {
  return yg("".concat(o, "_").concat(Fv(r)));
}
var Bv = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), v_ = "_bAmBoO_";
function UI(r, o, s) {
  if (va()) {
    var c, d;
    Du(r, Bv);
    var m = document.createElement("div");
    m.style.position = "fixed", m.style.left = "0", m.style.top = "0", o == null || o(m), document.body.appendChild(m), process.env.NODE_ENV !== "production" && (m.innerHTML = "Test", m.style.zIndex = "9999999");
    var h = s ? s(m) : (c = getComputedStyle(m).content) === null || c === void 0 ? void 0 : c.includes(v_);
    return (d = m.parentNode) === null || d === void 0 || d.removeChild(m), Kv(Bv), h;
  }
  return !1;
}
var m1 = void 0;
function jI() {
  return m1 === void 0 && (m1 = UI("@layer ".concat(Bv, " { .").concat(Bv, ' { content: "').concat(v_, '"!important; } }'), function(r) {
    r.className = Bv;
  })), m1;
}
var Y1 = va();
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
var p_ = function(o) {
  var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(s ? "".concat(s, "-") : "").concat(o).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, HI = function(o, s, c) {
  return Object.keys(o).length ? ".".concat(s).concat(c != null && c.scope ? ".".concat(c.scope) : "", "{").concat(Object.entries(o).map(function(d) {
    var m = xe(d, 2), h = m[0], C = m[1];
    return "".concat(h, ":").concat(C, ";");
  }).join(""), "}") : "";
}, h_ = function(o, s, c) {
  var d = {}, m = {};
  return Object.entries(o).forEach(function(h) {
    var C, x, E = xe(h, 2), M = E[0], _ = E[1];
    if (c != null && (C = c.preserve) !== null && C !== void 0 && C[M])
      m[M] = _;
    else if ((typeof _ == "string" || typeof _ == "number") && !(c != null && (x = c.ignore) !== null && x !== void 0 && x[M])) {
      var N, L = p_(M, c == null ? void 0 : c.prefix);
      d[L] = typeof _ == "number" && !(c != null && (N = c.unitless) !== null && N !== void 0 && N[M]) ? "".concat(_, "px") : String(_), m[M] = "var(".concat(L, ")");
    }
  }), [m, HI(d, s, {
    scope: c == null ? void 0 : c.scope
  })];
}, FI = Te({}, T), ST = FI.useInsertionEffect, BI = function(o, s, c) {
  T.useMemo(o, c), ia(function() {
    return s(!0);
  }, c);
}, VI = ST ? function(r, o, s) {
  return ST(function() {
    return r(), o();
  }, s);
} : BI;
const WI = VI;
var KI = Te({}, T), GI = KI.useInsertionEffect, qI = function(o) {
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
}, YI = function() {
  return function(o) {
    o();
  };
}, QI = typeof GI != "undefined" ? qI : YI;
const XI = QI;
function ZI() {
  return !1;
}
var Q1 = !1;
function JI() {
  return Q1;
}
const ez = process.env.NODE_ENV === "production" ? ZI : JI;
if (process.env.NODE_ENV !== "production" && typeof module != "undefined" && module && module.hot && typeof window != "undefined") {
  var g1 = window;
  if (typeof g1.webpackHotUpdate == "function") {
    var tz = g1.webpackHotUpdate;
    g1.webpackHotUpdate = function() {
      return Q1 = !0, setTimeout(function() {
        Q1 = !1;
      }, 0), tz.apply(void 0, arguments);
    };
  }
}
function NS(r, o, s, c, d) {
  var m = T.useContext(Hg), h = m.cache, C = [r].concat(ar(o)), x = G1(C), E = XI([x]), M = ez(), _ = function(B) {
    h.opUpdate(x, function(A) {
      var G = A || [void 0, void 0], $ = xe(G, 2), I = $[0], P = I === void 0 ? 0 : I, U = $[1], Y = U;
      process.env.NODE_ENV !== "production" && U && M && (c == null || c(Y, M), Y = null);
      var q = Y || s(), ne = [P, q];
      return B ? B(ne) : ne;
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
  return WI(function() {
    d == null || d(L);
  }, function(z) {
    return _(function(B) {
      var A = xe(B, 2), G = A[0], $ = A[1];
      return z && G === 0 && (d == null || d(L)), [G + 1, $];
    }), function() {
      h.opUpdate(x, function(B) {
        var A = B || [], G = xe(A, 2), $ = G[0], I = $ === void 0 ? 0 : $, P = G[1], U = I - 1;
        return U === 0 ? (E(function() {
          (z || !h.opGet(x)) && (c == null || c(P, !1));
        }), null) : [I - 1, P];
      });
    };
  }, [x]), L;
}
var nz = {}, rz = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", qs = /* @__PURE__ */ new Map();
function az(r) {
  qs.set(r, (qs.get(r) || 0) + 1);
}
function iz(r, o) {
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
var oz = 0;
function lz(r, o) {
  qs.set(r, (qs.get(r) || 0) - 1);
  var s = Array.from(qs.keys()), c = s.filter(function(d) {
    var m = qs.get(d) || 0;
    return m <= 0;
  });
  s.length - c.length > oz && c.forEach(function(d) {
    iz(d, o), qs.delete(d);
  });
}
var uz = function(o, s, c, d) {
  var m = c.getDerivativeToken(o), h = Te(Te({}, m), s);
  return d && (h = d(h)), h;
}, m_ = "token";
function sz(r, o) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = Ou(Hg), d = c.cache.instanceId, m = c.container, h = s.salt, C = h === void 0 ? "" : h, x = s.override, E = x === void 0 ? nz : x, M = s.formatToken, _ = s.getComputedToken, N = s.cssVar, L = $I(function() {
    return Object.assign.apply(Object, [{}].concat(ar(o)));
  }, o), z = Fv(L), B = Fv(E), A = N ? Fv(N) : "", G = NS(m_, [C, r.id, z, B, A], function() {
    var $, I = _ ? _(L, E, r) : uz(L, E, r, M), P = Te({}, I), U = "";
    if (N) {
      var Y = h_(I, N.key, {
        prefix: N.prefix,
        ignore: N.ignore,
        unitless: N.unitless,
        preserve: N.preserve
      }), q = xe(Y, 2);
      I = q[0], U = q[1];
    }
    var ne = bT(I, C);
    I._tokenKey = ne, P._tokenKey = bT(P, C);
    var oe = ($ = N == null ? void 0 : N.key) !== null && $ !== void 0 ? $ : ne;
    I._themeKey = oe, az(oe);
    var re = "".concat(rz, "-").concat(yg(ne));
    return I._hashId = re, [I, re, P, U, (N == null ? void 0 : N.key) || ""];
  }, function($) {
    lz($[0]._themeKey, d);
  }, function($) {
    var I = xe($, 4), P = I[0], U = I[3];
    if (N && U) {
      var Y = Du(U, yg("css-variables-".concat(P._themeKey)), {
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
var cz = function(o, s, c) {
  var d = xe(o, 5), m = d[2], h = d[3], C = d[4], x = c || {}, E = x.plain;
  if (!h)
    return null;
  var M = m._tokenKey, _ = -999, N = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(_)
  }, L = bg(h, C, M, N, E);
  return [_, M, L];
}, fz = {
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
}, g_ = "comm", y_ = "rule", b_ = "decl", dz = "@import", vz = "@keyframes", pz = "@layer", S_ = Math.abs, DS = String.fromCharCode;
function C_(r) {
  return r.trim();
}
function ug(r, o, s) {
  return r.replace(o, s);
}
function hz(r, o, s) {
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
function mz(r) {
  return r.length;
}
function tg(r, o) {
  return o.push(r), r;
}
var Fg = 1, Of = 1, E_ = 0, Si = 0, mr = 0, Af = "";
function AS(r, o, s, c, d, m, h, C) {
  return { value: r, root: o, parent: s, type: c, props: d, children: m, line: Fg, column: Of, length: h, return: "", siblings: C };
}
function gz() {
  return mr;
}
function yz() {
  return mr = Si > 0 ? Yv(Af, --Si) : 0, Of--, mr === 10 && (Of = 1, Fg--), mr;
}
function Qi() {
  return mr = Si < E_ ? Yv(Af, Si++) : 0, Of++, mr === 10 && (Of = 1, Fg++), mr;
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
function X1(r) {
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
function bz(r) {
  return Fg = Of = 1, E_ = Ol(Af = r), Si = 0, [];
}
function Sz(r) {
  return Af = "", r;
}
function y1(r) {
  return C_(Bg(Si - 1, Z1(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function Cz(r) {
  for (; (mr = Qs()) && mr < 33; )
    Qi();
  return X1(r) > 2 || X1(mr) > 3 ? "" : " ";
}
function Ez(r, o) {
  for (; --o && Qi() && !(mr < 48 || mr > 102 || mr > 57 && mr < 65 || mr > 70 && mr < 97); )
    ;
  return Bg(r, sg() + (o < 6 && Qs() == 32 && Qi() == 32));
}
function Z1(r) {
  for (; Qi(); )
    switch (mr) {
      case r:
        return Si;
      case 34:
      case 39:
        r !== 34 && r !== 39 && Z1(mr);
        break;
      case 40:
        r === 41 && Z1(r);
        break;
      case 92:
        Qi();
        break;
    }
  return Si;
}
function wz(r, o) {
  for (; Qi() && r + mr !== 57; )
    if (r + mr === 84 && Qs() === 47)
      break;
  return "/*" + Bg(o, Si - 1) + "*" + DS(r === 47 ? r : Qi());
}
function xz(r) {
  for (; !X1(Qs()); )
    Qi();
  return Bg(r, Si);
}
function Tz(r) {
  return Sz(cg("", null, null, null, [""], r = bz(r), 0, [0], r));
}
function cg(r, o, s, c, d, m, h, C, x) {
  for (var E = 0, M = 0, _ = h, N = 0, L = 0, z = 0, B = 1, A = 1, G = 1, $ = 0, I = "", P = d, U = m, Y = c, q = I; A; )
    switch (z = $, $ = Qi()) {
      case 40:
        if (z != 108 && Yv(q, _ - 1) == 58) {
          hz(q += ug(y1($), "&", "&\f"), "&\f", S_(E ? C[E - 1] : 0)) != -1 && (G = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        q += y1($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        q += Cz(z);
        break;
      case 92:
        q += Ez(sg() - 1, 7);
        continue;
      case 47:
        switch (Qs()) {
          case 42:
          case 47:
            tg(Rz(wz(Qi(), sg()), o, s, x), x);
            break;
          default:
            q += "/";
        }
        break;
      case 123 * B:
        C[E++] = Ol(q) * G;
      case 125 * B:
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
            if (tg(Y = CT(q, o, s, E, M, d, C, I, P = [], U = [], _, m), m), $ === 123)
              if (M === 0)
                cg(q, o, Y, Y, P, m, _, C, U);
              else
                switch (N === 99 && Yv(q, 3) === 110 ? 100 : N) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    cg(r, Y, Y, c && tg(CT(r, Y, Y, 0, 0, d, C, I, d, P = [], _, U), U), d, U, _, C, c ? P : U);
                    break;
                  default:
                    cg(q, Y, Y, Y, [""], U, 0, C, U);
                }
        }
        E = M = L = 0, B = G = 1, I = q = "", _ = h;
        break;
      case 58:
        _ = 1 + Ol(q), L = z;
      default:
        if (B < 1) {
          if ($ == 123)
            --B;
          else if ($ == 125 && B++ == 0 && yz() == 125)
            continue;
        }
        switch (q += DS($), $ * B) {
          case 38:
            G = M > 0 ? 1 : (q += "\f", -1);
            break;
          case 44:
            C[E++] = (Ol(q) - 1) * G, G = 1;
            break;
          case 64:
            Qs() === 45 && (q += y1(Qi())), N = Qs(), M = _ = Ol(I = q += xz(sg())), $++;
            break;
          case 45:
            z === 45 && Ol(q) == 2 && (B = 0);
        }
    }
  return m;
}
function CT(r, o, s, c, d, m, h, C, x, E, M, _) {
  for (var N = d - 1, L = d === 0 ? m : [""], z = mz(L), B = 0, A = 0, G = 0; B < c; ++B)
    for (var $ = 0, I = Qv(r, N + 1, N = S_(A = h[B])), P = r; $ < z; ++$)
      (P = C_(A > 0 ? L[$] + " " + I : ug(I, /&\f/g, L[$]))) && (x[G++] = P);
  return AS(r, o, s, d === 0 ? y_ : C, x, E, M, _);
}
function Rz(r, o, s, c) {
  return AS(r, o, s, g_, DS(gz()), Qv(r, 2, -2), 0, c);
}
function ET(r, o, s, c, d) {
  return AS(r, o, s, b_, Qv(r, 0, c), Qv(r, c + 1, -1), c, d);
}
function J1(r, o) {
  for (var s = "", c = 0; c < r.length; c++)
    s += o(r[c], c, r, o) || "";
  return s;
}
function _z(r, o, s, c) {
  switch (r.type) {
    case pz:
      if (r.children.length)
        break;
    case dz:
    case b_:
      return r.return = r.return || r.value;
    case g_:
      return "";
    case vz:
      return r.return = r.value + "{" + J1(r.children, c) + "}";
    case y_:
      if (!Ol(r.value = r.props.join(",")))
        return "";
  }
  return Ol(s = J1(r.children, c)) ? r.return = r.value + "{" + s + "}" : "";
}
function w_(r, o) {
  var s = o.path, c = o.parentSelectors;
  pa(!1, "[Ant Design CSS-in-JS] ".concat(s ? "Error in ".concat(s, ": ") : "").concat(r).concat(c.length ? " Selector: ".concat(c.join(" | ")) : ""));
}
var kz = function(o, s, c) {
  if (o === "content") {
    var d = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, m = ["normal", "none", "initial", "inherit", "unset"];
    (typeof s != "string" || m.indexOf(s) === -1 && !d.test(s) && (s.charAt(0) !== s.charAt(s.length - 1) || s.charAt(0) !== '"' && s.charAt(0) !== "'")) && w_("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(s, "\"'`."), c);
  }
}, Mz = function(o, s, c) {
  o === "animation" && c.hashId && s !== "none" && w_("You seem to be using hashed animation '".concat(s, "', in which case 'animationName' with Keyframe as value is recommended."), c);
}, wT = "data-ant-cssinjs-cache-path", x_ = "_FILE_STYLE__", Xs, T_ = !0;
function Oz() {
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
      T_ = !1, (c = s.parentNode) === null || c === void 0 || c.removeChild(s);
    }
    document.body.removeChild(r);
  }
}
function Nz(r) {
  return Oz(), !!Xs[r];
}
function Dz(r) {
  var o = Xs[r], s = null;
  if (o && va())
    if (T_)
      s = x_;
    else {
      var c = document.querySelector("style[".concat(Yi, '="').concat(Xs[r], '"]'));
      c ? s = c.innerHTML : delete Xs[r];
    }
  return [s, o];
}
var R_ = "_skip_check_", __ = "_multi_value_";
function eS(r) {
  var o = J1(Tz(r), _z);
  return o.replace(/\{%%%\:[^;];}/g, ";");
}
function Az(r) {
  return Vn(r) === "object" && r && (R_ in r || __ in r);
}
function Lz(r, o, s) {
  if (!o)
    return r;
  var c = ".".concat(o), d = s === "low" ? ":where(".concat(c, ")") : c, m = r.split(",").map(function(h) {
    var C, x = h.trim().split(/\s+/), E = x[0] || "", M = ((C = E.match(/^\w+/)) === null || C === void 0 ? void 0 : C[0]) || "";
    return E = "".concat(M).concat(d).concat(E.slice(M.length)), [E].concat(ar(x.slice(1))).join(" ");
  });
  return m.join(",");
}
var Pz = function r(o) {
  var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, d = c.root, m = c.injectHash, h = c.parentSelectors, C = s.hashId, x = s.layer, E = s.path, M = s.hashPriority, _ = s.transformers, N = _ === void 0 ? [] : _, L = s.linters, z = L === void 0 ? [] : L, B = "", A = {};
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
  var I = $(Array.isArray(o) ? o : [o]);
  if (I.forEach(function(Y) {
    var q = typeof Y == "string" && !d ? {} : Y;
    if (typeof q == "string")
      B += "".concat(q, `
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
        if (Vn(re) === "object" && re && (oe !== "animationName" || !re._keyframe) && !Az(re)) {
          var ge = !1, pe = oe.trim(), te = !1;
          (d || m) && C ? pe.startsWith("@") ? ge = !0 : pe = Lz(oe, C, M) : d && !C && (pe === "&" || pe === "") && (pe = "", te = !0);
          var se = r(re, s, {
            root: te,
            injectHash: ge,
            parentSelectors: [].concat(ar(h), [pe])
          }), de = xe(se, 2), Ce = de[0], ke = de[1];
          A = Te(Te({}, A), ke), B += "".concat(pe).concat(Ce);
        } else {
          let Ie = function(ie, he) {
            process.env.NODE_ENV !== "production" && (Vn(re) !== "object" || !(re != null && re[R_])) && [kz, Mz].concat(ar(z)).forEach(function(Ke) {
              return Ke(ie, he, {
                path: E,
                hashId: C,
                parentSelectors: h
              });
            });
            var Se = ie.replace(/[A-Z]/g, function(Ke) {
              return "-".concat(Ke.toLowerCase());
            }), ze = he;
            !fz[ie] && typeof ze == "number" && ze !== 0 && (ze = "".concat(ze, "px")), ie === "animationName" && he !== null && he !== void 0 && he._keyframe && (G(he), ze = he.getName(C)), B += "".concat(Se, ":").concat(ze, ";");
          };
          var we, Ae = (we = re == null ? void 0 : re.value) !== null && we !== void 0 ? we : re;
          Vn(re) === "object" && re !== null && re !== void 0 && re[__] && Array.isArray(Ae) ? Ae.forEach(function(ie) {
            Ie(oe, ie);
          }) : Ie(oe, Ae);
        }
      });
    }
  }), !d)
    B = "{".concat(B, "}");
  else if (x && jI()) {
    var P = x.split(","), U = P[P.length - 1].trim();
    B = "@layer ".concat(U, " {").concat(B, "}"), P.length > 1 && (B = "@layer ".concat(x, "{%%%:%}").concat(B));
  }
  return [B, A];
};
function k_(r, o) {
  return yg("".concat(r.join("%")).concat(o));
}
function Iz() {
  return null;
}
var M_ = "style";
function tS(r, o) {
  var s = r.token, c = r.path, d = r.hashId, m = r.layer, h = r.nonce, C = r.clientOnly, x = r.order, E = x === void 0 ? 0 : x, M = T.useContext(Hg), _ = M.autoClear, N = M.mock, L = M.defaultCache, z = M.hashPriority, B = M.container, A = M.ssrInline, G = M.transformers, $ = M.linters, I = M.cache, P = s._tokenKey, U = [P].concat(ar(c)), Y = Y1;
  process.env.NODE_ENV !== "production" && N !== void 0 && (Y = N === "client");
  var q = NS(
    M_,
    U,
    // Create cache if needed
    function() {
      var pe = U.join("|");
      if (Nz(pe)) {
        var te = Dz(pe), se = xe(te, 2), de = se[0], Ce = se[1];
        if (de)
          return [de, P, Ce, {}, C, E];
      }
      var ke = o(), we = Pz(ke, {
        hashId: d,
        hashPriority: z,
        layer: m,
        path: c.join("-"),
        transformers: G,
        linters: $
      }), Ae = xe(we, 2), Ie = Ae[0], ie = Ae[1], he = eS(Ie), Se = k_(U, he);
      return [he, P, Se, ie, C, E];
    },
    // Remove cache if no need
    function(pe, te) {
      var se = xe(pe, 3), de = se[2];
      (te || _) && Y1 && Kv(de, {
        mark: Yi
      });
    },
    // Effect: Inject style here
    function(pe) {
      var te = xe(pe, 4), se = te[0];
      te[1];
      var de = te[2], Ce = te[3];
      if (Y && se !== x_) {
        var ke = {
          mark: Yi,
          prepend: "queue",
          attachTo: B,
          priority: E
        }, we = typeof h == "function" ? h() : h;
        we && (ke.csp = {
          nonce: we
        });
        var Ae = Du(se, de, ke);
        Ae[Mu] = I.instanceId, Ae.setAttribute(Mf, P), process.env.NODE_ENV !== "production" && Ae.setAttribute(AI, U.join("|")), Object.keys(Ce).forEach(function(Ie) {
          Du(eS(Ce[Ie]), "_effect-".concat(Ie), ke);
        });
      }
    }
  ), ne = xe(q, 3), oe = ne[0], re = ne[1], ge = ne[2];
  return function(pe) {
    var te;
    if (!A || Y || !L)
      te = /* @__PURE__ */ T.createElement(Iz, null);
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
var zz = function(o, s, c) {
  var d = xe(o, 6), m = d[0], h = d[1], C = d[2], x = d[3], E = d[4], M = d[5], _ = c || {}, N = _.plain;
  if (E)
    return null;
  var L = m, z = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(M)
  };
  return L = bg(m, h, C, z, N), x && Object.keys(x).forEach(function(B) {
    if (!s[B]) {
      s[B] = !0;
      var A = eS(x[B]);
      L += bg(A, h, "_effect-".concat(B), z, N);
    }
  }), [M, C, L];
}, O_ = "cssVar", $z = function(o, s) {
  var c = o.key, d = o.prefix, m = o.unitless, h = o.ignore, C = o.token, x = o.scope, E = x === void 0 ? "" : x, M = Ou(Hg), _ = M.cache.instanceId, N = M.container, L = C._tokenKey, z = [].concat(ar(o.path), [c, E, L]), B = NS(O_, z, function() {
    var A = s(), G = h_(A, c, {
      prefix: d,
      unitless: m,
      ignore: h,
      scope: E
    }), $ = xe(G, 2), I = $[0], P = $[1], U = k_(z, P);
    return [I, P, U, c];
  }, function(A) {
    var G = xe(A, 3), $ = G[2];
    Y1 && Kv($, {
      mark: Yi
    });
  }, function(A) {
    var G = xe(A, 3), $ = G[1], I = G[2];
    if ($) {
      var P = Du($, I, {
        mark: Yi,
        prepend: "queue",
        attachTo: N,
        priority: -999
      });
      P[Mu] = _, P.setAttribute(Mf, c);
    }
  });
  return B;
}, Uz = function(o, s, c) {
  var d = xe(o, 4), m = d[1], h = d[2], C = d[3], x = c || {}, E = x.plain;
  if (!m)
    return null;
  var M = -999, _ = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(M)
  }, N = bg(m, C, h, _, E);
  return [M, h, N];
}, Iv;
Iv = {}, tt(Iv, M_, zz), tt(Iv, m_, cz), tt(Iv, O_, Uz);
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
function jz(r) {
  return eR(r) || JT(r) || pS(r) || tR();
}
function nS(r, o) {
  for (var s = r, c = 0; c < o.length; c += 1) {
    if (s == null)
      return;
    s = s[o[c]];
  }
  return s;
}
function N_(r, o, s, c) {
  if (!o.length)
    return s;
  var d = jz(o), m = d[0], h = d.slice(1), C;
  return !r && typeof m == "number" ? C = [] : Array.isArray(r) ? C = ar(r) : C = Te({}, r), c && s === void 0 && h.length === 1 ? delete C[m][h[0]] : C[m] = N_(C[m], h, s, c), C;
}
function b1(r, o, s) {
  var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return o.length && c && s === void 0 && !nS(r, o.slice(0, -1)) ? r : N_(r, o, s, c);
}
function Hz(r) {
  return Vn(r) === "object" && r !== null && Object.getPrototypeOf(r) === Object.prototype;
}
function xT(r) {
  return Array.isArray(r) ? [] : {};
}
var Fz = typeof Reflect == "undefined" ? Object.keys : Reflect.ownKeys;
function Bz() {
  for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
    o[s] = arguments[s];
  var c = xT(o[0]);
  return o.forEach(function(d) {
    function m(h, C) {
      var x = new Set(C), E = nS(d, h), M = Array.isArray(E);
      if (M || Hz(E)) {
        if (!x.has(E)) {
          x.add(E);
          var _ = nS(c, h);
          M ? c = b1(c, h, []) : (!_ || Vn(_) !== "object") && (c = b1(c, h, xT(E))), Fz(E).forEach(function(N) {
            m([].concat(ar(h), [N]), x);
          });
        }
      } else
        c = b1(c, h, E);
    }
    m([]);
  }), c;
}
function D_() {
}
let kl = null;
function Vz() {
  kl = null, rR();
}
let LS = D_;
process.env.NODE_ENV !== "production" && (LS = (r, o, s) => {
  pa(r, `[antd: ${o}] ${s}`), process.env.NODE_ENV === "test" && Vz();
});
const A_ = /* @__PURE__ */ T.createContext({}), Vg = process.env.NODE_ENV !== "production" ? (r) => {
  const {
    strict: o
  } = T.useContext(A_), s = (c, d, m) => {
    if (!c)
      if (o === !1 && d === "deprecated") {
        const h = kl;
        kl || (kl = {}), kl[r] = kl[r] || [], kl[r].includes(m || "") || kl[r].push(m || ""), h || console.warn("[antd] There exists deprecated usage in your code:", kl);
      } else
        process.env.NODE_ENV !== "production" && LS(c, r, m);
  };
  return s.deprecated = (c, d, m, h) => {
    s(c, "deprecated", `\`${d}\` is deprecated. Please use \`${m}\` instead.${h ? ` ${h}` : ""}`);
  }, s;
} : () => {
  const r = () => {
  };
  return r.deprecated = D_, r;
}, Wg = LS, Wz = /* @__PURE__ */ Eg(void 0);
var Kz = {
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
}, Gz = {
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
const qz = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, L_ = qz, Yz = {
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
  }, Gz),
  timePickerLocale: Object.assign({}, L_)
}, TT = Yz, Wa = "${label} is not a valid ${type}", Kg = {
  locale: "en",
  Pagination: Kz,
  DatePicker: TT,
  TimePicker: L_,
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
Object.assign({}, Kg.Modal);
let fg = [];
const RT = () => fg.reduce((r, o) => Object.assign(Object.assign({}, r), o), Kg.Modal);
function Qz(r) {
  if (r) {
    const o = Object.assign({}, r);
    return fg.push(o), RT(), () => {
      fg = fg.filter((s) => s !== o), RT();
    };
  }
  Object.assign({}, Kg.Modal);
}
const Xz = /* @__PURE__ */ Eg(void 0), P_ = Xz, I_ = "internalMark", z_ = (r) => {
  const {
    locale: o = {},
    children: s,
    _ANT_MARK__: c
  } = r;
  if (process.env.NODE_ENV !== "production") {
    const m = Vg("LocaleProvider");
    process.env.NODE_ENV !== "production" && m(c === I_, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  T.useEffect(() => Qz(o && o.Modal), [o]);
  const d = T.useMemo(() => Object.assign(Object.assign({}, o), {
    exist: !0
  }), [o]);
  return /* @__PURE__ */ T.createElement(P_.Provider, {
    value: d
  }, s);
};
process.env.NODE_ENV !== "production" && (z_.displayName = "LocaleProvider");
const Zz = z_, Jz = (r) => {
  const {
    controlHeight: o
  } = r;
  return {
    controlHeightSM: o * 0.75,
    controlHeightXS: o * 0.5,
    controlHeightLG: o * 1.25
  };
};
function e3(r) {
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
const $_ = {
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
}, t3 = Object.assign(Object.assign({}, $_), {
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
}), Xv = t3;
function n3(r, o) {
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
  } = r, _ = s(x), N = s(d), L = s(m), z = s(h), B = s(C), A = c(E, M), G = r.colorLink || r.colorInfo, $ = s(G);
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
    colorErrorBg: z[1],
    colorErrorBgHover: z[2],
    colorErrorBorder: z[3],
    colorErrorBorderHover: z[4],
    colorErrorHover: z[5],
    colorError: z[6],
    colorErrorActive: z[7],
    colorErrorTextHover: z[8],
    colorErrorText: z[9],
    colorErrorTextActive: z[10],
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
    colorInfoBg: B[1],
    colorInfoBgHover: B[2],
    colorInfoBorder: B[3],
    colorInfoBorderHover: B[4],
    colorInfoHover: B[4],
    colorInfo: B[6],
    colorInfoActive: B[7],
    colorInfoTextHover: B[8],
    colorInfoText: B[9],
    colorInfoTextActive: B[10],
    colorLinkHover: $[4],
    colorLink: $[6],
    colorLinkActive: $[7],
    colorBgMask: new Ga("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const r3 = (r) => {
  let o = r, s = r, c = r, d = r;
  return r < 6 && r >= 5 ? o = r + 1 : r < 16 && r >= 6 ? o = r + 2 : r >= 16 && (o = 16), r < 7 && r >= 5 ? s = 4 : r < 8 && r >= 7 ? s = 5 : r < 14 && r >= 8 ? s = 6 : r < 16 && r >= 14 ? s = 7 : r >= 16 && (s = 8), r < 6 && r >= 2 ? c = 1 : r >= 6 && (c = 2), r > 4 && r < 8 ? d = 4 : r >= 8 && (d = 6), {
    borderRadius: r,
    borderRadiusXS: c,
    borderRadiusSM: s,
    borderRadiusLG: o,
    borderRadiusOuter: d
  };
};
function a3(r) {
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
  }, r3(c));
}
const _l = (r, o) => new Ga(r).setAlpha(o).toRgbString(), zv = (r, o) => new Ga(r).darken(o).toHexString(), i3 = (r) => {
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
}, o3 = (r, o) => {
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
    colorBgLayout: zv(s, 4),
    colorBgContainer: zv(s, 0),
    colorBgElevated: zv(s, 0),
    colorBgSpotlight: _l(c, 0.85),
    colorBgBlur: "transparent",
    colorBorder: zv(s, 15),
    colorBorderSecondary: zv(s, 6)
  };
};
function l3(r) {
  return (r + 8) / r;
}
function u3(r) {
  const o = new Array(10).fill(null).map((s, c) => {
    const d = c - 1, m = r * Math.pow(2.71828, d / 5), h = c > 1 ? Math.floor(m) : Math.ceil(m);
    return Math.floor(h / 2) * 2;
  });
  return o[1] = r, o.map((s) => ({
    size: s,
    lineHeight: l3(s)
  }));
}
const s3 = (r) => {
  const o = u3(r), s = o.map((M) => M.size), c = o.map((M) => M.lineHeight), d = s[1], m = s[0], h = s[2], C = c[1], x = c[0], E = c[2];
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
function c3(r) {
  const o = Object.keys($_).map((s) => {
    const c = Zs(r[s]);
    return new Array(10).fill(1).reduce((d, m, h) => (d[`${s}-${h + 1}`] = c[h], d[`${s}${h + 1}`] = c[h], d), {});
  }).reduce((s, c) => (s = Object.assign(Object.assign({}, s), c), s), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r), o), n3(r, {
    generateColorPalettes: i3,
    generateNeutralColorPalettes: o3
  })), s3(r.fontSize)), e3(r)), Jz(r)), a3(r));
}
const U_ = q1(c3), j_ = {
  token: Xv,
  override: {
    override: Xv
  },
  hashed: !0
}, H_ = /* @__PURE__ */ Oa.createContext(j_), F_ = "anticon", f3 = (r, o) => o || (r ? `ant-${r}` : "ant"), ec = /* @__PURE__ */ T.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: f3,
  iconPrefixCls: F_
}), d3 = `-ant-${Date.now()}-${Math.random()}`;
function v3(r, o) {
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
function p3(r, o) {
  const s = v3(r, o);
  va() ? Du(s, `${d3}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Wg(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const rS = /* @__PURE__ */ T.createContext(!1), h3 = (r) => {
  let {
    children: o,
    disabled: s
  } = r;
  const c = T.useContext(rS);
  return /* @__PURE__ */ T.createElement(rS.Provider, {
    value: s != null ? s : c
  }, o);
}, m3 = rS, aS = /* @__PURE__ */ T.createContext(void 0), g3 = (r) => {
  let {
    children: o,
    size: s
  } = r;
  const c = T.useContext(aS);
  return /* @__PURE__ */ T.createElement(aS.Provider, {
    value: s || c
  }, o);
}, PS = aS;
function y3() {
  const r = Ou(m3), o = Ou(PS);
  return {
    componentDisabled: r,
    componentSize: o
  };
}
const Sg = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], b3 = "5.13.2";
function S1(r) {
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
    if (S1(M) && S1(_) && S1(N))
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
var S3 = function(r, o) {
  var s = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (s[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (s[c[d]] = r[c[d]]);
  return s;
};
function B_(r) {
  const {
    override: o
  } = r, s = S3(r, ["override"]), c = Object.assign({}, o);
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
const V_ = {
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
}, W_ = {
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
}, C3 = {
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
}, K_ = (r, o, s) => {
  const c = s.getDerivativeToken(r), {
    override: d
  } = o, m = _T(o, ["override"]);
  let h = Object.assign(Object.assign({}, c), {
    override: d
  });
  return h = B_(h), m && Object.entries(m).forEach((C) => {
    let [x, E] = C;
    const {
      theme: M
    } = E, _ = _T(E, ["theme"]);
    let N = _;
    M && (N = K_(Object.assign(Object.assign({}, h), _), {
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
  } = Oa.useContext(H_), m = `${b3}-${o || ""}`, h = s || U_, [C, x, E] = sz(h, [Xv, r], {
    salt: m,
    override: c,
    getComputedToken: K_,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: B_,
    cssVar: d && {
      prefix: d.prefix,
      key: d.key,
      unitless: V_,
      ignore: W_,
      preserve: C3
    }
  });
  return [h, E, o ? x : "", C, d];
}
const E3 = function(r) {
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
}, w3 = () => ({
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
}), x3 = (r) => ({
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
}), T3 = (r, o) => {
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
let R3 = /* @__PURE__ */ Ji(function r() {
  Zi(this, r);
});
const G_ = R3;
function _3(r, o, s) {
  return o = Nu(o), gS(r, Og() ? Reflect.construct(o, s || [], Nu(r).constructor) : o.apply(r, s));
}
let k3 = /* @__PURE__ */ function(r) {
  Nf(o, r);
  function o(s) {
    var c;
    return Zi(this, o), c = _3(this, o), c.result = 0, s instanceof o ? c.result = s.result : typeof s == "number" && (c.result = s), c;
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
}(G_);
function M3(r, o, s) {
  return o = Nu(o), gS(r, Og() ? Reflect.construct(o, s || [], Nu(r).constructor) : o.apply(r, s));
}
const q_ = "CALC_UNIT";
function C1(r) {
  return typeof r == "number" ? `${r}${q_}` : r;
}
let O3 = /* @__PURE__ */ function(r) {
  Nf(o, r);
  function o(s) {
    var c;
    return Zi(this, o), c = M3(this, o), c.result = "", s instanceof o ? c.result = `(${s.result})` : typeof s == "number" ? c.result = C1(s) : typeof s == "string" && (c.result = s), c;
  }
  return Ji(o, [{
    key: "add",
    value: function(c) {
      return c instanceof o ? this.result = `${this.result} + ${c.getResult()}` : (typeof c == "number" || typeof c == "string") && (this.result = `${this.result} + ${C1(c)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(c) {
      return c instanceof o ? this.result = `${this.result} - ${c.getResult()}` : (typeof c == "number" || typeof c == "string") && (this.result = `${this.result} - ${C1(c)}`), this.lowPriority = !0, this;
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
      } = c || {}, m = new RegExp(`${q_}`, "g");
      return this.result = this.result.replace(m, d ? "px" : ""), typeof this.lowPriority != "undefined" ? `calc(${this.result})` : this.result;
    }
  }]), o;
}(G_);
const N3 = (r) => {
  const o = r === "css" ? O3 : k3;
  return (s) => new o(s);
};
function D3(r) {
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
const Y_ = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC != "undefined";
let iS = !0;
function Gg() {
  for (var r = arguments.length, o = new Array(r), s = 0; s < r; s++)
    o[s] = arguments[s];
  if (!Y_)
    return Object.assign.apply(Object, [{}].concat(o));
  iS = !1;
  const c = {};
  return o.forEach((d) => {
    Object.keys(d).forEach((h) => {
      Object.defineProperty(c, h, {
        configurable: !0,
        enumerable: !0,
        get: () => d[h]
      });
    });
  }), iS = !0, c;
}
const kT = {};
function A3() {
}
const L3 = (r) => {
  let o, s = r, c = A3;
  return Y_ && typeof Proxy != "undefined" && (o = /* @__PURE__ */ new Set(), s = new Proxy(r, {
    get(d, m) {
      return iS && o.add(m), d[m];
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
}, Q_ = (r, o) => {
  const [s, c] = Js();
  return tS({
    theme: s,
    token: c,
    hashId: "",
    path: ["ant-design-icons", r],
    nonce: () => o == null ? void 0 : o.nonce
  }, () => [{
    [`.${r}`]: Object.assign(Object.assign({}, w3()), {
      [`.${r} .${r}-icon`]: {
        display: "block"
      }
    })
  }]);
}, X_ = (r, o, s) => {
  var c;
  return typeof s == "function" ? s(Gg(o, (c = o[r]) !== null && c !== void 0 ? c : {})) : s != null ? s : {};
}, Z_ = (r, o, s, c) => {
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
}, P3 = (r, o) => `${[o, r.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function I3(r, o, s) {
  let c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const d = Array.isArray(r) ? r : [r, r], [m] = d, h = d.join("-");
  return (C) => {
    const [x, E, M, _, N] = Js(), {
      getPrefixCls: L,
      iconPrefixCls: z,
      csp: B
    } = Ou(ec), A = L(), G = N ? "css" : "js", $ = N3(G), {
      max: I,
      min: P
    } = D3(G), U = {
      theme: x,
      token: _,
      hashId: M,
      nonce: () => B == null ? void 0 : B.nonce,
      clientOnly: c.clientOnly,
      // antd is always at top of styles
      order: c.order || -999
    };
    return tS(Object.assign(Object.assign({}, U), {
      clientOnly: !1,
      path: ["Shared", A]
    }), () => [{
      // Link
      "&": x3(_)
    }]), Q_(z, B), [tS(Object.assign(Object.assign({}, U), {
      path: [h, C, z]
    }), () => {
      if (c.injectStyle === !1)
        return [];
      const {
        token: q,
        flush: ne
      } = L3(_), oe = X_(m, E, s), re = `.${C}`, ge = Z_(m, E, oe, {
        deprecatedTokens: c.deprecatedTokens
      });
      N && Object.keys(oe).forEach((se) => {
        oe[se] = `var(${p_(se, P3(m, N.prefix))})`;
      });
      const pe = Gg(q, {
        componentCls: re,
        prefixCls: C,
        iconCls: `.${z}`,
        antCls: `.${A}`,
        calc: $,
        max: I,
        min: P
      }, N ? oe : ge), te = o(pe, {
        hashId: M,
        prefixCls: C,
        rootPrefixCls: A,
        iconPrefixCls: z
      });
      return ne(m, ge), [c.resetStyle === !1 ? null : T3(pe, C), te];
    }), M];
  };
}
const z3 = (r, o, s) => {
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
    return $z({
      path: [r],
      prefix: _.prefix,
      key: _ == null ? void 0 : _.key,
      unitless: Object.assign(Object.assign({}, V_), h),
      ignore: W_,
      token: N,
      scope: M
    }, () => {
      const L = X_(r, N, o), z = Z_(r, N, L, {
        deprecatedTokens: s == null ? void 0 : s.deprecatedTokens
      });
      return Object.keys(L).forEach((B) => {
        z[c(B)] = z[B], delete z[B];
      }), z;
    }), null;
  };
  return (E) => {
    const [, , , , M] = Js();
    return [(_) => m && M ? /* @__PURE__ */ Oa.createElement(Oa.Fragment, null, /* @__PURE__ */ Oa.createElement(C, {
      rootCls: E,
      cssVar: M,
      component: r
    }), _) : _, M == null ? void 0 : M.key];
  };
}, $3 = (r, o, s, c) => {
  const d = I3(r, o, s, c), m = z3(Array.isArray(r) ? r[0] : r, s, c);
  return function(h) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : h;
    const [, x] = d(h), [E, M] = m(C);
    return [E, x, M];
  };
};
function U3(r, o) {
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
const j3 = Object.assign({}, T), {
  useId: MT
} = j3, H3 = () => "", F3 = typeof MT == "undefined" ? H3 : MT;
function B3(r, o) {
  var s;
  const c = Vg("ConfigProvider"), d = r || {}, m = d.inherit === !1 || !o ? j_ : o, h = F3();
  if (process.env.NODE_ENV !== "production") {
    const C = d.cssVar || m.cssVar, x = !!(typeof d.cssVar == "object" && (!((s = d.cssVar) === null || s === void 0) && s.key) || h);
    process.env.NODE_ENV !== "production" && c(!C || x, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Rg(() => {
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
    return !yS(E, _, !0);
  }));
}
function V3(r) {
  const {
    children: o
  } = r, [, s] = Js(), {
    motion: c
  } = s, d = T.useRef(!1);
  return d.current = d.current || c === !1, d.current ? /* @__PURE__ */ T.createElement(lP, {
    motion: c
  }, o) : o;
}
const J_ = /* @__PURE__ */ T.memo((r) => {
  let {
    dropdownMatchSelectWidth: o
  } = r;
  return Vg("ConfigProvider").deprecated(o === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (J_.displayName = "PropWarning");
const W3 = process.env.NODE_ENV !== "production" ? J_ : () => null;
var K3 = function(r, o) {
  var s = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (s[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (s[c[d]] = r[c[d]]);
  return s;
};
let oS = !1;
process.env.NODE_ENV;
const G3 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], q3 = "ant";
let ek;
function Y3() {
  return ek || q3;
}
function Q3(r) {
  return Object.keys(r).some((o) => o.endsWith("Color"));
}
const X3 = (r) => {
  const {
    prefixCls: o,
    iconPrefixCls: s,
    theme: c,
    holderRender: d
  } = r;
  o !== void 0 && (ek = o), c && Q3(c) && (process.env.NODE_ENV !== "production" && Wg(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), p3(Y3(), c));
}, Z3 = (r) => {
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
    popupOverflow: z,
    legacyLocale: B,
    parentContext: A,
    iconPrefixCls: G,
    theme: $,
    componentDisabled: I,
    segmented: P,
    statistic: U,
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
    list: Ie,
    mentions: ie,
    modal: he,
    progress: Se,
    result: ze,
    slider: Ke,
    breadcrumb: Xe,
    menu: it,
    pagination: Ve,
    input: nt,
    empty: Nt,
    badge: $e,
    radio: et,
    rate: Vt,
    switch: Ee,
    transfer: mt,
    avatar: Dt,
    message: zt,
    tag: Ut,
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
    dropdown: Ne,
    warning: We
  } = r, xt = T.useCallback((Ue, St) => {
    const {
      prefixCls: Oe
    } = r;
    if (St)
      return St;
    const Ge = Oe || A.getPrefixCls("");
    return Ue ? `${Ge}-${Ue}` : Ge;
  }, [A.getPrefixCls, r.prefixCls]), Mt = G || A.iconPrefixCls || F_, rt = s || A.csp;
  Q_(Mt, rt);
  const st = B3($, A.theme);
  process.env.NODE_ENV !== "production" && (oS = oS || !!st);
  const on = {
    csp: rt,
    autoInsertSpaceInButton: c,
    alert: d,
    anchor: m,
    locale: C || B,
    direction: E,
    space: M,
    virtual: _,
    popupMatchSelectWidth: L != null ? L : N,
    popupOverflow: z,
    getPrefixCls: xt,
    iconPrefixCls: Mt,
    theme: st,
    segmented: P,
    statistic: U,
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
    list: Ie,
    mentions: ie,
    modal: he,
    progress: Se,
    result: ze,
    slider: Ke,
    breadcrumb: Xe,
    menu: it,
    pagination: Ve,
    empty: Nt,
    badge: $e,
    radio: et,
    rate: Vt,
    switch: Ee,
    transfer: mt,
    avatar: Dt,
    message: zt,
    tag: Ut,
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
    dropdown: Ne,
    warning: We
  }, Ot = Object.assign({}, A);
  Object.keys(on).forEach((Ue) => {
    on[Ue] !== void 0 && (Ot[Ue] = on[Ue]);
  }), G3.forEach((Ue) => {
    const St = r[Ue];
    St && (Ot[Ue] = St);
  });
  const jt = Rg(() => Ot, Ot, (Ue, St) => {
    const Oe = Object.keys(Ue), Ge = Object.keys(St);
    return Oe.length !== Ge.length || Oe.some((At) => Ue[At] !== St[At]);
  }), ir = T.useMemo(() => ({
    prefixCls: Mt,
    csp: rt
  }), [Mt, rt]);
  let Bt = /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(W3, {
    dropdownMatchSelectWidth: N
  }), o);
  const dn = T.useMemo(() => {
    var Ue, St, Oe, Ge;
    return Bz(((Ue = Kg.Form) === null || Ue === void 0 ? void 0 : Ue.defaultValidateMessages) || {}, ((Oe = (St = jt.locale) === null || St === void 0 ? void 0 : St.Form) === null || Oe === void 0 ? void 0 : Oe.defaultValidateMessages) || {}, ((Ge = jt.form) === null || Ge === void 0 ? void 0 : Ge.validateMessages) || {}, (h == null ? void 0 : h.validateMessages) || {});
  }, [jt, h == null ? void 0 : h.validateMessages]);
  Object.keys(dn).length > 0 && (Bt = /* @__PURE__ */ T.createElement(Wz.Provider, {
    value: dn
  }, Bt)), C && (Bt = /* @__PURE__ */ T.createElement(Zz, {
    locale: C,
    _ANT_MARK__: I_
  }, Bt)), (Mt || rt) && (Bt = /* @__PURE__ */ T.createElement(_S.Provider, {
    value: ir
  }, Bt)), x && (Bt = /* @__PURE__ */ T.createElement(g3, {
    size: x
  }, Bt)), Bt = /* @__PURE__ */ T.createElement(V3, null, Bt);
  const Ht = T.useMemo(() => {
    const Ue = st || {}, {
      algorithm: St,
      token: Oe,
      components: Ge,
      cssVar: At
    } = Ue, mn = K3(Ue, ["algorithm", "token", "components", "cssVar"]), An = St && (!Array.isArray(St) || St.length > 0) ? q1(St) : U_, gn = {};
    Object.entries(Ge || {}).forEach((qr) => {
      let [Ln, Kt] = qr;
      const Bn = Object.assign({}, Kt);
      "algorithm" in Bn && (Bn.algorithm === !0 ? Bn.theme = An : (Array.isArray(Bn.algorithm) || typeof Bn.algorithm == "function") && (Bn.theme = q1(Bn.algorithm)), delete Bn.algorithm), gn[Ln] = Bn;
    });
    const oa = Object.assign(Object.assign({}, Xv), Oe);
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
  return $ && (Bt = /* @__PURE__ */ T.createElement(H_.Provider, {
    value: Ht
  }, Bt)), jt.warning && (Bt = /* @__PURE__ */ T.createElement(A_.Provider, {
    value: jt.warning
  }, Bt)), I !== void 0 && (Bt = /* @__PURE__ */ T.createElement(h3, {
    disabled: I
  }, Bt)), /* @__PURE__ */ T.createElement(ec.Provider, {
    value: jt
  }, Bt);
}, Lf = (r) => {
  const o = T.useContext(ec), s = T.useContext(P_);
  return /* @__PURE__ */ T.createElement(Z3, Object.assign({
    parentContext: o,
    legacyLocale: s
  }, r));
};
Lf.ConfigContext = ec;
Lf.SizeContext = PS;
Lf.config = X3;
Lf.useConfig = y3;
Object.defineProperty(Lf, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Wg(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), PS)
});
process.env.NODE_ENV !== "production" && (Lf.displayName = "ConfigProvider");
const J3 = /* @__PURE__ */ T.createContext({
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
}, tk = /* @__PURE__ */ T.createContext({}), t4 = /* @__PURE__ */ (() => {
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
    breakpoint: z,
    onCollapse: B,
    onBreakpoint: A
  } = r, G = e4(r, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), {
    siderHook: $
  } = Ou(J3), [I, P] = Wo("collapsed" in r ? r.collapsed : h), [U, Y] = Wo(!1);
  Vo(() => {
    "collapsed" in r && P(r.collapsed);
  }, [r.collapsed]);
  const q = (te, se) => {
    "collapsed" in r || P(te), B == null || B(te, se);
  }, ne = Ma();
  ne.current = (te) => {
    Y(te.matches), A == null || A(te.matches), I !== te.matches && q(te.matches, "responsive");
  }, Vo(() => {
    function te(de) {
      return ne.current(de);
    }
    let se;
    if (typeof window != "undefined") {
      const {
        matchMedia: de
      } = window;
      if (de && z && z in OT) {
        se = de(`screen and (max-width: ${OT[z]})`);
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
  }, [z]), Vo(() => {
    const te = t4("ant-sider-");
    return $.addSider(te), () => $.removeSider(te);
  }, []);
  const oe = () => {
    q(!I, "clickTrigger");
  }, {
    getPrefixCls: re
  } = Ou(ec), ge = () => {
    const te = re("layout-sider", s), se = Lg(G, ["collapsed"]), de = I ? N : _, Ce = OI(de) ? `${de}px` : String(de), ke = parseFloat(String(N || 0)) === 0 ? /* @__PURE__ */ T.createElement("span", {
      onClick: oe,
      className: wn(`${te}-zero-width-trigger`, `${te}-zero-width-trigger-${M ? "right" : "left"}`),
      style: L
    }, d || /* @__PURE__ */ T.createElement(TI, null)) : null, Ie = {
      expanded: M ? /* @__PURE__ */ T.createElement(mT, null) : /* @__PURE__ */ T.createElement(hT, null),
      collapsed: M ? /* @__PURE__ */ T.createElement(hT, null) : /* @__PURE__ */ T.createElement(mT, null)
    }[I ? "collapsed" : "expanded"], ie = d !== null ? ke || /* @__PURE__ */ T.createElement("div", {
      className: `${te}-trigger`,
      onClick: oe,
      style: {
        width: Ce
      }
    }, d || Ie) : null, he = Object.assign(Object.assign({}, x), {
      flex: `0 0 ${Ce}`,
      maxWidth: Ce,
      minWidth: Ce,
      width: Ce
    }), Se = wn(te, `${te}-${C}`, {
      [`${te}-collapsed`]: !!I,
      [`${te}-has-trigger`]: E && d !== null && !ke,
      [`${te}-below`]: !!U,
      [`${te}-zero-width`]: parseFloat(Ce) === 0
    }, c);
    return /* @__PURE__ */ T.createElement("aside", Object.assign({
      className: Se
    }, se, {
      style: he,
      ref: o
    }), /* @__PURE__ */ T.createElement("div", {
      className: `${te}-children`
    }, m), E || U && ke ? ie : null);
  }, pe = T.useMemo(() => ({
    siderCollapsed: I
  }), [I]);
  return /* @__PURE__ */ T.createElement(tk.Provider, {
    value: pe
  }, ge());
});
process.env.NODE_ENV !== "production" && (n4.displayName = "Sider");
function nk(r) {
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
  var c = o.overlayClassName, d = o.trigger, m = d === void 0 ? ["hover"] : d, h = o.mouseEnterDelay, C = h === void 0 ? 0 : h, x = o.mouseLeaveDelay, E = x === void 0 ? 0.1 : x, M = o.overlayStyle, _ = o.prefixCls, N = _ === void 0 ? "rc-tooltip" : _, L = o.children, z = o.onVisibleChange, B = o.afterVisibleChange, A = o.transitionName, G = o.animation, $ = o.motion, I = o.placement, P = I === void 0 ? "right" : I, U = o.align, Y = U === void 0 ? {} : U, q = o.destroyTooltipOnHide, ne = q === void 0 ? !1 : q, oe = o.defaultVisible, re = o.getTooltipContainer, ge = o.overlayInnerStyle;
  o.arrowContent;
  var pe = o.overlay, te = o.id, se = o.showArrow, de = se === void 0 ? !0 : se, Ce = Fn(o, a4), ke = Ma(null);
  KT(s, function() {
    return ke.current;
  });
  var we = Te({}, Ce);
  "visible" in o && (we.popupVisible = o.visible);
  var Ae = function() {
    return /* @__PURE__ */ T.createElement(nk, {
      key: "content",
      prefixCls: N,
      id: te,
      overlayInnerStyle: ge
    }, pe);
  };
  return /* @__PURE__ */ T.createElement(JR, an({
    popupClassName: c,
    prefixCls: N,
    popup: Ae,
    action: m,
    builtinPlacements: r4,
    popupPlacement: P,
    ref: ke,
    popupAlign: Y,
    getPopupContainer: re,
    onPopupVisibleChange: z,
    afterPopupVisibleChange: B,
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
const o4 = /* @__PURE__ */ tA(i4), rk = /* @__PURE__ */ Oa.createContext(void 0);
process.env.NODE_ENV !== "production" && (rk.displayName = "zIndexContext");
const ak = rk, Gs = 100, l4 = 10, u4 = Gs * l4, ik = {
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
  return r in ik;
}
function f4(r, o) {
  const [, s] = Js(), c = Oa.useContext(ak), d = c4(r);
  if (o !== void 0)
    return [o, o];
  let m = c != null ? c : 0;
  return d ? (m += // Use preset token zIndex by default but not stack when has parent container
  (c ? 0 : s.zIndexPopupBase) + // Container offset
  ik[r], m = Math.min(m, s.zIndexPopupBase + u4)) : m += s4[r], [c === void 0 ? o : m, m];
}
const d4 = (r, o, s) => s !== void 0 ? s : `${r}-${o}`;
function v4(r) {
  const {
    sizePopupArrow: o,
    borderRadiusXS: s,
    borderRadiusOuter: c
  } = r, d = o / 2, m = 0, h = d, C = c * 1 / Math.sqrt(2), x = d - c * (1 - 1 / Math.sqrt(2)), E = d - s * (1 / Math.sqrt(2)), M = c * (Math.sqrt(2) - 1) + s * (1 / Math.sqrt(2)), _ = 2 * d - E, N = M, L = 2 * d - C, z = x, B = 2 * d - m, A = h, G = d * Math.sqrt(2) + c * (Math.sqrt(2) - 2), $ = c * (Math.sqrt(2) - 1), I = `polygon(${$}px 100%, 50% ${$}px, ${2 * d - $}px 100%, ${$}px 100%)`, P = `path('M ${m} ${h} A ${c} ${c} 0 0 0 ${C} ${x} L ${E} ${M} A ${s} ${s} 0 0 1 ${_} ${N} L ${L} ${z} A ${c} ${c} 0 0 0 ${B} ${A} Z')`;
  return {
    arrowShadowWidth: G,
    arrowPath: P,
    arrowPolygon: I
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
}, ok = 8;
function lk(r) {
  const {
    contentRadius: o,
    limitVerticalRadius: s
  } = r, c = o > 12 ? o + 2 : 12;
  return {
    arrowOffsetHorizontal: c,
    arrowOffsetVertical: s ? ok : c
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
    const N = lk({
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
function uk(r, o) {
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
}), I4 = new Ci("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), z4 = {
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
    outKeyframes: I4
  }
}, $4 = (r, o) => {
  const {
    antCls: s
  } = r, c = `${s}-${o}`, {
    inKeyframes: d,
    outKeyframes: m
  } = z4[o];
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
}, U4 = (r) => {
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
      [o]: Object.assign(Object.assign(Object.assign(Object.assign({}, E3(r)), {
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
            borderRadius: r.min(m, ok)
          }
        },
        [`${o}-content`]: {
          position: "relative"
        }
      }), U3(r, (_, N) => {
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
}, j4 = (r) => Object.assign(Object.assign({
  zIndexPopup: r.zIndexPopupBase + 70
}, lk({
  contentRadius: r.borderRadius,
  limitVerticalRadius: !0
})), v4(Gg(r, {
  borderRadiusOuter: Math.min(r.borderRadiusOuter, 4)
}))), sk = function(r) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return $3("Tooltip", (c) => {
    const {
      borderRadius: d,
      colorTextLightSolid: m,
      colorBgSpotlight: h
    } = c, C = Gg(c, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: m,
      tooltipBorderRadius: d,
      tooltipBg: h
    });
    return [U4(C), $4(c, "zoom-big-fast")];
  }, j4, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: o
  })(r);
}, H4 = Sg.map((r) => `${r}-inverse`);
function F4(r) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(ar(H4), ar(Sg)).includes(r) : Sg.includes(r);
}
function ck(r, o) {
  const s = F4(o), c = wn({
    [`${r}-${o}`]: o && s
  }), d = {}, m = {};
  return o && !s && (d.background = o, m["--antd-arrow-background-color"] = o), {
    className: c,
    overlayStyle: d,
    arrowStyle: m
  };
}
const B4 = (r) => {
  const {
    prefixCls: o,
    className: s,
    placement: c = "top",
    title: d,
    color: m,
    overlayInnerStyle: h
  } = r, {
    getPrefixCls: C
  } = T.useContext(ec), x = C("tooltip", o), [E, M, _] = sk(x), N = ck(x, m), L = N.arrowStyle, z = Object.assign(Object.assign({}, h), N.overlayStyle), B = wn(M, _, x, `${x}-pure`, `${x}-placement-${c}`, s, N.className);
  return E(/* @__PURE__ */ T.createElement("div", {
    className: B,
    style: L
  }, /* @__PURE__ */ T.createElement("div", {
    className: `${x}-arrow`
  }), /* @__PURE__ */ T.createElement(nk, Object.assign({}, r, {
    className: M,
    prefixCls: x,
    overlayInnerStyle: z
  }), d)));
}, V4 = B4;
var W4 = function(r, o) {
  var s = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (s[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (s[c[d]] = r[c[d]]);
  return s;
};
const IS = /* @__PURE__ */ T.forwardRef((r, o) => {
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
    arrow: z = !0,
    title: B,
    overlay: A,
    builtinPlacements: G,
    arrowPointAtCenter: $ = !1,
    autoAdjustOverflow: I = !0
  } = r, P = !!z, [, U] = Js(), {
    getPopupContainer: Y,
    getPrefixCls: q,
    direction: ne
  } = T.useContext(ec), oe = Vg("Tooltip"), re = T.useRef(null), ge = () => {
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
  }), process.env.NODE_ENV !== "production" && oe(!L || typeof L == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && oe(!z || typeof z == "boolean" || !("arrowPointAtCenter" in z), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [pe, te] = jv(!1, {
    value: (s = r.open) !== null && s !== void 0 ? s : r.visible,
    defaultValue: (c = r.defaultOpen) !== null && c !== void 0 ? c : r.defaultVisible
  }), se = !B && !A && B !== 0, de = (ot) => {
    var Wt, Qt;
    te(se ? !1 : ot), se || ((Wt = r.onOpenChange) === null || Wt === void 0 || Wt.call(r, ot), (Qt = r.onVisibleChange) === null || Qt === void 0 || Qt.call(r, ot));
  }, Ce = T.useMemo(() => {
    var ot, Wt;
    let Qt = $;
    return typeof z == "object" && (Qt = (Wt = (ot = z.pointAtCenter) !== null && ot !== void 0 ? ot : z.arrowPointAtCenter) !== null && Wt !== void 0 ? Wt : $), G || b4({
      arrowPointAtCenter: Qt,
      autoAdjustOverflow: I,
      arrowWidth: P ? U.sizePopupArrow : 0,
      borderRadius: U.borderRadius,
      offset: U.marginXXS,
      visibleFirst: !0
    });
  }, [$, z, G, U]), ke = T.useMemo(() => B === 0 ? B : A || B || "", [A, B]), we = /* @__PURE__ */ T.createElement(w4, null, typeof ke == "function" ? ke() : ke), {
    getPopupContainer: Ae,
    placement: Ie = "top",
    mouseEnterDelay: ie = 0.1,
    mouseLeaveDelay: he = 0.1,
    overlayStyle: Se,
    rootClassName: ze
  } = r, Ke = W4(r, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), Xe = q("tooltip", d), it = q(), Ve = r["data-popover-inject"];
  let nt = pe;
  !("open" in r) && !("visible" in r) && se && (nt = !1);
  const Nt = Zv(M) && !S4(M) ? M : /* @__PURE__ */ T.createElement("span", null, M), $e = Nt.props, et = !$e.className || typeof $e.className == "string" ? wn($e.className, m || `${Xe}-open`) : $e.className, [Vt, Ee, mt] = sk(Xe, !Ve), Dt = ck(Xe, x), zt = Dt.arrowStyle, Ut = Object.assign(Object.assign({}, E), Dt.overlayStyle), Ze = wn(C, {
    [`${Xe}-rtl`]: ne === "rtl"
  }, Dt.className, ze, Ee, mt), [kt, gt] = f4("Tooltip", Ke.zIndex), Zt = /* @__PURE__ */ T.createElement(o4, Object.assign({}, Ke, {
    zIndex: kt,
    showArrow: P,
    placement: Ie,
    mouseEnterDelay: ie,
    mouseLeaveDelay: he,
    prefixCls: Xe,
    overlayClassName: Ze,
    overlayStyle: Object.assign(Object.assign({}, zt), Se),
    getTooltipContainer: Ae || h || Y,
    ref: re,
    builtinPlacements: Ce,
    overlay: we,
    visible: nt,
    onVisibleChange: de,
    afterVisibleChange: _ != null ? _ : N,
    overlayInnerStyle: Ut,
    arrowContent: /* @__PURE__ */ T.createElement("span", {
      className: `${Xe}-arrow-content`
    }),
    motion: {
      motionName: d4(it, "zoom-big-fast", r.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!L
  }), nt ? uk(Nt, {
    className: et
  }) : Nt);
  return Vt(/* @__PURE__ */ T.createElement(ak.Provider, {
    value: gt
  }, Zt));
});
process.env.NODE_ENV !== "production" && (IS.displayName = "Tooltip");
IS._InternalPanelDoNotUseOrYouWillBeFired = V4;
const K4 = IS, G4 = /* @__PURE__ */ Eg({
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
    const I = /* @__PURE__ */ T.createElement("span", {
      className: `${C}-title-content`
    }, c);
    return (!d || Zv(c) && c.type === "span") && c && $ && x && typeof c == "string" ? /* @__PURE__ */ T.createElement("div", {
      className: `${C}-inline-collapsed-noicon`
    }, c.charAt(0)) : I;
  }, {
    siderCollapsed: L
  } = T.useContext(tk);
  let z = m;
  typeof m == "undefined" ? z = x ? c : "" : m === !1 && (z = "");
  const B = {
    title: z
  };
  !L && !_ && (B.title = null, B.open = !1);
  const A = Vv(c).length;
  let G = /* @__PURE__ */ T.createElement(Pg, Object.assign({}, Lg(r, ["title", "icon", "danger"]), {
    className: wn({
      [`${C}-item-danger`]: h,
      [`${C}-item-only-child`]: (d ? A + 1 : A) === 1
    }, s),
    title: typeof m == "string" ? m : void 0
  }), uk(d, {
    className: wn(Zv(d) ? (o = d.props) === null || o === void 0 ? void 0 : o.className : "", `${C}-item-icon`)
  }), N(_));
  return M || (G = /* @__PURE__ */ T.createElement(K4, Object.assign({}, B, {
    placement: E === "rtl" ? "left" : "right",
    overlayClassName: `${C}-inline-collapsed-tooltip`
  }), G)), G;
}, eU = Y4, zS = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(XD, Me({}, r)) }), tU = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(ZD, Me({}, r)) }), nU = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(JD, Me({}, r)) });
function $S(r) {
  var o;
  return /* @__PURE__ */ ka(Ll, { vertical: !0, className: "globalNavigation__icon " + ((o = r.className) != null ? o : ""), onClick: r.onClick, children: [
    r.icon,
    !r.hideLabel && /* @__PURE__ */ V("span", { className: "globalNavigation__iconLabel", children: r.label })
  ] });
}
function Q4(r) {
  return /* @__PURE__ */ ka(Ll, { vertical: !0, className: "globalNavigation__suiteLogo", children: [
    /* @__PURE__ */ V($S, { icon: r.icon, label: "", hideLabel: !0, className: "globalNavigation__icon--suiteLogo" }),
    r.label,
    /* @__PURE__ */ V("div", { className: "globalNavigation__divider" })
  ] });
}
const X4 = (r) => /* @__PURE__ */ T.createElement("svg", Me({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", id: "search-colorable" }, r), /* @__PURE__ */ T.createElement("path", { d: "M16.8004 10.2004C16.8004 9.33367 16.6297 8.47543 16.298 7.67468C15.9663 6.87393 15.4802 6.14635 14.8673 5.53349C14.2544 4.92062 13.5268 4.43447 12.7261 4.10279C11.9254 3.7711 11.0671 3.60039 10.2004 3.60039C9.33367 3.60039 8.47543 3.7711 7.67468 4.10279C6.87393 4.43447 6.14635 4.92062 5.53349 5.53349C4.92062 6.14635 4.43447 6.87393 4.10279 7.67468C3.7711 8.47543 3.60039 9.33367 3.60039 10.2004C3.60039 11.0671 3.7711 11.9254 4.10279 12.7261C4.43447 13.5268 4.92062 14.2544 5.53349 14.8673C6.14635 15.4802 6.87393 15.9663 7.67468 16.298C8.47543 16.6297 9.33367 16.8004 10.2004 16.8004C11.0671 16.8004 11.9254 16.6297 12.7261 16.298C13.5268 15.9663 14.2544 15.4802 14.8673 14.8673C15.4802 14.2544 15.9663 13.5268 16.298 12.7261C16.6297 11.9254 16.8004 11.0671 16.8004 10.2004ZM15.2741 16.1254C13.9129 17.2954 12.1391 18.0004 10.2004 18.0004C5.89164 18.0004 2.40039 14.5091 2.40039 10.2004C2.40039 5.89164 5.89164 2.40039 10.2004 2.40039C14.5091 2.40039 18.0004 5.89164 18.0004 10.2004C18.0004 12.1391 17.2954 13.9129 16.1254 15.2741L21.4241 20.5766C21.6566 20.8091 21.6566 21.1916 21.4241 21.4241C21.1916 21.6566 20.8091 21.6566 20.5766 21.4241L15.2741 16.1254Z", fill: "currentColor" }));
function Z4(r) {
  return /* @__PURE__ */ V("span", { className: "globalNavigation__search", onClick: r.onClick, children: /* @__PURE__ */ V(
    xg,
    {
      placement: "right",
      title: /* @__PURE__ */ ka(bA, { size: "large", children: [
        /* @__PURE__ */ V(Al, { children: "Search" }),
        /* @__PURE__ */ V(Al, { children: "Ctrl + K" })
      ] }),
      children: /* @__PURE__ */ V(Ll, { className: "globalNavigation__searchButtonWrapper", children: /* @__PURE__ */ V(wg, { className: "globalNavigation__searchButton", shape: "round", icon: /* @__PURE__ */ V(X4, { className: "globalNavigation__searchIcon" }) }) })
    }
  ) });
}
function J4(r) {
  return /* @__PURE__ */ ka(Al, { children: [
    r.type === "link" && /* @__PURE__ */ V(xg, { title: r.hideLabel ? r.label : void 0, placement: "right", children: /* @__PURE__ */ V(
      $S,
      {
        className: `globalNavigation__item ${r.isActive ? " globalNavigation__item--active" : ""}`,
        icon: r.icon,
        label: r.label,
        onClick: r.onClick,
        hideLabel: r.hideLabel
      }
    ) }),
    r.type === "menu" && /* @__PURE__ */ V(lS, { items: r.items })
  ] });
}
function lS(r) {
  return /* @__PURE__ */ V(Ll, { vertical: !0, children: r.items.map((o, s) => /* @__PURE__ */ ka(nA, { children: [
    o.type === "link" && /* @__PURE__ */ rA(J4, gi(Me({}, o), { key: s })),
    o.type === "menu" && /* @__PURE__ */ V(
      zS,
      {
        expandIcon: o.isNestedMenu ? !0 : null,
        items: [e$(o, s)],
        className: "globalNavigation__menu"
      },
      s
    )
  ] }, s)) });
}
function e$(r, o) {
  let s;
  return r.type === "menu" && r.children && (s = r.children.map((c, d) => Me({
    expandIcon: c.isNestedMenu ? !0 : null,
    key: `${String(c.label)}${d}`
  }, c)), s.unshift({ label: r.label, type: "group", key: r.label + "_groupTitle" })), {
    icon: /* @__PURE__ */ V(
      $S,
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
const t$ = (r) => /* @__PURE__ */ T.createElement("svg", Me({ xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24" }, r), /* @__PURE__ */ T.createElement("title", null, "lock"), /* @__PURE__ */ T.createElement("g", { strokeLinecap: "square", strokeLinejoin: "miter", strokeWidth: 1, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" }, /* @__PURE__ */ T.createElement("path", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, d: "M12,1L12,1 C9.2,1,7,3.2,7,6v3h10V6C17,3.2,14.8,1,12,1z" }), /* @__PURE__ */ T.createElement("rect", { x: 4, y: 9, fill: "none", stroke: "currentColor", strokeMiterlimit: 10, width: 16, height: 14 }), /* @__PURE__ */ T.createElement("circle", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, cx: 12, cy: 15, r: 2 }), /* @__PURE__ */ T.createElement("line", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, x1: 12, y1: 17, x2: 12, y2: 19 }))), n$ = (r) => /* @__PURE__ */ T.createElement("svg", Me({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", id: "add-colorable" }, r), `>
    `, /* @__PURE__ */ T.createElement("path", { d: "M12.5992 4.8002C12.5992 4.4702 12.3292 4.2002 11.9992 4.2002C11.6692 4.2002 11.3992 4.4702 11.3992 4.8002V11.4002H4.79922C4.46922 11.4002 4.19922 11.6702 4.19922 12.0002C4.19922 12.3302 4.46922 12.6002 4.79922 12.6002H11.3992V19.2002C11.3992 19.5302 11.6692 19.8002 11.9992 19.8002C12.3292 19.8002 12.5992 19.5302 12.5992 19.2002V12.6002H19.1992C19.5292 12.6002 19.7992 12.3302 19.7992 12.0002C19.7992 11.6702 19.5292 11.4002 19.1992 11.4002H12.5992V4.8002Z", fill: "currentColor" }));
function r$(r) {
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
      label: /* @__PURE__ */ V(xg, { title: c.tooltip, children: /* @__PURE__ */ ka(vS, { vertical: !0, gap: "middle", justify: "center", children: [
        /* @__PURE__ */ ka("span", { className: "navigationCreate__itemTitle", children: [
          c.title,
          c.isLoading && /* @__PURE__ */ V(vA, { className: "navigationCreate__itemLoading", size: "small" }),
          d && /* @__PURE__ */ V(t$, { className: "navigationCreate__lockIcon" })
        ] }),
        /* @__PURE__ */ V("span", { className: "navigationCreate__itemDescription", children: c.description })
      ] }) })
    };
  });
  return /* @__PURE__ */ V(Ll, { children: /* @__PURE__ */ V(
    zS,
    {
      className: "globalNavigation__item globalNavigation__item--createNew",
      items: [
        {
          key: "NavigationCreate",
          popupClassName: "globalNavigation__popup globalNavigation__popup--navigationCreate",
          icon: /* @__PURE__ */ V(Ll, { className: "navigationCreate__popupButtonWrapper", style: { pointerEvents: "none" }, children: /* @__PURE__ */ V(wg, { className: "navigationCreate__popupButton", icon: /* @__PURE__ */ V(n$, { className: "navigationCreate__popupIcon" }) }) }),
          children: o
        }
      ],
      expandIcon: null
    }
  ) });
}
function a$(r = "") {
  var s;
  const o = new RegExp(
    "(?:[\\W\\d]*\\b)*([A-Za-z])\\w*\\b(?:.*\\s(\\w)[\\w-]*$)?",
    "i"
  );
  return (s = r.replace(o, "$1$2")) == null ? void 0 : s.toUpperCase();
}
const i$ = (r, o) => {
  let s;
  return (...c) => {
    window.clearTimeout(s), s = window.setTimeout(() => {
      r(...c);
    }, o);
  };
}, o$ = () => /* @__PURE__ */ V(Ll, { children: /* @__PURE__ */ V(dS, { description: "No results found", imageStyle: { height: "60px" } }) }), l$ = ({ signoutOptions: r }) => {
  var o;
  return /* @__PURE__ */ V(
    wg,
    {
      className: "workspaceSelector__signoutButton",
      type: "primary",
      onClick: (s) => {
        r == null || r.onSignout();
      },
      children: (o = r == null ? void 0 : r.label) != null ? o : "Sign Out of mParticle"
    }
  );
}, u$ = ({
  onSearch: r,
  searchTerm: o
}) => /* @__PURE__ */ V(Al, { children: /* @__PURE__ */ V(
  tp,
  {
    placeholder: "Search",
    className: "workspaceSelector__searchInput",
    onChange: r,
    value: o,
    onClick: (s) => {
      s.preventDefault(), s.stopPropagation();
    }
  }
) });
function s$(r) {
  const [o, s] = Wo(""), [c, d] = Wo(r.orgs);
  Vo(() => {
    d(r.orgs);
  }, r.orgs);
  const m = Ml(i$(d, 200), []), h = E1(
    () => z(
      /* currentFilteredOrgs */
    ),
    c
  ), C = {
    key: "search",
    className: "workspaceSelector__search",
    label: /* @__PURE__ */ V(u$, { onSearch: B, searchTerm: o })
  }, x = Ma({
    key: "signout",
    className: "workspaceSelector__signout",
    label: /* @__PURE__ */ V(l$, { signoutOptions: r.signoutOptions })
  }), E = {
    key: "no-results",
    className: "workspaceSelector__noResults",
    label: /* @__PURE__ */ V(o$, {})
  }, _ = [
    ...!!o && !c.length ? [E] : h,
    C,
    r.signoutOptions ? x.current : null
  ], N = r.orgs.flatMap((G) => {
    let $ = [];
    const { accounts: I } = G;
    if (I) {
      const P = I.flatMap(({ workspaces: U }) => U);
      $ = $.concat(P);
    }
    return $;
  }).find((G) => G.isActive), L = [
    {
      key: "WorkspaceSelector",
      icon: /* @__PURE__ */ V(YT, { className: "workspaceSelector__avatar", children: a$(N == null ? void 0 : N.label) }),
      popupClassName: "workspaceSelector",
      children: _
    }
  ];
  return /* @__PURE__ */ V(
    zS,
    {
      className: "globalNavigation__menu globalNavigation__item globalNavigation__item--workspaceSelector",
      items: L,
      onOpenChange: A,
      expandIcon: null
    }
  );
  function z() {
    return c.reduce((G, $) => (G.push({
      type: "org",
      className: "workspaceSelector__orgName" + ($.label ? "" : " u-display-none"),
      label: $.label,
      id: $.id,
      key: $.id,
      accounts: $.accounts,
      // todo: these are ending up in the html as attributes..
      workspaces: $.accounts.flatMap((I) => I.workspaces)
    }), $.accounts.forEach((I) => {
      G.push({
        type: "account",
        className: "workspaceSelector__accountName" + (I.label ? "" : " u-display-none"),
        label: I.label,
        id: I.id,
        key: I.id,
        workspaces: I.workspaces
      }), I.workspaces.forEach((P) => {
        G.push({
          type: "workspace",
          className: "workspaceSelector__workspaceName" + (P.isActive ? " workspaceSelector__workspaceName--active" : ""),
          label: P.label,
          id: P.id,
          key: P.id,
          onClick: P.onClick
        });
      });
    }), G), []);
  }
  function B(G) {
    const $ = G.target.value.toLowerCase();
    if (s($), $) {
      const P = I();
      m(P);
    } else
      d(r.orgs);
    function I() {
      return r.orgs.reduce((U, Y) => {
        if (P(Y))
          U.push(Y);
        else {
          const q = Me({}, Y);
          q.accounts = [], Y.accounts.forEach((ne) => {
            const oe = Me({}, ne);
            oe.workspaces = [], P(ne) ? q.accounts.push(ne) : (ne.workspaces.forEach((re) => {
              P(re) && oe.workspaces.push(re);
            }), oe.workspaces.length && q.accounts.push(oe));
          }), q.accounts.length && U.push(q);
        }
        return U;
      }, []);
      function P(U) {
        return !!U.label && U.label.toString().toLowerCase().includes($) || !!U.id && U.id.toString().toLowerCase().includes($);
      }
    }
  }
  function A() {
    s(""), d(r.orgs);
  }
}
const c$ = (r) => /* @__PURE__ */ T.createElement("svg", Me({ id: "mpLogo", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 202.8 169", xmlSpace: "preserve" }, r), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "135.2,126.7 135.2,169 202.8,126.7 202.8,84.5" }), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "67.6,126.7 67.6,169 135.2,126.7 135.2,84.5" }), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "0,126.7 0,169 67.6,126.7 67.6,84.5" }), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "202.8,0 135.2,42.2 135.2,84.5 202.8,42.2" }), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "135.2,0 67.6,42.2 67.6,84.5 135.2,42.2" }), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "67.6,0 0,42.2 0,84.5 67.6,42.2" })), f$ = 90, rU = (r) => /* @__PURE__ */ V(Rf, { className: "globalNavigation", children: /* @__PURE__ */ V(Rf.Sider, { className: "globalNavigation__sider", width: f$, children: /* @__PURE__ */ ka(vS, { vertical: !0, justify: "space-between", style: { height: "100%" }, children: [
  /* @__PURE__ */ ka("div", { children: [
    /* @__PURE__ */ V(Q4, Me({}, r.logo)),
    /* @__PURE__ */ ka(Ll, { vertical: !0, children: [
      r.onSearchClick && /* @__PURE__ */ V(Z4, { onClick: r.onSearchClick }),
      r.createItems && /* @__PURE__ */ V(r$, { createItems: r.createItems })
    ] }),
    /* @__PURE__ */ V(lS, { items: r.tools })
  ] }),
  /* @__PURE__ */ ka("div", { children: [
    /* @__PURE__ */ V(lS, { items: r.management }),
    r.orgs && /* @__PURE__ */ V(s$, { orgs: r.orgs, signoutOptions: r.signoutOptions }),
    !r.hideMpHome && /* @__PURE__ */ V(xg, { title: "mParticle Overview", placement: "right", children: /* @__PURE__ */ V(
      Ll,
      {
        className: "globalNavigation__mpHome",
        onClick: () => {
          r.onMpHomeClick();
        },
        children: /* @__PURE__ */ V(c$, { className: "globalNavigation__mpSvg" })
      }
    ) })
  ] })
] }) }) });
export {
  tU as Affix,
  mA as Alert,
  Z$ as Anchor,
  nU as App,
  _$ as AutoComplete,
  YT as Avatar,
  sA as Badge,
  CA as Breadcrumb,
  wg as Button,
  D$ as Calendar,
  qT as Card,
  I$ as Carousel,
  fS as Cascader,
  Ll as Center,
  oA as Checkbox,
  oU as Col,
  O$ as Collapse,
  C$ as ColorPicker,
  Qe as ConfigProvider,
  w$ as DatePicker,
  cA as Descriptions,
  Q$ as Divider,
  K$ as Drawer,
  SA as Dropdown,
  dS as Empty,
  vS as Flex,
  g$ as FloatButton,
  Au as Form,
  f$ as GlobalNavWidth,
  rU as GlobalNavigation,
  lU as Grid,
  U$ as Image,
  tp as Input,
  x$ as InputNumber,
  Rf as Layout,
  fA as List,
  Y$ as LoadingModal,
  iA as Mentions,
  zS as Menu,
  eU as MenuItem,
  q$ as Message,
  hA as Modal,
  G$ as Notification,
  J$ as Pagination,
  W$ as Popconfirm,
  F$ as Popover,
  B$ as Progress,
  j$ as QRCode,
  GT as Radio,
  y$ as Rate,
  dA as Result,
  uU as Row,
  A$ as Segmented,
  S$ as Select,
  pA as Skeleton,
  E$ as Slider,
  bA as Space,
  vA as Spin,
  z$ as Statistic,
  X$ as Steps,
  T$ as Switch,
  H$ as Table,
  L$ as Tabs,
  lA as Tag,
  k$ as TimePicker,
  N$ as Timeline,
  xg as Tooltip,
  P$ as Tour,
  M$ as Transfer,
  $$ as Tree,
  b$ as TreeSelect,
  R$ as Upload,
  V$ as Watermark
};
