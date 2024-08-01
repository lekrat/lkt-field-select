import { defineComponent as ts, useSlots as ns, ref as M, computed as E, watch as Oe, nextTick as ft, resolveComponent as Xt, openBlock as u, createElementBlock as d, normalizeClass as ie, unref as K, renderSlot as Z, createCommentVNode as V, withModifiers as Ae, createBlock as U, resolveDynamicComponent as ee, toDisplayString as ae, Fragment as Ne, renderList as dt, withDirectives as ss, createElementVNode as qe, createVNode as os, vShow as ls, createTextVNode as Zt } from "vue";
import { generateRandomString as en } from "lkt-string-tools";
import { httpCall as rs } from "lkt-http-client";
import { __ as is } from "lkt-i18n";
import as from "lkt-loader";
import cs from "lkt-field-text";
const J = class J {
};
J.debugEnabled = !1, J.NO_OPTIONS_MESSAGE = "", J.emptyValueText = "", J.defaultEmptyValueSlot = "", J.customResourceOptionSlots = {}, J.customResourceValueSlots = {};
let g = J;
const us = () => g.NO_OPTIONS_MESSAGE, xl = (e) => (g.NO_OPTIONS_MESSAGE = e, !0), Il = (e) => (g.emptyValueText = e, !0), $l = (e, t) => (g.customResourceOptionSlots[e] = t, !0), kl = (e, t) => (g.customResourceValueSlots[e] = t, !0), Pl = (e, t) => {
  g.defaultEmptyValueSlot = e, t && (g.customResourceValueSlots[e] = t);
};
class tn {
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
    o.forEach((l) => {
      let r = [l.value, l.label].join("-");
      n.has(r) || (s.push(l), n.add(r));
    }), this.value = s;
  }
}
/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function fs(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const G = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const fe = () => {
}, ds = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), H = Object.assign, ps = Object.prototype.hasOwnProperty, N = (e, t) => ps.call(e, t), w = Array.isArray, he = (e) => et(e) === "[object Map]", hs = (e) => et(e) === "[object Set]", R = (e) => typeof e == "function", L = (e) => typeof e == "string", Ze = (e) => typeof e == "symbol", A = (e) => e !== null && typeof e == "object", _s = (e) => (A(e) || R(e)) && R(e.then) && R(e.catch), vs = Object.prototype.toString, et = (e) => vs.call(e), gn = (e) => et(e).slice(8, -1), ms = (e) => et(e) === "[object Object]", Ot = (e) => L(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, En = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, wn = En((e) => e.charAt(0).toUpperCase() + e.slice(1)), gs = En((e) => e ? `on${wn(e)}` : ""), me = (e, t) => !Object.is(e, t), Es = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let nn;
const yn = () => nn || (nn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Nt(e) {
  if (w(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = L(o) ? bs(o) : Nt(o);
      if (s)
        for (const l in s)
          t[l] = s[l];
    }
    return t;
  } else if (L(e) || A(e))
    return e;
}
const ws = /;(?![^(]*\))/g, ys = /:([^]+)/, Ss = /\/\*[^]*?\*\//g;
function bs(e) {
  const t = {};
  return e.replace(Ss, "").split(ws).forEach((n) => {
    if (n) {
      const o = n.split(ys);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Vt(e) {
  let t = "";
  if (L(e))
    t = e;
  else if (w(e))
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
function xe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Os;
function Ns(e, t = Os) {
  t && t.active && t.effects.push(e);
}
let Ce;
class Vs {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Ns(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, tt();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Rs(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), nt();
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
      return te = !0, Ce = this, this._runnings++, sn(this), this.fn();
    } finally {
      on(this), this._runnings--, Ce = n, te = t;
    }
  }
  stop() {
    var t;
    this.active && (sn(this), on(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Rs(e) {
  return e.value;
}
function sn(e) {
  e._trackId++, e._depsLength = 0;
}
function on(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      Sn(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function Sn(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let te = !0, _t = 0;
const bn = [];
function tt() {
  bn.push(te), te = !1;
}
function nt() {
  const e = bn.pop();
  te = e === void 0 ? !0 : e;
}
function Rt() {
  _t++;
}
function Ct() {
  for (_t--; !_t && vt.length; )
    vt.shift()();
}
function Cs(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && Sn(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, H({ effect: e }, n)));
  }
}
const vt = [];
function Ds(e, t, n) {
  var o;
  Rt();
  for (const s of e.keys()) {
    let l;
    s._dirtyLevel < t && (l ?? (l = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (l ?? (l = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, H({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && vt.push(s.scheduler)));
  }
  Ct();
}
const Ts = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, mt = /* @__PURE__ */ new WeakMap(), ne = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), gt = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function x(e, t, n) {
  if (te && Ce) {
    let o = mt.get(e);
    o || mt.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Ts(() => o.delete(n))), Cs(
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
function Q(e, t, n, o, s, l) {
  const r = mt.get(e);
  if (!r)
    return;
  let a = [];
  if (t === "clear")
    a = [...r.values()];
  else if (n === "length" && w(e)) {
    const c = Number(o);
    r.forEach((f, y) => {
      (y === "length" || !Ze(y) && y >= c) && a.push(f);
    });
  } else
    switch (n !== void 0 && a.push(r.get(n)), t) {
      case "add":
        w(e) ? Ot(n) && a.push(r.get("length")) : (a.push(r.get(ne)), he(e) && a.push(r.get(gt)));
        break;
      case "delete":
        w(e) || (a.push(r.get(ne)), he(e) && a.push(r.get(gt)));
        break;
      case "set":
        he(e) && a.push(r.get(ne));
        break;
    }
  Rt();
  for (const c of a)
    c && Ds(
      c,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: s,
        oldTarget: l
      } : void 0
    );
  Ct();
}
const Ms = /* @__PURE__ */ fs("__proto__,__v_isRef,__isVue"), On = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ze)
), ln = /* @__PURE__ */ xs();
function xs() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = v(this);
      for (let l = 0, r = this.length; l < r; l++)
        x(o, "get", l + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(v)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      tt(), Rt();
      const o = v(this)[t].apply(this, n);
      return Ct(), nt(), o;
    };
  }), e;
}
function Is(e) {
  const t = v(this);
  return x(t, "has", e), t.hasOwnProperty(e);
}
class Nn {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    const s = this._isReadonly, l = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return l;
    if (n === "__v_raw")
      return o === (s ? l ? Tn : Dn : l ? Ws : Cn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const r = w(t);
    if (!s) {
      if (r && N(ln, n))
        return Reflect.get(ln, n, o);
      if (n === "hasOwnProperty")
        return Is;
    }
    const a = Reflect.get(t, n, o);
    return (Ze(n) ? On.has(n) : Ms(n)) || (s || x(t, "get", n), l) ? a : j(a) ? r && Ot(n) ? a : a.value : A(a) ? s ? xn(a) : Mn(a) : a;
  }
}
class $s extends Nn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let l = t[n];
    if (!this._isShallow) {
      const c = Ie(l);
      if (!Et(o) && !Ie(o) && (l = v(l), o = v(o)), !w(t) && j(l) && !j(o))
        return c ? !1 : (l.value = o, !0);
    }
    const r = w(t) && Ot(n) ? Number(n) < t.length : N(t, n), a = Reflect.set(t, n, o, s);
    return t === v(s) && (r ? me(o, l) && Q(t, "set", n, o, l) : Q(t, "add", n, o)), a;
  }
  deleteProperty(t, n) {
    const o = N(t, n), s = t[n], l = Reflect.deleteProperty(t, n);
    return l && o && Q(t, "delete", n, void 0, s), l;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Ze(n) || !On.has(n)) && x(t, "has", n), o;
  }
  ownKeys(t) {
    return x(
      t,
      "iterate",
      w(t) ? "length" : ne
    ), Reflect.ownKeys(t);
  }
}
class Vn extends Nn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && xe(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && xe(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ks = /* @__PURE__ */ new $s(), Ps = /* @__PURE__ */ new Vn(), Ls = /* @__PURE__ */ new Vn(!0), Dt = (e) => e, st = (e) => Reflect.getPrototypeOf(e);
function je(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = v(e), l = v(t);
  n || (me(t, l) && x(s, "get", t), x(s, "get", l));
  const { has: r } = st(s), a = o ? Dt : n ? It : xt;
  if (r.call(s, t))
    return a(e.get(t));
  if (r.call(s, l))
    return a(e.get(l));
  e !== s && e.get(t);
}
function He(e, t = !1) {
  const n = this.__v_raw, o = v(n), s = v(e);
  return t || (me(e, s) && x(o, "has", e), x(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Fe(e, t = !1) {
  return e = e.__v_raw, !t && x(v(e), "iterate", ne), Reflect.get(e, "size", e);
}
function rn(e) {
  e = v(e);
  const t = v(this);
  return st(t).has.call(t, e) || (t.add(e), Q(t, "add", e, e)), this;
}
function an(e, t) {
  t = v(t);
  const n = v(this), { has: o, get: s } = st(n);
  let l = o.call(n, e);
  l ? process.env.NODE_ENV !== "production" && Rn(n, o, e) : (e = v(e), l = o.call(n, e));
  const r = s.call(n, e);
  return n.set(e, t), l ? me(t, r) && Q(n, "set", e, t, r) : Q(n, "add", e, t), this;
}
function cn(e) {
  const t = v(this), { has: n, get: o } = st(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && Rn(t, n, e) : (e = v(e), s = n.call(t, e));
  const l = o ? o.call(t, e) : void 0, r = t.delete(e);
  return s && Q(t, "delete", e, void 0, l), r;
}
function un() {
  const e = v(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? he(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Q(e, "clear", void 0, void 0, n), o;
}
function Ke(e, t) {
  return function(o, s) {
    const l = this, r = l.__v_raw, a = v(r), c = t ? Dt : e ? It : xt;
    return !e && x(a, "iterate", ne), r.forEach((f, y) => o.call(s, c(f), c(y), l));
  };
}
function Be(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, l = v(s), r = he(l), a = e === "entries" || e === Symbol.iterator && r, c = e === "keys" && r, f = s[e](...o), y = n ? Dt : t ? It : xt;
    return !t && x(
      l,
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
      xe(
        `${wn(e)} operation ${n}failed: target is readonly.`,
        v(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function As() {
  const e = {
    get(l) {
      return je(this, l);
    },
    get size() {
      return Fe(this);
    },
    has: He,
    add: rn,
    set: an,
    delete: cn,
    clear: un,
    forEach: Ke(!1, !1)
  }, t = {
    get(l) {
      return je(this, l, !1, !0);
    },
    get size() {
      return Fe(this);
    },
    has: He,
    add: rn,
    set: an,
    delete: cn,
    clear: un,
    forEach: Ke(!1, !0)
  }, n = {
    get(l) {
      return je(this, l, !0);
    },
    get size() {
      return Fe(this, !0);
    },
    has(l) {
      return He.call(this, l, !0);
    },
    add: W("add"),
    set: W("set"),
    delete: W("delete"),
    clear: W("clear"),
    forEach: Ke(!0, !1)
  }, o = {
    get(l) {
      return je(this, l, !0, !0);
    },
    get size() {
      return Fe(this, !0);
    },
    has(l) {
      return He.call(this, l, !0);
    },
    add: W("add"),
    set: W("set"),
    delete: W("delete"),
    clear: W("clear"),
    forEach: Ke(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((l) => {
    e[l] = Be(
      l,
      !1,
      !1
    ), n[l] = Be(
      l,
      !0,
      !1
    ), t[l] = Be(
      l,
      !1,
      !0
    ), o[l] = Be(
      l,
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
  js,
  Hs,
  Fs,
  Ks
] = /* @__PURE__ */ As();
function Tt(e, t) {
  const n = t ? e ? Ks : Fs : e ? Hs : js;
  return (o, s, l) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    N(n, s) && s in o ? n : o,
    s,
    l
  );
}
const Bs = {
  get: /* @__PURE__ */ Tt(!1, !1)
}, zs = {
  get: /* @__PURE__ */ Tt(!0, !1)
}, Us = {
  get: /* @__PURE__ */ Tt(!0, !0)
};
function Rn(e, t, n) {
  const o = v(n);
  if (o !== n && t.call(e, o)) {
    const s = gn(e);
    xe(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Cn = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap(), Dn = /* @__PURE__ */ new WeakMap(), Tn = /* @__PURE__ */ new WeakMap();
function Gs(e) {
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
function qs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Gs(gn(e));
}
function Mn(e) {
  return Ie(e) ? e : Mt(
    e,
    !1,
    ks,
    Bs,
    Cn
  );
}
function xn(e) {
  return Mt(
    e,
    !0,
    Ps,
    zs,
    Dn
  );
}
function ze(e) {
  return Mt(
    e,
    !0,
    Ls,
    Us,
    Tn
  );
}
function Mt(e, t, n, o, s) {
  if (!A(e))
    return process.env.NODE_ENV !== "production" && xe(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = s.get(e);
  if (l)
    return l;
  const r = qs(e);
  if (r === 0)
    return e;
  const a = new Proxy(
    e,
    r === 2 ? o : n
  );
  return s.set(e, a), a;
}
function _e(e) {
  return Ie(e) ? _e(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ie(e) {
  return !!(e && e.__v_isReadonly);
}
function Et(e) {
  return !!(e && e.__v_isShallow);
}
function wt(e) {
  return _e(e) || Ie(e);
}
function v(e) {
  const t = e && e.__v_raw;
  return t ? v(t) : e;
}
function Js(e) {
  return Object.isExtensible(e) && Es(e, "__v_skip", !0), e;
}
const xt = (e) => A(e) ? Mn(e) : e, It = (e) => A(e) ? xn(e) : e;
function j(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ys(e) {
  return j(e) ? e.value : e;
}
const Qs = {
  get: (e, t, n) => Ys(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return j(s) && !j(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Xs(e) {
  return _e(e) ? e : new Proxy(e, Qs);
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const se = [];
function Zs(e) {
  se.push(e);
}
function eo() {
  se.pop();
}
function S(e, ...t) {
  tt();
  const n = se.length ? se[se.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = to();
  if (o)
    oe(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: l }) => `at <${Gn(n, l.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const l = [`[Vue warn]: ${e}`, ...t];
    s.length && l.push(`
`, ...no(s)), console.warn(...l);
  }
  nt();
}
function to() {
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
function no(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...so(n));
  }), t;
}
function so({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Gn(
    e.component,
    e.type,
    o
  )}`, l = ">" + n;
  return e.props ? [s, ...oo(e.props), l] : [s + l];
}
function oo(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...In(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function In(e, t, n) {
  return L(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : j(t) ? (t = In(e, v(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = v(t), n ? t : [`${e}=`, t]);
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
    kt(s, t, n);
  }
}
function De(e, t, n, o) {
  if (R(e)) {
    const l = oe(e, t, n, o);
    return l && _s(l) && l.catch((r) => {
      kt(r, t, n);
    }), l;
  }
  const s = [];
  for (let l = 0; l < e.length; l++)
    s.push(De(e[l], t, n, o));
  return s;
}
function kt(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let l = t.parent;
    const r = t.proxy, a = process.env.NODE_ENV !== "production" ? $t[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const f = l.ec;
      if (f) {
        for (let y = 0; y < f.length; y++)
          if (f[y](e, r, a) === !1)
            return;
      }
      l = l.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      oe(
        c,
        null,
        10,
        [e, r, a]
      );
      return;
    }
  }
  lo(e, n, s, o);
}
function lo(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = $t[t];
    if (n && Zs(n), S(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && eo(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Je = !1, yt = !1;
const P = [];
let Y = 0;
const ve = [];
let B = null, q = 0;
const $n = /* @__PURE__ */ Promise.resolve();
let Pt = null;
const ro = 100;
function io(e) {
  const t = Pt || $n;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ao(e) {
  let t = Y + 1, n = P.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = P[o], l = $e(s);
    l < e || l === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function Lt(e) {
  (!P.length || !P.includes(
    e,
    Je && e.allowRecurse ? Y + 1 : Y
  )) && (e.id == null ? P.push(e) : P.splice(ao(e.id), 0, e), kn());
}
function kn() {
  !Je && !yt && (yt = !0, Pt = $n.then(Ln));
}
function Pn(e) {
  w(e) ? ve.push(...e) : (!B || !B.includes(
    e,
    e.allowRecurse ? q + 1 : q
  )) && ve.push(e), kn();
}
function co(e) {
  if (ve.length) {
    const t = [...new Set(ve)].sort(
      (n, o) => $e(n) - $e(o)
    );
    if (ve.length = 0, B) {
      B.push(...t);
      return;
    }
    for (B = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), q = 0; q < B.length; q++)
      process.env.NODE_ENV !== "production" && An(e, B[q]) || B[q]();
    B = null, q = 0;
  }
}
const $e = (e) => e.id == null ? 1 / 0 : e.id, uo = (e, t) => {
  const n = $e(e) - $e(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Ln(e) {
  yt = !1, Je = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), P.sort(uo);
  const t = process.env.NODE_ENV !== "production" ? (n) => An(e, n) : fe;
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
    Y = 0, P.length = 0, co(e), Je = !1, Pt = null, (P.length || ve.length) && Ln(e);
  }
}
function An(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > ro) {
      const o = t.ownerInstance, s = o && Wn(o.type);
      return kt(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Ve = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (yn().__VUE_HMR_RUNTIME__ = {
  createRecord: pt(fo),
  rerender: pt(po),
  reload: pt(ho)
});
const Ye = /* @__PURE__ */ new Map();
function fo(e, t) {
  return Ye.has(e) ? !1 : (Ye.set(e, {
    initialDef: Te(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Te(e) {
  return qn(e) ? e.__vccOpts : e;
}
function po(e, t) {
  const n = Ye.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Te(o.type).render = t), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function ho(e, t) {
  const n = Ye.get(e);
  if (!n)
    return;
  t = Te(t), fn(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const l = Te(s.type);
    Ve.has(l) || (l !== n.initialDef && fn(l, t), Ve.add(l)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Ve.add(l), s.ceReload(t.styles), Ve.delete(l)) : s.parent ? (s.parent.effect.dirty = !0, Lt(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
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
function fn(e, t) {
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
let ue, Ue = [];
function jn(e, t) {
  var n, o;
  ue = e, ue ? (ue.enabled = !0, Ue.forEach(({ event: s, args: l }) => ue.emit(s, ...l)), Ue = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((l) => {
    jn(l, t);
  }), setTimeout(() => {
    ue || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ue = []);
  }, 3e3)) : Ue = [];
}
let z = null, _o = null;
const vo = Symbol.for("v-ndc"), mo = (e) => e.__isSuspense;
function go(e, t) {
  t && t.pendingBranch ? w(e) ? t.effects.push(...e) : t.effects.push(e) : Pn(e);
}
const Eo = Symbol.for("v-scx"), wo = () => {
  {
    const e = Io(Eo);
    return e || process.env.NODE_ENV !== "production" && S(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, We = {};
function yo(e, t, {
  immediate: n,
  deep: o,
  flush: s,
  once: l,
  onTrack: r,
  onTrigger: a
} = G) {
  if (t && l) {
    const h = t;
    t = (...we) => {
      h(...we), Ee();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && S(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && S(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && S(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), l !== void 0 && S(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (h) => {
    S(
      "Invalid watch source: ",
      h,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, f = ge, y = (h) => o === !0 ? h : (
    // for deep: false, only traverse root-level properties
    de(h, o === !1 ? 1 : void 0)
  );
  let p, C = !1, I = !1;
  if (j(e) ? (p = () => e.value, C = Et(e)) : _e(e) ? (p = () => y(e), C = !0) : w(e) ? (I = !0, C = e.some((h) => _e(h) || Et(h)), p = () => e.map((h) => {
    if (j(h))
      return h.value;
    if (_e(h))
      return y(h);
    if (R(h))
      return oe(h, f, 2);
    process.env.NODE_ENV !== "production" && c(h);
  })) : R(e) ? t ? p = () => oe(e, f, 2) : p = () => (_ && _(), De(
    e,
    f,
    3,
    [X]
  )) : (p = fe, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const h = p;
    p = () => de(h());
  }
  let _, X = (h) => {
    _ = b.onStop = () => {
      oe(h, f, 4), _ = b.onStop = void 0;
    };
  }, F;
  if (jt)
    if (X = fe, t ? n && De(t, f, 3, [
      p(),
      I ? [] : void 0,
      X
    ]) : p(), s === "sync") {
      const h = wo();
      F = h.__watcherHandles || (h.__watcherHandles = []);
    } else
      return fe;
  let D = I ? new Array(e.length).fill(We) : We;
  const $ = () => {
    if (!(!b.active || !b.dirty))
      if (t) {
        const h = b.run();
        (o || C || (I ? h.some((we, ot) => me(we, D[ot])) : me(h, D))) && (_ && _(), De(t, f, 3, [
          h,
          // pass undefined as the old value when it's changed for the first time
          D === We ? void 0 : I && D[0] === We ? [] : D,
          X
        ]), D = h);
      } else
        b.run();
  };
  $.allowRecurse = !!t;
  let k;
  s === "sync" ? k = $ : s === "post" ? k = () => mn($, f && f.suspense) : ($.pre = !0, f && ($.id = f.uid), k = () => Lt($));
  const b = new Vs(p, fe, k), Ee = () => {
    b.stop();
  };
  return process.env.NODE_ENV !== "production" && (b.onTrack = r, b.onTrigger = a), t ? n ? $() : D = b.run() : s === "post" ? mn(
    b.run.bind(b),
    f && f.suspense
  ) : b.run(), F && F.push(Ee), Ee;
}
function So(e, t, n) {
  const o = this.proxy, s = L(e) ? e.includes(".") ? bo(o, e) : () => o[e] : e.bind(o, o);
  let l;
  R(t) ? l = t : (l = t.handler, n = t);
  const r = Un(this), a = yo(s, l.bind(o), n);
  return r(), a;
}
function bo(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function de(e, t, n = 0, o) {
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
    de(e.value, t, n, o);
  else if (w(e))
    for (let s = 0; s < e.length; s++)
      de(e[s], t, n, o);
  else if (hs(e) || he(e))
    e.forEach((s) => {
      de(s, t, n, o);
    });
  else if (ms(e))
    for (const s in e)
      de(e[s], t, n, o);
  return e;
}
function Oo(e, t, n = ge, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...r) => {
      if (n.isUnmounted)
        return;
      tt();
      const a = Un(n), c = De(t, n, e, r);
      return a(), nt(), c;
    });
    return o ? s.unshift(l) : s.push(l), l;
  } else if (process.env.NODE_ENV !== "production") {
    const s = gs($t[e].replace(/ hook$/, ""));
    S(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const No = (e) => (t, n = ge) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!jt || e === "sp") && Oo(e, (...o) => t(...o), n)
), Vo = No("bum"), St = (e) => e ? zo(e) ? Uo(e) || e.proxy : St(e.parent) : null, Me = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ H(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? ze(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? ze(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? ze(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? ze(e.refs) : e.refs,
    $parent: (e) => St(e.parent),
    $root: (e) => St(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Do(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Lt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = io.bind(e.proxy)),
    $watch: (e) => So.bind(e)
  })
), Ro = (e) => e === "_" || e === "$", ht = (e, t) => e !== G && !e.__isScriptSetup && N(e, t), Co = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: l, accessCache: r, type: a, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let f;
    if (t[0] !== "$") {
      const I = r[t];
      if (I !== void 0)
        switch (I) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return l[t];
        }
      else {
        if (ht(o, t))
          return r[t] = 1, o[t];
        if (s !== G && N(s, t))
          return r[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (f = e.propsOptions[0]) && N(f, t)
        )
          return r[t] = 3, l[t];
        if (n !== G && N(n, t))
          return r[t] = 4, n[t];
        r[t] = 0;
      }
    }
    const y = Me[t];
    let p, C;
    if (y)
      return t === "$attrs" ? (x(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && x(e, "get", t), y(e);
    if (
      // css module (injected by vue-loader)
      (p = a.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== G && N(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      C = c.config.globalProperties, N(C, t)
    )
      return C[t];
    process.env.NODE_ENV !== "production" && z && (!L(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== G && Ro(t[0]) && N(s, t) ? S(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === z && S(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: l } = e;
    return ht(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && N(s, t) ? (S(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== G && N(o, t) ? (o[t] = n, !0) : N(e.props, t) ? (process.env.NODE_ENV !== "production" && S(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && S(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(l, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: l }
  }, r) {
    let a;
    return !!n[r] || e !== G && N(e, r) || ht(t, r) || (a = l[0]) && N(a, r) || N(o, r) || N(Me, r) || N(s.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Co.ownKeys = (e) => (S(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function dn(e) {
  return w(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Do(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: l,
    config: { optionMergeStrategies: r }
  } = e.appContext, a = l.get(t);
  let c;
  return a ? c = a : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(
    (f) => Qe(c, f, r, !0)
  ), Qe(c, t, r)), A(t) && l.set(t, c), c;
}
function Qe(e, t, n, o = !1) {
  const { mixins: s, extends: l } = t;
  l && Qe(e, l, n, !0), s && s.forEach(
    (r) => Qe(e, r, n, !0)
  );
  for (const r in t)
    if (o && r === "expose")
      process.env.NODE_ENV !== "production" && S(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = To[r] || n && n[r];
      e[r] = a ? a(e[r], t[r]) : t[r];
    }
  return e;
}
const To = {
  data: pn,
  props: _n,
  emits: _n,
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
  watch: xo,
  // provide / inject
  provide: pn,
  inject: Mo
};
function pn(e, t) {
  return t ? e ? function() {
    return H(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Mo(e, t) {
  return Re(hn(e), hn(t));
}
function hn(e) {
  if (w(e)) {
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
function _n(e, t) {
  return e ? w(e) && w(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : H(
    /* @__PURE__ */ Object.create(null),
    dn(e),
    dn(t ?? {})
  ) : t;
}
function xo(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = H(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = T(e[o], t[o]);
  return n;
}
let vn = null;
function Io(e, t, n = !1) {
  const o = ge || z;
  if (o || vn) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : vn._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && R(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && S(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && S("inject() can only be used inside setup() or functional components.");
}
const mn = go, $o = (e) => e.__isTeleport, Hn = Symbol.for("v-fgt"), ko = Symbol.for("v-txt"), Po = Symbol.for("v-cmt");
let pe = null;
function Lo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Ao = (...e) => Bn(
  ...e
), Fn = "__vInternal", Kn = ({ key: e }) => e ?? null, Ge = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? L(e) || j(e) || R(e) ? { i: z, r: e, k: t, f: !!n } : e : null);
function jo(e, t = null, n = null, o = 0, s = null, l = e === Hn ? 0 : 1, r = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Kn(t),
    ref: t && Ge(t),
    scopeId: _o,
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
    shapeFlag: l,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: z
  };
  return a ? (At(c, n), l & 128 && e.normalize(c)) : n && (c.shapeFlag |= L(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && S("VNode created with invalid key (NaN). VNode type:", c.type), // avoid a block node from tracking itself
  !r && // has current parent block
  pe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && pe.push(c), c;
}
const Ho = process.env.NODE_ENV !== "production" ? Ao : Bn;
function Bn(e, t = null, n = null, o = 0, s = null, l = !1) {
  if ((!e || e === vo) && (process.env.NODE_ENV !== "production" && !e && S(`Invalid vnode type when creating vnode: ${e}.`), e = Po), Lo(e)) {
    const a = Xe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && At(a, n), !l && pe && (a.shapeFlag & 6 ? pe[pe.indexOf(e)] = a : pe.push(a)), a.patchFlag |= -2, a;
  }
  if (qn(e) && (e = e.__vccOpts), t) {
    t = Fo(t);
    let { class: a, style: c } = t;
    a && !L(a) && (t.class = Vt(a)), A(c) && (wt(c) && !w(c) && (c = H({}, c)), t.style = Nt(c));
  }
  const r = L(e) ? 1 : mo(e) ? 128 : $o(e) ? 64 : A(e) ? 4 : R(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && wt(e) && (e = v(e), S(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), jo(
    e,
    t,
    n,
    o,
    s,
    r,
    l,
    !0
  );
}
function Fo(e) {
  return e ? wt(e) || Fn in e ? H({}, e) : e : null;
}
function Xe(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: l, children: r } = e, a = t ? Bo(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Kn(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? w(s) ? s.concat(Ge(t)) : [s, Ge(t)] : Ge(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && l === -1 && w(r) ? r.map(zn) : r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Hn ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && Xe(e.ssContent),
    ssFallback: e.ssFallback && Xe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function zn(e) {
  const t = Xe(e);
  return w(e.children) && (t.children = e.children.map(zn)), t;
}
function Ko(e = " ", t = 0) {
  return Ho(ko, null, e, t);
}
function At(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (w(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), At(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Fn in t) ? t._ctx = z : s === 3 && z && (z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    R(t) ? (t = { default: t, _ctx: z }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Ko(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Bo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = Vt([t.class, o.class]));
      else if (s === "style")
        t.style = Nt([t.style, o.style]);
      else if (ds(s)) {
        const l = t[s], r = o[s];
        r && l !== r && !(w(l) && l.includes(r)) && (t[s] = l ? [].concat(l, r) : r);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
let ge = null, bt;
{
  const e = yn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (l) => {
      s.length > 1 ? s.forEach((r) => r(l)) : s[0](l);
    };
  };
  bt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ge = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => jt = n
  );
}
const Un = (e) => {
  const t = ge;
  return bt(e), e.scope.on(), () => {
    e.scope.off(), bt(t);
  };
};
function zo(e) {
  return e.vnode.shapeFlag & 4;
}
let jt = !1;
function Uo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Xs(Js(e.exposed)), {
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
const Wo = /(?:^|[-_])(\w)/g, Go = (e) => e.replace(Wo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Wn(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Gn(e, t, n = !1) {
  let o = Wn(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (l) => {
      for (const r in l)
        if (l[r] === t)
          return r;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? Go(o) : n ? "App" : "Anonymous";
}
function qn(e) {
  return R(e) && "__vccOpts" in e;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const ce = (...e) => {
  g.debugEnabled && console.info("[LktFieldSelect] ", ...e);
}, Ll = (e = !0) => {
  g.debugEnabled = e;
}, qo = ["innerHTML"], Jo = ["id", "multiple"], Yo = {
  key: 3,
  class: "lkt-field-main lkt-field-main--select"
}, Qo = ["innerHTML"], Xo = /* @__PURE__ */ qe("div", { class: "lkt-field-dropdown-angle" }, [
  /* @__PURE__ */ qe("i", { class: "lkt-field-icon-angle-down" })
], -1), Zo = { key: 0 }, el = ["title"], tl = ["innerHTML"], nl = {
  key: 2,
  class: "lkt-field__select-dropdown"
}, sl = { class: "lkt-field__select-search-container" }, ol = {
  key: 1,
  class: "lkt-field__select-options"
}, ll = ["onClick"], rl = {
  key: 0,
  class: "lkt-field__select-option"
}, il = {
  key: 3,
  class: "lkt-field__state"
}, al = ["title"], cl = ["title"], ul = {
  key: 4,
  class: "lkt-field-select__read"
}, fl = {
  key: 0,
  class: "lkt-field-select-empty"
}, dl = {
  key: 1,
  class: "lkt-field-select-empty"
}, pl = ["innerHTML", "title"], hl = {
  key: 5,
  class: "lkt-field__state"
}, _l = ["title"], vl = {
  key: 5,
  class: "lkt-field-select__read-multiple"
}, ml = { key: 0 }, gl = {
  key: 1,
  class: "lkt-field-select-empty"
}, El = {
  key: 2,
  class: "lkt-field-select-empty"
}, wl = ["title"], yl = ["innerHTML"], Sl = {
  key: 4,
  class: "lkt-field__state"
}, bl = ["title"], Ol = /* @__PURE__ */ ts({
  __name: "LktFieldSelect",
  props: {
    modelValue: { default: "" },
    class: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: en(16) },
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
    noOptionsMessage: { default: us() },
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
    const o = n, s = e, l = ns(), r = M(null), a = M(null), c = M(null), f = M(!s.readMode), y = en(16), p = M(new tn(s.options)), C = M(!1), I = M(s.modelValue), _ = M(s.modelValue), X = M(!1), F = M(!1), D = M(!1), $ = M(p.value.all()), k = M(p.value.all()), b = M("");
    s.closeOnSelect === null ? C.value = s.multiple === !0 : C.value = s.closeOnSelect;
    const Ee = E(() => s.resource !== ""), h = E(() => typeof s.valid == "function" ? s.valid() : s.valid), we = E(() => _.value !== I.value), ot = E(() => {
      const i = ["lkt-field", "lkt-field-select"];
      return s.palette && i.push(`lkt-field--${s.palette}`), we.value && i.push("is-changed"), s.class && i.push(s.class), s.multiple && i.push("is-multiple"), s.disabled && i.push("is-disabled"), s.tags && i.push("with-tags"), s.upperDropdown && !s.choiceDropdown && i.push("lkt-field-select-upper-dropdown"), s.choiceDropdown && i.push("lkt-field-select-choice-dropdown"), s.mandatory && f.value && i.push("is-mandatory-field"), D.value && i.push("has-focus"), s.multiple && f.value && s.multipleDisplayEdition === "count" && i.push("size-sm"), s.multiple && !f.value && s.multipleDisplay === "count" && i.push("size-sm"), i.push(h.value ? "is-valid" : "is-error"), i.push(s.modelValue ? "is-filled" : "is-empty"), i.join(" ");
    }), Jn = E(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplay}`), i.join(" ");
    }), Yn = E(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplayEdition}`), i.join(" ");
    }), Ht = E(() => {
      let i = !1;
      return k.value.forEach((O) => {
        O.value == _.value && (i = !0);
      }), i;
    }), ye = E(() => {
      let i = {};
      return k.value.forEach((O) => {
        O.value == _.value && (i = O);
      }), i;
    }), lt = E(() => {
      let i = "";
      return k.value.forEach((O) => {
        O.value == _.value && (i = O.label);
      }), i;
    }), Ft = E(() => {
      let i = [];
      return s.multiple && k.value.forEach((O) => {
        _.value.forEach((be) => {
          be == O.value && i.push(O);
        });
      }), i;
    }), ke = E(() => Array.isArray(_.value) ? _.value.length : 0), Kt = E(() => s.allowReadModeSwitch || s.reset && Pe.value), Pe = E(() => s.multiple ? _.value.length > 0 : _.value !== ""), Bt = E(() => s.label.startsWith("__:") ? is(s.label.substring(3)) : s.label), le = () => {
      k.value = p.value.all(), $.value = p.value.filter(b.value), F.value = !1, ce("buildVisibleOptions: optionsValue", p.value), ce("buildVisibleOptions: optionsHaystack", k.value), ce("buildVisibleOptions: visibleOptions", $.value);
    }, zt = () => {
      b.value = "", f.value && le();
    }, rt = async () => {
      if (!(!f.value && !s.autoloadResource))
        if (F.value = !1, Ee.value) {
          F.value = !0, s.searchStringResourceParam && (s.resourceData[s.searchStringResourceParam] = b.value);
          const i = await rs(s.resource, s.resourceData);
          p.value.receiveOptions(i.data), le(), o("results", i.data);
        } else
          le();
    }, Ut = () => {
      s.multiple ? (_.value.splice(0, _.value.length), _.value = [...I.value]) : _.value = I.value;
    }, Qn = () => s.modelValue, Se = (i) => {
      f.value && (zt(), it(i), D.value = !D.value, D.value && ft(() => {
        rt(), r.value.focus(), ft(() => {
          r.value.focus();
        });
      }));
    };
    Oe(() => s.readMode, (i) => f.value = !i), Oe(() => s.modelValue, (i) => {
      ce("Updated props.modelValue", i), _.value = i;
    }), Oe(_, (i) => {
      o("update:modelValue", i), o("selected-option", p.value.findByValue(i)), X.value = !0, ft(() => X.value = !1);
    }), Oe(b, le), Oe(() => s.options, (i) => {
      ce("Updated props.options", i, p.value), p.value = new tn(i), le();
    });
    const Wt = (i) => {
      if (s.multiple) {
        let O = _.value.findIndex((be) => be == i.value);
        return typeof O > "u" && (O = -1), O;
      }
      return -1;
    }, Xn = (i) => {
      if (s.multiple) {
        let O = Wt(i);
        O === -1 ? _.value.push(i.value) : _.value.splice(O, 1);
      } else
        _.value = i.value, D.value = !1;
    }, Zn = (i) => s.multiple ? Wt(i) !== -1 : i.value == _.value, it = (i) => {
      if (!c.value.contains(i.target)) {
        zt(), D.value = !1;
        return;
      }
    }, at = (i) => {
      f.value = !f.value, f.value && focus();
    };
    window.addEventListener("click", it), le(), Vo(() => {
      window.removeEventListener("click", it);
    }), t({
      reset: Ut,
      value: Qn
    }), s.autoloadResource && s.resource !== "" && (ce("Auto loading Resource", s.resource, s.resourceData, s.autoloadResource), rt());
    const re = E(() => s.useResourceSlot ? s.useResourceSlot : s.resource), Gt = E(() => g.NO_OPTIONS_MESSAGE), qt = E(() => s.emptyValueText !== "" ? s.emptyValueText : g.emptyValueText), Le = E(() => s.emptyValueSlot !== "" && typeof g.customResourceValueSlots[s.emptyValueSlot] < "u" || g.defaultEmptyValueSlot && typeof g.customResourceValueSlots[g.defaultEmptyValueSlot] < "u"), Jt = E(() => g.customResourceValueSlots[s.emptyValueSlot] ?? g.customResourceValueSlots[g.defaultEmptyValueSlot]), ct = E(() => re.value !== "" && typeof g.customResourceOptionSlots[re.value] < "u"), ut = E(() => g.customResourceOptionSlots[re.value]), Yt = E(() => re.value !== "" && typeof g.customResourceValueSlots[re.value] < "u"), Qt = E(() => g.customResourceValueSlots[re.value]);
    return (i, O) => {
      const be = Xt("lkt-field-text"), es = Xt("lkt-loader");
      return u(), d("div", {
        class: ie(ot.value),
        "data-show-ui": !1,
        ref: (m) => c.value = m
      }, [
        K(l).prefix ? Z(i.$slots, "prefix", { key: 0 }) : V("", !0),
        Bt.value ? (u(), d("label", {
          key: 1,
          innerHTML: Bt.value,
          onClick: Ae(Se, ["stop", "prevent"])
        }, null, 8, qo)) : V("", !0),
        f.value ? (u(), d("select", {
          key: 2,
          ref: (m) => a.value = m,
          id: K(y),
          onFocus: Ae(Se, ["stop", "prevent"]),
          onBlur: Ae(Se, ["stop", "prevent"]),
          multiple: i.multiple,
          style: { height: "0", opacity: "0", width: "0", border: "none" }
        }, null, 40, Jo)) : V("", !0),
        f.value ? (u(), d("div", Yo, [
          i.multiple ? (u(), d("div", {
            key: 1,
            class: "lkt-field__select-value-multiple",
            onClick: Se
          }, [
            i.multipleDisplayEdition === "count" ? (u(), d("div", Zo, ae(ke.value), 1)) : (u(), d("ul", {
              key: 1,
              class: ie(Yn.value)
            }, [
              (u(!0), d(Ne, null, dt(Ft.value, (m) => (u(), d("li", {
                title: m.label
              }, [
                K(l).option ? Z(i.$slots, "option", {
                  key: 0,
                  option: m,
                  data: i.slotData
                }) : ct.value ? (u(), U(ee(ut.value), {
                  key: 1,
                  option: m
                }, null, 8, ["option"])) : (u(), d("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: m.label
                }, null, 8, tl))
              ], 8, el))), 256))
            ], 2))
          ])) : (u(), d("div", {
            key: 0,
            class: "lkt-field__select-value",
            onClick: Se
          }, [
            Pe.value && K(l).option ? Z(i.$slots, "option", {
              key: 0,
              option: ye.value,
              data: i.slotData
            }) : Pe.value && ct.value ? (u(), U(ee(ut.value), {
              key: 1,
              option: ye.value
            }, null, 8, ["option"])) : (u(), d("div", {
              key: 2,
              class: "lkt-field-select__read-value",
              innerHTML: lt.value
            }, null, 8, Qo)),
            Xo
          ])),
          D.value ? (u(), d("div", nl, [
            ss(qe("div", sl, [
              os(be, {
                ref: (m) => r.value = m,
                modelValue: b.value,
                "onUpdate:modelValue": O[0] || (O[0] = (m) => b.value = m),
                placeholder: i.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search",
                onKeyup: rt
              }, null, 8, ["modelValue", "placeholder"])
            ], 512), [
              [ls, i.searchable]
            ]),
            F.value ? (u(), U(es, { key: 0 })) : V("", !0),
            !i.readonly && !F.value ? (u(), d("ul", ol, [
              (u(!0), d(Ne, null, dt($.value, (m) => (u(), d("li", {
                class: ie(["lkt-field__select-option", { "is-active": i.multiple ? Zn(m) : m.value == _.value }]),
                onClick: Ae((Nl) => Xn(m), ["prevent", "stop"])
              }, [
                K(l).option ? Z(i.$slots, "option", {
                  key: 0,
                  option: m,
                  data: i.slotData
                }) : V("", !0),
                ct.value ? (u(), U(ee(ut.value), {
                  key: 1,
                  option: m
                }, null, 8, ["option"])) : (u(), d(Ne, { key: 2 }, [
                  Zt(ae(m.label), 1)
                ], 64))
              ], 10, ll))), 256)),
              $.value.length === 0 && (K(l)["no-results"] || Gt.value) ? (u(), d("li", rl, [
                K(l)["no-results"] ? Z(i.$slots, "no-results", { key: 0 }) : (u(), d(Ne, { key: 1 }, [
                  Zt(ae(Gt.value), 1)
                ], 64))
              ])) : V("", !0)
            ])) : V("", !0)
          ])) : V("", !0),
          Kt.value ? (u(), d("div", il, [
            s.reset && Pe.value ? (u(), d("i", {
              key: 0,
              class: "lkt-field__reset-icon",
              title: i.resetText,
              onClick: Ut
            }, null, 8, al)) : V("", !0),
            i.allowReadModeSwitch ? (u(), d("i", {
              key: 1,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: at
            }, null, 8, cl)) : V("", !0)
          ])) : V("", !0)
        ])) : V("", !0),
        !f.value && !i.multiple ? (u(), d("div", ul, [
          !Ht.value && Le.value ? (u(), d("div", fl, [
            (u(), U(ee(Jt.value)))
          ])) : !Ht.value && !Le.value ? (u(), d("div", dl, ae(qt.value), 1)) : K(l).value ? Z(i.$slots, "value", {
            key: 2,
            option: ye.value,
            data: i.slotData
          }) : Yt.value ? (u(), U(ee(Qt.value), {
            key: 3,
            option: ye.value
          }, null, 8, ["option"])) : (u(), d("div", {
            key: 4,
            class: ie(["lkt-field-select__read-value", "lkt-field-option option-" + ye.value.value]),
            innerHTML: lt.value,
            title: lt.value
          }, null, 10, pl)),
          Kt.value ? (u(), d("div", hl, [
            i.allowReadModeSwitch ? (u(), d("i", {
              key: 0,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: at
            }, null, 8, _l)) : V("", !0)
          ])) : V("", !0)
        ])) : V("", !0),
        !f.value && i.multiple ? (u(), d("div", vl, [
          i.multipleDisplay === "count" ? (u(), d("div", ml, ae(ke.value), 1)) : ke.value === 0 && Le.value ? (u(), d("div", gl, [
            (u(), U(ee(Jt.value)))
          ])) : ke.value === 0 && !Le.value ? (u(), d("div", El, ae(qt.value), 1)) : (u(), d("ul", {
            key: 3,
            class: ie(Jn.value)
          }, [
            (u(!0), d(Ne, null, dt(Ft.value, (m) => (u(), d("li", {
              title: m.label,
              class: ie("lkt-field-option option-" + m.value)
            }, [
              K(l).value ? Z(i.$slots, "value", {
                key: 0,
                option: m,
                data: i.slotData
              }) : Yt.value ? (u(), U(ee(Qt.value), {
                key: 1,
                option: m,
                data: i.slotData
              }, null, 8, ["option", "data"])) : (u(), d("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: m.label
              }, null, 8, yl))
            ], 10, wl))), 256))
          ], 2)),
          i.allowReadModeSwitch ? (u(), d("div", Sl, [
            qe("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: at
            }, null, 8, bl)
          ])) : V("", !0)
        ])) : V("", !0)
      ], 2);
    };
  }
}), Al = {
  install: (e) => {
    e.component("lkt-field-select") === void 0 && e.component("lkt-field-select", Ol), e.component("lkt-loader") === void 0 && e.use(as), e.component("lkt-field-text") === void 0 && e.use(cs);
  }
};
export {
  Ll as debugLktFieldSelect,
  Al as default,
  Pl as setDefaultSelectEmptyValueSlot,
  xl as setNoOptionsMessage,
  $l as setResourceOptionSlot,
  kl as setResourceValueSlot,
  Il as setSelectEmptyValueMessage
};
