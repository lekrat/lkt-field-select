import { defineComponent as Qn, useSlots as Xn, ref as M, computed as O, watch as we, nextTick as it, resolveComponent as Ut, openBlock as u, createElementBlock as d, normalizeClass as Ie, unref as K, renderSlot as X, createCommentVNode as V, withModifiers as xe, createBlock as Z, resolveDynamicComponent as re, createElementVNode as at, Fragment as ye, renderList as ct, withDirectives as Zn, createVNode as es, vShow as ts, createTextVNode as Wt, toDisplayString as $e } from "vue";
import { generateRandomString as Gt } from "lkt-string-tools";
import { httpCall as ns } from "lkt-http-client";
import ss from "lkt-loader";
import os from "lkt-field-text";
const q = class q {
};
q.debugEnabled = !1, q.NO_OPTIONS_MESSAGE = "", q.emptyValueText = "", q.defaultEmptyValueSlot = "", q.customResourceOptionSlots = {}, q.customResourceValueSlots = {};
let v = q;
const rs = () => v.NO_OPTIONS_MESSAGE, Sr = (e) => (v.NO_OPTIONS_MESSAGE = e, !0), Or = (e) => (v.emptyValueText = e, !0), br = (e, t) => (v.customResourceOptionSlots[e] = t, !0), Nr = (e, t) => (v.customResourceValueSlots[e] = t, !0), Vr = (e, t) => {
  v.defaultEmptyValueSlot = e, t && (v.customResourceValueSlots[e] = t);
};
class qt {
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
function ls(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const W = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ie = () => {
}, is = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), j = Object.assign, as = Object.prototype.hasOwnProperty, b = (e, t) => as.call(e, t), g = Array.isArray, ue = (e) => Je(e) === "[object Map]", cs = (e) => Je(e) === "[object Set]", R = (e) => typeof e == "function", k = (e) => typeof e == "string", qe = (e) => typeof e == "symbol", L = (e) => e !== null && typeof e == "object", us = (e) => (L(e) || R(e)) && R(e.then) && R(e.catch), fs = Object.prototype.toString, Je = (e) => fs.call(e), fn = (e) => Je(e).slice(8, -1), ds = (e) => Je(e) === "[object Object]", yt = (e) => k(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, dn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, pn = dn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ps = dn((e) => e ? `on${pn(e)}` : ""), pe = (e, t) => !Object.is(e, t), hs = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Jt;
const hn = () => Jt || (Jt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function St(e) {
  if (g(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = k(o) ? gs(o) : St(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (k(e) || L(e))
    return e;
}
const _s = /;(?![^(]*\))/g, ms = /:([^]+)/, vs = /\/\*[^]*?\*\//g;
function gs(e) {
  const t = {};
  return e.replace(vs, "").split(_s).forEach((n) => {
    if (n) {
      const o = n.split(ms);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Ot(e) {
  let t = "";
  if (k(e))
    t = e;
  else if (g(e))
    for (let n = 0; n < e.length; n++) {
      const o = Ot(e[n]);
      o && (t += o + " ");
    }
  else if (L(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
/**
* @vue/reactivity v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ce(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Es;
function ws(e, t = Es) {
  t && t.active && t.effects.push(e);
}
let be;
class ys {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, ws(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ye();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Ss(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Qe();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = ee, n = be;
    try {
      return ee = !0, be = this, this._runnings++, Yt(this), this.fn();
    } finally {
      Qt(this), this._runnings--, be = n, ee = t;
    }
  }
  stop() {
    var t;
    this.active && (Yt(this), Qt(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Ss(e) {
  return e.value;
}
function Yt(e) {
  e._trackId++, e._depsLength = 0;
}
function Qt(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      _n(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function _n(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let ee = !0, dt = 0;
const mn = [];
function Ye() {
  mn.push(ee), ee = !1;
}
function Qe() {
  const e = mn.pop();
  ee = e === void 0 ? !0 : e;
}
function bt() {
  dt++;
}
function Nt() {
  for (dt--; !dt && pt.length; )
    pt.shift()();
}
function Os(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && _n(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, j({ effect: e }, n)));
  }
}
const pt = [];
function bs(e, t, n) {
  var o;
  bt();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, j({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && pt.push(s.scheduler)));
  }
  Nt();
}
const Ns = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, ht = /* @__PURE__ */ new WeakMap(), te = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), _t = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function I(e, t, n) {
  if (ee && be) {
    let o = ht.get(e);
    o || ht.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Ns(() => o.delete(n))), Os(
      be,
      s,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function Y(e, t, n, o, s, r) {
  const l = ht.get(e);
  if (!l)
    return;
  let a = [];
  if (t === "clear")
    a = [...l.values()];
  else if (n === "length" && g(e)) {
    const c = Number(o);
    l.forEach((f, w) => {
      (w === "length" || !qe(w) && w >= c) && a.push(f);
    });
  } else
    switch (n !== void 0 && a.push(l.get(n)), t) {
      case "add":
        g(e) ? yt(n) && a.push(l.get("length")) : (a.push(l.get(te)), ue(e) && a.push(l.get(_t)));
        break;
      case "delete":
        g(e) || (a.push(l.get(te)), ue(e) && a.push(l.get(_t)));
        break;
      case "set":
        ue(e) && a.push(l.get(te));
        break;
    }
  bt();
  for (const c of a)
    c && bs(
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
  Nt();
}
const Vs = /* @__PURE__ */ ls("__proto__,__v_isRef,__isVue"), vn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qe)
), Xt = /* @__PURE__ */ Rs();
function Rs() {
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
      Ye(), bt();
      const o = _(this)[t].apply(this, n);
      return Nt(), Qe(), o;
    };
  }), e;
}
function Cs(e) {
  const t = _(this);
  return I(t, "has", e), t.hasOwnProperty(e);
}
class gn {
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
      return o === (s ? r ? On : Sn : r ? Fs : yn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const l = g(t);
    if (!s) {
      if (l && b(Xt, n))
        return Reflect.get(Xt, n, o);
      if (n === "hasOwnProperty")
        return Cs;
    }
    const a = Reflect.get(t, n, o);
    return (qe(n) ? vn.has(n) : Vs(n)) || (s || I(t, "get", n), r) ? a : A(a) ? l && yt(n) ? a : a.value : L(a) ? s ? Nn(a) : bn(a) : a;
  }
}
class Ds extends gn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const c = De(r);
      if (!mt(o) && !De(o) && (r = _(r), o = _(o)), !g(t) && A(r) && !A(o))
        return c ? !1 : (r.value = o, !0);
    }
    const l = g(t) && yt(n) ? Number(n) < t.length : b(t, n), a = Reflect.set(t, n, o, s);
    return t === _(s) && (l ? pe(o, r) && Y(t, "set", n, o, r) : Y(t, "add", n, o)), a;
  }
  deleteProperty(t, n) {
    const o = b(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Y(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!qe(n) || !vn.has(n)) && I(t, "has", n), o;
  }
  ownKeys(t) {
    return I(
      t,
      "iterate",
      g(t) ? "length" : te
    ), Reflect.ownKeys(t);
  }
}
class En extends gn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Ce(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Ce(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Ts = /* @__PURE__ */ new Ds(), Ms = /* @__PURE__ */ new En(), Is = /* @__PURE__ */ new En(!0), Vt = (e) => e, Xe = (e) => Reflect.getPrototypeOf(e);
function Pe(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = _(e), r = _(t);
  n || (pe(t, r) && I(s, "get", t), I(s, "get", r));
  const { has: l } = Xe(s), a = o ? Vt : n ? Tt : Dt;
  if (l.call(s, t))
    return a(e.get(t));
  if (l.call(s, r))
    return a(e.get(r));
  e !== s && e.get(t);
}
function ke(e, t = !1) {
  const n = this.__v_raw, o = _(n), s = _(e);
  return t || (pe(e, s) && I(o, "has", e), I(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Le(e, t = !1) {
  return e = e.__v_raw, !t && I(_(e), "iterate", te), Reflect.get(e, "size", e);
}
function Zt(e) {
  e = _(e);
  const t = _(this);
  return Xe(t).has.call(t, e) || (t.add(e), Y(t, "add", e, e)), this;
}
function en(e, t) {
  t = _(t);
  const n = _(this), { has: o, get: s } = Xe(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && wn(n, o, e) : (e = _(e), r = o.call(n, e));
  const l = s.call(n, e);
  return n.set(e, t), r ? pe(t, l) && Y(n, "set", e, t, l) : Y(n, "add", e, t), this;
}
function tn(e) {
  const t = _(this), { has: n, get: o } = Xe(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && wn(t, n, e) : (e = _(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, l = t.delete(e);
  return s && Y(t, "delete", e, void 0, r), l;
}
function nn() {
  const e = _(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ue(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Y(e, "clear", void 0, void 0, n), o;
}
function Ae(e, t) {
  return function(o, s) {
    const r = this, l = r.__v_raw, a = _(l), c = t ? Vt : e ? Tt : Dt;
    return !e && I(a, "iterate", te), l.forEach((f, w) => o.call(s, c(f), c(w), r));
  };
}
function je(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = _(s), l = ue(r), a = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, f = s[e](...o), w = n ? Vt : t ? Tt : Dt;
    return !t && I(
      r,
      "iterate",
      c ? _t : te
    ), {
      // iterator protocol
      next() {
        const { value: h, done: C } = f.next();
        return C ? { value: h, done: C } : {
          value: a ? [w(h[0]), w(h[1])] : w(h),
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
function U(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ce(
        `${pn(e)} operation ${n}failed: target is readonly.`,
        _(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function xs() {
  const e = {
    get(r) {
      return Pe(this, r);
    },
    get size() {
      return Le(this);
    },
    has: ke,
    add: Zt,
    set: en,
    delete: tn,
    clear: nn,
    forEach: Ae(!1, !1)
  }, t = {
    get(r) {
      return Pe(this, r, !1, !0);
    },
    get size() {
      return Le(this);
    },
    has: ke,
    add: Zt,
    set: en,
    delete: tn,
    clear: nn,
    forEach: Ae(!1, !0)
  }, n = {
    get(r) {
      return Pe(this, r, !0);
    },
    get size() {
      return Le(this, !0);
    },
    has(r) {
      return ke.call(this, r, !0);
    },
    add: U("add"),
    set: U("set"),
    delete: U("delete"),
    clear: U("clear"),
    forEach: Ae(!0, !1)
  }, o = {
    get(r) {
      return Pe(this, r, !0, !0);
    },
    get size() {
      return Le(this, !0);
    },
    has(r) {
      return ke.call(this, r, !0);
    },
    add: U("add"),
    set: U("set"),
    delete: U("delete"),
    clear: U("clear"),
    forEach: Ae(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = je(
      r,
      !1,
      !1
    ), n[r] = je(
      r,
      !0,
      !1
    ), t[r] = je(
      r,
      !1,
      !0
    ), o[r] = je(
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
  $s,
  Ps,
  ks,
  Ls
] = /* @__PURE__ */ xs();
function Rt(e, t) {
  const n = t ? e ? Ls : ks : e ? Ps : $s;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    b(n, s) && s in o ? n : o,
    s,
    r
  );
}
const As = {
  get: /* @__PURE__ */ Rt(!1, !1)
}, js = {
  get: /* @__PURE__ */ Rt(!0, !1)
}, Hs = {
  get: /* @__PURE__ */ Rt(!0, !0)
};
function wn(e, t, n) {
  const o = _(n);
  if (o !== n && t.call(e, o)) {
    const s = fn(e);
    Ce(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const yn = /* @__PURE__ */ new WeakMap(), Fs = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ new WeakMap();
function Ks(e) {
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
function Bs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ks(fn(e));
}
function bn(e) {
  return De(e) ? e : Ct(
    e,
    !1,
    Ts,
    As,
    yn
  );
}
function Nn(e) {
  return Ct(
    e,
    !0,
    Ms,
    js,
    Sn
  );
}
function He(e) {
  return Ct(
    e,
    !0,
    Is,
    Hs,
    On
  );
}
function Ct(e, t, n, o, s) {
  if (!L(e))
    return process.env.NODE_ENV !== "production" && Ce(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const l = Bs(e);
  if (l === 0)
    return e;
  const a = new Proxy(
    e,
    l === 2 ? o : n
  );
  return s.set(e, a), a;
}
function fe(e) {
  return De(e) ? fe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function De(e) {
  return !!(e && e.__v_isReadonly);
}
function mt(e) {
  return !!(e && e.__v_isShallow);
}
function vt(e) {
  return fe(e) || De(e);
}
function _(e) {
  const t = e && e.__v_raw;
  return t ? _(t) : e;
}
function zs(e) {
  return Object.isExtensible(e) && hs(e, "__v_skip", !0), e;
}
const Dt = (e) => L(e) ? bn(e) : e, Tt = (e) => L(e) ? Nn(e) : e;
function A(e) {
  return !!(e && e.__v_isRef === !0);
}
function Us(e) {
  return A(e) ? e.value : e;
}
const Ws = {
  get: (e, t, n) => Us(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return A(s) && !A(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Gs(e) {
  return fe(e) ? e : new Proxy(e, Ws);
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ne = [];
function qs(e) {
  ne.push(e);
}
function Js() {
  ne.pop();
}
function y(e, ...t) {
  Ye();
  const n = ne.length ? ne[ne.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Ys();
  if (o)
    se(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Hn(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Qs(s)), console.warn(...r);
  }
  Qe();
}
function Ys() {
  let e = ne[ne.length - 1];
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
function Qs(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Xs(n));
  }), t;
}
function Xs({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Hn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Zs(e.props), r] : [s + r];
}
function Zs(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Vn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Vn(e, t, n) {
  return k(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : A(t) ? (t = Vn(e, _(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = _(t), n ? t : [`${e}=`, t]);
}
const Mt = {
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
function se(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    It(s, t, n);
  }
}
function Ne(e, t, n, o) {
  if (R(e)) {
    const r = se(e, t, n, o);
    return r && us(r) && r.catch((l) => {
      It(l, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(Ne(e[r], t, n, o));
  return s;
}
function It(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const l = t.proxy, a = process.env.NODE_ENV !== "production" ? Mt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const f = r.ec;
      if (f) {
        for (let w = 0; w < f.length; w++)
          if (f[w](e, l, a) === !1)
            return;
      }
      r = r.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      se(
        c,
        null,
        10,
        [e, l, a]
      );
      return;
    }
  }
  eo(e, n, s, o);
}
function eo(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Mt[t];
    if (n && qs(n), y(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Js(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let ze = !1, gt = !1;
const P = [];
let J = 0;
const de = [];
let B = null, G = 0;
const Rn = /* @__PURE__ */ Promise.resolve();
let xt = null;
const to = 100;
function no(e) {
  const t = xt || Rn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function so(e) {
  let t = J + 1, n = P.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = P[o], r = Te(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function $t(e) {
  (!P.length || !P.includes(
    e,
    ze && e.allowRecurse ? J + 1 : J
  )) && (e.id == null ? P.push(e) : P.splice(so(e.id), 0, e), Cn());
}
function Cn() {
  !ze && !gt && (gt = !0, xt = Rn.then(Tn));
}
function Dn(e) {
  g(e) ? de.push(...e) : (!B || !B.includes(
    e,
    e.allowRecurse ? G + 1 : G
  )) && de.push(e), Cn();
}
function oo(e) {
  if (de.length) {
    const t = [...new Set(de)].sort(
      (n, o) => Te(n) - Te(o)
    );
    if (de.length = 0, B) {
      B.push(...t);
      return;
    }
    for (B = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), G = 0; G < B.length; G++)
      process.env.NODE_ENV !== "production" && Mn(e, B[G]) || B[G]();
    B = null, G = 0;
  }
}
const Te = (e) => e.id == null ? 1 / 0 : e.id, ro = (e, t) => {
  const n = Te(e) - Te(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Tn(e) {
  gt = !1, ze = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), P.sort(ro);
  const t = process.env.NODE_ENV !== "production" ? (n) => Mn(e, n) : ie;
  try {
    for (J = 0; J < P.length; J++) {
      const n = P[J];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        se(n, null, 14);
      }
    }
  } finally {
    J = 0, P.length = 0, oo(e), ze = !1, xt = null, (P.length || de.length) && Tn(e);
  }
}
function Mn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > to) {
      const o = t.ownerInstance, s = o && jn(o.type);
      return It(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Se = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (hn().__VUE_HMR_RUNTIME__ = {
  createRecord: ut(lo),
  rerender: ut(io),
  reload: ut(ao)
});
const Ue = /* @__PURE__ */ new Map();
function lo(e, t) {
  return Ue.has(e) ? !1 : (Ue.set(e, {
    initialDef: Ve(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ve(e) {
  return Fn(e) ? e.__vccOpts : e;
}
function io(e, t) {
  const n = Ue.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Ve(o.type).render = t), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function ao(e, t) {
  const n = Ue.get(e);
  if (!n)
    return;
  t = Ve(t), sn(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = Ve(s.type);
    Se.has(r) || (r !== n.initialDef && sn(r, t), Se.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Se.add(r), s.ceReload(t.styles), Se.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, $t(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Dn(() => {
    for (const s of o)
      Se.delete(
        Ve(s.type)
      );
  });
}
function sn(e, t) {
  j(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ut(e) {
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
let le, Fe = [];
function In(e, t) {
  var n, o;
  le = e, le ? (le.enabled = !0, Fe.forEach(({ event: s, args: r }) => le.emit(s, ...r)), Fe = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    In(r, t);
  }), setTimeout(() => {
    le || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Fe = []);
  }, 3e3)) : Fe = [];
}
let z = null, co = null;
const uo = Symbol.for("v-ndc"), fo = (e) => e.__isSuspense;
function po(e, t) {
  t && t.pendingBranch ? g(e) ? t.effects.push(...e) : t.effects.push(e) : Dn(e);
}
const ho = Symbol.for("v-scx"), _o = () => {
  {
    const e = Co(ho);
    return e || process.env.NODE_ENV !== "production" && y(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Ke = {};
function mo(e, t, {
  immediate: n,
  deep: o,
  flush: s,
  once: r,
  onTrack: l,
  onTrigger: a
} = W) {
  if (t && r) {
    const p = t;
    t = (...me) => {
      p(...me), _e();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && y(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && y(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && y(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && y(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (p) => {
    y(
      "Invalid watch source: ",
      p,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = he, w = (p) => o === !0 ? p : (
    // for deep: false, only traverse root-level properties
    ae(p, o === !1 ? 1 : void 0)
  );
  let h, C = !1, x = !1;
  if (A(e) ? (h = () => e.value, C = mt(e)) : fe(e) ? (h = () => w(e), C = !0) : g(e) ? (x = !0, C = e.some((p) => fe(p) || mt(p)), h = () => e.map((p) => {
    if (A(p))
      return p.value;
    if (fe(p))
      return w(p);
    if (R(p))
      return se(p, f, 2);
    process.env.NODE_ENV !== "production" && c(p);
  })) : R(e) ? t ? h = () => se(e, f, 2) : h = () => (E && E(), Ne(
    e,
    f,
    3,
    [Q]
  )) : (h = ie, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const p = h;
    h = () => ae(p());
  }
  let E, Q = (p) => {
    E = S.onStop = () => {
      se(p, f, 4), E = S.onStop = void 0;
    };
  }, H;
  if (kt)
    if (Q = ie, t ? n && Ne(t, f, 3, [
      h(),
      x ? [] : void 0,
      Q
    ]) : h(), s === "sync") {
      const p = _o();
      H = p.__watcherHandles || (p.__watcherHandles = []);
    } else
      return ie;
  let D = x ? new Array(e.length).fill(Ke) : Ke;
  const $ = () => {
    if (!(!S.active || !S.dirty))
      if (t) {
        const p = S.run();
        (o || C || (x ? p.some((me, Ze) => pe(me, D[Ze])) : pe(p, D))) && (E && E(), Ne(t, f, 3, [
          p,
          // pass undefined as the old value when it's changed for the first time
          D === Ke ? void 0 : x && D[0] === Ke ? [] : D,
          Q
        ]), D = p);
      } else
        S.run();
  };
  $.allowRecurse = !!t;
  let F;
  s === "sync" ? F = $ : s === "post" ? F = () => un($, f && f.suspense) : ($.pre = !0, f && ($.id = f.uid), F = () => $t($));
  const S = new ys(h, ie, F), _e = () => {
    S.stop();
  };
  return process.env.NODE_ENV !== "production" && (S.onTrack = l, S.onTrigger = a), t ? n ? $() : D = S.run() : s === "post" ? un(
    S.run.bind(S),
    f && f.suspense
  ) : S.run(), H && H.push(_e), _e;
}
function vo(e, t, n) {
  const o = this.proxy, s = k(e) ? e.includes(".") ? go(o, e) : () => o[e] : e.bind(o, o);
  let r;
  R(t) ? r = t : (r = t.handler, n = t);
  const l = An(this), a = mo(s, r.bind(o), n);
  return l(), a;
}
function go(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function ae(e, t, n = 0, o) {
  if (!L(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (o = o || /* @__PURE__ */ new Set(), o.has(e))
    return e;
  if (o.add(e), A(e))
    ae(e.value, t, n, o);
  else if (g(e))
    for (let s = 0; s < e.length; s++)
      ae(e[s], t, n, o);
  else if (cs(e) || ue(e))
    e.forEach((s) => {
      ae(s, t, n, o);
    });
  else if (ds(e))
    for (const s in e)
      ae(e[s], t, n, o);
  return e;
}
function Eo(e, t, n = he, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      Ye();
      const a = An(n), c = Ne(t, n, e, l);
      return a(), Qe(), c;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = ps(Mt[e].replace(/ hook$/, ""));
    y(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const wo = (e) => (t, n = he) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!kt || e === "sp") && Eo(e, (...o) => t(...o), n)
), yo = wo("bum"), Et = (e) => e ? jo(e) ? Ho(e) || e.proxy : Et(e.parent) : null, Re = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ j(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? He(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? He(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? He(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? He(e.refs) : e.refs,
    $parent: (e) => Et(e.parent),
    $root: (e) => Et(e.root),
    $emit: (e) => e.emit,
    $options: (e) => bo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, $t(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = no.bind(e.proxy)),
    $watch: (e) => vo.bind(e)
  })
), So = (e) => e === "_" || e === "$", ft = (e, t) => e !== W && !e.__isScriptSetup && b(e, t), Oo = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: l, type: a, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const x = l[t];
      if (x !== void 0)
        switch (x) {
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
        if (ft(o, t))
          return l[t] = 1, o[t];
        if (s !== W && b(s, t))
          return l[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && b(f, t)
        )
          return l[t] = 3, r[t];
        if (n !== W && b(n, t))
          return l[t] = 4, n[t];
        l[t] = 0;
      }
    }
    const w = Re[t];
    let h, C;
    if (w)
      return t === "$attrs" ? (I(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && I(e, "get", t), w(e);
    if (
      // css module (injected by vue-loader)
      (h = a.__cssModules) && (h = h[t])
    )
      return h;
    if (n !== W && b(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      C = c.config.globalProperties, b(C, t)
    )
      return C[t];
    process.env.NODE_ENV !== "production" && z && (!k(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== W && So(t[0]) && b(s, t) ? y(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === z && y(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return ft(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && b(s, t) ? (y(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== W && b(o, t) ? (o[t] = n, !0) : b(e.props, t) ? (process.env.NODE_ENV !== "production" && y(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && y(
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
    return !!n[l] || e !== W && b(e, l) || ft(t, l) || (a = r[0]) && b(a, l) || b(o, l) || b(Re, l) || b(s.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : b(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Oo.ownKeys = (e) => (y(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function on(e) {
  return g(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function bo(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: l }
  } = e.appContext, a = r.get(t);
  let c;
  return a ? c = a : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(
    (f) => We(c, f, l, !0)
  ), We(c, t, l)), L(t) && r.set(t, c), c;
}
function We(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && We(e, r, n, !0), s && s.forEach(
    (l) => We(e, l, n, !0)
  );
  for (const l in t)
    if (o && l === "expose")
      process.env.NODE_ENV !== "production" && y(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = No[l] || n && n[l];
      e[l] = a ? a(e[l], t[l]) : t[l];
    }
  return e;
}
const No = {
  data: rn,
  props: an,
  emits: an,
  // objects
  methods: Oe,
  computed: Oe,
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
  components: Oe,
  directives: Oe,
  // watch
  watch: Ro,
  // provide / inject
  provide: rn,
  inject: Vo
};
function rn(e, t) {
  return t ? e ? function() {
    return j(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Vo(e, t) {
  return Oe(ln(e), ln(t));
}
function ln(e) {
  if (g(e)) {
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
function Oe(e, t) {
  return e ? j(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function an(e, t) {
  return e ? g(e) && g(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : j(
    /* @__PURE__ */ Object.create(null),
    on(e),
    on(t ?? {})
  ) : t;
}
function Ro(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = j(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = T(e[o], t[o]);
  return n;
}
let cn = null;
function Co(e, t, n = !1) {
  const o = he || z;
  if (o || cn) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : cn._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && R(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && y(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && y("inject() can only be used inside setup() or functional components.");
}
const un = po, Do = (e) => e.__isTeleport, xn = Symbol.for("v-fgt"), To = Symbol.for("v-txt"), Mo = Symbol.for("v-cmt");
let ce = null;
function Io(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const xo = (...e) => kn(
  ...e
), $n = "__vInternal", Pn = ({ key: e }) => e ?? null, Be = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? k(e) || A(e) || R(e) ? { i: z, r: e, k: t, f: !!n } : e : null);
function $o(e, t = null, n = null, o = 0, s = null, r = e === xn ? 0 : 1, l = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Pn(t),
    ref: t && Be(t),
    scopeId: co,
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
    ctx: z
  };
  return a ? (Pt(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= k(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && y("VNode created with invalid key (NaN). VNode type:", c.type), // avoid a block node from tracking itself
  !l && // has current parent block
  ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ce.push(c), c;
}
const Po = process.env.NODE_ENV !== "production" ? xo : kn;
function kn(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === uo) && (process.env.NODE_ENV !== "production" && !e && y(`Invalid vnode type when creating vnode: ${e}.`), e = Mo), Io(e)) {
    const a = Ge(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Pt(a, n), !r && ce && (a.shapeFlag & 6 ? ce[ce.indexOf(e)] = a : ce.push(a)), a.patchFlag |= -2, a;
  }
  if (Fn(e) && (e = e.__vccOpts), t) {
    t = ko(t);
    let { class: a, style: c } = t;
    a && !k(a) && (t.class = Ot(a)), L(c) && (vt(c) && !g(c) && (c = j({}, c)), t.style = St(c));
  }
  const l = k(e) ? 1 : fo(e) ? 128 : Do(e) ? 64 : L(e) ? 4 : R(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && l & 4 && vt(e) && (e = _(e), y(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), $o(
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
function ko(e) {
  return e ? vt(e) || $n in e ? j({}, e) : e : null;
}
function Ge(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: l } = e, a = t ? Ao(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Pn(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? g(s) ? s.concat(Be(t)) : [s, Be(t)] : Be(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && g(l) ? l.map(Ln) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== xn ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Ge(e.ssContent),
    ssFallback: e.ssFallback && Ge(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Ln(e) {
  const t = Ge(e);
  return g(e.children) && (t.children = e.children.map(Ln)), t;
}
function Lo(e = " ", t = 0) {
  return Po(To, null, e, t);
}
function Pt(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (g(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Pt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !($n in t) ? t._ctx = z : s === 3 && z && (z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    R(t) ? (t = { default: t, _ctx: z }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Lo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ao(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = Ot([t.class, o.class]));
      else if (s === "style")
        t.style = St([t.style, o.style]);
      else if (is(s)) {
        const r = t[s], l = o[s];
        l && r !== l && !(g(r) && r.includes(l)) && (t[s] = r ? [].concat(r, l) : l);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
let he = null, wt;
{
  const e = hn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((l) => l(r)) : s[0](r);
    };
  };
  wt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => he = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => kt = n
  );
}
const An = (e) => {
  const t = he;
  return wt(e), e.scope.on(), () => {
    e.scope.off(), wt(t);
  };
};
function jo(e) {
  return e.vnode.shapeFlag & 4;
}
let kt = !1;
function Ho(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Gs(zs(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Re)
          return Re[n](e);
      },
      has(t, n) {
        return n in t || n in Re;
      }
    }));
}
const Fo = /(?:^|[-_])(\w)/g, Ko = (e) => e.replace(Fo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function jn(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Hn(e, t, n = !1) {
  let o = jn(t);
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
  return o ? Ko(o) : n ? "App" : "Anonymous";
}
function Fn(e) {
  return R(e) && "__vccOpts" in e;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const Bo = (...e) => {
  v.debugEnabled && console.info("[LktFieldSelect] ", ...e);
}, zo = ["id", "multiple"], Uo = {
  key: 2,
  class: "lkt-field__select"
}, Wo = ["innerHTML"], Go = ["title"], qo = ["innerHTML"], Jo = {
  key: 2,
  class: "lkt-field__select-dropdown"
}, Yo = { class: "lkt-field__select-search-container" }, Qo = {
  key: 1,
  class: "lkt-field__select-options"
}, Xo = ["onClick"], Zo = {
  key: 0,
  class: "lkt-field__select-option"
}, er = {
  key: 3,
  class: "lkt-field__state"
}, tr = ["title"], nr = {
  key: 3,
  class: "lkt-field-select__read"
}, sr = ["innerHTML", "title"], or = {
  key: 3,
  class: "lkt-field__state"
}, rr = ["title"], lr = {
  key: 4,
  class: "lkt-field-select__read-multiple"
}, ir = { key: 0 }, ar = {
  key: 1,
  class: "lkt-field-select-empty"
}, cr = {
  key: 2,
  class: "lkt-field-select-empty"
}, ur = ["title"], fr = ["innerHTML"], dr = {
  key: 4,
  class: "lkt-field__state"
}, pr = ["title"], hr = ["innerHTML"], _r = /* @__PURE__ */ Qn({
  __name: "LktFieldSelect",
  props: {
    modelValue: { default: "" },
    class: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: Gt(16) },
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
    canTag: { type: Boolean, default: !1 },
    autoloadResource: { type: Boolean, default: !1 },
    noOptionsMessage: { default: rs() },
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
    const o = n, s = e, r = Xn(), l = M(null), a = M(null), c = M(null), f = M(!s.readMode), w = Gt(16), h = M(new qt(s.options)), C = M(!1), x = M(s.modelValue), E = M(s.modelValue), Q = M(!1), H = M(!1), D = M(!1), $ = M(h.value.all()), F = M(h.value.all()), S = M("");
    s.closeOnSelect === null ? C.value = s.multiple === !0 : C.value = s.closeOnSelect;
    const _e = O(() => s.resource !== ""), p = O(() => typeof s.valid == "function" ? s.valid() : s.valid), me = O(() => E.value !== x.value), Ze = O(() => {
      const i = ["lkt-field", "lkt-field-select"];
      return s.palette && i.push(`lkt-field--${s.palette}`), me.value && i.push("is-changed"), s.class && i.push(s.class), s.multiple && i.push("is-multiple"), s.disabled && i.push("is-disabled"), s.upperDropdown && !s.choiceDropdown && i.push("lkt-field-select-upper-dropdown"), s.choiceDropdown && i.push("lkt-field-select-choice-dropdown"), s.mandatory && f.value && i.push("is-mandatory-field"), D.value && i.push("has-focus"), i.push(p.value ? "is-valid" : "is-error"), i.push(s.modelValue ? "is-filled" : "is-empty"), i.join(" ");
    }), Kn = O(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplay}`), i.join(" ");
    }), Bn = O(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplayEdition}`), i.join(" ");
    }), Me = O(() => {
      let i = {};
      return F.value.forEach((N) => {
        N.value == E.value && (i = N);
      }), i;
    }), et = O(() => {
      let i = "";
      return F.value.forEach((N) => {
        N.value == E.value && (i = N.label);
      }), i;
    }), Lt = O(() => {
      let i = [];
      return s.multiple && F.value.forEach((N) => {
        E.value.forEach((Ee) => {
          Ee == N.value && i.push(N);
        });
      }), i;
    }), tt = O(() => Array.isArray(E.value) ? E.value.length : 0), At = O(() => s.allowReadModeSwitch), ve = () => {
      F.value = h.value.all(), $.value = h.value.filter(S.value), H.value = !1;
    }, jt = () => {
      S.value = "", ve();
    }, nt = async () => {
      if (f.value)
        if (H.value = !1, _e.value) {
          H.value = !0, s.searchStringResourceParam && (s.resourceData[s.searchStringResourceParam] = S.value);
          const i = await ns(s.resource, s.resourceData);
          h.value.receiveOptions(i.data), ve(), o("results", i.data);
        } else
          ve();
    }, zn = () => {
      E.value = x.value;
    }, Un = () => s.modelValue, ge = (i) => {
      jt(), st(i), D.value = !D.value, D.value && it(() => {
        nt(), l.value.focus(), it(() => {
          l.value.focus();
        });
      });
    };
    we(() => s.readMode, (i) => f.value = !i), we(() => s.modelValue, (i) => {
      E.value = i;
    }), we(E, (i) => {
      o("update:modelValue", i), o("selected-option", h.value.findByValue(i)), Q.value = !0, it(() => Q.value = !1);
    }), we(S, ve), we(() => s.options, (i) => {
      h.value = new qt(i);
    });
    const Ht = (i) => {
      if (s.multiple) {
        let N = E.value.findIndex((Ee) => Ee == i.value);
        return typeof N > "u" && (N = -1), N;
      }
      return -1;
    }, Wn = (i) => {
      if (s.multiple) {
        let N = Ht(i);
        N === -1 ? E.value.push(i.value) : E.value.splice(N, 1);
      } else
        E.value = i.value, D.value = !1;
    }, Gn = (i) => s.multiple ? Ht(i) !== -1 : i.value == E.value, st = (i) => {
      if (!c.value.contains(i.target)) {
        jt(), D.value = !1;
        return;
      }
    }, ot = (i) => {
      f.value = !f.value, f.value && focus();
    };
    window.addEventListener("click", st), ve(), yo(() => {
      window.removeEventListener("click", st);
    }), t({
      reset: zn,
      value: Un
    }), s.autoloadResource && s.resource !== "" && (Bo("Auto loading Resource", s.resource, s.resourceData, s.autoloadResource), nt());
    const oe = O(() => s.useResourceSlot ? s.useResourceSlot : s.resource), Ft = O(() => v.NO_OPTIONS_MESSAGE), qn = O(() => s.emptyValueText !== "" ? s.emptyValueText : v.emptyValueText), Kt = O(() => s.emptyValueSlot !== "" && typeof v.customResourceValueSlots[s.emptyValueSlot] < "u" || v.defaultEmptyValueSlot && typeof v.customResourceValueSlots[v.defaultEmptyValueSlot] < "u"), Jn = O(() => v.customResourceValueSlots[s.emptyValueSlot] ?? v.customResourceValueSlots[v.defaultEmptyValueSlot]), rt = O(() => oe.value !== "" && typeof v.customResourceOptionSlots[oe.value] < "u"), lt = O(() => v.customResourceOptionSlots[oe.value]), Bt = O(() => oe.value !== "" && typeof v.customResourceValueSlots[oe.value] < "u"), zt = O(() => v.customResourceValueSlots[oe.value]);
    return (i, N) => {
      const Ee = Ut("lkt-field-text"), Yn = Ut("lkt-loader");
      return u(), d("div", {
        class: Ie(Ze.value),
        "data-show-ui": !1,
        ref: (m) => c.value = m
      }, [
        K(r).prefix ? X(i.$slots, "prefix", { key: 0 }) : V("", !0),
        f.value ? (u(), d("select", {
          key: 1,
          ref: (m) => a.value = m,
          id: K(w),
          onFocus: xe(ge, ["stop", "prevent"]),
          onBlur: xe(ge, ["stop", "prevent"]),
          multiple: i.multiple,
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, zo)) : V("", !0),
        f.value ? (u(), d("div", Uo, [
          i.multiple ? (u(), d("div", {
            key: 1,
            class: "lkt-field__select-value-multiple",
            onClick: ge
          }, [
            at("ul", {
              class: Ie(Bn.value)
            }, [
              (u(!0), d(ye, null, ct(Lt.value, (m) => (u(), d("li", {
                title: m.label
              }, [
                K(r).option ? X(i.$slots, "option", {
                  key: 0,
                  option: m,
                  data: i.slotData
                }) : rt.value ? (u(), Z(re(lt.value), {
                  key: 1,
                  option: m
                }, null, 8, ["option"])) : (u(), d("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: m.label
                }, null, 8, qo))
              ], 8, Go))), 256))
            ], 2)
          ])) : (u(), d("div", {
            key: 0,
            class: "lkt-field__select-value",
            onClick: ge
          }, [
            K(r).option ? X(i.$slots, "option", {
              key: 0,
              option: Me.value,
              data: i.slotData
            }) : V("", !0),
            rt.value ? (u(), Z(re(lt.value), {
              key: 1,
              option: Me.value
            }, null, 8, ["option"])) : (u(), d("div", {
              key: 2,
              class: "lkt-field-select__read-value",
              innerHTML: et.value
            }, null, 8, Wo))
          ])),
          D.value ? (u(), d("div", Jo, [
            Zn(at("div", Yo, [
              es(Ee, {
                ref: (m) => l.value = m,
                modelValue: S.value,
                "onUpdate:modelValue": N[0] || (N[0] = (m) => S.value = m),
                placeholder: i.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search",
                onKeyup: nt
              }, null, 8, ["modelValue", "placeholder"])
            ], 512), [
              [ts, i.searchable]
            ]),
            H.value ? (u(), Z(Yn, { key: 0 })) : V("", !0),
            !i.readonly && !H.value ? (u(), d("ul", Qo, [
              (u(!0), d(ye, null, ct($.value, (m) => (u(), d("li", {
                class: Ie(["lkt-field__select-option", { "is-active": i.multiple ? Gn(m) : m.value == E.value }]),
                onClick: xe((mr) => Wn(m), ["prevent", "stop"])
              }, [
                K(r).option ? X(i.$slots, "option", {
                  key: 0,
                  option: m,
                  data: i.slotData
                }) : V("", !0),
                rt.value ? (u(), Z(re(lt.value), {
                  key: 1,
                  option: m
                }, null, 8, ["option"])) : (u(), d(ye, { key: 2 }, [
                  Wt($e(m.label), 1)
                ], 64))
              ], 10, Xo))), 256)),
              $.value.length === 0 && (K(r)["no-results"] || Ft.value) ? (u(), d("li", Zo, [
                K(r)["no-results"] ? X(i.$slots, "no-results", { key: 0 }) : (u(), d(ye, { key: 1 }, [
                  Wt($e(Ft.value), 1)
                ], 64))
              ])) : V("", !0)
            ])) : V("", !0)
          ])) : V("", !0),
          At.value ? (u(), d("div", er, [
            i.allowReadModeSwitch ? (u(), d("i", {
              key: 0,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: ot
            }, null, 8, tr)) : V("", !0)
          ])) : V("", !0)
        ])) : V("", !0),
        !f.value && !i.multiple ? (u(), d("div", nr, [
          K(r).value ? X(i.$slots, "value", {
            key: 0,
            option: Me.value,
            data: i.slotData
          }) : Bt.value ? (u(), Z(re(zt.value), {
            key: 1,
            option: Me.value
          }, null, 8, ["option"])) : (u(), d("div", {
            key: 2,
            class: "lkt-field-select__read-value",
            innerHTML: et.value,
            title: et.value
          }, null, 8, sr)),
          At.value ? (u(), d("div", or, [
            i.allowReadModeSwitch ? (u(), d("i", {
              key: 0,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: ot
            }, null, 8, rr)) : V("", !0)
          ])) : V("", !0)
        ])) : V("", !0),
        !f.value && i.multiple ? (u(), d("div", lr, [
          i.multipleDisplay === "count" ? (u(), d("div", ir, $e(tt.value), 1)) : tt.value === 0 && Kt.value ? (u(), d("div", ar, [
            (u(), Z(re(Jn.value)))
          ])) : tt.value === 0 && !Kt.value ? (u(), d("div", cr, $e(qn.value), 1)) : (u(), d("ul", {
            key: 3,
            class: Ie(Kn.value)
          }, [
            (u(!0), d(ye, null, ct(Lt.value, (m) => (u(), d("li", {
              title: m.label
            }, [
              K(r).value ? X(i.$slots, "value", {
                key: 0,
                option: m,
                data: i.slotData
              }) : Bt.value ? (u(), Z(re(zt.value), {
                key: 1,
                option: m,
                data: i.slotData
              }, null, 8, ["option", "data"])) : (u(), d("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: m.label
              }, null, 8, fr))
            ], 8, ur))), 256))
          ], 2)),
          i.allowReadModeSwitch ? (u(), d("div", dr, [
            at("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: ot
            }, null, 8, pr)
          ])) : V("", !0)
        ])) : V("", !0),
        i.label ? (u(), d("label", {
          key: 5,
          innerHTML: i.label,
          onClick: xe(ge, ["stop", "prevent"])
        }, null, 8, hr)) : V("", !0)
      ], 2);
    };
  }
}), Rr = {
  install: (e) => {
    e.component("lkt-field-select") === void 0 && e.component("lkt-field-select", _r), e.component("lkt-loader") === void 0 && e.use(ss), e.component("lkt-field-text") === void 0 && e.use(os);
  }
};
export {
  Rr as default,
  Vr as setDefaultSelectEmptyValueSlot,
  Sr as setNoOptionsMessage,
  br as setResourceOptionSlot,
  Nr as setResourceValueSlot,
  Or as setSelectEmptyValueMessage
};
