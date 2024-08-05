import { defineComponent as os, useSlots as ls, ref as T, computed as E, watch as Oe, nextTick as dt, onMounted as rs, resolveComponent as Zt, openBlock as u, createElementBlock as d, normalizeClass as ae, unref as z, renderSlot as Z, createCommentVNode as V, withModifiers as Ae, createBlock as U, resolveDynamicComponent as ee, toDisplayString as ce, Fragment as Ne, renderList as pt, normalizeStyle as is, withDirectives as as, createElementVNode as qe, createVNode as cs, vShow as us, createTextVNode as en } from "vue";
import { generateRandomString as tn } from "lkt-string-tools";
import { httpCall as fs } from "lkt-http-client";
import { __ as ds } from "lkt-i18n";
import ps from "lkt-loader";
import hs from "lkt-field-text";
const J = class J {
};
J.debugEnabled = !1, J.NO_OPTIONS_MESSAGE = "", J.emptyValueText = "", J.defaultEmptyValueSlot = "", J.customResourceOptionSlots = {}, J.customResourceValueSlots = {};
let g = J;
const _s = () => g.NO_OPTIONS_MESSAGE, kl = (e) => (g.NO_OPTIONS_MESSAGE = e, !0), Pl = (e) => (g.emptyValueText = e, !0), Ll = (e, t) => (g.customResourceOptionSlots[e] = t, !0), Al = (e, t) => (g.customResourceValueSlots[e] = t, !0), jl = (e, t) => {
  g.defaultEmptyValueSlot = e, t && (g.customResourceValueSlots[e] = t);
};
class nn {
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
function vs(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const G = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const de = () => {
}, ms = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), H = Object.assign, gs = Object.prototype.hasOwnProperty, N = (e, t) => gs.call(e, t), w = Array.isArray, _e = (e) => et(e) === "[object Map]", Es = (e) => et(e) === "[object Set]", R = (e) => typeof e == "function", L = (e) => typeof e == "string", Ze = (e) => typeof e == "symbol", A = (e) => e !== null && typeof e == "object", ws = (e) => (A(e) || R(e)) && R(e.then) && R(e.catch), ys = Object.prototype.toString, et = (e) => ys.call(e), wn = (e) => et(e).slice(8, -1), Ss = (e) => et(e) === "[object Object]", Nt = (e) => L(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, yn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Sn = yn((e) => e.charAt(0).toUpperCase() + e.slice(1)), bs = yn((e) => e ? `on${Sn(e)}` : ""), ge = (e, t) => !Object.is(e, t), Os = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let sn;
const bn = () => sn || (sn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Vt(e) {
  if (w(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = L(o) ? Cs(o) : Vt(o);
      if (s)
        for (const l in s)
          t[l] = s[l];
    }
    return t;
  } else if (L(e) || A(e))
    return e;
}
const Ns = /;(?![^(]*\))/g, Vs = /:([^]+)/, Rs = /\/\*[^]*?\*\//g;
function Cs(e) {
  const t = {};
  return e.replace(Rs, "").split(Ns).forEach((n) => {
    if (n) {
      const o = n.split(Vs);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Rt(e) {
  let t = "";
  if (L(e))
    t = e;
  else if (w(e))
    for (let n = 0; n < e.length; n++) {
      const o = Rt(e[n]);
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
let Ds;
function Ts(e, t = Ds) {
  t && t.active && t.effects.push(e);
}
let Ce;
class Ms {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Ts(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, tt();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (xs(n.computed), this._dirtyLevel >= 4))
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
      return te = !0, Ce = this, this._runnings++, on(this), this.fn();
    } finally {
      ln(this), this._runnings--, Ce = n, te = t;
    }
  }
  stop() {
    var t;
    this.active && (on(this), ln(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function xs(e) {
  return e.value;
}
function on(e) {
  e._trackId++, e._depsLength = 0;
}
function ln(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      On(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function On(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let te = !0, vt = 0;
const Nn = [];
function tt() {
  Nn.push(te), te = !1;
}
function nt() {
  const e = Nn.pop();
  te = e === void 0 ? !0 : e;
}
function Ct() {
  vt++;
}
function Dt() {
  for (vt--; !vt && mt.length; )
    mt.shift()();
}
function Is(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && On(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, H({ effect: e }, n)));
  }
}
const mt = [];
function $s(e, t, n) {
  var o;
  Ct();
  for (const s of e.keys()) {
    let l;
    s._dirtyLevel < t && (l ?? (l = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (l ?? (l = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, H({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && mt.push(s.scheduler)));
  }
  Dt();
}
const ks = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, gt = /* @__PURE__ */ new WeakMap(), ne = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Et = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function x(e, t, n) {
  if (te && Ce) {
    let o = gt.get(e);
    o || gt.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = ks(() => o.delete(n))), Is(
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
  const r = gt.get(e);
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
        w(e) ? Nt(n) && a.push(r.get("length")) : (a.push(r.get(ne)), _e(e) && a.push(r.get(Et)));
        break;
      case "delete":
        w(e) || (a.push(r.get(ne)), _e(e) && a.push(r.get(Et)));
        break;
      case "set":
        _e(e) && a.push(r.get(ne));
        break;
    }
  Ct();
  for (const c of a)
    c && $s(
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
  Dt();
}
const Ps = /* @__PURE__ */ vs("__proto__,__v_isRef,__isVue"), Vn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ze)
), rn = /* @__PURE__ */ Ls();
function Ls() {
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
      tt(), Ct();
      const o = v(this)[t].apply(this, n);
      return Dt(), nt(), o;
    };
  }), e;
}
function As(e) {
  const t = v(this);
  return x(t, "has", e), t.hasOwnProperty(e);
}
class Rn {
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
      return o === (s ? l ? xn : Mn : l ? Qs : Tn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const r = w(t);
    if (!s) {
      if (r && N(rn, n))
        return Reflect.get(rn, n, o);
      if (n === "hasOwnProperty")
        return As;
    }
    const a = Reflect.get(t, n, o);
    return (Ze(n) ? Vn.has(n) : Ps(n)) || (s || x(t, "get", n), l) ? a : j(a) ? r && Nt(n) ? a : a.value : A(a) ? s ? $n(a) : In(a) : a;
  }
}
class js extends Rn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let l = t[n];
    if (!this._isShallow) {
      const c = Ie(l);
      if (!wt(o) && !Ie(o) && (l = v(l), o = v(o)), !w(t) && j(l) && !j(o))
        return c ? !1 : (l.value = o, !0);
    }
    const r = w(t) && Nt(n) ? Number(n) < t.length : N(t, n), a = Reflect.set(t, n, o, s);
    return t === v(s) && (r ? ge(o, l) && Q(t, "set", n, o, l) : Q(t, "add", n, o)), a;
  }
  deleteProperty(t, n) {
    const o = N(t, n), s = t[n], l = Reflect.deleteProperty(t, n);
    return l && o && Q(t, "delete", n, void 0, s), l;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Ze(n) || !Vn.has(n)) && x(t, "has", n), o;
  }
  ownKeys(t) {
    return x(
      t,
      "iterate",
      w(t) ? "length" : ne
    ), Reflect.ownKeys(t);
  }
}
class Cn extends Rn {
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
const Hs = /* @__PURE__ */ new js(), Fs = /* @__PURE__ */ new Cn(), zs = /* @__PURE__ */ new Cn(!0), Tt = (e) => e, st = (e) => Reflect.getPrototypeOf(e);
function je(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = v(e), l = v(t);
  n || (ge(t, l) && x(s, "get", t), x(s, "get", l));
  const { has: r } = st(s), a = o ? Tt : n ? $t : It;
  if (r.call(s, t))
    return a(e.get(t));
  if (r.call(s, l))
    return a(e.get(l));
  e !== s && e.get(t);
}
function He(e, t = !1) {
  const n = this.__v_raw, o = v(n), s = v(e);
  return t || (ge(e, s) && x(o, "has", e), x(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Fe(e, t = !1) {
  return e = e.__v_raw, !t && x(v(e), "iterate", ne), Reflect.get(e, "size", e);
}
function an(e) {
  e = v(e);
  const t = v(this);
  return st(t).has.call(t, e) || (t.add(e), Q(t, "add", e, e)), this;
}
function cn(e, t) {
  t = v(t);
  const n = v(this), { has: o, get: s } = st(n);
  let l = o.call(n, e);
  l ? process.env.NODE_ENV !== "production" && Dn(n, o, e) : (e = v(e), l = o.call(n, e));
  const r = s.call(n, e);
  return n.set(e, t), l ? ge(t, r) && Q(n, "set", e, t, r) : Q(n, "add", e, t), this;
}
function un(e) {
  const t = v(this), { has: n, get: o } = st(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && Dn(t, n, e) : (e = v(e), s = n.call(t, e));
  const l = o ? o.call(t, e) : void 0, r = t.delete(e);
  return s && Q(t, "delete", e, void 0, l), r;
}
function fn() {
  const e = v(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? _e(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Q(e, "clear", void 0, void 0, n), o;
}
function ze(e, t) {
  return function(o, s) {
    const l = this, r = l.__v_raw, a = v(r), c = t ? Tt : e ? $t : It;
    return !e && x(a, "iterate", ne), r.forEach((f, y) => o.call(s, c(f), c(y), l));
  };
}
function Be(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, l = v(s), r = _e(l), a = e === "entries" || e === Symbol.iterator && r, c = e === "keys" && r, f = s[e](...o), y = n ? Tt : t ? $t : It;
    return !t && x(
      l,
      "iterate",
      c ? Et : ne
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
        `${Sn(e)} operation ${n}failed: target is readonly.`,
        v(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Bs() {
  const e = {
    get(l) {
      return je(this, l);
    },
    get size() {
      return Fe(this);
    },
    has: He,
    add: an,
    set: cn,
    delete: un,
    clear: fn,
    forEach: ze(!1, !1)
  }, t = {
    get(l) {
      return je(this, l, !1, !0);
    },
    get size() {
      return Fe(this);
    },
    has: He,
    add: an,
    set: cn,
    delete: un,
    clear: fn,
    forEach: ze(!1, !0)
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
    forEach: ze(!0, !1)
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
    forEach: ze(!0, !0)
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
  Ks,
  Us,
  Ws,
  Gs
] = /* @__PURE__ */ Bs();
function Mt(e, t) {
  const n = t ? e ? Gs : Ws : e ? Us : Ks;
  return (o, s, l) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    N(n, s) && s in o ? n : o,
    s,
    l
  );
}
const qs = {
  get: /* @__PURE__ */ Mt(!1, !1)
}, Js = {
  get: /* @__PURE__ */ Mt(!0, !1)
}, Ys = {
  get: /* @__PURE__ */ Mt(!0, !0)
};
function Dn(e, t, n) {
  const o = v(n);
  if (o !== n && t.call(e, o)) {
    const s = wn(e);
    xe(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Tn = /* @__PURE__ */ new WeakMap(), Qs = /* @__PURE__ */ new WeakMap(), Mn = /* @__PURE__ */ new WeakMap(), xn = /* @__PURE__ */ new WeakMap();
function Xs(e) {
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
function Zs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Xs(wn(e));
}
function In(e) {
  return Ie(e) ? e : xt(
    e,
    !1,
    Hs,
    qs,
    Tn
  );
}
function $n(e) {
  return xt(
    e,
    !0,
    Fs,
    Js,
    Mn
  );
}
function Ke(e) {
  return xt(
    e,
    !0,
    zs,
    Ys,
    xn
  );
}
function xt(e, t, n, o, s) {
  if (!A(e))
    return process.env.NODE_ENV !== "production" && xe(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = s.get(e);
  if (l)
    return l;
  const r = Zs(e);
  if (r === 0)
    return e;
  const a = new Proxy(
    e,
    r === 2 ? o : n
  );
  return s.set(e, a), a;
}
function ve(e) {
  return Ie(e) ? ve(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ie(e) {
  return !!(e && e.__v_isReadonly);
}
function wt(e) {
  return !!(e && e.__v_isShallow);
}
function yt(e) {
  return ve(e) || Ie(e);
}
function v(e) {
  const t = e && e.__v_raw;
  return t ? v(t) : e;
}
function eo(e) {
  return Object.isExtensible(e) && Os(e, "__v_skip", !0), e;
}
const It = (e) => A(e) ? In(e) : e, $t = (e) => A(e) ? $n(e) : e;
function j(e) {
  return !!(e && e.__v_isRef === !0);
}
function to(e) {
  return j(e) ? e.value : e;
}
const no = {
  get: (e, t, n) => to(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return j(s) && !j(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function so(e) {
  return ve(e) ? e : new Proxy(e, no);
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const se = [];
function oo(e) {
  se.push(e);
}
function lo() {
  se.pop();
}
function S(e, ...t) {
  tt();
  const n = se.length ? se[se.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = ro();
  if (o)
    oe(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: l }) => `at <${Jn(n, l.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const l = [`[Vue warn]: ${e}`, ...t];
    s.length && l.push(`
`, ...io(s)), console.warn(...l);
  }
  nt();
}
function ro() {
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
function io(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...ao(n));
  }), t;
}
function ao({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Jn(
    e.component,
    e.type,
    o
  )}`, l = ">" + n;
  return e.props ? [s, ...co(e.props), l] : [s + l];
}
function co(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...kn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function kn(e, t, n) {
  return L(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : j(t) ? (t = kn(e, v(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = v(t), n ? t : [`${e}=`, t]);
}
const kt = {
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
    const l = oe(e, t, n, o);
    return l && ws(l) && l.catch((r) => {
      Pt(r, t, n);
    }), l;
  }
  const s = [];
  for (let l = 0; l < e.length; l++)
    s.push(De(e[l], t, n, o));
  return s;
}
function Pt(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let l = t.parent;
    const r = t.proxy, a = process.env.NODE_ENV !== "production" ? kt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
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
  uo(e, n, s, o);
}
function uo(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = kt[t];
    if (n && oo(n), S(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && lo(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Je = !1, St = !1;
const P = [];
let Y = 0;
const me = [];
let B = null, q = 0;
const Pn = /* @__PURE__ */ Promise.resolve();
let Lt = null;
const fo = 100;
function po(e) {
  const t = Lt || Pn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ho(e) {
  let t = Y + 1, n = P.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = P[o], l = $e(s);
    l < e || l === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function At(e) {
  (!P.length || !P.includes(
    e,
    Je && e.allowRecurse ? Y + 1 : Y
  )) && (e.id == null ? P.push(e) : P.splice(ho(e.id), 0, e), Ln());
}
function Ln() {
  !Je && !St && (St = !0, Lt = Pn.then(jn));
}
function An(e) {
  w(e) ? me.push(...e) : (!B || !B.includes(
    e,
    e.allowRecurse ? q + 1 : q
  )) && me.push(e), Ln();
}
function _o(e) {
  if (me.length) {
    const t = [...new Set(me)].sort(
      (n, o) => $e(n) - $e(o)
    );
    if (me.length = 0, B) {
      B.push(...t);
      return;
    }
    for (B = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), q = 0; q < B.length; q++)
      process.env.NODE_ENV !== "production" && Hn(e, B[q]) || B[q]();
    B = null, q = 0;
  }
}
const $e = (e) => e.id == null ? 1 / 0 : e.id, vo = (e, t) => {
  const n = $e(e) - $e(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function jn(e) {
  St = !1, Je = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), P.sort(vo);
  const t = process.env.NODE_ENV !== "production" ? (n) => Hn(e, n) : de;
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
    Y = 0, P.length = 0, _o(e), Je = !1, Lt = null, (P.length || me.length) && jn(e);
  }
}
function Hn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > fo) {
      const o = t.ownerInstance, s = o && qn(o.type);
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
process.env.NODE_ENV !== "production" && (bn().__VUE_HMR_RUNTIME__ = {
  createRecord: ht(mo),
  rerender: ht(go),
  reload: ht(Eo)
});
const Ye = /* @__PURE__ */ new Map();
function mo(e, t) {
  return Ye.has(e) ? !1 : (Ye.set(e, {
    initialDef: Te(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Te(e) {
  return Yn(e) ? e.__vccOpts : e;
}
function go(e, t) {
  const n = Ye.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Te(o.type).render = t), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function Eo(e, t) {
  const n = Ye.get(e);
  if (!n)
    return;
  t = Te(t), dn(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const l = Te(s.type);
    Ve.has(l) || (l !== n.initialDef && dn(l, t), Ve.add(l)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Ve.add(l), s.ceReload(t.styles), Ve.delete(l)) : s.parent ? (s.parent.effect.dirty = !0, At(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  An(() => {
    for (const s of o)
      Ve.delete(
        Te(s.type)
      );
  });
}
function dn(e, t) {
  H(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ht(e) {
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
let fe, Ue = [];
function Fn(e, t) {
  var n, o;
  fe = e, fe ? (fe.enabled = !0, Ue.forEach(({ event: s, args: l }) => fe.emit(s, ...l)), Ue = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((l) => {
    Fn(l, t);
  }), setTimeout(() => {
    fe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ue = []);
  }, 3e3)) : Ue = [];
}
let K = null, wo = null;
const yo = Symbol.for("v-ndc"), So = (e) => e.__isSuspense;
function bo(e, t) {
  t && t.pendingBranch ? w(e) ? t.effects.push(...e) : t.effects.push(e) : An(e);
}
const Oo = Symbol.for("v-scx"), No = () => {
  {
    const e = Lo(Oo);
    return e || process.env.NODE_ENV !== "production" && S(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, We = {};
function Vo(e, t, {
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
      h(...we), le();
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
  }, f = Ee, y = (h) => o === !0 ? h : (
    // for deep: false, only traverse root-level properties
    pe(h, o === !1 ? 1 : void 0)
  );
  let p, C = !1, I = !1;
  if (j(e) ? (p = () => e.value, C = wt(e)) : ve(e) ? (p = () => y(e), C = !0) : w(e) ? (I = !0, C = e.some((h) => ve(h) || wt(h)), p = () => e.map((h) => {
    if (j(h))
      return h.value;
    if (ve(h))
      return y(h);
    if (R(h))
      return oe(h, f, 2);
    process.env.NODE_ENV !== "production" && c(h);
  })) : R(e) ? t ? p = () => oe(e, f, 2) : p = () => (_ && _(), De(
    e,
    f,
    3,
    [X]
  )) : (p = de, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const h = p;
    p = () => pe(h());
  }
  let _, X = (h) => {
    _ = b.onStop = () => {
      oe(h, f, 4), _ = b.onStop = void 0;
    };
  }, F;
  if (Ht)
    if (X = de, t ? n && De(t, f, 3, [
      p(),
      I ? [] : void 0,
      X
    ]) : p(), s === "sync") {
      const h = No();
      F = h.__watcherHandles || (h.__watcherHandles = []);
    } else
      return de;
  let D = I ? new Array(e.length).fill(We) : We;
  const $ = () => {
    if (!(!b.active || !b.dirty))
      if (t) {
        const h = b.run();
        (o || C || (I ? h.some((we, ot) => ge(we, D[ot])) : ge(h, D))) && (_ && _(), De(t, f, 3, [
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
  s === "sync" ? k = $ : s === "post" ? k = () => En($, f && f.suspense) : ($.pre = !0, f && ($.id = f.uid), k = () => At($));
  const b = new Ms(p, de, k), le = () => {
    b.stop();
  };
  return process.env.NODE_ENV !== "production" && (b.onTrack = r, b.onTrigger = a), t ? n ? $() : D = b.run() : s === "post" ? En(
    b.run.bind(b),
    f && f.suspense
  ) : b.run(), F && F.push(le), le;
}
function Ro(e, t, n) {
  const o = this.proxy, s = L(e) ? e.includes(".") ? Co(o, e) : () => o[e] : e.bind(o, o);
  let l;
  R(t) ? l = t : (l = t.handler, n = t);
  const r = Gn(this), a = Vo(s, l.bind(o), n);
  return r(), a;
}
function Co(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function pe(e, t, n = 0, o) {
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
    pe(e.value, t, n, o);
  else if (w(e))
    for (let s = 0; s < e.length; s++)
      pe(e[s], t, n, o);
  else if (Es(e) || _e(e))
    e.forEach((s) => {
      pe(s, t, n, o);
    });
  else if (Ss(e))
    for (const s in e)
      pe(e[s], t, n, o);
  return e;
}
function Do(e, t, n = Ee, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...r) => {
      if (n.isUnmounted)
        return;
      tt();
      const a = Gn(n), c = De(t, n, e, r);
      return a(), nt(), c;
    });
    return o ? s.unshift(l) : s.push(l), l;
  } else if (process.env.NODE_ENV !== "production") {
    const s = bs(kt[e].replace(/ hook$/, ""));
    S(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const To = (e) => (t, n = Ee) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Ht || e === "sp") && Do(e, (...o) => t(...o), n)
), pn = To("bum"), bt = (e) => e ? qo(e) ? Jo(e) || e.proxy : bt(e.parent) : null, Me = (
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
    $parent: (e) => bt(e.parent),
    $root: (e) => bt(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Io(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, At(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = po.bind(e.proxy)),
    $watch: (e) => Ro.bind(e)
  })
), Mo = (e) => e === "_" || e === "$", _t = (e, t) => e !== G && !e.__isScriptSetup && N(e, t), xo = {
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
        if (_t(o, t))
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
    process.env.NODE_ENV !== "production" && K && (!L(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== G && Mo(t[0]) && N(s, t) ? S(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === K && S(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: l } = e;
    return _t(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && N(s, t) ? (S(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== G && N(o, t) ? (o[t] = n, !0) : N(e.props, t) ? (process.env.NODE_ENV !== "production" && S(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && S(
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
    return !!n[r] || e !== G && N(e, r) || _t(t, r) || (a = l[0]) && N(a, r) || N(o, r) || N(Me, r) || N(s.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (xo.ownKeys = (e) => (S(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function hn(e) {
  return w(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Io(e) {
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
      const a = $o[r] || n && n[r];
      e[r] = a ? a(e[r], t[r]) : t[r];
    }
  return e;
}
const $o = {
  data: _n,
  props: mn,
  emits: mn,
  // objects
  methods: Re,
  computed: Re,
  // lifecycle
  beforeCreate: M,
  created: M,
  beforeMount: M,
  mounted: M,
  beforeUpdate: M,
  updated: M,
  beforeDestroy: M,
  beforeUnmount: M,
  destroyed: M,
  unmounted: M,
  activated: M,
  deactivated: M,
  errorCaptured: M,
  serverPrefetch: M,
  // assets
  components: Re,
  directives: Re,
  // watch
  watch: Po,
  // provide / inject
  provide: _n,
  inject: ko
};
function _n(e, t) {
  return t ? e ? function() {
    return H(
      R(e) ? e.call(this, this) : e,
      R(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ko(e, t) {
  return Re(vn(e), vn(t));
}
function vn(e) {
  if (w(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function M(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Re(e, t) {
  return e ? H(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function mn(e, t) {
  return e ? w(e) && w(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : H(
    /* @__PURE__ */ Object.create(null),
    hn(e),
    hn(t ?? {})
  ) : t;
}
function Po(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = H(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = M(e[o], t[o]);
  return n;
}
let gn = null;
function Lo(e, t, n = !1) {
  const o = Ee || K;
  if (o || gn) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : gn._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && R(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && S(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && S("inject() can only be used inside setup() or functional components.");
}
const En = bo, Ao = (e) => e.__isTeleport, zn = Symbol.for("v-fgt"), jo = Symbol.for("v-txt"), Ho = Symbol.for("v-cmt");
let he = null;
function Fo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const zo = (...e) => Un(
  ...e
), Bn = "__vInternal", Kn = ({ key: e }) => e ?? null, Ge = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? L(e) || j(e) || R(e) ? { i: K, r: e, k: t, f: !!n } : e : null);
function Bo(e, t = null, n = null, o = 0, s = null, l = e === zn ? 0 : 1, r = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Kn(t),
    ref: t && Ge(t),
    scopeId: wo,
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
    ctx: K
  };
  return a ? (jt(c, n), l & 128 && e.normalize(c)) : n && (c.shapeFlag |= L(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && S("VNode created with invalid key (NaN). VNode type:", c.type), // avoid a block node from tracking itself
  !r && // has current parent block
  he && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && he.push(c), c;
}
const Ko = process.env.NODE_ENV !== "production" ? zo : Un;
function Un(e, t = null, n = null, o = 0, s = null, l = !1) {
  if ((!e || e === yo) && (process.env.NODE_ENV !== "production" && !e && S(`Invalid vnode type when creating vnode: ${e}.`), e = Ho), Fo(e)) {
    const a = Xe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && jt(a, n), !l && he && (a.shapeFlag & 6 ? he[he.indexOf(e)] = a : he.push(a)), a.patchFlag |= -2, a;
  }
  if (Yn(e) && (e = e.__vccOpts), t) {
    t = Uo(t);
    let { class: a, style: c } = t;
    a && !L(a) && (t.class = Rt(a)), A(c) && (yt(c) && !w(c) && (c = H({}, c)), t.style = Vt(c));
  }
  const r = L(e) ? 1 : So(e) ? 128 : Ao(e) ? 64 : A(e) ? 4 : R(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && r & 4 && yt(e) && (e = v(e), S(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Bo(
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
function Uo(e) {
  return e ? yt(e) || Bn in e ? H({}, e) : e : null;
}
function Xe(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: l, children: r } = e, a = t ? Go(o || {}, t) : o;
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
    children: process.env.NODE_ENV !== "production" && l === -1 && w(r) ? r.map(Wn) : r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== zn ? l === -1 ? 16 : l | 16 : l,
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
function Wn(e) {
  const t = Xe(e);
  return w(e.children) && (t.children = e.children.map(Wn)), t;
}
function Wo(e = " ", t = 0) {
  return Ko(jo, null, e, t);
}
function jt(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (w(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), jt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Bn in t) ? t._ctx = K : s === 3 && K && (K.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    R(t) ? (t = { default: t, _ctx: K }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Wo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Go(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = Rt([t.class, o.class]));
      else if (s === "style")
        t.style = Vt([t.style, o.style]);
      else if (ms(s)) {
        const l = t[s], r = o[s];
        r && l !== r && !(w(l) && l.includes(r)) && (t[s] = l ? [].concat(l, r) : r);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
let Ee = null, Ot;
{
  const e = bn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (l) => {
      s.length > 1 ? s.forEach((r) => r(l)) : s[0](l);
    };
  };
  Ot = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ee = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Ht = n
  );
}
const Gn = (e) => {
  const t = Ee;
  return Ot(e), e.scope.on(), () => {
    e.scope.off(), Ot(t);
  };
};
function qo(e) {
  return e.vnode.shapeFlag & 4;
}
let Ht = !1;
function Jo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(so(eo(e.exposed)), {
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
const Yo = /(?:^|[-_])(\w)/g, Qo = (e) => e.replace(Yo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function qn(e, t = !0) {
  return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Jn(e, t, n = !1) {
  let o = qn(t);
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
  return o ? Qo(o) : n ? "App" : "Anonymous";
}
function Yn(e) {
  return R(e) && "__vccOpts" in e;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const ue = (...e) => {
  g.debugEnabled && console.info("[LktFieldSelect] ", ...e);
}, Hl = (e = !0) => {
  g.debugEnabled = e;
}, Xo = ["innerHTML"], Zo = {
  key: 2,
  class: "lkt-field-main lkt-field-main--select"
}, el = ["id", "multiple"], tl = ["innerHTML"], nl = /* @__PURE__ */ qe("div", { class: "lkt-field-dropdown-angle" }, [
  /* @__PURE__ */ qe("i", { class: "lkt-field-icon-angle-down" })
], -1), sl = { key: 0 }, ol = ["title"], ll = ["innerHTML"], rl = { class: "lkt-field__select-search-container" }, il = {
  key: 1,
  class: "lkt-field__select-options"
}, al = ["onClick"], cl = {
  key: 0,
  class: "lkt-field__select-option"
}, ul = {
  key: 4,
  class: "lkt-field__state"
}, fl = ["title"], dl = ["title"], pl = {
  key: 3,
  class: "lkt-field-select__read"
}, hl = {
  key: 0,
  class: "lkt-field-select-empty"
}, _l = {
  key: 1,
  class: "lkt-field-select-empty"
}, vl = ["innerHTML", "title"], ml = {
  key: 5,
  class: "lkt-field__state"
}, gl = ["title"], El = {
  key: 4,
  class: "lkt-field-select__read-multiple"
}, wl = { key: 0 }, yl = {
  key: 1,
  class: "lkt-field-select-empty"
}, Sl = {
  key: 2,
  class: "lkt-field-select-empty"
}, bl = ["title"], Ol = ["innerHTML"], Nl = {
  key: 4,
  class: "lkt-field__state"
}, Vl = ["title"], Rl = /* @__PURE__ */ os({
  __name: "LktFieldSelect",
  props: {
    modelValue: { default: "" },
    class: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: tn(16) },
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
    noOptionsMessage: { default: _s() },
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
    const o = n, s = e, l = ls(), r = T(null), a = T(null), c = T(null), f = T(!s.readMode), y = tn(16), p = T(new nn(s.options)), C = T(!1), I = T(s.modelValue), _ = T(s.modelValue), X = T(!1), F = T(!1), D = T(!1), $ = T(p.value.all()), k = T(p.value.all()), b = T(""), le = T("");
    s.closeOnSelect === null ? C.value = s.multiple === !0 : C.value = s.closeOnSelect;
    const h = E(() => s.resource !== ""), we = E(() => typeof s.valid == "function" ? s.valid() : s.valid), ot = E(() => _.value !== I.value), Qn = E(() => {
      const i = ["lkt-field", "lkt-field-select"];
      return s.palette && i.push(`lkt-field--${s.palette}`), ot.value && i.push("is-changed"), s.class && i.push(s.class), s.multiple && i.push("is-multiple"), s.disabled && i.push("is-disabled"), s.tags && i.push("with-tags"), s.upperDropdown && !s.choiceDropdown && i.push("lkt-field-select-upper-dropdown"), s.choiceDropdown && i.push("lkt-field-select-choice-dropdown"), s.mandatory && f.value && i.push("is-mandatory-field"), D.value && i.push("has-focus"), s.multiple && f.value && s.multipleDisplayEdition === "count" && i.push("size-sm"), s.multiple && !f.value && s.multipleDisplay === "count" && i.push("size-sm"), i.push(we.value ? "is-valid" : "is-error"), i.push(s.modelValue ? "is-filled" : "is-empty"), i.join(" ");
    }), Xn = E(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplay}`), i.join(" ");
    }), Zn = E(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplayEdition}`), i.join(" ");
    }), Ft = E(() => {
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
    }), zt = E(() => {
      let i = [];
      return s.multiple && k.value.forEach((O) => {
        _.value.forEach((be) => {
          be == O.value && i.push(O);
        });
      }), i;
    }), ke = E(() => Array.isArray(_.value) ? _.value.length : 0), Bt = E(() => s.allowReadModeSwitch || s.reset && Pe.value), Pe = E(() => s.multiple ? _.value.length > 0 : _.value !== ""), Kt = E(() => s.label.startsWith("__:") ? ds(s.label.substring(3)) : s.label), rt = () => {
      const i = c.value.getBoundingClientRect();
      le.value = [
        "position: fixed",
        "transform: none",
        "top: " + (i.top + c.value.offsetHeight) + "px",
        "left: " + i.left + "px",
        "width: " + c.value.offsetWidth + "px"
      ].join(";"), console.log("rect: ", i);
    }, re = () => {
      k.value = p.value.all(), $.value = p.value.filter(b.value), F.value = !1, ue("buildVisibleOptions: optionsValue", p.value), ue("buildVisibleOptions: optionsHaystack", k.value), ue("buildVisibleOptions: visibleOptions", $.value);
    }, Ut = () => {
      b.value = "", f.value && re();
    }, it = async () => {
      if (!(!f.value && !s.autoloadResource))
        if (F.value = !1, h.value) {
          F.value = !0, s.searchStringResourceParam && (s.resourceData[s.searchStringResourceParam] = b.value);
          const i = await fs(s.resource, s.resourceData);
          p.value.receiveOptions(i.data), re(), o("results", i.data);
        } else
          re();
    }, Wt = () => {
      s.multiple ? (_.value.splice(0, _.value.length), _.value = [...I.value]) : _.value = I.value;
    }, es = () => s.modelValue, Se = (i) => {
      f.value && (Ut(), at(i), rt(), D.value = !D.value, D.value && dt(() => {
        it(), r.value.focus(), dt(() => {
          r.value.focus();
        });
      }));
    };
    Oe(() => s.readMode, (i) => f.value = !i), Oe(() => s.modelValue, (i) => {
      ue("Updated props.modelValue", i), _.value = i;
    }), Oe(_, (i) => {
      o("update:modelValue", i), o("selected-option", p.value.findByValue(i)), X.value = !0, dt(() => X.value = !1);
    }), Oe(b, re), Oe(() => s.options, (i) => {
      ue("Updated props.options", i, p.value), p.value = new nn(i), re();
    });
    const Gt = (i) => {
      if (s.multiple) {
        let O = _.value.findIndex((be) => be == i.value);
        return typeof O > "u" && (O = -1), O;
      }
      return -1;
    }, ts = (i) => {
      if (s.multiple) {
        let O = Gt(i);
        O === -1 ? _.value.push(i.value) : _.value.splice(O, 1);
      } else
        _.value = i.value, D.value = !1;
    }, ns = (i) => s.multiple ? Gt(i) !== -1 : i.value == _.value, at = (i) => {
      if (!c.value.contains(i.target)) {
        Ut(), D.value = !1;
        return;
      }
    }, ct = (i) => {
      f.value = !f.value, f.value && focus();
    };
    window.addEventListener("click", at), re(), pn(() => {
      window.removeEventListener("click", at);
    }), t({
      reset: Wt,
      value: es
    }), s.autoloadResource && s.resource !== "" && (ue("Auto loading Resource", s.resource, s.resourceData, s.autoloadResource), it());
    const ie = E(() => s.useResourceSlot ? s.useResourceSlot : s.resource), qt = E(() => g.NO_OPTIONS_MESSAGE), Jt = E(() => s.emptyValueText !== "" ? s.emptyValueText : g.emptyValueText), Le = E(() => s.emptyValueSlot !== "" && typeof g.customResourceValueSlots[s.emptyValueSlot] < "u" || g.defaultEmptyValueSlot && typeof g.customResourceValueSlots[g.defaultEmptyValueSlot] < "u"), Yt = E(() => g.customResourceValueSlots[s.emptyValueSlot] ?? g.customResourceValueSlots[g.defaultEmptyValueSlot]), ut = E(() => ie.value !== "" && typeof g.customResourceOptionSlots[ie.value] < "u"), ft = E(() => g.customResourceOptionSlots[ie.value]), Qt = E(() => ie.value !== "" && typeof g.customResourceValueSlots[ie.value] < "u"), Xt = E(() => g.customResourceValueSlots[ie.value]);
    return rs(() => {
      window.addEventListener("scroll", rt);
    }), pn(() => {
      window.removeEventListener("scroll", rt);
    }), (i, O) => {
      const be = Zt("lkt-field-text"), ss = Zt("lkt-loader");
      return u(), d("div", {
        class: ae(Qn.value),
        "data-show-ui": !1,
        ref: (m) => c.value = m
      }, [
        z(l).prefix ? Z(i.$slots, "prefix", { key: 0 }) : V("", !0),
        Kt.value ? (u(), d("label", {
          key: 1,
          innerHTML: Kt.value,
          onClick: Ae(Se, ["stop", "prevent"])
        }, null, 8, Xo)) : V("", !0),
        f.value ? (u(), d("div", Zo, [
          f.value ? (u(), d("select", {
            key: 0,
            ref: (m) => a.value = m,
            id: z(y),
            onFocus: Ae(Se, ["stop", "prevent"]),
            onBlur: Ae(Se, ["stop", "prevent"]),
            multiple: i.multiple,
            style: { height: "0", opacity: "0", width: "0", border: "none", overflow: "hidden", padding: "0" }
          }, null, 40, el)) : V("", !0),
          i.multiple ? (u(), d("div", {
            key: 2,
            class: "lkt-field__select-value-multiple",
            onClick: Se
          }, [
            i.multipleDisplayEdition === "count" ? (u(), d("div", sl, ce(ke.value), 1)) : (u(), d("ul", {
              key: 1,
              class: ae(Zn.value)
            }, [
              (u(!0), d(Ne, null, pt(zt.value, (m) => (u(), d("li", {
                title: m.label
              }, [
                z(l).option ? Z(i.$slots, "option", {
                  key: 0,
                  option: m,
                  data: i.slotData
                }) : ut.value ? (u(), U(ee(ft.value), {
                  key: 1,
                  option: m
                }, null, 8, ["option"])) : (u(), d("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: m.label
                }, null, 8, ll))
              ], 8, ol))), 256))
            ], 2))
          ])) : (u(), d("div", {
            key: 1,
            class: "lkt-field__select-value",
            onClick: Se
          }, [
            Pe.value && z(l).option ? Z(i.$slots, "option", {
              key: 0,
              option: ye.value,
              data: i.slotData
            }) : Pe.value && ut.value ? (u(), U(ee(ft.value), {
              key: 1,
              option: ye.value
            }, null, 8, ["option"])) : (u(), d("div", {
              key: 2,
              class: "lkt-field-select__read-value",
              innerHTML: lt.value
            }, null, 8, tl)),
            nl
          ])),
          D.value ? (u(), d("div", {
            key: 3,
            class: "lkt-field__select-dropdown",
            style: is(le.value)
          }, [
            as(qe("div", rl, [
              cs(be, {
                ref: (m) => r.value = m,
                modelValue: b.value,
                "onUpdate:modelValue": O[0] || (O[0] = (m) => b.value = m),
                placeholder: i.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search",
                onKeyup: it
              }, null, 8, ["modelValue", "placeholder"])
            ], 512), [
              [us, i.searchable]
            ]),
            F.value ? (u(), U(ss, { key: 0 })) : V("", !0),
            !i.readonly && !F.value ? (u(), d("ul", il, [
              (u(!0), d(Ne, null, pt($.value, (m) => (u(), d("li", {
                class: ae(["lkt-field__select-option", { "is-active": i.multiple ? ns(m) : m.value == _.value }]),
                onClick: Ae((Cl) => ts(m), ["prevent", "stop"])
              }, [
                z(l).option ? Z(i.$slots, "option", {
                  key: 0,
                  option: m,
                  data: i.slotData
                }) : V("", !0),
                ut.value ? (u(), U(ee(ft.value), {
                  key: 1,
                  option: m
                }, null, 8, ["option"])) : (u(), d(Ne, { key: 2 }, [
                  en(ce(m.label), 1)
                ], 64))
              ], 10, al))), 256)),
              $.value.length === 0 && (z(l)["no-results"] || qt.value) ? (u(), d("li", cl, [
                z(l)["no-results"] ? Z(i.$slots, "no-results", { key: 0 }) : (u(), d(Ne, { key: 1 }, [
                  en(ce(qt.value), 1)
                ], 64))
              ])) : V("", !0)
            ])) : V("", !0)
          ], 4)) : V("", !0),
          Bt.value ? (u(), d("div", ul, [
            s.reset && Pe.value ? (u(), d("i", {
              key: 0,
              class: "lkt-field__reset-icon",
              title: i.resetText,
              onClick: Wt
            }, null, 8, fl)) : V("", !0),
            i.allowReadModeSwitch ? (u(), d("i", {
              key: 1,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: ct
            }, null, 8, dl)) : V("", !0)
          ])) : V("", !0)
        ])) : V("", !0),
        !f.value && !i.multiple ? (u(), d("div", pl, [
          !Ft.value && Le.value ? (u(), d("div", hl, [
            (u(), U(ee(Yt.value)))
          ])) : !Ft.value && !Le.value ? (u(), d("div", _l, ce(Jt.value), 1)) : z(l).value ? Z(i.$slots, "value", {
            key: 2,
            option: ye.value,
            data: i.slotData
          }) : Qt.value ? (u(), U(ee(Xt.value), {
            key: 3,
            option: ye.value
          }, null, 8, ["option"])) : (u(), d("div", {
            key: 4,
            class: ae(["lkt-field-select__read-value", "lkt-field-option option-" + ye.value.value]),
            innerHTML: lt.value,
            title: lt.value
          }, null, 10, vl)),
          Bt.value ? (u(), d("div", ml, [
            i.allowReadModeSwitch ? (u(), d("i", {
              key: 0,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: ct
            }, null, 8, gl)) : V("", !0)
          ])) : V("", !0)
        ])) : V("", !0),
        !f.value && i.multiple ? (u(), d("div", El, [
          i.multipleDisplay === "count" ? (u(), d("div", wl, ce(ke.value), 1)) : ke.value === 0 && Le.value ? (u(), d("div", yl, [
            (u(), U(ee(Yt.value)))
          ])) : ke.value === 0 && !Le.value ? (u(), d("div", Sl, ce(Jt.value), 1)) : (u(), d("ul", {
            key: 3,
            class: ae(Xn.value)
          }, [
            (u(!0), d(Ne, null, pt(zt.value, (m) => (u(), d("li", {
              title: m.label,
              class: ae("lkt-field-option option-" + m.value)
            }, [
              z(l).value ? Z(i.$slots, "value", {
                key: 0,
                option: m,
                data: i.slotData
              }) : Qt.value ? (u(), U(ee(Xt.value), {
                key: 1,
                option: m,
                data: i.slotData
              }, null, 8, ["option", "data"])) : (u(), d("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: m.label
              }, null, 8, Ol))
            ], 10, bl))), 256))
          ], 2)),
          i.allowReadModeSwitch ? (u(), d("div", Nl, [
            qe("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: ct
            }, null, 8, Vl)
          ])) : V("", !0)
        ])) : V("", !0)
      ], 2);
    };
  }
}), Fl = {
  install: (e) => {
    e.component("lkt-field-select") === void 0 && e.component("lkt-field-select", Rl), e.component("lkt-loader") === void 0 && e.use(ps), e.component("lkt-field-text") === void 0 && e.use(hs);
  }
};
export {
  Hl as debugLktFieldSelect,
  Fl as default,
  jl as setDefaultSelectEmptyValueSlot,
  kl as setNoOptionsMessage,
  Ll as setResourceOptionSlot,
  Al as setResourceValueSlot,
  Pl as setSelectEmptyValueMessage
};
