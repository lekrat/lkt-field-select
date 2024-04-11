import { defineComponent as Yn, useSlots as Qn, ref as D, computed as y, watch as ge, nextTick as ot, withAsyncContext as Xn, resolveComponent as Kt, openBlock as f, createElementBlock as _, normalizeClass as xe, unref as K, renderSlot as X, createCommentVNode as T, withModifiers as Me, createBlock as re, resolveDynamicComponent as Ee, createElementVNode as $e, Fragment as we, renderList as rt, withDirectives as Zn, createVNode as es, vShow as ts, createTextVNode as Bt, toDisplayString as lt } from "vue";
import { generateRandomString as zt } from "lkt-string-tools";
import { httpCall as Ut } from "lkt-http-client";
import ns from "lkt-loader";
import ss from "lkt-field-text";
const Re = class Re {
};
Re.NO_OPTIONS_MESSAGE = "", Re.customResourceOptionSlots = {}, Re.customResourceValueSlots = {};
let $ = Re;
const os = () => $.NO_OPTIONS_MESSAGE, mr = (e) => ($.NO_OPTIONS_MESSAGE = e, !0), gr = (e, t) => ($.customResourceOptionSlots[e] = t, !0), Er = (e, t) => ($.customResourceValueSlots[e] = t, !0);
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
function rs(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const G = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const ie = () => {
}, ls = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), H = Object.assign, is = Object.prototype.hasOwnProperty, w = (e, t) => is.call(e, t), m = Array.isArray, ue = (e) => Je(e) === "[object Map]", cs = (e) => Je(e) === "[object Set]", V = (e) => typeof e == "function", L = (e) => typeof e == "string", qe = (e) => typeof e == "symbol", A = (e) => e !== null && typeof e == "object", as = (e) => (A(e) || V(e)) && V(e.then) && V(e.catch), us = Object.prototype.toString, Je = (e) => us.call(e), an = (e) => Je(e).slice(8, -1), fs = (e) => Je(e) === "[object Object]", gt = (e) => L(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, un = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, fn = un((e) => e.charAt(0).toUpperCase() + e.slice(1)), ds = un((e) => e ? `on${fn(e)}` : ""), pe = (e, t) => !Object.is(e, t), ps = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Gt;
const dn = () => Gt || (Gt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Et(e) {
  if (m(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = L(o) ? ms(o) : Et(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (L(e) || A(e))
    return e;
}
const hs = /;(?![^(]*\))/g, _s = /:([^]+)/, vs = /\/\*[^]*?\*\//g;
function ms(e) {
  const t = {};
  return e.replace(vs, "").split(hs).forEach((n) => {
    if (n) {
      const o = n.split(_s);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function wt(e) {
  let t = "";
  if (L(e))
    t = e;
  else if (m(e))
    for (let n = 0; n < e.length; n++) {
      const o = wt(e[n]);
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
function Ce(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let gs;
function Es(e, t = gs) {
  t && t.active && t.effects.push(e);
}
let be;
class ws {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Es(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ye();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Os(n.computed), this._dirtyLevel >= 4))
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
    let t = Z, n = be;
    try {
      return Z = !0, be = this, this._runnings++, qt(this), this.fn();
    } finally {
      Jt(this), this._runnings--, be = n, Z = t;
    }
  }
  stop() {
    var t;
    this.active && (qt(this), Jt(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Os(e) {
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
let Z = !0, at = 0;
const hn = [];
function Ye() {
  hn.push(Z), Z = !1;
}
function Qe() {
  const e = hn.pop();
  Z = e === void 0 ? !0 : e;
}
function Ot() {
  at++;
}
function Nt() {
  for (at--; !at && ut.length; )
    ut.shift()();
}
function Ns(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && pn(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, H({ effect: e }, n)));
  }
}
const ut = [];
function bs(e, t, n) {
  var o;
  Ot();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, H({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && ut.push(s.scheduler)));
  }
  Nt();
}
const Ss = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, ft = /* @__PURE__ */ new WeakMap(), ee = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), dt = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function I(e, t, n) {
  if (Z && be) {
    let o = ft.get(e);
    o || ft.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Ss(() => o.delete(n))), Ns(
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
  const l = ft.get(e);
  if (!l)
    return;
  let c = [];
  if (t === "clear")
    c = [...l.values()];
  else if (n === "length" && m(e)) {
    const a = Number(o);
    l.forEach((p, g) => {
      (g === "length" || !qe(g) && g >= a) && c.push(p);
    });
  } else
    switch (n !== void 0 && c.push(l.get(n)), t) {
      case "add":
        m(e) ? gt(n) && c.push(l.get("length")) : (c.push(l.get(ee)), ue(e) && c.push(l.get(dt)));
        break;
      case "delete":
        m(e) || (c.push(l.get(ee)), ue(e) && c.push(l.get(dt)));
        break;
      case "set":
        ue(e) && c.push(l.get(ee));
        break;
    }
  Ot();
  for (const a of c)
    a && bs(
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
const ys = /* @__PURE__ */ rs("__proto__,__v_isRef,__isVue"), _n = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qe)
), Yt = /* @__PURE__ */ Vs();
function Vs() {
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
      Ye(), Ot();
      const o = h(this)[t].apply(this, n);
      return Nt(), Qe(), o;
    };
  }), e;
}
function Rs(e) {
  const t = h(this);
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
      return o === (s ? r ? On : wn : r ? Hs : En).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const l = m(t);
    if (!s) {
      if (l && w(Yt, n))
        return Reflect.get(Yt, n, o);
      if (n === "hasOwnProperty")
        return Rs;
    }
    const c = Reflect.get(t, n, o);
    return (qe(n) ? _n.has(n) : ys(n)) || (s || I(t, "get", n), r) ? c : k(c) ? l && gt(n) ? c : c.value : A(c) ? s ? bn(c) : Nn(c) : c;
  }
}
class Cs extends vn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const a = De(r);
      if (!pt(o) && !De(o) && (r = h(r), o = h(o)), !m(t) && k(r) && !k(o))
        return a ? !1 : (r.value = o, !0);
    }
    const l = m(t) && gt(n) ? Number(n) < t.length : w(t, n), c = Reflect.set(t, n, o, s);
    return t === h(s) && (l ? pe(o, r) && Y(t, "set", n, o, r) : Y(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = w(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && Y(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!qe(n) || !_n.has(n)) && I(t, "has", n), o;
  }
  ownKeys(t) {
    return I(
      t,
      "iterate",
      m(t) ? "length" : ee
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
const Ds = /* @__PURE__ */ new Cs(), Ts = /* @__PURE__ */ new mn(), Is = /* @__PURE__ */ new mn(!0), bt = (e) => e, Xe = (e) => Reflect.getPrototypeOf(e);
function Pe(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = h(e), r = h(t);
  n || (pe(t, r) && I(s, "get", t), I(s, "get", r));
  const { has: l } = Xe(s), c = o ? bt : n ? Rt : Vt;
  if (l.call(s, t))
    return c(e.get(t));
  if (l.call(s, r))
    return c(e.get(r));
  e !== s && e.get(t);
}
function Le(e, t = !1) {
  const n = this.__v_raw, o = h(n), s = h(e);
  return t || (pe(e, s) && I(o, "has", e), I(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Ae(e, t = !1) {
  return e = e.__v_raw, !t && I(h(e), "iterate", ee), Reflect.get(e, "size", e);
}
function Qt(e) {
  e = h(e);
  const t = h(this);
  return Xe(t).has.call(t, e) || (t.add(e), Y(t, "add", e, e)), this;
}
function Xt(e, t) {
  t = h(t);
  const n = h(this), { has: o, get: s } = Xe(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && gn(n, o, e) : (e = h(e), r = o.call(n, e));
  const l = s.call(n, e);
  return n.set(e, t), r ? pe(t, l) && Y(n, "set", e, t, l) : Y(n, "add", e, t), this;
}
function Zt(e) {
  const t = h(this), { has: n, get: o } = Xe(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && gn(t, n, e) : (e = h(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, l = t.delete(e);
  return s && Y(t, "delete", e, void 0, r), l;
}
function en() {
  const e = h(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ue(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Y(e, "clear", void 0, void 0, n), o;
}
function ke(e, t) {
  return function(o, s) {
    const r = this, l = r.__v_raw, c = h(l), a = t ? bt : e ? Rt : Vt;
    return !e && I(c, "iterate", ee), l.forEach((p, g) => o.call(s, a(p), a(g), r));
  };
}
function je(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = h(s), l = ue(r), c = e === "entries" || e === Symbol.iterator && l, a = e === "keys" && l, p = s[e](...o), g = n ? bt : t ? Rt : Vt;
    return !t && I(
      r,
      "iterate",
      a ? dt : ee
    ), {
      // iterator protocol
      next() {
        const { value: d, done: C } = p.next();
        return C ? { value: d, done: C } : {
          value: c ? [g(d[0]), g(d[1])] : g(d),
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
      Ce(
        `${fn(e)} operation ${n}failed: target is readonly.`,
        h(this)
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
      return Ae(this);
    },
    has: Le,
    add: Qt,
    set: Xt,
    delete: Zt,
    clear: en,
    forEach: ke(!1, !1)
  }, t = {
    get(r) {
      return Pe(this, r, !1, !0);
    },
    get size() {
      return Ae(this);
    },
    has: Le,
    add: Qt,
    set: Xt,
    delete: Zt,
    clear: en,
    forEach: ke(!1, !0)
  }, n = {
    get(r) {
      return Pe(this, r, !0);
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
    forEach: ke(!0, !1)
  }, o = {
    get(r) {
      return Pe(this, r, !0, !0);
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
    forEach: ke(!0, !0)
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
  Ms,
  $s,
  Ps,
  Ls
] = /* @__PURE__ */ xs();
function St(e, t) {
  const n = t ? e ? Ls : Ps : e ? $s : Ms;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    w(n, s) && s in o ? n : o,
    s,
    r
  );
}
const As = {
  get: /* @__PURE__ */ St(!1, !1)
}, ks = {
  get: /* @__PURE__ */ St(!0, !1)
}, js = {
  get: /* @__PURE__ */ St(!0, !0)
};
function gn(e, t, n) {
  const o = h(n);
  if (o !== n && t.call(e, o)) {
    const s = an(e);
    Ce(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const En = /* @__PURE__ */ new WeakMap(), Hs = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ new WeakMap();
function Fs(e) {
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
function Ks(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Fs(an(e));
}
function Nn(e) {
  return De(e) ? e : yt(
    e,
    !1,
    Ds,
    As,
    En
  );
}
function bn(e) {
  return yt(
    e,
    !0,
    Ts,
    ks,
    wn
  );
}
function He(e) {
  return yt(
    e,
    !0,
    Is,
    js,
    On
  );
}
function yt(e, t, n, o, s) {
  if (!A(e))
    return process.env.NODE_ENV !== "production" && Ce(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const l = Ks(e);
  if (l === 0)
    return e;
  const c = new Proxy(
    e,
    l === 2 ? o : n
  );
  return s.set(e, c), c;
}
function fe(e) {
  return De(e) ? fe(e.__v_raw) : !!(e && e.__v_isReactive);
}
function De(e) {
  return !!(e && e.__v_isReadonly);
}
function pt(e) {
  return !!(e && e.__v_isShallow);
}
function ht(e) {
  return fe(e) || De(e);
}
function h(e) {
  const t = e && e.__v_raw;
  return t ? h(t) : e;
}
function Bs(e) {
  return Object.isExtensible(e) && ps(e, "__v_skip", !0), e;
}
const Vt = (e) => A(e) ? Nn(e) : e, Rt = (e) => A(e) ? bn(e) : e;
function k(e) {
  return !!(e && e.__v_isRef === !0);
}
function zs(e) {
  return k(e) ? e.value : e;
}
const Us = {
  get: (e, t, n) => zs(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return k(s) && !k(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ws(e) {
  return fe(e) ? e : new Proxy(e, Us);
}
/**
* @vue/runtime-core v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const te = [];
function Gs(e) {
  te.push(e);
}
function qs() {
  te.pop();
}
function E(e, ...t) {
  Ye();
  const n = te.length ? te[te.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Js();
  if (o)
    ne(
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
`, ...Ys(s)), console.warn(...r);
  }
  Qe();
}
function Js() {
  let e = te[te.length - 1];
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
function Ys(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Qs(n));
  }), t;
}
function Qs({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${kn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Xs(e.props), r] : [s + r];
}
function Xs(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Sn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Sn(e, t, n) {
  return L(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : k(t) ? (t = Sn(e, h(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : V(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = h(t), n ? t : [`${e}=`, t]);
}
const Ct = {
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
function ne(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    Dt(s, t, n);
  }
}
function Se(e, t, n, o) {
  if (V(e)) {
    const r = ne(e, t, n, o);
    return r && as(r) && r.catch((l) => {
      Dt(l, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(Se(e[r], t, n, o));
  return s;
}
function Dt(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const l = t.proxy, c = process.env.NODE_ENV !== "production" ? Ct[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const p = r.ec;
      if (p) {
        for (let g = 0; g < p.length; g++)
          if (p[g](e, l, c) === !1)
            return;
      }
      r = r.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      ne(
        a,
        null,
        10,
        [e, l, c]
      );
      return;
    }
  }
  Zs(e, n, s, o);
}
function Zs(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Ct[t];
    if (n && Gs(n), E(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && qs(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let ze = !1, _t = !1;
const P = [];
let J = 0;
const de = [];
let B = null, q = 0;
const yn = /* @__PURE__ */ Promise.resolve();
let Tt = null;
const eo = 100;
function to(e) {
  const t = Tt || yn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function no(e) {
  let t = J + 1, n = P.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = P[o], r = Te(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function It(e) {
  (!P.length || !P.includes(
    e,
    ze && e.allowRecurse ? J + 1 : J
  )) && (e.id == null ? P.push(e) : P.splice(no(e.id), 0, e), Vn());
}
function Vn() {
  !ze && !_t && (_t = !0, Tt = yn.then(Cn));
}
function Rn(e) {
  m(e) ? de.push(...e) : (!B || !B.includes(
    e,
    e.allowRecurse ? q + 1 : q
  )) && de.push(e), Vn();
}
function so(e) {
  if (de.length) {
    const t = [...new Set(de)].sort(
      (n, o) => Te(n) - Te(o)
    );
    if (de.length = 0, B) {
      B.push(...t);
      return;
    }
    for (B = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), q = 0; q < B.length; q++)
      process.env.NODE_ENV !== "production" && Dn(e, B[q]) || B[q]();
    B = null, q = 0;
  }
}
const Te = (e) => e.id == null ? 1 / 0 : e.id, oo = (e, t) => {
  const n = Te(e) - Te(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Cn(e) {
  _t = !1, ze = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), P.sort(oo);
  const t = process.env.NODE_ENV !== "production" ? (n) => Dn(e, n) : ie;
  try {
    for (J = 0; J < P.length; J++) {
      const n = P[J];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        ne(n, null, 14);
      }
    }
  } finally {
    J = 0, P.length = 0, so(e), ze = !1, Tt = null, (P.length || de.length) && Cn(e);
  }
}
function Dn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > eo) {
      const o = t.ownerInstance, s = o && An(o.type);
      return Dt(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Oe = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (dn().__VUE_HMR_RUNTIME__ = {
  createRecord: it(ro),
  rerender: it(lo),
  reload: it(io)
});
const Ue = /* @__PURE__ */ new Map();
function ro(e, t) {
  return Ue.has(e) ? !1 : (Ue.set(e, {
    initialDef: ye(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ye(e) {
  return jn(e) ? e.__vccOpts : e;
}
function lo(e, t) {
  const n = Ue.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, ye(o.type).render = t), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function io(e, t) {
  const n = Ue.get(e);
  if (!n)
    return;
  t = ye(t), tn(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = ye(s.type);
    Oe.has(r) || (r !== n.initialDef && tn(r, t), Oe.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Oe.add(r), s.ceReload(t.styles), Oe.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, It(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Rn(() => {
    for (const s of o)
      Oe.delete(
        ye(s.type)
      );
  });
}
function tn(e, t) {
  H(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function it(e) {
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
function Tn(e, t) {
  var n, o;
  le = e, le ? (le.enabled = !0, Fe.forEach(({ event: s, args: r }) => le.emit(s, ...r)), Fe = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Tn(r, t);
  }), setTimeout(() => {
    le || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Fe = []);
  }, 3e3)) : Fe = [];
}
let z = null, co = null;
const ao = Symbol.for("v-ndc"), uo = (e) => e.__isSuspense;
function fo(e, t) {
  t && t.pendingBranch ? m(e) ? t.effects.push(...e) : t.effects.push(e) : Rn(e);
}
const po = Symbol.for("v-scx"), ho = () => {
  {
    const e = Ro(po);
    return e || process.env.NODE_ENV !== "production" && E(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Ke = {};
function _o(e, t, {
  immediate: n,
  deep: o,
  flush: s,
  once: r,
  onTrack: l,
  onTrigger: c
} = G) {
  if (t && r) {
    const u = t;
    t = (..._e) => {
      u(..._e), U();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && E(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && E(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && E(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && E(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const a = (u) => {
    E(
      "Invalid watch source: ",
      u,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = he, g = (u) => o === !0 ? u : (
    // for deep: false, only traverse root-level properties
    ce(u, o === !1 ? 1 : void 0)
  );
  let d, C = !1, b = !1;
  if (k(e) ? (d = () => e.value, C = pt(e)) : fe(e) ? (d = () => g(e), C = !0) : m(e) ? (b = !0, C = e.some((u) => fe(u) || pt(u)), d = () => e.map((u) => {
    if (k(u))
      return u.value;
    if (fe(u))
      return g(u);
    if (V(u))
      return ne(u, p, 2);
    process.env.NODE_ENV !== "production" && a(u);
  })) : V(e) ? t ? d = () => ne(e, p, 2) : d = () => (F && F(), Se(
    e,
    p,
    3,
    [Q]
  )) : (d = ie, process.env.NODE_ENV !== "production" && a(e)), t && o) {
    const u = d;
    d = () => ce(u());
  }
  let F, Q = (u) => {
    F = S.onStop = () => {
      ne(u, p, 4), F = S.onStop = void 0;
    };
  }, O;
  if (Mt)
    if (Q = ie, t ? n && Se(t, p, 3, [
      d(),
      b ? [] : void 0,
      Q
    ]) : d(), s === "sync") {
      const u = ho();
      O = u.__watcherHandles || (u.__watcherHandles = []);
    } else
      return ie;
  let j = b ? new Array(e.length).fill(Ke) : Ke;
  const x = () => {
    if (!(!S.active || !S.dirty))
      if (t) {
        const u = S.run();
        (o || C || (b ? u.some((_e, Ze) => pe(_e, j[Ze])) : pe(u, j))) && (F && F(), Se(t, p, 3, [
          u,
          // pass undefined as the old value when it's changed for the first time
          j === Ke ? void 0 : b && j[0] === Ke ? [] : j,
          Q
        ]), j = u);
      } else
        S.run();
  };
  x.allowRecurse = !!t;
  let M;
  s === "sync" ? M = x : s === "post" ? M = () => cn(x, p && p.suspense) : (x.pre = !0, p && (x.id = p.uid), M = () => It(x));
  const S = new ws(d, ie, M), U = () => {
    S.stop();
  };
  return process.env.NODE_ENV !== "production" && (S.onTrack = l, S.onTrigger = c), t ? n ? x() : j = S.run() : s === "post" ? cn(
    S.run.bind(S),
    p && p.suspense
  ) : S.run(), O && O.push(U), U;
}
function vo(e, t, n) {
  const o = this.proxy, s = L(e) ? e.includes(".") ? mo(o, e) : () => o[e] : e.bind(o, o);
  let r;
  V(t) ? r = t : (r = t.handler, n = t);
  const l = Ln(this), c = _o(s, r.bind(o), n);
  return l(), c;
}
function mo(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function ce(e, t, n = 0, o) {
  if (!A(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (o = o || /* @__PURE__ */ new Set(), o.has(e))
    return e;
  if (o.add(e), k(e))
    ce(e.value, t, n, o);
  else if (m(e))
    for (let s = 0; s < e.length; s++)
      ce(e[s], t, n, o);
  else if (cs(e) || ue(e))
    e.forEach((s) => {
      ce(s, t, n, o);
    });
  else if (fs(e))
    for (const s in e)
      ce(e[s], t, n, o);
  return e;
}
function go(e, t, n = he, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...l) => {
      if (n.isUnmounted)
        return;
      Ye();
      const c = Ln(n), a = Se(t, n, e, l);
      return c(), Qe(), a;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = ds(Ct[e].replace(/ hook$/, ""));
    E(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Eo = (e) => (t, n = he) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Mt || e === "sp") && go(e, (...o) => t(...o), n)
), wo = Eo("bum"), vt = (e) => e ? ko(e) ? jo(e) || e.proxy : vt(e.parent) : null, Ve = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ H(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? He(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? He(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? He(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? He(e.refs) : e.refs,
    $parent: (e) => vt(e.parent),
    $root: (e) => vt(e.root),
    $emit: (e) => e.emit,
    $options: (e) => bo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, It(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = to.bind(e.proxy)),
    $watch: (e) => vo.bind(e)
  })
), Oo = (e) => e === "_" || e === "$", ct = (e, t) => e !== G && !e.__isScriptSetup && w(e, t), No = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: l, type: c, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const b = l[t];
      if (b !== void 0)
        switch (b) {
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
        if (ct(o, t))
          return l[t] = 1, o[t];
        if (s !== G && w(s, t))
          return l[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && w(p, t)
        )
          return l[t] = 3, r[t];
        if (n !== G && w(n, t))
          return l[t] = 4, n[t];
        l[t] = 0;
      }
    }
    const g = Ve[t];
    let d, C;
    if (g)
      return t === "$attrs" ? (I(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && I(e, "get", t), g(e);
    if (
      // css module (injected by vue-loader)
      (d = c.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== G && w(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      C = a.config.globalProperties, w(C, t)
    )
      return C[t];
    process.env.NODE_ENV !== "production" && z && (!L(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== G && Oo(t[0]) && w(s, t) ? E(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === z && E(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return ct(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && w(s, t) ? (E(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== G && w(o, t) ? (o[t] = n, !0) : w(e.props, t) ? (process.env.NODE_ENV !== "production" && E(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && E(
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
    return !!n[l] || e !== G && w(e, l) || ct(t, l) || (c = r[0]) && w(c, l) || w(o, l) || w(Ve, l) || w(s.config.globalProperties, l);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : w(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (No.ownKeys = (e) => (E(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function nn(e) {
  return m(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function bo(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: l }
  } = e.appContext, c = r.get(t);
  let a;
  return c ? a = c : !s.length && !n && !o ? a = t : (a = {}, s.length && s.forEach(
    (p) => We(a, p, l, !0)
  ), We(a, t, l)), A(t) && r.set(t, a), a;
}
function We(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && We(e, r, n, !0), s && s.forEach(
    (l) => We(e, l, n, !0)
  );
  for (const l in t)
    if (o && l === "expose")
      process.env.NODE_ENV !== "production" && E(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = So[l] || n && n[l];
      e[l] = c ? c(e[l], t[l]) : t[l];
    }
  return e;
}
const So = {
  data: sn,
  props: rn,
  emits: rn,
  // objects
  methods: Ne,
  computed: Ne,
  // lifecycle
  beforeCreate: R,
  created: R,
  beforeMount: R,
  mounted: R,
  beforeUpdate: R,
  updated: R,
  beforeDestroy: R,
  beforeUnmount: R,
  destroyed: R,
  unmounted: R,
  activated: R,
  deactivated: R,
  errorCaptured: R,
  serverPrefetch: R,
  // assets
  components: Ne,
  directives: Ne,
  // watch
  watch: Vo,
  // provide / inject
  provide: sn,
  inject: yo
};
function sn(e, t) {
  return t ? e ? function() {
    return H(
      V(e) ? e.call(this, this) : e,
      V(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function yo(e, t) {
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
function R(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ne(e, t) {
  return e ? H(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function rn(e, t) {
  return e ? m(e) && m(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : H(
    /* @__PURE__ */ Object.create(null),
    nn(e),
    nn(t ?? {})
  ) : t;
}
function Vo(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = H(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = R(e[o], t[o]);
  return n;
}
let ln = null;
function Ro(e, t, n = !1) {
  const o = he || z;
  if (o || ln) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : ln._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && V(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && E(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && E("inject() can only be used inside setup() or functional components.");
}
const cn = fo, Co = (e) => e.__isTeleport, In = Symbol.for("v-fgt"), Do = Symbol.for("v-txt"), To = Symbol.for("v-cmt");
let ae = null;
function Io(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const xo = (...e) => $n(
  ...e
), xn = "__vInternal", Mn = ({ key: e }) => e ?? null, Be = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? L(e) || k(e) || V(e) ? { i: z, r: e, k: t, f: !!n } : e : null);
function Mo(e, t = null, n = null, o = 0, s = null, r = e === In ? 0 : 1, l = !1, c = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Mn(t),
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
  return c ? (xt(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= L(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && E("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !l && // has current parent block
  ae && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ae.push(a), a;
}
const $o = process.env.NODE_ENV !== "production" ? xo : $n;
function $n(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === ao) && (process.env.NODE_ENV !== "production" && !e && E(`Invalid vnode type when creating vnode: ${e}.`), e = To), Io(e)) {
    const c = Ge(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && xt(c, n), !r && ae && (c.shapeFlag & 6 ? ae[ae.indexOf(e)] = c : ae.push(c)), c.patchFlag |= -2, c;
  }
  if (jn(e) && (e = e.__vccOpts), t) {
    t = Po(t);
    let { class: c, style: a } = t;
    c && !L(c) && (t.class = wt(c)), A(a) && (ht(a) && !m(a) && (a = H({}, a)), t.style = Et(a));
  }
  const l = L(e) ? 1 : uo(e) ? 128 : Co(e) ? 64 : A(e) ? 4 : V(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && l & 4 && ht(e) && (e = h(e), E(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Mo(
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
function Po(e) {
  return e ? ht(e) || xn in e ? H({}, e) : e : null;
}
function Ge(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: l } = e, c = t ? Ao(o || {}, t) : o;
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
    ssContent: e.ssContent && Ge(e.ssContent),
    ssFallback: e.ssFallback && Ge(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Pn(e) {
  const t = Ge(e);
  return m(e.children) && (t.children = e.children.map(Pn)), t;
}
function Lo(e = " ", t = 0) {
  return $o(Do, null, e, t);
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
      !s && !(xn in t) ? t._ctx = z : s === 3 && z && (z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    V(t) ? (t = { default: t, _ctx: z }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Lo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ao(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = wt([t.class, o.class]));
      else if (s === "style")
        t.style = Et([t.style, o.style]);
      else if (ls(s)) {
        const r = t[s], l = o[s];
        l && r !== l && !(m(r) && r.includes(l)) && (t[s] = r ? [].concat(r, l) : l);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
let he = null, mt;
{
  const e = dn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((l) => l(r)) : s[0](r);
    };
  };
  mt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => he = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Mt = n
  );
}
const Ln = (e) => {
  const t = he;
  return mt(e), e.scope.on(), () => {
    e.scope.off(), mt(t);
  };
};
function ko(e) {
  return e.vnode.shapeFlag & 4;
}
let Mt = !1;
function jo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ws(Bs(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in Ve)
          return Ve[n](e);
      },
      has(t, n) {
        return n in t || n in Ve;
      }
    }));
}
const Ho = /(?:^|[-_])(\w)/g, Fo = (e) => e.replace(Ho, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function An(e, t = !0) {
  return V(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function kn(e, t, n = !1) {
  let o = An(t);
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
  return o ? Fo(o) : n ? "App" : "Anonymous";
}
function jn(e) {
  return V(e) && "__vccOpts" in e;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const Ko = ["id", "multiple"], Bo = {
  key: 2,
  class: "lkt-field__select"
}, zo = ["innerHTML"], Uo = ["title"], Wo = ["innerHTML"], Go = {
  key: 2,
  class: "lkt-field__select-dropdown"
}, qo = { class: "lkt-field__select-search-container" }, Jo = {
  key: 1,
  class: "lkt-field__select-options"
}, Yo = ["onClick"], Qo = {
  key: 0,
  class: "lkt-field__select-option"
}, Xo = {
  key: 3,
  class: "lkt-field-select__read"
}, Zo = ["innerHTML", "title"], er = {
  key: 3,
  class: "lkt-field__state"
}, tr = ["title"], nr = {
  key: 4,
  class: "lkt-field-select__read-multiple"
}, sr = { key: 0 }, or = ["title"], rr = ["innerHTML"], lr = {
  key: 2,
  class: "lkt-field__state"
}, ir = ["title"], cr = ["innerHTML"], ar = { name: "LktFieldSelect", inheritAttrs: !1 }, ur = /* @__PURE__ */ Yn({
  ...ar,
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
    noOptionsMessage: { default: os() },
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
  async setup(e, { expose: t, emit: n }) {
    let o, s;
    const r = n, l = e, c = Qn(), a = D(null), p = D(null), g = D(null), d = D(!l.readMode), C = zt(16), b = D(new Wt(l.options)), F = D(!1), Q = D(l.modelValue), O = D(l.modelValue), j = D(!1), x = D(!1), M = D(!1), S = D(b.value.all()), U = D(b.value.all()), u = D("");
    l.closeOnSelect === null ? F.value = l.multiple === !0 : F.value = l.closeOnSelect;
    const _e = y(() => l.resource !== ""), Ze = y(() => typeof l.valid == "function" ? l.valid() : l.valid), Hn = y(() => O.value !== Q.value), Fn = y(() => {
      const i = ["lkt-field", "lkt-field-select"];
      return l.palette && i.push(`lkt-field--${l.palette}`), Hn.value && i.push("is-changed"), l.class && i.push(l.class), l.multiple && i.push("is-multiple"), l.disabled && i.push("is-disabled"), l.upperDropdown && !l.choiceDropdown && i.push("lkt-field-select-upper-dropdown"), l.choiceDropdown && i.push("lkt-field-select-choice-dropdown"), M.value && i.push("has-focus"), i.push(Ze.value ? "is-valid" : "is-error"), i.push(l.modelValue ? "is-filled" : "is-empty"), i.join(" ");
    }), Kn = y(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${l.multipleDisplay}`), i.join(" ");
    }), Bn = y(() => {
      const i = [];
      return i.push(`lkt-field-select-read--${l.multipleDisplayEdition}`), i.join(" ");
    }), Ie = y(() => {
      let i = {};
      return U.value.forEach((N) => {
        N.value == O.value && (i = N);
      }), i;
    }), et = y(() => {
      let i = "";
      return U.value.forEach((N) => {
        N.value == O.value && (i = N.label);
      }), i;
    }), $t = y(() => {
      let i = [];
      return l.multiple && U.value.forEach((N) => {
        O.value.forEach((me) => {
          me == N.value && i.push(N);
        });
      }), i;
    }), zn = y(() => Array.isArray(O.value) ? O.value.length : 0), se = () => {
      U.value = b.value.all(), S.value = b.value.filter(u.value), x.value = !1;
    }, Pt = () => {
      u.value = "", se();
    }, Lt = async () => {
      if (x.value = !1, _e.value) {
        x.value = !0, l.searchStringResourceParam && (l.resourceData[l.searchStringResourceParam] = u.value);
        const i = await Ut(l.resource, l.resourceData);
        b.value.receiveOptions(i.data), se();
      } else
        se();
    }, Un = () => {
      O.value = Q.value;
    }, Wn = () => l.modelValue, ve = (i) => {
      Pt(), tt(i), M.value = !M.value, M.value && ot(() => {
        Lt(), a.value.focus(), ot(() => {
          a.value.focus();
        });
      });
    };
    ge(() => l.readMode, (i) => d.value = !i), ge(() => l.modelValue, (i) => {
      O.value = i;
    }), ge(O, (i) => {
      r("update:modelValue", i), r("selected-option", b.value.findByValue(i)), j.value = !0, ot(() => j.value = !1);
    }), ge(u, se), ge(() => l.options, (i) => {
      b.value = new Wt(i);
    });
    const At = (i) => {
      if (l.multiple) {
        let N = O.value.findIndex((me) => me == i.value);
        return typeof N > "u" && (N = -1), N;
      }
      return -1;
    }, Gn = (i) => {
      if (l.multiple) {
        let N = At(i);
        N === -1 ? O.value.push(i.value) : O.value.splice(N, 1);
      } else
        O.value = i.value, M.value = !1;
    }, qn = (i) => l.multiple ? At(i) !== -1 : i.value == O.value, tt = (i) => {
      if (!g.value.contains(i.target)) {
        Pt(), M.value = !1;
        return;
      }
    }, kt = (i) => {
      d.value = !d.value, d.value && focus();
    };
    if (window.addEventListener("click", tt), se(), wo(() => {
      window.removeEventListener("click", tt);
    }), t({
      reset: Un,
      value: Wn
    }), l.autoloadResource && l.resource) {
      const i = ([o, s] = Xn(() => Ut(l.resource, l.resourceData)), o = await o, s(), o);
      b.value.receiveOptions(i.data), se();
    }
    const oe = y(() => l.useResourceSlot ? l.useResourceSlot : l.resource), jt = y(() => $.NO_OPTIONS_MESSAGE), nt = y(() => oe.value !== "" && typeof $.customResourceOptionSlots[oe.value] < "u"), st = y(() => $.customResourceOptionSlots[oe.value]), Ht = y(() => oe.value !== "" && typeof $.customResourceValueSlots[oe.value] < "u"), Ft = y(() => $.customResourceValueSlots[oe.value]);
    return (i, N) => {
      const me = Kt("lkt-field-text"), Jn = Kt("lkt-loader");
      return f(), _("div", {
        class: xe(Fn.value),
        "data-show-ui": !1,
        ref: (v) => g.value = v
      }, [
        K(c).prefix ? X(i.$slots, "prefix", { key: 0 }) : T("", !0),
        d.value ? (f(), _("select", {
          key: 1,
          ref: (v) => p.value = v,
          id: K(C),
          onFocus: Me(ve, ["stop", "prevent"]),
          onBlur: Me(ve, ["stop", "prevent"]),
          multiple: i.multiple,
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, Ko)) : T("", !0),
        d.value ? (f(), _("div", Bo, [
          i.multiple ? (f(), _("div", {
            key: 1,
            class: "lkt-field__select-value-multiple",
            onClick: ve
          }, [
            $e("ul", {
              class: xe(Bn.value)
            }, [
              (f(!0), _(we, null, rt($t.value, (v) => (f(), _("li", {
                title: v.label
              }, [
                K(c).option ? X(i.$slots, "option", {
                  key: 0,
                  option: v,
                  data: i.slotData
                }) : nt.value ? (f(), re(Ee(st.value), {
                  key: 1,
                  option: v
                }, null, 8, ["option"])) : (f(), _("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: v.label
                }, null, 8, Wo))
              ], 8, Uo))), 256))
            ], 2)
          ])) : (f(), _("div", {
            key: 0,
            class: "lkt-field__select-value",
            onClick: ve
          }, [
            K(c).option ? X(i.$slots, "option", {
              key: 0,
              option: Ie.value,
              data: i.slotData
            }) : T("", !0),
            nt.value ? (f(), re(Ee(st.value), {
              key: 1,
              option: Ie.value
            }, null, 8, ["option"])) : (f(), _("div", {
              key: 2,
              class: "lkt-field-select__read-value",
              innerHTML: et.value
            }, null, 8, zo))
          ])),
          M.value ? (f(), _("div", Go, [
            Zn($e("div", qo, [
              es(me, {
                ref: (v) => a.value = v,
                modelValue: u.value,
                "onUpdate:modelValue": N[0] || (N[0] = (v) => u.value = v),
                placeholder: i.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search",
                onKeyup: Lt
              }, null, 8, ["modelValue", "placeholder"])
            ], 512), [
              [ts, i.searchable]
            ]),
            x.value ? (f(), re(Jn, { key: 0 })) : T("", !0),
            !i.readonly && !x.value ? (f(), _("ul", Jo, [
              (f(!0), _(we, null, rt(S.value, (v) => (f(), _("li", {
                class: xe(["lkt-field__select-option", { "is-active": i.multiple ? qn(v) : v.value == O.value }]),
                onClick: Me((fr) => Gn(v), ["prevent", "stop"])
              }, [
                K(c).option ? X(i.$slots, "option", {
                  key: 0,
                  option: v,
                  data: i.slotData
                }) : T("", !0),
                nt.value ? (f(), re(Ee(st.value), {
                  key: 1,
                  option: v
                }, null, 8, ["option"])) : (f(), _(we, { key: 2 }, [
                  Bt(lt(v.label), 1)
                ], 64))
              ], 10, Yo))), 256)),
              S.value.length === 0 && (K(c)["no-results"] || jt.value) ? (f(), _("li", Qo, [
                K(c)["no-results"] ? X(i.$slots, "no-results", { key: 0 }) : (f(), _(we, { key: 1 }, [
                  Bt(lt(jt.value), 1)
                ], 64))
              ])) : T("", !0)
            ])) : T("", !0)
          ])) : T("", !0)
        ])) : T("", !0),
        !d.value && !i.multiple ? (f(), _("div", Xo, [
          K(c).value ? X(i.$slots, "value", {
            key: 0,
            option: Ie.value,
            data: i.slotData
          }) : Ht.value ? (f(), re(Ee(Ft.value), {
            key: 1,
            option: Ie.value
          }, null, 8, ["option"])) : (f(), _("div", {
            key: 2,
            class: "lkt-field-select__read-value",
            innerHTML: et.value,
            title: et.value
          }, null, 8, Zo)),
          i.allowReadModeSwitch ? (f(), _("div", er, [
            $e("i", {
              class: "lkt-field__edit-icon",
              title: l.switchEditionMessage,
              onClick: kt
            }, null, 8, tr)
          ])) : T("", !0)
        ])) : T("", !0),
        !d.value && i.multiple ? (f(), _("div", nr, [
          i.multipleDisplay === "count" ? (f(), _("div", sr, lt(zn.value), 1)) : (f(), _("ul", {
            key: 1,
            class: xe(Kn.value)
          }, [
            (f(!0), _(we, null, rt($t.value, (v) => (f(), _("li", {
              title: v.label
            }, [
              K(c).value ? X(i.$slots, "value", {
                key: 0,
                option: v,
                data: i.slotData
              }) : Ht.value ? (f(), re(Ee(Ft.value), {
                key: 1,
                option: v
              }, null, 8, ["option"])) : (f(), _("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: v.label
              }, null, 8, rr))
            ], 8, or))), 256))
          ], 2)),
          i.allowReadModeSwitch ? (f(), _("div", lr, [
            $e("i", {
              class: "lkt-field__edit-icon",
              title: l.switchEditionMessage,
              onClick: kt
            }, null, 8, ir)
          ])) : T("", !0)
        ])) : T("", !0),
        i.label ? (f(), _("label", {
          key: 5,
          innerHTML: i.label,
          onClick: Me(ve, ["stop", "prevent"])
        }, null, 8, cr)) : T("", !0)
      ], 2);
    };
  }
}), wr = {
  install: (e) => {
    e.component("lkt-field-select") === void 0 && e.component("lkt-field-select", ur), e.component("lkt-loader") === void 0 && e.use(ns), e.component("lkt-field-text") === void 0 && e.use(ss);
  }
};
export {
  wr as default,
  mr as setNoOptionsMessage,
  gr as setResourceOptionSlot,
  Er as setResourceValueSlot
};
