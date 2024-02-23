var iD = Object.defineProperty, oD = Object.defineProperties;
var lD = Object.getOwnPropertyDescriptors;
var gx = Object.getOwnPropertySymbols;
var uD = Object.prototype.hasOwnProperty, sD = Object.prototype.propertyIsEnumerable;
var yx = (r, o, u) => o in r ? iD(r, o, { enumerable: !0, configurable: !0, writable: !0, value: u }) : r[o] = u, Me = (r, o) => {
  for (var u in o || (o = {}))
    uD.call(o, u) && yx(r, u, o[u]);
  if (gx)
    for (var u of gx(o))
      sD.call(o, u) && yx(r, u, o[u]);
  return r;
}, gi = (r, o) => oD(r, lD(o));
import { jsx as V, Fragment as Ko, jsxs as va } from "react/jsx-runtime";
import { ConfigProvider as IT, Button as zT, FloatButton as cD, Rate as fD, Form as Pl, TreeSelect as dD, Select as vD, Mentions as $T, Radio as c1, ColorPicker as pD, Slider as hD, Cascader as wg, DatePicker as mD, Checkbox as UT, Input as tp, InputNumber as gD, Switch as yD, Upload as bD, AutoComplete as SD, TimePicker as CD, Transfer as ED, Collapse as wD, Timeline as xD, Calendar as TD, Segmented as RD, Tabs as _D, Tag as jT, Tour as kD, Carousel as MD, Tooltip as OD, Statistic as ND, Tree as DD, Image as AD, QRCode as LD, Badge as HT, Card as f1, Avatar as FT, Descriptions as BT, Table as PD, Empty as d1, Popover as ID, List as VT, Progress as zD, Result as $D, Spin as UD, Skeleton as jD, Watermark as HD, Popconfirm as FD, Drawer as BD, Modal as VD, notification as WD, Alert as WT, message as KD, Flex as GD, Divider as qD, Space as YD, Layout as np, Steps as QD, Anchor as XD, Dropdown as KT, Breadcrumb as GT, Pagination as ZD, Menu as JD, Affix as eA, App as tA } from "antd";
import { Col as uU, Grid as sU, Row as cU } from "antd";
import * as T from "react";
import Oa, { useEffect as Wo, useState as bi, useMemo as Wv, useCallback as Nl, useRef as Ma, useLayoutEffect as nA, useImperativeHandle as qT, createContext as xg, useContext as Ou, forwardRef as rA, Fragment as aA, createElement as iA } from "react";
const oA = {
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
}, Qe = (r) => /* @__PURE__ */ V(IT, gi(Me({}, r), { theme: oA })), rp = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(zT, gi(Me({}, r), { children: r.children })) });
rp.Group = zT.Group;
const S$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(cD, Me({}, r)) }), C$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(fD, Me({}, r)) }), Au = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(Pl, gi(Me({}, r), { children: r.children })) });
Au.useForm = Pl.useForm;
Au.useWatch = Pl.useWatch;
Au.useFormInstance = Pl.useFormInstance;
Au.Item = Pl.Item;
Au.List = Pl.List;
Au.displayName = Pl.displayName;
Au.Provider = Pl.Provider;
Au.ErrorList = Pl.ErrorList;
const E$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(dD, Me({}, r)) }), w$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(vD, Me({}, r)) }), lA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V($T, Me({}, r)) });
lA.getMentions = $T.getMentions;
const YT = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(c1, Me({}, r)) });
YT.Group = c1.Group;
YT.Button = c1.Button;
const x$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(pD, Me({}, r)) }), T$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(hD, Me({}, r)) }), v1 = (r) => /* @__PURE__ */ V(IT, { children: /* @__PURE__ */ V(wg, Me({}, r)) });
v1.Panel = wg.Panel;
v1.SHOW_PARENT = wg.SHOW_PARENT;
v1.SHOW_CHILD = wg.SHOW_CHILD;
const R$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(mD, Me({}, r)) }), uA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(UT, Me({}, r)) });
uA.Group = UT.Group;
const Nf = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(tp, Me({}, r)) });
Nf.Group = tp.Group;
Nf.Password = tp.Password;
Nf.Search = tp.Search;
Nf.TextArea = tp.TextArea;
const _$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(gD, Me({}, r)) }), k$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(yD, Me({}, r)) }), M$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(bD, Me({}, r)) }), O$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(SD, Me({}, r)) }), N$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(CD, Me({}, r)) }), D$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(ED, Me({}, r)) }), A$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(wD, Me({}, r)) }), L$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(xD, Me({}, r)) }), P$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(TD, Me({}, r)) }), I$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(RD, Me({}, r)) }), z$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(_D, Me({}, r)) }), sA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(jT, Me({}, r)) }), cA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(jT.CheckableTag, Me({}, r)) });
sA.CheckableTag = cA;
const $$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(kD, Me({}, r)) }), U$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(MD, Me({}, r)) }), Tg = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(OD, gi(Me({}, r), { children: /* @__PURE__ */ V(Ko, { children: r.children }) })) }), j$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(ND, Me({}, r)) }), fA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(DD, Me({}, r)) }), H$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(AD, Me({}, r)) }), F$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(LD, Me({}, r)) }), dA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(HT, Me({}, r)) });
dA.Ribbon = HT.Ribbon;
const QT = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(f1, Me({}, r)) });
QT.Meta = f1.Meta;
QT.Grid = f1.Grid;
const p1 = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(FT, Me({}, r)) });
p1.Group = FT.Group;
const vA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(BT, Me({}, r)) });
vA.Item = BT.Item;
const B$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(PD, Me({}, r)) }), h1 = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(d1, Me({}, r)) });
h1.PRESENTED_IMAGE_DEFAULT = d1.PRESENTED_IMAGE_DEFAULT;
h1.PRESENTED_IMAGE_SIMPLE = d1.PRESENTED_IMAGE_SIMPLE;
const V$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(ID, gi(Me({}, r), { children: /* @__PURE__ */ V(Ko, { children: r.children }) })) }), pA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(VT, Me({}, r)) });
pA.Item = VT.Item;
const W$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(zD, Me({}, r)) }), XT = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V($D, Me({}, r)) }), hA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(UD, Me({}, r)) }), mA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(jD, gi(Me({}, r), { active: !0, style: Me({ width: "100%" }, r.style) })) }), K$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(HD, Me({}, r)) }), G$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(FD, gi(Me({}, r), { children: /* @__PURE__ */ V(Ko, { children: r.children }) })) }), q$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(BD, Me({}, r)) }), gA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(VD, Me({}, r)) }), Y$ = (r) => {
  const [o, u] = WD.useNotification();
  return /* @__PURE__ */ va(Qe, { children: [
    u,
    /* @__PURE__ */ V("span", { onClick: () => {
      o.open(Me({}, r));
    }, children: r.children })
  ] });
}, yA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(WT, Me({}, r)) });
yA.ErrorBoundary = WT.ErrorBoundary;
const Q$ = (r) => {
  const [o, u] = KD.useMessage();
  return /* @__PURE__ */ va(Qe, { children: [
    u,
    /* @__PURE__ */ V("span", { onClick: () => {
      o.open(Me({}, r));
    }, children: r.children })
  ] });
}, bA = (r) => {
  Wo(r, []);
};
function SA(r) {
  const [o, u] = bi(!0), [c, d] = bi(!1), [m, h] = bi(void 0);
  return bA(() => {
    r().then((C) => {
      h(C);
    }).catch(() => {
      d(!0);
    }).finally(() => {
      u(!1);
    });
  }), [o, c, m];
}
function X$(r) {
  const [o, u, c] = SA(r.fetchData);
  return /* @__PURE__ */ V(Ko, { children: /* @__PURE__ */ va(gA, gi(Me({}, r), { children: [
    o && /* @__PURE__ */ V(mA, {}),
    u && /* @__PURE__ */ V(XT, { status: "error", title: "Error Loading" }),
    !o && !u && r.children(c)
  ] })) });
}
const m1 = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(GD, Me({}, r)) }), Go = (r) => /* @__PURE__ */ V(Ko, { children: /* @__PURE__ */ V(m1, gi(Me({ align: "center", justify: "center" }, r), { children: r.children })) }), Z$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(qD, Me({}, r)) }), CA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(YD, Me({}, r)) }), Rf = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(np, Me({}, r)) });
Rf.Sider = np.Sider;
Rf.Footer = np.Footer;
Rf.Content = np.Content;
Rf.Header = np.Header;
const J$ = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(QD, Me({}, r)) }), eU = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(XD, Me({}, r)) }), EA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(KT, gi(Me({}, r), { children: r.children })) });
EA.Button = KT.Button;
const wA = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(GT, Me({}, r)) });
wA.Item = GT.Item;
const tU = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(ZD, Me({}, r)) });
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
    function u() {
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
        return u.apply(null, m);
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
    r.exports ? (u.default = u, r.exports = u) : window.classNames = u;
  })();
})(JT);
var xA = JT.exports;
const wn = /* @__PURE__ */ ZT(xA);
function an() {
  return an = Object.assign ? Object.assign.bind() : function(r) {
    for (var o = 1; o < arguments.length; o++) {
      var u = arguments[o];
      for (var c in u)
        Object.prototype.hasOwnProperty.call(u, c) && (r[c] = u[c]);
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
function TA(r, o) {
  if (Vn(r) != "object" || !r)
    return r;
  var u = r[Symbol.toPrimitive];
  if (u !== void 0) {
    var c = u.call(r, o || "default");
    if (Vn(c) != "object")
      return c;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(r);
}
function eR(r) {
  var o = TA(r, "string");
  return Vn(o) == "symbol" ? o : String(o);
}
function tt(r, o, u) {
  return o = eR(o), o in r ? Object.defineProperty(r, o, {
    value: u,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[o] = u, r;
}
function bx(r, o) {
  var u = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(r);
    o && (c = c.filter(function(d) {
      return Object.getOwnPropertyDescriptor(r, d).enumerable;
    })), u.push.apply(u, c);
  }
  return u;
}
function Te(r) {
  for (var o = 1; o < arguments.length; o++) {
    var u = arguments[o] != null ? arguments[o] : {};
    o % 2 ? bx(Object(u), !0).forEach(function(c) {
      tt(r, c, u[c]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(u)) : bx(Object(u)).forEach(function(c) {
      Object.defineProperty(r, c, Object.getOwnPropertyDescriptor(u, c));
    });
  }
  return r;
}
function xS(r, o) {
  (o == null || o > r.length) && (o = r.length);
  for (var u = 0, c = new Array(o); u < o; u++)
    c[u] = r[u];
  return c;
}
function RA(r) {
  if (Array.isArray(r))
    return xS(r);
}
function tR(r) {
  if (typeof Symbol != "undefined" && r[Symbol.iterator] != null || r["@@iterator"] != null)
    return Array.from(r);
}
function g1(r, o) {
  if (r) {
    if (typeof r == "string")
      return xS(r, o);
    var u = Object.prototype.toString.call(r).slice(8, -1);
    if (u === "Object" && r.constructor && (u = r.constructor.name), u === "Map" || u === "Set")
      return Array.from(r);
    if (u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
      return xS(r, o);
  }
}
function _A() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ar(r) {
  return RA(r) || tR(r) || g1(r) || _A();
}
function nR(r) {
  if (Array.isArray(r))
    return r;
}
function kA(r, o) {
  var u = r == null ? null : typeof Symbol != "undefined" && r[Symbol.iterator] || r["@@iterator"];
  if (u != null) {
    var c, d, m, h, C = [], x = !0, E = !1;
    try {
      if (m = (u = u.call(r)).next, o === 0) {
        if (Object(u) !== u)
          return;
        x = !1;
      } else
        for (; !(x = (c = m.call(u)).done) && (C.push(c.value), C.length !== o); x = !0)
          ;
    } catch (k) {
      E = !0, d = k;
    } finally {
      try {
        if (!x && u.return != null && (h = u.return(), Object(h) !== h))
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
  return nR(r) || kA(r, o) || g1(r, o) || rR();
}
function MA(r, o) {
  if (r == null)
    return {};
  var u = {}, c = Object.keys(r), d, m;
  for (m = 0; m < c.length; m++)
    d = c[m], !(o.indexOf(d) >= 0) && (u[d] = r[d]);
  return u;
}
function Fn(r, o) {
  if (r == null)
    return {};
  var u = MA(r, o), c, d;
  if (Object.getOwnPropertySymbols) {
    var m = Object.getOwnPropertySymbols(r);
    for (d = 0; d < m.length; d++)
      c = m[d], !(o.indexOf(c) >= 0) && Object.prototype.propertyIsEnumerable.call(r, c) && (u[c] = r[c]);
  }
  return u;
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
var Sx;
function OA() {
  if (Sx)
    return cn;
  Sx = 1;
  var r = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), h = Symbol.for("react.context"), C = Symbol.for("react.server_context"), x = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), P;
  P = Symbol.for("react.module.reference");
  function F(L) {
    if (typeof L == "object" && L !== null) {
      var W = L.$$typeof;
      switch (W) {
        case r:
          switch (L = L.type, L) {
            case u:
            case d:
            case c:
            case E:
            case k:
              return L;
            default:
              switch (L = L && L.$$typeof, L) {
                case C:
                case h:
                case x:
                case N:
                case _:
                case m:
                  return L;
                default:
                  return W;
              }
          }
        case o:
          return W;
      }
    }
  }
  return cn.ContextConsumer = h, cn.ContextProvider = m, cn.Element = r, cn.ForwardRef = x, cn.Fragment = u, cn.Lazy = N, cn.Memo = _, cn.Portal = o, cn.Profiler = d, cn.StrictMode = c, cn.Suspense = E, cn.SuspenseList = k, cn.isAsyncMode = function() {
    return !1;
  }, cn.isConcurrentMode = function() {
    return !1;
  }, cn.isContextConsumer = function(L) {
    return F(L) === h;
  }, cn.isContextProvider = function(L) {
    return F(L) === m;
  }, cn.isElement = function(L) {
    return typeof L == "object" && L !== null && L.$$typeof === r;
  }, cn.isForwardRef = function(L) {
    return F(L) === x;
  }, cn.isFragment = function(L) {
    return F(L) === u;
  }, cn.isLazy = function(L) {
    return F(L) === N;
  }, cn.isMemo = function(L) {
    return F(L) === _;
  }, cn.isPortal = function(L) {
    return F(L) === o;
  }, cn.isProfiler = function(L) {
    return F(L) === d;
  }, cn.isStrictMode = function(L) {
    return F(L) === c;
  }, cn.isSuspense = function(L) {
    return F(L) === E;
  }, cn.isSuspenseList = function(L) {
    return F(L) === k;
  }, cn.isValidElementType = function(L) {
    return typeof L == "string" || typeof L == "function" || L === u || L === d || L === c || L === E || L === k || L === D || typeof L == "object" && L !== null && (L.$$typeof === N || L.$$typeof === _ || L.$$typeof === m || L.$$typeof === h || L.$$typeof === x || L.$$typeof === P || L.getModuleId !== void 0);
  }, cn.typeOf = F, cn;
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
var Cx;
function NA() {
  return Cx || (Cx = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), h = Symbol.for("react.context"), C = Symbol.for("react.server_context"), x = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), P = !1, F = !1, L = !1, W = !1, $ = !1, z;
    z = Symbol.for("react.module.reference");
    function I(Ee) {
      return !!(typeof Ee == "string" || typeof Ee == "function" || Ee === u || Ee === d || $ || Ee === c || Ee === E || Ee === k || W || Ee === D || P || F || L || typeof Ee == "object" && Ee !== null && (Ee.$$typeof === N || Ee.$$typeof === _ || Ee.$$typeof === m || Ee.$$typeof === h || Ee.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Ee.$$typeof === z || Ee.getModuleId !== void 0));
    }
    function U(Ee) {
      if (typeof Ee == "object" && Ee !== null) {
        var mt = Ee.$$typeof;
        switch (mt) {
          case r:
            var Dt = Ee.type;
            switch (Dt) {
              case u:
              case d:
              case c:
              case E:
              case k:
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
    var Y = h, q = m, ne = r, oe = x, re = u, ge = N, pe = _, te = o, se = d, de = c, Ce = E, ke = k, we = !1, Ae = !1;
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
      return U(Ee) === u;
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
      return U(Ee) === k;
    }
    fn.ContextConsumer = Y, fn.ContextProvider = q, fn.Element = ne, fn.ForwardRef = oe, fn.Fragment = re, fn.Lazy = ge, fn.Memo = pe, fn.Portal = te, fn.Profiler = se, fn.StrictMode = de, fn.Suspense = Ce, fn.SuspenseList = ke, fn.isAsyncMode = Ie, fn.isConcurrentMode = ie, fn.isContextConsumer = he, fn.isContextProvider = Se, fn.isElement = ze, fn.isForwardRef = Ke, fn.isFragment = Xe, fn.isLazy = it, fn.isMemo = Ve, fn.isPortal = nt, fn.isProfiler = Nt, fn.isStrictMode = $e, fn.isSuspense = et, fn.isSuspenseList = Vt, fn.isValidElementType = I, fn.typeOf = U;
  }()), fn;
}
process.env.NODE_ENV === "production" ? TS.exports = OA() : TS.exports = NA();
var aR = TS.exports;
function Kv(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = [];
  return Oa.Children.forEach(r, function(c) {
    c == null && !o.keepEmpty || (Array.isArray(c) ? u = u.concat(Kv(c)) : aR.isFragment(c) && c.props ? u = u.concat(Kv(c.props.children, o)) : u.push(c));
  }), u;
}
var RS = {}, y1 = [], DA = function(o) {
  y1.push(o);
};
function _f(r, o) {
  if (process.env.NODE_ENV !== "production" && !r && console !== void 0) {
    var u = y1.reduce(function(c, d) {
      return d(c != null ? c : "", "warning");
    }, o);
    u && console.error("Warning: ".concat(u));
  }
}
function AA(r, o) {
  if (process.env.NODE_ENV !== "production" && !r && console !== void 0) {
    var u = y1.reduce(function(c, d) {
      return d(c != null ? c : "", "note");
    }, o);
    u && console.warn("Note: ".concat(u));
  }
}
function iR() {
  RS = {};
}
function oR(r, o, u) {
  !o && !RS[u] && (r(!1, u), RS[u] = !0);
}
function ha(r, o) {
  oR(_f, r, o);
}
function LA(r, o) {
  oR(AA, r, o);
}
ha.preMessage = DA;
ha.resetWarned = iR;
ha.noteOnce = LA;
var _S = { exports: {} }, Ba = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var aS, Ex;
function lR() {
  if (Ex)
    return aS;
  Ex = 1;
  var r = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, u = Object.prototype.propertyIsEnumerable;
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
      var x = Object.getOwnPropertyNames(h).map(function(k) {
        return h[k];
      });
      if (x.join("") !== "0123456789")
        return !1;
      var E = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(k) {
        E[k] = k;
      }), Object.keys(Object.assign({}, E)).join("") === "abcdefghijklmnopqrst";
    } catch (k) {
      return !1;
    }
  }
  return aS = d() ? Object.assign : function(m, h) {
    for (var C, x = c(m), E, k = 1; k < arguments.length; k++) {
      C = Object(arguments[k]);
      for (var _ in C)
        o.call(C, _) && (x[_] = C[_]);
      if (r) {
        E = r(C);
        for (var N = 0; N < E.length; N++)
          u.call(C, E[N]) && (x[E[N]] = C[E[N]]);
      }
    }
    return x;
  }, aS;
}
var Gm = { exports: {} }, iS = {};
/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wx;
function PA() {
  return wx || (wx = 1, function(r) {
    var o, u, c, d;
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
      var x = null, E = null, k = function() {
        if (x !== null)
          try {
            var ie = r.unstable_now();
            x(!0, ie), x = null;
          } catch (he) {
            throw setTimeout(k, 0), he;
          }
      };
      o = function(ie) {
        x !== null ? setTimeout(o, 0, ie) : (x = ie, setTimeout(k, 0));
      }, u = function(ie, he) {
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
        var D = window.cancelAnimationFrame;
        typeof window.requestAnimationFrame != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof D != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
      }
      var P = !1, F = null, L = -1, W = 5, $ = 0;
      r.unstable_shouldYield = function() {
        return r.unstable_now() >= $;
      }, d = function() {
      }, r.unstable_forceFrameRate = function(ie) {
        0 > ie || 125 < ie ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : W = 0 < ie ? Math.floor(1e3 / ie) : 5;
      };
      var z = new MessageChannel(), I = z.port2;
      z.port1.onmessage = function() {
        if (F !== null) {
          var ie = r.unstable_now();
          $ = ie + W;
          try {
            F(!0, ie) ? I.postMessage(null) : (P = !1, F = null);
          } catch (he) {
            throw I.postMessage(null), he;
          }
        } else
          P = !1;
      }, o = function(ie) {
        F = ie, P || (P = !0, I.postMessage(null));
      }, u = function(ie, he) {
        L = _(function() {
          ie(r.unstable_now());
        }, he);
      }, c = function() {
        N(L), L = -1;
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
          he !== null && u(we, he.startTime - ie);
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
          it !== null && u(we, it.startTime - he), Xe = !1;
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
      return Ke = Se + Ke, ie = { id: ge++, callback: he, priorityLevel: ie, startTime: Se, expirationTime: Ke, sortIndex: -1 }, Se > ze ? (ie.sortIndex = Se, U(re, ie), Y(oe) === null && ie === Y(re) && (Ce ? c() : Ce = !0, u(we, Se - ze))) : (ie.sortIndex = Ke, U(oe, ie), de || se || (de = !0, o(Ae))), ie;
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
  }(iS)), iS;
}
var oS = {};
/** @license React v0.20.2
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xx;
function IA() {
  return xx || (xx = 1, function(r) {
    process.env.NODE_ENV !== "production" && function() {
      var o = !1, u = !1, c, d, m, h, C = typeof performance == "object" && typeof performance.now == "function";
      if (C) {
        var x = performance;
        r.unstable_now = function() {
          return x.now();
        };
      } else {
        var E = Date, k = E.now();
        r.unstable_now = function() {
          return E.now() - k;
        };
      }
      if (
        // If Scheduler runs in a non-DOM environment, it falls back to a naive
        // implementation using setTimeout.
        typeof window == "undefined" || // Check if MessageChannel is supported, too.
        typeof MessageChannel != "function"
      ) {
        var _ = null, N = null, D = function() {
          if (_ !== null)
            try {
              var ye = r.unstable_now(), Ne = !0;
              _(Ne, ye), _ = null;
            } catch (We) {
              throw setTimeout(D, 0), We;
            }
        };
        c = function(ye) {
          _ !== null ? setTimeout(c, 0, ye) : (_ = ye, setTimeout(D, 0));
        }, d = function(ye, Ne) {
          N = setTimeout(ye, Ne);
        }, m = function() {
          clearTimeout(N);
        }, r.unstable_shouldYield = function() {
          return !1;
        }, h = r.unstable_forceFrameRate = function() {
        };
      } else {
        var P = window.setTimeout, F = window.clearTimeout;
        if (typeof console != "undefined") {
          var L = window.requestAnimationFrame, W = window.cancelAnimationFrame;
          typeof L != "function" && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), typeof W != "function" && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");
        }
        var $ = !1, z = null, I = -1, U = 5, Y = 0;
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
          if (z !== null) {
            var ye = r.unstable_now();
            Y = ye + U;
            var Ne = !0;
            try {
              var We = z(Ne, ye);
              We ? oe.postMessage(null) : ($ = !1, z = null);
            } catch (xt) {
              throw oe.postMessage(null), xt;
            }
          } else
            $ = !1;
        }, ne = new MessageChannel(), oe = ne.port2;
        ne.port1.onmessage = q, c = function(ye) {
          z = ye, $ || ($ = !0, oe.postMessage(null));
        }, d = function(ye, Ne) {
          I = P(function() {
            ye(r.unstable_now());
          }, Ne);
        }, m = function() {
          F(I), I = -1;
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
          if (!u)
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
  }(oS)), oS;
}
var Tx;
function uR() {
  return Tx || (Tx = 1, process.env.NODE_ENV === "production" ? Gm.exports = PA() : Gm.exports = IA()), Gm.exports;
}
/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rx;
function zA() {
  if (Rx)
    return Ba;
  Rx = 1;
  var r = Oa, o = lR(), u = uR();
  function c(n) {
    for (var i = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, s = 1; s < arguments.length; s++)
      i += "&args[]=" + encodeURIComponent(arguments[s]);
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
  var x = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), E = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, k = Object.prototype.hasOwnProperty, _ = {}, N = {};
  function D(n) {
    return k.call(N, n) ? !0 : k.call(_, n) ? !1 : E.test(n) ? N[n] = !0 : (_[n] = !0, !1);
  }
  function P(n, i, s, v) {
    if (s !== null && s.type === 0)
      return !1;
    switch (typeof i) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return v ? !1 : s !== null ? !s.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function F(n, i, s, v) {
    if (i === null || typeof i == "undefined" || P(n, i, s, v))
      return !0;
    if (v)
      return !1;
    if (s !== null)
      switch (s.type) {
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
  function L(n, i, s, v, g, S, R) {
    this.acceptsBooleans = i === 2 || i === 3 || i === 4, this.attributeName = v, this.attributeNamespace = g, this.mustUseProperty = s, this.propertyName = n, this.type = i, this.sanitizeURL = S, this.removeEmptyString = R;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    W[n] = new L(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var i = n[0];
    W[i] = new L(i, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    W[n] = new L(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    W[n] = new L(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    W[n] = new L(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    W[n] = new L(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    W[n] = new L(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    W[n] = new L(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    W[n] = new L(n, 5, !1, n.toLowerCase(), null, !1, !1);
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
    W[i] = new L(i, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var i = n.replace($, z);
    W[i] = new L(i, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var i = n.replace($, z);
    W[i] = new L(i, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    W[n] = new L(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new L("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    W[n] = new L(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function I(n, i, s, v) {
    var g = W.hasOwnProperty(i) ? W[i] : null, S = g !== null ? g.type === 0 : v ? !1 : !(!(2 < i.length) || i[0] !== "o" && i[0] !== "O" || i[1] !== "n" && i[1] !== "N");
    S || (F(i, s, g, v) && (s = null), v || g === null ? D(i) && (s === null ? n.removeAttribute(i) : n.setAttribute(i, "" + s)) : g.mustUseProperty ? n[g.propertyName] = s === null ? g.type === 3 ? !1 : "" : s : (i = g.attributeName, v = g.attributeNamespace, s === null ? n.removeAttribute(i) : (g = g.type, s = g === 3 || g === 4 && s === !0 ? "" : "" + s, v ? n.setAttributeNS(v, i, s) : n.setAttribute(i, s))));
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
      } catch (s) {
        var i = s.stack.trim().match(/\n( *(at )?)/);
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
    var s = Error.prepareStackTrace;
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
`), R = g.length - 1, M = S.length - 1; 1 <= R && 0 <= M && g[R] !== S[M]; )
          M--;
        for (; 1 <= R && 0 <= M; R--, M--)
          if (g[R] !== S[M]) {
            if (R !== 1 || M !== 1)
              do
                if (R--, M--, 0 > M || g[R] !== S[M])
                  return `
` + g[R].replace(" at new ", " at ");
              while (1 <= R && 0 <= M);
            break;
          }
      }
    } finally {
      Ve = !1, Error.prepareStackTrace = s;
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
          } catch (s) {
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
    var i = Vt(n) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(n.constructor.prototype, i), v = "" + n[i];
    if (!n.hasOwnProperty(i) && typeof s != "undefined" && typeof s.get == "function" && typeof s.set == "function") {
      var g = s.get, S = s.set;
      return Object.defineProperty(n, i, { configurable: !0, get: function() {
        return g.call(this);
      }, set: function(R) {
        v = "" + R, S.call(this, R);
      } }), Object.defineProperty(n, i, { enumerable: s.enumerable }), { getValue: function() {
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
    var s = i.getValue(), v = "";
    return n && (v = Vt(n) ? n.checked ? "true" : "false" : n.value), n = v, n !== s ? (i.setValue(n), !0) : !1;
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
    var s = i.checked;
    return o({}, i, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s != null ? s : n._wrapperState.initialChecked });
  }
  function Ze(n, i) {
    var s = i.defaultValue == null ? "" : i.defaultValue, v = i.checked != null ? i.checked : i.defaultChecked;
    s = et(i.value != null ? i.value : s), n._wrapperState = { initialChecked: v, initialValue: s, controlled: i.type === "checkbox" || i.type === "radio" ? i.checked != null : i.value != null };
  }
  function kt(n, i) {
    i = i.checked, i != null && I(n, "checked", i, !1);
  }
  function gt(n, i) {
    kt(n, i);
    var s = et(i.value), v = i.type;
    if (s != null)
      v === "number" ? (s === 0 && n.value === "" || n.value != s) && (n.value = "" + s) : n.value !== "" + s && (n.value = "" + s);
    else if (v === "submit" || v === "reset") {
      n.removeAttribute("value");
      return;
    }
    i.hasOwnProperty("value") ? ot(n, i.type, s) : i.hasOwnProperty("defaultValue") && ot(n, i.type, et(i.defaultValue)), i.checked == null && i.defaultChecked != null && (n.defaultChecked = !!i.defaultChecked);
  }
  function Zt(n, i, s) {
    if (i.hasOwnProperty("value") || i.hasOwnProperty("defaultValue")) {
      var v = i.type;
      if (!(v !== "submit" && v !== "reset" || i.value !== void 0 && i.value !== null))
        return;
      i = "" + n._wrapperState.initialValue, s || i === n.value || (n.value = i), n.defaultValue = i;
    }
    s = n.name, s !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, s !== "" && (n.name = s);
  }
  function ot(n, i, s) {
    (i !== "number" || zt(n.ownerDocument) !== n) && (s == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + s && (n.defaultValue = "" + s));
  }
  function Wt(n) {
    var i = "";
    return r.Children.forEach(n, function(s) {
      s != null && (i += s);
    }), i;
  }
  function Qt(n, i) {
    return n = o({ children: void 0 }, i), (i = Wt(i.children)) && (n.children = i), n;
  }
  function ut(n, i, s, v) {
    if (n = n.options, i) {
      i = {};
      for (var g = 0; g < s.length; g++)
        i["$" + s[g]] = !0;
      for (s = 0; s < n.length; s++)
        g = i.hasOwnProperty("$" + n[s].value), n[s].selected !== g && (n[s].selected = g), g && v && (n[s].defaultSelected = !0);
    } else {
      for (s = "" + et(s), i = null, g = 0; g < n.length; g++) {
        if (n[g].value === s) {
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
    var s = i.value;
    if (s == null) {
      if (s = i.children, i = i.defaultValue, s != null) {
        if (i != null)
          throw Error(c(92));
        if (Array.isArray(s)) {
          if (!(1 >= s.length))
            throw Error(c(93));
          s = s[0];
        }
        i = s;
      }
      i == null && (i = ""), s = i;
    }
    n._wrapperState = { initialValue: et(s) };
  }
  function qt(n, i) {
    var s = et(i.value), v = et(i.defaultValue);
    s != null && (s = "" + s, s !== n.value && (n.value = s), i.defaultValue == null && n.defaultValue !== s && (n.defaultValue = s)), v != null && (n.defaultValue = "" + v);
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
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(i, s, v, g) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(i, s, v, g);
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
      var s = n.firstChild;
      if (s && s === n.lastChild && s.nodeType === 3) {
        s.nodeValue = i;
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
  function Ot(n, i, s) {
    return i == null || typeof i == "boolean" || i === "" ? "" : s || typeof i != "number" || i === 0 || st.hasOwnProperty(n) && st[n] ? ("" + i).trim() : i + "px";
  }
  function jt(n, i) {
    n = n.style;
    for (var s in i)
      if (i.hasOwnProperty(s)) {
        var v = s.indexOf("--") === 0, g = Ot(s, i[s], v);
        s === "float" && (s = "cssFloat"), v ? n.setProperty(s, g) : n[s] = g;
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
      i && (i = Ni(i), Ue(n.stateNode, n.type, i));
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
  function gn(n, i, s, v, g) {
    return n(i, s, v, g);
  }
  function oa() {
  }
  var qr = An, Ln = !1, Kt = !1;
  function Bn() {
    (St !== null || Oe !== null) && (oa(), mn());
  }
  function Yr(n, i, s) {
    if (Kt)
      return n(i, s);
    Kt = !0;
    try {
      return qr(n, i, s);
    } finally {
      Kt = !1, Bn();
    }
  }
  function ln(n, i) {
    var s = n.stateNode;
    if (s === null)
      return null;
    var v = Ni(s);
    if (v === null)
      return null;
    s = v[i];
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
    if (s && typeof s != "function")
      throw Error(c(231, i, typeof s));
    return s;
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
  function qa(n, i, s, v, g, S, R, M, j) {
    var ee = Array.prototype.slice.call(arguments, 3);
    try {
      i.apply(s, ee);
    } catch (Le) {
      this.onError(Le);
    }
  }
  var Lr = !1, Pr = null, Rr = !1, Ya = null, Pn = { onError: function(n) {
    Lr = !0, Pr = n;
  } };
  function wi(n, i, s, v, g, S, R, M, j) {
    Lr = !1, Pr = null, qa.apply(Pn, arguments);
  }
  function _r(n, i, s, v, g, S, R, M, j) {
    if (wi.apply(this, arguments), Lr) {
      if (Lr) {
        var ee = Pr;
        Lr = !1, Pr = null;
      } else
        throw Error(c(198));
      Rr || (Rr = !0, Ya = ee);
    }
  }
  function xn(n) {
    var i = n, s = n;
    if (n.alternate)
      for (; i.return; )
        i = i.return;
    else {
      n = i;
      do
        i = n, i.flags & 1026 && (s = i.return), n = i.return;
      while (n);
    }
    return i.tag === 3 ? s : null;
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
    for (var s = n, v = i; ; ) {
      var g = s.return;
      if (g === null)
        break;
      var S = g.alternate;
      if (S === null) {
        if (v = g.return, v !== null) {
          s = v;
          continue;
        }
        break;
      }
      if (g.child === S.child) {
        for (S = g.child; S; ) {
          if (S === s)
            return kr(g), n;
          if (S === v)
            return kr(g), i;
          S = S.sibling;
        }
        throw Error(c(188));
      }
      if (s.return !== v.return)
        s = g, v = S;
      else {
        for (var R = !1, M = g.child; M; ) {
          if (M === s) {
            R = !0, s = g, v = S;
            break;
          }
          if (M === v) {
            R = !0, v = g, s = S;
            break;
          }
          M = M.sibling;
        }
        if (!R) {
          for (M = S.child; M; ) {
            if (M === s) {
              R = !0, s = S, v = g;
              break;
            }
            if (M === v) {
              R = !0, v = S, s = g;
              break;
            }
            M = M.sibling;
          }
          if (!R)
            throw Error(c(189));
        }
      }
      if (s.alternate !== v)
        throw Error(c(190));
    }
    if (s.tag !== 3)
      throw Error(c(188));
    return s.stateNode.current === s ? n : i;
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
    for (var s = n.alternate; i !== null; ) {
      if (i === n || i === s)
        return !0;
      i = i.return;
    }
    return !1;
  }
  var Xa, gr, Qr, Mr, ma = !1, In = [], Kn = null, Or = null, or = null, yr = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), Xt = [], dt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function $t(n, i, s, v, g) {
    return { blockedOn: n, domEventName: i, eventSystemFlags: s | 16, nativeEvent: g, targetContainers: [v] };
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
  function On(n, i, s, v, g, S) {
    return n === null || n.nativeEvent !== S ? (n = $t(i, s, v, g, S), i !== null && (i = ua(i), i !== null && gr(i)), n) : (n.eventSystemFlags |= v, i = n.targetContainers, g !== null && i.indexOf(g) === -1 && i.push(g), n);
  }
  function Nn(n, i, s, v, g) {
    switch (i) {
      case "focusin":
        return Kn = On(Kn, n, i, s, v, g), !0;
      case "dragenter":
        return Or = On(Or, n, i, s, v, g), !0;
      case "mouseover":
        return or = On(or, n, i, s, v, g), !0;
      case "pointerover":
        var S = g.pointerId;
        return yr.set(S, On(yr.get(S) || null, n, i, s, v, g)), !0;
      case "gotpointercapture":
        return S = g.pointerId, Re.set(S, On(Re.get(S) || null, n, i, s, v, g)), !0;
    }
    return !1;
  }
  function vn(n) {
    var i = tl(n.target);
    if (i !== null) {
      var s = xn(i);
      if (s !== null) {
        if (i = s.tag, i === 13) {
          if (i = Ir(s), i !== null) {
            n.blockedOn = i, Mr(n.lanePriority, function() {
              u.unstable_runWithPriority(n.priority, function() {
                Qr(s);
              });
            });
            return;
          }
        } else if (i === 3 && s.stateNode.hydrate) {
          n.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
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
      var s = nc(n.domEventName, n.eventSystemFlags, i[0], n.nativeEvent);
      if (s !== null)
        return i = ua(s), i !== null && gr(i), n.blockedOn = s, !1;
      i.shift();
    }
    return !0;
  }
  function xi(n, i, s) {
    er(n) && s.delete(i);
  }
  function Gn() {
    for (ma = !1; 0 < In.length; ) {
      var n = In[0];
      if (n.blockedOn !== null) {
        n = ua(n.blockedOn), n !== null && Xa(n);
        break;
      }
      for (var i = n.targetContainers; 0 < i.length; ) {
        var s = nc(n.domEventName, n.eventSystemFlags, i[0], n.nativeEvent);
        if (s !== null) {
          n.blockedOn = s;
          break;
        }
        i.shift();
      }
      n.blockedOn === null && In.shift();
    }
    Kn !== null && er(Kn) && (Kn = null), Or !== null && er(Or) && (Or = null), or !== null && er(or) && (or = null), yr.forEach(xi), Re.forEach(xi);
  }
  function zn(n, i) {
    n.blockedOn === i && (n.blockedOn = null, ma || (ma = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Gn)));
  }
  function tr(n) {
    function i(g) {
      return zn(g, n);
    }
    if (0 < In.length) {
      zn(In[0], n);
      for (var s = 1; s < In.length; s++) {
        var v = In[s];
        v.blockedOn === n && (v.blockedOn = null);
      }
    }
    for (Kn !== null && zn(Kn, n), Or !== null && zn(Or, n), or !== null && zn(or, n), yr.forEach(i), Re.forEach(i), s = 0; s < Xt.length; s++)
      v = Xt[s], v.blockedOn === n && (v.blockedOn = null);
    for (; 0 < Xt.length && (s = Xt[0], s.blockedOn === null); )
      vn(s), s.blockedOn === null && Xt.shift();
  }
  function la(n, i) {
    var s = {};
    return s[n.toLowerCase()] = i.toLowerCase(), s["Webkit" + n] = "webkit" + i, s["Moz" + n] = "moz" + i, s;
  }
  var br = { animationend: la("Animation", "AnimationEnd"), animationiteration: la("Animation", "AnimationIteration"), animationstart: la("Animation", "AnimationStart"), transitionend: la("Transition", "TransitionEnd") }, ga = {}, Ti = {};
  x && (Ti = document.createElement("div").style, "AnimationEvent" in window || (delete br.animationend.animation, delete br.animationiteration.animation, delete br.animationstart.animation), "TransitionEvent" in window || delete br.transitionend.transition);
  function Na(n) {
    if (ga[n])
      return ga[n];
    if (!br[n])
      return n;
    var i = br[n], s;
    for (s in i)
      if (i.hasOwnProperty(s) && s in Ti)
        return ga[n] = i[s];
    return n;
  }
  var to = Na("animationend"), Da = Na("animationiteration"), no = Na("animationstart"), Ri = Na("transitionend"), qo = /* @__PURE__ */ new Map(), ro = /* @__PURE__ */ new Map(), Il = [
    "abort",
    "abort",
    to,
    "animationEnd",
    Da,
    "animationIteration",
    no,
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
    Ri,
    "transitionEnd",
    "waiting",
    "waiting"
  ];
  function Be(n, i) {
    for (var s = 0; s < n.length; s += 2) {
      var v = n[s], g = n[s + 1];
      g = "on" + (g[0].toUpperCase() + g.slice(1)), ro.set(v, i), qo.set(v, g), h(g, [v]);
    }
  }
  var yt = u.unstable_now;
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
  function ao(n) {
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
    var s = n.pendingLanes;
    if (s === 0)
      return ct = 0;
    var v = 0, g = 0, S = n.expiredLanes, R = n.suspendedLanes, M = n.pingedLanes;
    if (S !== 0)
      v = S, g = ct = 15;
    else if (S = s & 134217727, S !== 0) {
      var j = S & ~R;
      j !== 0 ? (v = pn(j), g = ct) : (M &= S, M !== 0 && (v = pn(M), g = ct));
    } else
      S = s & ~R, S !== 0 ? (v = pn(S), g = ct) : M !== 0 && (v = pn(M), g = ct);
    if (v === 0)
      return 0;
    if (v = 31 - oo(v), v = s & ((0 > v ? 0 : 1 << v) << 1) - 1, i !== 0 && i !== v && !(i & R)) {
      if (pn(i), g <= ct)
        return i;
      ct = g;
    }
    if (i = n.entangledLanes, i !== 0)
      for (n = n.entanglements, i &= v; 0 < i; )
        s = 31 - oo(i), g = 1 << s, v |= n[s], i &= ~g;
    return v;
  }
  function Lu(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function _i(n, i) {
    switch (n) {
      case 15:
        return 1;
      case 14:
        return 2;
      case 12:
        return n = io(24 & ~i), n === 0 ? _i(10, i) : n;
      case 10:
        return n = io(192 & ~i), n === 0 ? _i(8, i) : n;
      case 8:
        return n = io(3584 & ~i), n === 0 && (n = io(4186112 & ~i), n === 0 && (n = 512)), n;
      case 2:
        return i = io(805306368 & ~i), i === 0 && (i = 268435456), i;
    }
    throw Error(c(358, n));
  }
  function io(n) {
    return n & -n;
  }
  function tc(n) {
    for (var i = [], s = 0; 31 > s; s++)
      i.push(n);
    return i;
  }
  function Pu(n, i, s) {
    n.pendingLanes |= i;
    var v = i - 1;
    n.suspendedLanes &= v, n.pingedLanes &= v, n = n.eventTimes, i = 31 - oo(i), n[i] = s;
  }
  var oo = Math.clz32 ? Math.clz32 : If, op = Math.log, Qg = Math.LN2;
  function If(n) {
    return n === 0 ? 32 : 31 - (op(n) / Qg | 0) | 0;
  }
  var zf = u.unstable_UserBlockingPriority, lp = u.unstable_runWithPriority, Iu = !0;
  function Xg(n, i, s, v) {
    Ln || oa();
    var g = zu, S = Ln;
    Ln = !0;
    try {
      gn(g, n, i, s, v);
    } finally {
      (Ln = S) || Bn();
    }
  }
  function zl(n, i, s, v) {
    lp(zf, zu.bind(null, n, i, s, v));
  }
  function zu(n, i, s, v) {
    if (Iu) {
      var g;
      if ((g = (i & 4) === 0) && 0 < In.length && -1 < dt.indexOf(n))
        n = $t(null, n, i, s, v), In.push(n);
      else {
        var S = nc(n, i, s, v);
        if (S === null)
          g && Tn(n, v);
        else {
          if (g) {
            if (-1 < dt.indexOf(n)) {
              n = $t(S, n, i, s, v), In.push(n);
              return;
            }
            if (Nn(S, n, i, s, v))
              return;
            Tn(n, v);
          }
          fc(n, i, v, null, s);
        }
      }
    }
  }
  function nc(n, i, s, v) {
    var g = Ht(v);
    if (g = tl(g), g !== null) {
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
    return fc(n, i, v, g, s), null;
  }
  var lo = null, $f = null, rc = null;
  function Uf() {
    if (rc)
      return rc;
    var n, i = $f, s = i.length, v, g = "value" in lo ? lo.value : lo.textContent, S = g.length;
    for (n = 0; n < s && i[n] === g[n]; n++)
      ;
    var R = s - n;
    for (v = 1; v <= R && i[s - v] === g[S - v]; v++)
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
  function jf() {
    return !1;
  }
  function Xr(n) {
    function i(s, v, g, S, R) {
      this._reactName = s, this._targetInst = g, this.type = v, this.nativeEvent = S, this.target = R, this.currentTarget = null;
      for (var M in n)
        n.hasOwnProperty(M) && (s = n[M], this[M] = s ? s(S) : S[M]);
      return this.isDefaultPrevented = (S.defaultPrevented != null ? S.defaultPrevented : S.returnValue === !1) ? $u : jf, this.isPropagationStopped = jf, this;
    }
    return o(i.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = $u);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = $u);
    }, persist: function() {
    }, isPersistent: $u }), i;
  }
  var Ul = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, jl = Xr(Ul), Hl = o({}, Ul, { view: 0, detail: 0 }), Hf = Xr(Hl), ac, Uu, Yo, ic = o({}, Hl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Bf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Yo && (Yo && n.type === "mousemove" ? (ac = n.screenX - Yo.screenX, Uu = n.screenY - Yo.screenY) : Uu = ac = 0, Yo = n), ac);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Uu;
  } }), ju = Xr(ic), up = o({}, ic, { dataTransfer: 0 }), ya = Xr(up), ki = o({}, Hl, { relatedTarget: 0 }), Ur = Xr(ki), uo = o({}, Ul, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), sp = Xr(uo), oc = o({}, Ul, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Zg = Xr(oc), Hu = o({}, Ul, { data: 0 }), cp = Xr(Hu), Jg = {
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
  }, Ff = {
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
  }, ey = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function ty(n) {
    var i = this.nativeEvent;
    return i.getModifierState ? i.getModifierState(n) : (n = ey[n]) ? !!i[n] : !1;
  }
  function Bf() {
    return ty;
  }
  var fp = o({}, Hl, { key: function(n) {
    if (n.key) {
      var i = Jg[n.key] || n.key;
      if (i !== "Unidentified")
        return i;
    }
    return n.type === "keypress" ? (n = $l(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Ff[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Bf, charCode: function(n) {
    return n.type === "keypress" ? $l(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? $l(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), ny = Xr(fp), ry = o({}, ic, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), dp = Xr(ry), vp = o({}, Hl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bf }), Fl = Xr(vp), Vf = o({}, Ul, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), pp = Xr(Vf), hp = o({}, ic, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ay = Xr(hp), iy = [9, 13, 27, 32], Wf = x && "CompositionEvent" in window, Fu = null;
  x && "documentMode" in document && (Fu = document.documentMode);
  var oy = x && "TextEvent" in window && !Fu, mp = x && (!Wf || Fu && 8 < Fu && 11 >= Fu), gp = " ", yp = !1;
  function Kf(n, i) {
    switch (n) {
      case "keyup":
        return iy.indexOf(i.keyCode) !== -1;
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
  function bp(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Qo = !1;
  function ly(n, i) {
    switch (n) {
      case "compositionend":
        return bp(i);
      case "keypress":
        return i.which !== 32 ? null : (yp = !0, gp);
      case "textInput":
        return n = i.data, n === gp && yp ? null : n;
      default:
        return null;
    }
  }
  function uy(n, i) {
    if (Qo)
      return n === "compositionend" || !Wf && Kf(n, i) ? (n = Uf(), rc = $f = lo = null, Qo = !1, n) : null;
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
        return mp && i.locale !== "ko" ? null : i.data;
      default:
        return null;
    }
  }
  var sy = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Sp(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i === "input" ? !!sy[n.type] : i === "textarea";
  }
  function lc(n, i, s, v) {
    At(v), i = dc(i, "onChange"), 0 < i.length && (s = new jl("onChange", "change", null, s, v), n.push({ event: s, listeners: i }));
  }
  var Aa = null, so = null;
  function Cp(n) {
    uc(n, 0);
  }
  function Mi(n) {
    var i = Fr(n);
    if (Dt(i))
      return n;
  }
  function cy(n, i) {
    if (n === "change")
      return i;
  }
  var Ep = !1;
  if (x) {
    var Gf;
    if (x) {
      var qf = "oninput" in document;
      if (!qf) {
        var wp = document.createElement("div");
        wp.setAttribute("oninput", "return;"), qf = typeof wp.oninput == "function";
      }
      Gf = qf;
    } else
      Gf = !1;
    Ep = Gf && (!document.documentMode || 9 < document.documentMode);
  }
  function xp() {
    Aa && (Aa.detachEvent("onpropertychange", Yf), so = Aa = null);
  }
  function Yf(n) {
    if (n.propertyName === "value" && Mi(so)) {
      var i = [];
      if (lc(i, so, n, Ht(n)), n = Cp, Ln)
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
  function fy(n, i, s) {
    n === "focusin" ? (xp(), Aa = i, so = s, Aa.attachEvent("onpropertychange", Yf)) : n === "focusout" && xp();
  }
  function Tp(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Mi(so);
  }
  function jr(n, i) {
    if (n === "click")
      return Mi(i);
  }
  function dy(n, i) {
    if (n === "input" || n === "change")
      return Mi(i);
  }
  function Rp(n, i) {
    return n === i && (n !== 0 || 1 / n === 1 / i) || n !== n && i !== i;
  }
  var ba = typeof Object.is == "function" ? Object.is : Rp, vy = Object.prototype.hasOwnProperty;
  function Bu(n, i) {
    if (ba(n, i))
      return !0;
    if (typeof n != "object" || n === null || typeof i != "object" || i === null)
      return !1;
    var s = Object.keys(n), v = Object.keys(i);
    if (s.length !== v.length)
      return !1;
    for (v = 0; v < s.length; v++)
      if (!vy.call(i, s[v]) || !ba(n[s[v]], i[s[v]]))
        return !1;
    return !0;
  }
  function _p(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function kp(n, i) {
    var s = _p(n);
    n = 0;
    for (var v; s; ) {
      if (s.nodeType === 3) {
        if (v = n + s.textContent.length, n <= i && v >= i)
          return { node: s, offset: i - n };
        n = v;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = _p(s);
    }
  }
  function Qf(n, i) {
    return n && i ? n === i ? !0 : n && n.nodeType === 3 ? !1 : i && i.nodeType === 3 ? Qf(n, i.parentNode) : "contains" in n ? n.contains(i) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(i) & 16) : !1 : !1;
  }
  function Vu() {
    for (var n = window, i = zt(); i instanceof n.HTMLIFrameElement; ) {
      try {
        var s = typeof i.contentWindow.location.href == "string";
      } catch (v) {
        s = !1;
      }
      if (s)
        n = i.contentWindow;
      else
        break;
      i = zt(n.document);
    }
    return i;
  }
  function Xo(n) {
    var i = n && n.nodeName && n.nodeName.toLowerCase();
    return i && (i === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || i === "textarea" || n.contentEditable === "true");
  }
  var Mp = x && "documentMode" in document && 11 >= document.documentMode, Bl = null, Wu = null, Zo = null, co = !1;
  function Jo(n, i, s) {
    var v = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    co || Bl == null || Bl !== zt(v) || (v = Bl, "selectionStart" in v && Xo(v) ? v = { start: v.selectionStart, end: v.selectionEnd } : (v = (v.ownerDocument && v.ownerDocument.defaultView || window).getSelection(), v = { anchorNode: v.anchorNode, anchorOffset: v.anchorOffset, focusNode: v.focusNode, focusOffset: v.focusOffset }), Zo && Bu(Zo, v) || (Zo = v, v = dc(Wu, "onSelect"), 0 < v.length && (i = new jl("onSelect", "select", null, i, s), n.push({ event: i, listeners: v }), i.target = Bl)));
  }
  Be(
    "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
    0
  ), Be("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Be(Il, 2);
  for (var Xf = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Zf = 0; Zf < Xf.length; Zf++)
    ro.set(Xf[Zf], 0);
  C("onMouseEnter", ["mouseout", "mouseover"]), C("onMouseLeave", ["mouseout", "mouseover"]), C("onPointerEnter", ["pointerout", "pointerover"]), C("onPointerLeave", ["pointerout", "pointerover"]), h("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), h("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), h("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), h("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), h("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Vl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Op = new Set("cancel close invalid load scroll toggle".split(" ").concat(Vl));
  function Jf(n, i, s) {
    var v = n.type || "unknown-event";
    n.currentTarget = s, _r(v, i, void 0, n), n.currentTarget = null;
  }
  function uc(n, i) {
    i = (i & 4) !== 0;
    for (var s = 0; s < n.length; s++) {
      var v = n[s], g = v.event;
      v = v.listeners;
      e: {
        var S = void 0;
        if (i)
          for (var R = v.length - 1; 0 <= R; R--) {
            var M = v[R], j = M.instance, ee = M.currentTarget;
            if (M = M.listener, j !== S && g.isPropagationStopped())
              break e;
            Jf(g, M, ee), S = j;
          }
        else
          for (R = 0; R < v.length; R++) {
            if (M = v[R], j = M.instance, ee = M.currentTarget, M = M.listener, j !== S && g.isPropagationStopped())
              break e;
            Jf(g, M, ee), S = j;
          }
      }
    }
    if (Rr)
      throw n = Ya, Rr = !1, Ya = null, n;
  }
  function yn(n, i) {
    var s = Pp(i), v = n + "__bubble";
    s.has(v) || (cc(i, n, 2, !1), s.add(v));
  }
  var sc = "_reactListening" + Math.random().toString(36).slice(2);
  function ed(n) {
    n[sc] || (n[sc] = !0, d.forEach(function(i) {
      Op.has(i) || Oi(i, !1, n, null), Oi(i, !0, n, null);
    }));
  }
  function Oi(n, i, s, v) {
    var g = 4 < arguments.length && arguments[4] !== void 0 ? arguments[4] : 0, S = s;
    if (n === "selectionchange" && s.nodeType !== 9 && (S = s.ownerDocument), v !== null && !i && Op.has(n)) {
      if (n !== "scroll")
        return;
      g |= 2, S = v;
    }
    var R = Pp(S), M = n + "__" + (i ? "capture" : "bubble");
    R.has(M) || (i && (g |= 4), cc(S, n, g, i), R.add(M));
  }
  function cc(n, i, s, v) {
    var g = ro.get(i);
    switch (g === void 0 ? 2 : g) {
      case 0:
        g = Xg;
        break;
      case 1:
        g = zl;
        break;
      default:
        g = zu;
    }
    s = g.bind(null, i, s, n), g = void 0, !Jn || i !== "touchstart" && i !== "touchmove" && i !== "wheel" || (g = !0), v ? g !== void 0 ? n.addEventListener(i, s, { capture: !0, passive: g }) : n.addEventListener(i, s, !0) : g !== void 0 ? n.addEventListener(i, s, { passive: g }) : n.addEventListener(i, s, !1);
  }
  function fc(n, i, s, v, g) {
    var S = v;
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
                var j = R.tag;
                if ((j === 3 || j === 4) && (j = R.stateNode.containerInfo, j === g || j.nodeType === 8 && j.parentNode === g))
                  return;
                R = R.return;
              }
            for (; M !== null; ) {
              if (R = tl(M), R === null)
                return;
              if (j = R.tag, j === 5 || j === 6) {
                v = S = R;
                continue e;
              }
              M = M.parentNode;
            }
          }
          v = v.return;
        }
    Yr(function() {
      var ee = S, Le = Ht(s), Et = [];
      e: {
        var me = qo.get(n);
        if (me !== void 0) {
          var Je = jl, bt = n;
          switch (n) {
            case "keypress":
              if ($l(s) === 0)
                break e;
            case "keydown":
            case "keyup":
              Je = ny;
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
              if (s.button === 2)
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
              Je = ya;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Je = Fl;
              break;
            case to:
            case Da:
            case no:
              Je = sp;
              break;
            case Ri:
              Je = pp;
              break;
            case "scroll":
              Je = Hf;
              break;
            case "wheel":
              Je = ay;
              break;
            case "copy":
            case "cut":
            case "paste":
              Je = Zg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Je = dp;
          }
          var ft = (i & 4) !== 0, Q = !ft && n === "scroll", B = ft ? me !== null ? me + "Capture" : null : me;
          ft = [];
          for (var K = ee, le; K !== null; ) {
            le = K;
            var ce = le.stateNode;
            if (le.tag === 5 && ce !== null && (le = ce, B !== null && (ce = ln(K, B), ce != null && ft.push(Ku(K, ce, le)))), Q)
              break;
            K = K.return;
          }
          0 < ft.length && (me = new Je(me, bt, null, s, Le), Et.push({ event: me, listeners: ft }));
        }
      }
      if (!(i & 7)) {
        e: {
          if (me = n === "mouseover" || n === "pointerover", Je = n === "mouseout" || n === "pointerout", me && !(i & 16) && (bt = s.relatedTarget || s.fromElement) && (tl(bt) || bt[Hr]))
            break e;
          if ((Je || me) && (me = Le.window === Le ? Le : (me = Le.ownerDocument) ? me.defaultView || me.parentWindow : window, Je ? (bt = s.relatedTarget || s.toElement, Je = ee, bt = bt ? tl(bt) : null, bt !== null && (Q = xn(bt), bt !== Q || bt.tag !== 5 && bt.tag !== 6) && (bt = null)) : (Je = null, bt = ee), Je !== bt)) {
            if (ft = ju, ce = "onMouseLeave", B = "onMouseEnter", K = "mouse", (n === "pointerout" || n === "pointerover") && (ft = dp, ce = "onPointerLeave", B = "onPointerEnter", K = "pointer"), Q = Je == null ? me : Fr(Je), le = bt == null ? me : Fr(bt), me = new ft(ce, K + "leave", Je, s, Le), me.target = Q, me.relatedTarget = le, ce = null, tl(Le) === ee && (ft = new ft(B, K + "enter", bt, s, Le), ft.target = le, ft.relatedTarget = Q, ce = ft), Q = ce, Je && bt)
              t: {
                for (ft = Je, B = bt, K = 0, le = ft; le; le = Wl(le))
                  K++;
                for (le = 0, ce = B; ce; ce = Wl(ce))
                  le++;
                for (; 0 < K - le; )
                  ft = Wl(ft), K--;
                for (; 0 < le - K; )
                  B = Wl(B), le--;
                for (; K--; ) {
                  if (ft === B || B !== null && ft === B.alternate)
                    break t;
                  ft = Wl(ft), B = Wl(B);
                }
                ft = null;
              }
            else
              ft = null;
            Je !== null && Np(Et, me, Je, ft, !1), bt !== null && Q !== null && Np(Et, Q, bt, ft, !0);
          }
        }
        e: {
          if (me = ee ? Fr(ee) : window, Je = me.nodeName && me.nodeName.toLowerCase(), Je === "select" || Je === "input" && me.type === "file")
            var Rt = cy;
          else if (Sp(me))
            if (Ep)
              Rt = dy;
            else {
              Rt = Tp;
              var He = fy;
            }
          else
            (Je = me.nodeName) && Je.toLowerCase() === "input" && (me.type === "checkbox" || me.type === "radio") && (Rt = jr);
          if (Rt && (Rt = Rt(n, ee))) {
            lc(Et, Rt, s, Le);
            break e;
          }
          He && He(n, me, ee), n === "focusout" && (He = me._wrapperState) && He.controlled && me.type === "number" && ot(me, "number", me.value);
        }
        switch (He = ee ? Fr(ee) : window, n) {
          case "focusin":
            (Sp(He) || He.contentEditable === "true") && (Bl = He, Wu = ee, Zo = null);
            break;
          case "focusout":
            Zo = Wu = Bl = null;
            break;
          case "mousedown":
            co = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            co = !1, Jo(Et, s, Le);
            break;
          case "selectionchange":
            if (Mp)
              break;
          case "keydown":
          case "keyup":
            Jo(Et, s, Le);
        }
        var wt;
        if (Wf)
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
          Qo ? Kf(n, s) && (Lt = "onCompositionEnd") : n === "keydown" && s.keyCode === 229 && (Lt = "onCompositionStart");
        Lt && (mp && s.locale !== "ko" && (Qo || Lt !== "onCompositionStart" ? Lt === "onCompositionEnd" && Qo && (wt = Uf()) : (lo = Le, $f = "value" in lo ? lo.value : lo.textContent, Qo = !0)), He = dc(ee, Lt), 0 < He.length && (Lt = new cp(Lt, n, null, s, Le), Et.push({ event: Lt, listeners: He }), wt ? Lt.data = wt : (wt = bp(s), wt !== null && (Lt.data = wt)))), (wt = oy ? ly(n, s) : uy(n, s)) && (ee = dc(ee, "onBeforeInput"), 0 < ee.length && (Le = new cp(
          "onBeforeInput",
          "beforeinput",
          null,
          s,
          Le
        ), Et.push({ event: Le, listeners: ee }), Le.data = wt));
      }
      uc(Et, i);
    });
  }
  function Ku(n, i, s) {
    return { instance: n, listener: i, currentTarget: s };
  }
  function dc(n, i) {
    for (var s = i + "Capture", v = []; n !== null; ) {
      var g = n, S = g.stateNode;
      g.tag === 5 && S !== null && (g = S, S = ln(n, s), S != null && v.unshift(Ku(n, S, g)), S = ln(n, i), S != null && v.push(Ku(n, S, g))), n = n.return;
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
  function Np(n, i, s, v, g) {
    for (var S = i._reactName, R = []; s !== null && s !== v; ) {
      var M = s, j = M.alternate, ee = M.stateNode;
      if (j !== null && j === v)
        break;
      M.tag === 5 && ee !== null && (M = ee, g ? (j = ln(s, S), j != null && R.unshift(Ku(s, j, M))) : g || (j = ln(s, S), j != null && R.push(Ku(s, j, M)))), s = s.return;
    }
    R.length !== 0 && n.push({ event: i, listeners: R });
  }
  function vc() {
  }
  var td = null, nd = null;
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
  var Gl = typeof setTimeout == "function" ? setTimeout : void 0, Dp = typeof clearTimeout == "function" ? clearTimeout : void 0;
  function pc(n) {
    n.nodeType === 1 ? n.textContent = "" : n.nodeType === 9 && (n = n.body, n != null && (n.textContent = ""));
  }
  function fo(n) {
    for (; n != null; n = n.nextSibling) {
      var i = n.nodeType;
      if (i === 1 || i === 3)
        break;
    }
    return n;
  }
  function Ap(n) {
    n = n.previousSibling;
    for (var i = 0; n; ) {
      if (n.nodeType === 8) {
        var s = n.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (i === 0)
            return n;
          i--;
        } else
          s === "/$" && i++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var vo = 0;
  function hc(n) {
    return { $$typeof: Ae, toString: n, valueOf: n };
  }
  var el = Math.random().toString(36).slice(2), Ja = "__reactFiber$" + el, mc = "__reactProps$" + el, Hr = "__reactContainer$" + el, Lp = "__reactEvents$" + el;
  function tl(n) {
    var i = n[Ja];
    if (i)
      return i;
    for (var s = n.parentNode; s; ) {
      if (i = s[Hr] || s[Ja]) {
        if (s = i.alternate, i.child !== null || s !== null && s.child !== null)
          for (n = Ap(n); n !== null; ) {
            if (s = n[Ja])
              return s;
            n = Ap(n);
          }
        return i;
      }
      n = s, s = n.parentNode;
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
  function Ni(n) {
    return n[mc] || null;
  }
  function Pp(n) {
    var i = n[Lp];
    return i === void 0 && (i = n[Lp] = /* @__PURE__ */ new Set()), i;
  }
  var rd = [], un = -1;
  function Br(n) {
    return { current: n };
  }
  function Tt(n) {
    0 > un || (n.current = rd[un], rd[un] = null, un--);
  }
  function vt(n, i) {
    un++, rd[un] = n.current, n.current = i;
  }
  var po = {}, Rn = Br(po), Sr = Br(!1), ho = po;
  function nn(n, i) {
    var s = n.type.contextTypes;
    if (!s)
      return po;
    var v = n.stateNode;
    if (v && v.__reactInternalMemoizedUnmaskedChildContext === i)
      return v.__reactInternalMemoizedMaskedChildContext;
    var g = {}, S;
    for (S in s)
      g[S] = i[S];
    return v && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = i, n.__reactInternalMemoizedMaskedChildContext = g), g;
  }
  function Cr(n) {
    return n = n.childContextTypes, n != null;
  }
  function ei() {
    Tt(Sr), Tt(Rn);
  }
  function ql(n, i, s) {
    if (Rn.current !== po)
      throw Error(c(168));
    vt(Rn, i), vt(Sr, s);
  }
  function Yl(n, i, s) {
    var v = n.stateNode;
    if (n = i.childContextTypes, typeof v.getChildContext != "function")
      return s;
    v = v.getChildContext();
    for (var g in v)
      if (!(g in n))
        throw Error(c(108, $e(i) || "Unknown", g));
    return o({}, s, v);
  }
  function Sa(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || po, ho = Rn.current, vt(Rn, n), vt(Sr, Sr.current), !0;
  }
  function Ip(n, i, s) {
    var v = n.stateNode;
    if (!v)
      throw Error(c(169));
    s ? (n = Yl(n, i, ho), v.__reactInternalMemoizedMergedChildContext = n, Tt(Sr), Tt(Rn), vt(Rn, n)) : Tt(Sr), vt(Sr, s);
  }
  var ad = null, nl = null, qu = u.unstable_runWithPriority, La = u.unstable_scheduleCallback, Yu = u.unstable_cancelCallback, py = u.unstable_shouldYield, mo = u.unstable_requestPaint, gc = u.unstable_now, zp = u.unstable_getCurrentPriorityLevel, yc = u.unstable_ImmediatePriority, $p = u.unstable_UserBlockingPriority, id = u.unstable_NormalPriority, od = u.unstable_LowPriority, ld = u.unstable_IdlePriority, ud = {}, Up = mo !== void 0 ? mo : function() {
  }, ti = null, bc = null, Qu = !1, jp = gc(), Er = 1e4 > jp ? gc : function() {
    return gc() - jp;
  };
  function Ql() {
    switch (zp()) {
      case yc:
        return 99;
      case $p:
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
        return $p;
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
  function rl(n, i) {
    return n = sd(n), qu(n, i);
  }
  function al(n, i, s) {
    return n = sd(n), La(n, i, s);
  }
  function lr() {
    if (bc !== null) {
      var n = bc;
      bc = null, Yu(n);
    }
    Di();
  }
  function Di() {
    if (!Qu && ti !== null) {
      Qu = !0;
      var n = 0;
      try {
        var i = ti;
        rl(99, function() {
          for (; n < i.length; n++) {
            var s = i[n];
            do
              s = s(!0);
            while (s !== null);
          }
        }), ti = null;
      } catch (s) {
        throw ti !== null && (ti = ti.slice(n + 1)), La(yc, lr), s;
      } finally {
        Qu = !1;
      }
    }
  }
  var go = U.ReactCurrentBatchConfig;
  function ur(n, i) {
    if (n && n.defaultProps) {
      i = o({}, i), n = n.defaultProps;
      for (var s in n)
        i[s] === void 0 && (i[s] = n[s]);
      return i;
    }
    return i;
  }
  var yo = Br(null), bo = null, ni = null, Sc = null;
  function cd() {
    Sc = ni = bo = null;
  }
  function Cc(n) {
    var i = yo.current;
    Tt(yo), n.type._context._currentValue = i;
  }
  function fd(n, i) {
    for (; n !== null; ) {
      var s = n.alternate;
      if ((n.childLanes & i) === i) {
        if (s === null || (s.childLanes & i) === i)
          break;
        s.childLanes |= i;
      } else
        n.childLanes |= i, s !== null && (s.childLanes |= i);
      n = n.return;
    }
  }
  function il(n, i) {
    bo = n, Sc = ni = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & i && (Ea = !0), n.firstContext = null);
  }
  function sa(n, i) {
    if (Sc !== n && i !== !1 && i !== 0)
      if ((typeof i != "number" || i === 1073741823) && (Sc = n, i = 1073741823), i = { context: n, observedBits: i, next: null }, ni === null) {
        if (bo === null)
          throw Error(c(308));
        ni = i, bo.dependencies = { lanes: 0, firstContext: i, responders: null };
      } else
        ni = ni.next = i;
    return n._currentValue;
  }
  var Ca = !1;
  function dd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null }, effects: null };
  }
  function Hp(n, i) {
    n = n.updateQueue, i.updateQueue === n && (i.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Pa(n, i) {
    return { eventTime: n, lane: i, tag: 0, payload: null, callback: null, next: null };
  }
  function Ai(n, i) {
    if (n = n.updateQueue, n !== null) {
      n = n.shared;
      var s = n.pending;
      s === null ? i.next = i : (i.next = s.next, s.next = i), n.pending = i;
    }
  }
  function Fp(n, i) {
    var s = n.updateQueue, v = n.alternate;
    if (v !== null && (v = v.updateQueue, s === v)) {
      var g = null, S = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var R = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          S === null ? g = S = R : S = S.next = R, s = s.next;
        } while (s !== null);
        S === null ? g = S = i : S = S.next = i;
      } else
        g = S = i;
      s = { baseState: v.baseState, firstBaseUpdate: g, lastBaseUpdate: S, shared: v.shared, effects: v.effects }, n.updateQueue = s;
      return;
    }
    n = s.lastBaseUpdate, n === null ? s.firstBaseUpdate = i : n.next = i, s.lastBaseUpdate = i;
  }
  function Li(n, i, s, v) {
    var g = n.updateQueue;
    Ca = !1;
    var S = g.firstBaseUpdate, R = g.lastBaseUpdate, M = g.shared.pending;
    if (M !== null) {
      g.shared.pending = null;
      var j = M, ee = j.next;
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
        M = S.lane;
        var me = S.eventTime;
        if ((v & M) === M) {
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
            switch (M = i, me = s, bt.tag) {
              case 1:
                if (Je = bt.payload, typeof Je == "function") {
                  Et = Je.call(me, Et, M);
                  break e;
                }
                Et = Je;
                break e;
              case 3:
                Je.flags = Je.flags & -4097 | 64;
              case 0:
                if (Je = bt.payload, M = typeof Je == "function" ? Je.call(me, Et, M) : Je, M == null)
                  break e;
                Et = o({}, Et, M);
                break e;
              case 2:
                Ca = !0;
            }
          }
          S.callback !== null && (n.flags |= 32, M = g.effects, M === null ? g.effects = [S] : M.push(S));
        } else
          me = { eventTime: me, lane: M, tag: S.tag, payload: S.payload, callback: S.callback, next: null }, Le === null ? (ee = Le = me, j = Et) : Le = Le.next = me, R |= M;
        if (S = S.next, S === null) {
          if (M = g.shared.pending, M === null)
            break;
          S = M.next, M.next = null, g.lastBaseUpdate = M, g.shared.pending = null;
        }
      } while (!0);
      Le === null && (j = Et), g.baseState = j, g.firstBaseUpdate = ee, g.lastBaseUpdate = Le, vl |= R, n.lanes = R, n.memoizedState = Et;
    }
  }
  function vd(n, i, s) {
    if (n = i.effects, i.effects = null, n !== null)
      for (i = 0; i < n.length; i++) {
        var v = n[i], g = v.callback;
        if (g !== null) {
          if (v.callback = null, v = s, typeof g != "function")
            throw Error(c(191, g));
          g.call(v);
        }
      }
  }
  var Ec = new r.Component().refs;
  function Xu(n, i, s, v) {
    i = n.memoizedState, s = s(v, i), s = s == null ? i : o({}, i, s), n.memoizedState = s, n.lanes === 0 && (n.updateQueue.baseState = s);
  }
  var Xl = { isMounted: function(n) {
    return (n = n._reactInternals) ? xn(n) === n : !1;
  }, enqueueSetState: function(n, i, s) {
    n = n._reactInternals;
    var v = ca(), g = si(n), S = Pa(v, g);
    S.payload = i, s != null && (S.callback = s), Ai(n, S), _o(n, g, v);
  }, enqueueReplaceState: function(n, i, s) {
    n = n._reactInternals;
    var v = ca(), g = si(n), S = Pa(v, g);
    S.tag = 1, S.payload = i, s != null && (S.callback = s), Ai(n, S), _o(n, g, v);
  }, enqueueForceUpdate: function(n, i) {
    n = n._reactInternals;
    var s = ca(), v = si(n), g = Pa(s, v);
    g.tag = 2, i != null && (g.callback = i), Ai(n, g), _o(n, v, s);
  } };
  function Zu(n, i, s, v, g, S, R) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(v, S, R) : i.prototype && i.prototype.isPureReactComponent ? !Bu(s, v) || !Bu(g, S) : !0;
  }
  function ol(n, i, s) {
    var v = !1, g = po, S = i.contextType;
    return typeof S == "object" && S !== null ? S = sa(S) : (g = Cr(i) ? ho : Rn.current, v = i.contextTypes, S = (v = v != null) ? nn(n, g) : po), i = new i(s, S), n.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Xl, n.stateNode = i, i._reactInternals = n, v && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = g, n.__reactInternalMemoizedMaskedChildContext = S), i;
  }
  function wc(n, i, s, v) {
    n = i.state, typeof i.componentWillReceiveProps == "function" && i.componentWillReceiveProps(s, v), typeof i.UNSAFE_componentWillReceiveProps == "function" && i.UNSAFE_componentWillReceiveProps(s, v), i.state !== n && Xl.enqueueReplaceState(i, i.state, null);
  }
  function xc(n, i, s, v) {
    var g = n.stateNode;
    g.props = s, g.state = n.memoizedState, g.refs = Ec, dd(n);
    var S = i.contextType;
    typeof S == "object" && S !== null ? g.context = sa(S) : (S = Cr(i) ? ho : Rn.current, g.context = nn(n, S)), Li(n, s, g, v), g.state = n.memoizedState, S = i.getDerivedStateFromProps, typeof S == "function" && (Xu(n, i, S, s), g.state = n.memoizedState), typeof i.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function" || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (i = g.state, typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount(), i !== g.state && Xl.enqueueReplaceState(g, g.state, null), Li(n, s, g, v), g.state = n.memoizedState), typeof g.componentDidMount == "function" && (n.flags |= 4);
  }
  var ll = Array.isArray;
  function Zl(n, i, s) {
    if (n = s.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1)
            throw Error(c(309));
          var v = s.stateNode;
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
      if (!s._owner)
        throw Error(c(290, n));
    }
    return n;
  }
  function Ju(n, i) {
    if (n.type !== "textarea")
      throw Error(c(31, Object.prototype.toString.call(i) === "[object Object]" ? "object with keys {" + Object.keys(i).join(", ") + "}" : i));
  }
  function pd(n) {
    function i(Q, B) {
      if (n) {
        var K = Q.lastEffect;
        K !== null ? (K.nextEffect = B, Q.lastEffect = B) : Q.firstEffect = Q.lastEffect = B, B.nextEffect = null, B.flags = 8;
      }
    }
    function s(Q, B) {
      if (!n)
        return null;
      for (; B !== null; )
        i(Q, B), B = B.sibling;
      return null;
    }
    function v(Q, B) {
      for (Q = /* @__PURE__ */ new Map(); B !== null; )
        B.key !== null ? Q.set(B.key, B) : Q.set(B.index, B), B = B.sibling;
      return Q;
    }
    function g(Q, B) {
      return Q = No(Q, B), Q.index = 0, Q.sibling = null, Q;
    }
    function S(Q, B, K) {
      return Q.index = K, n ? (K = Q.alternate, K !== null ? (K = K.index, K < B ? (Q.flags = 2, B) : K) : (Q.flags = 2, B)) : B;
    }
    function R(Q) {
      return n && Q.alternate === null && (Q.flags = 2), Q;
    }
    function M(Q, B, K, le) {
      return B === null || B.tag !== 6 ? (B = Bd(K, Q.mode, le), B.return = Q, B) : (B = g(B, K), B.return = Q, B);
    }
    function j(Q, B, K, le) {
      return B !== null && B.elementType === K.type ? (le = g(B, K.props), le.ref = Zl(Q, B, K), le.return = Q, le) : (le = Es(K.type, K.key, K.props, null, Q.mode, le), le.ref = Zl(Q, B, K), le.return = Q, le);
    }
    function ee(Q, B, K, le) {
      return B === null || B.tag !== 4 || B.stateNode.containerInfo !== K.containerInfo || B.stateNode.implementation !== K.implementation ? (B = Vd(K, Q.mode, le), B.return = Q, B) : (B = g(B, K.children || []), B.return = Q, B);
    }
    function Le(Q, B, K, le, ce) {
      return B === null || B.tag !== 7 ? (B = ci(K, Q.mode, le, ce), B.return = Q, B) : (B = g(B, K), B.return = Q, B);
    }
    function Et(Q, B, K) {
      if (typeof B == "string" || typeof B == "number")
        return B = Bd("" + B, Q.mode, K), B.return = Q, B;
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case Y:
            return K = Es(B.type, B.key, B.props, null, Q.mode, K), K.ref = Zl(Q, null, B), K.return = Q, K;
          case q:
            return B = Vd(B, Q.mode, K), B.return = Q, B;
        }
        if (ll(B) || Ke(B))
          return B = ci(
            B,
            Q.mode,
            K,
            null
          ), B.return = Q, B;
        Ju(Q, B);
      }
      return null;
    }
    function me(Q, B, K, le) {
      var ce = B !== null ? B.key : null;
      if (typeof K == "string" || typeof K == "number")
        return ce !== null ? null : M(Q, B, "" + K, le);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case Y:
            return K.key === ce ? K.type === ne ? Le(Q, B, K.props.children, le, ce) : j(Q, B, K, le) : null;
          case q:
            return K.key === ce ? ee(Q, B, K, le) : null;
        }
        if (ll(K) || Ke(K))
          return ce !== null ? null : Le(Q, B, K, le, null);
        Ju(Q, K);
      }
      return null;
    }
    function Je(Q, B, K, le, ce) {
      if (typeof le == "string" || typeof le == "number")
        return Q = Q.get(K) || null, M(B, Q, "" + le, ce);
      if (typeof le == "object" && le !== null) {
        switch (le.$$typeof) {
          case Y:
            return Q = Q.get(le.key === null ? K : le.key) || null, le.type === ne ? Le(B, Q, le.props.children, ce, le.key) : j(B, Q, le, ce);
          case q:
            return Q = Q.get(le.key === null ? K : le.key) || null, ee(B, Q, le, ce);
        }
        if (ll(le) || Ke(le))
          return Q = Q.get(K) || null, Le(B, Q, le, ce, null);
        Ju(B, le);
      }
      return null;
    }
    function bt(Q, B, K, le) {
      for (var ce = null, Rt = null, He = B, wt = B = 0, Lt = null; He !== null && wt < K.length; wt++) {
        He.index > wt ? (Lt = He, He = null) : Lt = He.sibling;
        var _t = me(Q, He, K[wt], le);
        if (_t === null) {
          He === null && (He = Lt);
          break;
        }
        n && He && _t.alternate === null && i(Q, He), B = S(_t, B, wt), Rt === null ? ce = _t : Rt.sibling = _t, Rt = _t, He = Lt;
      }
      if (wt === K.length)
        return s(Q, He), ce;
      if (He === null) {
        for (; wt < K.length; wt++)
          He = Et(Q, K[wt], le), He !== null && (B = S(He, B, wt), Rt === null ? ce = He : Rt.sibling = He, Rt = He);
        return ce;
      }
      for (He = v(Q, He); wt < K.length; wt++)
        Lt = Je(He, Q, wt, K[wt], le), Lt !== null && (n && Lt.alternate !== null && He.delete(Lt.key === null ? wt : Lt.key), B = S(Lt, B, wt), Rt === null ? ce = Lt : Rt.sibling = Lt, Rt = Lt);
      return n && He.forEach(function(Do) {
        return i(Q, Do);
      }), ce;
    }
    function ft(Q, B, K, le) {
      var ce = Ke(K);
      if (typeof ce != "function")
        throw Error(c(150));
      if (K = ce.call(K), K == null)
        throw Error(c(151));
      for (var Rt = ce = null, He = B, wt = B = 0, Lt = null, _t = K.next(); He !== null && !_t.done; wt++, _t = K.next()) {
        He.index > wt ? (Lt = He, He = null) : Lt = He.sibling;
        var Do = me(Q, He, _t.value, le);
        if (Do === null) {
          He === null && (He = Lt);
          break;
        }
        n && He && Do.alternate === null && i(Q, He), B = S(Do, B, wt), Rt === null ? ce = Do : Rt.sibling = Do, Rt = Do, He = Lt;
      }
      if (_t.done)
        return s(Q, He), ce;
      if (He === null) {
        for (; !_t.done; wt++, _t = K.next())
          _t = Et(Q, _t.value, le), _t !== null && (B = S(_t, B, wt), Rt === null ? ce = _t : Rt.sibling = _t, Rt = _t);
        return ce;
      }
      for (He = v(Q, He); !_t.done; wt++, _t = K.next())
        _t = Je(He, Q, wt, _t.value, le), _t !== null && (n && _t.alternate !== null && He.delete(_t.key === null ? wt : _t.key), B = S(_t, B, wt), Rt === null ? ce = _t : Rt.sibling = _t, Rt = _t);
      return n && He.forEach(function(Py) {
        return i(Q, Py);
      }), ce;
    }
    return function(Q, B, K, le) {
      var ce = typeof K == "object" && K !== null && K.type === ne && K.key === null;
      ce && (K = K.props.children);
      var Rt = typeof K == "object" && K !== null;
      if (Rt)
        switch (K.$$typeof) {
          case Y:
            e: {
              for (Rt = K.key, ce = B; ce !== null; ) {
                if (ce.key === Rt) {
                  switch (ce.tag) {
                    case 7:
                      if (K.type === ne) {
                        s(Q, ce.sibling), B = g(ce, K.props.children), B.return = Q, Q = B;
                        break e;
                      }
                      break;
                    default:
                      if (ce.elementType === K.type) {
                        s(Q, ce.sibling), B = g(ce, K.props), B.ref = Zl(Q, ce, K), B.return = Q, Q = B;
                        break e;
                      }
                  }
                  s(Q, ce);
                  break;
                } else
                  i(Q, ce);
                ce = ce.sibling;
              }
              K.type === ne ? (B = ci(K.props.children, Q.mode, le, K.key), B.return = Q, Q = B) : (le = Es(K.type, K.key, K.props, null, Q.mode, le), le.ref = Zl(Q, B, K), le.return = Q, Q = le);
            }
            return R(Q);
          case q:
            e: {
              for (ce = K.key; B !== null; ) {
                if (B.key === ce)
                  if (B.tag === 4 && B.stateNode.containerInfo === K.containerInfo && B.stateNode.implementation === K.implementation) {
                    s(Q, B.sibling), B = g(B, K.children || []), B.return = Q, Q = B;
                    break e;
                  } else {
                    s(Q, B);
                    break;
                  }
                else
                  i(Q, B);
                B = B.sibling;
              }
              B = Vd(K, Q.mode, le), B.return = Q, Q = B;
            }
            return R(Q);
        }
      if (typeof K == "string" || typeof K == "number")
        return K = "" + K, B !== null && B.tag === 6 ? (s(Q, B.sibling), B = g(B, K), B.return = Q, Q = B) : (s(Q, B), B = Bd(K, Q.mode, le), B.return = Q, Q = B), R(Q);
      if (ll(K))
        return bt(Q, B, K, le);
      if (Ke(K))
        return ft(Q, B, K, le);
      if (Rt && Ju(Q, K), typeof K == "undefined" && !ce)
        switch (Q.tag) {
          case 1:
          case 22:
          case 0:
          case 11:
          case 15:
            throw Error(c(152, $e(Q.type) || "Component"));
        }
      return s(Q, B);
    };
  }
  var es = pd(!0), hd = pd(!1), ul = {}, ri = Br(ul), ts = Br(ul), ns = Br(ul);
  function sl(n) {
    if (n === ul)
      throw Error(c(174));
    return n;
  }
  function rs(n, i) {
    switch (vt(ns, i), vt(ts, n), vt(ri, ul), n = i.nodeType, n) {
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
  function Bp(n) {
    sl(ns.current);
    var i = sl(ri.current), s = We(i, n.type);
    i !== s && (vt(ts, n), vt(ri, s));
  }
  function md(n) {
    ts.current === n && (Tt(ri), Tt(ts));
  }
  var $n = Br(0);
  function as(n) {
    for (var i = n; i !== null; ) {
      if (i.tag === 13) {
        var s = i.memoizedState;
        if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!"))
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
  var ai = null, Pi = null, ii = !1;
  function gd(n, i) {
    var s = xa(5, null, null, 0);
    s.elementType = "DELETED", s.type = "DELETED", s.stateNode = i, s.return = n, s.flags = 8, n.lastEffect !== null ? (n.lastEffect.nextEffect = s, n.lastEffect = s) : n.firstEffect = n.lastEffect = s;
  }
  function Vp(n, i) {
    switch (n.tag) {
      case 5:
        var s = n.type;
        return i = i.nodeType !== 1 || s.toLowerCase() !== i.nodeName.toLowerCase() ? null : i, i !== null ? (n.stateNode = i, !0) : !1;
      case 6:
        return i = n.pendingProps === "" || i.nodeType !== 3 ? null : i, i !== null ? (n.stateNode = i, !0) : !1;
      case 13:
        return !1;
      default:
        return !1;
    }
  }
  function So(n) {
    if (ii) {
      var i = Pi;
      if (i) {
        var s = i;
        if (!Vp(n, i)) {
          if (i = fo(s.nextSibling), !i || !Vp(n, i)) {
            n.flags = n.flags & -1025 | 2, ii = !1, ai = n;
            return;
          }
          gd(ai, s);
        }
        ai = n, Pi = fo(i.firstChild);
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
      for (i = Pi; i; )
        gd(n, i), i = fo(i.nextSibling);
    if (is(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(c(317));
      e: {
        for (n = n.nextSibling, i = 0; n; ) {
          if (n.nodeType === 8) {
            var s = n.data;
            if (s === "/$") {
              if (i === 0) {
                Pi = fo(n.nextSibling);
                break e;
              }
              i--;
            } else
              s !== "$" && s !== "$!" && s !== "$?" || i++;
          }
          n = n.nextSibling;
        }
        Pi = null;
      }
    } else
      Pi = ai ? fo(n.stateNode.nextSibling) : null;
    return !0;
  }
  function eu() {
    Pi = ai = null, ii = !1;
  }
  var cl = [];
  function Co() {
    for (var n = 0; n < cl.length; n++)
      cl[n]._workInProgressVersionPrimary = null;
    cl.length = 0;
  }
  var tu = U.ReactCurrentDispatcher, sr = U.ReactCurrentBatchConfig, nu = 0, _n = null, cr = null, fr = null, ls = !1, Eo = !1;
  function Vr() {
    throw Error(c(321));
  }
  function Ii(n, i) {
    if (i === null)
      return !1;
    for (var s = 0; s < i.length && s < n.length; s++)
      if (!ba(n[s], i[s]))
        return !1;
    return !0;
  }
  function yd(n, i, s, v, g, S) {
    if (nu = S, _n = i, i.memoizedState = null, i.updateQueue = null, i.lanes = 0, tu.current = n === null || n.memoizedState === null ? cs : my, n = s(v, g), Eo) {
      S = 0;
      do {
        if (Eo = !1, !(25 > S))
          throw Error(c(301));
        S += 1, fr = cr = null, i.updateQueue = null, tu.current = gy, n = s(v, g);
      } while (Eo);
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
    var i = qn(), s = i.queue;
    if (s === null)
      throw Error(c(311));
    s.lastRenderedReducer = n;
    var v = cr, g = v.baseQueue, S = s.pending;
    if (S !== null) {
      if (g !== null) {
        var R = g.next;
        g.next = S.next, S.next = R;
      }
      v.baseQueue = g = S, s.pending = null;
    }
    if (g !== null) {
      g = g.next, v = v.baseState;
      var M = R = S = null, j = g;
      do {
        var ee = j.lane;
        if ((nu & ee) === ee)
          M !== null && (M = M.next = { lane: 0, action: j.action, eagerReducer: j.eagerReducer, eagerState: j.eagerState, next: null }), v = j.eagerReducer === n ? j.eagerState : n(v, j.action);
        else {
          var Le = {
            lane: ee,
            action: j.action,
            eagerReducer: j.eagerReducer,
            eagerState: j.eagerState,
            next: null
          };
          M === null ? (R = M = Le, S = v) : M = M.next = Le, _n.lanes |= ee, vl |= ee;
        }
        j = j.next;
      } while (j !== null && j !== g);
      M === null ? S = v : M.next = R, ba(v, i.memoizedState) || (Ea = !0), i.memoizedState = v, i.baseState = S, i.baseQueue = M, s.lastRenderedState = v;
    }
    return [i.memoizedState, s.dispatch];
  }
  function fl(n) {
    var i = qn(), s = i.queue;
    if (s === null)
      throw Error(c(311));
    s.lastRenderedReducer = n;
    var v = s.dispatch, g = s.pending, S = i.memoizedState;
    if (g !== null) {
      s.pending = null;
      var R = g = g.next;
      do
        S = n(S, R.action), R = R.next;
      while (R !== g);
      ba(S, i.memoizedState) || (Ea = !0), i.memoizedState = S, i.baseQueue === null && (i.baseState = S), s.lastRenderedState = S;
    }
    return [S, v];
  }
  function us(n, i, s) {
    var v = i._getVersion;
    v = v(i._source);
    var g = i._workInProgressVersionPrimary;
    if (g !== null ? n = g === v : (n = n.mutableReadLanes, (n = (nu & n) === n) && (i._workInProgressVersionPrimary = v, cl.push(i))), n)
      return s(i._source);
    throw cl.push(i), Error(c(350));
  }
  function bd(n, i, s, v) {
    var g = Wr;
    if (g === null)
      throw Error(c(349));
    var S = i._getVersion, R = S(i._source), M = tu.current, j = M.useState(function() {
      return us(g, i, s);
    }), ee = j[1], Le = j[0];
    j = fr;
    var Et = n.memoizedState, me = Et.refs, Je = me.getSnapshot, bt = Et.source;
    Et = Et.subscribe;
    var ft = _n;
    return n.memoizedState = { refs: me, source: i, subscribe: v }, M.useEffect(function() {
      me.getSnapshot = s, me.setSnapshot = ee;
      var Q = S(i._source);
      if (!ba(R, Q)) {
        Q = s(i._source), ba(Le, Q) || (ee(Q), Q = si(ft), g.mutableReadLanes |= Q & g.pendingLanes), Q = g.mutableReadLanes, g.entangledLanes |= Q;
        for (var B = g.entanglements, K = Q; 0 < K; ) {
          var le = 31 - oo(K), ce = 1 << le;
          B[le] |= Q, K &= ~ce;
        }
      }
    }, [s, i, v]), M.useEffect(function() {
      return v(i._source, function() {
        var Q = me.getSnapshot, B = me.setSnapshot;
        try {
          B(Q(i._source));
          var K = si(ft);
          g.mutableReadLanes |= K & g.pendingLanes;
        } catch (le) {
          B(function() {
            throw le;
          });
        }
      });
    }, [i, v]), ba(Je, s) && ba(bt, i) && ba(Et, v) || (n = { pending: null, dispatch: null, lastRenderedReducer: Ft, lastRenderedState: Le }, n.dispatch = ee = wd.bind(null, _n, n), j.queue = n, j.baseQueue = null, Le = us(g, i, s), j.memoizedState = j.baseState = Le), Le;
  }
  function Sd(n, i, s) {
    var v = qn();
    return bd(v, n, i, s);
  }
  function ru(n) {
    var i = ue();
    return typeof n == "function" && (n = n()), i.memoizedState = i.baseState = n, n = i.queue = { pending: null, dispatch: null, lastRenderedReducer: Ft, lastRenderedState: n }, n = n.dispatch = wd.bind(null, _n, n), [i.memoizedState, n];
  }
  function au(n, i, s, v) {
    return n = { tag: n, create: i, destroy: s, deps: v, next: null }, i = _n.updateQueue, i === null ? (i = { lastEffect: null }, _n.updateQueue = i, i.lastEffect = n.next = n) : (s = i.lastEffect, s === null ? i.lastEffect = n.next = n : (v = s.next, s.next = n, n.next = v, i.lastEffect = n)), n;
  }
  function Cd(n) {
    var i = ue();
    return n = { current: n }, i.memoizedState = n;
  }
  function $i() {
    return qn().memoizedState;
  }
  function iu(n, i, s, v) {
    var g = ue();
    _n.flags |= n, g.memoizedState = au(1 | i, s, void 0, v === void 0 ? null : v);
  }
  function wo(n, i, s, v) {
    var g = qn();
    v = v === void 0 ? null : v;
    var S = void 0;
    if (cr !== null) {
      var R = cr.memoizedState;
      if (S = R.destroy, v !== null && Ii(v, R.deps)) {
        au(i, s, S, v);
        return;
      }
    }
    _n.flags |= n, g.memoizedState = au(1 | i, s, S, v);
  }
  function Tc(n, i) {
    return iu(516, 4, n, i);
  }
  function ss(n, i) {
    return wo(516, 4, n, i);
  }
  function Ed(n, i) {
    return wo(4, 2, n, i);
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
  function Ia(n, i, s) {
    return s = s != null ? s.concat([n]) : null, wo(4, 2, Rc.bind(null, i, n), s);
  }
  function kn() {
  }
  function hy(n, i) {
    var s = qn();
    i = i === void 0 ? null : i;
    var v = s.memoizedState;
    return v !== null && i !== null && Ii(i, v[1]) ? v[0] : (s.memoizedState = [n, i], n);
  }
  function hn(n, i) {
    var s = qn();
    i = i === void 0 ? null : i;
    var v = s.memoizedState;
    return v !== null && i !== null && Ii(i, v[1]) ? v[0] : (n = n(), s.memoizedState = [n, i], n);
  }
  function ou(n, i) {
    var s = Ql();
    rl(98 > s ? 98 : s, function() {
      n(!0);
    }), rl(97 < s ? 97 : s, function() {
      var v = sr.transition;
      sr.transition = 1;
      try {
        n(!1), i();
      } finally {
        sr.transition = v;
      }
    });
  }
  function wd(n, i, s) {
    var v = ca(), g = si(n), S = { lane: g, action: s, eagerReducer: null, eagerState: null, next: null }, R = i.pending;
    if (R === null ? S.next = S : (S.next = R.next, R.next = S), i.pending = S, R = n.alternate, n === _n || R !== null && R === _n)
      Eo = ls = !0;
    else {
      if (n.lanes === 0 && (R === null || R.lanes === 0) && (R = i.lastRenderedReducer, R !== null))
        try {
          var M = i.lastRenderedState, j = R(M, s);
          if (S.eagerReducer = R, S.eagerState = j, ba(j, M))
            return;
        } catch (ee) {
        } finally {
        }
      _o(n, g, v);
    }
  }
  var _c = { readContext: sa, useCallback: Vr, useContext: Vr, useEffect: Vr, useImperativeHandle: Vr, useLayoutEffect: Vr, useMemo: Vr, useReducer: Vr, useRef: Vr, useState: Vr, useDebugValue: Vr, useDeferredValue: Vr, useTransition: Vr, useMutableSource: Vr, useOpaqueIdentifier: Vr, unstable_isNewReconciler: !1 }, cs = { readContext: sa, useCallback: function(n, i) {
    return ue().memoizedState = [n, i === void 0 ? null : i], n;
  }, useContext: sa, useEffect: Tc, useImperativeHandle: function(n, i, s) {
    return s = s != null ? s.concat([n]) : null, iu(4, 2, Rc.bind(
      null,
      i,
      n
    ), s);
  }, useLayoutEffect: function(n, i) {
    return iu(4, 2, n, i);
  }, useMemo: function(n, i) {
    var s = ue();
    return i = i === void 0 ? null : i, n = n(), s.memoizedState = [n, i], n;
  }, useReducer: function(n, i, s) {
    var v = ue();
    return i = s !== void 0 ? s(i) : i, v.memoizedState = v.baseState = i, n = v.queue = { pending: null, dispatch: null, lastRenderedReducer: n, lastRenderedState: i }, n = n.dispatch = wd.bind(null, _n, n), [v.memoizedState, n];
  }, useRef: Cd, useState: ru, useDebugValue: kn, useDeferredValue: function(n) {
    var i = ru(n), s = i[0], v = i[1];
    return Tc(function() {
      var g = sr.transition;
      sr.transition = 1;
      try {
        v(n);
      } finally {
        sr.transition = g;
      }
    }, [n]), s;
  }, useTransition: function() {
    var n = ru(!1), i = n[0];
    return n = ou.bind(null, n[1]), Cd(n), [n, i];
  }, useMutableSource: function(n, i, s) {
    var v = ue();
    return v.memoizedState = { refs: { getSnapshot: i, setSnapshot: null }, source: n, subscribe: s }, bd(v, n, i, s);
  }, useOpaqueIdentifier: function() {
    if (ii) {
      var n = !1, i = hc(function() {
        throw n || (n = !0, s("r:" + (vo++).toString(36))), Error(c(355));
      }), s = ru(i)[1];
      return !(_n.mode & 2) && (_n.flags |= 516, au(
        5,
        function() {
          s("r:" + (vo++).toString(36));
        },
        void 0,
        null
      )), i;
    }
    return i = "r:" + (vo++).toString(36), ru(i), i;
  }, unstable_isNewReconciler: !1 }, my = { readContext: sa, useCallback: hy, useContext: sa, useEffect: ss, useImperativeHandle: Ia, useLayoutEffect: Ed, useMemo: hn, useReducer: zi, useRef: $i, useState: function() {
    return zi(Ft);
  }, useDebugValue: kn, useDeferredValue: function(n) {
    var i = zi(Ft), s = i[0], v = i[1];
    return ss(function() {
      var g = sr.transition;
      sr.transition = 1;
      try {
        v(n);
      } finally {
        sr.transition = g;
      }
    }, [n]), s;
  }, useTransition: function() {
    var n = zi(Ft)[0];
    return [
      $i().current,
      n
    ];
  }, useMutableSource: Sd, useOpaqueIdentifier: function() {
    return zi(Ft)[0];
  }, unstable_isNewReconciler: !1 }, gy = { readContext: sa, useCallback: hy, useContext: sa, useEffect: ss, useImperativeHandle: Ia, useLayoutEffect: Ed, useMemo: hn, useReducer: fl, useRef: $i, useState: function() {
    return fl(Ft);
  }, useDebugValue: kn, useDeferredValue: function(n) {
    var i = fl(Ft), s = i[0], v = i[1];
    return ss(function() {
      var g = sr.transition;
      sr.transition = 1;
      try {
        v(n);
      } finally {
        sr.transition = g;
      }
    }, [n]), s;
  }, useTransition: function() {
    var n = fl(Ft)[0];
    return [
      $i().current,
      n
    ];
  }, useMutableSource: Sd, useOpaqueIdentifier: function() {
    return fl(Ft)[0];
  }, unstable_isNewReconciler: !1 }, yy = U.ReactCurrentOwner, Ea = !1;
  function Zr(n, i, s, v) {
    i.child = n === null ? hd(i, null, s, v) : es(i, n.child, s, v);
  }
  function xd(n, i, s, v, g) {
    s = s.render;
    var S = i.ref;
    return il(i, g), v = yd(n, i, s, v, S, g), n !== null && !Ea ? (i.updateQueue = n.updateQueue, i.flags &= -517, n.lanes &= ~g, Ui(n, i, g)) : (i.flags |= 1, Zr(n, i, v, g), i.child);
  }
  function Td(n, i, s, v, g, S) {
    if (n === null) {
      var R = s.type;
      return typeof R == "function" && !Ic(R) && R.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (i.tag = 15, i.type = R, Wp(n, i, R, v, g, S)) : (n = Es(s.type, null, v, i, i.mode, S), n.ref = i.ref, n.return = i, i.child = n);
    }
    return R = n.child, !(g & S) && (g = R.memoizedProps, s = s.compare, s = s !== null ? s : Bu, s(g, v) && n.ref === i.ref) ? Ui(n, i, S) : (i.flags |= 1, n = No(R, v), n.ref = i.ref, n.return = i, i.child = n);
  }
  function Wp(n, i, s, v, g, S) {
    if (n !== null && Bu(n.memoizedProps, v) && n.ref === i.ref)
      if (Ea = !1, (S & g) !== 0)
        n.flags & 16384 && (Ea = !0);
      else
        return i.lanes = n.lanes, Ui(n, i, S);
    return Rd(n, i, s, v, S);
  }
  function lu(n, i, s) {
    var v = i.pendingProps, g = v.children, S = n !== null ? n.memoizedState : null;
    if (v.mode === "hidden" || v.mode === "unstable-defer-without-hiding")
      if (!(i.mode & 4))
        i.memoizedState = { baseLanes: 0 }, Lc(i, s);
      else if (s & 1073741824)
        i.memoizedState = { baseLanes: 0 }, Lc(i, S !== null ? S.baseLanes : s);
      else
        return n = S !== null ? S.baseLanes | s : s, i.lanes = i.childLanes = 1073741824, i.memoizedState = { baseLanes: n }, Lc(i, n), null;
    else
      S !== null ? (v = S.baseLanes | s, i.memoizedState = null) : v = s, Lc(i, v);
    return Zr(n, i, g, s), i.child;
  }
  function Kp(n, i) {
    var s = i.ref;
    (n === null && s !== null || n !== null && n.ref !== s) && (i.flags |= 128);
  }
  function Rd(n, i, s, v, g) {
    var S = Cr(s) ? ho : Rn.current;
    return S = nn(i, S), il(i, g), s = yd(n, i, s, v, S, g), n !== null && !Ea ? (i.updateQueue = n.updateQueue, i.flags &= -517, n.lanes &= ~g, Ui(n, i, g)) : (i.flags |= 1, Zr(n, i, s, g), i.child);
  }
  function Gp(n, i, s, v, g) {
    if (Cr(s)) {
      var S = !0;
      Sa(i);
    } else
      S = !1;
    if (il(i, g), i.stateNode === null)
      n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2), ol(i, s, v), xc(i, s, v, g), v = !0;
    else if (n === null) {
      var R = i.stateNode, M = i.memoizedProps;
      R.props = M;
      var j = R.context, ee = s.contextType;
      typeof ee == "object" && ee !== null ? ee = sa(ee) : (ee = Cr(s) ? ho : Rn.current, ee = nn(i, ee));
      var Le = s.getDerivedStateFromProps, Et = typeof Le == "function" || typeof R.getSnapshotBeforeUpdate == "function";
      Et || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (M !== v || j !== ee) && wc(i, R, v, ee), Ca = !1;
      var me = i.memoizedState;
      R.state = me, Li(i, v, R, g), j = i.memoizedState, M !== v || me !== j || Sr.current || Ca ? (typeof Le == "function" && (Xu(i, s, Le, v), j = i.memoizedState), (M = Ca || Zu(i, s, M, v, me, j, ee)) ? (Et || typeof R.UNSAFE_componentWillMount != "function" && typeof R.componentWillMount != "function" || (typeof R.componentWillMount == "function" && R.componentWillMount(), typeof R.UNSAFE_componentWillMount == "function" && R.UNSAFE_componentWillMount()), typeof R.componentDidMount == "function" && (i.flags |= 4)) : (typeof R.componentDidMount == "function" && (i.flags |= 4), i.memoizedProps = v, i.memoizedState = j), R.props = v, R.state = j, R.context = ee, v = M) : (typeof R.componentDidMount == "function" && (i.flags |= 4), v = !1);
    } else {
      R = i.stateNode, Hp(n, i), M = i.memoizedProps, ee = i.type === i.elementType ? M : ur(i.type, M), R.props = ee, Et = i.pendingProps, me = R.context, j = s.contextType, typeof j == "object" && j !== null ? j = sa(j) : (j = Cr(s) ? ho : Rn.current, j = nn(i, j));
      var Je = s.getDerivedStateFromProps;
      (Le = typeof Je == "function" || typeof R.getSnapshotBeforeUpdate == "function") || typeof R.UNSAFE_componentWillReceiveProps != "function" && typeof R.componentWillReceiveProps != "function" || (M !== Et || me !== j) && wc(i, R, v, j), Ca = !1, me = i.memoizedState, R.state = me, Li(i, v, R, g);
      var bt = i.memoizedState;
      M !== Et || me !== bt || Sr.current || Ca ? (typeof Je == "function" && (Xu(i, s, Je, v), bt = i.memoizedState), (ee = Ca || Zu(i, s, ee, v, me, bt, j)) ? (Le || typeof R.UNSAFE_componentWillUpdate != "function" && typeof R.componentWillUpdate != "function" || (typeof R.componentWillUpdate == "function" && R.componentWillUpdate(
        v,
        bt,
        j
      ), typeof R.UNSAFE_componentWillUpdate == "function" && R.UNSAFE_componentWillUpdate(v, bt, j)), typeof R.componentDidUpdate == "function" && (i.flags |= 4), typeof R.getSnapshotBeforeUpdate == "function" && (i.flags |= 256)) : (typeof R.componentDidUpdate != "function" || M === n.memoizedProps && me === n.memoizedState || (i.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && me === n.memoizedState || (i.flags |= 256), i.memoizedProps = v, i.memoizedState = bt), R.props = v, R.state = bt, R.context = j, v = ee) : (typeof R.componentDidUpdate != "function" || M === n.memoizedProps && me === n.memoizedState || (i.flags |= 4), typeof R.getSnapshotBeforeUpdate != "function" || M === n.memoizedProps && me === n.memoizedState || (i.flags |= 256), v = !1);
    }
    return _d(n, i, s, v, S, g);
  }
  function _d(n, i, s, v, g, S) {
    Kp(n, i);
    var R = (i.flags & 64) !== 0;
    if (!v && !R)
      return g && Ip(i, s, !1), Ui(n, i, S);
    v = i.stateNode, yy.current = i;
    var M = R && typeof s.getDerivedStateFromError != "function" ? null : v.render();
    return i.flags |= 1, n !== null && R ? (i.child = es(i, n.child, null, S), i.child = es(i, null, M, S)) : Zr(n, i, M, S), i.memoizedState = v.state, g && Ip(i, s, !0), i.child;
  }
  function qp(n) {
    var i = n.stateNode;
    i.pendingContext ? ql(n, i.pendingContext, i.pendingContext !== i.context) : i.context && ql(n, i.context, !1), rs(n, i.containerInfo);
  }
  var dr = { dehydrated: null, retryLane: 0 };
  function xo(n, i, s) {
    var v = i.pendingProps, g = $n.current, S = !1, R;
    return (R = (i.flags & 64) !== 0) || (R = n !== null && n.memoizedState === null ? !1 : (g & 2) !== 0), R ? (S = !0, i.flags &= -65) : n !== null && n.memoizedState === null || v.fallback === void 0 || v.unstable_avoidThisFallback === !0 || (g |= 1), vt($n, g & 1), n === null ? (v.fallback !== void 0 && So(i), n = v.children, g = v.fallback, S ? (n = Yp(i, n, g, s), i.child.memoizedState = { baseLanes: s }, i.memoizedState = dr, n) : typeof v.unstable_expectedLoadTime == "number" ? (n = Yp(i, n, g, s), i.child.memoizedState = { baseLanes: s }, i.memoizedState = dr, i.lanes = 33554432, n) : (s = yl({ mode: "visible", children: n }, i.mode, s, null), s.return = i, i.child = s)) : n.memoizedState !== null ? S ? (v = To(n, i, v.children, v.fallback, s), S = i.child, g = n.child.memoizedState, S.memoizedState = g === null ? { baseLanes: s } : { baseLanes: g.baseLanes | s }, S.childLanes = n.childLanes & ~s, i.memoizedState = dr, v) : (s = wr(n, i, v.children, s), i.memoizedState = null, s) : S ? (v = To(n, i, v.children, v.fallback, s), S = i.child, g = n.child.memoizedState, S.memoizedState = g === null ? { baseLanes: s } : { baseLanes: g.baseLanes | s }, S.childLanes = n.childLanes & ~s, i.memoizedState = dr, v) : (s = wr(n, i, v.children, s), i.memoizedState = null, s);
  }
  function Yp(n, i, s, v) {
    var g = n.mode, S = n.child;
    return i = { mode: "hidden", children: i }, !(g & 2) && S !== null ? (S.childLanes = 0, S.pendingProps = i) : S = yl(i, g, 0, null), s = ci(s, g, v, null), S.return = n, s.return = n, S.sibling = s, n.child = S, s;
  }
  function wr(n, i, s, v) {
    var g = n.child;
    return n = g.sibling, s = No(g, { mode: "visible", children: s }), !(i.mode & 2) && (s.lanes = v), s.return = i, s.sibling = null, n !== null && (n.nextEffect = null, n.flags = 8, i.firstEffect = i.lastEffect = n), i.child = s;
  }
  function To(n, i, s, v, g) {
    var S = i.mode, R = n.child;
    n = R.sibling;
    var M = { mode: "hidden", children: s };
    return !(S & 2) && i.child !== R ? (s = i.child, s.childLanes = 0, s.pendingProps = M, R = s.lastEffect, R !== null ? (i.firstEffect = s.firstEffect, i.lastEffect = R, R.nextEffect = null) : i.firstEffect = i.lastEffect = null) : s = No(R, M), n !== null ? v = No(n, v) : (v = ci(v, S, g, null), v.flags |= 2), v.return = i, s.return = i, s.sibling = v, i.child = s, v;
  }
  function tn(n, i) {
    n.lanes |= i;
    var s = n.alternate;
    s !== null && (s.lanes |= i), fd(n.return, i);
  }
  function uu(n, i, s, v, g, S) {
    var R = n.memoizedState;
    R === null ? n.memoizedState = { isBackwards: i, rendering: null, renderingStartTime: 0, last: v, tail: s, tailMode: g, lastEffect: S } : (R.isBackwards = i, R.rendering = null, R.renderingStartTime = 0, R.last = v, R.tail = s, R.tailMode = g, R.lastEffect = S);
  }
  function by(n, i, s) {
    var v = i.pendingProps, g = v.revealOrder, S = v.tail;
    if (Zr(n, i, v.children, s), v = $n.current, v & 2)
      v = v & 1 | 2, i.flags |= 64;
    else {
      if (n !== null && n.flags & 64)
        e:
          for (n = i.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && tn(n, s);
            else if (n.tag === 19)
              tn(n, s);
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
          for (s = i.child, g = null; s !== null; )
            n = s.alternate, n !== null && as(n) === null && (g = s), s = s.sibling;
          s = g, s === null ? (g = i.child, i.child = null) : (g = s.sibling, s.sibling = null), uu(i, !1, g, s, S, i.lastEffect);
          break;
        case "backwards":
          for (s = null, g = i.child, i.child = null; g !== null; ) {
            if (n = g.alternate, n !== null && as(n) === null) {
              i.child = g;
              break;
            }
            n = g.sibling, g.sibling = s, s = g, g = n;
          }
          uu(i, !0, s, null, S, i.lastEffect);
          break;
        case "together":
          uu(i, !1, null, null, void 0, i.lastEffect);
          break;
        default:
          i.memoizedState = null;
      }
    return i.child;
  }
  function Ui(n, i, s) {
    if (n !== null && (i.dependencies = n.dependencies), vl |= i.lanes, s & i.childLanes) {
      if (n !== null && i.child !== n.child)
        throw Error(c(153));
      if (i.child !== null) {
        for (n = i.child, s = No(n, n.pendingProps), i.child = s, s.return = i; n.sibling !== null; )
          n = n.sibling, s = s.sibling = No(n, n.pendingProps), s.return = i;
        s.sibling = null;
      }
      return i.child;
    }
    return null;
  }
  var kc, su, Qp, kd;
  kc = function(n, i) {
    for (var s = i.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6)
        n.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === i)
        break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === i)
          return;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }, su = function() {
  }, Qp = function(n, i, s, v) {
    var g = n.memoizedProps;
    if (g !== v) {
      n = i.stateNode, sl(ri.current);
      var S = null;
      switch (s) {
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
      Bt(s, v);
      var R;
      s = null;
      for (ee in g)
        if (!v.hasOwnProperty(ee) && g.hasOwnProperty(ee) && g[ee] != null)
          if (ee === "style") {
            var M = g[ee];
            for (R in M)
              M.hasOwnProperty(R) && (s || (s = {}), s[R] = "");
          } else
            ee !== "dangerouslySetInnerHTML" && ee !== "children" && ee !== "suppressContentEditableWarning" && ee !== "suppressHydrationWarning" && ee !== "autoFocus" && (m.hasOwnProperty(ee) ? S || (S = []) : (S = S || []).push(ee, null));
      for (ee in v) {
        var j = v[ee];
        if (M = g != null ? g[ee] : void 0, v.hasOwnProperty(ee) && j !== M && (j != null || M != null))
          if (ee === "style")
            if (M) {
              for (R in M)
                !M.hasOwnProperty(R) || j && j.hasOwnProperty(R) || (s || (s = {}), s[R] = "");
              for (R in j)
                j.hasOwnProperty(R) && M[R] !== j[R] && (s || (s = {}), s[R] = j[R]);
            } else
              s || (S || (S = []), S.push(ee, s)), s = j;
          else
            ee === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, M = M ? M.__html : void 0, j != null && M !== j && (S = S || []).push(ee, j)) : ee === "children" ? typeof j != "string" && typeof j != "number" || (S = S || []).push(ee, "" + j) : ee !== "suppressContentEditableWarning" && ee !== "suppressHydrationWarning" && (m.hasOwnProperty(ee) ? (j != null && ee === "onScroll" && yn("scroll", n), S || M === j || (S = [])) : typeof j == "object" && j !== null && j.$$typeof === Ae ? j.toString() : (S = S || []).push(ee, j));
      }
      s && (S = S || []).push(
        "style",
        s
      );
      var ee = S;
      (i.updateQueue = ee) && (i.flags |= 4);
    }
  }, kd = function(n, i, s, v) {
    s !== v && (i.flags |= 4);
  };
  function fs(n, i) {
    if (!ii)
      switch (n.tailMode) {
        case "hidden":
          i = n.tail;
          for (var s = null; i !== null; )
            i.alternate !== null && (s = i), i = i.sibling;
          s === null ? n.tail = null : s.sibling = null;
          break;
        case "collapsed":
          s = n.tail;
          for (var v = null; s !== null; )
            s.alternate !== null && (v = s), s = s.sibling;
          v === null ? i || n.tail === null ? n.tail = null : n.tail.sibling = null : v.sibling = null;
      }
  }
  function Sy(n, i, s) {
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
        return Jl(), Tt(Sr), Tt(Rn), Co(), v = i.stateNode, v.pendingContext && (v.context = v.pendingContext, v.pendingContext = null), (n === null || n.child === null) && (os(i) ? i.flags |= 4 : v.hydrate || (i.flags |= 256)), su(i), null;
      case 5:
        md(i);
        var g = sl(ns.current);
        if (s = i.type, n !== null && i.stateNode != null)
          Qp(n, i, s, v, g), n.ref !== i.ref && (i.flags |= 128);
        else {
          if (!v) {
            if (i.stateNode === null)
              throw Error(c(166));
            return null;
          }
          if (n = sl(ri.current), os(i)) {
            v = i.stateNode, s = i.type;
            var S = i.memoizedProps;
            switch (v[Ja] = i, v[mc] = S, s) {
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
            Bt(s, S), n = null;
            for (var R in S)
              S.hasOwnProperty(R) && (g = S[R], R === "children" ? typeof g == "string" ? v.textContent !== g && (n = ["children", g]) : typeof g == "number" && v.textContent !== "" + g && (n = ["children", "" + g]) : m.hasOwnProperty(R) && g != null && R === "onScroll" && yn("scroll", v));
            switch (s) {
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
            switch (R = g.nodeType === 9 ? g : g.ownerDocument, n === ye.html && (n = Ne(s)), n === ye.html ? s === "script" ? (n = R.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof v.is == "string" ? n = R.createElement(s, { is: v.is }) : (n = R.createElement(s), s === "select" && (R = n, v.multiple ? R.multiple = !0 : v.size && (R.size = v.size))) : n = R.createElementNS(n, s), n[Ja] = i, n[mc] = v, kc(n, i, !1, !1), i.stateNode = n, R = dn(s, v), s) {
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
            Bt(s, g);
            var M = g;
            for (S in M)
              if (M.hasOwnProperty(S)) {
                var j = M[S];
                S === "style" ? jt(n, j) : S === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && Mt(n, j)) : S === "children" ? typeof j == "string" ? (s !== "textarea" || j !== "") && rt(n, j) : typeof j == "number" && rt(n, "" + j) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (m.hasOwnProperty(S) ? j != null && S === "onScroll" && yn("scroll", n) : j != null && I(n, S, j, R));
              }
            switch (s) {
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
            Kl(s, v) && (i.flags |= 4);
          }
          i.ref !== null && (i.flags |= 128);
        }
        return null;
      case 6:
        if (n && i.stateNode != null)
          kd(n, i, n.memoizedProps, v);
        else {
          if (typeof v != "string" && i.stateNode === null)
            throw Error(c(166));
          s = sl(ns.current), sl(ri.current), os(i) ? (v = i.stateNode, s = i.memoizedProps, v[Ja] = i, v.nodeValue !== s && (i.flags |= 4)) : (v = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(v), v[Ja] = i, i.stateNode = v);
        }
        return null;
      case 13:
        return Tt($n), v = i.memoizedState, i.flags & 64 ? (i.lanes = s, i) : (v = v !== null, s = !1, n === null ? i.memoizedProps.fallback !== void 0 && os(i) : s = n.memoizedState !== null, v && !s && i.mode & 2 && (n === null && i.memoizedProps.unstable_avoidThisFallback !== !0 || $n.current & 1 ? vr === 0 && (vr = 3) : ((vr === 0 || vr === 3) && (vr = 4), Wr === null || !(vl & 134217727) && !(li & 134217727) || vu(Wr, xr))), (v || s) && (i.flags |= 4), null);
      case 4:
        return Jl(), su(i), n === null && ed(i.stateNode.containerInfo), null;
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
                  for (i.flags |= 64, fs(v, !1), S = R.updateQueue, S !== null && (i.updateQueue = S, i.flags |= 4), v.lastEffect === null && (i.firstEffect = null), i.lastEffect = v.lastEffect, v = s, s = i.child; s !== null; )
                    S = s, n = v, S.flags &= 2, S.nextEffect = null, S.firstEffect = null, S.lastEffect = null, R = S.alternate, R === null ? (S.childLanes = 0, S.lanes = n, S.child = null, S.memoizedProps = null, S.memoizedState = null, S.updateQueue = null, S.dependencies = null, S.stateNode = null) : (S.childLanes = R.childLanes, S.lanes = R.lanes, S.child = R.child, S.memoizedProps = R.memoizedProps, S.memoizedState = R.memoizedState, S.updateQueue = R.updateQueue, S.type = R.type, n = R.dependencies, S.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), s = s.sibling;
                  return vt($n, $n.current & 1 | 2), i.child;
                }
                n = n.sibling;
              }
            v.tail !== null && Er() > pl && (i.flags |= 64, S = !0, fs(v, !1), i.lanes = 33554432);
          }
        else {
          if (!S)
            if (n = as(R), n !== null) {
              if (i.flags |= 64, S = !0, s = n.updateQueue, s !== null && (i.updateQueue = s, i.flags |= 4), fs(v, !0), v.tail === null && v.tailMode === "hidden" && !R.alternate && !ii)
                return i = i.lastEffect = v.lastEffect, i !== null && (i.nextEffect = null), null;
            } else
              2 * Er() - v.renderingStartTime > pl && s !== 1073741824 && (i.flags |= 64, S = !0, fs(v, !1), i.lanes = 33554432);
          v.isBackwards ? (R.sibling = i.child, i.child = R) : (s = v.last, s !== null ? s.sibling = R : i.child = R, v.last = R);
        }
        return v.tail !== null ? (s = v.tail, v.rendering = s, v.tail = s.sibling, v.lastEffect = i.lastEffect, v.renderingStartTime = Er(), s.sibling = null, i = $n.current, vt($n, S ? i & 1 | 2 : i & 1), s) : null;
      case 23:
      case 24:
        return jd(), n !== null && n.memoizedState !== null != (i.memoizedState !== null) && v.mode !== "unstable-defer-without-hiding" && (i.flags |= 4), null;
    }
    throw Error(c(156, i.tag));
  }
  function Xp(n) {
    switch (n.tag) {
      case 1:
        Cr(n.type) && ei();
        var i = n.flags;
        return i & 4096 ? (n.flags = i & -4097 | 64, n) : null;
      case 3:
        if (Jl(), Tt(Sr), Tt(Rn), Co(), i = n.flags, i & 64)
          throw Error(c(285));
        return n.flags = i & -4097 | 64, n;
      case 5:
        return md(n), null;
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
        return jd(), null;
      default:
        return null;
    }
  }
  function Md(n, i) {
    try {
      var s = "", v = i;
      do
        s += Nt(v), v = v.return;
      while (v);
      var g = s;
    } catch (S) {
      g = `
Error generating stack: ` + S.message + `
` + S.stack;
    }
    return { value: n, source: i, stack: g };
  }
  function Od(n, i) {
    try {
      console.error(i.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var Zp = typeof WeakMap == "function" ? WeakMap : Map;
  function Jp(n, i, s) {
    s = Pa(-1, s), s.tag = 3, s.payload = { element: null };
    var v = i.value;
    return s.callback = function() {
      gs || (gs = !0, Pd = v), Od(n, i);
    }, s;
  }
  function eh(n, i, s) {
    s = Pa(-1, s), s.tag = 3;
    var v = n.type.getDerivedStateFromError;
    if (typeof v == "function") {
      var g = i.value;
      s.payload = function() {
        return Od(n, i), v(g);
      };
    }
    var S = n.stateNode;
    return S !== null && typeof S.componentDidCatch == "function" && (s.callback = function() {
      typeof v != "function" && (ui === null ? ui = /* @__PURE__ */ new Set([this]) : ui.add(this), Od(n, i));
      var R = i.stack;
      this.componentDidCatch(i.value, { componentStack: R !== null ? R : "" });
    }), s;
  }
  var Cy = typeof WeakSet == "function" ? WeakSet : Set;
  function th(n) {
    var i = n.ref;
    if (i !== null)
      if (typeof i == "function")
        try {
          i(null);
        } catch (s) {
          Oo(n, s);
        }
      else
        i.current = null;
  }
  function Ey(n, i) {
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        return;
      case 1:
        if (i.flags & 256 && n !== null) {
          var s = n.memoizedProps, v = n.memoizedState;
          n = i.stateNode, i = n.getSnapshotBeforeUpdate(i.elementType === i.type ? s : ur(i.type, s), v), n.__reactInternalSnapshotBeforeUpdate = i;
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
  function Nd(n, i, s) {
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
      case 22:
        if (i = s.updateQueue, i = i !== null ? i.lastEffect : null, i !== null) {
          n = i = i.next;
          do {
            if ((n.tag & 3) === 3) {
              var v = n.create;
              n.destroy = v();
            }
            n = n.next;
          } while (n !== i);
        }
        if (i = s.updateQueue, i = i !== null ? i.lastEffect : null, i !== null) {
          n = i = i.next;
          do {
            var g = n;
            v = g.next, g = g.tag, g & 4 && g & 1 && (Fd(s, n), vh(s, n)), n = v;
          } while (n !== i);
        }
        return;
      case 1:
        n = s.stateNode, s.flags & 4 && (i === null ? n.componentDidMount() : (v = s.elementType === s.type ? i.memoizedProps : ur(s.type, i.memoizedProps), n.componentDidUpdate(
          v,
          i.memoizedState,
          n.__reactInternalSnapshotBeforeUpdate
        ))), i = s.updateQueue, i !== null && vd(s, i, n);
        return;
      case 3:
        if (i = s.updateQueue, i !== null) {
          if (n = null, s.child !== null)
            switch (s.child.tag) {
              case 5:
                n = s.child.stateNode;
                break;
              case 1:
                n = s.child.stateNode;
            }
          vd(s, i, n);
        }
        return;
      case 5:
        n = s.stateNode, i === null && s.flags & 4 && Kl(s.type, s.memoizedProps) && n.focus();
        return;
      case 6:
        return;
      case 4:
        return;
      case 12:
        return;
      case 13:
        s.memoizedState === null && (s = s.alternate, s !== null && (s = s.memoizedState, s !== null && (s = s.dehydrated, s !== null && tr(s))));
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
    for (var s = n; ; ) {
      if (s.tag === 5) {
        var v = s.stateNode;
        if (i)
          v = v.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none";
        else {
          v = s.stateNode;
          var g = s.memoizedProps.style;
          g = g != null && g.hasOwnProperty("display") ? g.display : null, v.style.display = Ot("display", g);
        }
      } else if (s.tag === 6)
        s.stateNode.nodeValue = i ? "" : s.memoizedProps;
      else if ((s.tag !== 23 && s.tag !== 24 || s.memoizedState === null || s === n) && s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === n)
        break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === n)
          return;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }
  function nh(n, i) {
    if (nl && typeof nl.onCommitFiberUnmount == "function")
      try {
        nl.onCommitFiberUnmount(ad, i);
      } catch (S) {
      }
    switch (i.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        if (n = i.updateQueue, n !== null && (n = n.lastEffect, n !== null)) {
          var s = n = n.next;
          do {
            var v = s, g = v.destroy;
            if (v = v.tag, g !== void 0)
              if (v & 4)
                Fd(i, s);
              else {
                v = i;
                try {
                  g();
                } catch (S) {
                  Oo(v, S);
                }
              }
            s = s.next;
          } while (s !== n);
        }
        break;
      case 1:
        if (th(i), n = i.stateNode, typeof n.componentWillUnmount == "function")
          try {
            n.props = i.memoizedProps, n.state = i.memoizedState, n.componentWillUnmount();
          } catch (S) {
            Oo(
              i,
              S
            );
          }
        break;
      case 5:
        th(i);
        break;
      case 4:
        oh(n, i);
    }
  }
  function rh(n) {
    n.alternate = null, n.child = null, n.dependencies = null, n.firstEffect = null, n.lastEffect = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.return = null, n.updateQueue = null;
  }
  function ah(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function ih(n) {
    e: {
      for (var i = n.return; i !== null; ) {
        if (ah(i))
          break e;
        i = i.return;
      }
      throw Error(c(160));
    }
    var s = i;
    switch (i = s.stateNode, s.tag) {
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
    s.flags & 16 && (rt(i, ""), s.flags &= -17);
    e:
      t:
        for (s = n; ; ) {
          for (; s.sibling === null; ) {
            if (s.return === null || ah(s.return)) {
              s = null;
              break e;
            }
            s = s.return;
          }
          for (s.sibling.return = s.return, s = s.sibling; s.tag !== 5 && s.tag !== 6 && s.tag !== 18; ) {
            if (s.flags & 2 || s.child === null || s.tag === 4)
              continue t;
            s.child.return = s, s = s.child;
          }
          if (!(s.flags & 2)) {
            s = s.stateNode;
            break e;
          }
        }
    v ? ds(n, s, i) : vs(n, s, i);
  }
  function ds(n, i, s) {
    var v = n.tag, g = v === 5 || v === 6;
    if (g)
      n = g ? n.stateNode : n.stateNode.instance, i ? s.nodeType === 8 ? s.parentNode.insertBefore(n, i) : s.insertBefore(n, i) : (s.nodeType === 8 ? (i = s.parentNode, i.insertBefore(n, s)) : (i = s, i.appendChild(n)), s = s._reactRootContainer, s != null || i.onclick !== null || (i.onclick = vc));
    else if (v !== 4 && (n = n.child, n !== null))
      for (ds(n, i, s), n = n.sibling; n !== null; )
        ds(n, i, s), n = n.sibling;
  }
  function vs(n, i, s) {
    var v = n.tag, g = v === 5 || v === 6;
    if (g)
      n = g ? n.stateNode : n.stateNode.instance, i ? s.insertBefore(n, i) : s.appendChild(n);
    else if (v !== 4 && (n = n.child, n !== null))
      for (vs(n, i, s), n = n.sibling; n !== null; )
        vs(n, i, s), n = n.sibling;
  }
  function oh(n, i) {
    for (var s = i, v = !1, g, S; ; ) {
      if (!v) {
        v = s.return;
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
      if (s.tag === 5 || s.tag === 6) {
        e:
          for (var R = n, M = s, j = M; ; )
            if (nh(R, j), j.child !== null && j.tag !== 4)
              j.child.return = j, j = j.child;
            else {
              if (j === M)
                break e;
              for (; j.sibling === null; ) {
                if (j.return === null || j.return === M)
                  break e;
                j = j.return;
              }
              j.sibling.return = j.return, j = j.sibling;
            }
        S ? (R = g, M = s.stateNode, R.nodeType === 8 ? R.parentNode.removeChild(M) : R.removeChild(M)) : g.removeChild(s.stateNode);
      } else if (s.tag === 4) {
        if (s.child !== null) {
          g = s.stateNode.containerInfo, S = !0, s.child.return = s, s = s.child;
          continue;
        }
      } else if (nh(n, s), s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === i)
        break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === i)
          return;
        s = s.return, s.tag === 4 && (v = !1);
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }
  function Ad(n, i) {
    switch (i.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
      case 22:
        var s = i.updateQueue;
        if (s = s !== null ? s.lastEffect : null, s !== null) {
          var v = s = s.next;
          do
            (v.tag & 3) === 3 && (n = v.destroy, v.destroy = void 0, n !== void 0 && n()), v = v.next;
          while (v !== s);
        }
        return;
      case 1:
        return;
      case 5:
        if (s = i.stateNode, s != null) {
          v = i.memoizedProps;
          var g = n !== null ? n.memoizedProps : v;
          n = i.type;
          var S = i.updateQueue;
          if (i.updateQueue = null, S !== null) {
            for (s[mc] = v, n === "input" && v.type === "radio" && v.name != null && kt(s, v), dn(n, g), i = dn(n, v), g = 0; g < S.length; g += 2) {
              var R = S[g], M = S[g + 1];
              R === "style" ? jt(s, M) : R === "dangerouslySetInnerHTML" ? Mt(s, M) : R === "children" ? rt(s, M) : I(s, R, M, i);
            }
            switch (n) {
              case "input":
                gt(s, v);
                break;
              case "textarea":
                qt(s, v);
                break;
              case "select":
                n = s._wrapperState.wasMultiple, s._wrapperState.wasMultiple = !!v.multiple, S = v.value, S != null ? ut(s, !!v.multiple, S, !1) : n !== !!v.multiple && (v.defaultValue != null ? ut(s, !!v.multiple, v.defaultValue, !0) : ut(s, !!v.multiple, v.multiple ? [] : "", !1));
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
        s = i.stateNode, s.hydrate && (s.hydrate = !1, tr(s.containerInfo));
        return;
      case 12:
        return;
      case 13:
        i.memoizedState !== null && (ms = Er(), Dd(i.child, !0)), lh(i);
        return;
      case 19:
        lh(i);
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
  function lh(n) {
    var i = n.updateQueue;
    if (i !== null) {
      n.updateQueue = null;
      var s = n.stateNode;
      s === null && (s = n.stateNode = new Cy()), i.forEach(function(v) {
        var g = ky.bind(null, n, v);
        s.has(v) || (s.add(v), v.then(g, g));
      });
    }
  }
  function wy(n, i) {
    return n !== null && (n = n.memoizedState, n === null || n.dehydrated !== null) ? (i = i.memoizedState, i !== null && i.dehydrated === null) : !1;
  }
  var ps = Math.ceil, cu = U.ReactCurrentDispatcher, dl = U.ReactCurrentOwner, Ct = 0, Wr = null, Yn = null, xr = 0, oi = 0, fu = Br(0), vr = 0, Nr = null, za = 0, vl = 0, li = 0, Ld = 0, hs = null, ms = 0, pl = 1 / 0;
  function du() {
    pl = Er() + 500;
  }
  var je = null, gs = !1, Pd = null, ui = null, Ro = !1, hl = null, ys = 90, Id = [], zd = [], ji = null, bs = 0, Mc = null, Oc = -1, Hi = 0, Nc = 0, Ss = null, Dc = !1;
  function ca() {
    return Ct & 48 ? Er() : Oc !== -1 ? Oc : Oc = Er();
  }
  function si(n) {
    if (n = n.mode, !(n & 2))
      return 1;
    if (!(n & 4))
      return Ql() === 99 ? 1 : 2;
    if (Hi === 0 && (Hi = za), go.transition !== 0) {
      Nc !== 0 && (Nc = hs !== null ? hs.pendingLanes : 0), n = Hi;
      var i = 4186112 & ~Nc;
      return i &= -i, i === 0 && (n = 4186112 & ~n, i = n & -n, i === 0 && (i = 8192)), i;
    }
    return n = Ql(), Ct & 4 && n === 98 ? n = _i(12, Hi) : (n = Cn(n), n = _i(n, Hi)), n;
  }
  function _o(n, i, s) {
    if (50 < bs)
      throw bs = 0, Mc = null, Error(c(185));
    if (n = Ac(n, i), n === null)
      return null;
    Pu(n, i, s), n === Wr && (li |= i, vr === 4 && vu(n, xr));
    var v = Ql();
    i === 1 ? Ct & 8 && !(Ct & 48) ? Ud(n) : (wa(n, s), Ct === 0 && (du(), lr())) : (!(Ct & 4) || v !== 98 && v !== 99 || (ji === null ? ji = /* @__PURE__ */ new Set([n]) : ji.add(n)), wa(n, s)), hs = n;
  }
  function Ac(n, i) {
    n.lanes |= i;
    var s = n.alternate;
    for (s !== null && (s.lanes |= i), s = n, n = n.return; n !== null; )
      n.childLanes |= i, s = n.alternate, s !== null && (s.childLanes |= i), s = n, n = n.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  function wa(n, i) {
    for (var s = n.callbackNode, v = n.suspendedLanes, g = n.pingedLanes, S = n.expirationTimes, R = n.pendingLanes; 0 < R; ) {
      var M = 31 - oo(R), j = 1 << M, ee = S[M];
      if (ee === -1) {
        if (!(j & v) || j & g) {
          ee = i, pn(j);
          var Le = ct;
          S[M] = 10 <= Le ? ee + 250 : 6 <= Le ? ee + 5e3 : -1;
        }
      } else
        ee <= i && (n.expiredLanes |= j);
      R &= ~j;
    }
    if (v = Za(n, n === Wr ? xr : 0), i = ct, v === 0)
      s !== null && (s !== ud && Yu(s), n.callbackNode = null, n.callbackPriority = 0);
    else {
      if (s !== null) {
        if (n.callbackPriority === i)
          return;
        s !== ud && Yu(s);
      }
      i === 15 ? (s = Ud.bind(null, n), ti === null ? (ti = [s], bc = La(yc, Di)) : ti.push(s), s = ud) : i === 14 ? s = al(99, Ud.bind(null, n)) : (s = ao(i), s = al(s, $d.bind(null, n))), n.callbackPriority = i, n.callbackNode = s;
    }
  }
  function $d(n) {
    if (Oc = -1, Nc = Hi = 0, Ct & 48)
      throw Error(c(327));
    var i = n.callbackNode;
    if (Mo() && n.callbackNode !== i)
      return null;
    var s = Za(n, n === Wr ? xr : 0);
    if (s === 0)
      return null;
    var v = s, g = Ct;
    Ct |= 16;
    var S = pu();
    (Wr !== n || xr !== v) && (du(), ml(n, v));
    do
      try {
        fh();
        break;
      } catch (M) {
        Pc(n, M);
      }
    while (!0);
    if (cd(), cu.current = S, Ct = g, Yn !== null ? v = 0 : (Wr = null, xr = 0, v = vr), za & li)
      ml(n, 0);
    else if (v !== 0) {
      if (v === 2 && (Ct |= 64, n.hydrate && (n.hydrate = !1, pc(n.containerInfo)), s = Lu(n), s !== 0 && (v = Cs(n, s))), v === 1)
        throw i = Nr, ml(n, 0), vu(n, s), wa(n, Er()), i;
      switch (n.finishedWork = n.current.alternate, n.finishedLanes = s, v) {
        case 0:
        case 1:
          throw Error(c(345));
        case 2:
          ko(n);
          break;
        case 3:
          if (vu(n, s), (s & 62914560) === s && (v = ms + 500 - Er(), 10 < v)) {
            if (Za(n, 0) !== 0)
              break;
            if (g = n.suspendedLanes, (g & s) !== s) {
              ca(), n.pingedLanes |= n.suspendedLanes & g;
              break;
            }
            n.timeoutHandle = Gl(ko.bind(null, n), v);
            break;
          }
          ko(n);
          break;
        case 4:
          if (vu(n, s), (s & 4186112) === s)
            break;
          for (v = n.eventTimes, g = -1; 0 < s; ) {
            var R = 31 - oo(s);
            S = 1 << R, R = v[R], R > g && (g = R), s &= ~S;
          }
          if (s = g, s = Er() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * ps(s / 1960)) - s, 10 < s) {
            n.timeoutHandle = Gl(ko.bind(null, n), s);
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
    return wa(n, Er()), n.callbackNode === i ? $d.bind(null, n) : null;
  }
  function vu(n, i) {
    for (i &= ~Ld, i &= ~li, n.suspendedLanes |= i, n.pingedLanes &= ~i, n = n.expirationTimes; 0 < i; ) {
      var s = 31 - oo(i), v = 1 << s;
      n[s] = -1, i &= ~v;
    }
  }
  function Ud(n) {
    if (Ct & 48)
      throw Error(c(327));
    if (Mo(), n === Wr && n.expiredLanes & xr) {
      var i = xr, s = Cs(n, i);
      za & li && (i = Za(n, i), s = Cs(n, i));
    } else
      i = Za(n, 0), s = Cs(n, i);
    if (n.tag !== 0 && s === 2 && (Ct |= 64, n.hydrate && (n.hydrate = !1, pc(n.containerInfo)), i = Lu(n), i !== 0 && (s = Cs(n, i))), s === 1)
      throw s = Nr, ml(n, 0), vu(n, i), wa(n, Er()), s;
    return n.finishedWork = n.current.alternate, n.finishedLanes = i, ko(n), wa(n, Er()), null;
  }
  function xy() {
    if (ji !== null) {
      var n = ji;
      ji = null, n.forEach(function(i) {
        i.expiredLanes |= 24 & i.pendingLanes, wa(i, Er());
      });
    }
    lr();
  }
  function uh(n, i) {
    var s = Ct;
    Ct |= 1;
    try {
      return n(i);
    } finally {
      Ct = s, Ct === 0 && (du(), lr());
    }
  }
  function sh(n, i) {
    var s = Ct;
    Ct &= -2, Ct |= 8;
    try {
      return n(i);
    } finally {
      Ct = s, Ct === 0 && (du(), lr());
    }
  }
  function Lc(n, i) {
    vt(fu, oi), oi |= i, za |= i;
  }
  function jd() {
    oi = fu.current, Tt(fu);
  }
  function ml(n, i) {
    n.finishedWork = null, n.finishedLanes = 0;
    var s = n.timeoutHandle;
    if (s !== -1 && (n.timeoutHandle = -1, Dp(s)), Yn !== null)
      for (s = Yn.return; s !== null; ) {
        var v = s;
        switch (v.tag) {
          case 1:
            v = v.type.childContextTypes, v != null && ei();
            break;
          case 3:
            Jl(), Tt(Sr), Tt(Rn), Co();
            break;
          case 5:
            md(v);
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
            jd();
        }
        s = s.return;
      }
    Wr = n, Yn = No(n.current, null), xr = oi = za = i, vr = 0, Nr = null, Ld = li = vl = 0;
  }
  function Pc(n, i) {
    do {
      var s = Yn;
      try {
        if (cd(), tu.current = _c, ls) {
          for (var v = _n.memoizedState; v !== null; ) {
            var g = v.queue;
            g !== null && (g.pending = null), v = v.next;
          }
          ls = !1;
        }
        if (nu = 0, fr = cr = _n = null, Eo = !1, dl.current = null, s === null || s.return === null) {
          vr = 1, Nr = i, Yn = null;
          break;
        }
        e: {
          var S = n, R = s.return, M = s, j = i;
          if (i = xr, M.flags |= 2048, M.firstEffect = M.lastEffect = null, j !== null && typeof j == "object" && typeof j.then == "function") {
            var ee = j;
            if (!(M.mode & 2)) {
              var Le = M.alternate;
              Le ? (M.updateQueue = Le.updateQueue, M.memoizedState = Le.memoizedState, M.lanes = Le.lanes) : (M.updateQueue = null, M.memoizedState = null);
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
                  var B = /* @__PURE__ */ new Set();
                  B.add(ee), me.updateQueue = B;
                } else
                  Q.add(ee);
                if (!(me.mode & 2)) {
                  if (me.flags |= 64, M.flags |= 16384, M.flags &= -2981, M.tag === 1)
                    if (M.alternate === null)
                      M.tag = 17;
                    else {
                      var K = Pa(-1, 1);
                      K.tag = 2, Ai(M, K);
                    }
                  M.lanes |= 1;
                  break e;
                }
                j = void 0, M = i;
                var le = S.pingCache;
                if (le === null ? (le = S.pingCache = new Zp(), j = /* @__PURE__ */ new Set(), le.set(ee, j)) : (j = le.get(ee), j === void 0 && (j = /* @__PURE__ */ new Set(), le.set(ee, j))), !j.has(M)) {
                  j.add(M);
                  var ce = _y.bind(null, S, ee, M);
                  ee.then(ce, ce);
                }
                me.flags |= 4096, me.lanes = i;
                break e;
              }
              me = me.return;
            } while (me !== null);
            j = Error(($e(M.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
          }
          vr !== 5 && (vr = 2), j = Md(j, M), me = R;
          do {
            switch (me.tag) {
              case 3:
                S = j, me.flags |= 4096, i &= -i, me.lanes |= i;
                var Rt = Jp(me, S, i);
                Fp(me, Rt);
                break e;
              case 1:
                S = j;
                var He = me.type, wt = me.stateNode;
                if (!(me.flags & 64) && (typeof He.getDerivedStateFromError == "function" || wt !== null && typeof wt.componentDidCatch == "function" && (ui === null || !ui.has(wt)))) {
                  me.flags |= 4096, i &= -i, me.lanes |= i;
                  var Lt = eh(me, S, i);
                  Fp(me, Lt);
                  break e;
                }
            }
            me = me.return;
          } while (me !== null);
        }
        dh(s);
      } catch (_t) {
        i = _t, Yn === s && s !== null && (Yn = s = s.return);
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
    var s = Ct;
    Ct |= 16;
    var v = pu();
    Wr === n && xr === i || ml(n, i);
    do
      try {
        ch();
        break;
      } catch (g) {
        Pc(n, g);
      }
    while (!0);
    if (cd(), Ct = s, cu.current = v, Yn !== null)
      throw Error(c(261));
    return Wr = null, xr = 0, vr;
  }
  function ch() {
    for (; Yn !== null; )
      Hd(Yn);
  }
  function fh() {
    for (; Yn !== null && !py(); )
      Hd(Yn);
  }
  function Hd(n) {
    var i = hh(n.alternate, n, oi);
    n.memoizedProps = n.pendingProps, i === null ? dh(n) : Yn = i, dl.current = null;
  }
  function dh(n) {
    var i = n;
    do {
      var s = i.alternate;
      if (n = i.return, i.flags & 2048) {
        if (s = Xp(i), s !== null) {
          s.flags &= 2047, Yn = s;
          return;
        }
        n !== null && (n.firstEffect = n.lastEffect = null, n.flags |= 2048);
      } else {
        if (s = Sy(s, i, oi), s !== null) {
          Yn = s;
          return;
        }
        if (s = i, s.tag !== 24 && s.tag !== 23 || s.memoizedState === null || oi & 1073741824 || !(s.mode & 4)) {
          for (var v = 0, g = s.child; g !== null; )
            v |= g.lanes | g.childLanes, g = g.sibling;
          s.childLanes = v;
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
    var i = Ql();
    return rl(99, Ty.bind(null, n, i)), null;
  }
  function Ty(n, i) {
    do
      Mo();
    while (hl !== null);
    if (Ct & 48)
      throw Error(c(327));
    var s = n.finishedWork;
    if (s === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, s === n.current)
      throw Error(c(177));
    n.callbackNode = null;
    var v = s.lanes | s.childLanes, g = v, S = n.pendingLanes & ~g;
    n.pendingLanes = g, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= g, n.mutableReadLanes &= g, n.entangledLanes &= g, g = n.entanglements;
    for (var R = n.eventTimes, M = n.expirationTimes; 0 < S; ) {
      var j = 31 - oo(S), ee = 1 << j;
      g[j] = 0, R[j] = -1, M[j] = -1, S &= ~ee;
    }
    if (ji !== null && !(v & 24) && ji.has(n) && ji.delete(n), n === Wr && (Yn = Wr = null, xr = 0), 1 < s.flags ? s.lastEffect !== null ? (s.lastEffect.nextEffect = s, v = s.firstEffect) : v = s : v = s.firstEffect, v !== null) {
      if (g = Ct, Ct |= 32, dl.current = null, td = Iu, R = Vu(), Xo(R)) {
        if ("selectionStart" in R)
          M = { start: R.selectionStart, end: R.selectionEnd };
        else
          e:
            if (M = (M = R.ownerDocument) && M.defaultView || window, (ee = M.getSelection && M.getSelection()) && ee.rangeCount !== 0) {
              M = ee.anchorNode, S = ee.anchorOffset, j = ee.focusNode, ee = ee.focusOffset;
              try {
                M.nodeType, j.nodeType;
              } catch (_t) {
                M = null;
                break e;
              }
              var Le = 0, Et = -1, me = -1, Je = 0, bt = 0, ft = R, Q = null;
              t:
                for (; ; ) {
                  for (var B; ft !== M || S !== 0 && ft.nodeType !== 3 || (Et = Le + S), ft !== j || ee !== 0 && ft.nodeType !== 3 || (me = Le + ee), ft.nodeType === 3 && (Le += ft.nodeValue.length), (B = ft.firstChild) !== null; )
                    Q = ft, ft = B;
                  for (; ; ) {
                    if (ft === R)
                      break t;
                    if (Q === M && ++Je === S && (Et = Le), Q === j && ++bt === ee && (me = Le), (B = ft.nextSibling) !== null)
                      break;
                    ft = Q, Q = ft.parentNode;
                  }
                  ft = B;
                }
              M = Et === -1 || me === -1 ? null : { start: Et, end: me };
            } else
              M = null;
        M = M || { start: 0, end: 0 };
      } else
        M = null;
      nd = { focusedElem: R, selectionRange: M }, Iu = !1, Ss = null, Dc = !1, je = v;
      do
        try {
          Ry();
        } catch (_t) {
          if (je === null)
            throw Error(c(330));
          Oo(je, _t), je = je.nextEffect;
        }
      while (je !== null);
      Ss = null, je = v;
      do
        try {
          for (R = n; je !== null; ) {
            var K = je.flags;
            if (K & 16 && rt(je.stateNode, ""), K & 128) {
              var le = je.alternate;
              if (le !== null) {
                var ce = le.ref;
                ce !== null && (typeof ce == "function" ? ce(null) : ce.current = null);
              }
            }
            switch (K & 1038) {
              case 2:
                ih(je), je.flags &= -3;
                break;
              case 6:
                ih(je), je.flags &= -3, Ad(je.alternate, je);
                break;
              case 1024:
                je.flags &= -1025;
                break;
              case 1028:
                je.flags &= -1025, Ad(je.alternate, je);
                break;
              case 4:
                Ad(je.alternate, je);
                break;
              case 8:
                M = je, oh(R, M);
                var Rt = M.alternate;
                rh(M), Rt !== null && rh(Rt);
            }
            je = je.nextEffect;
          }
        } catch (_t) {
          if (je === null)
            throw Error(c(330));
          Oo(je, _t), je = je.nextEffect;
        }
      while (je !== null);
      if (ce = nd, le = Vu(), K = ce.focusedElem, R = ce.selectionRange, le !== K && K && K.ownerDocument && Qf(K.ownerDocument.documentElement, K)) {
        for (R !== null && Xo(K) && (le = R.start, ce = R.end, ce === void 0 && (ce = le), "selectionStart" in K ? (K.selectionStart = le, K.selectionEnd = Math.min(ce, K.value.length)) : (ce = (le = K.ownerDocument || document) && le.defaultView || window, ce.getSelection && (ce = ce.getSelection(), M = K.textContent.length, Rt = Math.min(R.start, M), R = R.end === void 0 ? Rt : Math.min(R.end, M), !ce.extend && Rt > R && (M = R, R = Rt, Rt = M), M = kp(K, Rt), S = kp(K, R), M && S && (ce.rangeCount !== 1 || ce.anchorNode !== M.node || ce.anchorOffset !== M.offset || ce.focusNode !== S.node || ce.focusOffset !== S.offset) && (le = le.createRange(), le.setStart(M.node, M.offset), ce.removeAllRanges(), Rt > R ? (ce.addRange(le), ce.extend(S.node, S.offset)) : (le.setEnd(S.node, S.offset), ce.addRange(le)))))), le = [], ce = K; ce = ce.parentNode; )
          ce.nodeType === 1 && le.push({ element: ce, left: ce.scrollLeft, top: ce.scrollTop });
        for (typeof K.focus == "function" && K.focus(), K = 0; K < le.length; K++)
          ce = le[K], ce.element.scrollLeft = ce.left, ce.element.scrollTop = ce.top;
      }
      Iu = !!td, nd = td = null, n.current = s, je = v;
      do
        try {
          for (K = n; je !== null; ) {
            var He = je.flags;
            if (He & 36 && Nd(K, je.alternate, je), He & 128) {
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
          Oo(je, _t), je = je.nextEffect;
        }
      while (je !== null);
      je = null, Up(), Ct = g;
    } else
      n.current = s;
    if (Ro)
      Ro = !1, hl = n, ys = i;
    else
      for (je = v; je !== null; )
        i = je.nextEffect, je.nextEffect = null, je.flags & 8 && (He = je, He.sibling = null, He.stateNode = null), je = i;
    if (v = n.pendingLanes, v === 0 && (ui = null), v === 1 ? n === Mc ? bs++ : (bs = 0, Mc = n) : bs = 0, s = s.stateNode, nl && typeof nl.onCommitFiberRoot == "function")
      try {
        nl.onCommitFiberRoot(ad, s, void 0, (s.current.flags & 64) === 64);
      } catch (_t) {
      }
    if (wa(n, Er()), gs)
      throw gs = !1, n = Pd, Pd = null, n;
    return Ct & 8 || lr(), null;
  }
  function Ry() {
    for (; je !== null; ) {
      var n = je.alternate;
      Dc || Ss === null || (je.flags & 8 ? $r(je, Ss) && (Dc = !0) : je.tag === 13 && wy(n, je) && $r(je, Ss) && (Dc = !0));
      var i = je.flags;
      i & 256 && Ey(n, je), !(i & 512) || Ro || (Ro = !0, al(97, function() {
        return Mo(), null;
      })), je = je.nextEffect;
    }
  }
  function Mo() {
    if (ys !== 90) {
      var n = 97 < ys ? 97 : ys;
      return ys = 90, rl(n, ph);
    }
    return !1;
  }
  function vh(n, i) {
    Id.push(i, n), Ro || (Ro = !0, al(97, function() {
      return Mo(), null;
    }));
  }
  function Fd(n, i) {
    zd.push(i, n), Ro || (Ro = !0, al(97, function() {
      return Mo(), null;
    }));
  }
  function ph() {
    if (hl === null)
      return !1;
    var n = hl;
    if (hl = null, Ct & 48)
      throw Error(c(331));
    var i = Ct;
    Ct |= 32;
    var s = zd;
    zd = [];
    for (var v = 0; v < s.length; v += 2) {
      var g = s[v], S = s[v + 1], R = g.destroy;
      if (g.destroy = void 0, typeof R == "function")
        try {
          R();
        } catch (j) {
          if (S === null)
            throw Error(c(330));
          Oo(S, j);
        }
    }
    for (s = Id, Id = [], v = 0; v < s.length; v += 2) {
      g = s[v], S = s[v + 1];
      try {
        var M = g.create;
        g.destroy = M();
      } catch (j) {
        if (S === null)
          throw Error(c(330));
        Oo(S, j);
      }
    }
    for (M = n.current.firstEffect; M !== null; )
      n = M.nextEffect, M.nextEffect = null, M.flags & 8 && (M.sibling = null, M.stateNode = null), M = n;
    return Ct = i, lr(), !0;
  }
  function gl(n, i, s) {
    i = Md(s, i), i = Jp(n, i, 1), Ai(n, i), i = ca(), n = Ac(n, 1), n !== null && (Pu(n, 1, i), wa(n, i));
  }
  function Oo(n, i) {
    if (n.tag === 3)
      gl(n, n, i);
    else
      for (var s = n.return; s !== null; ) {
        if (s.tag === 3) {
          gl(s, n, i);
          break;
        } else if (s.tag === 1) {
          var v = s.stateNode;
          if (typeof s.type.getDerivedStateFromError == "function" || typeof v.componentDidCatch == "function" && (ui === null || !ui.has(v))) {
            n = Md(i, n);
            var g = eh(s, n, 1);
            if (Ai(s, g), g = ca(), s = Ac(s, 1), s !== null)
              Pu(s, 1, g), wa(s, g);
            else if (typeof v.componentDidCatch == "function" && (ui === null || !ui.has(v)))
              try {
                v.componentDidCatch(i, n);
              } catch (S) {
              }
            break;
          }
        }
        s = s.return;
      }
  }
  function _y(n, i, s) {
    var v = n.pingCache;
    v !== null && v.delete(i), i = ca(), n.pingedLanes |= n.suspendedLanes & s, Wr === n && (xr & s) === s && (vr === 4 || vr === 3 && (xr & 62914560) === xr && 500 > Er() - ms ? ml(n, 0) : Ld |= s), wa(n, i);
  }
  function ky(n, i) {
    var s = n.stateNode;
    s !== null && s.delete(i), i = 0, i === 0 && (i = n.mode, i & 2 ? i & 4 ? (Hi === 0 && (Hi = za), i = io(62914560 & ~Hi), i === 0 && (i = 4194304)) : i = Ql() === 99 ? 1 : 2 : i = 1), s = ca(), n = Ac(n, i), n !== null && (Pu(n, i, s), wa(n, s));
  }
  var hh;
  hh = function(n, i, s) {
    var v = i.lanes;
    if (n !== null)
      if (n.memoizedProps !== i.pendingProps || Sr.current)
        Ea = !0;
      else if (s & v)
        Ea = !!(n.flags & 16384);
      else {
        switch (Ea = !1, i.tag) {
          case 3:
            qp(i), eu();
            break;
          case 5:
            Bp(i);
            break;
          case 1:
            Cr(i.type) && Sa(i);
            break;
          case 4:
            rs(i, i.stateNode.containerInfo);
            break;
          case 10:
            v = i.memoizedProps.value;
            var g = i.type._context;
            vt(yo, g._currentValue), g._currentValue = v;
            break;
          case 13:
            if (i.memoizedState !== null)
              return s & i.child.childLanes ? xo(n, i, s) : (vt($n, $n.current & 1), i = Ui(n, i, s), i !== null ? i.sibling : null);
            vt($n, $n.current & 1);
            break;
          case 19:
            if (v = (s & i.childLanes) !== 0, n.flags & 64) {
              if (v)
                return by(n, i, s);
              i.flags |= 64;
            }
            if (g = i.memoizedState, g !== null && (g.rendering = null, g.tail = null, g.lastEffect = null), vt($n, $n.current), v)
              break;
            return null;
          case 23:
          case 24:
            return i.lanes = 0, lu(n, i, s);
        }
        return Ui(n, i, s);
      }
    else
      Ea = !1;
    switch (i.lanes = 0, i.tag) {
      case 2:
        if (v = i.type, n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2), n = i.pendingProps, g = nn(i, Rn.current), il(i, s), g = yd(null, i, v, n, g, s), i.flags |= 1, typeof g == "object" && g !== null && typeof g.render == "function" && g.$$typeof === void 0) {
          if (i.tag = 1, i.memoizedState = null, i.updateQueue = null, Cr(v)) {
            var S = !0;
            Sa(i);
          } else
            S = !1;
          i.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null, dd(i);
          var R = v.getDerivedStateFromProps;
          typeof R == "function" && Xu(i, v, R, n), g.updater = Xl, i.stateNode = g, g._reactInternals = i, xc(i, v, n, s), i = _d(null, i, v, !0, S, s);
        } else
          i.tag = 0, Zr(null, i, g, s), i = i.child;
        return i;
      case 16:
        g = i.elementType;
        e: {
          switch (n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2), n = i.pendingProps, S = g._init, g = S(g._payload), i.type = g, S = i.tag = Oy(g), n = ur(g, n), S) {
            case 0:
              i = Rd(null, i, g, n, s);
              break e;
            case 1:
              i = Gp(null, i, g, n, s);
              break e;
            case 11:
              i = xd(null, i, g, n, s);
              break e;
            case 14:
              i = Td(null, i, g, ur(g.type, n), v, s);
              break e;
          }
          throw Error(c(306, g, ""));
        }
        return i;
      case 0:
        return v = i.type, g = i.pendingProps, g = i.elementType === v ? g : ur(v, g), Rd(n, i, v, g, s);
      case 1:
        return v = i.type, g = i.pendingProps, g = i.elementType === v ? g : ur(v, g), Gp(n, i, v, g, s);
      case 3:
        if (qp(i), v = i.updateQueue, n === null || v === null)
          throw Error(c(282));
        if (v = i.pendingProps, g = i.memoizedState, g = g !== null ? g.element : null, Hp(n, i), Li(i, v, null, s), v = i.memoizedState.element, v === g)
          eu(), i = Ui(n, i, s);
        else {
          if (g = i.stateNode, (S = g.hydrate) && (Pi = fo(i.stateNode.containerInfo.firstChild), ai = i, S = ii = !0), S) {
            if (n = g.mutableSourceEagerHydrationData, n != null)
              for (g = 0; g < n.length; g += 2)
                S = n[g], S._workInProgressVersionPrimary = n[g + 1], cl.push(S);
            for (s = hd(i, null, v, s), i.child = s; s; )
              s.flags = s.flags & -3 | 1024, s = s.sibling;
          } else
            Zr(n, i, v, s), eu();
          i = i.child;
        }
        return i;
      case 5:
        return Bp(i), n === null && So(i), v = i.type, g = i.pendingProps, S = n !== null ? n.memoizedProps : null, R = g.children, Gu(v, g) ? R = null : S !== null && Gu(v, S) && (i.flags |= 16), Kp(n, i), Zr(n, i, R, s), i.child;
      case 6:
        return n === null && So(i), null;
      case 13:
        return xo(n, i, s);
      case 4:
        return rs(i, i.stateNode.containerInfo), v = i.pendingProps, n === null ? i.child = es(i, null, v, s) : Zr(n, i, v, s), i.child;
      case 11:
        return v = i.type, g = i.pendingProps, g = i.elementType === v ? g : ur(v, g), xd(n, i, v, g, s);
      case 7:
        return Zr(n, i, i.pendingProps, s), i.child;
      case 8:
        return Zr(
          n,
          i,
          i.pendingProps.children,
          s
        ), i.child;
      case 12:
        return Zr(n, i, i.pendingProps.children, s), i.child;
      case 10:
        e: {
          v = i.type._context, g = i.pendingProps, R = i.memoizedProps, S = g.value;
          var M = i.type._context;
          if (vt(yo, M._currentValue), M._currentValue = S, R !== null)
            if (M = R.value, S = ba(M, S) ? 0 : (typeof v._calculateChangedBits == "function" ? v._calculateChangedBits(M, S) : 1073741823) | 0, S === 0) {
              if (R.children === g.children && !Sr.current) {
                i = Ui(n, i, s);
                break e;
              }
            } else
              for (M = i.child, M !== null && (M.return = i); M !== null; ) {
                var j = M.dependencies;
                if (j !== null) {
                  R = M.child;
                  for (var ee = j.firstContext; ee !== null; ) {
                    if (ee.context === v && ee.observedBits & S) {
                      M.tag === 1 && (ee = Pa(-1, s & -s), ee.tag = 2, Ai(M, ee)), M.lanes |= s, ee = M.alternate, ee !== null && (ee.lanes |= s), fd(M.return, s), j.lanes |= s;
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
          Zr(n, i, g.children, s), i = i.child;
        }
        return i;
      case 9:
        return g = i.type, S = i.pendingProps, v = S.children, il(i, s), g = sa(
          g,
          S.unstable_observedBits
        ), v = v(g), i.flags |= 1, Zr(n, i, v, s), i.child;
      case 14:
        return g = i.type, S = ur(g, i.pendingProps), S = ur(g.type, S), Td(n, i, g, S, v, s);
      case 15:
        return Wp(n, i, i.type, i.pendingProps, v, s);
      case 17:
        return v = i.type, g = i.pendingProps, g = i.elementType === v ? g : ur(v, g), n !== null && (n.alternate = null, i.alternate = null, i.flags |= 2), i.tag = 1, Cr(v) ? (n = !0, Sa(i)) : n = !1, il(i, s), ol(i, v, g), xc(i, v, g, s), _d(null, i, v, !0, n, s);
      case 19:
        return by(n, i, s);
      case 23:
        return lu(n, i, s);
      case 24:
        return lu(n, i, s);
    }
    throw Error(c(156, i.tag));
  };
  function My(n, i, s, v) {
    this.tag = n, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = i, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = v, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function xa(n, i, s, v) {
    return new My(n, i, s, v);
  }
  function Ic(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function Oy(n) {
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
  function No(n, i) {
    var s = n.alternate;
    return s === null ? (s = xa(n.tag, i, n.key, n.mode), s.elementType = n.elementType, s.type = n.type, s.stateNode = n.stateNode, s.alternate = n, n.alternate = s) : (s.pendingProps = i, s.type = n.type, s.flags = 0, s.nextEffect = null, s.firstEffect = null, s.lastEffect = null), s.childLanes = n.childLanes, s.lanes = n.lanes, s.child = n.child, s.memoizedProps = n.memoizedProps, s.memoizedState = n.memoizedState, s.updateQueue = n.updateQueue, i = n.dependencies, s.dependencies = i === null ? null : { lanes: i.lanes, firstContext: i.firstContext }, s.sibling = n.sibling, s.index = n.index, s.ref = n.ref, s;
  }
  function Es(n, i, s, v, g, S) {
    var R = 2;
    if (v = n, typeof n == "function")
      Ic(n) && (R = 1);
    else if (typeof n == "string")
      R = 5;
    else
      e:
        switch (n) {
          case ne:
            return ci(s.children, g, S, i);
          case Ie:
            R = 8, g |= 16;
            break;
          case oe:
            R = 8, g |= 1;
            break;
          case re:
            return n = xa(12, s, i, g | 8), n.elementType = re, n.type = re, n.lanes = S, n;
          case se:
            return n = xa(13, s, i, g), n.type = se, n.elementType = se, n.lanes = S, n;
          case de:
            return n = xa(19, s, i, g), n.elementType = de, n.lanes = S, n;
          case ie:
            return yl(s, g, S, i);
          case he:
            return n = xa(24, s, i, g), n.elementType = he, n.lanes = S, n;
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
    return i = xa(R, s, i, g), i.elementType = n, i.type = v, i.lanes = S, i;
  }
  function ci(n, i, s, v) {
    return n = xa(7, n, v, i), n.lanes = s, n;
  }
  function yl(n, i, s, v) {
    return n = xa(23, n, v, i), n.elementType = ie, n.lanes = s, n;
  }
  function Bd(n, i, s) {
    return n = xa(6, n, null, i), n.lanes = s, n;
  }
  function Vd(n, i, s) {
    return i = xa(4, n.children !== null ? n.children : [], n.key, i), i.lanes = s, i.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, i;
  }
  function Ny(n, i, s) {
    this.tag = i, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = s, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = tc(0), this.expirationTimes = tc(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = tc(0), this.mutableSourceEagerHydrationData = null;
  }
  function zc(n, i, s) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: q, key: v == null ? null : "" + v, children: n, containerInfo: i, implementation: s };
  }
  function $c(n, i, s, v) {
    var g = i.current, S = ca(), R = si(g);
    e:
      if (s) {
        s = s._reactInternals;
        t: {
          if (xn(s) !== s || s.tag !== 1)
            throw Error(c(170));
          var M = s;
          do {
            switch (M.tag) {
              case 3:
                M = M.stateNode.context;
                break t;
              case 1:
                if (Cr(M.type)) {
                  M = M.stateNode.__reactInternalMemoizedMergedChildContext;
                  break t;
                }
            }
            M = M.return;
          } while (M !== null);
          throw Error(c(171));
        }
        if (s.tag === 1) {
          var j = s.type;
          if (Cr(j)) {
            s = Yl(s, j, M);
            break e;
          }
        }
        s = M;
      } else
        s = po;
    return i.context === null ? i.context = s : i.pendingContext = s, i = Pa(S, R), i.payload = { element: n }, v = v === void 0 ? null : v, v !== null && (i.callback = v), Ai(g, i), _o(g, R, S), R;
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
  function mh(n, i) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var s = n.retryLane;
      n.retryLane = s !== 0 && s < i ? s : i;
    }
  }
  function jc(n, i) {
    mh(n, i), (n = n.alternate) && mh(n, i);
  }
  function gh() {
    return null;
  }
  function Wd(n, i, s) {
    var v = s != null && s.hydrationOptions != null && s.hydrationOptions.mutableSources || null;
    if (s = new Ny(n, i, s != null && s.hydrate === !0), i = xa(3, null, null, i === 2 ? 7 : i === 1 ? 3 : 0), s.current = i, i.stateNode = s, dd(i), n[Hr] = s.current, ed(n.nodeType === 8 ? n.parentNode : n), v)
      for (n = 0; n < v.length; n++) {
        i = v[n];
        var g = i._getVersion;
        g = g(i._source), s.mutableSourceEagerHydrationData == null ? s.mutableSourceEagerHydrationData = [i, g] : s.mutableSourceEagerHydrationData.push(i, g);
      }
    this._internalRoot = s;
  }
  Wd.prototype.render = function(n) {
    $c(n, this._internalRoot, null, null);
  }, Wd.prototype.unmount = function() {
    var n = this._internalRoot, i = n.containerInfo;
    $c(null, n, null, function() {
      i[Hr] = null;
    });
  };
  function ws(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function Dy(n, i) {
    if (i || (i = n ? n.nodeType === 9 ? n.documentElement : n.firstChild : null, i = !(!i || i.nodeType !== 1 || !i.hasAttribute("data-reactroot"))), !i)
      for (var s; s = n.lastChild; )
        n.removeChild(s);
    return new Wd(n, 0, i ? { hydrate: !0 } : void 0);
  }
  function Hc(n, i, s, v, g) {
    var S = s._reactRootContainer;
    if (S) {
      var R = S._internalRoot;
      if (typeof g == "function") {
        var M = g;
        g = function() {
          var ee = Uc(R);
          M.call(ee);
        };
      }
      $c(i, R, n, g);
    } else {
      if (S = s._reactRootContainer = Dy(s, v), R = S._internalRoot, typeof g == "function") {
        var j = g;
        g = function() {
          var ee = Uc(R);
          j.call(ee);
        };
      }
      sh(function() {
        $c(i, R, n, g);
      });
    }
    return Uc(R);
  }
  Xa = function(n) {
    if (n.tag === 13) {
      var i = ca();
      _o(n, 4, i), jc(n, 4);
    }
  }, gr = function(n) {
    if (n.tag === 13) {
      var i = ca();
      _o(n, 67108864, i), jc(n, 67108864);
    }
  }, Qr = function(n) {
    if (n.tag === 13) {
      var i = ca(), s = si(n);
      _o(n, s, i), jc(n, s);
    }
  }, Mr = function(n, i) {
    return i();
  }, Ue = function(n, i, s) {
    switch (i) {
      case "input":
        if (gt(n, s), i = s.name, s.type === "radio" && i != null) {
          for (s = n; s.parentNode; )
            s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + i) + '][type="radio"]'), i = 0; i < s.length; i++) {
            var v = s[i];
            if (v !== n && v.form === n.form) {
              var g = Ni(v);
              if (!g)
                throw Error(c(90));
              Dt(v), gt(v, g);
            }
          }
        }
        break;
      case "textarea":
        qt(n, s);
        break;
      case "select":
        i = s.value, i != null && ut(n, !!s.multiple, i, !1);
    }
  }, An = uh, gn = function(n, i, s, v, g) {
    var S = Ct;
    Ct |= 4;
    try {
      return rl(98, n.bind(null, i, s, v, g));
    } finally {
      Ct = S, Ct === 0 && (du(), lr());
    }
  }, oa = function() {
    !(Ct & 49) && (xy(), Mo());
  }, qr = function(n, i) {
    var s = Ct;
    Ct |= 2;
    try {
      return n(i);
    } finally {
      Ct = s, Ct === 0 && (du(), lr());
    }
  };
  function yh(n, i) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!ws(i))
      throw Error(c(200));
    return zc(n, i, null, s);
  }
  var Ay = { Events: [ua, Fr, Ni, At, mn, Mo, { current: !1 }] }, xs = { findFiberByHostInstance: tl, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom" }, Ly = { bundleType: xs.bundleType, version: xs.version, rendererPackageName: xs.rendererPackageName, rendererConfig: xs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: U.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Qa(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: xs.findFiberByHostInstance || gh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var Fc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Fc.isDisabled && Fc.supportsFiber)
      try {
        ad = Fc.inject(Ly), nl = Fc;
      } catch (n) {
      }
  }
  return Ba.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ay, Ba.createPortal = yh, Ba.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var i = n._reactInternals;
    if (i === void 0)
      throw typeof n.render == "function" ? Error(c(188)) : Error(c(268, Object.keys(n)));
    return n = Qa(i), n = n === null ? null : n.stateNode, n;
  }, Ba.flushSync = function(n, i) {
    var s = Ct;
    if (s & 48)
      return n(i);
    Ct |= 1;
    try {
      if (n)
        return rl(99, n.bind(null, i));
    } finally {
      Ct = s, lr();
    }
  }, Ba.hydrate = function(n, i, s) {
    if (!ws(i))
      throw Error(c(200));
    return Hc(null, n, i, !0, s);
  }, Ba.render = function(n, i, s) {
    if (!ws(i))
      throw Error(c(200));
    return Hc(null, n, i, !1, s);
  }, Ba.unmountComponentAtNode = function(n) {
    if (!ws(n))
      throw Error(c(40));
    return n._reactRootContainer ? (sh(function() {
      Hc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Hr] = null;
      });
    }), !0) : !1;
  }, Ba.unstable_batchedUpdates = uh, Ba.unstable_createPortal = function(n, i) {
    return yh(n, i, 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null);
  }, Ba.unstable_renderSubtreeIntoContainer = function(n, i, s, v) {
    if (!ws(s))
      throw Error(c(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(c(38));
    return Hc(n, i, s, !1, v);
  }, Ba.version = "17.0.2", Ba;
}
var Va = {}, qm = { exports: {} }, Gi = {};
/** @license React v0.20.2
 * scheduler-tracing.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _x;
function $A() {
  if (_x)
    return Gi;
  _x = 1;
  var r = 0;
  return Gi.__interactionsRef = null, Gi.__subscriberRef = null, Gi.unstable_clear = function(o) {
    return o();
  }, Gi.unstable_getCurrent = function() {
    return null;
  }, Gi.unstable_getThreadID = function() {
    return ++r;
  }, Gi.unstable_subscribe = function() {
  }, Gi.unstable_trace = function(o, u, c) {
    return c();
  }, Gi.unstable_unsubscribe = function() {
  }, Gi.unstable_wrap = function(o) {
    return o;
  }, Gi;
}
var lS = {};
/** @license React v0.20.2
 * scheduler-tracing.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kx;
function UA() {
  return kx || (kx = 1, function(r) {
    process.env.NODE_ENV !== "production" && function() {
      var o = 0, u = 0, c = 0;
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
      function C($, z, I) {
        var U = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : o, Y = {
          __count: 1,
          id: u++,
          name: $,
          timestamp: z
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
              re = I();
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
        var z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : o, I = r.__interactionsRef.current, U = r.__subscriberRef.current;
        U !== null && U.onWorkScheduled(I, z), I.forEach(function(ne) {
          ne.__count++;
        });
        var Y = !1;
        function q() {
          var ne = r.__interactionsRef.current;
          r.__interactionsRef.current = I, U = r.__subscriberRef.current;
          try {
            var oe;
            try {
              U !== null && U.onWorkStarted(I, z);
            } finally {
              try {
                oe = $.apply(void 0, arguments);
              } finally {
                r.__interactionsRef.current = ne, U !== null && U.onWorkStopped(I, z);
              }
            }
            return oe;
          } finally {
            Y || (Y = !0, I.forEach(function(re) {
              re.__count--, U !== null && re.__count === 0 && U.onInteractionScheduledWorkCompleted(re);
            }));
          }
        }
        return q.cancel = function() {
          U = r.__subscriberRef.current;
          try {
            U !== null && U.onWorkCanceled(I, z);
          } finally {
            I.forEach(function(oe) {
              oe.__count--, U && oe.__count === 0 && U.onInteractionScheduledWorkCompleted(oe);
            });
          }
        }, q;
      }
      var E = null;
      E = /* @__PURE__ */ new Set();
      function k($) {
        E.add($), E.size === 1 && (r.__subscriberRef.current = {
          onInteractionScheduledWorkCompleted: D,
          onInteractionTraced: N,
          onWorkCanceled: W,
          onWorkScheduled: P,
          onWorkStarted: F,
          onWorkStopped: L
        });
      }
      function _($) {
        E.delete($), E.size === 0 && (r.__subscriberRef.current = null);
      }
      function N($) {
        var z = !1, I = null;
        if (E.forEach(function(U) {
          try {
            U.onInteractionTraced($);
          } catch (Y) {
            z || (z = !0, I = Y);
          }
        }), z)
          throw I;
      }
      function D($) {
        var z = !1, I = null;
        if (E.forEach(function(U) {
          try {
            U.onInteractionScheduledWorkCompleted($);
          } catch (Y) {
            z || (z = !0, I = Y);
          }
        }), z)
          throw I;
      }
      function P($, z) {
        var I = !1, U = null;
        if (E.forEach(function(Y) {
          try {
            Y.onWorkScheduled($, z);
          } catch (q) {
            I || (I = !0, U = q);
          }
        }), I)
          throw U;
      }
      function F($, z) {
        var I = !1, U = null;
        if (E.forEach(function(Y) {
          try {
            Y.onWorkStarted($, z);
          } catch (q) {
            I || (I = !0, U = q);
          }
        }), I)
          throw U;
      }
      function L($, z) {
        var I = !1, U = null;
        if (E.forEach(function(Y) {
          try {
            Y.onWorkStopped($, z);
          } catch (q) {
            I || (I = !0, U = q);
          }
        }), I)
          throw U;
      }
      function W($, z) {
        var I = !1, U = null;
        if (E.forEach(function(Y) {
          try {
            Y.onWorkCanceled($, z);
          } catch (q) {
            I || (I = !0, U = q);
          }
        }), I)
          throw U;
      }
      r.unstable_clear = d, r.unstable_getCurrent = m, r.unstable_getThreadID = h, r.unstable_subscribe = k, r.unstable_trace = C, r.unstable_unsubscribe = _, r.unstable_wrap = x;
    }();
  }(lS)), lS;
}
var Mx;
function jA() {
  return Mx || (Mx = 1, process.env.NODE_ENV === "production" ? qm.exports = $A() : qm.exports = UA()), qm.exports;
}
/** @license React v17.0.2
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ox;
function HA() {
  return Ox || (Ox = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Oa, o = lR(), u = uR(), c = jA(), d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
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
    var x = 0, E = 1, k = 2, _ = 3, N = 4, D = 5, P = 6, F = 7, L = 8, W = 9, $ = 10, z = 11, I = 12, U = 13, Y = 14, q = 15, ne = 16, oe = 17, re = 18, ge = 19, pe = 20, te = 21, se = 22, de = 23, Ce = 24, ke = !0, we = !1, Ae = !1, Ie = !1, ie = /* @__PURE__ */ new Set(), he = {}, Se = {};
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
        var O = f.attributeName, A = f.attributeNamespace;
        if (a === null)
          e.removeAttribute(O);
        else {
          var X = f.type, H;
          X === Nt || X === $e && a === !0 ? H = "" : (H = "" + a, f.sanitizeURL && xt(H.toString())), A ? e.setAttributeNS(A, O, H) : e.setAttribute(O, H);
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
    function wi() {
    }
    wi.__reactDisabledLog = !0;
    function _r() {
      {
        if (Jn === 0) {
          Tr = console.log, qa = console.info, Lr = console.warn, Pr = console.error, Rr = console.group, Ya = console.groupCollapsed, Pn = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: wi,
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
`), O = b.length - 1, A = w.length - 1; O >= 1 && A >= 0 && b[O] !== w[A]; )
            A--;
          for (; O >= 1 && A >= 0; O--, A--)
            if (b[O] !== w[A]) {
              if (O !== 1 || A !== 1)
                do
                  if (O--, A--, A < 0 || b[O] !== w[A]) {
                    var X = `
` + b[O].replace(" at new ", " at ");
                    return typeof e == "function" && $r.set(e, X), X;
                  }
                while (O >= 1 && A >= 0);
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
        case D:
          return zr(e.type);
        case ne:
          return zr("Lazy");
        case U:
          return zr("Suspense");
        case ge:
          return zr("SuspenseList");
        case x:
        case k:
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
    function xi() {
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
    function ga(e) {
      return e._valueTracker;
    }
    function Ti(e) {
      e._valueTracker = null;
    }
    function Na(e) {
      var t = "";
      return e && (br(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function to(e) {
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
            Ti(e), delete e[t];
          }
        };
        return y;
      }
    }
    function Da(e) {
      ga(e) || (e._valueTracker = to(e));
    }
    function no(e) {
      if (!e)
        return !1;
      var t = ga(e);
      if (!t)
        return !0;
      var a = t.getValue(), l = Na(e);
      return l !== a ? (t.setValue(l), !0) : !1;
    }
    function Ri(e) {
      if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined")
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    var qo = !1, ro = !1, Il = !1, Be = !1;
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
      la("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !ro && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Tn() || "A component", t.type), ro = !0), t.value !== void 0 && t.defaultValue !== void 0 && !qo && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Tn() || "A component", t.type), qo = !0);
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
    function ao(e, t) {
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
      t.hasOwnProperty("value") ? io(a, t.type, f) : t.hasOwnProperty("defaultValue") && io(a, t.type, zn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
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
      ao(a, t), _i(a, t);
    }
    function _i(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var l = e; l.parentNode; )
          l = l.parentNode;
        for (var f = l.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), p = 0; p < f.length; p++) {
          var y = f[p];
          if (!(y === e || y.form !== e.form)) {
            var b = Oh(y);
            if (!b)
              throw Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            no(y), ao(y, b);
          }
        }
      }
    }
    function io(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ri(e.ownerDocument) !== e) && (a == null ? e.defaultValue = Gn(e._wrapperState.initialValue) : e.defaultValue !== Gn(a) && (e.defaultValue = Gn(a)));
    }
    var tc = !1, Pu = !1;
    function oo(e) {
      var t = "";
      return r.Children.forEach(e, function(a) {
        a != null && (t += a);
      }), t;
    }
    function op(e, t) {
      typeof t.children == "object" && t.children !== null && r.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || typeof a.type == "string" && (Pu || (Pu = !0, h("Only strings and numbers are supported as <option> children."))));
      }), t.selected != null && !tc && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), tc = !0);
    }
    function Qg(e, t) {
      t.value != null && e.setAttribute("value", Gn(zn(t.value)));
    }
    function If(e, t) {
      var a = o({
        children: void 0
      }, t), l = oo(t.children);
      return l && (a.children = l), a;
    }
    var zf;
    zf = !1;
    function lp() {
      var e = Tn();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Iu = ["value", "defaultValue"];
    function Xg(e) {
      {
        la("select", e);
        for (var t = 0; t < Iu.length; t++) {
          var a = Iu[t];
          if (e[a] != null) {
            var l = Array.isArray(e[a]);
            e.multiple && !l ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, lp()) : !e.multiple && l && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, lp());
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
        for (var A = Gn(zn(a)), X = null, H = 0; H < f.length; H++) {
          if (f[H].value === A) {
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
      Xg(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !zf && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), zf = !0);
    }
    function lo(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var l = t.value;
      l != null ? zl(a, !!t.multiple, l, !1) : t.defaultValue != null && zl(a, !!t.multiple, t.defaultValue, !0);
    }
    function $f(e, t) {
      var a = e, l = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var f = t.value;
      f != null ? zl(a, !!t.multiple, f, !1) : l !== !!t.multiple && (t.defaultValue != null ? zl(a, !!t.multiple, t.defaultValue, !0) : zl(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function rc(e, t) {
      var a = e, l = t.value;
      l != null && zl(a, !!t.multiple, l, !1);
    }
    var Uf = !1;
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
      la("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Uf && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Tn() || "A component"), Uf = !0);
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
    function jf(e, t) {
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
      jf(e, t);
    }
    var jl = "http://www.w3.org/1999/xhtml", Hl = "http://www.w3.org/1998/Math/MathML", Hf = "http://www.w3.org/2000/svg", ac = {
      html: jl,
      mathml: Hl,
      svg: Hf
    };
    function Uu(e) {
      switch (e) {
        case "svg":
          return Hf;
        case "math":
          return Hl;
        default:
          return jl;
      }
    }
    function Yo(e, t) {
      return e == null || e === jl ? Uu(t) : e === Hf && t === "foreignObject" ? jl : e;
    }
    var ic = function(e) {
      return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, a, l, f) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, l, f);
        });
      } : e;
    }, ju, up = ic(function(e, t) {
      if (e.namespaceURI === ac.svg && !("innerHTML" in e)) {
        ju = ju || document.createElement("div"), ju.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = ju.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), ya = 1, ki = 3, Ur = 8, uo = 9, sp = 11, oc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ki) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Zg = {
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
    function cp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Jg = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Hu).forEach(function(e) {
      Jg.forEach(function(t) {
        Hu[cp(t, e)] = Hu[e];
      });
    });
    function Ff(e, t, a) {
      var l = t == null || typeof t == "boolean" || t === "";
      return l ? "" : !a && typeof t == "number" && t !== 0 && !(Hu.hasOwnProperty(e) && Hu[e]) ? t + "px" : ("" + t).trim();
    }
    var ey = /([A-Z])/g, ty = /^ms-/;
    function Bf(e) {
      return e.replace(ey, "-$1").toLowerCase().replace(ty, "-ms-");
    }
    var fp = function() {
    };
    {
      var ny = /^(?:webkit|moz|o)[A-Z]/, ry = /^-ms-/, dp = /-(.)/g, vp = /;\s*$/, Fl = {}, Vf = {}, pp = !1, hp = !1, ay = function(e) {
        return e.replace(dp, function(t, a) {
          return a.toUpperCase();
        });
      }, iy = function(e) {
        Fl.hasOwnProperty(e) && Fl[e] || (Fl[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ay(e.replace(ry, "ms-"))
        ));
      }, Wf = function(e) {
        Fl.hasOwnProperty(e) && Fl[e] || (Fl[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Fu = function(e, t) {
        Vf.hasOwnProperty(t) && Vf[t] || (Vf[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(vp, "")));
      }, oy = function(e, t) {
        pp || (pp = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, mp = function(e, t) {
        hp || (hp = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      fp = function(e, t) {
        e.indexOf("-") > -1 ? iy(e) : ny.test(e) ? Wf(e) : vp.test(t) && Fu(e, t), typeof t == "number" && (isNaN(t) ? oy(e, t) : isFinite(t) || mp(e, t));
      };
    }
    var gp = fp;
    function yp(e) {
      {
        var t = "", a = "";
        for (var l in e)
          if (e.hasOwnProperty(l)) {
            var f = e[l];
            if (f != null) {
              var p = l.indexOf("--") === 0;
              t += a + (p ? l : Bf(l)) + ":", t += Ff(l, f, p), a = ";";
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
          f || gp(l, t[l]);
          var p = Ff(l, t[l], f);
          l === "float" && (l = "cssFloat"), f ? a.setProperty(l, p) : a[l] = p;
        }
    }
    function bp(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Qo(e) {
      var t = {};
      for (var a in e)
        for (var l = Zg[a] || [a], f = 0; f < l.length; f++)
          t[l[f]] = a;
      return t;
    }
    function ly(e, t) {
      {
        if (!t)
          return;
        var a = Qo(e), l = Qo(t), f = {};
        for (var p in a) {
          var y = a[p], b = l[p];
          if (b && y !== b) {
            var w = y + "," + b;
            if (f[w])
              continue;
            f[w] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", bp(e[y]) ? "Removing" : "Updating", y, b);
          }
        }
      }
    }
    var uy = {
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
    }, sy = o({
      menuitem: !0
    }, uy), Sp = "__html";
    function lc(e, t) {
      if (t) {
        if (sy[e] && !(t.children == null && t.dangerouslySetInnerHTML == null))
          throw Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (!(typeof t.dangerouslySetInnerHTML == "object" && Sp in t.dangerouslySetInnerHTML))
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
    var so = {
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
    }, Cp = {
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
    }, Mi = {}, cy = new RegExp("^(aria)-[" + mt + "]*$"), Ep = new RegExp("^(aria)[A-Z][" + mt + "]*$"), Gf = Object.prototype.hasOwnProperty;
    function qf(e, t) {
      {
        if (Gf.call(Mi, t) && Mi[t])
          return !0;
        if (Ep.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), l = Cp.hasOwnProperty(a) ? a : null;
          if (l == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Mi[t] = !0, !0;
          if (t !== l)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, l), Mi[t] = !0, !0;
        }
        if (cy.test(t)) {
          var f = t.toLowerCase(), p = Cp.hasOwnProperty(f) ? f : null;
          if (p == null)
            return Mi[t] = !0, !1;
          if (t !== p)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, p), Mi[t] = !0, !0;
        }
      }
      return !0;
    }
    function wp(e, t) {
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
    function xp(e, t) {
      Aa(e, t) || wp(e, t);
    }
    var Yf = !1;
    function fy(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Yf && (Yf = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Tp = function() {
    };
    {
      var jr = {}, dy = Object.prototype.hasOwnProperty, Rp = /^on./, ba = /^on[^A-Z]/, vy = new RegExp("^(aria)-[" + mt + "]*$"), Bu = new RegExp("^(aria)[A-Z][" + mt + "]*$");
      Tp = function(e, t, a, l) {
        if (dy.call(jr, t) && jr[t])
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
          if (Rp.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), jr[t] = !0, !0;
        } else if (Rp.test(t))
          return ba.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), jr[t] = !0, !0;
        if (vy.test(t) || Bu.test(t))
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
        if (so.hasOwnProperty(f)) {
          var A = so[f];
          if (A !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, A), jr[t] = !0, !0;
        } else if (!O && t !== f)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, f), jr[t] = !0, !0;
        return typeof a == "boolean" && ot(t, a, w, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), jr[t] = !0, !0) : O ? !0 : ot(t, a, w, !1) ? (jr[t] = !0, !1) : ((a === "false" || a === "true") && w !== null && w.type === Nt && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), jr[t] = !0), !0);
      };
    }
    var _p = function(e, t, a) {
      {
        var l = [];
        for (var f in t) {
          var p = Tp(e, f, t[f], a);
          p || l.push(f);
        }
        var y = l.map(function(b) {
          return "`" + b + "`";
        }).join(", ");
        l.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e) : l.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", y, e);
      }
    };
    function kp(e, t, a) {
      Aa(e, t) || _p(e, t, a);
    }
    var Qf = 1, Vu = 2, Xo = 4, Mp = 16, Bl = Qf | Vu | Xo;
    function Wu(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ki ? t.parentNode : t;
    }
    var Zo = null, co = null, Jo = null;
    function Xf(e) {
      var t = hu(e);
      if (t) {
        if (typeof Zo != "function")
          throw Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var l = Oh(a);
          Zo(t.stateNode, t.type, l);
        }
      }
    }
    function Zf(e) {
      Zo = e;
    }
    function Vl(e) {
      co ? Jo ? Jo.push(e) : Jo = [e] : co = e;
    }
    function Op() {
      return co !== null || Jo !== null;
    }
    function Jf() {
      if (co) {
        var e = co, t = Jo;
        if (co = null, Jo = null, Xf(e), t)
          for (var a = 0; a < t.length; a++)
            Xf(t[a]);
      }
    }
    var uc = function(e, t) {
      return e(t);
    }, yn = function(e, t, a, l, f) {
      return e(t, a, l, f);
    }, sc = function() {
    }, ed = uc, Oi = !1, cc = !1;
    function fc() {
      var e = Op();
      e && (sc(), Jf());
    }
    function Ku(e, t) {
      if (Oi)
        return e(t);
      Oi = !0;
      try {
        return uc(e, t);
      } finally {
        Oi = !1, fc();
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
    function Wl(e, t, a, l, f) {
      var p = Oi;
      Oi = !0;
      try {
        return yn(e, t, a, l, f);
      } finally {
        Oi = p, Oi || fc();
      }
    }
    function Np(e) {
      Oi || sc();
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
    function Kl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var l = Oh(a);
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
    function Dp(e, t, a, l, f, p, y, b, w) {
      var O = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, O);
      } catch (A) {
        this.onError(A);
      }
    }
    var pc = Dp;
    if (typeof window != "undefined" && typeof window.dispatchEvent == "function" && typeof document != "undefined" && typeof document.createEvent == "function") {
      var fo = document.createElement("react");
      pc = function(t, a, l, f, p, y, b, w, O) {
        if (typeof document == "undefined")
          throw Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var A = document.createEvent("Event"), X = !1, H = !0, J = window.event, fe = Object.getOwnPropertyDescriptor(window, "event");
        function _e() {
          fo.removeEventListener(ae, Pt, !1), typeof window.event != "undefined" && window.hasOwnProperty("event") && (window.event = J);
        }
        var lt = Array.prototype.slice.call(arguments, 3);
        function Pt() {
          X = !0, _e(), a.apply(l, lt), H = !1;
        }
        var ht, Jt = !1, Sn = !1;
        function Z(G) {
          if (ht = G.error, Jt = !0, ht === null && G.colno === 0 && G.lineno === 0 && (Sn = !0), G.defaultPrevented && ht != null && typeof ht == "object")
            try {
              ht._suppressLogging = !0;
            } catch (be) {
            }
        }
        var ae = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", Z), fo.addEventListener(ae, Pt, !1), A.initEvent(ae, !1, !1), fo.dispatchEvent(A), fe && Object.defineProperty(window, "event", fe), X && H && (Jt ? Sn && (ht = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ht = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ht)), window.removeEventListener("error", Z), !X)
          return _e(), Dp.apply(this, arguments);
      };
    }
    var Ap = pc, vo = !1, hc = null, el = !1, Ja = null, mc = {
      onError: function(e) {
        vo = !0, hc = e;
      }
    };
    function Hr(e, t, a, l, f, p, y, b, w) {
      vo = !1, hc = null, Ap.apply(mc, arguments);
    }
    function Lp(e, t, a, l, f, p, y, b, w) {
      if (Hr.apply(this, arguments), vo) {
        var O = Fr();
        el || (el = !0, Ja = O);
      }
    }
    function tl() {
      if (el) {
        var e = Ja;
        throw el = !1, Ja = null, e;
      }
    }
    function ua() {
      return vo;
    }
    function Fr() {
      if (vo) {
        var e = hc;
        return vo = !1, hc = null, e;
      } else
        throw Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ni(e) {
      return e._reactInternals;
    }
    function Pp(e) {
      return e._reactInternals !== void 0;
    }
    function rd(e, t) {
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
    ), po = (
      /*           */
      6
    ), Rn = (
      /*                     */
      8
    ), Sr = (
      /*                 */
      16
    ), ho = (
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
    ), Sa = (
      /*                    */
      1024
    ), Ip = (
      /*           */
      1028
    ), ad = (
      /*          */
      932
    ), nl = (
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
    ), py = d.ReactCurrentOwner;
    function mo(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var l = t;
        do
          t = l, (t.flags & (Tt | Sa)) !== un && (a = t.return), l = t.return;
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
    function zp(e) {
      return e.tag === _ ? e.stateNode.containerInfo : null;
    }
    function yc(e) {
      return mo(e) === e;
    }
    function $p(e) {
      {
        var t = py.current;
        if (t !== null && t.tag === E) {
          var a = t, l = a.stateNode;
          l._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Re(a.type) || "A component"), l._warnedAboutRefsInRender = !0;
        }
      }
      var f = Ni(e);
      return f ? mo(f) === f : !1;
    }
    function id(e) {
      if (mo(e) !== e)
        throw Error("Unable to find node on an unmounted component.");
    }
    function od(e) {
      var t = e.alternate;
      if (!t) {
        var a = mo(e);
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
              return id(p), e;
            if (w === f)
              return id(p), t;
            w = w.sibling;
          }
          throw Error("Unable to find node on an unmounted component.");
        }
        if (l.return !== f.return)
          l = p, f = y;
        else {
          for (var O = !1, A = p.child; A; ) {
            if (A === l) {
              O = !0, l = p, f = y;
              break;
            }
            if (A === f) {
              O = !0, f = p, l = y;
              break;
            }
            A = A.sibling;
          }
          if (!O) {
            for (A = y.child; A; ) {
              if (A === l) {
                O = !0, l = y, f = p;
                break;
              }
              if (A === f) {
                O = !0, f = y, l = p;
                break;
              }
              A = A.sibling;
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
    function ld(e) {
      var t = od(e);
      if (!t)
        return null;
      for (var a = t; ; ) {
        if (a.tag === D || a.tag === P)
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
        if (a.tag === D || a.tag === P || we)
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
    function Up(e, t) {
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
    function jp(e) {
      Qu = e;
    }
    var Er;
    function Ql(e) {
      Er = e;
    }
    var sd;
    function rl(e) {
      sd = e;
    }
    var al = !1, lr = [], Di = null, go = null, ur = null, yo = /* @__PURE__ */ new Map(), bo = /* @__PURE__ */ new Map(), ni = [];
    function Sc() {
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
    function Cc(e) {
      return cd.indexOf(e) > -1;
    }
    function fd(e, t, a, l, f) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a | Mp,
        nativeEvent: f,
        targetContainers: [l]
      };
    }
    function il(e, t, a, l, f) {
      var p = fd(e, t, a, l, f);
      lr.push(p);
    }
    function sa(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Di = null;
          break;
        case "dragenter":
        case "dragleave":
          go = null;
          break;
        case "mouseover":
        case "mouseout":
          ur = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          yo.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var l = t.pointerId;
          bo.delete(l);
          break;
        }
      }
    }
    function Ca(e, t, a, l, f, p) {
      if (e === null || e.nativeEvent !== p) {
        var y = fd(t, a, l, f, p);
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
    function dd(e, t, a, l, f) {
      switch (t) {
        case "focusin": {
          var p = f;
          return Di = Ca(Di, e, t, a, l, p), !0;
        }
        case "dragenter": {
          var y = f;
          return go = Ca(go, e, t, a, l, y), !0;
        }
        case "mouseover": {
          var b = f;
          return ur = Ca(ur, e, t, a, l, b), !0;
        }
        case "pointerover": {
          var w = f, O = w.pointerId;
          return yo.set(O, Ca(yo.get(O) || null, e, t, a, l, w)), !0;
        }
        case "gotpointercapture": {
          var A = f, X = A.pointerId;
          return bo.set(X, Ca(bo.get(X) || null, e, t, a, l, A)), !0;
        }
      }
      return !1;
    }
    function Hp(e) {
      var t = _s(e.target);
      if (t !== null) {
        var a = mo(t);
        if (a !== null) {
          var l = a.tag;
          if (l === U) {
            var f = gc(a);
            if (f !== null) {
              e.blockedOn = f, sd(e.lanePriority, function() {
                u.unstable_runWithPriority(e.priority, function() {
                  Er(a);
                });
              });
              return;
            }
          } else if (l === _) {
            var p = a.stateNode;
            if (p.hydrate) {
              e.blockedOn = zp(a);
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
    function Ai(e, t, a) {
      Pa(e) && a.delete(t);
    }
    function Fp() {
      for (al = !1; lr.length > 0; ) {
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
      Di !== null && Pa(Di) && (Di = null), go !== null && Pa(go) && (go = null), ur !== null && Pa(ur) && (ur = null), yo.forEach(Ai), bo.forEach(Ai);
    }
    function Li(e, t) {
      e.blockedOn === t && (e.blockedOn = null, al || (al = !0, u.unstable_scheduleCallback(u.unstable_NormalPriority, Fp)));
    }
    function vd(e) {
      if (lr.length > 0) {
        Li(lr[0], e);
        for (var t = 1; t < lr.length; t++) {
          var a = lr[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Di !== null && Li(Di, e), go !== null && Li(go, e), ur !== null && Li(ur, e);
      var l = function(b) {
        return Li(b, e);
      };
      yo.forEach(l), bo.forEach(l);
      for (var f = 0; f < ni.length; f++) {
        var p = ni[f];
        p.blockedOn === e && (p.blockedOn = null);
      }
      for (; ni.length > 0; ) {
        var y = ni[0];
        if (y.blockedOn !== null)
          break;
        Hp(y), y.blockedOn === null && ni.shift();
      }
    }
    var Ec = 0, Xu = 1, Xl = 2;
    function Zu(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var ol = {
      animationend: Zu("Animation", "AnimationEnd"),
      animationiteration: Zu("Animation", "AnimationIteration"),
      animationstart: Zu("Animation", "AnimationStart"),
      transitionend: Zu("Transition", "TransitionEnd")
    }, wc = {}, xc = {};
    Xe && (xc = document.createElement("div").style, "AnimationEvent" in window || (delete ol.animationend.animation, delete ol.animationiteration.animation, delete ol.animationstart.animation), "TransitionEvent" in window || delete ol.transitionend.transition);
    function ll(e) {
      if (wc[e])
        return wc[e];
      if (!ol[e])
        return e;
      var t = ol[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in xc)
          return wc[e] = t[a];
      return e;
    }
    var Zl = ll("animationend"), Ju = ll("animationiteration"), pd = ll("animationstart"), es = ll("transitionend"), hd = /* @__PURE__ */ new Map(), ul = /* @__PURE__ */ new Map(), ri = [
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
    ], ts = ["change", "selectionchange", "textInput", "compositionstart", "compositionend", "compositionupdate"], ns = ["drag", "drag", "dragenter", "dragEnter", "dragexit", "dragExit", "dragleave", "dragLeave", "dragover", "dragOver", "mousemove", "mouseMove", "mouseout", "mouseOut", "mouseover", "mouseOver", "pointermove", "pointerMove", "pointerout", "pointerOut", "pointerover", "pointerOver", "scroll", "scroll", "toggle", "toggle", "touchmove", "touchMove", "wheel", "wheel"], sl = ["abort", "abort", Zl, "animationEnd", Ju, "animationIteration", pd, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", es, "transitionEnd", "waiting", "waiting"];
    function rs(e, t) {
      for (var a = 0; a < e.length; a += 2) {
        var l = e[a], f = e[a + 1], p = f[0].toUpperCase() + f.slice(1), y = "on" + p;
        ul.set(l, t), hd.set(l, y), ze(y, [l]);
      }
    }
    function Jl(e, t) {
      for (var a = 0; a < e.length; a++)
        ul.set(e[a], t);
    }
    function Bp(e) {
      var t = ul.get(e);
      return t === void 0 ? Xl : t;
    }
    function md() {
      rs(ri, Ec), rs(ns, Xu), rs(sl, Xl), Jl(ts, Ec);
    }
    var $n = u.unstable_now;
    if (!(c.__interactionsRef != null && c.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
    var as = 99, ai = 98, Pi = 97, ii = 96, gd = 95, Vp = 90;
    $n();
    var So = 15, is = 14, os = 13, eu = 12, cl = 11, Co = 10, tu = 9, sr = 8, nu = 7, _n = 6, cr = 5, fr = 4, ls = 3, Eo = 2, Vr = 1, Ii = 0, yd = 31, ue = (
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
    ), fl = (
      /*      */
      4
    ), us = (
      /*                    */
      24
    ), bd = (
      /*           */
      32
    ), Sd = (
      /*                  */
      192
    ), ru = (
      /*            */
      256
    ), au = (
      /*                   */
      3584
    ), Cd = (
      /*                */
      4096
    ), $i = (
      /*                       */
      4186112
    ), iu = (
      /*                            */
      62914560
    ), wo = (
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
    ), kn = -1;
    function hy(e) {
    }
    var hn = sr;
    function ou(e) {
      if ((Ft & e) !== ue)
        return hn = So, Ft;
      if ((zi & e) !== ue)
        return hn = is, zi;
      if ((fl & e) !== ue)
        return hn = os, fl;
      var t = us & e;
      if (t !== ue)
        return hn = eu, t;
      if ((e & bd) !== ue)
        return hn = cl, bd;
      var a = Sd & e;
      if (a !== ue)
        return hn = Co, a;
      if ((e & ru) !== ue)
        return hn = tu, ru;
      var l = au & e;
      if (l !== ue)
        return hn = sr, l;
      if ((e & Cd) !== ue)
        return hn = nu, Cd;
      var f = $i & e;
      if (f !== ue)
        return hn = _n, f;
      var p = iu & e;
      if (p !== ue)
        return hn = cr, p;
      if (e & Tc)
        return hn = fr, Tc;
      if ((e & Ed) !== ue)
        return hn = ls, Ed;
      var y = Rc & e;
      return y !== ue ? (hn = Eo, y) : (Ia & e) !== ue ? (hn = Vr, Ia) : (h("Should have found matching lanes. This is a bug in React."), hn = sr, e);
    }
    function wd(e) {
      switch (e) {
        case as:
          return So;
        case ai:
          return Co;
        case Pi:
        case ii:
          return sr;
        case gd:
          return Eo;
        default:
          return Ii;
      }
    }
    function _c(e) {
      switch (e) {
        case So:
        case is:
          return as;
        case os:
        case eu:
        case cl:
        case Co:
          return ai;
        case tu:
        case sr:
        case nu:
        case _n:
        case fr:
        case cr:
          return Pi;
        case ls:
        case Eo:
        case Vr:
          return gd;
        case Ii:
          return Vp;
        default:
          throw Error("Invalid update priority: " + e + ". This is a bug in React.");
      }
    }
    function cs(e, t) {
      var a = e.pendingLanes;
      if (a === ue)
        return hn = Ii, ue;
      var l = ue, f = Ii, p = e.expiredLanes, y = e.suspendedLanes, b = e.pingedLanes;
      if (p !== ue)
        l = p, f = hn = So;
      else {
        var w = a & ss;
        if (w !== ue) {
          var O = w & ~y;
          if (O !== ue)
            l = ou(O), f = hn;
          else {
            var A = w & b;
            A !== ue && (l = ou(A), f = hn);
          }
        } else {
          var X = a & ~y;
          X !== ue ? (l = ou(X), f = hn) : b !== ue && (l = ou(b), f = hn);
        }
      }
      if (l === ue)
        return ue;
      if (l = a & qp(l), t !== ue && t !== l && // If we already suspended with a delay, then interrupting is fine. Don't
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
          var lt = xo(_e), Pt = 1 << lt;
          l |= fe[lt], _e &= ~Pt;
        }
      return l;
    }
    function my(e, t) {
      for (var a = e.eventTimes, l = kn; t > 0; ) {
        var f = xo(t), p = 1 << f, y = a[f];
        y > l && (l = y), t &= ~p;
      }
      return l;
    }
    function gy(e, t) {
      ou(e);
      var a = hn;
      return a >= Co ? t + 250 : a >= _n ? t + 5e3 : kn;
    }
    function yy(e, t) {
      for (var a = e.pendingLanes, l = e.suspendedLanes, f = e.pingedLanes, p = e.expirationTimes, y = a; y > 0; ) {
        var b = xo(y), w = 1 << b, O = p[b];
        O === kn ? ((w & l) === ue || (w & f) !== ue) && (p[b] = gy(w, t)) : O <= t && (e.expiredLanes |= w), y &= ~w;
      }
    }
    function Ea(e) {
      var t = e.pendingLanes & ~Ia;
      return t !== ue ? t : t & Ia ? Ia : ue;
    }
    function Zr() {
      return hn;
    }
    function xd(e) {
      return (e & ss) !== ue;
    }
    function Td(e) {
      return (e & iu) === e;
    }
    function Wp(e) {
      return (e & $i) === e;
    }
    function lu(e, t) {
      switch (e) {
        case Ii:
          break;
        case So:
          return Ft;
        case is:
          return zi;
        case eu: {
          var a = dr(us & ~t);
          return a === qn ? lu(Co, t) : a;
        }
        case Co: {
          var l = dr(Sd & ~t);
          return l === qn ? lu(sr, t) : l;
        }
        case sr: {
          var f = dr(au & ~t);
          return f === qn && (f = dr($i & ~t), f === qn && (f = dr(au))), f;
        }
        case _n:
        case cr:
          break;
        case Eo:
          var p = dr(Rc & ~t);
          return p === qn && (p = dr(Rc)), p;
      }
      throw Error("Invalid update priority: " + e + ". This is a bug in React.");
    }
    function Kp(e, t) {
      var a = dr($i & ~t);
      return a === qn && (a = dr($i & ~e), a === qn && (a = dr($i))), a;
    }
    function Rd(e) {
      var t = dr(iu & ~e);
      return t === qn && (t = dr(iu)), t;
    }
    function Gp(e) {
      return e & -e;
    }
    function _d(e) {
      var t = 31 - Zp(e);
      return t < 0 ? ue : 1 << t;
    }
    function qp(e) {
      return (_d(e) << 1) - 1;
    }
    function dr(e) {
      return Gp(e);
    }
    function xo(e) {
      return 31 - Zp(e);
    }
    function Yp(e) {
      return xo(e);
    }
    function wr(e, t) {
      return (e & t) !== ue;
    }
    function To(e, t) {
      return (e & t) === t;
    }
    function tn(e, t) {
      return e | t;
    }
    function uu(e, t) {
      return e & ~t;
    }
    function by(e) {
      return e;
    }
    function Ui(e, t) {
      return e !== qn && e < t ? e : t;
    }
    function kc(e) {
      for (var t = [], a = 0; a < yd; a++)
        t.push(e);
      return t;
    }
    function su(e, t, a) {
      e.pendingLanes |= t;
      var l = t - 1;
      e.suspendedLanes &= l, e.pingedLanes &= l;
      var f = e.eventTimes, p = Yp(t);
      f[p] = a;
    }
    function Qp(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, l = t; l > 0; ) {
        var f = xo(l), p = 1 << f;
        a[f] = kn, l &= ~p;
      }
    }
    function kd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function fs(e) {
      e.expiredLanes |= us & e.pendingLanes;
    }
    function Sy(e) {
      return (e & us) !== ue;
    }
    function Xp(e, t) {
      e.mutableReadLanes |= t & e.pendingLanes;
    }
    function Md(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var l = e.entanglements, f = e.eventTimes, p = e.expirationTimes, y = a; y > 0; ) {
        var b = xo(y), w = 1 << b;
        l[b] = ue, f[b] = kn, p[b] = kn, y &= ~w;
      }
    }
    function Od(e, t) {
      e.entangledLanes |= t;
      for (var a = e.entanglements, l = t; l > 0; ) {
        var f = xo(l), p = 1 << f;
        a[f] |= t, l &= ~p;
      }
    }
    var Zp = Math.clz32 ? Math.clz32 : Cy, Jp = Math.log, eh = Math.LN2;
    function Cy(e) {
      return e === 0 ? 32 : 31 - (Jp(e) / eh | 0) | 0;
    }
    var th = u.unstable_UserBlockingPriority, Ey = u.unstable_runWithPriority, Nd = !0;
    function Dd(e) {
      Nd = !!e;
    }
    function nh() {
      return Nd;
    }
    function rh(e, t, a) {
      var l = Bp(t), f;
      switch (l) {
        case Ec:
          f = ah;
          break;
        case Xu:
          f = ih;
          break;
        case Xl:
        default:
          f = ds;
          break;
      }
      return f.bind(null, t, a, e);
    }
    function ah(e, t, a, l) {
      Np(l.timeStamp), Wl(ds, e, t, a, l);
    }
    function ih(e, t, a, l) {
      Ey(th, ds.bind(null, e, t, a, l));
    }
    function ds(e, t, a, l) {
      if (Nd) {
        var f = !0;
        if (f = (t & Xo) === 0, f && Sc() && Cc(e)) {
          il(
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
            il(p, e, t, a, l);
            return;
          }
          if (dd(p, e, t, a, l))
            return;
          sa(e, l);
        }
        Q1(e, t, l, null, a);
      }
    }
    function vs(e, t, a, l) {
      var f = Wu(l), p = _s(f);
      if (p !== null) {
        var y = mo(p);
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
              return zp(y);
            p = null;
          } else
            y !== p && (p = null);
        }
      }
      return Q1(e, t, l, p, a), null;
    }
    function oh(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Ad(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function lh(e, t, a, l) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: l
      }), a;
    }
    function wy(e, t, a, l) {
      return e.addEventListener(t, a, {
        passive: l
      }), a;
    }
    var ps = null, cu = null, dl = null;
    function Ct(e) {
      return ps = e, cu = xr(), !0;
    }
    function Wr() {
      ps = null, cu = null, dl = null;
    }
    function Yn() {
      if (dl)
        return dl;
      var e, t = cu, a = t.length, l, f = xr(), p = f.length;
      for (e = 0; e < a && t[e] === f[e]; e++)
        ;
      var y = a - e;
      for (l = 1; l <= y && t[a - l] === f[p - l]; l++)
        ;
      var b = l > 1 ? 1 - l : void 0;
      return dl = f.slice(e, b), dl;
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
    }, vl = Nr(za), li = o({}, za, {
      view: 0,
      detail: 0
    }), Ld = Nr(li), hs, ms, pl;
    function du(e) {
      e !== pl && (pl && e.type === "mousemove" ? (hs = e.screenX - pl.screenX, ms = e.screenY - pl.screenY) : (hs = 0, ms = 0), pl = e);
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
    }), gs = Nr(je), Pd = o({}, je, {
      dataTransfer: 0
    }), ui = Nr(Pd), Ro = o({}, li, {
      relatedTarget: 0
    }), hl = Nr(Ro), ys = o({}, za, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Id = Nr(ys), zd = o({}, za, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), ji = Nr(zd), bs = o({}, za, {
      data: 0
    }), Mc = Nr(bs), Oc = Mc, Hi = {
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
        var t = Hi[e.key] || e.key;
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
    var _o = o({}, li, {
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
    }), Ac = Nr(_o), wa = o({}, je, {
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
    }), $d = Nr(wa), vu = o({}, li, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: si
    }), Ud = Nr(vu), xy = o({}, za, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), uh = Nr(xy), sh = o({}, je, {
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
    }), Lc = Nr(sh), jd = [9, 13, 27, 32], ml = 229, Pc = Xe && "CompositionEvent" in window, pu = null;
    Xe && "documentMode" in document && (pu = document.documentMode);
    var Cs = Xe && "TextEvent" in window && !pu, ch = Xe && (!Pc || pu && pu > 8 && pu <= 11), fh = 32, Hd = String.fromCharCode(fh);
    function dh() {
      ze("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ze("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ze("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), ze("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ko = !1;
    function Ty(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Ry(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Mo(e, t) {
      return e === "keydown" && t.keyCode === ml;
    }
    function vh(e, t) {
      switch (e) {
        case "keyup":
          return jd.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== ml;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Fd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ph(e) {
      return e.locale === "ko";
    }
    var gl = !1;
    function Oo(e, t, a, l, f) {
      var p, y;
      if (Pc ? p = Ry(t) : gl ? vh(t, l) && (p = "onCompositionEnd") : Mo(t, l) && (p = "onCompositionStart"), !p)
        return null;
      ch && !ph(l) && (!gl && p === "onCompositionStart" ? gl = Ct(f) : p === "onCompositionEnd" && gl && (y = Yn()));
      var b = bh(a, p);
      if (b.length > 0) {
        var w = new Mc(p, t, null, l, f);
        if (e.push({
          event: w,
          listeners: b
        }), y)
          w.data = y;
        else {
          var O = Fd(l);
          O !== null && (w.data = O);
        }
      }
    }
    function _y(e, t) {
      switch (e) {
        case "compositionend":
          return Fd(t);
        case "keypress":
          var a = t.which;
          return a !== fh ? null : (ko = !0, Hd);
        case "textInput":
          var l = t.data;
          return l === Hd && ko ? null : l;
        default:
          return null;
      }
    }
    function ky(e, t) {
      if (gl) {
        if (e === "compositionend" || !Pc && vh(e, t)) {
          var a = Yn();
          return Wr(), gl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Ty(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ch && !ph(t) ? null : t.data;
        default:
          return null;
      }
    }
    function hh(e, t, a, l, f) {
      var p;
      if (Cs ? p = _y(t, l) : p = ky(t, l), !p)
        return null;
      var y = bh(a, "onBeforeInput");
      if (y.length > 0) {
        var b = new Oc("onBeforeInput", "beforeinput", null, l, f);
        e.push({
          event: b,
          listeners: y
        }), b.data = p;
      }
    }
    function My(e, t, a, l, f, p, y) {
      Oo(e, t, a, l, f), hh(e, t, a, l, f);
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
    function Oy(e) {
      if (!Xe)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var l = document.createElement("div");
        l.setAttribute(t, "return;"), a = typeof l[t] == "function";
      }
      return a;
    }
    function No() {
      ze("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function Es(e, t, a, l) {
      Vl(l);
      var f = bh(t, "onChange");
      if (f.length > 0) {
        var p = new vl("onChange", "change", null, a, l);
        e.push({
          event: p,
          listeners: f
        });
      }
    }
    var ci = null, yl = null;
    function Bd(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function Vd(e) {
      var t = [];
      Es(t, yl, e, Wu(e)), Ku(Ny, t);
    }
    function Ny(e) {
      V1(e, 0);
    }
    function zc(e) {
      var t = Kc(e);
      if (no(t))
        return e;
    }
    function $c(e, t) {
      if (e === "change")
        return t;
    }
    var Uc = !1;
    Xe && (Uc = Oy("input") && (!document.documentMode || document.documentMode > 9));
    function mh(e, t) {
      ci = e, yl = t, ci.attachEvent("onpropertychange", gh);
    }
    function jc() {
      ci && (ci.detachEvent("onpropertychange", gh), ci = null, yl = null);
    }
    function gh(e) {
      e.propertyName === "value" && zc(yl) && Vd(e);
    }
    function Wd(e, t, a) {
      e === "focusin" ? (jc(), mh(t, a)) : e === "focusout" && jc();
    }
    function ws(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return zc(yl);
    }
    function Dy(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Hc(e, t) {
      if (e === "click")
        return zc(t);
    }
    function yh(e, t) {
      if (e === "input" || e === "change")
        return zc(t);
    }
    function Ay(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || io(e, "number", e.value);
    }
    function xs(e, t, a, l, f, p, y) {
      var b = a ? Kc(a) : window, w, O;
      if (Bd(b) ? w = $c : Ic(b) ? Uc ? w = yh : (w = ws, O = Wd) : Dy(b) && (w = Hc), w) {
        var A = w(t, a);
        if (A) {
          Es(e, A, l, f);
          return;
        }
      }
      O && O(t, b, a), t === "focusout" && Ay(b);
    }
    function Ly() {
      Ke("onMouseEnter", ["mouseout", "mouseover"]), Ke("onMouseLeave", ["mouseout", "mouseover"]), Ke("onPointerEnter", ["pointerout", "pointerover"]), Ke("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function Fc(e, t, a, l, f, p, y) {
      var b = t === "mouseover" || t === "pointerover", w = t === "mouseout" || t === "pointerout";
      if (b && !(p & Mp)) {
        var O = l.relatedTarget || l.fromElement;
        if (O && (_s(O) || Mh(O)))
          return;
      }
      if (!(!w && !b)) {
        var A;
        if (f.window === f)
          A = f;
        else {
          var X = f.ownerDocument;
          X ? A = X.defaultView || X.parentWindow : A = window;
        }
        var H, J;
        if (w) {
          var fe = l.relatedTarget || l.toElement;
          if (H = a, J = fe ? _s(fe) : null, J !== null) {
            var _e = mo(J);
            (J !== _e || J.tag !== D && J.tag !== P) && (J = null);
          }
        } else
          H = null, J = a;
        if (H !== J) {
          var lt = gs, Pt = "onMouseLeave", ht = "onMouseEnter", Jt = "mouse";
          (t === "pointerout" || t === "pointerover") && (lt = $d, Pt = "onPointerLeave", ht = "onPointerEnter", Jt = "pointer");
          var Sn = H == null ? A : Kc(H), Z = J == null ? A : Kc(J), ae = new lt(Pt, Jt + "leave", H, l, f);
          ae.target = Sn, ae.relatedTarget = Z;
          var G = null, be = _s(f);
          if (be === a) {
            var De = new lt(ht, Jt + "enter", J, l, f);
            De.target = Z, De.relatedTarget = Sn, G = De;
          }
          Sk(e, ae, G, H, J);
        }
      }
    }
    function n(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var i = typeof Object.is == "function" ? Object.is : n, s = Object.prototype.hasOwnProperty;
    function v(e, t) {
      if (i(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), l = Object.keys(t);
      if (a.length !== l.length)
        return !1;
      for (var f = 0; f < a.length; f++)
        if (!s.call(t, a[f]) || !i(e[a[f]], t[a[f]]))
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
        if (a.nodeType === ki) {
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
    function M(e) {
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
      var p = 0, y = -1, b = -1, w = 0, O = 0, A = e, X = null;
      e:
        for (; ; ) {
          for (var H = null; A === t && (a === 0 || A.nodeType === ki) && (y = p + a), A === l && (f === 0 || A.nodeType === ki) && (b = p + f), A.nodeType === ki && (p += A.nodeValue.length), (H = A.firstChild) !== null; )
            X = A, A = H;
          for (; ; ) {
            if (A === e)
              break e;
            if (X === t && ++w === a && (y = p), X === l && ++O === f && (b = p), (H = A.nextSibling) !== null)
              break;
            A = X, X = A.parentNode;
          }
          A = H;
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
        var O = R(e, y), A = R(e, b);
        if (O && A) {
          if (f.rangeCount === 1 && f.anchorNode === O.node && f.anchorOffset === O.offset && f.focusNode === A.node && f.focusOffset === A.offset)
            return;
          var X = a.createRange();
          X.setStart(O.node, O.offset), f.removeAllRanges(), y > b ? (f.addRange(X), f.extend(A.node, A.offset)) : (X.setEnd(A.node, A.offset), f.addRange(X));
        }
      }
    }
    function Le(e) {
      return e && e.nodeType === ki;
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
      for (var e = window, t = Ri(); t instanceof e.HTMLIFrameElement; ) {
        if (Je(t))
          e = t.contentWindow;
        else
          return t;
        t = Ri(e.document);
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
        selectionRange: ft(e) ? K(e) : null
      };
    }
    function B(e) {
      var t = bt(), a = e.focusedElem, l = e.selectionRange;
      if (t !== a && me(a)) {
        l !== null && ft(a) && le(a, l);
        for (var f = [], p = a; p = p.parentNode; )
          p.nodeType === ya && f.push({
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
    function le(e, t) {
      var a = t.start, l = t.end;
      l === void 0 && (l = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(l, e.value.length)) : ee(e, t);
    }
    var ce = Xe && "documentMode" in document && document.documentMode <= 11;
    function Rt() {
      ze("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var He = null, wt = null, Lt = null, _t = !1;
    function Do(e) {
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
    function Py(e) {
      return e.window === e ? e.document : e.nodeType === uo ? e : e.ownerDocument;
    }
    function H1(e, t, a) {
      var l = Py(a);
      if (!(_t || He == null || He !== Ri(l))) {
        var f = Do(He);
        if (!Lt || !v(Lt, f)) {
          Lt = f;
          var p = bh(wt, "onSelect");
          if (p.length > 0) {
            var y = new vl("onSelect", "select", null, t, a);
            e.push({
              event: y,
              listeners: p
            }), y.target = He;
          }
        }
      }
    }
    function vk(e, t, a, l, f, p, y) {
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
          _t = !1, H1(e, l, f);
          break;
        case "selectionchange":
          if (ce)
            break;
        case "keydown":
        case "keyup":
          H1(e, l, f);
      }
    }
    function pk(e, t, a, l, f, p, y) {
      var b = hd.get(t);
      if (b !== void 0) {
        var w = vl, O = t;
        switch (t) {
          case "keypress":
            if (oi(l) === 0)
              return;
          case "keydown":
          case "keyup":
            w = Ac;
            break;
          case "focusin":
            O = "focus", w = hl;
            break;
          case "focusout":
            O = "blur", w = hl;
            break;
          case "beforeblur":
          case "afterblur":
            w = hl;
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
            w = Ud;
            break;
          case Zl:
          case Ju:
          case pd:
            w = Id;
            break;
          case es:
            w = uh;
            break;
          case "scroll":
            w = Ld;
            break;
          case "wheel":
            w = Lc;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = ji;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = $d;
            break;
        }
        var A = (p & Xo) !== 0;
        {
          var X = !A && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", H = yk(a, b, l.type, A, X);
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
    md(), Ly(), No(), Rt(), dh();
    function hk(e, t, a, l, f, p, y) {
      pk(e, t, a, l, f, p);
      var b = (p & Bl) === 0;
      b && (Fc(e, t, a, l, f, p), xs(e, t, a, l, f), vk(e, t, a, l, f), My(e, t, a, l, f));
    }
    var Kd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], F1 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Kd));
    function B1(e, t, a) {
      var l = e.type || "unknown-event";
      e.currentTarget = a, Lp(l, t, void 0, e), e.currentTarget = null;
    }
    function mk(e, t, a) {
      var l;
      if (a)
        for (var f = t.length - 1; f >= 0; f--) {
          var p = t[f], y = p.instance, b = p.currentTarget, w = p.listener;
          if (y !== l && e.isPropagationStopped())
            return;
          B1(e, w, b), l = y;
        }
      else
        for (var O = 0; O < t.length; O++) {
          var A = t[O], X = A.instance, H = A.currentTarget, J = A.listener;
          if (X !== l && e.isPropagationStopped())
            return;
          B1(e, J, H), l = X;
        }
    }
    function V1(e, t) {
      for (var a = (t & Xo) !== 0, l = 0; l < e.length; l++) {
        var f = e[l], p = f.event, y = f.listeners;
        mk(p, y, a);
      }
      tl();
    }
    function gk(e, t, a, l, f) {
      var p = Wu(a), y = [];
      hk(y, e, l, a, p, t), V1(y, t);
    }
    function Dn(e, t) {
      var a = !1, l = wC(t), f = Z1(e, a);
      l.has(f) || (q1(t, e, Vu, a), l.add(f));
    }
    var W1 = "_reactListening" + Math.random().toString(36).slice(2);
    function K1(e) {
      {
        if (e[W1])
          return;
        e[W1] = !0, ie.forEach(function(t) {
          F1.has(t) || G1(t, !1, e, null), G1(t, !0, e, null);
        });
      }
    }
    function G1(e, t, a, l) {
      var f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, p = a;
      if (e === "selectionchange" && a.nodeType !== uo && (p = a.ownerDocument), l !== null && !t && F1.has(e)) {
        if (e !== "scroll")
          return;
        f |= Vu, p = l;
      }
      var y = wC(p), b = Z1(e, t);
      y.has(b) || (t && (f |= Xo), q1(p, e, f, t), y.add(b));
    }
    function q1(e, t, a, l, f) {
      var p = rh(e, t, a), y = void 0;
      Gu && (t === "touchstart" || t === "touchmove" || t === "wheel") && (y = !0), e = e, l ? y !== void 0 ? lh(e, t, p, y) : Ad(e, t, p) : y !== void 0 ? wy(e, t, p, y) : oh(e, t, p);
    }
    function Y1(e, t) {
      return e === t || e.nodeType === Ur && e.parentNode === t;
    }
    function Q1(e, t, a, l, f) {
      var p = l;
      if (!(t & Qf) && !(t & Vu)) {
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
                if (Y1(O, y))
                  break;
                if (w === N)
                  for (var A = b.return; A !== null; ) {
                    var X = A.tag;
                    if (X === _ || X === N) {
                      var H = A.stateNode.containerInfo;
                      if (Y1(H, y))
                        return;
                    }
                    A = A.return;
                  }
                for (; O !== null; ) {
                  var J = _s(O);
                  if (J === null)
                    return;
                  var fe = J.tag;
                  if (fe === D || fe === P) {
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
    function Gd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function yk(e, t, a, l, f) {
      for (var p = t !== null ? t + "Capture" : null, y = l ? p : t, b = [], w = e, O = null; w !== null; ) {
        var A = w, X = A.stateNode, H = A.tag;
        if (H === D && X !== null && (O = X, y !== null)) {
          var J = Kl(w, y);
          J != null && b.push(Gd(w, J, O));
        }
        if (f)
          break;
        w = w.return;
      }
      return b;
    }
    function bh(e, t) {
      for (var a = t + "Capture", l = [], f = e; f !== null; ) {
        var p = f, y = p.stateNode, b = p.tag;
        if (b === D && y !== null) {
          var w = y, O = Kl(f, a);
          O != null && l.unshift(Gd(f, O, w));
          var A = Kl(f, t);
          A != null && l.push(Gd(f, A, w));
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
      while (e && e.tag !== D);
      return e || null;
    }
    function bk(e, t) {
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
    function X1(e, t, a, l, f) {
      for (var p = t._reactName, y = [], b = a; b !== null && b !== l; ) {
        var w = b, O = w.alternate, A = w.stateNode, X = w.tag;
        if (O !== null && O === l)
          break;
        if (X === D && A !== null) {
          var H = A;
          if (f) {
            var J = Kl(b, p);
            J != null && y.unshift(Gd(b, J, H));
          } else if (!f) {
            var fe = Kl(b, p);
            fe != null && y.push(Gd(b, fe, H));
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
      l !== null && X1(e, t, l, p, !1), f !== null && a !== null && X1(e, a, f, p, !0);
    }
    function Z1(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ta = !1, qd = "dangerouslySetInnerHTML", Sh = "suppressContentEditableWarning", Yd = "suppressHydrationWarning", J1 = "autoFocus", Ts = "children", Rs = "style", Ch = "__html", Vc = ac.html, Iy, Qd, Eh, wh, Xd, eC, xh, tC, Zd, nC;
    {
      Iy = {
        // There are working polyfills for <dialog>. Let people use it.
        dialog: !0,
        // Electron ships a custom <webview> tag to display external web content in
        // an isolated frame and process.
        // This tag is not present in non Electron environments such as JSDom which
        // is often used for testing purposes.
        // @see https://electronjs.org/docs/api/webview-tag
        webview: !0
      }, Eh = function(e, t) {
        xp(e, t), fy(e, t), kp(e, t, {
          registrationNameDependencies: he,
          possibleRegistrationNames: Se
        });
      }, tC = Xe && !document.documentMode;
      var Ck = /\r\n?/g, Ek = /\u0000|\uFFFD/g;
      Zd = function(e) {
        var t = typeof e == "string" ? e : "" + e;
        return t.replace(Ck, `
`).replace(Ek, "");
      }, wh = function(e, t) {
        if (!Ta) {
          var a = Zd(t), l = Zd(e);
          l !== a && (Ta = !0, h('Text content did not match. Server: "%s" Client: "%s"', l, a));
        }
      }, Xd = function(e, t, a) {
        if (!Ta) {
          var l = Zd(a), f = Zd(t);
          f !== l && (Ta = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(f), JSON.stringify(l)));
        }
      }, eC = function(e) {
        if (!Ta) {
          Ta = !0;
          var t = [];
          e.forEach(function(a) {
            t.push(a);
          }), h("Extra attributes from the server: %s", t);
        }
      }, xh = function(e, t) {
        t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
      }, nC = function(e, t) {
        var a = e.namespaceURI === Vc ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
        return a.innerHTML = t, a.innerHTML;
      };
    }
    function rC(e) {
      return e.nodeType === uo ? e : e.ownerDocument;
    }
    function wk() {
    }
    function Th(e) {
      e.onclick = wk;
    }
    function xk(e, t, a, l, f) {
      for (var p in l)
        if (l.hasOwnProperty(p)) {
          var y = l[p];
          if (p === Rs)
            y && Object.freeze(y), Kf(t, y);
          else if (p === qd) {
            var b = y ? y[Ch] : void 0;
            b != null && up(t, b);
          } else if (p === Ts)
            if (typeof y == "string") {
              var w = e !== "textarea" || y !== "";
              w && oc(t, y);
            } else
              typeof y == "number" && oc(t, "" + y);
          else
            p === Sh || p === Yd || p === J1 || (he.hasOwnProperty(p) ? y != null && (typeof y != "function" && xh(p, y), p === "onScroll" && Dn("scroll", t)) : y != null && st(t, p, y, f));
        }
    }
    function Tk(e, t, a, l) {
      for (var f = 0; f < t.length; f += 2) {
        var p = t[f], y = t[f + 1];
        p === Rs ? Kf(e, y) : p === qd ? up(e, y) : p === Ts ? oc(e, y) : st(e, p, y, l);
      }
    }
    function Rk(e, t, a, l) {
      var f, p = rC(a), y, b = l;
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
          var A = y;
          t.multiple ? A.multiple = !0 : t.size && (A.size = t.size);
        }
      } else
        y = p.createElementNS(b, e);
      return b === Vc && !f && Object.prototype.toString.call(y) === "[object HTMLUnknownElement]" && !Object.prototype.hasOwnProperty.call(Iy, e) && (Iy[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), y;
    }
    function _k(e, t) {
      return rC(t).createTextNode(e);
    }
    function kk(e, t, a, l) {
      var f = Aa(t, a);
      Eh(t, a);
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
          op(e, a), p = If(e, a);
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
      switch (lc(t, p), xk(t, e, l, p, f), t) {
        case "input":
          Da(e), Za(e, a, !1);
          break;
        case "textarea":
          Da(e), Xr(e);
          break;
        case "option":
          Qg(e, a);
          break;
        case "select":
          lo(e, a);
          break;
        default:
          typeof p.onClick == "function" && Th(e);
          break;
      }
    }
    function Mk(e, t, a, l, f) {
      Eh(t, l);
      var p = null, y, b;
      switch (t) {
        case "input":
          y = ct(e, a), b = ct(e, l), p = [];
          break;
        case "option":
          y = If(e, a), b = If(e, l), p = [];
          break;
        case "select":
          y = zu(e, a), b = zu(e, l), p = [];
          break;
        case "textarea":
          y = $l(e, a), b = $l(e, l), p = [];
          break;
        default:
          y = a, b = l, typeof y.onClick != "function" && typeof b.onClick == "function" && Th(e);
          break;
      }
      lc(t, b);
      var w, O, A = null;
      for (w in y)
        if (!(b.hasOwnProperty(w) || !y.hasOwnProperty(w) || y[w] == null))
          if (w === Rs) {
            var X = y[w];
            for (O in X)
              X.hasOwnProperty(O) && (A || (A = {}), A[O] = "");
          } else
            w === qd || w === Ts || w === Sh || w === Yd || w === J1 || (he.hasOwnProperty(w) ? p || (p = []) : (p = p || []).push(w, null));
      for (w in b) {
        var H = b[w], J = y != null ? y[w] : void 0;
        if (!(!b.hasOwnProperty(w) || H === J || H == null && J == null))
          if (w === Rs)
            if (H && Object.freeze(H), J) {
              for (O in J)
                J.hasOwnProperty(O) && (!H || !H.hasOwnProperty(O)) && (A || (A = {}), A[O] = "");
              for (O in H)
                H.hasOwnProperty(O) && J[O] !== H[O] && (A || (A = {}), A[O] = H[O]);
            } else
              A || (p || (p = []), p.push(w, A)), A = H;
          else if (w === qd) {
            var fe = H ? H[Ch] : void 0, _e = J ? J[Ch] : void 0;
            fe != null && _e !== fe && (p = p || []).push(w, fe);
          } else
            w === Ts ? (typeof H == "string" || typeof H == "number") && (p = p || []).push(w, "" + H) : w === Sh || w === Yd || (he.hasOwnProperty(w) ? (H != null && (typeof H != "function" && xh(w, H), w === "onScroll" && Dn("scroll", e)), !p && J !== H && (p = [])) : typeof H == "object" && H !== null && H.$$typeof === gn ? H.toString() : (p = p || []).push(w, H));
      }
      return A && (ly(A, b[Rs]), (p = p || []).push(Rs, A)), p;
    }
    function Ok(e, t, a, l, f) {
      a === "input" && f.type === "radio" && f.name != null && Cn(e, f);
      var p = Aa(a, l), y = Aa(a, f);
      switch (Tk(e, t, p, y), a) {
        case "input":
          ao(e, f);
          break;
        case "textarea":
          jf(e, f);
          break;
        case "select":
          $f(e, f);
          break;
      }
    }
    function Nk(e) {
      {
        var t = e.toLowerCase();
        return so.hasOwnProperty(t) && so[t] || null;
      }
    }
    function Dk(e, t, a, l, f) {
      var p, y;
      switch (Qd = a[Yd] === !0, p = Aa(t, a), Eh(t, a), t) {
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
          for (var b = 0; b < Kd.length; b++)
            Dn(Kd[b], e);
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
          op(e, a);
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
          var A = w[O].name.toLowerCase();
          switch (A) {
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
            typeof J == "string" ? e.textContent !== J && (Qd || wh(e.textContent, J), X = [Ts, J]) : typeof J == "number" && e.textContent !== "" + J && (Qd || wh(e.textContent, J), X = [Ts, "" + J]);
          else if (he.hasOwnProperty(H))
            J != null && (typeof J != "function" && xh(H, J), H === "onScroll" && Dn("scroll", e));
          else if (
            // Convince Flow we've calculated it (it's DEV-only in this method.)
            typeof p == "boolean"
          ) {
            var fe = void 0, _e = Qt(H);
            if (!Qd) {
              if (!(H === Sh || H === Yd || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              H === "value" || H === "checked" || H === "selected")) {
                if (H === qd) {
                  var lt = e.innerHTML, Pt = J ? J[Ch] : void 0;
                  if (Pt != null) {
                    var ht = nC(e, Pt);
                    ht !== lt && Xd(H, lt, ht);
                  }
                } else if (H === Rs) {
                  if (y.delete(H), tC) {
                    var Jt = yp(J);
                    fe = e.getAttribute("style"), Jt !== fe && Xd(H, fe, Jt);
                  }
                } else if (p)
                  y.delete(H.toLowerCase()), fe = rt(e, H, J), J !== fe && Xd(H, fe, J);
                else if (!Zt(H, _e, p) && !Wt(H, J, _e, p)) {
                  var Sn = !1;
                  if (_e !== null)
                    y.delete(_e.attributeName), fe = Mt(e, H, J, _e);
                  else {
                    var Z = l;
                    if (Z === Vc && (Z = Uu(t)), Z === Vc)
                      y.delete(H.toLowerCase());
                    else {
                      var ae = Nk(H);
                      ae !== null && ae !== H && (Sn = !0, y.delete(ae)), y.delete(H);
                    }
                    fe = rt(e, H, J);
                  }
                  J !== fe && !Sn && Xd(H, fe, J);
                }
              }
            }
          }
        }
      switch (y.size > 0 && !Qd && eC(y), t) {
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
          typeof a.onClick == "function" && Th(e);
          break;
      }
      return X;
    }
    function Ak(e, t) {
      var a = e.nodeValue !== t;
      return a;
    }
    function aC(e, t) {
      wh(e.nodeValue, t);
    }
    function iC(e, t) {
      {
        if (Ta)
          return;
        Ta = !0, h("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function oC(e, t) {
      {
        if (Ta)
          return;
        Ta = !0, h('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function lC(e, t, a) {
      {
        if (Ta)
          return;
        Ta = !0, h("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function uC(e, t) {
      {
        if (t === "" || Ta)
          return;
        Ta = !0, h('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Lk(e, t, a) {
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
    var Jd = function() {
    }, ev = function() {
    };
    {
      var Pk = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], sC = [
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
      ], Ik = sC.concat(["button"]), zk = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], cC = {
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
        var a = o({}, e || cC), l = {
          tag: t
        };
        return sC.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Ik.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Pk.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = l, t === "form" && (a.formTag = l), t === "a" && (a.aTagInScope = l), t === "button" && (a.buttonTagInScope = l), t === "nobr" && (a.nobrTagInScope = l), t === "p" && (a.pTagInButtonScope = l), t === "li" && (a.listItemTagAutoclosing = l), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = l), a;
      };
      var $k = function(e, t) {
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
            return zk.indexOf(t) === -1;
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
      }, Uk = function(e, t) {
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
      }, fC = {};
      Jd = function(e, t, a) {
        a = a || cC;
        var l = a.current, f = l && l.tag;
        t != null && (e != null && h("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var p = $k(e, f) ? null : l, y = p ? null : Uk(e, a), b = p || y;
        if (b) {
          var w = b.tag, O = !!p + "|" + e + "|" + w;
          if (!fC[O]) {
            fC[O] = !0;
            var A = e, X = "";
            if (e === "#text" ? /\S/.test(t) ? A = "Text nodes" : (A = "Whitespace text nodes", X = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : A = "<" + e + ">", p) {
              var H = "";
              w === "table" && e === "tr" && (H += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", A, w, X, H);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", A, w);
          }
        }
      };
    }
    var Wc;
    Wc = "suppressHydrationWarning";
    var dC = "$", vC = "/$", zy = "$?", $y = "$!", jk = "style", Uy = null, jy = null;
    function pC(e, t) {
      switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!t.autoFocus;
      }
      return !1;
    }
    function Hk(e) {
      var t, a, l = e.nodeType;
      switch (l) {
        case uo:
        case sp: {
          t = l === uo ? "#document" : "#fragment";
          var f = e.documentElement;
          a = f ? f.namespaceURI : Yo(null, "");
          break;
        }
        default: {
          var p = l === Ur ? e.parentNode : e, y = p.namespaceURI || null;
          t = p.tagName, a = Yo(y, t);
          break;
        }
      }
      {
        var b = t.toLowerCase(), w = ev(null, b);
        return {
          namespace: a,
          ancestorInfo: w
        };
      }
    }
    function Fk(e, t, a) {
      {
        var l = e, f = Yo(l.namespace, t), p = ev(l.ancestorInfo, t);
        return {
          namespace: f,
          ancestorInfo: p
        };
      }
    }
    function h$(e) {
      return e;
    }
    function Bk(e) {
      Uy = nh(), jy = Q();
      var t = null;
      return Dd(!1), t;
    }
    function Vk(e) {
      B(jy), Dd(Uy), Uy = null, jy = null;
    }
    function Wk(e, t, a, l, f) {
      var p;
      {
        var y = l;
        if (Jd(e, null, y.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var b = "" + t.children, w = ev(y.ancestorInfo, e);
          Jd(null, b, w);
        }
        p = y.namespace;
      }
      var O = Rk(e, t, a, p);
      return kh(f, O), Vy(O, t), O;
    }
    function Kk(e, t) {
      e.appendChild(t);
    }
    function Gk(e, t, a, l, f) {
      return kk(e, t, a, l), pC(t, a);
    }
    function qk(e, t, a, l, f, p) {
      {
        var y = p;
        if (typeof l.children != typeof a.children && (typeof l.children == "string" || typeof l.children == "number")) {
          var b = "" + l.children, w = ev(y.ancestorInfo, t);
          Jd(null, b, w);
        }
      }
      return Mk(e, t, a, l);
    }
    function Hy(e, t) {
      return e === "textarea" || e === "option" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function Yk(e, t, a, l) {
      {
        var f = a;
        Jd(null, e, f.ancestorInfo);
      }
      var p = _k(e, t);
      return kh(l, p), p;
    }
    var hC = typeof setTimeout == "function" ? setTimeout : void 0, Qk = typeof clearTimeout == "function" ? clearTimeout : void 0, Fy = -1;
    function Xk(e, t, a, l) {
      pC(t, a) && e.focus();
    }
    function Zk(e, t, a, l, f, p) {
      Vy(e, f), Ok(e, t, a, l, f);
    }
    function mC(e) {
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
      e.nodeType === Ur ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var l = e._reactRootContainer;
      l == null && a.onclick === null && Th(a);
    }
    function nM(e, t, a) {
      e.insertBefore(t, a);
    }
    function rM(e, t, a) {
      e.nodeType === Ur ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function aM(e, t) {
      e.removeChild(t);
    }
    function iM(e, t) {
      e.nodeType === Ur ? e.parentNode.removeChild(t) : e.removeChild(t);
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
      var a = t[jk], l = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Ff("display", l);
    }
    function sM(e, t) {
      e.nodeValue = t;
    }
    function By(e) {
      if (e.nodeType === ya)
        e.textContent = "";
      else if (e.nodeType === uo) {
        var t = e.body;
        t != null && (t.textContent = "");
      }
    }
    function cM(e, t, a) {
      return e.nodeType !== ya || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function fM(e, t) {
      return t === "" || e.nodeType !== ki ? null : e;
    }
    function dM(e) {
      return e.data === zy;
    }
    function vM(e) {
      return e.data === $y;
    }
    function gC(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === ya || t === ki)
          break;
      }
      return e;
    }
    function Rh(e) {
      return gC(e.nextSibling);
    }
    function yC(e) {
      return gC(e.firstChild);
    }
    function pM(e, t, a, l, f, p) {
      kh(p, e), Vy(e, a);
      var y;
      {
        var b = f;
        y = b.namespace;
      }
      return Dk(e, t, a, y);
    }
    function hM(e, t, a) {
      return kh(a, e), Ak(e, t);
    }
    function mM(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === Ur) {
          var l = t.data;
          if (l === vC) {
            if (a === 0)
              return Rh(t);
            a--;
          } else
            (l === dC || l === $y || l === zy) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function bC(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === Ur) {
          var l = t.data;
          if (l === dC || l === $y || l === zy) {
            if (a === 0)
              return t;
            a--;
          } else
            l === vC && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function gM(e) {
      vd(e);
    }
    function yM(e) {
      vd(e);
    }
    function bM(e, t, a) {
      aC(t, a);
    }
    function SM(e, t, a, l, f) {
      t[Wc] !== !0 && aC(l, f);
    }
    function CM(e, t) {
      t.nodeType === ya ? iC(e, t) : t.nodeType === Ur || oC(e, t);
    }
    function EM(e, t, a, l) {
      t[Wc] !== !0 && (l.nodeType === ya ? iC(a, l) : l.nodeType === Ur || oC(a, l));
    }
    function wM(e, t, a) {
      lC(e, t);
    }
    function xM(e, t) {
      uC(e, t);
    }
    function TM(e, t, a, l, f) {
      t[Wc] !== !0 && lC(a, l);
    }
    function RM(e, t, a, l) {
      t[Wc] !== !0 && uC(a, l);
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
      K1(e);
    }
    var _h = Math.random().toString(36).slice(2), tv = "__reactFiber$" + _h, SC = "__reactProps$" + _h, nv = "__reactContainer$" + _h, CC = "__reactEvents$" + _h;
    function kh(e, t) {
      t[tv] = e;
    }
    function AM(e, t) {
      t[nv] = e;
    }
    function EC(e) {
      e[nv] = null;
    }
    function Mh(e) {
      return !!e[nv];
    }
    function _s(e) {
      var t = e[tv];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[nv] || a[tv], t) {
          var l = t.alternate;
          if (t.child !== null || l !== null && l.child !== null)
            for (var f = bC(e); f !== null; ) {
              var p = f[tv];
              if (p)
                return p;
              f = bC(f);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function hu(e) {
      var t = e[tv] || e[nv];
      return t && (t.tag === D || t.tag === P || t.tag === U || t.tag === _) ? t : null;
    }
    function Kc(e) {
      if (e.tag === D || e.tag === P)
        return e.stateNode;
      throw Error("getNodeFromInstance: Invalid argument.");
    }
    function Oh(e) {
      return e[SC] || null;
    }
    function Vy(e, t) {
      e[SC] = t;
    }
    function wC(e) {
      var t = e[CC];
      return t === void 0 && (t = e[CC] = /* @__PURE__ */ new Set()), t;
    }
    var xC = {}, TC = d.ReactDebugCurrentFrame;
    function Nh(e) {
      if (e) {
        var t = e._owner, a = In(e.type, e._source, t ? t.type : null);
        TC.setExtraStackFrame(a);
      } else
        TC.setExtraStackFrame(null);
    }
    function Fi(e, t, a, l, f) {
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
            b && !(b instanceof Error) && (Nh(f), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", a, y, typeof b), Nh(null)), b instanceof Error && !(b.message in xC) && (xC[b.message] = !0, Nh(f), h("Failed %s type: %s", a, b.message), Nh(null));
          }
      }
    }
    var Wy = [], Dh;
    Dh = [];
    var bl = -1;
    function mu(e) {
      return {
        current: e
      };
    }
    function Jr(e, t) {
      if (bl < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== Dh[bl] && h("Unexpected Fiber popped."), e.current = Wy[bl], Wy[bl] = null, Dh[bl] = null, bl--;
    }
    function ea(e, t, a) {
      bl++, Wy[bl] = e.current, Dh[bl] = a, e.current = t;
    }
    var Ky;
    Ky = {};
    var $a = {};
    Object.freeze($a);
    var Sl = mu($a), Ao = mu(!1), Gy = $a;
    function Gc(e, t, a) {
      return a && Lo(t) ? Gy : Sl.current;
    }
    function RC(e, t, a) {
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
          Fi(l, p, "context", b);
        }
        return f && RC(e, t, p), p;
      }
    }
    function Ah() {
      return Ao.current;
    }
    function Lo(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Lh(e) {
      Jr(Ao, e), Jr(Sl, e);
    }
    function qy(e) {
      Jr(Ao, e), Jr(Sl, e);
    }
    function _C(e, t, a) {
      {
        if (Sl.current !== $a)
          throw Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        ea(Sl, t, e), ea(Ao, a, e);
      }
    }
    function kC(e, t, a) {
      {
        var l = e.stateNode, f = t.childContextTypes;
        if (typeof l.getChildContext != "function") {
          {
            var p = Re(t) || "Unknown";
            Ky[p] || (Ky[p] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", p, p));
          }
          return a;
        }
        var y = l.getChildContext();
        for (var b in y)
          if (!(b in f))
            throw Error((Re(t) || "Unknown") + '.getChildContext(): key "' + b + '" is not defined in childContextTypes.');
        {
          var w = Re(t) || "Unknown";
          Fi(f, y, "child context", w);
        }
        return o({}, a, y);
      }
    }
    function Ph(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || $a;
        return Gy = Sl.current, ea(Sl, a, e), ea(Ao, Ao.current, e), !0;
      }
    }
    function MC(e, t, a) {
      {
        var l = e.stateNode;
        if (!l)
          throw Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var f = kC(e, t, Gy);
          l.__reactInternalMemoizedMergedChildContext = f, Jr(Ao, e), Jr(Sl, e), ea(Sl, f, e), ea(Ao, a, e);
        } else
          Jr(Ao, e), ea(Ao, a, e);
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
    var Yy = 0, OC = 1, NC = 2, Ih = null, Po = null, Yc = !1, PM = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined";
    function IM(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        Ih = t.inject(e), Po = t;
      } catch (a) {
        h("React instrumentation encountered an error: %s.", a);
      }
      return !0;
    }
    function zM(e, t) {
      if (Po && typeof Po.onScheduleFiberRoot == "function")
        try {
          Po.onScheduleFiberRoot(Ih, e, t);
        } catch (a) {
          Yc || (Yc = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function $M(e, t) {
      if (Po && typeof Po.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & nn) === nn;
          ke && Po.onCommitFiberRoot(Ih, e, t, a);
        } catch (l) {
          Yc || (Yc = !0, h("React instrumentation encountered an error: %s", l));
        }
    }
    function UM(e) {
      if (Po && typeof Po.onCommitFiberUnmount == "function")
        try {
          Po.onCommitFiberUnmount(Ih, e);
        } catch (t) {
          Yc || (Yc = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    var jM = u.unstable_runWithPriority, Qy = u.unstable_scheduleCallback, DC = u.unstable_cancelCallback, HM = u.unstable_shouldYield, AC = u.unstable_requestPaint, Xy = u.unstable_now, FM = u.unstable_getCurrentPriorityLevel, zh = u.unstable_ImmediatePriority, LC = u.unstable_UserBlockingPriority, PC = u.unstable_NormalPriority, IC = u.unstable_LowPriority, zC = u.unstable_IdlePriority;
    if (!(c.__interactionsRef != null && c.__interactionsRef.current != null))
      throw Error("It is not supported to run the profiling version of a renderer (for example, `react-dom/profiling`) without also replacing the `scheduler/tracing` module with `scheduler/tracing-profiling`. Your bundler might have a setting for aliasing both modules. Learn more at https://reactjs.org/link/profiling");
    var $C = {}, fi = 99, ks = 98, Cl = 97, UC = 96, jC = 95, Zy = 90, BM = HM, VM = (
      // Fall back gracefully if we're running an older version of Scheduler.
      AC !== void 0 ? AC : function() {
      }
    ), El = null, $h = null, Jy = !1, HC = Xy(), ta = HC < 1e4 ? Xy : function() {
      return Xy() - HC;
    };
    function Qc() {
      switch (FM()) {
        case zh:
          return fi;
        case LC:
          return ks;
        case PC:
          return Cl;
        case IC:
          return UC;
        case zC:
          return jC;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function FC(e) {
      switch (e) {
        case fi:
          return zh;
        case ks:
          return LC;
        case Cl:
          return PC;
        case UC:
          return IC;
        case jC:
          return zC;
        default:
          throw Error("Unknown priority level.");
      }
    }
    function Ms(e, t) {
      var a = FC(e);
      return jM(a, t);
    }
    function gu(e, t, a) {
      var l = FC(e);
      return Qy(l, t, a);
    }
    function WM(e) {
      return El === null ? (El = [e], $h = Qy(zh, VC)) : El.push(e), $C;
    }
    function BC(e) {
      e !== $C && DC(e);
    }
    function Io() {
      if ($h !== null) {
        var e = $h;
        $h = null, DC(e);
      }
      VC();
    }
    function VC() {
      if (!Jy && El !== null) {
        Jy = !0;
        var e = 0;
        try {
          var t = !0, a = El;
          Ms(fi, function() {
            for (; e < a.length; e++) {
              var l = a[e];
              do
                l = l(t);
              while (l !== null);
            }
          }), El = null;
        } catch (l) {
          throw El !== null && (El = El.slice(e + 1)), Qy(zh, Io), l;
        } finally {
          Jy = !1;
        }
      }
    }
    var WC = "17.0.2", Un = 0, Qn = 1, Ra = 2, Os = 4, Ua = 8, KM = 16, GM = d.ReactCurrentBatchConfig, qM = 0;
    function YM() {
      return GM.transition;
    }
    var Bi = {
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
      }, rv = [], av = [], iv = [], ov = [], lv = [], uv = [], Ds = /* @__PURE__ */ new Set();
      Bi.recordUnsafeLifecycleWarnings = function(e, t) {
        Ds.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && rv.push(e), e.mode & Qn && typeof t.UNSAFE_componentWillMount == "function" && av.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && iv.push(e), e.mode & Qn && typeof t.UNSAFE_componentWillReceiveProps == "function" && ov.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && lv.push(e), e.mode & Qn && typeof t.UNSAFE_componentWillUpdate == "function" && uv.push(e));
      }, Bi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        rv.length > 0 && (rv.forEach(function(H) {
          e.add(Re(H.type) || "Component"), Ds.add(H.type);
        }), rv = []);
        var t = /* @__PURE__ */ new Set();
        av.length > 0 && (av.forEach(function(H) {
          t.add(Re(H.type) || "Component"), Ds.add(H.type);
        }), av = []);
        var a = /* @__PURE__ */ new Set();
        iv.length > 0 && (iv.forEach(function(H) {
          a.add(Re(H.type) || "Component"), Ds.add(H.type);
        }), iv = []);
        var l = /* @__PURE__ */ new Set();
        ov.length > 0 && (ov.forEach(function(H) {
          l.add(Re(H.type) || "Component"), Ds.add(H.type);
        }), ov = []);
        var f = /* @__PURE__ */ new Set();
        lv.length > 0 && (lv.forEach(function(H) {
          f.add(Re(H.type) || "Component"), Ds.add(H.type);
        }), lv = []);
        var p = /* @__PURE__ */ new Set();
        if (uv.length > 0 && (uv.forEach(function(H) {
          p.add(Re(H.type) || "Component"), Ds.add(H.type);
        }), uv = []), t.size > 0) {
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
          var A = Ns(a);
          m(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, A);
        }
        if (f.size > 0) {
          var X = Ns(f);
          m(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, X);
        }
      };
      var Uh = /* @__PURE__ */ new Map(), KC = /* @__PURE__ */ new Set();
      Bi.recordLegacyContextWarning = function(e, t) {
        var a = QM(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!KC.has(e.type)) {
          var l = Uh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (l === void 0 && (l = [], Uh.set(a, l)), l.push(e));
        }
      }, Bi.flushLegacyContextWarning = function() {
        Uh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], l = /* @__PURE__ */ new Set();
            e.forEach(function(p) {
              l.add(Re(p.type) || "Component"), KC.add(p.type);
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
      }, Bi.discardPendingWarnings = function() {
        rv = [], av = [], iv = [], ov = [], lv = [], uv = [], Uh = /* @__PURE__ */ new Map();
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
    var jh = 1073741823, e0 = mu(null), t0;
    t0 = {};
    var Hh = null, Xc = null, Fh = null, Bh = !1;
    function Vh() {
      Hh = null, Xc = null, Fh = null, Bh = !1;
    }
    function GC() {
      Bh = !0;
    }
    function qC() {
      Bh = !1;
    }
    function YC(e, t) {
      var a = e.type._context;
      ea(e0, a._currentValue, e), a._currentValue = t, a._currentRenderer !== void 0 && a._currentRenderer !== null && a._currentRenderer !== t0 && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), a._currentRenderer = t0;
    }
    function n0(e) {
      var t = e0.current;
      Jr(e0, e);
      var a = e.type._context;
      a._currentValue = t;
    }
    function XM(e, t, a) {
      if (i(a, t))
        return 0;
      var l = typeof e._calculateChangedBits == "function" ? e._calculateChangedBits(a, t) : jh;
      return (l & jh) !== l && h("calculateChangedBits: Expected the return value to be a 31-bit integer. Instead received: %s", l), l | 0;
    }
    function QC(e, t) {
      for (var a = e; a !== null; ) {
        var l = a.alternate;
        if (!To(a.childLanes, t))
          a.childLanes = tn(a.childLanes, t), l !== null && (l.childLanes = tn(l.childLanes, t));
        else if (l !== null && !To(l.childLanes, t))
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
                w.tag = Wh, bu(f, w);
              }
              f.lanes = tn(f.lanes, l);
              var O = f.alternate;
              O !== null && (O.lanes = tn(O.lanes, l)), QC(f.return, l), y.lanes = tn(y.lanes, l);
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
            var A = p.sibling;
            if (A !== null) {
              A.return = p.return, p = A;
              break;
            }
            p = p.return;
          }
        f = p;
      }
    }
    function Zc(e, t) {
      Hh = e, Xc = null, Fh = null;
      var a = e.dependencies;
      if (a !== null) {
        var l = a.firstContext;
        l !== null && (wr(a.lanes, t) && cb(), a.firstContext = null);
      }
    }
    function pr(e, t) {
      if (Bh && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo()."), Fh !== e) {
        if (!(t === !1 || t === 0)) {
          var a;
          typeof t != "number" || t === jh ? (Fh = e, a = jh) : a = t;
          var l = {
            context: e,
            observedBits: a,
            next: null
          };
          if (Xc === null) {
            if (Hh === null)
              throw Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
            Xc = l, Hh.dependencies = {
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
    var XC = 0, ZC = 1, Wh = 2, r0 = 3, Kh = !1, a0, Gh;
    a0 = !1, Gh = null;
    function i0(e) {
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
    function JC(e, t) {
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
        tag: XC,
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
        f === null ? t.next = t : (t.next = f.next, f.next = t), l.pending = t, Gh === l && !a0 && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), a0 = !0);
      }
    }
    function eE(e, t) {
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
      var A = a.lastBaseUpdate;
      A === null ? a.firstBaseUpdate = t : A.next = t, a.lastBaseUpdate = t;
    }
    function JM(e, t, a, l, f, p) {
      switch (a.tag) {
        case ZC: {
          var y = a.payload;
          if (typeof y == "function") {
            GC();
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
              qC();
            }
            return b;
          }
          return y;
        }
        case r0:
          e.flags = e.flags & ~La | nn;
        case XC: {
          var w = a.payload, O;
          if (typeof w == "function") {
            GC(), O = w.call(p, l, f);
            {
              if (e.mode & Qn) {
                _r();
                try {
                  w.call(p, l, f);
                } finally {
                  xn();
                }
              }
              qC();
            }
          } else
            O = w;
          return O == null ? l : o({}, l, O);
        }
        case Wh:
          return Kh = !0, l;
      }
      return l;
    }
    function sv(e, t, a, l) {
      var f = e.updateQueue;
      Kh = !1, Gh = f.shared;
      var p = f.firstBaseUpdate, y = f.lastBaseUpdate, b = f.shared.pending;
      if (b !== null) {
        f.shared.pending = null;
        var w = b, O = w.next;
        w.next = null, y === null ? p = O : y.next = O, y = w;
        var A = e.alternate;
        if (A !== null) {
          var X = A.updateQueue, H = X.lastBaseUpdate;
          H !== y && (H === null ? X.firstBaseUpdate = O : H.next = O, X.lastBaseUpdate = w);
        }
      }
      if (p !== null) {
        var J = f.baseState, fe = ue, _e = null, lt = null, Pt = null, ht = p;
        do {
          var Jt = ht.lane, Sn = ht.eventTime;
          if (To(l, Jt)) {
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
            var G = ht.callback;
            if (G !== null) {
              e.flags |= ho;
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
        Pt === null && (_e = J), f.baseState = _e, f.firstBaseUpdate = lt, f.lastBaseUpdate = Pt, Pb(fe), e.lanes = fe, e.memoizedState = J;
      }
      Gh = null;
    }
    function eO(e, t) {
      if (typeof e != "function")
        throw Error("Invalid argument passed as callback. Expected a function. Instead received: " + e);
      e.call(t);
    }
    function tE() {
      Kh = !1;
    }
    function qh() {
      return Kh;
    }
    function nE(e, t, a) {
      var l = t.effects;
      if (t.effects = null, l !== null)
        for (var f = 0; f < l.length; f++) {
          var p = l[f], y = p.callback;
          y !== null && (p.callback = null, eO(y, a));
        }
    }
    var o0 = {}, tO = Array.isArray, rE = new r.Component().refs, l0, u0, s0, c0, f0, aE, Yh, d0, v0, p0;
    {
      l0 = /* @__PURE__ */ new Set(), u0 = /* @__PURE__ */ new Set(), s0 = /* @__PURE__ */ new Set(), c0 = /* @__PURE__ */ new Set(), d0 = /* @__PURE__ */ new Set(), f0 = /* @__PURE__ */ new Set(), v0 = /* @__PURE__ */ new Set(), p0 = /* @__PURE__ */ new Set();
      var iE = /* @__PURE__ */ new Set();
      Yh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          iE.has(a) || (iE.add(a), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, aE = function(e, t) {
        if (t === void 0) {
          var a = Re(e) || "Component";
          f0.has(a) || (f0.add(a), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(o0, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(o0);
    }
    function Qh(e, t, a, l) {
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
      aE(t, p);
      var y = p == null ? f : o({}, f, p);
      if (e.memoizedState = y, e.lanes === ue) {
        var b = e.updateQueue;
        b.baseState = y;
      }
    }
    var h0 = {
      isMounted: $p,
      enqueueSetState: function(e, t, a) {
        var l = Ni(e), f = Ha(), p = wu(l), y = yu(f, p);
        y.payload = t, a != null && (Yh(a, "setState"), y.callback = a), bu(l, y), ra(l, p, f);
      },
      enqueueReplaceState: function(e, t, a) {
        var l = Ni(e), f = Ha(), p = wu(l), y = yu(f, p);
        y.tag = ZC, y.payload = t, a != null && (Yh(a, "replaceState"), y.callback = a), bu(l, y), ra(l, p, f);
      },
      enqueueForceUpdate: function(e, t) {
        var a = Ni(e), l = Ha(), f = wu(a), p = yu(l, f);
        p.tag = Wh, t != null && (Yh(t, "forceUpdate"), p.callback = t), bu(a, p), ra(a, f, l);
      }
    };
    function oE(e, t, a, l, f, p, y) {
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
        p || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", f) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", f)), l.getInitialState && !l.getInitialState.isReactClassApproved && !l.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", f), l.getDefaultProps && !l.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", f), l.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", f), l.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", f), l.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", f), t.contextType && t.contextTypes && !v0.has(t) && (v0.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", f)), typeof l.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", f), t.prototype && t.prototype.isPureReactComponent && typeof l.shouldComponentUpdate != "undefined" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Re(t) || "A pure component"), typeof l.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", f), typeof l.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", f), typeof l.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", f), typeof l.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", f);
        var y = l.props !== a;
        l.props !== void 0 && y && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", f, f), l.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", f, f), typeof l.getSnapshotBeforeUpdate == "function" && typeof l.componentDidUpdate != "function" && !s0.has(t) && (s0.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Re(t))), typeof l.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof l.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", f), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", f);
        var b = l.state;
        b && (typeof b != "object" || tO(b)) && h("%s.state: must be set to an object or null", f), typeof l.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", f);
      }
    }
    function lE(e, t) {
      t.updater = h0, e.stateNode = t, rd(t, e), t._reactInternalInstance = o0;
    }
    function uE(e, t, a) {
      var l = !1, f = $a, p = $a, y = t.contextType;
      if ("contextType" in t) {
        var b = (
          // Allow null for conditional declaration
          y === null || y !== void 0 && y.$$typeof === Ht && y._context === void 0
        );
        if (!b && !p0.has(t)) {
          p0.add(t);
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
      var A = new t(a, p), X = e.memoizedState = A.state !== null && A.state !== void 0 ? A.state : null;
      lE(e, A);
      {
        if (typeof t.getDerivedStateFromProps == "function" && X === null) {
          var H = Re(t) || "Component";
          u0.has(H) || (u0.add(H), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", H, A.state === null ? "null" : "undefined", H));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof A.getSnapshotBeforeUpdate == "function") {
          var J = null, fe = null, _e = null;
          if (typeof A.componentWillMount == "function" && A.componentWillMount.__suppressDeprecationWarning !== !0 ? J = "componentWillMount" : typeof A.UNSAFE_componentWillMount == "function" && (J = "UNSAFE_componentWillMount"), typeof A.componentWillReceiveProps == "function" && A.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? fe = "componentWillReceiveProps" : typeof A.UNSAFE_componentWillReceiveProps == "function" && (fe = "UNSAFE_componentWillReceiveProps"), typeof A.componentWillUpdate == "function" && A.componentWillUpdate.__suppressDeprecationWarning !== !0 ? _e = "componentWillUpdate" : typeof A.UNSAFE_componentWillUpdate == "function" && (_e = "UNSAFE_componentWillUpdate"), J !== null || fe !== null || _e !== null) {
            var lt = Re(t) || "Component", Pt = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            c0.has(lt) || (c0.add(lt), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, lt, Pt, J !== null ? `
  ` + J : "", fe !== null ? `
  ` + fe : "", _e !== null ? `
  ` + _e : ""));
          }
        }
      }
      return l && RC(e, f, p), A;
    }
    function rO(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Re(e.type) || "Component"), h0.enqueueReplaceState(t, t.state, null));
    }
    function sE(e, t, a, l) {
      var f = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, l), t.state !== f) {
        {
          var p = Re(e.type) || "Component";
          l0.has(p) || (l0.add(p), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", p));
        }
        h0.enqueueReplaceState(t, t.state, null);
      }
    }
    function m0(e, t, a, l) {
      nO(e, t, a);
      var f = e.stateNode;
      f.props = a, f.state = e.memoizedState, f.refs = rE, i0(e);
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
          d0.has(b) || (d0.add(b), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", b));
        }
        e.mode & Qn && Bi.recordLegacyContextWarning(e, f), Bi.recordUnsafeLifecycleWarnings(e, f);
      }
      sv(e, a, f, l), f.state = e.memoizedState;
      var w = t.getDerivedStateFromProps;
      typeof w == "function" && (Qh(e, t, w, a), f.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof f.getSnapshotBeforeUpdate != "function" && (typeof f.UNSAFE_componentWillMount == "function" || typeof f.componentWillMount == "function") && (rO(e, f), sv(e, a, f, l), f.state = e.memoizedState), typeof f.componentDidMount == "function" && (e.flags |= vt);
    }
    function aO(e, t, a, l) {
      var f = e.stateNode, p = e.memoizedProps;
      f.props = p;
      var y = f.context, b = t.contextType, w = $a;
      if (typeof b == "object" && b !== null)
        w = pr(b);
      else {
        var O = Gc(e, t, !0);
        w = qc(e, O);
      }
      var A = t.getDerivedStateFromProps, X = typeof A == "function" || typeof f.getSnapshotBeforeUpdate == "function";
      !X && (typeof f.UNSAFE_componentWillReceiveProps == "function" || typeof f.componentWillReceiveProps == "function") && (p !== a || y !== w) && sE(e, f, a, w), tE();
      var H = e.memoizedState, J = f.state = H;
      if (sv(e, a, f, l), J = e.memoizedState, p === a && H === J && !Ah() && !qh())
        return typeof f.componentDidMount == "function" && (e.flags |= vt), !1;
      typeof A == "function" && (Qh(e, t, A, a), J = e.memoizedState);
      var fe = qh() || oE(e, t, p, a, H, J, w);
      return fe ? (!X && (typeof f.UNSAFE_componentWillMount == "function" || typeof f.componentWillMount == "function") && (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (e.flags |= vt)) : (typeof f.componentDidMount == "function" && (e.flags |= vt), e.memoizedProps = a, e.memoizedState = J), f.props = a, f.state = J, f.context = w, fe;
    }
    function iO(e, t, a, l, f) {
      var p = t.stateNode;
      JC(e, t);
      var y = t.memoizedProps, b = t.type === t.elementType ? y : Vi(t.type, y);
      p.props = b;
      var w = t.pendingProps, O = p.context, A = a.contextType, X = $a;
      if (typeof A == "object" && A !== null)
        X = pr(A);
      else {
        var H = Gc(t, a, !0);
        X = qc(t, H);
      }
      var J = a.getDerivedStateFromProps, fe = typeof J == "function" || typeof p.getSnapshotBeforeUpdate == "function";
      !fe && (typeof p.UNSAFE_componentWillReceiveProps == "function" || typeof p.componentWillReceiveProps == "function") && (y !== w || O !== X) && sE(t, p, l, X), tE();
      var _e = t.memoizedState, lt = p.state = _e;
      if (sv(t, l, p, f), lt = t.memoizedState, y === w && _e === lt && !Ah() && !qh())
        return typeof p.componentDidUpdate == "function" && (y !== e.memoizedProps || _e !== e.memoizedState) && (t.flags |= vt), typeof p.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || _e !== e.memoizedState) && (t.flags |= ei), !1;
      typeof J == "function" && (Qh(t, a, J, l), lt = t.memoizedState);
      var Pt = qh() || oE(t, a, b, l, _e, lt, X);
      return Pt ? (!fe && (typeof p.UNSAFE_componentWillUpdate == "function" || typeof p.componentWillUpdate == "function") && (typeof p.componentWillUpdate == "function" && p.componentWillUpdate(l, lt, X), typeof p.UNSAFE_componentWillUpdate == "function" && p.UNSAFE_componentWillUpdate(l, lt, X)), typeof p.componentDidUpdate == "function" && (t.flags |= vt), typeof p.getSnapshotBeforeUpdate == "function" && (t.flags |= ei)) : (typeof p.componentDidUpdate == "function" && (y !== e.memoizedProps || _e !== e.memoizedState) && (t.flags |= vt), typeof p.getSnapshotBeforeUpdate == "function" && (y !== e.memoizedProps || _e !== e.memoizedState) && (t.flags |= ei), t.memoizedProps = l, t.memoizedState = lt), p.props = l, p.state = lt, p.context = X, Pt;
    }
    var g0, y0, b0, S0, C0, cE = function(e, t) {
    };
    g0 = !1, y0 = !1, b0 = {}, S0 = {}, C0 = {}, cE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Re(t.type) || "Component";
        S0[a] || (S0[a] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    var Xh = Array.isArray;
    function cv(e, t, a) {
      var l = a.ref;
      if (l !== null && typeof l != "function" && typeof l != "object") {
        if ((e.mode & Qn || Ie) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var f = Re(e.type) || "Component";
          b0[f] || (h('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l), b0[f] = !0);
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
          var O = function(A) {
            var X = y.refs;
            X === rE && (X = y.refs = {}), A === null ? delete X[w] : X[w] = A;
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
    function Zh(e, t) {
      if (e.type !== "textarea")
        throw Error("Objects are not valid as a React child (found: " + (Object.prototype.toString.call(t) === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Jh(e) {
      {
        var t = Re(e.type) || "Component";
        if (C0[t])
          return;
        C0[t] = !0, h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function fE(e) {
      function t(Z, ae) {
        if (e) {
          var G = Z.lastEffect;
          G !== null ? (G.nextEffect = ae, Z.lastEffect = ae) : Z.firstEffect = Z.lastEffect = ae, ae.nextEffect = null, ae.flags = Rn;
        }
      }
      function a(Z, ae) {
        if (!e)
          return null;
        for (var G = ae; G !== null; )
          t(Z, G), G = G.sibling;
        return null;
      }
      function l(Z, ae) {
        for (var G = /* @__PURE__ */ new Map(), be = ae; be !== null; )
          be.key !== null ? G.set(be.key, be) : G.set(be.index, be), be = be.sibling;
        return G;
      }
      function f(Z, ae) {
        var G = Bs(Z, ae);
        return G.index = 0, G.sibling = null, G;
      }
      function p(Z, ae, G) {
        if (Z.index = G, !e)
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
      function b(Z, ae, G, be) {
        if (ae === null || ae.tag !== P) {
          var De = Yb(G, Z.mode, be);
          return De.return = Z, De;
        } else {
          var Ye = f(ae, G);
          return Ye.return = Z, Ye;
        }
      }
      function w(Z, ae, G, be) {
        if (ae !== null && (ae.elementType === G.type || // Keep this check inline so it only runs on the false path:
        Ww(ae, G))) {
          var De = f(ae, G.props);
          return De.ref = cv(Z, ae, G), De.return = Z, De._debugSource = G._source, De._debugOwner = G._owner, De;
        }
        var Ye = Gb(G, Z.mode, be);
        return Ye.ref = cv(Z, ae, G), Ye.return = Z, Ye;
      }
      function O(Z, ae, G, be) {
        if (ae === null || ae.tag !== N || ae.stateNode.containerInfo !== G.containerInfo || ae.stateNode.implementation !== G.implementation) {
          var De = Qb(G, Z.mode, be);
          return De.return = Z, De;
        } else {
          var Ye = f(ae, G.children || []);
          return Ye.return = Z, Ye;
        }
      }
      function A(Z, ae, G, be, De) {
        if (ae === null || ae.tag !== F) {
          var Ye = Vs(G, Z.mode, be, De);
          return Ye.return = Z, Ye;
        } else {
          var Yt = f(ae, G);
          return Yt.return = Z, Yt;
        }
      }
      function X(Z, ae, G) {
        if (typeof ae == "string" || typeof ae == "number") {
          var be = Yb("" + ae, Z.mode, G);
          return be.return = Z, be;
        }
        if (typeof ae == "object" && ae !== null) {
          switch (ae.$$typeof) {
            case on: {
              var De = Gb(ae, Z.mode, G);
              return De.ref = cv(Z, null, ae), De.return = Z, De;
            }
            case Ot: {
              var Ye = Qb(ae, Z.mode, G);
              return Ye.return = Z, Ye;
            }
          }
          if (Xh(ae) || ln(ae)) {
            var Yt = Vs(ae, Z.mode, G, null);
            return Yt.return = Z, Yt;
          }
          Zh(Z, ae);
        }
        return typeof ae == "function" && Jh(Z), null;
      }
      function H(Z, ae, G, be) {
        var De = ae !== null ? ae.key : null;
        if (typeof G == "string" || typeof G == "number")
          return De !== null ? null : b(Z, ae, "" + G, be);
        if (typeof G == "object" && G !== null) {
          switch (G.$$typeof) {
            case on:
              return G.key === De ? G.type === jt ? A(Z, ae, G.props.children, be, De) : w(Z, ae, G, be) : null;
            case Ot:
              return G.key === De ? O(Z, ae, G, be) : null;
          }
          if (Xh(G) || ln(G))
            return De !== null ? null : A(Z, ae, G, be, null);
          Zh(Z, G);
        }
        return typeof G == "function" && Jh(Z), null;
      }
      function J(Z, ae, G, be, De) {
        if (typeof be == "string" || typeof be == "number") {
          var Ye = Z.get(G) || null;
          return b(ae, Ye, "" + be, De);
        }
        if (typeof be == "object" && be !== null) {
          switch (be.$$typeof) {
            case on: {
              var Yt = Z.get(be.key === null ? G : be.key) || null;
              return be.type === jt ? A(ae, Yt, be.props.children, De, be.key) : w(ae, Yt, be, De);
            }
            case Ot: {
              var Mn = Z.get(be.key === null ? G : be.key) || null;
              return O(ae, Mn, be, De);
            }
          }
          if (Xh(be) || ln(be)) {
            var jn = Z.get(G) || null;
            return A(ae, jn, be, De, null);
          }
          Zh(ae, be);
        }
        return typeof be == "function" && Jh(ae), null;
      }
      function fe(Z, ae, G) {
        {
          if (typeof Z != "object" || Z === null)
            return ae;
          switch (Z.$$typeof) {
            case on:
            case Ot:
              cE(Z, G);
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
      function _e(Z, ae, G, be) {
        for (var De = null, Ye = 0; Ye < G.length; Ye++) {
          var Yt = G[Ye];
          De = fe(Yt, De, Z);
        }
        for (var Mn = null, jn = null, sn = ae, hr = 0, rn = 0, Hn = null; sn !== null && rn < G.length; rn++) {
          sn.index > rn ? (Hn = sn, sn = null) : Hn = sn.sibling;
          var Ar = H(Z, sn, G[rn], be);
          if (Ar === null) {
            sn === null && (sn = Hn);
            break;
          }
          e && sn && Ar.alternate === null && t(Z, sn), hr = p(Ar, hr, rn), jn === null ? Mn = Ar : jn.sibling = Ar, jn = Ar, sn = Hn;
        }
        if (rn === G.length)
          return a(Z, sn), Mn;
        if (sn === null) {
          for (; rn < G.length; rn++) {
            var nr = X(Z, G[rn], be);
            nr !== null && (hr = p(nr, hr, rn), jn === null ? Mn = nr : jn.sibling = nr, jn = nr);
          }
          return Mn;
        }
        for (var Fo = l(Z, sn); rn < G.length; rn++) {
          var rr = J(Fo, Z, rn, G[rn], be);
          rr !== null && (e && rr.alternate !== null && Fo.delete(rr.key === null ? rn : rr.key), hr = p(rr, hr, rn), jn === null ? Mn = rr : jn.sibling = rr, jn = rr);
        }
        return e && Fo.forEach(function(Bo) {
          return t(Z, Bo);
        }), Mn;
      }
      function lt(Z, ae, G, be) {
        var De = ln(G);
        if (typeof De != "function")
          throw Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          G[Symbol.toStringTag] === "Generator" && (y0 || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), y0 = !0), G.entries === De && (g0 || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), g0 = !0);
          var Ye = De.call(G);
          if (Ye)
            for (var Yt = null, Mn = Ye.next(); !Mn.done; Mn = Ye.next()) {
              var jn = Mn.value;
              Yt = fe(jn, Yt, Z);
            }
        }
        var sn = De.call(G);
        if (sn == null)
          throw Error("An iterable object provided no iterator.");
        for (var hr = null, rn = null, Hn = ae, Ar = 0, nr = 0, Fo = null, rr = sn.next(); Hn !== null && !rr.done; nr++, rr = sn.next()) {
          Hn.index > nr ? (Fo = Hn, Hn = null) : Fo = Hn.sibling;
          var Bo = H(Z, Hn, rr.value, be);
          if (Bo === null) {
            Hn === null && (Hn = Fo);
            break;
          }
          e && Hn && Bo.alternate === null && t(Z, Hn), Ar = p(Bo, Ar, nr), rn === null ? hr = Bo : rn.sibling = Bo, rn = Bo, Hn = Fo;
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
        for (var rS = l(Z, Hn); !rr.done; nr++, rr = sn.next()) {
          var Ru = J(rS, Z, nr, rr.value, be);
          Ru !== null && (e && Ru.alternate !== null && rS.delete(Ru.key === null ? nr : Ru.key), Ar = p(Ru, Ar, nr), rn === null ? hr = Ru : rn.sibling = Ru, rn = Ru);
        }
        return e && rS.forEach(function(aD) {
          return t(Z, aD);
        }), hr;
      }
      function Pt(Z, ae, G, be) {
        if (ae !== null && ae.tag === P) {
          a(Z, ae.sibling);
          var De = f(ae, G);
          return De.return = Z, De;
        }
        a(Z, ae);
        var Ye = Yb(G, Z.mode, be);
        return Ye.return = Z, Ye;
      }
      function ht(Z, ae, G, be) {
        for (var De = G.key, Ye = ae; Ye !== null; ) {
          if (Ye.key === De) {
            switch (Ye.tag) {
              case F: {
                if (G.type === jt) {
                  a(Z, Ye.sibling);
                  var Yt = f(Ye, G.props.children);
                  return Yt.return = Z, Yt._debugSource = G._source, Yt._debugOwner = G._owner, Yt;
                }
                break;
              }
              case se:
              default: {
                if (Ye.elementType === G.type || // Keep this check inline so it only runs on the false path:
                Ww(Ye, G)) {
                  a(Z, Ye.sibling);
                  var Mn = f(Ye, G.props);
                  return Mn.ref = cv(Z, Ye, G), Mn.return = Z, Mn._debugSource = G._source, Mn._debugOwner = G._owner, Mn;
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
        if (G.type === jt) {
          var jn = Vs(G.props.children, Z.mode, be, G.key);
          return jn.return = Z, jn;
        } else {
          var sn = Gb(G, Z.mode, be);
          return sn.ref = cv(Z, ae, G), sn.return = Z, sn;
        }
      }
      function Jt(Z, ae, G, be) {
        for (var De = G.key, Ye = ae; Ye !== null; ) {
          if (Ye.key === De)
            if (Ye.tag === N && Ye.stateNode.containerInfo === G.containerInfo && Ye.stateNode.implementation === G.implementation) {
              a(Z, Ye.sibling);
              var Yt = f(Ye, G.children || []);
              return Yt.return = Z, Yt;
            } else {
              a(Z, Ye);
              break;
            }
          else
            t(Z, Ye);
          Ye = Ye.sibling;
        }
        var Mn = Qb(G, Z.mode, be);
        return Mn.return = Z, Mn;
      }
      function Sn(Z, ae, G, be) {
        var De = typeof G == "object" && G !== null && G.type === jt && G.key === null;
        De && (G = G.props.children);
        var Ye = typeof G == "object" && G !== null;
        if (Ye)
          switch (G.$$typeof) {
            case on:
              return y(ht(Z, ae, G, be));
            case Ot:
              return y(Jt(Z, ae, G, be));
          }
        if (typeof G == "string" || typeof G == "number")
          return y(Pt(Z, ae, "" + G, be));
        if (Xh(G))
          return _e(Z, ae, G, be);
        if (ln(G))
          return lt(Z, ae, G, be);
        if (Ye && Zh(Z, G), typeof G == "function" && Jh(Z), typeof G == "undefined" && !De)
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
    var em = fE(!0), dE = fE(!1);
    function oO(e, t) {
      if (!(e === null || t.child === e.child))
        throw Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, l = Bs(a, a.pendingProps);
        for (t.child = l, l.return = t; a.sibling !== null; )
          a = a.sibling, l = l.sibling = Bs(a, a.pendingProps), l.return = t;
        l.sibling = null;
      }
    }
    function lO(e, t) {
      for (var a = e.child; a !== null; )
        SN(a, t), a = a.sibling;
    }
    var fv = {}, Su = mu(fv), dv = mu(fv), tm = mu(fv);
    function nm(e) {
      if (e === fv)
        throw Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function vE() {
      var e = nm(tm.current);
      return e;
    }
    function E0(e, t) {
      ea(tm, t, e), ea(dv, e, e), ea(Su, fv, e);
      var a = Hk(t);
      Jr(Su, e), ea(Su, a, e);
    }
    function Jc(e) {
      Jr(Su, e), Jr(dv, e), Jr(tm, e);
    }
    function w0() {
      var e = nm(Su.current);
      return e;
    }
    function pE(e) {
      nm(tm.current);
      var t = nm(Su.current), a = Fk(t, e.type);
      t !== a && (ea(dv, e, e), ea(Su, a, e));
    }
    function x0(e) {
      dv.current === e && (Jr(Su, e), Jr(dv, e));
    }
    var uO = 0, hE = 1, T0 = 1, vv = 2, Wi = mu(uO);
    function rm(e, t) {
      return (e & t) !== 0;
    }
    function pv(e) {
      return e & hE;
    }
    function R0(e, t) {
      return e & hE | t;
    }
    function sO(e, t) {
      return e | t;
    }
    function As(e, t) {
      ea(Wi, t, e);
    }
    function ef(e) {
      Jr(Wi, e);
    }
    function cO(e, t) {
      var a = e.memoizedState;
      if (a !== null)
        return a.dehydrated !== null;
      var l = e.memoizedProps;
      return l.fallback === void 0 ? !1 : l.unstable_avoidThisFallback !== !0 ? !0 : !t;
    }
    function am(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === U) {
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
    var _0 = (
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
    ), di = null, Ls = null, Cu = !1;
    function fO(e) {
      var t = e.stateNode.containerInfo;
      return Ls = yC(t), di = e, Cu = !0, !0;
    }
    function mE(e, t) {
      switch (e.tag) {
        case _:
          CM(e.stateNode.containerInfo, t);
          break;
        case D:
          EM(e.type, e.memoizedProps, e.stateNode, t);
          break;
      }
      var a = RN();
      a.stateNode = t, a.return = e, a.flags = Rn, e.lastEffect !== null ? (e.lastEffect.nextEffect = a, e.lastEffect = a) : e.firstEffect = e.lastEffect = a;
    }
    function gE(e, t) {
      switch (t.flags = t.flags & ~Sa | Tt, e.tag) {
        case _: {
          var a = e.stateNode.containerInfo;
          switch (t.tag) {
            case D:
              var l = t.type;
              t.pendingProps, wM(a, l);
              break;
            case P:
              var f = t.pendingProps;
              xM(a, f);
              break;
          }
          break;
        }
        case D: {
          var p = e.type, y = e.memoizedProps, b = e.stateNode;
          switch (t.tag) {
            case D:
              var w = t.type;
              t.pendingProps, TM(p, y, b, w);
              break;
            case P:
              var O = t.pendingProps;
              RM(p, y, b, O);
              break;
            case U:
              _M(p, y);
              break;
          }
          break;
        }
        default:
          return;
      }
    }
    function yE(e, t) {
      switch (e.tag) {
        case D: {
          var a = e.type;
          e.pendingProps;
          var l = cM(t, a);
          return l !== null ? (e.stateNode = l, !0) : !1;
        }
        case P: {
          var f = e.pendingProps, p = fM(t, f);
          return p !== null ? (e.stateNode = p, !0) : !1;
        }
        case U:
          return !1;
        default:
          return !1;
      }
    }
    function k0(e) {
      if (Cu) {
        var t = Ls;
        if (!t) {
          gE(di, e), Cu = !1, di = e;
          return;
        }
        var a = t;
        if (!yE(e, t)) {
          if (t = Rh(a), !t || !yE(e, t)) {
            gE(di, e), Cu = !1, di = e;
            return;
          }
          mE(di, a);
        }
        di = e, Ls = yC(t);
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
            case D: {
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
    function bE(e) {
      for (var t = e.return; t !== null && t.tag !== D && t.tag !== _ && t.tag !== U; )
        t = t.return;
      di = t;
    }
    function im(e) {
      if (e !== di)
        return !1;
      if (!Cu)
        return bE(e), Cu = !0, !1;
      var t = e.type;
      if (e.tag !== D || t !== "head" && t !== "body" && !Hy(t, e.memoizedProps))
        for (var a = Ls; a; )
          mE(e, a), a = Rh(a);
      return bE(e), e.tag === U ? Ls = pO(e) : Ls = di ? Rh(e.stateNode) : null, !0;
    }
    function M0() {
      di = null, Ls = null, Cu = !1;
    }
    function O0() {
      return Cu;
    }
    var mv = [], N0;
    N0 = {};
    function hO(e) {
      mv.push(e);
    }
    function D0() {
      for (var e = 0; e < mv.length; e++) {
        var t = mv[e];
        t._workInProgressVersionPrimary = null;
      }
      mv.length = 0;
    }
    function mO(e) {
      return e._workInProgressVersionPrimary;
    }
    function SE(e, t) {
      e._workInProgressVersionPrimary = t, mv.push(e);
    }
    function gO(e) {
      e._currentPrimaryRenderer == null ? e._currentPrimaryRenderer = N0 : e._currentPrimaryRenderer !== N0 && h("Detected multiple renderers concurrently rendering the same mutable source. This is currently unsupported.");
    }
    var Pe = d.ReactCurrentDispatcher, vi = d.ReactCurrentBatchConfig, A0, L0;
    L0 = {}, A0 = /* @__PURE__ */ new Set();
    var gv = ue, En = null, na = null, Dr = null, om = !1, yv = !1, yO = 25, ve = null, pi = null, Eu = -1, P0 = !1;
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
    function bv(e) {
      e != null && !Array.isArray(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ve, typeof e);
    }
    function bO(e) {
      {
        var t = Re(En.type);
        if (!A0.has(t) && (A0.add(t), pi !== null)) {
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
    function _a() {
      throw Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function I0(e, t) {
      if (P0)
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
      gv = p, En = t, pi = e !== null ? e._debugHookTypes : null, Eu = -1, P0 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ue, e !== null && e.memoizedState !== null ? Pe.current = PE : pi !== null ? Pe.current = LE : Pe.current = AE;
      var y = a(l, f);
      if (yv) {
        var b = 0;
        do {
          if (yv = !1, !(b < yO))
            throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          b += 1, P0 = !1, na = null, Dr = null, t.updateQueue = null, Eu = -1, Pe.current = IE, y = a(l, f);
        } while (yv);
      }
      Pe.current = ym, t._debugHookTypes = pi;
      var w = na !== null && na.next !== null;
      if (gv = ue, En = null, na = null, Dr = null, ve = null, pi = null, Eu = -1, om = !1, w)
        throw Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return y;
    }
    function CE(e, t, a) {
      t.updateQueue = e.updateQueue, t.flags &= ~(ql | vt), e.lanes = uu(e.lanes, a);
    }
    function EE() {
      if (Pe.current = ym, om) {
        for (var e = En.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        om = !1;
      }
      gv = ue, En = null, na = null, Dr = null, pi = null, Eu = -1, ve = null, gm = !1, yv = !1;
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
    function SO() {
      return {
        lastEffect: null
      };
    }
    function lm(e, t) {
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
      }, y = p.dispatch = Q0.bind(null, En, p);
      return [l.memoizedState, y];
    }
    function $0(e, t, a) {
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
        var A = y.next, X = p.baseState, H = null, J = null, fe = null, _e = A;
        do {
          var lt = _e.lane;
          if (To(gv, lt)) {
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
            fe === null ? (J = fe = Pt, H = X) : fe = fe.next = Pt, En.lanes = tn(En.lanes, lt), Pb(lt);
          }
          _e = _e.next;
        } while (_e !== null && _e !== A);
        fe === null ? H = X : fe.next = J, i(X, l.memoizedState) || cb(), l.memoizedState = X, l.baseState = H, l.baseQueue = fe, f.lastRenderedState = X;
      }
      var Sn = f.dispatch;
      return [l.memoizedState, Sn];
    }
    function U0(e, t, a) {
      var l = Is(), f = l.queue;
      if (f === null)
        throw Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      f.lastRenderedReducer = e;
      var p = f.dispatch, y = f.pending, b = l.memoizedState;
      if (y !== null) {
        f.pending = null;
        var w = y.next, O = w;
        do {
          var A = O.action;
          b = e(b, A), O = O.next;
        } while (O !== w);
        i(b, l.memoizedState) || cb(), l.memoizedState = b, l.baseQueue === null && (l.baseState = b), f.lastRenderedState = b;
      }
      return [b, p];
    }
    function wE(e, t, a) {
      gO(t);
      var l = t._getVersion, f = l(t._source), p = !1, y = mO(t);
      if (y !== null ? p = y === f : (p = To(gv, e.mutableReadLanes), p && SE(t, f)), p) {
        var b = a(t._source);
        return typeof b == "function" && h("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing."), b;
      } else
        throw hO(t), Error("Cannot read from mutable source during the current render without tearing. This is a bug in React. Please file an issue.");
    }
    function xE(e, t, a, l) {
      var f = x2();
      if (f === null)
        throw Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
      var p = t._getVersion, y = p(t._source), b = Pe.current, w = b.useState(function() {
        return wE(f, t, a);
      }), O = w[0], A = w[1], X = O, H = Dr, J = e.memoizedState, fe = J.refs, _e = fe.getSnapshot, lt = J.source, Pt = J.subscribe, ht = En;
      if (e.memoizedState = {
        refs: fe,
        source: t,
        subscribe: l
      }, b.useEffect(function() {
        fe.getSnapshot = a, fe.setSnapshot = A;
        var Sn = p(t._source);
        if (!i(y, Sn)) {
          var Z = a(t._source);
          if (typeof Z == "function" && h("Mutable source should not return a function as the snapshot value. Functions may close over mutable values and cause tearing."), !i(X, Z)) {
            A(Z);
            var ae = wu(ht);
            Xp(f, ae);
          }
          Od(f, f.mutableReadLanes);
        }
      }, [a, t, l]), b.useEffect(function() {
        var Sn = function() {
          var ae = fe.getSnapshot, G = fe.setSnapshot;
          try {
            G(ae(t._source));
            var be = wu(ht);
            Xp(f, be);
          } catch (De) {
            G(function() {
              throw De;
            });
          }
        }, Z = l(t._source, Sn);
        return typeof Z != "function" && h("Mutable source subscribe function must return an unsubscribe function."), Z;
      }, [t, l]), !i(_e, a) || !i(lt, t) || !i(Pt, l)) {
        var Jt = {
          pending: null,
          dispatch: null,
          lastRenderedReducer: lm,
          lastRenderedState: X
        };
        Jt.dispatch = A = Q0.bind(null, En, Jt), H.queue = Jt, H.baseQueue = null, X = wE(f, t, a), H.memoizedState = H.baseState = X;
      }
      return X;
    }
    function j0(e, t, a) {
      var l = Ps();
      return l.memoizedState = {
        refs: {
          getSnapshot: t,
          setSnapshot: null
        },
        source: e,
        subscribe: a
      }, xE(l, e, t, a);
    }
    function um(e, t, a) {
      var l = Is();
      return xE(l, e, t, a);
    }
    function zs(e) {
      var t = Ps();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = t.queue = {
        pending: null,
        dispatch: null,
        lastRenderedReducer: lm,
        lastRenderedState: e
      }, l = a.dispatch = Q0.bind(null, En, a);
      return [t.memoizedState, l];
    }
    function Sv(e) {
      return $0(lm);
    }
    function Cv(e) {
      return U0(lm);
    }
    function sm(e, t, a, l) {
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
    function cm(e) {
      var t = Ps(), a = {
        current: e
      };
      return Object.seal(a), t.memoizedState = a, a;
    }
    function af(e) {
      var t = Is();
      return t.memoizedState;
    }
    function H0(e, t, a, l) {
      var f = Ps(), p = l === void 0 ? null : l;
      En.flags |= e, f.memoizedState = sm(tf | t, a, void 0, p);
    }
    function F0(e, t, a, l) {
      var f = Is(), p = l === void 0 ? null : l, y = void 0;
      if (na !== null) {
        var b = na.memoizedState;
        if (y = b.destroy, p !== null) {
          var w = b.deps;
          if (I0(p, w)) {
            sm(t, a, y, p);
            return;
          }
        }
      }
      En.flags |= e, f.memoizedState = sm(tf | t, a, y, p);
    }
    function fm(e, t) {
      return typeof jest != "undefined" && Uw(En), H0(vt | ql, hv, e, t);
    }
    function of(e, t) {
      return typeof jest != "undefined" && Uw(En), F0(vt | ql, hv, e, t);
    }
    function B0(e, t) {
      return H0(vt, nf, e, t);
    }
    function dm(e, t) {
      return F0(vt, nf, e, t);
    }
    function TE(e, t) {
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
      return H0(vt, nf, TE.bind(null, t, e), l);
    }
    function vm(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var l = a != null ? a.concat([e]) : null;
      return F0(vt, nf, TE.bind(null, t, e), l);
    }
    function CO(e, t) {
    }
    var pm = CO;
    function W0(e, t) {
      var a = Ps(), l = t === void 0 ? null : t;
      return a.memoizedState = [e, l], e;
    }
    function hm(e, t) {
      var a = Is(), l = t === void 0 ? null : t, f = a.memoizedState;
      if (f !== null && l !== null) {
        var p = f[1];
        if (I0(l, p))
          return f[0];
      }
      return a.memoizedState = [e, l], e;
    }
    function K0(e, t) {
      var a = Ps(), l = t === void 0 ? null : t, f = e();
      return a.memoizedState = [f, l], f;
    }
    function mm(e, t) {
      var a = Is(), l = t === void 0 ? null : t, f = a.memoizedState;
      if (f !== null && l !== null) {
        var p = f[1];
        if (I0(l, p))
          return f[0];
      }
      var y = e();
      return a.memoizedState = [y, l], y;
    }
    function G0(e) {
      var t = zs(e), a = t[0], l = t[1];
      return fm(function() {
        var f = vi.transition;
        vi.transition = 1;
        try {
          l(e);
        } finally {
          vi.transition = f;
        }
      }, [e]), a;
    }
    function RE(e) {
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
    function _E(e) {
      var t = Cv(), a = t[0], l = t[1];
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
    function q0() {
      var e = zs(!1), t = e[0], a = e[1], l = EO.bind(null, a);
      return cm(l), [l, t];
    }
    function kE() {
      var e = Sv(), t = e[0], a = af(), l = a.current;
      return [l, t];
    }
    function ME() {
      var e = Cv(), t = e[0], a = af(), l = a.current;
      return [l, t];
    }
    var gm = !1;
    function wO() {
      return gm;
    }
    function OE(e) {
      {
        var t = Re(e.type) || "Unknown";
        xi() && !L0[t] && (h("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly."), L0[t] = !0);
      }
    }
    function Y0() {
      var e = MM.bind(null, OE.bind(null, En));
      if (O0()) {
        var t = !1, a = En, l = function() {
          throw t || (t = !0, gm = !0, p(e()), gm = !1, OE(a)), Error("The object passed back from useOpaqueIdentifier is meant to be passed through to attributes only. Do not read the value directly.");
        }, f = NM(l), p = zs(f)[1];
        return (En.mode & Ra) === Un && (En.flags |= vt | ql, sm(tf | hv, function() {
          p(e());
        }, void 0, null)), f;
      } else {
        var y = e();
        return zs(y), y;
      }
    }
    function NE() {
      var e = Sv()[0];
      return e;
    }
    function DE() {
      var e = Cv()[0];
      return e;
    }
    function Q0(e, t, a) {
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
        yv = om = !0;
      else {
        if (e.lanes === ue && (b === null || b.lanes === ue)) {
          var w = t.lastRenderedReducer;
          if (w !== null) {
            var O;
            O = Pe.current, Pe.current = Ki;
            try {
              var A = t.lastRenderedState, X = w(A, a);
              if (p.eagerReducer = w, p.eagerState = X, i(X, A))
                return;
            } catch (H) {
            } finally {
              Pe.current = O;
            }
          }
        }
        typeof jest != "undefined" && ($w(e), oN(e)), ra(e, f, l);
      }
    }
    var ym = {
      readContext: pr,
      useCallback: _a,
      useContext: _a,
      useEffect: _a,
      useImperativeHandle: _a,
      useLayoutEffect: _a,
      useMemo: _a,
      useReducer: _a,
      useRef: _a,
      useState: _a,
      useDebugValue: _a,
      useDeferredValue: _a,
      useTransition: _a,
      useMutableSource: _a,
      useOpaqueIdentifier: _a,
      unstable_isNewReconciler: Ae
    }, AE = null, LE = null, PE = null, IE = null, zo = null, Ki = null, bm = null;
    {
      var X0 = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, It = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      AE = {
        readContext: function(e, t) {
          return pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", bn(), bv(t), W0(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", bn(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", bn(), bv(t), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", bn(), bv(a), V0(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", bn(), bv(t), B0(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", bn(), bv(t);
          var a = Pe.current;
          Pe.current = zo;
          try {
            return K0(e, t);
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
          return ve = "useRef", bn(), cm(e);
        },
        useState: function(e) {
          ve = "useState", bn();
          var t = Pe.current;
          Pe.current = zo;
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
          return ve = "useDeferredValue", bn(), G0(e);
        },
        useTransition: function() {
          return ve = "useTransition", bn(), q0();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", bn(), j0(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", bn(), Y0();
        },
        unstable_isNewReconciler: Ae
      }, LE = {
        readContext: function(e, t) {
          return pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", Fe(), W0(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", Fe(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", Fe(), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", Fe(), V0(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", Fe(), B0(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", Fe();
          var a = Pe.current;
          Pe.current = zo;
          try {
            return K0(e, t);
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
          return ve = "useRef", Fe(), cm(e);
        },
        useState: function(e) {
          ve = "useState", Fe();
          var t = Pe.current;
          Pe.current = zo;
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
          return ve = "useDeferredValue", Fe(), G0(e);
        },
        useTransition: function() {
          return ve = "useTransition", Fe(), q0();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", Fe(), j0(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", Fe(), Y0();
        },
        unstable_isNewReconciler: Ae
      }, PE = {
        readContext: function(e, t) {
          return pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", Fe(), hm(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", Fe(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", Fe(), of(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", Fe(), vm(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", Fe(), dm(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", Fe();
          var a = Pe.current;
          Pe.current = Ki;
          try {
            return mm(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", Fe();
          var l = Pe.current;
          Pe.current = Ki;
          try {
            return $0(e, t, a);
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
          Pe.current = Ki;
          try {
            return Sv(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", Fe(), pm();
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", Fe(), RE(e);
        },
        useTransition: function() {
          return ve = "useTransition", Fe(), kE();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", Fe(), um(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", Fe(), NE();
        },
        unstable_isNewReconciler: Ae
      }, IE = {
        readContext: function(e, t) {
          return pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", Fe(), hm(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", Fe(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", Fe(), of(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", Fe(), vm(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", Fe(), dm(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", Fe();
          var a = Pe.current;
          Pe.current = bm;
          try {
            return mm(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", Fe();
          var l = Pe.current;
          Pe.current = bm;
          try {
            return U0(e, t, a);
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
          Pe.current = bm;
          try {
            return Cv(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", Fe(), pm();
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", Fe(), _E(e);
        },
        useTransition: function() {
          return ve = "useTransition", Fe(), ME();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", Fe(), um(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", Fe(), DE();
        },
        unstable_isNewReconciler: Ae
      }, zo = {
        readContext: function(e, t) {
          return X0(), pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", It(), bn(), W0(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", It(), bn(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", It(), bn(), fm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", It(), bn(), V0(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", It(), bn(), B0(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", It(), bn();
          var a = Pe.current;
          Pe.current = zo;
          try {
            return K0(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", It(), bn();
          var l = Pe.current;
          Pe.current = zo;
          try {
            return z0(e, t, a);
          } finally {
            Pe.current = l;
          }
        },
        useRef: function(e) {
          return ve = "useRef", It(), bn(), cm(e);
        },
        useState: function(e) {
          ve = "useState", It(), bn();
          var t = Pe.current;
          Pe.current = zo;
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
          return ve = "useDeferredValue", It(), bn(), G0(e);
        },
        useTransition: function() {
          return ve = "useTransition", It(), bn(), q0();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", It(), bn(), j0(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", It(), bn(), Y0();
        },
        unstable_isNewReconciler: Ae
      }, Ki = {
        readContext: function(e, t) {
          return X0(), pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", It(), Fe(), hm(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", It(), Fe(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", It(), Fe(), of(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", It(), Fe(), vm(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", It(), Fe(), dm(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", It(), Fe();
          var a = Pe.current;
          Pe.current = Ki;
          try {
            return mm(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", It(), Fe();
          var l = Pe.current;
          Pe.current = Ki;
          try {
            return $0(e, t, a);
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
          Pe.current = Ki;
          try {
            return Sv(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", It(), Fe(), pm();
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", It(), Fe(), RE(e);
        },
        useTransition: function() {
          return ve = "useTransition", It(), Fe(), kE();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", It(), Fe(), um(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", It(), Fe(), NE();
        },
        unstable_isNewReconciler: Ae
      }, bm = {
        readContext: function(e, t) {
          return X0(), pr(e, t);
        },
        useCallback: function(e, t) {
          return ve = "useCallback", It(), Fe(), hm(e, t);
        },
        useContext: function(e, t) {
          return ve = "useContext", It(), Fe(), pr(e, t);
        },
        useEffect: function(e, t) {
          return ve = "useEffect", It(), Fe(), of(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ve = "useImperativeHandle", It(), Fe(), vm(e, t, a);
        },
        useLayoutEffect: function(e, t) {
          return ve = "useLayoutEffect", It(), Fe(), dm(e, t);
        },
        useMemo: function(e, t) {
          ve = "useMemo", It(), Fe();
          var a = Pe.current;
          Pe.current = Ki;
          try {
            return mm(e, t);
          } finally {
            Pe.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ve = "useReducer", It(), Fe();
          var l = Pe.current;
          Pe.current = Ki;
          try {
            return U0(e, t, a);
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
          Pe.current = Ki;
          try {
            return Cv(e);
          } finally {
            Pe.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ve = "useDebugValue", It(), Fe(), pm();
        },
        useDeferredValue: function(e) {
          return ve = "useDeferredValue", It(), Fe(), _E(e);
        },
        useTransition: function() {
          return ve = "useTransition", It(), Fe(), ME();
        },
        useMutableSource: function(e, t, a) {
          return ve = "useMutableSource", It(), Fe(), um(e, t, a);
        },
        useOpaqueIdentifier: function() {
          return ve = "useOpaqueIdentifier", It(), Fe(), DE();
        },
        unstable_isNewReconciler: Ae
      };
    }
    var Sm = u.unstable_now, zE = 0, Ev = -1;
    function xO() {
      return zE;
    }
    function $E() {
      zE = Sm();
    }
    function Z0(e) {
      Ev = Sm(), e.actualStartTime < 0 && (e.actualStartTime = Sm());
    }
    function UE(e) {
      Ev = -1;
    }
    function Cm(e, t) {
      if (Ev >= 0) {
        var a = Sm() - Ev;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Ev = -1;
      }
    }
    function J0(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    var wv = d.ReactCurrentOwner, $o = !1, eb, xv, tb, nb, rb, $s, ab, Em;
    eb = {}, xv = {}, tb = {}, nb = {}, rb = {}, $s = !1, ab = {}, Em = {};
    function ka(e, t, a, l) {
      e === null ? t.child = dE(t, null, a, l) : t.child = em(t, e.child, a, l);
    }
    function TO(e, t, a, l) {
      t.child = em(t, e.child, null, l), t.child = em(t, null, a, l);
    }
    function jE(e, t, a, l, f) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && Fi(
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
        if (wv.current = t, er(!0), w = rf(e, t, y, l, b, f), t.mode & Qn) {
          _r();
          try {
            w = rf(e, t, y, l, b, f);
          } finally {
            xn();
          }
        }
        er(!1);
      }
      return e !== null && !$o ? (CE(e, t, f), wl(e, t, f)) : (t.flags |= Br, ka(e, t, w, f), t.child);
    }
    function HE(e, t, a, l, f, p) {
      if (e === null) {
        var y = a.type;
        if (yN(y) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var b = y;
          return b = pf(y), t.tag = q, t.type = b, ub(t, y), FE(e, t, b, l, f, p);
        }
        {
          var w = y.propTypes;
          w && Fi(
            w,
            l,
            // Resolved props
            "prop",
            Re(y)
          );
        }
        var O = Kb(a.type, null, l, t, t.mode, p);
        return O.ref = t.ref, O.return = t, t.child = O, O;
      }
      {
        var A = a.type, X = A.propTypes;
        X && Fi(
          X,
          l,
          // Resolved props
          "prop",
          Re(A)
        );
      }
      var H = e.child;
      if (!wr(f, p)) {
        var J = H.memoizedProps, fe = a.compare;
        if (fe = fe !== null ? fe : v, fe(J, l) && e.ref === t.ref)
          return wl(e, t, p);
      }
      t.flags |= Br;
      var _e = Bs(H, l);
      return _e.ref = t.ref, _e.return = t, t.child = _e, _e;
    }
    function FE(e, t, a, l, f, p) {
      if (t.type !== t.elementType) {
        var y = t.elementType;
        if (y.$$typeof === At) {
          var b = y, w = b._payload, O = b._init;
          try {
            y = O(w);
          } catch (H) {
            y = null;
          }
          var A = y && y.propTypes;
          A && Fi(
            A,
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
          if ($o = !1, wr(p, f))
            (e.flags & Yu) !== un && ($o = !0);
          else
            return t.lanes = e.lanes, wl(e, t, p);
      }
      return ob(e, t, a, l, p);
    }
    function ib(e, t, a) {
      var l = t.pendingProps, f = l.children, p = e !== null ? e.memoizedState : null;
      if (l.mode === "hidden" || l.mode === "unstable-defer-without-hiding")
        if ((t.mode & Os) === Un) {
          var y = {
            baseLanes: ue
          };
          t.memoizedState = y, $m(t, a);
        } else if (wr(a, Ia)) {
          var A = {
            baseLanes: ue
          };
          t.memoizedState = A;
          var X = p !== null ? p.baseLanes : a;
          $m(t, X);
        } else {
          var b;
          if (p !== null) {
            var w = p.baseLanes;
            b = tn(w, a);
          } else
            b = a;
          Vm(Ia), t.lanes = t.childLanes = Ia;
          var O = {
            baseLanes: b
          };
          return t.memoizedState = O, $m(t, b), null;
        }
      else {
        var H;
        p !== null ? (H = tn(p.baseLanes, a), t.memoizedState = null) : H = a, $m(t, H);
      }
      return ka(e, t, f, a), t.child;
    }
    var RO = ib;
    function _O(e, t, a) {
      var l = t.pendingProps;
      return ka(e, t, l, a), t.child;
    }
    function kO(e, t, a) {
      var l = t.pendingProps.children;
      return ka(e, t, l, a), t.child;
    }
    function MO(e, t, a) {
      {
        t.flags |= vt;
        var l = t.stateNode;
        l.effectDuration = 0, l.passiveEffectDuration = 0;
      }
      var f = t.pendingProps, p = f.children;
      return ka(e, t, p, a), t.child;
    }
    function BE(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Cr);
    }
    function ob(e, t, a, l, f) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && Fi(
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
        if (wv.current = t, er(!0), w = rf(e, t, a, l, y, f), t.mode & Qn) {
          _r();
          try {
            w = rf(e, t, a, l, y, f);
          } finally {
            xn();
          }
        }
        er(!1);
      }
      return e !== null && !$o ? (CE(e, t, f), wl(e, t, f)) : (t.flags |= Br, ka(e, t, w, f), t.child);
    }
    function VE(e, t, a, l, f) {
      if (t.type !== t.elementType) {
        var p = a.propTypes;
        p && Fi(
          p,
          l,
          // Resolved props
          "prop",
          Re(a)
        );
      }
      var y;
      Lo(a) ? (y = !0, Ph(t)) : y = !1, Zc(t, f);
      var b = t.stateNode, w;
      b === null ? (e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tt), uE(t, a, l), m0(t, a, l, f), w = !0) : e === null ? w = aO(t, a, l, f) : w = iO(e, t, a, l, f);
      var O = lb(e, t, a, w, y, f);
      {
        var A = t.stateNode;
        w && A.props !== l && ($s || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Re(t.type) || "a component"), $s = !0);
      }
      return O;
    }
    function lb(e, t, a, l, f, p) {
      BE(e, t);
      var y = (t.flags & nn) !== un;
      if (!l && !y)
        return f && MC(t, a, !1), wl(e, t, p);
      var b = t.stateNode;
      wv.current = t;
      var w;
      if (y && typeof a.getDerivedStateFromError != "function")
        w = null, UE();
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
      return t.flags |= Br, e !== null && y ? TO(e, t, w, p) : ka(e, t, w, p), t.memoizedState = b.state, f && MC(t, a, !0), t.child;
    }
    function WE(e) {
      var t = e.stateNode;
      t.pendingContext ? _C(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _C(e, t.context, !1), E0(e, t.containerInfo);
    }
    function OO(e, t, a) {
      WE(t);
      var l = t.updateQueue;
      if (!(e !== null && l !== null))
        throw Error("If the root does not have an updateQueue, we should have already bailed out. This error is likely caused by a bug in React. Please file an issue.");
      var f = t.pendingProps, p = t.memoizedState, y = p !== null ? p.element : null;
      JC(e, t), sv(t, f, null, a);
      var b = t.memoizedState, w = b.element;
      if (w === y)
        return M0(), wl(e, t, a);
      var O = t.stateNode;
      if (O.hydrate && fO(t)) {
        {
          var A = O.mutableSourceEagerHydrationData;
          if (A != null)
            for (var X = 0; X < A.length; X += 2) {
              var H = A[X], J = A[X + 1];
              SE(H, J);
            }
        }
        var fe = dE(t, null, w, a);
        t.child = fe;
        for (var _e = fe; _e; )
          _e.flags = _e.flags & ~Tt | Sa, _e = _e.sibling;
      } else
        ka(e, t, w, a), M0();
      return t.child;
    }
    function NO(e, t, a) {
      pE(t), e === null && k0(t);
      var l = t.type, f = t.pendingProps, p = e !== null ? e.memoizedProps : null, y = f.children, b = Hy(l, f);
      return b ? y = null : p !== null && Hy(l, p) && (t.flags |= Sr), BE(e, t), ka(e, t, y, a), t.child;
    }
    function DO(e, t) {
      return e === null && k0(t), null;
    }
    function AO(e, t, a, l, f) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tt);
      var p = t.pendingProps, y = a, b = y._payload, w = y._init, O = w(b);
      t.type = O;
      var A = t.tag = bN(O), X = Vi(O, p), H;
      switch (A) {
        case x:
          return ub(t, O), t.type = O = pf(O), H = ob(null, t, O, X, f), H;
        case E:
          return t.type = O = jb(O), H = VE(null, t, O, X, f), H;
        case z:
          return t.type = O = Hb(O), H = jE(null, t, O, X, f), H;
        case Y: {
          if (t.type !== t.elementType) {
            var J = O.propTypes;
            J && Fi(
              J,
              X,
              // Resolved for outer only
              "prop",
              Re(O)
            );
          }
          return H = HE(
            null,
            t,
            O,
            Vi(O.type, X),
            // The inner type can have defaults too
            l,
            f
          ), H;
        }
      }
      var fe = "";
      throw O !== null && typeof O == "object" && O.$$typeof === At && (fe = " Did you wrap a component in React.lazy() more than once?"), Error("Element type is invalid. Received a promise that resolves to: " + O + ". Lazy element type must resolve to a class or function." + fe);
    }
    function LO(e, t, a, l, f) {
      e !== null && (e.alternate = null, t.alternate = null, t.flags |= Tt), t.tag = E;
      var p;
      return Lo(a) ? (p = !0, Ph(t)) : p = !1, Zc(t, f), uE(t, a, l), m0(t, a, l, f), lb(null, t, a, !0, p, f);
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
          eb[w] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", w, w), eb[w] = !0);
        }
        t.mode & Qn && Bi.recordLegacyContextWarning(t, null), er(!0), wv.current = t, b = rf(null, t, a, f, p, l), er(!1);
      }
      if (t.flags |= Br, typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0) {
        var O = Re(a) || "Unknown";
        xv[O] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", O, O, O), xv[O] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof b == "object" && b !== null && typeof b.render == "function" && b.$$typeof === void 0
      ) {
        {
          var A = Re(a) || "Unknown";
          xv[A] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", A, A, A), xv[A] = !0);
        }
        t.tag = E, t.memoizedState = null, t.updateQueue = null;
        var X = !1;
        Lo(a) ? (X = !0, Ph(t)) : X = !1, t.memoizedState = b.state !== null && b.state !== void 0 ? b.state : null, i0(t);
        var H = a.getDerivedStateFromProps;
        return typeof H == "function" && Qh(t, a, H, f), lE(t, b), m0(t, a, f, l), lb(null, t, a, !0, X, l);
      } else {
        if (t.tag = x, t.mode & Qn) {
          _r();
          try {
            b = rf(null, t, a, f, p, l);
          } finally {
            xn();
          }
        }
        return ka(null, t, b, l), ub(t, a), t.child;
      }
    }
    function ub(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", l = Tn();
          l && (a += `

Check the render method of \`` + l + "`.");
          var f = l || e._debugID || "", p = e._debugSource;
          p && (f = p.fileName + ":" + p.lineNumber), rb[f] || (rb[f] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var y = Re(t) || "Unknown";
          nb[y] || (h("%s: Function components do not support getDerivedStateFromProps.", y), nb[y] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var b = Re(t) || "Unknown";
          tb[b] || (h("%s: Function components do not support contextType.", b), tb[b] = !0);
        }
      }
    }
    var wm = {
      dehydrated: null,
      retryLane: qn
    };
    function xm(e) {
      return {
        baseLanes: e
      };
    }
    function KE(e, t) {
      return {
        baseLanes: tn(e.baseLanes, t)
      };
    }
    function IO(e, t, a, l) {
      if (t !== null) {
        var f = t.memoizedState;
        if (f === null)
          return !1;
      }
      return rm(e, vv);
    }
    function GE(e, t) {
      return uu(e.childLanes, t);
    }
    function qE(e, t, a) {
      var l = t.pendingProps;
      $N(t) && (t.flags |= nn);
      var f = Wi.current, p = !1, y = (t.flags & nn) !== un;
      if (y || IO(f, e) ? (p = !0, t.flags &= ~nn) : (e === null || e.memoizedState !== null) && l.fallback !== void 0 && l.unstable_avoidThisFallback !== !0 && (f = sO(f, T0)), f = pv(f), As(t, f), e === null) {
        l.fallback !== void 0 && k0(t);
        var b = l.children, w = l.fallback;
        if (p) {
          var O = YE(t, b, w, a), A = t.child;
          return A.memoizedState = xm(a), t.memoizedState = wm, O;
        } else if (typeof l.unstable_expectedLoadTime == "number") {
          var X = YE(t, b, w, a), H = t.child;
          return H.memoizedState = xm(a), t.memoizedState = wm, t.lanes = wo, Vm(wo), X;
        } else
          return zO(t, b, a);
      } else {
        var J = e.memoizedState;
        if (J !== null)
          if (p) {
            var fe = l.fallback, _e = l.children, lt = ZE(e, t, _e, fe, a), Pt = t.child, ht = e.child.memoizedState;
            return Pt.memoizedState = ht === null ? xm(a) : KE(ht, a), Pt.childLanes = GE(e, a), t.memoizedState = wm, lt;
          } else {
            var Jt = l.children, Sn = XE(e, t, Jt, a);
            return t.memoizedState = null, Sn;
          }
        else if (p) {
          var Z = l.fallback, ae = l.children, G = ZE(e, t, ae, Z, a), be = t.child, De = e.child.memoizedState;
          return be.memoizedState = De === null ? xm(a) : KE(De, a), be.childLanes = GE(e, a), t.memoizedState = wm, G;
        } else {
          var Ye = l.children, Yt = XE(e, t, Ye, a);
          return t.memoizedState = null, Yt;
        }
      }
    }
    function zO(e, t, a) {
      var l = e.mode, f = {
        mode: "visible",
        children: t
      }, p = qb(f, l, a, null);
      return p.return = e, e.child = p, p;
    }
    function YE(e, t, a, l) {
      var f = e.mode, p = e.child, y = {
        mode: "hidden",
        children: t
      }, b, w;
      return (f & Ra) === Un && p !== null ? (b = p, b.childLanes = ue, b.pendingProps = y, e.mode & Ua && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = 0, b.treeBaseDuration = 0), w = Vs(a, f, l, null)) : (b = qb(y, f, ue, null), w = Vs(a, f, l, null)), b.return = e, w.return = e, b.sibling = w, e.child = b, w;
    }
    function QE(e, t) {
      return Bs(e, t);
    }
    function XE(e, t, a, l) {
      var f = e.child, p = f.sibling, y = QE(f, {
        mode: "visible",
        children: a
      });
      return (t.mode & Ra) === Un && (y.lanes = l), y.return = t, y.sibling = null, p !== null && (p.nextEffect = null, p.flags = Rn, t.firstEffect = t.lastEffect = p), t.child = y, y;
    }
    function ZE(e, t, a, l, f) {
      var p = t.mode, y = e.child, b = y.sibling, w = {
        mode: "hidden",
        children: a
      }, O;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (p & Ra) === Un && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== y
      ) {
        var A = t.child;
        O = A, O.childLanes = ue, O.pendingProps = w, t.mode & Ua && (O.actualDuration = 0, O.actualStartTime = -1, O.selfBaseDuration = y.selfBaseDuration, O.treeBaseDuration = y.treeBaseDuration);
        var X = O.lastEffect;
        X !== null ? (t.firstEffect = O.firstEffect, t.lastEffect = X, X.nextEffect = null) : t.firstEffect = t.lastEffect = null;
      } else
        O = QE(y, w);
      var H;
      return b !== null ? H = Bs(b, l) : (H = Vs(l, p, f, null), H.flags |= Tt), H.return = t, O.return = t, O.sibling = H, t.child = O, H;
    }
    function JE(e, t) {
      e.lanes = tn(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = tn(a.lanes, t)), QC(e.return, t);
    }
    function $O(e, t, a) {
      for (var l = t; l !== null; ) {
        if (l.tag === U) {
          var f = l.memoizedState;
          f !== null && JE(l, a);
        } else if (l.tag === ge)
          JE(l, a);
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
    function UO(e) {
      for (var t = e, a = null; t !== null; ) {
        var l = t.alternate;
        l !== null && am(l) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function jO(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !ab[e])
        if (ab[e] = !0, typeof e == "string")
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
    function HO(e, t) {
      e !== void 0 && !Em[e] && (e !== "collapsed" && e !== "hidden" ? (Em[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Em[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function ew(e, t) {
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
            if (!ew(e[a], a))
              return;
        } else {
          var l = ln(e);
          if (typeof l == "function") {
            var f = l.call(e);
            if (f)
              for (var p = f.next(), y = 0; !p.done; p = f.next()) {
                if (!ew(p.value, y))
                  return;
                y++;
              }
          } else
            h('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function sb(e, t, a, l, f, p) {
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
    function tw(e, t, a) {
      var l = t.pendingProps, f = l.revealOrder, p = l.tail, y = l.children;
      jO(f), HO(p, f), FO(y, f), ka(e, t, y, a);
      var b = Wi.current, w = rm(b, vv);
      if (w)
        b = R0(b, vv), t.flags |= nn;
      else {
        var O = e !== null && (e.flags & nn) !== un;
        O && $O(t, t.child, a), b = pv(b);
      }
      if (As(t, b), (t.mode & Ra) === Un)
        t.memoizedState = null;
      else
        switch (f) {
          case "forwards": {
            var A = UO(t.child), X;
            A === null ? (X = t.child, t.child = null) : (X = A.sibling, A.sibling = null), sb(
              t,
              !1,
              // isBackwards
              X,
              A,
              p,
              t.lastEffect
            );
            break;
          }
          case "backwards": {
            var H = null, J = t.child;
            for (t.child = null; J !== null; ) {
              var fe = J.alternate;
              if (fe !== null && am(fe) === null) {
                t.child = J;
                break;
              }
              var _e = J.sibling;
              J.sibling = H, H = J, J = _e;
            }
            sb(
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
            sb(
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
    function BO(e, t, a) {
      E0(t, t.stateNode.containerInfo);
      var l = t.pendingProps;
      return e === null ? t.child = em(t, null, l, a) : ka(e, t, l, a), t.child;
    }
    var nw = !1;
    function VO(e, t, a) {
      var l = t.type, f = l._context, p = t.pendingProps, y = t.memoizedProps, b = p.value;
      {
        "value" in p || nw || (nw = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var w = t.type.propTypes;
        w && Fi(w, p, "prop", "Context.Provider");
      }
      if (YC(t, b), y !== null) {
        var O = y.value, A = XM(f, b, O);
        if (A === 0) {
          if (y.children === p.children && !Ah())
            return wl(e, t, a);
        } else
          ZM(t, f, A, a);
      }
      var X = p.children;
      return ka(e, t, X, a), t.child;
    }
    var rw = !1;
    function WO(e, t, a) {
      var l = t.type;
      l._context === void 0 ? l !== l.Consumer && (rw || (rw = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : l = l._context;
      var f = t.pendingProps, p = f.children;
      typeof p != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Zc(t, a);
      var y = pr(l, f.unstable_observedBits), b;
      return wv.current = t, er(!0), b = p(y), er(!1), t.flags |= Br, ka(e, t, b, a), t.child;
    }
    function cb() {
      $o = !0;
    }
    function wl(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), UE(), Pb(t.lanes), wr(a, t.childLanes) ? (oO(e, t), t.child) : null;
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
    function aw(e, t, a) {
      var l = t.lanes;
      if (t._debugNeedsRemount && e !== null)
        return KO(e, t, Kb(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var f = e.memoizedProps, p = t.pendingProps;
        if (f !== p || Ah() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          $o = !0;
        else if (wr(a, l))
          (e.flags & Yu) !== un ? $o = !0 : $o = !1;
        else {
          switch ($o = !1, t.tag) {
            case _:
              WE(t), M0();
              break;
            case D:
              pE(t);
              break;
            case E: {
              var y = t.type;
              Lo(y) && Ph(t);
              break;
            }
            case N:
              E0(t, t.stateNode.containerInfo);
              break;
            case $: {
              var b = t.memoizedProps.value;
              YC(t, b);
              break;
            }
            case I:
              {
                var w = wr(a, t.childLanes);
                w && (t.flags |= vt);
                var O = t.stateNode;
                O.effectDuration = 0, O.passiveEffectDuration = 0;
              }
              break;
            case U: {
              var A = t.memoizedState;
              if (A !== null) {
                var X = t.child, H = X.childLanes;
                if (wr(a, H))
                  return qE(e, t, a);
                As(t, pv(Wi.current));
                var J = wl(e, t, a);
                return J !== null ? J.sibling : null;
              } else
                As(t, pv(Wi.current));
              break;
            }
            case ge: {
              var fe = (e.flags & nn) !== un, _e = wr(a, t.childLanes);
              if (fe) {
                if (_e)
                  return tw(e, t, a);
                t.flags |= nn;
              }
              var lt = t.memoizedState;
              if (lt !== null && (lt.rendering = null, lt.tail = null, lt.lastEffect = null), As(t, Wi.current), _e)
                break;
              return null;
            }
            case de:
            case Ce:
              return t.lanes = ue, ib(e, t, a);
          }
          return wl(e, t, a);
        }
      } else
        $o = !1;
      switch (t.lanes = ue, t.tag) {
        case k:
          return PO(e, t, t.type, a);
        case ne: {
          var Pt = t.elementType;
          return AO(e, t, Pt, l, a);
        }
        case x: {
          var ht = t.type, Jt = t.pendingProps, Sn = t.elementType === ht ? Jt : Vi(ht, Jt);
          return ob(e, t, ht, Sn, a);
        }
        case E: {
          var Z = t.type, ae = t.pendingProps, G = t.elementType === Z ? ae : Vi(Z, ae);
          return VE(e, t, Z, G, a);
        }
        case _:
          return OO(e, t, a);
        case D:
          return NO(e, t, a);
        case P:
          return DO(e, t);
        case U:
          return qE(e, t, a);
        case N:
          return BO(e, t, a);
        case z: {
          var be = t.type, De = t.pendingProps, Ye = t.elementType === be ? De : Vi(be, De);
          return jE(e, t, be, Ye, a);
        }
        case F:
          return _O(e, t, a);
        case L:
          return kO(e, t, a);
        case I:
          return MO(e, t, a);
        case $:
          return VO(e, t, a);
        case W:
          return WO(e, t, a);
        case Y: {
          var Yt = t.type, Mn = t.pendingProps, jn = Vi(Yt, Mn);
          if (t.type !== t.elementType) {
            var sn = Yt.propTypes;
            sn && Fi(
              sn,
              jn,
              // Resolved for outer only
              "prop",
              Re(Yt)
            );
          }
          return jn = Vi(Yt.type, jn), HE(e, t, Yt, jn, l, a);
        }
        case q:
          return FE(e, t, t.type, t.pendingProps, l, a);
        case oe: {
          var hr = t.type, rn = t.pendingProps, Hn = t.elementType === hr ? rn : Vi(hr, rn);
          return LO(e, t, hr, Hn, a);
        }
        case ge:
          return tw(e, t, a);
        case pe:
          break;
        case te:
          break;
        case se:
          break;
        case de:
          return ib(e, t, a);
        case Ce:
          return RO(e, t, a);
      }
      throw Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function lf(e) {
      e.flags |= vt;
    }
    function iw(e) {
      e.flags |= Cr;
    }
    var ow, fb, lw, uw;
    ow = function(e, t, a, l) {
      for (var f = t.child; f !== null; ) {
        if (f.tag === D || f.tag === P)
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
    }, fb = function(e) {
    }, lw = function(e, t, a, l, f) {
      var p = e.memoizedProps;
      if (p !== l) {
        var y = t.stateNode, b = w0(), w = qk(y, a, p, l, f, b);
        t.updateQueue = w, w && lf(t);
      }
    }, uw = function(e, t, a, l) {
      a !== l && lf(t);
    };
    function Tv(e, t) {
      if (!O0())
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
    function sw(e, t, a) {
      var l = t.pendingProps;
      switch (t.tag) {
        case k:
        case ne:
        case q:
        case x:
        case z:
        case F:
        case L:
        case I:
        case W:
        case Y:
          return null;
        case E: {
          var f = t.type;
          return Lo(f) && Lh(t), null;
        }
        case _: {
          Jc(t), qy(t), D0();
          var p = t.stateNode;
          if (p.pendingContext && (p.context = p.pendingContext, p.pendingContext = null), e === null || e.child === null) {
            var y = im(t);
            y ? lf(t) : p.hydrate || (t.flags |= ei);
          }
          return fb(t), null;
        }
        case D: {
          x0(t);
          var b = vE(), w = t.type;
          if (e !== null && t.stateNode != null)
            lw(e, t, w, l, b), e.ref !== t.ref && iw(t);
          else {
            if (!l) {
              if (t.stateNode === null)
                throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return null;
            }
            var O = w0(), A = im(t);
            if (A)
              dO(t, b, O) && lf(t);
            else {
              var X = Wk(w, l, b, O, t);
              ow(X, t, !1, !1), t.stateNode = X, Gk(X, w, l, b) && lf(t);
            }
            t.ref !== null && iw(t);
          }
          return null;
        }
        case P: {
          var H = l;
          if (e && t.stateNode != null) {
            var J = e.memoizedProps;
            uw(e, t, J, H);
          } else {
            if (typeof H != "string" && t.stateNode === null)
              throw Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var fe = vE(), _e = w0(), lt = im(t);
            lt ? vO(t) && lf(t) : t.stateNode = Yk(H, fe, _e, t);
          }
          return null;
        }
        case U: {
          ef(t);
          var Pt = t.memoizedState;
          if ((t.flags & nn) !== un)
            return t.lanes = a, (t.mode & Ua) !== Un && J0(t), t;
          var ht = Pt !== null, Jt = !1;
          if (e === null)
            t.memoizedProps.fallback !== void 0 && im(t);
          else {
            var Sn = e.memoizedState;
            Jt = Sn !== null;
          }
          if (ht && !Jt && (t.mode & Ra) !== Un) {
            var Z = e === null && t.memoizedProps.unstable_avoidThisFallback !== !0;
            Z || rm(Wi.current, T0) ? D2() : A2();
          }
          return (ht || Jt) && (t.flags |= vt), null;
        }
        case N:
          return Jc(t), fb(t), e === null && DM(t.stateNode.containerInfo), null;
        case $:
          return n0(t), null;
        case oe: {
          var ae = t.type;
          return Lo(ae) && Lh(t), null;
        }
        case ge: {
          ef(t);
          var G = t.memoizedState;
          if (G === null)
            return null;
          var be = (t.flags & nn) !== un, De = G.rendering;
          if (De === null)
            if (be)
              Tv(G, !1);
            else {
              var Ye = P2() && (e === null || (e.flags & nn) === un);
              if (!Ye)
                for (var Yt = t.child; Yt !== null; ) {
                  var Mn = am(Yt);
                  if (Mn !== null) {
                    be = !0, t.flags |= nn, Tv(G, !1);
                    var jn = Mn.updateQueue;
                    return jn !== null && (t.updateQueue = jn, t.flags |= vt), G.lastEffect === null && (t.firstEffect = null), t.lastEffect = G.lastEffect, lO(t, a), As(t, R0(Wi.current, vv)), t.child;
                  }
                  Yt = Yt.sibling;
                }
              G.tail !== null && ta() > Tw() && (t.flags |= nn, be = !0, Tv(G, !1), t.lanes = wo, Vm(wo));
            }
          else {
            if (!be) {
              var sn = am(De);
              if (sn !== null) {
                t.flags |= nn, be = !0;
                var hr = sn.updateQueue;
                if (hr !== null && (t.updateQueue = hr, t.flags |= vt), Tv(G, !0), G.tail === null && G.tailMode === "hidden" && !De.alternate && !O0()) {
                  var rn = t.lastEffect = G.lastEffect;
                  return rn !== null && (rn.nextEffect = null), null;
                }
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                ta() * 2 - G.renderingStartTime > Tw() && a !== Ia && (t.flags |= nn, be = !0, Tv(G, !1), t.lanes = wo, Vm(wo));
            }
            if (G.isBackwards)
              De.sibling = t.child, t.child = De;
            else {
              var Hn = G.last;
              Hn !== null ? Hn.sibling = De : t.child = De, G.last = De;
            }
          }
          if (G.tail !== null) {
            var Ar = G.tail;
            G.rendering = Ar, G.tail = Ar.sibling, G.lastEffect = t.lastEffect, G.renderingStartTime = ta(), Ar.sibling = null;
            var nr = Wi.current;
            return be ? nr = R0(nr, vv) : nr = pv(nr), As(t, nr), Ar;
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
          if (Lb(t), e !== null) {
            var Fo = t.memoizedState, rr = e.memoizedState, Bo = rr !== null, Ws = Fo !== null;
            Bo !== Ws && l.mode !== "unstable-defer-without-hiding" && (t.flags |= vt);
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
          Lo(a) && Lh(e);
          var l = e.flags;
          return l & La ? (e.flags = l & ~La | nn, (e.mode & Ua) !== Un && J0(e), e) : null;
        }
        case _: {
          Jc(e), qy(e), D0();
          var f = e.flags;
          if ((f & nn) !== un)
            throw Error("The root failed to unmount after an error. This is likely a bug in React. Please file an issue.");
          return e.flags = f & ~La | nn, e;
        }
        case D:
          return x0(e), null;
        case U: {
          ef(e);
          var p = e.flags;
          return p & La ? (e.flags = p & ~La | nn, (e.mode & Ua) !== Un && J0(e), e) : null;
        }
        case ge:
          return ef(e), null;
        case N:
          return Jc(e), null;
        case $:
          return n0(e), null;
        case de:
        case Ce:
          return Lb(e), null;
        default:
          return null;
      }
    }
    function cw(e) {
      switch (e.tag) {
        case E: {
          var t = e.type.childContextTypes;
          t != null && Lh(e);
          break;
        }
        case _: {
          Jc(e), qy(e), D0();
          break;
        }
        case D: {
          x0(e);
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
          n0(e);
          break;
        case de:
        case Ce:
          Lb(e);
          break;
      }
    }
    function db(e, t) {
      return {
        value: e,
        source: t,
        stack: Or(t)
      };
    }
    function qO(e, t) {
      return !0;
    }
    function vb(e, t) {
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
        var b = f ? Re(f.type) : null, w = b ? "The above error occurred in the <" + b + "> component:" : "The above error occurred in one of your React components:", O, A = Re(e.type);
        A ? O = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + A + ".") : O = `Consider adding an error boundary to your tree to customize error handling behavior.
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
    var YO = typeof WeakMap == "function" ? WeakMap : Map;
    function fw(e, t, a) {
      var l = yu(kn, a);
      l.tag = r0, l.payload = {
        element: null
      };
      var f = t.value;
      return l.callback = function() {
        Y2(f), vb(e, t);
      }, l;
    }
    function dw(e, t, a) {
      var l = yu(kn, a);
      l.tag = r0;
      var f = e.type.getDerivedStateFromError;
      if (typeof f == "function") {
        var p = t.value;
        l.payload = function() {
          return vb(e, t), f(p);
        };
      }
      var y = e.stateNode;
      return y !== null && typeof y.componentDidCatch == "function" ? l.callback = function() {
        Kw(e), typeof f != "function" && (G2(this), vb(e, t));
        var w = t.value, O = t.stack;
        this.componentDidCatch(w, {
          componentStack: O !== null ? O : ""
        }), typeof f != "function" && (wr(e.lanes, Ft) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Re(e.type) || "Unknown"));
      } : l.callback = function() {
        Kw(e);
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
        if ((a.mode & Ra) === Un) {
          var y = a.alternate;
          y ? (a.updateQueue = y.updateQueue, a.memoizedState = y.memoizedState, a.lanes = y.lanes) : (a.updateQueue = null, a.memoizedState = null);
        }
        var b = rm(Wi.current, T0), w = t;
        do {
          if (w.tag === U && cO(w, b)) {
            var O = w.updateQueue;
            if (O === null) {
              var A = /* @__PURE__ */ new Set();
              A.add(p), w.updateQueue = A;
            } else
              O.add(p);
            if ((w.mode & Ra) === Un) {
              if (w.flags |= nn, a.flags |= Yu, a.flags &= ~(ad | qu), a.tag === E) {
                var X = a.alternate;
                if (X === null)
                  a.tag = oe;
                else {
                  var H = yu(kn, Ft);
                  H.tag = Wh, bu(a, H);
                }
              }
              a.lanes = tn(a.lanes, Ft);
              return;
            }
            QO(e, p, f), w.flags |= La, w.lanes = f;
            return;
          }
          w = w.return;
        } while (w !== null);
        l = new Error((Re(a.type) || "A React component") + ` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`);
      }
      L2(), l = db(l, a);
      var J = t;
      do {
        switch (J.tag) {
          case _: {
            var fe = l;
            J.flags |= La;
            var _e = dr(f);
            J.lanes = tn(J.lanes, _e);
            var lt = fw(J, fe, _e);
            eE(J, lt);
            return;
          }
          case E:
            var Pt = l, ht = J.type, Jt = J.stateNode;
            if ((J.flags & nn) === un && (typeof ht.getDerivedStateFromError == "function" || Jt !== null && typeof Jt.componentDidCatch == "function" && !Ib(Jt))) {
              J.flags |= La;
              var Sn = dr(f);
              J.lanes = tn(J.lanes, Sn);
              var Z = dw(J, Pt, Sn);
              eE(J, Z);
              return;
            }
            break;
        }
        J = J.return;
      } while (J !== null);
    }
    var vw = null;
    vw = /* @__PURE__ */ new Set();
    var ZO = typeof WeakSet == "function" ? WeakSet : Set, JO = function(e, t) {
      t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount();
    };
    function e2(e, t) {
      if (Hr(null, JO, null, e, t), ua()) {
        var a = Fr();
        xu(e, a);
      }
    }
    function pw(e) {
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
    function t2(e, t) {
      if (Hr(null, t, null), ua()) {
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
            t.type === t.elementType && !$s && (f.props !== t.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(t.type) || "instance"), f.state !== t.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(t.type) || "instance"));
            var p = f.getSnapshotBeforeUpdate(t.elementType === t.type ? a : Vi(t.type, a), l);
            {
              var y = vw;
              p === void 0 && !y.has(t.type) && (y.add(t.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Re(t.type)));
            }
            f.__reactInternalSnapshotBeforeUpdate = p;
          }
          return;
        }
        case _: {
          if (t.flags & ei) {
            var b = t.stateNode;
            By(b.containerInfo);
          }
          return;
        }
        case D:
        case P:
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
          (b & hv) !== _0 && (b & tf) !== _0 && (Lw(e, f), V2(e, f)), f = y;
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
              a.type === a.elementType && !$s && (f.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a.type) || "instance"), f.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a.type) || "instance")), f.componentDidMount();
            else {
              var p = a.elementType === a.type ? t.memoizedProps : Vi(a.type, t.memoizedProps), y = t.memoizedState;
              a.type === a.elementType && !$s && (f.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a.type) || "instance"), f.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a.type) || "instance")), f.componentDidUpdate(p, y, f.__reactInternalSnapshotBeforeUpdate);
            }
          var b = a.updateQueue;
          b !== null && (a.type === a.elementType && !$s && (f.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Re(a.type) || "instance"), f.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Re(a.type) || "instance")), nE(a, b, f));
          return;
        }
        case _: {
          var w = a.updateQueue;
          if (w !== null) {
            var O = null;
            if (a.child !== null)
              switch (a.child.tag) {
                case D:
                  O = a.child.stateNode;
                  break;
                case E:
                  O = a.child.stateNode;
                  break;
              }
            nE(a, w, O);
          }
          return;
        }
        case D: {
          var A = a.stateNode;
          if (t === null && a.flags & vt) {
            var X = a.type, H = a.memoizedProps;
            Xk(A, X, H);
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
            var _e = xO();
            typeof fe == "function" && fe(a.memoizedProps.id, t === null ? "mount" : "update", a.actualDuration, a.treeBaseDuration, a.actualStartTime, _e, e.memoizedInteractions);
          }
          return;
        }
        case U: {
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
    function hw(e, t) {
      for (var a = e; ; ) {
        if (a.tag === D) {
          var l = a.stateNode;
          t ? oM(l) : uM(a.stateNode, a.memoizedProps);
        } else if (a.tag === P) {
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
          case D:
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
    function mw(e, t, a) {
      switch (UM(t), t.tag) {
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
                w !== void 0 && ((O & hv) !== _0 ? Lw(t, y) : t2(t, w)), y = y.next;
              } while (y !== p);
            }
          }
          return;
        }
        case E: {
          pw(t);
          var A = t.stateNode;
          typeof A.componentWillUnmount == "function" && e2(t, A);
          return;
        }
        case D: {
          pw(t);
          return;
        }
        case N: {
          Sw(e, t);
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
        if (mw(e, l), l.child !== null && // If we use mutation we drill down into portals using commitUnmount above.
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
    function gw(e) {
      e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null, e._debugOwner = null;
    }
    function c2(e) {
      for (var t = e.return; t !== null; ) {
        if (yw(t))
          return t;
        t = t.return;
      }
      throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function yw(e) {
      return e.tag === D || e.tag === _ || e.tag === N;
    }
    function f2(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || yw(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== D && t.tag !== P && t.tag !== re; ) {
            if (t.flags & Tt || t.child === null || t.tag === N)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Tt))
            return t.stateNode;
        }
    }
    function bw(e) {
      var t = c2(e), a, l, f = t.stateNode;
      switch (t.tag) {
        case D:
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
      t.flags & Sr && (mC(a), t.flags &= ~Sr);
      var p = f2(e);
      l ? pb(e, p, a) : hb(e, p, a);
    }
    function pb(e, t, a) {
      var l = e.tag, f = l === D || l === P;
      if (f || we) {
        var p = f ? e.stateNode : e.stateNode.instance;
        t ? rM(a, p, t) : tM(a, p);
      } else if (l !== N) {
        var y = e.child;
        if (y !== null) {
          pb(y, t, a);
          for (var b = y.sibling; b !== null; )
            pb(b, t, a), b = b.sibling;
        }
      }
    }
    function hb(e, t, a) {
      var l = e.tag, f = l === D || l === P;
      if (f || we) {
        var p = f ? e.stateNode : e.stateNode.instance;
        t ? nM(a, p, t) : eM(a, p);
      } else if (l !== N) {
        var y = e.child;
        if (y !== null) {
          hb(y, t, a);
          for (var b = y.sibling; b !== null; )
            hb(b, t, a), b = b.sibling;
        }
      }
    }
    function Sw(e, t, a) {
      for (var l = t, f = !1, p, y; ; ) {
        if (!f) {
          var b = l.return;
          e:
            for (; ; ) {
              if (b === null)
                throw Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
              var w = b.stateNode;
              switch (b.tag) {
                case D:
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
        if (l.tag === D || l.tag === P)
          s2(e, l), y ? iM(p, l.stateNode) : aM(p, l.stateNode);
        else if (l.tag === N) {
          if (l.child !== null) {
            p = l.stateNode.containerInfo, y = !0, l.child.return = l, l = l.child;
            continue;
          }
        } else if (mw(e, l), l.child !== null) {
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
      Sw(e, t);
      var l = t.alternate;
      gw(t), l !== null && gw(l);
    }
    function mb(e, t) {
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
        case D: {
          var a = t.stateNode;
          if (a != null) {
            var l = t.memoizedProps, f = e !== null ? e.memoizedProps : l, p = t.type, y = t.updateQueue;
            t.updateQueue = null, y !== null && Zk(a, y, p, f, l);
          }
          return;
        }
        case P: {
          if (t.stateNode === null)
            throw Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
          var b = t.stateNode, w = t.memoizedProps, O = e !== null ? e.memoizedProps : w;
          Jk(b, O, w);
          return;
        }
        case _: {
          {
            var A = t.stateNode;
            A.hydrate && (A.hydrate = !1, gM(A.containerInfo));
          }
          return;
        }
        case I:
          return;
        case U: {
          v2(t), Cw(t);
          return;
        }
        case ge: {
          Cw(t);
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
          hw(t, H);
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
          hw(a, !0);
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
    function Cw(e) {
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
      mC(e.stateNode);
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Rv = Symbol.for;
      Rv("selector.component"), Rv("selector.has_pseudo_class"), Rv("selector.role"), Rv("selector.test_id"), Rv("selector.text");
    }
    var g2 = [];
    function y2() {
      g2.forEach(function(e) {
        return e();
      });
    }
    var b2 = Math.ceil, gb = d.ReactCurrentDispatcher, yb = d.ReactCurrentOwner, bb = d.IsSomeRendererActing, Xn = (
      /*             */
      0
    ), Tm = (
      /*               */
      1
    ), S2 = (
      /*                 */
      2
    ), Sb = (
      /*         */
      4
    ), Cb = (
      /*       */
      8
    ), ja = (
      /*                */
      16
    ), Uo = (
      /*                */
      32
    ), Ew = (
      /*       */
      64
    ), xl = 0, Rm = 1, _m = 2, km = 3, Mm = 4, Eb = 5, pt = Xn, fa = null, Zn = null, da = ue, jo = ue, wb = mu(ue), Kr = xl, Om = null, Us = ue, Nm = ue, js = ue, Dm = ue, xb = null, Tb = 0, ww = 500, xw = 1 / 0, C2 = 500;
    function uf() {
      xw = ta() + C2;
    }
    function Tw() {
      return xw;
    }
    var qe = null, Am = !1, Rb = null, sf = null, Tl = !1, cf = null, _v = Zy, _b = ue, kb = [], Mb = [], Rl = null, E2 = 50, kv = 0, Ob = null, w2 = 50, Lm = 0, Hs = null, Mv = kn, _l = ue, Pm = ue, Nb = !1, Ov = null, Im = !1;
    function x2() {
      return fa;
    }
    function Ha() {
      return (pt & (ja | Uo)) !== Xn ? ta() : (Mv !== kn || (Mv = ta()), Mv);
    }
    function wu(e) {
      var t = e.mode;
      if ((t & Ra) === Un)
        return Ft;
      if ((t & Os) === Un)
        return Qc() === fi ? Ft : zi;
      _l === ue && (_l = Us);
      var a = YM() !== qM;
      if (a)
        return Pm !== ue && (Pm = xb !== null ? xb.pendingLanes : ue), Kp(_l, Pm);
      var l = Qc(), f;
      if (
        // TODO: Temporary. We're removing the concept of discrete updates.
        (pt & Sb) !== Xn && l === ks
      )
        f = lu(eu, _l);
      else {
        var p = wd(l);
        f = lu(p, _l);
      }
      return f;
    }
    function T2(e) {
      var t = e.mode;
      return (t & Ra) === Un ? Ft : (t & Os) === Un ? Qc() === fi ? Ft : zi : (_l === ue && (_l = Us), Rd(_l));
    }
    function ra(e, t, a) {
      eN(), aN(e);
      var l = zm(e, t);
      if (l === null)
        return nN(e), null;
      su(l, t, a), l === fa && (js = tn(js, t), Kr === Mm && ff(l, da));
      var f = Qc();
      t === Ft ? /* Check if we're inside unbatchedUpdates */ (pt & Cb) !== Xn && // Check if we're not already rendering
      (pt & (ja | Uo)) === Xn ? (Tu(l, t), Db(l)) : (hi(l, a), Tu(l, t), pt === Xn && (uf(), Io())) : ((pt & Sb) !== Xn && // Only updates at user-blocking priority or greater are considered
      // discrete, even inside a discrete event.
      (f === ks || f === fi) && (Rl === null ? Rl = /* @__PURE__ */ new Set([l]) : Rl.add(l)), hi(l, a), Tu(l, t)), xb = l;
    }
    function zm(e, t) {
      e.lanes = tn(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = tn(a.lanes, t)), a === null && (e.flags & (Tt | Sa)) !== un && Iw(e);
      for (var l = e, f = e.return; f !== null; )
        f.childLanes = tn(f.childLanes, t), a = f.alternate, a !== null ? a.childLanes = tn(a.childLanes, t) : (f.flags & (Tt | Sa)) !== un && Iw(e), l = f, f = f.return;
      if (l.tag === _) {
        var p = l.stateNode;
        return p;
      } else
        return null;
    }
    function hi(e, t) {
      var a = e.callbackNode;
      yy(e, t);
      var l = cs(e, e === fa ? da : ue), f = Zr();
      if (l === ue) {
        a !== null && (BC(a), e.callbackNode = null, e.callbackPriority = Ii);
        return;
      }
      if (a !== null) {
        var p = e.callbackPriority;
        if (p === f)
          return;
        BC(a);
      }
      var y;
      if (f === So)
        y = WM(Db.bind(null, e));
      else if (f === is)
        y = gu(fi, Db.bind(null, e));
      else {
        var b = _c(f);
        y = gu(b, Rw.bind(null, e));
      }
      e.callbackPriority = f, e.callbackNode = y;
    }
    function Rw(e) {
      if (Mv = kn, _l = ue, Pm = ue, (pt & (ja | Uo)) !== Xn)
        throw Error("Should not already be working.");
      var t = e.callbackNode, a = Ho();
      if (a && e.callbackNode !== t)
        return null;
      var l = cs(e, e === fa ? da : ue);
      if (l === ue)
        return null;
      var f = z2(e, l);
      if (wr(Us, js))
        df(e, ue);
      else if (f !== xl) {
        if (f === _m && (pt |= Ew, e.hydrate && (e.hydrate = !1, By(e.containerInfo)), l = Ea(e), l !== ue && (f = Nv(e, l))), f === Rm) {
          var p = Om;
          throw df(e, ue), ff(e, l), hi(e, ta()), p;
        }
        var y = e.current.alternate;
        e.finishedWork = y, e.finishedLanes = l, R2(e, f, l);
      }
      return hi(e, ta()), e.callbackNode === t ? Rw.bind(null, e) : null;
    }
    function R2(e, t, a) {
      switch (t) {
        case xl:
        case Rm:
          throw Error("Root did not complete. This is a bug in React.");
        case _m: {
          Fs(e);
          break;
        }
        case km: {
          if (ff(e, a), Td(a) && // do not delay if we're inside an act() scope
          !uN()) {
            var l = Tb + ww - ta();
            if (l > 10) {
              var f = cs(e, ue);
              if (f !== ue)
                break;
              var p = e.suspendedLanes;
              if (!To(p, a)) {
                Ha(), kd(e, p);
                break;
              }
              e.timeoutHandle = hC(Fs.bind(null, e), l);
              break;
            }
          }
          Fs(e);
          break;
        }
        case Mm: {
          if (ff(e, a), Wp(a))
            break;
          {
            var y = my(e, a), b = y, w = ta() - b, O = J2(w) - w;
            if (O > 10) {
              e.timeoutHandle = hC(Fs.bind(null, e), O);
              break;
            }
          }
          Fs(e);
          break;
        }
        case Eb: {
          Fs(e);
          break;
        }
        default:
          throw Error("Unknown root exit status.");
      }
    }
    function ff(e, t) {
      t = uu(t, Dm), t = uu(t, js), Qp(e, t);
    }
    function Db(e) {
      if ((pt & (ja | Uo)) !== Xn)
        throw Error("Should not already be working.");
      Ho();
      var t, a;
      if (e === fa && wr(e.expiredLanes, da) ? (t = da, a = Nv(e, t), wr(Us, js) && (t = cs(e, t), a = Nv(e, t))) : (t = cs(e, ue), a = Nv(e, t)), e.tag !== Yy && a === _m && (pt |= Ew, e.hydrate && (e.hydrate = !1, By(e.containerInfo)), t = Ea(e), t !== ue && (a = Nv(e, t))), a === Rm) {
        var l = Om;
        throw df(e, ue), ff(e, t), hi(e, ta()), l;
      }
      var f = e.current.alternate;
      return e.finishedWork = f, e.finishedLanes = t, Fs(e), hi(e, ta()), null;
    }
    function _2() {
      if ((pt & (Tm | ja | Uo)) !== Xn) {
        (pt & ja) !== Xn && h("unstable_flushDiscreteUpdates: Cannot flush updates when React is already rendering.");
        return;
      }
      k2(), Ho();
    }
    function k2() {
      if (Rl !== null) {
        var e = Rl;
        Rl = null, e.forEach(function(t) {
          fs(t), hi(t, ta());
        });
      }
      Io();
    }
    function _w(e, t) {
      var a = pt;
      pt |= Tm;
      try {
        return e(t);
      } finally {
        pt = a, pt === Xn && (uf(), Io());
      }
    }
    function M2(e, t) {
      var a = pt;
      pt |= S2;
      try {
        return e(t);
      } finally {
        pt = a, pt === Xn && (uf(), Io());
      }
    }
    function O2(e, t, a, l, f) {
      var p = pt;
      pt |= Sb;
      try {
        return Ms(ks, e.bind(null, t, a, l, f));
      } finally {
        pt = p, pt === Xn && (uf(), Io());
      }
    }
    function kw(e, t) {
      var a = pt;
      pt &= ~Tm, pt |= Cb;
      try {
        return e(t);
      } finally {
        pt = a, pt === Xn && (uf(), Io());
      }
    }
    function Ab(e, t) {
      var a = pt;
      if ((a & (ja | Uo)) !== Xn)
        return h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), e(t);
      pt |= Tm;
      try {
        return e ? Ms(fi, e.bind(null, t)) : void 0;
      } finally {
        pt = a, Io();
      }
    }
    function $m(e, t) {
      ea(wb, jo, e), jo = tn(jo, t), Us = tn(Us, t);
    }
    function Lb(e) {
      jo = wb.current, Jr(wb, e);
    }
    function df(e, t) {
      e.finishedWork = null, e.finishedLanes = ue;
      var a = e.timeoutHandle;
      if (a !== Fy && (e.timeoutHandle = Fy, Qk(a)), Zn !== null)
        for (var l = Zn.return; l !== null; )
          cw(l), l = l.return;
      fa = e, Zn = Bs(e.current, null), da = jo = Us = t, Kr = xl, Om = null, Nm = ue, js = ue, Dm = ue, Hs = null, Bi.discardPendingWarnings();
    }
    function Mw(e, t) {
      do {
        var a = Zn;
        try {
          if (Vh(), EE(), Nn(), yb.current = null, a === null || a.return === null) {
            Kr = Rm, Om = t, Zn = null;
            return;
          }
          ke && a.mode & Ua && Cm(a, !0), XO(e, a.return, a, t, da), Aw(a);
        } catch (l) {
          t = l, Zn === a && a !== null ? (a = a.return, Zn = a) : a = Zn;
          continue;
        }
        return;
      } while (!0);
    }
    function Ow() {
      var e = gb.current;
      return gb.current = ym, e === null ? ym : e;
    }
    function Nw(e) {
      gb.current = e;
    }
    function Um(e) {
      {
        var t = c.__interactionsRef.current;
        return c.__interactionsRef.current = e.memoizedInteractions, t;
      }
    }
    function jm(e) {
      c.__interactionsRef.current = e;
    }
    function N2() {
      Tb = ta();
    }
    function Pb(e) {
      Nm = tn(e, Nm);
    }
    function D2() {
      Kr === xl && (Kr = km);
    }
    function A2() {
      (Kr === xl || Kr === km) && (Kr = Mm), fa !== null && (xd(Nm) || xd(js)) && ff(fa, da);
    }
    function L2() {
      Kr !== Eb && (Kr = _m);
    }
    function P2() {
      return Kr === xl;
    }
    function Nv(e, t) {
      var a = pt;
      pt |= ja;
      var l = Ow();
      (fa !== e || da !== t) && (df(e, t), Fw(e, t));
      var f = Um(e);
      do
        try {
          I2();
          break;
        } catch (p) {
          Mw(e, p);
        }
      while (!0);
      if (Vh(), jm(f), pt = a, Nw(l), Zn !== null)
        throw Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return fa = null, da = ue, Kr;
    }
    function I2() {
      for (; Zn !== null; )
        Dw(Zn);
    }
    function z2(e, t) {
      var a = pt;
      pt |= ja;
      var l = Ow();
      (fa !== e || da !== t) && (uf(), df(e, t), Fw(e, t));
      var f = Um(e);
      do
        try {
          $2();
          break;
        } catch (p) {
          Mw(e, p);
        }
      while (!0);
      return Vh(), jm(f), Nw(l), pt = a, Zn !== null ? xl : (fa = null, da = ue, Kr);
    }
    function $2() {
      for (; Zn !== null && !BM(); )
        Dw(Zn);
    }
    function Dw(e) {
      var t = e.alternate;
      vn(e);
      var a;
      (e.mode & Ua) !== Un ? (Z0(e), a = zb(t, e, jo), Cm(e, !0)) : a = zb(t, e, jo), Nn(), e.memoizedProps = e.pendingProps, a === null ? Aw(e) : Zn = a, yb.current = null;
    }
    function Aw(e) {
      var t = e;
      do {
        var a = t.alternate, l = t.return;
        if ((t.flags & qu) === un) {
          vn(t);
          var f = void 0;
          if ((t.mode & Ua) === Un ? f = sw(a, t, jo) : (Z0(t), f = sw(a, t, jo), Cm(t, !1)), Nn(), f !== null) {
            Zn = f;
            return;
          }
          if (U2(t), l !== null && // Do not append effects to parents if a sibling failed to complete
          (l.flags & qu) === un) {
            l.firstEffect === null && (l.firstEffect = t.firstEffect), t.lastEffect !== null && (l.lastEffect !== null && (l.lastEffect.nextEffect = t.firstEffect), l.lastEffect = t.lastEffect);
            var p = t.flags;
            p > Br && (l.lastEffect !== null ? l.lastEffect.nextEffect = t : l.firstEffect = t, l.lastEffect = t);
          }
        } else {
          var y = GO(t);
          if (y !== null) {
            y.flags &= nl, Zn = y;
            return;
          }
          if ((t.mode & Ua) !== Un) {
            Cm(t, !1);
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
      Kr === xl && (Kr = Eb);
    }
    function U2(e) {
      if (
        // TODO: Move this check out of the hot path by moving `resetChildLanes`
        // to switch statement in `completeWork`.
        !((e.tag === Ce || e.tag === de) && e.memoizedState !== null && !wr(jo, Ia) && (e.mode & Os) !== ue)
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
      return Ms(fi, j2.bind(null, e, t)), null;
    }
    function j2(e, t) {
      do
        Ho();
      while (cf !== null);
      if (tN(), (pt & (ja | Uo)) !== Xn)
        throw Error("Should not already be working.");
      var a = e.finishedWork, l = e.finishedLanes;
      if (a === null)
        return null;
      if (e.finishedWork = null, e.finishedLanes = ue, a === e.current)
        throw Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null;
      var f = tn(a.lanes, a.childLanes);
      Md(e, f), Rl !== null && !Sy(f) && Rl.has(e) && Rl.delete(e), e === fa && (fa = null, Zn = null, da = ue);
      var p;
      if (a.flags > Br ? a.lastEffect !== null ? (a.lastEffect.nextEffect = a, p = a.firstEffect) : p = a : p = a.firstEffect, p !== null) {
        var y = pt;
        pt |= Uo;
        var b = Um(e);
        yb.current = null, Ov = Bk(e.containerInfo), Im = !1, qe = p;
        do
          if (Hr(null, H2, null), ua()) {
            if (qe === null)
              throw Error("Should be working on an effect.");
            var w = Fr();
            xu(qe, w), qe = qe.nextEffect;
          }
        while (qe !== null);
        Ov = null, $E(), qe = p;
        do
          if (Hr(null, F2, null, e, t), ua()) {
            if (qe === null)
              throw Error("Should be working on an effect.");
            var O = Fr();
            xu(qe, O), qe = qe.nextEffect;
          }
        while (qe !== null);
        Vk(e.containerInfo), e.current = a, qe = p;
        do
          if (Hr(null, B2, null, e, l), ua()) {
            if (qe === null)
              throw Error("Should be working on an effect.");
            var A = Fr();
            xu(qe, A), qe = qe.nextEffect;
          }
        while (qe !== null);
        qe = null, VM(), jm(b), pt = y;
      } else
        e.current = a, $E();
      var X = Tl;
      if (Tl)
        Tl = !1, cf = e, _b = l, _v = t;
      else
        for (qe = p; qe !== null; ) {
          var H = qe.nextEffect;
          qe.nextEffect = null, qe.flags & Rn && Vw(qe), qe = H;
        }
      if (f = e.pendingLanes, f !== ue) {
        if (Hs !== null) {
          var J = Hs;
          Hs = null;
          for (var fe = 0; fe < J.length; fe++)
            Hw(e, J[fe], e.memoizedInteractions);
        }
        Tu(e, f);
      } else
        sf = null;
      if (X || Bw(e, l), f === Ft ? e === Ob ? kv++ : (kv = 0, Ob = e) : kv = 0, $M(a.stateNode, t), y2(), hi(e, ta()), Am) {
        Am = !1;
        var _e = Rb;
        throw Rb = null, _e;
      }
      return (pt & Cb) !== Xn || Io(), null;
    }
    function H2() {
      for (; qe !== null; ) {
        var e = qe.alternate;
        !Im && Ov !== null && ((qe.flags & Rn) !== un ? Up(qe, Ov) && (Im = !0) : qe.tag === U && h2(e, qe) && Up(qe, Ov) && (Im = !0));
        var t = qe.flags;
        (t & ei) !== un && (vn(qe), n2(e, qe), Nn()), (t & ql) !== un && (Tl || (Tl = !0, gu(Cl, function() {
          return Ho(), null;
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
        var f = a & (Tt | vt | Rn | Sa);
        switch (f) {
          case Tt: {
            bw(qe), qe.flags &= ~Tt;
            break;
          }
          case po: {
            bw(qe), qe.flags &= ~Tt;
            var p = qe.alternate;
            mb(p, qe);
            break;
          }
          case Sa: {
            qe.flags &= ~Sa;
            break;
          }
          case Ip: {
            qe.flags &= ~Sa;
            var y = qe.alternate;
            mb(y, qe);
            break;
          }
          case vt: {
            var b = qe.alternate;
            mb(b, qe);
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
    function B2(e, t) {
      for (; qe !== null; ) {
        vn(qe);
        var a = qe.flags;
        if (a & (vt | ho)) {
          var l = qe.alternate;
          o2(e, l, qe);
        }
        a & Cr && l2(qe), Nn(), qe = qe.nextEffect;
      }
    }
    function Ho() {
      if (_v !== Zy) {
        var e = _v > Cl ? Cl : _v;
        return _v = Zy, Ms(e, K2);
      }
      return !1;
    }
    function V2(e, t) {
      kb.push(t, e), Tl || (Tl = !0, gu(Cl, function() {
        return Ho(), null;
      }));
    }
    function Lw(e, t) {
      Mb.push(t, e);
      {
        e.flags |= Yl;
        var a = e.alternate;
        a !== null && (a.flags |= Yl);
      }
      Tl || (Tl = !0, gu(Cl, function() {
        return Ho(), null;
      }));
    }
    function W2(e) {
      var t = e.create;
      e.destroy = t();
    }
    function K2() {
      if (cf === null)
        return !1;
      var e = cf, t = _b;
      if (cf = null, _b = ue, (pt & (ja | Uo)) !== Xn)
        throw Error("Cannot flush passive effects while already rendering.");
      Nb = !0;
      var a = pt;
      pt |= Uo;
      var l = Um(e), f = Mb;
      Mb = [];
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
            var A = Fr();
            xu(b, A);
          }
          Nn();
        }
      }
      var X = kb;
      kb = [];
      for (var H = 0; H < X.length; H += 2) {
        var J = X[H], fe = X[H + 1];
        {
          if (vn(fe), Hr(null, W2, null, J), ua()) {
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
        lt.nextEffect = null, lt.flags & Rn && Vw(lt), lt = Pt;
      }
      return jm(l), Bw(e, t), Nb = !1, pt = a, Io(), Lm = cf === null ? 0 : Lm + 1, !0;
    }
    function Ib(e) {
      return sf !== null && sf.has(e);
    }
    function G2(e) {
      sf === null ? sf = /* @__PURE__ */ new Set([e]) : sf.add(e);
    }
    function q2(e) {
      Am || (Am = !0, Rb = e);
    }
    var Y2 = q2;
    function Pw(e, t, a) {
      var l = db(a, t), f = fw(e, l, Ft);
      bu(e, f);
      var p = Ha(), y = zm(e, Ft);
      y !== null && (su(y, Ft, p), hi(y, p), Tu(y, Ft));
    }
    function xu(e, t) {
      if (e.tag === _) {
        Pw(e, e, t);
        return;
      }
      for (var a = e.return; a !== null; ) {
        if (a.tag === _) {
          Pw(a, e, t);
          return;
        } else if (a.tag === E) {
          var l = a.type, f = a.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof f.componentDidCatch == "function" && !Ib(f)) {
            var p = db(t, e), y = dw(a, p, Ft);
            bu(a, y);
            var b = Ha(), w = zm(a, Ft);
            if (w !== null)
              su(w, Ft, b), hi(w, b), Tu(w, Ft);
            else if (typeof f.componentDidCatch == "function" && !Ib(f))
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
      var f = Ha();
      kd(e, a), fa === e && To(da, a) && (Kr === Mm || Kr === km && Td(da) && ta() - Tb < ww ? df(e, ue) : Dm = tn(Dm, a)), hi(e, f), Tu(e, a);
    }
    function X2(e, t) {
      t === qn && (t = T2(e));
      var a = Ha(), l = zm(e, t);
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
      if (kv > E2)
        throw kv = 0, Ob = null, Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Lm > w2 && (Lm = 0, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function tN() {
      Bi.flushLegacyContextWarning(), Bi.flushPendingUnsafeLifecycleWarnings();
    }
    var Hm = null;
    function Iw(e) {
      {
        if ((pt & ja) !== Xn || !(e.mode & (Ra | Os)))
          return;
        var t = e.tag;
        if (t !== k && t !== _ && t !== E && t !== x && t !== z && t !== Y && t !== q && t !== se)
          return;
        var a = Re(e.type) || "ReactComponent";
        if (Hm !== null) {
          if (Hm.has(a))
            return;
          Hm.add(a);
        } else
          Hm = /* @__PURE__ */ new Set([a]);
        var l = dt;
        try {
          vn(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          l ? vn(e) : Nn();
        }
      }
    }
    var Fm = null;
    function nN(e) {
      {
        var t = e.tag;
        if (t !== _ && t !== E && t !== x && t !== z && t !== Y && t !== q && t !== se || (e.flags & Yl) !== un)
          return;
        var a = Re(e.type) || "ReactComponent";
        if (Fm !== null) {
          if (Fm.has(a))
            return;
          Fm.add(a);
        } else
          Fm = /* @__PURE__ */ new Set([a]);
        if (!Nb) {
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
        var l = qw(rN, t);
        try {
          return aw(e, t, a);
        } catch (p) {
          if (p !== null && typeof p == "object" && typeof p.then == "function")
            throw p;
          if (Vh(), EE(), cw(t), qw(t, l), t.mode & Ua && Z0(t), Hr(null, aw, null, e, t, a), ua()) {
            var f = Fr();
            throw f;
          } else
            throw p;
        }
      };
    }
    var zw = !1, $b;
    $b = /* @__PURE__ */ new Set();
    function aN(e) {
      if ($t && (pt & ja) !== Xn && !wO())
        switch (e.tag) {
          case x:
          case z:
          case q: {
            var t = Zn && Re(Zn.type) || "Unknown", a = t;
            if (!$b.has(a)) {
              $b.add(a);
              var l = Re(e.type) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", l, t, t);
            }
            break;
          }
          case E: {
            zw || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), zw = !0);
            break;
          }
        }
    }
    var Bm = {
      current: !1
    };
    function $w(e) {
      if (bb.current === !0 && Bm.current !== !0) {
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
    function Uw(e) {
      (e.mode & Qn) !== Un && bb.current === !1 && Bm.current === !1 && h(`An update to %s ran an effect, but was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Re(e.type));
    }
    function iN(e) {
      if (pt === Xn && bb.current === !1 && Bm.current === !1) {
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
    var oN = iN, jw = !1;
    function lN(e) {
      jw === !1 && u.unstable_flushAllWithoutAsserting === void 0 && (e.mode & Ra || e.mode & Os) && (jw = !0, h(`In Concurrent or Sync modes, the "scheduler" module needs to be mocked to guarantee consistent behaviour across tests and browsers. For example, with jest: 
jest.mock('scheduler', () => require('scheduler/unstable_mock'));

For more info, visit https://reactjs.org/link/mock-scheduler`));
    }
    function Ub(e, t) {
      return t * 1e3 + e.interactionThreadID;
    }
    function Vm(e) {
      Hs === null ? Hs = [e] : Hs.push(e);
    }
    function Hw(e, t, a) {
      if (a.size > 0) {
        var l = e.pendingInteractionMap, f = l.get(t);
        f != null ? a.forEach(function(b) {
          f.has(b) || b.__count++, f.add(b);
        }) : (l.set(t, new Set(a)), a.forEach(function(b) {
          b.__count++;
        }));
        var p = c.__subscriberRef.current;
        if (p !== null) {
          var y = Ub(e, t);
          p.onWorkScheduled(a, y);
        }
      }
    }
    function Tu(e, t) {
      Hw(e, t, c.__interactionsRef.current);
    }
    function Fw(e, t) {
      var a = /* @__PURE__ */ new Set();
      if (e.pendingInteractionMap.forEach(function(p, y) {
        wr(t, y) && p.forEach(function(b) {
          return a.add(b);
        });
      }), e.memoizedInteractions = a, a.size > 0) {
        var l = c.__subscriberRef.current;
        if (l !== null) {
          var f = Ub(e, t);
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
    function Bw(e, t) {
      var a = e.pendingLanes, l;
      try {
        if (l = c.__subscriberRef.current, l !== null && e.memoizedInteractions.size > 0) {
          var f = Ub(e, t);
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
    function Vw(e) {
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
    function jb(e) {
      return pf(e);
    }
    function Hb(e) {
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
    function Ww(e, t) {
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
    function Kw(e) {
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
        Ho(), Ab(function() {
          Fb(e.current, l, a);
        });
      }
    }, dN = function(e, t) {
      {
        if (e.context !== $a)
          return;
        Ho(), Ab(function() {
          Dv(t, e, null, null);
        });
      }
    };
    function Fb(e, t, a) {
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
        var O = !1, A = !1;
        if (w !== null) {
          var X = mi(w);
          X !== void 0 && (a.has(X) ? A = !0 : t.has(X) && (y === E ? A = !0 : O = !0));
        }
        vf !== null && (vf.has(e) || l !== null && vf.has(l)) && (A = !0), A && (e._debugNeedsRemount = !0), (A || O) && ra(e, Ft, kn), f !== null && !A && Fb(f, t, a), p !== null && Fb(p, t, a);
      }
    }
    var vN = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), l = new Set(t.map(function(f) {
          return f.current;
        }));
        return Bb(e.current, l, a), a;
      }
    };
    function Bb(e, t, a) {
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
        b !== null && t.has(b) && (w = !0), w ? pN(e, a) : l !== null && Bb(l, t, a), f !== null && Bb(f, t, a);
      }
    }
    function pN(e, t) {
      {
        var a = hN(e, t);
        if (a)
          return;
        for (var l = e; ; ) {
          switch (l.tag) {
            case D:
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
        if (a.tag === D)
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
        var Gw = Object.preventExtensions({});
      } catch (e) {
        Vb = !0;
      }
    }
    var mN = 1;
    function gN(e, t, a, l) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = l, this.flags = un, this.nextEffect = null, this.firstEffect = null, this.lastEffect = null, this.lanes = ue, this.childLanes = ue, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugID = mN++, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Vb && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Fa = function(e, t, a, l) {
      return new gN(e, t, a, l);
    };
    function Wb(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function yN(e) {
      return typeof e == "function" && !Wb(e) && e.defaultProps === void 0;
    }
    function bN(e) {
      if (typeof e == "function")
        return Wb(e) ? E : x;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Ue)
          return z;
        if (t === Ge)
          return Y;
      }
      return k;
    }
    function Bs(e, t) {
      var a = e.alternate;
      a === null ? (a = Fa(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugID = e._debugID, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = un, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, a.actualDuration = 0, a.actualStartTime = -1), a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var l = e.dependencies;
      switch (a.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case k:
        case x:
        case q:
          a.type = pf(e.type);
          break;
        case E:
          a.type = jb(e.type);
          break;
        case z:
          a.type = Hb(e.type);
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
      return e === NC ? t = Os | Ra | Qn : e === OC ? t = Ra | Qn : t = Un, PM && (t |= Ua), Fa(_, null, null, t);
    }
    function Kb(e, t, a, l, f, p) {
      var y = k, b = e;
      if (typeof e == "function")
        Wb(e) ? (y = E, b = jb(b)) : b = pf(b);
      else if (typeof e == "string")
        y = D;
      else
        e:
          switch (e) {
            case jt:
              return Vs(a.children, f, p, t);
            case oa:
              y = L, f |= KM;
              break;
            case ir:
              y = L, f |= Qn;
              break;
            case Bt:
              return EN(a, f, p, t);
            case St:
              return wN(a, f, p, t);
            case Oe:
              return xN(a, f, p, t);
            case qr:
              return qb(a, f, p, t);
            case Ln:
              return TN(a, f, p, t);
            case An:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case dn:
                    y = $;
                    break e;
                  case Ht:
                    y = W;
                    break e;
                  case Ue:
                    y = z, b = Hb(b);
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
      var A = Fa(y, a, t, f);
      return A.elementType = e, A.type = b, A.lanes = p, A._debugOwner = l, A;
    }
    function Gb(e, t, a) {
      var l = null;
      l = e._owner;
      var f = e.type, p = e.key, y = e.props, b = Kb(f, p, y, l, t, a);
      return b._debugSource = e._source, b._debugOwner = e._owner, b;
    }
    function Vs(e, t, a, l) {
      var f = Fa(F, e, l, t);
      return f.lanes = a, f;
    }
    function EN(e, t, a, l) {
      typeof e.id != "string" && h('Profiler must specify an "id" as a prop');
      var f = Fa(I, e, l, t | Ua);
      return f.elementType = Bt, f.type = Bt, f.lanes = a, f.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, f;
    }
    function wN(e, t, a, l) {
      var f = Fa(U, e, l, t);
      return f.type = St, f.elementType = St, f.lanes = a, f;
    }
    function xN(e, t, a, l) {
      var f = Fa(ge, e, l, t);
      return f.type = Oe, f.elementType = Oe, f.lanes = a, f;
    }
    function qb(e, t, a, l) {
      var f = Fa(de, e, l, t);
      return f.type = qr, f.elementType = qr, f.lanes = a, f;
    }
    function TN(e, t, a, l) {
      var f = Fa(Ce, e, l, t);
      return f.type = Ln, f.elementType = Ln, f.lanes = a, f;
    }
    function Yb(e, t, a) {
      var l = Fa(P, e, null, t);
      return l.lanes = a, l;
    }
    function RN() {
      var e = Fa(D, null, null, Un);
      return e.elementType = "DELETED", e.type = "DELETED", e;
    }
    function Qb(e, t, a) {
      var l = e.children !== null ? e.children : [], f = Fa(N, l, e.key, t);
      return f.lanes = a, f.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, f;
    }
    function qw(e, t) {
      return e === null && (e = Fa(k, null, null, Un)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.nextEffect = t.nextEffect, e.firstEffect = t.firstEffect, e.lastEffect = t.lastEffect, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugID = t._debugID, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function _N(e, t, a) {
      switch (this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fy, this.context = null, this.pendingContext = null, this.hydrate = a, this.callbackNode = null, this.callbackPriority = Ii, this.eventTimes = kc(ue), this.expirationTimes = kc(kn), this.pendingLanes = ue, this.suspendedLanes = ue, this.pingedLanes = ue, this.expiredLanes = ue, this.mutableReadLanes = ue, this.finishedLanes = ue, this.entangledLanes = ue, this.entanglements = kc(ue), this.mutableSourceEagerHydrationData = null, this.interactionThreadID = c.unstable_getThreadID(), this.memoizedInteractions = /* @__PURE__ */ new Set(), this.pendingInteractionMap = /* @__PURE__ */ new Map(), t) {
        case OC:
          this._debugRootType = "createBlockingRoot()";
          break;
        case NC:
          this._debugRootType = "createRoot()";
          break;
        case Yy:
          this._debugRootType = "createLegacyRoot()";
          break;
      }
    }
    function kN(e, t, a, l) {
      var f = new _N(e, t, a), p = CN(t);
      return f.current = p, p.stateNode = f, i0(p), f;
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
    var Xb, Zb;
    Xb = !1, Zb = {};
    function NN(e) {
      if (!e)
        return $a;
      var t = Ni(e), a = LM(t);
      if (t.tag === E) {
        var l = t.type;
        if (Lo(l))
          return kC(t, l, a);
      }
      return a;
    }
    function DN(e, t) {
      {
        var a = Ni(e);
        if (a === void 0)
          throw typeof e.render == "function" ? Error("Unable to find node on an unmounted component.") : Error("Argument appears to not be a ReactComponent. Keys: " + Object.keys(e));
        var l = ld(a);
        if (l === null)
          return null;
        if (l.mode & Qn) {
          var f = Re(a.type) || "Component";
          if (!Zb[f]) {
            Zb[f] = !0;
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
    function Dv(e, t, a, l) {
      zM(t, e);
      var f = t.current, p = Ha();
      typeof jest != "undefined" && (lN(f), $w(f));
      var y = wu(f), b = NN(a);
      t.context === null ? t.context = b : t.pendingContext = b, $t && dt !== null && !Xb && (Xb = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Re(dt.type) || "Unknown"));
      var w = yu(p, y);
      return w.payload = {
        element: e
      }, l = l === void 0 ? null : l, l !== null && (typeof l != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", l), w.callback = l), bu(f, w), ra(f, y, p), y;
    }
    function Jb(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case D:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Yw(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Ui(a.retryLane, t));
    }
    function eS(e, t) {
      Yw(e, t);
      var a = e.alternate;
      a && Yw(a, t);
    }
    function LN(e) {
      if (e.tag === U) {
        var t = Ha(), a = fl;
        ra(e, a, t), eS(e, a);
      }
    }
    function PN(e) {
      if (e.tag === U) {
        var t = Ha(), a = Tc;
        ra(e, a, t), eS(e, a);
      }
    }
    function IN(e) {
      if (e.tag === U) {
        var t = Ha(), a = wu(e);
        ra(e, a, t), eS(e, a);
      }
    }
    function zN(e, t) {
      try {
        return t();
      } finally {
      }
    }
    function Qw(e) {
      var t = ud(e);
      return t === null ? null : t.tag === pe ? t.stateNode.instance : t.stateNode;
    }
    var Xw = function(e) {
      return !1;
    };
    function $N(e) {
      return Xw(e);
    }
    var Zw = null, Jw = null, ex = null, tx = null, nx = null, rx = null, ax = null, ix = null;
    {
      var ox = function(e, t, a) {
        var l = t[a], f = Array.isArray(e) ? e.slice() : o({}, e);
        return a + 1 === t.length ? (Array.isArray(f) ? f.splice(l, 1) : delete f[l], f) : (f[l] = ox(e[l], t, a + 1), f);
      }, lx = function(e, t) {
        return ox(e, t, 0);
      }, ux = function(e, t, a, l) {
        var f = t[l], p = Array.isArray(e) ? e.slice() : o({}, e);
        if (l + 1 === t.length) {
          var y = a[l];
          p[y] = p[f], Array.isArray(p) ? p.splice(f, 1) : delete p[f];
        } else
          p[f] = ux(
            // $FlowFixMe number or string is fine here
            e[f],
            t,
            a,
            l + 1
          );
        return p;
      }, sx = function(e, t, a) {
        if (t.length !== a.length) {
          m("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var l = 0; l < a.length - 1; l++)
            if (t[l] !== a[l]) {
              m("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return ux(e, t, a, 0);
      }, cx = function(e, t, a, l) {
        if (a >= t.length)
          return l;
        var f = t[a], p = Array.isArray(e) ? e.slice() : o({}, e);
        return p[f] = cx(e[f], t, a + 1, l), p;
      }, fx = function(e, t, a) {
        return cx(e, t, 0, a);
      }, tS = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      Zw = function(e, t, a, l) {
        var f = tS(e, t);
        if (f !== null) {
          var p = fx(f.memoizedState, a, l);
          f.memoizedState = p, f.baseState = p, e.memoizedProps = o({}, e.memoizedProps), ra(e, Ft, kn);
        }
      }, Jw = function(e, t, a) {
        var l = tS(e, t);
        if (l !== null) {
          var f = lx(l.memoizedState, a);
          l.memoizedState = f, l.baseState = f, e.memoizedProps = o({}, e.memoizedProps), ra(e, Ft, kn);
        }
      }, ex = function(e, t, a, l) {
        var f = tS(e, t);
        if (f !== null) {
          var p = sx(f.memoizedState, a, l);
          f.memoizedState = p, f.baseState = p, e.memoizedProps = o({}, e.memoizedProps), ra(e, Ft, kn);
        }
      }, tx = function(e, t, a) {
        e.pendingProps = fx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), ra(e, Ft, kn);
      }, nx = function(e, t) {
        e.pendingProps = lx(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps), ra(e, Ft, kn);
      }, rx = function(e, t, a) {
        e.pendingProps = sx(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps), ra(e, Ft, kn);
      }, ax = function(e) {
        ra(e, Ft, kn);
      }, ix = function(e) {
        Xw = e;
      };
    }
    function UN(e) {
      var t = ld(e);
      return t === null ? null : t.stateNode;
    }
    function jN(e) {
      return null;
    }
    function HN() {
      return dt;
    }
    function FN(e) {
      var t = e.findFiberByHostInstance, a = d.ReactCurrentDispatcher;
      return IM({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: Zw,
        overrideHookStateDeletePath: Jw,
        overrideHookStateRenamePath: ex,
        overrideProps: tx,
        overridePropsDeletePath: nx,
        overridePropsRenamePath: rx,
        setSuspenseHandler: ix,
        scheduleUpdate: ax,
        currentDispatcherRef: a,
        findHostInstanceByFiber: UN,
        findFiberByHostInstance: t || jN,
        // React Refresh
        findHostInstancesForRefresh: vN,
        scheduleRefresh: fN,
        scheduleRoot: dN,
        setRefreshHandler: cN,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: HN
      });
    }
    function nS(e, t, a) {
      this._internalRoot = BN(e, t, a);
    }
    nS.prototype.render = function(e) {
      var t = this._internalRoot;
      {
        typeof arguments[1] == "function" && h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
        var a = t.containerInfo;
        if (a.nodeType !== Ur) {
          var l = Qw(t.current);
          l && l.parentNode !== a && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Dv(e, t, null, null);
    }, nS.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot, t = e.containerInfo;
      Dv(null, e, null, function() {
        EC(t);
      });
    };
    function BN(e, t, a) {
      var l = a != null && a.hydrate === !0;
      a != null && a.hydrationOptions;
      var f = a != null && a.hydrationOptions != null && a.hydrationOptions.mutableSources || null, p = AN(e, t, l);
      AM(p.current, e), e.nodeType;
      {
        var y = e.nodeType === Ur ? e.parentNode : e;
        K1(y);
      }
      if (f)
        for (var b = 0; b < f.length; b++) {
          var w = f[b];
          MN(p, w);
        }
      return p;
    }
    function VN(e, t) {
      return new nS(e, Yy, t);
    }
    function hf(e) {
      return !!(e && (e.nodeType === ya || e.nodeType === uo || e.nodeType === sp || e.nodeType === Ur && e.nodeValue === " react-mount-point-unstable "));
    }
    var WN = d.ReactCurrentOwner, dx, vx = !1;
    dx = function(e) {
      if (e._reactRootContainer && e.nodeType !== Ur) {
        var t = Qw(e._reactRootContainer._internalRoot.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, l = Wm(e), f = !!(l && hu(l));
      f && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === ya && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Wm(e) {
      return e ? e.nodeType === uo ? e.documentElement : e.firstChild : null;
    }
    function KN(e) {
      var t = Wm(e);
      return !!(t && t.nodeType === ya && t.hasAttribute(Dt));
    }
    function GN(e, t) {
      var a = t || KN(e);
      if (!a)
        for (var l = !1, f; f = e.lastChild; )
          !l && f.nodeType === ya && f.hasAttribute(Dt) && (l = !0, h("render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.")), e.removeChild(f);
      return a && !t && !vx && (vx = !0, m("render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v18. Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.")), VN(e, a ? {
        hydrate: !0
      } : void 0);
    }
    function qN(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Km(e, t, a, l, f) {
      dx(a), qN(f === void 0 ? null : f, "render");
      var p = a._reactRootContainer, y;
      if (p) {
        if (y = p._internalRoot, typeof f == "function") {
          var w = f;
          f = function() {
            var O = Jb(y);
            w.call(O);
          };
        }
        Dv(t, y, e, f);
      } else {
        if (p = a._reactRootContainer = GN(a, l), y = p._internalRoot, typeof f == "function") {
          var b = f;
          f = function() {
            var O = Jb(y);
            b.call(O);
          };
        }
        kw(function() {
          Dv(t, y, e, f);
        });
      }
      return Jb(y);
    }
    function YN(e) {
      {
        var t = WN.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Re(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === ya ? e : DN(e, "findDOMNode");
    }
    function QN(e, t, a) {
      if (!hf(t))
        throw Error("Target container is not a DOM element.");
      {
        var l = Mh(t) && t._reactRootContainer === void 0;
        l && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call createRoot(container, {hydrate: true}).render(element)?");
      }
      return Km(null, e, t, !0, a);
    }
    function XN(e, t, a) {
      if (!hf(t))
        throw Error("Target container is not a DOM element.");
      {
        var l = Mh(t) && t._reactRootContainer === void 0;
        l && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Km(null, e, t, !1, a);
    }
    function ZN(e, t, a, l) {
      if (!hf(a))
        throw Error("Target container is not a DOM element.");
      if (!(e != null && Pp(e)))
        throw Error("parentComponent must be a valid React Component");
      return Km(e, t, a, !1, l);
    }
    function JN(e) {
      if (!hf(e))
        throw Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Mh(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOM.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = Wm(e), l = a && !hu(a);
          l && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return kw(function() {
          Km(null, null, e, !1, function() {
            e._reactRootContainer = null, EC(e);
          });
        }), !0;
      } else {
        {
          var f = Wm(e), p = !!(f && hu(f)), y = e.nodeType === ya && hf(e.parentNode) && !!e.parentNode._reactRootContainer;
          p && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", y ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    bc(LN), jp(PN), Ql(IN), rl(zN);
    var px = !1;
    (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Zf(Lk), vc(_w, O2, _2, M2);
    function hx(e, t) {
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
      return px || (px = !0, m('The ReactDOM.unstable_createPortal() alias has been deprecated, and will be removed in React 18+. Update your code to use ReactDOM.createPortal() instead. It has the exact same API, but without the "unstable_" prefix.')), hx(e, t, a);
    }
    var nD = {
      // Keep in sync with ReactTestUtils.js, and ReactTestUtilsAct.js.
      // This is an array for better minification.
      Events: [
        hu,
        Kc,
        Oh,
        Vl,
        Jf,
        Ho,
        // TODO: This is related to `act`, not events. Move to separate key?
        Bm
      ]
    }, rD = FN({
      findFiberByHostInstance: _s,
      bundleType: 1,
      version: WC,
      rendererPackageName: "react-dom"
    });
    if (!rD && Xe && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var mx = window.location.protocol;
      /^(https?|file):$/.test(mx) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (mx === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Va.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nD, Va.createPortal = hx, Va.findDOMNode = YN, Va.flushSync = Ab, Va.hydrate = QN, Va.render = XN, Va.unmountComponentAtNode = JN, Va.unstable_batchedUpdates = _w, Va.unstable_createPortal = tD, Va.unstable_renderSubtreeIntoContainer = eD, Va.version = WC;
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
process.env.NODE_ENV === "production" ? (sR(), _S.exports = zA()) : _S.exports = HA();
var Rg = _S.exports;
const FA = /* @__PURE__ */ ZT(Rg);
function pg(r) {
  return r instanceof HTMLElement || r instanceof SVGElement;
}
function og(r) {
  return pg(r) ? r : r instanceof Oa.Component ? FA.findDOMNode(r) : null;
}
function _g(r, o, u) {
  var c = T.useRef({});
  return (!("value" in c.current) || u(c.current.condition, o)) && (c.current.value = r(), c.current.condition = o), c.current.value;
}
function b1(r, o) {
  typeof r == "function" ? r(o) : Vn(r) === "object" && r && "current" in r && (r.current = o);
}
function cR() {
  for (var r = arguments.length, o = new Array(r), u = 0; u < r; u++)
    o[u] = arguments[u];
  var c = o.filter(function(d) {
    return d;
  });
  return c.length <= 1 ? c[0] : function(d) {
    o.forEach(function(m) {
      b1(m, d);
    });
  };
}
function kg() {
  for (var r = arguments.length, o = new Array(r), u = 0; u < r; u++)
    o[u] = arguments[u];
  return _g(function() {
    return cR.apply(void 0, o);
  }, o, function(c, d) {
    return c.length !== d.length || c.every(function(m, h) {
      return m !== d[h];
    });
  });
}
function Mg(r) {
  var o, u, c = aR.isMemo(r) ? r.type.type : r.type;
  return !(typeof c == "function" && !((o = c.prototype) !== null && o !== void 0 && o.render) || typeof r == "function" && !((u = r.prototype) !== null && u !== void 0 && u.render));
}
var kS = /* @__PURE__ */ T.createContext(null);
function BA(r) {
  var o = r.children, u = r.onBatchResize, c = T.useRef(0), d = T.useRef([]), m = T.useContext(kS), h = T.useCallback(function(C, x, E) {
    c.current += 1;
    var k = c.current;
    d.current.push({
      size: C,
      element: x,
      data: E
    }), Promise.resolve().then(function() {
      k === c.current && (u == null || u(d.current), d.current = []);
    }), m == null || m(C, x, E);
  }, [u, m]);
  return /* @__PURE__ */ T.createElement(kS.Provider, {
    value: h
  }, o);
}
var fR = function() {
  if (typeof Map != "undefined")
    return Map;
  function r(o, u) {
    var c = -1;
    return o.some(function(d, m) {
      return d[0] === u ? (c = m, !0) : !1;
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
      }), o.prototype.get = function(u) {
        var c = r(this.__entries__, u), d = this.__entries__[c];
        return d && d[1];
      }, o.prototype.set = function(u, c) {
        var d = r(this.__entries__, u);
        ~d ? this.__entries__[d][1] = c : this.__entries__.push([u, c]);
      }, o.prototype.delete = function(u) {
        var c = this.__entries__, d = r(c, u);
        ~d && c.splice(d, 1);
      }, o.prototype.has = function(u) {
        return !!~r(this.__entries__, u);
      }, o.prototype.clear = function() {
        this.__entries__.splice(0);
      }, o.prototype.forEach = function(u, c) {
        c === void 0 && (c = null);
        for (var d = 0, m = this.__entries__; d < m.length; d++) {
          var h = m[d];
          u.call(c, h[1], h[0]);
        }
      }, o;
    }()
  );
}(), MS = typeof window != "undefined" && typeof document != "undefined" && window.document === document, hg = function() {
  return typeof global != "undefined" && global.Math === Math ? global : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")();
}(), VA = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(hg) : function(r) {
    return setTimeout(function() {
      return r(Date.now());
    }, 1e3 / 60);
  };
}(), WA = 2;
function KA(r, o) {
  var u = !1, c = !1, d = 0;
  function m() {
    u && (u = !1, r()), c && C();
  }
  function h() {
    VA(m);
  }
  function C() {
    var x = Date.now();
    if (u) {
      if (x - d < WA)
        return;
      c = !0;
    } else
      u = !0, c = !1, setTimeout(h, o);
    d = x;
  }
  return C;
}
var GA = 20, qA = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], YA = typeof MutationObserver != "undefined", QA = (
  /** @class */
  function() {
    function r() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = KA(this.refresh.bind(this), GA);
    }
    return r.prototype.addObserver = function(o) {
      ~this.observers_.indexOf(o) || this.observers_.push(o), this.connected_ || this.connect_();
    }, r.prototype.removeObserver = function(o) {
      var u = this.observers_, c = u.indexOf(o);
      ~c && u.splice(c, 1), !u.length && this.connected_ && this.disconnect_();
    }, r.prototype.refresh = function() {
      var o = this.updateObservers_();
      o && this.refresh();
    }, r.prototype.updateObservers_ = function() {
      var o = this.observers_.filter(function(u) {
        return u.gatherActive(), u.hasActive();
      });
      return o.forEach(function(u) {
        return u.broadcastActive();
      }), o.length > 0;
    }, r.prototype.connect_ = function() {
      !MS || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), YA ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, r.prototype.disconnect_ = function() {
      !MS || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, r.prototype.onTransitionEnd_ = function(o) {
      var u = o.propertyName, c = u === void 0 ? "" : u, d = qA.some(function(m) {
        return !!~c.indexOf(m);
      });
      d && this.refresh();
    }, r.getInstance = function() {
      return this.instance_ || (this.instance_ = new r()), this.instance_;
    }, r.instance_ = null, r;
  }()
), dR = function(r, o) {
  for (var u = 0, c = Object.keys(o); u < c.length; u++) {
    var d = c[u];
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
  return o || hg;
}, vR = Og(0, 0, 0, 0);
function mg(r) {
  return parseFloat(r) || 0;
}
function Nx(r) {
  for (var o = [], u = 1; u < arguments.length; u++)
    o[u - 1] = arguments[u];
  return o.reduce(function(c, d) {
    var m = r["border-" + d + "-width"];
    return c + mg(m);
  }, 0);
}
function XA(r) {
  for (var o = ["top", "right", "bottom", "left"], u = {}, c = 0, d = o; c < d.length; c++) {
    var m = d[c], h = r["padding-" + m];
    u[m] = mg(h);
  }
  return u;
}
function ZA(r) {
  var o = r.getBBox();
  return Og(0, 0, o.width, o.height);
}
function JA(r) {
  var o = r.clientWidth, u = r.clientHeight;
  if (!o && !u)
    return vR;
  var c = kf(r).getComputedStyle(r), d = XA(c), m = d.left + d.right, h = d.top + d.bottom, C = mg(c.width), x = mg(c.height);
  if (c.boxSizing === "border-box" && (Math.round(C + m) !== o && (C -= Nx(c, "left", "right") + m), Math.round(x + h) !== u && (x -= Nx(c, "top", "bottom") + h)), !tL(r)) {
    var E = Math.round(C + m) - o, k = Math.round(x + h) - u;
    Math.abs(E) !== 1 && (C -= E), Math.abs(k) !== 1 && (x -= k);
  }
  return Og(d.left, d.top, C, x);
}
var eL = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement != "undefined" ? function(r) {
    return r instanceof kf(r).SVGGraphicsElement;
  } : function(r) {
    return r instanceof kf(r).SVGElement && typeof r.getBBox == "function";
  };
}();
function tL(r) {
  return r === kf(r).document.documentElement;
}
function nL(r) {
  return MS ? eL(r) ? ZA(r) : JA(r) : vR;
}
function rL(r) {
  var o = r.x, u = r.y, c = r.width, d = r.height, m = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object, h = Object.create(m.prototype);
  return dR(h, {
    x: o,
    y: u,
    width: c,
    height: d,
    top: u,
    right: o + c,
    bottom: d + u,
    left: o
  }), h;
}
function Og(r, o, u, c) {
  return { x: r, y: o, width: u, height: c };
}
var aL = (
  /** @class */
  function() {
    function r(o) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = Og(0, 0, 0, 0), this.target = o;
    }
    return r.prototype.isActive = function() {
      var o = nL(this.target);
      return this.contentRect_ = o, o.width !== this.broadcastWidth || o.height !== this.broadcastHeight;
    }, r.prototype.broadcastRect = function() {
      var o = this.contentRect_;
      return this.broadcastWidth = o.width, this.broadcastHeight = o.height, o;
    }, r;
  }()
), iL = (
  /** @class */
  /* @__PURE__ */ function() {
    function r(o, u) {
      var c = rL(u);
      dR(this, { target: o, contentRect: c });
    }
    return r;
  }()
), oL = (
  /** @class */
  function() {
    function r(o, u, c) {
      if (this.activeObservations_ = [], this.observations_ = new fR(), typeof o != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = o, this.controller_ = u, this.callbackCtx_ = c;
    }
    return r.prototype.observe = function(o) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
        if (!(o instanceof kf(o).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var u = this.observations_;
        u.has(o) || (u.set(o, new aL(o)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, r.prototype.unobserve = function(o) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
        if (!(o instanceof kf(o).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var u = this.observations_;
        u.has(o) && (u.delete(o), u.size || this.controller_.removeObserver(this));
      }
    }, r.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, r.prototype.gatherActive = function() {
      var o = this;
      this.clearActive(), this.observations_.forEach(function(u) {
        u.isActive() && o.activeObservations_.push(u);
      });
    }, r.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var o = this.callbackCtx_, u = this.activeObservations_.map(function(c) {
          return new iL(c.target, c.broadcastRect());
        });
        this.callback_.call(o, u, o), this.clearActive();
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
      var u = QA.getInstance(), c = new oL(o, u, this);
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
var lL = function() {
  return typeof hg.ResizeObserver != "undefined" ? hg.ResizeObserver : hR;
}(), Al = /* @__PURE__ */ new Map();
function mR(r) {
  r.forEach(function(o) {
    var u, c = o.target;
    (u = Al.get(c)) === null || u === void 0 || u.forEach(function(d) {
      return d(c);
    });
  });
}
var gR = new lL(mR);
process.env.NODE_ENV;
process.env.NODE_ENV;
function uL(r, o) {
  Al.has(r) || (Al.set(r, /* @__PURE__ */ new Set()), gR.observe(r)), Al.get(r).add(o);
}
function sL(r, o) {
  Al.has(r) && (Al.get(r).delete(o), Al.get(r).size || (gR.unobserve(r), Al.delete(r)));
}
function Ji(r, o) {
  if (!(r instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
function Dx(r, o) {
  for (var u = 0; u < o.length; u++) {
    var c = o[u];
    c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(r, eR(c.key), c);
  }
}
function eo(r, o, u) {
  return o && Dx(r.prototype, o), u && Dx(r, u), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function OS(r, o) {
  return OS = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(c, d) {
    return c.__proto__ = d, c;
  }, OS(r, o);
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
  }), o && OS(r, o);
}
function Nu(r) {
  return Nu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(u) {
    return u.__proto__ || Object.getPrototypeOf(u);
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
function S1(r, o) {
  if (o && (Vn(o) === "object" || typeof o == "function"))
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
    return S1(this, d);
  };
}
var cL = /* @__PURE__ */ function(r) {
  Df(u, r);
  var o = Dg(u);
  function u() {
    return Ji(this, u), o.apply(this, arguments);
  }
  return eo(u, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), u;
}(T.Component);
function fL(r, o) {
  var u = r.children, c = r.disabled, d = T.useRef(null), m = T.useRef(null), h = T.useContext(kS), C = typeof u == "function", x = C ? u(d) : u, E = T.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), k = !C && /* @__PURE__ */ T.isValidElement(x) && Mg(x), _ = k ? x.ref : null, N = kg(_, d), D = function() {
    var W;
    return og(d.current) || // Support `nativeElement` format
    (d.current && Vn(d.current) === "object" ? og((W = d.current) === null || W === void 0 ? void 0 : W.nativeElement) : null) || og(m.current);
  };
  T.useImperativeHandle(o, function() {
    return D();
  });
  var P = T.useRef(r);
  P.current = r;
  var F = T.useCallback(function(L) {
    var W = P.current, $ = W.onResize, z = W.data, I = L.getBoundingClientRect(), U = I.width, Y = I.height, q = L.offsetWidth, ne = L.offsetHeight, oe = Math.floor(U), re = Math.floor(Y);
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
      h == null || h(se, L, z), $ && Promise.resolve().then(function() {
        $(se, L);
      });
    }
  }, []);
  return T.useEffect(function() {
    var L = D();
    return L && !c && uL(L, F), function() {
      return sL(L, F);
    };
  }, [d.current, c]), /* @__PURE__ */ T.createElement(cL, {
    ref: m
  }, k ? /* @__PURE__ */ T.cloneElement(x, {
    ref: N
  }) : x);
}
var yR = /* @__PURE__ */ T.forwardRef(fL);
process.env.NODE_ENV !== "production" && (yR.displayName = "SingleObserver");
var dL = "rc-observer-key";
function vL(r, o) {
  var u = r.children, c = typeof u == "function" ? [u] : Kv(u);
  return process.env.NODE_ENV !== "production" && (c.length > 1 ? _f(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : c.length === 0 && _f(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), c.map(function(d, m) {
    var h = (d == null ? void 0 : d.key) || "".concat(dL, "-").concat(m);
    return /* @__PURE__ */ T.createElement(yR, an({}, r, {
      key: h,
      ref: m === 0 ? o : void 0
    }), d);
  });
}
var Af = /* @__PURE__ */ T.forwardRef(vL);
process.env.NODE_ENV !== "production" && (Af.displayName = "ResizeObserver");
Af.Collection = BA;
function pa() {
  return !!(typeof window != "undefined" && window.document && window.document.createElement);
}
var Ax = process.env.NODE_ENV !== "test" && pa() ? T.useLayoutEffect : T.useEffect, ia = function(o, u) {
  var c = T.useRef(!0);
  Ax(function() {
    return o(c.current);
  }, u), Ax(function() {
    return c.current = !1, function() {
      c.current = !0;
    };
  }, []);
}, Lx = function(o, u) {
  ia(function(c) {
    if (!c)
      return o();
  }, u);
}, pL = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], mf = void 0;
function hL(r, o) {
  var u = r.prefixCls, c = r.invalidate, d = r.item, m = r.renderItem, h = r.responsive, C = r.responsiveDisabled, x = r.registerSize, E = r.itemKey, k = r.className, _ = r.style, N = r.children, D = r.display, P = r.order, F = r.component, L = F === void 0 ? "div" : F, W = Fn(r, pL), $ = h && !D;
  function z(ne) {
    x(E, ne);
  }
  T.useEffect(function() {
    return function() {
      z(null);
    };
  }, []);
  var I = m && d !== mf ? m(d) : N, U;
  c || (U = {
    opacity: $ ? 0 : 1,
    height: $ ? 0 : mf,
    overflowY: $ ? "hidden" : mf,
    order: h ? P : mf,
    pointerEvents: $ ? "none" : mf,
    position: $ ? "absolute" : mf
  });
  var Y = {};
  $ && (Y["aria-hidden"] = !0);
  var q = /* @__PURE__ */ T.createElement(L, an({
    className: wn(!c && u, k),
    style: Te(Te({}, U), _)
  }, Y, W, {
    ref: o
  }), I);
  return h && (q = /* @__PURE__ */ T.createElement(Af, {
    onResize: function(oe) {
      var re = oe.offsetWidth;
      z(re);
    },
    disabled: C
  }, q)), q;
}
var jv = /* @__PURE__ */ T.forwardRef(hL);
jv.displayName = "Item";
function Vo(r) {
  var o = T.useRef();
  o.current = r;
  var u = T.useCallback(function() {
    for (var c, d = arguments.length, m = new Array(d), h = 0; h < d; h++)
      m[h] = arguments[h];
    return (c = o.current) === null || c === void 0 ? void 0 : c.call.apply(c, [o].concat(m));
  }, []);
  return u;
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
var Px = 0, Ag = /* @__PURE__ */ new Map();
function CR(r) {
  Ag.delete(r);
}
var Si = function(o) {
  var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Px += 1;
  var c = Px;
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
  return d(u), c;
};
Si.cancel = function(r) {
  var o = Ag.get(r);
  return CR(r), SR(o);
};
process.env.NODE_ENV !== "production" && (Si.ids = function() {
  return Ag;
});
function mL(r) {
  if (typeof MessageChannel == "undefined")
    Si(r);
  else {
    var o = new MessageChannel();
    o.port1.onmessage = function() {
      return r();
    }, o.port2.postMessage(void 0);
  }
}
function gL() {
  var r = T.useRef(null), o = function(c) {
    r.current || (r.current = [], mL(function() {
      Rg.unstable_batchedUpdates(function() {
        r.current.forEach(function(d) {
          d();
        }), r.current = null;
      });
    })), r.current.push(c);
  };
  return o;
}
function Av(r, o) {
  var u = T.useState(o), c = xe(u, 2), d = c[0], m = c[1], h = Vo(function(C) {
    r(function() {
      m(C);
    });
  });
  return [d, h];
}
var gg = /* @__PURE__ */ Oa.createContext(null), yL = ["component"], bL = ["className"], SL = ["className"], CL = function(o, u) {
  var c = T.useContext(gg);
  if (!c) {
    var d = o.component, m = d === void 0 ? "div" : d, h = Fn(o, yL);
    return /* @__PURE__ */ T.createElement(m, an({}, h, {
      ref: u
    }));
  }
  var C = c.className, x = Fn(c, bL), E = o.className, k = Fn(o, SL);
  return /* @__PURE__ */ T.createElement(gg.Provider, {
    value: null
  }, /* @__PURE__ */ T.createElement(jv, an({
    ref: u,
    className: wn(C, E)
  }, x, k)));
}, ER = /* @__PURE__ */ T.forwardRef(CL);
ER.displayName = "RawItem";
var EL = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], wR = "responsive", xR = "invalidate";
function wL(r) {
  return "+ ".concat(r.length, " ...");
}
function xL(r, o) {
  var u = r.prefixCls, c = u === void 0 ? "rc-overflow" : u, d = r.data, m = d === void 0 ? [] : d, h = r.renderItem, C = r.renderRawItem, x = r.itemKey, E = r.itemWidth, k = E === void 0 ? 10 : E, _ = r.ssr, N = r.style, D = r.className, P = r.maxCount, F = r.renderRest, L = r.renderRawRest, W = r.suffix, $ = r.component, z = $ === void 0 ? "div" : $, I = r.itemComponent, U = r.onVisibleChange, Y = Fn(r, EL), q = _ === "full", ne = gL(), oe = Av(ne, null), re = xe(oe, 2), ge = re[0], pe = re[1], te = ge || 0, se = Av(ne, /* @__PURE__ */ new Map()), de = xe(se, 2), Ce = de[0], ke = de[1], we = Av(ne, 0), Ae = xe(we, 2), Ie = Ae[0], ie = Ae[1], he = Av(ne, 0), Se = xe(he, 2), ze = Se[0], Ke = Se[1], Xe = Av(ne, 0), it = xe(Xe, 2), Ve = it[0], nt = it[1], Nt = bi(null), $e = xe(Nt, 2), et = $e[0], Vt = $e[1], Ee = bi(null), mt = xe(Ee, 2), Dt = mt[0], zt = mt[1], Ut = T.useMemo(function() {
    return Dt === null && q ? Number.MAX_SAFE_INTEGER : Dt || 0;
  }, [Dt, ge]), Ze = bi(!1), kt = xe(Ze, 2), gt = kt[0], Zt = kt[1], ot = "".concat(c, "-item"), Wt = Math.max(Ie, ze), Qt = P === wR, ut = m.length && Qt, Gt = P === xR, Wn = ut || typeof P == "number" && m.length > P, qt = Wv(function() {
    var Oe = m;
    return ut ? ge === null && q ? Oe = m : Oe = m.slice(0, Math.min(m.length, te / k)) : typeof P == "number" && (Oe = m.slice(0, P)), Oe;
  }, [m, k, ge, P, ut]), en = Wv(function() {
    return ut ? m.slice(Ut + 1) : m.slice(qt.length);
  }, [m, qt, ut, Ut]), ye = Nl(function(Oe, Ge) {
    var At;
    return typeof x == "function" ? x(Oe) : (At = x && (Oe == null ? void 0 : Oe[x])) !== null && At !== void 0 ? At : Ge;
  }, [x]), Ne = Nl(h || function(Oe) {
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
      W && on(0) + Ve > te && Vt(null);
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
    component: I,
    invalidate: Gt
  }, Bt = C ? function(Oe, Ge) {
    var At = ye(Oe, Ge);
    return /* @__PURE__ */ T.createElement(gg.Provider, {
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
    return /* @__PURE__ */ T.createElement(jv, an({}, ir, {
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
  if (L)
    L && (dn = /* @__PURE__ */ T.createElement(gg.Provider, {
      value: Te(Te({}, ir), Ht)
    }, L(en)));
  else {
    var Ue = F || wL;
    dn = /* @__PURE__ */ T.createElement(jv, an({}, ir, Ht), typeof Ue == "function" ? Ue(en) : Ue);
  }
  var St = /* @__PURE__ */ T.createElement(z, an({
    className: wn(!Gt && c, D),
    style: N,
    ref: o
  }, Y), qt.map(Bt), Wn ? dn : null, W && /* @__PURE__ */ T.createElement(jv, an({}, ir, {
    responsive: Qt,
    responsiveDisabled: !ut,
    order: Ut,
    className: "".concat(ot, "-suffix"),
    registerSize: st,
    display: !0,
    style: jt
  }), W));
  return Qt && (St = /* @__PURE__ */ T.createElement(Af, {
    onResize: xt,
    disabled: !ut
  }, St)), St;
}
var Ll = /* @__PURE__ */ T.forwardRef(xL);
Ll.displayName = "Overflow";
Ll.Item = ER;
Ll.RESPONSIVE = wR;
Ll.INVALIDATE = xR;
function Tf(r) {
  var o = T.useRef(!1), u = T.useState(r), c = xe(u, 2), d = c[0], m = c[1];
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
function uS(r) {
  return r !== void 0;
}
function Hv(r, o) {
  var u = o || {}, c = u.defaultValue, d = u.value, m = u.onChange, h = u.postState, C = Tf(function() {
    return uS(d) ? d : uS(c) ? typeof c == "function" ? c() : c : typeof r == "function" ? r() : r;
  }), x = xe(C, 2), E = x[0], k = x[1], _ = d !== void 0 ? d : E, N = h ? h(_) : _, D = Vo(m), P = Tf([_]), F = xe(P, 2), L = F[0], W = F[1];
  Lx(function() {
    var z = L[0];
    E !== z && D(E, z);
  }, [L]), Lx(function() {
    uS(d) || k(d);
  }, [d]);
  var $ = Vo(function(z, I) {
    k(z, I), W([_], I);
  });
  return [N, $];
}
function C1(r, o) {
  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, c = /* @__PURE__ */ new Set();
  function d(m, h) {
    var C = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, x = c.has(m);
    if (ha(!x, "Warning: There may be circular references"), x)
      return !1;
    if (m === h)
      return !0;
    if (u && C > 1)
      return !1;
    c.add(m);
    var E = C + 1;
    if (Array.isArray(m)) {
      if (!Array.isArray(h) || m.length !== h.length)
        return !1;
      for (var k = 0; k < m.length; k++)
        if (!d(m[k], h[k], E))
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
var TR = /* @__PURE__ */ T.createContext(null);
function RR(r, o) {
  return r === void 0 ? null : "".concat(r, "-").concat(o);
}
function _R(r) {
  var o = T.useContext(TR);
  return RR(o, r);
}
var TL = ["children", "locked"], Zi = /* @__PURE__ */ T.createContext(null);
function RL(r, o) {
  var u = Te({}, r);
  return Object.keys(o).forEach(function(c) {
    var d = o[c];
    d !== void 0 && (u[c] = d);
  }), u;
}
function Gv(r) {
  var o = r.children, u = r.locked, c = Fn(r, TL), d = T.useContext(Zi), m = _g(function() {
    return RL(d, c);
  }, [d, c], function(h, C) {
    return !u && (h[0] !== C[0] || !C1(h[1], C[1], !0));
  });
  return /* @__PURE__ */ T.createElement(Zi.Provider, {
    value: m
  }, o);
}
var _L = [], kR = /* @__PURE__ */ T.createContext(null);
function Lg() {
  return T.useContext(kR);
}
var MR = /* @__PURE__ */ T.createContext(_L);
function ap(r) {
  var o = T.useContext(MR);
  return T.useMemo(function() {
    return r !== void 0 ? [].concat(ar(o), [r]) : o;
  }, [o, r]);
}
var OR = /* @__PURE__ */ T.createContext(null), E1 = /* @__PURE__ */ T.createContext({});
const NR = function(r) {
  if (!r)
    return !1;
  if (r instanceof Element) {
    if (r.offsetParent)
      return !0;
    if (r.getBBox) {
      var o = r.getBBox(), u = o.width, c = o.height;
      if (u || c)
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
function Ix(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (NR(r)) {
    var u = r.nodeName.toLowerCase(), c = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(u) || // Editable element
      r.isContentEditable || // Anchor with href element
      u === "a" && !!r.getAttribute("href")
    ), d = r.getAttribute("tabindex"), m = Number(d), h = null;
    return d && !Number.isNaN(m) ? h = m : c && h === null && (h = 0), c && r.disabled && (h = null), h !== null && (h >= 0 || o && h < 0);
  }
  return !1;
}
function kL(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = ar(r.querySelectorAll("*")).filter(function(c) {
    return Ix(c, o);
  });
  return Ix(r, o) && u.unshift(r), u;
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
    var u = o.keyCode;
    if (o.altKey && !o.ctrlKey || o.metaKey || // Function keys don't generate text
    u >= at.F1 && u <= at.F12)
      return !1;
    switch (u) {
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
}, DS = at.LEFT, AS = at.RIGHT, LS = at.UP, lg = at.DOWN, ug = at.ENTER, DR = at.ESC, Lv = at.HOME, Pv = at.END, zx = [LS, lg, DS, AS];
function ML(r, o, u, c) {
  var d, m, h, C, x = "prev", E = "next", k = "children", _ = "parent";
  if (r === "inline" && c === ug)
    return {
      inlineTrigger: !0
    };
  var N = (d = {}, tt(d, LS, x), tt(d, lg, E), d), D = (m = {}, tt(m, DS, u ? E : x), tt(m, AS, u ? x : E), tt(m, lg, k), tt(m, ug, k), m), P = (h = {}, tt(h, LS, x), tt(h, lg, E), tt(h, ug, k), tt(h, DR, _), tt(h, DS, u ? k : _), tt(h, AS, u ? _ : k), h), F = {
    inline: N,
    horizontal: D,
    vertical: P,
    inlineSub: N,
    horizontalSub: P,
    verticalSub: P
  }, L = (C = F["".concat(r).concat(o ? "" : "Sub")]) === null || C === void 0 ? void 0 : C[c];
  switch (L) {
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
    case k:
      return {
        offset: 1,
        sibling: !1
      };
    default:
      return null;
  }
}
function OL(r) {
  for (var o = r; o; ) {
    if (o.getAttribute("data-menu-list"))
      return o;
    o = o.parentElement;
  }
  return null;
}
function NL(r, o) {
  for (var u = r || document.activeElement; u; ) {
    if (o.has(u))
      return u;
    u = u.parentElement;
  }
  return null;
}
function w1(r, o) {
  var u = kL(r, !0);
  return u.filter(function(c) {
    return o.has(c);
  });
}
function $x(r, o, u) {
  var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!r)
    return null;
  var d = w1(r, o), m = d.length, h = d.findIndex(function(C) {
    return u === C;
  });
  return c < 0 ? h === -1 ? h = m - 1 : h -= 1 : c > 0 && (h += 1), h = (h + m) % m, d[h];
}
var PS = function(o, u) {
  var c = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map();
  return o.forEach(function(h) {
    var C = document.querySelector("[data-menu-id='".concat(RR(u, h), "']"));
    C && (c.add(C), m.set(C, h), d.set(h, C));
  }), {
    elements: c,
    key2element: d,
    element2key: m
  };
};
function DL(r, o, u, c, d, m, h, C, x, E) {
  var k = T.useRef(), _ = T.useRef();
  _.current = o;
  var N = function() {
    Si.cancel(k.current);
  };
  return T.useEffect(function() {
    return function() {
      N();
    };
  }, []), function(D) {
    var P = D.which;
    if ([].concat(zx, [ug, DR, Lv, Pv]).includes(P)) {
      var F = m(), L = PS(F, c), W = L, $ = W.elements, z = W.key2element, I = W.element2key, U = z.get(o), Y = NL(U, $), q = I.get(Y), ne = ML(r, h(q, !0).length === 1, u, P);
      if (!ne && P !== Lv && P !== Pv)
        return;
      (zx.includes(P) || [Lv, Pv].includes(P)) && D.preventDefault();
      var oe = function(ke) {
        if (ke) {
          var we = ke, Ae = ke.querySelector("a");
          Ae != null && Ae.getAttribute("href") && (we = Ae);
          var Ie = I.get(ke);
          C(Ie), N(), k.current = Si(function() {
            _.current === Ie && we.focus();
          });
        }
      };
      if ([Lv, Pv].includes(P) || ne.sibling || !Y) {
        var re;
        !Y || r === "inline" ? re = d.current : re = OL(Y);
        var ge, pe = w1(re, $);
        P === Lv ? ge = pe[0] : P === Pv ? ge = pe[pe.length - 1] : ge = $x(re, $, Y, ne.offset), oe(ge);
      } else if (ne.inlineTrigger)
        x(q);
      else if (ne.offset > 0)
        x(q, !0), N(), k.current = Si(function() {
          L = PS(F, c);
          var Ce = Y.getAttribute("aria-controls"), ke = document.getElementById(Ce), we = $x(ke, L.elements);
          oe(we);
        }, 5);
      else if (ne.offset < 0) {
        var te = h(q, !0), se = te[te.length - 2], de = z.get(se);
        x(se, !1), oe(de);
      }
    }
    E == null || E(D);
  };
}
function AL(r) {
  Promise.resolve().then(r);
}
var x1 = "__RC_UTIL_PATH_SPLIT__", Ux = function(o) {
  return o.join(x1);
}, LL = function(o) {
  return o.split(x1);
}, IS = "rc-menu-more";
function PL() {
  var r = T.useState({}), o = xe(r, 2), u = o[1], c = Ma(/* @__PURE__ */ new Map()), d = Ma(/* @__PURE__ */ new Map()), m = T.useState([]), h = xe(m, 2), C = h[0], x = h[1], E = Ma(0), k = Ma(!1), _ = function() {
    k.current || u({});
  }, N = Nl(function(z, I) {
    process.env.NODE_ENV !== "production" && ha(!c.current.has(z), "Duplicated key '".concat(z, "' used in Menu by path [").concat(I.join(" > "), "]"));
    var U = Ux(I);
    d.current.set(U, z), c.current.set(z, U), E.current += 1;
    var Y = E.current;
    AL(function() {
      Y === E.current && _();
    });
  }, []), D = Nl(function(z, I) {
    var U = Ux(I);
    d.current.delete(U), c.current.delete(z);
  }, []), P = Nl(function(z) {
    x(z);
  }, []), F = Nl(function(z, I) {
    var U = c.current.get(z) || "", Y = LL(U);
    return I && C.includes(Y[0]) && Y.unshift(IS), Y;
  }, [C]), L = Nl(function(z, I) {
    return z.some(function(U) {
      var Y = F(U, !0);
      return Y.includes(I);
    });
  }, [F]), W = function() {
    var I = ar(c.current.keys());
    return C.length && I.push(IS), I;
  }, $ = Nl(function(z) {
    var I = "".concat(c.current.get(z)).concat(x1), U = /* @__PURE__ */ new Set();
    return ar(d.current.keys()).forEach(function(Y) {
      Y.startsWith(I) && U.add(d.current.get(Y));
    }), U;
  }, []);
  return T.useEffect(function() {
    return function() {
      k.current = !0;
    };
  }, []), {
    // Register
    registerPath: N,
    unregisterPath: D,
    refreshOverflowKeys: P,
    // Util
    isSubPathKey: L,
    getKeyPath: F,
    getKeys: W,
    getSubPathKeys: $
  };
}
function Uv(r) {
  var o = T.useRef(r);
  o.current = r;
  var u = T.useCallback(function() {
    for (var c, d = arguments.length, m = new Array(d), h = 0; h < d; h++)
      m[h] = arguments[h];
    return (c = o.current) === null || c === void 0 ? void 0 : c.call.apply(c, [o].concat(m));
  }, []);
  return r ? u : void 0;
}
var IL = Math.random().toFixed(5).toString().slice(2), jx = 0;
function zL(r) {
  var o = Hv(r, {
    value: r
  }), u = xe(o, 2), c = u[0], d = u[1];
  return T.useEffect(function() {
    jx += 1;
    var m = process.env.NODE_ENV === "test" ? "test" : "".concat(IL, "-").concat(jx);
    d("rc-menu-uuid-".concat(m));
  }, []), c;
}
function Pg(r, o) {
  var u = Te({}, r);
  return Array.isArray(o) && o.forEach(function(c) {
    delete u[c];
  }), u;
}
function AR(r, o, u, c) {
  var d = T.useContext(Zi), m = d.activeKey, h = d.onActive, C = d.onInactive, x = {
    active: m === r
  };
  return o || (x.onMouseEnter = function(E) {
    u == null || u({
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
  var o = T.useContext(Zi), u = o.mode, c = o.rtl, d = o.inlineIndent;
  if (u !== "inline")
    return null;
  var m = r;
  return c ? {
    paddingRight: m * d
  } : {
    paddingLeft: m * d
  };
}
function PR(r) {
  var o = r.icon, u = r.props, c = r.children, d;
  return o === null || o === !1 ? null : (typeof o == "function" ? d = /* @__PURE__ */ T.createElement(o, Te({}, u)) : typeof o != "boolean" && (d = o), d || c || null);
}
var $L = ["item"];
function yg(r) {
  var o = r.item, u = Fn(r, $L);
  return Object.defineProperty(u, "item", {
    get: function() {
      return ha(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), o;
    }
  }), u;
}
var UL = ["title", "attribute", "elementRef"], jL = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], HL = ["active"], FL = /* @__PURE__ */ function(r) {
  Df(u, r);
  var o = Dg(u);
  function u() {
    return Ji(this, u), o.apply(this, arguments);
  }
  return eo(u, [{
    key: "render",
    value: function() {
      var d = this.props, m = d.title, h = d.attribute, C = d.elementRef, x = Fn(d, UL), E = Pg(x, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return ha(!h, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ T.createElement(Ll.Item, an({}, h, {
        title: typeof m == "string" ? m : void 0
      }, E, {
        ref: C
      }));
    }
  }]), u;
}(T.Component), BL = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var u, c = r.style, d = r.className, m = r.eventKey, h = r.warnKey, C = r.disabled, x = r.itemIcon, E = r.children, k = r.role, _ = r.onMouseEnter, N = r.onMouseLeave, D = r.onClick, P = r.onKeyDown, F = r.onFocus, L = Fn(r, jL), W = _R(m), $ = T.useContext(Zi), z = $.prefixCls, I = $.onItemClick, U = $.disabled, Y = $.overflowDisabled, q = $.itemIcon, ne = $.selectedKeys, oe = $.onActive, re = T.useContext(E1), ge = re._internalRenderMenuItem, pe = "".concat(z, "-item"), te = T.useRef(), se = T.useRef(), de = U || C, Ce = kg(o, se), ke = ap(m);
  process.env.NODE_ENV !== "production" && h && ha(!1, "MenuItem should not leave undefined `key`.");
  var we = function($e) {
    return {
      key: m,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: ar(ke).reverse(),
      item: te.current,
      domEvent: $e
    };
  }, Ae = x || q, Ie = AR(m, de, _, N), ie = Ie.active, he = Fn(Ie, HL), Se = ne.includes(m), ze = LR(ke.length), Ke = function($e) {
    if (!de) {
      var et = we($e);
      D == null || D(yg(et)), I(et);
    }
  }, Xe = function($e) {
    if (P == null || P($e), $e.which === at.ENTER) {
      var et = we($e);
      D == null || D(yg(et)), I(et);
    }
  }, it = function($e) {
    oe(m), F == null || F($e);
  }, Ve = {};
  r.role === "option" && (Ve["aria-selected"] = Se);
  var nt = /* @__PURE__ */ T.createElement(FL, an({
    ref: te,
    elementRef: Ce,
    role: k === null ? "none" : k || "menuitem",
    tabIndex: C ? null : -1,
    "data-menu-id": Y && W ? null : W
  }, L, he, Ve, {
    component: "li",
    "aria-disabled": C,
    style: Te(Te({}, ze), c),
    className: wn(pe, (u = {}, tt(u, "".concat(pe, "-active"), ie), tt(u, "".concat(pe, "-selected"), Se), tt(u, "".concat(pe, "-disabled"), de), u), d),
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
function VL(r, o) {
  var u = r.eventKey, c = Lg(), d = ap(u);
  return T.useEffect(function() {
    if (c)
      return c.registerPath(u, d), function() {
        c.unregisterPath(u, d);
      };
  }, [d]), c ? null : /* @__PURE__ */ T.createElement(BL, an({}, r, {
    ref: o
  }));
}
const Ig = /* @__PURE__ */ T.forwardRef(VL);
var WL = ["className", "children"], KL = function(o, u) {
  var c = o.className, d = o.children, m = Fn(o, WL), h = T.useContext(Zi), C = h.prefixCls, x = h.mode, E = h.rtl;
  return /* @__PURE__ */ T.createElement("ul", an({
    className: wn(C, E && "".concat(C, "-rtl"), "".concat(C, "-sub"), "".concat(C, "-").concat(x === "inline" ? "inline" : "vertical"), c),
    role: "menu"
  }, m, {
    "data-menu-list": !0,
    ref: u
  }), d);
}, T1 = /* @__PURE__ */ T.forwardRef(KL);
T1.displayName = "SubMenuList";
function R1(r, o) {
  return Kv(r).map(function(u, c) {
    if (/* @__PURE__ */ T.isValidElement(u)) {
      var d, m, h = u.key, C = (d = (m = u.props) === null || m === void 0 ? void 0 : m.eventKey) !== null && d !== void 0 ? d : h, x = C == null;
      x && (C = "tmp_key-".concat([].concat(ar(o), [c]).join("-")));
      var E = {
        key: C,
        eventKey: C
      };
      return process.env.NODE_ENV !== "production" && x && (E.warnKey = !0), /* @__PURE__ */ T.cloneElement(u, E);
    }
    return u;
  });
}
var IR = /* @__PURE__ */ T.createContext(null), Hx = [];
function GL(r, o) {
  var u = T.useState(function() {
    if (!pa())
      return null;
    var P = document.createElement("div");
    return process.env.NODE_ENV !== "production" && o && P.setAttribute("data-debug", o), P;
  }), c = xe(u, 1), d = c[0], m = T.useRef(!1), h = T.useContext(IR), C = T.useState(Hx), x = xe(C, 2), E = x[0], k = x[1], _ = h || (m.current ? void 0 : function(P) {
    k(function(F) {
      var L = [P].concat(ar(F));
      return L;
    });
  });
  function N() {
    d.parentElement || document.body.appendChild(d), m.current = !0;
  }
  function D() {
    var P;
    (P = d.parentElement) === null || P === void 0 || P.removeChild(d), m.current = !1;
  }
  return ia(function() {
    return r ? h ? h(N) : N() : D(), D;
  }, [r]), ia(function() {
    E.length && (E.forEach(function(P) {
      return P();
    }), k(Hx));
  }, [E]), [d, _];
}
function qL(r, o) {
  if (!r)
    return !1;
  if (r.contains)
    return r.contains(o);
  for (var u = o; u; ) {
    if (u === r)
      return !0;
    u = u.parentNode;
  }
  return !1;
}
var Fx = "data-rc-order", Bx = "data-rc-priority", YL = "rc-util-key", zS = /* @__PURE__ */ new Map();
function zR() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = r.mark;
  return o ? o.startsWith("data-") ? o : "data-".concat(o) : YL;
}
function zg(r) {
  if (r.attachTo)
    return r.attachTo;
  var o = document.querySelector("head");
  return o || document.body;
}
function QL(r) {
  return r === "queue" ? "prependQueue" : r ? "prepend" : "append";
}
function $R(r) {
  return Array.from((zS.get(r) || r).children).filter(function(o) {
    return o.tagName === "STYLE";
  });
}
function UR(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!pa())
    return null;
  var u = o.csp, c = o.prepend, d = o.priority, m = d === void 0 ? 0 : d, h = QL(c), C = h === "prependQueue", x = document.createElement("style");
  x.setAttribute(Fx, h), C && m && x.setAttribute(Bx, "".concat(m)), u != null && u.nonce && (x.nonce = u == null ? void 0 : u.nonce), x.innerHTML = r;
  var E = zg(o), k = E.firstChild;
  if (c) {
    if (C) {
      var _ = $R(E).filter(function(N) {
        if (!["prepend", "prependQueue"].includes(N.getAttribute(Fx)))
          return !1;
        var D = Number(N.getAttribute(Bx) || 0);
        return m >= D;
      });
      if (_.length)
        return E.insertBefore(x, _[_.length - 1].nextSibling), x;
    }
    E.insertBefore(x, k);
  } else
    E.appendChild(x);
  return x;
}
function jR(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = zg(o);
  return $R(u).find(function(c) {
    return c.getAttribute(zR(o)) === r;
  });
}
function qv(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = jR(r, o);
  if (u) {
    var c = zg(o);
    c.removeChild(u);
  }
}
function XL(r, o) {
  var u = zS.get(r);
  if (!u || !qL(document, u)) {
    var c = UR("", o), d = c.parentNode;
    zS.set(r, d), r.removeChild(c);
  }
}
function Du(r, o) {
  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = zg(u);
  XL(c, u);
  var d = jR(o, u);
  if (d) {
    var m, h;
    if ((m = u.csp) !== null && m !== void 0 && m.nonce && d.nonce !== ((h = u.csp) === null || h === void 0 ? void 0 : h.nonce)) {
      var C;
      d.nonce = (C = u.csp) === null || C === void 0 ? void 0 : C.nonce;
    }
    return d.innerHTML !== r && (d.innerHTML = r), d;
  }
  var x = UR(r, u);
  return x.setAttribute(zR(u), o), x;
}
var sS;
function ZL(r) {
  if (typeof document == "undefined")
    return 0;
  if (r || sS === void 0) {
    var o = document.createElement("div");
    o.style.width = "100%", o.style.height = "200px";
    var u = document.createElement("div"), c = u.style;
    c.position = "absolute", c.top = "0", c.left = "0", c.pointerEvents = "none", c.visibility = "hidden", c.width = "200px", c.height = "150px", c.overflow = "hidden", u.appendChild(o), document.body.appendChild(u);
    var d = o.offsetWidth;
    u.style.overflow = "scroll";
    var m = o.offsetWidth;
    d === m && (m = u.clientWidth), document.body.removeChild(u), sS = d - m;
  }
  return sS;
}
function Vx(r) {
  var o = r.match(/^(.*)px$/), u = Number(o == null ? void 0 : o[1]);
  return Number.isNaN(u) ? ZL() : u;
}
function JL(r) {
  if (typeof document == "undefined" || !r || !(r instanceof Element))
    return {
      width: 0,
      height: 0
    };
  var o = getComputedStyle(r, "::-webkit-scrollbar"), u = o.width, c = o.height;
  return {
    width: Vx(u),
    height: Vx(c)
  };
}
function eP() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var tP = "rc-util-locker-".concat(Date.now()), Wx = 0;
function nP(r) {
  var o = !!r, u = T.useState(function() {
    return Wx += 1, "".concat(tP, "_").concat(Wx);
  }), c = xe(u, 1), d = c[0];
  ia(function() {
    if (o) {
      var m = JL(document.body).width, h = eP();
      Du(`
html body {
  overflow-y: hidden;
  `.concat(h ? "width: calc(100% - ".concat(m, "px);") : "", `
}`), d);
    } else
      qv(d);
    return function() {
      qv(d);
    };
  }, [o, d]);
}
var Kx = !1;
function rP(r) {
  return typeof r == "boolean" && (Kx = r), Kx;
}
var Gx = function(o) {
  return o === !1 ? !1 : !pa() || !o ? null : typeof o == "string" ? document.querySelector(o) : typeof o == "function" ? o() : o;
}, _1 = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var u = r.open, c = r.autoLock, d = r.getContainer, m = r.debug, h = r.autoDestroy, C = h === void 0 ? !0 : h, x = r.children, E = T.useState(u), k = xe(E, 2), _ = k[0], N = k[1], D = _ || u;
  process.env.NODE_ENV !== "production" && ha(pa() || !u, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), T.useEffect(function() {
    (C || u) && N(u);
  }, [u, C]);
  var P = T.useState(function() {
    return Gx(d);
  }), F = xe(P, 2), L = F[0], W = F[1];
  T.useEffect(function() {
    var pe = Gx(d);
    W(pe != null ? pe : null);
  });
  var $ = GL(D && !L, m), z = xe($, 2), I = z[0], U = z[1], Y = L != null ? L : I;
  nP(c && u && pa() && (Y === I || Y === document.body));
  var q = null;
  if (x && Mg(x) && o) {
    var ne = x;
    q = ne.ref;
  }
  var oe = kg(q, o);
  if (!D || !pa() || L === void 0)
    return null;
  var re = Y === !1 || rP(), ge = x;
  return o && (ge = /* @__PURE__ */ T.cloneElement(x, {
    ref: oe
  })), /* @__PURE__ */ T.createElement(IR.Provider, {
    value: U
  }, re ? ge : /* @__PURE__ */ Rg.createPortal(ge, Y));
});
process.env.NODE_ENV !== "production" && (_1.displayName = "Portal");
function HR(r) {
  var o;
  return r == null || (o = r.getRootNode) === null || o === void 0 ? void 0 : o.call(r);
}
function aP(r) {
  return HR(r) instanceof ShadowRoot;
}
function bg(r) {
  return aP(r) ? HR(r) : null;
}
function iP() {
  var r = Te({}, T);
  return r.useId;
}
var qx = 0, Yx = iP();
const oP = Yx ? (
  // Use React `useId`
  function(o) {
    var u = Yx();
    return o || (process.env.NODE_ENV === "test" ? "test-id" : u);
  }
) : (
  // Use compatible of `useId`
  function(o) {
    var u = T.useState("ssr-id"), c = xe(u, 2), d = c[0], m = c[1];
    return T.useEffect(function() {
      var h = qx;
      qx += 1, m("rc_unique_".concat(h));
    }, []), o || (process.env.NODE_ENV === "test" ? "test-id" : d);
  }
), lP = function() {
  if (typeof navigator == "undefined" || typeof window == "undefined")
    return !1;
  var r = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(r) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(r == null ? void 0 : r.substr(0, 4));
};
var uP = ["children"], FR = /* @__PURE__ */ T.createContext({});
function sP(r) {
  var o = r.children, u = Fn(r, uP);
  return /* @__PURE__ */ T.createElement(FR.Provider, {
    value: u
  }, o);
}
var cP = /* @__PURE__ */ function(r) {
  Df(u, r);
  var o = Dg(u);
  function u() {
    return Ji(this, u), o.apply(this, arguments);
  }
  return eo(u, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), u;
}(T.Component), Ks = "none", Ym = "appear", Qm = "enter", Xm = "leave", Qx = "none", Yi = "prepare", wf = "start", xf = "active", k1 = "end", BR = "prepared";
function Xx(r, o) {
  var u = {};
  return u[r.toLowerCase()] = o.toLowerCase(), u["Webkit".concat(r)] = "webkit".concat(o), u["Moz".concat(r)] = "moz".concat(o), u["ms".concat(r)] = "MS".concat(o), u["O".concat(r)] = "o".concat(o.toLowerCase()), u;
}
function fP(r, o) {
  var u = {
    animationend: Xx("Animation", "AnimationEnd"),
    transitionend: Xx("Transition", "TransitionEnd")
  };
  return r && ("AnimationEvent" in o || delete u.animationend.animation, "TransitionEvent" in o || delete u.transitionend.transition), u;
}
var dP = fP(pa(), typeof window != "undefined" ? window : {}), VR = {};
if (pa()) {
  var vP = document.createElement("div");
  VR = vP.style;
}
var Zm = {};
function WR(r) {
  if (Zm[r])
    return Zm[r];
  var o = dP[r];
  if (o)
    for (var u = Object.keys(o), c = u.length, d = 0; d < c; d += 1) {
      var m = u[d];
      if (Object.prototype.hasOwnProperty.call(o, m) && m in VR)
        return Zm[r] = o[m], Zm[r];
    }
  return "";
}
var KR = WR("animationend"), GR = WR("transitionend"), qR = !!(KR && GR), Zx = KR || "animationend", Jx = GR || "transitionend";
function eT(r, o) {
  if (!r)
    return null;
  if (Vn(r) === "object") {
    var u = o.replace(/-\w/g, function(c) {
      return c[1].toUpperCase();
    });
    return r[u];
  }
  return "".concat(r, "-").concat(o);
}
const pP = function(r) {
  var o = Ma(), u = Ma(r);
  u.current = r;
  var c = T.useCallback(function(h) {
    u.current(h);
  }, []);
  function d(h) {
    h && (h.removeEventListener(Jx, c), h.removeEventListener(Zx, c));
  }
  function m(h) {
    o.current && o.current !== h && d(o.current), h && h !== o.current && (h.addEventListener(Jx, c), h.addEventListener(Zx, c), o.current = h);
  }
  return T.useEffect(function() {
    return function() {
      d(o.current);
    };
  }, []), [m, d];
};
var YR = pa() ? nA : Wo;
const hP = function() {
  var r = T.useRef(null);
  function o() {
    Si.cancel(r.current);
  }
  function u(c) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    o();
    var m = Si(function() {
      d <= 1 ? c({
        isCanceled: function() {
          return m !== r.current;
        }
      }) : u(c, d - 1);
    });
    r.current = m;
  }
  return T.useEffect(function() {
    return function() {
      o();
    };
  }, []), [u, o];
};
var mP = [Yi, wf, xf, k1], gP = [Yi, BR], QR = !1, yP = !0;
function XR(r) {
  return r === xf || r === k1;
}
const bP = function(r, o, u) {
  var c = Tf(Qx), d = xe(c, 2), m = d[0], h = d[1], C = hP(), x = xe(C, 2), E = x[0], k = x[1];
  function _() {
    h(Yi, !0);
  }
  var N = o ? gP : mP;
  return YR(function() {
    if (m !== Qx && m !== k1) {
      var D = N.indexOf(m), P = N[D + 1], F = u(m);
      F === QR ? h(P, !0) : P && E(function(L) {
        function W() {
          L.isCanceled() || h(P, !0);
        }
        F === !0 ? W() : Promise.resolve(F).then(W);
      });
    }
  }, [r, m]), T.useEffect(function() {
    return function() {
      k();
    };
  }, []), [_, m];
};
function SP(r, o, u, c) {
  var d = c.motionEnter, m = d === void 0 ? !0 : d, h = c.motionAppear, C = h === void 0 ? !0 : h, x = c.motionLeave, E = x === void 0 ? !0 : x, k = c.motionDeadline, _ = c.motionLeaveImmediately, N = c.onAppearPrepare, D = c.onEnterPrepare, P = c.onLeavePrepare, F = c.onAppearStart, L = c.onEnterStart, W = c.onLeaveStart, $ = c.onAppearActive, z = c.onEnterActive, I = c.onLeaveActive, U = c.onAppearEnd, Y = c.onEnterEnd, q = c.onLeaveEnd, ne = c.onVisibleChanged, oe = Tf(), re = xe(oe, 2), ge = re[0], pe = re[1], te = Tf(Ks), se = xe(te, 2), de = se[0], Ce = se[1], ke = Tf(null), we = xe(ke, 2), Ae = we[0], Ie = we[1], ie = Ma(!1), he = Ma(null);
  function Se() {
    return u();
  }
  var ze = Ma(!1);
  function Ke() {
    Ce(Ks, !0), Ie(null, !0);
  }
  function Xe(Ze) {
    var kt = Se();
    if (!(Ze && !Ze.deadline && Ze.target !== kt)) {
      var gt = ze.current, Zt;
      de === Ym && gt ? Zt = U == null ? void 0 : U(kt, Ze) : de === Qm && gt ? Zt = Y == null ? void 0 : Y(kt, Ze) : de === Xm && gt && (Zt = q == null ? void 0 : q(kt, Ze)), de !== Ks && gt && Zt !== !1 && Ke();
    }
  }
  var it = pP(Xe), Ve = xe(it, 1), nt = Ve[0], Nt = function(kt) {
    var gt, Zt, ot;
    switch (kt) {
      case Ym:
        return gt = {}, tt(gt, Yi, N), tt(gt, wf, F), tt(gt, xf, $), gt;
      case Qm:
        return Zt = {}, tt(Zt, Yi, D), tt(Zt, wf, L), tt(Zt, xf, z), Zt;
      case Xm:
        return ot = {}, tt(ot, Yi, P), tt(ot, wf, W), tt(ot, xf, I), ot;
      default:
        return {};
    }
  }, $e = T.useMemo(function() {
    return Nt(de);
  }, [de]), et = bP(de, !r, function(Ze) {
    if (Ze === Yi) {
      var kt = $e[Yi];
      return kt ? kt(Se()) : QR;
    }
    if (mt in $e) {
      var gt;
      Ie(((gt = $e[mt]) === null || gt === void 0 ? void 0 : gt.call($e, Se(), null)) || null);
    }
    return mt === xf && (nt(Se()), k > 0 && (clearTimeout(he.current), he.current = setTimeout(function() {
      Xe({
        deadline: !0
      });
    }, k))), mt === BR && Ke(), yP;
  }), Vt = xe(et, 2), Ee = Vt[0], mt = Vt[1], Dt = XR(mt);
  ze.current = Dt, YR(function() {
    pe(o);
    var Ze = ie.current;
    ie.current = !0;
    var kt;
    !Ze && o && C && (kt = Ym), Ze && o && m && (kt = Qm), (Ze && !o && E || !Ze && _ && !o && E) && (kt = Xm);
    var gt = Nt(kt);
    kt && (r || gt[Yi]) ? (Ce(kt), Ee()) : Ce(Ks);
  }, [o]), Wo(function() {
    // Cancel appear
    (de === Ym && !C || // Cancel enter
    de === Qm && !m || // Cancel leave
    de === Xm && !E) && Ce(Ks);
  }, [C, m, E]), Wo(function() {
    return function() {
      ie.current = !1, clearTimeout(he.current);
    };
  }, []);
  var zt = T.useRef(!1);
  Wo(function() {
    ge && (zt.current = !0), ge !== void 0 && de === Ks && ((zt.current || ge) && (ne == null || ne(ge)), zt.current = !0);
  }, [ge, de]);
  var Ut = Ae;
  return $e[Yi] && mt === wf && (Ut = Te({
    transition: "none"
  }, Ut)), [de, mt, Ut, ge != null ? ge : o];
}
function CP(r) {
  var o = r;
  Vn(r) === "object" && (o = r.transitionSupport);
  function u(d, m) {
    return !!(d.motionName && o && m !== !1);
  }
  var c = /* @__PURE__ */ T.forwardRef(function(d, m) {
    var h = d.visible, C = h === void 0 ? !0 : h, x = d.removeOnLeave, E = x === void 0 ? !0 : x, k = d.forceRender, _ = d.children, N = d.motionName, D = d.leavedClassName, P = d.eventProps, F = T.useContext(FR), L = F.motion, W = u(d, L), $ = Ma(), z = Ma();
    function I() {
      try {
        return $.current instanceof HTMLElement ? $.current : og(z.current);
      } catch (Ie) {
        return null;
      }
    }
    var U = SP(W, C, I, d), Y = xe(U, 4), q = Y[0], ne = Y[1], oe = Y[2], re = Y[3], ge = T.useRef(re);
    re && (ge.current = !0);
    var pe = T.useCallback(function(Ie) {
      $.current = Ie, b1(m, Ie);
    }, [m]), te, se = Te(Te({}, P), {}, {
      visible: C
    });
    if (!_)
      te = null;
    else if (q === Ks)
      re ? te = _(Te({}, se), pe) : !E && ge.current && D ? te = _(Te(Te({}, se), {}, {
        className: D
      }), pe) : k || !E && !D ? te = _(Te(Te({}, se), {}, {
        style: {
          display: "none"
        }
      }), pe) : te = null;
    else {
      var de, Ce;
      ne === Yi ? Ce = "prepare" : XR(ne) ? Ce = "active" : ne === wf && (Ce = "start");
      var ke = eT(N, "".concat(q, "-").concat(Ce));
      te = _(Te(Te({}, se), {}, {
        className: wn(eT(N, q), (de = {}, tt(de, ke, ke && Ce), tt(de, N, typeof N == "string"), de)),
        style: oe
      }), pe);
    }
    if (/* @__PURE__ */ T.isValidElement(te) && Mg(te)) {
      var we = te, Ae = we.ref;
      Ae || (te = /* @__PURE__ */ T.cloneElement(te, {
        ref: pe
      }));
    }
    return /* @__PURE__ */ T.createElement(cP, {
      ref: z
    }, te);
  });
  return c.displayName = "CSSMotion", c;
}
const $g = CP(qR);
var $S = "add", US = "keep", jS = "remove", cS = "removed";
function EP(r) {
  var o;
  return r && Vn(r) === "object" && "key" in r ? o = r : o = {
    key: r
  }, Te(Te({}, o), {}, {
    key: String(o.key)
  });
}
function HS() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return r.map(EP);
}
function wP() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], u = [], c = 0, d = o.length, m = HS(r), h = HS(o);
  m.forEach(function(E) {
    for (var k = !1, _ = c; _ < d; _ += 1) {
      var N = h[_];
      if (N.key === E.key) {
        c < _ && (u = u.concat(h.slice(c, _).map(function(D) {
          return Te(Te({}, D), {}, {
            status: $S
          });
        })), c = _), u.push(Te(Te({}, N), {}, {
          status: US
        })), c += 1, k = !0;
        break;
      }
    }
    k || u.push(Te(Te({}, E), {}, {
      status: jS
    }));
  }), c < d && (u = u.concat(h.slice(c).map(function(E) {
    return Te(Te({}, E), {}, {
      status: $S
    });
  })));
  var C = {};
  u.forEach(function(E) {
    var k = E.key;
    C[k] = (C[k] || 0) + 1;
  });
  var x = Object.keys(C).filter(function(E) {
    return C[E] > 1;
  });
  return x.forEach(function(E) {
    u = u.filter(function(k) {
      var _ = k.key, N = k.status;
      return _ !== E || N !== jS;
    }), u.forEach(function(k) {
      k.key === E && (k.status = US);
    });
  }), u;
}
var xP = ["component", "children", "onVisibleChanged", "onAllRemoved"], TP = ["status"], RP = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function _P(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $g, u = /* @__PURE__ */ function(c) {
    Df(m, c);
    var d = Dg(m);
    function m() {
      var h;
      Ji(this, m);
      for (var C = arguments.length, x = new Array(C), E = 0; E < C; E++)
        x[E] = arguments[E];
      return h = d.call.apply(d, [this].concat(x)), tt(NS(h), "state", {
        keyEntities: []
      }), tt(NS(h), "removeKey", function(k) {
        var _ = h.state.keyEntities, N = _.map(function(D) {
          return D.key !== k ? D : Te(Te({}, D), {}, {
            status: cS
          });
        });
        return h.setState({
          keyEntities: N
        }), N.filter(function(D) {
          var P = D.status;
          return P !== cS;
        }).length;
      }), h;
    }
    return eo(m, [{
      key: "render",
      value: function() {
        var C = this, x = this.state.keyEntities, E = this.props, k = E.component, _ = E.children, N = E.onVisibleChanged, D = E.onAllRemoved, P = Fn(E, xP), F = k || T.Fragment, L = {};
        return RP.forEach(function(W) {
          L[W] = P[W], delete P[W];
        }), delete P.keys, /* @__PURE__ */ T.createElement(F, P, x.map(function(W, $) {
          var z = W.status, I = Fn(W, TP), U = z === $S || z === US;
          return /* @__PURE__ */ T.createElement(o, an({}, L, {
            key: I.key,
            visible: U,
            eventProps: I,
            onVisibleChanged: function(q) {
              if (N == null || N(q, {
                key: I.key
              }), !q) {
                var ne = C.removeKey(I.key);
                ne === 0 && D && D();
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
        var E = C.keys, k = x.keyEntities, _ = HS(E), N = wP(k, _);
        return {
          keyEntities: N.filter(function(D) {
            var P = k.find(function(F) {
              var L = F.key;
              return D.key === L;
            });
            return !(P && P.status === cS && D.status === jS);
          })
        };
      }
    }]), m;
  }(T.Component);
  return tt(u, "defaultProps", {
    component: "div"
  }), u;
}
_P(qR);
function kP(r) {
  var o = r.prefixCls, u = r.align, c = r.arrow, d = r.arrowPos, m = c || {}, h = m.className, C = m.content, x = d.x, E = x === void 0 ? 0 : x, k = d.y, _ = k === void 0 ? 0 : k, N = T.useRef();
  if (!u || !u.points)
    return null;
  var D = {
    position: "absolute"
  };
  if (u.autoArrow !== !1) {
    var P = u.points[0], F = u.points[1], L = P[0], W = P[1], $ = F[0], z = F[1];
    L === $ || !["t", "b"].includes(L) ? D.top = _ : L === "t" ? D.top = 0 : D.bottom = 0, W === z || !["l", "r"].includes(W) ? D.left = E : W === "l" ? D.left = 0 : D.right = 0;
  }
  return /* @__PURE__ */ T.createElement("div", {
    ref: N,
    className: wn("".concat(o, "-arrow"), h),
    style: D
  }, C);
}
function MP(r) {
  var o = r.prefixCls, u = r.open, c = r.zIndex, d = r.mask, m = r.motion;
  return d ? /* @__PURE__ */ T.createElement($g, an({}, m, {
    motionAppear: !0,
    visible: u,
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
  var u = r.popup, c = r.className, d = r.prefixCls, m = r.style, h = r.target, C = r.onVisibleChanged, x = r.open, E = r.keepDom, k = r.fresh, _ = r.onClick, N = r.mask, D = r.arrow, P = r.arrowPos, F = r.align, L = r.motion, W = r.maskMotion, $ = r.forceRender, z = r.getPopupContainer, I = r.autoDestroy, U = r.portal, Y = r.zIndex, q = r.onMouseEnter, ne = r.onMouseLeave, oe = r.onPointerEnter, re = r.ready, ge = r.offsetX, pe = r.offsetY, te = r.offsetR, se = r.offsetB, de = r.onAlign, Ce = r.onPrepare, ke = r.stretch, we = r.targetWidth, Ae = r.targetHeight, Ie = typeof u == "function" ? u() : u, ie = x || E, he = (z == null ? void 0 : z.length) > 0, Se = T.useState(!z || !he), ze = xe(Se, 2), Ke = ze[0], Xe = ze[1];
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
    var nt, Nt = F.points, $e = F.dynamicInset || ((nt = F._experimental) === null || nt === void 0 ? void 0 : nt.dynamicInset), et = $e && Nt[0][1] === "r", Vt = $e && Nt[0][0] === "b";
    et ? (Ve.right = te, Ve.left = it) : (Ve.left = ge, Ve.right = it), Vt ? (Ve.bottom = se, Ve.top = it) : (Ve.top = pe, Ve.bottom = it);
  }
  var Ee = {};
  return ke && (ke.includes("height") && Ae ? Ee.height = Ae : ke.includes("minHeight") && Ae && (Ee.minHeight = Ae), ke.includes("width") && we ? Ee.width = we : ke.includes("minWidth") && we && (Ee.minWidth = we)), x || (Ee.pointerEvents = "none"), /* @__PURE__ */ T.createElement(U, {
    open: $ || ie,
    getContainer: z && function() {
      return z(h);
    },
    autoDestroy: I
  }, /* @__PURE__ */ T.createElement(MP, {
    prefixCls: d,
    open: x,
    zIndex: Y,
    mask: N,
    motion: W
  }), /* @__PURE__ */ T.createElement(Af, {
    onResize: de,
    disabled: !x
  }, function(mt) {
    return /* @__PURE__ */ T.createElement($g, an({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: $,
      leavedClassName: "".concat(d, "-hidden")
    }, L, {
      onAppearPrepare: Ce,
      onEnterPrepare: Ce,
      visible: x,
      onVisibleChanged: function(zt) {
        var Ut;
        L == null || (Ut = L.onVisibleChanged) === null || Ut === void 0 || Ut.call(L, zt), C(zt);
      }
    }), function(Dt, zt) {
      var Ut = Dt.className, Ze = Dt.style, kt = wn(d, Ut, c);
      return /* @__PURE__ */ T.createElement("div", {
        ref: cR(mt, o, zt),
        className: kt,
        style: Te(Te(Te(Te({
          "--arrow-x": "".concat(P.x || 0, "px"),
          "--arrow-y": "".concat(P.y || 0, "px")
        }, Ve), Ee), Ze), {}, {
          boxSizing: "border-box",
          zIndex: Y
        }, m),
        onMouseEnter: q,
        onMouseLeave: ne,
        onPointerEnter: oe,
        onClick: _
      }, D && /* @__PURE__ */ T.createElement(kP, {
        prefixCls: d,
        arrow: D,
        arrowPos: P,
        align: F
      }), /* @__PURE__ */ T.createElement(ZR, {
        cache: !x && !k
      }, Ie));
    });
  }));
});
process.env.NODE_ENV !== "production" && (JR.displayName = "Popup");
var e_ = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var u = r.children, c = r.getTriggerDOMNode, d = Mg(u), m = T.useCallback(function(C) {
    b1(o, c ? c(C) : C);
  }, [c]), h = kg(m, u.ref);
  return d ? /* @__PURE__ */ T.cloneElement(u, {
    ref: h
  }) : u;
});
process.env.NODE_ENV !== "production" && (e_.displayName = "TriggerWrapper");
var tT = /* @__PURE__ */ T.createContext(null);
function nT(r) {
  return r ? Array.isArray(r) ? r : [r] : [];
}
function OP(r, o, u, c) {
  return T.useMemo(function() {
    var d = nT(u != null ? u : o), m = nT(c != null ? c : o), h = new Set(d), C = new Set(m);
    return r && (h.has("hover") && (h.delete("hover"), h.add("click")), C.has("hover") && (C.delete("hover"), C.add("click"))), [h, C];
  }, [r, o, u, c]);
}
function NP() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], u = arguments.length > 2 ? arguments[2] : void 0;
  return u ? r[0] === o[0] : r[0] === o[0] && r[1] === o[1];
}
function DP(r, o, u, c) {
  for (var d = u.points, m = Object.keys(r), h = 0; h < m.length; h += 1) {
    var C, x = m[h];
    if (NP((C = r[x]) === null || C === void 0 ? void 0 : C.points, d, c))
      return "".concat(o, "-placement-").concat(x);
  }
  return "";
}
function rT(r, o, u, c) {
  return o || (u ? {
    motionName: "".concat(r, "-").concat(u)
  } : c ? {
    motionName: c
  } : null);
}
function ip(r) {
  return r.ownerDocument.defaultView;
}
function FS(r) {
  for (var o = [], u = r == null ? void 0 : r.parentElement, c = ["hidden", "scroll", "clip", "auto"]; u; ) {
    var d = ip(u).getComputedStyle(u), m = d.overflowX, h = d.overflowY, C = d.overflow;
    [m, h, C].some(function(x) {
      return c.includes(x);
    }) && o.push(u), u = u.parentElement;
  }
  return o;
}
function Yv(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(r) ? o : r;
}
function Iv(r) {
  return Yv(parseFloat(r), 0);
}
function aT(r, o) {
  var u = Te({}, r);
  return (o || []).forEach(function(c) {
    if (!(c instanceof HTMLBodyElement || c instanceof HTMLHtmlElement)) {
      var d = ip(c).getComputedStyle(c), m = d.overflow, h = d.overflowClipMargin, C = d.borderTopWidth, x = d.borderBottomWidth, E = d.borderLeftWidth, k = d.borderRightWidth, _ = c.getBoundingClientRect(), N = c.offsetHeight, D = c.clientHeight, P = c.offsetWidth, F = c.clientWidth, L = Iv(C), W = Iv(x), $ = Iv(E), z = Iv(k), I = Yv(Math.round(_.width / P * 1e3) / 1e3), U = Yv(Math.round(_.height / N * 1e3) / 1e3), Y = (P - F - $ - z) * I, q = (N - D - L - W) * U, ne = L * U, oe = W * U, re = $ * I, ge = z * I, pe = 0, te = 0;
      if (m === "clip") {
        var se = Iv(h);
        pe = se * I, te = se * U;
      }
      var de = _.x + re - pe, Ce = _.y + ne - te, ke = de + _.width + 2 * pe - re - ge - Y, we = Ce + _.height + 2 * te - ne - oe - q;
      u.left = Math.max(u.left, de), u.top = Math.max(u.top, Ce), u.right = Math.min(u.right, ke), u.bottom = Math.min(u.bottom, we);
    }
  }), u;
}
function iT(r) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, u = "".concat(o), c = u.match(/^(.*)\%$/);
  return c ? r * (parseFloat(c[1]) / 100) : parseFloat(u);
}
function oT(r, o) {
  var u = o || [], c = xe(u, 2), d = c[0], m = c[1];
  return [iT(r.width, d), iT(r.height, m)];
}
function lT() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [r[0], r[1]];
}
function gf(r, o) {
  var u = o[0], c = o[1], d, m;
  return u === "t" ? m = r.y : u === "b" ? m = r.y + r.height : m = r.y + r.height / 2, c === "l" ? d = r.x : c === "r" ? d = r.x + r.width : d = r.x + r.width / 2, {
    x: d,
    y: m
  };
}
function _u(r, o) {
  var u = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return r.map(function(c, d) {
    return d === o ? u[c] || "c" : c;
  }).join("");
}
function AP(r, o, u, c, d, m, h) {
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
  }), x = xe(C, 2), E = x[0], k = x[1], _ = T.useRef(0), N = T.useMemo(function() {
    return o ? FS(o) : [];
  }, [o]), D = T.useRef({}), P = function() {
    D.current = {};
  };
  r || P();
  var F = Vo(function() {
    if (o && u && r) {
      let tr = function(br, ga) {
        var Ti = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : kt, Na = Ie.x + br, to = Ie.y + ga, Da = Na + nt, no = to + Ve, Ri = Math.max(Na, Ti.left), qo = Math.max(to, Ti.top), ro = Math.min(Da, Ti.right), Il = Math.min(no, Ti.bottom);
        return Math.max(0, (ro - Ri) * (Il - qo));
      }, la = function() {
        Yr = Ie.y + Ue, ln = Yr + Ve, Jn = Ie.x + Ht, Tr = Jn + nt;
      };
      var $, z, I = o, U = I.ownerDocument, Y = ip(I), q = Y.getComputedStyle(I), ne = q.width, oe = q.height, re = q.position, ge = I.style.left, pe = I.style.top, te = I.style.right, se = I.style.bottom, de = I.style.overflow, Ce = Te(Te({}, d[c]), m), ke = U.createElement("div");
      ($ = I.parentElement) === null || $ === void 0 || $.appendChild(ke), ke.style.left = "".concat(I.offsetLeft, "px"), ke.style.top = "".concat(I.offsetTop, "px"), ke.style.position = re, ke.style.height = "".concat(I.offsetHeight, "px"), ke.style.width = "".concat(I.offsetWidth, "px"), I.style.left = "0", I.style.top = "0", I.style.right = "auto", I.style.bottom = "auto", I.style.overflow = "hidden";
      var we;
      if (Array.isArray(u))
        we = {
          x: u[0],
          y: u[1],
          width: 0,
          height: 0
        };
      else {
        var Ae = u.getBoundingClientRect();
        we = {
          x: Ae.x,
          y: Ae.y,
          width: Ae.width,
          height: Ae.height
        };
      }
      var Ie = I.getBoundingClientRect(), ie = U.documentElement, he = ie.clientWidth, Se = ie.clientHeight, ze = ie.scrollWidth, Ke = ie.scrollHeight, Xe = ie.scrollTop, it = ie.scrollLeft, Ve = Ie.height, nt = Ie.width, Nt = we.height, $e = we.width, et = {
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
      var zt = Ee === Dt, Ut = aT(Vt, N), Ze = aT(et, N), kt = Ee === mt ? Ze : Ut, gt = zt ? Ze : kt;
      I.style.left = "auto", I.style.top = "auto", I.style.right = "0", I.style.bottom = "0";
      var Zt = I.getBoundingClientRect();
      I.style.left = ge, I.style.top = pe, I.style.right = te, I.style.bottom = se, I.style.overflow = de, (z = I.parentElement) === null || z === void 0 || z.removeChild(ke);
      var ot = Yv(Math.round(nt / parseFloat(ne) * 1e3) / 1e3), Wt = Yv(Math.round(Ve / parseFloat(oe) * 1e3) / 1e3);
      if (ot === 0 || Wt === 0 || pg(u) && !NR(u))
        return;
      var Qt = Ce.offset, ut = Ce.targetOffset, Gt = oT(Ie, Qt), Wn = xe(Gt, 2), qt = Wn[0], en = Wn[1], ye = oT(we, ut), Ne = xe(ye, 2), We = Ne[0], xt = Ne[1];
      we.x -= We, we.y -= xt;
      var Mt = Ce.points || [], rt = xe(Mt, 2), st = rt[0], on = rt[1], Ot = lT(on), jt = lT(st), ir = gf(we, Ot), Bt = gf(Ie, jt), dn = Te({}, Ce), Ht = ir.x - Bt.x + qt, Ue = ir.y - Bt.y + en, St = tr(Ht, Ue), Oe = tr(Ht, Ue, Ze), Ge = gf(we, ["t", "l"]), At = gf(Ie, ["t", "l"]), mn = gf(we, ["b", "r"]), An = gf(Ie, ["b", "r"]), gn = Ce.overflow || {}, oa = gn.adjustX, qr = gn.adjustY, Ln = gn.shiftX, Kt = gn.shiftY, Bn = function(ga) {
        return typeof ga == "boolean" ? ga : ga >= 0;
      }, Yr, ln, Jn, Tr;
      la();
      var qa = Bn(qr), Lr = jt[0] === Ot[0];
      if (qa && jt[0] === "t" && (ln > gt.bottom || D.current.bt)) {
        var Pr = Ue;
        Lr ? Pr -= Ve - Nt : Pr = Ge.y - An.y - en;
        var Rr = tr(Ht, Pr), Ya = tr(Ht, Pr, Ze);
        // Of course use larger one
        Rr > St || Rr === St && (!zt || // Choose recommend one
        Ya >= Oe) ? (D.current.bt = !0, Ue = Pr, en = -en, dn.points = [_u(jt, 0), _u(Ot, 0)]) : D.current.bt = !1;
      }
      if (qa && jt[0] === "b" && (Yr < gt.top || D.current.tb)) {
        var Pn = Ue;
        Lr ? Pn += Ve - Nt : Pn = mn.y - At.y - en;
        var wi = tr(Ht, Pn), _r = tr(Ht, Pn, Ze);
        // Of course use larger one
        wi > St || wi === St && (!zt || // Choose recommend one
        _r >= Oe) ? (D.current.tb = !0, Ue = Pn, en = -en, dn.points = [_u(jt, 0), _u(Ot, 0)]) : D.current.tb = !1;
      }
      var xn = Bn(oa), Ir = jt[1] === Ot[1];
      if (xn && jt[1] === "l" && (Tr > gt.right || D.current.rl)) {
        var kr = Ht;
        Ir ? kr -= nt - $e : kr = Ge.x - An.x - qt;
        var zr = tr(kr, Ue), Qa = tr(kr, Ue, Ze);
        // Of course use larger one
        zr > St || zr === St && (!zt || // Choose recommend one
        Qa >= Oe) ? (D.current.rl = !0, Ht = kr, qt = -qt, dn.points = [_u(jt, 1), _u(Ot, 1)]) : D.current.rl = !1;
      }
      if (xn && jt[1] === "r" && (Jn < gt.left || D.current.lr)) {
        var $r = Ht;
        Ir ? $r += nt - $e : $r = mn.x - At.x - qt;
        var Xa = tr($r, Ue), gr = tr($r, Ue, Ze);
        // Of course use larger one
        Xa > St || Xa === St && (!zt || // Choose recommend one
        gr >= Oe) ? (D.current.lr = !0, Ht = $r, qt = -qt, dn.points = [_u(jt, 1), _u(Ot, 1)]) : D.current.lr = !1;
      }
      la();
      var Qr = Ln === !0 ? 0 : Ln;
      typeof Qr == "number" && (Jn < Ze.left && (Ht -= Jn - Ze.left - qt, we.x + $e < Ze.left + Qr && (Ht += we.x - Ze.left + $e - Qr)), Tr > Ze.right && (Ht -= Tr - Ze.right - qt, we.x > Ze.right - Qr && (Ht += we.x - Ze.right + Qr)));
      var Mr = Kt === !0 ? 0 : Kt;
      typeof Mr == "number" && (Yr < Ze.top && (Ue -= Yr - Ze.top - en, we.y + Nt < Ze.top + Mr && (Ue += we.y - Ze.top + Nt - Mr)), ln > Ze.bottom && (Ue -= ln - Ze.bottom - en, we.y > Ze.bottom - Mr && (Ue += we.y - Ze.bottom + Mr)));
      var ma = Ie.x + Ht, In = ma + nt, Kn = Ie.y + Ue, Or = Kn + Ve, or = we.x, yr = or + $e, Re = we.y, Xt = Re + Nt, dt = Math.max(ma, or), $t = Math.min(In, yr), Tn = (dt + $t) / 2, On = Tn - ma, Nn = Math.max(Kn, Re), vn = Math.min(Or, Xt), er = (Nn + vn) / 2, xi = er - Kn;
      h == null || h(o, dn);
      var Gn = Zt.right - Ie.x - (Ht + Ie.width), zn = Zt.bottom - Ie.y - (Ue + Ie.height);
      k({
        ready: !0,
        offsetX: Ht / ot,
        offsetY: Ue / Wt,
        offsetR: Gn / ot,
        offsetB: zn / Wt,
        arrowX: On / ot,
        arrowY: xi / Wt,
        scaleX: ot,
        scaleY: Wt,
        align: dn
      });
    }
  }), L = function() {
    _.current += 1;
    var z = _.current;
    Promise.resolve().then(function() {
      _.current === z && F();
    });
  }, W = function() {
    k(function(z) {
      return Te(Te({}, z), {}, {
        ready: !1
      });
    });
  };
  return ia(W, [c]), ia(function() {
    r || W();
  }, [r]), [E.ready, E.offsetX, E.offsetY, E.offsetR, E.offsetB, E.arrowX, E.arrowY, E.scaleX, E.scaleY, E.align, L];
}
function LP(r, o, u, c, d) {
  ia(function() {
    if (r && o && u) {
      let _ = function() {
        c(), d();
      };
      var m = o, h = u, C = FS(m), x = FS(h), E = ip(h), k = new Set([E].concat(ar(C), ar(x)));
      return k.forEach(function(N) {
        N.addEventListener("scroll", _, {
          passive: !0
        });
      }), E.addEventListener("resize", _, {
        passive: !0
      }), c(), function() {
        k.forEach(function(N) {
          N.removeEventListener("scroll", _), E.removeEventListener("resize", _);
        });
      };
    }
  }, [r, o, u]);
}
function PP(r, o, u, c, d, m, h, C) {
  var x = T.useRef(r), E = T.useRef(!1);
  x.current !== r && (E.current = !0, x.current = r), T.useEffect(function() {
    var k = Si(function() {
      E.current = !1;
    });
    return function() {
      Si.cancel(k);
    };
  }, [r]), T.useEffect(function() {
    if (o && c && (!d || m)) {
      var k = function() {
        var re = !1, ge = function(se) {
          var de = se.target;
          re = h(de);
        }, pe = function(se) {
          var de = se.target;
          !E.current && x.current && !re && !h(de) && C(!1);
        };
        return [ge, pe];
      }, _ = k(), N = xe(_, 2), D = N[0], P = N[1], F = k(), L = xe(F, 2), W = L[0], $ = L[1], z = ip(c);
      z.addEventListener("mousedown", D, !0), z.addEventListener("click", P, !0), z.addEventListener("contextmenu", P, !0);
      var I = bg(u);
      if (I && (I.addEventListener("mousedown", W, !0), I.addEventListener("click", $, !0), I.addEventListener("contextmenu", $, !0)), process.env.NODE_ENV !== "production") {
        var U, Y, q = u == null || (U = u.getRootNode) === null || U === void 0 ? void 0 : U.call(u), ne = (Y = c.getRootNode) === null || Y === void 0 ? void 0 : Y.call(c);
        _f(q === ne, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        z.removeEventListener("mousedown", D, !0), z.removeEventListener("click", P, !0), z.removeEventListener("contextmenu", P, !0), I && (I.removeEventListener("mousedown", W, !0), I.removeEventListener("click", $, !0), I.removeEventListener("contextmenu", $, !0));
      };
    }
  }, [o, u, c, d, m]);
}
var IP = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function zP() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : _1, o = /* @__PURE__ */ T.forwardRef(function(u, c) {
    var d = u.prefixCls, m = d === void 0 ? "rc-trigger-popup" : d, h = u.children, C = u.action, x = C === void 0 ? "hover" : C, E = u.showAction, k = u.hideAction, _ = u.popupVisible, N = u.defaultPopupVisible, D = u.onPopupVisibleChange, P = u.afterPopupVisibleChange, F = u.mouseEnterDelay, L = u.mouseLeaveDelay, W = L === void 0 ? 0.1 : L, $ = u.focusDelay, z = u.blurDelay, I = u.mask, U = u.maskClosable, Y = U === void 0 ? !0 : U, q = u.getPopupContainer, ne = u.forceRender, oe = u.autoDestroy, re = u.destroyPopupOnHide, ge = u.popup, pe = u.popupClassName, te = u.popupStyle, se = u.popupPlacement, de = u.builtinPlacements, Ce = de === void 0 ? {} : de, ke = u.popupAlign, we = u.zIndex, Ae = u.stretch, Ie = u.getPopupClassNameFromAlign, ie = u.fresh, he = u.alignPoint, Se = u.onPopupClick, ze = u.onPopupAlign, Ke = u.arrow, Xe = u.popupMotion, it = u.maskMotion, Ve = u.popupTransitionName, nt = u.popupAnimation, Nt = u.maskTransitionName, $e = u.maskAnimation, et = u.className, Vt = u.getTriggerDOMNode, Ee = Fn(u, IP), mt = oe || re || !1, Dt = T.useState(!1), zt = xe(Dt, 2), Ut = zt[0], Ze = zt[1];
    ia(function() {
      Ze(lP());
    }, []);
    var kt = T.useRef({}), gt = T.useContext(tT), Zt = T.useMemo(function() {
      return {
        registerSubPopup: function(yt, ct) {
          kt.current[yt] = ct, gt == null || gt.registerSubPopup(yt, ct);
        }
      };
    }, [gt]), ot = oP(), Wt = T.useState(null), Qt = xe(Wt, 2), ut = Qt[0], Gt = Qt[1], Wn = Vo(function(Be) {
      pg(Be) && ut !== Be && Gt(Be), gt == null || gt.registerSubPopup(ot, Be);
    }), qt = T.useState(null), en = xe(qt, 2), ye = en[0], Ne = en[1], We = T.useRef(null), xt = Vo(function(Be) {
      pg(Be) && ye !== Be && (Ne(Be), We.current = Be);
    }), Mt = T.Children.only(h), rt = (Mt == null ? void 0 : Mt.props) || {}, st = {}, on = Vo(function(Be) {
      var yt, ct, pn = ye;
      return (pn == null ? void 0 : pn.contains(Be)) || ((yt = bg(pn)) === null || yt === void 0 ? void 0 : yt.host) === Be || Be === pn || (ut == null ? void 0 : ut.contains(Be)) || ((ct = bg(ut)) === null || ct === void 0 ? void 0 : ct.host) === Be || Be === ut || Object.values(kt.current).some(function(Cn) {
        return (Cn == null ? void 0 : Cn.contains(Be)) || Be === Cn;
      });
    }), Ot = rT(m, Xe, nt, Ve), jt = rT(m, it, $e, Nt), ir = T.useState(N || !1), Bt = xe(ir, 2), dn = Bt[0], Ht = Bt[1], Ue = _ != null ? _ : dn, St = Vo(function(Be) {
      _ === void 0 && Ht(Be);
    });
    ia(function() {
      Ht(_ || !1);
    }, [_]);
    var Oe = T.useRef(Ue);
    Oe.current = Ue;
    var Ge = T.useRef([]);
    Ge.current = [];
    var At = Vo(function(Be) {
      var yt;
      St(Be), ((yt = Ge.current[Ge.current.length - 1]) !== null && yt !== void 0 ? yt : Ue) !== Be && (Ge.current.push(Be), D == null || D(Be));
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
    }, Ya = AP(Ue, ut, he ? Lr : ye, se, Ce, ke, ze), Pn = xe(Ya, 11), wi = Pn[0], _r = Pn[1], xn = Pn[2], Ir = Pn[3], kr = Pn[4], zr = Pn[5], Qa = Pn[6], $r = Pn[7], Xa = Pn[8], gr = Pn[9], Qr = Pn[10], Mr = OP(Ut, x, E, k), ma = xe(Mr, 2), In = ma[0], Kn = ma[1], Or = In.has("click"), or = Kn.has("click") || Kn.has("contextMenu"), yr = Vo(function() {
      Ln || Qr();
    }), Re = function() {
      Oe.current && he && or && gn(!1);
    };
    LP(Ue, ye, ut, yr, Re), ia(function() {
      yr();
    }, [Lr, se]), ia(function() {
      Ue && !(Ce != null && Ce[se]) && yr();
    }, [JSON.stringify(ke)]);
    var Xt = T.useMemo(function() {
      var Be = DP(Ce, m, gr, he);
      return wn(Be, Ie == null ? void 0 : Ie(gr));
    }, [gr, Ie, Ce, m, he]);
    T.useImperativeHandle(c, function() {
      return {
        nativeElement: We.current,
        forceAlign: yr
      };
    });
    var dt = T.useState(0), $t = xe(dt, 2), Tn = $t[0], On = $t[1], Nn = T.useState(0), vn = xe(Nn, 2), er = vn[0], xi = vn[1], Gn = function() {
      if (Ae && ye) {
        var yt = ye.getBoundingClientRect();
        On(yt.width), xi(yt.height);
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
    function br(Be, yt, ct, pn) {
      st[Be] = function(Cn) {
        var ao;
        pn == null || pn(Cn), gn(yt, ct);
        for (var Za = arguments.length, Lu = new Array(Za > 1 ? Za - 1 : 0), _i = 1; _i < Za; _i++)
          Lu[_i - 1] = arguments[_i];
        (ao = rt[Be]) === null || ao === void 0 || ao.call.apply(ao, [rt, Cn].concat(Lu));
      };
    }
    (Or || or) && (st.onClick = function(Be) {
      var yt;
      Oe.current && or ? gn(!1) : !Oe.current && Or && (Rr(Be), gn(!0));
      for (var ct = arguments.length, pn = new Array(ct > 1 ? ct - 1 : 0), Cn = 1; Cn < ct; Cn++)
        pn[Cn - 1] = arguments[Cn];
      (yt = rt.onClick) === null || yt === void 0 || yt.call.apply(yt, [rt, Be].concat(pn));
    }), PP(Ue, or, ye, ut, I, Y, on, gn);
    var ga = In.has("hover"), Ti = Kn.has("hover"), Na, to;
    ga && (br("onMouseEnter", !0, F, function(Be) {
      Rr(Be);
    }), br("onPointerEnter", !0, F, function(Be) {
      Rr(Be);
    }), Na = function() {
      (Ue || Ln) && gn(!0, F);
    }, he && (st.onMouseMove = function(Be) {
      var yt;
      (yt = rt.onMouseMove) === null || yt === void 0 || yt.call(rt, Be);
    })), Ti && (br("onMouseLeave", !1, W), br("onPointerLeave", !1, W), to = function() {
      gn(!1, W);
    }), In.has("focus") && br("onFocus", !0, $), Kn.has("focus") && br("onBlur", !1, z), In.has("contextMenu") && (st.onContextMenu = function(Be) {
      var yt;
      Oe.current && Kn.has("contextMenu") ? gn(!1) : (Rr(Be), gn(!0)), Be.preventDefault();
      for (var ct = arguments.length, pn = new Array(ct > 1 ? ct - 1 : 0), Cn = 1; Cn < ct; Cn++)
        pn[Cn - 1] = arguments[Cn];
      (yt = rt.onContextMenu) === null || yt === void 0 || yt.call.apply(yt, [rt, Be].concat(pn));
    }), et && (st.className = wn(rt.className, et));
    var Da = Te(Te({}, rt), st), no = {}, Ri = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Ri.forEach(function(Be) {
      Ee[Be] && (no[Be] = function() {
        for (var yt, ct = arguments.length, pn = new Array(ct), Cn = 0; Cn < ct; Cn++)
          pn[Cn] = arguments[Cn];
        (yt = Da[Be]) === null || yt === void 0 || yt.call.apply(yt, [Da].concat(pn)), Ee[Be].apply(Ee, pn);
      });
    });
    var qo = /* @__PURE__ */ T.cloneElement(Mt, Te(Te({}, Da), no)), ro = {
      x: zr,
      y: Qa
    }, Il = Ke ? Te({}, Ke !== !0 ? Ke : {}) : null;
    return /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(Af, {
      disabled: !Ue,
      ref: xt,
      onResize: zn
    }, /* @__PURE__ */ T.createElement(e_, {
      getTriggerDOMNode: Vt
    }, qo)), /* @__PURE__ */ T.createElement(tT.Provider, {
      value: Zt
    }, /* @__PURE__ */ T.createElement(JR, {
      portal: r,
      ref: Wn,
      prefixCls: m,
      popup: ge,
      className: wn(pe, Xt),
      style: te,
      target: ye,
      onMouseEnter: Na,
      onMouseLeave: to,
      onPointerEnter: Na,
      zIndex: we,
      open: Ue,
      keepDom: Ln,
      fresh: ie,
      onClick: Se,
      mask: I,
      motion: Ot,
      maskMotion: jt,
      onVisibleChanged: tr,
      onPrepare: la,
      forceRender: ne,
      autoDestroy: mt,
      getPopupContainer: q,
      align: gr,
      arrow: Il,
      arrowPos: ro,
      ready: wi,
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
const t_ = zP(_1);
var aa = {
  adjustX: 1,
  adjustY: 1
}, $P = {
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
}, UP = {
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
function n_(r, o, u) {
  if (o)
    return o;
  if (u)
    return u[r] || u.other;
}
var jP = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function HP(r) {
  var o = r.prefixCls, u = r.visible, c = r.children, d = r.popup, m = r.popupStyle, h = r.popupClassName, C = r.popupOffset, x = r.disabled, E = r.mode, k = r.onVisibleChange, _ = T.useContext(Zi), N = _.getPopupContainer, D = _.rtl, P = _.subMenuOpenDelay, F = _.subMenuCloseDelay, L = _.builtinPlacements, W = _.triggerSubMenuAction, $ = _.forceSubMenuRender, z = _.rootClassName, I = _.motion, U = _.defaultMotions, Y = T.useState(!1), q = xe(Y, 2), ne = q[0], oe = q[1], re = Te(D ? Te({}, UP) : Te({}, $P), L), ge = jP[E], pe = n_(E, I, U), te = T.useRef(pe);
  E !== "inline" && (te.current = pe);
  var se = Te(Te({}, te.current), {}, {
    leavedClassName: "".concat(o, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), de = T.useRef();
  return T.useEffect(function() {
    return de.current = Si(function() {
      oe(u);
    }), function() {
      Si.cancel(de.current);
    };
  }, [u]), /* @__PURE__ */ T.createElement(t_, {
    prefixCls: o,
    popupClassName: wn("".concat(o, "-popup"), tt({}, "".concat(o, "-rtl"), D), h, z),
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
    action: x ? [] : [W],
    mouseEnterDelay: P,
    mouseLeaveDelay: F,
    onPopupVisibleChange: k,
    forceRender: $,
    popupMotion: se,
    fresh: !0
  }, c);
}
function FP(r) {
  var o = r.id, u = r.open, c = r.keyPath, d = r.children, m = "inline", h = T.useContext(Zi), C = h.prefixCls, x = h.forceSubMenuRender, E = h.motion, k = h.defaultMotions, _ = h.mode, N = T.useRef(!1);
  N.current = _ === m;
  var D = T.useState(!N.current), P = xe(D, 2), F = P[0], L = P[1], W = N.current ? u : !1;
  T.useEffect(function() {
    N.current && L(!1);
  }, [_]);
  var $ = Te({}, n_(m, E, k));
  c.length > 1 && ($.motionAppear = !1);
  var z = $.onVisibleChanged;
  return $.onVisibleChanged = function(I) {
    return !N.current && !I && L(!0), z == null ? void 0 : z(I);
  }, F ? null : /* @__PURE__ */ T.createElement(Gv, {
    mode: m,
    locked: !N.current
  }, /* @__PURE__ */ T.createElement($g, an({
    visible: W
  }, $, {
    forceRender: x,
    removeOnLeave: !1,
    leavedClassName: "".concat(C, "-hidden")
  }), function(I) {
    var U = I.className, Y = I.style;
    return /* @__PURE__ */ T.createElement(T1, {
      id: o,
      className: U,
      style: Y
    }, d);
  }));
}
var BP = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], VP = ["active"], WP = function(o) {
  var u, c = o.style, d = o.className, m = o.title, h = o.eventKey, C = o.warnKey, x = o.disabled, E = o.internalPopupClose, k = o.children, _ = o.itemIcon, N = o.expandIcon, D = o.popupClassName, P = o.popupOffset, F = o.popupStyle, L = o.onClick, W = o.onMouseEnter, $ = o.onMouseLeave, z = o.onTitleClick, I = o.onTitleMouseEnter, U = o.onTitleMouseLeave, Y = Fn(o, BP), q = _R(h), ne = T.useContext(Zi), oe = ne.prefixCls, re = ne.mode, ge = ne.openKeys, pe = ne.disabled, te = ne.overflowDisabled, se = ne.activeKey, de = ne.selectedKeys, Ce = ne.itemIcon, ke = ne.expandIcon, we = ne.onItemClick, Ae = ne.onOpenChange, Ie = ne.onActive, ie = T.useContext(E1), he = ie._internalRenderSubMenuItem, Se = T.useContext(OR), ze = Se.isSubPathKey, Ke = ap(), Xe = "".concat(oe, "-submenu"), it = pe || x, Ve = T.useRef(), nt = T.useRef();
  process.env.NODE_ENV !== "production" && C && ha(!1, "SubMenu should not leave undefined `key`.");
  var Nt = _ != null ? _ : Ce, $e = N != null ? N : ke, et = ge.includes(h), Vt = !te && et, Ee = ze(de, h), mt = AR(h, it, I, U), Dt = mt.active, zt = Fn(mt, VP), Ut = T.useState(!1), Ze = xe(Ut, 2), kt = Ze[0], gt = Ze[1], Zt = function(st) {
    it || gt(st);
  }, ot = function(st) {
    Zt(!0), W == null || W({
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
  }, [re, Dt, se, kt, h, ze]), ut = LR(Ke.length), Gt = function(st) {
    it || (z == null || z({
      key: h,
      domEvent: st
    }), re === "inline" && Ae(h, !et));
  }, Wn = Uv(function(rt) {
    L == null || L(yg(rt)), we(rt);
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
  }, zt), m, /* @__PURE__ */ T.createElement(PR, {
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
    Ne = /* @__PURE__ */ T.createElement(HP, {
      mode: xt,
      prefixCls: Xe,
      visible: !E && Vt && re !== "inline",
      popupClassName: D,
      popupOffset: P,
      popupStyle: F,
      popup: /* @__PURE__ */ T.createElement(
        Gv,
        {
          mode: xt === "horizontal" ? "vertical" : xt
        },
        /* @__PURE__ */ T.createElement(T1, {
          id: ye,
          ref: nt
        }, k)
      ),
      disabled: it,
      onVisibleChange: qt
    }, Ne);
  }
  var Mt = /* @__PURE__ */ T.createElement(Ll.Item, an({
    role: "none"
  }, Y, {
    component: "li",
    style: c,
    className: wn(Xe, "".concat(Xe, "-").concat(re), d, (u = {}, tt(u, "".concat(Xe, "-open"), Vt), tt(u, "".concat(Xe, "-active"), Qt), tt(u, "".concat(Xe, "-selected"), Ee), tt(u, "".concat(Xe, "-disabled"), it), u)),
    onMouseEnter: ot,
    onMouseLeave: Wt
  }), Ne, !te && /* @__PURE__ */ T.createElement(FP, {
    id: ye,
    open: Vt,
    keyPath: Ke
  }, k));
  return he && (Mt = he(Mt, o, {
    selected: Ee,
    active: Qt,
    open: Vt,
    disabled: it
  })), /* @__PURE__ */ T.createElement(Gv, {
    onItemClick: Wn,
    mode: re === "horizontal" ? "vertical" : re,
    itemIcon: Nt,
    expandIcon: $e
  }, Mt);
};
function M1(r) {
  var o = r.eventKey, u = r.children, c = ap(o), d = R1(u, c), m = Lg();
  T.useEffect(function() {
    if (m)
      return m.registerPath(o, c), function() {
        m.unregisterPath(o, c);
      };
  }, [c]);
  var h;
  return m ? h = d : h = /* @__PURE__ */ T.createElement(WP, r, d), /* @__PURE__ */ T.createElement(MR.Provider, {
    value: c
  }, h);
}
var KP = ["className", "title", "eventKey", "children"], GP = ["children"], qP = function(o) {
  var u = o.className, c = o.title;
  o.eventKey;
  var d = o.children, m = Fn(o, KP), h = T.useContext(Zi), C = h.prefixCls, x = "".concat(C, "-item-group");
  return /* @__PURE__ */ T.createElement("li", an({
    role: "presentation"
  }, m, {
    onClick: function(k) {
      return k.stopPropagation();
    },
    className: wn(x, u)
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
  var o = r.children, u = Fn(r, GP), c = ap(u.eventKey), d = R1(o, c), m = Lg();
  return m ? d : /* @__PURE__ */ T.createElement(qP, Pg(u, ["warnKey"]), d);
}
function a_(r) {
  var o = r.className, u = r.style, c = T.useContext(Zi), d = c.prefixCls, m = Lg();
  return m ? null : /* @__PURE__ */ T.createElement("li", {
    role: "separator",
    className: wn("".concat(d, "-item-divider"), o),
    style: u
  });
}
var YP = ["label", "children", "key", "type"];
function BS(r) {
  return (r || []).map(function(o, u) {
    if (o && Vn(o) === "object") {
      var c = o, d = c.label, m = c.children, h = c.key, C = c.type, x = Fn(c, YP), E = h != null ? h : "tmp-".concat(u);
      return m || C === "group" ? C === "group" ? /* @__PURE__ */ T.createElement(r_, an({
        key: E
      }, x, {
        title: d
      }), BS(m)) : /* @__PURE__ */ T.createElement(M1, an({
        key: E
      }, x, {
        title: d
      }), BS(m)) : C === "divider" ? /* @__PURE__ */ T.createElement(a_, an({
        key: E
      }, x)) : /* @__PURE__ */ T.createElement(Ig, an({
        key: E
      }, x), d);
    }
    return null;
  }).filter(function(o) {
    return o;
  });
}
function QP(r, o, u) {
  var c = r;
  return o && (c = BS(o)), R1(c, u);
}
var XP = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"], yf = [], ZP = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var u, c, d = r, m = d.prefixCls, h = m === void 0 ? "rc-menu" : m, C = d.rootClassName, x = d.style, E = d.className, k = d.tabIndex, _ = k === void 0 ? 0 : k, N = d.items, D = d.children, P = d.direction, F = d.id, L = d.mode, W = L === void 0 ? "vertical" : L, $ = d.inlineCollapsed, z = d.disabled, I = d.disabledOverflow, U = d.subMenuOpenDelay, Y = U === void 0 ? 0.1 : U, q = d.subMenuCloseDelay, ne = q === void 0 ? 0.1 : q, oe = d.forceSubMenuRender, re = d.defaultOpenKeys, ge = d.openKeys, pe = d.activeKey, te = d.defaultActiveFirst, se = d.selectable, de = se === void 0 ? !0 : se, Ce = d.multiple, ke = Ce === void 0 ? !1 : Ce, we = d.defaultSelectedKeys, Ae = d.selectedKeys, Ie = d.onSelect, ie = d.onDeselect, he = d.inlineIndent, Se = he === void 0 ? 24 : he, ze = d.motion, Ke = d.defaultMotions, Xe = d.triggerSubMenuAction, it = Xe === void 0 ? "hover" : Xe, Ve = d.builtinPlacements, nt = d.itemIcon, Nt = d.expandIcon, $e = d.overflowedIndicator, et = $e === void 0 ? "..." : $e, Vt = d.overflowedIndicatorPopupClassName, Ee = d.getPopupContainer, mt = d.onClick, Dt = d.onOpenChange, zt = d.onKeyDown, Ut = d.openAnimation, Ze = d.openTransitionName, kt = d._internalRenderMenuItem, gt = d._internalRenderSubMenuItem, Zt = Fn(d, XP), ot = T.useMemo(function() {
    return QP(D, N, yf);
  }, [D, N]), Wt = T.useState(!1), Qt = xe(Wt, 2), ut = Qt[0], Gt = Qt[1], Wn = T.useRef(), qt = zL(F), en = P === "rtl";
  process.env.NODE_ENV !== "production" && ha(!Ut && !Ze, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var ye = Hv(re, {
    value: ge,
    postState: function(dt) {
      return dt || yf;
    }
  }), Ne = xe(ye, 2), We = Ne[0], xt = Ne[1], Mt = function(dt) {
    var $t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function Tn() {
      xt(dt), Dt == null || Dt(dt);
    }
    $t ? Rg.flushSync(Tn) : Tn();
  }, rt = T.useState(We), st = xe(rt, 2), on = st[0], Ot = st[1], jt = T.useRef(!1), ir = T.useMemo(function() {
    return (W === "inline" || W === "vertical") && $ ? ["vertical", $] : [W, !1];
  }, [W, $]), Bt = xe(ir, 2), dn = Bt[0], Ht = Bt[1], Ue = dn === "inline", St = T.useState(dn), Oe = xe(St, 2), Ge = Oe[0], At = Oe[1], mn = T.useState(Ht), An = xe(mn, 2), gn = An[0], oa = An[1];
  T.useEffect(function() {
    At(dn), oa(Ht), jt.current && (Ue ? xt(on) : Mt(yf));
  }, [dn, Ht]);
  var qr = T.useState(0), Ln = xe(qr, 2), Kt = Ln[0], Bn = Ln[1], Yr = Kt >= ot.length - 1 || Ge !== "horizontal" || I;
  T.useEffect(function() {
    Ue && Ot(We);
  }, [We]), T.useEffect(function() {
    return jt.current = !0, function() {
      jt.current = !1;
    };
  }, []);
  var ln = PL(), Jn = ln.registerPath, Tr = ln.unregisterPath, qa = ln.refreshOverflowKeys, Lr = ln.isSubPathKey, Pr = ln.getKeyPath, Rr = ln.getKeys, Ya = ln.getSubPathKeys, Pn = T.useMemo(function() {
    return {
      registerPath: Jn,
      unregisterPath: Tr
    };
  }, [Jn, Tr]), wi = T.useMemo(function() {
    return {
      isSubPathKey: Lr
    };
  }, [Lr]);
  T.useEffect(function() {
    qa(Yr ? yf : ot.slice(Kt + 1).map(function(Xt) {
      return Xt.key;
    }));
  }, [Kt, Yr]);
  var _r = Hv(pe || te && ((u = ot[0]) === null || u === void 0 ? void 0 : u.key), {
    value: pe
  }), xn = xe(_r, 2), Ir = xn[0], kr = xn[1], zr = Uv(function(Xt) {
    kr(Xt);
  }), Qa = Uv(function() {
    kr(void 0);
  });
  qT(o, function() {
    return {
      list: Wn.current,
      focus: function(dt) {
        var $t, Tn = Rr(), On = PS(Tn, qt), Nn = On.elements, vn = On.key2element, er = On.element2key, xi = w1(Wn.current, Nn), Gn = Ir != null ? Ir : xi[0] ? er.get(xi[0]) : ($t = ot.find(function(la) {
          return !la.props.disabled;
        })) === null || $t === void 0 ? void 0 : $t.key, zn = vn.get(Gn);
        if (Gn && zn) {
          var tr;
          zn == null || (tr = zn.focus) === null || tr === void 0 || tr.call(zn, dt);
        }
      }
    };
  });
  var $r = Hv(we || [], {
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
  }, ma = Uv(function(Xt) {
    mt == null || mt(yg(Xt)), Mr(Xt);
  }), In = Uv(function(Xt, dt) {
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
    C1(We, $t, !0) || Mt($t, !0);
  }), Kn = function(dt, $t) {
    var Tn = $t != null ? $t : !We.includes(dt);
    In(dt, Tn);
  }, Or = DL(Ge, Ir, en, qt, Wn, Rr, Pr, kr, Kn, zt);
  T.useEffect(function() {
    Gt(!0);
  }, []);
  var or = T.useMemo(function() {
    return {
      _internalRenderMenuItem: kt,
      _internalRenderSubMenuItem: gt
    };
  }, [kt, gt]), yr = Ge !== "horizontal" || I ? ot : (
    // Need wrap for overflow dropdown that do not response for open
    ot.map(function(Xt, dt) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ T.createElement(Gv, {
          key: Xt.key,
          overflowDisabled: dt > Kt
        }, Xt)
      );
    })
  ), Re = /* @__PURE__ */ T.createElement(Ll, an({
    id: F,
    ref: Wn,
    prefixCls: "".concat(h, "-overflow"),
    component: "ul",
    itemComponent: Ig,
    className: wn(h, "".concat(h, "-root"), "".concat(h, "-").concat(Ge), E, (c = {}, tt(c, "".concat(h, "-inline-collapsed"), gn), tt(c, "".concat(h, "-rtl"), en), c), C),
    dir: P,
    style: x,
    role: "menu",
    tabIndex: _,
    data: yr,
    renderRawItem: function(dt) {
      return dt;
    },
    renderRawRest: function(dt) {
      var $t = dt.length, Tn = $t ? ot.slice(-$t) : null;
      return /* @__PURE__ */ T.createElement(M1, {
        eventKey: IS,
        title: et,
        disabled: Yr,
        internalPopupClose: $t === 0,
        popupClassName: Vt
      }, Tn);
    },
    maxCount: Ge !== "horizontal" || I ? Ll.INVALIDATE : Ll.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(dt) {
      Bn(dt);
    },
    onKeyDown: Or
  }, Zt));
  return /* @__PURE__ */ T.createElement(E1.Provider, {
    value: or
  }, /* @__PURE__ */ T.createElement(TR.Provider, {
    value: qt
  }, /* @__PURE__ */ T.createElement(Gv, {
    prefixCls: h,
    rootClassName: C,
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
    forceSubMenuRender: oe,
    builtinPlacements: Ve,
    triggerSubMenuAction: it,
    getPopupContainer: Ee,
    itemIcon: nt,
    expandIcon: Nt,
    onItemClick: ma,
    onOpenChange: In
  }, /* @__PURE__ */ T.createElement(OR.Provider, {
    value: wi
  }, Re), /* @__PURE__ */ T.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ T.createElement(kR.Provider, {
    value: Pn
  }, ot)))));
}), Ug = ZP;
Ug.Item = Ig;
Ug.SubMenu = M1;
Ug.ItemGroup = r_;
Ug.Divider = a_;
var JP = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" };
const eI = JP;
function Gr(r, o) {
  tI(r) && (r = "100%");
  var u = nI(r);
  return r = o === 360 ? r : Math.min(o, Math.max(0, parseFloat(r))), u && (r = parseInt(String(r * o), 10) / 100), Math.abs(r - o) < 1e-6 ? 1 : (o === 360 ? r = (r < 0 ? r % o + o : r % o) / parseFloat(String(o)) : r = r % o / parseFloat(String(o)), r);
}
function Jm(r) {
  return Math.min(1, Math.max(0, r));
}
function tI(r) {
  return typeof r == "string" && r.indexOf(".") !== -1 && parseFloat(r) === 1;
}
function nI(r) {
  return typeof r == "string" && r.indexOf("%") !== -1;
}
function i_(r) {
  return r = parseFloat(r), (isNaN(r) || r < 0 || r > 1) && (r = 1), r;
}
function eg(r) {
  return r <= 1 ? "".concat(Number(r) * 100, "%") : r;
}
function Ys(r) {
  return r.length === 1 ? "0" + r : String(r);
}
function rI(r, o, u) {
  return {
    r: Gr(r, 255) * 255,
    g: Gr(o, 255) * 255,
    b: Gr(u, 255) * 255
  };
}
function uT(r, o, u) {
  r = Gr(r, 255), o = Gr(o, 255), u = Gr(u, 255);
  var c = Math.max(r, o, u), d = Math.min(r, o, u), m = 0, h = 0, C = (c + d) / 2;
  if (c === d)
    h = 0, m = 0;
  else {
    var x = c - d;
    switch (h = C > 0.5 ? x / (2 - c - d) : x / (c + d), c) {
      case r:
        m = (o - u) / x + (o < u ? 6 : 0);
        break;
      case o:
        m = (u - r) / x + 2;
        break;
      case u:
        m = (r - o) / x + 4;
        break;
    }
    m /= 6;
  }
  return { h: m, s: h, l: C };
}
function fS(r, o, u) {
  return u < 0 && (u += 1), u > 1 && (u -= 1), u < 1 / 6 ? r + (o - r) * (6 * u) : u < 1 / 2 ? o : u < 2 / 3 ? r + (o - r) * (2 / 3 - u) * 6 : r;
}
function aI(r, o, u) {
  var c, d, m;
  if (r = Gr(r, 360), o = Gr(o, 100), u = Gr(u, 100), o === 0)
    d = u, m = u, c = u;
  else {
    var h = u < 0.5 ? u * (1 + o) : u + o - u * o, C = 2 * u - h;
    c = fS(C, h, r + 1 / 3), d = fS(C, h, r), m = fS(C, h, r - 1 / 3);
  }
  return { r: c * 255, g: d * 255, b: m * 255 };
}
function VS(r, o, u) {
  r = Gr(r, 255), o = Gr(o, 255), u = Gr(u, 255);
  var c = Math.max(r, o, u), d = Math.min(r, o, u), m = 0, h = c, C = c - d, x = c === 0 ? 0 : C / c;
  if (c === d)
    m = 0;
  else {
    switch (c) {
      case r:
        m = (o - u) / C + (o < u ? 6 : 0);
        break;
      case o:
        m = (u - r) / C + 2;
        break;
      case u:
        m = (r - o) / C + 4;
        break;
    }
    m /= 6;
  }
  return { h: m, s: x, v: h };
}
function iI(r, o, u) {
  r = Gr(r, 360) * 6, o = Gr(o, 100), u = Gr(u, 100);
  var c = Math.floor(r), d = r - c, m = u * (1 - o), h = u * (1 - d * o), C = u * (1 - (1 - d) * o), x = c % 6, E = [u, h, m, m, C, u][x], k = [C, u, u, h, m, m][x], _ = [m, m, C, u, u, h][x];
  return { r: E * 255, g: k * 255, b: _ * 255 };
}
function WS(r, o, u, c) {
  var d = [
    Ys(Math.round(r).toString(16)),
    Ys(Math.round(o).toString(16)),
    Ys(Math.round(u).toString(16))
  ];
  return c && d[0].startsWith(d[0].charAt(1)) && d[1].startsWith(d[1].charAt(1)) && d[2].startsWith(d[2].charAt(1)) ? d[0].charAt(0) + d[1].charAt(0) + d[2].charAt(0) : d.join("");
}
function oI(r, o, u, c, d) {
  var m = [
    Ys(Math.round(r).toString(16)),
    Ys(Math.round(o).toString(16)),
    Ys(Math.round(u).toString(16)),
    Ys(lI(c))
  ];
  return d && m[0].startsWith(m[0].charAt(1)) && m[1].startsWith(m[1].charAt(1)) && m[2].startsWith(m[2].charAt(1)) && m[3].startsWith(m[3].charAt(1)) ? m[0].charAt(0) + m[1].charAt(0) + m[2].charAt(0) + m[3].charAt(0) : m.join("");
}
function lI(r) {
  return Math.round(parseFloat(r) * 255).toString(16);
}
function sT(r) {
  return Ka(r) / 255;
}
function Ka(r) {
  return parseInt(r, 16);
}
function uI(r) {
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
  var o = { r: 0, g: 0, b: 0 }, u = 1, c = null, d = null, m = null, h = !1, C = !1;
  return typeof r == "string" && (r = fI(r)), typeof r == "object" && (kl(r.r) && kl(r.g) && kl(r.b) ? (o = rI(r.r, r.g, r.b), h = !0, C = String(r.r).substr(-1) === "%" ? "prgb" : "rgb") : kl(r.h) && kl(r.s) && kl(r.v) ? (c = eg(r.s), d = eg(r.v), o = iI(r.h, c, d), h = !0, C = "hsv") : kl(r.h) && kl(r.s) && kl(r.l) && (c = eg(r.s), m = eg(r.l), o = aI(r.h, c, m), h = !0, C = "hsl"), Object.prototype.hasOwnProperty.call(r, "a") && (u = r.a)), u = i_(u), {
    ok: h,
    format: r.format || C,
    r: Math.min(255, Math.max(o.r, 0)),
    g: Math.min(255, Math.max(o.g, 0)),
    b: Math.min(255, Math.max(o.b, 0)),
    a: u
  };
}
var sI = "[-\\+]?\\d+%?", cI = "[-\\+]?\\d*\\.\\d+%?", ku = "(?:".concat(cI, ")|(?:").concat(sI, ")"), dS = "[\\s|\\(]+(".concat(ku, ")[,|\\s]+(").concat(ku, ")[,|\\s]+(").concat(ku, ")\\s*\\)?"), vS = "[\\s|\\(]+(".concat(ku, ")[,|\\s]+(").concat(ku, ")[,|\\s]+(").concat(ku, ")[,|\\s]+(").concat(ku, ")\\s*\\)?"), qi = {
  CSS_UNIT: new RegExp(ku),
  rgb: new RegExp("rgb" + dS),
  rgba: new RegExp("rgba" + vS),
  hsl: new RegExp("hsl" + dS),
  hsla: new RegExp("hsla" + vS),
  hsv: new RegExp("hsv" + dS),
  hsva: new RegExp("hsva" + vS),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function fI(r) {
  if (r = r.trim().toLowerCase(), r.length === 0)
    return !1;
  var o = !1;
  if (KS[r])
    r = KS[r], o = !0;
  else if (r === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var u = qi.rgb.exec(r);
  return u ? { r: u[1], g: u[2], b: u[3] } : (u = qi.rgba.exec(r), u ? { r: u[1], g: u[2], b: u[3], a: u[4] } : (u = qi.hsl.exec(r), u ? { h: u[1], s: u[2], l: u[3] } : (u = qi.hsla.exec(r), u ? { h: u[1], s: u[2], l: u[3], a: u[4] } : (u = qi.hsv.exec(r), u ? { h: u[1], s: u[2], v: u[3] } : (u = qi.hsva.exec(r), u ? { h: u[1], s: u[2], v: u[3], a: u[4] } : (u = qi.hex8.exec(r), u ? {
    r: Ka(u[1]),
    g: Ka(u[2]),
    b: Ka(u[3]),
    a: sT(u[4]),
    format: o ? "name" : "hex8"
  } : (u = qi.hex6.exec(r), u ? {
    r: Ka(u[1]),
    g: Ka(u[2]),
    b: Ka(u[3]),
    format: o ? "name" : "hex"
  } : (u = qi.hex4.exec(r), u ? {
    r: Ka(u[1] + u[1]),
    g: Ka(u[2] + u[2]),
    b: Ka(u[3] + u[3]),
    a: sT(u[4] + u[4]),
    format: o ? "name" : "hex8"
  } : (u = qi.hex3.exec(r), u ? {
    r: Ka(u[1] + u[1]),
    g: Ka(u[2] + u[2]),
    b: Ka(u[3] + u[3]),
    format: o ? "name" : "hex"
  } : !1)))))))));
}
function kl(r) {
  return !!qi.CSS_UNIT.exec(String(r));
}
var Ga = (
  /** @class */
  function() {
    function r(o, u) {
      o === void 0 && (o = ""), u === void 0 && (u = {});
      var c;
      if (o instanceof r)
        return o;
      typeof o == "number" && (o = uI(o)), this.originalInput = o;
      var d = Ef(o);
      this.originalInput = o, this.r = d.r, this.g = d.g, this.b = d.b, this.a = d.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (c = u.format) !== null && c !== void 0 ? c : d.format, this.gradientType = u.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = d.ok;
    }
    return r.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, r.prototype.isLight = function() {
      return !this.isDark();
    }, r.prototype.getBrightness = function() {
      var o = this.toRgb();
      return (o.r * 299 + o.g * 587 + o.b * 114) / 1e3;
    }, r.prototype.getLuminance = function() {
      var o = this.toRgb(), u, c, d, m = o.r / 255, h = o.g / 255, C = o.b / 255;
      return m <= 0.03928 ? u = m / 12.92 : u = Math.pow((m + 0.055) / 1.055, 2.4), h <= 0.03928 ? c = h / 12.92 : c = Math.pow((h + 0.055) / 1.055, 2.4), C <= 0.03928 ? d = C / 12.92 : d = Math.pow((C + 0.055) / 1.055, 2.4), 0.2126 * u + 0.7152 * c + 0.0722 * d;
    }, r.prototype.getAlpha = function() {
      return this.a;
    }, r.prototype.setAlpha = function(o) {
      return this.a = i_(o), this.roundA = Math.round(100 * this.a) / 100, this;
    }, r.prototype.isMonochrome = function() {
      var o = this.toHsl().s;
      return o === 0;
    }, r.prototype.toHsv = function() {
      var o = VS(this.r, this.g, this.b);
      return { h: o.h * 360, s: o.s, v: o.v, a: this.a };
    }, r.prototype.toHsvString = function() {
      var o = VS(this.r, this.g, this.b), u = Math.round(o.h * 360), c = Math.round(o.s * 100), d = Math.round(o.v * 100);
      return this.a === 1 ? "hsv(".concat(u, ", ").concat(c, "%, ").concat(d, "%)") : "hsva(".concat(u, ", ").concat(c, "%, ").concat(d, "%, ").concat(this.roundA, ")");
    }, r.prototype.toHsl = function() {
      var o = uT(this.r, this.g, this.b);
      return { h: o.h * 360, s: o.s, l: o.l, a: this.a };
    }, r.prototype.toHslString = function() {
      var o = uT(this.r, this.g, this.b), u = Math.round(o.h * 360), c = Math.round(o.s * 100), d = Math.round(o.l * 100);
      return this.a === 1 ? "hsl(".concat(u, ", ").concat(c, "%, ").concat(d, "%)") : "hsla(".concat(u, ", ").concat(c, "%, ").concat(d, "%, ").concat(this.roundA, ")");
    }, r.prototype.toHex = function(o) {
      return o === void 0 && (o = !1), WS(this.r, this.g, this.b, o);
    }, r.prototype.toHexString = function(o) {
      return o === void 0 && (o = !1), "#" + this.toHex(o);
    }, r.prototype.toHex8 = function(o) {
      return o === void 0 && (o = !1), oI(this.r, this.g, this.b, this.a, o);
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
      var o = Math.round(this.r), u = Math.round(this.g), c = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(o, ", ").concat(u, ", ").concat(c, ")") : "rgba(".concat(o, ", ").concat(u, ", ").concat(c, ", ").concat(this.roundA, ")");
    }, r.prototype.toPercentageRgb = function() {
      var o = function(u) {
        return "".concat(Math.round(Gr(u, 255) * 100), "%");
      };
      return {
        r: o(this.r),
        g: o(this.g),
        b: o(this.b),
        a: this.a
      };
    }, r.prototype.toPercentageRgbString = function() {
      var o = function(u) {
        return Math.round(Gr(u, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(o(this.r), "%, ").concat(o(this.g), "%, ").concat(o(this.b), "%)") : "rgba(".concat(o(this.r), "%, ").concat(o(this.g), "%, ").concat(o(this.b), "%, ").concat(this.roundA, ")");
    }, r.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var o = "#" + WS(this.r, this.g, this.b, !1), u = 0, c = Object.entries(KS); u < c.length; u++) {
        var d = c[u], m = d[0], h = d[1];
        if (o === h)
          return m;
      }
      return !1;
    }, r.prototype.toString = function(o) {
      var u = !!o;
      o = o != null ? o : this.format;
      var c = !1, d = this.a < 1 && this.a >= 0, m = !u && d && (o.startsWith("hex") || o === "name");
      return m ? o === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (o === "rgb" && (c = this.toRgbString()), o === "prgb" && (c = this.toPercentageRgbString()), (o === "hex" || o === "hex6") && (c = this.toHexString()), o === "hex3" && (c = this.toHexString(!0)), o === "hex4" && (c = this.toHex8String(!0)), o === "hex8" && (c = this.toHex8String()), o === "name" && (c = this.toName()), o === "hsl" && (c = this.toHslString()), o === "hsv" && (c = this.toHsvString()), c || this.toHexString());
    }, r.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, r.prototype.clone = function() {
      return new r(this.toString());
    }, r.prototype.lighten = function(o) {
      o === void 0 && (o = 10);
      var u = this.toHsl();
      return u.l += o / 100, u.l = Jm(u.l), new r(u);
    }, r.prototype.brighten = function(o) {
      o === void 0 && (o = 10);
      var u = this.toRgb();
      return u.r = Math.max(0, Math.min(255, u.r - Math.round(255 * -(o / 100)))), u.g = Math.max(0, Math.min(255, u.g - Math.round(255 * -(o / 100)))), u.b = Math.max(0, Math.min(255, u.b - Math.round(255 * -(o / 100)))), new r(u);
    }, r.prototype.darken = function(o) {
      o === void 0 && (o = 10);
      var u = this.toHsl();
      return u.l -= o / 100, u.l = Jm(u.l), new r(u);
    }, r.prototype.tint = function(o) {
      return o === void 0 && (o = 10), this.mix("white", o);
    }, r.prototype.shade = function(o) {
      return o === void 0 && (o = 10), this.mix("black", o);
    }, r.prototype.desaturate = function(o) {
      o === void 0 && (o = 10);
      var u = this.toHsl();
      return u.s -= o / 100, u.s = Jm(u.s), new r(u);
    }, r.prototype.saturate = function(o) {
      o === void 0 && (o = 10);
      var u = this.toHsl();
      return u.s += o / 100, u.s = Jm(u.s), new r(u);
    }, r.prototype.greyscale = function() {
      return this.desaturate(100);
    }, r.prototype.spin = function(o) {
      var u = this.toHsl(), c = (u.h + o) % 360;
      return u.h = c < 0 ? 360 + c : c, new r(u);
    }, r.prototype.mix = function(o, u) {
      u === void 0 && (u = 50);
      var c = this.toRgb(), d = new r(o).toRgb(), m = u / 100, h = {
        r: (d.r - c.r) * m + c.r,
        g: (d.g - c.g) * m + c.g,
        b: (d.b - c.b) * m + c.b,
        a: (d.a - c.a) * m + c.a
      };
      return new r(h);
    }, r.prototype.analogous = function(o, u) {
      o === void 0 && (o = 6), u === void 0 && (u = 30);
      var c = this.toHsl(), d = 360 / u, m = [this];
      for (c.h = (c.h - (d * o >> 1) + 720) % 360; --o; )
        c.h = (c.h + d) % 360, m.push(new r(c));
      return m;
    }, r.prototype.complement = function() {
      var o = this.toHsl();
      return o.h = (o.h + 180) % 360, new r(o);
    }, r.prototype.monochromatic = function(o) {
      o === void 0 && (o = 6);
      for (var u = this.toHsv(), c = u.h, d = u.s, m = u.v, h = [], C = 1 / o; o--; )
        h.push(new r({ h: c, s: d, v: m })), m = (m + C) % 1;
      return h;
    }, r.prototype.splitcomplement = function() {
      var o = this.toHsl(), u = o.h;
      return [
        this,
        new r({ h: (u + 72) % 360, s: o.s, l: o.l }),
        new r({ h: (u + 216) % 360, s: o.s, l: o.l })
      ];
    }, r.prototype.onBackground = function(o) {
      var u = this.toRgb(), c = new r(o).toRgb(), d = u.a + c.a * (1 - u.a);
      return new r({
        r: (u.r * u.a + c.r * c.a * (1 - u.a)) / d,
        g: (u.g * u.a + c.g * c.a * (1 - u.a)) / d,
        b: (u.b * u.a + c.b * c.a * (1 - u.a)) / d,
        a: d
      });
    }, r.prototype.triad = function() {
      return this.polyad(3);
    }, r.prototype.tetrad = function() {
      return this.polyad(4);
    }, r.prototype.polyad = function(o) {
      for (var u = this.toHsl(), c = u.h, d = [this], m = 360 / o, h = 1; h < o; h++)
        d.push(new r({ h: (c + h * m) % 360, s: u.s, l: u.l }));
      return d;
    }, r.prototype.equals = function(o) {
      return this.toRgbString() === new r(o).toRgbString();
    }, r;
  }()
), tg = 2, cT = 0.16, dI = 0.05, vI = 0.05, pI = 0.15, o_ = 5, l_ = 4, hI = [{
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
function fT(r) {
  var o = r.r, u = r.g, c = r.b, d = VS(o, u, c);
  return {
    h: d.h * 360,
    s: d.s,
    v: d.v
  };
}
function ng(r) {
  var o = r.r, u = r.g, c = r.b;
  return "#".concat(WS(o, u, c, !1));
}
function mI(r, o, u) {
  var c = u / 100, d = {
    r: (o.r - r.r) * c + r.r,
    g: (o.g - r.g) * c + r.g,
    b: (o.b - r.b) * c + r.b
  };
  return d;
}
function dT(r, o, u) {
  var c;
  return Math.round(r.h) >= 60 && Math.round(r.h) <= 240 ? c = u ? Math.round(r.h) - tg * o : Math.round(r.h) + tg * o : c = u ? Math.round(r.h) + tg * o : Math.round(r.h) - tg * o, c < 0 ? c += 360 : c >= 360 && (c -= 360), c;
}
function vT(r, o, u) {
  if (r.h === 0 && r.s === 0)
    return r.s;
  var c;
  return u ? c = r.s - cT * o : o === l_ ? c = r.s + cT : c = r.s + dI * o, c > 1 && (c = 1), u && o === o_ && c > 0.1 && (c = 0.1), c < 0.06 && (c = 0.06), Number(c.toFixed(2));
}
function pT(r, o, u) {
  var c;
  return u ? c = r.v + vI * o : c = r.v - pI * o, c > 1 && (c = 1), Number(c.toFixed(2));
}
function Zs(r) {
  for (var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = [], c = Ef(r), d = o_; d > 0; d -= 1) {
    var m = fT(c), h = ng(Ef({
      h: dT(m, d, !0),
      s: vT(m, d, !0),
      v: pT(m, d, !0)
    }));
    u.push(h);
  }
  u.push(ng(c));
  for (var C = 1; C <= l_; C += 1) {
    var x = fT(c), E = ng(Ef({
      h: dT(x, C),
      s: vT(x, C),
      v: pT(x, C)
    }));
    u.push(E);
  }
  return o.theme === "dark" ? hI.map(function(k) {
    var _ = k.index, N = k.opacity, D = ng(mI(Ef(o.backgroundColor || "#141414"), Ef(u[_]), N * 100));
    return D;
  }) : u;
}
var pS = {
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
}, sg = {}, hS = {};
Object.keys(pS).forEach(function(r) {
  sg[r] = Zs(pS[r]), sg[r].primary = sg[r][5], hS[r] = Zs(pS[r], {
    theme: "dark",
    backgroundColor: "#141414"
  }), hS[r].primary = hS[r][5];
});
var gI = sg.blue, O1 = /* @__PURE__ */ xg({});
function yI(r) {
  return r.replace(/-(.)/g, function(o, u) {
    return u.toUpperCase();
  });
}
function bI(r, o) {
  ha(r, "[@ant-design/icons] ".concat(o));
}
function hT(r) {
  return Vn(r) === "object" && typeof r.name == "string" && typeof r.theme == "string" && (Vn(r.icon) === "object" || typeof r.icon == "function");
}
function mT() {
  var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(r).reduce(function(o, u) {
    var c = r[u];
    switch (u) {
      case "class":
        o.className = c, delete o.class;
        break;
      default:
        delete o[u], o[yI(u)] = c;
    }
    return o;
  }, {});
}
function GS(r, o, u) {
  return u ? /* @__PURE__ */ Oa.createElement(r.tag, Te(Te({
    key: o
  }, mT(r.attrs)), u), (r.children || []).map(function(c, d) {
    return GS(c, "".concat(o, "-").concat(r.tag, "-").concat(d));
  })) : /* @__PURE__ */ Oa.createElement(r.tag, Te({
    key: o
  }, mT(r.attrs)), (r.children || []).map(function(c, d) {
    return GS(c, "".concat(o, "-").concat(r.tag, "-").concat(d));
  }));
}
function u_(r) {
  return Zs(r)[0];
}
function s_(r) {
  return r ? Array.isArray(r) ? r : [r] : [];
}
var SI = `
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
`, CI = function(o) {
  var u = Ou(O1), c = u.csp, d = u.prefixCls, m = SI;
  d && (m = m.replace(/anticon/g, d)), Wo(function() {
    var h = o.current, C = bg(h);
    Du(m, "@ant-design-icons", {
      prepend: !0,
      csp: c,
      attachTo: C
    });
  }, []);
}, EI = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Fv = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function wI(r) {
  var o = r.primaryColor, u = r.secondaryColor;
  Fv.primaryColor = o, Fv.secondaryColor = u || u_(o), Fv.calculated = !!u;
}
function xI() {
  return Te({}, Fv);
}
var jg = function(o) {
  var u = o.icon, c = o.className, d = o.onClick, m = o.style, h = o.primaryColor, C = o.secondaryColor, x = Fn(o, EI), E = T.useRef(), k = Fv;
  if (h && (k = {
    primaryColor: h,
    secondaryColor: C || u_(h)
  }), CI(E), bI(hT(u), "icon should be icon definiton, but got ".concat(u)), !hT(u))
    return null;
  var _ = u;
  return _ && typeof _.icon == "function" && (_ = Te(Te({}, _), {}, {
    icon: _.icon(k.primaryColor, k.secondaryColor)
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
jg.displayName = "IconReact";
jg.getTwoToneColors = xI;
jg.setTwoToneColors = wI;
const N1 = jg;
function c_(r) {
  var o = s_(r), u = xe(o, 2), c = u[0], d = u[1];
  return N1.setTwoToneColors({
    primaryColor: c,
    secondaryColor: d
  });
}
function TI() {
  var r = N1.getTwoToneColors();
  return r.calculated ? [r.primaryColor, r.secondaryColor] : r.primaryColor;
}
var RI = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
c_(gI.primary);
var Hg = /* @__PURE__ */ T.forwardRef(function(r, o) {
  var u, c = r.className, d = r.icon, m = r.spin, h = r.rotate, C = r.tabIndex, x = r.onClick, E = r.twoToneColor, k = Fn(r, RI), _ = T.useContext(O1), N = _.prefixCls, D = N === void 0 ? "anticon" : N, P = _.rootClassName, F = wn(P, D, (u = {}, tt(u, "".concat(D, "-").concat(d.name), !!d.name), tt(u, "".concat(D, "-spin"), !!m || d.name === "loading"), u), c), L = C;
  L === void 0 && x && (L = -1);
  var W = h ? {
    msTransform: "rotate(".concat(h, "deg)"),
    transform: "rotate(".concat(h, "deg)")
  } : void 0, $ = s_(E), z = xe($, 2), I = z[0], U = z[1];
  return /* @__PURE__ */ T.createElement("span", an({
    role: "img",
    "aria-label": d.name
  }, k, {
    ref: o,
    tabIndex: L,
    onClick: x,
    className: F
  }), /* @__PURE__ */ T.createElement(N1, {
    icon: d,
    primaryColor: I,
    secondaryColor: U,
    style: W
  }));
});
Hg.displayName = "AntdIcon";
Hg.getTwoToneColor = TI;
Hg.setTwoToneColor = c_;
const D1 = Hg;
var f_ = function(o, u) {
  return /* @__PURE__ */ T.createElement(D1, an({}, o, {
    ref: u,
    icon: eI
  }));
};
process.env.NODE_ENV !== "production" && (f_.displayName = "BarsOutlined");
const _I = /* @__PURE__ */ T.forwardRef(f_);
var kI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
const MI = kI;
var d_ = function(o, u) {
  return /* @__PURE__ */ T.createElement(D1, an({}, o, {
    ref: u,
    icon: MI
  }));
};
process.env.NODE_ENV !== "production" && (d_.displayName = "LeftOutlined");
const gT = /* @__PURE__ */ T.forwardRef(d_);
var OI = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
const NI = OI;
var v_ = function(o, u) {
  return /* @__PURE__ */ T.createElement(D1, an({}, o, {
    ref: u,
    icon: NI
  }));
};
process.env.NODE_ENV !== "production" && (v_.displayName = "RightOutlined");
const yT = /* @__PURE__ */ T.forwardRef(v_), DI = (r) => !isNaN(parseFloat(r)) && isFinite(r);
function Sg(r) {
  for (var o = 0, u, c = 0, d = r.length; d >= 4; ++c, d -= 4)
    u = r.charCodeAt(c) & 255 | (r.charCodeAt(++c) & 255) << 8 | (r.charCodeAt(++c) & 255) << 16 | (r.charCodeAt(++c) & 255) << 24, u = /* Math.imul(k, m): */
    (u & 65535) * 1540483477 + ((u >>> 16) * 59797 << 16), u ^= /* k >>> r: */
    u >>> 24, o = /* Math.imul(k, m): */
    (u & 65535) * 1540483477 + ((u >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
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
var AI = "%";
function qS(r) {
  return r.join(AI);
}
var LI = /* @__PURE__ */ function() {
  function r(o) {
    Ji(this, r), tt(this, "instanceId", void 0), tt(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = o;
  }
  return eo(r, [{
    key: "get",
    value: function(u) {
      return this.opGet(qS(u));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(u) {
      return this.cache.get(u) || null;
    }
  }, {
    key: "update",
    value: function(u, c) {
      return this.opUpdate(qS(u), c);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(u, c) {
      var d = this.cache.get(u), m = c(d);
      m === null ? this.cache.delete(u) : this.cache.set(u, m);
    }
  }]), r;
}(), Mf = "data-token-hash", Qi = "data-css-hash", PI = "data-cache-path", Mu = "__cssinjs_instance__";
function II() {
  var r = Math.random().toString(12).slice(2);
  if (typeof document != "undefined" && document.head && document.body) {
    var o = document.body.querySelectorAll("style[".concat(Qi, "]")) || [], u = document.head.firstChild;
    Array.from(o).forEach(function(d) {
      d[Mu] = d[Mu] || r, d[Mu] === r && document.head.insertBefore(d, u);
    });
    var c = {};
    Array.from(document.querySelectorAll("style[".concat(Qi, "]"))).forEach(function(d) {
      var m = d.getAttribute(Qi);
      if (c[m]) {
        if (d[Mu] === r) {
          var h;
          (h = d.parentNode) === null || h === void 0 || h.removeChild(d);
        }
      } else
        c[m] = !0;
    });
  }
  return new LI(r);
}
var zI = /* @__PURE__ */ T.createContext({
  hashPriority: "low",
  cache: II(),
  defaultCache: !0
});
const Fg = zI;
function $I(r, o) {
  if (r.length !== o.length)
    return !1;
  for (var u = 0; u < r.length; u++)
    if (r[u] !== o[u])
      return !1;
  return !0;
}
var A1 = /* @__PURE__ */ function() {
  function r() {
    Ji(this, r), tt(this, "cache", void 0), tt(this, "keys", void 0), tt(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return eo(r, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(u) {
      var c, d, m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = {
        map: this.cache
      };
      return u.forEach(function(C) {
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
    value: function(u) {
      var c;
      return (c = this.internalGet(u, !0)) === null || c === void 0 ? void 0 : c[0];
    }
  }, {
    key: "has",
    value: function(u) {
      return !!this.internalGet(u);
    }
  }, {
    key: "set",
    value: function(u, c) {
      var d = this;
      if (!this.has(u)) {
        if (this.size() + 1 > r.MAX_CACHE_SIZE + r.MAX_CACHE_OFFSET) {
          var m = this.keys.reduce(function(E, k) {
            var _ = xe(E, 2), N = _[1];
            return d.internalGet(k)[1] < N ? [k, d.internalGet(k)[1]] : E;
          }, [this.keys[0], this.cacheCallTimes]), h = xe(m, 1), C = h[0];
          this.delete(C);
        }
        this.keys.push(u);
      }
      var x = this.cache;
      u.forEach(function(E, k) {
        if (k === u.length - 1)
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
    value: function(u, c) {
      var d = u.get(c[0]);
      if (c.length === 1) {
        var m;
        return d.map ? u.set(c[0], {
          map: d.map
        }) : u.delete(c[0]), (m = d.value) === null || m === void 0 ? void 0 : m[0];
      }
      var h = this.deleteByPath(d.map, c.slice(1));
      return (!d.map || d.map.size === 0) && !d.value && u.delete(c[0]), h;
    }
  }, {
    key: "delete",
    value: function(u) {
      if (this.has(u))
        return this.keys = this.keys.filter(function(c) {
          return !$I(c, u);
        }), this.deleteByPath(this.cache, u);
    }
  }]), r;
}();
tt(A1, "MAX_CACHE_SIZE", 20);
tt(A1, "MAX_CACHE_OFFSET", 5);
var bT = 0, p_ = /* @__PURE__ */ function() {
  function r(o) {
    Ji(this, r), tt(this, "derivatives", void 0), tt(this, "id", void 0), this.derivatives = Array.isArray(o) ? o : [o], this.id = bT, o.length === 0 && _f(o.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), bT += 1;
  }
  return eo(r, [{
    key: "getDerivativeToken",
    value: function(u) {
      return this.derivatives.reduce(function(c, d) {
        return d(u, c);
      }, void 0);
    }
  }]), r;
}(), mS = new A1();
function YS(r) {
  var o = Array.isArray(r) ? r : [r];
  return mS.has(o) || mS.set(o, new p_(o)), mS.get(o);
}
var UI = /* @__PURE__ */ new WeakMap(), gS = {};
function jI(r, o) {
  for (var u = UI, c = 0; c < o.length; c += 1) {
    var d = o[c];
    u.has(d) || u.set(d, /* @__PURE__ */ new WeakMap()), u = u.get(d);
  }
  return u.has(gS) || u.set(gS, r()), u.get(gS);
}
var ST = /* @__PURE__ */ new WeakMap();
function Bv(r) {
  var o = ST.get(r) || "";
  return o || (Object.keys(r).forEach(function(u) {
    var c = r[u];
    o += u, c instanceof p_ ? o += c.id : c && Vn(c) === "object" ? o += Bv(c) : o += c;
  }), ST.set(r, o)), o;
}
function CT(r, o) {
  return Sg("".concat(o, "_").concat(Bv(r)));
}
var Vv = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), h_ = "_bAmBoO_";
function HI(r, o, u) {
  if (pa()) {
    var c, d;
    Du(r, Vv);
    var m = document.createElement("div");
    m.style.position = "fixed", m.style.left = "0", m.style.top = "0", o == null || o(m), document.body.appendChild(m), process.env.NODE_ENV !== "production" && (m.innerHTML = "Test", m.style.zIndex = "9999999");
    var h = u ? u(m) : (c = getComputedStyle(m).content) === null || c === void 0 ? void 0 : c.includes(h_);
    return (d = m.parentNode) === null || d === void 0 || d.removeChild(m), qv(Vv), h;
  }
  return !1;
}
var yS = void 0;
function FI() {
  return yS === void 0 && (yS = HI("@layer ".concat(Vv, " { .").concat(Vv, ' { content: "').concat(h_, '"!important; } }'), function(r) {
    r.className = Vv;
  })), yS;
}
var QS = pa();
function Qv(r) {
  return typeof r == "number" ? "".concat(r, "px") : r;
}
function Cg(r, o, u) {
  var c, d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (m)
    return r;
  var h = Te(Te({}, d), {}, (c = {}, tt(c, Mf, o), tt(c, Qi, u), c)), C = Object.keys(h).map(function(x) {
    var E = h[x];
    return E ? "".concat(x, '="').concat(E, '"') : null;
  }).filter(function(x) {
    return x;
  }).join(" ");
  return "<style ".concat(C, ">").concat(r, "</style>");
}
var m_ = function(o) {
  var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(u ? "".concat(u, "-") : "").concat(o).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, BI = function(o, u, c) {
  return Object.keys(o).length ? ".".concat(u).concat(c != null && c.scope ? ".".concat(c.scope) : "", "{").concat(Object.entries(o).map(function(d) {
    var m = xe(d, 2), h = m[0], C = m[1];
    return "".concat(h, ":").concat(C, ";");
  }).join(""), "}") : "";
}, g_ = function(o, u, c) {
  var d = {}, m = {};
  return Object.entries(o).forEach(function(h) {
    var C, x, E = xe(h, 2), k = E[0], _ = E[1];
    if (c != null && (C = c.preserve) !== null && C !== void 0 && C[k])
      m[k] = _;
    else if ((typeof _ == "string" || typeof _ == "number") && !(c != null && (x = c.ignore) !== null && x !== void 0 && x[k])) {
      var N, D = m_(k, c == null ? void 0 : c.prefix);
      d[D] = typeof _ == "number" && !(c != null && (N = c.unitless) !== null && N !== void 0 && N[k]) ? "".concat(_, "px") : String(_), m[k] = "var(".concat(D, ")");
    }
  }), [m, BI(d, u, {
    scope: c == null ? void 0 : c.scope
  })];
}, VI = Te({}, T), ET = VI.useInsertionEffect, WI = function(o, u, c) {
  T.useMemo(o, c), ia(function() {
    return u(!0);
  }, c);
}, KI = ET ? function(r, o, u) {
  return ET(function() {
    return r(), o();
  }, u);
} : WI;
const GI = KI;
var qI = Te({}, T), YI = qI.useInsertionEffect, QI = function(o) {
  var u = [], c = !1;
  function d(m) {
    if (c) {
      process.env.NODE_ENV !== "production" && _f(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    u.push(m);
  }
  return T.useEffect(function() {
    return c = !1, function() {
      c = !0, u.length && u.forEach(function(m) {
        return m();
      });
    };
  }, o), d;
}, XI = function() {
  return function(o) {
    o();
  };
}, ZI = typeof YI != "undefined" ? QI : XI;
const JI = ZI;
function ez() {
  return !1;
}
var XS = !1;
function tz() {
  return XS;
}
const nz = process.env.NODE_ENV === "production" ? ez : tz;
if (process.env.NODE_ENV !== "production" && typeof module != "undefined" && module && module.hot && typeof window != "undefined") {
  var bS = window;
  if (typeof bS.webpackHotUpdate == "function") {
    var rz = bS.webpackHotUpdate;
    bS.webpackHotUpdate = function() {
      return XS = !0, setTimeout(function() {
        XS = !1;
      }, 0), rz.apply(void 0, arguments);
    };
  }
}
function L1(r, o, u, c, d) {
  var m = T.useContext(Fg), h = m.cache, C = [r].concat(ar(o)), x = qS(C), E = JI([x]), k = nz(), _ = function(F) {
    h.opUpdate(x, function(L) {
      var W = L || [void 0, void 0], $ = xe(W, 2), z = $[0], I = z === void 0 ? 0 : z, U = $[1], Y = U;
      process.env.NODE_ENV !== "production" && U && k && (c == null || c(Y, k), Y = null);
      var q = Y || u(), ne = [I, q];
      return F ? F(ne) : ne;
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
  var D = N[1];
  return GI(function() {
    d == null || d(D);
  }, function(P) {
    return _(function(F) {
      var L = xe(F, 2), W = L[0], $ = L[1];
      return P && W === 0 && (d == null || d(D)), [W + 1, $];
    }), function() {
      h.opUpdate(x, function(F) {
        var L = F || [], W = xe(L, 2), $ = W[0], z = $ === void 0 ? 0 : $, I = W[1], U = z - 1;
        return U === 0 ? (E(function() {
          (P || !h.opGet(x)) && (c == null || c(I, !1));
        }), null) : [z - 1, I];
      });
    };
  }, [x]), D;
}
var az = {}, iz = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", qs = /* @__PURE__ */ new Map();
function oz(r) {
  qs.set(r, (qs.get(r) || 0) + 1);
}
function lz(r, o) {
  if (typeof document != "undefined") {
    var u = document.querySelectorAll("style[".concat(Mf, '="').concat(r, '"]'));
    u.forEach(function(c) {
      if (c[Mu] === o) {
        var d;
        (d = c.parentNode) === null || d === void 0 || d.removeChild(c);
      }
    });
  }
}
var uz = 0;
function sz(r, o) {
  qs.set(r, (qs.get(r) || 0) - 1);
  var u = Array.from(qs.keys()), c = u.filter(function(d) {
    var m = qs.get(d) || 0;
    return m <= 0;
  });
  u.length - c.length > uz && c.forEach(function(d) {
    lz(d, o), qs.delete(d);
  });
}
var cz = function(o, u, c, d) {
  var m = c.getDerivativeToken(o), h = Te(Te({}, m), u);
  return d && (h = d(h)), h;
}, y_ = "token";
function fz(r, o) {
  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = Ou(Fg), d = c.cache.instanceId, m = c.container, h = u.salt, C = h === void 0 ? "" : h, x = u.override, E = x === void 0 ? az : x, k = u.formatToken, _ = u.getComputedToken, N = u.cssVar, D = jI(function() {
    return Object.assign.apply(Object, [{}].concat(ar(o)));
  }, o), P = Bv(D), F = Bv(E), L = N ? Bv(N) : "", W = L1(y_, [C, r.id, P, F, L], function() {
    var $, z = _ ? _(D, E, r) : cz(D, E, r, k), I = Te({}, z), U = "";
    if (N) {
      var Y = g_(z, N.key, {
        prefix: N.prefix,
        ignore: N.ignore,
        unitless: N.unitless,
        preserve: N.preserve
      }), q = xe(Y, 2);
      z = q[0], U = q[1];
    }
    var ne = CT(z, C);
    z._tokenKey = ne, I._tokenKey = CT(I, C);
    var oe = ($ = N == null ? void 0 : N.key) !== null && $ !== void 0 ? $ : ne;
    z._themeKey = oe, oz(oe);
    var re = "".concat(iz, "-").concat(Sg(ne));
    return z._hashId = re, [z, re, I, U, (N == null ? void 0 : N.key) || ""];
  }, function($) {
    sz($[0]._themeKey, d);
  }, function($) {
    var z = xe($, 4), I = z[0], U = z[3];
    if (N && U) {
      var Y = Du(U, Sg("css-variables-".concat(I._themeKey)), {
        mark: Qi,
        prepend: "queue",
        attachTo: m,
        priority: -999
      });
      Y[Mu] = d, Y.setAttribute(Mf, I._themeKey);
    }
  });
  return W;
}
var dz = function(o, u, c) {
  var d = xe(o, 5), m = d[2], h = d[3], C = d[4], x = c || {}, E = x.plain;
  if (!h)
    return null;
  var k = m._tokenKey, _ = -999, N = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(_)
  }, D = Cg(h, C, k, N, E);
  return [_, k, D];
}, vz = {
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
}, b_ = "comm", S_ = "rule", C_ = "decl", pz = "@import", hz = "@keyframes", mz = "@layer", E_ = Math.abs, P1 = String.fromCharCode;
function w_(r) {
  return r.trim();
}
function cg(r, o, u) {
  return r.replace(o, u);
}
function gz(r, o, u) {
  return r.indexOf(o, u);
}
function Xv(r, o) {
  return r.charCodeAt(o) | 0;
}
function Zv(r, o, u) {
  return r.slice(o, u);
}
function Dl(r) {
  return r.length;
}
function yz(r) {
  return r.length;
}
function rg(r, o) {
  return o.push(r), r;
}
var Bg = 1, Of = 1, x_ = 0, Ci = 0, mr = 0, Lf = "";
function I1(r, o, u, c, d, m, h, C) {
  return { value: r, root: o, parent: u, type: c, props: d, children: m, line: Bg, column: Of, length: h, return: "", siblings: C };
}
function bz() {
  return mr;
}
function Sz() {
  return mr = Ci > 0 ? Xv(Lf, --Ci) : 0, Of--, mr === 10 && (Of = 1, Bg--), mr;
}
function Xi() {
  return mr = Ci < x_ ? Xv(Lf, Ci++) : 0, Of++, mr === 10 && (Of = 1, Bg++), mr;
}
function Qs() {
  return Xv(Lf, Ci);
}
function fg() {
  return Ci;
}
function Vg(r, o) {
  return Zv(Lf, r, o);
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
function Cz(r) {
  return Bg = Of = 1, x_ = Dl(Lf = r), Ci = 0, [];
}
function Ez(r) {
  return Lf = "", r;
}
function SS(r) {
  return w_(Vg(Ci - 1, JS(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function wz(r) {
  for (; (mr = Qs()) && mr < 33; )
    Xi();
  return ZS(r) > 2 || ZS(mr) > 3 ? "" : " ";
}
function xz(r, o) {
  for (; --o && Xi() && !(mr < 48 || mr > 102 || mr > 57 && mr < 65 || mr > 70 && mr < 97); )
    ;
  return Vg(r, fg() + (o < 6 && Qs() == 32 && Xi() == 32));
}
function JS(r) {
  for (; Xi(); )
    switch (mr) {
      case r:
        return Ci;
      case 34:
      case 39:
        r !== 34 && r !== 39 && JS(mr);
        break;
      case 40:
        r === 41 && JS(r);
        break;
      case 92:
        Xi();
        break;
    }
  return Ci;
}
function Tz(r, o) {
  for (; Xi() && r + mr !== 57; )
    if (r + mr === 84 && Qs() === 47)
      break;
  return "/*" + Vg(o, Ci - 1) + "*" + P1(r === 47 ? r : Xi());
}
function Rz(r) {
  for (; !ZS(Qs()); )
    Xi();
  return Vg(r, Ci);
}
function _z(r) {
  return Ez(dg("", null, null, null, [""], r = Cz(r), 0, [0], r));
}
function dg(r, o, u, c, d, m, h, C, x) {
  for (var E = 0, k = 0, _ = h, N = 0, D = 0, P = 0, F = 1, L = 1, W = 1, $ = 0, z = "", I = d, U = m, Y = c, q = z; L; )
    switch (P = $, $ = Xi()) {
      case 40:
        if (P != 108 && Xv(q, _ - 1) == 58) {
          gz(q += cg(SS($), "&", "&\f"), "&\f", E_(E ? C[E - 1] : 0)) != -1 && (W = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        q += SS($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        q += wz(P);
        break;
      case 92:
        q += xz(fg() - 1, 7);
        continue;
      case 47:
        switch (Qs()) {
          case 42:
          case 47:
            rg(kz(Tz(Xi(), fg()), o, u, x), x);
            break;
          default:
            q += "/";
        }
        break;
      case 123 * F:
        C[E++] = Dl(q) * W;
      case 125 * F:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            L = 0;
          case 59 + k:
            W == -1 && (q = cg(q, /\f/g, "")), D > 0 && Dl(q) - _ && rg(D > 32 ? xT(q + ";", c, u, _ - 1, x) : xT(cg(q, " ", "") + ";", c, u, _ - 2, x), x);
            break;
          case 59:
            q += ";";
          default:
            if (rg(Y = wT(q, o, u, E, k, d, C, z, I = [], U = [], _, m), m), $ === 123)
              if (k === 0)
                dg(q, o, Y, Y, I, m, _, C, U);
              else
                switch (N === 99 && Xv(q, 3) === 110 ? 100 : N) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    dg(r, Y, Y, c && rg(wT(r, Y, Y, 0, 0, d, C, z, d, I = [], _, U), U), d, U, _, C, c ? I : U);
                    break;
                  default:
                    dg(q, Y, Y, Y, [""], U, 0, C, U);
                }
        }
        E = k = D = 0, F = W = 1, z = q = "", _ = h;
        break;
      case 58:
        _ = 1 + Dl(q), D = P;
      default:
        if (F < 1) {
          if ($ == 123)
            --F;
          else if ($ == 125 && F++ == 0 && Sz() == 125)
            continue;
        }
        switch (q += P1($), $ * F) {
          case 38:
            W = k > 0 ? 1 : (q += "\f", -1);
            break;
          case 44:
            C[E++] = (Dl(q) - 1) * W, W = 1;
            break;
          case 64:
            Qs() === 45 && (q += SS(Xi())), N = Qs(), k = _ = Dl(z = q += Rz(fg())), $++;
            break;
          case 45:
            P === 45 && Dl(q) == 2 && (F = 0);
        }
    }
  return m;
}
function wT(r, o, u, c, d, m, h, C, x, E, k, _) {
  for (var N = d - 1, D = d === 0 ? m : [""], P = yz(D), F = 0, L = 0, W = 0; F < c; ++F)
    for (var $ = 0, z = Zv(r, N + 1, N = E_(L = h[F])), I = r; $ < P; ++$)
      (I = w_(L > 0 ? D[$] + " " + z : cg(z, /&\f/g, D[$]))) && (x[W++] = I);
  return I1(r, o, u, d === 0 ? S_ : C, x, E, k, _);
}
function kz(r, o, u, c) {
  return I1(r, o, u, b_, P1(bz()), Zv(r, 2, -2), 0, c);
}
function xT(r, o, u, c, d) {
  return I1(r, o, u, C_, Zv(r, 0, c), Zv(r, c + 1, -1), c, d);
}
function e1(r, o) {
  for (var u = "", c = 0; c < r.length; c++)
    u += o(r[c], c, r, o) || "";
  return u;
}
function Mz(r, o, u, c) {
  switch (r.type) {
    case mz:
      if (r.children.length)
        break;
    case pz:
    case C_:
      return r.return = r.return || r.value;
    case b_:
      return "";
    case hz:
      return r.return = r.value + "{" + e1(r.children, c) + "}";
    case S_:
      if (!Dl(r.value = r.props.join(",")))
        return "";
  }
  return Dl(u = e1(r.children, c)) ? r.return = r.value + "{" + u + "}" : "";
}
function T_(r, o) {
  var u = o.path, c = o.parentSelectors;
  ha(!1, "[Ant Design CSS-in-JS] ".concat(u ? "Error in ".concat(u, ": ") : "").concat(r).concat(c.length ? " Selector: ".concat(c.join(" | ")) : ""));
}
var Oz = function(o, u, c) {
  if (o === "content") {
    var d = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, m = ["normal", "none", "initial", "inherit", "unset"];
    (typeof u != "string" || m.indexOf(u) === -1 && !d.test(u) && (u.charAt(0) !== u.charAt(u.length - 1) || u.charAt(0) !== '"' && u.charAt(0) !== "'")) && T_("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(u, "\"'`."), c);
  }
}, Nz = function(o, u, c) {
  o === "animation" && c.hashId && u !== "none" && T_("You seem to be using hashed animation '".concat(u, "', in which case 'animationName' with Keyframe as value is recommended."), c);
}, TT = "data-ant-cssinjs-cache-path", R_ = "_FILE_STYLE__", Xs, __ = !0;
function Dz() {
  if (!Xs && (Xs = {}, pa())) {
    var r = document.createElement("div");
    r.className = TT, r.style.position = "fixed", r.style.visibility = "hidden", r.style.top = "-9999px", document.body.appendChild(r);
    var o = getComputedStyle(r).content || "";
    o = o.replace(/^"/, "").replace(/"$/, ""), o.split(";").forEach(function(d) {
      var m = d.split(":"), h = xe(m, 2), C = h[0], x = h[1];
      Xs[C] = x;
    });
    var u = document.querySelector("style[".concat(TT, "]"));
    if (u) {
      var c;
      __ = !1, (c = u.parentNode) === null || c === void 0 || c.removeChild(u);
    }
    document.body.removeChild(r);
  }
}
function Az(r) {
  return Dz(), !!Xs[r];
}
function Lz(r) {
  var o = Xs[r], u = null;
  if (o && pa())
    if (__)
      u = R_;
    else {
      var c = document.querySelector("style[".concat(Qi, '="').concat(Xs[r], '"]'));
      c ? u = c.innerHTML : delete Xs[r];
    }
  return [u, o];
}
var k_ = "_skip_check_", M_ = "_multi_value_";
function t1(r) {
  var o = e1(_z(r), Mz);
  return o.replace(/\{%%%\:[^;];}/g, ";");
}
function Pz(r) {
  return Vn(r) === "object" && r && (k_ in r || M_ in r);
}
function Iz(r, o, u) {
  if (!o)
    return r;
  var c = ".".concat(o), d = u === "low" ? ":where(".concat(c, ")") : c, m = r.split(",").map(function(h) {
    var C, x = h.trim().split(/\s+/), E = x[0] || "", k = ((C = E.match(/^\w+/)) === null || C === void 0 ? void 0 : C[0]) || "";
    return E = "".concat(k).concat(d).concat(E.slice(k.length)), [E].concat(ar(x.slice(1))).join(" ");
  });
  return m.join(",");
}
var zz = function r(o) {
  var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, d = c.root, m = c.injectHash, h = c.parentSelectors, C = u.hashId, x = u.layer, E = u.path, k = u.hashPriority, _ = u.transformers, N = _ === void 0 ? [] : _, D = u.linters, P = D === void 0 ? [] : D, F = "", L = {};
  function W(Y) {
    var q = Y.getName(C);
    if (!L[q]) {
      var ne = r(Y.style, u, {
        root: !1,
        parentSelectors: h
      }), oe = xe(ne, 1), re = oe[0];
      L[q] = "@keyframes ".concat(Y.getName(C)).concat(re);
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
      F += "".concat(q, `
`);
    else if (q._keyframe)
      W(q);
    else {
      var ne = N.reduce(function(oe, re) {
        var ge;
        return (re == null || (ge = re.visit) === null || ge === void 0 ? void 0 : ge.call(re, oe)) || oe;
      }, q);
      Object.keys(ne).forEach(function(oe) {
        var re = ne[oe];
        if (Vn(re) === "object" && re && (oe !== "animationName" || !re._keyframe) && !Pz(re)) {
          var ge = !1, pe = oe.trim(), te = !1;
          (d || m) && C ? pe.startsWith("@") ? ge = !0 : pe = Iz(oe, C, k) : d && !C && (pe === "&" || pe === "") && (pe = "", te = !0);
          var se = r(re, u, {
            root: te,
            injectHash: ge,
            parentSelectors: [].concat(ar(h), [pe])
          }), de = xe(se, 2), Ce = de[0], ke = de[1];
          L = Te(Te({}, L), ke), F += "".concat(pe).concat(Ce);
        } else {
          let Ie = function(ie, he) {
            process.env.NODE_ENV !== "production" && (Vn(re) !== "object" || !(re != null && re[k_])) && [Oz, Nz].concat(ar(P)).forEach(function(Ke) {
              return Ke(ie, he, {
                path: E,
                hashId: C,
                parentSelectors: h
              });
            });
            var Se = ie.replace(/[A-Z]/g, function(Ke) {
              return "-".concat(Ke.toLowerCase());
            }), ze = he;
            !vz[ie] && typeof ze == "number" && ze !== 0 && (ze = "".concat(ze, "px")), ie === "animationName" && he !== null && he !== void 0 && he._keyframe && (W(he), ze = he.getName(C)), F += "".concat(Se, ":").concat(ze, ";");
          };
          var we, Ae = (we = re == null ? void 0 : re.value) !== null && we !== void 0 ? we : re;
          Vn(re) === "object" && re !== null && re !== void 0 && re[M_] && Array.isArray(Ae) ? Ae.forEach(function(ie) {
            Ie(oe, ie);
          }) : Ie(oe, Ae);
        }
      });
    }
  }), !d)
    F = "{".concat(F, "}");
  else if (x && FI()) {
    var I = x.split(","), U = I[I.length - 1].trim();
    F = "@layer ".concat(U, " {").concat(F, "}"), I.length > 1 && (F = "@layer ".concat(x, "{%%%:%}").concat(F));
  }
  return [F, L];
};
function O_(r, o) {
  return Sg("".concat(r.join("%")).concat(o));
}
function $z() {
  return null;
}
var N_ = "style";
function n1(r, o) {
  var u = r.token, c = r.path, d = r.hashId, m = r.layer, h = r.nonce, C = r.clientOnly, x = r.order, E = x === void 0 ? 0 : x, k = T.useContext(Fg), _ = k.autoClear, N = k.mock, D = k.defaultCache, P = k.hashPriority, F = k.container, L = k.ssrInline, W = k.transformers, $ = k.linters, z = k.cache, I = u._tokenKey, U = [I].concat(ar(c)), Y = QS;
  process.env.NODE_ENV !== "production" && N !== void 0 && (Y = N === "client");
  var q = L1(
    N_,
    U,
    // Create cache if needed
    function() {
      var pe = U.join("|");
      if (Az(pe)) {
        var te = Lz(pe), se = xe(te, 2), de = se[0], Ce = se[1];
        if (de)
          return [de, I, Ce, {}, C, E];
      }
      var ke = o(), we = zz(ke, {
        hashId: d,
        hashPriority: P,
        layer: m,
        path: c.join("-"),
        transformers: W,
        linters: $
      }), Ae = xe(we, 2), Ie = Ae[0], ie = Ae[1], he = t1(Ie), Se = O_(U, he);
      return [he, I, Se, ie, C, E];
    },
    // Remove cache if no need
    function(pe, te) {
      var se = xe(pe, 3), de = se[2];
      (te || _) && QS && qv(de, {
        mark: Qi
      });
    },
    // Effect: Inject style here
    function(pe) {
      var te = xe(pe, 4), se = te[0];
      te[1];
      var de = te[2], Ce = te[3];
      if (Y && se !== R_) {
        var ke = {
          mark: Qi,
          prepend: "queue",
          attachTo: F,
          priority: E
        }, we = typeof h == "function" ? h() : h;
        we && (ke.csp = {
          nonce: we
        });
        var Ae = Du(se, de, ke);
        Ae[Mu] = z.instanceId, Ae.setAttribute(Mf, I), process.env.NODE_ENV !== "production" && Ae.setAttribute(PI, U.join("|")), Object.keys(Ce).forEach(function(Ie) {
          Du(t1(Ce[Ie]), "_effect-".concat(Ie), ke);
        });
      }
    }
  ), ne = xe(q, 3), oe = ne[0], re = ne[1], ge = ne[2];
  return function(pe) {
    var te;
    if (!L || Y || !D)
      te = /* @__PURE__ */ T.createElement($z, null);
    else {
      var se;
      te = /* @__PURE__ */ T.createElement("style", an({}, (se = {}, tt(se, Mf, re), tt(se, Qi, ge), se), {
        dangerouslySetInnerHTML: {
          __html: oe
        }
      }));
    }
    return /* @__PURE__ */ T.createElement(T.Fragment, null, te, pe);
  };
}
var Uz = function(o, u, c) {
  var d = xe(o, 6), m = d[0], h = d[1], C = d[2], x = d[3], E = d[4], k = d[5], _ = c || {}, N = _.plain;
  if (E)
    return null;
  var D = m, P = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(k)
  };
  return D = Cg(m, h, C, P, N), x && Object.keys(x).forEach(function(F) {
    if (!u[F]) {
      u[F] = !0;
      var L = t1(x[F]);
      D += Cg(L, h, "_effect-".concat(F), P, N);
    }
  }), [k, C, D];
}, D_ = "cssVar", jz = function(o, u) {
  var c = o.key, d = o.prefix, m = o.unitless, h = o.ignore, C = o.token, x = o.scope, E = x === void 0 ? "" : x, k = Ou(Fg), _ = k.cache.instanceId, N = k.container, D = C._tokenKey, P = [].concat(ar(o.path), [c, E, D]), F = L1(D_, P, function() {
    var L = u(), W = g_(L, c, {
      prefix: d,
      unitless: m,
      ignore: h,
      scope: E
    }), $ = xe(W, 2), z = $[0], I = $[1], U = O_(P, I);
    return [z, I, U, c];
  }, function(L) {
    var W = xe(L, 3), $ = W[2];
    QS && qv($, {
      mark: Qi
    });
  }, function(L) {
    var W = xe(L, 3), $ = W[1], z = W[2];
    if ($) {
      var I = Du($, z, {
        mark: Qi,
        prepend: "queue",
        attachTo: N,
        priority: -999
      });
      I[Mu] = _, I.setAttribute(Mf, c);
    }
  });
  return F;
}, Hz = function(o, u, c) {
  var d = xe(o, 4), m = d[1], h = d[2], C = d[3], x = c || {}, E = x.plain;
  if (!m)
    return null;
  var k = -999, _ = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(k)
  }, N = Cg(m, C, h, _, E);
  return [k, h, N];
}, zv;
zv = {}, tt(zv, N_, Uz), tt(zv, y_, dz), tt(zv, D_, Hz);
var Ei = /* @__PURE__ */ function() {
  function r(o, u) {
    Ji(this, r), tt(this, "name", void 0), tt(this, "style", void 0), tt(this, "_keyframe", !0), this.name = o, this.style = u;
  }
  return eo(r, [{
    key: "getName",
    value: function() {
      var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return u ? "".concat(u, "-").concat(this.name) : this.name;
    }
  }]), r;
}();
function bf(r) {
  return r.notSplit = !0, r;
}
bf(["borderTop", "borderBottom"]), bf(["borderTop"]), bf(["borderBottom"]), bf(["borderLeft", "borderRight"]), bf(["borderLeft"]), bf(["borderRight"]);
function Fz(r) {
  return nR(r) || tR(r) || g1(r) || rR();
}
function r1(r, o) {
  for (var u = r, c = 0; c < o.length; c += 1) {
    if (u == null)
      return;
    u = u[o[c]];
  }
  return u;
}
function A_(r, o, u, c) {
  if (!o.length)
    return u;
  var d = Fz(o), m = d[0], h = d.slice(1), C;
  return !r && typeof m == "number" ? C = [] : Array.isArray(r) ? C = ar(r) : C = Te({}, r), c && u === void 0 && h.length === 1 ? delete C[m][h[0]] : C[m] = A_(C[m], h, u, c), C;
}
function CS(r, o, u) {
  var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return o.length && c && u === void 0 && !r1(r, o.slice(0, -1)) ? r : A_(r, o, u, c);
}
function Bz(r) {
  return Vn(r) === "object" && r !== null && Object.getPrototypeOf(r) === Object.prototype;
}
function RT(r) {
  return Array.isArray(r) ? [] : {};
}
var Vz = typeof Reflect == "undefined" ? Object.keys : Reflect.ownKeys;
function Wz() {
  for (var r = arguments.length, o = new Array(r), u = 0; u < r; u++)
    o[u] = arguments[u];
  var c = RT(o[0]);
  return o.forEach(function(d) {
    function m(h, C) {
      var x = new Set(C), E = r1(d, h), k = Array.isArray(E);
      if (k || Bz(E)) {
        if (!x.has(E)) {
          x.add(E);
          var _ = r1(c, h);
          k ? c = CS(c, h, []) : (!_ || Vn(_) !== "object") && (c = CS(c, h, RT(E))), Vz(E).forEach(function(N) {
            m([].concat(ar(h), [N]), x);
          });
        }
      } else
        c = CS(c, h, E);
    }
    m([]);
  }), c;
}
function L_() {
}
let Ol = null;
function Kz() {
  Ol = null, iR();
}
let z1 = L_;
process.env.NODE_ENV !== "production" && (z1 = (r, o, u) => {
  ha(r, `[antd: ${o}] ${u}`), process.env.NODE_ENV === "test" && Kz();
});
const P_ = /* @__PURE__ */ T.createContext({}), Wg = process.env.NODE_ENV !== "production" ? (r) => {
  const {
    strict: o
  } = T.useContext(P_), u = (c, d, m) => {
    if (!c)
      if (o === !1 && d === "deprecated") {
        const h = Ol;
        Ol || (Ol = {}), Ol[r] = Ol[r] || [], Ol[r].includes(m || "") || Ol[r].push(m || ""), h || console.warn("[antd] There exists deprecated usage in your code:", Ol);
      } else
        process.env.NODE_ENV !== "production" && z1(c, r, m);
  };
  return u.deprecated = (c, d, m, h) => {
    u(c, "deprecated", `\`${d}\` is deprecated. Please use \`${m}\` instead.${h ? ` ${h}` : ""}`);
  }, u;
} : () => {
  const r = () => {
  };
  return r.deprecated = L_, r;
}, Kg = z1, Gz = /* @__PURE__ */ xg(void 0);
var qz = {
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
}, Yz = {
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
const Qz = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, I_ = Qz, Xz = {
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
  }, Yz),
  timePickerLocale: Object.assign({}, I_)
}, _T = Xz, Wa = "${label} is not a valid ${type}", Gg = {
  locale: "en",
  Pagination: qz,
  DatePicker: _T,
  TimePicker: I_,
  Calendar: _T,
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
Object.assign({}, Gg.Modal);
let vg = [];
const kT = () => vg.reduce((r, o) => Object.assign(Object.assign({}, r), o), Gg.Modal);
function Zz(r) {
  if (r) {
    const o = Object.assign({}, r);
    return vg.push(o), kT(), () => {
      vg = vg.filter((u) => u !== o), kT();
    };
  }
  Object.assign({}, Gg.Modal);
}
const Jz = /* @__PURE__ */ xg(void 0), z_ = Jz, $_ = "internalMark", U_ = (r) => {
  const {
    locale: o = {},
    children: u,
    _ANT_MARK__: c
  } = r;
  if (process.env.NODE_ENV !== "production") {
    const m = Wg("LocaleProvider");
    process.env.NODE_ENV !== "production" && m(c === $_, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  T.useEffect(() => Zz(o && o.Modal), [o]);
  const d = T.useMemo(() => Object.assign(Object.assign({}, o), {
    exist: !0
  }), [o]);
  return /* @__PURE__ */ T.createElement(z_.Provider, {
    value: d
  }, u);
};
process.env.NODE_ENV !== "production" && (U_.displayName = "LocaleProvider");
const e3 = U_, t3 = (r) => {
  const {
    controlHeight: o
  } = r;
  return {
    controlHeightSM: o * 0.75,
    controlHeightXS: o * 0.5,
    controlHeightLG: o * 1.25
  };
};
function n3(r) {
  const {
    sizeUnit: o,
    sizeStep: u
  } = r;
  return {
    sizeXXL: o * (u + 8),
    // 48
    sizeXL: o * (u + 4),
    // 32
    sizeLG: o * (u + 2),
    // 24
    sizeMD: o * (u + 1),
    // 20
    sizeMS: o * u,
    // 16
    size: o * u,
    // 16
    sizeSM: o * (u - 1),
    // 12
    sizeXS: o * (u - 2),
    // 8
    sizeXXS: o * (u - 3)
    // 4
  };
}
const j_ = {
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
}, r3 = Object.assign(Object.assign({}, j_), {
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
}), Jv = r3;
function a3(r, o) {
  let {
    generateColorPalettes: u,
    generateNeutralColorPalettes: c
  } = o;
  const {
    colorSuccess: d,
    colorWarning: m,
    colorError: h,
    colorInfo: C,
    colorPrimary: x,
    colorBgBase: E,
    colorTextBase: k
  } = r, _ = u(x), N = u(d), D = u(m), P = u(h), F = u(C), L = c(E, k), W = r.colorLink || r.colorInfo, $ = u(W);
  return Object.assign(Object.assign({}, L), {
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
    colorWarningBg: D[1],
    colorWarningBgHover: D[2],
    colorWarningBorder: D[3],
    colorWarningBorderHover: D[4],
    colorWarningHover: D[4],
    colorWarning: D[6],
    colorWarningActive: D[7],
    colorWarningTextHover: D[8],
    colorWarningText: D[9],
    colorWarningTextActive: D[10],
    colorInfoBg: F[1],
    colorInfoBgHover: F[2],
    colorInfoBorder: F[3],
    colorInfoBorderHover: F[4],
    colorInfoHover: F[4],
    colorInfo: F[6],
    colorInfoActive: F[7],
    colorInfoTextHover: F[8],
    colorInfoText: F[9],
    colorInfoTextActive: F[10],
    colorLinkHover: $[4],
    colorLink: $[6],
    colorLinkActive: $[7],
    colorBgMask: new Ga("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const i3 = (r) => {
  let o = r, u = r, c = r, d = r;
  return r < 6 && r >= 5 ? o = r + 1 : r < 16 && r >= 6 ? o = r + 2 : r >= 16 && (o = 16), r < 7 && r >= 5 ? u = 4 : r < 8 && r >= 7 ? u = 5 : r < 14 && r >= 8 ? u = 6 : r < 16 && r >= 14 ? u = 7 : r >= 16 && (u = 8), r < 6 && r >= 2 ? c = 1 : r >= 6 && (c = 2), r > 4 && r < 8 ? d = 4 : r >= 8 && (d = 6), {
    borderRadius: r,
    borderRadiusXS: c,
    borderRadiusSM: u,
    borderRadiusLG: o,
    borderRadiusOuter: d
  };
};
function o3(r) {
  const {
    motionUnit: o,
    motionBase: u,
    borderRadius: c,
    lineWidth: d
  } = r;
  return Object.assign({
    // motion
    motionDurationFast: `${(u + o).toFixed(1)}s`,
    motionDurationMid: `${(u + o * 2).toFixed(1)}s`,
    motionDurationSlow: `${(u + o * 3).toFixed(1)}s`,
    // line
    lineWidthBold: d + 1
  }, i3(c));
}
const Ml = (r, o) => new Ga(r).setAlpha(o).toRgbString(), $v = (r, o) => new Ga(r).darken(o).toHexString(), l3 = (r) => {
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
}, u3 = (r, o) => {
  const u = r || "#fff", c = o || "#000";
  return {
    colorBgBase: u,
    colorTextBase: c,
    colorText: Ml(c, 0.88),
    colorTextSecondary: Ml(c, 0.65),
    colorTextTertiary: Ml(c, 0.45),
    colorTextQuaternary: Ml(c, 0.25),
    colorFill: Ml(c, 0.15),
    colorFillSecondary: Ml(c, 0.06),
    colorFillTertiary: Ml(c, 0.04),
    colorFillQuaternary: Ml(c, 0.02),
    colorBgLayout: $v(u, 4),
    colorBgContainer: $v(u, 0),
    colorBgElevated: $v(u, 0),
    colorBgSpotlight: Ml(c, 0.85),
    colorBgBlur: "transparent",
    colorBorder: $v(u, 15),
    colorBorderSecondary: $v(u, 6)
  };
};
function s3(r) {
  return (r + 8) / r;
}
function c3(r) {
  const o = new Array(10).fill(null).map((u, c) => {
    const d = c - 1, m = r * Math.pow(2.71828, d / 5), h = c > 1 ? Math.floor(m) : Math.ceil(m);
    return Math.floor(h / 2) * 2;
  });
  return o[1] = r, o.map((u) => ({
    size: u,
    lineHeight: s3(u)
  }));
}
const f3 = (r) => {
  const o = c3(r), u = o.map((k) => k.size), c = o.map((k) => k.lineHeight), d = u[1], m = u[0], h = u[2], C = c[1], x = c[0], E = c[2];
  return {
    fontSizeSM: m,
    fontSize: d,
    fontSizeLG: h,
    fontSizeXL: u[3],
    fontSizeHeading1: u[6],
    fontSizeHeading2: u[5],
    fontSizeHeading3: u[4],
    fontSizeHeading4: u[3],
    fontSizeHeading5: u[2],
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
function d3(r) {
  const o = Object.keys(j_).map((u) => {
    const c = Zs(r[u]);
    return new Array(10).fill(1).reduce((d, m, h) => (d[`${u}-${h + 1}`] = c[h], d[`${u}${h + 1}`] = c[h], d), {});
  }).reduce((u, c) => (u = Object.assign(Object.assign({}, u), c), u), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, r), o), a3(r, {
    generateColorPalettes: l3,
    generateNeutralColorPalettes: u3
  })), f3(r.fontSize)), n3(r)), t3(r)), o3(r));
}
const H_ = YS(d3), F_ = {
  token: Jv,
  override: {
    override: Jv
  },
  hashed: !0
}, B_ = /* @__PURE__ */ Oa.createContext(F_), V_ = "anticon", v3 = (r, o) => o || (r ? `ant-${r}` : "ant"), ec = /* @__PURE__ */ T.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: v3,
  iconPrefixCls: V_
}), p3 = `-ant-${Date.now()}-${Math.random()}`;
function h3(r, o) {
  const u = {}, c = (h, C) => {
    let x = h.clone();
    return x = (C == null ? void 0 : C(x)) || x, x.toRgbString();
  }, d = (h, C) => {
    const x = new Ga(h), E = Zs(x.toRgbString());
    u[`${C}-color`] = c(x), u[`${C}-color-disabled`] = E[1], u[`${C}-color-hover`] = E[4], u[`${C}-color-active`] = E[6], u[`${C}-color-outline`] = x.clone().setAlpha(0.2).toRgbString(), u[`${C}-color-deprecated-bg`] = E[0], u[`${C}-color-deprecated-border`] = E[2];
  };
  if (o.primaryColor) {
    d(o.primaryColor, "primary");
    const h = new Ga(o.primaryColor), C = Zs(h.toRgbString());
    C.forEach((E, k) => {
      u[`primary-${k + 1}`] = E;
    }), u["primary-color-deprecated-l-35"] = c(h, (E) => E.lighten(35)), u["primary-color-deprecated-l-20"] = c(h, (E) => E.lighten(20)), u["primary-color-deprecated-t-20"] = c(h, (E) => E.tint(20)), u["primary-color-deprecated-t-50"] = c(h, (E) => E.tint(50)), u["primary-color-deprecated-f-12"] = c(h, (E) => E.setAlpha(E.getAlpha() * 0.12));
    const x = new Ga(C[0]);
    u["primary-color-active-deprecated-f-30"] = c(x, (E) => E.setAlpha(E.getAlpha() * 0.3)), u["primary-color-active-deprecated-d-02"] = c(x, (E) => E.darken(2));
  }
  return o.successColor && d(o.successColor, "success"), o.warningColor && d(o.warningColor, "warning"), o.errorColor && d(o.errorColor, "error"), o.infoColor && d(o.infoColor, "info"), `
  :root {
    ${Object.keys(u).map((h) => `--${r}-${h}: ${u[h]};`).join(`
`)}
  }
  `.trim();
}
function m3(r, o) {
  const u = h3(r, o);
  pa() ? Du(u, `${p3}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Kg(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const a1 = /* @__PURE__ */ T.createContext(!1), g3 = (r) => {
  let {
    children: o,
    disabled: u
  } = r;
  const c = T.useContext(a1);
  return /* @__PURE__ */ T.createElement(a1.Provider, {
    value: u != null ? u : c
  }, o);
}, y3 = a1, i1 = /* @__PURE__ */ T.createContext(void 0), b3 = (r) => {
  let {
    children: o,
    size: u
  } = r;
  const c = T.useContext(i1);
  return /* @__PURE__ */ T.createElement(i1.Provider, {
    value: u || c
  }, o);
}, $1 = i1;
function S3() {
  const r = Ou(y3), o = Ou($1);
  return {
    componentDisabled: r,
    componentSize: o
  };
}
const Eg = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], C3 = "5.13.2";
function ES(r) {
  return r >= 0 && r <= 255;
}
function ag(r, o) {
  const {
    r: u,
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
    const k = Math.round((u - h * (1 - E)) / E), _ = Math.round((c - C * (1 - E)) / E), N = Math.round((d - x * (1 - E)) / E);
    if (ES(k) && ES(_) && ES(N))
      return new Ga({
        r: k,
        g: _,
        b: N,
        a: Math.round(E * 100) / 100
      }).toRgbString();
  }
  return new Ga({
    r: u,
    g: c,
    b: d,
    a: 1
  }).toRgbString();
}
var E3 = function(r, o) {
  var u = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (u[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (u[c[d]] = r[c[d]]);
  return u;
};
function W_(r) {
  const {
    override: o
  } = r, u = E3(r, ["override"]), c = Object.assign({}, o);
  Object.keys(Jv).forEach((N) => {
    delete c[N];
  });
  const d = Object.assign(Object.assign({}, u), c), m = 480, h = 576, C = 768, x = 992, E = 1200, k = 1600;
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
    colorSplit: ag(d.colorBorderSecondary, d.colorBgContainer),
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
    colorErrorOutline: ag(d.colorErrorBg, d.colorBgContainer),
    colorWarningOutline: ag(d.colorWarningBg, d.colorBgContainer),
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
    controlOutline: ag(d.colorPrimaryBg, d.colorBgContainer),
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
    screenXLMax: k - 1,
    screenXXL: k,
    screenXXLMin: k,
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
var MT = function(r, o) {
  var u = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (u[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (u[c[d]] = r[c[d]]);
  return u;
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
}, w3 = {
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
}, q_ = (r, o, u) => {
  const c = u.getDerivativeToken(r), {
    override: d
  } = o, m = MT(o, ["override"]);
  let h = Object.assign(Object.assign({}, c), {
    override: d
  });
  return h = W_(h), m && Object.entries(m).forEach((C) => {
    let [x, E] = C;
    const {
      theme: k
    } = E, _ = MT(E, ["theme"]);
    let N = _;
    k && (N = q_(Object.assign(Object.assign({}, h), _), {
      override: _
    }, k)), h[x] = N;
  }), h;
};
function Js() {
  const {
    token: r,
    hashed: o,
    theme: u,
    override: c,
    cssVar: d
  } = Oa.useContext(B_), m = `${C3}-${o || ""}`, h = u || H_, [C, x, E] = fz(h, [Jv, r], {
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
      preserve: w3
    }
  });
  return [h, E, o ? x : "", C, d];
}
const x3 = function(r) {
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
}, T3 = () => ({
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
}), R3 = (r) => ({
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
}), _3 = (r, o) => {
  const {
    fontFamily: u,
    fontSize: c
  } = r, d = `[class^="${o}"], [class*=" ${o}"]`;
  return {
    [d]: {
      fontFamily: u,
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
let k3 = /* @__PURE__ */ eo(function r() {
  Ji(this, r);
});
const Y_ = k3;
function M3(r, o, u) {
  return o = Nu(o), S1(r, Ng() ? Reflect.construct(o, u || [], Nu(r).constructor) : o.apply(r, u));
}
let O3 = /* @__PURE__ */ function(r) {
  Df(o, r);
  function o(u) {
    var c;
    return Ji(this, o), c = M3(this, o), c.result = 0, u instanceof o ? c.result = u.result : typeof u == "number" && (c.result = u), c;
  }
  return eo(o, [{
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
function N3(r, o, u) {
  return o = Nu(o), S1(r, Ng() ? Reflect.construct(o, u || [], Nu(r).constructor) : o.apply(r, u));
}
const Q_ = "CALC_UNIT";
function wS(r) {
  return typeof r == "number" ? `${r}${Q_}` : r;
}
let D3 = /* @__PURE__ */ function(r) {
  Df(o, r);
  function o(u) {
    var c;
    return Ji(this, o), c = N3(this, o), c.result = "", u instanceof o ? c.result = `(${u.result})` : typeof u == "number" ? c.result = wS(u) : typeof u == "string" && (c.result = u), c;
  }
  return eo(o, [{
    key: "add",
    value: function(c) {
      return c instanceof o ? this.result = `${this.result} + ${c.getResult()}` : (typeof c == "number" || typeof c == "string") && (this.result = `${this.result} + ${wS(c)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(c) {
      return c instanceof o ? this.result = `${this.result} - ${c.getResult()}` : (typeof c == "number" || typeof c == "string") && (this.result = `${this.result} - ${wS(c)}`), this.lowPriority = !0, this;
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
const A3 = (r) => {
  const o = r === "css" ? D3 : O3;
  return (u) => new o(u);
};
function L3(r) {
  return r === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
        u[c] = arguments[c];
      return `max(${u.map((d) => Qv(d)).join(",")})`;
    },
    min: function() {
      for (var o = arguments.length, u = new Array(o), c = 0; c < o; c++)
        u[c] = arguments[c];
      return `min(${u.map((d) => Qv(d)).join(",")})`;
    }
  };
}
const X_ = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC != "undefined";
let o1 = !0;
function qg() {
  for (var r = arguments.length, o = new Array(r), u = 0; u < r; u++)
    o[u] = arguments[u];
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
const OT = {};
function P3() {
}
const I3 = (r) => {
  let o, u = r, c = P3;
  return X_ && typeof Proxy != "undefined" && (o = /* @__PURE__ */ new Set(), u = new Proxy(r, {
    get(d, m) {
      return o1 && o.add(m), d[m];
    }
  }), c = (d, m) => {
    var h;
    OT[d] = {
      global: Array.from(o),
      component: Object.assign(Object.assign({}, (h = OT[d]) === null || h === void 0 ? void 0 : h.component), m)
    };
  }), {
    token: u,
    keys: o,
    flush: c
  };
}, Z_ = (r, o) => {
  const [u, c] = Js();
  return n1({
    theme: u,
    token: c,
    hashId: "",
    path: ["ant-design-icons", r],
    nonce: () => o == null ? void 0 : o.nonce
  }, () => [{
    [`.${r}`]: Object.assign(Object.assign({}, T3()), {
      [`.${r} .${r}-icon`]: {
        display: "block"
      }
    })
  }]);
}, J_ = (r, o, u) => {
  var c;
  return typeof u == "function" ? u(qg(o, (c = o[r]) !== null && c !== void 0 ? c : {})) : u != null ? u : {};
}, ek = (r, o, u, c) => {
  const d = Object.assign({}, o[r]);
  if (c != null && c.deprecatedTokens) {
    const {
      deprecatedTokens: h
    } = c;
    h.forEach((C) => {
      let [x, E] = C;
      var k;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && ha(!(d != null && d[x]), `Component Token \`${String(x)}\` of ${r} is deprecated. Please use \`${String(E)}\` instead.`), (d != null && d[x] || d != null && d[E]) && ((k = d[E]) !== null && k !== void 0 || (d[E] = d == null ? void 0 : d[x]));
    });
  }
  const m = Object.assign(Object.assign({}, u), d);
  return Object.keys(m).forEach((h) => {
    m[h] === o[h] && delete m[h];
  }), m;
}, z3 = (r, o) => `${[o, r.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function $3(r, o, u) {
  let c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const d = Array.isArray(r) ? r : [r, r], [m] = d, h = d.join("-");
  return (C) => {
    const [x, E, k, _, N] = Js(), {
      getPrefixCls: D,
      iconPrefixCls: P,
      csp: F
    } = Ou(ec), L = D(), W = N ? "css" : "js", $ = A3(W), {
      max: z,
      min: I
    } = L3(W), U = {
      theme: x,
      token: _,
      hashId: k,
      nonce: () => F == null ? void 0 : F.nonce,
      clientOnly: c.clientOnly,
      // antd is always at top of styles
      order: c.order || -999
    };
    return n1(Object.assign(Object.assign({}, U), {
      clientOnly: !1,
      path: ["Shared", L]
    }), () => [{
      // Link
      "&": R3(_)
    }]), Z_(P, F), [n1(Object.assign(Object.assign({}, U), {
      path: [h, C, P]
    }), () => {
      if (c.injectStyle === !1)
        return [];
      const {
        token: q,
        flush: ne
      } = I3(_), oe = J_(m, E, u), re = `.${C}`, ge = ek(m, E, oe, {
        deprecatedTokens: c.deprecatedTokens
      });
      N && Object.keys(oe).forEach((se) => {
        oe[se] = `var(${m_(se, z3(m, N.prefix))})`;
      });
      const pe = qg(q, {
        componentCls: re,
        prefixCls: C,
        iconCls: `.${P}`,
        antCls: `.${L}`,
        calc: $,
        max: z,
        min: I
      }, N ? oe : ge), te = o(pe, {
        hashId: k,
        prefixCls: C,
        rootPrefixCls: L,
        iconPrefixCls: P
      });
      return ne(m, ge), [c.resetStyle === !1 ? null : _3(pe, C), te];
    }), k];
  };
}
const U3 = (r, o, u) => {
  function c(E) {
    return `${r}${E.slice(0, 1).toUpperCase()}${E.slice(1)}`;
  }
  const {
    unitless: d = {},
    injectStyle: m = !0
  } = u != null ? u : {}, h = {
    [c("zIndexPopup")]: !0
  };
  Object.keys(d).forEach((E) => {
    h[c(E)] = d[E];
  });
  const C = (E) => {
    let {
      rootCls: k,
      cssVar: _
    } = E;
    const [, N] = Js();
    return jz({
      path: [r],
      prefix: _.prefix,
      key: _ == null ? void 0 : _.key,
      unitless: Object.assign(Object.assign({}, K_), h),
      ignore: G_,
      token: N,
      scope: k
    }, () => {
      const D = J_(r, N, o), P = ek(r, N, D, {
        deprecatedTokens: u == null ? void 0 : u.deprecatedTokens
      });
      return Object.keys(D).forEach((F) => {
        P[c(F)] = P[F], delete P[F];
      }), P;
    }), null;
  };
  return (E) => {
    const [, , , , k] = Js();
    return [(_) => m && k ? /* @__PURE__ */ Oa.createElement(Oa.Fragment, null, /* @__PURE__ */ Oa.createElement(C, {
      rootCls: E,
      cssVar: k,
      component: r
    }), _) : _, k == null ? void 0 : k.key];
  };
}, j3 = (r, o, u, c) => {
  const d = $3(r, o, u, c), m = U3(Array.isArray(r) ? r[0] : r, u, c);
  return function(h) {
    let C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : h;
    const [, x] = d(h), [E, k] = m(C);
    return [E, x, k];
  };
};
function H3(r, o) {
  return Eg.reduce((u, c) => {
    const d = r[`${c}1`], m = r[`${c}3`], h = r[`${c}6`], C = r[`${c}7`];
    return Object.assign(Object.assign({}, u), o(c, {
      lightColor: d,
      lightBorderColor: m,
      darkColor: h,
      textColor: C
    }));
  }, {});
}
const F3 = Object.assign({}, T), {
  useId: NT
} = F3, B3 = () => "", V3 = typeof NT == "undefined" ? B3 : NT;
function W3(r, o) {
  var u;
  const c = Wg("ConfigProvider"), d = r || {}, m = d.inherit === !1 || !o ? F_ : o, h = V3();
  if (process.env.NODE_ENV !== "production") {
    const C = d.cssVar || m.cssVar, x = !!(typeof d.cssVar == "object" && (!((u = d.cssVar) === null || u === void 0) && u.key) || h);
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
    const k = `css-var-${h.replace(/:/g, "")}`, _ = ((C = d.cssVar) !== null && C !== void 0 ? C : m.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: "ant"
    }, typeof m.cssVar == "object" ? m.cssVar : {}), typeof d.cssVar == "object" ? d.cssVar : {}), {
      key: typeof d.cssVar == "object" && ((x = d.cssVar) === null || x === void 0 ? void 0 : x.key) || k
    });
    return Object.assign(Object.assign(Object.assign({}, m), d), {
      token: Object.assign(Object.assign({}, m.token), d.token),
      components: E,
      cssVar: _
    });
  }, [d, m], (C, x) => C.some((E, k) => {
    const _ = x[k];
    return !C1(E, _, !0);
  }));
}
function K3(r) {
  const {
    children: o
  } = r, [, u] = Js(), {
    motion: c
  } = u, d = T.useRef(!1);
  return d.current = d.current || c === !1, d.current ? /* @__PURE__ */ T.createElement(sP, {
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
const G3 = process.env.NODE_ENV !== "production" ? tk : () => null;
var q3 = function(r, o) {
  var u = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (u[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (u[c[d]] = r[c[d]]);
  return u;
};
let l1 = !1;
process.env.NODE_ENV;
const Y3 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "pageHeader", "input", "pagination", "form", "select", "button"], Q3 = "ant";
let nk;
function X3() {
  return nk || Q3;
}
function Z3(r) {
  return Object.keys(r).some((o) => o.endsWith("Color"));
}
const J3 = (r) => {
  const {
    prefixCls: o,
    iconPrefixCls: u,
    theme: c,
    holderRender: d
  } = r;
  o !== void 0 && (nk = o), c && Z3(c) && (process.env.NODE_ENV !== "production" && Kg(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), m3(X3(), c));
}, e4 = (r) => {
  const {
    children: o,
    csp: u,
    autoInsertSpaceInButton: c,
    alert: d,
    anchor: m,
    form: h,
    locale: C,
    componentSize: x,
    direction: E,
    space: k,
    virtual: _,
    dropdownMatchSelectWidth: N,
    popupMatchSelectWidth: D,
    popupOverflow: P,
    legacyLocale: F,
    parentContext: L,
    iconPrefixCls: W,
    theme: $,
    componentDisabled: z,
    segmented: I,
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
    const Ge = Oe || L.getPrefixCls("");
    return Ue ? `${Ge}-${Ue}` : Ge;
  }, [L.getPrefixCls, r.prefixCls]), Mt = W || L.iconPrefixCls || V_, rt = u || L.csp;
  Z_(Mt, rt);
  const st = W3($, L.theme);
  process.env.NODE_ENV !== "production" && (l1 = l1 || !!st);
  const on = {
    csp: rt,
    autoInsertSpaceInButton: c,
    alert: d,
    anchor: m,
    locale: C || F,
    direction: E,
    space: k,
    virtual: _,
    popupMatchSelectWidth: D != null ? D : N,
    popupOverflow: P,
    getPrefixCls: xt,
    iconPrefixCls: Mt,
    theme: st,
    segmented: I,
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
  }, Ot = Object.assign({}, L);
  Object.keys(on).forEach((Ue) => {
    on[Ue] !== void 0 && (Ot[Ue] = on[Ue]);
  }), Y3.forEach((Ue) => {
    const St = r[Ue];
    St && (Ot[Ue] = St);
  });
  const jt = _g(() => Ot, Ot, (Ue, St) => {
    const Oe = Object.keys(Ue), Ge = Object.keys(St);
    return Oe.length !== Ge.length || Oe.some((At) => Ue[At] !== St[At]);
  }), ir = T.useMemo(() => ({
    prefixCls: Mt,
    csp: rt
  }), [Mt, rt]);
  let Bt = /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(G3, {
    dropdownMatchSelectWidth: N
  }), o);
  const dn = T.useMemo(() => {
    var Ue, St, Oe, Ge;
    return Wz(((Ue = Gg.Form) === null || Ue === void 0 ? void 0 : Ue.defaultValidateMessages) || {}, ((Oe = (St = jt.locale) === null || St === void 0 ? void 0 : St.Form) === null || Oe === void 0 ? void 0 : Oe.defaultValidateMessages) || {}, ((Ge = jt.form) === null || Ge === void 0 ? void 0 : Ge.validateMessages) || {}, (h == null ? void 0 : h.validateMessages) || {});
  }, [jt, h == null ? void 0 : h.validateMessages]);
  Object.keys(dn).length > 0 && (Bt = /* @__PURE__ */ T.createElement(Gz.Provider, {
    value: dn
  }, Bt)), C && (Bt = /* @__PURE__ */ T.createElement(e3, {
    locale: C,
    _ANT_MARK__: $_
  }, Bt)), (Mt || rt) && (Bt = /* @__PURE__ */ T.createElement(O1.Provider, {
    value: ir
  }, Bt)), x && (Bt = /* @__PURE__ */ T.createElement(b3, {
    size: x
  }, Bt)), Bt = /* @__PURE__ */ T.createElement(K3, null, Bt);
  const Ht = T.useMemo(() => {
    const Ue = st || {}, {
      algorithm: St,
      token: Oe,
      components: Ge,
      cssVar: At
    } = Ue, mn = q3(Ue, ["algorithm", "token", "components", "cssVar"]), An = St && (!Array.isArray(St) || St.length > 0) ? YS(St) : H_, gn = {};
    Object.entries(Ge || {}).forEach((qr) => {
      let [Ln, Kt] = qr;
      const Bn = Object.assign({}, Kt);
      "algorithm" in Bn && (Bn.algorithm === !0 ? Bn.theme = An : (Array.isArray(Bn.algorithm) || typeof Bn.algorithm == "function") && (Bn.theme = YS(Bn.algorithm)), delete Bn.algorithm), gn[Ln] = Bn;
    });
    const oa = Object.assign(Object.assign({}, Jv), Oe);
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
  return $ && (Bt = /* @__PURE__ */ T.createElement(B_.Provider, {
    value: Ht
  }, Bt)), jt.warning && (Bt = /* @__PURE__ */ T.createElement(P_.Provider, {
    value: jt.warning
  }, Bt)), z !== void 0 && (Bt = /* @__PURE__ */ T.createElement(g3, {
    disabled: z
  }, Bt)), /* @__PURE__ */ T.createElement(ec.Provider, {
    value: jt
  }, Bt);
}, Pf = (r) => {
  const o = T.useContext(ec), u = T.useContext(z_);
  return /* @__PURE__ */ T.createElement(e4, Object.assign({
    parentContext: o,
    legacyLocale: u
  }, r));
};
Pf.ConfigContext = ec;
Pf.SizeContext = $1;
Pf.config = J3;
Pf.useConfig = S3;
Object.defineProperty(Pf, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Kg(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), $1)
});
process.env.NODE_ENV !== "production" && (Pf.displayName = "ConfigProvider");
const t4 = /* @__PURE__ */ T.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});
var n4 = function(r, o) {
  var u = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (u[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (u[c[d]] = r[c[d]]);
  return u;
};
const DT = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, rk = /* @__PURE__ */ T.createContext({}), r4 = /* @__PURE__ */ (() => {
  let r = 0;
  return function() {
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return r += 1, `${o}${r}`;
  };
})(), a4 = /* @__PURE__ */ T.forwardRef((r, o) => {
  const {
    prefixCls: u,
    className: c,
    trigger: d,
    children: m,
    defaultCollapsed: h = !1,
    theme: C = "dark",
    style: x = {},
    collapsible: E = !1,
    reverseArrow: k = !1,
    width: _ = 200,
    collapsedWidth: N = 80,
    zeroWidthTriggerStyle: D,
    breakpoint: P,
    onCollapse: F,
    onBreakpoint: L
  } = r, W = n4(r, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), {
    siderHook: $
  } = Ou(t4), [z, I] = bi("collapsed" in r ? r.collapsed : h), [U, Y] = bi(!1);
  Wo(() => {
    "collapsed" in r && I(r.collapsed);
  }, [r.collapsed]);
  const q = (te, se) => {
    "collapsed" in r || I(te), F == null || F(te, se);
  }, ne = Ma();
  ne.current = (te) => {
    Y(te.matches), L == null || L(te.matches), z !== te.matches && q(te.matches, "responsive");
  }, Wo(() => {
    function te(de) {
      return ne.current(de);
    }
    let se;
    if (typeof window != "undefined") {
      const {
        matchMedia: de
      } = window;
      if (de && P && P in DT) {
        se = de(`screen and (max-width: ${DT[P]})`);
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
  }, [P]), Wo(() => {
    const te = r4("ant-sider-");
    return $.addSider(te), () => $.removeSider(te);
  }, []);
  const oe = () => {
    q(!z, "clickTrigger");
  }, {
    getPrefixCls: re
  } = Ou(ec), ge = () => {
    const te = re("layout-sider", u), se = Pg(W, ["collapsed"]), de = z ? N : _, Ce = DI(de) ? `${de}px` : String(de), ke = parseFloat(String(N || 0)) === 0 ? /* @__PURE__ */ T.createElement("span", {
      onClick: oe,
      className: wn(`${te}-zero-width-trigger`, `${te}-zero-width-trigger-${k ? "right" : "left"}`),
      style: D
    }, d || /* @__PURE__ */ T.createElement(_I, null)) : null, Ie = {
      expanded: k ? /* @__PURE__ */ T.createElement(yT, null) : /* @__PURE__ */ T.createElement(gT, null),
      collapsed: k ? /* @__PURE__ */ T.createElement(gT, null) : /* @__PURE__ */ T.createElement(yT, null)
    }[z ? "collapsed" : "expanded"], ie = d !== null ? ke || /* @__PURE__ */ T.createElement("div", {
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
      [`${te}-collapsed`]: !!z,
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
    siderCollapsed: z
  }), [z]);
  return /* @__PURE__ */ T.createElement(rk.Provider, {
    value: pe
  }, ge());
});
process.env.NODE_ENV !== "production" && (a4.displayName = "Sider");
function ak(r) {
  var o = r.children, u = r.prefixCls, c = r.id, d = r.overlayInnerStyle, m = r.className, h = r.style;
  return /* @__PURE__ */ T.createElement("div", {
    className: wn("".concat(u, "-content"), m),
    style: h
  }, /* @__PURE__ */ T.createElement("div", {
    className: "".concat(u, "-inner"),
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
}, yi = [0, 0], i4 = {
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
}, o4 = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], l4 = function(o, u) {
  var c = o.overlayClassName, d = o.trigger, m = d === void 0 ? ["hover"] : d, h = o.mouseEnterDelay, C = h === void 0 ? 0 : h, x = o.mouseLeaveDelay, E = x === void 0 ? 0.1 : x, k = o.overlayStyle, _ = o.prefixCls, N = _ === void 0 ? "rc-tooltip" : _, D = o.children, P = o.onVisibleChange, F = o.afterVisibleChange, L = o.transitionName, W = o.animation, $ = o.motion, z = o.placement, I = z === void 0 ? "right" : z, U = o.align, Y = U === void 0 ? {} : U, q = o.destroyTooltipOnHide, ne = q === void 0 ? !1 : q, oe = o.defaultVisible, re = o.getTooltipContainer, ge = o.overlayInnerStyle;
  o.arrowContent;
  var pe = o.overlay, te = o.id, se = o.showArrow, de = se === void 0 ? !0 : se, Ce = Fn(o, o4), ke = Ma(null);
  qT(u, function() {
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
    builtinPlacements: i4,
    popupPlacement: I,
    ref: ke,
    popupAlign: Y,
    getPopupContainer: re,
    onPopupVisibleChange: P,
    afterPopupVisibleChange: F,
    popupTransitionName: L,
    popupAnimation: W,
    popupMotion: $,
    defaultPopupVisible: oe,
    autoDestroy: ne,
    mouseLeaveDelay: E,
    popupStyle: k,
    mouseEnterDelay: C,
    arrow: de
  }, we), D);
};
const u4 = /* @__PURE__ */ rA(l4), ik = /* @__PURE__ */ Oa.createContext(void 0);
process.env.NODE_ENV !== "production" && (ik.displayName = "zIndexContext");
const ok = ik, Gs = 100, s4 = 10, c4 = Gs * s4, lk = {
  Modal: Gs,
  Drawer: Gs,
  Popover: Gs,
  Popconfirm: Gs,
  Tooltip: Gs,
  Tour: Gs
}, f4 = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function d4(r) {
  return r in lk;
}
function v4(r, o) {
  const [, u] = Js(), c = Oa.useContext(ok), d = d4(r);
  if (o !== void 0)
    return [o, o];
  let m = c != null ? c : 0;
  return d ? (m += // Use preset token zIndex by default but not stack when has parent container
  (c ? 0 : u.zIndexPopupBase) + // Container offset
  lk[r], m = Math.min(m, u.zIndexPopupBase + c4)) : m += f4[r], [c === void 0 ? o : m, m];
}
const p4 = (r, o, u) => u !== void 0 ? u : `${r}-${o}`;
function h4(r) {
  const {
    sizePopupArrow: o,
    borderRadiusXS: u,
    borderRadiusOuter: c
  } = r, d = o / 2, m = 0, h = d, C = c * 1 / Math.sqrt(2), x = d - c * (1 - 1 / Math.sqrt(2)), E = d - u * (1 / Math.sqrt(2)), k = c * (Math.sqrt(2) - 1) + u * (1 / Math.sqrt(2)), _ = 2 * d - E, N = k, D = 2 * d - C, P = x, F = 2 * d - m, L = h, W = d * Math.sqrt(2) + c * (Math.sqrt(2) - 2), $ = c * (Math.sqrt(2) - 1), z = `polygon(${$}px 100%, 50% ${$}px, ${2 * d - $}px 100%, ${$}px 100%)`, I = `path('M ${m} ${h} A ${c} ${c} 0 0 0 ${C} ${x} L ${E} ${k} A ${u} ${u} 0 0 1 ${_} ${N} L ${D} ${P} A ${c} ${c} 0 0 0 ${F} ${L} Z')`;
  return {
    arrowShadowWidth: W,
    arrowPath: I,
    arrowPolygon: z
  };
}
const m4 = (r, o, u) => {
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
        value: `0 0 ${Qv(C)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: u,
      zIndex: 0,
      background: "transparent"
    }
  };
}, uk = 8;
function sk(r) {
  const {
    contentRadius: o,
    limitVerticalRadius: u
  } = r, c = o > 12 ? o + 2 : 12;
  return {
    arrowOffsetHorizontal: c,
    arrowOffsetVertical: u ? uk : c
  };
}
function ig(r, o) {
  return r ? o : {};
}
function g4(r, o, u) {
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
  } = u || {};
  return {
    [c]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${c}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, m4(r, o, d)), {
        "&:before": {
          background: o
        }
      })]
    }, ig(!!x.top, {
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
    })), ig(!!x.bottom, {
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
    })), ig(!!x.left, {
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
    })), ig(!!x.right, {
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
function y4(r, o, u, c) {
  if (c === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const d = c && typeof c == "object" ? c : {}, m = {};
  switch (r) {
    case "top":
    case "bottom":
      m.shiftX = o.arrowOffsetHorizontal * 2 + u, m.shiftY = !0, m.adjustY = !0;
      break;
    case "left":
    case "right":
      m.shiftY = o.arrowOffsetVertical * 2 + u, m.shiftX = !0, m.adjustX = !0;
      break;
  }
  const h = Object.assign(Object.assign({}, m), d);
  return h.shiftX || (h.adjustX = !0), h.shiftY || (h.adjustY = !0), h;
}
const AT = {
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
}, b4 = {
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
}, S4 = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function C4(r) {
  const {
    arrowWidth: o,
    autoAdjustOverflow: u,
    arrowPointAtCenter: c,
    offset: d,
    borderRadius: m,
    visibleFirst: h
  } = r, C = o / 2, x = {};
  return Object.keys(AT).forEach((E) => {
    const k = c && b4[E] || AT[E], _ = Object.assign(Object.assign({}, k), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (x[E] = _, S4.has(E) && (_.autoArrow = !1), E) {
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
    _.overflow = y4(E, N, o, u), h && (_.htmlRegion = "visibleFirst");
  }), x;
}
const {
  isValidElement: ep
} = T;
function E4(r) {
  return r && ep(r) && r.type === T.Fragment;
}
function w4(r, o, u) {
  return ep(r) ? /* @__PURE__ */ T.cloneElement(r, typeof u == "function" ? u(r.props || {}) : u) : o;
}
function ck(r, o) {
  return w4(r, r, o);
}
const x4 = /* @__PURE__ */ T.createContext(null), T4 = (r) => {
  let {
    children: o
  } = r;
  return /* @__PURE__ */ T.createElement(x4.Provider, {
    value: null
  }, o);
}, R4 = (r) => ({
  animationDuration: r,
  animationFillMode: "both"
}), _4 = (r) => ({
  animationDuration: r,
  animationFillMode: "both"
}), k4 = function(r, o, u, c) {
  const m = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${m}${r}-enter,
      ${m}${r}-appear
    `]: Object.assign(Object.assign({}, R4(c)), {
      animationPlayState: "paused"
    }),
    [`${m}${r}-leave`]: Object.assign(Object.assign({}, _4(c)), {
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
      animationName: u,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, M4 = new Ei("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), O4 = new Ei("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), LT = new Ei("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), PT = new Ei("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), N4 = new Ei("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), D4 = new Ei("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), A4 = new Ei("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), L4 = new Ei("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), P4 = new Ei("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), I4 = new Ei("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), z4 = new Ei("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), $4 = new Ei("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), U4 = {
  zoom: {
    inKeyframes: M4,
    outKeyframes: O4
  },
  "zoom-big": {
    inKeyframes: LT,
    outKeyframes: PT
  },
  "zoom-big-fast": {
    inKeyframes: LT,
    outKeyframes: PT
  },
  "zoom-left": {
    inKeyframes: A4,
    outKeyframes: L4
  },
  "zoom-right": {
    inKeyframes: P4,
    outKeyframes: I4
  },
  "zoom-up": {
    inKeyframes: N4,
    outKeyframes: D4
  },
  "zoom-down": {
    inKeyframes: z4,
    outKeyframes: $4
  }
}, j4 = (r, o) => {
  const {
    antCls: u
  } = r, c = `${u}-${o}`, {
    inKeyframes: d,
    outKeyframes: m
  } = U4[o];
  return [k4(c, d, m, o === "zoom-big-fast" ? r.motionDurationFast : r.motionDurationMid), {
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
}, H4 = (r) => {
  const {
    componentCls: o,
    // ant-tooltip
    tooltipMaxWidth: u,
    tooltipColor: c,
    tooltipBg: d,
    tooltipBorderRadius: m,
    zIndexPopup: h,
    controlHeight: C,
    boxShadowSecondary: x,
    paddingSM: E,
    paddingXS: k
  } = r;
  return [
    {
      [o]: Object.assign(Object.assign(Object.assign(Object.assign({}, x3(r)), {
        position: "absolute",
        zIndex: h,
        display: "block",
        width: "max-content",
        maxWidth: u,
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
          padding: `${Qv(r.calc(E).div(2).equal())} ${Qv(k)}`,
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
      }), H3(r, (_, N) => {
        let {
          darkColor: D
        } = N;
        return {
          [`&${o}-${_}`]: {
            [`${o}-inner`]: {
              backgroundColor: D
            },
            [`${o}-arrow`]: {
              "--antd-arrow-background-color": D
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
    g4(r, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${o}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: r.sizePopupArrow
      }
    }
  ];
}, F4 = (r) => Object.assign(Object.assign({
  zIndexPopup: r.zIndexPopupBase + 70
}, sk({
  contentRadius: r.borderRadius,
  limitVerticalRadius: !0
})), h4(qg(r, {
  borderRadiusOuter: Math.min(r.borderRadiusOuter, 4)
}))), fk = function(r) {
  let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return j3("Tooltip", (c) => {
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
    return [H4(C), j4(c, "zoom-big-fast")];
  }, F4, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: o
  })(r);
}, B4 = Eg.map((r) => `${r}-inverse`);
function V4(r) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(ar(B4), ar(Eg)).includes(r) : Eg.includes(r);
}
function dk(r, o) {
  const u = V4(o), c = wn({
    [`${r}-${o}`]: o && u
  }), d = {}, m = {};
  return o && !u && (d.background = o, m["--antd-arrow-background-color"] = o), {
    className: c,
    overlayStyle: d,
    arrowStyle: m
  };
}
const W4 = (r) => {
  const {
    prefixCls: o,
    className: u,
    placement: c = "top",
    title: d,
    color: m,
    overlayInnerStyle: h
  } = r, {
    getPrefixCls: C
  } = T.useContext(ec), x = C("tooltip", o), [E, k, _] = fk(x), N = dk(x, m), D = N.arrowStyle, P = Object.assign(Object.assign({}, h), N.overlayStyle), F = wn(k, _, x, `${x}-pure`, `${x}-placement-${c}`, u, N.className);
  return E(/* @__PURE__ */ T.createElement("div", {
    className: F,
    style: D
  }, /* @__PURE__ */ T.createElement("div", {
    className: `${x}-arrow`
  }), /* @__PURE__ */ T.createElement(ak, Object.assign({}, r, {
    className: k,
    prefixCls: x,
    overlayInnerStyle: P
  }), d)));
}, K4 = W4;
var G4 = function(r, o) {
  var u = {};
  for (var c in r)
    Object.prototype.hasOwnProperty.call(r, c) && o.indexOf(c) < 0 && (u[c] = r[c]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var d = 0, c = Object.getOwnPropertySymbols(r); d < c.length; d++)
      o.indexOf(c[d]) < 0 && Object.prototype.propertyIsEnumerable.call(r, c[d]) && (u[c[d]] = r[c[d]]);
  return u;
};
const U1 = /* @__PURE__ */ T.forwardRef((r, o) => {
  var u, c;
  const {
    prefixCls: d,
    openClassName: m,
    getTooltipContainer: h,
    overlayClassName: C,
    color: x,
    overlayInnerStyle: E,
    children: k,
    afterOpenChange: _,
    afterVisibleChange: N,
    destroyTooltipOnHide: D,
    arrow: P = !0,
    title: F,
    overlay: L,
    builtinPlacements: W,
    arrowPointAtCenter: $ = !1,
    autoAdjustOverflow: z = !0
  } = r, I = !!P, [, U] = Js(), {
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
  }), process.env.NODE_ENV !== "production" && oe(!D || typeof D == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && oe(!P || typeof P == "boolean" || !("arrowPointAtCenter" in P), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [pe, te] = Hv(!1, {
    value: (u = r.open) !== null && u !== void 0 ? u : r.visible,
    defaultValue: (c = r.defaultOpen) !== null && c !== void 0 ? c : r.defaultVisible
  }), se = !F && !L && F !== 0, de = (ot) => {
    var Wt, Qt;
    te(se ? !1 : ot), se || ((Wt = r.onOpenChange) === null || Wt === void 0 || Wt.call(r, ot), (Qt = r.onVisibleChange) === null || Qt === void 0 || Qt.call(r, ot));
  }, Ce = T.useMemo(() => {
    var ot, Wt;
    let Qt = $;
    return typeof P == "object" && (Qt = (Wt = (ot = P.pointAtCenter) !== null && ot !== void 0 ? ot : P.arrowPointAtCenter) !== null && Wt !== void 0 ? Wt : $), W || C4({
      arrowPointAtCenter: Qt,
      autoAdjustOverflow: z,
      arrowWidth: I ? U.sizePopupArrow : 0,
      borderRadius: U.borderRadius,
      offset: U.marginXXS,
      visibleFirst: !0
    });
  }, [$, P, W, U]), ke = T.useMemo(() => F === 0 ? F : L || F || "", [L, F]), we = /* @__PURE__ */ T.createElement(T4, null, typeof ke == "function" ? ke() : ke), {
    getPopupContainer: Ae,
    placement: Ie = "top",
    mouseEnterDelay: ie = 0.1,
    mouseLeaveDelay: he = 0.1,
    overlayStyle: Se,
    rootClassName: ze
  } = r, Ke = G4(r, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), Xe = q("tooltip", d), it = q(), Ve = r["data-popover-inject"];
  let nt = pe;
  !("open" in r) && !("visible" in r) && se && (nt = !1);
  const Nt = ep(k) && !E4(k) ? k : /* @__PURE__ */ T.createElement("span", null, k), $e = Nt.props, et = !$e.className || typeof $e.className == "string" ? wn($e.className, m || `${Xe}-open`) : $e.className, [Vt, Ee, mt] = fk(Xe, !Ve), Dt = dk(Xe, x), zt = Dt.arrowStyle, Ut = Object.assign(Object.assign({}, E), Dt.overlayStyle), Ze = wn(C, {
    [`${Xe}-rtl`]: ne === "rtl"
  }, Dt.className, ze, Ee, mt), [kt, gt] = v4("Tooltip", Ke.zIndex), Zt = /* @__PURE__ */ T.createElement(u4, Object.assign({}, Ke, {
    zIndex: kt,
    showArrow: I,
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
      motionName: p4(it, "zoom-big-fast", r.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!D
  }), nt ? ck(Nt, {
    className: et
  }) : Nt);
  return Vt(/* @__PURE__ */ T.createElement(ok.Provider, {
    value: gt
  }, Zt));
});
process.env.NODE_ENV !== "production" && (U1.displayName = "Tooltip");
U1._InternalPanelDoNotUseOrYouWillBeFired = K4;
const q4 = U1, Y4 = /* @__PURE__ */ xg({
  prefixCls: "",
  firstLevel: !0,
  inlineCollapsed: !1
}), Q4 = Y4, X4 = (r) => {
  var o;
  const {
    className: u,
    children: c,
    icon: d,
    title: m,
    danger: h
  } = r, {
    prefixCls: C,
    firstLevel: x,
    direction: E,
    disableMenuItemTitleTooltip: k,
    inlineCollapsed: _
  } = T.useContext(Q4), N = ($) => {
    const z = /* @__PURE__ */ T.createElement("span", {
      className: `${C}-title-content`
    }, c);
    return (!d || ep(c) && c.type === "span") && c && $ && x && typeof c == "string" ? /* @__PURE__ */ T.createElement("div", {
      className: `${C}-inline-collapsed-noicon`
    }, c.charAt(0)) : z;
  }, {
    siderCollapsed: D
  } = T.useContext(rk);
  let P = m;
  typeof m == "undefined" ? P = x ? c : "" : m === !1 && (P = "");
  const F = {
    title: P
  };
  !D && !_ && (F.title = null, F.open = !1);
  const L = Kv(c).length;
  let W = /* @__PURE__ */ T.createElement(Ig, Object.assign({}, Pg(r, ["title", "icon", "danger"]), {
    className: wn({
      [`${C}-item-danger`]: h,
      [`${C}-item-only-child`]: (d ? L + 1 : L) === 1
    }, u),
    title: typeof m == "string" ? m : void 0
  }), ck(d, {
    className: wn(ep(d) ? (o = d.props) === null || o === void 0 ? void 0 : o.className : "", `${C}-item-icon`)
  }), N(_));
  return k || (W = /* @__PURE__ */ T.createElement(q4, Object.assign({}, F, {
    placement: E === "rtl" ? "left" : "right",
    overlayClassName: `${C}-inline-collapsed-tooltip`
  }), W)), W;
}, nU = X4, Yg = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(JD, Me({}, r)) }), rU = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(eA, Me({}, r)) }), aU = (r) => /* @__PURE__ */ V(Qe, { children: /* @__PURE__ */ V(tA, Me({}, r)) });
function j1(r) {
  var o;
  return /* @__PURE__ */ va(Go, { vertical: !0, className: "globalNavigation__icon " + ((o = r.className) != null ? o : ""), onClick: r.onClick, children: [
    r.icon,
    !r.hideLabel && /* @__PURE__ */ V("span", { className: "globalNavigation__iconLabel", children: r.label })
  ] });
}
function Z4(r) {
  return /* @__PURE__ */ va(Go, { vertical: !0, className: "globalNavigation__suiteLogo", children: [
    /* @__PURE__ */ V(j1, { icon: r.icon, label: "", hideLabel: !0, className: "globalNavigation__icon--suiteLogo" }),
    r.label,
    /* @__PURE__ */ V("div", { className: "globalNavigation__divider" })
  ] });
}
const J4 = (r) => /* @__PURE__ */ T.createElement("svg", Me({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", id: "search-colorable" }, r), /* @__PURE__ */ T.createElement("path", { d: "M16.8004 10.2004C16.8004 9.33367 16.6297 8.47543 16.298 7.67468C15.9663 6.87393 15.4802 6.14635 14.8673 5.53349C14.2544 4.92062 13.5268 4.43447 12.7261 4.10279C11.9254 3.7711 11.0671 3.60039 10.2004 3.60039C9.33367 3.60039 8.47543 3.7711 7.67468 4.10279C6.87393 4.43447 6.14635 4.92062 5.53349 5.53349C4.92062 6.14635 4.43447 6.87393 4.10279 7.67468C3.7711 8.47543 3.60039 9.33367 3.60039 10.2004C3.60039 11.0671 3.7711 11.9254 4.10279 12.7261C4.43447 13.5268 4.92062 14.2544 5.53349 14.8673C6.14635 15.4802 6.87393 15.9663 7.67468 16.298C8.47543 16.6297 9.33367 16.8004 10.2004 16.8004C11.0671 16.8004 11.9254 16.6297 12.7261 16.298C13.5268 15.9663 14.2544 15.4802 14.8673 14.8673C15.4802 14.2544 15.9663 13.5268 16.298 12.7261C16.6297 11.9254 16.8004 11.0671 16.8004 10.2004ZM15.2741 16.1254C13.9129 17.2954 12.1391 18.0004 10.2004 18.0004C5.89164 18.0004 2.40039 14.5091 2.40039 10.2004C2.40039 5.89164 5.89164 2.40039 10.2004 2.40039C14.5091 2.40039 18.0004 5.89164 18.0004 10.2004C18.0004 12.1391 17.2954 13.9129 16.1254 15.2741L21.4241 20.5766C21.6566 20.8091 21.6566 21.1916 21.4241 21.4241C21.1916 21.6566 20.8091 21.6566 20.5766 21.4241L15.2741 16.1254Z", fill: "currentColor" }));
function e$(r) {
  return /* @__PURE__ */ V("span", { className: "globalNavigation__search", onClick: r.onClick, children: /* @__PURE__ */ V(
    Tg,
    {
      placement: "right",
      title: /* @__PURE__ */ va(CA, { size: "large", children: [
        /* @__PURE__ */ V(Ko, { children: "Search" }),
        /* @__PURE__ */ V(Ko, { children: "Ctrl + K" })
      ] }),
      children: /* @__PURE__ */ V(Go, { className: "globalNavigation__searchButtonWrapper", children: /* @__PURE__ */ V(rp, { className: "globalNavigation__searchButton", shape: "round", icon: /* @__PURE__ */ V(J4, { className: "globalNavigation__searchIcon" }) }) })
    }
  ) });
}
function t$(r) {
  return /* @__PURE__ */ va(Ko, { children: [
    r.type === "link" && /* @__PURE__ */ V(Tg, { title: r.hideLabel ? r.label : void 0, placement: "right", children: /* @__PURE__ */ V(
      j1,
      {
        className: `globalNavigation__item ${r.isActive ? " globalNavigation__item--active" : ""}`,
        icon: r.icon,
        label: r.label,
        onClick: r.onClick,
        hideLabel: r.hideLabel
      }
    ) }),
    r.type === "menu" && /* @__PURE__ */ V(u1, { items: r.items })
  ] });
}
function u1(r) {
  return /* @__PURE__ */ V(Go, { vertical: !0, children: r.items.map((o, u) => /* @__PURE__ */ va(aA, { children: [
    o.type === "link" && /* @__PURE__ */ iA(t$, gi(Me({}, o), { key: u })),
    o.type === "menu" && /* @__PURE__ */ V(
      Yg,
      {
        expandIcon: o.isNestedMenu ? !0 : null,
        items: [n$(o, u)],
        className: "globalNavigation__menu"
      },
      u
    )
  ] }, u)) });
}
function n$(r, o) {
  let u;
  return r.type === "menu" && r.children && (u = r.children.map((c, d) => Me({
    expandIcon: c.isNestedMenu ? !0 : null,
    key: `${String(c.label)}${d}`
  }, c)), u.unshift({ label: r.label, type: "group", key: r.label + "_groupTitle" })), {
    icon: /* @__PURE__ */ V(
      j1,
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
    children: u
  };
}
const r$ = (r) => /* @__PURE__ */ T.createElement("svg", Me({ xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24" }, r), /* @__PURE__ */ T.createElement("title", null, "lock"), /* @__PURE__ */ T.createElement("g", { strokeLinecap: "square", strokeLinejoin: "miter", strokeWidth: 1, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" }, /* @__PURE__ */ T.createElement("path", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, d: "M12,1L12,1 C9.2,1,7,3.2,7,6v3h10V6C17,3.2,14.8,1,12,1z" }), /* @__PURE__ */ T.createElement("rect", { x: 4, y: 9, fill: "none", stroke: "currentColor", strokeMiterlimit: 10, width: 16, height: 14 }), /* @__PURE__ */ T.createElement("circle", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, cx: 12, cy: 15, r: 2 }), /* @__PURE__ */ T.createElement("line", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, x1: 12, y1: 17, x2: 12, y2: 19 }))), a$ = (r) => /* @__PURE__ */ T.createElement("svg", Me({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", id: "add-colorable" }, r), `>
    `, /* @__PURE__ */ T.createElement("path", { d: "M12.5992 4.8002C12.5992 4.4702 12.3292 4.2002 11.9992 4.2002C11.6692 4.2002 11.3992 4.4702 11.3992 4.8002V11.4002H4.79922C4.46922 11.4002 4.19922 11.6702 4.19922 12.0002C4.19922 12.3302 4.46922 12.6002 4.79922 12.6002H11.3992V19.2002C11.3992 19.5302 11.6692 19.8002 11.9992 19.8002C12.3292 19.8002 12.5992 19.5302 12.5992 19.2002V12.6002H19.1992C19.5292 12.6002 19.7992 12.3302 19.7992 12.0002C19.7992 11.6702 19.5292 11.4002 19.1992 11.4002H12.5992V4.8002Z", fill: "currentColor" }));
function i$(r) {
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
      label: /* @__PURE__ */ V(Tg, { title: c.tooltip, children: /* @__PURE__ */ va(m1, { vertical: !0, gap: "middle", justify: "center", children: [
        /* @__PURE__ */ va("span", { className: "navigationCreate__itemTitle", children: [
          c.title,
          c.isLoading && /* @__PURE__ */ V(hA, { className: "navigationCreate__itemLoading", size: "small" }),
          d && /* @__PURE__ */ V(r$, { className: "navigationCreate__lockIcon" })
        ] }),
        /* @__PURE__ */ V("span", { className: "navigationCreate__itemDescription", children: c.description })
      ] }) })
    };
  });
  return /* @__PURE__ */ V(Go, { children: /* @__PURE__ */ V(
    Yg,
    {
      className: "globalNavigation__item globalNavigation__item--createNew",
      items: [
        {
          key: "NavigationCreate",
          popupClassName: "globalNavigation__popup globalNavigation__popup--navigationCreate",
          icon: /* @__PURE__ */ V(Go, { className: "navigationCreate__popupButtonWrapper", style: { pointerEvents: "none" }, children: /* @__PURE__ */ V(rp, { className: "navigationCreate__popupButton", icon: /* @__PURE__ */ V(a$, { className: "navigationCreate__popupIcon" }) }) }),
          children: o
        }
      ],
      expandIcon: null
    }
  ) });
}
function o$(r = "") {
  var u;
  const o = new RegExp(
    "(?:[\\W\\d]*\\b)*([A-Za-z])\\w*\\b(?:.*\\s(\\w)[\\w-]*$)?",
    "i"
  );
  return (u = r.replace(o, "$1$2")) == null ? void 0 : u.toUpperCase();
}
const l$ = (r, o) => {
  let u;
  return (...c) => {
    window.clearTimeout(u), u = window.setTimeout(() => {
      r(...c);
    }, o);
  };
}, u$ = () => /* @__PURE__ */ V(Go, { children: /* @__PURE__ */ V(h1, { description: "No results found", imageStyle: { height: "60px" } }) }), s$ = ({ signoutOptions: r }) => {
  var o;
  return /* @__PURE__ */ V(
    rp,
    {
      className: "workspaceSelector__signoutButton",
      type: "primary",
      onClick: (u) => {
        r == null || r.onSignout();
      },
      children: (o = r == null ? void 0 : r.label) != null ? o : "Sign Out of mParticle"
    }
  );
}, c$ = ({
  onSearch: r,
  searchTerm: o
}) => /* @__PURE__ */ V(Ko, { children: /* @__PURE__ */ V(
  Nf,
  {
    placeholder: "Search",
    className: "workspaceSelector__searchInput",
    onChange: r,
    value: o,
    onClick: (u) => {
      u.preventDefault(), u.stopPropagation();
    }
  }
) });
function f$(r) {
  const [o, u] = bi(""), [c, d] = bi(r.orgs);
  Wo(() => {
    d(r.orgs);
  }, r.orgs);
  const m = Nl(l$(d, 200), []), h = Wv(
    () => P(
      /* currentFilteredOrgs */
    ),
    c
  ), C = {
    key: "search",
    className: "workspaceSelector__search",
    label: /* @__PURE__ */ V(c$, { onSearch: F, searchTerm: o })
  }, x = Ma({
    key: "signout",
    className: "workspaceSelector__signout",
    label: /* @__PURE__ */ V(s$, { signoutOptions: r.signoutOptions })
  }), E = {
    key: "no-results",
    className: "workspaceSelector__noResults",
    label: /* @__PURE__ */ V(u$, {})
  }, _ = [
    ...!!o && !c.length ? [E] : h,
    C,
    r.signoutOptions ? x.current : null
  ], N = r.orgs.flatMap((W) => {
    let $ = [];
    const { accounts: z } = W;
    if (z) {
      const I = z.flatMap(({ workspaces: U }) => U);
      $ = $.concat(I);
    }
    return $;
  }).find((W) => W.isActive), D = [
    {
      key: "WorkspaceSelector",
      icon: /* @__PURE__ */ V(p1, { className: "workspaceSelector__avatar", children: o$(N == null ? void 0 : N.label) }),
      popupClassName: "workspaceSelector",
      children: _
    }
  ];
  return /* @__PURE__ */ V(
    Yg,
    {
      className: "globalNavigation__menu globalNavigation__item globalNavigation__item--workspaceSelector",
      items: D,
      onOpenChange: L,
      expandIcon: null
    }
  );
  function P() {
    return c.reduce((W, $) => (W.push({
      type: "org",
      className: "workspaceSelector__orgName" + ($.label ? "" : " u-display-none"),
      label: $.label,
      id: $.id,
      key: $.id,
      accounts: $.accounts,
      // todo: these are ending up in the html as attributes..
      workspaces: $.accounts.flatMap((z) => z.workspaces)
    }), $.accounts.forEach((z) => {
      W.push({
        type: "account",
        className: "workspaceSelector__accountName" + (z.label ? "" : " u-display-none"),
        label: z.label,
        id: z.id,
        key: z.id,
        workspaces: z.workspaces
      }), z.workspaces.forEach((I) => {
        W.push({
          type: "workspace",
          className: "workspaceSelector__workspaceName" + (I.isActive ? " workspaceSelector__workspaceName--active" : ""),
          label: I.label,
          id: I.id,
          key: I.id,
          onClick: I.onClick
        });
      });
    }), W), []);
  }
  function F(W) {
    const $ = W.target.value.toLowerCase();
    if (u($), $) {
      const I = z();
      m(I);
    } else
      d(r.orgs);
    function z() {
      return r.orgs.reduce((U, Y) => {
        if (I(Y))
          U.push(Y);
        else {
          const q = Me({}, Y);
          q.accounts = [], Y.accounts.forEach((ne) => {
            const oe = Me({}, ne);
            oe.workspaces = [], I(ne) ? q.accounts.push(ne) : (ne.workspaces.forEach((re) => {
              I(re) && oe.workspaces.push(re);
            }), oe.workspaces.length && q.accounts.push(oe));
          }), q.accounts.length && U.push(q);
        }
        return U;
      }, []);
      function I(U) {
        return !!U.label && U.label.toString().toLowerCase().includes($) || !!U.id && U.id.toString().toLowerCase().includes($);
      }
    }
  }
  function L() {
    u(""), d(r.orgs);
  }
}
const s1 = (r, o) => {
  console.log("getParentKey from:", r);
  let u;
  for (let c = 0; c < o.length; c++) {
    const d = o[c];
    d.children && (d.children.some((m) => m.key === r) ? u = d.key : s1(r, d.children) && (u = s1(r, d.children)));
  }
  return u;
};
function d$(r) {
  var _, N;
  const [o, u] = bi(""), c = Wv(() => {
    console.log("Generating searchableData from the original tree: ", r.treeData);
    const D = [], P = (F) => {
      for (let L = 0; L < F.length; L++) {
        const W = F[L], { key: $ } = W;
        D.push({ key: $, title: $ }), W.children && P(W.children);
      }
    };
    return P(r.treeData), console.log("Searchable data generated:", D), D;
  }, [r.treeData]), [d, m] = bi(
    /* @__PURE__ */ new Set([...c.map((D) => D.key)])
  ), h = (D) => {
    const { value: P } = D.target;
    console.log("Search is changing. We need to update current tree to match it", P);
    const F = c.map((W) => W.title.indexOf(P) > -1 || String(W.key).indexOf(P) > -1 ? s1(W.key, r.treeData) : null);
    console.log("Mapped keys from the original based on search:", F);
    const L = /* @__PURE__ */ new Set([
      ...F.filter((W, $, z) => !!(W && z.indexOf(W) === $))
    ]);
    console.log("keys we should keep in the tree:", L), m(L), u(P);
  }, C = Wv(() => {
    console.log("currentShownKeys has changed, we need to recalculate treeData", d);
    const D = (P) => P.filter((F) => F.children ? d.has(F.key) : !0).map((F) => F.children ? { title: F.title, key: F.key, disabled: !0, children: D(F.children) } : {
      title: F.title,
      key: F.key
    });
    return D(r.treeData);
  }, [d]), x = {
    key: "signout",
    className: "accountSelector__signout",
    label: /* @__PURE__ */ V(
      rp,
      {
        className: "workspaceSelector__signoutButton",
        type: "primary",
        onClick: (D) => {
          var P;
          (P = r.signoutOptions) == null || P.onSignout();
        },
        children: (N = (_ = r.signoutOptions) == null ? void 0 : _.label) != null ? N : "Sign Out of mParticle"
      }
    )
  }, k = [
    {
      key: "AccountSelector",
      // icon: <Avatar className="accountSelector__avatar">{getInitials(activeWorkspace?.label)}</Avatar>,
      icon: /* @__PURE__ */ V(p1, { className: "accountSelector__avatar", children: "WS" }),
      popupClassName: "accountSelector",
      children: [
        {
          key: "search",
          className: "workspaceSelector__search",
          label: /* @__PURE__ */ V(
            Nf,
            {
              placeholder: "Search",
              className: "workspaceSelector__searchInput",
              onChange: h,
              value: o,
              onClick: (D) => {
                D.preventDefault(), D.stopPropagation();
              }
            }
          )
        },
        {
          key: "SearchableTree",
          className: "accountSelector__content",
          label: /* @__PURE__ */ va(Ko, { children: [
            C.length === 0 && /* @__PURE__ */ V(Go, { children: /* @__PURE__ */ V(XT, { className: "accountSelector__noResults", status: "info", title: "No results found" }) }),
            /* @__PURE__ */ V(
              fA,
              {
                defaultExpandAll: !0,
                treeData: C,
                className: "accountSelector__searchableTree",
                switcherIcon: !1,
                onClick: (D, { title: P, key: F, active: L }) => r.onClick(
                  {
                    title: String(P),
                    key: String(F),
                    active: L
                  },
                  D
                )
              }
            )
          ] })
        },
        r.signoutOptions ? x : null
      ]
    }
  ];
  return /* @__PURE__ */ V(
    Yg,
    {
      className: "globalNavigation__menu globalNavigation__item globalNavigation__item--accountSelector",
      items: k,
      expandIcon: null,
      openKeys: ["AccountSelector"]
    }
  );
}
const v$ = (r) => /* @__PURE__ */ T.createElement("svg", Me({ id: "mpLogo", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 202.8 169", xmlSpace: "preserve" }, r), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "135.2,126.7 135.2,169 202.8,126.7 202.8,84.5" }), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "67.6,126.7 67.6,169 135.2,126.7 135.2,84.5" }), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "0,126.7 0,169 67.6,126.7 67.6,84.5" }), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "202.8,0 135.2,42.2 135.2,84.5 202.8,42.2" }), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "135.2,0 67.6,42.2 67.6,84.5 135.2,42.2" }), /* @__PURE__ */ T.createElement("polygon", { fill: "currentColor", points: "67.6,0 0,42.2 0,84.5 67.6,42.2" })), p$ = 90, iU = (r) => /* @__PURE__ */ V(Rf, { className: "globalNavigation", children: /* @__PURE__ */ V(Rf.Sider, { className: "globalNavigation__sider", width: p$, children: /* @__PURE__ */ va(m1, { vertical: !0, justify: "space-between", style: { height: "100%" }, children: [
  /* @__PURE__ */ va("div", { children: [
    /* @__PURE__ */ V(Z4, Me({}, r.logo)),
    /* @__PURE__ */ va(Go, { vertical: !0, children: [
      r.onSearchClick && /* @__PURE__ */ V(e$, { onClick: r.onSearchClick }),
      r.createItems && /* @__PURE__ */ V(i$, { createItems: r.createItems })
    ] }),
    /* @__PURE__ */ V(u1, { items: r.tools })
  ] }),
  /* @__PURE__ */ va("div", { children: [
    /* @__PURE__ */ V(u1, { items: r.management }),
    r.orgs && /* @__PURE__ */ V(f$, { orgs: r.orgs, signoutOptions: r.signoutOptions }),
    r.accountSwitcher && /* @__PURE__ */ V(
      d$,
      {
        treeData: r.accountSwitcher,
        signoutOptions: r.signoutOptions,
        onClick: (o) => alert(`Clicked on: ${o.title}`)
      }
    ),
    !r.hideMpHome && /* @__PURE__ */ V(Tg, { title: "mParticle Overview", placement: "right", children: /* @__PURE__ */ V(
      Go,
      {
        className: "globalNavigation__mpHome",
        onClick: () => {
          r.onMpHomeClick();
        },
        children: /* @__PURE__ */ V(v$, { className: "globalNavigation__mpSvg" })
      }
    ) })
  ] })
] }) }) });
export {
  rU as Affix,
  yA as Alert,
  eU as Anchor,
  aU as App,
  O$ as AutoComplete,
  p1 as Avatar,
  dA as Badge,
  wA as Breadcrumb,
  rp as Button,
  P$ as Calendar,
  QT as Card,
  U$ as Carousel,
  v1 as Cascader,
  Go as Center,
  uA as Checkbox,
  uU as Col,
  A$ as Collapse,
  x$ as ColorPicker,
  Qe as ConfigProvider,
  R$ as DatePicker,
  vA as Descriptions,
  Z$ as Divider,
  q$ as Drawer,
  EA as Dropdown,
  h1 as Empty,
  m1 as Flex,
  S$ as FloatButton,
  Au as Form,
  p$ as GlobalNavWidth,
  iU as GlobalNavigation,
  sU as Grid,
  H$ as Image,
  Nf as Input,
  _$ as InputNumber,
  Rf as Layout,
  pA as List,
  X$ as LoadingModal,
  lA as Mentions,
  Yg as Menu,
  nU as MenuItem,
  Q$ as Message,
  gA as Modal,
  Y$ as Notification,
  tU as Pagination,
  G$ as Popconfirm,
  V$ as Popover,
  W$ as Progress,
  F$ as QRCode,
  YT as Radio,
  C$ as Rate,
  XT as Result,
  cU as Row,
  I$ as Segmented,
  w$ as Select,
  mA as Skeleton,
  T$ as Slider,
  CA as Space,
  hA as Spin,
  j$ as Statistic,
  J$ as Steps,
  k$ as Switch,
  B$ as Table,
  z$ as Tabs,
  sA as Tag,
  N$ as TimePicker,
  L$ as Timeline,
  Tg as Tooltip,
  $$ as Tour,
  D$ as Transfer,
  fA as Tree,
  E$ as TreeSelect,
  M$ as Upload,
  K$ as Watermark
};