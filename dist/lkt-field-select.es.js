var Sn = Object.defineProperty;
var Vn = (e, t, n) => t in e ? Sn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var we = (e, t, n) => (Vn(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as xn, useSlots as yn, ref as C, computed as B, watch as re, nextTick as ze, resolveComponent as Cn, openBlock as ie, createElementBlock as ce, normalizeClass as wt, renderSlot as Rn, createElementVNode as le, unref as In, withModifiers as ae, toDisplayString as Et, createVNode as Tn, Fragment as Pn, renderList as Dn, createCommentVNode as vt } from "vue";
import { generateRandomString as bt } from "lkt-string-tools";
import { existsHTTPResource as Mn } from "lkt-http-client";
class Ze {
}
we(Ze, "NO_OPTIONS_MESSAGE", "");
const $n = () => Ze.NO_OPTIONS_MESSAGE, Do = (e) => (Ze.NO_OPTIONS_MESSAGE = e, !0);
class Nt {
  constructor(t) {
    we(this, "value");
    if (typeof t != "function" && typeof t != "object")
      throw new Error("searchOptions must be an object or a function returning an object");
    if (typeof t == "function" && typeof t() != "object")
      throw new Error("searchOptions function must return an object");
    t || (t = {}), this.value = t;
  }
  getOptions() {
    return typeof this.value == "function" ? this.value() : this.value;
  }
}
class Ot {
  constructor(t = []) {
    we(this, "value");
    this.value = [...t];
  }
  all() {
    return this.value;
  }
  filter(t) {
    if (t === "")
      return this.all();
    const n = t.toLowerCase();
    return this.value.filter((s) => s.label.toLowerCase().indexOf(n) !== -1);
  }
  receiveOptions(t) {
    const n = /* @__PURE__ */ new Set(), s = [...this.value, ...t], o = [];
    s.forEach((r) => {
      let i = [r.value, r.label].join("-");
      n.has(i) || (o.push(r), n.add(i));
    }), this.value = o;
  }
}
function jn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), s = e.split(",");
  for (let o = 0; o < s.length; o++)
    n[s[o]] = !0;
  return t ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const j = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const zt = () => {
}, An = () => !1, Fn = /^on[^a-z]/, Hn = (e) => Fn.test(e), M = Object.assign, zn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Kn = Object.prototype.hasOwnProperty, g = (e, t) => Kn.call(e, t), d = Array.isArray, Z = (e) => Me(e) === "[object Map]", Ln = (e) => Me(e) === "[object Set]", O = (e) => typeof e == "function", I = (e) => typeof e == "string", De = (e) => typeof e == "symbol", T = (e) => e !== null && typeof e == "object", Un = (e) => (T(e) || O(e)) && O(e.then) && O(e.catch), Wn = Object.prototype.toString, Me = (e) => Wn.call(e), Kt = (e) => Me(e).slice(8, -1), Bn = (e) => Me(e) === "[object Object]", et = (e) => I(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ut = Lt((e) => e.charAt(0).toUpperCase() + e.slice(1)), qn = Lt((e) => e ? `on${Ut(e)}` : ""), ne = (e, t) => !Object.is(e, t), Gn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let St;
const Ue = () => St || (St = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function tt(e) {
  if (d(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = I(s) ? Qn(s) : tt(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (I(e) || T(e))
    return e;
}
const Jn = /;(?![^(]*\))/g, kn = /:([^]+)/, Yn = /\/\*[^]*?\*\//g;
function Qn(e) {
  const t = {};
  return e.replace(Yn, "").split(Jn).forEach((n) => {
    if (n) {
      const s = n.split(kn);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function nt(e) {
  let t = "";
  if (I(e))
    t = e;
  else if (d(e))
    for (let n = 0; n < e.length; n++) {
      const s = nt(e[n]);
      s && (t += s + " ");
    }
  else if (T(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Vt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Wt;
function Xn(e, t = Wt) {
  t && t.active && t.effects.push(e);
}
function Zn() {
  return Wt;
}
const We = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Bt = (e) => (e.w & K) > 0, qt = (e) => (e.n & K) > 0, es = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= K;
}, ts = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      const o = t[s];
      Bt(o) && !qt(o) ? o.delete(e) : t[n++] = o, o.w &= ~K, o.n &= ~K;
    }
    t.length = n;
  }
}, Be = /* @__PURE__ */ new WeakMap();
let fe = 0, K = 1;
const qe = 30;
let S;
const q = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Ge = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class ns {
  constructor(t, n = null, s) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Xn(this, s);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = S, n = G;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = S, S = this, G = !0, K = 1 << ++fe, fe <= qe ? es(this) : xt(this), this.fn();
    } finally {
      fe <= qe && ts(this), K = 1 << --fe, S = this.parent, G = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    S === this ? this.deferStop = !0 : this.active && (xt(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function xt(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let G = !0;
const Gt = [];
function st() {
  Gt.push(G), G = !1;
}
function ot() {
  const e = Gt.pop();
  G = e === void 0 ? !0 : e;
}
function V(e, t, n) {
  if (G && S) {
    let s = Be.get(e);
    s || Be.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || s.set(n, o = We());
    const r = process.env.NODE_ENV !== "production" ? { effect: S, target: e, type: t, key: n } : void 0;
    ss(o, r);
  }
}
function ss(e, t) {
  let n = !1;
  fe <= qe ? qt(e) || (e.n |= K, n = !Bt(e)) : n = !e.has(S), n && (e.add(S), S.deps.push(e), process.env.NODE_ENV !== "production" && S.onTrack && S.onTrack(
    M(
      {
        effect: S
      },
      t
    )
  ));
}
function z(e, t, n, s, o, r) {
  const i = Be.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && d(e)) {
    const a = Number(s);
    i.forEach((u, _) => {
      (_ === "length" || !De(_) && _ >= a) && c.push(u);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        d(e) ? et(n) && c.push(i.get("length")) : (c.push(i.get(q)), Z(e) && c.push(i.get(Ge)));
        break;
      case "delete":
        d(e) || (c.push(i.get(q)), Z(e) && c.push(i.get(Ge)));
        break;
      case "set":
        Z(e) && c.push(i.get(q));
        break;
    }
  const l = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: s, oldValue: o, oldTarget: r } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? Ee(c[0], l) : Ee(c[0]));
  else {
    const a = [];
    for (const u of c)
      u && a.push(...u);
    process.env.NODE_ENV !== "production" ? Ee(We(a), l) : Ee(We(a));
  }
}
function Ee(e, t) {
  const n = d(e) ? e : [...e];
  for (const s of n)
    s.computed && yt(s, t);
  for (const s of n)
    s.computed || yt(s, t);
}
function yt(e, t) {
  (e !== S || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(M({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const os = /* @__PURE__ */ jn("__proto__,__v_isRef,__isVue"), Jt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(De)
), Ct = /* @__PURE__ */ rs();
function rs() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const s = f(this);
      for (let r = 0, i = this.length; r < i; r++)
        V(s, "get", r + "");
      const o = s[t](...n);
      return o === -1 || o === !1 ? s[t](...n.map(f)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      st();
      const s = f(this)[t].apply(this, n);
      return ot(), s;
    };
  }), e;
}
function is(e) {
  const t = f(this);
  return V(t, "has", e), t.hasOwnProperty(e);
}
class kt {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, s) {
    const o = this._isReadonly, r = this._shallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw" && s === (o ? r ? en : Zt : r ? Es : Xt).get(t))
      return t;
    const i = d(t);
    if (!o) {
      if (i && g(Ct, n))
        return Reflect.get(Ct, n, s);
      if (n === "hasOwnProperty")
        return is;
    }
    const c = Reflect.get(t, n, s);
    return (De(n) ? Jt.has(n) : os(n)) || (o || V(t, "get", n), r) ? c : x(c) ? i && et(n) ? c : c.value : T(c) ? o ? nn(c) : tn(c) : c;
  }
}
class cs extends kt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (_e(r) && x(r) && !x(s))
      return !1;
    if (!this._shallow && (!Je(s) && !_e(s) && (r = f(r), s = f(s)), !d(t) && x(r) && !x(s)))
      return r.value = s, !0;
    const i = d(t) && et(n) ? Number(n) < t.length : g(t, n), c = Reflect.set(t, n, s, o);
    return t === f(o) && (i ? ne(s, r) && z(t, "set", n, s, r) : z(t, "add", n, s)), c;
  }
  deleteProperty(t, n) {
    const s = g(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && z(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!De(n) || !Jt.has(n)) && V(t, "has", n), s;
  }
  ownKeys(t) {
    return V(
      t,
      "iterate",
      d(t) ? "length" : q
    ), Reflect.ownKeys(t);
  }
}
class Yt extends kt {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Vt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Vt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const ls = /* @__PURE__ */ new cs(), as = /* @__PURE__ */ new Yt(), us = /* @__PURE__ */ new Yt(!0), rt = (e) => e, $e = (e) => Reflect.getPrototypeOf(e);
function ve(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const o = f(e), r = f(t);
  n || (ne(t, r) && V(o, "get", t), V(o, "get", r));
  const { has: i } = $e(o), c = s ? rt : n ? at : lt;
  if (i.call(o, t))
    return c(e.get(t));
  if (i.call(o, r))
    return c(e.get(r));
  e !== o && e.get(t);
}
function be(e, t = !1) {
  const n = this.__v_raw, s = f(n), o = f(e);
  return t || (ne(e, o) && V(s, "has", e), V(s, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o);
}
function Ne(e, t = !1) {
  return e = e.__v_raw, !t && V(f(e), "iterate", q), Reflect.get(e, "size", e);
}
function Rt(e) {
  e = f(e);
  const t = f(this);
  return $e(t).has.call(t, e) || (t.add(e), z(t, "add", e, e)), this;
}
function It(e, t) {
  t = f(t);
  const n = f(this), { has: s, get: o } = $e(n);
  let r = s.call(n, e);
  r ? process.env.NODE_ENV !== "production" && Qt(n, s, e) : (e = f(e), r = s.call(n, e));
  const i = o.call(n, e);
  return n.set(e, t), r ? ne(t, i) && z(n, "set", e, t, i) : z(n, "add", e, t), this;
}
function Tt(e) {
  const t = f(this), { has: n, get: s } = $e(t);
  let o = n.call(t, e);
  o ? process.env.NODE_ENV !== "production" && Qt(t, n, e) : (e = f(e), o = n.call(t, e));
  const r = s ? s.call(t, e) : void 0, i = t.delete(e);
  return o && z(t, "delete", e, void 0, r), i;
}
function Pt() {
  const e = f(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Z(e) ? new Map(e) : new Set(e) : void 0, s = e.clear();
  return t && z(e, "clear", void 0, void 0, n), s;
}
function Oe(e, t) {
  return function(s, o) {
    const r = this, i = r.__v_raw, c = f(i), l = t ? rt : e ? at : lt;
    return !e && V(c, "iterate", q), i.forEach((a, u) => s.call(o, l(a), l(u), r));
  };
}
function Se(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = f(o), i = Z(r), c = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, a = o[e](...s), u = n ? rt : t ? at : lt;
    return !t && V(
      r,
      "iterate",
      l ? Ge : q
    ), {
      next() {
        const { value: _, done: v } = a.next();
        return v ? { value: _, done: v } : {
          value: c ? [u(_[0]), u(_[1])] : u(_),
          done: v
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function $(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${Ut(e)} operation ${n}failed: target is readonly.`,
        f(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fs() {
  const e = {
    get(r) {
      return ve(this, r);
    },
    get size() {
      return Ne(this);
    },
    has: be,
    add: Rt,
    set: It,
    delete: Tt,
    clear: Pt,
    forEach: Oe(!1, !1)
  }, t = {
    get(r) {
      return ve(this, r, !1, !0);
    },
    get size() {
      return Ne(this);
    },
    has: be,
    add: Rt,
    set: It,
    delete: Tt,
    clear: Pt,
    forEach: Oe(!1, !0)
  }, n = {
    get(r) {
      return ve(this, r, !0);
    },
    get size() {
      return Ne(this, !0);
    },
    has(r) {
      return be.call(this, r, !0);
    },
    add: $("add"),
    set: $("set"),
    delete: $("delete"),
    clear: $("clear"),
    forEach: Oe(!0, !1)
  }, s = {
    get(r) {
      return ve(this, r, !0, !0);
    },
    get size() {
      return Ne(this, !0);
    },
    has(r) {
      return be.call(this, r, !0);
    },
    add: $("add"),
    set: $("set"),
    delete: $("delete"),
    clear: $("clear"),
    forEach: Oe(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = Se(
      r,
      !1,
      !1
    ), n[r] = Se(
      r,
      !0,
      !1
    ), t[r] = Se(
      r,
      !1,
      !0
    ), s[r] = Se(
      r,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    s
  ];
}
const [
  ps,
  ds,
  hs,
  _s
] = /* @__PURE__ */ fs();
function it(e, t) {
  const n = t ? e ? _s : hs : e ? ds : ps;
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    g(n, o) && o in s ? n : s,
    o,
    r
  );
}
const gs = {
  get: /* @__PURE__ */ it(!1, !1)
}, ms = {
  get: /* @__PURE__ */ it(!0, !1)
}, ws = {
  get: /* @__PURE__ */ it(!0, !0)
};
function Qt(e, t, n) {
  const s = f(n);
  if (s !== n && t.call(e, s)) {
    const o = Kt(e);
    console.warn(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Xt = /* @__PURE__ */ new WeakMap(), Es = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ new WeakMap();
function vs(e) {
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
function bs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vs(Kt(e));
}
function tn(e) {
  return _e(e) ? e : ct(
    e,
    !1,
    ls,
    gs,
    Xt
  );
}
function nn(e) {
  return ct(
    e,
    !0,
    as,
    ms,
    Zt
  );
}
function Ve(e) {
  return ct(
    e,
    !0,
    us,
    ws,
    en
  );
}
function ct(e, t, n, s, o) {
  if (!T(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = o.get(e);
  if (r)
    return r;
  const i = bs(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, c), c;
}
function ee(e) {
  return _e(e) ? ee(e.__v_raw) : !!(e && e.__v_isReactive);
}
function _e(e) {
  return !!(e && e.__v_isReadonly);
}
function Je(e) {
  return !!(e && e.__v_isShallow);
}
function ke(e) {
  return ee(e) || _e(e);
}
function f(e) {
  const t = e && e.__v_raw;
  return t ? f(t) : e;
}
function Ns(e) {
  return Gn(e, "__v_skip", !0), e;
}
const lt = (e) => T(e) ? tn(e) : e, at = (e) => T(e) ? nn(e) : e;
function x(e) {
  return !!(e && e.__v_isRef === !0);
}
function Os(e) {
  return x(e) ? e.value : e;
}
const Ss = {
  get: (e, t, n) => Os(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return x(o) && !x(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Vs(e) {
  return ee(e) ? e : new Proxy(e, Ss);
}
const J = [];
function xs(e) {
  J.push(e);
}
function ys() {
  J.pop();
}
function E(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  st();
  const n = J.length ? J[J.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Cs();
  if (s)
    k(
      s,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        o.map(
          ({ vnode: r }) => `at <${wn(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...Rs(o)), console.warn(...r);
  }
  ot();
}
function Cs() {
  let e = J[J.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Rs(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Is(n));
  }), t;
}
function Is({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${wn(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Ts(e.props), r] : [o + r];
}
function Ts(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...sn(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function sn(e, t, n) {
  return I(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : x(t) ? (t = sn(e, f(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : O(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = f(t), n ? t : [`${e}=`, t]);
}
const ut = {
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
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function k(e, t, n, s) {
  let o;
  try {
    o = s ? e(...s) : e();
  } catch (r) {
    on(r, t, n);
  }
  return o;
}
function Ce(e, t, n, s) {
  if (O(e)) {
    const r = k(e, t, n, s);
    return r && Un(r) && r.catch((i) => {
      on(i, t, n);
    }), r;
  }
  const o = [];
  for (let r = 0; r < e.length; r++)
    o.push(Ce(e[r], t, n, s));
  return o;
}
function on(e, t, n, s = !0) {
  const o = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? ut[n] : n;
    for (; r; ) {
      const a = r.ec;
      if (a) {
        for (let u = 0; u < a.length; u++)
          if (a[u](e, i, c) === !1)
            return;
      }
      r = r.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      k(
        l,
        null,
        10,
        [e, i, c]
      );
      return;
    }
  }
  Ps(e, n, o, s);
}
function Ps(e, t, n, s = !0) {
  if (process.env.NODE_ENV !== "production") {
    const o = ut[t];
    if (n && xs(n), E(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && ys(), s)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Re = !1, Ye = !1;
const R = [];
let F = 0;
const te = [];
let D = null, A = 0;
const rn = /* @__PURE__ */ Promise.resolve();
let ft = null;
const Ds = 100;
function Ms(e) {
  const t = ft || rn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function $s(e) {
  let t = F + 1, n = R.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = R[s], r = ge(o);
    r < e || r === e && o.pre ? t = s + 1 : n = s;
  }
  return t;
}
function pt(e) {
  (!R.length || !R.includes(
    e,
    Re && e.allowRecurse ? F + 1 : F
  )) && (e.id == null ? R.push(e) : R.splice($s(e.id), 0, e), cn());
}
function cn() {
  !Re && !Ye && (Ye = !0, ft = rn.then(an));
}
function ln(e) {
  d(e) ? te.push(...e) : (!D || !D.includes(
    e,
    e.allowRecurse ? A + 1 : A
  )) && te.push(e), cn();
}
function js(e) {
  if (te.length) {
    const t = [...new Set(te)];
    if (te.length = 0, D) {
      D.push(...t);
      return;
    }
    for (D = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), D.sort((n, s) => ge(n) - ge(s)), A = 0; A < D.length; A++)
      process.env.NODE_ENV !== "production" && un(e, D[A]) || D[A]();
    D = null, A = 0;
  }
}
const ge = (e) => e.id == null ? 1 / 0 : e.id, As = (e, t) => {
  const n = ge(e) - ge(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function an(e) {
  Ye = !1, Re = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), R.sort(As);
  const t = process.env.NODE_ENV !== "production" ? (n) => un(e, n) : zt;
  try {
    for (F = 0; F < R.length; F++) {
      const n = R[F];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        k(n, null, 14);
      }
    }
  } finally {
    F = 0, R.length = 0, js(e), Re = !1, ft = null, (R.length || te.length) && an(e);
  }
}
function un(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Ds) {
      const s = t.ownerInstance, o = s && mn(s.type);
      return E(
        `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const ue = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Ue().__VUE_HMR_RUNTIME__ = {
  createRecord: Ke(Fs),
  rerender: Ke(Hs),
  reload: Ke(zs)
});
const Ie = /* @__PURE__ */ new Map();
function Fs(e, t) {
  return Ie.has(e) ? !1 : (Ie.set(e, {
    initialDef: de(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function de(e) {
  return En(e) ? e.__vccOpts : e;
}
function Hs(e, t) {
  const n = Ie.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, de(s.type).render = t), s.renderCache = [], s.update();
  }));
}
function zs(e, t) {
  const n = Ie.get(e);
  if (!n)
    return;
  t = de(t), Dt(n.initialDef, t);
  const s = [...n.instances];
  for (const o of s) {
    const r = de(o.type);
    ue.has(r) || (r !== n.initialDef && Dt(r, t), ue.add(r)), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (ue.add(r), o.ceReload(t.styles), ue.delete(r)) : o.parent ? pt(o.parent.update) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  ln(() => {
    for (const o of s)
      ue.delete(
        de(o.type)
      );
  });
}
function Dt(e, t) {
  M(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Ke(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let H = null, Ks = null;
const Ls = Symbol.for("v-ndc"), Us = (e) => e.__isSuspense;
function Ws(e, t) {
  t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : ln(e);
}
const xe = {};
function Bs(e, t, { immediate: n, deep: s, flush: o, onTrack: r, onTrigger: i } = j) {
  var c;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && E(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && E(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = (h) => {
    E(
      "Invalid watch source: ",
      h,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = Zn() === ((c = L) == null ? void 0 : c.scope) ? L : null;
  let u, _ = !1, v = !1;
  if (x(e) ? (u = () => e.value, _ = Je(e)) : ee(e) ? (u = () => e, s = !0) : d(e) ? (v = !0, _ = e.some((h) => ee(h) || Je(h)), u = () => e.map((h) => {
    if (x(h))
      return h.value;
    if (ee(h))
      return Q(h);
    if (O(h))
      return k(h, a, 2);
    process.env.NODE_ENV !== "production" && l(h);
  })) : O(e) ? t ? u = () => k(e, a, 2) : u = () => {
    if (!(a && a.isUnmounted))
      return w && w(), Ce(
        e,
        a,
        3,
        [se]
      );
  } : (u = zt, process.env.NODE_ENV !== "production" && l(e)), t && s) {
    const h = u;
    u = () => Q(h());
  }
  let w, se = (h) => {
    w = m.onStop = () => {
      k(h, a, 4), w = m.onStop = void 0;
    };
  }, b = v ? new Array(e.length).fill(xe) : xe;
  const P = () => {
    if (!!m.active)
      if (t) {
        const h = m.run();
        (s || _ || (v ? h.some((je, Ae) => ne(je, b[Ae])) : ne(h, b))) && (w && w(), Ce(t, a, 3, [
          h,
          b === xe ? void 0 : v && b[0] === xe ? [] : b,
          se
        ]), b = h);
      } else
        m.run();
  };
  P.allowRecurse = !!t;
  let U;
  o === "sync" ? U = P : o === "post" ? U = () => Ft(P, a && a.suspense) : (P.pre = !0, a && (P.id = a.uid), U = () => pt(P));
  const m = new ns(u, U);
  return process.env.NODE_ENV !== "production" && (m.onTrack = r, m.onTrigger = i), t ? n ? P() : b = m.run() : o === "post" ? Ft(
    m.run.bind(m),
    a && a.suspense
  ) : m.run(), () => {
    m.stop(), a && a.scope && zn(a.scope.effects, m);
  };
}
function qs(e, t, n) {
  const s = this.proxy, o = I(e) ? e.includes(".") ? Gs(s, e) : () => s[e] : e.bind(s, s);
  let r;
  O(t) ? r = t : (r = t.handler, n = t);
  const i = L;
  Xe(this);
  const c = Bs(o, r.bind(s), n);
  return i ? Xe(i) : gn(), c;
}
function Gs(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
function Q(e, t) {
  if (!T(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), x(e))
    Q(e.value, t);
  else if (d(e))
    for (let n = 0; n < e.length; n++)
      Q(e[n], t);
  else if (Ln(e) || Z(e))
    e.forEach((n) => {
      Q(n, t);
    });
  else if (Bn(e))
    for (const n in e)
      Q(e[n], t);
  return e;
}
function Js(e, t, n = L, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      st(), Xe(n);
      const c = Ce(t, n, e, i);
      return gn(), ot(), c;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const o = qn(ut[e].replace(/ hook$/, ""));
    E(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ks = (e) => (t, n = L) => Js(e, (...s) => t(...s), n), Ys = ks("bum"), Qe = (e) => e ? _o(e) ? go(e) || e.proxy : Qe(e.parent) : null, he = /* @__PURE__ */ M(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? Ve(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? Ve(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? Ve(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? Ve(e.refs) : e.refs,
  $parent: (e) => Qe(e.parent),
  $root: (e) => Qe(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Zs(e),
  $forceUpdate: (e) => e.f || (e.f = () => pt(e.update)),
  $nextTick: (e) => e.n || (e.n = Ms.bind(e.proxy)),
  $watch: (e) => qs.bind(e)
}), Qs = (e) => e === "_" || e === "$", Le = (e, t) => e !== j && !e.__isScriptSetup && g(e, t), Xs = {
  get({ _: e }, t) {
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: c, appContext: l } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const w = i[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Le(s, t))
          return i[t] = 1, s[t];
        if (o !== j && g(o, t))
          return i[t] = 2, o[t];
        if ((a = e.propsOptions[0]) && g(a, t))
          return i[t] = 3, r[t];
        if (n !== j && g(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const u = he[t];
    let _, v;
    if (u)
      return t === "$attrs" ? (V(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && V(e, "get", t), u(e);
    if ((_ = c.__cssModules) && (_ = _[t]))
      return _;
    if (n !== j && g(n, t))
      return i[t] = 4, n[t];
    if (v = l.config.globalProperties, g(v, t))
      return v[t];
    process.env.NODE_ENV !== "production" && H && (!I(t) || t.indexOf("__v") !== 0) && (o !== j && Qs(t[0]) && g(o, t) ? E(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === H && E(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return Le(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && g(o, t) ? (E(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== j && g(s, t) ? (s[t] = n, !0) : g(e.props, t) ? (process.env.NODE_ENV !== "production" && E(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && E(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, i) {
    let c;
    return !!n[i] || e !== j && g(e, i) || Le(t, i) || (c = r[0]) && g(c, i) || g(s, i) || g(he, i) || g(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : g(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Xs.ownKeys = (e) => (E(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Mt(e) {
  return d(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Zs(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = r.get(t);
  let l;
  return c ? l = c : !o.length && !n && !s ? l = t : (l = {}, o.length && o.forEach(
    (a) => Te(l, a, i, !0)
  ), Te(l, t, i)), T(t) && r.set(t, l), l;
}
function Te(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && Te(e, r, n, !0), o && o.forEach(
    (i) => Te(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      process.env.NODE_ENV !== "production" && E(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = eo[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const eo = {
  data: $t,
  props: At,
  emits: At,
  methods: pe,
  computed: pe,
  beforeCreate: N,
  created: N,
  beforeMount: N,
  mounted: N,
  beforeUpdate: N,
  updated: N,
  beforeDestroy: N,
  beforeUnmount: N,
  destroyed: N,
  unmounted: N,
  activated: N,
  deactivated: N,
  errorCaptured: N,
  serverPrefetch: N,
  components: pe,
  directives: pe,
  watch: no,
  provide: $t,
  inject: to
};
function $t(e, t) {
  return t ? e ? function() {
    return M(
      O(e) ? e.call(this, this) : e,
      O(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function to(e, t) {
  return pe(jt(e), jt(t));
}
function jt(e) {
  if (d(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function N(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function pe(e, t) {
  return e ? M(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function At(e, t) {
  return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : M(
    /* @__PURE__ */ Object.create(null),
    Mt(e),
    Mt(t != null ? t : {})
  ) : t;
}
function no(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = M(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = N(e[s], t[s]);
  return n;
}
function so() {
  return {
    app: null,
    config: {
      isNativeTag: An,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
const Ft = Ws, oo = (e) => e.__isTeleport, fn = Symbol.for("v-fgt"), ro = Symbol.for("v-txt"), io = Symbol.for("v-cmt");
let X = null;
function co(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const lo = (...e) => hn(
  ...e
), pn = "__vInternal", dn = ({ key: e }) => e != null ? e : null, ye = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? I(e) || x(e) || O(e) ? { i: H, r: e, k: t, f: !!n } : e : null);
function ao(e, t = null, n = null, s = 0, o = null, r = e === fn ? 0 : 1, i = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && dn(t),
    ref: t && ye(t),
    scopeId: Ks,
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
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: H
  };
  return c ? (dt(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= I(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && E("VNode created with invalid key (NaN). VNode type:", l.type), !i && X && (l.patchFlag > 0 || r & 6) && l.patchFlag !== 32 && X.push(l), l;
}
const uo = process.env.NODE_ENV !== "production" ? lo : hn;
function hn(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === Ls) && (process.env.NODE_ENV !== "production" && !e && E(`Invalid vnode type when creating vnode: ${e}.`), e = io), co(e)) {
    const c = Pe(
      e,
      t,
      !0
    );
    return n && dt(c, n), !r && X && (c.shapeFlag & 6 ? X[X.indexOf(e)] = c : X.push(c)), c.patchFlag |= -2, c;
  }
  if (En(e) && (e = e.__vccOpts), t) {
    t = fo(t);
    let { class: c, style: l } = t;
    c && !I(c) && (t.class = nt(c)), T(l) && (ke(l) && !d(l) && (l = M({}, l)), t.style = tt(l));
  }
  const i = I(e) ? 1 : Us(e) ? 128 : oo(e) ? 64 : T(e) ? 4 : O(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && ke(e) && (e = f(e), E(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ao(
    e,
    t,
    n,
    s,
    o,
    i,
    r,
    !0
  );
}
function fo(e) {
  return e ? ke(e) || pn in e ? M({}, e) : e : null;
}
function Pe(e, t, n = !1) {
  const { props: s, ref: o, patchFlag: r, children: i } = e, c = t ? ho(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && dn(c),
    ref: t && t.ref ? n && o ? d(o) ? o.concat(ye(t)) : [o, ye(t)] : ye(t) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && d(i) ? i.map(_n) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== fn ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Pe(e.ssContent),
    ssFallback: e.ssFallback && Pe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function _n(e) {
  const t = Pe(e);
  return d(e.children) && (t.children = e.children.map(_n)), t;
}
function po(e = " ", t = 0) {
  return uo(ro, null, e, t);
}
function dt(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (d(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), dt(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !(pn in t) ? t._ctx = H : o === 3 && H && (H.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    O(t) ? (t = { default: t, _ctx: H }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [po(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ho(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = nt([t.class, s.class]));
      else if (o === "style")
        t.style = tt([t.style, s.style]);
      else if (Hn(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(d(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else
        o !== "" && (t[o] = s[o]);
  }
  return t;
}
so();
let L = null, ht, Y, Ht = "__VUE_INSTANCE_SETTERS__";
(Y = Ue()[Ht]) || (Y = Ue()[Ht] = []), Y.push((e) => L = e), ht = (e) => {
  Y.length > 1 ? Y.forEach((t) => t(e)) : Y[0](e);
};
const Xe = (e) => {
  ht(e), e.scope.on();
}, gn = () => {
  L && L.scope.off(), ht(null);
};
function _o(e) {
  return e.vnode.shapeFlag & 4;
}
function go(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Vs(Ns(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in he)
          return he[n](e);
      },
      has(t, n) {
        return n in t || n in he;
      }
    }));
}
const mo = /(?:^|[-_])(\w)/g, wo = (e) => e.replace(mo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function mn(e, t = !0) {
  return O(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function wn(e, t, n = !1) {
  let s = mn(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e && e.parent) {
    const o = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    s = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? wo(s) : n ? "App" : "Anonymous";
}
function En(e) {
  return O(e) && "__vccOpts" in e;
}
const Eo = ["id", "onFocus", "onBlur"], vo = { class: "lkt-field__select" }, bo = ["onClick"], No = {
  key: 0,
  class: "lkt-field__select-dropdown"
}, Oo = { class: "lkt-field__select-search-container" }, So = {
  key: 0,
  class: "lkt-field__select-options"
}, Vo = ["onClick"], xo = ["innerHTML", "onClick"], yo = { name: "LktFieldSelect", inheritAttrs: !1 }, Co = /* @__PURE__ */ xn({
  ...yo,
  props: {
    modelValue: { type: [String, Number, Array], default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: bt(16) },
    valid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    closeOnSelect: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 },
    options: { type: Array, default: () => [] },
    disabledOptions: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: !1 },
    canTag: { type: Boolean, default: !1 },
    noOptionsMessage: { type: String, default: $n() },
    resource: { type: String, default: () => null },
    searchStringResourceParam: { type: String, default: "query" },
    searchOptions: { type: [Object, Function], default: () => null },
    searchPlaceholder: { type: String, default: "" }
  },
  emits: ["update:modelValue", "click-ui"],
  setup(e, { expose: t, emit: n }) {
    const s = n, o = yn(), r = e, i = C(null), c = C(null), l = bt(16), a = C(new Nt(r.searchOptions)), u = C(new Ot(r.options)), _ = C(!1), v = C(r.modelValue), w = C(r.modelValue), se = C(!1), b = C(!1), P = C(u.value.all()), U = C(u.value.all()), m = C("");
    r.closeOnSelect === null ? _.value = r.multiple === !0 : _.value = r.closeOnSelect;
    const _t = B(() => !!o.label);
    B(() => _t ? !1 : !r.label && r.emptyLabel ? !0 : !!r.label), B(() => Mn(r.resource));
    const h = B(() => typeof r.valid == "function" ? r.valid() : r.valid), je = B(() => w.value !== v.value), Ae = B(() => {
      const p = ["lkt-field"];
      return r.palette && p.push(`lkt-field--${r.palette}`), je.value && p.push("is-changed"), r.multiple && p.push("is-multiple"), r.disabled && p.push("is-disabled"), b.value && p.push("has-focus"), p.push(h.value ? "is-valid" : "is-error"), p.push(r.modelValue ? "is-filled" : "is-empty"), p.join(" ");
    }), vn = B(() => {
      let p = "";
      return U.value.forEach((W) => {
        W.value == w.value && (p = W.label);
      }), p;
    }), Fe = () => {
      U.value = u.value.all(), P.value = u.value.filter(m.value);
    }, gt = () => {
      m.value = "", Fe();
    }, bn = () => {
      w.value = v.value;
    }, Nn = () => r.modelValue, me = () => {
      gt(), b.value = !b.value, b.value && ze(() => {
        i.value.focus(), ze(() => {
          i.value.focus();
        });
      });
    };
    re(() => r.modelValue, (p) => {
      w.value = p;
    }), re(w, (p) => {
      s("update:modelValue", p), se.value = !0, ze(() => se.value = !1);
    }), re(m, Fe), re(() => r.searchOptions, (p) => {
      a.value = new Nt(p);
    }), re(() => r.options, (p) => {
      u.value = new Ot(p);
    }), Fe();
    const On = (p) => {
      w.value = p.value, b.value = !1;
    }, mt = (p) => {
      const W = [
        "is-select",
        "lkt-field__select",
        "lkt-field__select-value",
        "lkt-field__select-dropdown",
        "lkt-field__select-search-container",
        "lkt-field__select-options",
        "lkt-field__select-option",
        "lkt-field__select-search"
      ], oe = p.target;
      let y = !1;
      W.forEach((He) => {
        (oe.className.includes(He) || oe.parentElement && oe.parentElement.className.includes(He)) && (y = !0);
      }), y || (gt(), b.value = !1);
    };
    return window.addEventListener("click", mt), Ys(() => {
      window.removeEventListener("click", mt);
    }), t({
      reset: bn,
      value: Nn
    }), (p, W) => {
      const oe = Cn("lkt-field-text");
      return ie(), ce("div", {
        class: wt(["is-select", Ae.value]),
        "data-show-ui": !1
      }, [
        Rn(p.$slots, "prefix"),
        le("select", {
          ref: (y) => c.value = y,
          id: In(l),
          onFocus: ae(me, ["stop", "prevent"]),
          onBlur: ae(me, ["stop", "prevent"]),
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, Eo),
        le("div", vo, [
          le("div", {
            class: "lkt-field__select-value",
            onClick: ae(me, ["stop", "prevent"])
          }, Et(vn.value), 9, bo),
          b.value ? (ie(), ce("div", No, [
            le("div", Oo, [
              Tn(oe, {
                ref: (y) => i.value = y,
                modelValue: m.value,
                "onUpdate:modelValue": W[0] || (W[0] = (y) => m.value = y),
                placeholder: e.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search"
              }, null, 8, ["modelValue", "placeholder"])
            ]),
            e.readonly ? vt("", !0) : (ie(), ce("ul", So, [
              (ie(!0), ce(Pn, null, Dn(P.value, (y) => (ie(), ce("li", {
                class: wt(["lkt-field__select-option", { "is-active": y.value == w.value }]),
                onClick: ae((He) => On(y), ["prevent", "stop"])
              }, Et(y.label), 11, Vo))), 256))
            ]))
          ])) : vt("", !0)
        ]),
        le("label", {
          innerHTML: e.label,
          onClick: ae(me, ["stop", "prevent"])
        }, null, 8, xo)
      ], 2);
    };
  }
}), Mo = {
  install: (e) => {
    e.component("lkt-field-select", Co);
  }
};
export {
  Mo as default,
  Do as setNoOptionsMessage
};
