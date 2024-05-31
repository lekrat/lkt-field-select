import { defineComponent as Xn, useSlots as Zn, ref as M, computed as y, watch as we, nextTick as at, resolveComponent as qt, openBlock as u, createElementBlock as d, normalizeClass as $e, unref as K, renderSlot as Z, createCommentVNode as V, withModifiers as Pe, createBlock as U, resolveDynamicComponent as ee, createElementVNode as ct, Fragment as ye, renderList as ut, withDirectives as es, createVNode as ts, vShow as ns, createTextVNode as Jt, toDisplayString as Se } from "vue";
import { generateRandomString as Yt } from "lkt-string-tools";
import { httpCall as ss } from "lkt-http-client";
import os from "lkt-loader";
import rs from "lkt-field-text";
const J = class J {
};
J.debugEnabled = !1, J.NO_OPTIONS_MESSAGE = "", J.emptyValueText = "", J.defaultEmptyValueSlot = "", J.customResourceOptionSlots = {}, J.customResourceValueSlots = {};
let g = J;
const ls = () => g.NO_OPTIONS_MESSAGE, Nr = (e) => (g.NO_OPTIONS_MESSAGE = e, !0), Vr = (e) => (g.emptyValueText = e, !0), Rr = (e, t) => (g.customResourceOptionSlots[e] = t, !0), Cr = (e, t) => (g.customResourceValueSlots[e] = t, !0), Dr = (e, t) => {
  g.defaultEmptyValueSlot = e, t && (g.customResourceValueSlots[e] = t);
};
class Qt {
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
function is(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const G = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ie = () => {
}, as = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), H = Object.assign, cs = Object.prototype.hasOwnProperty, N = (e, t) => cs.call(e, t), E = Array.isArray, ue = (e) => Ye(e) === "[object Map]", us = (e) => Ye(e) === "[object Set]", R = (e) => typeof e == "function", k = (e) => typeof e == "string", Je = (e) => typeof e == "symbol", L = (e) => e !== null && typeof e == "object", fs = (e) => (L(e) || R(e)) && R(e.then) && R(e.catch), ds = Object.prototype.toString, Ye = (e) => ds.call(e), hn = (e) => Ye(e).slice(8, -1), ps = (e) => Ye(e) === "[object Object]", St = (e) => k(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, _n = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, mn = _n((e) => e.charAt(0).toUpperCase() + e.slice(1)), hs = _n((e) => e ? `on${mn(e)}` : ""), pe = (e, t) => !Object.is(e, t), _s = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Xt;
const vn = () => Xt || (Xt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ot(e) {
  if (E(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = k(o) ? Es(o) : Ot(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (k(e) || L(e))
    return e;
}
const ms = /;(?![^(]*\))/g, vs = /:([^]+)/, gs = /\/\*[^]*?\*\//g;
function Es(e) {
  const t = {};
  return e.replace(gs, "").split(ms).forEach((n) => {
    if (n) {
      const o = n.split(vs);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function bt(e) {
  let t = "";
  if (k(e))
    t = e;
  else if (E(e))
    for (let n = 0; n < e.length; n++) {
      const o = bt(e[n]);
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
function De(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ws;
function ys(e, t = ws) {
  t && t.active && t.effects.push(e);
}
let Ne;
class Ss {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, ys(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Qe();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Os(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Xe();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = te, n = Ne;
    try {
      return te = !0, Ne = this, this._runnings++, Zt(this), this.fn();
    } finally {
      en(this), this._runnings--, Ne = n, te = t;
    }
  }
  stop() {
    var t;
    this.active && (Zt(this), en(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Os(e) {
  return e.value;
}
function Zt(e) {
  e._trackId++, e._depsLength = 0;
}
function en(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      gn(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function gn(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let te = !0, pt = 0;
const En = [];
function Qe() {
  En.push(te), te = !1;
}
function Xe() {
  const e = En.pop();
  te = e === void 0 ? !0 : e;
}
function Nt() {
  pt++;
}
function Vt() {
  for (pt--; !pt && ht.length; )
    ht.shift()();
}
function bs(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && gn(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, H({ effect: e }, n)));
  }
}
const ht = [];
function Ns(e, t, n) {
  var o;
  Nt();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, H({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && ht.push(s.scheduler)));
  }
  Vt();
}
const Vs = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, _t = /* @__PURE__ */ new WeakMap(), ne = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), mt = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function I(e, t, n) {
  if (te && Ne) {
    let o = _t.get(e);
    o || _t.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Vs(() => o.delete(n))), bs(
      Ne,
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
  const l = _t.get(e);
  if (!l)
    return;
  let a = [];
  if (t === "clear")
    a = [...l.values()];
  else if (n === "length" && E(e)) {
    const c = Number(o);
    l.forEach((f, w) => {
      (w === "length" || !Je(w) && w >= c) && a.push(f);
    });
  } else
    switch (n !== void 0 && a.push(l.get(n)), t) {
      case "add":
        E(e) ? St(n) && a.push(l.get("length")) : (a.push(l.get(ne)), ue(e) && a.push(l.get(mt)));
        break;
      case "delete":
        E(e) || (a.push(l.get(ne)), ue(e) && a.push(l.get(mt)));
        break;
      case "set":
        ue(e) && a.push(l.get(ne));
        break;
    }
  Nt();
  for (const c of a)
    c && Ns(
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
  Vt();
}
const Rs = /* @__PURE__ */ is("__proto__,__v_isRef,__isVue"), wn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Je)
), tn = /* @__PURE__ */ Cs();
function Cs() {
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
      Qe(), Nt();
      const o = _(this)[t].apply(this, n);
      return Vt(), Xe(), o;
    };
  }), e;
}
function Ds(e) {
  const t = _(this);
  return I(t, "has", e), t.hasOwnProperty(e);
}
class yn {
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
      return o === (s ? r ? Vn : Nn : r ? Ks : bn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const l = E(t);
    if (!s) {
      if (l && N(tn, n))
        return Reflect.get(tn, n, o);
      if (n === "hasOwnProperty")
        return Ds;
    }
    const a = Reflect.get(t, n, o);
    return (Je(n) ? wn.has(n) : Rs(n)) || (s || I(t, "get", n), r) ? a : A(a) ? l && St(n) ? a : a.value : L(a) ? s ? Cn(a) : Rn(a) : a;
  }
}
class Ts extends yn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const c = Te(r);
      if (!vt(o) && !Te(o) && (r = _(r), o = _(o)), !E(t) && A(r) && !A(o))
        return c ? !1 : (r.value = o, !0);
    }
    const l = E(t) && St(n) ? Number(n) < t.length : N(t, n), a = Reflect.set(t, n, o, s);
    return t === _(s) && (l ? pe(o, r) && Q(t, "set", n, o, r) : Q(t, "add", n, o)), a;
  }
  deleteProperty(t, n) {
    const o = N(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Q(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Je(n) || !wn.has(n)) && I(t, "has", n), o;
  }
  ownKeys(t) {
    return I(
      t,
      "iterate",
      E(t) ? "length" : ne
    ), Reflect.ownKeys(t);
  }
}
class Sn extends yn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && De(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && De(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Ms = /* @__PURE__ */ new Ts(), Is = /* @__PURE__ */ new Sn(), xs = /* @__PURE__ */ new Sn(!0), Rt = (e) => e, Ze = (e) => Reflect.getPrototypeOf(e);
function ke(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = _(e), r = _(t);
  n || (pe(t, r) && I(s, "get", t), I(s, "get", r));
  const { has: l } = Ze(s), a = o ? Rt : n ? Mt : Tt;
  if (l.call(s, t))
    return a(e.get(t));
  if (l.call(s, r))
    return a(e.get(r));
  e !== s && e.get(t);
}
function Le(e, t = !1) {
  const n = this.__v_raw, o = _(n), s = _(e);
  return t || (pe(e, s) && I(o, "has", e), I(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Ae(e, t = !1) {
  return e = e.__v_raw, !t && I(_(e), "iterate", ne), Reflect.get(e, "size", e);
}
function nn(e) {
  e = _(e);
  const t = _(this);
  return Ze(t).has.call(t, e) || (t.add(e), Q(t, "add", e, e)), this;
}
function sn(e, t) {
  t = _(t);
  const n = _(this), { has: o, get: s } = Ze(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && On(n, o, e) : (e = _(e), r = o.call(n, e));
  const l = s.call(n, e);
  return n.set(e, t), r ? pe(t, l) && Q(n, "set", e, t, l) : Q(n, "add", e, t), this;
}
function on(e) {
  const t = _(this), { has: n, get: o } = Ze(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && On(t, n, e) : (e = _(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, l = t.delete(e);
  return s && Q(t, "delete", e, void 0, r), l;
}
function rn() {
  const e = _(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ue(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Q(e, "clear", void 0, void 0, n), o;
}
function je(e, t) {
  return function(o, s) {
    const r = this, l = r.__v_raw, a = _(l), c = t ? Rt : e ? Mt : Tt;
    return !e && I(a, "iterate", ne), l.forEach((f, w) => o.call(s, c(f), c(w), r));
  };
}
function He(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = _(s), l = ue(r), a = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, f = s[e](...o), w = n ? Rt : t ? Mt : Tt;
    return !t && I(
      r,
      "iterate",
      c ? mt : ne
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
function W(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      De(
        `${mn(e)} operation ${n}failed: target is readonly.`,
        _(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $s() {
  const e = {
    get(r) {
      return ke(this, r);
    },
    get size() {
      return Ae(this);
    },
    has: Le,
    add: nn,
    set: sn,
    delete: on,
    clear: rn,
    forEach: je(!1, !1)
  }, t = {
    get(r) {
      return ke(this, r, !1, !0);
    },
    get size() {
      return Ae(this);
    },
    has: Le,
    add: nn,
    set: sn,
    delete: on,
    clear: rn,
    forEach: je(!1, !0)
  }, n = {
    get(r) {
      return ke(this, r, !0);
    },
    get size() {
      return Ae(this, !0);
    },
    has(r) {
      return Le.call(this, r, !0);
    },
    add: W("add"),
    set: W("set"),
    delete: W("delete"),
    clear: W("clear"),
    forEach: je(!0, !1)
  }, o = {
    get(r) {
      return ke(this, r, !0, !0);
    },
    get size() {
      return Ae(this, !0);
    },
    has(r) {
      return Le.call(this, r, !0);
    },
    add: W("add"),
    set: W("set"),
    delete: W("delete"),
    clear: W("clear"),
    forEach: je(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = He(
      r,
      !1,
      !1
    ), n[r] = He(
      r,
      !0,
      !1
    ), t[r] = He(
      r,
      !1,
      !0
    ), o[r] = He(
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
  Ps,
  ks,
  Ls,
  As
] = /* @__PURE__ */ $s();
function Ct(e, t) {
  const n = t ? e ? As : Ls : e ? ks : Ps;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    N(n, s) && s in o ? n : o,
    s,
    r
  );
}
const js = {
  get: /* @__PURE__ */ Ct(!1, !1)
}, Hs = {
  get: /* @__PURE__ */ Ct(!0, !1)
}, Fs = {
  get: /* @__PURE__ */ Ct(!0, !0)
};
function On(e, t, n) {
  const o = _(n);
  if (o !== n && t.call(e, o)) {
    const s = hn(e);
    De(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const bn = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), Nn = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap();
function Bs(e) {
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
function zs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Bs(hn(e));
}
function Rn(e) {
  return Te(e) ? e : Dt(
    e,
    !1,
    Ms,
    js,
    bn
  );
}
function Cn(e) {
  return Dt(
    e,
    !0,
    Is,
    Hs,
    Nn
  );
}
function Fe(e) {
  return Dt(
    e,
    !0,
    xs,
    Fs,
    Vn
  );
}
function Dt(e, t, n, o, s) {
  if (!L(e))
    return process.env.NODE_ENV !== "production" && De(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const l = zs(e);
  if (l === 0)
    return e;
  const a = new Proxy(
    e,
    l === 2 ? o : n
  );
  return s.set(e, a), a;
}
function fe(e) {
  return Te(e) ? fe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Te(e) {
  return !!(e && e.__v_isReadonly);
}
function vt(e) {
  return !!(e && e.__v_isShallow);
}
function gt(e) {
  return fe(e) || Te(e);
}
function _(e) {
  const t = e && e.__v_raw;
  return t ? _(t) : e;
}
function Us(e) {
  return Object.isExtensible(e) && _s(e, "__v_skip", !0), e;
}
const Tt = (e) => L(e) ? Rn(e) : e, Mt = (e) => L(e) ? Cn(e) : e;
function A(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ws(e) {
  return A(e) ? e.value : e;
}
const Gs = {
  get: (e, t, n) => Ws(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return A(s) && !A(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function qs(e) {
  return fe(e) ? e : new Proxy(e, Gs);
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const se = [];
function Js(e) {
  se.push(e);
}
function Ys() {
  se.pop();
}
function S(e, ...t) {
  Qe();
  const n = se.length ? se[se.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Qs();
  if (o)
    oe(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Bn(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Xs(s)), console.warn(...r);
  }
  Xe();
}
function Qs() {
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
function Xs(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Zs(n));
  }), t;
}
function Zs({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Bn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...eo(e.props), r] : [s + r];
}
function eo(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Dn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Dn(e, t, n) {
  return k(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : A(t) ? (t = Dn(e, _(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = _(t), n ? t : [`${e}=`, t]);
}
const It = {
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
    xt(s, t, n);
  }
}
function Ve(e, t, n, o) {
  if (R(e)) {
    const r = oe(e, t, n, o);
    return r && fs(r) && r.catch((l) => {
      xt(l, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(Ve(e[r], t, n, o));
  return s;
}
function xt(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const l = t.proxy, a = process.env.NODE_ENV !== "production" ? It[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
      oe(
        c,
        null,
        10,
        [e, l, a]
      );
      return;
    }
  }
  to(e, n, s, o);
}
function to(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = It[t];
    if (n && Js(n), S(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Ys(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ue = !1, Et = !1;
const P = [];
let Y = 0;
const de = [];
let B = null, q = 0;
const Tn = /* @__PURE__ */ Promise.resolve();
let $t = null;
const no = 100;
function so(e) {
  const t = $t || Tn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function oo(e) {
  let t = Y + 1, n = P.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = P[o], r = Me(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function Pt(e) {
  (!P.length || !P.includes(
    e,
    Ue && e.allowRecurse ? Y + 1 : Y
  )) && (e.id == null ? P.push(e) : P.splice(oo(e.id), 0, e), Mn());
}
function Mn() {
  !Ue && !Et && (Et = !0, $t = Tn.then(xn));
}
function In(e) {
  E(e) ? de.push(...e) : (!B || !B.includes(
    e,
    e.allowRecurse ? q + 1 : q
  )) && de.push(e), Mn();
}
function ro(e) {
  if (de.length) {
    const t = [...new Set(de)].sort(
      (n, o) => Me(n) - Me(o)
    );
    if (de.length = 0, B) {
      B.push(...t);
      return;
    }
    for (B = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), q = 0; q < B.length; q++)
      process.env.NODE_ENV !== "production" && $n(e, B[q]) || B[q]();
    B = null, q = 0;
  }
}
const Me = (e) => e.id == null ? 1 / 0 : e.id, lo = (e, t) => {
  const n = Me(e) - Me(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function xn(e) {
  Et = !1, Ue = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), P.sort(lo);
  const t = process.env.NODE_ENV !== "production" ? (n) => $n(e, n) : ie;
  try {
    for (Y = 0; Y < P.length; Y++) {
      const n = P[Y];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        oe(n, null, 14);
      }
    }
  } finally {
    Y = 0, P.length = 0, ro(e), Ue = !1, $t = null, (P.length || de.length) && xn(e);
  }
}
function $n(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > no) {
      const o = t.ownerInstance, s = o && Kn(o.type);
      return xt(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Oe = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (vn().__VUE_HMR_RUNTIME__ = {
  createRecord: ft(io),
  rerender: ft(ao),
  reload: ft(co)
});
const We = /* @__PURE__ */ new Map();
function io(e, t) {
  return We.has(e) ? !1 : (We.set(e, {
    initialDef: Re(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Re(e) {
  return zn(e) ? e.__vccOpts : e;
}
function ao(e, t) {
  const n = We.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Re(o.type).render = t), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function co(e, t) {
  const n = We.get(e);
  if (!n)
    return;
  t = Re(t), ln(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = Re(s.type);
    Oe.has(r) || (r !== n.initialDef && ln(r, t), Oe.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Oe.add(r), s.ceReload(t.styles), Oe.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, Pt(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  In(() => {
    for (const s of o)
      Oe.delete(
        Re(s.type)
      );
  });
}
function ln(e, t) {
  H(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ft(e) {
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
let le, Ke = [];
function Pn(e, t) {
  var n, o;
  le = e, le ? (le.enabled = !0, Ke.forEach(({ event: s, args: r }) => le.emit(s, ...r)), Ke = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Pn(r, t);
  }), setTimeout(() => {
    le || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ke = []);
  }, 3e3)) : Ke = [];
}
let z = null, uo = null;
const fo = Symbol.for("v-ndc"), po = (e) => e.__isSuspense;
function ho(e, t) {
  t && t.pendingBranch ? E(e) ? t.effects.push(...e) : t.effects.push(e) : In(e);
}
const _o = Symbol.for("v-scx"), mo = () => {
  {
    const e = Do(_o);
    return e || process.env.NODE_ENV !== "production" && S(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Be = {};
function vo(e, t, {
  immediate: n,
  deep: o,
  flush: s,
  once: r,
  onTrack: l,
  onTrigger: a
} = G) {
  if (t && r) {
    const p = t;
    t = (...me) => {
      p(...me), _e();
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
  const c = (p) => {
    S(
      "Invalid watch source: ",
      p,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = he, w = (p) => o === !0 ? p : (
    // for deep: false, only traverse root-level properties
    ae(p, o === !1 ? 1 : void 0)
  );
  let h, C = !1, x = !1;
  if (A(e) ? (h = () => e.value, C = vt(e)) : fe(e) ? (h = () => w(e), C = !0) : E(e) ? (x = !0, C = e.some((p) => fe(p) || vt(p)), h = () => e.map((p) => {
    if (A(p))
      return p.value;
    if (fe(p))
      return w(p);
    if (R(p))
      return oe(p, f, 2);
    process.env.NODE_ENV !== "production" && c(p);
  })) : R(e) ? t ? h = () => oe(e, f, 2) : h = () => (v && v(), Ve(
    e,
    f,
    3,
    [X]
  )) : (h = ie, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const p = h;
    h = () => ae(p());
  }
  let v, X = (p) => {
    v = O.onStop = () => {
      oe(p, f, 4), v = O.onStop = void 0;
    };
  }, F;
  if (Lt)
    if (X = ie, t ? n && Ve(t, f, 3, [
      h(),
      x ? [] : void 0,
      X
    ]) : h(), s === "sync") {
      const p = mo();
      F = p.__watcherHandles || (p.__watcherHandles = []);
    } else
      return ie;
  let D = x ? new Array(e.length).fill(Be) : Be;
  const $ = () => {
    if (!(!O.active || !O.dirty))
      if (t) {
        const p = O.run();
        (o || C || (x ? p.some((me, et) => pe(me, D[et])) : pe(p, D))) && (v && v(), Ve(t, f, 3, [
          p,
          // pass undefined as the old value when it's changed for the first time
          D === Be ? void 0 : x && D[0] === Be ? [] : D,
          X
        ]), D = p);
      } else
        O.run();
  };
  $.allowRecurse = !!t;
  let j;
  s === "sync" ? j = $ : s === "post" ? j = () => pn($, f && f.suspense) : ($.pre = !0, f && ($.id = f.uid), j = () => Pt($));
  const O = new Ss(h, ie, j), _e = () => {
    O.stop();
  };
  return process.env.NODE_ENV !== "production" && (O.onTrack = l, O.onTrigger = a), t ? n ? $() : D = O.run() : s === "post" ? pn(
    O.run.bind(O),
    f && f.suspense
  ) : O.run(), F && F.push(_e), _e;
}
function go(e, t, n) {
  const o = this.proxy, s = k(e) ? e.includes(".") ? Eo(o, e) : () => o[e] : e.bind(o, o);
  let r;
  R(t) ? r = t : (r = t.handler, n = t);
  const l = Fn(this), a = vo(s, r.bind(o), n);
  return l(), a;
}
function Eo(e, t) {
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
  else if (E(e))
    for (let s = 0; s < e.length; s++)
      ae(e[s], t, n, o);
  else if (us(e) || ue(e))
    e.forEach((s) => {
      ae(s, t, n, o);
    });
  else if (ps(e))
    for (const s in e)
      ae(e[s], t, n, o);
  return e;
}
function wo(e, t, n = he, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      Qe();
      const a = Fn(n), c = Ve(t, n, e, l);
      return a(), Xe(), c;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = hs(It[e].replace(/ hook$/, ""));
    S(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const yo = (e) => (t, n = he) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Lt || e === "sp") && wo(e, (...o) => t(...o), n)
), So = yo("bum"), wt = (e) => e ? Ho(e) ? Fo(e) || e.proxy : wt(e.parent) : null, Ce = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ H(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Fe(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Fe(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Fe(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Fe(e.refs) : e.refs,
    $parent: (e) => wt(e.parent),
    $root: (e) => wt(e.root),
    $emit: (e) => e.emit,
    $options: (e) => No(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Pt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = so.bind(e.proxy)),
    $watch: (e) => go.bind(e)
  })
), Oo = (e) => e === "_" || e === "$", dt = (e, t) => e !== G && !e.__isScriptSetup && N(e, t), bo = {
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
        if (dt(o, t))
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
    const w = Ce[t];
    let h, C;
    if (w)
      return t === "$attrs" ? (I(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && I(e, "get", t), w(e);
    if (
      // css module (injected by vue-loader)
      (h = a.__cssModules) && (h = h[t])
    )
      return h;
    if (n !== G && N(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      C = c.config.globalProperties, N(C, t)
    )
      return C[t];
    process.env.NODE_ENV !== "production" && z && (!k(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== G && Oo(t[0]) && N(s, t) ? S(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === z && S(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return dt(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && N(s, t) ? (S(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== G && N(o, t) ? (o[t] = n, !0) : N(e.props, t) ? (process.env.NODE_ENV !== "production" && S(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && S(
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
    return !!n[l] || e !== G && N(e, l) || dt(t, l) || (a = r[0]) && N(a, l) || N(o, l) || N(Ce, l) || N(s.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (bo.ownKeys = (e) => (S(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function an(e) {
  return E(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function No(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: l }
  } = e.appContext, a = r.get(t);
  let c;
  return a ? c = a : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(
    (f) => Ge(c, f, l, !0)
  ), Ge(c, t, l)), L(t) && r.set(t, c), c;
}
function Ge(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && Ge(e, r, n, !0), s && s.forEach(
    (l) => Ge(e, l, n, !0)
  );
  for (const l in t)
    if (o && l === "expose")
      process.env.NODE_ENV !== "production" && S(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Vo[l] || n && n[l];
      e[l] = a ? a(e[l], t[l]) : t[l];
    }
  return e;
}
const Vo = {
  data: cn,
  props: fn,
  emits: fn,
  // objects
  methods: be,
  computed: be,
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
  components: be,
  directives: be,
  // watch
  watch: Co,
  // provide / inject
  provide: cn,
  inject: Ro
};
function cn(e, t) {
  return t ? e ? function() {
    return H(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ro(e, t) {
  return be(un(e), un(t));
}
function un(e) {
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
function be(e, t) {
  return e ? H(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function fn(e, t) {
  return e ? E(e) && E(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : H(
    /* @__PURE__ */ Object.create(null),
    an(e),
    an(t ?? {})
  ) : t;
}
function Co(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = H(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = T(e[o], t[o]);
  return n;
}
let dn = null;
function Do(e, t, n = !1) {
  const o = he || z;
  if (o || dn) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : dn._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && R(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && S(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && S("inject() can only be used inside setup() or functional components.");
}
const pn = ho, To = (e) => e.__isTeleport, kn = Symbol.for("v-fgt"), Mo = Symbol.for("v-txt"), Io = Symbol.for("v-cmt");
let ce = null;
function xo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const $o = (...e) => jn(
  ...e
), Ln = "__vInternal", An = ({ key: e }) => e ?? null, ze = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? k(e) || A(e) || R(e) ? { i: z, r: e, k: t, f: !!n } : e : null);
function Po(e, t = null, n = null, o = 0, s = null, r = e === kn ? 0 : 1, l = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && An(t),
    ref: t && ze(t),
    scopeId: uo,
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
  return a ? (kt(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= k(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && S("VNode created with invalid key (NaN). VNode type:", c.type), // avoid a block node from tracking itself
  !l && // has current parent block
  ce && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ce.push(c), c;
}
const ko = process.env.NODE_ENV !== "production" ? $o : jn;
function jn(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === fo) && (process.env.NODE_ENV !== "production" && !e && S(`Invalid vnode type when creating vnode: ${e}.`), e = Io), xo(e)) {
    const a = qe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && kt(a, n), !r && ce && (a.shapeFlag & 6 ? ce[ce.indexOf(e)] = a : ce.push(a)), a.patchFlag |= -2, a;
  }
  if (zn(e) && (e = e.__vccOpts), t) {
    t = Lo(t);
    let { class: a, style: c } = t;
    a && !k(a) && (t.class = bt(a)), L(c) && (gt(c) && !E(c) && (c = H({}, c)), t.style = Ot(c));
  }
  const l = k(e) ? 1 : po(e) ? 128 : To(e) ? 64 : L(e) ? 4 : R(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && l & 4 && gt(e) && (e = _(e), S(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Po(
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
function Lo(e) {
  return e ? gt(e) || Ln in e ? H({}, e) : e : null;
}
function qe(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: l } = e, a = t ? jo(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && An(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? E(s) ? s.concat(ze(t)) : [s, ze(t)] : ze(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && E(l) ? l.map(Hn) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== kn ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && qe(e.ssContent),
    ssFallback: e.ssFallback && qe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Hn(e) {
  const t = qe(e);
  return E(e.children) && (t.children = e.children.map(Hn)), t;
}
function Ao(e = " ", t = 0) {
  return ko(Mo, null, e, t);
}
function kt(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (E(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), kt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Ln in t) ? t._ctx = z : s === 3 && z && (z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    R(t) ? (t = { default: t, _ctx: z }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ao(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function jo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = bt([t.class, o.class]));
      else if (s === "style")
        t.style = Ot([t.style, o.style]);
      else if (as(s)) {
        const r = t[s], l = o[s];
        l && r !== l && !(E(r) && r.includes(l)) && (t[s] = r ? [].concat(r, l) : l);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
let he = null, yt;
{
  const e = vn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((l) => l(r)) : s[0](r);
    };
  };
  yt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => he = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Lt = n
  );
}
const Fn = (e) => {
  const t = he;
  return yt(e), e.scope.on(), () => {
    e.scope.off(), yt(t);
  };
};
function Ho(e) {
  return e.vnode.shapeFlag & 4;
}
let Lt = !1;
function Fo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(qs(Us(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Ce)
          return Ce[n](e);
      },
      has(t, n) {
        return n in t || n in Ce;
      }
    }));
}
const Ko = /(?:^|[-_])(\w)/g, Bo = (e) => e.replace(Ko, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Kn(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Bn(e, t, n = !1) {
  let o = Kn(t);
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
  return o ? Bo(o) : n ? "App" : "Anonymous";
}
function zn(e) {
  return R(e) && "__vccOpts" in e;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const zo = (...e) => {
  g.debugEnabled && console.info("[LktFieldSelect] ", ...e);
}, Uo = ["innerHTML"], Wo = ["id", "multiple"], Go = {
  key: 3,
  class: "lkt-field__select"
}, qo = ["innerHTML"], Jo = ["title"], Yo = ["innerHTML"], Qo = {
  key: 2,
  class: "lkt-field__select-dropdown"
}, Xo = { class: "lkt-field__select-search-container" }, Zo = {
  key: 1,
  class: "lkt-field__select-options"
}, er = ["onClick"], tr = {
  key: 0,
  class: "lkt-field__select-option"
}, nr = {
  key: 3,
  class: "lkt-field__state"
}, sr = ["title"], or = {
  key: 4,
  class: "lkt-field-select__read"
}, rr = {
  key: 0,
  class: "lkt-field-select-empty"
}, lr = {
  key: 1,
  class: "lkt-field-select-empty"
}, ir = ["innerHTML", "title"], ar = {
  key: 5,
  class: "lkt-field__state"
}, cr = ["title"], ur = {
  key: 5,
  class: "lkt-field-select__read-multiple"
}, fr = { key: 0 }, dr = {
  key: 1,
  class: "lkt-field-select-empty"
}, pr = {
  key: 2,
  class: "lkt-field-select-empty"
}, hr = ["title"], _r = ["innerHTML"], mr = {
  key: 4,
  class: "lkt-field__state"
}, vr = ["title"], gr = /* @__PURE__ */ Xn({
  __name: "LktFieldSelect",
  props: {
    modelValue: { default: "" },
    class: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: Yt(16) },
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
    noOptionsMessage: { default: ls() },
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
    const o = n, s = e, r = Zn(), l = M(null), a = M(null), c = M(null), f = M(!s.readMode), w = Yt(16), h = M(new Qt(s.options)), C = M(!1), x = M(s.modelValue), v = M(s.modelValue), X = M(!1), F = M(!1), D = M(!1), $ = M(h.value.all()), j = M(h.value.all()), O = M("");
    s.closeOnSelect === null ? C.value = s.multiple === !0 : C.value = s.closeOnSelect;
    const _e = y(() => s.resource !== ""), p = y(() => typeof s.valid == "function" ? s.valid() : s.valid), me = y(() => v.value !== x.value), et = y(() => {
      const i = ["lkt-field", "lkt-field-select"];
      return s.palette && i.push(`lkt-field--${s.palette}`), me.value && i.push("is-changed"), s.class && i.push(s.class), s.multiple && i.push("is-multiple"), s.disabled && i.push("is-disabled"), s.upperDropdown && !s.choiceDropdown && i.push("lkt-field-select-upper-dropdown"), s.choiceDropdown && i.push("lkt-field-select-choice-dropdown"), s.mandatory && f.value && i.push("is-mandatory-field"), D.value && i.push("has-focus"), i.push(p.value ? "is-valid" : "is-error"), i.push(s.modelValue ? "is-filled" : "is-empty"), i.join(" ");
    }), Un = y(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplay}`), i.join(" ");
    }), Wn = y(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplayEdition}`), i.join(" ");
    }), At = y(() => {
      let i = !1;
      return j.value.forEach((b) => {
        b.value == v.value && (i = !0);
      }), i;
    }), Ie = y(() => {
      let i = {};
      return j.value.forEach((b) => {
        b.value == v.value && (i = b);
      }), i;
    }), tt = y(() => {
      let i = "";
      return j.value.forEach((b) => {
        b.value == v.value && (i = b.label);
      }), i;
    }), jt = y(() => {
      let i = [];
      return s.multiple && j.value.forEach((b) => {
        v.value.forEach((Ee) => {
          Ee == b.value && i.push(b);
        });
      }), i;
    }), nt = y(() => Array.isArray(v.value) ? v.value.length : 0), Ht = y(() => s.allowReadModeSwitch), ve = () => {
      j.value = h.value.all(), $.value = h.value.filter(O.value), F.value = !1;
    }, Ft = () => {
      O.value = "", ve();
    }, st = async () => {
      if (f.value)
        if (F.value = !1, _e.value) {
          F.value = !0, s.searchStringResourceParam && (s.resourceData[s.searchStringResourceParam] = O.value);
          const i = await ss(s.resource, s.resourceData);
          h.value.receiveOptions(i.data), ve(), o("results", i.data);
        } else
          ve();
    }, Gn = () => {
      v.value = x.value;
    }, qn = () => s.modelValue, ge = (i) => {
      Ft(), ot(i), D.value = !D.value, D.value && at(() => {
        st(), l.value.focus(), at(() => {
          l.value.focus();
        });
      });
    };
    we(() => s.readMode, (i) => f.value = !i), we(() => s.modelValue, (i) => {
      v.value = i;
    }), we(v, (i) => {
      o("update:modelValue", i), o("selected-option", h.value.findByValue(i)), X.value = !0, at(() => X.value = !1);
    }), we(O, ve), we(() => s.options, (i) => {
      h.value = new Qt(i);
    });
    const Kt = (i) => {
      if (s.multiple) {
        let b = v.value.findIndex((Ee) => Ee == i.value);
        return typeof b > "u" && (b = -1), b;
      }
      return -1;
    }, Jn = (i) => {
      if (s.multiple) {
        let b = Kt(i);
        b === -1 ? v.value.push(i.value) : v.value.splice(b, 1);
      } else
        v.value = i.value, D.value = !1;
    }, Yn = (i) => s.multiple ? Kt(i) !== -1 : i.value == v.value, ot = (i) => {
      if (!c.value.contains(i.target)) {
        Ft(), D.value = !1;
        return;
      }
    }, rt = (i) => {
      f.value = !f.value, f.value && focus();
    };
    window.addEventListener("click", ot), ve(), So(() => {
      window.removeEventListener("click", ot);
    }), t({
      reset: Gn,
      value: qn
    }), s.autoloadResource && s.resource !== "" && (zo("Auto loading Resource", s.resource, s.resourceData, s.autoloadResource), st());
    const re = y(() => s.useResourceSlot ? s.useResourceSlot : s.resource), Bt = y(() => g.NO_OPTIONS_MESSAGE), zt = y(() => s.emptyValueText !== "" ? s.emptyValueText : g.emptyValueText), xe = y(() => s.emptyValueSlot !== "" && typeof g.customResourceValueSlots[s.emptyValueSlot] < "u" || g.defaultEmptyValueSlot && typeof g.customResourceValueSlots[g.defaultEmptyValueSlot] < "u"), Ut = y(() => g.customResourceValueSlots[s.emptyValueSlot] ?? g.customResourceValueSlots[g.defaultEmptyValueSlot]), lt = y(() => re.value !== "" && typeof g.customResourceOptionSlots[re.value] < "u"), it = y(() => g.customResourceOptionSlots[re.value]), Wt = y(() => re.value !== "" && typeof g.customResourceValueSlots[re.value] < "u"), Gt = y(() => g.customResourceValueSlots[re.value]);
    return (i, b) => {
      const Ee = qt("lkt-field-text"), Qn = qt("lkt-loader");
      return u(), d("div", {
        class: $e(et.value),
        "data-show-ui": !1,
        ref: (m) => c.value = m
      }, [
        K(r).prefix ? Z(i.$slots, "prefix", { key: 0 }) : V("", !0),
        i.label ? (u(), d("label", {
          key: 1,
          innerHTML: i.label,
          onClick: Pe(ge, ["stop", "prevent"])
        }, null, 8, Uo)) : V("", !0),
        f.value ? (u(), d("select", {
          key: 2,
          ref: (m) => a.value = m,
          id: K(w),
          onFocus: Pe(ge, ["stop", "prevent"]),
          onBlur: Pe(ge, ["stop", "prevent"]),
          multiple: i.multiple,
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, Wo)) : V("", !0),
        f.value ? (u(), d("div", Go, [
          i.multiple ? (u(), d("div", {
            key: 1,
            class: "lkt-field__select-value-multiple",
            onClick: ge
          }, [
            ct("ul", {
              class: $e(Wn.value)
            }, [
              (u(!0), d(ye, null, ut(jt.value, (m) => (u(), d("li", {
                title: m.label
              }, [
                K(r).option ? Z(i.$slots, "option", {
                  key: 0,
                  option: m,
                  data: i.slotData
                }) : lt.value ? (u(), U(ee(it.value), {
                  key: 1,
                  option: m
                }, null, 8, ["option"])) : (u(), d("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: m.label
                }, null, 8, Yo))
              ], 8, Jo))), 256))
            ], 2)
          ])) : (u(), d("div", {
            key: 0,
            class: "lkt-field__select-value",
            onClick: ge
          }, [
            K(r).option ? Z(i.$slots, "option", {
              key: 0,
              option: Ie.value,
              data: i.slotData
            }) : V("", !0),
            lt.value ? (u(), U(ee(it.value), {
              key: 1,
              option: Ie.value
            }, null, 8, ["option"])) : (u(), d("div", {
              key: 2,
              class: "lkt-field-select__read-value",
              innerHTML: tt.value
            }, null, 8, qo))
          ])),
          D.value ? (u(), d("div", Qo, [
            es(ct("div", Xo, [
              ts(Ee, {
                ref: (m) => l.value = m,
                modelValue: O.value,
                "onUpdate:modelValue": b[0] || (b[0] = (m) => O.value = m),
                placeholder: i.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search",
                onKeyup: st
              }, null, 8, ["modelValue", "placeholder"])
            ], 512), [
              [ns, i.searchable]
            ]),
            F.value ? (u(), U(Qn, { key: 0 })) : V("", !0),
            !i.readonly && !F.value ? (u(), d("ul", Zo, [
              (u(!0), d(ye, null, ut($.value, (m) => (u(), d("li", {
                class: $e(["lkt-field__select-option", { "is-active": i.multiple ? Yn(m) : m.value == v.value }]),
                onClick: Pe((Er) => Jn(m), ["prevent", "stop"])
              }, [
                K(r).option ? Z(i.$slots, "option", {
                  key: 0,
                  option: m,
                  data: i.slotData
                }) : V("", !0),
                lt.value ? (u(), U(ee(it.value), {
                  key: 1,
                  option: m
                }, null, 8, ["option"])) : (u(), d(ye, { key: 2 }, [
                  Jt(Se(m.label), 1)
                ], 64))
              ], 10, er))), 256)),
              $.value.length === 0 && (K(r)["no-results"] || Bt.value) ? (u(), d("li", tr, [
                K(r)["no-results"] ? Z(i.$slots, "no-results", { key: 0 }) : (u(), d(ye, { key: 1 }, [
                  Jt(Se(Bt.value), 1)
                ], 64))
              ])) : V("", !0)
            ])) : V("", !0)
          ])) : V("", !0),
          Ht.value ? (u(), d("div", nr, [
            i.allowReadModeSwitch ? (u(), d("i", {
              key: 0,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: rt
            }, null, 8, sr)) : V("", !0)
          ])) : V("", !0)
        ])) : V("", !0),
        !f.value && !i.multiple ? (u(), d("div", or, [
          !At.value && xe.value ? (u(), d("div", rr, [
            (u(), U(ee(Ut.value)))
          ])) : !At.value && !xe.value ? (u(), d("div", lr, Se(zt.value), 1)) : K(r).value ? Z(i.$slots, "value", {
            key: 2,
            option: Ie.value,
            data: i.slotData
          }) : Wt.value ? (u(), U(ee(Gt.value), {
            key: 3,
            option: Ie.value
          }, null, 8, ["option"])) : (u(), d("div", {
            key: 4,
            class: "lkt-field-select__read-value",
            innerHTML: tt.value,
            title: tt.value
          }, null, 8, ir)),
          Ht.value ? (u(), d("div", ar, [
            i.allowReadModeSwitch ? (u(), d("i", {
              key: 0,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: rt
            }, null, 8, cr)) : V("", !0)
          ])) : V("", !0)
        ])) : V("", !0),
        !f.value && i.multiple ? (u(), d("div", ur, [
          i.multipleDisplay === "count" ? (u(), d("div", fr, Se(nt.value), 1)) : nt.value === 0 && xe.value ? (u(), d("div", dr, [
            (u(), U(ee(Ut.value)))
          ])) : nt.value === 0 && !xe.value ? (u(), d("div", pr, Se(zt.value), 1)) : (u(), d("ul", {
            key: 3,
            class: $e(Un.value)
          }, [
            (u(!0), d(ye, null, ut(jt.value, (m) => (u(), d("li", {
              title: m.label
            }, [
              K(r).value ? Z(i.$slots, "value", {
                key: 0,
                option: m,
                data: i.slotData
              }) : Wt.value ? (u(), U(ee(Gt.value), {
                key: 1,
                option: m,
                data: i.slotData
              }, null, 8, ["option", "data"])) : (u(), d("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: m.label
              }, null, 8, _r))
            ], 8, hr))), 256))
          ], 2)),
          i.allowReadModeSwitch ? (u(), d("div", mr, [
            ct("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: rt
            }, null, 8, vr)
          ])) : V("", !0)
        ])) : V("", !0)
      ], 2);
    };
  }
}), Tr = {
  install: (e) => {
    e.component("lkt-field-select") === void 0 && e.component("lkt-field-select", gr), e.component("lkt-loader") === void 0 && e.use(os), e.component("lkt-field-text") === void 0 && e.use(rs);
  }
};
export {
  Tr as default,
  Dr as setDefaultSelectEmptyValueSlot,
  Nr as setNoOptionsMessage,
  Rr as setResourceOptionSlot,
  Cr as setResourceValueSlot,
  Vr as setSelectEmptyValueMessage
};
