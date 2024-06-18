import { defineComponent as es, useSlots as ts, ref as M, computed as w, watch as be, nextTick as ut, resolveComponent as Qt, openBlock as u, createElementBlock as d, normalizeClass as ie, unref as K, renderSlot as Z, createCommentVNode as V, withModifiers as Le, createBlock as z, resolveDynamicComponent as ee, createElementVNode as ft, Fragment as Oe, renderList as dt, withDirectives as ns, createVNode as ss, vShow as os, createTextVNode as Xt, toDisplayString as Ne } from "vue";
import { generateRandomString as Zt } from "lkt-string-tools";
import { httpCall as rs } from "lkt-http-client";
import ls from "lkt-loader";
import is from "lkt-field-text";
const J = class J {
};
J.debugEnabled = !1, J.NO_OPTIONS_MESSAGE = "", J.emptyValueText = "", J.defaultEmptyValueSlot = "", J.customResourceOptionSlots = {}, J.customResourceValueSlots = {};
let g = J;
const as = () => g.NO_OPTIONS_MESSAGE, Rr = (e) => (g.NO_OPTIONS_MESSAGE = e, !0), Cr = (e) => (g.emptyValueText = e, !0), Dr = (e, t) => (g.customResourceOptionSlots[e] = t, !0), Tr = (e, t) => (g.customResourceValueSlots[e] = t, !0), Mr = (e, t) => {
  g.defaultEmptyValueSlot = e, t && (g.customResourceValueSlots[e] = t);
};
class en {
  constructor(t = []) {
    Array.isArray(t) || (t = []), this.value = [...t];
  }
  all() {
    return this.value;
  }
  filter(t) {
    if (t === "")
      return this.all();
    const n = t.toLowerCase();
    return this.value.filter((o) => o.label.toLowerCase().indexOf(n) !== -1);
  }
  findByValue(t) {
    if (t)
      return this.value.find((n) => n.value === t);
  }
  receiveOptions(t) {
    const n = /* @__PURE__ */ new Set(), o = [...this.value, ...t], s = [];
    o.forEach((r) => {
      let l = [r.value, r.label].join("-");
      n.has(l) || (s.push(r), n.add(l));
    }), this.value = s;
  }
}
/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function cs(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const G = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ue = () => {
}, us = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), H = Object.assign, fs = Object.prototype.hasOwnProperty, N = (e, t) => fs.call(e, t), E = Array.isArray, pe = (e) => Xe(e) === "[object Map]", ds = (e) => Xe(e) === "[object Set]", R = (e) => typeof e == "function", L = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", A = (e) => e !== null && typeof e == "object", ps = (e) => (A(e) || R(e)) && R(e.then) && R(e.catch), hs = Object.prototype.toString, Xe = (e) => hs.call(e), mn = (e) => Xe(e).slice(8, -1), _s = (e) => Xe(e) === "[object Object]", Ot = (e) => L(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, gn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, En = gn((e) => e.charAt(0).toUpperCase() + e.slice(1)), vs = gn((e) => e ? `on${En(e)}` : ""), ve = (e, t) => !Object.is(e, t), ms = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let tn;
const wn = () => tn || (tn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Nt(e) {
  if (E(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = L(o) ? ys(o) : Nt(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (L(e) || A(e))
    return e;
}
const gs = /;(?![^(]*\))/g, Es = /:([^]+)/, ws = /\/\*[^]*?\*\//g;
function ys(e) {
  const t = {};
  return e.replace(ws, "").split(gs).forEach((n) => {
    if (n) {
      const o = n.split(Es);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Vt(e) {
  let t = "";
  if (L(e))
    t = e;
  else if (E(e))
    for (let n = 0; n < e.length; n++) {
      const o = Vt(e[n]);
      o && (t += o + " ");
    }
  else if (A(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ie(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ss;
function bs(e, t = Ss) {
  t && t.active && t.effects.push(e);
}
let Ce;
class Os {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, bs(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ze();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Ns(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), et();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = te, n = Ce;
    try {
      return te = !0, Ce = this, this._runnings++, nn(this), this.fn();
    } finally {
      sn(this), this._runnings--, Ce = n, te = t;
    }
  }
  stop() {
    var t;
    this.active && (nn(this), sn(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Ns(e) {
  return e.value;
}
function nn(e) {
  e._trackId++, e._depsLength = 0;
}
function sn(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      yn(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function yn(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let te = !0, _t = 0;
const Sn = [];
function Ze() {
  Sn.push(te), te = !1;
}
function et() {
  const e = Sn.pop();
  te = e === void 0 ? !0 : e;
}
function Rt() {
  _t++;
}
function Ct() {
  for (_t--; !_t && vt.length; )
    vt.shift()();
}
function Vs(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && yn(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, H({ effect: e }, n)));
  }
}
const vt = [];
function Rs(e, t, n) {
  var o;
  Rt();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, H({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && vt.push(s.scheduler)));
  }
  Ct();
}
const Cs = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, mt = /* @__PURE__ */ new WeakMap(), ne = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), gt = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function I(e, t, n) {
  if (te && Ce) {
    let o = mt.get(e);
    o || mt.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Cs(() => o.delete(n))), Vs(
      Ce,
      s,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function Q(e, t, n, o, s, r) {
  const l = mt.get(e);
  if (!l)
    return;
  let a = [];
  if (t === "clear")
    a = [...l.values()];
  else if (n === "length" && E(e)) {
    const c = Number(o);
    l.forEach((f, y) => {
      (y === "length" || !Qe(y) && y >= c) && a.push(f);
    });
  } else
    switch (n !== void 0 && a.push(l.get(n)), t) {
      case "add":
        E(e) ? Ot(n) && a.push(l.get("length")) : (a.push(l.get(ne)), pe(e) && a.push(l.get(gt)));
        break;
      case "delete":
        E(e) || (a.push(l.get(ne)), pe(e) && a.push(l.get(gt)));
        break;
      case "set":
        pe(e) && a.push(l.get(ne));
        break;
    }
  Rt();
  for (const c of a)
    c && Rs(
      c,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: s,
        oldTarget: r
      } : void 0
    );
  Ct();
}
const Ds = /* @__PURE__ */ cs("__proto__,__v_isRef,__isVue"), bn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qe)
), on = /* @__PURE__ */ Ts();
function Ts() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = _(this);
      for (let r = 0, l = this.length; r < l; r++)
        I(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(_)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ze(), Rt();
      const o = _(this)[t].apply(this, n);
      return Ct(), et(), o;
    };
  }), e;
}
function Ms(e) {
  const t = _(this);
  return I(t, "has", e), t.hasOwnProperty(e);
}
class On {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (s ? r ? Dn : Cn : r ? Us : Rn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const l = E(t);
    if (!s) {
      if (l && N(on, n))
        return Reflect.get(on, n, o);
      if (n === "hasOwnProperty")
        return Ms;
    }
    const a = Reflect.get(t, n, o);
    return (Qe(n) ? bn.has(n) : Ds(n)) || (s || I(t, "get", n), r) ? a : j(a) ? l && Ot(n) ? a : a.value : A(a) ? s ? Mn(a) : Tn(a) : a;
  }
}
class Is extends On {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const c = xe(r);
      if (!Et(o) && !xe(o) && (r = _(r), o = _(o)), !E(t) && j(r) && !j(o))
        return c ? !1 : (r.value = o, !0);
    }
    const l = E(t) && Ot(n) ? Number(n) < t.length : N(t, n), a = Reflect.set(t, n, o, s);
    return t === _(s) && (l ? ve(o, r) && Q(t, "set", n, o, r) : Q(t, "add", n, o)), a;
  }
  deleteProperty(t, n) {
    const o = N(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Q(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Qe(n) || !bn.has(n)) && I(t, "has", n), o;
  }
  ownKeys(t) {
    return I(
      t,
      "iterate",
      E(t) ? "length" : ne
    ), Reflect.ownKeys(t);
  }
}
class Nn extends On {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Ie(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Ie(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const xs = /* @__PURE__ */ new Is(), $s = /* @__PURE__ */ new Nn(), Ps = /* @__PURE__ */ new Nn(!0), Dt = (e) => e, tt = (e) => Reflect.getPrototypeOf(e);
function Ae(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = _(e), r = _(t);
  n || (ve(t, r) && I(s, "get", t), I(s, "get", r));
  const { has: l } = tt(s), a = o ? Dt : n ? xt : It;
  if (l.call(s, t))
    return a(e.get(t));
  if (l.call(s, r))
    return a(e.get(r));
  e !== s && e.get(t);
}
function je(e, t = !1) {
  const n = this.__v_raw, o = _(n), s = _(e);
  return t || (ve(e, s) && I(o, "has", e), I(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function He(e, t = !1) {
  return e = e.__v_raw, !t && I(_(e), "iterate", ne), Reflect.get(e, "size", e);
}
function rn(e) {
  e = _(e);
  const t = _(this);
  return tt(t).has.call(t, e) || (t.add(e), Q(t, "add", e, e)), this;
}
function ln(e, t) {
  t = _(t);
  const n = _(this), { has: o, get: s } = tt(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && Vn(n, o, e) : (e = _(e), r = o.call(n, e));
  const l = s.call(n, e);
  return n.set(e, t), r ? ve(t, l) && Q(n, "set", e, t, l) : Q(n, "add", e, t), this;
}
function an(e) {
  const t = _(this), { has: n, get: o } = tt(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && Vn(t, n, e) : (e = _(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, l = t.delete(e);
  return s && Q(t, "delete", e, void 0, r), l;
}
function cn() {
  const e = _(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? pe(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Q(e, "clear", void 0, void 0, n), o;
}
function Fe(e, t) {
  return function(o, s) {
    const r = this, l = r.__v_raw, a = _(l), c = t ? Dt : e ? xt : It;
    return !e && I(a, "iterate", ne), l.forEach((f, y) => o.call(s, c(f), c(y), r));
  };
}
function Ke(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = _(s), l = pe(r), a = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, f = s[e](...o), y = n ? Dt : t ? xt : It;
    return !t && I(
      r,
      "iterate",
      c ? gt : ne
    ), {
      // iterator protocol
      next() {
        const { value: p, done: C } = f.next();
        return C ? { value: p, done: C } : {
          value: a ? [y(p[0]), y(p[1])] : y(p),
          done: C
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function W(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ie(
        `${En(e)} operation ${n}failed: target is readonly.`,
        _(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ks() {
  const e = {
    get(r) {
      return Ae(this, r);
    },
    get size() {
      return He(this);
    },
    has: je,
    add: rn,
    set: ln,
    delete: an,
    clear: cn,
    forEach: Fe(!1, !1)
  }, t = {
    get(r) {
      return Ae(this, r, !1, !0);
    },
    get size() {
      return He(this);
    },
    has: je,
    add: rn,
    set: ln,
    delete: an,
    clear: cn,
    forEach: Fe(!1, !0)
  }, n = {
    get(r) {
      return Ae(this, r, !0);
    },
    get size() {
      return He(this, !0);
    },
    has(r) {
      return je.call(this, r, !0);
    },
    add: W("add"),
    set: W("set"),
    delete: W("delete"),
    clear: W("clear"),
    forEach: Fe(!0, !1)
  }, o = {
    get(r) {
      return Ae(this, r, !0, !0);
    },
    get size() {
      return He(this, !0);
    },
    has(r) {
      return je.call(this, r, !0);
    },
    add: W("add"),
    set: W("set"),
    delete: W("delete"),
    clear: W("clear"),
    forEach: Fe(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = Ke(
      r,
      !1,
      !1
    ), n[r] = Ke(
      r,
      !0,
      !1
    ), t[r] = Ke(
      r,
      !1,
      !0
    ), o[r] = Ke(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  Ls,
  As,
  js,
  Hs
] = /* @__PURE__ */ ks();
function Tt(e, t) {
  const n = t ? e ? Hs : js : e ? As : Ls;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    N(n, s) && s in o ? n : o,
    s,
    r
  );
}
const Fs = {
  get: /* @__PURE__ */ Tt(!1, !1)
}, Ks = {
  get: /* @__PURE__ */ Tt(!0, !1)
}, Bs = {
  get: /* @__PURE__ */ Tt(!0, !0)
};
function Vn(e, t, n) {
  const o = _(n);
  if (o !== n && t.call(e, o)) {
    const s = mn(e);
    Ie(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Rn = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), Cn = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap();
function zs(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Ws(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : zs(mn(e));
}
function Tn(e) {
  return xe(e) ? e : Mt(
    e,
    !1,
    xs,
    Fs,
    Rn
  );
}
function Mn(e) {
  return Mt(
    e,
    !0,
    $s,
    Ks,
    Cn
  );
}
function Be(e) {
  return Mt(
    e,
    !0,
    Ps,
    Bs,
    Dn
  );
}
function Mt(e, t, n, o, s) {
  if (!A(e))
    return process.env.NODE_ENV !== "production" && Ie(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const l = Ws(e);
  if (l === 0)
    return e;
  const a = new Proxy(
    e,
    l === 2 ? o : n
  );
  return s.set(e, a), a;
}
function he(e) {
  return xe(e) ? he(e.__v_raw) : !!(e && e.__v_isReactive);
}
function xe(e) {
  return !!(e && e.__v_isReadonly);
}
function Et(e) {
  return !!(e && e.__v_isShallow);
}
function wt(e) {
  return he(e) || xe(e);
}
function _(e) {
  const t = e && e.__v_raw;
  return t ? _(t) : e;
}
function Gs(e) {
  return Object.isExtensible(e) && ms(e, "__v_skip", !0), e;
}
const It = (e) => A(e) ? Tn(e) : e, xt = (e) => A(e) ? Mn(e) : e;
function j(e) {
  return !!(e && e.__v_isRef === !0);
}
function qs(e) {
  return j(e) ? e.value : e;
}
const Js = {
  get: (e, t, n) => qs(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return j(s) && !j(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ys(e) {
  return he(e) ? e : new Proxy(e, Js);
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const se = [];
function Qs(e) {
  se.push(e);
}
function Xs() {
  se.pop();
}
function S(e, ...t) {
  Ze();
  const n = se.length ? se[se.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Zs();
  if (o)
    oe(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Wn(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...eo(s)), console.warn(...r);
  }
  et();
}
function Zs() {
  let e = se[se.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function eo(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...to(n));
  }), t;
}
function to({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Wn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...no(e.props), r] : [s + r];
}
function no(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...In(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function In(e, t, n) {
  return L(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : j(t) ? (t = In(e, _(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = _(t), n ? t : [`${e}=`, t]);
}
const $t = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function oe(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    Pt(s, t, n);
  }
}
function De(e, t, n, o) {
  if (R(e)) {
    const r = oe(e, t, n, o);
    return r && ps(r) && r.catch((l) => {
      Pt(l, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(De(e[r], t, n, o));
  return s;
}
function Pt(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const l = t.proxy, a = process.env.NODE_ENV !== "production" ? $t[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const f = r.ec;
      if (f) {
        for (let y = 0; y < f.length; y++)
          if (f[y](e, l, a) === !1)
            return;
      }
      r = r.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      oe(
        c,
        null,
        10,
        [e, l, a]
      );
      return;
    }
  }
  so(e, n, s, o);
}
function so(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = $t[t];
    if (n && Qs(n), S(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Xs(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ge = !1, yt = !1;
const k = [];
let Y = 0;
const _e = [];
let B = null, q = 0;
const xn = /* @__PURE__ */ Promise.resolve();
let kt = null;
const oo = 100;
function ro(e) {
  const t = kt || xn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function lo(e) {
  let t = Y + 1, n = k.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = k[o], r = $e(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function Lt(e) {
  (!k.length || !k.includes(
    e,
    Ge && e.allowRecurse ? Y + 1 : Y
  )) && (e.id == null ? k.push(e) : k.splice(lo(e.id), 0, e), $n());
}
function $n() {
  !Ge && !yt && (yt = !0, kt = xn.then(kn));
}
function Pn(e) {
  E(e) ? _e.push(...e) : (!B || !B.includes(
    e,
    e.allowRecurse ? q + 1 : q
  )) && _e.push(e), $n();
}
function io(e) {
  if (_e.length) {
    const t = [...new Set(_e)].sort(
      (n, o) => $e(n) - $e(o)
    );
    if (_e.length = 0, B) {
      B.push(...t);
      return;
    }
    for (B = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), q = 0; q < B.length; q++)
      process.env.NODE_ENV !== "production" && Ln(e, B[q]) || B[q]();
    B = null, q = 0;
  }
}
const $e = (e) => e.id == null ? 1 / 0 : e.id, ao = (e, t) => {
  const n = $e(e) - $e(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function kn(e) {
  yt = !1, Ge = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), k.sort(ao);
  const t = process.env.NODE_ENV !== "production" ? (n) => Ln(e, n) : ue;
  try {
    for (Y = 0; Y < k.length; Y++) {
      const n = k[Y];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        oe(n, null, 14);
      }
    }
  } finally {
    Y = 0, k.length = 0, io(e), Ge = !1, kt = null, (k.length || _e.length) && kn(e);
  }
}
function Ln(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > oo) {
      const o = t.ownerInstance, s = o && zn(o.type);
      return Pt(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Ve = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (wn().__VUE_HMR_RUNTIME__ = {
  createRecord: pt(co),
  rerender: pt(uo),
  reload: pt(fo)
});
const qe = /* @__PURE__ */ new Map();
function co(e, t) {
  return qe.has(e) ? !1 : (qe.set(e, {
    initialDef: Te(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Te(e) {
  return Gn(e) ? e.__vccOpts : e;
}
function uo(e, t) {
  const n = qe.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Te(o.type).render = t), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function fo(e, t) {
  const n = qe.get(e);
  if (!n)
    return;
  t = Te(t), un(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = Te(s.type);
    Ve.has(r) || (r !== n.initialDef && un(r, t), Ve.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Ve.add(r), s.ceReload(t.styles), Ve.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, Lt(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Pn(() => {
    for (const s of o)
      Ve.delete(
        Te(s.type)
      );
  });
}
function un(e, t) {
  H(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function pt(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ce, Ue = [];
function An(e, t) {
  var n, o;
  ce = e, ce ? (ce.enabled = !0, Ue.forEach(({ event: s, args: r }) => ce.emit(s, ...r)), Ue = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    An(r, t);
  }), setTimeout(() => {
    ce || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ue = []);
  }, 3e3)) : Ue = [];
}
let U = null, po = null;
const ho = Symbol.for("v-ndc"), _o = (e) => e.__isSuspense;
function vo(e, t) {
  t && t.pendingBranch ? E(e) ? t.effects.push(...e) : t.effects.push(e) : Pn(e);
}
const mo = Symbol.for("v-scx"), go = () => {
  {
    const e = Mo(mo);
    return e || process.env.NODE_ENV !== "production" && S(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, ze = {};
function Eo(e, t, {
  immediate: n,
  deep: o,
  flush: s,
  once: r,
  onTrack: l,
  onTrigger: a
} = G) {
  if (t && r) {
    const h = t;
    t = (...Ee) => {
      h(...Ee), ge();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && S(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && S(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && S(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && S(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (h) => {
    S(
      "Invalid watch source: ",
      h,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = me, y = (h) => o === !0 ? h : (
    // for deep: false, only traverse root-level properties
    fe(h, o === !1 ? 1 : void 0)
  );
  let p, C = !1, $ = !1;
  if (j(e) ? (p = () => e.value, C = Et(e)) : he(e) ? (p = () => y(e), C = !0) : E(e) ? ($ = !0, C = e.some((h) => he(h) || Et(h)), p = () => e.map((h) => {
    if (j(h))
      return h.value;
    if (he(h))
      return y(h);
    if (R(h))
      return oe(h, f, 2);
    process.env.NODE_ENV !== "production" && c(h);
  })) : R(e) ? t ? p = () => oe(e, f, 2) : p = () => (v && v(), De(
    e,
    f,
    3,
    [X]
  )) : (p = ue, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const h = p;
    p = () => fe(h());
  }
  let v, X = (h) => {
    v = b.onStop = () => {
      oe(h, f, 4), v = b.onStop = void 0;
    };
  }, F;
  if (jt)
    if (X = ue, t ? n && De(t, f, 3, [
      p(),
      $ ? [] : void 0,
      X
    ]) : p(), s === "sync") {
      const h = go();
      F = h.__watcherHandles || (h.__watcherHandles = []);
    } else
      return ue;
  let D = $ ? new Array(e.length).fill(ze) : ze;
  const x = () => {
    if (!(!b.active || !b.dirty))
      if (t) {
        const h = b.run();
        (o || C || ($ ? h.some((Ee, nt) => ve(Ee, D[nt])) : ve(h, D))) && (v && v(), De(t, f, 3, [
          h,
          // pass undefined as the old value when it's changed for the first time
          D === ze ? void 0 : $ && D[0] === ze ? [] : D,
          X
        ]), D = h);
      } else
        b.run();
  };
  x.allowRecurse = !!t;
  let P;
  s === "sync" ? P = x : s === "post" ? P = () => vn(x, f && f.suspense) : (x.pre = !0, f && (x.id = f.uid), P = () => Lt(x));
  const b = new Os(p, ue, P), ge = () => {
    b.stop();
  };
  return process.env.NODE_ENV !== "production" && (b.onTrack = l, b.onTrigger = a), t ? n ? x() : D = b.run() : s === "post" ? vn(
    b.run.bind(b),
    f && f.suspense
  ) : b.run(), F && F.push(ge), ge;
}
function wo(e, t, n) {
  const o = this.proxy, s = L(e) ? e.includes(".") ? yo(o, e) : () => o[e] : e.bind(o, o);
  let r;
  R(t) ? r = t : (r = t.handler, n = t);
  const l = Un(this), a = Eo(s, r.bind(o), n);
  return l(), a;
}
function yo(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function fe(e, t, n = 0, o) {
  if (!A(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (o = o || /* @__PURE__ */ new Set(), o.has(e))
    return e;
  if (o.add(e), j(e))
    fe(e.value, t, n, o);
  else if (E(e))
    for (let s = 0; s < e.length; s++)
      fe(e[s], t, n, o);
  else if (ds(e) || pe(e))
    e.forEach((s) => {
      fe(s, t, n, o);
    });
  else if (_s(e))
    for (const s in e)
      fe(e[s], t, n, o);
  return e;
}
function So(e, t, n = me, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      Ze();
      const a = Un(n), c = De(t, n, e, l);
      return a(), et(), c;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = vs($t[e].replace(/ hook$/, ""));
    S(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const bo = (e) => (t, n = me) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!jt || e === "sp") && So(e, (...o) => t(...o), n)
), Oo = bo("bum"), St = (e) => e ? Ko(e) ? Bo(e) || e.proxy : St(e.parent) : null, Me = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ H(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Be(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Be(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Be(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Be(e.refs) : e.refs,
    $parent: (e) => St(e.parent),
    $root: (e) => St(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ro(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Lt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ro.bind(e.proxy)),
    $watch: (e) => wo.bind(e)
  })
), No = (e) => e === "_" || e === "$", ht = (e, t) => e !== G && !e.__isScriptSetup && N(e, t), Vo = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: l, type: a, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const $ = l[t];
      if ($ !== void 0)
        switch ($) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (ht(o, t))
          return l[t] = 1, o[t];
        if (s !== G && N(s, t))
          return l[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && N(f, t)
        )
          return l[t] = 3, r[t];
        if (n !== G && N(n, t))
          return l[t] = 4, n[t];
        l[t] = 0;
      }
    }
    const y = Me[t];
    let p, C;
    if (y)
      return t === "$attrs" ? (I(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && I(e, "get", t), y(e);
    if (
      // css module (injected by vue-loader)
      (p = a.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== G && N(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      C = c.config.globalProperties, N(C, t)
    )
      return C[t];
    process.env.NODE_ENV !== "production" && U && (!L(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== G && No(t[0]) && N(s, t) ? S(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === U && S(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return ht(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && N(s, t) ? (S(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== G && N(o, t) ? (o[t] = n, !0) : N(e.props, t) ? (process.env.NODE_ENV !== "production" && S(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && S(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r }
  }, l) {
    let a;
    return !!n[l] || e !== G && N(e, l) || ht(t, l) || (a = r[0]) && N(a, l) || N(o, l) || N(Me, l) || N(s.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Vo.ownKeys = (e) => (S(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function fn(e) {
  return E(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ro(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: l }
  } = e.appContext, a = r.get(t);
  let c;
  return a ? c = a : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(
    (f) => Je(c, f, l, !0)
  ), Je(c, t, l)), A(t) && r.set(t, c), c;
}
function Je(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && Je(e, r, n, !0), s && s.forEach(
    (l) => Je(e, l, n, !0)
  );
  for (const l in t)
    if (o && l === "expose")
      process.env.NODE_ENV !== "production" && S(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Co[l] || n && n[l];
      e[l] = a ? a(e[l], t[l]) : t[l];
    }
  return e;
}
const Co = {
  data: dn,
  props: hn,
  emits: hn,
  // objects
  methods: Re,
  computed: Re,
  // lifecycle
  beforeCreate: T,
  created: T,
  beforeMount: T,
  mounted: T,
  beforeUpdate: T,
  updated: T,
  beforeDestroy: T,
  beforeUnmount: T,
  destroyed: T,
  unmounted: T,
  activated: T,
  deactivated: T,
  errorCaptured: T,
  serverPrefetch: T,
  // assets
  components: Re,
  directives: Re,
  // watch
  watch: To,
  // provide / inject
  provide: dn,
  inject: Do
};
function dn(e, t) {
  return t ? e ? function() {
    return H(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Do(e, t) {
  return Re(pn(e), pn(t));
}
function pn(e) {
  if (E(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function T(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Re(e, t) {
  return e ? H(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function hn(e, t) {
  return e ? E(e) && E(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : H(
    /* @__PURE__ */ Object.create(null),
    fn(e),
    fn(t ?? {})
  ) : t;
}
function To(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = H(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = T(e[o], t[o]);
  return n;
}
let _n = null;
function Mo(e, t, n = !1) {
  const o = me || U;
  if (o || _n) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : _n._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && R(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && S(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && S("inject() can only be used inside setup() or functional components.");
}
const vn = vo, Io = (e) => e.__isTeleport, jn = Symbol.for("v-fgt"), xo = Symbol.for("v-txt"), $o = Symbol.for("v-cmt");
let de = null;
function Po(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const ko = (...e) => Kn(
  ...e
), Hn = "__vInternal", Fn = ({ key: e }) => e ?? null, We = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? L(e) || j(e) || R(e) ? { i: U, r: e, k: t, f: !!n } : e : null);
function Lo(e, t = null, n = null, o = 0, s = null, r = e === jn ? 0 : 1, l = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Fn(t),
    ref: t && We(t),
    scopeId: po,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: U
  };
  return a ? (At(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= L(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && S("VNode created with invalid key (NaN). VNode type:", c.type), // avoid a block node from tracking itself
  !l && // has current parent block
  de && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && de.push(c), c;
}
const Ao = process.env.NODE_ENV !== "production" ? ko : Kn;
function Kn(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === ho) && (process.env.NODE_ENV !== "production" && !e && S(`Invalid vnode type when creating vnode: ${e}.`), e = $o), Po(e)) {
    const a = Ye(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && At(a, n), !r && de && (a.shapeFlag & 6 ? de[de.indexOf(e)] = a : de.push(a)), a.patchFlag |= -2, a;
  }
  if (Gn(e) && (e = e.__vccOpts), t) {
    t = jo(t);
    let { class: a, style: c } = t;
    a && !L(a) && (t.class = Vt(a)), A(c) && (wt(c) && !E(c) && (c = H({}, c)), t.style = Nt(c));
  }
  const l = L(e) ? 1 : _o(e) ? 128 : Io(e) ? 64 : A(e) ? 4 : R(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && l & 4 && wt(e) && (e = _(e), S(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Lo(
    e,
    t,
    n,
    o,
    s,
    l,
    r,
    !0
  );
}
function jo(e) {
  return e ? wt(e) || Hn in e ? H({}, e) : e : null;
}
function Ye(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: l } = e, a = t ? Fo(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Fn(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? E(s) ? s.concat(We(t)) : [s, We(t)] : We(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && E(l) ? l.map(Bn) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== jn ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ye(e.ssContent),
    ssFallback: e.ssFallback && Ye(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Bn(e) {
  const t = Ye(e);
  return E(e.children) && (t.children = e.children.map(Bn)), t;
}
function Ho(e = " ", t = 0) {
  return Ao(xo, null, e, t);
}
function At(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (E(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), At(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Hn in t) ? t._ctx = U : s === 3 && U && (U.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    R(t) ? (t = { default: t, _ctx: U }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ho(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Fo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = Vt([t.class, o.class]));
      else if (s === "style")
        t.style = Nt([t.style, o.style]);
      else if (us(s)) {
        const r = t[s], l = o[s];
        l && r !== l && !(E(r) && r.includes(l)) && (t[s] = r ? [].concat(r, l) : l);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
let me = null, bt;
{
  const e = wn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((l) => l(r)) : s[0](r);
    };
  };
  bt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => me = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => jt = n
  );
}
const Un = (e) => {
  const t = me;
  return bt(e), e.scope.on(), () => {
    e.scope.off(), bt(t);
  };
};
function Ko(e) {
  return e.vnode.shapeFlag & 4;
}
let jt = !1;
function Bo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ys(Gs(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Me)
          return Me[n](e);
      },
      has(t, n) {
        return n in t || n in Me;
      }
    }));
}
const Uo = /(?:^|[-_])(\w)/g, zo = (e) => e.replace(Uo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function zn(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Wn(e, t, n = !1) {
  let o = zn(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const l in r)
        if (r[l] === t)
          return l;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? zo(o) : n ? "App" : "Anonymous";
}
function Gn(e) {
  return R(e) && "__vccOpts" in e;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const ae = (...e) => {
  g.debugEnabled && console.info("[LktFieldSelect] ", ...e);
}, Ir = (e = !0) => {
  g.debugEnabled = e;
}, Wo = ["innerHTML"], Go = ["id", "multiple"], qo = {
  key: 3,
  class: "lkt-field__select"
}, Jo = ["innerHTML"], Yo = ["title"], Qo = ["innerHTML"], Xo = {
  key: 2,
  class: "lkt-field__select-dropdown"
}, Zo = { class: "lkt-field__select-search-container" }, er = {
  key: 1,
  class: "lkt-field__select-options"
}, tr = ["onClick"], nr = {
  key: 0,
  class: "lkt-field__select-option"
}, sr = {
  key: 3,
  class: "lkt-field__state"
}, or = ["title"], rr = ["title"], lr = {
  key: 4,
  class: "lkt-field-select__read"
}, ir = {
  key: 0,
  class: "lkt-field-select-empty"
}, ar = {
  key: 1,
  class: "lkt-field-select-empty"
}, cr = ["innerHTML", "title"], ur = {
  key: 5,
  class: "lkt-field__state"
}, fr = ["title"], dr = {
  key: 5,
  class: "lkt-field-select__read-multiple"
}, pr = { key: 0 }, hr = {
  key: 1,
  class: "lkt-field-select-empty"
}, _r = {
  key: 2,
  class: "lkt-field-select-empty"
}, vr = ["title"], mr = ["innerHTML"], gr = {
  key: 4,
  class: "lkt-field__state"
}, Er = ["title"], wr = /* @__PURE__ */ es({
  __name: "LktFieldSelect",
  props: {
    modelValue: { default: "" },
    class: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: Zt(16) },
    valid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    closeOnSelect: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    searchable: { type: Boolean, default: !1 },
    upperDropdown: { type: Boolean, default: !1 },
    choiceDropdown: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    switchEditionMessage: { default: "" },
    emptyLabel: { type: Boolean, default: !1 },
    options: { default: () => [] },
    multiple: { type: Boolean, default: !1 },
    reset: { type: Boolean, default: !1 },
    resetMessage: { default: "" },
    tags: { type: Boolean, default: !1 },
    autoloadResource: { type: Boolean, default: !1 },
    noOptionsMessage: { default: as() },
    resource: { default: "" },
    resourceData: { default: () => ({}) },
    slotData: { default: () => ({}) },
    searchStringResourceParam: { default: "query" },
    searchPlaceholder: { default: "" },
    useResourceSlot: { default: "" },
    multipleDisplay: { default: "list" },
    multipleDisplayEdition: { default: "inline" },
    mandatory: { type: Boolean, default: !1 },
    mandatoryMessage: { default: "Mandatory" },
    emptyValueSlot: { default: "" },
    emptyValueText: { default: "" }
  },
  emits: ["update:modelValue", "click-ui", "selected-option", "results"],
  setup(e, { expose: t, emit: n }) {
    const o = n, s = e, r = ts(), l = M(null), a = M(null), c = M(null), f = M(!s.readMode), y = Zt(16), p = M(new en(s.options)), C = M(!1), $ = M(s.modelValue), v = M(s.modelValue), X = M(!1), F = M(!1), D = M(!1), x = M(p.value.all()), P = M(p.value.all()), b = M("");
    s.closeOnSelect === null ? C.value = s.multiple === !0 : C.value = s.closeOnSelect;
    const ge = w(() => s.resource !== ""), h = w(() => typeof s.valid == "function" ? s.valid() : s.valid), Ee = w(() => v.value !== $.value), nt = w(() => {
      const i = ["lkt-field", "lkt-field-select"];
      return s.palette && i.push(`lkt-field--${s.palette}`), Ee.value && i.push("is-changed"), s.class && i.push(s.class), s.multiple && i.push("is-multiple"), s.disabled && i.push("is-disabled"), s.tags && i.push("with-tags"), s.upperDropdown && !s.choiceDropdown && i.push("lkt-field-select-upper-dropdown"), s.choiceDropdown && i.push("lkt-field-select-choice-dropdown"), s.mandatory && f.value && i.push("is-mandatory-field"), D.value && i.push("has-focus"), i.push(h.value ? "is-valid" : "is-error"), i.push(s.modelValue ? "is-filled" : "is-empty"), i.join(" ");
    }), qn = w(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplay}`), i.join(" ");
    }), Jn = w(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplayEdition}`), i.join(" ");
    }), Ht = w(() => {
      let i = !1;
      return P.value.forEach((O) => {
        O.value == v.value && (i = !0);
      }), i;
    }), we = w(() => {
      let i = {};
      return P.value.forEach((O) => {
        O.value == v.value && (i = O);
      }), i;
    }), st = w(() => {
      let i = "";
      return P.value.forEach((O) => {
        O.value == v.value && (i = O.label);
      }), i;
    }), Ft = w(() => {
      let i = [];
      return s.multiple && P.value.forEach((O) => {
        v.value.forEach((Se) => {
          Se == O.value && i.push(O);
        });
      }), i;
    }), ot = w(() => Array.isArray(v.value) ? v.value.length : 0), Kt = w(() => s.allowReadModeSwitch || s.reset && Pe.value), Pe = w(() => s.multiple ? v.value.length > 0 : v.value !== ""), re = () => {
      P.value = p.value.all(), x.value = p.value.filter(b.value), F.value = !1, ae("buildVisibleOptions: optionsValue", p.value), ae("buildVisibleOptions: optionsHaystack", P.value), ae("buildVisibleOptions: visibleOptions", x.value);
    }, Bt = () => {
      b.value = "", f.value && re();
    }, rt = async () => {
      if (f.value)
        if (F.value = !1, ge.value) {
          F.value = !0, s.searchStringResourceParam && (s.resourceData[s.searchStringResourceParam] = b.value);
          const i = await rs(s.resource, s.resourceData);
          p.value.receiveOptions(i.data), re(), o("results", i.data);
        } else
          re();
    }, Ut = () => {
      v.value = $.value;
    }, Yn = () => s.modelValue, ye = (i) => {
      f.value && (Bt(), lt(i), D.value = !D.value, D.value && ut(() => {
        rt(), l.value.focus(), ut(() => {
          l.value.focus();
        });
      }));
    };
    be(() => s.readMode, (i) => f.value = !i), be(() => s.modelValue, (i) => {
      ae("Updated props.modelValue", i), v.value = i;
    }), be(v, (i) => {
      o("update:modelValue", i), o("selected-option", p.value.findByValue(i)), X.value = !0, ut(() => X.value = !1);
    }), be(b, re), be(() => s.options, (i) => {
      ae("Updated props.options", i, p.value), p.value = new en(i), re();
    });
    const zt = (i) => {
      if (s.multiple) {
        let O = v.value.findIndex((Se) => Se == i.value);
        return typeof O > "u" && (O = -1), O;
      }
      return -1;
    }, Qn = (i) => {
      if (s.multiple) {
        let O = zt(i);
        O === -1 ? v.value.push(i.value) : v.value.splice(O, 1);
      } else
        v.value = i.value, D.value = !1;
    }, Xn = (i) => s.multiple ? zt(i) !== -1 : i.value == v.value, lt = (i) => {
      if (!c.value.contains(i.target)) {
        Bt(), D.value = !1;
        return;
      }
    }, it = (i) => {
      f.value = !f.value, f.value && focus();
    };
    window.addEventListener("click", lt), re(), Oo(() => {
      window.removeEventListener("click", lt);
    }), t({
      reset: Ut,
      value: Yn
    }), s.autoloadResource && s.resource !== "" && (ae("Auto loading Resource", s.resource, s.resourceData, s.autoloadResource), rt());
    const le = w(() => s.useResourceSlot ? s.useResourceSlot : s.resource), Wt = w(() => g.NO_OPTIONS_MESSAGE), Gt = w(() => s.emptyValueText !== "" ? s.emptyValueText : g.emptyValueText), ke = w(() => s.emptyValueSlot !== "" && typeof g.customResourceValueSlots[s.emptyValueSlot] < "u" || g.defaultEmptyValueSlot && typeof g.customResourceValueSlots[g.defaultEmptyValueSlot] < "u"), qt = w(() => g.customResourceValueSlots[s.emptyValueSlot] ?? g.customResourceValueSlots[g.defaultEmptyValueSlot]), at = w(() => le.value !== "" && typeof g.customResourceOptionSlots[le.value] < "u"), ct = w(() => g.customResourceOptionSlots[le.value]), Jt = w(() => le.value !== "" && typeof g.customResourceValueSlots[le.value] < "u"), Yt = w(() => g.customResourceValueSlots[le.value]);
    return (i, O) => {
      const Se = Qt("lkt-field-text"), Zn = Qt("lkt-loader");
      return u(), d("div", {
        class: ie(nt.value),
        "data-show-ui": !1,
        ref: (m) => c.value = m
      }, [
        K(r).prefix ? Z(i.$slots, "prefix", { key: 0 }) : V("", !0),
        i.label ? (u(), d("label", {
          key: 1,
          innerHTML: i.label,
          onClick: Le(ye, ["stop", "prevent"])
        }, null, 8, Wo)) : V("", !0),
        f.value ? (u(), d("select", {
          key: 2,
          ref: (m) => a.value = m,
          id: K(y),
          onFocus: Le(ye, ["stop", "prevent"]),
          onBlur: Le(ye, ["stop", "prevent"]),
          multiple: i.multiple,
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, Go)) : V("", !0),
        f.value ? (u(), d("div", qo, [
          i.multiple ? (u(), d("div", {
            key: 1,
            class: "lkt-field__select-value-multiple",
            onClick: ye
          }, [
            ft("ul", {
              class: ie(Jn.value)
            }, [
              (u(!0), d(Oe, null, dt(Ft.value, (m) => (u(), d("li", {
                title: m.label
              }, [
                K(r).option ? Z(i.$slots, "option", {
                  key: 0,
                  option: m,
                  data: i.slotData
                }) : at.value ? (u(), z(ee(ct.value), {
                  key: 1,
                  option: m
                }, null, 8, ["option"])) : (u(), d("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: m.label
                }, null, 8, Qo))
              ], 8, Yo))), 256))
            ], 2)
          ])) : (u(), d("div", {
            key: 0,
            class: "lkt-field__select-value",
            onClick: ye
          }, [
            Pe.value && K(r).option ? Z(i.$slots, "option", {
              key: 0,
              option: we.value,
              data: i.slotData
            }) : Pe.value && at.value ? (u(), z(ee(ct.value), {
              key: 1,
              option: we.value
            }, null, 8, ["option"])) : (u(), d("div", {
              key: 2,
              class: "lkt-field-select__read-value",
              innerHTML: st.value
            }, null, 8, Jo))
          ])),
          D.value ? (u(), d("div", Xo, [
            ns(ft("div", Zo, [
              ss(Se, {
                ref: (m) => l.value = m,
                modelValue: b.value,
                "onUpdate:modelValue": O[0] || (O[0] = (m) => b.value = m),
                placeholder: i.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search",
                onKeyup: rt
              }, null, 8, ["modelValue", "placeholder"])
            ], 512), [
              [os, i.searchable]
            ]),
            F.value ? (u(), z(Zn, { key: 0 })) : V("", !0),
            !i.readonly && !F.value ? (u(), d("ul", er, [
              (u(!0), d(Oe, null, dt(x.value, (m) => (u(), d("li", {
                class: ie(["lkt-field__select-option", { "is-active": i.multiple ? Xn(m) : m.value == v.value }]),
                onClick: Le((yr) => Qn(m), ["prevent", "stop"])
              }, [
                K(r).option ? Z(i.$slots, "option", {
                  key: 0,
                  option: m,
                  data: i.slotData
                }) : V("", !0),
                at.value ? (u(), z(ee(ct.value), {
                  key: 1,
                  option: m
                }, null, 8, ["option"])) : (u(), d(Oe, { key: 2 }, [
                  Xt(Ne(m.label), 1)
                ], 64))
              ], 10, tr))), 256)),
              x.value.length === 0 && (K(r)["no-results"] || Wt.value) ? (u(), d("li", nr, [
                K(r)["no-results"] ? Z(i.$slots, "no-results", { key: 0 }) : (u(), d(Oe, { key: 1 }, [
                  Xt(Ne(Wt.value), 1)
                ], 64))
              ])) : V("", !0)
            ])) : V("", !0)
          ])) : V("", !0),
          Kt.value ? (u(), d("div", sr, [
            s.reset && Pe.value ? (u(), d("i", {
              key: 0,
              class: "lkt-field__reset-icon",
              title: i.resetText,
              onClick: Ut
            }, null, 8, or)) : V("", !0),
            i.allowReadModeSwitch ? (u(), d("i", {
              key: 1,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: it
            }, null, 8, rr)) : V("", !0)
          ])) : V("", !0)
        ])) : V("", !0),
        !f.value && !i.multiple ? (u(), d("div", lr, [
          !Ht.value && ke.value ? (u(), d("div", ir, [
            (u(), z(ee(qt.value)))
          ])) : !Ht.value && !ke.value ? (u(), d("div", ar, Ne(Gt.value), 1)) : K(r).value ? Z(i.$slots, "value", {
            key: 2,
            option: we.value,
            data: i.slotData
          }) : Jt.value ? (u(), z(ee(Yt.value), {
            key: 3,
            option: we.value
          }, null, 8, ["option"])) : (u(), d("div", {
            key: 4,
            class: ie(["lkt-field-select__read-value", "lkt-field-option option-" + we.value.value]),
            innerHTML: st.value,
            title: st.value
          }, null, 10, cr)),
          Kt.value ? (u(), d("div", ur, [
            i.allowReadModeSwitch ? (u(), d("i", {
              key: 0,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: it
            }, null, 8, fr)) : V("", !0)
          ])) : V("", !0)
        ])) : V("", !0),
        !f.value && i.multiple ? (u(), d("div", dr, [
          i.multipleDisplay === "count" ? (u(), d("div", pr, Ne(ot.value), 1)) : ot.value === 0 && ke.value ? (u(), d("div", hr, [
            (u(), z(ee(qt.value)))
          ])) : ot.value === 0 && !ke.value ? (u(), d("div", _r, Ne(Gt.value), 1)) : (u(), d("ul", {
            key: 3,
            class: ie(qn.value)
          }, [
            (u(!0), d(Oe, null, dt(Ft.value, (m) => (u(), d("li", {
              title: m.label,
              class: ie("lkt-field-option option-" + m.value)
            }, [
              K(r).value ? Z(i.$slots, "value", {
                key: 0,
                option: m,
                data: i.slotData
              }) : Jt.value ? (u(), z(ee(Yt.value), {
                key: 1,
                option: m,
                data: i.slotData
              }, null, 8, ["option", "data"])) : (u(), d("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: m.label
              }, null, 8, mr))
            ], 10, vr))), 256))
          ], 2)),
          i.allowReadModeSwitch ? (u(), d("div", gr, [
            ft("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: it
            }, null, 8, Er)
          ])) : V("", !0)
        ])) : V("", !0)
      ], 2);
    };
  }
}), xr = {
  install: (e) => {
    e.component("lkt-field-select") === void 0 && e.component("lkt-field-select", wr), e.component("lkt-loader") === void 0 && e.use(ls), e.component("lkt-field-text") === void 0 && e.use(is);
  }
};
export {
  Ir as debugLktFieldSelect,
  xr as default,
  Mr as setDefaultSelectEmptyValueSlot,
  Rr as setNoOptionsMessage,
  Dr as setResourceOptionSlot,
  Tr as setResourceValueSlot,
  Cr as setSelectEmptyValueMessage
};
