import { defineComponent as Zn, useSlots as es, ref as M, computed as y, watch as be, nextTick as ct, resolveComponent as Jt, openBlock as u, createElementBlock as d, normalizeClass as ie, unref as K, renderSlot as Z, createCommentVNode as V, withModifiers as ke, createBlock as z, resolveDynamicComponent as ee, createElementVNode as ut, Fragment as Oe, renderList as ft, withDirectives as ts, createVNode as ns, vShow as ss, createTextVNode as Yt, toDisplayString as Ne } from "vue";
import { generateRandomString as Qt } from "lkt-string-tools";
import { httpCall as os } from "lkt-http-client";
import rs from "lkt-loader";
import ls from "lkt-field-text";
const J = class J {
};
J.debugEnabled = !1, J.NO_OPTIONS_MESSAGE = "", J.emptyValueText = "", J.defaultEmptyValueSlot = "", J.customResourceOptionSlots = {}, J.customResourceValueSlots = {};
let m = J;
const is = () => m.NO_OPTIONS_MESSAGE, Nr = (e) => (m.NO_OPTIONS_MESSAGE = e, !0), Vr = (e) => (m.emptyValueText = e, !0), Rr = (e, t) => (m.customResourceOptionSlots[e] = t, !0), Cr = (e, t) => (m.customResourceValueSlots[e] = t, !0), Dr = (e, t) => {
  m.defaultEmptyValueSlot = e, t && (m.customResourceValueSlots[e] = t);
};
class Xt {
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
function as(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const G = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ue = () => {
}, cs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), H = Object.assign, us = Object.prototype.hasOwnProperty, N = (e, t) => us.call(e, t), E = Array.isArray, pe = (e) => Qe(e) === "[object Map]", fs = (e) => Qe(e) === "[object Set]", R = (e) => typeof e == "function", L = (e) => typeof e == "string", Ye = (e) => typeof e == "symbol", A = (e) => e !== null && typeof e == "object", ds = (e) => (A(e) || R(e)) && R(e.then) && R(e.catch), ps = Object.prototype.toString, Qe = (e) => ps.call(e), _n = (e) => Qe(e).slice(8, -1), hs = (e) => Qe(e) === "[object Object]", bt = (e) => L(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, mn = vn((e) => e.charAt(0).toUpperCase() + e.slice(1)), _s = vn((e) => e ? `on${mn(e)}` : ""), ve = (e, t) => !Object.is(e, t), vs = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Zt;
const gn = () => Zt || (Zt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ot(e) {
  if (E(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = L(o) ? ws(o) : Ot(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (L(e) || A(e))
    return e;
}
const ms = /;(?![^(]*\))/g, gs = /:([^]+)/, Es = /\/\*[^]*?\*\//g;
function ws(e) {
  const t = {};
  return e.replace(Es, "").split(ms).forEach((n) => {
    if (n) {
      const o = n.split(gs);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Nt(e) {
  let t = "";
  if (L(e))
    t = e;
  else if (E(e))
    for (let n = 0; n < e.length; n++) {
      const o = Nt(e[n]);
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
let ys;
function Ss(e, t = ys) {
  t && t.active && t.effects.push(e);
}
let Ce;
class bs {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Ss(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Xe();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Os(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ze();
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
      return te = !0, Ce = this, this._runnings++, en(this), this.fn();
    } finally {
      tn(this), this._runnings--, Ce = n, te = t;
    }
  }
  stop() {
    var t;
    this.active && (en(this), tn(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Os(e) {
  return e.value;
}
function en(e) {
  e._trackId++, e._depsLength = 0;
}
function tn(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      En(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function En(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let te = !0, ht = 0;
const wn = [];
function Xe() {
  wn.push(te), te = !1;
}
function Ze() {
  const e = wn.pop();
  te = e === void 0 ? !0 : e;
}
function Vt() {
  ht++;
}
function Rt() {
  for (ht--; !ht && _t.length; )
    _t.shift()();
}
function Ns(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && En(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, H({ effect: e }, n)));
  }
}
const _t = [];
function Vs(e, t, n) {
  var o;
  Vt();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, H({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && _t.push(s.scheduler)));
  }
  Rt();
}
const Rs = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, vt = /* @__PURE__ */ new WeakMap(), ne = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), mt = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function I(e, t, n) {
  if (te && Ce) {
    let o = vt.get(e);
    o || vt.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Rs(() => o.delete(n))), Ns(
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
  const l = vt.get(e);
  if (!l)
    return;
  let a = [];
  if (t === "clear")
    a = [...l.values()];
  else if (n === "length" && E(e)) {
    const c = Number(o);
    l.forEach((f, w) => {
      (w === "length" || !Ye(w) && w >= c) && a.push(f);
    });
  } else
    switch (n !== void 0 && a.push(l.get(n)), t) {
      case "add":
        E(e) ? bt(n) && a.push(l.get("length")) : (a.push(l.get(ne)), pe(e) && a.push(l.get(mt)));
        break;
      case "delete":
        E(e) || (a.push(l.get(ne)), pe(e) && a.push(l.get(mt)));
        break;
      case "set":
        pe(e) && a.push(l.get(ne));
        break;
    }
  Vt();
  for (const c of a)
    c && Vs(
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
  Rt();
}
const Cs = /* @__PURE__ */ as("__proto__,__v_isRef,__isVue"), yn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ye)
), nn = /* @__PURE__ */ Ds();
function Ds() {
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
      Xe(), Vt();
      const o = _(this)[t].apply(this, n);
      return Rt(), Ze(), o;
    };
  }), e;
}
function Ts(e) {
  const t = _(this);
  return I(t, "has", e), t.hasOwnProperty(e);
}
class Sn {
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
      return o === (s ? r ? Rn : Vn : r ? Bs : Nn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const l = E(t);
    if (!s) {
      if (l && N(nn, n))
        return Reflect.get(nn, n, o);
      if (n === "hasOwnProperty")
        return Ts;
    }
    const a = Reflect.get(t, n, o);
    return (Ye(n) ? yn.has(n) : Cs(n)) || (s || I(t, "get", n), r) ? a : j(a) ? l && bt(n) ? a : a.value : A(a) ? s ? Dn(a) : Cn(a) : a;
  }
}
class Ms extends Sn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const c = xe(r);
      if (!gt(o) && !xe(o) && (r = _(r), o = _(o)), !E(t) && j(r) && !j(o))
        return c ? !1 : (r.value = o, !0);
    }
    const l = E(t) && bt(n) ? Number(n) < t.length : N(t, n), a = Reflect.set(t, n, o, s);
    return t === _(s) && (l ? ve(o, r) && Q(t, "set", n, o, r) : Q(t, "add", n, o)), a;
  }
  deleteProperty(t, n) {
    const o = N(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Q(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Ye(n) || !yn.has(n)) && I(t, "has", n), o;
  }
  ownKeys(t) {
    return I(
      t,
      "iterate",
      E(t) ? "length" : ne
    ), Reflect.ownKeys(t);
  }
}
class bn extends Sn {
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
const Is = /* @__PURE__ */ new Ms(), xs = /* @__PURE__ */ new bn(), $s = /* @__PURE__ */ new bn(!0), Ct = (e) => e, et = (e) => Reflect.getPrototypeOf(e);
function Le(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = _(e), r = _(t);
  n || (ve(t, r) && I(s, "get", t), I(s, "get", r));
  const { has: l } = et(s), a = o ? Ct : n ? It : Mt;
  if (l.call(s, t))
    return a(e.get(t));
  if (l.call(s, r))
    return a(e.get(r));
  e !== s && e.get(t);
}
function Ae(e, t = !1) {
  const n = this.__v_raw, o = _(n), s = _(e);
  return t || (ve(e, s) && I(o, "has", e), I(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function je(e, t = !1) {
  return e = e.__v_raw, !t && I(_(e), "iterate", ne), Reflect.get(e, "size", e);
}
function sn(e) {
  e = _(e);
  const t = _(this);
  return et(t).has.call(t, e) || (t.add(e), Q(t, "add", e, e)), this;
}
function on(e, t) {
  t = _(t);
  const n = _(this), { has: o, get: s } = et(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && On(n, o, e) : (e = _(e), r = o.call(n, e));
  const l = s.call(n, e);
  return n.set(e, t), r ? ve(t, l) && Q(n, "set", e, t, l) : Q(n, "add", e, t), this;
}
function rn(e) {
  const t = _(this), { has: n, get: o } = et(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && On(t, n, e) : (e = _(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, l = t.delete(e);
  return s && Q(t, "delete", e, void 0, r), l;
}
function ln() {
  const e = _(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? pe(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Q(e, "clear", void 0, void 0, n), o;
}
function He(e, t) {
  return function(o, s) {
    const r = this, l = r.__v_raw, a = _(l), c = t ? Ct : e ? It : Mt;
    return !e && I(a, "iterate", ne), l.forEach((f, w) => o.call(s, c(f), c(w), r));
  };
}
function Fe(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = _(s), l = pe(r), a = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, f = s[e](...o), w = n ? Ct : t ? It : Mt;
    return !t && I(
      r,
      "iterate",
      c ? mt : ne
    ), {
      // iterator protocol
      next() {
        const { value: p, done: C } = f.next();
        return C ? { value: p, done: C } : {
          value: a ? [w(p[0]), w(p[1])] : w(p),
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
        `${mn(e)} operation ${n}failed: target is readonly.`,
        _(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ps() {
  const e = {
    get(r) {
      return Le(this, r);
    },
    get size() {
      return je(this);
    },
    has: Ae,
    add: sn,
    set: on,
    delete: rn,
    clear: ln,
    forEach: He(!1, !1)
  }, t = {
    get(r) {
      return Le(this, r, !1, !0);
    },
    get size() {
      return je(this);
    },
    has: Ae,
    add: sn,
    set: on,
    delete: rn,
    clear: ln,
    forEach: He(!1, !0)
  }, n = {
    get(r) {
      return Le(this, r, !0);
    },
    get size() {
      return je(this, !0);
    },
    has(r) {
      return Ae.call(this, r, !0);
    },
    add: W("add"),
    set: W("set"),
    delete: W("delete"),
    clear: W("clear"),
    forEach: He(!0, !1)
  }, o = {
    get(r) {
      return Le(this, r, !0, !0);
    },
    get size() {
      return je(this, !0);
    },
    has(r) {
      return Ae.call(this, r, !0);
    },
    add: W("add"),
    set: W("set"),
    delete: W("delete"),
    clear: W("clear"),
    forEach: He(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = Fe(
      r,
      !1,
      !1
    ), n[r] = Fe(
      r,
      !0,
      !1
    ), t[r] = Fe(
      r,
      !1,
      !0
    ), o[r] = Fe(
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
  ks,
  Ls,
  As,
  js
] = /* @__PURE__ */ Ps();
function Dt(e, t) {
  const n = t ? e ? js : As : e ? Ls : ks;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    N(n, s) && s in o ? n : o,
    s,
    r
  );
}
const Hs = {
  get: /* @__PURE__ */ Dt(!1, !1)
}, Fs = {
  get: /* @__PURE__ */ Dt(!0, !1)
}, Ks = {
  get: /* @__PURE__ */ Dt(!0, !0)
};
function On(e, t, n) {
  const o = _(n);
  if (o !== n && t.call(e, o)) {
    const s = _n(e);
    Ie(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Nn = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap(), Vn = /* @__PURE__ */ new WeakMap(), Rn = /* @__PURE__ */ new WeakMap();
function Us(e) {
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Us(_n(e));
}
function Cn(e) {
  return xe(e) ? e : Tt(
    e,
    !1,
    Is,
    Hs,
    Nn
  );
}
function Dn(e) {
  return Tt(
    e,
    !0,
    xs,
    Fs,
    Vn
  );
}
function Ke(e) {
  return Tt(
    e,
    !0,
    $s,
    Ks,
    Rn
  );
}
function Tt(e, t, n, o, s) {
  if (!A(e))
    return process.env.NODE_ENV !== "production" && Ie(`value cannot be made reactive: ${String(e)}`), e;
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
function he(e) {
  return xe(e) ? he(e.__v_raw) : !!(e && e.__v_isReactive);
}
function xe(e) {
  return !!(e && e.__v_isReadonly);
}
function gt(e) {
  return !!(e && e.__v_isShallow);
}
function Et(e) {
  return he(e) || xe(e);
}
function _(e) {
  const t = e && e.__v_raw;
  return t ? _(t) : e;
}
function Ws(e) {
  return Object.isExtensible(e) && vs(e, "__v_skip", !0), e;
}
const Mt = (e) => A(e) ? Cn(e) : e, It = (e) => A(e) ? Dn(e) : e;
function j(e) {
  return !!(e && e.__v_isRef === !0);
}
function Gs(e) {
  return j(e) ? e.value : e;
}
const qs = {
  get: (e, t, n) => Gs(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return j(s) && !j(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Js(e) {
  return he(e) ? e : new Proxy(e, qs);
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const se = [];
function Ys(e) {
  se.push(e);
}
function Qs() {
  se.pop();
}
function S(e, ...t) {
  Xe();
  const n = se.length ? se[se.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Xs();
  if (o)
    oe(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Un(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Zs(s)), console.warn(...r);
  }
  Ze();
}
function Xs() {
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
function Zs(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...eo(n));
  }), t;
}
function eo({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Un(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...to(e.props), r] : [s + r];
}
function to(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Tn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Tn(e, t, n) {
  return L(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : j(t) ? (t = Tn(e, _(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = _(t), n ? t : [`${e}=`, t]);
}
const xt = {
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
    $t(s, t, n);
  }
}
function De(e, t, n, o) {
  if (R(e)) {
    const r = oe(e, t, n, o);
    return r && ds(r) && r.catch((l) => {
      $t(l, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(De(e[r], t, n, o));
  return s;
}
function $t(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const l = t.proxy, a = process.env.NODE_ENV !== "production" ? xt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
  no(e, n, s, o);
}
function no(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = xt[t];
    if (n && Ys(n), S(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Qs(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let We = !1, wt = !1;
const k = [];
let Y = 0;
const _e = [];
let B = null, q = 0;
const Mn = /* @__PURE__ */ Promise.resolve();
let Pt = null;
const so = 100;
function oo(e) {
  const t = Pt || Mn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ro(e) {
  let t = Y + 1, n = k.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = k[o], r = $e(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function kt(e) {
  (!k.length || !k.includes(
    e,
    We && e.allowRecurse ? Y + 1 : Y
  )) && (e.id == null ? k.push(e) : k.splice(ro(e.id), 0, e), In());
}
function In() {
  !We && !wt && (wt = !0, Pt = Mn.then($n));
}
function xn(e) {
  E(e) ? _e.push(...e) : (!B || !B.includes(
    e,
    e.allowRecurse ? q + 1 : q
  )) && _e.push(e), In();
}
function lo(e) {
  if (_e.length) {
    const t = [...new Set(_e)].sort(
      (n, o) => $e(n) - $e(o)
    );
    if (_e.length = 0, B) {
      B.push(...t);
      return;
    }
    for (B = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), q = 0; q < B.length; q++)
      process.env.NODE_ENV !== "production" && Pn(e, B[q]) || B[q]();
    B = null, q = 0;
  }
}
const $e = (e) => e.id == null ? 1 / 0 : e.id, io = (e, t) => {
  const n = $e(e) - $e(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function $n(e) {
  wt = !1, We = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), k.sort(io);
  const t = process.env.NODE_ENV !== "production" ? (n) => Pn(e, n) : ue;
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
    Y = 0, k.length = 0, lo(e), We = !1, Pt = null, (k.length || _e.length) && $n(e);
  }
}
function Pn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > so) {
      const o = t.ownerInstance, s = o && Bn(o.type);
      return $t(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Ve = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (gn().__VUE_HMR_RUNTIME__ = {
  createRecord: dt(ao),
  rerender: dt(co),
  reload: dt(uo)
});
const Ge = /* @__PURE__ */ new Map();
function ao(e, t) {
  return Ge.has(e) ? !1 : (Ge.set(e, {
    initialDef: Te(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Te(e) {
  return zn(e) ? e.__vccOpts : e;
}
function co(e, t) {
  const n = Ge.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Te(o.type).render = t), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function uo(e, t) {
  const n = Ge.get(e);
  if (!n)
    return;
  t = Te(t), an(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = Te(s.type);
    Ve.has(r) || (r !== n.initialDef && an(r, t), Ve.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Ve.add(r), s.ceReload(t.styles), Ve.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, kt(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  xn(() => {
    for (const s of o)
      Ve.delete(
        Te(s.type)
      );
  });
}
function an(e, t) {
  H(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function dt(e) {
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
let ce, Be = [];
function kn(e, t) {
  var n, o;
  ce = e, ce ? (ce.enabled = !0, Be.forEach(({ event: s, args: r }) => ce.emit(s, ...r)), Be = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    kn(r, t);
  }), setTimeout(() => {
    ce || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Be = []);
  }, 3e3)) : Be = [];
}
let U = null, fo = null;
const po = Symbol.for("v-ndc"), ho = (e) => e.__isSuspense;
function _o(e, t) {
  t && t.pendingBranch ? E(e) ? t.effects.push(...e) : t.effects.push(e) : xn(e);
}
const vo = Symbol.for("v-scx"), mo = () => {
  {
    const e = To(vo);
    return e || process.env.NODE_ENV !== "production" && S(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Ue = {};
function go(e, t, {
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
  }, f = me, w = (h) => o === !0 ? h : (
    // for deep: false, only traverse root-level properties
    fe(h, o === !1 ? 1 : void 0)
  );
  let p, C = !1, $ = !1;
  if (j(e) ? (p = () => e.value, C = gt(e)) : he(e) ? (p = () => w(e), C = !0) : E(e) ? ($ = !0, C = e.some((h) => he(h) || gt(h)), p = () => e.map((h) => {
    if (j(h))
      return h.value;
    if (he(h))
      return w(h);
    if (R(h))
      return oe(h, f, 2);
    process.env.NODE_ENV !== "production" && c(h);
  })) : R(e) ? t ? p = () => oe(e, f, 2) : p = () => (g && g(), De(
    e,
    f,
    3,
    [X]
  )) : (p = ue, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const h = p;
    p = () => fe(h());
  }
  let g, X = (h) => {
    g = b.onStop = () => {
      oe(h, f, 4), g = b.onStop = void 0;
    };
  }, F;
  if (At)
    if (X = ue, t ? n && De(t, f, 3, [
      p(),
      $ ? [] : void 0,
      X
    ]) : p(), s === "sync") {
      const h = mo();
      F = h.__watcherHandles || (h.__watcherHandles = []);
    } else
      return ue;
  let D = $ ? new Array(e.length).fill(Ue) : Ue;
  const x = () => {
    if (!(!b.active || !b.dirty))
      if (t) {
        const h = b.run();
        (o || C || ($ ? h.some((Ee, tt) => ve(Ee, D[tt])) : ve(h, D))) && (g && g(), De(t, f, 3, [
          h,
          // pass undefined as the old value when it's changed for the first time
          D === Ue ? void 0 : $ && D[0] === Ue ? [] : D,
          X
        ]), D = h);
      } else
        b.run();
  };
  x.allowRecurse = !!t;
  let P;
  s === "sync" ? P = x : s === "post" ? P = () => hn(x, f && f.suspense) : (x.pre = !0, f && (x.id = f.uid), P = () => kt(x));
  const b = new bs(p, ue, P), ge = () => {
    b.stop();
  };
  return process.env.NODE_ENV !== "production" && (b.onTrack = l, b.onTrigger = a), t ? n ? x() : D = b.run() : s === "post" ? hn(
    b.run.bind(b),
    f && f.suspense
  ) : b.run(), F && F.push(ge), ge;
}
function Eo(e, t, n) {
  const o = this.proxy, s = L(e) ? e.includes(".") ? wo(o, e) : () => o[e] : e.bind(o, o);
  let r;
  R(t) ? r = t : (r = t.handler, n = t);
  const l = Kn(this), a = go(s, r.bind(o), n);
  return l(), a;
}
function wo(e, t) {
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
  else if (fs(e) || pe(e))
    e.forEach((s) => {
      fe(s, t, n, o);
    });
  else if (hs(e))
    for (const s in e)
      fe(e[s], t, n, o);
  return e;
}
function yo(e, t, n = me, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      Xe();
      const a = Kn(n), c = De(t, n, e, l);
      return a(), Ze(), c;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = _s(xt[e].replace(/ hook$/, ""));
    S(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const So = (e) => (t, n = me) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!At || e === "sp") && yo(e, (...o) => t(...o), n)
), bo = So("bum"), yt = (e) => e ? Fo(e) ? Ko(e) || e.proxy : yt(e.parent) : null, Me = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ H(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Ke(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Ke(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Ke(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Ke(e.refs) : e.refs,
    $parent: (e) => yt(e.parent),
    $root: (e) => yt(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Vo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, kt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = oo.bind(e.proxy)),
    $watch: (e) => Eo.bind(e)
  })
), Oo = (e) => e === "_" || e === "$", pt = (e, t) => e !== G && !e.__isScriptSetup && N(e, t), No = {
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
        if (pt(o, t))
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
    const w = Me[t];
    let p, C;
    if (w)
      return t === "$attrs" ? (I(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && I(e, "get", t), w(e);
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
    t.indexOf("__v") !== 0) && (s !== G && Oo(t[0]) && N(s, t) ? S(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === U && S(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return pt(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && N(s, t) ? (S(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== G && N(o, t) ? (o[t] = n, !0) : N(e.props, t) ? (process.env.NODE_ENV !== "production" && S(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && S(
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
    return !!n[l] || e !== G && N(e, l) || pt(t, l) || (a = r[0]) && N(a, l) || N(o, l) || N(Me, l) || N(s.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (No.ownKeys = (e) => (S(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function cn(e) {
  return E(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Vo(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: l }
  } = e.appContext, a = r.get(t);
  let c;
  return a ? c = a : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(
    (f) => qe(c, f, l, !0)
  ), qe(c, t, l)), A(t) && r.set(t, c), c;
}
function qe(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && qe(e, r, n, !0), s && s.forEach(
    (l) => qe(e, l, n, !0)
  );
  for (const l in t)
    if (o && l === "expose")
      process.env.NODE_ENV !== "production" && S(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Ro[l] || n && n[l];
      e[l] = a ? a(e[l], t[l]) : t[l];
    }
  return e;
}
const Ro = {
  data: un,
  props: dn,
  emits: dn,
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
  watch: Do,
  // provide / inject
  provide: un,
  inject: Co
};
function un(e, t) {
  return t ? e ? function() {
    return H(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Co(e, t) {
  return Re(fn(e), fn(t));
}
function fn(e) {
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
function dn(e, t) {
  return e ? E(e) && E(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : H(
    /* @__PURE__ */ Object.create(null),
    cn(e),
    cn(t ?? {})
  ) : t;
}
function Do(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = H(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = T(e[o], t[o]);
  return n;
}
let pn = null;
function To(e, t, n = !1) {
  const o = me || U;
  if (o || pn) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : pn._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && R(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && S(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && S("inject() can only be used inside setup() or functional components.");
}
const hn = _o, Mo = (e) => e.__isTeleport, Ln = Symbol.for("v-fgt"), Io = Symbol.for("v-txt"), xo = Symbol.for("v-cmt");
let de = null;
function $o(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Po = (...e) => Hn(
  ...e
), An = "__vInternal", jn = ({ key: e }) => e ?? null, ze = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? L(e) || j(e) || R(e) ? { i: U, r: e, k: t, f: !!n } : e : null);
function ko(e, t = null, n = null, o = 0, s = null, r = e === Ln ? 0 : 1, l = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && jn(t),
    ref: t && ze(t),
    scopeId: fo,
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
  return a ? (Lt(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= L(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && S("VNode created with invalid key (NaN). VNode type:", c.type), // avoid a block node from tracking itself
  !l && // has current parent block
  de && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && de.push(c), c;
}
const Lo = process.env.NODE_ENV !== "production" ? Po : Hn;
function Hn(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === po) && (process.env.NODE_ENV !== "production" && !e && S(`Invalid vnode type when creating vnode: ${e}.`), e = xo), $o(e)) {
    const a = Je(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Lt(a, n), !r && de && (a.shapeFlag & 6 ? de[de.indexOf(e)] = a : de.push(a)), a.patchFlag |= -2, a;
  }
  if (zn(e) && (e = e.__vccOpts), t) {
    t = Ao(t);
    let { class: a, style: c } = t;
    a && !L(a) && (t.class = Nt(a)), A(c) && (Et(c) && !E(c) && (c = H({}, c)), t.style = Ot(c));
  }
  const l = L(e) ? 1 : ho(e) ? 128 : Mo(e) ? 64 : A(e) ? 4 : R(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && l & 4 && Et(e) && (e = _(e), S(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ko(
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
function Ao(e) {
  return e ? Et(e) || An in e ? H({}, e) : e : null;
}
function Je(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: l } = e, a = t ? Ho(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && jn(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? E(s) ? s.concat(ze(t)) : [s, ze(t)] : ze(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && E(l) ? l.map(Fn) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ln ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && Je(e.ssContent),
    ssFallback: e.ssFallback && Je(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Fn(e) {
  const t = Je(e);
  return E(e.children) && (t.children = e.children.map(Fn)), t;
}
function jo(e = " ", t = 0) {
  return Lo(Io, null, e, t);
}
function Lt(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (E(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Lt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(An in t) ? t._ctx = U : s === 3 && U && (U.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    R(t) ? (t = { default: t, _ctx: U }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [jo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ho(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = Nt([t.class, o.class]));
      else if (s === "style")
        t.style = Ot([t.style, o.style]);
      else if (cs(s)) {
        const r = t[s], l = o[s];
        l && r !== l && !(E(r) && r.includes(l)) && (t[s] = r ? [].concat(r, l) : l);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
let me = null, St;
{
  const e = gn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((l) => l(r)) : s[0](r);
    };
  };
  St = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => me = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => At = n
  );
}
const Kn = (e) => {
  const t = me;
  return St(e), e.scope.on(), () => {
    e.scope.off(), St(t);
  };
};
function Fo(e) {
  return e.vnode.shapeFlag & 4;
}
let At = !1;
function Ko(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Js(Ws(e.exposed)), {
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
const Bo = /(?:^|[-_])(\w)/g, Uo = (e) => e.replace(Bo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Bn(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Un(e, t, n = !1) {
  let o = Bn(t);
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
  return o ? Uo(o) : n ? "App" : "Anonymous";
}
function zn(e) {
  return R(e) && "__vccOpts" in e;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const ae = (...e) => {
  m.debugEnabled && console.info("[LktFieldSelect] ", ...e);
}, Tr = (e = !0) => {
  m.debugEnabled = e;
}, zo = ["innerHTML"], Wo = ["id", "multiple"], Go = {
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
}, hr = ["title"], _r = ["innerHTML"], vr = {
  key: 4,
  class: "lkt-field__state"
}, mr = ["title"], gr = /* @__PURE__ */ Zn({
  __name: "LktFieldSelect",
  props: {
    modelValue: { default: "" },
    class: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: Qt(16) },
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
    tags: { type: Boolean, default: !1 },
    autoloadResource: { type: Boolean, default: !1 },
    noOptionsMessage: { default: is() },
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
    const o = n, s = e, r = es(), l = M(null), a = M(null), c = M(null), f = M(!s.readMode), w = Qt(16), p = M(new Xt(s.options)), C = M(!1), $ = M(s.modelValue), g = M(s.modelValue), X = M(!1), F = M(!1), D = M(!1), x = M(p.value.all()), P = M(p.value.all()), b = M("");
    s.closeOnSelect === null ? C.value = s.multiple === !0 : C.value = s.closeOnSelect;
    const ge = y(() => s.resource !== ""), h = y(() => typeof s.valid == "function" ? s.valid() : s.valid), Ee = y(() => g.value !== $.value), tt = y(() => {
      const i = ["lkt-field", "lkt-field-select"];
      return s.palette && i.push(`lkt-field--${s.palette}`), Ee.value && i.push("is-changed"), s.class && i.push(s.class), s.multiple && i.push("is-multiple"), s.disabled && i.push("is-disabled"), s.tags && i.push("with-tags"), s.upperDropdown && !s.choiceDropdown && i.push("lkt-field-select-upper-dropdown"), s.choiceDropdown && i.push("lkt-field-select-choice-dropdown"), s.mandatory && f.value && i.push("is-mandatory-field"), D.value && i.push("has-focus"), i.push(h.value ? "is-valid" : "is-error"), i.push(s.modelValue ? "is-filled" : "is-empty"), i.join(" ");
    }), Wn = y(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplay}`), i.join(" ");
    }), Gn = y(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplayEdition}`), i.join(" ");
    }), jt = y(() => {
      let i = !1;
      return P.value.forEach((O) => {
        O.value == g.value && (i = !0);
      }), i;
    }), we = y(() => {
      let i = {};
      return P.value.forEach((O) => {
        O.value == g.value && (i = O);
      }), i;
    }), nt = y(() => {
      let i = "";
      return P.value.forEach((O) => {
        O.value == g.value && (i = O.label);
      }), i;
    }), Ht = y(() => {
      let i = [];
      return s.multiple && P.value.forEach((O) => {
        g.value.forEach((Se) => {
          Se == O.value && i.push(O);
        });
      }), i;
    }), st = y(() => Array.isArray(g.value) ? g.value.length : 0), Ft = y(() => s.allowReadModeSwitch), re = () => {
      P.value = p.value.all(), x.value = p.value.filter(b.value), F.value = !1, ae("buildVisibleOptions: optionsValue", p.value), ae("buildVisibleOptions: optionsHaystack", P.value), ae("buildVisibleOptions: visibleOptions", x.value);
    }, Kt = () => {
      b.value = "", re();
    }, ot = async () => {
      if (f.value)
        if (F.value = !1, ge.value) {
          F.value = !0, s.searchStringResourceParam && (s.resourceData[s.searchStringResourceParam] = b.value);
          const i = await os(s.resource, s.resourceData);
          p.value.receiveOptions(i.data), re(), o("results", i.data);
        } else
          re();
    }, qn = () => {
      g.value = $.value;
    }, Jn = () => s.modelValue, ye = (i) => {
      f.value && (Kt(), rt(i), D.value = !D.value, D.value && ct(() => {
        ot(), l.value.focus(), ct(() => {
          l.value.focus();
        });
      }));
    };
    be(() => s.readMode, (i) => f.value = !i), be(() => s.modelValue, (i) => {
      ae("Updated props.modelValue", i), g.value = i;
    }), be(g, (i) => {
      o("update:modelValue", i), o("selected-option", p.value.findByValue(i)), X.value = !0, ct(() => X.value = !1);
    }), be(b, re), be(() => s.options, (i) => {
      ae("Updated props.options", i, p.value), p.value = new Xt(i), re();
    });
    const Bt = (i) => {
      if (s.multiple) {
        let O = g.value.findIndex((Se) => Se == i.value);
        return typeof O > "u" && (O = -1), O;
      }
      return -1;
    }, Yn = (i) => {
      if (s.multiple) {
        let O = Bt(i);
        O === -1 ? g.value.push(i.value) : g.value.splice(O, 1);
      } else
        g.value = i.value, D.value = !1;
    }, Qn = (i) => s.multiple ? Bt(i) !== -1 : i.value == g.value, rt = (i) => {
      if (!c.value.contains(i.target)) {
        Kt(), D.value = !1;
        return;
      }
    }, lt = (i) => {
      f.value = !f.value, f.value && focus();
    };
    window.addEventListener("click", rt), re(), bo(() => {
      window.removeEventListener("click", rt);
    }), t({
      reset: qn,
      value: Jn
    }), s.autoloadResource && s.resource !== "" && (ae("Auto loading Resource", s.resource, s.resourceData, s.autoloadResource), ot());
    const le = y(() => s.useResourceSlot ? s.useResourceSlot : s.resource), Ut = y(() => m.NO_OPTIONS_MESSAGE), zt = y(() => s.emptyValueText !== "" ? s.emptyValueText : m.emptyValueText), Pe = y(() => s.emptyValueSlot !== "" && typeof m.customResourceValueSlots[s.emptyValueSlot] < "u" || m.defaultEmptyValueSlot && typeof m.customResourceValueSlots[m.defaultEmptyValueSlot] < "u"), Wt = y(() => m.customResourceValueSlots[s.emptyValueSlot] ?? m.customResourceValueSlots[m.defaultEmptyValueSlot]), it = y(() => le.value !== "" && typeof m.customResourceOptionSlots[le.value] < "u"), at = y(() => m.customResourceOptionSlots[le.value]), Gt = y(() => le.value !== "" && typeof m.customResourceValueSlots[le.value] < "u"), qt = y(() => m.customResourceValueSlots[le.value]);
    return (i, O) => {
      const Se = Jt("lkt-field-text"), Xn = Jt("lkt-loader");
      return u(), d("div", {
        class: ie(tt.value),
        "data-show-ui": !1,
        ref: (v) => c.value = v
      }, [
        K(r).prefix ? Z(i.$slots, "prefix", { key: 0 }) : V("", !0),
        i.label ? (u(), d("label", {
          key: 1,
          innerHTML: i.label,
          onClick: ke(ye, ["stop", "prevent"])
        }, null, 8, zo)) : V("", !0),
        f.value ? (u(), d("select", {
          key: 2,
          ref: (v) => a.value = v,
          id: K(w),
          onFocus: ke(ye, ["stop", "prevent"]),
          onBlur: ke(ye, ["stop", "prevent"]),
          multiple: i.multiple,
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, Wo)) : V("", !0),
        f.value ? (u(), d("div", Go, [
          i.multiple ? (u(), d("div", {
            key: 1,
            class: "lkt-field__select-value-multiple",
            onClick: ye
          }, [
            ut("ul", {
              class: ie(Gn.value)
            }, [
              (u(!0), d(Oe, null, ft(Ht.value, (v) => (u(), d("li", {
                title: v.label
              }, [
                K(r).option ? Z(i.$slots, "option", {
                  key: 0,
                  option: v,
                  data: i.slotData
                }) : it.value ? (u(), z(ee(at.value), {
                  key: 1,
                  option: v
                }, null, 8, ["option"])) : (u(), d("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: v.label
                }, null, 8, Yo))
              ], 8, Jo))), 256))
            ], 2)
          ])) : (u(), d("div", {
            key: 0,
            class: "lkt-field__select-value",
            onClick: ye
          }, [
            K(r).option ? Z(i.$slots, "option", {
              key: 0,
              option: we.value,
              data: i.slotData
            }) : V("", !0),
            it.value ? (u(), z(ee(at.value), {
              key: 1,
              option: we.value
            }, null, 8, ["option"])) : (u(), d("div", {
              key: 2,
              class: "lkt-field-select__read-value",
              innerHTML: nt.value
            }, null, 8, qo))
          ])),
          D.value ? (u(), d("div", Qo, [
            ts(ut("div", Xo, [
              ns(Se, {
                ref: (v) => l.value = v,
                modelValue: b.value,
                "onUpdate:modelValue": O[0] || (O[0] = (v) => b.value = v),
                placeholder: i.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search",
                onKeyup: ot
              }, null, 8, ["modelValue", "placeholder"])
            ], 512), [
              [ss, i.searchable]
            ]),
            F.value ? (u(), z(Xn, { key: 0 })) : V("", !0),
            !i.readonly && !F.value ? (u(), d("ul", Zo, [
              (u(!0), d(Oe, null, ft(x.value, (v) => (u(), d("li", {
                class: ie(["lkt-field__select-option", { "is-active": i.multiple ? Qn(v) : v.value == g.value }]),
                onClick: ke((Er) => Yn(v), ["prevent", "stop"])
              }, [
                K(r).option ? Z(i.$slots, "option", {
                  key: 0,
                  option: v,
                  data: i.slotData
                }) : V("", !0),
                it.value ? (u(), z(ee(at.value), {
                  key: 1,
                  option: v
                }, null, 8, ["option"])) : (u(), d(Oe, { key: 2 }, [
                  Yt(Ne(v.label), 1)
                ], 64))
              ], 10, er))), 256)),
              x.value.length === 0 && (K(r)["no-results"] || Ut.value) ? (u(), d("li", tr, [
                K(r)["no-results"] ? Z(i.$slots, "no-results", { key: 0 }) : (u(), d(Oe, { key: 1 }, [
                  Yt(Ne(Ut.value), 1)
                ], 64))
              ])) : V("", !0)
            ])) : V("", !0)
          ])) : V("", !0),
          Ft.value ? (u(), d("div", nr, [
            i.allowReadModeSwitch ? (u(), d("i", {
              key: 0,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: lt
            }, null, 8, sr)) : V("", !0)
          ])) : V("", !0)
        ])) : V("", !0),
        !f.value && !i.multiple ? (u(), d("div", or, [
          !jt.value && Pe.value ? (u(), d("div", rr, [
            (u(), z(ee(Wt.value)))
          ])) : !jt.value && !Pe.value ? (u(), d("div", lr, Ne(zt.value), 1)) : K(r).value ? Z(i.$slots, "value", {
            key: 2,
            option: we.value,
            data: i.slotData
          }) : Gt.value ? (u(), z(ee(qt.value), {
            key: 3,
            option: we.value
          }, null, 8, ["option"])) : (u(), d("div", {
            key: 4,
            class: ie(["lkt-field-select__read-value", "lkt-field-option option-" + we.value.value]),
            innerHTML: nt.value,
            title: nt.value
          }, null, 10, ir)),
          Ft.value ? (u(), d("div", ar, [
            i.allowReadModeSwitch ? (u(), d("i", {
              key: 0,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: lt
            }, null, 8, cr)) : V("", !0)
          ])) : V("", !0)
        ])) : V("", !0),
        !f.value && i.multiple ? (u(), d("div", ur, [
          i.multipleDisplay === "count" ? (u(), d("div", fr, Ne(st.value), 1)) : st.value === 0 && Pe.value ? (u(), d("div", dr, [
            (u(), z(ee(Wt.value)))
          ])) : st.value === 0 && !Pe.value ? (u(), d("div", pr, Ne(zt.value), 1)) : (u(), d("ul", {
            key: 3,
            class: ie(Wn.value)
          }, [
            (u(!0), d(Oe, null, ft(Ht.value, (v) => (u(), d("li", {
              title: v.label,
              class: ie("lkt-field-option option-" + v.value)
            }, [
              K(r).value ? Z(i.$slots, "value", {
                key: 0,
                option: v,
                data: i.slotData
              }) : Gt.value ? (u(), z(ee(qt.value), {
                key: 1,
                option: v,
                data: i.slotData
              }, null, 8, ["option", "data"])) : (u(), d("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: v.label
              }, null, 8, _r))
            ], 10, hr))), 256))
          ], 2)),
          i.allowReadModeSwitch ? (u(), d("div", vr, [
            ut("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: lt
            }, null, 8, mr)
          ])) : V("", !0)
        ])) : V("", !0)
      ], 2);
    };
  }
}), Mr = {
  install: (e) => {
    e.component("lkt-field-select") === void 0 && e.component("lkt-field-select", gr), e.component("lkt-loader") === void 0 && e.use(rs), e.component("lkt-field-text") === void 0 && e.use(ls);
  }
};
export {
  Tr as debugLktFieldSelect,
  Mr as default,
  Dr as setDefaultSelectEmptyValueSlot,
  Nr as setNoOptionsMessage,
  Rr as setResourceOptionSlot,
  Cr as setResourceValueSlot,
  Vr as setSelectEmptyValueMessage
};
