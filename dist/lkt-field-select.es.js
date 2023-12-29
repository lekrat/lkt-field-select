var Mn = Object.defineProperty;
var Tn = (e, t, n) => t in e ? Mn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var we = (e, t, n) => (Tn(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as Rn, ref as C, computed as ee, watch as te, nextTick as ke, resolveComponent as In, openBlock as w, createElementBlock as E, normalizeClass as St, renderSlot as Pn, unref as Dn, withModifiers as Ee, createCommentVNode as H, toDisplayString as Vt, Fragment as Be, renderList as Ue, createElementVNode as fe, createVNode as $n } from "vue";
import { generateRandomString as yt } from "lkt-string-tools";
import { existsHTTPResource as jn } from "lkt-http-client";
class rt {
}
we(rt, "NO_OPTIONS_MESSAGE", "");
const An = () => rt.NO_OPTIONS_MESSAGE, kr = (e) => (rt.NO_OPTIONS_MESSAGE = e, !0);
class xt {
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
class Ct {
  constructor(t = []) {
    we(this, "value");
    Array.isArray(t) || (t = []), this.value = [...t];
  }
  all() {
    return this.value;
  }
  filter(t) {
    if (t === "")
      return this.all();
    const n = t.toLowerCase();
    return this.value.filter((r) => r.label.toLowerCase().indexOf(n) !== -1);
  }
  receiveOptions(t) {
    const n = /* @__PURE__ */ new Set(), r = [...this.value, ...t], s = [];
    r.forEach((o) => {
      let i = [o.value, o.label].join("-");
      n.has(i) || (s.push(o), n.add(i));
    }), this.value = s;
  }
}
function Fn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let s = 0; s < r.length; s++)
    n[r[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const K = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Ut = () => {
}, Hn = () => !1, zn = /^on[^a-z]/, Kn = (e) => zn.test(e), F = Object.assign, Ln = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, kn = Object.prototype.hasOwnProperty, m = (e, t) => kn.call(e, t), p = Array.isArray, oe = (e) => je(e) === "[object Map]", Bn = (e) => je(e) === "[object Set]", x = (e) => typeof e == "function", D = (e) => typeof e == "string", $e = (e) => typeof e == "symbol", $ = (e) => e !== null && typeof e == "object", Un = (e) => ($(e) || x(e)) && x(e.then) && x(e.catch), Wn = Object.prototype.toString, je = (e) => Wn.call(e), Wt = (e) => je(e).slice(8, -1), qn = (e) => je(e) === "[object Object]", ot = (e) => D(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Gt = qt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Gn = qt((e) => e ? `on${Gt(e)}` : ""), ce = (e, t) => !Object.is(e, t), Jn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Mt;
const Ge = () => Mt || (Mt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function it(e) {
  if (p(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], s = D(r) ? Zn(r) : it(r);
      if (s)
        for (const o in s)
          t[o] = s[o];
    }
    return t;
  } else if (D(e) || $(e))
    return e;
}
const Yn = /;(?![^(]*\))/g, Qn = /:([^]+)/, Xn = /\/\*[^]*?\*\//g;
function Zn(e) {
  const t = {};
  return e.replace(Xn, "").split(Yn).forEach((n) => {
    if (n) {
      const r = n.split(Qn);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function lt(e) {
  let t = "";
  if (D(e))
    t = e;
  else if (p(e))
    for (let n = 0; n < e.length; n++) {
      const r = lt(e[n]);
      r && (t += r + " ");
    }
  else if ($(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Tt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Jt;
function es(e, t = Jt) {
  t && t.active && t.effects.push(e);
}
function ts() {
  return Jt;
}
const Je = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Yt = (e) => (e.w & W) > 0, Qt = (e) => (e.n & W) > 0, ns = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= W;
}, ss = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let r = 0; r < t.length; r++) {
      const s = t[r];
      Yt(s) && !Qt(s) ? s.delete(e) : t[n++] = s, s.w &= ~W, s.n &= ~W;
    }
    t.length = n;
  }
}, Ye = /* @__PURE__ */ new WeakMap();
let pe = 0, W = 1;
const Qe = 30;
let M;
const J = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Xe = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class rs {
  constructor(t, n = null, r) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, es(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = M, n = Y;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = M, M = this, Y = !0, W = 1 << ++pe, pe <= Qe ? ns(this) : Rt(this), this.fn();
    } finally {
      pe <= Qe && ss(this), W = 1 << --pe, M = this.parent, Y = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    M === this ? this.deferStop = !0 : this.active && (Rt(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Rt(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let Y = !0;
const Xt = [];
function ct() {
  Xt.push(Y), Y = !1;
}
function at() {
  const e = Xt.pop();
  Y = e === void 0 ? !0 : e;
}
function T(e, t, n) {
  if (Y && M) {
    let r = Ye.get(e);
    r || Ye.set(e, r = /* @__PURE__ */ new Map());
    let s = r.get(n);
    s || r.set(n, s = Je());
    const o = process.env.NODE_ENV !== "production" ? { effect: M, target: e, type: t, key: n } : void 0;
    os(s, o);
  }
}
function os(e, t) {
  let n = !1;
  pe <= Qe ? Qt(e) || (e.n |= W, n = !Yt(e)) : n = !e.has(M), n && (e.add(M), M.deps.push(e), process.env.NODE_ENV !== "production" && M.onTrack && M.onTrack(
    F(
      {
        effect: M
      },
      t
    )
  ));
}
function U(e, t, n, r, s, o) {
  const i = Ye.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && p(e)) {
    const u = Number(r);
    i.forEach((f, h) => {
      (h === "length" || !$e(h) && h >= u) && l.push(f);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        p(e) ? ot(n) && l.push(i.get("length")) : (l.push(i.get(J)), oe(e) && l.push(i.get(Xe)));
        break;
      case "delete":
        p(e) || (l.push(i.get(J)), oe(e) && l.push(i.get(Xe)));
        break;
      case "set":
        oe(e) && l.push(i.get(J));
        break;
    }
  const c = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: s, oldTarget: o } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? be(l[0], c) : be(l[0]));
  else {
    const u = [];
    for (const f of l)
      f && u.push(...f);
    process.env.NODE_ENV !== "production" ? be(Je(u), c) : be(Je(u));
  }
}
function be(e, t) {
  const n = p(e) ? e : [...e];
  for (const r of n)
    r.computed && It(r, t);
  for (const r of n)
    r.computed || It(r, t);
}
function It(e, t) {
  (e !== M || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(F({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const is = /* @__PURE__ */ Fn("__proto__,__v_isRef,__isVue"), Zt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($e)
), Pt = /* @__PURE__ */ ls();
function ls() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = d(this);
      for (let o = 0, i = this.length; o < i; o++)
        T(r, "get", o + "");
      const s = r[t](...n);
      return s === -1 || s === !1 ? r[t](...n.map(d)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ct();
      const r = d(this)[t].apply(this, n);
      return at(), r;
    };
  }), e;
}
function cs(e) {
  const t = d(this);
  return T(t, "has", e), t.hasOwnProperty(e);
}
class en {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, r) {
    const s = this._isReadonly, o = this._shallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw" && r === (s ? o ? on : rn : o ? bs : sn).get(t))
      return t;
    const i = p(t);
    if (!s) {
      if (i && m(Pt, n))
        return Reflect.get(Pt, n, r);
      if (n === "hasOwnProperty")
        return cs;
    }
    const l = Reflect.get(t, n, r);
    return ($e(n) ? Zt.has(n) : is(n)) || (s || T(t, "get", n), o) ? l : R(l) ? i && ot(n) ? l : l.value : $(l) ? s ? cn(l) : ln(l) : l;
  }
}
class as extends en {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, s) {
    let o = t[n];
    if (ge(o) && R(o) && !R(r))
      return !1;
    if (!this._shallow && (!Ze(r) && !ge(r) && (o = d(o), r = d(r)), !p(t) && R(o) && !R(r)))
      return o.value = r, !0;
    const i = p(t) && ot(n) ? Number(n) < t.length : m(t, n), l = Reflect.set(t, n, r, s);
    return t === d(s) && (i ? ce(r, o) && U(t, "set", n, r, o) : U(t, "add", n, r)), l;
  }
  deleteProperty(t, n) {
    const r = m(t, n), s = t[n], o = Reflect.deleteProperty(t, n);
    return o && r && U(t, "delete", n, void 0, s), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!$e(n) || !Zt.has(n)) && T(t, "has", n), r;
  }
  ownKeys(t) {
    return T(
      t,
      "iterate",
      p(t) ? "length" : J
    ), Reflect.ownKeys(t);
  }
}
class tn extends en {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Tt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Tt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const us = /* @__PURE__ */ new as(), fs = /* @__PURE__ */ new tn(), ds = /* @__PURE__ */ new tn(!0), ut = (e) => e, Ae = (e) => Reflect.getPrototypeOf(e);
function Ne(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const s = d(e), o = d(t);
  n || (ce(t, o) && T(s, "get", t), T(s, "get", o));
  const { has: i } = Ae(s), l = r ? ut : n ? ht : pt;
  if (i.call(s, t))
    return l(e.get(t));
  if (i.call(s, o))
    return l(e.get(o));
  e !== s && e.get(t);
}
function Oe(e, t = !1) {
  const n = this.__v_raw, r = d(n), s = d(e);
  return t || (ce(e, s) && T(r, "has", e), T(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Se(e, t = !1) {
  return e = e.__v_raw, !t && T(d(e), "iterate", J), Reflect.get(e, "size", e);
}
function Dt(e) {
  e = d(e);
  const t = d(this);
  return Ae(t).has.call(t, e) || (t.add(e), U(t, "add", e, e)), this;
}
function $t(e, t) {
  t = d(t);
  const n = d(this), { has: r, get: s } = Ae(n);
  let o = r.call(n, e);
  o ? process.env.NODE_ENV !== "production" && nn(n, r, e) : (e = d(e), o = r.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), o ? ce(t, i) && U(n, "set", e, t, i) : U(n, "add", e, t), this;
}
function jt(e) {
  const t = d(this), { has: n, get: r } = Ae(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && nn(t, n, e) : (e = d(e), s = n.call(t, e));
  const o = r ? r.call(t, e) : void 0, i = t.delete(e);
  return s && U(t, "delete", e, void 0, o), i;
}
function At() {
  const e = d(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? oe(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
  return t && U(e, "clear", void 0, void 0, n), r;
}
function Ve(e, t) {
  return function(r, s) {
    const o = this, i = o.__v_raw, l = d(i), c = t ? ut : e ? ht : pt;
    return !e && T(l, "iterate", J), i.forEach((u, f) => r.call(s, c(u), c(f), o));
  };
}
function ye(e, t, n) {
  return function(...r) {
    const s = this.__v_raw, o = d(s), i = oe(o), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, u = s[e](...r), f = n ? ut : t ? ht : pt;
    return !t && T(
      o,
      "iterate",
      c ? Xe : J
    ), {
      next() {
        const { value: h, done: N } = u.next();
        return N ? { value: h, done: N } : {
          value: l ? [f(h[0]), f(h[1])] : f(h),
          done: N
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function z(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(
        `${Gt(e)} operation ${n}failed: target is readonly.`,
        d(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ps() {
  const e = {
    get(o) {
      return Ne(this, o);
    },
    get size() {
      return Se(this);
    },
    has: Oe,
    add: Dt,
    set: $t,
    delete: jt,
    clear: At,
    forEach: Ve(!1, !1)
  }, t = {
    get(o) {
      return Ne(this, o, !1, !0);
    },
    get size() {
      return Se(this);
    },
    has: Oe,
    add: Dt,
    set: $t,
    delete: jt,
    clear: At,
    forEach: Ve(!1, !0)
  }, n = {
    get(o) {
      return Ne(this, o, !0);
    },
    get size() {
      return Se(this, !0);
    },
    has(o) {
      return Oe.call(this, o, !0);
    },
    add: z("add"),
    set: z("set"),
    delete: z("delete"),
    clear: z("clear"),
    forEach: Ve(!0, !1)
  }, r = {
    get(o) {
      return Ne(this, o, !0, !0);
    },
    get size() {
      return Se(this, !0);
    },
    has(o) {
      return Oe.call(this, o, !0);
    },
    add: z("add"),
    set: z("set"),
    delete: z("delete"),
    clear: z("clear"),
    forEach: Ve(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = ye(
      o,
      !1,
      !1
    ), n[o] = ye(
      o,
      !0,
      !1
    ), t[o] = ye(
      o,
      !1,
      !0
    ), r[o] = ye(
      o,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    r
  ];
}
const [
  hs,
  _s,
  ms,
  gs
] = /* @__PURE__ */ ps();
function ft(e, t) {
  const n = t ? e ? gs : ms : e ? _s : hs;
  return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(
    m(n, s) && s in r ? n : r,
    s,
    o
  );
}
const vs = {
  get: /* @__PURE__ */ ft(!1, !1)
}, ws = {
  get: /* @__PURE__ */ ft(!0, !1)
}, Es = {
  get: /* @__PURE__ */ ft(!0, !0)
};
function nn(e, t, n) {
  const r = d(n);
  if (r !== n && t.call(e, r)) {
    const s = Wt(e);
    console.warn(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const sn = /* @__PURE__ */ new WeakMap(), bs = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap();
function Ns(e) {
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
function Os(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ns(Wt(e));
}
function ln(e) {
  return ge(e) ? e : dt(
    e,
    !1,
    us,
    vs,
    sn
  );
}
function cn(e) {
  return dt(
    e,
    !0,
    fs,
    ws,
    rn
  );
}
function xe(e) {
  return dt(
    e,
    !0,
    ds,
    Es,
    on
  );
}
function dt(e, t, n, r, s) {
  if (!$(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = s.get(e);
  if (o)
    return o;
  const i = Os(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? r : n
  );
  return s.set(e, l), l;
}
function ie(e) {
  return ge(e) ? ie(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ge(e) {
  return !!(e && e.__v_isReadonly);
}
function Ze(e) {
  return !!(e && e.__v_isShallow);
}
function et(e) {
  return ie(e) || ge(e);
}
function d(e) {
  const t = e && e.__v_raw;
  return t ? d(t) : e;
}
function Ss(e) {
  return Jn(e, "__v_skip", !0), e;
}
const pt = (e) => $(e) ? ln(e) : e, ht = (e) => $(e) ? cn(e) : e;
function R(e) {
  return !!(e && e.__v_isRef === !0);
}
function Vs(e) {
  return R(e) ? e.value : e;
}
const ys = {
  get: (e, t, n) => Vs(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const s = e[t];
    return R(s) && !R(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function xs(e) {
  return ie(e) ? e : new Proxy(e, ys);
}
const Q = [];
function Cs(e) {
  Q.push(e);
}
function Ms() {
  Q.pop();
}
function b(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  ct();
  const n = Q.length ? Q[Q.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = Ts();
  if (r)
    X(
      r,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: o }) => `at <${On(n, o.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    s.length && o.push(`
`, ...Rs(s)), console.warn(...o);
  }
  at();
}
function Ts() {
  let e = Q[Q.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const r = e.component && e.component.parent;
    e = r && r.vnode;
  }
  return t;
}
function Rs(e) {
  const t = [];
  return e.forEach((n, r) => {
    t.push(...r === 0 ? [] : [`
`], ...Is(n));
  }), t;
}
function Is({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${On(
    e.component,
    e.type,
    r
  )}`, o = ">" + n;
  return e.props ? [s, ...Ps(e.props), o] : [s + o];
}
function Ps(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((r) => {
    t.push(...an(r, e[r]));
  }), n.length > 3 && t.push(" ..."), t;
}
function an(e, t, n) {
  return D(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : R(t) ? (t = an(e, d(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : x(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = d(t), n ? t : [`${e}=`, t]);
}
const _t = {
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
function X(e, t, n, r) {
  let s;
  try {
    s = r ? e(...r) : e();
  } catch (o) {
    un(o, t, n);
  }
  return s;
}
function Te(e, t, n, r) {
  if (x(e)) {
    const o = X(e, t, n, r);
    return o && Un(o) && o.catch((i) => {
      un(i, t, n);
    }), o;
  }
  const s = [];
  for (let o = 0; o < e.length; o++)
    s.push(Te(e[o], t, n, r));
  return s;
}
function un(e, t, n, r = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let o = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? _t[n] : n;
    for (; o; ) {
      const u = o.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, i, l) === !1)
            return;
      }
      o = o.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      X(
        c,
        null,
        10,
        [e, i, l]
      );
      return;
    }
  }
  Ds(e, n, s, r);
}
function Ds(e, t, n, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = _t[t];
    if (n && Cs(n), b(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Ms(), r)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Re = !1, tt = !1;
const P = [];
let k = 0;
const le = [];
let A = null, L = 0;
const fn = /* @__PURE__ */ Promise.resolve();
let mt = null;
const $s = 100;
function js(e) {
  const t = mt || fn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function As(e) {
  let t = k + 1, n = P.length;
  for (; t < n; ) {
    const r = t + n >>> 1, s = P[r], o = ve(s);
    o < e || o === e && s.pre ? t = r + 1 : n = r;
  }
  return t;
}
function gt(e) {
  (!P.length || !P.includes(
    e,
    Re && e.allowRecurse ? k + 1 : k
  )) && (e.id == null ? P.push(e) : P.splice(As(e.id), 0, e), dn());
}
function dn() {
  !Re && !tt && (tt = !0, mt = fn.then(hn));
}
function pn(e) {
  p(e) ? le.push(...e) : (!A || !A.includes(
    e,
    e.allowRecurse ? L + 1 : L
  )) && le.push(e), dn();
}
function Fs(e) {
  if (le.length) {
    const t = [...new Set(le)];
    if (le.length = 0, A) {
      A.push(...t);
      return;
    }
    for (A = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), A.sort((n, r) => ve(n) - ve(r)), L = 0; L < A.length; L++)
      process.env.NODE_ENV !== "production" && _n(e, A[L]) || A[L]();
    A = null, L = 0;
  }
}
const ve = (e) => e.id == null ? 1 / 0 : e.id, Hs = (e, t) => {
  const n = ve(e) - ve(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function hn(e) {
  tt = !1, Re = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), P.sort(Hs);
  const t = process.env.NODE_ENV !== "production" ? (n) => _n(e, n) : Ut;
  try {
    for (k = 0; k < P.length; k++) {
      const n = P[k];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        X(n, null, 14);
      }
    }
  } finally {
    k = 0, P.length = 0, Fs(e), Re = !1, mt = null, (P.length || le.length) && hn(e);
  }
}
function _n(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > $s) {
      const r = t.ownerInstance, s = r && Nn(r.type);
      return b(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const de = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Ge().__VUE_HMR_RUNTIME__ = {
  createRecord: We(zs),
  rerender: We(Ks),
  reload: We(Ls)
});
const Ie = /* @__PURE__ */ new Map();
function zs(e, t) {
  return Ie.has(e) ? !1 : (Ie.set(e, {
    initialDef: _e(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function _e(e) {
  return Sn(e) ? e.__vccOpts : e;
}
function Ks(e, t) {
  const n = Ie.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((r) => {
    t && (r.render = t, _e(r.type).render = t), r.renderCache = [], r.update();
  }));
}
function Ls(e, t) {
  const n = Ie.get(e);
  if (!n)
    return;
  t = _e(t), Ft(n.initialDef, t);
  const r = [...n.instances];
  for (const s of r) {
    const o = _e(s.type);
    de.has(o) || (o !== n.initialDef && Ft(o, t), de.add(o)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (de.add(o), s.ceReload(t.styles), de.delete(o)) : s.parent ? gt(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  pn(() => {
    for (const s of r)
      de.delete(
        _e(s.type)
      );
  });
}
function Ft(e, t) {
  F(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function We(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let B = null, ks = null;
const Bs = Symbol.for("v-ndc"), Us = (e) => e.__isSuspense;
function Ws(e, t) {
  t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : pn(e);
}
const Ce = {};
function qs(e, t, { immediate: n, deep: r, flush: s, onTrack: o, onTrigger: i } = K) {
  var l;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && b(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && b(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (_) => {
    b(
      "Invalid watch source: ",
      _,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = ts() === ((l = q) == null ? void 0 : l.scope) ? q : null;
  let f, h = !1, N = !1;
  if (R(e) ? (f = () => e.value, h = Ze(e)) : ie(e) ? (f = () => e, r = !0) : p(e) ? (N = !0, h = e.some((_) => ie(_) || Ze(_)), f = () => e.map((_) => {
    if (R(_))
      return _.value;
    if (ie(_))
      return se(_);
    if (x(_))
      return X(_, u, 2);
    process.env.NODE_ENV !== "production" && c(_);
  })) : x(e) ? t ? f = () => X(e, u, 2) : f = () => {
    if (!(u && u.isUnmounted))
      return I && I(), Te(
        e,
        u,
        3,
        [O]
      );
  } : (f = Ut, process.env.NODE_ENV !== "production" && c(e)), t && r) {
    const _ = f;
    f = () => se(_());
  }
  let I, O = (_) => {
    I = v.onStop = () => {
      X(_, u, 4), I = v.onStop = void 0;
    };
  }, j = N ? new Array(e.length).fill(Ce) : Ce;
  const S = () => {
    if (!!v.active)
      if (t) {
        const _ = v.run();
        (r || h || (N ? _.some((Fe, He) => ce(Fe, j[He])) : ce(_, j))) && (I && I(), Te(t, u, 3, [
          _,
          j === Ce ? void 0 : N && j[0] === Ce ? [] : j,
          O
        ]), j = _);
      } else
        v.run();
  };
  S.allowRecurse = !!t;
  let G;
  s === "sync" ? G = S : s === "post" ? G = () => kt(S, u && u.suspense) : (S.pre = !0, u && (S.id = u.uid), G = () => gt(S));
  const v = new rs(f, G);
  return process.env.NODE_ENV !== "production" && (v.onTrack = o, v.onTrigger = i), t ? n ? S() : j = v.run() : s === "post" ? kt(
    v.run.bind(v),
    u && u.suspense
  ) : v.run(), () => {
    v.stop(), u && u.scope && Ln(u.scope.effects, v);
  };
}
function Gs(e, t, n) {
  const r = this.proxy, s = D(e) ? e.includes(".") ? Js(r, e) : () => r[e] : e.bind(r, r);
  let o;
  x(t) ? o = t : (o = t.handler, n = t);
  const i = q;
  st(this);
  const l = qs(s, o.bind(r), n);
  return i ? st(i) : bn(), l;
}
function Js(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let s = 0; s < n.length && r; s++)
      r = r[n[s]];
    return r;
  };
}
function se(e, t) {
  if (!$(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), R(e))
    se(e.value, t);
  else if (p(e))
    for (let n = 0; n < e.length; n++)
      se(e[n], t);
  else if (Bn(e) || oe(e))
    e.forEach((n) => {
      se(n, t);
    });
  else if (qn(e))
    for (const n in e)
      se(e[n], t);
  return e;
}
function Ys(e, t, n = q, r = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      ct(), st(n);
      const l = Te(t, n, e, i);
      return bn(), at(), l;
    });
    return r ? s.unshift(o) : s.push(o), o;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Gn(_t[e].replace(/ hook$/, ""));
    b(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Qs = (e) => (t, n = q) => Ys(e, (...r) => t(...r), n), Xs = Qs("bum"), nt = (e) => e ? mr(e) ? gr(e) || e.proxy : nt(e.parent) : null, me = /* @__PURE__ */ F(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? xe(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? xe(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? xe(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? xe(e.refs) : e.refs,
  $parent: (e) => nt(e.parent),
  $root: (e) => nt(e.root),
  $emit: (e) => e.emit,
  $options: (e) => tr(e),
  $forceUpdate: (e) => e.f || (e.f = () => gt(e.update)),
  $nextTick: (e) => e.n || (e.n = js.bind(e.proxy)),
  $watch: (e) => Gs.bind(e)
}), Zs = (e) => e === "_" || e === "$", qe = (e, t) => e !== K && !e.__isScriptSetup && m(e, t), er = {
  get({ _: e }, t) {
    const { ctx: n, setupState: r, data: s, props: o, accessCache: i, type: l, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const I = i[t];
      if (I !== void 0)
        switch (I) {
          case 1:
            return r[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (qe(r, t))
          return i[t] = 1, r[t];
        if (s !== K && m(s, t))
          return i[t] = 2, s[t];
        if ((u = e.propsOptions[0]) && m(u, t))
          return i[t] = 3, o[t];
        if (n !== K && m(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const f = me[t];
    let h, N;
    if (f)
      return t === "$attrs" ? (T(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && T(e, "get", t), f(e);
    if ((h = l.__cssModules) && (h = h[t]))
      return h;
    if (n !== K && m(n, t))
      return i[t] = 4, n[t];
    if (N = c.config.globalProperties, m(N, t))
      return N[t];
    process.env.NODE_ENV !== "production" && B && (!D(t) || t.indexOf("__v") !== 0) && (s !== K && Zs(t[0]) && m(s, t) ? b(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === B && b(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: s, ctx: o } = e;
    return qe(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && m(s, t) ? (b(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== K && m(r, t) ? (r[t] = n, !0) : m(e.props, t) ? (process.env.NODE_ENV !== "production" && b(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && b(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: o }
  }, i) {
    let l;
    return !!n[i] || e !== K && m(e, i) || qe(t, i) || (l = o[0]) && m(l, i) || m(r, i) || m(me, i) || m(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : m(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (er.ownKeys = (e) => (b(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ht(e) {
  return p(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function tr(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: s,
    optionsCache: o,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = o.get(t);
  let c;
  return l ? c = l : !s.length && !n && !r ? c = t : (c = {}, s.length && s.forEach(
    (u) => Pe(c, u, i, !0)
  ), Pe(c, t, i)), $(t) && o.set(t, c), c;
}
function Pe(e, t, n, r = !1) {
  const { mixins: s, extends: o } = t;
  o && Pe(e, o, n, !0), s && s.forEach(
    (i) => Pe(e, i, n, !0)
  );
  for (const i in t)
    if (r && i === "expose")
      process.env.NODE_ENV !== "production" && b(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = nr[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const nr = {
  data: zt,
  props: Lt,
  emits: Lt,
  methods: he,
  computed: he,
  beforeCreate: y,
  created: y,
  beforeMount: y,
  mounted: y,
  beforeUpdate: y,
  updated: y,
  beforeDestroy: y,
  beforeUnmount: y,
  destroyed: y,
  unmounted: y,
  activated: y,
  deactivated: y,
  errorCaptured: y,
  serverPrefetch: y,
  components: he,
  directives: he,
  watch: rr,
  provide: zt,
  inject: sr
};
function zt(e, t) {
  return t ? e ? function() {
    return F(
      x(e) ? e.call(this, this) : e,
      x(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function sr(e, t) {
  return he(Kt(e), Kt(t));
}
function Kt(e) {
  if (p(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function y(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function he(e, t) {
  return e ? F(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Lt(e, t) {
  return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : F(
    /* @__PURE__ */ Object.create(null),
    Ht(e),
    Ht(t != null ? t : {})
  ) : t;
}
function rr(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = F(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = y(e[r], t[r]);
  return n;
}
function or() {
  return {
    app: null,
    config: {
      isNativeTag: Hn,
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
const kt = Ws, ir = (e) => e.__isTeleport, mn = Symbol.for("v-fgt"), lr = Symbol.for("v-txt"), cr = Symbol.for("v-cmt");
let re = null;
function ar(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const ur = (...e) => wn(
  ...e
), gn = "__vInternal", vn = ({ key: e }) => e != null ? e : null, Me = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? D(e) || R(e) || x(e) ? { i: B, r: e, k: t, f: !!n } : e : null);
function fr(e, t = null, n = null, r = 0, s = null, o = e === mn ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && vn(t),
    ref: t && Me(t),
    scopeId: ks,
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
    shapeFlag: o,
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: B
  };
  return l ? (vt(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= D(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && b("VNode created with invalid key (NaN). VNode type:", c.type), !i && re && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && re.push(c), c;
}
const dr = process.env.NODE_ENV !== "production" ? ur : wn;
function wn(e, t = null, n = null, r = 0, s = null, o = !1) {
  if ((!e || e === Bs) && (process.env.NODE_ENV !== "production" && !e && b(`Invalid vnode type when creating vnode: ${e}.`), e = cr), ar(e)) {
    const l = De(
      e,
      t,
      !0
    );
    return n && vt(l, n), !o && re && (l.shapeFlag & 6 ? re[re.indexOf(e)] = l : re.push(l)), l.patchFlag |= -2, l;
  }
  if (Sn(e) && (e = e.__vccOpts), t) {
    t = pr(t);
    let { class: l, style: c } = t;
    l && !D(l) && (t.class = lt(l)), $(c) && (et(c) && !p(c) && (c = F({}, c)), t.style = it(c));
  }
  const i = D(e) ? 1 : Us(e) ? 128 : ir(e) ? 64 : $(e) ? 4 : x(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && et(e) && (e = d(e), b(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), fr(
    e,
    t,
    n,
    r,
    s,
    i,
    o,
    !0
  );
}
function pr(e) {
  return e ? et(e) || gn in e ? F({}, e) : e : null;
}
function De(e, t, n = !1) {
  const { props: r, ref: s, patchFlag: o, children: i } = e, l = t ? _r(r || {}, t) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && vn(l),
    ref: t && t.ref ? n && s ? p(s) ? s.concat(Me(t)) : [s, Me(t)] : Me(t) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && o === -1 && p(i) ? i.map(En) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== mn ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && De(e.ssContent),
    ssFallback: e.ssFallback && De(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function En(e) {
  const t = De(e);
  return p(e.children) && (t.children = e.children.map(En)), t;
}
function hr(e = " ", t = 0) {
  return dr(lr, null, e, t);
}
function vt(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (p(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), vt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(gn in t) ? t._ctx = B : s === 3 && B && (B.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    x(t) ? (t = { default: t, _ctx: B }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [hr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function _r(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const s in r)
      if (s === "class")
        t.class !== r.class && (t.class = lt([t.class, r.class]));
      else if (s === "style")
        t.style = it([t.style, r.style]);
      else if (Kn(s)) {
        const o = t[s], i = r[s];
        i && o !== i && !(p(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i);
      } else
        s !== "" && (t[s] = r[s]);
  }
  return t;
}
or();
let q = null, wt, ne, Bt = "__VUE_INSTANCE_SETTERS__";
(ne = Ge()[Bt]) || (ne = Ge()[Bt] = []), ne.push((e) => q = e), wt = (e) => {
  ne.length > 1 ? ne.forEach((t) => t(e)) : ne[0](e);
};
const st = (e) => {
  wt(e), e.scope.on();
}, bn = () => {
  q && q.scope.off(), wt(null);
};
function mr(e) {
  return e.vnode.shapeFlag & 4;
}
function gr(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(xs(Ss(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in me)
          return me[n](e);
      },
      has(t, n) {
        return n in t || n in me;
      }
    }));
}
const vr = /(?:^|[-_])(\w)/g, wr = (e) => e.replace(vr, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Nn(e, t = !0) {
  return x(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function On(e, t, n = !1) {
  let r = Nn(t);
  if (!r && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (r = s[1]);
  }
  if (!r && e && e.parent) {
    const s = (o) => {
      for (const i in o)
        if (o[i] === t)
          return i;
    };
    r = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return r ? wr(r) : n ? "App" : "Anonymous";
}
function Sn(e) {
  return x(e) && "__vccOpts" in e;
}
const Er = ["id", "onFocus", "onBlur", "multiple"], br = {
  key: 1,
  class: "lkt-field__select"
}, Nr = ["innerHTML", "title"], Or = {
  key: 2,
  class: "lkt-field__select-dropdown"
}, Sr = { class: "lkt-field__select-search-container" }, Vr = {
  key: 0,
  class: "lkt-field__select-options"
}, yr = ["onClick"], xr = {
  key: 2,
  class: "lkt-field-select__read"
}, Cr = ["innerHTML", "title"], Mr = {
  key: 0,
  class: "lkt-field__state"
}, Tr = ["title"], Rr = {
  key: 3,
  class: "lkt-field-select__read-multiple"
}, Ir = ["innerHTML", "title"], Pr = {
  key: 0,
  class: "lkt-field__state"
}, Dr = ["title"], $r = ["innerHTML", "onClick"], jr = { name: "LktFieldSelect", inheritAttrs: !1 }, Ar = /* @__PURE__ */ Rn({
  ...jr,
  props: {
    modelValue: { type: [String, Number, Array], default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: yt(16) },
    valid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    closeOnSelect: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    readMode: { type: Boolean, default: !1 },
    allowReadModeSwitch: { type: Boolean, default: !1 },
    switchEditionMessage: { type: String, default: "" },
    emptyLabel: { type: Boolean, default: !1 },
    options: { type: Array, default: () => [] },
    disabledOptions: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: !1 },
    canTag: { type: Boolean, default: !1 },
    noOptionsMessage: { type: String, default: An() },
    resource: { type: String, default: () => null },
    searchStringResourceParam: { type: String, default: "query" },
    searchOptions: { type: [Object, Function], default: () => null },
    searchPlaceholder: { type: String, default: "" }
  },
  emits: ["update:modelValue", "click-ui"],
  setup(e, { expose: t, emit: n }) {
    const r = n, s = e, o = C(null), i = C(null), l = C(null), c = C(!s.readMode), u = yt(16), f = C(new xt(s.searchOptions)), h = C(new Ct(s.options)), N = C(!1), I = C(s.modelValue), O = C(s.modelValue), j = C(!1), S = C(!1), G = C(h.value.all()), v = C(h.value.all()), Z = C("");
    s.closeOnSelect === null ? N.value = s.multiple === !0 : N.value = s.closeOnSelect, ee(() => jn(s.resource));
    const _ = ee(() => typeof s.valid == "function" ? s.valid() : s.valid), Fe = ee(() => O.value !== I.value), He = ee(() => {
      const a = ["lkt-field", "lkt-field-select"];
      return s.palette && a.push(`lkt-field--${s.palette}`), Fe.value && a.push("is-changed"), s.multiple && a.push("is-multiple"), s.disabled && a.push("is-disabled"), S.value && a.push("has-focus"), a.push(_.value ? "is-valid" : "is-error"), a.push(s.modelValue ? "is-filled" : "is-empty"), a.join(" ");
    }), ze = ee(() => {
      let a = "";
      return v.value.forEach((V) => {
        V.value == O.value && (a = V.label);
      }), a;
    }), Et = ee(() => {
      let a = [];
      return s.multiple && v.value.forEach((V) => {
        O.value.forEach((ue) => {
          ue == V.value && a.push(V);
        });
      }), a;
    }), Ke = () => {
      v.value = h.value.all(), G.value = h.value.filter(Z.value);
    }, bt = () => {
      Z.value = "", Ke();
    }, Vn = () => {
      O.value = I.value;
    }, yn = () => s.modelValue, ae = (a) => {
      bt(), Le(a), S.value = !S.value, S.value && ke(() => {
        o.value.focus(), ke(() => {
          o.value.focus();
        });
      });
    };
    te(() => s.readMode, (a) => c.value = !a), te(() => s.modelValue, (a) => {
      O.value = a;
    }), te(O, (a) => {
      r("update:modelValue", a), j.value = !0, ke(() => j.value = !1);
    }), te(Z, Ke), te(() => s.searchOptions, (a) => {
      f.value = new xt(a);
    }), te(() => s.options, (a) => {
      h.value = new Ct(a);
    }), Ke();
    const Nt = (a) => {
      if (s.multiple) {
        let V = O.value.findIndex((ue) => ue == a.value);
        return typeof V > "u" && (V = -1), V;
      }
      return -1;
    }, xn = (a) => {
      if (s.multiple) {
        let V = Nt(a);
        V === -1 ? O.value.push(a.value) : O.value.splice(V, 1);
      } else
        O.value = a.value, S.value = !1;
    }, Cn = (a) => s.multiple ? Nt(a) !== -1 : a.value == O.value, Le = (a) => {
      if (!l.value.contains(a.target)) {
        bt(), S.value = !1;
        return;
      }
    }, Ot = (a) => {
      c.value = !c.value, c.value && focus();
    };
    return window.addEventListener("click", Le), Xs(() => {
      window.removeEventListener("click", Le);
    }), t({
      reset: Vn,
      value: yn
    }), (a, V) => {
      const ue = In("lkt-field-text");
      return w(), E("div", {
        class: St(He.value),
        "data-show-ui": !1,
        ref: (g) => l.value = g
      }, [
        Pn(a.$slots, "prefix"),
        c.value ? (w(), E("select", {
          key: 0,
          ref: (g) => i.value = g,
          id: Dn(u),
          onFocus: Ee(ae, ["stop", "prevent"]),
          onBlur: Ee(ae, ["stop", "prevent"]),
          multiple: e.multiple,
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, Er)) : H("", !0),
        c.value ? (w(), E("div", br, [
          e.multiple ? (w(), E("div", {
            key: 1,
            class: "lkt-field__select-value-multiple",
            onClick: ae
          }, [
            (w(!0), E(Be, null, Ue(Et.value, (g) => (w(), E("div", {
              class: "lkt-field-select-value-datum",
              innerHTML: g.label,
              title: g.label
            }, null, 8, Nr))), 256))
          ])) : (w(), E("div", {
            key: 0,
            class: "lkt-field__select-value",
            onClick: ae
          }, Vt(ze.value), 1)),
          S.value ? (w(), E("div", Or, [
            fe("div", Sr, [
              $n(ue, {
                ref: (g) => o.value = g,
                modelValue: Z.value,
                "onUpdate:modelValue": V[0] || (V[0] = (g) => Z.value = g),
                placeholder: e.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search"
              }, null, 8, ["modelValue", "placeholder"])
            ]),
            e.readonly ? H("", !0) : (w(), E("ul", Vr, [
              (w(!0), E(Be, null, Ue(G.value, (g) => (w(), E("li", {
                class: St(["lkt-field__select-option", { "is-active": e.multiple ? Cn(g) : g.value == O.value }]),
                onClick: Ee((Fr) => xn(g), ["prevent", "stop"])
              }, Vt(g.label), 11, yr))), 256))
            ]))
          ])) : H("", !0)
        ])) : H("", !0),
        !c.value && !e.multiple ? (w(), E("div", xr, [
          fe("div", {
            class: "lkt-field-select__read-value",
            innerHTML: ze.value,
            title: ze.value
          }, null, 8, Cr),
          e.allowReadModeSwitch ? (w(), E("div", Mr, [
            fe("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: Ot
            }, null, 8, Tr)
          ])) : H("", !0)
        ])) : H("", !0),
        !c.value && e.multiple ? (w(), E("div", Rr, [
          (w(!0), E(Be, null, Ue(Et.value, (g) => (w(), E("div", {
            class: "lkt-field-select__read-value",
            innerHTML: g.label,
            title: g.label
          }, null, 8, Ir))), 256)),
          e.allowReadModeSwitch ? (w(), E("div", Pr, [
            fe("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: Ot
            }, null, 8, Dr)
          ])) : H("", !0)
        ])) : H("", !0),
        fe("label", {
          innerHTML: e.label,
          onClick: Ee(ae, ["stop", "prevent"])
        }, null, 8, $r)
      ], 2);
    };
  }
}), Br = {
  install: (e) => {
    e.component("lkt-field-select", Ar);
  }
};
export {
  Br as default,
  kr as setNoOptionsMessage
};
