import { defineComponent as Gn, useSlots as qn, ref as D, computed as S, watch as Ee, nextTick as rt, resolveComponent as Kt, openBlock as f, createElementBlock as _, normalizeClass as Me, unref as K, renderSlot as Q, createCommentVNode as T, withModifiers as $e, createBlock as se, resolveDynamicComponent as we, createElementVNode as xe, Fragment as Oe, renderList as lt, withDirectives as Jn, createVNode as Yn, vShow as Qn, createTextVNode as Bt, toDisplayString as it } from "vue";
import { generateRandomString as zt } from "lkt-string-tools";
import { httpCall as Xn } from "lkt-http-client";
import Zn from "lkt-loader";
import es from "lkt-field-text";
const ce = class ce {
};
ce.debugEnabled = !1, ce.NO_OPTIONS_MESSAGE = "", ce.customResourceOptionSlots = {}, ce.customResourceValueSlots = {};
let M = ce;
const ts = () => M.NO_OPTIONS_MESSAGE, hr = (e) => (M.NO_OPTIONS_MESSAGE = e, !0), _r = (e, t) => (M.customResourceOptionSlots[e] = t, !0), vr = (e, t) => (M.customResourceValueSlots[e] = t, !0);
class Ut {
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
      return this.value.filter((n) => n.value === t);
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
function ns(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const W = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const re = () => {
}, ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), j = Object.assign, os = Object.prototype.hasOwnProperty, b = (e, t) => os.call(e, t), m = Array.isArray, ae = (e) => Je(e) === "[object Map]", rs = (e) => Je(e) === "[object Set]", y = (e) => typeof e == "function", L = (e) => typeof e == "string", qe = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", ls = (e) => (k(e) || y(e)) && y(e.then) && y(e.catch), is = Object.prototype.toString, Je = (e) => is.call(e), cn = (e) => Je(e).slice(8, -1), cs = (e) => Je(e) === "[object Object]", Et = (e) => L(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, an = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, un = an((e) => e.charAt(0).toUpperCase() + e.slice(1)), as = an((e) => e ? `on${un(e)}` : ""), de = (e, t) => !Object.is(e, t), us = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Wt;
const fn = () => Wt || (Wt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function wt(e) {
  if (m(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = L(o) ? hs(o) : wt(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (L(e) || k(e))
    return e;
}
const fs = /;(?![^(]*\))/g, ds = /:([^]+)/, ps = /\/\*[^]*?\*\//g;
function hs(e) {
  const t = {};
  return e.replace(ps, "").split(fs).forEach((n) => {
    if (n) {
      const o = n.split(ds);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Ot(e) {
  let t = "";
  if (L(e))
    t = e;
  else if (m(e))
    for (let n = 0; n < e.length; n++) {
      const o = Ot(e[n]);
      o && (t += o + " ");
    }
  else if (k(e))
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
let _s;
function vs(e, t = _s) {
  t && t.active && t.effects.push(e);
}
let Se;
class ms {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, vs(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ye();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (gs(n.computed), this._dirtyLevel >= 4))
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
    let t = X, n = Se;
    try {
      return X = !0, Se = this, this._runnings++, Gt(this), this.fn();
    } finally {
      qt(this), this._runnings--, Se = n, X = t;
    }
  }
  stop() {
    var t;
    this.active && (Gt(this), qt(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function gs(e) {
  return e.value;
}
function Gt(e) {
  e._trackId++, e._depsLength = 0;
}
function qt(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      dn(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function dn(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let X = !0, ut = 0;
const pn = [];
function Ye() {
  pn.push(X), X = !1;
}
function Qe() {
  const e = pn.pop();
  X = e === void 0 ? !0 : e;
}
function bt() {
  ut++;
}
function Nt() {
  for (ut--; !ut && ft.length; )
    ft.shift()();
}
function Es(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && dn(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, j({ effect: e }, n)));
  }
}
const ft = [];
function ws(e, t, n) {
  var o;
  bt();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, j({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && ft.push(s.scheduler)));
  }
  Nt();
}
const Os = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, dt = /* @__PURE__ */ new WeakMap(), Z = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), pt = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function I(e, t, n) {
  if (X && Se) {
    let o = dt.get(e);
    o || dt.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Os(() => o.delete(n))), Es(
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
  const l = dt.get(e);
  if (!l)
    return;
  let c = [];
  if (t === "clear")
    c = [...l.values()];
  else if (n === "length" && m(e)) {
    const a = Number(o);
    l.forEach((u, E) => {
      (E === "length" || !qe(E) && E >= a) && c.push(u);
    });
  } else
    switch (n !== void 0 && c.push(l.get(n)), t) {
      case "add":
        m(e) ? Et(n) && c.push(l.get("length")) : (c.push(l.get(Z)), ae(e) && c.push(l.get(pt)));
        break;
      case "delete":
        m(e) || (c.push(l.get(Z)), ae(e) && c.push(l.get(pt)));
        break;
      case "set":
        ae(e) && c.push(l.get(Z));
        break;
    }
  bt();
  for (const a of c)
    a && ws(
      a,
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
const bs = /* @__PURE__ */ ns("__proto__,__v_isRef,__isVue"), hn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qe)
), Jt = /* @__PURE__ */ Ns();
function Ns() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = h(this);
      for (let r = 0, l = this.length; r < l; r++)
        I(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(h)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Ye(), bt();
      const o = h(this)[t].apply(this, n);
      return Nt(), Qe(), o;
    };
  }), e;
}
function Ss(e) {
  const t = h(this);
  return I(t, "has", e), t.hasOwnProperty(e);
}
class _n {
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
      return o === (s ? r ? wn : En : r ? ks : gn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const l = m(t);
    if (!s) {
      if (l && b(Jt, n))
        return Reflect.get(Jt, n, o);
      if (n === "hasOwnProperty")
        return Ss;
    }
    const c = Reflect.get(t, n, o);
    return (qe(n) ? hn.has(n) : bs(n)) || (s || I(t, "get", n), r) ? c : A(c) ? l && Et(n) ? c : c.value : k(c) ? s ? bn(c) : On(c) : c;
  }
}
class ys extends _n {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const a = De(r);
      if (!ht(o) && !De(o) && (r = h(r), o = h(o)), !m(t) && A(r) && !A(o))
        return a ? !1 : (r.value = o, !0);
    }
    const l = m(t) && Et(n) ? Number(n) < t.length : b(t, n), c = Reflect.set(t, n, o, s);
    return t === h(s) && (l ? de(o, r) && J(t, "set", n, o, r) : J(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = b(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && J(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!qe(n) || !hn.has(n)) && I(t, "has", n), o;
  }
  ownKeys(t) {
    return I(
      t,
      "iterate",
      m(t) ? "length" : Z
    ), Reflect.ownKeys(t);
  }
}
class vn extends _n {
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
const Vs = /* @__PURE__ */ new ys(), Rs = /* @__PURE__ */ new vn(), Cs = /* @__PURE__ */ new vn(!0), St = (e) => e, Xe = (e) => Reflect.getPrototypeOf(e);
function Pe(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = h(e), r = h(t);
  n || (de(t, r) && I(s, "get", t), I(s, "get", r));
  const { has: l } = Xe(s), c = o ? St : n ? Ct : Rt;
  if (l.call(s, t))
    return c(e.get(t));
  if (l.call(s, r))
    return c(e.get(r));
  e !== s && e.get(t);
}
function Le(e, t = !1) {
  const n = this.__v_raw, o = h(n), s = h(e);
  return t || (de(e, s) && I(o, "has", e), I(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function ke(e, t = !1) {
  return e = e.__v_raw, !t && I(h(e), "iterate", Z), Reflect.get(e, "size", e);
}
function Yt(e) {
  e = h(e);
  const t = h(this);
  return Xe(t).has.call(t, e) || (t.add(e), J(t, "add", e, e)), this;
}
function Qt(e, t) {
  t = h(t);
  const n = h(this), { has: o, get: s } = Xe(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && mn(n, o, e) : (e = h(e), r = o.call(n, e));
  const l = s.call(n, e);
  return n.set(e, t), r ? de(t, l) && J(n, "set", e, t, l) : J(n, "add", e, t), this;
}
function Xt(e) {
  const t = h(this), { has: n, get: o } = Xe(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && mn(t, n, e) : (e = h(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, l = t.delete(e);
  return s && J(t, "delete", e, void 0, r), l;
}
function Zt() {
  const e = h(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ae(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && J(e, "clear", void 0, void 0, n), o;
}
function Ae(e, t) {
  return function(o, s) {
    const r = this, l = r.__v_raw, c = h(l), a = t ? St : e ? Ct : Rt;
    return !e && I(c, "iterate", Z), l.forEach((u, E) => o.call(s, a(u), a(E), r));
  };
}
function je(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = h(s), l = ae(r), c = e === "entries" || e === Symbol.iterator && l, a = e === "keys" && l, u = s[e](...o), E = n ? St : t ? Ct : Rt;
    return !t && I(
      r,
      "iterate",
      a ? pt : Z
    ), {
      // iterator protocol
      next() {
        const { value: p, done: V } = u.next();
        return V ? { value: p, done: V } : {
          value: c ? [E(p[0]), E(p[1])] : E(p),
          done: V
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
        `${un(e)} operation ${n}failed: target is readonly.`,
        h(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ds() {
  const e = {
    get(r) {
      return Pe(this, r);
    },
    get size() {
      return ke(this);
    },
    has: Le,
    add: Yt,
    set: Qt,
    delete: Xt,
    clear: Zt,
    forEach: Ae(!1, !1)
  }, t = {
    get(r) {
      return Pe(this, r, !1, !0);
    },
    get size() {
      return ke(this);
    },
    has: Le,
    add: Yt,
    set: Qt,
    delete: Xt,
    clear: Zt,
    forEach: Ae(!1, !0)
  }, n = {
    get(r) {
      return Pe(this, r, !0);
    },
    get size() {
      return ke(this, !0);
    },
    has(r) {
      return Le.call(this, r, !0);
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
      return ke(this, !0);
    },
    has(r) {
      return Le.call(this, r, !0);
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
  Ts,
  Is,
  Ms,
  $s
] = /* @__PURE__ */ Ds();
function yt(e, t) {
  const n = t ? e ? $s : Ms : e ? Is : Ts;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    b(n, s) && s in o ? n : o,
    s,
    r
  );
}
const xs = {
  get: /* @__PURE__ */ yt(!1, !1)
}, Ps = {
  get: /* @__PURE__ */ yt(!0, !1)
}, Ls = {
  get: /* @__PURE__ */ yt(!0, !0)
};
function mn(e, t, n) {
  const o = h(n);
  if (o !== n && t.call(e, o)) {
    const s = cn(e);
    Ce(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const gn = /* @__PURE__ */ new WeakMap(), ks = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap();
function As(e) {
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
function js(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : As(cn(e));
}
function On(e) {
  return De(e) ? e : Vt(
    e,
    !1,
    Vs,
    xs,
    gn
  );
}
function bn(e) {
  return Vt(
    e,
    !0,
    Rs,
    Ps,
    En
  );
}
function He(e) {
  return Vt(
    e,
    !0,
    Cs,
    Ls,
    wn
  );
}
function Vt(e, t, n, o, s) {
  if (!k(e))
    return process.env.NODE_ENV !== "production" && Ce(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const l = js(e);
  if (l === 0)
    return e;
  const c = new Proxy(
    e,
    l === 2 ? o : n
  );
  return s.set(e, c), c;
}
function ue(e) {
  return De(e) ? ue(e.__v_raw) : !!(e && e.__v_isReactive);
}
function De(e) {
  return !!(e && e.__v_isReadonly);
}
function ht(e) {
  return !!(e && e.__v_isShallow);
}
function _t(e) {
  return ue(e) || De(e);
}
function h(e) {
  const t = e && e.__v_raw;
  return t ? h(t) : e;
}
function Hs(e) {
  return Object.isExtensible(e) && us(e, "__v_skip", !0), e;
}
const Rt = (e) => k(e) ? On(e) : e, Ct = (e) => k(e) ? bn(e) : e;
function A(e) {
  return !!(e && e.__v_isRef === !0);
}
function Fs(e) {
  return A(e) ? e.value : e;
}
const Ks = {
  get: (e, t, n) => Fs(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return A(s) && !A(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Bs(e) {
  return ue(e) ? e : new Proxy(e, Ks);
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ee = [];
function zs(e) {
  ee.push(e);
}
function Us() {
  ee.pop();
}
function w(e, ...t) {
  Ye();
  const n = ee.length ? ee[ee.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Ws();
  if (o)
    te(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${kn(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Gs(s)), console.warn(...r);
  }
  Qe();
}
function Ws() {
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
function Gs(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...qs(n));
  }), t;
}
function qs({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${kn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Js(e.props), r] : [s + r];
}
function Js(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Nn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Nn(e, t, n) {
  return L(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : A(t) ? (t = Nn(e, h(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : y(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = h(t), n ? t : [`${e}=`, t]);
}
const Dt = {
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
    Tt(s, t, n);
  }
}
function ye(e, t, n, o) {
  if (y(e)) {
    const r = te(e, t, n, o);
    return r && ls(r) && r.catch((l) => {
      Tt(l, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(ye(e[r], t, n, o));
  return s;
}
function Tt(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const l = t.proxy, c = process.env.NODE_ENV !== "production" ? Dt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let E = 0; E < u.length; E++)
          if (u[E](e, l, c) === !1)
            return;
      }
      r = r.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      te(
        a,
        null,
        10,
        [e, l, c]
      );
      return;
    }
  }
  Ys(e, n, s, o);
}
function Ys(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Dt[t];
    if (n && zs(n), w(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Us(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let ze = !1, vt = !1;
const P = [];
let q = 0;
const fe = [];
let B = null, G = 0;
const Sn = /* @__PURE__ */ Promise.resolve();
let It = null;
const Qs = 100;
function Xs(e) {
  const t = It || Sn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Zs(e) {
  let t = q + 1, n = P.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = P[o], r = Te(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function Mt(e) {
  (!P.length || !P.includes(
    e,
    ze && e.allowRecurse ? q + 1 : q
  )) && (e.id == null ? P.push(e) : P.splice(Zs(e.id), 0, e), yn());
}
function yn() {
  !ze && !vt && (vt = !0, It = Sn.then(Rn));
}
function Vn(e) {
  m(e) ? fe.push(...e) : (!B || !B.includes(
    e,
    e.allowRecurse ? G + 1 : G
  )) && fe.push(e), yn();
}
function eo(e) {
  if (fe.length) {
    const t = [...new Set(fe)].sort(
      (n, o) => Te(n) - Te(o)
    );
    if (fe.length = 0, B) {
      B.push(...t);
      return;
    }
    for (B = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), G = 0; G < B.length; G++)
      process.env.NODE_ENV !== "production" && Cn(e, B[G]) || B[G]();
    B = null, G = 0;
  }
}
const Te = (e) => e.id == null ? 1 / 0 : e.id, to = (e, t) => {
  const n = Te(e) - Te(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Rn(e) {
  vt = !1, ze = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), P.sort(to);
  const t = process.env.NODE_ENV !== "production" ? (n) => Cn(e, n) : re;
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
    q = 0, P.length = 0, eo(e), ze = !1, It = null, (P.length || fe.length) && Rn(e);
  }
}
function Cn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Qs) {
      const o = t.ownerInstance, s = o && Ln(o.type);
      return Tt(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const be = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (fn().__VUE_HMR_RUNTIME__ = {
  createRecord: ct(no),
  rerender: ct(so),
  reload: ct(oo)
});
const Ue = /* @__PURE__ */ new Map();
function no(e, t) {
  return Ue.has(e) ? !1 : (Ue.set(e, {
    initialDef: Ve(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ve(e) {
  return An(e) ? e.__vccOpts : e;
}
function so(e, t) {
  const n = Ue.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Ve(o.type).render = t), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function oo(e, t) {
  const n = Ue.get(e);
  if (!n)
    return;
  t = Ve(t), en(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = Ve(s.type);
    be.has(r) || (r !== n.initialDef && en(r, t), be.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (be.add(r), s.ceReload(t.styles), be.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, Mt(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Vn(() => {
    for (const s of o)
      be.delete(
        Ve(s.type)
      );
  });
}
function en(e, t) {
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
let oe, Fe = [];
function Dn(e, t) {
  var n, o;
  oe = e, oe ? (oe.enabled = !0, Fe.forEach(({ event: s, args: r }) => oe.emit(s, ...r)), Fe = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Dn(r, t);
  }), setTimeout(() => {
    oe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Fe = []);
  }, 3e3)) : Fe = [];
}
let z = null, ro = null;
const lo = Symbol.for("v-ndc"), io = (e) => e.__isSuspense;
function co(e, t) {
  t && t.pendingBranch ? m(e) ? t.effects.push(...e) : t.effects.push(e) : Vn(e);
}
const ao = Symbol.for("v-scx"), uo = () => {
  {
    const e = So(ao);
    return e || process.env.NODE_ENV !== "production" && w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Ke = {};
function fo(e, t, {
  immediate: n,
  deep: o,
  flush: s,
  once: r,
  onTrack: l,
  onTrigger: c
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
  const a = (d) => {
    w(
      "Invalid watch source: ",
      d,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = pe, E = (d) => o === !0 ? d : (
    // for deep: false, only traverse root-level properties
    le(d, o === !1 ? 1 : void 0)
  );
  let p, V = !1, $ = !1;
  if (A(e) ? (p = () => e.value, V = ht(e)) : ue(e) ? (p = () => E(e), V = !0) : m(e) ? ($ = !0, V = e.some((d) => ue(d) || ht(d)), p = () => e.map((d) => {
    if (A(d))
      return d.value;
    if (ue(d))
      return E(d);
    if (y(d))
      return te(d, u, 2);
    process.env.NODE_ENV !== "production" && a(d);
  })) : y(e) ? t ? p = () => te(e, u, 2) : p = () => (g && g(), ye(
    e,
    u,
    3,
    [Y]
  )) : (p = re, process.env.NODE_ENV !== "production" && a(e)), t && o) {
    const d = p;
    p = () => le(d());
  }
  let g, Y = (d) => {
    g = O.onStop = () => {
      te(d, u, 4), g = O.onStop = void 0;
    };
  }, H;
  if (xt)
    if (Y = re, t ? n && ye(t, u, 3, [
      p(),
      $ ? [] : void 0,
      Y
    ]) : p(), s === "sync") {
      const d = uo();
      H = d.__watcherHandles || (d.__watcherHandles = []);
    } else
      return re;
  let R = $ ? new Array(e.length).fill(Ke) : Ke;
  const x = () => {
    if (!(!O.active || !O.dirty))
      if (t) {
        const d = O.run();
        (o || V || ($ ? d.some((_e, Ze) => de(_e, R[Ze])) : de(d, R))) && (g && g(), ye(t, u, 3, [
          d,
          // pass undefined as the old value when it's changed for the first time
          R === Ke ? void 0 : $ && R[0] === Ke ? [] : R,
          Y
        ]), R = d);
      } else
        O.run();
  };
  x.allowRecurse = !!t;
  let F;
  s === "sync" ? F = x : s === "post" ? F = () => ln(x, u && u.suspense) : (x.pre = !0, u && (x.id = u.uid), F = () => Mt(x));
  const O = new ms(p, re, F), he = () => {
    O.stop();
  };
  return process.env.NODE_ENV !== "production" && (O.onTrack = l, O.onTrigger = c), t ? n ? x() : R = O.run() : s === "post" ? ln(
    O.run.bind(O),
    u && u.suspense
  ) : O.run(), H && H.push(he), he;
}
function po(e, t, n) {
  const o = this.proxy, s = L(e) ? e.includes(".") ? ho(o, e) : () => o[e] : e.bind(o, o);
  let r;
  y(t) ? r = t : (r = t.handler, n = t);
  const l = Pn(this), c = fo(s, r.bind(o), n);
  return l(), c;
}
function ho(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function le(e, t, n = 0, o) {
  if (!k(e) || e.__v_skip)
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
  else if (rs(e) || ae(e))
    e.forEach((s) => {
      le(s, t, n, o);
    });
  else if (cs(e))
    for (const s in e)
      le(e[s], t, n, o);
  return e;
}
function _o(e, t, n = pe, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      Ye();
      const c = Pn(n), a = ye(t, n, e, l);
      return c(), Qe(), a;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = as(Dt[e].replace(/ hook$/, ""));
    w(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const vo = (e) => (t, n = pe) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!xt || e === "sp") && _o(e, (...o) => t(...o), n)
), mo = vo("bum"), mt = (e) => e ? Po(e) ? Lo(e) || e.proxy : mt(e.parent) : null, Re = (
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
    $parent: (e) => mt(e.parent),
    $root: (e) => mt(e.root),
    $emit: (e) => e.emit,
    $options: (e) => wo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Mt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Xs.bind(e.proxy)),
    $watch: (e) => po.bind(e)
  })
), go = (e) => e === "_" || e === "$", at = (e, t) => e !== W && !e.__isScriptSetup && b(e, t), Eo = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: l, type: c, appContext: a } = e;
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
        if (at(o, t))
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
    let p, V;
    if (E)
      return t === "$attrs" ? (I(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && I(e, "get", t), E(e);
    if (
      // css module (injected by vue-loader)
      (p = c.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== W && b(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      V = a.config.globalProperties, b(V, t)
    )
      return V[t];
    process.env.NODE_ENV !== "production" && z && (!L(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== W && go(t[0]) && b(s, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === z && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return at(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && b(s, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== W && b(o, t) ? (o[t] = n, !0) : b(e.props, t) ? (process.env.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && w(
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
    let c;
    return !!n[l] || e !== W && b(e, l) || at(t, l) || (c = r[0]) && b(c, l) || b(o, l) || b(Re, l) || b(s.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : b(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Eo.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function tn(e) {
  return m(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function wo(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: l }
  } = e.appContext, c = r.get(t);
  let a;
  return c ? a = c : !s.length && !n && !o ? a = t : (a = {}, s.length && s.forEach(
    (u) => We(a, u, l, !0)
  ), We(a, t, l)), k(t) && r.set(t, a), a;
}
function We(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && We(e, r, n, !0), s && s.forEach(
    (l) => We(e, l, n, !0)
  );
  for (const l in t)
    if (o && l === "expose")
      process.env.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Oo[l] || n && n[l];
      e[l] = c ? c(e[l], t[l]) : t[l];
    }
  return e;
}
const Oo = {
  data: nn,
  props: on,
  emits: on,
  // objects
  methods: Ne,
  computed: Ne,
  // lifecycle
  beforeCreate: C,
  created: C,
  beforeMount: C,
  mounted: C,
  beforeUpdate: C,
  updated: C,
  beforeDestroy: C,
  beforeUnmount: C,
  destroyed: C,
  unmounted: C,
  activated: C,
  deactivated: C,
  errorCaptured: C,
  serverPrefetch: C,
  // assets
  components: Ne,
  directives: Ne,
  // watch
  watch: No,
  // provide / inject
  provide: nn,
  inject: bo
};
function nn(e, t) {
  return t ? e ? function() {
    return j(
      y(e) ? e.call(this, this) : e,
      y(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function bo(e, t) {
  return Ne(sn(e), sn(t));
}
function sn(e) {
  if (m(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function C(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ne(e, t) {
  return e ? j(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function on(e, t) {
  return e ? m(e) && m(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : j(
    /* @__PURE__ */ Object.create(null),
    tn(e),
    tn(t ?? {})
  ) : t;
}
function No(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = j(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = C(e[o], t[o]);
  return n;
}
let rn = null;
function So(e, t, n = !1) {
  const o = pe || z;
  if (o || rn) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : rn._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && y(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && w(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && w("inject() can only be used inside setup() or functional components.");
}
const ln = co, yo = (e) => e.__isTeleport, Tn = Symbol.for("v-fgt"), Vo = Symbol.for("v-txt"), Ro = Symbol.for("v-cmt");
let ie = null;
function Co(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Do = (...e) => $n(
  ...e
), In = "__vInternal", Mn = ({ key: e }) => e ?? null, Be = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? L(e) || A(e) || y(e) ? { i: z, r: e, k: t, f: !!n } : e : null);
function To(e, t = null, n = null, o = 0, s = null, r = e === Tn ? 0 : 1, l = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Mn(t),
    ref: t && Be(t),
    scopeId: ro,
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
  return c ? ($t(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= L(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && w("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !l && // has current parent block
  ie && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ie.push(a), a;
}
const Io = process.env.NODE_ENV !== "production" ? Do : $n;
function $n(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === lo) && (process.env.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = Ro), Co(e)) {
    const c = Ge(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && $t(c, n), !r && ie && (c.shapeFlag & 6 ? ie[ie.indexOf(e)] = c : ie.push(c)), c.patchFlag |= -2, c;
  }
  if (An(e) && (e = e.__vccOpts), t) {
    t = Mo(t);
    let { class: c, style: a } = t;
    c && !L(c) && (t.class = Ot(c)), k(a) && (_t(a) && !m(a) && (a = j({}, a)), t.style = wt(a));
  }
  const l = L(e) ? 1 : io(e) ? 128 : yo(e) ? 64 : k(e) ? 4 : y(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && l & 4 && _t(e) && (e = h(e), w(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), To(
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
function Mo(e) {
  return e ? _t(e) || In in e ? j({}, e) : e : null;
}
function Ge(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: l } = e, c = t ? xo(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Mn(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? m(s) ? s.concat(Be(t)) : [s, Be(t)] : Be(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && m(l) ? l.map(xn) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Tn ? r === -1 ? 16 : r | 16 : r,
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
function xn(e) {
  const t = Ge(e);
  return m(e.children) && (t.children = e.children.map(xn)), t;
}
function $o(e = " ", t = 0) {
  return Io(Vo, null, e, t);
}
function $t(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (m(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), $t(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(In in t) ? t._ctx = z : s === 3 && z && (z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    y(t) ? (t = { default: t, _ctx: z }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [$o(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function xo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = Ot([t.class, o.class]));
      else if (s === "style")
        t.style = wt([t.style, o.style]);
      else if (ss(s)) {
        const r = t[s], l = o[s];
        l && r !== l && !(m(r) && r.includes(l)) && (t[s] = r ? [].concat(r, l) : l);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
let pe = null, gt;
{
  const e = fn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((l) => l(r)) : s[0](r);
    };
  };
  gt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => pe = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => xt = n
  );
}
const Pn = (e) => {
  const t = pe;
  return gt(e), e.scope.on(), () => {
    e.scope.off(), gt(t);
  };
};
function Po(e) {
  return e.vnode.shapeFlag & 4;
}
let xt = !1;
function Lo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Bs(Hs(e.exposed)), {
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
const ko = /(?:^|[-_])(\w)/g, Ao = (e) => e.replace(ko, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ln(e, t = !0) {
  return y(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function kn(e, t, n = !1) {
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
  return o ? Ao(o) : n ? "App" : "Anonymous";
}
function An(e) {
  return y(e) && "__vccOpts" in e;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const jo = (...e) => {
  M.debugEnabled && console.info("[LktFieldSelect] ", ...e);
}, Ho = ["id", "multiple"], Fo = {
  key: 2,
  class: "lkt-field__select"
}, Ko = ["innerHTML"], Bo = ["title"], zo = ["innerHTML"], Uo = {
  key: 2,
  class: "lkt-field__select-dropdown"
}, Wo = { class: "lkt-field__select-search-container" }, Go = {
  key: 1,
  class: "lkt-field__select-options"
}, qo = ["onClick"], Jo = {
  key: 0,
  class: "lkt-field__select-option"
}, Yo = {
  key: 3,
  class: "lkt-field-select__read"
}, Qo = ["innerHTML", "title"], Xo = {
  key: 3,
  class: "lkt-field__state"
}, Zo = ["title"], er = {
  key: 4,
  class: "lkt-field-select__read-multiple"
}, tr = { key: 0 }, nr = ["title"], sr = ["innerHTML"], or = {
  key: 2,
  class: "lkt-field__state"
}, rr = ["title"], lr = ["innerHTML"], ir = /* @__PURE__ */ Gn({
  __name: "LktFieldSelect",
  props: {
    modelValue: { default: "" },
    class: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: zt(16) },
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
    noOptionsMessage: { default: ts() },
    resource: { default: "" },
    resourceData: { default: () => ({}) },
    slotData: { default: () => ({}) },
    searchStringResourceParam: { default: "query" },
    searchPlaceholder: { default: "" },
    useResourceSlot: { default: "" },
    multipleDisplay: { default: "list" },
    multipleDisplayEdition: { default: "inline" }
  },
  emits: ["update:modelValue", "click-ui", "selected-option"],
  setup(e, { expose: t, emit: n }) {
    const o = n, s = e, r = qn(), l = D(null), c = D(null), a = D(null), u = D(!s.readMode), E = zt(16), p = D(new Ut(s.options)), V = D(!1), $ = D(s.modelValue), g = D(s.modelValue), Y = D(!1), H = D(!1), R = D(!1), x = D(p.value.all()), F = D(p.value.all()), O = D("");
    s.closeOnSelect === null ? V.value = s.multiple === !0 : V.value = s.closeOnSelect;
    const he = S(() => s.resource !== ""), d = S(() => typeof s.valid == "function" ? s.valid() : s.valid), _e = S(() => g.value !== $.value), Ze = S(() => {
      const i = ["lkt-field", "lkt-field-select"];
      return s.palette && i.push(`lkt-field--${s.palette}`), _e.value && i.push("is-changed"), s.class && i.push(s.class), s.multiple && i.push("is-multiple"), s.disabled && i.push("is-disabled"), s.upperDropdown && !s.choiceDropdown && i.push("lkt-field-select-upper-dropdown"), s.choiceDropdown && i.push("lkt-field-select-choice-dropdown"), R.value && i.push("has-focus"), i.push(d.value ? "is-valid" : "is-error"), i.push(s.modelValue ? "is-filled" : "is-empty"), i.join(" ");
    }), jn = S(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplay}`), i.join(" ");
    }), Hn = S(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${s.multipleDisplayEdition}`), i.join(" ");
    }), Ie = S(() => {
      let i = {};
      return F.value.forEach((N) => {
        N.value == g.value && (i = N);
      }), i;
    }), et = S(() => {
      let i = "";
      return F.value.forEach((N) => {
        N.value == g.value && (i = N.label);
      }), i;
    }), Pt = S(() => {
      let i = [];
      return s.multiple && F.value.forEach((N) => {
        g.value.forEach((ge) => {
          ge == N.value && i.push(N);
        });
      }), i;
    }), Fn = S(() => Array.isArray(g.value) ? g.value.length : 0), ve = () => {
      F.value = p.value.all(), x.value = p.value.filter(O.value), H.value = !1;
    }, Lt = () => {
      O.value = "", ve();
    }, tt = async () => {
      if (H.value = !1, he.value) {
        H.value = !0, s.searchStringResourceParam && (s.resourceData[s.searchStringResourceParam] = O.value);
        const i = await Xn(s.resource, s.resourceData);
        p.value.receiveOptions(i.data), ve();
      } else
        ve();
    }, Kn = () => {
      g.value = $.value;
    }, Bn = () => s.modelValue, me = (i) => {
      Lt(), nt(i), R.value = !R.value, R.value && rt(() => {
        tt(), l.value.focus(), rt(() => {
          l.value.focus();
        });
      });
    };
    Ee(() => s.readMode, (i) => u.value = !i), Ee(() => s.modelValue, (i) => {
      g.value = i;
    }), Ee(g, (i) => {
      o("update:modelValue", i), o("selected-option", p.value.findByValue(i)), Y.value = !0, rt(() => Y.value = !1);
    }), Ee(O, ve), Ee(() => s.options, (i) => {
      p.value = new Ut(i);
    });
    const kt = (i) => {
      if (s.multiple) {
        let N = g.value.findIndex((ge) => ge == i.value);
        return typeof N > "u" && (N = -1), N;
      }
      return -1;
    }, zn = (i) => {
      if (s.multiple) {
        let N = kt(i);
        N === -1 ? g.value.push(i.value) : g.value.splice(N, 1);
      } else
        g.value = i.value, R.value = !1;
    }, Un = (i) => s.multiple ? kt(i) !== -1 : i.value == g.value, nt = (i) => {
      if (!a.value.contains(i.target)) {
        Lt(), R.value = !1;
        return;
      }
    }, At = (i) => {
      u.value = !u.value, u.value && focus();
    };
    window.addEventListener("click", nt), ve(), mo(() => {
      window.removeEventListener("click", nt);
    }), t({
      reset: Kn,
      value: Bn
    }), s.autoloadResource && s.resource !== "" && (jo("Auto loading Resource", s.resource, s.resourceData, s.autoloadResource), tt());
    const ne = S(() => s.useResourceSlot ? s.useResourceSlot : s.resource), jt = S(() => M.NO_OPTIONS_MESSAGE), st = S(() => ne.value !== "" && typeof M.customResourceOptionSlots[ne.value] < "u"), ot = S(() => M.customResourceOptionSlots[ne.value]), Ht = S(() => ne.value !== "" && typeof M.customResourceValueSlots[ne.value] < "u"), Ft = S(() => M.customResourceValueSlots[ne.value]);
    return (i, N) => {
      const ge = Kt("lkt-field-text"), Wn = Kt("lkt-loader");
      return f(), _("div", {
        class: Me(Ze.value),
        "data-show-ui": !1,
        ref: (v) => a.value = v
      }, [
        K(r).prefix ? Q(i.$slots, "prefix", { key: 0 }) : T("", !0),
        u.value ? (f(), _("select", {
          key: 1,
          ref: (v) => c.value = v,
          id: K(E),
          onFocus: $e(me, ["stop", "prevent"]),
          onBlur: $e(me, ["stop", "prevent"]),
          multiple: i.multiple,
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, Ho)) : T("", !0),
        u.value ? (f(), _("div", Fo, [
          i.multiple ? (f(), _("div", {
            key: 1,
            class: "lkt-field__select-value-multiple",
            onClick: me
          }, [
            xe("ul", {
              class: Me(Hn.value)
            }, [
              (f(!0), _(Oe, null, lt(Pt.value, (v) => (f(), _("li", {
                title: v.label
              }, [
                K(r).option ? Q(i.$slots, "option", {
                  key: 0,
                  option: v,
                  data: i.slotData
                }) : st.value ? (f(), se(we(ot.value), {
                  key: 1,
                  option: v
                }, null, 8, ["option"])) : (f(), _("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: v.label
                }, null, 8, zo))
              ], 8, Bo))), 256))
            ], 2)
          ])) : (f(), _("div", {
            key: 0,
            class: "lkt-field__select-value",
            onClick: me
          }, [
            K(r).option ? Q(i.$slots, "option", {
              key: 0,
              option: Ie.value,
              data: i.slotData
            }) : T("", !0),
            st.value ? (f(), se(we(ot.value), {
              key: 1,
              option: Ie.value
            }, null, 8, ["option"])) : (f(), _("div", {
              key: 2,
              class: "lkt-field-select__read-value",
              innerHTML: et.value
            }, null, 8, Ko))
          ])),
          R.value ? (f(), _("div", Uo, [
            Jn(xe("div", Wo, [
              Yn(ge, {
                ref: (v) => l.value = v,
                modelValue: O.value,
                "onUpdate:modelValue": N[0] || (N[0] = (v) => O.value = v),
                placeholder: i.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search",
                onKeyup: tt
              }, null, 8, ["modelValue", "placeholder"])
            ], 512), [
              [Qn, i.searchable]
            ]),
            H.value ? (f(), se(Wn, { key: 0 })) : T("", !0),
            !i.readonly && !H.value ? (f(), _("ul", Go, [
              (f(!0), _(Oe, null, lt(x.value, (v) => (f(), _("li", {
                class: Me(["lkt-field__select-option", { "is-active": i.multiple ? Un(v) : v.value == g.value }]),
                onClick: $e((cr) => zn(v), ["prevent", "stop"])
              }, [
                K(r).option ? Q(i.$slots, "option", {
                  key: 0,
                  option: v,
                  data: i.slotData
                }) : T("", !0),
                st.value ? (f(), se(we(ot.value), {
                  key: 1,
                  option: v
                }, null, 8, ["option"])) : (f(), _(Oe, { key: 2 }, [
                  Bt(it(v.label), 1)
                ], 64))
              ], 10, qo))), 256)),
              x.value.length === 0 && (K(r)["no-results"] || jt.value) ? (f(), _("li", Jo, [
                K(r)["no-results"] ? Q(i.$slots, "no-results", { key: 0 }) : (f(), _(Oe, { key: 1 }, [
                  Bt(it(jt.value), 1)
                ], 64))
              ])) : T("", !0)
            ])) : T("", !0)
          ])) : T("", !0)
        ])) : T("", !0),
        !u.value && !i.multiple ? (f(), _("div", Yo, [
          K(r).value ? Q(i.$slots, "value", {
            key: 0,
            option: Ie.value,
            data: i.slotData
          }) : Ht.value ? (f(), se(we(Ft.value), {
            key: 1,
            option: Ie.value
          }, null, 8, ["option"])) : (f(), _("div", {
            key: 2,
            class: "lkt-field-select__read-value",
            innerHTML: et.value,
            title: et.value
          }, null, 8, Qo)),
          i.allowReadModeSwitch ? (f(), _("div", Xo, [
            xe("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: At
            }, null, 8, Zo)
          ])) : T("", !0)
        ])) : T("", !0),
        !u.value && i.multiple ? (f(), _("div", er, [
          i.multipleDisplay === "count" ? (f(), _("div", tr, it(Fn.value), 1)) : (f(), _("ul", {
            key: 1,
            class: Me(jn.value)
          }, [
            (f(!0), _(Oe, null, lt(Pt.value, (v) => (f(), _("li", {
              title: v.label
            }, [
              K(r).value ? Q(i.$slots, "value", {
                key: 0,
                option: v,
                data: i.slotData
              }) : Ht.value ? (f(), se(we(Ft.value), {
                key: 1,
                option: v
              }, null, 8, ["option"])) : (f(), _("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: v.label
              }, null, 8, sr))
            ], 8, nr))), 256))
          ], 2)),
          i.allowReadModeSwitch ? (f(), _("div", or, [
            xe("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: At
            }, null, 8, rr)
          ])) : T("", !0)
        ])) : T("", !0),
        i.label ? (f(), _("label", {
          key: 5,
          innerHTML: i.label,
          onClick: $e(me, ["stop", "prevent"])
        }, null, 8, lr)) : T("", !0)
      ], 2);
    };
  }
}), mr = {
  install: (e) => {
    e.component("lkt-field-select") === void 0 && e.component("lkt-field-select", ir), e.component("lkt-loader") === void 0 && e.use(Zn), e.component("lkt-field-text") === void 0 && e.use(es);
  }
};
export {
  mr as default,
  hr as setNoOptionsMessage,
  _r as setResourceOptionSlot,
  vr as setResourceValueSlot
};
