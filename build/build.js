import { defineComponent as qn, useSlots as Jn, ref as M, computed as S, watch as Ee, nextTick as rt, resolveComponent as Bt, openBlock as f, createElementBlock as p, normalizeClass as Te, unref as K, renderSlot as Q, createCommentVNode as y, withModifiers as $e, createBlock as se, resolveDynamicComponent as we, createElementVNode as lt, Fragment as Oe, renderList as it, withDirectives as Yn, createVNode as Qn, vShow as Xn, createTextVNode as zt, toDisplayString as at } from "vue";
import { generateRandomString as Ut } from "lkt-string-tools";
import { httpCall as Zn } from "lkt-http-client";
import es from "lkt-loader";
import ts from "lkt-field-text";
const ae = class ae {
};
ae.debugEnabled = !1, ae.NO_OPTIONS_MESSAGE = "", ae.customResourceOptionSlots = {}, ae.customResourceValueSlots = {};
let T = ae;
const ns = () => T.NO_OPTIONS_MESSAGE, mr = (e) => (T.NO_OPTIONS_MESSAGE = e, !0), gr = (e, t) => (T.customResourceOptionSlots[e] = t, !0), Er = (e, t) => (T.customResourceValueSlots[e] = t, !0);
class Wt {
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
function ss(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const W = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const re = () => {
}, os = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), j = Object.assign, rs = Object.prototype.hasOwnProperty, b = (e, t) => rs.call(e, t), m = Array.isArray, ce = (e) => qe(e) === "[object Map]", ls = (e) => qe(e) === "[object Set]", V = (e) => typeof e == "function", k = (e) => typeof e == "string", Ge = (e) => typeof e == "symbol", L = (e) => e !== null && typeof e == "object", is = (e) => (L(e) || V(e)) && V(e.then) && V(e.catch), as = Object.prototype.toString, qe = (e) => as.call(e), cn = (e) => qe(e).slice(8, -1), cs = (e) => qe(e) === "[object Object]", wt = (e) => k(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, un = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, fn = un((e) => e.charAt(0).toUpperCase() + e.slice(1)), us = un((e) => e ? `on${fn(e)}` : ""), de = (e, t) => !Object.is(e, t), fs = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Gt;
const dn = () => Gt || (Gt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ot(e) {
  if (m(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = k(o) ? _s(o) : Ot(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (k(e) || L(e))
    return e;
}
const ds = /;(?![^(]*\))/g, ps = /:([^]+)/, hs = /\/\*[^]*?\*\//g;
function _s(e) {
  const t = {};
  return e.replace(hs, "").split(ds).forEach((n) => {
    if (n) {
      const o = n.split(ps);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function bt(e) {
  let t = "";
  if (k(e))
    t = e;
  else if (m(e))
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
function Ce(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let vs;
function ms(e, t = vs) {
  t && t.active && t.effects.push(e);
}
let Se;
class gs {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, ms(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Je();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Es(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ye();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = X, n = Se;
    try {
      return X = !0, Se = this, this._runnings++, qt(this), this.fn();
    } finally {
      Jt(this), this._runnings--, Se = n, X = t;
    }
  }
  stop() {
    var t;
    this.active && (qt(this), Jt(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Es(e) {
  return e.value;
}
function qt(e) {
  e._trackId++, e._depsLength = 0;
}
function Jt(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      pn(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function pn(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let X = !0, ft = 0;
const hn = [];
function Je() {
  hn.push(X), X = !1;
}
function Ye() {
  const e = hn.pop();
  X = e === void 0 ? !0 : e;
}
function Nt() {
  ft++;
}
function St() {
  for (ft--; !ft && dt.length; )
    dt.shift()();
}
function ws(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && pn(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, j({ effect: e }, n)));
  }
}
const dt = [];
function Os(e, t, n) {
  var o;
  Nt();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, j({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && dt.push(s.scheduler)));
  }
  St();
}
const bs = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, pt = /* @__PURE__ */ new WeakMap(), Z = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), ht = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function I(e, t, n) {
  if (X && Se) {
    let o = pt.get(e);
    o || pt.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = bs(() => o.delete(n))), ws(
      Se,
      s,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function J(e, t, n, o, s, r) {
  const l = pt.get(e);
  if (!l)
    return;
  let a = [];
  if (t === "clear")
    a = [...l.values()];
  else if (n === "length" && m(e)) {
    const c = Number(o);
    l.forEach((u, E) => {
      (E === "length" || !Ge(E) && E >= c) && a.push(u);
    });
  } else
    switch (n !== void 0 && a.push(l.get(n)), t) {
      case "add":
        m(e) ? wt(n) && a.push(l.get("length")) : (a.push(l.get(Z)), ce(e) && a.push(l.get(ht)));
        break;
      case "delete":
        m(e) || (a.push(l.get(Z)), ce(e) && a.push(l.get(ht)));
        break;
      case "set":
        ce(e) && a.push(l.get(Z));
        break;
    }
  Nt();
  for (const c of a)
    c && Os(
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
  St();
}
const Ns = /* @__PURE__ */ ss("__proto__,__v_isRef,__isVue"), _n = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ge)
), Yt = /* @__PURE__ */ Ss();
function Ss() {
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
      Je(), Nt();
      const o = _(this)[t].apply(this, n);
      return St(), Ye(), o;
    };
  }), e;
}
function ys(e) {
  const t = _(this);
  return I(t, "has", e), t.hasOwnProperty(e);
}
class vn {
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
      return o === (s ? r ? On : wn : r ? As : En).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const l = m(t);
    if (!s) {
      if (l && b(Yt, n))
        return Reflect.get(Yt, n, o);
      if (n === "hasOwnProperty")
        return ys;
    }
    const a = Reflect.get(t, n, o);
    return (Ge(n) ? _n.has(n) : Ns(n)) || (s || I(t, "get", n), r) ? a : A(a) ? l && wt(n) ? a : a.value : L(a) ? s ? Nn(a) : bn(a) : a;
  }
}
class Vs extends vn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const c = De(r);
      if (!_t(o) && !De(o) && (r = _(r), o = _(o)), !m(t) && A(r) && !A(o))
        return c ? !1 : (r.value = o, !0);
    }
    const l = m(t) && wt(n) ? Number(n) < t.length : b(t, n), a = Reflect.set(t, n, o, s);
    return t === _(s) && (l ? de(o, r) && J(t, "set", n, o, r) : J(t, "add", n, o)), a;
  }
  deleteProperty(t, n) {
    const o = b(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && J(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Ge(n) || !_n.has(n)) && I(t, "has", n), o;
  }
  ownKeys(t) {
    return I(
      t,
      "iterate",
      m(t) ? "length" : Z
    ), Reflect.ownKeys(t);
  }
}
class mn extends vn {
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
const Rs = /* @__PURE__ */ new Vs(), Cs = /* @__PURE__ */ new mn(), Ds = /* @__PURE__ */ new mn(!0), yt = (e) => e, Qe = (e) => Reflect.getPrototypeOf(e);
function xe(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = _(e), r = _(t);
  n || (de(t, r) && I(s, "get", t), I(s, "get", r));
  const { has: l } = Qe(s), a = o ? yt : n ? Dt : Ct;
  if (l.call(s, t))
    return a(e.get(t));
  if (l.call(s, r))
    return a(e.get(r));
  e !== s && e.get(t);
}
function Pe(e, t = !1) {
  const n = this.__v_raw, o = _(n), s = _(e);
  return t || (de(e, s) && I(o, "has", e), I(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function ke(e, t = !1) {
  return e = e.__v_raw, !t && I(_(e), "iterate", Z), Reflect.get(e, "size", e);
}
function Qt(e) {
  e = _(e);
  const t = _(this);
  return Qe(t).has.call(t, e) || (t.add(e), J(t, "add", e, e)), this;
}
function Xt(e, t) {
  t = _(t);
  const n = _(this), { has: o, get: s } = Qe(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && gn(n, o, e) : (e = _(e), r = o.call(n, e));
  const l = s.call(n, e);
  return n.set(e, t), r ? de(t, l) && J(n, "set", e, t, l) : J(n, "add", e, t), this;
}
function Zt(e) {
  const t = _(this), { has: n, get: o } = Qe(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && gn(t, n, e) : (e = _(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, l = t.delete(e);
  return s && J(t, "delete", e, void 0, r), l;
}
function en() {
  const e = _(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ce(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && J(e, "clear", void 0, void 0, n), o;
}
function Le(e, t) {
  return function(o, s) {
    const r = this, l = r.__v_raw, a = _(l), c = t ? yt : e ? Dt : Ct;
    return !e && I(a, "iterate", Z), l.forEach((u, E) => o.call(s, c(u), c(E), r));
  };
}
function Ae(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = _(s), l = ce(r), a = e === "entries" || e === Symbol.iterator && l, c = e === "keys" && l, u = s[e](...o), E = n ? yt : t ? Dt : Ct;
    return !t && I(
      r,
      "iterate",
      c ? ht : Z
    ), {
      // iterator protocol
      next() {
        const { value: h, done: R } = u.next();
        return R ? { value: h, done: R } : {
          value: a ? [E(h[0]), E(h[1])] : E(h),
          done: R
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
        `${fn(e)} operation ${n}failed: target is readonly.`,
        _(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ms() {
  const e = {
    get(r) {
      return xe(this, r);
    },
    get size() {
      return ke(this);
    },
    has: Pe,
    add: Qt,
    set: Xt,
    delete: Zt,
    clear: en,
    forEach: Le(!1, !1)
  }, t = {
    get(r) {
      return xe(this, r, !1, !0);
    },
    get size() {
      return ke(this);
    },
    has: Pe,
    add: Qt,
    set: Xt,
    delete: Zt,
    clear: en,
    forEach: Le(!1, !0)
  }, n = {
    get(r) {
      return xe(this, r, !0);
    },
    get size() {
      return ke(this, !0);
    },
    has(r) {
      return Pe.call(this, r, !0);
    },
    add: U("add"),
    set: U("set"),
    delete: U("delete"),
    clear: U("clear"),
    forEach: Le(!0, !1)
  }, o = {
    get(r) {
      return xe(this, r, !0, !0);
    },
    get size() {
      return ke(this, !0);
    },
    has(r) {
      return Pe.call(this, r, !0);
    },
    add: U("add"),
    set: U("set"),
    delete: U("delete"),
    clear: U("clear"),
    forEach: Le(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = Ae(
      r,
      !1,
      !1
    ), n[r] = Ae(
      r,
      !0,
      !1
    ), t[r] = Ae(
      r,
      !1,
      !0
    ), o[r] = Ae(
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
  Is,
  Ts,
  $s,
  xs
] = /* @__PURE__ */ Ms();
function Vt(e, t) {
  const n = t ? e ? xs : $s : e ? Ts : Is;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    b(n, s) && s in o ? n : o,
    s,
    r
  );
}
const Ps = {
  get: /* @__PURE__ */ Vt(!1, !1)
}, ks = {
  get: /* @__PURE__ */ Vt(!0, !1)
}, Ls = {
  get: /* @__PURE__ */ Vt(!0, !0)
};
function gn(e, t, n) {
  const o = _(n);
  if (o !== n && t.call(e, o)) {
    const s = cn(e);
    Ce(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const En = /* @__PURE__ */ new WeakMap(), As = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ new WeakMap();
function js(e) {
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
function Hs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : js(cn(e));
}
function bn(e) {
  return De(e) ? e : Rt(
    e,
    !1,
    Rs,
    Ps,
    En
  );
}
function Nn(e) {
  return Rt(
    e,
    !0,
    Cs,
    ks,
    wn
  );
}
function je(e) {
  return Rt(
    e,
    !0,
    Ds,
    Ls,
    On
  );
}
function Rt(e, t, n, o, s) {
  if (!L(e))
    return process.env.NODE_ENV !== "production" && Ce(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const l = Hs(e);
  if (l === 0)
    return e;
  const a = new Proxy(
    e,
    l === 2 ? o : n
  );
  return s.set(e, a), a;
}
function ue(e) {
  return De(e) ? ue(e.__v_raw) : !!(e && e.__v_isReactive);
}
function De(e) {
  return !!(e && e.__v_isReadonly);
}
function _t(e) {
  return !!(e && e.__v_isShallow);
}
function vt(e) {
  return ue(e) || De(e);
}
function _(e) {
  const t = e && e.__v_raw;
  return t ? _(t) : e;
}
function Fs(e) {
  return Object.isExtensible(e) && fs(e, "__v_skip", !0), e;
}
const Ct = (e) => L(e) ? bn(e) : e, Dt = (e) => L(e) ? Nn(e) : e;
function A(e) {
  return !!(e && e.__v_isRef === !0);
}
function Ks(e) {
  return A(e) ? e.value : e;
}
const Bs = {
  get: (e, t, n) => Ks(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return A(s) && !A(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function zs(e) {
  return ue(e) ? e : new Proxy(e, Bs);
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ee = [];
function Us(e) {
  ee.push(e);
}
function Ws() {
  ee.pop();
}
function w(e, ...t) {
  Je();
  const n = ee.length ? ee[ee.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Gs();
  if (o)
    te(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${An(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...qs(s)), console.warn(...r);
  }
  Ye();
}
function Gs() {
  let e = ee[ee.length - 1];
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
function qs(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Js(n));
  }), t;
}
function Js({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${An(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Ys(e.props), r] : [s + r];
}
function Ys(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Sn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Sn(e, t, n) {
  return k(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : A(t) ? (t = Sn(e, _(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : V(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = _(t), n ? t : [`${e}=`, t]);
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
function te(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    It(s, t, n);
  }
}
function ye(e, t, n, o) {
  if (V(e)) {
    const r = te(e, t, n, o);
    return r && is(r) && r.catch((l) => {
      It(l, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(ye(e[r], t, n, o));
  return s;
}
function It(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const l = t.proxy, a = process.env.NODE_ENV !== "production" ? Mt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let E = 0; E < u.length; E++)
          if (u[E](e, l, a) === !1)
            return;
      }
      r = r.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      te(
        c,
        null,
        10,
        [e, l, a]
      );
      return;
    }
  }
  Qs(e, n, s, o);
}
function Qs(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Mt[t];
    if (n && Us(n), w(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Ws(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Be = !1, mt = !1;
const P = [];
let q = 0;
const fe = [];
let B = null, G = 0;
const yn = /* @__PURE__ */ Promise.resolve();
let Tt = null;
const Xs = 100;
function Zs(e) {
  const t = Tt || yn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function eo(e) {
  let t = q + 1, n = P.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = P[o], r = Me(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function $t(e) {
  (!P.length || !P.includes(
    e,
    Be && e.allowRecurse ? q + 1 : q
  )) && (e.id == null ? P.push(e) : P.splice(eo(e.id), 0, e), Vn());
}
function Vn() {
  !Be && !mt && (mt = !0, Tt = yn.then(Cn));
}
function Rn(e) {
  m(e) ? fe.push(...e) : (!B || !B.includes(
    e,
    e.allowRecurse ? G + 1 : G
  )) && fe.push(e), Vn();
}
function to(e) {
  if (fe.length) {
    const t = [...new Set(fe)].sort(
      (n, o) => Me(n) - Me(o)
    );
    if (fe.length = 0, B) {
      B.push(...t);
      return;
    }
    for (B = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), G = 0; G < B.length; G++)
      process.env.NODE_ENV !== "production" && Dn(e, B[G]) || B[G]();
    B = null, G = 0;
  }
}
const Me = (e) => e.id == null ? 1 / 0 : e.id, no = (e, t) => {
  const n = Me(e) - Me(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Cn(e) {
  mt = !1, Be = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), P.sort(no);
  const t = process.env.NODE_ENV !== "production" ? (n) => Dn(e, n) : re;
  try {
    for (q = 0; q < P.length; q++) {
      const n = P[q];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        te(n, null, 14);
      }
    }
  } finally {
    q = 0, P.length = 0, to(e), Be = !1, Tt = null, (P.length || fe.length) && Cn(e);
  }
}
function Dn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Xs) {
      const o = t.ownerInstance, s = o && Ln(o.type);
      return It(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const be = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (dn().__VUE_HMR_RUNTIME__ = {
  createRecord: ct(so),
  rerender: ct(oo),
  reload: ct(ro)
});
const ze = /* @__PURE__ */ new Map();
function so(e, t) {
  return ze.has(e) ? !1 : (ze.set(e, {
    initialDef: Ve(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ve(e) {
  return jn(e) ? e.__vccOpts : e;
}
function oo(e, t) {
  const n = ze.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Ve(o.type).render = t), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function ro(e, t) {
  const n = ze.get(e);
  if (!n)
    return;
  t = Ve(t), tn(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = Ve(s.type);
    be.has(r) || (r !== n.initialDef && tn(r, t), be.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (be.add(r), s.ceReload(t.styles), be.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, $t(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Rn(() => {
    for (const s of o)
      be.delete(
        Ve(s.type)
      );
  });
}
function tn(e, t) {
  j(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ct(e) {
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
let oe, He = [];
function Mn(e, t) {
  var n, o;
  oe = e, oe ? (oe.enabled = !0, He.forEach(({ event: s, args: r }) => oe.emit(s, ...r)), He = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Mn(r, t);
  }), setTimeout(() => {
    oe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, He = []);
  }, 3e3)) : He = [];
}
let z = null, lo = null;
const io = Symbol.for("v-ndc"), ao = (e) => e.__isSuspense;
function co(e, t) {
  t && t.pendingBranch ? m(e) ? t.effects.push(...e) : t.effects.push(e) : Rn(e);
}
const uo = Symbol.for("v-scx"), fo = () => {
  {
    const e = yo(uo);
    return e || process.env.NODE_ENV !== "production" && w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Fe = {};
function po(e, t, {
  immediate: n,
  deep: o,
  flush: s,
  once: r,
  onTrack: l,
  onTrigger: a
} = W) {
  if (t && r) {
    const d = t;
    t = (..._e) => {
      d(..._e), he();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && w(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && w(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (d) => {
    w(
      "Invalid watch source: ",
      d,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = pe, E = (d) => o === !0 ? d : (
    // for deep: false, only traverse root-level properties
    le(d, o === !1 ? 1 : void 0)
  );
  let h, R = !1, $ = !1;
  if (A(e) ? (h = () => e.value, R = _t(e)) : ue(e) ? (h = () => E(e), R = !0) : m(e) ? ($ = !0, R = e.some((d) => ue(d) || _t(d)), h = () => e.map((d) => {
    if (A(d))
      return d.value;
    if (ue(d))
      return E(d);
    if (V(d))
      return te(d, u, 2);
    process.env.NODE_ENV !== "production" && c(d);
  })) : V(e) ? t ? h = () => te(e, u, 2) : h = () => (g && g(), ye(
    e,
    u,
    3,
    [Y]
  )) : (h = re, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const d = h;
    h = () => le(d());
  }
  let g, Y = (d) => {
    g = O.onStop = () => {
      te(d, u, 4), g = O.onStop = void 0;
    };
  }, H;
  if (Pt)
    if (Y = re, t ? n && ye(t, u, 3, [
      h(),
      $ ? [] : void 0,
      Y
    ]) : h(), s === "sync") {
      const d = fo();
      H = d.__watcherHandles || (d.__watcherHandles = []);
    } else
      return re;
  let C = $ ? new Array(e.length).fill(Fe) : Fe;
  const x = () => {
    if (!(!O.active || !O.dirty))
      if (t) {
        const d = O.run();
        (o || R || ($ ? d.some((_e, Xe) => de(_e, C[Xe])) : de(d, C))) && (g && g(), ye(t, u, 3, [
          d,
          // pass undefined as the old value when it's changed for the first time
          C === Fe ? void 0 : $ && C[0] === Fe ? [] : C,
          Y
        ]), C = d);
      } else
        O.run();
  };
  x.allowRecurse = !!t;
  let F;
  s === "sync" ? F = x : s === "post" ? F = () => an(x, u && u.suspense) : (x.pre = !0, u && (x.id = u.uid), F = () => $t(x));
  const O = new gs(h, re, F), he = () => {
    O.stop();
  };
  return process.env.NODE_ENV !== "production" && (O.onTrack = l, O.onTrigger = a), t ? n ? x() : C = O.run() : s === "post" ? an(
    O.run.bind(O),
    u && u.suspense
  ) : O.run(), H && H.push(he), he;
}
function ho(e, t, n) {
  const o = this.proxy, s = k(e) ? e.includes(".") ? _o(o, e) : () => o[e] : e.bind(o, o);
  let r;
  V(t) ? r = t : (r = t.handler, n = t);
  const l = kn(this), a = po(s, r.bind(o), n);
  return l(), a;
}
function _o(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function le(e, t, n = 0, o) {
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
    le(e.value, t, n, o);
  else if (m(e))
    for (let s = 0; s < e.length; s++)
      le(e[s], t, n, o);
  else if (ls(e) || ce(e))
    e.forEach((s) => {
      le(s, t, n, o);
    });
  else if (cs(e))
    for (const s in e)
      le(e[s], t, n, o);
  return e;
}
function vo(e, t, n = pe, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      Je();
      const a = kn(n), c = ye(t, n, e, l);
      return a(), Ye(), c;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = us(Mt[e].replace(/ hook$/, ""));
    w(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const mo = (e) => (t, n = pe) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Pt || e === "sp") && vo(e, (...o) => t(...o), n)
), go = mo("bum"), gt = (e) => e ? ko(e) ? Lo(e) || e.proxy : gt(e.parent) : null, Re = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ j(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? je(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? je(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? je(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? je(e.refs) : e.refs,
    $parent: (e) => gt(e.parent),
    $root: (e) => gt(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Oo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, $t(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Zs.bind(e.proxy)),
    $watch: (e) => ho.bind(e)
  })
), Eo = (e) => e === "_" || e === "$", ut = (e, t) => e !== W && !e.__isScriptSetup && b(e, t), wo = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: l, type: a, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
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
        if (ut(o, t))
          return l[t] = 1, o[t];
        if (s !== W && b(s, t))
          return l[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && b(u, t)
        )
          return l[t] = 3, r[t];
        if (n !== W && b(n, t))
          return l[t] = 4, n[t];
        l[t] = 0;
      }
    }
    const E = Re[t];
    let h, R;
    if (E)
      return t === "$attrs" ? (I(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && I(e, "get", t), E(e);
    if (
      // css module (injected by vue-loader)
      (h = a.__cssModules) && (h = h[t])
    )
      return h;
    if (n !== W && b(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      R = c.config.globalProperties, b(R, t)
    )
      return R[t];
    process.env.NODE_ENV !== "production" && z && (!k(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== W && Eo(t[0]) && b(s, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === z && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return ut(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && b(s, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== W && b(o, t) ? (o[t] = n, !0) : b(e.props, t) ? (process.env.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && w(
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
    return !!n[l] || e !== W && b(e, l) || ut(t, l) || (a = r[0]) && b(a, l) || b(o, l) || b(Re, l) || b(s.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : b(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (wo.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function nn(e) {
  return m(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Oo(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: l }
  } = e.appContext, a = r.get(t);
  let c;
  return a ? c = a : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(
    (u) => Ue(c, u, l, !0)
  ), Ue(c, t, l)), L(t) && r.set(t, c), c;
}
function Ue(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && Ue(e, r, n, !0), s && s.forEach(
    (l) => Ue(e, l, n, !0)
  );
  for (const l in t)
    if (o && l === "expose")
      process.env.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = bo[l] || n && n[l];
      e[l] = a ? a(e[l], t[l]) : t[l];
    }
  return e;
}
const bo = {
  data: sn,
  props: rn,
  emits: rn,
  // objects
  methods: Ne,
  computed: Ne,
  // lifecycle
  beforeCreate: D,
  created: D,
  beforeMount: D,
  mounted: D,
  beforeUpdate: D,
  updated: D,
  beforeDestroy: D,
  beforeUnmount: D,
  destroyed: D,
  unmounted: D,
  activated: D,
  deactivated: D,
  errorCaptured: D,
  serverPrefetch: D,
  // assets
  components: Ne,
  directives: Ne,
  // watch
  watch: So,
  // provide / inject
  provide: sn,
  inject: No
};
function sn(e, t) {
  return t ? e ? function() {
    return j(
      V(e) ? e.call(this, this) : e,
      V(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function No(e, t) {
  return Ne(on(e), on(t));
}
function on(e) {
  if (m(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function D(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ne(e, t) {
  return e ? j(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function rn(e, t) {
  return e ? m(e) && m(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : j(
    /* @__PURE__ */ Object.create(null),
    nn(e),
    nn(t ?? {})
  ) : t;
}
function So(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = j(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = D(e[o], t[o]);
  return n;
}
let ln = null;
function yo(e, t, n = !1) {
  const o = pe || z;
  if (o || ln) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : ln._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && V(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && w(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && w("inject() can only be used inside setup() or functional components.");
}
const an = co, Vo = (e) => e.__isTeleport, In = Symbol.for("v-fgt"), Ro = Symbol.for("v-txt"), Co = Symbol.for("v-cmt");
let ie = null;
function Do(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Mo = (...e) => xn(
  ...e
), Tn = "__vInternal", $n = ({ key: e }) => e ?? null, Ke = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? k(e) || A(e) || V(e) ? { i: z, r: e, k: t, f: !!n } : e : null);
function Io(e, t = null, n = null, o = 0, s = null, r = e === In ? 0 : 1, l = !1, a = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $n(t),
    ref: t && Ke(t),
    scopeId: lo,
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
  return a ? (xt(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= k(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && w("VNode created with invalid key (NaN). VNode type:", c.type), // avoid a block node from tracking itself
  !l && // has current parent block
  ie && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && ie.push(c), c;
}
const To = process.env.NODE_ENV !== "production" ? Mo : xn;
function xn(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === io) && (process.env.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = Co), Do(e)) {
    const a = We(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && xt(a, n), !r && ie && (a.shapeFlag & 6 ? ie[ie.indexOf(e)] = a : ie.push(a)), a.patchFlag |= -2, a;
  }
  if (jn(e) && (e = e.__vccOpts), t) {
    t = $o(t);
    let { class: a, style: c } = t;
    a && !k(a) && (t.class = bt(a)), L(c) && (vt(c) && !m(c) && (c = j({}, c)), t.style = Ot(c));
  }
  const l = k(e) ? 1 : ao(e) ? 128 : Vo(e) ? 64 : L(e) ? 4 : V(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && l & 4 && vt(e) && (e = _(e), w(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Io(
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
function $o(e) {
  return e ? vt(e) || Tn in e ? j({}, e) : e : null;
}
function We(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: l } = e, a = t ? Po(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && $n(a),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? m(s) ? s.concat(Ke(t)) : [s, Ke(t)] : Ke(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && m(l) ? l.map(Pn) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== In ? r === -1 ? 16 : r | 16 : r,
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
    ssContent: e.ssContent && We(e.ssContent),
    ssFallback: e.ssFallback && We(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Pn(e) {
  const t = We(e);
  return m(e.children) && (t.children = e.children.map(Pn)), t;
}
function xo(e = " ", t = 0) {
  return To(Ro, null, e, t);
}
function xt(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (m(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), xt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Tn in t) ? t._ctx = z : s === 3 && z && (z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    V(t) ? (t = { default: t, _ctx: z }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [xo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Po(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = bt([t.class, o.class]));
      else if (s === "style")
        t.style = Ot([t.style, o.style]);
      else if (os(s)) {
        const r = t[s], l = o[s];
        l && r !== l && !(m(r) && r.includes(l)) && (t[s] = r ? [].concat(r, l) : l);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
let pe = null, Et;
{
  const e = dn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((l) => l(r)) : s[0](r);
    };
  };
  Et = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => pe = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Pt = n
  );
}
const kn = (e) => {
  const t = pe;
  return Et(e), e.scope.on(), () => {
    e.scope.off(), Et(t);
  };
};
function ko(e) {
  return e.vnode.shapeFlag & 4;
}
let Pt = !1;
function Lo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(zs(Fs(e.exposed)), {
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
const Ao = /(?:^|[-_])(\w)/g, jo = (e) => e.replace(Ao, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ln(e, t = !0) {
  return V(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function An(e, t, n = !1) {
  let o = Ln(t);
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
  return o ? jo(o) : n ? "App" : "Anonymous";
}
function jn(e) {
  return V(e) && "__vccOpts" in e;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const Ho = (...e) => {
  T.debugEnabled && console.info("[LktFieldSelect] ", ...e);
}, Fo = ["id", "multiple"], Ko = {
  key: 2,
  class: "lkt-field__select"
}, Bo = ["innerHTML"], zo = ["title"], Uo = ["innerHTML"], Wo = {
  key: 2,
  class: "lkt-field__select-dropdown"
}, Go = { class: "lkt-field__select-search-container" }, qo = {
  key: 1,
  class: "lkt-field__select-options"
}, Jo = ["onClick"], Yo = {
  key: 0,
  class: "lkt-field__select-option"
}, Qo = {
  key: 3,
  class: "lkt-field__state"
}, Xo = ["title"], Zo = {
  key: 3,
  class: "lkt-field-select__read"
}, er = ["innerHTML", "title"], tr = {
  key: 3,
  class: "lkt-field__state"
}, nr = ["title"], sr = {
  key: 4,
  class: "lkt-field-select__read-multiple"
}, or = { key: 0 }, rr = ["title"], lr = ["innerHTML"], ir = {
  key: 2,
  class: "lkt-field__state"
}, ar = ["title"], cr = ["innerHTML"], ur = /* @__PURE__ */ qn({
  __name: "LktFieldSelect",
  props: {
    modelValue: { default: "" },
    class: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: Ut(16) },
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
    noOptionsMessage: { default: ns() },
    resource: { default: "" },
    resourceData: { default: () => ({}) },
    slotData: { default: () => ({}) },
    searchStringResourceParam: { default: "query" },
    searchPlaceholder: { default: "" },
    useResourceSlot: { default: "" },
    multipleDisplay: { default: "list" },
    multipleDisplayEdition: { default: "inline" },
    mandatory: { type: Boolean, default: !1 },
    mandatoryMessage: { default: "Mandatory" }
  },
  emits: ["update:modelValue", "click-ui", "selected-option", "results"],
  setup(e, { expose: t, emit: n }) {
    const o = n, s = e, r = Jn(), l = M(null), a = M(null), c = M(null), u = M(!s.readMode), E = Ut(16), h = M(new Wt(s.options)), R = M(!1), $ = M(s.modelValue), g = M(s.modelValue), Y = M(!1), H = M(!1), C = M(!1), x = M(h.value.all()), F = M(h.value.all()), O = M("");
    s.closeOnSelect === null ? R.value = s.multiple === !0 : R.value = s.closeOnSelect;
    const he = S(() => s.resource !== ""), d = S(() => typeof s.valid == "function" ? s.valid() : s.valid), _e = S(() => g.value !== $.value), Xe = S(() => {
      const i = ["lkt-field", "lkt-field-select"];
      return s.palette && i.push(`lkt-field--${s.palette}`), _e.value && i.push("is-changed"), s.class && i.push(s.class), s.multiple && i.push("is-multiple"), s.disabled && i.push("is-disabled"), s.upperDropdown && !s.choiceDropdown && i.push("lkt-field-select-upper-dropdown"), s.choiceDropdown && i.push("lkt-field-select-choice-dropdown"), s.mandatory && u.value && i.push("is-mandatory-field"), C.value && i.push("has-focus"), i.push(d.value ? "is-valid" : "is-error"), i.push(s.modelValue ? "is-filled" : "is-empty"), i.join(" ");
    }), Hn = S(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplay}`), i.join(" ");
    }), Fn = S(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplayEdition}`), i.join(" ");
    }), Ie = S(() => {
      let i = {};
      return F.value.forEach((N) => {
        N.value == g.value && (i = N);
      }), i;
    }), Ze = S(() => {
      let i = "";
      return F.value.forEach((N) => {
        N.value == g.value && (i = N.label);
      }), i;
    }), kt = S(() => {
      let i = [];
      return s.multiple && F.value.forEach((N) => {
        g.value.forEach((ge) => {
          ge == N.value && i.push(N);
        });
      }), i;
    }), Kn = S(() => Array.isArray(g.value) ? g.value.length : 0), Lt = S(() => s.allowReadModeSwitch), ve = () => {
      F.value = h.value.all(), x.value = h.value.filter(O.value), H.value = !1;
    }, At = () => {
      O.value = "", ve();
    }, et = async () => {
      if (H.value = !1, he.value) {
        H.value = !0, s.searchStringResourceParam && (s.resourceData[s.searchStringResourceParam] = O.value);
        const i = await Zn(s.resource, s.resourceData);
        h.value.receiveOptions(i.data), ve(), o("results", i.data);
      } else
        ve();
    }, Bn = () => {
      g.value = $.value;
    }, zn = () => s.modelValue, me = (i) => {
      At(), tt(i), C.value = !C.value, C.value && rt(() => {
        et(), l.value.focus(), rt(() => {
          l.value.focus();
        });
      });
    };
    Ee(() => s.readMode, (i) => u.value = !i), Ee(() => s.modelValue, (i) => {
      g.value = i;
    }), Ee(g, (i) => {
      o("update:modelValue", i), o("selected-option", h.value.findByValue(i)), Y.value = !0, rt(() => Y.value = !1);
    }), Ee(O, ve), Ee(() => s.options, (i) => {
      h.value = new Wt(i);
    });
    const jt = (i) => {
      if (s.multiple) {
        let N = g.value.findIndex((ge) => ge == i.value);
        return typeof N > "u" && (N = -1), N;
      }
      return -1;
    }, Un = (i) => {
      if (s.multiple) {
        let N = jt(i);
        N === -1 ? g.value.push(i.value) : g.value.splice(N, 1);
      } else
        g.value = i.value, C.value = !1;
    }, Wn = (i) => s.multiple ? jt(i) !== -1 : i.value == g.value, tt = (i) => {
      if (!c.value.contains(i.target)) {
        At(), C.value = !1;
        return;
      }
    }, nt = (i) => {
      u.value = !u.value, u.value && focus();
    };
    window.addEventListener("click", tt), ve(), go(() => {
      window.removeEventListener("click", tt);
    }), t({
      reset: Bn,
      value: zn
    }), s.autoloadResource && s.resource !== "" && (Ho("Auto loading Resource", s.resource, s.resourceData, s.autoloadResource), et());
    const ne = S(() => s.useResourceSlot ? s.useResourceSlot : s.resource), Ht = S(() => T.NO_OPTIONS_MESSAGE), st = S(() => ne.value !== "" && typeof T.customResourceOptionSlots[ne.value] < "u"), ot = S(() => T.customResourceOptionSlots[ne.value]), Ft = S(() => ne.value !== "" && typeof T.customResourceValueSlots[ne.value] < "u"), Kt = S(() => T.customResourceValueSlots[ne.value]);
    return (i, N) => {
      const ge = Bt("lkt-field-text"), Gn = Bt("lkt-loader");
      return f(), p("div", {
        class: Te(Xe.value),
        "data-show-ui": !1,
        ref: (v) => c.value = v
      }, [
        K(r).prefix ? Q(i.$slots, "prefix", { key: 0 }) : y("", !0),
        u.value ? (f(), p("select", {
          key: 1,
          ref: (v) => a.value = v,
          id: K(E),
          onFocus: $e(me, ["stop", "prevent"]),
          onBlur: $e(me, ["stop", "prevent"]),
          multiple: i.multiple,
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, Fo)) : y("", !0),
        u.value ? (f(), p("div", Ko, [
          i.multiple ? (f(), p("div", {
            key: 1,
            class: "lkt-field__select-value-multiple",
            onClick: me
          }, [
            lt("ul", {
              class: Te(Fn.value)
            }, [
              (f(!0), p(Oe, null, it(kt.value, (v) => (f(), p("li", {
                title: v.label
              }, [
                K(r).option ? Q(i.$slots, "option", {
                  key: 0,
                  option: v,
                  data: i.slotData
                }) : st.value ? (f(), se(we(ot.value), {
                  key: 1,
                  option: v
                }, null, 8, ["option"])) : (f(), p("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: v.label
                }, null, 8, Uo))
              ], 8, zo))), 256))
            ], 2)
          ])) : (f(), p("div", {
            key: 0,
            class: "lkt-field__select-value",
            onClick: me
          }, [
            K(r).option ? Q(i.$slots, "option", {
              key: 0,
              option: Ie.value,
              data: i.slotData
            }) : y("", !0),
            st.value ? (f(), se(we(ot.value), {
              key: 1,
              option: Ie.value
            }, null, 8, ["option"])) : (f(), p("div", {
              key: 2,
              class: "lkt-field-select__read-value",
              innerHTML: Ze.value
            }, null, 8, Bo))
          ])),
          C.value ? (f(), p("div", Wo, [
            Yn(lt("div", Go, [
              Qn(ge, {
                ref: (v) => l.value = v,
                modelValue: O.value,
                "onUpdate:modelValue": N[0] || (N[0] = (v) => O.value = v),
                placeholder: i.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search",
                onKeyup: et
              }, null, 8, ["modelValue", "placeholder"])
            ], 512), [
              [Xn, i.searchable]
            ]),
            H.value ? (f(), se(Gn, { key: 0 })) : y("", !0),
            !i.readonly && !H.value ? (f(), p("ul", qo, [
              (f(!0), p(Oe, null, it(x.value, (v) => (f(), p("li", {
                class: Te(["lkt-field__select-option", { "is-active": i.multiple ? Wn(v) : v.value == g.value }]),
                onClick: $e((fr) => Un(v), ["prevent", "stop"])
              }, [
                K(r).option ? Q(i.$slots, "option", {
                  key: 0,
                  option: v,
                  data: i.slotData
                }) : y("", !0),
                st.value ? (f(), se(we(ot.value), {
                  key: 1,
                  option: v
                }, null, 8, ["option"])) : (f(), p(Oe, { key: 2 }, [
                  zt(at(v.label), 1)
                ], 64))
              ], 10, Jo))), 256)),
              x.value.length === 0 && (K(r)["no-results"] || Ht.value) ? (f(), p("li", Yo, [
                K(r)["no-results"] ? Q(i.$slots, "no-results", { key: 0 }) : (f(), p(Oe, { key: 1 }, [
                  zt(at(Ht.value), 1)
                ], 64))
              ])) : y("", !0)
            ])) : y("", !0)
          ])) : y("", !0),
          Lt.value ? (f(), p("div", Qo, [
            i.allowReadModeSwitch ? (f(), p("i", {
              key: 0,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: nt
            }, null, 8, Xo)) : y("", !0)
          ])) : y("", !0)
        ])) : y("", !0),
        !u.value && !i.multiple ? (f(), p("div", Zo, [
          K(r).value ? Q(i.$slots, "value", {
            key: 0,
            option: Ie.value,
            data: i.slotData
          }) : Ft.value ? (f(), se(we(Kt.value), {
            key: 1,
            option: Ie.value
          }, null, 8, ["option"])) : (f(), p("div", {
            key: 2,
            class: "lkt-field-select__read-value",
            innerHTML: Ze.value,
            title: Ze.value
          }, null, 8, er)),
          Lt.value ? (f(), p("div", tr, [
            i.allowReadModeSwitch ? (f(), p("i", {
              key: 0,
              class: "lkt-field__edit-icon",
              title: i.switchEditionMessage,
              onClick: nt
            }, null, 8, nr)) : y("", !0)
          ])) : y("", !0)
        ])) : y("", !0),
        !u.value && i.multiple ? (f(), p("div", sr, [
          i.multipleDisplay === "count" ? (f(), p("div", or, at(Kn.value), 1)) : (f(), p("ul", {
            key: 1,
            class: Te(Hn.value)
          }, [
            (f(!0), p(Oe, null, it(kt.value, (v) => (f(), p("li", {
              title: v.label
            }, [
              K(r).value ? Q(i.$slots, "value", {
                key: 0,
                option: v,
                data: i.slotData
              }) : Ft.value ? (f(), se(we(Kt.value), {
                key: 1,
                option: v
              }, null, 8, ["option"])) : (f(), p("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: v.label
              }, null, 8, lr))
            ], 8, rr))), 256))
          ], 2)),
          i.allowReadModeSwitch ? (f(), p("div", ir, [
            lt("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: nt
            }, null, 8, ar)
          ])) : y("", !0)
        ])) : y("", !0),
        i.label ? (f(), p("label", {
          key: 5,
          innerHTML: i.label,
          onClick: $e(me, ["stop", "prevent"])
        }, null, 8, cr)) : y("", !0)
      ], 2);
    };
  }
}), wr = {
  install: (e) => {
    e.component("lkt-field-select") === void 0 && e.component("lkt-field-select", ur), e.component("lkt-loader") === void 0 && e.use(es), e.component("lkt-field-text") === void 0 && e.use(ts);
  }
};
export {
  wr as default,
  mr as setNoOptionsMessage,
  gr as setResourceOptionSlot,
  Er as setResourceValueSlot
};
