import i, { useEffect as _r, useState as Ve } from "react";
import { ConfigProvider as Un, Button as Rr, FloatButton as Fr, Rate as Nr, Form as Mr, TreeSelect as $r, Select as Lr, Mentions as jr, Radio as Lt, ColorPicker as Dr, Slider as zr, Cascader as Yr, DatePicker as Wr, Checkbox as Ur, Input as Hr, InputNumber as Br, Switch as qr, Upload as Gr, AutoComplete as Xr, TimePicker as Vr, Transfer as Kr, Collapse as Qr, Timeline as Jr, Calendar as Zr, Segmented as ea, Tabs as ta, Tag as na, Tour as ra, Carousel as aa, Tooltip as ia, Statistic as oa, Tree as sa, Image as la, QRCode as fa, Badge as Hn, Card as ca, Avatar as ua, Descriptions as ma, Table as da, Empty as jt, Popover as va, List as Bn, Progress as pa, Result as ga, Spin as ba, Skeleton as ya, Watermark as ha, Popconfirm as Ea, Drawer as wa, Modal as xa, notification as ka, Alert as Aa, message as Sa, Dropdown as qn, Flex as Ta, Space as Pa, Layout as Ie, Steps as Oa, Anchor as Ca, Breadcrumb as Gn, Pagination as Ia, Menu as _a, Affix as Ra, App as Fa } from "antd";
const Na = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Un, null, /* @__PURE__ */ i.createElement(Rr, { ...e }, e.children))), as = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Fr, { ...e })), is = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Nr, { ...e })), os = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Mr, { ...e })), ss = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement($r, { ...e })), ls = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Lr, { ...e })), fs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(jr, { ...e })), Xn = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Lt, { ...e }));
Xn.Group = Lt.Group;
Xn.Button = Lt.Button;
const cs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Dr, { ...e })), us = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(zr, { ...e })), ms = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Yr, { ...e })), Ma = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Wr, { ...e })), ds = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ur, { ...e })), an = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Hr, { ...e })), vs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Br, { ...e })), ps = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(qr, { ...e })), gs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Gr, { ...e })), bs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Xr, { ...e })), ys = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Vr, { ...e })), hs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Kr, { ...e })), Es = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Qr, { ...e })), ws = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Jr, { ...e })), xs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Zr, { ...e })), ks = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ea, { ...e })), As = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ta, { ...e })), Ss = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(na, { ...e })), Ts = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ra, { ...e })), Ps = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(aa, { ...e })), $a = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ia, { ...e })), Os = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(oa, { ...e })), Cs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(sa, { ...e })), Is = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(la, { ...e })), _s = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(fa, { ...e })), La = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Hn, { ...e }));
La.Ribbon = Hn.Ribbon;
const Rs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ca, { ...e })), Fs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ua, { ...e })), Ns = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ma, { ...e })), Ms = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(da, { ...e })), Vn = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(jt, { ...e }));
Vn.PRESENTED_IMAGE_DEFAULT = jt.PRESENTED_IMAGE_DEFAULT;
Vn.PRESENTED_IMAGE_SIMPLE = jt.PRESENTED_IMAGE_SIMPLE;
const $s = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(va, { ...e })), ja = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Bn, { ...e }));
ja.Item = Bn.Item;
const Ls = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(pa, { ...e })), Da = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ga, { ...e })), js = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ba, { ...e })), za = (e) => {
  const t = "100%";
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    ya,
    {
      ...e,
      active: !0,
      style: { width: t, ...e.style }
    }
  ));
}, Ds = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(ha, { ...e })), zs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ea, { ...e })), Ys = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(wa, { ...e })), Ya = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(xa, { ...e })), Ws = (e) => {
  const [t, n] = ka.useNotification(), r = () => {
    t.open({ ...e });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, n, /* @__PURE__ */ i.createElement("span", { onClick: r }, e.children));
}, Us = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Aa, { ...e })), Hs = (e) => {
  const [t, n] = Sa.useMessage(), r = () => {
    t.open({ ...e });
  };
  return /* @__PURE__ */ i.createElement(i.Fragment, null, n, /* @__PURE__ */ i.createElement("span", { onClick: r }, e.children));
}, Wa = (e) => _r(e, []);
function Ua(e) {
  const [t, n] = Ve(!0), [r, a] = Ve(!1), [o, s] = Ve(void 0);
  return Wa(() => {
    e().then((l) => {
      s(l);
    }).catch(() => {
      a(!0);
    }).finally(() => {
      n(!1);
    });
  }), [t, r, o];
}
function Ha(e) {
  const [t, n, r] = Ua(e.fetchData);
  if (r)
    debugger;
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ya, { ...e }, t && /* @__PURE__ */ i.createElement(za, null), n && /* @__PURE__ */ i.createElement(
    Da,
    {
      status: "error",
      title: "Error Loading"
    }
  ), !t && !n && e.children(r)));
}
const Kn = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(qn, { ...e }, e.children));
Kn.Button = qn.Button;
const Dt = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ta, { ...e }));
function Bs(e) {
  const t = () => new Promise((n, r) => setTimeout(() => n(
    {
      title: "title",
      description: "description",
      startDate: /* @__PURE__ */ new Date(),
      events: [{ name: "event1" }, { name: "event2" }]
    }
  ), 500));
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(
    Ha,
    {
      ...e,
      open: !0,
      fetchData: t
    },
    (n) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Dt, { vertical: !0, gap: "middle" }, /* @__PURE__ */ i.createElement(an, { placeholder: "title" }), /* @__PURE__ */ i.createElement(an, { placeholder: "description" }), /* @__PURE__ */ i.createElement(Ma, { size: "large" }), /* @__PURE__ */ i.createElement(Kn, { menu: { items: n.events.map((r) => ({ value: r.name, label: r.name, type: "group" })) } }, /* @__PURE__ */ i.createElement(Na, null, "Events Dropdown"))))
  ));
}
const nt = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Dt, { align: "center", justify: "center", ...e }, e.children)), Qn = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Pa, { ...e })), _e = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ie, { ...e }));
_e.Header = Ie.Header;
_e.Sider = Ie.Sider;
_e.Content = Ie.Content;
_e.Footer = Ie.Footer;
const qs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null), Gs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Oa, { ...e }));
var Ba = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, qa = Ba, Ga = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]
};
function on(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? on(Object(n), !0).forEach(function(r) {
      U(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : on(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Je(e) {
  "@babel/helpers - typeof";
  return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Je(e);
}
function Xa(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Va(e, t, n) {
  return t && sn(e.prototype, t), n && sn(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function U(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function zt(e, t) {
  return Qa(e) || Za(e, t) || Jn(e, t) || ti();
}
function Re(e) {
  return Ka(e) || Ja(e) || Jn(e) || ei();
}
function Ka(e) {
  if (Array.isArray(e))
    return xt(e);
}
function Qa(e) {
  if (Array.isArray(e))
    return e;
}
function Ja(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Za(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, o = !1, s, l;
    try {
      for (n = n.call(e); !(a = (s = n.next()).done) && (r.push(s.value), !(t && r.length === t)); a = !0)
        ;
    } catch (f) {
      o = !0, l = f;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (o)
          throw l;
      }
    }
    return r;
  }
}
function Jn(e, t) {
  if (e) {
    if (typeof e == "string")
      return xt(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return xt(e, t);
  }
}
function xt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ei() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ti() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ln = function() {
}, Yt = {}, Zn = {}, er = null, tr = {
  mark: ln,
  measure: ln
};
try {
  typeof window < "u" && (Yt = window), typeof document < "u" && (Zn = document), typeof MutationObserver < "u" && (er = MutationObserver), typeof performance < "u" && (tr = performance);
} catch {
}
var ni = Yt.navigator || {}, fn = ni.userAgent, cn = fn === void 0 ? "" : fn, ie = Yt, Y = Zn, un = er, De = tr;
ie.document;
var ne = !!Y.documentElement && !!Y.head && typeof Y.addEventListener == "function" && typeof Y.createElement == "function", nr = ~cn.indexOf("MSIE") || ~cn.indexOf("Trident/"), ze, Ye, We, Ue, He, Z = "___FONT_AWESOME___", kt = 16, rr = "fa", ar = "svg-inline--fa", me = "data-fa-i2svg", At = "data-fa-pseudo-element", ri = "data-fa-pseudo-element-pending", Wt = "data-prefix", Ut = "data-icon", mn = "fontawesome-i2svg", ai = "async", ii = ["HTML", "HEAD", "STYLE", "SCRIPT"], ir = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), z = "classic", W = "sharp", Ht = [z, W];
function Fe(e) {
  return new Proxy(e, {
    get: function(n, r) {
      return r in n ? n[r] : n[z];
    }
  });
}
var Se = Fe((ze = {}, U(ze, z, {
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
}), U(ze, W, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid",
  fasr: "regular",
  "fa-regular": "regular",
  fasl: "light",
  "fa-light": "light",
  fast: "thin",
  "fa-thin": "thin"
}), ze)), Te = Fe((Ye = {}, U(Ye, z, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), U(Ye, W, {
  solid: "fass",
  regular: "fasr",
  light: "fasl",
  thin: "fast"
}), Ye)), Pe = Fe((We = {}, U(We, z, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), U(We, W, {
  fass: "fa-solid",
  fasr: "fa-regular",
  fasl: "fa-light",
  fast: "fa-thin"
}), We)), oi = Fe((Ue = {}, U(Ue, z, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), U(Ue, W, {
  "fa-solid": "fass",
  "fa-regular": "fasr",
  "fa-light": "fasl",
  "fa-thin": "fast"
}), Ue)), si = /fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/, or = "fa-layers-text", li = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, fi = Fe((He = {}, U(He, z, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), U(He, W, {
  900: "fass",
  400: "fasr",
  300: "fasl",
  100: "fast"
}), He)), sr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ci = sr.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ui = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ce = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Oe = /* @__PURE__ */ new Set();
Object.keys(Te[z]).map(Oe.add.bind(Oe));
Object.keys(Te[W]).map(Oe.add.bind(Oe));
var mi = [].concat(Ht, Re(Oe), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ce.GROUP, ce.SWAP_OPACITY, ce.PRIMARY, ce.SECONDARY]).concat(sr.map(function(e) {
  return "".concat(e, "x");
})).concat(ci.map(function(e) {
  return "w-".concat(e);
})), ke = ie.FontAwesomeConfig || {};
function di(e) {
  var t = Y.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function vi(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (Y && typeof Y.querySelector == "function") {
  var pi = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  pi.forEach(function(e) {
    var t = zt(e, 2), n = t[0], r = t[1], a = vi(di(n));
    a != null && (ke[r] = a);
  });
}
var lr = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: rr,
  replacementClass: ar,
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
ke.familyPrefix && (ke.cssPrefix = ke.familyPrefix);
var he = g(g({}, lr), ke);
he.autoReplaceSvg || (he.observeMutations = !1);
var y = {};
Object.keys(lr).forEach(function(e) {
  Object.defineProperty(y, e, {
    enumerable: !0,
    set: function(n) {
      he[e] = n, Ae.forEach(function(r) {
        return r(y);
      });
    },
    get: function() {
      return he[e];
    }
  });
});
Object.defineProperty(y, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    he.cssPrefix = t, Ae.forEach(function(n) {
      return n(y);
    });
  },
  get: function() {
    return he.cssPrefix;
  }
});
ie.FontAwesomeConfig = y;
var Ae = [];
function gi(e) {
  return Ae.push(e), function() {
    Ae.splice(Ae.indexOf(e), 1);
  };
}
var re = kt, J = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function bi(e) {
  if (!(!e || !ne)) {
    var t = Y.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = Y.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
      var o = n[a], s = (o.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(s) > -1 && (r = o);
    }
    return Y.head.insertBefore(t, r), e;
  }
}
var yi = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Ce() {
  for (var e = 12, t = ""; e-- > 0; )
    t += yi[Math.random() * 62 | 0];
  return t;
}
function Ee(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Bt(e) {
  return e.classList ? Ee(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function fr(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function hi(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(fr(e[n]), '" ');
  }, "").trim();
}
function rt(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function qt(e) {
  return e.size !== J.size || e.x !== J.x || e.y !== J.y || e.rotate !== J.rotate || e.flipX || e.flipY;
}
function Ei(e) {
  var t = e.transform, n = e.containerWidth, r = e.iconWidth, a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), s = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), l = "rotate(".concat(t.rotate, " 0 0)"), f = {
    transform: "".concat(o, " ").concat(s, " ").concat(l)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: f,
    path: u
  };
}
function wi(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? kt : n, a = e.height, o = a === void 0 ? kt : a, s = e.startCentered, l = s === void 0 ? !1 : s, f = "";
  return l && nr ? f += "translate(".concat(t.x / re - r / 2, "em, ").concat(t.y / re - o / 2, "em) ") : l ? f += "translate(calc(-50% + ".concat(t.x / re, "em), calc(-50% + ").concat(t.y / re, "em)) ") : f += "translate(".concat(t.x / re, "em, ").concat(t.y / re, "em) "), f += "scale(".concat(t.size / re * (t.flipX ? -1 : 1), ", ").concat(t.size / re * (t.flipY ? -1 : 1), ") "), f += "rotate(".concat(t.rotate, "deg) "), f;
}
var xi = `:root, :host {
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
function cr() {
  var e = rr, t = ar, n = y.cssPrefix, r = y.replacementClass, a = xi;
  if (n !== e || r !== t) {
    var o = new RegExp("\\.".concat(e, "\\-"), "g"), s = new RegExp("\\--".concat(e, "\\-"), "g"), l = new RegExp("\\.".concat(t), "g");
    a = a.replace(o, ".".concat(n, "-")).replace(s, "--".concat(n, "-")).replace(l, ".".concat(r));
  }
  return a;
}
var dn = !1;
function ut() {
  y.autoAddCss && !dn && (bi(cr()), dn = !0);
}
var ki = {
  mixout: function() {
    return {
      dom: {
        css: cr,
        insertCss: ut
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        ut();
      },
      beforeI2svg: function() {
        ut();
      }
    };
  }
}, ee = ie || {};
ee[Z] || (ee[Z] = {});
ee[Z].styles || (ee[Z].styles = {});
ee[Z].hooks || (ee[Z].hooks = {});
ee[Z].shims || (ee[Z].shims = []);
var V = ee[Z], ur = [], Ai = function e() {
  Y.removeEventListener("DOMContentLoaded", e), Ze = 1, ur.map(function(t) {
    return t();
  });
}, Ze = !1;
ne && (Ze = (Y.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Y.readyState), Ze || Y.addEventListener("DOMContentLoaded", Ai));
function Si(e) {
  ne && (Ze ? setTimeout(e, 0) : ur.push(e));
}
function Ne(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, a = e.children, o = a === void 0 ? [] : a;
  return typeof e == "string" ? fr(e) : "<".concat(t, " ").concat(hi(r), ">").concat(o.map(Ne).join(""), "</").concat(t, ">");
}
function vn(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Ti = function(t, n) {
  return function(r, a, o, s) {
    return t.call(n, r, a, o, s);
  };
}, mt = function(t, n, r, a) {
  var o = Object.keys(t), s = o.length, l = a !== void 0 ? Ti(n, a) : n, f, u, c;
  for (r === void 0 ? (f = 1, c = t[o[0]]) : (f = 0, c = r); f < s; f++)
    u = o[f], c = l(c, t[u], u, t);
  return c;
};
function Pi(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      var o = e.charCodeAt(n++);
      (o & 64512) == 56320 ? t.push(((a & 1023) << 10) + (o & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function St(e) {
  var t = Pi(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Oi(e, t) {
  var n = e.length, r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function pn(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n], a = !!r.icon;
    return a ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Tt(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, a = r === void 0 ? !1 : r, o = pn(t);
  typeof V.hooks.addPack == "function" && !a ? V.hooks.addPack(e, pn(t)) : V.styles[e] = g(g({}, V.styles[e] || {}), o), e === "fas" && Tt("fa", t);
}
var Be, qe, Ge, pe = V.styles, Ci = V.shims, Ii = (Be = {}, U(Be, z, Object.values(Pe[z])), U(Be, W, Object.values(Pe[W])), Be), Gt = null, mr = {}, dr = {}, vr = {}, pr = {}, gr = {}, _i = (qe = {}, U(qe, z, Object.keys(Se[z])), U(qe, W, Object.keys(Se[W])), qe);
function Ri(e) {
  return ~mi.indexOf(e);
}
function Fi(e, t) {
  var n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Ri(a) ? a : null;
}
var br = function() {
  var t = function(o) {
    return mt(pe, function(s, l, f) {
      return s[f] = mt(l, o, {}), s;
    }, {});
  };
  mr = t(function(a, o, s) {
    if (o[3] && (a[o[3]] = s), o[2]) {
      var l = o[2].filter(function(f) {
        return typeof f == "number";
      });
      l.forEach(function(f) {
        a[f.toString(16)] = s;
      });
    }
    return a;
  }), dr = t(function(a, o, s) {
    if (a[s] = s, o[2]) {
      var l = o[2].filter(function(f) {
        return typeof f == "string";
      });
      l.forEach(function(f) {
        a[f] = s;
      });
    }
    return a;
  }), gr = t(function(a, o, s) {
    var l = o[2];
    return a[s] = s, l.forEach(function(f) {
      a[f] = s;
    }), a;
  });
  var n = "far" in pe || y.autoFetchSvg, r = mt(Ci, function(a, o) {
    var s = o[0], l = o[1], f = o[2];
    return l === "far" && !n && (l = "fas"), typeof s == "string" && (a.names[s] = {
      prefix: l,
      iconName: f
    }), typeof s == "number" && (a.unicodes[s.toString(16)] = {
      prefix: l,
      iconName: f
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  vr = r.names, pr = r.unicodes, Gt = at(y.styleDefault, {
    family: y.familyDefault
  });
};
gi(function(e) {
  Gt = at(e.styleDefault, {
    family: y.familyDefault
  });
});
br();
function Xt(e, t) {
  return (mr[e] || {})[t];
}
function Ni(e, t) {
  return (dr[e] || {})[t];
}
function ue(e, t) {
  return (gr[e] || {})[t];
}
function yr(e) {
  return vr[e] || {
    prefix: null,
    iconName: null
  };
}
function Mi(e) {
  var t = pr[e], n = Xt("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function oe() {
  return Gt;
}
var Vt = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function at(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? z : n, a = Se[r][e], o = Te[r][e] || Te[r][a], s = e in V.styles ? e : null;
  return o || s || null;
}
var gn = (Ge = {}, U(Ge, z, Object.keys(Pe[z])), U(Ge, W, Object.keys(Pe[W])), Ge);
function it(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, a = r === void 0 ? !1 : r, o = (t = {}, U(t, z, "".concat(y.cssPrefix, "-").concat(z)), U(t, W, "".concat(y.cssPrefix, "-").concat(W)), t), s = null, l = z;
  (e.includes(o[z]) || e.some(function(u) {
    return gn[z].includes(u);
  })) && (l = z), (e.includes(o[W]) || e.some(function(u) {
    return gn[W].includes(u);
  })) && (l = W);
  var f = e.reduce(function(u, c) {
    var m = Fi(y.cssPrefix, c);
    if (pe[c] ? (c = Ii[l].includes(c) ? oi[l][c] : c, s = c, u.prefix = c) : _i[l].indexOf(c) > -1 ? (s = c, u.prefix = at(c, {
      family: l
    })) : m ? u.iconName = m : c !== y.replacementClass && c !== o[z] && c !== o[W] && u.rest.push(c), !a && u.prefix && u.iconName) {
      var h = s === "fa" ? yr(u.iconName) : {}, E = ue(u.prefix, u.iconName);
      h.prefix && (s = null), u.iconName = h.iconName || E || u.iconName, u.prefix = h.prefix || u.prefix, u.prefix === "far" && !pe.far && pe.fas && !y.autoFetchSvg && (u.prefix = "fas");
    }
    return u;
  }, Vt());
  return (e.includes("fa-brands") || e.includes("fab")) && (f.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (f.prefix = "fad"), !f.prefix && l === W && (pe.fass || y.autoFetchSvg) && (f.prefix = "fass", f.iconName = ue(f.prefix, f.iconName) || f.iconName), (f.prefix === "fa" || s === "fa") && (f.prefix = oe() || "fas"), f;
}
var $i = /* @__PURE__ */ function() {
  function e() {
    Xa(this, e), this.definitions = {};
  }
  return Va(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, a = new Array(r), o = 0; o < r; o++)
        a[o] = arguments[o];
      var s = a.reduce(this._pullDefinitions, {});
      Object.keys(s).forEach(function(l) {
        n.definitions[l] = g(g({}, n.definitions[l] || {}), s[l]), Tt(l, s[l]);
        var f = Pe[z][l];
        f && Tt(f, s[l]), br();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var a = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(a).map(function(o) {
        var s = a[o], l = s.prefix, f = s.iconName, u = s.icon, c = u[2];
        n[l] || (n[l] = {}), c.length > 0 && c.forEach(function(m) {
          typeof m == "string" && (n[l][m] = u);
        }), n[l][f] = u;
      }), n;
    }
  }]), e;
}(), bn = [], ge = {}, ye = {}, Li = Object.keys(ye);
function ji(e, t) {
  var n = t.mixoutsTo;
  return bn = e, ge = {}, Object.keys(ye).forEach(function(r) {
    Li.indexOf(r) === -1 && delete ye[r];
  }), bn.forEach(function(r) {
    var a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach(function(s) {
      typeof a[s] == "function" && (n[s] = a[s]), Je(a[s]) === "object" && Object.keys(a[s]).forEach(function(l) {
        n[s] || (n[s] = {}), n[s][l] = a[s][l];
      });
    }), r.hooks) {
      var o = r.hooks();
      Object.keys(o).forEach(function(s) {
        ge[s] || (ge[s] = []), ge[s].push(o[s]);
      });
    }
    r.provides && r.provides(ye);
  }), n;
}
function Pt(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  var o = ge[e] || [];
  return o.forEach(function(s) {
    t = s.apply(null, [t].concat(r));
  }), t;
}
function de(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = ge[e] || [];
  a.forEach(function(o) {
    o.apply(null, n);
  });
}
function te() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return ye[e] ? ye[e].apply(null, t) : void 0;
}
function Ot(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || oe();
  if (t)
    return t = ue(n, t) || t, vn(hr.definitions, n, t) || vn(V.styles, n, t);
}
var hr = new $i(), Di = function() {
  y.autoReplaceSvg = !1, y.observeMutations = !1, de("noAuto");
}, zi = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return ne ? (de("beforeI2svg", t), te("pseudoElements2svg", t), te("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    y.autoReplaceSvg === !1 && (y.autoReplaceSvg = !0), y.observeMutations = !0, Si(function() {
      Wi({
        autoReplaceSvgRoot: n
      }), de("watch", t);
    });
  }
}, Yi = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Je(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: ue(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = at(t[0]);
      return {
        prefix: r,
        iconName: ue(r, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(y.cssPrefix, "-")) > -1 || t.match(si))) {
      var a = it(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || oe(),
        iconName: ue(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof t == "string") {
      var o = oe();
      return {
        prefix: o,
        iconName: ue(o, t) || t
      };
    }
  }
}, q = {
  noAuto: Di,
  config: y,
  dom: zi,
  parse: Yi,
  library: hr,
  findIconDefinition: Ot,
  toHtml: Ne
}, Wi = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? Y : n;
  (Object.keys(V.styles).length > 0 || y.autoFetchSvg) && ne && y.autoReplaceSvg && q.dom.i2svg({
    node: r
  });
};
function ot(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return Ne(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (ne) {
        var r = Y.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function Ui(e) {
  var t = e.children, n = e.main, r = e.mask, a = e.attributes, o = e.styles, s = e.transform;
  if (qt(s) && n.found && !r.found) {
    var l = n.width, f = n.height, u = {
      x: l / f / 2,
      y: 0.5
    };
    a.style = rt(g(g({}, o), {}, {
      "transform-origin": "".concat(u.x + s.x / 16, "em ").concat(u.y + s.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function Hi(e) {
  var t = e.prefix, n = e.iconName, r = e.children, a = e.attributes, o = e.symbol, s = o === !0 ? "".concat(t, "-").concat(y.cssPrefix, "-").concat(n) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: g(g({}, a), {}, {
        id: s
      }),
      children: r
    }]
  }];
}
function Kt(e) {
  var t = e.icons, n = t.main, r = t.mask, a = e.prefix, o = e.iconName, s = e.transform, l = e.symbol, f = e.title, u = e.maskId, c = e.titleId, m = e.extra, h = e.watchable, E = h === void 0 ? !1 : h, I = r.found ? r : n, w = I.width, k = I.height, j = a === "fak", D = [y.replacementClass, o ? "".concat(y.cssPrefix, "-").concat(o) : ""].filter(function(G) {
    return m.classes.indexOf(G) === -1;
  }).filter(function(G) {
    return G !== "" || !!G;
  }).concat(m.classes).join(" "), A = {
    children: [],
    attributes: g(g({}, m.attributes), {}, {
      "data-prefix": a,
      "data-icon": o,
      class: D,
      role: m.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(w, " ").concat(k)
    })
  }, _ = j && !~m.classes.indexOf("fa-fw") ? {
    width: "".concat(w / k * 16 * 0.0625, "em")
  } : {};
  E && (A.attributes[me] = ""), f && (A.children.push({
    tag: "title",
    attributes: {
      id: A.attributes["aria-labelledby"] || "title-".concat(c || Ce())
    },
    children: [f]
  }), delete A.attributes.title);
  var v = g(g({}, A), {}, {
    prefix: a,
    iconName: o,
    main: n,
    mask: r,
    maskId: u,
    transform: s,
    symbol: l,
    styles: g(g({}, _), m.styles)
  }), H = r.found && n.found ? te("generateAbstractMask", v) || {
    children: [],
    attributes: {}
  } : te("generateAbstractIcon", v) || {
    children: [],
    attributes: {}
  }, X = H.children, le = H.attributes;
  return v.children = X, v.attributes = le, l ? Hi(v) : Ui(v);
}
function yn(e) {
  var t = e.content, n = e.width, r = e.height, a = e.transform, o = e.title, s = e.extra, l = e.watchable, f = l === void 0 ? !1 : l, u = g(g(g({}, s.attributes), o ? {
    title: o
  } : {}), {}, {
    class: s.classes.join(" ")
  });
  f && (u[me] = "");
  var c = g({}, s.styles);
  qt(a) && (c.transform = wi({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  var m = rt(c);
  m.length > 0 && (u.style = m);
  var h = [];
  return h.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), o && h.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), h;
}
function Bi(e) {
  var t = e.content, n = e.title, r = e.extra, a = g(g(g({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), o = rt(r.styles);
  o.length > 0 && (a.style = o);
  var s = [];
  return s.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && s.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), s;
}
var dt = V.styles;
function Ct(e) {
  var t = e[0], n = e[1], r = e.slice(4), a = zt(r, 1), o = a[0], s = null;
  return Array.isArray(o) ? s = {
    tag: "g",
    attributes: {
      class: "".concat(y.cssPrefix, "-").concat(ce.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(y.cssPrefix, "-").concat(ce.SECONDARY),
        fill: "currentColor",
        d: o[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(y.cssPrefix, "-").concat(ce.PRIMARY),
        fill: "currentColor",
        d: o[1]
      }
    }]
  } : s = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: o
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: s
  };
}
var qi = {
  found: !1,
  width: 512,
  height: 512
};
function Gi(e, t) {
  !ir && !y.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function It(e, t) {
  var n = t;
  return t === "fa" && y.styleDefault !== null && (t = oe()), new Promise(function(r, a) {
    if (te("missingIconAbstract"), n === "fa") {
      var o = yr(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && dt[t] && dt[t][e]) {
      var s = dt[t][e];
      return r(Ct(s));
    }
    Gi(e, t), r(g(g({}, qi), {}, {
      icon: y.showMissingIcons && e ? te("missingIconAbstract") || {} : {}
    }));
  });
}
var hn = function() {
}, _t = y.measurePerformance && De && De.mark && De.measure ? De : {
  mark: hn,
  measure: hn
}, xe = 'FA "6.5.1"', Xi = function(t) {
  return _t.mark("".concat(xe, " ").concat(t, " begins")), function() {
    return Er(t);
  };
}, Er = function(t) {
  _t.mark("".concat(xe, " ").concat(t, " ends")), _t.measure("".concat(xe, " ").concat(t), "".concat(xe, " ").concat(t, " begins"), "".concat(xe, " ").concat(t, " ends"));
}, Qt = {
  begin: Xi,
  end: Er
}, Ke = function() {
};
function En(e) {
  var t = e.getAttribute ? e.getAttribute(me) : null;
  return typeof t == "string";
}
function Vi(e) {
  var t = e.getAttribute ? e.getAttribute(Wt) : null, n = e.getAttribute ? e.getAttribute(Ut) : null;
  return t && n;
}
function Ki(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(y.replacementClass);
}
function Qi() {
  if (y.autoReplaceSvg === !0)
    return Qe.replace;
  var e = Qe[y.autoReplaceSvg];
  return e || Qe.replace;
}
function Ji(e) {
  return Y.createElementNS("http://www.w3.org/2000/svg", e);
}
function Zi(e) {
  return Y.createElement(e);
}
function wr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? Ji : Zi : n;
  if (typeof e == "string")
    return Y.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(s) {
    a.setAttribute(s, e.attributes[s]);
  });
  var o = e.children || [];
  return o.forEach(function(s) {
    a.appendChild(wr(s, {
      ceFn: r
    }));
  }), a;
}
function eo(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var Qe = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(a) {
        n.parentNode.insertBefore(wr(a), n);
      }), n.getAttribute(me) === null && y.keepOriginalSource) {
        var r = Y.createComment(eo(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], r = t[1];
    if (~Bt(n).indexOf(y.replacementClass))
      return Qe.replace(t);
    var a = new RegExp("".concat(y.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var o = r[0].attributes.class.split(" ").reduce(function(l, f) {
        return f === y.replacementClass || f.match(a) ? l.toSvg.push(f) : l.toNode.push(f), l;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", o.toNode.join(" "));
    }
    var s = r.map(function(l) {
      return Ne(l);
    }).join(`
`);
    n.setAttribute(me, ""), n.innerHTML = s;
  }
};
function wn(e) {
  e();
}
function xr(e, t) {
  var n = typeof t == "function" ? t : Ke;
  if (e.length === 0)
    n();
  else {
    var r = wn;
    y.mutateApproach === ai && (r = ie.requestAnimationFrame || wn), r(function() {
      var a = Qi(), o = Qt.begin("mutate");
      e.map(a), o(), n();
    });
  }
}
var Jt = !1;
function kr() {
  Jt = !0;
}
function Rt() {
  Jt = !1;
}
var et = null;
function xn(e) {
  if (un && y.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? Ke : t, r = e.nodeCallback, a = r === void 0 ? Ke : r, o = e.pseudoElementsCallback, s = o === void 0 ? Ke : o, l = e.observeMutationsRoot, f = l === void 0 ? Y : l;
    et = new un(function(u) {
      if (!Jt) {
        var c = oe();
        Ee(u).forEach(function(m) {
          if (m.type === "childList" && m.addedNodes.length > 0 && !En(m.addedNodes[0]) && (y.searchPseudoElements && s(m.target), n(m.target)), m.type === "attributes" && m.target.parentNode && y.searchPseudoElements && s(m.target.parentNode), m.type === "attributes" && En(m.target) && ~ui.indexOf(m.attributeName))
            if (m.attributeName === "class" && Vi(m.target)) {
              var h = it(Bt(m.target)), E = h.prefix, I = h.iconName;
              m.target.setAttribute(Wt, E || c), I && m.target.setAttribute(Ut, I);
            } else
              Ki(m.target) && a(m.target);
        });
      }
    }), ne && et.observe(f, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function to() {
  et && et.disconnect();
}
function no(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(r, a) {
    var o = a.split(":"), s = o[0], l = o.slice(1);
    return s && l.length > 0 && (r[s] = l.join(":").trim()), r;
  }, {})), n;
}
function ro(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", a = it(Bt(e));
  return a.prefix || (a.prefix = oe()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Ni(a.prefix, e.innerText) || Xt(a.prefix, St(e.innerText))), !a.iconName && y.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function ao(e) {
  var t = Ee(e.attributes).reduce(function(a, o) {
    return a.name !== "class" && a.name !== "style" && (a[o.name] = o.value), a;
  }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return y.autoA11y && (n ? t["aria-labelledby"] = "".concat(y.replacementClass, "-title-").concat(r || Ce()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function io() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: J,
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
function kn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = ro(e), r = n.iconName, a = n.prefix, o = n.rest, s = ao(e), l = Pt("parseNodeAttributes", {}, e), f = t.styleParser ? no(e) : [];
  return g({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: J,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: o,
      styles: f,
      attributes: s
    }
  }, l);
}
var oo = V.styles;
function Ar(e) {
  var t = y.autoReplaceSvg === "nest" ? kn(e, {
    styleParser: !1
  }) : kn(e);
  return ~t.extra.classes.indexOf(or) ? te("generateLayersText", e, t) : te("generateSvgReplacementMutation", e, t);
}
var se = /* @__PURE__ */ new Set();
Ht.map(function(e) {
  se.add("fa-".concat(e));
});
Object.keys(Se[z]).map(se.add.bind(se));
Object.keys(Se[W]).map(se.add.bind(se));
se = Re(se);
function An(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!ne)
    return Promise.resolve();
  var n = Y.documentElement.classList, r = function(m) {
    return n.add("".concat(mn, "-").concat(m));
  }, a = function(m) {
    return n.remove("".concat(mn, "-").concat(m));
  }, o = y.autoFetchSvg ? se : Ht.map(function(c) {
    return "fa-".concat(c);
  }).concat(Object.keys(oo));
  o.includes("fa") || o.push("fa");
  var s = [".".concat(or, ":not([").concat(me, "])")].concat(o.map(function(c) {
    return ".".concat(c, ":not([").concat(me, "])");
  })).join(", ");
  if (s.length === 0)
    return Promise.resolve();
  var l = [];
  try {
    l = Ee(e.querySelectorAll(s));
  } catch {
  }
  if (l.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  var f = Qt.begin("onTree"), u = l.reduce(function(c, m) {
    try {
      var h = Ar(m);
      h && c.push(h);
    } catch (E) {
      ir || E.name === "MissingIcon" && console.error(E);
    }
    return c;
  }, []);
  return new Promise(function(c, m) {
    Promise.all(u).then(function(h) {
      xr(h, function() {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), f(), c();
      });
    }).catch(function(h) {
      f(), m(h);
    });
  });
}
function so(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ar(e).then(function(n) {
    n && xr([n], t);
  });
}
function lo(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : Ot(t || {}), a = n.mask;
    return a && (a = (a || {}).icon ? a : Ot(a || {})), e(r, g(g({}, n), {}, {
      mask: a
    }));
  };
}
var fo = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, a = r === void 0 ? J : r, o = n.symbol, s = o === void 0 ? !1 : o, l = n.mask, f = l === void 0 ? null : l, u = n.maskId, c = u === void 0 ? null : u, m = n.title, h = m === void 0 ? null : m, E = n.titleId, I = E === void 0 ? null : E, w = n.classes, k = w === void 0 ? [] : w, j = n.attributes, D = j === void 0 ? {} : j, A = n.styles, _ = A === void 0 ? {} : A;
  if (t) {
    var v = t.prefix, H = t.iconName, X = t.icon;
    return ot(g({
      type: "icon"
    }, t), function() {
      return de("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), y.autoA11y && (h ? D["aria-labelledby"] = "".concat(y.replacementClass, "-title-").concat(I || Ce()) : (D["aria-hidden"] = "true", D.focusable = "false")), Kt({
        icons: {
          main: Ct(X),
          mask: f ? Ct(f.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: v,
        iconName: H,
        transform: g(g({}, J), a),
        symbol: s,
        title: h,
        maskId: c,
        titleId: I,
        extra: {
          attributes: D,
          styles: _,
          classes: k
        }
      });
    });
  }
}, co = {
  mixout: function() {
    return {
      icon: lo(fo)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = An, n.nodeCallback = so, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var r = n.node, a = r === void 0 ? Y : r, o = n.callback, s = o === void 0 ? function() {
      } : o;
      return An(a, s);
    }, t.generateSvgReplacementMutation = function(n, r) {
      var a = r.iconName, o = r.title, s = r.titleId, l = r.prefix, f = r.transform, u = r.symbol, c = r.mask, m = r.maskId, h = r.extra;
      return new Promise(function(E, I) {
        Promise.all([It(a, l), c.iconName ? It(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(w) {
          var k = zt(w, 2), j = k[0], D = k[1];
          E([n, Kt({
            icons: {
              main: j,
              mask: D
            },
            prefix: l,
            iconName: a,
            transform: f,
            symbol: u,
            maskId: m,
            title: o,
            titleId: s,
            extra: h,
            watchable: !0
          })]);
        }).catch(I);
      });
    }, t.generateAbstractIcon = function(n) {
      var r = n.children, a = n.attributes, o = n.main, s = n.transform, l = n.styles, f = rt(l);
      f.length > 0 && (a.style = f);
      var u;
      return qt(s) && (u = te("generateAbstractTransformGrouping", {
        main: o,
        transform: s,
        containerWidth: o.width,
        iconWidth: o.width
      })), r.push(u || o.icon), {
        children: r,
        attributes: a
      };
    };
  }
}, uo = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.classes, o = a === void 0 ? [] : a;
        return ot({
          type: "layer"
        }, function() {
          de("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var s = [];
          return n(function(l) {
            Array.isArray(l) ? l.map(function(f) {
              s = s.concat(f.abstract);
            }) : s = s.concat(l.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(y.cssPrefix, "-layers")].concat(Re(o)).join(" ")
            },
            children: s
          }];
        });
      }
    };
  }
}, mo = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.title, o = a === void 0 ? null : a, s = r.classes, l = s === void 0 ? [] : s, f = r.attributes, u = f === void 0 ? {} : f, c = r.styles, m = c === void 0 ? {} : c;
        return ot({
          type: "counter",
          content: n
        }, function() {
          return de("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Bi({
            content: n.toString(),
            title: o,
            extra: {
              attributes: u,
              styles: m,
              classes: ["".concat(y.cssPrefix, "-layers-counter")].concat(Re(l))
            }
          });
        });
      }
    };
  }
}, vo = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, o = a === void 0 ? J : a, s = r.title, l = s === void 0 ? null : s, f = r.classes, u = f === void 0 ? [] : f, c = r.attributes, m = c === void 0 ? {} : c, h = r.styles, E = h === void 0 ? {} : h;
        return ot({
          type: "text",
          content: n
        }, function() {
          return de("beforeDOMElementCreation", {
            content: n,
            params: r
          }), yn({
            content: n,
            transform: g(g({}, J), o),
            title: l,
            extra: {
              attributes: m,
              styles: E,
              classes: ["".concat(y.cssPrefix, "-layers-text")].concat(Re(u))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, r) {
      var a = r.title, o = r.transform, s = r.extra, l = null, f = null;
      if (nr) {
        var u = parseInt(getComputedStyle(n).fontSize, 10), c = n.getBoundingClientRect();
        l = c.width / u, f = c.height / u;
      }
      return y.autoA11y && !a && (s.attributes["aria-hidden"] = "true"), Promise.resolve([n, yn({
        content: n.innerHTML,
        width: l,
        height: f,
        transform: o,
        title: a,
        extra: s,
        watchable: !0
      })]);
    };
  }
}, po = new RegExp('"', "ug"), Sn = [1105920, 1112319];
function go(e) {
  var t = e.replace(po, ""), n = Oi(t, 0), r = n >= Sn[0] && n <= Sn[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: St(a ? t[0] : t),
    isSecondary: r || a
  };
}
function Tn(e, t) {
  var n = "".concat(ri).concat(t.replace(":", "-"));
  return new Promise(function(r, a) {
    if (e.getAttribute(n) !== null)
      return r();
    var o = Ee(e.children), s = o.filter(function(X) {
      return X.getAttribute(At) === t;
    })[0], l = ie.getComputedStyle(e, t), f = l.getPropertyValue("font-family").match(li), u = l.getPropertyValue("font-weight"), c = l.getPropertyValue("content");
    if (s && !f)
      return e.removeChild(s), r();
    if (f && c !== "none" && c !== "") {
      var m = l.getPropertyValue("content"), h = ~["Sharp"].indexOf(f[2]) ? W : z, E = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(f[2]) ? Te[h][f[2].toLowerCase()] : fi[h][u], I = go(m), w = I.value, k = I.isSecondary, j = f[0].startsWith("FontAwesome"), D = Xt(E, w), A = D;
      if (j) {
        var _ = Mi(w);
        _.iconName && _.prefix && (D = _.iconName, E = _.prefix);
      }
      if (D && !k && (!s || s.getAttribute(Wt) !== E || s.getAttribute(Ut) !== A)) {
        e.setAttribute(n, A), s && e.removeChild(s);
        var v = io(), H = v.extra;
        H.attributes[At] = t, It(D, E).then(function(X) {
          var le = Kt(g(g({}, v), {}, {
            icons: {
              main: X,
              mask: Vt()
            },
            prefix: E,
            iconName: A,
            extra: H,
            watchable: !0
          })), G = Y.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(G, e.firstChild) : e.appendChild(G), G.outerHTML = le.map(function(we) {
            return Ne(we);
          }).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function bo(e) {
  return Promise.all([Tn(e, "::before"), Tn(e, "::after")]);
}
function yo(e) {
  return e.parentNode !== document.head && !~ii.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(At) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Pn(e) {
  if (ne)
    return new Promise(function(t, n) {
      var r = Ee(e.querySelectorAll("*")).filter(yo).map(bo), a = Qt.begin("searchPseudoElements");
      kr(), Promise.all(r).then(function() {
        a(), Rt(), t();
      }).catch(function() {
        a(), Rt(), n();
      });
    });
}
var ho = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = Pn, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var r = n.node, a = r === void 0 ? Y : r;
      y.searchPseudoElements && Pn(a);
    };
  }
}, On = !1, Eo = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          kr(), On = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        xn(Pt("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        to();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        On ? Rt() : xn(Pt("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, Cn = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(r, a) {
    var o = a.toLowerCase().split("-"), s = o[0], l = o.slice(1).join("-");
    if (s && l === "h")
      return r.flipX = !0, r;
    if (s && l === "v")
      return r.flipY = !0, r;
    if (l = parseFloat(l), isNaN(l))
      return r;
    switch (s) {
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
  }, n);
}, wo = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return Cn(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-transform");
        return a && (n.transform = Cn(a)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var r = n.main, a = n.transform, o = n.containerWidth, s = n.iconWidth, l = {
        transform: "translate(".concat(o / 2, " 256)")
      }, f = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), u = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), c = "rotate(".concat(a.rotate, " 0 0)"), m = {
        transform: "".concat(f, " ").concat(u, " ").concat(c)
      }, h = {
        transform: "translate(".concat(s / 2 * -1, " -256)")
      }, E = {
        outer: l,
        inner: m,
        path: h
      };
      return {
        tag: "g",
        attributes: g({}, E.outer),
        children: [{
          tag: "g",
          attributes: g({}, E.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: g(g({}, r.icon.attributes), E.path)
          }]
        }]
      };
    };
  }
}, vt = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function In(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function xo(e) {
  return e.tag === "g" ? e.children : [e];
}
var ko = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-mask"), o = a ? it(a.split(" ").map(function(s) {
          return s.trim();
        })) : Vt();
        return o.prefix || (o.prefix = oe()), n.mask = o, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var r = n.children, a = n.attributes, o = n.main, s = n.mask, l = n.maskId, f = n.transform, u = o.width, c = o.icon, m = s.width, h = s.icon, E = Ei({
        transform: f,
        containerWidth: m,
        iconWidth: u
      }), I = {
        tag: "rect",
        attributes: g(g({}, vt), {}, {
          fill: "white"
        })
      }, w = c.children ? {
        children: c.children.map(In)
      } : {}, k = {
        tag: "g",
        attributes: g({}, E.inner),
        children: [In(g({
          tag: c.tag,
          attributes: g(g({}, c.attributes), E.path)
        }, w))]
      }, j = {
        tag: "g",
        attributes: g({}, E.outer),
        children: [k]
      }, D = "mask-".concat(l || Ce()), A = "clip-".concat(l || Ce()), _ = {
        tag: "mask",
        attributes: g(g({}, vt), {}, {
          id: D,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [I, j]
      }, v = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: A
          },
          children: xo(h)
        }, _]
      };
      return r.push(v, {
        tag: "rect",
        attributes: g({
          fill: "currentColor",
          "clip-path": "url(#".concat(A, ")"),
          mask: "url(#".concat(D, ")")
        }, vt)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, Ao = {
  provides: function(t) {
    var n = !1;
    ie.matchMedia && (n = ie.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, o = {
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
      var s = g(g({}, o), {}, {
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
      return n || l.children.push({
        tag: "animate",
        attributes: g(g({}, o), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: g(g({}, s), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(l), r.push({
        tag: "path",
        attributes: g(g({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: g(g({}, s), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || r.push({
        tag: "path",
        attributes: g(g({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: g(g({}, s), {}, {
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
}, So = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-symbol"), o = a === null ? !1 : a === "" ? !0 : a;
        return n.symbol = o, n;
      }
    };
  }
}, To = [ki, co, uo, mo, vo, ho, Eo, wo, ko, Ao, So];
ji(To, {
  mixoutsTo: q
});
q.noAuto;
q.config;
q.library;
q.dom;
var Ft = q.parse;
q.findIconDefinition;
q.toHtml;
var Po = q.icon;
q.layer;
q.text;
q.counter;
function Oo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nt = { exports: {} }, Xe = { exports: {} }, M = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _n;
function Co() {
  if (_n)
    return M;
  _n = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
  function A(v) {
    if (typeof v == "object" && v !== null) {
      var H = v.$$typeof;
      switch (H) {
        case t:
          switch (v = v.type, v) {
            case f:
            case u:
            case r:
            case o:
            case a:
            case m:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case c:
                case I:
                case E:
                case s:
                  return v;
                default:
                  return H;
              }
          }
        case n:
          return H;
      }
    }
  }
  function _(v) {
    return A(v) === u;
  }
  return M.AsyncMode = f, M.ConcurrentMode = u, M.ContextConsumer = l, M.ContextProvider = s, M.Element = t, M.ForwardRef = c, M.Fragment = r, M.Lazy = I, M.Memo = E, M.Portal = n, M.Profiler = o, M.StrictMode = a, M.Suspense = m, M.isAsyncMode = function(v) {
    return _(v) || A(v) === f;
  }, M.isConcurrentMode = _, M.isContextConsumer = function(v) {
    return A(v) === l;
  }, M.isContextProvider = function(v) {
    return A(v) === s;
  }, M.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, M.isForwardRef = function(v) {
    return A(v) === c;
  }, M.isFragment = function(v) {
    return A(v) === r;
  }, M.isLazy = function(v) {
    return A(v) === I;
  }, M.isMemo = function(v) {
    return A(v) === E;
  }, M.isPortal = function(v) {
    return A(v) === n;
  }, M.isProfiler = function(v) {
    return A(v) === o;
  }, M.isStrictMode = function(v) {
    return A(v) === a;
  }, M.isSuspense = function(v) {
    return A(v) === m;
  }, M.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === r || v === u || v === o || v === a || v === m || v === h || typeof v == "object" && v !== null && (v.$$typeof === I || v.$$typeof === E || v.$$typeof === s || v.$$typeof === l || v.$$typeof === c || v.$$typeof === k || v.$$typeof === j || v.$$typeof === D || v.$$typeof === w);
  }, M.typeOf = A, M;
}
var $ = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function Io() {
  return Rn || (Rn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, c = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, I = e ? Symbol.for("react.lazy") : 60116, w = e ? Symbol.for("react.block") : 60121, k = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, D = e ? Symbol.for("react.scope") : 60119;
    function A(p) {
      return typeof p == "string" || typeof p == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      p === r || p === u || p === o || p === a || p === m || p === h || typeof p == "object" && p !== null && (p.$$typeof === I || p.$$typeof === E || p.$$typeof === s || p.$$typeof === l || p.$$typeof === c || p.$$typeof === k || p.$$typeof === j || p.$$typeof === D || p.$$typeof === w);
    }
    function _(p) {
      if (typeof p == "object" && p !== null) {
        var Q = p.$$typeof;
        switch (Q) {
          case t:
            var je = p.type;
            switch (je) {
              case f:
              case u:
              case r:
              case o:
              case a:
              case m:
                return je;
              default:
                var rn = je && je.$$typeof;
                switch (rn) {
                  case l:
                  case c:
                  case I:
                  case E:
                  case s:
                    return rn;
                  default:
                    return Q;
                }
            }
          case n:
            return Q;
        }
      }
    }
    var v = f, H = u, X = l, le = s, G = t, we = c, $e = r, st = I, lt = E, ve = n, ft = o, K = a, fe = m, Le = !1;
    function ct(p) {
      return Le || (Le = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), d(p) || _(p) === f;
    }
    function d(p) {
      return _(p) === u;
    }
    function b(p) {
      return _(p) === l;
    }
    function C(p) {
      return _(p) === s;
    }
    function P(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function x(p) {
      return _(p) === c;
    }
    function R(p) {
      return _(p) === r;
    }
    function S(p) {
      return _(p) === I;
    }
    function O(p) {
      return _(p) === E;
    }
    function F(p) {
      return _(p) === n;
    }
    function L(p) {
      return _(p) === o;
    }
    function N(p) {
      return _(p) === a;
    }
    function B(p) {
      return _(p) === m;
    }
    $.AsyncMode = v, $.ConcurrentMode = H, $.ContextConsumer = X, $.ContextProvider = le, $.Element = G, $.ForwardRef = we, $.Fragment = $e, $.Lazy = st, $.Memo = lt, $.Portal = ve, $.Profiler = ft, $.StrictMode = K, $.Suspense = fe, $.isAsyncMode = ct, $.isConcurrentMode = d, $.isContextConsumer = b, $.isContextProvider = C, $.isElement = P, $.isForwardRef = x, $.isFragment = R, $.isLazy = S, $.isMemo = O, $.isPortal = F, $.isProfiler = L, $.isStrictMode = N, $.isSuspense = B, $.isValidElementType = A, $.typeOf = _;
  }()), $;
}
var Fn;
function Sr() {
  return Fn || (Fn = 1, process.env.NODE_ENV === "production" ? Xe.exports = Co() : Xe.exports = Io()), Xe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var pt, Nn;
function _o() {
  if (Nn)
    return pt;
  Nn = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var s = {}, l = 0; l < 10; l++)
        s["_" + String.fromCharCode(l)] = l;
      var f = Object.getOwnPropertyNames(s).map(function(c) {
        return s[c];
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
  return pt = a() ? Object.assign : function(o, s) {
    for (var l, f = r(o), u, c = 1; c < arguments.length; c++) {
      l = Object(arguments[c]);
      for (var m in l)
        t.call(l, m) && (f[m] = l[m]);
      if (e) {
        u = e(l);
        for (var h = 0; h < u.length; h++)
          n.call(l, u[h]) && (f[u[h]] = l[u[h]]);
      }
    }
    return f;
  }, pt;
}
var gt, Mn;
function Zt() {
  if (Mn)
    return gt;
  Mn = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return gt = e, gt;
}
var bt, $n;
function Tr() {
  return $n || ($n = 1, bt = Function.call.bind(Object.prototype.hasOwnProperty)), bt;
}
var yt, Ln;
function Ro() {
  if (Ln)
    return yt;
  Ln = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Zt(), n = {}, r = Tr();
    e = function(o) {
      var s = "Warning: " + o;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(o, s, l, f, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in o)
        if (r(o, c)) {
          var m;
          try {
            if (typeof o[c] != "function") {
              var h = Error(
                (f || "React class") + ": " + l + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            m = o[c](s, c, f, l, null, t);
          } catch (I) {
            m = I;
          }
          if (m && !(m instanceof Error) && e(
            (f || "React class") + ": type specification of " + l + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof m + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), m instanceof Error && !(m.message in n)) {
            n[m.message] = !0;
            var E = u ? u() : "";
            e(
              "Failed " + l + " type: " + m.message + (E ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, yt = a, yt;
}
var ht, jn;
function Fo() {
  if (jn)
    return ht;
  jn = 1;
  var e = Sr(), t = _o(), n = Zt(), r = Tr(), a = Ro(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(l) {
    var f = "Warning: " + l;
    typeof console < "u" && console.error(f);
    try {
      throw new Error(f);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return ht = function(l, f) {
    var u = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function m(d) {
      var b = d && (u && d[u] || d[c]);
      if (typeof b == "function")
        return b;
    }
    var h = "<<anonymous>>", E = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: D(),
      arrayOf: A,
      element: _(),
      elementType: v(),
      instanceOf: H,
      node: we(),
      objectOf: le,
      oneOf: X,
      oneOfType: G,
      shape: st,
      exact: lt
    };
    function I(d, b) {
      return d === b ? d !== 0 || 1 / d === 1 / b : d !== d && b !== b;
    }
    function w(d, b) {
      this.message = d, this.data = b && typeof b == "object" ? b : {}, this.stack = "";
    }
    w.prototype = Error.prototype;
    function k(d) {
      if (process.env.NODE_ENV !== "production")
        var b = {}, C = 0;
      function P(R, S, O, F, L, N, B) {
        if (F = F || h, N = N || O, B !== n) {
          if (f) {
            var p = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw p.name = "Invariant Violation", p;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = F + ":" + O;
            !b[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            C < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + N + "` prop on `" + F + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), b[Q] = !0, C++);
          }
        }
        return S[O] == null ? R ? S[O] === null ? new w("The " + L + " `" + N + "` is marked as required " + ("in `" + F + "`, but its value is `null`.")) : new w("The " + L + " `" + N + "` is marked as required in " + ("`" + F + "`, but its value is `undefined`.")) : null : d(S, O, F, L, N);
      }
      var x = P.bind(null, !1);
      return x.isRequired = P.bind(null, !0), x;
    }
    function j(d) {
      function b(C, P, x, R, S, O) {
        var F = C[P], L = K(F);
        if (L !== d) {
          var N = fe(F);
          return new w(
            "Invalid " + R + " `" + S + "` of type " + ("`" + N + "` supplied to `" + x + "`, expected ") + ("`" + d + "`."),
            { expectedType: d }
          );
        }
        return null;
      }
      return k(b);
    }
    function D() {
      return k(s);
    }
    function A(d) {
      function b(C, P, x, R, S) {
        if (typeof d != "function")
          return new w("Property `" + S + "` of component `" + x + "` has invalid PropType notation inside arrayOf.");
        var O = C[P];
        if (!Array.isArray(O)) {
          var F = K(O);
          return new w("Invalid " + R + " `" + S + "` of type " + ("`" + F + "` supplied to `" + x + "`, expected an array."));
        }
        for (var L = 0; L < O.length; L++) {
          var N = d(O, L, x, R, S + "[" + L + "]", n);
          if (N instanceof Error)
            return N;
        }
        return null;
      }
      return k(b);
    }
    function _() {
      function d(b, C, P, x, R) {
        var S = b[C];
        if (!l(S)) {
          var O = K(S);
          return new w("Invalid " + x + " `" + R + "` of type " + ("`" + O + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(d);
    }
    function v() {
      function d(b, C, P, x, R) {
        var S = b[C];
        if (!e.isValidElementType(S)) {
          var O = K(S);
          return new w("Invalid " + x + " `" + R + "` of type " + ("`" + O + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(d);
    }
    function H(d) {
      function b(C, P, x, R, S) {
        if (!(C[P] instanceof d)) {
          var O = d.name || h, F = ct(C[P]);
          return new w("Invalid " + R + " `" + S + "` of type " + ("`" + F + "` supplied to `" + x + "`, expected ") + ("instance of `" + O + "`."));
        }
        return null;
      }
      return k(b);
    }
    function X(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), s;
      function b(C, P, x, R, S) {
        for (var O = C[P], F = 0; F < d.length; F++)
          if (I(O, d[F]))
            return null;
        var L = JSON.stringify(d, function(B, p) {
          var Q = fe(p);
          return Q === "symbol" ? String(p) : p;
        });
        return new w("Invalid " + R + " `" + S + "` of value `" + String(O) + "` " + ("supplied to `" + x + "`, expected one of " + L + "."));
      }
      return k(b);
    }
    function le(d) {
      function b(C, P, x, R, S) {
        if (typeof d != "function")
          return new w("Property `" + S + "` of component `" + x + "` has invalid PropType notation inside objectOf.");
        var O = C[P], F = K(O);
        if (F !== "object")
          return new w("Invalid " + R + " `" + S + "` of type " + ("`" + F + "` supplied to `" + x + "`, expected an object."));
        for (var L in O)
          if (r(O, L)) {
            var N = d(O, L, x, R, S + "." + L, n);
            if (N instanceof Error)
              return N;
          }
        return null;
      }
      return k(b);
    }
    function G(d) {
      if (!Array.isArray(d))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var b = 0; b < d.length; b++) {
        var C = d[b];
        if (typeof C != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Le(C) + " at index " + b + "."
          ), s;
      }
      function P(x, R, S, O, F) {
        for (var L = [], N = 0; N < d.length; N++) {
          var B = d[N], p = B(x, R, S, O, F, n);
          if (p == null)
            return null;
          p.data && r(p.data, "expectedType") && L.push(p.data.expectedType);
        }
        var Q = L.length > 0 ? ", expected one of type [" + L.join(", ") + "]" : "";
        return new w("Invalid " + O + " `" + F + "` supplied to " + ("`" + S + "`" + Q + "."));
      }
      return k(P);
    }
    function we() {
      function d(b, C, P, x, R) {
        return ve(b[C]) ? null : new w("Invalid " + x + " `" + R + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return k(d);
    }
    function $e(d, b, C, P, x) {
      return new w(
        (d || "React class") + ": " + b + " type `" + C + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + x + "`."
      );
    }
    function st(d) {
      function b(C, P, x, R, S) {
        var O = C[P], F = K(O);
        if (F !== "object")
          return new w("Invalid " + R + " `" + S + "` of type `" + F + "` " + ("supplied to `" + x + "`, expected `object`."));
        for (var L in d) {
          var N = d[L];
          if (typeof N != "function")
            return $e(x, R, S, L, fe(N));
          var B = N(O, L, x, R, S + "." + L, n);
          if (B)
            return B;
        }
        return null;
      }
      return k(b);
    }
    function lt(d) {
      function b(C, P, x, R, S) {
        var O = C[P], F = K(O);
        if (F !== "object")
          return new w("Invalid " + R + " `" + S + "` of type `" + F + "` " + ("supplied to `" + x + "`, expected `object`."));
        var L = t({}, C[P], d);
        for (var N in L) {
          var B = d[N];
          if (r(d, N) && typeof B != "function")
            return $e(x, R, S, N, fe(B));
          if (!B)
            return new w(
              "Invalid " + R + " `" + S + "` key `" + N + "` supplied to `" + x + "`.\nBad object: " + JSON.stringify(C[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(d), null, "  ")
            );
          var p = B(O, N, x, R, S + "." + N, n);
          if (p)
            return p;
        }
        return null;
      }
      return k(b);
    }
    function ve(d) {
      switch (typeof d) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !d;
        case "object":
          if (Array.isArray(d))
            return d.every(ve);
          if (d === null || l(d))
            return !0;
          var b = m(d);
          if (b) {
            var C = b.call(d), P;
            if (b !== d.entries) {
              for (; !(P = C.next()).done; )
                if (!ve(P.value))
                  return !1;
            } else
              for (; !(P = C.next()).done; ) {
                var x = P.value;
                if (x && !ve(x[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ft(d, b) {
      return d === "symbol" ? !0 : b ? b["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && b instanceof Symbol : !1;
    }
    function K(d) {
      var b = typeof d;
      return Array.isArray(d) ? "array" : d instanceof RegExp ? "object" : ft(b, d) ? "symbol" : b;
    }
    function fe(d) {
      if (typeof d > "u" || d === null)
        return "" + d;
      var b = K(d);
      if (b === "object") {
        if (d instanceof Date)
          return "date";
        if (d instanceof RegExp)
          return "regexp";
      }
      return b;
    }
    function Le(d) {
      var b = fe(d);
      switch (b) {
        case "array":
        case "object":
          return "an " + b;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + b;
        default:
          return b;
      }
    }
    function ct(d) {
      return !d.constructor || !d.constructor.name ? h : d.constructor.name;
    }
    return E.checkPropTypes = a, E.resetWarningCache = a.resetWarningCache, E.PropTypes = E, E;
  }, ht;
}
var Et, Dn;
function No() {
  if (Dn)
    return Et;
  Dn = 1;
  var e = Zt();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Et = function() {
    function r(s, l, f, u, c, m) {
      if (m !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var o = {
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
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, Et;
}
if (process.env.NODE_ENV !== "production") {
  var Mo = Sr(), $o = !0;
  Nt.exports = Fo()(Mo.isElement, $o);
} else
  Nt.exports = No()();
var Lo = Nt.exports;
const T = /* @__PURE__ */ Oo(Lo);
function zn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ae(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? zn(Object(n), !0).forEach(function(r) {
      be(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : zn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function tt(e) {
  "@babel/helpers - typeof";
  return tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tt(e);
}
function be(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function jo(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, o;
  for (o = 0; o < r.length; o++)
    a = r[o], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Do(e, t) {
  if (e == null)
    return {};
  var n = jo(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (a = 0; a < o.length; a++)
      r = o[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Mt(e) {
  return zo(e) || Yo(e) || Wo(e) || Uo();
}
function zo(e) {
  if (Array.isArray(e))
    return $t(e);
}
function Yo(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Wo(e, t) {
  if (e) {
    if (typeof e == "string")
      return $t(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return $t(e, t);
  }
}
function $t(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Uo() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ho(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, o = e.bounce, s = e.shake, l = e.flash, f = e.spin, u = e.spinPulse, c = e.spinReverse, m = e.pulse, h = e.fixedWidth, E = e.inverse, I = e.border, w = e.listItem, k = e.flip, j = e.size, D = e.rotation, A = e.pull, _ = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": o,
    "fa-shake": s,
    "fa-flash": l,
    "fa-spin": f,
    "fa-spin-reverse": c,
    "fa-spin-pulse": u,
    "fa-pulse": m,
    "fa-fw": h,
    "fa-inverse": E,
    "fa-border": I,
    "fa-li": w,
    "fa-flip": k === !0,
    "fa-flip-horizontal": k === "horizontal" || k === "both",
    "fa-flip-vertical": k === "vertical" || k === "both"
  }, be(t, "fa-".concat(j), typeof j < "u" && j !== null), be(t, "fa-rotate-".concat(D), typeof D < "u" && D !== null && D !== 0), be(t, "fa-pull-".concat(A), typeof A < "u" && A !== null), be(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(_).map(function(v) {
    return _[v] ? v : null;
  }).filter(function(v) {
    return v;
  });
}
function Bo(e) {
  return e = e - 0, e === e;
}
function Pr(e) {
  return Bo(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var qo = ["style"];
function Go(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Xo(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = Pr(n.slice(0, r)), o = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[Go(a)] = o : t[a] = o, t;
  }, {});
}
function Or(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(f) {
    return Or(e, f);
  }), a = Object.keys(t.attributes || {}).reduce(function(f, u) {
    var c = t.attributes[u];
    switch (u) {
      case "class":
        f.attrs.className = c, delete t.attributes.class;
        break;
      case "style":
        f.attrs.style = Xo(c);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? f.attrs[u.toLowerCase()] = c : f.attrs[Pr(u)] = c;
    }
    return f;
  }, {
    attrs: {}
  }), o = n.style, s = o === void 0 ? {} : o, l = Do(n, qo);
  return a.attrs.style = ae(ae({}, a.attrs.style), s), e.apply(void 0, [t.tag, ae(ae({}, a.attrs), l)].concat(Mt(r)));
}
var Cr = !1;
try {
  Cr = process.env.NODE_ENV === "production";
} catch {
}
function Vo() {
  if (!Cr && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Yn(e) {
  if (e && tt(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Ft.icon)
    return Ft.icon(e);
  if (e === null)
    return null;
  if (e && tt(e) === "object" && e.prefix && e.iconName)
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
function wt(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? be({}, e, t) : {};
}
var Me = /* @__PURE__ */ i.forwardRef(function(e, t) {
  var n = e.icon, r = e.mask, a = e.symbol, o = e.className, s = e.title, l = e.titleId, f = e.maskId, u = Yn(n), c = wt("classes", [].concat(Mt(Ho(e)), Mt(o.split(" ")))), m = wt("transform", typeof e.transform == "string" ? Ft.transform(e.transform) : e.transform), h = wt("mask", Yn(r)), E = Po(u, ae(ae(ae(ae({}, c), m), h), {}, {
    symbol: a,
    title: s,
    titleId: l,
    maskId: f
  }));
  if (!E)
    return Vo("Could not find icon", u), null;
  var I = E.abstract, w = {
    ref: t
  };
  return Object.keys(e).forEach(function(k) {
    Me.defaultProps.hasOwnProperty(k) || (w[k] = e[k]);
  }), Ko(I[0], w);
});
Me.displayName = "FontAwesomeIcon";
Me.propTypes = {
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
Me.defaultProps = {
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
var Ko = Or.bind(null, i.createElement);
const en = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Me, { ...e })), tn = "42px", Xs = (e) => {
  var r, a;
  const [t, n] = Ve(!0);
  return /* @__PURE__ */ i.createElement(
    _e.Sider,
    {
      width: 200,
      collapsedWidth: 100,
      style: {
        border: "solid 1px black",
        minHeight: "750px",
        backgroundColor: "white"
      },
      collapsible: !0,
      collapsed: t,
      trigger: null,
      onMouseEnter: (o) => {
        n(!1);
      },
      onMouseLeave: (o) => {
        n(!0);
      }
    },
    /* @__PURE__ */ i.createElement(Dt, { vertical: !0, justify: "space-between", style: { height: "100%", backgroundColor: "white" } }, /* @__PURE__ */ i.createElement("div", null, /* @__PURE__ */ i.createElement(Qo, { ...e.logo }), /* @__PURE__ */ i.createElement("hr", null), e.canSearch && /* @__PURE__ */ i.createElement(Jo, null), ((r = e.createOptions) == null ? void 0 : r.canCreate) && ((a = e.createOptions) == null ? void 0 : a.createItems) && /* @__PURE__ */ i.createElement(Zo, { createItems: e.createOptions.createItems }), /* @__PURE__ */ i.createElement(Wn, { items: e.tools })), /* @__PURE__ */ i.createElement(Wn, { items: e.management }))
  );
};
function Qo(e) {
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(nt, null, /* @__PURE__ */ i.createElement("div", { style: {
    minWidth: "80px",
    minHeight: tn,
    borderRadius: "6px",
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    paddingTop: "7px",
    margin: "8px 0"
  } }, /* @__PURE__ */ i.createElement(Qn, null, e.label, /* @__PURE__ */ i.createElement(nn, { icon: e.icon })))));
}
function Jo() {
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement($a, { placement: "right", title: /* @__PURE__ */ i.createElement(Qn, { size: "large" }, /* @__PURE__ */ i.createElement(i.Fragment, null, "Search"), /* @__PURE__ */ i.createElement(i.Fragment, null, "Ctrl + K")) }, /* @__PURE__ */ i.createElement(nt, { style: { height: tn } }, /* @__PURE__ */ i.createElement(en, { icon: qa, color: "gray", size: "2x" }))), /* @__PURE__ */ i.createElement("hr", null));
}
function nn({ icon: e }) {
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(en, { icon: e, color: "gray", border: !0, style: {
    borderRadius: "50%",
    padding: "6px",
    backgroundColor: "antiquewhite",
    cursor: "pointer"
  } }));
}
function Zo({ createItems: e }) {
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(nt, { style: { height: tn } }, /* @__PURE__ */ i.createElement(Ir, { items: [{
    icon: /* @__PURE__ */ i.createElement(en, { icon: Ga, color: "gray", size: "2x" }),
    key: "NavigationCreate",
    children: e
  }] })), /* @__PURE__ */ i.createElement("hr", null));
}
function Wn({ items: e }) {
  return /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement("span", null, e.map(
    (t, n) => /* @__PURE__ */ i.createElement(i.Fragment, null, t.type === "link" && /* @__PURE__ */ i.createElement(nt, { vertical: !0 }, " ", /* @__PURE__ */ i.createElement(nn, { icon: t.icon }), " ", t.label, " "), t.type === "menu" && /* @__PURE__ */ i.createElement(Ir, { items: [es(t, n)] }))
  )));
}
function es(e, t) {
  const n = e.children.map((r, a) => ({
    key: `${r.label}${a}`,
    ...r
  }));
  return n.unshift({ label: e.label, type: "group", key: e.label + "_groupTitle" }), {
    label: e.label,
    key: `${e.label}${t}`,
    icon: /* @__PURE__ */ i.createElement(nn, { icon: e.icon }),
    className: "globalNavigation__item",
    children: n
  };
}
const Vs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ca, { ...e })), ts = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Gn, { ...e }));
ts.Item = Gn.Item;
const Ks = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ia, { ...e })), Ir = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(_a, { ...e })), Qs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Un, { ...e })), Js = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Ra, { ...e })), Zs = (e) => /* @__PURE__ */ i.createElement(i.Fragment, null, /* @__PURE__ */ i.createElement(Fa, { ...e }));
export {
  Js as Affix,
  Us as Alert,
  Vs as Anchor,
  Bs as AnnotationModal,
  Zs as App,
  bs as AutoComplete,
  Fs as Avatar,
  La as Badge,
  ts as Breadcrumb,
  Na as Button,
  xs as Calendar,
  Rs as Card,
  Ps as Carousel,
  ms as Cascader,
  nt as Center,
  ds as Checkbox,
  Es as Collapse,
  cs as ColorPicker,
  Qs as ConfigProvider,
  Ma as DatePicker,
  Ns as Descriptions,
  Ys as Drawer,
  Kn as Dropdown,
  Vn as Empty,
  Dt as Flex,
  as as FloatButton,
  os as Form,
  Xs as GlobalNavigation,
  qs as Grid,
  Is as Image,
  an as Input,
  vs as InputNumber,
  _e as Layout,
  ja as List,
  Ha as LoadingModal,
  fs as Mentions,
  Ir as Menu,
  Hs as Message,
  Ya as Modal,
  Ws as Notification,
  Ks as Pagination,
  zs as Popconfirm,
  $s as Popover,
  Ls as Progress,
  _s as QRCode,
  Xn as Radio,
  is as Rate,
  Da as Result,
  ks as Segmented,
  ls as Select,
  za as Skeleton,
  us as Slider,
  Qn as Space,
  js as Spin,
  Os as Statistic,
  Gs as Steps,
  ps as Switch,
  Ms as Table,
  As as Tabs,
  Ss as Tag,
  ys as TimePicker,
  ws as Timeline,
  $a as Tooltip,
  Ts as Tour,
  hs as Transfer,
  Cs as Tree,
  ss as TreeSelect,
  gs as Upload,
  Ds as Watermark
};
