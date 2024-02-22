var tz = Object.defineProperty, nz = Object.defineProperties;
var rz = Object.getOwnPropertyDescriptors;
var _R = Object.getOwnPropertySymbols;
var az = Object.prototype.hasOwnProperty, iz = Object.prototype.propertyIsEnumerable;
var kR = (i, l, u) => l in i ? tz(i, l, { enumerable: !0, configurable: !0, writable: !0, value: u }) : i[l] = u, Oe = (i, l) => {
  for (var u in l || (l = {}))
    az.call(l, u) && kR(i, u, l[u]);
  if (_R)
    for (var u of _R(l))
      iz.call(l, u) && kR(i, u, l[u]);
  return i;
}, oo = (i, l) => nz(i, rz(l));
import { jsx as B, Fragment as Lu, jsxs as ai } from "react/jsx-runtime";
import { ConfigProvider as j_, Button as V_, FloatButton as oz, Rate as lz, Form as Au, TreeSelect as uz, Select as sz, Mentions as B_, Radio as hE, ColorPicker as cz, Slider as fz, Cascader as c0, DatePicker as dz, Checkbox as W_, Input as Ih, InputNumber as vz, Switch as pz, Upload as hz, AutoComplete as mz, TimePicker as gz, Transfer as yz, Collapse as Sz, Timeline as Cz, Calendar as bz, Segmented as Ez, Tabs as wz, Tag as K_, Tour as xz, Carousel as Tz, Tooltip as Rz, Statistic as _z, Tree as kz, Image as Mz, QRCode as Oz, Badge as G_, Card as mE, Avatar as Y_, Descriptions as Q_, Table as Nz, Empty as gE, Popover as Dz, List as X_, Progress as Lz, Result as Az, Spin as zz, Skeleton as Pz, Watermark as Uz, Popconfirm as Iz, Drawer as $z, Modal as Hz, notification as Fz, Alert as q_, message as jz, Flex as Vz, Divider as Bz, Space as Wz, Layout as $h, Steps as Kz, Anchor as Gz, Dropdown as Z_, Breadcrumb as J_, Pagination as Yz, Menu as Qz, Affix as Xz, App as qz } from "antd";
import { Col as eH, Grid as tH, Row as nH } from "antd";
import * as R from "react";
import ki, { useEffect as Al, useState as uo, useMemo as kh, useCallback as Mu, useRef as _i, useLayoutEffect as Zz, useImperativeHandle as ek, createContext as f0, useContext as zs, forwardRef as Jz, Fragment as eP, createElement as tP } from "react";
const nP = {
  token: {
    colorLinkHover: "#ab8eff",
    controlOutline: "rgba(0.21176470816135406, 0, 0.8196078538894653, 0.10000000149011612)",
    controlItemBgHover: "#f8f6fb",
    controlItemBgActive: "#ebe8f8",
    controlItemBgActiveHover: "#c3aeff",
    colorFillSecondary: "#ebe8f8",
    colorBorder: "#c3aeff",
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
    "mpBrandSecondary.1": "#ffffff",
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
    Button: {
      borderColorDisabled: "#dcdcd8",
      primaryShadow: "0 2px 0 rgba(54, 0, 209, 0.1)"
    },
    Menu: {
      itemHoverBg: "#f8f6fb"
    },
    Table: {
      footerBg: "#fafafa",
      headerBg: "#fafafa"
    },
    Input: {
      activeShadow: "0 0 0 2px rgba(54, 0, 209, 0.1)"
    }
  }
}, Ge = (i) => /* @__PURE__ */ B(j_, oo(Oe({}, i), { theme: nP })), Hh = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(V_, oo(Oe({}, i), { children: i.children })) });
Hh.Group = V_.Group;
const d$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(oz, Oe({}, i)) }), v$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(lz, Oe({}, i)) }), Is = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Au, oo(Oe({}, i), { children: i.children })) });
Is.useForm = Au.useForm;
Is.useWatch = Au.useWatch;
Is.useFormInstance = Au.useFormInstance;
Is.Item = Au.Item;
Is.List = Au.List;
Is.displayName = Au.displayName;
Is.Provider = Au.Provider;
Is.ErrorList = Au.ErrorList;
const p$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(uz, Oe({}, i)) }), h$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(sz, Oe({}, i)) }), rP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(B_, Oe({}, i)) });
rP.getMentions = B_.getMentions;
const tk = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(hE, Oe({}, i)) });
tk.Group = hE.Group;
tk.Button = hE.Button;
const m$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(cz, Oe({}, i)) }), g$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(fz, Oe({}, i)) }), yE = (i) => /* @__PURE__ */ B(j_, { children: /* @__PURE__ */ B(c0, Oe({}, i)) });
yE.Panel = c0.Panel;
yE.SHOW_PARENT = c0.SHOW_PARENT;
yE.SHOW_CHILD = c0.SHOW_CHILD;
const y$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(dz, Oe({}, i)) }), aP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(W_, Oe({}, i)) });
aP.Group = W_.Group;
const nv = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Ih, Oe({}, i)) });
nv.Group = Ih.Group;
nv.Password = Ih.Password;
nv.Search = Ih.Search;
nv.TextArea = Ih.TextArea;
const S$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(vz, Oe({}, i)) }), C$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(pz, Oe({}, i)) }), b$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(hz, Oe({}, i)) }), E$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(mz, Oe({}, i)) }), w$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(gz, Oe({}, i)) }), x$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(yz, Oe({}, i)) }), T$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Sz, Oe({}, i)) }), R$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Cz, Oe({}, i)) }), _$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(bz, Oe({}, i)) }), k$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Ez, Oe({}, i)) }), M$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(wz, Oe({}, i)) }), iP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(K_, Oe({}, i)) }), oP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(K_.CheckableTag, Oe({}, i)) });
iP.CheckableTag = oP;
const O$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(xz, Oe({}, i)) }), N$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Tz, Oe({}, i)) }), d0 = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Rz, oo(Oe({}, i), { children: /* @__PURE__ */ B(Lu, { children: i.children }) })) }), D$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(_z, Oe({}, i)) }), lP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(kz, Oe({}, i)) }), L$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Mz, Oe({}, i)) }), A$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Oz, Oe({}, i)) }), uP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(G_, Oe({}, i)) });
uP.Ribbon = G_.Ribbon;
const nk = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(mE, Oe({}, i)) });
nk.Meta = mE.Meta;
nk.Grid = mE.Grid;
const SE = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Y_, Oe({}, i)) });
SE.Group = Y_.Group;
const sP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Q_, Oe({}, i)) });
sP.Item = Q_.Item;
const z$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Nz, Oe({}, i)) }), rk = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(gE, Oe({}, i)) });
rk.PRESENTED_IMAGE_DEFAULT = gE.PRESENTED_IMAGE_DEFAULT;
rk.PRESENTED_IMAGE_SIMPLE = gE.PRESENTED_IMAGE_SIMPLE;
const P$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Dz, oo(Oe({}, i), { children: /* @__PURE__ */ B(Lu, { children: i.children }) })) }), cP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(X_, Oe({}, i)) });
cP.Item = X_.Item;
const U$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Lz, Oe({}, i)) }), CE = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Az, Oe({}, i)) }), fP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(zz, Oe({}, i)) }), dP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Pz, oo(Oe({}, i), { active: !0, style: Oe({ width: "100%" }, i.style) })) }), I$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Uz, Oe({}, i)) }), $$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Iz, oo(Oe({}, i), { children: /* @__PURE__ */ B(Lu, { children: i.children }) })) }), H$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B($z, Oe({}, i)) }), vP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Hz, Oe({}, i)) }), F$ = (i) => {
  const [l, u] = Fz.useNotification();
  return /* @__PURE__ */ ai(Ge, { children: [
    u,
    /* @__PURE__ */ B("span", { onClick: () => {
      l.open(Oe({}, i));
    }, children: i.children })
  ] });
}, pP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(q_, Oe({}, i)) });
pP.ErrorBoundary = q_.ErrorBoundary;
const j$ = (i) => {
  const [l, u] = jz.useMessage();
  return /* @__PURE__ */ ai(Ge, { children: [
    u,
    /* @__PURE__ */ B("span", { onClick: () => {
      l.open(Oe({}, i));
    }, children: i.children })
  ] });
}, hP = (i) => {
  Al(i, []);
};
function mP(i) {
  const [l, u] = uo(!0), [f, p] = uo(!1), [y, h] = uo(void 0);
  return hP(() => {
    i().then((E) => {
      h(E);
    }).catch(() => {
      p(!0);
    }).finally(() => {
      u(!1);
    });
  }), [l, f, y];
}
function V$(i) {
  const [l, u, f] = mP(i.fetchData);
  return /* @__PURE__ */ B(Lu, { children: /* @__PURE__ */ ai(vP, oo(Oe({}, i), { children: [
    l && /* @__PURE__ */ B(dP, {}),
    u && /* @__PURE__ */ B(CE, { status: "error", title: "Error Loading" }),
    !l && !u && i.children(f)
  ] })) });
}
const bE = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Vz, Oe({}, i)) }), zl = (i) => /* @__PURE__ */ B(Lu, { children: /* @__PURE__ */ B(bE, oo(Oe({ align: "center", justify: "center" }, i), { children: i.children })) }), B$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Bz, Oe({}, i)) }), gP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Wz, Oe({}, i)) }), qd = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B($h, Oe({}, i)) });
qd.Sider = $h.Sider;
qd.Footer = $h.Footer;
qd.Content = $h.Content;
qd.Header = $h.Header;
const W$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Kz, Oe({}, i)) }), K$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Gz, Oe({}, i)) }), yP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Z_, oo(Oe({}, i), { children: i.children })) });
yP.Button = Z_.Button;
const SP = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(J_, Oe({}, i)) });
SP.Item = J_.Item;
const G$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Yz, Oe({}, i)) });
function ak(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var ik = { exports: {} };
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
        var E = arguments[h];
        E && (y = p(y, f(E)));
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
      for (var E in y)
        l.call(y, E) && y[E] && (h = p(h, E));
      return h;
    }
    function p(y, h) {
      return h ? y ? y + " " + h : y + h : y;
    }
    i.exports ? (u.default = u, i.exports = u) : window.classNames = u;
  })();
})(ik);
var CP = ik.exports;
const Fn = /* @__PURE__ */ ak(CP);
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
function bP(i, l) {
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
function ok(i) {
  var l = bP(i, "string");
  return cr(l) == "symbol" ? l : String(l);
}
function tt(i, l, u) {
  return l = ok(l), l in i ? Object.defineProperty(i, l, {
    value: u,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : i[l] = u, i;
}
function MR(i, l) {
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
    l % 2 ? MR(Object(u), !0).forEach(function(f) {
      tt(i, f, u[f]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(u)) : MR(Object(u)).forEach(function(f) {
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
function EP(i) {
  if (Array.isArray(i))
    return kb(i);
}
function lk(i) {
  if (typeof Symbol != "undefined" && i[Symbol.iterator] != null || i["@@iterator"] != null)
    return Array.from(i);
}
function EE(i, l) {
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
function wP() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tr(i) {
  return EP(i) || lk(i) || EE(i) || wP();
}
function uk(i) {
  if (Array.isArray(i))
    return i;
}
function xP(i, l) {
  var u = i == null ? null : typeof Symbol != "undefined" && i[Symbol.iterator] || i["@@iterator"];
  if (u != null) {
    var f, p, y, h, E = [], x = !0, T = !1;
    try {
      if (y = (u = u.call(i)).next, l === 0) {
        if (Object(u) !== u)
          return;
        x = !1;
      } else
        for (; !(x = (f = y.call(u)).done) && (E.push(f.value), E.length !== l); x = !0)
          ;
    } catch (N) {
      T = !0, p = N;
    } finally {
      try {
        if (!x && u.return != null && (h = u.return(), Object(h) !== h))
          return;
      } finally {
        if (T)
          throw p;
      }
    }
    return E;
  }
}
function sk() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _e(i, l) {
  return uk(i) || xP(i, l) || EE(i, l) || sk();
}
function TP(i, l) {
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
  var u = TP(i, l), f, p;
  if (Object.getOwnPropertySymbols) {
    var y = Object.getOwnPropertySymbols(i);
    for (p = 0; p < y.length; p++)
      f = y[p], !(l.indexOf(f) >= 0) && Object.prototype.propertyIsEnumerable.call(i, f) && (u[f] = i[f]);
  }
  return u;
}
var Mb = { exports: {} }, Tn = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var OR;
function RP() {
  if (OR)
    return Tn;
  OR = 1;
  var i = Symbol.for("react.element"), l = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), h = Symbol.for("react.context"), E = Symbol.for("react.server_context"), x = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), z;
  z = Symbol.for("react.module.reference");
  function P(A) {
    if (typeof A == "object" && A !== null) {
      var Y = A.$$typeof;
      switch (Y) {
        case i:
          switch (A = A.type, A) {
            case u:
            case p:
            case f:
            case T:
            case N:
              return A;
            default:
              switch (A = A && A.$$typeof, A) {
                case E:
                case h:
                case x:
                case O:
                case _:
                case y:
                  return A;
                default:
                  return Y;
              }
          }
        case l:
          return Y;
      }
    }
  }
  return Tn.ContextConsumer = h, Tn.ContextProvider = y, Tn.Element = i, Tn.ForwardRef = x, Tn.Fragment = u, Tn.Lazy = O, Tn.Memo = _, Tn.Portal = l, Tn.Profiler = p, Tn.StrictMode = f, Tn.Suspense = T, Tn.SuspenseList = N, Tn.isAsyncMode = function() {
    return !1;
  }, Tn.isConcurrentMode = function() {
    return !1;
  }, Tn.isContextConsumer = function(A) {
    return P(A) === h;
  }, Tn.isContextProvider = function(A) {
    return P(A) === y;
  }, Tn.isElement = function(A) {
    return typeof A == "object" && A !== null && A.$$typeof === i;
  }, Tn.isForwardRef = function(A) {
    return P(A) === x;
  }, Tn.isFragment = function(A) {
    return P(A) === u;
  }, Tn.isLazy = function(A) {
    return P(A) === O;
  }, Tn.isMemo = function(A) {
    return P(A) === _;
  }, Tn.isPortal = function(A) {
    return P(A) === l;
  }, Tn.isProfiler = function(A) {
    return P(A) === p;
  }, Tn.isStrictMode = function(A) {
    return P(A) === f;
  }, Tn.isSuspense = function(A) {
    return P(A) === T;
  }, Tn.isSuspenseList = function(A) {
    return P(A) === N;
  }, Tn.isValidElementType = function(A) {
    return typeof A == "string" || typeof A == "function" || A === u || A === p || A === f || A === T || A === N || A === D || typeof A == "object" && A !== null && (A.$$typeof === O || A.$$typeof === _ || A.$$typeof === y || A.$$typeof === h || A.$$typeof === x || A.$$typeof === z || A.getModuleId !== void 0);
  }, Tn.typeOf = P, Tn;
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
var NR;
function _P() {
  return NR || (NR = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Symbol.for("react.element"), l = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), h = Symbol.for("react.context"), E = Symbol.for("react.server_context"), x = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), N = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), z = !1, P = !1, A = !1, Y = !1, V = !1, I;
    I = Symbol.for("react.module.reference");
    function $(Se) {
      return !!(typeof Se == "string" || typeof Se == "function" || Se === u || Se === p || V || Se === f || Se === T || Se === N || Y || Se === D || z || P || A || typeof Se == "object" && Se !== null && (Se.$$typeof === O || Se.$$typeof === _ || Se.$$typeof === y || Se.$$typeof === h || Se.$$typeof === x || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Se.$$typeof === I || Se.getModuleId !== void 0));
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
              case T:
              case N:
                return Ct;
              default:
                var _t = Ct && Ct.$$typeof;
                switch (_t) {
                  case E:
                  case h:
                  case x:
                  case O:
                  case _:
                  case y:
                    return _t;
                  default:
                    return Et;
                }
            }
          case l:
            return Et;
        }
      }
    }
    var re = h, G = y, se = i, Te = x, le = u, ge = O, Ee = _, ne = l, fe = p, Ce = f, we = T, Ne = N, ee = !1, de = !1;
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
      return W(Se) === x;
    }
    function it(Se) {
      return W(Se) === u;
    }
    function Rt(Se) {
      return W(Se) === O;
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
      return W(Se) === T;
    }
    function Ot(Se) {
      return W(Se) === N;
    }
    Rn.ContextConsumer = re, Rn.ContextProvider = G, Rn.Element = se, Rn.ForwardRef = Te, Rn.Fragment = le, Rn.Lazy = ge, Rn.Memo = Ee, Rn.Portal = ne, Rn.Profiler = fe, Rn.StrictMode = Ce, Rn.Suspense = we, Rn.SuspenseList = Ne, Rn.isAsyncMode = ae, Rn.isConcurrentMode = ze, Rn.isContextConsumer = De, Rn.isContextProvider = ft, Rn.isElement = dt, Rn.isForwardRef = At, Rn.isFragment = it, Rn.isLazy = Rt, Rn.isMemo = st, Rn.isPortal = Mt, Rn.isProfiler = Gt, Rn.isStrictMode = Ze, Rn.isSuspense = Ft, Rn.isSuspenseList = Ot, Rn.isValidElementType = $, Rn.typeOf = W;
  }()), Rn;
}
process.env.NODE_ENV === "production" ? Mb.exports = RP() : Mb.exports = _P();
var Ky = Mb.exports;
function Mh(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = [];
  return ki.Children.forEach(i, function(f) {
    f == null && !l.keepEmpty || (Array.isArray(f) ? u = u.concat(Mh(f)) : Ky.isFragment(f) && f.props ? u = u.concat(Mh(f.props.children, l)) : u.push(f));
  }), u;
}
var Ob = {}, wE = [], kP = function(l) {
  wE.push(l);
};
function Zd(i, l) {
  if (process.env.NODE_ENV !== "production" && !i && console !== void 0) {
    var u = wE.reduce(function(f, p) {
      return p(f != null ? f : "", "warning");
    }, l);
    u && console.error("Warning: ".concat(u));
  }
}
function MP(i, l) {
  if (process.env.NODE_ENV !== "production" && !i && console !== void 0) {
    var u = wE.reduce(function(f, p) {
      return p(f != null ? f : "", "note");
    }, l);
    u && console.warn("Note: ".concat(u));
  }
}
function ck() {
  Ob = {};
}
function fk(i, l, u) {
  !l && !Ob[u] && (i(!1, u), Ob[u] = !0);
}
function oi(i, l) {
  fk(Zd, i, l);
}
function OP(i, l) {
  fk(MP, i, l);
}
oi.preMessage = kP;
oi.resetWarned = ck;
oi.noteOnce = OP;
var Nb = { exports: {} }, Ti = {}, Ay = { exports: {} }, cb = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var DR;
function NP() {
  return DR || (DR = 1, function(i) {
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
      var h = Date, E = h.now();
      i.unstable_now = function() {
        return h.now() - E;
      };
    }
    var x = [], T = [], N = 1, _ = null, O = 3, D = !1, z = !1, P = !1, A = typeof setTimeout == "function" ? setTimeout : null, Y = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate != "undefined" ? setImmediate : null;
    typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function I(ee) {
      for (var de = u(T); de !== null; ) {
        if (de.callback === null)
          f(T);
        else if (de.startTime <= ee)
          f(T), de.sortIndex = de.expirationTime, l(x, de);
        else
          break;
        de = u(T);
      }
    }
    function $(ee) {
      if (P = !1, I(ee), !z)
        if (u(x) !== null)
          z = !0, we(W);
        else {
          var de = u(T);
          de !== null && Ne($, de.startTime - ee);
        }
    }
    function W(ee, de) {
      z = !1, P && (P = !1, Y(se), se = -1), D = !0;
      var ae = O;
      try {
        for (I(de), _ = u(x); _ !== null && (!(_.expirationTime > de) || ee && !ge()); ) {
          var ze = _.callback;
          if (typeof ze == "function") {
            _.callback = null, O = _.priorityLevel;
            var De = ze(_.expirationTime <= de);
            de = i.unstable_now(), typeof De == "function" ? _.callback = De : _ === u(x) && f(x), I(de);
          } else
            f(x);
          _ = u(x);
        }
        if (_ !== null)
          var ft = !0;
        else {
          var dt = u(T);
          dt !== null && Ne($, dt.startTime - de), ft = !1;
        }
        return ft;
      } finally {
        _ = null, O = ae, D = !1;
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
      z || D || (z = !0, we(W));
    }, i.unstable_forceFrameRate = function(ee) {
      0 > ee || 125 < ee ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Te = 0 < ee ? Math.floor(1e3 / ee) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return O;
    }, i.unstable_getFirstCallbackNode = function() {
      return u(x);
    }, i.unstable_next = function(ee) {
      switch (O) {
        case 1:
        case 2:
        case 3:
          var de = 3;
          break;
        default:
          de = O;
      }
      var ae = O;
      O = de;
      try {
        return ee();
      } finally {
        O = ae;
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
      var ae = O;
      O = ee;
      try {
        return de();
      } finally {
        O = ae;
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
      return De = ae + De, ee = { id: N++, callback: de, priorityLevel: ee, startTime: ae, expirationTime: De, sortIndex: -1 }, ae > ze ? (ee.sortIndex = ae, l(T, ee), u(x) === null && ee === u(T) && (P ? (Y(se), se = -1) : P = !0, Ne($, ae - ze))) : (ee.sortIndex = De, l(x, ee), z || D || (z = !0, we(W))), ee;
    }, i.unstable_shouldYield = ge, i.unstable_wrapCallback = function(ee) {
      var de = O;
      return function() {
        var ae = O;
        O = de;
        try {
          return ee.apply(this, arguments);
        } finally {
          O = ae;
        }
      };
    };
  }(cb)), cb;
}
var fb = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var LR;
function DP() {
  return LR || (LR = 1, function(i) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var l = !1, u = !1, f = 5;
      function p(he, Ie) {
        var We = he.length;
        he.push(Ie), E(he, Ie, We);
      }
      function y(he) {
        return he.length === 0 ? null : he[0];
      }
      function h(he) {
        if (he.length === 0)
          return null;
        var Ie = he[0], We = he.pop();
        return We !== Ie && (he[0] = We, x(he, We, 0)), Ie;
      }
      function E(he, Ie, We) {
        for (var zt = We; zt > 0; ) {
          var Pt = zt - 1 >>> 1, pt = he[Pt];
          if (T(pt, Ie) > 0)
            he[Pt] = Ie, he[zt] = pt, zt = Pt;
          else
            return;
        }
      }
      function x(he, Ie, We) {
        for (var zt = We, Pt = he.length, pt = Pt >>> 1; zt < pt; ) {
          var ht = (zt + 1) * 2 - 1, Mn = he[ht], Ut = ht + 1, Zt = he[Ut];
          if (T(Mn, Ie) < 0)
            Ut < Pt && T(Zt, Mn) < 0 ? (he[zt] = Zt, he[Ut] = Ie, zt = Ut) : (he[zt] = Mn, he[ht] = Ie, zt = ht);
          else if (Ut < Pt && T(Zt, Ie) < 0)
            he[zt] = Zt, he[Ut] = Ie, zt = Ut;
          else
            return;
        }
      }
      function T(he, Ie) {
        var We = he.sortIndex - Ie.sortIndex;
        return We !== 0 ? We : he.id - Ie.id;
      }
      var N = 1, _ = 2, O = 3, D = 4, z = 5;
      function P(he, Ie) {
      }
      var A = typeof performance == "object" && typeof performance.now == "function";
      if (A) {
        var Y = performance;
        i.unstable_now = function() {
          return Y.now();
        };
      } else {
        var V = Date, I = V.now();
        i.unstable_now = function() {
          return V.now() - I;
        };
      }
      var $ = 1073741823, W = -1, re = 250, G = 5e3, se = 1e4, Te = $, le = [], ge = [], Ee = 1, ne = null, fe = O, Ce = !1, we = !1, Ne = !1, ee = typeof setTimeout == "function" ? setTimeout : null, de = typeof clearTimeout == "function" ? clearTimeout : null, ae = typeof setImmediate != "undefined" ? setImmediate : null;
      typeof navigator != "undefined" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ze(he) {
        for (var Ie = y(ge); Ie !== null; ) {
          if (Ie.callback === null)
            h(ge);
          else if (Ie.startTime <= he)
            h(ge), Ie.sortIndex = Ie.expirationTime, p(le, Ie);
          else
            return;
          Ie = y(ge);
        }
      }
      function De(he) {
        if (Ne = !1, ze(he), !we)
          if (y(le) !== null)
            we = !0, $t(ft);
          else {
            var Ie = y(ge);
            Ie !== null && _n(De, Ie.startTime - he);
          }
      }
      function ft(he, Ie) {
        we = !1, Ne && (Ne = !1, kn()), Ce = !0;
        var We = fe;
        try {
          var zt;
          if (!u)
            return dt(he, Ie);
        } finally {
          ne = null, fe = We, Ce = !1;
        }
      }
      function dt(he, Ie) {
        var We = Ie;
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
        return ht !== null && _n(De, ht.startTime - We), !1;
      }
      function At(he, Ie) {
        switch (he) {
          case N:
          case _:
          case O:
          case D:
          case z:
            break;
          default:
            he = O;
        }
        var We = fe;
        fe = he;
        try {
          return Ie();
        } finally {
          fe = We;
        }
      }
      function it(he) {
        var Ie;
        switch (fe) {
          case N:
          case _:
          case O:
            Ie = O;
            break;
          default:
            Ie = fe;
            break;
        }
        var We = fe;
        fe = Ie;
        try {
          return he();
        } finally {
          fe = We;
        }
      }
      function Rt(he) {
        var Ie = fe;
        return function() {
          var We = fe;
          fe = Ie;
          try {
            return he.apply(this, arguments);
          } finally {
            fe = We;
          }
        };
      }
      function st(he, Ie, We) {
        var zt = i.unstable_now(), Pt;
        if (typeof We == "object" && We !== null) {
          var pt = We.delay;
          typeof pt == "number" && pt > 0 ? Pt = zt + pt : Pt = zt;
        } else
          Pt = zt;
        var ht;
        switch (he) {
          case N:
            ht = W;
            break;
          case _:
            ht = re;
            break;
          case z:
            ht = Te;
            break;
          case D:
            ht = se;
            break;
          case O:
          default:
            ht = G;
            break;
        }
        var Mn = Pt + ht, Ut = {
          id: Ee++,
          callback: Ie,
          priorityLevel: he,
          startTime: Pt,
          expirationTime: Mn,
          sortIndex: -1
        };
        return Pt > zt ? (Ut.sortIndex = Pt, p(ge, Ut), y(le) === null && Ut === y(ge) && (Ne ? kn() : Ne = !0, _n(De, Pt - zt))) : (Ut.sortIndex = Mn, p(le, Ut), !we && !Ce && (we = !0, $t(ft))), Ut;
      }
      function Mt() {
      }
      function Gt() {
        !we && !Ce && (we = !0, $t(ft));
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
      var Se = !1, Et = null, Ct = -1, _t = f, Wt = -1;
      function Qe() {
        var he = i.unstable_now() - Wt;
        return !(he < _t);
      }
      function wt() {
      }
      function vt(he) {
        if (he < 0 || he > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        he > 0 ? _t = Math.floor(1e3 / he) : _t = f;
      }
      var ln = function() {
        if (Et !== null) {
          var he = i.unstable_now();
          Wt = he;
          var Ie = !0, We = !0;
          try {
            We = Et(Ie, he);
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
      function $t(he) {
        Et = he, Se || (Se = !0, Je());
      }
      function _n(he, Ie) {
        Ct = ee(function() {
          he(i.unstable_now());
        }, Ie);
      }
      function kn() {
        de(Ct), Ct = -1;
      }
      var cn = wt, fn = null;
      i.unstable_IdlePriority = z, i.unstable_ImmediatePriority = N, i.unstable_LowPriority = D, i.unstable_NormalPriority = O, i.unstable_Profiling = fn, i.unstable_UserBlockingPriority = _, i.unstable_cancelCallback = Ft, i.unstable_continueExecution = Gt, i.unstable_forceFrameRate = vt, i.unstable_getCurrentPriorityLevel = Ot, i.unstable_getFirstCallbackNode = Ze, i.unstable_next = it, i.unstable_pauseExecution = Mt, i.unstable_requestPaint = cn, i.unstable_runWithPriority = At, i.unstable_scheduleCallback = st, i.unstable_shouldYield = Qe, i.unstable_wrapCallback = Rt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(fb)), fb;
}
var AR;
function dk() {
  return AR || (AR = 1, process.env.NODE_ENV === "production" ? Ay.exports = NP() : Ay.exports = DP()), Ay.exports;
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
var zR;
function LP() {
  if (zR)
    return Ti;
  zR = 1;
  var i = ki, l = dk();
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
  var E = !(typeof window == "undefined" || typeof window.document == "undefined" || typeof window.document.createElement == "undefined"), x = Object.prototype.hasOwnProperty, T = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, N = {}, _ = {};
  function O(n) {
    return x.call(_, n) ? !0 : x.call(N, n) ? !1 : T.test(n) ? _[n] = !0 : (N[n] = !0, !1);
  }
  function D(n, r, s, d) {
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
    if (r === null || typeof r == "undefined" || D(n, r, s, d))
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
  function P(n, r, s, d, m, S, w) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = d, this.attributeNamespace = m, this.mustUseProperty = s, this.propertyName = n, this.type = r, this.sanitizeURL = S, this.removeEmptyString = w;
  }
  var A = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    A[n] = new P(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    A[r] = new P(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    A[n] = new P(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    A[n] = new P(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    A[n] = new P(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    A[n] = new P(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    A[n] = new P(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    A[n] = new P(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    A[n] = new P(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Y = /[\-:]([a-z])/g;
  function V(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Y,
      V
    );
    A[r] = new P(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Y, V);
    A[r] = new P(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Y, V);
    A[r] = new P(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    A[n] = new P(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), A.xlinkHref = new P("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    A[n] = new P(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function I(n, r, s, d) {
    var m = A.hasOwnProperty(r) ? A[r] : null;
    (m !== null ? m.type !== 0 : d || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (z(r, s, m, d) && (s = null), d || m === null ? O(r) && (s === null ? n.removeAttribute(r) : n.setAttribute(r, "" + s)) : m.mustUseProperty ? n[m.propertyName] = s === null ? m.type === 3 ? !1 : "" : s : (r = m.attributeName, d = m.attributeNamespace, s === null ? n.removeAttribute(r) : (m = m.type, s = m === 3 || m === 4 && s === !0 ? "" : "" + s, d ? n.setAttributeNS(d, r, s) : n.setAttribute(r, s))));
  }
  var $ = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, W = Symbol.for("react.element"), re = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), se = Symbol.for("react.strict_mode"), Te = Symbol.for("react.profiler"), le = Symbol.for("react.provider"), ge = Symbol.for("react.context"), Ee = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), fe = Symbol.for("react.suspense_list"), Ce = Symbol.for("react.memo"), we = Symbol.for("react.lazy"), Ne = Symbol.for("react.offscreen"), ee = Symbol.iterator;
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
`), w = m.length - 1, L = S.length - 1; 1 <= w && 0 <= L && m[w] !== S[L]; )
          L--;
        for (; 1 <= w && 0 <= L; w--, L--)
          if (m[w] !== S[L]) {
            if (w !== 1 || L !== 1)
              do
                if (w--, L--, 0 > L || m[w] !== S[L]) {
                  var U = `
` + m[w].replace(" at new ", " at ");
                  return n.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", n.displayName)), U;
                }
              while (1 <= w && 0 <= L);
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
      }, set: function(w) {
        d = "" + w, S.call(this, w);
      } }), Object.defineProperty(n, r, { enumerable: s.enumerable }), { getValue: function() {
        return d;
      }, setValue: function(w) {
        d = "" + w;
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
    r = r.checked, r != null && I(n, "checked", r, !1);
  }
  function _t(n, r) {
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
  function $t(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function _n(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? $t(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var kn, cn = function(n) {
    return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(r, s, d, m) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, s, d, m);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (kn = kn || document.createElement("div"), kn.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = kn.firstChild; n.firstChild; )
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
  }, Ie = ["Webkit", "ms", "Moz", "O"];
  Object.keys(he).forEach(function(n) {
    Ie.forEach(function(r) {
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
  function Ut(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Zt = null, Ht = null, tn = null;
  function Kt(n) {
    if (n = nc(n)) {
      if (typeof Zt != "function")
        throw Error(u(280));
      var r = n.stateNode;
      r && (r = nt(r), Zt(n.stateNode, n.type, r));
    }
  }
  function Jt(n) {
    Ht ? tn ? tn.push(n) : tn = [n] : Ht = n;
  }
  function xt() {
    if (Ht) {
      var n = Ht, r = tn;
      if (tn = Ht = null, Kt(n), r)
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
  function It(n, r, s) {
    if (Ye)
      return n(r, s);
    Ye = !0;
    try {
      return jt(n, r, s);
    } finally {
      Ye = !1, (Ht !== null || tn !== null) && (Le(), xt());
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
  if (E)
    try {
      var On = {};
      Object.defineProperty(On, "passive", { get: function() {
        nr = !0;
      } }), window.addEventListener("test", On, On), window.removeEventListener("test", On, On);
    } catch (n) {
      nr = !1;
    }
  function Qr(n, r, s, d, m, S, w, L, U) {
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
  function fr(n, r, s, d, m, S, w, L, U) {
    rr = !1, ar = null, Qr.apply(Ln, arguments);
  }
  function Rr(n, r, s, d, m, S, w, L, U) {
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
  function $a(n) {
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
        for (var w = !1, L = m.child; L; ) {
          if (L === s) {
            w = !0, s = m, d = S;
            break;
          }
          if (L === d) {
            w = !0, d = m, s = S;
            break;
          }
          L = L.sibling;
        }
        if (!w) {
          for (L = S.child; L; ) {
            if (L === s) {
              w = !0, s = S, d = m;
              break;
            }
            if (L === d) {
              w = !0, d = S, s = m;
              break;
            }
            L = L.sibling;
          }
          if (!w)
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
  function Ha(n) {
    return n = An(n), n !== null ? Jo(n) : null;
  }
  function Jo(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Jo(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Bn = l.unstable_scheduleCallback, vo = l.unstable_cancelCallback, Pl = l.unstable_shouldYield, po = l.unstable_requestPaint, dn = l.unstable_now, Fa = l.unstable_getCurrentPriorityLevel, Xr = l.unstable_ImmediatePriority, Nt = l.unstable_UserBlockingPriority, _r = l.unstable_NormalPriority, Vi = l.unstable_LowPriority, la = l.unstable_IdlePriority, Ur = null, ir = null;
  function Mi(n) {
    if (ir && typeof ir.onCommitFiberRoot == "function")
      try {
        ir.onCommitFiberRoot(Ur, n, void 0, (n.current.flags & 128) === 128);
      } catch (r) {
      }
  }
  var Xn = Math.clz32 ? Math.clz32 : Oi, ba = Math.log, ho = Math.LN2;
  function Oi(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (ba(n) / ho | 0) | 0;
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
  function kt(n, r) {
    var s = n.pendingLanes;
    if (s === 0)
      return 0;
    var d = 0, m = n.suspendedLanes, S = n.pingedLanes, w = s & 268435455;
    if (w !== 0) {
      var L = w & ~m;
      L !== 0 ? d = un(L) : (S &= w, S !== 0 && (d = un(S)));
    } else
      w = s & ~m, w !== 0 ? d = un(w) : S !== 0 && (d = un(S));
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
      var w = 31 - Xn(S), L = 1 << w, U = m[w];
      U === -1 ? (!(L & s) || L & d) && (m[w] = vn(L, r)) : U <= r && (n.expiredLanes |= L), S &= ~L;
    }
  }
  function or(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Va() {
    var n = ua;
    return ua <<= 1, !(ua & 4194240) && (ua = 64), n;
  }
  function li(n) {
    for (var r = [], s = 0; 31 > s; s++)
      r.push(n);
    return r;
  }
  function Ba(n, r, s) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Xn(r), n[r] = s;
  }
  function el(n, r) {
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
  var mo, Ea, nn, go, Bi, ct = !1, Ni = [], zn = null, qr = null, Zr = null, yo = /* @__PURE__ */ new Map(), Wn = /* @__PURE__ */ new Map(), be = [], gt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
        yo.delete(r.pointerId);
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
        return yo.set(S, en(yo.get(S) || null, n, r, s, d, m)), !0;
      case "gotpointercapture":
        return S = m.pointerId, Wn.set(S, en(Wn.get(S) || null, n, r, s, d, m)), !0;
    }
    return !1;
  }
  function Ul(n) {
    var r = si(n.target);
    if (r !== null) {
      var s = dr(r);
      if (s !== null) {
        if (r = s.tag, r === 13) {
          if (r = $a(s), r !== null) {
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
  function Il() {
    ct = !1, zn !== null && Wi(zn) && (zn = null), qr !== null && Wi(qr) && (qr = null), Zr !== null && Wi(Zr) && (Zr = null), yo.forEach(zu), Wn.forEach(zu);
  }
  function $s(n, r) {
    n.blockedOn === r && (n.blockedOn = null, ct || (ct = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, Il)));
  }
  function Hs(n) {
    function r(m) {
      return $s(m, n);
    }
    if (0 < Ni.length) {
      $s(Ni[0], n);
      for (var s = 1; s < Ni.length; s++) {
        var d = Ni[s];
        d.blockedOn === n && (d.blockedOn = null);
      }
    }
    for (zn !== null && $s(zn, n), qr !== null && $s(qr, n), Zr !== null && $s(Zr, n), yo.forEach(r), Wn.forEach(r), s = 0; s < be.length; s++)
      d = be[s], d.blockedOn === n && (d.blockedOn = null);
    for (; 0 < be.length && (s = be[0], s.blockedOn === null); )
      Ul(s), s.blockedOn === null && be.shift();
  }
  var Pu = $.ReactCurrentBatchConfig, $l = !0;
  function Vh(n, r, s, d) {
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
    if ($l) {
      var m = ef(n, r, s, d);
      if (m === null)
        vf(n, r, d, Fs, s), sn(n, d);
      else if (gn(m, n, r, s, d))
        d.stopPropagation();
      else if (sn(n, d), r & 4 && -1 < gt.indexOf(n)) {
        for (; m !== null; ) {
          var S = nc(m);
          if (S !== null && mo(S), S = ef(n, r, s, d), S === null && vf(n, r, d, Fs, s), S === m)
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
    if (Fs = null, n = Ut(d), n = si(n), n !== null)
      if (r = dr(n), r === null)
        n = null;
      else if (s = r.tag, s === 13) {
        if (n = $a(r), n !== null)
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
  function lv(n) {
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
          case _r:
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
  var So = null, js = null, Vs = null;
  function uv() {
    if (Vs)
      return Vs;
    var n, r = js, s = r.length, d, m = "value" in So ? So.value : So.textContent, S = m.length;
    for (n = 0; n < s && r[n] === m[n]; n++)
      ;
    var w = s - n;
    for (d = 1; d <= w && r[s - d] === m[S - d]; d++)
      ;
    return Vs = m.slice(n, 1 < d ? 1 - d : void 0);
  }
  function Uu(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function Bs() {
    return !0;
  }
  function Bh() {
    return !1;
  }
  function Ka(n) {
    function r(s, d, m, S, w) {
      this._reactName = s, this._targetInst = m, this.type = d, this.nativeEvent = S, this.target = w, this.currentTarget = null;
      for (var L in n)
        n.hasOwnProperty(L) && (s = n[L], this[L] = s ? s(S) : S[L]);
      return this.isDefaultPrevented = (S.defaultPrevented != null ? S.defaultPrevented : S.returnValue === !1) ? Bs : Bh, this.isPropagationStopped = Bh, this;
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
  var tl = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, tf = Ka(tl), Iu = ae({}, tl, { view: 0, detail: 0 }), Wh = Ka(Iu), nf, sv, Ws, kr = ae({}, Iu, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: vv, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Ws && (Ws && n.type === "mousemove" ? (nf = n.screenX - Ws.screenX, sv = n.screenY - Ws.screenY) : sv = nf = 0, Ws = n), nf);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : sv;
  } }), rf = Ka(kr), Kh = ae({}, kr, { dataTransfer: 0 }), Gh = Ka(Kh), U0 = ae({}, Iu, { relatedTarget: 0 }), nl = Ka(U0), cv = ae({}, tl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Yh = Ka(cv), I0 = ae({}, tl, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), $0 = Ka(I0), H0 = ae({}, tl, { data: 0 }), fv = Ka(H0), dv = {
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
  }, Qh = {
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
  }, Xh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function qh(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Xh[n]) ? !!r[n] : !1;
  }
  function vv() {
    return qh;
  }
  var Co = ae({}, Iu, { key: function(n) {
    if (n.key) {
      var r = dv[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = Uu(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Qh[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: vv, charCode: function(n) {
    return n.type === "keypress" ? Uu(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? Uu(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), F0 = Ka(Co), pv = ae({}, kr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), af = Ka(pv), hv = ae({}, Iu, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: vv }), j0 = Ka(hv), of = ae({}, tl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Zh = Ka(of), wa = ae({}, kr, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), bo = Ka(wa), pr = [9, 13, 27, 32], Di = E && "CompositionEvent" in window, Hl = null;
  E && "documentMode" in document && (Hl = document.documentMode);
  var lf = E && "TextEvent" in window && !Hl, Jh = E && (!Di || Hl && 8 < Hl && 11 >= Hl), $u = " ", em = !1;
  function tm(n, r) {
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
  var Hu = !1;
  function V0(n, r) {
    switch (n) {
      case "compositionend":
        return uf(r);
      case "keypress":
        return r.which !== 32 ? null : (em = !0, $u);
      case "textInput":
        return n = r.data, n === $u && em ? null : n;
      default:
        return null;
    }
  }
  function B0(n, r) {
    if (Hu)
      return n === "compositionend" || !Di && tm(n, r) ? (n = uv(), Vs = js = So = null, Hu = !1, n) : null;
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
        return Jh && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var nm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function rm(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!nm[n.type] : r === "textarea";
  }
  function am(n, r, s, d) {
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
  function im(n, r) {
    if (n === "change")
      return r;
  }
  var mv = !1;
  if (E) {
    var gv;
    if (E) {
      var yv = "oninput" in document;
      if (!yv) {
        var om = document.createElement("div");
        om.setAttribute("oninput", "return;"), yv = typeof om.oninput == "function";
      }
      gv = yv;
    } else
      gv = !1;
    mv = gv && (!document.documentMode || 9 < document.documentMode);
  }
  function lm() {
    Ks && (Ks.detachEvent("onpropertychange", um), Fu = Ks = null);
  }
  function um(n) {
    if (n.propertyName === "value" && Vu(Fu)) {
      var r = [];
      am(r, Fu, n, Ut(n)), It(ju, r);
    }
  }
  function W0(n, r, s) {
    n === "focusin" ? (lm(), Ks = r, Fu = s, Ks.attachEvent("onpropertychange", um)) : n === "focusout" && lm();
  }
  function K0(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Vu(Fu);
  }
  function G0(n, r) {
    if (n === "click")
      return Vu(r);
  }
  function sm(n, r) {
    if (n === "input" || n === "change")
      return Vu(r);
  }
  function Y0(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ui = typeof Object.is == "function" ? Object.is : Y0;
  function Gs(n, r) {
    if (ui(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var s = Object.keys(n), d = Object.keys(r);
    if (s.length !== d.length)
      return !1;
    for (d = 0; d < s.length; d++) {
      var m = s[d];
      if (!x.call(r, m) || !ui(n[m], r[m]))
        return !1;
    }
    return !0;
  }
  function cm(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function fm(n, r) {
    var s = cm(n);
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
      s = cm(s);
    }
  }
  function dm(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? dm(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
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
  function Eo(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function cf(n) {
    var r = sf(), s = n.focusedElem, d = n.selectionRange;
    if (r !== s && s && s.ownerDocument && dm(s.ownerDocument.documentElement, s)) {
      if (d !== null && Eo(s)) {
        if (r = d.start, n = d.end, n === void 0 && (n = r), "selectionStart" in s)
          s.selectionStart = r, s.selectionEnd = Math.min(n, s.value.length);
        else if (n = (r = s.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var m = s.textContent.length, S = Math.min(d.start, m);
          d = d.end === void 0 ? S : Math.min(d.end, m), !n.extend && S > d && (m = d, d = S, S = m), m = fm(s, S);
          var w = fm(
            s,
            d
          );
          m && w && (n.rangeCount !== 1 || n.anchorNode !== m.node || n.anchorOffset !== m.offset || n.focusNode !== w.node || n.focusOffset !== w.offset) && (r = r.createRange(), r.setStart(m.node, m.offset), n.removeAllRanges(), S > d ? (n.addRange(r), n.extend(w.node, w.offset)) : (r.setEnd(w.node, w.offset), n.addRange(r)));
        }
      }
      for (r = [], n = s; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < r.length; s++)
        n = r[s], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var vm = E && "documentMode" in document && 11 >= document.documentMode, Li = null, Sv = null, Ys = null, Cv = !1;
  function pm(n, r, s) {
    var d = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Cv || Li == null || Li !== Ot(d) || (d = Li, "selectionStart" in d && Eo(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Ys && Gs(Ys, d) || (Ys = d, d = Js(Sv, "onSelect"), 0 < d.length && (r = new tf("onSelect", "select", null, r, s), n.push({ event: r, listeners: d }), r.target = Li)));
  }
  function ff(n, r) {
    var s = {};
    return s[n.toLowerCase()] = r.toLowerCase(), s["Webkit" + n] = "webkit" + r, s["Moz" + n] = "moz" + r, s;
  }
  var Fl = { animationend: ff("Animation", "AnimationEnd"), animationiteration: ff("Animation", "AnimationIteration"), animationstart: ff("Animation", "AnimationStart"), transitionend: ff("Transition", "TransitionEnd") }, bv = {}, Ev = {};
  E && (Ev = document.createElement("div").style, "AnimationEvent" in window || (delete Fl.animationend.animation, delete Fl.animationiteration.animation, delete Fl.animationstart.animation), "TransitionEvent" in window || delete Fl.transitionend.transition);
  function Mr(n) {
    if (bv[n])
      return bv[n];
    if (!Fl[n])
      return n;
    var r = Fl[n], s;
    for (s in r)
      if (r.hasOwnProperty(s) && s in Ev)
        return bv[n] = r[s];
    return n;
  }
  var wv = Mr("animationend"), hm = Mr("animationiteration"), mm = Mr("animationstart"), gm = Mr("transitionend"), ym = /* @__PURE__ */ new Map(), Sm = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function wo(n, r) {
    ym.set(n, r), y(r, [n]);
  }
  for (var Qs = 0; Qs < Sm.length; Qs++) {
    var jl = Sm[Qs], Q0 = jl.toLowerCase(), Xs = jl[0].toUpperCase() + jl.slice(1);
    wo(Q0, "on" + Xs);
  }
  wo(wv, "onAnimationEnd"), wo(hm, "onAnimationIteration"), wo(mm, "onAnimationStart"), wo("dblclick", "onDoubleClick"), wo("focusin", "onFocus"), wo("focusout", "onBlur"), wo(gm, "onTransitionEnd"), h("onMouseEnter", ["mouseout", "mouseover"]), h("onMouseLeave", ["mouseout", "mouseover"]), h("onPointerEnter", ["pointerout", "pointerover"]), h("onPointerLeave", ["pointerout", "pointerover"]), y("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), y("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), y("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), y("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), y("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), y("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), X0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));
  function Cm(n, r, s) {
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
          for (var w = d.length - 1; 0 <= w; w--) {
            var L = d[w], U = L.instance, te = L.currentTarget;
            if (L = L.listener, U !== S && m.isPropagationStopped())
              break e;
            Cm(m, L, te), S = U;
          }
        else
          for (w = 0; w < d.length; w++) {
            if (L = d[w], U = L.instance, te = L.currentTarget, L = L.listener, U !== S && m.isPropagationStopped())
              break e;
            Cm(m, L, te), S = U;
          }
      }
    }
    if (yr)
      throw n = Ca, yr = !1, Ca = null, n;
  }
  function Nn(n, r) {
    var s = r[Ov];
    s === void 0 && (s = r[Ov] = /* @__PURE__ */ new Set());
    var d = n + "__bubble";
    s.has(d) || (bm(r, n, 2, !1), s.add(d));
  }
  function rl(n, r, s) {
    var d = 0;
    r && (d |= 4), bm(s, n, d, r);
  }
  var xo = "_reactListening" + Math.random().toString(36).slice(2);
  function Bu(n) {
    if (!n[xo]) {
      n[xo] = !0, f.forEach(function(s) {
        s !== "selectionchange" && (X0.has(s) || rl(s, !1, n), rl(s, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[xo] || (r[xo] = !0, rl("selectionchange", !1, r));
    }
  }
  function bm(n, r, s, d) {
    switch (lv(r)) {
      case 1:
        var m = Vh;
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
          var w = d.tag;
          if (w === 3 || w === 4) {
            var L = d.stateNode.containerInfo;
            if (L === m || L.nodeType === 8 && L.parentNode === m)
              break;
            if (w === 4)
              for (w = d.return; w !== null; ) {
                var U = w.tag;
                if ((U === 3 || U === 4) && (U = w.stateNode.containerInfo, U === m || U.nodeType === 8 && U.parentNode === m))
                  return;
                w = w.return;
              }
            for (; L !== null; ) {
              if (w = si(L), w === null)
                return;
              if (U = w.tag, U === 5 || U === 6) {
                d = S = w;
                continue e;
              }
              L = L.parentNode;
            }
          }
          d = d.return;
        }
    It(function() {
      var te = S, pe = Ut(s), me = [];
      e: {
        var ve = ym.get(n);
        if (ve !== void 0) {
          var Pe = tf, je = n;
          switch (n) {
            case "keypress":
              if (Uu(s) === 0)
                break e;
            case "keydown":
            case "keyup":
              Pe = F0;
              break;
            case "focusin":
              je = "focus", Pe = nl;
              break;
            case "focusout":
              je = "blur", Pe = nl;
              break;
            case "beforeblur":
            case "afterblur":
              Pe = nl;
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
              Pe = Gh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Pe = j0;
              break;
            case wv:
            case hm:
            case mm:
              Pe = Yh;
              break;
            case gm:
              Pe = Zh;
              break;
            case "scroll":
              Pe = Wh;
              break;
            case "wheel":
              Pe = bo;
              break;
            case "copy":
            case "cut":
            case "paste":
              Pe = $0;
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
          for (var F = te, q; F !== null; ) {
            q = F;
            var xe = q.stateNode;
            if (q.tag === 5 && xe !== null && (q = xe, K !== null && (xe = En(F, K), xe != null && Ke.push(Zs(F, xe, q)))), ur)
              break;
            F = F.return;
          }
          0 < Ke.length && (ve = new Pe(ve, je, null, s, pe), me.push({ event: ve, listeners: Ke }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (ve = n === "mouseover" || n === "pointerover", Pe = n === "mouseout" || n === "pointerout", ve && s !== Mn && (je = s.relatedTarget || s.fromElement) && (si(je) || je[To]))
            break e;
          if ((Pe || ve) && (ve = pe.window === pe ? pe : (ve = pe.ownerDocument) ? ve.defaultView || ve.parentWindow : window, Pe ? (je = s.relatedTarget || s.toElement, Pe = te, je = je ? si(je) : null, je !== null && (ur = dr(je), je !== ur || je.tag !== 5 && je.tag !== 6) && (je = null)) : (Pe = null, je = te), Pe !== je)) {
            if (Ke = rf, xe = "onMouseLeave", K = "onMouseEnter", F = "mouse", (n === "pointerout" || n === "pointerover") && (Ke = af, xe = "onPointerLeave", K = "onPointerEnter", F = "pointer"), ur = Pe == null ? ve : Wu(Pe), q = je == null ? ve : Wu(je), ve = new Ke(xe, F + "leave", Pe, s, pe), ve.target = ur, ve.relatedTarget = q, xe = null, si(pe) === te && (Ke = new Ke(K, F + "enter", je, s, pe), Ke.target = q, Ke.relatedTarget = ur, xe = Ke), ur = xe, Pe && je)
              t: {
                for (Ke = Pe, K = je, F = 0, q = Ke; q; q = Vl(q))
                  F++;
                for (q = 0, xe = K; xe; xe = Vl(xe))
                  q++;
                for (; 0 < F - q; )
                  Ke = Vl(Ke), F--;
                for (; 0 < q - F; )
                  K = Vl(K), q--;
                for (; F--; ) {
                  if (Ke === K || K !== null && Ke === K.alternate)
                    break t;
                  Ke = Vl(Ke), K = Vl(K);
                }
                Ke = null;
              }
            else
              Ke = null;
            Pe !== null && xv(me, ve, Pe, Ke, !1), je !== null && ur !== null && xv(me, ur, je, Ke, !0);
          }
        }
        e: {
          if (ve = te ? Wu(te) : window, Pe = ve.nodeName && ve.nodeName.toLowerCase(), Pe === "select" || Pe === "input" && ve.type === "file")
            var Xe = im;
          else if (rm(ve))
            if (mv)
              Xe = sm;
            else {
              Xe = K0;
              var Ve = W0;
            }
          else
            (Pe = ve.nodeName) && Pe.toLowerCase() === "input" && (ve.type === "checkbox" || ve.type === "radio") && (Xe = G0);
          if (Xe && (Xe = Xe(n, te))) {
            am(me, Xe, s, pe);
            break e;
          }
          Ve && Ve(n, ve, te), n === "focusout" && (Ve = ve._wrapperState) && Ve.controlled && ve.type === "number" && Qe(ve, "number", ve.value);
        }
        switch (Ve = te ? Wu(te) : window, n) {
          case "focusin":
            (rm(Ve) || Ve.contentEditable === "true") && (Li = Ve, Sv = te, Ys = null);
            break;
          case "focusout":
            Ys = Sv = Li = null;
            break;
          case "mousedown":
            Cv = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Cv = !1, pm(me, s, pe);
            break;
          case "selectionchange":
            if (vm)
              break;
          case "keydown":
          case "keyup":
            pm(me, s, pe);
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
          Hu ? tm(n, s) && (St = "onCompositionEnd") : n === "keydown" && s.keyCode === 229 && (St = "onCompositionStart");
        St && (Jh && s.locale !== "ko" && (Hu || St !== "onCompositionStart" ? St === "onCompositionEnd" && Hu && (et = uv()) : (So = pe, js = "value" in So ? So.value : So.textContent, Hu = !0)), Ve = Js(te, St), 0 < Ve.length && (St = new fv(St, n, null, s, pe), me.push({ event: St, listeners: Ve }), et ? St.data = et : (et = uf(s), et !== null && (St.data = et)))), (et = lf ? V0(n, s) : B0(n, s)) && (te = Js(te, "onBeforeInput"), 0 < te.length && (pe = new fv("onBeforeInput", "beforeinput", null, s, pe), me.push({ event: pe, listeners: te }), pe.data = et));
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
  function Vl(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function xv(n, r, s, d, m) {
    for (var S = r._reactName, w = []; s !== null && s !== d; ) {
      var L = s, U = L.alternate, te = L.stateNode;
      if (U !== null && U === d)
        break;
      L.tag === 5 && te !== null && (L = te, m ? (U = En(s, S), U != null && w.unshift(Zs(s, U, L))) : m || (U = En(s, S), U != null && w.push(Zs(s, U, L)))), s = s.return;
    }
    w.length !== 0 && n.push({ event: r, listeners: w });
  }
  var Tv = /\r\n?/g, q0 = /\u0000|\uFFFD/g;
  function Rv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Tv, `
`).replace(q0, "");
  }
  function pf(n, r, s) {
    if (r = Rv(r), Rv(n) !== r && s)
      throw Error(u(425));
  }
  function hf() {
  }
  var _v = null, Bl = null;
  function ec(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Wl = typeof setTimeout == "function" ? setTimeout : void 0, Em = typeof clearTimeout == "function" ? clearTimeout : void 0, kv = typeof Promise == "function" ? Promise : void 0, Mv = typeof queueMicrotask == "function" ? queueMicrotask : typeof kv != "undefined" ? function(n) {
    return kv.resolve(null).then(n).catch(Z0);
  } : Wl;
  function Z0(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function al(n, r) {
    var s = r, d = 0;
    do {
      var m = s.nextSibling;
      if (n.removeChild(s), m && m.nodeType === 8)
        if (s = m.data, s === "/$") {
          if (d === 0) {
            n.removeChild(m), Hs(r);
            return;
          }
          d--;
        } else
          s !== "$" && s !== "$?" && s !== "$!" || d++;
      s = m;
    } while (s);
    Hs(r);
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
  var il = Math.random().toString(36).slice(2), Ki = "__reactFiber$" + il, Kl = "__reactProps$" + il, To = "__reactContainer$" + il, Ov = "__reactEvents$" + il, J0 = "__reactListeners$" + il, Nv = "__reactHandles$" + il;
  function si(n) {
    var r = n[Ki];
    if (r)
      return r;
    for (var s = n.parentNode; s; ) {
      if (r = s[To] || s[Ki]) {
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
    return n = n[Ki] || n[To], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Wu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(u(33));
  }
  function nt(n) {
    return n[Kl] || null;
  }
  var ol = [], Pn = -1;
  function Dt(n) {
    return { current: n };
  }
  function yn(n) {
    0 > Pn || (n.current = ol[Pn], ol[Pn] = null, Pn--);
  }
  function Sn(n, r) {
    Pn++, ol[Pn] = n.current, n.current = r;
  }
  var Gi = {}, yt = Dt(Gi), Zn = Dt(!1), xa = Gi;
  function ci(n, r) {
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
  function fi() {
    yn(Zn), yn(yt);
  }
  function ll(n, r, s) {
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
  function wm(n, r, s) {
    var d = n.stateNode;
    if (!d)
      throw Error(u(169));
    s ? (n = rc(n, r, xa), d.__reactInternalMemoizedMergedChildContext = n, yn(Zn), yn(yt), Sn(yt, n)) : yn(Zn), Sn(Zn, s);
  }
  var Ga = null, Or = !1, ac = !1;
  function Dv(n) {
    Ga === null ? Ga = [n] : Ga.push(n);
  }
  function Lv(n) {
    Or = !0, Dv(n);
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
  var ul = [], Ra = 0, Gl = null, Ku = 0, _a = [], Jr = 0, di = null, Ir = 1, Ro = "";
  function Ya(n, r) {
    ul[Ra++] = Ku, ul[Ra++] = Gl, Gl = n, Ku = r;
  }
  function Av(n, r, s) {
    _a[Jr++] = Ir, _a[Jr++] = Ro, _a[Jr++] = di, di = n;
    var d = Ir;
    n = Ro;
    var m = 32 - Xn(d) - 1;
    d &= ~(1 << m), s += 1;
    var S = 32 - Xn(r) + m;
    if (30 < S) {
      var w = m - m % 5;
      S = (d & (1 << w) - 1).toString(32), d >>= w, m -= w, Ir = 1 << 32 - Xn(r) + m | s << m | d, Ro = S + n;
    } else
      Ir = 1 << S | s << m | d, Ro = n;
  }
  function gf(n) {
    n.return !== null && (Ya(n, 1), Av(n, 1, 0));
  }
  function zv(n) {
    for (; n === Gl; )
      Gl = ul[--Ra], ul[Ra] = null, Ku = ul[--Ra], ul[Ra] = null;
    for (; n === di; )
      di = _a[--Jr], _a[Jr] = null, Ro = _a[--Jr], _a[Jr] = null, Ir = _a[--Jr], _a[Jr] = null;
  }
  var Qa = null, ka = null, Un = !1, vi = null;
  function Pv(n, r) {
    var s = Si(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = r, s.return = n, r = n.deletions, r === null ? (n.deletions = [s], n.flags |= 16) : r.push(s);
  }
  function xm(n, r) {
    switch (n.tag) {
      case 5:
        var s = n.type;
        return r = r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Qa = n, ka = Ai(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Qa = n, ka = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (s = di !== null ? { id: Ir, overflow: Ro } : null, n.memoizedState = { dehydrated: r, treeContext: s, retryLane: 1073741824 }, s = Si(18, null, null, 0), s.stateNode = r, s.return = n, n.child = s, Qa = n, ka = null, !0) : !1;
      default:
        return !1;
    }
  }
  function yf(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Sf(n) {
    if (Un) {
      var r = ka;
      if (r) {
        var s = r;
        if (!xm(n, r)) {
          if (yf(n))
            throw Error(u(418));
          r = Ai(s.nextSibling);
          var d = Qa;
          r && xm(n, r) ? Pv(d, s) : (n.flags = n.flags & -4097 | 2, Un = !1, Qa = n);
        }
      } else {
        if (yf(n))
          throw Error(u(418));
        n.flags = n.flags & -4097 | 2, Un = !1, Qa = n;
      }
    }
  }
  function Tm(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Qa = n;
  }
  function Cf(n) {
    if (n !== Qa)
      return !1;
    if (!Un)
      return Tm(n), Un = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ec(n.type, n.memoizedProps)), r && (r = ka)) {
      if (yf(n))
        throw Rm(), Error(u(418));
      for (; r; )
        Pv(n, r), r = Ai(r.nextSibling);
    }
    if (Tm(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(u(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var s = n.data;
            if (s === "/$") {
              if (r === 0) {
                ka = Ai(n.nextSibling);
                break e;
              }
              r--;
            } else
              s !== "$" && s !== "$!" && s !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ka = null;
      }
    } else
      ka = Qa ? Ai(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Rm() {
    for (var n = ka; n; )
      n = Ai(n.nextSibling);
  }
  function Kn() {
    ka = Qa = null, Un = !1;
  }
  function Uv(n) {
    vi === null ? vi = [n] : vi.push(n);
  }
  var bf = $.ReactCurrentBatchConfig;
  function Xa(n, r) {
    if (n && n.defaultProps) {
      r = ae({}, r), n = n.defaultProps;
      for (var s in n)
        r[s] === void 0 && (r[s] = n[s]);
      return r;
    }
    return r;
  }
  var Yi = Dt(null), Ef = null, sl = null, Iv = null;
  function $v() {
    Iv = sl = Ef = null;
  }
  function cl(n) {
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
  function ke(n, r) {
    Ef = n, Iv = sl = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (hr = !0), n.firstContext = null);
  }
  function lr(n) {
    var r = n._currentValue;
    if (Iv !== n)
      if (n = { context: n, memoizedValue: r, next: null }, sl === null) {
        if (Ef === null)
          throw Error(u(308));
        sl = n, Ef.dependencies = { lanes: 0, firstContext: n };
      } else
        sl = sl.next = n;
    return r;
  }
  var $r = null;
  function Hv(n) {
    $r === null ? $r = [n] : $r.push(n);
  }
  function _m(n, r, s, d) {
    var m = r.interleaved;
    return m === null ? (s.next = s, Hv(r)) : (s.next = m.next, m.next = s), r.interleaved = s, _o(n, d);
  }
  function _o(n, r) {
    n.lanes |= r;
    var s = n.alternate;
    for (s !== null && (s.lanes |= r), s = n, n = n.return; n !== null; )
      n.childLanes |= r, s = n.alternate, s !== null && (s.childLanes |= r), s = n, n = n.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var fl = !1;
  function Fv(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Sr(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function ko(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function dl(n, r, s) {
    var d = n.updateQueue;
    if (d === null)
      return null;
    if (d = d.shared, Yt & 2) {
      var m = d.pending;
      return m === null ? r.next = r : (r.next = m.next, m.next = r), d.pending = r, _o(n, s);
    }
    return m = d.interleaved, m === null ? (r.next = r, Hv(d)) : (r.next = m.next, m.next = r), d.interleaved = r, _o(n, s);
  }
  function wf(n, r, s) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (s & 4194240) !== 0)) {
      var d = r.lanes;
      d &= n.pendingLanes, s |= d, r.lanes = s, Wa(n, s);
    }
  }
  function jv(n, r) {
    var s = n.updateQueue, d = n.alternate;
    if (d !== null && (d = d.updateQueue, s === d)) {
      var m = null, S = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var w = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          S === null ? m = S = w : S = S.next = w, s = s.next;
        } while (s !== null);
        S === null ? m = S = r : S = S.next = r;
      } else
        m = S = r;
      s = { baseState: d.baseState, firstBaseUpdate: m, lastBaseUpdate: S, shared: d.shared, effects: d.effects }, n.updateQueue = s;
      return;
    }
    n = s.lastBaseUpdate, n === null ? s.firstBaseUpdate = r : n.next = r, s.lastBaseUpdate = r;
  }
  function vl(n, r, s, d) {
    var m = n.updateQueue;
    fl = !1;
    var S = m.firstBaseUpdate, w = m.lastBaseUpdate, L = m.shared.pending;
    if (L !== null) {
      m.shared.pending = null;
      var U = L, te = U.next;
      U.next = null, w === null ? S = te : w.next = te, w = U;
      var pe = n.alternate;
      pe !== null && (pe = pe.updateQueue, L = pe.lastBaseUpdate, L !== w && (L === null ? pe.firstBaseUpdate = te : L.next = te, pe.lastBaseUpdate = U));
    }
    if (S !== null) {
      var me = m.baseState;
      w = 0, pe = te = U = null, L = S;
      do {
        var ve = L.lane, Pe = L.eventTime;
        if ((d & ve) === ve) {
          pe !== null && (pe = pe.next = {
            eventTime: Pe,
            lane: 0,
            tag: L.tag,
            payload: L.payload,
            callback: L.callback,
            next: null
          });
          e: {
            var je = n, Ke = L;
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
                fl = !0;
            }
          }
          L.callback !== null && L.lane !== 0 && (n.flags |= 64, ve = m.effects, ve === null ? m.effects = [L] : ve.push(L));
        } else
          Pe = { eventTime: Pe, lane: ve, tag: L.tag, payload: L.payload, callback: L.callback, next: null }, pe === null ? (te = pe = Pe, U = me) : pe = pe.next = Pe, w |= ve;
        if (L = L.next, L === null) {
          if (L = m.shared.pending, L === null)
            break;
          ve = L, L = ve.next, ve.next = null, m.lastBaseUpdate = ve, m.shared.pending = null;
        }
      } while (!0);
      if (pe === null && (U = me), m.baseState = U, m.firstBaseUpdate = te, m.lastBaseUpdate = pe, r = m.shared.interleaved, r !== null) {
        m = r;
        do
          w |= m.lane, m = m.next;
        while (m !== r);
      } else
        S === null && (m.shared.lanes = 0);
      Do |= w, n.lanes = w, n.memoizedState = me;
    }
  }
  function Yl(n, r, s) {
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
  var km = new i.Component().refs;
  function Vv(n, r, s, d) {
    r = n.memoizedState, s = s(d, r), s = s == null ? r : ae({}, r, s), n.memoizedState = s, n.lanes === 0 && (n.updateQueue.baseState = s);
  }
  var xf = { isMounted: function(n) {
    return (n = n._reactInternals) ? dr(n) === n : !1;
  }, enqueueSetState: function(n, r, s) {
    n = n._reactInternals;
    var d = ra(), m = mr(n), S = ko(d, m);
    S.payload = r, s != null && (S.callback = s), r = dl(n, S, m), r !== null && (aa(r, n, m, d), wf(r, n, m));
  }, enqueueReplaceState: function(n, r, s) {
    n = n._reactInternals;
    var d = ra(), m = mr(n), S = ko(d, m);
    S.tag = 1, S.payload = r, s != null && (S.callback = s), r = dl(n, S, m), r !== null && (aa(r, n, m, d), wf(r, n, m));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var s = ra(), d = mr(n), m = ko(s, d);
    m.tag = 2, r != null && (m.callback = r), r = dl(n, m, d), r !== null && (aa(r, n, d, s), wf(r, n, d));
  } };
  function Mm(n, r, s, d, m, S, w) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(d, S, w) : r.prototype && r.prototype.isPureReactComponent ? !Gs(s, d) || !Gs(m, S) : !0;
  }
  function Om(n, r, s) {
    var d = !1, m = Gi, S = r.contextType;
    return typeof S == "object" && S !== null ? S = lr(S) : (m = jn(r) ? xa : yt.current, d = r.contextTypes, S = (d = d != null) ? ci(n, m) : Gi), r = new r(s, S), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = xf, n.stateNode = r, r._reactInternals = n, d && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = m, n.__reactInternalMemoizedMaskedChildContext = S), r;
  }
  function Nm(n, r, s, d) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, d), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, d), r.state !== n && xf.enqueueReplaceState(r, r.state, null);
  }
  function Tf(n, r, s, d) {
    var m = n.stateNode;
    m.props = s, m.state = n.memoizedState, m.refs = km, Fv(n);
    var S = r.contextType;
    typeof S == "object" && S !== null ? m.context = lr(S) : (S = jn(r) ? xa : yt.current, m.context = ci(n, S)), m.state = n.memoizedState, S = r.getDerivedStateFromProps, typeof S == "function" && (Vv(n, r, S, s), m.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof m.getSnapshotBeforeUpdate == "function" || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (r = m.state, typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount(), r !== m.state && xf.enqueueReplaceState(m, m.state, null), vl(n, s, m, d), m.state = n.memoizedState), typeof m.componentDidMount == "function" && (n.flags |= 4194308);
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
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === S ? r.ref : (r = function(w) {
          var L = m.refs;
          L === km && (L = m.refs = {}), w === null ? delete L[S] : L[S] = w;
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
  function Dm(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Lm(n) {
    function r(K, F) {
      if (n) {
        var q = K.deletions;
        q === null ? (K.deletions = [F], K.flags |= 16) : q.push(F);
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
      return K = bl(K, F), K.index = 0, K.sibling = null, K;
    }
    function S(K, F, q) {
      return K.index = q, n ? (q = K.alternate, q !== null ? (q = q.index, q < F ? (K.flags |= 2, F) : q) : (K.flags |= 2, F)) : (K.flags |= 1048576, F);
    }
    function w(K) {
      return n && K.alternate === null && (K.flags |= 2), K;
    }
    function L(K, F, q, xe) {
      return F === null || F.tag !== 6 ? (F = wc(q, K.mode, xe), F.return = K, F) : (F = m(F, q), F.return = K, F);
    }
    function U(K, F, q, xe) {
      var Xe = q.type;
      return Xe === G ? pe(K, F, q.props.children, xe, q.key) : F !== null && (F.elementType === Xe || typeof Xe == "object" && Xe !== null && Xe.$$typeof === we && Dm(Xe) === F.type) ? (xe = m(F, q.props), xe.ref = Gu(K, F, q), xe.return = K, xe) : (xe = ad(q.type, q.key, q.props, null, K.mode, xe), xe.ref = Gu(K, F, q), xe.return = K, xe);
    }
    function te(K, F, q, xe) {
      return F === null || F.tag !== 4 || F.stateNode.containerInfo !== q.containerInfo || F.stateNode.implementation !== q.implementation ? (F = vu(q, K.mode, xe), F.return = K, F) : (F = m(F, q.children || []), F.return = K, F);
    }
    function pe(K, F, q, xe, Xe) {
      return F === null || F.tag !== 7 ? (F = du(q, K.mode, xe, Xe), F.return = K, F) : (F = m(F, q), F.return = K, F);
    }
    function me(K, F, q) {
      if (typeof F == "string" && F !== "" || typeof F == "number")
        return F = wc("" + F, K.mode, q), F.return = K, F;
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case W:
            return q = ad(F.type, F.key, F.props, null, K.mode, q), q.ref = Gu(K, null, F), q.return = K, q;
          case re:
            return F = vu(F, K.mode, q), F.return = K, F;
          case we:
            var xe = F._init;
            return me(K, xe(F._payload), q);
        }
        if (wt(F) || de(F))
          return F = du(F, K.mode, q, null), F.return = K, F;
        Rf(K, F);
      }
      return null;
    }
    function ve(K, F, q, xe) {
      var Xe = F !== null ? F.key : null;
      if (typeof q == "string" && q !== "" || typeof q == "number")
        return Xe !== null ? null : L(K, F, "" + q, xe);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case W:
            return q.key === Xe ? U(K, F, q, xe) : null;
          case re:
            return q.key === Xe ? te(K, F, q, xe) : null;
          case we:
            return Xe = q._init, ve(
              K,
              F,
              Xe(q._payload),
              xe
            );
        }
        if (wt(q) || de(q))
          return Xe !== null ? null : pe(K, F, q, xe, null);
        Rf(K, q);
      }
      return null;
    }
    function Pe(K, F, q, xe, Xe) {
      if (typeof xe == "string" && xe !== "" || typeof xe == "number")
        return K = K.get(q) || null, L(F, K, "" + xe, Xe);
      if (typeof xe == "object" && xe !== null) {
        switch (xe.$$typeof) {
          case W:
            return K = K.get(xe.key === null ? q : xe.key) || null, U(F, K, xe, Xe);
          case re:
            return K = K.get(xe.key === null ? q : xe.key) || null, te(F, K, xe, Xe);
          case we:
            var Ve = xe._init;
            return Pe(K, F, q, Ve(xe._payload), Xe);
        }
        if (wt(xe) || de(xe))
          return K = K.get(q) || null, pe(F, K, xe, Xe, null);
        Rf(F, xe);
      }
      return null;
    }
    function je(K, F, q, xe) {
      for (var Xe = null, Ve = null, et = F, St = F = 0, Ar = null; et !== null && St < q.length; St++) {
        et.index > St ? (Ar = et, et = null) : Ar = et.sibling;
        var pn = ve(K, et, q[St], xe);
        if (pn === null) {
          et === null && (et = Ar);
          break;
        }
        n && et && pn.alternate === null && r(K, et), F = S(pn, F, St), Ve === null ? Xe = pn : Ve.sibling = pn, Ve = pn, et = Ar;
      }
      if (St === q.length)
        return s(K, et), Un && Ya(K, St), Xe;
      if (et === null) {
        for (; St < q.length; St++)
          et = me(K, q[St], xe), et !== null && (F = S(et, F, St), Ve === null ? Xe = et : Ve.sibling = et, Ve = et);
        return Un && Ya(K, St), Xe;
      }
      for (et = d(K, et); St < q.length; St++)
        Ar = Pe(et, K, St, q[St], xe), Ar !== null && (n && Ar.alternate !== null && et.delete(Ar.key === null ? St : Ar.key), F = S(Ar, F, St), Ve === null ? Xe = Ar : Ve.sibling = Ar, Ve = Ar);
      return n && et.forEach(function(El) {
        return r(K, El);
      }), Un && Ya(K, St), Xe;
    }
    function Ke(K, F, q, xe) {
      var Xe = de(q);
      if (typeof Xe != "function")
        throw Error(u(150));
      if (q = Xe.call(q), q == null)
        throw Error(u(151));
      for (var Ve = Xe = null, et = F, St = F = 0, Ar = null, pn = q.next(); et !== null && !pn.done; St++, pn = q.next()) {
        et.index > St ? (Ar = et, et = null) : Ar = et.sibling;
        var El = ve(K, et, pn.value, xe);
        if (El === null) {
          et === null && (et = Ar);
          break;
        }
        n && et && El.alternate === null && r(K, et), F = S(El, F, St), Ve === null ? Xe = El : Ve.sibling = El, Ve = El, et = Ar;
      }
      if (pn.done)
        return s(
          K,
          et
        ), Un && Ya(K, St), Xe;
      if (et === null) {
        for (; !pn.done; St++, pn = q.next())
          pn = me(K, pn.value, xe), pn !== null && (F = S(pn, F, St), Ve === null ? Xe = pn : Ve.sibling = pn, Ve = pn);
        return Un && Ya(K, St), Xe;
      }
      for (et = d(K, et); !pn.done; St++, pn = q.next())
        pn = Pe(et, K, St, pn.value, xe), pn !== null && (n && pn.alternate !== null && et.delete(pn.key === null ? St : pn.key), F = S(pn, F, St), Ve === null ? Xe = pn : Ve.sibling = pn, Ve = pn);
      return n && et.forEach(function(SS) {
        return r(K, SS);
      }), Un && Ya(K, St), Xe;
    }
    function ur(K, F, q, xe) {
      if (typeof q == "object" && q !== null && q.type === G && q.key === null && (q = q.props.children), typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case W:
            e: {
              for (var Xe = q.key, Ve = F; Ve !== null; ) {
                if (Ve.key === Xe) {
                  if (Xe = q.type, Xe === G) {
                    if (Ve.tag === 7) {
                      s(K, Ve.sibling), F = m(Ve, q.props.children), F.return = K, K = F;
                      break e;
                    }
                  } else if (Ve.elementType === Xe || typeof Xe == "object" && Xe !== null && Xe.$$typeof === we && Dm(Xe) === Ve.type) {
                    s(K, Ve.sibling), F = m(Ve, q.props), F.ref = Gu(K, Ve, q), F.return = K, K = F;
                    break e;
                  }
                  s(K, Ve);
                  break;
                } else
                  r(K, Ve);
                Ve = Ve.sibling;
              }
              q.type === G ? (F = du(q.props.children, K.mode, xe, q.key), F.return = K, K = F) : (xe = ad(q.type, q.key, q.props, null, K.mode, xe), xe.ref = Gu(K, F, q), xe.return = K, K = xe);
            }
            return w(K);
          case re:
            e: {
              for (Ve = q.key; F !== null; ) {
                if (F.key === Ve)
                  if (F.tag === 4 && F.stateNode.containerInfo === q.containerInfo && F.stateNode.implementation === q.implementation) {
                    s(K, F.sibling), F = m(F, q.children || []), F.return = K, K = F;
                    break e;
                  } else {
                    s(K, F);
                    break;
                  }
                else
                  r(K, F);
                F = F.sibling;
              }
              F = vu(q, K.mode, xe), F.return = K, K = F;
            }
            return w(K);
          case we:
            return Ve = q._init, ur(K, F, Ve(q._payload), xe);
        }
        if (wt(q))
          return je(K, F, q, xe);
        if (de(q))
          return Ke(K, F, q, xe);
        Rf(K, q);
      }
      return typeof q == "string" && q !== "" || typeof q == "number" ? (q = "" + q, F !== null && F.tag === 6 ? (s(K, F.sibling), F = m(F, q), F.return = K, K = F) : (s(K, F), F = wc(q, K.mode, xe), F.return = K, K = F), w(K)) : s(K, F);
    }
    return ur;
  }
  var Yu = Lm(!0), Am = Lm(!1), ic = {}, zi = Dt(ic), oc = Dt(ic), Qu = Dt(ic);
  function Ql(n) {
    if (n === ic)
      throw Error(u(174));
    return n;
  }
  function Bv(n, r) {
    switch (Sn(Qu, r), Sn(oc, n), Sn(zi, ic), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : _n(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = _n(r, n);
    }
    yn(zi), Sn(zi, r);
  }
  function pl() {
    yn(zi), yn(oc), yn(Qu);
  }
  function ot(n) {
    Ql(Qu.current);
    var r = Ql(zi.current), s = _n(r, n.type);
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
  var pi = [];
  function _f() {
    for (var n = 0; n < pi.length; n++)
      pi[n]._workInProgressVersionPrimary = null;
    pi.length = 0;
  }
  var kf = $.ReactCurrentDispatcher, Wv = $.ReactCurrentBatchConfig, Xl = 0, In = null, ue = null, rn = null, ut = !1, Qi = !1, qa = 0, ql = 0;
  function $n() {
    throw Error(u(321));
  }
  function Zl(n, r) {
    if (r === null)
      return !1;
    for (var s = 0; s < r.length && s < n.length; s++)
      if (!ui(n[s], r[s]))
        return !1;
    return !0;
  }
  function hl(n, r, s, d, m, S) {
    if (Xl = S, In = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, kf.current = n === null || n.memoizedState === null ? tS : nS, n = s(d, m), Qi) {
      S = 0;
      do {
        if (Qi = !1, qa = 0, 25 <= S)
          throw Error(u(301));
        S += 1, rn = ue = null, r.updateQueue = null, kf.current = Gv, n = s(d, m);
      } while (Qi);
    }
    if (kf.current = Bf, r = ue !== null && ue.next !== null, Xl = 0, rn = ue = In = null, ut = !1, r)
      throw Error(u(300));
    return n;
  }
  function Jl() {
    var n = qa !== 0;
    return qa = 0, n;
  }
  function hi() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return rn === null ? In.memoizedState = rn = n : rn = rn.next = n, rn;
  }
  function Ma() {
    if (ue === null) {
      var n = In.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = ue.next;
    var r = rn === null ? In.memoizedState : rn.next;
    if (r !== null)
      rn = r, ue = n;
    else {
      if (n === null)
        throw Error(u(310));
      ue = n, n = { memoizedState: ue.memoizedState, baseState: ue.baseState, baseQueue: ue.baseQueue, queue: ue.queue, next: null }, rn === null ? In.memoizedState = rn = n : rn = rn.next = n;
    }
    return rn;
  }
  function eu(n, r) {
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
        var w = m.next;
        m.next = S.next, S.next = w;
      }
      d.baseQueue = m = S, s.pending = null;
    }
    if (m !== null) {
      S = m.next, d = d.baseState;
      var L = w = null, U = null, te = S;
      do {
        var pe = te.lane;
        if ((Xl & pe) === pe)
          U !== null && (U = U.next = { lane: 0, action: te.action, hasEagerState: te.hasEagerState, eagerState: te.eagerState, next: null }), d = te.hasEagerState ? te.eagerState : n(d, te.action);
        else {
          var me = {
            lane: pe,
            action: te.action,
            hasEagerState: te.hasEagerState,
            eagerState: te.eagerState,
            next: null
          };
          U === null ? (L = U = me, w = d) : U = U.next = me, In.lanes |= pe, Do |= pe;
        }
        te = te.next;
      } while (te !== null && te !== S);
      U === null ? w = d : U.next = L, ui(d, r.memoizedState) || (hr = !0), r.memoizedState = d, r.baseState = w, r.baseQueue = U, s.lastRenderedState = d;
    }
    if (n = s.interleaved, n !== null) {
      m = n;
      do
        S = m.lane, In.lanes |= S, Do |= S, m = m.next;
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
      var w = m = m.next;
      do
        S = n(S, w.action), w = w.next;
      while (w !== m);
      ui(S, r.memoizedState) || (hr = !0), r.memoizedState = S, r.baseQueue === null && (r.baseState = S), s.lastRenderedState = S;
    }
    return [S, d];
  }
  function Mf() {
  }
  function Of(n, r) {
    var s = In, d = Ma(), m = r(), S = !ui(d.memoizedState, m);
    if (S && (d.memoizedState = m, hr = !0), d = d.queue, sc(Lf.bind(null, s, d, n), [n]), d.getSnapshot !== r || S || rn !== null && rn.memoizedState.tag & 1) {
      if (s.flags |= 2048, tu(9, Df.bind(null, s, d, m, r), void 0, null), Yn === null)
        throw Error(u(349));
      Xl & 30 || Nf(s, r, m);
    }
    return m;
  }
  function Nf(n, r, s) {
    n.flags |= 16384, n = { getSnapshot: r, value: s }, r = In.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, In.updateQueue = r, r.stores = [n]) : (s = r.stores, s === null ? r.stores = [n] : s.push(n));
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
      return !ui(n, s);
    } catch (d) {
      return !0;
    }
  }
  function zf(n) {
    var r = _o(n, 1);
    r !== null && aa(r, n, 1, -1);
  }
  function Pf(n) {
    var r = hi();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: eu, lastRenderedState: n }, r.queue = n, n = n.dispatch = Vf.bind(null, In, n), [r.memoizedState, n];
  }
  function tu(n, r, s, d) {
    return n = { tag: n, create: r, destroy: s, deps: d, next: null }, r = In.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, In.updateQueue = r, r.lastEffect = n.next = n) : (s = r.lastEffect, s === null ? r.lastEffect = n.next = n : (d = s.next, s.next = n, n.next = d, r.lastEffect = n)), n;
  }
  function Uf() {
    return Ma().memoizedState;
  }
  function nu(n, r, s, d) {
    var m = hi();
    In.flags |= n, m.memoizedState = tu(1 | r, s, void 0, d === void 0 ? null : d);
  }
  function Mo(n, r, s, d) {
    var m = Ma();
    d = d === void 0 ? null : d;
    var S = void 0;
    if (ue !== null) {
      var w = ue.memoizedState;
      if (S = w.destroy, d !== null && Zl(d, w.deps)) {
        m.memoizedState = tu(r, s, S, d);
        return;
      }
    }
    In.flags |= n, m.memoizedState = tu(1 | r, s, S, d);
  }
  function If(n, r) {
    return nu(8390656, 8, n, r);
  }
  function sc(n, r) {
    return Mo(2048, 8, n, r);
  }
  function $f(n, r) {
    return Mo(4, 2, n, r);
  }
  function Hf(n, r) {
    return Mo(4, 4, n, r);
  }
  function Kv(n, r) {
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
    return s = s != null ? s.concat([n]) : null, Mo(4, 4, Kv.bind(null, r, n), s);
  }
  function Ff() {
  }
  function qu(n, r) {
    var s = Ma();
    r = r === void 0 ? null : r;
    var d = s.memoizedState;
    return d !== null && r !== null && Zl(r, d[1]) ? d[0] : (s.memoizedState = [n, r], n);
  }
  function ml(n, r) {
    var s = Ma();
    r = r === void 0 ? null : r;
    var d = s.memoizedState;
    return d !== null && r !== null && Zl(r, d[1]) ? d[0] : (n = n(), s.memoizedState = [n, r], n);
  }
  function Oa(n, r, s) {
    return Xl & 21 ? (ui(s, r) || (s = Va(), In.lanes |= s, Do |= s, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, hr = !0), n.memoizedState = s);
  }
  function eS(n, r) {
    var s = Vt;
    Vt = s !== 0 && 4 > s ? s : 4, n(!0);
    var d = Wv.transition;
    Wv.transition = {};
    try {
      n(!1), r();
    } finally {
      Vt = s, Wv.transition = d;
    }
  }
  function Dn() {
    return Ma().memoizedState;
  }
  function jf(n, r, s) {
    var d = mr(n);
    if (s = { lane: d, action: s, hasEagerState: !1, eagerState: null, next: null }, Zu(n))
      cc(r, s);
    else if (s = _m(n, r, s, d), s !== null) {
      var m = ra();
      aa(s, n, d, m), zm(s, r, d);
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
          var w = r.lastRenderedState, L = S(w, s);
          if (m.hasEagerState = !0, m.eagerState = L, ui(L, w)) {
            var U = r.interleaved;
            U === null ? (m.next = m, Hv(r)) : (m.next = U.next, U.next = m), r.interleaved = m;
            return;
          }
        } catch (te) {
        } finally {
        }
      s = _m(n, r, m, d), s !== null && (m = ra(), aa(s, n, d, m), zm(s, r, d));
    }
  }
  function Zu(n) {
    var r = n.alternate;
    return n === In || r !== null && r === In;
  }
  function cc(n, r) {
    Qi = ut = !0;
    var s = n.pending;
    s === null ? r.next = r : (r.next = s.next, s.next = r), n.pending = r;
  }
  function zm(n, r, s) {
    if (s & 4194240) {
      var d = r.lanes;
      d &= n.pendingLanes, s |= d, r.lanes = s, Wa(n, s);
    }
  }
  var Bf = { readContext: lr, useCallback: $n, useContext: $n, useEffect: $n, useImperativeHandle: $n, useInsertionEffect: $n, useLayoutEffect: $n, useMemo: $n, useReducer: $n, useRef: $n, useState: $n, useDebugValue: $n, useDeferredValue: $n, useTransition: $n, useMutableSource: $n, useSyncExternalStore: $n, useId: $n, unstable_isNewReconciler: !1 }, tS = { readContext: lr, useCallback: function(n, r) {
    return hi().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: lr, useEffect: If, useImperativeHandle: function(n, r, s) {
    return s = s != null ? s.concat([n]) : null, nu(
      4194308,
      4,
      Kv.bind(null, r, n),
      s
    );
  }, useLayoutEffect: function(n, r) {
    return nu(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return nu(4, 2, n, r);
  }, useMemo: function(n, r) {
    var s = hi();
    return r = r === void 0 ? null : r, n = n(), s.memoizedState = [n, r], n;
  }, useReducer: function(n, r, s) {
    var d = hi();
    return r = s !== void 0 ? s(r) : r, d.memoizedState = d.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, d.queue = n, n = n.dispatch = jf.bind(null, In, n), [d.memoizedState, n];
  }, useRef: function(n) {
    var r = hi();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Pf, useDebugValue: Ff, useDeferredValue: function(n) {
    return hi().memoizedState = n;
  }, useTransition: function() {
    var n = Pf(!1), r = n[0];
    return n = eS.bind(null, n[1]), hi().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, s) {
    var d = In, m = hi();
    if (Un) {
      if (s === void 0)
        throw Error(u(407));
      s = s();
    } else {
      if (s = r(), Yn === null)
        throw Error(u(349));
      Xl & 30 || Nf(d, r, s);
    }
    m.memoizedState = s;
    var S = { value: s, getSnapshot: r };
    return m.queue = S, If(Lf.bind(
      null,
      d,
      S,
      n
    ), [n]), d.flags |= 2048, tu(9, Df.bind(null, d, S, s, r), void 0, null), s;
  }, useId: function() {
    var n = hi(), r = Yn.identifierPrefix;
    if (Un) {
      var s = Ro, d = Ir;
      s = (d & ~(1 << 32 - Xn(d) - 1)).toString(32) + s, r = ":" + r + "R" + s, s = qa++, 0 < s && (r += "H" + s.toString(32)), r += ":";
    } else
      s = ql++, r = ":" + r + "r" + s.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, nS = {
    readContext: lr,
    useCallback: qu,
    useContext: lr,
    useEffect: sc,
    useImperativeHandle: Xu,
    useInsertionEffect: $f,
    useLayoutEffect: Hf,
    useMemo: ml,
    useReducer: lc,
    useRef: Uf,
    useState: function() {
      return lc(eu);
    },
    useDebugValue: Ff,
    useDeferredValue: function(n) {
      var r = Ma();
      return Oa(r, ue.memoizedState, n);
    },
    useTransition: function() {
      var n = lc(eu)[0], r = Ma().memoizedState;
      return [n, r];
    },
    useMutableSource: Mf,
    useSyncExternalStore: Of,
    useId: Dn,
    unstable_isNewReconciler: !1
  }, Gv = { readContext: lr, useCallback: qu, useContext: lr, useEffect: sc, useImperativeHandle: Xu, useInsertionEffect: $f, useLayoutEffect: Hf, useMemo: ml, useReducer: uc, useRef: Uf, useState: function() {
    return uc(eu);
  }, useDebugValue: Ff, useDeferredValue: function(n) {
    var r = Ma();
    return ue === null ? r.memoizedState = n : Oa(r, ue.memoizedState, n);
  }, useTransition: function() {
    var n = uc(eu)[0], r = Ma().memoizedState;
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
  var rS = typeof WeakMap == "function" ? WeakMap : Map;
  function Pm(n, r, s) {
    s = ko(-1, s), s.tag = 3, s.payload = { element: null };
    var d = r.value;
    return s.callback = function() {
      Zf || (Zf = !0, lu = d), Wf(n, r);
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
      var w = r.stack;
      this.componentDidCatch(r.value, { componentStack: w !== null ? w : "" });
    }), s;
  }
  function Um(n, r, s) {
    var d = n.pingCache;
    if (d === null) {
      d = n.pingCache = new rS();
      var m = /* @__PURE__ */ new Set();
      d.set(r, m);
    } else
      m = d.get(r), m === void 0 && (m = /* @__PURE__ */ new Set(), d.set(r, m));
    m.has(s) || (m.add(s), n = cS.bind(null, n, r, s), r.then(n, n));
  }
  function Yv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Qv(n, r, s, d, m) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = m, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = ko(-1, 1), r.tag = 2, dl(s, r, 1))), s.lanes |= 1), n);
  }
  var aS = $.ReactCurrentOwner, hr = !1;
  function Cr(n, r, s, d) {
    r.child = n === null ? Am(r, null, s, d) : Yu(r, n.child, s, d);
  }
  function gl(n, r, s, d, m) {
    s = s.render;
    var S = r.ref;
    return ke(r, m), d = hl(n, r, s, d, S, m), s = Jl(), n !== null && !hr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~m, Hr(n, r, m)) : (Un && s && gf(r), r.flags |= 1, Cr(n, r, d, m), r.child);
  }
  function Kf(n, r, s, d, m) {
    if (n === null) {
      var S = s.type;
      return typeof S == "function" && !pp(S) && S.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15, r.type = S, Na(n, r, S, d, m)) : (n = ad(s.type, null, d, r, r.mode, m), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (S = n.child, !(n.lanes & m)) {
      var w = S.memoizedProps;
      if (s = s.compare, s = s !== null ? s : Gs, s(w, d) && n.ref === r.ref)
        return Hr(n, r, m);
    }
    return r.flags |= 1, n = bl(S, d), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Na(n, r, s, d, m) {
    if (n !== null) {
      var S = n.memoizedProps;
      if (Gs(S, d) && n.ref === r.ref)
        if (hr = !1, r.pendingProps = d = S, (n.lanes & m) !== 0)
          n.flags & 131072 && (hr = !0);
        else
          return r.lanes = n.lanes, Hr(n, r, m);
    }
    return es(n, r, s, d, m);
  }
  function ru(n, r, s) {
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
    return S = ci(r, S), ke(r, m), s = hl(n, r, s, d, S, m), d = Jl(), n !== null && !hr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~m, Hr(n, r, m)) : (Un && d && gf(r), r.flags |= 1, Cr(n, r, s, m), r.child);
  }
  function Xv(n, r, s, d, m) {
    if (jn(s)) {
      var S = !0;
      mf(r);
    } else
      S = !1;
    if (ke(r, m), r.stateNode === null)
      ea(n, r), Om(r, s, d), Tf(r, s, d, m), d = !0;
    else if (n === null) {
      var w = r.stateNode, L = r.memoizedProps;
      w.props = L;
      var U = w.context, te = s.contextType;
      typeof te == "object" && te !== null ? te = lr(te) : (te = jn(s) ? xa : yt.current, te = ci(r, te));
      var pe = s.getDerivedStateFromProps, me = typeof pe == "function" || typeof w.getSnapshotBeforeUpdate == "function";
      me || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (L !== d || U !== te) && Nm(r, w, d, te), fl = !1;
      var ve = r.memoizedState;
      w.state = ve, vl(r, d, w, m), U = r.memoizedState, L !== d || ve !== U || Zn.current || fl ? (typeof pe == "function" && (Vv(r, s, pe, d), U = r.memoizedState), (L = fl || Mm(r, s, L, d, ve, U, te)) ? (me || typeof w.UNSAFE_componentWillMount != "function" && typeof w.componentWillMount != "function" || (typeof w.componentWillMount == "function" && w.componentWillMount(), typeof w.UNSAFE_componentWillMount == "function" && w.UNSAFE_componentWillMount()), typeof w.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = d, r.memoizedState = U), w.props = d, w.state = U, w.context = te, d = L) : (typeof w.componentDidMount == "function" && (r.flags |= 4194308), d = !1);
    } else {
      w = r.stateNode, Sr(n, r), L = r.memoizedProps, te = r.type === r.elementType ? L : Xa(r.type, L), w.props = te, me = r.pendingProps, ve = w.context, U = s.contextType, typeof U == "object" && U !== null ? U = lr(U) : (U = jn(s) ? xa : yt.current, U = ci(r, U));
      var Pe = s.getDerivedStateFromProps;
      (pe = typeof Pe == "function" || typeof w.getSnapshotBeforeUpdate == "function") || typeof w.UNSAFE_componentWillReceiveProps != "function" && typeof w.componentWillReceiveProps != "function" || (L !== me || ve !== U) && Nm(r, w, d, U), fl = !1, ve = r.memoizedState, w.state = ve, vl(r, d, w, m);
      var je = r.memoizedState;
      L !== me || ve !== je || Zn.current || fl ? (typeof Pe == "function" && (Vv(r, s, Pe, d), je = r.memoizedState), (te = fl || Mm(r, s, te, d, ve, je, U) || !1) ? (pe || typeof w.UNSAFE_componentWillUpdate != "function" && typeof w.componentWillUpdate != "function" || (typeof w.componentWillUpdate == "function" && w.componentWillUpdate(d, je, U), typeof w.UNSAFE_componentWillUpdate == "function" && w.UNSAFE_componentWillUpdate(d, je, U)), typeof w.componentDidUpdate == "function" && (r.flags |= 4), typeof w.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof w.componentDidUpdate != "function" || L === n.memoizedProps && ve === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || L === n.memoizedProps && ve === n.memoizedState || (r.flags |= 1024), r.memoizedProps = d, r.memoizedState = je), w.props = d, w.state = je, w.context = U, d = te) : (typeof w.componentDidUpdate != "function" || L === n.memoizedProps && ve === n.memoizedState || (r.flags |= 4), typeof w.getSnapshotBeforeUpdate != "function" || L === n.memoizedProps && ve === n.memoizedState || (r.flags |= 1024), d = !1);
    }
    return Im(n, r, s, d, S, m);
  }
  function Im(n, r, s, d, m, S) {
    Lt(n, r);
    var w = (r.flags & 128) !== 0;
    if (!d && !w)
      return m && wm(r, s, !1), Hr(n, r, S);
    d = r.stateNode, aS.current = r;
    var L = w && typeof s.getDerivedStateFromError != "function" ? null : d.render();
    return r.flags |= 1, n !== null && w ? (r.child = Yu(r, n.child, null, S), r.child = Yu(r, null, L, S)) : Cr(n, r, L, S), r.memoizedState = d.state, m && wm(r, s, !0), r.child;
  }
  function $m(n) {
    var r = n.stateNode;
    r.pendingContext ? ll(n, r.pendingContext, r.pendingContext !== r.context) : r.context && ll(n, r.context, !1), Bv(n, r.containerInfo);
  }
  function Gf(n, r, s, d, m) {
    return Kn(), Uv(m), r.flags |= 256, Cr(n, r, s, d), r.child;
  }
  var au = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qv(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Zv(n, r, s) {
    var d = r.pendingProps, m = lt.current, S = !1, w = (r.flags & 128) !== 0, L;
    if ((L = w) || (L = n !== null && n.memoizedState === null ? !1 : (m & 2) !== 0), L ? (S = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (m |= 1), Sn(lt, m & 1), n === null)
      return Sf(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (w = d.children, n = d.fallback, S ? (d = r.mode, S = r.child, w = { mode: "hidden", children: w }, !(d & 1) && S !== null ? (S.childLanes = 0, S.pendingProps = w) : S = Ec(w, d, 0, null), n = du(n, d, s, null), S.return = r, n.return = r, S.sibling = n, r.child = S, r.child.memoizedState = qv(s), r.memoizedState = au, n) : Jv(r, w));
    if (m = n.memoizedState, m !== null && (L = m.dehydrated, L !== null))
      return iS(n, r, w, d, L, m, s);
    if (S) {
      S = d.fallback, w = r.mode, m = n.child, L = m.sibling;
      var U = { mode: "hidden", children: d.children };
      return !(w & 1) && r.child !== m ? (d = r.child, d.childLanes = 0, d.pendingProps = U, r.deletions = null) : (d = bl(m, U), d.subtreeFlags = m.subtreeFlags & 14680064), L !== null ? S = bl(L, S) : (S = du(S, w, s, null), S.flags |= 2), S.return = r, d.return = r, d.sibling = S, r.child = d, d = S, S = r.child, w = n.child.memoizedState, w = w === null ? qv(s) : { baseLanes: w.baseLanes | s, cachePool: null, transitions: w.transitions }, S.memoizedState = w, S.childLanes = n.childLanes & ~s, r.memoizedState = au, d;
    }
    return S = n.child, n = S.sibling, d = bl(S, { mode: "visible", children: d.children }), !(r.mode & 1) && (d.lanes = s), d.return = r, d.sibling = null, n !== null && (s = r.deletions, s === null ? (r.deletions = [n], r.flags |= 16) : s.push(n)), r.child = d, r.memoizedState = null, d;
  }
  function Jv(n, r) {
    return r = Ec({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ts(n, r, s, d) {
    return d !== null && Uv(d), Yu(r, n.child, null, s), n = Jv(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function iS(n, r, s, d, m, S, w) {
    if (s)
      return r.flags & 256 ? (r.flags &= -257, d = fc(Error(u(422))), ts(n, r, w, d)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (S = d.fallback, m = r.mode, d = Ec({ mode: "visible", children: d.children }, m, 0, null), S = du(S, m, w, null), S.flags |= 2, d.return = r, S.return = r, d.sibling = S, r.child = d, r.mode & 1 && Yu(r, n.child, null, w), r.child.memoizedState = qv(w), r.memoizedState = au, S);
    if (!(r.mode & 1))
      return ts(n, r, w, null);
    if (m.data === "$!") {
      if (d = m.nextSibling && m.nextSibling.dataset, d)
        var L = d.dgst;
      return d = L, S = Error(u(419)), d = fc(S, d, void 0), ts(n, r, w, d);
    }
    if (L = (w & n.childLanes) !== 0, hr || L) {
      if (d = Yn, d !== null) {
        switch (w & -w) {
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
        m = m & (d.suspendedLanes | w) ? 0 : m, m !== 0 && m !== S.retryLane && (S.retryLane = m, _o(n, m), aa(d, n, m, -1));
      }
      return fp(), d = fc(Error(u(421))), ts(n, r, w, d);
    }
    return m.data === "$?" ? (r.flags |= 128, r.child = n.child, r = fS.bind(null, n), m._reactRetry = r, null) : (n = S.treeContext, ka = Ai(m.nextSibling), Qa = r, Un = !0, vi = null, n !== null && (_a[Jr++] = Ir, _a[Jr++] = Ro, _a[Jr++] = di, Ir = n.id, Ro = n.overflow, di = r), r = Jv(r, d.children), r.flags |= 4096, r);
  }
  function ep(n, r, s) {
    n.lanes |= r;
    var d = n.alternate;
    d !== null && (d.lanes |= r), Nr(n.return, r, s);
  }
  function Yf(n, r, s, d, m) {
    var S = n.memoizedState;
    S === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: d, tail: s, tailMode: m } : (S.isBackwards = r, S.rendering = null, S.renderingStartTime = 0, S.last = d, S.tail = s, S.tailMode = m);
  }
  function tp(n, r, s) {
    var d = r.pendingProps, m = d.revealOrder, S = d.tail;
    if (Cr(n, r, d.children, s), d = lt.current, d & 2)
      d = d & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && ep(n, s, r);
            else if (n.tag === 19)
              ep(n, s, r);
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
  function Hr(n, r, s) {
    if (n !== null && (r.dependencies = n.dependencies), Do |= r.lanes, !(s & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(u(153));
    if (r.child !== null) {
      for (n = r.child, s = bl(n, n.pendingProps), r.child = s, s.return = r; n.sibling !== null; )
        n = n.sibling, s = s.sibling = bl(n, n.pendingProps), s.return = r;
      s.sibling = null;
    }
    return r.child;
  }
  function Oo(n, r, s) {
    switch (r.tag) {
      case 3:
        $m(r), Kn();
        break;
      case 5:
        ot(r);
        break;
      case 1:
        jn(r.type) && mf(r);
        break;
      case 4:
        Bv(r, r.stateNode.containerInfo);
        break;
      case 10:
        var d = r.type._context, m = r.memoizedProps.value;
        Sn(Yi, d._currentValue), d._currentValue = m;
        break;
      case 13:
        if (d = r.memoizedState, d !== null)
          return d.dehydrated !== null ? (Sn(lt, lt.current & 1), r.flags |= 128, null) : s & r.child.childLanes ? Zv(n, r, s) : (Sn(lt, lt.current & 1), n = Hr(n, r, s), n !== null ? n.sibling : null);
        Sn(lt, lt.current & 1);
        break;
      case 19:
        if (d = (s & r.childLanes) !== 0, n.flags & 128) {
          if (d)
            return tp(n, r, s);
          r.flags |= 128;
        }
        if (m = r.memoizedState, m !== null && (m.rendering = null, m.tail = null, m.lastEffect = null), Sn(lt, lt.current), d)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, ru(n, r, s);
    }
    return Hr(n, r, s);
  }
  var vc, iu, mi, br;
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
  }, iu = function() {
  }, mi = function(n, r, s, d) {
    var m = n.memoizedProps;
    if (m !== d) {
      n = r.stateNode, Ql(zi.current);
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
      var w;
      s = null;
      for (te in m)
        if (!d.hasOwnProperty(te) && m.hasOwnProperty(te) && m[te] != null)
          if (te === "style") {
            var L = m[te];
            for (w in L)
              L.hasOwnProperty(w) && (s || (s = {}), s[w] = "");
          } else
            te !== "dangerouslySetInnerHTML" && te !== "children" && te !== "suppressContentEditableWarning" && te !== "suppressHydrationWarning" && te !== "autoFocus" && (p.hasOwnProperty(te) ? S || (S = []) : (S = S || []).push(te, null));
      for (te in d) {
        var U = d[te];
        if (L = m != null ? m[te] : void 0, d.hasOwnProperty(te) && U !== L && (U != null || L != null))
          if (te === "style")
            if (L) {
              for (w in L)
                !L.hasOwnProperty(w) || U && U.hasOwnProperty(w) || (s || (s = {}), s[w] = "");
              for (w in U)
                U.hasOwnProperty(w) && L[w] !== U[w] && (s || (s = {}), s[w] = U[w]);
            } else
              s || (S || (S = []), S.push(
                te,
                s
              )), s = U;
          else
            te === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, L = L ? L.__html : void 0, U != null && L !== U && (S = S || []).push(te, U)) : te === "children" ? typeof U != "string" && typeof U != "number" || (S = S || []).push(te, "" + U) : te !== "suppressContentEditableWarning" && te !== "suppressHydrationWarning" && (p.hasOwnProperty(te) ? (U != null && te === "onScroll" && Nn("scroll", n), S || L === U || (S = [])) : (S = S || []).push(te, U));
      }
      s && (S = S || []).push("style", s);
      var te = S;
      (r.updateQueue = te) && (r.flags |= 4);
    }
  }, br = function(n, r, s, d) {
    s !== d && (r.flags |= 4);
  };
  function pc(n, r) {
    if (!Un)
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
  function oS(n, r, s) {
    var d = r.pendingProps;
    switch (zv(r), r.tag) {
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
        return jn(r.type) && fi(), ta(r), null;
      case 3:
        return d = r.stateNode, pl(), yn(Zn), yn(yt), _f(), d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null), (n === null || n.child === null) && (Cf(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, vi !== null && (bc(vi), vi = null))), iu(n, r), ta(r), null;
      case 5:
        Bt(r);
        var m = Ql(Qu.current);
        if (s = r.type, n !== null && r.stateNode != null)
          mi(n, r, s, d, m), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!d) {
            if (r.stateNode === null)
              throw Error(u(166));
            return ta(r), null;
          }
          if (n = Ql(zi.current), Cf(r)) {
            d = r.stateNode, s = r.type;
            var S = r.memoizedProps;
            switch (d[Ki] = r, d[Kl] = S, n = (r.mode & 1) !== 0, s) {
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
            for (var w in S)
              if (S.hasOwnProperty(w)) {
                var L = S[w];
                w === "children" ? typeof L == "string" ? d.textContent !== L && (S.suppressHydrationWarning !== !0 && pf(d.textContent, L, n), m = ["children", L]) : typeof L == "number" && d.textContent !== "" + L && (S.suppressHydrationWarning !== !0 && pf(
                  d.textContent,
                  L,
                  n
                ), m = ["children", "" + L]) : p.hasOwnProperty(w) && L != null && w === "onScroll" && Nn("scroll", d);
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
            w = m.nodeType === 9 ? m : m.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = $t(s)), n === "http://www.w3.org/1999/xhtml" ? s === "script" ? (n = w.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof d.is == "string" ? n = w.createElement(s, { is: d.is }) : (n = w.createElement(s), s === "select" && (w = n, d.multiple ? w.multiple = !0 : d.size && (w.size = d.size))) : n = w.createElementNS(n, s), n[Ki] = r, n[Kl] = d, vc(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (w = ht(s, d), s) {
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
              pt(s, m), L = m;
              for (S in L)
                if (L.hasOwnProperty(S)) {
                  var U = L[S];
                  S === "style" ? zt(n, U) : S === "dangerouslySetInnerHTML" ? (U = U ? U.__html : void 0, U != null && cn(n, U)) : S === "children" ? typeof U == "string" ? (s !== "textarea" || U !== "") && fn(n, U) : typeof U == "number" && fn(n, "" + U) : S !== "suppressContentEditableWarning" && S !== "suppressHydrationWarning" && S !== "autoFocus" && (p.hasOwnProperty(S) ? U != null && S === "onScroll" && Nn("scroll", n) : U != null && I(n, S, U, w));
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
          if (s = Ql(Qu.current), Ql(zi.current), Cf(r)) {
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
          if (Un && ka !== null && r.mode & 1 && !(r.flags & 128))
            Rm(), Kn(), r.flags |= 98560, S = !1;
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
            vi !== null && (bc(vi), vi = null), S = !0;
          if (!S)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = s, r) : (d = d !== null, d !== (n !== null && n.memoizedState !== null) && d && (r.child.flags |= 8192, r.mode & 1 && (n === null || lt.current & 1 ? wr === 0 && (wr = 3) : fp())), r.updateQueue !== null && (r.flags |= 4), ta(r), null);
      case 4:
        return pl(), iu(n, r), n === null && Bu(r.stateNode.containerInfo), ta(r), null;
      case 10:
        return cl(r.type._context), ta(r), null;
      case 17:
        return jn(r.type) && fi(), ta(r), null;
      case 19:
        if (yn(lt), S = r.memoizedState, S === null)
          return ta(r), null;
        if (d = (r.flags & 128) !== 0, w = S.rendering, w === null)
          if (d)
            pc(S, !1);
          else {
            if (wr !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (w = Gn(n), w !== null) {
                  for (r.flags |= 128, pc(S, !1), d = w.updateQueue, d !== null && (r.updateQueue = d, r.flags |= 4), r.subtreeFlags = 0, d = s, s = r.child; s !== null; )
                    S = s, n = d, S.flags &= 14680066, w = S.alternate, w === null ? (S.childLanes = 0, S.lanes = n, S.child = null, S.subtreeFlags = 0, S.memoizedProps = null, S.memoizedState = null, S.updateQueue = null, S.dependencies = null, S.stateNode = null) : (S.childLanes = w.childLanes, S.lanes = w.lanes, S.child = w.child, S.subtreeFlags = 0, S.deletions = null, S.memoizedProps = w.memoizedProps, S.memoizedState = w.memoizedState, S.updateQueue = w.updateQueue, S.type = w.type, n = w.dependencies, S.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), s = s.sibling;
                  return Sn(lt, lt.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            S.tail !== null && dn() > us && (r.flags |= 128, d = !0, pc(S, !1), r.lanes = 4194304);
          }
        else {
          if (!d)
            if (n = Gn(w), n !== null) {
              if (r.flags |= 128, d = !0, s = n.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), pc(S, !0), S.tail === null && S.tailMode === "hidden" && !w.alternate && !Un)
                return ta(r), null;
            } else
              2 * dn() - S.renderingStartTime > us && s !== 1073741824 && (r.flags |= 128, d = !0, pc(S, !1), r.lanes = 4194304);
          S.isBackwards ? (w.sibling = r.child, r.child = w) : (s = S.last, s !== null ? s.sibling = w : r.child = w, S.last = w);
        }
        return S.tail !== null ? (r = S.tail, S.rendering = r, S.tail = r.sibling, S.renderingStartTime = dn(), r.sibling = null, s = lt.current, Sn(lt, d ? s & 1 | 2 : s & 1), r) : (ta(r), null);
      case 22:
      case 23:
        return cp(), d = r.memoizedState !== null, n !== null && n.memoizedState !== null !== d && (r.flags |= 8192), d && r.mode & 1 ? Za & 1073741824 && (ta(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ta(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(u(156, r.tag));
  }
  function np(n, r) {
    switch (zv(r), r.tag) {
      case 1:
        return jn(r.type) && fi(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return pl(), yn(Zn), yn(yt), _f(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
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
        return pl(), null;
      case 10:
        return cl(r.type._context), null;
      case 22:
      case 23:
        return cp(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hc = !1, Er = !1, Hm = typeof WeakSet == "function" ? WeakSet : Set, Fe = null;
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
  var Fm = !1;
  function jm(n, r) {
    if (_v = $l, n = sf(), Eo(n)) {
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
            var w = 0, L = -1, U = -1, te = 0, pe = 0, me = n, ve = null;
            t:
              for (; ; ) {
                for (var Pe; me !== s || m !== 0 && me.nodeType !== 3 || (L = w + m), me !== S || d !== 0 && me.nodeType !== 3 || (U = w + d), me.nodeType === 3 && (w += me.nodeValue.length), (Pe = me.firstChild) !== null; )
                  ve = me, me = Pe;
                for (; ; ) {
                  if (me === n)
                    break t;
                  if (ve === s && ++te === m && (L = w), ve === S && ++pe === d && (U = w), (Pe = me.nextSibling) !== null)
                    break;
                  me = ve, ve = me.parentNode;
                }
                me = Pe;
              }
            s = L === -1 || U === -1 ? null : { start: L, end: U };
          } else
            s = null;
        }
      s = s || { start: 0, end: 0 };
    } else
      s = null;
    for (Bl = { focusedElem: n, selectionRange: s }, $l = !1, Fe = r; Fe !== null; )
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
                  var q = r.stateNode.containerInfo;
                  q.nodeType === 1 ? q.textContent = "" : q.nodeType === 9 && q.documentElement && q.removeChild(q.documentElement);
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
    return je = Fm, Fm = !1, je;
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
  function rp(n) {
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
  function ap(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, ap(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ki], delete r[Kl], delete r[Ov], delete r[J0], delete r[Nv])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Vm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Qf(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Vm(n.return))
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
  function gi(n, r, s) {
    for (s = s.child; s !== null; )
      as(n, r, s), s = s.sibling;
  }
  function as(n, r, s) {
    if (ir && typeof ir.onCommitFiberUnmount == "function")
      try {
        ir.onCommitFiberUnmount(Ur, s);
      } catch (L) {
      }
    switch (s.tag) {
      case 5:
        Er || ns(s, r);
      case 6:
        var d = Vn, m = Dr;
        Vn = null, gi(n, r, s), Vn = d, Dr = m, Vn !== null && (Dr ? (n = Vn, s = s.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(s) : n.removeChild(s)) : Vn.removeChild(s.stateNode));
        break;
      case 18:
        Vn !== null && (Dr ? (n = Vn, s = s.stateNode, n.nodeType === 8 ? al(n.parentNode, s) : n.nodeType === 1 && al(n, s), Hs(n)) : al(Vn, s.stateNode));
        break;
      case 4:
        d = Vn, m = Dr, Vn = s.stateNode.containerInfo, Dr = !0, gi(n, r, s), Vn = d, Dr = m;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Er && (d = s.updateQueue, d !== null && (d = d.lastEffect, d !== null))) {
          m = d = d.next;
          do {
            var S = m, w = S.destroy;
            S = S.tag, w !== void 0 && (S & 2 || S & 4) && mc(s, r, w), m = m.next;
          } while (m !== d);
        }
        gi(n, r, s);
        break;
      case 1:
        if (!Er && (ns(s, r), d = s.stateNode, typeof d.componentWillUnmount == "function"))
          try {
            d.props = s.memoizedProps, d.state = s.memoizedState, d.componentWillUnmount();
          } catch (L) {
            er(s, r, L);
          }
        gi(n, r, s);
        break;
      case 21:
        gi(n, r, s);
        break;
      case 22:
        s.mode & 1 ? (Er = (d = Er) || s.memoizedState !== null, gi(n, r, s), Er = d) : gi(n, r, s);
        break;
      default:
        gi(n, r, s);
    }
  }
  function No(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var s = n.stateNode;
      s === null && (s = n.stateNode = new Hm()), r.forEach(function(d) {
        var m = dS.bind(null, n, d);
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
          var S = n, w = r, L = w;
          e:
            for (; L !== null; ) {
              switch (L.tag) {
                case 5:
                  Vn = L.stateNode, Dr = !1;
                  break e;
                case 3:
                  Vn = L.stateNode.containerInfo, Dr = !0;
                  break e;
                case 4:
                  Vn = L.stateNode.containerInfo, Dr = !0;
                  break e;
              }
              L = L.return;
            }
          if (Vn === null)
            throw Error(u(160));
          as(S, w, m), Vn = null, Dr = !1;
          var U = m.alternate;
          U !== null && (U.return = null), m.return = null;
        } catch (te) {
          er(m, r, te);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Bm(r, n), r = r.sibling;
  }
  function Bm(n, r) {
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
          var S = n.memoizedProps, w = s !== null ? s.memoizedProps : S, L = n.type, U = n.updateQueue;
          if (n.updateQueue = null, U !== null)
            try {
              L === "input" && S.type === "radio" && S.name != null && Ct(m, S), ht(L, w);
              var te = ht(L, S);
              for (w = 0; w < U.length; w += 2) {
                var pe = U[w], me = U[w + 1];
                pe === "style" ? zt(m, me) : pe === "dangerouslySetInnerHTML" ? cn(m, me) : pe === "children" ? fn(m, me) : I(m, pe, me, te);
              }
              switch (L) {
                case "input":
                  _t(m, S);
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
              m[Kl] = S;
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
            Hs(r.containerInfo);
          } catch (Ke) {
            er(n, n.return, Ke);
          }
        break;
      case 4:
        Pi(r, n), qi(n);
        break;
      case 13:
        Pi(r, n), qi(n), m = n.child, m.flags & 8192 && (S = m.memoizedState !== null, m.stateNode.isHidden = S, !S || m.alternate !== null && m.alternate.memoizedState !== null || (lp = dn())), d & 4 && No(n);
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
                      ip(me);
                      continue;
                    }
                }
                Pe !== null ? (Pe.return = ve, Fe = Pe) : ip(me);
              }
              pe = pe.sibling;
            }
          e:
            for (pe = null, me = n; ; ) {
              if (me.tag === 5) {
                if (pe === null) {
                  pe = me;
                  try {
                    m = me.stateNode, te ? (S = m.style, typeof S.setProperty == "function" ? S.setProperty("display", "none", "important") : S.display = "none") : (L = me.stateNode, U = me.memoizedProps.style, w = U != null && U.hasOwnProperty("display") ? U.display : null, L.style.display = We("display", w));
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
        Pi(r, n), qi(n), d & 4 && No(n);
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
            if (Vm(s)) {
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
            var w = d.stateNode.containerInfo, L = Qf(n);
            rs(n, L, w);
            break;
          default:
            throw Error(u(161));
        }
      } catch (U) {
        er(n, n.return, U);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Wm(n, r, s) {
    Fe = n, is(n);
  }
  function is(n, r, s) {
    for (var d = (n.mode & 1) !== 0; Fe !== null; ) {
      var m = Fe, S = m.child;
      if (m.tag === 22 && d) {
        var w = m.memoizedState !== null || hc;
        if (!w) {
          var L = m.alternate, U = L !== null && L.memoizedState !== null || Er;
          L = hc;
          var te = Er;
          if (hc = w, (Er = U) && !te)
            for (Fe = m; Fe !== null; )
              w = Fe, U = w.child, w.tag === 22 && w.memoizedState !== null ? Gm(m) : U !== null ? (U.return = w, Fe = U) : Gm(m);
          for (; S !== null; )
            Fe = S, is(S), S = S.sibling;
          Fe = m, hc = L, Er = te;
        }
        Km(n);
      } else
        m.subtreeFlags & 8772 && S !== null ? (S.return = m, Fe = S) : Km(n);
    }
  }
  function Km(n) {
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
                S !== null && Yl(r, S, d);
                break;
              case 3:
                var w = r.updateQueue;
                if (w !== null) {
                  if (s = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        s = r.child.stateNode;
                        break;
                      case 1:
                        s = r.child.stateNode;
                    }
                  Yl(r, w, s);
                }
                break;
              case 5:
                var L = r.stateNode;
                if (s === null && r.flags & 4) {
                  s = L;
                  var U = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      U.autoFocus && s.focus();
                      break;
                    case "img":
                      U.src && (s.src = U.src);
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
                      me !== null && Hs(me);
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
          Er || r.flags & 512 && rp(r);
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
  function ip(n) {
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
  function Gm(n) {
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
            } catch (U) {
              er(r, s, U);
            }
            break;
          case 1:
            var d = r.stateNode;
            if (typeof d.componentDidMount == "function") {
              var m = r.return;
              try {
                d.componentDidMount();
              } catch (U) {
                er(r, m, U);
              }
            }
            var S = r.return;
            try {
              rp(r);
            } catch (U) {
              er(r, S, U);
            }
            break;
          case 5:
            var w = r.return;
            try {
              rp(r);
            } catch (U) {
              er(r, w, U);
            }
        }
      } catch (U) {
        er(r, r.return, U);
      }
      if (r === n) {
        Fe = null;
        break;
      }
      var L = r.sibling;
      if (L !== null) {
        L.return = r.return, Fe = L;
        break;
      }
      Fe = r.return;
    }
  }
  var Xf = Math.ceil, Sc = $.ReactCurrentDispatcher, op = $.ReactCurrentOwner, na = $.ReactCurrentBatchConfig, Yt = 0, Yn = null, Jn = null, Lr = 0, Za = 0, os = Dt(0), wr = 0, Cc = null, Do = 0, qf = 0, ls = 0, ou = null, sa = null, lp = 0, us = 1 / 0, Lo = null, Zf = !1, lu = null, Zi = null, yl = !1, Sl = null, Jf = 0, ss = 0, ed = null, uu = -1, su = 0;
  function ra() {
    return Yt & 6 ? dn() : uu !== -1 ? uu : uu = dn();
  }
  function mr(n) {
    return n.mode & 1 ? Yt & 2 && Lr !== 0 ? Lr & -Lr : bf.transition !== null ? (su === 0 && (su = Va()), su) : (n = Vt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : lv(n.type)), n) : 1;
  }
  function aa(n, r, s, d) {
    if (50 < ss)
      throw ss = 0, ed = null, Error(u(185));
    Ba(n, s, d), (!(Yt & 2) || n !== Yn) && (n === Yn && (!(Yt & 2) && (qf |= s), wr === 4 && yi(n, Lr)), ia(n, d), s === 1 && Yt === 0 && !(r.mode & 1) && (us = dn() + 500, Or && Ta()));
  }
  function ia(n, r) {
    var s = n.callbackNode;
    qn(n, r);
    var d = kt(n, n === Yn ? Lr : 0);
    if (d === 0)
      s !== null && vo(s), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = d & -d, n.callbackPriority !== r) {
      if (s != null && vo(s), r === 1)
        n.tag === 0 ? Lv(Ym.bind(null, n)) : Dv(Ym.bind(null, n)), Mv(function() {
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
            s = _r;
            break;
          case 536870912:
            s = la;
            break;
          default:
            s = _r;
        }
        s = vp(s, cs.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = s;
    }
  }
  function cs(n, r) {
    if (uu = -1, su = 0, Yt & 6)
      throw Error(u(327));
    var s = n.callbackNode;
    if (ds() && n.callbackNode !== s)
      return null;
    var d = kt(n, n === Yn ? Lr : 0);
    if (d === 0)
      return null;
    if (d & 30 || d & n.expiredLanes || r)
      r = nd(n, d);
    else {
      r = d;
      var m = Yt;
      Yt |= 2;
      var S = td();
      (Yn !== n || Lr !== r) && (Lo = null, us = dn() + 500, cu(n, r));
      do
        try {
          uS();
          break;
        } catch (L) {
          Qm(n, L);
        }
      while (!0);
      $v(), Sc.current = S, Yt = m, Jn !== null ? r = 0 : (Yn = null, Lr = 0, r = wr);
    }
    if (r !== 0) {
      if (r === 2 && (m = or(n), m !== 0 && (d = m, r = up(n, m))), r === 1)
        throw s = Cc, cu(n, 0), yi(n, d), ia(n, dn()), s;
      if (r === 6)
        yi(n, d);
      else {
        if (m = n.current.alternate, !(d & 30) && !sp(m) && (r = nd(n, d), r === 2 && (S = or(n), S !== 0 && (d = S, r = up(n, S))), r === 1))
          throw s = Cc, cu(n, 0), yi(n, d), ia(n, dn()), s;
        switch (n.finishedWork = m, n.finishedLanes = d, r) {
          case 0:
          case 1:
            throw Error(u(345));
          case 2:
            fu(n, sa, Lo);
            break;
          case 3:
            if (yi(n, d), (d & 130023424) === d && (r = lp + 500 - dn(), 10 < r)) {
              if (kt(n, 0) !== 0)
                break;
              if (m = n.suspendedLanes, (m & d) !== d) {
                ra(), n.pingedLanes |= n.suspendedLanes & m;
                break;
              }
              n.timeoutHandle = Wl(fu.bind(null, n, sa, Lo), r);
              break;
            }
            fu(n, sa, Lo);
            break;
          case 4:
            if (yi(n, d), (d & 4194240) === d)
              break;
            for (r = n.eventTimes, m = -1; 0 < d; ) {
              var w = 31 - Xn(d);
              S = 1 << w, w = r[w], w > m && (m = w), d &= ~S;
            }
            if (d = m, d = dn() - d, d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * Xf(d / 1960)) - d, 10 < d) {
              n.timeoutHandle = Wl(fu.bind(null, n, sa, Lo), d);
              break;
            }
            fu(n, sa, Lo);
            break;
          case 5:
            fu(n, sa, Lo);
            break;
          default:
            throw Error(u(329));
        }
      }
    }
    return ia(n, dn()), n.callbackNode === s ? cs.bind(null, n) : null;
  }
  function up(n, r) {
    var s = ou;
    return n.current.memoizedState.isDehydrated && (cu(n, r).flags |= 256), n = nd(n, r), n !== 2 && (r = sa, sa = s, r !== null && bc(r)), n;
  }
  function bc(n) {
    sa === null ? sa = n : sa.push.apply(sa, n);
  }
  function sp(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var s = r.updateQueue;
        if (s !== null && (s = s.stores, s !== null))
          for (var d = 0; d < s.length; d++) {
            var m = s[d], S = m.getSnapshot;
            m = m.value;
            try {
              if (!ui(S(), m))
                return !1;
            } catch (w) {
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
  function yi(n, r) {
    for (r &= ~ls, r &= ~qf, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var s = 31 - Xn(r), d = 1 << s;
      n[s] = -1, r &= ~d;
    }
  }
  function Ym(n) {
    if (Yt & 6)
      throw Error(u(327));
    ds();
    var r = kt(n, 0);
    if (!(r & 1))
      return ia(n, dn()), null;
    var s = nd(n, r);
    if (n.tag !== 0 && s === 2) {
      var d = or(n);
      d !== 0 && (r = d, s = up(n, d));
    }
    if (s === 1)
      throw s = Cc, cu(n, 0), yi(n, r), ia(n, dn()), s;
    if (s === 6)
      throw Error(u(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, fu(n, sa, Lo), ia(n, dn()), null;
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
  function Cl(n) {
    Sl !== null && Sl.tag === 0 && !(Yt & 6) && ds();
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
  function cp() {
    Za = os.current, yn(os);
  }
  function cu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var s = n.timeoutHandle;
    if (s !== -1 && (n.timeoutHandle = -1, Em(s)), Jn !== null)
      for (s = Jn.return; s !== null; ) {
        var d = s;
        switch (zv(d), d.tag) {
          case 1:
            d = d.type.childContextTypes, d != null && fi();
            break;
          case 3:
            pl(), yn(Zn), yn(yt), _f();
            break;
          case 5:
            Bt(d);
            break;
          case 4:
            pl();
            break;
          case 13:
            yn(lt);
            break;
          case 19:
            yn(lt);
            break;
          case 10:
            cl(d.type._context);
            break;
          case 22:
          case 23:
            cp();
        }
        s = s.return;
      }
    if (Yn = n, Jn = n = bl(n.current, null), Lr = Za = r, wr = 0, Cc = null, ls = qf = Do = 0, sa = ou = null, $r !== null) {
      for (r = 0; r < $r.length; r++)
        if (s = $r[r], d = s.interleaved, d !== null) {
          s.interleaved = null;
          var m = d.next, S = s.pending;
          if (S !== null) {
            var w = S.next;
            S.next = m, d.next = w;
          }
          s.pending = d;
        }
      $r = null;
    }
    return n;
  }
  function Qm(n, r) {
    do {
      var s = Jn;
      try {
        if ($v(), kf.current = Bf, ut) {
          for (var d = In.memoizedState; d !== null; ) {
            var m = d.queue;
            m !== null && (m.pending = null), d = d.next;
          }
          ut = !1;
        }
        if (Xl = 0, rn = ue = In = null, Qi = !1, qa = 0, op.current = null, s === null || s.return === null) {
          wr = 1, Cc = r, Jn = null;
          break;
        }
        e: {
          var S = n, w = s.return, L = s, U = r;
          if (r = Lr, L.flags |= 32768, U !== null && typeof U == "object" && typeof U.then == "function") {
            var te = U, pe = L, me = pe.tag;
            if (!(pe.mode & 1) && (me === 0 || me === 11 || me === 15)) {
              var ve = pe.alternate;
              ve ? (pe.updateQueue = ve.updateQueue, pe.memoizedState = ve.memoizedState, pe.lanes = ve.lanes) : (pe.updateQueue = null, pe.memoizedState = null);
            }
            var Pe = Yv(w);
            if (Pe !== null) {
              Pe.flags &= -257, Qv(Pe, w, L, S, r), Pe.mode & 1 && Um(S, te, r), r = Pe, U = te;
              var je = r.updateQueue;
              if (je === null) {
                var Ke = /* @__PURE__ */ new Set();
                Ke.add(U), r.updateQueue = Ke;
              } else
                je.add(U);
              break e;
            } else {
              if (!(r & 1)) {
                Um(S, te, r), fp();
                break e;
              }
              U = Error(u(426));
            }
          } else if (Un && L.mode & 1) {
            var ur = Yv(w);
            if (ur !== null) {
              !(ur.flags & 65536) && (ur.flags |= 256), Qv(ur, w, L, S, r), Uv(Ju(U, L));
              break e;
            }
          }
          S = U = Ju(U, L), wr !== 4 && (wr = 2), ou === null ? ou = [S] : ou.push(S), S = w;
          do {
            switch (S.tag) {
              case 3:
                S.flags |= 65536, r &= -r, S.lanes |= r;
                var K = Pm(S, U, r);
                jv(S, K);
                break e;
              case 1:
                L = U;
                var F = S.type, q = S.stateNode;
                if (!(S.flags & 128) && (typeof F.getDerivedStateFromError == "function" || q !== null && typeof q.componentDidCatch == "function" && (Zi === null || !Zi.has(q)))) {
                  S.flags |= 65536, r &= -r, S.lanes |= r;
                  var xe = dc(S, L, r);
                  jv(S, xe);
                  break e;
                }
            }
            S = S.return;
          } while (S !== null);
        }
        dp(s);
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
  function fp() {
    (wr === 0 || wr === 3 || wr === 2) && (wr = 4), Yn === null || !(Do & 268435455) && !(qf & 268435455) || yi(Yn, Lr);
  }
  function nd(n, r) {
    var s = Yt;
    Yt |= 2;
    var d = td();
    (Yn !== n || Lr !== r) && (Lo = null, cu(n, r));
    do
      try {
        lS();
        break;
      } catch (m) {
        Qm(n, m);
      }
    while (!0);
    if ($v(), Yt = s, Sc.current = d, Jn !== null)
      throw Error(u(261));
    return Yn = null, Lr = 0, wr;
  }
  function lS() {
    for (; Jn !== null; )
      Xm(Jn);
  }
  function uS() {
    for (; Jn !== null && !Pl(); )
      Xm(Jn);
  }
  function Xm(n) {
    var r = Zm(n.alternate, n, Za);
    n.memoizedProps = n.pendingProps, r === null ? dp(n) : Jn = r, op.current = null;
  }
  function dp(n) {
    var r = n;
    do {
      var s = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (s = np(s, r), s !== null) {
          s.flags &= 32767, Jn = s;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          wr = 6, Jn = null;
          return;
        }
      } else if (s = oS(s, r, Za), s !== null) {
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
  function fu(n, r, s) {
    var d = Vt, m = na.transition;
    try {
      na.transition = null, Vt = 1, sS(n, r, s, d);
    } finally {
      na.transition = m, Vt = d;
    }
    return null;
  }
  function sS(n, r, s, d) {
    do
      ds();
    while (Sl !== null);
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
    if (el(n, S), n === Yn && (Jn = Yn = null, Lr = 0), !(s.subtreeFlags & 2064) && !(s.flags & 2064) || yl || (yl = !0, vp(_r, function() {
      return ds(), null;
    })), S = (s.flags & 15990) !== 0, s.subtreeFlags & 15990 || S) {
      S = na.transition, na.transition = null;
      var w = Vt;
      Vt = 1;
      var L = Yt;
      Yt |= 4, op.current = null, jm(n, s), Bm(s, n), cf(Bl), $l = !!_v, Bl = _v = null, n.current = s, Wm(s), po(), Yt = L, Vt = w, na.transition = S;
    } else
      n.current = s;
    if (yl && (yl = !1, Sl = n, Jf = m), S = n.pendingLanes, S === 0 && (Zi = null), Mi(s.stateNode), ia(n, dn()), r !== null)
      for (d = n.onRecoverableError, s = 0; s < r.length; s++)
        m = r[s], d(m.value, { componentStack: m.stack, digest: m.digest });
    if (Zf)
      throw Zf = !1, n = lu, lu = null, n;
    return Jf & 1 && n.tag !== 0 && ds(), S = n.pendingLanes, S & 1 ? n === ed ? ss++ : (ss = 0, ed = n) : ss = 0, Ta(), null;
  }
  function ds() {
    if (Sl !== null) {
      var n = vr(Jf), r = na.transition, s = Vt;
      try {
        if (na.transition = null, Vt = 16 > n ? 16 : n, Sl === null)
          var d = !1;
        else {
          if (n = Sl, Sl = null, Jf = 0, Yt & 6)
            throw Error(u(331));
          var m = Yt;
          for (Yt |= 4, Fe = n.current; Fe !== null; ) {
            var S = Fe, w = S.child;
            if (Fe.flags & 16) {
              var L = S.deletions;
              if (L !== null) {
                for (var U = 0; U < L.length; U++) {
                  var te = L[U];
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
                        if (ap(pe), pe === te) {
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
            if (S.subtreeFlags & 2064 && w !== null)
              w.return = S, Fe = w;
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
            w = Fe;
            var q = w.child;
            if (w.subtreeFlags & 2064 && q !== null)
              q.return = w, Fe = q;
            else
              e:
                for (w = F; Fe !== null; ) {
                  if (L = Fe, L.flags & 2048)
                    try {
                      switch (L.tag) {
                        case 0:
                        case 11:
                        case 15:
                          yc(9, L);
                      }
                    } catch (Xe) {
                      er(L, L.return, Xe);
                    }
                  if (L === w) {
                    Fe = null;
                    break e;
                  }
                  var xe = L.sibling;
                  if (xe !== null) {
                    xe.return = L.return, Fe = xe;
                    break e;
                  }
                  Fe = L.return;
                }
          }
          if (Yt = m, Ta(), ir && typeof ir.onPostCommitFiberRoot == "function")
            try {
              ir.onPostCommitFiberRoot(Ur, n);
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
  function qm(n, r, s) {
    r = Ju(s, r), r = Pm(n, r, 1), n = dl(n, r, 1), r = ra(), n !== null && (Ba(n, 1, r), ia(n, r));
  }
  function er(n, r, s) {
    if (n.tag === 3)
      qm(n, n, s);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          qm(r, n, s);
          break;
        } else if (r.tag === 1) {
          var d = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof d.componentDidCatch == "function" && (Zi === null || !Zi.has(d))) {
            n = Ju(s, n), n = dc(r, n, 1), r = dl(r, n, 1), n = ra(), r !== null && (Ba(r, 1, n), ia(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function cS(n, r, s) {
    var d = n.pingCache;
    d !== null && d.delete(r), r = ra(), n.pingedLanes |= n.suspendedLanes & s, Yn === n && (Lr & s) === s && (wr === 4 || wr === 3 && (Lr & 130023424) === Lr && 500 > dn() - lp ? cu(n, 0) : ls |= s), ia(n, r);
  }
  function rd(n, r) {
    r === 0 && (n.mode & 1 ? (r = ja, ja <<= 1, !(ja & 130023424) && (ja = 4194304)) : r = 1);
    var s = ra();
    n = _o(n, r), n !== null && (Ba(n, r, s), ia(n, s));
  }
  function fS(n) {
    var r = n.memoizedState, s = 0;
    r !== null && (s = r.retryLane), rd(n, s);
  }
  function dS(n, r) {
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
  var Zm;
  Zm = function(n, r, s) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || Zn.current)
        hr = !0;
      else {
        if (!(n.lanes & s) && !(r.flags & 128))
          return hr = !1, Oo(n, r, s);
        hr = !!(n.flags & 131072);
      }
    else
      hr = !1, Un && r.flags & 1048576 && Av(r, Ku, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var d = r.type;
        ea(n, r), n = r.pendingProps;
        var m = ci(r, yt.current);
        ke(r, s), m = hl(null, r, d, n, m, s);
        var S = Jl();
        return r.flags |= 1, typeof m == "object" && m !== null && typeof m.render == "function" && m.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, jn(d) ? (S = !0, mf(r)) : S = !1, r.memoizedState = m.state !== null && m.state !== void 0 ? m.state : null, Fv(r), m.updater = xf, r.stateNode = m, m._reactInternals = r, Tf(r, d, n, s), r = Im(null, r, d, !0, S, s)) : (r.tag = 0, Un && S && gf(r), Cr(null, r, m, s), r = r.child), r;
      case 16:
        d = r.elementType;
        e: {
          switch (ea(n, r), n = r.pendingProps, m = d._init, d = m(d._payload), r.type = d, m = r.tag = pS(d), n = Xa(d, n), m) {
            case 0:
              r = es(null, r, d, n, s);
              break e;
            case 1:
              r = Xv(null, r, d, n, s);
              break e;
            case 11:
              r = gl(null, r, d, n, s);
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
        return d = r.type, m = r.pendingProps, m = r.elementType === d ? m : Xa(d, m), Xv(n, r, d, m, s);
      case 3:
        e: {
          if ($m(r), n === null)
            throw Error(u(387));
          d = r.pendingProps, S = r.memoizedState, m = S.element, Sr(n, r), vl(r, d, null, s);
          var w = r.memoizedState;
          if (d = w.element, S.isDehydrated)
            if (S = { element: d, isDehydrated: !1, cache: w.cache, pendingSuspenseBoundaries: w.pendingSuspenseBoundaries, transitions: w.transitions }, r.updateQueue.baseState = S, r.memoizedState = S, r.flags & 256) {
              m = Ju(Error(u(423)), r), r = Gf(n, r, d, s, m);
              break e;
            } else if (d !== m) {
              m = Ju(Error(u(424)), r), r = Gf(n, r, d, s, m);
              break e;
            } else
              for (ka = Ai(r.stateNode.containerInfo.firstChild), Qa = r, Un = !0, vi = null, s = Am(r, null, d, s), r.child = s; s; )
                s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (Kn(), d === m) {
              r = Hr(n, r, s);
              break e;
            }
            Cr(n, r, d, s);
          }
          r = r.child;
        }
        return r;
      case 5:
        return ot(r), n === null && Sf(r), d = r.type, m = r.pendingProps, S = n !== null ? n.memoizedProps : null, w = m.children, ec(d, m) ? w = null : S !== null && ec(d, S) && (r.flags |= 32), Lt(n, r), Cr(n, r, w, s), r.child;
      case 6:
        return n === null && Sf(r), null;
      case 13:
        return Zv(n, r, s);
      case 4:
        return Bv(r, r.stateNode.containerInfo), d = r.pendingProps, n === null ? r.child = Yu(r, null, d, s) : Cr(n, r, d, s), r.child;
      case 11:
        return d = r.type, m = r.pendingProps, m = r.elementType === d ? m : Xa(d, m), gl(n, r, d, m, s);
      case 7:
        return Cr(n, r, r.pendingProps, s), r.child;
      case 8:
        return Cr(n, r, r.pendingProps.children, s), r.child;
      case 12:
        return Cr(n, r, r.pendingProps.children, s), r.child;
      case 10:
        e: {
          if (d = r.type._context, m = r.pendingProps, S = r.memoizedProps, w = m.value, Sn(Yi, d._currentValue), d._currentValue = w, S !== null)
            if (ui(S.value, w)) {
              if (S.children === m.children && !Zn.current) {
                r = Hr(n, r, s);
                break e;
              }
            } else
              for (S = r.child, S !== null && (S.return = r); S !== null; ) {
                var L = S.dependencies;
                if (L !== null) {
                  w = S.child;
                  for (var U = L.firstContext; U !== null; ) {
                    if (U.context === d) {
                      if (S.tag === 1) {
                        U = ko(-1, s & -s), U.tag = 2;
                        var te = S.updateQueue;
                        if (te !== null) {
                          te = te.shared;
                          var pe = te.pending;
                          pe === null ? U.next = U : (U.next = pe.next, pe.next = U), te.pending = U;
                        }
                      }
                      S.lanes |= s, U = S.alternate, U !== null && (U.lanes |= s), Nr(
                        S.return,
                        s,
                        r
                      ), L.lanes |= s;
                      break;
                    }
                    U = U.next;
                  }
                } else if (S.tag === 10)
                  w = S.type === r.type ? null : S.child;
                else if (S.tag === 18) {
                  if (w = S.return, w === null)
                    throw Error(u(341));
                  w.lanes |= s, L = w.alternate, L !== null && (L.lanes |= s), Nr(w, s, r), w = S.sibling;
                } else
                  w = S.child;
                if (w !== null)
                  w.return = S;
                else
                  for (w = S; w !== null; ) {
                    if (w === r) {
                      w = null;
                      break;
                    }
                    if (S = w.sibling, S !== null) {
                      S.return = w.return, w = S;
                      break;
                    }
                    w = w.return;
                  }
                S = w;
              }
          Cr(n, r, m.children, s), r = r.child;
        }
        return r;
      case 9:
        return m = r.type, d = r.pendingProps.children, ke(r, s), m = lr(m), d = d(m), r.flags |= 1, Cr(n, r, d, s), r.child;
      case 14:
        return d = r.type, m = Xa(d, r.pendingProps), m = Xa(d.type, m), Kf(n, r, d, m, s);
      case 15:
        return Na(n, r, r.type, r.pendingProps, s);
      case 17:
        return d = r.type, m = r.pendingProps, m = r.elementType === d ? m : Xa(d, m), ea(n, r), r.tag = 1, jn(d) ? (n = !0, mf(r)) : n = !1, ke(r, s), Om(r, d, m), Tf(r, d, m, s), Im(null, r, d, !0, n, s);
      case 19:
        return tp(n, r, s);
      case 22:
        return ru(n, r, s);
    }
    throw Error(u(156, r.tag));
  };
  function vp(n, r) {
    return Bn(n, r);
  }
  function vS(n, r, s, d) {
    this.tag = n, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = d, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Si(n, r, s, d) {
    return new vS(n, r, s, d);
  }
  function pp(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function pS(n) {
    if (typeof n == "function")
      return pp(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Ee)
        return 11;
      if (n === Ce)
        return 14;
    }
    return 2;
  }
  function bl(n, r) {
    var s = n.alternate;
    return s === null ? (s = Si(n.tag, r, n.key, n.mode), s.elementType = n.elementType, s.type = n.type, s.stateNode = n.stateNode, s.alternate = n, n.alternate = s) : (s.pendingProps = r, s.type = n.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = n.flags & 14680064, s.childLanes = n.childLanes, s.lanes = n.lanes, s.child = n.child, s.memoizedProps = n.memoizedProps, s.memoizedState = n.memoizedState, s.updateQueue = n.updateQueue, r = n.dependencies, s.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, s.sibling = n.sibling, s.index = n.index, s.ref = n.ref, s;
  }
  function ad(n, r, s, d, m, S) {
    var w = 2;
    if (d = n, typeof n == "function")
      pp(n) && (w = 1);
    else if (typeof n == "string")
      w = 5;
    else
      e:
        switch (n) {
          case G:
            return du(s.children, m, S, r);
          case se:
            w = 8, m |= 8;
            break;
          case Te:
            return n = Si(12, s, r, m | 2), n.elementType = Te, n.lanes = S, n;
          case ne:
            return n = Si(13, s, r, m), n.elementType = ne, n.lanes = S, n;
          case fe:
            return n = Si(19, s, r, m), n.elementType = fe, n.lanes = S, n;
          case Ne:
            return Ec(s, m, S, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case le:
                  w = 10;
                  break e;
                case ge:
                  w = 9;
                  break e;
                case Ee:
                  w = 11;
                  break e;
                case Ce:
                  w = 14;
                  break e;
                case we:
                  w = 16, d = null;
                  break e;
              }
            throw Error(u(130, n == null ? n : typeof n, ""));
        }
    return r = Si(w, s, r, m), r.elementType = n, r.type = d, r.lanes = S, r;
  }
  function du(n, r, s, d) {
    return n = Si(7, n, d, r), n.lanes = s, n;
  }
  function Ec(n, r, s, d) {
    return n = Si(22, n, d, r), n.elementType = Ne, n.lanes = s, n.stateNode = { isHidden: !1 }, n;
  }
  function wc(n, r, s) {
    return n = Si(6, n, null, r), n.lanes = s, n;
  }
  function vu(n, r, s) {
    return r = Si(4, n.children !== null ? n.children : [], n.key, r), r.lanes = s, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function hS(n, r, s, d, m) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = li(0), this.expirationTimes = li(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = li(0), this.identifierPrefix = d, this.onRecoverableError = m, this.mutableSourceEagerHydrationData = null;
  }
  function id(n, r, s, d, m, S, w, L, U) {
    return n = new hS(n, r, s, L, U), r === 1 ? (r = 1, S === !0 && (r |= 8)) : r = 0, S = Si(3, null, null, r), n.current = S, S.stateNode = n, S.memoizedState = { element: d, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fv(S), n;
  }
  function Jm(n, r, s) {
    var d = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: re, key: d == null ? null : "" + d, children: n, containerInfo: r, implementation: s };
  }
  function hp(n) {
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
  function eg(n, r, s, d, m, S, w, L, U) {
    return n = id(s, d, !0, n, m, S, w, L, U), n.context = hp(null), s = n.current, d = ra(), m = mr(s), S = ko(d, m), S.callback = r != null ? r : null, dl(s, S, m), n.current.lanes = m, Ba(n, m, d), ia(n, d), n;
  }
  function xc(n, r, s, d) {
    var m = r.current, S = ra(), w = mr(m);
    return s = hp(s), r.context === null ? r.context = s : r.pendingContext = s, r = ko(S, w), r.payload = { element: n }, d = d === void 0 ? null : d, d !== null && (r.callback = d), n = dl(m, r, w), n !== null && (aa(n, m, w, S), wf(n, m, w)), w;
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
  function tg(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var s = n.retryLane;
      n.retryLane = s !== 0 && s < r ? s : r;
    }
  }
  function mp(n, r) {
    tg(n, r), (n = n.alternate) && tg(n, r);
  }
  function ng() {
    return null;
  }
  var gp = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function ld(n) {
    this._internalRoot = n;
  }
  Ao.prototype.render = ld.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(u(409));
    xc(n, r, null, null);
  }, Ao.prototype.unmount = ld.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Cl(function() {
        xc(null, n, null, null);
      }), r[To] = null;
    }
  };
  function Ao(n) {
    this._internalRoot = n;
  }
  Ao.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = go();
      n = { blockedOn: null, target: n, priority: r };
      for (var s = 0; s < be.length && r !== 0 && r < be[s].priority; s++)
        ;
      be.splice(s, 0, n), s === 0 && Ul(n);
    }
  };
  function yp(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function ud(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function rg() {
  }
  function mS(n, r, s, d, m) {
    if (m) {
      if (typeof d == "function") {
        var S = d;
        d = function() {
          var te = od(w);
          S.call(te);
        };
      }
      var w = eg(r, d, n, 0, null, !1, !1, "", rg);
      return n._reactRootContainer = w, n[To] = w.current, Bu(n.nodeType === 8 ? n.parentNode : n), Cl(), w;
    }
    for (; m = n.lastChild; )
      n.removeChild(m);
    if (typeof d == "function") {
      var L = d;
      d = function() {
        var te = od(U);
        L.call(te);
      };
    }
    var U = id(n, 0, !1, null, null, !1, !1, "", rg);
    return n._reactRootContainer = U, n[To] = U.current, Bu(n.nodeType === 8 ? n.parentNode : n), Cl(function() {
      xc(r, U, s, d);
    }), U;
  }
  function sd(n, r, s, d, m) {
    var S = s._reactRootContainer;
    if (S) {
      var w = S;
      if (typeof m == "function") {
        var L = m;
        m = function() {
          var U = od(w);
          L.call(U);
        };
      }
      xc(r, w, n, m);
    } else
      w = mS(s, r, n, m, d);
    return od(w);
  }
  mo = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var s = un(r.pendingLanes);
          s !== 0 && (Wa(r, s | 1), ia(r, dn()), !(Yt & 6) && (us = dn() + 500, Ta()));
        }
        break;
      case 13:
        Cl(function() {
          var d = _o(n, 1);
          if (d !== null) {
            var m = ra();
            aa(d, n, 1, m);
          }
        }), mp(n, 1);
    }
  }, Ea = function(n) {
    if (n.tag === 13) {
      var r = _o(n, 134217728);
      if (r !== null) {
        var s = ra();
        aa(r, n, 134217728, s);
      }
      mp(n, 134217728);
    }
  }, nn = function(n) {
    if (n.tag === 13) {
      var r = mr(n), s = _o(n, r);
      if (s !== null) {
        var d = ra();
        aa(s, n, r, d);
      }
      mp(n, r);
    }
  }, go = function() {
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
        if (_t(n, s), r = s.name, s.type === "radio" && r != null) {
          for (s = n; s.parentNode; )
            s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < s.length; r++) {
            var d = s[r];
            if (d !== n && d.form === n.form) {
              var m = nt(d);
              if (!m)
                throw Error(u(90));
              Ft(d), _t(d, m);
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
  }, jt = fs, Le = Cl;
  var gS = { usingClientEntryPoint: !1, Events: [nc, Wu, nt, Jt, xt, fs] }, vs = { findFiberByHostInstance: si, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, yS = { bundleType: vs.bundleType, version: vs.version, rendererPackageName: vs.rendererPackageName, rendererConfig: vs.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ha(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: vs.findFiberByHostInstance || ng, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined") {
    var cd = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!cd.isDisabled && cd.supportsFiber)
      try {
        Ur = cd.inject(yS), ir = cd;
      } catch (n) {
      }
  }
  return Ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gS, Ti.createPortal = function(n, r) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!yp(r))
      throw Error(u(200));
    return Jm(n, r, null, s);
  }, Ti.createRoot = function(n, r) {
    if (!yp(n))
      throw Error(u(299));
    var s = !1, d = "", m = gp;
    return r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (d = r.identifierPrefix), r.onRecoverableError !== void 0 && (m = r.onRecoverableError)), r = id(n, 1, !1, null, null, s, !1, d, m), n[To] = r.current, Bu(n.nodeType === 8 ? n.parentNode : n), new ld(r);
  }, Ti.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(u(188)) : (n = Object.keys(n).join(","), Error(u(268, n)));
    return n = Ha(r), n = n === null ? null : n.stateNode, n;
  }, Ti.flushSync = function(n) {
    return Cl(n);
  }, Ti.hydrate = function(n, r, s) {
    if (!ud(r))
      throw Error(u(200));
    return sd(null, n, r, !0, s);
  }, Ti.hydrateRoot = function(n, r, s) {
    if (!yp(n))
      throw Error(u(405));
    var d = s != null && s.hydratedSources || null, m = !1, S = "", w = gp;
    if (s != null && (s.unstable_strictMode === !0 && (m = !0), s.identifierPrefix !== void 0 && (S = s.identifierPrefix), s.onRecoverableError !== void 0 && (w = s.onRecoverableError)), r = eg(r, null, n, 1, s != null ? s : null, m, !1, S, w), n[To] = r.current, Bu(n), d)
      for (n = 0; n < d.length; n++)
        s = d[n], m = s._getVersion, m = m(s._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [s, m] : r.mutableSourceEagerHydrationData.push(
          s,
          m
        );
    return new Ao(r);
  }, Ti.render = function(n, r, s) {
    if (!ud(r))
      throw Error(u(200));
    return sd(null, n, r, !1, s);
  }, Ti.unmountComponentAtNode = function(n) {
    if (!ud(n))
      throw Error(u(40));
    return n._reactRootContainer ? (Cl(function() {
      sd(null, null, n, !1, function() {
        n._reactRootContainer = null, n[To] = null;
      });
    }), !0) : !1;
  }, Ti.unstable_batchedUpdates = fs, Ti.unstable_renderSubtreeIntoContainer = function(n, r, s, d) {
    if (!ud(s))
      throw Error(u(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(u(38));
    return sd(n, r, s, !1, d);
  }, Ti.version = "18.2.0-next-9e3b772b8-20220608", Ti;
}
var Ri = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var PR;
function AP() {
  return PR || (PR = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var i = ki, l = dk(), u = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, f = !1;
    function p(e) {
      f = e;
    }
    function y(e) {
      if (!f) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          a[o - 1] = arguments[o];
        E("warn", e, a);
      }
    }
    function h(e) {
      if (!f) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
          a[o - 1] = arguments[o];
        E("error", e, a);
      }
    }
    function E(e, t, a) {
      {
        var o = u.ReactDebugCurrentFrame, c = o.getStackAddendum();
        c !== "" && (t += "%s", a = a.concat([c]));
        var v = a.map(function(g) {
          return String(g);
        });
        v.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var x = 0, T = 1, N = 2, _ = 3, O = 4, D = 5, z = 6, P = 7, A = 8, Y = 9, V = 10, I = 11, $ = 12, W = 13, re = 14, G = 15, se = 16, Te = 17, le = 18, ge = 19, Ee = 21, ne = 22, fe = 23, Ce = 24, we = 25, Ne = !0, ee = !1, de = !1, ae = !1, ze = !1, De = !0, ft = !1, dt = !1, At = !0, it = !0, Rt = !0, st = /* @__PURE__ */ new Set(), Mt = {}, Gt = {};
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
        return _t(e), !1;
      } catch (t) {
        return !0;
      }
    }
    function _t(e) {
      return "" + e;
    }
    function Wt(e, t) {
      if (Ct(e))
        return h("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Et(e)), _t(e);
    }
    function Qe(e) {
      if (Ct(e))
        return h("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Et(e)), _t(e);
    }
    function wt(e, t) {
      if (Ct(e))
        return h("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Et(e)), _t(e);
    }
    function vt(e, t) {
      if (Ct(e))
        return h("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Et(e)), _t(e);
    }
    function ln(e) {
      if (Ct(e))
        return h("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Et(e)), _t(e);
    }
    function Je(e) {
      if (Ct(e))
        return h("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Et(e)), _t(e);
    }
    var Xt = 0, qt = 1, $t = 2, _n = 3, kn = 4, cn = 5, fn = 6, he = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ie = he + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", We = new RegExp("^[" + he + "][" + Ie + "]*$"), zt = {}, Pt = {};
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
    function Ut(e, t, a, o) {
      if (t === null || typeof t == "undefined" || Mn(e, t, a, o))
        return !0;
      if (o)
        return !1;
      if (a !== null)
        switch (a.type) {
          case _n:
            return !t;
          case kn:
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
    function Ht(e, t, a, o, c, v, g) {
      this.acceptsBooleans = t === $t || t === _n || t === kn, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = v, this.removeEmptyString = g;
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
      tn[e] = new Ht(
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
      tn[t] = new Ht(
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
      tn[e] = new Ht(
        e,
        $t,
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
      tn[e] = new Ht(
        e,
        $t,
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
      tn[e] = new Ht(
        e,
        _n,
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
      tn[e] = new Ht(
        e,
        _n,
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
      tn[e] = new Ht(
        e,
        kn,
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
      tn[e] = new Ht(
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
      tn[e] = new Ht(
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
      tn[t] = new Ht(
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
      tn[t] = new Ht(
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
      tn[t] = new Ht(
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
      tn[e] = new Ht(
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
    tn[jt] = new Ht(
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
      tn[e] = new Ht(
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
    function It(e) {
      !Ye && Le.test(e) && (Ye = !0, h("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function En(e, t, a, o) {
      if (o.mustUseProperty) {
        var c = o.propertyName;
        return e[c];
      } else {
        Wt(a, t), o.sanitizeURL && It("" + a);
        var v = o.attributeName, g = null;
        if (o.type === kn) {
          if (e.hasAttribute(v)) {
            var C = e.getAttribute(v);
            return C === "" ? !0 : Ut(t, a, o, !1) ? C : C === "" + a ? a : C;
          }
        } else if (e.hasAttribute(v)) {
          if (Ut(t, a, o, !1))
            return e.getAttribute(v);
          if (o.type === _n)
            return a;
          g = e.getAttribute(v);
        }
        return Ut(t, a, o, !1) ? g === null ? a : g : g === "" + a ? a : g;
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
        if (Ut(t, a, c, o) && (a = null), o || c === null) {
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
            e[C] = b === _n ? !1 : "";
          } else
            e[C] = a;
          return;
        }
        var k = c.attributeName, M = c.attributeNamespace;
        if (a === null)
          e.removeAttribute(k);
        else {
          var j = c.type, H;
          j === _n || j === kn && a === !0 ? H = "" : (Wt(a, k), H = "" + a, c.sanitizeURL && It(H.toString())), M ? e.setAttributeNS(M, k, H) : e.setAttribute(k, H);
        }
      }
    }
    var Qr = Symbol.for("react.element"), rr = Symbol.for("react.portal"), ar = Symbol.for("react.fragment"), yr = Symbol.for("react.strict_mode"), Ca = Symbol.for("react.profiler"), Ln = Symbol.for("react.provider"), fr = Symbol.for("react.context"), Rr = Symbol.for("react.forward_ref"), dr = Symbol.for("react.suspense"), $a = Symbol.for("react.suspense_list"), oa = Symbol.for("react.memo"), An = Symbol.for("react.lazy"), Ha = Symbol.for("react.scope"), Jo = Symbol.for("react.debug_trace_mode"), Bn = Symbol.for("react.offscreen"), vo = Symbol.for("react.legacy_hidden"), Pl = Symbol.for("react.cache"), po = Symbol.for("react.tracing_marker"), dn = Symbol.iterator, Fa = "@@iterator";
    function Xr(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = dn && e[dn] || e[Fa];
      return typeof t == "function" ? t : null;
    }
    var Nt = Object.assign, _r = 0, Vi, la, Ur, ir, Mi, Xn, ba;
    function ho() {
    }
    ho.__reactDisabledLog = !0;
    function Oi() {
      {
        if (_r === 0) {
          Vi = console.log, la = console.info, Ur = console.warn, ir = console.error, Mi = console.group, Xn = console.groupCollapsed, ba = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ho,
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
        _r++;
      }
    }
    function ua() {
      {
        if (_r--, _r === 0) {
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
              value: Ur
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
        _r < 0 && h("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ja = u.ReactCurrentDispatcher, un;
    function kt(e, t, a) {
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
      var H = e ? e.displayName || e.name : "", Z = H ? kt(H) : "";
      return typeof e == "function" && qn.set(e, Z), Z;
    }
    function li(e, t, a) {
      return Va(e, !0);
    }
    function Ba(e, t, a) {
      return Va(e, !1);
    }
    function el(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Wa(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Va(e, el(e));
      if (typeof e == "string")
        return kt(e);
      switch (e) {
        case dr:
          return kt("Suspense");
        case $a:
          return kt("SuspenseList");
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
        case D:
          return kt(e.type);
        case se:
          return kt("Lazy");
        case W:
          return kt("Suspense");
        case ge:
          return kt("SuspenseList");
        case x:
        case N:
        case G:
          return Ba(e.type);
        case I:
          return Ba(e.type.render);
        case T:
          return li(e.type);
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
    function mo(e, t, a) {
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
        case $a:
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
            return mo(e, e.render, "ForwardRef");
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
    function go(e, t, a) {
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
        case Y:
          var o = a;
          return Bi(o) + ".Consumer";
        case V:
          var c = a;
          return Bi(c._context) + ".Provider";
        case le:
          return "DehydratedFragment";
        case I:
          return go(a, a.render, "ForwardRef");
        case P:
          return "Fragment";
        case D:
          return a;
        case O:
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
        case $:
          return "Profiler";
        case Ee:
          return "Scope";
        case W:
          return "Suspense";
        case ge:
          return "SuspenseList";
        case we:
          return "TracingMarker";
        case T:
        case x:
        case Te:
        case N:
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
    function yo() {
      return zn === null ? "" : vr(zn);
    }
    function Wn() {
      Ni.getCurrentStack = null, zn = null, qr = !1;
    }
    function be(e) {
      Ni.getCurrentStack = e === null ? null : yo, zn = e, qr = !1;
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
    var Ul = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function Wi(e, t) {
      Ul[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || h("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || h("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function zu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Il(e) {
      return e._valueTracker;
    }
    function $s(e) {
      e._valueTracker = null;
    }
    function Hs(e) {
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
            $s(e), delete e[t];
          }
        };
        return g;
      }
    }
    function $l(e) {
      Il(e) || (e._valueTracker = Pu(e));
    }
    function Vh(e) {
      if (!e)
        return !1;
      var t = Il(e);
      if (!t)
        return !0;
      var a = t.getValue(), o = Hs(e);
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
    var Jc = !1, Fs = !1, ef = !1, lv = !1;
    function So(e) {
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
        controlled: So(t)
      };
    }
    function uv(e, t) {
      var a = e, o = t.checked;
      o != null && On(a, "checked", o, !1);
    }
    function Uu(e, t) {
      var a = e;
      {
        var o = So(t);
        !a._wrapperState.controlled && o && !lv && (h("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), lv = !0), a._wrapperState.controlled && !o && !ef && (h("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ef = !0);
      }
      uv(e, t);
      var c = gn(t.value), v = t.type;
      if (c != null)
        v === "number" ? (c === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != c) && (a.value = en(c)) : a.value !== en(c) && (a.value = en(c));
      else if (v === "submit" || v === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? tl(a, t.type, c) : t.hasOwnProperty("defaultValue") && tl(a, t.type, gn(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
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
    function Bh(e, t) {
      var a = e;
      Uu(a, t), Ka(a, t);
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
            var C = Cg(g);
            if (!C)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            Vh(g), Uu(g, C);
          }
        }
      }
    }
    function tl(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Zc(e.ownerDocument) !== e) && (a == null ? e.defaultValue = en(e._wrapperState.initialValue) : e.defaultValue !== en(a) && (e.defaultValue = en(a)));
    }
    var tf = !1, Iu = !1, Wh = !1;
    function nf(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? i.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || Iu || (Iu = !0, h("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Wh || (Wh = !0, h("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !tf && (h("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), tf = !0);
    }
    function sv(e, t) {
      t.value != null && e.setAttribute("value", en(gn(t.value)));
    }
    var Ws = Array.isArray;
    function kr(e) {
      return Ws(e);
    }
    var rf;
    rf = !1;
    function Kh() {
      var e = Zr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var Gh = ["value", "defaultValue"];
    function U0(e) {
      {
        Wi("select", e);
        for (var t = 0; t < Gh.length; t++) {
          var a = Gh[t];
          if (e[a] != null) {
            var o = kr(e[a]);
            e.multiple && !o ? h("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Kh()) : !e.multiple && o && h("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Kh());
          }
        }
      }
    }
    function nl(e, t, a, o) {
      var c = e.options;
      if (t) {
        for (var v = a, g = {}, C = 0; C < v.length; C++)
          g["$" + v[C]] = !0;
        for (var b = 0; b < c.length; b++) {
          var k = g.hasOwnProperty("$" + c[b].value);
          c[b].selected !== k && (c[b].selected = k), k && o && (c[b].defaultSelected = !0);
        }
      } else {
        for (var M = en(gn(a)), j = null, H = 0; H < c.length; H++) {
          if (c[H].value === M) {
            c[H].selected = !0, o && (c[H].defaultSelected = !0);
            return;
          }
          j === null && !c[H].disabled && (j = c[H]);
        }
        j !== null && (j.selected = !0);
      }
    }
    function cv(e, t) {
      return Nt({}, t, {
        value: void 0
      });
    }
    function Yh(e, t) {
      var a = e;
      U0(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !rf && (h("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), rf = !0);
    }
    function I0(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var o = t.value;
      o != null ? nl(a, !!t.multiple, o, !1) : t.defaultValue != null && nl(a, !!t.multiple, t.defaultValue, !0);
    }
    function $0(e, t) {
      var a = e, o = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var c = t.value;
      c != null ? nl(a, !!t.multiple, c, !1) : o !== !!t.multiple && (t.defaultValue != null ? nl(a, !!t.multiple, t.defaultValue, !0) : nl(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function H0(e, t) {
      var a = e, o = t.value;
      o != null && nl(a, !!t.multiple, o, !1);
    }
    var fv = !1;
    function dv(e, t) {
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
    function Qh(e, t) {
      var a = e;
      Wi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !fv && (h("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Zr() || "A component"), fv = !0);
      var o = t.value;
      if (o == null) {
        var c = t.children, v = t.defaultValue;
        if (c != null) {
          h("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (v != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (kr(c)) {
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
    function Xh(e, t) {
      var a = e, o = gn(t.value), c = gn(t.defaultValue);
      if (o != null) {
        var v = en(o);
        v !== a.value && (a.value = v), t.defaultValue == null && a.defaultValue !== v && (a.defaultValue = v);
      }
      c != null && (a.defaultValue = en(c));
    }
    function qh(e, t) {
      var a = e, o = a.textContent;
      o === a._wrapperState.initialValue && o !== "" && o !== null && (a.value = o);
    }
    function vv(e, t) {
      Xh(e, t);
    }
    var Co = "http://www.w3.org/1999/xhtml", F0 = "http://www.w3.org/1998/Math/MathML", pv = "http://www.w3.org/2000/svg";
    function af(e) {
      switch (e) {
        case "svg":
          return pv;
        case "math":
          return F0;
        default:
          return Co;
      }
    }
    function hv(e, t) {
      return e == null || e === Co ? af(t) : e === pv && t === "foreignObject" ? Co : e;
    }
    var j0 = function(e) {
      return typeof MSApp != "undefined" && MSApp.execUnsafeLocalFunction ? function(t, a, o, c) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, o, c);
        });
      } : e;
    }, of, Zh = j0(function(e, t) {
      if (e.namespaceURI === pv && !("innerHTML" in e)) {
        of = of || document.createElement("div"), of.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = of.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), wa = 1, bo = 3, pr = 8, Di = 9, Hl = 11, lf = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === bo) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Jh = {
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
    }, $u = {
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
    function em(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var tm = ["Webkit", "ms", "Moz", "O"];
    Object.keys($u).forEach(function(e) {
      tm.forEach(function(t) {
        $u[em(t, e)] = $u[e];
      });
    });
    function uf(e, t, a) {
      var o = t == null || typeof t == "boolean" || t === "";
      return o ? "" : !a && typeof t == "number" && t !== 0 && !($u.hasOwnProperty(e) && $u[e]) ? t + "px" : (vt(t, e), ("" + t).trim());
    }
    var Hu = /([A-Z])/g, V0 = /^ms-/;
    function B0(e) {
      return e.replace(Hu, "-$1").toLowerCase().replace(V0, "-ms-");
    }
    var nm = function() {
    };
    {
      var rm = /^(?:webkit|moz|o)[A-Z]/, am = /^-ms-/, Ks = /-(.)/g, Fu = /;\s*$/, ju = {}, Vu = {}, im = !1, mv = !1, gv = function(e) {
        return e.replace(Ks, function(t, a) {
          return a.toUpperCase();
        });
      }, yv = function(e) {
        ju.hasOwnProperty(e) && ju[e] || (ju[e] = !0, h(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          gv(e.replace(am, "ms-"))
        ));
      }, om = function(e) {
        ju.hasOwnProperty(e) && ju[e] || (ju[e] = !0, h("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, lm = function(e, t) {
        Vu.hasOwnProperty(t) && Vu[t] || (Vu[t] = !0, h(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Fu, "")));
      }, um = function(e, t) {
        im || (im = !0, h("`NaN` is an invalid value for the `%s` css style property.", e));
      }, W0 = function(e, t) {
        mv || (mv = !0, h("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      nm = function(e, t) {
        e.indexOf("-") > -1 ? yv(e) : rm.test(e) ? om(e) : Fu.test(t) && lm(e, t), typeof t == "number" && (isNaN(t) ? um(e, t) : isFinite(t) || W0(e, t));
      };
    }
    var K0 = nm;
    function G0(e) {
      {
        var t = "", a = "";
        for (var o in e)
          if (e.hasOwnProperty(o)) {
            var c = e[o];
            if (c != null) {
              var v = o.indexOf("--") === 0;
              t += a + (v ? o : B0(o)) + ":", t += uf(o, c, v), a = ";";
            }
          }
        return t || null;
      }
    }
    function sm(e, t) {
      var a = e.style;
      for (var o in t)
        if (t.hasOwnProperty(o)) {
          var c = o.indexOf("--") === 0;
          c || K0(o, t[o]);
          var v = uf(o, t[o], c);
          o === "float" && (o = "cssFloat"), c ? a.setProperty(o, v) : a[o] = v;
        }
    }
    function Y0(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ui(e) {
      var t = {};
      for (var a in e)
        for (var o = Jh[a] || [a], c = 0; c < o.length; c++)
          t[o[c]] = a;
      return t;
    }
    function Gs(e, t) {
      {
        if (!t)
          return;
        var a = ui(e), o = ui(t), c = {};
        for (var v in a) {
          var g = a[v], C = o[v];
          if (C && g !== C) {
            var b = g + "," + C;
            if (c[b])
              continue;
            c[b] = !0, h("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Y0(e[g]) ? "Removing" : "Updating", g, C);
          }
        }
      }
    }
    var cm = {
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
    }, fm = Nt({
      menuitem: !0
    }, cm), dm = "__html";
    function sf(e, t) {
      if (t) {
        if (fm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(dm in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && h("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Eo(e, t) {
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
    }, vm = {
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
    }, Li = {}, Sv = new RegExp("^(aria)-[" + Ie + "]*$"), Ys = new RegExp("^(aria)[A-Z][" + Ie + "]*$");
    function Cv(e, t) {
      {
        if (Se.call(Li, t) && Li[t])
          return !0;
        if (Ys.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), o = vm.hasOwnProperty(a) ? a : null;
          if (o == null)
            return h("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Li[t] = !0, !0;
          if (t !== o)
            return h("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, o), Li[t] = !0, !0;
        }
        if (Sv.test(t)) {
          var c = t.toLowerCase(), v = vm.hasOwnProperty(c) ? c : null;
          if (v == null)
            return Li[t] = !0, !1;
          if (t !== v)
            return h("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, v), Li[t] = !0, !0;
        }
      }
      return !0;
    }
    function pm(e, t) {
      {
        var a = [];
        for (var o in t) {
          var c = Cv(e, o);
          c || a.push(o);
        }
        var v = a.map(function(g) {
          return "`" + g + "`";
        }).join(", ");
        a.length === 1 ? h("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", v, e) : a.length > 1 && h("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", v, e);
      }
    }
    function ff(e, t) {
      Eo(e, t) || pm(e, t);
    }
    var Fl = !1;
    function bv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !Fl && (Fl = !0, e === "select" && t.multiple ? h("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : h("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Ev = function() {
    };
    {
      var Mr = {}, wv = /^on./, hm = /^on[^A-Z]/, mm = new RegExp("^(aria)-[" + Ie + "]*$"), gm = new RegExp("^(aria)[A-Z][" + Ie + "]*$");
      Ev = function(e, t, a, o) {
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
          if (wv.test(t))
            return h("Unknown event handler property `%s`. It will be ignored.", t), Mr[t] = !0, !0;
        } else if (wv.test(t))
          return hm.test(t) && h("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Mr[t] = !0, !0;
        if (mm.test(t) || gm.test(t))
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
        return typeof a == "boolean" && Mn(t, a, b, !1) ? (a ? h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : h('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Mr[t] = !0, !0) : k ? !0 : Mn(t, a, b, !1) ? (Mr[t] = !0, !1) : ((a === "false" || a === "true") && b !== null && b.type === _n && (h("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Mr[t] = !0), !0);
      };
    }
    var ym = function(e, t, a) {
      {
        var o = [];
        for (var c in t) {
          var v = Ev(e, c, t[c], a);
          v || o.push(c);
        }
        var g = o.map(function(C) {
          return "`" + C + "`";
        }).join(", ");
        o.length === 1 ? h("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", g, e) : o.length > 1 && h("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", g, e);
      }
    };
    function Sm(e, t, a) {
      Eo(e, t) || ym(e, t, a);
    }
    var wo = 1, Qs = 2, jl = 4, Q0 = wo | Qs | jl, Xs = null;
    function qs(e) {
      Xs !== null && h("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Xs = e;
    }
    function X0() {
      Xs === null && h("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Xs = null;
    }
    function Cm(e) {
      return e === Xs;
    }
    function df(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === bo ? t.parentNode : t;
    }
    var Nn = null, rl = null, xo = null;
    function Bu(e) {
      var t = ms(e);
      if (t) {
        if (typeof Nn != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var o = Cg(a);
          Nn(t.stateNode, t.type, o);
        }
      }
    }
    function bm(e) {
      Nn = e;
    }
    function vf(e) {
      rl ? xo ? xo.push(e) : xo = [e] : rl = e;
    }
    function Zs() {
      return rl !== null || xo !== null;
    }
    function Js() {
      if (rl) {
        var e = rl, t = xo;
        if (rl = null, xo = null, Bu(e), t)
          for (var a = 0; a < t.length; a++)
            Bu(t[a]);
      }
    }
    var Vl = function(e, t) {
      return e(t);
    }, xv = function() {
    }, Tv = !1;
    function q0() {
      var e = Zs();
      e && (xv(), Js());
    }
    function Rv(e, t, a) {
      if (Tv)
        return e(t, a);
      Tv = !0;
      try {
        return Vl(e, t, a);
      } finally {
        Tv = !1, q0();
      }
    }
    function pf(e, t, a) {
      Vl = e, xv = a;
    }
    function hf(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function _v(e, t, a) {
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
    function Bl(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var o = Cg(a);
      if (o === null)
        return null;
      var c = o[t];
      if (_v(t, e.type, o))
        return null;
      if (c && typeof c != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof c + "` type.");
      return c;
    }
    var ec = !1;
    if (Ot)
      try {
        var Wl = {};
        Object.defineProperty(Wl, "passive", {
          get: function() {
            ec = !0;
          }
        }), window.addEventListener("test", Wl, Wl), window.removeEventListener("test", Wl, Wl);
      } catch (e) {
        ec = !1;
      }
    function Em(e, t, a, o, c, v, g, C, b) {
      var k = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, k);
      } catch (M) {
        this.onError(M);
      }
    }
    var kv = Em;
    if (typeof window != "undefined" && typeof window.dispatchEvent == "function" && typeof document != "undefined" && typeof document.createEvent == "function") {
      var Mv = document.createElement("react");
      kv = function(t, a, o, c, v, g, C, b, k) {
        if (typeof document == "undefined" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var M = document.createEvent("Event"), j = !1, H = !0, Z = window.event, J = Object.getOwnPropertyDescriptor(window, "event");
        function ie() {
          Mv.removeEventListener(oe, at, !1), typeof window.event != "undefined" && window.hasOwnProperty("event") && (window.event = Z);
        }
        var $e = Array.prototype.slice.call(arguments, 3);
        function at() {
          j = !0, ie(), a.apply(o, $e), H = !1;
        }
        var qe, on = !1, Qt = !1;
        function Q(X) {
          if (qe = X.error, on = !0, qe === null && X.colno === 0 && X.lineno === 0 && (Qt = !0), X.defaultPrevented && qe != null && typeof qe == "object")
            try {
              qe._suppressLogging = !0;
            } catch (ye) {
            }
        }
        var oe = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", Q), Mv.addEventListener(oe, at, !1), M.initEvent(oe, !1, !1), Mv.dispatchEvent(M), J && Object.defineProperty(window, "event", J), j && H && (on ? Qt && (qe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : qe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(qe)), window.removeEventListener("error", Q), !j)
          return ie(), Em.apply(this, arguments);
      };
    }
    var Z0 = kv, al = !1, Ai = null, tc = !1, il = null, Ki = {
      onError: function(e) {
        al = !0, Ai = e;
      }
    };
    function Kl(e, t, a, o, c, v, g, C, b) {
      al = !1, Ai = null, Z0.apply(Ki, arguments);
    }
    function To(e, t, a, o, c, v, g, C, b) {
      if (Kl.apply(this, arguments), al) {
        var k = Nv();
        tc || (tc = !0, il = k);
      }
    }
    function Ov() {
      if (tc) {
        var e = il;
        throw tc = !1, il = null, e;
      }
    }
    function J0() {
      return al;
    }
    function Nv() {
      if (al) {
        var e = Ai;
        return al = !1, Ai = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function si(e) {
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
    ), ol = (
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
    ), ci = (
      /*                     */
      1024
    ), jn = (
      /*                      */
      2048
    ), fi = (
      /*                    */
      4096
    ), ll = (
      /*                   */
      8192
    ), rc = (
      /*             */
      16384
    ), mf = jn | Dt | Gi | xa | ci | rc, wm = (
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
    ), Dv = (
      /*                       */
      1048576
    ), Lv = (
      /*                    */
      2097152
    ), Ta = (
      /*                 */
      4194304
    ), ul = (
      /*                */
      8388608
    ), Ra = (
      /*               */
      16777216
    ), Gl = (
      /*              */
      33554432
    ), Ku = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      Dt | ci | 0
    ), _a = Pn | Dt | yn | Sn | xa | fi | ll, Jr = Dt | Gi | xa | ll, di = jn | yn, Ir = Ta | ul | Lv, Ro = u.ReactCurrentOwner;
    function Ya(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var o = t;
        do
          t = o, (t.flags & (Pn | fi)) !== nt && (a = t.return), o = t.return;
        while (o);
      }
      return t.tag === _ ? a : null;
    }
    function Av(e) {
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
    function zv(e) {
      return Ya(e) === e;
    }
    function Qa(e) {
      {
        var t = Ro.current;
        if (t !== null && t.tag === T) {
          var a = t, o = a.stateNode;
          o._warnedAboutRefsInRender || h("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", ct(a) || "A component"), o._warnedAboutRefsInRender = !0;
        }
      }
      var c = si(e);
      return c ? Ya(c) === c : !1;
    }
    function ka(e) {
      if (Ya(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Un(e) {
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
              return ka(v), e;
            if (b === c)
              return ka(v), t;
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
    function vi(e) {
      var t = Un(e);
      return t !== null ? Pv(t) : null;
    }
    function Pv(e) {
      if (e.tag === D || e.tag === z)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = Pv(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function xm(e) {
      var t = Un(e);
      return t !== null ? yf(t) : null;
    }
    function yf(e) {
      if (e.tag === D || e.tag === z)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== O) {
          var a = yf(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Sf = l.unstable_scheduleCallback, Tm = l.unstable_cancelCallback, Cf = l.unstable_shouldYield, Rm = l.unstable_requestPaint, Kn = l.unstable_now, Uv = l.unstable_getCurrentPriorityLevel, bf = l.unstable_ImmediatePriority, Xa = l.unstable_UserBlockingPriority, Yi = l.unstable_NormalPriority, Ef = l.unstable_LowPriority, sl = l.unstable_IdlePriority, Iv = l.unstable_yieldValue, $v = l.unstable_setDisableYieldValue, cl = null, Nr = null, ke = null, lr = !1, $r = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined";
    function Hv(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return h("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        At && (e = Nt({}, e, {
          getLaneLabelMap: dl,
          injectProfilingHooks: ko
        })), cl = t.inject(e), Nr = t;
      } catch (a) {
        h("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function _m(e, t) {
      if (Nr && typeof Nr.onScheduleFiberRoot == "function")
        try {
          Nr.onScheduleFiberRoot(cl, e, t);
        } catch (a) {
          lr || (lr = !0, h("React instrumentation encountered an error: %s", a));
        }
    }
    function _o(e, t) {
      if (Nr && typeof Nr.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & yt) === yt;
          if (it) {
            var o;
            switch (t) {
              case ea:
                o = bf;
                break;
              case Hr:
                o = Xa;
                break;
              case Oo:
                o = Yi;
                break;
              case vc:
                o = sl;
                break;
              default:
                o = Yi;
                break;
            }
            Nr.onCommitFiberRoot(cl, e, o, a);
          }
        } catch (c) {
          lr || (lr = !0, h("React instrumentation encountered an error: %s", c));
        }
    }
    function fl(e) {
      if (Nr && typeof Nr.onPostCommitFiberRoot == "function")
        try {
          Nr.onPostCommitFiberRoot(cl, e);
        } catch (t) {
          lr || (lr = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Fv(e) {
      if (Nr && typeof Nr.onCommitFiberUnmount == "function")
        try {
          Nr.onCommitFiberUnmount(cl, e);
        } catch (t) {
          lr || (lr = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function Sr(e) {
      if (typeof Iv == "function" && ($v(e), p(e)), Nr && typeof Nr.setStrictMode == "function")
        try {
          Nr.setStrictMode(cl, e);
        } catch (t) {
          lr || (lr = !0, h("React instrumentation encountered an error: %s", t));
        }
    }
    function ko(e) {
      ke = e;
    }
    function dl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < In; a++) {
          var o = eS(t);
          e.set(t, o), t *= 2;
        }
        return e;
      }
    }
    function wf(e) {
      ke !== null && typeof ke.markCommitStarted == "function" && ke.markCommitStarted(e);
    }
    function jv() {
      ke !== null && typeof ke.markCommitStopped == "function" && ke.markCommitStopped();
    }
    function vl(e) {
      ke !== null && typeof ke.markComponentRenderStarted == "function" && ke.markComponentRenderStarted(e);
    }
    function Yl() {
      ke !== null && typeof ke.markComponentRenderStopped == "function" && ke.markComponentRenderStopped();
    }
    function km(e) {
      ke !== null && typeof ke.markComponentPassiveEffectMountStarted == "function" && ke.markComponentPassiveEffectMountStarted(e);
    }
    function Vv() {
      ke !== null && typeof ke.markComponentPassiveEffectMountStopped == "function" && ke.markComponentPassiveEffectMountStopped();
    }
    function xf(e) {
      ke !== null && typeof ke.markComponentPassiveEffectUnmountStarted == "function" && ke.markComponentPassiveEffectUnmountStarted(e);
    }
    function Mm() {
      ke !== null && typeof ke.markComponentPassiveEffectUnmountStopped == "function" && ke.markComponentPassiveEffectUnmountStopped();
    }
    function Om(e) {
      ke !== null && typeof ke.markComponentLayoutEffectMountStarted == "function" && ke.markComponentLayoutEffectMountStarted(e);
    }
    function Nm() {
      ke !== null && typeof ke.markComponentLayoutEffectMountStopped == "function" && ke.markComponentLayoutEffectMountStopped();
    }
    function Tf(e) {
      ke !== null && typeof ke.markComponentLayoutEffectUnmountStarted == "function" && ke.markComponentLayoutEffectUnmountStarted(e);
    }
    function Gu() {
      ke !== null && typeof ke.markComponentLayoutEffectUnmountStopped == "function" && ke.markComponentLayoutEffectUnmountStopped();
    }
    function Rf(e, t, a) {
      ke !== null && typeof ke.markComponentErrored == "function" && ke.markComponentErrored(e, t, a);
    }
    function Dm(e, t, a) {
      ke !== null && typeof ke.markComponentSuspended == "function" && ke.markComponentSuspended(e, t, a);
    }
    function Lm(e) {
      ke !== null && typeof ke.markLayoutEffectsStarted == "function" && ke.markLayoutEffectsStarted(e);
    }
    function Yu() {
      ke !== null && typeof ke.markLayoutEffectsStopped == "function" && ke.markLayoutEffectsStopped();
    }
    function Am(e) {
      ke !== null && typeof ke.markPassiveEffectsStarted == "function" && ke.markPassiveEffectsStarted(e);
    }
    function ic() {
      ke !== null && typeof ke.markPassiveEffectsStopped == "function" && ke.markPassiveEffectsStopped();
    }
    function zi(e) {
      ke !== null && typeof ke.markRenderStarted == "function" && ke.markRenderStarted(e);
    }
    function oc() {
      ke !== null && typeof ke.markRenderYielded == "function" && ke.markRenderYielded();
    }
    function Qu() {
      ke !== null && typeof ke.markRenderStopped == "function" && ke.markRenderStopped();
    }
    function Ql(e) {
      ke !== null && typeof ke.markRenderScheduled == "function" && ke.markRenderScheduled(e);
    }
    function Bv(e, t) {
      ke !== null && typeof ke.markForceUpdateScheduled == "function" && ke.markForceUpdateScheduled(e, t);
    }
    function pl(e, t) {
      ke !== null && typeof ke.markStateUpdateScheduled == "function" && ke.markStateUpdateScheduled(e, t);
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
    ), pi = (
      /*              */
      16
    ), _f = Math.clz32 ? Math.clz32 : Xl, kf = Math.log, Wv = Math.LN2;
    function Xl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (kf(t) / Wv | 0) | 0;
    }
    var In = 31, ue = (
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
    ), ql = (
      /*            */
      8
    ), $n = (
      /*                     */
      16
    ), Zl = (
      /*                */
      32
    ), hl = (
      /*                       */
      4194240
    ), Jl = (
      /*                        */
      64
    ), hi = (
      /*                        */
      128
    ), Ma = (
      /*                        */
      256
    ), eu = (
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
    ), tu = (
      /*                       */
      1048576
    ), Uf = (
      /*                       */
      2097152
    ), nu = (
      /*                            */
      130023424
    ), Mo = (
      /*                             */
      4194304
    ), If = (
      /*                             */
      8388608
    ), sc = (
      /*                             */
      16777216
    ), $f = (
      /*                             */
      33554432
    ), Hf = (
      /*                             */
      67108864
    ), Kv = Mo, Xu = (
      /*          */
      134217728
    ), Ff = (
      /*                          */
      268435455
    ), qu = (
      /*               */
      268435456
    ), ml = (
      /*                        */
      536870912
    ), Oa = (
      /*                   */
      1073741824
    );
    function eS(e) {
      {
        if (e & ut)
          return "Sync";
        if (e & Qi)
          return "InputContinuousHydration";
        if (e & qa)
          return "InputContinuous";
        if (e & ql)
          return "DefaultHydration";
        if (e & $n)
          return "Default";
        if (e & Zl)
          return "TransitionHydration";
        if (e & hl)
          return "Transition";
        if (e & nu)
          return "Retry";
        if (e & Xu)
          return "SelectiveHydration";
        if (e & qu)
          return "IdleHydration";
        if (e & ml)
          return "Idle";
        if (e & Oa)
          return "Offscreen";
      }
    }
    var Dn = -1, jf = Jl, Vf = Mo;
    function Zu(e) {
      switch (hr(e)) {
        case ut:
          return ut;
        case Qi:
          return Qi;
        case qa:
          return qa;
        case ql:
          return ql;
        case $n:
          return $n;
        case Zl:
          return Zl;
        case Jl:
        case hi:
        case Ma:
        case eu:
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
        case tu:
        case Uf:
          return e & hl;
        case Mo:
        case If:
        case sc:
        case $f:
        case Hf:
          return e & nu;
        case Xu:
          return Xu;
        case qu:
          return qu;
        case ml:
          return ml;
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
          M === $n && (j & hl) !== ue
        )
          return t;
      }
      (o & qa) !== ue && (o |= a & $n);
      var H = e.entangledLanes;
      if (H !== ue)
        for (var Z = e.entanglements, J = o & H; J > 0; ) {
          var ie = gl(J), $e = 1 << ie;
          o |= Z[ie], J &= ~$e;
        }
      return o;
    }
    function zm(e, t) {
      for (var a = e.eventTimes, o = Dn; t > 0; ) {
        var c = gl(t), v = 1 << c, g = a[c];
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
        case ql:
        case $n:
        case Zl:
        case Jl:
        case hi:
        case Ma:
        case eu:
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
        case tu:
        case Uf:
          return t + 5e3;
        case Mo:
        case If:
        case sc:
        case $f:
        case Hf:
          return Dn;
        case Xu:
        case qu:
        case ml:
        case Oa:
          return Dn;
        default:
          return h("Should have found matching lanes. This is a bug in React."), Dn;
      }
    }
    function tS(e, t) {
      for (var a = e.pendingLanes, o = e.suspendedLanes, c = e.pingedLanes, v = e.expirationTimes, g = a; g > 0; ) {
        var C = gl(g), b = 1 << C, k = v[C];
        k === Dn ? ((b & o) === ue || (b & c) !== ue) && (v[C] = Bf(b, t)) : k <= t && (e.expiredLanes |= b), g &= ~b;
      }
    }
    function nS(e) {
      return Zu(e.pendingLanes);
    }
    function Gv(e) {
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
      return (e & nu) === e;
    }
    function rS(e) {
      var t = ut | qa | $n;
      return (e & t) === ue;
    }
    function Pm(e) {
      return (e & hl) === e;
    }
    function dc(e, t) {
      var a = Qi | qa | ql | $n;
      return (t & a) !== ue;
    }
    function Um(e, t) {
      return (t & e.expiredLanes) !== ue;
    }
    function Yv(e) {
      return (e & hl) !== ue;
    }
    function Qv() {
      var e = jf;
      return jf <<= 1, (jf & hl) === ue && (jf = Jl), e;
    }
    function aS() {
      var e = Vf;
      return Vf <<= 1, (Vf & nu) === ue && (Vf = Mo), e;
    }
    function hr(e) {
      return e & -e;
    }
    function Cr(e) {
      return hr(e);
    }
    function gl(e) {
      return 31 - _f(e);
    }
    function Kf(e) {
      return gl(e);
    }
    function Na(e, t) {
      return (e & t) !== ue;
    }
    function ru(e, t) {
      return (e & t) === t;
    }
    function Lt(e, t) {
      return e | t;
    }
    function es(e, t) {
      return e & ~t;
    }
    function Xv(e, t) {
      return e & t;
    }
    function Im(e) {
      return e;
    }
    function $m(e, t) {
      return e !== rn && e < t ? e : t;
    }
    function Gf(e) {
      for (var t = [], a = 0; a < In; a++)
        t.push(e);
      return t;
    }
    function au(e, t, a) {
      e.pendingLanes |= t, t !== ml && (e.suspendedLanes = ue, e.pingedLanes = ue);
      var o = e.eventTimes, c = Kf(t);
      o[c] = a;
    }
    function qv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, o = t; o > 0; ) {
        var c = gl(o), v = 1 << c;
        a[c] = Dn, o &= ~v;
      }
    }
    function Zv(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Jv(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = ue, e.pingedLanes = ue, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var o = e.entanglements, c = e.eventTimes, v = e.expirationTimes, g = a; g > 0; ) {
        var C = gl(g), b = 1 << C;
        o[C] = ue, c[C] = Dn, v[C] = Dn, g &= ~b;
      }
    }
    function ts(e, t) {
      for (var a = e.entangledLanes |= t, o = e.entanglements, c = a; c; ) {
        var v = gl(c), g = 1 << v;
        // Is this one of the newly entangled lanes?
        g & t | // Is this lane transitively entangled with the newly entangled lanes?
        o[v] & t && (o[v] |= t), c &= ~g;
      }
    }
    function iS(e, t) {
      var a = hr(t), o;
      switch (a) {
        case qa:
          o = Qi;
          break;
        case $n:
          o = ql;
          break;
        case Jl:
        case hi:
        case Ma:
        case eu:
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
        case tu:
        case Uf:
        case Mo:
        case If:
        case sc:
        case $f:
        case Hf:
          o = Zl;
          break;
        case ml:
          o = qu;
          break;
        default:
          o = rn;
          break;
      }
      return (o & (e.suspendedLanes | t)) !== rn ? rn : o;
    }
    function ep(e, t, a) {
      if ($r)
        for (var o = e.pendingUpdatersLaneMap; a > 0; ) {
          var c = Kf(a), v = 1 << c, g = o[c];
          g.add(t), a &= ~v;
        }
    }
    function Yf(e, t) {
      if ($r)
        for (var a = e.pendingUpdatersLaneMap, o = e.memoizedUpdaters; t > 0; ) {
          var c = Kf(t), v = 1 << c, g = a[c];
          g.size > 0 && (g.forEach(function(C) {
            var b = C.alternate;
            (b === null || !o.has(b)) && o.add(C);
          }), g.clear()), t &= ~v;
        }
    }
    function tp(e, t) {
      return null;
    }
    var ea = ut, Hr = qa, Oo = $n, vc = ml, iu = rn;
    function mi() {
      return iu;
    }
    function br(e) {
      iu = e;
    }
    function pc(e, t) {
      var a = iu;
      try {
        return iu = e, t();
      } finally {
        iu = a;
      }
    }
    function ta(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function oS(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function np(e, t) {
      return e !== 0 && e < t;
    }
    function hc(e) {
      var t = hr(e);
      return np(ea, t) ? np(Hr, t) ? fc(t) ? Oo : vc : Hr : ea;
    }
    function Er(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Hm;
    function Fe(e) {
      Hm = e;
    }
    function ns(e) {
      Hm(e);
    }
    var mc;
    function Fm(e) {
      mc = e;
    }
    var jm;
    function gc(e) {
      jm = e;
    }
    var yc;
    function rp(e) {
      yc = e;
    }
    var ap;
    function Vm(e) {
      ap = e;
    }
    var Qf = !1, rs = [], Xi = null, Vn = null, Dr = null, gi = /* @__PURE__ */ new Map(), as = /* @__PURE__ */ new Map(), No = [], Pi = [
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
    function Bm(e) {
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
    function Wm(e, t) {
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
          gi.delete(a);
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
    function Km(e, t, a, o, c) {
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
          return gi.set(k, is(gi.get(k) || null, e, t, a, o, b)), !0;
        }
        case "gotpointercapture": {
          var M = c, j = M.pointerId;
          return as.set(j, is(as.get(j) || null, e, t, a, o, M)), !0;
        }
      }
      return !1;
    }
    function ip(e) {
      var t = _c(e.target);
      if (t !== null) {
        var a = Ya(t);
        if (a !== null) {
          var o = a.tag;
          if (o === W) {
            var c = Av(a);
            if (c !== null) {
              e.blockedOn = c, ap(e.priority, function() {
                jm(a);
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
    function Gm(e) {
      for (var t = yc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, o = 0; o < No.length && np(t, No[o].priority); o++)
        ;
      No.splice(o, 0, a), o === 0 && ip(a);
    }
    function Xf(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], o = ou(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (o === null) {
          var c = e.nativeEvent, v = new c.constructor(c.type, c);
          qs(v), c.target.dispatchEvent(v), X0();
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
    function op() {
      Qf = !1, Xi !== null && Xf(Xi) && (Xi = null), Vn !== null && Xf(Vn) && (Vn = null), Dr !== null && Xf(Dr) && (Dr = null), gi.forEach(Sc), as.forEach(Sc);
    }
    function na(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Qf || (Qf = !0, l.unstable_scheduleCallback(l.unstable_NormalPriority, op)));
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
      gi.forEach(o), as.forEach(o);
      for (var c = 0; c < No.length; c++) {
        var v = No[c];
        v.blockedOn === e && (v.blockedOn = null);
      }
      for (; No.length > 0; ) {
        var g = No[0];
        if (g.blockedOn !== null)
          break;
        ip(g), g.blockedOn === null && No.shift();
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
        case Hr:
          c = Cc;
          break;
        case Oo:
        default:
          c = Do;
          break;
      }
      return c.bind(null, t, a, e);
    }
    function wr(e, t, a, o) {
      var c = mi(), v = Yn.transition;
      Yn.transition = null;
      try {
        br(ea), Do(e, t, a, o);
      } finally {
        br(c), Yn.transition = v;
      }
    }
    function Cc(e, t, a, o) {
      var c = mi(), v = Yn.transition;
      Yn.transition = null;
      try {
        br(Hr), Do(e, t, a, o);
      } finally {
        br(c), Yn.transition = v;
      }
    }
    function Do(e, t, a, o) {
      Jn && qf(e, t, a, o);
    }
    function qf(e, t, a, o) {
      var c = ou(e, t, a, o);
      if (c === null) {
        RS(e, t, o, ls, a), Wm(e, o);
        return;
      }
      if (Km(c, e, t, a, o)) {
        o.stopPropagation();
        return;
      }
      if (Wm(e, o), t & jl && Bm(e)) {
        for (; c !== null; ) {
          var v = ms(c);
          v !== null && ns(v);
          var g = ou(e, t, a, o);
          if (g === null && RS(e, t, o, ls, a), g === c)
            break;
          c = g;
        }
        c !== null && o.stopPropagation();
        return;
      }
      RS(e, t, o, null, a);
    }
    var ls = null;
    function ou(e, t, a, o) {
      ls = null;
      var c = df(o), v = _c(c);
      if (v !== null) {
        var g = Ya(v);
        if (g === null)
          v = null;
        else {
          var C = g.tag;
          if (C === W) {
            var b = Av(g);
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
          return Hr;
        case "message": {
          var t = Uv();
          switch (t) {
            case bf:
              return ea;
            case Xa:
              return Hr;
            case Yi:
            case Ef:
              return Oo;
            case sl:
              return vc;
            default:
              return Oo;
          }
        }
        default:
          return Oo;
      }
    }
    function lp(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function us(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Lo(e, t, a, o) {
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
    var lu = null, Zi = null, yl = null;
    function Sl(e) {
      return lu = e, Zi = ed(), !0;
    }
    function Jf() {
      lu = null, Zi = null, yl = null;
    }
    function ss() {
      if (yl)
        return yl;
      var e, t = Zi, a = t.length, o, c = ed(), v = c.length;
      for (e = 0; e < a && t[e] === c[e]; e++)
        ;
      var g = a - e;
      for (o = 1; o <= g && t[a - o] === c[v - o]; o++)
        ;
      var C = o > 1 ? 1 - o : void 0;
      return yl = c.slice(e, C), yl;
    }
    function ed() {
      return "value" in lu ? lu.value : lu.textContent;
    }
    function uu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function su() {
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
        return k ? this.isDefaultPrevented = su : this.isDefaultPrevented = ra, this.isPropagationStopped = ra, this;
      }
      return Nt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = su);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = su);
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
        isPersistent: su
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
    }), up = mr(cs), bc, sp, yi;
    function Ym(e) {
      e !== yi && (yi && e.type === "mousemove" ? (bc = e.screenX - yi.screenX, sp = e.screenY - yi.screenY) : (bc = 0, sp = 0), yi = e);
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
        return "movementX" in e ? e.movementX : (Ym(e), bc);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : sp;
      }
    }), Cl = mr(fs), cp = Nt({}, fs, {
      dataTransfer: 0
    }), cu = mr(cp), Qm = Nt({}, cs, {
      relatedTarget: 0
    }), td = mr(Qm), fp = Nt({}, aa, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), nd = mr(fp), lS = Nt({}, aa, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), uS = mr(lS), Xm = Nt({}, aa, {
      data: 0
    }), dp = mr(Xm), fu = dp, sS = {
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
    function qm(e) {
      if (e.key) {
        var t = sS[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = uu(e);
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
    function cS(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var o = er[e];
      return o ? !!a[o] : !1;
    }
    function rd(e) {
      return cS;
    }
    var fS = Nt({}, cs, {
      key: qm,
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
        return e.type === "keypress" ? uu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? uu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), dS = mr(fS), Zm = Nt({}, fs, {
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
    }), vp = mr(Zm), vS = Nt({}, cs, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: rd
    }), Si = mr(vS), pp = Nt({}, aa, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), pS = mr(pp), bl = Nt({}, fs, {
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
    }), ad = mr(bl), du = [9, 13, 27, 32], Ec = 229, wc = Ot && "CompositionEvent" in window, vu = null;
    Ot && "documentMode" in document && (vu = document.documentMode);
    var hS = Ot && "TextEvent" in window && !vu, id = Ot && (!wc || vu && vu > 8 && vu <= 11), Jm = 32, hp = String.fromCharCode(Jm);
    function eg() {
      Ze("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ze("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ze("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ze("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var xc = !1;
    function od(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function tg(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function mp(e, t) {
      return e === "keydown" && t.keyCode === Ec;
    }
    function ng(e, t) {
      switch (e) {
        case "keyup":
          return du.indexOf(t.keyCode) !== -1;
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
    function gp(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function ld(e) {
      return e.locale === "ko";
    }
    var Ao = !1;
    function yp(e, t, a, o, c) {
      var v, g;
      if (wc ? v = tg(t) : Ao ? ng(t, o) && (v = "onCompositionEnd") : mp(t, o) && (v = "onCompositionStart"), !v)
        return null;
      id && !ld(o) && (!Ao && v === "onCompositionStart" ? Ao = Sl(c) : v === "onCompositionEnd" && Ao && (g = ss()));
      var C = lg(a, v);
      if (C.length > 0) {
        var b = new dp(v, t, null, o, c);
        if (e.push({
          event: b,
          listeners: C
        }), g)
          b.data = g;
        else {
          var k = gp(o);
          k !== null && (b.data = k);
        }
      }
    }
    function ud(e, t) {
      switch (e) {
        case "compositionend":
          return gp(t);
        case "keypress":
          var a = t.which;
          return a !== Jm ? null : (xc = !0, hp);
        case "textInput":
          var o = t.data;
          return o === hp && xc ? null : o;
        default:
          return null;
      }
    }
    function rg(e, t) {
      if (Ao) {
        if (e === "compositionend" || !wc && ng(e, t)) {
          var a = ss();
          return Jf(), Ao = !1, a;
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
    function mS(e, t, a, o, c) {
      var v;
      if (hS ? v = ud(t, o) : v = rg(t, o), !v)
        return null;
      var g = lg(a, "onBeforeInput");
      if (g.length > 0) {
        var C = new fu("onBeforeInput", "beforeinput", null, o, c);
        e.push({
          event: C,
          listeners: g
        }), C.data = v;
      }
    }
    function sd(e, t, a, o, c, v, g) {
      yp(e, t, a, o, c), mS(e, t, a, o, c);
    }
    var gS = {
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
      return t === "input" ? !!gS[e.type] : t === "textarea";
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
    function yS(e) {
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
      var c = lg(t, "onChange");
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
      n(t, s, e, df(e)), Rv(S, t);
    }
    function S(e) {
      iw(e, 0);
    }
    function w(e) {
      var t = md(e);
      if (Vh(t))
        return e;
    }
    function L(e, t) {
      if (e === "change")
        return t;
    }
    var U = !1;
    Ot && (U = yS("input") && (!document.documentMode || document.documentMode > 9));
    function te(e, t) {
      r = e, s = t, r.attachEvent("onpropertychange", me);
    }
    function pe() {
      r && (r.detachEvent("onpropertychange", me), r = null, s = null);
    }
    function me(e) {
      e.propertyName === "value" && w(s) && m(e);
    }
    function ve(e, t, a) {
      e === "focusin" ? (pe(), te(t, a)) : e === "focusout" && pe();
    }
    function Pe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return w(s);
    }
    function je(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ke(e, t) {
      if (e === "click")
        return w(t);
    }
    function ur(e, t) {
      if (e === "input" || e === "change")
        return w(t);
    }
    function K(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || tl(e, "number", e.value);
    }
    function F(e, t, a, o, c, v, g) {
      var C = a ? md(a) : window, b, k;
      if (d(C) ? b = L : vs(C) ? U ? b = ur : (b = Pe, k = ve) : je(C) && (b = Ke), b) {
        var M = b(t, a);
        if (M) {
          n(e, M, o, c);
          return;
        }
      }
      k && k(t, C, a), t === "focusout" && K(C);
    }
    function q() {
      Ft("onMouseEnter", ["mouseout", "mouseover"]), Ft("onMouseLeave", ["mouseout", "mouseover"]), Ft("onPointerEnter", ["pointerout", "pointerover"]), Ft("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function xe(e, t, a, o, c, v, g) {
      var C = t === "mouseover" || t === "pointerover", b = t === "mouseout" || t === "pointerout";
      if (C && !Cm(o)) {
        var k = o.relatedTarget || o.fromElement;
        if (k && (_c(k) || Dp(k)))
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
        var H, Z;
        if (b) {
          var J = o.relatedTarget || o.toElement;
          if (H = a, Z = J ? _c(J) : null, Z !== null) {
            var ie = Ya(Z);
            (Z !== ie || Z.tag !== D && Z.tag !== z) && (Z = null);
          }
        } else
          H = null, Z = a;
        if (H !== Z) {
          var $e = Cl, at = "onMouseLeave", qe = "onMouseEnter", on = "mouse";
          (t === "pointerout" || t === "pointerover") && ($e = vp, at = "onPointerLeave", qe = "onPointerEnter", on = "pointer");
          var Qt = H == null ? M : md(H), Q = Z == null ? M : md(Z), oe = new $e(at, on + "leave", H, o, c);
          oe.target = Qt, oe.relatedTarget = Q;
          var X = null, ye = _c(c);
          if (ye === a) {
            var He = new $e(qe, on + "enter", Z, o, c);
            He.target = Q, He.relatedTarget = Qt, X = He;
          }
          A2(e, oe, X, H, Z);
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
        if (a.nodeType === bo) {
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
    function El(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, o = a.getSelection && a.getSelection();
      if (!o || o.rangeCount === 0)
        return null;
      var c = o.anchorNode, v = o.anchorOffset, g = o.focusNode, C = o.focusOffset;
      try {
        c.nodeType, g.nodeType;
      } catch (b) {
        return null;
      }
      return SS(e, c, v, g, C);
    }
    function SS(e, t, a, o, c) {
      var v = 0, g = -1, C = -1, b = 0, k = 0, M = e, j = null;
      e:
        for (; ; ) {
          for (var H = null; M === t && (a === 0 || M.nodeType === bo) && (g = v + a), M === o && (c === 0 || M.nodeType === bo) && (C = v + c), M.nodeType === bo && (v += M.nodeValue.length), (H = M.firstChild) !== null; )
            j = M, M = H;
          for (; ; ) {
            if (M === e)
              break e;
            if (j === t && ++b === a && (g = v), j === o && ++k === c && (C = v), (H = M.nextSibling) !== null)
              break;
            M = j, j = M.parentNode;
          }
          M = H;
        }
      return g === -1 || C === -1 ? null : {
        start: g,
        end: C
      };
    }
    function h2(e, t) {
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
    function GE(e) {
      return e && e.nodeType === bo;
    }
    function YE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : GE(e) ? !1 : GE(t) ? YE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function m2(e) {
      return e && e.ownerDocument && YE(e.ownerDocument.documentElement, e);
    }
    function g2(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch (t) {
        return !1;
      }
    }
    function QE() {
      for (var e = window, t = Zc(); t instanceof e.HTMLIFrameElement; ) {
        if (g2(t))
          e = t.contentWindow;
        else
          return t;
        t = Zc(e.document);
      }
      return t;
    }
    function CS(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function y2() {
      var e = QE();
      return {
        focusedElem: e,
        selectionRange: CS(e) ? C2(e) : null
      };
    }
    function S2(e) {
      var t = QE(), a = e.focusedElem, o = e.selectionRange;
      if (t !== a && m2(a)) {
        o !== null && CS(a) && b2(a, o);
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
    function C2(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = El(e), t || {
        start: 0,
        end: 0
      };
    }
    function b2(e, t) {
      var a = t.start, o = t.end;
      o === void 0 && (o = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(o, e.value.length)) : h2(e, t);
    }
    var E2 = Ot && "documentMode" in document && document.documentMode <= 11;
    function w2() {
      Ze("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var fd = null, bS = null, Sp = null, ES = !1;
    function x2(e) {
      if ("selectionStart" in e && CS(e))
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
    function T2(e) {
      return e.window === e ? e.document : e.nodeType === Di ? e : e.ownerDocument;
    }
    function XE(e, t, a) {
      var o = T2(a);
      if (!(ES || fd == null || fd !== Zc(o))) {
        var c = x2(fd);
        if (!Sp || !et(Sp, c)) {
          Sp = c;
          var v = lg(bS, "onSelect");
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
    function R2(e, t, a, o, c, v, g) {
      var C = a ? md(a) : window;
      switch (t) {
        case "focusin":
          (vs(C) || C.contentEditable === "true") && (fd = C, bS = a, Sp = null);
          break;
        case "focusout":
          fd = null, bS = null, Sp = null;
          break;
        case "mousedown":
          ES = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ES = !1, XE(e, o, c);
          break;
        case "selectionchange":
          if (E2)
            break;
        case "keydown":
        case "keyup":
          XE(e, o, c);
      }
    }
    function ag(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var dd = {
      animationend: ag("Animation", "AnimationEnd"),
      animationiteration: ag("Animation", "AnimationIteration"),
      animationstart: ag("Animation", "AnimationStart"),
      transitionend: ag("Transition", "TransitionEnd")
    }, wS = {}, qE = {};
    Ot && (qE = document.createElement("div").style, "AnimationEvent" in window || (delete dd.animationend.animation, delete dd.animationiteration.animation, delete dd.animationstart.animation), "TransitionEvent" in window || delete dd.transitionend.transition);
    function ig(e) {
      if (wS[e])
        return wS[e];
      if (!dd[e])
        return e;
      var t = dd[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in qE)
          return wS[e] = t[a];
      return e;
    }
    var ZE = ig("animationend"), JE = ig("animationiteration"), ew = ig("animationstart"), tw = ig("transitionend"), nw = /* @__PURE__ */ new Map(), rw = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function ps(e, t) {
      nw.set(e, t), Ze(t, [e]);
    }
    function _2() {
      for (var e = 0; e < rw.length; e++) {
        var t = rw[e], a = t.toLowerCase(), o = t[0].toUpperCase() + t.slice(1);
        ps(a, "on" + o);
      }
      ps(ZE, "onAnimationEnd"), ps(JE, "onAnimationIteration"), ps(ew, "onAnimationStart"), ps("dblclick", "onDoubleClick"), ps("focusin", "onFocus"), ps("focusout", "onBlur"), ps(tw, "onTransitionEnd");
    }
    function k2(e, t, a, o, c, v, g) {
      var C = nw.get(t);
      if (C !== void 0) {
        var b = ia, k = t;
        switch (t) {
          case "keypress":
            if (uu(o) === 0)
              return;
          case "keydown":
          case "keyup":
            b = dS;
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
            b = Cl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            b = cu;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            b = Si;
            break;
          case ZE:
          case JE:
          case ew:
            b = nd;
            break;
          case tw:
            b = pS;
            break;
          case "scroll":
            b = up;
            break;
          case "wheel":
            b = ad;
            break;
          case "copy":
          case "cut":
          case "paste":
            b = uS;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            b = vp;
            break;
        }
        var M = (v & jl) !== 0;
        {
          var j = !M && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", H = D2(a, C, o.type, M, j);
          if (H.length > 0) {
            var Z = new b(C, k, null, o, c);
            e.push({
              event: Z,
              listeners: H
            });
          }
        }
      }
    }
    _2(), q(), cd(), w2(), eg();
    function M2(e, t, a, o, c, v, g) {
      k2(e, t, a, o, c, v);
      var C = (v & Q0) === 0;
      C && (xe(e, t, a, o, c), F(e, t, a, o, c), R2(e, t, a, o, c), sd(e, t, a, o, c));
    }
    var Cp = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], xS = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Cp));
    function aw(e, t, a) {
      var o = e.type || "unknown-event";
      e.currentTarget = a, To(o, t, void 0, e), e.currentTarget = null;
    }
    function O2(e, t, a) {
      var o;
      if (a)
        for (var c = t.length - 1; c >= 0; c--) {
          var v = t[c], g = v.instance, C = v.currentTarget, b = v.listener;
          if (g !== o && e.isPropagationStopped())
            return;
          aw(e, b, C), o = g;
        }
      else
        for (var k = 0; k < t.length; k++) {
          var M = t[k], j = M.instance, H = M.currentTarget, Z = M.listener;
          if (j !== o && e.isPropagationStopped())
            return;
          aw(e, Z, H), o = j;
        }
    }
    function iw(e, t) {
      for (var a = (t & jl) !== 0, o = 0; o < e.length; o++) {
        var c = e[o], v = c.event, g = c.listeners;
        O2(v, g, a);
      }
      Ov();
    }
    function N2(e, t, a, o, c) {
      var v = df(a), g = [];
      M2(g, e, o, a, v, t), iw(g, t);
    }
    function Qn(e, t) {
      xS.has(e) || h('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, o = lN(t), c = z2(e, a);
      o.has(c) || (ow(t, e, Qs, a), o.add(c));
    }
    function TS(e, t, a) {
      xS.has(e) && !t && h('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var o = 0;
      t && (o |= jl), ow(a, e, o, t);
    }
    var og = "_reactListening" + Math.random().toString(36).slice(2);
    function bp(e) {
      if (!e[og]) {
        e[og] = !0, st.forEach(function(a) {
          a !== "selectionchange" && (xS.has(a) || TS(a, !1, e), TS(a, !0, e));
        });
        var t = e.nodeType === Di ? e : e.ownerDocument;
        t !== null && (t[og] || (t[og] = !0, TS("selectionchange", !1, t)));
      }
    }
    function ow(e, t, a, o, c) {
      var v = os(e, t, a), g = void 0;
      ec && (t === "touchstart" || t === "touchmove" || t === "wheel") && (g = !0), e = e, o ? g !== void 0 ? Lo(e, t, v, g) : us(e, t, v) : g !== void 0 ? Zf(e, t, v, g) : lp(e, t, v);
    }
    function lw(e, t) {
      return e === t || e.nodeType === pr && e.parentNode === t;
    }
    function RS(e, t, a, o, c) {
      var v = o;
      if (!(t & wo) && !(t & Qs)) {
        var g = c;
        if (o !== null) {
          var C = o;
          e:
            for (; ; ) {
              if (C === null)
                return;
              var b = C.tag;
              if (b === _ || b === O) {
                var k = C.stateNode.containerInfo;
                if (lw(k, g))
                  break;
                if (b === O)
                  for (var M = C.return; M !== null; ) {
                    var j = M.tag;
                    if (j === _ || j === O) {
                      var H = M.stateNode.containerInfo;
                      if (lw(H, g))
                        return;
                    }
                    M = M.return;
                  }
                for (; k !== null; ) {
                  var Z = _c(k);
                  if (Z === null)
                    return;
                  var J = Z.tag;
                  if (J === D || J === z) {
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
      Rv(function() {
        return N2(e, t, a, v);
      });
    }
    function Ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function D2(e, t, a, o, c, v) {
      for (var g = t !== null ? t + "Capture" : null, C = o ? g : t, b = [], k = e, M = null; k !== null; ) {
        var j = k, H = j.stateNode, Z = j.tag;
        if (Z === D && H !== null && (M = H, C !== null)) {
          var J = Bl(k, C);
          J != null && b.push(Ep(k, J, M));
        }
        if (c)
          break;
        k = k.return;
      }
      return b;
    }
    function lg(e, t) {
      for (var a = t + "Capture", o = [], c = e; c !== null; ) {
        var v = c, g = v.stateNode, C = v.tag;
        if (C === D && g !== null) {
          var b = g, k = Bl(c, a);
          k != null && o.unshift(Ep(c, k, b));
          var M = Bl(c, t);
          M != null && o.push(Ep(c, M, b));
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
      while (e && e.tag !== D);
      return e || null;
    }
    function L2(e, t) {
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
    function uw(e, t, a, o, c) {
      for (var v = t._reactName, g = [], C = a; C !== null && C !== o; ) {
        var b = C, k = b.alternate, M = b.stateNode, j = b.tag;
        if (k !== null && k === o)
          break;
        if (j === D && M !== null) {
          var H = M;
          if (c) {
            var Z = Bl(C, v);
            Z != null && g.unshift(Ep(C, Z, H));
          } else if (!c) {
            var J = Bl(C, v);
            J != null && g.push(Ep(C, J, H));
          }
        }
        C = C.return;
      }
      g.length !== 0 && e.push({
        event: t,
        listeners: g
      });
    }
    function A2(e, t, a, o, c) {
      var v = o && c ? L2(o, c) : null;
      o !== null && uw(e, t, o, v, !1), c !== null && a !== null && uw(e, a, c, v, !0);
    }
    function z2(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ci = !1, wp = "dangerouslySetInnerHTML", ug = "suppressContentEditableWarning", hs = "suppressHydrationWarning", sw = "autoFocus", Tc = "children", Rc = "style", sg = "__html", _S, cg, xp, cw, fg, fw, dw;
    _S = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, cg = function(e, t) {
      ff(e, t), bv(e, t), Sm(e, t, {
        registrationNameDependencies: Mt,
        possibleRegistrationNames: Gt
      });
    }, fw = Ot && !document.documentMode, xp = function(e, t, a) {
      if (!Ci) {
        var o = dg(a), c = dg(t);
        c !== o && (Ci = !0, h("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(c), JSON.stringify(o)));
      }
    }, cw = function(e) {
      if (!Ci) {
        Ci = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), h("Extra attributes from the server: %s", t);
      }
    }, fg = function(e, t) {
      t === !1 ? h("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : h("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, dw = function(e, t) {
      var a = e.namespaceURI === Co ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var P2 = /\r\n?/g, U2 = /\u0000|\uFFFD/g;
    function dg(e) {
      ln(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(P2, `
`).replace(U2, "");
    }
    function vg(e, t, a, o) {
      var c = dg(t), v = dg(e);
      if (v !== c && (o && (Ci || (Ci = !0, h('Text content did not match. Server: "%s" Client: "%s"', v, c))), a && Ne))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function vw(e) {
      return e.nodeType === Di ? e : e.ownerDocument;
    }
    function I2() {
    }
    function pg(e) {
      e.onclick = I2;
    }
    function $2(e, t, a, o, c) {
      for (var v in o)
        if (o.hasOwnProperty(v)) {
          var g = o[v];
          if (v === Rc)
            g && Object.freeze(g), sm(t, g);
          else if (v === wp) {
            var C = g ? g[sg] : void 0;
            C != null && Zh(t, C);
          } else if (v === Tc)
            if (typeof g == "string") {
              var b = e !== "textarea" || g !== "";
              b && lf(t, g);
            } else
              typeof g == "number" && lf(t, "" + g);
          else
            v === ug || v === hs || v === sw || (Mt.hasOwnProperty(v) ? g != null && (typeof g != "function" && fg(v, g), v === "onScroll" && Qn("scroll", t)) : g != null && On(t, v, g, c));
        }
    }
    function H2(e, t, a, o) {
      for (var c = 0; c < t.length; c += 2) {
        var v = t[c], g = t[c + 1];
        v === Rc ? sm(e, g) : v === wp ? Zh(e, g) : v === Tc ? lf(e, g) : On(e, v, g, o);
      }
    }
    function F2(e, t, a, o) {
      var c, v = vw(a), g, C = o;
      if (C === Co && (C = af(e)), C === Co) {
        if (c = Eo(e, t), !c && e !== e.toLowerCase() && h("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
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
      return C === Co && !c && Object.prototype.toString.call(g) === "[object HTMLUnknownElement]" && !Se.call(_S, e) && (_S[e] = !0, h("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), g;
    }
    function j2(e, t) {
      return vw(t).createTextNode(e);
    }
    function V2(e, t, a, o) {
      var c = Eo(t, a);
      cg(t, a);
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
          for (var g = 0; g < Cp.length; g++)
            Qn(Cp[g], e);
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
          Yh(e, a), v = cv(e, a), Qn("invalid", e);
          break;
        case "textarea":
          Qh(e, a), v = dv(e, a), Qn("invalid", e);
          break;
        default:
          v = a;
      }
      switch (sf(t, v), $2(t, e, o, v, c), t) {
        case "input":
          $l(e), Bs(e, a, !1);
          break;
        case "textarea":
          $l(e), qh(e);
          break;
        case "option":
          sv(e, a);
          break;
        case "select":
          I0(e, a);
          break;
        default:
          typeof v.onClick == "function" && pg(e);
          break;
      }
    }
    function B2(e, t, a, o, c) {
      cg(t, o);
      var v = null, g, C;
      switch (t) {
        case "input":
          g = js(e, a), C = js(e, o), v = [];
          break;
        case "select":
          g = cv(e, a), C = cv(e, o), v = [];
          break;
        case "textarea":
          g = dv(e, a), C = dv(e, o), v = [];
          break;
        default:
          g = a, C = o, typeof g.onClick != "function" && typeof C.onClick == "function" && pg(e);
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
            b === wp || b === Tc || b === ug || b === hs || b === sw || (Mt.hasOwnProperty(b) ? v || (v = []) : (v = v || []).push(b, null));
      for (b in C) {
        var H = C[b], Z = g != null ? g[b] : void 0;
        if (!(!C.hasOwnProperty(b) || H === Z || H == null && Z == null))
          if (b === Rc)
            if (H && Object.freeze(H), Z) {
              for (k in Z)
                Z.hasOwnProperty(k) && (!H || !H.hasOwnProperty(k)) && (M || (M = {}), M[k] = "");
              for (k in H)
                H.hasOwnProperty(k) && Z[k] !== H[k] && (M || (M = {}), M[k] = H[k]);
            } else
              M || (v || (v = []), v.push(b, M)), M = H;
          else if (b === wp) {
            var J = H ? H[sg] : void 0, ie = Z ? Z[sg] : void 0;
            J != null && ie !== J && (v = v || []).push(b, J);
          } else
            b === Tc ? (typeof H == "string" || typeof H == "number") && (v = v || []).push(b, "" + H) : b === ug || b === hs || (Mt.hasOwnProperty(b) ? (H != null && (typeof H != "function" && fg(b, H), b === "onScroll" && Qn("scroll", e)), !v && Z !== H && (v = [])) : (v = v || []).push(b, H));
      }
      return M && (Gs(M, C[Rc]), (v = v || []).push(Rc, M)), v;
    }
    function W2(e, t, a, o, c) {
      a === "input" && c.type === "radio" && c.name != null && uv(e, c);
      var v = Eo(a, o), g = Eo(a, c);
      switch (H2(e, t, v, g), a) {
        case "input":
          Uu(e, c);
          break;
        case "textarea":
          Xh(e, c);
          break;
        case "select":
          $0(e, c);
          break;
      }
    }
    function K2(e) {
      {
        var t = e.toLowerCase();
        return cf.hasOwnProperty(t) && cf[t] || null;
      }
    }
    function G2(e, t, a, o, c, v, g) {
      var C, b;
      switch (C = Eo(t, a), cg(t, a), t) {
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
          for (var k = 0; k < Cp.length; k++)
            Qn(Cp[k], e);
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
          Yh(e, a), Qn("invalid", e);
          break;
        case "textarea":
          Qh(e, a), Qn("invalid", e);
          break;
      }
      sf(t, a);
      {
        b = /* @__PURE__ */ new Set();
        for (var M = e.attributes, j = 0; j < M.length; j++) {
          var H = M[j].name.toLowerCase();
          switch (H) {
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
            typeof ie == "string" ? e.textContent !== ie && (a[hs] !== !0 && vg(e.textContent, ie, v, g), Z = [Tc, ie]) : typeof ie == "number" && e.textContent !== "" + ie && (a[hs] !== !0 && vg(e.textContent, ie, v, g), Z = [Tc, "" + ie]);
          else if (Mt.hasOwnProperty(J))
            ie != null && (typeof ie != "function" && fg(J, ie), J === "onScroll" && Qn("scroll", e));
          else if (g && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof C == "boolean") {
            var $e = void 0, at = C && ft ? null : Zt(J);
            if (a[hs] !== !0) {
              if (!(J === ug || J === hs || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              J === "value" || J === "checked" || J === "selected")) {
                if (J === wp) {
                  var qe = e.innerHTML, on = ie ? ie[sg] : void 0;
                  if (on != null) {
                    var Qt = dw(e, on);
                    Qt !== qe && xp(J, qe, Qt);
                  }
                } else if (J === Rc) {
                  if (b.delete(J), fw) {
                    var Q = G0(ie);
                    $e = e.getAttribute("style"), Q !== $e && xp(J, $e, Q);
                  }
                } else if (C && !ft)
                  b.delete(J.toLowerCase()), $e = nr(e, J, ie), ie !== $e && xp(J, $e, ie);
                else if (!ht(J, at, C) && !Ut(J, ie, at, C)) {
                  var oe = !1;
                  if (at !== null)
                    b.delete(at.attributeName), $e = En(e, J, ie, at);
                  else {
                    var X = o;
                    if (X === Co && (X = af(t)), X === Co)
                      b.delete(J.toLowerCase());
                    else {
                      var ye = K2(J);
                      ye !== null && ye !== J && (oe = !0, b.delete(ye)), b.delete(J);
                    }
                    $e = nr(e, J, ie);
                  }
                  var He = ft;
                  !He && ie !== $e && !oe && xp(J, $e, ie);
                }
              }
            }
          }
        }
      switch (g && // $FlowFixMe - Should be inferred as not undefined.
      b.size > 0 && a[hs] !== !0 && cw(b), t) {
        case "input":
          $l(e), Bs(e, a, !0);
          break;
        case "textarea":
          $l(e), qh(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && pg(e);
          break;
      }
      return Z;
    }
    function Y2(e, t, a) {
      var o = e.nodeValue !== t;
      return o;
    }
    function kS(e, t) {
      {
        if (Ci)
          return;
        Ci = !0, h("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function MS(e, t) {
      {
        if (Ci)
          return;
        Ci = !0, h('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function OS(e, t, a) {
      {
        if (Ci)
          return;
        Ci = !0, h("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function NS(e, t) {
      {
        if (t === "" || Ci)
          return;
        Ci = !0, h('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function Q2(e, t, a) {
      switch (t) {
        case "input":
          Bh(e, a);
          return;
        case "textarea":
          vv(e, a);
          return;
        case "select":
          H0(e, a);
          return;
      }
    }
    var Tp = function() {
    }, Rp = function() {
    };
    {
      var X2 = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], pw = [
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
      ], q2 = pw.concat(["button"]), Z2 = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], hw = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Rp = function(e, t) {
        var a = Nt({}, e || hw), o = {
          tag: t
        };
        return pw.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), q2.indexOf(t) !== -1 && (a.pTagInButtonScope = null), X2.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = o, t === "form" && (a.formTag = o), t === "a" && (a.aTagInScope = o), t === "button" && (a.buttonTagInScope = o), t === "nobr" && (a.nobrTagInScope = o), t === "p" && (a.pTagInButtonScope = o), t === "li" && (a.listItemTagAutoclosing = o), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = o), a;
      };
      var J2 = function(e, t) {
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
            return Z2.indexOf(t) === -1;
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
      }, eO = function(e, t) {
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
      }, mw = {};
      Tp = function(e, t, a) {
        a = a || hw;
        var o = a.current, c = o && o.tag;
        t != null && (e != null && h("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var v = J2(e, c) ? null : o, g = v ? null : eO(e, a), C = v || g;
        if (C) {
          var b = C.tag, k = !!v + "|" + e + "|" + b;
          if (!mw[k]) {
            mw[k] = !0;
            var M = e, j = "";
            if (e === "#text" ? /\S/.test(t) ? M = "Text nodes" : (M = "Whitespace text nodes", j = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : M = "<" + e + ">", v) {
              var H = "";
              b === "table" && e === "tr" && (H += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), h("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", M, b, j, H);
            } else
              h("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", M, b);
          }
        }
      };
    }
    var hg = "suppressHydrationWarning", mg = "$", gg = "/$", _p = "$?", kp = "$!", tO = "style", DS = null, LS = null;
    function nO(e) {
      var t, a, o = e.nodeType;
      switch (o) {
        case Di:
        case Hl: {
          t = o === Di ? "#document" : "#fragment";
          var c = e.documentElement;
          a = c ? c.namespaceURI : hv(null, "");
          break;
        }
        default: {
          var v = o === pr ? e.parentNode : e, g = v.namespaceURI || null;
          t = v.tagName, a = hv(g, t);
          break;
        }
      }
      {
        var C = t.toLowerCase(), b = Rp(null, C);
        return {
          namespace: a,
          ancestorInfo: b
        };
      }
    }
    function rO(e, t, a) {
      {
        var o = e, c = hv(o.namespace, t), v = Rp(o.ancestorInfo, t);
        return {
          namespace: c,
          ancestorInfo: v
        };
      }
    }
    function i$(e) {
      return e;
    }
    function aO(e) {
      DS = Za(), LS = y2();
      var t = null;
      return Lr(!1), t;
    }
    function iO(e) {
      S2(LS), Lr(DS), DS = null, LS = null;
    }
    function oO(e, t, a, o, c) {
      var v;
      {
        var g = o;
        if (Tp(e, null, g.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var C = "" + t.children, b = Rp(g.ancestorInfo, e);
          Tp(null, C, b);
        }
        v = g.namespace;
      }
      var k = F2(e, t, a, v);
      return Np(c, k), FS(k, t), k;
    }
    function lO(e, t) {
      e.appendChild(t);
    }
    function uO(e, t, a, o, c) {
      switch (V2(e, t, a, o), t) {
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
    function sO(e, t, a, o, c, v) {
      {
        var g = v;
        if (typeof o.children != typeof a.children && (typeof o.children == "string" || typeof o.children == "number")) {
          var C = "" + o.children, b = Rp(g.ancestorInfo, t);
          Tp(null, C, b);
        }
      }
      return B2(e, t, a, o);
    }
    function AS(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function cO(e, t, a, o) {
      {
        var c = a;
        Tp(null, e, c.ancestorInfo);
      }
      var v = j2(e, t);
      return Np(o, v), v;
    }
    function fO() {
      var e = window.event;
      return e === void 0 ? Oo : sa(e.type);
    }
    var zS = typeof setTimeout == "function" ? setTimeout : void 0, dO = typeof clearTimeout == "function" ? clearTimeout : void 0, PS = -1, gw = typeof Promise == "function" ? Promise : void 0, vO = typeof queueMicrotask == "function" ? queueMicrotask : typeof gw != "undefined" ? function(e) {
      return gw.resolve(null).then(e).catch(pO);
    } : zS;
    function pO(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function hO(e, t, a, o) {
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
    function mO(e, t, a, o, c, v) {
      W2(e, t, a, o, c), FS(e, c);
    }
    function yw(e) {
      lf(e, "");
    }
    function gO(e, t, a) {
      e.nodeValue = a;
    }
    function yO(e, t) {
      e.appendChild(t);
    }
    function SO(e, t) {
      var a;
      e.nodeType === pr ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var o = e._reactRootContainer;
      o == null && a.onclick === null && pg(a);
    }
    function CO(e, t, a) {
      e.insertBefore(t, a);
    }
    function bO(e, t, a) {
      e.nodeType === pr ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function EO(e, t) {
      e.removeChild(t);
    }
    function wO(e, t) {
      e.nodeType === pr ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function US(e, t) {
      var a = t, o = 0;
      do {
        var c = a.nextSibling;
        if (e.removeChild(a), c && c.nodeType === pr) {
          var v = c.data;
          if (v === gg)
            if (o === 0) {
              e.removeChild(c), Yt(t);
              return;
            } else
              o--;
          else
            (v === mg || v === _p || v === kp) && o++;
        }
        a = c;
      } while (a);
      Yt(t);
    }
    function xO(e, t) {
      e.nodeType === pr ? US(e.parentNode, t) : e.nodeType === wa && US(e, t), Yt(e);
    }
    function TO(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function RO(e) {
      e.nodeValue = "";
    }
    function _O(e, t) {
      e = e;
      var a = t[tO], o = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = uf("display", o);
    }
    function kO(e, t) {
      e.nodeValue = t;
    }
    function MO(e) {
      e.nodeType === wa ? e.textContent = "" : e.nodeType === Di && e.documentElement && e.removeChild(e.documentElement);
    }
    function OO(e, t, a) {
      return e.nodeType !== wa || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function NO(e, t) {
      return t === "" || e.nodeType !== bo ? null : e;
    }
    function DO(e) {
      return e.nodeType !== pr ? null : e;
    }
    function Sw(e) {
      return e.data === _p;
    }
    function IS(e) {
      return e.data === kp;
    }
    function LO(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, o, c;
      return t && (a = t.dgst, o = t.msg, c = t.stck), {
        message: o,
        digest: a,
        stack: c
      };
    }
    function AO(e, t) {
      e._reactRetry = t;
    }
    function yg(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === wa || t === bo)
          break;
        if (t === pr) {
          var a = e.data;
          if (a === mg || a === kp || a === _p)
            break;
          if (a === gg)
            return null;
        }
      }
      return e;
    }
    function Mp(e) {
      return yg(e.nextSibling);
    }
    function zO(e) {
      return yg(e.firstChild);
    }
    function PO(e) {
      return yg(e.firstChild);
    }
    function UO(e) {
      return yg(e.nextSibling);
    }
    function IO(e, t, a, o, c, v, g) {
      Np(v, e), FS(e, a);
      var C;
      {
        var b = c;
        C = b.namespace;
      }
      var k = (v.mode & Bt) !== ot;
      return G2(e, t, a, C, o, k, g);
    }
    function $O(e, t, a, o) {
      return Np(a, e), a.mode & Bt, Y2(e, t);
    }
    function HO(e, t) {
      Np(t, e);
    }
    function FO(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === pr) {
          var o = t.data;
          if (o === gg) {
            if (a === 0)
              return Mp(t);
            a--;
          } else
            (o === mg || o === kp || o === _p) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Cw(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === pr) {
          var o = t.data;
          if (o === mg || o === kp || o === _p) {
            if (a === 0)
              return t;
            a--;
          } else
            o === gg && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function jO(e) {
      Yt(e);
    }
    function VO(e) {
      Yt(e);
    }
    function BO(e) {
      return e !== "head" && e !== "body";
    }
    function WO(e, t, a, o) {
      var c = !0;
      vg(t.nodeValue, a, o, c);
    }
    function KO(e, t, a, o, c, v) {
      if (t[hg] !== !0) {
        var g = !0;
        vg(o.nodeValue, c, v, g);
      }
    }
    function GO(e, t) {
      t.nodeType === wa ? kS(e, t) : t.nodeType === pr || MS(e, t);
    }
    function YO(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === wa ? kS(a, t) : t.nodeType === pr || MS(a, t));
      }
    }
    function QO(e, t, a, o, c) {
      (c || t[hg] !== !0) && (o.nodeType === wa ? kS(a, o) : o.nodeType === pr || MS(a, o));
    }
    function XO(e, t, a) {
      OS(e, t);
    }
    function qO(e, t) {
      NS(e, t);
    }
    function ZO(e, t, a) {
      {
        var o = e.parentNode;
        o !== null && OS(o, t);
      }
    }
    function JO(e, t) {
      {
        var a = e.parentNode;
        a !== null && NS(a, t);
      }
    }
    function eN(e, t, a, o, c, v) {
      (v || t[hg] !== !0) && OS(a, o);
    }
    function tN(e, t, a, o, c) {
      (c || t[hg] !== !0) && NS(a, o);
    }
    function nN(e) {
      h("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function rN(e) {
      bp(e);
    }
    var pd = Math.random().toString(36).slice(2), hd = "__reactFiber$" + pd, $S = "__reactProps$" + pd, Op = "__reactContainer$" + pd, HS = "__reactEvents$" + pd, aN = "__reactListeners$" + pd, iN = "__reactHandles$" + pd;
    function oN(e) {
      delete e[hd], delete e[$S], delete e[HS], delete e[aN], delete e[iN];
    }
    function Np(e, t) {
      t[hd] = e;
    }
    function Sg(e, t) {
      t[Op] = e;
    }
    function bw(e) {
      e[Op] = null;
    }
    function Dp(e) {
      return !!e[Op];
    }
    function _c(e) {
      var t = e[hd];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[Op] || a[hd], t) {
          var o = t.alternate;
          if (t.child !== null || o !== null && o.child !== null)
            for (var c = Cw(e); c !== null; ) {
              var v = c[hd];
              if (v)
                return v;
              c = Cw(c);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function ms(e) {
      var t = e[hd] || e[Op];
      return t && (t.tag === D || t.tag === z || t.tag === W || t.tag === _) ? t : null;
    }
    function md(e) {
      if (e.tag === D || e.tag === z)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Cg(e) {
      return e[$S] || null;
    }
    function FS(e, t) {
      e[$S] = t;
    }
    function lN(e) {
      var t = e[HS];
      return t === void 0 && (t = e[HS] = /* @__PURE__ */ new Set()), t;
    }
    var Ew = {}, ww = u.ReactDebugCurrentFrame;
    function bg(e) {
      if (e) {
        var t = e._owner, a = Wa(e.type, e._source, t ? t.type : null);
        ww.setExtraStackFrame(a);
      } else
        ww.setExtraStackFrame(null);
    }
    function zo(e, t, a, o, c) {
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
            C && !(C instanceof Error) && (bg(c), h("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, g, typeof C), bg(null)), C instanceof Error && !(C.message in Ew) && (Ew[C.message] = !0, bg(c), h("Failed %s type: %s", a, C.message), bg(null));
          }
      }
    }
    var jS = [], Eg;
    Eg = [];
    var pu = -1;
    function gs(e) {
      return {
        current: e
      };
    }
    function Da(e, t) {
      if (pu < 0) {
        h("Unexpected pop.");
        return;
      }
      t !== Eg[pu] && h("Unexpected Fiber popped."), e.current = jS[pu], jS[pu] = null, Eg[pu] = null, pu--;
    }
    function La(e, t, a) {
      pu++, jS[pu] = e.current, Eg[pu] = a, e.current = t;
    }
    var VS;
    VS = {};
    var Ui = {};
    Object.freeze(Ui);
    var hu = gs(Ui), wl = gs(!1), BS = Ui;
    function gd(e, t, a) {
      return a && xl(t) ? BS : hu.current;
    }
    function xw(e, t, a) {
      {
        var o = e.stateNode;
        o.__reactInternalMemoizedUnmaskedChildContext = t, o.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function yd(e, t) {
      {
        var a = e.type, o = a.contextTypes;
        if (!o)
          return Ui;
        var c = e.stateNode;
        if (c && c.__reactInternalMemoizedUnmaskedChildContext === t)
          return c.__reactInternalMemoizedMaskedChildContext;
        var v = {};
        for (var g in o)
          v[g] = t[g];
        {
          var C = ct(e) || "Unknown";
          zo(o, v, "context", C);
        }
        return c && xw(e, t, v), v;
      }
    }
    function wg() {
      return wl.current;
    }
    function xl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function xg(e) {
      Da(wl, e), Da(hu, e);
    }
    function WS(e) {
      Da(wl, e), Da(hu, e);
    }
    function Tw(e, t, a) {
      {
        if (hu.current !== Ui)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        La(hu, t, e), La(wl, a, e);
      }
    }
    function Rw(e, t, a) {
      {
        var o = e.stateNode, c = t.childContextTypes;
        if (typeof o.getChildContext != "function") {
          {
            var v = ct(e) || "Unknown";
            VS[v] || (VS[v] = !0, h("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", v, v));
          }
          return a;
        }
        var g = o.getChildContext();
        for (var C in g)
          if (!(C in c))
            throw new Error((ct(e) || "Unknown") + '.getChildContext(): key "' + C + '" is not defined in childContextTypes.');
        {
          var b = ct(e) || "Unknown";
          zo(c, g, "child context", b);
        }
        return Nt({}, a, g);
      }
    }
    function Tg(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Ui;
        return BS = hu.current, La(hu, a, e), La(wl, wl.current, e), !0;
      }
    }
    function _w(e, t, a) {
      {
        var o = e.stateNode;
        if (!o)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var c = Rw(e, t, BS);
          o.__reactInternalMemoizedMergedChildContext = c, Da(wl, e), Da(hu, e), La(hu, c, e), La(wl, a, e);
        } else
          Da(wl, e), La(wl, a, e);
      }
    }
    function uN(e) {
      {
        if (!zv(e) || e.tag !== T)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case _:
              return t.stateNode.context;
            case T: {
              var a = t.type;
              if (xl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var ys = 0, Rg = 1, mu = null, KS = !1, GS = !1;
    function kw(e) {
      mu === null ? mu = [e] : mu.push(e);
    }
    function sN(e) {
      KS = !0, kw(e);
    }
    function Mw() {
      KS && Ss();
    }
    function Ss() {
      if (!GS && mu !== null) {
        GS = !0;
        var e = 0, t = mi();
        try {
          var a = !0, o = mu;
          for (br(ea); e < o.length; e++) {
            var c = o[e];
            do
              c = c(a);
            while (c !== null);
          }
          mu = null, KS = !1;
        } catch (v) {
          throw mu !== null && (mu = mu.slice(e + 1)), Sf(bf, Ss), v;
        } finally {
          br(t), GS = !1;
        }
      }
      return null;
    }
    var Sd = [], Cd = 0, _g = null, kg = 0, Ji = [], eo = 0, kc = null, gu = 1, yu = "";
    function cN(e) {
      return Oc(), (e.flags & Dv) !== nt;
    }
    function fN(e) {
      return Oc(), kg;
    }
    function dN() {
      var e = yu, t = gu, a = t & ~vN(t);
      return a.toString(32) + e;
    }
    function Mc(e, t) {
      Oc(), Sd[Cd++] = kg, Sd[Cd++] = _g, _g = e, kg = t;
    }
    function Ow(e, t, a) {
      Oc(), Ji[eo++] = gu, Ji[eo++] = yu, Ji[eo++] = kc, kc = e;
      var o = gu, c = yu, v = Mg(o) - 1, g = o & ~(1 << v), C = a + 1, b = Mg(t) + v;
      if (b > 30) {
        var k = v - v % 5, M = (1 << k) - 1, j = (g & M).toString(32), H = g >> k, Z = v - k, J = Mg(t) + Z, ie = C << Z, $e = ie | H, at = j + c;
        gu = 1 << J | $e, yu = at;
      } else {
        var qe = C << v, on = qe | g, Qt = c;
        gu = 1 << b | on, yu = Qt;
      }
    }
    function YS(e) {
      Oc();
      var t = e.return;
      if (t !== null) {
        var a = 1, o = 0;
        Mc(e, a), Ow(e, a, o);
      }
    }
    function Mg(e) {
      return 32 - _f(e);
    }
    function vN(e) {
      return 1 << Mg(e) - 1;
    }
    function QS(e) {
      for (; e === _g; )
        _g = Sd[--Cd], Sd[Cd] = null, kg = Sd[--Cd], Sd[Cd] = null;
      for (; e === kc; )
        kc = Ji[--eo], Ji[eo] = null, yu = Ji[--eo], Ji[eo] = null, gu = Ji[--eo], Ji[eo] = null;
    }
    function pN() {
      return Oc(), kc !== null ? {
        id: gu,
        overflow: yu
      } : null;
    }
    function hN(e, t) {
      Oc(), Ji[eo++] = gu, Ji[eo++] = yu, Ji[eo++] = kc, gu = t.id, yu = t.overflow, kc = e;
    }
    function Oc() {
      fa() || h("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var ca = null, to = null, Po = !1, Nc = !1, Cs = null;
    function mN() {
      Po && h("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function Nw() {
      Nc = !0;
    }
    function gN() {
      return Nc;
    }
    function yN(e) {
      var t = e.stateNode.containerInfo;
      return to = PO(t), ca = e, Po = !0, Cs = null, Nc = !1, !0;
    }
    function SN(e, t, a) {
      return to = UO(t), ca = e, Po = !0, Cs = null, Nc = !1, a !== null && hN(e, a), !0;
    }
    function Dw(e, t) {
      switch (e.tag) {
        case _: {
          GO(e.stateNode.containerInfo, t);
          break;
        }
        case D: {
          var a = (e.mode & Bt) !== ot;
          QO(
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
          o.dehydrated !== null && YO(o.dehydrated, t);
          break;
        }
      }
    }
    function Lw(e, t) {
      Dw(e, t);
      var a = EA();
      a.stateNode = t, a.return = e;
      var o = e.deletions;
      o === null ? (e.deletions = [a], e.flags |= yn) : o.push(a);
    }
    function XS(e, t) {
      {
        if (Nc)
          return;
        switch (e.tag) {
          case _: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case D:
                var o = t.type;
                t.pendingProps, XO(a, o);
                break;
              case z:
                var c = t.pendingProps;
                qO(a, c);
                break;
            }
            break;
          }
          case D: {
            var v = e.type, g = e.memoizedProps, C = e.stateNode;
            switch (t.tag) {
              case D: {
                var b = t.type, k = t.pendingProps, M = (e.mode & Bt) !== ot;
                eN(
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
                var j = t.pendingProps, H = (e.mode & Bt) !== ot;
                tN(
                  v,
                  g,
                  C,
                  j,
                  // TODO: Delete this argument when we remove the legacy root API.
                  H
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
                case D:
                  var ie = t.type;
                  t.pendingProps, ZO(J, ie);
                  break;
                case z:
                  var $e = t.pendingProps;
                  JO(J, $e);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function Aw(e, t) {
      t.flags = t.flags & ~fi | Pn, XS(e, t);
    }
    function zw(e, t) {
      switch (e.tag) {
        case D: {
          var a = e.type;
          e.pendingProps;
          var o = OO(t, a);
          return o !== null ? (e.stateNode = o, ca = e, to = zO(o), !0) : !1;
        }
        case z: {
          var c = e.pendingProps, v = NO(t, c);
          return v !== null ? (e.stateNode = v, ca = e, to = null, !0) : !1;
        }
        case W: {
          var g = DO(t);
          if (g !== null) {
            var C = {
              dehydrated: g,
              treeContext: pN(),
              retryLane: Oa
            };
            e.memoizedState = C;
            var b = wA(g);
            return b.return = e, e.child = b, ca = e, to = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function qS(e) {
      return (e.mode & Bt) !== ot && (e.flags & yt) === nt;
    }
    function ZS(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function JS(e) {
      if (Po) {
        var t = to;
        if (!t) {
          qS(e) && (XS(ca, e), ZS()), Aw(ca, e), Po = !1, ca = e;
          return;
        }
        var a = t;
        if (!zw(e, t)) {
          qS(e) && (XS(ca, e), ZS()), t = Mp(a);
          var o = ca;
          if (!t || !zw(e, t)) {
            Aw(ca, e), Po = !1, ca = e;
            return;
          }
          Lw(o, a);
        }
      }
    }
    function CN(e, t, a) {
      var o = e.stateNode, c = !Nc, v = IO(o, e.type, e.memoizedProps, t, a, e, c);
      return e.updateQueue = v, v !== null;
    }
    function bN(e) {
      var t = e.stateNode, a = e.memoizedProps, o = $O(t, a, e);
      if (o) {
        var c = ca;
        if (c !== null)
          switch (c.tag) {
            case _: {
              var v = c.stateNode.containerInfo, g = (c.mode & Bt) !== ot;
              WO(
                v,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
            case D: {
              var C = c.type, b = c.memoizedProps, k = c.stateNode, M = (c.mode & Bt) !== ot;
              KO(
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
    function EN(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      HO(a, e);
    }
    function wN(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return FO(a);
    }
    function Pw(e) {
      for (var t = e.return; t !== null && t.tag !== D && t.tag !== _ && t.tag !== W; )
        t = t.return;
      ca = t;
    }
    function Og(e) {
      if (e !== ca)
        return !1;
      if (!Po)
        return Pw(e), Po = !0, !1;
      if (e.tag !== _ && (e.tag !== D || BO(e.type) && !AS(e.type, e.memoizedProps))) {
        var t = to;
        if (t)
          if (qS(e))
            Uw(e), ZS();
          else
            for (; t; )
              Lw(e, t), t = Mp(t);
      }
      return Pw(e), e.tag === W ? to = wN(e) : to = ca ? Mp(e.stateNode) : null, !0;
    }
    function xN() {
      return Po && to !== null;
    }
    function Uw(e) {
      for (var t = to; t; )
        Dw(e, t), t = Mp(t);
    }
    function bd() {
      ca = null, to = null, Po = !1, Nc = !1;
    }
    function Iw() {
      Cs !== null && (DT(Cs), Cs = null);
    }
    function fa() {
      return Po;
    }
    function e1(e) {
      Cs === null ? Cs = [e] : Cs.push(e);
    }
    var TN = u.ReactCurrentBatchConfig, RN = null;
    function _N() {
      return TN.transition;
    }
    var Uo = {
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
      var kN = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Gn && (t = a), a = a.return;
        return t;
      }, Dc = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, Lp = [], Ap = [], zp = [], Pp = [], Up = [], Ip = [], Lc = /* @__PURE__ */ new Set();
      Uo.recordUnsafeLifecycleWarnings = function(e, t) {
        Lc.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && Lp.push(e), e.mode & Gn && typeof t.UNSAFE_componentWillMount == "function" && Ap.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && zp.push(e), e.mode & Gn && typeof t.UNSAFE_componentWillReceiveProps == "function" && Pp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && Up.push(e), e.mode & Gn && typeof t.UNSAFE_componentWillUpdate == "function" && Ip.push(e));
      }, Uo.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        Lp.length > 0 && (Lp.forEach(function(H) {
          e.add(ct(H) || "Component"), Lc.add(H.type);
        }), Lp = []);
        var t = /* @__PURE__ */ new Set();
        Ap.length > 0 && (Ap.forEach(function(H) {
          t.add(ct(H) || "Component"), Lc.add(H.type);
        }), Ap = []);
        var a = /* @__PURE__ */ new Set();
        zp.length > 0 && (zp.forEach(function(H) {
          a.add(ct(H) || "Component"), Lc.add(H.type);
        }), zp = []);
        var o = /* @__PURE__ */ new Set();
        Pp.length > 0 && (Pp.forEach(function(H) {
          o.add(ct(H) || "Component"), Lc.add(H.type);
        }), Pp = []);
        var c = /* @__PURE__ */ new Set();
        Up.length > 0 && (Up.forEach(function(H) {
          c.add(ct(H) || "Component"), Lc.add(H.type);
        }), Up = []);
        var v = /* @__PURE__ */ new Set();
        if (Ip.length > 0 && (Ip.forEach(function(H) {
          v.add(ct(H) || "Component"), Lc.add(H.type);
        }), Ip = []), t.size > 0) {
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
      var Ng = /* @__PURE__ */ new Map(), $w = /* @__PURE__ */ new Set();
      Uo.recordLegacyContextWarning = function(e, t) {
        var a = kN(e);
        if (a === null) {
          h("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!$w.has(e.type)) {
          var o = Ng.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (o === void 0 && (o = [], Ng.set(a, o)), o.push(e));
        }
      }, Uo.flushLegacyContextWarning = function() {
        Ng.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], o = /* @__PURE__ */ new Set();
            e.forEach(function(v) {
              o.add(ct(v) || "Component"), $w.add(v.type);
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
      }, Uo.discardPendingWarnings = function() {
        Lp = [], Ap = [], zp = [], Pp = [], Up = [], Ip = [], Ng = /* @__PURE__ */ new Map();
      };
    }
    function Io(e, t) {
      if (e && e.defaultProps) {
        var a = Nt({}, t), o = e.defaultProps;
        for (var c in o)
          a[c] === void 0 && (a[c] = o[c]);
        return a;
      }
      return t;
    }
    var t1 = gs(null), n1;
    n1 = {};
    var Dg = null, Ed = null, r1 = null, Lg = !1;
    function Ag() {
      Dg = null, Ed = null, r1 = null, Lg = !1;
    }
    function Hw() {
      Lg = !0;
    }
    function Fw() {
      Lg = !1;
    }
    function jw(e, t, a) {
      La(t1, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== n1 && h("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = n1;
    }
    function a1(e, t) {
      var a = t1.current;
      Da(t1, t), e._currentValue = a;
    }
    function i1(e, t, a) {
      for (var o = e; o !== null; ) {
        var c = o.alternate;
        if (ru(o.childLanes, t) ? c !== null && !ru(c.childLanes, t) && (c.childLanes = Lt(c.childLanes, t)) : (o.childLanes = Lt(o.childLanes, t), c !== null && (c.childLanes = Lt(c.childLanes, t))), o === a)
          break;
        o = o.return;
      }
      o !== a && h("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function MN(e, t, a) {
      ON(e, t, a);
    }
    function ON(e, t, a) {
      var o = e.child;
      for (o !== null && (o.return = e); o !== null; ) {
        var c = void 0, v = o.dependencies;
        if (v !== null) {
          c = o.child;
          for (var g = v.firstContext; g !== null; ) {
            if (g.context === t) {
              if (o.tag === T) {
                var C = Cr(a), b = Su(Dn, C);
                b.tag = Pg;
                var k = o.updateQueue;
                if (k !== null) {
                  var M = k.shared, j = M.pending;
                  j === null ? b.next = b : (b.next = j.next, j.next = b), M.pending = b;
                }
              }
              o.lanes = Lt(o.lanes, a);
              var H = o.alternate;
              H !== null && (H.lanes = Lt(H.lanes, a)), i1(o.return, a, e), v.lanes = Lt(v.lanes, a);
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
          J !== null && (J.lanes = Lt(J.lanes, a)), i1(Z, a, e), c = o.sibling;
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
      Dg = e, Ed = null, r1 = null;
      var a = e.dependencies;
      if (a !== null) {
        var o = a.firstContext;
        o !== null && (Na(a.lanes, t) && Zp(), a.firstContext = null);
      }
    }
    function zr(e) {
      Lg && h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (r1 !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Ed === null) {
          if (Dg === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Ed = a, Dg.dependencies = {
            lanes: ue,
            firstContext: a
          };
        } else
          Ed = Ed.next = a;
      }
      return t;
    }
    var Ac = null;
    function o1(e) {
      Ac === null ? Ac = [e] : Ac.push(e);
    }
    function NN() {
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
    function Vw(e, t, a, o) {
      var c = t.interleaved;
      return c === null ? (a.next = a, o1(t)) : (a.next = c.next, c.next = a), t.interleaved = a, zg(e, o);
    }
    function DN(e, t, a, o) {
      var c = t.interleaved;
      c === null ? (a.next = a, o1(t)) : (a.next = c.next, c.next = a), t.interleaved = a;
    }
    function LN(e, t, a, o) {
      var c = t.interleaved;
      return c === null ? (a.next = a, o1(t)) : (a.next = c.next, c.next = a), t.interleaved = a, zg(e, o);
    }
    function bi(e, t) {
      return zg(e, t);
    }
    var AN = zg;
    function zg(e, t) {
      e.lanes = Lt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Lt(a.lanes, t)), a === null && (e.flags & (Pn | fi)) !== nt && BT(e);
      for (var o = e, c = e.return; c !== null; )
        c.childLanes = Lt(c.childLanes, t), a = c.alternate, a !== null ? a.childLanes = Lt(a.childLanes, t) : (c.flags & (Pn | fi)) !== nt && BT(e), o = c, c = c.return;
      if (o.tag === _) {
        var v = o.stateNode;
        return v;
      } else
        return null;
    }
    var Bw = 0, Ww = 1, Pg = 2, l1 = 3, Ug = !1, u1, Ig;
    u1 = !1, Ig = null;
    function s1(e) {
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
    function Kw(e, t) {
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
    function Su(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: Bw,
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
      if (Ig === c && !u1 && (h("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), u1 = !0), AL()) {
        var v = c.pending;
        return v === null ? t.next = t : (t.next = v.next, v.next = t), c.pending = t, AN(e, a);
      } else
        return LN(e, c, t, a);
    }
    function $g(e, t, a) {
      var o = t.updateQueue;
      if (o !== null) {
        var c = o.shared;
        if (Yv(a)) {
          var v = c.lanes;
          v = Xv(v, e.pendingLanes);
          var g = Lt(v, a);
          c.lanes = g, ts(e, g);
        }
      }
    }
    function c1(e, t) {
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
    function zN(e, t, a, o, c, v) {
      switch (a.tag) {
        case Ww: {
          var g = a.payload;
          if (typeof g == "function") {
            Hw();
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
              Fw();
            }
            return C;
          }
          return g;
        }
        case l1:
          e.flags = e.flags & ~Or | yt;
        case Bw: {
          var b = a.payload, k;
          if (typeof b == "function") {
            Hw(), k = b.call(v, o, c);
            {
              if (e.mode & Gn) {
                Sr(!0);
                try {
                  b.call(v, o, c);
                } finally {
                  Sr(!1);
                }
              }
              Fw();
            }
          } else
            k = b;
          return k == null ? o : Nt({}, o, k);
        }
        case Pg:
          return Ug = !0, o;
      }
      return o;
    }
    function Hg(e, t, a, o) {
      var c = e.updateQueue;
      Ug = !1, Ig = c.shared;
      var v = c.firstBaseUpdate, g = c.lastBaseUpdate, C = c.shared.pending;
      if (C !== null) {
        c.shared.pending = null;
        var b = C, k = b.next;
        b.next = null, g === null ? v = k : g.next = k, g = b;
        var M = e.alternate;
        if (M !== null) {
          var j = M.updateQueue, H = j.lastBaseUpdate;
          H !== g && (H === null ? j.firstBaseUpdate = k : H.next = k, j.lastBaseUpdate = b);
        }
      }
      if (v !== null) {
        var Z = c.baseState, J = ue, ie = null, $e = null, at = null, qe = v;
        do {
          var on = qe.lane, Qt = qe.eventTime;
          if (ru(o, on)) {
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
            Z = zN(e, c, qe, Z, t, a);
            var X = qe.callback;
            if (X !== null && // If the update was already committed, we should not queue its
            // callback again.
            qe.lane !== rn) {
              e.flags |= Gi;
              var ye = c.effects;
              ye === null ? c.effects = [qe] : ye.push(qe);
            }
          } else {
            var Q = {
              eventTime: Qt,
              lane: on,
              tag: qe.tag,
              payload: qe.payload,
              callback: qe.callback,
              next: null
            };
            at === null ? ($e = at = Q, ie = Z) : at = at.next = Q, J = Lt(J, on);
          }
          if (qe = qe.next, qe === null) {
            if (C = c.shared.pending, C === null)
              break;
            var He = C, Ae = He.next;
            He.next = null, qe = Ae, c.lastBaseUpdate = He, c.shared.pending = null;
          }
        } while (!0);
        at === null && (ie = Z), c.baseState = ie, c.firstBaseUpdate = $e, c.lastBaseUpdate = at;
        var mt = c.shared.interleaved;
        if (mt !== null) {
          var Tt = mt;
          do
            J = Lt(J, Tt.lane), Tt = Tt.next;
          while (Tt !== mt);
        } else
          v === null && (c.shared.lanes = ue);
        ch(J), e.lanes = J, e.memoizedState = Z;
      }
      Ig = null;
    }
    function PN(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function Gw() {
      Ug = !1;
    }
    function Fg() {
      return Ug;
    }
    function Yw(e, t, a) {
      var o = t.effects;
      if (t.effects = null, o !== null)
        for (var c = 0; c < o.length; c++) {
          var v = o[c], g = v.callback;
          g !== null && (v.callback = null, PN(g, a));
        }
    }
    var f1 = {}, Qw = new i.Component().refs, d1, v1, p1, h1, m1, Xw, jg, g1, y1, S1;
    {
      d1 = /* @__PURE__ */ new Set(), v1 = /* @__PURE__ */ new Set(), p1 = /* @__PURE__ */ new Set(), h1 = /* @__PURE__ */ new Set(), g1 = /* @__PURE__ */ new Set(), m1 = /* @__PURE__ */ new Set(), y1 = /* @__PURE__ */ new Set(), S1 = /* @__PURE__ */ new Set();
      var qw = /* @__PURE__ */ new Set();
      jg = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          qw.has(a) || (qw.add(a), h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Xw = function(e, t) {
        if (t === void 0) {
          var a = nn(e) || "Component";
          m1.has(a) || (m1.add(a), h("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(f1, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(f1);
    }
    function C1(e, t, a, o) {
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
        Xw(t, v);
      }
      var g = v == null ? c : Nt({}, c, v);
      if (e.memoizedState = g, e.lanes === ue) {
        var C = e.updateQueue;
        C.baseState = g;
      }
    }
    var b1 = {
      isMounted: Qa,
      enqueueSetState: function(e, t, a) {
        var o = si(e), c = ti(), v = Ms(o), g = Su(c, v);
        g.payload = t, a != null && (jg(a, "setState"), g.callback = a);
        var C = bs(o, g, v);
        C !== null && (Yr(C, o, v, c), $g(C, o, v)), pl(o, v);
      },
      enqueueReplaceState: function(e, t, a) {
        var o = si(e), c = ti(), v = Ms(o), g = Su(c, v);
        g.tag = Ww, g.payload = t, a != null && (jg(a, "replaceState"), g.callback = a);
        var C = bs(o, g, v);
        C !== null && (Yr(C, o, v, c), $g(C, o, v)), pl(o, v);
      },
      enqueueForceUpdate: function(e, t) {
        var a = si(e), o = ti(), c = Ms(a), v = Su(o, c);
        v.tag = Pg, t != null && (jg(t, "forceUpdate"), v.callback = t);
        var g = bs(a, v, c);
        g !== null && (Yr(g, a, c, o), $g(g, a, c)), Bv(a, c);
      }
    };
    function Zw(e, t, a, o, c, v, g) {
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
    function UN(e, t, a) {
      var o = e.stateNode;
      {
        var c = nn(t) || "Component", v = o.render;
        v || (t.prototype && typeof t.prototype.render == "function" ? h("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", c) : h("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", c)), o.getInitialState && !o.getInitialState.isReactClassApproved && !o.state && h("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", c), o.getDefaultProps && !o.getDefaultProps.isReactClassApproved && h("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", c), o.propTypes && h("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", c), o.contextType && h("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", c), o.contextTypes && h("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", c), t.contextType && t.contextTypes && !y1.has(t) && (y1.add(t), h("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", c)), typeof o.componentShouldUpdate == "function" && h("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", c), t.prototype && t.prototype.isPureReactComponent && typeof o.shouldComponentUpdate != "undefined" && h("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", nn(t) || "A pure component"), typeof o.componentDidUnmount == "function" && h("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", c), typeof o.componentDidReceiveProps == "function" && h("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", c), typeof o.componentWillRecieveProps == "function" && h("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", c), typeof o.UNSAFE_componentWillRecieveProps == "function" && h("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", c);
        var g = o.props !== a;
        o.props !== void 0 && g && h("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", c, c), o.defaultProps && h("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", c, c), typeof o.getSnapshotBeforeUpdate == "function" && typeof o.componentDidUpdate != "function" && !p1.has(t) && (p1.add(t), h("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", nn(t))), typeof o.getDerivedStateFromProps == "function" && h("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof o.getDerivedStateFromError == "function" && h("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", c), typeof t.getSnapshotBeforeUpdate == "function" && h("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", c);
        var C = o.state;
        C && (typeof C != "object" || kr(C)) && h("%s.state: must be set to an object or null", c), typeof o.getChildContext == "function" && typeof t.childContextTypes != "object" && h("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", c);
      }
    }
    function Jw(e, t) {
      t.updater = b1, e.stateNode = t, Wu(t, e), t._reactInternalInstance = f1;
    }
    function ex(e, t, a) {
      var o = !1, c = Ui, v = Ui, g = t.contextType;
      if ("contextType" in t) {
        var C = (
          // Allow null for conditional declaration
          g === null || g !== void 0 && g.$$typeof === fr && g._context === void 0
        );
        if (!C && !S1.has(t)) {
          S1.add(t);
          var b = "";
          g === void 0 ? b = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof g != "object" ? b = " However, it is set to a " + typeof g + "." : g.$$typeof === Ln ? b = " Did you accidentally pass the Context.Provider instead?" : g._context !== void 0 ? b = " Did you accidentally pass the Context.Consumer instead?" : b = " However, it is set to an object with keys {" + Object.keys(g).join(", ") + "}.", h("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", nn(t) || "Component", b);
        }
      }
      if (typeof g == "object" && g !== null)
        v = zr(g);
      else {
        c = gd(e, t, !0);
        var k = t.contextTypes;
        o = k != null, v = o ? yd(e, c) : Ui;
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
      Jw(e, M);
      {
        if (typeof t.getDerivedStateFromProps == "function" && j === null) {
          var H = nn(t) || "Component";
          v1.has(H) || (v1.add(H), h("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", H, M.state === null ? "null" : "undefined", H));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof M.getSnapshotBeforeUpdate == "function") {
          var Z = null, J = null, ie = null;
          if (typeof M.componentWillMount == "function" && M.componentWillMount.__suppressDeprecationWarning !== !0 ? Z = "componentWillMount" : typeof M.UNSAFE_componentWillMount == "function" && (Z = "UNSAFE_componentWillMount"), typeof M.componentWillReceiveProps == "function" && M.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? J = "componentWillReceiveProps" : typeof M.UNSAFE_componentWillReceiveProps == "function" && (J = "UNSAFE_componentWillReceiveProps"), typeof M.componentWillUpdate == "function" && M.componentWillUpdate.__suppressDeprecationWarning !== !0 ? ie = "componentWillUpdate" : typeof M.UNSAFE_componentWillUpdate == "function" && (ie = "UNSAFE_componentWillUpdate"), Z !== null || J !== null || ie !== null) {
            var $e = nn(t) || "Component", at = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            h1.has($e) || (h1.add($e), h(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, $e, at, Z !== null ? `
  ` + Z : "", J !== null ? `
  ` + J : "", ie !== null ? `
  ` + ie : ""));
          }
        }
      }
      return o && xw(e, c, v), M;
    }
    function IN(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (h("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", ct(e) || "Component"), b1.enqueueReplaceState(t, t.state, null));
    }
    function tx(e, t, a, o) {
      var c = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, o), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, o), t.state !== c) {
        {
          var v = ct(e) || "Component";
          d1.has(v) || (d1.add(v), h("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", v));
        }
        b1.enqueueReplaceState(t, t.state, null);
      }
    }
    function E1(e, t, a, o) {
      UN(e, t, a);
      var c = e.stateNode;
      c.props = a, c.state = e.memoizedState, c.refs = Qw, s1(e);
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
          g1.has(C) || (g1.add(C), h("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", C));
        }
        e.mode & Gn && Uo.recordLegacyContextWarning(e, c), Uo.recordUnsafeLifecycleWarnings(e, c);
      }
      c.state = e.memoizedState;
      var b = t.getDerivedStateFromProps;
      if (typeof b == "function" && (C1(e, t, b, a), c.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof c.getSnapshotBeforeUpdate != "function" && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (IN(e, c), Hg(e, a, c, o), c.state = e.memoizedState), typeof c.componentDidMount == "function") {
        var k = Dt;
        k |= Ta, (e.mode & pi) !== ot && (k |= Ra), e.flags |= k;
      }
    }
    function $N(e, t, a, o) {
      var c = e.stateNode, v = e.memoizedProps;
      c.props = v;
      var g = c.context, C = t.contextType, b = Ui;
      if (typeof C == "object" && C !== null)
        b = zr(C);
      else {
        var k = gd(e, t, !0);
        b = yd(e, k);
      }
      var M = t.getDerivedStateFromProps, j = typeof M == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !j && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (v !== a || g !== b) && tx(e, c, a, b), Gw();
      var H = e.memoizedState, Z = c.state = H;
      if (Hg(e, a, c, o), Z = e.memoizedState, v === a && H === Z && !wg() && !Fg()) {
        if (typeof c.componentDidMount == "function") {
          var J = Dt;
          J |= Ta, (e.mode & pi) !== ot && (J |= Ra), e.flags |= J;
        }
        return !1;
      }
      typeof M == "function" && (C1(e, t, M, a), Z = e.memoizedState);
      var ie = Fg() || Zw(e, t, v, a, H, Z, b);
      if (ie) {
        if (!j && (typeof c.UNSAFE_componentWillMount == "function" || typeof c.componentWillMount == "function") && (typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()), typeof c.componentDidMount == "function") {
          var $e = Dt;
          $e |= Ta, (e.mode & pi) !== ot && ($e |= Ra), e.flags |= $e;
        }
      } else {
        if (typeof c.componentDidMount == "function") {
          var at = Dt;
          at |= Ta, (e.mode & pi) !== ot && (at |= Ra), e.flags |= at;
        }
        e.memoizedProps = a, e.memoizedState = Z;
      }
      return c.props = a, c.state = Z, c.context = b, ie;
    }
    function HN(e, t, a, o, c) {
      var v = t.stateNode;
      Kw(e, t);
      var g = t.memoizedProps, C = t.type === t.elementType ? g : Io(t.type, g);
      v.props = C;
      var b = t.pendingProps, k = v.context, M = a.contextType, j = Ui;
      if (typeof M == "object" && M !== null)
        j = zr(M);
      else {
        var H = gd(t, a, !0);
        j = yd(t, H);
      }
      var Z = a.getDerivedStateFromProps, J = typeof Z == "function" || typeof v.getSnapshotBeforeUpdate == "function";
      !J && (typeof v.UNSAFE_componentWillReceiveProps == "function" || typeof v.componentWillReceiveProps == "function") && (g !== b || k !== j) && tx(t, v, o, j), Gw();
      var ie = t.memoizedState, $e = v.state = ie;
      if (Hg(t, o, v, c), $e = t.memoizedState, g === b && ie === $e && !wg() && !Fg() && !de)
        return typeof v.componentDidUpdate == "function" && (g !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Dt), typeof v.getSnapshotBeforeUpdate == "function" && (g !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= ci), !1;
      typeof Z == "function" && (C1(t, a, Z, o), $e = t.memoizedState);
      var at = Fg() || Zw(t, a, C, o, ie, $e, j) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      de;
      return at ? (!J && (typeof v.UNSAFE_componentWillUpdate == "function" || typeof v.componentWillUpdate == "function") && (typeof v.componentWillUpdate == "function" && v.componentWillUpdate(o, $e, j), typeof v.UNSAFE_componentWillUpdate == "function" && v.UNSAFE_componentWillUpdate(o, $e, j)), typeof v.componentDidUpdate == "function" && (t.flags |= Dt), typeof v.getSnapshotBeforeUpdate == "function" && (t.flags |= ci)) : (typeof v.componentDidUpdate == "function" && (g !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= Dt), typeof v.getSnapshotBeforeUpdate == "function" && (g !== e.memoizedProps || ie !== e.memoizedState) && (t.flags |= ci), t.memoizedProps = o, t.memoizedState = $e), v.props = o, v.state = $e, v.context = j, at;
    }
    var w1, x1, T1, R1, _1, nx = function(e, t) {
    };
    w1 = !1, x1 = !1, T1 = {}, R1 = {}, _1 = {}, nx = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = ct(t) || "Component";
        R1[a] || (R1[a] = !0, h('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function $p(e, t, a) {
      var o = a.ref;
      if (o !== null && typeof o != "function" && typeof o != "object") {
        if ((e.mode & Gn || dt) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var c = ct(e) || "Component";
          T1[c] || (h('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', o), T1[c] = !0);
        }
        if (a._owner) {
          var v = a._owner, g;
          if (v) {
            var C = v;
            if (C.tag !== T)
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
            var H = b.refs;
            H === Qw && (H = b.refs = {}), j === null ? delete H[k] : H[k] = j;
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
    function Vg(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Bg(e) {
      {
        var t = ct(e) || "Component";
        if (_1[t])
          return;
        _1[t] = !0, h("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function rx(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function ax(e) {
      function t(Q, oe) {
        if (e) {
          var X = Q.deletions;
          X === null ? (Q.deletions = [oe], Q.flags |= yn) : X.push(oe);
        }
      }
      function a(Q, oe) {
        if (!e)
          return null;
        for (var X = oe; X !== null; )
          t(Q, X), X = X.sibling;
        return null;
      }
      function o(Q, oe) {
        for (var X = /* @__PURE__ */ new Map(), ye = oe; ye !== null; )
          ye.key !== null ? X.set(ye.key, ye) : X.set(ye.index, ye), ye = ye.sibling;
        return X;
      }
      function c(Q, oe) {
        var X = jc(Q, oe);
        return X.index = 0, X.sibling = null, X;
      }
      function v(Q, oe, X) {
        if (Q.index = X, !e)
          return Q.flags |= Dv, oe;
        var ye = Q.alternate;
        if (ye !== null) {
          var He = ye.index;
          return He < oe ? (Q.flags |= Pn, oe) : He;
        } else
          return Q.flags |= Pn, oe;
      }
      function g(Q) {
        return e && Q.alternate === null && (Q.flags |= Pn), Q;
      }
      function C(Q, oe, X, ye) {
        if (oe === null || oe.tag !== z) {
          var He = eb(X, Q.mode, ye);
          return He.return = Q, He;
        } else {
          var Ae = c(oe, X);
          return Ae.return = Q, Ae;
        }
      }
      function b(Q, oe, X, ye) {
        var He = X.type;
        if (He === ar)
          return M(Q, oe, X.props.children, ye, X.key);
        if (oe !== null && (oe.elementType === He || // Keep this check inline so it only runs on the false path:
        YT(oe, X) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof He == "object" && He !== null && He.$$typeof === An && rx(He) === oe.type)) {
          var Ae = c(oe, X.props);
          return Ae.ref = $p(Q, oe, X), Ae.return = Q, Ae._debugSource = X._source, Ae._debugOwner = X._owner, Ae;
        }
        var mt = JC(X, Q.mode, ye);
        return mt.ref = $p(Q, oe, X), mt.return = Q, mt;
      }
      function k(Q, oe, X, ye) {
        if (oe === null || oe.tag !== O || oe.stateNode.containerInfo !== X.containerInfo || oe.stateNode.implementation !== X.implementation) {
          var He = tb(X, Q.mode, ye);
          return He.return = Q, He;
        } else {
          var Ae = c(oe, X.children || []);
          return Ae.return = Q, Ae;
        }
      }
      function M(Q, oe, X, ye, He) {
        if (oe === null || oe.tag !== P) {
          var Ae = Ns(X, Q.mode, ye, He);
          return Ae.return = Q, Ae;
        } else {
          var mt = c(oe, X);
          return mt.return = Q, mt;
        }
      }
      function j(Q, oe, X) {
        if (typeof oe == "string" && oe !== "" || typeof oe == "number") {
          var ye = eb("" + oe, Q.mode, X);
          return ye.return = Q, ye;
        }
        if (typeof oe == "object" && oe !== null) {
          switch (oe.$$typeof) {
            case Qr: {
              var He = JC(oe, Q.mode, X);
              return He.ref = $p(Q, null, oe), He.return = Q, He;
            }
            case rr: {
              var Ae = tb(oe, Q.mode, X);
              return Ae.return = Q, Ae;
            }
            case An: {
              var mt = oe._payload, Tt = oe._init;
              return j(Q, Tt(mt), X);
            }
          }
          if (kr(oe) || Xr(oe)) {
            var xn = Ns(oe, Q.mode, X, null);
            return xn.return = Q, xn;
          }
          Vg(Q, oe);
        }
        return typeof oe == "function" && Bg(Q), null;
      }
      function H(Q, oe, X, ye) {
        var He = oe !== null ? oe.key : null;
        if (typeof X == "string" && X !== "" || typeof X == "number")
          return He !== null ? null : C(Q, oe, "" + X, ye);
        if (typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case Qr:
              return X.key === He ? b(Q, oe, X, ye) : null;
            case rr:
              return X.key === He ? k(Q, oe, X, ye) : null;
            case An: {
              var Ae = X._payload, mt = X._init;
              return H(Q, oe, mt(Ae), ye);
            }
          }
          if (kr(X) || Xr(X))
            return He !== null ? null : M(Q, oe, X, ye, null);
          Vg(Q, X);
        }
        return typeof X == "function" && Bg(Q), null;
      }
      function Z(Q, oe, X, ye, He) {
        if (typeof ye == "string" && ye !== "" || typeof ye == "number") {
          var Ae = Q.get(X) || null;
          return C(oe, Ae, "" + ye, He);
        }
        if (typeof ye == "object" && ye !== null) {
          switch (ye.$$typeof) {
            case Qr: {
              var mt = Q.get(ye.key === null ? X : ye.key) || null;
              return b(oe, mt, ye, He);
            }
            case rr: {
              var Tt = Q.get(ye.key === null ? X : ye.key) || null;
              return k(oe, Tt, ye, He);
            }
            case An:
              var xn = ye._payload, hn = ye._init;
              return Z(Q, oe, X, hn(xn), He);
          }
          if (kr(ye) || Xr(ye)) {
            var xr = Q.get(X) || null;
            return M(oe, xr, ye, He, null);
          }
          Vg(oe, ye);
        }
        return typeof ye == "function" && Bg(oe), null;
      }
      function J(Q, oe, X) {
        {
          if (typeof Q != "object" || Q === null)
            return oe;
          switch (Q.$$typeof) {
            case Qr:
            case rr:
              nx(Q, X);
              var ye = Q.key;
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
              var He = Q._payload, Ae = Q._init;
              J(Ae(He), oe, X);
              break;
          }
        }
        return oe;
      }
      function ie(Q, oe, X, ye) {
        for (var He = null, Ae = 0; Ae < X.length; Ae++) {
          var mt = X[Ae];
          He = J(mt, He, Q);
        }
        for (var Tt = null, xn = null, hn = oe, xr = 0, mn = 0, gr = null; hn !== null && mn < X.length; mn++) {
          hn.index > mn ? (gr = hn, hn = null) : gr = hn.sibling;
          var za = H(Q, hn, X[mn], ye);
          if (za === null) {
            hn === null && (hn = gr);
            break;
          }
          e && hn && za.alternate === null && t(Q, hn), xr = v(za, xr, mn), xn === null ? Tt = za : xn.sibling = za, xn = za, hn = gr;
        }
        if (mn === X.length) {
          if (a(Q, hn), fa()) {
            var ya = mn;
            Mc(Q, ya);
          }
          return Tt;
        }
        if (hn === null) {
          for (; mn < X.length; mn++) {
            var $i = j(Q, X[mn], ye);
            $i !== null && (xr = v($i, xr, mn), xn === null ? Tt = $i : xn.sibling = $i, xn = $i);
          }
          if (fa()) {
            var ni = mn;
            Mc(Q, ni);
          }
          return Tt;
        }
        for (var ri = o(Q, hn); mn < X.length; mn++) {
          var Pa = Z(ri, Q, mn, X[mn], ye);
          Pa !== null && (e && Pa.alternate !== null && ri.delete(Pa.key === null ? mn : Pa.key), xr = v(Pa, xr, mn), xn === null ? Tt = Pa : xn.sibling = Pa, xn = Pa);
        }
        if (e && ri.forEach(function(Hd) {
          return t(Q, Hd);
        }), fa()) {
          var Tu = mn;
          Mc(Q, Tu);
        }
        return Tt;
      }
      function $e(Q, oe, X, ye) {
        var He = Xr(X);
        if (typeof He != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          X[Symbol.toStringTag] === "Generator" && (x1 || h("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), x1 = !0), X.entries === He && (w1 || h("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), w1 = !0);
          var Ae = He.call(X);
          if (Ae)
            for (var mt = null, Tt = Ae.next(); !Tt.done; Tt = Ae.next()) {
              var xn = Tt.value;
              mt = J(xn, mt, Q);
            }
        }
        var hn = He.call(X);
        if (hn == null)
          throw new Error("An iterable object provided no iterator.");
        for (var xr = null, mn = null, gr = oe, za = 0, ya = 0, $i = null, ni = hn.next(); gr !== null && !ni.done; ya++, ni = hn.next()) {
          gr.index > ya ? ($i = gr, gr = null) : $i = gr.sibling;
          var ri = H(Q, gr, ni.value, ye);
          if (ri === null) {
            gr === null && (gr = $i);
            break;
          }
          e && gr && ri.alternate === null && t(Q, gr), za = v(ri, za, ya), mn === null ? xr = ri : mn.sibling = ri, mn = ri, gr = $i;
        }
        if (ni.done) {
          if (a(Q, gr), fa()) {
            var Pa = ya;
            Mc(Q, Pa);
          }
          return xr;
        }
        if (gr === null) {
          for (; !ni.done; ya++, ni = hn.next()) {
            var Tu = j(Q, ni.value, ye);
            Tu !== null && (za = v(Tu, za, ya), mn === null ? xr = Tu : mn.sibling = Tu, mn = Tu);
          }
          if (fa()) {
            var Hd = ya;
            Mc(Q, Hd);
          }
          return xr;
        }
        for (var hh = o(Q, gr); !ni.done; ya++, ni = hn.next()) {
          var Dl = Z(hh, Q, ya, ni.value, ye);
          Dl !== null && (e && Dl.alternate !== null && hh.delete(Dl.key === null ? ya : Dl.key), za = v(Dl, za, ya), mn === null ? xr = Dl : mn.sibling = Dl, mn = Dl);
        }
        if (e && hh.forEach(function(ez) {
          return t(Q, ez);
        }), fa()) {
          var JA = ya;
          Mc(Q, JA);
        }
        return xr;
      }
      function at(Q, oe, X, ye) {
        if (oe !== null && oe.tag === z) {
          a(Q, oe.sibling);
          var He = c(oe, X);
          return He.return = Q, He;
        }
        a(Q, oe);
        var Ae = eb(X, Q.mode, ye);
        return Ae.return = Q, Ae;
      }
      function qe(Q, oe, X, ye) {
        for (var He = X.key, Ae = oe; Ae !== null; ) {
          if (Ae.key === He) {
            var mt = X.type;
            if (mt === ar) {
              if (Ae.tag === P) {
                a(Q, Ae.sibling);
                var Tt = c(Ae, X.props.children);
                return Tt.return = Q, Tt._debugSource = X._source, Tt._debugOwner = X._owner, Tt;
              }
            } else if (Ae.elementType === mt || // Keep this check inline so it only runs on the false path:
            YT(Ae, X) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof mt == "object" && mt !== null && mt.$$typeof === An && rx(mt) === Ae.type) {
              a(Q, Ae.sibling);
              var xn = c(Ae, X.props);
              return xn.ref = $p(Q, Ae, X), xn.return = Q, xn._debugSource = X._source, xn._debugOwner = X._owner, xn;
            }
            a(Q, Ae);
            break;
          } else
            t(Q, Ae);
          Ae = Ae.sibling;
        }
        if (X.type === ar) {
          var hn = Ns(X.props.children, Q.mode, ye, X.key);
          return hn.return = Q, hn;
        } else {
          var xr = JC(X, Q.mode, ye);
          return xr.ref = $p(Q, oe, X), xr.return = Q, xr;
        }
      }
      function on(Q, oe, X, ye) {
        for (var He = X.key, Ae = oe; Ae !== null; ) {
          if (Ae.key === He)
            if (Ae.tag === O && Ae.stateNode.containerInfo === X.containerInfo && Ae.stateNode.implementation === X.implementation) {
              a(Q, Ae.sibling);
              var mt = c(Ae, X.children || []);
              return mt.return = Q, mt;
            } else {
              a(Q, Ae);
              break;
            }
          else
            t(Q, Ae);
          Ae = Ae.sibling;
        }
        var Tt = tb(X, Q.mode, ye);
        return Tt.return = Q, Tt;
      }
      function Qt(Q, oe, X, ye) {
        var He = typeof X == "object" && X !== null && X.type === ar && X.key === null;
        if (He && (X = X.props.children), typeof X == "object" && X !== null) {
          switch (X.$$typeof) {
            case Qr:
              return g(qe(Q, oe, X, ye));
            case rr:
              return g(on(Q, oe, X, ye));
            case An:
              var Ae = X._payload, mt = X._init;
              return Qt(Q, oe, mt(Ae), ye);
          }
          if (kr(X))
            return ie(Q, oe, X, ye);
          if (Xr(X))
            return $e(Q, oe, X, ye);
          Vg(Q, X);
        }
        return typeof X == "string" && X !== "" || typeof X == "number" ? g(at(Q, oe, "" + X, ye)) : (typeof X == "function" && Bg(Q), a(Q, oe));
      }
      return Qt;
    }
    var xd = ax(!0), ix = ax(!1);
    function FN(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, o = jc(a, a.pendingProps);
        for (t.child = o, o.return = t; a.sibling !== null; )
          a = a.sibling, o = o.sibling = jc(a, a.pendingProps), o.return = t;
        o.sibling = null;
      }
    }
    function jN(e, t) {
      for (var a = e.child; a !== null; )
        gA(a, t), a = a.sibling;
    }
    var Hp = {}, Es = gs(Hp), Fp = gs(Hp), Wg = gs(Hp);
    function Kg(e) {
      if (e === Hp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function ox() {
      var e = Kg(Wg.current);
      return e;
    }
    function k1(e, t) {
      La(Wg, t, e), La(Fp, e, e), La(Es, Hp, e);
      var a = nO(t);
      Da(Es, e), La(Es, a, e);
    }
    function Td(e) {
      Da(Es, e), Da(Fp, e), Da(Wg, e);
    }
    function M1() {
      var e = Kg(Es.current);
      return e;
    }
    function lx(e) {
      Kg(Wg.current);
      var t = Kg(Es.current), a = rO(t, e.type);
      t !== a && (La(Fp, e, e), La(Es, a, e));
    }
    function O1(e) {
      Fp.current === e && (Da(Es, e), Da(Fp, e));
    }
    var VN = 0, ux = 1, sx = 1, jp = 2, $o = gs(VN);
    function N1(e, t) {
      return (e & t) !== 0;
    }
    function Rd(e) {
      return e & ux;
    }
    function D1(e, t) {
      return e & ux | t;
    }
    function BN(e, t) {
      return e | t;
    }
    function ws(e, t) {
      La($o, t, e);
    }
    function _d(e) {
      Da($o, e);
    }
    function WN(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Gg(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === W) {
          var a = t.memoizedState;
          if (a !== null) {
            var o = a.dehydrated;
            if (o === null || Sw(o) || IS(o))
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
    var Ei = (
      /*   */
      0
    ), Fr = (
      /* */
      1
    ), Tl = (
      /*  */
      2
    ), jr = (
      /*    */
      4
    ), da = (
      /*   */
      8
    ), L1 = [];
    function A1() {
      for (var e = 0; e < L1.length; e++) {
        var t = L1[e];
        t._workInProgressVersionPrimary = null;
      }
      L1.length = 0;
    }
    function KN(e, t) {
      var a = t._getVersion, o = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, o] : e.mutableSourceEagerHydrationData.push(t, o);
    }
    var Ue = u.ReactCurrentDispatcher, Vp = u.ReactCurrentBatchConfig, z1, kd;
    z1 = /* @__PURE__ */ new Set();
    var zc = ue, wn = null, Vr = null, Br = null, Yg = !1, Bp = !1, Wp = 0, GN = 0, YN = 25, ce = null, no = null, xs = -1, P1 = !1;
    function Cn() {
      {
        var e = ce;
        no === null ? no = [e] : no.push(e);
      }
    }
    function Me() {
      {
        var e = ce;
        no !== null && (xs++, no[xs] !== e && QN(e));
      }
    }
    function Md(e) {
      e != null && !kr(e) && h("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", ce, typeof e);
    }
    function QN(e) {
      {
        var t = ct(wn);
        if (!z1.has(t) && (z1.add(t), no !== null)) {
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
    function U1(e, t) {
      if (P1)
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
      zc = v, wn = t, no = e !== null ? e._debugHookTypes : null, xs = -1, P1 = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = ue, e !== null && e.memoizedState !== null ? Ue.current = Nx : no !== null ? Ue.current = Ox : Ue.current = Mx;
      var g = a(o, c);
      if (Bp) {
        var C = 0;
        do {
          if (Bp = !1, Wp = 0, C >= YN)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          C += 1, P1 = !1, Vr = null, Br = null, t.updateQueue = null, xs = -1, Ue.current = Dx, g = a(o, c);
        } while (Bp);
      }
      Ue.current = ly, t._debugHookTypes = no;
      var b = Vr !== null && Vr.next !== null;
      if (zc = ue, wn = null, Vr = null, Br = null, ce = null, no = null, xs = -1, e !== null && (e.flags & Ir) !== (t.flags & Ir) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & Bt) !== ot && h("Internal React error: Expected static flag was missing. Please notify the React team."), Yg = !1, b)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return g;
    }
    function Nd() {
      var e = Wp !== 0;
      return Wp = 0, e;
    }
    function cx(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & pi) !== ot ? t.flags &= ~(Gl | Ra | jn | Dt) : t.flags &= ~(jn | Dt), e.lanes = es(e.lanes, a);
    }
    function fx() {
      if (Ue.current = ly, Yg) {
        for (var e = wn.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Yg = !1;
      }
      zc = ue, wn = null, Vr = null, Br = null, no = null, xs = -1, ce = null, xx = !1, Bp = !1, Wp = 0;
    }
    function Rl() {
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
    function dx() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function I1(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function $1(e, t, a) {
      var o = Rl(), c;
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
      var g = v.dispatch = JN.bind(null, wn, v);
      return [o.memoizedState, g];
    }
    function H1(e, t, a) {
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
        var M = g.next, j = v.baseState, H = null, Z = null, J = null, ie = M;
        do {
          var $e = ie.lane;
          if (ru(zc, $e)) {
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
              lane: $e,
              action: ie.action,
              hasEagerState: ie.hasEagerState,
              eagerState: ie.eagerState,
              next: null
            };
            J === null ? (Z = J = at, H = j) : J = J.next = at, wn.lanes = Lt(wn.lanes, $e), ch($e);
          }
          ie = ie.next;
        } while (ie !== null && ie !== M);
        J === null ? H = j : J.next = Z, Ve(j, o.memoizedState) || Zp(), o.memoizedState = j, o.baseState = H, o.baseQueue = J, c.lastRenderedState = j;
      }
      var Qt = c.interleaved;
      if (Qt !== null) {
        var Q = Qt;
        do {
          var oe = Q.lane;
          wn.lanes = Lt(wn.lanes, oe), ch(oe), Q = Q.next;
        } while (Q !== Qt);
      } else
        g === null && (c.lanes = ue);
      var X = c.dispatch;
      return [o.memoizedState, X];
    }
    function F1(e, t, a) {
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
        Ve(C, o.memoizedState) || Zp(), o.memoizedState = C, o.baseQueue === null && (o.baseState = C), c.lastRenderedState = C;
      }
      return [C, v];
    }
    function o$(e, t, a) {
    }
    function l$(e, t, a) {
    }
    function j1(e, t, a) {
      var o = wn, c = Rl(), v, g = fa();
      if (g) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        v = a(), kd || v !== a() && (h("The result of getServerSnapshot should be cached to avoid an infinite loop"), kd = !0);
      } else {
        if (v = t(), !kd) {
          var C = t();
          Ve(v, C) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), kd = !0);
        }
        var b = Ty();
        if (b === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        dc(b, zc) || vx(o, t, v);
      }
      c.memoizedState = v;
      var k = {
        value: v,
        getSnapshot: t
      };
      return c.queue = k, Jg(hx.bind(null, o, k, e), [e]), o.flags |= jn, Kp(Fr | da, px.bind(null, o, k, v, t), void 0, null), v;
    }
    function Qg(e, t, a) {
      var o = wn, c = ro(), v = t();
      if (!kd) {
        var g = t();
        Ve(v, g) || (h("The result of getSnapshot should be cached to avoid an infinite loop"), kd = !0);
      }
      var C = c.memoizedState, b = !Ve(C, v);
      b && (c.memoizedState = v, Zp());
      var k = c.queue;
      if (Yp(hx.bind(null, o, k, e), [e]), k.getSnapshot !== t || b || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      Br !== null && Br.memoizedState.tag & Fr) {
        o.flags |= jn, Kp(Fr | da, px.bind(null, o, k, v, t), void 0, null);
        var M = Ty();
        if (M === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        dc(M, zc) || vx(o, t, v);
      }
      return v;
    }
    function vx(e, t, a) {
      e.flags |= rc;
      var o = {
        getSnapshot: t,
        value: a
      }, c = wn.updateQueue;
      if (c === null)
        c = dx(), wn.updateQueue = c, c.stores = [o];
      else {
        var v = c.stores;
        v === null ? c.stores = [o] : v.push(o);
      }
    }
    function px(e, t, a, o) {
      t.value = a, t.getSnapshot = o, mx(t) && gx(e);
    }
    function hx(e, t, a) {
      var o = function() {
        mx(t) && gx(e);
      };
      return a(o);
    }
    function mx(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var o = t();
        return !Ve(a, o);
      } catch (c) {
        return !0;
      }
    }
    function gx(e) {
      var t = bi(e, ut);
      t !== null && Yr(t, e, ut, Dn);
    }
    function Xg(e) {
      var t = Rl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: ue,
        dispatch: null,
        lastRenderedReducer: I1,
        lastRenderedState: e
      };
      t.queue = a;
      var o = a.dispatch = eD.bind(null, wn, a);
      return [t.memoizedState, o];
    }
    function V1(e) {
      return H1(I1);
    }
    function B1(e) {
      return F1(I1);
    }
    function Kp(e, t, a, o) {
      var c = {
        tag: e,
        create: t,
        destroy: a,
        deps: o,
        // Circular
        next: null
      }, v = wn.updateQueue;
      if (v === null)
        v = dx(), wn.updateQueue = v, v.lastEffect = c.next = c;
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
    function W1(e) {
      var t = Rl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function qg(e) {
      var t = ro();
      return t.memoizedState;
    }
    function Gp(e, t, a, o) {
      var c = Rl(), v = o === void 0 ? null : o;
      wn.flags |= e, c.memoizedState = Kp(Fr | t, a, void 0, v);
    }
    function Zg(e, t, a, o) {
      var c = ro(), v = o === void 0 ? null : o, g = void 0;
      if (Vr !== null) {
        var C = Vr.memoizedState;
        if (g = C.destroy, v !== null) {
          var b = C.deps;
          if (U1(v, b)) {
            c.memoizedState = Kp(t, a, g, v);
            return;
          }
        }
      }
      wn.flags |= e, c.memoizedState = Kp(Fr | t, a, g, v);
    }
    function Jg(e, t) {
      return (wn.mode & pi) !== ot ? Gp(Gl | jn | ul, da, e, t) : Gp(jn | ul, da, e, t);
    }
    function Yp(e, t) {
      return Zg(jn, da, e, t);
    }
    function K1(e, t) {
      return Gp(Dt, Tl, e, t);
    }
    function ey(e, t) {
      return Zg(Dt, Tl, e, t);
    }
    function G1(e, t) {
      var a = Dt;
      return a |= Ta, (wn.mode & pi) !== ot && (a |= Ra), Gp(a, jr, e, t);
    }
    function ty(e, t) {
      return Zg(Dt, jr, e, t);
    }
    function yx(e, t) {
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
    function Y1(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = a != null ? a.concat([e]) : null, c = Dt;
      return c |= Ta, (wn.mode & pi) !== ot && (c |= Ra), Gp(c, jr, yx.bind(null, t, e), o);
    }
    function ny(e, t, a) {
      typeof t != "function" && h("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var o = a != null ? a.concat([e]) : null;
      return Zg(Dt, jr, yx.bind(null, t, e), o);
    }
    function XN(e, t) {
    }
    var ry = XN;
    function Q1(e, t) {
      var a = Rl(), o = t === void 0 ? null : t;
      return a.memoizedState = [e, o], e;
    }
    function ay(e, t) {
      var a = ro(), o = t === void 0 ? null : t, c = a.memoizedState;
      if (c !== null && o !== null) {
        var v = c[1];
        if (U1(o, v))
          return c[0];
      }
      return a.memoizedState = [e, o], e;
    }
    function X1(e, t) {
      var a = Rl(), o = t === void 0 ? null : t, c = e();
      return a.memoizedState = [c, o], c;
    }
    function iy(e, t) {
      var a = ro(), o = t === void 0 ? null : t, c = a.memoizedState;
      if (c !== null && o !== null) {
        var v = c[1];
        if (U1(o, v))
          return c[0];
      }
      var g = e();
      return a.memoizedState = [g, o], g;
    }
    function q1(e) {
      var t = Rl();
      return t.memoizedState = e, e;
    }
    function Sx(e) {
      var t = ro(), a = Vr, o = a.memoizedState;
      return bx(t, o, e);
    }
    function Cx(e) {
      var t = ro();
      if (Vr === null)
        return t.memoizedState = e, e;
      var a = Vr.memoizedState;
      return bx(t, a, e);
    }
    function bx(e, t, a) {
      var o = !rS(zc);
      if (o) {
        if (!Ve(a, t)) {
          var c = Qv();
          wn.lanes = Lt(wn.lanes, c), ch(c), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Zp()), e.memoizedState = a, a;
    }
    function qN(e, t, a) {
      var o = mi();
      br(ta(o, Hr)), e(!0);
      var c = Vp.transition;
      Vp.transition = {};
      var v = Vp.transition;
      Vp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (br(o), Vp.transition = c, c === null && v._updatedFibers) {
          var g = v._updatedFibers.size;
          g > 10 && y("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), v._updatedFibers.clear();
        }
      }
    }
    function Z1() {
      var e = Xg(!1), t = e[0], a = e[1], o = qN.bind(null, a), c = Rl();
      return c.memoizedState = o, [t, o];
    }
    function Ex() {
      var e = V1(), t = e[0], a = ro(), o = a.memoizedState;
      return [t, o];
    }
    function wx() {
      var e = B1(), t = e[0], a = ro(), o = a.memoizedState;
      return [t, o];
    }
    var xx = !1;
    function ZN() {
      return xx;
    }
    function J1() {
      var e = Rl(), t = Ty(), a = t.identifierPrefix, o;
      if (fa()) {
        var c = dN();
        o = ":" + a + "R" + c;
        var v = Wp++;
        v > 0 && (o += "H" + v.toString(32)), o += ":";
      } else {
        var g = GN++;
        o = ":" + a + "r" + g.toString(32) + ":";
      }
      return e.memoizedState = o, o;
    }
    function oy() {
      var e = ro(), t = e.memoizedState;
      return t;
    }
    function JN(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = Ms(e), c = {
        lane: o,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Tx(e))
        Rx(t, c);
      else {
        var v = Vw(e, t, c, o);
        if (v !== null) {
          var g = ti();
          Yr(v, e, o, g), _x(v, t, o);
        }
      }
      kx(e, o);
    }
    function eD(e, t, a) {
      typeof arguments[3] == "function" && h("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var o = Ms(e), c = {
        lane: o,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Tx(e))
        Rx(t, c);
      else {
        var v = e.alternate;
        if (e.lanes === ue && (v === null || v.lanes === ue)) {
          var g = t.lastRenderedReducer;
          if (g !== null) {
            var C;
            C = Ue.current, Ue.current = Ho;
            try {
              var b = t.lastRenderedState, k = g(b, a);
              if (c.hasEagerState = !0, c.eagerState = k, Ve(k, b)) {
                DN(e, t, c, o);
                return;
              }
            } catch (H) {
            } finally {
              Ue.current = C;
            }
          }
        }
        var M = Vw(e, t, c, o);
        if (M !== null) {
          var j = ti();
          Yr(M, e, o, j), _x(M, t, o);
        }
      }
      kx(e, o);
    }
    function Tx(e) {
      var t = e.alternate;
      return e === wn || t !== null && t === wn;
    }
    function Rx(e, t) {
      Bp = Yg = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function _x(e, t, a) {
      if (Yv(a)) {
        var o = t.lanes;
        o = Xv(o, e.pendingLanes);
        var c = Lt(o, a);
        t.lanes = c, ts(e, c);
      }
    }
    function kx(e, t, a) {
      pl(e, t);
    }
    var ly = {
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
    }, Mx = null, Ox = null, Nx = null, Dx = null, _l = null, Ho = null, uy = null;
    {
      var eC = function() {
        h("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, bt = function() {
        h("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      Mx = {
        readContext: function(e) {
          return zr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", Cn(), Md(t), Q1(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Cn(), zr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Cn(), Md(t), Jg(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Cn(), Md(a), Y1(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Cn(), Md(t), K1(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Cn(), Md(t), G1(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Cn(), Md(t);
          var a = Ue.current;
          Ue.current = _l;
          try {
            return X1(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Cn();
          var o = Ue.current;
          Ue.current = _l;
          try {
            return $1(e, t, a);
          } finally {
            Ue.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Cn(), W1(e);
        },
        useState: function(e) {
          ce = "useState", Cn();
          var t = Ue.current;
          Ue.current = _l;
          try {
            return Xg(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Cn(), void 0;
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Cn(), q1(e);
        },
        useTransition: function() {
          return ce = "useTransition", Cn(), Z1();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Cn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Cn(), j1(e, t, a);
        },
        useId: function() {
          return ce = "useId", Cn(), J1();
        },
        unstable_isNewReconciler: ee
      }, Ox = {
        readContext: function(e) {
          return zr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", Me(), Q1(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Me(), zr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Me(), Jg(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Me(), Y1(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Me(), K1(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Me(), G1(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Me();
          var a = Ue.current;
          Ue.current = _l;
          try {
            return X1(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Me();
          var o = Ue.current;
          Ue.current = _l;
          try {
            return $1(e, t, a);
          } finally {
            Ue.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Me(), W1(e);
        },
        useState: function(e) {
          ce = "useState", Me();
          var t = Ue.current;
          Ue.current = _l;
          try {
            return Xg(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Me(), void 0;
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Me(), q1(e);
        },
        useTransition: function() {
          return ce = "useTransition", Me(), Z1();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Me(), j1(e, t, a);
        },
        useId: function() {
          return ce = "useId", Me(), J1();
        },
        unstable_isNewReconciler: ee
      }, Nx = {
        readContext: function(e) {
          return zr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", Me(), ay(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Me(), zr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Me(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Me(), ny(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Me(), ey(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Me(), ty(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Me();
          var a = Ue.current;
          Ue.current = Ho;
          try {
            return iy(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Me();
          var o = Ue.current;
          Ue.current = Ho;
          try {
            return H1(e, t, a);
          } finally {
            Ue.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Me(), qg();
        },
        useState: function(e) {
          ce = "useState", Me();
          var t = Ue.current;
          Ue.current = Ho;
          try {
            return V1(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Me(), ry();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Me(), Sx(e);
        },
        useTransition: function() {
          return ce = "useTransition", Me(), Ex();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Me(), Qg(e, t);
        },
        useId: function() {
          return ce = "useId", Me(), oy();
        },
        unstable_isNewReconciler: ee
      }, Dx = {
        readContext: function(e) {
          return zr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", Me(), ay(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", Me(), zr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", Me(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", Me(), ny(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", Me(), ey(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", Me(), ty(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", Me();
          var a = Ue.current;
          Ue.current = uy;
          try {
            return iy(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", Me();
          var o = Ue.current;
          Ue.current = uy;
          try {
            return F1(e, t, a);
          } finally {
            Ue.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", Me(), qg();
        },
        useState: function(e) {
          ce = "useState", Me();
          var t = Ue.current;
          Ue.current = uy;
          try {
            return B1(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", Me(), ry();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", Me(), Cx(e);
        },
        useTransition: function() {
          return ce = "useTransition", Me(), wx();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", Me(), Qg(e, t);
        },
        useId: function() {
          return ce = "useId", Me(), oy();
        },
        unstable_isNewReconciler: ee
      }, _l = {
        readContext: function(e) {
          return eC(), zr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", bt(), Cn(), Q1(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", bt(), Cn(), zr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", bt(), Cn(), Jg(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", bt(), Cn(), Y1(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", bt(), Cn(), K1(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", bt(), Cn(), G1(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", bt(), Cn();
          var a = Ue.current;
          Ue.current = _l;
          try {
            return X1(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", bt(), Cn();
          var o = Ue.current;
          Ue.current = _l;
          try {
            return $1(e, t, a);
          } finally {
            Ue.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", bt(), Cn(), W1(e);
        },
        useState: function(e) {
          ce = "useState", bt(), Cn();
          var t = Ue.current;
          Ue.current = _l;
          try {
            return Xg(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", bt(), Cn(), void 0;
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", bt(), Cn(), q1(e);
        },
        useTransition: function() {
          return ce = "useTransition", bt(), Cn(), Z1();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", bt(), Cn(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", bt(), Cn(), j1(e, t, a);
        },
        useId: function() {
          return ce = "useId", bt(), Cn(), J1();
        },
        unstable_isNewReconciler: ee
      }, Ho = {
        readContext: function(e) {
          return eC(), zr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", bt(), Me(), ay(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", bt(), Me(), zr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", bt(), Me(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", bt(), Me(), ny(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", bt(), Me(), ey(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", bt(), Me(), ty(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", bt(), Me();
          var a = Ue.current;
          Ue.current = Ho;
          try {
            return iy(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", bt(), Me();
          var o = Ue.current;
          Ue.current = Ho;
          try {
            return H1(e, t, a);
          } finally {
            Ue.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", bt(), Me(), qg();
        },
        useState: function(e) {
          ce = "useState", bt(), Me();
          var t = Ue.current;
          Ue.current = Ho;
          try {
            return V1(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", bt(), Me(), ry();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", bt(), Me(), Sx(e);
        },
        useTransition: function() {
          return ce = "useTransition", bt(), Me(), Ex();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", bt(), Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", bt(), Me(), Qg(e, t);
        },
        useId: function() {
          return ce = "useId", bt(), Me(), oy();
        },
        unstable_isNewReconciler: ee
      }, uy = {
        readContext: function(e) {
          return eC(), zr(e);
        },
        useCallback: function(e, t) {
          return ce = "useCallback", bt(), Me(), ay(e, t);
        },
        useContext: function(e) {
          return ce = "useContext", bt(), Me(), zr(e);
        },
        useEffect: function(e, t) {
          return ce = "useEffect", bt(), Me(), Yp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return ce = "useImperativeHandle", bt(), Me(), ny(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return ce = "useInsertionEffect", bt(), Me(), ey(e, t);
        },
        useLayoutEffect: function(e, t) {
          return ce = "useLayoutEffect", bt(), Me(), ty(e, t);
        },
        useMemo: function(e, t) {
          ce = "useMemo", bt(), Me();
          var a = Ue.current;
          Ue.current = Ho;
          try {
            return iy(e, t);
          } finally {
            Ue.current = a;
          }
        },
        useReducer: function(e, t, a) {
          ce = "useReducer", bt(), Me();
          var o = Ue.current;
          Ue.current = Ho;
          try {
            return F1(e, t, a);
          } finally {
            Ue.current = o;
          }
        },
        useRef: function(e) {
          return ce = "useRef", bt(), Me(), qg();
        },
        useState: function(e) {
          ce = "useState", bt(), Me();
          var t = Ue.current;
          Ue.current = Ho;
          try {
            return B1(e);
          } finally {
            Ue.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return ce = "useDebugValue", bt(), Me(), ry();
        },
        useDeferredValue: function(e) {
          return ce = "useDeferredValue", bt(), Me(), Cx(e);
        },
        useTransition: function() {
          return ce = "useTransition", bt(), Me(), wx();
        },
        useMutableSource: function(e, t, a) {
          return ce = "useMutableSource", bt(), Me(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return ce = "useSyncExternalStore", bt(), Me(), Qg(e, t);
        },
        useId: function() {
          return ce = "useId", bt(), Me(), oy();
        },
        unstable_isNewReconciler: ee
      };
    }
    var Ts = l.unstable_now, Lx = 0, sy = -1, Qp = -1, cy = -1, tC = !1, fy = !1;
    function Ax() {
      return tC;
    }
    function tD() {
      fy = !0;
    }
    function nD() {
      tC = !1, fy = !1;
    }
    function rD() {
      tC = fy, fy = !1;
    }
    function zx() {
      return Lx;
    }
    function Px() {
      Lx = Ts();
    }
    function nC(e) {
      Qp = Ts(), e.actualStartTime < 0 && (e.actualStartTime = Ts());
    }
    function Ux(e) {
      Qp = -1;
    }
    function dy(e, t) {
      if (Qp >= 0) {
        var a = Ts() - Qp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Qp = -1;
      }
    }
    function kl(e) {
      if (sy >= 0) {
        var t = Ts() - sy;
        sy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case _:
              var o = a.stateNode;
              o.effectDuration += t;
              return;
            case $:
              var c = a.stateNode;
              c.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function rC(e) {
      if (cy >= 0) {
        var t = Ts() - cy;
        cy = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case _:
              var o = a.stateNode;
              o !== null && (o.passiveEffectDuration += t);
              return;
            case $:
              var c = a.stateNode;
              c !== null && (c.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Ml() {
      sy = Ts();
    }
    function aC() {
      cy = Ts();
    }
    function iC(e) {
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
    function oC(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a != null ? a : null,
        digest: t != null ? t : null
      };
    }
    function aD(e, t) {
      return !0;
    }
    function lC(e, t) {
      try {
        var a = aD(e, t);
        if (a === !1)
          return;
        var o = t.value, c = t.source, v = t.stack, g = v !== null ? v : "";
        if (o != null && o._suppressLogging) {
          if (e.tag === T)
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
      } catch (H) {
        setTimeout(function() {
          throw H;
        });
      }
    }
    var iD = typeof WeakMap == "function" ? WeakMap : Map;
    function Ix(e, t, a) {
      var o = Su(Dn, a);
      o.tag = l1, o.payload = {
        element: null
      };
      var c = t.value;
      return o.callback = function() {
        qL(c), lC(e, t);
      }, o;
    }
    function uC(e, t, a) {
      var o = Su(Dn, a);
      o.tag = l1;
      var c = e.type.getDerivedStateFromError;
      if (typeof c == "function") {
        var v = t.value;
        o.payload = function() {
          return c(v);
        }, o.callback = function() {
          QT(e), lC(e, t);
        };
      }
      var g = e.stateNode;
      return g !== null && typeof g.componentDidCatch == "function" && (o.callback = function() {
        QT(e), lC(e, t), typeof c != "function" && QL(this);
        var b = t.value, k = t.stack;
        this.componentDidCatch(b, {
          componentStack: k !== null ? k : ""
        }), typeof c != "function" && (Na(e.lanes, ut) || h("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", ct(e) || "Unknown"));
      }), o;
    }
    function $x(e, t, a) {
      var o = e.pingCache, c;
      if (o === null ? (o = e.pingCache = new iD(), c = /* @__PURE__ */ new Set(), o.set(t, c)) : (c = o.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(t, c))), !c.has(a)) {
        c.add(a);
        var v = ZL.bind(null, e, t, a);
        $r && fh(e, a), t.then(v, v);
      }
    }
    function oD(e, t, a, o) {
      var c = e.updateQueue;
      if (c === null) {
        var v = /* @__PURE__ */ new Set();
        v.add(a), e.updateQueue = v;
      } else
        c.add(a);
    }
    function lD(e, t) {
      var a = e.tag;
      if ((e.mode & Bt) === ot && (a === x || a === I || a === G)) {
        var o = e.alternate;
        o ? (e.updateQueue = o.updateQueue, e.memoizedState = o.memoizedState, e.lanes = o.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function Hx(e) {
      var t = e;
      do {
        if (t.tag === W && WN(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function Fx(e, t, a, o, c) {
      if ((e.mode & Bt) === ot) {
        if (e === t)
          e.flags |= Or;
        else {
          if (e.flags |= yt, a.flags |= ac, a.flags &= ~(mf | Ga), a.tag === T) {
            var v = a.alternate;
            if (v === null)
              a.tag = Te;
            else {
              var g = Su(Dn, ut);
              g.tag = Pg, bs(a, g, ut);
            }
          }
          a.lanes = Lt(a.lanes, ut);
        }
        return e;
      }
      return e.flags |= Or, e.lanes = c, e;
    }
    function uD(e, t, a, o, c) {
      if (a.flags |= Ga, $r && fh(e, c), o !== null && typeof o == "object" && typeof o.then == "function") {
        var v = o;
        lD(a), fa() && a.mode & Bt && Nw();
        var g = Hx(t);
        if (g !== null) {
          g.flags &= ~Zn, Fx(g, t, a, e, c), g.mode & Bt && $x(e, v, c), oD(g, e, v);
          return;
        } else {
          if (!Ju(c)) {
            $x(e, v, c), FC();
            return;
          }
          var C = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          o = C;
        }
      } else if (fa() && a.mode & Bt) {
        Nw();
        var b = Hx(t);
        if (b !== null) {
          (b.flags & Or) === nt && (b.flags |= Zn), Fx(b, t, a, e, c), e1(Pc(o, a));
          return;
        }
      }
      o = Pc(o, a), FL(o);
      var k = t;
      do {
        switch (k.tag) {
          case _: {
            var M = o;
            k.flags |= Or;
            var j = Cr(c);
            k.lanes = Lt(k.lanes, j);
            var H = Ix(k, M, j);
            c1(k, H);
            return;
          }
          case T:
            var Z = o, J = k.type, ie = k.stateNode;
            if ((k.flags & yt) === nt && (typeof J.getDerivedStateFromError == "function" || ie !== null && typeof ie.componentDidCatch == "function" && !HT(ie))) {
              k.flags |= Or;
              var $e = Cr(c);
              k.lanes = Lt(k.lanes, $e);
              var at = uC(k, Z, $e);
              c1(k, at);
              return;
            }
            break;
        }
        k = k.return;
      } while (k !== null);
    }
    function sD() {
      return null;
    }
    var Xp = u.ReactCurrentOwner, Fo = !1, sC, qp, cC, fC, dC, Uc, vC, vy;
    sC = {}, qp = {}, cC = {}, fC = {}, dC = {}, Uc = !1, vC = {}, vy = {};
    function Ja(e, t, a, o) {
      e === null ? t.child = ix(t, null, a, o) : t.child = xd(t, e.child, a, o);
    }
    function cD(e, t, a, o) {
      t.child = xd(t, e.child, null, o), t.child = xd(t, null, a, o);
    }
    function jx(e, t, a, o, c) {
      if (t.type !== t.elementType) {
        var v = a.propTypes;
        v && zo(
          v,
          o,
          // Resolved props
          "prop",
          nn(a)
        );
      }
      var g = a.render, C = t.ref, b, k;
      wd(t, c), vl(t);
      {
        if (Xp.current = t, sn(!0), b = Od(e, t, g, o, C, c), k = Nd(), t.mode & Gn) {
          Sr(!0);
          try {
            b = Od(e, t, g, o, C, c), k = Nd();
          } finally {
            Sr(!1);
          }
        }
        sn(!1);
      }
      return Yl(), e !== null && !Fo ? (cx(e, t, c), Cu(e, t, c)) : (fa() && k && YS(t), t.flags |= ol, Ja(e, t, b, c), t.child);
    }
    function Vx(e, t, a, o, c) {
      if (e === null) {
        var v = a.type;
        if (hA(v) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var g = v;
          return g = $d(v), t.tag = G, t.type = g, mC(t, v), Bx(e, t, g, o, c);
        }
        {
          var C = v.propTypes;
          C && zo(
            C,
            o,
            // Resolved props
            "prop",
            nn(v)
          );
        }
        var b = ZC(a.type, null, o, t, t.mode, c);
        return b.ref = t.ref, b.return = t, t.child = b, b;
      }
      {
        var k = a.type, M = k.propTypes;
        M && zo(
          M,
          o,
          // Resolved props
          "prop",
          nn(k)
        );
      }
      var j = e.child, H = EC(e, c);
      if (!H) {
        var Z = j.memoizedProps, J = a.compare;
        if (J = J !== null ? J : et, J(Z, o) && e.ref === t.ref)
          return Cu(e, t, c);
      }
      t.flags |= ol;
      var ie = jc(j, o);
      return ie.ref = t.ref, ie.return = t, t.child = ie, ie;
    }
    function Bx(e, t, a, o, c) {
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
          k && zo(
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
          if (Fo = !1, t.pendingProps = o = M, EC(e, c))
            (e.flags & ac) !== nt && (Fo = !0);
          else
            return t.lanes = e.lanes, Cu(e, t, c);
      }
      return pC(e, t, a, o, c);
    }
    function Wx(e, t, a) {
      var o = t.pendingProps, c = o.children, v = e !== null ? e.memoizedState : null;
      if (o.mode === "hidden" || ae)
        if ((t.mode & Bt) === ot) {
          var g = {
            baseLanes: ue,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = g, Ry(t, a);
        } else if (Na(a, Oa)) {
          var j = {
            baseLanes: ue,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = j;
          var H = v !== null ? v.baseLanes : a;
          Ry(t, H);
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
          return t.memoizedState = M, t.updateQueue = null, Ry(t, b), null;
        }
      else {
        var Z;
        v !== null ? (Z = Lt(v.baseLanes, a), t.memoizedState = null) : Z = a, Ry(t, Z);
      }
      return Ja(e, t, c, a), t.child;
    }
    function fD(e, t, a) {
      var o = t.pendingProps;
      return Ja(e, t, o, a), t.child;
    }
    function dD(e, t, a) {
      var o = t.pendingProps.children;
      return Ja(e, t, o, a), t.child;
    }
    function vD(e, t, a) {
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
    function Kx(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= xa, t.flags |= Lv);
    }
    function pC(e, t, a, o, c) {
      if (t.type !== t.elementType) {
        var v = a.propTypes;
        v && zo(
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
      wd(t, c), vl(t);
      {
        if (Xp.current = t, sn(!0), b = Od(e, t, a, o, g, c), k = Nd(), t.mode & Gn) {
          Sr(!0);
          try {
            b = Od(e, t, a, o, g, c), k = Nd();
          } finally {
            Sr(!1);
          }
        }
        sn(!1);
      }
      return Yl(), e !== null && !Fo ? (cx(e, t, c), Cu(e, t, c)) : (fa() && k && YS(t), t.flags |= ol, Ja(e, t, b, c), t.child);
    }
    function Gx(e, t, a, o, c) {
      {
        switch (OA(t)) {
          case !1: {
            var v = t.stateNode, g = t.type, C = new g(t.memoizedProps, v.context), b = C.state;
            v.updater.enqueueSetState(v, b, null);
            break;
          }
          case !0: {
            t.flags |= yt, t.flags |= Or;
            var k = new Error("Simulated error coming from DevTools"), M = Cr(c);
            t.lanes = Lt(t.lanes, M);
            var j = uC(t, Pc(k, t), M);
            c1(t, j);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var H = a.propTypes;
          H && zo(
            H,
            o,
            // Resolved props
            "prop",
            nn(a)
          );
        }
      }
      var Z;
      xl(a) ? (Z = !0, Tg(t)) : Z = !1, wd(t, c);
      var J = t.stateNode, ie;
      J === null ? (hy(e, t), ex(t, a, o), E1(t, a, o, c), ie = !0) : e === null ? ie = $N(t, a, o, c) : ie = HN(e, t, a, o, c);
      var $e = hC(e, t, a, ie, Z, c);
      {
        var at = t.stateNode;
        ie && at.props !== o && (Uc || h("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", ct(t) || "a component"), Uc = !0);
      }
      return $e;
    }
    function hC(e, t, a, o, c, v) {
      Kx(e, t);
      var g = (t.flags & yt) !== nt;
      if (!o && !g)
        return c && _w(t, a, !1), Cu(e, t, v);
      var C = t.stateNode;
      Xp.current = t;
      var b;
      if (g && typeof a.getDerivedStateFromError != "function")
        b = null, Ux();
      else {
        vl(t);
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
        Yl();
      }
      return t.flags |= ol, e !== null && g ? cD(e, t, b, v) : Ja(e, t, b, v), t.memoizedState = C.state, c && _w(t, a, !0), t.child;
    }
    function Yx(e) {
      var t = e.stateNode;
      t.pendingContext ? Tw(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Tw(e, t.context, !1), k1(e, t.containerInfo);
    }
    function pD(e, t, a) {
      if (Yx(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var o = t.pendingProps, c = t.memoizedState, v = c.element;
      Kw(e, t), Hg(t, o, null, a);
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
          return Qx(e, t, C, a, M);
        } else if (C !== v) {
          var j = Pc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return Qx(e, t, C, a, j);
        } else {
          yN(t);
          var H = ix(t, null, C, a);
          t.child = H;
          for (var Z = H; Z; )
            Z.flags = Z.flags & ~Pn | fi, Z = Z.sibling;
        }
      } else {
        if (bd(), C === v)
          return Cu(e, t, a);
        Ja(e, t, C, a);
      }
      return t.child;
    }
    function Qx(e, t, a, o, c) {
      return bd(), e1(c), t.flags |= Zn, Ja(e, t, a, o), t.child;
    }
    function hD(e, t, a) {
      lx(t), e === null && JS(t);
      var o = t.type, c = t.pendingProps, v = e !== null ? e.memoizedProps : null, g = c.children, C = AS(o, c);
      return C ? g = null : v !== null && AS(o, v) && (t.flags |= Sn), Kx(e, t), Ja(e, t, g, a), t.child;
    }
    function mD(e, t) {
      return e === null && JS(t), null;
    }
    function gD(e, t, a, o) {
      hy(e, t);
      var c = t.pendingProps, v = a, g = v._payload, C = v._init, b = C(g);
      t.type = b;
      var k = t.tag = mA(b), M = Io(b, c), j;
      switch (k) {
        case x:
          return mC(t, b), t.type = b = $d(b), j = pC(null, t, b, M, o), j;
        case T:
          return t.type = b = KC(b), j = Gx(null, t, b, M, o), j;
        case I:
          return t.type = b = GC(b), j = jx(null, t, b, M, o), j;
        case re: {
          if (t.type !== t.elementType) {
            var H = b.propTypes;
            H && zo(
              H,
              M,
              // Resolved for outer only
              "prop",
              nn(b)
            );
          }
          return j = Vx(
            null,
            t,
            b,
            Io(b.type, M),
            // The inner type can have defaults too
            o
          ), j;
        }
      }
      var Z = "";
      throw b !== null && typeof b == "object" && b.$$typeof === An && (Z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + b + ". " + ("Lazy element type must resolve to a class or function." + Z));
    }
    function yD(e, t, a, o, c) {
      hy(e, t), t.tag = T;
      var v;
      return xl(a) ? (v = !0, Tg(t)) : v = !1, wd(t, c), ex(t, a, o), E1(t, a, o, c), hC(null, t, a, !0, v, c);
    }
    function SD(e, t, a, o) {
      hy(e, t);
      var c = t.pendingProps, v;
      {
        var g = gd(t, a, !1);
        v = yd(t, g);
      }
      wd(t, o);
      var C, b;
      vl(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var k = nn(a) || "Unknown";
          sC[k] || (h("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", k, k), sC[k] = !0);
        }
        t.mode & Gn && Uo.recordLegacyContextWarning(t, null), sn(!0), Xp.current = t, C = Od(null, t, a, c, v, o), b = Nd(), sn(!1);
      }
      if (Yl(), t.flags |= ol, typeof C == "object" && C !== null && typeof C.render == "function" && C.$$typeof === void 0) {
        var M = nn(a) || "Unknown";
        qp[M] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", M, M, M), qp[M] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof C == "object" && C !== null && typeof C.render == "function" && C.$$typeof === void 0
      ) {
        {
          var j = nn(a) || "Unknown";
          qp[j] || (h("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", j, j, j), qp[j] = !0);
        }
        t.tag = T, t.memoizedState = null, t.updateQueue = null;
        var H = !1;
        return xl(a) ? (H = !0, Tg(t)) : H = !1, t.memoizedState = C.state !== null && C.state !== void 0 ? C.state : null, s1(t), Jw(t, C), E1(t, a, c, o), hC(null, t, a, !0, H, o);
      } else {
        if (t.tag = x, t.mode & Gn) {
          Sr(!0);
          try {
            C = Od(null, t, a, c, v, o), b = Nd();
          } finally {
            Sr(!1);
          }
        }
        return fa() && b && YS(t), Ja(null, t, C, o), mC(t, a), t.child;
      }
    }
    function mC(e, t) {
      {
        if (t && t.childContextTypes && h("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", o = Zr();
          o && (a += `

Check the render method of \`` + o + "`.");
          var c = o || "", v = e._debugSource;
          v && (c = v.fileName + ":" + v.lineNumber), dC[c] || (dC[c] = !0, h("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var g = nn(t) || "Unknown";
          fC[g] || (h("%s: Function components do not support getDerivedStateFromProps.", g), fC[g] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var C = nn(t) || "Unknown";
          cC[C] || (h("%s: Function components do not support contextType.", C), cC[C] = !0);
        }
      }
    }
    var gC = {
      dehydrated: null,
      treeContext: null,
      retryLane: rn
    };
    function yC(e) {
      return {
        baseLanes: e,
        cachePool: sD(),
        transitions: null
      };
    }
    function CD(e, t) {
      var a = null;
      return {
        baseLanes: Lt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function bD(e, t, a, o) {
      if (t !== null) {
        var c = t.memoizedState;
        if (c === null)
          return !1;
      }
      return N1(e, jp);
    }
    function ED(e, t) {
      return es(e.childLanes, t);
    }
    function Xx(e, t, a) {
      var o = t.pendingProps;
      NA(t) && (t.flags |= yt);
      var c = $o.current, v = !1, g = (t.flags & yt) !== nt;
      if (g || bD(c, e) ? (v = !0, t.flags &= ~yt) : (e === null || e.memoizedState !== null) && (c = BN(c, sx)), c = Rd(c), ws(t, c), e === null) {
        JS(t);
        var C = t.memoizedState;
        if (C !== null) {
          var b = C.dehydrated;
          if (b !== null)
            return _D(t, b);
        }
        var k = o.children, M = o.fallback;
        if (v) {
          var j = wD(t, k, M, a), H = t.child;
          return H.memoizedState = yC(a), t.memoizedState = gC, j;
        } else
          return SC(t, k);
      } else {
        var Z = e.memoizedState;
        if (Z !== null) {
          var J = Z.dehydrated;
          if (J !== null)
            return kD(e, t, g, o, J, Z, a);
        }
        if (v) {
          var ie = o.fallback, $e = o.children, at = TD(e, t, $e, ie, a), qe = t.child, on = e.child.memoizedState;
          return qe.memoizedState = on === null ? yC(a) : CD(on, a), qe.childLanes = ED(e, a), t.memoizedState = gC, at;
        } else {
          var Qt = o.children, Q = xD(e, t, Qt, a);
          return t.memoizedState = null, Q;
        }
      }
    }
    function SC(e, t, a) {
      var o = e.mode, c = {
        mode: "visible",
        children: t
      }, v = CC(c, o);
      return v.return = e, e.child = v, v;
    }
    function wD(e, t, a, o) {
      var c = e.mode, v = e.child, g = {
        mode: "hidden",
        children: t
      }, C, b;
      return (c & Bt) === ot && v !== null ? (C = v, C.childLanes = ue, C.pendingProps = g, e.mode & lt && (C.actualDuration = 0, C.actualStartTime = -1, C.selfBaseDuration = 0, C.treeBaseDuration = 0), b = Ns(a, c, o, null)) : (C = CC(g, c), b = Ns(a, c, o, null)), C.return = e, b.return = e, C.sibling = b, e.child = C, b;
    }
    function CC(e, t, a) {
      return qT(e, t, ue, null);
    }
    function qx(e, t) {
      return jc(e, t);
    }
    function xD(e, t, a, o) {
      var c = e.child, v = c.sibling, g = qx(c, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Bt) === ot && (g.lanes = o), g.return = t, g.sibling = null, v !== null) {
        var C = t.deletions;
        C === null ? (t.deletions = [v], t.flags |= yn) : C.push(v);
      }
      return t.child = g, g;
    }
    function TD(e, t, a, o, c) {
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
        k = qx(g, b), k.subtreeFlags = g.subtreeFlags & Ir;
      var j;
      return C !== null ? j = jc(C, o) : (j = Ns(o, v, c, null), j.flags |= Pn), j.return = t, k.return = t, k.sibling = j, t.child = k, j;
    }
    function py(e, t, a, o) {
      o !== null && e1(o), xd(t, e.child, null, a);
      var c = t.pendingProps, v = c.children, g = SC(t, v);
      return g.flags |= Pn, t.memoizedState = null, g;
    }
    function RD(e, t, a, o, c) {
      var v = t.mode, g = {
        mode: "visible",
        children: a
      }, C = CC(g, v), b = Ns(o, v, c, null);
      return b.flags |= Pn, C.return = t, b.return = t, C.sibling = b, t.child = C, (t.mode & Bt) !== ot && xd(t, e.child, null, c), b;
    }
    function _D(e, t, a) {
      return (e.mode & Bt) === ot ? (h("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ut) : IS(t) ? e.lanes = ql : e.lanes = Oa, null;
    }
    function kD(e, t, a, o, c, v, g) {
      if (a)
        if (t.flags & Zn) {
          t.flags &= ~Zn;
          var Q = oC(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return py(e, t, g, Q);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= yt, null;
          var oe = o.children, X = o.fallback, ye = RD(e, t, oe, X, g), He = t.child;
          return He.memoizedState = yC(g), t.memoizedState = gC, ye;
        }
      else {
        if (mN(), (t.mode & Bt) === ot)
          return py(
            e,
            t,
            g,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (IS(c)) {
          var C, b, k;
          {
            var M = LO(c);
            C = M.digest, b = M.message, k = M.stack;
          }
          var j;
          b ? j = new Error(b) : j = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var H = oC(j, C, k);
          return py(e, t, g, H);
        }
        var Z = Na(g, e.childLanes);
        if (Fo || Z) {
          var J = Ty();
          if (J !== null) {
            var ie = iS(J, g);
            if (ie !== rn && ie !== v.retryLane) {
              v.retryLane = ie;
              var $e = Dn;
              bi(e, ie), Yr(J, e, ie, $e);
            }
          }
          FC();
          var at = oC(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return py(e, t, g, at);
        } else if (Sw(c)) {
          t.flags |= yt, t.child = e.child;
          var qe = JL.bind(null, e);
          return AO(c, qe), null;
        } else {
          SN(t, c, v.treeContext);
          var on = o.children, Qt = SC(t, on);
          return Qt.flags |= fi, Qt;
        }
      }
    }
    function Zx(e, t, a) {
      e.lanes = Lt(e.lanes, t);
      var o = e.alternate;
      o !== null && (o.lanes = Lt(o.lanes, t)), i1(e.return, t, a);
    }
    function MD(e, t, a) {
      for (var o = t; o !== null; ) {
        if (o.tag === W) {
          var c = o.memoizedState;
          c !== null && Zx(o, a, e);
        } else if (o.tag === ge)
          Zx(o, a, e);
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
    function OD(e) {
      for (var t = e, a = null; t !== null; ) {
        var o = t.alternate;
        o !== null && Gg(o) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function ND(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vC[e])
        if (vC[e] = !0, typeof e == "string")
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
    function DD(e, t) {
      e !== void 0 && !vy[e] && (e !== "collapsed" && e !== "hidden" ? (vy[e] = !0, h('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (vy[e] = !0, h('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function Jx(e, t) {
      {
        var a = kr(e), o = !a && typeof Xr(e) == "function";
        if (a || o) {
          var c = a ? "array" : "iterable";
          return h("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", c, t, c), !1;
        }
      }
      return !0;
    }
    function LD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (kr(e)) {
          for (var a = 0; a < e.length; a++)
            if (!Jx(e[a], a))
              return;
        } else {
          var o = Xr(e);
          if (typeof o == "function") {
            var c = o.call(e);
            if (c)
              for (var v = c.next(), g = 0; !v.done; v = c.next()) {
                if (!Jx(v.value, g))
                  return;
                g++;
              }
          } else
            h('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function bC(e, t, a, o, c) {
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
    function eT(e, t, a) {
      var o = t.pendingProps, c = o.revealOrder, v = o.tail, g = o.children;
      ND(c), DD(v, c), LD(g, c), Ja(e, t, g, a);
      var C = $o.current, b = N1(C, jp);
      if (b)
        C = D1(C, jp), t.flags |= yt;
      else {
        var k = e !== null && (e.flags & yt) !== nt;
        k && MD(t, t.child, a), C = Rd(C);
      }
      if (ws(t, C), (t.mode & Bt) === ot)
        t.memoizedState = null;
      else
        switch (c) {
          case "forwards": {
            var M = OD(t.child), j;
            M === null ? (j = t.child, t.child = null) : (j = M.sibling, M.sibling = null), bC(
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
            var H = null, Z = t.child;
            for (t.child = null; Z !== null; ) {
              var J = Z.alternate;
              if (J !== null && Gg(J) === null) {
                t.child = Z;
                break;
              }
              var ie = Z.sibling;
              Z.sibling = H, H = Z, Z = ie;
            }
            bC(
              t,
              !0,
              // isBackwards
              H,
              null,
              // last
              v
            );
            break;
          }
          case "together": {
            bC(
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
    function AD(e, t, a) {
      k1(t, t.stateNode.containerInfo);
      var o = t.pendingProps;
      return e === null ? t.child = xd(t, null, o, a) : Ja(e, t, o, a), t.child;
    }
    var tT = !1;
    function zD(e, t, a) {
      var o = t.type, c = o._context, v = t.pendingProps, g = t.memoizedProps, C = v.value;
      {
        "value" in v || tT || (tT = !0, h("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var b = t.type.propTypes;
        b && zo(b, v, "prop", "Context.Provider");
      }
      if (jw(t, c, C), g !== null) {
        var k = g.value;
        if (Ve(k, C)) {
          if (g.children === v.children && !wg())
            return Cu(e, t, a);
        } else
          MN(t, c, a);
      }
      var M = v.children;
      return Ja(e, t, M, a), t.child;
    }
    var nT = !1;
    function PD(e, t, a) {
      var o = t.type;
      o._context === void 0 ? o !== o.Consumer && (nT || (nT = !0, h("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : o = o._context;
      var c = t.pendingProps, v = c.children;
      typeof v != "function" && h("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), wd(t, a);
      var g = zr(o);
      vl(t);
      var C;
      return Xp.current = t, sn(!0), C = v(g), sn(!1), Yl(), t.flags |= ol, Ja(e, t, C, a), t.child;
    }
    function Zp() {
      Fo = !0;
    }
    function hy(e, t) {
      (t.mode & Bt) === ot && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Pn);
    }
    function Cu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), Ux(), ch(t.lanes), Na(a, t.childLanes) ? (FN(e, t), t.child) : null;
    }
    function UD(e, t, a) {
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
    function EC(e, t) {
      var a = e.lanes;
      return !!Na(a, t);
    }
    function ID(e, t, a) {
      switch (t.tag) {
        case _:
          Yx(t), t.stateNode, bd();
          break;
        case D:
          lx(t);
          break;
        case T: {
          var o = t.type;
          xl(o) && Tg(t);
          break;
        }
        case O:
          k1(t, t.stateNode.containerInfo);
          break;
        case V: {
          var c = t.memoizedProps.value, v = t.type._context;
          jw(t, v, c);
          break;
        }
        case $:
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
              return ws(t, Rd($o.current)), t.flags |= yt, null;
            var k = t.child, M = k.childLanes;
            if (Na(a, M))
              return Xx(e, t, a);
            ws(t, Rd($o.current));
            var j = Cu(e, t, a);
            return j !== null ? j.sibling : null;
          } else
            ws(t, Rd($o.current));
          break;
        }
        case ge: {
          var H = (e.flags & yt) !== nt, Z = Na(a, t.childLanes);
          if (H) {
            if (Z)
              return eT(e, t, a);
            t.flags |= yt;
          }
          var J = t.memoizedState;
          if (J !== null && (J.rendering = null, J.tail = null, J.lastEffect = null), ws(t, $o.current), Z)
            break;
          return null;
        }
        case ne:
        case fe:
          return t.lanes = ue, Wx(e, t, a);
      }
      return Cu(e, t, a);
    }
    function rT(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return UD(e, t, ZC(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var o = e.memoizedProps, c = t.pendingProps;
        if (o !== c || wg() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          Fo = !0;
        else {
          var v = EC(e, a);
          if (!v && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & yt) === nt)
            return Fo = !1, ID(e, t, a);
          (e.flags & ac) !== nt ? Fo = !0 : Fo = !1;
        }
      } else if (Fo = !1, fa() && cN(t)) {
        var g = t.index, C = fN();
        Ow(t, C, g);
      }
      switch (t.lanes = ue, t.tag) {
        case N:
          return SD(e, t, t.type, a);
        case se: {
          var b = t.elementType;
          return gD(e, t, b, a);
        }
        case x: {
          var k = t.type, M = t.pendingProps, j = t.elementType === k ? M : Io(k, M);
          return pC(e, t, k, j, a);
        }
        case T: {
          var H = t.type, Z = t.pendingProps, J = t.elementType === H ? Z : Io(H, Z);
          return Gx(e, t, H, J, a);
        }
        case _:
          return pD(e, t, a);
        case D:
          return hD(e, t, a);
        case z:
          return mD(e, t);
        case W:
          return Xx(e, t, a);
        case O:
          return AD(e, t, a);
        case I: {
          var ie = t.type, $e = t.pendingProps, at = t.elementType === ie ? $e : Io(ie, $e);
          return jx(e, t, ie, at, a);
        }
        case P:
          return fD(e, t, a);
        case A:
          return dD(e, t, a);
        case $:
          return vD(e, t, a);
        case V:
          return zD(e, t, a);
        case Y:
          return PD(e, t, a);
        case re: {
          var qe = t.type, on = t.pendingProps, Qt = Io(qe, on);
          if (t.type !== t.elementType) {
            var Q = qe.propTypes;
            Q && zo(
              Q,
              Qt,
              // Resolved for outer only
              "prop",
              nn(qe)
            );
          }
          return Qt = Io(qe.type, Qt), Vx(e, t, qe, Qt, a);
        }
        case G:
          return Bx(e, t, t.type, t.pendingProps, a);
        case Te: {
          var oe = t.type, X = t.pendingProps, ye = t.elementType === oe ? X : Io(oe, X);
          return yD(e, t, oe, ye, a);
        }
        case ge:
          return eT(e, t, a);
        case Ee:
          break;
        case ne:
          return Wx(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Dd(e) {
      e.flags |= Dt;
    }
    function aT(e) {
      e.flags |= xa, e.flags |= Lv;
    }
    var iT, wC, oT, lT;
    iT = function(e, t, a, o) {
      for (var c = t.child; c !== null; ) {
        if (c.tag === D || c.tag === z)
          lO(e, c.stateNode);
        else if (c.tag !== O) {
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
    }, wC = function(e, t) {
    }, oT = function(e, t, a, o, c) {
      var v = e.memoizedProps;
      if (v !== o) {
        var g = t.stateNode, C = M1(), b = sO(g, a, v, o, c, C);
        t.updateQueue = b, b && Dd(t);
      }
    }, lT = function(e, t, a, o) {
      a !== o && Dd(t);
    };
    function Jp(e, t) {
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
            a = Lt(a, Lt(k.lanes, k.childLanes)), o |= k.subtreeFlags & Ir, o |= k.flags & Ir, b += k.treeBaseDuration, k = k.sibling;
          e.treeBaseDuration = b;
        } else
          for (var M = e.child; M !== null; )
            a = Lt(a, Lt(M.lanes, M.childLanes)), o |= M.subtreeFlags & Ir, o |= M.flags & Ir, M.return = e, M = M.sibling;
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
    function $D(e, t, a) {
      if (xN() && (t.mode & Bt) !== ot && (t.flags & yt) === nt)
        return Uw(t), bd(), t.flags |= Zn | Ga | Or, !1;
      var o = Og(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!o)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (EN(t), va(t), (t.mode & lt) !== ot) {
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
        return Iw(), !0;
    }
    function uT(e, t, a) {
      var o = t.pendingProps;
      switch (QS(t), t.tag) {
        case N:
        case se:
        case G:
        case x:
        case I:
        case P:
        case A:
        case $:
        case Y:
        case re:
          return va(t), null;
        case T: {
          var c = t.type;
          return xl(c) && xg(t), va(t), null;
        }
        case _: {
          var v = t.stateNode;
          if (Td(t), WS(t), A1(), v.pendingContext && (v.context = v.pendingContext, v.pendingContext = null), e === null || e.child === null) {
            var g = Og(t);
            if (g)
              Dd(t);
            else if (e !== null) {
              var C = e.memoizedState;
              // Check if this is a client root
              (!C.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & Zn) !== nt) && (t.flags |= ci, Iw());
            }
          }
          return wC(e, t), va(t), null;
        }
        case D: {
          O1(t);
          var b = ox(), k = t.type;
          if (e !== null && t.stateNode != null)
            oT(e, t, k, o, b), e.ref !== t.ref && aT(t);
          else {
            if (!o) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return va(t), null;
            }
            var M = M1(), j = Og(t);
            if (j)
              CN(t, b, M) && Dd(t);
            else {
              var H = oO(k, o, b, M, t);
              iT(H, t, !1, !1), t.stateNode = H, uO(H, k, o, b) && Dd(t);
            }
            t.ref !== null && aT(t);
          }
          return va(t), null;
        }
        case z: {
          var Z = o;
          if (e && t.stateNode != null) {
            var J = e.memoizedProps;
            lT(e, t, J, Z);
          } else {
            if (typeof Z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var ie = ox(), $e = M1(), at = Og(t);
            at ? bN(t) && Dd(t) : t.stateNode = cO(Z, ie, $e, t);
          }
          return va(t), null;
        }
        case W: {
          _d(t);
          var qe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var on = $D(e, t, qe);
            if (!on)
              return t.flags & Or ? t : null;
          }
          if ((t.flags & yt) !== nt)
            return t.lanes = a, (t.mode & lt) !== ot && iC(t), t;
          var Qt = qe !== null, Q = e !== null && e.memoizedState !== null;
          if (Qt !== Q && Qt) {
            var oe = t.child;
            if (oe.flags |= ll, (t.mode & Bt) !== ot) {
              var X = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ze);
              X || N1($o.current, sx) ? HL() : FC();
            }
          }
          var ye = t.updateQueue;
          if (ye !== null && (t.flags |= Dt), va(t), (t.mode & lt) !== ot && Qt) {
            var He = t.child;
            He !== null && (t.treeBaseDuration -= He.treeBaseDuration);
          }
          return null;
        }
        case O:
          return Td(t), wC(e, t), e === null && rN(t.stateNode.containerInfo), va(t), null;
        case V:
          var Ae = t.type._context;
          return a1(Ae, t), va(t), null;
        case Te: {
          var mt = t.type;
          return xl(mt) && xg(t), va(t), null;
        }
        case ge: {
          _d(t);
          var Tt = t.memoizedState;
          if (Tt === null)
            return va(t), null;
          var xn = (t.flags & yt) !== nt, hn = Tt.rendering;
          if (hn === null)
            if (xn)
              Jp(Tt, !1);
            else {
              var xr = jL() && (e === null || (e.flags & yt) === nt);
              if (!xr)
                for (var mn = t.child; mn !== null; ) {
                  var gr = Gg(mn);
                  if (gr !== null) {
                    xn = !0, t.flags |= yt, Jp(Tt, !1);
                    var za = gr.updateQueue;
                    return za !== null && (t.updateQueue = za, t.flags |= Dt), t.subtreeFlags = nt, jN(t, a), ws(t, D1($o.current, jp)), t.child;
                  }
                  mn = mn.sibling;
                }
              Tt.tail !== null && Kn() > MT() && (t.flags |= yt, xn = !0, Jp(Tt, !1), t.lanes = Kv);
            }
          else {
            if (!xn) {
              var ya = Gg(hn);
              if (ya !== null) {
                t.flags |= yt, xn = !0;
                var $i = ya.updateQueue;
                if ($i !== null && (t.updateQueue = $i, t.flags |= Dt), Jp(Tt, !0), Tt.tail === null && Tt.tailMode === "hidden" && !hn.alternate && !fa())
                  return va(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Kn() * 2 - Tt.renderingStartTime > MT() && a !== Oa && (t.flags |= yt, xn = !0, Jp(Tt, !1), t.lanes = Kv);
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
            var Pa = $o.current;
            return xn ? Pa = D1(Pa, jp) : Pa = Rd(Pa), ws(t, Pa), ri;
          }
          return va(t), null;
        }
        case Ee:
          break;
        case ne:
        case fe: {
          HC(t);
          var Tu = t.memoizedState, Hd = Tu !== null;
          if (e !== null) {
            var hh = e.memoizedState, Dl = hh !== null;
            Dl !== Hd && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ae && (t.flags |= ll);
          }
          return !Hd || (t.mode & Bt) === ot ? va(t) : Na(Nl, Oa) && (va(t), t.subtreeFlags & (Pn | Dt) && (t.flags |= ll)), null;
        }
        case Ce:
          return null;
        case we:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function HD(e, t, a) {
      switch (QS(t), t.tag) {
        case T: {
          var o = t.type;
          xl(o) && xg(t);
          var c = t.flags;
          return c & Or ? (t.flags = c & ~Or | yt, (t.mode & lt) !== ot && iC(t), t) : null;
        }
        case _: {
          t.stateNode, Td(t), WS(t), A1();
          var v = t.flags;
          return (v & Or) !== nt && (v & yt) === nt ? (t.flags = v & ~Or | yt, t) : null;
        }
        case D:
          return O1(t), null;
        case W: {
          _d(t);
          var g = t.memoizedState;
          if (g !== null && g.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            bd();
          }
          var C = t.flags;
          return C & Or ? (t.flags = C & ~Or | yt, (t.mode & lt) !== ot && iC(t), t) : null;
        }
        case ge:
          return _d(t), null;
        case O:
          return Td(t), null;
        case V:
          var b = t.type._context;
          return a1(b, t), null;
        case ne:
        case fe:
          return HC(t), null;
        case Ce:
          return null;
        default:
          return null;
      }
    }
    function sT(e, t, a) {
      switch (QS(t), t.tag) {
        case T: {
          var o = t.type.childContextTypes;
          o != null && xg(t);
          break;
        }
        case _: {
          t.stateNode, Td(t), WS(t), A1();
          break;
        }
        case D: {
          O1(t);
          break;
        }
        case O:
          Td(t);
          break;
        case W:
          _d(t);
          break;
        case ge:
          _d(t);
          break;
        case V:
          var c = t.type._context;
          a1(c, t);
          break;
        case ne:
        case fe:
          HC(t);
          break;
      }
    }
    var cT = null;
    cT = /* @__PURE__ */ new Set();
    var my = !1, pa = !1, FD = typeof WeakSet == "function" ? WeakSet : Set, Be = null, Ld = null, Ad = null;
    function jD(e) {
      Kl(null, function() {
        throw e;
      }), Nv();
    }
    var VD = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & lt)
        try {
          Ml(), t.componentWillUnmount();
        } finally {
          kl(e);
        }
      else
        t.componentWillUnmount();
    };
    function fT(e, t) {
      try {
        Rs(jr, e);
      } catch (a) {
        Hn(e, t, a);
      }
    }
    function xC(e, t, a) {
      try {
        VD(e, a);
      } catch (o) {
        Hn(e, t, o);
      }
    }
    function BD(e, t, a) {
      try {
        a.componentDidMount();
      } catch (o) {
        Hn(e, t, o);
      }
    }
    function dT(e, t) {
      try {
        pT(e);
      } catch (a) {
        Hn(e, t, a);
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
                Ml(), o = a(null);
              } finally {
                kl(e);
              }
            else
              o = a(null);
          } catch (c) {
            Hn(e, t, c);
          }
          typeof o == "function" && h("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", ct(e));
        } else
          a.current = null;
    }
    function gy(e, t, a) {
      try {
        a();
      } catch (o) {
        Hn(e, t, o);
      }
    }
    var vT = !1;
    function WD(e, t) {
      aO(e.containerInfo), Be = t, KD();
      var a = vT;
      return vT = !1, a;
    }
    function KD() {
      for (; Be !== null; ) {
        var e = Be, t = e.child;
        (e.subtreeFlags & Ku) !== nt && t !== null ? (t.return = e, Be = t) : GD();
      }
    }
    function GD() {
      for (; Be !== null; ) {
        var e = Be;
        be(e);
        try {
          YD(e);
        } catch (a) {
          Hn(e, e.return, a);
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
    function YD(e) {
      var t = e.alternate, a = e.flags;
      if ((a & ci) !== nt) {
        switch (be(e), e.tag) {
          case x:
          case I:
          case G:
            break;
          case T: {
            if (t !== null) {
              var o = t.memoizedProps, c = t.memoizedState, v = e.stateNode;
              e.type === e.elementType && !Uc && (v.props !== e.memoizedProps && h("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(e) || "instance"), v.state !== e.memoizedState && h("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(e) || "instance"));
              var g = v.getSnapshotBeforeUpdate(e.elementType === e.type ? o : Io(e.type, o), c);
              {
                var C = cT;
                g === void 0 && !C.has(e.type) && (C.add(e.type), h("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", ct(e)));
              }
              v.__reactInternalSnapshotBeforeUpdate = g;
            }
            break;
          }
          case _: {
            {
              var b = e.stateNode;
              MO(b.containerInfo);
            }
            break;
          }
          case D:
          case z:
          case O:
          case Te:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        Wn();
      }
    }
    function jo(e, t, a) {
      var o = t.updateQueue, c = o !== null ? o.lastEffect : null;
      if (c !== null) {
        var v = c.next, g = v;
        do {
          if ((g.tag & e) === e) {
            var C = g.destroy;
            g.destroy = void 0, C !== void 0 && ((e & da) !== Ei ? xf(t) : (e & jr) !== Ei && Tf(t), (e & Tl) !== Ei && dh(!0), gy(t, a, C), (e & Tl) !== Ei && dh(!1), (e & da) !== Ei ? Mm() : (e & jr) !== Ei && Gu());
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
            (e & da) !== Ei ? km(t) : (e & jr) !== Ei && Om(t);
            var g = v.create;
            (e & Tl) !== Ei && dh(!0), v.destroy = g(), (e & Tl) !== Ei && dh(!1), (e & da) !== Ei ? Vv() : (e & jr) !== Ei && Nm();
            {
              var C = v.destroy;
              if (C !== void 0 && typeof C != "function") {
                var b = void 0;
                (v.tag & jr) !== nt ? b = "useLayoutEffect" : (v.tag & Tl) !== nt ? b = "useInsertionEffect" : b = "useEffect";
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
    function QD(e, t) {
      if ((t.flags & Dt) !== nt)
        switch (t.tag) {
          case $: {
            var a = t.stateNode.passiveEffectDuration, o = t.memoizedProps, c = o.id, v = o.onPostCommit, g = zx(), C = t.alternate === null ? "mount" : "update";
            Ax() && (C = "nested-update"), typeof v == "function" && v(c, C, a, g);
            var b = t.return;
            e:
              for (; b !== null; ) {
                switch (b.tag) {
                  case _:
                    var k = b.stateNode;
                    k.passiveEffectDuration += a;
                    break e;
                  case $:
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
    function XD(e, t, a, o) {
      if ((a.flags & Jr) !== nt)
        switch (a.tag) {
          case x:
          case I:
          case G: {
            if (!pa)
              if (a.mode & lt)
                try {
                  Ml(), Rs(jr | Fr, a);
                } finally {
                  kl(a);
                }
              else
                Rs(jr | Fr, a);
            break;
          }
          case T: {
            var c = a.stateNode;
            if (a.flags & Dt && !pa)
              if (t === null)
                if (a.type === a.elementType && !Uc && (c.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), c.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & lt)
                  try {
                    Ml(), c.componentDidMount();
                  } finally {
                    kl(a);
                  }
                else
                  c.componentDidMount();
              else {
                var v = a.elementType === a.type ? t.memoizedProps : Io(a.type, t.memoizedProps), g = t.memoizedState;
                if (a.type === a.elementType && !Uc && (c.props !== a.memoizedProps && h("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), c.state !== a.memoizedState && h("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), a.mode & lt)
                  try {
                    Ml(), c.componentDidUpdate(v, g, c.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    kl(a);
                  }
                else
                  c.componentDidUpdate(v, g, c.__reactInternalSnapshotBeforeUpdate);
              }
            var C = a.updateQueue;
            C !== null && (a.type === a.elementType && !Uc && (c.props !== a.memoizedProps && h("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", ct(a) || "instance"), c.state !== a.memoizedState && h("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", ct(a) || "instance")), Yw(a, C, c));
            break;
          }
          case _: {
            var b = a.updateQueue;
            if (b !== null) {
              var k = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case D:
                    k = a.child.stateNode;
                    break;
                  case T:
                    k = a.child.stateNode;
                    break;
                }
              Yw(a, b, k);
            }
            break;
          }
          case D: {
            var M = a.stateNode;
            if (t === null && a.flags & Dt) {
              var j = a.type, H = a.memoizedProps;
              hO(M, j, H);
            }
            break;
          }
          case z:
            break;
          case O:
            break;
          case $: {
            {
              var Z = a.memoizedProps, J = Z.onCommit, ie = Z.onRender, $e = a.stateNode.effectDuration, at = zx(), qe = t === null ? "mount" : "update";
              Ax() && (qe = "nested-update"), typeof ie == "function" && ie(a.memoizedProps.id, qe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, at);
              {
                typeof J == "function" && J(a.memoizedProps.id, qe, $e, at), GL(a);
                var on = a.return;
                e:
                  for (; on !== null; ) {
                    switch (on.tag) {
                      case _:
                        var Qt = on.stateNode;
                        Qt.effectDuration += $e;
                        break e;
                      case $:
                        var Q = on.stateNode;
                        Q.effectDuration += $e;
                        break e;
                    }
                    on = on.return;
                  }
              }
            }
            break;
          }
          case W: {
            aL(e, a);
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
      pa || a.flags & xa && pT(a);
    }
    function qD(e) {
      switch (e.tag) {
        case x:
        case I:
        case G: {
          if (e.mode & lt)
            try {
              Ml(), fT(e, e.return);
            } finally {
              kl(e);
            }
          else
            fT(e, e.return);
          break;
        }
        case T: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && BD(e, e.return, t), dT(e, e.return);
          break;
        }
        case D: {
          dT(e, e.return);
          break;
        }
      }
    }
    function ZD(e, t) {
      for (var a = null, o = e; ; ) {
        if (o.tag === D) {
          if (a === null) {
            a = o;
            try {
              var c = o.stateNode;
              t ? TO(c) : _O(o.stateNode, o.memoizedProps);
            } catch (g) {
              Hn(e, e.return, g);
            }
          }
        } else if (o.tag === z) {
          if (a === null)
            try {
              var v = o.stateNode;
              t ? RO(v) : kO(v, o.memoizedProps);
            } catch (g) {
              Hn(e, e.return, g);
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
    function pT(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, o;
        switch (e.tag) {
          case D:
            o = a;
            break;
          default:
            o = a;
        }
        if (typeof t == "function") {
          var c;
          if (e.mode & lt)
            try {
              Ml(), c = t(o);
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
    function JD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function hT(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, hT(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === D) {
          var a = e.stateNode;
          a !== null && oN(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function eL(e) {
      for (var t = e.return; t !== null; ) {
        if (mT(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function mT(e) {
      return e.tag === D || e.tag === _ || e.tag === O;
    }
    function gT(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || mT(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== D && t.tag !== z && t.tag !== le; ) {
            if (t.flags & Pn || t.child === null || t.tag === O)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & Pn))
            return t.stateNode;
        }
    }
    function tL(e) {
      var t = eL(e);
      switch (t.tag) {
        case D: {
          var a = t.stateNode;
          t.flags & Sn && (yw(a), t.flags &= ~Sn);
          var o = gT(e);
          RC(e, o, a);
          break;
        }
        case _:
        case O: {
          var c = t.stateNode.containerInfo, v = gT(e);
          TC(e, v, c);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function TC(e, t, a) {
      var o = e.tag, c = o === D || o === z;
      if (c) {
        var v = e.stateNode;
        t ? bO(a, v, t) : SO(a, v);
      } else if (o !== O) {
        var g = e.child;
        if (g !== null) {
          TC(g, t, a);
          for (var C = g.sibling; C !== null; )
            TC(C, t, a), C = C.sibling;
        }
      }
    }
    function RC(e, t, a) {
      var o = e.tag, c = o === D || o === z;
      if (c) {
        var v = e.stateNode;
        t ? CO(a, v, t) : yO(a, v);
      } else if (o !== O) {
        var g = e.child;
        if (g !== null) {
          RC(g, t, a);
          for (var C = g.sibling; C !== null; )
            RC(C, t, a), C = C.sibling;
        }
      }
    }
    var ha = null, Vo = !1;
    function nL(e, t, a) {
      {
        var o = t;
        e:
          for (; o !== null; ) {
            switch (o.tag) {
              case D: {
                ha = o.stateNode, Vo = !1;
                break e;
              }
              case _: {
                ha = o.stateNode.containerInfo, Vo = !0;
                break e;
              }
              case O: {
                ha = o.stateNode.containerInfo, Vo = !0;
                break e;
              }
            }
            o = o.return;
          }
        if (ha === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        yT(e, t, a), ha = null, Vo = !1;
      }
      JD(a);
    }
    function _s(e, t, a) {
      for (var o = a.child; o !== null; )
        yT(e, t, o), o = o.sibling;
    }
    function yT(e, t, a) {
      switch (Fv(a), a.tag) {
        case D:
          pa || zd(a, t);
        case z: {
          {
            var o = ha, c = Vo;
            ha = null, _s(e, t, a), ha = o, Vo = c, ha !== null && (Vo ? wO(ha, a.stateNode) : EO(ha, a.stateNode));
          }
          return;
        }
        case le: {
          ha !== null && (Vo ? xO(ha, a.stateNode) : US(ha, a.stateNode));
          return;
        }
        case O: {
          {
            var v = ha, g = Vo;
            ha = a.stateNode.containerInfo, Vo = !0, _s(e, t, a), ha = v, Vo = g;
          }
          return;
        }
        case x:
        case I:
        case re:
        case G: {
          if (!pa) {
            var C = a.updateQueue;
            if (C !== null) {
              var b = C.lastEffect;
              if (b !== null) {
                var k = b.next, M = k;
                do {
                  var j = M, H = j.destroy, Z = j.tag;
                  H !== void 0 && ((Z & Tl) !== Ei ? gy(a, t, H) : (Z & jr) !== Ei && (Tf(a), a.mode & lt ? (Ml(), gy(a, t, H), kl(a)) : gy(a, t, H), Gu())), M = M.next;
                } while (M !== k);
              }
            }
          }
          _s(e, t, a);
          return;
        }
        case T: {
          if (!pa) {
            zd(a, t);
            var J = a.stateNode;
            typeof J.componentWillUnmount == "function" && xC(a, t, J);
          }
          _s(e, t, a);
          return;
        }
        case Ee: {
          _s(e, t, a);
          return;
        }
        case ne: {
          if (
            // TODO: Remove this dead flag
            a.mode & Bt
          ) {
            var ie = pa;
            pa = ie || a.memoizedState !== null, _s(e, t, a), pa = ie;
          } else
            _s(e, t, a);
          break;
        }
        default: {
          _s(e, t, a);
          return;
        }
      }
    }
    function rL(e) {
      e.memoizedState;
    }
    function aL(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var o = t.alternate;
        if (o !== null) {
          var c = o.memoizedState;
          if (c !== null) {
            var v = c.dehydrated;
            v !== null && VO(v);
          }
        }
      }
    }
    function ST(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new FD()), t.forEach(function(o) {
          var c = eA.bind(null, e, o);
          if (!a.has(o)) {
            if (a.add(o), $r)
              if (Ld !== null && Ad !== null)
                fh(Ad, Ld);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            o.then(c, c);
          }
        });
      }
    }
    function iL(e, t, a) {
      Ld = a, Ad = e, be(t), CT(t, e), be(t), Ld = null, Ad = null;
    }
    function Bo(e, t, a) {
      var o = t.deletions;
      if (o !== null)
        for (var c = 0; c < o.length; c++) {
          var v = o[c];
          try {
            nL(e, t, v);
          } catch (b) {
            Hn(v, t, b);
          }
        }
      var g = gt();
      if (t.subtreeFlags & _a)
        for (var C = t.child; C !== null; )
          be(C), CT(C, e), C = C.sibling;
      be(g);
    }
    function CT(e, t, a) {
      var o = e.alternate, c = e.flags;
      switch (e.tag) {
        case x:
        case I:
        case re:
        case G: {
          if (Bo(t, e), Ol(e), c & Dt) {
            try {
              jo(Tl | Fr, e, e.return), Rs(Tl | Fr, e);
            } catch (mt) {
              Hn(e, e.return, mt);
            }
            if (e.mode & lt) {
              try {
                Ml(), jo(jr | Fr, e, e.return);
              } catch (mt) {
                Hn(e, e.return, mt);
              }
              kl(e);
            } else
              try {
                jo(jr | Fr, e, e.return);
              } catch (mt) {
                Hn(e, e.return, mt);
              }
          }
          return;
        }
        case T: {
          Bo(t, e), Ol(e), c & xa && o !== null && zd(o, o.return);
          return;
        }
        case D: {
          Bo(t, e), Ol(e), c & xa && o !== null && zd(o, o.return);
          {
            if (e.flags & Sn) {
              var v = e.stateNode;
              try {
                yw(v);
              } catch (mt) {
                Hn(e, e.return, mt);
              }
            }
            if (c & Dt) {
              var g = e.stateNode;
              if (g != null) {
                var C = e.memoizedProps, b = o !== null ? o.memoizedProps : C, k = e.type, M = e.updateQueue;
                if (e.updateQueue = null, M !== null)
                  try {
                    mO(g, M, k, b, C, e);
                  } catch (mt) {
                    Hn(e, e.return, mt);
                  }
              }
            }
          }
          return;
        }
        case z: {
          if (Bo(t, e), Ol(e), c & Dt) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var j = e.stateNode, H = e.memoizedProps, Z = o !== null ? o.memoizedProps : H;
            try {
              gO(j, Z, H);
            } catch (mt) {
              Hn(e, e.return, mt);
            }
          }
          return;
        }
        case _: {
          if (Bo(t, e), Ol(e), c & Dt && o !== null) {
            var J = o.memoizedState;
            if (J.isDehydrated)
              try {
                jO(t.containerInfo);
              } catch (mt) {
                Hn(e, e.return, mt);
              }
          }
          return;
        }
        case O: {
          Bo(t, e), Ol(e);
          return;
        }
        case W: {
          Bo(t, e), Ol(e);
          var ie = e.child;
          if (ie.flags & ll) {
            var $e = ie.stateNode, at = ie.memoizedState, qe = at !== null;
            if ($e.isHidden = qe, qe) {
              var on = ie.alternate !== null && ie.alternate.memoizedState !== null;
              on || $L();
            }
          }
          if (c & Dt) {
            try {
              rL(e);
            } catch (mt) {
              Hn(e, e.return, mt);
            }
            ST(e);
          }
          return;
        }
        case ne: {
          var Qt = o !== null && o.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & Bt
          ) {
            var Q = pa;
            pa = Q || Qt, Bo(t, e), pa = Q;
          } else
            Bo(t, e);
          if (Ol(e), c & ll) {
            var oe = e.stateNode, X = e.memoizedState, ye = X !== null, He = e;
            if (oe.isHidden = ye, ye && !Qt && (He.mode & Bt) !== ot) {
              Be = He;
              for (var Ae = He.child; Ae !== null; )
                Be = Ae, lL(Ae), Ae = Ae.sibling;
            }
            ZD(He, ye);
          }
          return;
        }
        case ge: {
          Bo(t, e), Ol(e), c & Dt && ST(e);
          return;
        }
        case Ee:
          return;
        default: {
          Bo(t, e), Ol(e);
          return;
        }
      }
    }
    function Ol(e) {
      var t = e.flags;
      if (t & Pn) {
        try {
          tL(e);
        } catch (a) {
          Hn(e, e.return, a);
        }
        e.flags &= ~Pn;
      }
      t & fi && (e.flags &= ~fi);
    }
    function oL(e, t, a) {
      Ld = a, Ad = t, Be = e, bT(e, t, a), Ld = null, Ad = null;
    }
    function bT(e, t, a) {
      for (var o = (e.mode & Bt) !== ot; Be !== null; ) {
        var c = Be, v = c.child;
        if (c.tag === ne && o) {
          var g = c.memoizedState !== null, C = g || my;
          if (C) {
            _C(e, t, a);
            continue;
          } else {
            var b = c.alternate, k = b !== null && b.memoizedState !== null, M = k || pa, j = my, H = pa;
            my = C, pa = M, pa && !H && (Be = c, uL(c));
            for (var Z = v; Z !== null; )
              Be = Z, bT(
                Z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), Z = Z.sibling;
            Be = c, my = j, pa = H, _C(e, t, a);
            continue;
          }
        }
        (c.subtreeFlags & Jr) !== nt && v !== null ? (v.return = c, Be = v) : _C(e, t, a);
      }
    }
    function _C(e, t, a) {
      for (; Be !== null; ) {
        var o = Be;
        if ((o.flags & Jr) !== nt) {
          var c = o.alternate;
          be(o);
          try {
            XD(t, c, o, a);
          } catch (g) {
            Hn(o, o.return, g);
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
    function lL(e) {
      for (; Be !== null; ) {
        var t = Be, a = t.child;
        switch (t.tag) {
          case x:
          case I:
          case re:
          case G: {
            if (t.mode & lt)
              try {
                Ml(), jo(jr, t, t.return);
              } finally {
                kl(t);
              }
            else
              jo(jr, t, t.return);
            break;
          }
          case T: {
            zd(t, t.return);
            var o = t.stateNode;
            typeof o.componentWillUnmount == "function" && xC(t, t.return, o);
            break;
          }
          case D: {
            zd(t, t.return);
            break;
          }
          case ne: {
            var c = t.memoizedState !== null;
            if (c) {
              ET(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Be = a) : ET(e);
      }
    }
    function ET(e) {
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
    function uL(e) {
      for (; Be !== null; ) {
        var t = Be, a = t.child;
        if (t.tag === ne) {
          var o = t.memoizedState !== null;
          if (o) {
            wT(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Be = a) : wT(e);
      }
    }
    function wT(e) {
      for (; Be !== null; ) {
        var t = Be;
        be(t);
        try {
          qD(t);
        } catch (o) {
          Hn(t, t.return, o);
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
    function sL(e, t, a, o) {
      Be = t, cL(t, e, a, o);
    }
    function cL(e, t, a, o) {
      for (; Be !== null; ) {
        var c = Be, v = c.child;
        (c.subtreeFlags & di) !== nt && v !== null ? (v.return = c, Be = v) : fL(e, t, a, o);
      }
    }
    function fL(e, t, a, o) {
      for (; Be !== null; ) {
        var c = Be;
        if ((c.flags & jn) !== nt) {
          be(c);
          try {
            dL(t, c, a, o);
          } catch (g) {
            Hn(c, c.return, g);
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
    function dL(e, t, a, o) {
      switch (t.tag) {
        case x:
        case I:
        case G: {
          if (t.mode & lt) {
            aC();
            try {
              Rs(da | Fr, t);
            } finally {
              rC(t);
            }
          } else
            Rs(da | Fr, t);
          break;
        }
      }
    }
    function vL(e) {
      Be = e, pL();
    }
    function pL() {
      for (; Be !== null; ) {
        var e = Be, t = e.child;
        if ((Be.flags & yn) !== nt) {
          var a = e.deletions;
          if (a !== null) {
            for (var o = 0; o < a.length; o++) {
              var c = a[o];
              Be = c, gL(c, e);
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
        (e.subtreeFlags & di) !== nt && t !== null ? (t.return = e, Be = t) : hL();
      }
    }
    function hL() {
      for (; Be !== null; ) {
        var e = Be;
        (e.flags & jn) !== nt && (be(e), mL(e), Wn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Be = t;
          return;
        }
        Be = e.return;
      }
    }
    function mL(e) {
      switch (e.tag) {
        case x:
        case I:
        case G: {
          e.mode & lt ? (aC(), jo(da | Fr, e, e.return), rC(e)) : jo(da | Fr, e, e.return);
          break;
        }
      }
    }
    function gL(e, t) {
      for (; Be !== null; ) {
        var a = Be;
        be(a), SL(a, t), Wn();
        var o = a.child;
        o !== null ? (o.return = a, Be = o) : yL(e);
      }
    }
    function yL(e) {
      for (; Be !== null; ) {
        var t = Be, a = t.sibling, o = t.return;
        if (hT(t), t === e) {
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
    function SL(e, t) {
      switch (e.tag) {
        case x:
        case I:
        case G: {
          e.mode & lt ? (aC(), jo(da, e, t), rC(e)) : jo(da, e, t);
          break;
        }
      }
    }
    function CL(e) {
      switch (e.tag) {
        case x:
        case I:
        case G: {
          try {
            Rs(jr | Fr, e);
          } catch (a) {
            Hn(e, e.return, a);
          }
          break;
        }
        case T: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Hn(e, e.return, a);
          }
          break;
        }
      }
    }
    function bL(e) {
      switch (e.tag) {
        case x:
        case I:
        case G: {
          try {
            Rs(da | Fr, e);
          } catch (t) {
            Hn(e, e.return, t);
          }
          break;
        }
      }
    }
    function EL(e) {
      switch (e.tag) {
        case x:
        case I:
        case G: {
          try {
            jo(jr | Fr, e, e.return);
          } catch (a) {
            Hn(e, e.return, a);
          }
          break;
        }
        case T: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && xC(e, e.return, t);
          break;
        }
      }
    }
    function wL(e) {
      switch (e.tag) {
        case x:
        case I:
        case G:
          try {
            jo(da | Fr, e, e.return);
          } catch (t) {
            Hn(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var eh = Symbol.for;
      eh("selector.component"), eh("selector.has_pseudo_class"), eh("selector.role"), eh("selector.test_id"), eh("selector.text");
    }
    var xL = [];
    function TL() {
      xL.forEach(function(e) {
        return e();
      });
    }
    var RL = u.ReactCurrentActQueue;
    function _L(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT != "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest != "undefined";
        return a && t !== !1;
      }
    }
    function xT() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT != "undefined" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && RL.current !== null && h("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var kL = Math.ceil, kC = u.ReactCurrentDispatcher, MC = u.ReactCurrentOwner, ma = u.ReactCurrentBatchConfig, Wo = u.ReactCurrentActQueue, Wr = (
      /*             */
      0
    ), TT = (
      /*               */
      1
    ), ga = (
      /*                */
      2
    ), ao = (
      /*                */
      4
    ), bu = 0, th = 1, Ic = 2, yy = 3, nh = 4, RT = 5, OC = 6, an = Wr, ei = null, sr = null, Kr = ue, Nl = ue, NC = gs(ue), Gr = bu, rh = null, Sy = ue, ah = ue, Cy = ue, ih = null, wi = null, DC = 0, _T = 500, kT = 1 / 0, ML = 500, Eu = null;
    function oh() {
      kT = Kn() + ML;
    }
    function MT() {
      return kT;
    }
    var by = !1, LC = null, Pd = null, $c = !1, ks = null, lh = ue, AC = [], zC = null, OL = 50, uh = 0, PC = null, UC = !1, Ey = !1, NL = 50, Ud = 0, wy = null, sh = Dn, xy = ue, OT = !1;
    function Ty() {
      return ei;
    }
    function ti() {
      return (an & (ga | ao)) !== Wr ? Kn() : (sh !== Dn || (sh = Kn()), sh);
    }
    function Ms(e) {
      var t = e.mode;
      if ((t & Bt) === ot)
        return ut;
      if ((an & ga) !== Wr && Kr !== ue)
        return Cr(Kr);
      var a = _N() !== RN;
      if (a) {
        if (ma.transition !== null) {
          var o = ma.transition;
          o._updatedFibers || (o._updatedFibers = /* @__PURE__ */ new Set()), o._updatedFibers.add(e);
        }
        return xy === rn && (xy = Qv()), xy;
      }
      var c = mi();
      if (c !== rn)
        return c;
      var v = fO();
      return v;
    }
    function DL(e) {
      var t = e.mode;
      return (t & Bt) === ot ? ut : aS();
    }
    function Yr(e, t, a, o) {
      nA(), OT && h("useInsertionEffect must not schedule updates."), UC && (Ey = !0), au(e, a, o), (an & ga) !== ue && e === ei ? iA(t) : ($r && ep(e, t, a), oA(t), e === ei && ((an & ga) === Wr && (ah = Lt(ah, a)), Gr === nh && Os(e, Kr)), xi(e, o), a === ut && an === Wr && (t.mode & Bt) === ot && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !Wo.isBatchingLegacy && (oh(), Mw()));
    }
    function LL(e, t, a) {
      var o = e.current;
      o.lanes = t, au(e, t, a), xi(e, a);
    }
    function AL(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (an & ga) !== Wr
      );
    }
    function xi(e, t) {
      var a = e.callbackNode;
      tS(e, t);
      var o = cc(e, e === ei ? Kr : ue);
      if (o === ue) {
        a !== null && KT(a), e.callbackNode = null, e.callbackPriority = rn;
        return;
      }
      var c = hr(o), v = e.callbackPriority;
      if (v === c && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(Wo.current !== null && a !== BC)) {
        a == null && v !== ut && h("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && KT(a);
      var g;
      if (c === ut)
        e.tag === ys ? (Wo.isBatchingLegacy !== null && (Wo.didScheduleLegacyUpdate = !0), sN(LT.bind(null, e))) : kw(LT.bind(null, e)), Wo.current !== null ? Wo.current.push(Ss) : vO(function() {
          (an & (ga | ao)) === Wr && Ss();
        }), g = null;
      else {
        var C;
        switch (hc(o)) {
          case ea:
            C = bf;
            break;
          case Hr:
            C = Xa;
            break;
          case Oo:
            C = Yi;
            break;
          case vc:
            C = sl;
            break;
          default:
            C = Yi;
            break;
        }
        g = WC(C, NT.bind(null, e));
      }
      e.callbackPriority = c, e.callbackNode = g;
    }
    function NT(e, t) {
      if (nD(), sh = Dn, xy = ue, (an & (ga | ao)) !== Wr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, o = xu();
      if (o && e.callbackNode !== a)
        return null;
      var c = cc(e, e === ei ? Kr : ue);
      if (c === ue)
        return null;
      var v = !dc(e, c) && !Um(e, c) && !t, g = v ? BL(e, c) : _y(e, c);
      if (g !== bu) {
        if (g === Ic) {
          var C = Gv(e);
          C !== ue && (c = C, g = IC(e, C));
        }
        if (g === th) {
          var b = rh;
          throw Hc(e, ue), Os(e, c), xi(e, Kn()), b;
        }
        if (g === OC)
          Os(e, c);
        else {
          var k = !dc(e, c), M = e.current.alternate;
          if (k && !PL(M)) {
            if (g = _y(e, c), g === Ic) {
              var j = Gv(e);
              j !== ue && (c = j, g = IC(e, j));
            }
            if (g === th) {
              var H = rh;
              throw Hc(e, ue), Os(e, c), xi(e, Kn()), H;
            }
          }
          e.finishedWork = M, e.finishedLanes = c, zL(e, g, c);
        }
      }
      return xi(e, Kn()), e.callbackNode === a ? NT.bind(null, e) : null;
    }
    function IC(e, t) {
      var a = ih;
      if (Er(e)) {
        var o = Hc(e, t);
        o.flags |= Zn, nN(e.containerInfo);
      }
      var c = _y(e, t);
      if (c !== Ic) {
        var v = wi;
        wi = a, v !== null && DT(v);
      }
      return c;
    }
    function DT(e) {
      wi === null ? wi = e : wi.push.apply(wi, e);
    }
    function zL(e, t, a) {
      switch (t) {
        case bu:
        case th:
          throw new Error("Root did not complete. This is a bug in React.");
        case Ic: {
          Fc(e, wi, Eu);
          break;
        }
        case yy: {
          if (Os(e, a), Wf(a) && // do not delay if we're inside an act() scope
          !GT()) {
            var o = DC + _T - Kn();
            if (o > 10) {
              var c = cc(e, ue);
              if (c !== ue)
                break;
              var v = e.suspendedLanes;
              if (!ru(v, a)) {
                ti(), Zv(e, v);
                break;
              }
              e.timeoutHandle = zS(Fc.bind(null, e, wi, Eu), o);
              break;
            }
          }
          Fc(e, wi, Eu);
          break;
        }
        case nh: {
          if (Os(e, a), Pm(a))
            break;
          if (!GT()) {
            var g = zm(e, a), C = g, b = Kn() - C, k = tA(b) - b;
            if (k > 10) {
              e.timeoutHandle = zS(Fc.bind(null, e, wi, Eu), k);
              break;
            }
          }
          Fc(e, wi, Eu);
          break;
        }
        case RT: {
          Fc(e, wi, Eu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function PL(e) {
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
      t = es(t, Cy), t = es(t, ah), qv(e, t);
    }
    function LT(e) {
      if (rD(), (an & (ga | ao)) !== Wr)
        throw new Error("Should not already be working.");
      xu();
      var t = cc(e, ue);
      if (!Na(t, ut))
        return xi(e, Kn()), null;
      var a = _y(e, t);
      if (e.tag !== ys && a === Ic) {
        var o = Gv(e);
        o !== ue && (t = o, a = IC(e, o));
      }
      if (a === th) {
        var c = rh;
        throw Hc(e, ue), Os(e, t), xi(e, Kn()), c;
      }
      if (a === OC)
        throw new Error("Root did not complete. This is a bug in React.");
      var v = e.current.alternate;
      return e.finishedWork = v, e.finishedLanes = t, Fc(e, wi, Eu), xi(e, Kn()), null;
    }
    function UL(e, t) {
      t !== ue && (ts(e, Lt(t, ut)), xi(e, Kn()), (an & (ga | ao)) === Wr && (oh(), Ss()));
    }
    function $C(e, t) {
      var a = an;
      an |= TT;
      try {
        return e(t);
      } finally {
        an = a, an === Wr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !Wo.isBatchingLegacy && (oh(), Mw());
      }
    }
    function IL(e, t, a, o, c) {
      var v = mi(), g = ma.transition;
      try {
        return ma.transition = null, br(ea), e(t, a, o, c);
      } finally {
        br(v), ma.transition = g, an === Wr && oh();
      }
    }
    function wu(e) {
      ks !== null && ks.tag === ys && (an & (ga | ao)) === Wr && xu();
      var t = an;
      an |= TT;
      var a = ma.transition, o = mi();
      try {
        return ma.transition = null, br(ea), e ? e() : void 0;
      } finally {
        br(o), ma.transition = a, an = t, (an & (ga | ao)) === Wr && Ss();
      }
    }
    function AT() {
      return (an & (ga | ao)) !== Wr;
    }
    function Ry(e, t) {
      La(NC, Nl, e), Nl = Lt(Nl, t);
    }
    function HC(e) {
      Nl = NC.current, Da(NC, e);
    }
    function Hc(e, t) {
      e.finishedWork = null, e.finishedLanes = ue;
      var a = e.timeoutHandle;
      if (a !== PS && (e.timeoutHandle = PS, dO(a)), sr !== null)
        for (var o = sr.return; o !== null; ) {
          var c = o.alternate;
          sT(c, o), o = o.return;
        }
      ei = e;
      var v = jc(e.current, null);
      return sr = v, Kr = Nl = t, Gr = bu, rh = null, Sy = ue, ah = ue, Cy = ue, ih = null, wi = null, NN(), Uo.discardPendingWarnings(), v;
    }
    function zT(e, t) {
      do {
        var a = sr;
        try {
          if (Ag(), fx(), Wn(), MC.current = null, a === null || a.return === null) {
            Gr = th, rh = t, sr = null;
            return;
          }
          if (it && a.mode & lt && dy(a, !0), At)
            if (Yl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var o = t;
              Dm(a, o, Kr);
            } else
              Rf(a, t, Kr);
          uD(e, a.return, a, t, Kr), $T(a);
        } catch (c) {
          t = c, sr === a && a !== null ? (a = a.return, sr = a) : a = sr;
          continue;
        }
        return;
      } while (!0);
    }
    function PT() {
      var e = kC.current;
      return kC.current = ly, e === null ? ly : e;
    }
    function UT(e) {
      kC.current = e;
    }
    function $L() {
      DC = Kn();
    }
    function ch(e) {
      Sy = Lt(e, Sy);
    }
    function HL() {
      Gr === bu && (Gr = yy);
    }
    function FC() {
      (Gr === bu || Gr === yy || Gr === Ic) && (Gr = nh), ei !== null && (fc(Sy) || fc(ah)) && Os(ei, Kr);
    }
    function FL(e) {
      Gr !== nh && (Gr = Ic), ih === null ? ih = [e] : ih.push(e);
    }
    function jL() {
      return Gr === bu;
    }
    function _y(e, t) {
      var a = an;
      an |= ga;
      var o = PT();
      if (ei !== e || Kr !== t) {
        if ($r) {
          var c = e.memoizedUpdaters;
          c.size > 0 && (fh(e, Kr), c.clear()), Yf(e, t);
        }
        Eu = tp(), Hc(e, t);
      }
      zi(t);
      do
        try {
          VL();
          break;
        } catch (v) {
          zT(e, v);
        }
      while (!0);
      if (Ag(), an = a, UT(o), sr !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Qu(), ei = null, Kr = ue, Gr;
    }
    function VL() {
      for (; sr !== null; )
        IT(sr);
    }
    function BL(e, t) {
      var a = an;
      an |= ga;
      var o = PT();
      if (ei !== e || Kr !== t) {
        if ($r) {
          var c = e.memoizedUpdaters;
          c.size > 0 && (fh(e, Kr), c.clear()), Yf(e, t);
        }
        Eu = tp(), oh(), Hc(e, t);
      }
      zi(t);
      do
        try {
          WL();
          break;
        } catch (v) {
          zT(e, v);
        }
      while (!0);
      return Ag(), UT(o), an = a, sr !== null ? (oc(), bu) : (Qu(), ei = null, Kr = ue, Gr);
    }
    function WL() {
      for (; sr !== null && !Cf(); )
        IT(sr);
    }
    function IT(e) {
      var t = e.alternate;
      be(e);
      var a;
      (e.mode & lt) !== ot ? (nC(e), a = jC(t, e, Nl), dy(e, !0)) : a = jC(t, e, Nl), Wn(), e.memoizedProps = e.pendingProps, a === null ? $T(e) : sr = a, MC.current = null;
    }
    function $T(e) {
      var t = e;
      do {
        var a = t.alternate, o = t.return;
        if ((t.flags & Ga) === nt) {
          be(t);
          var c = void 0;
          if ((t.mode & lt) === ot ? c = uT(a, t, Nl) : (nC(t), c = uT(a, t, Nl), dy(t, !1)), Wn(), c !== null) {
            sr = c;
            return;
          }
        } else {
          var v = HD(a, t);
          if (v !== null) {
            v.flags &= wm, sr = v;
            return;
          }
          if ((t.mode & lt) !== ot) {
            dy(t, !1);
            for (var g = t.actualDuration, C = t.child; C !== null; )
              g += C.actualDuration, C = C.sibling;
            t.actualDuration = g;
          }
          if (o !== null)
            o.flags |= Ga, o.subtreeFlags = nt, o.deletions = null;
          else {
            Gr = OC, sr = null;
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
      Gr === bu && (Gr = RT);
    }
    function Fc(e, t, a) {
      var o = mi(), c = ma.transition;
      try {
        ma.transition = null, br(ea), KL(e, t, a, o);
      } finally {
        ma.transition = c, br(o);
      }
      return null;
    }
    function KL(e, t, a, o) {
      do
        xu();
      while (ks !== null);
      if (rA(), (an & (ga | ao)) !== Wr)
        throw new Error("Should not already be working.");
      var c = e.finishedWork, v = e.finishedLanes;
      if (wf(v), c === null)
        return jv(), null;
      if (v === ue && h("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = ue, c === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = rn;
      var g = Lt(c.lanes, c.childLanes);
      Jv(e, g), e === ei && (ei = null, sr = null, Kr = ue), ((c.subtreeFlags & di) !== nt || (c.flags & di) !== nt) && ($c || ($c = !0, zC = a, WC(Yi, function() {
        return xu(), null;
      })));
      var C = (c.subtreeFlags & (Ku | _a | Jr | di)) !== nt, b = (c.flags & (Ku | _a | Jr | di)) !== nt;
      if (C || b) {
        var k = ma.transition;
        ma.transition = null;
        var M = mi();
        br(ea);
        var j = an;
        an |= ao, MC.current = null, WD(e, c), Px(), iL(e, c, v), iO(e.containerInfo), e.current = c, Lm(v), oL(c, e, v), Yu(), Rm(), an = j, br(M), ma.transition = k;
      } else
        e.current = c, Px();
      var H = $c;
      if ($c ? ($c = !1, ks = e, lh = v) : (Ud = 0, wy = null), g = e.pendingLanes, g === ue && (Pd = null), H || VT(e.current, !1), _o(c.stateNode, o), $r && e.memoizedUpdaters.clear(), TL(), xi(e, Kn()), t !== null)
        for (var Z = e.onRecoverableError, J = 0; J < t.length; J++) {
          var ie = t[J], $e = ie.stack, at = ie.digest;
          Z(ie.value, {
            componentStack: $e,
            digest: at
          });
        }
      if (by) {
        by = !1;
        var qe = LC;
        throw LC = null, qe;
      }
      return Na(lh, ut) && e.tag !== ys && xu(), g = e.pendingLanes, Na(g, ut) ? (tD(), e === PC ? uh++ : (uh = 0, PC = e)) : uh = 0, Ss(), jv(), null;
    }
    function xu() {
      if (ks !== null) {
        var e = hc(lh), t = oS(Oo, e), a = ma.transition, o = mi();
        try {
          return ma.transition = null, br(t), YL();
        } finally {
          br(o), ma.transition = a;
        }
      }
      return !1;
    }
    function GL(e) {
      AC.push(e), $c || ($c = !0, WC(Yi, function() {
        return xu(), null;
      }));
    }
    function YL() {
      if (ks === null)
        return !1;
      var e = zC;
      zC = null;
      var t = ks, a = lh;
      if (ks = null, lh = ue, (an & (ga | ao)) !== Wr)
        throw new Error("Cannot flush passive effects while already rendering.");
      UC = !0, Ey = !1, Am(a);
      var o = an;
      an |= ao, vL(t.current), sL(t, t.current, a, e);
      {
        var c = AC;
        AC = [];
        for (var v = 0; v < c.length; v++) {
          var g = c[v];
          QD(t, g);
        }
      }
      ic(), VT(t.current, !0), an = o, Ss(), Ey ? t === wy ? Ud++ : (Ud = 0, wy = t) : Ud = 0, UC = !1, Ey = !1, fl(t);
      {
        var C = t.current.stateNode;
        C.effectDuration = 0, C.passiveEffectDuration = 0;
      }
      return !0;
    }
    function HT(e) {
      return Pd !== null && Pd.has(e);
    }
    function QL(e) {
      Pd === null ? Pd = /* @__PURE__ */ new Set([e]) : Pd.add(e);
    }
    function XL(e) {
      by || (by = !0, LC = e);
    }
    var qL = XL;
    function FT(e, t, a) {
      var o = Pc(a, t), c = Ix(e, o, ut), v = bs(e, c, ut), g = ti();
      v !== null && (au(v, ut, g), xi(v, g));
    }
    function Hn(e, t, a) {
      if (jD(a), dh(!1), e.tag === _) {
        FT(e, e, a);
        return;
      }
      var o = null;
      for (o = t; o !== null; ) {
        if (o.tag === _) {
          FT(o, e, a);
          return;
        } else if (o.tag === T) {
          var c = o.type, v = o.stateNode;
          if (typeof c.getDerivedStateFromError == "function" || typeof v.componentDidCatch == "function" && !HT(v)) {
            var g = Pc(a, e), C = uC(o, g, ut), b = bs(o, C, ut), k = ti();
            b !== null && (au(b, ut, k), xi(b, k));
            return;
          }
        }
        o = o.return;
      }
      h(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function ZL(e, t, a) {
      var o = e.pingCache;
      o !== null && o.delete(t);
      var c = ti();
      Zv(e, a), lA(e), ei === e && ru(Kr, a) && (Gr === nh || Gr === yy && Wf(Kr) && Kn() - DC < _T ? Hc(e, ue) : Cy = Lt(Cy, a)), xi(e, c);
    }
    function jT(e, t) {
      t === rn && (t = DL(e));
      var a = ti(), o = bi(e, t);
      o !== null && (au(o, t, a), xi(o, a));
    }
    function JL(e) {
      var t = e.memoizedState, a = rn;
      t !== null && (a = t.retryLane), jT(e, a);
    }
    function eA(e, t) {
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
      o !== null && o.delete(t), jT(e, a);
    }
    function tA(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : kL(e / 1960) * 1960;
    }
    function nA() {
      if (uh > OL)
        throw uh = 0, PC = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Ud > NL && (Ud = 0, wy = null, h("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function rA() {
      Uo.flushLegacyContextWarning(), Uo.flushPendingUnsafeLifecycleWarnings();
    }
    function VT(e, t) {
      be(e), ky(e, Ra, EL), t && ky(e, Gl, wL), ky(e, Ra, CL), t && ky(e, Gl, bL), Wn();
    }
    function ky(e, t, a) {
      for (var o = e, c = null; o !== null; ) {
        var v = o.subtreeFlags & t;
        o !== c && o.child !== null && v !== nt ? o = o.child : ((o.flags & t) !== nt && a(o), o.sibling !== null ? o = o.sibling : o = c = o.return);
      }
    }
    var My = null;
    function BT(e) {
      {
        if ((an & ga) !== Wr || !(e.mode & Bt))
          return;
        var t = e.tag;
        if (t !== N && t !== _ && t !== T && t !== x && t !== I && t !== re && t !== G)
          return;
        var a = ct(e) || "ReactComponent";
        if (My !== null) {
          if (My.has(a))
            return;
          My.add(a);
        } else
          My = /* @__PURE__ */ new Set([a]);
        var o = zn;
        try {
          be(e), h("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          o ? be(e) : Wn();
        }
      }
    }
    var jC;
    {
      var aA = null;
      jC = function(e, t, a) {
        var o = ZT(aA, t);
        try {
          return rT(e, t, a);
        } catch (v) {
          if (gN() || v !== null && typeof v == "object" && typeof v.then == "function")
            throw v;
          if (Ag(), fx(), sT(e, t), ZT(t, o), t.mode & lt && nC(t), Kl(null, rT, null, e, t, a), J0()) {
            var c = Nv();
            typeof c == "object" && c !== null && c._suppressLogging && typeof v == "object" && v !== null && !v._suppressLogging && (v._suppressLogging = !0);
          }
          throw v;
        }
      };
    }
    var WT = !1, VC;
    VC = /* @__PURE__ */ new Set();
    function iA(e) {
      if (qr && !ZN())
        switch (e.tag) {
          case x:
          case I:
          case G: {
            var t = sr && ct(sr) || "Unknown", a = t;
            if (!VC.has(a)) {
              VC.add(a);
              var o = ct(e) || "Unknown";
              h("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", o, t, t);
            }
            break;
          }
          case T: {
            WT || (h("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), WT = !0);
            break;
          }
        }
    }
    function fh(e, t) {
      if ($r) {
        var a = e.memoizedUpdaters;
        a.forEach(function(o) {
          ep(e, o, t);
        });
      }
    }
    var BC = {};
    function WC(e, t) {
      {
        var a = Wo.current;
        return a !== null ? (a.push(t), BC) : Sf(e, t);
      }
    }
    function KT(e) {
      if (e !== BC)
        return Tm(e);
    }
    function GT() {
      return Wo.current !== null;
    }
    function oA(e) {
      {
        if (e.mode & Bt) {
          if (!xT())
            return;
        } else if (!_L() || an !== Wr || e.tag !== x && e.tag !== I && e.tag !== G)
          return;
        if (Wo.current === null) {
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
    function lA(e) {
      e.tag !== ys && xT() && Wo.current === null && h(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function dh(e) {
      OT = e;
    }
    var io = null, Id = null, uA = function(e) {
      io = e;
    };
    function $d(e) {
      {
        if (io === null)
          return e;
        var t = io(e);
        return t === void 0 ? e : t.current;
      }
    }
    function KC(e) {
      return $d(e);
    }
    function GC(e) {
      {
        if (io === null)
          return e;
        var t = io(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = $d(e.render);
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
    function YT(e, t) {
      {
        if (io === null)
          return !1;
        var a = e.elementType, o = t.type, c = !1, v = typeof o == "object" && o !== null ? o.$$typeof : null;
        switch (e.tag) {
          case T: {
            typeof o == "function" && (c = !0);
            break;
          }
          case x: {
            (typeof o == "function" || v === An) && (c = !0);
            break;
          }
          case I: {
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
    function QT(e) {
      {
        if (io === null || typeof WeakSet != "function")
          return;
        Id === null && (Id = /* @__PURE__ */ new WeakSet()), Id.add(e);
      }
    }
    var sA = function(e, t) {
      {
        if (io === null)
          return;
        var a = t.staleFamilies, o = t.updatedFamilies;
        xu(), wu(function() {
          YC(e.current, o, a);
        });
      }
    }, cA = function(e, t) {
      {
        if (e.context !== Ui)
          return;
        xu(), wu(function() {
          vh(t, e, null, null);
        });
      }
    };
    function YC(e, t, a) {
      {
        var o = e.alternate, c = e.child, v = e.sibling, g = e.tag, C = e.type, b = null;
        switch (g) {
          case x:
          case G:
          case T:
            b = C;
            break;
          case I:
            b = C.render;
            break;
        }
        if (io === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var k = !1, M = !1;
        if (b !== null) {
          var j = io(b);
          j !== void 0 && (a.has(j) ? M = !0 : t.has(j) && (g === T ? M = !0 : k = !0));
        }
        if (Id !== null && (Id.has(e) || o !== null && Id.has(o)) && (M = !0), M && (e._debugNeedsRemount = !0), M || k) {
          var H = bi(e, ut);
          H !== null && Yr(H, e, ut, Dn);
        }
        c !== null && !M && YC(c, t, a), v !== null && YC(v, t, a);
      }
    }
    var fA = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), o = new Set(t.map(function(c) {
          return c.current;
        }));
        return QC(e.current, o, a), a;
      }
    };
    function QC(e, t, a) {
      {
        var o = e.child, c = e.sibling, v = e.tag, g = e.type, C = null;
        switch (v) {
          case x:
          case G:
          case T:
            C = g;
            break;
          case I:
            C = g.render;
            break;
        }
        var b = !1;
        C !== null && t.has(C) && (b = !0), b ? dA(e, a) : o !== null && QC(o, t, a), c !== null && QC(c, t, a);
      }
    }
    function dA(e, t) {
      {
        var a = vA(e, t);
        if (a)
          return;
        for (var o = e; ; ) {
          switch (o.tag) {
            case D:
              t.add(o.stateNode);
              return;
            case O:
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
    function vA(e, t) {
      for (var a = e, o = !1; ; ) {
        if (a.tag === D)
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
    var XC;
    {
      XC = !1;
      try {
        var XT = Object.preventExtensions({});
      } catch (e) {
        XC = !0;
      }
    }
    function pA(e, t, a, o) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = o, this.flags = nt, this.subtreeFlags = nt, this.deletions = null, this.lanes = ue, this.childLanes = ue, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !XC && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Ii = function(e, t, a, o) {
      return new pA(e, t, a, o);
    };
    function qC(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function hA(e) {
      return typeof e == "function" && !qC(e) && e.defaultProps === void 0;
    }
    function mA(e) {
      if (typeof e == "function")
        return qC(e) ? T : x;
      if (e != null) {
        var t = e.$$typeof;
        if (t === Rr)
          return I;
        if (t === oa)
          return re;
      }
      return N;
    }
    function jc(e, t) {
      var a = e.alternate;
      a === null ? (a = Ii(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = nt, a.subtreeFlags = nt, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Ir, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var o = e.dependencies;
      switch (a.dependencies = o === null ? null : {
        lanes: o.lanes,
        firstContext: o.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case N:
        case x:
        case G:
          a.type = $d(e.type);
          break;
        case T:
          a.type = KC(e.type);
          break;
        case I:
          a.type = GC(e.type);
          break;
      }
      return a;
    }
    function gA(e, t) {
      e.flags &= Ir | Pn;
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
    function yA(e, t, a) {
      var o;
      return e === Rg ? (o = Bt, t === !0 && (o |= Gn, o |= pi)) : o = ot, $r && (o |= lt), Ii(_, null, null, o);
    }
    function ZC(e, t, a, o, c, v) {
      var g = N, C = e;
      if (typeof e == "function")
        qC(e) ? (g = T, C = KC(C)) : C = $d(C);
      else if (typeof e == "string")
        g = D;
      else
        e:
          switch (e) {
            case ar:
              return Ns(a.children, c, v, t);
            case yr:
              g = A, c |= Gn, (c & Bt) !== ot && (c |= pi);
              break;
            case Ca:
              return SA(a, c, v, t);
            case dr:
              return CA(a, c, v, t);
            case $a:
              return bA(a, c, v, t);
            case Bn:
              return qT(a, c, v, t);
            case vo:
            case Ha:
            case Pl:
            case po:
            case Jo:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Ln:
                    g = V;
                    break e;
                  case fr:
                    g = Y;
                    break e;
                  case Rr:
                    g = I, C = GC(C);
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
      var M = Ii(g, a, t, c);
      return M.elementType = e, M.type = C, M.lanes = v, M._debugOwner = o, M;
    }
    function JC(e, t, a) {
      var o = null;
      o = e._owner;
      var c = e.type, v = e.key, g = e.props, C = ZC(c, v, g, o, t, a);
      return C._debugSource = e._source, C._debugOwner = e._owner, C;
    }
    function Ns(e, t, a, o) {
      var c = Ii(P, e, o, t);
      return c.lanes = a, c;
    }
    function SA(e, t, a, o) {
      typeof e.id != "string" && h('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var c = Ii($, e, o, t | lt);
      return c.elementType = Ca, c.lanes = a, c.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, c;
    }
    function CA(e, t, a, o) {
      var c = Ii(W, e, o, t);
      return c.elementType = dr, c.lanes = a, c;
    }
    function bA(e, t, a, o) {
      var c = Ii(ge, e, o, t);
      return c.elementType = $a, c.lanes = a, c;
    }
    function qT(e, t, a, o) {
      var c = Ii(ne, e, o, t);
      c.elementType = Bn, c.lanes = a;
      var v = {
        isHidden: !1
      };
      return c.stateNode = v, c;
    }
    function eb(e, t, a) {
      var o = Ii(z, e, null, t);
      return o.lanes = a, o;
    }
    function EA() {
      var e = Ii(D, null, null, ot);
      return e.elementType = "DELETED", e;
    }
    function wA(e) {
      var t = Ii(le, null, null, ot);
      return t.stateNode = e, t;
    }
    function tb(e, t, a) {
      var o = e.children !== null ? e.children : [], c = Ii(O, o, e.key, t);
      return c.lanes = a, c.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, c;
    }
    function ZT(e, t) {
      return e === null && (e = Ii(N, null, null, ot)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function xA(e, t, a, o, c) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = PS, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = rn, this.eventTimes = Gf(ue), this.expirationTimes = Gf(Dn), this.pendingLanes = ue, this.suspendedLanes = ue, this.pingedLanes = ue, this.expiredLanes = ue, this.mutableReadLanes = ue, this.finishedLanes = ue, this.entangledLanes = ue, this.entanglements = Gf(ue), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var v = this.pendingUpdatersLaneMap = [], g = 0; g < In; g++)
          v.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Rg:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case ys:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function JT(e, t, a, o, c, v, g, C, b, k) {
      var M = new xA(e, t, a, C, b), j = yA(t, v);
      M.current = j, j.stateNode = M;
      {
        var H = {
          element: o,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        j.memoizedState = H;
      }
      return s1(j), M;
    }
    var nb = "18.2.0";
    function TA(e, t, a) {
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
    var rb, ab;
    rb = !1, ab = {};
    function eR(e) {
      if (!e)
        return Ui;
      var t = si(e), a = uN(t);
      if (t.tag === T) {
        var o = t.type;
        if (xl(o))
          return Rw(t, o, a);
      }
      return a;
    }
    function RA(e, t) {
      {
        var a = si(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var o = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + o);
        }
        var c = vi(a);
        if (c === null)
          return null;
        if (c.mode & Gn) {
          var v = ct(a) || "Component";
          if (!ab[v]) {
            ab[v] = !0;
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
    function tR(e, t, a, o, c, v, g, C) {
      var b = !1, k = null;
      return JT(e, t, b, k, a, o, c, v, g);
    }
    function nR(e, t, a, o, c, v, g, C, b, k) {
      var M = !0, j = JT(a, o, M, e, c, v, g, C, b);
      j.context = eR(null);
      var H = j.current, Z = ti(), J = Ms(H), ie = Su(Z, J);
      return ie.callback = t != null ? t : null, bs(H, ie, J), LL(j, J, Z), j;
    }
    function vh(e, t, a, o) {
      _m(t, e);
      var c = t.current, v = ti(), g = Ms(c);
      Ql(g);
      var C = eR(a);
      t.context === null ? t.context = C : t.pendingContext = C, qr && zn !== null && !rb && (rb = !0, h(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, ct(zn) || "Unknown"));
      var b = Su(v, g);
      b.payload = {
        element: e
      }, o = o === void 0 ? null : o, o !== null && (typeof o != "function" && h("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", o), b.callback = o);
      var k = bs(c, b, g);
      return k !== null && (Yr(k, c, g, v), $g(k, c, g)), g;
    }
    function Oy(e) {
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
    function _A(e) {
      switch (e.tag) {
        case _: {
          var t = e.stateNode;
          if (Er(t)) {
            var a = nS(t);
            UL(t, a);
          }
          break;
        }
        case W: {
          wu(function() {
            var c = bi(e, ut);
            if (c !== null) {
              var v = ti();
              Yr(c, e, ut, v);
            }
          });
          var o = ut;
          ib(e, o);
          break;
        }
      }
    }
    function rR(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = $m(a.retryLane, t));
    }
    function ib(e, t) {
      rR(e, t);
      var a = e.alternate;
      a && rR(a, t);
    }
    function kA(e) {
      if (e.tag === W) {
        var t = Xu, a = bi(e, t);
        if (a !== null) {
          var o = ti();
          Yr(a, e, t, o);
        }
        ib(e, t);
      }
    }
    function MA(e) {
      if (e.tag === W) {
        var t = Ms(e), a = bi(e, t);
        if (a !== null) {
          var o = ti();
          Yr(a, e, t, o);
        }
        ib(e, t);
      }
    }
    function aR(e) {
      var t = xm(e);
      return t === null ? null : t.stateNode;
    }
    var iR = function(e) {
      return null;
    };
    function OA(e) {
      return iR(e);
    }
    var oR = function(e) {
      return !1;
    };
    function NA(e) {
      return oR(e);
    }
    var lR = null, uR = null, sR = null, cR = null, fR = null, dR = null, vR = null, pR = null, hR = null;
    {
      var mR = function(e, t, a) {
        var o = t[a], c = kr(e) ? e.slice() : Nt({}, e);
        return a + 1 === t.length ? (kr(c) ? c.splice(o, 1) : delete c[o], c) : (c[o] = mR(e[o], t, a + 1), c);
      }, gR = function(e, t) {
        return mR(e, t, 0);
      }, yR = function(e, t, a, o) {
        var c = t[o], v = kr(e) ? e.slice() : Nt({}, e);
        if (o + 1 === t.length) {
          var g = a[o];
          v[g] = v[c], kr(v) ? v.splice(c, 1) : delete v[c];
        } else
          v[c] = yR(
            // $FlowFixMe number or string is fine here
            e[c],
            t,
            a,
            o + 1
          );
        return v;
      }, SR = function(e, t, a) {
        if (t.length !== a.length) {
          y("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var o = 0; o < a.length - 1; o++)
            if (t[o] !== a[o]) {
              y("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return yR(e, t, a, 0);
      }, CR = function(e, t, a, o) {
        if (a >= t.length)
          return o;
        var c = t[a], v = kr(e) ? e.slice() : Nt({}, e);
        return v[c] = CR(e[c], t, a + 1, o), v;
      }, bR = function(e, t, a) {
        return CR(e, t, 0, a);
      }, ob = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      lR = function(e, t, a, o) {
        var c = ob(e, t);
        if (c !== null) {
          var v = bR(c.memoizedState, a, o);
          c.memoizedState = v, c.baseState = v, e.memoizedProps = Nt({}, e.memoizedProps);
          var g = bi(e, ut);
          g !== null && Yr(g, e, ut, Dn);
        }
      }, uR = function(e, t, a) {
        var o = ob(e, t);
        if (o !== null) {
          var c = gR(o.memoizedState, a);
          o.memoizedState = c, o.baseState = c, e.memoizedProps = Nt({}, e.memoizedProps);
          var v = bi(e, ut);
          v !== null && Yr(v, e, ut, Dn);
        }
      }, sR = function(e, t, a, o) {
        var c = ob(e, t);
        if (c !== null) {
          var v = SR(c.memoizedState, a, o);
          c.memoizedState = v, c.baseState = v, e.memoizedProps = Nt({}, e.memoizedProps);
          var g = bi(e, ut);
          g !== null && Yr(g, e, ut, Dn);
        }
      }, cR = function(e, t, a) {
        e.pendingProps = bR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = bi(e, ut);
        o !== null && Yr(o, e, ut, Dn);
      }, fR = function(e, t) {
        e.pendingProps = gR(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = bi(e, ut);
        a !== null && Yr(a, e, ut, Dn);
      }, dR = function(e, t, a) {
        e.pendingProps = SR(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var o = bi(e, ut);
        o !== null && Yr(o, e, ut, Dn);
      }, vR = function(e) {
        var t = bi(e, ut);
        t !== null && Yr(t, e, ut, Dn);
      }, pR = function(e) {
        iR = e;
      }, hR = function(e) {
        oR = e;
      };
    }
    function DA(e) {
      var t = vi(e);
      return t === null ? null : t.stateNode;
    }
    function LA(e) {
      return null;
    }
    function AA() {
      return zn;
    }
    function zA(e) {
      var t = e.findFiberByHostInstance, a = u.ReactCurrentDispatcher;
      return Hv({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: lR,
        overrideHookStateDeletePath: uR,
        overrideHookStateRenamePath: sR,
        overrideProps: cR,
        overridePropsDeletePath: fR,
        overridePropsRenamePath: dR,
        setErrorHandler: pR,
        setSuspenseHandler: hR,
        scheduleUpdate: vR,
        currentDispatcherRef: a,
        findHostInstanceByFiber: DA,
        findFiberByHostInstance: t || LA,
        // React Refresh
        findHostInstancesForRefresh: fA,
        scheduleRefresh: sA,
        scheduleRoot: cA,
        setRefreshHandler: uA,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: AA,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: nb
      });
    }
    var ER = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function lb(e) {
      this._internalRoot = e;
    }
    Ny.prototype.render = lb.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? h("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Dy(arguments[1]) ? h("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] != "undefined" && h("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== pr) {
          var o = aR(t.current);
          o && o.parentNode !== a && h("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      vh(e, t, null, null);
    }, Ny.prototype.unmount = lb.prototype.unmount = function() {
      typeof arguments[0] == "function" && h("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        AT() && h("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), wu(function() {
          vh(null, e, null, null);
        }), bw(t);
      }
    };
    function PA(e, t) {
      if (!Dy(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      wR(e);
      var a = !1, o = !1, c = "", v = ER;
      t != null && (t.hydrate ? y("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Qr && h(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (c = t.identifierPrefix), t.onRecoverableError !== void 0 && (v = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var g = tR(e, Rg, null, a, o, c, v);
      Sg(g.current, e);
      var C = e.nodeType === pr ? e.parentNode : e;
      return bp(C), new lb(g);
    }
    function Ny(e) {
      this._internalRoot = e;
    }
    function UA(e) {
      e && Gm(e);
    }
    Ny.prototype.unstable_scheduleHydration = UA;
    function IA(e, t, a) {
      if (!Dy(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      wR(e), t === void 0 && h("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var o = a != null ? a : null, c = a != null && a.hydratedSources || null, v = !1, g = !1, C = "", b = ER;
      a != null && (a.unstable_strictMode === !0 && (v = !0), a.identifierPrefix !== void 0 && (C = a.identifierPrefix), a.onRecoverableError !== void 0 && (b = a.onRecoverableError));
      var k = nR(t, null, e, Rg, o, v, g, C, b);
      if (Sg(k.current, e), bp(e), c)
        for (var M = 0; M < c.length; M++) {
          var j = c[M];
          KN(k, j);
        }
      return new Ny(k);
    }
    function Dy(e) {
      return !!(e && (e.nodeType === wa || e.nodeType === Di || e.nodeType === Hl || !De));
    }
    function ph(e) {
      return !!(e && (e.nodeType === wa || e.nodeType === Di || e.nodeType === Hl || e.nodeType === pr && e.nodeValue === " react-mount-point-unstable "));
    }
    function wR(e) {
      e.nodeType === wa && e.tagName && e.tagName.toUpperCase() === "BODY" && h("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), Dp(e) && (e._reactRootContainer ? h("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : h("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var $A = u.ReactCurrentOwner, xR;
    xR = function(e) {
      if (e._reactRootContainer && e.nodeType !== pr) {
        var t = aR(e._reactRootContainer.current);
        t && t.parentNode !== e && h("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, o = ub(e), c = !!(o && ms(o));
      c && !a && h("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === wa && e.tagName && e.tagName.toUpperCase() === "BODY" && h("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function ub(e) {
      return e ? e.nodeType === Di ? e.documentElement : e.firstChild : null;
    }
    function TR() {
    }
    function HA(e, t, a, o, c) {
      if (c) {
        if (typeof o == "function") {
          var v = o;
          o = function() {
            var H = Oy(g);
            v.call(H);
          };
        }
        var g = nR(
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
          TR
        );
        e._reactRootContainer = g, Sg(g.current, e);
        var C = e.nodeType === pr ? e.parentNode : e;
        return bp(C), wu(), g;
      } else {
        for (var b; b = e.lastChild; )
          e.removeChild(b);
        if (typeof o == "function") {
          var k = o;
          o = function() {
            var H = Oy(M);
            k.call(H);
          };
        }
        var M = tR(
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
          TR
        );
        e._reactRootContainer = M, Sg(M.current, e);
        var j = e.nodeType === pr ? e.parentNode : e;
        return bp(j), wu(function() {
          vh(t, M, a, o);
        }), M;
      }
    }
    function FA(e, t) {
      e !== null && typeof e != "function" && h("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Ly(e, t, a, o, c) {
      xR(a), FA(c === void 0 ? null : c, "render");
      var v = a._reactRootContainer, g;
      if (!v)
        g = HA(a, t, e, c, o);
      else {
        if (g = v, typeof c == "function") {
          var C = c;
          c = function() {
            var b = Oy(g);
            C.call(b);
          };
        }
        vh(t, g, e, c);
      }
      return Oy(g);
    }
    function jA(e) {
      {
        var t = $A.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || h("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", nn(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === wa ? e : RA(e, "findDOMNode");
    }
    function VA(e, t, a) {
      if (h("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ph(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Dp(t) && t._reactRootContainer === void 0;
        o && h("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Ly(null, e, t, !0, a);
    }
    function BA(e, t, a) {
      if (h("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ph(t))
        throw new Error("Target container is not a DOM element.");
      {
        var o = Dp(t) && t._reactRootContainer === void 0;
        o && h("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Ly(null, e, t, !1, a);
    }
    function WA(e, t, a, o) {
      if (h("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !ph(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !nc(e))
        throw new Error("parentComponent must be a valid React Component");
      return Ly(e, t, a, !1, o);
    }
    function KA(e) {
      if (!ph(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = Dp(e) && e._reactRootContainer === void 0;
        t && h("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = ub(e), o = a && !ms(a);
          o && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return wu(function() {
          Ly(null, null, e, !1, function() {
            e._reactRootContainer = null, bw(e);
          });
        }), !0;
      } else {
        {
          var c = ub(e), v = !!(c && ms(c)), g = e.nodeType === wa && ph(e.parentNode) && !!e.parentNode._reactRootContainer;
          v && h("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", g ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Fe(_A), Fm(kA), gc(MA), rp(mi), Vm(pc), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && h("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), bm(Q2), pf($C, IL, wu);
    function GA(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Dy(t))
        throw new Error("Target container is not a DOM element.");
      return TA(e, t, null, a);
    }
    function YA(e, t, a, o) {
      return WA(e, t, a, o);
    }
    var sb = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [ms, md, Cg, vf, Js, $C]
    };
    function QA(e, t) {
      return sb.usingClientEntryPoint || h('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), PA(e, t);
    }
    function XA(e, t, a) {
      return sb.usingClientEntryPoint || h('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), IA(e, t, a);
    }
    function qA(e) {
      return AT() && h("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), wu(e);
    }
    var ZA = zA({
      findFiberByHostInstance: _c,
      bundleType: 1,
      version: nb,
      rendererPackageName: "react-dom"
    });
    if (!ZA && Ot && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var RR = window.location.protocol;
      /^(https?|file):$/.test(RR) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (RR === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ri.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sb, Ri.createPortal = GA, Ri.createRoot = QA, Ri.findDOMNode = jA, Ri.flushSync = qA, Ri.hydrate = VA, Ri.hydrateRoot = XA, Ri.render = BA, Ri.unmountComponentAtNode = KA, Ri.unstable_batchedUpdates = $C, Ri.unstable_renderSubtreeIntoContainer = YA, Ri.version = nb, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ != "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ri;
}
function vk() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ == "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vk);
    } catch (i) {
      console.error(i);
    }
  }
}
process.env.NODE_ENV === "production" ? (vk(), Nb.exports = LP()) : Nb.exports = AP();
var v0 = Nb.exports;
const zP = /* @__PURE__ */ ak(v0);
function t0(i) {
  return i instanceof HTMLElement || i instanceof SVGElement;
}
function Gy(i) {
  return t0(i) ? i : i instanceof ki.Component ? zP.findDOMNode(i) : null;
}
function p0(i, l, u) {
  var f = R.useRef({});
  return (!("value" in f.current) || u(f.current.condition, l)) && (f.current.value = i(), f.current.condition = l), f.current.value;
}
function xE(i, l) {
  typeof i == "function" ? i(l) : cr(i) === "object" && i && "current" in i && (i.current = l);
}
function pk() {
  for (var i = arguments.length, l = new Array(i), u = 0; u < i; u++)
    l[u] = arguments[u];
  var f = l.filter(function(p) {
    return p;
  });
  return f.length <= 1 ? f[0] : function(p) {
    l.forEach(function(y) {
      xE(y, p);
    });
  };
}
function h0() {
  for (var i = arguments.length, l = new Array(i), u = 0; u < i; u++)
    l[u] = arguments[u];
  return p0(function() {
    return pk.apply(void 0, l);
  }, l, function(f, p) {
    return f.length !== p.length || f.every(function(y, h) {
      return y !== p[h];
    });
  });
}
function m0(i) {
  var l, u, f = Ky.isMemo(i) ? i.type.type : i.type;
  return !(typeof f == "function" && !((l = f.prototype) !== null && l !== void 0 && l.render) && f.$$typeof !== Ky.ForwardRef || typeof i == "function" && !((u = i.prototype) !== null && u !== void 0 && u.render) && i.$$typeof !== Ky.ForwardRef);
}
var Db = /* @__PURE__ */ R.createContext(null);
function PP(i) {
  var l = i.children, u = i.onBatchResize, f = R.useRef(0), p = R.useRef([]), y = R.useContext(Db), h = R.useCallback(function(E, x, T) {
    f.current += 1;
    var N = f.current;
    p.current.push({
      size: E,
      element: x,
      data: T
    }), Promise.resolve().then(function() {
      N === f.current && (u == null || u(p.current), p.current = []);
    }), y == null || y(E, x, T);
  }, [u, y]);
  return /* @__PURE__ */ R.createElement(Db.Provider, {
    value: h
  }, l);
}
var hk = function() {
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
}(), Lb = typeof window != "undefined" && typeof document != "undefined" && window.document === document, n0 = function() {
  return typeof global != "undefined" && global.Math === Math ? global : typeof self != "undefined" && self.Math === Math ? self : typeof window != "undefined" && window.Math === Math ? window : Function("return this")();
}(), UP = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(n0) : function(i) {
    return setTimeout(function() {
      return i(Date.now());
    }, 1e3 / 60);
  };
}(), IP = 2;
function $P(i, l) {
  var u = !1, f = !1, p = 0;
  function y() {
    u && (u = !1, i()), f && E();
  }
  function h() {
    UP(y);
  }
  function E() {
    var x = Date.now();
    if (u) {
      if (x - p < IP)
        return;
      f = !0;
    } else
      u = !0, f = !1, setTimeout(h, l);
    p = x;
  }
  return E;
}
var HP = 20, FP = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], jP = typeof MutationObserver != "undefined", VP = (
  /** @class */
  function() {
    function i() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = $P(this.refresh.bind(this), HP);
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
      !Lb || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), jP ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, i.prototype.disconnect_ = function() {
      !Lb || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, i.prototype.onTransitionEnd_ = function(l) {
      var u = l.propertyName, f = u === void 0 ? "" : u, p = FP.some(function(y) {
        return !!~f.indexOf(y);
      });
      p && this.refresh();
    }, i.getInstance = function() {
      return this.instance_ || (this.instance_ = new i()), this.instance_;
    }, i.instance_ = null, i;
  }()
), mk = function(i, l) {
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
  return l || n0;
}, gk = g0(0, 0, 0, 0);
function r0(i) {
  return parseFloat(i) || 0;
}
function UR(i) {
  for (var l = [], u = 1; u < arguments.length; u++)
    l[u - 1] = arguments[u];
  return l.reduce(function(f, p) {
    var y = i["border-" + p + "-width"];
    return f + r0(y);
  }, 0);
}
function BP(i) {
  for (var l = ["top", "right", "bottom", "left"], u = {}, f = 0, p = l; f < p.length; f++) {
    var y = p[f], h = i["padding-" + y];
    u[y] = r0(h);
  }
  return u;
}
function WP(i) {
  var l = i.getBBox();
  return g0(0, 0, l.width, l.height);
}
function KP(i) {
  var l = i.clientWidth, u = i.clientHeight;
  if (!l && !u)
    return gk;
  var f = Jd(i).getComputedStyle(i), p = BP(f), y = p.left + p.right, h = p.top + p.bottom, E = r0(f.width), x = r0(f.height);
  if (f.boxSizing === "border-box" && (Math.round(E + y) !== l && (E -= UR(f, "left", "right") + y), Math.round(x + h) !== u && (x -= UR(f, "top", "bottom") + h)), !YP(i)) {
    var T = Math.round(E + y) - l, N = Math.round(x + h) - u;
    Math.abs(T) !== 1 && (E -= T), Math.abs(N) !== 1 && (x -= N);
  }
  return g0(p.left, p.top, E, x);
}
var GP = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement != "undefined" ? function(i) {
    return i instanceof Jd(i).SVGGraphicsElement;
  } : function(i) {
    return i instanceof Jd(i).SVGElement && typeof i.getBBox == "function";
  };
}();
function YP(i) {
  return i === Jd(i).document.documentElement;
}
function QP(i) {
  return Lb ? GP(i) ? WP(i) : KP(i) : gk;
}
function XP(i) {
  var l = i.x, u = i.y, f = i.width, p = i.height, y = typeof DOMRectReadOnly != "undefined" ? DOMRectReadOnly : Object, h = Object.create(y.prototype);
  return mk(h, {
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
function g0(i, l, u, f) {
  return { x: i, y: l, width: u, height: f };
}
var qP = (
  /** @class */
  function() {
    function i(l) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = g0(0, 0, 0, 0), this.target = l;
    }
    return i.prototype.isActive = function() {
      var l = QP(this.target);
      return this.contentRect_ = l, l.width !== this.broadcastWidth || l.height !== this.broadcastHeight;
    }, i.prototype.broadcastRect = function() {
      var l = this.contentRect_;
      return this.broadcastWidth = l.width, this.broadcastHeight = l.height, l;
    }, i;
  }()
), ZP = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(l, u) {
      var f = XP(u);
      mk(this, { target: l, contentRect: f });
    }
    return i;
  }()
), JP = (
  /** @class */
  function() {
    function i(l, u, f) {
      if (this.activeObservations_ = [], this.observations_ = new hk(), typeof l != "function")
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
        u.has(l) || (u.set(l, new qP(l)), this.controller_.addObserver(this), this.controller_.refresh());
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
          return new ZP(f.target, f.broadcastRect());
        });
        this.callback_.call(l, u, l), this.clearActive();
      }
    }, i.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, i.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, i;
  }()
), yk = typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : new hk(), Sk = (
  /** @class */
  /* @__PURE__ */ function() {
    function i(l) {
      if (!(this instanceof i))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var u = VP.getInstance(), f = new JP(l, u, this);
      yk.set(this, f);
    }
    return i;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(i) {
  Sk.prototype[i] = function() {
    var l;
    return (l = yk.get(this))[i].apply(l, arguments);
  };
});
var e4 = function() {
  return typeof n0.ResizeObserver != "undefined" ? n0.ResizeObserver : Sk;
}(), Nu = /* @__PURE__ */ new Map();
function Ck(i) {
  i.forEach(function(l) {
    var u, f = l.target;
    (u = Nu.get(f)) === null || u === void 0 || u.forEach(function(p) {
      return p(f);
    });
  });
}
var bk = new e4(Ck);
process.env.NODE_ENV;
process.env.NODE_ENV;
function t4(i, l) {
  Nu.has(i) || (Nu.set(i, /* @__PURE__ */ new Set()), bk.observe(i)), Nu.get(i).add(l);
}
function n4(i, l) {
  Nu.has(i) && (Nu.get(i).delete(l), Nu.get(i).size || (bk.unobserve(i), Nu.delete(i)));
}
function qo(i, l) {
  if (!(i instanceof l))
    throw new TypeError("Cannot call a class as a function");
}
function IR(i, l) {
  for (var u = 0; u < l.length; u++) {
    var f = l[u];
    f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(i, ok(f.key), f);
  }
}
function Zo(i, l, u) {
  return l && IR(i.prototype, l), u && IR(i, u), Object.defineProperty(i, "prototype", {
    writable: !1
  }), i;
}
function Ab(i, l) {
  return Ab = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(f, p) {
    return f.__proto__ = p, f;
  }, Ab(i, l);
}
function rv(i, l) {
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
  }), l && Ab(i, l);
}
function Ps(i) {
  return Ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(u) {
    return u.__proto__ || Object.getPrototypeOf(u);
  }, Ps(i);
}
function y0() {
  try {
    var i = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (l) {
  }
  return (y0 = function() {
    return !!i;
  })();
}
function zb(i) {
  if (i === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return i;
}
function TE(i, l) {
  if (l && (cr(l) === "object" || typeof l == "function"))
    return l;
  if (l !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return zb(i);
}
function S0(i) {
  var l = y0();
  return function() {
    var f = Ps(i), p;
    if (l) {
      var y = Ps(this).constructor;
      p = Reflect.construct(f, arguments, y);
    } else
      p = f.apply(this, arguments);
    return TE(this, p);
  };
}
var r4 = /* @__PURE__ */ function(i) {
  rv(u, i);
  var l = S0(u);
  function u() {
    return qo(this, u), l.apply(this, arguments);
  }
  return Zo(u, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), u;
}(R.Component);
function a4(i, l) {
  var u = i.children, f = i.disabled, p = R.useRef(null), y = R.useRef(null), h = R.useContext(Db), E = typeof u == "function", x = E ? u(p) : u, T = R.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), N = !E && /* @__PURE__ */ R.isValidElement(x) && m0(x), _ = N ? x.ref : null, O = h0(_, p), D = function() {
    var Y;
    return Gy(p.current) || // Support `nativeElement` format
    (p.current && cr(p.current) === "object" ? Gy((Y = p.current) === null || Y === void 0 ? void 0 : Y.nativeElement) : null) || Gy(y.current);
  };
  R.useImperativeHandle(l, function() {
    return D();
  });
  var z = R.useRef(i);
  z.current = i;
  var P = R.useCallback(function(A) {
    var Y = z.current, V = Y.onResize, I = Y.data, $ = A.getBoundingClientRect(), W = $.width, re = $.height, G = A.offsetWidth, se = A.offsetHeight, Te = Math.floor(W), le = Math.floor(re);
    if (T.current.width !== Te || T.current.height !== le || T.current.offsetWidth !== G || T.current.offsetHeight !== se) {
      var ge = {
        width: Te,
        height: le,
        offsetWidth: G,
        offsetHeight: se
      };
      T.current = ge;
      var Ee = G === Math.round(W) ? W : G, ne = se === Math.round(re) ? re : se, fe = Re(Re({}, ge), {}, {
        offsetWidth: Ee,
        offsetHeight: ne
      });
      h == null || h(fe, A, I), V && Promise.resolve().then(function() {
        V(fe, A);
      });
    }
  }, []);
  return R.useEffect(function() {
    var A = D();
    return A && !f && t4(A, P), function() {
      return n4(A, P);
    };
  }, [p.current, f]), /* @__PURE__ */ R.createElement(r4, {
    ref: y
  }, N ? /* @__PURE__ */ R.cloneElement(x, {
    ref: O
  }) : x);
}
var Ek = /* @__PURE__ */ R.forwardRef(a4);
process.env.NODE_ENV !== "production" && (Ek.displayName = "SingleObserver");
var i4 = "rc-observer-key";
function o4(i, l) {
  var u = i.children, f = typeof u == "function" ? [u] : Mh(u);
  return process.env.NODE_ENV !== "production" && (f.length > 1 ? Zd(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : f.length === 0 && Zd(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), f.map(function(p, y) {
    var h = (p == null ? void 0 : p.key) || "".concat(i4, "-").concat(y);
    return /* @__PURE__ */ R.createElement(Ek, bn({}, i, {
      key: h,
      ref: y === 0 ? l : void 0
    }), p);
  });
}
var av = /* @__PURE__ */ R.forwardRef(o4);
process.env.NODE_ENV !== "production" && (av.displayName = "ResizeObserver");
av.Collection = PP;
function ii() {
  return !!(typeof window != "undefined" && window.document && window.document.createElement);
}
var $R = process.env.NODE_ENV !== "test" && ii() ? R.useLayoutEffect : R.useEffect, Ia = function(l, u) {
  var f = R.useRef(!0);
  $R(function() {
    return l(f.current);
  }, u), $R(function() {
    return f.current = !1, function() {
      f.current = !0;
    };
  }, []);
}, HR = function(l, u) {
  Ia(function(f) {
    if (!f)
      return l();
  }, u);
}, l4 = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Fd = void 0;
function u4(i, l) {
  var u = i.prefixCls, f = i.invalidate, p = i.item, y = i.renderItem, h = i.responsive, E = i.responsiveDisabled, x = i.registerSize, T = i.itemKey, N = i.className, _ = i.style, O = i.children, D = i.display, z = i.order, P = i.component, A = P === void 0 ? "div" : P, Y = tr(i, l4), V = h && !D;
  function I(se) {
    x(T, se);
  }
  R.useEffect(function() {
    return function() {
      I(null);
    };
  }, []);
  var $ = y && p !== Fd ? y(p) : O, W;
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
  var G = /* @__PURE__ */ R.createElement(A, bn({
    className: Fn(!f && u, N),
    style: Re(Re({}, W), _)
  }, re, Y, {
    ref: l
  }), $);
  return h && (G = /* @__PURE__ */ R.createElement(av, {
    onResize: function(Te) {
      var le = Te.offsetWidth;
      I(le);
    },
    disabled: E
  }, G)), G;
}
var wh = /* @__PURE__ */ R.forwardRef(u4);
wh.displayName = "Item";
function Ll(i) {
  var l = R.useRef();
  l.current = i;
  var u = R.useCallback(function() {
    for (var f, p = arguments.length, y = new Array(p), h = 0; h < p; h++)
      y[h] = arguments[h];
    return (f = l.current) === null || f === void 0 ? void 0 : f.call.apply(f, [l].concat(y));
  }, []);
  return u;
}
var wk = function(l) {
  return +setTimeout(l, 16);
}, xk = function(l) {
  return clearTimeout(l);
};
typeof window != "undefined" && "requestAnimationFrame" in window && (wk = function(l) {
  return window.requestAnimationFrame(l);
}, xk = function(l) {
  return window.cancelAnimationFrame(l);
});
var FR = 0, C0 = /* @__PURE__ */ new Map();
function Tk(i) {
  C0.delete(i);
}
var so = function(l) {
  var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  FR += 1;
  var f = FR;
  function p(y) {
    if (y === 0)
      Tk(f), l();
    else {
      var h = wk(function() {
        p(y - 1);
      });
      C0.set(f, h);
    }
  }
  return p(u), f;
};
so.cancel = function(i) {
  var l = C0.get(i);
  return Tk(i), xk(l);
};
process.env.NODE_ENV !== "production" && (so.ids = function() {
  return C0;
});
function s4(i) {
  if (typeof MessageChannel == "undefined")
    so(i);
  else {
    var l = new MessageChannel();
    l.port1.onmessage = function() {
      return i();
    }, l.port2.postMessage(void 0);
  }
}
function c4() {
  var i = R.useRef(null), l = function(f) {
    i.current || (i.current = [], s4(function() {
      v0.unstable_batchedUpdates(function() {
        i.current.forEach(function(p) {
          p();
        }), i.current = null;
      });
    })), i.current.push(f);
  };
  return l;
}
function mh(i, l) {
  var u = R.useState(l), f = _e(u, 2), p = f[0], y = f[1], h = Ll(function(E) {
    i(function() {
      y(E);
    });
  });
  return [p, h];
}
var a0 = /* @__PURE__ */ ki.createContext(null), f4 = ["component"], d4 = ["className"], v4 = ["className"], p4 = function(l, u) {
  var f = R.useContext(a0);
  if (!f) {
    var p = l.component, y = p === void 0 ? "div" : p, h = tr(l, f4);
    return /* @__PURE__ */ R.createElement(y, bn({}, h, {
      ref: u
    }));
  }
  var E = f.className, x = tr(f, d4), T = l.className, N = tr(l, v4);
  return /* @__PURE__ */ R.createElement(a0.Provider, {
    value: null
  }, /* @__PURE__ */ R.createElement(wh, bn({
    ref: u,
    className: Fn(E, T)
  }, x, N)));
}, Rk = /* @__PURE__ */ R.forwardRef(p4);
Rk.displayName = "RawItem";
var h4 = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], _k = "responsive", kk = "invalidate";
function m4(i) {
  return "+ ".concat(i.length, " ...");
}
function g4(i, l) {
  var u = i.prefixCls, f = u === void 0 ? "rc-overflow" : u, p = i.data, y = p === void 0 ? [] : p, h = i.renderItem, E = i.renderRawItem, x = i.itemKey, T = i.itemWidth, N = T === void 0 ? 10 : T, _ = i.ssr, O = i.style, D = i.className, z = i.maxCount, P = i.renderRest, A = i.renderRawRest, Y = i.suffix, V = i.component, I = V === void 0 ? "div" : V, $ = i.itemComponent, W = i.onVisibleChange, re = tr(i, h4), G = _ === "full", se = c4(), Te = mh(se, null), le = _e(Te, 2), ge = le[0], Ee = le[1], ne = ge || 0, fe = mh(se, /* @__PURE__ */ new Map()), Ce = _e(fe, 2), we = Ce[0], Ne = Ce[1], ee = mh(se, 0), de = _e(ee, 2), ae = de[0], ze = de[1], De = mh(se, 0), ft = _e(De, 2), dt = ft[0], At = ft[1], it = mh(se, 0), Rt = _e(it, 2), st = Rt[0], Mt = Rt[1], Gt = uo(null), Ze = _e(Gt, 2), Ft = Ze[0], Ot = Ze[1], Se = uo(null), Et = _e(Se, 2), Ct = Et[0], _t = Et[1], Wt = R.useMemo(function() {
    return Ct === null && G ? Number.MAX_SAFE_INTEGER : Ct || 0;
  }, [Ct, ge]), Qe = uo(!1), wt = _e(Qe, 2), vt = wt[0], ln = wt[1], Je = "".concat(f, "-item"), Xt = Math.max(ae, dt), qt = z === _k, $t = y.length && qt, _n = z === kk, kn = $t || typeof z == "number" && y.length > z, cn = kh(function() {
    var Le = y;
    return $t ? ge === null && G ? Le = y : Le = y.slice(0, Math.min(y.length, ne / N)) : typeof z == "number" && (Le = y.slice(0, z)), Le;
  }, [y, N, ge, z, $t]), fn = kh(function() {
    return $t ? y.slice(Wt + 1) : y.slice(cn.length);
  }, [y, cn, $t, Wt]), he = Mu(function(Le, Ye) {
    var It;
    return typeof x == "function" ? x(Le) : (It = x && (Le == null ? void 0 : Le[x])) !== null && It !== void 0 ? It : Ye;
  }, [x]), Ie = Mu(h || function(Le) {
    return Le;
  }, [h]);
  function We(Le, Ye, It) {
    Ct === Le && (Ye === void 0 || Ye === Ft) || (_t(Le), It || (ln(Le < y.length - 1), W == null || W(Le)), Ye !== void 0 && Ot(Ye));
  }
  function zt(Le, Ye) {
    Ee(Ye.clientWidth);
  }
  function Pt(Le, Ye) {
    Ne(function(It) {
      var En = new Map(It);
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
  Ia(function() {
    if (ne && typeof Xt == "number" && cn) {
      var Le = st, Ye = cn.length, It = Ye - 1;
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
        It === 0 && Le <= ne || // Last two width will be the final width
        En === It - 1 && Le + Mn(It) <= ne) {
          We(It, null);
          break;
        } else if (Le + Xt > ne) {
          We(En - 1, Le - nr - st + dt);
          break;
        }
      }
      Y && Mn(0) + st > ne && Ot(null);
    }
  }, [ne, we, dt, st, he, cn]);
  var Ut = vt && !!fn.length, Zt = {};
  Ft !== null && $t && (Zt = {
    position: "absolute",
    left: Ft,
    top: 0
  });
  var Ht = {
    prefixCls: Je,
    responsive: $t,
    component: $,
    invalidate: _n
  }, tn = E ? function(Le, Ye) {
    var It = he(Le, Ye);
    return /* @__PURE__ */ R.createElement(a0.Provider, {
      key: It,
      value: Re(Re({}, Ht), {}, {
        order: Ye,
        item: Le,
        itemKey: It,
        registerSize: Pt,
        display: Ye <= Wt
      })
    }, E(Le, Ye));
  } : function(Le, Ye) {
    var It = he(Le, Ye);
    return /* @__PURE__ */ R.createElement(wh, bn({}, Ht, {
      order: Ye,
      key: It,
      item: Le,
      renderItem: Ie,
      itemKey: It,
      registerSize: Pt,
      display: Ye <= Wt
    }));
  }, Kt, Jt = {
    order: Ut ? Wt : Number.MAX_SAFE_INTEGER,
    className: "".concat(Je, "-rest"),
    registerSize: pt,
    display: Ut
  };
  if (A)
    A && (Kt = /* @__PURE__ */ R.createElement(a0.Provider, {
      value: Re(Re({}, Ht), Jt)
    }, A(fn)));
  else {
    var xt = P || m4;
    Kt = /* @__PURE__ */ R.createElement(wh, bn({}, Ht, Jt), typeof xt == "function" ? xt(fn) : xt);
  }
  var jt = /* @__PURE__ */ R.createElement(I, bn({
    className: Fn(!_n && f, D),
    style: O,
    ref: l
  }, re), cn.map(tn), kn ? Kt : null, Y && /* @__PURE__ */ R.createElement(wh, bn({}, Ht, {
    responsive: qt,
    responsiveDisabled: !$t,
    order: Wt,
    className: "".concat(Je, "-suffix"),
    registerSize: ht,
    display: !0,
    style: Zt
  }), Y));
  return qt && (jt = /* @__PURE__ */ R.createElement(av, {
    onResize: zt,
    disabled: !$t
  }, jt)), jt;
}
var Du = /* @__PURE__ */ R.forwardRef(g4);
Du.displayName = "Overflow";
Du.Item = Rk;
Du.RESPONSIVE = _k;
Du.INVALIDATE = kk;
function Xd(i) {
  var l = R.useRef(!1), u = R.useState(i), f = _e(u, 2), p = f[0], y = f[1];
  R.useEffect(function() {
    return l.current = !1, function() {
      l.current = !0;
    };
  }, []);
  function h(E, x) {
    x && l.current || y(E);
  }
  return [p, h];
}
function db(i) {
  return i !== void 0;
}
function xh(i, l) {
  var u = l || {}, f = u.defaultValue, p = u.value, y = u.onChange, h = u.postState, E = Xd(function() {
    return db(p) ? p : db(f) ? typeof f == "function" ? f() : f : typeof i == "function" ? i() : i;
  }), x = _e(E, 2), T = x[0], N = x[1], _ = p !== void 0 ? p : T, O = h ? h(_) : _, D = Ll(y), z = Xd([_]), P = _e(z, 2), A = P[0], Y = P[1];
  HR(function() {
    var I = A[0];
    T !== I && D(T, I);
  }, [A]), HR(function() {
    db(p) || N(p);
  }, [p]);
  var V = Ll(function(I, $) {
    N(I, $), Y([_], $);
  });
  return [O, V];
}
function RE(i, l) {
  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, f = /* @__PURE__ */ new Set();
  function p(y, h) {
    var E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, x = f.has(y);
    if (oi(!x, "Warning: There may be circular references"), x)
      return !1;
    if (y === h)
      return !0;
    if (u && E > 1)
      return !1;
    f.add(y);
    var T = E + 1;
    if (Array.isArray(y)) {
      if (!Array.isArray(h) || y.length !== h.length)
        return !1;
      for (var N = 0; N < y.length; N++)
        if (!p(y[N], h[N], T))
          return !1;
      return !0;
    }
    if (y && h && cr(y) === "object" && cr(h) === "object") {
      var _ = Object.keys(y);
      return _.length !== Object.keys(h).length ? !1 : _.every(function(O) {
        return p(y[O], h[O], T);
      });
    }
    return !1;
  }
  return p(i, l);
}
var Mk = /* @__PURE__ */ R.createContext(null);
function Ok(i, l) {
  return i === void 0 ? null : "".concat(i, "-").concat(l);
}
function Nk(i) {
  var l = R.useContext(Mk);
  return Ok(l, i);
}
var y4 = ["children", "locked"], Xo = /* @__PURE__ */ R.createContext(null);
function S4(i, l) {
  var u = Re({}, i);
  return Object.keys(l).forEach(function(f) {
    var p = l[f];
    p !== void 0 && (u[f] = p);
  }), u;
}
function Oh(i) {
  var l = i.children, u = i.locked, f = tr(i, y4), p = R.useContext(Xo), y = p0(function() {
    return S4(p, f);
  }, [p, f], function(h, E) {
    return !u && (h[0] !== E[0] || !RE(h[1], E[1], !0));
  });
  return /* @__PURE__ */ R.createElement(Xo.Provider, {
    value: y
  }, l);
}
var C4 = [], Dk = /* @__PURE__ */ R.createContext(null);
function b0() {
  return R.useContext(Dk);
}
var Lk = /* @__PURE__ */ R.createContext(C4);
function Fh(i) {
  var l = R.useContext(Lk);
  return R.useMemo(function() {
    return i !== void 0 ? [].concat(Tr(l), [i]) : l;
  }, [l, i]);
}
var Ak = /* @__PURE__ */ R.createContext(null), _E = /* @__PURE__ */ R.createContext({});
const zk = function(i) {
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
function jR(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (zk(i)) {
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
function b4(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, u = Tr(i.querySelectorAll("*")).filter(function(f) {
    return jR(f, l);
  });
  return jR(i, l) && u.unshift(i), u;
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
}, Pb = rt.LEFT, Ub = rt.RIGHT, Ib = rt.UP, Yy = rt.DOWN, Qy = rt.ENTER, Pk = rt.ESC, gh = rt.HOME, yh = rt.END, VR = [Ib, Yy, Pb, Ub];
function E4(i, l, u, f) {
  var p, y, h, E, x = "prev", T = "next", N = "children", _ = "parent";
  if (i === "inline" && f === Qy)
    return {
      inlineTrigger: !0
    };
  var O = (p = {}, tt(p, Ib, x), tt(p, Yy, T), p), D = (y = {}, tt(y, Pb, u ? T : x), tt(y, Ub, u ? x : T), tt(y, Yy, N), tt(y, Qy, N), y), z = (h = {}, tt(h, Ib, x), tt(h, Yy, T), tt(h, Qy, N), tt(h, Pk, _), tt(h, Pb, u ? N : _), tt(h, Ub, u ? _ : N), h), P = {
    inline: O,
    horizontal: D,
    vertical: z,
    inlineSub: O,
    horizontalSub: z,
    verticalSub: z
  }, A = (E = P["".concat(i).concat(l ? "" : "Sub")]) === null || E === void 0 ? void 0 : E[f];
  switch (A) {
    case x:
      return {
        offset: -1,
        sibling: !0
      };
    case T:
      return {
        offset: 1,
        sibling: !0
      };
    case _:
      return {
        offset: -1,
        sibling: !1
      };
    case N:
      return {
        offset: 1,
        sibling: !1
      };
    default:
      return null;
  }
}
function w4(i) {
  for (var l = i; l; ) {
    if (l.getAttribute("data-menu-list"))
      return l;
    l = l.parentElement;
  }
  return null;
}
function x4(i, l) {
  for (var u = i || document.activeElement; u; ) {
    if (l.has(u))
      return u;
    u = u.parentElement;
  }
  return null;
}
function kE(i, l) {
  var u = b4(i, !0);
  return u.filter(function(f) {
    return l.has(f);
  });
}
function BR(i, l, u) {
  var f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!i)
    return null;
  var p = kE(i, l), y = p.length, h = p.findIndex(function(E) {
    return u === E;
  });
  return f < 0 ? h === -1 ? h = y - 1 : h -= 1 : f > 0 && (h += 1), h = (h + y) % y, p[h];
}
var $b = function(l, u) {
  var f = /* @__PURE__ */ new Set(), p = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
  return l.forEach(function(h) {
    var E = document.querySelector("[data-menu-id='".concat(Ok(u, h), "']"));
    E && (f.add(E), y.set(E, h), p.set(h, E));
  }), {
    elements: f,
    key2element: p,
    element2key: y
  };
};
function T4(i, l, u, f, p, y, h, E, x, T) {
  var N = R.useRef(), _ = R.useRef();
  _.current = l;
  var O = function() {
    so.cancel(N.current);
  };
  return R.useEffect(function() {
    return function() {
      O();
    };
  }, []), function(D) {
    var z = D.which;
    if ([].concat(VR, [Qy, Pk, gh, yh]).includes(z)) {
      var P = y(), A = $b(P, f), Y = A, V = Y.elements, I = Y.key2element, $ = Y.element2key, W = I.get(l), re = x4(W, V), G = $.get(re), se = E4(i, h(G, !0).length === 1, u, z);
      if (!se && z !== gh && z !== yh)
        return;
      (VR.includes(z) || [gh, yh].includes(z)) && D.preventDefault();
      var Te = function(Ne) {
        if (Ne) {
          var ee = Ne, de = Ne.querySelector("a");
          de != null && de.getAttribute("href") && (ee = de);
          var ae = $.get(Ne);
          E(ae), O(), N.current = so(function() {
            _.current === ae && ee.focus();
          });
        }
      };
      if ([gh, yh].includes(z) || se.sibling || !re) {
        var le;
        !re || i === "inline" ? le = p.current : le = w4(re);
        var ge, Ee = kE(le, V);
        z === gh ? ge = Ee[0] : z === yh ? ge = Ee[Ee.length - 1] : ge = BR(le, V, re, se.offset), Te(ge);
      } else if (se.inlineTrigger)
        x(G);
      else if (se.offset > 0)
        x(G, !0), O(), N.current = so(function() {
          A = $b(P, f);
          var we = re.getAttribute("aria-controls"), Ne = document.getElementById(we), ee = BR(Ne, A.elements);
          Te(ee);
        }, 5);
      else if (se.offset < 0) {
        var ne = h(G, !0), fe = ne[ne.length - 2], Ce = I.get(fe);
        x(fe, !1), Te(Ce);
      }
    }
    T == null || T(D);
  };
}
function R4(i) {
  Promise.resolve().then(i);
}
var ME = "__RC_UTIL_PATH_SPLIT__", WR = function(l) {
  return l.join(ME);
}, _4 = function(l) {
  return l.split(ME);
}, Hb = "rc-menu-more";
function k4() {
  var i = R.useState({}), l = _e(i, 2), u = l[1], f = _i(/* @__PURE__ */ new Map()), p = _i(/* @__PURE__ */ new Map()), y = R.useState([]), h = _e(y, 2), E = h[0], x = h[1], T = _i(0), N = _i(!1), _ = function() {
    N.current || u({});
  }, O = Mu(function(I, $) {
    process.env.NODE_ENV !== "production" && oi(!f.current.has(I), "Duplicated key '".concat(I, "' used in Menu by path [").concat($.join(" > "), "]"));
    var W = WR($);
    p.current.set(W, I), f.current.set(I, W), T.current += 1;
    var re = T.current;
    R4(function() {
      re === T.current && _();
    });
  }, []), D = Mu(function(I, $) {
    var W = WR($);
    p.current.delete(W), f.current.delete(I);
  }, []), z = Mu(function(I) {
    x(I);
  }, []), P = Mu(function(I, $) {
    var W = f.current.get(I) || "", re = _4(W);
    return $ && E.includes(re[0]) && re.unshift(Hb), re;
  }, [E]), A = Mu(function(I, $) {
    return I.some(function(W) {
      var re = P(W, !0);
      return re.includes($);
    });
  }, [P]), Y = function() {
    var $ = Tr(f.current.keys());
    return E.length && $.push(Hb), $;
  }, V = Mu(function(I) {
    var $ = "".concat(f.current.get(I)).concat(ME), W = /* @__PURE__ */ new Set();
    return Tr(p.current.keys()).forEach(function(re) {
      re.startsWith($) && W.add(p.current.get(re));
    }), W;
  }, []);
  return R.useEffect(function() {
    return function() {
      N.current = !0;
    };
  }, []), {
    // Register
    registerPath: O,
    unregisterPath: D,
    refreshOverflowKeys: z,
    // Util
    isSubPathKey: A,
    getKeyPath: P,
    getKeys: Y,
    getSubPathKeys: V
  };
}
function Eh(i) {
  var l = R.useRef(i);
  l.current = i;
  var u = R.useCallback(function() {
    for (var f, p = arguments.length, y = new Array(p), h = 0; h < p; h++)
      y[h] = arguments[h];
    return (f = l.current) === null || f === void 0 ? void 0 : f.call.apply(f, [l].concat(y));
  }, []);
  return i ? u : void 0;
}
var M4 = Math.random().toFixed(5).toString().slice(2), KR = 0;
function O4(i) {
  var l = xh(i, {
    value: i
  }), u = _e(l, 2), f = u[0], p = u[1];
  return R.useEffect(function() {
    KR += 1;
    var y = process.env.NODE_ENV === "test" ? "test" : "".concat(M4, "-").concat(KR);
    p("rc-menu-uuid-".concat(y));
  }, []), f;
}
function E0(i, l) {
  var u = Re({}, i);
  return Array.isArray(l) && l.forEach(function(f) {
    delete u[f];
  }), u;
}
function Uk(i, l, u, f) {
  var p = R.useContext(Xo), y = p.activeKey, h = p.onActive, E = p.onInactive, x = {
    active: y === i
  };
  return l || (x.onMouseEnter = function(T) {
    u == null || u({
      key: i,
      domEvent: T
    }), h(i);
  }, x.onMouseLeave = function(T) {
    f == null || f({
      key: i,
      domEvent: T
    }), E(i);
  }), x;
}
function Ik(i) {
  var l = R.useContext(Xo), u = l.mode, f = l.rtl, p = l.inlineIndent;
  if (u !== "inline")
    return null;
  var y = i;
  return f ? {
    paddingRight: y * p
  } : {
    paddingLeft: y * p
  };
}
function $k(i) {
  var l = i.icon, u = i.props, f = i.children, p;
  return l === null || l === !1 ? null : (typeof l == "function" ? p = /* @__PURE__ */ R.createElement(l, Re({}, u)) : typeof l != "boolean" && (p = l), p || f || null);
}
var N4 = ["item"];
function i0(i) {
  var l = i.item, u = tr(i, N4);
  return Object.defineProperty(u, "item", {
    get: function() {
      return oi(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), l;
    }
  }), u;
}
var D4 = ["title", "attribute", "elementRef"], L4 = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], A4 = ["active"], z4 = /* @__PURE__ */ function(i) {
  rv(u, i);
  var l = S0(u);
  function u() {
    return qo(this, u), l.apply(this, arguments);
  }
  return Zo(u, [{
    key: "render",
    value: function() {
      var p = this.props, y = p.title, h = p.attribute, E = p.elementRef, x = tr(p, D4), T = E0(x, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return oi(!h, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ R.createElement(Du.Item, bn({}, h, {
        title: typeof y == "string" ? y : void 0
      }, T, {
        ref: E
      }));
    }
  }]), u;
}(R.Component), P4 = /* @__PURE__ */ R.forwardRef(function(i, l) {
  var u, f = i.style, p = i.className, y = i.eventKey, h = i.warnKey, E = i.disabled, x = i.itemIcon, T = i.children, N = i.role, _ = i.onMouseEnter, O = i.onMouseLeave, D = i.onClick, z = i.onKeyDown, P = i.onFocus, A = tr(i, L4), Y = Nk(y), V = R.useContext(Xo), I = V.prefixCls, $ = V.onItemClick, W = V.disabled, re = V.overflowDisabled, G = V.itemIcon, se = V.selectedKeys, Te = V.onActive, le = R.useContext(_E), ge = le._internalRenderMenuItem, Ee = "".concat(I, "-item"), ne = R.useRef(), fe = R.useRef(), Ce = W || E, we = h0(l, fe), Ne = Fh(y);
  process.env.NODE_ENV !== "production" && h && oi(!1, "MenuItem should not leave undefined `key`.");
  var ee = function(Ze) {
    return {
      key: y,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: Tr(Ne).reverse(),
      item: ne.current,
      domEvent: Ze
    };
  }, de = x || G, ae = Uk(y, Ce, _, O), ze = ae.active, De = tr(ae, A4), ft = se.includes(y), dt = Ik(Ne.length), At = function(Ze) {
    if (!Ce) {
      var Ft = ee(Ze);
      D == null || D(i0(Ft)), $(Ft);
    }
  }, it = function(Ze) {
    if (z == null || z(Ze), Ze.which === rt.ENTER) {
      var Ft = ee(Ze);
      D == null || D(i0(Ft)), $(Ft);
    }
  }, Rt = function(Ze) {
    Te(y), P == null || P(Ze);
  }, st = {};
  i.role === "option" && (st["aria-selected"] = ft);
  var Mt = /* @__PURE__ */ R.createElement(z4, bn({
    ref: ne,
    elementRef: we,
    role: N === null ? "none" : N || "menuitem",
    tabIndex: E ? null : -1,
    "data-menu-id": re && Y ? null : Y
  }, A, De, st, {
    component: "li",
    "aria-disabled": E,
    style: Re(Re({}, dt), f),
    className: Fn(Ee, (u = {}, tt(u, "".concat(Ee, "-active"), ze), tt(u, "".concat(Ee, "-selected"), ft), tt(u, "".concat(Ee, "-disabled"), Ce), u), p),
    onClick: At,
    onKeyDown: it,
    onFocus: Rt
  }), T, /* @__PURE__ */ R.createElement($k, {
    props: Re(Re({}, i), {}, {
      isSelected: ft
    }),
    icon: de
  }));
  return ge && (Mt = ge(Mt, i, {
    selected: ft
  })), Mt;
});
function U4(i, l) {
  var u = i.eventKey, f = b0(), p = Fh(u);
  return R.useEffect(function() {
    if (f)
      return f.registerPath(u, p), function() {
        f.unregisterPath(u, p);
      };
  }, [p]), f ? null : /* @__PURE__ */ R.createElement(P4, bn({}, i, {
    ref: l
  }));
}
const w0 = /* @__PURE__ */ R.forwardRef(U4);
var I4 = ["className", "children"], $4 = function(l, u) {
  var f = l.className, p = l.children, y = tr(l, I4), h = R.useContext(Xo), E = h.prefixCls, x = h.mode, T = h.rtl;
  return /* @__PURE__ */ R.createElement("ul", bn({
    className: Fn(E, T && "".concat(E, "-rtl"), "".concat(E, "-sub"), "".concat(E, "-").concat(x === "inline" ? "inline" : "vertical"), f),
    role: "menu"
  }, y, {
    "data-menu-list": !0,
    ref: u
  }), p);
}, OE = /* @__PURE__ */ R.forwardRef($4);
OE.displayName = "SubMenuList";
function NE(i, l) {
  return Mh(i).map(function(u, f) {
    if (/* @__PURE__ */ R.isValidElement(u)) {
      var p, y, h = u.key, E = (p = (y = u.props) === null || y === void 0 ? void 0 : y.eventKey) !== null && p !== void 0 ? p : h, x = E == null;
      x && (E = "tmp_key-".concat([].concat(Tr(l), [f]).join("-")));
      var T = {
        key: E,
        eventKey: E
      };
      return process.env.NODE_ENV !== "production" && x && (T.warnKey = !0), /* @__PURE__ */ R.cloneElement(u, T);
    }
    return u;
  });
}
var Hk = /* @__PURE__ */ R.createContext(null), GR = [];
function H4(i, l) {
  var u = R.useState(function() {
    if (!ii())
      return null;
    var z = document.createElement("div");
    return process.env.NODE_ENV !== "production" && l && z.setAttribute("data-debug", l), z;
  }), f = _e(u, 1), p = f[0], y = R.useRef(!1), h = R.useContext(Hk), E = R.useState(GR), x = _e(E, 2), T = x[0], N = x[1], _ = h || (y.current ? void 0 : function(z) {
    N(function(P) {
      var A = [z].concat(Tr(P));
      return A;
    });
  });
  function O() {
    p.parentElement || document.body.appendChild(p), y.current = !0;
  }
  function D() {
    var z;
    (z = p.parentElement) === null || z === void 0 || z.removeChild(p), y.current = !1;
  }
  return Ia(function() {
    return i ? h ? h(O) : O() : D(), D;
  }, [i]), Ia(function() {
    T.length && (T.forEach(function(z) {
      return z();
    }), N(GR));
  }, [T]), [p, _];
}
function F4(i, l) {
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
var YR = "data-rc-order", QR = "data-rc-priority", j4 = "rc-util-key", Fb = /* @__PURE__ */ new Map();
function Fk() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = i.mark;
  return l ? l.startsWith("data-") ? l : "data-".concat(l) : j4;
}
function x0(i) {
  if (i.attachTo)
    return i.attachTo;
  var l = document.querySelector("head");
  return l || document.body;
}
function V4(i) {
  return i === "queue" ? "prependQueue" : i ? "prepend" : "append";
}
function DE(i) {
  return Array.from((Fb.get(i) || i).children).filter(function(l) {
    return l.tagName === "STYLE";
  });
}
function jk(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!ii())
    return null;
  var u = l.csp, f = l.prepend, p = l.priority, y = p === void 0 ? 0 : p, h = V4(f), E = h === "prependQueue", x = document.createElement("style");
  x.setAttribute(YR, h), E && y && x.setAttribute(QR, "".concat(y)), u != null && u.nonce && (x.nonce = u == null ? void 0 : u.nonce), x.innerHTML = i;
  var T = x0(l), N = T.firstChild;
  if (f) {
    if (E) {
      var _ = (l.styles || DE(T)).filter(function(O) {
        if (!["prepend", "prependQueue"].includes(O.getAttribute(YR)))
          return !1;
        var D = Number(O.getAttribute(QR) || 0);
        return y >= D;
      });
      if (_.length)
        return T.insertBefore(x, _[_.length - 1].nextSibling), x;
    }
    T.insertBefore(x, N);
  } else
    T.appendChild(x);
  return x;
}
function Vk(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = x0(l);
  return (l.styles || DE(u)).find(function(f) {
    return f.getAttribute(Fk(l)) === i;
  });
}
function Nh(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = Vk(i, l);
  if (u) {
    var f = x0(l);
    f.removeChild(u);
  }
}
function B4(i, l) {
  var u = Fb.get(i);
  if (!u || !F4(document, u)) {
    var f = jk("", l), p = f.parentNode;
    Fb.set(i, p), i.removeChild(f);
  }
}
function Us(i, l) {
  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, f = x0(u), p = DE(f), y = Re(Re({}, u), {}, {
    styles: p
  });
  B4(f, y);
  var h = Vk(l, y);
  if (h) {
    var E, x;
    if ((E = y.csp) !== null && E !== void 0 && E.nonce && h.nonce !== ((x = y.csp) === null || x === void 0 ? void 0 : x.nonce)) {
      var T;
      h.nonce = (T = y.csp) === null || T === void 0 ? void 0 : T.nonce;
    }
    return h.innerHTML !== i && (h.innerHTML = i), h;
  }
  var N = jk(i, y);
  return N.setAttribute(Fk(y), l), N;
}
var vb;
function W4(i) {
  if (typeof document == "undefined")
    return 0;
  if (i || vb === void 0) {
    var l = document.createElement("div");
    l.style.width = "100%", l.style.height = "200px";
    var u = document.createElement("div"), f = u.style;
    f.position = "absolute", f.top = "0", f.left = "0", f.pointerEvents = "none", f.visibility = "hidden", f.width = "200px", f.height = "150px", f.overflow = "hidden", u.appendChild(l), document.body.appendChild(u);
    var p = l.offsetWidth;
    u.style.overflow = "scroll";
    var y = l.offsetWidth;
    p === y && (y = u.clientWidth), document.body.removeChild(u), vb = p - y;
  }
  return vb;
}
function XR(i) {
  var l = i.match(/^(.*)px$/), u = Number(l == null ? void 0 : l[1]);
  return Number.isNaN(u) ? W4() : u;
}
function K4(i) {
  if (typeof document == "undefined" || !i || !(i instanceof Element))
    return {
      width: 0,
      height: 0
    };
  var l = getComputedStyle(i, "::-webkit-scrollbar"), u = l.width, f = l.height;
  return {
    width: XR(u),
    height: XR(f)
  };
}
function G4() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var Y4 = "rc-util-locker-".concat(Date.now()), qR = 0;
function Q4(i) {
  var l = !!i, u = R.useState(function() {
    return qR += 1, "".concat(Y4, "_").concat(qR);
  }), f = _e(u, 1), p = f[0];
  Ia(function() {
    if (l) {
      var y = K4(document.body).width, h = G4();
      Us(`
html body {
  overflow-y: hidden;
  `.concat(h ? "width: calc(100% - ".concat(y, "px);") : "", `
}`), p);
    } else
      Nh(p);
    return function() {
      Nh(p);
    };
  }, [l, p]);
}
var ZR = !1;
function X4(i) {
  return typeof i == "boolean" && (ZR = i), ZR;
}
var JR = function(l) {
  return l === !1 ? !1 : !ii() || !l ? null : typeof l == "string" ? document.querySelector(l) : typeof l == "function" ? l() : l;
}, LE = /* @__PURE__ */ R.forwardRef(function(i, l) {
  var u = i.open, f = i.autoLock, p = i.getContainer, y = i.debug, h = i.autoDestroy, E = h === void 0 ? !0 : h, x = i.children, T = R.useState(u), N = _e(T, 2), _ = N[0], O = N[1], D = _ || u;
  process.env.NODE_ENV !== "production" && oi(ii() || !u, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), R.useEffect(function() {
    (E || u) && O(u);
  }, [u, E]);
  var z = R.useState(function() {
    return JR(p);
  }), P = _e(z, 2), A = P[0], Y = P[1];
  R.useEffect(function() {
    var Ee = JR(p);
    Y(Ee != null ? Ee : null);
  });
  var V = H4(D && !A, y), I = _e(V, 2), $ = I[0], W = I[1], re = A != null ? A : $;
  Q4(f && u && ii() && (re === $ || re === document.body));
  var G = null;
  if (x && m0(x) && l) {
    var se = x;
    G = se.ref;
  }
  var Te = h0(G, l);
  if (!D || !ii() || A === void 0)
    return null;
  var le = re === !1 || X4(), ge = x;
  return l && (ge = /* @__PURE__ */ R.cloneElement(x, {
    ref: Te
  })), /* @__PURE__ */ R.createElement(Hk.Provider, {
    value: W
  }, le ? ge : /* @__PURE__ */ v0.createPortal(ge, re));
});
process.env.NODE_ENV !== "production" && (LE.displayName = "Portal");
function Bk(i) {
  var l;
  return i == null || (l = i.getRootNode) === null || l === void 0 ? void 0 : l.call(i);
}
function q4(i) {
  return Bk(i) instanceof ShadowRoot;
}
function o0(i) {
  return q4(i) ? Bk(i) : null;
}
function Z4() {
  var i = Re({}, R);
  return i.useId;
}
var e_ = 0, t_ = Z4();
const J4 = t_ ? (
  // Use React `useId`
  function(l) {
    var u = t_();
    return l || (process.env.NODE_ENV === "test" ? "test-id" : u);
  }
) : (
  // Use compatible of `useId`
  function(l) {
    var u = R.useState("ssr-id"), f = _e(u, 2), p = f[0], y = f[1];
    return R.useEffect(function() {
      var h = e_;
      e_ += 1, y("rc_unique_".concat(h));
    }, []), l || (process.env.NODE_ENV === "test" ? "test-id" : p);
  }
), e3 = function() {
  if (typeof navigator == "undefined" || typeof window == "undefined")
    return !1;
  var i = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(i) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(i == null ? void 0 : i.substr(0, 4));
};
var t3 = ["children"], Wk = /* @__PURE__ */ R.createContext({});
function n3(i) {
  var l = i.children, u = tr(i, t3);
  return /* @__PURE__ */ R.createElement(Wk.Provider, {
    value: u
  }, l);
}
var r3 = /* @__PURE__ */ function(i) {
  rv(u, i);
  var l = S0(u);
  function u() {
    return qo(this, u), l.apply(this, arguments);
  }
  return Zo(u, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), u;
}(R.Component), Vc = "none", zy = "appear", Py = "enter", Uy = "leave", n_ = "none", Go = "prepare", Yd = "start", Qd = "active", AE = "end", Kk = "prepared";
function r_(i, l) {
  var u = {};
  return u[i.toLowerCase()] = l.toLowerCase(), u["Webkit".concat(i)] = "webkit".concat(l), u["Moz".concat(i)] = "moz".concat(l), u["ms".concat(i)] = "MS".concat(l), u["O".concat(i)] = "o".concat(l.toLowerCase()), u;
}
function a3(i, l) {
  var u = {
    animationend: r_("Animation", "AnimationEnd"),
    transitionend: r_("Transition", "TransitionEnd")
  };
  return i && ("AnimationEvent" in l || delete u.animationend.animation, "TransitionEvent" in l || delete u.transitionend.transition), u;
}
var i3 = a3(ii(), typeof window != "undefined" ? window : {}), Gk = {};
if (ii()) {
  var o3 = document.createElement("div");
  Gk = o3.style;
}
var Iy = {};
function Yk(i) {
  if (Iy[i])
    return Iy[i];
  var l = i3[i];
  if (l)
    for (var u = Object.keys(l), f = u.length, p = 0; p < f; p += 1) {
      var y = u[p];
      if (Object.prototype.hasOwnProperty.call(l, y) && y in Gk)
        return Iy[i] = l[y], Iy[i];
    }
  return "";
}
var Qk = Yk("animationend"), Xk = Yk("transitionend"), qk = !!(Qk && Xk), a_ = Qk || "animationend", i_ = Xk || "transitionend";
function o_(i, l) {
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
const l3 = function(i) {
  var l = _i(), u = _i(i);
  u.current = i;
  var f = R.useCallback(function(h) {
    u.current(h);
  }, []);
  function p(h) {
    h && (h.removeEventListener(i_, f), h.removeEventListener(a_, f));
  }
  function y(h) {
    l.current && l.current !== h && p(l.current), h && h !== l.current && (h.addEventListener(i_, f), h.addEventListener(a_, f), l.current = h);
  }
  return R.useEffect(function() {
    return function() {
      p(l.current);
    };
  }, []), [y, p];
};
var Zk = ii() ? Zz : Al;
const u3 = function() {
  var i = R.useRef(null);
  function l() {
    so.cancel(i.current);
  }
  function u(f) {
    var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    l();
    var y = so(function() {
      p <= 1 ? f({
        isCanceled: function() {
          return y !== i.current;
        }
      }) : u(f, p - 1);
    });
    i.current = y;
  }
  return R.useEffect(function() {
    return function() {
      l();
    };
  }, []), [u, l];
};
var s3 = [Go, Yd, Qd, AE], c3 = [Go, Kk], Jk = !1, f3 = !0;
function eM(i) {
  return i === Qd || i === AE;
}
const d3 = function(i, l, u) {
  var f = Xd(n_), p = _e(f, 2), y = p[0], h = p[1], E = u3(), x = _e(E, 2), T = x[0], N = x[1];
  function _() {
    h(Go, !0);
  }
  var O = l ? c3 : s3;
  return Zk(function() {
    if (y !== n_ && y !== AE) {
      var D = O.indexOf(y), z = O[D + 1], P = u(y);
      P === Jk ? h(z, !0) : z && T(function(A) {
        function Y() {
          A.isCanceled() || h(z, !0);
        }
        P === !0 ? Y() : Promise.resolve(P).then(Y);
      });
    }
  }, [i, y]), R.useEffect(function() {
    return function() {
      N();
    };
  }, []), [_, y];
};
function v3(i, l, u, f) {
  var p = f.motionEnter, y = p === void 0 ? !0 : p, h = f.motionAppear, E = h === void 0 ? !0 : h, x = f.motionLeave, T = x === void 0 ? !0 : x, N = f.motionDeadline, _ = f.motionLeaveImmediately, O = f.onAppearPrepare, D = f.onEnterPrepare, z = f.onLeavePrepare, P = f.onAppearStart, A = f.onEnterStart, Y = f.onLeaveStart, V = f.onAppearActive, I = f.onEnterActive, $ = f.onLeaveActive, W = f.onAppearEnd, re = f.onEnterEnd, G = f.onLeaveEnd, se = f.onVisibleChanged, Te = Xd(), le = _e(Te, 2), ge = le[0], Ee = le[1], ne = Xd(Vc), fe = _e(ne, 2), Ce = fe[0], we = fe[1], Ne = Xd(null), ee = _e(Ne, 2), de = ee[0], ae = ee[1], ze = _i(!1), De = _i(null);
  function ft() {
    return u();
  }
  var dt = _i(!1);
  function At() {
    we(Vc, !0), ae(null, !0);
  }
  function it(Qe) {
    var wt = ft();
    if (!(Qe && !Qe.deadline && Qe.target !== wt)) {
      var vt = dt.current, ln;
      Ce === zy && vt ? ln = W == null ? void 0 : W(wt, Qe) : Ce === Py && vt ? ln = re == null ? void 0 : re(wt, Qe) : Ce === Uy && vt && (ln = G == null ? void 0 : G(wt, Qe)), Ce !== Vc && vt && ln !== !1 && At();
    }
  }
  var Rt = l3(it), st = _e(Rt, 1), Mt = st[0], Gt = function(wt) {
    var vt, ln, Je;
    switch (wt) {
      case zy:
        return vt = {}, tt(vt, Go, O), tt(vt, Yd, P), tt(vt, Qd, V), vt;
      case Py:
        return ln = {}, tt(ln, Go, D), tt(ln, Yd, A), tt(ln, Qd, I), ln;
      case Uy:
        return Je = {}, tt(Je, Go, z), tt(Je, Yd, Y), tt(Je, Qd, $), Je;
      default:
        return {};
    }
  }, Ze = R.useMemo(function() {
    return Gt(Ce);
  }, [Ce]), Ft = d3(Ce, !i, function(Qe) {
    if (Qe === Go) {
      var wt = Ze[Go];
      return wt ? wt(ft()) : Jk;
    }
    if (Et in Ze) {
      var vt;
      ae(((vt = Ze[Et]) === null || vt === void 0 ? void 0 : vt.call(Ze, ft(), null)) || null);
    }
    return Et === Qd && (Mt(ft()), N > 0 && (clearTimeout(De.current), De.current = setTimeout(function() {
      it({
        deadline: !0
      });
    }, N))), Et === Kk && At(), f3;
  }), Ot = _e(Ft, 2), Se = Ot[0], Et = Ot[1], Ct = eM(Et);
  dt.current = Ct, Zk(function() {
    Ee(l);
    var Qe = ze.current;
    ze.current = !0;
    var wt;
    !Qe && l && E && (wt = zy), Qe && l && y && (wt = Py), (Qe && !l && T || !Qe && _ && !l && T) && (wt = Uy);
    var vt = Gt(wt);
    wt && (i || vt[Go]) ? (we(wt), Se()) : we(Vc);
  }, [l]), Al(function() {
    // Cancel appear
    (Ce === zy && !E || // Cancel enter
    Ce === Py && !y || // Cancel leave
    Ce === Uy && !T) && we(Vc);
  }, [E, y, T]), Al(function() {
    return function() {
      ze.current = !1, clearTimeout(De.current);
    };
  }, []);
  var _t = R.useRef(!1);
  Al(function() {
    ge && (_t.current = !0), ge !== void 0 && Ce === Vc && ((_t.current || ge) && (se == null || se(ge)), _t.current = !0);
  }, [ge, Ce]);
  var Wt = de;
  return Ze[Go] && Et === Yd && (Wt = Re({
    transition: "none"
  }, Wt)), [Ce, Et, Wt, ge != null ? ge : l];
}
function p3(i) {
  var l = i;
  cr(i) === "object" && (l = i.transitionSupport);
  function u(p, y) {
    return !!(p.motionName && l && y !== !1);
  }
  var f = /* @__PURE__ */ R.forwardRef(function(p, y) {
    var h = p.visible, E = h === void 0 ? !0 : h, x = p.removeOnLeave, T = x === void 0 ? !0 : x, N = p.forceRender, _ = p.children, O = p.motionName, D = p.leavedClassName, z = p.eventProps, P = R.useContext(Wk), A = P.motion, Y = u(p, A), V = _i(), I = _i();
    function $() {
      try {
        return V.current instanceof HTMLElement ? V.current : Gy(I.current);
      } catch (ae) {
        return null;
      }
    }
    var W = v3(Y, E, $, p), re = _e(W, 4), G = re[0], se = re[1], Te = re[2], le = re[3], ge = R.useRef(le);
    le && (ge.current = !0);
    var Ee = R.useCallback(function(ae) {
      V.current = ae, xE(y, ae);
    }, [y]), ne, fe = Re(Re({}, z), {}, {
      visible: E
    });
    if (!_)
      ne = null;
    else if (G === Vc)
      le ? ne = _(Re({}, fe), Ee) : !T && ge.current && D ? ne = _(Re(Re({}, fe), {}, {
        className: D
      }), Ee) : N || !T && !D ? ne = _(Re(Re({}, fe), {}, {
        style: {
          display: "none"
        }
      }), Ee) : ne = null;
    else {
      var Ce, we;
      se === Go ? we = "prepare" : eM(se) ? we = "active" : se === Yd && (we = "start");
      var Ne = o_(O, "".concat(G, "-").concat(we));
      ne = _(Re(Re({}, fe), {}, {
        className: Fn(o_(O, G), (Ce = {}, tt(Ce, Ne, Ne && we), tt(Ce, O, typeof O == "string"), Ce)),
        style: Te
      }), Ee);
    }
    if (/* @__PURE__ */ R.isValidElement(ne) && m0(ne)) {
      var ee = ne, de = ee.ref;
      de || (ne = /* @__PURE__ */ R.cloneElement(ne, {
        ref: Ee
      }));
    }
    return /* @__PURE__ */ R.createElement(r3, {
      ref: I
    }, ne);
  });
  return f.displayName = "CSSMotion", f;
}
const T0 = p3(qk);
var jb = "add", Vb = "keep", Bb = "remove", pb = "removed";
function h3(i) {
  var l;
  return i && cr(i) === "object" && "key" in i ? l = i : l = {
    key: i
  }, Re(Re({}, l), {}, {
    key: String(l.key)
  });
}
function Wb() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return i.map(h3);
}
function m3() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], u = [], f = 0, p = l.length, y = Wb(i), h = Wb(l);
  y.forEach(function(T) {
    for (var N = !1, _ = f; _ < p; _ += 1) {
      var O = h[_];
      if (O.key === T.key) {
        f < _ && (u = u.concat(h.slice(f, _).map(function(D) {
          return Re(Re({}, D), {}, {
            status: jb
          });
        })), f = _), u.push(Re(Re({}, O), {}, {
          status: Vb
        })), f += 1, N = !0;
        break;
      }
    }
    N || u.push(Re(Re({}, T), {}, {
      status: Bb
    }));
  }), f < p && (u = u.concat(h.slice(f).map(function(T) {
    return Re(Re({}, T), {}, {
      status: jb
    });
  })));
  var E = {};
  u.forEach(function(T) {
    var N = T.key;
    E[N] = (E[N] || 0) + 1;
  });
  var x = Object.keys(E).filter(function(T) {
    return E[T] > 1;
  });
  return x.forEach(function(T) {
    u = u.filter(function(N) {
      var _ = N.key, O = N.status;
      return _ !== T || O !== Bb;
    }), u.forEach(function(N) {
      N.key === T && (N.status = Vb);
    });
  }), u;
}
var g3 = ["component", "children", "onVisibleChanged", "onAllRemoved"], y3 = ["status"], S3 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function C3(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : T0, u = /* @__PURE__ */ function(f) {
    rv(y, f);
    var p = S0(y);
    function y() {
      var h;
      qo(this, y);
      for (var E = arguments.length, x = new Array(E), T = 0; T < E; T++)
        x[T] = arguments[T];
      return h = p.call.apply(p, [this].concat(x)), tt(zb(h), "state", {
        keyEntities: []
      }), tt(zb(h), "removeKey", function(N) {
        var _ = h.state.keyEntities, O = _.map(function(D) {
          return D.key !== N ? D : Re(Re({}, D), {}, {
            status: pb
          });
        });
        return h.setState({
          keyEntities: O
        }), O.filter(function(D) {
          var z = D.status;
          return z !== pb;
        }).length;
      }), h;
    }
    return Zo(y, [{
      key: "render",
      value: function() {
        var E = this, x = this.state.keyEntities, T = this.props, N = T.component, _ = T.children, O = T.onVisibleChanged, D = T.onAllRemoved, z = tr(T, g3), P = N || R.Fragment, A = {};
        return S3.forEach(function(Y) {
          A[Y] = z[Y], delete z[Y];
        }), delete z.keys, /* @__PURE__ */ R.createElement(P, z, x.map(function(Y, V) {
          var I = Y.status, $ = tr(Y, y3), W = I === jb || I === Vb;
          return /* @__PURE__ */ R.createElement(l, bn({}, A, {
            key: $.key,
            visible: W,
            eventProps: $,
            onVisibleChanged: function(G) {
              if (O == null || O(G, {
                key: $.key
              }), !G) {
                var se = E.removeKey($.key);
                se === 0 && D && D();
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
      value: function(E, x) {
        var T = E.keys, N = x.keyEntities, _ = Wb(T), O = m3(N, _);
        return {
          keyEntities: O.filter(function(D) {
            var z = N.find(function(P) {
              var A = P.key;
              return D.key === A;
            });
            return !(z && z.status === pb && D.status === Bb);
          })
        };
      }
    }]), y;
  }(R.Component);
  return tt(u, "defaultProps", {
    component: "div"
  }), u;
}
C3(qk);
function b3(i) {
  var l = i.prefixCls, u = i.align, f = i.arrow, p = i.arrowPos, y = f || {}, h = y.className, E = y.content, x = p.x, T = x === void 0 ? 0 : x, N = p.y, _ = N === void 0 ? 0 : N, O = R.useRef();
  if (!u || !u.points)
    return null;
  var D = {
    position: "absolute"
  };
  if (u.autoArrow !== !1) {
    var z = u.points[0], P = u.points[1], A = z[0], Y = z[1], V = P[0], I = P[1];
    A === V || !["t", "b"].includes(A) ? D.top = _ : A === "t" ? D.top = 0 : D.bottom = 0, Y === I || !["l", "r"].includes(Y) ? D.left = T : Y === "l" ? D.left = 0 : D.right = 0;
  }
  return /* @__PURE__ */ R.createElement("div", {
    ref: O,
    className: Fn("".concat(l, "-arrow"), h),
    style: D
  }, E);
}
function E3(i) {
  var l = i.prefixCls, u = i.open, f = i.zIndex, p = i.mask, y = i.motion;
  return p ? /* @__PURE__ */ R.createElement(T0, bn({}, y, {
    motionAppear: !0,
    visible: u,
    removeOnLeave: !0
  }), function(h) {
    var E = h.className;
    return /* @__PURE__ */ R.createElement("div", {
      style: {
        zIndex: f
      },
      className: Fn("".concat(l, "-mask"), E)
    });
  }) : null;
}
var tM = /* @__PURE__ */ R.memo(function(i) {
  var l = i.children;
  return l;
}, function(i, l) {
  return l.cache;
});
process.env.NODE_ENV !== "production" && (tM.displayName = "PopupContent");
var nM = /* @__PURE__ */ R.forwardRef(function(i, l) {
  var u = i.popup, f = i.className, p = i.prefixCls, y = i.style, h = i.target, E = i.onVisibleChanged, x = i.open, T = i.keepDom, N = i.fresh, _ = i.onClick, O = i.mask, D = i.arrow, z = i.arrowPos, P = i.align, A = i.motion, Y = i.maskMotion, V = i.forceRender, I = i.getPopupContainer, $ = i.autoDestroy, W = i.portal, re = i.zIndex, G = i.onMouseEnter, se = i.onMouseLeave, Te = i.onPointerEnter, le = i.ready, ge = i.offsetX, Ee = i.offsetY, ne = i.offsetR, fe = i.offsetB, Ce = i.onAlign, we = i.onPrepare, Ne = i.stretch, ee = i.targetWidth, de = i.targetHeight, ae = typeof u == "function" ? u() : u, ze = x || T, De = (I == null ? void 0 : I.length) > 0, ft = R.useState(!I || !De), dt = _e(ft, 2), At = dt[0], it = dt[1];
  if (Ia(function() {
    !At && De && h && it(!0);
  }, [At, De, h]), !At)
    return null;
  var Rt = "auto", st = {
    left: "-1000vw",
    top: "-1000vh",
    right: Rt,
    bottom: Rt
  };
  if (le || !x) {
    var Mt, Gt = P.points, Ze = P.dynamicInset || ((Mt = P._experimental) === null || Mt === void 0 ? void 0 : Mt.dynamicInset), Ft = Ze && Gt[0][1] === "r", Ot = Ze && Gt[0][0] === "b";
    Ft ? (st.right = ne, st.left = Rt) : (st.left = ge, st.right = Rt), Ot ? (st.bottom = fe, st.top = Rt) : (st.top = Ee, st.bottom = Rt);
  }
  var Se = {};
  return Ne && (Ne.includes("height") && de ? Se.height = de : Ne.includes("minHeight") && de && (Se.minHeight = de), Ne.includes("width") && ee ? Se.width = ee : Ne.includes("minWidth") && ee && (Se.minWidth = ee)), x || (Se.pointerEvents = "none"), /* @__PURE__ */ R.createElement(W, {
    open: V || ze,
    getContainer: I && function() {
      return I(h);
    },
    autoDestroy: $
  }, /* @__PURE__ */ R.createElement(E3, {
    prefixCls: p,
    open: x,
    zIndex: re,
    mask: O,
    motion: Y
  }), /* @__PURE__ */ R.createElement(av, {
    onResize: Ce,
    disabled: !x
  }, function(Et) {
    return /* @__PURE__ */ R.createElement(T0, bn({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: V,
      leavedClassName: "".concat(p, "-hidden")
    }, A, {
      onAppearPrepare: we,
      onEnterPrepare: we,
      visible: x,
      onVisibleChanged: function(_t) {
        var Wt;
        A == null || (Wt = A.onVisibleChanged) === null || Wt === void 0 || Wt.call(A, _t), E(_t);
      }
    }), function(Ct, _t) {
      var Wt = Ct.className, Qe = Ct.style, wt = Fn(p, Wt, f);
      return /* @__PURE__ */ R.createElement("div", {
        ref: pk(Et, l, _t),
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
      }, D && /* @__PURE__ */ R.createElement(b3, {
        prefixCls: p,
        arrow: D,
        arrowPos: z,
        align: P
      }), /* @__PURE__ */ R.createElement(tM, {
        cache: !x && !N
      }, ae));
    });
  }));
});
process.env.NODE_ENV !== "production" && (nM.displayName = "Popup");
var rM = /* @__PURE__ */ R.forwardRef(function(i, l) {
  var u = i.children, f = i.getTriggerDOMNode, p = m0(u), y = R.useCallback(function(E) {
    xE(l, f ? f(E) : E);
  }, [f]), h = h0(y, u.ref);
  return p ? /* @__PURE__ */ R.cloneElement(u, {
    ref: h
  }) : u;
});
process.env.NODE_ENV !== "production" && (rM.displayName = "TriggerWrapper");
var l_ = /* @__PURE__ */ R.createContext(null);
function u_(i) {
  return i ? Array.isArray(i) ? i : [i] : [];
}
function w3(i, l, u, f) {
  return R.useMemo(function() {
    var p = u_(u != null ? u : l), y = u_(f != null ? f : l), h = new Set(p), E = new Set(y);
    return i && (h.has("hover") && (h.delete("hover"), h.add("click")), E.has("hover") && (E.delete("hover"), E.add("click"))), [h, E];
  }, [i, l, u, f]);
}
function x3() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], u = arguments.length > 2 ? arguments[2] : void 0;
  return u ? i[0] === l[0] : i[0] === l[0] && i[1] === l[1];
}
function T3(i, l, u, f) {
  for (var p = u.points, y = Object.keys(i), h = 0; h < y.length; h += 1) {
    var E, x = y[h];
    if (x3((E = i[x]) === null || E === void 0 ? void 0 : E.points, p, f))
      return "".concat(l, "-placement-").concat(x);
  }
  return "";
}
function s_(i, l, u, f) {
  return l || (u ? {
    motionName: "".concat(i, "-").concat(u)
  } : f ? {
    motionName: f
  } : null);
}
function jh(i) {
  return i.ownerDocument.defaultView;
}
function Kb(i) {
  for (var l = [], u = i == null ? void 0 : i.parentElement, f = ["hidden", "scroll", "clip", "auto"]; u; ) {
    var p = jh(u).getComputedStyle(u), y = p.overflowX, h = p.overflowY, E = p.overflow;
    [y, h, E].some(function(x) {
      return f.includes(x);
    }) && l.push(u), u = u.parentElement;
  }
  return l;
}
function Dh(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(i) ? l : i;
}
function Sh(i) {
  return Dh(parseFloat(i), 0);
}
function c_(i, l) {
  var u = Re({}, i);
  return (l || []).forEach(function(f) {
    if (!(f instanceof HTMLBodyElement || f instanceof HTMLHtmlElement)) {
      var p = jh(f).getComputedStyle(f), y = p.overflow, h = p.overflowClipMargin, E = p.borderTopWidth, x = p.borderBottomWidth, T = p.borderLeftWidth, N = p.borderRightWidth, _ = f.getBoundingClientRect(), O = f.offsetHeight, D = f.clientHeight, z = f.offsetWidth, P = f.clientWidth, A = Sh(E), Y = Sh(x), V = Sh(T), I = Sh(N), $ = Dh(Math.round(_.width / z * 1e3) / 1e3), W = Dh(Math.round(_.height / O * 1e3) / 1e3), re = (z - P - V - I) * $, G = (O - D - A - Y) * W, se = A * W, Te = Y * W, le = V * $, ge = I * $, Ee = 0, ne = 0;
      if (y === "clip") {
        var fe = Sh(h);
        Ee = fe * $, ne = fe * W;
      }
      var Ce = _.x + le - Ee, we = _.y + se - ne, Ne = Ce + _.width + 2 * Ee - le - ge - re, ee = we + _.height + 2 * ne - se - Te - G;
      u.left = Math.max(u.left, Ce), u.top = Math.max(u.top, we), u.right = Math.min(u.right, Ne), u.bottom = Math.min(u.bottom, ee);
    }
  }), u;
}
function f_(i) {
  var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, u = "".concat(l), f = u.match(/^(.*)\%$/);
  return f ? i * (parseFloat(f[1]) / 100) : parseFloat(u);
}
function d_(i, l) {
  var u = l || [], f = _e(u, 2), p = f[0], y = f[1];
  return [f_(i.width, p), f_(i.height, y)];
}
function v_() {
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
function R3(i, l, u, f, p, y, h) {
  var E = R.useState({
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
  }), x = _e(E, 2), T = x[0], N = x[1], _ = R.useRef(0), O = R.useMemo(function() {
    return l ? Kb(l) : [];
  }, [l]), D = R.useRef({}), z = function() {
    D.current = {};
  };
  i || z();
  var P = Ll(function() {
    if (l && u && i) {
      let vr = function(Ea, nn) {
        var go = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : wt, Bi = ae.x + Ea, ct = ae.y + nn, Ni = Bi + Mt, zn = ct + st, qr = Math.max(Bi, go.left), Zr = Math.max(ct, go.top), yo = Math.min(Ni, go.right), Wn = Math.min(zn, go.bottom);
        return Math.max(0, (yo - qr) * (Wn - Zr));
      }, mo = function() {
        Ln = ae.y + xt, fr = Ln + st, Rr = ae.x + Jt, dr = Rr + Mt;
      };
      var V, I, $ = l, W = $.ownerDocument, re = jh($), G = re.getComputedStyle($), se = G.width, Te = G.height, le = G.position, ge = $.style.left, Ee = $.style.top, ne = $.style.right, fe = $.style.bottom, Ce = $.style.overflow, we = Re(Re({}, p[f]), y), Ne = W.createElement("div");
      (V = $.parentElement) === null || V === void 0 || V.appendChild(Ne), Ne.style.left = "".concat($.offsetLeft, "px"), Ne.style.top = "".concat($.offsetTop, "px"), Ne.style.position = le, Ne.style.height = "".concat($.offsetHeight, "px"), Ne.style.width = "".concat($.offsetWidth, "px"), $.style.left = "0", $.style.top = "0", $.style.right = "auto", $.style.bottom = "auto", $.style.overflow = "hidden";
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
      var ae = $.getBoundingClientRect(), ze = W.documentElement, De = ze.clientWidth, ft = ze.clientHeight, dt = ze.scrollWidth, At = ze.scrollHeight, it = ze.scrollTop, Rt = ze.scrollLeft, st = ae.height, Mt = ae.width, Gt = ee.height, Ze = ee.width, Ft = {
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
      var _t = Se === Ct, Wt = c_(Ot, O), Qe = c_(Ft, O), wt = Se === Et ? Qe : Wt, vt = _t ? Qe : wt;
      $.style.left = "auto", $.style.top = "auto", $.style.right = "0", $.style.bottom = "0";
      var ln = $.getBoundingClientRect();
      $.style.left = ge, $.style.top = Ee, $.style.right = ne, $.style.bottom = fe, $.style.overflow = Ce, (I = $.parentElement) === null || I === void 0 || I.removeChild(Ne);
      var Je = Dh(Math.round(Mt / parseFloat(se) * 1e3) / 1e3), Xt = Dh(Math.round(st / parseFloat(Te) * 1e3) / 1e3);
      if (Je === 0 || Xt === 0 || t0(u) && !zk(u))
        return;
      var qt = we.offset, $t = we.targetOffset, _n = d_(ae, qt), kn = _e(_n, 2), cn = kn[0], fn = kn[1], he = d_(ee, $t), Ie = _e(he, 2), We = Ie[0], zt = Ie[1];
      ee.x -= We, ee.y -= zt;
      var Pt = we.points || [], pt = _e(Pt, 2), ht = pt[0], Mn = pt[1], Ut = v_(Mn), Zt = v_(ht), Ht = jd(ee, Ut), tn = jd(ae, Zt), Kt = Re({}, we), Jt = Ht.x - tn.x + cn, xt = Ht.y - tn.y + fn, jt = vr(Jt, xt), Le = vr(Jt, xt, Qe), Ye = jd(ee, ["t", "l"]), It = jd(ae, ["t", "l"]), En = jd(ee, ["b", "r"]), nr = jd(ae, ["b", "r"]), On = we.overflow || {}, Qr = On.adjustX, rr = On.adjustY, ar = On.shiftX, yr = On.shiftY, Ca = function(nn) {
        return typeof nn == "boolean" ? nn : nn >= 0;
      }, Ln, fr, Rr, dr;
      mo();
      var $a = Ca(rr), oa = Zt[0] === Ut[0];
      if ($a && Zt[0] === "t" && (fr > vt.bottom || D.current.bt)) {
        var An = xt;
        oa ? An -= st - Gt : An = Ye.y - nr.y - fn;
        var Ha = vr(Jt, An), Jo = vr(Jt, An, Qe);
        // Of course use larger one
        Ha > jt || Ha === jt && (!_t || // Choose recommend one
        Jo >= Le) ? (D.current.bt = !0, xt = An, fn = -fn, Kt.points = [Ds(Zt, 0), Ds(Ut, 0)]) : D.current.bt = !1;
      }
      if ($a && Zt[0] === "b" && (Ln < vt.top || D.current.tb)) {
        var Bn = xt;
        oa ? Bn += st - Gt : Bn = En.y - It.y - fn;
        var vo = vr(Jt, Bn), Pl = vr(Jt, Bn, Qe);
        // Of course use larger one
        vo > jt || vo === jt && (!_t || // Choose recommend one
        Pl >= Le) ? (D.current.tb = !0, xt = Bn, fn = -fn, Kt.points = [Ds(Zt, 0), Ds(Ut, 0)]) : D.current.tb = !1;
      }
      var po = Ca(Qr), dn = Zt[1] === Ut[1];
      if (po && Zt[1] === "l" && (dr > vt.right || D.current.rl)) {
        var Fa = Jt;
        dn ? Fa -= Mt - Ze : Fa = Ye.x - nr.x - cn;
        var Xr = vr(Fa, xt), Nt = vr(Fa, xt, Qe);
        // Of course use larger one
        Xr > jt || Xr === jt && (!_t || // Choose recommend one
        Nt >= Le) ? (D.current.rl = !0, Jt = Fa, cn = -cn, Kt.points = [Ds(Zt, 1), Ds(Ut, 1)]) : D.current.rl = !1;
      }
      if (po && Zt[1] === "r" && (Rr < vt.left || D.current.lr)) {
        var _r = Jt;
        dn ? _r += Mt - Ze : _r = En.x - It.x - cn;
        var Vi = vr(_r, xt), la = vr(_r, xt, Qe);
        // Of course use larger one
        Vi > jt || Vi === jt && (!_t || // Choose recommend one
        la >= Le) ? (D.current.lr = !0, Jt = _r, cn = -cn, Kt.points = [Ds(Zt, 1), Ds(Ut, 1)]) : D.current.lr = !1;
      }
      mo();
      var Ur = ar === !0 ? 0 : ar;
      typeof Ur == "number" && (Rr < Qe.left && (Jt -= Rr - Qe.left - cn, ee.x + Ze < Qe.left + Ur && (Jt += ee.x - Qe.left + Ze - Ur)), dr > Qe.right && (Jt -= dr - Qe.right - cn, ee.x > Qe.right - Ur && (Jt += ee.x - Qe.right + Ur)));
      var ir = yr === !0 ? 0 : yr;
      typeof ir == "number" && (Ln < Qe.top && (xt -= Ln - Qe.top - fn, ee.y + Gt < Qe.top + ir && (xt += ee.y - Qe.top + Gt - ir)), fr > Qe.bottom && (xt -= fr - Qe.bottom - fn, ee.y > Qe.bottom - ir && (xt += ee.y - Qe.bottom + ir)));
      var Mi = ae.x + Jt, Xn = Mi + Mt, ba = ae.y + xt, ho = ba + st, Oi = ee.x, ua = Oi + Ze, ja = ee.y, un = ja + Gt, kt = Math.max(Mi, Oi), vn = Math.min(Xn, ua), qn = (kt + vn) / 2, or = qn - Mi, Va = Math.max(ba, ja), li = Math.min(ho, un), Ba = (Va + li) / 2, el = Ba - ba;
      h == null || h(l, Kt);
      var Wa = ln.right - ae.x - (Jt + ae.width), Vt = ln.bottom - ae.y - (xt + ae.height);
      N({
        ready: !0,
        offsetX: Jt / Je,
        offsetY: xt / Xt,
        offsetR: Wa / Je,
        offsetB: Vt / Xt,
        arrowX: or / Je,
        arrowY: el / Xt,
        scaleX: Je,
        scaleY: Xt,
        align: Kt
      });
    }
  }), A = function() {
    _.current += 1;
    var I = _.current;
    Promise.resolve().then(function() {
      _.current === I && P();
    });
  }, Y = function() {
    N(function(I) {
      return Re(Re({}, I), {}, {
        ready: !1
      });
    });
  };
  return Ia(Y, [f]), Ia(function() {
    i || Y();
  }, [i]), [T.ready, T.offsetX, T.offsetY, T.offsetR, T.offsetB, T.arrowX, T.arrowY, T.scaleX, T.scaleY, T.align, A];
}
function _3(i, l, u, f, p) {
  Ia(function() {
    if (i && l && u) {
      let _ = function() {
        f(), p();
      };
      var y = l, h = u, E = Kb(y), x = Kb(h), T = jh(h), N = new Set([T].concat(Tr(E), Tr(x)));
      return N.forEach(function(O) {
        O.addEventListener("scroll", _, {
          passive: !0
        });
      }), T.addEventListener("resize", _, {
        passive: !0
      }), f(), function() {
        N.forEach(function(O) {
          O.removeEventListener("scroll", _), T.removeEventListener("resize", _);
        });
      };
    }
  }, [i, l, u]);
}
function k3(i, l, u, f, p, y, h, E) {
  var x = R.useRef(i), T = R.useRef(!1);
  x.current !== i && (T.current = !0, x.current = i), R.useEffect(function() {
    var N = so(function() {
      T.current = !1;
    });
    return function() {
      so.cancel(N);
    };
  }, [i]), R.useEffect(function() {
    if (l && f && (!p || y)) {
      var N = function() {
        var le = !1, ge = function(fe) {
          var Ce = fe.target;
          le = h(Ce);
        }, Ee = function(fe) {
          var Ce = fe.target;
          !T.current && x.current && !le && !h(Ce) && E(!1);
        };
        return [ge, Ee];
      }, _ = N(), O = _e(_, 2), D = O[0], z = O[1], P = N(), A = _e(P, 2), Y = A[0], V = A[1], I = jh(f);
      I.addEventListener("mousedown", D, !0), I.addEventListener("click", z, !0), I.addEventListener("contextmenu", z, !0);
      var $ = o0(u);
      if ($ && ($.addEventListener("mousedown", Y, !0), $.addEventListener("click", V, !0), $.addEventListener("contextmenu", V, !0)), process.env.NODE_ENV !== "production") {
        var W, re, G = u == null || (W = u.getRootNode) === null || W === void 0 ? void 0 : W.call(u), se = (re = f.getRootNode) === null || re === void 0 ? void 0 : re.call(f);
        Zd(G === se, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        I.removeEventListener("mousedown", D, !0), I.removeEventListener("click", z, !0), I.removeEventListener("contextmenu", z, !0), $ && ($.removeEventListener("mousedown", Y, !0), $.removeEventListener("click", V, !0), $.removeEventListener("contextmenu", V, !0));
      };
    }
  }, [l, u, f, p, y]);
}
var M3 = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function O3() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : LE, l = /* @__PURE__ */ R.forwardRef(function(u, f) {
    var p = u.prefixCls, y = p === void 0 ? "rc-trigger-popup" : p, h = u.children, E = u.action, x = E === void 0 ? "hover" : E, T = u.showAction, N = u.hideAction, _ = u.popupVisible, O = u.defaultPopupVisible, D = u.onPopupVisibleChange, z = u.afterPopupVisibleChange, P = u.mouseEnterDelay, A = u.mouseLeaveDelay, Y = A === void 0 ? 0.1 : A, V = u.focusDelay, I = u.blurDelay, $ = u.mask, W = u.maskClosable, re = W === void 0 ? !0 : W, G = u.getPopupContainer, se = u.forceRender, Te = u.autoDestroy, le = u.destroyPopupOnHide, ge = u.popup, Ee = u.popupClassName, ne = u.popupStyle, fe = u.popupPlacement, Ce = u.builtinPlacements, we = Ce === void 0 ? {} : Ce, Ne = u.popupAlign, ee = u.zIndex, de = u.stretch, ae = u.getPopupClassNameFromAlign, ze = u.fresh, De = u.alignPoint, ft = u.onPopupClick, dt = u.onPopupAlign, At = u.arrow, it = u.popupMotion, Rt = u.maskMotion, st = u.popupTransitionName, Mt = u.popupAnimation, Gt = u.maskTransitionName, Ze = u.maskAnimation, Ft = u.className, Ot = u.getTriggerDOMNode, Se = tr(u, M3), Et = Te || le || !1, Ct = R.useState(!1), _t = _e(Ct, 2), Wt = _t[0], Qe = _t[1];
    Ia(function() {
      Qe(e3());
    }, []);
    var wt = R.useRef({}), vt = R.useContext(l_), ln = R.useMemo(function() {
      return {
        registerSubPopup: function(gt, sn) {
          wt.current[gt] = sn, vt == null || vt.registerSubPopup(gt, sn);
        }
      };
    }, [vt]), Je = J4(), Xt = R.useState(null), qt = _e(Xt, 2), $t = qt[0], _n = qt[1], kn = Ll(function(be) {
      t0(be) && $t !== be && _n(be), vt == null || vt.registerSubPopup(Je, be);
    }), cn = R.useState(null), fn = _e(cn, 2), he = fn[0], Ie = fn[1], We = R.useRef(null), zt = Ll(function(be) {
      t0(be) && he !== be && (Ie(be), We.current = be);
    }), Pt = R.Children.only(h), pt = (Pt == null ? void 0 : Pt.props) || {}, ht = {}, Mn = Ll(function(be) {
      var gt, sn, en = he;
      return (en == null ? void 0 : en.contains(be)) || ((gt = o0(en)) === null || gt === void 0 ? void 0 : gt.host) === be || be === en || ($t == null ? void 0 : $t.contains(be)) || ((sn = o0($t)) === null || sn === void 0 ? void 0 : sn.host) === be || be === $t || Object.values(wt.current).some(function(gn) {
        return (gn == null ? void 0 : gn.contains(be)) || be === gn;
      });
    }), Ut = s_(y, it, Mt, st), Zt = s_(y, Rt, Ze, Gt), Ht = R.useState(O || !1), tn = _e(Ht, 2), Kt = tn[0], Jt = tn[1], xt = _ != null ? _ : Kt, jt = Ll(function(be) {
      _ === void 0 && Jt(be);
    });
    Ia(function() {
      Jt(_ || !1);
    }, [_]);
    var Le = R.useRef(xt);
    Le.current = xt;
    var Ye = R.useRef([]);
    Ye.current = [];
    var It = Ll(function(be) {
      var gt;
      jt(be), ((gt = Ye.current[Ye.current.length - 1]) !== null && gt !== void 0 ? gt : xt) !== be && (Ye.current.push(be), D == null || D(be));
    }), En = R.useRef(), nr = function() {
      clearTimeout(En.current);
    }, On = function(gt) {
      var sn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      nr(), sn === 0 ? It(gt) : En.current = setTimeout(function() {
        It(gt);
      }, sn * 1e3);
    };
    R.useEffect(function() {
      return nr;
    }, []);
    var Qr = R.useState(!1), rr = _e(Qr, 2), ar = rr[0], yr = rr[1];
    Ia(function(be) {
      (!be || xt) && yr(!0);
    }, [xt]);
    var Ca = R.useState(null), Ln = _e(Ca, 2), fr = Ln[0], Rr = Ln[1], dr = R.useState([0, 0]), $a = _e(dr, 2), oa = $a[0], An = $a[1], Ha = function(gt) {
      An([gt.clientX, gt.clientY]);
    }, Jo = R3(xt, $t, De ? oa : he, fe, we, Ne, dt), Bn = _e(Jo, 11), vo = Bn[0], Pl = Bn[1], po = Bn[2], dn = Bn[3], Fa = Bn[4], Xr = Bn[5], Nt = Bn[6], _r = Bn[7], Vi = Bn[8], la = Bn[9], Ur = Bn[10], ir = w3(Wt, x, T, N), Mi = _e(ir, 2), Xn = Mi[0], ba = Mi[1], ho = Xn.has("click"), Oi = ba.has("click") || ba.has("contextMenu"), ua = Ll(function() {
      ar || Ur();
    }), ja = function() {
      Le.current && De && Oi && On(!1);
    };
    _3(xt, he, $t, ua, ja), Ia(function() {
      ua();
    }, [oa, fe]), Ia(function() {
      xt && !(we != null && we[fe]) && ua();
    }, [JSON.stringify(Ne)]);
    var un = R.useMemo(function() {
      var be = T3(we, y, la, De);
      return Fn(be, ae == null ? void 0 : ae(la));
    }, [la, ae, we, y, De]);
    R.useImperativeHandle(f, function() {
      return {
        nativeElement: We.current,
        forceAlign: ua
      };
    });
    var kt = R.useState(0), vn = _e(kt, 2), qn = vn[0], or = vn[1], Va = R.useState(0), li = _e(Va, 2), Ba = li[0], el = li[1], Wa = function() {
      if (de && he) {
        var gt = he.getBoundingClientRect();
        or(gt.width), el(gt.height);
      }
    }, Vt = function() {
      Wa(), ua();
    }, vr = function(gt) {
      yr(!1), Ur(), z == null || z(gt);
    }, mo = function() {
      return new Promise(function(gt) {
        Wa(), Rr(function() {
          return gt;
        });
      });
    };
    Ia(function() {
      fr && (Ur(), fr(), Rr(null));
    }, [fr]);
    function Ea(be, gt, sn, en) {
      ht[be] = function(gn) {
        var Ul;
        en == null || en(gn), On(gt, sn);
        for (var Wi = arguments.length, zu = new Array(Wi > 1 ? Wi - 1 : 0), Il = 1; Il < Wi; Il++)
          zu[Il - 1] = arguments[Il];
        (Ul = pt[be]) === null || Ul === void 0 || Ul.call.apply(Ul, [pt, gn].concat(zu));
      };
    }
    (ho || Oi) && (ht.onClick = function(be) {
      var gt;
      Le.current && Oi ? On(!1) : !Le.current && ho && (Ha(be), On(!0));
      for (var sn = arguments.length, en = new Array(sn > 1 ? sn - 1 : 0), gn = 1; gn < sn; gn++)
        en[gn - 1] = arguments[gn];
      (gt = pt.onClick) === null || gt === void 0 || gt.call.apply(gt, [pt, be].concat(en));
    }), k3(xt, Oi, he, $t, $, re, Mn, On);
    var nn = Xn.has("hover"), go = ba.has("hover"), Bi, ct;
    nn && (Ea("onMouseEnter", !0, P, function(be) {
      Ha(be);
    }), Ea("onPointerEnter", !0, P, function(be) {
      Ha(be);
    }), Bi = function(gt) {
      (xt || ar) && $t !== null && $t !== void 0 && $t.contains(gt.target) && On(!0, P);
    }, De && (ht.onMouseMove = function(be) {
      var gt;
      (gt = pt.onMouseMove) === null || gt === void 0 || gt.call(pt, be);
    })), go && (Ea("onMouseLeave", !1, Y), Ea("onPointerLeave", !1, Y), ct = function() {
      On(!1, Y);
    }), Xn.has("focus") && Ea("onFocus", !0, V), ba.has("focus") && Ea("onBlur", !1, I), Xn.has("contextMenu") && (ht.onContextMenu = function(be) {
      var gt;
      Le.current && ba.has("contextMenu") ? On(!1) : (Ha(be), On(!0)), be.preventDefault();
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
    var Zr = /* @__PURE__ */ R.cloneElement(Pt, Re(Re({}, Ni), zn)), yo = {
      x: Xr,
      y: Nt
    }, Wn = At ? Re({}, At !== !0 ? At : {}) : null;
    return /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(av, {
      disabled: !xt,
      ref: zt,
      onResize: Vt
    }, /* @__PURE__ */ R.createElement(rM, {
      getTriggerDOMNode: Ot
    }, Zr)), /* @__PURE__ */ R.createElement(l_.Provider, {
      value: ln
    }, /* @__PURE__ */ R.createElement(nM, {
      portal: i,
      ref: kn,
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
      mask: $,
      motion: Ut,
      maskMotion: Zt,
      onVisibleChanged: vr,
      onPrepare: mo,
      forceRender: se,
      autoDestroy: Et,
      getPopupContainer: G,
      align: la,
      arrow: Wn,
      arrowPos: yo,
      ready: vo,
      offsetX: Pl,
      offsetY: po,
      offsetR: dn,
      offsetB: Fa,
      onAlign: ua,
      stretch: de,
      targetWidth: qn / _r,
      targetHeight: Ba / Vi
    })));
  });
  return process.env.NODE_ENV !== "production" && (l.displayName = "Trigger"), l;
}
const aM = O3(LE);
var Ua = {
  adjustX: 1,
  adjustY: 1
}, N3 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ua
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ua
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ua
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ua
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: Ua
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: Ua
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: Ua
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: Ua
  }
}, D3 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: Ua
  },
  topRight: {
    points: ["br", "tr"],
    overflow: Ua
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: Ua
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: Ua
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: Ua
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: Ua
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: Ua
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: Ua
  }
};
function iM(i, l, u) {
  if (l)
    return l;
  if (u)
    return u[i] || u.other;
}
var L3 = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function A3(i) {
  var l = i.prefixCls, u = i.visible, f = i.children, p = i.popup, y = i.popupStyle, h = i.popupClassName, E = i.popupOffset, x = i.disabled, T = i.mode, N = i.onVisibleChange, _ = R.useContext(Xo), O = _.getPopupContainer, D = _.rtl, z = _.subMenuOpenDelay, P = _.subMenuCloseDelay, A = _.builtinPlacements, Y = _.triggerSubMenuAction, V = _.forceSubMenuRender, I = _.rootClassName, $ = _.motion, W = _.defaultMotions, re = R.useState(!1), G = _e(re, 2), se = G[0], Te = G[1], le = Re(D ? Re({}, D3) : Re({}, N3), A), ge = L3[T], Ee = iM(T, $, W), ne = R.useRef(Ee);
  T !== "inline" && (ne.current = Ee);
  var fe = Re(Re({}, ne.current), {}, {
    leavedClassName: "".concat(l, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), Ce = R.useRef();
  return R.useEffect(function() {
    return Ce.current = so(function() {
      Te(u);
    }), function() {
      so.cancel(Ce.current);
    };
  }, [u]), /* @__PURE__ */ R.createElement(aM, {
    prefixCls: l,
    popupClassName: Fn("".concat(l, "-popup"), tt({}, "".concat(l, "-rtl"), D), h, I),
    stretch: T === "horizontal" ? "minWidth" : null,
    getPopupContainer: O,
    builtinPlacements: le,
    popupPlacement: ge,
    popupVisible: se,
    popup: p,
    popupStyle: y,
    popupAlign: E && {
      offset: E
    },
    action: x ? [] : [Y],
    mouseEnterDelay: z,
    mouseLeaveDelay: P,
    onPopupVisibleChange: N,
    forceRender: V,
    popupMotion: fe,
    fresh: !0
  }, f);
}
function z3(i) {
  var l = i.id, u = i.open, f = i.keyPath, p = i.children, y = "inline", h = R.useContext(Xo), E = h.prefixCls, x = h.forceSubMenuRender, T = h.motion, N = h.defaultMotions, _ = h.mode, O = R.useRef(!1);
  O.current = _ === y;
  var D = R.useState(!O.current), z = _e(D, 2), P = z[0], A = z[1], Y = O.current ? u : !1;
  R.useEffect(function() {
    O.current && A(!1);
  }, [_]);
  var V = Re({}, iM(y, T, N));
  f.length > 1 && (V.motionAppear = !1);
  var I = V.onVisibleChanged;
  return V.onVisibleChanged = function($) {
    return !O.current && !$ && A(!0), I == null ? void 0 : I($);
  }, P ? null : /* @__PURE__ */ R.createElement(Oh, {
    mode: y,
    locked: !O.current
  }, /* @__PURE__ */ R.createElement(T0, bn({
    visible: Y
  }, V, {
    forceRender: x,
    removeOnLeave: !1,
    leavedClassName: "".concat(E, "-hidden")
  }), function($) {
    var W = $.className, re = $.style;
    return /* @__PURE__ */ R.createElement(OE, {
      id: l,
      className: W,
      style: re
    }, p);
  }));
}
var P3 = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], U3 = ["active"], I3 = function(l) {
  var u, f = l.style, p = l.className, y = l.title, h = l.eventKey, E = l.warnKey, x = l.disabled, T = l.internalPopupClose, N = l.children, _ = l.itemIcon, O = l.expandIcon, D = l.popupClassName, z = l.popupOffset, P = l.popupStyle, A = l.onClick, Y = l.onMouseEnter, V = l.onMouseLeave, I = l.onTitleClick, $ = l.onTitleMouseEnter, W = l.onTitleMouseLeave, re = tr(l, P3), G = Nk(h), se = R.useContext(Xo), Te = se.prefixCls, le = se.mode, ge = se.openKeys, Ee = se.disabled, ne = se.overflowDisabled, fe = se.activeKey, Ce = se.selectedKeys, we = se.itemIcon, Ne = se.expandIcon, ee = se.onItemClick, de = se.onOpenChange, ae = se.onActive, ze = R.useContext(_E), De = ze._internalRenderSubMenuItem, ft = R.useContext(Ak), dt = ft.isSubPathKey, At = Fh(), it = "".concat(Te, "-submenu"), Rt = Ee || x, st = R.useRef(), Mt = R.useRef();
  process.env.NODE_ENV !== "production" && E && oi(!1, "SubMenu should not leave undefined `key`.");
  var Gt = _ != null ? _ : we, Ze = O != null ? O : Ne, Ft = ge.includes(h), Ot = !ne && Ft, Se = dt(Ce, h), Et = Uk(h, Rt, $, W), Ct = Et.active, _t = tr(Et, U3), Wt = R.useState(!1), Qe = _e(Wt, 2), wt = Qe[0], vt = Qe[1], ln = function(ht) {
    Rt || vt(ht);
  }, Je = function(ht) {
    ln(!0), Y == null || Y({
      key: h,
      domEvent: ht
    });
  }, Xt = function(ht) {
    ln(!1), V == null || V({
      key: h,
      domEvent: ht
    });
  }, qt = R.useMemo(function() {
    return Ct || (le !== "inline" ? wt || dt([fe], h) : !1);
  }, [le, Ct, fe, wt, h, dt]), $t = Ik(At.length), _n = function(ht) {
    Rt || (I == null || I({
      key: h,
      domEvent: ht
    }), le === "inline" && de(h, !Ft));
  }, kn = Eh(function(pt) {
    A == null || A(i0(pt)), ee(pt);
  }), cn = function(ht) {
    le !== "inline" && de(h, ht);
  }, fn = function() {
    ae(h);
  }, he = G && "".concat(G, "-popup"), Ie = /* @__PURE__ */ R.createElement("div", bn({
    role: "menuitem",
    style: $t,
    className: "".concat(it, "-title"),
    tabIndex: Rt ? null : -1,
    ref: st,
    title: typeof y == "string" ? y : null,
    "data-menu-id": ne && G ? null : G,
    "aria-expanded": Ot,
    "aria-haspopup": !0,
    "aria-controls": he,
    "aria-disabled": Rt,
    onClick: _n,
    onFocus: fn
  }, _t), y, /* @__PURE__ */ R.createElement($k, {
    icon: le !== "horizontal" ? Ze : void 0,
    props: Re(Re({}, l), {}, {
      isOpen: Ot,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ R.createElement("i", {
    className: "".concat(it, "-arrow")
  }))), We = R.useRef(le);
  if (le !== "inline" && At.length > 1 ? We.current = "vertical" : We.current = le, !ne) {
    var zt = We.current;
    Ie = /* @__PURE__ */ R.createElement(A3, {
      mode: zt,
      prefixCls: it,
      visible: !T && Ot && le !== "inline",
      popupClassName: D,
      popupOffset: z,
      popupStyle: P,
      popup: /* @__PURE__ */ R.createElement(
        Oh,
        {
          mode: zt === "horizontal" ? "vertical" : zt
        },
        /* @__PURE__ */ R.createElement(OE, {
          id: he,
          ref: Mt
        }, N)
      ),
      disabled: Rt,
      onVisibleChange: cn
    }, Ie);
  }
  var Pt = /* @__PURE__ */ R.createElement(Du.Item, bn({
    role: "none"
  }, re, {
    component: "li",
    style: f,
    className: Fn(it, "".concat(it, "-").concat(le), p, (u = {}, tt(u, "".concat(it, "-open"), Ot), tt(u, "".concat(it, "-active"), qt), tt(u, "".concat(it, "-selected"), Se), tt(u, "".concat(it, "-disabled"), Rt), u)),
    onMouseEnter: Je,
    onMouseLeave: Xt
  }), Ie, !ne && /* @__PURE__ */ R.createElement(z3, {
    id: he,
    open: Ot,
    keyPath: At
  }, N));
  return De && (Pt = De(Pt, l, {
    selected: Se,
    active: qt,
    open: Ot,
    disabled: Rt
  })), /* @__PURE__ */ R.createElement(Oh, {
    onItemClick: kn,
    mode: le === "horizontal" ? "vertical" : le,
    itemIcon: Gt,
    expandIcon: Ze
  }, Pt);
};
function zE(i) {
  var l = i.eventKey, u = i.children, f = Fh(l), p = NE(u, f), y = b0();
  R.useEffect(function() {
    if (y)
      return y.registerPath(l, f), function() {
        y.unregisterPath(l, f);
      };
  }, [f]);
  var h;
  return y ? h = p : h = /* @__PURE__ */ R.createElement(I3, i, p), /* @__PURE__ */ R.createElement(Lk.Provider, {
    value: f
  }, h);
}
var $3 = ["className", "title", "eventKey", "children"], H3 = ["children"], F3 = function(l) {
  var u = l.className, f = l.title;
  l.eventKey;
  var p = l.children, y = tr(l, $3), h = R.useContext(Xo), E = h.prefixCls, x = "".concat(E, "-item-group");
  return /* @__PURE__ */ R.createElement("li", bn({
    role: "presentation"
  }, y, {
    onClick: function(N) {
      return N.stopPropagation();
    },
    className: Fn(x, u)
  }), /* @__PURE__ */ R.createElement("div", {
    role: "presentation",
    className: "".concat(x, "-title"),
    title: typeof f == "string" ? f : void 0
  }, f), /* @__PURE__ */ R.createElement("ul", {
    role: "group",
    className: "".concat(x, "-list")
  }, p));
};
function oM(i) {
  var l = i.children, u = tr(i, H3), f = Fh(u.eventKey), p = NE(l, f), y = b0();
  return y ? p : /* @__PURE__ */ R.createElement(F3, E0(u, ["warnKey"]), p);
}
function lM(i) {
  var l = i.className, u = i.style, f = R.useContext(Xo), p = f.prefixCls, y = b0();
  return y ? null : /* @__PURE__ */ R.createElement("li", {
    role: "separator",
    className: Fn("".concat(p, "-item-divider"), l),
    style: u
  });
}
var j3 = ["label", "children", "key", "type"];
function Gb(i) {
  return (i || []).map(function(l, u) {
    if (l && cr(l) === "object") {
      var f = l, p = f.label, y = f.children, h = f.key, E = f.type, x = tr(f, j3), T = h != null ? h : "tmp-".concat(u);
      return y || E === "group" ? E === "group" ? /* @__PURE__ */ R.createElement(oM, bn({
        key: T
      }, x, {
        title: p
      }), Gb(y)) : /* @__PURE__ */ R.createElement(zE, bn({
        key: T
      }, x, {
        title: p
      }), Gb(y)) : E === "divider" ? /* @__PURE__ */ R.createElement(lM, bn({
        key: T
      }, x)) : /* @__PURE__ */ R.createElement(w0, bn({
        key: T
      }, x), p);
    }
    return null;
  }).filter(function(l) {
    return l;
  });
}
function V3(i, l, u) {
  var f = i;
  return l && (f = Gb(l)), NE(f, u);
}
var B3 = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"], Vd = [], W3 = /* @__PURE__ */ R.forwardRef(function(i, l) {
  var u, f, p = i, y = p.prefixCls, h = y === void 0 ? "rc-menu" : y, E = p.rootClassName, x = p.style, T = p.className, N = p.tabIndex, _ = N === void 0 ? 0 : N, O = p.items, D = p.children, z = p.direction, P = p.id, A = p.mode, Y = A === void 0 ? "vertical" : A, V = p.inlineCollapsed, I = p.disabled, $ = p.disabledOverflow, W = p.subMenuOpenDelay, re = W === void 0 ? 0.1 : W, G = p.subMenuCloseDelay, se = G === void 0 ? 0.1 : G, Te = p.forceSubMenuRender, le = p.defaultOpenKeys, ge = p.openKeys, Ee = p.activeKey, ne = p.defaultActiveFirst, fe = p.selectable, Ce = fe === void 0 ? !0 : fe, we = p.multiple, Ne = we === void 0 ? !1 : we, ee = p.defaultSelectedKeys, de = p.selectedKeys, ae = p.onSelect, ze = p.onDeselect, De = p.inlineIndent, ft = De === void 0 ? 24 : De, dt = p.motion, At = p.defaultMotions, it = p.triggerSubMenuAction, Rt = it === void 0 ? "hover" : it, st = p.builtinPlacements, Mt = p.itemIcon, Gt = p.expandIcon, Ze = p.overflowedIndicator, Ft = Ze === void 0 ? "..." : Ze, Ot = p.overflowedIndicatorPopupClassName, Se = p.getPopupContainer, Et = p.onClick, Ct = p.onOpenChange, _t = p.onKeyDown, Wt = p.openAnimation, Qe = p.openTransitionName, wt = p._internalRenderMenuItem, vt = p._internalRenderSubMenuItem, ln = tr(p, B3), Je = R.useMemo(function() {
    return V3(D, O, Vd);
  }, [D, O]), Xt = R.useState(!1), qt = _e(Xt, 2), $t = qt[0], _n = qt[1], kn = R.useRef(), cn = O4(P), fn = z === "rtl";
  process.env.NODE_ENV !== "production" && oi(!Wt && !Qe, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var he = xh(le, {
    value: ge,
    postState: function(kt) {
      return kt || Vd;
    }
  }), Ie = _e(he, 2), We = Ie[0], zt = Ie[1], Pt = function(kt) {
    var vn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function qn() {
      zt(kt), Ct == null || Ct(kt);
    }
    vn ? v0.flushSync(qn) : qn();
  }, pt = R.useState(We), ht = _e(pt, 2), Mn = ht[0], Ut = ht[1], Zt = R.useRef(!1), Ht = R.useMemo(function() {
    return (Y === "inline" || Y === "vertical") && V ? ["vertical", V] : [Y, !1];
  }, [Y, V]), tn = _e(Ht, 2), Kt = tn[0], Jt = tn[1], xt = Kt === "inline", jt = R.useState(Kt), Le = _e(jt, 2), Ye = Le[0], It = Le[1], En = R.useState(Jt), nr = _e(En, 2), On = nr[0], Qr = nr[1];
  R.useEffect(function() {
    It(Kt), Qr(Jt), Zt.current && (xt ? zt(Mn) : Pt(Vd));
  }, [Kt, Jt]);
  var rr = R.useState(0), ar = _e(rr, 2), yr = ar[0], Ca = ar[1], Ln = yr >= Je.length - 1 || Ye !== "horizontal" || $;
  R.useEffect(function() {
    xt && Ut(We);
  }, [We]), R.useEffect(function() {
    return Zt.current = !0, function() {
      Zt.current = !1;
    };
  }, []);
  var fr = k4(), Rr = fr.registerPath, dr = fr.unregisterPath, $a = fr.refreshOverflowKeys, oa = fr.isSubPathKey, An = fr.getKeyPath, Ha = fr.getKeys, Jo = fr.getSubPathKeys, Bn = R.useMemo(function() {
    return {
      registerPath: Rr,
      unregisterPath: dr
    };
  }, [Rr, dr]), vo = R.useMemo(function() {
    return {
      isSubPathKey: oa
    };
  }, [oa]);
  R.useEffect(function() {
    $a(Ln ? Vd : Je.slice(yr + 1).map(function(un) {
      return un.key;
    }));
  }, [yr, Ln]);
  var Pl = xh(Ee || ne && ((u = Je[0]) === null || u === void 0 ? void 0 : u.key), {
    value: Ee
  }), po = _e(Pl, 2), dn = po[0], Fa = po[1], Xr = Eh(function(un) {
    Fa(un);
  }), Nt = Eh(function() {
    Fa(void 0);
  });
  ek(l, function() {
    return {
      list: kn.current,
      focus: function(kt) {
        var vn, qn = Ha(), or = $b(qn, cn), Va = or.elements, li = or.key2element, Ba = or.element2key, el = kE(kn.current, Va), Wa = dn != null ? dn : el[0] ? Ba.get(el[0]) : (vn = Je.find(function(mo) {
          return !mo.props.disabled;
        })) === null || vn === void 0 ? void 0 : vn.key, Vt = li.get(Wa);
        if (Wa && Vt) {
          var vr;
          Vt == null || (vr = Vt.focus) === null || vr === void 0 || vr.call(Vt, kt);
        }
      }
    };
  });
  var _r = xh(ee || [], {
    value: de,
    // Legacy convert key to array
    postState: function(kt) {
      return Array.isArray(kt) ? kt : kt == null ? Vd : [kt];
    }
  }), Vi = _e(_r, 2), la = Vi[0], Ur = Vi[1], ir = function(kt) {
    if (Ce) {
      var vn = kt.key, qn = la.includes(vn), or;
      Ne ? qn ? or = la.filter(function(li) {
        return li !== vn;
      }) : or = [].concat(Tr(la), [vn]) : or = [vn], Ur(or);
      var Va = Re(Re({}, kt), {}, {
        selectedKeys: or
      });
      qn ? ze == null || ze(Va) : ae == null || ae(Va);
    }
    !Ne && We.length && Ye !== "inline" && Pt(Vd);
  }, Mi = Eh(function(un) {
    Et == null || Et(i0(un)), ir(un);
  }), Xn = Eh(function(un, kt) {
    var vn = We.filter(function(or) {
      return or !== un;
    });
    if (kt)
      vn.push(un);
    else if (Ye !== "inline") {
      var qn = Jo(un);
      vn = vn.filter(function(or) {
        return !qn.has(or);
      });
    }
    RE(We, vn, !0) || Pt(vn, !0);
  }), ba = function(kt, vn) {
    var qn = vn != null ? vn : !We.includes(kt);
    Xn(kt, qn);
  }, ho = T4(Ye, dn, fn, cn, kn, Ha, An, Fa, ba, _t);
  R.useEffect(function() {
    _n(!0);
  }, []);
  var Oi = R.useMemo(function() {
    return {
      _internalRenderMenuItem: wt,
      _internalRenderSubMenuItem: vt
    };
  }, [wt, vt]), ua = Ye !== "horizontal" || $ ? Je : (
    // Need wrap for overflow dropdown that do not response for open
    Je.map(function(un, kt) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ R.createElement(Oh, {
          key: un.key,
          overflowDisabled: kt > yr
        }, un)
      );
    })
  ), ja = /* @__PURE__ */ R.createElement(Du, bn({
    id: P,
    ref: kn,
    prefixCls: "".concat(h, "-overflow"),
    component: "ul",
    itemComponent: w0,
    className: Fn(h, "".concat(h, "-root"), "".concat(h, "-").concat(Ye), T, (f = {}, tt(f, "".concat(h, "-inline-collapsed"), On), tt(f, "".concat(h, "-rtl"), fn), f), E),
    dir: z,
    style: x,
    role: "menu",
    tabIndex: _,
    data: ua,
    renderRawItem: function(kt) {
      return kt;
    },
    renderRawRest: function(kt) {
      var vn = kt.length, qn = vn ? Je.slice(-vn) : null;
      return /* @__PURE__ */ R.createElement(zE, {
        eventKey: Hb,
        title: Ft,
        disabled: Ln,
        internalPopupClose: vn === 0,
        popupClassName: Ot
      }, qn);
    },
    maxCount: Ye !== "horizontal" || $ ? Du.INVALIDATE : Du.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(kt) {
      Ca(kt);
    },
    onKeyDown: ho
  }, ln));
  return /* @__PURE__ */ R.createElement(_E.Provider, {
    value: Oi
  }, /* @__PURE__ */ R.createElement(Mk.Provider, {
    value: cn
  }, /* @__PURE__ */ R.createElement(Oh, {
    prefixCls: h,
    rootClassName: E,
    mode: Ye,
    openKeys: We,
    rtl: fn,
    disabled: I,
    motion: $t ? dt : null,
    defaultMotions: $t ? At : null,
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
  }, /* @__PURE__ */ R.createElement(Ak.Provider, {
    value: vo
  }, ja), /* @__PURE__ */ R.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ R.createElement(Dk.Provider, {
    value: Bn
  }, Je)))));
}), R0 = W3;
R0.Item = w0;
R0.SubMenu = zE;
R0.ItemGroup = oM;
R0.Divider = lM;
var K3 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" };
const G3 = K3;
function Sa(i, l) {
  Y3(i) && (i = "100%");
  var u = Q3(i);
  return i = l === 360 ? i : Math.min(l, Math.max(0, parseFloat(i))), u && (i = parseInt(String(i * l), 10) / 100), Math.abs(i - l) < 1e-6 ? 1 : (l === 360 ? i = (i < 0 ? i % l + l : i % l) / parseFloat(String(l)) : i = i % l / parseFloat(String(l)), i);
}
function $y(i) {
  return Math.min(1, Math.max(0, i));
}
function Y3(i) {
  return typeof i == "string" && i.indexOf(".") !== -1 && parseFloat(i) === 1;
}
function Q3(i) {
  return typeof i == "string" && i.indexOf("%") !== -1;
}
function uM(i) {
  return i = parseFloat(i), (isNaN(i) || i < 0 || i > 1) && (i = 1), i;
}
function Hy(i) {
  return i <= 1 ? "".concat(Number(i) * 100, "%") : i;
}
function Kc(i) {
  return i.length === 1 ? "0" + i : String(i);
}
function X3(i, l, u) {
  return {
    r: Sa(i, 255) * 255,
    g: Sa(l, 255) * 255,
    b: Sa(u, 255) * 255
  };
}
function p_(i, l, u) {
  i = Sa(i, 255), l = Sa(l, 255), u = Sa(u, 255);
  var f = Math.max(i, l, u), p = Math.min(i, l, u), y = 0, h = 0, E = (f + p) / 2;
  if (f === p)
    h = 0, y = 0;
  else {
    var x = f - p;
    switch (h = E > 0.5 ? x / (2 - f - p) : x / (f + p), f) {
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
  return { h: y, s: h, l: E };
}
function hb(i, l, u) {
  return u < 0 && (u += 1), u > 1 && (u -= 1), u < 1 / 6 ? i + (l - i) * (6 * u) : u < 1 / 2 ? l : u < 2 / 3 ? i + (l - i) * (2 / 3 - u) * 6 : i;
}
function q3(i, l, u) {
  var f, p, y;
  if (i = Sa(i, 360), l = Sa(l, 100), u = Sa(u, 100), l === 0)
    p = u, y = u, f = u;
  else {
    var h = u < 0.5 ? u * (1 + l) : u + l - u * l, E = 2 * u - h;
    f = hb(E, h, i + 1 / 3), p = hb(E, h, i), y = hb(E, h, i - 1 / 3);
  }
  return { r: f * 255, g: p * 255, b: y * 255 };
}
function Yb(i, l, u) {
  i = Sa(i, 255), l = Sa(l, 255), u = Sa(u, 255);
  var f = Math.max(i, l, u), p = Math.min(i, l, u), y = 0, h = f, E = f - p, x = f === 0 ? 0 : E / f;
  if (f === p)
    y = 0;
  else {
    switch (f) {
      case i:
        y = (l - u) / E + (l < u ? 6 : 0);
        break;
      case l:
        y = (u - i) / E + 2;
        break;
      case u:
        y = (i - l) / E + 4;
        break;
    }
    y /= 6;
  }
  return { h: y, s: x, v: h };
}
function Z3(i, l, u) {
  i = Sa(i, 360) * 6, l = Sa(l, 100), u = Sa(u, 100);
  var f = Math.floor(i), p = i - f, y = u * (1 - l), h = u * (1 - p * l), E = u * (1 - (1 - p) * l), x = f % 6, T = [u, h, y, y, E, u][x], N = [E, u, u, h, y, y][x], _ = [y, y, E, u, u, h][x];
  return { r: T * 255, g: N * 255, b: _ * 255 };
}
function Qb(i, l, u, f) {
  var p = [
    Kc(Math.round(i).toString(16)),
    Kc(Math.round(l).toString(16)),
    Kc(Math.round(u).toString(16))
  ];
  return f && p[0].startsWith(p[0].charAt(1)) && p[1].startsWith(p[1].charAt(1)) && p[2].startsWith(p[2].charAt(1)) ? p[0].charAt(0) + p[1].charAt(0) + p[2].charAt(0) : p.join("");
}
function J3(i, l, u, f, p) {
  var y = [
    Kc(Math.round(i).toString(16)),
    Kc(Math.round(l).toString(16)),
    Kc(Math.round(u).toString(16)),
    Kc(e6(f))
  ];
  return p && y[0].startsWith(y[0].charAt(1)) && y[1].startsWith(y[1].charAt(1)) && y[2].startsWith(y[2].charAt(1)) && y[3].startsWith(y[3].charAt(1)) ? y[0].charAt(0) + y[1].charAt(0) + y[2].charAt(0) + y[3].charAt(0) : y.join("");
}
function e6(i) {
  return Math.round(parseFloat(i) * 255).toString(16);
}
function h_(i) {
  return Fi(i) / 255;
}
function Fi(i) {
  return parseInt(i, 16);
}
function t6(i) {
  return {
    r: i >> 16,
    g: (i & 65280) >> 8,
    b: i & 255
  };
}
var Xb = {
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
  var l = { r: 0, g: 0, b: 0 }, u = 1, f = null, p = null, y = null, h = !1, E = !1;
  return typeof i == "string" && (i = a6(i)), typeof i == "object" && (Ru(i.r) && Ru(i.g) && Ru(i.b) ? (l = X3(i.r, i.g, i.b), h = !0, E = String(i.r).substr(-1) === "%" ? "prgb" : "rgb") : Ru(i.h) && Ru(i.s) && Ru(i.v) ? (f = Hy(i.s), p = Hy(i.v), l = Z3(i.h, f, p), h = !0, E = "hsv") : Ru(i.h) && Ru(i.s) && Ru(i.l) && (f = Hy(i.s), y = Hy(i.l), l = q3(i.h, f, y), h = !0, E = "hsl"), Object.prototype.hasOwnProperty.call(i, "a") && (u = i.a)), u = uM(u), {
    ok: h,
    format: i.format || E,
    r: Math.min(255, Math.max(l.r, 0)),
    g: Math.min(255, Math.max(l.g, 0)),
    b: Math.min(255, Math.max(l.b, 0)),
    a: u
  };
}
var n6 = "[-\\+]?\\d+%?", r6 = "[-\\+]?\\d*\\.\\d+%?", Ls = "(?:".concat(r6, ")|(?:").concat(n6, ")"), mb = "[\\s|\\(]+(".concat(Ls, ")[,|\\s]+(").concat(Ls, ")[,|\\s]+(").concat(Ls, ")\\s*\\)?"), gb = "[\\s|\\(]+(".concat(Ls, ")[,|\\s]+(").concat(Ls, ")[,|\\s]+(").concat(Ls, ")[,|\\s]+(").concat(Ls, ")\\s*\\)?"), Ko = {
  CSS_UNIT: new RegExp(Ls),
  rgb: new RegExp("rgb" + mb),
  rgba: new RegExp("rgba" + gb),
  hsl: new RegExp("hsl" + mb),
  hsla: new RegExp("hsla" + gb),
  hsv: new RegExp("hsv" + mb),
  hsva: new RegExp("hsva" + gb),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function a6(i) {
  if (i = i.trim().toLowerCase(), i.length === 0)
    return !1;
  var l = !1;
  if (Xb[i])
    i = Xb[i], l = !0;
  else if (i === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var u = Ko.rgb.exec(i);
  return u ? { r: u[1], g: u[2], b: u[3] } : (u = Ko.rgba.exec(i), u ? { r: u[1], g: u[2], b: u[3], a: u[4] } : (u = Ko.hsl.exec(i), u ? { h: u[1], s: u[2], l: u[3] } : (u = Ko.hsla.exec(i), u ? { h: u[1], s: u[2], l: u[3], a: u[4] } : (u = Ko.hsv.exec(i), u ? { h: u[1], s: u[2], v: u[3] } : (u = Ko.hsva.exec(i), u ? { h: u[1], s: u[2], v: u[3], a: u[4] } : (u = Ko.hex8.exec(i), u ? {
    r: Fi(u[1]),
    g: Fi(u[2]),
    b: Fi(u[3]),
    a: h_(u[4]),
    format: l ? "name" : "hex8"
  } : (u = Ko.hex6.exec(i), u ? {
    r: Fi(u[1]),
    g: Fi(u[2]),
    b: Fi(u[3]),
    format: l ? "name" : "hex"
  } : (u = Ko.hex4.exec(i), u ? {
    r: Fi(u[1] + u[1]),
    g: Fi(u[2] + u[2]),
    b: Fi(u[3] + u[3]),
    a: h_(u[4] + u[4]),
    format: l ? "name" : "hex8"
  } : (u = Ko.hex3.exec(i), u ? {
    r: Fi(u[1] + u[1]),
    g: Fi(u[2] + u[2]),
    b: Fi(u[3] + u[3]),
    format: l ? "name" : "hex"
  } : !1)))))))));
}
function Ru(i) {
  return !!Ko.CSS_UNIT.exec(String(i));
}
var ji = (
  /** @class */
  function() {
    function i(l, u) {
      l === void 0 && (l = ""), u === void 0 && (u = {});
      var f;
      if (l instanceof i)
        return l;
      typeof l == "number" && (l = t6(l)), this.originalInput = l;
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
      var l = this.toRgb(), u, f, p, y = l.r / 255, h = l.g / 255, E = l.b / 255;
      return y <= 0.03928 ? u = y / 12.92 : u = Math.pow((y + 0.055) / 1.055, 2.4), h <= 0.03928 ? f = h / 12.92 : f = Math.pow((h + 0.055) / 1.055, 2.4), E <= 0.03928 ? p = E / 12.92 : p = Math.pow((E + 0.055) / 1.055, 2.4), 0.2126 * u + 0.7152 * f + 0.0722 * p;
    }, i.prototype.getAlpha = function() {
      return this.a;
    }, i.prototype.setAlpha = function(l) {
      return this.a = uM(l), this.roundA = Math.round(100 * this.a) / 100, this;
    }, i.prototype.isMonochrome = function() {
      var l = this.toHsl().s;
      return l === 0;
    }, i.prototype.toHsv = function() {
      var l = Yb(this.r, this.g, this.b);
      return { h: l.h * 360, s: l.s, v: l.v, a: this.a };
    }, i.prototype.toHsvString = function() {
      var l = Yb(this.r, this.g, this.b), u = Math.round(l.h * 360), f = Math.round(l.s * 100), p = Math.round(l.v * 100);
      return this.a === 1 ? "hsv(".concat(u, ", ").concat(f, "%, ").concat(p, "%)") : "hsva(".concat(u, ", ").concat(f, "%, ").concat(p, "%, ").concat(this.roundA, ")");
    }, i.prototype.toHsl = function() {
      var l = p_(this.r, this.g, this.b);
      return { h: l.h * 360, s: l.s, l: l.l, a: this.a };
    }, i.prototype.toHslString = function() {
      var l = p_(this.r, this.g, this.b), u = Math.round(l.h * 360), f = Math.round(l.s * 100), p = Math.round(l.l * 100);
      return this.a === 1 ? "hsl(".concat(u, ", ").concat(f, "%, ").concat(p, "%)") : "hsla(".concat(u, ", ").concat(f, "%, ").concat(p, "%, ").concat(this.roundA, ")");
    }, i.prototype.toHex = function(l) {
      return l === void 0 && (l = !1), Qb(this.r, this.g, this.b, l);
    }, i.prototype.toHexString = function(l) {
      return l === void 0 && (l = !1), "#" + this.toHex(l);
    }, i.prototype.toHex8 = function(l) {
      return l === void 0 && (l = !1), J3(this.r, this.g, this.b, this.a, l);
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
      for (var l = "#" + Qb(this.r, this.g, this.b, !1), u = 0, f = Object.entries(Xb); u < f.length; u++) {
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
      return u.l += l / 100, u.l = $y(u.l), new i(u);
    }, i.prototype.brighten = function(l) {
      l === void 0 && (l = 10);
      var u = this.toRgb();
      return u.r = Math.max(0, Math.min(255, u.r - Math.round(255 * -(l / 100)))), u.g = Math.max(0, Math.min(255, u.g - Math.round(255 * -(l / 100)))), u.b = Math.max(0, Math.min(255, u.b - Math.round(255 * -(l / 100)))), new i(u);
    }, i.prototype.darken = function(l) {
      l === void 0 && (l = 10);
      var u = this.toHsl();
      return u.l -= l / 100, u.l = $y(u.l), new i(u);
    }, i.prototype.tint = function(l) {
      return l === void 0 && (l = 10), this.mix("white", l);
    }, i.prototype.shade = function(l) {
      return l === void 0 && (l = 10), this.mix("black", l);
    }, i.prototype.desaturate = function(l) {
      l === void 0 && (l = 10);
      var u = this.toHsl();
      return u.s -= l / 100, u.s = $y(u.s), new i(u);
    }, i.prototype.saturate = function(l) {
      l === void 0 && (l = 10);
      var u = this.toHsl();
      return u.s += l / 100, u.s = $y(u.s), new i(u);
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
      for (var u = this.toHsv(), f = u.h, p = u.s, y = u.v, h = [], E = 1 / l; l--; )
        h.push(new i({ h: f, s: p, v: y })), y = (y + E) % 1;
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
), Fy = 2, m_ = 0.16, i6 = 0.05, o6 = 0.05, l6 = 0.15, sM = 5, cM = 4, u6 = [{
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
function g_(i) {
  var l = i.r, u = i.g, f = i.b, p = Yb(l, u, f);
  return {
    h: p.h * 360,
    s: p.s,
    v: p.v
  };
}
function jy(i) {
  var l = i.r, u = i.g, f = i.b;
  return "#".concat(Qb(l, u, f, !1));
}
function s6(i, l, u) {
  var f = u / 100, p = {
    r: (l.r - i.r) * f + i.r,
    g: (l.g - i.g) * f + i.g,
    b: (l.b - i.b) * f + i.b
  };
  return p;
}
function y_(i, l, u) {
  var f;
  return Math.round(i.h) >= 60 && Math.round(i.h) <= 240 ? f = u ? Math.round(i.h) - Fy * l : Math.round(i.h) + Fy * l : f = u ? Math.round(i.h) + Fy * l : Math.round(i.h) - Fy * l, f < 0 ? f += 360 : f >= 360 && (f -= 360), f;
}
function S_(i, l, u) {
  if (i.h === 0 && i.s === 0)
    return i.s;
  var f;
  return u ? f = i.s - m_ * l : l === cM ? f = i.s + m_ : f = i.s + i6 * l, f > 1 && (f = 1), u && l === sM && f > 0.1 && (f = 0.1), f < 0.06 && (f = 0.06), Number(f.toFixed(2));
}
function C_(i, l, u) {
  var f;
  return u ? f = i.v + o6 * l : f = i.v - l6 * l, f > 1 && (f = 1), Number(f.toFixed(2));
}
function Qc(i) {
  for (var l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = [], f = Gd(i), p = sM; p > 0; p -= 1) {
    var y = g_(f), h = jy(Gd({
      h: y_(y, p, !0),
      s: S_(y, p, !0),
      v: C_(y, p, !0)
    }));
    u.push(h);
  }
  u.push(jy(f));
  for (var E = 1; E <= cM; E += 1) {
    var x = g_(f), T = jy(Gd({
      h: y_(x, E),
      s: S_(x, E),
      v: C_(x, E)
    }));
    u.push(T);
  }
  return l.theme === "dark" ? u6.map(function(N) {
    var _ = N.index, O = N.opacity, D = jy(s6(Gd(l.backgroundColor || "#141414"), Gd(u[_]), O * 100));
    return D;
  }) : u;
}
var yb = {
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
}, Xy = {}, Sb = {};
Object.keys(yb).forEach(function(i) {
  Xy[i] = Qc(yb[i]), Xy[i].primary = Xy[i][5], Sb[i] = Qc(yb[i], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Sb[i].primary = Sb[i][5];
});
var c6 = Xy.blue, PE = /* @__PURE__ */ f0({});
function f6(i) {
  return i.replace(/-(.)/g, function(l, u) {
    return u.toUpperCase();
  });
}
function d6(i, l) {
  oi(i, "[@ant-design/icons] ".concat(l));
}
function b_(i) {
  return cr(i) === "object" && typeof i.name == "string" && typeof i.theme == "string" && (cr(i.icon) === "object" || typeof i.icon == "function");
}
function E_() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(i).reduce(function(l, u) {
    var f = i[u];
    switch (u) {
      case "class":
        l.className = f, delete l.class;
        break;
      default:
        delete l[u], l[f6(u)] = f;
    }
    return l;
  }, {});
}
function qb(i, l, u) {
  return u ? /* @__PURE__ */ ki.createElement(i.tag, Re(Re({
    key: l
  }, E_(i.attrs)), u), (i.children || []).map(function(f, p) {
    return qb(f, "".concat(l, "-").concat(i.tag, "-").concat(p));
  })) : /* @__PURE__ */ ki.createElement(i.tag, Re({
    key: l
  }, E_(i.attrs)), (i.children || []).map(function(f, p) {
    return qb(f, "".concat(l, "-").concat(i.tag, "-").concat(p));
  }));
}
function fM(i) {
  return Qc(i)[0];
}
function dM(i) {
  return i ? Array.isArray(i) ? i : [i] : [];
}
var v6 = `
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
`, p6 = function(l) {
  var u = zs(PE), f = u.csp, p = u.prefixCls, y = v6;
  p && (y = y.replace(/anticon/g, p)), Al(function() {
    var h = l.current, E = o0(h);
    Us(y, "@ant-design-icons", {
      prepend: !0,
      csp: f,
      attachTo: E
    });
  }, []);
}, h6 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Th = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function m6(i) {
  var l = i.primaryColor, u = i.secondaryColor;
  Th.primaryColor = l, Th.secondaryColor = u || fM(l), Th.calculated = !!u;
}
function g6() {
  return Re({}, Th);
}
var _0 = function(l) {
  var u = l.icon, f = l.className, p = l.onClick, y = l.style, h = l.primaryColor, E = l.secondaryColor, x = tr(l, h6), T = R.useRef(), N = Th;
  if (h && (N = {
    primaryColor: h,
    secondaryColor: E || fM(h)
  }), p6(T), d6(b_(u), "icon should be icon definiton, but got ".concat(u)), !b_(u))
    return null;
  var _ = u;
  return _ && typeof _.icon == "function" && (_ = Re(Re({}, _), {}, {
    icon: _.icon(N.primaryColor, N.secondaryColor)
  })), qb(_.icon, "svg-".concat(_.name), Re(Re({
    className: f,
    onClick: p,
    style: y,
    "data-icon": _.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, x), {}, {
    ref: T
  }));
};
_0.displayName = "IconReact";
_0.getTwoToneColors = g6;
_0.setTwoToneColors = m6;
const UE = _0;
function vM(i) {
  var l = dM(i), u = _e(l, 2), f = u[0], p = u[1];
  return UE.setTwoToneColors({
    primaryColor: f,
    secondaryColor: p
  });
}
function y6() {
  var i = UE.getTwoToneColors();
  return i.calculated ? [i.primaryColor, i.secondaryColor] : i.primaryColor;
}
var S6 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
vM(c6.primary);
var k0 = /* @__PURE__ */ R.forwardRef(function(i, l) {
  var u = i.className, f = i.icon, p = i.spin, y = i.rotate, h = i.tabIndex, E = i.onClick, x = i.twoToneColor, T = tr(i, S6), N = R.useContext(PE), _ = N.prefixCls, O = _ === void 0 ? "anticon" : _, D = N.rootClassName, z = Fn(D, O, tt(tt({}, "".concat(O, "-").concat(f.name), !!f.name), "".concat(O, "-spin"), !!p || f.name === "loading"), u), P = h;
  P === void 0 && E && (P = -1);
  var A = y ? {
    msTransform: "rotate(".concat(y, "deg)"),
    transform: "rotate(".concat(y, "deg)")
  } : void 0, Y = dM(x), V = _e(Y, 2), I = V[0], $ = V[1];
  return /* @__PURE__ */ R.createElement("span", bn({
    role: "img",
    "aria-label": f.name
  }, T, {
    ref: l,
    tabIndex: P,
    onClick: E,
    className: z
  }), /* @__PURE__ */ R.createElement(UE, {
    icon: f,
    primaryColor: I,
    secondaryColor: $,
    style: A
  }));
});
k0.displayName = "AntdIcon";
k0.getTwoToneColor = y6;
k0.setTwoToneColor = vM;
const IE = k0;
var pM = function(l, u) {
  return /* @__PURE__ */ R.createElement(IE, bn({}, l, {
    ref: u,
    icon: G3
  }));
};
process.env.NODE_ENV !== "production" && (pM.displayName = "BarsOutlined");
const C6 = /* @__PURE__ */ R.forwardRef(pM);
var b6 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" };
const E6 = b6;
var hM = function(l, u) {
  return /* @__PURE__ */ R.createElement(IE, bn({}, l, {
    ref: u,
    icon: E6
  }));
};
process.env.NODE_ENV !== "production" && (hM.displayName = "LeftOutlined");
const w_ = /* @__PURE__ */ R.forwardRef(hM);
var w6 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" };
const x6 = w6;
var mM = function(l, u) {
  return /* @__PURE__ */ R.createElement(IE, bn({}, l, {
    ref: u,
    icon: x6
  }));
};
process.env.NODE_ENV !== "production" && (mM.displayName = "RightOutlined");
const x_ = /* @__PURE__ */ R.forwardRef(mM), T6 = (i) => !isNaN(parseFloat(i)) && isFinite(i);
function l0(i) {
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
var R6 = "%";
function Zb(i) {
  return i.join(R6);
}
var _6 = /* @__PURE__ */ function() {
  function i(l) {
    qo(this, i), tt(this, "instanceId", void 0), tt(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = l;
  }
  return Zo(i, [{
    key: "get",
    value: function(u) {
      return this.opGet(Zb(u));
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
      return this.opUpdate(Zb(u), f);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(u, f) {
      var p = this.cache.get(u), y = f(p);
      y === null ? this.cache.delete(u) : this.cache.set(u, y);
    }
  }]), i;
}(), ev = "data-token-hash", Yo = "data-css-hash", k6 = "data-cache-path", As = "__cssinjs_instance__";
function M6() {
  var i = Math.random().toString(12).slice(2);
  if (typeof document != "undefined" && document.head && document.body) {
    var l = document.body.querySelectorAll("style[".concat(Yo, "]")) || [], u = document.head.firstChild;
    Array.from(l).forEach(function(p) {
      p[As] = p[As] || i, p[As] === i && document.head.insertBefore(p, u);
    });
    var f = {};
    Array.from(document.querySelectorAll("style[".concat(Yo, "]"))).forEach(function(p) {
      var y = p.getAttribute(Yo);
      if (f[y]) {
        if (p[As] === i) {
          var h;
          (h = p.parentNode) === null || h === void 0 || h.removeChild(p);
        }
      } else
        f[y] = !0;
    });
  }
  return new _6(i);
}
var O6 = /* @__PURE__ */ R.createContext({
  hashPriority: "low",
  cache: M6(),
  defaultCache: !0
});
const M0 = O6;
function N6(i, l) {
  if (i.length !== l.length)
    return !1;
  for (var u = 0; u < i.length; u++)
    if (i[u] !== l[u])
      return !1;
  return !0;
}
var $E = /* @__PURE__ */ function() {
  function i() {
    qo(this, i), tt(this, "cache", void 0), tt(this, "keys", void 0), tt(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Zo(i, [{
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
      return u.forEach(function(E) {
        if (!h)
          h = void 0;
        else {
          var x;
          h = (x = h) === null || x === void 0 || (x = x.map) === null || x === void 0 ? void 0 : x.get(E);
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
          var y = this.keys.reduce(function(T, N) {
            var _ = _e(T, 2), O = _[1];
            return p.internalGet(N)[1] < O ? [N, p.internalGet(N)[1]] : T;
          }, [this.keys[0], this.cacheCallTimes]), h = _e(y, 1), E = h[0];
          this.delete(E);
        }
        this.keys.push(u);
      }
      var x = this.cache;
      u.forEach(function(T, N) {
        if (N === u.length - 1)
          x.set(T, {
            value: [f, p.cacheCallTimes++]
          });
        else {
          var _ = x.get(T);
          _ ? _.map || (_.map = /* @__PURE__ */ new Map()) : x.set(T, {
            map: /* @__PURE__ */ new Map()
          }), x = x.get(T).map;
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
          return !N6(f, u);
        }), this.deleteByPath(this.cache, u);
    }
  }]), i;
}();
tt($E, "MAX_CACHE_SIZE", 20);
tt($E, "MAX_CACHE_OFFSET", 5);
var T_ = 0, gM = /* @__PURE__ */ function() {
  function i(l) {
    qo(this, i), tt(this, "derivatives", void 0), tt(this, "id", void 0), this.derivatives = Array.isArray(l) ? l : [l], this.id = T_, l.length === 0 && Zd(l.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), T_ += 1;
  }
  return Zo(i, [{
    key: "getDerivativeToken",
    value: function(u) {
      return this.derivatives.reduce(function(f, p) {
        return p(u, f);
      }, void 0);
    }
  }]), i;
}(), Cb = new $E();
function Jb(i) {
  var l = Array.isArray(i) ? i : [i];
  return Cb.has(l) || Cb.set(l, new gM(l)), Cb.get(l);
}
var D6 = /* @__PURE__ */ new WeakMap(), bb = {};
function L6(i, l) {
  for (var u = D6, f = 0; f < l.length; f += 1) {
    var p = l[f];
    u.has(p) || u.set(p, /* @__PURE__ */ new WeakMap()), u = u.get(p);
  }
  return u.has(bb) || u.set(bb, i()), u.get(bb);
}
var R_ = /* @__PURE__ */ new WeakMap();
function Rh(i) {
  var l = R_.get(i) || "";
  return l || (Object.keys(i).forEach(function(u) {
    var f = i[u];
    l += u, f instanceof gM ? l += f.id : f && cr(f) === "object" ? l += Rh(f) : l += f;
  }), R_.set(i, l)), l;
}
function __(i, l) {
  return l0("".concat(l, "_").concat(Rh(i)));
}
var _h = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), yM = "_bAmBoO_";
function A6(i, l, u) {
  if (ii()) {
    var f, p;
    Us(i, _h);
    var y = document.createElement("div");
    y.style.position = "fixed", y.style.left = "0", y.style.top = "0", l == null || l(y), document.body.appendChild(y), process.env.NODE_ENV !== "production" && (y.innerHTML = "Test", y.style.zIndex = "9999999");
    var h = u ? u(y) : (f = getComputedStyle(y).content) === null || f === void 0 ? void 0 : f.includes(yM);
    return (p = y.parentNode) === null || p === void 0 || p.removeChild(y), Nh(_h), h;
  }
  return !1;
}
var Eb = void 0;
function z6() {
  return Eb === void 0 && (Eb = A6("@layer ".concat(_h, " { .").concat(_h, ' { content: "').concat(yM, '"!important; } }'), function(i) {
    i.className = _h;
  })), Eb;
}
var eE = ii();
function Lh(i) {
  return typeof i == "number" ? "".concat(i, "px") : i;
}
function u0(i, l, u) {
  var f, p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, y = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (y)
    return i;
  var h = Re(Re({}, p), {}, (f = {}, tt(f, ev, l), tt(f, Yo, u), f)), E = Object.keys(h).map(function(x) {
    var T = h[x];
    return T ? "".concat(x, '="').concat(T, '"') : null;
  }).filter(function(x) {
    return x;
  }).join(" ");
  return "<style ".concat(E, ">").concat(i, "</style>");
}
var SM = function(l) {
  var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(u ? "".concat(u, "-") : "").concat(l).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, P6 = function(l, u, f) {
  return Object.keys(l).length ? ".".concat(u).concat(f != null && f.scope ? ".".concat(f.scope) : "", "{").concat(Object.entries(l).map(function(p) {
    var y = _e(p, 2), h = y[0], E = y[1];
    return "".concat(h, ":").concat(E, ";");
  }).join(""), "}") : "";
}, CM = function(l, u, f) {
  var p = {}, y = {};
  return Object.entries(l).forEach(function(h) {
    var E, x, T = _e(h, 2), N = T[0], _ = T[1];
    if (f != null && (E = f.preserve) !== null && E !== void 0 && E[N])
      y[N] = _;
    else if ((typeof _ == "string" || typeof _ == "number") && !(f != null && (x = f.ignore) !== null && x !== void 0 && x[N])) {
      var O, D = SM(N, f == null ? void 0 : f.prefix);
      p[D] = typeof _ == "number" && !(f != null && (O = f.unitless) !== null && O !== void 0 && O[N]) ? "".concat(_, "px") : String(_), y[N] = "var(".concat(D, ")");
    }
  }), [y, P6(p, u, {
    scope: f == null ? void 0 : f.scope
  })];
}, U6 = Re({}, R), k_ = U6.useInsertionEffect, I6 = function(l, u, f) {
  R.useMemo(l, f), Ia(function() {
    return u(!0);
  }, f);
}, $6 = k_ ? function(i, l, u) {
  return k_(function() {
    return i(), l();
  }, u);
} : I6;
const H6 = $6;
var F6 = Re({}, R), j6 = F6.useInsertionEffect, V6 = function(l) {
  var u = [], f = !1;
  function p(y) {
    if (f) {
      process.env.NODE_ENV !== "production" && Zd(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    u.push(y);
  }
  return R.useEffect(function() {
    return f = !1, function() {
      f = !0, u.length && u.forEach(function(y) {
        return y();
      });
    };
  }, l), p;
}, B6 = function() {
  return function(l) {
    l();
  };
}, W6 = typeof j6 != "undefined" ? V6 : B6;
const K6 = W6;
function G6() {
  return !1;
}
var tE = !1;
function Y6() {
  return tE;
}
const Q6 = process.env.NODE_ENV === "production" ? G6 : Y6;
if (process.env.NODE_ENV !== "production" && typeof module != "undefined" && module && module.hot && typeof window != "undefined") {
  var wb = window;
  if (typeof wb.webpackHotUpdate == "function") {
    var X6 = wb.webpackHotUpdate;
    wb.webpackHotUpdate = function() {
      return tE = !0, setTimeout(function() {
        tE = !1;
      }, 0), X6.apply(void 0, arguments);
    };
  }
}
function HE(i, l, u, f, p) {
  var y = R.useContext(M0), h = y.cache, E = [i].concat(Tr(l)), x = Zb(E), T = K6([x]), N = Q6(), _ = function(P) {
    h.opUpdate(x, function(A) {
      var Y = A || [void 0, void 0], V = _e(Y, 2), I = V[0], $ = I === void 0 ? 0 : I, W = V[1], re = W;
      process.env.NODE_ENV !== "production" && W && N && (f == null || f(re, N), re = null);
      var G = re || u(), se = [$, G];
      return P ? P(se) : se;
    });
  };
  R.useMemo(
    function() {
      _();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [x]
    /* eslint-enable */
  );
  var O = h.opGet(x);
  process.env.NODE_ENV !== "production" && !O && (_(), O = h.opGet(x));
  var D = O[1];
  return H6(function() {
    p == null || p(D);
  }, function(z) {
    return _(function(P) {
      var A = _e(P, 2), Y = A[0], V = A[1];
      return z && Y === 0 && (p == null || p(D)), [Y + 1, V];
    }), function() {
      h.opUpdate(x, function(P) {
        var A = P || [], Y = _e(A, 2), V = Y[0], I = V === void 0 ? 0 : V, $ = Y[1], W = I - 1;
        return W === 0 ? (T(function() {
          (z || !h.opGet(x)) && (f == null || f($, !1));
        }), null) : [I - 1, $];
      });
    };
  }, [x]), D;
}
var q6 = {}, Z6 = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Wc = /* @__PURE__ */ new Map();
function J6(i) {
  Wc.set(i, (Wc.get(i) || 0) + 1);
}
function e5(i, l) {
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
var t5 = 0;
function n5(i, l) {
  Wc.set(i, (Wc.get(i) || 0) - 1);
  var u = Array.from(Wc.keys()), f = u.filter(function(p) {
    var y = Wc.get(p) || 0;
    return y <= 0;
  });
  u.length - f.length > t5 && f.forEach(function(p) {
    e5(p, l), Wc.delete(p);
  });
}
var r5 = function(l, u, f, p) {
  var y = f.getDerivativeToken(l), h = Re(Re({}, y), u);
  return p && (h = p(h)), h;
}, bM = "token";
function a5(i, l) {
  var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, f = zs(M0), p = f.cache.instanceId, y = f.container, h = u.salt, E = h === void 0 ? "" : h, x = u.override, T = x === void 0 ? q6 : x, N = u.formatToken, _ = u.getComputedToken, O = u.cssVar, D = L6(function() {
    return Object.assign.apply(Object, [{}].concat(Tr(l)));
  }, l), z = Rh(D), P = Rh(T), A = O ? Rh(O) : "", Y = HE(bM, [E, i.id, z, P, A], function() {
    var V, I = _ ? _(D, T, i) : r5(D, T, i, N), $ = Re({}, I), W = "";
    if (O) {
      var re = CM(I, O.key, {
        prefix: O.prefix,
        ignore: O.ignore,
        unitless: O.unitless,
        preserve: O.preserve
      }), G = _e(re, 2);
      I = G[0], W = G[1];
    }
    var se = __(I, E);
    I._tokenKey = se, $._tokenKey = __($, E);
    var Te = (V = O == null ? void 0 : O.key) !== null && V !== void 0 ? V : se;
    I._themeKey = Te, J6(Te);
    var le = "".concat(Z6, "-").concat(l0(se));
    return I._hashId = le, [I, le, $, W, (O == null ? void 0 : O.key) || ""];
  }, function(V) {
    n5(V[0]._themeKey, p);
  }, function(V) {
    var I = _e(V, 4), $ = I[0], W = I[3];
    if (O && W) {
      var re = Us(W, l0("css-variables-".concat($._themeKey)), {
        mark: Yo,
        prepend: "queue",
        attachTo: y,
        priority: -999
      });
      re[As] = p, re.setAttribute(ev, $._themeKey);
    }
  });
  return Y;
}
var i5 = function(l, u, f) {
  var p = _e(l, 5), y = p[2], h = p[3], E = p[4], x = f || {}, T = x.plain;
  if (!h)
    return null;
  var N = y._tokenKey, _ = -999, O = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(_)
  }, D = u0(h, E, N, O, T);
  return [_, N, D];
}, o5 = {
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
}, EM = "comm", wM = "rule", xM = "decl", l5 = "@import", u5 = "@keyframes", s5 = "@layer", TM = Math.abs, FE = String.fromCharCode;
function RM(i) {
  return i.trim();
}
function qy(i, l, u) {
  return i.replace(l, u);
}
function c5(i, l, u) {
  return i.indexOf(l, u);
}
function Ah(i, l) {
  return i.charCodeAt(l) | 0;
}
function zh(i, l, u) {
  return i.slice(l, u);
}
function Ou(i) {
  return i.length;
}
function f5(i) {
  return i.length;
}
function Vy(i, l) {
  return l.push(i), i;
}
var O0 = 1, tv = 1, _M = 0, co = 0, Pr = 0, iv = "";
function jE(i, l, u, f, p, y, h, E) {
  return { value: i, root: l, parent: u, type: f, props: p, children: y, line: O0, column: tv, length: h, return: "", siblings: E };
}
function d5() {
  return Pr;
}
function v5() {
  return Pr = co > 0 ? Ah(iv, --co) : 0, tv--, Pr === 10 && (tv = 1, O0--), Pr;
}
function Qo() {
  return Pr = co < _M ? Ah(iv, co++) : 0, tv++, Pr === 10 && (tv = 1, O0++), Pr;
}
function Gc() {
  return Ah(iv, co);
}
function Zy() {
  return co;
}
function N0(i, l) {
  return zh(iv, i, l);
}
function nE(i) {
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
function p5(i) {
  return O0 = tv = 1, _M = Ou(iv = i), co = 0, [];
}
function h5(i) {
  return iv = "", i;
}
function xb(i) {
  return RM(N0(co - 1, rE(i === 91 ? i + 2 : i === 40 ? i + 1 : i)));
}
function m5(i) {
  for (; (Pr = Gc()) && Pr < 33; )
    Qo();
  return nE(i) > 2 || nE(Pr) > 3 ? "" : " ";
}
function g5(i, l) {
  for (; --l && Qo() && !(Pr < 48 || Pr > 102 || Pr > 57 && Pr < 65 || Pr > 70 && Pr < 97); )
    ;
  return N0(i, Zy() + (l < 6 && Gc() == 32 && Qo() == 32));
}
function rE(i) {
  for (; Qo(); )
    switch (Pr) {
      case i:
        return co;
      case 34:
      case 39:
        i !== 34 && i !== 39 && rE(Pr);
        break;
      case 40:
        i === 41 && rE(i);
        break;
      case 92:
        Qo();
        break;
    }
  return co;
}
function y5(i, l) {
  for (; Qo() && i + Pr !== 57; )
    if (i + Pr === 84 && Gc() === 47)
      break;
  return "/*" + N0(l, co - 1) + "*" + FE(i === 47 ? i : Qo());
}
function S5(i) {
  for (; !nE(Gc()); )
    Qo();
  return N0(i, co);
}
function C5(i) {
  return h5(Jy("", null, null, null, [""], i = p5(i), 0, [0], i));
}
function Jy(i, l, u, f, p, y, h, E, x) {
  for (var T = 0, N = 0, _ = h, O = 0, D = 0, z = 0, P = 1, A = 1, Y = 1, V = 0, I = "", $ = p, W = y, re = f, G = I; A; )
    switch (z = V, V = Qo()) {
      case 40:
        if (z != 108 && Ah(G, _ - 1) == 58) {
          c5(G += qy(xb(V), "&", "&\f"), "&\f", TM(T ? E[T - 1] : 0)) != -1 && (Y = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        G += xb(V);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        G += m5(z);
        break;
      case 92:
        G += g5(Zy() - 1, 7);
        continue;
      case 47:
        switch (Gc()) {
          case 42:
          case 47:
            Vy(b5(y5(Qo(), Zy()), l, u, x), x);
            break;
          default:
            G += "/";
        }
        break;
      case 123 * P:
        E[T++] = Ou(G) * Y;
      case 125 * P:
      case 59:
      case 0:
        switch (V) {
          case 0:
          case 125:
            A = 0;
          case 59 + N:
            Y == -1 && (G = qy(G, /\f/g, "")), D > 0 && Ou(G) - _ && Vy(D > 32 ? O_(G + ";", f, u, _ - 1, x) : O_(qy(G, " ", "") + ";", f, u, _ - 2, x), x);
            break;
          case 59:
            G += ";";
          default:
            if (Vy(re = M_(G, l, u, T, N, p, E, I, $ = [], W = [], _, y), y), V === 123)
              if (N === 0)
                Jy(G, l, re, re, $, y, _, E, W);
              else
                switch (O === 99 && Ah(G, 3) === 110 ? 100 : O) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Jy(i, re, re, f && Vy(M_(i, re, re, 0, 0, p, E, I, p, $ = [], _, W), W), p, W, _, E, f ? $ : W);
                    break;
                  default:
                    Jy(G, re, re, re, [""], W, 0, E, W);
                }
        }
        T = N = D = 0, P = Y = 1, I = G = "", _ = h;
        break;
      case 58:
        _ = 1 + Ou(G), D = z;
      default:
        if (P < 1) {
          if (V == 123)
            --P;
          else if (V == 125 && P++ == 0 && v5() == 125)
            continue;
        }
        switch (G += FE(V), V * P) {
          case 38:
            Y = N > 0 ? 1 : (G += "\f", -1);
            break;
          case 44:
            E[T++] = (Ou(G) - 1) * Y, Y = 1;
            break;
          case 64:
            Gc() === 45 && (G += xb(Qo())), O = Gc(), N = _ = Ou(I = G += S5(Zy())), V++;
            break;
          case 45:
            z === 45 && Ou(G) == 2 && (P = 0);
        }
    }
  return y;
}
function M_(i, l, u, f, p, y, h, E, x, T, N, _) {
  for (var O = p - 1, D = p === 0 ? y : [""], z = f5(D), P = 0, A = 0, Y = 0; P < f; ++P)
    for (var V = 0, I = zh(i, O + 1, O = TM(A = h[P])), $ = i; V < z; ++V)
      ($ = RM(A > 0 ? D[V] + " " + I : qy(I, /&\f/g, D[V]))) && (x[Y++] = $);
  return jE(i, l, u, p === 0 ? wM : E, x, T, N, _);
}
function b5(i, l, u, f) {
  return jE(i, l, u, EM, FE(d5()), zh(i, 2, -2), 0, f);
}
function O_(i, l, u, f, p) {
  return jE(i, l, u, xM, zh(i, 0, f), zh(i, f + 1, -1), f, p);
}
function aE(i, l) {
  for (var u = "", f = 0; f < i.length; f++)
    u += l(i[f], f, i, l) || "";
  return u;
}
function E5(i, l, u, f) {
  switch (i.type) {
    case s5:
      if (i.children.length)
        break;
    case l5:
    case xM:
      return i.return = i.return || i.value;
    case EM:
      return "";
    case u5:
      return i.return = i.value + "{" + aE(i.children, f) + "}";
    case wM:
      if (!Ou(i.value = i.props.join(",")))
        return "";
  }
  return Ou(u = aE(i.children, f)) ? i.return = i.value + "{" + u + "}" : "";
}
function kM(i, l) {
  var u = l.path, f = l.parentSelectors;
  oi(!1, "[Ant Design CSS-in-JS] ".concat(u ? "Error in ".concat(u, ": ") : "").concat(i).concat(f.length ? " Selector: ".concat(f.join(" | ")) : ""));
}
var w5 = function(l, u, f) {
  if (l === "content") {
    var p = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, y = ["normal", "none", "initial", "inherit", "unset"];
    (typeof u != "string" || y.indexOf(u) === -1 && !p.test(u) && (u.charAt(0) !== u.charAt(u.length - 1) || u.charAt(0) !== '"' && u.charAt(0) !== "'")) && kM("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(u, "\"'`."), f);
  }
}, x5 = function(l, u, f) {
  l === "animation" && f.hashId && u !== "none" && kM("You seem to be using hashed animation '".concat(u, "', in which case 'animationName' with Keyframe as value is recommended."), f);
}, N_ = "data-ant-cssinjs-cache-path", MM = "_FILE_STYLE__", Yc, OM = !0;
function T5() {
  if (!Yc && (Yc = {}, ii())) {
    var i = document.createElement("div");
    i.className = N_, i.style.position = "fixed", i.style.visibility = "hidden", i.style.top = "-9999px", document.body.appendChild(i);
    var l = getComputedStyle(i).content || "";
    l = l.replace(/^"/, "").replace(/"$/, ""), l.split(";").forEach(function(p) {
      var y = p.split(":"), h = _e(y, 2), E = h[0], x = h[1];
      Yc[E] = x;
    });
    var u = document.querySelector("style[".concat(N_, "]"));
    if (u) {
      var f;
      OM = !1, (f = u.parentNode) === null || f === void 0 || f.removeChild(u);
    }
    document.body.removeChild(i);
  }
}
function R5(i) {
  return T5(), !!Yc[i];
}
function _5(i) {
  var l = Yc[i], u = null;
  if (l && ii())
    if (OM)
      u = MM;
    else {
      var f = document.querySelector("style[".concat(Yo, '="').concat(Yc[i], '"]'));
      f ? u = f.innerHTML : delete Yc[i];
    }
  return [u, l];
}
var NM = "_skip_check_", DM = "_multi_value_";
function iE(i) {
  var l = aE(C5(i), E5);
  return l.replace(/\{%%%\:[^;];}/g, ";");
}
function k5(i) {
  return cr(i) === "object" && i && (NM in i || DM in i);
}
function M5(i, l, u) {
  if (!l)
    return i;
  var f = ".".concat(l), p = u === "low" ? ":where(".concat(f, ")") : f, y = i.split(",").map(function(h) {
    var E, x = h.trim().split(/\s+/), T = x[0] || "", N = ((E = T.match(/^\w+/)) === null || E === void 0 ? void 0 : E[0]) || "";
    return T = "".concat(N).concat(p).concat(T.slice(N.length)), [T].concat(Tr(x.slice(1))).join(" ");
  });
  return y.join(",");
}
var O5 = function i(l) {
  var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, p = f.root, y = f.injectHash, h = f.parentSelectors, E = u.hashId, x = u.layer, T = u.path, N = u.hashPriority, _ = u.transformers, O = _ === void 0 ? [] : _, D = u.linters, z = D === void 0 ? [] : D, P = "", A = {};
  function Y(re) {
    var G = re.getName(E);
    if (!A[G]) {
      var se = i(re.style, u, {
        root: !1,
        parentSelectors: h
      }), Te = _e(se, 1), le = Te[0];
      A[G] = "@keyframes ".concat(re.getName(E)).concat(le);
    }
  }
  function V(re) {
    var G = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return re.forEach(function(se) {
      Array.isArray(se) ? V(se, G) : se && G.push(se);
    }), G;
  }
  var I = V(Array.isArray(l) ? l : [l]);
  if (I.forEach(function(re) {
    var G = typeof re == "string" && !p ? {} : re;
    if (typeof G == "string")
      P += "".concat(G, `
`);
    else if (G._keyframe)
      Y(G);
    else {
      var se = O.reduce(function(Te, le) {
        var ge;
        return (le == null || (ge = le.visit) === null || ge === void 0 ? void 0 : ge.call(le, Te)) || Te;
      }, G);
      Object.keys(se).forEach(function(Te) {
        var le = se[Te];
        if (cr(le) === "object" && le && (Te !== "animationName" || !le._keyframe) && !k5(le)) {
          var ge = !1, Ee = Te.trim(), ne = !1;
          (p || y) && E ? Ee.startsWith("@") ? ge = !0 : Ee = M5(Te, E, N) : p && !E && (Ee === "&" || Ee === "") && (Ee = "", ne = !0);
          var fe = i(le, u, {
            root: ne,
            injectHash: ge,
            parentSelectors: [].concat(Tr(h), [Ee])
          }), Ce = _e(fe, 2), we = Ce[0], Ne = Ce[1];
          A = Re(Re({}, A), Ne), P += "".concat(Ee).concat(we);
        } else {
          let ae = function(ze, De) {
            process.env.NODE_ENV !== "production" && (cr(le) !== "object" || !(le != null && le[NM])) && [w5, x5].concat(Tr(z)).forEach(function(At) {
              return At(ze, De, {
                path: T,
                hashId: E,
                parentSelectors: h
              });
            });
            var ft = ze.replace(/[A-Z]/g, function(At) {
              return "-".concat(At.toLowerCase());
            }), dt = De;
            !o5[ze] && typeof dt == "number" && dt !== 0 && (dt = "".concat(dt, "px")), ze === "animationName" && De !== null && De !== void 0 && De._keyframe && (Y(De), dt = De.getName(E)), P += "".concat(ft, ":").concat(dt, ";");
          };
          var ee, de = (ee = le == null ? void 0 : le.value) !== null && ee !== void 0 ? ee : le;
          cr(le) === "object" && le !== null && le !== void 0 && le[DM] && Array.isArray(de) ? de.forEach(function(ze) {
            ae(Te, ze);
          }) : ae(Te, de);
        }
      });
    }
  }), !p)
    P = "{".concat(P, "}");
  else if (x && z6()) {
    var $ = x.split(","), W = $[$.length - 1].trim();
    P = "@layer ".concat(W, " {").concat(P, "}"), $.length > 1 && (P = "@layer ".concat(x, "{%%%:%}").concat(P));
  }
  return [P, A];
};
function LM(i, l) {
  return l0("".concat(i.join("%")).concat(l));
}
function N5() {
  return null;
}
var AM = "style";
function oE(i, l) {
  var u = i.token, f = i.path, p = i.hashId, y = i.layer, h = i.nonce, E = i.clientOnly, x = i.order, T = x === void 0 ? 0 : x, N = R.useContext(M0), _ = N.autoClear, O = N.mock, D = N.defaultCache, z = N.hashPriority, P = N.container, A = N.ssrInline, Y = N.transformers, V = N.linters, I = N.cache, $ = u._tokenKey, W = [$].concat(Tr(f)), re = eE;
  process.env.NODE_ENV !== "production" && O !== void 0 && (re = O === "client");
  var G = HE(
    AM,
    W,
    // Create cache if needed
    function() {
      var Ee = W.join("|");
      if (R5(Ee)) {
        var ne = _5(Ee), fe = _e(ne, 2), Ce = fe[0], we = fe[1];
        if (Ce)
          return [Ce, $, we, {}, E, T];
      }
      var Ne = l(), ee = O5(Ne, {
        hashId: p,
        hashPriority: z,
        layer: y,
        path: f.join("-"),
        transformers: Y,
        linters: V
      }), de = _e(ee, 2), ae = de[0], ze = de[1], De = iE(ae), ft = LM(W, De);
      return [De, $, ft, ze, E, T];
    },
    // Remove cache if no need
    function(Ee, ne) {
      var fe = _e(Ee, 3), Ce = fe[2];
      (ne || _) && eE && Nh(Ce, {
        mark: Yo
      });
    },
    // Effect: Inject style here
    function(Ee) {
      var ne = _e(Ee, 4), fe = ne[0];
      ne[1];
      var Ce = ne[2], we = ne[3];
      if (re && fe !== MM) {
        var Ne = {
          mark: Yo,
          prepend: "queue",
          attachTo: P,
          priority: T
        }, ee = typeof h == "function" ? h() : h;
        ee && (Ne.csp = {
          nonce: ee
        });
        var de = Us(fe, Ce, Ne);
        de[As] = I.instanceId, de.setAttribute(ev, $), process.env.NODE_ENV !== "production" && de.setAttribute(k6, W.join("|")), Object.keys(we).forEach(function(ae) {
          Us(iE(we[ae]), "_effect-".concat(ae), Ne);
        });
      }
    }
  ), se = _e(G, 3), Te = se[0], le = se[1], ge = se[2];
  return function(Ee) {
    var ne;
    if (!A || re || !D)
      ne = /* @__PURE__ */ R.createElement(N5, null);
    else {
      var fe;
      ne = /* @__PURE__ */ R.createElement("style", bn({}, (fe = {}, tt(fe, ev, le), tt(fe, Yo, ge), fe), {
        dangerouslySetInnerHTML: {
          __html: Te
        }
      }));
    }
    return /* @__PURE__ */ R.createElement(R.Fragment, null, ne, Ee);
  };
}
var D5 = function(l, u, f) {
  var p = _e(l, 6), y = p[0], h = p[1], E = p[2], x = p[3], T = p[4], N = p[5], _ = f || {}, O = _.plain;
  if (T)
    return null;
  var D = y, z = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(N)
  };
  return D = u0(y, h, E, z, O), x && Object.keys(x).forEach(function(P) {
    if (!u[P]) {
      u[P] = !0;
      var A = iE(x[P]);
      D += u0(A, h, "_effect-".concat(P), z, O);
    }
  }), [N, E, D];
}, zM = "cssVar", L5 = function(l, u) {
  var f = l.key, p = l.prefix, y = l.unitless, h = l.ignore, E = l.token, x = l.scope, T = x === void 0 ? "" : x, N = zs(M0), _ = N.cache.instanceId, O = N.container, D = E._tokenKey, z = [].concat(Tr(l.path), [f, T, D]), P = HE(zM, z, function() {
    var A = u(), Y = CM(A, f, {
      prefix: p,
      unitless: y,
      ignore: h,
      scope: T
    }), V = _e(Y, 2), I = V[0], $ = V[1], W = LM(z, $);
    return [I, $, W, f];
  }, function(A) {
    var Y = _e(A, 3), V = Y[2];
    eE && Nh(V, {
      mark: Yo
    });
  }, function(A) {
    var Y = _e(A, 3), V = Y[1], I = Y[2];
    if (V) {
      var $ = Us(V, I, {
        mark: Yo,
        prepend: "queue",
        attachTo: O,
        priority: -999
      });
      $[As] = _, $.setAttribute(ev, f);
    }
  });
  return P;
}, A5 = function(l, u, f) {
  var p = _e(l, 4), y = p[1], h = p[2], E = p[3], x = f || {}, T = x.plain;
  if (!y)
    return null;
  var N = -999, _ = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(N)
  }, O = u0(y, E, h, _, T);
  return [N, h, O];
}, Ch;
Ch = {}, tt(Ch, AM, D5), tt(Ch, bM, i5), tt(Ch, zM, A5);
var fo = /* @__PURE__ */ function() {
  function i(l, u) {
    qo(this, i), tt(this, "name", void 0), tt(this, "style", void 0), tt(this, "_keyframe", !0), this.name = l, this.style = u;
  }
  return Zo(i, [{
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
function z5(i) {
  return uk(i) || lk(i) || EE(i) || sk();
}
function lE(i, l) {
  for (var u = i, f = 0; f < l.length; f += 1) {
    if (u == null)
      return;
    u = u[l[f]];
  }
  return u;
}
function PM(i, l, u, f) {
  if (!l.length)
    return u;
  var p = z5(l), y = p[0], h = p.slice(1), E;
  return !i && typeof y == "number" ? E = [] : Array.isArray(i) ? E = Tr(i) : E = Re({}, i), f && u === void 0 && h.length === 1 ? delete E[y][h[0]] : E[y] = PM(E[y], h, u, f), E;
}
function Tb(i, l, u) {
  var f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return l.length && f && u === void 0 && !lE(i, l.slice(0, -1)) ? i : PM(i, l, u, f);
}
function P5(i) {
  return cr(i) === "object" && i !== null && Object.getPrototypeOf(i) === Object.prototype;
}
function D_(i) {
  return Array.isArray(i) ? [] : {};
}
var U5 = typeof Reflect == "undefined" ? Object.keys : Reflect.ownKeys;
function I5() {
  for (var i = arguments.length, l = new Array(i), u = 0; u < i; u++)
    l[u] = arguments[u];
  var f = D_(l[0]);
  return l.forEach(function(p) {
    function y(h, E) {
      var x = new Set(E), T = lE(p, h), N = Array.isArray(T);
      if (N || P5(T)) {
        if (!x.has(T)) {
          x.add(T);
          var _ = lE(f, h);
          N ? f = Tb(f, h, []) : (!_ || cr(_) !== "object") && (f = Tb(f, h, D_(T))), U5(T).forEach(function(O) {
            y([].concat(Tr(h), [O]), x);
          });
        }
      } else
        f = Tb(f, h, T);
    }
    y([]);
  }), f;
}
function UM() {
}
let ku = null;
function $5() {
  ku = null, ck();
}
let VE = UM;
process.env.NODE_ENV !== "production" && (VE = (i, l, u) => {
  oi(i, `[antd: ${l}] ${u}`), process.env.NODE_ENV === "test" && $5();
});
const IM = /* @__PURE__ */ R.createContext({}), D0 = process.env.NODE_ENV !== "production" ? (i) => {
  const {
    strict: l
  } = R.useContext(IM), u = (f, p, y) => {
    if (!f)
      if (l === !1 && p === "deprecated") {
        const h = ku;
        ku || (ku = {}), ku[i] = ku[i] || [], ku[i].includes(y || "") || ku[i].push(y || ""), h || console.warn("[antd] There exists deprecated usage in your code:", ku);
      } else
        process.env.NODE_ENV !== "production" && VE(f, i, y);
  };
  return u.deprecated = (f, p, y, h) => {
    u(f, "deprecated", `\`${p}\` is deprecated. Please use \`${y}\` instead.${h ? ` ${h}` : ""}`);
  }, u;
} : () => {
  const i = () => {
  };
  return i.deprecated = UM, i;
}, L0 = VE, H5 = /* @__PURE__ */ f0(void 0);
var F5 = {
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
}, j5 = {
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
const V5 = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, $M = V5, B5 = {
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
  }, j5),
  timePickerLocale: Object.assign({}, $M)
}, L_ = B5, Hi = "${label} is not a valid ${type}", A0 = {
  locale: "en",
  Pagination: F5,
  DatePicker: L_,
  TimePicker: $M,
  Calendar: L_,
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
        string: Hi,
        method: Hi,
        array: Hi,
        object: Hi,
        number: Hi,
        date: Hi,
        boolean: Hi,
        integer: Hi,
        float: Hi,
        regexp: Hi,
        email: Hi,
        url: Hi,
        hex: Hi
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
Object.assign({}, A0.Modal);
let e0 = [];
const A_ = () => e0.reduce((i, l) => Object.assign(Object.assign({}, i), l), A0.Modal);
function W5(i) {
  if (i) {
    const l = Object.assign({}, i);
    return e0.push(l), A_(), () => {
      e0 = e0.filter((u) => u !== l), A_();
    };
  }
  Object.assign({}, A0.Modal);
}
const K5 = /* @__PURE__ */ f0(void 0), HM = K5, FM = "internalMark", jM = (i) => {
  const {
    locale: l = {},
    children: u,
    _ANT_MARK__: f
  } = i;
  if (process.env.NODE_ENV !== "production") {
    const y = D0("LocaleProvider");
    process.env.NODE_ENV !== "production" && y(f === FM, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  R.useEffect(() => W5(l && l.Modal), [l]);
  const p = R.useMemo(() => Object.assign(Object.assign({}, l), {
    exist: !0
  }), [l]);
  return /* @__PURE__ */ R.createElement(HM.Provider, {
    value: p
  }, u);
};
process.env.NODE_ENV !== "production" && (jM.displayName = "LocaleProvider");
const G5 = jM, Y5 = (i) => {
  const {
    controlHeight: l
  } = i;
  return {
    controlHeightSM: l * 0.75,
    controlHeightXS: l * 0.5,
    controlHeightLG: l * 1.25
  };
};
function Q5(i) {
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
const VM = {
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
}, X5 = Object.assign(Object.assign({}, VM), {
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
}), Ph = X5;
function q5(i, l) {
  let {
    generateColorPalettes: u,
    generateNeutralColorPalettes: f
  } = l;
  const {
    colorSuccess: p,
    colorWarning: y,
    colorError: h,
    colorInfo: E,
    colorPrimary: x,
    colorBgBase: T,
    colorTextBase: N
  } = i, _ = u(x), O = u(p), D = u(y), z = u(h), P = u(E), A = f(T, N), Y = i.colorLink || i.colorInfo, V = u(Y);
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
    colorSuccessBg: O[1],
    colorSuccessBgHover: O[2],
    colorSuccessBorder: O[3],
    colorSuccessBorderHover: O[4],
    colorSuccessHover: O[4],
    colorSuccess: O[6],
    colorSuccessActive: O[7],
    colorSuccessTextHover: O[8],
    colorSuccessText: O[9],
    colorSuccessTextActive: O[10],
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
    colorInfoBg: P[1],
    colorInfoBgHover: P[2],
    colorInfoBorder: P[3],
    colorInfoBorderHover: P[4],
    colorInfoHover: P[4],
    colorInfo: P[6],
    colorInfoActive: P[7],
    colorInfoTextHover: P[8],
    colorInfoText: P[9],
    colorInfoTextActive: P[10],
    colorLinkHover: V[4],
    colorLink: V[6],
    colorLinkActive: V[7],
    colorBgMask: new ji("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Z5 = (i) => {
  let l = i, u = i, f = i, p = i;
  return i < 6 && i >= 5 ? l = i + 1 : i < 16 && i >= 6 ? l = i + 2 : i >= 16 && (l = 16), i < 7 && i >= 5 ? u = 4 : i < 8 && i >= 7 ? u = 5 : i < 14 && i >= 8 ? u = 6 : i < 16 && i >= 14 ? u = 7 : i >= 16 && (u = 8), i < 6 && i >= 2 ? f = 1 : i >= 6 && (f = 2), i > 4 && i < 8 ? p = 4 : i >= 8 && (p = 6), {
    borderRadius: i,
    borderRadiusXS: f,
    borderRadiusSM: u,
    borderRadiusLG: l,
    borderRadiusOuter: p
  };
};
function J5(i) {
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
  }, Z5(f));
}
const _u = (i, l) => new ji(i).setAlpha(l).toRgbString(), bh = (i, l) => new ji(i).darken(l).toHexString(), eU = (i) => {
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
}, tU = (i, l) => {
  const u = i || "#fff", f = l || "#000";
  return {
    colorBgBase: u,
    colorTextBase: f,
    colorText: _u(f, 0.88),
    colorTextSecondary: _u(f, 0.65),
    colorTextTertiary: _u(f, 0.45),
    colorTextQuaternary: _u(f, 0.25),
    colorFill: _u(f, 0.15),
    colorFillSecondary: _u(f, 0.06),
    colorFillTertiary: _u(f, 0.04),
    colorFillQuaternary: _u(f, 0.02),
    colorBgLayout: bh(u, 4),
    colorBgContainer: bh(u, 0),
    colorBgElevated: bh(u, 0),
    colorBgSpotlight: _u(f, 0.85),
    colorBgBlur: "transparent",
    colorBorder: bh(u, 15),
    colorBorderSecondary: bh(u, 6)
  };
};
function nU(i) {
  return (i + 8) / i;
}
function rU(i) {
  const l = new Array(10).fill(null).map((u, f) => {
    const p = f - 1, y = i * Math.pow(2.71828, p / 5), h = f > 1 ? Math.floor(y) : Math.ceil(y);
    return Math.floor(h / 2) * 2;
  });
  return l[1] = i, l.map((u) => ({
    size: u,
    lineHeight: nU(u)
  }));
}
const aU = (i) => {
  const l = rU(i), u = l.map((N) => N.size), f = l.map((N) => N.lineHeight), p = u[1], y = u[0], h = u[2], E = f[1], x = f[0], T = f[2];
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
    lineHeight: E,
    lineHeightLG: T,
    lineHeightSM: x,
    fontHeight: Math.round(E * p),
    fontHeightLG: Math.round(T * h),
    fontHeightSM: Math.round(x * y),
    lineHeightHeading1: f[6],
    lineHeightHeading2: f[5],
    lineHeightHeading3: f[4],
    lineHeightHeading4: f[3],
    lineHeightHeading5: f[2]
  };
};
function iU(i) {
  const l = Object.keys(VM).map((u) => {
    const f = Qc(i[u]);
    return new Array(10).fill(1).reduce((p, y, h) => (p[`${u}-${h + 1}`] = f[h], p[`${u}${h + 1}`] = f[h], p), {});
  }).reduce((u, f) => (u = Object.assign(Object.assign({}, u), f), u), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, i), l), q5(i, {
    generateColorPalettes: eU,
    generateNeutralColorPalettes: tU
  })), aU(i.fontSize)), Q5(i)), Y5(i)), J5(i));
}
const BM = Jb(iU), uE = {
  token: Ph,
  override: {
    override: Ph
  },
  hashed: !0
}, WM = /* @__PURE__ */ ki.createContext(uE), KM = "anticon", oU = (i, l) => l || (i ? `ant-${i}` : "ant"), qc = /* @__PURE__ */ R.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: oU,
  iconPrefixCls: KM
}), lU = `-ant-${Date.now()}-${Math.random()}`;
function uU(i, l) {
  const u = {}, f = (h, E) => {
    let x = h.clone();
    return x = (E == null ? void 0 : E(x)) || x, x.toRgbString();
  }, p = (h, E) => {
    const x = new ji(h), T = Qc(x.toRgbString());
    u[`${E}-color`] = f(x), u[`${E}-color-disabled`] = T[1], u[`${E}-color-hover`] = T[4], u[`${E}-color-active`] = T[6], u[`${E}-color-outline`] = x.clone().setAlpha(0.2).toRgbString(), u[`${E}-color-deprecated-bg`] = T[0], u[`${E}-color-deprecated-border`] = T[2];
  };
  if (l.primaryColor) {
    p(l.primaryColor, "primary");
    const h = new ji(l.primaryColor), E = Qc(h.toRgbString());
    E.forEach((T, N) => {
      u[`primary-${N + 1}`] = T;
    }), u["primary-color-deprecated-l-35"] = f(h, (T) => T.lighten(35)), u["primary-color-deprecated-l-20"] = f(h, (T) => T.lighten(20)), u["primary-color-deprecated-t-20"] = f(h, (T) => T.tint(20)), u["primary-color-deprecated-t-50"] = f(h, (T) => T.tint(50)), u["primary-color-deprecated-f-12"] = f(h, (T) => T.setAlpha(T.getAlpha() * 0.12));
    const x = new ji(E[0]);
    u["primary-color-active-deprecated-f-30"] = f(x, (T) => T.setAlpha(T.getAlpha() * 0.3)), u["primary-color-active-deprecated-d-02"] = f(x, (T) => T.darken(2));
  }
  return l.successColor && p(l.successColor, "success"), l.warningColor && p(l.warningColor, "warning"), l.errorColor && p(l.errorColor, "error"), l.infoColor && p(l.infoColor, "info"), `
  :root {
    ${Object.keys(u).map((h) => `--${i}-${h}: ${u[h]};`).join(`
`)}
  }
  `.trim();
}
function sU(i, l) {
  const u = uU(i, l);
  ii() ? Us(u, `${lU}-dynamic-theme`) : process.env.NODE_ENV !== "production" && L0(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const sE = /* @__PURE__ */ R.createContext(!1), cU = (i) => {
  let {
    children: l,
    disabled: u
  } = i;
  const f = R.useContext(sE);
  return /* @__PURE__ */ R.createElement(sE.Provider, {
    value: u != null ? u : f
  }, l);
}, fU = sE, cE = /* @__PURE__ */ R.createContext(void 0), dU = (i) => {
  let {
    children: l,
    size: u
  } = i;
  const f = R.useContext(cE);
  return /* @__PURE__ */ R.createElement(cE.Provider, {
    value: u || f
  }, l);
}, BE = cE;
function vU() {
  const i = zs(fU), l = zs(BE);
  return {
    componentDisabled: i,
    componentSize: l
  };
}
const s0 = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], pU = "5.14.1";
function Rb(i) {
  return i >= 0 && i <= 255;
}
function By(i, l) {
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
    g: E,
    b: x
  } = new ji(l).toRgb();
  for (let T = 0.01; T <= 1; T += 0.01) {
    const N = Math.round((u - h * (1 - T)) / T), _ = Math.round((f - E * (1 - T)) / T), O = Math.round((p - x * (1 - T)) / T);
    if (Rb(N) && Rb(_) && Rb(O))
      return new ji({
        r: N,
        g: _,
        b: O,
        a: Math.round(T * 100) / 100
      }).toRgbString();
  }
  return new ji({
    r: u,
    g: f,
    b: p,
    a: 1
  }).toRgbString();
}
var hU = function(i, l) {
  var u = {};
  for (var f in i)
    Object.prototype.hasOwnProperty.call(i, f) && l.indexOf(f) < 0 && (u[f] = i[f]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var p = 0, f = Object.getOwnPropertySymbols(i); p < f.length; p++)
      l.indexOf(f[p]) < 0 && Object.prototype.propertyIsEnumerable.call(i, f[p]) && (u[f[p]] = i[f[p]]);
  return u;
};
function GM(i) {
  const {
    override: l
  } = i, u = hU(i, ["override"]), f = Object.assign({}, l);
  Object.keys(Ph).forEach((O) => {
    delete f[O];
  });
  const p = Object.assign(Object.assign({}, u), f), y = 480, h = 576, E = 768, x = 992, T = 1200, N = 1600;
  if (p.motion === !1) {
    const O = "0s";
    p.motionDurationFast = O, p.motionDurationMid = O, p.motionDurationSlow = O;
  }
  return Object.assign(Object.assign(Object.assign({}, p), {
    // ============== Background ============== //
    colorFillContent: p.colorFillSecondary,
    colorFillContentHover: p.colorFill,
    colorFillAlter: p.colorFillQuaternary,
    colorBgContainerDisabled: p.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: p.colorBgContainer,
    colorSplit: By(p.colorBorderSecondary, p.colorBgContainer),
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
    colorErrorOutline: By(p.colorErrorBg, p.colorBgContainer),
    colorWarningOutline: By(p.colorWarningBg, p.colorBgContainer),
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
    controlOutline: By(p.colorPrimaryBg, p.colorBgContainer),
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
    screenSMMax: E - 1,
    screenMD: E,
    screenMDMin: E,
    screenMDMax: x - 1,
    screenLG: x,
    screenLGMin: x,
    screenLGMax: T - 1,
    screenXL: T,
    screenXLMin: T,
    screenXLMax: N - 1,
    screenXXL: N,
    screenXXLMin: N,
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
var z_ = function(i, l) {
  var u = {};
  for (var f in i)
    Object.prototype.hasOwnProperty.call(i, f) && l.indexOf(f) < 0 && (u[f] = i[f]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var p = 0, f = Object.getOwnPropertySymbols(i); p < f.length; p++)
      l.indexOf(f[p]) < 0 && Object.prototype.propertyIsEnumerable.call(i, f[p]) && (u[f[p]] = i[f[p]]);
  return u;
};
const YM = {
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
}, QM = {
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
}, mU = {
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
}, XM = (i, l, u) => {
  const f = u.getDerivativeToken(i), {
    override: p
  } = l, y = z_(l, ["override"]);
  let h = Object.assign(Object.assign({}, f), {
    override: p
  });
  return h = GM(h), y && Object.entries(y).forEach((E) => {
    let [x, T] = E;
    const {
      theme: N
    } = T, _ = z_(T, ["theme"]);
    let O = _;
    N && (O = XM(Object.assign(Object.assign({}, h), _), {
      override: _
    }, N)), h[x] = O;
  }), h;
};
function Xc() {
  const {
    token: i,
    hashed: l,
    theme: u,
    override: f,
    cssVar: p
  } = ki.useContext(WM), y = `${pU}-${l || ""}`, h = u || BM, [E, x, T] = a5(h, [Ph, i], {
    salt: y,
    override: f,
    getComputedToken: XM,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: GM,
    cssVar: p && {
      prefix: p.prefix,
      key: p.key,
      unitless: YM,
      ignore: QM,
      preserve: mU
    }
  });
  return [h, T, l ? x : "", E, p];
}
const gU = function(i) {
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
}, yU = () => ({
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
}), SU = (i) => ({
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
}), CU = (i, l, u) => {
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
let bU = /* @__PURE__ */ Zo(function i() {
  qo(this, i);
});
const qM = bU;
function EU(i, l, u) {
  return l = Ps(l), TE(i, y0() ? Reflect.construct(l, u || [], Ps(i).constructor) : l.apply(i, u));
}
let wU = /* @__PURE__ */ function(i) {
  rv(l, i);
  function l(u) {
    var f;
    return qo(this, l), f = EU(this, l), f.result = 0, u instanceof l ? f.result = u.result : typeof u == "number" && (f.result = u), f;
  }
  return Zo(l, [{
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
}(qM);
function xU(i, l, u) {
  return l = Ps(l), TE(i, y0() ? Reflect.construct(l, u || [], Ps(i).constructor) : l.apply(i, u));
}
const ZM = "CALC_UNIT";
function _b(i) {
  return typeof i == "number" ? `${i}${ZM}` : i;
}
let TU = /* @__PURE__ */ function(i) {
  rv(l, i);
  function l(u) {
    var f;
    return qo(this, l), f = xU(this, l), f.result = "", u instanceof l ? f.result = `(${u.result})` : typeof u == "number" ? f.result = _b(u) : typeof u == "string" && (f.result = u), f;
  }
  return Zo(l, [{
    key: "add",
    value: function(f) {
      return f instanceof l ? this.result = `${this.result} + ${f.getResult()}` : (typeof f == "number" || typeof f == "string") && (this.result = `${this.result} + ${_b(f)}`), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(f) {
      return f instanceof l ? this.result = `${this.result} - ${f.getResult()}` : (typeof f == "number" || typeof f == "string") && (this.result = `${this.result} - ${_b(f)}`), this.lowPriority = !0, this;
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
      } = f || {}, y = new RegExp(`${ZM}`, "g");
      return this.result = this.result.replace(y, p ? "px" : ""), typeof this.lowPriority != "undefined" ? `calc(${this.result})` : this.result;
    }
  }]), l;
}(qM);
const RU = (i) => {
  const l = i === "css" ? TU : wU;
  return (u) => new l(u);
};
function _U(i) {
  return i === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var l = arguments.length, u = new Array(l), f = 0; f < l; f++)
        u[f] = arguments[f];
      return `max(${u.map((p) => Lh(p)).join(",")})`;
    },
    min: function() {
      for (var l = arguments.length, u = new Array(l), f = 0; f < l; f++)
        u[f] = arguments[f];
      return `min(${u.map((p) => Lh(p)).join(",")})`;
    }
  };
}
const JM = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC != "undefined";
let fE = !0;
function z0() {
  for (var i = arguments.length, l = new Array(i), u = 0; u < i; u++)
    l[u] = arguments[u];
  if (!JM)
    return Object.assign.apply(Object, [{}].concat(l));
  fE = !1;
  const f = {};
  return l.forEach((p) => {
    Object.keys(p).forEach((h) => {
      Object.defineProperty(f, h, {
        configurable: !0,
        enumerable: !0,
        get: () => p[h]
      });
    });
  }), fE = !0, f;
}
const P_ = {};
function kU() {
}
const MU = (i) => {
  let l, u = i, f = kU;
  return JM && typeof Proxy != "undefined" && (l = /* @__PURE__ */ new Set(), u = new Proxy(i, {
    get(p, y) {
      return fE && l.add(y), p[y];
    }
  }), f = (p, y) => {
    var h;
    P_[p] = {
      global: Array.from(l),
      component: Object.assign(Object.assign({}, (h = P_[p]) === null || h === void 0 ? void 0 : h.component), y)
    };
  }), {
    token: u,
    keys: l,
    flush: f
  };
}, e2 = (i, l) => {
  const [u, f] = Xc();
  return oE({
    theme: u,
    token: f,
    hashId: "",
    path: ["ant-design-icons", i],
    nonce: () => l == null ? void 0 : l.nonce
  }, () => [{
    [`.${i}`]: Object.assign(Object.assign({}, yU()), {
      [`.${i} .${i}-icon`]: {
        display: "block"
      }
    })
  }]);
}, t2 = (i, l, u) => {
  var f;
  return typeof u == "function" ? u(z0(l, (f = l[i]) !== null && f !== void 0 ? f : {})) : u != null ? u : {};
}, n2 = (i, l, u, f) => {
  const p = Object.assign({}, l[i]);
  if (f != null && f.deprecatedTokens) {
    const {
      deprecatedTokens: h
    } = f;
    h.forEach((E) => {
      let [x, T] = E;
      var N;
      process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && oi(!(p != null && p[x]), `Component Token \`${String(x)}\` of ${i} is deprecated. Please use \`${String(T)}\` instead.`), (p != null && p[x] || p != null && p[T]) && ((N = p[T]) !== null && N !== void 0 || (p[T] = p == null ? void 0 : p[x]));
    });
  }
  const y = Object.assign(Object.assign({}, u), p);
  return Object.keys(y).forEach((h) => {
    y[h] === l[h] && delete y[h];
  }), y;
}, OU = (i, l) => `${[l, i.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-")}`;
function NU(i, l, u) {
  let f = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
  const p = Array.isArray(i) ? i : [i, i], [y] = p, h = p.join("-");
  return function(E) {
    let x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E;
    const [T, N, _, O, D] = Xc(), {
      getPrefixCls: z,
      iconPrefixCls: P,
      csp: A
    } = zs(qc), Y = z(), V = D ? "css" : "js", I = RU(V), {
      max: $,
      min: W
    } = _U(V), re = {
      theme: T,
      token: O,
      hashId: _,
      nonce: () => A == null ? void 0 : A.nonce,
      clientOnly: f.clientOnly,
      // antd is always at top of styles
      order: f.order || -999
    };
    return oE(Object.assign(Object.assign({}, re), {
      clientOnly: !1,
      path: ["Shared", Y]
    }), () => [{
      // Link
      "&": SU(O)
    }]), e2(P, A), [oE(Object.assign(Object.assign({}, re), {
      path: [h, E, P]
    }), () => {
      if (f.injectStyle === !1)
        return [];
      const {
        token: se,
        flush: Te
      } = MU(O), le = t2(y, N, u), ge = `.${E}`, Ee = n2(y, N, le, {
        deprecatedTokens: f.deprecatedTokens
      });
      D && Object.keys(le).forEach((Ce) => {
        le[Ce] = `var(${SM(Ce, OU(y, D.prefix))})`;
      });
      const ne = z0(se, {
        componentCls: ge,
        prefixCls: E,
        iconCls: `.${P}`,
        antCls: `.${Y}`,
        calc: I,
        max: $,
        min: W
      }, D ? le : Ee), fe = l(ne, {
        hashId: _,
        prefixCls: E,
        rootPrefixCls: Y,
        iconPrefixCls: P
      });
      return Te(y, Ee), [f.resetStyle === !1 ? null : CU(ne, E, x), fe];
    }), _];
  };
}
const DU = (i, l, u) => {
  function f(T) {
    return `${i}${T.slice(0, 1).toUpperCase()}${T.slice(1)}`;
  }
  const {
    unitless: p = {},
    injectStyle: y = !0
  } = u != null ? u : {}, h = {
    [f("zIndexPopup")]: !0
  };
  Object.keys(p).forEach((T) => {
    h[f(T)] = p[T];
  });
  const E = (T) => {
    let {
      rootCls: N,
      cssVar: _
    } = T;
    const [, O] = Xc();
    return L5({
      path: [i],
      prefix: _.prefix,
      key: _ == null ? void 0 : _.key,
      unitless: Object.assign(Object.assign({}, YM), h),
      ignore: QM,
      token: O,
      scope: N
    }, () => {
      const D = t2(i, O, l), z = n2(i, O, D, {
        deprecatedTokens: u == null ? void 0 : u.deprecatedTokens
      });
      return Object.keys(D).forEach((P) => {
        z[f(P)] = z[P], delete z[P];
      }), z;
    }), null;
  };
  return (T) => {
    const [, , , , N] = Xc();
    return [(_) => y && N ? /* @__PURE__ */ ki.createElement(ki.Fragment, null, /* @__PURE__ */ ki.createElement(E, {
      rootCls: T,
      cssVar: N,
      component: i
    }), _) : _, N == null ? void 0 : N.key];
  };
}, LU = (i, l, u, f) => {
  const p = NU(i, l, u, f), y = DU(Array.isArray(i) ? i[0] : i, u, f);
  return function(h) {
    let E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : h;
    const [, x] = p(h, E), [T, N] = y(E);
    return [T, x, N];
  };
};
function AU(i, l) {
  return s0.reduce((u, f) => {
    const p = i[`${f}1`], y = i[`${f}3`], h = i[`${f}6`], E = i[`${f}7`];
    return Object.assign(Object.assign({}, u), l(f, {
      lightColor: p,
      lightBorderColor: y,
      darkColor: h,
      textColor: E
    }));
  }, {});
}
const zU = Object.assign({}, R), {
  useId: U_
} = zU, PU = () => "", UU = typeof U_ == "undefined" ? PU : U_;
function IU(i, l) {
  var u, f;
  const p = D0("ConfigProvider"), y = i || {}, h = y.inherit === !1 || !l ? Object.assign(Object.assign({}, uE), {
    hashed: (u = l == null ? void 0 : l.hashed) !== null && u !== void 0 ? u : uE.hashed,
    cssVar: l == null ? void 0 : l.cssVar
  }) : l, E = UU();
  if (process.env.NODE_ENV !== "production") {
    const x = y.cssVar || h.cssVar, T = !!(typeof y.cssVar == "object" && (!((f = y.cssVar) === null || f === void 0) && f.key) || E);
    process.env.NODE_ENV !== "production" && p(!x || T, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return p0(() => {
    var x, T;
    if (!i)
      return l;
    const N = Object.assign({}, h.components);
    Object.keys(i.components || {}).forEach((D) => {
      N[D] = Object.assign(Object.assign({}, N[D]), i.components[D]);
    });
    const _ = `css-var-${E.replace(/:/g, "")}`, O = ((x = y.cssVar) !== null && x !== void 0 ? x : h.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: "ant"
    }, typeof h.cssVar == "object" ? h.cssVar : {}), typeof y.cssVar == "object" ? y.cssVar : {}), {
      key: typeof y.cssVar == "object" && ((T = y.cssVar) === null || T === void 0 ? void 0 : T.key) || _
    });
    return Object.assign(Object.assign(Object.assign({}, h), y), {
      token: Object.assign(Object.assign({}, h.token), y.token),
      components: N,
      cssVar: O
    });
  }, [y, h], (x, T) => x.some((N, _) => {
    const O = T[_];
    return !RE(N, O, !0);
  }));
}
function $U(i) {
  const {
    children: l
  } = i, [, u] = Xc(), {
    motion: f
  } = u, p = R.useRef(!1);
  return p.current = p.current || f === !1, p.current ? /* @__PURE__ */ R.createElement(n3, {
    motion: f
  }, l) : l;
}
const r2 = /* @__PURE__ */ R.memo((i) => {
  let {
    dropdownMatchSelectWidth: l
  } = i;
  return D0("ConfigProvider").deprecated(l === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null;
});
process.env.NODE_ENV !== "production" && (r2.displayName = "PropWarning");
const HU = process.env.NODE_ENV !== "production" ? r2 : () => null;
var FU = function(i, l) {
  var u = {};
  for (var f in i)
    Object.prototype.hasOwnProperty.call(i, f) && l.indexOf(f) < 0 && (u[f] = i[f]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var p = 0, f = Object.getOwnPropertySymbols(i); p < f.length; p++)
      l.indexOf(f[p]) < 0 && Object.prototype.propertyIsEnumerable.call(i, f[p]) && (u[f[p]] = i[f[p]]);
  return u;
};
let dE = !1;
process.env.NODE_ENV;
const jU = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"], VU = "ant";
let a2;
function BU() {
  return a2 || VU;
}
function WU(i) {
  return Object.keys(i).some((l) => l.endsWith("Color"));
}
const KU = (i) => {
  const {
    prefixCls: l,
    iconPrefixCls: u,
    theme: f,
    holderRender: p
  } = i;
  l !== void 0 && (a2 = l), f && WU(f) && (process.env.NODE_ENV !== "production" && L0(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), sU(BU(), f));
}, GU = (i) => {
  const {
    children: l,
    csp: u,
    autoInsertSpaceInButton: f,
    alert: p,
    anchor: y,
    form: h,
    locale: E,
    componentSize: x,
    direction: T,
    space: N,
    virtual: _,
    dropdownMatchSelectWidth: O,
    popupMatchSelectWidth: D,
    popupOverflow: z,
    legacyLocale: P,
    parentContext: A,
    iconPrefixCls: Y,
    theme: V,
    componentDisabled: I,
    segmented: $,
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
    message: _t,
    tag: Wt,
    table: Qe,
    card: wt,
    tabs: vt,
    timeline: ln,
    timePicker: Je,
    upload: Xt,
    notification: qt,
    tree: $t,
    colorPicker: _n,
    datePicker: kn,
    rangePicker: cn,
    flex: fn,
    wave: he,
    dropdown: Ie,
    warning: We,
    tour: zt
  } = i, Pt = R.useCallback((jt, Le) => {
    const {
      prefixCls: Ye
    } = i;
    if (Le)
      return Le;
    const It = Ye || A.getPrefixCls("");
    return jt ? `${It}-${jt}` : It;
  }, [A.getPrefixCls, i.prefixCls]), pt = Y || A.iconPrefixCls || KM, ht = u || A.csp;
  e2(pt, ht);
  const Mn = IU(V, A.theme);
  process.env.NODE_ENV !== "production" && (dE = dE || !!Mn);
  const Ut = {
    csp: ht,
    autoInsertSpaceInButton: f,
    alert: p,
    anchor: y,
    locale: E || P,
    direction: T,
    space: N,
    virtual: _,
    popupMatchSelectWidth: D != null ? D : O,
    popupOverflow: z,
    getPrefixCls: Pt,
    iconPrefixCls: pt,
    theme: Mn,
    segmented: $,
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
    message: _t,
    tag: Wt,
    table: Qe,
    card: wt,
    tabs: vt,
    timeline: ln,
    timePicker: Je,
    upload: Xt,
    notification: qt,
    tree: $t,
    colorPicker: _n,
    datePicker: kn,
    rangePicker: cn,
    flex: fn,
    wave: he,
    dropdown: Ie,
    warning: We,
    tour: zt
  }, Zt = Object.assign({}, A);
  Object.keys(Ut).forEach((jt) => {
    Ut[jt] !== void 0 && (Zt[jt] = Ut[jt]);
  }), jU.forEach((jt) => {
    const Le = i[jt];
    Le && (Zt[jt] = Le);
  });
  const Ht = p0(() => Zt, Zt, (jt, Le) => {
    const Ye = Object.keys(jt), It = Object.keys(Le);
    return Ye.length !== It.length || Ye.some((En) => jt[En] !== Le[En]);
  }), tn = R.useMemo(() => ({
    prefixCls: pt,
    csp: ht
  }), [pt, ht]);
  let Kt = /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(HU, {
    dropdownMatchSelectWidth: O
  }), l);
  const Jt = R.useMemo(() => {
    var jt, Le, Ye, It;
    return I5(((jt = A0.Form) === null || jt === void 0 ? void 0 : jt.defaultValidateMessages) || {}, ((Ye = (Le = Ht.locale) === null || Le === void 0 ? void 0 : Le.Form) === null || Ye === void 0 ? void 0 : Ye.defaultValidateMessages) || {}, ((It = Ht.form) === null || It === void 0 ? void 0 : It.validateMessages) || {}, (h == null ? void 0 : h.validateMessages) || {});
  }, [Ht, h == null ? void 0 : h.validateMessages]);
  Object.keys(Jt).length > 0 && (Kt = /* @__PURE__ */ R.createElement(H5.Provider, {
    value: Jt
  }, Kt)), E && (Kt = /* @__PURE__ */ R.createElement(G5, {
    locale: E,
    _ANT_MARK__: FM
  }, Kt)), (pt || ht) && (Kt = /* @__PURE__ */ R.createElement(PE.Provider, {
    value: tn
  }, Kt)), x && (Kt = /* @__PURE__ */ R.createElement(dU, {
    size: x
  }, Kt)), Kt = /* @__PURE__ */ R.createElement($U, null, Kt);
  const xt = R.useMemo(() => {
    const jt = Mn || {}, {
      algorithm: Le,
      token: Ye,
      components: It,
      cssVar: En
    } = jt, nr = FU(jt, ["algorithm", "token", "components", "cssVar"]), On = Le && (!Array.isArray(Le) || Le.length > 0) ? Jb(Le) : BM, Qr = {};
    Object.entries(It || {}).forEach((ar) => {
      let [yr, Ca] = ar;
      const Ln = Object.assign({}, Ca);
      "algorithm" in Ln && (Ln.algorithm === !0 ? Ln.theme = On : (Array.isArray(Ln.algorithm) || typeof Ln.algorithm == "function") && (Ln.theme = Jb(Ln.algorithm)), delete Ln.algorithm), Qr[yr] = Ln;
    });
    const rr = Object.assign(Object.assign({}, Ph), Ye);
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
  return V && (Kt = /* @__PURE__ */ R.createElement(WM.Provider, {
    value: xt
  }, Kt)), Ht.warning && (Kt = /* @__PURE__ */ R.createElement(IM.Provider, {
    value: Ht.warning
  }, Kt)), I !== void 0 && (Kt = /* @__PURE__ */ R.createElement(cU, {
    disabled: I
  }, Kt)), /* @__PURE__ */ R.createElement(qc.Provider, {
    value: Ht
  }, Kt);
}, ov = (i) => {
  const l = R.useContext(qc), u = R.useContext(HM);
  return /* @__PURE__ */ R.createElement(GU, Object.assign({
    parentContext: l,
    legacyLocale: u
  }, i));
};
ov.ConfigContext = qc;
ov.SizeContext = BE;
ov.config = KU;
ov.useConfig = vU;
Object.defineProperty(ov, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && L0(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), BE)
});
process.env.NODE_ENV !== "production" && (ov.displayName = "ConfigProvider");
const YU = /* @__PURE__ */ R.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
});
var QU = function(i, l) {
  var u = {};
  for (var f in i)
    Object.prototype.hasOwnProperty.call(i, f) && l.indexOf(f) < 0 && (u[f] = i[f]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var p = 0, f = Object.getOwnPropertySymbols(i); p < f.length; p++)
      l.indexOf(f[p]) < 0 && Object.prototype.propertyIsEnumerable.call(i, f[p]) && (u[f[p]] = i[f[p]]);
  return u;
};
const I_ = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, i2 = /* @__PURE__ */ R.createContext({}), XU = /* @__PURE__ */ (() => {
  let i = 0;
  return function() {
    let l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    return i += 1, `${l}${i}`;
  };
})(), qU = /* @__PURE__ */ R.forwardRef((i, l) => {
  const {
    prefixCls: u,
    className: f,
    trigger: p,
    children: y,
    defaultCollapsed: h = !1,
    theme: E = "dark",
    style: x = {},
    collapsible: T = !1,
    reverseArrow: N = !1,
    width: _ = 200,
    collapsedWidth: O = 80,
    zeroWidthTriggerStyle: D,
    breakpoint: z,
    onCollapse: P,
    onBreakpoint: A
  } = i, Y = QU(i, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), {
    siderHook: V
  } = zs(YU), [I, $] = uo("collapsed" in i ? i.collapsed : h), [W, re] = uo(!1);
  Al(() => {
    "collapsed" in i && $(i.collapsed);
  }, [i.collapsed]);
  const G = (ne, fe) => {
    "collapsed" in i || $(ne), P == null || P(ne, fe);
  }, se = _i();
  se.current = (ne) => {
    re(ne.matches), A == null || A(ne.matches), I !== ne.matches && G(ne.matches, "responsive");
  }, Al(() => {
    function ne(Ce) {
      return se.current(Ce);
    }
    let fe;
    if (typeof window != "undefined") {
      const {
        matchMedia: Ce
      } = window;
      if (Ce && z && z in I_) {
        fe = Ce(`screen and (max-width: ${I_[z]})`);
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
  }, [z]), Al(() => {
    const ne = XU("ant-sider-");
    return V.addSider(ne), () => V.removeSider(ne);
  }, []);
  const Te = () => {
    G(!I, "clickTrigger");
  }, {
    getPrefixCls: le
  } = zs(qc), ge = () => {
    const ne = le("layout-sider", u), fe = E0(Y, ["collapsed"]), Ce = I ? O : _, we = T6(Ce) ? `${Ce}px` : String(Ce), Ne = parseFloat(String(O || 0)) === 0 ? /* @__PURE__ */ R.createElement("span", {
      onClick: Te,
      className: Fn(`${ne}-zero-width-trigger`, `${ne}-zero-width-trigger-${N ? "right" : "left"}`),
      style: D
    }, p || /* @__PURE__ */ R.createElement(C6, null)) : null, ae = {
      expanded: N ? /* @__PURE__ */ R.createElement(x_, null) : /* @__PURE__ */ R.createElement(w_, null),
      collapsed: N ? /* @__PURE__ */ R.createElement(w_, null) : /* @__PURE__ */ R.createElement(x_, null)
    }[I ? "collapsed" : "expanded"], ze = p !== null ? Ne || /* @__PURE__ */ R.createElement("div", {
      className: `${ne}-trigger`,
      onClick: Te,
      style: {
        width: we
      }
    }, p || ae) : null, De = Object.assign(Object.assign({}, x), {
      flex: `0 0 ${we}`,
      maxWidth: we,
      minWidth: we,
      width: we
    }), ft = Fn(ne, `${ne}-${E}`, {
      [`${ne}-collapsed`]: !!I,
      [`${ne}-has-trigger`]: T && p !== null && !Ne,
      [`${ne}-below`]: !!W,
      [`${ne}-zero-width`]: parseFloat(we) === 0
    }, f);
    return /* @__PURE__ */ R.createElement("aside", Object.assign({
      className: ft
    }, fe, {
      style: De,
      ref: l
    }), /* @__PURE__ */ R.createElement("div", {
      className: `${ne}-children`
    }, y), T || W && Ne ? ze : null);
  }, Ee = R.useMemo(() => ({
    siderCollapsed: I
  }), [I]);
  return /* @__PURE__ */ R.createElement(i2.Provider, {
    value: Ee
  }, ge());
});
process.env.NODE_ENV !== "production" && (qU.displayName = "Sider");
function o2(i) {
  var l = i.children, u = i.prefixCls, f = i.id, p = i.overlayInnerStyle, y = i.className, h = i.style;
  return /* @__PURE__ */ R.createElement("div", {
    className: Fn("".concat(u, "-content"), y),
    style: h
  }, /* @__PURE__ */ R.createElement("div", {
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
}, lo = [0, 0], ZU = {
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
}, JU = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow"], eI = function(l, u) {
  var f = l.overlayClassName, p = l.trigger, y = p === void 0 ? ["hover"] : p, h = l.mouseEnterDelay, E = h === void 0 ? 0 : h, x = l.mouseLeaveDelay, T = x === void 0 ? 0.1 : x, N = l.overlayStyle, _ = l.prefixCls, O = _ === void 0 ? "rc-tooltip" : _, D = l.children, z = l.onVisibleChange, P = l.afterVisibleChange, A = l.transitionName, Y = l.animation, V = l.motion, I = l.placement, $ = I === void 0 ? "right" : I, W = l.align, re = W === void 0 ? {} : W, G = l.destroyTooltipOnHide, se = G === void 0 ? !1 : G, Te = l.defaultVisible, le = l.getTooltipContainer, ge = l.overlayInnerStyle;
  l.arrowContent;
  var Ee = l.overlay, ne = l.id, fe = l.showArrow, Ce = fe === void 0 ? !0 : fe, we = tr(l, JU), Ne = _i(null);
  ek(u, function() {
    return Ne.current;
  });
  var ee = Re({}, we);
  "visible" in l && (ee.popupVisible = l.visible);
  var de = function() {
    return /* @__PURE__ */ R.createElement(o2, {
      key: "content",
      prefixCls: O,
      id: ne,
      overlayInnerStyle: ge
    }, Ee);
  };
  return /* @__PURE__ */ R.createElement(aM, bn({
    popupClassName: f,
    prefixCls: O,
    popup: de,
    action: y,
    builtinPlacements: ZU,
    popupPlacement: $,
    ref: Ne,
    popupAlign: re,
    getPopupContainer: le,
    onPopupVisibleChange: z,
    afterPopupVisibleChange: P,
    popupTransitionName: A,
    popupAnimation: Y,
    popupMotion: V,
    defaultPopupVisible: Te,
    autoDestroy: se,
    mouseLeaveDelay: T,
    popupStyle: N,
    mouseEnterDelay: E,
    arrow: Ce
  }, ee), D);
};
const tI = /* @__PURE__ */ Jz(eI), l2 = /* @__PURE__ */ ki.createContext(void 0);
process.env.NODE_ENV !== "production" && (l2.displayName = "zIndexContext");
const u2 = l2, Bc = 100, nI = 10, rI = Bc * nI, s2 = {
  Modal: Bc,
  Drawer: Bc,
  Popover: Bc,
  Popconfirm: Bc,
  Tooltip: Bc,
  Tour: Bc
}, aI = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function iI(i) {
  return i in s2;
}
function oI(i, l) {
  const [, u] = Xc(), f = ki.useContext(u2), p = iI(i);
  if (l !== void 0)
    return [l, l];
  let y = f != null ? f : 0;
  return p ? (y += // Use preset token zIndex by default but not stack when has parent container
  (f ? 0 : u.zIndexPopupBase) + // Container offset
  s2[i], y = Math.min(y, u.zIndexPopupBase + rI)) : y += aI[i], [f === void 0 ? l : y, y];
}
const lI = (i, l, u) => u !== void 0 ? u : `${i}-${l}`;
function uI(i) {
  const {
    sizePopupArrow: l,
    borderRadiusXS: u,
    borderRadiusOuter: f
  } = i, p = l / 2, y = 0, h = p, E = f * 1 / Math.sqrt(2), x = p - f * (1 - 1 / Math.sqrt(2)), T = p - u * (1 / Math.sqrt(2)), N = f * (Math.sqrt(2) - 1) + u * (1 / Math.sqrt(2)), _ = 2 * p - T, O = N, D = 2 * p - E, z = x, P = 2 * p - y, A = h, Y = p * Math.sqrt(2) + f * (Math.sqrt(2) - 2), V = f * (Math.sqrt(2) - 1), I = `polygon(${V}px 100%, 50% ${V}px, ${2 * p - V}px 100%, ${V}px 100%)`, $ = `path('M ${y} ${h} A ${f} ${f} 0 0 0 ${E} ${x} L ${T} ${N} A ${u} ${u} 0 0 1 ${_} ${O} L ${D} ${z} A ${f} ${f} 0 0 0 ${P} ${A} Z')`;
  return {
    arrowShadowWidth: Y,
    arrowPath: $,
    arrowPolygon: I
  };
}
const sI = (i, l, u) => {
  const {
    sizePopupArrow: f,
    arrowPolygon: p,
    arrowPath: y,
    arrowShadowWidth: h,
    borderRadiusXS: E,
    calc: x
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
      height: x(f).div(2).equal(),
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
        value: `0 0 ${Lh(E)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: u,
      zIndex: 0,
      background: "transparent"
    }
  };
}, c2 = 8;
function f2(i) {
  const {
    contentRadius: l,
    limitVerticalRadius: u
  } = i, f = l > 12 ? l + 2 : 12;
  return {
    arrowOffsetHorizontal: f,
    arrowOffsetVertical: u ? c2 : f
  };
}
function Wy(i, l) {
  return i ? l : {};
}
function cI(i, l, u) {
  const {
    componentCls: f,
    boxShadowPopoverArrow: p,
    arrowOffsetVertical: y,
    arrowOffsetHorizontal: h
  } = i, {
    arrowDistance: E = 0,
    arrowPlacement: x = {
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
      }, sI(i, l, p)), {
        "&:before": {
          background: l
        }
      })]
    }, Wy(!!x.top, {
      [[`&-placement-top > ${f}-arrow`, `&-placement-topLeft > ${f}-arrow`, `&-placement-topRight > ${f}-arrow`].join(",")]: {
        bottom: E,
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
    })), Wy(!!x.bottom, {
      [[`&-placement-bottom > ${f}-arrow`, `&-placement-bottomLeft > ${f}-arrow`, `&-placement-bottomRight > ${f}-arrow`].join(",")]: {
        top: E,
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
    })), Wy(!!x.left, {
      [[`&-placement-left > ${f}-arrow`, `&-placement-leftTop > ${f}-arrow`, `&-placement-leftBottom > ${f}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: E
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
    })), Wy(!!x.right, {
      [[`&-placement-right > ${f}-arrow`, `&-placement-rightTop > ${f}-arrow`, `&-placement-rightBottom > ${f}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: E
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
function fI(i, l, u, f) {
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
const $_ = {
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
}, dI = {
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
}, vI = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function pI(i) {
  const {
    arrowWidth: l,
    autoAdjustOverflow: u,
    arrowPointAtCenter: f,
    offset: p,
    borderRadius: y,
    visibleFirst: h
  } = i, E = l / 2, x = {};
  return Object.keys($_).forEach((T) => {
    const N = f && dI[T] || $_[T], _ = Object.assign(Object.assign({}, N), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (x[T] = _, vI.has(T) && (_.autoArrow = !1), T) {
      case "top":
      case "topLeft":
      case "topRight":
        _.offset[1] = -E - p;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        _.offset[1] = E + p;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        _.offset[0] = -E - p;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        _.offset[0] = E + p;
        break;
    }
    const O = f2({
      contentRadius: y,
      limitVerticalRadius: !0
    });
    if (f)
      switch (T) {
        case "topLeft":
        case "bottomLeft":
          _.offset[0] = -O.arrowOffsetHorizontal - E;
          break;
        case "topRight":
        case "bottomRight":
          _.offset[0] = O.arrowOffsetHorizontal + E;
          break;
        case "leftTop":
        case "rightTop":
          _.offset[1] = -O.arrowOffsetHorizontal - E;
          break;
        case "leftBottom":
        case "rightBottom":
          _.offset[1] = O.arrowOffsetHorizontal + E;
          break;
      }
    _.overflow = fI(T, O, l, u), h && (_.htmlRegion = "visibleFirst");
  }), x;
}
const {
  isValidElement: Uh
} = R;
function hI(i) {
  return i && Uh(i) && i.type === R.Fragment;
}
function mI(i, l, u) {
  return Uh(i) ? /* @__PURE__ */ R.cloneElement(i, typeof u == "function" ? u(i.props || {}) : u) : l;
}
function d2(i, l) {
  return mI(i, i, l);
}
const gI = /* @__PURE__ */ R.createContext(null), yI = (i) => {
  let {
    children: l
  } = i;
  return /* @__PURE__ */ R.createElement(gI.Provider, {
    value: null
  }, l);
}, SI = (i) => ({
  animationDuration: i,
  animationFillMode: "both"
}), CI = (i) => ({
  animationDuration: i,
  animationFillMode: "both"
}), bI = function(i, l, u, f) {
  const y = (arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1) ? "&" : "";
  return {
    [`
      ${y}${i}-enter,
      ${y}${i}-appear
    `]: Object.assign(Object.assign({}, SI(f)), {
      animationPlayState: "paused"
    }),
    [`${y}${i}-leave`]: Object.assign(Object.assign({}, CI(f)), {
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
}, EI = new fo("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), wI = new fo("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), H_ = new fo("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), F_ = new fo("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), xI = new fo("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), TI = new fo("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), RI = new fo("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), _I = new fo("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), kI = new fo("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), MI = new fo("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), OI = new fo("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), NI = new fo("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), DI = {
  zoom: {
    inKeyframes: EI,
    outKeyframes: wI
  },
  "zoom-big": {
    inKeyframes: H_,
    outKeyframes: F_
  },
  "zoom-big-fast": {
    inKeyframes: H_,
    outKeyframes: F_
  },
  "zoom-left": {
    inKeyframes: RI,
    outKeyframes: _I
  },
  "zoom-right": {
    inKeyframes: kI,
    outKeyframes: MI
  },
  "zoom-up": {
    inKeyframes: xI,
    outKeyframes: TI
  },
  "zoom-down": {
    inKeyframes: OI,
    outKeyframes: NI
  }
}, LI = (i, l) => {
  const {
    antCls: u
  } = i, f = `${u}-${l}`, {
    inKeyframes: p,
    outKeyframes: y
  } = DI[l];
  return [bI(f, p, y, l === "zoom-big-fast" ? i.motionDurationFast : i.motionDurationMid), {
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
}, AI = (i) => {
  const {
    componentCls: l,
    // ant-tooltip
    tooltipMaxWidth: u,
    tooltipColor: f,
    tooltipBg: p,
    tooltipBorderRadius: y,
    zIndexPopup: h,
    controlHeight: E,
    boxShadowSecondary: x,
    paddingSM: T,
    paddingXS: N
  } = i;
  return [
    {
      [l]: Object.assign(Object.assign(Object.assign(Object.assign({}, gU(i)), {
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
          minWidth: E,
          minHeight: E,
          padding: `${Lh(i.calc(T).div(2).equal())} ${Lh(N)}`,
          color: f,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: p,
          borderRadius: y,
          boxShadow: x,
          boxSizing: "border-box"
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${l}-inner`]: {
            borderRadius: i.min(y, c2)
          }
        },
        [`${l}-content`]: {
          position: "relative"
        }
      }), AU(i, (_, O) => {
        let {
          darkColor: D
        } = O;
        return {
          [`&${l}-${_}`]: {
            [`${l}-inner`]: {
              backgroundColor: D
            },
            [`${l}-arrow`]: {
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
    cI(i, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${l}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: i.sizePopupArrow
      }
    }
  ];
}, zI = (i) => Object.assign(Object.assign({
  zIndexPopup: i.zIndexPopupBase + 70
}, f2({
  contentRadius: i.borderRadius,
  limitVerticalRadius: !0
})), uI(z0(i, {
  borderRadiusOuter: Math.min(i.borderRadiusOuter, 4)
}))), v2 = function(i) {
  let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return LU("Tooltip", (f) => {
    const {
      borderRadius: p,
      colorTextLightSolid: y,
      colorBgSpotlight: h
    } = f, E = z0(f, {
      // default variables
      tooltipMaxWidth: 250,
      tooltipColor: y,
      tooltipBorderRadius: p,
      tooltipBg: h
    });
    return [AI(E), LI(f, "zoom-big-fast")];
  }, zI, {
    resetStyle: !1,
    // Popover use Tooltip as internal component. We do not need to handle this.
    injectStyle: l
  })(i);
}, PI = s0.map((i) => `${i}-inverse`);
function UI(i) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) ? [].concat(Tr(PI), Tr(s0)).includes(i) : s0.includes(i);
}
function p2(i, l) {
  const u = UI(l), f = Fn({
    [`${i}-${l}`]: l && u
  }), p = {}, y = {};
  return l && !u && (p.background = l, y["--antd-arrow-background-color"] = l), {
    className: f,
    overlayStyle: p,
    arrowStyle: y
  };
}
const II = (i) => {
  const {
    prefixCls: l,
    className: u,
    placement: f = "top",
    title: p,
    color: y,
    overlayInnerStyle: h
  } = i, {
    getPrefixCls: E
  } = R.useContext(qc), x = E("tooltip", l), [T, N, _] = v2(x), O = p2(x, y), D = O.arrowStyle, z = Object.assign(Object.assign({}, h), O.overlayStyle), P = Fn(N, _, x, `${x}-pure`, `${x}-placement-${f}`, u, O.className);
  return T(/* @__PURE__ */ R.createElement("div", {
    className: P,
    style: D
  }, /* @__PURE__ */ R.createElement("div", {
    className: `${x}-arrow`
  }), /* @__PURE__ */ R.createElement(o2, Object.assign({}, i, {
    className: N,
    prefixCls: x,
    overlayInnerStyle: z
  }), p)));
}, $I = II;
var HI = function(i, l) {
  var u = {};
  for (var f in i)
    Object.prototype.hasOwnProperty.call(i, f) && l.indexOf(f) < 0 && (u[f] = i[f]);
  if (i != null && typeof Object.getOwnPropertySymbols == "function")
    for (var p = 0, f = Object.getOwnPropertySymbols(i); p < f.length; p++)
      l.indexOf(f[p]) < 0 && Object.prototype.propertyIsEnumerable.call(i, f[p]) && (u[f[p]] = i[f[p]]);
  return u;
};
const WE = /* @__PURE__ */ R.forwardRef((i, l) => {
  var u, f;
  const {
    prefixCls: p,
    openClassName: y,
    getTooltipContainer: h,
    overlayClassName: E,
    color: x,
    overlayInnerStyle: T,
    children: N,
    afterOpenChange: _,
    afterVisibleChange: O,
    destroyTooltipOnHide: D,
    arrow: z = !0,
    title: P,
    overlay: A,
    builtinPlacements: Y,
    arrowPointAtCenter: V = !1,
    autoAdjustOverflow: I = !0
  } = i, $ = !!z, [, W] = Xc(), {
    getPopupContainer: re,
    getPrefixCls: G,
    direction: se
  } = R.useContext(qc), Te = D0("Tooltip"), le = R.useRef(null), ge = () => {
    var Je;
    (Je = le.current) === null || Je === void 0 || Je.forceAlign();
  };
  R.useImperativeHandle(l, () => ({
    forceAlign: ge,
    forcePopupAlign: () => {
      Te.deprecated(!1, "forcePopupAlign", "forceAlign"), ge();
    }
  })), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"]].forEach((Je) => {
    let [Xt, qt] = Je;
    Te.deprecated(!(Xt in i), Xt, qt);
  }), process.env.NODE_ENV !== "production" && Te(!D || typeof D == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && Te(!z || typeof z == "boolean" || !("arrowPointAtCenter" in z), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [Ee, ne] = xh(!1, {
    value: (u = i.open) !== null && u !== void 0 ? u : i.visible,
    defaultValue: (f = i.defaultOpen) !== null && f !== void 0 ? f : i.defaultVisible
  }), fe = !P && !A && P !== 0, Ce = (Je) => {
    var Xt, qt;
    ne(fe ? !1 : Je), fe || ((Xt = i.onOpenChange) === null || Xt === void 0 || Xt.call(i, Je), (qt = i.onVisibleChange) === null || qt === void 0 || qt.call(i, Je));
  }, we = R.useMemo(() => {
    var Je, Xt;
    let qt = V;
    return typeof z == "object" && (qt = (Xt = (Je = z.pointAtCenter) !== null && Je !== void 0 ? Je : z.arrowPointAtCenter) !== null && Xt !== void 0 ? Xt : V), Y || pI({
      arrowPointAtCenter: qt,
      autoAdjustOverflow: I,
      arrowWidth: $ ? W.sizePopupArrow : 0,
      borderRadius: W.borderRadius,
      offset: W.marginXXS,
      visibleFirst: !0
    });
  }, [V, z, Y, W]), Ne = R.useMemo(() => P === 0 ? P : A || P || "", [A, P]), ee = /* @__PURE__ */ R.createElement(yI, null, typeof Ne == "function" ? Ne() : Ne), {
    getPopupContainer: de,
    placement: ae = "top",
    mouseEnterDelay: ze = 0.1,
    mouseLeaveDelay: De = 0.1,
    overlayStyle: ft,
    rootClassName: dt
  } = i, At = HI(i, ["getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName"]), it = G("tooltip", p), Rt = G(), st = i["data-popover-inject"];
  let Mt = Ee;
  !("open" in i) && !("visible" in i) && fe && (Mt = !1);
  const Gt = Uh(N) && !hI(N) ? N : /* @__PURE__ */ R.createElement("span", null, N), Ze = Gt.props, Ft = !Ze.className || typeof Ze.className == "string" ? Fn(Ze.className, y || `${it}-open`) : Ze.className, [Ot, Se, Et] = v2(it, !st), Ct = p2(it, x), _t = Ct.arrowStyle, Wt = Object.assign(Object.assign({}, T), Ct.overlayStyle), Qe = Fn(E, {
    [`${it}-rtl`]: se === "rtl"
  }, Ct.className, dt, Se, Et), [wt, vt] = oI("Tooltip", At.zIndex), ln = /* @__PURE__ */ R.createElement(tI, Object.assign({}, At, {
    zIndex: wt,
    showArrow: $,
    placement: ae,
    mouseEnterDelay: ze,
    mouseLeaveDelay: De,
    prefixCls: it,
    overlayClassName: Qe,
    overlayStyle: Object.assign(Object.assign({}, _t), ft),
    getTooltipContainer: de || h || re,
    ref: le,
    builtinPlacements: we,
    overlay: ee,
    visible: Mt,
    onVisibleChange: Ce,
    afterVisibleChange: _ != null ? _ : O,
    overlayInnerStyle: Wt,
    arrowContent: /* @__PURE__ */ R.createElement("span", {
      className: `${it}-arrow-content`
    }),
    motion: {
      motionName: lI(Rt, "zoom-big-fast", i.transitionName),
      motionDeadline: 1e3
    },
    destroyTooltipOnHide: !!D
  }), Mt ? d2(Gt, {
    className: Ft
  }) : Gt);
  return Ot(/* @__PURE__ */ R.createElement(u2.Provider, {
    value: vt
  }, ln));
});
process.env.NODE_ENV !== "production" && (WE.displayName = "Tooltip");
WE._InternalPanelDoNotUseOrYouWillBeFired = $I;
const FI = WE, jI = /* @__PURE__ */ f0({
  prefixCls: "",
  firstLevel: !0,
  inlineCollapsed: !1
}), VI = jI, BI = (i) => {
  var l;
  const {
    className: u,
    children: f,
    icon: p,
    title: y,
    danger: h
  } = i, {
    prefixCls: E,
    firstLevel: x,
    direction: T,
    disableMenuItemTitleTooltip: N,
    inlineCollapsed: _
  } = R.useContext(VI), O = (V) => {
    const I = /* @__PURE__ */ R.createElement("span", {
      className: `${E}-title-content`
    }, f);
    return (!p || Uh(f) && f.type === "span") && f && V && x && typeof f == "string" ? /* @__PURE__ */ R.createElement("div", {
      className: `${E}-inline-collapsed-noicon`
    }, f.charAt(0)) : I;
  }, {
    siderCollapsed: D
  } = R.useContext(i2);
  let z = y;
  typeof y == "undefined" ? z = x ? f : "" : y === !1 && (z = "");
  const P = {
    title: z
  };
  !D && !_ && (P.title = null, P.open = !1);
  const A = Mh(f).length;
  let Y = /* @__PURE__ */ R.createElement(w0, Object.assign({}, E0(i, ["title", "icon", "danger"]), {
    className: Fn({
      [`${E}-item-danger`]: h,
      [`${E}-item-only-child`]: (p ? A + 1 : A) === 1
    }, u),
    title: typeof y == "string" ? y : void 0
  }), d2(p, {
    className: Fn(Uh(p) ? (l = p.props) === null || l === void 0 ? void 0 : l.className : "", `${E}-item-icon`)
  }), O(_));
  return N || (Y = /* @__PURE__ */ R.createElement(FI, Object.assign({}, P, {
    placement: T === "rtl" ? "left" : "right",
    overlayClassName: `${E}-inline-collapsed-tooltip`
  }), Y)), Y;
}, Y$ = BI, P0 = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Qz, Oe({}, i)) }), Q$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(Xz, Oe({}, i)) }), X$ = (i) => /* @__PURE__ */ B(Ge, { children: /* @__PURE__ */ B(qz, Oe({}, i)) });
function KE(i) {
  var l;
  return /* @__PURE__ */ ai(zl, { vertical: !0, className: "globalNavigation__icon " + ((l = i.className) != null ? l : ""), onClick: i.onClick, children: [
    i.icon,
    !i.hideLabel && /* @__PURE__ */ B("span", { className: "globalNavigation__iconLabel", children: i.label })
  ] });
}
function WI(i) {
  return /* @__PURE__ */ ai(zl, { vertical: !0, className: "globalNavigation__suiteLogo", children: [
    /* @__PURE__ */ B(KE, { icon: i.icon, label: "", hideLabel: !0, className: "globalNavigation__icon--suiteLogo" }),
    i.label,
    /* @__PURE__ */ B("div", { className: "globalNavigation__divider" })
  ] });
}
const KI = (i) => /* @__PURE__ */ R.createElement("svg", Oe({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", id: "search-colorable" }, i), /* @__PURE__ */ R.createElement("path", { d: "M16.8004 10.2004C16.8004 9.33367 16.6297 8.47543 16.298 7.67468C15.9663 6.87393 15.4802 6.14635 14.8673 5.53349C14.2544 4.92062 13.5268 4.43447 12.7261 4.10279C11.9254 3.7711 11.0671 3.60039 10.2004 3.60039C9.33367 3.60039 8.47543 3.7711 7.67468 4.10279C6.87393 4.43447 6.14635 4.92062 5.53349 5.53349C4.92062 6.14635 4.43447 6.87393 4.10279 7.67468C3.7711 8.47543 3.60039 9.33367 3.60039 10.2004C3.60039 11.0671 3.7711 11.9254 4.10279 12.7261C4.43447 13.5268 4.92062 14.2544 5.53349 14.8673C6.14635 15.4802 6.87393 15.9663 7.67468 16.298C8.47543 16.6297 9.33367 16.8004 10.2004 16.8004C11.0671 16.8004 11.9254 16.6297 12.7261 16.298C13.5268 15.9663 14.2544 15.4802 14.8673 14.8673C15.4802 14.2544 15.9663 13.5268 16.298 12.7261C16.6297 11.9254 16.8004 11.0671 16.8004 10.2004ZM15.2741 16.1254C13.9129 17.2954 12.1391 18.0004 10.2004 18.0004C5.89164 18.0004 2.40039 14.5091 2.40039 10.2004C2.40039 5.89164 5.89164 2.40039 10.2004 2.40039C14.5091 2.40039 18.0004 5.89164 18.0004 10.2004C18.0004 12.1391 17.2954 13.9129 16.1254 15.2741L21.4241 20.5766C21.6566 20.8091 21.6566 21.1916 21.4241 21.4241C21.1916 21.6566 20.8091 21.6566 20.5766 21.4241L15.2741 16.1254Z", fill: "currentColor" }));
function GI(i) {
  return /* @__PURE__ */ B("span", { className: "globalNavigation__search", onClick: i.onClick, children: /* @__PURE__ */ B(
    d0,
    {
      placement: "right",
      title: /* @__PURE__ */ ai(gP, { size: "large", children: [
        /* @__PURE__ */ B(Lu, { children: "Search" }),
        /* @__PURE__ */ B(Lu, { children: "Ctrl + K" })
      ] }),
      children: /* @__PURE__ */ B(zl, { className: "globalNavigation__searchButtonWrapper", children: /* @__PURE__ */ B(Hh, { className: "globalNavigation__searchButton", shape: "round", icon: /* @__PURE__ */ B(KI, { className: "globalNavigation__searchIcon" }) }) })
    }
  ) });
}
function YI(i) {
  return /* @__PURE__ */ ai(Lu, { children: [
    i.type === "link" && /* @__PURE__ */ B(d0, { title: i.hideLabel ? i.label : void 0, placement: "right", children: /* @__PURE__ */ B(
      KE,
      {
        className: `globalNavigation__item ${i.isActive ? " globalNavigation__item--active" : ""}`,
        icon: i.icon,
        label: i.label,
        onClick: i.onClick,
        hideLabel: i.hideLabel
      }
    ) }),
    i.type === "menu" && /* @__PURE__ */ B(vE, { items: i.items })
  ] });
}
function vE(i) {
  return /* @__PURE__ */ B(zl, { vertical: !0, children: i.items.map((l, u) => /* @__PURE__ */ ai(eP, { children: [
    l.type === "link" && /* @__PURE__ */ tP(YI, oo(Oe({}, l), { key: u })),
    l.type === "menu" && /* @__PURE__ */ B(
      P0,
      {
        expandIcon: l.isNestedMenu ? !0 : null,
        items: [QI(l, u)],
        className: "globalNavigation__menu"
      },
      u
    )
  ] }, u)) });
}
function QI(i, l) {
  let u;
  return i.type === "menu" && i.children && (u = i.children.map((f, p) => Oe({
    expandIcon: f.isNestedMenu ? !0 : null,
    key: `${String(f.label)}${p}`
  }, f)), u.unshift({ label: i.label, type: "group", key: i.label + "_groupTitle" })), {
    icon: /* @__PURE__ */ B(
      KE,
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
const XI = (i) => /* @__PURE__ */ R.createElement("svg", Oe({ xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24" }, i), /* @__PURE__ */ R.createElement("title", null, "lock"), /* @__PURE__ */ R.createElement("g", { strokeLinecap: "square", strokeLinejoin: "miter", strokeWidth: 1, transform: "translate(0.5 0.5)", fill: "currentColor", stroke: "currentColor" }, /* @__PURE__ */ R.createElement("path", { fill: "none", stroke: "currentColor", strokeMiterlimit: 10, d: "M12,1L12,1 C9.2,1,7,3.2,7,6v3h10V6C17,3.2,14.8,1,12,1z" }), /* @__PURE__ */ R.createElement("rect", { x: 4, y: 9, fill: "none", stroke: "currentColor", strokeMiterlimit: 10, width: 16, height: 14 }), /* @__PURE__ */ R.createElement("circle", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, cx: 12, cy: 15, r: 2 }), /* @__PURE__ */ R.createElement("line", { "data-color": "color-2", fill: "none", strokeMiterlimit: 10, x1: 12, y1: 17, x2: 12, y2: 19 }))), qI = (i) => /* @__PURE__ */ R.createElement("svg", Oe({ width: 24, height: 24, viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", id: "add-colorable" }, i), `>\r
    `, /* @__PURE__ */ R.createElement("path", { d: "M12.5992 4.8002C12.5992 4.4702 12.3292 4.2002 11.9992 4.2002C11.6692 4.2002 11.3992 4.4702 11.3992 4.8002V11.4002H4.79922C4.46922 11.4002 4.19922 11.6702 4.19922 12.0002C4.19922 12.3302 4.46922 12.6002 4.79922 12.6002H11.3992V19.2002C11.3992 19.5302 11.6692 19.8002 11.9992 19.8002C12.3292 19.8002 12.5992 19.5302 12.5992 19.2002V12.6002H19.1992C19.5292 12.6002 19.7992 12.3302 19.7992 12.0002C19.7992 11.6702 19.5292 11.4002 19.1992 11.4002H12.5992V4.8002Z", fill: "currentColor" }));
function ZI(i) {
  const l = i.createItems.map((f) => {
    if (f.type === "group")
      return { label: f.label, key: f.label, type: f.type };
    const p = f.isLocked, y = f.disabled;
    let h = "navigationCreate__item";
    return (y != null ? y : p) && (h += " navigationCreate__item--disabled"), {
      key: f.description,
      className: h,
      disabled: f.disabled,
      onClick: (E) => {
        var x;
        f.disabled || ((x = f.onClick) == null || x.call(f), E.domEvent.stopPropagation(), E.domEvent.preventDefault());
      },
      label: /* @__PURE__ */ B(d0, { title: f.tooltip, children: /* @__PURE__ */ ai(bE, { vertical: !0, gap: "middle", justify: "center", children: [
        /* @__PURE__ */ ai("span", { className: "navigationCreate__itemTitle", children: [
          f.title,
          f.isLoading && /* @__PURE__ */ B(fP, { className: "navigationCreate__itemLoading", size: "small" }),
          p && /* @__PURE__ */ B(XI, { className: "navigationCreate__lockIcon" })
        ] }),
        /* @__PURE__ */ B("span", { className: "navigationCreate__itemDescription", children: f.description })
      ] }) })
    };
  });
  return /* @__PURE__ */ B(zl, { children: /* @__PURE__ */ B(
    P0,
    {
      className: "globalNavigation__item globalNavigation__item--createNew",
      items: [
        {
          key: "NavigationCreate",
          popupClassName: "globalNavigation__popup globalNavigation__popup--navigationCreate",
          icon: /* @__PURE__ */ B(zl, { className: "navigationCreate__popupButtonWrapper", style: { pointerEvents: "none" }, children: /* @__PURE__ */ B(Hh, { className: "navigationCreate__popupButton", icon: /* @__PURE__ */ B(qI, { className: "navigationCreate__popupIcon" }) }) }),
          children: l
        }
      ],
      expandIcon: null
    }
  ) });
}
function JI(i = "") {
  var u;
  const l = new RegExp(
    "(?:[\\W\\d]*\\b)*([A-Za-z])\\w*\\b(?:.*\\s(\\w)[\\w-]*$)?",
    "i"
  );
  return (u = i.replace(l, "$1$2")) == null ? void 0 : u.toUpperCase();
}
const e$ = (i, l) => {
  let u;
  return (...f) => {
    window.clearTimeout(u), u = window.setTimeout(() => {
      i(...f);
    }, l);
  };
};
function t$(i) {
  const [l, u] = uo(""), [f, p] = uo(i.orgs);
  Al(() => {
    p(i.orgs);
  }, i.orgs);
  const y = Mu(e$(p, 200), []), h = kh(
    () => z(
      /* currentFilteredOrgs */
    ),
    f
  ), E = {
    key: "search",
    className: "workspaceSelector__search",
    label: /* @__PURE__ */ B(
      nv,
      {
        placeholder: "Search",
        className: "workspaceSelector__searchInput",
        onChange: P,
        value: l,
        onClick: (Y) => {
          Y.preventDefault(), Y.stopPropagation();
        }
      }
    )
  }, x = _i({
    key: "signout",
    className: "workspaceSelector__signout",
    label: /* @__PURE__ */ B(
      Hh,
      {
        className: "workspaceSelector__signoutButton",
        type: "primary",
        onClick: (Y) => {
          var V;
          (V = i.signout) == null || V.call(i);
        },
        children: "Sign Out of mParticle"
      }
    )
  }), T = {
    key: "no-results",
    className: "workspaceSelector__noResults",
    label: /* @__PURE__ */ B(zl, { children: /* @__PURE__ */ B(CE, { status: "info", title: "No results found" }) })
  }, N = !!l && !f.length, _ = [
    E,
    ...N ? [T] : h,
    i.signout ? x.current : null
  ], O = i.orgs.flatMap((Y) => {
    let V = [];
    const { accounts: I } = Y;
    if (I) {
      const $ = I.flatMap(({ workspaces: W }) => W);
      V = V.concat($);
    }
    return V;
  }).find((Y) => Y.isActive), D = [
    {
      key: "WorkspaceSelector",
      icon: /* @__PURE__ */ B(SE, { className: "workspaceSelector__avatar", children: JI(O == null ? void 0 : O.label) }),
      popupClassName: "workspaceSelector",
      children: _
    }
  ];
  return /* @__PURE__ */ B(
    P0,
    {
      className: "globalNavigation__menu globalNavigation__item globalNavigation__item--workspaceSelector",
      items: D,
      onOpenChange: A,
      expandIcon: null
    }
  );
  function z() {
    return f.reduce((Y, V) => (Y.push({
      type: "org",
      className: "workspaceSelector__orgName" + (V.label ? "" : " u-display-none"),
      label: V.label,
      id: V.id,
      key: V.id,
      accounts: V.accounts,
      // todo: these are ending up in the html as attributes..
      workspaces: V.accounts.flatMap((I) => I.workspaces)
    }), V.accounts.forEach((I) => {
      Y.push({
        type: "account",
        className: "workspaceSelector__accountName" + (I.label ? "" : " u-display-none"),
        label: I.label,
        id: I.id,
        key: I.id,
        workspaces: I.workspaces
      }), I.workspaces.forEach(($) => {
        Y.push({
          type: "workspace",
          className: "workspaceSelector__workspaceName" + ($.isActive ? " workspaceSelector__workspaceName--active" : ""),
          label: $.label,
          id: $.id,
          key: $.id,
          onClick: $.onClick
        });
      });
    }), Y), []);
  }
  function P(Y) {
    const V = Y.target.value.toLowerCase();
    if (u(V), V) {
      const $ = I();
      y($);
    } else
      p(i.orgs);
    function I() {
      return i.orgs.reduce((W, re) => {
        if ($(re))
          W.push(re);
        else {
          const G = Oe({}, re);
          G.accounts = [], re.accounts.forEach((se) => {
            const Te = Oe({}, se);
            Te.workspaces = [], $(se) ? G.accounts.push(se) : (se.workspaces.forEach((le) => {
              $(le) && Te.workspaces.push(le);
            }), Te.workspaces.length && G.accounts.push(Te));
          }), G.accounts.length && W.push(G);
        }
        return W;
      }, []);
      function $(W) {
        return !!W.label && W.label.toString().toLowerCase().includes(V) || !!W.id && W.id.toString().toLowerCase().includes(V);
      }
    }
  }
  function A() {
    u(""), p(i.orgs);
  }
}
const pE = (i, l) => {
  console.log("getParentKey from:", i);
  let u;
  for (let f = 0; f < l.length; f++) {
    const p = l[f];
    p.children && (p.children.some((y) => y.key === i) ? u = p.key : pE(i, p.children) && (u = pE(i, p.children)));
  }
  return u;
};
function n$(i) {
  const [l, u] = uo(""), f = kh(() => {
    console.log("Generating searchableData from the original tree: ", i.treeData);
    const _ = [], O = (D) => {
      for (let z = 0; z < D.length; z++) {
        const P = D[z], { key: A } = P;
        _.push({ key: A, title: A }), P.children && O(P.children);
      }
    };
    return O(i.treeData), console.log("Searchable data generated:", _), _;
  }, [i.treeData]), [p, y] = uo(
    /* @__PURE__ */ new Set([...f.map((_) => _.key)])
  ), h = (_) => {
    const { value: O } = _.target;
    console.log("Search is changing. We need to update current tree to match it", O);
    const D = f.map((P) => P.title.indexOf(O) > -1 || String(P.key).indexOf(O) > -1 ? pE(P.key, i.treeData) : null);
    console.log("Mapped keys from the original based on search:", D);
    const z = /* @__PURE__ */ new Set([
      ...D.filter((P, A, Y) => !!(P && Y.indexOf(P) === A))
    ]);
    console.log("keys we should keep in the tree:", z), y(z), u(O);
  }, E = kh(() => {
    console.log("currentShownKeys has changed, we need to recalculate treeData", p);
    const _ = (O) => O.filter((D) => D.children ? p.has(D.key) : !0).map((D) => D.children ? { title: D.title, key: D.key, disabled: !0, children: _(D.children) } : {
      title: D.title,
      key: D.key
    });
    return _(i.treeData);
  }, [p]), x = {
    key: "signout",
    className: "accountSelector__signout",
    label: /* @__PURE__ */ B(
      Hh,
      {
        className: "accountSelector__signoutButton",
        type: "primary",
        onClick: (_) => {
          var O;
          (O = i.signout) == null || O.call(i);
        },
        children: "Sign Out of mParticle"
      }
    )
  }, N = [
    {
      key: "AccountSelector",
      // icon: <Avatar className="accountSelector__avatar">{getInitials(activeWorkspace?.label)}</Avatar>,
      icon: /* @__PURE__ */ B(SE, { className: "accountSelector__avatar", children: "WS" }),
      popupClassName: "accountSelector",
      children: [
        {
          key: "search",
          className: "workspaceSelector__search",
          label: /* @__PURE__ */ B(
            nv,
            {
              placeholder: "Search",
              className: "workspaceSelector__searchInput",
              onChange: h,
              value: l,
              onClick: (_) => {
                _.preventDefault(), _.stopPropagation();
              }
            }
          )
        },
        {
          key: "SearchableTree",
          className: "accountSelector__content",
          label: /* @__PURE__ */ ai(Lu, { children: [
            E.length === 0 && /* @__PURE__ */ B(zl, { children: /* @__PURE__ */ B(CE, { className: "accountSelector__noResults", status: "info", title: "No results found" }) }),
            /* @__PURE__ */ B(
              lP,
              {
                defaultExpandAll: !0,
                treeData: E,
                className: "accountSelector__searchableTree",
                switcherIcon: !1,
                onClick: (_, { title: O, key: D, active: z }) => i.onClick(
                  {
                    title: String(O),
                    key: String(D),
                    active: z
                  },
                  _
                )
              }
            )
          ] })
        },
        i.signout ? x : null
      ]
    }
  ];
  return /* @__PURE__ */ B(
    P0,
    {
      className: "globalNavigation__menu globalNavigation__item globalNavigation__item--accountSelector",
      items: N,
      expandIcon: null,
      openKeys: ["AccountSelector"]
    }
  );
}
const r$ = (i) => /* @__PURE__ */ R.createElement("svg", Oe({ id: "mpLogo", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", viewBox: "0 0 202.8 169", xmlSpace: "preserve" }, i), /* @__PURE__ */ R.createElement("polygon", { fill: "currentColor", points: "135.2,126.7 135.2,169 202.8,126.7 202.8,84.5" }), /* @__PURE__ */ R.createElement("polygon", { fill: "currentColor", points: "67.6,126.7 67.6,169 135.2,126.7 135.2,84.5" }), /* @__PURE__ */ R.createElement("polygon", { fill: "currentColor", points: "0,126.7 0,169 67.6,126.7 67.6,84.5" }), /* @__PURE__ */ R.createElement("polygon", { fill: "currentColor", points: "202.8,0 135.2,42.2 135.2,84.5 202.8,42.2" }), /* @__PURE__ */ R.createElement("polygon", { fill: "currentColor", points: "135.2,0 67.6,42.2 67.6,84.5 135.2,42.2" }), /* @__PURE__ */ R.createElement("polygon", { fill: "currentColor", points: "67.6,0 0,42.2 0,84.5 67.6,42.2" })), a$ = 90, q$ = (i) => /* @__PURE__ */ B(qd, { className: "globalNavigation", children: /* @__PURE__ */ B(qd.Sider, { className: "globalNavigation__sider", width: a$, children: /* @__PURE__ */ ai(bE, { vertical: !0, justify: "space-between", style: { height: "100%" }, children: [
  /* @__PURE__ */ ai("div", { children: [
    /* @__PURE__ */ B(WI, Oe({}, i.logo)),
    /* @__PURE__ */ ai(zl, { vertical: !0, children: [
      i.onSearchClick && /* @__PURE__ */ B(GI, { onClick: i.onSearchClick }),
      i.createItems && /* @__PURE__ */ B(ZI, { createItems: i.createItems })
    ] }),
    /* @__PURE__ */ B(vE, { items: i.tools })
  ] }),
  /* @__PURE__ */ ai("div", { children: [
    /* @__PURE__ */ B(vE, { items: i.management }),
    i.orgs && /* @__PURE__ */ B(t$, { orgs: i.orgs, signout: i.signout }),
    i.accountSwitcher && /* @__PURE__ */ B(
      n$,
      {
        treeData: i.accountSwitcher,
        signout: i.signout,
        onClick: (l) => alert(`Clicked on: ${l.title}`)
      }
    ),
    !i.hideMpHome && /* @__PURE__ */ B(d0, { title: "mParticle Overview", placement: "right", children: /* @__PURE__ */ B(zl, { className: "globalNavigation__mpHome", children: /* @__PURE__ */ B(
      r$,
      {
        className: "globalNavigation__mpSvg",
        onClick: () => {
          i.onMpHomeClick();
        }
      }
    ) }) })
  ] })
] }) }) });
export {
  Q$ as Affix,
  pP as Alert,
  K$ as Anchor,
  X$ as App,
  E$ as AutoComplete,
  SE as Avatar,
  uP as Badge,
  SP as Breadcrumb,
  Hh as Button,
  _$ as Calendar,
  nk as Card,
  N$ as Carousel,
  yE as Cascader,
  zl as Center,
  aP as Checkbox,
  eH as Col,
  T$ as Collapse,
  m$ as ColorPicker,
  Ge as ConfigProvider,
  y$ as DatePicker,
  sP as Descriptions,
  B$ as Divider,
  H$ as Drawer,
  yP as Dropdown,
  rk as Empty,
  bE as Flex,
  d$ as FloatButton,
  Is as Form,
  a$ as GlobalNavWidth,
  q$ as GlobalNavigation,
  tH as Grid,
  L$ as Image,
  nv as Input,
  S$ as InputNumber,
  qd as Layout,
  cP as List,
  V$ as LoadingModal,
  rP as Mentions,
  P0 as Menu,
  Y$ as MenuItem,
  j$ as Message,
  vP as Modal,
  F$ as Notification,
  G$ as Pagination,
  $$ as Popconfirm,
  P$ as Popover,
  U$ as Progress,
  A$ as QRCode,
  tk as Radio,
  v$ as Rate,
  CE as Result,
  nH as Row,
  k$ as Segmented,
  h$ as Select,
  dP as Skeleton,
  g$ as Slider,
  gP as Space,
  fP as Spin,
  D$ as Statistic,
  W$ as Steps,
  C$ as Switch,
  z$ as Table,
  M$ as Tabs,
  iP as Tag,
  w$ as TimePicker,
  R$ as Timeline,
  d0 as Tooltip,
  O$ as Tour,
  x$ as Transfer,
  lP as Tree,
  p$ as TreeSelect,
  b$ as Upload,
  I$ as Watermark
};
