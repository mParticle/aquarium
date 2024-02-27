var JO = Object.defineProperty, e8 = Object.defineProperties;
var t8 = Object.getOwnPropertyDescriptors;
var TT = Object.getOwnPropertySymbols;
var n8 = Object.prototype.hasOwnProperty, r8 = Object.prototype.propertyIsEnumerable;
var RT = (i, l, u) => l in i ? JO(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, ke = (i, l) => {
  for (var u in l || (l = {}))
    n8.call(l, u) && RT(i, u, l[u]);
  if (TT)
    for (var u of TT(l))
      r8.call(l, u) && RT(i, u, l[u]);
  return i;
}, oo = (i, l) => e8(i, t8(l));
import { jsx as B, Fragment as Du, jsxs as Ri } from "react/jsx-runtime";
import { ConfigProvider as $R, Button as FR, FloatButton as a8, Rate as i8, Form as Au, TreeSelect as o8, Select as l8, Mentions as jR, Radio as vE, ColorPicker as u8, Slider as s8, Cascader as u1, DatePicker as c8, Checkbox as VR, Input as Ph, InputNumber as f8, Switch as d8, Upload as v8, AutoComplete as p8, TimePicker as h8, Transfer as m8, Collapse as g8, Timeline as y8, Calendar as S8, Segmented as C8, Tabs as b8, Tag as BR, Tour as E8, Carousel as w8, Tooltip as x8, Statistic as T8, Tree as R8, Image as k8, QRCode as _8, Badge as WR, Card as pE, Avatar as KR, Descriptions as GR, Table as M8, Empty as hE, Popover as O8, List as YR, Progress as N8, Result as D8, Spin as L8, Skeleton as A8, Watermark as z8, Popconfirm as P8, Drawer as H8, Modal as U8, notification as I8, Alert as QR, message as $8, Flex as F8, Divider as j8, Space as V8, Layout as Hh, Steps as B8, Anchor as W8, Dropdown as XR, Breadcrumb as qR, Pagination as K8, Menu as G8, Affix as Y8, App as Q8 } from "antd";
import { Col as uH, Grid as sH, Row as cH } from "antd";
import * as w from "react";
import _i, { useEffect as Ll, useState as Al, useMemo as Rb, useCallback as _u, useRef as ki, useLayoutEffect as X8, useImperativeHandle as ZR, createContext as s1, useContext as zs, forwardRef as q8, Fragment as Z8, createElement as J8 } from "react";
const eN = {
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
}, Ge = (i) => /* @__PURE__ */ B($R, oo(ke({}, i), { theme: eN })), c1 = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(FR, oo(ke({}, i), { children: i.children })) });
c1.Group = FR.Group;
const dP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(a8, ke({}, i)) }), vP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(i8, ke({}, i)) }), Us = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Au, oo(ke({}, i), { children: i.children })) });
Us.useForm = Au.useForm;
Us.useWatch = Au.useWatch;
Us.useFormInstance = Au.useFormInstance;
Us.Item = Au.Item;
Us.List = Au.List;
Us.displayName = Au.displayName;
Us.Provider = Au.Provider;
Us.ErrorList = Au.ErrorList;
const pP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(o8, ke({}, i)) }), hP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(l8, ke({}, i)) }), tN = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(jR, ke({}, i)) });
tN.getMentions = jR.getMentions;
const JR = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(vE, ke({}, i)) });
JR.Group = vE.Group;
JR.Button = vE.Button;
const mP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(u8, ke({}, i)) }), gP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(s8, ke({}, i)) }), mE = (i) => /* @__PURE__ */ B($R, { children: /* @__PURE__ */ B(u1, ke({}, i)) });
mE.Panel = u1.Panel;
mE.SHOW_PARENT = u1.SHOW_PARENT;
mE.SHOW_CHILD = u1.SHOW_CHILD;
const yP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(c8, ke({}, i)) }), nN = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(VR, ke({}, i)) });
nN.Group = VR.Group;
const Uh = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Ph, ke({}, i)) });
Uh.Group = Ph.Group;
Uh.Password = Ph.Password;
Uh.Search = Ph.Search;
Uh.TextArea = Ph.TextArea;
const SP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(f8, ke({}, i)) }), CP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(d8, ke({}, i)) }), bP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(v8, ke({}, i)) }), EP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(p8, ke({}, i)) }), wP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(h8, ke({}, i)) }), xP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(m8, ke({}, i)) }), TP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(g8, ke({}, i)) }), RP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(y8, ke({}, i)) }), kP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(S8, ke({}, i)) }), _P = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(C8, ke({}, i)) }), MP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(b8, ke({}, i)) }), rN = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(BR, ke({}, i)) }), aN = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(BR.CheckableTag, ke({}, i)) });
rN.CheckableTag = aN;
const OP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(E8, ke({}, i)) }), NP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(w8, ke({}, i)) }), f1 = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(x8, oo(ke({}, i), { children: /* @__PURE__ */ B(Du, { children: i.children }) })) }), DP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(T8, ke({}, i)) }), LP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(R8, ke({}, i)) }), AP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(k8, ke({}, i)) }), zP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(_8, ke({}, i)) }), iN = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(WR, ke({}, i)) });
iN.Ribbon = WR.Ribbon;
const e5 = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(pE, ke({}, i)) });
e5.Meta = pE.Meta;
e5.Grid = pE.Grid;
const t5 = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(KR, ke({}, i)) });
t5.Group = KR.Group;
const oN = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(GR, ke({}, i)) });
oN.Item = GR.Item;
const PP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(M8, ke({}, i)) }), gE = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(hE, ke({}, i)) });
gE.PRESENTED_IMAGE_DEFAULT = hE.PRESENTED_IMAGE_DEFAULT;
gE.PRESENTED_IMAGE_SIMPLE = hE.PRESENTED_IMAGE_SIMPLE;
const HP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(O8, oo(ke({}, i), { children: /* @__PURE__ */ B(Du, { children: i.children }) })) }), lN = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(YR, ke({}, i)) });
lN.Item = YR.Item;
const UP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(N8, ke({}, i)) }), uN = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(D8, ke({}, i)) }), sN = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(L8, ke({}, i)) }), cN = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(A8, oo(ke({}, i), { active: !0, style: ke({ width: "100%" }, i.style) })) }), IP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(z8, ke({}, i)) }), $P = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(P8, oo(ke({}, i), { children: /* @__PURE__ */ B(Du, { children: i.children }) })) }), FP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(H8, ke({}, i)) }), fN = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(U8, ke({}, i)) }), jP = (i) => {
  const [l, u] = I8.useNotification();
  return /* @__PURE__ */ Ri(Ge, { children: [
    u,
    /* @__PURE__ */ B("span", { onClick: () => {
      l.open(ke({}, i));
    }, children: i.children })
  ] });
}, dN = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(QR, ke({}, i)) });
dN.ErrorBoundary = QR.ErrorBoundary;
const VP = (i) => {
  const [l, u] = $8.useMessage();
  return /* @__PURE__ */ Ri(Ge, { children: [
    u,
    /* @__PURE__ */ B("span", { onClick: () => {
      l.open(ke({}, i));
    }, children: i.children })
  ] });
}, vN = (i) => {
  Ll(i, []);
};
function pN(i) {
  const [l, u] = Al(!0), [f, p] = Al(!1), [y, h] = Al(void 0);
  return vN(() => {
    i().then((x) => {
      h(x);
    }).catch(() => {
      p(!0);
    }).finally(() => {
      u(!1);
    });
  }), [l, f, y];
}
function BP(i) {
  const [l, u, f] = pN(i.fetchData);
  return /* @__PURE__ */ B(Du, { children: /* @__PURE__ */ Ri(fN, oo(ke({}, i), { children: [
    l && /* @__PURE__ */ B(cN, {}),
    u && /* @__PURE__ */ B(uN, { status: "error", title: "Error Loading" }),
    !l && !u && i.children(f)
  ] })) });
}
const yE = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(F8, ke({}, i)) }), Lu = (i) => /* @__PURE__ */ B(Du, { children: /* @__PURE__ */ B(yE, oo(ke({ align: "center", justify: "center" }, i), { children: i.children })) }), WP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(j8, ke({}, i)) }), hN = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(V8, ke({}, i)) }), qd = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Hh, ke({}, i)) });
qd.Sider = Hh.Sider;
qd.Footer = Hh.Footer;
qd.Content = Hh.Content;
qd.Header = Hh.Header;
const KP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(B8, ke({}, i)) }), GP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(W8, ke({}, i)) }), mN = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(XR, oo(ke({}, i), { children: i.children })) });
mN.Button = XR.Button;
const gN = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(qR, ke({}, i)) });
gN.Item = qR.Item;
const YP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(K8, ke({}, i)) });
function n5(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var r5 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(i) {
  (function() {
    var l = {}.hasOwnProperty;
    function u() {
      for (var y = "", h = 0; h < arguments.length; h++) {
        var x = arguments[h];
        x && (y = p(y, f(x)));
      }
      return y;
    }
    function f(y) {
      if (typeof y == "string" || typeof y == "number")
        return y;
      if (typeof y != "object")
        return "";
      if (Array.isArray(y))
        return u.apply(null, y);
      if (y.toString !== Object.prototype.toString && !y.toString.toString().includes("[native code]"))
        return y.toString();
      var h = "";
      for (var x in y)
        l.call(y, x) && y[x] && (h = p(h, x));
      return h;
    }
    function p(y, h) {
      return h ? y ? y + " " + h : y + h : y;
    }
    i.exports ? (u.default = u, i.exports = u) : window.classNames = u;
  })();
})(r5);
var yN = r5.exports;
const Fn = /* @__PURE__ */ n5(yN);
function bn() {
  return bn = Object.assign ? Object.assign.bind() : function(i) {
    for (var l = 1; l < arguments.length; l++) {
      var u = arguments[l];
      for (var f in u)
        Object.prototype.hasOwnProperty.call(u, f) && (i[f] = u[f]);
    }
    return i;
  }, bn.apply(this, arguments);
}
function cr(i) {
  "@babel/helpers - typeof";
  return cr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
    return typeof l;
  } : function(l) {
    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
  }, cr(i);
}
function SN(i, l) {
  if (cr(i) != "object" || !i)
    return i;
  var u = i[Symbol.toPrimitive];
  if (u !== void 0) {
    var f = u.call(i, l || "default");
    if (cr(f) != "object")
      return f;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (l === "string" ? String : Number)(i);
}
function a5(i) {
  var l = SN(i, "string");
  return cr(l) == "symbol" ? l : String(l);
}
function tt(i, l, u) {
  return l = a5(l), l in i ? Object.defineProperty(i, l, {
    value: u,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[l] = u, i;
}
function kT(i, l) {
  var u = Object.keys(i);
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(i);
    l && (f = f.filter(function(p) {
      return Object.getOwnPropertyDescriptor(i, p).enumerable;
    })), u.push.apply(u, f);
  }
  return u;
}
function Re(i) {
  for (var l = 1; l < arguments.length; l++) {
    var u = arguments[l] != null ? arguments[l] : {};
    l % 2 ? kT(Object(u), !0).forEach(function(f) {
      tt(i, f, u[f]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(u)) : kT(Object(u)).forEach(function(f) {
      Object.defineProperty(i, f, Object.getOwnPropertyDescriptor(u, f));
    });
  }
  return i;
}
function kb(i, l) {
  (l == null || l > i.length) && (l = i.length);
  for (var u = 0, f = new Array(l); u < l; u++)
    f[u] = i[u];
  return f;
}
function CN(i) {
  if (Array.isArray(i))
    return kb(i);
}
function i5(i) {
  if (typeof Symbol != "undefined" && i[Symbol.iterator] != null || i["@@iterator"] != null)
    return Array.from(i);
}
function SE(i, l) {
  if (i) {
    if (typeof i == "string")
      return kb(i, l);
    var u = Object.prototype.toString.call(i).slice(8, -1);
    if (u === "Object" && i.constructor && (u = i.constructor.name), u === "Map" || u === "Set")
      return Array.from(i);
    if (u === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))
      return kb(i, l);
  }
}
function bN() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tr(i) {
  return CN(i) || i5(i) || SE(i) || bN();
}
function o5(i) {
  if (Array.isArray(i))
    return i;
}
function EN(i, l) {
  var u = i == null ? null : typeof Symbol != "undefined" && i[Symbol.iterator] || i["@@iterator"];
  if (u != null) {
    var f, p, y, h, x = [], T = !0, R = !1;
    try {
      if (y = (u = u.call(i)).next, l === 0) {
        if (Object(u) !== u)
          return;
        T = !1;
      } else
        for (; !(T = (f = y.call(u)).done) && (x.push(f.value), x.length !== l); T = !0)
          ;
    } catch (O) {
      R = !0, p = O;
    } finally {
      try {
        if (!T && u.return != null && (h = u.return(), Object(h) !== h))
          return;
      } finally {
        if (R)
          throw p;
      }
    }
    return x;
  }
}
function l5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _e(i, l) {
  return o5(i) || EN(i, l) || SE(i, l) || l5();
}
function wN(i, l) {
  if (i == null)
    return {};
  var u = {}, f = Object.keys(i), p, y;
  for (y = 0; y < f.length; y++)
    p = f[y], !(l.indexOf(p) >= 0) && (u[p] = i[p]);
  return u;
}
function tr(i, l) {
  if (i == null)
    return {};
  var u = wN(i, l), f, p;
  if (Object.getOwnPropertySymbols) {
    var y = Object.getOwnPropertySymbols(i);
    for (p = 0; p < y.length; p++)
      f = y[p], !(l.indexOf(f) >= 0) && Object.prototype.propertyIsEnumerable.call(i, f) && (u[f] = i[f]);
  }
  return u;
}
var _b = { exports: {} }, Tn = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _T;
function xN() {
  if (_T)
    return Tn;
  _T = 1;
  var i = Symbol.for("react.element"), l = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), h = Symbol.for("react.context"), x = Symbol.for("react.server_context"), T = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), z;
  z = Symbol.for("react.module.reference");
  function H(A) {
    if (typeof A == "object" && A !== null) {
      var q = A.$$typeof;
      switch (q) {
        case i:
          switch (A = A.type, A) {
            case u:
            case p:
            case f:
            case R:
            case O:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case x:
                case h:
                case T:
                case N:
                case _:
                case y:
                  return A;
                default:
                  return q;
              }
          }
        case l:
          return q;
      }
    }
  }
  return Tn.ContextConsumer = h, Tn.ContextProvider = y, Tn.Element = i, Tn.ForwardRef = T, Tn.Fragment = u, Tn.Lazy = N, Tn.Memo = _, Tn.Portal = l, Tn.Profiler = p, Tn.StrictMode = f, Tn.Suspense = R, Tn.SuspenseList = O, Tn.isAsyncMode = function() {
    return !1;
  }, Tn.isConcurrentMode = function() {
    return !1;
  }, Tn.isContextConsumer = function(A) {
    return H(A) === h;
  }, Tn.isContextProvider = function(A) {
    return H(A) === y;
  }, Tn.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === i;
  }, Tn.isForwardRef = function(A) {
    return H(A) === T;
  }, Tn.isFragment = function(A) {
    return H(A) === u;
  }, Tn.isLazy = function(A) {
    return H(A) === N;
  }, Tn.isMemo = function(A) {
    return H(A) === _;
  }, Tn.isPortal = function(A) {
    return H(A) === l;
  }, Tn.isProfiler = function(A) {
    return H(A) === p;
  }, Tn.isStrictMode = function(A) {
    return H(A) === f;
  }, Tn.isSuspense = function(A) {
    return H(A) === R;
  }, Tn.isSuspenseList = function(A) {
    return H(A) === O;
  }, Tn.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === u || A === p || A === f || A === R || A === O || A === L || typeof A == "object" && A !== null && (A.$$typeof === N || A.$$typeof === _ || A.$$typeof === y || A.$$typeof === h || A.$$typeof === T || A.$$typeof === z || A.getModuleId !== void 0);
  }, Tn.typeOf = H, Tn;
}
var Rn = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var MT;
function TN() {
  return MT || (MT = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Symbol.for("react.element"), l = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), h = Symbol.for("react.context"), x = Symbol.for("react.server_context"), T = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), O = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), z = !1, H = !1, A = !1, q = !1, V = !1, U;
    U = Symbol.for("react.module.reference");
    function I(Se) {
      return !!(typeof Se == "string" || typeof Se == "function" || Se === u || Se === p || V || Se === f || Se === R || Se === O || q || Se === L || z || H || A || typeof Se == "object" && Se !== null && (Se.$$typeof === N || Se.$$typeof === _ || Se.$$typeof === y || Se.$$typeof === h || Se.$$typeof === T || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Se.$$typeof === U || Se.getModuleId !== void 0));
    }
    function W(Se) {
      if (typeof Se == "object" && Se !== null) {
        var Et = Se.$$typeof;
        switch (Et) {
          case i:
            var Ct = Se.type;
            switch (Ct) {
              case u:
              case p:
              case f:
              case R:
              case O:
                return Ct;
              default:
                var kt = Ct && Ct.$$typeof;
                switch (kt) {
                  case x:
                  case h:
                  case T:
                  case N:
                  case _:
                  case y:
                    return kt;
                  default:
                    return Et;
                }
            }
          case l:
            return Et;
        }
      }
    }
    var re = h, G = y, se = i, Te = T, le = u, ge = N, Ee = _, ne = l, fe = p, Ce = f, we = R, Ne = O, ee = !1, de = !1;
    function ae(Se) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ze(Se) {
      return de || (de = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function De(Se) {
      return W(Se) === h;
    }
    function ft(Se) {
      return W(Se) === y;
    }
    function dt(Se) {
      return typeof Se == "object" && Se !== null && Se.$$typeof === i;
    }
    function At(Se) {
      return W(Se) === T;
    }
    function it(Se) {
      return W(Se) === u;
    }
    function Rt(Se) {
      return W(Se) === N;
    }
    function st(Se) {
      return W(Se) === _;
    }
    function Mt(Se) {
      return W(Se) === l;
    }
    function Gt(Se) {
      return W(Se) === p;
    }
    function Ze(Se) {
      return W(Se) === f;
    }
    function Ft(Se) {
      return W(Se) === R;
    }
    function Ot(Se) {
      return W(Se) === O;
    }
    Rn.ContextConsumer = re, Rn.ContextProvider = G, Rn.Element = se, Rn.ForwardRef = Te, Rn.Fragment = le, Rn.Lazy = ge, Rn.Memo = Ee, Rn.Portal = ne, Rn.Profiler = fe, Rn.StrictMode = Ce, Rn.Suspense = we, Rn.SuspenseList = Ne, Rn.isAsyncMode = ae, Rn.isConcurrentMode = ze, Rn.isContextConsumer = De, Rn.isContextProvider = ft, Rn.isElement = dt, Rn.isForwardRef = At, Rn.isFragment = it, Rn.isLazy = Rt, Rn.isMemo = st, Rn.isPortal = Mt, Rn.isProfiler = Gt, Rn.isStrictMode = Ze, Rn.isSuspense = Ft, Rn.isSuspenseList = Ot, Rn.isValidElementType = I, Rn.typeOf = W;
  }()), Rn;
}
process.env.NODE_ENV === "production" ? _b.exports = xN() : _b.exports = TN();
var By = _b.exports;
function kh(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = [];
  return _i.Children.forEach(i, function(f) {
    f == null && !l.keepEmpty || (Array.isArray(f) ? u = u.concat(kh(f)) : By.isFragment(f) && f.props ? u = u.concat(kh(f.props.children, l)) : u.push(f));
  }), u;
}
var Mb = {}, CE = [], RN = function(l) {
  CE.push(l);
};
function Zd(i, l) {
  if (process.env.NODE_ENV !== "production" && !i && console !== void 0) {
    var u = CE.reduce(function(f, p) {
      return p(f != null ? f : "", "warning");
    }, l);
    u && console.error("Warning: ".concat(u));
  }
}
function kN(i, l) {
  if (process.env.NODE_ENV !== "production" && !i && console !== void 0) {
    var u = CE.reduce(function(f, p) {
      return p(f != null ? f : "", "note");
    }, l);
    u && console.warn("Note: ".concat(u));
  }
}
function u5() {
  Mb = {};
}
function s5(i, l, u) {
  !l && !Mb[u] && (i(!1, u), Mb[u] = !0);
}
function ii(i, l) {
  s5(Zd, i, l);
}
function _N(i, l) {
  s5(kN, i, l);
}
ii.preMessage = RN;
ii.resetWarned = u5;
ii.noteOnce = _N;
var Ob = { exports: {} }, xi = {}, Dy = { exports: {} }, ub = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var OT;
function MN() {
  return OT || (OT = 1, function(i) {
    function l(ee, de) {
      var ae = ee.length;
      ee.push(de);
      e:
        for (; 0 < ae; ) {
          var ze = ae - 1 >>> 1, De = ee[ze];
          if (0 < p(De, de))
            ee[ze] = de, ee[ae] = De, ae = ze;
          else
            break e;
        }
    }
    function u(ee) {
      return ee.length === 0 ? null : ee[0];
    }
    function f(ee) {
      if (ee.length === 0)
        return null;
      var de = ee[0], ae = ee.pop();
      if (ae !== de) {
        ee[0] = ae;
        e:
          for (var ze = 0, De = ee.length, ft = De >>> 1; ze < ft; ) {
            var dt = 2 * (ze + 1) - 1, At = ee[dt], it = dt + 1, Rt = ee[it];
            if (0 > p(At, ae))
              it < De && 0 > p(Rt, At) ? (ee[ze] = Rt, ee[it] = ae, ze = it) : (ee[ze] = At, ee[dt] = ae, ze = dt);
            else if (it < De && 0 > p(Rt, ae))
              ee[ze] = Rt, ee[it] = ae, ze = it;
            else
              break e;
          }
      }
      return de;
    }
    function p(ee, de) {
      var ae = ee.sortIndex - de.sortIndex;
      return ae !== 0 ? ae : ee.id - de.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var y = performance;
      i.unstable_now = function() {
        return y.now();
      };
    } else {
      var h = Date, x = h.now();
      i.unstable_now = function() {
        return h.now() - x;
      };
    }
    var T = [], R = [], O = 1, _ = null, N = 3, L = !1, z = !1, H = !1, A = typeof setTimeout == "function" ? setTimeout : null, q = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate != "undefined" ? setImmediate : null;
    typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function U(ee) {
      for (var de = u(R); de !== null; ) {
        if (de.callback === null)
          f(R);
        else if (de.startTime <= ee)
          f(R), de.sortIndex = de.expirationTime, l(T, de);
        else
          break;
        de = u(R);
      }
    }
    function I(ee) {
      if (H = !1, U(ee), !z)
        if (u(T) !== null)
          z = !0, we(W);
        else {
          var de = u(R);
          de !== null && Ne(I, de.startTime - ee);
        }
    }
    function W(ee, de) {
      z = !1, H && (H = !1, q(se), se = -1), L = !0;
      var ae = N;
      try {
        for (U(de), _ = u(T); _ !== null && (!(_.expirationTime > de) || ee && !ge()); ) {
          var ze = _.callback;
          if (typeof ze == "function") {
            _.callback = null, N = _.priorityLevel;
            var De = ze(_.expirationTime <= de);
            de = i.unstable_now(), typeof De == "function" ? _.callback = De : _ === u(T) && f(T), U(de);
          } else
            f(T);
          _ = u(T);
        }
        if (_ !== null)
          var ft = !0;
        else {
          var dt = u(R);
          dt !== null && Ne(I, dt.startTime - de), ft = !1;
        }
        return ft;
      } finally {
        _ = null, N = ae, L = !1;
      }
    }
    var re = !1, G = null, se = -1, Te = 5, le = -1;
    function ge() {
      return !(i.unstable_now() - le < Te);
    }
    function Ee() {
      if (G !== null) {
        var ee = i.unstable_now();
        le = ee;
        var de = !0;
        try {
          de = G(!0, ee);
        } finally {
          de ? ne() : (re = !1, G = null);
        }
      } else
        re = !1;
    }
    var ne;
    if (typeof V == "function")
      ne = function() {
        V(Ee);
      };
    else if (typeof MessageChannel != "undefined") {
      var fe = new MessageChannel(), Ce = fe.port2;
      fe.port1.onmessage = Ee, ne = function() {
        Ce.postMessage(null);
      };
    } else
      ne = function() {
        A(Ee, 0);
      };
    function we(ee) {
      G = ee, re || (re = !0, ne());
    }
    function Ne(ee, de) {
      se = A(function() {
        ee(i.unstable_now());
      }, de);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(ee) {
      ee.callback = null;
    }, i.unstable_continueExecution = function() {
      z || L || (z = !0, we(W));
    }, i.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Te = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return N;
    }, i.unstable_getFirstCallbackNode = function() {
      return u(T);
    }, i.unstable_next = function(ee) {
      switch (N) {
        case 1:
        case 2:
        case 3:
          var de = 3;
          break;
        default:
          de = N;
      }
      var ae = N;
      N = de;
      try {
        return ee();
      } finally {
        N = ae;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(ee, de) {
      switch (ee) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          ee = 3;
      }
      var ae = N;
      N = ee;
      try {
        return de();
      } finally {
        N = ae;
      }
    }, i.unstable_scheduleCallback = function(ee, de, ae) {
      var ze = i.unstable_now();
      switch (typeof ae == "object" && ae !== null ? (ae = ae.delay, ae = typeof ae == "number" && 0 < ae ? ze + ae : ze) : ae = ze, ee) {
        case 1:
          var De = -1;
          break;
        case 2:
          De = 250;
          break;
        case 5:
          De = 1073741823;
          break;
        case 4:
          De = 1e4;
          break;
        default:
          De = 5e3;
      }
      return De = ae + De, ee = { id: O++, callback: de, priorityLevel: ee, startTime: ae, expirationTime: De, sortIndex: -1 }, ae > ze ? (ee.sortIndex = ae, l(R, ee), u(T) === null && ee === u(R) && (H ? (q(se), se = -1) : H = !0, Ne(I, ae - ze))) : (ee.sortIndex = De, l(T, ee), z || L || (z = !0, we(W))), ee;
    }, i.unstable_shouldYield = ge, i.unstable_wrapCallback = function(ee) {
      var de = N;
      return function() {
        var ae = N;
        N = de;
        try {
          return ee.apply(this, arguments);
        } finally {
          N = ae;
        }
      };
    };
  }(ub)), ub;
}
var sb = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var NT;
function ON() {
  return NT || (NT = 1, function(i) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var l = !1, u = !1, f = 5;
      function p(he, Ue) {
        var We = he.length;
        he.push(Ue), x(he, Ue, We);
      }
      function y(he) {
        return he.length === 0 ? null : he[0];
      }
      function h(he) {
        if (he.length === 0)
          return null;
        var Ue = he[0], We = he.pop();
        return We !== Ue && (he[0] = We, T(he, We, 0)), Ue;
      }
      function x(he, Ue, We) {
        for (var zt = We; zt > 0; ) {
          var Pt = zt - 1 >>> 1, pt = he[Pt];
          if (R(pt, Ue) > 0)
            he[Pt] = Ue, he[zt] = pt, zt = Pt;
          else
            return;
        }
      }
      function T(he, Ue, We) {
        for (var zt = We, Pt = he.length, pt = Pt >>> 1; zt < pt; ) {
          var ht = (zt + 1) * 2 - 1, Mn = he[ht], Ht = ht + 1, Zt = he[Ht];
          if (R(Mn, Ue) < 0)
            Ht < Pt && R(Zt, Mn) < 0 ? (he[zt] = Zt, he[Ht] = Ue, zt = Ht) : (he[zt] = Mn, he[ht] = Ue, zt = ht);
          else if (Ht < Pt && R(Zt, Ue) < 0)
            he[zt] = Zt, he[Ht] = Ue, zt = Ht;
          else
            return;
        }
      }
      function R(he, Ue) {
        var We = he.sortIndex - Ue.sortIndex;
        return We !== 0 ? We : he.id - Ue.id;
      }
      var O = 1, _ = 2, N = 3, L = 4, z = 5;
      function H(he, Ue) {
      }
      var A = typeof performance == "object" && typeof performance.now == "function";
      if (A) {
        var q = performance;
        i.unstable_now = function() {
          return q.now();
        };
      } else {
        var V = Date, U = V.now();
        i.unstable_now = function() {
          return V.now() - U;
        };
      }
      var I = 1073741823, W = -1, re = 250, G = 5e3, se = 1e4, Te = I, le = [], ge = [], Ee = 1, ne = null, fe = N, Ce = !1, we = !1, Ne = !1, ee = typeof setTimeout == "function" ? setTimeout : null, de = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate != "undefined" ? setImmediate : null;
      typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ze(he) {
        for (var Ue = y(ge); Ue !== null; ) {
          if (Ue.callback === null)
            h(ge);
          else if (Ue.startTime <= he)
            h(ge), Ue.sortIndex = Ue.expirationTime, p(le, Ue);
          else
            return;
          Ue = y(ge);
        }
      }
      function De(he) {
        if (Ne = !1, ze(he), !we)
          if (y(le) !== null)
            we = !0, It(ft);
          else {
            var Ue = y(ge);
            Ue !== null && kn(De, Ue.startTime - he);
          }
      }
      function ft(he, Ue) {
        we = !1, Ne && (Ne = !1, _n()), Ce = !0;
        var We = fe;
        try {
          var zt;
          if (!u)
            return dt(he, Ue);
        } finally {
          ne = null, fe = We, Ce = !1;
        }
      }
      function dt(he, Ue) {
        var We = Ue;
        for (ze(We), ne = y(le); ne !== null && !l && !(ne.expirationTime > We && (!he || Qe())); ) {
          var zt = ne.callback;
          if (typeof zt == "function") {
            ne.callback = null, fe = ne.priorityLevel;
            var Pt = ne.expirationTime <= We, pt = zt(Pt);
            We = i.unstable_now(), typeof pt == "function" ? ne.callback = pt : ne === y(le) && h(le), ze(We);
          } else
            h(le);
          ne = y(le);
        }
        if (ne !== null)
          return !0;
        var ht = y(ge);
        return ht !== null && kn(De, ht.startTime - We), !1;
      }
      function At(he, Ue) {
        switch (he) {
          case O:
          case _:
          case N:
          case L:
          case z:
            break;
          default:
            he = N;
        }
        var We = fe;
        fe = he;
        try {
          return Ue();
        } finally {
          fe = We;
        }
      }
      function it(he) {
        var Ue;
        switch (fe) {
          case O:
          case _:
          case N:
            Ue = N;
            break;
          default:
            Ue = fe;
            break;
        }
        var We = fe;
        fe = Ue;
        try {
          return he();
        } finally {
          fe = We;
        }
      }
      function Rt(he) {
        var Ue = fe;
        return function() {
          var We = fe;
          fe = Ue;
          try {
            return he.apply(this, arguments);
          } finally {
            fe = We;
          }
        };
      }
      function st(he, Ue, We) {
        var zt = i.unstable_now(), Pt;
        if (typeof We == "object" && We !== null) {
          var pt = We.delay;
          typeof pt == "number" && pt > 0 ? Pt = zt + pt : Pt = zt;
        } else
          Pt = zt;
        var ht;
        switch (he) {
          case O:
            ht = W;
            break;
          case _:
            ht = re;
            break;
          case z:
            ht = Te;
            break;
          case L:
            ht = se;
            break;
          case N:
          default:
            ht = G;
            break;
        }
        var Mn = Pt + ht, Ht = {
          id: Ee++,
          callback: Ue,
          priorityLevel: he,
          startTime: Pt,
          expirationTime: Mn,
          sortIndex: -1
        };
        return Pt > zt ? (Ht.sortIndex = Pt, p(ge, Ht), y(le) === null && Ht === y(ge) && (Ne ? _n() : Ne = !0, kn(De, Pt - zt))) : (Ht.sortIndex = Mn, p(le, Ht), !we && !Ce && (we = !0, It(ft))), Ht;
      }
      function Mt() {
      }
      function Gt() {
        !we && !Ce && (we = !0, It(ft));
      }
      function Ze() {
        return y(le);
      }
      function Ft(he) {
        he.callback = null;
      }
      function Ot() {
        return fe;
      }
      var Se = !1, Et = null, Ct = -1, kt = f, Wt = -1;
      function Qe() {
        var he = i.unstable_now() - Wt;
        return !(he < kt);
      }
      function wt() {
      }
      function vt(he) {
        if (he < 0 || he > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        he > 0 ? kt = Math.floor(1e3 / he) : kt = f;
      }
      var ln = function() {
        if (Et !== null) {
          var he = i.unstable_now();
          Wt = he;
          var Ue = !0, We = !0;
          try {
            We = Et(Ue, he);
          } finally {
            We ? Je() : (Se = !1, Et = null);
          }
        } else
          Se = !1;
      }, Je;
      if (typeof ae == "function")
        Je = function() {
          ae(ln);
        };
      else if (typeof MessageChannel != "undefined") {
        var Xt = new MessageChannel(), qt = Xt.port2;
        Xt.port1.onmessage = ln, Je = function() {
          qt.postMessage(null);
        };
      } else
        Je = function() {
          ee(ln, 0);
        };
      function It(he) {
        Et = he, Se || (Se = !0, Je());
      }
      function kn(he, Ue) {
        Ct = ee(function() {
          he(i.unstable_now());
        }, Ue);
      }
      function _n() {
        de(Ct), Ct = -1;
      }
      var cn = wt, fn = null;
      i.unstable_IdlePriority = z, i.unstable_ImmediatePriority = O, i.unstable_LowPriority = L, i.unstable_NormalPriority = N, i.unstable_Profiling = fn, i.unstable_UserBlockingPriority = _, i.unstable_cancelCallback = Ft, i.unstable_continueExecution = Gt, i.unstable_forceFrameRate = vt, i.unstable_getCurrentPriorityLevel = Ot, i.unstable_getFirstCallbackNode = Ze, i.unstable_next = it, i.unstable_pauseExecution = Mt, i.unstable_requestPaint = cn, i.unstable_runWithPriority = At, i.unstable_scheduleCallback = st, i.unstable_shouldYield = Qe, i.unstable_wrapCallback = Rt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(sb)), sb;
}
var DT;
function c5() {
  return DT || (DT = 1, process.env.NODE_ENV === "production" ? Dy.exports = MN() : Dy.exports = ON()), Dy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var LT;
function NN() {
  if (LT)
    return xi;
  LT = 1;
  var i = _i, l = c5();
  function u(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, s = 1; s < arguments.length; s++)
      r += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var f = /* @__PURE__ */ new Set(), p = {};
  function y(n, r) {
    h(n, r), h(n + "Capture", r);
  }
  function h(n, r) {
    for (p[n] = r, n = 0; n < r.length; n++)
      f.add(r[n]);
  }
  var x = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), T = Object.prototype.hasOwnProperty, R = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, O = {}, _ = {};
  function N(n) {
    return T.call(_, n) ? !0 : T.call(O, n) ? !1 : R.test(n) ? _[n] = !0 : (O[n] = !0, !1);
  }
  function L(n, r, s, d) {
    if (s !== null && s.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return d ? !1 : s !== null ? !s.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function z(n, r, s, d) {
    if (r === null || typeof r == "undefined" || L(n, r, s, d))
      return !0;
    if (d)
      return !1;
    if (s !== null)
      switch (s.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function H(n, r, s, d, m, S, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = d, this.attributeNamespace = m, this.mustUseProperty = s, this.propertyName = n, this.type = r, this.sanitizeURL = S, this.removeEmptyString = E;
  }
  var A = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    A[n] = new H(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    A[r] = new H(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    A[n] = new H(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    A[n] = new H(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    A[n] = new H(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    A[n] = new H(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    A[n] = new H(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    A[n] = new H(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    A[n] = new H(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var q = /[\-:]([a-z])/g;
  function V(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      q,
      V
    );
    A[r] = new H(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(q, V);
    A[r] = new H(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(q, V);
    A[r] = new H(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    A[n] = new H(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), A.xlinkHref = new H("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    A[n] = new H(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function U(n, r, s, d) {
    var m = A.hasOwnProperty(r) ? A[r] : null;
    (m !== null ? m.type !== 0 : d || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (z(r, s, m, d) && (s = null), d || m === null ? N(r) && (s === null ? n.removeAttribute(r) : n.setAttribute(r, "" + s)) : m.mustUseProperty ? n[m.propertyName] = s === null ? m.type === 3 ? !1 : "" : s : (r = m.attributeName, d = m.attributeNamespace, s === null ? n.removeAttribute(r) : (m = m.type, s = m === 3 || m === 4 && s === !0 ? "" : "" + s, d ? n.setAttributeNS(d, r, s) : n.setAttribute(r, s))));
  }
  var I = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, W = Symbol.for("react.element"), re = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), se = Symbol.for("react.strict_mode"), Te = Symbol.for("react.profiler"), le = Symbol.for("react.provider"), ge = Symbol.for("react.context"), Ee = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), fe = Symbol.for("react.suspense_list"), Ce = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), Ne = Symbol.for("react.offscreen"), ee = Symbol.iterator;
  function de(n) {
    return n === null || typeof n != "object" ? null : (n = ee && n[ee] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ae = Object.assign, ze;
  function De(n) {
    if (ze === void 0)
      try {
        throw Error();
      } catch (s) {
        var r = s.stack.trim().match(/\n( *(at )?)/);
        ze = r && r[1] || "";
      }
    return `
` + ze + n;
  }
  var ft = !1;
  function dt(n, r) {
    if (!n || ft)
      return "";
    ft = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (te) {
            var d = te;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (te) {
            d = te;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (te) {
          d = te;
        }
        n();
      }
    } catch (te) {
      if (te && d && typeof te.stack == "string") {
        for (var m = te.stack.split(`
`), S = d.stack.split(`
`), E = m.length - 1, D = S.length - 1; 1 <= E && 0 <= D && m[E] !== S[D]; )
          D--;
        for (; 1 <= E && 0 <= D; E--, D--)
          if (m[E] !== S[D]) {
            if (E !== 1 || D !== 1)
              do
                if (E--, D--, 0 > D || m[E] !== S[D]) {
                  var P = `
` + m[E].replace(" at new ", " at ");
                  return n.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", n.displayName)), P;
                }
              while (1 <= E && 0 <= D);
            break;
          }
      }
    } finally {
      ft = !1, Error.prepareStackTrace = s;
    }
    return (n = n ? n.displayName || n.name : "") ? De(n) : "";
  }
  function At(n) {
    switch (n.tag) {
      case 5:
        return De(n.type);
      case 16:
        return De("Lazy");
      case 13:
        return De("Suspense");
      case 19:
        return De("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = dt(n.type, !1), n;
      case 11:
        return n = dt(n.type.render, !1), n;
      case 1:
        return n = dt(n.type, !0), n;
      default:
        return "";
    }
  }
  function it(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case G:
        return "Fragment";
      case re:
        return "Portal";
      case Te:
        return "Profiler";
      case se:
        return "StrictMode";
      case ne:
        return "Suspense";
      case fe:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case ge:
          return (n.displayName || "Context") + ".Consumer";
        case le:
          return (n._context.displayName || "Context") + ".Provider";
        case Ee:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Ce:
          return r = n.displayName || null, r !== null ? r : it(n.type) || "Memo";
        case we:
          r = n._payload, n = n._init;
          try {
            return it(n(r));
          } catch (s) {
          }
      }
    return null;
  }
  function Rt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return it(r);
      case 8:
        return r === se ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function st(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Mt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Gt(n) {
    var r = Mt(n) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), d = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof s != "undefined" && typeof s.get == "function" && typeof s.set == "function") {
      var m = s.get, S = s.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return m.call(this);
      }, set: function(E) {
        d = "" + E, S.call(this, E);
      } }), Object.defineProperty(n, r, { enumerable: s.enumerable }), { getValue: function() {
        return d;
      }, setValue: function(E) {
        d = "" + E;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Ze(n) {
    n._valueTracker || (n._valueTracker = Gt(n));
  }
  function Ft(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var s = r.getValue(), d = "";
    return n && (d = Mt(n) ? n.checked ? "true" : "false" : n.value), n = d, n !== s ? (r.setValue(n), !0) : !1;
  }
  function Ot(n) {
    if (n = n || (typeof document != "undefined" ? document : void 0), typeof n == "undefined")
      return null;
    try {
      return n.activeElement || n.body;
    } catch (r) {
      return n.body;
    }
  }
  function Se(n, r) {
    var s = r.checked;
    return ae({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s != null ? s : n._wrapperState.initialChecked });
  }
  function Et(n, r) {
    var s = r.defaultValue == null ? "" : r.defaultValue, d = r.checked != null ? r.checked : r.defaultChecked;
    s = st(r.value != null ? r.value : s), n._wrapperState = { initialChecked: d, initialValue: s, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Ct(n, r) {
    r = r.checked, r != null && U(n, "checked", r, !1);
  }
  function kt(n, r) {
    Ct(n, r);
    var s = st(r.value), d = r.type;
    if (s != null)
      d === "number" ? (s === 0 && n.value === "" || n.value != s) && (n.value = "" + s) : n.value !== "" + s && (n.value = "" + s);
    else if (d === "submit" || d === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Qe(n, r.type, s) : r.hasOwnProperty("defaultValue") && Qe(n, r.type, st(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Wt(n, r, s) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var d = r.type;
      if (!(d !== "submit" && d !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, s || r === n.value || (n.value = r), n.defaultValue = r;
    }
    s = n.name, s !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, s !== "" && (n.name = s);
  }
  function Qe(n, r, s) {
    (r !== "number" || Ot(n.ownerDocument) !== n) && (s == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + s && (n.defaultValue = "" + s));
  }
  var wt = Array.isArray;
  function vt(n, r, s, d) {
    if (n = n.options, r) {
      r = {};
      for (var m = 0; m < s.length; m++)
        r["$" + s[m]] = !0;
      for (s = 0; s < n.length; s++)
        m = r.hasOwnProperty("$" + n[s].value), n[s].selected !== m && (n[s].selected = m), m && d && (n[s].defaultSelected = !0);
    } else {
      for (s = "" + st(s), r = null, m = 0; m < n.length; m++) {
        if (n[m].value === s) {
          n[m].selected = !0, d && (n[m].defaultSelected = !0);
          return;
        }
        r !== null || n[m].disabled || (r = n[m]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function ln(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(u(91));
    return ae({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Je(n, r) {
    var s = r.value;
    if (s == null) {
      if (s = r.children, r = r.defaultValue, s != null) {
        if (r != null)
          throw Error(u(92));
        if (wt(s)) {
          if (1 < s.length)
            throw Error(u(93));
          s = s[0];
        }
        r = s;
      }
      r == null && (r = ""), s = r;
    }
    n._wrapperState = { initialValue: st(s) };
  }
  function Xt(n, r) {
    var s = st(r.value), d = st(r.defaultValue);
    s != null && (s = "" + s, s !== n.value && (n.value = s), r.defaultValue == null && n.defaultValue !== s && (n.defaultValue = s)), d != null && (n.defaultValue = "" + d);
  }
  function qt(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function It(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function kn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? It(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var _n, cn = function(n) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(r, s, d, m) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, s, d, m);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (_n = _n || document.createElement("div"), _n.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = _n.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function fn(n, r) {
    if (r) {
      var s = n.firstChild;
      if (s && s === n.lastChild && s.nodeType === 3) {
        s.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var he = {
    animationIterationCount: !0,
    aspectRatio: !0,
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
  }, Ue = ["Webkit", "ms", "Moz", "O"];
  Object.keys(he).forEach(function(n) {
    Ue.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), he[r] = he[n];
    });
  });
  function We(n, r, s) {
    return r == null || typeof r == "boolean" || r === "" ? "" : s || typeof r != "number" || r === 0 || he.hasOwnProperty(n) && he[n] ? ("" + r).trim() : r + "px";
  }
  function zt(n, r) {
    n = n.style;
    for (var s in r)
      if (r.hasOwnProperty(s)) {
        var d = s.indexOf("--") === 0, m = We(s, r[s], d);
        s === "float" && (s = "cssFloat"), d ? n.setProperty(s, m) : n[s] = m;
      }
  }
  var Pt = ae({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function pt(n, r) {
    if (r) {
      if (Pt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(u(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(u(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(u(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(u(62));
    }
  }
  function ht(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
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
  var Mn = null;
  function Ht(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Zt = null, $t = null, tn = null;
  function Kt(n) {
    if (n = nc(n)) {
      if (typeof Zt != "function")
        throw Error(u(280));
      var r = n.stateNode;
      r && (r = nt(r), Zt(n.stateNode, n.type, r));
    }
  }
  function Jt(n) {
    $t ? tn ? tn.push(n) : tn = [n] : $t = n;
  }
  function xt() {
    if ($t) {
      var n = $t, r = tn;
      if (tn = $t = null, Kt(n), r)
        for (n = 0; n < r.length; n++)
          Kt(r[n]);
    }
  }
  function jt(n, r) {
    return n(r);
  }
  function Le() {
  }
  var Ye = !1;
  function Ut(n, r, s) {
    if (Ye)
      return n(r, s);
    Ye = !0;
    try {
      return jt(n, r, s);
    } finally {
      Ye = !1, ($t !== null || tn !== null) && (Le(), xt());
    }
  }
  function En(n, r) {
    var s = n.stateNode;
    if (s === null)
      return null;
    var d = nt(s);
    if (d === null)
      return null;
    s = d[r];
    e:
      switch (r) {
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
          (d = !d.disabled) || (n = n.type, d = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !d;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (s && typeof s != "function")
      throw Error(u(231, r, typeof s));
    return s;
  }
  var nr = !1;
  if (x)
    try {
      var On = {};
      Object.defineProperty(On, "passive", { get: function() {
        nr = !0;
      } }), window.addEventListener("test", On, On), window.removeEventListener("test", On, On);
    } catch (n) {
      nr = !1;
    }
  function Qr(n, r, s, d, m, S, E, D, P) {
    var te = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(s, te);
    } catch (pe) {
      this.onError(pe);
    }
  }
  var rr = !1, ar = null, yr = !1, Ca = null, Ln = { onError: function(n) {
    rr = !0, ar = n;
  } };
  function fr(n, r, s, d, m, S, E, D, P) {
    rr = !1, ar = null, Qr.apply(Ln, arguments);
  }
  function Rr(n, r, s, d, m, S, E, D, P) {
    if (fr.apply(this, arguments), rr) {
      if (rr) {
        var te = ar;
        rr = !1, ar = null;
      } else
        throw Error(u(198));
      yr || (yr = !0, Ca = te);
    }
  }
  function dr(n) {
    var r = n, s = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (s = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? s : null;
  }
  function Ia(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function oa(n) {
    if (dr(n) !== n)
      throw Error(u(188));
  }
  function An(n) {
    var r = n.alternate;
    if (!r) {
      if (r = dr(n), r === null)
        throw Error(u(188));
      return r !== n ? null : n;
    }
    for (var s = n, d = r; ; ) {
      var m = s.return;
      if (m === null)
        break;
      var S = m.alternate;
      if (S === null) {
        if (d = m.return, d !== null) {
          s = d;
          continue;
        }
        break;
      }
      if (m.child === S.child) {
        for (S = m.child; S; ) {
          if (S === s)
            return oa(m), n;
          if (S === d)
            return oa(m), r;
          S = S.sibling;
        }
        throw Error(u(188));
      }
      if (s.return !== d.return)
        s = m, d = S;
      else {
        for (var E = !1, D = m.child; D; ) {
          if (D === s) {
            E = !0, s = m, d = S;
            break;
          }
          if (D === d) {
            E = !0, d = m, s = S;
            break;
          }
          D = D.sibling;
        }
        if (!E) {
          for (D = S.child; D; ) {
            if (D === s) {
              E = !0, s = S, d = m;
              break;
            }
            if (D === d) {
              E = !0, d = S, s = m;
              break;
            }
            D = D.sibling;
          }
          if (!E)
            throw Error(u(189));
        }
      }
      if (s.alternate !== d)
        throw Error(u(190));
    }
    if (s.tag !== 3)
      throw Error(u(188));
    return s.stateNode.current === s ? n : r;
  }
  function $a(n) {
    return n = An(n), n !== null ? Zo(n) : null;
  }
  function Zo(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Zo(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Bn = l.unstable_scheduleCallback, fo = l.unstable_cancelCallback, zl = l.unstable_shouldYield, vo = l.unstable_requestPaint, dn = l.unstable_now, Fa = l.unstable_getCurrentPriorityLevel, Xr = l.unstable_ImmediatePriority, Nt = l.unstable_UserBlockingPriority, kr = l.unstable_NormalPriority, Vi = l.unstable_LowPriority, la = l.unstable_IdlePriority, Hr = null, ir = null;
  function Mi(n) {
    if (ir && typeof ir.onCommitFiberRoot == "function")
      try {
        ir.onCommitFiberRoot(Hr, n, void 0, (n.current.flags & 128) === 128);
      } catch (r) {
      }
  }
  var Xn = Math.clz32 ? Math.clz32 : Oi, ba = Math.log, po = Math.LN2;
  function Oi(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ba(n) / po | 0) | 0;
  }
  var ua = 64, ja = 4194304;
  function un(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function _t(n, r) {
    var s = n.pendingLanes;
    if (s === 0)
      return 0;
    var d = 0, m = n.suspendedLanes, S = n.pingedLanes, E = s & 268435455;
    if (E !== 0) {
      var D = E & ~m;
      D !== 0 ? d = un(D) : (S &= E, S !== 0 && (d = un(S)));
    } else
      E = s & ~m, E !== 0 ? d = un(E) : S !== 0 && (d = un(S));
    if (d === 0)
      return 0;
    if (r !== 0 && r !== d && !(r & m) && (m = d & -d, S = r & -r, m >= S || m === 16 && (S & 4194240) !== 0))
      return r;
    if (d & 4 && (d |= s & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= d; 0 < r; )
        s = 31 - Xn(r), m = 1 << s, d |= n[s], r &= ~m;
    return d;
  }
  function vn(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function qn(n, r) {
    for (var s = n.suspendedLanes, d = n.pingedLanes, m = n.expirationTimes, S = n.pendingLanes; 0 < S; ) {
      var E = 31 - Xn(S), D = 1 << E, P = m[E];
      P === -1 ? (!(D & s) || D & d) && (m[E] = vn(D, r)) : P <= r && (n.expiredLanes |= D), S &= ~D;
    }
  }
  function or(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Va() {
    var n = ua;
    return ua <<= 1, !(ua & 4194240) && (ua = 64), n;
  }
  function oi(n) {
    for (var r = [], s = 0; 31 > s; s++)
      r.push(n);
    return r;
  }
  function Ba(n, r, s) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Xn(r), n[r] = s;
  }
  function Jo(n, r) {
    var s = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var d = n.eventTimes;
    for (n = n.expirationTimes; 0 < s; ) {
      var m = 31 - Xn(s), S = 1 << m;
      r[m] = 0, d[m] = -1, n[m] = -1, s &= ~S;
    }
  }
  function Wa(n, r) {
    var s = n.entangledLanes |= r;
    for (n = n.entanglements; s; ) {
      var d = 31 - Xn(s), m = 1 << d;
      m & r | n[d] & r && (n[d] |= r), s &= ~m;
    }
  }
  var Vt = 0;
  function vr(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var ho, Ea, nn, mo, Bi, ct = !1, Ni = [], zn = null, qr = null, Zr = null, go = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Map(), be = [], gt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function sn(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        zn = null;
        break;
      case "dragenter":
      case "dragleave":
        qr = null;
        break;
      case "mouseover":
      case "mouseout":
        Zr = null;
        break;
      case "pointerover":
      case "pointerout":
        go.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Wn.delete(r.pointerId);
    }
  }
  function en(n, r, s, d, m, S) {
    return n === null || n.nativeEvent !== S ? (n = { blockedOn: r, domEventName: s, eventSystemFlags: d, nativeEvent: S, targetContainers: [m] }, r !== null && (r = nc(r), r !== null && Ea(r)), n) : (n.eventSystemFlags |= d, r = n.targetContainers, m !== null && r.indexOf(m) === -1 && r.push(m), n);
  }
  function gn(n, r, s, d, m) {
    switch (r) {
      case "focusin":
        return zn = en(zn, n, r, s, d, m), !0;
      case "dragenter":
        return qr = en(qr, n, r, s, d, m), !0;
      case "mouseover":
        return Zr = en(Zr, n, r, s, d, m), !0;
      case "pointerover":
        var S = m.pointerId;
        return go.set(S, en(go.get(S) || null, n, r, s, d, m)), !0;
      case "gotpointercapture":
        return S = m.pointerId, Wn.set(S, en(Wn.get(S) || null, n, r, s, d, m)), !0;
    }
    return !1;
  }
  function Pl(n) {
    var r = ui(n.target);
    if (r !== null) {
      var s = dr(r);
      if (s !== null) {
        if (r = s.tag, r === 13) {
          if (r = Ia(s), r !== null) {
            n.blockedOn = r, Bi(n.priority, function() {
              nn(s);
            });
            return;
          }
        } else if (r === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Wi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var s = ef(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (s === null) {
        s = n.nativeEvent;
        var d = new s.constructor(s.type, s);
        Mn = d, s.target.dispatchEvent(d), Mn = null;
      } else
        return r = nc(s), r !== null && Ea(r), n.blockedOn = s, !1;
      r.shift();
    }
    return !0;
  }
  function zu(n, r, s) {
    Wi(n) && s.delete(r);
  }
  function Hl() {
    ct = !1, zn !== null && Wi(zn) && (zn = null), qr !== null && Wi(qr) && (qr = null), Zr !== null && Wi(Zr) && (Zr = null), go.forEach(zu), Wn.forEach(zu);
  }
  function Is(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ct || (ct = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Hl)));
  }
  function $s(n) {
    function r(m) {
      return Is(m, n);
    }
    if (0 < Ni.length) {
      Is(Ni[0], n);
      for (var s = 1; s < Ni.length; s++) {
        var d = Ni[s];
        d.blockedOn === n && (d.blockedOn = null);
      }
    }
    for (zn !== null && Is(zn, n), qr !== null && Is(qr, n), Zr !== null && Is(Zr, n), go.forEach(r), Wn.forEach(r), s = 0; s < be.length; s++)
      d = be[s], d.blockedOn === n && (d.blockedOn = null);
    for (; 0 < be.length && (s = be[0], s.blockedOn === null); )
      Pl(s), s.blockedOn === null && be.shift();
  }
  var Pu = I.ReactCurrentBatchConfig, Ul = !0;
  function Fh(n, r, s, d) {
    var m = Vt, S = Pu.transition;
    Pu.transition = null;
    try {
      Vt = 1, Jc(n, r, s, d);
    } finally {
      Vt = m, Pu.transition = S;
    }
  }
  function Zc(n, r, s, d) {
    var m = Vt, S = Pu.transition;
    Pu.transition = null;
    try {
      Vt = 4, Jc(n, r, s, d);
    } finally {
      Vt = m, Pu.transition = S;
    }
  }
  function Jc(n, r, s, d) {
    if (Ul) {
      var m = ef(n, r, s, d);
      if (m === null)
        vf(n, r, d, Fs, s), sn(n, d);
      else if (gn(m, n, r, s, d))
        d.stopPropagation();
      else if (sn(n, d), r & 4 && -1 < gt.indexOf(n)) {
        for (; m !== null; ) {
          var S = nc(m);
          if (S !== null && ho(S), S = ef(n, r, s, d), S === null && vf(n, r, d, Fs, s), S === m)
            break;
          m = S;
        }
        m !== null && d.stopPropagation();
      } else
        vf(n, r, d, null, s);
    }
  }
  var Fs = null;
  function ef(n, r, s, d) {
    if (Fs = null, n = Ht(d), n = ui(n), n !== null)
      if (r = dr(n), r === null)
        n = null;
      else if (s = r.tag, s === 13) {
        if (n = Ia(r), n !== null)
          return n;
        n = null;
      } else if (s === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Fs = n, null;
  }
  function ov(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Fa()) {
          case Xr:
            return 1;
          case Nt:
            return 4;
          case kr:
          case Vi:
            return 16;
          case la:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var yo = null, js = null, Vs = null;
  function lv() {
    if (Vs)
      return Vs;
    var n, r = js, s = r.length, d, m = "value" in yo ? yo.value : yo.textContent, S = m.length;
    for (n = 0; n < s && r[n] === m[n]; n++)
      ;
    var E = s - n;
    for (d = 1; d <= E && r[s - d] === m[S - d]; d++)
      ;
    return Vs = m.slice(n, 1 < d ? 1 - d : void 0);
  }
  function Hu(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Bs() {
    return !0;
  }
  function jh() {
    return !1;
  }
  function Ka(n) {
    function r(s, d, m, S, E) {
      this._reactName = s, this._targetInst = m, this.type = d, this.nativeEvent = S, this.target = E, this.currentTarget = null;
      for (var D in n)
        n.hasOwnProperty(D) && (s = n[D], this[D] = s ? s(S) : S[D]);
      return this.isDefaultPrevented = (S.defaultPrevented != null ? S.defaultPrevented : S.returnValue === !1) ? Bs : jh, this.isPropagationStopped = jh, this;
    }
    return ae(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = Bs);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = Bs);
    }, persist: function() {
    }, isPersistent: Bs }), r;
  }
  var el = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, tf = Ka(el), Uu = ae({}, el, { view: 0, detail: 0 }), Vh = Ka(Uu), nf, uv, Ws, _r = ae({}, Uu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: dv, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Ws && (Ws && n.type === "mousemove" ? (nf = n.screenX - Ws.screenX, uv = n.screenY - Ws.screenY) : uv = nf = 0, Ws = n), nf);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : uv;
  } }), rf = Ka(_r), Bh = ae({}, _r, { dataTransfer: 0 }), Wh = Ka(Bh), z1 = ae({}, Uu, { relatedTarget: 0 }), tl = Ka(z1), sv = ae({}, el, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Kh = Ka(sv), P1 = ae({}, el, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), H1 = Ka(P1), U1 = ae({}, el, { data: 0 }), cv = Ka(U1), fv = {
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
  }, Gh = {
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
  }, Yh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Qh(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Yh[n]) ? !!r[n] : !1;
  }
  function dv() {
    return Qh;
  }
  var So = ae({}, Uu, { key: function(n) {
    if (n.key) {
      var r = fv[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Hu(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Gh[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: dv, charCode: function(n) {
    return n.type === "keypress" ? Hu(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Hu(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), I1 = Ka(So), vv = ae({}, _r, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), af = Ka(vv), pv = ae({}, Uu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: dv }), $1 = Ka(pv), of = ae({}, el, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xh = Ka(of), wa = ae({}, _r, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Co = Ka(wa), pr = [9, 13, 27, 32], Di = x && "CompositionEvent" in window, Il = null;
  x && "documentMode" in document && (Il = document.documentMode);
  var lf = x && "TextEvent" in window && !Il, qh = x && (!Di || Il && 8 < Il && 11 >= Il), Iu = " ", Zh = !1;
  function Jh(n, r) {
    switch (n) {
      case "keyup":
        return pr.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function uf(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var $u = !1;
  function F1(n, r) {
    switch (n) {
      case "compositionend":
        return uf(r);
      case "keypress":
        return r.which !== 32 ? null : (Zh = !0, Iu);
      case "textInput":
        return n = r.data, n === Iu && Zh ? null : n;
      default:
        return null;
    }
  }
  function j1(n, r) {
    if ($u)
      return n === "compositionend" || !Di && Jh(n, r) ? (n = lv(), Vs = js = yo = null, $u = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return qh && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var em = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function tm(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!em[n.type] : r === "textarea";
  }
  function nm(n, r, s, d) {
    Jt(d), r = Js(r, "onChange"), 0 < r.length && (s = new tf("onChange", "change", null, s, d), n.push({ event: s, listeners: r }));
  }
  var Ks = null, Fu = null;
  function ju(n) {
    df(n, 0);
  }
  function Vu(n) {
    var r = Wu(n);
    if (Ft(r))
      return n;
  }
  function rm(n, r) {
    if (n === "change")
      return r;
  }
  var hv = !1;
  if (x) {
    var mv;
    if (x) {
      var gv = "oninput" in document;
      if (!gv) {
        var am = document.createElement("div");
        am.setAttribute("oninput", "return;"), gv = typeof am.oninput == "function";
      }
      mv = gv;
    } else
      mv = !1;
    hv = mv && (!document.documentMode || 9 < document.documentMode);
  }
  function im() {
    Ks && (Ks.detachEvent("onpropertychange", om), Fu = Ks = null);
  }
  function om(n) {
    if (n.propertyName === "value" && Vu(Fu)) {
      var r = [];
      nm(r, Fu, n, Ht(n)), Ut(ju, r);
    }
  }
  function V1(n, r, s) {
    n === "focusin" ? (im(), Ks = r, Fu = s, Ks.attachEvent("onpropertychange", om)) : n === "focusout" && im();
  }
  function B1(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Vu(Fu);
  }
  function W1(n, r) {
    if (n === "click")
      return Vu(r);
  }
  function lm(n, r) {
    if (n === "input" || n === "change")
      return Vu(r);
  }
  function K1(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var li = typeof Object.is == "function" ? Object.is : K1;
  function Gs(n, r) {
    if (li(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var s = Object.keys(n), d = Object.keys(r);
    if (s.length !== d.length)
      return !1;
    for (d = 0; d < s.length; d++) {
      var m = s[d];
      if (!T.call(r, m) || !li(n[m], r[m]))
        return !1;
    }
    return !0;
  }
  function um(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function sm(n, r) {
    var s = um(n);
    n = 0;
    for (var d; s; ) {
      if (s.nodeType === 3) {
        if (d = n + s.textContent.length, n <= r && d >= r)
          return { node: s, offset: r - n };
        n = d;
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
      s = um(s);
    }
  }
  function cm(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? cm(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function sf() {
    for (var n = window, r = Ot(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var s = typeof r.contentWindow.location.href == "string";
      } catch (d) {
        s = !1;
      }
      if (s)
        n = r.contentWindow;
      else
        break;
      r = Ot(n.document);
    }
    return r;
  }
  function bo(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function cf(n) {
    var r = sf(), s = n.focusedElem, d = n.selectionRange;
    if (r !== s && s && s.ownerDocument && cm(s.ownerDocument.documentElement, s)) {
      if (d !== null && bo(s)) {
        if (r = d.start, n = d.end, n === void 0 && (n = r), "selectionStart" in s)
          s.selectionStart = r, s.selectionEnd = Math.min(n, s.value.length);
        else if (n = (r = s.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var m = s.textContent.length, S = Math.min(d.start, m);
          d = d.end === void 0 ? S : Math.min(d.end, m), !n.extend && S > d && (m = d, d = S, S = m), m = sm(s, S);
          var E = sm(
            s,
            d
          );
          m && E && (n.rangeCount !== 1 || n.anchorNode !== m.node || n.anchorOffset !== m.offset || n.focusNode !== E.node || n.focusOffset !== E.offset) && (r = r.createRange(), r.setStart(m.node, m.offset), n.removeAllRanges(), S > d ? (n.addRange(r), n.extend(E.node, E.offset)) : (r.setEnd(E.node, E.offset), n.addRange(r)));
        }
      }
      for (r = [], n = s; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < r.length; s++)
        n = r[s], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var fm = x && "documentMode" in document && 11 >= document.documentMode, Li = null, yv = null, Ys = null, Sv = !1;
  function dm(n, r, s) {
    var d = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Sv || Li == null || Li !== Ot(d) || (d = Li, "selectionStart" in d && bo(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Ys && Gs(Ys, d) || (Ys = d, d = Js(yv, "onSelect"), 0 < d.length && (r = new tf("onSelect", "select", null, r, s), n.push({ event: r, listeners: d }), r.target = Li)));
  }
  function ff(n, r) {
    var s = {};
    return s[n.toLowerCase()] = r.toLowerCase(), s["Webkit" + n] = "webkit" + r, s["Moz" + n] = "moz" + r, s;
  }
  var $l = { animationend: ff("Animation", "AnimationEnd"), animationiteration: ff("Animation", "AnimationIteration"), animationstart: ff("Animation", "AnimationStart"), transitionend: ff("Transition", "TransitionEnd") }, Cv = {}, bv = {};
  x && (bv = document.createElement("div").style, "AnimationEvent" in window || (delete $l.animationend.animation, delete $l.animationiteration.animation, delete $l.animationstart.animation), "TransitionEvent" in window || delete $l.transitionend.transition);
  function Mr(n) {
    if (Cv[n])
      return Cv[n];
    if (!$l[n])
      return n;
    var r = $l[n], s;
    for (s in r)
      if (r.hasOwnProperty(s) && s in bv)
        return Cv[n] = r[s];
    return n;
  }
  var Ev = Mr("animationend"), vm = Mr("animationiteration"), pm = Mr("animationstart"), hm = Mr("transitionend"), mm = /* @__PURE__ */ new Map(), gm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Eo(n, r) {
    mm.set(n, r), y(r, [n]);
  }
  for (var Qs = 0; Qs < gm.length; Qs++) {
    var Fl = gm[Qs], G1 = Fl.toLowerCase(), Xs = Fl[0].toUpperCase() + Fl.slice(1);
    Eo(G1, "on" + Xs);
  }
  Eo(Ev, "onAnimationEnd"), Eo(vm, "onAnimationIteration"), Eo(pm, "onAnimationStart"), Eo("dblclick", "onDoubleClick"), Eo("focusin", "onFocus"), Eo("focusout", "onBlur"), Eo(hm, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), y("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), y("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), y("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), y("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), y("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), y("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Y1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));
  function ym(n, r, s) {
    var d = n.type || "unknown-event";
    n.currentTarget = s, Rr(d, r, void 0, n), n.currentTarget = null;
  }
  function df(n, r) {
    r = (r & 4) !== 0;
    for (var s = 0; s < n.length; s++) {
      var d = n[s], m = d.event;
      d = d.listeners;
      e: {
        var S = void 0;
        if (r)
          for (var E = d.length - 1; 0 <= E; E--) {
            var D = d[E], P = D.instance, te = D.currentTarget;
            if (D = D.listener, P !== S && m.isPropagationStopped())
              break e;
            ym(m, D, te), S = P;
          }
        else
          for (E = 0; E < d.length; E++) {
            if (D = d[E], P = D.instance, te = D.currentTarget, D = D.listener, P !== S && m.isPropagationStopped())
              break e;
            ym(m, D, te), S = P;
          }
      }
    }
    if (yr)
      throw n = Ca, yr = !1, Ca = null, n;
  }
  function Nn(n, r) {
    var s = r[Mv];
    s === void 0 && (s = r[Mv] = /* @__PURE__ */ new Set());
    var d = n + "__bubble";
    s.has(d) || (Sm(r, n, 2, !1), s.add(d));
  }
  function nl(n, r, s) {
    var d = 0;
    r && (d |= 4), Sm(s, n, d, r);
  }
  var wo = "_reactListening" + Math.random().toString(36).slice(2);
  function Bu(n) {
    if (!n[wo]) {
      n[wo] = !0, f.forEach(function(s) {
        s !== "selectionchange" && (Y1.has(s) || nl(s, !1, n), nl(s, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[wo] || (r[wo] = !0, nl("selectionchange", !1, r));
    }
  }
  function Sm(n, r, s, d) {
    switch (ov(r)) {
      case 1:
        var m = Fh;
        break;
      case 4:
        m = Zc;
        break;
      default:
        m = Jc;
    }
    s = m.bind(null, r, s, n), m = void 0, !nr || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (m = !0), d ? m !== void 0 ? n.addEventListener(r, s, { capture: !0, passive: m }) : n.addEventListener(r, s, !0) : m !== void 0 ? n.addEventListener(r, s, { passive: m }) : n.addEventListener(r, s, !1);
  }
  function vf(n, r, s, d, m) {
    var S = d;
    if (!(r & 1) && !(r & 2) && d !== null)
      e:
        for (; ; ) {
          if (d === null)
            return;
          var E = d.tag;
          if (E === 3 || E === 4) {
            var D = d.stateNode.containerInfo;
            if (D === m || D.nodeType === 8 && D.parentNode === m)
              break;
            if (E === 4)
              for (E = d.return; E !== null; ) {
                var P = E.tag;
                if ((P === 3 || P === 4) && (P = E.stateNode.containerInfo, P === m || P.nodeType === 8 && P.parentNode === m))
                  return;
                E = E.return;
              }
            for (; D !== null; ) {
              if (E = ui(D), E === null)
                return;
              if (P = E.tag, P === 5 || P === 6) {
                d = S = E;
                continue e;
              }
              D = D.parentNode;
            }
          }
          d = d.return;
        }
    Ut(function() {
      var te = S, pe = Ht(s), me = [];
      e: {
        var ve = mm.get(n);
        if (ve !== void 0) {
          var Pe = tf, je = n;
          switch (n) {
            case "keypress":
              if (Hu(s) === 0)
                break e;
            case "keydown":
            case "keyup":
              Pe = I1;
              break;
            case "focusin":
              je = "focus", Pe = tl;
              break;
            case "focusout":
              je = "blur", Pe = tl;
              break;
            case "beforeblur":
            case "afterblur":
              Pe = tl;
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
              Pe = rf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Pe = Wh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Pe = $1;
              break;
            case Ev:
            case vm:
            case pm:
              Pe = Kh;
              break;
            case hm:
              Pe = Xh;
              break;
            case "scroll":
              Pe = Vh;
              break;
            case "wheel":
              Pe = Co;
              break;
            case "copy":
            case "cut":
            case "paste":
              Pe = H1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Pe = af;
          }
          var Ke = (r & 4) !== 0, ur = !Ke && n === "scroll", K = Ke ? ve !== null ? ve + "Capture" : null : ve;
          Ke = [];
          for (var F = te, X; F !== null; ) {
            X = F;
            var xe = X.stateNode;
            if (X.tag === 5 && xe !== null && (X = xe, K !== null && (xe = En(F, K), xe != null && Ke.push(Zs(F, xe, X)))), ur)
              break;
            F = F.return;
          }
          0 < Ke.length && (ve = new Pe(ve, je, null, s, pe), me.push({ event: ve, listeners: Ke }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ve = n === "mouseover" || n === "pointerover", Pe = n === "mouseout" || n === "pointerout", ve && s !== Mn && (je = s.relatedTarget || s.fromElement) && (ui(je) || je[xo]))
            break e;
          if ((Pe || ve) && (ve = pe.window === pe ? pe : (ve = pe.ownerDocument) ? ve.defaultView || ve.parentWindow : window, Pe ? (je = s.relatedTarget || s.toElement, Pe = te, je = je ? ui(je) : null, je !== null && (ur = dr(je), je !== ur || je.tag !== 5 && je.tag !== 6) && (je = null)) : (Pe = null, je = te), Pe !== je)) {
            if (Ke = rf, xe = "onMouseLeave", K = "onMouseEnter", F = "mouse", (n === "pointerout" || n === "pointerover") && (Ke = af, xe = "onPointerLeave", K = "onPointerEnter", F = "pointer"), ur = Pe == null ? ve : Wu(Pe), X = je == null ? ve : Wu(je), ve = new Ke(xe, F + "leave", Pe, s, pe), ve.target = ur, ve.relatedTarget = X, xe = null, ui(pe) === te && (Ke = new Ke(K, F + "enter", je, s, pe), Ke.target = X, Ke.relatedTarget = ur, xe = Ke), ur = xe, Pe && je)
              t: {
                for (Ke = Pe, K = je, F = 0, X = Ke; X; X = jl(X))
                  F++;
                for (X = 0, xe = K; xe; xe = jl(xe))
                  X++;
                for (; 0 < F - X; )
                  Ke = jl(Ke), F--;
                for (; 0 < X - F; )
                  K = jl(K), X--;
                for (; F--; ) {
                  if (Ke === K || K !== null && Ke === K.alternate)
                    break t;
                  Ke = jl(Ke), K = jl(K);
                }
                Ke = null;
              }
            else
              Ke = null;
            Pe !== null && wv(me, ve, Pe, Ke, !1), je !== null && ur !== null && wv(me, ur, je, Ke, !0);
          }
        }
        e: {
          if (ve = te ? Wu(te) : window, Pe = ve.nodeName && ve.nodeName.toLowerCase(), Pe === "select" || Pe === "input" && ve.type === "file")
            var Xe = rm;
          else if (tm(ve))
            if (hv)
              Xe = lm;
            else {
              Xe = B1;
              var Ve = V1;
            }
          else
            (Pe = ve.nodeName) && Pe.toLowerCase() === "input" && (ve.type === "checkbox" || ve.type === "radio") && (Xe = W1);
          if (Xe && (Xe = Xe(n, te))) {
            nm(me, Xe, s, pe);
            break e;
          }
          Ve && Ve(n, ve, te), n === "focusout" && (Ve = ve._wrapperState) && Ve.controlled && ve.type === "number" && Qe(ve, "number", ve.value);
        }
        switch (Ve = te ? Wu(te) : window, n) {
          case "focusin":
            (tm(Ve) || Ve.contentEditable === "true") && (Li = Ve, yv = te, Ys = null);
            break;
          case "focusout":
            Ys = yv = Li = null;
            break;
          case "mousedown":
            Sv = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Sv = !1, dm(me, s, pe);
            break;
          case "selectionchange":
            if (fm)
              break;
          case "keydown":
          case "keyup":
            dm(me, s, pe);
        }
        var et;
        if (Di)
          e: {
            switch (n) {
              case "compositionstart":
                var St = "onCompositionStart";
                break e;
              case "compositionend":
                St = "onCompositionEnd";
                break e;
              case "compositionupdate":
                St = "onCompositionUpdate";
                break e;
            }
            St = void 0;
          }
        else
          $u ? Jh(n, s) && (St = "onCompositionEnd") : n === "keydown" && s.keyCode === 229 && (St = "onCompositionStart");
        St && (qh && s.locale !== "ko" && ($u || St !== "onCompositionStart" ? St === "onCompositionEnd" && $u && (et = lv()) : (yo = pe, js = "value" in yo ? yo.value : yo.textContent, $u = !0)), Ve = Js(te, St), 0 < Ve.length && (St = new cv(St, n, null, s, pe), me.push({ event: St, listeners: Ve }), et ? St.data = et : (et = uf(s), et !== null && (St.data = et)))), (et = lf ? F1(n, s) : j1(n, s)) && (te = Js(te, "onBeforeInput"), 0 < te.length && (pe = new cv("onBeforeInput", "beforeinput", null, s, pe), me.push({ event: pe, listeners: te }), pe.data = et));
      }
      df(me, r);
    });
  }
  function Zs(n, r, s) {
    return { instance: n, listener: r, currentTarget: s };
  }
  function Js(n, r) {
    for (var s = r + "Capture", d = []; n !== null; ) {
      var m = n, S = m.stateNode;
      m.tag === 5 && S !== null && (m = S, S = En(n, s), S != null && d.unshift(Zs(n, S, m)), S = En(n, r), S != null && d.push(Zs(n, S, m))), n = n.return;
    }
    return d;
  }
  function jl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function wv(n, r, s, d, m) {
    for (var S = r._reactName, E = []; s !== null && s !== d; ) {
      var D = s, P = D.alternate, te = D.stateNode;
      if (P !== null && P === d)
        break;
      D.tag === 5 && te !== null && (D = te, m ? (P = En(s, S), P != null && E.unshift(Zs(s, P, D))) : m || (P = En(s, S), P != null && E.push(Zs(s, P, D)))), s = s.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var xv = /\r\n?/g, Q1 = /\u0000|\uFFFD/g;
  function Tv(n) {
    return (typeof n == "string" ? n : "" + n).replace(xv, `
`).replace(Q1, "");
  }
  function pf(n, r, s) {
    if (r = Tv(r), Tv(n) !== r && s)
      throw Error(u(425));
  }
  function hf() {
  }
  var Rv = null, Vl = null;
  function ec(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Bl = typeof setTimeout == "function" ? setTimeout : void 0, Cm = typeof clearTimeout == "function" ? clearTimeout : void 0, kv = typeof Promise == "function" ? Promise : void 0, _v = typeof queueMicrotask == "function" ? queueMicrotask : typeof kv != "undefined" ? function(n) {
    return kv.resolve(null).then(n).catch(X1);
  } : Bl;
  function X1(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function rl(n, r) {
    var s = r, d = 0;
    do {
      var m = s.nextSibling;
      if (n.removeChild(s), m && m.nodeType === 8)
        if (s = m.data, s === "/$") {
          if (d === 0) {
            n.removeChild(m), $s(r);
            return;
          }
          d--;
        } else
          s !== "$" && s !== "$?" && s !== "$!" || d++;
      s = m;
    } while (s);
    $s(r);
  }
  function Ai(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function tc(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var s = n.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          s === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var al = Math.random().toString(36).slice(2), Ki = "__reactFiber$" + al, Wl = "__reactProps$" + al, xo = "__reactContainer$" + al, Mv = "__reactEvents$" + al, q1 = "__reactListeners$" + al, Ov = "__reactHandles$" + al;
  function ui(n) {
    var r = n[Ki];
    if (r)
      return r;
    for (var s = n.parentNode; s; ) {
      if (r = s[xo] || s[Ki]) {
        if (s = r.alternate, r.child !== null || s !== null && s.child !== null)
          for (n = tc(n); n !== null; ) {
            if (s = n[Ki])
              return s;
            n = tc(n);
          }
        return r;
      }
      n = s, s = n.parentNode;
    }
    return null;
  }
  function nc(n) {
    return n = n[Ki] || n[xo], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Wu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(u(33));
  }
  function nt(n) {
    return n[Wl] || null;
  }
  var il = [], Pn = -1;
  function Dt(n) {
    return { current: n };
  }
  function yn(n) {
    0 > Pn || (n.current = il[Pn], il[Pn] = null, Pn--);
  }
  function Sn(n, r) {
    Pn++, il[Pn] = n.current, n.current = r;
  }
  var Gi = {}, yt = Dt(Gi), Zn = Dt(!1), xa = Gi;
  function si(n, r) {
    var s = n.type.contextTypes;
    if (!s)
      return Gi;
    var d = n.stateNode;
    if (d && d.__reactInternalMemoizedUnmaskedChildContext === r)
      return d.__reactInternalMemoizedMaskedChildContext;
    var m = {}, S;
    for (S in s)
      m[S] = r[S];
    return d && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = m), m;
  }
  function jn(n) {
    return n = n.childContextTypes, n != null;
  }
  function ci() {
    yn(Zn), yn(yt);
  }
  function ol(n, r, s) {
    if (yt.current !== Gi)
      throw Error(u(168));
    Sn(yt, r), Sn(Zn, s);
  }
  function rc(n, r, s) {
    var d = n.stateNode;
    if (r = r.childContextTypes, typeof d.getChildContext != "function")
      return s;
    d = d.getChildContext();
    for (var m in d)
      if (!(m in r))
        throw Error(u(108, Rt(n) || "Unknown", m));
    return ae({}, s, d);
  }
  function mf(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Gi, xa = yt.current, Sn(yt, n), Sn(Zn, Zn.current), !0;
  }
  function bm(n, r, s) {
    var d = n.stateNode;
    if (!d)
      throw Error(u(169));
    s ? (n = rc(n, r, xa), d.__reactInternalMemoizedMergedChildContext = n, yn(Zn), yn(yt), Sn(yt, n)) : yn(Zn), Sn(Zn, s);
  }
  var Ga = null, Or = !1, ac = !1;
  function Nv(n) {
    Ga === null ? Ga = [n] : Ga.push(n);
  }
  function Dv(n) {
    Or = !0, Nv(n);
  }
  function Ta() {
    if (!ac && Ga !== null) {
      ac = !0;
      var n = 0, r = Vt;
      try {
        var s = Ga;
        for (Vt = 1; n < s.length; n++) {
          var d = s[n];
          do
            d = d(!0);
          while (d !== null);
        }
        Ga = null, Or = !1;
      } catch (m) {
        throw Ga !== null && (Ga = Ga.slice(n + 1)), Bn(Xr, Ta), m;
      } finally {
        Vt = r, ac = !1;
      }
    }
    return null;
  }
  var ll = [], Ra = 0, Kl = null, Ku = 0, ka = [], Jr = 0, fi = null, Ur = 1, To = "";
  function Ya(n, r) {
    ll[Ra++] = Ku, ll[Ra++] = Kl, Kl = n, Ku = r;
  }
  function Lv(n, r, s) {
    ka[Jr++] = Ur, ka[Jr++] = To, ka[Jr++] = fi, fi = n;
    var d = Ur;
    n = To;
    var m = 32 - Xn(d) - 1;
    d &= ~(1 << m), s += 1;
    var S = 32 - Xn(r) + m;
    if (30 < S) {
      var E = m - m % 5;
      S = (d & (1 << E) - 1).toString(32), d >>= E, m -= E, Ur = 1 << 32 - Xn(r) + m | s << m | d, To = S + n;
    } else
      Ur = 1 << S | s << m | d, To = n;
  }
  function gf(n) {
    n.return !== null && (Ya(n, 1), Lv(n, 1, 0));
  }
  function Av(n) {
    for (; n === Kl; )
      Kl = ll[--Ra], ll[Ra] = null, Ku = ll[--Ra], ll[Ra] = null;
    for (; n === fi; )
      fi = ka[--Jr], ka[Jr] = null, To = ka[--Jr], ka[Jr] = null, Ur = ka[--Jr], ka[Jr] = null;
  }
  var Qa = null, _a = null, Hn = !1, di = null;
  function zv(n, r) {
    var s = yi(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = r, s.return = n, r = n.deletions, r === null ? (n.deletions = [s], n.flags |= 16) : r.push(s);
  }
  function Em(n, r) {
    switch (n.tag) {
      case 5:
        var s = n.type;
        return r = r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Qa = n, _a = Ai(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Qa = n, _a = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (s = fi !== null ? { id: Ur, overflow: To } : null, n.memoizedState = { dehydrated: r, treeContext: s, retryLane: 1073741824 }, s = yi(18, null, null, 0), s.stateNode = r, s.return = n, n.child = s, Qa = n, _a = null, !0) : !1;
      default:
        return !1;
    }
  }
  function yf(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Sf(n) {
    if (Hn) {
      var r = _a;
      if (r) {
        var s = r;
        if (!Em(n, r)) {
          if (yf(n))
            throw Error(u(418));
          r = Ai(s.nextSibling);
          var d = Qa;
          r && Em(n, r) ? zv(d, s) : (n.flags = n.flags & -4097 | 2, Hn = !1, Qa = n);
        }
      } else {
        if (yf(n))
          throw Error(u(418));
        n.flags = n.flags & -4097 | 2, Hn = !1, Qa = n;
      }
    }
  }
  function wm(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Qa = n;
  }
  function Cf(n) {
    if (n !== Qa)
      return !1;
    if (!Hn)
      return wm(n), Hn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ec(n.type, n.memoizedProps)), r && (r = _a)) {
      if (yf(n))
        throw xm(), Error(u(418));
      for (; r; )
        zv(n, r), r = Ai(r.nextSibling);
    }
    if (wm(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(u(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var s = n.data;
            if (s === "/$") {
              if (r === 0) {
                _a = Ai(n.nextSibling);
                break e;
              }
              r--;
            } else
              s !== "$" && s !== "$!" && s !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        _a = null;
      }
    } else
      _a = Qa ? Ai(n.stateNode.nextSibling) : null;
    return !0;
  }
  function xm() {
    for (var n = _a; n; )
      n = Ai(n.nextSibling);
  }
  function Kn() {
    _a = Qa = null, Hn = !1;
  }
  function Pv(n) {
    di === null ? di = [n] : di.push(n);
  }
  var bf = I.ReactCurrentBatchConfig;
  function Xa(n, r) {
    if (n && n.defaultProps) {
      r = ae({}, r), n = n.defaultProps;
      for (var s in n)
        r[s] === void 0 && (r[s] = n[s]);
      return r;
    }
    return r;
  }
  var Yi = Dt(null), Ef = null, ul = null, Hv = null;
  function Uv() {
    Hv = ul = Ef = null;
  }
  function sl(n) {
    var r = Yi.current;
    yn(Yi), n._currentValue = r;
  }
  function Nr(n, r, s) {
    for (; n !== null; ) {
      var d = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, d !== null && (d.childLanes |= r)) : d !== null && (d.childLanes & r) !== r && (d.childLanes |= r), n === s)
        break;
      n = n.return;
    }
  }
  function Me(n, r) {
    Ef = n, Hv = ul = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (hr = !0), n.firstContext = null);
  }
  function lr(n) {
    var r = n._currentValue;
    if (Hv !== n)
      if (n = { context: n, memoizedValue: r, next: null }, ul === null) {
        if (Ef === null)
          throw Error(u(308));
        ul = n, Ef.dependencies = { lanes: 0, firstContext: n };
      } else
        ul = ul.next = n;
    return r;
  }
  var Ir = null;
  function Iv(n) {
    Ir === null ? Ir = [n] : Ir.push(n);
  }
  function Tm(n, r, s, d) {
    var m = r.interleaved;
    return m === null ? (s.next = s, Iv(r)) : (s.next = m.next, m.next = s), r.interleaved = s, Ro(n, d);
  }
  function Ro(n, r) {
    n.lanes |= r;
    var s = n.alternate;
    for (s !== null && (s.lanes |= r), s = n, n = n.return; n !== null; )
      n.childLanes |= r, s = n.alternate, s !== null && (s.childLanes |= r), s = n, n = n.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var cl = !1;
  function $v(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Sr(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ko(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function fl(n, r, s) {
    var d = n.updateQueue;
    if (d === null)
      return null;
    if (d = d.shared, Yt & 2) {
      var m = d.pending;
      return m === null ? r.next = r : (r.next = m.next, m.next = r), d.pending = r, Ro(n, s);
    }
    return m = d.interleaved, m === null ? (r.next = r, Iv(d)) : (r.next = m.next, m.next = r), d.interleaved = r, Ro(n, s);
  }
  function wf(n, r, s) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (s & 4194240) !== 0)) {
      var d = r.lanes;
      d &= n.pendingLanes, s |= d, r.lanes = s, Wa(n, s);
    }
  }
  function Fv(n, r) {
    var s = n.updateQueue, d = n.alternate;
    if (d !== null && (d = d.updateQueue, s === d)) {
      var m = null, S = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var E = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          S === null ? m = S = E : S = S.next = E, s = s.next;
        } while (s !== null);
        S === null ? m = S = r : S = S.next = r;
      } else
        m = S = r;
      s = { baseState: d.baseState, firstBaseUpdate: m, lastBaseUpdate: S, shared: d.shared, effects: d.effects }, n.updateQueue = s;
      return;
    }
    n = s.lastBaseUpdate, n === null ? s.firstBaseUpdate = r : n.next = r, s.lastBaseUpdate = r;
  }
  function dl(n, r, s, d) {
    var m = n.updateQueue;
    cl = !1;
    var S = m.firstBaseUpdate, E = m.lastBaseUpdate, D = m.shared.pending;
    if (D !== null) {
      m.shared.pending = null;
      var P = D, te = P.next;
      P.next = null, E === null ? S = te : E.next = te, E = P;
      var pe = n.alternate;
      pe !== null && (pe = pe.updateQueue, D = pe.lastBaseUpdate, D !== E && (D === null ? pe.firstBaseUpdate = te : D.next = te, pe.lastBaseUpdate = P));
    }
    if (S !== null) {
      var me = m.baseState;
      E = 0, pe = te = P = null, D = S;
      do {
        var ve = D.lane, Pe = D.eventTime;
        if ((d & ve) === ve) {
          pe !== null && (pe = pe.next = {
            eventTime: Pe,
            lane: 0,
            tag: D.tag,
            payload: D.payload,
            callback: D.callback,
            next: null
          });
          e: {
            var je = n, Ke = D;
            switch (ve = r, Pe = s, Ke.tag) {
              case 1:
                if (je = Ke.payload, typeof je == "function") {
                  me = je.call(Pe, me, ve);
                  break e;
                }
                me = je;
                break e;
              case 3:
                je.flags = je.flags & -65537 | 128;
              case 0:
                if (je = Ke.payload, ve = typeof je == "function" ? je.call(Pe, me, ve) : je, ve == null)
                  break e;
                me = ae({}, me, ve);
                break e;
              case 2:
                cl = !0;
            }
          }
          D.callback !== null && D.lane !== 0 && (n.flags |= 64, ve = m.effects, ve === null ? m.effects = [D] : ve.push(D));
        } else
          Pe = { eventTime: Pe, lane: ve, tag: D.tag, payload: D.payload, callback: D.callback, next: null }, pe === null ? (te = pe = Pe, P = me) : pe = pe.next = Pe, E |= ve;
        if (D = D.next, D === null) {
          if (D = m.shared.pending, D === null)
            break;
          ve = D, D = ve.next, ve.next = null, m.lastBaseUpdate = ve, m.shared.pending = null;
        }
      } while (!0);
      if (pe === null && (P = me), m.baseState = P, m.firstBaseUpdate = te, m.lastBaseUpdate = pe, r = m.shared.interleaved, r !== null) {
        m = r;
        do
          E |= m.lane, m = m.next;
        while (m !== r);
      } else
        S === null && (m.shared.lanes = 0);
      No |= E, n.lanes = E, n.memoizedState = me;
    }
  }
  function Gl(n, r, s) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var d = n[r], m = d.callback;
        if (m !== null) {
          if (d.callback = null, d = s, typeof m != "function")
            throw Error(u(191, m));
          m.call(d);
        }
      }
  }
  var Rm = new i.Component().refs;
  function jv(n, r, s, d) {
    r = n.memoizedState, s = s(d, r), s = s == null ? r : ae({}, r, s), n.memoizedState = s, n.lanes === 0 && (n.updateQueue.baseState = s);
  }
  var xf = { isMounted: function(n) {
    return (n = n._reactInternals) ? dr(n) === n : !1;
  }, enqueueSetState: function(n, r, s) {
    n = n._reactInternals;
    var d = ra(), m = mr(n), S = ko(d, m);
    S.payload = r, s != null && (S.callback = s), r = fl(n, S, m), r !== null && (aa(r, n, m, d), wf(r, n, m));
  }, enqueueReplaceState: function(n, r, s) {
    n = n._reactInternals;
    var d = ra(), m = mr(n), S = ko(d, m);
    S.tag = 1, S.payload = r, s != null && (S.callback = s), r = fl(n, S, m), r !== null && (aa(r, n, m, d), wf(r, n, m));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var s = ra(), d = mr(n), m = ko(s, d);
    m.tag = 2, r != null && (m.callback = r), r = fl(n, m, d), r !== null && (aa(r, n, d, s), wf(r, n, d));
  } };
  function km(n, r, s, d, m, S, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(d, S, E) : r.prototype && r.prototype.isPureReactComponent ? !Gs(s, d) || !Gs(m, S) : !0;
  }
  function _m(n, r, s) {
    var d = !1, m = Gi, S = r.contextType;
    return typeof S == "object" && S !== null ? S = lr(S) : (m = jn(r) ? xa : yt.current, d = r.contextTypes, S = (d = d != null) ? si(n, m) : Gi), r = new r(s, S), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = xf, n.stateNode = r, r._reactInternals = n, d && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = m, n.__reactInternalMemoizedMaskedChildContext = S), r;
  }
  function Mm(n, r, s, d) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, d), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, d), r.state !== n && xf.enqueueReplaceState(r, r.state, null);
  }
  function Tf(n, r, s, d) {
    var m = n.stateNode;
    m.props = s, m.state = n.memoizedState, m.refs = Rm, $v(n);
    var S = r.contextType;
    typeof S == "object" && S !== null ? m.context = lr(S) : (S = jn(r) ? xa : yt.current, m.context = si(n, S)), m.state = n.memoizedState, S = r.getDerivedStateFromProps, typeof S == "function" && (jv(n, r, S, s), m.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (r = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), r !== m.state && xf.enqueueReplaceState(m, m.state, null), dl(n, s, m, d), m.state = n.memoizedState), typeof m.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Gu(n, r, s) {
    if (n = s.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1)
            throw Error(u(309));
          var d = s.stateNode;
        }
        if (!d)
          throw Error(u(147, n));
        var m = d, S = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === S ? r.ref : (r = function(E) {
          var D = m.refs;
          D === Rm && (D = m.refs = {}), E === null ? delete D[S] : D[S] = E;
        }, r._stringRef = S, r);
      }
      if (typeof n != "string")
        throw Error(u(284));
      if (!s._owner)
        throw Error(u(290, n));
    }
    return n;
  }
  function Rf(n, r) {
    throw n = Object.prototype.toString.call(r), Error(u(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Om(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Nm(n) {
    function r(K, F) {
      if (n) {
        var X = K.deletions;
        X === null ? (K.deletions = [F], K.flags |= 16) : X.push(F);
      }
    }
    function s(K, F) {
      if (!n)
        return null;
      for (; F !== null; )
        r(K, F), F = F.sibling;
      return null;
    }
    function d(K, F) {
      for (K = /* @__PURE__ */ new Map(); F !== null; )
        F.key !== null ? K.set(F.key, F) : K.set(F.index, F), F = F.sibling;
      return K;
    }
    function m(K, F) {
      return K = Cl(K, F), K.index = 0, K.sibling = null, K;
    }
    function S(K, F, X) {
      return K.index = X, n ? (X = K.alternate, X !== null ? (X = X.index, X < F ? (K.flags |= 2, F) : X) : (K.flags |= 2, F)) : (K.flags |= 1048576, F);
    }
    function E(K) {
      return n && K.alternate === null && (K.flags |= 2), K;
    }
    function D(K, F, X, xe) {
      return F === null || F.tag !== 6 ? (F = wc(X, K.mode, xe), F.return = K, F) : (F = m(F, X), F.return = K, F);
    }
    function P(K, F, X, xe) {
      var Xe = X.type;
      return Xe === G ? pe(K, F, X.props.children, xe, X.key) : F !== null && (F.elementType === Xe || typeof Xe == "object" && Xe !== null && Xe.$$typeof === we && Om(Xe) === F.type) ? (xe = m(F, X.props), xe.ref = Gu(K, F, X), xe.return = K, xe) : (xe = ad(X.type, X.key, X.props, null, K.mode, xe), xe.ref = Gu(K, F, X), xe.return = K, xe);
    }
    function te(K, F, X, xe) {
      return F === null || F.tag !== 4 || F.stateNode.containerInfo !== X.containerInfo || F.stateNode.implementation !== X.implementation ? (F = du(X, K.mode, xe), F.return = K, F) : (F = m(F, X.children || []), F.return = K, F);
    }
    function pe(K, F, X, xe, Xe) {
      return F === null || F.tag !== 7 ? (F = fu(X, K.mode, xe, Xe), F.return = K, F) : (F = m(F, X), F.return = K, F);
    }
    function me(K, F, X) {
      if (typeof F == "string" && F !== "" || typeof F == "number")
        return F = wc("" + F, K.mode, X), F.return = K, F;
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case W:
            return X = ad(F.type, F.key, F.props, null, K.mode, X), X.ref = Gu(K, null, F), X.return = K, X;
          case re:
            return F = du(F, K.mode, X), F.return = K, F;
          case we:
            var xe = F._init;
            return me(K, xe(F._payload), X);
        }
        if (wt(F) || de(F))
          return F = fu(F, K.mode, X, null), F.return = K, F;
        Rf(K, F);
      }
      return null;
    }
    function ve(K, F, X, xe) {
      var Xe = F !== null ? F.key : null;
      if (typeof X == "string" && X !== "" || typeof X == "number")
        return Xe !== null ? null : D(K, F, "" + X, xe);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case W:
            return X.key === Xe ? P(K, F, X, xe) : null;
          case re:
            return X.key === Xe ? te(K, F, X, xe) : null;
          case we:
            return Xe = X._init, ve(
              K,
              F,
              Xe(X._payload),
              xe
            );
        }
        if (wt(X) || de(X))
          return Xe !== null ? null : pe(K, F, X, xe, null);
        Rf(K, X);
      }
      return null;
    }
    function Pe(K, F, X, xe, Xe) {
      if (typeof xe == "string" && xe !== "" || typeof xe == "number")
        return K = K.get(X) || null, D(F, K, "" + xe, Xe);
      if (typeof xe == "object" && xe !== null) {
        switch (xe.$$typeof) {
          case W:
            return K = K.get(xe.key === null ? X : xe.key) || null, P(F, K, xe, Xe);
          case re:
            return K = K.get(xe.key === null ? X : xe.key) || null, te(F, K, xe, Xe);
          case we:
            var Ve = xe._init;
            return Pe(K, F, X, Ve(xe._payload), Xe);
        }
        if (wt(xe) || de(xe))
          return K = K.get(X) || null, pe(F, K, xe, Xe, null);
        Rf(F, xe);
      }
      return null;
    }
    function je(K, F, X, xe) {
      for (var Xe = null, Ve = null, et = F, St = F = 0, Ar = null; et !== null && St < X.length; St++) {
        et.index > St ? (Ar = et, et = null) : Ar = et.sibling;
        var pn = ve(K, et, X[St], xe);
        if (pn === null) {
          et === null && (et = Ar);
          break;
        }
        n && et && pn.alternate === null && r(K, et), F = S(pn, F, St), Ve === null ? Xe = pn : Ve.sibling = pn, Ve = pn, et = Ar;
      }
      if (St === X.length)
        return s(K, et), Hn && Ya(K, St), Xe;
      if (et === null) {
        for (; St < X.length; St++)
          et = me(K, X[St], xe), et !== null && (F = S(et, F, St), Ve === null ? Xe = et : Ve.sibling = et, Ve = et);
        return Hn && Ya(K, St), Xe;
      }
      for (et = d(K, et); St < X.length; St++)
        Ar = Pe(et, K, St, X[St], xe), Ar !== null && (n && Ar.alternate !== null && et.delete(Ar.key === null ? St : Ar.key), F = S(Ar, F, St), Ve === null ? Xe = Ar : Ve.sibling = Ar, Ve = Ar);
      return n && et.forEach(function(bl) {
        return r(K, bl);
      }), Hn && Ya(K, St), Xe;
    }
    function Ke(K, F, X, xe) {
      var Xe = de(X);
      if (typeof Xe != "function")
        throw Error(u(150));
      if (X = Xe.call(X), X == null)
        throw Error(u(151));
      for (var Ve = Xe = null, et = F, St = F = 0, Ar = null, pn = X.next(); et !== null && !pn.done; St++, pn = X.next()) {
        et.index > St ? (Ar = et, et = null) : Ar = et.sibling;
        var bl = ve(K, et, pn.value, xe);
        if (bl === null) {
          et === null && (et = Ar);
          break;
        }
        n && et && bl.alternate === null && r(K, et), F = S(bl, F, St), Ve === null ? Xe = bl : Ve.sibling = bl, Ve = bl, et = Ar;
      }
      if (pn.done)
        return s(
          K,
          et
        ), Hn && Ya(K, St), Xe;
      if (et === null) {
        for (; !pn.done; St++, pn = X.next())
          pn = me(K, pn.value, xe), pn !== null && (F = S(pn, F, St), Ve === null ? Xe = pn : Ve.sibling = pn, Ve = pn);
        return Hn && Ya(K, St), Xe;
      }
      for (et = d(K, et); !pn.done; St++, pn = X.next())
        pn = Pe(et, K, St, pn.value, xe), pn !== null && (n && pn.alternate !== null && et.delete(pn.key === null ? St : pn.key), F = S(pn, F, St), Ve === null ? Xe = pn : Ve.sibling = pn, Ve = pn);
      return n && et.forEach(function(g0) {
        return r(K, g0);
      }), Hn && Ya(K, St), Xe;
    }
    function ur(K, F, X, xe) {
      if (typeof X == "object" && X !== null && X.type === G && X.key === null && (X = X.props.children), typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case W:
            e: {
              for (var Xe = X.key, Ve = F; Ve !== null; ) {
                if (Ve.key === Xe) {
                  if (Xe = X.type, Xe === G) {
                    if (Ve.tag === 7) {
                      s(K, Ve.sibling), F = m(Ve, X.props.children), F.return = K, K = F;
                      break e;
                    }
                  } else if (Ve.elementType === Xe || typeof Xe == "object" && Xe !== null && Xe.$$typeof === we && Om(Xe) === Ve.type) {
                    s(K, Ve.sibling), F = m(Ve, X.props), F.ref = Gu(K, Ve, X), F.return = K, K = F;
                    break e;
                  }
                  s(K, Ve);
                  break;
                } else
                  r(K, Ve);
                Ve = Ve.sibling;
              }
              X.type === G ? (F = fu(X.props.children, K.mode, xe, X.key), F.return = K, K = F) : (xe = ad(X.type, X.key, X.props, null, K.mode, xe), xe.ref = Gu(K, F, X), xe.return = K, K = xe);
            }
            return E(K);
          case re:
            e: {
              for (Ve = X.key; F !== null; ) {
                if (F.key === Ve)
                  if (F.tag === 4 && F.stateNode.containerInfo === X.containerInfo && F.stateNode.implementation === X.implementation) {
                    s(K, F.sibling), F = m(F, X.children || []), F.return = K, K = F;
                    break e;
                  } else {
                    s(K, F);
                    break;
                  }
                else
                  r(K, F);
                F = F.sibling;
              }
              F = du(X, K.mode, xe), F.return = K, K = F;
            }
            return E(K);
          case we:
            return Ve = X._init, ur(K, F, Ve(X._payload), xe);
        }
        if (wt(X))
          return je(K, F, X, xe);
        if (de(X))
          return Ke(K, F, X, xe);
        Rf(K, X);
      }
      return typeof X == "string" && X !== "" || typeof X == "number" ? (X = "" + X, F !== null && F.tag === 6 ? (s(K, F.sibling), F = m(F, X), F.return = K, K = F) : (s(K, F), F = wc(X, K.mode, xe), F.return = K, K = F), E(K)) : s(K, F);
    }
    return ur;
  }
  var Yu = Nm(!0), Dm = Nm(!1), ic = {}, zi = Dt(ic), oc = Dt(ic), Qu = Dt(ic);
  function Yl(n) {
    if (n === ic)
      throw Error(u(174));
    return n;
  }
  function Vv(n, r) {
    switch (Sn(Qu, r), Sn(oc, n), Sn(zi, ic), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : kn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = kn(r, n);
    }
    yn(zi), Sn(zi, r);
  }
  function vl() {
    yn(zi), yn(oc), yn(Qu);
  }
  function ot(n) {
    Yl(Qu.current);
    var r = Yl(zi.current), s = kn(r, n.type);
    r !== s && (Sn(oc, n), Sn(zi, s));
  }
  function Bt(n) {
    oc.current === n && (yn(zi), yn(oc));
  }
  var lt = Dt(0);
  function Gn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var s = r.memoizedState;
        if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var vi = [];
  function kf() {
    for (var n = 0; n < vi.length; n++)
      vi[n]._workInProgressVersionPrimary = null;
    vi.length = 0;
  }
  var _f = I.ReactCurrentDispatcher, Bv = I.ReactCurrentBatchConfig, Ql = 0, Un = null, ue = null, rn = null, ut = !1, Qi = !1, qa = 0, Xl = 0;
  function In() {
    throw Error(u(321));
  }
  function ql(n, r) {
    if (r === null)
      return !1;
    for (var s = 0; s < r.length && s < n.length; s++)
      if (!li(n[s], r[s]))
        return !1;
    return !0;
  }
  function pl(n, r, s, d, m, S) {
    if (Ql = S, Un = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, _f.current = n === null || n.memoizedState === null ? J1 : e0, n = s(d, m), Qi) {
      S = 0;
      do {
        if (Qi = !1, qa = 0, 25 <= S)
          throw Error(u(301));
        S += 1, rn = ue = null, r.updateQueue = null, _f.current = Kv, n = s(d, m);
      } while (Qi);
    }
    if (_f.current = Bf, r = ue !== null && ue.next !== null, Ql = 0, rn = ue = Un = null, ut = !1, r)
      throw Error(u(300));
    return n;
  }
  function Zl() {
    var n = qa !== 0;
    return qa = 0, n;
  }
  function pi() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return rn === null ? Un.memoizedState = rn = n : rn = rn.next = n, rn;
  }
  function Ma() {
    if (ue === null) {
      var n = Un.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ue.next;
    var r = rn === null ? Un.memoizedState : rn.next;
    if (r !== null)
      rn = r, ue = n;
    else {
      if (n === null)
        throw Error(u(310));
      ue = n, n = { memoizedState: ue.memoizedState, baseState: ue.baseState, baseQueue: ue.baseQueue, queue: ue.queue, next: null }, rn === null ? Un.memoizedState = rn = n : rn = rn.next = n;
    }
    return rn;
  }
  function Jl(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function lc(n) {
    var r = Ma(), s = r.queue;
    if (s === null)
      throw Error(u(311));
    s.lastRenderedReducer = n;
    var d = ue, m = d.baseQueue, S = s.pending;
    if (S !== null) {
      if (m !== null) {
        var E = m.next;
        m.next = S.next, S.next = E;
      }
      d.baseQueue = m = S, s.pending = null;
    }
    if (m !== null) {
      S = m.next, d = d.baseState;
      var D = E = null, P = null, te = S;
      do {
        var pe = te.lane;
        if ((Ql & pe) === pe)
          P !== null && (P = P.next = { lane: 0, action: te.action, hasEagerState: te.hasEagerState, eagerState: te.eagerState, next: null }), d = te.hasEagerState ? te.eagerState : n(d, te.action);
        else {
          var me = {
            lane: pe,
            action: te.action,
            hasEagerState: te.hasEagerState,
            eagerState: te.eagerState,
            next: null
          };
          P === null ? (D = P = me, E = d) : P = P.next = me, Un.lanes |= pe, No |= pe;
        }
        te = te.next;
      } while (te !== null && te !== S);
      P === null ? E = d : P.next = D, li(d, r.memoizedState) || (hr = !0), r.memoizedState = d, r.baseState = E, r.baseQueue = P, s.lastRenderedState = d;
    }
    if (n = s.interleaved, n !== null) {
      m = n;
      do
        S = m.lane, Un.lanes |= S, No |= S, m = m.next;
      while (m !== n);
    } else
      m === null && (s.lanes = 0);
    return [r.memoizedState, s.dispatch];
  }
  function uc(n) {
    var r = Ma(), s = r.queue;
    if (s === null)
      throw Error(u(311));
    s.lastRenderedReducer = n;
    var d = s.dispatch, m = s.pending, S = r.memoizedState;
    if (m !== null) {
      s.pending = null;
      var E = m = m.next;
      do
        S = n(S, E.action), E = E.next;
      while (E !== m);
      li(S, r.memoizedState) || (hr = !0), r.memoizedState = S, r.baseQueue === null && (r.baseState = S), s.lastRenderedState = S;
    }
    return [S, d];
  }
  function Mf() {
  }
  function Of(n, r) {
    var s = Un, d = Ma(), m = r(), S = !li(d.memoizedState, m);
    if (S && (d.memoizedState = m, hr = !0), d = d.queue, sc(Lf.bind(null, s, d, n), [n]), d.getSnapshot !== r || S || rn !== null && rn.memoizedState.tag & 1) {
      if (s.flags |= 2048, eu(9, Df.bind(null, s, d, m, r), void 0, null), Yn === null)
        throw Error(u(349));
      Ql & 30 || Nf(s, r, m);
    }
    return m;
  }
  function Nf(n, r, s) {
    n.flags |= 16384, n = { getSnapshot: r, value: s }, r = Un.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Un.updateQueue = r, r.stores = [n]) : (s = r.stores, s === null ? r.stores = [n] : s.push(n));
  }
  function Df(n, r, s, d) {
    r.value = s, r.getSnapshot = d, Af(r) && zf(n);
  }
  function Lf(n, r, s) {
    return s(function() {
      Af(r) && zf(n);
    });
  }
  function Af(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var s = r();
      return !li(n, s);
    } catch (d) {
      return !0;
    }
  }
  function zf(n) {
    var r = Ro(n, 1);
    r !== null && aa(r, n, 1, -1);
  }
  function Pf(n) {
    var r = pi();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jl, lastRenderedState: n }, r.queue = n, n = n.dispatch = Vf.bind(null, Un, n), [r.memoizedState, n];
  }
  function eu(n, r, s, d) {
    return n = { tag: n, create: r, destroy: s, deps: d, next: null }, r = Un.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Un.updateQueue = r, r.lastEffect = n.next = n) : (s = r.lastEffect, s === null ? r.lastEffect = n.next = n : (d = s.next, s.next = n, n.next = d, r.lastEffect = n)), n;
  }
  function Hf() {
    return Ma().memoizedState;
  }
  function tu(n, r, s, d) {
    var m = pi();
    Un.flags |= n, m.memoizedState = eu(1 | r, s, void 0, d === void 0 ? null : d);
  }
  function _o(n, r, s, d) {
    var m = Ma();
    d = d === void 0 ? null : d;
    var S = void 0;
    if (ue !== null) {
      var E = ue.memoizedState;
      if (S = E.destroy, d !== null && ql(d, E.deps)) {
        m.memoizedState = eu(r, s, S, d);
        return;
      }
    }
    Un.flags |= n, m.memoizedState = eu(1 | r, s, S, d);
  }
  function Uf(n, r) {
    return tu(8390656, 8, n, r);
  }
  function sc(n, r) {
    return _o(2048, 8, n, r);
  }
  function If(n, r) {
    return _o(4, 2, n, r);
  }
  function $f(n, r) {
    return _o(4, 4, n, r);
  }
  function Wv(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Xu(n, r, s) {
    return s = s != null ? s.concat([n]) : null, _o(4, 4, Wv.bind(null, r, n), s);
  }
  function Ff() {
  }
  function qu(n, r) {
    var s = Ma();
    r = r === void 0 ? null : r;
    var d = s.memoizedState;
    return d !== null && r !== null && ql(r, d[1]) ? d[0] : (s.memoizedState = [n, r], n);
  }
  function hl(n, r) {
    var s = Ma();
    r = r === void 0 ? null : r;
    var d = s.memoizedState;
    return d !== null && r !== null && ql(r, d[1]) ? d[0] : (n = n(), s.memoizedState = [n, r], n);
  }
  function Oa(n, r, s) {
    return Ql & 21 ? (li(s, r) || (s = Va(), Un.lanes |= s, No |= s, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, hr = !0), n.memoizedState = s);
  }
  function Z1(n, r) {
    var s = Vt;
    Vt = s !== 0 && 4 > s ? s : 4, n(!0);
    var d = Bv.transition;
    Bv.transition = {};
    try {
      n(!1), r();
    } finally {
      Vt = s, Bv.transition = d;
    }
  }
  function Dn() {
    return Ma().memoizedState;
  }
  function jf(n, r, s) {
    var d = mr(n);
    if (s = { lane: d, action: s, hasEagerState: !1, eagerState: null, next: null }, Zu(n))
      cc(r, s);
    else if (s = Tm(n, r, s, d), s !== null) {
      var m = ra();
      aa(s, n, d, m), Lm(s, r, d);
    }
  }
  function Vf(n, r, s) {
    var d = mr(n), m = { lane: d, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (Zu(n))
      cc(r, m);
    else {
      var S = n.alternate;
      if (n.lanes === 0 && (S === null || S.lanes === 0) && (S = r.lastRenderedReducer, S !== null))
        try {
          var E = r.lastRenderedState, D = S(E, s);
          if (m.hasEagerState = !0, m.eagerState = D, li(D, E)) {
            var P = r.interleaved;
            P === null ? (m.next = m, Iv(r)) : (m.next = P.next, P.next = m), r.interleaved = m;
            return;
          }
        } catch (te) {
        } finally {
        }
      s = Tm(n, r, m, d), s !== null && (m = ra(), aa(s, n, d, m), Lm(s, r, d));
    }
  }
  function Zu(n) {
    var r = n.alternate;
    return n === Un || r !== null && r === Un;
  }
  function cc(n, r) {
    Qi = ut = !0;
    var s = n.pending;
    s === null ? r.next = r : (r.next = s.next, s.next = r), n.pending = r;
  }
  function Lm(n, r, s) {
    if (s & 4194240) {
      var d = r.lanes;
      d &= n.pendingLanes, s |= d, r.lanes = s, Wa(n, s);
    }
  }
  var Bf = { readContext: lr, useCallback: In, useContext: In, useEffect: In, useImperativeHandle: In, useInsertionEffect: In, useLayoutEffect: In, useMemo: In, useReducer: In, useRef: In, useState: In, useDebugValue: In, useDeferredValue: In, useTransition: In, useMutableSource: In, useSyncExternalStore: In, useId: In, unstable_isNewReconciler: !1 }, J1 = { readContext: lr, useCallback: function(n, r) {
    return pi().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: lr, useEffect: Uf, useImperativeHandle: function(n, r, s) {
    return s = s != null ? s.concat([n]) : null, tu(
      4194308,
      4,
      Wv.bind(null, r, n),
      s
    );
  }, useLayoutEffect: function(n, r) {
    return tu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return tu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var s = pi();
    return r = r === void 0 ? null : r, n = n(), s.memoizedState = [n, r], n;
  }, useReducer: function(n, r, s) {
    var d = pi();
    return r = s !== void 0 ? s(r) : r, d.memoizedState = d.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, d.queue = n, n = n.dispatch = jf.bind(null, Un, n), [d.memoizedState, n];
  }, useRef: function(n) {
    var r = pi();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Pf, useDebugValue: Ff, useDeferredValue: function(n) {
    return pi().memoizedState = n;
  }, useTransition: function() {
    var n = Pf(!1), r = n[0];
    return n = Z1.bind(null, n[1]), pi().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, s) {
    var d = Un, m = pi();
    if (Hn) {
      if (s === void 0)
        throw Error(u(407));
      s = s();
    } else {
      if (s = r(), Yn === null)
        throw Error(u(349));
      Ql & 30 || Nf(d, r, s);
    }
    m.memoizedState = s;
    var S = { value: s, getSnapshot: r };
    return m.queue = S, Uf(Lf.bind(
      null,
      d,
      S,
      n
    ), [n]), d.flags |= 2048, eu(9, Df.bind(null, d, S, s, r), void 0, null), s;
  }, useId: function() {
    var n = pi(), r = Yn.identifierPrefix;
    if (Hn) {
      var s = To, d = Ur;
      s = (d & ~(1 << 32 - Xn(d) - 1)).toString(32) + s, r = ":" + r + "R" + s, s = qa++, 0 < s && (r += "H" + s.toString(32)), r += ":";
    } else
      s = Xl++, r = ":" + r + "r" + s.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, e0 = {
    readContext: lr,
    useCallback: qu,
    useContext: lr,
    useEffect: sc,
    useImperativeHandle: Xu,
    useInsertionEffect: If,
    useLayoutEffect: $f,
    useMemo: hl,
    useReducer: lc,
    useRef: Hf,
    useState: function() {
      return lc(Jl);
    },
    useDebugValue: Ff,
    useDeferredValue: function(n) {
      var r = Ma();
      return Oa(r, ue.memoizedState, n);
    },
    useTransition: function() {
      var n = lc(Jl)[0], r = Ma().memoizedState;
      return [n, r];
    },
    useMutableSource: Mf,
    useSyncExternalStore: Of,
    useId: Dn,
    unstable_isNewReconciler: !1
  }, Kv = { readContext: lr, useCallback: qu, useContext: lr, useEffect: sc, useImperativeHandle: Xu, useInsertionEffect: If, useLayoutEffect: $f, useMemo: hl, useReducer: uc, useRef: Hf, useState: function() {
    return uc(Jl);
  }, useDebugValue: Ff, useDeferredValue: function(n) {
    var r = Ma();
    return ue === null ? r.memoizedState = n : Oa(r, ue.memoizedState, n);
  }, useTransition: function() {
    var n = uc(Jl)[0], r = Ma().memoizedState;
    return [n, r];
  }, useMutableSource: Mf, useSyncExternalStore: Of, useId: Dn, unstable_isNewReconciler: !1 };
  function Ju(n, r) {
    try {
      var s = "", d = r;
      do
        s += At(d), d = d.return;
      while (d);
      var m = s;
    } catch (S) {
      m = `
Error generating stack: ` + S.message + `
` + S.stack;
    }
    return { value: n, source: r, stack: m, digest: null };
  }
  function fc(n, r, s) {
    return { value: n, source: null, stack: s != null ? s : null, digest: r != null ? r : null };
  }
  function Wf(n, r) {
    try {
      console.error(r.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var t0 = typeof WeakMap == "function" ? WeakMap : Map;
  function Am(n, r, s) {
    s = ko(-1, s), s.tag = 3, s.payload = { element: null };
    var d = r.value;
    return s.callback = function() {
      Zf || (Zf = !0, ou = d), Wf(n, r);
    }, s;
  }
  function dc(n, r, s) {
    s = ko(-1, s), s.tag = 3;
    var d = n.type.getDerivedStateFromError;
    if (typeof d == "function") {
      var m = r.value;
      s.payload = function() {
        return d(m);
      }, s.callback = function() {
        Wf(n, r);
      };
    }
    var S = n.stateNode;
    return S !== null && typeof S.componentDidCatch == "function" && (s.callback = function() {
      Wf(n, r), typeof d != "function" && (Zi === null ? Zi = /* @__PURE__ */ new Set([this]) : Zi.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), s;
  }
  function zm(n, r, s) {
    var d = n.pingCache;
    if (d === null) {
      d = n.pingCache = new t0();
      var m = /* @__PURE__ */ new Set();
      d.set(r, m);
    } else
      m = d.get(r), m === void 0 && (m = /* @__PURE__ */ new Set(), d.set(r, m));
    m.has(s) || (m.add(s), n = u0.bind(null, n, r, s), r.then(n, n));
  }
  function Gv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Yv(n, r, s, d, m) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = m, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = ko(-1, 1), r.tag = 2, fl(s, r, 1))), s.lanes |= 1), n);
  }
  var n0 = I.ReactCurrentOwner, hr = !1;
  function Cr(n, r, s, d) {
    r.child = n === null ? Dm(r, null, s, d) : Yu(r, n.child, s, d);
  }
  function ml(n, r, s, d, m) {
    s = s.render;
    var S = r.ref;
    return Me(r, m), d = pl(n, r, s, d, S, m), s = Zl(), n !== null && !hr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~m, $r(n, r, m)) : (Hn && s && gf(r), r.flags |= 1, Cr(n, r, d, m), r.child);
  }
  function Kf(n, r, s, d, m) {
    if (n === null) {
      var S = s.type;
      return typeof S == "function" && !vp(S) && S.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15, r.type = S, Na(n, r, S, d, m)) : (n = ad(s.type, null, d, r, r.mode, m), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (S = n.child, !(n.lanes & m)) {
      var E = S.memoizedProps;
      if (s = s.compare, s = s !== null ? s : Gs, s(E, d) && n.ref === r.ref)
        return $r(n, r, m);
    }
    return r.flags |= 1, n = Cl(S, d), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Na(n, r, s, d, m) {
    if (n !== null) {
      var S = n.memoizedProps;
      if (Gs(S, d) && n.ref === r.ref)
        if (hr = !1, r.pendingProps = d = S, (n.lanes & m) !== 0)
          n.flags & 131072 && (hr = !0);
        else
          return r.lanes = n.lanes, $r(n, r, m);
    }
    return es(n, r, s, d, m);
  }
  function nu(n, r, s) {
    var d = r.pendingProps, m = d.children, S = n !== null ? n.memoizedState : null;
    if (d.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Sn(os, Za), Za |= s;
      else {
        if (!(s & 1073741824))
          return n = S !== null ? S.baseLanes | s : s, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Sn(os, Za), Za |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, d = S !== null ? S.baseLanes : s, Sn(os, Za), Za |= d;
      }
    else
      S !== null ? (d = S.baseLanes | s, r.memoizedState = null) : d = s, Sn(os, Za), Za |= d;
    return Cr(n, r, m, s), r.child;
  }
  function Lt(n, r) {
    var s = r.ref;
    (n === null && s !== null || n !== null && n.ref !== s) && (r.flags |= 512, r.flags |= 2097152);
  }
  function es(n, r, s, d, m) {
    var S = jn(s) ? xa : yt.current;
    return S = si(r, S), Me(r, m), s = pl(n, r, s, d, S, m), d = Zl(), n !== null && !hr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~m, $r(n, r, m)) : (Hn && d && gf(r), r.flags |= 1, Cr(n, r, s, m), r.child);
  }
  function Qv(n, r, s, d, m) {
    if (jn(s)) {
      var S = !0;
      mf(r);
    } else
      S = !1;
    if (Me(r, m), r.stateNode === null)
      ea(n, r), _m(r, s, d), Tf(r, s, d, m), d = !0;
    else if (n === null) {
      var E = r.stateNode, D = r.memoizedProps;
      E.props = D;
      var P = E.context, te = s.contextType;
      typeof te == "object" && te !== null ? te = lr(te) : (te = jn(s) ? xa : yt.current, te = si(r, te));
      var pe = s.getDerivedStateFromProps, me = typeof pe == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      me || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (D !== d || P !== te) && Mm(r, E, d, te), cl = !1;
      var ve = r.memoizedState;
      E.state = ve, dl(r, d, E, m), P = r.memoizedState, D !== d || ve !== P || Zn.current || cl ? (typeof pe == "function" && (jv(r, s, pe, d), P = r.memoizedState), (D = cl || km(r, s, D, d, ve, P, te)) ? (me || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = d, r.memoizedState = P), E.props = d, E.state = P, E.context = te, d = D) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), d = !1);
    } else {
      E = r.stateNode, Sr(n, r), D = r.memoizedProps, te = r.type === r.elementType ? D : Xa(r.type, D), E.props = te, me = r.pendingProps, ve = E.context, P = s.contextType, typeof P == "object" && P !== null ? P = lr(P) : (P = jn(s) ? xa : yt.current, P = si(r, P));
      var Pe = s.getDerivedStateFromProps;
      (pe = typeof Pe == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (D !== me || ve !== P) && Mm(r, E, d, P), cl = !1, ve = r.memoizedState, E.state = ve, dl(r, d, E, m);
      var je = r.memoizedState;
      D !== me || ve !== je || Zn.current || cl ? (typeof Pe == "function" && (jv(r, s, Pe, d), je = r.memoizedState), (te = cl || km(r, s, te, d, ve, je, P) || !1) ? (pe || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(d, je, P), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(d, je, P)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || D === n.memoizedProps && ve === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || D === n.memoizedProps && ve === n.memoizedState || (r.flags |= 1024), r.memoizedProps = d, r.memoizedState = je), E.props = d, E.state = je, E.context = P, d = te) : (typeof E.componentDidUpdate != "function" || D === n.memoizedProps && ve === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || D === n.memoizedProps && ve === n.memoizedState || (r.flags |= 1024), d = !1);
    }
    return Pm(n, r, s, d, S, m);
  }
  function Pm(n, r, s, d, m, S) {
    Lt(n, r);
    var E = (r.flags & 128) !== 0;
    if (!d && !E)
      return m && bm(r, s, !1), $r(n, r, S);
    d = r.stateNode, n0.current = r;
    var D = E && typeof s.getDerivedStateFromError != "function" ? null : d.render();
    return r.flags |= 1, n !== null && E ? (r.child = Yu(r, n.child, null, S), r.child = Yu(r, null, D, S)) : Cr(n, r, D, S), r.memoizedState = d.state, m && bm(r, s, !0), r.child;
  }
  function Hm(n) {
    var r = n.stateNode;
    r.pendingContext ? ol(n, r.pendingContext, r.pendingContext !== r.context) : r.context && ol(n, r.context, !1), Vv(n, r.containerInfo);
  }
  function Gf(n, r, s, d, m) {
    return Kn(), Pv(m), r.flags |= 256, Cr(n, r, s, d), r.child;
  }
  var ru = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Xv(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function qv(n, r, s) {
    var d = r.pendingProps, m = lt.current, S = !1, E = (r.flags & 128) !== 0, D;
    if ((D = E) || (D = n !== null && n.memoizedState === null ? !1 : (m & 2) !== 0), D ? (S = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (m |= 1), Sn(lt, m & 1), n === null)
      return Sf(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (E = d.children, n = d.fallback, S ? (d = r.mode, S = r.child, E = { mode: "hidden", children: E }, !(d & 1) && S !== null ? (S.childLanes = 0, S.pendingProps = E) : S = Ec(E, d, 0, null), n = fu(n, d, s, null), S.return = r, n.return = r, S.sibling = n, r.child = S, r.child.memoizedState = Xv(s), r.memoizedState = ru, n) : Zv(r, E));
    if (m = n.memoizedState, m !== null && (D = m.dehydrated, D !== null))
      return r0(n, r, E, d, D, m, s);
    if (S) {
      S = d.fallback, E = r.mode, m = n.child, D = m.sibling;
      var P = { mode: "hidden", children: d.children };
      return !(E & 1) && r.child !== m ? (d = r.child, d.childLanes = 0, d.pendingProps = P, r.deletions = null) : (d = Cl(m, P), d.subtreeFlags = m.subtreeFlags & 14680064), D !== null ? S = Cl(D, S) : (S = fu(S, E, s, null), S.flags |= 2), S.return = r, d.return = r, d.sibling = S, r.child = d, d = S, S = r.child, E = n.child.memoizedState, E = E === null ? Xv(s) : { baseLanes: E.baseLanes | s, cachePool: null, transitions: E.transitions }, S.memoizedState = E, S.childLanes = n.childLanes & ~s, r.memoizedState = ru, d;
    }
    return S = n.child, n = S.sibling, d = Cl(S, { mode: "visible", children: d.children }), !(r.mode & 1) && (d.lanes = s), d.return = r, d.sibling = null, n !== null && (s = r.deletions, s === null ? (r.deletions = [n], r.flags |= 16) : s.push(n)), r.child = d, r.memoizedState = null, d;
  }
  function Zv(n, r) {
    return r = Ec({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ts(n, r, s, d) {
    return d !== null && Pv(d), Yu(r, n.child, null, s), n = Zv(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function r0(n, r, s, d, m, S, E) {
    if (s)
      return r.flags & 256 ? (r.flags &= -257, d = fc(Error(u(422))), ts(n, r, E, d)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (S = d.fallback, m = r.mode, d = Ec({ mode: "visible", children: d.children }, m, 0, null), S = fu(S, m, E, null), S.flags |= 2, d.return = r, S.return = r, d.sibling = S, r.child = d, r.mode & 1 && Yu(r, n.child, null, E), r.child.memoizedState = Xv(E), r.memoizedState = ru, S);
    if (!(r.mode & 1))
      return ts(n, r, E, null);
    if (m.data === "$!") {
      if (d = m.nextSibling && m.nextSibling.dataset, d)
        var D = d.dgst;
      return d = D, S = Error(u(419)), d = fc(S, d, void 0), ts(n, r, E, d);
    }
    if (D = (E & n.childLanes) !== 0, hr || D) {
      if (d = Yn, d !== null) {
        switch (E & -E) {
          case 4:
            m = 2;
            break;
          case 16:
            m = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            m = 32;
            break;
          case 536870912:
            m = 268435456;
            break;
          default:
            m = 0;
        }
        m = m & (d.suspendedLanes | E) ? 0 : m, m !== 0 && m !== S.retryLane && (S.retryLane = m, Ro(n, m), aa(d, n, m, -1));
      }
      return cp(), d = fc(Error(u(421))), ts(n, r, E, d);
    }
    return m.data === "$?" ? (r.flags |= 128, r.child = n.child, r = s0.bind(null, n), m._reactRetry = r, null) : (n = S.treeContext, _a = Ai(m.nextSibling), Qa = r, Hn = !0, di = null, n !== null && (ka[Jr++] = Ur, ka[Jr++] = To, ka[Jr++] = fi, Ur = n.id, To = n.overflow, fi = r), r = Zv(r, d.children), r.flags |= 4096, r);
  }
  function Jv(n, r, s) {
    n.lanes |= r;
    var d = n.alternate;
    d !== null && (d.lanes |= r), Nr(n.return, r, s);
  }
  function Yf(n, r, s, d, m) {
    var S = n.memoizedState;
    S === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: d, tail: s, tailMode: m } : (S.isBackwards = r, S.rendering = null, S.renderingStartTime = 0, S.last = d, S.tail = s, S.tailMode = m);
  }
  function ep(n, r, s) {
    var d = r.pendingProps, m = d.revealOrder, S = d.tail;
    if (Cr(n, r, d.children, s), d = lt.current, d & 2)
      d = d & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Jv(n, s, r);
            else if (n.tag === 19)
              Jv(n, s, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      d &= 1;
    }
    if (Sn(lt, d), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (m) {
        case "forwards":
          for (s = r.child, m = null; s !== null; )
            n = s.alternate, n !== null && Gn(n) === null && (m = s), s = s.sibling;
          s = m, s === null ? (m = r.child, r.child = null) : (m = s.sibling, s.sibling = null), Yf(r, !1, m, s, S);
          break;
        case "backwards":
          for (s = null, m = r.child, r.child = null; m !== null; ) {
            if (n = m.alternate, n !== null && Gn(n) === null) {
              r.child = m;
              break;
            }
            n = m.sibling, m.sibling = s, s = m, m = n;
          }
          Yf(r, !0, s, null, S);
          break;
        case "together":
          Yf(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function ea(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function $r(n, r, s) {
    if (n !== null && (r.dependencies = n.dependencies), No |= r.lanes, !(s & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(u(153));
    if (r.child !== null) {
      for (n = r.child, s = Cl(n, n.pendingProps), r.child = s, s.return = r; n.sibling !== null; )
        n = n.sibling, s = s.sibling = Cl(n, n.pendingProps), s.return = r;
      s.sibling = null;
    }
    return r.child;
  }
  function Mo(n, r, s) {
    switch (r.tag) {
      case 3:
        Hm(r), Kn();
        break;
      case 5:
        ot(r);
        break;
      case 1:
        jn(r.type) && mf(r);
        break;
      case 4:
        Vv(r, r.stateNode.containerInfo);
        break;
      case 10:
        var d = r.type._context, m = r.memoizedProps.value;
        Sn(Yi, d._currentValue), d._currentValue = m;
        break;
      case 13:
        if (d = r.memoizedState, d !== null)
          return d.dehydrated !== null ? (Sn(lt, lt.current & 1), r.flags |= 128, null) : s & r.child.childLanes ? qv(n, r, s) : (Sn(lt, lt.current & 1), n = $r(n, r, s), n !== null ? n.sibling : null);
        Sn(lt, lt.current & 1);
        break;
      case 19:
        if (d = (s & r.childLanes) !== 0, n.flags & 128) {
          if (d)
            return ep(n, r, s);
          r.flags |= 128;
        }
        if (m = r.memoizedState, m !== null && (m.rendering = null, m.tail = null, m.lastEffect = null), Sn(lt, lt.current), d)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, nu(n, r, s);
    }
    return $r(n, r, s);
  }
  var vc, au, hi, br;
  vc = function(n, r) {
    for (var s = r.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6)
        n.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === r)
        break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === r)
          return;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }, au = function() {
  }, hi = function(n, r, s, d) {
    var m = n.memoizedProps;
    if (m !== d) {
      n = r.stateNode, Yl(zi.current);
      var S = null;
      switch (s) {
        case "input":
          m = Se(n, m), d = Se(n, d), S = [];
          break;
        case "select":
          m = ae({}, m, { value: void 0 }), d = ae({}, d, { value: void 0 }), S = [];
          break;
        case "textarea":
          m = ln(n, m), d = ln(n, d), S = [];
          break;
        default:
          typeof m.onClick != "function" && typeof d.onClick == "function" && (n.onclick = hf);
      }
      pt(s, d);
      var E;
      s = null;
      for (te in m)
        if (!d.hasOwnProperty(te) && m.hasOwnProperty(te) && m[te] != null)
          if (te === "style") {
            var D = m[te];
            for (E in D)
              D.hasOwnProperty(E) && (s || (s = {}), s[E] = "");
          } else
            te !== "dangerouslySetInnerHTML" && te !== "children" && te !== "suppressContentEditableWarning" && te !== "suppressHydrationWarning" && te !== "autoFocus" && (p.hasOwnProperty(te) ? S || (S = []) : (S = S || []).push(te, null));
      for (te in d) {
        var P = d[te];
        if (D = m != null ? m[te] : void 0, d.hasOwnProperty(te) && P !== D && (P != null || D != null))
          if (te === "style")
            if (D) {
              for (E in D)
                !D.hasOwnProperty(E) || P && P.hasOwnProperty(E) || (s || (s = {}), s[E] = "");
              for (E in P)
                P.hasOwnProperty(E) && D[E] !== P[E] && (s || (s = {}), s[E] = P[E]);
            } else
              s || (S || (S = []), S.push(
                te,
                s
              )), s = P;
          else
            te === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, D = D ? D.__html : void 0, P != null && D !== P && (S = S || []).push(te, P)) : te === "children" ? typeof P != "string" && typeof P != "number" || (S = S || []).push(te, "" + P) : te !== "suppressContentEditableWarning" && te !== "suppressHydrationWarning" && (p.hasOwnProperty(te) ? (P != null && te === "onScroll" && Nn("scroll", n), S || D === P || (S = [])) : (S = S || []).push(te, P));
      }
      s && (S = S || []).push("style", s);
      var te = S;
      (r.updateQueue = te) && (r.flags |= 4);
    }
  }, br = function(n, r, s, d) {
    s !== d && (r.flags |= 4);
  };
  function pc(n, r) {
    if (!Hn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var s = null; r !== null; )
            r.alternate !== null && (s = r), r = r.sibling;
          s === null ? n.tail = null : s.sibling = null;
          break;
        case "collapsed":
          s = n.tail;
          for (var d = null; s !== null; )
            s.alternate !== null && (d = s), s = s.sibling;
          d === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : d.sibling = null;
      }
  }
  function ta(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, s = 0, d = 0;
    if (r)
      for (var m = n.child; m !== null; )
        s |= m.lanes | m.childLanes, d |= m.subtreeFlags & 14680064, d |= m.flags & 14680064, m.return = n, m = m.sibling;
    else
      for (m = n.child; m !== null; )
        s |= m.lanes | m.childLanes, d |= m.subtreeFlags, d |= m.flags, m.return = n, m = m.sibling;
    return n.subtreeFlags |= d, n.childLanes = s, r;
  }
  function a0(n, r, s) {
    var d = r.pendingProps;
    switch (Av(r), r.tag) {
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
        return ta(r), null;
      case 1:
        return jn(r.type) && ci(), ta(r), null;
      case 3:
        return d = r.stateNode, vl(), yn(Zn), yn(yt), kf(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), (n === null || n.child === null) && (Cf(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, di !== null && (bc(di), di = null))), au(n, r), ta(r), null;
      case 5:
        Bt(r);
        var m = Yl(Qu.current);
        if (s = r.type, n !== null && r.stateNode != null)
          hi(n, r, s, d, m), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!d) {
            if (r.stateNode === null)
              throw Error(u(166));
            return ta(r), null;
          }
          if (n = Yl(zi.current), Cf(r)) {
            d = r.stateNode, s = r.type;
            var S = r.memoizedProps;
            switch (d[Ki] = r, d[Wl] = S, n = (r.mode & 1) !== 0, s) {
              case "dialog":
                Nn("cancel", d), Nn("close", d);
                break;
              case "iframe":
              case "object":
              case "embed":
                Nn("load", d);
                break;
              case "video":
              case "audio":
                for (m = 0; m < qs.length; m++)
                  Nn(qs[m], d);
                break;
              case "source":
                Nn("error", d);
                break;
              case "img":
              case "image":
              case "link":
                Nn(
                  "error",
                  d
                ), Nn("load", d);
                break;
              case "details":
                Nn("toggle", d);
                break;
              case "input":
                Et(d, S), Nn("invalid", d);
                break;
              case "select":
                d._wrapperState = { wasMultiple: !!S.multiple }, Nn("invalid", d);
                break;
              case "textarea":
                Je(d, S), Nn("invalid", d);
            }
            pt(s, S), m = null;
            for (var E in S)
              if (S.hasOwnProperty(E)) {
                var D = S[E];
                E === "children" ? typeof D == "string" ? d.textContent !== D && (S.suppressHydrationWarning !== !0 && pf(d.textContent, D, n), m = ["children", D]) : typeof D == "number" && d.textContent !== "" + D && (S.suppressHydrationWarning !== !0 && pf(
                  d.textContent,
                  D,
                  n
                ), m = ["children", "" + D]) : p.hasOwnProperty(E) && D != null && E === "onScroll" && Nn("scroll", d);
              }
            switch (s) {
              case "input":
                Ze(d), Wt(d, S, !0);
                break;
              case "textarea":
                Ze(d), qt(d);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof S.onClick == "function" && (d.onclick = hf);
            }
            d = m, r.updateQueue = d, d !== null && (r.flags |= 4);
          } else {
            E = m.nodeType === 9 ? m : m.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = It(s)), n === "http://www.w3.org/1999/xhtml" ? s === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof d.is == "string" ? n = E.createElement(s, { is: d.is }) : (n = E.createElement(s), s === "select" && (E = n, d.multiple ? E.multiple = !0 : d.size && (E.size = d.size))) : n = E.createElementNS(n, s), n[Ki] = r, n[Wl] = d, vc(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (E = ht(s, d), s) {
                case "dialog":
                  Nn("cancel", n), Nn("close", n), m = d;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Nn("load", n), m = d;
                  break;
                case "video":
                case "audio":
                  for (m = 0; m < qs.length; m++)
                    Nn(qs[m], n);
                  m = d;
                  break;
                case "source":
                  Nn("error", n), m = d;
                  break;
                case "img":
                case "image":
                case "link":
                  Nn(
                    "error",
                    n
                  ), Nn("load", n), m = d;
                  break;
                case "details":
                  Nn("toggle", n), m = d;
                  break;
                case "input":
                  Et(n, d), m = Se(n, d), Nn("invalid", n);
                  break;
                case "option":
                  m = d;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!d.multiple }, m = ae({}, d, { value: void 0 }), Nn("invalid", n);
                  break;
                case "textarea":
                  Je(n, d), m = ln(n, d), Nn("invalid", n);
                  break;
                default:
                  m = d;
              }
              pt(s, m), D = m;
              for (S in D)
                if (D.hasOwnProperty(S)) {
                  var P = D[S];
                  S === "style" ? zt(n, P) : S === "dangerouslySetInnerHTML" ? (P = P ? P.__html : void 0, P != null && cn(n, P)) : S === "children" ? typeof P == "string" ? (s !== "textarea" || P !== "") && fn(n, P) : typeof P == "number" && fn(n, "" + P) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (p.hasOwnProperty(S) ? P != null && S === "onScroll" && Nn("scroll", n) : P != null && U(n, S, P, E));
                }
              switch (s) {
                case "input":
                  Ze(n), Wt(n, d, !1);
                  break;
                case "textarea":
                  Ze(n), qt(n);
                  break;
                case "option":
                  d.value != null && n.setAttribute("value", "" + st(d.value));
                  break;
                case "select":
                  n.multiple = !!d.multiple, S = d.value, S != null ? vt(n, !!d.multiple, S, !1) : d.defaultValue != null && vt(
                    n,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof m.onClick == "function" && (n.onclick = hf);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  d = !!d.autoFocus;
                  break e;
                case "img":
                  d = !0;
                  break e;
                default:
                  d = !1;
              }
            }
            d && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return ta(r), null;
      case 6:
        if (n && r.stateNode != null)
          br(n, r, n.memoizedProps, d);
        else {
          if (typeof d != "string" && r.stateNode === null)
            throw Error(u(166));
          if (s = Yl(Qu.current), Yl(zi.current), Cf(r)) {
            if (d = r.stateNode, s = r.memoizedProps, d[Ki] = r, (S = d.nodeValue !== s) && (n = Qa, n !== null))
              switch (n.tag) {
                case 3:
                  pf(d.nodeValue, s, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && pf(d.nodeValue, s, (n.mode & 1) !== 0);
              }
            S && (r.flags |= 4);
          } else
            d = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(d), d[Ki] = r, r.stateNode = d;
        }
        return ta(r), null;
      case 13:
        if (yn(lt), d = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Hn && _a !== null && r.mode & 1 && !(r.flags & 128))
            xm(), Kn(), r.flags |= 98560, S = !1;
          else if (S = Cf(r), d !== null && d.dehydrated !== null) {
            if (n === null) {
              if (!S)
                throw Error(u(318));
              if (S = r.memoizedState, S = S !== null ? S.dehydrated : null, !S)
                throw Error(u(317));
              S[Ki] = r;
            } else
              Kn(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            ta(r), S = !1;
          } else
            di !== null && (bc(di), di = null), S = !0;
          if (!S)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = s, r) : (d = d !== null, d !== (n !== null && n.memoizedState !== null) && d && (r.child.flags |= 8192, r.mode & 1 && (n === null || lt.current & 1 ? wr === 0 && (wr = 3) : cp())), r.updateQueue !== null && (r.flags |= 4), ta(r), null);
      case 4:
        return vl(), au(n, r), n === null && Bu(r.stateNode.containerInfo), ta(r), null;
      case 10:
        return sl(r.type._context), ta(r), null;
      case 17:
        return jn(r.type) && ci(), ta(r), null;
      case 19:
        if (yn(lt), S = r.memoizedState, S === null)
          return ta(r), null;
        if (d = (r.flags & 128) !== 0, E = S.rendering, E === null)
          if (d)
            pc(S, !1);
          else {
            if (wr !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (E = Gn(n), E !== null) {
                  for (r.flags |= 128, pc(S, !1), d = E.updateQueue, d !== null && (r.updateQueue = d, r.flags |= 4), r.subtreeFlags = 0, d = s, s = r.child; s !== null; )
                    S = s, n = d, S.flags &= 14680066, E = S.alternate, E === null ? (S.childLanes = 0, S.lanes = n, S.child = null, S.subtreeFlags = 0, S.memoizedProps = null, S.memoizedState = null, S.updateQueue = null, S.dependencies = null, S.stateNode = null) : (S.childLanes = E.childLanes, S.lanes = E.lanes, S.child = E.child, S.subtreeFlags = 0, S.deletions = null, S.memoizedProps = E.memoizedProps, S.memoizedState = E.memoizedState, S.updateQueue = E.updateQueue, S.type = E.type, n = E.dependencies, S.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), s = s.sibling;
                  return Sn(lt, lt.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            S.tail !== null && dn() > us && (r.flags |= 128, d = !0, pc(S, !1), r.lanes = 4194304);
          }
        else {
          if (!d)
            if (n = Gn(E), n !== null) {
              if (r.flags |= 128, d = !0, s = n.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), pc(S, !0), S.tail === null && S.tailMode === "hidden" && !E.alternate && !Hn)
                return ta(r), null;
            } else
              2 * dn() - S.renderingStartTime > us && s !== 1073741824 && (r.flags |= 128, d = !0, pc(S, !1), r.lanes = 4194304);
          S.isBackwards ? (E.sibling = r.child, r.child = E) : (s = S.last, s !== null ? s.sibling = E : r.child = E, S.last = E);
        }
        return S.tail !== null ? (r = S.tail, S.rendering = r, S.tail = r.sibling, S.renderingStartTime = dn(), r.sibling = null, s = lt.current, Sn(lt, d ? s & 1 | 2 : s & 1), r) : (ta(r), null);
      case 22:
      case 23:
        return sp(), d = r.memoizedState !== null, n !== null && n.memoizedState !== null !== d && (r.flags |= 8192), d && r.mode & 1 ? Za & 1073741824 && (ta(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ta(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, r.tag));
  }
  function tp(n, r) {
    switch (Av(r), r.tag) {
      case 1:
        return jn(r.type) && ci(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return vl(), yn(Zn), yn(yt), kf(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Bt(r), null;
      case 13:
        if (yn(lt), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(u(340));
          Kn();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return yn(lt), null;
      case 4:
        return vl(), null;
      case 10:
        return sl(r.type._context), null;
      case 22:
      case 23:
        return sp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hc = !1, Er = !1, Um = typeof WeakSet == "function" ? WeakSet : Set, Fe = null;
  function ns(n, r) {
    var s = n.ref;
    if (s !== null)
      if (typeof s == "function")
        try {
          s(null);
        } catch (d) {
          er(n, r, d);
        }
      else
        s.current = null;
  }
  function mc(n, r, s) {
    try {
      s();
    } catch (d) {
      er(n, r, d);
    }
  }
  var Im = !1;
  function $m(n, r) {
    if (Rv = Ul, n = sf(), bo(n)) {
      if ("selectionStart" in n)
        var s = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          s = (s = n.ownerDocument) && s.defaultView || window;
          var d = s.getSelection && s.getSelection();
          if (d && d.rangeCount !== 0) {
            s = d.anchorNode;
            var m = d.anchorOffset, S = d.focusNode;
            d = d.focusOffset;
            try {
              s.nodeType, S.nodeType;
            } catch (xe) {
              s = null;
              break e;
            }
            var E = 0, D = -1, P = -1, te = 0, pe = 0, me = n, ve = null;
            t:
              for (; ; ) {
                for (var Pe; me !== s || m !== 0 && me.nodeType !== 3 || (D = E + m), me !== S || d !== 0 && me.nodeType !== 3 || (P = E + d), me.nodeType === 3 && (E += me.nodeValue.length), (Pe = me.firstChild) !== null; )
                  ve = me, me = Pe;
                for (; ; ) {
                  if (me === n)
                    break t;
                  if (ve === s && ++te === m && (D = E), ve === S && ++pe === d && (P = E), (Pe = me.nextSibling) !== null)
                    break;
                  me = ve, ve = me.parentNode;
                }
                me = Pe;
              }
            s = D === -1 || P === -1 ? null : { start: D, end: P };
          } else
            s = null;
        }
      s = s || { start: 0, end: 0 };
    } else
      s = null;
    for (Vl = { focusedElem: n, selectionRange: s }, Ul = !1, Fe = r; Fe !== null; )
      if (r = Fe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Fe = n;
      else
        for (; Fe !== null; ) {
          r = Fe;
          try {
            var je = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (je !== null) {
                    var Ke = je.memoizedProps, ur = je.memoizedState, K = r.stateNode, F = K.getSnapshotBeforeUpdate(r.elementType === r.type ? Ke : Xa(r.type, Ke), ur);
                    K.__reactInternalSnapshotBeforeUpdate = F;
                  }
                  break;
                case 3:
                  var X = r.stateNode.containerInfo;
                  X.nodeType === 1 ? X.textContent = "" : X.nodeType === 9 && X.documentElement && X.removeChild(X.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(u(163));
              }
          } catch (xe) {
            er(r, r.return, xe);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Fe = n;
            break;
          }
          Fe = r.return;
        }
    return je = Im, Im = !1, je;
  }
  function gc(n, r, s) {
    var d = r.updateQueue;
    if (d = d !== null ? d.lastEffect : null, d !== null) {
      var m = d = d.next;
      do {
        if ((m.tag & n) === n) {
          var S = m.destroy;
          m.destroy = void 0, S !== void 0 && mc(r, s, S);
        }
        m = m.next;
      } while (m !== d);
    }
  }
  function yc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & n) === n) {
          var d = s.create;
          s.destroy = d();
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function np(n) {
    var r = n.ref;
    if (r !== null) {
      var s = n.stateNode;
      switch (n.tag) {
        case 5:
          n = s;
          break;
        default:
          n = s;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function rp(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, rp(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ki], delete r[Wl], delete r[Mv], delete r[q1], delete r[Ov])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Fm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Qf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Fm(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function rs(n, r, s) {
    var d = n.tag;
    if (d === 5 || d === 6)
      n = n.stateNode, r ? s.nodeType === 8 ? s.parentNode.insertBefore(n, r) : s.insertBefore(n, r) : (s.nodeType === 8 ? (r = s.parentNode, r.insertBefore(n, s)) : (r = s, r.appendChild(n)), s = s._reactRootContainer, s != null || r.onclick !== null || (r.onclick = hf));
    else if (d !== 4 && (n = n.child, n !== null))
      for (rs(n, r, s), n = n.sibling; n !== null; )
        rs(n, r, s), n = n.sibling;
  }
  function Xi(n, r, s) {
    var d = n.tag;
    if (d === 5 || d === 6)
      n = n.stateNode, r ? s.insertBefore(n, r) : s.appendChild(n);
    else if (d !== 4 && (n = n.child, n !== null))
      for (Xi(n, r, s), n = n.sibling; n !== null; )
        Xi(n, r, s), n = n.sibling;
  }
  var Vn = null, Dr = !1;
  function mi(n, r, s) {
    for (s = s.child; s !== null; )
      as(n, r, s), s = s.sibling;
  }
  function as(n, r, s) {
    if (ir && typeof ir.onCommitFiberUnmount == "function")
      try {
        ir.onCommitFiberUnmount(Hr, s);
      } catch (D) {
      }
    switch (s.tag) {
      case 5:
        Er || ns(s, r);
      case 6:
        var d = Vn, m = Dr;
        Vn = null, mi(n, r, s), Vn = d, Dr = m, Vn !== null && (Dr ? (n = Vn, s = s.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(s) : n.removeChild(s)) : Vn.removeChild(s.stateNode));
        break;
      case 18:
        Vn !== null && (Dr ? (n = Vn, s = s.stateNode, n.nodeType === 8 ? rl(n.parentNode, s) : n.nodeType === 1 && rl(n, s), $s(n)) : rl(Vn, s.stateNode));
        break;
      case 4:
        d = Vn, m = Dr, Vn = s.stateNode.containerInfo, Dr = !0, mi(n, r, s), Vn = d, Dr = m;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Er && (d = s.updateQueue, d !== null && (d = d.lastEffect, d !== null))) {
          m = d = d.next;
          do {
            var S = m, E = S.destroy;
            S = S.tag, E !== void 0 && (S & 2 || S & 4) && mc(s, r, E), m = m.next;
          } while (m !== d);
        }
        mi(n, r, s);
        break;
      case 1:
        if (!Er && (ns(s, r), d = s.stateNode, typeof d.componentWillUnmount == "function"))
          try {
            d.props = s.memoizedProps, d.state = s.memoizedState, d.componentWillUnmount();
          } catch (D) {
            er(s, r, D);
          }
        mi(n, r, s);
        break;
      case 21:
        mi(n, r, s);
        break;
      case 22:
        s.mode & 1 ? (Er = (d = Er) || s.memoizedState !== null, mi(n, r, s), Er = d) : mi(n, r, s);
        break;
      default:
        mi(n, r, s);
    }
  }
  function Oo(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var s = n.stateNode;
      s === null && (s = n.stateNode = new Um()), r.forEach(function(d) {
        var m = c0.bind(null, n, d);
        s.has(d) || (s.add(d), d.then(m, m));
      });
    }
  }
  function Pi(n, r) {
    var s = r.deletions;
    if (s !== null)
      for (var d = 0; d < s.length; d++) {
        var m = s[d];
        try {
          var S = n, E = r, D = E;
          e:
            for (; D !== null; ) {
              switch (D.tag) {
                case 5:
                  Vn = D.stateNode, Dr = !1;
                  break e;
                case 3:
                  Vn = D.stateNode.containerInfo, Dr = !0;
                  break e;
                case 4:
                  Vn = D.stateNode.containerInfo, Dr = !0;
                  break e;
              }
              D = D.return;
            }
          if (Vn === null)
            throw Error(u(160));
          as(S, E, m), Vn = null, Dr = !1;
          var P = m.alternate;
          P !== null && (P.return = null), m.return = null;
        } catch (te) {
          er(m, r, te);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        jm(r, n), r = r.sibling;
  }
  function jm(n, r) {
    var s = n.alternate, d = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Pi(r, n), qi(n), d & 4) {
          try {
            gc(3, n, n.return), yc(3, n);
          } catch (Ke) {
            er(n, n.return, Ke);
          }
          try {
            gc(5, n, n.return);
          } catch (Ke) {
            er(n, n.return, Ke);
          }
        }
        break;
      case 1:
        Pi(r, n), qi(n), d & 512 && s !== null && ns(s, s.return);
        break;
      case 5:
        if (Pi(r, n), qi(n), d & 512 && s !== null && ns(s, s.return), n.flags & 32) {
          var m = n.stateNode;
          try {
            fn(m, "");
          } catch (Ke) {
            er(n, n.return, Ke);
          }
        }
        if (d & 4 && (m = n.stateNode, m != null)) {
          var S = n.memoizedProps, E = s !== null ? s.memoizedProps : S, D = n.type, P = n.updateQueue;
          if (n.updateQueue = null, P !== null)
            try {
              D === "input" && S.type === "radio" && S.name != null && Ct(m, S), ht(D, E);
              var te = ht(D, S);
              for (E = 0; E < P.length; E += 2) {
                var pe = P[E], me = P[E + 1];
                pe === "style" ? zt(m, me) : pe === "dangerouslySetInnerHTML" ? cn(m, me) : pe === "children" ? fn(m, me) : U(m, pe, me, te);
              }
              switch (D) {
                case "input":
                  kt(m, S);
                  break;
                case "textarea":
                  Xt(m, S);
                  break;
                case "select":
                  var ve = m._wrapperState.wasMultiple;
                  m._wrapperState.wasMultiple = !!S.multiple;
                  var Pe = S.value;
                  Pe != null ? vt(m, !!S.multiple, Pe, !1) : ve !== !!S.multiple && (S.defaultValue != null ? vt(
                    m,
                    !!S.multiple,
                    S.defaultValue,
                    !0
                  ) : vt(m, !!S.multiple, S.multiple ? [] : "", !1));
              }
              m[Wl] = S;
            } catch (Ke) {
              er(n, n.return, Ke);
            }
        }
        break;
      case 6:
        if (Pi(r, n), qi(n), d & 4) {
          if (n.stateNode === null)
            throw Error(u(162));
          m = n.stateNode, S = n.memoizedProps;
          try {
            m.nodeValue = S;
          } catch (Ke) {
            er(n, n.return, Ke);
          }
        }
        break;
      case 3:
        if (Pi(r, n), qi(n), d & 4 && s !== null && s.memoizedState.isDehydrated)
          try {
            $s(r.containerInfo);
          } catch (Ke) {
            er(n, n.return, Ke);
          }
        break;
      case 4:
        Pi(r, n), qi(n);
        break;
      case 13:
        Pi(r, n), qi(n), m = n.child, m.flags & 8192 && (S = m.memoizedState !== null, m.stateNode.isHidden = S, !S || m.alternate !== null && m.alternate.memoizedState !== null || (op = dn())), d & 4 && Oo(n);
        break;
      case 22:
        if (pe = s !== null && s.memoizedState !== null, n.mode & 1 ? (Er = (te = Er) || pe, Pi(r, n), Er = te) : Pi(r, n), qi(n), d & 8192) {
          if (te = n.memoizedState !== null, (n.stateNode.isHidden = te) && !pe && n.mode & 1)
            for (Fe = n, pe = n.child; pe !== null; ) {
              for (me = Fe = pe; Fe !== null; ) {
                switch (ve = Fe, Pe = ve.child, ve.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    gc(4, ve, ve.return);
                    break;
                  case 1:
                    ns(ve, ve.return);
                    var je = ve.stateNode;
                    if (typeof je.componentWillUnmount == "function") {
                      d = ve, s = ve.return;
                      try {
                        r = d, je.props = r.memoizedProps, je.state = r.memoizedState, je.componentWillUnmount();
                      } catch (Ke) {
                        er(d, s, Ke);
                      }
                    }
                    break;
                  case 5:
                    ns(ve, ve.return);
                    break;
                  case 22:
                    if (ve.memoizedState !== null) {
                      ap(me);
                      continue;
                    }
                }
                Pe !== null ? (Pe.return = ve, Fe = Pe) : ap(me);
              }
              pe = pe.sibling;
            }
          e:
            for (pe = null, me = n; ; ) {
              if (me.tag === 5) {
                if (pe === null) {
                  pe = me;
                  try {
                    m = me.stateNode, te ? (S = m.style, typeof S.setProperty == "function" ? S.setProperty("display", "none", "important") : S.display = "none") : (D = me.stateNode, P = me.memoizedProps.style, E = P != null && P.hasOwnProperty("display") ? P.display : null, D.style.display = We("display", E));
                  } catch (Ke) {
                    er(n, n.return, Ke);
                  }
                }
              } else if (me.tag === 6) {
                if (pe === null)
                  try {
                    me.stateNode.nodeValue = te ? "" : me.memoizedProps;
                  } catch (Ke) {
                    er(n, n.return, Ke);
                  }
              } else if ((me.tag !== 22 && me.tag !== 23 || me.memoizedState === null || me === n) && me.child !== null) {
                me.child.return = me, me = me.child;
                continue;
              }
              if (me === n)
                break e;
              for (; me.sibling === null; ) {
                if (me.return === null || me.return === n)
                  break e;
                pe === me && (pe = null), me = me.return;
              }
              pe === me && (pe = null), me.sibling.return = me.return, me = me.sibling;
            }
        }
        break;
      case 19:
        Pi(r, n), qi(n), d & 4 && Oo(n);
        break;
      case 21:
        break;
      default:
        Pi(
          r,
          n
        ), qi(n);
    }
  }
  function qi(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var s = n.return; s !== null; ) {
            if (Fm(s)) {
              var d = s;
              break e;
            }
            s = s.return;
          }
          throw Error(u(160));
        }
        switch (d.tag) {
          case 5:
            var m = d.stateNode;
            d.flags & 32 && (fn(m, ""), d.flags &= -33);
            var S = Qf(n);
            Xi(n, S, m);
            break;
          case 3:
          case 4:
            var E = d.stateNode.containerInfo, D = Qf(n);
            rs(n, D, E);
            break;
          default:
            throw Error(u(161));
        }
      } catch (P) {
        er(n, n.return, P);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Vm(n, r, s) {
    Fe = n, is(n);
  }
  function is(n, r, s) {
    for (var d = (n.mode & 1) !== 0; Fe !== null; ) {
      var m = Fe, S = m.child;
      if (m.tag === 22 && d) {
        var E = m.memoizedState !== null || hc;
        if (!E) {
          var D = m.alternate, P = D !== null && D.memoizedState !== null || Er;
          D = hc;
          var te = Er;
          if (hc = E, (Er = P) && !te)
            for (Fe = m; Fe !== null; )
              E = Fe, P = E.child, E.tag === 22 && E.memoizedState !== null ? Wm(m) : P !== null ? (P.return = E, Fe = P) : Wm(m);
          for (; S !== null; )
            Fe = S, is(S), S = S.sibling;
          Fe = m, hc = D, Er = te;
        }
        Bm(n);
      } else
        m.subtreeFlags & 8772 && S !== null ? (S.return = m, Fe = S) : Bm(n);
    }
  }
  function Bm(n) {
    for (; Fe !== null; ) {
      var r = Fe;
      if (r.flags & 8772) {
        var s = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                Er || yc(5, r);
                break;
              case 1:
                var d = r.stateNode;
                if (r.flags & 4 && !Er)
                  if (s === null)
                    d.componentDidMount();
                  else {
                    var m = r.elementType === r.type ? s.memoizedProps : Xa(r.type, s.memoizedProps);
                    d.componentDidUpdate(m, s.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                var S = r.updateQueue;
                S !== null && Gl(r, S, d);
                break;
              case 3:
                var E = r.updateQueue;
                if (E !== null) {
                  if (s = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        s = r.child.stateNode;
                        break;
                      case 1:
                        s = r.child.stateNode;
                    }
                  Gl(r, E, s);
                }
                break;
              case 5:
                var D = r.stateNode;
                if (s === null && r.flags & 4) {
                  s = D;
                  var P = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      P.autoFocus && s.focus();
                      break;
                    case "img":
                      P.src && (s.src = P.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var te = r.alternate;
                  if (te !== null) {
                    var pe = te.memoizedState;
                    if (pe !== null) {
                      var me = pe.dehydrated;
                      me !== null && $s(me);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(u(163));
            }
          Er || r.flags & 512 && np(r);
        } catch (ve) {
          er(r, r.return, ve);
        }
      }
      if (r === n) {
        Fe = null;
        break;
      }
      if (s = r.sibling, s !== null) {
        s.return = r.return, Fe = s;
        break;
      }
      Fe = r.return;
    }
  }
  function ap(n) {
    for (; Fe !== null; ) {
      var r = Fe;
      if (r === n) {
        Fe = null;
        break;
      }
      var s = r.sibling;
      if (s !== null) {
        s.return = r.return, Fe = s;
        break;
      }
      Fe = r.return;
    }
  }
  function Wm(n) {
    for (; Fe !== null; ) {
      var r = Fe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var s = r.return;
            try {
              yc(4, r);
            } catch (P) {
              er(r, s, P);
            }
            break;
          case 1:
            var d = r.stateNode;
            if (typeof d.componentDidMount == "function") {
              var m = r.return;
              try {
                d.componentDidMount();
              } catch (P) {
                er(r, m, P);
              }
            }
            var S = r.return;
            try {
              np(r);
            } catch (P) {
              er(r, S, P);
            }
            break;
          case 5:
            var E = r.return;
            try {
              np(r);
            } catch (P) {
              er(r, E, P);
            }
        }
      } catch (P) {
        er(r, r.return, P);
      }
      if (r === n) {
        Fe = null;
        break;
      }
      var D = r.sibling;
      if (D !== null) {
        D.return = r.return, Fe = D;
        break;
      }
      Fe = r.return;
    }
  }
  var Xf = Math.ceil, Sc = I.ReactCurrentDispatcher, ip = I.ReactCurrentOwner, na = I.ReactCurrentBatchConfig, Yt = 0, Yn = null, Jn = null, Lr = 0, Za = 0, os = Dt(0), wr = 0, Cc = null, No = 0, qf = 0, ls = 0, iu = null, sa = null, op = 0, us = 1 / 0, Do = null, Zf = !1, ou = null, Zi = null, gl = !1, yl = null, Jf = 0, ss = 0, ed = null, lu = -1, uu = 0;
  function ra() {
    return Yt & 6 ? dn() : lu !== -1 ? lu : lu = dn();
  }
  function mr(n) {
    return n.mode & 1 ? Yt & 2 && Lr !== 0 ? Lr & -Lr : bf.transition !== null ? (uu === 0 && (uu = Va()), uu) : (n = Vt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ov(n.type)), n) : 1;
  }
  function aa(n, r, s, d) {
    if (50 < ss)
      throw ss = 0, ed = null, Error(u(185));
    Ba(n, s, d), (!(Yt & 2) || n !== Yn) && (n === Yn && (!(Yt & 2) && (qf |= s), wr === 4 && gi(n, Lr)), ia(n, d), s === 1 && Yt === 0 && !(r.mode & 1) && (us = dn() + 500, Or && Ta()));
  }
  function ia(n, r) {
    var s = n.callbackNode;
    qn(n, r);
    var d = _t(n, n === Yn ? Lr : 0);
    if (d === 0)
      s !== null && fo(s), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = d & -d, n.callbackPriority !== r) {
      if (s != null && fo(s), r === 1)
        n.tag === 0 ? Dv(Km.bind(null, n)) : Nv(Km.bind(null, n)), _v(function() {
          !(Yt & 6) && Ta();
        }), s = null;
      else {
        switch (vr(d)) {
          case 1:
            s = Xr;
            break;
          case 4:
            s = Nt;
            break;
          case 16:
            s = kr;
            break;
          case 536870912:
            s = la;
            break;
          default:
            s = kr;
        }
        s = dp(s, cs.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = s;
    }
  }
  function cs(n, r) {
    if (lu = -1, uu = 0, Yt & 6)
      throw Error(u(327));
    var s = n.callbackNode;
    if (ds() && n.callbackNode !== s)
      return null;
    var d = _t(n, n === Yn ? Lr : 0);
    if (d === 0)
      return null;
    if (d & 30 || d & n.expiredLanes || r)
      r = nd(n, d);
    else {
      r = d;
      var m = Yt;
      Yt |= 2;
      var S = td();
      (Yn !== n || Lr !== r) && (Do = null, us = dn() + 500, su(n, r));
      do
        try {
          o0();
          break;
        } catch (D) {
          Gm(n, D);
        }
      while (!0);
      Uv(), Sc.current = S, Yt = m, Jn !== null ? r = 0 : (Yn = null, Lr = 0, r = wr);
    }
    if (r !== 0) {
      if (r === 2 && (m = or(n), m !== 0 && (d = m, r = lp(n, m))), r === 1)
        throw s = Cc, su(n, 0), gi(n, d), ia(n, dn()), s;
      if (r === 6)
        gi(n, d);
      else {
        if (m = n.current.alternate, !(d & 30) && !up(m) && (r = nd(n, d), r === 2 && (S = or(n), S !== 0 && (d = S, r = lp(n, S))), r === 1))
          throw s = Cc, su(n, 0), gi(n, d), ia(n, dn()), s;
        switch (n.finishedWork = m, n.finishedLanes = d, r) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            cu(n, sa, Do);
            break;
          case 3:
            if (gi(n, d), (d & 130023424) === d && (r = op + 500 - dn(), 10 < r)) {
              if (_t(n, 0) !== 0)
                break;
              if (m = n.suspendedLanes, (m & d) !== d) {
                ra(), n.pingedLanes |= n.suspendedLanes & m;
                break;
              }
              n.timeoutHandle = Bl(cu.bind(null, n, sa, Do), r);
              break;
            }
            cu(n, sa, Do);
            break;
          case 4:
            if (gi(n, d), (d & 4194240) === d)
              break;
            for (r = n.eventTimes, m = -1; 0 < d; ) {
              var E = 31 - Xn(d);
              S = 1 << E, E = r[E], E > m && (m = E), d &= ~S;
            }
            if (d = m, d = dn() - d, d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * Xf(d / 1960)) - d, 10 < d) {
              n.timeoutHandle = Bl(cu.bind(null, n, sa, Do), d);
              break;
            }
            cu(n, sa, Do);
            break;
          case 5:
            cu(n, sa, Do);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return ia(n, dn()), n.callbackNode === s ? cs.bind(null, n) : null;
  }
  function lp(n, r) {
    var s = iu;
    return n.current.memoizedState.isDehydrated && (su(n, r).flags |= 256), n = nd(n, r), n !== 2 && (r = sa, sa = s, r !== null && bc(r)), n;
  }
  function bc(n) {
    sa === null ? sa = n : sa.push.apply(sa, n);
  }
  function up(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var s = r.updateQueue;
        if (s !== null && (s = s.stores, s !== null))
          for (var d = 0; d < s.length; d++) {
            var m = s[d], S = m.getSnapshot;
            m = m.value;
            try {
              if (!li(S(), m))
                return !1;
            } catch (E) {
              return !1;
            }
          }
      }
      if (s = r.child, r.subtreeFlags & 16384 && s !== null)
        s.return = r, r = s;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function gi(n, r) {
    for (r &= ~ls, r &= ~qf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var s = 31 - Xn(r), d = 1 << s;
      n[s] = -1, r &= ~d;
    }
  }
  function Km(n) {
    if (Yt & 6)
      throw Error(u(327));
    ds();
    var r = _t(n, 0);
    if (!(r & 1))
      return ia(n, dn()), null;
    var s = nd(n, r);
    if (n.tag !== 0 && s === 2) {
      var d = or(n);
      d !== 0 && (r = d, s = lp(n, d));
    }
    if (s === 1)
      throw s = Cc, su(n, 0), gi(n, r), ia(n, dn()), s;
    if (s === 6)
      throw Error(u(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, cu(n, sa, Do), ia(n, dn()), null;
  }
  function fs(n, r) {
    var s = Yt;
    Yt |= 1;
    try {
      return n(r);
    } finally {
      Yt = s, Yt === 0 && (us = dn() + 500, Or && Ta());
    }
  }
  function Sl(n) {
    yl !== null && yl.tag === 0 && !(Yt & 6) && ds();
    var r = Yt;
    Yt |= 1;
    var s = na.transition, d = Vt;
    try {
      if (na.transition = null, Vt = 1, n)
        return n();
    } finally {
      Vt = d, na.transition = s, Yt = r, !(Yt & 6) && Ta();
    }
  }
  function sp() {
    Za = os.current, yn(os);
  }
  function su(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var s = n.timeoutHandle;
    if (s !== -1 && (n.timeoutHandle = -1, Cm(s)), Jn !== null)
      for (s = Jn.return; s !== null; ) {
        var d = s;
        switch (Av(d), d.tag) {
          case 1:
            d = d.type.childContextTypes, d != null && ci();
            break;
          case 3:
            vl(), yn(Zn), yn(yt), kf();
            break;
          case 5:
            Bt(d);
            break;
          case 4:
            vl();
            break;
          case 13:
            yn(lt);
            break;
          case 19:
            yn(lt);
            break;
          case 10:
            sl(d.type._context);
            break;
          case 22:
          case 23:
            sp();
        }
        s = s.return;
      }
    if (Yn = n, Jn = n = Cl(n.current, null), Lr = Za = r, wr = 0, Cc = null, ls = qf = No = 0, sa = iu = null, Ir !== null) {
      for (r = 0; r < Ir.length; r++)
        if (s = Ir[r], d = s.interleaved, d !== null) {
          s.interleaved = null;
          var m = d.next, S = s.pending;
          if (S !== null) {
            var E = S.next;
            S.next = m, d.next = E;
          }
          s.pending = d;
        }
      Ir = null;
    }
    return n;
  }
  function Gm(n, r) {
    do {
      var s = Jn;
      try {
        if (Uv(), _f.current = Bf, ut) {
          for (var d = Un.memoizedState; d !== null; ) {
            var m = d.queue;
            m !== null && (m.pending = null), d = d.next;
          }
          ut = !1;
        }
        if (Ql = 0, rn = ue = Un = null, Qi = !1, qa = 0, ip.current = null, s === null || s.return === null) {
          wr = 1, Cc = r, Jn = null;
          break;
        }
        e: {
          var S = n, E = s.return, D = s, P = r;
          if (r = Lr, D.flags |= 32768, P !== null && typeof P == "object" && typeof P.then == "function") {
            var te = P, pe = D, me = pe.tag;
            if (!(pe.mode & 1) && (me === 0 || me === 11 || me === 15)) {
              var ve = pe.alternate;
              ve ? (pe.updateQueue = ve.updateQueue, pe.memoizedState = ve.memoizedState, pe.lanes = ve.lanes) : (pe.updateQueue = null, pe.memoizedState = null);
            }
            var Pe = Gv(E);
            if (Pe !== null) {
              Pe.flags &= -257, Yv(Pe, E, D, S, r), Pe.mode & 1 && zm(S, te, r), r = Pe, P = te;
              var je = r.updateQueue;
              if (je === null) {
                var Ke = /* @__PURE__ */ new Set();
                Ke.add(P), r.updateQueue = Ke;
              } else
                je.add(P);
              break e;
            } else {
              if (!(r & 1)) {
                zm(S, te, r), cp();
                break e;
              }
              P = Error(u(426));
            }
          } else if (Hn && D.mode & 1) {
            var ur = Gv(E);
            if (ur !== null) {
              !(ur.flags & 65536) && (ur.flags |= 256), Yv(ur, E, D, S, r), Pv(Ju(P, D));
              break e;
            }
          }
          S = P = Ju(P, D), wr !== 4 && (wr = 2), iu === null ? iu = [S] : iu.push(S), S = E;
          do {
            switch (S.tag) {
              case 3:
                S.flags |= 65536, r &= -r, S.lanes |= r;
                var K = Am(S, P, r);
                Fv(S, K);
                break e;
              case 1:
                D = P;
                var F = S.type, X = S.stateNode;
                if (!(S.flags & 128) && (typeof F.getDerivedStateFromError == "function" || X !== null && typeof X.componentDidCatch == "function" && (Zi === null || !Zi.has(X)))) {
                  S.flags |= 65536, r &= -r, S.lanes |= r;
                  var xe = dc(S, D, r);
                  Fv(S, xe);
                  break e;
                }
            }
            S = S.return;
          } while (S !== null);
        }
        fp(s);
      } catch (Xe) {
        r = Xe, Jn === s && s !== null && (Jn = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function td() {
    var n = Sc.current;
    return Sc.current = Bf, n === null ? Bf : n;
  }
  function cp() {
    (wr === 0 || wr === 3 || wr === 2) && (wr = 4), Yn === null || !(No & 268435455) && !(qf & 268435455) || gi(Yn, Lr);
  }
  function nd(n, r) {
    var s = Yt;
    Yt |= 2;
    var d = td();
    (Yn !== n || Lr !== r) && (Do = null, su(n, r));
    do
      try {
        i0();
        break;
      } catch (m) {
        Gm(n, m);
      }
    while (!0);
    if (Uv(), Yt = s, Sc.current = d, Jn !== null)
      throw Error(u(261));
    return Yn = null, Lr = 0, wr;
  }
  function i0() {
    for (; Jn !== null; )
      Ym(Jn);
  }
  function o0() {
    for (; Jn !== null && !zl(); )
      Ym(Jn);
  }
  function Ym(n) {
    var r = Xm(n.alternate, n, Za);
    n.memoizedProps = n.pendingProps, r === null ? fp(n) : Jn = r, ip.current = null;
  }
  function fp(n) {
    var r = n;
    do {
      var s = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (s = tp(s, r), s !== null) {
          s.flags &= 32767, Jn = s;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          wr = 6, Jn = null;
          return;
        }
      } else if (s = a0(s, r, Za), s !== null) {
        Jn = s;
        return;
      }
      if (r = r.sibling, r !== null) {
        Jn = r;
        return;
      }
      Jn = r = n;
    } while (r !== null);
    wr === 0 && (wr = 5);
  }
  function cu(n, r, s) {
    var d = Vt, m = na.transition;
    try {
      na.transition = null, Vt = 1, l0(n, r, s, d);
    } finally {
      na.transition = m, Vt = d;
    }
    return null;
  }
  function l0(n, r, s, d) {
    do
      ds();
    while (yl !== null);
    if (Yt & 6)
      throw Error(u(327));
    s = n.finishedWork;
    var m = n.finishedLanes;
    if (s === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, s === n.current)
      throw Error(u(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var S = s.lanes | s.childLanes;
    if (Jo(n, S), n === Yn && (Jn = Yn = null, Lr = 0), !(s.subtreeFlags & 2064) && !(s.flags & 2064) || gl || (gl = !0, dp(kr, function() {
      return ds(), null;
    })), S = (s.flags & 15990) !== 0, s.subtreeFlags & 15990 || S) {
      S = na.transition, na.transition = null;
      var E = Vt;
      Vt = 1;
      var D = Yt;
      Yt |= 4, ip.current = null, $m(n, s), jm(s, n), cf(Vl), Ul = !!Rv, Vl = Rv = null, n.current = s, Vm(s), vo(), Yt = D, Vt = E, na.transition = S;
    } else
      n.current = s;
    if (gl && (gl = !1, yl = n, Jf = m), S = n.pendingLanes, S === 0 && (Zi = null), Mi(s.stateNode), ia(n, dn()), r !== null)
      for (d = n.onRecoverableError, s = 0; s < r.length; s++)
        m = r[s], d(m.value, { componentStack: m.stack, digest: m.digest });
    if (Zf)
      throw Zf = !1, n = ou, ou = null, n;
    return Jf & 1 && n.tag !== 0 && ds(), S = n.pendingLanes, S & 1 ? n === ed ? ss++ : (ss = 0, ed = n) : ss = 0, Ta(), null;
  }
  function ds() {
    if (yl !== null) {
      var n = vr(Jf), r = na.transition, s = Vt;
      try {
        if (na.transition = null, Vt = 16 > n ? 16 : n, yl === null)
          var d = !1;
        else {
          if (n = yl, yl = null, Jf = 0, Yt & 6)
            throw Error(u(331));
          var m = Yt;
          for (Yt |= 4, Fe = n.current; Fe !== null; ) {
            var S = Fe, E = S.child;
            if (Fe.flags & 16) {
              var D = S.deletions;
              if (D !== null) {
                for (var P = 0; P < D.length; P++) {
                  var te = D[P];
                  for (Fe = te; Fe !== null; ) {
                    var pe = Fe;
                    switch (pe.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gc(8, pe, S);
                    }
                    var me = pe.child;
                    if (me !== null)
                      me.return = pe, Fe = me;
                    else
                      for (; Fe !== null; ) {
                        pe = Fe;
                        var ve = pe.sibling, Pe = pe.return;
                        if (rp(pe), pe === te) {
                          Fe = null;
                          break;
                        }
                        if (ve !== null) {
                          ve.return = Pe, Fe = ve;
                          break;
                        }
                        Fe = Pe;
                      }
                  }
                }
                var je = S.alternate;
                if (je !== null) {
                  var Ke = je.child;
                  if (Ke !== null) {
                    je.child = null;
                    do {
                      var ur = Ke.sibling;
                      Ke.sibling = null, Ke = ur;
                    } while (Ke !== null);
                  }
                }
                Fe = S;
              }
            }
            if (S.subtreeFlags & 2064 && E !== null)
              E.return = S, Fe = E;
            else
              e:
                for (; Fe !== null; ) {
                  if (S = Fe, S.flags & 2048)
                    switch (S.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gc(9, S, S.return);
                    }
                  var K = S.sibling;
                  if (K !== null) {
                    K.return = S.return, Fe = K;
                    break e;
                  }
                  Fe = S.return;
                }
          }
          var F = n.current;
          for (Fe = F; Fe !== null; ) {
            E = Fe;
            var X = E.child;
            if (E.subtreeFlags & 2064 && X !== null)
              X.return = E, Fe = X;
            else
              e:
                for (E = F; Fe !== null; ) {
                  if (D = Fe, D.flags & 2048)
                    try {
                      switch (D.tag) {
                        case 0:
                        case 11:
                        case 15:
                          yc(9, D);
                      }
                    } catch (Xe) {
                      er(D, D.return, Xe);
                    }
                  if (D === E) {
                    Fe = null;
                    break e;
                  }
                  var xe = D.sibling;
                  if (xe !== null) {
                    xe.return = D.return, Fe = xe;
                    break e;
                  }
                  Fe = D.return;
                }
          }
          if (Yt = m, Ta(), ir && typeof ir.onPostCommitFiberRoot == "function")
            try {
              ir.onPostCommitFiberRoot(Hr, n);
            } catch (Xe) {
            }
          d = !0;
        }
        return d;
      } finally {
        Vt = s, na.transition = r;
      }
    }
    return !1;
  }
  function Qm(n, r, s) {
    r = Ju(s, r), r = Am(n, r, 1), n = fl(n, r, 1), r = ra(), n !== null && (Ba(n, 1, r), ia(n, r));
  }
  function er(n, r, s) {
    if (n.tag === 3)
      Qm(n, n, s);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Qm(r, n, s);
          break;
        } else if (r.tag === 1) {
          var d = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && (Zi === null || !Zi.has(d))) {
            n = Ju(s, n), n = dc(r, n, 1), r = fl(r, n, 1), n = ra(), r !== null && (Ba(r, 1, n), ia(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function u0(n, r, s) {
    var d = n.pingCache;
    d !== null && d.delete(r), r = ra(), n.pingedLanes |= n.suspendedLanes & s, Yn === n && (Lr & s) === s && (wr === 4 || wr === 3 && (Lr & 130023424) === Lr && 500 > dn() - op ? su(n, 0) : ls |= s), ia(n, r);
  }
  function rd(n, r) {
    r === 0 && (n.mode & 1 ? (r = ja, ja <<= 1, !(ja & 130023424) && (ja = 4194304)) : r = 1);
    var s = ra();
    n = Ro(n, r), n !== null && (Ba(n, r, s), ia(n, s));
  }
  function s0(n) {
    var r = n.memoizedState, s = 0;
    r !== null && (s = r.retryLane), rd(n, s);
  }
  function c0(n, r) {
    var s = 0;
    switch (n.tag) {
      case 13:
        var d = n.stateNode, m = n.memoizedState;
        m !== null && (s = m.retryLane);
        break;
      case 19:
        d = n.stateNode;
        break;
      default:
        throw Error(u(314));
    }
    d !== null && d.delete(r), rd(n, s);
  }
  var Xm;
  Xm = function(n, r, s) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Zn.current)
        hr = !0;
      else {
        if (!(n.lanes & s) && !(r.flags & 128))
          return hr = !1, Mo(n, r, s);
        hr = !!(n.flags & 131072);
      }
    else
      hr = !1, Hn && r.flags & 1048576 && Lv(r, Ku, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var d = r.type;
        ea(n, r), n = r.pendingProps;
        var m = si(r, yt.current);
        Me(r, s), m = pl(null, r, d, n, m, s);
        var S = Zl();
        return r.flags |= 1, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, jn(d) ? (S = !0, mf(r)) : S = !1, r.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, $v(r), m.updater = xf, r.stateNode = m, m._reactInternals = r, Tf(r, d, n, s), r = Pm(null, r, d, !0, S, s)) : (r.tag = 0, Hn && S && gf(r), Cr(null, r, m, s), r = r.child), r;
      case 16:
        d = r.elementType;
        e: {
          switch (ea(n, r), n = r.pendingProps, m = d._init, d = m(d._payload), r.type = d, m = r.tag = d0(d), n = Xa(d, n), m) {
            case 0:
              r = es(null, r, d, n, s);
              break e;
            case 1:
              r = Qv(null, r, d, n, s);
              break e;
            case 11:
              r = ml(null, r, d, n, s);
              break e;
            case 14:
              r = Kf(null, r, d, Xa(d.type, n), s);
              break e;
          }
          throw Error(u(
            306,
            d,
            ""
          ));
        }
        return r;
      case 0:
        return d = r.type, m = r.pendingProps, m = r.elementType === d ? m : Xa(d, m), es(n, r, d, m, s);
      case 1:
        return d = r.type, m = r.pendingProps, m = r.elementType === d ? m : Xa(d, m), Qv(n, r, d, m, s);
      case 3:
        e: {
          if (Hm(r), n === null)
            throw Error(u(387));
          d = r.pendingProps, S = r.memoizedState, m = S.element, Sr(n, r), dl(r, d, null, s);
          var E = r.memoizedState;
          if (d = E.element, S.isDehydrated)
            if (S = { element: d, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = S, r.memoizedState = S, r.flags & 256) {
              m = Ju(Error(u(423)), r), r = Gf(n, r, d, s, m);
              break e;
            } else if (d !== m) {
              m = Ju(Error(u(424)), r), r = Gf(n, r, d, s, m);
              break e;
            } else
              for (_a = Ai(r.stateNode.containerInfo.firstChild), Qa = r, Hn = !0, di = null, s = Dm(r, null, d, s), r.child = s; s; )
                s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (Kn(), d === m) {
              r = $r(n, r, s);
              break e;
            }
            Cr(n, r, d, s);
          }
          r = r.child;
        }
        return r;
      case 5:
        return ot(r), n === null && Sf(r), d = r.type, m = r.pendingProps, S = n !== null ? n.memoizedProps : null, E = m.children, ec(d, m) ? E = null : S !== null && ec(d, S) && (r.flags |= 32), Lt(n, r), Cr(n, r, E, s), r.child;
      case 6:
        return n === null && Sf(r), null;
      case 13:
        return qv(n, r, s);
      case 4:
        return Vv(r, r.stateNode.containerInfo), d = r.pendingProps, n === null ? r.child = Yu(r, null, d, s) : Cr(n, r, d, s), r.child;
      case 11:
        return d = r.type, m = r.pendingProps, m = r.elementType === d ? m : Xa(d, m), ml(n, r, d, m, s);
      case 7:
        return Cr(n, r, r.pendingProps, s), r.child;
      case 8:
        return Cr(n, r, r.pendingProps.children, s), r.child;
      case 12:
        return Cr(n, r, r.pendingProps.children, s), r.child;
      case 10:
        e: {
          if (d = r.type._context, m = r.pendingProps, S = r.memoizedProps, E = m.value, Sn(Yi, d._currentValue), d._currentValue = E, S !== null)
            if (li(S.value, E)) {
              if (S.children === m.children && !Zn.current) {
                r = $r(n, r, s);
                break e;
              }
            } else
              for (S = r.child, S !== null && (S.return = r); S !== null; ) {
                var D = S.dependencies;
                if (D !== null) {
                  E = S.child;
                  for (var P = D.firstContext; P !== null; ) {
                    if (P.context === d) {
                      if (S.tag === 1) {
                        P = ko(-1, s & -s), P.tag = 2;
                        var te = S.updateQueue;
                        if (te !== null) {
                          te = te.shared;
                          var pe = te.pending;
                          pe === null ? P.next = P : (P.next = pe.next, pe.next = P), te.pending = P;
                        }
                      }
                      S.lanes |= s, P = S.alternate, P !== null && (P.lanes |= s), Nr(
                        S.return,
                        s,
                        r
                      ), D.lanes |= s;
                      break;
                    }
                    P = P.next;
                  }
                } else if (S.tag === 10)
                  E = S.type === r.type ? null : S.child;
                else if (S.tag === 18) {
                  if (E = S.return, E === null)
                    throw Error(u(341));
                  E.lanes |= s, D = E.alternate, D !== null && (D.lanes |= s), Nr(E, s, r), E = S.sibling;
                } else
                  E = S.child;
                if (E !== null)
                  E.return = S;
                else
                  for (E = S; E !== null; ) {
                    if (E === r) {
                      E = null;
                      break;
                    }
                    if (S = E.sibling, S !== null) {
                      S.return = E.return, E = S;
                      break;
                    }
                    E = E.return;
                  }
                S = E;
              }
          Cr(n, r, m.children, s), r = r.child;
        }
        return r;
      case 9:
        return m = r.type, d = r.pendingProps.children, Me(r, s), m = lr(m), d = d(m), r.flags |= 1, Cr(n, r, d, s), r.child;
      case 14:
        return d = r.type, m = Xa(d, r.pendingProps), m = Xa(d.type, m), Kf(n, r, d, m, s);
      case 15:
        return Na(n, r, r.type, r.pendingProps, s);
      case 17:
        return d = r.type, m = r.pendingProps, m = r.elementType === d ? m : Xa(d, m), ea(n, r), r.tag = 1, jn(d) ? (n = !0, mf(r)) : n = !1, Me(r, s), _m(r, d, m), Tf(r, d, m, s), Pm(null, r, d, !0, n, s);
      case 19:
        return ep(n, r, s);
      case 22:
        return nu(n, r, s);
    }
    throw Error(u(156, r.tag));
  };
  function dp(n, r) {
    return Bn(n, r);
  }
  function f0(n, r, s, d) {
    this.tag = n, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = d, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function yi(n, r, s, d) {
    return new f0(n, r, s, d);
  }
  function vp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function d0(n) {
    if (typeof n == "function")
      return vp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ee)
        return 11;
      if (n === Ce)
        return 14;
    }
    return 2;
  }
  function Cl(n, r) {
    var s = n.alternate;
    return s === null ? (s = yi(n.tag, r, n.key, n.mode), s.elementType = n.elementType, s.type = n.type, s.stateNode = n.stateNode, s.alternate = n, n.alternate = s) : (s.pendingProps = r, s.type = n.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = n.flags & 14680064, s.childLanes = n.childLanes, s.lanes = n.lanes, s.child = n.child, s.memoizedProps = n.memoizedProps, s.memoizedState = n.memoizedState, s.updateQueue = n.updateQueue, r = n.dependencies, s.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, s.sibling = n.sibling, s.index = n.index, s.ref = n.ref, s;
  }
  function ad(n, r, s, d, m, S) {
    var E = 2;
    if (d = n, typeof n == "function")
      vp(n) && (E = 1);
    else if (typeof n == "string")
      E = 5;
    else
      e:
        switch (n) {
          case G:
            return fu(s.children, m, S, r);
          case se:
            E = 8, m |= 8;
            break;
          case Te:
            return n = yi(12, s, r, m | 2), n.elementType = Te, n.lanes = S, n;
          case ne:
            return n = yi(13, s, r, m), n.elementType = ne, n.lanes = S, n;
          case fe:
            return n = yi(19, s, r, m), n.elementType = fe, n.lanes = S, n;
          case Ne:
            return Ec(s, m, S, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case le:
                  E = 10;
                  break e;
                case ge:
                  E = 9;
                  break e;
                case Ee:
                  E = 11;
                  break e;
                case Ce:
                  E = 14;
                  break e;
                case we:
                  E = 16, d = null;
                  break e;
              }
            throw Error(u(130, n == null ? n : typeof n, ""));
        }
    return r = yi(E, s, r, m), r.elementType = n, r.type = d, r.lanes = S, r;
  }
  function fu(n, r, s, d) {
    return n = yi(7, n, d, r), n.lanes = s, n;
  }
  function Ec(n, r, s, d) {
    return n = yi(22, n, d, r), n.elementType = Ne, n.lanes = s, n.stateNode = { isHidden: !1 }, n;
  }
  function wc(n, r, s) {
    return n = yi(6, n, null, r), n.lanes = s, n;
  }
  function du(n, r, s) {
    return r = yi(4, n.children !== null ? n.children : [], n.key, r), r.lanes = s, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function v0(n, r, s, d, m) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = oi(0), this.expirationTimes = oi(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = oi(0), this.identifierPrefix = d, this.onRecoverableError = m, this.mutableSourceEagerHydrationData = null;
  }
  function id(n, r, s, d, m, S, E, D, P) {
    return n = new v0(n, r, s, D, P), r === 1 ? (r = 1, S === !0 && (r |= 8)) : r = 0, S = yi(3, null, null, r), n.current = S, S.stateNode = n, S.memoizedState = { element: d, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $v(S), n;
  }
  function qm(n, r, s) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: re, key: d == null ? null : "" + d, children: n, containerInfo: r, implementation: s };
  }
  function pp(n) {
    if (!n)
      return Gi;
    n = n._reactInternals;
    e: {
      if (dr(n) !== n || n.tag !== 1)
        throw Error(u(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (jn(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(u(171));
    }
    if (n.tag === 1) {
      var s = n.type;
      if (jn(s))
        return rc(n, s, r);
    }
    return r;
  }
  function Zm(n, r, s, d, m, S, E, D, P) {
    return n = id(s, d, !0, n, m, S, E, D, P), n.context = pp(null), s = n.current, d = ra(), m = mr(s), S = ko(d, m), S.callback = r != null ? r : null, fl(s, S, m), n.current.lanes = m, Ba(n, m, d), ia(n, d), n;
  }
  function xc(n, r, s, d) {
    var m = r.current, S = ra(), E = mr(m);
    return s = pp(s), r.context === null ? r.context = s : r.pendingContext = s, r = ko(S, E), r.payload = { element: n }, d = d === void 0 ? null : d, d !== null && (r.callback = d), n = fl(m, r, E), n !== null && (aa(n, m, E, S), wf(n, m, E)), E;
  }
  function od(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function Jm(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var s = n.retryLane;
      n.retryLane = s !== 0 && s < r ? s : r;
    }
  }
  function hp(n, r) {
    Jm(n, r), (n = n.alternate) && Jm(n, r);
  }
  function eg() {
    return null;
  }
  var mp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function ld(n) {
    this._internalRoot = n;
  }
  Lo.prototype.render = ld.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(u(409));
    xc(n, r, null, null);
  }, Lo.prototype.unmount = ld.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Sl(function() {
        xc(null, n, null, null);
      }), r[xo] = null;
    }
  };
  function Lo(n) {
    this._internalRoot = n;
  }
  Lo.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = mo();
      n = { blockedOn: null, target: n, priority: r };
      for (var s = 0; s < be.length && r !== 0 && r < be[s].priority; s++)
        ;
      be.splice(s, 0, n), s === 0 && Pl(n);
    }
  };
  function gp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function ud(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function tg() {
  }
  function p0(n, r, s, d, m) {
    if (m) {
      if (typeof d == "function") {
        var S = d;
        d = function() {
          var te = od(E);
          S.call(te);
        };
      }
      var E = Zm(r, d, n, 0, null, !1, !1, "", tg);
      return n._reactRootContainer = E, n[xo] = E.current, Bu(n.nodeType === 8 ? n.parentNode : n), Sl(), E;
    }
    for (; m = n.lastChild; )
      n.removeChild(m);
    if (typeof d == "function") {
      var D = d;
      d = function() {
        var te = od(P);
        D.call(te);
      };
    }
    var P = id(n, 0, !1, null, null, !1, !1, "", tg);
    return n._reactRootContainer = P, n[xo] = P.current, Bu(n.nodeType === 8 ? n.parentNode : n), Sl(function() {
      xc(r, P, s, d);
    }), P;
  }
  function sd(n, r, s, d, m) {
    var S = s._reactRootContainer;
    if (S) {
      var E = S;
      if (typeof m == "function") {
        var D = m;
        m = function() {
          var P = od(E);
          D.call(P);
        };
      }
      xc(r, E, n, m);
    } else
      E = p0(s, r, n, m, d);
    return od(E);
  }
  ho = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var s = un(r.pendingLanes);
          s !== 0 && (Wa(r, s | 1), ia(r, dn()), !(Yt & 6) && (us = dn() + 500, Ta()));
        }
        break;
      case 13:
        Sl(function() {
          var d = Ro(n, 1);
          if (d !== null) {
            var m = ra();
            aa(d, n, 1, m);
          }
        }), hp(n, 1);
    }
  }, Ea = function(n) {
    if (n.tag === 13) {
      var r = Ro(n, 134217728);
      if (r !== null) {
        var s = ra();
        aa(r, n, 134217728, s);
      }
      hp(n, 134217728);
    }
  }, nn = function(n) {
    if (n.tag === 13) {
      var r = mr(n), s = Ro(n, r);
      if (s !== null) {
        var d = ra();
        aa(s, n, r, d);
      }
      hp(n, r);
    }
  }, mo = function() {
    return Vt;
  }, Bi = function(n, r) {
    var s = Vt;
    try {
      return Vt = n, r();
    } finally {
      Vt = s;
    }
  }, Zt = function(n, r, s) {
    switch (r) {
      case "input":
        if (kt(n, s), r = s.name, s.type === "radio" && r != null) {
          for (s = n; s.parentNode; )
            s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < s.length; r++) {
            var d = s[r];
            if (d !== n && d.form === n.form) {
              var m = nt(d);
              if (!m)
                throw Error(u(90));
              Ft(d), kt(d, m);
            }
          }
        }
        break;
      case "textarea":
        Xt(n, s);
        break;
      case "select":
        r = s.value, r != null && vt(n, !!s.multiple, r, !1);
    }
  }, jt = fs, Le = Sl;
  var h0 = { usingClientEntryPoint: !1, Events: [nc, Wu, nt, Jt, xt, fs] }, vs = { findFiberByHostInstance: ui, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, m0 = { bundleType: vs.bundleType, version: vs.version, rendererPackageName: vs.rendererPackageName, rendererConfig: vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: I.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = $a(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: vs.findFiberByHostInstance || eg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var cd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cd.isDisabled && cd.supportsFiber)
      try {
        Hr = cd.inject(m0), ir = cd;
      } catch (n) {
      }
  }
  return xi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = h0, xi.createPortal = function(n, r) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!gp(r))
      throw Error(u(200));
    return qm(n, r, null, s);
  }, xi.createRoot = function(n, r) {
    if (!gp(n))
      throw Error(u(299));
    var s = !1, d = "", m = mp;
    return r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (d = r.identifierPrefix), r.onRecoverableError !== void 0 && (m = r.onRecoverableError)), r = id(n, 1, !1, null, null, s, !1, d, m), n[xo] = r.current, Bu(n.nodeType === 8 ? n.parentNode : n), new ld(r);
  }, xi.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(u(188)) : (n = Object.keys(n).join(","), Error(u(268, n)));
    return n = $a(r), n = n === null ? null : n.stateNode, n;
  }, xi.flushSync = function(n) {
    return Sl(n);
  }, xi.hydrate = function(n, r, s) {
    if (!ud(r))
      throw Error(u(200));
    return sd(null, n, r, !0, s);
  }, xi.hydrateRoot = function(n, r, s) {
    if (!gp(n))
      throw Error(u(405));
    var d = s != null && s.hydratedSources || null, m = !1, S = "", E = mp;
    if (s != null && (s.unstable_strictMode === !0 && (m = !0), s.identifierPrefix !== void 0 && (S = s.identifierPrefix), s.onRecoverableError !== void 0 && (E = s.onRecoverableError)), r = Zm(r, null, n, 1, s != null ? s : null, m, !1, S, E), n[xo] = r.current, Bu(n), d)
      for (n = 0; n < d.length; n++)
        s = d[n], m = s._getVersion, m = m(s._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [s, m] : r.mutableSourceEagerHydrationData.push(
          s,
          m
        );
    return new Lo(r);
  }, xi.render = function(n, r, s) {
    if (!ud(r))
      throw Error(u(200));
    return sd(null, n, r, !1, s);
  }, xi.unmountComponentAtNode = function(n) {
    if (!ud(n))
      throw Error(u(40));
    return n._reactRootContainer ? (Sl(function() {
      sd(null, null, n, !1, function() {
        n._reactRootContainer = null, n[xo] = null;
      });
    }), !0) : !1;
  }, xi.unstable_batchedUpdates = fs, xi.unstable_renderSubtreeIntoContainer = function(n, r, s, d) {
    if (!ud(s))
      throw Error(u(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(u(38));
    return sd(n, r, s, !1, d);
  }, xi.version = "18.2.0-next-9e3b772b8-20220608", xi;
}
var Ti = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var AT;
function DN() {
  return AT || (AT = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = _i, l = c5(), u = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, f = !1;
    function p(e) {
      f = e;
    }
    function y(e) {
      if (!f) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          a[o - 1] = arguments[o];
        x("warn", e, a);
      }
    }
    function h(e) {
      if (!f) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          a[o - 1] = arguments[o];
        x("error", e, a);
      }
    }
    function x(e, t, a) {
      {
        var o = u.ReactDebugCurrentFrame, c = o.getStackAddendum();
        c !== "" && (t += "%s", a = a.concat([c]));
        var v = a.map(function(g) {
          return String(g);
        });
        v.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var T = 0, R = 1, O = 2, _ = 3, N = 4, L = 5, z = 6, H = 7, A = 8, q = 9, V = 10, U = 11, I = 12, W = 13, re = 14, G = 15, se = 16, Te = 17, le = 18, ge = 19, Ee = 21, ne = 22, fe = 23, Ce = 24, we = 25, Ne = !0, ee = !1, de = !1, ae = !1, ze = !1, De = !0, ft = !1, dt = !1, At = !0, it = !0, Rt = !0, st = /* @__PURE__ */ new Set(), Mt = {}, Gt = {};
    function Ze(e, t) {
      Ft(e, t), Ft(e + "Capture", t);
    }
    function Ft(e, t) {
      Mt[e] && h("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Mt[e] = t;
      {
        var a = e.toLowerCase();
        Gt[a] = e, e === "onDoubleClick" && (Gt.ondblclick = e);
      }
      for (var o = 0; o < t.length; o++)
        st.add(t[o]);
    }
    var Ot = typeof window != "undefined" && typeof window.document != "undefined" && typeof window.document.createElement != "undefined", Se = Object.prototype.hasOwnProperty;
    function Et(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Ct(e) {
      try {
        return kt(e), !1;
      } catch (t) {
        return !0;
      }
    }
    function kt(e) {
      return "" + e;
    }
    function Wt(e, t) {
      if (Ct(e))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Et(e)), kt(e);
    }
    function Qe(e) {
      if (Ct(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Et(e)), kt(e);
    }
    function wt(e, t) {
      if (Ct(e))
        return h("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Et(e)), kt(e);
    }
    function vt(e, t) {
      if (Ct(e))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Et(e)), kt(e);
    }
    function ln(e) {
      if (Ct(e))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Et(e)), kt(e);
    }
    function Je(e) {
      if (Ct(e))
        return h("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Et(e)), kt(e);
    }
    var Xt = 0, qt = 1, It = 2, kn = 3, _n = 4, cn = 5, fn = 6, he = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ue = he + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", We = new RegExp("^[" + he + "][" + Ue + "]*$"), zt = {}, Pt = {};
    function pt(e) {
      return Se.call(Pt, e) ? !0 : Se.call(zt, e) ? !1 : We.test(e) ? (Pt[e] = !0, !0) : (zt[e] = !0, h("Invalid attribute name: `%s`", e), !1);
    }
    function ht(e, t, a) {
      return t !== null ? t.type === Xt : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Mn(e, t, a, o) {
      if (a !== null && a.type === Xt)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (o)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var c = e.toLowerCase().slice(0, 5);
          return c !== "data-" && c !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Ht(e, t, a, o) {
      if (t === null || typeof t == "undefined" || Mn(e, t, a, o))
        return !0;
      if (o)
        return !1;
      if (a !== null)
        switch (a.type) {
          case kn:
            return !t;
          case _n:
            return t === !1;
          case cn:
            return isNaN(t);
          case fn:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Zt(e) {
      return tn.hasOwnProperty(e) ? tn[e] : null;
    }
    function $t(e, t, a, o, c, v, g) {
      this.acceptsBooleans = t === It || t === kn || t === _n, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = v, this.removeEmptyString = g;
    }
    var tn = {}, Kt = [
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
    Kt.forEach(function(e) {
      tn[e] = new $t(
        e,
        Xt,
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
      tn[t] = new $t(
        t,
        qt,
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
      tn[e] = new $t(
        e,
        It,
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
      tn[e] = new $t(
        e,
        It,
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
      tn[e] = new $t(
        e,
        kn,
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
      tn[e] = new $t(
        e,
        kn,
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
      tn[e] = new $t(
        e,
        _n,
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
      tn[e] = new $t(
        e,
        fn,
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
      tn[e] = new $t(
        e,
        cn,
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
    var Jt = /[\-\:]([a-z])/g, xt = function(e) {
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
      var t = e.replace(Jt, xt);
      tn[t] = new $t(
        t,
        qt,
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
      var t = e.replace(Jt, xt);
      tn[t] = new $t(
        t,
        qt,
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
      var t = e.replace(Jt, xt);
      tn[t] = new $t(
        t,
        qt,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      tn[e] = new $t(
        e,
        qt,
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
    var jt = "xlinkHref";
    tn[jt] = new $t(
      "xlinkHref",
      qt,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      tn[e] = new $t(
        e,
        qt,
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
    var Le = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ye = !1;
    function Ut(e) {
      !Ye && Le.test(e) && (Ye = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function En(e, t, a, o) {
      if (o.mustUseProperty) {
        var c = o.propertyName;
        return e[c];
      } else {
        Wt(a, t), o.sanitizeURL && Ut("" + a);
        var v = o.attributeName, g = null;
        if (o.type === _n) {
          if (e.hasAttribute(v)) {
            var C = e.getAttribute(v);
            return C === "" ? !0 : Ht(t, a, o, !1) ? C : C === "" + a ? a : C;
          }
        } else if (e.hasAttribute(v)) {
          if (Ht(t, a, o, !1))
            return e.getAttribute(v);
          if (o.type === kn)
            return a;
          g = e.getAttribute(v);
        }
        return Ht(t, a, o, !1) ? g === null ? a : g : g === "" + a ? a : g;
      }
    }
    function nr(e, t, a, o) {
      {
        if (!pt(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var c = e.getAttribute(t);
        return Wt(a, t), c === "" + a ? a : c;
      }
    }
    function On(e, t, a, o) {
      var c = Zt(t);
      if (!ht(t, c, o)) {
        if (Ht(t, a, c, o) && (a = null), o || c === null) {
          if (pt(t)) {
            var v = t;
            a === null ? e.removeAttribute(v) : (Wt(a, t), e.setAttribute(v, "" + a));
          }
          return;
        }
        var g = c.mustUseProperty;
        if (g) {
          var C = c.propertyName;
          if (a === null) {
            var b = c.type;
            e[C] = b === kn ? !1 : "";
          } else
            e[C] = a;
          return;
        }
        var k = c.attributeName, M = c.attributeNamespace;
        if (a === null)
          e.removeAttribute(k);
        else {
          var j = c.type, $;
          j === kn || j === _n && a === !0 ? $ = "" : (Wt(a, k), $ = "" + a, c.sanitizeURL && Ut($.toString())), M ? e.setAttributeNS(M, k, $) : e.setAttribute(k, $);
        }
      }
    }
    var Qr = Symbol.for("react.element"), rr = Symbol.for("react.portal"), ar = Symbol.for("react.fragment"), yr = Symbol.for("react.strict_mode"), Ca = Symbol.for("react.profiler"), Ln = Symbol.for("react.provider"), fr = Symbol.for("react.context"), Rr = Symbol.for("react.forward_ref"), dr = Symbol.for("react.suspense"), Ia = Symbol.for("react.suspense_list"), oa = Symbol.for("react.memo"), An = Symbol.for("react.lazy"), $a = Symbol.for("react.scope"), Zo = Symbol.for("react.debug_trace_mode"), Bn = Symbol.for("react.offscreen"), fo = Symbol.for("react.legacy_hidden"), zl = Symbol.for("react.cache"), vo = Symbol.for("react.tracing_marker"), dn = Symbol.iterator, Fa = "@@iterator";
    function Xr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = dn && e[dn] || e[Fa];
      return typeof t == "function" ? t : null;
    }
    var Nt = Object.assign, kr = 0, Vi, la, Hr, ir, Mi, Xn, ba;
    function po() {
    }
    po.__reactDisabledLog = !0;
    function Oi() {
      {
        if (kr === 0) {
          Vi = console.log, la = console.info, Hr = console.warn, ir = console.error, Mi = console.group, Xn = console.groupCollapsed, ba = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: po,
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
        kr++;
      }
    }
    function ua() {
      {
        if (kr--, kr === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Nt({}, e, {
              value: Vi
            }),
            info: Nt({}, e, {
              value: la
            }),
            warn: Nt({}, e, {
              value: Hr
            }),
            error: Nt({}, e, {
              value: ir
            }),
            group: Nt({}, e, {
              value: Mi
            }),
            groupCollapsed: Nt({}, e, {
              value: Xn
            }),
            groupEnd: Nt({}, e, {
              value: ba
            })
          });
        }
        kr < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ja = u.ReactCurrentDispatcher, un;
    function _t(e, t, a) {
      {
        if (un === void 0)
          try {
            throw Error();
          } catch (c) {
            var o = c.stack.trim().match(/\n( *(at )?)/);
            un = o && o[1] || "";
          }
        return `
` + un + e;
      }
    }
    var vn = !1, qn;
    {
      var or = typeof WeakMap == "function" ? WeakMap : Map;
      qn = new or();
    }
    function Va(e, t) {
      if (!e || vn)
        return "";
      {
        var a = qn.get(e);
        if (a !== void 0)
          return a;
      }
      var o;
      vn = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = ja.current, ja.current = null, Oi();
      try {
        if (t) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (J) {
              o = J;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (J) {
              o = J;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (J) {
            o = J;
          }
          e();
        }
      } catch (J) {
        if (J && o && typeof J.stack == "string") {
          for (var C = J.stack.split(`
`), b = o.stack.split(`
`), k = C.length - 1, M = b.length - 1; k >= 1 && M >= 0 && C[k] !== b[M]; )
            M--;
          for (; k >= 1 && M >= 0; k--, M--)
            if (C[k] !== b[M]) {
              if (k !== 1 || M !== 1)
                do
                  if (k--, M--, M < 0 || C[k] !== b[M]) {
                    var j = `
` + C[k].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && qn.set(e, j), j;
                  }
                while (k >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        vn = !1, ja.current = v, ua(), Error.prepareStackTrace = c;
      }
      var $ = e ? e.displayName || e.name : "", Z = $ ? _t($) : "";
      return typeof e == "function" && qn.set(e, Z), Z;
    }
    function oi(e, t, a) {
      return Va(e, !0);
    }
    function Ba(e, t, a) {
      return Va(e, !1);
    }
    function Jo(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Wa(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Va(e, Jo(e));
      if (typeof e == "string")
        return _t(e);
      switch (e) {
        case dr:
          return _t("Suspense");
        case Ia:
          return _t("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Rr:
            return Ba(e.render);
          case oa:
            return Wa(e.type, t, a);
          case An: {
            var o = e, c = o._payload, v = o._init;
            try {
              return Wa(v(c), t, a);
            } catch (g) {
            }
          }
        }
      return "";
    }
    function Vt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case L:
          return _t(e.type);
        case se:
          return _t("Lazy");
        case W:
          return _t("Suspense");
        case ge:
          return _t("SuspenseList");
        case T:
        case O:
        case G:
          return Ba(e.type);
        case U:
          return Ba(e.type.render);
        case R:
          return oi(e.type);
        default:
          return "";
      }
    }
    function vr(e) {
      try {
        var t = "", a = e;
        do
          t += Vt(a), a = a.return;
        while (a);
        return t;
      } catch (o) {
        return `
Error generating stack: ` + o.message + `
` + o.stack;
      }
    }
    function ho(e, t, a) {
      var o = e.displayName;
      if (o)
        return o;
      var c = t.displayName || t.name || "";
      return c !== "" ? a + "(" + c + ")" : a;
    }
    function Ea(e) {
      return e.displayName || "Context";
    }
    function nn(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && h("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ar:
          return "Fragment";
        case rr:
          return "Portal";
        case Ca:
          return "Profiler";
        case yr:
          return "StrictMode";
        case dr:
          return "Suspense";
        case Ia:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case fr:
            var t = e;
            return Ea(t) + ".Consumer";
          case Ln:
            var a = e;
            return Ea(a._context) + ".Provider";
          case Rr:
            return ho(e, e.render, "ForwardRef");
          case oa:
            var o = e.displayName || null;
            return o !== null ? o : nn(e.type) || "Memo";
          case An: {
            var c = e, v = c._payload, g = c._init;
            try {
              return nn(g(v));
            } catch (C) {
              return null;
            }
          }
        }
      return null;
    }
    function mo(e, t, a) {
      var o = t.displayName || t.name || "";
      return e.displayName || (o !== "" ? a + "(" + o + ")" : a);
    }
    function Bi(e) {
      return e.displayName || "Context";
    }
    function ct(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ce:
          return "Cache";
        case q:
          var o = a;
          return Bi(o) + ".Consumer";
        case V:
          var c = a;
          return Bi(c._context) + ".Provider";
        case le:
          return "DehydratedFragment";
        case U:
          return mo(a, a.render, "ForwardRef");
        case H:
          return "Fragment";
        case L:
          return a;
        case N:
          return "Portal";
        case _:
          return "Root";
        case z:
          return "Text";
        case se:
          return nn(a);
        case A:
          return a === yr ? "StrictMode" : "Mode";
        case ne:
          return "Offscreen";
        case I:
          return "Profiler";
        case Ee:
          return "Scope";
        case W:
          return "Suspense";
        case ge:
          return "SuspenseList";
        case we:
          return "TracingMarker";
        case R:
        case T:
        case Te:
        case O:
        case re:
        case G:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Ni = u.ReactDebugCurrentFrame, zn = null, qr = !1;
    function Zr() {
      {
        if (zn === null)
          return null;
        var e = zn._debugOwner;
        if (e !== null && typeof e != "undefined")
          return ct(e);
      }
      return null;
    }
    function go() {
      return zn === null ? "" : vr(zn);
    }
    function Wn() {
      Ni.getCurrentStack = null, zn = null, qr = !1;
    }
    function be(e) {
      Ni.getCurrentStack = e === null ? null : go, zn = e, qr = !1;
    }
    function gt() {
      return zn;
    }
    function sn(e) {
      qr = e;
    }
    function en(e) {
      return "" + e;
    }
    function gn(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Je(e), e;
        default:
          return "";
      }
    }
    var Pl = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Wi(e, t) {
      Pl[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function zu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Hl(e) {
      return e._valueTracker;
    }
    function Is(e) {
      e._valueTracker = null;
    }
    function $s(e) {
      var t = "";
      return e && (zu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Pu(e) {
      var t = zu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Je(e[t]);
      var o = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a == "undefined" || typeof a.get != "function" || typeof a.set != "function")) {
        var c = a.get, v = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return c.call(this);
          },
          set: function(C) {
            Je(C), o = "" + C, v.call(this, C);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var g = {
          getValue: function() {
            return o;
          },
          setValue: function(C) {
            Je(C), o = "" + C;
          },
          stopTracking: function() {
            Is(e), delete e[t];
          }
        };
        return g;
      }
    }
    function Ul(e) {
      Hl(e) || (e._valueTracker = Pu(e));
    }
    function Fh(e) {
      if (!e)
        return !1;
      var t = Hl(e);
      if (!t)
        return !0;
      var a = t.getValue(), o = $s(e);
      return o !== a ? (t.setValue(o), !0) : !1;
    }
    function Zc(e) {
      if (e = e || (typeof document != "undefined" ? document : void 0), typeof e == "undefined")
        return null;
      try {
        return e.activeElement || e.body;
      } catch (t) {
        return e.body;
      }
    }
    var Jc = !1, Fs = !1, ef = !1, ov = !1;
    function yo(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function js(e, t) {
      var a = e, o = t.checked, c = Nt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: o != null ? o : a._wrapperState.initialChecked
      });
      return c;
    }
    function Vs(e, t) {
      Wi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Fs && (h("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Zr() || "A component", t.type), Fs = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Jc && (h("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Zr() || "A component", t.type), Jc = !0);
      var a = e, o = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: gn(t.value != null ? t.value : o),
        controlled: yo(t)
      };
    }
    function lv(e, t) {
      var a = e, o = t.checked;
      o != null && On(a, "checked", o, !1);
    }
    function Hu(e, t) {
      var a = e;
      {
        var o = yo(t);
        !a._wrapperState.controlled && o && !ov && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ov = !0), a._wrapperState.controlled && !o && !ef && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ef = !0);
      }
      lv(e, t);
      var c = gn(t.value), v = t.type;
      if (c != null)
        v === "number" ? (c === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != c) && (a.value = en(c)) : a.value !== en(c) && (a.value = en(c));
      else if (v === "submit" || v === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? el(a, t.type, c) : t.hasOwnProperty("defaultValue") && el(a, t.type, gn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Bs(e, t, a) {
      var o = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var c = t.type, v = c === "submit" || c === "reset";
        if (v && (t.value === void 0 || t.value === null))
          return;
        var g = en(o._wrapperState.initialValue);
        a || g !== o.value && (o.value = g), o.defaultValue = g;
      }
      var C = o.name;
      C !== "" && (o.name = ""), o.defaultChecked = !o.defaultChecked, o.defaultChecked = !!o._wrapperState.initialChecked, C !== "" && (o.name = C);
    }
    function jh(e, t) {
      var a = e;
      Hu(a, t), Ka(a, t);
    }
    function Ka(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var o = e; o.parentNode; )
          o = o.parentNode;
        Wt(a, "name");
        for (var c = o.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), v = 0; v < c.length; v++) {
          var g = c[v];
          if (!(g === e || g.form !== e.form)) {
            var C = yg(g);
            if (!C)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Fh(g), Hu(g, C);
          }
        }
      }
    }
    function el(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Zc(e.ownerDocument) !== e) && (a == null ? e.defaultValue = en(e._wrapperState.initialValue) : e.defaultValue !== en(a) && (e.defaultValue = en(a)));
    }
    var tf = !1, Uu = !1, Vh = !1;
    function nf(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? i.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Uu || (Uu = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Vh || (Vh = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !tf && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), tf = !0);
    }
    function uv(e, t) {
      t.value != null && e.setAttribute("value", en(gn(t.value)));
    }
    var Ws = Array.isArray;
    function _r(e) {
      return Ws(e);
    }
    var rf;
    rf = !1;
    function Bh() {
      var e = Zr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Wh = ["value", "defaultValue"];
    function z1(e) {
      {
        Wi("select", e);
        for (var t = 0; t < Wh.length; t++) {
          var a = Wh[t];
          if (e[a] != null) {
            var o = _r(e[a]);
            e.multiple && !o ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Bh()) : !e.multiple && o && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Bh());
          }
        }
      }
    }
    function tl(e, t, a, o) {
      var c = e.options;
      if (t) {
        for (var v = a, g = {}, C = 0; C < v.length; C++)
          g["$" + v[C]] = !0;
        for (var b = 0; b < c.length; b++) {
          var k = g.hasOwnProperty("$" + c[b].value);
          c[b].selected !== k && (c[b].selected = k), k && o && (c[b].defaultSelected = !0);
        }
      } else {
        for (var M = en(gn(a)), j = null, $ = 0; $ < c.length; $++) {
          if (c[$].value === M) {
            c[$].selected = !0, o && (c[$].defaultSelected = !0);
            return;
          }
          j === null && !c[$].disabled && (j = c[$]);
        }
        j !== null && (j.selected = !0);
      }
    }
    function sv(e, t) {
      return Nt({}, t, {
        value: void 0
      });
    }
    function Kh(e, t) {
      var a = e;
      z1(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !rf && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), rf = !0);
    }
    function P1(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var o = t.value;
      o != null ? tl(a, !!t.multiple, o, !1) : t.defaultValue != null && tl(a, !!t.multiple, t.defaultValue, !0);
    }
    function H1(e, t) {
      var a = e, o = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var c = t.value;
      c != null ? tl(a, !!t.multiple, c, !1) : o !== !!t.multiple && (t.defaultValue != null ? tl(a, !!t.multiple, t.defaultValue, !0) : tl(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function U1(e, t) {
      var a = e, o = t.value;
      o != null && tl(a, !!t.multiple, o, !1);
    }
    var cv = !1;
    function fv(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var o = Nt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: en(a._wrapperState.initialValue)
      });
      return o;
    }
    function Gh(e, t) {
      var a = e;
      Wi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !cv && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Zr() || "A component"), cv = !0);
      var o = t.value;
      if (o == null) {
        var c = t.children, v = t.defaultValue;
        if (c != null) {
          h("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (v != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (_r(c)) {
              if (c.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              c = c[0];
            }
            v = c;
          }
        }
        v == null && (v = ""), o = v;
      }
      a._wrapperState = {
        initialValue: gn(o)
      };
    }
    function Yh(e, t) {
      var a = e, o = gn(t.value), c = gn(t.defaultValue);
      if (o != null) {
        var v = en(o);
        v !== a.value && (a.value = v), t.defaultValue == null && a.defaultValue !== v && (a.defaultValue = v);
      }
      c != null && (a.defaultValue = en(c));
    }
    function Qh(e, t) {
      var a = e, o = a.textContent;
      o === a._wrapperState.initialValue && o !== "" && o !== null && (a.value = o);
    }
    function dv(e, t) {
      Yh(e, t);
    }
    var So = "http://www.w3.org/1999/xhtml", I1 = "http://www.w3.org/1998/Math/MathML", vv = "http://www.w3.org/2000/svg";
    function af(e) {
      switch (e) {
        case "svg":
          return vv;
        case "math":
          return I1;
        default:
          return So;
      }
    }
    function pv(e, t) {
      return e == null || e === So ? af(t) : e === vv && t === "foreignObject" ? So : e;
    }
    var $1 = function(e) {
      return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, a, o, c) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, o, c);
        });
      } : e;
    }, of, Xh = $1(function(e, t) {
      if (e.namespaceURI === vv && !("innerHTML" in e)) {
        of = of || document.createElement("div"), of.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = of.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), wa = 1, Co = 3, pr = 8, Di = 9, Il = 11, lf = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Co) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, qh = {
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
    }, Iu = {
      animationIterationCount: !0,
      aspectRatio: !0,
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
    function Zh(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Jh = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Iu).forEach(function(e) {
      Jh.forEach(function(t) {
        Iu[Zh(t, e)] = Iu[e];
      });
    });
    function uf(e, t, a) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !a && typeof t == "number" && t !== 0 && !(Iu.hasOwnProperty(e) && Iu[e]) ? t + "px" : (vt(t, e), ("" + t).trim());
    }
    var $u = /([A-Z])/g, F1 = /^ms-/;
    function j1(e) {
      return e.replace($u, "-$1").toLowerCase().replace(F1, "-ms-");
    }
    var em = function() {
    };
    {
      var tm = /^(?:webkit|moz|o)[A-Z]/, nm = /^-ms-/, Ks = /-(.)/g, Fu = /;\s*$/, ju = {}, Vu = {}, rm = !1, hv = !1, mv = function(e) {
        return e.replace(Ks, function(t, a) {
          return a.toUpperCase();
        });
      }, gv = function(e) {
        ju.hasOwnProperty(e) && ju[e] || (ju[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          mv(e.replace(nm, "ms-"))
        ));
      }, am = function(e) {
        ju.hasOwnProperty(e) && ju[e] || (ju[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, im = function(e, t) {
        Vu.hasOwnProperty(t) && Vu[t] || (Vu[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Fu, "")));
      }, om = function(e, t) {
        rm || (rm = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, V1 = function(e, t) {
        hv || (hv = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      em = function(e, t) {
        e.indexOf("-") > -1 ? gv(e) : tm.test(e) ? am(e) : Fu.test(t) && im(e, t), typeof t == "number" && (isNaN(t) ? om(e, t) : isFinite(t) || V1(e, t));
      };
    }
    var B1 = em;
    function W1(e) {
      {
        var t = "", a = "";
        for (var o in e)
          if (e.hasOwnProperty(o)) {
            var c = e[o];
            if (c != null) {
              var v = o.indexOf("--") === 0;
              t += a + (v ? o : j1(o)) + ":", t += uf(o, c, v), a = ";";
            }
          }
        return t || null;
      }
    }
    function lm(e, t) {
      var a = e.style;
      for (var o in t)
        if (t.hasOwnProperty(o)) {
          var c = o.indexOf("--") === 0;
          c || B1(o, t[o]);
          var v = uf(o, t[o], c);
          o === "float" && (o = "cssFloat"), c ? a.setProperty(o, v) : a[o] = v;
        }
    }
    function K1(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function li(e) {
      var t = {};
      for (var a in e)
        for (var o = qh[a] || [a], c = 0; c < o.length; c++)
          t[o[c]] = a;
      return t;
    }
    function Gs(e, t) {
      {
        if (!t)
          return;
        var a = li(e), o = li(t), c = {};
        for (var v in a) {
          var g = a[v], C = o[v];
          if (C && g !== C) {
            var b = g + "," + C;
            if (c[b])
              continue;
            c[b] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", K1(e[g]) ? "Removing" : "Updating", g, C);
          }
        }
      }
    }
    var um = {
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
    }, sm = Nt({
      menuitem: !0
    }, um), cm = "__html";
    function sf(e, t) {
      if (t) {
        if (sm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(cm in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function bo(e, t) {
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
    var cf = {
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
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
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
    }, fm = {
      "aria-current": 0,
      // state
      "aria-description": 0,
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
    }, Li = {}, yv = new RegExp("^(aria)-[" + Ue + "]*$"), Ys = new RegExp("^(aria)[A-Z][" + Ue + "]*$");
    function Sv(e, t) {
      {
        if (Se.call(Li, t) && Li[t])
          return !0;
        if (Ys.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), o = fm.hasOwnProperty(a) ? a : null;
          if (o == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Li[t] = !0, !0;
          if (t !== o)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), Li[t] = !0, !0;
        }
        if (yv.test(t)) {
          var c = t.toLowerCase(), v = fm.hasOwnProperty(c) ? c : null;
          if (v == null)
            return Li[t] = !0, !1;
          if (t !== v)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, v), Li[t] = !0, !0;
        }
      }
      return !0;
    }
    function dm(e, t) {
      {
        var a = [];
        for (var o in t) {
          var c = Sv(e, o);
          c || a.push(o);
        }
        var v = a.map(function(g) {
          return "`" + g + "`";
        }).join(", ");
        a.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", v, e) : a.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", v, e);
      }
    }
    function ff(e, t) {
      bo(e, t) || dm(e, t);
    }
    var $l = !1;
    function Cv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !$l && ($l = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var bv = function() {
    };
    {
      var Mr = {}, Ev = /^on./, vm = /^on[^A-Z]/, pm = new RegExp("^(aria)-[" + Ue + "]*$"), hm = new RegExp("^(aria)[A-Z][" + Ue + "]*$");
      bv = function(e, t, a, o) {
        if (Se.call(Mr, t) && Mr[t])
          return !0;
        var c = t.toLowerCase();
        if (c === "onfocusin" || c === "onfocusout")
          return h("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Mr[t] = !0, !0;
        if (o != null) {
          var v = o.registrationNameDependencies, g = o.possibleRegistrationNames;
          if (v.hasOwnProperty(t))
            return !0;
          var C = g.hasOwnProperty(c) ? g[c] : null;
          if (C != null)
            return h("Invalid event handler property `%s`. Did you mean `%s`?", t, C), Mr[t] = !0, !0;
          if (Ev.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), Mr[t] = !0, !0;
        } else if (Ev.test(t))
          return vm.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Mr[t] = !0, !0;
        if (pm.test(t) || hm.test(t))
          return !0;
        if (c === "innerhtml")
          return h("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Mr[t] = !0, !0;
        if (c === "aria")
          return h("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Mr[t] = !0, !0;
        if (c === "is" && a !== null && a !== void 0 && typeof a != "string")
          return h("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Mr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return h("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Mr[t] = !0, !0;
        var b = Zt(t), k = b !== null && b.type === Xt;
        if (cf.hasOwnProperty(c)) {
          var M = cf[c];
          if (M !== t)
            return h("Invalid DOM property `%s`. Did you mean `%s`?", t, M), Mr[t] = !0, !0;
        } else if (!k && t !== c)
          return h("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, c), Mr[t] = !0, !0;
        return typeof a == "boolean" && Mn(t, a, b, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Mr[t] = !0, !0) : k ? !0 : Mn(t, a, b, !1) ? (Mr[t] = !0, !1) : ((a === "false" || a === "true") && b !== null && b.type === kn && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Mr[t] = !0), !0);
      };
    }
    var mm = function(e, t, a) {
      {
        var o = [];
        for (var c in t) {
          var v = bv(e, c, t[c], a);
          v || o.push(c);
        }
        var g = o.map(function(C) {
          return "`" + C + "`";
        }).join(", ");
        o.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", g, e) : o.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", g, e);
      }
    };
    function gm(e, t, a) {
      bo(e, t) || mm(e, t, a);
    }
    var Eo = 1, Qs = 2, Fl = 4, G1 = Eo | Qs | Fl, Xs = null;
    function qs(e) {
      Xs !== null && h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Xs = e;
    }
    function Y1() {
      Xs === null && h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Xs = null;
    }
    function ym(e) {
      return e === Xs;
    }
    function df(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Co ? t.parentNode : t;
    }
    var Nn = null, nl = null, wo = null;
    function Bu(e) {
      var t = ms(e);
      if (t) {
        if (typeof Nn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var o = yg(a);
          Nn(t.stateNode, t.type, o);
        }
      }
    }
    function Sm(e) {
      Nn = e;
    }
    function vf(e) {
      nl ? wo ? wo.push(e) : wo = [e] : nl = e;
    }
    function Zs() {
      return nl !== null || wo !== null;
    }
    function Js() {
      if (nl) {
        var e = nl, t = wo;
        if (nl = null, wo = null, Bu(e), t)
          for (var a = 0; a < t.length; a++)
            Bu(t[a]);
      }
    }
    var jl = function(e, t) {
      return e(t);
    }, wv = function() {
    }, xv = !1;
    function Q1() {
      var e = Zs();
      e && (wv(), Js());
    }
    function Tv(e, t, a) {
      if (xv)
        return e(t, a);
      xv = !0;
      try {
        return jl(e, t, a);
      } finally {
        xv = !1, Q1();
      }
    }
    function pf(e, t, a) {
      jl = e, wv = a;
    }
    function hf(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Rv(e, t, a) {
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
          return !!(a.disabled && hf(t));
        default:
          return !1;
      }
    }
    function Vl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var o = yg(a);
      if (o === null)
        return null;
      var c = o[t];
      if (Rv(t, e.type, o))
        return null;
      if (c && typeof c != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof c + "` type.");
      return c;
    }
    var ec = !1;
    if (Ot)
      try {
        var Bl = {};
        Object.defineProperty(Bl, "passive", {
          get: function() {
            ec = !0;
          }
        }), window.addEventListener("test", Bl, Bl), window.removeEventListener("test", Bl, Bl);
      } catch (e) {
        ec = !1;
      }
    function Cm(e, t, a, o, c, v, g, C, b) {
      var k = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, k);
      } catch (M) {
        this.onError(M);
      }
    }
    var kv = Cm;
    if (typeof window != "undefined" && typeof window.dispatchEvent == "function" && typeof document != "undefined" && typeof document.createEvent == "function") {
      var _v = document.createElement("react");
      kv = function(t, a, o, c, v, g, C, b, k) {
        if (typeof document == "undefined" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var M = document.createEvent("Event"), j = !1, $ = !0, Z = window.event, J = Object.getOwnPropertyDescriptor(window, "event");
        function ie() {
          _v.removeEventListener(oe, at, !1), typeof window.event != "undefined" && window.hasOwnProperty("event") && (window.event = Z);
        }
        var Ie = Array.prototype.slice.call(arguments, 3);
        function at() {
          j = !0, ie(), a.apply(o, Ie), $ = !1;
        }
        var qe, on = !1, Qt = !1;
        function Y(Q) {
          if (qe = Q.error, on = !0, qe === null && Q.colno === 0 && Q.lineno === 0 && (Qt = !0), Q.defaultPrevented && qe != null && typeof qe == "object")
            try {
              qe._suppressLogging = !0;
            } catch (ye) {
            }
        }
        var oe = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", Y), _v.addEventListener(oe, at, !1), M.initEvent(oe, !1, !1), _v.dispatchEvent(M), J && Object.defineProperty(window, "event", J), j && $ && (on ? Qt && (qe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : qe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(qe)), window.removeEventListener("error", Y), !j)
          return ie(), Cm.apply(this, arguments);
      };
    }
    var X1 = kv, rl = !1, Ai = null, tc = !1, al = null, Ki = {
      onError: function(e) {
        rl = !0, Ai = e;
      }
    };
    function Wl(e, t, a, o, c, v, g, C, b) {
      rl = !1, Ai = null, X1.apply(Ki, arguments);
    }
    function xo(e, t, a, o, c, v, g, C, b) {
      if (Wl.apply(this, arguments), rl) {
        var k = Ov();
        tc || (tc = !0, al = k);
      }
    }
    function Mv() {
      if (tc) {
        var e = al;
        throw tc = !1, al = null, e;
      }
    }
    function q1() {
      return rl;
    }
    function Ov() {
      if (rl) {
        var e = Ai;
        return rl = !1, Ai = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ui(e) {
      return e._reactInternals;
    }
    function nc(e) {
      return e._reactInternals !== void 0;
    }
    function Wu(e, t) {
      e._reactInternals = t;
    }
    var nt = (
      /*                      */
      0
    ), il = (
      /*                */
      1
    ), Pn = (
      /*                    */
      2
    ), Dt = (
      /*                       */
      4
    ), yn = (
      /*                */
      16
    ), Sn = (
      /*                 */
      32
    ), Gi = (
      /*                     */
      64
    ), yt = (
      /*                   */
      128
    ), Zn = (
      /*            */
      256
    ), xa = (
      /*                          */
      512
    ), si = (
      /*                     */
      1024
    ), jn = (
      /*                      */
      2048
    ), ci = (
      /*                    */
      4096
    ), ol = (
      /*                   */
      8192
    ), rc = (
      /*             */
      16384
    ), mf = jn | Dt | Gi | xa | si | rc, bm = (
      /*               */
      32767
    ), Ga = (
      /*                   */
      32768
    ), Or = (
      /*                */
      65536
    ), ac = (
      /* */
      131072
    ), Nv = (
      /*                       */
      1048576
    ), Dv = (
      /*                    */
      2097152
    ), Ta = (
      /*                 */
      4194304
    ), ll = (
      /*                */
      8388608
    ), Ra = (
      /*               */
      16777216
    ), Kl = (
      /*              */
      33554432
    ), Ku = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Dt | si | 0
    ), ka = Pn | Dt | yn | Sn | xa | ci | ol, Jr = Dt | Gi | xa | ol, fi = jn | yn, Ur = Ta | ll | Dv, To = u.ReactCurrentOwner;
    function Ya(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var o = t;
        do
          t = o, (t.flags & (Pn | ci)) !== nt && (a = t.return), o = t.return;
        while (o);
      }
      return t.tag === _ ? a : null;
    }
    function Lv(e) {
      if (e.tag === W) {
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
    function gf(e) {
      return e.tag === _ ? e.stateNode.containerInfo : null;
    }
    function Av(e) {
      return Ya(e) === e;
    }
    function Qa(e) {
      {
        var t = To.current;
        if (t !== null && t.tag === R) {
          var a = t, o = a.stateNode;
          o._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ct(a) || "A component"), o._warnedAboutRefsInRender = !0;
        }
      }
      var c = ui(e);
      return c ? Ya(c) === c : !1;
    }
    function _a(e) {
      if (Ya(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Hn(e) {
      var t = e.alternate;
      if (!t) {
        var a = Ya(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var o = e, c = t; ; ) {
        var v = o.return;
        if (v === null)
          break;
        var g = v.alternate;
        if (g === null) {
          var C = v.return;
          if (C !== null) {
            o = c = C;
            continue;
          }
          break;
        }
        if (v.child === g.child) {
          for (var b = v.child; b; ) {
            if (b === o)
              return _a(v), e;
            if (b === c)
              return _a(v), t;
            b = b.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (o.return !== c.return)
          o = v, c = g;
        else {
          for (var k = !1, M = v.child; M; ) {
            if (M === o) {
              k = !0, o = v, c = g;
              break;
            }
            if (M === c) {
              k = !0, c = v, o = g;
              break;
            }
            M = M.sibling;
          }
          if (!k) {
            for (M = g.child; M; ) {
              if (M === o) {
                k = !0, o = g, c = v;
                break;
              }
              if (M === c) {
                k = !0, c = g, o = v;
                break;
              }
              M = M.sibling;
            }
            if (!k)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (o.alternate !== c)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (o.tag !== _)
        throw new Error("Unable to find node on an unmounted component.");
      return o.stateNode.current === o ? e : t;
    }
    function di(e) {
      var t = Hn(e);
      return t !== null ? zv(t) : null;
    }
    function zv(e) {
      if (e.tag === L || e.tag === z)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = zv(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Em(e) {
      var t = Hn(e);
      return t !== null ? yf(t) : null;
    }
    function yf(e) {
      if (e.tag === L || e.tag === z)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== N) {
          var a = yf(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Sf = l.unstable_scheduleCallback, wm = l.unstable_cancelCallback, Cf = l.unstable_shouldYield, xm = l.unstable_requestPaint, Kn = l.unstable_now, Pv = l.unstable_getCurrentPriorityLevel, bf = l.unstable_ImmediatePriority, Xa = l.unstable_UserBlockingPriority, Yi = l.unstable_NormalPriority, Ef = l.unstable_LowPriority, ul = l.unstable_IdlePriority, Hv = l.unstable_yieldValue, Uv = l.unstable_setDisableYieldValue, sl = null, Nr = null, Me = null, lr = !1, Ir = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined";
    function Iv(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        At && (e = Nt({}, e, {
          getLaneLabelMap: fl,
          injectProfilingHooks: ko
        })), sl = t.inject(e), Nr = t;
      } catch (a) {
        h("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Tm(e, t) {
      if (Nr && typeof Nr.onScheduleFiberRoot == "function")
        try {
          Nr.onScheduleFiberRoot(sl, e, t);
        } catch (a) {
          lr || (lr = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function Ro(e, t) {
      if (Nr && typeof Nr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & yt) === yt;
          if (it) {
            var o;
            switch (t) {
              case ea:
                o = bf;
                break;
              case $r:
                o = Xa;
                break;
              case Mo:
                o = Yi;
                break;
              case vc:
                o = ul;
                break;
              default:
                o = Yi;
                break;
            }
            Nr.onCommitFiberRoot(sl, e, o, a);
          }
        } catch (c) {
          lr || (lr = !0, h("React instrumentation encountered an error: %s", c));
        }
    }
    function cl(e) {
      if (Nr && typeof Nr.onPostCommitFiberRoot == "function")
        try {
          Nr.onPostCommitFiberRoot(sl, e);
        } catch (t) {
          lr || (lr = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function $v(e) {
      if (Nr && typeof Nr.onCommitFiberUnmount == "function")
        try {
          Nr.onCommitFiberUnmount(sl, e);
        } catch (t) {
          lr || (lr = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Sr(e) {
      if (typeof Hv == "function" && (Uv(e), p(e)), Nr && typeof Nr.setStrictMode == "function")
        try {
          Nr.setStrictMode(sl, e);
        } catch (t) {
          lr || (lr = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function ko(e) {
      Me = e;
    }
    function fl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Un; a++) {
          var o = Z1(t);
          e.set(t, o), t *= 2;
        }
        return e;
      }
    }
    function wf(e) {
      Me !== null && typeof Me.markCommitStarted == "function" && Me.markCommitStarted(e);
    }
    function Fv() {
      Me !== null && typeof Me.markCommitStopped == "function" && Me.markCommitStopped();
    }
    function dl(e) {
      Me !== null && typeof Me.markComponentRenderStarted == "function" && Me.markComponentRenderStarted(e);
    }
    function Gl() {
      Me !== null && typeof Me.markComponentRenderStopped == "function" && Me.markComponentRenderStopped();
    }
    function Rm(e) {
      Me !== null && typeof Me.markComponentPassiveEffectMountStarted == "function" && Me.markComponentPassiveEffectMountStarted(e);
    }
    function jv() {
      Me !== null && typeof Me.markComponentPassiveEffectMountStopped == "function" && Me.markComponentPassiveEffectMountStopped();
    }
    function xf(e) {
      Me !== null && typeof Me.markComponentPassiveEffectUnmountStarted == "function" && Me.markComponentPassiveEffectUnmountStarted(e);
    }
    function km() {
      Me !== null && typeof Me.markComponentPassiveEffectUnmountStopped == "function" && Me.markComponentPassiveEffectUnmountStopped();
    }
    function _m(e) {
      Me !== null && typeof Me.markComponentLayoutEffectMountStarted == "function" && Me.markComponentLayoutEffectMountStarted(e);
    }
    function Mm() {
      Me !== null && typeof Me.markComponentLayoutEffectMountStopped == "function" && Me.markComponentLayoutEffectMountStopped();
    }
    function Tf(e) {
      Me !== null && typeof Me.markComponentLayoutEffectUnmountStarted == "function" && Me.markComponentLayoutEffectUnmountStarted(e);
    }
    function Gu() {
      Me !== null && typeof Me.markComponentLayoutEffectUnmountStopped == "function" && Me.markComponentLayoutEffectUnmountStopped();
    }
    function Rf(e, t, a) {
      Me !== null && typeof Me.markComponentErrored == "function" && Me.markComponentErrored(e, t, a);
    }
    function Om(e, t, a) {
      Me !== null && typeof Me.markComponentSuspended == "function" && Me.markComponentSuspended(e, t, a);
    }
    function Nm(e) {
      Me !== null && typeof Me.markLayoutEffectsStarted == "function" && Me.markLayoutEffectsStarted(e);
    }
    function Yu() {
      Me !== null && typeof Me.markLayoutEffectsStopped == "function" && Me.markLayoutEffectsStopped();
    }
    function Dm(e) {
      Me !== null && typeof Me.markPassiveEffectsStarted == "function" && Me.markPassiveEffectsStarted(e);
    }
    function ic() {
      Me !== null && typeof Me.markPassiveEffectsStopped == "function" && Me.markPassiveEffectsStopped();
    }
    function zi(e) {
      Me !== null && typeof Me.markRenderStarted == "function" && Me.markRenderStarted(e);
    }
    function oc() {
      Me !== null && typeof Me.markRenderYielded == "function" && Me.markRenderYielded();
    }
    function Qu() {
      Me !== null && typeof Me.markRenderStopped == "function" && Me.markRenderStopped();
    }
    function Yl(e) {
      Me !== null && typeof Me.markRenderScheduled == "function" && Me.markRenderScheduled(e);
    }
    function Vv(e, t) {
      Me !== null && typeof Me.markForceUpdateScheduled == "function" && Me.markForceUpdateScheduled(e, t);
    }
    function vl(e, t) {
      Me !== null && typeof Me.markStateUpdateScheduled == "function" && Me.markStateUpdateScheduled(e, t);
    }
    var ot = (
      /*                         */
      0
    ), Bt = (
      /*                 */
      1
    ), lt = (
      /*                    */
      2
    ), Gn = (
      /*               */
      8
    ), vi = (
      /*              */
      16
    ), kf = Math.clz32 ? Math.clz32 : Ql, _f = Math.log, Bv = Math.LN2;
    function Ql(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (_f(t) / Bv | 0) | 0;
    }
    var Un = 31, ue = (
      /*                        */
      0
    ), rn = (
      /*                          */
      0
    ), ut = (
      /*                        */
      1
    ), Qi = (
      /*    */
      2
    ), qa = (
      /*             */
      4
    ), Xl = (
      /*            */
      8
    ), In = (
      /*                     */
      16
    ), ql = (
      /*                */
      32
    ), pl = (
      /*                       */
      4194240
    ), Zl = (
      /*                        */
      64
    ), pi = (
      /*                        */
      128
    ), Ma = (
      /*                        */
      256
    ), Jl = (
      /*                        */
      512
    ), lc = (
      /*                        */
      1024
    ), uc = (
      /*                        */
      2048
    ), Mf = (
      /*                        */
      4096
    ), Of = (
      /*                        */
      8192
    ), Nf = (
      /*                        */
      16384
    ), Df = (
      /*                       */
      32768
    ), Lf = (
      /*                       */
      65536
    ), Af = (
      /*                       */
      131072
    ), zf = (
      /*                       */
      262144
    ), Pf = (
      /*                       */
      524288
    ), eu = (
      /*                       */
      1048576
    ), Hf = (
      /*                       */
      2097152
    ), tu = (
      /*                            */
      130023424
    ), _o = (
      /*                             */
      4194304
    ), Uf = (
      /*                             */
      8388608
    ), sc = (
      /*                             */
      16777216
    ), If = (
      /*                             */
      33554432
    ), $f = (
      /*                             */
      67108864
    ), Wv = _o, Xu = (
      /*          */
      134217728
    ), Ff = (
      /*                          */
      268435455
    ), qu = (
      /*               */
      268435456
    ), hl = (
      /*                        */
      536870912
    ), Oa = (
      /*                   */
      1073741824
    );
    function Z1(e) {
      {
        if (e & ut)
          return "Sync";
        if (e & Qi)
          return "InputContinuousHydration";
        if (e & qa)
          return "InputContinuous";
        if (e & Xl)
          return "DefaultHydration";
        if (e & In)
          return "Default";
        if (e & ql)
          return "TransitionHydration";
        if (e & pl)
          return "Transition";
        if (e & tu)
          return "Retry";
        if (e & Xu)
          return "SelectiveHydration";
        if (e & qu)
          return "IdleHydration";
        if (e & hl)
          return "Idle";
        if (e & Oa)
          return "Offscreen";
      }
    }
    var Dn = -1, jf = Zl, Vf = _o;
    function Zu(e) {
      switch (hr(e)) {
        case ut:
          return ut;
        case Qi:
          return Qi;
        case qa:
          return qa;
        case Xl:
          return Xl;
        case In:
          return In;
        case ql:
          return ql;
        case Zl:
        case pi:
        case Ma:
        case Jl:
        case lc:
        case uc:
        case Mf:
        case Of:
        case Nf:
        case Df:
        case Lf:
        case Af:
        case zf:
        case Pf:
        case eu:
        case Hf:
          return e & pl;
        case _o:
        case Uf:
        case sc:
        case If:
        case $f:
          return e & tu;
        case Xu:
          return Xu;
        case qu:
          return qu;
        case hl:
          return hl;
        case Oa:
          return Oa;
        default:
          return h("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function cc(e, t) {
      var a = e.pendingLanes;
      if (a === ue)
        return ue;
      var o = ue, c = e.suspendedLanes, v = e.pingedLanes, g = a & Ff;
      if (g !== ue) {
        var C = g & ~c;
        if (C !== ue)
          o = Zu(C);
        else {
          var b = g & v;
          b !== ue && (o = Zu(b));
        }
      } else {
        var k = a & ~c;
        k !== ue ? o = Zu(k) : v !== ue && (o = Zu(v));
      }
      if (o === ue)
        return ue;
      if (t !== ue && t !== o && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & c) === ue) {
        var M = hr(o), j = hr(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          M >= j || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          M === In && (j & pl) !== ue
        )
          return t;
      }
      (o & qa) !== ue && (o |= a & In);
      var $ = e.entangledLanes;
      if ($ !== ue)
        for (var Z = e.entanglements, J = o & $; J > 0; ) {
          var ie = ml(J), Ie = 1 << ie;
          o |= Z[ie], J &= ~Ie;
        }
      return o;
    }
    function Lm(e, t) {
      for (var a = e.eventTimes, o = Dn; t > 0; ) {
        var c = ml(t), v = 1 << c, g = a[c];
        g > o && (o = g), t &= ~v;
      }
      return o;
    }
    function Bf(e, t) {
      switch (e) {
        case ut:
        case Qi:
        case qa:
          return t + 250;
        case Xl:
        case In:
        case ql:
        case Zl:
        case pi:
        case Ma:
        case Jl:
        case lc:
        case uc:
        case Mf:
        case Of:
        case Nf:
        case Df:
        case Lf:
        case Af:
        case zf:
        case Pf:
        case eu:
        case Hf:
          return t + 5e3;
        case _o:
        case Uf:
        case sc:
        case If:
        case $f:
          return Dn;
        case Xu:
        case qu:
        case hl:
        case Oa:
          return Dn;
        default:
          return h("Should have found matching lanes. This is a bug in React."), Dn;
      }
    }
    function J1(e, t) {
      for (var a = e.pendingLanes, o = e.suspendedLanes, c = e.pingedLanes, v = e.expirationTimes, g = a; g > 0; ) {
        var C = ml(g), b = 1 << C, k = v[C];
        k === Dn ? ((b & o) === ue || (b & c) !== ue) && (v[C] = Bf(b, t)) : k <= t && (e.expiredLanes |= b), g &= ~b;
      }
    }
    function e0(e) {
      return Zu(e.pendingLanes);
    }
    function Kv(e) {
      var t = e.pendingLanes & ~Oa;
      return t !== ue ? t : t & Oa ? Oa : ue;
    }
    function Ju(e) {
      return (e & ut) !== ue;
    }
    function fc(e) {
      return (e & Ff) !== ue;
    }
    function Wf(e) {
      return (e & tu) === e;
    }
    function t0(e) {
      var t = ut | qa | In;
      return (e & t) === ue;
    }
    function Am(e) {
      return (e & pl) === e;
    }
    function dc(e, t) {
      var a = Qi | qa | Xl | In;
      return (t & a) !== ue;
    }
    function zm(e, t) {
      return (t & e.expiredLanes) !== ue;
    }
    function Gv(e) {
      return (e & pl) !== ue;
    }
    function Yv() {
      var e = jf;
      return jf <<= 1, (jf & pl) === ue && (jf = Zl), e;
    }
    function n0() {
      var e = Vf;
      return Vf <<= 1, (Vf & tu) === ue && (Vf = _o), e;
    }
    function hr(e) {
      return e & -e;
    }
    function Cr(e) {
      return hr(e);
    }
    function ml(e) {
      return 31 - kf(e);
    }
    function Kf(e) {
      return ml(e);
    }
    function Na(e, t) {
      return (e & t) !== ue;
    }
    function nu(e, t) {
      return (e & t) === t;
    }
    function Lt(e, t) {
      return e | t;
    }
    function es(e, t) {
      return e & ~t;
    }
    function Qv(e, t) {
      return e & t;
    }
    function Pm(e) {
      return e;
    }
    function Hm(e, t) {
      return e !== rn && e < t ? e : t;
    }
    function Gf(e) {
      for (var t = [], a = 0; a < Un; a++)
        t.push(e);
      return t;
    }
    function ru(e, t, a) {
      e.pendingLanes |= t, t !== hl && (e.suspendedLanes = ue, e.pingedLanes = ue);
      var o = e.eventTimes, c = Kf(t);
      o[c] = a;
    }
    function Xv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, o = t; o > 0; ) {
        var c = ml(o), v = 1 << c;
        a[c] = Dn, o &= ~v;
      }
    }
    function qv(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Zv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ue, e.pingedLanes = ue, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var o = e.entanglements, c = e.eventTimes, v = e.expirationTimes, g = a; g > 0; ) {
        var C = ml(g), b = 1 << C;
        o[C] = ue, c[C] = Dn, v[C] = Dn, g &= ~b;
      }
    }
    function ts(e, t) {
      for (var a = e.entangledLanes |= t, o = e.entanglements, c = a; c; ) {
        var v = ml(c), g = 1 << v;
        // Is this one of the newly entangled lanes?
        g & t | // Is this lane transitively entangled with the newly entangled lanes?
        o[v] & t && (o[v] |= t), c &= ~g;
      }
    }
    function r0(e, t) {
      var a = hr(t), o;
      switch (a) {
        case qa:
          o = Qi;
          break;
        case In:
          o = Xl;
          break;
        case Zl:
        case pi:
        case Ma:
        case Jl:
        case lc:
        case uc:
        case Mf:
        case Of:
        case Nf:
        case Df:
        case Lf:
        case Af:
        case zf:
        case Pf:
        case eu:
        case Hf:
        case _o:
        case Uf:
        case sc:
        case If:
        case $f:
          o = ql;
          break;
        case hl:
          o = qu;
          break;
        default:
          o = rn;
          break;
      }
      return (o & (e.suspendedLanes | t)) !== rn ? rn : o;
    }
    function Jv(e, t, a) {
      if (Ir)
        for (var o = e.pendingUpdatersLaneMap; a > 0; ) {
          var c = Kf(a), v = 1 << c, g = o[c];
          g.add(t), a &= ~v;
        }
    }
    function Yf(e, t) {
      if (Ir)
        for (var a = e.pendingUpdatersLaneMap, o = e.memoizedUpdaters; t > 0; ) {
          var c = Kf(t), v = 1 << c, g = a[c];
          g.size > 0 && (g.forEach(function(C) {
            var b = C.alternate;
            (b === null || !o.has(b)) && o.add(C);
          }), g.clear()), t &= ~v;
        }
    }
    function ep(e, t) {
      return null;
    }
    var ea = ut, $r = qa, Mo = In, vc = hl, au = rn;
    function hi() {
      return au;
    }
    function br(e) {
      au = e;
    }
    function pc(e, t) {
      var a = au;
      try {
        return au = e, t();
      } finally {
        au = a;
      }
    }
    function ta(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function a0(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function tp(e, t) {
      return e !== 0 && e < t;
    }
    function hc(e) {
      var t = hr(e);
      return tp(ea, t) ? tp($r, t) ? fc(t) ? Mo : vc : $r : ea;
    }
    function Er(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Um;
    function Fe(e) {
      Um = e;
    }
    function ns(e) {
      Um(e);
    }
    var mc;
    function Im(e) {
      mc = e;
    }
    var $m;
    function gc(e) {
      $m = e;
    }
    var yc;
    function np(e) {
      yc = e;
    }
    var rp;
    function Fm(e) {
      rp = e;
    }
    var Qf = !1, rs = [], Xi = null, Vn = null, Dr = null, mi = /* @__PURE__ */ new Map(), as = /* @__PURE__ */ new Map(), Oo = [], Pi = [
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
    function jm(e) {
      return Pi.indexOf(e) > -1;
    }
    function qi(e, t, a, o, c) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: c,
        targetContainers: [o]
      };
    }
    function Vm(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Xi = null;
          break;
        case "dragenter":
        case "dragleave":
          Vn = null;
          break;
        case "mouseover":
        case "mouseout":
          Dr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          mi.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var o = t.pointerId;
          as.delete(o);
          break;
        }
      }
    }
    function is(e, t, a, o, c, v) {
      if (e === null || e.nativeEvent !== v) {
        var g = qi(t, a, o, c, v);
        if (t !== null) {
          var C = ms(t);
          C !== null && mc(C);
        }
        return g;
      }
      e.eventSystemFlags |= o;
      var b = e.targetContainers;
      return c !== null && b.indexOf(c) === -1 && b.push(c), e;
    }
    function Bm(e, t, a, o, c) {
      switch (t) {
        case "focusin": {
          var v = c;
          return Xi = is(Xi, e, t, a, o, v), !0;
        }
        case "dragenter": {
          var g = c;
          return Vn = is(Vn, e, t, a, o, g), !0;
        }
        case "mouseover": {
          var C = c;
          return Dr = is(Dr, e, t, a, o, C), !0;
        }
        case "pointerover": {
          var b = c, k = b.pointerId;
          return mi.set(k, is(mi.get(k) || null, e, t, a, o, b)), !0;
        }
        case "gotpointercapture": {
          var M = c, j = M.pointerId;
          return as.set(j, is(as.get(j) || null, e, t, a, o, M)), !0;
        }
      }
      return !1;
    }
    function ap(e) {
      var t = kc(e.target);
      if (t !== null) {
        var a = Ya(t);
        if (a !== null) {
          var o = a.tag;
          if (o === W) {
            var c = Lv(a);
            if (c !== null) {
              e.blockedOn = c, rp(e.priority, function() {
                $m(a);
              });
              return;
            }
          } else if (o === _) {
            var v = a.stateNode;
            if (Er(v)) {
              e.blockedOn = gf(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Wm(e) {
      for (var t = yc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, o = 0; o < Oo.length && tp(t, Oo[o].priority); o++)
        ;
      Oo.splice(o, 0, a), o === 0 && ap(a);
    }
    function Xf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], o = iu(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (o === null) {
          var c = e.nativeEvent, v = new c.constructor(c.type, c);
          qs(v), c.target.dispatchEvent(v), Y1();
        } else {
          var g = ms(o);
          return g !== null && mc(g), e.blockedOn = o, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Sc(e, t, a) {
      Xf(e) && a.delete(t);
    }
    function ip() {
      Qf = !1, Xi !== null && Xf(Xi) && (Xi = null), Vn !== null && Xf(Vn) && (Vn = null), Dr !== null && Xf(Dr) && (Dr = null), mi.forEach(Sc), as.forEach(Sc);
    }
    function na(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Qf || (Qf = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, ip)));
    }
    function Yt(e) {
      if (rs.length > 0) {
        na(rs[0], e);
        for (var t = 1; t < rs.length; t++) {
          var a = rs[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Xi !== null && na(Xi, e), Vn !== null && na(Vn, e), Dr !== null && na(Dr, e);
      var o = function(C) {
        return na(C, e);
      };
      mi.forEach(o), as.forEach(o);
      for (var c = 0; c < Oo.length; c++) {
        var v = Oo[c];
        v.blockedOn === e && (v.blockedOn = null);
      }
      for (; Oo.length > 0; ) {
        var g = Oo[0];
        if (g.blockedOn !== null)
          break;
        ap(g), g.blockedOn === null && Oo.shift();
      }
    }
    var Yn = u.ReactCurrentBatchConfig, Jn = !0;
    function Lr(e) {
      Jn = !!e;
    }
    function Za() {
      return Jn;
    }
    function os(e, t, a) {
      var o = sa(t), c;
      switch (o) {
        case ea:
          c = wr;
          break;
        case $r:
          c = Cc;
          break;
        case Mo:
        default:
          c = No;
          break;
      }
      return c.bind(null, t, a, e);
    }
    function wr(e, t, a, o) {
      var c = hi(), v = Yn.transition;
      Yn.transition = null;
      try {
        br(ea), No(e, t, a, o);
      } finally {
        br(c), Yn.transition = v;
      }
    }
    function Cc(e, t, a, o) {
      var c = hi(), v = Yn.transition;
      Yn.transition = null;
      try {
        br($r), No(e, t, a, o);
      } finally {
        br(c), Yn.transition = v;
      }
    }
    function No(e, t, a, o) {
      Jn && qf(e, t, a, o);
    }
    function qf(e, t, a, o) {
      var c = iu(e, t, a, o);
      if (c === null) {
        x0(e, t, o, ls, a), Vm(e, o);
        return;
      }
      if (Bm(c, e, t, a, o)) {
        o.stopPropagation();
        return;
      }
      if (Vm(e, o), t & Fl && jm(e)) {
        for (; c !== null; ) {
          var v = ms(c);
          v !== null && ns(v);
          var g = iu(e, t, a, o);
          if (g === null && x0(e, t, o, ls, a), g === c)
            break;
          c = g;
        }
        c !== null && o.stopPropagation();
        return;
      }
      x0(e, t, o, null, a);
    }
    var ls = null;
    function iu(e, t, a, o) {
      ls = null;
      var c = df(o), v = kc(c);
      if (v !== null) {
        var g = Ya(v);
        if (g === null)
          v = null;
        else {
          var C = g.tag;
          if (C === W) {
            var b = Lv(g);
            if (b !== null)
              return b;
            v = null;
          } else if (C === _) {
            var k = g.stateNode;
            if (Er(k))
              return gf(g);
            v = null;
          } else
            g !== v && (v = null);
        }
      }
      return ls = v, null;
    }
    function sa(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return ea;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return $r;
        case "message": {
          var t = Pv();
          switch (t) {
            case bf:
              return ea;
            case Xa:
              return $r;
            case Yi:
            case Ef:
              return Mo;
            case ul:
              return vc;
            default:
              return Mo;
          }
        }
        default:
          return Mo;
      }
    }
    function op(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function us(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Do(e, t, a, o) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: o
      }), a;
    }
    function Zf(e, t, a, o) {
      return e.addEventListener(t, a, {
        passive: o
      }), a;
    }
    var ou = null, Zi = null, gl = null;
    function yl(e) {
      return ou = e, Zi = ed(), !0;
    }
    function Jf() {
      ou = null, Zi = null, gl = null;
    }
    function ss() {
      if (gl)
        return gl;
      var e, t = Zi, a = t.length, o, c = ed(), v = c.length;
      for (e = 0; e < a && t[e] === c[e]; e++)
        ;
      var g = a - e;
      for (o = 1; o <= g && t[a - o] === c[v - o]; o++)
        ;
      var C = o > 1 ? 1 - o : void 0;
      return gl = c.slice(e, C), gl;
    }
    function ed() {
      return "value" in ou ? ou.value : ou.textContent;
    }
    function lu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function uu() {
      return !0;
    }
    function ra() {
      return !1;
    }
    function mr(e) {
      function t(a, o, c, v, g) {
        this._reactName = a, this._targetInst = c, this.type = o, this.nativeEvent = v, this.target = g, this.currentTarget = null;
        for (var C in e)
          if (e.hasOwnProperty(C)) {
            var b = e[C];
            b ? this[C] = b(v) : this[C] = v[C];
          }
        var k = v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1;
        return k ? this.isDefaultPrevented = uu : this.isDefaultPrevented = ra, this.isPropagationStopped = ra, this;
      }
      return Nt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = uu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = uu);
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
        isPersistent: uu
      }), t;
    }
    var aa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, ia = mr(aa), cs = Nt({}, aa, {
      view: 0,
      detail: 0
    }), lp = mr(cs), bc, up, gi;
    function Km(e) {
      e !== gi && (gi && e.type === "mousemove" ? (bc = e.screenX - gi.screenX, up = e.screenY - gi.screenY) : (bc = 0, up = 0), gi = e);
    }
    var fs = Nt({}, cs, {
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
      getModifierState: rd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Km(e), bc);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : up;
      }
    }), Sl = mr(fs), sp = Nt({}, fs, {
      dataTransfer: 0
    }), su = mr(sp), Gm = Nt({}, cs, {
      relatedTarget: 0
    }), td = mr(Gm), cp = Nt({}, aa, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), nd = mr(cp), i0 = Nt({}, aa, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), o0 = mr(i0), Ym = Nt({}, aa, {
      data: 0
    }), fp = mr(Ym), cu = fp, l0 = {
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
    }, ds = {
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
    function Qm(e) {
      if (e.key) {
        var t = l0[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = lu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? ds[e.keyCode] || "Unidentified" : "";
    }
    var er = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function u0(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var o = er[e];
      return o ? !!a[o] : !1;
    }
    function rd(e) {
      return u0;
    }
    var s0 = Nt({}, cs, {
      key: Qm,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: rd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? lu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? lu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), c0 = mr(s0), Xm = Nt({}, fs, {
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
    }), dp = mr(Xm), f0 = Nt({}, cs, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: rd
    }), yi = mr(f0), vp = Nt({}, aa, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), d0 = mr(vp), Cl = Nt({}, fs, {
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
    }), ad = mr(Cl), fu = [9, 13, 27, 32], Ec = 229, wc = Ot && "CompositionEvent" in window, du = null;
    Ot && "documentMode" in document && (du = document.documentMode);
    var v0 = Ot && "TextEvent" in window && !du, id = Ot && (!wc || du && du > 8 && du <= 11), qm = 32, pp = String.fromCharCode(qm);
    function Zm() {
      Ze("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ze("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ze("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ze("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var xc = !1;
    function od(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Jm(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function hp(e, t) {
      return e === "keydown" && t.keyCode === Ec;
    }
    function eg(e, t) {
      switch (e) {
        case "keyup":
          return fu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ec;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function mp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ld(e) {
      return e.locale === "ko";
    }
    var Lo = !1;
    function gp(e, t, a, o, c) {
      var v, g;
      if (wc ? v = Jm(t) : Lo ? eg(t, o) && (v = "onCompositionEnd") : hp(t, o) && (v = "onCompositionStart"), !v)
        return null;
      id && !ld(o) && (!Lo && v === "onCompositionStart" ? Lo = yl(c) : v === "onCompositionEnd" && Lo && (g = ss()));
      var C = ig(a, v);
      if (C.length > 0) {
        var b = new fp(v, t, null, o, c);
        if (e.push({
          event: b,
          listeners: C
        }), g)
          b.data = g;
        else {
          var k = mp(o);
          k !== null && (b.data = k);
        }
      }
    }
    function ud(e, t) {
      switch (e) {
        case "compositionend":
          return mp(t);
        case "keypress":
          var a = t.which;
          return a !== qm ? null : (xc = !0, pp);
        case "textInput":
          var o = t.data;
          return o === pp && xc ? null : o;
        default:
          return null;
      }
    }
    function tg(e, t) {
      if (Lo) {
        if (e === "compositionend" || !wc && eg(e, t)) {
          var a = ss();
          return Jf(), Lo = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!od(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return id && !ld(t) ? null : t.data;
        default:
          return null;
      }
    }
    function p0(e, t, a, o, c) {
      var v;
      if (v0 ? v = ud(t, o) : v = tg(t, o), !v)
        return null;
      var g = ig(a, "onBeforeInput");
      if (g.length > 0) {
        var C = new cu("onBeforeInput", "beforeinput", null, o, c);
        e.push({
          event: C,
          listeners: g
        }), C.data = v;
      }
    }
    function sd(e, t, a, o, c, v, g) {
      gp(e, t, a, o, c), p0(e, t, a, o, c);
    }
    var h0 = {
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
    function vs(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!h0[e.type] : t === "textarea";
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
    function m0(e) {
      if (!Ot)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var o = document.createElement("div");
        o.setAttribute(t, "return;"), a = typeof o[t] == "function";
      }
      return a;
    }
    function cd() {
      Ze("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, o) {
      vf(o);
      var c = ig(t, "onChange");
      if (c.length > 0) {
        var v = new ia("onChange", "change", null, a, o);
        e.push({
          event: v,
          listeners: c
        });
      }
    }
    var r = null, s = null;
    function d(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function m(e) {
      var t = [];
      n(t, s, e, df(e)), Tv(S, t);
    }
    function S(e) {
      r2(e, 0);
    }
    function E(e) {
      var t = md(e);
      if (Fh(t))
        return e;
    }
    function D(e, t) {
      if (e === "change")
        return t;
    }
    var P = !1;
    Ot && (P = m0("input") && (!document.documentMode || document.documentMode > 9));
    function te(e, t) {
      r = e, s = t, r.attachEvent("onpropertychange", me);
    }
    function pe() {
      r && (r.detachEvent("onpropertychange", me), r = null, s = null);
    }
    function me(e) {
      e.propertyName === "value" && E(s) && m(e);
    }
    function ve(e, t, a) {
      e === "focusin" ? (pe(), te(t, a)) : e === "focusout" && pe();
    }
    function Pe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return E(s);
    }
    function je(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ke(e, t) {
      if (e === "click")
        return E(t);
    }
    function ur(e, t) {
      if (e === "input" || e === "change")
        return E(t);
    }
    function K(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || el(e, "number", e.value);
    }
    function F(e, t, a, o, c, v, g) {
      var C = a ? md(a) : window, b, k;
      if (d(C) ? b = D : vs(C) ? P ? b = ur : (b = Pe, k = ve) : je(C) && (b = Ke), b) {
        var M = b(t, a);
        if (M) {
          n(e, M, o, c);
          return;
        }
      }
      k && k(t, C, a), t === "focusout" && K(C);
    }
    function X() {
      Ft("onMouseEnter", ["mouseout", "mouseover"]), Ft("onMouseLeave", ["mouseout", "mouseover"]), Ft("onPointerEnter", ["pointerout", "pointerover"]), Ft("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function xe(e, t, a, o, c, v, g) {
      var C = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout";
      if (C && !ym(o)) {
        var k = o.relatedTarget || o.fromElement;
        if (k && (kc(k) || Np(k)))
          return;
      }
      if (!(!b && !C)) {
        var M;
        if (c.window === c)
          M = c;
        else {
          var j = c.ownerDocument;
          j ? M = j.defaultView || j.parentWindow : M = window;
        }
        var $, Z;
        if (b) {
          var J = o.relatedTarget || o.toElement;
          if ($ = a, Z = J ? kc(J) : null, Z !== null) {
            var ie = Ya(Z);
            (Z !== ie || Z.tag !== L && Z.tag !== z) && (Z = null);
          }
        } else
          $ = null, Z = a;
        if ($ !== Z) {
          var Ie = Sl, at = "onMouseLeave", qe = "onMouseEnter", on = "mouse";
          (t === "pointerout" || t === "pointerover") && (Ie = dp, at = "onPointerLeave", qe = "onPointerEnter", on = "pointer");
          var Qt = $ == null ? M : md($), Y = Z == null ? M : md(Z), oe = new Ie(at, on + "leave", $, o, c);
          oe.target = Qt, oe.relatedTarget = Y;
          var Q = null, ye = kc(c);
          if (ye === a) {
            var $e = new Ie(qe, on + "enter", Z, o, c);
            $e.target = Y, $e.relatedTarget = Qt, Q = $e;
          }
          Dk(e, oe, Q, $, Z);
        }
      }
    }
    function Xe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ve = typeof Object.is == "function" ? Object.is : Xe;
    function et(e, t) {
      if (Ve(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), o = Object.keys(t);
      if (a.length !== o.length)
        return !1;
      for (var c = 0; c < a.length; c++) {
        var v = a[c];
        if (!Se.call(t, v) || !Ve(e[v], t[v]))
          return !1;
      }
      return !0;
    }
    function St(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Ar(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function pn(e, t) {
      for (var a = St(e), o = 0, c = 0; a; ) {
        if (a.nodeType === Co) {
          if (c = o + a.textContent.length, o <= t && c >= t)
            return {
              node: a,
              offset: t - o
            };
          o = c;
        }
        a = St(Ar(a));
      }
    }
    function bl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, o = a.getSelection && a.getSelection();
      if (!o || o.rangeCount === 0)
        return null;
      var c = o.anchorNode, v = o.anchorOffset, g = o.focusNode, C = o.focusOffset;
      try {
        c.nodeType, g.nodeType;
      } catch (b) {
        return null;
      }
      return g0(e, c, v, g, C);
    }
    function g0(e, t, a, o, c) {
      var v = 0, g = -1, C = -1, b = 0, k = 0, M = e, j = null;
      e:
        for (; ; ) {
          for (var $ = null; M === t && (a === 0 || M.nodeType === Co) && (g = v + a), M === o && (c === 0 || M.nodeType === Co) && (C = v + c), M.nodeType === Co && (v += M.nodeValue.length), ($ = M.firstChild) !== null; )
            j = M, M = $;
          for (; ; ) {
            if (M === e)
              break e;
            if (j === t && ++b === a && (g = v), j === o && ++k === c && (C = v), ($ = M.nextSibling) !== null)
              break;
            M = j, j = M.parentNode;
          }
          M = $;
        }
      return g === -1 || C === -1 ? null : {
        start: g,
        end: C
      };
    }
    function vk(e, t) {
      var a = e.ownerDocument || document, o = a && a.defaultView || window;
      if (o.getSelection) {
        var c = o.getSelection(), v = e.textContent.length, g = Math.min(t.start, v), C = t.end === void 0 ? g : Math.min(t.end, v);
        if (!c.extend && g > C) {
          var b = C;
          C = g, g = b;
        }
        var k = pn(e, g), M = pn(e, C);
        if (k && M) {
          if (c.rangeCount === 1 && c.anchorNode === k.node && c.anchorOffset === k.offset && c.focusNode === M.node && c.focusOffset === M.offset)
            return;
          var j = a.createRange();
          j.setStart(k.node, k.offset), c.removeAllRanges(), g > C ? (c.addRange(j), c.extend(M.node, M.offset)) : (j.setEnd(M.node, M.offset), c.addRange(j));
        }
      }
    }
    function WE(e) {
      return e && e.nodeType === Co;
    }
    function KE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : WE(e) ? !1 : WE(t) ? KE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function pk(e) {
      return e && e.ownerDocument && KE(e.ownerDocument.documentElement, e);
    }
    function hk(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch (t) {
        return !1;
      }
    }
    function GE() {
      for (var e = window, t = Zc(); t instanceof e.HTMLIFrameElement; ) {
        if (hk(t))
          e = t.contentWindow;
        else
          return t;
        t = Zc(e.document);
      }
      return t;
    }
    function y0(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function mk() {
      var e = GE();
      return {
        focusedElem: e,
        selectionRange: y0(e) ? yk(e) : null
      };
    }
    function gk(e) {
      var t = GE(), a = e.focusedElem, o = e.selectionRange;
      if (t !== a && pk(a)) {
        o !== null && y0(a) && Sk(a, o);
        for (var c = [], v = a; v = v.parentNode; )
          v.nodeType === wa && c.push({
            element: v,
            left: v.scrollLeft,
            top: v.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var g = 0; g < c.length; g++) {
          var C = c[g];
          C.element.scrollLeft = C.left, C.element.scrollTop = C.top;
        }
      }
    }
    function yk(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = bl(e), t || {
        start: 0,
        end: 0
      };
    }
    function Sk(e, t) {
      var a = t.start, o = t.end;
      o === void 0 && (o = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(o, e.value.length)) : vk(e, t);
    }
    var Ck = Ot && "documentMode" in document && document.documentMode <= 11;
    function bk() {
      Ze("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var fd = null, S0 = null, yp = null, C0 = !1;
    function Ek(e) {
      if ("selectionStart" in e && y0(e))
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
    function wk(e) {
      return e.window === e ? e.document : e.nodeType === Di ? e : e.ownerDocument;
    }
    function YE(e, t, a) {
      var o = wk(a);
      if (!(C0 || fd == null || fd !== Zc(o))) {
        var c = Ek(fd);
        if (!yp || !et(yp, c)) {
          yp = c;
          var v = ig(S0, "onSelect");
          if (v.length > 0) {
            var g = new ia("onSelect", "select", null, t, a);
            e.push({
              event: g,
              listeners: v
            }), g.target = fd;
          }
        }
      }
    }
    function xk(e, t, a, o, c, v, g) {
      var C = a ? md(a) : window;
      switch (t) {
        case "focusin":
          (vs(C) || C.contentEditable === "true") && (fd = C, S0 = a, yp = null);
          break;
        case "focusout":
          fd = null, S0 = null, yp = null;
          break;
        case "mousedown":
          C0 = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          C0 = !1, YE(e, o, c);
          break;
        case "selectionchange":
          if (Ck)
            break;
        case "keydown":
        case "keyup":
          YE(e, o, c);
      }
    }
    function ng(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var dd = {
      animationend: ng("Animation", "AnimationEnd"),
      animationiteration: ng("Animation", "AnimationIteration"),
      animationstart: ng("Animation", "AnimationStart"),
      transitionend: ng("Transition", "TransitionEnd")
    }, b0 = {}, QE = {};
    Ot && (QE = document.createElement("div").style, "AnimationEvent" in window || (delete dd.animationend.animation, delete dd.animationiteration.animation, delete dd.animationstart.animation), "TransitionEvent" in window || delete dd.transitionend.transition);
    function rg(e) {
      if (b0[e])
        return b0[e];
      if (!dd[e])
        return e;
      var t = dd[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in QE)
          return b0[e] = t[a];
      return e;
    }
    var XE = rg("animationend"), qE = rg("animationiteration"), ZE = rg("animationstart"), JE = rg("transitionend"), e2 = /* @__PURE__ */ new Map(), t2 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ps(e, t) {
      e2.set(e, t), Ze(t, [e]);
    }
    function Tk() {
      for (var e = 0; e < t2.length; e++) {
        var t = t2[e], a = t.toLowerCase(), o = t[0].toUpperCase() + t.slice(1);
        ps(a, "on" + o);
      }
      ps(XE, "onAnimationEnd"), ps(qE, "onAnimationIteration"), ps(ZE, "onAnimationStart"), ps("dblclick", "onDoubleClick"), ps("focusin", "onFocus"), ps("focusout", "onBlur"), ps(JE, "onTransitionEnd");
    }
    function Rk(e, t, a, o, c, v, g) {
      var C = e2.get(t);
      if (C !== void 0) {
        var b = ia, k = t;
        switch (t) {
          case "keypress":
            if (lu(o) === 0)
              return;
          case "keydown":
          case "keyup":
            b = c0;
            break;
          case "focusin":
            k = "focus", b = td;
            break;
          case "focusout":
            k = "blur", b = td;
            break;
          case "beforeblur":
          case "afterblur":
            b = td;
            break;
          case "click":
            if (o.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            b = Sl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = su;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = yi;
            break;
          case XE:
          case qE:
          case ZE:
            b = nd;
            break;
          case JE:
            b = d0;
            break;
          case "scroll":
            b = lp;
            break;
          case "wheel":
            b = ad;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = o0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = dp;
            break;
        }
        var M = (v & Fl) !== 0;
        {
          var j = !M && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", $ = Ok(a, C, o.type, M, j);
          if ($.length > 0) {
            var Z = new b(C, k, null, o, c);
            e.push({
              event: Z,
              listeners: $
            });
          }
        }
      }
    }
    Tk(), X(), cd(), bk(), Zm();
    function kk(e, t, a, o, c, v, g) {
      Rk(e, t, a, o, c, v);
      var C = (v & G1) === 0;
      C && (xe(e, t, a, o, c), F(e, t, a, o, c), xk(e, t, a, o, c), sd(e, t, a, o, c));
    }
    var Sp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], E0 = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Sp));
    function n2(e, t, a) {
      var o = e.type || "unknown-event";
      e.currentTarget = a, xo(o, t, void 0, e), e.currentTarget = null;
    }
    function _k(e, t, a) {
      var o;
      if (a)
        for (var c = t.length - 1; c >= 0; c--) {
          var v = t[c], g = v.instance, C = v.currentTarget, b = v.listener;
          if (g !== o && e.isPropagationStopped())
            return;
          n2(e, b, C), o = g;
        }
      else
        for (var k = 0; k < t.length; k++) {
          var M = t[k], j = M.instance, $ = M.currentTarget, Z = M.listener;
          if (j !== o && e.isPropagationStopped())
            return;
          n2(e, Z, $), o = j;
        }
    }
    function r2(e, t) {
      for (var a = (t & Fl) !== 0, o = 0; o < e.length; o++) {
        var c = e[o], v = c.event, g = c.listeners;
        _k(v, g, a);
      }
      Mv();
    }
    function Mk(e, t, a, o, c) {
      var v = df(a), g = [];
      kk(g, e, o, a, v, t), r2(g, t);
    }
    function Qn(e, t) {
      E0.has(e) || h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, o = iM(t), c = Lk(e, a);
      o.has(c) || (a2(t, e, Qs, a), o.add(c));
    }
    function w0(e, t, a) {
      E0.has(e) && !t && h('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var o = 0;
      t && (o |= Fl), a2(a, e, o, t);
    }
    var ag = "_reactListening" + Math.random().toString(36).slice(2);
    function Cp(e) {
      if (!e[ag]) {
        e[ag] = !0, st.forEach(function(a) {
          a !== "selectionchange" && (E0.has(a) || w0(a, !1, e), w0(a, !0, e));
        });
        var t = e.nodeType === Di ? e : e.ownerDocument;
        t !== null && (t[ag] || (t[ag] = !0, w0("selectionchange", !1, t)));
      }
    }
    function a2(e, t, a, o, c) {
      var v = os(e, t, a), g = void 0;
      ec && (t === "touchstart" || t === "touchmove" || t === "wheel") && (g = !0), e = e, o ? g !== void 0 ? Do(e, t, v, g) : us(e, t, v) : g !== void 0 ? Zf(e, t, v, g) : op(e, t, v);
    }
    function i2(e, t) {
      return e === t || e.nodeType === pr && e.parentNode === t;
    }
    function x0(e, t, a, o, c) {
      var v = o;
      if (!(t & Eo) && !(t & Qs)) {
        var g = c;
        if (o !== null) {
          var C = o;
          e:
            for (; ; ) {
              if (C === null)
                return;
              var b = C.tag;
              if (b === _ || b === N) {
                var k = C.stateNode.containerInfo;
                if (i2(k, g))
                  break;
                if (b === N)
                  for (var M = C.return; M !== null; ) {
                    var j = M.tag;
                    if (j === _ || j === N) {
                      var $ = M.stateNode.containerInfo;
                      if (i2($, g))
                        return;
                    }
                    M = M.return;
                  }
                for (; k !== null; ) {
                  var Z = kc(k);
                  if (Z === null)
                    return;
                  var J = Z.tag;
                  if (J === L || J === z) {
                    C = v = Z;
                    continue e;
                  }
                  k = k.parentNode;
                }
              }
              C = C.return;
            }
        }
      }
      Tv(function() {
        return Mk(e, t, a, v);
      });
    }
    function bp(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Ok(e, t, a, o, c, v) {
      for (var g = t !== null ? t + "Capture" : null, C = o ? g : t, b = [], k = e, M = null; k !== null; ) {
        var j = k, $ = j.stateNode, Z = j.tag;
        if (Z === L && $ !== null && (M = $, C !== null)) {
          var J = Vl(k, C);
          J != null && b.push(bp(k, J, M));
        }
        if (c)
          break;
        k = k.return;
      }
      return b;
    }
    function ig(e, t) {
      for (var a = t + "Capture", o = [], c = e; c !== null; ) {
        var v = c, g = v.stateNode, C = v.tag;
        if (C === L && g !== null) {
          var b = g, k = Vl(c, a);
          k != null && o.unshift(bp(c, k, b));
          var M = Vl(c, t);
          M != null && o.push(bp(c, M, b));
        }
        c = c.return;
      }
      return o;
    }
    function vd(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== L);
      return e || null;
    }
    function Nk(e, t) {
      for (var a = e, o = t, c = 0, v = a; v; v = vd(v))
        c++;
      for (var g = 0, C = o; C; C = vd(C))
        g++;
      for (; c - g > 0; )
        a = vd(a), c--;
      for (; g - c > 0; )
        o = vd(o), g--;
      for (var b = c; b--; ) {
        if (a === o || o !== null && a === o.alternate)
          return a;
        a = vd(a), o = vd(o);
      }
      return null;
    }
    function o2(e, t, a, o, c) {
      for (var v = t._reactName, g = [], C = a; C !== null && C !== o; ) {
        var b = C, k = b.alternate, M = b.stateNode, j = b.tag;
        if (k !== null && k === o)
          break;
        if (j === L && M !== null) {
          var $ = M;
          if (c) {
            var Z = Vl(C, v);
            Z != null && g.unshift(bp(C, Z, $));
          } else if (!c) {
            var J = Vl(C, v);
            J != null && g.push(bp(C, J, $));
          }
        }
        C = C.return;
      }
      g.length !== 0 && e.push({
        event: t,
        listeners: g
      });
    }
    function Dk(e, t, a, o, c) {
      var v = o && c ? Nk(o, c) : null;
      o !== null && o2(e, t, o, v, !1), c !== null && a !== null && o2(e, a, c, v, !0);
    }
    function Lk(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Si = !1, Ep = "dangerouslySetInnerHTML", og = "suppressContentEditableWarning", hs = "suppressHydrationWarning", l2 = "autoFocus", Tc = "children", Rc = "style", lg = "__html", T0, ug, wp, u2, sg, s2, c2;
    T0 = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, ug = function(e, t) {
      ff(e, t), Cv(e, t), gm(e, t, {
        registrationNameDependencies: Mt,
        possibleRegistrationNames: Gt
      });
    }, s2 = Ot && !document.documentMode, wp = function(e, t, a) {
      if (!Si) {
        var o = cg(a), c = cg(t);
        c !== o && (Si = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(c), JSON.stringify(o)));
      }
    }, u2 = function(e) {
      if (!Si) {
        Si = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), h("Extra attributes from the server: %s", t);
      }
    }, sg = function(e, t) {
      t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, c2 = function(e, t) {
      var a = e.namespaceURI === So ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Ak = /\r\n?/g, zk = /\u0000|\uFFFD/g;
    function cg(e) {
      ln(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Ak, `
`).replace(zk, "");
    }
    function fg(e, t, a, o) {
      var c = cg(t), v = cg(e);
      if (v !== c && (o && (Si || (Si = !0, h('Text content did not match. Server: "%s" Client: "%s"', v, c))), a && Ne))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function f2(e) {
      return e.nodeType === Di ? e : e.ownerDocument;
    }
    function Pk() {
    }
    function dg(e) {
      e.onclick = Pk;
    }
    function Hk(e, t, a, o, c) {
      for (var v in o)
        if (o.hasOwnProperty(v)) {
          var g = o[v];
          if (v === Rc)
            g && Object.freeze(g), lm(t, g);
          else if (v === Ep) {
            var C = g ? g[lg] : void 0;
            C != null && Xh(t, C);
          } else if (v === Tc)
            if (typeof g == "string") {
              var b = e !== "textarea" || g !== "";
              b && lf(t, g);
            } else
              typeof g == "number" && lf(t, "" + g);
          else
            v === og || v === hs || v === l2 || (Mt.hasOwnProperty(v) ? g != null && (typeof g != "function" && sg(v, g), v === "onScroll" && Qn("scroll", t)) : g != null && On(t, v, g, c));
        }
    }
    function Uk(e, t, a, o) {
      for (var c = 0; c < t.length; c += 2) {
        var v = t[c], g = t[c + 1];
        v === Rc ? lm(e, g) : v === Ep ? Xh(e, g) : v === Tc ? lf(e, g) : On(e, v, g, o);
      }
    }
    function Ik(e, t, a, o) {
      var c, v = f2(a), g, C = o;
      if (C === So && (C = af(e)), C === So) {
        if (c = bo(e, t), !c && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var b = v.createElement("div");
          b.innerHTML = "<script><\/script>";
          var k = b.firstChild;
          g = b.removeChild(k);
        } else if (typeof t.is == "string")
          g = v.createElement(e, {
            is: t.is
          });
        else if (g = v.createElement(e), e === "select") {
          var M = g;
          t.multiple ? M.multiple = !0 : t.size && (M.size = t.size);
        }
      } else
        g = v.createElementNS(C, e);
      return C === So && !c && Object.prototype.toString.call(g) === "[object HTMLUnknownElement]" && !Se.call(T0, e) && (T0[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), g;
    }
    function $k(e, t) {
      return f2(t).createTextNode(e);
    }
    function Fk(e, t, a, o) {
      var c = bo(t, a);
      ug(t, a);
      var v;
      switch (t) {
        case "dialog":
          Qn("cancel", e), Qn("close", e), v = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          Qn("load", e), v = a;
          break;
        case "video":
        case "audio":
          for (var g = 0; g < Sp.length; g++)
            Qn(Sp[g], e);
          v = a;
          break;
        case "source":
          Qn("error", e), v = a;
          break;
        case "img":
        case "image":
        case "link":
          Qn("error", e), Qn("load", e), v = a;
          break;
        case "details":
          Qn("toggle", e), v = a;
          break;
        case "input":
          Vs(e, a), v = js(e, a), Qn("invalid", e);
          break;
        case "option":
          nf(e, a), v = a;
          break;
        case "select":
          Kh(e, a), v = sv(e, a), Qn("invalid", e);
          break;
        case "textarea":
          Gh(e, a), v = fv(e, a), Qn("invalid", e);
          break;
        default:
          v = a;
      }
      switch (sf(t, v), Hk(t, e, o, v, c), t) {
        case "input":
          Ul(e), Bs(e, a, !1);
          break;
        case "textarea":
          Ul(e), Qh(e);
          break;
        case "option":
          uv(e, a);
          break;
        case "select":
          P1(e, a);
          break;
        default:
          typeof v.onClick == "function" && dg(e);
          break;
      }
    }
    function jk(e, t, a, o, c) {
      ug(t, o);
      var v = null, g, C;
      switch (t) {
        case "input":
          g = js(e, a), C = js(e, o), v = [];
          break;
        case "select":
          g = sv(e, a), C = sv(e, o), v = [];
          break;
        case "textarea":
          g = fv(e, a), C = fv(e, o), v = [];
          break;
        default:
          g = a, C = o, typeof g.onClick != "function" && typeof C.onClick == "function" && dg(e);
          break;
      }
      sf(t, C);
      var b, k, M = null;
      for (b in g)
        if (!(C.hasOwnProperty(b) || !g.hasOwnProperty(b) || g[b] == null))
          if (b === Rc) {
            var j = g[b];
            for (k in j)
              j.hasOwnProperty(k) && (M || (M = {}), M[k] = "");
          } else
            b === Ep || b === Tc || b === og || b === hs || b === l2 || (Mt.hasOwnProperty(b) ? v || (v = []) : (v = v || []).push(b, null));
      for (b in C) {
        var $ = C[b], Z = g != null ? g[b] : void 0;
        if (!(!C.hasOwnProperty(b) || $ === Z || $ == null && Z == null))
          if (b === Rc)
            if ($ && Object.freeze($), Z) {
              for (k in Z)
                Z.hasOwnProperty(k) && (!$ || !$.hasOwnProperty(k)) && (M || (M = {}), M[k] = "");
              for (k in $)
                $.hasOwnProperty(k) && Z[k] !== $[k] && (M || (M = {}), M[k] = $[k]);
            } else
              M || (v || (v = []), v.push(b, M)), M = $;
          else if (b === Ep) {
            var J = $ ? $[lg] : void 0, ie = Z ? Z[lg] : void 0;
            J != null && ie !== J && (v = v || []).push(b, J);
          } else
            b === Tc ? (typeof $ == "string" || typeof $ == "number") && (v = v || []).push(b, "" + $) : b === og || b === hs || (Mt.hasOwnProperty(b) ? ($ != null && (typeof $ != "function" && sg(b, $), b === "onScroll" && Qn("scroll", e)), !v && Z !== $ && (v = [])) : (v = v || []).push(b, $));
      }
      return M && (Gs(M, C[Rc]), (v = v || []).push(Rc, M)), v;
    }
    function Vk(e, t, a, o, c) {
      a === "input" && c.type === "radio" && c.name != null && lv(e, c);
      var v = bo(a, o), g = bo(a, c);
      switch (Uk(e, t, v, g), a) {
        case "input":
          Hu(e, c);
          break;
        case "textarea":
          Yh(e, c);
          break;
        case "select":
          H1(e, c);
          break;
      }
    }
    function Bk(e) {
      {
        var t = e.toLowerCase();
        return cf.hasOwnProperty(t) && cf[t] || null;
      }
    }
    function Wk(e, t, a, o, c, v, g) {
      var C, b;
      switch (C = bo(t, a), ug(t, a), t) {
        case "dialog":
          Qn("cancel", e), Qn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Qn("load", e);
          break;
        case "video":
        case "audio":
          for (var k = 0; k < Sp.length; k++)
            Qn(Sp[k], e);
          break;
        case "source":
          Qn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Qn("error", e), Qn("load", e);
          break;
        case "details":
          Qn("toggle", e);
          break;
        case "input":
          Vs(e, a), Qn("invalid", e);
          break;
        case "option":
          nf(e, a);
          break;
        case "select":
          Kh(e, a), Qn("invalid", e);
          break;
        case "textarea":
          Gh(e, a), Qn("invalid", e);
          break;
      }
      sf(t, a);
      {
        b = /* @__PURE__ */ new Set();
        for (var M = e.attributes, j = 0; j < M.length; j++) {
          var $ = M[j].name.toLowerCase();
          switch ($) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              b.add(M[j].name);
          }
        }
      }
      var Z = null;
      for (var J in a)
        if (a.hasOwnProperty(J)) {
          var ie = a[J];
          if (J === Tc)
            typeof ie == "string" ? e.textContent !== ie && (a[hs] !== !0 && fg(e.textContent, ie, v, g), Z = [Tc, ie]) : typeof ie == "number" && e.textContent !== "" + ie && (a[hs] !== !0 && fg(e.textContent, ie, v, g), Z = [Tc, "" + ie]);
          else if (Mt.hasOwnProperty(J))
            ie != null && (typeof ie != "function" && sg(J, ie), J === "onScroll" && Qn("scroll", e));
          else if (g && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof C == "boolean") {
            var Ie = void 0, at = C && ft ? null : Zt(J);
            if (a[hs] !== !0) {
              if (!(J === og || J === hs || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              J === "value" || J === "checked" || J === "selected")) {
                if (J === Ep) {
                  var qe = e.innerHTML, on = ie ? ie[lg] : void 0;
                  if (on != null) {
                    var Qt = c2(e, on);
                    Qt !== qe && wp(J, qe, Qt);
                  }
                } else if (J === Rc) {
                  if (b.delete(J), s2) {
                    var Y = W1(ie);
                    Ie = e.getAttribute("style"), Y !== Ie && wp(J, Ie, Y);
                  }
                } else if (C && !ft)
                  b.delete(J.toLowerCase()), Ie = nr(e, J, ie), ie !== Ie && wp(J, Ie, ie);
                else if (!ht(J, at, C) && !Ht(J, ie, at, C)) {
                  var oe = !1;
                  if (at !== null)
                    b.delete(at.attributeName), Ie = En(e, J, ie, at);
                  else {
                    var Q = o;
                    if (Q === So && (Q = af(t)), Q === So)
                      b.delete(J.toLowerCase());
                    else {
                      var ye = Bk(J);
                      ye !== null && ye !== J && (oe = !0, b.delete(ye)), b.delete(J);
                    }
                    Ie = nr(e, J, ie);
                  }
                  var $e = ft;
                  !$e && ie !== Ie && !oe && wp(J, Ie, ie);
                }
              }
            }
          }
        }
      switch (g && // $FlowFixMe - Should be inferred as not undefined.
      b.size > 0 && a[hs] !== !0 && u2(b), t) {
        case "input":
          Ul(e), Bs(e, a, !0);
          break;
        case "textarea":
          Ul(e), Qh(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && dg(e);
          break;
      }
      return Z;
    }
    function Kk(e, t, a) {
      var o = e.nodeValue !== t;
      return o;
    }
    function R0(e, t) {
      {
        if (Si)
          return;
        Si = !0, h("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function k0(e, t) {
      {
        if (Si)
          return;
        Si = !0, h('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function _0(e, t, a) {
      {
        if (Si)
          return;
        Si = !0, h("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function M0(e, t) {
      {
        if (t === "" || Si)
          return;
        Si = !0, h('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Gk(e, t, a) {
      switch (t) {
        case "input":
          jh(e, a);
          return;
        case "textarea":
          dv(e, a);
          return;
        case "select":
          U1(e, a);
          return;
      }
    }
    var xp = function() {
    }, Tp = function() {
    };
    {
      var Yk = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], d2 = [
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
      ], Qk = d2.concat(["button"]), Xk = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], v2 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Tp = function(e, t) {
        var a = Nt({}, e || v2), o = {
          tag: t
        };
        return d2.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Qk.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Yk.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = o, t === "form" && (a.formTag = o), t === "a" && (a.aTagInScope = o), t === "button" && (a.buttonTagInScope = o), t === "nobr" && (a.nobrTagInScope = o), t === "p" && (a.pTagInButtonScope = o), t === "li" && (a.listItemTagAutoclosing = o), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = o), a;
      };
      var qk = function(e, t) {
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
            return Xk.indexOf(t) === -1;
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
      }, Zk = function(e, t) {
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
      }, p2 = {};
      xp = function(e, t, a) {
        a = a || v2;
        var o = a.current, c = o && o.tag;
        t != null && (e != null && h("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var v = qk(e, c) ? null : o, g = v ? null : Zk(e, a), C = v || g;
        if (C) {
          var b = C.tag, k = !!v + "|" + e + "|" + b;
          if (!p2[k]) {
            p2[k] = !0;
            var M = e, j = "";
            if (e === "#text" ? /\S/.test(t) ? M = "Text nodes" : (M = "Whitespace text nodes", j = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : M = "<" + e + ">", v) {
              var $ = "";
              b === "table" && e === "tr" && ($ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", M, b, j, $);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", M, b);
          }
        }
      };
    }
    var vg = "suppressHydrationWarning", pg = "$", hg = "/$", Rp = "$?", kp = "$!", Jk = "style", O0 = null, N0 = null;
    function e_(e) {
      var t, a, o = e.nodeType;
      switch (o) {
        case Di:
        case Il: {
          t = o === Di ? "#document" : "#fragment";
          var c = e.documentElement;
          a = c ? c.namespaceURI : pv(null, "");
          break;
        }
        default: {
          var v = o === pr ? e.parentNode : e, g = v.namespaceURI || null;
          t = v.tagName, a = pv(g, t);
          break;
        }
      }
      {
        var C = t.toLowerCase(), b = Tp(null, C);
        return {
          namespace: a,
          ancestorInfo: b
        };
      }
    }
    function t_(e, t, a) {
      {
        var o = e, c = pv(o.namespace, t), v = Tp(o.ancestorInfo, t);
        return {
          namespace: c,
          ancestorInfo: v
        };
      }
    }
    function iP(e) {
      return e;
    }
    function n_(e) {
      O0 = Za(), N0 = mk();
      var t = null;
      return Lr(!1), t;
    }
    function r_(e) {
      gk(N0), Lr(O0), O0 = null, N0 = null;
    }
    function a_(e, t, a, o, c) {
      var v;
      {
        var g = o;
        if (xp(e, null, g.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var C = "" + t.children, b = Tp(g.ancestorInfo, e);
          xp(null, C, b);
        }
        v = g.namespace;
      }
      var k = Ik(e, t, a, v);
      return Op(c, k), I0(k, t), k;
    }
    function i_(e, t) {
      e.appendChild(t);
    }
    function o_(e, t, a, o, c) {
      switch (Fk(e, t, a, o), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function l_(e, t, a, o, c, v) {
      {
        var g = v;
        if (typeof o.children != typeof a.children && (typeof o.children == "string" || typeof o.children == "number")) {
          var C = "" + o.children, b = Tp(g.ancestorInfo, t);
          xp(null, C, b);
        }
      }
      return jk(e, t, a, o);
    }
    function D0(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function u_(e, t, a, o) {
      {
        var c = a;
        xp(null, e, c.ancestorInfo);
      }
      var v = $k(e, t);
      return Op(o, v), v;
    }
    function s_() {
      var e = window.event;
      return e === void 0 ? Mo : sa(e.type);
    }
    var L0 = typeof setTimeout == "function" ? setTimeout : void 0, c_ = typeof clearTimeout == "function" ? clearTimeout : void 0, A0 = -1, h2 = typeof Promise == "function" ? Promise : void 0, f_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof h2 != "undefined" ? function(e) {
      return h2.resolve(null).then(e).catch(d_);
    } : L0;
    function d_(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function v_(e, t, a, o) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function p_(e, t, a, o, c, v) {
      Vk(e, t, a, o, c), I0(e, c);
    }
    function m2(e) {
      lf(e, "");
    }
    function h_(e, t, a) {
      e.nodeValue = a;
    }
    function m_(e, t) {
      e.appendChild(t);
    }
    function g_(e, t) {
      var a;
      e.nodeType === pr ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var o = e._reactRootContainer;
      o == null && a.onclick === null && dg(a);
    }
    function y_(e, t, a) {
      e.insertBefore(t, a);
    }
    function S_(e, t, a) {
      e.nodeType === pr ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function C_(e, t) {
      e.removeChild(t);
    }
    function b_(e, t) {
      e.nodeType === pr ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function z0(e, t) {
      var a = t, o = 0;
      do {
        var c = a.nextSibling;
        if (e.removeChild(a), c && c.nodeType === pr) {
          var v = c.data;
          if (v === hg)
            if (o === 0) {
              e.removeChild(c), Yt(t);
              return;
            } else
              o--;
          else
            (v === pg || v === Rp || v === kp) && o++;
        }
        a = c;
      } while (a);
      Yt(t);
    }
    function E_(e, t) {
      e.nodeType === pr ? z0(e.parentNode, t) : e.nodeType === wa && z0(e, t), Yt(e);
    }
    function w_(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function x_(e) {
      e.nodeValue = "";
    }
    function T_(e, t) {
      e = e;
      var a = t[Jk], o = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = uf("display", o);
    }
    function R_(e, t) {
      e.nodeValue = t;
    }
    function k_(e) {
      e.nodeType === wa ? e.textContent = "" : e.nodeType === Di && e.documentElement && e.removeChild(e.documentElement);
    }
    function __(e, t, a) {
      return e.nodeType !== wa || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function M_(e, t) {
      return t === "" || e.nodeType !== Co ? null : e;
    }
    function O_(e) {
      return e.nodeType !== pr ? null : e;
    }
    function g2(e) {
      return e.data === Rp;
    }
    function P0(e) {
      return e.data === kp;
    }
    function N_(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, o, c;
      return t && (a = t.dgst, o = t.msg, c = t.stck), {
        message: o,
        digest: a,
        stack: c
      };
    }
    function D_(e, t) {
      e._reactRetry = t;
    }
    function mg(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === wa || t === Co)
          break;
        if (t === pr) {
          var a = e.data;
          if (a === pg || a === kp || a === Rp)
            break;
          if (a === hg)
            return null;
        }
      }
      return e;
    }
    function _p(e) {
      return mg(e.nextSibling);
    }
    function L_(e) {
      return mg(e.firstChild);
    }
    function A_(e) {
      return mg(e.firstChild);
    }
    function z_(e) {
      return mg(e.nextSibling);
    }
    function P_(e, t, a, o, c, v, g) {
      Op(v, e), I0(e, a);
      var C;
      {
        var b = c;
        C = b.namespace;
      }
      var k = (v.mode & Bt) !== ot;
      return Wk(e, t, a, C, o, k, g);
    }
    function H_(e, t, a, o) {
      return Op(a, e), a.mode & Bt, Kk(e, t);
    }
    function U_(e, t) {
      Op(t, e);
    }
    function I_(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === pr) {
          var o = t.data;
          if (o === hg) {
            if (a === 0)
              return _p(t);
            a--;
          } else
            (o === pg || o === kp || o === Rp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function y2(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === pr) {
          var o = t.data;
          if (o === pg || o === kp || o === Rp) {
            if (a === 0)
              return t;
            a--;
          } else
            o === hg && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function $_(e) {
      Yt(e);
    }
    function F_(e) {
      Yt(e);
    }
    function j_(e) {
      return e !== "head" && e !== "body";
    }
    function V_(e, t, a, o) {
      var c = !0;
      fg(t.nodeValue, a, o, c);
    }
    function B_(e, t, a, o, c, v) {
      if (t[vg] !== !0) {
        var g = !0;
        fg(o.nodeValue, c, v, g);
      }
    }
    function W_(e, t) {
      t.nodeType === wa ? R0(e, t) : t.nodeType === pr || k0(e, t);
    }
    function K_(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === wa ? R0(a, t) : t.nodeType === pr || k0(a, t));
      }
    }
    function G_(e, t, a, o, c) {
      (c || t[vg] !== !0) && (o.nodeType === wa ? R0(a, o) : o.nodeType === pr || k0(a, o));
    }
    function Y_(e, t, a) {
      _0(e, t);
    }
    function Q_(e, t) {
      M0(e, t);
    }
    function X_(e, t, a) {
      {
        var o = e.parentNode;
        o !== null && _0(o, t);
      }
    }
    function q_(e, t) {
      {
        var a = e.parentNode;
        a !== null && M0(a, t);
      }
    }
    function Z_(e, t, a, o, c, v) {
      (v || t[vg] !== !0) && _0(a, o);
    }
    function J_(e, t, a, o, c) {
      (c || t[vg] !== !0) && M0(a, o);
    }
    function eM(e) {
      h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function tM(e) {
      Cp(e);
    }
    var pd = Math.random().toString(36).slice(2), hd = "__reactFiber$" + pd, H0 = "__reactProps$" + pd, Mp = "__reactContainer$" + pd, U0 = "__reactEvents$" + pd, nM = "__reactListeners$" + pd, rM = "__reactHandles$" + pd;
    function aM(e) {
      delete e[hd], delete e[H0], delete e[U0], delete e[nM], delete e[rM];
    }
    function Op(e, t) {
      t[hd] = e;
    }
    function gg(e, t) {
      t[Mp] = e;
    }
    function S2(e) {
      e[Mp] = null;
    }
    function Np(e) {
      return !!e[Mp];
    }
    function kc(e) {
      var t = e[hd];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Mp] || a[hd], t) {
          var o = t.alternate;
          if (t.child !== null || o !== null && o.child !== null)
            for (var c = y2(e); c !== null; ) {
              var v = c[hd];
              if (v)
                return v;
              c = y2(c);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ms(e) {
      var t = e[hd] || e[Mp];
      return t && (t.tag === L || t.tag === z || t.tag === W || t.tag === _) ? t : null;
    }
    function md(e) {
      if (e.tag === L || e.tag === z)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function yg(e) {
      return e[H0] || null;
    }
    function I0(e, t) {
      e[H0] = t;
    }
    function iM(e) {
      var t = e[U0];
      return t === void 0 && (t = e[U0] = /* @__PURE__ */ new Set()), t;
    }
    var C2 = {}, b2 = u.ReactDebugCurrentFrame;
    function Sg(e) {
      if (e) {
        var t = e._owner, a = Wa(e.type, e._source, t ? t.type : null);
        b2.setExtraStackFrame(a);
      } else
        b2.setExtraStackFrame(null);
    }
    function Ao(e, t, a, o, c) {
      {
        var v = Function.call.bind(Se);
        for (var g in e)
          if (v(e, g)) {
            var C = void 0;
            try {
              if (typeof e[g] != "function") {
                var b = Error((o || "React class") + ": " + a + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              C = e[g](t, g, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              C = k;
            }
            C && !(C instanceof Error) && (Sg(c), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, g, typeof C), Sg(null)), C instanceof Error && !(C.message in C2) && (C2[C.message] = !0, Sg(c), h("Failed %s type: %s", a, C.message), Sg(null));
          }
      }
    }
    var $0 = [], Cg;
    Cg = [];
    var vu = -1;
    function gs(e) {
      return {
        current: e
      };
    }
    function Da(e, t) {
      if (vu < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== Cg[vu] && h("Unexpected Fiber popped."), e.current = $0[vu], $0[vu] = null, Cg[vu] = null, vu--;
    }
    function La(e, t, a) {
      vu++, $0[vu] = e.current, Cg[vu] = a, e.current = t;
    }
    var F0;
    F0 = {};
    var Hi = {};
    Object.freeze(Hi);
    var pu = gs(Hi), El = gs(!1), j0 = Hi;
    function gd(e, t, a) {
      return a && wl(t) ? j0 : pu.current;
    }
    function E2(e, t, a) {
      {
        var o = e.stateNode;
        o.__reactInternalMemoizedUnmaskedChildContext = t, o.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function yd(e, t) {
      {
        var a = e.type, o = a.contextTypes;
        if (!o)
          return Hi;
        var c = e.stateNode;
        if (c && c.__reactInternalMemoizedUnmaskedChildContext === t)
          return c.__reactInternalMemoizedMaskedChildContext;
        var v = {};
        for (var g in o)
          v[g] = t[g];
        {
          var C = ct(e) || "Unknown";
          Ao(o, v, "context", C);
        }
        return c && E2(e, t, v), v;
      }
    }
    function bg() {
      return El.current;
    }
    function wl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Eg(e) {
      Da(El, e), Da(pu, e);
    }
    function V0(e) {
      Da(El, e), Da(pu, e);
    }
    function w2(e, t, a) {
      {
        if (pu.current !== Hi)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        La(pu, t, e), La(El, a, e);
      }
    }
    function x2(e, t, a) {
      {
        var o = e.stateNode, c = t.childContextTypes;
        if (typeof o.getChildContext != "function") {
          {
            var v = ct(e) || "Unknown";
            F0[v] || (F0[v] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", v, v));
          }
          return a;
        }
        var g = o.getChildContext();
        for (var C in g)
          if (!(C in c))
            throw new Error((ct(e) || "Unknown") + '.getChildContext(): key "' + C + '" is not defined in childContextTypes.');
        {
          var b = ct(e) || "Unknown";
          Ao(c, g, "child context", b);
        }
        return Nt({}, a, g);
      }
    }
    function wg(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Hi;
        return j0 = pu.current, La(pu, a, e), La(El, El.current, e), !0;
      }
    }
    function T2(e, t, a) {
      {
        var o = e.stateNode;
        if (!o)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var c = x2(e, t, j0);
          o.__reactInternalMemoizedMergedChildContext = c, Da(El, e), Da(pu, e), La(pu, c, e), La(El, a, e);
        } else
          Da(El, e), La(El, a, e);
      }
    }
    function oM(e) {
      {
        if (!Av(e) || e.tag !== R)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case _:
              return t.stateNode.context;
            case R: {
              var a = t.type;
              if (wl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var ys = 0, xg = 1, hu = null, B0 = !1, W0 = !1;
    function R2(e) {
      hu === null ? hu = [e] : hu.push(e);
    }
    function lM(e) {
      B0 = !0, R2(e);
    }
    function k2() {
      B0 && Ss();
    }
    function Ss() {
      if (!W0 && hu !== null) {
        W0 = !0;
        var e = 0, t = hi();
        try {
          var a = !0, o = hu;
          for (br(ea); e < o.length; e++) {
            var c = o[e];
            do
              c = c(a);
            while (c !== null);
          }
          hu = null, B0 = !1;
        } catch (v) {
          throw hu !== null && (hu = hu.slice(e + 1)), Sf(bf, Ss), v;
        } finally {
          br(t), W0 = !1;
        }
      }
      return null;
    }
    var Sd = [], Cd = 0, Tg = null, Rg = 0, Ji = [], eo = 0, _c = null, mu = 1, gu = "";
    function uM(e) {
      return Oc(), (e.flags & Nv) !== nt;
    }
    function sM(e) {
      return Oc(), Rg;
    }
    function cM() {
      var e = gu, t = mu, a = t & ~fM(t);
      return a.toString(32) + e;
    }
    function Mc(e, t) {
      Oc(), Sd[Cd++] = Rg, Sd[Cd++] = Tg, Tg = e, Rg = t;
    }
    function _2(e, t, a) {
      Oc(), Ji[eo++] = mu, Ji[eo++] = gu, Ji[eo++] = _c, _c = e;
      var o = mu, c = gu, v = kg(o) - 1, g = o & ~(1 << v), C = a + 1, b = kg(t) + v;
      if (b > 30) {
        var k = v - v % 5, M = (1 << k) - 1, j = (g & M).toString(32), $ = g >> k, Z = v - k, J = kg(t) + Z, ie = C << Z, Ie = ie | $, at = j + c;
        mu = 1 << J | Ie, gu = at;
      } else {
        var qe = C << v, on = qe | g, Qt = c;
        mu = 1 << b | on, gu = Qt;
      }
    }
    function K0(e) {
      Oc();
      var t = e.return;
      if (t !== null) {
        var a = 1, o = 0;
        Mc(e, a), _2(e, a, o);
      }
    }
    function kg(e) {
      return 32 - kf(e);
    }
    function fM(e) {
      return 1 << kg(e) - 1;
    }
    function G0(e) {
      for (; e === Tg; )
        Tg = Sd[--Cd], Sd[Cd] = null, Rg = Sd[--Cd], Sd[Cd] = null;
      for (; e === _c; )
        _c = Ji[--eo], Ji[eo] = null, gu = Ji[--eo], Ji[eo] = null, mu = Ji[--eo], Ji[eo] = null;
    }
    function dM() {
      return Oc(), _c !== null ? {
        id: mu,
        overflow: gu
      } : null;
    }
    function vM(e, t) {
      Oc(), Ji[eo++] = mu, Ji[eo++] = gu, Ji[eo++] = _c, mu = t.id, gu = t.overflow, _c = e;
    }
    function Oc() {
      fa() || h("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var ca = null, to = null, zo = !1, Nc = !1, Cs = null;
    function pM() {
      zo && h("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function M2() {
      Nc = !0;
    }
    function hM() {
      return Nc;
    }
    function mM(e) {
      var t = e.stateNode.containerInfo;
      return to = A_(t), ca = e, zo = !0, Cs = null, Nc = !1, !0;
    }
    function gM(e, t, a) {
      return to = z_(t), ca = e, zo = !0, Cs = null, Nc = !1, a !== null && vM(e, a), !0;
    }
    function O2(e, t) {
      switch (e.tag) {
        case _: {
          W_(e.stateNode.containerInfo, t);
          break;
        }
        case L: {
          var a = (e.mode & Bt) !== ot;
          G_(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case W: {
          var o = e.memoizedState;
          o.dehydrated !== null && K_(o.dehydrated, t);
          break;
        }
      }
    }
    function N2(e, t) {
      O2(e, t);
      var a = CO();
      a.stateNode = t, a.return = e;
      var o = e.deletions;
      o === null ? (e.deletions = [a], e.flags |= yn) : o.push(a);
    }
    function Y0(e, t) {
      {
        if (Nc)
          return;
        switch (e.tag) {
          case _: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case L:
                var o = t.type;
                t.pendingProps, Y_(a, o);
                break;
              case z:
                var c = t.pendingProps;
                Q_(a, c);
                break;
            }
            break;
          }
          case L: {
            var v = e.type, g = e.memoizedProps, C = e.stateNode;
            switch (t.tag) {
              case L: {
                var b = t.type, k = t.pendingProps, M = (e.mode & Bt) !== ot;
                Z_(
                  v,
                  g,
                  C,
                  b,
                  k,
                  // TODO: Delete this argument when we remove the legacy root API.
                  M
                );
                break;
              }
              case z: {
                var j = t.pendingProps, $ = (e.mode & Bt) !== ot;
                J_(
                  v,
                  g,
                  C,
                  j,
                  // TODO: Delete this argument when we remove the legacy root API.
                  $
                );
                break;
              }
            }
            break;
          }
          case W: {
            var Z = e.memoizedState, J = Z.dehydrated;
            if (J !== null)
              switch (t.tag) {
                case L:
                  var ie = t.type;
                  t.pendingProps, X_(J, ie);
                  break;
                case z:
                  var Ie = t.pendingProps;
                  q_(J, Ie);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function D2(e, t) {
      t.flags = t.flags & ~ci | Pn, Y0(e, t);
    }
    function L2(e, t) {
      switch (e.tag) {
        case L: {
          var a = e.type;
          e.pendingProps;
          var o = __(t, a);
          return o !== null ? (e.stateNode = o, ca = e, to = L_(o), !0) : !1;
        }
        case z: {
          var c = e.pendingProps, v = M_(t, c);
          return v !== null ? (e.stateNode = v, ca = e, to = null, !0) : !1;
        }
        case W: {
          var g = O_(t);
          if (g !== null) {
            var C = {
              dehydrated: g,
              treeContext: dM(),
              retryLane: Oa
            };
            e.memoizedState = C;
            var b = bO(g);
            return b.return = e, e.child = b, ca = e, to = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Q0(e) {
      return (e.mode & Bt) !== ot && (e.flags & yt) === nt;
    }
    function X0(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function q0(e) {
      if (zo) {
        var t = to;
        if (!t) {
          Q0(e) && (Y0(ca, e), X0()), D2(ca, e), zo = !1, ca = e;
          return;
        }
        var a = t;
        if (!L2(e, t)) {
          Q0(e) && (Y0(ca, e), X0()), t = _p(a);
          var o = ca;
          if (!t || !L2(e, t)) {
            D2(ca, e), zo = !1, ca = e;
            return;
          }
          N2(o, a);
        }
      }
    }
    function yM(e, t, a) {
      var o = e.stateNode, c = !Nc, v = P_(o, e.type, e.memoizedProps, t, a, e, c);
      return e.updateQueue = v, v !== null;
    }
    function SM(e) {
      var t = e.stateNode, a = e.memoizedProps, o = H_(t, a, e);
      if (o) {
        var c = ca;
        if (c !== null)
          switch (c.tag) {
            case _: {
              var v = c.stateNode.containerInfo, g = (c.mode & Bt) !== ot;
              V_(
                v,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
            case L: {
              var C = c.type, b = c.memoizedProps, k = c.stateNode, M = (c.mode & Bt) !== ot;
              B_(
                C,
                b,
                k,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                M
              );
              break;
            }
          }
      }
      return o;
    }
    function CM(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      U_(a, e);
    }
    function bM(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return I_(a);
    }
    function A2(e) {
      for (var t = e.return; t !== null && t.tag !== L && t.tag !== _ && t.tag !== W; )
        t = t.return;
      ca = t;
    }
    function _g(e) {
      if (e !== ca)
        return !1;
      if (!zo)
        return A2(e), zo = !0, !1;
      if (e.tag !== _ && (e.tag !== L || j_(e.type) && !D0(e.type, e.memoizedProps))) {
        var t = to;
        if (t)
          if (Q0(e))
            z2(e), X0();
          else
            for (; t; )
              N2(e, t), t = _p(t);
      }
      return A2(e), e.tag === W ? to = bM(e) : to = ca ? _p(e.stateNode) : null, !0;
    }
    function EM() {
      return zo && to !== null;
    }
    function z2(e) {
      for (var t = to; t; )
        O2(e, t), t = _p(t);
    }
    function bd() {
      ca = null, to = null, zo = !1, Nc = !1;
    }
    function P2() {
      Cs !== null && (Ox(Cs), Cs = null);
    }
    function fa() {
      return zo;
    }
    function Z0(e) {
      Cs === null ? Cs = [e] : Cs.push(e);
    }
    var wM = u.ReactCurrentBatchConfig, xM = null;
    function TM() {
      return wM.transition;
    }
    var Po = {
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
      var RM = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Gn && (t = a), a = a.return;
        return t;
      }, Dc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Dp = [], Lp = [], Ap = [], zp = [], Pp = [], Hp = [], Lc = /* @__PURE__ */ new Set();
      Po.recordUnsafeLifecycleWarnings = function(e, t) {
        Lc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Dp.push(e), e.mode & Gn && typeof t.UNSAFE_componentWillMount == "function" && Lp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && Ap.push(e), e.mode & Gn && typeof t.UNSAFE_componentWillReceiveProps == "function" && zp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Pp.push(e), e.mode & Gn && typeof t.UNSAFE_componentWillUpdate == "function" && Hp.push(e));
      }, Po.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Dp.length > 0 && (Dp.forEach(function($) {
          e.add(ct($) || "Component"), Lc.add($.type);
        }), Dp = []);
        var t = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function($) {
          t.add(ct($) || "Component"), Lc.add($.type);
        }), Lp = []);
        var a = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function($) {
          a.add(ct($) || "Component"), Lc.add($.type);
        }), Ap = []);
        var o = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function($) {
          o.add(ct($) || "Component"), Lc.add($.type);
        }), zp = []);
        var c = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function($) {
          c.add(ct($) || "Component"), Lc.add($.type);
        }), Pp = []);
        var v = /* @__PURE__ */ new Set();
        if (Hp.length > 0 && (Hp.forEach(function($) {
          v.add(ct($) || "Component"), Lc.add($.type);
        }), Hp = []), t.size > 0) {
          var g = Dc(t);
          h(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, g);
        }
        if (o.size > 0) {
          var C = Dc(o);
          h(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, C);
        }
        if (v.size > 0) {
          var b = Dc(v);
          h(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, b);
        }
        if (e.size > 0) {
          var k = Dc(e);
          y(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, k);
        }
        if (a.size > 0) {
          var M = Dc(a);
          y(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, M);
        }
        if (c.size > 0) {
          var j = Dc(c);
          y(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, j);
        }
      };
      var Mg = /* @__PURE__ */ new Map(), H2 = /* @__PURE__ */ new Set();
      Po.recordLegacyContextWarning = function(e, t) {
        var a = RM(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!H2.has(e.type)) {
          var o = Mg.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (o === void 0 && (o = [], Mg.set(a, o)), o.push(e));
        }
      }, Po.flushLegacyContextWarning = function() {
        Mg.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], o = /* @__PURE__ */ new Set();
            e.forEach(function(v) {
              o.add(ct(v) || "Component"), H2.add(v.type);
            });
            var c = Dc(o);
            try {
              be(a), h(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, c);
            } finally {
              Wn();
            }
          }
        });
      }, Po.discardPendingWarnings = function() {
        Dp = [], Lp = [], Ap = [], zp = [], Pp = [], Hp = [], Mg = /* @__PURE__ */ new Map();
      };
    }
    function Ho(e, t) {
      if (e && e.defaultProps) {
        var a = Nt({}, t), o = e.defaultProps;
        for (var c in o)
          a[c] === void 0 && (a[c] = o[c]);
        return a;
      }
      return t;
    }
    var J0 = gs(null), eS;
    eS = {};
    var Og = null, Ed = null, tS = null, Ng = !1;
    function Dg() {
      Og = null, Ed = null, tS = null, Ng = !1;
    }
    function U2() {
      Ng = !0;
    }
    function I2() {
      Ng = !1;
    }
    function $2(e, t, a) {
      La(J0, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== eS && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = eS;
    }
    function nS(e, t) {
      var a = J0.current;
      Da(J0, t), e._currentValue = a;
    }
    function rS(e, t, a) {
      for (var o = e; o !== null; ) {
        var c = o.alternate;
        if (nu(o.childLanes, t) ? c !== null && !nu(c.childLanes, t) && (c.childLanes = Lt(c.childLanes, t)) : (o.childLanes = Lt(o.childLanes, t), c !== null && (c.childLanes = Lt(c.childLanes, t))), o === a)
          break;
        o = o.return;
      }
      o !== a && h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function kM(e, t, a) {
      _M(e, t, a);
    }
    function _M(e, t, a) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var c = void 0, v = o.dependencies;
        if (v !== null) {
          c = o.child;
          for (var g = v.firstContext; g !== null; ) {
            if (g.context === t) {
              if (o.tag === R) {
                var C = Cr(a), b = yu(Dn, C);
                b.tag = Ag;
                var k = o.updateQueue;
                if (k !== null) {
                  var M = k.shared, j = M.pending;
                  j === null ? b.next = b : (b.next = j.next, j.next = b), M.pending = b;
                }
              }
              o.lanes = Lt(o.lanes, a);
              var $ = o.alternate;
              $ !== null && ($.lanes = Lt($.lanes, a)), rS(o.return, a, e), v.lanes = Lt(v.lanes, a);
              break;
            }
            g = g.next;
          }
        } else if (o.tag === V)
          c = o.type === e.type ? null : o.child;
        else if (o.tag === le) {
          var Z = o.return;
          if (Z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          Z.lanes = Lt(Z.lanes, a);
          var J = Z.alternate;
          J !== null && (J.lanes = Lt(J.lanes, a)), rS(Z, a, e), c = o.sibling;
        } else
          c = o.child;
        if (c !== null)
          c.return = o;
        else
          for (c = o; c !== null; ) {
            if (c === e) {
              c = null;
              break;
            }
            var ie = c.sibling;
            if (ie !== null) {
              ie.return = c.return, c = ie;
              break;
            }
            c = c.return;
          }
        o = c;
      }
    }
    function wd(e, t) {
      Og = e, Ed = null, tS = null;
      var a = e.dependencies;
      if (a !== null) {
        var o = a.firstContext;
        o !== null && (Na(a.lanes, t) && qp(), a.firstContext = null);
      }
    }
    function zr(e) {
      Ng && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (tS !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Ed === null) {
          if (Og === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Ed = a, Og.dependencies = {
            lanes: ue,
            firstContext: a
          };
        } else
          Ed = Ed.next = a;
      }
      return t;
    }
    var Ac = null;
    function aS(e) {
      Ac === null ? Ac = [e] : Ac.push(e);
    }
    function MM() {
      if (Ac !== null) {
        for (var e = 0; e < Ac.length; e++) {
          var t = Ac[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var o = a.next, c = t.pending;
            if (c !== null) {
              var v = c.next;
              c.next = o, a.next = v;
            }
            t.pending = a;
          }
        }
        Ac = null;
      }
    }
    function F2(e, t, a, o) {
      var c = t.interleaved;
      return c === null ? (a.next = a, aS(t)) : (a.next = c.next, c.next = a), t.interleaved = a, Lg(e, o);
    }
    function OM(e, t, a, o) {
      var c = t.interleaved;
      c === null ? (a.next = a, aS(t)) : (a.next = c.next, c.next = a), t.interleaved = a;
    }
    function NM(e, t, a, o) {
      var c = t.interleaved;
      return c === null ? (a.next = a, aS(t)) : (a.next = c.next, c.next = a), t.interleaved = a, Lg(e, o);
    }
    function Ci(e, t) {
      return Lg(e, t);
    }
    var DM = Lg;
    function Lg(e, t) {
      e.lanes = Lt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Lt(a.lanes, t)), a === null && (e.flags & (Pn | ci)) !== nt && jx(e);
      for (var o = e, c = e.return; c !== null; )
        c.childLanes = Lt(c.childLanes, t), a = c.alternate, a !== null ? a.childLanes = Lt(a.childLanes, t) : (c.flags & (Pn | ci)) !== nt && jx(e), o = c, c = c.return;
      if (o.tag === _) {
        var v = o.stateNode;
        return v;
      } else
        return null;
    }
    var j2 = 0, V2 = 1, Ag = 2, iS = 3, zg = !1, oS, Pg;
    oS = !1, Pg = null;
    function lS(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: ue
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function B2(e, t) {
      var a = t.updateQueue, o = e.updateQueue;
      if (a === o) {
        var c = {
          baseState: o.baseState,
          firstBaseUpdate: o.firstBaseUpdate,
          lastBaseUpdate: o.lastBaseUpdate,
          shared: o.shared,
          effects: o.effects
        };
        t.updateQueue = c;
      }
    }
    function yu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: j2,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function bs(e, t, a) {
      var o = e.updateQueue;
      if (o === null)
        return null;
      var c = o.shared;
      if (Pg === c && !oS && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), oS = !0), D4()) {
        var v = c.pending;
        return v === null ? t.next = t : (t.next = v.next, v.next = t), c.pending = t, DM(e, a);
      } else
        return NM(e, c, t, a);
    }
    function Hg(e, t, a) {
      var o = t.updateQueue;
      if (o !== null) {
        var c = o.shared;
        if (Gv(a)) {
          var v = c.lanes;
          v = Qv(v, e.pendingLanes);
          var g = Lt(v, a);
          c.lanes = g, ts(e, g);
        }
      }
    }
    function uS(e, t) {
      var a = e.updateQueue, o = e.alternate;
      if (o !== null) {
        var c = o.updateQueue;
        if (a === c) {
          var v = null, g = null, C = a.firstBaseUpdate;
          if (C !== null) {
            var b = C;
            do {
              var k = {
                eventTime: b.eventTime,
                lane: b.lane,
                tag: b.tag,
                payload: b.payload,
                callback: b.callback,
                next: null
              };
              g === null ? v = g = k : (g.next = k, g = k), b = b.next;
            } while (b !== null);
            g === null ? v = g = t : (g.next = t, g = t);
          } else
            v = g = t;
          a = {
            baseState: c.baseState,
            firstBaseUpdate: v,
            lastBaseUpdate: g,
            shared: c.shared,
            effects: c.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var M = a.lastBaseUpdate;
      M === null ? a.firstBaseUpdate = t : M.next = t, a.lastBaseUpdate = t;
    }
    function LM(e, t, a, o, c, v) {
      switch (a.tag) {
        case V2: {
          var g = a.payload;
          if (typeof g == "function") {
            U2();
            var C = g.call(v, o, c);
            {
              if (e.mode & Gn) {
                Sr(!0);
                try {
                  g.call(v, o, c);
                } finally {
                  Sr(!1);
                }
              }
              I2();
            }
            return C;
          }
          return g;
        }
        case iS:
          e.flags = e.flags & ~Or | yt;
        case j2: {
          var b = a.payload, k;
          if (typeof b == "function") {
            U2(), k = b.call(v, o, c);
            {
              if (e.mode & Gn) {
                Sr(!0);
                try {
                  b.call(v, o, c);
                } finally {
                  Sr(!1);
                }
              }
              I2();
            }
          } else
            k = b;
          return k == null ? o : Nt({}, o, k);
        }
        case Ag:
          return zg = !0, o;
      }
      return o;
    }
    function Ug(e, t, a, o) {
      var c = e.updateQueue;
      zg = !1, Pg = c.shared;
      var v = c.firstBaseUpdate, g = c.lastBaseUpdate, C = c.shared.pending;
      if (C !== null) {
        c.shared.pending = null;
        var b = C, k = b.next;
        b.next = null, g === null ? v = k : g.next = k, g = b;
        var M = e.alternate;
        if (M !== null) {
          var j = M.updateQueue, $ = j.lastBaseUpdate;
          $ !== g && ($ === null ? j.firstBaseUpdate = k : $.next = k, j.lastBaseUpdate = b);
        }
      }
      if (v !== null) {
        var Z = c.baseState, J = ue, ie = null, Ie = null, at = null, qe = v;
        do {
          var on = qe.lane, Qt = qe.eventTime;
          if (nu(o, on)) {
            if (at !== null) {
              var oe = {
                eventTime: Qt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: rn,
                tag: qe.tag,
                payload: qe.payload,
                callback: qe.callback,
                next: null
              };
              at = at.next = oe;
            }
            Z = LM(e, c, qe, Z, t, a);
            var Q = qe.callback;
            if (Q !== null && // If the update was already committed, we should not queue its
            // callback again.
            qe.lane !== rn) {
              e.flags |= Gi;
              var ye = c.effects;
              ye === null ? c.effects = [qe] : ye.push(qe);
            }
          } else {
            var Y = {
              eventTime: Qt,
              lane: on,
              tag: qe.tag,
              payload: qe.payload,
              callback: qe.callback,
              next: null
            };
            at === null ? (Ie = at = Y, ie = Z) : at = at.next = Y, J = Lt(J, on);
          }
          if (qe = qe.next, qe === null) {
            if (C = c.shared.pending, C === null)
              break;
            var $e = C, Ae = $e.next;
            $e.next = null, qe = Ae, c.lastBaseUpdate = $e, c.shared.pending = null;
          }
        } while (!0);
        at === null && (ie = Z), c.baseState = ie, c.firstBaseUpdate = Ie, c.lastBaseUpdate = at;
        var mt = c.shared.interleaved;
        if (mt !== null) {
          var Tt = mt;
          do
            J = Lt(J, Tt.lane), Tt = Tt.next;
          while (Tt !== mt);
        } else
          v === null && (c.shared.lanes = ue);
        sh(J), e.lanes = J, e.memoizedState = Z;
      }
      Pg = null;
    }
    function AM(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function W2() {
      zg = !1;
    }
    function Ig() {
      return zg;
    }
    function K2(e, t, a) {
      var o = t.effects;
      if (t.effects = null, o !== null)
        for (var c = 0; c < o.length; c++) {
          var v = o[c], g = v.callback;
          g !== null && (v.callback = null, AM(g, a));
        }
    }
    var sS = {}, G2 = new i.Component().refs, cS, fS, dS, vS, pS, Y2, $g, hS, mS, gS;
    {
      cS = /* @__PURE__ */ new Set(), fS = /* @__PURE__ */ new Set(), dS = /* @__PURE__ */ new Set(), vS = /* @__PURE__ */ new Set(), hS = /* @__PURE__ */ new Set(), pS = /* @__PURE__ */ new Set(), mS = /* @__PURE__ */ new Set(), gS = /* @__PURE__ */ new Set();
      var Q2 = /* @__PURE__ */ new Set();
      $g = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          Q2.has(a) || (Q2.add(a), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Y2 = function(e, t) {
        if (t === void 0) {
          var a = nn(e) || "Component";
          pS.has(a) || (pS.add(a), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(sS, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(sS);
    }
    function yS(e, t, a, o) {
      var c = e.memoizedState, v = a(o, c);
      {
        if (e.mode & Gn) {
          Sr(!0);
          try {
            v = a(o, c);
          } finally {
            Sr(!1);
          }
        }
        Y2(t, v);
      }
      var g = v == null ? c : Nt({}, c, v);
      if (e.memoizedState = g, e.lanes === ue) {
        var C = e.updateQueue;
        C.baseState = g;
      }
    }
    var SS = {
      isMounted: Qa,
      enqueueSetState: function(e, t, a) {
        var o = ui(e), c = ti(), v = Ms(o), g = yu(c, v);
        g.payload = t, a != null && ($g(a, "setState"), g.callback = a);
        var C = bs(o, g, v);
        C !== null && (Yr(C, o, v, c), Hg(C, o, v)), vl(o, v);
      },
      enqueueReplaceState: function(e, t, a) {
        var o = ui(e), c = ti(), v = Ms(o), g = yu(c, v);
        g.tag = V2, g.payload = t, a != null && ($g(a, "replaceState"), g.callback = a);
        var C = bs(o, g, v);
        C !== null && (Yr(C, o, v, c), Hg(C, o, v)), vl(o, v);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ui(e), o = ti(), c = Ms(a), v = yu(o, c);
        v.tag = Ag, t != null && ($g(t, "forceUpdate"), v.callback = t);
        var g = bs(a, v, c);
        g !== null && (Yr(g, a, c, o), Hg(g, a, c)), Vv(a, c);
      }
    };
    function X2(e, t, a, o, c, v, g) {
      var C = e.stateNode;
      if (typeof C.shouldComponentUpdate == "function") {
        var b = C.shouldComponentUpdate(o, v, g);
        {
          if (e.mode & Gn) {
            Sr(!0);
            try {
              b = C.shouldComponentUpdate(o, v, g);
            } finally {
              Sr(!1);
            }
          }
          b === void 0 && h("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", nn(t) || "Component");
        }
        return b;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !et(a, o) || !et(c, v) : !0;
    }
    function zM(e, t, a) {
      var o = e.stateNode;
      {
        var c = nn(t) || "Component", v = o.render;
        v || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", c) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", c)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", c), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", c), o.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", c), o.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", c), o.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", c), t.contextType && t.contextTypes && !mS.has(t) && (mS.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", c)), typeof o.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", c), t.prototype && t.prototype.isPureReactComponent && typeof o.shouldComponentUpdate != "undefined" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", nn(t) || "A pure component"), typeof o.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", c), typeof o.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", c), typeof o.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", c), typeof o.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", c);
        var g = o.props !== a;
        o.props !== void 0 && g && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", c, c), o.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", c, c), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !dS.has(t) && (dS.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", nn(t))), typeof o.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof o.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", c);
        var C = o.state;
        C && (typeof C != "object" || _r(C)) && h("%s.state: must be set to an object or null", c), typeof o.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", c);
      }
    }
    function q2(e, t) {
      t.updater = SS, e.stateNode = t, Wu(t, e), t._reactInternalInstance = sS;
    }
    function Z2(e, t, a) {
      var o = !1, c = Hi, v = Hi, g = t.contextType;
      if ("contextType" in t) {
        var C = (
          // Allow null for conditional declaration
          g === null || g !== void 0 && g.$$typeof === fr && g._context === void 0
        );
        if (!C && !gS.has(t)) {
          gS.add(t);
          var b = "";
          g === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof g != "object" ? b = " However, it is set to a " + typeof g + "." : g.$$typeof === Ln ? b = " Did you accidentally pass the Context.Provider instead?" : g._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(g).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", nn(t) || "Component", b);
        }
      }
      if (typeof g == "object" && g !== null)
        v = zr(g);
      else {
        c = gd(e, t, !0);
        var k = t.contextTypes;
        o = k != null, v = o ? yd(e, c) : Hi;
      }
      var M = new t(a, v);
      if (e.mode & Gn) {
        Sr(!0);
        try {
          M = new t(a, v);
        } finally {
          Sr(!1);
        }
      }
      var j = e.memoizedState = M.state !== null && M.state !== void 0 ? M.state : null;
      q2(e, M);
      {
        if (typeof t.getDerivedStateFromProps == "function" && j === null) {
          var $ = nn(t) || "Component";
          fS.has($) || (fS.add($), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", $, M.state === null ? "null" : "undefined", $));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof M.getSnapshotBeforeUpdate == "function") {
          var Z = null, J = null, ie = null;
          if (typeof M.componentWillMount == "function" && M.componentWillMount.__suppressDeprecationWarning !== !0 ? Z = "componentWillMount" : typeof M.UNSAFE_componentWillMount == "function" && (Z = "UNSAFE_componentWillMount"), typeof M.componentWillReceiveProps == "function" && M.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? J = "componentWillReceiveProps" : typeof M.UNSAFE_componentWillReceiveProps == "function" && (J = "UNSAFE_componentWillReceiveProps"), typeof M.componentWillUpdate == "function" && M.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ie = "componentWillUpdate" : typeof M.UNSAFE_componentWillUpdate == "function" && (ie = "UNSAFE_componentWillUpdate"), Z !== null || J !== null || ie !== null) {
            var Ie = nn(t) || "Component", at = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            vS.has(Ie) || (vS.add(Ie), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, Ie, at, Z !== null ? `
  ` + Z : "", J !== null ? `
  ` + J : "", ie !== null ? `
  ` + ie : ""));
          }
        }
      }
      return o && E2(e, c, v), M;
    }
    function PM(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ct(e) || "Component"), SS.enqueueReplaceState(t, t.state, null));
    }
    function J2(e, t, a, o) {
      var c = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, o), t.state !== c) {
        {
          var v = ct(e) || "Component";
          cS.has(v) || (cS.add(v), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", v));
        }
        SS.enqueueReplaceState(t, t.state, null);
      }
    }
    function CS(e, t, a, o) {
      zM(e, t, a);
      var c = e.stateNode;
      c.props = a, c.state = e.memoizedState, c.refs = G2, lS(e);
      var v = t.contextType;
      if (typeof v == "object" && v !== null)
        c.context = zr(v);
      else {
        var g = gd(e, t, !0);
        c.context = yd(e, g);
      }
      {
        if (c.state === a) {
          var C = nn(t) || "Component";
          hS.has(C) || (hS.add(C), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", C));
        }
        e.mode & Gn && Po.recordLegacyContextWarning(e, c), Po.recordUnsafeLifecycleWarnings(e, c);
      }
      c.state = e.memoizedState;
      var b = t.getDerivedStateFromProps;
      if (typeof b == "function" && (yS(e, t, b, a), c.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof c.getSnapshotBeforeUpdate != "function" && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (PM(e, c), Ug(e, a, c, o), c.state = e.memoizedState), typeof c.componentDidMount == "function") {
        var k = Dt;
        k |= Ta, (e.mode & vi) !== ot && (k |= Ra), e.flags |= k;
      }
    }
    function HM(e, t, a, o) {
      var c = e.stateNode, v = e.memoizedProps;
      c.props = v;
      var g = c.context, C = t.contextType, b = Hi;
      if (typeof C == "object" && C !== null)
        b = zr(C);
      else {
        var k = gd(e, t, !0);
        b = yd(e, k);
      }
      var M = t.getDerivedStateFromProps, j = typeof M == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !j && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (v !== a || g !== b) && J2(e, c, a, b), W2();
      var $ = e.memoizedState, Z = c.state = $;
      if (Ug(e, a, c, o), Z = e.memoizedState, v === a && $ === Z && !bg() && !Ig()) {
        if (typeof c.componentDidMount == "function") {
          var J = Dt;
          J |= Ta, (e.mode & vi) !== ot && (J |= Ra), e.flags |= J;
        }
        return !1;
      }
      typeof M == "function" && (yS(e, t, M, a), Z = e.memoizedState);
      var ie = Ig() || X2(e, t, v, a, $, Z, b);
      if (ie) {
        if (!j && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function") {
          var Ie = Dt;
          Ie |= Ta, (e.mode & vi) !== ot && (Ie |= Ra), e.flags |= Ie;
        }
      } else {
        if (typeof c.componentDidMount == "function") {
          var at = Dt;
          at |= Ta, (e.mode & vi) !== ot && (at |= Ra), e.flags |= at;
        }
        e.memoizedProps = a, e.memoizedState = Z;
      }
      return c.props = a, c.state = Z, c.context = b, ie;
    }
    function UM(e, t, a, o, c) {
      var v = t.stateNode;
      B2(e, t);
      var g = t.memoizedProps, C = t.type === t.elementType ? g : Ho(t.type, g);
      v.props = C;
      var b = t.pendingProps, k = v.context, M = a.contextType, j = Hi;
      if (typeof M == "object" && M !== null)
        j = zr(M);
      else {
        var $ = gd(t, a, !0);
        j = yd(t, $);
      }
      var Z = a.getDerivedStateFromProps, J = typeof Z == "function" || typeof v.getSnapshotBeforeUpdate == "function";
      !J && (typeof v.UNSAFE_componentWillReceiveProps == "function" || typeof v.componentWillReceiveProps == "function") && (g !== b || k !== j) && J2(t, v, o, j), W2();
      var ie = t.memoizedState, Ie = v.state = ie;
      if (Ug(t, o, v, c), Ie = t.memoizedState, g === b && ie === Ie && !bg() && !Ig() && !de)
        return typeof v.componentDidUpdate == "function" && (g !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Dt), typeof v.getSnapshotBeforeUpdate == "function" && (g !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= si), !1;
      typeof Z == "function" && (yS(t, a, Z, o), Ie = t.memoizedState);
      var at = Ig() || X2(t, a, C, o, ie, Ie, j) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      de;
      return at ? (!J && (typeof v.UNSAFE_componentWillUpdate == "function" || typeof v.componentWillUpdate == "function") && (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(o, Ie, j), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(o, Ie, j)), typeof v.componentDidUpdate == "function" && (t.flags |= Dt), typeof v.getSnapshotBeforeUpdate == "function" && (t.flags |= si)) : (typeof v.componentDidUpdate == "function" && (g !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Dt), typeof v.getSnapshotBeforeUpdate == "function" && (g !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= si), t.memoizedProps = o, t.memoizedState = Ie), v.props = o, v.state = Ie, v.context = j, at;
    }
    var bS, ES, wS, xS, TS, ew = function(e, t) {
    };
    bS = !1, ES = !1, wS = {}, xS = {}, TS = {}, ew = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ct(t) || "Component";
        xS[a] || (xS[a] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function Up(e, t, a) {
      var o = a.ref;
      if (o !== null && typeof o != "function" && typeof o != "object") {
        if ((e.mode & Gn || dt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var c = ct(e) || "Component";
          wS[c] || (h('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o), wS[c] = !0);
        }
        if (a._owner) {
          var v = a._owner, g;
          if (v) {
            var C = v;
            if (C.tag !== R)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            g = C.stateNode;
          }
          if (!g)
            throw new Error("Missing owner for string ref " + o + ". This error is likely caused by a bug in React. Please file an issue.");
          var b = g;
          wt(o, "ref");
          var k = "" + o;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === k)
            return t.ref;
          var M = function(j) {
            var $ = b.refs;
            $ === G2 && ($ = b.refs = {}), j === null ? delete $[k] : $[k] = j;
          };
          return M._stringRef = k, M;
        } else {
          if (typeof o != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + o + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return o;
    }
    function Fg(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function jg(e) {
      {
        var t = ct(e) || "Component";
        if (TS[t])
          return;
        TS[t] = !0, h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function tw(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function nw(e) {
      function t(Y, oe) {
        if (e) {
          var Q = Y.deletions;
          Q === null ? (Y.deletions = [oe], Y.flags |= yn) : Q.push(oe);
        }
      }
      function a(Y, oe) {
        if (!e)
          return null;
        for (var Q = oe; Q !== null; )
          t(Y, Q), Q = Q.sibling;
        return null;
      }
      function o(Y, oe) {
        for (var Q = /* @__PURE__ */ new Map(), ye = oe; ye !== null; )
          ye.key !== null ? Q.set(ye.key, ye) : Q.set(ye.index, ye), ye = ye.sibling;
        return Q;
      }
      function c(Y, oe) {
        var Q = jc(Y, oe);
        return Q.index = 0, Q.sibling = null, Q;
      }
      function v(Y, oe, Q) {
        if (Y.index = Q, !e)
          return Y.flags |= Nv, oe;
        var ye = Y.alternate;
        if (ye !== null) {
          var $e = ye.index;
          return $e < oe ? (Y.flags |= Pn, oe) : $e;
        } else
          return Y.flags |= Pn, oe;
      }
      function g(Y) {
        return e && Y.alternate === null && (Y.flags |= Pn), Y;
      }
      function C(Y, oe, Q, ye) {
        if (oe === null || oe.tag !== z) {
          var $e = ZC(Q, Y.mode, ye);
          return $e.return = Y, $e;
        } else {
          var Ae = c(oe, Q);
          return Ae.return = Y, Ae;
        }
      }
      function b(Y, oe, Q, ye) {
        var $e = Q.type;
        if ($e === ar)
          return M(Y, oe, Q.props.children, ye, Q.key);
        if (oe !== null && (oe.elementType === $e || // Keep this check inline so it only runs on the false path:
        Kx(oe, Q) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof $e == "object" && $e !== null && $e.$$typeof === An && tw($e) === oe.type)) {
          var Ae = c(oe, Q.props);
          return Ae.ref = Up(Y, oe, Q), Ae.return = Y, Ae._debugSource = Q._source, Ae._debugOwner = Q._owner, Ae;
        }
        var mt = qC(Q, Y.mode, ye);
        return mt.ref = Up(Y, oe, Q), mt.return = Y, mt;
      }
      function k(Y, oe, Q, ye) {
        if (oe === null || oe.tag !== N || oe.stateNode.containerInfo !== Q.containerInfo || oe.stateNode.implementation !== Q.implementation) {
          var $e = JC(Q, Y.mode, ye);
          return $e.return = Y, $e;
        } else {
          var Ae = c(oe, Q.children || []);
          return Ae.return = Y, Ae;
        }
      }
      function M(Y, oe, Q, ye, $e) {
        if (oe === null || oe.tag !== H) {
          var Ae = Ns(Q, Y.mode, ye, $e);
          return Ae.return = Y, Ae;
        } else {
          var mt = c(oe, Q);
          return mt.return = Y, mt;
        }
      }
      function j(Y, oe, Q) {
        if (typeof oe == "string" && oe !== "" || typeof oe == "number") {
          var ye = ZC("" + oe, Y.mode, Q);
          return ye.return = Y, ye;
        }
        if (typeof oe == "object" && oe !== null) {
          switch (oe.$$typeof) {
            case Qr: {
              var $e = qC(oe, Y.mode, Q);
              return $e.ref = Up(Y, null, oe), $e.return = Y, $e;
            }
            case rr: {
              var Ae = JC(oe, Y.mode, Q);
              return Ae.return = Y, Ae;
            }
            case An: {
              var mt = oe._payload, Tt = oe._init;
              return j(Y, Tt(mt), Q);
            }
          }
          if (_r(oe) || Xr(oe)) {
            var xn = Ns(oe, Y.mode, Q, null);
            return xn.return = Y, xn;
          }
          Fg(Y, oe);
        }
        return typeof oe == "function" && jg(Y), null;
      }
      function $(Y, oe, Q, ye) {
        var $e = oe !== null ? oe.key : null;
        if (typeof Q == "string" && Q !== "" || typeof Q == "number")
          return $e !== null ? null : C(Y, oe, "" + Q, ye);
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case Qr:
              return Q.key === $e ? b(Y, oe, Q, ye) : null;
            case rr:
              return Q.key === $e ? k(Y, oe, Q, ye) : null;
            case An: {
              var Ae = Q._payload, mt = Q._init;
              return $(Y, oe, mt(Ae), ye);
            }
          }
          if (_r(Q) || Xr(Q))
            return $e !== null ? null : M(Y, oe, Q, ye, null);
          Fg(Y, Q);
        }
        return typeof Q == "function" && jg(Y), null;
      }
      function Z(Y, oe, Q, ye, $e) {
        if (typeof ye == "string" && ye !== "" || typeof ye == "number") {
          var Ae = Y.get(Q) || null;
          return C(oe, Ae, "" + ye, $e);
        }
        if (typeof ye == "object" && ye !== null) {
          switch (ye.$$typeof) {
            case Qr: {
              var mt = Y.get(ye.key === null ? Q : ye.key) || null;
              return b(oe, mt, ye, $e);
            }
            case rr: {
              var Tt = Y.get(ye.key === null ? Q : ye.key) || null;
              return k(oe, Tt, ye, $e);
            }
            case An:
              var xn = ye._payload, hn = ye._init;
              return Z(Y, oe, Q, hn(xn), $e);
          }
          if (_r(ye) || Xr(ye)) {
            var xr = Y.get(Q) || null;
            return M(oe, xr, ye, $e, null);
          }
          Fg(oe, ye);
        }
        return typeof ye == "function" && jg(oe), null;
      }
      function J(Y, oe, Q) {
        {
          if (typeof Y != "object" || Y === null)
            return oe;
          switch (Y.$$typeof) {
            case Qr:
            case rr:
              ew(Y, Q);
              var ye = Y.key;
              if (typeof ye != "string")
                break;
              if (oe === null) {
                oe = /* @__PURE__ */ new Set(), oe.add(ye);
                break;
              }
              if (!oe.has(ye)) {
                oe.add(ye);
                break;
              }
              h("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ye);
              break;
            case An:
              var $e = Y._payload, Ae = Y._init;
              J(Ae($e), oe, Q);
              break;
          }
        }
        return oe;
      }
      function ie(Y, oe, Q, ye) {
        for (var $e = null, Ae = 0; Ae < Q.length; Ae++) {
          var mt = Q[Ae];
          $e = J(mt, $e, Y);
        }
        for (var Tt = null, xn = null, hn = oe, xr = 0, mn = 0, gr = null; hn !== null && mn < Q.length; mn++) {
          hn.index > mn ? (gr = hn, hn = null) : gr = hn.sibling;
          var za = $(Y, hn, Q[mn], ye);
          if (za === null) {
            hn === null && (hn = gr);
            break;
          }
          e && hn && za.alternate === null && t(Y, hn), xr = v(za, xr, mn), xn === null ? Tt = za : xn.sibling = za, xn = za, hn = gr;
        }
        if (mn === Q.length) {
          if (a(Y, hn), fa()) {
            var ya = mn;
            Mc(Y, ya);
          }
          return Tt;
        }
        if (hn === null) {
          for (; mn < Q.length; mn++) {
            var Ii = j(Y, Q[mn], ye);
            Ii !== null && (xr = v(Ii, xr, mn), xn === null ? Tt = Ii : xn.sibling = Ii, xn = Ii);
          }
          if (fa()) {
            var ni = mn;
            Mc(Y, ni);
          }
          return Tt;
        }
        for (var ri = o(Y, hn); mn < Q.length; mn++) {
          var Pa = Z(ri, Y, mn, Q[mn], ye);
          Pa !== null && (e && Pa.alternate !== null && ri.delete(Pa.key === null ? mn : Pa.key), xr = v(Pa, xr, mn), xn === null ? Tt = Pa : xn.sibling = Pa, xn = Pa);
        }
        if (e && ri.forEach(function($d) {
          return t(Y, $d);
        }), fa()) {
          var xu = mn;
          Mc(Y, xu);
        }
        return Tt;
      }
      function Ie(Y, oe, Q, ye) {
        var $e = Xr(Q);
        if (typeof $e != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          Q[Symbol.toStringTag] === "Generator" && (ES || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), ES = !0), Q.entries === $e && (bS || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), bS = !0);
          var Ae = $e.call(Q);
          if (Ae)
            for (var mt = null, Tt = Ae.next(); !Tt.done; Tt = Ae.next()) {
              var xn = Tt.value;
              mt = J(xn, mt, Y);
            }
        }
        var hn = $e.call(Q);
        if (hn == null)
          throw new Error("An iterable object provided no iterator.");
        for (var xr = null, mn = null, gr = oe, za = 0, ya = 0, Ii = null, ni = hn.next(); gr !== null && !ni.done; ya++, ni = hn.next()) {
          gr.index > ya ? (Ii = gr, gr = null) : Ii = gr.sibling;
          var ri = $(Y, gr, ni.value, ye);
          if (ri === null) {
            gr === null && (gr = Ii);
            break;
          }
          e && gr && ri.alternate === null && t(Y, gr), za = v(ri, za, ya), mn === null ? xr = ri : mn.sibling = ri, mn = ri, gr = Ii;
        }
        if (ni.done) {
          if (a(Y, gr), fa()) {
            var Pa = ya;
            Mc(Y, Pa);
          }
          return xr;
        }
        if (gr === null) {
          for (; !ni.done; ya++, ni = hn.next()) {
            var xu = j(Y, ni.value, ye);
            xu !== null && (za = v(xu, za, ya), mn === null ? xr = xu : mn.sibling = xu, mn = xu);
          }
          if (fa()) {
            var $d = ya;
            Mc(Y, $d);
          }
          return xr;
        }
        for (var ph = o(Y, gr); !ni.done; ya++, ni = hn.next()) {
          var Nl = Z(ph, Y, ya, ni.value, ye);
          Nl !== null && (e && Nl.alternate !== null && ph.delete(Nl.key === null ? ya : Nl.key), za = v(Nl, za, ya), mn === null ? xr = Nl : mn.sibling = Nl, mn = Nl);
        }
        if (e && ph.forEach(function(ZO) {
          return t(Y, ZO);
        }), fa()) {
          var qO = ya;
          Mc(Y, qO);
        }
        return xr;
      }
      function at(Y, oe, Q, ye) {
        if (oe !== null && oe.tag === z) {
          a(Y, oe.sibling);
          var $e = c(oe, Q);
          return $e.return = Y, $e;
        }
        a(Y, oe);
        var Ae = ZC(Q, Y.mode, ye);
        return Ae.return = Y, Ae;
      }
      function qe(Y, oe, Q, ye) {
        for (var $e = Q.key, Ae = oe; Ae !== null; ) {
          if (Ae.key === $e) {
            var mt = Q.type;
            if (mt === ar) {
              if (Ae.tag === H) {
                a(Y, Ae.sibling);
                var Tt = c(Ae, Q.props.children);
                return Tt.return = Y, Tt._debugSource = Q._source, Tt._debugOwner = Q._owner, Tt;
              }
            } else if (Ae.elementType === mt || // Keep this check inline so it only runs on the false path:
            Kx(Ae, Q) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof mt == "object" && mt !== null && mt.$$typeof === An && tw(mt) === Ae.type) {
              a(Y, Ae.sibling);
              var xn = c(Ae, Q.props);
              return xn.ref = Up(Y, Ae, Q), xn.return = Y, xn._debugSource = Q._source, xn._debugOwner = Q._owner, xn;
            }
            a(Y, Ae);
            break;
          } else
            t(Y, Ae);
          Ae = Ae.sibling;
        }
        if (Q.type === ar) {
          var hn = Ns(Q.props.children, Y.mode, ye, Q.key);
          return hn.return = Y, hn;
        } else {
          var xr = qC(Q, Y.mode, ye);
          return xr.ref = Up(Y, oe, Q), xr.return = Y, xr;
        }
      }
      function on(Y, oe, Q, ye) {
        for (var $e = Q.key, Ae = oe; Ae !== null; ) {
          if (Ae.key === $e)
            if (Ae.tag === N && Ae.stateNode.containerInfo === Q.containerInfo && Ae.stateNode.implementation === Q.implementation) {
              a(Y, Ae.sibling);
              var mt = c(Ae, Q.children || []);
              return mt.return = Y, mt;
            } else {
              a(Y, Ae);
              break;
            }
          else
            t(Y, Ae);
          Ae = Ae.sibling;
        }
        var Tt = JC(Q, Y.mode, ye);
        return Tt.return = Y, Tt;
      }
      function Qt(Y, oe, Q, ye) {
        var $e = typeof Q == "object" && Q !== null && Q.type === ar && Q.key === null;
        if ($e && (Q = Q.props.children), typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case Qr:
              return g(qe(Y, oe, Q, ye));
            case rr:
              return g(on(Y, oe, Q, ye));
            case An:
              var Ae = Q._payload, mt = Q._init;
              return Qt(Y, oe, mt(Ae), ye);
          }
          if (_r(Q))
            return ie(Y, oe, Q, ye);
          if (Xr(Q))
            return Ie(Y, oe, Q, ye);
          Fg(Y, Q);
        }
        return typeof Q == "string" && Q !== "" || typeof Q == "number" ? g(at(Y, oe, "" + Q, ye)) : (typeof Q == "function" && jg(Y), a(Y, oe));
      }
      return Qt;
    }
    var xd = nw(!0), rw = nw(!1);
    function IM(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, o = jc(a, a.pendingProps);
        for (t.child = o, o.return = t; a.sibling !== null; )
          a = a.sibling, o = o.sibling = jc(a, a.pendingProps), o.return = t;
        o.sibling = null;
      }
    }
    function $M(e, t) {
      for (var a = e.child; a !== null; )
        hO(a, t), a = a.sibling;
    }
    var Ip = {}, Es = gs(Ip), $p = gs(Ip), Vg = gs(Ip);
    function Bg(e) {
      if (e === Ip)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function aw() {
      var e = Bg(Vg.current);
      return e;
    }
    function RS(e, t) {
      La(Vg, t, e), La($p, e, e), La(Es, Ip, e);
      var a = e_(t);
      Da(Es, e), La(Es, a, e);
    }
    function Td(e) {
      Da(Es, e), Da($p, e), Da(Vg, e);
    }
    function kS() {
      var e = Bg(Es.current);
      return e;
    }
    function iw(e) {
      Bg(Vg.current);
      var t = Bg(Es.current), a = t_(t, e.type);
      t !== a && (La($p, e, e), La(Es, a, e));
    }
    function _S(e) {
      $p.current === e && (Da(Es, e), Da($p, e));
    }
    var FM = 0, ow = 1, lw = 1, Fp = 2, Uo = gs(FM);
    function MS(e, t) {
      return (e & t) !== 0;
    }
    function Rd(e) {
      return e & ow;
    }
    function OS(e, t) {
      return e & ow | t;
    }
    function jM(e, t) {
      return e | t;
    }
    function ws(e, t) {
      La(Uo, t, e);
    }
    function kd(e) {
      Da(Uo, e);
    }
    function VM(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Wg(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === W) {
          var a = t.memoizedState;
          if (a !== null) {
            var o = a.dehydrated;
            if (o === null || g2(o) || P0(o))
              return t;
          }
        } else if (t.tag === ge && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var c = (t.flags & yt) !== nt;
          if (c)
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
    var bi = (
      /*   */
      0
    ), Fr = (
      /* */
      1
    ), xl = (
      /*  */
      2
    ), jr = (
      /*    */
      4
    ), da = (
      /*   */
      8
    ), NS = [];
    function DS() {
      for (var e = 0; e < NS.length; e++) {
        var t = NS[e];
        t._workInProgressVersionPrimary = null;
      }
      NS.length = 0;
    }
    function BM(e, t) {
      var a = t._getVersion, o = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, o] : e.mutableSourceEagerHydrationData.push(t, o);
    }
    var He = u.ReactCurrentDispatcher, jp = u.ReactCurrentBatchConfig, LS, _d;
    LS = /* @__PURE__ */ new Set();
    var zc = ue, wn = null, Vr = null, Br = null, Kg = !1, Vp = !1, Bp = 0, WM = 0, KM = 25, ce = null, no = null, xs = -1, AS = !1;
    function Cn() {
      {
        var e = ce;
        no === null ? no = [e] : no.push(e);
      }
    }
    function Oe() {
      {
        var e = ce;
        no !== null && (xs++, no[xs] !== e && GM(e));
      }
    }
    function Md(e) {
      e != null && !_r(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ce, typeof e);
    }
    function GM(e) {
      {
        var t = ct(wn);
        if (!LS.has(t) && (LS.add(t), no !== null)) {
          for (var a = "", o = 30, c = 0; c <= xs; c++) {
            for (var v = no[c], g = c === xs ? e : v, C = c + 1 + ". " + v; C.length < o; )
              C += " ";
            C += g + `
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
    function Aa() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function zS(e, t) {
      if (AS)
        return !1;
      if (t === null)
        return h("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", ce), !1;
      e.length !== t.length && h(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, ce, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!Ve(e[a], t[a]))
          return !1;
      return !0;
    }
    function Od(e, t, a, o, c, v) {
      zc = v, wn = t, no = e !== null ? e._debugHookTypes : null, xs = -1, AS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ue, e !== null && e.memoizedState !== null ? He.current = Mw : no !== null ? He.current = _w : He.current = kw;
      var g = a(o, c);
      if (Vp) {
        var C = 0;
        do {
          if (Vp = !1, Bp = 0, C >= KM)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          C += 1, AS = !1, Vr = null, Br = null, t.updateQueue = null, xs = -1, He.current = Ow, g = a(o, c);
        } while (Vp);
      }
      He.current = iy, t._debugHookTypes = no;
      var b = Vr !== null && Vr.next !== null;
      if (zc = ue, wn = null, Vr = null, Br = null, ce = null, no = null, xs = -1, e !== null && (e.flags & Ur) !== (t.flags & Ur) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Bt) !== ot && h("Internal React error: Expected static flag was missing. Please notify the React team."), Kg = !1, b)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return g;
    }
    function Nd() {
      var e = Bp !== 0;
      return Bp = 0, e;
    }
    function uw(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & vi) !== ot ? t.flags &= ~(Kl | Ra | jn | Dt) : t.flags &= ~(jn | Dt), e.lanes = es(e.lanes, a);
    }
    function sw() {
      if (He.current = iy, Kg) {
        for (var e = wn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Kg = !1;
      }
      zc = ue, wn = null, Vr = null, Br = null, no = null, xs = -1, ce = null, Ew = !1, Vp = !1, Bp = 0;
    }
    function Tl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Br === null ? wn.memoizedState = Br = e : Br = Br.next = e, Br;
    }
    function ro() {
      var e;
      if (Vr === null) {
        var t = wn.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Vr.next;
      var a;
      if (Br === null ? a = wn.memoizedState : a = Br.next, a !== null)
        Br = a, a = Br.next, Vr = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Vr = e;
        var o = {
          memoizedState: Vr.memoizedState,
          baseState: Vr.baseState,
          baseQueue: Vr.baseQueue,
          queue: Vr.queue,
          next: null
        };
        Br === null ? wn.memoizedState = Br = o : Br = Br.next = o;
      }
      return Br;
    }
    function cw() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function PS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function HS(e, t, a) {
      var o = Tl(), c;
      a !== void 0 ? c = a(t) : c = t, o.memoizedState = o.baseState = c;
      var v = {
        pending: null,
        interleaved: null,
        lanes: ue,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      };
      o.queue = v;
      var g = v.dispatch = qM.bind(null, wn, v);
      return [o.memoizedState, g];
    }
    function US(e, t, a) {
      var o = ro(), c = o.queue;
      if (c === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      c.lastRenderedReducer = e;
      var v = Vr, g = v.baseQueue, C = c.pending;
      if (C !== null) {
        if (g !== null) {
          var b = g.next, k = C.next;
          g.next = k, C.next = b;
        }
        v.baseQueue !== g && h("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), v.baseQueue = g = C, c.pending = null;
      }
      if (g !== null) {
        var M = g.next, j = v.baseState, $ = null, Z = null, J = null, ie = M;
        do {
          var Ie = ie.lane;
          if (nu(zc, Ie)) {
            if (J !== null) {
              var qe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: rn,
                action: ie.action,
                hasEagerState: ie.hasEagerState,
                eagerState: ie.eagerState,
                next: null
              };
              J = J.next = qe;
            }
            if (ie.hasEagerState)
              j = ie.eagerState;
            else {
              var on = ie.action;
              j = e(j, on);
            }
          } else {
            var at = {
              lane: Ie,
              action: ie.action,
              hasEagerState: ie.hasEagerState,
              eagerState: ie.eagerState,
              next: null
            };
            J === null ? (Z = J = at, $ = j) : J = J.next = at, wn.lanes = Lt(wn.lanes, Ie), sh(Ie);
          }
          ie = ie.next;
        } while (ie !== null && ie !== M);
        J === null ? $ = j : J.next = Z, Ve(j, o.memoizedState) || qp(), o.memoizedState = j, o.baseState = $, o.baseQueue = J, c.lastRenderedState = j;
      }
      var Qt = c.interleaved;
      if (Qt !== null) {
        var Y = Qt;
        do {
          var oe = Y.lane;
          wn.lanes = Lt(wn.lanes, oe), sh(oe), Y = Y.next;
        } while (Y !== Qt);
      } else
        g === null && (c.lanes = ue);
      var Q = c.dispatch;
      return [o.memoizedState, Q];
    }
    function IS(e, t, a) {
      var o = ro(), c = o.queue;
      if (c === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      c.lastRenderedReducer = e;
      var v = c.dispatch, g = c.pending, C = o.memoizedState;
      if (g !== null) {
        c.pending = null;
        var b = g.next, k = b;
        do {
          var M = k.action;
          C = e(C, M), k = k.next;
        } while (k !== b);
        Ve(C, o.memoizedState) || qp(), o.memoizedState = C, o.baseQueue === null && (o.baseState = C), c.lastRenderedState = C;
      }
      return [C, v];
    }
    function oP(e, t, a) {
    }
    function lP(e, t, a) {
    }
    function $S(e, t, a) {
      var o = wn, c = Tl(), v, g = fa();
      if (g) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        v = a(), _d || v !== a() && (h("The result of getServerSnapshot should be cached to avoid an infinite loop"), _d = !0);
      } else {
        if (v = t(), !_d) {
          var C = t();
          Ve(v, C) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), _d = !0);
        }
        var b = wy();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        dc(b, zc) || fw(o, t, v);
      }
      c.memoizedState = v;
      var k = {
        value: v,
        getSnapshot: t
      };
      return c.queue = k, qg(vw.bind(null, o, k, e), [e]), o.flags |= jn, Wp(Fr | da, dw.bind(null, o, k, v, t), void 0, null), v;
    }
    function Gg(e, t, a) {
      var o = wn, c = ro(), v = t();
      if (!_d) {
        var g = t();
        Ve(v, g) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), _d = !0);
      }
      var C = c.memoizedState, b = !Ve(C, v);
      b && (c.memoizedState = v, qp());
      var k = c.queue;
      if (Gp(vw.bind(null, o, k, e), [e]), k.getSnapshot !== t || b || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Br !== null && Br.memoizedState.tag & Fr) {
        o.flags |= jn, Wp(Fr | da, dw.bind(null, o, k, v, t), void 0, null);
        var M = wy();
        if (M === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        dc(M, zc) || fw(o, t, v);
      }
      return v;
    }
    function fw(e, t, a) {
      e.flags |= rc;
      var o = {
        getSnapshot: t,
        value: a
      }, c = wn.updateQueue;
      if (c === null)
        c = cw(), wn.updateQueue = c, c.stores = [o];
      else {
        var v = c.stores;
        v === null ? c.stores = [o] : v.push(o);
      }
    }
    function dw(e, t, a, o) {
      t.value = a, t.getSnapshot = o, pw(t) && hw(e);
    }
    function vw(e, t, a) {
      var o = function() {
        pw(t) && hw(e);
      };
      return a(o);
    }
    function pw(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var o = t();
        return !Ve(a, o);
      } catch (c) {
        return !0;
      }
    }
    function hw(e) {
      var t = Ci(e, ut);
      t !== null && Yr(t, e, ut, Dn);
    }
    function Yg(e) {
      var t = Tl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ue,
        dispatch: null,
        lastRenderedReducer: PS,
        lastRenderedState: e
      };
      t.queue = a;
      var o = a.dispatch = ZM.bind(null, wn, a);
      return [t.memoizedState, o];
    }
    function FS(e) {
      return US(PS);
    }
    function jS(e) {
      return IS(PS);
    }
    function Wp(e, t, a, o) {
      var c = {
        tag: e,
        create: t,
        destroy: a,
        deps: o,
        // Circular
        next: null
      }, v = wn.updateQueue;
      if (v === null)
        v = cw(), wn.updateQueue = v, v.lastEffect = c.next = c;
      else {
        var g = v.lastEffect;
        if (g === null)
          v.lastEffect = c.next = c;
        else {
          var C = g.next;
          g.next = c, c.next = C, v.lastEffect = c;
        }
      }
      return c;
    }
    function VS(e) {
      var t = Tl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Qg(e) {
      var t = ro();
      return t.memoizedState;
    }
    function Kp(e, t, a, o) {
      var c = Tl(), v = o === void 0 ? null : o;
      wn.flags |= e, c.memoizedState = Wp(Fr | t, a, void 0, v);
    }
    function Xg(e, t, a, o) {
      var c = ro(), v = o === void 0 ? null : o, g = void 0;
      if (Vr !== null) {
        var C = Vr.memoizedState;
        if (g = C.destroy, v !== null) {
          var b = C.deps;
          if (zS(v, b)) {
            c.memoizedState = Wp(t, a, g, v);
            return;
          }
        }
      }
      wn.flags |= e, c.memoizedState = Wp(Fr | t, a, g, v);
    }
    function qg(e, t) {
      return (wn.mode & vi) !== ot ? Kp(Kl | jn | ll, da, e, t) : Kp(jn | ll, da, e, t);
    }
    function Gp(e, t) {
      return Xg(jn, da, e, t);
    }
    function BS(e, t) {
      return Kp(Dt, xl, e, t);
    }
    function Zg(e, t) {
      return Xg(Dt, xl, e, t);
    }
    function WS(e, t) {
      var a = Dt;
      return a |= Ta, (wn.mode & vi) !== ot && (a |= Ra), Kp(a, jr, e, t);
    }
    function Jg(e, t) {
      return Xg(Dt, jr, e, t);
    }
    function mw(e, t) {
      if (typeof t == "function") {
        var a = t, o = e();
        return a(o), function() {
          a(null);
        };
      } else if (t != null) {
        var c = t;
        c.hasOwnProperty("current") || h("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(c).join(", ") + "}");
        var v = e();
        return c.current = v, function() {
          c.current = null;
        };
      }
    }
    function KS(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = a != null ? a.concat([e]) : null, c = Dt;
      return c |= Ta, (wn.mode & vi) !== ot && (c |= Ra), Kp(c, jr, mw.bind(null, t, e), o);
    }
    function ey(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = a != null ? a.concat([e]) : null;
      return Xg(Dt, jr, mw.bind(null, t, e), o);
    }
    function YM(e, t) {
    }
    var ty = YM;
    function GS(e, t) {
      var a = Tl(), o = t === void 0 ? null : t;
      return a.memoizedState = [e, o], e;
    }
    function ny(e, t) {
      var a = ro(), o = t === void 0 ? null : t, c = a.memoizedState;
      if (c !== null && o !== null) {
        var v = c[1];
        if (zS(o, v))
          return c[0];
      }
      return a.memoizedState = [e, o], e;
    }
    function YS(e, t) {
      var a = Tl(), o = t === void 0 ? null : t, c = e();
      return a.memoizedState = [c, o], c;
    }
    function ry(e, t) {
      var a = ro(), o = t === void 0 ? null : t, c = a.memoizedState;
      if (c !== null && o !== null) {
        var v = c[1];
        if (zS(o, v))
          return c[0];
      }
      var g = e();
      return a.memoizedState = [g, o], g;
    }
    function QS(e) {
      var t = Tl();
      return t.memoizedState = e, e;
    }
    function gw(e) {
      var t = ro(), a = Vr, o = a.memoizedState;
      return Sw(t, o, e);
    }
    function yw(e) {
      var t = ro();
      if (Vr === null)
        return t.memoizedState = e, e;
      var a = Vr.memoizedState;
      return Sw(t, a, e);
    }
    function Sw(e, t, a) {
      var o = !t0(zc);
      if (o) {
        if (!Ve(a, t)) {
          var c = Yv();
          wn.lanes = Lt(wn.lanes, c), sh(c), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, qp()), e.memoizedState = a, a;
    }
    function QM(e, t, a) {
      var o = hi();
      br(ta(o, $r)), e(!0);
      var c = jp.transition;
      jp.transition = {};
      var v = jp.transition;
      jp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (br(o), jp.transition = c, c === null && v._updatedFibers) {
          var g = v._updatedFibers.size;
          g > 10 && y("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), v._updatedFibers.clear();
        }
      }
    }
    function XS() {
      var e = Yg(!1), t = e[0], a = e[1], o = QM.bind(null, a), c = Tl();
      return c.memoizedState = o, [t, o];
    }
    function Cw() {
      var e = FS(), t = e[0], a = ro(), o = a.memoizedState;
      return [t, o];
    }
    function bw() {
      var e = jS(), t = e[0], a = ro(), o = a.memoizedState;
      return [t, o];
    }
    var Ew = !1;
    function XM() {
      return Ew;
    }
    function qS() {
      var e = Tl(), t = wy(), a = t.identifierPrefix, o;
      if (fa()) {
        var c = cM();
        o = ":" + a + "R" + c;
        var v = Bp++;
        v > 0 && (o += "H" + v.toString(32)), o += ":";
      } else {
        var g = WM++;
        o = ":" + a + "r" + g.toString(32) + ":";
      }
      return e.memoizedState = o, o;
    }
    function ay() {
      var e = ro(), t = e.memoizedState;
      return t;
    }
    function qM(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = Ms(e), c = {
        lane: o,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ww(e))
        xw(t, c);
      else {
        var v = F2(e, t, c, o);
        if (v !== null) {
          var g = ti();
          Yr(v, e, o, g), Tw(v, t, o);
        }
      }
      Rw(e, o);
    }
    function ZM(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = Ms(e), c = {
        lane: o,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ww(e))
        xw(t, c);
      else {
        var v = e.alternate;
        if (e.lanes === ue && (v === null || v.lanes === ue)) {
          var g = t.lastRenderedReducer;
          if (g !== null) {
            var C;
            C = He.current, He.current = Io;
            try {
              var b = t.lastRenderedState, k = g(b, a);
              if (c.hasEagerState = !0, c.eagerState = k, Ve(k, b)) {
                OM(e, t, c, o);
                return;
              }
            } catch ($) {
            } finally {
              He.current = C;
            }
          }
        }
        var M = F2(e, t, c, o);
        if (M !== null) {
          var j = ti();
          Yr(M, e, o, j), Tw(M, t, o);
        }
      }
      Rw(e, o);
    }
    function ww(e) {
      var t = e.alternate;
      return e === wn || t !== null && t === wn;
    }
    function xw(e, t) {
      Vp = Kg = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function Tw(e, t, a) {
      if (Gv(a)) {
        var o = t.lanes;
        o = Qv(o, e.pendingLanes);
        var c = Lt(o, a);
        t.lanes = c, ts(e, c);
      }
    }
    function Rw(e, t, a) {
      vl(e, t);
    }
    var iy = {
      readContext: zr,
      useCallback: Aa,
      useContext: Aa,
      useEffect: Aa,
      useImperativeHandle: Aa,
      useInsertionEffect: Aa,
      useLayoutEffect: Aa,
      useMemo: Aa,
      useReducer: Aa,
      useRef: Aa,
      useState: Aa,
      useDebugValue: Aa,
      useDeferredValue: Aa,
      useTransition: Aa,
      useMutableSource: Aa,
      useSyncExternalStore: Aa,
      useId: Aa,
      unstable_isNewReconciler: ee
    }, kw = null, _w = null, Mw = null, Ow = null, Rl = null, Io = null, oy = null;
    {
      var ZS = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, bt = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      kw = {
        readContext: function(e) {
          return zr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", Cn(), Md(t), GS(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Cn(), zr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Cn(), Md(t), qg(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Cn(), Md(a), KS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Cn(), Md(t), BS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Cn(), Md(t), WS(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Cn(), Md(t);
          var a = He.current;
          He.current = Rl;
          try {
            return YS(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Cn();
          var o = He.current;
          He.current = Rl;
          try {
            return HS(e, t, a);
          } finally {
            He.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Cn(), VS(e);
        },
        useState: function(e) {
          ce = "useState", Cn();
          var t = He.current;
          He.current = Rl;
          try {
            return Yg(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Cn(), void 0;
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Cn(), QS(e);
        },
        useTransition: function() {
          return ce = "useTransition", Cn(), XS();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Cn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Cn(), $S(e, t, a);
        },
        useId: function() {
          return ce = "useId", Cn(), qS();
        },
        unstable_isNewReconciler: ee
      }, _w = {
        readContext: function(e) {
          return zr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", Oe(), GS(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Oe(), zr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Oe(), qg(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Oe(), KS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Oe(), BS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Oe(), WS(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Oe();
          var a = He.current;
          He.current = Rl;
          try {
            return YS(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Oe();
          var o = He.current;
          He.current = Rl;
          try {
            return HS(e, t, a);
          } finally {
            He.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Oe(), VS(e);
        },
        useState: function(e) {
          ce = "useState", Oe();
          var t = He.current;
          He.current = Rl;
          try {
            return Yg(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Oe(), void 0;
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Oe(), QS(e);
        },
        useTransition: function() {
          return ce = "useTransition", Oe(), XS();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Oe(), $S(e, t, a);
        },
        useId: function() {
          return ce = "useId", Oe(), qS();
        },
        unstable_isNewReconciler: ee
      }, Mw = {
        readContext: function(e) {
          return zr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", Oe(), ny(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Oe(), zr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Oe(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Oe(), ey(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Oe(), Zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Oe(), Jg(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Oe();
          var a = He.current;
          He.current = Io;
          try {
            return ry(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Oe();
          var o = He.current;
          He.current = Io;
          try {
            return US(e, t, a);
          } finally {
            He.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Oe(), Qg();
        },
        useState: function(e) {
          ce = "useState", Oe();
          var t = He.current;
          He.current = Io;
          try {
            return FS(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Oe(), ty();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Oe(), gw(e);
        },
        useTransition: function() {
          return ce = "useTransition", Oe(), Cw();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Oe(), Gg(e, t);
        },
        useId: function() {
          return ce = "useId", Oe(), ay();
        },
        unstable_isNewReconciler: ee
      }, Ow = {
        readContext: function(e) {
          return zr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", Oe(), ny(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Oe(), zr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Oe(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Oe(), ey(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Oe(), Zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Oe(), Jg(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Oe();
          var a = He.current;
          He.current = oy;
          try {
            return ry(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Oe();
          var o = He.current;
          He.current = oy;
          try {
            return IS(e, t, a);
          } finally {
            He.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Oe(), Qg();
        },
        useState: function(e) {
          ce = "useState", Oe();
          var t = He.current;
          He.current = oy;
          try {
            return jS(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Oe(), ty();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Oe(), yw(e);
        },
        useTransition: function() {
          return ce = "useTransition", Oe(), bw();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Oe(), Gg(e, t);
        },
        useId: function() {
          return ce = "useId", Oe(), ay();
        },
        unstable_isNewReconciler: ee
      }, Rl = {
        readContext: function(e) {
          return ZS(), zr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", bt(), Cn(), GS(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", bt(), Cn(), zr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", bt(), Cn(), qg(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", bt(), Cn(), KS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", bt(), Cn(), BS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", bt(), Cn(), WS(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", bt(), Cn();
          var a = He.current;
          He.current = Rl;
          try {
            return YS(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", bt(), Cn();
          var o = He.current;
          He.current = Rl;
          try {
            return HS(e, t, a);
          } finally {
            He.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", bt(), Cn(), VS(e);
        },
        useState: function(e) {
          ce = "useState", bt(), Cn();
          var t = He.current;
          He.current = Rl;
          try {
            return Yg(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", bt(), Cn(), void 0;
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", bt(), Cn(), QS(e);
        },
        useTransition: function() {
          return ce = "useTransition", bt(), Cn(), XS();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", bt(), Cn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", bt(), Cn(), $S(e, t, a);
        },
        useId: function() {
          return ce = "useId", bt(), Cn(), qS();
        },
        unstable_isNewReconciler: ee
      }, Io = {
        readContext: function(e) {
          return ZS(), zr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", bt(), Oe(), ny(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", bt(), Oe(), zr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", bt(), Oe(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", bt(), Oe(), ey(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", bt(), Oe(), Zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", bt(), Oe(), Jg(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", bt(), Oe();
          var a = He.current;
          He.current = Io;
          try {
            return ry(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", bt(), Oe();
          var o = He.current;
          He.current = Io;
          try {
            return US(e, t, a);
          } finally {
            He.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", bt(), Oe(), Qg();
        },
        useState: function(e) {
          ce = "useState", bt(), Oe();
          var t = He.current;
          He.current = Io;
          try {
            return FS(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", bt(), Oe(), ty();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", bt(), Oe(), gw(e);
        },
        useTransition: function() {
          return ce = "useTransition", bt(), Oe(), Cw();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", bt(), Oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", bt(), Oe(), Gg(e, t);
        },
        useId: function() {
          return ce = "useId", bt(), Oe(), ay();
        },
        unstable_isNewReconciler: ee
      }, oy = {
        readContext: function(e) {
          return ZS(), zr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", bt(), Oe(), ny(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", bt(), Oe(), zr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", bt(), Oe(), Gp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", bt(), Oe(), ey(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", bt(), Oe(), Zg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", bt(), Oe(), Jg(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", bt(), Oe();
          var a = He.current;
          He.current = Io;
          try {
            return ry(e, t);
          } finally {
            He.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", bt(), Oe();
          var o = He.current;
          He.current = Io;
          try {
            return IS(e, t, a);
          } finally {
            He.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", bt(), Oe(), Qg();
        },
        useState: function(e) {
          ce = "useState", bt(), Oe();
          var t = He.current;
          He.current = Io;
          try {
            return jS(e);
          } finally {
            He.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", bt(), Oe(), ty();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", bt(), Oe(), yw(e);
        },
        useTransition: function() {
          return ce = "useTransition", bt(), Oe(), bw();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", bt(), Oe(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", bt(), Oe(), Gg(e, t);
        },
        useId: function() {
          return ce = "useId", bt(), Oe(), ay();
        },
        unstable_isNewReconciler: ee
      };
    }
    var Ts = l.unstable_now, Nw = 0, ly = -1, Yp = -1, uy = -1, JS = !1, sy = !1;
    function Dw() {
      return JS;
    }
    function JM() {
      sy = !0;
    }
    function e3() {
      JS = !1, sy = !1;
    }
    function t3() {
      JS = sy, sy = !1;
    }
    function Lw() {
      return Nw;
    }
    function Aw() {
      Nw = Ts();
    }
    function eC(e) {
      Yp = Ts(), e.actualStartTime < 0 && (e.actualStartTime = Ts());
    }
    function zw(e) {
      Yp = -1;
    }
    function cy(e, t) {
      if (Yp >= 0) {
        var a = Ts() - Yp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Yp = -1;
      }
    }
    function kl(e) {
      if (ly >= 0) {
        var t = Ts() - ly;
        ly = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case _:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
            case I:
              var c = a.stateNode;
              c.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function tC(e) {
      if (uy >= 0) {
        var t = Ts() - uy;
        uy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case _:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
            case I:
              var c = a.stateNode;
              c !== null && (c.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function _l() {
      ly = Ts();
    }
    function nC() {
      uy = Ts();
    }
    function rC(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function Pc(e, t) {
      return {
        value: e,
        source: t,
        stack: vr(t),
        digest: null
      };
    }
    function aC(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a != null ? a : null,
        digest: t != null ? t : null
      };
    }
    function n3(e, t) {
      return !0;
    }
    function iC(e, t) {
      try {
        var a = n3(e, t);
        if (a === !1)
          return;
        var o = t.value, c = t.source, v = t.stack, g = v !== null ? v : "";
        if (o != null && o._suppressLogging) {
          if (e.tag === R)
            return;
          console.error(o);
        }
        var C = c ? ct(c) : null, b = C ? "The above error occurred in the <" + C + "> component:" : "The above error occurred in one of your React components:", k;
        if (e.tag === _)
          k = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var M = ct(e) || "Anonymous";
          k = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + M + ".");
        }
        var j = b + `
` + g + `

` + ("" + k);
        console.error(j);
      } catch ($) {
        setTimeout(function() {
          throw $;
        });
      }
    }
    var r3 = typeof WeakMap == "function" ? WeakMap : Map;
    function Pw(e, t, a) {
      var o = yu(Dn, a);
      o.tag = iS, o.payload = {
        element: null
      };
      var c = t.value;
      return o.callback = function() {
        Q4(c), iC(e, t);
      }, o;
    }
    function oC(e, t, a) {
      var o = yu(Dn, a);
      o.tag = iS;
      var c = e.type.getDerivedStateFromError;
      if (typeof c == "function") {
        var v = t.value;
        o.payload = function() {
          return c(v);
        }, o.callback = function() {
          Gx(e), iC(e, t);
        };
      }
      var g = e.stateNode;
      return g !== null && typeof g.componentDidCatch == "function" && (o.callback = function() {
        Gx(e), iC(e, t), typeof c != "function" && G4(this);
        var b = t.value, k = t.stack;
        this.componentDidCatch(b, {
          componentStack: k !== null ? k : ""
        }), typeof c != "function" && (Na(e.lanes, ut) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ct(e) || "Unknown"));
      }), o;
    }
    function Hw(e, t, a) {
      var o = e.pingCache, c;
      if (o === null ? (o = e.pingCache = new r3(), c = /* @__PURE__ */ new Set(), o.set(t, c)) : (c = o.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(t, c))), !c.has(a)) {
        c.add(a);
        var v = X4.bind(null, e, t, a);
        Ir && ch(e, a), t.then(v, v);
      }
    }
    function a3(e, t, a, o) {
      var c = e.updateQueue;
      if (c === null) {
        var v = /* @__PURE__ */ new Set();
        v.add(a), e.updateQueue = v;
      } else
        c.add(a);
    }
    function i3(e, t) {
      var a = e.tag;
      if ((e.mode & Bt) === ot && (a === T || a === U || a === G)) {
        var o = e.alternate;
        o ? (e.updateQueue = o.updateQueue, e.memoizedState = o.memoizedState, e.lanes = o.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Uw(e) {
      var t = e;
      do {
        if (t.tag === W && VM(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Iw(e, t, a, o, c) {
      if ((e.mode & Bt) === ot) {
        if (e === t)
          e.flags |= Or;
        else {
          if (e.flags |= yt, a.flags |= ac, a.flags &= ~(mf | Ga), a.tag === R) {
            var v = a.alternate;
            if (v === null)
              a.tag = Te;
            else {
              var g = yu(Dn, ut);
              g.tag = Ag, bs(a, g, ut);
            }
          }
          a.lanes = Lt(a.lanes, ut);
        }
        return e;
      }
      return e.flags |= Or, e.lanes = c, e;
    }
    function o3(e, t, a, o, c) {
      if (a.flags |= Ga, Ir && ch(e, c), o !== null && typeof o == "object" && typeof o.then == "function") {
        var v = o;
        i3(a), fa() && a.mode & Bt && M2();
        var g = Uw(t);
        if (g !== null) {
          g.flags &= ~Zn, Iw(g, t, a, e, c), g.mode & Bt && Hw(e, v, c), a3(g, e, v);
          return;
        } else {
          if (!Ju(c)) {
            Hw(e, v, c), IC();
            return;
          }
          var C = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          o = C;
        }
      } else if (fa() && a.mode & Bt) {
        M2();
        var b = Uw(t);
        if (b !== null) {
          (b.flags & Or) === nt && (b.flags |= Zn), Iw(b, t, a, e, c), Z0(Pc(o, a));
          return;
        }
      }
      o = Pc(o, a), I4(o);
      var k = t;
      do {
        switch (k.tag) {
          case _: {
            var M = o;
            k.flags |= Or;
            var j = Cr(c);
            k.lanes = Lt(k.lanes, j);
            var $ = Pw(k, M, j);
            uS(k, $);
            return;
          }
          case R:
            var Z = o, J = k.type, ie = k.stateNode;
            if ((k.flags & yt) === nt && (typeof J.getDerivedStateFromError == "function" || ie !== null && typeof ie.componentDidCatch == "function" && !Ux(ie))) {
              k.flags |= Or;
              var Ie = Cr(c);
              k.lanes = Lt(k.lanes, Ie);
              var at = oC(k, Z, Ie);
              uS(k, at);
              return;
            }
            break;
        }
        k = k.return;
      } while (k !== null);
    }
    function l3() {
      return null;
    }
    var Qp = u.ReactCurrentOwner, $o = !1, lC, Xp, uC, sC, cC, Hc, fC, fy;
    lC = {}, Xp = {}, uC = {}, sC = {}, cC = {}, Hc = !1, fC = {}, fy = {};
    function Ja(e, t, a, o) {
      e === null ? t.child = rw(t, null, a, o) : t.child = xd(t, e.child, a, o);
    }
    function u3(e, t, a, o) {
      t.child = xd(t, e.child, null, o), t.child = xd(t, null, a, o);
    }
    function $w(e, t, a, o, c) {
      if (t.type !== t.elementType) {
        var v = a.propTypes;
        v && Ao(
          v,
          o,
          // Resolved props
          "prop",
          nn(a)
        );
      }
      var g = a.render, C = t.ref, b, k;
      wd(t, c), dl(t);
      {
        if (Qp.current = t, sn(!0), b = Od(e, t, g, o, C, c), k = Nd(), t.mode & Gn) {
          Sr(!0);
          try {
            b = Od(e, t, g, o, C, c), k = Nd();
          } finally {
            Sr(!1);
          }
        }
        sn(!1);
      }
      return Gl(), e !== null && !$o ? (uw(e, t, c), Su(e, t, c)) : (fa() && k && K0(t), t.flags |= il, Ja(e, t, b, c), t.child);
    }
    function Fw(e, t, a, o, c) {
      if (e === null) {
        var v = a.type;
        if (vO(v) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var g = v;
          return g = Id(v), t.tag = G, t.type = g, pC(t, v), jw(e, t, g, o, c);
        }
        {
          var C = v.propTypes;
          C && Ao(
            C,
            o,
            // Resolved props
            "prop",
            nn(v)
          );
        }
        var b = XC(a.type, null, o, t, t.mode, c);
        return b.ref = t.ref, b.return = t, t.child = b, b;
      }
      {
        var k = a.type, M = k.propTypes;
        M && Ao(
          M,
          o,
          // Resolved props
          "prop",
          nn(k)
        );
      }
      var j = e.child, $ = CC(e, c);
      if (!$) {
        var Z = j.memoizedProps, J = a.compare;
        if (J = J !== null ? J : et, J(Z, o) && e.ref === t.ref)
          return Su(e, t, c);
      }
      t.flags |= il;
      var ie = jc(j, o);
      return ie.ref = t.ref, ie.return = t, t.child = ie, ie;
    }
    function jw(e, t, a, o, c) {
      if (t.type !== t.elementType) {
        var v = t.elementType;
        if (v.$$typeof === An) {
          var g = v, C = g._payload, b = g._init;
          try {
            v = b(C);
          } catch (j) {
            v = null;
          }
          var k = v && v.propTypes;
          k && Ao(
            k,
            o,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            nn(v)
          );
        }
      }
      if (e !== null) {
        var M = e.memoizedProps;
        if (et(M, o) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if ($o = !1, t.pendingProps = o = M, CC(e, c))
            (e.flags & ac) !== nt && ($o = !0);
          else
            return t.lanes = e.lanes, Su(e, t, c);
      }
      return dC(e, t, a, o, c);
    }
    function Vw(e, t, a) {
      var o = t.pendingProps, c = o.children, v = e !== null ? e.memoizedState : null;
      if (o.mode === "hidden" || ae)
        if ((t.mode & Bt) === ot) {
          var g = {
            baseLanes: ue,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = g, xy(t, a);
        } else if (Na(a, Oa)) {
          var j = {
            baseLanes: ue,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = j;
          var $ = v !== null ? v.baseLanes : a;
          xy(t, $);
        } else {
          var C = null, b;
          if (v !== null) {
            var k = v.baseLanes;
            b = Lt(k, a);
          } else
            b = a;
          t.lanes = t.childLanes = Oa;
          var M = {
            baseLanes: b,
            cachePool: C,
            transitions: null
          };
          return t.memoizedState = M, t.updateQueue = null, xy(t, b), null;
        }
      else {
        var Z;
        v !== null ? (Z = Lt(v.baseLanes, a), t.memoizedState = null) : Z = a, xy(t, Z);
      }
      return Ja(e, t, c, a), t.child;
    }
    function s3(e, t, a) {
      var o = t.pendingProps;
      return Ja(e, t, o, a), t.child;
    }
    function c3(e, t, a) {
      var o = t.pendingProps.children;
      return Ja(e, t, o, a), t.child;
    }
    function f3(e, t, a) {
      {
        t.flags |= Dt;
        {
          var o = t.stateNode;
          o.effectDuration = 0, o.passiveEffectDuration = 0;
        }
      }
      var c = t.pendingProps, v = c.children;
      return Ja(e, t, v, a), t.child;
    }
    function Bw(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= xa, t.flags |= Dv);
    }
    function dC(e, t, a, o, c) {
      if (t.type !== t.elementType) {
        var v = a.propTypes;
        v && Ao(
          v,
          o,
          // Resolved props
          "prop",
          nn(a)
        );
      }
      var g;
      {
        var C = gd(t, a, !0);
        g = yd(t, C);
      }
      var b, k;
      wd(t, c), dl(t);
      {
        if (Qp.current = t, sn(!0), b = Od(e, t, a, o, g, c), k = Nd(), t.mode & Gn) {
          Sr(!0);
          try {
            b = Od(e, t, a, o, g, c), k = Nd();
          } finally {
            Sr(!1);
          }
        }
        sn(!1);
      }
      return Gl(), e !== null && !$o ? (uw(e, t, c), Su(e, t, c)) : (fa() && k && K0(t), t.flags |= il, Ja(e, t, b, c), t.child);
    }
    function Ww(e, t, a, o, c) {
      {
        switch (_O(t)) {
          case !1: {
            var v = t.stateNode, g = t.type, C = new g(t.memoizedProps, v.context), b = C.state;
            v.updater.enqueueSetState(v, b, null);
            break;
          }
          case !0: {
            t.flags |= yt, t.flags |= Or;
            var k = new Error("Simulated error coming from DevTools"), M = Cr(c);
            t.lanes = Lt(t.lanes, M);
            var j = oC(t, Pc(k, t), M);
            uS(t, j);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var $ = a.propTypes;
          $ && Ao(
            $,
            o,
            // Resolved props
            "prop",
            nn(a)
          );
        }
      }
      var Z;
      wl(a) ? (Z = !0, wg(t)) : Z = !1, wd(t, c);
      var J = t.stateNode, ie;
      J === null ? (vy(e, t), Z2(t, a, o), CS(t, a, o, c), ie = !0) : e === null ? ie = HM(t, a, o, c) : ie = UM(e, t, a, o, c);
      var Ie = vC(e, t, a, ie, Z, c);
      {
        var at = t.stateNode;
        ie && at.props !== o && (Hc || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ct(t) || "a component"), Hc = !0);
      }
      return Ie;
    }
    function vC(e, t, a, o, c, v) {
      Bw(e, t);
      var g = (t.flags & yt) !== nt;
      if (!o && !g)
        return c && T2(t, a, !1), Su(e, t, v);
      var C = t.stateNode;
      Qp.current = t;
      var b;
      if (g && typeof a.getDerivedStateFromError != "function")
        b = null, zw();
      else {
        dl(t);
        {
          if (sn(!0), b = C.render(), t.mode & Gn) {
            Sr(!0);
            try {
              C.render();
            } finally {
              Sr(!1);
            }
          }
          sn(!1);
        }
        Gl();
      }
      return t.flags |= il, e !== null && g ? u3(e, t, b, v) : Ja(e, t, b, v), t.memoizedState = C.state, c && T2(t, a, !0), t.child;
    }
    function Kw(e) {
      var t = e.stateNode;
      t.pendingContext ? w2(e, t.pendingContext, t.pendingContext !== t.context) : t.context && w2(e, t.context, !1), RS(e, t.containerInfo);
    }
    function d3(e, t, a) {
      if (Kw(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var o = t.pendingProps, c = t.memoizedState, v = c.element;
      B2(e, t), Ug(t, o, null, a);
      var g = t.memoizedState;
      t.stateNode;
      var C = g.element;
      if (c.isDehydrated) {
        var b = {
          element: C,
          isDehydrated: !1,
          cache: g.cache,
          pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
          transitions: g.transitions
        }, k = t.updateQueue;
        if (k.baseState = b, t.memoizedState = b, t.flags & Zn) {
          var M = Pc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return Gw(e, t, C, a, M);
        } else if (C !== v) {
          var j = Pc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Gw(e, t, C, a, j);
        } else {
          mM(t);
          var $ = rw(t, null, C, a);
          t.child = $;
          for (var Z = $; Z; )
            Z.flags = Z.flags & ~Pn | ci, Z = Z.sibling;
        }
      } else {
        if (bd(), C === v)
          return Su(e, t, a);
        Ja(e, t, C, a);
      }
      return t.child;
    }
    function Gw(e, t, a, o, c) {
      return bd(), Z0(c), t.flags |= Zn, Ja(e, t, a, o), t.child;
    }
    function v3(e, t, a) {
      iw(t), e === null && q0(t);
      var o = t.type, c = t.pendingProps, v = e !== null ? e.memoizedProps : null, g = c.children, C = D0(o, c);
      return C ? g = null : v !== null && D0(o, v) && (t.flags |= Sn), Bw(e, t), Ja(e, t, g, a), t.child;
    }
    function p3(e, t) {
      return e === null && q0(t), null;
    }
    function h3(e, t, a, o) {
      vy(e, t);
      var c = t.pendingProps, v = a, g = v._payload, C = v._init, b = C(g);
      t.type = b;
      var k = t.tag = pO(b), M = Ho(b, c), j;
      switch (k) {
        case T:
          return pC(t, b), t.type = b = Id(b), j = dC(null, t, b, M, o), j;
        case R:
          return t.type = b = BC(b), j = Ww(null, t, b, M, o), j;
        case U:
          return t.type = b = WC(b), j = $w(null, t, b, M, o), j;
        case re: {
          if (t.type !== t.elementType) {
            var $ = b.propTypes;
            $ && Ao(
              $,
              M,
              // Resolved for outer only
              "prop",
              nn(b)
            );
          }
          return j = Fw(
            null,
            t,
            b,
            Ho(b.type, M),
            // The inner type can have defaults too
            o
          ), j;
        }
      }
      var Z = "";
      throw b !== null && typeof b == "object" && b.$$typeof === An && (Z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + b + ". " + ("Lazy element type must resolve to a class or function." + Z));
    }
    function m3(e, t, a, o, c) {
      vy(e, t), t.tag = R;
      var v;
      return wl(a) ? (v = !0, wg(t)) : v = !1, wd(t, c), Z2(t, a, o), CS(t, a, o, c), vC(null, t, a, !0, v, c);
    }
    function g3(e, t, a, o) {
      vy(e, t);
      var c = t.pendingProps, v;
      {
        var g = gd(t, a, !1);
        v = yd(t, g);
      }
      wd(t, o);
      var C, b;
      dl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var k = nn(a) || "Unknown";
          lC[k] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", k, k), lC[k] = !0);
        }
        t.mode & Gn && Po.recordLegacyContextWarning(t, null), sn(!0), Qp.current = t, C = Od(null, t, a, c, v, o), b = Nd(), sn(!1);
      }
      if (Gl(), t.flags |= il, typeof C == "object" && C !== null && typeof C.render == "function" && C.$$typeof === void 0) {
        var M = nn(a) || "Unknown";
        Xp[M] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", M, M, M), Xp[M] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof C == "object" && C !== null && typeof C.render == "function" && C.$$typeof === void 0
      ) {
        {
          var j = nn(a) || "Unknown";
          Xp[j] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", j, j, j), Xp[j] = !0);
        }
        t.tag = R, t.memoizedState = null, t.updateQueue = null;
        var $ = !1;
        return wl(a) ? ($ = !0, wg(t)) : $ = !1, t.memoizedState = C.state !== null && C.state !== void 0 ? C.state : null, lS(t), q2(t, C), CS(t, a, c, o), vC(null, t, a, !0, $, o);
      } else {
        if (t.tag = T, t.mode & Gn) {
          Sr(!0);
          try {
            C = Od(null, t, a, c, v, o), b = Nd();
          } finally {
            Sr(!1);
          }
        }
        return fa() && b && K0(t), Ja(null, t, C, o), pC(t, a), t.child;
      }
    }
    function pC(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", o = Zr();
          o && (a += `

Check the render method of \`` + o + "`.");
          var c = o || "", v = e._debugSource;
          v && (c = v.fileName + ":" + v.lineNumber), cC[c] || (cC[c] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var g = nn(t) || "Unknown";
          sC[g] || (h("%s: Function components do not support getDerivedStateFromProps.", g), sC[g] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var C = nn(t) || "Unknown";
          uC[C] || (h("%s: Function components do not support contextType.", C), uC[C] = !0);
        }
      }
    }
    var hC = {
      dehydrated: null,
      treeContext: null,
      retryLane: rn
    };
    function mC(e) {
      return {
        baseLanes: e,
        cachePool: l3(),
        transitions: null
      };
    }
    function y3(e, t) {
      var a = null;
      return {
        baseLanes: Lt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function S3(e, t, a, o) {
      if (t !== null) {
        var c = t.memoizedState;
        if (c === null)
          return !1;
      }
      return MS(e, Fp);
    }
    function C3(e, t) {
      return es(e.childLanes, t);
    }
    function Yw(e, t, a) {
      var o = t.pendingProps;
      MO(t) && (t.flags |= yt);
      var c = Uo.current, v = !1, g = (t.flags & yt) !== nt;
      if (g || S3(c, e) ? (v = !0, t.flags &= ~yt) : (e === null || e.memoizedState !== null) && (c = jM(c, lw)), c = Rd(c), ws(t, c), e === null) {
        q0(t);
        var C = t.memoizedState;
        if (C !== null) {
          var b = C.dehydrated;
          if (b !== null)
            return T3(t, b);
        }
        var k = o.children, M = o.fallback;
        if (v) {
          var j = b3(t, k, M, a), $ = t.child;
          return $.memoizedState = mC(a), t.memoizedState = hC, j;
        } else
          return gC(t, k);
      } else {
        var Z = e.memoizedState;
        if (Z !== null) {
          var J = Z.dehydrated;
          if (J !== null)
            return R3(e, t, g, o, J, Z, a);
        }
        if (v) {
          var ie = o.fallback, Ie = o.children, at = w3(e, t, Ie, ie, a), qe = t.child, on = e.child.memoizedState;
          return qe.memoizedState = on === null ? mC(a) : y3(on, a), qe.childLanes = C3(e, a), t.memoizedState = hC, at;
        } else {
          var Qt = o.children, Y = E3(e, t, Qt, a);
          return t.memoizedState = null, Y;
        }
      }
    }
    function gC(e, t, a) {
      var o = e.mode, c = {
        mode: "visible",
        children: t
      }, v = yC(c, o);
      return v.return = e, e.child = v, v;
    }
    function b3(e, t, a, o) {
      var c = e.mode, v = e.child, g = {
        mode: "hidden",
        children: t
      }, C, b;
      return (c & Bt) === ot && v !== null ? (C = v, C.childLanes = ue, C.pendingProps = g, e.mode & lt && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = 0, C.treeBaseDuration = 0), b = Ns(a, c, o, null)) : (C = yC(g, c), b = Ns(a, c, o, null)), C.return = e, b.return = e, C.sibling = b, e.child = C, b;
    }
    function yC(e, t, a) {
      return Qx(e, t, ue, null);
    }
    function Qw(e, t) {
      return jc(e, t);
    }
    function E3(e, t, a, o) {
      var c = e.child, v = c.sibling, g = Qw(c, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Bt) === ot && (g.lanes = o), g.return = t, g.sibling = null, v !== null) {
        var C = t.deletions;
        C === null ? (t.deletions = [v], t.flags |= yn) : C.push(v);
      }
      return t.child = g, g;
    }
    function w3(e, t, a, o, c) {
      var v = t.mode, g = e.child, C = g.sibling, b = {
        mode: "hidden",
        children: a
      }, k;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (v & Bt) === ot && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== g
      ) {
        var M = t.child;
        k = M, k.childLanes = ue, k.pendingProps = b, t.mode & lt && (k.actualDuration = 0, k.actualStartTime = -1, k.selfBaseDuration = g.selfBaseDuration, k.treeBaseDuration = g.treeBaseDuration), t.deletions = null;
      } else
        k = Qw(g, b), k.subtreeFlags = g.subtreeFlags & Ur;
      var j;
      return C !== null ? j = jc(C, o) : (j = Ns(o, v, c, null), j.flags |= Pn), j.return = t, k.return = t, k.sibling = j, t.child = k, j;
    }
    function dy(e, t, a, o) {
      o !== null && Z0(o), xd(t, e.child, null, a);
      var c = t.pendingProps, v = c.children, g = gC(t, v);
      return g.flags |= Pn, t.memoizedState = null, g;
    }
    function x3(e, t, a, o, c) {
      var v = t.mode, g = {
        mode: "visible",
        children: a
      }, C = yC(g, v), b = Ns(o, v, c, null);
      return b.flags |= Pn, C.return = t, b.return = t, C.sibling = b, t.child = C, (t.mode & Bt) !== ot && xd(t, e.child, null, c), b;
    }
    function T3(e, t, a) {
      return (e.mode & Bt) === ot ? (h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ut) : P0(t) ? e.lanes = Xl : e.lanes = Oa, null;
    }
    function R3(e, t, a, o, c, v, g) {
      if (a)
        if (t.flags & Zn) {
          t.flags &= ~Zn;
          var Y = aC(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return dy(e, t, g, Y);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= yt, null;
          var oe = o.children, Q = o.fallback, ye = x3(e, t, oe, Q, g), $e = t.child;
          return $e.memoizedState = mC(g), t.memoizedState = hC, ye;
        }
      else {
        if (pM(), (t.mode & Bt) === ot)
          return dy(
            e,
            t,
            g,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (P0(c)) {
          var C, b, k;
          {
            var M = N_(c);
            C = M.digest, b = M.message, k = M.stack;
          }
          var j;
          b ? j = new Error(b) : j = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var $ = aC(j, C, k);
          return dy(e, t, g, $);
        }
        var Z = Na(g, e.childLanes);
        if ($o || Z) {
          var J = wy();
          if (J !== null) {
            var ie = r0(J, g);
            if (ie !== rn && ie !== v.retryLane) {
              v.retryLane = ie;
              var Ie = Dn;
              Ci(e, ie), Yr(J, e, ie, Ie);
            }
          }
          IC();
          var at = aC(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return dy(e, t, g, at);
        } else if (g2(c)) {
          t.flags |= yt, t.child = e.child;
          var qe = q4.bind(null, e);
          return D_(c, qe), null;
        } else {
          gM(t, c, v.treeContext);
          var on = o.children, Qt = gC(t, on);
          return Qt.flags |= ci, Qt;
        }
      }
    }
    function Xw(e, t, a) {
      e.lanes = Lt(e.lanes, t);
      var o = e.alternate;
      o !== null && (o.lanes = Lt(o.lanes, t)), rS(e.return, t, a);
    }
    function k3(e, t, a) {
      for (var o = t; o !== null; ) {
        if (o.tag === W) {
          var c = o.memoizedState;
          c !== null && Xw(o, a, e);
        } else if (o.tag === ge)
          Xw(o, a, e);
        else if (o.child !== null) {
          o.child.return = o, o = o.child;
          continue;
        }
        if (o === e)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === e)
            return;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }
    function _3(e) {
      for (var t = e, a = null; t !== null; ) {
        var o = t.alternate;
        o !== null && Wg(o) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function M3(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !fC[e])
        if (fC[e] = !0, typeof e == "string")
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
    function O3(e, t) {
      e !== void 0 && !fy[e] && (e !== "collapsed" && e !== "hidden" ? (fy[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (fy[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function qw(e, t) {
      {
        var a = _r(e), o = !a && typeof Xr(e) == "function";
        if (a || o) {
          var c = a ? "array" : "iterable";
          return h("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", c, t, c), !1;
        }
      }
      return !0;
    }
    function N3(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (_r(e)) {
          for (var a = 0; a < e.length; a++)
            if (!qw(e[a], a))
              return;
        } else {
          var o = Xr(e);
          if (typeof o == "function") {
            var c = o.call(e);
            if (c)
              for (var v = c.next(), g = 0; !v.done; v = c.next()) {
                if (!qw(v.value, g))
                  return;
                g++;
              }
          } else
            h('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function SC(e, t, a, o, c) {
      var v = e.memoizedState;
      v === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: o,
        tail: a,
        tailMode: c
      } : (v.isBackwards = t, v.rendering = null, v.renderingStartTime = 0, v.last = o, v.tail = a, v.tailMode = c);
    }
    function Zw(e, t, a) {
      var o = t.pendingProps, c = o.revealOrder, v = o.tail, g = o.children;
      M3(c), O3(v, c), N3(g, c), Ja(e, t, g, a);
      var C = Uo.current, b = MS(C, Fp);
      if (b)
        C = OS(C, Fp), t.flags |= yt;
      else {
        var k = e !== null && (e.flags & yt) !== nt;
        k && k3(t, t.child, a), C = Rd(C);
      }
      if (ws(t, C), (t.mode & Bt) === ot)
        t.memoizedState = null;
      else
        switch (c) {
          case "forwards": {
            var M = _3(t.child), j;
            M === null ? (j = t.child, t.child = null) : (j = M.sibling, M.sibling = null), SC(
              t,
              !1,
              // isBackwards
              j,
              M,
              v
            );
            break;
          }
          case "backwards": {
            var $ = null, Z = t.child;
            for (t.child = null; Z !== null; ) {
              var J = Z.alternate;
              if (J !== null && Wg(J) === null) {
                t.child = Z;
                break;
              }
              var ie = Z.sibling;
              Z.sibling = $, $ = Z, Z = ie;
            }
            SC(
              t,
              !0,
              // isBackwards
              $,
              null,
              // last
              v
            );
            break;
          }
          case "together": {
            SC(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function D3(e, t, a) {
      RS(t, t.stateNode.containerInfo);
      var o = t.pendingProps;
      return e === null ? t.child = xd(t, null, o, a) : Ja(e, t, o, a), t.child;
    }
    var Jw = !1;
    function L3(e, t, a) {
      var o = t.type, c = o._context, v = t.pendingProps, g = t.memoizedProps, C = v.value;
      {
        "value" in v || Jw || (Jw = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var b = t.type.propTypes;
        b && Ao(b, v, "prop", "Context.Provider");
      }
      if ($2(t, c, C), g !== null) {
        var k = g.value;
        if (Ve(k, C)) {
          if (g.children === v.children && !bg())
            return Su(e, t, a);
        } else
          kM(t, c, a);
      }
      var M = v.children;
      return Ja(e, t, M, a), t.child;
    }
    var ex = !1;
    function A3(e, t, a) {
      var o = t.type;
      o._context === void 0 ? o !== o.Consumer && (ex || (ex = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : o = o._context;
      var c = t.pendingProps, v = c.children;
      typeof v != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), wd(t, a);
      var g = zr(o);
      dl(t);
      var C;
      return Qp.current = t, sn(!0), C = v(g), sn(!1), Gl(), t.flags |= il, Ja(e, t, C, a), t.child;
    }
    function qp() {
      $o = !0;
    }
    function vy(e, t) {
      (t.mode & Bt) === ot && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Pn);
    }
    function Su(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), zw(), sh(t.lanes), Na(a, t.childLanes) ? (IM(e, t), t.child) : null;
    }
    function z3(e, t, a) {
      {
        var o = t.return;
        if (o === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === o.child)
          o.child = a;
        else {
          var c = o.child;
          if (c === null)
            throw new Error("Expected parent to have a child.");
          for (; c.sibling !== t; )
            if (c = c.sibling, c === null)
              throw new Error("Expected to find the previous sibling.");
          c.sibling = a;
        }
        var v = o.deletions;
        return v === null ? (o.deletions = [e], o.flags |= yn) : v.push(e), a.flags |= Pn, a;
      }
    }
    function CC(e, t) {
      var a = e.lanes;
      return !!Na(a, t);
    }
    function P3(e, t, a) {
      switch (t.tag) {
        case _:
          Kw(t), t.stateNode, bd();
          break;
        case L:
          iw(t);
          break;
        case R: {
          var o = t.type;
          wl(o) && wg(t);
          break;
        }
        case N:
          RS(t, t.stateNode.containerInfo);
          break;
        case V: {
          var c = t.memoizedProps.value, v = t.type._context;
          $2(t, v, c);
          break;
        }
        case I:
          {
            var g = Na(a, t.childLanes);
            g && (t.flags |= Dt);
            {
              var C = t.stateNode;
              C.effectDuration = 0, C.passiveEffectDuration = 0;
            }
          }
          break;
        case W: {
          var b = t.memoizedState;
          if (b !== null) {
            if (b.dehydrated !== null)
              return ws(t, Rd(Uo.current)), t.flags |= yt, null;
            var k = t.child, M = k.childLanes;
            if (Na(a, M))
              return Yw(e, t, a);
            ws(t, Rd(Uo.current));
            var j = Su(e, t, a);
            return j !== null ? j.sibling : null;
          } else
            ws(t, Rd(Uo.current));
          break;
        }
        case ge: {
          var $ = (e.flags & yt) !== nt, Z = Na(a, t.childLanes);
          if ($) {
            if (Z)
              return Zw(e, t, a);
            t.flags |= yt;
          }
          var J = t.memoizedState;
          if (J !== null && (J.rendering = null, J.tail = null, J.lastEffect = null), ws(t, Uo.current), Z)
            break;
          return null;
        }
        case ne:
        case fe:
          return t.lanes = ue, Vw(e, t, a);
      }
      return Su(e, t, a);
    }
    function tx(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return z3(e, t, XC(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var o = e.memoizedProps, c = t.pendingProps;
        if (o !== c || bg() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          $o = !0;
        else {
          var v = CC(e, a);
          if (!v && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & yt) === nt)
            return $o = !1, P3(e, t, a);
          (e.flags & ac) !== nt ? $o = !0 : $o = !1;
        }
      } else if ($o = !1, fa() && uM(t)) {
        var g = t.index, C = sM();
        _2(t, C, g);
      }
      switch (t.lanes = ue, t.tag) {
        case O:
          return g3(e, t, t.type, a);
        case se: {
          var b = t.elementType;
          return h3(e, t, b, a);
        }
        case T: {
          var k = t.type, M = t.pendingProps, j = t.elementType === k ? M : Ho(k, M);
          return dC(e, t, k, j, a);
        }
        case R: {
          var $ = t.type, Z = t.pendingProps, J = t.elementType === $ ? Z : Ho($, Z);
          return Ww(e, t, $, J, a);
        }
        case _:
          return d3(e, t, a);
        case L:
          return v3(e, t, a);
        case z:
          return p3(e, t);
        case W:
          return Yw(e, t, a);
        case N:
          return D3(e, t, a);
        case U: {
          var ie = t.type, Ie = t.pendingProps, at = t.elementType === ie ? Ie : Ho(ie, Ie);
          return $w(e, t, ie, at, a);
        }
        case H:
          return s3(e, t, a);
        case A:
          return c3(e, t, a);
        case I:
          return f3(e, t, a);
        case V:
          return L3(e, t, a);
        case q:
          return A3(e, t, a);
        case re: {
          var qe = t.type, on = t.pendingProps, Qt = Ho(qe, on);
          if (t.type !== t.elementType) {
            var Y = qe.propTypes;
            Y && Ao(
              Y,
              Qt,
              // Resolved for outer only
              "prop",
              nn(qe)
            );
          }
          return Qt = Ho(qe.type, Qt), Fw(e, t, qe, Qt, a);
        }
        case G:
          return jw(e, t, t.type, t.pendingProps, a);
        case Te: {
          var oe = t.type, Q = t.pendingProps, ye = t.elementType === oe ? Q : Ho(oe, Q);
          return m3(e, t, oe, ye, a);
        }
        case ge:
          return Zw(e, t, a);
        case Ee:
          break;
        case ne:
          return Vw(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Dd(e) {
      e.flags |= Dt;
    }
    function nx(e) {
      e.flags |= xa, e.flags |= Dv;
    }
    var rx, bC, ax, ix;
    rx = function(e, t, a, o) {
      for (var c = t.child; c !== null; ) {
        if (c.tag === L || c.tag === z)
          i_(e, c.stateNode);
        else if (c.tag !== N) {
          if (c.child !== null) {
            c.child.return = c, c = c.child;
            continue;
          }
        }
        if (c === t)
          return;
        for (; c.sibling === null; ) {
          if (c.return === null || c.return === t)
            return;
          c = c.return;
        }
        c.sibling.return = c.return, c = c.sibling;
      }
    }, bC = function(e, t) {
    }, ax = function(e, t, a, o, c) {
      var v = e.memoizedProps;
      if (v !== o) {
        var g = t.stateNode, C = kS(), b = l_(g, a, v, o, c, C);
        t.updateQueue = b, b && Dd(t);
      }
    }, ix = function(e, t, a, o) {
      a !== o && Dd(t);
    };
    function Zp(e, t) {
      if (!fa())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, o = null; a !== null; )
              a.alternate !== null && (o = a), a = a.sibling;
            o === null ? e.tail = null : o.sibling = null;
            break;
          }
          case "collapsed": {
            for (var c = e.tail, v = null; c !== null; )
              c.alternate !== null && (v = c), c = c.sibling;
            v === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : v.sibling = null;
            break;
          }
        }
    }
    function va(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = ue, o = nt;
      if (t) {
        if ((e.mode & lt) !== ot) {
          for (var b = e.selfBaseDuration, k = e.child; k !== null; )
            a = Lt(a, Lt(k.lanes, k.childLanes)), o |= k.subtreeFlags & Ur, o |= k.flags & Ur, b += k.treeBaseDuration, k = k.sibling;
          e.treeBaseDuration = b;
        } else
          for (var M = e.child; M !== null; )
            a = Lt(a, Lt(M.lanes, M.childLanes)), o |= M.subtreeFlags & Ur, o |= M.flags & Ur, M.return = e, M = M.sibling;
        e.subtreeFlags |= o;
      } else {
        if ((e.mode & lt) !== ot) {
          for (var c = e.actualDuration, v = e.selfBaseDuration, g = e.child; g !== null; )
            a = Lt(a, Lt(g.lanes, g.childLanes)), o |= g.subtreeFlags, o |= g.flags, c += g.actualDuration, v += g.treeBaseDuration, g = g.sibling;
          e.actualDuration = c, e.treeBaseDuration = v;
        } else
          for (var C = e.child; C !== null; )
            a = Lt(a, Lt(C.lanes, C.childLanes)), o |= C.subtreeFlags, o |= C.flags, C.return = e, C = C.sibling;
        e.subtreeFlags |= o;
      }
      return e.childLanes = a, t;
    }
    function H3(e, t, a) {
      if (EM() && (t.mode & Bt) !== ot && (t.flags & yt) === nt)
        return z2(t), bd(), t.flags |= Zn | Ga | Or, !1;
      var o = _g(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!o)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (CM(t), va(t), (t.mode & lt) !== ot) {
            var c = a !== null;
            if (c) {
              var v = t.child;
              v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (bd(), (t.flags & yt) === nt && (t.memoizedState = null), t.flags |= Dt, va(t), (t.mode & lt) !== ot) {
            var g = a !== null;
            if (g) {
              var C = t.child;
              C !== null && (t.treeBaseDuration -= C.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return P2(), !0;
    }
    function ox(e, t, a) {
      var o = t.pendingProps;
      switch (G0(t), t.tag) {
        case O:
        case se:
        case G:
        case T:
        case U:
        case H:
        case A:
        case I:
        case q:
        case re:
          return va(t), null;
        case R: {
          var c = t.type;
          return wl(c) && Eg(t), va(t), null;
        }
        case _: {
          var v = t.stateNode;
          if (Td(t), V0(t), DS(), v.pendingContext && (v.context = v.pendingContext, v.pendingContext = null), e === null || e.child === null) {
            var g = _g(t);
            if (g)
              Dd(t);
            else if (e !== null) {
              var C = e.memoizedState;
              // Check if this is a client root
              (!C.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Zn) !== nt) && (t.flags |= si, P2());
            }
          }
          return bC(e, t), va(t), null;
        }
        case L: {
          _S(t);
          var b = aw(), k = t.type;
          if (e !== null && t.stateNode != null)
            ax(e, t, k, o, b), e.ref !== t.ref && nx(t);
          else {
            if (!o) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return va(t), null;
            }
            var M = kS(), j = _g(t);
            if (j)
              yM(t, b, M) && Dd(t);
            else {
              var $ = a_(k, o, b, M, t);
              rx($, t, !1, !1), t.stateNode = $, o_($, k, o, b) && Dd(t);
            }
            t.ref !== null && nx(t);
          }
          return va(t), null;
        }
        case z: {
          var Z = o;
          if (e && t.stateNode != null) {
            var J = e.memoizedProps;
            ix(e, t, J, Z);
          } else {
            if (typeof Z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ie = aw(), Ie = kS(), at = _g(t);
            at ? SM(t) && Dd(t) : t.stateNode = u_(Z, ie, Ie, t);
          }
          return va(t), null;
        }
        case W: {
          kd(t);
          var qe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var on = H3(e, t, qe);
            if (!on)
              return t.flags & Or ? t : null;
          }
          if ((t.flags & yt) !== nt)
            return t.lanes = a, (t.mode & lt) !== ot && rC(t), t;
          var Qt = qe !== null, Y = e !== null && e.memoizedState !== null;
          if (Qt !== Y && Qt) {
            var oe = t.child;
            if (oe.flags |= ol, (t.mode & Bt) !== ot) {
              var Q = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ze);
              Q || MS(Uo.current, lw) ? U4() : IC();
            }
          }
          var ye = t.updateQueue;
          if (ye !== null && (t.flags |= Dt), va(t), (t.mode & lt) !== ot && Qt) {
            var $e = t.child;
            $e !== null && (t.treeBaseDuration -= $e.treeBaseDuration);
          }
          return null;
        }
        case N:
          return Td(t), bC(e, t), e === null && tM(t.stateNode.containerInfo), va(t), null;
        case V:
          var Ae = t.type._context;
          return nS(Ae, t), va(t), null;
        case Te: {
          var mt = t.type;
          return wl(mt) && Eg(t), va(t), null;
        }
        case ge: {
          kd(t);
          var Tt = t.memoizedState;
          if (Tt === null)
            return va(t), null;
          var xn = (t.flags & yt) !== nt, hn = Tt.rendering;
          if (hn === null)
            if (xn)
              Zp(Tt, !1);
            else {
              var xr = $4() && (e === null || (e.flags & yt) === nt);
              if (!xr)
                for (var mn = t.child; mn !== null; ) {
                  var gr = Wg(mn);
                  if (gr !== null) {
                    xn = !0, t.flags |= yt, Zp(Tt, !1);
                    var za = gr.updateQueue;
                    return za !== null && (t.updateQueue = za, t.flags |= Dt), t.subtreeFlags = nt, $M(t, a), ws(t, OS(Uo.current, Fp)), t.child;
                  }
                  mn = mn.sibling;
                }
              Tt.tail !== null && Kn() > kx() && (t.flags |= yt, xn = !0, Zp(Tt, !1), t.lanes = Wv);
            }
          else {
            if (!xn) {
              var ya = Wg(hn);
              if (ya !== null) {
                t.flags |= yt, xn = !0;
                var Ii = ya.updateQueue;
                if (Ii !== null && (t.updateQueue = Ii, t.flags |= Dt), Zp(Tt, !0), Tt.tail === null && Tt.tailMode === "hidden" && !hn.alternate && !fa())
                  return va(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Kn() * 2 - Tt.renderingStartTime > kx() && a !== Oa && (t.flags |= yt, xn = !0, Zp(Tt, !1), t.lanes = Wv);
            }
            if (Tt.isBackwards)
              hn.sibling = t.child, t.child = hn;
            else {
              var ni = Tt.last;
              ni !== null ? ni.sibling = hn : t.child = hn, Tt.last = hn;
            }
          }
          if (Tt.tail !== null) {
            var ri = Tt.tail;
            Tt.rendering = ri, Tt.tail = ri.sibling, Tt.renderingStartTime = Kn(), ri.sibling = null;
            var Pa = Uo.current;
            return xn ? Pa = OS(Pa, Fp) : Pa = Rd(Pa), ws(t, Pa), ri;
          }
          return va(t), null;
        }
        case Ee:
          break;
        case ne:
        case fe: {
          UC(t);
          var xu = t.memoizedState, $d = xu !== null;
          if (e !== null) {
            var ph = e.memoizedState, Nl = ph !== null;
            Nl !== $d && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ae && (t.flags |= ol);
          }
          return !$d || (t.mode & Bt) === ot ? va(t) : Na(Ol, Oa) && (va(t), t.subtreeFlags & (Pn | Dt) && (t.flags |= ol)), null;
        }
        case Ce:
          return null;
        case we:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function U3(e, t, a) {
      switch (G0(t), t.tag) {
        case R: {
          var o = t.type;
          wl(o) && Eg(t);
          var c = t.flags;
          return c & Or ? (t.flags = c & ~Or | yt, (t.mode & lt) !== ot && rC(t), t) : null;
        }
        case _: {
          t.stateNode, Td(t), V0(t), DS();
          var v = t.flags;
          return (v & Or) !== nt && (v & yt) === nt ? (t.flags = v & ~Or | yt, t) : null;
        }
        case L:
          return _S(t), null;
        case W: {
          kd(t);
          var g = t.memoizedState;
          if (g !== null && g.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            bd();
          }
          var C = t.flags;
          return C & Or ? (t.flags = C & ~Or | yt, (t.mode & lt) !== ot && rC(t), t) : null;
        }
        case ge:
          return kd(t), null;
        case N:
          return Td(t), null;
        case V:
          var b = t.type._context;
          return nS(b, t), null;
        case ne:
        case fe:
          return UC(t), null;
        case Ce:
          return null;
        default:
          return null;
      }
    }
    function lx(e, t, a) {
      switch (G0(t), t.tag) {
        case R: {
          var o = t.type.childContextTypes;
          o != null && Eg(t);
          break;
        }
        case _: {
          t.stateNode, Td(t), V0(t), DS();
          break;
        }
        case L: {
          _S(t);
          break;
        }
        case N:
          Td(t);
          break;
        case W:
          kd(t);
          break;
        case ge:
          kd(t);
          break;
        case V:
          var c = t.type._context;
          nS(c, t);
          break;
        case ne:
        case fe:
          UC(t);
          break;
      }
    }
    var ux = null;
    ux = /* @__PURE__ */ new Set();
    var py = !1, pa = !1, I3 = typeof WeakSet == "function" ? WeakSet : Set, Be = null, Ld = null, Ad = null;
    function $3(e) {
      Wl(null, function() {
        throw e;
      }), Ov();
    }
    var F3 = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & lt)
        try {
          _l(), t.componentWillUnmount();
        } finally {
          kl(e);
        }
      else
        t.componentWillUnmount();
    };
    function sx(e, t) {
      try {
        Rs(jr, e);
      } catch (a) {
        $n(e, t, a);
      }
    }
    function EC(e, t, a) {
      try {
        F3(e, a);
      } catch (o) {
        $n(e, t, o);
      }
    }
    function j3(e, t, a) {
      try {
        a.componentDidMount();
      } catch (o) {
        $n(e, t, o);
      }
    }
    function cx(e, t) {
      try {
        dx(e);
      } catch (a) {
        $n(e, t, a);
      }
    }
    function zd(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var o;
          try {
            if (it && Rt && e.mode & lt)
              try {
                _l(), o = a(null);
              } finally {
                kl(e);
              }
            else
              o = a(null);
          } catch (c) {
            $n(e, t, c);
          }
          typeof o == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ct(e));
        } else
          a.current = null;
    }
    function hy(e, t, a) {
      try {
        a();
      } catch (o) {
        $n(e, t, o);
      }
    }
    var fx = !1;
    function V3(e, t) {
      n_(e.containerInfo), Be = t, B3();
      var a = fx;
      return fx = !1, a;
    }
    function B3() {
      for (; Be !== null; ) {
        var e = Be, t = e.child;
        (e.subtreeFlags & Ku) !== nt && t !== null ? (t.return = e, Be = t) : W3();
      }
    }
    function W3() {
      for (; Be !== null; ) {
        var e = Be;
        be(e);
        try {
          K3(e);
        } catch (a) {
          $n(e, e.return, a);
        }
        Wn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Be = t;
          return;
        }
        Be = e.return;
      }
    }
    function K3(e) {
      var t = e.alternate, a = e.flags;
      if ((a & si) !== nt) {
        switch (be(e), e.tag) {
          case T:
          case U:
          case G:
            break;
          case R: {
            if (t !== null) {
              var o = t.memoizedProps, c = t.memoizedState, v = e.stateNode;
              e.type === e.elementType && !Hc && (v.props !== e.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(e) || "instance"), v.state !== e.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(e) || "instance"));
              var g = v.getSnapshotBeforeUpdate(e.elementType === e.type ? o : Ho(e.type, o), c);
              {
                var C = ux;
                g === void 0 && !C.has(e.type) && (C.add(e.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ct(e)));
              }
              v.__reactInternalSnapshotBeforeUpdate = g;
            }
            break;
          }
          case _: {
            {
              var b = e.stateNode;
              k_(b.containerInfo);
            }
            break;
          }
          case L:
          case z:
          case N:
          case Te:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Wn();
      }
    }
    function Fo(e, t, a) {
      var o = t.updateQueue, c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var v = c.next, g = v;
        do {
          if ((g.tag & e) === e) {
            var C = g.destroy;
            g.destroy = void 0, C !== void 0 && ((e & da) !== bi ? xf(t) : (e & jr) !== bi && Tf(t), (e & xl) !== bi && fh(!0), hy(t, a, C), (e & xl) !== bi && fh(!1), (e & da) !== bi ? km() : (e & jr) !== bi && Gu());
          }
          g = g.next;
        } while (g !== v);
      }
    }
    function Rs(e, t) {
      var a = t.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var c = o.next, v = c;
        do {
          if ((v.tag & e) === e) {
            (e & da) !== bi ? Rm(t) : (e & jr) !== bi && _m(t);
            var g = v.create;
            (e & xl) !== bi && fh(!0), v.destroy = g(), (e & xl) !== bi && fh(!1), (e & da) !== bi ? jv() : (e & jr) !== bi && Mm();
            {
              var C = v.destroy;
              if (C !== void 0 && typeof C != "function") {
                var b = void 0;
                (v.tag & jr) !== nt ? b = "useLayoutEffect" : (v.tag & xl) !== nt ? b = "useInsertionEffect" : b = "useEffect";
                var k = void 0;
                C === null ? k = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof C.then == "function" ? k = `

It looks like you wrote ` + b + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + b + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : k = " You returned: " + C, h("%s must not return anything besides a function, which is used for clean-up.%s", b, k);
              }
            }
          }
          v = v.next;
        } while (v !== c);
      }
    }
    function G3(e, t) {
      if ((t.flags & Dt) !== nt)
        switch (t.tag) {
          case I: {
            var a = t.stateNode.passiveEffectDuration, o = t.memoizedProps, c = o.id, v = o.onPostCommit, g = Lw(), C = t.alternate === null ? "mount" : "update";
            Dw() && (C = "nested-update"), typeof v == "function" && v(c, C, a, g);
            var b = t.return;
            e:
              for (; b !== null; ) {
                switch (b.tag) {
                  case _:
                    var k = b.stateNode;
                    k.passiveEffectDuration += a;
                    break e;
                  case I:
                    var M = b.stateNode;
                    M.passiveEffectDuration += a;
                    break e;
                }
                b = b.return;
              }
            break;
          }
        }
    }
    function Y3(e, t, a, o) {
      if ((a.flags & Jr) !== nt)
        switch (a.tag) {
          case T:
          case U:
          case G: {
            if (!pa)
              if (a.mode & lt)
                try {
                  _l(), Rs(jr | Fr, a);
                } finally {
                  kl(a);
                }
              else
                Rs(jr | Fr, a);
            break;
          }
          case R: {
            var c = a.stateNode;
            if (a.flags & Dt && !pa)
              if (t === null)
                if (a.type === a.elementType && !Hc && (c.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), c.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & lt)
                  try {
                    _l(), c.componentDidMount();
                  } finally {
                    kl(a);
                  }
                else
                  c.componentDidMount();
              else {
                var v = a.elementType === a.type ? t.memoizedProps : Ho(a.type, t.memoizedProps), g = t.memoizedState;
                if (a.type === a.elementType && !Hc && (c.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), c.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & lt)
                  try {
                    _l(), c.componentDidUpdate(v, g, c.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    kl(a);
                  }
                else
                  c.componentDidUpdate(v, g, c.__reactInternalSnapshotBeforeUpdate);
              }
            var C = a.updateQueue;
            C !== null && (a.type === a.elementType && !Hc && (c.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), c.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), K2(a, C, c));
            break;
          }
          case _: {
            var b = a.updateQueue;
            if (b !== null) {
              var k = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case L:
                    k = a.child.stateNode;
                    break;
                  case R:
                    k = a.child.stateNode;
                    break;
                }
              K2(a, b, k);
            }
            break;
          }
          case L: {
            var M = a.stateNode;
            if (t === null && a.flags & Dt) {
              var j = a.type, $ = a.memoizedProps;
              v_(M, j, $);
            }
            break;
          }
          case z:
            break;
          case N:
            break;
          case I: {
            {
              var Z = a.memoizedProps, J = Z.onCommit, ie = Z.onRender, Ie = a.stateNode.effectDuration, at = Lw(), qe = t === null ? "mount" : "update";
              Dw() && (qe = "nested-update"), typeof ie == "function" && ie(a.memoizedProps.id, qe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, at);
              {
                typeof J == "function" && J(a.memoizedProps.id, qe, Ie, at), W4(a);
                var on = a.return;
                e:
                  for (; on !== null; ) {
                    switch (on.tag) {
                      case _:
                        var Qt = on.stateNode;
                        Qt.effectDuration += Ie;
                        break e;
                      case I:
                        var Y = on.stateNode;
                        Y.effectDuration += Ie;
                        break e;
                    }
                    on = on.return;
                  }
              }
            }
            break;
          }
          case W: {
            n4(e, a);
            break;
          }
          case ge:
          case Te:
          case Ee:
          case ne:
          case fe:
          case we:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      pa || a.flags & xa && dx(a);
    }
    function Q3(e) {
      switch (e.tag) {
        case T:
        case U:
        case G: {
          if (e.mode & lt)
            try {
              _l(), sx(e, e.return);
            } finally {
              kl(e);
            }
          else
            sx(e, e.return);
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && j3(e, e.return, t), cx(e, e.return);
          break;
        }
        case L: {
          cx(e, e.return);
          break;
        }
      }
    }
    function X3(e, t) {
      for (var a = null, o = e; ; ) {
        if (o.tag === L) {
          if (a === null) {
            a = o;
            try {
              var c = o.stateNode;
              t ? w_(c) : T_(o.stateNode, o.memoizedProps);
            } catch (g) {
              $n(e, e.return, g);
            }
          }
        } else if (o.tag === z) {
          if (a === null)
            try {
              var v = o.stateNode;
              t ? x_(v) : R_(v, o.memoizedProps);
            } catch (g) {
              $n(e, e.return, g);
            }
        } else if (!((o.tag === ne || o.tag === fe) && o.memoizedState !== null && o !== e)) {
          if (o.child !== null) {
            o.child.return = o, o = o.child;
            continue;
          }
        }
        if (o === e)
          return;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === e)
            return;
          a === o && (a = null), o = o.return;
        }
        a === o && (a = null), o.sibling.return = o.return, o = o.sibling;
      }
    }
    function dx(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, o;
        switch (e.tag) {
          case L:
            o = a;
            break;
          default:
            o = a;
        }
        if (typeof t == "function") {
          var c;
          if (e.mode & lt)
            try {
              _l(), c = t(o);
            } finally {
              kl(e);
            }
          else
            c = t(o);
          typeof c == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ct(e));
        } else
          t.hasOwnProperty("current") || h("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", ct(e)), t.current = o;
      }
    }
    function q3(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function vx(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, vx(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === L) {
          var a = e.stateNode;
          a !== null && aM(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Z3(e) {
      for (var t = e.return; t !== null; ) {
        if (px(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function px(e) {
      return e.tag === L || e.tag === _ || e.tag === N;
    }
    function hx(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || px(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== L && t.tag !== z && t.tag !== le; ) {
            if (t.flags & Pn || t.child === null || t.tag === N)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Pn))
            return t.stateNode;
        }
    }
    function J3(e) {
      var t = Z3(e);
      switch (t.tag) {
        case L: {
          var a = t.stateNode;
          t.flags & Sn && (m2(a), t.flags &= ~Sn);
          var o = hx(e);
          xC(e, o, a);
          break;
        }
        case _:
        case N: {
          var c = t.stateNode.containerInfo, v = hx(e);
          wC(e, v, c);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function wC(e, t, a) {
      var o = e.tag, c = o === L || o === z;
      if (c) {
        var v = e.stateNode;
        t ? S_(a, v, t) : g_(a, v);
      } else if (o !== N) {
        var g = e.child;
        if (g !== null) {
          wC(g, t, a);
          for (var C = g.sibling; C !== null; )
            wC(C, t, a), C = C.sibling;
        }
      }
    }
    function xC(e, t, a) {
      var o = e.tag, c = o === L || o === z;
      if (c) {
        var v = e.stateNode;
        t ? y_(a, v, t) : m_(a, v);
      } else if (o !== N) {
        var g = e.child;
        if (g !== null) {
          xC(g, t, a);
          for (var C = g.sibling; C !== null; )
            xC(C, t, a), C = C.sibling;
        }
      }
    }
    var ha = null, jo = !1;
    function e4(e, t, a) {
      {
        var o = t;
        e:
          for (; o !== null; ) {
            switch (o.tag) {
              case L: {
                ha = o.stateNode, jo = !1;
                break e;
              }
              case _: {
                ha = o.stateNode.containerInfo, jo = !0;
                break e;
              }
              case N: {
                ha = o.stateNode.containerInfo, jo = !0;
                break e;
              }
            }
            o = o.return;
          }
        if (ha === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        mx(e, t, a), ha = null, jo = !1;
      }
      q3(a);
    }
    function ks(e, t, a) {
      for (var o = a.child; o !== null; )
        mx(e, t, o), o = o.sibling;
    }
    function mx(e, t, a) {
      switch ($v(a), a.tag) {
        case L:
          pa || zd(a, t);
        case z: {
          {
            var o = ha, c = jo;
            ha = null, ks(e, t, a), ha = o, jo = c, ha !== null && (jo ? b_(ha, a.stateNode) : C_(ha, a.stateNode));
          }
          return;
        }
        case le: {
          ha !== null && (jo ? E_(ha, a.stateNode) : z0(ha, a.stateNode));
          return;
        }
        case N: {
          {
            var v = ha, g = jo;
            ha = a.stateNode.containerInfo, jo = !0, ks(e, t, a), ha = v, jo = g;
          }
          return;
        }
        case T:
        case U:
        case re:
        case G: {
          if (!pa) {
            var C = a.updateQueue;
            if (C !== null) {
              var b = C.lastEffect;
              if (b !== null) {
                var k = b.next, M = k;
                do {
                  var j = M, $ = j.destroy, Z = j.tag;
                  $ !== void 0 && ((Z & xl) !== bi ? hy(a, t, $) : (Z & jr) !== bi && (Tf(a), a.mode & lt ? (_l(), hy(a, t, $), kl(a)) : hy(a, t, $), Gu())), M = M.next;
                } while (M !== k);
              }
            }
          }
          ks(e, t, a);
          return;
        }
        case R: {
          if (!pa) {
            zd(a, t);
            var J = a.stateNode;
            typeof J.componentWillUnmount == "function" && EC(a, t, J);
          }
          ks(e, t, a);
          return;
        }
        case Ee: {
          ks(e, t, a);
          return;
        }
        case ne: {
          if (
            // TODO: Remove this dead flag
            a.mode & Bt
          ) {
            var ie = pa;
            pa = ie || a.memoizedState !== null, ks(e, t, a), pa = ie;
          } else
            ks(e, t, a);
          break;
        }
        default: {
          ks(e, t, a);
          return;
        }
      }
    }
    function t4(e) {
      e.memoizedState;
    }
    function n4(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var o = t.alternate;
        if (o !== null) {
          var c = o.memoizedState;
          if (c !== null) {
            var v = c.dehydrated;
            v !== null && F_(v);
          }
        }
      }
    }
    function gx(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new I3()), t.forEach(function(o) {
          var c = Z4.bind(null, e, o);
          if (!a.has(o)) {
            if (a.add(o), Ir)
              if (Ld !== null && Ad !== null)
                ch(Ad, Ld);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            o.then(c, c);
          }
        });
      }
    }
    function r4(e, t, a) {
      Ld = a, Ad = e, be(t), yx(t, e), be(t), Ld = null, Ad = null;
    }
    function Vo(e, t, a) {
      var o = t.deletions;
      if (o !== null)
        for (var c = 0; c < o.length; c++) {
          var v = o[c];
          try {
            e4(e, t, v);
          } catch (b) {
            $n(v, t, b);
          }
        }
      var g = gt();
      if (t.subtreeFlags & ka)
        for (var C = t.child; C !== null; )
          be(C), yx(C, e), C = C.sibling;
      be(g);
    }
    function yx(e, t, a) {
      var o = e.alternate, c = e.flags;
      switch (e.tag) {
        case T:
        case U:
        case re:
        case G: {
          if (Vo(t, e), Ml(e), c & Dt) {
            try {
              Fo(xl | Fr, e, e.return), Rs(xl | Fr, e);
            } catch (mt) {
              $n(e, e.return, mt);
            }
            if (e.mode & lt) {
              try {
                _l(), Fo(jr | Fr, e, e.return);
              } catch (mt) {
                $n(e, e.return, mt);
              }
              kl(e);
            } else
              try {
                Fo(jr | Fr, e, e.return);
              } catch (mt) {
                $n(e, e.return, mt);
              }
          }
          return;
        }
        case R: {
          Vo(t, e), Ml(e), c & xa && o !== null && zd(o, o.return);
          return;
        }
        case L: {
          Vo(t, e), Ml(e), c & xa && o !== null && zd(o, o.return);
          {
            if (e.flags & Sn) {
              var v = e.stateNode;
              try {
                m2(v);
              } catch (mt) {
                $n(e, e.return, mt);
              }
            }
            if (c & Dt) {
              var g = e.stateNode;
              if (g != null) {
                var C = e.memoizedProps, b = o !== null ? o.memoizedProps : C, k = e.type, M = e.updateQueue;
                if (e.updateQueue = null, M !== null)
                  try {
                    p_(g, M, k, b, C, e);
                  } catch (mt) {
                    $n(e, e.return, mt);
                  }
              }
            }
          }
          return;
        }
        case z: {
          if (Vo(t, e), Ml(e), c & Dt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var j = e.stateNode, $ = e.memoizedProps, Z = o !== null ? o.memoizedProps : $;
            try {
              h_(j, Z, $);
            } catch (mt) {
              $n(e, e.return, mt);
            }
          }
          return;
        }
        case _: {
          if (Vo(t, e), Ml(e), c & Dt && o !== null) {
            var J = o.memoizedState;
            if (J.isDehydrated)
              try {
                $_(t.containerInfo);
              } catch (mt) {
                $n(e, e.return, mt);
              }
          }
          return;
        }
        case N: {
          Vo(t, e), Ml(e);
          return;
        }
        case W: {
          Vo(t, e), Ml(e);
          var ie = e.child;
          if (ie.flags & ol) {
            var Ie = ie.stateNode, at = ie.memoizedState, qe = at !== null;
            if (Ie.isHidden = qe, qe) {
              var on = ie.alternate !== null && ie.alternate.memoizedState !== null;
              on || H4();
            }
          }
          if (c & Dt) {
            try {
              t4(e);
            } catch (mt) {
              $n(e, e.return, mt);
            }
            gx(e);
          }
          return;
        }
        case ne: {
          var Qt = o !== null && o.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Bt
          ) {
            var Y = pa;
            pa = Y || Qt, Vo(t, e), pa = Y;
          } else
            Vo(t, e);
          if (Ml(e), c & ol) {
            var oe = e.stateNode, Q = e.memoizedState, ye = Q !== null, $e = e;
            if (oe.isHidden = ye, ye && !Qt && ($e.mode & Bt) !== ot) {
              Be = $e;
              for (var Ae = $e.child; Ae !== null; )
                Be = Ae, i4(Ae), Ae = Ae.sibling;
            }
            X3($e, ye);
          }
          return;
        }
        case ge: {
          Vo(t, e), Ml(e), c & Dt && gx(e);
          return;
        }
        case Ee:
          return;
        default: {
          Vo(t, e), Ml(e);
          return;
        }
      }
    }
    function Ml(e) {
      var t = e.flags;
      if (t & Pn) {
        try {
          J3(e);
        } catch (a) {
          $n(e, e.return, a);
        }
        e.flags &= ~Pn;
      }
      t & ci && (e.flags &= ~ci);
    }
    function a4(e, t, a) {
      Ld = a, Ad = t, Be = e, Sx(e, t, a), Ld = null, Ad = null;
    }
    function Sx(e, t, a) {
      for (var o = (e.mode & Bt) !== ot; Be !== null; ) {
        var c = Be, v = c.child;
        if (c.tag === ne && o) {
          var g = c.memoizedState !== null, C = g || py;
          if (C) {
            TC(e, t, a);
            continue;
          } else {
            var b = c.alternate, k = b !== null && b.memoizedState !== null, M = k || pa, j = py, $ = pa;
            py = C, pa = M, pa && !$ && (Be = c, o4(c));
            for (var Z = v; Z !== null; )
              Be = Z, Sx(
                Z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Z = Z.sibling;
            Be = c, py = j, pa = $, TC(e, t, a);
            continue;
          }
        }
        (c.subtreeFlags & Jr) !== nt && v !== null ? (v.return = c, Be = v) : TC(e, t, a);
      }
    }
    function TC(e, t, a) {
      for (; Be !== null; ) {
        var o = Be;
        if ((o.flags & Jr) !== nt) {
          var c = o.alternate;
          be(o);
          try {
            Y3(t, c, o, a);
          } catch (g) {
            $n(o, o.return, g);
          }
          Wn();
        }
        if (o === e) {
          Be = null;
          return;
        }
        var v = o.sibling;
        if (v !== null) {
          v.return = o.return, Be = v;
          return;
        }
        Be = o.return;
      }
    }
    function i4(e) {
      for (; Be !== null; ) {
        var t = Be, a = t.child;
        switch (t.tag) {
          case T:
          case U:
          case re:
          case G: {
            if (t.mode & lt)
              try {
                _l(), Fo(jr, t, t.return);
              } finally {
                kl(t);
              }
            else
              Fo(jr, t, t.return);
            break;
          }
          case R: {
            zd(t, t.return);
            var o = t.stateNode;
            typeof o.componentWillUnmount == "function" && EC(t, t.return, o);
            break;
          }
          case L: {
            zd(t, t.return);
            break;
          }
          case ne: {
            var c = t.memoizedState !== null;
            if (c) {
              Cx(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Be = a) : Cx(e);
      }
    }
    function Cx(e) {
      for (; Be !== null; ) {
        var t = Be;
        if (t === e) {
          Be = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Be = a;
          return;
        }
        Be = t.return;
      }
    }
    function o4(e) {
      for (; Be !== null; ) {
        var t = Be, a = t.child;
        if (t.tag === ne) {
          var o = t.memoizedState !== null;
          if (o) {
            bx(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Be = a) : bx(e);
      }
    }
    function bx(e) {
      for (; Be !== null; ) {
        var t = Be;
        be(t);
        try {
          Q3(t);
        } catch (o) {
          $n(t, t.return, o);
        }
        if (Wn(), t === e) {
          Be = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Be = a;
          return;
        }
        Be = t.return;
      }
    }
    function l4(e, t, a, o) {
      Be = t, u4(t, e, a, o);
    }
    function u4(e, t, a, o) {
      for (; Be !== null; ) {
        var c = Be, v = c.child;
        (c.subtreeFlags & fi) !== nt && v !== null ? (v.return = c, Be = v) : s4(e, t, a, o);
      }
    }
    function s4(e, t, a, o) {
      for (; Be !== null; ) {
        var c = Be;
        if ((c.flags & jn) !== nt) {
          be(c);
          try {
            c4(t, c, a, o);
          } catch (g) {
            $n(c, c.return, g);
          }
          Wn();
        }
        if (c === e) {
          Be = null;
          return;
        }
        var v = c.sibling;
        if (v !== null) {
          v.return = c.return, Be = v;
          return;
        }
        Be = c.return;
      }
    }
    function c4(e, t, a, o) {
      switch (t.tag) {
        case T:
        case U:
        case G: {
          if (t.mode & lt) {
            nC();
            try {
              Rs(da | Fr, t);
            } finally {
              tC(t);
            }
          } else
            Rs(da | Fr, t);
          break;
        }
      }
    }
    function f4(e) {
      Be = e, d4();
    }
    function d4() {
      for (; Be !== null; ) {
        var e = Be, t = e.child;
        if ((Be.flags & yn) !== nt) {
          var a = e.deletions;
          if (a !== null) {
            for (var o = 0; o < a.length; o++) {
              var c = a[o];
              Be = c, h4(c, e);
            }
            {
              var v = e.alternate;
              if (v !== null) {
                var g = v.child;
                if (g !== null) {
                  v.child = null;
                  do {
                    var C = g.sibling;
                    g.sibling = null, g = C;
                  } while (g !== null);
                }
              }
            }
            Be = e;
          }
        }
        (e.subtreeFlags & fi) !== nt && t !== null ? (t.return = e, Be = t) : v4();
      }
    }
    function v4() {
      for (; Be !== null; ) {
        var e = Be;
        (e.flags & jn) !== nt && (be(e), p4(e), Wn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Be = t;
          return;
        }
        Be = e.return;
      }
    }
    function p4(e) {
      switch (e.tag) {
        case T:
        case U:
        case G: {
          e.mode & lt ? (nC(), Fo(da | Fr, e, e.return), tC(e)) : Fo(da | Fr, e, e.return);
          break;
        }
      }
    }
    function h4(e, t) {
      for (; Be !== null; ) {
        var a = Be;
        be(a), g4(a, t), Wn();
        var o = a.child;
        o !== null ? (o.return = a, Be = o) : m4(e);
      }
    }
    function m4(e) {
      for (; Be !== null; ) {
        var t = Be, a = t.sibling, o = t.return;
        if (vx(t), t === e) {
          Be = null;
          return;
        }
        if (a !== null) {
          a.return = o, Be = a;
          return;
        }
        Be = o;
      }
    }
    function g4(e, t) {
      switch (e.tag) {
        case T:
        case U:
        case G: {
          e.mode & lt ? (nC(), Fo(da, e, t), tC(e)) : Fo(da, e, t);
          break;
        }
      }
    }
    function y4(e) {
      switch (e.tag) {
        case T:
        case U:
        case G: {
          try {
            Rs(jr | Fr, e);
          } catch (a) {
            $n(e, e.return, a);
          }
          break;
        }
        case R: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            $n(e, e.return, a);
          }
          break;
        }
      }
    }
    function S4(e) {
      switch (e.tag) {
        case T:
        case U:
        case G: {
          try {
            Rs(da | Fr, e);
          } catch (t) {
            $n(e, e.return, t);
          }
          break;
        }
      }
    }
    function C4(e) {
      switch (e.tag) {
        case T:
        case U:
        case G: {
          try {
            Fo(jr | Fr, e, e.return);
          } catch (a) {
            $n(e, e.return, a);
          }
          break;
        }
        case R: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && EC(e, e.return, t);
          break;
        }
      }
    }
    function b4(e) {
      switch (e.tag) {
        case T:
        case U:
        case G:
          try {
            Fo(da | Fr, e, e.return);
          } catch (t) {
            $n(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Jp = Symbol.for;
      Jp("selector.component"), Jp("selector.has_pseudo_class"), Jp("selector.role"), Jp("selector.test_id"), Jp("selector.text");
    }
    var E4 = [];
    function w4() {
      E4.forEach(function(e) {
        return e();
      });
    }
    var x4 = u.ReactCurrentActQueue;
    function T4(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT != "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest != "undefined";
        return a && t !== !1;
      }
    }
    function Ex() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT != "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && x4.current !== null && h("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var R4 = Math.ceil, RC = u.ReactCurrentDispatcher, kC = u.ReactCurrentOwner, ma = u.ReactCurrentBatchConfig, Bo = u.ReactCurrentActQueue, Wr = (
      /*             */
      0
    ), wx = (
      /*               */
      1
    ), ga = (
      /*                */
      2
    ), ao = (
      /*                */
      4
    ), Cu = 0, eh = 1, Uc = 2, my = 3, th = 4, xx = 5, _C = 6, an = Wr, ei = null, sr = null, Kr = ue, Ol = ue, MC = gs(ue), Gr = Cu, nh = null, gy = ue, rh = ue, yy = ue, ah = null, Ei = null, OC = 0, Tx = 500, Rx = 1 / 0, k4 = 500, bu = null;
    function ih() {
      Rx = Kn() + k4;
    }
    function kx() {
      return Rx;
    }
    var Sy = !1, NC = null, Pd = null, Ic = !1, _s = null, oh = ue, DC = [], LC = null, _4 = 50, lh = 0, AC = null, zC = !1, Cy = !1, M4 = 50, Hd = 0, by = null, uh = Dn, Ey = ue, _x = !1;
    function wy() {
      return ei;
    }
    function ti() {
      return (an & (ga | ao)) !== Wr ? Kn() : (uh !== Dn || (uh = Kn()), uh);
    }
    function Ms(e) {
      var t = e.mode;
      if ((t & Bt) === ot)
        return ut;
      if ((an & ga) !== Wr && Kr !== ue)
        return Cr(Kr);
      var a = TM() !== xM;
      if (a) {
        if (ma.transition !== null) {
          var o = ma.transition;
          o._updatedFibers || (o._updatedFibers = /* @__PURE__ */ new Set()), o._updatedFibers.add(e);
        }
        return Ey === rn && (Ey = Yv()), Ey;
      }
      var c = hi();
      if (c !== rn)
        return c;
      var v = s_();
      return v;
    }
    function O4(e) {
      var t = e.mode;
      return (t & Bt) === ot ? ut : n0();
    }
    function Yr(e, t, a, o) {
      eO(), _x && h("useInsertionEffect must not schedule updates."), zC && (Cy = !0), ru(e, a, o), (an & ga) !== ue && e === ei ? rO(t) : (Ir && Jv(e, t, a), aO(t), e === ei && ((an & ga) === Wr && (rh = Lt(rh, a)), Gr === th && Os(e, Kr)), wi(e, o), a === ut && an === Wr && (t.mode & Bt) === ot && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Bo.isBatchingLegacy && (ih(), k2()));
    }
    function N4(e, t, a) {
      var o = e.current;
      o.lanes = t, ru(e, t, a), wi(e, a);
    }
    function D4(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (an & ga) !== Wr
      );
    }
    function wi(e, t) {
      var a = e.callbackNode;
      J1(e, t);
      var o = cc(e, e === ei ? Kr : ue);
      if (o === ue) {
        a !== null && Bx(a), e.callbackNode = null, e.callbackPriority = rn;
        return;
      }
      var c = hr(o), v = e.callbackPriority;
      if (v === c && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Bo.current !== null && a !== jC)) {
        a == null && v !== ut && h("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && Bx(a);
      var g;
      if (c === ut)
        e.tag === ys ? (Bo.isBatchingLegacy !== null && (Bo.didScheduleLegacyUpdate = !0), lM(Nx.bind(null, e))) : R2(Nx.bind(null, e)), Bo.current !== null ? Bo.current.push(Ss) : f_(function() {
          (an & (ga | ao)) === Wr && Ss();
        }), g = null;
      else {
        var C;
        switch (hc(o)) {
          case ea:
            C = bf;
            break;
          case $r:
            C = Xa;
            break;
          case Mo:
            C = Yi;
            break;
          case vc:
            C = ul;
            break;
          default:
            C = Yi;
            break;
        }
        g = VC(C, Mx.bind(null, e));
      }
      e.callbackPriority = c, e.callbackNode = g;
    }
    function Mx(e, t) {
      if (e3(), uh = Dn, Ey = ue, (an & (ga | ao)) !== Wr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, o = wu();
      if (o && e.callbackNode !== a)
        return null;
      var c = cc(e, e === ei ? Kr : ue);
      if (c === ue)
        return null;
      var v = !dc(e, c) && !zm(e, c) && !t, g = v ? j4(e, c) : Ty(e, c);
      if (g !== Cu) {
        if (g === Uc) {
          var C = Kv(e);
          C !== ue && (c = C, g = PC(e, C));
        }
        if (g === eh) {
          var b = nh;
          throw $c(e, ue), Os(e, c), wi(e, Kn()), b;
        }
        if (g === _C)
          Os(e, c);
        else {
          var k = !dc(e, c), M = e.current.alternate;
          if (k && !A4(M)) {
            if (g = Ty(e, c), g === Uc) {
              var j = Kv(e);
              j !== ue && (c = j, g = PC(e, j));
            }
            if (g === eh) {
              var $ = nh;
              throw $c(e, ue), Os(e, c), wi(e, Kn()), $;
            }
          }
          e.finishedWork = M, e.finishedLanes = c, L4(e, g, c);
        }
      }
      return wi(e, Kn()), e.callbackNode === a ? Mx.bind(null, e) : null;
    }
    function PC(e, t) {
      var a = ah;
      if (Er(e)) {
        var o = $c(e, t);
        o.flags |= Zn, eM(e.containerInfo);
      }
      var c = Ty(e, t);
      if (c !== Uc) {
        var v = Ei;
        Ei = a, v !== null && Ox(v);
      }
      return c;
    }
    function Ox(e) {
      Ei === null ? Ei = e : Ei.push.apply(Ei, e);
    }
    function L4(e, t, a) {
      switch (t) {
        case Cu:
        case eh:
          throw new Error("Root did not complete. This is a bug in React.");
        case Uc: {
          Fc(e, Ei, bu);
          break;
        }
        case my: {
          if (Os(e, a), Wf(a) && // do not delay if we're inside an act() scope
          !Wx()) {
            var o = OC + Tx - Kn();
            if (o > 10) {
              var c = cc(e, ue);
              if (c !== ue)
                break;
              var v = e.suspendedLanes;
              if (!nu(v, a)) {
                ti(), qv(e, v);
                break;
              }
              e.timeoutHandle = L0(Fc.bind(null, e, Ei, bu), o);
              break;
            }
          }
          Fc(e, Ei, bu);
          break;
        }
        case th: {
          if (Os(e, a), Am(a))
            break;
          if (!Wx()) {
            var g = Lm(e, a), C = g, b = Kn() - C, k = J4(b) - b;
            if (k > 10) {
              e.timeoutHandle = L0(Fc.bind(null, e, Ei, bu), k);
              break;
            }
          }
          Fc(e, Ei, bu);
          break;
        }
        case xx: {
          Fc(e, Ei, bu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function A4(e) {
      for (var t = e; ; ) {
        if (t.flags & rc) {
          var a = t.updateQueue;
          if (a !== null) {
            var o = a.stores;
            if (o !== null)
              for (var c = 0; c < o.length; c++) {
                var v = o[c], g = v.getSnapshot, C = v.value;
                try {
                  if (!Ve(g(), C))
                    return !1;
                } catch (k) {
                  return !1;
                }
              }
          }
        }
        var b = t.child;
        if (t.subtreeFlags & rc && b !== null) {
          b.return = t, t = b;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Os(e, t) {
      t = es(t, yy), t = es(t, rh), Xv(e, t);
    }
    function Nx(e) {
      if (t3(), (an & (ga | ao)) !== Wr)
        throw new Error("Should not already be working.");
      wu();
      var t = cc(e, ue);
      if (!Na(t, ut))
        return wi(e, Kn()), null;
      var a = Ty(e, t);
      if (e.tag !== ys && a === Uc) {
        var o = Kv(e);
        o !== ue && (t = o, a = PC(e, o));
      }
      if (a === eh) {
        var c = nh;
        throw $c(e, ue), Os(e, t), wi(e, Kn()), c;
      }
      if (a === _C)
        throw new Error("Root did not complete. This is a bug in React.");
      var v = e.current.alternate;
      return e.finishedWork = v, e.finishedLanes = t, Fc(e, Ei, bu), wi(e, Kn()), null;
    }
    function z4(e, t) {
      t !== ue && (ts(e, Lt(t, ut)), wi(e, Kn()), (an & (ga | ao)) === Wr && (ih(), Ss()));
    }
    function HC(e, t) {
      var a = an;
      an |= wx;
      try {
        return e(t);
      } finally {
        an = a, an === Wr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Bo.isBatchingLegacy && (ih(), k2());
      }
    }
    function P4(e, t, a, o, c) {
      var v = hi(), g = ma.transition;
      try {
        return ma.transition = null, br(ea), e(t, a, o, c);
      } finally {
        br(v), ma.transition = g, an === Wr && ih();
      }
    }
    function Eu(e) {
      _s !== null && _s.tag === ys && (an & (ga | ao)) === Wr && wu();
      var t = an;
      an |= wx;
      var a = ma.transition, o = hi();
      try {
        return ma.transition = null, br(ea), e ? e() : void 0;
      } finally {
        br(o), ma.transition = a, an = t, (an & (ga | ao)) === Wr && Ss();
      }
    }
    function Dx() {
      return (an & (ga | ao)) !== Wr;
    }
    function xy(e, t) {
      La(MC, Ol, e), Ol = Lt(Ol, t);
    }
    function UC(e) {
      Ol = MC.current, Da(MC, e);
    }
    function $c(e, t) {
      e.finishedWork = null, e.finishedLanes = ue;
      var a = e.timeoutHandle;
      if (a !== A0 && (e.timeoutHandle = A0, c_(a)), sr !== null)
        for (var o = sr.return; o !== null; ) {
          var c = o.alternate;
          lx(c, o), o = o.return;
        }
      ei = e;
      var v = jc(e.current, null);
      return sr = v, Kr = Ol = t, Gr = Cu, nh = null, gy = ue, rh = ue, yy = ue, ah = null, Ei = null, MM(), Po.discardPendingWarnings(), v;
    }
    function Lx(e, t) {
      do {
        var a = sr;
        try {
          if (Dg(), sw(), Wn(), kC.current = null, a === null || a.return === null) {
            Gr = eh, nh = t, sr = null;
            return;
          }
          if (it && a.mode & lt && cy(a, !0), At)
            if (Gl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var o = t;
              Om(a, o, Kr);
            } else
              Rf(a, t, Kr);
          o3(e, a.return, a, t, Kr), Hx(a);
        } catch (c) {
          t = c, sr === a && a !== null ? (a = a.return, sr = a) : a = sr;
          continue;
        }
        return;
      } while (!0);
    }
    function Ax() {
      var e = RC.current;
      return RC.current = iy, e === null ? iy : e;
    }
    function zx(e) {
      RC.current = e;
    }
    function H4() {
      OC = Kn();
    }
    function sh(e) {
      gy = Lt(e, gy);
    }
    function U4() {
      Gr === Cu && (Gr = my);
    }
    function IC() {
      (Gr === Cu || Gr === my || Gr === Uc) && (Gr = th), ei !== null && (fc(gy) || fc(rh)) && Os(ei, Kr);
    }
    function I4(e) {
      Gr !== th && (Gr = Uc), ah === null ? ah = [e] : ah.push(e);
    }
    function $4() {
      return Gr === Cu;
    }
    function Ty(e, t) {
      var a = an;
      an |= ga;
      var o = Ax();
      if (ei !== e || Kr !== t) {
        if (Ir) {
          var c = e.memoizedUpdaters;
          c.size > 0 && (ch(e, Kr), c.clear()), Yf(e, t);
        }
        bu = ep(), $c(e, t);
      }
      zi(t);
      do
        try {
          F4();
          break;
        } catch (v) {
          Lx(e, v);
        }
      while (!0);
      if (Dg(), an = a, zx(o), sr !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Qu(), ei = null, Kr = ue, Gr;
    }
    function F4() {
      for (; sr !== null; )
        Px(sr);
    }
    function j4(e, t) {
      var a = an;
      an |= ga;
      var o = Ax();
      if (ei !== e || Kr !== t) {
        if (Ir) {
          var c = e.memoizedUpdaters;
          c.size > 0 && (ch(e, Kr), c.clear()), Yf(e, t);
        }
        bu = ep(), ih(), $c(e, t);
      }
      zi(t);
      do
        try {
          V4();
          break;
        } catch (v) {
          Lx(e, v);
        }
      while (!0);
      return Dg(), zx(o), an = a, sr !== null ? (oc(), Cu) : (Qu(), ei = null, Kr = ue, Gr);
    }
    function V4() {
      for (; sr !== null && !Cf(); )
        Px(sr);
    }
    function Px(e) {
      var t = e.alternate;
      be(e);
      var a;
      (e.mode & lt) !== ot ? (eC(e), a = $C(t, e, Ol), cy(e, !0)) : a = $C(t, e, Ol), Wn(), e.memoizedProps = e.pendingProps, a === null ? Hx(e) : sr = a, kC.current = null;
    }
    function Hx(e) {
      var t = e;
      do {
        var a = t.alternate, o = t.return;
        if ((t.flags & Ga) === nt) {
          be(t);
          var c = void 0;
          if ((t.mode & lt) === ot ? c = ox(a, t, Ol) : (eC(t), c = ox(a, t, Ol), cy(t, !1)), Wn(), c !== null) {
            sr = c;
            return;
          }
        } else {
          var v = U3(a, t);
          if (v !== null) {
            v.flags &= bm, sr = v;
            return;
          }
          if ((t.mode & lt) !== ot) {
            cy(t, !1);
            for (var g = t.actualDuration, C = t.child; C !== null; )
              g += C.actualDuration, C = C.sibling;
            t.actualDuration = g;
          }
          if (o !== null)
            o.flags |= Ga, o.subtreeFlags = nt, o.deletions = null;
          else {
            Gr = _C, sr = null;
            return;
          }
        }
        var b = t.sibling;
        if (b !== null) {
          sr = b;
          return;
        }
        t = o, sr = t;
      } while (t !== null);
      Gr === Cu && (Gr = xx);
    }
    function Fc(e, t, a) {
      var o = hi(), c = ma.transition;
      try {
        ma.transition = null, br(ea), B4(e, t, a, o);
      } finally {
        ma.transition = c, br(o);
      }
      return null;
    }
    function B4(e, t, a, o) {
      do
        wu();
      while (_s !== null);
      if (tO(), (an & (ga | ao)) !== Wr)
        throw new Error("Should not already be working.");
      var c = e.finishedWork, v = e.finishedLanes;
      if (wf(v), c === null)
        return Fv(), null;
      if (v === ue && h("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ue, c === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = rn;
      var g = Lt(c.lanes, c.childLanes);
      Zv(e, g), e === ei && (ei = null, sr = null, Kr = ue), ((c.subtreeFlags & fi) !== nt || (c.flags & fi) !== nt) && (Ic || (Ic = !0, LC = a, VC(Yi, function() {
        return wu(), null;
      })));
      var C = (c.subtreeFlags & (Ku | ka | Jr | fi)) !== nt, b = (c.flags & (Ku | ka | Jr | fi)) !== nt;
      if (C || b) {
        var k = ma.transition;
        ma.transition = null;
        var M = hi();
        br(ea);
        var j = an;
        an |= ao, kC.current = null, V3(e, c), Aw(), r4(e, c, v), r_(e.containerInfo), e.current = c, Nm(v), a4(c, e, v), Yu(), xm(), an = j, br(M), ma.transition = k;
      } else
        e.current = c, Aw();
      var $ = Ic;
      if (Ic ? (Ic = !1, _s = e, oh = v) : (Hd = 0, by = null), g = e.pendingLanes, g === ue && (Pd = null), $ || Fx(e.current, !1), Ro(c.stateNode, o), Ir && e.memoizedUpdaters.clear(), w4(), wi(e, Kn()), t !== null)
        for (var Z = e.onRecoverableError, J = 0; J < t.length; J++) {
          var ie = t[J], Ie = ie.stack, at = ie.digest;
          Z(ie.value, {
            componentStack: Ie,
            digest: at
          });
        }
      if (Sy) {
        Sy = !1;
        var qe = NC;
        throw NC = null, qe;
      }
      return Na(oh, ut) && e.tag !== ys && wu(), g = e.pendingLanes, Na(g, ut) ? (JM(), e === AC ? lh++ : (lh = 0, AC = e)) : lh = 0, Ss(), Fv(), null;
    }
    function wu() {
      if (_s !== null) {
        var e = hc(oh), t = a0(Mo, e), a = ma.transition, o = hi();
        try {
          return ma.transition = null, br(t), K4();
        } finally {
          br(o), ma.transition = a;
        }
      }
      return !1;
    }
    function W4(e) {
      DC.push(e), Ic || (Ic = !0, VC(Yi, function() {
        return wu(), null;
      }));
    }
    function K4() {
      if (_s === null)
        return !1;
      var e = LC;
      LC = null;
      var t = _s, a = oh;
      if (_s = null, oh = ue, (an & (ga | ao)) !== Wr)
        throw new Error("Cannot flush passive effects while already rendering.");
      zC = !0, Cy = !1, Dm(a);
      var o = an;
      an |= ao, f4(t.current), l4(t, t.current, a, e);
      {
        var c = DC;
        DC = [];
        for (var v = 0; v < c.length; v++) {
          var g = c[v];
          G3(t, g);
        }
      }
      ic(), Fx(t.current, !0), an = o, Ss(), Cy ? t === by ? Hd++ : (Hd = 0, by = t) : Hd = 0, zC = !1, Cy = !1, cl(t);
      {
        var C = t.current.stateNode;
        C.effectDuration = 0, C.passiveEffectDuration = 0;
      }
      return !0;
    }
    function Ux(e) {
      return Pd !== null && Pd.has(e);
    }
    function G4(e) {
      Pd === null ? Pd = /* @__PURE__ */ new Set([e]) : Pd.add(e);
    }
    function Y4(e) {
      Sy || (Sy = !0, NC = e);
    }
    var Q4 = Y4;
    function Ix(e, t, a) {
      var o = Pc(a, t), c = Pw(e, o, ut), v = bs(e, c, ut), g = ti();
      v !== null && (ru(v, ut, g), wi(v, g));
    }
    function $n(e, t, a) {
      if ($3(a), fh(!1), e.tag === _) {
        Ix(e, e, a);
        return;
      }
      var o = null;
      for (o = t; o !== null; ) {
        if (o.tag === _) {
          Ix(o, e, a);
          return;
        } else if (o.tag === R) {
          var c = o.type, v = o.stateNode;
          if (typeof c.getDerivedStateFromError == "function" || typeof v.componentDidCatch == "function" && !Ux(v)) {
            var g = Pc(a, e), C = oC(o, g, ut), b = bs(o, C, ut), k = ti();
            b !== null && (ru(b, ut, k), wi(b, k));
            return;
          }
        }
        o = o.return;
      }
      h(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function X4(e, t, a) {
      var o = e.pingCache;
      o !== null && o.delete(t);
      var c = ti();
      qv(e, a), iO(e), ei === e && nu(Kr, a) && (Gr === th || Gr === my && Wf(Kr) && Kn() - OC < Tx ? $c(e, ue) : yy = Lt(yy, a)), wi(e, c);
    }
    function $x(e, t) {
      t === rn && (t = O4(e));
      var a = ti(), o = Ci(e, t);
      o !== null && (ru(o, t, a), wi(o, a));
    }
    function q4(e) {
      var t = e.memoizedState, a = rn;
      t !== null && (a = t.retryLane), $x(e, a);
    }
    function Z4(e, t) {
      var a = rn, o;
      switch (e.tag) {
        case W:
          o = e.stateNode;
          var c = e.memoizedState;
          c !== null && (a = c.retryLane);
          break;
        case ge:
          o = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      o !== null && o.delete(t), $x(e, a);
    }
    function J4(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : R4(e / 1960) * 1960;
    }
    function eO() {
      if (lh > _4)
        throw lh = 0, AC = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Hd > M4 && (Hd = 0, by = null, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function tO() {
      Po.flushLegacyContextWarning(), Po.flushPendingUnsafeLifecycleWarnings();
    }
    function Fx(e, t) {
      be(e), Ry(e, Ra, C4), t && Ry(e, Kl, b4), Ry(e, Ra, y4), t && Ry(e, Kl, S4), Wn();
    }
    function Ry(e, t, a) {
      for (var o = e, c = null; o !== null; ) {
        var v = o.subtreeFlags & t;
        o !== c && o.child !== null && v !== nt ? o = o.child : ((o.flags & t) !== nt && a(o), o.sibling !== null ? o = o.sibling : o = c = o.return);
      }
    }
    var ky = null;
    function jx(e) {
      {
        if ((an & ga) !== Wr || !(e.mode & Bt))
          return;
        var t = e.tag;
        if (t !== O && t !== _ && t !== R && t !== T && t !== U && t !== re && t !== G)
          return;
        var a = ct(e) || "ReactComponent";
        if (ky !== null) {
          if (ky.has(a))
            return;
          ky.add(a);
        } else
          ky = /* @__PURE__ */ new Set([a]);
        var o = zn;
        try {
          be(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          o ? be(e) : Wn();
        }
      }
    }
    var $C;
    {
      var nO = null;
      $C = function(e, t, a) {
        var o = Xx(nO, t);
        try {
          return tx(e, t, a);
        } catch (v) {
          if (hM() || v !== null && typeof v == "object" && typeof v.then == "function")
            throw v;
          if (Dg(), sw(), lx(e, t), Xx(t, o), t.mode & lt && eC(t), Wl(null, tx, null, e, t, a), q1()) {
            var c = Ov();
            typeof c == "object" && c !== null && c._suppressLogging && typeof v == "object" && v !== null && !v._suppressLogging && (v._suppressLogging = !0);
          }
          throw v;
        }
      };
    }
    var Vx = !1, FC;
    FC = /* @__PURE__ */ new Set();
    function rO(e) {
      if (qr && !XM())
        switch (e.tag) {
          case T:
          case U:
          case G: {
            var t = sr && ct(sr) || "Unknown", a = t;
            if (!FC.has(a)) {
              FC.add(a);
              var o = ct(e) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", o, t, t);
            }
            break;
          }
          case R: {
            Vx || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), Vx = !0);
            break;
          }
        }
    }
    function ch(e, t) {
      if (Ir) {
        var a = e.memoizedUpdaters;
        a.forEach(function(o) {
          Jv(e, o, t);
        });
      }
    }
    var jC = {};
    function VC(e, t) {
      {
        var a = Bo.current;
        return a !== null ? (a.push(t), jC) : Sf(e, t);
      }
    }
    function Bx(e) {
      if (e !== jC)
        return wm(e);
    }
    function Wx() {
      return Bo.current !== null;
    }
    function aO(e) {
      {
        if (e.mode & Bt) {
          if (!Ex())
            return;
        } else if (!T4() || an !== Wr || e.tag !== T && e.tag !== U && e.tag !== G)
          return;
        if (Bo.current === null) {
          var t = zn;
          try {
            be(e), h(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, ct(e));
          } finally {
            t ? be(e) : Wn();
          }
        }
      }
    }
    function iO(e) {
      e.tag !== ys && Ex() && Bo.current === null && h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function fh(e) {
      _x = e;
    }
    var io = null, Ud = null, oO = function(e) {
      io = e;
    };
    function Id(e) {
      {
        if (io === null)
          return e;
        var t = io(e);
        return t === void 0 ? e : t.current;
      }
    }
    function BC(e) {
      return Id(e);
    }
    function WC(e) {
      {
        if (io === null)
          return e;
        var t = io(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Id(e.render);
            if (e.render !== a) {
              var o = {
                $$typeof: Rr,
                render: a
              };
              return e.displayName !== void 0 && (o.displayName = e.displayName), o;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function Kx(e, t) {
      {
        if (io === null)
          return !1;
        var a = e.elementType, o = t.type, c = !1, v = typeof o == "object" && o !== null ? o.$$typeof : null;
        switch (e.tag) {
          case R: {
            typeof o == "function" && (c = !0);
            break;
          }
          case T: {
            (typeof o == "function" || v === An) && (c = !0);
            break;
          }
          case U: {
            (v === Rr || v === An) && (c = !0);
            break;
          }
          case re:
          case G: {
            (v === oa || v === An) && (c = !0);
            break;
          }
          default:
            return !1;
        }
        if (c) {
          var g = io(a);
          if (g !== void 0 && g === io(o))
            return !0;
        }
        return !1;
      }
    }
    function Gx(e) {
      {
        if (io === null || typeof WeakSet != "function")
          return;
        Ud === null && (Ud = /* @__PURE__ */ new WeakSet()), Ud.add(e);
      }
    }
    var lO = function(e, t) {
      {
        if (io === null)
          return;
        var a = t.staleFamilies, o = t.updatedFamilies;
        wu(), Eu(function() {
          KC(e.current, o, a);
        });
      }
    }, uO = function(e, t) {
      {
        if (e.context !== Hi)
          return;
        wu(), Eu(function() {
          dh(t, e, null, null);
        });
      }
    };
    function KC(e, t, a) {
      {
        var o = e.alternate, c = e.child, v = e.sibling, g = e.tag, C = e.type, b = null;
        switch (g) {
          case T:
          case G:
          case R:
            b = C;
            break;
          case U:
            b = C.render;
            break;
        }
        if (io === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var k = !1, M = !1;
        if (b !== null) {
          var j = io(b);
          j !== void 0 && (a.has(j) ? M = !0 : t.has(j) && (g === R ? M = !0 : k = !0));
        }
        if (Ud !== null && (Ud.has(e) || o !== null && Ud.has(o)) && (M = !0), M && (e._debugNeedsRemount = !0), M || k) {
          var $ = Ci(e, ut);
          $ !== null && Yr($, e, ut, Dn);
        }
        c !== null && !M && KC(c, t, a), v !== null && KC(v, t, a);
      }
    }
    var sO = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), o = new Set(t.map(function(c) {
          return c.current;
        }));
        return GC(e.current, o, a), a;
      }
    };
    function GC(e, t, a) {
      {
        var o = e.child, c = e.sibling, v = e.tag, g = e.type, C = null;
        switch (v) {
          case T:
          case G:
          case R:
            C = g;
            break;
          case U:
            C = g.render;
            break;
        }
        var b = !1;
        C !== null && t.has(C) && (b = !0), b ? cO(e, a) : o !== null && GC(o, t, a), c !== null && GC(c, t, a);
      }
    }
    function cO(e, t) {
      {
        var a = fO(e, t);
        if (a)
          return;
        for (var o = e; ; ) {
          switch (o.tag) {
            case L:
              t.add(o.stateNode);
              return;
            case N:
              t.add(o.stateNode.containerInfo);
              return;
            case _:
              t.add(o.stateNode.containerInfo);
              return;
          }
          if (o.return === null)
            throw new Error("Expected to reach root first.");
          o = o.return;
        }
      }
    }
    function fO(e, t) {
      for (var a = e, o = !1; ; ) {
        if (a.tag === L)
          o = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return o;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return o;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var YC;
    {
      YC = !1;
      try {
        var Yx = Object.preventExtensions({});
      } catch (e) {
        YC = !0;
      }
    }
    function dO(e, t, a, o) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = o, this.flags = nt, this.subtreeFlags = nt, this.deletions = null, this.lanes = ue, this.childLanes = ue, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !YC && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ui = function(e, t, a, o) {
      return new dO(e, t, a, o);
    };
    function QC(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vO(e) {
      return typeof e == "function" && !QC(e) && e.defaultProps === void 0;
    }
    function pO(e) {
      if (typeof e == "function")
        return QC(e) ? R : T;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Rr)
          return U;
        if (t === oa)
          return re;
      }
      return O;
    }
    function jc(e, t) {
      var a = e.alternate;
      a === null ? (a = Ui(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = nt, a.subtreeFlags = nt, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Ur, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var o = e.dependencies;
      switch (a.dependencies = o === null ? null : {
        lanes: o.lanes,
        firstContext: o.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case O:
        case T:
        case G:
          a.type = Id(e.type);
          break;
        case R:
          a.type = BC(e.type);
          break;
        case U:
          a.type = WC(e.type);
          break;
      }
      return a;
    }
    function hO(e, t) {
      e.flags &= Ur | Pn;
      var a = e.alternate;
      if (a === null)
        e.childLanes = ue, e.lanes = t, e.child = null, e.subtreeFlags = nt, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = nt, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var o = a.dependencies;
        e.dependencies = o === null ? null : {
          lanes: o.lanes,
          firstContext: o.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function mO(e, t, a) {
      var o;
      return e === xg ? (o = Bt, t === !0 && (o |= Gn, o |= vi)) : o = ot, Ir && (o |= lt), Ui(_, null, null, o);
    }
    function XC(e, t, a, o, c, v) {
      var g = O, C = e;
      if (typeof e == "function")
        QC(e) ? (g = R, C = BC(C)) : C = Id(C);
      else if (typeof e == "string")
        g = L;
      else
        e:
          switch (e) {
            case ar:
              return Ns(a.children, c, v, t);
            case yr:
              g = A, c |= Gn, (c & Bt) !== ot && (c |= vi);
              break;
            case Ca:
              return gO(a, c, v, t);
            case dr:
              return yO(a, c, v, t);
            case Ia:
              return SO(a, c, v, t);
            case Bn:
              return Qx(a, c, v, t);
            case fo:
            case $a:
            case zl:
            case vo:
            case Zo:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Ln:
                    g = V;
                    break e;
                  case fr:
                    g = q;
                    break e;
                  case Rr:
                    g = U, C = WC(C);
                    break e;
                  case oa:
                    g = re;
                    break e;
                  case An:
                    g = se, C = null;
                    break e;
                }
              var b = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var k = o ? ct(o) : null;
                k && (b += `

Check the render method of \`` + k + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + b));
            }
          }
      var M = Ui(g, a, t, c);
      return M.elementType = e, M.type = C, M.lanes = v, M._debugOwner = o, M;
    }
    function qC(e, t, a) {
      var o = null;
      o = e._owner;
      var c = e.type, v = e.key, g = e.props, C = XC(c, v, g, o, t, a);
      return C._debugSource = e._source, C._debugOwner = e._owner, C;
    }
    function Ns(e, t, a, o) {
      var c = Ui(H, e, o, t);
      return c.lanes = a, c;
    }
    function gO(e, t, a, o) {
      typeof e.id != "string" && h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var c = Ui(I, e, o, t | lt);
      return c.elementType = Ca, c.lanes = a, c.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, c;
    }
    function yO(e, t, a, o) {
      var c = Ui(W, e, o, t);
      return c.elementType = dr, c.lanes = a, c;
    }
    function SO(e, t, a, o) {
      var c = Ui(ge, e, o, t);
      return c.elementType = Ia, c.lanes = a, c;
    }
    function Qx(e, t, a, o) {
      var c = Ui(ne, e, o, t);
      c.elementType = Bn, c.lanes = a;
      var v = {
        isHidden: !1
      };
      return c.stateNode = v, c;
    }
    function ZC(e, t, a) {
      var o = Ui(z, e, null, t);
      return o.lanes = a, o;
    }
    function CO() {
      var e = Ui(L, null, null, ot);
      return e.elementType = "DELETED", e;
    }
    function bO(e) {
      var t = Ui(le, null, null, ot);
      return t.stateNode = e, t;
    }
    function JC(e, t, a) {
      var o = e.children !== null ? e.children : [], c = Ui(N, o, e.key, t);
      return c.lanes = a, c.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, c;
    }
    function Xx(e, t) {
      return e === null && (e = Ui(O, null, null, ot)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function EO(e, t, a, o, c) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = A0, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = rn, this.eventTimes = Gf(ue), this.expirationTimes = Gf(Dn), this.pendingLanes = ue, this.suspendedLanes = ue, this.pingedLanes = ue, this.expiredLanes = ue, this.mutableReadLanes = ue, this.finishedLanes = ue, this.entangledLanes = ue, this.entanglements = Gf(ue), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var v = this.pendingUpdatersLaneMap = [], g = 0; g < Un; g++)
          v.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case xg:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ys:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function qx(e, t, a, o, c, v, g, C, b, k) {
      var M = new EO(e, t, a, C, b), j = mO(t, v);
      M.current = j, j.stateNode = M;
      {
        var $ = {
          element: o,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        j.memoizedState = $;
      }
      return lS(j), M;
    }
    var eb = "18.2.0";
    function wO(e, t, a) {
      var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Qe(o), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: rr,
        key: o == null ? null : "" + o,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var tb, nb;
    tb = !1, nb = {};
    function Zx(e) {
      if (!e)
        return Hi;
      var t = ui(e), a = oM(t);
      if (t.tag === R) {
        var o = t.type;
        if (wl(o))
          return x2(t, o, a);
      }
      return a;
    }
    function xO(e, t) {
      {
        var a = ui(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var o = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + o);
        }
        var c = di(a);
        if (c === null)
          return null;
        if (c.mode & Gn) {
          var v = ct(a) || "Component";
          if (!nb[v]) {
            nb[v] = !0;
            var g = zn;
            try {
              be(c), a.mode & Gn ? h("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, v) : h("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, v);
            } finally {
              g ? be(g) : Wn();
            }
          }
        }
        return c.stateNode;
      }
    }
    function Jx(e, t, a, o, c, v, g, C) {
      var b = !1, k = null;
      return qx(e, t, b, k, a, o, c, v, g);
    }
    function eT(e, t, a, o, c, v, g, C, b, k) {
      var M = !0, j = qx(a, o, M, e, c, v, g, C, b);
      j.context = Zx(null);
      var $ = j.current, Z = ti(), J = Ms($), ie = yu(Z, J);
      return ie.callback = t != null ? t : null, bs($, ie, J), N4(j, J, Z), j;
    }
    function dh(e, t, a, o) {
      Tm(t, e);
      var c = t.current, v = ti(), g = Ms(c);
      Yl(g);
      var C = Zx(a);
      t.context === null ? t.context = C : t.pendingContext = C, qr && zn !== null && !tb && (tb = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ct(zn) || "Unknown"));
      var b = yu(v, g);
      b.payload = {
        element: e
      }, o = o === void 0 ? null : o, o !== null && (typeof o != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", o), b.callback = o);
      var k = bs(c, b, g);
      return k !== null && (Yr(k, c, g, v), Hg(k, c, g)), g;
    }
    function _y(e) {
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
    function TO(e) {
      switch (e.tag) {
        case _: {
          var t = e.stateNode;
          if (Er(t)) {
            var a = e0(t);
            z4(t, a);
          }
          break;
        }
        case W: {
          Eu(function() {
            var c = Ci(e, ut);
            if (c !== null) {
              var v = ti();
              Yr(c, e, ut, v);
            }
          });
          var o = ut;
          rb(e, o);
          break;
        }
      }
    }
    function tT(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Hm(a.retryLane, t));
    }
    function rb(e, t) {
      tT(e, t);
      var a = e.alternate;
      a && tT(a, t);
    }
    function RO(e) {
      if (e.tag === W) {
        var t = Xu, a = Ci(e, t);
        if (a !== null) {
          var o = ti();
          Yr(a, e, t, o);
        }
        rb(e, t);
      }
    }
    function kO(e) {
      if (e.tag === W) {
        var t = Ms(e), a = Ci(e, t);
        if (a !== null) {
          var o = ti();
          Yr(a, e, t, o);
        }
        rb(e, t);
      }
    }
    function nT(e) {
      var t = Em(e);
      return t === null ? null : t.stateNode;
    }
    var rT = function(e) {
      return null;
    };
    function _O(e) {
      return rT(e);
    }
    var aT = function(e) {
      return !1;
    };
    function MO(e) {
      return aT(e);
    }
    var iT = null, oT = null, lT = null, uT = null, sT = null, cT = null, fT = null, dT = null, vT = null;
    {
      var pT = function(e, t, a) {
        var o = t[a], c = _r(e) ? e.slice() : Nt({}, e);
        return a + 1 === t.length ? (_r(c) ? c.splice(o, 1) : delete c[o], c) : (c[o] = pT(e[o], t, a + 1), c);
      }, hT = function(e, t) {
        return pT(e, t, 0);
      }, mT = function(e, t, a, o) {
        var c = t[o], v = _r(e) ? e.slice() : Nt({}, e);
        if (o + 1 === t.length) {
          var g = a[o];
          v[g] = v[c], _r(v) ? v.splice(c, 1) : delete v[c];
        } else
          v[c] = mT(
            // $FlowFixMe number or string is fine here
            e[c],
            t,
            a,
            o + 1
          );
        return v;
      }, gT = function(e, t, a) {
        if (t.length !== a.length) {
          y("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var o = 0; o < a.length - 1; o++)
            if (t[o] !== a[o]) {
              y("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return mT(e, t, a, 0);
      }, yT = function(e, t, a, o) {
        if (a >= t.length)
          return o;
        var c = t[a], v = _r(e) ? e.slice() : Nt({}, e);
        return v[c] = yT(e[c], t, a + 1, o), v;
      }, ST = function(e, t, a) {
        return yT(e, t, 0, a);
      }, ab = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      iT = function(e, t, a, o) {
        var c = ab(e, t);
        if (c !== null) {
          var v = ST(c.memoizedState, a, o);
          c.memoizedState = v, c.baseState = v, e.memoizedProps = Nt({}, e.memoizedProps);
          var g = Ci(e, ut);
          g !== null && Yr(g, e, ut, Dn);
        }
      }, oT = function(e, t, a) {
        var o = ab(e, t);
        if (o !== null) {
          var c = hT(o.memoizedState, a);
          o.memoizedState = c, o.baseState = c, e.memoizedProps = Nt({}, e.memoizedProps);
          var v = Ci(e, ut);
          v !== null && Yr(v, e, ut, Dn);
        }
      }, lT = function(e, t, a, o) {
        var c = ab(e, t);
        if (c !== null) {
          var v = gT(c.memoizedState, a, o);
          c.memoizedState = v, c.baseState = v, e.memoizedProps = Nt({}, e.memoizedProps);
          var g = Ci(e, ut);
          g !== null && Yr(g, e, ut, Dn);
        }
      }, uT = function(e, t, a) {
        e.pendingProps = ST(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = Ci(e, ut);
        o !== null && Yr(o, e, ut, Dn);
      }, sT = function(e, t) {
        e.pendingProps = hT(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ci(e, ut);
        a !== null && Yr(a, e, ut, Dn);
      }, cT = function(e, t, a) {
        e.pendingProps = gT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = Ci(e, ut);
        o !== null && Yr(o, e, ut, Dn);
      }, fT = function(e) {
        var t = Ci(e, ut);
        t !== null && Yr(t, e, ut, Dn);
      }, dT = function(e) {
        rT = e;
      }, vT = function(e) {
        aT = e;
      };
    }
    function OO(e) {
      var t = di(e);
      return t === null ? null : t.stateNode;
    }
    function NO(e) {
      return null;
    }
    function DO() {
      return zn;
    }
    function LO(e) {
      var t = e.findFiberByHostInstance, a = u.ReactCurrentDispatcher;
      return Iv({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: iT,
        overrideHookStateDeletePath: oT,
        overrideHookStateRenamePath: lT,
        overrideProps: uT,
        overridePropsDeletePath: sT,
        overridePropsRenamePath: cT,
        setErrorHandler: dT,
        setSuspenseHandler: vT,
        scheduleUpdate: fT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: OO,
        findFiberByHostInstance: t || NO,
        // React Refresh
        findHostInstancesForRefresh: sO,
        scheduleRefresh: lO,
        scheduleRoot: uO,
        setRefreshHandler: oO,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: DO,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: eb
      });
    }
    var CT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function ib(e) {
      this._internalRoot = e;
    }
    My.prototype.render = ib.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Oy(arguments[1]) ? h("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] != "undefined" && h("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== pr) {
          var o = nT(t.current);
          o && o.parentNode !== a && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      dh(e, t, null, null);
    }, My.prototype.unmount = ib.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Dx() && h("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Eu(function() {
          dh(null, e, null, null);
        }), S2(t);
      }
    };
    function AO(e, t) {
      if (!Oy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      bT(e);
      var a = !1, o = !1, c = "", v = CT;
      t != null && (t.hydrate ? y("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Qr && h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (c = t.identifierPrefix), t.onRecoverableError !== void 0 && (v = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var g = Jx(e, xg, null, a, o, c, v);
      gg(g.current, e);
      var C = e.nodeType === pr ? e.parentNode : e;
      return Cp(C), new ib(g);
    }
    function My(e) {
      this._internalRoot = e;
    }
    function zO(e) {
      e && Wm(e);
    }
    My.prototype.unstable_scheduleHydration = zO;
    function PO(e, t, a) {
      if (!Oy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      bT(e), t === void 0 && h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var o = a != null ? a : null, c = a != null && a.hydratedSources || null, v = !1, g = !1, C = "", b = CT;
      a != null && (a.unstable_strictMode === !0 && (v = !0), a.identifierPrefix !== void 0 && (C = a.identifierPrefix), a.onRecoverableError !== void 0 && (b = a.onRecoverableError));
      var k = eT(t, null, e, xg, o, v, g, C, b);
      if (gg(k.current, e), Cp(e), c)
        for (var M = 0; M < c.length; M++) {
          var j = c[M];
          BM(k, j);
        }
      return new My(k);
    }
    function Oy(e) {
      return !!(e && (e.nodeType === wa || e.nodeType === Di || e.nodeType === Il || !De));
    }
    function vh(e) {
      return !!(e && (e.nodeType === wa || e.nodeType === Di || e.nodeType === Il || e.nodeType === pr && e.nodeValue === " react-mount-point-unstable "));
    }
    function bT(e) {
      e.nodeType === wa && e.tagName && e.tagName.toUpperCase() === "BODY" && h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Np(e) && (e._reactRootContainer ? h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var HO = u.ReactCurrentOwner, ET;
    ET = function(e) {
      if (e._reactRootContainer && e.nodeType !== pr) {
        var t = nT(e._reactRootContainer.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, o = ob(e), c = !!(o && ms(o));
      c && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === wa && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function ob(e) {
      return e ? e.nodeType === Di ? e.documentElement : e.firstChild : null;
    }
    function wT() {
    }
    function UO(e, t, a, o, c) {
      if (c) {
        if (typeof o == "function") {
          var v = o;
          o = function() {
            var $ = _y(g);
            v.call($);
          };
        }
        var g = eT(
          t,
          o,
          e,
          ys,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          wT
        );
        e._reactRootContainer = g, gg(g.current, e);
        var C = e.nodeType === pr ? e.parentNode : e;
        return Cp(C), Eu(), g;
      } else {
        for (var b; b = e.lastChild; )
          e.removeChild(b);
        if (typeof o == "function") {
          var k = o;
          o = function() {
            var $ = _y(M);
            k.call($);
          };
        }
        var M = Jx(
          e,
          ys,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          wT
        );
        e._reactRootContainer = M, gg(M.current, e);
        var j = e.nodeType === pr ? e.parentNode : e;
        return Cp(j), Eu(function() {
          dh(t, M, a, o);
        }), M;
      }
    }
    function IO(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Ny(e, t, a, o, c) {
      ET(a), IO(c === void 0 ? null : c, "render");
      var v = a._reactRootContainer, g;
      if (!v)
        g = UO(a, t, e, c, o);
      else {
        if (g = v, typeof c == "function") {
          var C = c;
          c = function() {
            var b = _y(g);
            C.call(b);
          };
        }
        dh(t, g, e, c);
      }
      return _y(g);
    }
    function $O(e) {
      {
        var t = HO.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", nn(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === wa ? e : xO(e, "findDOMNode");
    }
    function FO(e, t, a) {
      if (h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !vh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Np(t) && t._reactRootContainer === void 0;
        o && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Ny(null, e, t, !0, a);
    }
    function jO(e, t, a) {
      if (h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !vh(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Np(t) && t._reactRootContainer === void 0;
        o && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Ny(null, e, t, !1, a);
    }
    function VO(e, t, a, o) {
      if (h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !vh(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !nc(e))
        throw new Error("parentComponent must be a valid React Component");
      return Ny(e, t, a, !1, o);
    }
    function BO(e) {
      if (!vh(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Np(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = ob(e), o = a && !ms(a);
          o && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Eu(function() {
          Ny(null, null, e, !1, function() {
            e._reactRootContainer = null, S2(e);
          });
        }), !0;
      } else {
        {
          var c = ob(e), v = !!(c && ms(c)), g = e.nodeType === wa && vh(e.parentNode) && !!e.parentNode._reactRootContainer;
          v && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", g ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Fe(TO), Im(RO), gc(kO), np(hi), Fm(pc), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Sm(Gk), pf(HC, P4, Eu);
    function WO(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Oy(t))
        throw new Error("Target container is not a DOM element.");
      return wO(e, t, null, a);
    }
    function KO(e, t, a, o) {
      return VO(e, t, a, o);
    }
    var lb = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [ms, md, yg, vf, Js, HC]
    };
    function GO(e, t) {
      return lb.usingClientEntryPoint || h('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), AO(e, t);
    }
    function YO(e, t, a) {
      return lb.usingClientEntryPoint || h('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), PO(e, t, a);
    }
    function QO(e) {
      return Dx() && h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Eu(e);
    }
    var XO = LO({
      findFiberByHostInstance: kc,
      bundleType: 1,
      version: eb,
      rendererPackageName: "react-dom"
    });
    if (!XO && Ot && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var xT = window.location.protocol;
      /^(https?|file):$/.test(xT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (xT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lb, Ti.createPortal = WO, Ti.createRoot = GO, Ti.findDOMNode = $O, Ti.flushSync = QO, Ti.hydrate = FO, Ti.hydrateRoot = YO, Ti.render = jO, Ti.unmountComponentAtNode = BO, Ti.unstable_batchedUpdates = HC, Ti.unstable_renderSubtreeIntoContainer = KO, Ti.version = eb, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ti;
}
function f5() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f5);
    } catch (i) {
      console.error(i);
    }
  }
}
process.env.NODE_ENV === "production" ? (f5(), Ob.exports = NN()) : Ob.exports = DN();
var d1 = Ob.exports;
const LN = /* @__PURE__ */ n5(d1);
function Jy(i) {
  return i instanceof HTMLElement || i instanceof SVGElement;
}
function Wy(i) {
  return Jy(i) ? i : i instanceof _i.Component ? LN.findDOMNode(i) : null;
}
function v1(i, l, u) {
  var f = w.useRef({});
  return (!("value" in f.current) || u(f.current.condition, l)) && (f.current.value = i(), f.current.condition = l), f.current.value;
}
function bE(i, l) {
  typeof i == "function" ? i(l) : cr(i) === "object" && i && "current" in i && (i.current = l);
}
function d5() {
  for (var i = arguments.length, l = new Array(i), u = 0; u < i; u++)
    l[u] = arguments[u];
  var f = l.filter(function(p) {
    return p;
  });
  return f.length <= 1 ? f[0] : function(p) {
    l.forEach(function(y) {
      bE(y, p);
    });
  };
}
function p1() {
  for (var i = arguments.length, l = new Array(i), u = 0; u < i; u++)
    l[u] = arguments[u];
  return v1(function() {
    return d5.apply(void 0, l);
  }, l, function(f, p) {
    return f.length !== p.length || f.every(function(y, h) {
      return y !== p[h];
    });
  });
}
function h1(i) {
  var l, u, f = By.isMemo(i) ? i.type.type : i.type;
  return !(typeof f == "function" && !((l = f.prototype) !== null && l !== void 0 && l.render) && f.$$typeof !== By.ForwardRef || typeof i == "function" && !((u = i.prototype) !== null && u !== void 0 && u.render) && i.$$typeof !== By.ForwardRef);
}
var Nb = /* @__PURE__ */ w.createContext(null);
function AN(i) {
  var l = i.children, u = i.onBatchResize, f = w.useRef(0), p = w.useRef([]), y = w.useContext(Nb), h = w.useCallback(function(x, T, R) {
    f.current += 1;
    var O = f.current;
    p.current.push({
      size: x,
      element: T,
      data: R
    }), Promise.resolve().then(function() {
      O === f.current && (u == null || u(p.current), p.current = []);
    }), y == null || y(x, T, R);
  }, [u, y]);
  return /* @__PURE__ */ w.createElement(Nb.Provider, {
    value: h
  }, l);
}
var v5 = function() {
  if (typeof Map != "undefined")
    return Map;
  function i(l, u) {
    var f = -1;
    return l.some(function(p, y) {
      return p[0] === u ? (f = y, !0) : !1;
    }), f;
  }
  return (
    /** @class */
    function() {
      function l() {
        this.__entries__ = [];
      }
      return Object.defineProperty(l.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), l.prototype.get = function(u) {
        var f = i(this.__entries__, u), p = this.__entries__[f];
        return p && p[1];
      }, l.prototype.set = function(u, f) {
        var p = i(this.__entries__, u);
        ~p ? this.__entries__[p][1] = f : this.__entries__.push([u, f]);
      }, l.prototype.delete = function(u) {
        var f = this.__entries__, p = i(f, u);
        ~p && f.splice(p, 1);
      }, l.prototype.has = function(u) {
        return !!~i(this.__entries__, u);
      }, l.prototype.clear = function() {
        this.__entries__.splice(0);
      }, l.prototype.forEach = function(u, f) {
        f === void 0 && (f = null);
        for (var p = 0, y = this.__entries__; p < y.length; p++) {
          var h = y[p];
          u.call(f, h[1], h[0]);
        }
      }, l;
    }()
  );
}(), Db = typeof window != "undefined" && typeof document != "undefined" && window.document === document, e1 = function() {
  return typeof global != "undefined" && global.Math === Math ? global : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")();
}(), zN = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(e1) : function(i) {
    return setTimeout(function() {
      return i(Date.now());
    }, 1e3 / 60);
  };
}(), PN = 2;
function HN(i, l) {
  var u = !1, f = !1, p = 0;
  function y() {
    u && (u = !1, i()), f && x();
  }
  function h() {
    zN(y);
  }
  function x() {
    var T = Date.now();
    if (u) {
      if (T - p < PN)
        return;
      f = !0;
    } else
      u = !0, f = !1, setTimeout(h, l);
    p = T;
  }
  return x;
}
var UN = 20, IN = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], $N = typeof MutationObserver != "undefined", FN = (
  /** @class */
  function() {
    function i() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = HN(this.refresh.bind(this), UN);
    }
    return i.prototype.addObserver = function(l) {
      ~this.observers_.indexOf(l) || this.observers_.push(l), this.connected_ || this.connect_();
    }, i.prototype.removeObserver = function(l) {
      var u = this.observers_, f = u.indexOf(l);
      ~f && u.splice(f, 1), !u.length && this.connected_ && this.disconnect_();
    }, i.prototype.refresh = function() {
      var l = this.updateObservers_();
      l && this.refresh();
    }, i.prototype.updateObservers_ = function() {
      var l = this.observers_.filter(function(u) {
        return u.gatherActive(), u.hasActive();
      });
      return l.forEach(function(u) {
        return u.broadcastActive();
      }), l.length > 0;
    }, i.prototype.connect_ = function() {
      !Db || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), $N ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, i.prototype.disconnect_ = function() {
      !Db || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, i.prototype.onTransitionEnd_ = function(l) {
      var u = l.propertyName, f = u === void 0 ? "" : u, p = IN.some(function(y) {
        return !!~f.indexOf(y);
      });
      p && this.refresh();
    }, i.getInstance = function() {
      return this.instance_ || (this.instance_ = new i()), this.instance_;
    }, i.instance_ = null, i;
  }()
), p5 = function(i, l) {
  for (var u = 0, f = Object.keys(l); u < f.length; u++) {
    var p = f[u];
    Object.defineProperty(i, p, {
      value: l[p],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return i;
}, Jd = function(i) {
  var l = i && i.ownerDocument && i.ownerDocument.defaultView;
  return l || e1;
}, h5 = m1(0, 0, 0, 0);
function t1(i) {
  return parseFloat(i) || 0;
}
function zT(i) {
  for (var l = [], u = 1; u < arguments.length; u++)
    l[u - 1] = arguments[u];
  return l.reduce(function(f, p) {
    var y = i["border-" + p + "-width"];
    return f + t1(y);
  }, 0);
}
function jN(i) {
  for (var l = ["top", "right", "bottom", "left"], u = {}, f = 0, p = l; f < p.length; f++) {
    var y = p[f], h = i["padding-" + y];
    u[y] = t1(h);
  }
  return u;
}
function VN(i) {
  var l = i.getBBox();
  return m1(0, 0, l.width, l.height);
}
function BN(i) {
  var l = i.clientWidth, u = i.clientHeight;
  if (!l && !u)
    return h5;
  var f = Jd(i).getComputedStyle(i), p = jN(f), y = p.left + p.right, h = p.top + p.bottom, x = t1(f.width), T = t1(f.height);
  if (f.boxSizing === "border-box" && (Math.round(x + y) !== l && (x -= zT(f, "left", "right") + y), Math.round(T + h) !== u && (T -= zT(f, "top", "bottom") + h)), !KN(i)) {
    var R = Math.round(x + y) - l, O = Math.round(T + h) - u;
    Math.abs(R) !== 1 && (x -= R), Math.abs(O) !== 1 && (T -= O);
  }
  return m1(p.left, p.top, x, T);
}
var WN = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement != "undefined" ? function(i) {
    return i instanceof Jd(i).SVGGraphicsElement;
  } : function(i) {
    return i instanceof Jd(i).SVGElement && typeof i.getBBox == "function";
  };
}();
function KN(i) {
  return i === Jd(i).document.documentElement;
}
function GN(i) {
  return Db ? WN(i) ? VN(i) : BN(i) : h5;
}
function YN(i) {
  var l = i.x, u = i.y, f = i.width, p = i.height, y = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object, h = Object.create(y.prototype);
  return p5(h, {
    x: l,
    y: u,
    width: f,
    height: p,
    top: u,
    right: l + f,
    bottom: p + u,
    left: l
  }), h;
}
function m1(i, l, u, f) {
  return { x: i, y: l, width: u, height: f };
}
var QN = (
  /** @class */
  function() {
    function i(l) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = m1(0, 0, 0, 0), this.target = l;
    }
    return i.prototype.isActive = function() {
      var l = GN(this.target);
      return this.contentRect_ = l, l.width !== this.broadcastWidth || l.height !== this.broadcastHeight;
    }, i.prototype.broadcastRect = function() {
      var l = this.contentRect_;
      return this.broadcastWidth = l.width, this.broadcastHeight = l.height, l;
    }, i;
  }()
), XN = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(l, u) {
      var f = YN(u);
      p5(this, { target: l, contentRect: f });
    }
    return i;
  }()
), qN = (
  /** @class */
  function() {
    function i(l, u, f) {
      if (this.activeObservations_ = [], this.observations_ = new v5(), typeof l != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = l, this.controller_ = u, this.callbackCtx_ = f;
    }
    return i.prototype.observe = function(l) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
        if (!(l instanceof Jd(l).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var u = this.observations_;
        u.has(l) || (u.set(l, new QN(l)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, i.prototype.unobserve = function(l) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element == "undefined" || !(Element instanceof Object))) {
        if (!(l instanceof Jd(l).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var u = this.observations_;
        u.has(l) && (u.delete(l), u.size || this.controller_.removeObserver(this));
      }
    }, i.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, i.prototype.gatherActive = function() {
      var l = this;
      this.clearActive(), this.observations_.forEach(function(u) {
        u.isActive() && l.activeObservations_.push(u);
      });
    }, i.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var l = this.callbackCtx_, u = this.activeObservations_.map(function(f) {
          return new XN(f.target, f.broadcastRect());
        });
        this.callback_.call(l, u, l), this.clearActive();
      }
    }, i.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, i.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, i;
  }()
), m5 = typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : new v5(), g5 = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(l) {
      if (!(this instanceof i))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var u = FN.getInstance(), f = new qN(l, u, this);
      m5.set(this, f);
    }
    return i;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(i) {
  g5.prototype[i] = function() {
    var l;
    return (l = m5.get(this))[i].apply(l, arguments);
  };
});
var ZN = function() {
  return typeof e1.ResizeObserver != "undefined" ? e1.ResizeObserver : g5;
}(), Ou = /* @__PURE__ */ new Map();
function y5(i) {
  i.forEach(function(l) {
    var u, f = l.target;
    (u = Ou.get(f)) === null || u === void 0 || u.forEach(function(p) {
      return p(f);
    });
  });
}
var S5 = new ZN(y5);
process.env.NODE_ENV;
process.env.NODE_ENV;
function JN(i, l) {
  Ou.has(i) || (Ou.set(i, /* @__PURE__ */ new Set()), S5.observe(i)), Ou.get(i).add(l);
}
function eD(i, l) {
  Ou.has(i) && (Ou.get(i).delete(l), Ou.get(i).size || (S5.unobserve(i), Ou.delete(i)));
}
function Xo(i, l) {
  if (!(i instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
function PT(i, l) {
  for (var u = 0; u < l.length; u++) {
    var f = l[u];
    f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(i, a5(f.key), f);
  }
}
function qo(i, l, u) {
  return l && PT(i.prototype, l), u && PT(i, u), Object.defineProperty(i, "prototype", {
    writable: !1
  }), i;
}
function Lb(i, l) {
  return Lb = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, p) {
    return f.__proto__ = p, f;
  }, Lb(i, l);
}
function nv(i, l) {
  if (typeof l != "function" && l !== null)
    throw new TypeError("Super expression must either be null or a function");
  i.prototype = Object.create(l && l.prototype, {
    constructor: {
      value: i,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(i, "prototype", {
    writable: !1
  }), l && Lb(i, l);
}
function Ps(i) {
  return Ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(u) {
    return u.__proto__ || Object.getPrototypeOf(u);
  }, Ps(i);
}
function g1() {
  try {
    var i = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (l) {
  }
  return (g1 = function() {
    return !!i;
  })();
}
function Ab(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function EE(i, l) {
  if (l && (cr(l) === "object" || typeof l == "function"))
    return l;
  if (l !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ab(i);
}
function y1(i) {
  var l = g1();
  return function() {
    var f = Ps(i), p;
    if (l) {
      var y = Ps(this).constructor;
      p = Reflect.construct(f, arguments, y);
    } else
      p = f.apply(this, arguments);
    return EE(this, p);
  };
}
var tD = /* @__PURE__ */ function(i) {
  nv(u, i);
  var l = y1(u);
  function u() {
    return Xo(this, u), l.apply(this, arguments);
  }
  return qo(u, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), u;
}(w.Component);
function nD(i, l) {
  var u = i.children, f = i.disabled, p = w.useRef(null), y = w.useRef(null), h = w.useContext(Nb), x = typeof u == "function", T = x ? u(p) : u, R = w.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), O = !x && /* @__PURE__ */ w.isValidElement(T) && h1(T), _ = O ? T.ref : null, N = p1(_, p), L = function() {
    var q;
    return Wy(p.current) || // Support `nativeElement` format
    (p.current && cr(p.current) === "object" ? Wy((q = p.current) === null || q === void 0 ? void 0 : q.nativeElement) : null) || Wy(y.current);
  };
  w.useImperativeHandle(l, function() {
    return L();
  });
  var z = w.useRef(i);
  z.current = i;
  var H = w.useCallback(function(A) {
    var q = z.current, V = q.onResize, U = q.data, I = A.getBoundingClientRect(), W = I.width, re = I.height, G = A.offsetWidth, se = A.offsetHeight, Te = Math.floor(W), le = Math.floor(re);
    if (R.current.width !== Te || R.current.height !== le || R.current.offsetWidth !== G || R.current.offsetHeight !== se) {
      var ge = {
        width: Te,
        height: le,
        offsetWidth: G,
        offsetHeight: se
      };
      R.current = ge;
      var Ee = G === Math.round(W) ? W : G, ne = se === Math.round(re) ? re : se, fe = Re(Re({}, ge), {}, {
        offsetWidth: Ee,
        offsetHeight: ne
      });
      h == null || h(fe, A, U), V && Promise.resolve().then(function() {
        V(fe, A);
      });
    }
  }, []);
  return w.useEffect(function() {
    var A = L();
    return A && !f && JN(A, H), function() {
      return eD(A, H);
    };
  }, [p.current, f]), /* @__PURE__ */ w.createElement(tD, {
    ref: y
  }, O ? /* @__PURE__ */ w.cloneElement(T, {
    ref: N
  }) : T);
}
var C5 = /* @__PURE__ */ w.forwardRef(nD);
process.env.NODE_ENV !== "production" && (C5.displayName = "SingleObserver");
var rD = "rc-observer-key";
function aD(i, l) {
  var u = i.children, f = typeof u == "function" ? [u] : kh(u);
  return process.env.NODE_ENV !== "production" && (f.length > 1 ? Zd(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : f.length === 0 && Zd(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), f.map(function(p, y) {
    var h = (p == null ? void 0 : p.key) || "".concat(rD, "-").concat(y);
    return /* @__PURE__ */ w.createElement(C5, bn({}, i, {
      key: h,
      ref: y === 0 ? l : void 0
    }), p);
  });
}
var rv = /* @__PURE__ */ w.forwardRef(aD);
process.env.NODE_ENV !== "production" && (rv.displayName = "ResizeObserver");
rv.Collection = AN;
function ai() {
  return !!(typeof window != "undefined" && window.document && window.document.createElement);
}
var HT = process.env.NODE_ENV !== "test" && ai() ? w.useLayoutEffect : w.useEffect, Ua = function(l, u) {
  var f = w.useRef(!0);
  HT(function() {
    return l(f.current);
  }, u), HT(function() {
    return f.current = !1, function() {
      f.current = !0;
    };
  }, []);
}, UT = function(l, u) {
  Ua(function(f) {
    if (!f)
      return l();
  }, u);
}, iD = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Fd = void 0;
function oD(i, l) {
  var u = i.prefixCls, f = i.invalidate, p = i.item, y = i.renderItem, h = i.responsive, x = i.responsiveDisabled, T = i.registerSize, R = i.itemKey, O = i.className, _ = i.style, N = i.children, L = i.display, z = i.order, H = i.component, A = H === void 0 ? "div" : H, q = tr(i, iD), V = h && !L;
  function U(se) {
    T(R, se);
  }
  w.useEffect(function() {
    return function() {
      U(null);
    };
  }, []);
  var I = y && p !== Fd ? y(p) : N, W;
  f || (W = {
    opacity: V ? 0 : 1,
    height: V ? 0 : Fd,
    overflowY: V ? "hidden" : Fd,
    order: h ? z : Fd,
    pointerEvents: V ? "none" : Fd,
    position: V ? "absolute" : Fd
  });
  var re = {};
  V && (re["aria-hidden"] = !0);
  var G = /* @__PURE__ */ w.createElement(A, bn({
    className: Fn(!f && u, O),
    style: Re(Re({}, W), _)
  }, re, q, {
    ref: l
  }), I);
  return h && (G = /* @__PURE__ */ w.createElement(rv, {
    onResize: function(Te) {
      var le = Te.offsetWidth;
      U(le);
    },
    disabled: x
  }, G)), G;
}
var Eh = /* @__PURE__ */ w.forwardRef(oD);
Eh.displayName = "Item";
function Dl(i) {
  var l = w.useRef();
  l.current = i;
  var u = w.useCallback(function() {
    for (var f, p = arguments.length, y = new Array(p), h = 0; h < p; h++)
      y[h] = arguments[h];
    return (f = l.current) === null || f === void 0 ? void 0 : f.call.apply(f, [l].concat(y));
  }, []);
  return u;
}
var b5 = function(l) {
  return +setTimeout(l, 16);
}, E5 = function(l) {
  return clearTimeout(l);
};
typeof window != "undefined" && "requestAnimationFrame" in window && (b5 = function(l) {
  return window.requestAnimationFrame(l);
}, E5 = function(l) {
  return window.cancelAnimationFrame(l);
});
var IT = 0, S1 = /* @__PURE__ */ new Map();
function w5(i) {
  S1.delete(i);
}
var uo = function(l) {
  var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  IT += 1;
  var f = IT;
  function p(y) {
    if (y === 0)
      w5(f), l();
    else {
      var h = b5(function() {
        p(y - 1);
      });
      S1.set(f, h);
    }
  }
  return p(u), f;
};
uo.cancel = function(i) {
  var l = S1.get(i);
  return w5(i), E5(l);
};
process.env.NODE_ENV !== "production" && (uo.ids = function() {
  return S1;
});
function lD(i) {
  if (typeof MessageChannel == "undefined")
    uo(i);
  else {
    var l = new MessageChannel();
    l.port1.onmessage = function() {
      return i();
    }, l.port2.postMessage(void 0);
  }
}
function uD() {
  var i = w.useRef(null), l = function(f) {
    i.current || (i.current = [], lD(function() {
      d1.unstable_batchedUpdates(function() {
        i.current.forEach(function(p) {
          p();
        }), i.current = null;
      });
    })), i.current.push(f);
  };
  return l;
}
function hh(i, l) {
  var u = w.useState(l), f = _e(u, 2), p = f[0], y = f[1], h = Dl(function(x) {
    i(function() {
      y(x);
    });
  });
  return [p, h];
}
var n1 = /* @__PURE__ */ _i.createContext(null), sD = ["component"], cD = ["className"], fD = ["className"], dD = function(l, u) {
  var f = w.useContext(n1);
  if (!f) {
    var p = l.component, y = p === void 0 ? "div" : p, h = tr(l, sD);
    return /* @__PURE__ */ w.createElement(y, bn({}, h, {
      ref: u
    }));
  }
  var x = f.className, T = tr(f, cD), R = l.className, O = tr(l, fD);
  return /* @__PURE__ */ w.createElement(n1.Provider, {
    value: null
  }, /* @__PURE__ */ w.createElement(Eh, bn({
    ref: u,
    className: Fn(x, R)
  }, T, O)));
}, x5 = /* @__PURE__ */ w.forwardRef(dD);
x5.displayName = "RawItem";
var vD = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], T5 = "responsive", R5 = "invalidate";
function pD(i) {
  return "+ ".concat(i.length, " ...");
}
function hD(i, l) {
  var u = i.prefixCls, f = u === void 0 ? "rc-overflow" : u, p = i.data, y = p === void 0 ? [] : p, h = i.renderItem, x = i.renderRawItem, T = i.itemKey, R = i.itemWidth, O = R === void 0 ? 10 : R, _ = i.ssr, N = i.style, L = i.className, z = i.maxCount, H = i.renderRest, A = i.renderRawRest, q = i.suffix, V = i.component, U = V === void 0 ? "div" : V, I = i.itemComponent, W = i.onVisibleChange, re = tr(i, vD), G = _ === "full", se = uD(), Te = hh(se, null), le = _e(Te, 2), ge = le[0], Ee = le[1], ne = ge || 0, fe = hh(se, /* @__PURE__ */ new Map()), Ce = _e(fe, 2), we = Ce[0], Ne = Ce[1], ee = hh(se, 0), de = _e(ee, 2), ae = de[0], ze = de[1], De = hh(se, 0), ft = _e(De, 2), dt = ft[0], At = ft[1], it = hh(se, 0), Rt = _e(it, 2), st = Rt[0], Mt = Rt[1], Gt = Al(null), Ze = _e(Gt, 2), Ft = Ze[0], Ot = Ze[1], Se = Al(null), Et = _e(Se, 2), Ct = Et[0], kt = Et[1], Wt = w.useMemo(function() {
    return Ct === null && G ? Number.MAX_SAFE_INTEGER : Ct || 0;
  }, [Ct, ge]), Qe = Al(!1), wt = _e(Qe, 2), vt = wt[0], ln = wt[1], Je = "".concat(f, "-item"), Xt = Math.max(ae, dt), qt = z === T5, It = y.length && qt, kn = z === R5, _n = It || typeof z == "number" && y.length > z, cn = Rb(function() {
    var Le = y;
    return It ? ge === null && G ? Le = y : Le = y.slice(0, Math.min(y.length, ne / O)) : typeof z == "number" && (Le = y.slice(0, z)), Le;
  }, [y, O, ge, z, It]), fn = Rb(function() {
    return It ? y.slice(Wt + 1) : y.slice(cn.length);
  }, [y, cn, It, Wt]), he = _u(function(Le, Ye) {
    var Ut;
    return typeof T == "function" ? T(Le) : (Ut = T && (Le == null ? void 0 : Le[T])) !== null && Ut !== void 0 ? Ut : Ye;
  }, [T]), Ue = _u(h || function(Le) {
    return Le;
  }, [h]);
  function We(Le, Ye, Ut) {
    Ct === Le && (Ye === void 0 || Ye === Ft) || (kt(Le), Ut || (ln(Le < y.length - 1), W == null || W(Le)), Ye !== void 0 && Ot(Ye));
  }
  function zt(Le, Ye) {
    Ee(Ye.clientWidth);
  }
  function Pt(Le, Ye) {
    Ne(function(Ut) {
      var En = new Map(Ut);
      return Ye === null ? En.delete(Le) : En.set(Le, Ye), En;
    });
  }
  function pt(Le, Ye) {
    At(Ye), ze(dt);
  }
  function ht(Le, Ye) {
    Mt(Ye);
  }
  function Mn(Le) {
    return we.get(he(cn[Le], Le));
  }
  Ua(function() {
    if (ne && typeof Xt == "number" && cn) {
      var Le = st, Ye = cn.length, Ut = Ye - 1;
      if (!Ye) {
        We(0, null);
        return;
      }
      for (var En = 0; En < Ye; En += 1) {
        var nr = Mn(En);
        if (G && (nr = nr || 0), nr === void 0) {
          We(En - 1, void 0, !0);
          break;
        }
        if (Le += nr, // Only one means `totalWidth` is the final width
        Ut === 0 && Le <= ne || // Last two width will be the final width
        En === Ut - 1 && Le + Mn(Ut) <= ne) {
          We(Ut, null);
          break;
        } else if (Le + Xt > ne) {
          We(En - 1, Le - nr - st + dt);
          break;
        }
      }
      q && Mn(0) + st > ne && Ot(null);
    }
  }, [ne, we, dt, st, he, cn]);
  var Ht = vt && !!fn.length, Zt = {};
  Ft !== null && It && (Zt = {
    position: "absolute",
    left: Ft,
    top: 0
  });
  var $t = {
    prefixCls: Je,
    responsive: It,
    component: I,
    invalidate: kn
  }, tn = x ? function(Le, Ye) {
    var Ut = he(Le, Ye);
    return /* @__PURE__ */ w.createElement(n1.Provider, {
      key: Ut,
      value: Re(Re({}, $t), {}, {
        order: Ye,
        item: Le,
        itemKey: Ut,
        registerSize: Pt,
        display: Ye <= Wt
      })
    }, x(Le, Ye));
  } : function(Le, Ye) {
    var Ut = he(Le, Ye);
    return /* @__PURE__ */ w.createElement(Eh, bn({}, $t, {
      order: Ye,
      key: Ut,
      item: Le,
      renderItem: Ue,
      itemKey: Ut,
      registerSize: Pt,
      display: Ye <= Wt
    }));
  }, Kt, Jt = {
    order: Ht ? Wt : Number.MAX_SAFE_INTEGER,
    className: "".concat(Je, "-rest"),
    registerSize: pt,
    display: Ht
  };
  if (A)
    A && (Kt = /* @__PURE__ */ w.createElement(n1.Provider, {
      value: Re(Re({}, $t), Jt)
    }, A(fn)));
  else {
    var xt = H || pD;
    Kt = /* @__PURE__ */ w.createElement(Eh, bn({}, $t, Jt), typeof xt == "function" ? xt(fn) : xt);
  }
  var jt = /* @__PURE__ */ w.createElement(U, bn({
    className: Fn(!kn && f, L),
    style: N,
    ref: l
  }, re), cn.map(tn), _n ? Kt : null, q && /* @__PURE__ */ w.createElement(Eh, bn({}, $t, {
    responsive: qt,
    responsiveDisabled: !It,
    order: Wt,
    className: "".concat(Je, "-suffix"),
    registerSize: ht,
    display: !0,
    style: Zt
  }), q));
  return qt && (jt = /* @__PURE__ */ w.createElement(rv, {
    onResize: zt,
    disabled: !It
  }, jt)), jt;
}
var Nu = /* @__PURE__ */ w.forwardRef(hD);
Nu.displayName = "Overflow";
Nu.Item = x5;
Nu.RESPONSIVE = T5;
Nu.INVALIDATE = R5;
function Xd(i) {
  var l = w.useRef(!1), u = w.useState(i), f = _e(u, 2), p = f[0], y = f[1];
  w.useEffect(function() {
    return l.current = !1, function() {
      l.current = !0;
    };
  }, []);
  function h(x, T) {
    T && l.current || y(x);
  }
  return [p, h];
}
function cb(i) {
  return i !== void 0;
}
function wh(i, l) {
  var u = l || {}, f = u.defaultValue, p = u.value, y = u.onChange, h = u.postState, x = Xd(function() {
    return cb(p) ? p : cb(f) ? typeof f == "function" ? f() : f : typeof i == "function" ? i() : i;
  }), T = _e(x, 2), R = T[0], O = T[1], _ = p !== void 0 ? p : R, N = h ? h(_) : _, L = Dl(y), z = Xd([_]), H = _e(z, 2), A = H[0], q = H[1];
  UT(function() {
    var U = A[0];
    R !== U && L(R, U);
  }, [A]), UT(function() {
    cb(p) || O(p);
  }, [p]);
  var V = Dl(function(U, I) {
    O(U, I), q([_], I);
  });
  return [N, V];
}
function wE(i, l) {
  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, f = /* @__PURE__ */ new Set();
  function p(y, h) {
    var x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, T = f.has(y);
    if (ii(!T, "Warning: There may be circular references"), T)
      return !1;
    if (y === h)
      return !0;
    if (u && x > 1)
      return !1;
    f.add(y);
    var R = x + 1;
    if (Array.isArray(y)) {
      if (!Array.isArray(h) || y.length !== h.length)
        return !1;
      for (var O = 0; O < y.length; O++)
        if (!p(y[O], h[O], R))
          return !1;
      return !0;
    }
    if (y && h && cr(y) === "object" && cr(h) === "object") {
      var _ = Object.keys(y);
      return _.length !== Object.keys(h).length ? !1 : _.every(function(N) {
        return p(y[N], h[N], R);
      });
    }
    return !1;
  }
  return p(i, l);
}
var k5 = /* @__PURE__ */ w.createContext(null);
function _5(i, l) {
  return i === void 0 ? null : "".concat(i, "-").concat(l);
}
function M5(i) {
  var l = w.useContext(k5);
  return _5(l, i);
}
var mD = ["children", "locked"], Qo = /* @__PURE__ */ w.createContext(null);
function gD(i, l) {
  var u = Re({}, i);
  return Object.keys(l).forEach(function(f) {
    var p = l[f];
    p !== void 0 && (u[f] = p);
  }), u;
}
function _h(i) {
  var l = i.children, u = i.locked, f = tr(i, mD), p = w.useContext(Qo), y = v1(function() {
    return gD(p, f);
  }, [p, f], function(h, x) {
    return !u && (h[0] !== x[0] || !wE(h[1], x[1], !0));
  });
  return /* @__PURE__ */ w.createElement(Qo.Provider, {
    value: y
  }, l);
}
var yD = [], O5 = /* @__PURE__ */ w.createContext(null);
function C1() {
  return w.useContext(O5);
}
var N5 = /* @__PURE__ */ w.createContext(yD);
function Ih(i) {
  var l = w.useContext(N5);
  return w.useMemo(function() {
    return i !== void 0 ? [].concat(Tr(l), [i]) : l;
  }, [l, i]);
}
var D5 = /* @__PURE__ */ w.createContext(null), xE = /* @__PURE__ */ w.createContext({});
const L5 = function(i) {
  if (!i)
    return !1;
  if (i instanceof Element) {
    if (i.offsetParent)
      return !0;
    if (i.getBBox) {
      var l = i.getBBox(), u = l.width, f = l.height;
      if (u || f)
        return !0;
    }
    if (i.getBoundingClientRect) {
      var p = i.getBoundingClientRect(), y = p.width, h = p.height;
      if (y || h)
        return !0;
    }
  }
  return !1;
};
function $T(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (L5(i)) {
    var u = i.nodeName.toLowerCase(), f = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(u) || // Editable element
      i.isContentEditable || // Anchor with href element
      u === "a" && !!i.getAttribute("href")
    ), p = i.getAttribute("tabindex"), y = Number(p), h = null;
    return p && !Number.isNaN(y) ? h = y : f && h === null && (h = 0), f && i.disabled && (h = null), h !== null && (h >= 0 || l && h < 0);
  }
  return !1;
}
function SD(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = Tr(i.querySelectorAll("*")).filter(function(f) {
    return $T(f, l);
  });
  return $T(i, l) && u.unshift(i), u;
}
var rt = {
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
  isTextModifyingKeyEvent: function(l) {
    var u = l.keyCode;
    if (l.altKey && !l.ctrlKey || l.metaKey || // Function keys don't generate text
    u >= rt.F1 && u <= rt.F12)
      return !1;
    switch (u) {
      case rt.ALT:
      case rt.CAPS_LOCK:
      case rt.CONTEXT_MENU:
      case rt.CTRL:
      case rt.DOWN:
      case rt.END:
      case rt.ESC:
      case rt.HOME:
      case rt.INSERT:
      case rt.LEFT:
      case rt.MAC_FF_META:
      case rt.META:
      case rt.NUMLOCK:
      case rt.NUM_CENTER:
      case rt.PAGE_DOWN:
      case rt.PAGE_UP:
      case rt.PAUSE:
      case rt.PRINT_SCREEN:
      case rt.RIGHT:
      case rt.SHIFT:
      case rt.UP:
      case rt.WIN_KEY:
      case rt.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(l) {
    if (l >= rt.ZERO && l <= rt.NINE || l >= rt.NUM_ZERO && l <= rt.NUM_MULTIPLY || l >= rt.A && l <= rt.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && l === 0)
      return !0;
    switch (l) {
      case rt.SPACE:
      case rt.QUESTION_MARK:
      case rt.NUM_PLUS:
      case rt.NUM_MINUS:
      case rt.NUM_PERIOD:
      case rt.NUM_DIVISION:
      case rt.SEMICOLON:
      case rt.DASH:
      case rt.EQUALS:
      case rt.COMMA:
      case rt.PERIOD:
      case rt.SLASH:
      case rt.APOSTROPHE:
      case rt.SINGLE_QUOTE:
      case rt.OPEN_SQUARE_BRACKET:
      case rt.BACKSLASH:
      case rt.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
}, zb = rt.LEFT, Pb = rt.RIGHT, Hb = rt.UP, Ky = rt.DOWN, Gy = rt.ENTER, A5 = rt.ESC, mh = rt.HOME, gh = rt.END, FT = [Hb, Ky, zb, Pb];
function CD(i, l, u, f) {
  var p, y, h, x, T = "prev", R = "next", O = "children", _ = "parent";
  if (i === "inline" && f === Gy)
    return {
      inlineTrigger: !0
    };
  var N = (p = {}, tt(p, Hb, T), tt(p, Ky, R), p), L = (y = {}, tt(y, zb, u ? R : T), tt(y, Pb, u ? T : R), tt(y, Ky, O), tt(y, Gy, O), y), z = (h = {}, tt(h, Hb, T), tt(h, Ky, R), tt(h, Gy, O), tt(h, A5, _), tt(h, zb, u ? O : _), tt(h, Pb, u ? _ : O), h), H = {
    inline: N,
    horizontal: L,
    vertical: z,
    inlineSub: N,
    horizontalSub: z,
    verticalSub: z
  }, A = (x = H["".concat(i).concat(l ? "" : "Sub")]) === null || x === void 0 ? void 0 : x[f];
  switch (A) {
    case T:
      return {
        offset: -1,
        sibling: !0
      };
    case R:
      return {
        offset: 1,
        sibling: !0
      };
    case _:
      return {
        offset: -1,
        sibling: !1
      };
    case O:
      return {
        offset: 1,
        sibling: !1
      };
    default:
      return null;
  }
}
function bD(i) {
  for (var l = i; l; ) {
    if (l.getAttribute("data-menu-list"))
      return l;
    l = l.parentElement;
  }
  return null;
}
function ED(i, l) {
  for (var u = i || document.activeElement; u; ) {
    if (l.has(u))
      return u;
    u = u.parentElement;
  }
  return null;
}
function TE(i, l) {
  var u = SD(i, !0);
  return u.filter(function(f) {
    return l.has(f);
  });
}
function jT(i, l, u) {
  var f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!i)
    return null;
  var p = TE(i, l), y = p.length, h = p.findIndex(function(x) {
    return u === x;
  });
  return f < 0 ? h === -1 ? h = y - 1 : h -= 1 : f > 0 && (h += 1), h = (h + y) % y, p[h];
}
var Ub = function(l, u) {
  var f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
  return l.forEach(function(h) {
    var x = document.querySelector("[data-menu-id='".concat(_5(u, h), "']"));
    x && (f.add(x), y.set(x, h), p.set(h, x));
  }), {
    elements: f,
    key2element: p,
    element2key: y
  };
};
function wD(i, l, u, f, p, y, h, x, T, R) {
  var O = w.useRef(), _ = w.useRef();
  _.current = l;
  var N = function() {
    uo.cancel(O.current);
  };
  return w.useEffect(function() {
    return function() {
      N();
    };
  }, []), function(L) {
    var z = L.which;
    if ([].concat(FT, [Gy, A5, mh, gh]).includes(z)) {
      var H = y(), A = Ub(H, f), q = A, V = q.elements, U = q.key2element, I = q.element2key, W = U.get(l), re = ED(W, V), G = I.get(re), se = CD(i, h(G, !0).length === 1, u, z);
      if (!se && z !== mh && z !== gh)
        return;
      (FT.includes(z) || [mh, gh].includes(z)) && L.preventDefault();
      var Te = function(Ne) {
        if (Ne) {
          var ee = Ne, de = Ne.querySelector("a");
          de != null && de.getAttribute("href") && (ee = de);
          var ae = I.get(Ne);
          x(ae), N(), O.current = uo(function() {
            _.current === ae && ee.focus();
          });
        }
      };
      if ([mh, gh].includes(z) || se.sibling || !re) {
        var le;
        !re || i === "inline" ? le = p.current : le = bD(re);
        var ge, Ee = TE(le, V);
        z === mh ? ge = Ee[0] : z === gh ? ge = Ee[Ee.length - 1] : ge = jT(le, V, re, se.offset), Te(ge);
      } else if (se.inlineTrigger)
        T(G);
      else if (se.offset > 0)
        T(G, !0), N(), O.current = uo(function() {
          A = Ub(H, f);
          var we = re.getAttribute("aria-controls"), Ne = document.getElementById(we), ee = jT(Ne, A.elements);
          Te(ee);
        }, 5);
      else if (se.offset < 0) {
        var ne = h(G, !0), fe = ne[ne.length - 2], Ce = U.get(fe);
        T(fe, !1), Te(Ce);
      }
    }
    R == null || R(L);
  };
}
function xD(i) {
  Promise.resolve().then(i);
}
var RE = "__RC_UTIL_PATH_SPLIT__", VT = function(l) {
  return l.join(RE);
}, TD = function(l) {
  return l.split(RE);
}, Ib = "rc-menu-more";
function RD() {
  var i = w.useState({}), l = _e(i, 2), u = l[1], f = ki(/* @__PURE__ */ new Map()), p = ki(/* @__PURE__ */ new Map()), y = w.useState([]), h = _e(y, 2), x = h[0], T = h[1], R = ki(0), O = ki(!1), _ = function() {
    O.current || u({});
  }, N = _u(function(U, I) {
    process.env.NODE_ENV !== "production" && ii(!f.current.has(U), "Duplicated key '".concat(U, "' used in Menu by path [").concat(I.join(" > "), "]"));
    var W = VT(I);
    p.current.set(W, U), f.current.set(U, W), R.current += 1;
    var re = R.current;
    xD(function() {
      re === R.current && _();
    });
  }, []), L = _u(function(U, I) {
    var W = VT(I);
    p.current.delete(W), f.current.delete(U);
  }, []), z = _u(function(U) {
    T(U);
  }, []), H = _u(function(U, I) {
    var W = f.current.get(U) || "", re = TD(W);
    return I && x.includes(re[0]) && re.unshift(Ib), re;
  }, [x]), A = _u(function(U, I) {
    return U.some(function(W) {
      var re = H(W, !0);
      return re.includes(I);
    });
  }, [H]), q = function() {
    var I = Tr(f.current.keys());
    return x.length && I.push(Ib), I;
  }, V = _u(function(U) {
    var I = "".concat(f.current.get(U)).concat(RE), W = /* @__PURE__ */ new Set();
    return Tr(p.current.keys()).forEach(function(re) {
      re.startsWith(I) && W.add(p.current.get(re));
    }), W;
  }, []);
  return w.useEffect(function() {
    return function() {
      O.current = !0;
    };
  }, []), {
    // Register
    registerPath: N,
    unregisterPath: L,
    refreshOverflowKeys: z,
    // Util
    isSubPathKey: A,
    getKeyPath: H,
    getKeys: q,
    getSubPathKeys: V
  };
}
function bh(i) {
  var l = w.useRef(i);
  l.current = i;
  var u = w.useCallback(function() {
    for (var f, p = arguments.length, y = new Array(p), h = 0; h < p; h++)
      y[h] = arguments[h];
    return (f = l.current) === null || f === void 0 ? void 0 : f.call.apply(f, [l].concat(y));
  }, []);
  return i ? u : void 0;
}
var kD = Math.random().toFixed(5).toString().slice(2), BT = 0;
function _D(i) {
  var l = wh(i, {
    value: i
  }), u = _e(l, 2), f = u[0], p = u[1];
  return w.useEffect(function() {
    BT += 1;
    var y = process.env.NODE_ENV === "test" ? "test" : "".concat(kD, "-").concat(BT);
    p("rc-menu-uuid-".concat(y));
  }, []), f;
}
function b1(i, l) {
  var u = Re({}, i);
  return Array.isArray(l) && l.forEach(function(f) {
    delete u[f];
  }), u;
}
function z5(i, l, u, f) {
  var p = w.useContext(Qo), y = p.activeKey, h = p.onActive, x = p.onInactive, T = {
    active: y === i
  };
  return l || (T.onMouseEnter = function(R) {
    u == null || u({
      key: i,
      domEvent: R
    }), h(i);
  }, T.onMouseLeave = function(R) {
    f == null || f({
      key: i,
      domEvent: R
    }), x(i);
  }), T;
}
function P5(i) {
  var l = w.useContext(Qo), u = l.mode, f = l.rtl, p = l.inlineIndent;
  if (u !== "inline")
    return null;
  var y = i;
  return f ? {
    paddingRight: y * p
  } : {
    paddingLeft: y * p
  };
}
function H5(i) {
  var l = i.icon, u = i.props, f = i.children, p;
  return l === null || l === !1 ? null : (typeof l == "function" ? p = /* @__PURE__ */ w.createElement(l, Re({}, u)) : typeof l != "boolean" && (p = l), p || f || null);
}
var MD = ["item"];
function r1(i) {
  var l = i.item, u = tr(i, MD);
  return Object.defineProperty(u, "item", {
    get: function() {
      return ii(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), l;
    }
  }), u;
}
var OD = ["title", "attribute", "elementRef"], ND = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], DD = ["active"], LD = /* @__PURE__ */ function(i) {
  nv(u, i);
  var l = y1(u);
  function u() {
    return Xo(this, u), l.apply(this, arguments);
  }
  return qo(u, [{
    key: "render",
    value: function() {
      var p = this.props, y = p.title, h = p.attribute, x = p.elementRef, T = tr(p, OD), R = b1(T, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return ii(!h, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ w.createElement(Nu.Item, bn({}, h, {
        title: typeof y == "string" ? y : void 0
      }, R, {
        ref: x
      }));
    }
  }]), u;
}(w.Component), AD = /* @__PURE__ */ w.forwardRef(function(i, l) {
  var u, f = i.style, p = i.className, y = i.eventKey, h = i.warnKey, x = i.disabled, T = i.itemIcon, R = i.children, O = i.role, _ = i.onMouseEnter, N = i.onMouseLeave, L = i.onClick, z = i.onKeyDown, H = i.onFocus, A = tr(i, ND), q = M5(y), V = w.useContext(Qo), U = V.prefixCls, I = V.onItemClick, W = V.disabled, re = V.overflowDisabled, G = V.itemIcon, se = V.selectedKeys, Te = V.onActive, le = w.useContext(xE), ge = le._internalRenderMenuItem, Ee = "".concat(U, "-item"), ne = w.useRef(), fe = w.useRef(), Ce = W || x, we = p1(l, fe), Ne = Ih(y);
  process.env.NODE_ENV !== "production" && h && ii(!1, "MenuItem should not leave undefined `key`.");
  var ee = function(Ze) {
    return {
      key: y,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: Tr(Ne).reverse(),
      item: ne.current,
      domEvent: Ze
    };
  }, de = T || G, ae = z5(y, Ce, _, N), ze = ae.active, De = tr(ae, DD), ft = se.includes(y), dt = P5(Ne.length), At = function(Ze) {
    if (!Ce) {
      var Ft = ee(Ze);
      L == null || L(r1(Ft)), I(Ft);
    }
  }, it = function(Ze) {
    if (z == null || z(Ze), Ze.which === rt.ENTER) {
      var Ft = ee(Ze);
      L == null || L(r1(Ft)), I(Ft);
    }
  }, Rt = function(Ze) {
    Te(y), H == null || H(Ze);
  }, st = {};
  i.role === "option" && (st["aria-selected"] = ft);
  var Mt = /* @__PURE__ */ w.createElement(LD, bn({
    ref: ne,
    elementRef: we,
    role: O === null ? "none" : O || "menuitem",
    tabIndex: x ? null : -1,
    "data-menu-id": re && q ? null : q
  }, A, De, st, {
    component: "li",
    "aria-disabled": x,
    style: Re(Re({}, dt), f),
    className: Fn(Ee, (u = {}, tt(u, "".concat(Ee, "-active"), ze), tt(u, "".concat(Ee, "-selected"), ft), tt(u, "".concat(Ee, "-disabled"), Ce), u), p),
    onClick: At,
    onKeyDown: it,
    onFocus: Rt
  }), R, /* @__PURE__ */ w.createElement(H5, {
    props: Re(Re({}, i), {}, {
      isSelected: ft
    }),
    icon: de
  }));
  return ge && (Mt = ge(Mt, i, {
    selected: ft
  })), Mt;
});
function zD(i, l) {
  var u = i.eventKey, f = C1(), p = Ih(u);
  return w.useEffect(function() {
    if (f)
      return f.registerPath(u, p), function() {
        f.unregisterPath(u, p);
      };
  }, [p]), f ? null : /* @__PURE__ */ w.createElement(AD, bn({}, i, {
    ref: l
  }));
}
const E1 = /* @__PURE__ */ w.forwardRef(zD);
var PD = ["className", "children"], HD = function(l, u) {
  var f = l.className, p = l.children, y = tr(l, PD), h = w.useContext(Qo), x = h.prefixCls, T = h.mode, R = h.rtl;
  return /* @__PURE__ */ w.createElement("ul", bn({
    className: Fn(x, R && "".concat(x, "-rtl"), "".concat(x, "-sub"), "".concat(x, "-").concat(T === "inline" ? "inline" : "vertical"), f),
    role: "menu"
  }, y, {
    "data-menu-list": !0,
    ref: u
  }), p);
}, kE = /* @__PURE__ */ w.forwardRef(HD);
kE.displayName = "SubMenuList";
function _E(i, l) {
  return kh(i).map(function(u, f) {
    if (/* @__PURE__ */ w.isValidElement(u)) {
      var p, y, h = u.key, x = (p = (y = u.props) === null || y === void 0 ? void 0 : y.eventKey) !== null && p !== void 0 ? p : h, T = x == null;
      T && (x = "tmp_key-".concat([].concat(Tr(l), [f]).join("-")));
      var R = {
        key: x,
        eventKey: x
      };
      return process.env.NODE_ENV !== "production" && T && (R.warnKey = !0), /* @__PURE__ */ w.cloneElement(u, R);
    }
    return u;
  });
}
var U5 = /* @__PURE__ */ w.createContext(null), WT = [];
function UD(i, l) {
  var u = w.useState(function() {
    if (!ai())
      return null;
    var z = document.createElement("div");
    return process.env.NODE_ENV !== "production" && l && z.setAttribute("data-debug", l), z;
  }), f = _e(u, 1), p = f[0], y = w.useRef(!1), h = w.useContext(U5), x = w.useState(WT), T = _e(x, 2), R = T[0], O = T[1], _ = h || (y.current ? void 0 : function(z) {
    O(function(H) {
      var A = [z].concat(Tr(H));
      return A;
    });
  });
  function N() {
    p.parentElement || document.body.appendChild(p), y.current = !0;
  }
  function L() {
    var z;
    (z = p.parentElement) === null || z === void 0 || z.removeChild(p), y.current = !1;
  }
  return Ua(function() {
    return i ? h ? h(N) : N() : L(), L;
  }, [i]), Ua(function() {
    R.length && (R.forEach(function(z) {
      return z();
    }), O(WT));
  }, [R]), [p, _];
}
function ID(i, l) {
  if (!i)
    return !1;
  if (i.contains)
    return i.contains(l);
  for (var u = l; u; ) {
    if (u === i)
      return !0;
    u = u.parentNode;
  }
  return !1;
}
var KT = "data-rc-order", GT = "data-rc-priority", $D = "rc-util-key", $b = /* @__PURE__ */ new Map();
function I5() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = i.mark;
  return l ? l.startsWith("data-") ? l : "data-".concat(l) : $D;
}
function w1(i) {
  if (i.attachTo)
    return i.attachTo;
  var l = document.querySelector("head");
  return l || document.body;
}
function FD(i) {
  return i === "queue" ? "prependQueue" : i ? "prepend" : "append";
}
function ME(i) {
  return Array.from(($b.get(i) || i).children).filter(function(l) {
    return l.tagName === "STYLE";
  });
}
function $5(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!ai())
    return null;
  var u = l.csp, f = l.prepend, p = l.priority, y = p === void 0 ? 0 : p, h = FD(f), x = h === "prependQueue", T = document.createElement("style");
  T.setAttribute(KT, h), x && y && T.setAttribute(GT, "".concat(y)), u != null && u.nonce && (T.nonce = u == null ? void 0 : u.nonce), T.innerHTML = i;
  var R = w1(l), O = R.firstChild;
  if (f) {
    if (x) {
      var _ = (l.styles || ME(R)).filter(function(N) {
        if (!["prepend", "prependQueue"].includes(N.getAttribute(KT)))
          return !1;
        var L = Number(N.getAttribute(GT) || 0);
        return y >= L;
      });
      if (_.length)
        return R.insertBefore(T, _[_.length - 1].nextSibling), T;
    }
    R.insertBefore(T, O);
  } else
    R.appendChild(T);
  return T;
}
function F5(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = w1(l);
  return (l.styles || ME(u)).find(function(f) {
    return f.getAttribute(I5(l)) === i;
  });
}
function Mh(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = F5(i, l);
  if (u) {
    var f = w1(l);
    f.removeChild(u);
  }
}
function jD(i, l) {
  var u = $b.get(i);
  if (!u || !ID(document, u)) {
    var f = $5("", l), p = f.parentNode;
    $b.set(i, p), i.removeChild(f);
  }
}
function Hs(i, l) {
  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, f = w1(u), p = ME(f), y = Re(Re({}, u), {}, {
    styles: p
  });
  jD(f, y);
  var h = F5(l, y);
  if (h) {
    var x, T;
    if ((x = y.csp) !== null && x !== void 0 && x.nonce && h.nonce !== ((T = y.csp) === null || T === void 0 ? void 0 : T.nonce)) {
      var R;
      h.nonce = (R = y.csp) === null || R === void 0 ? void 0 : R.nonce;
    }
    return h.innerHTML !== i && (h.innerHTML = i), h;
  }
  var O = $5(i, y);
  return O.setAttribute(I5(y), l), O;
}
var fb;
function VD(i) {
  if (typeof document == "undefined")
    return 0;
  if (i || fb === void 0) {
    var l = document.createElement("div");
    l.style.width = "100%", l.style.height = "200px";
    var u = document.createElement("div"), f = u.style;
    f.position = "absolute", f.top = "0", f.left = "0", f.pointerEvents = "none", f.visibility = "hidden", f.width = "200px", f.height = "150px", f.overflow = "hidden", u.appendChild(l), document.body.appendChild(u);
    var p = l.offsetWidth;
    u.style.overflow = "scroll";
    var y = l.offsetWidth;
    p === y && (y = u.clientWidth), document.body.removeChild(u), fb = p - y;
  }
  return fb;
}
function YT(i) {
  var l = i.match(/^(.*)px$/), u = Number(l == null ? void 0 : l[1]);
  return Number.isNaN(u) ? VD() : u;
}
function BD(i) {
  if (typeof document == "undefined" || !i || !(i instanceof Element))
    return {
      width: 0,
      height: 0
    };
  var l = getComputedStyle(i, "::-webkit-scrollbar"), u = l.width, f = l.height;
  return {
    width: YT(u),
    height: YT(f)
  };
}
function WD() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var KD = "rc-util-locker-".concat(Date.now()), QT = 0;
function GD(i) {
  var l = !!i, u = w.useState(function() {
    return QT += 1, "".concat(KD, "_").concat(QT);
  }), f = _e(u, 1), p = f[0];
  Ua(function() {
    if (l) {
      var y = BD(document.body).width, h = WD();
      Hs(`
html body {
  overflow-y: hidden;
  `.concat(h ? "width: calc(100% - ".concat(y, "px);") : "", `
}`), p);
    } else
      Mh(p);
    return function() {
      Mh(p);
    };
  }, [l, p]);
}
var XT = !1;
function YD(i) {
  return typeof i == "boolean" && (XT = i), XT;
}
var qT = function(l) {
  return l === !1 ? !1 : !ai() || !l ? null : typeof l == "string" ? document.querySelector(l) : typeof l == "function" ? l() : l;
}, OE = /* @__PURE__ */ w.forwardRef(function(i, l) {
  var u = i.open, f = i.autoLock, p = i.getContainer, y = i.debug, h = i.autoDestroy, x = h === void 0 ? !0 : h, T = i.children, R = w.useState(u), O = _e(R, 2), _ = O[0], N = O[1], L = _ || u;
  process.env.NODE_ENV !== "production" && ii(ai() || !u, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), w.useEffect(function() {
    (x || u) && N(u);
  }, [u, x]);
  var z = w.useState(function() {
    return qT(p);
  }), H = _e(z, 2), A = H[0], q = H[1];
  w.useEffect(function() {
    var Ee = qT(p);
    q(Ee != null ? Ee : null);
  });
  var V = UD(L && !A, y), U = _e(V, 2), I = U[0], W = U[1], re = A != null ? A : I;
  GD(f && u && ai() && (re === I || re === document.body));
  var G = null;
  if (T && h1(T) && l) {
    var se = T;
    G = se.ref;
  }
  var Te = p1(G, l);
  if (!L || !ai() || A === void 0)
    return null;
  var le = re === !1 || YD(), ge = T;
  return l && (ge = /* @__PURE__ */ w.cloneElement(T, {
    ref: Te
  })), /* @__PURE__ */ w.createElement(U5.Provider, {
    value: W
  }, le ? ge : /* @__PURE__ */ d1.createPortal(ge, re));
});
process.env.NODE_ENV !== "production" && (OE.displayName = "Portal");
function j5(i) {
  var l;
  return i == null || (l = i.getRootNode) === null || l === void 0 ? void 0 : l.call(i);
}
function QD(i) {
  return j5(i) instanceof ShadowRoot;
}
function a1(i) {
  return QD(i) ? j5(i) : null;
}
function XD() {
  var i = Re({}, w);
  return i.useId;
}
var ZT = 0, JT = XD();
const qD = JT ? (
  // Use React `useId`
  function(l) {
    var u = JT();
    return l || (process.env.NODE_ENV === "test" ? "test-id" : u);
  }
) : (
  // Use compatible of `useId`
  function(l) {
    var u = w.useState("ssr-id"), f = _e(u, 2), p = f[0], y = f[1];
    return w.useEffect(function() {
      var h = ZT;
      ZT += 1, y("rc_unique_".concat(h));
    }, []), l || (process.env.NODE_ENV === "test" ? "test-id" : p);
  }
), ZD = function() {
  if (typeof navigator == "undefined" || typeof window == "undefined")
    return !1;
  var i = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(i) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(i == null ? void 0 : i.substr(0, 4));
};
var JD = ["children"], V5 = /* @__PURE__ */ w.createContext({});
function e9(i) {
  var l = i.children, u = tr(i, JD);
  return /* @__PURE__ */ w.createElement(V5.Provider, {
    value: u
  }, l);
}
var t9 = /* @__PURE__ */ function(i) {
  nv(u, i);
  var l = y1(u);
  function u() {
    return Xo(this, u), l.apply(this, arguments);
  }
  return qo(u, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), u;
}(w.Component), Vc = "none", Ly = "appear", Ay = "enter", zy = "leave", eR = "none", Ko = "prepare", Yd = "start", Qd = "active", NE = "end", B5 = "prepared";
function tR(i, l) {
  var u = {};
  return u[i.toLowerCase()] = l.toLowerCase(), u["Webkit".concat(i)] = "webkit".concat(l), u["Moz".concat(i)] = "moz".concat(l), u["ms".concat(i)] = "MS".concat(l), u["O".concat(i)] = "o".concat(l.toLowerCase()), u;
}
function n9(i, l) {
  var u = {
    animationend: tR("Animation", "AnimationEnd"),
    transitionend: tR("Transition", "TransitionEnd")
  };
  return i && ("AnimationEvent" in l || delete u.animationend.animation, "TransitionEvent" in l || delete u.transitionend.transition), u;
}
var r9 = n9(ai(), typeof window != "undefined" ? window : {}), W5 = {};
if (ai()) {
  var a9 = document.createElement("div");
  W5 = a9.style;
}
var Py = {};
function K5(i) {
  if (Py[i])
    return Py[i];
  var l = r9[i];
  if (l)
    for (var u = Object.keys(l), f = u.length, p = 0; p < f; p += 1) {
      var y = u[p];
      if (Object.prototype.hasOwnProperty.call(l, y) && y in W5)
        return Py[i] = l[y], Py[i];
    }
  return "";
}
var G5 = K5("animationend"), Y5 = K5("transitionend"), Q5 = !!(G5 && Y5), nR = G5 || "animationend", rR = Y5 || "transitionend";
function aR(i, l) {
  if (!i)
    return null;
  if (cr(i) === "object") {
    var u = l.replace(/-\w/g, function(f) {
      return f[1].toUpperCase();
    });
    return i[u];
  }
  return "".concat(i, "-").concat(l);
}
const i9 = function(i) {
  var l = ki(), u = ki(i);
  u.current = i;
  var f = w.useCallback(function(h) {
    u.current(h);
  }, []);
  function p(h) {
    h && (h.removeEventListener(rR, f), h.removeEventListener(nR, f));
  }
  function y(h) {
    l.current && l.current !== h && p(l.current), h && h !== l.current && (h.addEventListener(rR, f), h.addEventListener(nR, f), l.current = h);
  }
  return w.useEffect(function() {
    return function() {
      p(l.current);
    };
  }, []), [y, p];
};
var X5 = ai() ? X8 : Ll;
const o9 = function() {
  var i = w.useRef(null);
  function l() {
    uo.cancel(i.current);
  }
  function u(f) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    l();
    var y = uo(function() {
      p <= 1 ? f({
        isCanceled: function() {
          return y !== i.current;
        }
      }) : u(f, p - 1);
    });
    i.current = y;
  }
  return w.useEffect(function() {
    return function() {
      l();
    };
  }, []), [u, l];
};
var l9 = [Ko, Yd, Qd, NE], u9 = [Ko, B5], q5 = !1, s9 = !0;
function Z5(i) {
  return i === Qd || i === NE;
}
const c9 = function(i, l, u) {
  var f = Xd(eR), p = _e(f, 2), y = p[0], h = p[1], x = o9(), T = _e(x, 2), R = T[0], O = T[1];
  function _() {
    h(Ko, !0);
  }
  var N = l ? u9 : l9;
  return X5(function() {
    if (y !== eR && y !== NE) {
      var L = N.indexOf(y), z = N[L + 1], H = u(y);
      H === q5 ? h(z, !0) : z && R(function(A) {
        function q() {
          A.isCanceled() || h(z, !0);
        }
        H === !0 ? q() : Promise.resolve(H).then(q);
      });
    }
  }, [i, y]), w.useEffect(function() {
    return function() {
      O();
    };
  }, []), [_, y];
};
function f9(i, l, u, f) {
  var p = f.motionEnter, y = p === void 0 ? !0 : p, h = f.motionAppear, x = h === void 0 ? !0 : h, T = f.motionLeave, R = T === void 0 ? !0 : T, O = f.motionDeadline, _ = f.motionLeaveImmediately, N = f.onAppearPrepare, L = f.onEnterPrepare, z = f.onLeavePrepare, H = f.onAppearStart, A = f.onEnterStart, q = f.onLeaveStart, V = f.onAppearActive, U = f.onEnterActive, I = f.onLeaveActive, W = f.onAppearEnd, re = f.onEnterEnd, G = f.onLeaveEnd, se = f.onVisibleChanged, Te = Xd(), le = _e(Te, 2), ge = le[0], Ee = le[1], ne = Xd(Vc), fe = _e(ne, 2), Ce = fe[0], we = fe[1], Ne = Xd(null), ee = _e(Ne, 2), de = ee[0], ae = ee[1], ze = ki(!1), De = ki(null);
  function ft() {
    return u();
  }
  var dt = ki(!1);
  function At() {
    we(Vc, !0), ae(null, !0);
  }
  function it(Qe) {
    var wt = ft();
    if (!(Qe && !Qe.deadline && Qe.target !== wt)) {
      var vt = dt.current, ln;
      Ce === Ly && vt ? ln = W == null ? void 0 : W(wt, Qe) : Ce === Ay && vt ? ln = re == null ? void 0 : re(wt, Qe) : Ce === zy && vt && (ln = G == null ? void 0 : G(wt, Qe)), Ce !== Vc && vt && ln !== !1 && At();
    }
  }
  var Rt = i9(it), st = _e(Rt, 1), Mt = st[0], Gt = function(wt) {
    var vt, ln, Je;
    switch (wt) {
      case Ly:
        return vt = {}, tt(vt, Ko, N), tt(vt, Yd, H), tt(vt, Qd, V), vt;
      case Ay:
        return ln = {}, tt(ln, Ko, L), tt(ln, Yd, A), tt(ln, Qd, U), ln;
      case zy:
        return Je = {}, tt(Je, Ko, z), tt(Je, Yd, q), tt(Je, Qd, I), Je;
      default:
        return {};
    }
  }, Ze = w.useMemo(function() {
    return Gt(Ce);
  }, [Ce]), Ft = c9(Ce, !i, function(Qe) {
    if (Qe === Ko) {
      var wt = Ze[Ko];
      return wt ? wt(ft()) : q5;
    }
    if (Et in Ze) {
      var vt;
      ae(((vt = Ze[Et]) === null || vt === void 0 ? void 0 : vt.call(Ze, ft(), null)) || null);
    }
    return Et === Qd && (Mt(ft()), O > 0 && (clearTimeout(De.current), De.current = setTimeout(function() {
      it({
        deadline: !0
      });
    }, O))), Et === B5 && At(), s9;
  }), Ot = _e(Ft, 2), Se = Ot[0], Et = Ot[1], Ct = Z5(Et);
  dt.current = Ct, X5(function() {
    Ee(l);
    var Qe = ze.current;
    ze.current = !0;
    var wt;
    !Qe && l && x && (wt = Ly), Qe && l && y && (wt = Ay), (Qe && !l && R || !Qe && _ && !l && R) && (wt = zy);
    var vt = Gt(wt);
    wt && (i || vt[Ko]) ? (we(wt), Se()) : we(Vc);
  }, [l]), Ll(function() {
    // Cancel appear
    (Ce === Ly && !x || // Cancel enter
    Ce === Ay && !y || // Cancel leave
    Ce === zy && !R) && we(Vc);
  }, [x, y, R]), Ll(function() {
    return function() {
      ze.current = !1, clearTimeout(De.current);
    };
  }, []);
  var kt = w.useRef(!1);
  Ll(function() {
    ge && (kt.current = !0), ge !== void 0 && Ce === Vc && ((kt.current || ge) && (se == null || se(ge)), kt.current = !0);
  }, [ge, Ce]);
  var Wt = de;
  return Ze[Ko] && Et === Yd && (Wt = Re({
    transition: "none"
  }, Wt)), [Ce, Et, Wt, ge != null ? ge : l];
}
function d9(i) {
  var l = i;
  cr(i) === "object" && (l = i.transitionSupport);
  function u(p, y) {
    return !!(p.motionName && l && y !== !1);
  }
  var f = /* @__PURE__ */ w.forwardRef(function(p, y) {
    var h = p.visible, x = h === void 0 ? !0 : h, T = p.removeOnLeave, R = T === void 0 ? !0 : T, O = p.forceRender, _ = p.children, N = p.motionName, L = p.leavedClassName, z = p.eventProps, H = w.useContext(V5), A = H.motion, q = u(p, A), V = ki(), U = ki();
    function I() {
      try {
        return V.current instanceof HTMLElement ? V.current : Wy(U.current);
      } catch (ae) {
        return null;
      }
    }
    var W = f9(q, x, I, p), re = _e(W, 4), G = re[0], se = re[1], Te = re[2], le = re[3], ge = w.useRef(le);
    le && (ge.current = !0);
    var Ee = w.useCallback(function(ae) {
      V.current = ae, bE(y, ae);
    }, [y]), ne, fe = Re(Re({}, z), {}, {
      visible: x
    });
    if (!_)
      ne = null;
    else if (G === Vc)
      le ? ne = _(Re({}, fe), Ee) : !R && ge.current && L ? ne = _(Re(Re({}, fe), {}, {
        className: L
      }), Ee) : O || !R && !L ? ne = _(Re(Re({}, fe), {}, {
        style: {
          display: "none"
        }
      }), Ee) : ne = null;
    else {
      var Ce, we;
      se === Ko ? we = "prepare" : Z5(se) ? we = "active" : se === Yd && (we = "start");
      var Ne = aR(N, "".concat(G, "-").concat(we));
      ne = _(Re(Re({}, fe), {}, {
        className: Fn(aR(N, G), (Ce = {}, tt(Ce, Ne, Ne && we), tt(Ce, N, typeof N == "string"), Ce)),
        style: Te
      }), Ee);
    }
    if (/* @__PURE__ */ w.isValidElement(ne) && h1(ne)) {
      var ee = ne, de = ee.ref;
      de || (ne = /* @__PURE__ */ w.cloneElement(ne, {
        ref: Ee
      }));
    }
    return /* @__PURE__ */ w.createElement(t9, {
      ref: U
    }, ne);
  });
  return f.displayName = "CSSMotion", f;
}
const x1 = d9(Q5);
var Fb = "add", jb = "keep", Vb = "remove", db = "removed";
function v9(i) {
  var l;
  return i && cr(i) === "object" && "key" in i ? l = i : l = {
    key: i
  }, Re(Re({}, l), {}, {
    key: String(l.key)
  });
}
function Bb() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return i.map(v9);
}
function p9() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], u = [], f = 0, p = l.length, y = Bb(i), h = Bb(l);
  y.forEach(function(R) {
    for (var O = !1, _ = f; _ < p; _ += 1) {
      var N = h[_];
      if (N.key === R.key) {
        f < _ && (u = u.concat(h.slice(f, _).map(function(L) {
          return Re(Re({}, L), {}, {
            status: Fb
          });
        })), f = _), u.push(Re(Re({}, N), {}, {
          status: jb
        })), f += 1, O = !0;
        break;
      }
    }
    O || u.push(Re(Re({}, R), {}, {
      status: Vb
    }));
  }), f < p && (u = u.concat(h.slice(f).map(function(R) {
    return Re(Re({}, R), {}, {
      status: Fb
    });
  })));
  var x = {};
  u.forEach(function(R) {
    var O = R.key;
    x[O] = (x[O] || 0) + 1;
  });
  var T = Object.keys(x).filter(function(R) {
    return x[R] > 1;
  });
  return T.forEach(function(R) {
    u = u.filter(function(O) {
      var _ = O.key, N = O.status;
      return _ !== R || N !== Vb;
    }), u.forEach(function(O) {
      O.key === R && (O.status = jb);
    });
  }), u;
}
var h9 = ["component", "children", "onVisibleChanged", "onAllRemoved"], m9 = ["status"], g9 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function y9(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x1, u = /* @__PURE__ */ function(f) {
    nv(y, f);
    var p = y1(y);
    function y() {
      var h;
      Xo(this, y);
      for (var x = arguments.length, T = new Array(x), R = 0; R < x; R++)
        T[R] = arguments[R];
      return h = p.call.apply(p, [this].concat(T)), tt(Ab(h), "state", {
        keyEntities: []
      }), tt(Ab(h), "removeKey", function(O) {
        var _ = h.state.keyEntities, N = _.map(function(L) {
          return L.key !== O ? L : Re(Re({}, L), {}, {
            status: db
          });
        });
        return h.setState({
          keyEntities: N
        }), N.filter(function(L) {
          var z = L.status;
          return z !== db;
        }).length;
      }), h;
    }
    return qo(y, [{
      key: "render",
      value: function() {
        var x = this, T = this.state.keyEntities, R = this.props, O = R.component, _ = R.children, N = R.onVisibleChanged, L = R.onAllRemoved, z = tr(R, h9), H = O || w.Fragment, A = {};
        return g9.forEach(function(q) {
          A[q] = z[q], delete z[q];
        }), delete z.keys, /* @__PURE__ */ w.createElement(H, z, T.map(function(q, V) {
          var U = q.status, I = tr(q, m9), W = U === Fb || U === jb;
          return /* @__PURE__ */ w.createElement(l, bn({}, A, {
            key: I.key,
            visible: W,
            eventProps: I,
            onVisibleChanged: function(G) {
              if (N == null || N(G, {
                key: I.key
              }), !G) {
                var se = x.removeKey(I.key);
                se === 0 && L && L();
              }
            }
          }), function(re, G) {
            return _(Re(Re({}, re), {}, {
              index: V
            }), G);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(x, T) {
        var R = x.keys, O = T.keyEntities, _ = Bb(R), N = p9(O, _);
        return {
          keyEntities: N.filter(function(L) {
            var z = O.find(function(H) {
              var A = H.key;
              return L.key === A;
            });
            return !(z && z.status === db && L.status === Vb);
          })
        };
      }
    }]), y;
  }(w.Component);
  return tt(u, "defaultProps", {
    component: "div"
  }), u;
}
y9(Q5);
function S9(i) {
  var l = i.prefixCls, u = i.align, f = i.arrow, p = i.arrowPos, y = f || {}, h = y.className, x = y.content, T = p.x, R = T === void 0 ? 0 : T, O = p.y, _ = O === void 0 ? 0 : O, N = w.useRef();
  if (!u || !u.points)
    return null;
  var L = {
    position: "absolute"
  };
  if (u.autoArrow !== !1) {
    var z = u.points[0], H = u.points[1], A = z[0], q = z[1], V = H[0], U = H[1];
    A === V || !["t", "b"].includes(A) ? L.top = _ : A === "t" ? L.top = 0 : L.bottom = 0, q === U || !["l", "r"].includes(q) ? L.left = R : q === "l" ? L.left = 0 : L.right = 0;
  }
  return /* @__PURE__ */ w.createElement("div", {
    ref: N,
    className: Fn("".concat(l, "-arrow"), h),
    style: L
  }, x);
}
function C9(i) {
  var l = i.prefixCls, u = i.open, f = i.zIndex, p = i.mask, y = i.motion;
  return p ? /* @__PURE__ */ w.createElement(x1, bn({}, y, {
    motionAppear: !0,
    visible: u,
    removeOnLeave: !0
  }), function(h) {
    var x = h.className;
    return /* @__PURE__ */ w.createElement("div", {
      style: {
        zIndex: f
      },
      className: Fn("".concat(l, "-mask"), x)
    });
  }) : null;
}
var J5 = /* @__PURE__ */ w.memo(function(i) {
  var l = i.children;
  return l;
}, function(i, l) {
  return l.cache;
});
process.env.NODE_ENV !== "production" && (J5.displayName = "PopupContent");
var e6 = /* @__PURE__ */ w.forwardRef(function(i, l) {
  var u = i.popup, f = i.className, p = i.prefixCls, y = i.style, h = i.target, x = i.onVisibleChanged, T = i.open, R = i.keepDom, O = i.fresh, _ = i.onClick, N = i.mask, L = i.arrow, z = i.arrowPos, H = i.align, A = i.motion, q = i.maskMotion, V = i.forceRender, U = i.getPopupContainer, I = i.autoDestroy, W = i.portal, re = i.zIndex, G = i.onMouseEnter, se = i.onMouseLeave, Te = i.onPointerEnter, le = i.ready, ge = i.offsetX, Ee = i.offsetY, ne = i.offsetR, fe = i.offsetB, Ce = i.onAlign, we = i.onPrepare, Ne = i.stretch, ee = i.targetWidth, de = i.targetHeight, ae = typeof u == "function" ? u() : u, ze = T || R, De = (U == null ? void 0 : U.length) > 0, ft = w.useState(!U || !De), dt = _e(ft, 2), At = dt[0], it = dt[1];
  if (Ua(function() {
    !At && De && h && it(!0);
  }, [At, De, h]), !At)
    return null;
  var Rt = "auto", st = {
    left: "-1000vw",
    top: "-1000vh",
    right: Rt,
    bottom: Rt
  };
  if (le || !T) {
    var Mt, Gt = H.points, Ze = H.dynamicInset || ((Mt = H._experimental) === null || Mt === void 0 ? void 0 : Mt.dynamicInset), Ft = Ze && Gt[0][1] === "r", Ot = Ze && Gt[0][0] === "b";
    Ft ? (st.right = ne, st.left = Rt) : (st.left = ge, st.right = Rt), Ot ? (st.bottom = fe, st.top = Rt) : (st.top = Ee, st.bottom = Rt);
  }
  var Se = {};
  return Ne && (Ne.includes("height") && de ? Se.height = de : Ne.includes("minHeight") && de && (Se.minHeight = de), Ne.includes("width") && ee ? Se.width = ee : Ne.includes("minWidth") && ee && (Se.minWidth = ee)), T || (Se.pointerEvents = "none"), /* @__PURE__ */ w.createElement(W, {
    open: V || ze,
    getContainer: U && function() {
      return U(h);
    },
    autoDestroy: I
  }, /* @__PURE__ */ w.createElement(C9, {
    prefixCls: p,
    open: T,
    zIndex: re,
    mask: N,
    motion: q
  }), /* @__PURE__ */ w.createElement(rv, {
    onResize: Ce,
    disabled: !T
  }, function(Et) {
    return /* @__PURE__ */ w.createElement(x1, bn({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: V,
      leavedClassName: "".concat(p, "-hidden")
    }, A, {
      onAppearPrepare: we,
      onEnterPrepare: we,
      visible: T,
      onVisibleChanged: function(kt) {
        var Wt;
        A == null || (Wt = A.onVisibleChanged) === null || Wt === void 0 || Wt.call(A, kt), x(kt);
      }
    }), function(Ct, kt) {
      var Wt = Ct.className, Qe = Ct.style, wt = Fn(p, Wt, f);
      return /* @__PURE__ */ w.createElement("div", {
        ref: d5(Et, l, kt),
        className: wt,
        style: Re(Re(Re(Re({
          "--arrow-x": "".concat(z.x || 0, "px"),
          "--arrow-y": "".concat(z.y || 0, "px")
        }, st), Se), Qe), {}, {
          boxSizing: "border-box",
          zIndex: re
        }, y),
        onMouseEnter: G,
        onMouseLeave: se,
        onPointerEnter: Te,
        onClick: _
      }, L && /* @__PURE__ */ w.createElement(S9, {
        prefixCls: p,
        arrow: L,
        arrowPos: z,
        align: H
      }), /* @__PURE__ */ w.createElement(J5, {
        cache: !T && !O
      }, ae));
    });
  }));
});
process.env.NODE_ENV !== "production" && (e6.displayName = "Popup");
var t6 = /* @__PURE__ */ w.forwardRef(function(i, l) {
  var u = i.children, f = i.getTriggerDOMNode, p = h1(u), y = w.useCallback(function(x) {
    bE(l, f ? f(x) : x);
  }, [f]), h = p1(y, u.ref);
  return p ? /* @__PURE__ */ w.cloneElement(u, {
    ref: h
  }) : u;
});
process.env.NODE_ENV !== "production" && (t6.displayName = "TriggerWrapper");
var iR = /* @__PURE__ */ w.createContext(null);
function oR(i) {
  return i ? Array.isArray(i) ? i : [i] : [];
}
function b9(i, l, u, f) {
  return w.useMemo(function() {
    var p = oR(u != null ? u : l), y = oR(f != null ? f : l), h = new Set(p), x = new Set(y);
    return i && (h.has("hover") && (h.delete("hover"), h.add("click")), x.has("hover") && (x.delete("hover"), x.add("click"))), [h, x];
  }, [i, l, u, f]);
}
function E9() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], u = arguments.length > 2 ? arguments[2] : void 0;
  return u ? i[0] === l[0] : i[0] === l[0] && i[1] === l[1];
}
function w9(i, l, u, f) {
  for (var p = u.points, y = Object.keys(i), h = 0; h < y.length; h += 1) {
    var x, T = y[h];
    if (E9((x = i[T]) === null || x === void 0 ? void 0 : x.points, p, f))
      return "".concat(l, "-placement-").concat(T);
  }
  return "";
}
function lR(i, l, u, f) {
  return l || (u ? {
    motionName: "".concat(i, "-").concat(u)
  } : f ? {
    motionName: f
  } : null);
}
function $h(i) {
  return i.ownerDocument.defaultView;
}
function Wb(i) {
  for (var l = [], u = i == null ? void 0 : i.parentElement, f = ["hidden", "scroll", "clip", "auto"]; u; ) {
    var p = $h(u).getComputedStyle(u), y = p.overflowX, h = p.overflowY, x = p.overflow;
    [y, h, x].some(function(T) {
      return f.includes(T);
    }) && l.push(u), u = u.parentElement;
  }
  return l;
}
function Oh(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(i) ? l : i;
}
function yh(i) {
  return Oh(parseFloat(i), 0);
}
function uR(i, l) {
  var u = Re({}, i);
  return (l || []).forEach(function(f) {
    if (!(f instanceof HTMLBodyElement || f instanceof HTMLHtmlElement)) {
      var p = $h(f).getComputedStyle(f), y = p.overflow, h = p.overflowClipMargin, x = p.borderTopWidth, T = p.borderBottomWidth, R = p.borderLeftWidth, O = p.borderRightWidth, _ = f.getBoundingClientRect(), N = f.offsetHeight, L = f.clientHeight, z = f.offsetWidth, H = f.clientWidth, A = yh(x), q = yh(T), V = yh(R), U = yh(O), I = Oh(Math.round(_.width / z * 1e3) / 1e3), W = Oh(Math.round(_.height / N * 1e3) / 1e3), re = (z - H - V - U) * I, G = (N - L - A - q) * W, se = A * W, Te = q * W, le = V * I, ge = U * I, Ee = 0, ne = 0;
      if (y === "clip") {
        var fe = yh(h);
        Ee = fe * I, ne = fe * W;
      }
      var Ce = _.x + le - Ee, we = _.y + se - ne, Ne = Ce + _.width + 2 * Ee - le - ge - re, ee = we + _.height + 2 * ne - se - Te - G;
      u.left = Math.max(u.left, Ce), u.top = Math.max(u.top, we), u.right = Math.min(u.right, Ne), u.bottom = Math.min(u.bottom, ee);
    }
  }), u;
}
function sR(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, u = "".concat(l), f = u.match(/^(.*)\%$/);
  return f ? i * (parseFloat(f[1]) / 100) : parseFloat(u);
}
function cR(i, l) {
  var u = l || [], f = _e(u, 2), p = f[0], y = f[1];
  return [sR(i.width, p), sR(i.height, y)];
}
function fR() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [i[0], i[1]];
}
function jd(i, l) {
  var u = l[0], f = l[1], p, y;
  return u === "t" ? y = i.y : u === "b" ? y = i.y + i.height : y = i.y + i.height / 2, f === "l" ? p = i.x : f === "r" ? p = i.x + i.width : p = i.x + i.width / 2, {
    x: p,
    y
  };
}
function Ds(i, l) {
  var u = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return i.map(function(f, p) {
    return p === l ? u[f] || "c" : f;
  }).join("");
}
function x9(i, l, u, f, p, y, h) {
  var x = w.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: p[f] || {}
  }), T = _e(x, 2), R = T[0], O = T[1], _ = w.useRef(0), N = w.useMemo(function() {
    return l ? Wb(l) : [];
  }, [l]), L = w.useRef({}), z = function() {
    L.current = {};
  };
  i || z();
  var H = Dl(function() {
    if (l && u && i) {
      let vr = function(Ea, nn) {
        var mo = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wt, Bi = ae.x + Ea, ct = ae.y + nn, Ni = Bi + Mt, zn = ct + st, qr = Math.max(Bi, mo.left), Zr = Math.max(ct, mo.top), go = Math.min(Ni, mo.right), Wn = Math.min(zn, mo.bottom);
        return Math.max(0, (go - qr) * (Wn - Zr));
      }, ho = function() {
        Ln = ae.y + xt, fr = Ln + st, Rr = ae.x + Jt, dr = Rr + Mt;
      };
      var V, U, I = l, W = I.ownerDocument, re = $h(I), G = re.getComputedStyle(I), se = G.width, Te = G.height, le = G.position, ge = I.style.left, Ee = I.style.top, ne = I.style.right, fe = I.style.bottom, Ce = I.style.overflow, we = Re(Re({}, p[f]), y), Ne = W.createElement("div");
      (V = I.parentElement) === null || V === void 0 || V.appendChild(Ne), Ne.style.left = "".concat(I.offsetLeft, "px"), Ne.style.top = "".concat(I.offsetTop, "px"), Ne.style.position = le, Ne.style.height = "".concat(I.offsetHeight, "px"), Ne.style.width = "".concat(I.offsetWidth, "px"), I.style.left = "0", I.style.top = "0", I.style.right = "auto", I.style.bottom = "auto", I.style.overflow = "hidden";
      var ee;
      if (Array.isArray(u))
        ee = {
          x: u[0],
          y: u[1],
          width: 0,
          height: 0
        };
      else {
        var de = u.getBoundingClientRect();
        ee = {
          x: de.x,
          y: de.y,
          width: de.width,
          height: de.height
        };
      }
      var ae = I.getBoundingClientRect(), ze = W.documentElement, De = ze.clientWidth, ft = ze.clientHeight, dt = ze.scrollWidth, At = ze.scrollHeight, it = ze.scrollTop, Rt = ze.scrollLeft, st = ae.height, Mt = ae.width, Gt = ee.height, Ze = ee.width, Ft = {
        left: 0,
        top: 0,
        right: De,
        bottom: ft
      }, Ot = {
        left: -Rt,
        top: -it,
        right: dt - Rt,
        bottom: At - it
      }, Se = we.htmlRegion, Et = "visible", Ct = "visibleFirst";
      Se !== "scroll" && Se !== Ct && (Se = Et);
      var kt = Se === Ct, Wt = uR(Ot, N), Qe = uR(Ft, N), wt = Se === Et ? Qe : Wt, vt = kt ? Qe : wt;
      I.style.left = "auto", I.style.top = "auto", I.style.right = "0", I.style.bottom = "0";
      var ln = I.getBoundingClientRect();
      I.style.left = ge, I.style.top = Ee, I.style.right = ne, I.style.bottom = fe, I.style.overflow = Ce, (U = I.parentElement) === null || U === void 0 || U.removeChild(Ne);
      var Je = Oh(Math.round(Mt / parseFloat(se) * 1e3) / 1e3), Xt = Oh(Math.round(st / parseFloat(Te) * 1e3) / 1e3);
      if (Je === 0 || Xt === 0 || Jy(u) && !L5(u))
        return;
      var qt = we.offset, It = we.targetOffset, kn = cR(ae, qt), _n = _e(kn, 2), cn = _n[0], fn = _n[1], he = cR(ee, It), Ue = _e(he, 2), We = Ue[0], zt = Ue[1];
      ee.x -= We, ee.y -= zt;
      var Pt = we.points || [], pt = _e(Pt, 2), ht = pt[0], Mn = pt[1], Ht = fR(Mn), Zt = fR(ht), $t = jd(ee, Ht), tn = jd(ae, Zt), Kt = Re({}, we), Jt = $t.x - tn.x + cn, xt = $t.y - tn.y + fn, jt = vr(Jt, xt), Le = vr(Jt, xt, Qe), Ye = jd(ee, ["t", "l"]), Ut = jd(ae, ["t", "l"]), En = jd(ee, ["b", "r"]), nr = jd(ae, ["b", "r"]), On = we.overflow || {}, Qr = On.adjustX, rr = On.adjustY, ar = On.shiftX, yr = On.shiftY, Ca = function(nn) {
        return typeof nn == "boolean" ? nn : nn >= 0;
      }, Ln, fr, Rr, dr;
      ho();
      var Ia = Ca(rr), oa = Zt[0] === Ht[0];
      if (Ia && Zt[0] === "t" && (fr > vt.bottom || L.current.bt)) {
        var An = xt;
        oa ? An -= st - Gt : An = Ye.y - nr.y - fn;
        var $a = vr(Jt, An), Zo = vr(Jt, An, Qe);
        // Of course use larger one
        $a > jt || $a === jt && (!kt || // Choose recommend one
        Zo >= Le) ? (L.current.bt = !0, xt = An, fn = -fn, Kt.points = [Ds(Zt, 0), Ds(Ht, 0)]) : L.current.bt = !1;
      }
      if (Ia && Zt[0] === "b" && (Ln < vt.top || L.current.tb)) {
        var Bn = xt;
        oa ? Bn += st - Gt : Bn = En.y - Ut.y - fn;
        var fo = vr(Jt, Bn), zl = vr(Jt, Bn, Qe);
        // Of course use larger one
        fo > jt || fo === jt && (!kt || // Choose recommend one
        zl >= Le) ? (L.current.tb = !0, xt = Bn, fn = -fn, Kt.points = [Ds(Zt, 0), Ds(Ht, 0)]) : L.current.tb = !1;
      }
      var vo = Ca(Qr), dn = Zt[1] === Ht[1];
      if (vo && Zt[1] === "l" && (dr > vt.right || L.current.rl)) {
        var Fa = Jt;
        dn ? Fa -= Mt - Ze : Fa = Ye.x - nr.x - cn;
        var Xr = vr(Fa, xt), Nt = vr(Fa, xt, Qe);
        // Of course use larger one
        Xr > jt || Xr === jt && (!kt || // Choose recommend one
        Nt >= Le) ? (L.current.rl = !0, Jt = Fa, cn = -cn, Kt.points = [Ds(Zt, 1), Ds(Ht, 1)]) : L.current.rl = !1;
      }
      if (vo && Zt[1] === "r" && (Rr < vt.left || L.current.lr)) {
        var kr = Jt;
        dn ? kr += Mt - Ze : kr = En.x - Ut.x - cn;
        var Vi = vr(kr, xt), la = vr(kr, xt, Qe);
        // Of course use larger one
        Vi > jt || Vi === jt && (!kt || // Choose recommend one
        la >= Le) ? (L.current.lr = !0, Jt = kr, cn = -cn, Kt.points = [Ds(Zt, 1), Ds(Ht, 1)]) : L.current.lr = !1;
      }
      ho();
      var Hr = ar === !0 ? 0 : ar;
      typeof Hr == "number" && (Rr < Qe.left && (Jt -= Rr - Qe.left - cn, ee.x + Ze < Qe.left + Hr && (Jt += ee.x - Qe.left + Ze - Hr)), dr > Qe.right && (Jt -= dr - Qe.right - cn, ee.x > Qe.right - Hr && (Jt += ee.x - Qe.right + Hr)));
      var ir = yr === !0 ? 0 : yr;
      typeof ir == "number" && (Ln < Qe.top && (xt -= Ln - Qe.top - fn, ee.y + Gt < Qe.top + ir && (xt += ee.y - Qe.top + Gt - ir)), fr > Qe.bottom && (xt -= fr - Qe.bottom - fn, ee.y > Qe.bottom - ir && (xt += ee.y - Qe.bottom + ir)));
      var Mi = ae.x + Jt, Xn = Mi + Mt, ba = ae.y + xt, po = ba + st, Oi = ee.x, ua = Oi + Ze, ja = ee.y, un = ja + Gt, _t = Math.max(Mi, Oi), vn = Math.min(Xn, ua), qn = (_t + vn) / 2, or = qn - Mi, Va = Math.max(ba, ja), oi = Math.min(po, un), Ba = (Va + oi) / 2, Jo = Ba - ba;
      h == null || h(l, Kt);
      var Wa = ln.right - ae.x - (Jt + ae.width), Vt = ln.bottom - ae.y - (xt + ae.height);
      O({
        ready: !0,
        offsetX: Jt / Je,
        offsetY: xt / Xt,
        offsetR: Wa / Je,
        offsetB: Vt / Xt,
        arrowX: or / Je,
        arrowY: Jo / Xt,
        scaleX: Je,
        scaleY: Xt,
        align: Kt
      });
    }
  }), A = function() {
    _.current += 1;
    var U = _.current;
    Promise.resolve().then(function() {
      _.current === U && H();
    });
  }, q = function() {
    O(function(U) {
      return Re(Re({}, U), {}, {
        ready: !1
      });
    });
  };
  return Ua(q, [f]), Ua(function() {
    i || q();
  }, [i]), [R.ready, R.offsetX, R.offsetY, R.offsetR, R.offsetB, R.arrowX, R.arrowY, R.scaleX, R.scaleY, R.align, A];
}
function T9(i, l, u, f, p) {
  Ua(function() {
    if (i && l && u) {
      let _ = function() {
        f(), p();
      };
      var y = l, h = u, x = Wb(y), T = Wb(h), R = $h(h), O = new Set([R].concat(Tr(x), Tr(T)));
      return O.forEach(function(N) {
        N.addEventListener("scroll", _, {
          passive: !0
        });
      }), R.addEventListener("resize", _, {
        passive: !0
      }), f(), function() {
        O.forEach(function(N) {
          N.removeEventListener("scroll", _), R.removeEventListener("resize", _);
        });
      };
    }
  }, [i, l, u]);
}
function R9(i, l, u, f, p, y, h, x) {
  var T = w.useRef(i), R = w.useRef(!1);
  T.current !== i && (R.current = !0, T.current = i), w.useEffect(function() {
    var O = uo(function() {
      R.current = !1;
    });
    return function() {
      uo.cancel(O);
    };
  }, [i]), w.useEffect(function() {
    if (l && f && (!p || y)) {
      var O = function() {
        var le = !1, ge = function(fe) {
          var Ce = fe.target;
          le = h(Ce);
        }, Ee = function(fe) {
          var Ce = fe.target;
          !R.current && T.current && !le && !h(Ce) && x(!1);
        };
        return [ge, Ee];
      }, _ = O(), N = _e(_, 2), L = N[0], z = N[1], H = O(), A = _e(H, 2), q = A[0], V = A[1], U = $h(f);
      U.addEventListener("mousedown", L, !0), U.addEventListener("click", z, !0), U.addEventListener("contextmenu", z, !0);
      var I = a1(u);
      if (I && (I.addEventListener("mousedown", q, !0), I.addEventListener("click", V, !0), I.addEventListener("contextmenu", V, !0)), process.env.NODE_ENV !== "production") {
        var W, re, G = u == null || (W = u.getRootNode) === null || W === void 0 ? void 0 : W.call(u), se = (re = f.getRootNode) === null || re === void 0 ? void 0 : re.call(f);
        Zd(G === se, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        U.removeEventListener("mousedown", L, !0), U.removeEventListener("click", z, !0), U.removeEventListener("contextmenu", z, !0), I && (I.removeEventListener("mousedown", q, !0), I.removeEventListener("click", V, !0), I.removeEventListener("contextmenu", V, !0));
      };
    }
  }, [l, u, f, p, y]);
}
var k9 = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function _9() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : OE, l = /* @__PURE__ */ w.forwardRef(function(u, f) {
    var p = u.prefixCls, y = p === void 0 ? "rc-trigger-popup" : p, h = u.children, x = u.action, T = x === void 0 ? "hover" : x, R = u.showAction, O = u.hideAction, _ = u.popupVisible, N = u.defaultPopupVisible, L = u.onPopupVisibleChange, z = u.afterPopupVisibleChange, H = u.mouseEnterDelay, A = u.mouseLeaveDelay, q = A === void 0 ? 0.1 : A, V = u.focusDelay, U = u.blurDelay, I = u.mask, W = u.maskClosable, re = W === void 0 ? !0 : W, G = u.getPopupContainer, se = u.forceRender, Te = u.autoDestroy, le = u.destroyPopupOnHide, ge = u.popup, Ee = u.popupClassName, ne = u.popupStyle, fe = u.popupPlacement, Ce = u.builtinPlacements, we = Ce === void 0 ? {} : Ce, Ne = u.popupAlign, ee = u.zIndex, de = u.stretch, ae = u.getPopupClassNameFromAlign, ze = u.fresh, De = u.alignPoint, ft = u.onPopupClick, dt = u.onPopupAlign, At = u.arrow, it = u.popupMotion, Rt = u.maskMotion, st = u.popupTransitionName, Mt = u.popupAnimation, Gt = u.maskTransitionName, Ze = u.maskAnimation, Ft = u.className, Ot = u.getTriggerDOMNode, Se = tr(u, k9), Et = Te || le || !1, Ct = w.useState(!1), kt = _e(Ct, 2), Wt = kt[0], Qe = kt[1];
    Ua(function() {
      Qe(ZD());
    }, []);
    var wt = w.useRef({}), vt = w.useContext(iR), ln = w.useMemo(function() {
      return {
        registerSubPopup: function(gt, sn) {
          wt.current[gt] = sn, vt == null || vt.registerSubPopup(gt, sn);
        }
      };
    }, [vt]), Je = qD(), Xt = w.useState(null), qt = _e(Xt, 2), It = qt[0], kn = qt[1], _n = Dl(function(be) {
      Jy(be) && It !== be && kn(be), vt == null || vt.registerSubPopup(Je, be);
    }), cn = w.useState(null), fn = _e(cn, 2), he = fn[0], Ue = fn[1], We = w.useRef(null), zt = Dl(function(be) {
      Jy(be) && he !== be && (Ue(be), We.current = be);
    }), Pt = w.Children.only(h), pt = (Pt == null ? void 0 : Pt.props) || {}, ht = {}, Mn = Dl(function(be) {
      var gt, sn, en = he;
      return (en == null ? void 0 : en.contains(be)) || ((gt = a1(en)) === null || gt === void 0 ? void 0 : gt.host) === be || be === en || (It == null ? void 0 : It.contains(be)) || ((sn = a1(It)) === null || sn === void 0 ? void 0 : sn.host) === be || be === It || Object.values(wt.current).some(function(gn) {
        return (gn == null ? void 0 : gn.contains(be)) || be === gn;
      });
    }), Ht = lR(y, it, Mt, st), Zt = lR(y, Rt, Ze, Gt), $t = w.useState(N || !1), tn = _e($t, 2), Kt = tn[0], Jt = tn[1], xt = _ != null ? _ : Kt, jt = Dl(function(be) {
      _ === void 0 && Jt(be);
    });
    Ua(function() {
      Jt(_ || !1);
    }, [_]);
    var Le = w.useRef(xt);
    Le.current = xt;
    var Ye = w.useRef([]);
    Ye.current = [];
    var Ut = Dl(function(be) {
      var gt;
      jt(be), ((gt = Ye.current[Ye.current.length - 1]) !== null && gt !== void 0 ? gt : xt) !== be && (Ye.current.push(be), L == null || L(be));
    }), En = w.useRef(), nr = function() {
      clearTimeout(En.current);
    }, On = function(gt) {
      var sn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      nr(), sn === 0 ? Ut(gt) : En.current = setTimeout(function() {
        Ut(gt);
      }, sn * 1e3);
    };
    w.useEffect(function() {
      return nr;
    }, []);
    var Qr = w.useState(!1), rr = _e(Qr, 2), ar = rr[0], yr = rr[1];
    Ua(function(be) {
      (!be || xt) && yr(!0);
    }, [xt]);
    var Ca = w.useState(null), Ln = _e(Ca, 2), fr = Ln[0], Rr = Ln[1], dr = w.useState([0, 0]), Ia = _e(dr, 2), oa = Ia[0], An = Ia[1], $a = function(gt) {
      An([gt.clientX, gt.clientY]);
    }, Zo = x9(xt, It, De ? oa : he, fe, we, Ne, dt), Bn = _e(Zo, 11), fo = Bn[0], zl = Bn[1], vo = Bn[2], dn = Bn[3], Fa = Bn[4], Xr = Bn[5], Nt = Bn[6], kr = Bn[7], Vi = Bn[8], la = Bn[9], Hr = Bn[10], ir = b9(Wt, T, R, O), Mi = _e(ir, 2), Xn = Mi[0], ba = Mi[1], po = Xn.has("click"), Oi = ba.has("click") || ba.has("contextMenu"), ua = Dl(function() {
      ar || Hr();
    }), ja = function() {
      Le.current && De && Oi && On(!1);
    };
    T9(xt, he, It, ua, ja), Ua(function() {
      ua();
    }, [oa, fe]), Ua(function() {
      xt && !(we != null && we[fe]) && ua();
    }, [JSON.stringify(Ne)]);
    var un = w.useMemo(function() {
      var be = w9(we, y, la, De);
      return Fn(be, ae == null ? void 0 : ae(la));
    }, [la, ae, we, y, De]);
    w.useImperativeHandle(f, function() {
      return {
        nativeElement: We.current,
        forceAlign: ua
      };
    });
    var _t = w.useState(0), vn = _e(_t, 2), qn = vn[0], or = vn[1], Va = w.useState(0), oi = _e(Va, 2), Ba = oi[0], Jo = oi[1], Wa = function() {
      if (de && he) {
        var gt = he.getBoundingClientRect();
        or(gt.width), Jo(gt.height);
      }
    }, Vt = function() {
      Wa(), ua();
    }, vr = function(gt) {
      yr(!1), Hr(), z == null || z(gt);
    }, ho = function() {
      return new Promise(function(gt) {
        Wa(), Rr(function() {
          return gt;
        });
      });
    };
    Ua(function() {
      fr && (Hr(), fr(), Rr(null));
    }, [fr]);
    function Ea(be, gt, sn, en) {
      ht[be] = function(gn) {
        var Pl;
        en == null || en(gn), On(gt, sn);
        for (var Wi = arguments.length, zu = new Array(Wi > 1 ? Wi - 1 : 0), Hl = 1; Hl < Wi; Hl++)
          zu[Hl - 1] = arguments[Hl];
        (Pl = pt[be]) === null || Pl === void 0 || Pl.call.apply(Pl, [pt, gn].concat(zu));
      };
    }
    (po || Oi) && (ht.onClick = function(be) {
      var gt;
      Le.current && Oi ? On(!1) : !Le.current && po && ($a(be), On(!0));
      for (var sn = arguments.length, en = new Array(sn > 1 ? sn - 1 : 0), gn = 1; gn < sn; gn++)
        en[gn - 1] = arguments[gn];
      (gt = pt.onClick) === null || gt === void 0 || gt.call.apply(gt, [pt, be].concat(en));
    }), R9(xt, Oi, he, It, I, re, Mn, On);
    var nn = Xn.has("hover"), mo = ba.has("hover"), Bi, ct;
    nn && (Ea("onMouseEnter", !0, H, function(be) {
      $a(be);
    }), Ea("onPointerEnter", !0, H, function(be) {
      $a(be);
    }), Bi = function(gt) {
      (xt || ar) && It !== null && It !== void 0 && It.contains(gt.target) && On(!0, H);
    }, De && (ht.onMouseMove = function(be) {
      var gt;
      (gt = pt.onMouseMove) === null || gt === void 0 || gt.call(pt, be);
    })), mo && (Ea("onMouseLeave", !1, q), Ea("onPointerLeave", !1, q), ct = function() {
      On(!1, q);
    }), Xn.has("focus") && Ea("onFocus", !0, V), ba.has("focus") && Ea("onBlur", !1, U), Xn.has("contextMenu") && (ht.onContextMenu = function(be) {
      var gt;
      Le.current && ba.has("contextMenu") ? On(!1) : ($a(be), On(!0)), be.preventDefault();
      for (var sn = arguments.length, en = new Array(sn > 1 ? sn - 1 : 0), gn = 1; gn < sn; gn++)
        en[gn - 1] = arguments[gn];
      (gt = pt.onContextMenu) === null || gt === void 0 || gt.call.apply(gt, [pt, be].concat(en));
    }), Ft && (ht.className = Fn(pt.className, Ft));
    var Ni = Re(Re({}, pt), ht), zn = {}, qr = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    qr.forEach(function(be) {
      Se[be] && (zn[be] = function() {
        for (var gt, sn = arguments.length, en = new Array(sn), gn = 0; gn < sn; gn++)
          en[gn] = arguments[gn];
        (gt = Ni[be]) === null || gt === void 0 || gt.call.apply(gt, [Ni].concat(en)), Se[be].apply(Se, en);
      });
    });
    var Zr = /* @__PURE__ */ w.cloneElement(Pt, Re(Re({}, Ni), zn)), go = {
      x: Xr,
      y: Nt
    }, Wn = At ? Re({}, At !== !0 ? At : {}) : null;
    return /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(rv, {
      disabled: !xt,
      ref: zt,
      onResize: Vt
    }, /* @__PURE__ */ w.createElement(t6, {
      getTriggerDOMNode: Ot
    }, Zr)), /* @__PURE__ */ w.createElement(iR.Provider, {
      value: ln
    }, /* @__PURE__ */ w.createElement(e6, {
      portal: i,
      ref: _n,
      prefixCls: y,
      popup: ge,
      className: Fn(Ee, un),
      style: ne,
      target: he,
      onMouseEnter: Bi,
      onMouseLeave: ct,
      onPointerEnter: Bi,
      zIndex: ee,
      open: xt,
      keepDom: ar,
      fresh: ze,
      onClick: ft,
      mask: I,
      motion: Ht,
      maskMotion: Zt,
      onVisibleChanged: vr,
      onPrepare: ho,
      forceRender: se,
      autoDestroy: Et,
      getPopupContainer: G,
      align: la,
      arrow: Wn,
      arrowPos: go,
      ready: fo,
      offsetX: zl,
      offsetY: vo,
      offsetR: dn,
      offsetB: Fa,
      onAlign: ua,
      stretch: de,
      targetWidth: qn / kr,
      targetHeight: Ba / Vi
    })));
  });
  return process.env.NODE_ENV !== "production" && (l.displayName = "Trigger"), l;
}
const n6 = _9(OE);
var Ha = {
  adjustX: 1,
  adjustY: 1
}, M9 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ha
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ha
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ha
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ha
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Ha
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Ha
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Ha
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Ha
  }
}, O9 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ha
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ha
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ha
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ha
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: Ha
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: Ha
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: Ha
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: Ha
  }
};
function r6(i, l, u) {
  if (l)
    return l;
  if (u)
    return u[i] || u.other;
}
var N9 = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function D9(i) {
  var l = i.prefixCls, u = i.visible, f = i.children, p = i.popup, y = i.popupStyle, h = i.popupClassName, x = i.popupOffset, T = i.disabled, R = i.mode, O = i.onVisibleChange, _ = w.useContext(Qo), N = _.getPopupContainer, L = _.rtl, z = _.subMenuOpenDelay, H = _.subMenuCloseDelay, A = _.builtinPlacements, q = _.triggerSubMenuAction, V = _.forceSubMenuRender, U = _.rootClassName, I = _.motion, W = _.defaultMotions, re = w.useState(!1), G = _e(re, 2), se = G[0], Te = G[1], le = Re(L ? Re({}, O9) : Re({}, M9), A), ge = N9[R], Ee = r6(R, I, W), ne = w.useRef(Ee);
  R !== "inline" && (ne.current = Ee);
  var fe = Re(Re({}, ne.current), {}, {
    leavedClassName: "".concat(l, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), Ce = w.useRef();
  return w.useEffect(function() {
    return Ce.current = uo(function() {
      Te(u);
    }), function() {
      uo.cancel(Ce.current);
    };
  }, [u]), /* @__PURE__ */ w.createElement(n6, {
    prefixCls: l,
    popupClassName: Fn("".concat(l, "-popup"), tt({}, "".concat(l, "-rtl"), L), h, U),
    stretch: R === "horizontal" ? "minWidth" : null,
    getPopupContainer: N,
    builtinPlacements: le,
    popupPlacement: ge,
    popupVisible: se,
    popup: p,
    popupStyle: y,
    popupAlign: x && {
      offset: x
    },
    action: T ? [] : [q],
    mouseEnterDelay: z,
    mouseLeaveDelay: H,
    onPopupVisibleChange: O,
    forceRender: V,
    popupMotion: fe,
    fresh: !0
  }, f);
}
function L9(i) {
  var l = i.id, u = i.open, f = i.keyPath, p = i.children, y = "inline", h = w.useContext(Qo), x = h.prefixCls, T = h.forceSubMenuRender, R = h.motion, O = h.defaultMotions, _ = h.mode, N = w.useRef(!1);
  N.current = _ === y;
  var L = w.useState(!N.current), z = _e(L, 2), H = z[0], A = z[1], q = N.current ? u : !1;
  w.useEffect(function() {
    N.current && A(!1);
  }, [_]);
  var V = Re({}, r6(y, R, O));
  f.length > 1 && (V.motionAppear = !1);
  var U = V.onVisibleChanged;
  return V.onVisibleChanged = function(I) {
    return !N.current && !I && A(!0), U == null ? void 0 : U(I);
  }, H ? null : /* @__PURE__ */ w.createElement(_h, {
    mode: y,
    locked: !N.current
  }, /* @__PURE__ */ w.createElement(x1, bn({
    visible: q
  }, V, {
    forceRender: T,
    removeOnLeave: !1,
    leavedClassName: "".concat(x, "-hidden")
  }), function(I) {
    var W = I.className, re = I.style;
    return /* @__PURE__ */ w.createElement(kE, {
      id: l,
      className: W,
      style: re
    }, p);
  }));
}
var A9 = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], z9 = ["active"], P9 = function(l) {
  var u, f = l.style, p = l.className, y = l.title, h = l.eventKey, x = l.warnKey, T = l.disabled, R = l.internalPopupClose, O = l.children, _ = l.itemIcon, N = l.expandIcon, L = l.popupClassName, z = l.popupOffset, H = l.popupStyle, A = l.onClick, q = l.onMouseEnter, V = l.onMouseLeave, U = l.onTitleClick, I = l.onTitleMouseEnter, W = l.onTitleMouseLeave, re = tr(l, A9), G = M5(h), se = w.useContext(Qo), Te = se.prefixCls, le = se.mode, ge = se.openKeys, Ee = se.disabled, ne = se.overflowDisabled, fe = se.activeKey, Ce = se.selectedKeys, we = se.itemIcon, Ne = se.expandIcon, ee = se.onItemClick, de = se.onOpenChange, ae = se.onActive, ze = w.useContext(xE), De = ze._internalRenderSubMenuItem, ft = w.useContext(D5), dt = ft.isSubPathKey, At = Ih(), it = "".concat(Te, "-submenu"), Rt = Ee || T, st = w.useRef(), Mt = w.useRef();
  process.env.NODE_ENV !== "production" && x && ii(!1, "SubMenu should not leave undefined `key`.");
  var Gt = _ != null ? _ : we, Ze = N != null ? N : Ne, Ft = ge.includes(h), Ot = !ne && Ft, Se = dt(Ce, h), Et = z5(h, Rt, I, W), Ct = Et.active, kt = tr(Et, z9), Wt = w.useState(!1), Qe = _e(Wt, 2), wt = Qe[0], vt = Qe[1], ln = function(ht) {
    Rt || vt(ht);
  }, Je = function(ht) {
    ln(!0), q == null || q({
      key: h,
      domEvent: ht
    });
  }, Xt = function(ht) {
    ln(!1), V == null || V({
      key: h,
      domEvent: ht
    });
  }, qt = w.useMemo(function() {
    return Ct || (le !== "inline" ? wt || dt([fe], h) : !1);
  }, [le, Ct, fe, wt, h, dt]), It = P5(At.length), kn = function(ht) {
    Rt || (U == null || U({
      key: h,
      domEvent: ht
    }), le === "inline" && de(h, !Ft));
  }, _n = bh(function(pt) {
    A == null || A(r1(pt)), ee(pt);
  }), cn = function(ht) {
    le !== "inline" && de(h, ht);
  }, fn = function() {
    ae(h);
  }, he = G && "".concat(G, "-popup"), Ue = /* @__PURE__ */ w.createElement("div", bn({
    role: "menuitem",
    style: It,
    className: "".concat(it, "-title"),
    tabIndex: Rt ? null : -1,
    ref: st,
    title: typeof y == "string" ? y : null,
    "data-menu-id": ne && G ? null : G,
    "aria-expanded": Ot,
    "aria-haspopup": !0,
    "aria-controls": he,
    "aria-disabled": Rt,
    onClick: kn,
    onFocus: fn
  }, kt), y, /* @__PURE__ */ w.createElement(H5, {
    icon: le !== "horizontal" ? Ze : void 0,
    props: Re(Re({}, l), {}, {
      isOpen: Ot,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ w.createElement("i", {
    className: "".concat(it, "-arrow")
  }))), We = w.useRef(le);
  if (le !== "inline" && At.length > 1 ? We.current = "vertical" : We.current = le, !ne) {
    var zt = We.current;
    Ue = /* @__PURE__ */ w.createElement(D9, {
      mode: zt,
      prefixCls: it,
      visible: !R && Ot && le !== "inline",
      popupClassName: L,
      popupOffset: z,
      popupStyle: H,
      popup: /* @__PURE__ */ w.createElement(
        _h,
        {
          mode: zt === "horizontal" ? "vertical" : zt
        },
        /* @__PURE__ */ w.createElement(kE, {
          id: he,
          ref: Mt
        }, O)
      ),
      disabled: Rt,
      onVisibleChange: cn
    }, Ue);
  }
  var Pt = /* @__PURE__ */ w.createElement(Nu.Item, bn({
    role: "none"
  }, re, {
    component: "li",
    style: f,
    className: Fn(it, "".concat(it, "-").concat(le), p, (u = {}, tt(u, "".concat(it, "-open"), Ot), tt(u, "".concat(it, "-active"), qt), tt(u, "".concat(it, "-selected"), Se), tt(u, "".concat(it, "-disabled"), Rt), u)),
    onMouseEnter: Je,
    onMouseLeave: Xt
  }), Ue, !ne && /* @__PURE__ */ w.createElement(L9, {
    id: he,
    open: Ot,
    keyPath: At
  }, O));
  return De && (Pt = De(Pt, l, {
    selected: Se,
    active: qt,
    open: Ot,
    disabled: Rt
  })), /* @__PURE__ */ w.createElement(_h, {
    onItemClick: _n,
    mode: le === "horizontal" ? "vertical" : le,
    itemIcon: Gt,
    expandIcon: Ze
  }, Pt);
};
function DE(i) {
  var l = i.eventKey, u = i.children, f = Ih(l), p = _E(u, f), y = C1();
  w.useEffect(function() {
    if (y)
      return y.registerPath(l, f), function() {
        y.unregisterPath(l, f);
      };
  }, [f]);
  var h;
  return y ? h = p : h = /* @__PURE__ */ w.createElement(P9, i, p), /* @__PURE__ */ w.createElement(N5.Provider, {
    value: f
  }, h);
}
var H9 = ["className", "title", "eventKey", "children"], U9 = ["children"], I9 = function(l) {
  var u = l.className, f = l.title;
  l.eventKey;
  var p = l.children, y = tr(l, H9), h = w.useContext(Qo), x = h.prefixCls, T = "".concat(x, "-item-group");
  return /* @__PURE__ */ w.createElement("li", bn({
    role: "presentation"
  }, y, {
    onClick: function(O) {
      return O.stopPropagation();
    },
    className: Fn(T, u)
  }), /* @__PURE__ */ w.createElement("div", {
    role: "presentation",
    className: "".concat(T, "-title"),
    title: typeof f == "string" ? f : void 0
  }, f), /* @__PURE__ */ w.createElement("ul", {
    role: "group",
    className: "".concat(T, "-list")
  }, p));
};
function a6(i) {
  var l = i.children, u = tr(i, U9), f = Ih(u.eventKey), p = _E(l, f), y = C1();
  return y ? p : /* @__PURE__ */ w.createElement(I9, b1(u, ["warnKey"]), p);
}
function i6(i) {
  var l = i.className, u = i.style, f = w.useContext(Qo), p = f.prefixCls, y = C1();
  return y ? null : /* @__PURE__ */ w.createElement("li", {
    role: "separator",
    className: Fn("".concat(p, "-item-divider"), l),
    style: u
  });
}
var $9 = ["label", "children", "key", "type"];
function Kb(i) {
  return (i || []).map(function(l, u) {
    if (l && cr(l) === "object") {
      var f = l, p = f.label, y = f.children, h = f.key, x = f.type, T = tr(f, $9), R = h != null ? h : "tmp-".concat(u);
      return y || x === "group" ? x === "group" ? /* @__PURE__ */ w.createElement(a6, bn({
        key: R
      }, T, {
        title: p
      }), Kb(y)) : /* @__PURE__ */ w.createElement(DE, bn({
        key: R
      }, T, {
        title: p
      }), Kb(y)) : x === "divider" ? /* @__PURE__ */ w.createElement(i6, bn({
        key: R
      }, T)) : /* @__PURE__ */ w.createElement(E1, bn({
        key: R
      }, T), p);
    }
    return null;
  }).filter(function(l) {
    return l;
  });
}
function F9(i, l, u) {
  var f = i;
  return l && (f = Kb(l)), _E(f, u);
}
var j9 = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"], Vd = [], V9 = /* @__PURE__ */ w.forwardRef(function(i, l) {
  var u, f, p = i, y = p.prefixCls, h = y === void 0 ? "rc-menu" : y, x = p.rootClassName, T = p.style, R = p.className, O = p.tabIndex, _ = O === void 0 ? 0 : O, N = p.items, L = p.children, z = p.direction, H = p.id, A = p.mode, q = A === void 0 ? "vertical" : A, V = p.inlineCollapsed, U = p.disabled, I = p.disabledOverflow, W = p.subMenuOpenDelay, re = W === void 0 ? 0.1 : W, G = p.subMenuCloseDelay, se = G === void 0 ? 0.1 : G, Te = p.forceSubMenuRender, le = p.defaultOpenKeys, ge = p.openKeys, Ee = p.activeKey, ne = p.defaultActiveFirst, fe = p.selectable, Ce = fe === void 0 ? !0 : fe, we = p.multiple, Ne = we === void 0 ? !1 : we, ee = p.defaultSelectedKeys, de = p.selectedKeys, ae = p.onSelect, ze = p.onDeselect, De = p.inlineIndent, ft = De === void 0 ? 24 : De, dt = p.motion, At = p.defaultMotions, it = p.triggerSubMenuAction, Rt = it === void 0 ? "hover" : it, st = p.builtinPlacements, Mt = p.itemIcon, Gt = p.expandIcon, Ze = p.overflowedIndicator, Ft = Ze === void 0 ? "..." : Ze, Ot = p.overflowedIndicatorPopupClassName, Se = p.getPopupContainer, Et = p.onClick, Ct = p.onOpenChange, kt = p.onKeyDown, Wt = p.openAnimation, Qe = p.openTransitionName, wt = p._internalRenderMenuItem, vt = p._internalRenderSubMenuItem, ln = tr(p, j9), Je = w.useMemo(function() {
    return F9(L, N, Vd);
  }, [L, N]), Xt = w.useState(!1), qt = _e(Xt, 2), It = qt[0], kn = qt[1], _n = w.useRef(), cn = _D(H), fn = z === "rtl";
  process.env.NODE_ENV !== "production" && ii(!Wt && !Qe, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var he = wh(le, {
    value: ge,
    postState: function(_t) {
      return _t || Vd;
    }
  }), Ue = _e(he, 2), We = Ue[0], zt = Ue[1], Pt = function(_t) {
    var vn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function qn() {
      zt(_t), Ct == null || Ct(_t);
    }
    vn ? d1.flushSync(qn) : qn();
  }, pt = w.useState(We), ht = _e(pt, 2), Mn = ht[0], Ht = ht[1], Zt = w.useRef(!1), $t = w.useMemo(function() {
    return (q === "inline" || q === "vertical") && V ? ["vertical", V] : [q, !1];
  }, [q, V]), tn = _e($t, 2), Kt = tn[0], Jt = tn[1], xt = Kt === "inline", jt = w.useState(Kt), Le = _e(jt, 2), Ye = Le[0], Ut = Le[1], En = w.useState(Jt), nr = _e(En, 2), On = nr[0], Qr = nr[1];
  w.useEffect(function() {
    Ut(Kt), Qr(Jt), Zt.current && (xt ? zt(Mn) : Pt(Vd));
  }, [Kt, Jt]);
  var rr = w.useState(0), ar = _e(rr, 2), yr = ar[0], Ca = ar[1], Ln = yr >= Je.length - 1 || Ye !== "horizontal" || I;
  w.useEffect(function() {
    xt && Ht(We);
  }, [We]), w.useEffect(function() {
    return Zt.current = !0, function() {
      Zt.current = !1;
    };
  }, []);
  var fr = RD(), Rr = fr.registerPath, dr = fr.unregisterPath, Ia = fr.refreshOverflowKeys, oa = fr.isSubPathKey, An = fr.getKeyPath, $a = fr.getKeys, Zo = fr.getSubPathKeys, Bn = w.useMemo(function() {
    return {
      registerPath: Rr,
      unregisterPath: dr
    };
  }, [Rr, dr]), fo = w.useMemo(function() {
    return {
      isSubPathKey: oa
    };
  }, [oa]);
  w.useEffect(function() {
    Ia(Ln ? Vd : Je.slice(yr + 1).map(function(un) {
      return un.key;
    }));
  }, [yr, Ln]);
  var zl = wh(Ee || ne && ((u = Je[0]) === null || u === void 0 ? void 0 : u.key), {
    value: Ee
  }), vo = _e(zl, 2), dn = vo[0], Fa = vo[1], Xr = bh(function(un) {
    Fa(un);
  }), Nt = bh(function() {
    Fa(void 0);
  });
  ZR(l, function() {
    return {
      list: _n.current,
      focus: function(_t) {
        var vn, qn = $a(), or = Ub(qn, cn), Va = or.elements, oi = or.key2element, Ba = or.element2key, Jo = TE(_n.current, Va), Wa = dn != null ? dn : Jo[0] ? Ba.get(Jo[0]) : (vn = Je.find(function(ho) {
          return !ho.props.disabled;
        })) === null || vn === void 0 ? void 0 : vn.key, Vt = oi.get(Wa);
        if (Wa && Vt) {
          var vr;
          Vt == null || (vr = Vt.focus) === null || vr === void 0 || vr.call(Vt, _t);
        }
      }
    };
  });
  var kr = wh(ee || [], {
    value: de,
    // Legacy convert key to array
    postState: function(_t) {
      return Array.isArray(_t) ? _t : _t == null ? Vd : [_t];
    }
  }), Vi = _e(kr, 2), la = Vi[0], Hr = Vi[1], ir = function(_t) {
    if (Ce) {
      var vn = _t.key, qn = la.includes(vn), or;
      Ne ? qn ? or = la.filter(function(oi) {
        return oi !== vn;
      }) : or = [].concat(Tr(la), [vn]) : or = [vn], Hr(or);
      var Va = Re(Re({}, _t), {}, {
        selectedKeys: or
      });
      qn ? ze == null || ze(Va) : ae == null || ae(Va);
    }
    !Ne && We.length && Ye !== "inline" && Pt(Vd);
  }, Mi = bh(function(un) {
    Et == null || Et(r1(un)), ir(un);
  }), Xn = bh(function(un, _t) {
    var vn = We.filter(function(or) {
      return or !== un;
    });
    if (_t)
      vn.push(un);
    else if (Ye !== "inline") {
      var qn = Zo(un);
      vn = vn.filter(function(or) {
        return !qn.has(or);
      });
    }
    wE(We, vn, !0) || Pt(vn, !0);
  }), ba = function(_t, vn) {
    var qn = vn != null ? vn : !We.includes(_t);
    Xn(_t, qn);
  }, po = wD(Ye, dn, fn, cn, _n, $a, An, Fa, ba, kt);
  w.useEffect(function() {
    kn(!0);
  }, []);
  var Oi = w.useMemo(function() {
    return {
      _internalRenderMenuItem: wt,
      _internalRenderSubMenuItem: vt
    };
  }, [wt, vt]), ua = Ye !== "horizontal" || I ? Je : (
    // Need wrap for overflow dropdown that do not response for open
    Je.map(function(un, _t) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ w.createElement(_h, {
          key: un.key,
          overflowDisabled: _t > yr
        }, un)
      );
    })
  ), ja = /* @__PURE__ */ w.createElement(Nu, bn({
    id: H,
    ref: _n,
    prefixCls: "".concat(h, "-overflow"),
    component: "ul",
    itemComponent: E1,
    className: Fn(h, "".concat(h, "-root"), "".concat(h, "-").concat(Ye), R, (f = {}, tt(f, "".concat(h, "-inline-collapsed"), On), tt(f, "".concat(h, "-rtl"), fn), f), x),
    dir: z,
    style: T,
    role: "menu",
    tabIndex: _,
    data: ua,
    renderRawItem: function(_t) {
      return _t;
    },
    renderRawRest: function(_t) {
      var vn = _t.length, qn = vn ? Je.slice(-vn) : null;
      return /* @__PURE__ */ w.createElement(DE, {
        eventKey: Ib,
        title: Ft,
        disabled: Ln,
        internalPopupClose: vn === 0,
        popupClassName: Ot
      }, qn);
    },
    maxCount: Ye !== "horizontal" || I ? Nu.INVALIDATE : Nu.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(_t) {
      Ca(_t);
    },
    onKeyDown: po
  }, ln));
  return /* @__PURE__ */ w.createElement(xE.Provider, {
    value: Oi
  }, /* @__PURE__ */ w.createElement(k5.Provider, {
    value: cn
  }, /* @__PURE__ */ w.createElement(_h, {
    prefixCls: h,
    rootClassName: x,
    mode: Ye,
    openKeys: We,
    rtl: fn,
    disabled: U,
    motion: It ? dt : null,
    defaultMotions: It ? At : null,
    activeKey: dn,
    onActive: Xr,
    onInactive: Nt,
    selectedKeys: la,
    inlineIndent: ft,
    subMenuOpenDelay: re,
    subMenuCloseDelay: se,
    forceSubMenuRender: Te,
    builtinPlacements: st,
    triggerSubMenuAction: Rt,
    getPopupContainer: Se,
    itemIcon: Mt,
    expandIcon: Gt,
    onItemClick: Mi,
    onOpenChange: Xn
  }, /* @__PURE__ */ w.createElement(D5.Provider, {
    value: fo
  }, ja), /* @__PURE__ */ w.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ w.createElement(O5.Provider, {
    value: Bn
  }, Je)))));
}), T1 = V9;
T1.Item = E1;
T1.SubMenu = DE;
T1.ItemGroup = a6;
T1.Divider = i6;
var B9 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" };
const W9 = B9;
function Sa(i, l) {
  K9(i) && (i = "100%");
  var u = G9(i);
  return i = l === 360 ? i : Math.min(l, Math.max(0, parseFloat(i))), u && (i = parseInt(String(i * l), 10) / 100), Math.abs(i - l) < 1e-6 ? 1 : (l === 360 ? i = (i < 0 ? i % l + l : i % l) / parseFloat(String(l)) : i = i % l / parseFloat(String(l)), i);
}
function Hy(i) {
  return Math.min(1, Math.max(0, i));
}
function K9(i) {
  return typeof i == "string" && i.indexOf(".") !== -1 && parseFloat(i) === 1;
}
function G9(i) {
  return typeof i == "string" && i.indexOf("%") !== -1;
}
function o6(i) {
  return i = parseFloat(i), (isNaN(i) || i < 0 || i > 1) && (i = 1), i;
}
function Uy(i) {
  return i <= 1 ? "".concat(Number(i) * 100, "%") : i;
}
function Kc(i) {
  return i.length === 1 ? "0" + i : String(i);
}
function Y9(i, l, u) {
  return {
    r: Sa(i, 255) * 255,
    g: Sa(l, 255) * 255,
    b: Sa(u, 255) * 255
  };
}
function dR(i, l, u) {
  i = Sa(i, 255), l = Sa(l, 255), u = Sa(u, 255);
  var f = Math.max(i, l, u), p = Math.min(i, l, u), y = 0, h = 0, x = (f + p) / 2;
  if (f === p)
    h = 0, y = 0;
  else {
    var T = f - p;
    switch (h = x > 0.5 ? T / (2 - f - p) : T / (f + p), f) {
      case i:
        y = (l - u) / T + (l < u ? 6 : 0);
        break;
      case l:
        y = (u - i) / T + 2;
        break;
      case u:
        y = (i - l) / T + 4;
        break;
    }
    y /= 6;
  }
  return { h: y, s: h, l: x };
}
function vb(i, l, u) {
  return u < 0 && (u += 1), u > 1 && (u -= 1), u < 1 / 6 ? i + (l - i) * (6 * u) : u < 1 / 2 ? l : u < 2 / 3 ? i + (l - i) * (2 / 3 - u) * 6 : i;
}
function Q9(i, l, u) {
  var f, p, y;
  if (i = Sa(i, 360), l = Sa(l, 100), u = Sa(u, 100), l === 0)
    p = u, y = u, f = u;
  else {
    var h = u < 0.5 ? u * (1 + l) : u + l - u * l, x = 2 * u - h;
    f = vb(x, h, i + 1 / 3), p = vb(x, h, i), y = vb(x, h, i - 1 / 3);
  }
  return { r: f * 255, g: p * 255, b: y * 255 };
}
function Gb(i, l, u) {
  i = Sa(i, 255), l = Sa(l, 255), u = Sa(u, 255);
  var f = Math.max(i, l, u), p = Math.min(i, l, u), y = 0, h = f, x = f - p, T = f === 0 ? 0 : x / f;
  if (f === p)
    y = 0;
  else {
    switch (f) {
      case i:
        y = (l - u) / x + (l < u ? 6 : 0);
        break;
      case l:
        y = (u - i) / x + 2;
        break;
      case u:
        y = (i - l) / x + 4;
        break;
    }
    y /= 6;
  }
  return { h: y, s: T, v: h };
}
function X9(i, l, u) {
  i = Sa(i, 360) * 6, l = Sa(l, 100), u = Sa(u, 100);
  var f = Math.floor(i), p = i - f, y = u * (1 - l), h = u * (1 - p * l), x = u * (1 - (1 - p) * l), T = f % 6, R = [u, h, y, y, x, u][T], O = [x, u, u, h, y, y][T], _ = [y, y, x, u, u, h][T];
  return { r: R * 255, g: O * 255, b: _ * 255 };
}
function Yb(i, l, u, f) {
  var p = [
    Kc(Math.round(i).toString(16)),
    Kc(Math.round(l).toString(16)),
    Kc(Math.round(u).toString(16))
  ];
  return f && p[0].startsWith(p[0].charAt(1)) && p[1].startsWith(p[1].charAt(1)) && p[2].startsWith(p[2].charAt(1)) ? p[0].charAt(0) + p[1].charAt(0) + p[2].charAt(0) : p.join("");
}
function q9(i, l, u, f, p) {
  var y = [
    Kc(Math.round(i).toString(16)),
    Kc(Math.round(l).toString(16)),
    Kc(Math.round(u).toString(16)),
    Kc(Z9(f))
  ];
  return p && y[0].startsWith(y[0].charAt(1)) && y[1].startsWith(y[1].charAt(1)) && y[2].startsWith(y[2].charAt(1)) && y[3].startsWith(y[3].charAt(1)) ? y[0].charAt(0) + y[1].charAt(0) + y[2].charAt(0) + y[3].charAt(0) : y.join("");
}
function Z9(i) {
  return Math.round(parseFloat(i) * 255).toString(16);
}
function vR(i) {
  return Fi(i) / 255;
}
function Fi(i) {
  return parseInt(i, 16);
}
function J9(i) {
  return {
    r: i >> 16,
    g: (i & 65280) >> 8,
    b: i & 255
  };
}
var Qb = {
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
function Gd(i) {
  var l = { r: 0, g: 0, b: 0 }, u = 1, f = null, p = null, y = null, h = !1, x = !1;
  return typeof i == "string" && (i = nL(i)), typeof i == "object" && (Tu(i.r) && Tu(i.g) && Tu(i.b) ? (l = Y9(i.r, i.g, i.b), h = !0, x = String(i.r).substr(-1) === "%" ? "prgb" : "rgb") : Tu(i.h) && Tu(i.s) && Tu(i.v) ? (f = Uy(i.s), p = Uy(i.v), l = X9(i.h, f, p), h = !0, x = "hsv") : Tu(i.h) && Tu(i.s) && Tu(i.l) && (f = Uy(i.s), y = Uy(i.l), l = Q9(i.h, f, y), h = !0, x = "hsl"), Object.prototype.hasOwnProperty.call(i, "a") && (u = i.a)), u = o6(u), {
    ok: h,
    format: i.format || x,
    r: Math.min(255, Math.max(l.r, 0)),
    g: Math.min(255, Math.max(l.g, 0)),
    b: Math.min(255, Math.max(l.b, 0)),
    a: u
  };
}
var eL = "[-\\+]?\\d+%?", tL = "[-\\+]?\\d*\\.\\d+%?", Ls = "(?:".concat(tL, ")|(?:").concat(eL, ")"), pb = "[\\s|\\(]+(".concat(Ls, ")[,|\\s]+(").concat(Ls, ")[,|\\s]+(").concat(Ls, ")\\s*\\)?"), hb = "[\\s|\\(]+(".concat(Ls, ")[,|\\s]+(").concat(Ls, ")[,|\\s]+(").concat(Ls, ")[,|\\s]+(").concat(Ls, ")\\s*\\)?"), Wo = {
  CSS_UNIT: new RegExp(Ls),
  rgb: new RegExp("rgb" + pb),
  rgba: new RegExp("rgba" + hb),
  hsl: new RegExp("hsl" + pb),
  hsla: new RegExp("hsla" + hb),
  hsv: new RegExp("hsv" + pb),
  hsva: new RegExp("hsva" + hb),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function nL(i) {
  if (i = i.trim().toLowerCase(), i.length === 0)
    return !1;
  var l = !1;
  if (Qb[i])
    i = Qb[i], l = !0;
  else if (i === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var u = Wo.rgb.exec(i);
  return u ? { r: u[1], g: u[2], b: u[3] } : (u = Wo.rgba.exec(i), u ? { r: u[1], g: u[2], b: u[3], a: u[4] } : (u = Wo.hsl.exec(i), u ? { h: u[1], s: u[2], l: u[3] } : (u = Wo.hsla.exec(i), u ? { h: u[1], s: u[2], l: u[3], a: u[4] } : (u = Wo.hsv.exec(i), u ? { h: u[1], s: u[2], v: u[3] } : (u = Wo.hsva.exec(i), u ? { h: u[1], s: u[2], v: u[3], a: u[4] } : (u = Wo.hex8.exec(i), u ? {
    r: Fi(u[1]),
    g: Fi(u[2]),
    b: Fi(u[3]),
    a: vR(u[4]),
    format: l ? "name" : "hex8"
  } : (u = Wo.hex6.exec(i), u ? {
    r: Fi(u[1]),
    g: Fi(u[2]),
    b: Fi(u[3]),
    format: l ? "name" : "hex"
  } : (u = Wo.hex4.exec(i), u ? {
    r: Fi(u[1] + u[1]),
    g: Fi(u[2] + u[2]),
    b: Fi(u[3] + u[3]),
    a: vR(u[4] + u[4]),
    format: l ? "name" : "hex8"
  } : (u = Wo.hex3.exec(i), u ? {
    r: Fi(u[1] + u[1]),
    g: Fi(u[2] + u[2]),
    b: Fi(u[3] + u[3]),
    format: l ? "name" : "hex"
  } : !1)))))))));
}
function Tu(i) {
  return !!Wo.CSS_UNIT.exec(String(i));
}
var ji = (
  /** @class */
  function() {
    function i(l, u) {
      l === void 0 && (l = ""), u === void 0 && (u = {});
      var f;
      if (l instanceof i)
        return l;
      typeof l == "number" && (l = J9(l)), this.originalInput = l;
      var p = Gd(l);
      this.originalInput = l, this.r = p.r, this.g = p.g, this.b = p.b, this.a = p.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (f = u.format) !== null && f !== void 0 ? f : p.format, this.gradientType = u.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = p.ok;
    }
    return i.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, i.prototype.isLight = function() {
      return !this.isDark();
    }, i.prototype.getBrightness = function() {
      var l = this.toRgb();
      return (l.r * 299 + l.g * 587 + l.b * 114) / 1e3;
    }, i.prototype.getLuminance = function() {
      var l = this.toRgb(), u, f, p, y = l.r / 255, h = l.g / 255, x = l.b / 255;
      return y <= 0.03928 ? u = y / 12.92 : u = Math.pow((y + 0.055) / 1.055, 2.4), h <= 0.03928 ? f = h / 12.92 : f = Math.pow((h + 0.055) / 1.055, 2.4), x <= 0.03928 ? p = x / 12.92 : p = Math.pow((x + 0.055) / 1.055, 2.4), 0.2126 * u + 0.7152 * f + 0.0722 * p;
    }, i.prototype.getAlpha = function() {
      return this.a;
    }, i.prototype.setAlpha = function(l) {
      return this.a = o6(l), this.roundA = Math.round(100 * this.a) / 100, this;
    }, i.prototype.isMonochrome = function() {
      var l = this.toHsl().s;
      return l === 0;
    }, i.prototype.toHsv = function() {
      var l = Gb(this.r, this.g, this.b);
      return { h: l.h * 360, s: l.s, v: l.v, a: this.a };
    }, i.prototype.toHsvString = function() {
      var l = Gb(this.r, this.g, this.b), u = Math.round(l.h * 360), f = Math.round(l.s * 100), p = Math.round(l.v * 100);
      return this.a === 1 ? "hsv(".concat(u, ", ").concat(f, "%, ").concat(p, "%)") : "hsva(".concat(u, ", ").concat(f, "%, ").concat(p, "%, ").concat(this.roundA, ")");
    }, i.prototype.toHsl = function() {
      var l = dR(this.r, this.g, this.b);
      return { h: l.h * 360, s: l.s, l: l.l, a: this.a };
    }, i.prototype.toHslString = function() {
      var l = dR(this.r, this.g, this.b), u = Math.round(l.h * 360), f = Math.round(l.s * 100), p = Math.round(l.l * 100);
      return this.a === 1 ? "hsl(".concat(u, ", ").concat(f, "%, ").concat(p, "%)") : "hsla(".concat(u, ", ").concat(f, "%, ").concat(p, "%, ").concat(this.roundA, ")");
    }, i.prototype.toHex = function(l) {
      return l === void 0 && (l = !1), Yb(this.r, this.g, this.b, l);
    }, i.prototype.toHexString = function(l) {
      return l === void 0 && (l = !1), "#" + this.toHex(l);
    }, i.prototype.toHex8 = function(l) {
      return l === void 0 && (l = !1), q9(this.r, this.g, this.b, this.a, l);
    }, i.prototype.toHex8String = function(l) {
      return l === void 0 && (l = !1), "#" + this.toHex8(l);
    }, i.prototype.toHexShortString = function(l) {
      return l === void 0 && (l = !1), this.a === 1 ? this.toHexString(l) : this.toHex8String(l);
    }, i.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, i.prototype.toRgbString = function() {
      var l = Math.round(this.r), u = Math.round(this.g), f = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(l, ", ").concat(u, ", ").concat(f, ")") : "rgba(".concat(l, ", ").concat(u, ", ").concat(f, ", ").concat(this.roundA, ")");
    }, i.prototype.toPercentageRgb = function() {
      var l = function(u) {
        return "".concat(Math.round(Sa(u, 255) * 100), "%");
      };
      return {
        r: l(this.r),
        g: l(this.g),
        b: l(this.b),
        a: this.a
      };
    }, i.prototype.toPercentageRgbString = function() {
      var l = function(u) {
        return Math.round(Sa(u, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(l(this.r), "%, ").concat(l(this.g), "%, ").concat(l(this.b), "%)") : "rgba(".concat(l(this.r), "%, ").concat(l(this.g), "%, ").concat(l(this.b), "%, ").concat(this.roundA, ")");
    }, i.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var l = "#" + Yb(this.r, this.g, this.b, !1), u = 0, f = Object.entries(Qb); u < f.length; u++) {
        var p = f[u], y = p[0], h = p[1];
        if (l === h)
          return y;
      }
      return !1;
    }, i.prototype.toString = function(l) {
      var u = !!l;
      l = l != null ? l : this.format;
      var f = !1, p = this.a < 1 && this.a >= 0, y = !u && p && (l.startsWith("hex") || l === "name");
      return y ? l === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (l === "rgb" && (f = this.toRgbString()), l === "prgb" && (f = this.toPercentageRgbString()), (l === "hex" || l === "hex6") && (f = this.toHexString()), l === "hex3" && (f = this.toHexString(!0)), l === "hex4" && (f = this.toHex8String(!0)), l === "hex8" && (f = this.toHex8String()), l === "name" && (f = this.toName()), l === "hsl" && (f = this.toHslString()), l === "hsv" && (f = this.toHsvString()), f || this.toHexString());
    }, i.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, i.prototype.clone = function() {
      return new i(this.toString());
    }, i.prototype.lighten = function(l) {
      l === void 0 && (l = 10);
      var u = this.toHsl();
      return u.l += l / 100, u.l = Hy(u.l), new i(u);
    }, i.prototype.brighten = function(l) {
      l === void 0 && (l = 10);
      var u = this.toRgb();
      return u.r = Math.max(0, Math.min(255, u.r - Math.round(255 * -(l / 100)))), u.g = Math.max(0, Math.min(255, u.g - Math.round(255 * -(l / 100)))), u.b = Math.max(0, Math.min(255, u.b - Math.round(255 * -(l / 100)))), new i(u);
    }, i.prototype.darken = function(l) {
      l === void 0 && (l = 10);
      var u = this.toHsl();
      return u.l -= l / 100, u.l = Hy(u.l), new i(u);
    }, i.prototype.tint = function(l) {
      return l === void 0 && (l = 10), this.mix("white", l);
    }, i.prototype.shade = function(l) {
      return l === void 0 && (l = 10), this.mix("black", l);
    }, i.prototype.desaturate = function(l) {
      l === void 0 && (l = 10);
      var u = this.toHsl();
      return u.s -= l / 100, u.s = Hy(u.s), new i(u);
    }, i.prototype.saturate = function(l) {
      l === void 0 && (l = 10);
      var u = this.toHsl();
      return u.s += l / 100, u.s = Hy(u.s), new i(u);
    }, i.prototype.greyscale = function() {
      return this.desaturate(100);
    }, i.prototype.spin = function(l) {
      var u = this.toHsl(), f = (u.h + l) % 360;
      return u.h = f < 0 ? 360 + f : f, new i(u);
    }, i.prototype.mix = function(l, u) {
      u === void 0 && (u = 50);
      var f = this.toRgb(), p = new i(l).toRgb(), y = u / 100, h = {
        r: (p.r - f.r) * y + f.r,
        g: (p.g - f.g) * y + f.g,
        b: (p.b - f.b) * y + f.b,
        a: (p.a - f.a) * y + f.a
      };
      return new i(h);
    }, i.prototype.analogous = function(l, u) {
      l === void 0 && (l = 6), u === void 0 && (u = 30);
      var f = this.toHsl(), p = 360 / u, y = [this];
      for (f.h = (f.h - (p * l >> 1) + 720) % 360; --l; )
        f.h = (f.h + p) % 360, y.push(new i(f));
      return y;
    }, i.prototype.complement = function() {
      var l = this.toHsl();
      return l.h = (l.h + 180) % 360, new i(l);
    }, i.prototype.monochromatic = function(l) {
      l === void 0 && (l = 6);
      for (var u = this.toHsv(), f = u.h, p = u.s, y = u.v, h = [], x = 1 / l; l--; )
        h.push(new i({ h: f, s: p, v: y })), y = (y + x) % 1;
      return h;
    }, i.prototype.splitcomplement = function() {
      var l = this.toHsl(), u = l.h;
      return [
        this,
        new i({ h: (u + 72) % 360, s: l.s, l: l.l }),
        new i({ h: (u + 216) % 360, s: l.s, l: l.l })
      ];
    }, i.prototype.onBackground = function(l) {
      var u = this.toRgb(), f = new i(l).toRgb(), p = u.a + f.a * (1 - u.a);
      return new i({
        r: (u.r * u.a + f.r * f.a * (1 - u.a)) / p,
        g: (u.g * u.a + f.g * f.a * (1 - u.a)) / p,
        b: (u.b * u.a + f.b * f.a * (1 - u.a)) / p,
        a: p
      });
    }, i.prototype.triad = function() {
      return this.polyad(3);
    }, i.prototype.tetrad = function() {
      return this.polyad(4);
    }, i.prototype.polyad = function(l) {
      for (var u = this.toHsl(), f = u.h, p = [this], y = 360 / l, h = 1; h < l; h++)
        p.push(new i({ h: (f + h * y) % 360, s: u.s, l: u.l }));
      return p;
    }, i.prototype.equals = function(l) {
      return this.toRgbString() === new i(l).toRgbString();
    }, i;
  }()
), Iy = 2, pR = 0.16, rL = 0.05, aL = 0.05, iL = 0.15, l6 = 5, u6 = 4, oL = [{
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
function hR(i) {
  var l = i.r, u = i.g, f = i.b, p = Gb(l, u, f);
  return {
    h: p.h * 360,
    s: p.s,
    v: p.v
  };
}
function $y(i) {
  var l = i.r, u = i.g, f = i.b;
  return "#".concat(Yb(l, u, f, !1));
}
function lL(i, l, u) {
  var f = u / 100, p = {
    r: (l.r - i.r) * f + i.r,
    g: (l.g - i.g) * f + i.g,
    b: (l.b - i.b) * f + i.b
  };
  return p;
}
function mR(i, l, u) {
  var f;
  return Math.round(i.h) >= 60 && Math.round(i.h) <= 240 ? f = u ? Math.round(i.h) - Iy * l : Math.round(i.h) + Iy * l : f = u ? Math.round(i.h) + Iy * l : Math.round(i.h) - Iy * l, f < 0 ? f += 360 : f >= 360 && (f -= 360), f;
}
function gR(i, l, u) {
  if (i.h === 0 && i.s === 0)
    return i.s;
  var f;
  return u ? f = i.s - pR * l : l === u6 ? f = i.s + pR : f = i.s + rL * l, f > 1 && (f = 1), u && l === l6 && f > 0.1 && (f = 0.1), f < 0.06 && (f = 0.06), Number(f.toFixed(2));
}
function yR(i, l, u) {
  var f;
  return u ? f = i.v + aL * l : f = i.v - iL * l, f > 1 && (f = 1), Number(f.toFixed(2));
}
function Qc(i) {
  for (var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = [], f = Gd(i), p = l6; p > 0; p -= 1) {
    var y = hR(f), h = $y(Gd({
      h: mR(y, p, !0),
      s: gR(y, p, !0),
      v: yR(y, p, !0)
    }));
    u.push(h);
  }
  u.push($y(f));
  for (var x = 1; x <= u6; x += 1) {
    var T = hR(f), R = $y(Gd({
      h: mR(T, x),
      s: gR(T, x),
      v: yR(T, x)
    }));
    u.push(R);
  }
  return l.theme === "dark" ? oL.map(function(O) {
    var _ = O.index, N = O.opacity, L = $y(lL(Gd(l.backgroundColor || "#141414"), Gd(u[_]), N * 100));
    return L;
  }) : u;
}
var mb = {
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
}, Yy = {}, gb = {};
Object.keys(mb).forEach(function(i) {
  Yy[i] = Qc(mb[i]), Yy[i].primary = Yy[i][5], gb[i] = Qc(mb[i], {
    theme: "dark",
    backgroundColor: "#141414"
  }), gb[i].primary = gb[i][5];
});
var uL = Yy.blue, LE = /* @__PURE__ */ s1({});
function sL(i) {
  return i.replace(/-(.)/g, function(l, u) {
    return u.toUpperCase();
  });
}
function cL(i, l) {
  ii(i, "[@ant-design/icons] ".concat(l));
}
function SR(i) {
  return cr(i) === "object" && typeof i.name == "string" && typeof i.theme == "string" && (cr(i.icon) === "object" || typeof i.icon == "function");
}
function CR() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(i).reduce(function(l, u) {
    var f = i[u];
    switch (u) {
      case "class":
        l.className = f, delete l.class;
        break;
      default:
        delete l[u], l[sL(u)] = f;
    }
    return l;
  }, {});
}
function Xb(i, l, u) {
  return u ? /* @__PURE__ */ _i.createElement(i.tag, Re(Re({
    key: l
  }, CR(i.attrs)), u), (i.children || []).map(function(f, p) {
    return Xb(f, "".concat(l, "-").concat(i.tag, "-").concat(p));
  })) : /* @__PURE__ */ _i.createElement(i.tag, Re({
    key: l
  }, CR(i.attrs)), (i.children || []).map(function(f, p) {
    return Xb(f, "".concat(l, "-").concat(i.tag, "-").concat(p));
  }));
}
function s6(i) {
  return Qc(i)[0];
}
function c6(i) {
  return i ? Array.isArray(i) ? i : [i] : [];
}
var fL = `
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
`, dL = function(l) {
  var u = zs(LE), f = u.csp, p = u.prefixCls, y = fL;
  p && (y = y.replace(/anticon/g, p)), Ll(function() {
    var h = l.current, x = a1(h);
    Hs(y, "@ant-design-icons", {
      prepend: !0,
      csp: f,
      attachTo: x
    });
  }, []);
}, vL = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], xh = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function pL(i) {
  var l = i.primaryColor, u = i.secondaryColor;
  xh.primaryColor = l, xh.secondaryColor = u || s6(l), xh.calculated = !!u;
}
function hL() {
  return Re({}, xh);
}
var R1 = function(l) {
  var u = l.icon, f = l.className, p = l.onClick, y = l.style, h = l.primaryColor, x = l.secondaryColor, T = tr(l, vL), R = w.useRef(), O = xh;
  if (h && (O = {
    primaryColor: h,
    secondaryColor: x || s6(h)
  }), dL(R), cL(SR(u), "icon should be icon definiton, but got ".concat(u)), !SR(u))
    return null;
  var _ = u;
  return _ && typeof _.icon == "function" && (_ = Re(Re({}, _), {}, {
    icon: _.icon(O.primaryColor, O.secondaryColor)
  })), Xb(_.icon, "svg-".concat(_.name), Re(Re({
    className: f,
    onClick: p,
    style: y,
    "data-icon": _.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, T), {}, {
    ref: R
  }));
};
R1.displayName = "IconReact";
R1.getTwoToneColors = hL;
R1.setTwoToneColors = pL;
const AE = R1;
function f6(i) {
  var l = c6(i), u = _e(l, 2), f = u[0], p = u[1];
  return AE.setTwoToneColors({
    primaryColor: f,
    secondaryColor: p
  });
}
function mL() {
  var i = AE.getTwoToneColors();
  return i.calculated ? [i.primaryColor, i.secondaryColor] : i.primaryColor;
}
var gL = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
f6(uL.primary);
var k1 = /* @__PURE__ */ w.forwardRef(function(i, l) {
  var u = i.className, f = i.icon, p = i.spin, y = i.rotate, h = i.tabIndex, x = i.onClick, T = i.twoToneColor, R = tr(i, gL), O = w.useContext(LE), _ = O.prefixCls, N = _ === void 0 ? "anticon" : _, L = O.rootClassName, z = Fn(L, N, tt(tt({}, "".concat(N, "-").concat(f.name), !!f.name), "".concat(N, "-spin"), !!p || f.name === "loading"), u), H = h;
  H === void 0 && x && (H = -1);
  var A = y ? {
    msTransform: "rotate(".concat(y, "deg)"),
    transform: "rotate(".concat(y, "deg)")
  } : void 0, q = c6(T), V = _e(q, 2), U = V[0], I = V[1];
  return /* @__PURE__ */ w.createElement("span", bn({
    role: "img",
    "aria-label": f.name
  }, R, {
    ref: l,
    tabIndex: H,
    onClick: x,
    className: z
  }), /* @__PURE__ */ w.createElement(AE, {
    icon: f,
    primaryColor: U,
    secondaryColor: I,
    style: A
  }));
});
k1.displayName = "AntdIcon";
k1.getTwoToneColor = mL;
k1.setTwoToneColor = f6;
const zE = k1;
var d6 = function(l, u) {
  return /* @__PURE__ */ w.createElement(zE, bn({}, l, {
    ref: u,
    icon: W9
  }));
};
process.env.NODE_ENV !== "production" && (d6.displayName = "BarsOutlined");
const yL = /* @__PURE__ */ w.forwardRef(d6);
var SL = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
const CL = SL;
var v6 = function(l, u) {
  return /* @__PURE__ */ w.createElement(zE, bn({}, l, {
    ref: u,
    icon: CL
  }));
};
process.env.NODE_ENV !== "production" && (v6.displayName = "LeftOutlined");
const bR = /* @__PURE__ */ w.forwardRef(v6);
var bL = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
const EL = bL;
var p6 = function(l, u) {
  return /* @__PURE__ */ w.createElement(zE, bn({}, l, {
    ref: u,
    icon: EL
  }));
};
process.env.NODE_ENV !== "production" && (p6.displayName = "RightOutlined");
const ER = /* @__PURE__ */ w.forwardRef(p6), wL = (i) => !isNaN(parseFloat(i)) && isFinite(i);
function i1(i) {
  for (var l = 0, u, f = 0, p = i.length; p >= 4; ++f, p -= 4)
    u = i.charCodeAt(f) & 255 | (i.charCodeAt(++f) & 255) << 8 | (i.charCodeAt(++f) & 255) << 16 | (i.charCodeAt(++f) & 255) << 24, u = /* Math.imul(k, m): */
    (u & 65535) * 1540483477 + ((u >>> 16) * 59797 << 16), u ^= /* k >>> r: */
    u >>> 24, l = /* Math.imul(k, m): */
    (u & 65535) * 1540483477 + ((u >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (l & 65535) * 1540483477 + ((l >>> 16) * 59797 << 16);
  switch (p) {
    case 3:
      l ^= (i.charCodeAt(f + 2) & 255) << 16;
    case 2:
      l ^= (i.charCodeAt(f + 1) & 255) << 8;
    case 1:
      l ^= i.charCodeAt(f) & 255, l = /* Math.imul(h, m): */
      (l & 65535) * 1540483477 + ((l >>> 16) * 59797 << 16);
  }
  return l ^= l >>> 13, l = /* Math.imul(h, m): */
  (l & 65535) * 1540483477 + ((l >>> 16) * 59797 << 16), ((l ^ l >>> 15) >>> 0).toString(36);
}
var xL = "%";
function qb(i) {
  return i.join(xL);
}
var TL = /* @__PURE__ */ function() {
  function i(l) {
    Xo(this, i), tt(this, "instanceId", void 0), tt(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = l;
  }
  return qo(i, [{
    key: "get",
    value: function(u) {
      return this.opGet(qb(u));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(u) {
      return this.cache.get(u) || null;
    }
  }, {
    key: "update",
    value: function(u, f) {
      return this.opUpdate(qb(u), f);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(u, f) {
      var p = this.cache.get(u), y = f(p);
      y === null ? this.cache.delete(u) : this.cache.set(u, y);
    }
  }]), i;
}(), ev = "data-token-hash", Go = "data-css-hash", RL = "data-cache-path", As = "__cssinjs_instance__";
function kL() {
  var i = Math.random().toString(12).slice(2);
  if (typeof document != "undefined" && document.head && document.body) {
    var l = document.body.querySelectorAll("style[".concat(Go, "]")) || [], u = document.head.firstChild;
    Array.from(l).forEach(function(p) {
      p[As] = p[As] || i, p[As] === i && document.head.insertBefore(p, u);
    });
    var f = {};
    Array.from(document.querySelectorAll("style[".concat(Go, "]"))).forEach(function(p) {
      var y = p.getAttribute(Go);
      if (f[y]) {
        if (p[As] === i) {
          var h;
          (h = p.parentNode) === null || h === void 0 || h.removeChild(p);
        }
      } else
        f[y] = !0;
    });
  }
  return new TL(i);
}
var _L = /* @__PURE__ */ w.createContext({
  hashPriority: "low",
  cache: kL(),
  defaultCache: !0
});
const _1 = _L;
function ML(i, l) {
  if (i.length !== l.length)
    return !1;
  for (var u = 0; u < i.length; u++)
    if (i[u] !== l[u])
      return !1;
  return !0;
}
var PE = /* @__PURE__ */ function() {
  function i() {
    Xo(this, i), tt(this, "cache", void 0), tt(this, "keys", void 0), tt(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return qo(i, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(u) {
      var f, p, y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, h = {
        map: this.cache
      };
      return u.forEach(function(x) {
        if (!h)
          h = void 0;
        else {
          var T;
          h = (T = h) === null || T === void 0 || (T = T.map) === null || T === void 0 ? void 0 : T.get(x);
        }
      }), (f = h) !== null && f !== void 0 && f.value && y && (h.value[1] = this.cacheCallTimes++), (p = h) === null || p === void 0 ? void 0 : p.value;
    }
  }, {
    key: "get",
    value: function(u) {
      var f;
      return (f = this.internalGet(u, !0)) === null || f === void 0 ? void 0 : f[0];
    }
  }, {
    key: "has",
    value: function(u) {
      return !!this.internalGet(u);
    }
  }, {
    key: "set",
    value: function(u, f) {
      var p = this;
      if (!this.has(u)) {
        if (this.size() + 1 > i.MAX_CACHE_SIZE + i.MAX_CACHE_OFFSET) {
          var y = this.keys.reduce(function(R, O) {
            var _ = _e(R, 2), N = _[1];
            return p.internalGet(O)[1] < N ? [O, p.internalGet(O)[1]] : R;
          }, [this.keys[0], this.cacheCallTimes]), h = _e(y, 1), x = h[0];
          this.delete(x);
        }
        this.keys.push(u);
      }
      var T = this.cache;
      u.forEach(function(R, O) {
        if (O === u.length - 1)
          T.set(R, {
            value: [f, p.cacheCallTimes++]
          });
        else {
          var _ = T.get(R);
          _ ? _.map || (_.map = /* @__PURE__ */ new Map()) : T.set(R, {
            map: /* @__PURE__ */ new Map()
          }), T = T.get(R).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(u, f) {
      var p = u.get(f[0]);
      if (f.length === 1) {
        var y;
        return p.map ? u.set(f[0], {
          map: p.map
        }) : u.delete(f[0]), (y = p.value) === null || y === void 0 ? void 0 : y[0];
      }
      var h = this.deleteByPath(p.map, f.slice(1));
      return (!p.map || p.map.size === 0) && !p.value && u.delete(f[0]), h;
    }
  }, {
    key: "delete",
    value: function(u) {
      if (this.has(u))
        return this.keys = this.keys.filter(function(f) {
          return !ML(f, u);
        }), this.deleteByPath(this.cache, u);
    }
  }]), i;
}();
tt(PE, "MAX_CACHE_SIZE", 20);
tt(PE, "MAX_CACHE_OFFSET", 5);
var wR = 0, h6 = /* @__PURE__ */ function() {
  function i(l) {
    Xo(this, i), tt(this, "derivatives", void 0), tt(this, "id", void 0), this.derivatives = Array.isArray(l) ? l : [l], this.id = wR, l.length === 0 && Zd(l.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), wR += 1;
  }
  return qo(i, [{
    key: "getDerivativeToken",
    value: function(u) {
      return this.derivatives.reduce(function(f, p) {
        return p(u, f);
      }, void 0);
    }
  }]), i;
}(), yb = new PE();
function Zb(i) {
  var l = Array.isArray(i) ? i : [i];
  return yb.has(l) || yb.set(l, new h6(l)), yb.get(l);
}
var OL = /* @__PURE__ */ new WeakMap(), Sb = {};
function NL(i, l) {
  for (var u = OL, f = 0; f < l.length; f += 1) {
    var p = l[f];
    u.has(p) || u.set(p, /* @__PURE__ */ new WeakMap()), u = u.get(p);
  }
  return u.has(Sb) || u.set(Sb, i()), u.get(Sb);
}
var xR = /* @__PURE__ */ new WeakMap();
function Th(i) {
  var l = xR.get(i) || "";
  return l || (Object.keys(i).forEach(function(u) {
    var f = i[u];
    l += u, f instanceof h6 ? l += f.id : f && cr(f) === "object" ? l += Th(f) : l += f;
  }), xR.set(i, l)), l;
}
function TR(i, l) {
  return i1("".concat(l, "_").concat(Th(i)));
}
var Rh = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), m6 = "_bAmBoO_";
function DL(i, l, u) {
  if (ai()) {
    var f, p;
    Hs(i, Rh);
    var y = document.createElement("div");
    y.style.position = "fixed", y.style.left = "0", y.style.top = "0", l == null || l(y), document.body.appendChild(y), process.env.NODE_ENV !== "production" && (y.innerHTML = "Test", y.style.zIndex = "9999999");
    var h = u ? u(y) : (f = getComputedStyle(y).content) === null || f === void 0 ? void 0 : f.includes(m6);
    return (p = y.parentNode) === null || p === void 0 || p.removeChild(y), Mh(Rh), h;
  }
  return !1;
}
var Cb = void 0;
function LL() {
  return Cb === void 0 && (Cb = DL("@layer ".concat(Rh, " { .").concat(Rh, ' { content: "').concat(m6, '"!important; } }'), function(i) {
    i.className = Rh;
  })), Cb;
}
var Jb = ai();
function Nh(i) {
  return typeof i == "number" ? "".concat(i, "px") : i;
}
function o1(i, l, u) {
  var f, p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, y = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (y)
    return i;
  var h = Re(Re({}, p), {}, (f = {}, tt(f, ev, l), tt(f, Go, u), f)), x = Object.keys(h).map(function(T) {
    var R = h[T];
    return R ? "".concat(T, '="').concat(R, '"') : null;
  }).filter(function(T) {
    return T;
  }).join(" ");
  return "<style ".concat(x, ">").concat(i, "</style>");
}
var g6 = function(l) {
  var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(u ? "".concat(u, "-") : "").concat(l).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, AL = function(l, u, f) {
  return Object.keys(l).length ? ".".concat(u).concat(f != null && f.scope ? ".".concat(f.scope) : "", "{").concat(Object.entries(l).map(function(p) {
    var y = _e(p, 2), h = y[0], x = y[1];
    return "".concat(h, ":").concat(x, ";");
  }).join(""), "}") : "";
}, y6 = function(l, u, f) {
  var p = {}, y = {};
  return Object.entries(l).forEach(function(h) {
    var x, T, R = _e(h, 2), O = R[0], _ = R[1];
    if (f != null && (x = f.preserve) !== null && x !== void 0 && x[O])
      y[O] = _;
    else if ((typeof _ == "string" || typeof _ == "number") && !(f != null && (T = f.ignore) !== null && T !== void 0 && T[O])) {
      var N, L = g6(O, f == null ? void 0 : f.prefix);
      p[L] = typeof _ == "number" && !(f != null && (N = f.unitless) !== null && N !== void 0 && N[O]) ? "".concat(_, "px") : String(_), y[O] = "var(".concat(L, ")");
    }
  }), [y, AL(p, u, {
    scope: f == null ? void 0 : f.scope
  })];
}, zL = Re({}, w), RR = zL.useInsertionEffect, PL = function(l, u, f) {
  w.useMemo(l, f), Ua(function() {
    return u(!0);
  }, f);
}, HL = RR ? function(i, l, u) {
  return RR(function() {
    return i(), l();
  }, u);
} : PL;
const UL = HL;
var IL = Re({}, w), $L = IL.useInsertionEffect, FL = function(l) {
  var u = [], f = !1;
  function p(y) {
    if (f) {
      process.env.NODE_ENV !== "production" && Zd(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    u.push(y);
  }
  return w.useEffect(function() {
    return f = !1, function() {
      f = !0, u.length && u.forEach(function(y) {
        return y();
      });
    };
  }, l), p;
}, jL = function() {
  return function(l) {
    l();
  };
}, VL = typeof $L != "undefined" ? FL : jL;
const BL = VL;
function WL() {
  return !1;
}
var eE = !1;
function KL() {
  return eE;
}
const GL = process.env.NODE_ENV === "production" ? WL : KL;
if (process.env.NODE_ENV !== "production" && typeof module != "undefined" && module && module.hot && typeof window != "undefined") {
  var bb = window;
  if (typeof bb.webpackHotUpdate == "function") {
    var YL = bb.webpackHotUpdate;
    bb.webpackHotUpdate = function() {
      return eE = !0, setTimeout(function() {
        eE = !1;
      }, 0), YL.apply(void 0, arguments);
    };
  }
}
function HE(i, l, u, f, p) {
  var y = w.useContext(_1), h = y.cache, x = [i].concat(Tr(l)), T = qb(x), R = BL([T]), O = GL(), _ = function(H) {
    h.opUpdate(T, function(A) {
      var q = A || [void 0, void 0], V = _e(q, 2), U = V[0], I = U === void 0 ? 0 : U, W = V[1], re = W;
      process.env.NODE_ENV !== "production" && W && O && (f == null || f(re, O), re = null);
      var G = re || u(), se = [I, G];
      return H ? H(se) : se;
    });
  };
  w.useMemo(
    function() {
      _();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [T]
    /* eslint-enable */
  );
  var N = h.opGet(T);
  process.env.NODE_ENV !== "production" && !N && (_(), N = h.opGet(T));
  var L = N[1];
  return UL(function() {
    p == null || p(L);
  }, function(z) {
    return _(function(H) {
      var A = _e(H, 2), q = A[0], V = A[1];
      return z && q === 0 && (p == null || p(L)), [q + 1, V];
    }), function() {
      h.opUpdate(T, function(H) {
        var A = H || [], q = _e(A, 2), V = q[0], U = V === void 0 ? 0 : V, I = q[1], W = U - 1;
        return W === 0 ? (R(function() {
          (z || !h.opGet(T)) && (f == null || f(I, !1));
        }), null) : [U - 1, I];
      });
    };
  }, [T]), L;
}
var QL = {}, XL = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Wc = /* @__PURE__ */ new Map();
function qL(i) {
  Wc.set(i, (Wc.get(i) || 0) + 1);
}
function ZL(i, l) {
  if (typeof document != "undefined") {
    var u = document.querySelectorAll("style[".concat(ev, '="').concat(i, '"]'));
    u.forEach(function(f) {
      if (f[As] === l) {
        var p;
        (p = f.parentNode) === null || p === void 0 || p.removeChild(f);
      }
    });
  }
}
var JL = 0;
function e7(i, l) {
  Wc.set(i, (Wc.get(i) || 0) - 1);
  var u = Array.from(Wc.keys()), f = u.filter(function(p) {
    var y = Wc.get(p) || 0;
    return y <= 0;
  });
  u.length - f.length > JL && f.forEach(function(p) {
    ZL(p, l), Wc.delete(p);
  });
}
var t7 = function(l, u, f, p) {
  var y = f.getDerivativeToken(l), h = Re(Re({}, y), u);
  return p && (h = p(h)), h;
}, S6 = "token";
function n7(i, l) {
  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, f = zs(_1), p = f.cache.instanceId, y = f.container, h = u.salt, x = h === void 0 ? "" : h, T = u.override, R = T === void 0 ? QL : T, O = u.formatToken, _ = u.getComputedToken, N = u.cssVar, L = NL(function() {
    return Object.assign.apply(Object, [{}].concat(Tr(l)));
  }, l), z = Th(L), H = Th(R), A = N ? Th(N) : "", q = HE(S6, [x, i.id, z, H, A], function() {
    var V, U = _ ? _(L, R, i) : t7(L, R, i, O), I = Re({}, U), W = "";
    if (N) {
      var re = y6(U, N.key, {
        prefix: N.prefix,
        ignore: N.ignore,
        unitless: N.unitless,
        preserve: N.preserve
      }), G = _e(re, 2);
      U = G[0], W = G[1];
    }
    var se = TR(U, x);
    U._tokenKey = se, I._tokenKey = TR(I, x);
    var Te = (V = N == null ? void 0 : N.key) !== null && V !== void 0 ? V : se;
    U._themeKey = Te, qL(Te);
    var le = "".concat(XL, "-").concat(i1(se));
    return U._hashId = le, [U, le, I, W, (N == null ? void 0 : N.key) || ""];
  }, function(V) {
    e7(V[0]._themeKey, p);
  }, function(V) {
    var U = _e(V, 4), I = U[0], W = U[3];
    if (N && W) {
      var re = Hs(W, i1("css-variables-".concat(I._themeKey)), {
        mark: Go,
        prepend: "queue",
        attachTo: y,
        priority: -999
      });
      re[As] = p, re.setAttribute(ev, I._themeKey);
    }
  });
  return q;
}
var r7 = function(l, u, f) {
  var p = _e(l, 5), y = p[2], h = p[3], x = p[4], T = f || {}, R = T.plain;
  if (!h)
    return null;
  var O = y._tokenKey, _ = -999, N = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(_)
  }, L = o1(h, x, O, N, R);
  return [_, O, L];
}, a7 = {
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
}, C6 = "comm", b6 = "rule", E6 = "decl", i7 = "@import", o7 = "@keyframes", l7 = "@layer", w6 = Math.abs, UE = String.fromCharCode;
function x6(i) {
  return i.trim();
}
function Qy(i, l, u) {
  return i.replace(l, u);
}
function u7(i, l, u) {
  return i.indexOf(l, u);
}
function Dh(i, l) {
  return i.charCodeAt(l) | 0;
}
function Lh(i, l, u) {
  return i.slice(l, u);
}
function Mu(i) {
  return i.length;
}
function s7(i) {
  return i.length;
}
function Fy(i, l) {
  return l.push(i), i;
}
var M1 = 1, tv = 1, T6 = 0, so = 0, Pr = 0, av = "";
function IE(i, l, u, f, p, y, h, x) {
  return { value: i, root: l, parent: u, type: f, props: p, children: y, line: M1, column: tv, length: h, return: "", siblings: x };
}
function c7() {
  return Pr;
}
function f7() {
  return Pr = so > 0 ? Dh(av, --so) : 0, tv--, Pr === 10 && (tv = 1, M1--), Pr;
}
function Yo() {
  return Pr = so < T6 ? Dh(av, so++) : 0, tv++, Pr === 10 && (tv = 1, M1++), Pr;
}
function Gc() {
  return Dh(av, so);
}
function Xy() {
  return so;
}
function O1(i, l) {
  return Lh(av, i, l);
}
function tE(i) {
  switch (i) {
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
function d7(i) {
  return M1 = tv = 1, T6 = Mu(av = i), so = 0, [];
}
function v7(i) {
  return av = "", i;
}
function Eb(i) {
  return x6(O1(so - 1, nE(i === 91 ? i + 2 : i === 40 ? i + 1 : i)));
}
function p7(i) {
  for (; (Pr = Gc()) && Pr < 33; )
    Yo();
  return tE(i) > 2 || tE(Pr) > 3 ? "" : " ";
}
function h7(i, l) {
  for (; --l && Yo() && !(Pr < 48 || Pr > 102 || Pr > 57 && Pr < 65 || Pr > 70 && Pr < 97); )
    ;
  return O1(i, Xy() + (l < 6 && Gc() == 32 && Yo() == 32));
}
function nE(i) {
  for (; Yo(); )
    switch (Pr) {
      case i:
        return so;
      case 34:
      case 39:
        i !== 34 && i !== 39 && nE(Pr);
        break;
      case 40:
        i === 41 && nE(i);
        break;
      case 92:
        Yo();
        break;
    }
  return so;
}
function m7(i, l) {
  for (; Yo() && i + Pr !== 57; )
    if (i + Pr === 84 && Gc() === 47)
      break;
  return "/*" + O1(l, so - 1) + "*" + UE(i === 47 ? i : Yo());
}
function g7(i) {
  for (; !tE(Gc()); )
    Yo();
  return O1(i, so);
}
function y7(i) {
  return v7(qy("", null, null, null, [""], i = d7(i), 0, [0], i));
}
function qy(i, l, u, f, p, y, h, x, T) {
  for (var R = 0, O = 0, _ = h, N = 0, L = 0, z = 0, H = 1, A = 1, q = 1, V = 0, U = "", I = p, W = y, re = f, G = U; A; )
    switch (z = V, V = Yo()) {
      case 40:
        if (z != 108 && Dh(G, _ - 1) == 58) {
          u7(G += Qy(Eb(V), "&", "&\f"), "&\f", w6(R ? x[R - 1] : 0)) != -1 && (q = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        G += Eb(V);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        G += p7(z);
        break;
      case 92:
        G += h7(Xy() - 1, 7);
        continue;
      case 47:
        switch (Gc()) {
          case 42:
          case 47:
            Fy(S7(m7(Yo(), Xy()), l, u, T), T);
            break;
          default:
            G += "/";
        }
        break;
      case 123 * H:
        x[R++] = Mu(G) * q;
      case 125 * H:
      case 59:
      case 0:
        switch (V) {
          case 0:
          case 125:
            A = 0;
          case 59 + O:
            q == -1 && (G = Qy(G, /\f/g, "")), L > 0 && Mu(G) - _ && Fy(L > 32 ? _R(G + ";", f, u, _ - 1, T) : _R(Qy(G, " ", "") + ";", f, u, _ - 2, T), T);
            break;
          case 59:
            G += ";";
          default:
            if (Fy(re = kR(G, l, u, R, O, p, x, U, I = [], W = [], _, y), y), V === 123)
              if (O === 0)
                qy(G, l, re, re, I, y, _, x, W);
              else
                switch (N === 99 && Dh(G, 3) === 110 ? 100 : N) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    qy(i, re, re, f && Fy(kR(i, re, re, 0, 0, p, x, U, p, I = [], _, W), W), p, W, _, x, f ? I : W);
                    break;
                  default:
                    qy(G, re, re, re, [""], W, 0, x, W);
                }
        }
        R = O = L = 0, H = q = 1, U = G = "", _ = h;
        break;
      case 58:
        _ = 1 + Mu(G), L = z;
      default:
        if (H < 1) {
          if (V == 123)
            --H;
          else if (V == 125 && H++ == 0 && f7() == 125)
            continue;
        }
        switch (G += UE(V), V * H) {
          case 38:
            q = O > 0 ? 1 : (G += "\f", -1);
            break;
          case 44:
            x[R++] = (Mu(G) - 1) * q, q = 1;
            break;
          case 64:
            Gc() === 45 && (G += Eb(Yo())), N = Gc(), O = _ = Mu(U = G += g7(Xy())), V++;
            break;
          case 45:
            z === 45 && Mu(G) == 2 && (H = 0);
        }
    }
  return y;
}
function kR(i, l, u, f, p, y, h, x, T, R, O, _) {
  for (var N = p - 1, L = p === 0 ? y : [""], z = s7(L), H = 0, A = 0, q = 0; H < f; ++H)
    for (var V = 0, U = Lh(i, N + 1, N = w6(A = h[H])), I = i; V < z; ++V)
      (I = x6(A > 0 ? L[V] + " " + U : Qy(U, /&\f/g, L[V]))) && (T[q++] = I);
  return IE(i, l, u, p === 0 ? b6 : x, T, R, O, _);
}
function S7(i, l, u, f) {
  return IE(i, l, u, C6, UE(c7()), Lh(i, 2, -2), 0, f);
}
function _R(i, l, u, f, p) {
  return IE(i, l, u, E6, Lh(i, 0, f), Lh(i, f + 1, -1), f, p);
}
function rE(i, l) {
  for (var u = "", f = 0; f < i.length; f++)
    u += l(i[f], f, i, l) || "";
  return u;
}
function C7(i, l, u, f) {
  switch (i.type) {
    case l7:
      if (i.children.length)
        break;
    case i7:
    case E6:
      return i.return = i.return || i.value;
    case C6:
      return "";
    case o7:
      return i.return = i.value + "{" + rE(i.children, f) + "}";
    case b6:
      if (!Mu(i.value = i.props.join(",")))
        return "";
  }
  return Mu(u = rE(i.children, f)) ? i.return = i.value + "{" + u + "}" : "";
}
function R6(i, l) {
  var u = l.path, f = l.parentSelectors;
  ii(!1, "[Ant Design CSS-in-JS] ".concat(u ? "Error in ".concat(u, ": ") : "").concat(i).concat(f.length ? " Selector: ".concat(f.join(" | ")) : ""));
}
var b7 = function(l, u, f) {
  if (l === "content") {
    var p = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, y = ["normal", "none", "initial", "inherit", "unset"];
    (typeof u != "string" || y.indexOf(u) === -1 && !p.test(u) && (u.charAt(0) !== u.charAt(u.length - 1) || u.charAt(0) !== '"' && u.charAt(0) !== "'")) && R6("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(u, "\"'`."), f);
  }
}, E7 = function(l, u, f) {
  l === "animation" && f.hashId && u !== "none" && R6("You seem to be using hashed animation '".concat(u, "', in which case 'animationName' with Keyframe as value is recommended."), f);
}, MR = "data-ant-cssinjs-cache-path", k6 = "_FILE_STYLE__", Yc, _6 = !0;
function w7() {
  if (!Yc && (Yc = {}, ai())) {
    var i = document.createElement("div");
    i.className = MR, i.style.position = "fixed", i.style.visibility = "hidden", i.style.top = "-9999px", document.body.appendChild(i);
    var l = getComputedStyle(i).content || "";
    l = l.replace(/^"/, "").replace(/"$/, ""), l.split(";").forEach(function(p) {
      var y = p.split(":"), h = _e(y, 2), x = h[0], T = h[1];
      Yc[x] = T;
    });
    var u = document.querySelector("style[".concat(MR, "]"));
    if (u) {
      var f;
      _6 = !1, (f = u.parentNode) === null || f === void 0 || f.removeChild(u);
    }
    document.body.removeChild(i);
  }
}
function x7(i) {
  return w7(), !!Yc[i];
}
function T7(i) {
  var l = Yc[i], u = null;
  if (l && ai())
    if (_6)
      u = k6;
    else {
      var f = document.querySelector("style[".concat(Go, '="').concat(Yc[i], '"]'));
      f ? u = f.innerHTML : delete Yc[i];
    }
  return [u, l];
}
var M6 = "_skip_check_", O6 = "_multi_value_";
function aE(i) {
  var l = rE(y7(i), C7);
  return l.replace(/\{%%%\:[^;];}/g, ";");
}
function R7(i) {
  return cr(i) === "object" && i && (M6 in i || O6 in i);
}
function k7(i, l, u) {
  if (!l)
    return i;
  var f = ".".concat(l), p = u === "low" ? ":where(".concat(f, ")") : f, y = i.split(",").map(function(h) {
    var x, T = h.trim().split(/\s+/), R = T[0] || "", O = ((x = R.match(/^\w+/)) === null || x === void 0 ? void 0 : x[0]) || "";
    return R = "".concat(O).concat(p).concat(R.slice(O.length)), [R].concat(Tr(T.slice(1))).join(" ");
  });
  return y.join(",");
}
var _7 = function i(l) {
  var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, p = f.root, y = f.injectHash, h = f.parentSelectors, x = u.hashId, T = u.layer, R = u.path, O = u.hashPriority, _ = u.transformers, N = _ === void 0 ? [] : _, L = u.linters, z = L === void 0 ? [] : L, H = "", A = {};
  function q(re) {
    var G = re.getName(x);
    if (!A[G]) {
      var se = i(re.style, u, {
        root: !1,
        parentSelectors: h
      }), Te = _e(se, 1), le = Te[0];
      A[G] = "@keyframes ".concat(re.getName(x)).concat(le);
    }
  }
  function V(re) {
    var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return re.forEach(function(se) {
      Array.isArray(se) ? V(se, G) : se && G.push(se);
    }), G;
  }
  var U = V(Array.isArray(l) ? l : [l]);
  if (U.forEach(function(re) {
    var G = typeof re == "string" && !p ? {} : re;
    if (typeof G == "string")
      H += "".concat(G, `
`);
    else if (G._keyframe)
      q(G);
    else {
      var se = N.reduce(function(Te, le) {
        var ge;
        return (le == null || (ge = le.visit) === null || ge === void 0 ? void 0 : ge.call(le, Te)) || Te;
      }, G);
      Object.keys(se).forEach(function(Te) {
        var le = se[Te];
        if (cr(le) === "object" && le && (Te !== "animationName" || !le._keyframe) && !R7(le)) {
          var ge = !1, Ee = Te.trim(), ne = !1;
          (p || y) && x ? Ee.startsWith("@") ? ge = !0 : Ee = k7(Te, x, O) : p && !x && (Ee === "&" || Ee === "") && (Ee = "", ne = !0);
          var fe = i(le, u, {
            root: ne,
            injectHash: ge,
            parentSelectors: [].concat(Tr(h), [Ee])
          }), Ce = _e(fe, 2), we = Ce[0], Ne = Ce[1];
          A = Re(Re({}, A), Ne), H += "".concat(Ee).concat(we);
        } else {
          let ae = function(ze, De) {
            process.env.NODE_ENV !== "production" && (cr(le) !== "object" || !(le != null && le[M6])) && [b7, E7].concat(Tr(z)).forEach(function(At) {
              return At(ze, De, {
                path: R,
                hashId: x,
                parentSelectors: h
              });
            });
            var ft = ze.replace(/[A-Z]/g, function(At) {
              return "-".concat(At.toLowerCase());
            }), dt = De;
            !a7[ze] && typeof dt == "number" && dt !== 0 && (dt = "".concat(dt, "px")), ze === "animationName" && De !== null && De !== void 0 && De._keyframe && (q(De), dt = De.getName(x)), H += "".concat(ft, ":").concat(dt, ";");
          };
          var ee, de = (ee = le == null ? void 0 : le.value) !== null && ee !== void 0 ? ee : le;
          cr(le) === "object" && le !== null && le !== void 0 && le[O6] && Array.isArray(de) ? de.forEach(function(ze) {
            ae(Te, ze);
          }) : ae(Te, de);
        }
      });
    }
  }), !p)
    H = "{".concat(H, "}");
  else if (T && LL()) {
    var I = T.split(","), W = I[I.length - 1].trim();
    H = "@layer ".concat(W, " {").concat(H, "}"), I.length > 1 && (H = "@layer ".concat(T, "{%%%:%}").concat(H));
  }
  return [H, A];
};
function N6(i, l) {
  return i1("".concat(i.join("%")).concat(l));
}
function M7() {
  return null;
}
var D6 = "style";
function iE(i, l) {
  var u = i.token, f = i.path, p = i.hashId, y = i.layer, h = i.nonce, x = i.clientOnly, T = i.order, R = T === void 0 ? 0 : T, O = w.useContext(_1), _ = O.autoClear, N = O.mock, L = O.defaultCache, z = O.hashPriority, H = O.container, A = O.ssrInline, q = O.transformers, V = O.linters, U = O.cache, I = u._tokenKey, W = [I].concat(Tr(f)), re = Jb;
  process.env.NODE_ENV !== "production" && N !== void 0 && (re = N === "client");
  var G = HE(
    D6,
    W,
    // Create cache if needed
    function() {
      var Ee = W.join("|");
      if (x7(Ee)) {
        var ne = T7(Ee), fe = _e(ne, 2), Ce = fe[0], we = fe[1];
        if (Ce)
          return [Ce, I, we, {}, x, R];
      }
      var Ne = l(), ee = _7(Ne, {
        hashId: p,
        hashPriority: z,
        layer: y,
        path: f.join("-"),
        transformers: q,
        linters: V
      }), de = _e(ee, 2), ae = de[0], ze = de[1], De = aE(ae), ft = N6(W, De);
      return [De, I, ft, ze, x, R];
    },
    // Remove cache if no need
    function(Ee, ne) {
      var fe = _e(Ee, 3), Ce = fe[2];
      (ne || _) && Jb && Mh(Ce, {
        mark: Go
      });
    },
    // Effect: Inject style here
    function(Ee) {
      var ne = _e(Ee, 4), fe = ne[0];
      ne[1];
      var Ce = ne[2], we = ne[3];
      if (re && fe !== k6) {
        var Ne = {
          mark: Go,
          prepend: "queue",
          attachTo: H,
          priority: R
        }, ee = typeof h == "function" ? h() : h;
        ee && (Ne.csp = {
          nonce: ee
        });
        var de = Hs(fe, Ce, Ne);
        de[As] = U.instanceId, de.setAttribute(ev, I), process.env.NODE_ENV !== "production" && de.setAttribute(RL, W.join("|")), Object.keys(we).forEach(function(ae) {
          Hs(aE(we[ae]), "_effect-".concat(ae), Ne);
        });
      }
    }
  ), se = _e(G, 3), Te = se[0], le = se[1], ge = se[2];
  return function(Ee) {
    var ne;
    if (!A || re || !L)
      ne = /* @__PURE__ */ w.createElement(M7, null);
    else {
      var fe;
      ne = /* @__PURE__ */ w.createElement("style", bn({}, (fe = {}, tt(fe, ev, le), tt(fe, Go, ge), fe), {
        dangerouslySetInnerHTML: {
          __html: Te
        }
      }));
    }
    return /* @__PURE__ */ w.createElement(w.Fragment, null, ne, Ee);
  };
}
var O7 = function(l, u, f) {
  var p = _e(l, 6), y = p[0], h = p[1], x = p[2], T = p[3], R = p[4], O = p[5], _ = f || {}, N = _.plain;
  if (R)
    return null;
  var L = y, z = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(O)
  };
  return L = o1(y, h, x, z, N), T && Object.keys(T).forEach(function(H) {
    if (!u[H]) {
      u[H] = !0;
      var A = aE(T[H]);
      L += o1(A, h, "_effect-".concat(H), z, N);
    }
  }), [O, x, L];
}, L6 = "cssVar", N7 = function(l, u) {
  var f = l.key, p = l.prefix, y = l.unitless, h = l.ignore, x = l.token, T = l.scope, R = T === void 0 ? "" : T, O = zs(_1), _ = O.cache.instanceId, N = O.container, L = x._tokenKey, z = [].concat(Tr(l.path), [f, R, L]), H = HE(L6, z, function() {
    var A = u(), q = y6(A, f, {
      prefix: p,
      unitless: y,
      ignore: h,
      scope: R
    }), V = _e(q, 2), U = V[0], I = V[1], W = N6(z, I);
    return [U, I, W, f];
  }, function(A) {
    var q = _e(A, 3), V = q[2];
    Jb && Mh(V, {
      mark: Go
    });
  }, function(A) {
    var q = _e(A, 3), V = q[1], U = q[2];
    if (V) {
      var I = Hs(V, U, {
        mark: Go,
        prepend: "queue",
        attachTo: N,
        priority: -999
      });
      I[As] = _, I.setAttribute(ev, f);
    }
  });
  return H;
}, D7 = function(l, u, f) {
  var p = _e(l, 4), y = p[1], h = p[2], x = p[3], T = f || {}, R = T.plain;
  if (!y)
    return null;
  var O = -999, _ = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(O)
  }, N = o1(y, x, h, _, R);
  return [O, h, N];
}, Sh;
Sh = {}, tt(Sh, D6, O7), tt(Sh, S6, r7), tt(Sh, L6, D7);
var co = /* @__PURE__ */ function() {
  function i(l, u) {
    Xo(this, i), tt(this, "name", void 0), tt(this, "style", void 0), tt(this, "_keyframe", !0), this.name = l, this.style = u;
  }
  return qo(i, [{
    key: "getName",
    value: function() {
      var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return u ? "".concat(u, "-").concat(this.name) : this.name;
    }
  }]), i;
}();
function Bd(i) {
  return i.notSplit = !0, i;
}
Bd(["borderTop", "borderBottom"]), Bd(["borderTop"]), Bd(["borderBottom"]), Bd(["borderLeft", "borderRight"]), Bd(["borderLeft"]), Bd(["borderRight"]);
function L7(i) {
  return o5(i) || i5(i) || SE(i) || l5();
}
function oE(i, l) {
  for (var u = i, f = 0; f < l.length; f += 1) {
    if (u == null)
      return;
    u = u[l[f]];
  }
  return u;
}
function A6(i, l, u, f) {
  if (!l.length)
    return u;
  var p = L7(l), y = p[0], h = p.slice(1), x;
  return !i && typeof y == "number" ? x = [] : Array.isArray(i) ? x = Tr(i) : x = Re({}, i), f && u === void 0 && h.length === 1 ? delete x[y][h[0]] : x[y] = A6(x[y], h, u, f), x;
}
function wb(i, l, u) {
  var f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return l.length && f && u === void 0 && !oE(i, l.slice(0, -1)) ? i : A6(i, l, u, f);
}
function A7(i) {
  return cr(i) === "object" && i !== null && Object.getPrototypeOf(i) === Object.prototype;
}
function OR(i) {
  return Array.isArray(i) ? [] : {};
}
var z7 = typeof Reflect == "undefined" ? Object.keys : Reflect.ownKeys;
function P7() {
  for (var i = arguments.length, l = new Array(i), u = 0; u < i; u++)
    l[u] = arguments[u];
  var f = OR(l[0]);
  return l.forEach(function(p) {
    function y(h, x) {
      var T = new Set(x), R = oE(p, h), O = Array.isArray(R);
      if (O || A7(R)) {
        if (!T.has(R)) {
          T.add(R);
          var _ = oE(f, h);
          O ? f = wb(f, h, []) : (!_ || cr(_) !== "object") && (f = wb(f, h, OR(R))), z7(R).forEach(function(N) {
            y([].concat(Tr(h), [N]), T);
          });
        }
      } else
        f = wb(f, h, R);
    }
    y([]);
  }), f;
}
function z6() {
}
let ku = null;
function H7() {
  ku = null, u5();
}
let $E = z6;
process.env.NODE_ENV !== "production" && ($E = (i, l, u) => {
  ii(i, `[antd: ${l}] ${u}`), process.env.NODE_ENV === "test" && H7();
});
const P6 = /* @__PURE__ */ w.createContext({}), N1 = process.env.NODE_ENV !== "production" ? (i) => {
  const {
    strict: l
  } = w.useContext(P6), u = (f, p, y) => {
    if (!f)
      if (l === !1 && p === "deprecated") {
        const h = ku;
        ku || (ku = {}), ku[i] = ku[i] || [], ku[i].includes(y || "") || ku[i].push(y || ""), h || console.warn("[antd] There exists deprecated usage in your code:", ku);
      } else
        process.env.NODE_ENV !== "production" && $E(f, i, y);
  };
  return u.deprecated = (f, p, y, h) => {
    u(f, "deprecated", `\`${p}\` is deprecated. Please use \`${y}\` instead.${h ? ` ${h}` : ""}`);
  }, u;
} : () => {
  const i = () => {
  };
  return i.deprecated = z6, i;
}, D1 = $E, U7 = /* @__PURE__ */ s1(void 0);
var I7 = {
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
}, $7 = {
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
const F7 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, H6 = F7, j7 = {
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
  }, $7),
  timePickerLocale: Object.assign({}, H6)
}, NR = j7, $i = "${label} is not a valid ${type}", L1 = {
  locale: "en",
  Pagination: I7,
  DatePicker: NR,
  TimePicker: H6,
  Calendar: NR,
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
        string: $i,
        method: $i,
        array: $i,
        object: $i,
        number: $i,
        date: $i,
        boolean: $i,
        integer: $i,
        float: $i,
        regexp: $i,
        email: $i,
        url: $i,
        hex: $i
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
Object.assign({}, L1.Modal);
let Zy = [];
const DR = () => Zy.reduce((i, l) => Object.assign(Object.assign({}, i), l), L1.Modal);
function V7(i) {
  if (i) {
    const l = Object.assign({}, i);
    return Zy.push(l), DR(), () => {
      Zy = Zy.filter((u) => u !== l), DR();
    };
  }
  Object.assign({}, L1.Modal);
}
const B7 = /* @__PURE__ */ s1(void 0), U6 = B7, I6 = "internalMark", $6 = (i) => {
  const {
    locale: l = {},
    children: u,
    _ANT_MARK__: f
  } = i;
  if (process.env.NODE_ENV !== "production") {
    const y = N1("LocaleProvider");
    process.env.NODE_ENV !== "production" && y(f === I6, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  w.useEffect(() => V7(l && l.Modal), [l]);
  const p = w.useMemo(() => Object.assign(Object.assign({}, l), {
    exist: !0
  }), [l]);
  return /* @__PURE__ */ w.createElement(U6.Provider, {
    value: p
  }, u);
};
process.env.NODE_ENV !== "production" && ($6.displayName = "LocaleProvider");
const W7 = $6, K7 = (i) => {
  const {
    controlHeight: l
  } = i;
  return {
    controlHeightSM: l * 0.75,
    controlHeightXS: l * 0.5,
    controlHeightLG: l * 1.25
  };
};
function G7(i) {
  const {
    sizeUnit: l,
    sizeStep: u
  } = i;
  return {
    sizeXXL: l * (u + 8),
    // 48
    sizeXL: l * (u + 4),
    // 32
    sizeLG: l * (u + 2),
    // 24
    sizeMD: l * (u + 1),
    // 20
    sizeMS: l * u,
    // 16
    size: l * u,
    // 16
    sizeSM: l * (u - 1),
    // 12
    sizeXS: l * (u - 2),
    // 8
    sizeXXS: l * (u - 3)
    // 4
  };
}
const F6 = {
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
}, Y7 = Object.assign(Object.assign({}, F6), {
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
}), Ah = Y7;
function Q7(i, l) {
  let {
    generateColorPalettes: u,
    generateNeutralColorPalettes: f
  } = l;
  const {
    colorSuccess: p,
    colorWarning: y,
    colorError: h,
    colorInfo: x,
    colorPrimary: T,
    colorBgBase: R,
    colorTextBase: O
  } = i, _ = u(T), N = u(p), L = u(y), z = u(h), H = u(x), A = f(R, O), q = i.colorLink || i.colorInfo, V = u(q);
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
    colorInfoBg: H[1],
    colorInfoBgHover: H[2],
    colorInfoBorder: H[3],
    colorInfoBorderHover: H[4],
    colorInfoHover: H[4],
    colorInfo: H[6],
    colorInfoActive: H[7],
    colorInfoTextHover: H[8],
    colorInfoText: H[9],
    colorInfoTextActive: H[10],
    colorLinkHover: V[4],
    colorLink: V[6],
    colorLinkActive: V[7],
    colorBgMask: new ji("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const X7 = (i) => {
  let l = i, u = i, f = i, p = i;
  return i < 6 && i >= 5 ? l = i + 1 : i < 16 && i >= 6 ? l = i + 2 : i >= 16 && (l = 16), i < 7 && i >= 5 ? u = 4 : i < 8 && i >= 7 ? u = 5 : i < 14 && i >= 8 ? u = 6 : i < 16 && i >= 14 ? u = 7 : i >= 16 && (u = 8), i < 6 && i >= 2 ? f = 1 : i >= 6 && (f = 2), i > 4 && i < 8 ? p = 4 : i >= 8 && (p = 6), {
    borderRadius: i,
    borderRadiusXS: f,
    borderRadiusSM: u,
    borderRadiusLG: l,
    borderRadiusOuter: p
  };
};
function q7(i) {
  const {
    motionUnit: l,
    motionBase: u,
    borderRadius: f,
    lineWidth: p
  } = i;
  return Object.assign({
    // motion
    motionDurationFast: `${(u + l).toFixed(1)}s`,
    motionDurationMid: `${(u + l * 2).toFixed(1)}s`,
    motionDurationSlow: `${(u + l * 3).toFixed(1)}s`,
    // line
    lineWidthBold: p + 1
  }, X7(f));
}
const Ru = (i, l) => new ji(i).setAlpha(l).toRgbString(), Ch = (i, l) => new ji(i).darken(l).toHexString(), Z7 = (i) => {
  const l = Qc(i);
  return {
    1: l[0],
    2: l[1],
    3: l[2],
    4: l[3],
    5: l[4],
    6: l[5],
    7: l[6],
    8: l[4],
    9: l[5],
    10: l[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, J7 = (i, l) => {
  const u = i || "#fff", f = l || "#000";
  return {
    colorBgBase: u,
    colorTextBase: f,
    colorText: Ru(f, 0.88),
    colorTextSecondary: Ru(f, 0.65),
    colorTextTertiary: Ru(f, 0.45),
    colorTextQuaternary: Ru(f, 0.25),
    colorFill: Ru(f, 0.15),
    colorFillSecondary: Ru(f, 0.06),
    colorFillTertiary: Ru(f, 0.04),
    colorFillQuaternary: Ru(f, 0.02),
    colorBgLayout: Ch(u, 4),
    colorBgContainer: Ch(u, 0),
    colorBgElevated: Ch(u, 0),
    colorBgSpotlight: Ru(f, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Ch(u, 15),
    colorBorderSecondary: Ch(u, 6)
  };
};
function eA(i) {
  return (i + 8) / i;
}
function tA(i) {
  const l = new Array(10).fill(null).map((u, f) => {
    const p = f - 1, y = i * Math.pow(2.71828, p / 5), h = f > 1 ? Math.floor(y) : Math.ceil(y);
    return Math.floor(h / 2) * 2;
  });
  return l[1] = i, l.map((u) => ({
    size: u,
    lineHeight: eA(u)
  }));
}
const nA = (i) => {
  const l = tA(i), u = l.map((O) => O.size), f = l.map((O) => O.lineHeight), p = u[1], y = u[0], h = u[2], x = f[1], T = f[0], R = f[2];
  return {
    fontSizeSM: y,
    fontSize: p,
    fontSizeLG: h,
    fontSizeXL: u[3],
    fontSizeHeading1: u[6],
    fontSizeHeading2: u[5],
    fontSizeHeading3: u[4],
    fontSizeHeading4: u[3],
    fontSizeHeading5: u[2],
    lineHeight: x,
    lineHeightLG: R,
    lineHeightSM: T,
    fontHeight: Math.round(x * p),
    fontHeightLG: Math.round(R * h),
    fontHeightSM: Math.round(T * y),
    lineHeightHeading1: f[6],
    lineHeightHeading2: f[5],
    lineHeightHeading3: f[4],
    lineHeightHeading4: f[3],
    lineHeightHeading5: f[2]
  };
};
function rA(i) {
  const l = Object.keys(F6).map((u) => {
    const f = Qc(i[u]);
    return new Array(10).fill(1).reduce((p, y, h) => (p[`${u}-${h + 1}`] = f[h], p[`${u}${h + 1}`] = f[h], p), {});
  }).reduce((u, f) => (u = Object.assign(Object.assign({}, u), f), u), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, i), l), Q7(i, {
    generateColorPalettes: Z7,
    generateNeutralColorPalettes: J7
  })), nA(i.fontSize)), G7(i)), K7(i)), q7(i));
}
const j6 = Zb(rA), lE = {
  token: Ah,
  override: {
    override: Ah
  },
  hashed: !0
}, V6 = /* @__PURE__ */ _i.createContext(lE), B6 = "anticon", aA = (i, l) => l || (i ? `ant-${i}` : "ant"), qc = /* @__PURE__ */ w.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: aA,
  iconPrefixCls: B6
}), iA = `-ant-${Date.now()}-${Math.random()}`;
function oA(i, l) {
  const u = {}, f = (h, x) => {
    let T = h.clone();
    return T = (x == null ? void 0 : x(T)) || T, T.toRgbString();
  }, p = (h, x) => {
    const T = new ji(h), R = Qc(T.toRgbString());
    u[`${x}-color`] = f(T), u[`${x}-color-disabled`] = R[1], u[`${x}-color-hover`] = R[4], u[`${x}-color-active`] = R[6], u[`${x}-color-outline`] = T.clone().setAlpha(0.2).toRgbString(), u[`${x}-color-deprecated-bg`] = R[0], u[`${x}-color-deprecated-border`] = R[2];
  };
  if (l.primaryColor) {
    p(l.primaryColor, "primary");
    const h = new ji(l.primaryColor), x = Qc(h.toRgbString());
    x.forEach((R, O) => {
      u[`primary-${O + 1}`] = R;
    }), u["primary-color-deprecated-l-35"] = f(h, (R) => R.lighten(35)), u["primary-color-deprecated-l-20"] = f(h, (R) => R.lighten(20)), u["primary-color-deprecated-t-20"] = f(h, (R) => R.tint(20)), u["primary-color-deprecated-t-50"] = f(h, (R) => R.tint(50)), u["primary-color-deprecated-f-12"] = f(h, (R) => R.setAlpha(R.getAlpha() * 0.12));
    const T = new ji(x[0]);
    u["primary-color-active-deprecated-f-30"] = f(T, (R) => R.setAlpha(R.getAlpha() * 0.3)), u["primary-color-active-deprecated-d-02"] = f(T, (R) => R.darken(2));
  }
  return l.successColor && p(l.successColor, "success"), l.warningColor && p(l.warningColor, "warning"), l.errorColor && p(l.errorColor, "error"), l.infoColor && p(l.infoColor, "info"), `
  :root {
    ${Object.keys(u).map((h) => `--${i}-${h}: ${u[h]};`).join(`
`)}
  }
  `.trim();
}
function lA(i, l) {
  const u = oA(i, l);
  ai() ? Hs(u, `${iA}-dynamic-theme`) : process.env.NODE_ENV !== "production" && D1(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const uE = /* @__PURE__ */ w.createContext(!1), uA = (i) => {
  let {
    children: l,
    disabled: u
  } = i;
  const f = w.useContext(uE);
  return /* @__PURE__ */ w.createElement(uE.Provider, {
    value: u != null ? u : f
  }, l);
}, sA = uE, sE = /* @__PURE__ */ w.createContext(void 0), cA = (i) => {
  let {
    children: l,
    size: u
  } = i;
  const f = w.useContext(sE);
  return /* @__PURE__ */ w.createElement(sE.Provider, {
    value: u || f
  }, l);
}, FE = sE;
function fA() {
  const i = zs(sA), l = zs(FE);
  return {
    componentDisabled: i,
    componentSize: l
  };
}
const l1 = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], dA = "5.14.1";
function xb(i) {
  return i >= 0 && i <= 255;
}
function jy(i, l) {
  const {
    r: u,
    g: f,
    b: p,
    a: y
  } = new ji(i).toRgb();
  if (y < 1)
    return i;
  const {
    r: h,
    g: x,
    b: T
  } = new ji(l).toRgb();
  for (let R = 0.01; R <= 1; R += 0.01) {
    const O = Math.round((u - h * (1 - R)) / R), _ = Math.round((f - x * (1 - R)) / R), N = Math.round((p - T * (1 - R)) / R);
    if (xb(O) && xb(_) && xb(N))
      return new ji({
        r: O,
        g: _,
        b: N,
        a: Math.round(R * 100) / 100
      }).toRgbString();
  }
  return new ji({
    r: u,
    g: f,
    b: p,
    a: 1
  }).toRgbString();
}
var vA = function(i, l) {
  var u = {};
  for (var f in i)
    Object.prototype.hasOwnProperty.call(i, f) && l.indexOf(f) < 0 && (u[f] = i[f]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var p = 0, f = Object.getOwnPropertySymbols(i); p < f.length; p++)
      l.indexOf(f[p]) < 0 && Object.prototype.propertyIsEnumerable.call(i, f[p]) && (u[f[p]] = i[f[p]]);
  return u;
};
function W6(i) {
  const {
    override: l
  } = i, u = vA(i, ["override"]), f = Object.assign({}, l);
  Object.keys(Ah).forEach((N) => {
    delete f[N];
  });
  const p = Object.assign(Object.assign({}, u), f), y = 480, h = 576, x = 768, T = 992, R = 1200, O = 1600;
  if (p.motion === !1) {
    const N = "0s";
    p.motionDurationFast = N, p.motionDurationMid = N, p.motionDurationSlow = N;
  }
  return Object.assign(Object.assign(Object.assign({}, p), {
    // ============== Background ============== //
    colorFillContent: p.colorFillSecondary,
    colorFillContentHover: p.colorFill,
    colorFillAlter: p.colorFillQuaternary,
    colorBgContainerDisabled: p.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: p.colorBgContainer,
    colorSplit: jy(p.colorBorderSecondary, p.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: p.colorTextQuaternary,
    colorTextDisabled: p.colorTextQuaternary,
    colorTextHeading: p.colorText,
    colorTextLabel: p.colorTextSecondary,
    colorTextDescription: p.colorTextTertiary,
    colorTextLightSolid: p.colorWhite,
    colorHighlight: p.colorError,
    colorBgTextHover: p.colorFillSecondary,
    colorBgTextActive: p.colorFill,
    colorIcon: p.colorTextTertiary,
    colorIconHover: p.colorText,
    colorErrorOutline: jy(p.colorErrorBg, p.colorBgContainer),
    colorWarningOutline: jy(p.colorWarningBg, p.colorBgContainer),
    // Font
    fontSizeIcon: p.fontSizeSM,
    // Line
    lineWidthFocus: p.lineWidth * 4,
    // Control
    lineWidth: p.lineWidth,
    controlOutlineWidth: p.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: p.controlHeight / 2,
    controlItemBgHover: p.colorFillTertiary,
    controlItemBgActive: p.colorPrimaryBg,
    controlItemBgActiveHover: p.colorPrimaryBgHover,
    controlItemBgActiveDisabled: p.colorFill,
    controlTmpOutline: p.colorFillQuaternary,
    controlOutline: jy(p.colorPrimaryBg, p.colorBgContainer),
    lineType: p.lineType,
    borderRadius: p.borderRadius,
    borderRadiusXS: p.borderRadiusXS,
    borderRadiusSM: p.borderRadiusSM,
    borderRadiusLG: p.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: p.sizeXXS,
    paddingXS: p.sizeXS,
    paddingSM: p.sizeSM,
    padding: p.size,
    paddingMD: p.sizeMD,
    paddingLG: p.sizeLG,
    paddingXL: p.sizeXL,
    paddingContentHorizontalLG: p.sizeLG,
    paddingContentVerticalLG: p.sizeMS,
    paddingContentHorizontal: p.sizeMS,
    paddingContentVertical: p.sizeSM,
    paddingContentHorizontalSM: p.size,
    paddingContentVerticalSM: p.sizeXS,
    marginXXS: p.sizeXXS,
    marginXS: p.sizeXS,
    marginSM: p.sizeSM,
    margin: p.size,
    marginMD: p.sizeMD,
    marginLG: p.sizeLG,
    marginXL: p.sizeXL,
    marginXXL: p.sizeXXL,
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
    screenXS: y,
    screenXSMin: y,
    screenXSMax: h - 1,
    screenSM: h,
    screenSMMin: h,
    screenSMMax: x - 1,
    screenMD: x,
    screenMDMin: x,
    screenMDMax: T - 1,
    screenLG: T,
    screenLGMin: T,
    screenLGMax: R - 1,
    screenXL: R,
    screenXLMin: R,
    screenXLMax: O - 1,
    screenXXL: O,
    screenXXLMin: O,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new ji("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new ji("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new ji("rgba(0, 0, 0, 0.09)").toRgbString()}
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
  }), f);
}
var LR = function(i, l) {
  var u = {};
  for (var f in i)
    Object.prototype.hasOwnProperty.call(i, f) && l.indexOf(f) < 0 && (u[f] = i[f]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var p = 0, f = Object.getOwnPropertySymbols(i); p < f.length; p++)
      l.indexOf(f[p]) < 0 && Object.prototype.propertyIsEnumerable.call(i, f[p]) && (u[f[p]] = i[f[p]]);
  return u;
};
const K6 = {
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
}, G6 = {
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
}, pA = {
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
}, Y6 = (i, l, u) => {
  const f = u.getDerivativeToken(i), {
    override: p
  } = l, y = LR(l, ["override"]);
  let h = Object.assign(Object.assign({}, f), {
    override: p
  });
  return h = W6(h), y && Object.entries(y).forEach((x) => {
    let [T, R] = x;
    const {
      theme: O
    } = R, _ = LR(R, ["theme"]);
    let N = _;
    O && (N = Y6(Object.assign(Object.assign({}, h), _), {
      override: _
    }, O)), h[T] = N;
  }), h;
};
function Xc() {
  const {
    token: i,
    hashed: l,
    theme: u,
    override: f,
    cssVar: p
  } = _i.useContext(V6), y = `${dA}-${l || ""}`, h = u || j6, [x, T, R] = n7(h, [Ah, i], {
    salt: y,
    override: f,
    getComputedToken: Y6,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: W6,
    cssVar: p && {
      prefix: p.prefix,
      key: p.key,
      unitless: K6,
      ignore: G6,
      preserve: pA
    }
  });
  return [h, R, l ? T : "", x, p];
}
const hA = function(i) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: i.colorText,
    fontSize: i.fontSize,
    // font-variant: @font-variant-base;
    lineHeight: i.lineHeight,
    listStyle: "none",
    // font-feature-settings: @font-feature-settings-base;
    fontFamily: l ? "inherit" : i.fontFamily
  };
}, mA = () => ({
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
}), gA = (i) => ({
  a: {
    color: i.colorLink,
    textDecoration: i.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${i.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: i.colorLinkHover
    },
    "&:active": {
      color: i.colorLinkActive
    },
    "&:active,\n  &:hover": {
      textDecoration: i.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: i.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: i.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), yA = (i, l, u) => {
  const {
    fontFamily: f,
    fontSize: p
  } = i, y = `[class^="${l}"], [class*=" ${l}"]`;
  return {
    [u ? `.${u}` : y]: {
      fontFamily: f,
      fontSize: p,
      boxSizing: "border-box",
      "&::before, &::after": {
        boxSizing: "border-box"
      },
      [y]: {
        boxSizing: "border-box",
        "&::before, &::after": {
          boxSizing: "border-box"
        }
      }
    }
  };
};
let SA = /* @__PURE__ */ qo(function i() {
  Xo(this, i);
});
const Q6 = SA;
function CA(i, l, u) {
  return l = Ps(l), EE(i, g1() ? Reflect.construct(l, u || [], Ps(i).constructor) : l.apply(i, u));
}
let bA = /* @__PURE__ */ function(i) {
  nv(l, i);
  function l(u) {
    var f;
    return Xo(this, l), f = CA(this, l), f.result = 0, u instanceof l ? f.result = u.result : typeof u == "number" && (f.result = u), f;
  }
  return qo(l, [{
    key: "add",
    value: function(f) {
      return f instanceof l ? this.result += f.result : typeof f == "number" && (this.result += f), this;
    }
  }, {
    key: "sub",
    value: function(f) {
      return f instanceof l ? this.result -= f.result : typeof f == "number" && (this.result -= f), this;
    }
  }, {
    key: "mul",
    value: function(f) {
      return f instanceof l ? this.result *= f.result : typeof f == "number" && (this.result *= f), this;
    }
  }, {
    key: "div",
    value: function(f) {
      return f instanceof l ? this.result /= f.result : typeof f == "number" && (this.result /= f), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), l;
}(Q6);
function EA(i, l, u) {
  return l = Ps(l), EE(i, g1() ? Reflect.construct(l, u || [], Ps(i).constructor) : l.apply(i, u));
}
const X6 = "CALC_UNIT";
function Tb(i) {
  return typeof i == "number" ? `${i}${X6}` : i;
}
let wA = /* @__PURE__ */ function(i) {
  nv(l, i);
  function l(u) {
    var f;
    return Xo(this, l), f = EA(this, l), f.result = "", u instanceof l ? f.result = `(${u.result})` : typeof u == "number" ? f.result = Tb(u) : typeof u == "string" && (f.result = u), f;
  }
  return qo(l, [{
    key: "add",
    value: function(f) {
      return f instanceof l ? this.result = `${this.result} + ${f.getResult()}` : (typeof f == "number" || typeof f == "string") && (this.result = `${this.result} + ${Tb(f)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(f) {
      return f instanceof l ? this.result = `${this.result} - ${f.getResult()}` : (typeof f == "number" || typeof f == "string") && (this.result = `${this.result} - ${Tb(f)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(f) {
      return this.lowPriority && (this.result = `(${this.result})`), f instanceof l ? this.result = `${this.result} * ${f.getResult(!0)}` : (typeof f == "number" || typeof f == "string") && (this.result = `${this.result} * ${f}`), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(f) {
      return this.lowPriority && (this.result = `(${this.result})`), f instanceof l ? this.result = `${this.result} / ${f.getResult(!0)}` : (typeof f == "number" || typeof f == "string") && (this.result = `${this.result} / ${f}`), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(f) {
      return this.lowPriority || f ? `(${this.result})` : this.result;
    }
  }, {
    key: "equal",
    value: function(f) {
      const {
        unit: p = !0
      } = f || {}, y = new RegExp(`${X6}`, "g");
      return this.result = this.result.replace(y, p ? "px" : ""), typeof this.lowPriority != "undefined" ? `calc(${this.result})` : this.result;
    }
  }]), l;
}(Q6);
const xA = (i) => {
  const l = i === "css" ? wA : bA;
  return (u) => new l(u);
};
function TA(i) {
  return i === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var l = arguments.length, u = new Array(l), f = 0; f < l; f++)
        u[f] = arguments[f];
      return `max(${u.map((p) => Nh(p)).join(",")})`;
    },
    min: function() {
      for (var l = arguments.length, u = new Array(l), f = 0; f < l; f++)
        u[f] = arguments[f];
      return `min(${u.map((p) => Nh(p)).join(",")})`;
    }
  };
}
const q6 = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC != "undefined";
let cE = !0;
function A1() {
  for (var i = arguments.length, l = new Array(i), u = 0; u < i; u++)
    l[u] = arguments[u];
  if (!q6)
    return Object.assign.apply(Object, [{}].concat(l));
  cE = !1;
  const f = {};
  return l.forEach((p) => {
    Object.keys(p).forEach((h) => {
      Object.defineProperty(f, h, {
        configurable: !0,
        enumerable: !0,
        get: () => p[h]
      });
    });
  }), cE = !0, f;
}
const AR = {};
function RA() {
}
const kA = (i) => {
  let l, u = i, f = RA;
  return q6 && typeof Proxy != "undefined" && (l = /* @__PURE__ */ new Set(), u = new Proxy(i, {
    get(p, y) {
      return cE && l.add(y), p[y];
    }
  }), f = (p, y) => {
    var h;
    AR[p] = {
      global: Array.from(l),
      component: Object.assign(Object.assign({}, (h = AR[p]) === null || h === void 0 ? void 0 : h.component), y)
    };
  }), {
    token: u,
    keys: l,
    flush: f
  };
}, Z6 = (i, l) => {
  const [u, f] = Xc();
  return iE({
    theme: u,
    token: f,
    hashId: "",
    path: ["ant-design-icons", i],
    nonce: () => l == null ? void 0 : l.nonce
  }, () => [{
    [`.${i}`]: Object.assign(Object.assign({}, mA()), {
      [`.${i} .${i}-icon`]: {
        display: "block"
      }
    })
  }]);
}, J6 = (i, l, u) => {
  var f;
  return typeof u == "function" ? u(A1(l, (f = l[i]) !== null && f !== void 0 ? f : {})) : u != null ? u : {};
}, ek = (i, l, u, f) => {
  const p = Object.assign({}, l[i]);
  if (f != null && f.deprecatedTokens) {
    const {
      deprecatedTokens: h
    } = f;
    h.forEach((x) => {
      let [T, R] = x;
      var O;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && ii(!(p != null && p[T]), `Component Token \`${String(T)}\` of ${i} is deprecated. Please use \`${String(R)}\` instead.`), (p != null && p[T] || p != null && p[R]) && ((O = p[R]) !== null && O !== void 0 || (p[R] = p == null ? void 0 : p[T]));
    });
  }
  const y = Object.assign(Object.assign({}, u), p);
  return Object.keys(y).forEach((h) => {
    y[h] === l[h] && delete y[h];
  }), y;
}, _A = (i, l) => `${[l, i.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function MA(i, l, u) {
  let f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const p = Array.isArray(i) ? i : [i, i], [y] = p, h = p.join("-");
  return function(x) {
    let T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x;
    const [R, O, _, N, L] = Xc(), {
      getPrefixCls: z,
      iconPrefixCls: H,
      csp: A
    } = zs(qc), q = z(), V = L ? "css" : "js", U = xA(V), {
      max: I,
      min: W
    } = TA(V), re = {
      theme: R,
      token: N,
      hashId: _,
      nonce: () => A == null ? void 0 : A.nonce,
      clientOnly: f.clientOnly,
      // antd is always at top of styles
      order: f.order || -999
    };
    return iE(Object.assign(Object.assign({}, re), {
      clientOnly: !1,
      path: ["Shared", q]
    }), () => [{
      // Link
      "&": gA(N)
    }]), Z6(H, A), [iE(Object.assign(Object.assign({}, re), {
      path: [h, x, H]
    }), () => {
      if (f.injectStyle === !1)
        return [];
      const {
        token: se,
        flush: Te
      } = kA(N), le = J6(y, O, u), ge = `.${x}`, Ee = ek(y, O, le, {
        deprecatedTokens: f.deprecatedTokens
      });
      L && Object.keys(le).forEach((Ce) => {
        le[Ce] = `var(${g6(Ce, _A(y, L.prefix))})`;
      });
      const ne = A1(se, {
        componentCls: ge,
        prefixCls: x,
        iconCls: `.${H}`,
        antCls: `.${q}`,
        calc: U,
        max: I,
        min: W
      }, L ? le : Ee), fe = l(ne, {
        hashId: _,
        prefixCls: x,
        rootPrefixCls: q,
        iconPrefixCls: H
      });
      return Te(y, Ee), [f.resetStyle === !1 ? null : yA(ne, x, T), fe];
    }), _];
  };
}
const OA = (i, l, u) => {
  function f(R) {
    return `${i}${R.slice(0, 1).toUpperCase()}${R.slice(1)}`;
  }
  const {
    unitless: p = {},
    injectStyle: y = !0
  } = u != null ? u : {}, h = {
    [f("zIndexPopup")]: !0
  };
  Object.keys(p).forEach((R) => {
    h[f(R)] = p[R];
  });
  const x = (R) => {
    let {
      rootCls: O,
      cssVar: _
    } = R;
    const [, N] = Xc();
    return N7({
      path: [i],
      prefix: _.prefix,
      key: _ == null ? void 0 : _.key,
      unitless: Object.assign(Object.assign({}, K6), h),
      ignore: G6,
      token: N,
      scope: O
    }, () => {
      const L = J6(i, N, l), z = ek(i, N, L, {
        deprecatedTokens: u == null ? void 0 : u.deprecatedTokens
      });
      return Object.keys(L).forEach((H) => {
        z[f(H)] = z[H], delete z[H];
      }), z;
    }), null;
  };
  return (R) => {
    const [, , , , O] = Xc();
    return [(_) => y && O ? /* @__PURE__ */ _i.createElement(_i.Fragment, null, /* @__PURE__ */ _i.createElement(x, {
      rootCls: R,
      cssVar: O,
      component: i
    }), _) : _, O == null ? void 0 : O.key];
  };
}, NA = (i, l, u, f) => {
  const p = MA(i, l, u, f), y = OA(Array.isArray(i) ? i[0] : i, u, f);
  return function(h) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : h;
    const [, T] = p(h, x), [R, O] = y(x);
    return [R, T, O];
  };
};
function DA(i, l) {
  return l1.reduce((u, f) => {
    const p = i[`${f}1`], y = i[`${f}3`], h = i[`${f}6`], x = i[`${f}7`];
    return Object.assign(Object.assign({}, u), l(f, {
      lightColor: p,
      lightBorderColor: y,
      darkColor: h,
      textColor: x
    }));
  }, {});
}
const LA = Object.assign({}, w), {
  useId: zR
} = LA, AA = () => "", zA = typeof zR == "undefined" ? AA : zR;
function PA(i, l) {
  var u, f;
  const p = N1("ConfigProvider"), y = i || {}, h = y.inherit === !1 || !l ? Object.assign(Object.assign({}, lE), {
    hashed: (u = l == null ? void 0 : l.hashed) !== null && u !== void 0 ? u : lE.hashed,
    cssVar: l == null ? void 0 : l.cssVar
  }) : l, x = zA();
  if (process.env.NODE_ENV !== "production") {
    const T = y.cssVar || h.cssVar, R = !!(typeof y.cssVar == "object" && (!((f = y.cssVar) === null || f === void 0) && f.key) || x);
    process.env.NODE_ENV !== "production" && p(!T || R, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return v1(() => {
    var T, R;
    if (!i)
      return l;
    const O = Object.assign({}, h.components);
    Object.keys(i.components || {}).forEach((L) => {
      O[L] = Object.assign(Object.assign({}, O[L]), i.components[L]);
    });
    const _ = `css-var-${x.replace(/:/g, "")}`, N = ((T = y.cssVar) !== null && T !== void 0 ? T : h.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: "ant"
    }, typeof h.cssVar == "object" ? h.cssVar : {}), typeof y.cssVar == "object" ? y.cssVar : {}), {
      key: typeof y.cssVar == "object" && ((R = y.cssVar) === null || R === void 0 ? void 0 : R.key) || _
    });
    return Object.assign(Object.assign(Object.assign({}, h), y), {
      token: Object.assign(Object.assign({}, h.token), y.token),
      components: O,
      cssVar: N
    });
  }, [y, h], (T, R) => T.some((O, _) => {
    const N = R[_];
    return !wE(O, N, !0);
  }));
}
function HA(i) {
  const {
    children: l
  } = i, [, u] = Xc(), {
    motion: f
  } = u, p = w.useRef(!1);
  return p.current = p.current || f === !1, p.current ? /* @__PURE__ */ w.createElement(e9, {
    motion: f
  }, l) : l;
}
const tk = /* @__PURE__ */ w.memo((i) => {
  let {
    dropdownMatchSelectWidth: l
  } = i;
  return N1("ConfigProvider").deprecated(l === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (tk.displayName = "PropWarning");
const UA = process.env.NODE_ENV !== "production" ? tk : () => null;
var IA = function(i, l) {
  var u = {};
  for (var f in i)
    Object.prototype.hasOwnProperty.call(i, f) && l.indexOf(f) < 0 && (u[f] = i[f]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var p = 0, f = Object.getOwnPropertySymbols(i); p < f.length; p++)
      l.indexOf(f[p]) < 0 && Object.prototype.propertyIsEnumerable.call(i, f[p]) && (u[f[p]] = i[f[p]]);
  return u;
};
let fE = !1;
process.env.NODE_ENV;
const $A = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], FA = "ant";
let nk;
function jA() {
  return nk || FA;
}
function VA(i) {
  return Object.keys(i).some((l) => l.endsWith("Color"));
}
const BA = (i) => {
  const {
    prefixCls: l,
    iconPrefixCls: u,
    theme: f,
    holderRender: p
  } = i;
  l !== void 0 && (nk = l), f && VA(f) && (process.env.NODE_ENV !== "production" && D1(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), lA(jA(), f));
}, WA = (i) => {
  const {
    children: l,
    csp: u,
    autoInsertSpaceInButton: f,
    alert: p,
    anchor: y,
    form: h,
    locale: x,
    componentSize: T,
    direction: R,
    space: O,
    virtual: _,
    dropdownMatchSelectWidth: N,
    popupMatchSelectWidth: L,
    popupOverflow: z,
    legacyLocale: H,
    parentContext: A,
    iconPrefixCls: q,
    theme: V,
    componentDisabled: U,
    segmented: I,
    statistic: W,
    spin: re,
    calendar: G,
    carousel: se,
    cascader: Te,
    collapse: le,
    typography: ge,
    checkbox: Ee,
    descriptions: ne,
    divider: fe,
    drawer: Ce,
    skeleton: we,
    steps: Ne,
    image: ee,
    layout: de,
    list: ae,
    mentions: ze,
    modal: De,
    progress: ft,
    result: dt,
    slider: At,
    breadcrumb: it,
    menu: Rt,
    pagination: st,
    input: Mt,
    empty: Gt,
    badge: Ze,
    radio: Ft,
    rate: Ot,
    switch: Se,
    transfer: Et,
    avatar: Ct,
    message: kt,
    tag: Wt,
    table: Qe,
    card: wt,
    tabs: vt,
    timeline: ln,
    timePicker: Je,
    upload: Xt,
    notification: qt,
    tree: It,
    colorPicker: kn,
    datePicker: _n,
    rangePicker: cn,
    flex: fn,
    wave: he,
    dropdown: Ue,
    warning: We,
    tour: zt
  } = i, Pt = w.useCallback((jt, Le) => {
    const {
      prefixCls: Ye
    } = i;
    if (Le)
      return Le;
    const Ut = Ye || A.getPrefixCls("");
    return jt ? `${Ut}-${jt}` : Ut;
  }, [A.getPrefixCls, i.prefixCls]), pt = q || A.iconPrefixCls || B6, ht = u || A.csp;
  Z6(pt, ht);
  const Mn = PA(V, A.theme);
  process.env.NODE_ENV !== "production" && (fE = fE || !!Mn);
  const Ht = {
    csp: ht,
    autoInsertSpaceInButton: f,
    alert: p,
    anchor: y,
    locale: x || H,
    direction: R,
    space: O,
    virtual: _,
    popupMatchSelectWidth: L != null ? L : N,
    popupOverflow: z,
    getPrefixCls: Pt,
    iconPrefixCls: pt,
    theme: Mn,
    segmented: I,
    statistic: W,
    spin: re,
    calendar: G,
    carousel: se,
    cascader: Te,
    collapse: le,
    typography: ge,
    checkbox: Ee,
    descriptions: ne,
    divider: fe,
    drawer: Ce,
    skeleton: we,
    steps: Ne,
    image: ee,
    input: Mt,
    layout: de,
    list: ae,
    mentions: ze,
    modal: De,
    progress: ft,
    result: dt,
    slider: At,
    breadcrumb: it,
    menu: Rt,
    pagination: st,
    empty: Gt,
    badge: Ze,
    radio: Ft,
    rate: Ot,
    switch: Se,
    transfer: Et,
    avatar: Ct,
    message: kt,
    tag: Wt,
    table: Qe,
    card: wt,
    tabs: vt,
    timeline: ln,
    timePicker: Je,
    upload: Xt,
    notification: qt,
    tree: It,
    colorPicker: kn,
    datePicker: _n,
    rangePicker: cn,
    flex: fn,
    wave: he,
    dropdown: Ue,
    warning: We,
    tour: zt
  }, Zt = Object.assign({}, A);
  Object.keys(Ht).forEach((jt) => {
    Ht[jt] !== void 0 && (Zt[jt] = Ht[jt]);
  }), $A.forEach((jt) => {
    const Le = i[jt];
    Le && (Zt[jt] = Le);
  });
  const $t = v1(() => Zt, Zt, (jt, Le) => {
    const Ye = Object.keys(jt), Ut = Object.keys(Le);
    return Ye.length !== Ut.length || Ye.some((En) => jt[En] !== Le[En]);
  }), tn = w.useMemo(() => ({
    prefixCls: pt,
    csp: ht
  }), [pt, ht]);
  let Kt = /* @__PURE__ */ w.createElement(w.Fragment, null, /* @__PURE__ */ w.createElement(UA, {
    dropdownMatchSelectWidth: N
  }), l);
  const Jt = w.useMemo(() => {
    var jt, Le, Ye, Ut;
    return P7(((jt = L1.Form) === null || jt === void 0 ? void 0 : jt.defaultValidateMessages) || {}, ((Ye = (Le = $t.locale) === null || Le === void 0 ? void 0 : Le.Form) === null || Ye === void 0 ? void 0 : Ye.defaultValidateMessages) || {}, ((Ut = $t.form) === null || Ut === void 0 ? void 0 : Ut.validateMessages) || {}, (h == null ? void 0 : h.validateMessages) || {});
  }, [$t, h == null ? void 0 : h.validateMessages]);
  Object.keys(Jt).length > 0 && (Kt = /* @__PURE__ */ w.createElement(U7.Provider, {
    value: Jt
  }, Kt)), x && (Kt = /* @__PURE__ */ w.createElement(W7, {
    locale: x,
    _ANT_MARK__: I6
  }, Kt)), (pt || ht) && (Kt = /* @__PURE__ */ w.createElement(LE.Provider, {
    value: tn
  }, Kt)), T && (Kt = /* @__PURE__ */ w.createElement(cA, {
    size: T
  }, Kt)), Kt = /* @__PURE__ */ w.createElement(HA, null, Kt);
  const xt = w.useMemo(() => {
    const jt = Mn || {}, {
      algorithm: Le,
      token: Ye,
      components: Ut,
      cssVar: En
    } = jt, nr = IA(jt, ["algorithm", "token", "components", "cssVar"]), On = Le && (!Array.isArray(Le) || Le.length > 0) ? Zb(Le) : j6, Qr = {};
    Object.entries(Ut || {}).forEach((ar) => {
      let [yr, Ca] = ar;
      const Ln = Object.assign({}, Ca);
      "algorithm" in Ln && (Ln.algorithm === !0 ? Ln.theme = On : (Array.isArray(Ln.algorithm) || typeof Ln.algorithm == "function") && (Ln.theme = Zb(Ln.algorithm)), delete Ln.algorithm), Qr[yr] = Ln;
    });
    const rr = Object.assign(Object.assign({}, Ah), Ye);
    return Object.assign(Object.assign({}, nr), {
      theme: On,
      token: rr,
      components: Qr,
      override: Object.assign({
        override: rr
      }, Qr),
      cssVar: En
    });
  }, [Mn]);
  return V && (Kt = /* @__PURE__ */ w.createElement(V6.Provider, {
    value: xt
  }, Kt)), $t.warning && (Kt = /* @__PURE__ */ w.createElement(P6.Provider, {
    value: $t.warning
  }, Kt)), U !== void 0 && (Kt = /* @__PURE__ */ w.createElement(uA, {
    disabled: U
  }, Kt)), /* @__PURE__ */ w.createElement(qc.Provider, {
    value: $t
  }, Kt);
}, iv = (i) => {
  const l = w.useContext(qc), u = w.useContext(U6);
  return /* @__PURE__ */ w.createElement(WA, Object.assign({
    parentContext: l,
    legacyLocale: u
  }, i));
};
iv.ConfigContext = qc;
iv.SizeContext = FE;
iv.config = BA;
iv.useConfig = fA;
Object.defineProperty(iv, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && D1(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), FE)
});
process.env.NODE_ENV !== "production" && (iv.displayName = "ConfigProvider");
const KA = /* @__PURE__ */ w.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});
var GA = function(i, l) {
  var u = {};
  for (var f in i)
    Object.prototype.hasOwnProperty.call(i, f) && l.indexOf(f) < 0 && (u[f] = i[f]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var p = 0, f = Object.getOwnPropertySymbols(i); p < f.length; p++)
      l.indexOf(f[p]) < 0 && Object.prototype.propertyIsEnumerable.call(i, f[p]) && (u[f[p]] = i[f[p]]);
  return u;
};
const PR = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, rk = /* @__PURE__ */ w.createContext({}), YA = /* @__PURE__ */ (() => {
  let i = 0;
  return function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return i += 1, `${l}${i}`;
  };
})(), QA = /* @__PURE__ */ w.forwardRef((i, l) => {
  const {
    prefixCls: u,
    className: f,
    trigger: p,
    children: y,
    defaultCollapsed: h = !1,
    theme: x = "dark",
    style: T = {},
    collapsible: R = !1,
    reverseArrow: O = !1,
    width: _ = 200,
    collapsedWidth: N = 80,
    zeroWidthTriggerStyle: L,
    breakpoint: z,
    onCollapse: H,
    onBreakpoint: A
  } = i, q = GA(i, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), {
    siderHook: V
  } = zs(KA), [U, I] = Al("collapsed" in i ? i.collapsed : h), [W, re] = Al(!1);
  Ll(() => {
    "collapsed" in i && I(i.collapsed);
  }, [i.collapsed]);
  const G = (ne, fe) => {
    "collapsed" in i || I(ne), H == null || H(ne, fe);
  }, se = ki();
  se.current = (ne) => {
    re(ne.matches), A == null || A(ne.matches), U !== ne.matches && G(ne.matches, "responsive");
  }, Ll(() => {
    function ne(Ce) {
      return se.current(Ce);
    }
    let fe;
    if (typeof window != "undefined") {
      const {
        matchMedia: Ce
      } = window;
      if (Ce && z && z in PR) {
        fe = Ce(`screen and (max-width: ${PR[z]})`);
        try {
          fe.addEventListener("change", ne);
        } catch (we) {
          fe.addListener(ne);
        }
        ne(fe);
      }
    }
    return () => {
      try {
        fe == null || fe.removeEventListener("change", ne);
      } catch (Ce) {
        fe == null || fe.removeListener(ne);
      }
    };
  }, [z]), Ll(() => {
    const ne = YA("ant-sider-");
    return V.addSider(ne), () => V.removeSider(ne);
  }, []);
  const Te = () => {
    G(!U, "clickTrigger");
  }, {
    getPrefixCls: le
  } = zs(qc), ge = () => {
    const ne = le("layout-sider", u), fe = b1(q, ["collapsed"]), Ce = U ? N : _, we = wL(Ce) ? `${Ce}px` : String(Ce), Ne = parseFloat(String(N || 0)) === 0 ? /* @__PURE__ */ w.createElement("span", {
      onClick: Te,
      className: Fn(`${ne}-zero-width-trigger`, `${ne}-zero-width-trigger-${O ? "right" : "left"}`),
      style: L
    }, p || /* @__PURE__ */ w.createElement(yL, null)) : null, ae = {
      expanded: O ? /* @__PURE__ */ w.createElement(ER, null) : /* @__PURE__ */ w.createElement(bR, null),
      collapsed: O ? /* @__PURE__ */ w.createElement(bR, null) : /* @__PURE__ */ w.createElement(ER, null)
    }[U ? "collapsed" : "expanded"], ze = p !== null ? Ne || /* @__PURE__ */ w.createElement("div", {
      className: `${ne}-trigger`,
      onClick: Te,
      style: {
        width: we
      }
    }, p || ae) : null, De = Object.assign(Object.assign({}, T), {
      flex: `0 0 ${we}`,
      maxWidth: we,
      minWidth: we,
      width: we
    }), ft = Fn(ne, `${ne}-${x}`, {
      [`${ne}-collapsed`]: !!U,
      [`${ne}-has-trigger`]: R && p !== null && !Ne,
      [`${ne}-below`]: !!W,
      [`${ne}-zero-width`]: parseFloat(we) === 0
    }, f);
    return /* @__PURE__ */ w.createElement("aside", Object.assign({
      className: ft
    }, fe, {
      style: De,
      ref: l
    }), /* @__PURE__ */ w.createElement("div", {
      className: `${ne}-children`
    }, y), R || W && Ne ? ze : null);
  }, Ee = w.useMemo(() => ({
    siderCollapsed: U
  }), [U]);
  return /* @__PURE__ */ w.createElement(rk.Provider, {
    value: Ee
  }, ge());
});
process.env.NODE_ENV !== "production" && (QA.displayName = "Sider");
function ak(i) {
  var l = i.children, u = i.prefixCls, f = i.id, p = i.overlayInnerStyle, y = i.className, h = i.style;
  return /* @__PURE__ */ w.createElement("div", {
    className: Fn("".concat(u, "-content"), y),
    style: h
  }, /* @__PURE__ */ w.createElement("div", {
    className: "".concat(u, "-inner"),
    id: f,
    role: "tooltip",
    style: p
  }, typeof l == "function" ? l() : l));
}
var Wd = {
  shiftX: 64,
  adjustY: 1
}, Kd = {
  adjustX: 1,
  shiftY: !0
}, lo = [0, 0], XA = {
  left: {
    points: ["cr", "cl"],
    overflow: Kd,
    offset: [-4, 0],
    targetOffset: lo
  },
  right: {
    points: ["cl", "cr"],
    overflow: Kd,
    offset: [4, 0],
    targetOffset: lo
  },
  top: {
    points: ["bc", "tc"],
    overflow: Wd,
    offset: [0, -4],
    targetOffset: lo
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: Wd,
    offset: [0, 4],
    targetOffset: lo
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: Wd,
    offset: [0, -4],
    targetOffset: lo
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Kd,
    offset: [-4, 0],
    targetOffset: lo
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Wd,
    offset: [0, -4],
    targetOffset: lo
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Kd,
    offset: [4, 0],
    targetOffset: lo
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Wd,
    offset: [0, 4],
    targetOffset: lo
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Kd,
    offset: [4, 0],
    targetOffset: lo
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Wd,
    offset: [0, 4],
    targetOffset: lo
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Kd,
    offset: [-4, 0],
    targetOffset: lo
  }
}, qA = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], ZA = function(l, u) {
  var f = l.overlayClassName, p = l.trigger, y = p === void 0 ? ["hover"] : p, h = l.mouseEnterDelay, x = h === void 0 ? 0 : h, T = l.mouseLeaveDelay, R = T === void 0 ? 0.1 : T, O = l.overlayStyle, _ = l.prefixCls, N = _ === void 0 ? "rc-tooltip" : _, L = l.children, z = l.onVisibleChange, H = l.afterVisibleChange, A = l.transitionName, q = l.animation, V = l.motion, U = l.placement, I = U === void 0 ? "right" : U, W = l.align, re = W === void 0 ? {} : W, G = l.destroyTooltipOnHide, se = G === void 0 ? !1 : G, Te = l.defaultVisible, le = l.getTooltipContainer, ge = l.overlayInnerStyle;
  l.arrowContent;
  var Ee = l.overlay, ne = l.id, fe = l.showArrow, Ce = fe === void 0 ? !0 : fe, we = tr(l, qA), Ne = ki(null);
  ZR(u, function() {
    return Ne.current;
  });
  var ee = Re({}, we);
  "visible" in l && (ee.popupVisible = l.visible);
  var de = function() {
    return /* @__PURE__ */ w.createElement(ak, {
      key: "content",
      prefixCls: N,
      id: ne,
      overlayInnerStyle: ge
    }, Ee);
  };
  return /* @__PURE__ */ w.createElement(n6, bn({
    popupClassName: f,
    prefixCls: N,
    popup: de,
    action: y,
    builtinPlacements: XA,
    popupPlacement: I,
    ref: Ne,
    popupAlign: re,
    getPopupContainer: le,
    onPopupVisibleChange: z,
    afterPopupVisibleChange: H,
    popupTransitionName: A,
    popupAnimation: q,
    popupMotion: V,
    defaultPopupVisible: Te,
    autoDestroy: se,
    mouseLeaveDelay: R,
    popupStyle: O,
    mouseEnterDelay: x,
    arrow: Ce
  }, ee), L);
};
const JA = /* @__PURE__ */ q8(ZA), ik = /* @__PURE__ */ _i.createContext(void 0);
process.env.NODE_ENV !== "production" && (ik.displayName = "zIndexContext");
const ok = ik, Bc = 100, ez = 10, tz = Bc * ez, lk = {
  Modal: Bc,
  Drawer: Bc,
  Popover: Bc,
  Popconfirm: Bc,
  Tooltip: Bc,
  Tour: Bc
}, nz = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function rz(i) {
  return i in lk;
}
function az(i, l) {
  const [, u] = Xc(), f = _i.useContext(ok), p = rz(i);
  if (l !== void 0)
    return [l, l];
  let y = f != null ? f : 0;
  return p ? (y += // Use preset token zIndex by default but not stack when has parent container
  (f ? 0 : u.zIndexPopupBase) + // Container offset
  lk[i], y = Math.min(y, u.zIndexPopupBase + tz)) : y += nz[i], [f === void 0 ? l : y, y];
}
const iz = (i, l, u) => u !== void 0 ? u : `${i}-${l}`;
function oz(i) {
  const {
    sizePopupArrow: l,
    borderRadiusXS: u,
    borderRadiusOuter: f
  } = i, p = l / 2, y = 0, h = p, x = f * 1 / Math.sqrt(2), T = p - f * (1 - 1 / Math.sqrt(2)), R = p - u * (1 / Math.sqrt(2)), O = f * (Math.sqrt(2) - 1) + u * (1 / Math.sqrt(2)), _ = 2 * p - R, N = O, L = 2 * p - x, z = T, H = 2 * p - y, A = h, q = p * Math.sqrt(2) + f * (Math.sqrt(2) - 2), V = f * (Math.sqrt(2) - 1), U = `polygon(${V}px 100%, 50% ${V}px, ${2 * p - V}px 100%, ${V}px 100%)`, I = `path('M ${y} ${h} A ${f} ${f} 0 0 0 ${x} ${T} L ${R} ${O} A ${u} ${u} 0 0 1 ${_} ${N} L ${L} ${z} A ${f} ${f} 0 0 0 ${H} ${A} Z')`;
  return {
    arrowShadowWidth: q,
    arrowPath: I,
    arrowPolygon: U
  };
}
const lz = (i, l, u) => {
  const {
    sizePopupArrow: f,
    arrowPolygon: p,
    arrowPath: y,
    arrowShadowWidth: h,
    borderRadiusXS: x,
    calc: T
  } = i;
  return {
    pointerEvents: "none",
    width: f,
    height: f,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: f,
      height: T(f).div(2).equal(),
      background: l,
      clipPath: {
        _multi_value_: !0,
        value: [p, y]
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
        value: `0 0 ${Nh(x)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: u,
      zIndex: 0,
      background: "transparent"
    }
  };
}, uk = 8;
function sk(i) {
  const {
    contentRadius: l,
    limitVerticalRadius: u
  } = i, f = l > 12 ? l + 2 : 12;
  return {
    arrowOffsetHorizontal: f,
    arrowOffsetVertical: u ? uk : f
  };
}
function Vy(i, l) {
  return i ? l : {};
}
function uz(i, l, u) {
  const {
    componentCls: f,
    boxShadowPopoverArrow: p,
    arrowOffsetVertical: y,
    arrowOffsetHorizontal: h
  } = i, {
    arrowDistance: x = 0,
    arrowPlacement: T = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = u || {};
  return {
    [f]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${f}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, lz(i, l, p)), {
        "&:before": {
          background: l
        }
      })]
    }, Vy(!!T.top, {
      [[`&-placement-top > ${f}-arrow`, `&-placement-topLeft > ${f}-arrow`, `&-placement-topRight > ${f}-arrow`].join(",")]: {
        bottom: x,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${f}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      [`&-placement-topLeft > ${f}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: h
        }
      },
      [`&-placement-topRight > ${f}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: h
        }
      }
    })), Vy(!!T.bottom, {
      [[`&-placement-bottom > ${f}-arrow`, `&-placement-bottomLeft > ${f}-arrow`, `&-placement-bottomRight > ${f}-arrow`].join(",")]: {
        top: x,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${f}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      [`&-placement-bottomLeft > ${f}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: h
        }
      },
      [`&-placement-bottomRight > ${f}-arrow`]: {
        right: {
          _skip_check_: !0,
          value: h
        }
      }
    })), Vy(!!T.left, {
      [[`&-placement-left > ${f}-arrow`, `&-placement-leftTop > ${f}-arrow`, `&-placement-leftBottom > ${f}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: x
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${f}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${f}-arrow`]: {
        top: y
      },
      [`&-placement-leftBottom > ${f}-arrow`]: {
        bottom: y
      }
    })), Vy(!!T.right, {
      [[`&-placement-right > ${f}-arrow`, `&-placement-rightTop > ${f}-arrow`, `&-placement-rightBottom > ${f}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: x
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${f}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${f}-arrow`]: {
        top: y
      },
      [`&-placement-rightBottom > ${f}-arrow`]: {
        bottom: y
      }
    }))
  };
}
function sz(i, l, u, f) {
  if (f === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const p = f && typeof f == "object" ? f : {}, y = {};
  switch (i) {
    case "top":
    case "bottom":
      y.shiftX = l.arrowOffsetHorizontal * 2 + u, y.shiftY = !0, y.adjustY = !0;
      break;
    case "left":
    case "right":
      y.shiftY = l.arrowOffsetVertical * 2 + u, y.shiftX = !0, y.adjustX = !0;
      break;
  }
  const h = Object.assign(Object.assign({}, y), p);
  return h.shiftX || (h.adjustX = !0), h.shiftY || (h.adjustY = !0), h;
}
const HR = {
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
}, cz = {
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
}, fz = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function dz(i) {
  const {
    arrowWidth: l,
    autoAdjustOverflow: u,
    arrowPointAtCenter: f,
    offset: p,
    borderRadius: y,
    visibleFirst: h
  } = i, x = l / 2, T = {};
  return Object.keys(HR).forEach((R) => {
    const O = f && cz[R] || HR[R], _ = Object.assign(Object.assign({}, O), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (T[R] = _, fz.has(R) && (_.autoArrow = !1), R) {
      case "top":
      case "topLeft":
      case "topRight":
        _.offset[1] = -x - p;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        _.offset[1] = x + p;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        _.offset[0] = -x - p;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        _.offset[0] = x + p;
        break;
    }
    const N = sk({
      contentRadius: y,
      limitVerticalRadius: !0
    });
    if (f)
      switch (R) {
        case "topLeft":
        case "bottomLeft":
          _.offset[0] = -N.arrowOffsetHorizontal - x;
          break;
        case "topRight":
        case "bottomRight":
          _.offset[0] = N.arrowOffsetHorizontal + x;
          break;
        case "leftTop":
        case "rightTop":
          _.offset[1] = -N.arrowOffsetHorizontal - x;
          break;
        case "leftBottom":
        case "rightBottom":
          _.offset[1] = N.arrowOffsetHorizontal + x;
          break;
      }
    _.overflow = sz(R, N, l, u), h && (_.htmlRegion = "visibleFirst");
  }), T;
}
const {
  isValidElement: zh
} = w;
function vz(i) {
  return i && zh(i) && i.type === w.Fragment;
}
function pz(i, l, u) {
  return zh(i) ? /* @__PURE__ */ w.cloneElement(i, typeof u == "function" ? u(i.props || {}) : u) : l;
}
function ck(i, l) {
  return pz(i, i, l);
}
const hz = /* @__PURE__ */ w.createContext(null), mz = (i) => {
  let {
    children: l
  } = i;
  return /* @__PURE__ */ w.createElement(hz.Provider, {
    value: null
  }, l);
}, gz = (i) => ({
  animationDuration: i,
  animationFillMode: "both"
}), yz = (i) => ({
  animationDuration: i,
  animationFillMode: "both"
}), Sz = function(i, l, u, f) {
  const y = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${y}${i}-enter,
      ${y}${i}-appear
    `]: Object.assign(Object.assign({}, gz(f)), {
      animationPlayState: "paused"
    }),
    [`${y}${i}-leave`]: Object.assign(Object.assign({}, yz(f)), {
      animationPlayState: "paused"
    }),
    [`
      ${y}${i}-enter${i}-enter-active,
      ${y}${i}-appear${i}-appear-active
    `]: {
      animationName: l,
      animationPlayState: "running"
    },
    [`${y}${i}-leave${i}-leave-active`]: {
      animationName: u,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, Cz = new co("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), bz = new co("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), UR = new co("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), IR = new co("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), Ez = new co("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), wz = new co("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), xz = new co("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), Tz = new co("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), Rz = new co("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), kz = new co("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), _z = new co("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), Mz = new co("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Oz = {
  zoom: {
    inKeyframes: Cz,
    outKeyframes: bz
  },
  "zoom-big": {
    inKeyframes: UR,
    outKeyframes: IR
  },
  "zoom-big-fast": {
    inKeyframes: UR,
    outKeyframes: IR
  },
  "zoom-left": {
    inKeyframes: xz,
    outKeyframes: Tz
  },
  "zoom-right": {
    inKeyframes: Rz,
    outKeyframes: kz
  },
  "zoom-up": {
    inKeyframes: Ez,
    outKeyframes: wz
  },
  "zoom-down": {
    inKeyframes: _z,
    outKeyframes: Mz
  }
}, Nz = (i, l) => {
  const {
    antCls: u
  } = i, f = `${u}-${l}`, {
    inKeyframes: p,
    outKeyframes: y
  } = Oz[l];
  return [Sz(f, p, y, l === "zoom-big-fast" ? i.motionDurationFast : i.motionDurationMid), {
    [`
        ${f}-enter,
        ${f}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: i.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${f}-leave`]: {
      animationTimingFunction: i.motionEaseInOutCirc
    }
  }];
}, Dz = (i) => {
  const {
    componentCls: l,
    // ant-tooltip
    tooltipMaxWidth: u,
    tooltipColor: f,
    tooltipBg: p,
    tooltipBorderRadius: y,
    zIndexPopup: h,
    controlHeight: x,
    boxShadowSecondary: T,
    paddingSM: R,
    paddingXS: O
  } = i;
  return [
    {
      [l]: Object.assign(Object.assign(Object.assign(Object.assign({}, hA(i)), {
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
        "--antd-arrow-background-color": p,
        // Wrapper for the tooltip content
        [`${l}-inner`]: {
          minWidth: x,
          minHeight: x,
          padding: `${Nh(i.calc(R).div(2).equal())} ${Nh(O)}`,
          color: f,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: p,
          borderRadius: y,
          boxShadow: T,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${l}-inner`]: {
            borderRadius: i.min(y, uk)
          }
        },
        [`${l}-content`]: {
          position: "relative"
        }
      }), DA(i, (_, N) => {
        let {
          darkColor: L
        } = N;
        return {
          [`&${l}-${_}`]: {
            [`${l}-inner`]: {
              backgroundColor: L
            },
            [`${l}-arrow`]: {
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
    uz(i, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${l}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: i.sizePopupArrow
      }
    }
  ];
}, Lz = (i) => Object.assign(Object.assign({
  zIndexPopup: i.zIndexPopupBase + 70
}, sk({
  contentRadius: i.borderRadius,
  limitVerticalRadius: !0
})), oz(A1(i, {
  borderRadiusOuter: Math.min(i.borderRadiusOuter, 4)
}))), fk = function(i) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return NA("Tooltip", (f) => {
    const {
      borderRadius: p,
      colorTextLightSolid: y,
      colorBgSpotlight: h
    } = f, x = A1(f, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: y,
      tooltipBorderRadius: p,
      tooltipBg: h
    });
    return [Dz(x), Nz(f, "zoom-big-fast")];
  }, Lz, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: l
  })(i);
}, Az = l1.map((i) => `${i}-inverse`);
function zz(i) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(Tr(Az), Tr(l1)).includes(i) : l1.includes(i);
}
function dk(i, l) {
  const u = zz(l), f = Fn({
    [`${i}-${l}`]: l && u
  }), p = {}, y = {};
  return l && !u && (p.background = l, y["--antd-arrow-background-color"] = l), {
    className: f,
    overlayStyle: p,
    arrowStyle: y
  };
}
const Pz = (i) => {
  const {
    prefixCls: l,
    className: u,
    placement: f = "top",
    title: p,
    color: y,
    overlayInnerStyle: h
  } = i, {
    getPrefixCls: x
  } = w.useContext(qc), T = x("tooltip", l), [R, O, _] = fk(T), N = dk(T, y), L = N.arrowStyle, z = Object.assign(Object.assign({}, h), N.overlayStyle), H = Fn(O, _, T, `${T}-pure`, `${T}-placement-${f}`, u, N.className);
  return R(/* @__PURE__ */ w.createElement("div", {
    className: H,
    style: L
  }, /* @__PURE__ */ w.createElement("div", {
    className: `${T}-arrow`
  }), /* @__PURE__ */ w.createElement(ak, Object.assign({}, i, {
    className: O,
    prefixCls: T,
    overlayInnerStyle: z
  }), p)));
}, Hz = Pz;
var Uz = function(i, l) {
  var u = {};
  for (var f in i)
    Object.prototype.hasOwnProperty.call(i, f) && l.indexOf(f) < 0 && (u[f] = i[f]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var p = 0, f = Object.getOwnPropertySymbols(i); p < f.length; p++)
      l.indexOf(f[p]) < 0 && Object.prototype.propertyIsEnumerable.call(i, f[p]) && (u[f[p]] = i[f[p]]);
  return u;
};
const jE = /* @__PURE__ */ w.forwardRef((i, l) => {
  var u, f;
  const {
    prefixCls: p,
    openClassName: y,
    getTooltipContainer: h,
    overlayClassName: x,
    color: T,
    overlayInnerStyle: R,
    children: O,
    afterOpenChange: _,
    afterVisibleChange: N,
    destroyTooltipOnHide: L,
    arrow: z = !0,
    title: H,
    overlay: A,
    builtinPlacements: q,
    arrowPointAtCenter: V = !1,
    autoAdjustOverflow: U = !0
  } = i, I = !!z, [, W] = Xc(), {
    getPopupContainer: re,
    getPrefixCls: G,
    direction: se
  } = w.useContext(qc), Te = N1("Tooltip"), le = w.useRef(null), ge = () => {
    var Je;
    (Je = le.current) === null || Je === void 0 || Je.forceAlign();
  };
  w.useImperativeHandle(l, () => ({
    forceAlign: ge,
    forcePopupAlign: () => {
      Te.deprecated(!1, "forcePopupAlign", "forceAlign"), ge();
    }
  })), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((Je) => {
    let [Xt, qt] = Je;
    Te.deprecated(!(Xt in i), Xt, qt);
  }), process.env.NODE_ENV !== "production" && Te(!L || typeof L == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && Te(!z || typeof z == "boolean" || !("arrowPointAtCenter" in z), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [Ee, ne] = wh(!1, {
    value: (u = i.open) !== null && u !== void 0 ? u : i.visible,
    defaultValue: (f = i.defaultOpen) !== null && f !== void 0 ? f : i.defaultVisible
  }), fe = !H && !A && H !== 0, Ce = (Je) => {
    var Xt, qt;
    ne(fe ? !1 : Je), fe || ((Xt = i.onOpenChange) === null || Xt === void 0 || Xt.call(i, Je), (qt = i.onVisibleChange) === null || qt === void 0 || qt.call(i, Je));
  }, we = w.useMemo(() => {
    var Je, Xt;
    let qt = V;
    return typeof z == "object" && (qt = (Xt = (Je = z.pointAtCenter) !== null && Je !== void 0 ? Je : z.arrowPointAtCenter) !== null && Xt !== void 0 ? Xt : V), q || dz({
      arrowPointAtCenter: qt,
      autoAdjustOverflow: U,
      arrowWidth: I ? W.sizePopupArrow : 0,
      borderRadius: W.borderRadius,
      offset: W.marginXXS,
      visibleFirst: !0
    });
  }, [V, z, q, W]), Ne = w.useMemo(() => H === 0 ? H : A || H || "", [A, H]), ee = /* @__PURE__ */ w.createElement(mz, null, typeof Ne == "function" ? Ne() : Ne), {
    getPopupContainer: de,
    placement: ae = "top",
    mouseEnterDelay: ze = 0.1,
    mouseLeaveDelay: De = 0.1,
    overlayStyle: ft,
    rootClassName: dt
  } = i, At = Uz(i, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), it = G("tooltip", p), Rt = G(), st = i["data-popover-inject"];
  let Mt = Ee;
  !("open" in i) && !("visible" in i) && fe && (Mt = !1);
  const Gt = zh(O) && !vz(O) ? O : /* @__PURE__ */ w.createElement("span", null, O), Ze = Gt.props, Ft = !Ze.className || typeof Ze.className == "string" ? Fn(Ze.className, y || `${it}-open`) : Ze.className, [Ot, Se, Et] = fk(it, !st), Ct = dk(it, T), kt = Ct.arrowStyle, Wt = Object.assign(Object.assign({}, R), Ct.overlayStyle), Qe = Fn(x, {
    [`${it}-rtl`]: se === "rtl"
  }, Ct.className, dt, Se, Et), [wt, vt] = az("Tooltip", At.zIndex), ln = /* @__PURE__ */ w.createElement(JA, Object.assign({}, At, {
    zIndex: wt,
    showArrow: I,
    placement: ae,
    mouseEnterDelay: ze,
    mouseLeaveDelay: De,
    prefixCls: it,
    overlayClassName: Qe,
    overlayStyle: Object.assign(Object.assign({}, kt), ft),
    getTooltipContainer: de || h || re,
    ref: le,
    builtinPlacements: we,
    overlay: ee,
    visible: Mt,
    onVisibleChange: Ce,
    afterVisibleChange: _ != null ? _ : N,
    overlayInnerStyle: Wt,
    arrowContent: /* @__PURE__ */ w.createElement("span", {
      className: `${it}-arrow-content`
    }),
    motion: {
      motionName: iz(Rt, "zoom-big-fast", i.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!L
  }), Mt ? ck(Gt, {
    className: Ft
  }) : Gt);
  return Ot(/* @__PURE__ */ w.createElement(ok.Provider, {
    value: vt
  }, ln));
});
process.env.NODE_ENV !== "production" && (jE.displayName = "Tooltip");
jE._InternalPanelDoNotUseOrYouWillBeFired = Hz;
const Iz = jE, $z = /* @__PURE__ */ s1({
  prefixCls: "",
  firstLevel: !0,
  inlineCollapsed: !1
}), Fz = $z, jz = (i) => {
  var l;
  const {
    className: u,
    children: f,
    icon: p,
    title: y,
    danger: h
  } = i, {
    prefixCls: x,
    firstLevel: T,
    direction: R,
    disableMenuItemTitleTooltip: O,
    inlineCollapsed: _
  } = w.useContext(Fz), N = (V) => {
    const U = /* @__PURE__ */ w.createElement("span", {
      className: `${x}-title-content`
    }, f);
    return (!p || zh(f) && f.type === "span") && f && V && T && typeof f == "string" ? /* @__PURE__ */ w.createElement("div", {
      className: `${x}-inline-collapsed-noicon`
    }, f.charAt(0)) : U;
  }, {
    siderCollapsed: L
  } = w.useContext(rk);
  let z = y;
  typeof y == "undefined" ? z = T ? f : "" : y === !1 && (z = "");
  const H = {
    title: z
  };
  !L && !_ && (H.title = null, H.open = !1);
  const A = kh(f).length;
  let q = /* @__PURE__ */ w.createElement(E1, Object.assign({}, b1(i, ["title", "icon", "danger"]), {
    className: Fn({
      [`${x}-item-danger`]: h,
      [`${x}-item-only-child`]: (p ? A + 1 : A) === 1
    }, u),
    title: typeof y == "string" ? y : void 0
  }), ck(p, {
    className: Fn(zh(p) ? (l = p.props) === null || l === void 0 ? void 0 : l.className : "", `${x}-item-icon`)
  }), N(_));
  return O || (q = /* @__PURE__ */ w.createElement(Iz, Object.assign({}, H, {
    placement: R === "rtl" ? "left" : "right",
    overlayClassName: `${x}-inline-collapsed-tooltip`
  }), q)), q;
}, QP = jz, VE = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(G8, ke({}, i)) }), XP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Y8, ke({}, i)) }), qP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Q8, ke({}, i)) });
function BE(i) {
  var l;
  return /* @__PURE__ */ Ri(Lu, { vertical: !0, className: "globalNavigation__icon " + ((l = i.className) != null ? l : ""), onClick: i.onClick, children: [
    i.icon,
    !i.hideLabel && /* @__PURE__ */ B("span", { className: "globalNavigation__iconLabel", children: i.label })
  ] });
}
function Vz(i) {
  return /* @__PURE__ */ Ri(Lu, { vertical: !0, className: "globalNavigation__suiteLogo", children: [
    /* @__PURE__ */ B(BE, { icon: i.icon, label: "", hideLabel: !0, className: "globalNavigation__icon--suiteLogo" }),
    i.label,
    /* @__PURE__ */ B("div", { className: "globalNavigation__divider" })
  ] });
}
const Bz = (i) => /* @__PURE__ */ w.createElement("svg", ke({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", id: "search-colorable" }, i), /* @__PURE__ */ w.createElement("path", { d: "M16.8004 10.2004C16.8004 9.33367 16.6297 8.47543 16.298 7.67468C15.9663 6.87393 15.4802 6.14635 14.8673 5.53349C14.2544 4.92062 13.5268 4.43447 12.7261 4.10279C11.9254 3.7711 11.0671 3.60039 10.2004 3.60039C9.33367 3.60039 8.47543 3.7711 7.67468 4.10279C6.87393 4.43447 6.14635 4.92062 5.53349 5.53349C4.92062 6.14635 4.43447 6.87393 4.10279 7.67468C3.7711 8.47543 3.60039 9.33367 3.60039 10.2004C3.60039 11.0671 3.7711 11.9254 4.10279 12.7261C4.43447 13.5268 4.92062 14.2544 5.53349 14.8673C6.14635 15.4802 6.87393 15.9663 7.67468 16.298C8.47543 16.6297 9.33367 16.8004 10.2004 16.8004C11.0671 16.8004 11.9254 16.6297 12.7261 16.298C13.5268 15.9663 14.2544 15.4802 14.8673 14.8673C15.4802 14.2544 15.9663 13.5268 16.298 12.7261C16.6297 11.9254 16.8004 11.0671 16.8004 10.2004ZM15.2741 16.1254C13.9129 17.2954 12.1391 18.0004 10.2004 18.0004C5.89164 18.0004 2.40039 14.5091 2.40039 10.2004C2.40039 5.89164 5.89164 2.40039 10.2004 2.40039C14.5091 2.40039 18.0004 5.89164 18.0004 10.2004C18.0004 12.1391 17.2954 13.9129 16.1254 15.2741L21.4241 20.5766C21.6566 20.8091 21.6566 21.1916 21.4241 21.4241C21.1916 21.6566 20.8091 21.6566 20.5766 21.4241L15.2741 16.1254Z", fill: "currentColor" }));
function Wz(i) {
  return /* @__PURE__ */ B("span", { className: "globalNavigation__search", onClick: i.onClick, children: /* @__PURE__ */ B(
    f1,
    {
      placement: "right",
      title: /* @__PURE__ */ Ri(hN, { size: "large", children: [
        /* @__PURE__ */ B(Du, { children: "Search" }),
        /* @__PURE__ */ B(Du, { children: "Ctrl + K" })
      ] }),
      children: /* @__PURE__ */ B(Lu, { className: "globalNavigation__searchButtonWrapper", children: /* @__PURE__ */ B(c1, { className: "globalNavigation__searchButton", shape: "round", icon: /* @__PURE__ */ B(Bz, { className: "globalNavigation__searchIcon" }) }) })
    }
  ) });
}
function Kz(i) {
  return /* @__PURE__ */ Ri(Du, { children: [
    i.type === "link" && /* @__PURE__ */ B(f1, { title: i.hideLabel ? i.label : void 0, placement: "right", children: /* @__PURE__ */ B(
      BE,
      {
        className: `globalNavigation__item ${i.isActive ? " globalNavigation__item--active" : ""}`,
        icon: i.icon,
        label: i.label,
        onClick: i.onClick,
        hideLabel: i.hideLabel
      }
    ) }),
    i.type === "menu" && /* @__PURE__ */ B(dE, { items: i.items })
  ] });
}
function dE(i) {
  return /* @__PURE__ */ B(Lu, { vertical: !0, children: i.items.map((l, u) => /* @__PURE__ */ Ri(Z8, { children: [
    l.type === "link" && /* @__PURE__ */ J8(Kz, oo(ke({}, l), { key: u })),
    l.type === "menu" && /* @__PURE__ */ B(
      VE,
      {
        expandIcon: l.isNestedMenu ? !0 : null,
        items: [Gz(l, u)],
        className: "globalNavigation__menu"
      },
      u
    )
  ] }, u)) });
}
function Gz(i, l) {
  let u;
  return i.type === "menu" && i.children && (u = i.children.map((f, p) => ke({
    expandIcon: f.isNestedMenu ? !0 : null,
    key: `${String(f.label)}${p}`
  }, f)), u.unshift({ label: i.label, type: "group", key: i.label + "_groupTitle" })), {
    icon: /* @__PURE__ */ B(
      BE,
      {
        icon: i.icon,
        label: i.label,
        onClick: i.onClick,
        hideLabel: i.hideLabel
      }
    ),
    popupClassName: "globalNavigation__popup",
    className: "globalNavigation__item" + (i.isActive ? " globalNavigation__item--active" : ""),
    key: `${i.label}${l}`,
    children: u
  };
}
const Yz = (i) => /* @__PURE__ */ w.createElement("svg", ke({ xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24" }, i), /* @__PURE__ */ w.createElement("title", null, "lock"), /* @__PURE__ */ w.createElement("g", { strokeLinecap: "square", strokeLinejoin: "miter", strokeWidth: 1, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" }, /* @__PURE__ */ w.createElement("path", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, d: "M12,1L12,1 C9.2,1,7,3.2,7,6v3h10V6C17,3.2,14.8,1,12,1z" }), /* @__PURE__ */ w.createElement("rect", { x: 4, y: 9, fill: "none", stroke: "currentColor", strokeMiterlimit: 10, width: 16, height: 14 }), /* @__PURE__ */ w.createElement("circle", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, cx: 12, cy: 15, r: 2 }), /* @__PURE__ */ w.createElement("line", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, x1: 12, y1: 17, x2: 12, y2: 19 }))), Qz = (i) => /* @__PURE__ */ w.createElement("svg", ke({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", id: "add-colorable" }, i), `>\r
    `, /* @__PURE__ */ w.createElement("path", { d: "M12.5992 4.8002C12.5992 4.4702 12.3292 4.2002 11.9992 4.2002C11.6692 4.2002 11.3992 4.4702 11.3992 4.8002V11.4002H4.79922C4.46922 11.4002 4.19922 11.6702 4.19922 12.0002C4.19922 12.3302 4.46922 12.6002 4.79922 12.6002H11.3992V19.2002C11.3992 19.5302 11.6692 19.8002 11.9992 19.8002C12.3292 19.8002 12.5992 19.5302 12.5992 19.2002V12.6002H19.1992C19.5292 12.6002 19.7992 12.3302 19.7992 12.0002C19.7992 11.6702 19.5292 11.4002 19.1992 11.4002H12.5992V4.8002Z", fill: "currentColor" }));
function Xz(i) {
  const l = i.createItems.map((f) => {
    if (f.type === "group")
      return { label: f.label, key: f.label, type: f.type };
    const p = f.isLocked, y = f.disabled;
    let h = "navigationCreate__item";
    return (y != null ? y : p) && (h += " navigationCreate__item--disabled"), {
      key: f.description,
      className: h,
      disabled: f.disabled,
      onClick: (x) => {
        var T;
        f.disabled || ((T = f.onClick) == null || T.call(f), x.domEvent.stopPropagation(), x.domEvent.preventDefault());
      },
      label: /* @__PURE__ */ B(f1, { title: f.tooltip, children: /* @__PURE__ */ Ri(yE, { vertical: !0, gap: "middle", justify: "center", children: [
        /* @__PURE__ */ Ri("span", { className: "navigationCreate__itemTitle", children: [
          f.title,
          f.isLoading && /* @__PURE__ */ B(sN, { className: "navigationCreate__itemLoading", size: "small" }),
          p && /* @__PURE__ */ B(Yz, { className: "navigationCreate__lockIcon" })
        ] }),
        /* @__PURE__ */ B("span", { className: "navigationCreate__itemDescription", children: f.description })
      ] }) })
    };
  });
  return /* @__PURE__ */ B(Lu, { children: /* @__PURE__ */ B(
    VE,
    {
      className: "globalNavigation__item globalNavigation__item--createNew",
      items: [
        {
          key: "NavigationCreate",
          popupClassName: "globalNavigation__popup globalNavigation__popup--navigationCreate",
          icon: /* @__PURE__ */ B(Lu, { className: "navigationCreate__popupButtonWrapper", style: { pointerEvents: "none" }, children: /* @__PURE__ */ B(c1, { className: "navigationCreate__popupButton", icon: /* @__PURE__ */ B(Qz, { className: "navigationCreate__popupIcon" }) }) }),
          children: l
        }
      ],
      expandIcon: null
    }
  ) });
}
function qz(i = "") {
  var u;
  const l = new RegExp(
    "(?:[\\W\\d]*\\b)*([A-Za-z])\\w*\\b(?:.*\\s(\\w)[\\w-]*$)?",
    "i"
  );
  return (u = i.replace(l, "$1$2")) == null ? void 0 : u.toUpperCase();
}
const Zz = (i, l) => {
  let u;
  return (...f) => {
    window.clearTimeout(u), u = window.setTimeout(() => {
      i(...f);
    }, l);
  };
}, Jz = () => /* @__PURE__ */ B(Lu, { children: /* @__PURE__ */ B(gE, { description: "No results found", imageStyle: { height: "60px" } }) }), eP = ({ signoutOptions: i }) => {
  var l;
  return /* @__PURE__ */ B(
    c1,
    {
      className: "workspaceSelector__signoutButton",
      type: "primary",
      onClick: (u) => {
        i == null || i.onSignout();
      },
      children: (l = i == null ? void 0 : i.label) != null ? l : "Sign Out of mParticle"
    }
  );
}, tP = ({
  onSearch: i,
  searchTerm: l
}) => /* @__PURE__ */ B(Du, { children: /* @__PURE__ */ B(
  Uh,
  {
    placeholder: "Search",
    className: "workspaceSelector__searchInput",
    onChange: i,
    value: l,
    onClick: (u) => {
      u.preventDefault(), u.stopPropagation();
    }
  }
) });
function nP(i) {
  const [l, u] = Al(""), [f, p] = Al(i.orgs);
  Ll(() => {
    p(i.orgs);
  }, i.orgs);
  const y = _u(Zz(p, 200), []), h = Rb(
    () => z(
      /* currentFilteredOrgs */
    ),
    f
  ), x = {
    key: "search",
    className: "workspaceSelector__search",
    label: /* @__PURE__ */ B(tP, { onSearch: H, searchTerm: l })
  }, T = ki({
    key: "signout",
    className: "workspaceSelector__signout",
    label: /* @__PURE__ */ B(eP, { signoutOptions: i.signoutOptions })
  }), R = {
    key: "no-results",
    className: "workspaceSelector__noResults",
    label: /* @__PURE__ */ B(Jz, {})
  }, _ = [
    ...!!l && !f.length ? [R] : h,
    x,
    i.signoutOptions ? T.current : null
  ], N = i.orgs.flatMap((q) => {
    let V = [];
    const { accounts: U } = q;
    if (U) {
      const I = U.flatMap(({ workspaces: W }) => W);
      V = V.concat(I);
    }
    return V;
  }).find((q) => q.isActive), L = [
    {
      key: "WorkspaceSelector",
      icon: /* @__PURE__ */ B(t5, { className: "workspaceSelector__avatar", children: qz(N == null ? void 0 : N.label) }),
      popupClassName: "workspaceSelector",
      children: _
    }
  ];
  return /* @__PURE__ */ B(
    VE,
    {
      className: "globalNavigation__menu globalNavigation__item globalNavigation__item--workspaceSelector",
      items: L,
      onOpenChange: A,
      expandIcon: null
    }
  );
  function z() {
    return f.reduce((q, V) => (q.push({
      type: "org",
      className: "workspaceSelector__orgName" + (V.label ? "" : " u-display-none"),
      label: V.label,
      id: V.id,
      key: V.id,
      accounts: V.accounts,
      // todo: these are ending up in the html as attributes..
      workspaces: V.accounts.flatMap((U) => U.workspaces)
    }), V.accounts.forEach((U) => {
      q.push({
        type: "account",
        className: "workspaceSelector__accountName" + (U.label ? "" : " u-display-none"),
        label: U.label,
        id: U.id,
        key: U.id,
        workspaces: U.workspaces
      }), U.workspaces.forEach((I) => {
        q.push({
          type: "workspace",
          className: "workspaceSelector__workspaceName" + (I.isActive ? " workspaceSelector__workspaceName--active" : ""),
          label: I.label,
          id: I.id,
          key: I.id,
          onClick: I.onClick
        });
      });
    }), q), []);
  }
  function H(q) {
    const V = q.target.value.toLowerCase();
    if (u(V), V) {
      const I = U();
      y(I);
    } else
      p(i.orgs);
    function U() {
      return i.orgs.reduce((W, re) => {
        if (I(re))
          W.push(re);
        else {
          const G = ke({}, re);
          G.accounts = [], re.accounts.forEach((se) => {
            const Te = ke({}, se);
            Te.workspaces = [], I(se) ? G.accounts.push(se) : (se.workspaces.forEach((le) => {
              I(le) && Te.workspaces.push(le);
            }), Te.workspaces.length && G.accounts.push(Te));
          }), G.accounts.length && W.push(G);
        }
        return W;
      }, []);
      function I(W) {
        return !!W.label && W.label.toString().toLowerCase().includes(V) || !!W.id && W.id.toString().toLowerCase().includes(V);
      }
    }
  }
  function A() {
    u(""), p(i.orgs);
  }
}
const rP = (i) => /* @__PURE__ */ w.createElement("svg", ke({ id: "mpLogo", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 202.8 169", xmlSpace: "preserve" }, i), /* @__PURE__ */ w.createElement("polygon", { fill: "currentColor", points: "135.2,126.7 135.2,169 202.8,126.7 202.8,84.5" }), /* @__PURE__ */ w.createElement("polygon", { fill: "currentColor", points: "67.6,126.7 67.6,169 135.2,126.7 135.2,84.5" }), /* @__PURE__ */ w.createElement("polygon", { fill: "currentColor", points: "0,126.7 0,169 67.6,126.7 67.6,84.5" }), /* @__PURE__ */ w.createElement("polygon", { fill: "currentColor", points: "202.8,0 135.2,42.2 135.2,84.5 202.8,42.2" }), /* @__PURE__ */ w.createElement("polygon", { fill: "currentColor", points: "135.2,0 67.6,42.2 67.6,84.5 135.2,42.2" }), /* @__PURE__ */ w.createElement("polygon", { fill: "currentColor", points: "67.6,0 0,42.2 0,84.5 67.6,42.2" })), aP = 90, ZP = (i) => /* @__PURE__ */ B(qd, { className: "globalNavigation", children: /* @__PURE__ */ B(qd.Sider, { className: "globalNavigation__sider", width: aP, children: /* @__PURE__ */ Ri(yE, { vertical: !0, justify: "space-between", style: { height: "100%" }, children: [
  /* @__PURE__ */ Ri("div", { children: [
    /* @__PURE__ */ B(Vz, ke({}, i.logo)),
    /* @__PURE__ */ Ri(Lu, { vertical: !0, children: [
      i.onSearchClick && /* @__PURE__ */ B(Wz, { onClick: i.onSearchClick }),
      i.createItems && /* @__PURE__ */ B(Xz, { createItems: i.createItems })
    ] }),
    /* @__PURE__ */ B(dE, { items: i.tools })
  ] }),
  /* @__PURE__ */ Ri("div", { children: [
    /* @__PURE__ */ B(dE, { items: i.management }),
    i.orgs && /* @__PURE__ */ B(nP, { orgs: i.orgs, signoutOptions: i.signoutOptions }),
    !i.hideMpHome && /* @__PURE__ */ B(f1, { title: "mParticle Overview", placement: "right", children: /* @__PURE__ */ B(
      Lu,
      {
        className: "globalNavigation__mpHome",
        onClick: () => {
          i.onMpHomeClick();
        },
        children: /* @__PURE__ */ B(rP, { className: "globalNavigation__mpSvg" })
      }
    ) })
  ] })
] }) }) }), JP = (i) => /* @__PURE__ */ w.createElement("svg", ke({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, i), /* @__PURE__ */ w.createElement("path", { d: "M5 5.5C5 5.225 4.775 5 4.5 5C4.225 5 4 5.225 4 5.5V16.5C4 17.8813 5.11875 19 6.5 19H19.5C19.775 19 20 18.775 20 18.5C20 18.225 19.775 18 19.5 18H6.5C5.67188 18 5 17.3281 5 16.5V5.5ZM18.8531 8.85313C19.0469 8.65938 19.0469 8.34062 18.8531 8.14687C18.6594 7.95312 18.3406 7.95312 18.1469 8.14687L14 12.2937L11.3531 9.64687C11.1594 9.45312 10.8406 9.45312 10.6469 9.64687L7.14687 13.1469C6.95312 13.3406 6.95312 13.6594 7.14687 13.8531C7.34062 14.0469 7.65938 14.0469 7.85313 13.8531L11 10.7063L13.6469 13.3531C13.8406 13.5469 14.1594 13.5469 14.3531 13.3531L18.8531 8.85313Z", fill: "black" })), eH = (i) => /* @__PURE__ */ w.createElement("svg", ke({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, i), /* @__PURE__ */ w.createElement("path", { d: "M18 13C18 13.275 17.775 13.5 17.5 13.5H15.5C15.225 13.5 15 13.275 15 13V11C15 10.725 15.225 10.5 15.5 10.5H17.5C17.775 10.5 18 10.725 18 11V13ZM14 11V11.5H12.5V6.5C12.5 5.67188 11.8281 5 11 5H10V4.5C10 3.67188 9.32812 3 8.5 3H6.5C5.67188 3 5 3.67188 5 4.5V6.5C5 7.32812 5.67188 8 6.5 8H8.5C9.32812 8 10 7.32812 10 6.5V6H11C11.275 6 11.5 6.225 11.5 6.5V11.5H10V11C10 10.1719 9.32812 9.5 8.5 9.5H6.5C5.67188 9.5 5 10.1719 5 11V13C5 13.8281 5.67188 14.5 6.5 14.5H8.5C9.32812 14.5 10 13.8281 10 13V12.5H11.5V17.5C11.5 17.775 11.275 18 11 18H10V17.5C10 16.6719 9.32812 16 8.5 16H6.5C5.67188 16 5 16.6719 5 17.5V19.5C5 20.3281 5.67188 21 6.5 21H8.5C9.32812 21 10 20.3281 10 19.5V19H11C11.8281 19 12.5 18.3281 12.5 17.5V12.5H14V13C14 13.8281 14.6719 14.5 15.5 14.5H17.5C18.3281 14.5 19 13.8281 19 13V11C19 10.1719 18.3281 9.5 17.5 9.5H15.5C14.6719 9.5 14 10.1719 14 11ZM9 4.5V6.5C9 6.775 8.775 7 8.5 7H6.5C6.225 7 6 6.775 6 6.5V4.5C6 4.225 6.225 4 6.5 4H8.5C8.775 4 9 4.225 9 4.5ZM9 11V13C9 13.275 8.775 13.5 8.5 13.5H6.5C6.225 13.5 6 13.275 6 13V11C6 10.725 6.225 10.5 6.5 10.5H8.5C8.775 10.5 9 10.725 9 11ZM9 17.5V19.5C9 19.775 8.775 20 8.5 20H6.5C6.225 20 6 19.775 6 19.5V17.5C6 17.225 6.225 17 6.5 17H8.5C8.775 17 9 17.225 9 17.5Z", fill: "black" })), tH = (i) => /* @__PURE__ */ w.createElement("svg", ke({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, i), /* @__PURE__ */ w.createElement("path", { d: "M18 17C18 17.075 17.9688 17.2312 17.7375 17.4656C17.5031 17.7031 17.1156 17.9625 16.5562 18.2031C15.4406 18.6812 13.8313 19 12 19C10.1687 19 8.55937 18.6812 7.44375 18.2031C6.88437 17.9625 6.49688 17.7031 6.2625 17.4656C6.03125 17.2312 6 17.075 6 17V14.3594C6.5375 14.6375 7.19062 14.8687 7.9125 15.0437C9.08437 15.3344 10.4938 15.5 12 15.5C13.5063 15.5 14.9156 15.3344 16.0875 15.0469C16.8094 14.8687 17.4625 14.6406 18 14.3625V17ZM18 10.3594V13.1906C17.5469 13.5219 16.8156 13.8344 15.8469 14.075C14.7656 14.3406 13.4375 14.5 12 14.5C10.5625 14.5 9.23438 14.3406 8.15313 14.075C7.18438 13.8375 6.45312 13.5219 6 13.1906V10.3594C6.5375 10.6375 7.19062 10.8687 7.9125 11.0437C9.08437 11.3344 10.4938 11.5 12 11.5C13.5063 11.5 14.9156 11.3344 16.0875 11.0469C16.8094 10.8688 17.4625 10.6406 18 10.3625V10.3594ZM18 9.19063C17.5469 9.52188 16.8156 9.83437 15.8469 10.075C14.7656 10.3406 13.4375 10.5 12 10.5C10.5625 10.5 9.23438 10.3406 8.15313 10.075C7.18438 9.8375 6.45312 9.52188 6 9.19063V7C6 6.925 6.03125 6.76875 6.2625 6.53437C6.49688 6.29688 6.88437 6.0375 7.44375 5.79688C8.55937 5.31875 10.1687 5 12 5C13.8313 5 15.4406 5.31875 16.5562 5.79688C17.1156 6.0375 17.5031 6.29688 17.7375 6.53437C17.9688 6.76875 18 6.925 18 7V9.19063ZM19 17V7C19 5.34375 15.8656 4 12 4C8.13438 4 5 5.34375 5 7V17C5 18.6562 8.13438 20 12 20C15.8656 20 19 18.6562 19 17Z", fill: "black" })), nH = (i) => /* @__PURE__ */ w.createElement("svg", ke({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, i), /* @__PURE__ */ w.createElement("path", { d: "M6.5 6C6.225 6 6 6.225 6 6.5V9.5C6 9.775 6.225 10 6.5 10H9.5C9.775 10 10 9.775 10 9.5V6.5C10 6.225 9.775 6 9.5 6H6.5ZM5 6.5C5 5.67188 5.67188 5 6.5 5H9.5C10.3281 5 11 5.67188 11 6.5V9.5C11 10.3281 10.3281 11 9.5 11H6.5C5.67188 11 5 10.3281 5 9.5V6.5ZM6.5 14C6.225 14 6 14.225 6 14.5V17.5C6 17.775 6.225 18 6.5 18H9.5C9.775 18 10 17.775 10 17.5V14.5C10 14.225 9.775 14 9.5 14H6.5ZM5 14.5C5 13.6719 5.67188 13 6.5 13H9.5C10.3281 13 11 13.6719 11 14.5V17.5C11 18.3281 10.3281 19 9.5 19H6.5C5.67188 19 5 18.3281 5 17.5V14.5ZM17.5 6H14.5C14.225 6 14 6.225 14 6.5V9.5C14 9.775 14.225 10 14.5 10H17.5C17.775 10 18 9.775 18 9.5V6.5C18 6.225 17.775 6 17.5 6ZM14.5 5H17.5C18.3281 5 19 5.67188 19 6.5V9.5C19 10.3281 18.3281 11 17.5 11H14.5C13.6719 11 13 10.3281 13 9.5V6.5C13 5.67188 13.6719 5 14.5 5ZM14.5 14C14.225 14 14 14.225 14 14.5V17.5C14 17.775 14.225 18 14.5 18H17.5C17.775 18 18 17.775 18 17.5V14.5C18 14.225 17.775 14 17.5 14H14.5ZM13 14.5C13 13.6719 13.6719 13 14.5 13H17.5C18.3281 13 19 13.6719 19 14.5V17.5C19 18.3281 18.3281 19 17.5 19H14.5C13.6719 19 13 18.3281 13 17.5V14.5Z", fill: "black" })), rH = (i) => /* @__PURE__ */ w.createElement("svg", ke({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, i), /* @__PURE__ */ w.createElement("path", { d: "M11.6094 5.16621C11.8594 5.05996 12.1406 5.05996 12.3906 5.16621L17.9125 7.50996C18.2656 7.65996 18.5031 7.99434 18.5 8.37246C18.4844 11.31 17.2688 16.4912 12.3906 18.8256C12.1438 18.9443 11.8531 18.9443 11.6063 18.8256C6.72814 16.4881 5.51564 11.3068 5.50001 8.36934C5.49689 7.99121 5.73439 7.65684 6.08751 7.50684L11.6094 5.16309V5.16621ZM12.7813 4.24434C12.2813 4.03184 11.7188 4.03184 11.2188 4.24434L5.69689 6.58809C5.00939 6.87871 4.49689 7.55684 4.50001 8.37559C4.51564 11.4756 5.79064 17.1475 11.175 19.7256C11.6969 19.9756 12.3031 19.9756 12.825 19.7256C18.2094 17.1475 19.4844 11.4756 19.5 8.37559C19.5031 7.55684 18.9906 6.87871 18.3031 6.58809L12.7813 4.24434ZM12 9.75059C12.1989 9.75059 12.3897 9.8296 12.5303 9.97026C12.671 10.1109 12.75 10.3017 12.75 10.5006C12.75 10.6995 12.671 10.8903 12.5303 11.0309C12.3897 11.1716 12.1989 11.2506 12 11.2506C11.8011 11.2506 11.6103 11.1716 11.4697 11.0309C11.329 10.8903 11.25 10.6995 11.25 10.5006C11.25 10.3017 11.329 10.1109 11.4697 9.97026C11.6103 9.8296 11.8011 9.75059 12 9.75059ZM13.75 10.5006C13.75 9.53496 12.9656 8.75059 12 8.75059C11.0344 8.75059 10.25 9.53496 10.25 10.5006C10.25 11.2943 10.7781 11.9631 11.5 12.1787V14.5006C11.5 14.7756 11.725 15.0006 12 15.0006C12.275 15.0006 12.5 14.7756 12.5 14.5006V12.1787C13.2219 11.9631 13.75 11.2943 13.75 10.5006Z", fill: "black" })), aH = (i) => /* @__PURE__ */ w.createElement("svg", ke({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, i), /* @__PURE__ */ w.createElement("path", { d: "M5 6.5C5 6.10218 5.15804 5.72064 5.43934 5.43934C5.72064 5.15804 6.10218 5 6.5 5C6.89782 5 7.27936 5.15804 7.56066 5.43934C7.84196 5.72064 8 6.10218 8 6.5C8 6.89782 7.84196 7.27936 7.56066 7.56066C7.27936 7.84196 6.89782 8 6.5 8C6.10218 8 5.72064 7.84196 5.43934 7.56066C5.15804 7.27936 5 6.89782 5 6.5ZM9 6.5C9 5.83696 8.73661 5.20107 8.26777 4.73223C7.79893 4.26339 7.16304 4 6.5 4C5.83696 4 5.20107 4.26339 4.73223 4.73223C4.26339 5.20107 4 5.83696 4 6.5C4 7.16304 4.26339 7.79893 4.73223 8.26777C5.20107 8.73661 5.83696 9 6.5 9C7.16304 9 7.79893 8.73661 8.26777 8.26777C8.73661 7.79893 9 7.16304 9 6.5ZM12 9C12.5304 9 13.0391 9.21071 13.4142 9.58579C13.7893 9.96086 14 10.4696 14 11C14 11.5304 13.7893 12.0391 13.4142 12.4142C13.0391 12.7893 12.5304 13 12 13C11.4696 13 10.9609 12.7893 10.5858 12.4142C10.2107 12.0391 10 11.5304 10 11C10 10.4696 10.2107 9.96086 10.5858 9.58579C10.9609 9.21071 11.4696 9 12 9ZM12 14C12.394 14 12.7841 13.9224 13.1481 13.7716C13.512 13.6209 13.8427 13.3999 14.1213 13.1213C14.3999 12.8427 14.6209 12.512 14.7716 12.1481C14.9224 11.7841 15 11.394 15 11C15 10.606 14.9224 10.2159 14.7716 9.85195C14.6209 9.48797 14.3999 9.15726 14.1213 8.87868C13.8427 8.6001 13.512 8.37913 13.1481 8.22836C12.7841 8.0776 12.394 8 12 8C11.606 8 11.2159 8.0776 10.8519 8.22836C10.488 8.37913 10.1573 8.6001 9.87868 8.87868C9.6001 9.15726 9.37913 9.48797 9.22836 9.85195C9.0776 10.2159 9 10.606 9 11C9 11.394 9.0776 11.7841 9.22836 12.1481C9.37913 12.512 9.6001 12.8427 9.87868 13.1213C10.1573 13.3999 10.488 13.6209 10.8519 13.7716C11.2159 13.9224 11.606 14 12 14ZM10.1656 16H13.8344C15.5281 16 16.9094 17.3281 16.9969 19H7.00313C7.09063 17.3281 8.47187 16 10.1656 16ZM10.1656 15C7.86562 15 6 16.8656 6 19.1656C6 19.625 6.37187 20 6.83437 20H17.1656C17.625 20 18 19.6281 18 19.1656C18 16.8656 16.1344 15 13.8344 15H10.1656ZM18 5C18.3978 5 18.7794 5.15804 19.0607 5.43934C19.342 5.72064 19.5 6.10218 19.5 6.5C19.5 6.89782 19.342 7.27936 19.0607 7.56066C18.7794 7.84196 18.3978 8 18 8C17.6022 8 17.2206 7.84196 16.9393 7.56066C16.658 7.27936 16.5 6.89782 16.5 6.5C16.5 6.10218 16.658 5.72064 16.9393 5.43934C17.2206 5.15804 17.6022 5 18 5ZM18 9C18.663 9 19.2989 8.73661 19.7678 8.26777C20.2366 7.79893 20.5 7.16304 20.5 6.5C20.5 5.83696 20.2366 5.20107 19.7678 4.73223C19.2989 4.26339 18.663 4 18 4C17.337 4 16.7011 4.26339 16.2322 4.73223C15.7634 5.20107 15.5 5.83696 15.5 6.5C15.5 7.16304 15.7634 7.79893 16.2322 8.26777C16.7011 8.73661 17.337 9 18 9ZM18.5 11C19.8813 11 21 12.1187 21 13.5C21 13.775 21.225 14 21.5 14C21.775 14 22 13.775 22 13.5C22 11.5656 20.4344 10 18.5 10H15.875C15.9563 10.3187 16 10.6562 16 11H18.5ZM8 11C8 10.6562 8.04375 10.3187 8.125 10H5.5C3.56562 10 2 11.5656 2 13.5C2 13.775 2.225 14 2.5 14C2.775 14 3 13.775 3 13.5C3 12.1187 4.11875 11 5.5 11H8Z", fill: "black" })), iH = (i) => /* @__PURE__ */ w.createElement("svg", ke({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, i), /* @__PURE__ */ w.createElement("path", { d: "M19 9C19 8.66563 18.9594 8.34062 18.8813 8.03125L17.3531 9.55937C17.0719 9.84062 16.6906 10 16.2937 10H15.5C14.6719 10 14 9.32812 14 8.5V7.70625C14 7.30938 14.1594 6.92812 14.4406 6.64687L15.9688 5.11875C15.6594 5.04062 15.3344 5 15 5C12.7906 5 11 6.79063 11 9C11 9.2875 11.0312 9.56562 11.0875 9.83437C11.1875 10.3094 11.0687 10.8469 10.6781 11.2375L5.43125 16.4812C5.15625 16.7594 5 17.1344 5 17.525C5 18.3406 5.65937 19 6.475 19C6.86562 19 7.24062 18.8438 7.51875 18.5688L12.7656 13.3219C13.1531 12.9344 13.6937 12.8125 14.1687 12.9125C14.4375 12.9688 14.7156 13 15.0031 13C17.2125 13 19.0031 11.2094 19.0031 9H19ZM20 9C20 11.7625 17.7625 14 15 14C14.6438 14 14.2938 13.9625 13.9594 13.8906C13.7844 13.8531 13.6 13.9 13.4719 14.0281L8.225 19.275C7.75937 19.7406 7.13125 20 6.475 20C5.10937 20 4 18.8906 4 17.525C4 16.8687 4.25938 16.2406 4.725 15.775L9.97188 10.5281C10.1 10.4 10.1469 10.2156 10.1094 10.0406C10.0375 9.70625 10 9.35625 10 9C10 6.2375 12.2375 4 15 4C15.775 4 16.5094 4.17812 17.1656 4.49062C17.4531 4.62813 17.4938 5.00625 17.2688 5.23125L15.1469 7.35313C15.0531 7.44688 15 7.575 15 7.70625V8.5C15 8.775 15.225 9 15.5 9H16.2937C16.425 9 16.5531 8.94688 16.6469 8.85313L18.7688 6.73125C18.9938 6.50625 19.3719 6.54688 19.5094 6.83437C19.825 7.49062 20 8.225 20 9ZM6.75 16.75C6.88261 16.75 7.00979 16.8027 7.10355 16.8964C7.19732 16.9902 7.25 17.1174 7.25 17.25C7.25 17.3826 7.19732 17.5098 7.10355 17.6036C7.00979 17.6973 6.88261 17.75 6.75 17.75C6.61739 17.75 6.49021 17.6973 6.39645 17.6036C6.30268 17.5098 6.25 17.3826 6.25 17.25C6.25 17.1174 6.30268 16.9902 6.39645 16.8964C6.49021 16.8027 6.61739 16.75 6.75 16.75Z", fill: "black" }));
export {
  XP as Affix,
  dN as Alert,
  GP as Anchor,
  qP as App,
  EP as AutoComplete,
  t5 as Avatar,
  iN as Badge,
  gN as Breadcrumb,
  c1 as Button,
  kP as Calendar,
  e5 as Card,
  NP as Carousel,
  mE as Cascader,
  Lu as Center,
  JP as ChartLineIcon,
  nN as Checkbox,
  uH as Col,
  TP as Collapse,
  mP as ColorPicker,
  Ge as ConfigProvider,
  eH as ConnectionsIcon,
  tH as DatabaseIcon,
  yP as DatePicker,
  oN as Descriptions,
  WP as Divider,
  FP as Drawer,
  mN as Dropdown,
  gE as Empty,
  yE as Flex,
  dP as FloatButton,
  Us as Form,
  aP as GlobalNavWidth,
  ZP as GlobalNavigation,
  sH as Grid,
  nH as GridIcon,
  AP as Image,
  Uh as Input,
  SP as InputNumber,
  qd as Layout,
  lN as List,
  BP as LoadingModal,
  tN as Mentions,
  VE as Menu,
  QP as MenuItem,
  VP as Message,
  fN as Modal,
  jP as Notification,
  YP as Pagination,
  $P as Popconfirm,
  HP as Popover,
  UP as Progress,
  zP as QRCode,
  JR as Radio,
  vP as Rate,
  uN as Result,
  cH as Row,
  _P as Segmented,
  hP as Select,
  rH as ShieldKeyholeIcon,
  cN as Skeleton,
  gP as Slider,
  hN as Space,
  sN as Spin,
  DP as Statistic,
  KP as Steps,
  CP as Switch,
  PP as Table,
  MP as Tabs,
  rN as Tag,
  wP as TimePicker,
  RP as Timeline,
  f1 as Tooltip,
  OP as Tour,
  xP as Transfer,
  LP as Tree,
  pP as TreeSelect,
  bP as Upload,
  aH as UsersIcon,
  IP as Watermark,
  iH as WrenchIcon
};
