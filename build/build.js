import { defineComponent as Wn, useSlots as Gn, ref as C, computed as R, watch as ge, nextTick as rt, resolveComponent as Kt, openBlock as f, createElementBlock as _, normalizeClass as Ie, unref as K, renderSlot as Q, createCommentVNode as D, withModifiers as Me, createBlock as se, resolveDynamicComponent as Ee, createElementVNode as $e, Fragment as we, renderList as it, withDirectives as qn, createVNode as Jn, vShow as Yn, createTextVNode as zt, toDisplayString as lt } from "vue";
import { generateRandomString as Ut } from "lkt-string-tools";
import { httpCall as Qn } from "lkt-http-client";
import Xn from "lkt-loader";
import Zn from "lkt-field-text";
const Re = class Re {
};
Re.NO_OPTIONS_MESSAGE = "", Re.customResourceOptionSlots = {}, Re.customResourceValueSlots = {};
let $ = Re;
const es = () => $.NO_OPTIONS_MESSAGE, pr = (e) => ($.NO_OPTIONS_MESSAGE = e, !0), hr = (e, t) => ($.customResourceOptionSlots[e] = t, !0), _r = (e, t) => ($.customResourceValueSlots[e] = t, !0);
class Bt {
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
  receiveOptions(t) {
    const n = /* @__PURE__ */ new Set(), o = [...this.value, ...t], s = [];
    o.forEach((r) => {
      let i = [r.value, r.label].join("-");
      n.has(i) || (s.push(r), n.add(i));
    }), this.value = s;
  }
}
/**
* @vue/shared v3.4.20
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ts(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const W = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const re = () => {
}, ns = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), j = Object.assign, ss = Object.prototype.hasOwnProperty, N = (e, t) => ss.call(e, t), m = Array.isArray, ce = (e) => Je(e) === "[object Map]", os = (e) => Je(e) === "[object Set]", b = (e) => typeof e == "function", L = (e) => typeof e == "string", qe = (e) => typeof e == "symbol", A = (e) => e !== null && typeof e == "object", rs = (e) => (A(e) || b(e)) && b(e.then) && b(e.catch), is = Object.prototype.toString, Je = (e) => is.call(e), cn = (e) => Je(e).slice(8, -1), ls = (e) => Je(e) === "[object Object]", Et = (e) => L(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, an = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, un = an((e) => e.charAt(0).toUpperCase() + e.slice(1)), cs = an((e) => e ? `on${un(e)}` : ""), fe = (e, t) => !Object.is(e, t), as = (e, t, n) => {
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
      const o = e[n], s = L(o) ? ps(o) : wt(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (L(e) || A(e))
    return e;
}
const us = /;(?![^(]*\))/g, fs = /:([^]+)/, ds = /\/\*[^]*?\*\//g;
function ps(e) {
  const t = {};
  return e.replace(ds, "").split(us).forEach((n) => {
    if (n) {
      const o = n.split(fs);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function St(e) {
  let t = "";
  if (L(e))
    t = e;
  else if (m(e))
    for (let n = 0; n < e.length; n++) {
      const o = St(e[n]);
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
let hs;
function _s(e, t = hs) {
  t && t.active && t.effects.push(e);
}
let Ne;
class vs {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, _s(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Ye();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (ms(n.computed), this._dirtyLevel >= 4))
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
    let t = X, n = Ne;
    try {
      return X = !0, Ne = this, this._runnings++, Gt(this), this.fn();
    } finally {
      qt(this), this._runnings--, Ne = n, X = t;
    }
  }
  stop() {
    var t;
    this.active && (Gt(this), qt(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function ms(e) {
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
function Ot() {
  ut++;
}
function Nt() {
  for (ut--; !ut && ft.length; )
    ft.shift()();
}
function gs(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && dn(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, j({ effect: e }, n)));
  }
}
const ft = [];
function Es(e, t, n) {
  var o;
  Ot();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, j({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && ft.push(s.scheduler)));
  }
  Nt();
}
const ws = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, dt = /* @__PURE__ */ new WeakMap(), Z = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), pt = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function T(e, t, n) {
  if (X && Ne) {
    let o = dt.get(e);
    o || dt.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = ws(() => o.delete(n))), gs(
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
function J(e, t, n, o, s, r) {
  const i = dt.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && m(e)) {
    const a = Number(o);
    i.forEach((u, g) => {
      (g === "length" || !qe(g) && g >= a) && l.push(u);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        m(e) ? Et(n) && l.push(i.get("length")) : (l.push(i.get(Z)), ce(e) && l.push(i.get(pt)));
        break;
      case "delete":
        m(e) || (l.push(i.get(Z)), ce(e) && l.push(i.get(pt)));
        break;
      case "set":
        ce(e) && l.push(i.get(Z));
        break;
    }
  Ot();
  for (const a of l)
    a && Es(
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
const Ss = /* @__PURE__ */ ts("__proto__,__v_isRef,__isVue"), hn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qe)
), Jt = /* @__PURE__ */ Os();
function Os() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = h(this);
      for (let r = 0, i = this.length; r < i; r++)
        T(o, "get", r + "");
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
function Ns(e) {
  const t = h(this);
  return T(t, "has", e), t.hasOwnProperty(e);
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
      return o === (s ? r ? wn : En : r ? Ls : gn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = m(t);
    if (!s) {
      if (i && N(Jt, n))
        return Reflect.get(Jt, n, o);
      if (n === "hasOwnProperty")
        return Ns;
    }
    const l = Reflect.get(t, n, o);
    return (qe(n) ? hn.has(n) : Ss(n)) || (s || T(t, "get", n), r) ? l : k(l) ? i && Et(n) ? l : l.value : A(l) ? s ? On(l) : Sn(l) : l;
  }
}
class bs extends _n {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const a = Ce(r);
      if (!ht(o) && !Ce(o) && (r = h(r), o = h(o)), !m(t) && k(r) && !k(o))
        return a ? !1 : (r.value = o, !0);
    }
    const i = m(t) && Et(n) ? Number(n) < t.length : N(t, n), l = Reflect.set(t, n, o, s);
    return t === h(s) && (i ? fe(o, r) && J(t, "set", n, o, r) : J(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = N(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && J(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!qe(n) || !hn.has(n)) && T(t, "has", n), o;
  }
  ownKeys(t) {
    return T(
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
const ys = /* @__PURE__ */ new bs(), Vs = /* @__PURE__ */ new vn(), Rs = /* @__PURE__ */ new vn(!0), bt = (e) => e, Xe = (e) => Reflect.getPrototypeOf(e);
function Pe(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = h(e), r = h(t);
  n || (fe(t, r) && T(s, "get", t), T(s, "get", r));
  const { has: i } = Xe(s), l = o ? bt : n ? xt : Rt;
  if (i.call(s, t))
    return l(e.get(t));
  if (i.call(s, r))
    return l(e.get(r));
  e !== s && e.get(t);
}
function Le(e, t = !1) {
  const n = this.__v_raw, o = h(n), s = h(e);
  return t || (fe(e, s) && T(o, "has", e), T(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Ae(e, t = !1) {
  return e = e.__v_raw, !t && T(h(e), "iterate", Z), Reflect.get(e, "size", e);
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
  const i = s.call(n, e);
  return n.set(e, t), r ? fe(t, i) && J(n, "set", e, t, i) : J(n, "add", e, t), this;
}
function Xt(e) {
  const t = h(this), { has: n, get: o } = Xe(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && mn(t, n, e) : (e = h(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && J(t, "delete", e, void 0, r), i;
}
function Zt() {
  const e = h(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ce(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && J(e, "clear", void 0, void 0, n), o;
}
function ke(e, t) {
  return function(o, s) {
    const r = this, i = r.__v_raw, l = h(i), a = t ? bt : e ? xt : Rt;
    return !e && T(l, "iterate", Z), i.forEach((u, g) => o.call(s, a(u), a(g), r));
  };
}
function je(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = h(s), i = ce(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = s[e](...o), g = n ? bt : t ? xt : Rt;
    return !t && T(
      r,
      "iterate",
      a ? pt : Z
    ), {
      // iterator protocol
      next() {
        const { value: p, done: y } = u.next();
        return y ? { value: p, done: y } : {
          value: l ? [g(p[0]), g(p[1])] : g(p),
          done: y
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function B(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      xe(
        `${un(e)} operation ${n}failed: target is readonly.`,
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
    add: Yt,
    set: Qt,
    delete: Xt,
    clear: Zt,
    forEach: ke(!1, !1)
  }, t = {
    get(r) {
      return Pe(this, r, !1, !0);
    },
    get size() {
      return Ae(this);
    },
    has: Le,
    add: Yt,
    set: Qt,
    delete: Xt,
    clear: Zt,
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
    add: B("add"),
    set: B("set"),
    delete: B("delete"),
    clear: B("clear"),
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
    add: B("add"),
    set: B("set"),
    delete: B("delete"),
    clear: B("clear"),
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
  Cs,
  Ds,
  Ts,
  Is
] = /* @__PURE__ */ xs();
function yt(e, t) {
  const n = t ? e ? Is : Ts : e ? Ds : Cs;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    N(n, s) && s in o ? n : o,
    s,
    r
  );
}
const Ms = {
  get: /* @__PURE__ */ yt(!1, !1)
}, $s = {
  get: /* @__PURE__ */ yt(!0, !1)
}, Ps = {
  get: /* @__PURE__ */ yt(!0, !0)
};
function mn(e, t, n) {
  const o = h(n);
  if (o !== n && t.call(e, o)) {
    const s = cn(e);
    xe(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const gn = /* @__PURE__ */ new WeakMap(), Ls = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap();
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
function ks(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : As(cn(e));
}
function Sn(e) {
  return Ce(e) ? e : Vt(
    e,
    !1,
    ys,
    Ms,
    gn
  );
}
function On(e) {
  return Vt(
    e,
    !0,
    Vs,
    $s,
    En
  );
}
function He(e) {
  return Vt(
    e,
    !0,
    Rs,
    Ps,
    wn
  );
}
function Vt(e, t, n, o, s) {
  if (!A(e))
    return process.env.NODE_ENV !== "production" && xe(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = ks(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return s.set(e, l), l;
}
function ae(e) {
  return Ce(e) ? ae(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ce(e) {
  return !!(e && e.__v_isReadonly);
}
function ht(e) {
  return !!(e && e.__v_isShallow);
}
function _t(e) {
  return ae(e) || Ce(e);
}
function h(e) {
  const t = e && e.__v_raw;
  return t ? h(t) : e;
}
function js(e) {
  return Object.isExtensible(e) && as(e, "__v_skip", !0), e;
}
const Rt = (e) => A(e) ? Sn(e) : e, xt = (e) => A(e) ? On(e) : e;
function k(e) {
  return !!(e && e.__v_isRef === !0);
}
function Hs(e) {
  return k(e) ? e.value : e;
}
const Fs = {
  get: (e, t, n) => Hs(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return k(s) && !k(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ks(e) {
  return ae(e) ? e : new Proxy(e, Fs);
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
function E(e, ...t) {
  Ye();
  const n = ee.length ? ee[ee.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Bs();
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
`, ...Ws(s)), console.warn(...r);
  }
  Qe();
}
function Bs() {
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
function Ws(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Gs(n));
  }), t;
}
function Gs({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${An(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...qs(e.props), r] : [s + r];
}
function qs(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Nn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Nn(e, t, n) {
  return L(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : k(t) ? (t = Nn(e, h(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : b(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = h(t), n ? t : [`${e}=`, t]);
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
function te(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    Dt(s, t, n);
  }
}
function be(e, t, n, o) {
  if (b(e)) {
    const r = te(e, t, n, o);
    return r && rs(r) && r.catch((i) => {
      Dt(i, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(be(e[r], t, n, o));
  return s;
}
function Dt(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? Ct[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let g = 0; g < u.length; g++)
          if (u[g](e, i, l) === !1)
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
        [e, i, l]
      );
      return;
    }
  }
  Js(e, n, s, o);
}
function Js(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Ct[t];
    if (n && zs(n), E(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Us(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ue = !1, vt = !1;
const P = [];
let q = 0;
const ue = [];
let z = null, G = 0;
const bn = /* @__PURE__ */ Promise.resolve();
let Tt = null;
const Ys = 100;
function Qs(e) {
  const t = Tt || bn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Xs(e) {
  let t = q + 1, n = P.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = P[o], r = De(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function It(e) {
  (!P.length || !P.includes(
    e,
    Ue && e.allowRecurse ? q + 1 : q
  )) && (e.id == null ? P.push(e) : P.splice(Xs(e.id), 0, e), yn());
}
function yn() {
  !Ue && !vt && (vt = !0, Tt = bn.then(Rn));
}
function Vn(e) {
  m(e) ? ue.push(...e) : (!z || !z.includes(
    e,
    e.allowRecurse ? G + 1 : G
  )) && ue.push(e), yn();
}
function Zs(e) {
  if (ue.length) {
    const t = [...new Set(ue)].sort(
      (n, o) => De(n) - De(o)
    );
    if (ue.length = 0, z) {
      z.push(...t);
      return;
    }
    for (z = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), G = 0; G < z.length; G++)
      process.env.NODE_ENV !== "production" && xn(e, z[G]) || z[G]();
    z = null, G = 0;
  }
}
const De = (e) => e.id == null ? 1 / 0 : e.id, eo = (e, t) => {
  const n = De(e) - De(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function Rn(e) {
  vt = !1, Ue = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), P.sort(eo);
  const t = process.env.NODE_ENV !== "production" ? (n) => xn(e, n) : re;
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
    q = 0, P.length = 0, Zs(e), Ue = !1, Tt = null, (P.length || ue.length) && Rn(e);
  }
}
function xn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Ys) {
      const o = t.ownerInstance, s = o && Ln(o.type);
      return Dt(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Se = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (fn().__VUE_HMR_RUNTIME__ = {
  createRecord: ct(to),
  rerender: ct(no),
  reload: ct(so)
});
const Be = /* @__PURE__ */ new Map();
function to(e, t) {
  return Be.has(e) ? !1 : (Be.set(e, {
    initialDef: ye(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ye(e) {
  return kn(e) ? e.__vccOpts : e;
}
function no(e, t) {
  const n = Be.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, ye(o.type).render = t), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function so(e, t) {
  const n = Be.get(e);
  if (!n)
    return;
  t = ye(t), en(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = ye(s.type);
    Se.has(r) || (r !== n.initialDef && en(r, t), Se.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Se.add(r), s.ceReload(t.styles), Se.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, It(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Vn(() => {
    for (const s of o)
      Se.delete(
        ye(s.type)
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
function Cn(e, t) {
  var n, o;
  oe = e, oe ? (oe.enabled = !0, Fe.forEach(({ event: s, args: r }) => oe.emit(s, ...r)), Fe = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Cn(r, t);
  }), setTimeout(() => {
    oe || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Fe = []);
  }, 3e3)) : Fe = [];
}
let U = null, oo = null;
const ro = Symbol.for("v-ndc"), io = (e) => e.__isSuspense;
function lo(e, t) {
  t && t.pendingBranch ? m(e) ? t.effects.push(...e) : t.effects.push(e) : Vn(e);
}
const co = Symbol.for("v-scx"), ao = () => {
  {
    const e = No(co);
    return e || process.env.NODE_ENV !== "production" && E(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Ke = {};
function uo(e, t, {
  immediate: n,
  deep: o,
  flush: s,
  once: r,
  onTrack: i,
  onTrigger: l
} = W) {
  if (t && r) {
    const d = t;
    t = (...he) => {
      d(...he), pe();
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
  const a = (d) => {
    E(
      "Invalid watch source: ",
      d,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = de, g = (d) => o === !0 ? d : (
    // for deep: false, only traverse root-level properties
    ie(d, o === !1 ? 1 : void 0)
  );
  let p, y = !1, I = !1;
  if (k(e) ? (p = () => e.value, y = ht(e)) : ae(e) ? (p = () => g(e), y = !0) : m(e) ? (I = !0, y = e.some((d) => ae(d) || ht(d)), p = () => e.map((d) => {
    if (k(d))
      return d.value;
    if (ae(d))
      return g(d);
    if (b(d))
      return te(d, u, 2);
    process.env.NODE_ENV !== "production" && a(d);
  })) : b(e) ? t ? p = () => te(e, u, 2) : p = () => (w && w(), be(
    e,
    u,
    3,
    [Y]
  )) : (p = re, process.env.NODE_ENV !== "production" && a(e)), t && o) {
    const d = p;
    p = () => ie(d());
  }
  let w, Y = (d) => {
    w = S.onStop = () => {
      te(d, u, 4), w = S.onStop = void 0;
    };
  }, H;
  if ($t)
    if (Y = re, t ? n && be(t, u, 3, [
      p(),
      I ? [] : void 0,
      Y
    ]) : p(), s === "sync") {
      const d = ao();
      H = d.__watcherHandles || (d.__watcherHandles = []);
    } else
      return re;
  let V = I ? new Array(e.length).fill(Ke) : Ke;
  const M = () => {
    if (!(!S.active || !S.dirty))
      if (t) {
        const d = S.run();
        (o || y || (I ? d.some((he, Ze) => fe(he, V[Ze])) : fe(d, V))) && (w && w(), be(t, u, 3, [
          d,
          // pass undefined as the old value when it's changed for the first time
          V === Ke ? void 0 : I && V[0] === Ke ? [] : V,
          Y
        ]), V = d);
      } else
        S.run();
  };
  M.allowRecurse = !!t;
  let F;
  s === "sync" ? F = M : s === "post" ? F = () => ln(M, u && u.suspense) : (M.pre = !0, u && (M.id = u.uid), F = () => It(M));
  const S = new vs(p, re, F), pe = () => {
    S.stop();
  };
  return process.env.NODE_ENV !== "production" && (S.onTrack = i, S.onTrigger = l), t ? n ? M() : V = S.run() : s === "post" ? ln(
    S.run.bind(S),
    u && u.suspense
  ) : S.run(), H && H.push(pe), pe;
}
function fo(e, t, n) {
  const o = this.proxy, s = L(e) ? e.includes(".") ? po(o, e) : () => o[e] : e.bind(o, o);
  let r;
  b(t) ? r = t : (r = t.handler, n = t);
  const i = Pn(this), l = uo(s, r.bind(o), n);
  return i(), l;
}
function po(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function ie(e, t, n = 0, o) {
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
    ie(e.value, t, n, o);
  else if (m(e))
    for (let s = 0; s < e.length; s++)
      ie(e[s], t, n, o);
  else if (os(e) || ce(e))
    e.forEach((s) => {
      ie(s, t, n, o);
    });
  else if (ls(e))
    for (const s in e)
      ie(e[s], t, n, o);
  return e;
}
function ho(e, t, n = de, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Ye();
      const l = Pn(n), a = be(t, n, e, i);
      return l(), Qe(), a;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = cs(Ct[e].replace(/ hook$/, ""));
    E(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const _o = (e) => (t, n = de) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!$t || e === "sp") && ho(e, (...o) => t(...o), n)
), vo = _o("bum"), mt = (e) => e ? $o(e) ? Po(e) || e.proxy : mt(e.parent) : null, Ve = (
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
    $options: (e) => Eo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, It(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qs.bind(e.proxy)),
    $watch: (e) => fo.bind(e)
  })
), mo = (e) => e === "_" || e === "$", at = (e, t) => e !== W && !e.__isScriptSetup && N(e, t), go = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: l, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const I = i[t];
      if (I !== void 0)
        switch (I) {
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
          return i[t] = 1, o[t];
        if (s !== W && N(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && N(u, t)
        )
          return i[t] = 3, r[t];
        if (n !== W && N(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const g = Ve[t];
    let p, y;
    if (g)
      return t === "$attrs" ? (T(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && T(e, "get", t), g(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== W && N(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      y = a.config.globalProperties, N(y, t)
    )
      return y[t];
    process.env.NODE_ENV !== "production" && U && (!L(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== W && mo(t[0]) && N(s, t) ? E(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === U && E(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return at(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && N(s, t) ? (E(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== W && N(o, t) ? (o[t] = n, !0) : N(e.props, t) ? (process.env.NODE_ENV !== "production" && E(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && E(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r }
  }, i) {
    let l;
    return !!n[i] || e !== W && N(e, i) || at(t, i) || (l = r[0]) && N(l, i) || N(o, i) || N(Ve, i) || N(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (go.ownKeys = (e) => (E(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function tn(e) {
  return m(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Eo(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !s.length && !n && !o ? a = t : (a = {}, s.length && s.forEach(
    (u) => We(a, u, i, !0)
  ), We(a, t, i)), A(t) && r.set(t, a), a;
}
function We(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && We(e, r, n, !0), s && s.forEach(
    (i) => We(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && E(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = wo[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const wo = {
  data: nn,
  props: on,
  emits: on,
  // objects
  methods: Oe,
  computed: Oe,
  // lifecycle
  beforeCreate: x,
  created: x,
  beforeMount: x,
  mounted: x,
  beforeUpdate: x,
  updated: x,
  beforeDestroy: x,
  beforeUnmount: x,
  destroyed: x,
  unmounted: x,
  activated: x,
  deactivated: x,
  errorCaptured: x,
  serverPrefetch: x,
  // assets
  components: Oe,
  directives: Oe,
  // watch
  watch: Oo,
  // provide / inject
  provide: nn,
  inject: So
};
function nn(e, t) {
  return t ? e ? function() {
    return j(
      b(e) ? e.call(this, this) : e,
      b(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function So(e, t) {
  return Oe(sn(e), sn(t));
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
function x(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Oe(e, t) {
  return e ? j(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function on(e, t) {
  return e ? m(e) && m(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : j(
    /* @__PURE__ */ Object.create(null),
    tn(e),
    tn(t ?? {})
  ) : t;
}
function Oo(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = j(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = x(e[o], t[o]);
  return n;
}
let rn = null;
function No(e, t, n = !1) {
  const o = de || U;
  if (o || rn) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : rn._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && b(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && E(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && E("inject() can only be used inside setup() or functional components.");
}
const ln = lo, bo = (e) => e.__isTeleport, Dn = Symbol.for("v-fgt"), yo = Symbol.for("v-txt"), Vo = Symbol.for("v-cmt");
let le = null;
function Ro(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const xo = (...e) => Mn(
  ...e
), Tn = "__vInternal", In = ({ key: e }) => e ?? null, ze = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? L(e) || k(e) || b(e) ? { i: U, r: e, k: t, f: !!n } : e : null);
function Co(e, t = null, n = null, o = 0, s = null, r = e === Dn ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && In(t),
    ref: t && ze(t),
    scopeId: oo,
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
  return l ? (Mt(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= L(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && E("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !i && // has current parent block
  le && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && le.push(a), a;
}
const Do = process.env.NODE_ENV !== "production" ? xo : Mn;
function Mn(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === ro) && (process.env.NODE_ENV !== "production" && !e && E(`Invalid vnode type when creating vnode: ${e}.`), e = Vo), Ro(e)) {
    const l = Ge(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Mt(l, n), !r && le && (l.shapeFlag & 6 ? le[le.indexOf(e)] = l : le.push(l)), l.patchFlag |= -2, l;
  }
  if (kn(e) && (e = e.__vccOpts), t) {
    t = To(t);
    let { class: l, style: a } = t;
    l && !L(l) && (t.class = St(l)), A(a) && (_t(a) && !m(a) && (a = j({}, a)), t.style = wt(a));
  }
  const i = L(e) ? 1 : io(e) ? 128 : bo(e) ? 64 : A(e) ? 4 : b(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && _t(e) && (e = h(e), E(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Co(
    e,
    t,
    n,
    o,
    s,
    i,
    r,
    !0
  );
}
function To(e) {
  return e ? _t(e) || Tn in e ? j({}, e) : e : null;
}
function Ge(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: i } = e, l = t ? Mo(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && In(l),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? m(s) ? s.concat(ze(t)) : [s, ze(t)] : ze(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && m(i) ? i.map($n) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Dn ? r === -1 ? 16 : r | 16 : r,
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
function $n(e) {
  const t = Ge(e);
  return m(e.children) && (t.children = e.children.map($n)), t;
}
function Io(e = " ", t = 0) {
  return Do(yo, null, e, t);
}
function Mt(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (m(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Mt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Tn in t) ? t._ctx = U : s === 3 && U && (U.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    b(t) ? (t = { default: t, _ctx: U }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Io(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Mo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = St([t.class, o.class]));
      else if (s === "style")
        t.style = wt([t.style, o.style]);
      else if (ns(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(m(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
let de = null, gt;
{
  const e = fn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  gt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => de = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => $t = n
  );
}
const Pn = (e) => {
  const t = de;
  return gt(e), e.scope.on(), () => {
    e.scope.off(), gt(t);
  };
};
function $o(e) {
  return e.vnode.shapeFlag & 4;
}
let $t = !1;
function Po(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ks(js(e.exposed)), {
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
const Lo = /(?:^|[-_])(\w)/g, Ao = (e) => e.replace(Lo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ln(e, t = !0) {
  return b(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function An(e, t, n = !1) {
  let o = Ln(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? Ao(o) : n ? "App" : "Anonymous";
}
function kn(e) {
  return b(e) && "__vccOpts" in e;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const ko = ["id", "multiple"], jo = {
  key: 2,
  class: "lkt-field__select"
}, Ho = ["innerHTML"], Fo = ["title"], Ko = ["innerHTML"], zo = {
  key: 2,
  class: "lkt-field__select-dropdown"
}, Uo = { class: "lkt-field__select-search-container" }, Bo = {
  key: 1,
  class: "lkt-field__select-options"
}, Wo = ["onClick"], Go = {
  key: 0,
  class: "lkt-field__select-option"
}, qo = {
  key: 3,
  class: "lkt-field-select__read"
}, Jo = ["innerHTML", "title"], Yo = {
  key: 3,
  class: "lkt-field__state"
}, Qo = ["title"], Xo = {
  key: 4,
  class: "lkt-field-select__read-multiple"
}, Zo = { key: 0 }, er = ["title"], tr = ["innerHTML"], nr = {
  key: 2,
  class: "lkt-field__state"
}, sr = ["title"], or = ["innerHTML"], rr = { name: "LktFieldSelect", inheritAttrs: !1 }, ir = /* @__PURE__ */ Wn({
  ...rr,
  props: {
    modelValue: { type: [String, Number, Array], default: "" },
    class: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: Ut(16) },
    valid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    closeOnSelect: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    searchable: { type: Boolean, default: !1 },
    upperDropdown: { type: Boolean, default: !1 },
    choiceDropdown: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    switchEditionMessage: { type: String, default: "" },
    emptyLabel: { type: Boolean, default: !1 },
    options: { type: Array, default: () => [] },
    disabledOptions: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: !1 },
    canTag: { type: Boolean, default: !1 },
    noOptionsMessage: { type: String, default: es() },
    resource: { type: String, default: "" },
    resourceData: { type: [Object], default: () => ({}) },
    searchStringResourceParam: { type: String, default: "query" },
    searchPlaceholder: { type: String, default: "" },
    useResourceSlot: { type: String, default: "" },
    multipleDisplay: { type: String, default: "list" },
    // list || inline
    multipleDisplayEdition: { type: String, default: "inline" }
    // list || inline
  },
  emits: ["update:modelValue", "click-ui"],
  setup(e, { expose: t, emit: n }) {
    const o = n, s = e, r = Gn(), i = C(null), l = C(null), a = C(null), u = C(!s.readMode), g = Ut(16), p = C(new Bt(s.options)), y = C(!1), I = C(s.modelValue), w = C(s.modelValue), Y = C(!1), H = C(!1), V = C(!1), M = C(p.value.all()), F = C(p.value.all()), S = C("");
    s.closeOnSelect === null ? y.value = s.multiple === !0 : y.value = s.closeOnSelect;
    const pe = R(() => s.resource !== ""), d = R(() => typeof s.valid == "function" ? s.valid() : s.valid), he = R(() => w.value !== I.value), Ze = R(() => {
      const c = ["lkt-field", "lkt-field-select"];
      return s.palette && c.push(`lkt-field--${s.palette}`), he.value && c.push("is-changed"), s.class && c.push(s.class), s.multiple && c.push("is-multiple"), s.disabled && c.push("is-disabled"), s.upperDropdown && !s.choiceDropdown && c.push("lkt-field-select-upper-dropdown"), s.choiceDropdown && c.push("lkt-field-select-choice-dropdown"), V.value && c.push("has-focus"), c.push(d.value ? "is-valid" : "is-error"), c.push(s.modelValue ? "is-filled" : "is-empty"), c.join(" ");
    }), jn = R(() => {
      const c = [];
      return c.push(`lkt-field-select-read--${s.multipleDisplay}`), c.join(" ");
    }), Hn = R(() => {
      const c = [];
      return c.push(`lkt-field-select-read--${s.multipleDisplayEdition}`), c.join(" ");
    }), Te = R(() => {
      let c = {};
      return F.value.forEach((O) => {
        O.value == w.value && (c = O);
      }), c;
    }), et = R(() => {
      let c = "";
      return F.value.forEach((O) => {
        O.value == w.value && (c = O.label);
      }), c;
    }), tt = R(() => {
      let c = [];
      return s.multiple && F.value.forEach((O) => {
        w.value.forEach((me) => {
          me == O.value && c.push(O);
        });
      }), c;
    }), _e = () => {
      F.value = p.value.all(), M.value = p.value.filter(S.value), H.value = !1;
    }, Pt = () => {
      S.value = "", _e();
    }, Lt = async () => {
      if (H.value = !1, pe.value) {
        H.value = !0;
        const c = JSON.parse(JSON.stringify(s.resourceData));
        s.searchStringResourceParam && (c[s.searchStringResourceParam] = S.value);
        const O = await Qn(s.resource, c);
        p.value.receiveOptions(O.data), _e();
      } else
        _e();
    }, Fn = () => {
      w.value = I.value;
    }, Kn = () => s.modelValue, ve = (c) => {
      Pt(), nt(c), V.value = !V.value, V.value && rt(() => {
        Lt(), i.value.focus(), rt(() => {
          i.value.focus();
        });
      });
    };
    ge(() => s.readMode, (c) => u.value = !c), ge(() => s.modelValue, (c) => {
      w.value = c;
    }), ge(w, (c) => {
      o("update:modelValue", c), Y.value = !0, rt(() => Y.value = !1);
    }), ge(S, _e), ge(() => s.options, (c) => {
      p.value = new Bt(c);
    });
    const At = (c) => {
      if (s.multiple) {
        let O = w.value.findIndex((me) => me == c.value);
        return typeof O > "u" && (O = -1), O;
      }
      return -1;
    }, zn = (c) => {
      if (s.multiple) {
        let O = At(c);
        O === -1 ? w.value.push(c.value) : w.value.splice(O, 1);
      } else
        w.value = c.value, V.value = !1;
    }, Un = (c) => s.multiple ? At(c) !== -1 : c.value == w.value, nt = (c) => {
      if (!a.value.contains(c.target)) {
        Pt(), V.value = !1;
        return;
      }
    }, kt = (c) => {
      u.value = !u.value, u.value && focus();
    };
    window.addEventListener("click", nt), _e(), vo(() => {
      window.removeEventListener("click", nt);
    }), t({
      reset: Fn,
      value: Kn
    });
    const ne = R(() => s.useResourceSlot ? s.useResourceSlot : s.resource), jt = R(() => $.NO_OPTIONS_MESSAGE), st = R(() => ne.value !== "" && typeof $.customResourceOptionSlots[ne.value] < "u"), ot = R(() => $.customResourceOptionSlots[ne.value]), Ht = R(() => ne.value !== "" && typeof $.customResourceValueSlots[ne.value] < "u"), Ft = R(() => $.customResourceValueSlots[ne.value]);
    return (c, O) => {
      const me = Kt("lkt-field-text"), Bn = Kt("lkt-loader");
      return f(), _("div", {
        class: Ie(Ze.value),
        "data-show-ui": !1,
        ref: (v) => a.value = v
      }, [
        K(r).prefix ? Q(c.$slots, "prefix", { key: 0 }) : D("", !0),
        u.value ? (f(), _("select", {
          key: 1,
          ref: (v) => l.value = v,
          id: K(g),
          onFocus: Me(ve, ["stop", "prevent"]),
          onBlur: Me(ve, ["stop", "prevent"]),
          multiple: e.multiple,
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, ko)) : D("", !0),
        u.value ? (f(), _("div", jo, [
          e.multiple ? (f(), _("div", {
            key: 1,
            class: "lkt-field__select-value-multiple",
            onClick: ve
          }, [
            $e("ul", {
              class: Ie(Hn.value)
            }, [
              (f(!0), _(we, null, it(tt.value, (v) => (f(), _("li", {
                title: v.label
              }, [
                K(r).option ? Q(c.$slots, "option", {
                  key: 0,
                  option: v
                }) : st.value ? (f(), se(Ee(ot.value), {
                  key: 1,
                  option: v
                }, null, 8, ["option"])) : (f(), _("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: v.label
                }, null, 8, Ko))
              ], 8, Fo))), 256))
            ], 2)
          ])) : (f(), _("div", {
            key: 0,
            class: "lkt-field__select-value",
            onClick: ve
          }, [
            K(r).option ? Q(c.$slots, "option", {
              key: 0,
              option: Te.value
            }) : D("", !0),
            st.value ? (f(), se(Ee(ot.value), {
              key: 1,
              option: Te.value
            }, null, 8, ["option"])) : (f(), _("div", {
              key: 2,
              class: "lkt-field-select__read-value",
              innerHTML: et.value
            }, null, 8, Ho))
          ])),
          V.value ? (f(), _("div", zo, [
            qn($e("div", Uo, [
              Jn(me, {
                ref: (v) => i.value = v,
                modelValue: S.value,
                "onUpdate:modelValue": O[0] || (O[0] = (v) => S.value = v),
                placeholder: e.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search",
                onKeyup: Lt
              }, null, 8, ["modelValue", "placeholder"])
            ], 512), [
              [Yn, e.searchable]
            ]),
            H.value ? (f(), se(Bn, { key: 0 })) : D("", !0),
            !e.readonly && !H.value ? (f(), _("ul", Bo, [
              (f(!0), _(we, null, it(M.value, (v) => (f(), _("li", {
                class: Ie(["lkt-field__select-option", { "is-active": e.multiple ? Un(v) : v.value == w.value }]),
                onClick: Me((lr) => zn(v), ["prevent", "stop"])
              }, [
                K(r).option ? Q(c.$slots, "option", {
                  key: 0,
                  option: v
                }) : D("", !0),
                st.value ? (f(), se(Ee(ot.value), {
                  key: 1,
                  option: v
                }, null, 8, ["option"])) : (f(), _(we, { key: 2 }, [
                  zt(lt(v.label), 1)
                ], 64))
              ], 10, Wo))), 256)),
              M.value.length === 0 && (K(r)["no-results"] || jt.value) ? (f(), _("li", Go, [
                K(r)["no-results"] ? Q(c.$slots, "no-results", { key: 0 }) : (f(), _(we, { key: 1 }, [
                  zt(lt(jt.value), 1)
                ], 64))
              ])) : D("", !0)
            ])) : D("", !0)
          ])) : D("", !0)
        ])) : D("", !0),
        !u.value && !e.multiple ? (f(), _("div", qo, [
          K(r).value ? Q(c.$slots, "value", {
            key: 0,
            option: Te.value
          }) : Ht.value ? (f(), se(Ee(Ft.value), {
            key: 1,
            option: Te.value
          }, null, 8, ["option"])) : (f(), _("div", {
            key: 2,
            class: "lkt-field-select__read-value",
            innerHTML: et.value,
            title: et.value
          }, null, 8, Jo)),
          e.allowReadModeSwitch ? (f(), _("div", Yo, [
            $e("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: kt
            }, null, 8, Qo)
          ])) : D("", !0)
        ])) : D("", !0),
        !u.value && e.multiple ? (f(), _("div", Xo, [
          e.multipleDisplay === "count" ? (f(), _("div", Zo, lt(tt.value.length), 1)) : (f(), _("ul", {
            key: 1,
            class: Ie(jn.value)
          }, [
            (f(!0), _(we, null, it(tt.value, (v) => (f(), _("li", {
              title: v.label
            }, [
              K(r).value ? Q(c.$slots, "value", {
                key: 0,
                option: v
              }) : Ht.value ? (f(), se(Ee(Ft.value), {
                key: 1,
                option: v
              }, null, 8, ["option"])) : (f(), _("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: v.label
              }, null, 8, tr))
            ], 8, er))), 256))
          ], 2)),
          e.allowReadModeSwitch ? (f(), _("div", nr, [
            $e("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: kt
            }, null, 8, sr)
          ])) : D("", !0)
        ])) : D("", !0),
        e.label ? (f(), _("label", {
          key: 5,
          innerHTML: e.label,
          onClick: Me(ve, ["stop", "prevent"])
        }, null, 8, or)) : D("", !0)
      ], 2);
    };
  }
}), vr = {
  install: (e) => {
    e.component("lkt-field-select") === void 0 && e.component("lkt-field-select", ir), e.component("lkt-loader") === void 0 && e.use(Xn), e.component("lkt-field-text") === void 0 && e.use(Zn);
  }
};
export {
  vr as default,
  pr as setNoOptionsMessage,
  hr as setResourceOptionSlot,
  _r as setResourceValueSlot
};
