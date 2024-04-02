import { defineComponent as Gn, useSlots as qn, ref as C, computed as N, watch as ge, nextTick as ot, resolveComponent as Kt, openBlock as f, createElementBlock as _, normalizeClass as Ie, unref as K, renderSlot as Q, createCommentVNode as D, withModifiers as Me, createBlock as se, resolveDynamicComponent as Ee, createElementVNode as $e, Fragment as we, renderList as rt, withDirectives as Jn, createVNode as Yn, vShow as Qn, createTextVNode as zt, toDisplayString as it } from "vue";
import { generateRandomString as Ut } from "lkt-string-tools";
import { httpCall as Xn } from "lkt-http-client";
import Zn from "lkt-loader";
import es from "lkt-field-text";
const Re = class Re {
};
Re.NO_OPTIONS_MESSAGE = "", Re.customResourceOptionSlots = {}, Re.customResourceValueSlots = {};
let $ = Re;
const ts = () => $.NO_OPTIONS_MESSAGE, hr = (e) => ($.NO_OPTIONS_MESSAGE = e, !0), _r = (e, t) => ($.customResourceOptionSlots[e] = t, !0), vr = (e, t) => ($.customResourceValueSlots[e] = t, !0);
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
function ns(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const W = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const re = () => {
}, ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), j = Object.assign, os = Object.prototype.hasOwnProperty, b = (e, t) => os.call(e, t), m = Array.isArray, ce = (e) => Je(e) === "[object Map]", rs = (e) => Je(e) === "[object Set]", y = (e) => typeof e == "function", L = (e) => typeof e == "string", qe = (e) => typeof e == "symbol", A = (e) => e !== null && typeof e == "object", is = (e) => (A(e) || y(e)) && y(e.then) && y(e.catch), ls = Object.prototype.toString, Je = (e) => ls.call(e), cn = (e) => Je(e).slice(8, -1), cs = (e) => Je(e) === "[object Object]", gt = (e) => L(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, an = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, un = an((e) => e.charAt(0).toUpperCase() + e.slice(1)), as = an((e) => e ? `on${un(e)}` : ""), fe = (e, t) => !Object.is(e, t), us = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Wt;
const fn = () => Wt || (Wt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Et(e) {
  if (m(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = L(o) ? hs(o) : Et(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (L(e) || A(e))
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
function xe(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let _s;
function vs(e, t = _s) {
  t && t.active && t.effects.push(e);
}
let be;
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
    let t = X, n = be;
    try {
      return X = !0, be = this, this._runnings++, Gt(this), this.fn();
    } finally {
      qt(this), this._runnings--, be = n, X = t;
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
let X = !0, at = 0;
const pn = [];
function Ye() {
  pn.push(X), X = !1;
}
function Qe() {
  const e = pn.pop();
  X = e === void 0 ? !0 : e;
}
function Ot() {
  at++;
}
function St() {
  for (at--; !at && ut.length; )
    ut.shift()();
}
function Es(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && dn(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, j({ effect: e }, n)));
  }
}
const ut = [];
function ws(e, t, n) {
  var o;
  Ot();
  for (const s of e.keys()) {
    let r;
    s._dirtyLevel < t && (r ?? (r = e.get(s) === s._trackId)) && (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), s._dirtyLevel = t), s._shouldSchedule && (r ?? (r = e.get(s) === s._trackId)) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, j({ effect: s }, n))), s.trigger(), (!s._runnings || s.allowRecurse) && s._dirtyLevel !== 2 && (s._shouldSchedule = !1, s.scheduler && ut.push(s.scheduler)));
  }
  St();
}
const Os = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, ft = /* @__PURE__ */ new WeakMap(), Z = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), dt = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function T(e, t, n) {
  if (X && be) {
    let o = ft.get(e);
    o || ft.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = Os(() => o.delete(n))), Es(
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
function J(e, t, n, o, s, r) {
  const i = ft.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && m(e)) {
    const a = Number(o);
    i.forEach((u, E) => {
      (E === "length" || !qe(E) && E >= a) && l.push(u);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        m(e) ? gt(n) && l.push(i.get("length")) : (l.push(i.get(Z)), ce(e) && l.push(i.get(dt)));
        break;
      case "delete":
        m(e) || (l.push(i.get(Z)), ce(e) && l.push(i.get(dt)));
        break;
      case "set":
        ce(e) && l.push(i.get(Z));
        break;
    }
  Ot();
  for (const a of l)
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
  St();
}
const Ss = /* @__PURE__ */ ns("__proto__,__v_isRef,__isVue"), hn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qe)
), Jt = /* @__PURE__ */ bs();
function bs() {
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
      return St(), Qe(), o;
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
      return o === (s ? r ? wn : En : r ? As : gn).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = m(t);
    if (!s) {
      if (i && b(Jt, n))
        return Reflect.get(Jt, n, o);
      if (n === "hasOwnProperty")
        return Ns;
    }
    const l = Reflect.get(t, n, o);
    return (qe(n) ? hn.has(n) : Ss(n)) || (s || T(t, "get", n), r) ? l : k(l) ? i && gt(n) ? l : l.value : A(l) ? s ? Sn(l) : On(l) : l;
  }
}
class ys extends _n {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const a = Ce(r);
      if (!pt(o) && !Ce(o) && (r = h(r), o = h(o)), !m(t) && k(r) && !k(o))
        return a ? !1 : (r.value = o, !0);
    }
    const i = m(t) && gt(n) ? Number(n) < t.length : b(t, n), l = Reflect.set(t, n, o, s);
    return t === h(s) && (i ? fe(o, r) && J(t, "set", n, o, r) : J(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = b(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
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
const Vs = /* @__PURE__ */ new ys(), Rs = /* @__PURE__ */ new vn(), xs = /* @__PURE__ */ new vn(!0), bt = (e) => e, Xe = (e) => Reflect.getPrototypeOf(e);
function Pe(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = h(e), r = h(t);
  n || (fe(t, r) && T(s, "get", t), T(s, "get", r));
  const { has: i } = Xe(s), l = o ? bt : n ? Rt : Vt;
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
    const r = this, i = r.__v_raw, l = h(i), a = t ? bt : e ? Rt : Vt;
    return !e && T(l, "iterate", Z), i.forEach((u, E) => o.call(s, a(u), a(E), r));
  };
}
function je(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = h(s), i = ce(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = s[e](...o), E = n ? bt : t ? Rt : Vt;
    return !t && T(
      r,
      "iterate",
      a ? dt : Z
    ), {
      // iterator protocol
      next() {
        const { value: p, done: V } = u.next();
        return V ? { value: p, done: V } : {
          value: l ? [E(p[0]), E(p[1])] : E(p),
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
function Cs() {
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
  Ds,
  Ts,
  Is,
  Ms
] = /* @__PURE__ */ Cs();
function Nt(e, t) {
  const n = t ? e ? Ms : Is : e ? Ts : Ds;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    b(n, s) && s in o ? n : o,
    s,
    r
  );
}
const $s = {
  get: /* @__PURE__ */ Nt(!1, !1)
}, Ps = {
  get: /* @__PURE__ */ Nt(!0, !1)
}, Ls = {
  get: /* @__PURE__ */ Nt(!0, !0)
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
const gn = /* @__PURE__ */ new WeakMap(), As = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), wn = /* @__PURE__ */ new WeakMap();
function ks(e) {
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ks(cn(e));
}
function On(e) {
  return Ce(e) ? e : yt(
    e,
    !1,
    Vs,
    $s,
    gn
  );
}
function Sn(e) {
  return yt(
    e,
    !0,
    Rs,
    Ps,
    En
  );
}
function He(e) {
  return yt(
    e,
    !0,
    xs,
    Ls,
    wn
  );
}
function yt(e, t, n, o, s) {
  if (!A(e))
    return process.env.NODE_ENV !== "production" && xe(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = js(e);
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
function pt(e) {
  return !!(e && e.__v_isShallow);
}
function ht(e) {
  return ae(e) || Ce(e);
}
function h(e) {
  const t = e && e.__v_raw;
  return t ? h(t) : e;
}
function Hs(e) {
  return Object.isExtensible(e) && us(e, "__v_skip", !0), e;
}
const Vt = (e) => A(e) ? On(e) : e, Rt = (e) => A(e) ? Sn(e) : e;
function k(e) {
  return !!(e && e.__v_isRef === !0);
}
function Fs(e) {
  return k(e) ? e.value : e;
}
const Ks = {
  get: (e, t, n) => Fs(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return k(s) && !k(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function zs(e) {
  return ae(e) ? e : new Proxy(e, Ks);
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
function Bs() {
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
          ({ vnode: r }) => `at <${An(n, r.type)}>`
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
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${An(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Js(e.props), r] : [s + r];
}
function Js(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...bn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function bn(e, t, n) {
  return L(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : k(t) ? (t = bn(e, h(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : y(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = h(t), n ? t : [`${e}=`, t]);
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
function te(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    Ct(s, t, n);
  }
}
function Ne(e, t, n, o) {
  if (y(e)) {
    const r = te(e, t, n, o);
    return r && is(r) && r.catch((i) => {
      Ct(i, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(Ne(e[r], t, n, o));
  return s;
}
function Ct(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? xt[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let E = 0; E < u.length; E++)
          if (u[E](e, i, l) === !1)
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
  Ys(e, n, s, o);
}
function Ys(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = xt[t];
    if (n && Us(n), w(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Bs(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ue = !1, _t = !1;
const P = [];
let q = 0;
const ue = [];
let z = null, G = 0;
const Nn = /* @__PURE__ */ Promise.resolve();
let Dt = null;
const Qs = 100;
function Xs(e) {
  const t = Dt || Nn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Zs(e) {
  let t = q + 1, n = P.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = P[o], r = De(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function Tt(e) {
  (!P.length || !P.includes(
    e,
    Ue && e.allowRecurse ? q + 1 : q
  )) && (e.id == null ? P.push(e) : P.splice(Zs(e.id), 0, e), yn());
}
function yn() {
  !Ue && !_t && (_t = !0, Dt = Nn.then(Rn));
}
function Vn(e) {
  m(e) ? ue.push(...e) : (!z || !z.includes(
    e,
    e.allowRecurse ? G + 1 : G
  )) && ue.push(e), yn();
}
function eo(e) {
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
const De = (e) => e.id == null ? 1 / 0 : e.id, to = (e, t) => {
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
  _t = !1, Ue = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), P.sort(to);
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
    q = 0, P.length = 0, eo(e), Ue = !1, Dt = null, (P.length || ue.length) && Rn(e);
  }
}
function xn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Qs) {
      const o = t.ownerInstance, s = o && Ln(o.type);
      return Ct(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Oe = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (fn().__VUE_HMR_RUNTIME__ = {
  createRecord: lt(no),
  rerender: lt(so),
  reload: lt(oo)
});
const Be = /* @__PURE__ */ new Map();
function no(e, t) {
  return Be.has(e) ? !1 : (Be.set(e, {
    initialDef: ye(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ye(e) {
  return kn(e) ? e.__vccOpts : e;
}
function so(e, t) {
  const n = Be.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, ye(o.type).render = t), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function oo(e, t) {
  const n = Be.get(e);
  if (!n)
    return;
  t = ye(t), en(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = ye(s.type);
    Oe.has(r) || (r !== n.initialDef && en(r, t), Oe.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Oe.add(r), s.ceReload(t.styles), Oe.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, Tt(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Vn(() => {
    for (const s of o)
      Oe.delete(
        ye(s.type)
      );
  });
}
function en(e, t) {
  j(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function lt(e) {
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
let U = null, ro = null;
const io = Symbol.for("v-ndc"), lo = (e) => e.__isSuspense;
function co(e, t) {
  t && t.pendingBranch ? m(e) ? t.effects.push(...e) : t.effects.push(e) : Vn(e);
}
const ao = Symbol.for("v-scx"), uo = () => {
  {
    const e = No(ao);
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
  onTrack: i,
  onTrigger: l
} = W) {
  if (t && r) {
    const d = t;
    t = (...he) => {
      d(...he), pe();
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
  }, u = de, E = (d) => o === !0 ? d : (
    // for deep: false, only traverse root-level properties
    ie(d, o === !1 ? 1 : void 0)
  );
  let p, V = !1, I = !1;
  if (k(e) ? (p = () => e.value, V = pt(e)) : ae(e) ? (p = () => E(e), V = !0) : m(e) ? (I = !0, V = e.some((d) => ae(d) || pt(d)), p = () => e.map((d) => {
    if (k(d))
      return d.value;
    if (ae(d))
      return E(d);
    if (y(d))
      return te(d, u, 2);
    process.env.NODE_ENV !== "production" && a(d);
  })) : y(e) ? t ? p = () => te(e, u, 2) : p = () => (g && g(), Ne(
    e,
    u,
    3,
    [Y]
  )) : (p = re, process.env.NODE_ENV !== "production" && a(e)), t && o) {
    const d = p;
    p = () => ie(d());
  }
  let g, Y = (d) => {
    g = O.onStop = () => {
      te(d, u, 4), g = O.onStop = void 0;
    };
  }, H;
  if (Mt)
    if (Y = re, t ? n && Ne(t, u, 3, [
      p(),
      I ? [] : void 0,
      Y
    ]) : p(), s === "sync") {
      const d = uo();
      H = d.__watcherHandles || (d.__watcherHandles = []);
    } else
      return re;
  let R = I ? new Array(e.length).fill(Ke) : Ke;
  const M = () => {
    if (!(!O.active || !O.dirty))
      if (t) {
        const d = O.run();
        (o || V || (I ? d.some((he, Ze) => fe(he, R[Ze])) : fe(d, R))) && (g && g(), Ne(t, u, 3, [
          d,
          // pass undefined as the old value when it's changed for the first time
          R === Ke ? void 0 : I && R[0] === Ke ? [] : R,
          Y
        ]), R = d);
      } else
        O.run();
  };
  M.allowRecurse = !!t;
  let F;
  s === "sync" ? F = M : s === "post" ? F = () => ln(M, u && u.suspense) : (M.pre = !0, u && (M.id = u.uid), F = () => Tt(M));
  const O = new ms(p, re, F), pe = () => {
    O.stop();
  };
  return process.env.NODE_ENV !== "production" && (O.onTrack = i, O.onTrigger = l), t ? n ? M() : R = O.run() : s === "post" ? ln(
    O.run.bind(O),
    u && u.suspense
  ) : O.run(), H && H.push(pe), pe;
}
function po(e, t, n) {
  const o = this.proxy, s = L(e) ? e.includes(".") ? ho(o, e) : () => o[e] : e.bind(o, o);
  let r;
  y(t) ? r = t : (r = t.handler, n = t);
  const i = Pn(this), l = fo(s, r.bind(o), n);
  return i(), l;
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
  else if (rs(e) || ce(e))
    e.forEach((s) => {
      ie(s, t, n, o);
    });
  else if (cs(e))
    for (const s in e)
      ie(e[s], t, n, o);
  return e;
}
function _o(e, t, n = de, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Ye();
      const l = Pn(n), a = Ne(t, n, e, i);
      return l(), Qe(), a;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = as(xt[e].replace(/ hook$/, ""));
    w(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const vo = (e) => (t, n = de) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!Mt || e === "sp") && _o(e, (...o) => t(...o), n)
), mo = vo("bum"), vt = (e) => e ? Po(e) ? Lo(e) || e.proxy : vt(e.parent) : null, Ve = (
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
    $parent: (e) => vt(e.parent),
    $root: (e) => vt(e.root),
    $emit: (e) => e.emit,
    $options: (e) => wo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, Tt(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Xs.bind(e.proxy)),
    $watch: (e) => po.bind(e)
  })
), go = (e) => e === "_" || e === "$", ct = (e, t) => e !== W && !e.__isScriptSetup && b(e, t), Eo = {
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
        if (ct(o, t))
          return i[t] = 1, o[t];
        if (s !== W && b(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && b(u, t)
        )
          return i[t] = 3, r[t];
        if (n !== W && b(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const E = Ve[t];
    let p, V;
    if (E)
      return t === "$attrs" ? (T(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && T(e, "get", t), E(e);
    if (
      // css module (injected by vue-loader)
      (p = l.__cssModules) && (p = p[t])
    )
      return p;
    if (n !== W && b(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      V = a.config.globalProperties, b(V, t)
    )
      return V[t];
    process.env.NODE_ENV !== "production" && U && (!L(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== W && go(t[0]) && b(s, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === U && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return ct(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && b(s, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== W && b(o, t) ? (o[t] = n, !0) : b(e.props, t) ? (process.env.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && w(
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
    return !!n[i] || e !== W && b(e, i) || ct(t, i) || (l = r[0]) && b(l, i) || b(o, i) || b(Ve, i) || b(s.config.globalProperties, i);
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
      process.env.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Oo[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Oo = {
  data: nn,
  props: on,
  emits: on,
  // objects
  methods: Se,
  computed: Se,
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
  components: Se,
  directives: Se,
  // watch
  watch: bo,
  // provide / inject
  provide: nn,
  inject: So
};
function nn(e, t) {
  return t ? e ? function() {
    return j(
      y(e) ? e.call(this, this) : e,
      y(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function So(e, t) {
  return Se(sn(e), sn(t));
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
function Se(e, t) {
  return e ? j(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function on(e, t) {
  return e ? m(e) && m(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : j(
    /* @__PURE__ */ Object.create(null),
    tn(e),
    tn(t ?? {})
  ) : t;
}
function bo(e, t) {
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
      return n && y(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && w(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && w("inject() can only be used inside setup() or functional components.");
}
const ln = co, yo = (e) => e.__isTeleport, Dn = Symbol.for("v-fgt"), Vo = Symbol.for("v-txt"), Ro = Symbol.for("v-cmt");
let le = null;
function xo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Co = (...e) => Mn(
  ...e
), Tn = "__vInternal", In = ({ key: e }) => e ?? null, ze = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? L(e) || k(e) || y(e) ? { i: U, r: e, k: t, f: !!n } : e : null);
function Do(e, t = null, n = null, o = 0, s = null, r = e === Dn ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && In(t),
    ref: t && ze(t),
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
    ctx: U
  };
  return l ? (It(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= L(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && w("VNode created with invalid key (NaN). VNode type:", a.type), // avoid a block node from tracking itself
  !i && // has current parent block
  le && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && le.push(a), a;
}
const To = process.env.NODE_ENV !== "production" ? Co : Mn;
function Mn(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === io) && (process.env.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = Ro), xo(e)) {
    const l = Ge(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && It(l, n), !r && le && (l.shapeFlag & 6 ? le[le.indexOf(e)] = l : le.push(l)), l.patchFlag |= -2, l;
  }
  if (kn(e) && (e = e.__vccOpts), t) {
    t = Io(t);
    let { class: l, style: a } = t;
    l && !L(l) && (t.class = wt(l)), A(a) && (ht(a) && !m(a) && (a = j({}, a)), t.style = Et(a));
  }
  const i = L(e) ? 1 : lo(e) ? 128 : yo(e) ? 64 : A(e) ? 4 : y(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && ht(e) && (e = h(e), w(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Do(
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
function Io(e) {
  return e ? ht(e) || Tn in e ? j({}, e) : e : null;
}
function Ge(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: i } = e, l = t ? $o(o || {}, t) : o;
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
function Mo(e = " ", t = 0) {
  return To(Vo, null, e, t);
}
function It(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (m(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), It(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Tn in t) ? t._ctx = U : s === 3 && U && (U.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    y(t) ? (t = { default: t, _ctx: U }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Mo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function $o(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = wt([t.class, o.class]));
      else if (s === "style")
        t.style = Et([t.style, o.style]);
      else if (ss(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(m(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
let de = null, mt;
{
  const e = fn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  mt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => de = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Mt = n
  );
}
const Pn = (e) => {
  const t = de;
  return mt(e), e.scope.on(), () => {
    e.scope.off(), mt(t);
  };
};
function Po(e) {
  return e.vnode.shapeFlag & 4;
}
let Mt = !1;
function Lo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(zs(Hs(e.exposed)), {
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
const Ao = /(?:^|[-_])(\w)/g, ko = (e) => e.replace(Ao, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Ln(e, t = !0) {
  return y(e) ? e.displayName || e.name : e.name || t && e.__name;
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
  return o ? ko(o) : n ? "App" : "Anonymous";
}
function kn(e) {
  return y(e) && "__vccOpts" in e;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const jo = ["id", "multiple"], Ho = {
  key: 2,
  class: "lkt-field__select"
}, Fo = ["innerHTML"], Ko = ["title"], zo = ["innerHTML"], Uo = {
  key: 2,
  class: "lkt-field__select-dropdown"
}, Bo = { class: "lkt-field__select-search-container" }, Wo = {
  key: 1,
  class: "lkt-field__select-options"
}, Go = ["onClick"], qo = {
  key: 0,
  class: "lkt-field__select-option"
}, Jo = {
  key: 3,
  class: "lkt-field-select__read"
}, Yo = ["innerHTML", "title"], Qo = {
  key: 3,
  class: "lkt-field__state"
}, Xo = ["title"], Zo = {
  key: 4,
  class: "lkt-field-select__read-multiple"
}, er = { key: 0 }, tr = ["title"], nr = ["innerHTML"], sr = {
  key: 2,
  class: "lkt-field__state"
}, or = ["title"], rr = ["innerHTML"], ir = { name: "LktFieldSelect", inheritAttrs: !1 }, lr = /* @__PURE__ */ Gn({
  ...ir,
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
    noOptionsMessage: { type: String, default: ts() },
    resource: { type: String, default: "" },
    resourceData: { type: [Object], default: () => ({}) },
    slotData: { type: Object, default: () => ({}) },
    searchStringResourceParam: { type: String, default: "query" },
    searchPlaceholder: { type: String, default: "" },
    useResourceSlot: { type: String, default: "" },
    multipleDisplay: { type: String, default: "list" },
    // list || inline || count
    multipleDisplayEdition: { type: String, default: "inline" }
    // list || inline
  },
  emits: ["update:modelValue", "click-ui"],
  setup(e, { expose: t, emit: n }) {
    const o = n, s = e, r = qn(), i = C(null), l = C(null), a = C(null), u = C(!s.readMode), E = Ut(16), p = C(new Bt(s.options)), V = C(!1), I = C(s.modelValue), g = C(s.modelValue), Y = C(!1), H = C(!1), R = C(!1), M = C(p.value.all()), F = C(p.value.all()), O = C("");
    s.closeOnSelect === null ? V.value = s.multiple === !0 : V.value = s.closeOnSelect;
    const pe = N(() => s.resource !== ""), d = N(() => typeof s.valid == "function" ? s.valid() : s.valid), he = N(() => g.value !== I.value), Ze = N(() => {
      const c = ["lkt-field", "lkt-field-select"];
      return s.palette && c.push(`lkt-field--${s.palette}`), he.value && c.push("is-changed"), s.class && c.push(s.class), s.multiple && c.push("is-multiple"), s.disabled && c.push("is-disabled"), s.upperDropdown && !s.choiceDropdown && c.push("lkt-field-select-upper-dropdown"), s.choiceDropdown && c.push("lkt-field-select-choice-dropdown"), R.value && c.push("has-focus"), c.push(d.value ? "is-valid" : "is-error"), c.push(s.modelValue ? "is-filled" : "is-empty"), c.join(" ");
    }), jn = N(() => {
      const c = [];
      return c.push(`lkt-field-select-read--${s.multipleDisplay}`), c.join(" ");
    }), Hn = N(() => {
      const c = [];
      return c.push(`lkt-field-select-read--${s.multipleDisplayEdition}`), c.join(" ");
    }), Te = N(() => {
      let c = {};
      return F.value.forEach((S) => {
        S.value == g.value && (c = S);
      }), c;
    }), et = N(() => {
      let c = "";
      return F.value.forEach((S) => {
        S.value == g.value && (c = S.label);
      }), c;
    }), $t = N(() => {
      let c = [];
      return s.multiple && F.value.forEach((S) => {
        g.value.forEach((me) => {
          me == S.value && c.push(S);
        });
      }), c;
    }), Fn = N(() => Array.isArray(g.value) ? g.value.length : 0), _e = () => {
      F.value = p.value.all(), M.value = p.value.filter(O.value), H.value = !1;
    }, Pt = () => {
      O.value = "", _e();
    }, Lt = async () => {
      if (H.value = !1, pe.value) {
        H.value = !0;
        const c = JSON.parse(JSON.stringify(s.resourceData));
        s.searchStringResourceParam && (c[s.searchStringResourceParam] = O.value);
        const S = await Xn(s.resource, c);
        p.value.receiveOptions(S.data), _e();
      } else
        _e();
    }, Kn = () => {
      g.value = I.value;
    }, zn = () => s.modelValue, ve = (c) => {
      Pt(), tt(c), R.value = !R.value, R.value && ot(() => {
        Lt(), i.value.focus(), ot(() => {
          i.value.focus();
        });
      });
    };
    ge(() => s.readMode, (c) => u.value = !c), ge(() => s.modelValue, (c) => {
      g.value = c;
    }), ge(g, (c) => {
      o("update:modelValue", c), Y.value = !0, ot(() => Y.value = !1);
    }), ge(O, _e), ge(() => s.options, (c) => {
      p.value = new Bt(c);
    });
    const At = (c) => {
      if (s.multiple) {
        let S = g.value.findIndex((me) => me == c.value);
        return typeof S > "u" && (S = -1), S;
      }
      return -1;
    }, Un = (c) => {
      if (s.multiple) {
        let S = At(c);
        S === -1 ? g.value.push(c.value) : g.value.splice(S, 1);
      } else
        g.value = c.value, R.value = !1;
    }, Bn = (c) => s.multiple ? At(c) !== -1 : c.value == g.value, tt = (c) => {
      if (!a.value.contains(c.target)) {
        Pt(), R.value = !1;
        return;
      }
    }, kt = (c) => {
      u.value = !u.value, u.value && focus();
    };
    window.addEventListener("click", tt), _e(), mo(() => {
      window.removeEventListener("click", tt);
    }), t({
      reset: Kn,
      value: zn
    });
    const ne = N(() => s.useResourceSlot ? s.useResourceSlot : s.resource), jt = N(() => $.NO_OPTIONS_MESSAGE), nt = N(() => ne.value !== "" && typeof $.customResourceOptionSlots[ne.value] < "u"), st = N(() => $.customResourceOptionSlots[ne.value]), Ht = N(() => ne.value !== "" && typeof $.customResourceValueSlots[ne.value] < "u"), Ft = N(() => $.customResourceValueSlots[ne.value]);
    return (c, S) => {
      const me = Kt("lkt-field-text"), Wn = Kt("lkt-loader");
      return f(), _("div", {
        class: Ie(Ze.value),
        "data-show-ui": !1,
        ref: (v) => a.value = v
      }, [
        K(r).prefix ? Q(c.$slots, "prefix", { key: 0 }) : D("", !0),
        u.value ? (f(), _("select", {
          key: 1,
          ref: (v) => l.value = v,
          id: K(E),
          onFocus: Me(ve, ["stop", "prevent"]),
          onBlur: Me(ve, ["stop", "prevent"]),
          multiple: e.multiple,
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, jo)) : D("", !0),
        u.value ? (f(), _("div", Ho, [
          e.multiple ? (f(), _("div", {
            key: 1,
            class: "lkt-field__select-value-multiple",
            onClick: ve
          }, [
            $e("ul", {
              class: Ie(Hn.value)
            }, [
              (f(!0), _(we, null, rt($t.value, (v) => (f(), _("li", {
                title: v.label
              }, [
                K(r).option ? Q(c.$slots, "option", {
                  key: 0,
                  option: v,
                  data: e.slotData
                }) : nt.value ? (f(), se(Ee(st.value), {
                  key: 1,
                  option: v
                }, null, 8, ["option"])) : (f(), _("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: v.label
                }, null, 8, zo))
              ], 8, Ko))), 256))
            ], 2)
          ])) : (f(), _("div", {
            key: 0,
            class: "lkt-field__select-value",
            onClick: ve
          }, [
            K(r).option ? Q(c.$slots, "option", {
              key: 0,
              option: Te.value,
              data: e.slotData
            }) : D("", !0),
            nt.value ? (f(), se(Ee(st.value), {
              key: 1,
              option: Te.value
            }, null, 8, ["option"])) : (f(), _("div", {
              key: 2,
              class: "lkt-field-select__read-value",
              innerHTML: et.value
            }, null, 8, Fo))
          ])),
          R.value ? (f(), _("div", Uo, [
            Jn($e("div", Bo, [
              Yn(me, {
                ref: (v) => i.value = v,
                modelValue: O.value,
                "onUpdate:modelValue": S[0] || (S[0] = (v) => O.value = v),
                placeholder: e.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search",
                onKeyup: Lt
              }, null, 8, ["modelValue", "placeholder"])
            ], 512), [
              [Qn, e.searchable]
            ]),
            H.value ? (f(), se(Wn, { key: 0 })) : D("", !0),
            !e.readonly && !H.value ? (f(), _("ul", Wo, [
              (f(!0), _(we, null, rt(M.value, (v) => (f(), _("li", {
                class: Ie(["lkt-field__select-option", { "is-active": e.multiple ? Bn(v) : v.value == g.value }]),
                onClick: Me((cr) => Un(v), ["prevent", "stop"])
              }, [
                K(r).option ? Q(c.$slots, "option", {
                  key: 0,
                  option: v,
                  data: e.slotData
                }) : D("", !0),
                nt.value ? (f(), se(Ee(st.value), {
                  key: 1,
                  option: v
                }, null, 8, ["option"])) : (f(), _(we, { key: 2 }, [
                  zt(it(v.label), 1)
                ], 64))
              ], 10, Go))), 256)),
              M.value.length === 0 && (K(r)["no-results"] || jt.value) ? (f(), _("li", qo, [
                K(r)["no-results"] ? Q(c.$slots, "no-results", { key: 0 }) : (f(), _(we, { key: 1 }, [
                  zt(it(jt.value), 1)
                ], 64))
              ])) : D("", !0)
            ])) : D("", !0)
          ])) : D("", !0)
        ])) : D("", !0),
        !u.value && !e.multiple ? (f(), _("div", Jo, [
          K(r).value ? Q(c.$slots, "value", {
            key: 0,
            option: Te.value,
            data: e.slotData
          }) : Ht.value ? (f(), se(Ee(Ft.value), {
            key: 1,
            option: Te.value
          }, null, 8, ["option"])) : (f(), _("div", {
            key: 2,
            class: "lkt-field-select__read-value",
            innerHTML: et.value,
            title: et.value
          }, null, 8, Yo)),
          e.allowReadModeSwitch ? (f(), _("div", Qo, [
            $e("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: kt
            }, null, 8, Xo)
          ])) : D("", !0)
        ])) : D("", !0),
        !u.value && e.multiple ? (f(), _("div", Zo, [
          e.multipleDisplay === "count" ? (f(), _("div", er, it(Fn.value), 1)) : (f(), _("ul", {
            key: 1,
            class: Ie(jn.value)
          }, [
            (f(!0), _(we, null, rt($t.value, (v) => (f(), _("li", {
              title: v.label
            }, [
              K(r).value ? Q(c.$slots, "value", {
                key: 0,
                option: v,
                data: e.slotData
              }) : Ht.value ? (f(), se(Ee(Ft.value), {
                key: 1,
                option: v
              }, null, 8, ["option"])) : (f(), _("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: v.label
              }, null, 8, nr))
            ], 8, tr))), 256))
          ], 2)),
          e.allowReadModeSwitch ? (f(), _("div", sr, [
            $e("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: kt
            }, null, 8, or)
          ])) : D("", !0)
        ])) : D("", !0),
        e.label ? (f(), _("label", {
          key: 5,
          innerHTML: e.label,
          onClick: Me(ve, ["stop", "prevent"])
        }, null, 8, rr)) : D("", !0)
      ], 2);
    };
  }
}), mr = {
  install: (e) => {
    e.component("lkt-field-select") === void 0 && e.component("lkt-field-select", lr), e.component("lkt-loader") === void 0 && e.use(Zn), e.component("lkt-field-text") === void 0 && e.use(es);
  }
};
export {
  mr as default,
  hr as setNoOptionsMessage,
  _r as setResourceOptionSlot,
  vr as setResourceValueSlot
};
