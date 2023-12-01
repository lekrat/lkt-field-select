var bn = Object.defineProperty;
var On = (e, t, n) => t in e ? bn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ee = (e, t, n) => (On(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as Sn, ref as y, computed as re, watch as ie, nextTick as He, resolveComponent as Vn, openBlock as ce, createElementBlock as le, normalizeClass as mt, renderSlot as xn, createElementVNode as ae, unref as yn, withModifiers as ue, toDisplayString as wt, createVNode as Cn, Fragment as Rn, renderList as In, createCommentVNode as Et } from "vue";
import { generateRandomString as vt } from "lkt-string-tools";
import { existsHTTPResource as Tn } from "lkt-http-client";
class Xe {
}
Ee(Xe, "NO_OPTIONS_MESSAGE", "");
const Pn = () => Xe.NO_OPTIONS_MESSAGE, Io = (e) => (Xe.NO_OPTIONS_MESSAGE = e, !0);
class Nt {
  constructor(t) {
    Ee(this, "value");
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
class bt {
  constructor(t = []) {
    Ee(this, "value");
    this.value = [...t];
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
function Dn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let s = 0; s < o.length; s++)
    n[o[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const F = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Ht = () => {
}, Mn = () => !1, $n = /^on[^a-z]/, jn = (e) => $n.test(e), j = Object.assign, An = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Fn = Object.prototype.hasOwnProperty, m = (e, t) => Fn.call(e, t), d = Array.isArray, Z = (e) => $e(e) === "[object Map]", Hn = (e) => $e(e) === "[object Set]", N = (e) => typeof e == "function", R = (e) => typeof e == "string", Me = (e) => typeof e == "symbol", I = (e) => e !== null && typeof e == "object", zn = (e) => (I(e) || N(e)) && N(e.then) && N(e.catch), Kn = Object.prototype.toString, $e = (e) => Kn.call(e), zt = (e) => $e(e).slice(8, -1), Un = (e) => $e(e) === "[object Object]", Ze = (e) => R(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Kt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ut = Kt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Wn = Kt((e) => e ? `on${Ut(e)}` : ""), ne = (e, t) => !Object.is(e, t), Bn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Ot;
const Ue = () => Ot || (Ot = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function et(e) {
  if (d(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = R(o) ? Gn(o) : et(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (R(e) || I(e))
    return e;
}
const Ln = /;(?![^(]*\))/g, qn = /:([^]+)/, kn = /\/\*[^]*?\*\//g;
function Gn(e) {
  const t = {};
  return e.replace(kn, "").split(Ln).forEach((n) => {
    if (n) {
      const o = n.split(qn);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function tt(e) {
  let t = "";
  if (R(e))
    t = e;
  else if (d(e))
    for (let n = 0; n < e.length; n++) {
      const o = tt(e[n]);
      o && (t += o + " ");
    }
  else if (I(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function St(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Wt;
function Jn(e, t = Wt) {
  t && t.active && t.effects.push(e);
}
function Yn() {
  return Wt;
}
const We = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Bt = (e) => (e.w & W) > 0, Lt = (e) => (e.n & W) > 0, Qn = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= W;
}, Xn = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      Bt(s) && !Lt(s) ? s.delete(e) : t[n++] = s, s.w &= ~W, s.n &= ~W;
    }
    t.length = n;
  }
}, Be = /* @__PURE__ */ new WeakMap();
let pe = 0, W = 1;
const Le = 30;
let b;
const q = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), qe = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class Zn {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Jn(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = b, n = k;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = b, b = this, k = !0, W = 1 << ++pe, pe <= Le ? Qn(this) : Vt(this), this.fn();
    } finally {
      pe <= Le && Xn(this), W = 1 << --pe, b = this.parent, k = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    b === this ? this.deferStop = !0 : this.active && (Vt(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Vt(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let k = !0;
const qt = [];
function nt() {
  qt.push(k), k = !1;
}
function st() {
  const e = qt.pop();
  k = e === void 0 ? !0 : e;
}
function O(e, t, n) {
  if (k && b) {
    let o = Be.get(e);
    o || Be.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = We());
    const r = process.env.NODE_ENV !== "production" ? { effect: b, target: e, type: t, key: n } : void 0;
    es(s, r);
  }
}
function es(e, t) {
  let n = !1;
  pe <= Le ? Lt(e) || (e.n |= W, n = !Bt(e)) : n = !e.has(b), n && (e.add(b), b.deps.push(e), process.env.NODE_ENV !== "production" && b.onTrack && b.onTrack(
    j(
      {
        effect: b
      },
      t
    )
  ));
}
function U(e, t, n, o, s, r) {
  const i = Be.get(e);
  if (!i)
    return;
  let c = [];
  if (t === "clear")
    c = [...i.values()];
  else if (n === "length" && d(e)) {
    const a = Number(o);
    i.forEach((u, _) => {
      (_ === "length" || !Me(_) && _ >= a) && c.push(u);
    });
  } else
    switch (n !== void 0 && c.push(i.get(n)), t) {
      case "add":
        d(e) ? Ze(n) && c.push(i.get("length")) : (c.push(i.get(q)), Z(e) && c.push(i.get(qe)));
        break;
      case "delete":
        d(e) || (c.push(i.get(q)), Z(e) && c.push(i.get(qe)));
        break;
      case "set":
        Z(e) && c.push(i.get(q));
        break;
    }
  const l = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: s, oldTarget: r } : void 0;
  if (c.length === 1)
    c[0] && (process.env.NODE_ENV !== "production" ? ve(c[0], l) : ve(c[0]));
  else {
    const a = [];
    for (const u of c)
      u && a.push(...u);
    process.env.NODE_ENV !== "production" ? ve(We(a), l) : ve(We(a));
  }
}
function ve(e, t) {
  const n = d(e) ? e : [...e];
  for (const o of n)
    o.computed && xt(o, t);
  for (const o of n)
    o.computed || xt(o, t);
}
function xt(e, t) {
  (e !== b || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(j({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const ts = /* @__PURE__ */ Dn("__proto__,__v_isRef,__isVue"), kt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Me)
), yt = /* @__PURE__ */ ns();
function ns() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = f(this);
      for (let r = 0, i = this.length; r < i; r++)
        O(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(f)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      nt();
      const o = f(this)[t].apply(this, n);
      return st(), o;
    };
  }), e;
}
function ss(e) {
  const t = f(this);
  return O(t, "has", e), t.hasOwnProperty(e);
}
class Gt {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._shallow = n;
  }
  get(t, n, o) {
    const s = this._isReadonly, r = this._shallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw" && o === (s ? r ? Zt : Xt : r ? gs : Qt).get(t))
      return t;
    const i = d(t);
    if (!s) {
      if (i && m(yt, n))
        return Reflect.get(yt, n, o);
      if (n === "hasOwnProperty")
        return ss;
    }
    const c = Reflect.get(t, n, o);
    return (Me(n) ? kt.has(n) : ts(n)) || (s || O(t, "get", n), r) ? c : S(c) ? i && Ze(n) ? c : c.value : I(c) ? s ? tn(c) : en(c) : c;
  }
}
class os extends Gt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (ge(r) && S(r) && !S(o))
      return !1;
    if (!this._shallow && (!ke(o) && !ge(o) && (r = f(r), o = f(o)), !d(t) && S(r) && !S(o)))
      return r.value = o, !0;
    const i = d(t) && Ze(n) ? Number(n) < t.length : m(t, n), c = Reflect.set(t, n, o, s);
    return t === f(s) && (i ? ne(o, r) && U(t, "set", n, o, r) : U(t, "add", n, o)), c;
  }
  deleteProperty(t, n) {
    const o = m(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && U(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!Me(n) || !kt.has(n)) && O(t, "has", n), o;
  }
  ownKeys(t) {
    return O(
      t,
      "iterate",
      d(t) ? "length" : q
    ), Reflect.ownKeys(t);
  }
}
class Jt extends Gt {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && St(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && St(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const rs = /* @__PURE__ */ new os(), is = /* @__PURE__ */ new Jt(), cs = /* @__PURE__ */ new Jt(!0), ot = (e) => e, je = (e) => Reflect.getPrototypeOf(e);
function Ne(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = f(e), r = f(t);
  n || (ne(t, r) && O(s, "get", t), O(s, "get", r));
  const { has: i } = je(s), c = o ? ot : n ? lt : ct;
  if (i.call(s, t))
    return c(e.get(t));
  if (i.call(s, r))
    return c(e.get(r));
  e !== s && e.get(t);
}
function be(e, t = !1) {
  const n = this.__v_raw, o = f(n), s = f(e);
  return t || (ne(e, s) && O(o, "has", e), O(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Oe(e, t = !1) {
  return e = e.__v_raw, !t && O(f(e), "iterate", q), Reflect.get(e, "size", e);
}
function Ct(e) {
  e = f(e);
  const t = f(this);
  return je(t).has.call(t, e) || (t.add(e), U(t, "add", e, e)), this;
}
function Rt(e, t) {
  t = f(t);
  const n = f(this), { has: o, get: s } = je(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && Yt(n, o, e) : (e = f(e), r = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), r ? ne(t, i) && U(n, "set", e, t, i) : U(n, "add", e, t), this;
}
function It(e) {
  const t = f(this), { has: n, get: o } = je(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && Yt(t, n, e) : (e = f(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && U(t, "delete", e, void 0, r), i;
}
function Tt() {
  const e = f(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? Z(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && U(e, "clear", void 0, void 0, n), o;
}
function Se(e, t) {
  return function(o, s) {
    const r = this, i = r.__v_raw, c = f(i), l = t ? ot : e ? lt : ct;
    return !e && O(c, "iterate", q), i.forEach((a, u) => o.call(s, l(a), l(u), r));
  };
}
function Ve(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = f(s), i = Z(r), c = e === "entries" || e === Symbol.iterator && i, l = e === "keys" && i, a = s[e](...o), u = n ? ot : t ? lt : ct;
    return !t && O(
      r,
      "iterate",
      l ? qe : q
    ), {
      next() {
        const { value: _, done: g } = a.next();
        return g ? { value: _, done: g } : {
          value: c ? [u(_[0]), u(_[1])] : u(_),
          done: g
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function A(e) {
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
function ls() {
  const e = {
    get(r) {
      return Ne(this, r);
    },
    get size() {
      return Oe(this);
    },
    has: be,
    add: Ct,
    set: Rt,
    delete: It,
    clear: Tt,
    forEach: Se(!1, !1)
  }, t = {
    get(r) {
      return Ne(this, r, !1, !0);
    },
    get size() {
      return Oe(this);
    },
    has: be,
    add: Ct,
    set: Rt,
    delete: It,
    clear: Tt,
    forEach: Se(!1, !0)
  }, n = {
    get(r) {
      return Ne(this, r, !0);
    },
    get size() {
      return Oe(this, !0);
    },
    has(r) {
      return be.call(this, r, !0);
    },
    add: A("add"),
    set: A("set"),
    delete: A("delete"),
    clear: A("clear"),
    forEach: Se(!0, !1)
  }, o = {
    get(r) {
      return Ne(this, r, !0, !0);
    },
    get size() {
      return Oe(this, !0);
    },
    has(r) {
      return be.call(this, r, !0);
    },
    add: A("add"),
    set: A("set"),
    delete: A("delete"),
    clear: A("clear"),
    forEach: Se(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = Ve(
      r,
      !1,
      !1
    ), n[r] = Ve(
      r,
      !0,
      !1
    ), t[r] = Ve(
      r,
      !1,
      !0
    ), o[r] = Ve(
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
  as,
  us,
  fs,
  ps
] = /* @__PURE__ */ ls();
function rt(e, t) {
  const n = t ? e ? ps : fs : e ? us : as;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    m(n, s) && s in o ? n : o,
    s,
    r
  );
}
const ds = {
  get: /* @__PURE__ */ rt(!1, !1)
}, hs = {
  get: /* @__PURE__ */ rt(!0, !1)
}, _s = {
  get: /* @__PURE__ */ rt(!0, !0)
};
function Yt(e, t, n) {
  const o = f(n);
  if (o !== n && t.call(e, o)) {
    const s = zt(e);
    console.warn(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Qt = /* @__PURE__ */ new WeakMap(), gs = /* @__PURE__ */ new WeakMap(), Xt = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap();
function ms(e) {
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
function ws(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ms(zt(e));
}
function en(e) {
  return ge(e) ? e : it(
    e,
    !1,
    rs,
    ds,
    Qt
  );
}
function tn(e) {
  return it(
    e,
    !0,
    is,
    hs,
    Xt
  );
}
function xe(e) {
  return it(
    e,
    !0,
    cs,
    _s,
    Zt
  );
}
function it(e, t, n, o, s) {
  if (!I(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = ws(e);
  if (i === 0)
    return e;
  const c = new Proxy(
    e,
    i === 2 ? o : n
  );
  return s.set(e, c), c;
}
function ee(e) {
  return ge(e) ? ee(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ge(e) {
  return !!(e && e.__v_isReadonly);
}
function ke(e) {
  return !!(e && e.__v_isShallow);
}
function Ge(e) {
  return ee(e) || ge(e);
}
function f(e) {
  const t = e && e.__v_raw;
  return t ? f(t) : e;
}
function Es(e) {
  return Bn(e, "__v_skip", !0), e;
}
const ct = (e) => I(e) ? en(e) : e, lt = (e) => I(e) ? tn(e) : e;
function S(e) {
  return !!(e && e.__v_isRef === !0);
}
function vs(e) {
  return S(e) ? e.value : e;
}
const Ns = {
  get: (e, t, n) => vs(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return S(s) && !S(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function bs(e) {
  return ee(e) ? e : new Proxy(e, Ns);
}
const G = [];
function Os(e) {
  G.push(e);
}
function Ss() {
  G.pop();
}
function w(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  nt();
  const n = G.length ? G[G.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Vs();
  if (o)
    J(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${mn(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...xs(s)), console.warn(...r);
  }
  st();
}
function Vs() {
  let e = G[G.length - 1];
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
function xs(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...ys(n));
  }), t;
}
function ys({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${mn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Cs(e.props), r] : [s + r];
}
function Cs(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...nn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function nn(e, t, n) {
  return R(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : S(t) ? (t = nn(e, f(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : N(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = f(t), n ? t : [`${e}=`, t]);
}
const at = {
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
function J(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (r) {
    sn(r, t, n);
  }
  return s;
}
function Re(e, t, n, o) {
  if (N(e)) {
    const r = J(e, t, n, o);
    return r && zn(r) && r.catch((i) => {
      sn(i, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(Re(e[r], t, n, o));
  return s;
}
function sn(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, c = process.env.NODE_ENV !== "production" ? at[n] : n;
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
      J(
        l,
        null,
        10,
        [e, i, c]
      );
      return;
    }
  }
  Rs(e, n, s, o);
}
function Rs(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = at[t];
    if (n && Os(n), w(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Ss(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Ie = !1, Je = !1;
const C = [];
let z = 0;
const te = [];
let $ = null, H = 0;
const on = /* @__PURE__ */ Promise.resolve();
let ut = null;
const Is = 100;
function Ts(e) {
  const t = ut || on;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ps(e) {
  let t = z + 1, n = C.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = C[o], r = me(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function ft(e) {
  (!C.length || !C.includes(
    e,
    Ie && e.allowRecurse ? z + 1 : z
  )) && (e.id == null ? C.push(e) : C.splice(Ps(e.id), 0, e), rn());
}
function rn() {
  !Ie && !Je && (Je = !0, ut = on.then(ln));
}
function cn(e) {
  d(e) ? te.push(...e) : (!$ || !$.includes(
    e,
    e.allowRecurse ? H + 1 : H
  )) && te.push(e), rn();
}
function Ds(e) {
  if (te.length) {
    const t = [...new Set(te)];
    if (te.length = 0, $) {
      $.push(...t);
      return;
    }
    for ($ = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), $.sort((n, o) => me(n) - me(o)), H = 0; H < $.length; H++)
      process.env.NODE_ENV !== "production" && an(e, $[H]) || $[H]();
    $ = null, H = 0;
  }
}
const me = (e) => e.id == null ? 1 / 0 : e.id, Ms = (e, t) => {
  const n = me(e) - me(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ln(e) {
  Je = !1, Ie = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), C.sort(Ms);
  const t = process.env.NODE_ENV !== "production" ? (n) => an(e, n) : Ht;
  try {
    for (z = 0; z < C.length; z++) {
      const n = C[z];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        J(n, null, 14);
      }
    }
  } finally {
    z = 0, C.length = 0, Ds(e), Ie = !1, ut = null, (C.length || te.length) && ln(e);
  }
}
function an(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Is) {
      const o = t.ownerInstance, s = o && gn(o.type);
      return w(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const fe = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Ue().__VUE_HMR_RUNTIME__ = {
  createRecord: ze($s),
  rerender: ze(js),
  reload: ze(As)
});
const Te = /* @__PURE__ */ new Map();
function $s(e, t) {
  return Te.has(e) ? !1 : (Te.set(e, {
    initialDef: he(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function he(e) {
  return wn(e) ? e.__vccOpts : e;
}
function js(e, t) {
  const n = Te.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, he(o.type).render = t), o.renderCache = [], o.update();
  }));
}
function As(e, t) {
  const n = Te.get(e);
  if (!n)
    return;
  t = he(t), Pt(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = he(s.type);
    fe.has(r) || (r !== n.initialDef && Pt(r, t), fe.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (fe.add(r), s.ceReload(t.styles), fe.delete(r)) : s.parent ? ft(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  cn(() => {
    for (const s of o)
      fe.delete(
        he(s.type)
      );
  });
}
function Pt(e, t) {
  j(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function ze(e) {
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
let K = null, Fs = null;
const Hs = Symbol.for("v-ndc"), zs = (e) => e.__isSuspense;
function Ks(e, t) {
  t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : cn(e);
}
const ye = {};
function Us(e, t, { immediate: n, deep: o, flush: s, onTrack: r, onTrigger: i } = F) {
  var c;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = (h) => {
    w(
      "Invalid watch source: ",
      h,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = Yn() === ((c = B) == null ? void 0 : c.scope) ? B : null;
  let u, _ = !1, g = !1;
  if (S(e) ? (u = () => e.value, _ = ke(e)) : ee(e) ? (u = () => e, o = !0) : d(e) ? (g = !0, _ = e.some((h) => ee(h) || ke(h)), u = () => e.map((h) => {
    if (S(h))
      return h.value;
    if (ee(h))
      return Q(h);
    if (N(h))
      return J(h, a, 2);
    process.env.NODE_ENV !== "production" && l(h);
  })) : N(e) ? t ? u = () => J(e, a, 2) : u = () => {
    if (!(a && a.isUnmounted))
      return V && V(), Re(
        e,
        a,
        3,
        [T]
      );
  } : (u = Ht, process.env.NODE_ENV !== "production" && l(e)), t && o) {
    const h = u;
    u = () => Q(h());
  }
  let V, T = (h) => {
    V = E.onStop = () => {
      J(h, a, 4), V = E.onStop = void 0;
    };
  }, P = g ? new Array(e.length).fill(ye) : ye;
  const D = () => {
    if (!!E.active)
      if (t) {
        const h = E.run();
        (o || _ || (g ? h.some((Ae, se) => ne(Ae, P[se])) : ne(h, P))) && (V && V(), Re(t, a, 3, [
          h,
          P === ye ? void 0 : g && P[0] === ye ? [] : P,
          T
        ]), P = h);
      } else
        E.run();
  };
  D.allowRecurse = !!t;
  let M;
  s === "sync" ? M = D : s === "post" ? M = () => At(D, a && a.suspense) : (D.pre = !0, a && (D.id = a.uid), M = () => ft(D));
  const E = new Zn(u, M);
  return process.env.NODE_ENV !== "production" && (E.onTrack = r, E.onTrigger = i), t ? n ? D() : P = E.run() : s === "post" ? At(
    E.run.bind(E),
    a && a.suspense
  ) : E.run(), () => {
    E.stop(), a && a.scope && An(a.scope.effects, E);
  };
}
function Ws(e, t, n) {
  const o = this.proxy, s = R(e) ? e.includes(".") ? Bs(o, e) : () => o[e] : e.bind(o, o);
  let r;
  N(t) ? r = t : (r = t.handler, n = t);
  const i = B;
  Qe(this);
  const c = Us(s, r.bind(o), n);
  return i ? Qe(i) : _n(), c;
}
function Bs(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function Q(e, t) {
  if (!I(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), S(e))
    Q(e.value, t);
  else if (d(e))
    for (let n = 0; n < e.length; n++)
      Q(e[n], t);
  else if (Hn(e) || Z(e))
    e.forEach((n) => {
      Q(n, t);
    });
  else if (Un(e))
    for (const n in e)
      Q(e[n], t);
  return e;
}
function Ls(e, t, n = B, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      nt(), Qe(n);
      const c = Re(t, n, e, i);
      return _n(), st(), c;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Wn(at[e].replace(/ hook$/, ""));
    w(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const qs = (e) => (t, n = B) => Ls(e, (...o) => t(...o), n), ks = qs("bum"), Ye = (e) => e ? fo(e) ? po(e) || e.proxy : Ye(e.parent) : null, _e = /* @__PURE__ */ j(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? xe(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? xe(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? xe(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? xe(e.refs) : e.refs,
  $parent: (e) => Ye(e.parent),
  $root: (e) => Ye(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Ys(e),
  $forceUpdate: (e) => e.f || (e.f = () => ft(e.update)),
  $nextTick: (e) => e.n || (e.n = Ts.bind(e.proxy)),
  $watch: (e) => Ws.bind(e)
}), Gs = (e) => e === "_" || e === "$", Ke = (e, t) => e !== F && !e.__isScriptSetup && m(e, t), Js = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: c, appContext: l } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const V = i[t];
      if (V !== void 0)
        switch (V) {
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
        if (Ke(o, t))
          return i[t] = 1, o[t];
        if (s !== F && m(s, t))
          return i[t] = 2, s[t];
        if ((a = e.propsOptions[0]) && m(a, t))
          return i[t] = 3, r[t];
        if (n !== F && m(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const u = _e[t];
    let _, g;
    if (u)
      return t === "$attrs" ? (O(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && O(e, "get", t), u(e);
    if ((_ = c.__cssModules) && (_ = _[t]))
      return _;
    if (n !== F && m(n, t))
      return i[t] = 4, n[t];
    if (g = l.config.globalProperties, m(g, t))
      return g[t];
    process.env.NODE_ENV !== "production" && K && (!R(t) || t.indexOf("__v") !== 0) && (s !== F && Gs(t[0]) && m(s, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === K && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return Ke(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && m(s, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== F && m(o, t) ? (o[t] = n, !0) : m(e.props, t) ? (process.env.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && w(
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
    let c;
    return !!n[i] || e !== F && m(e, i) || Ke(t, i) || (c = r[0]) && m(c, i) || m(o, i) || m(_e, i) || m(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : m(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Js.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Dt(e) {
  return d(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ys(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, c = r.get(t);
  let l;
  return c ? l = c : !s.length && !n && !o ? l = t : (l = {}, s.length && s.forEach(
    (a) => Pe(l, a, i, !0)
  ), Pe(l, t, i)), I(t) && r.set(t, l), l;
}
function Pe(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && Pe(e, r, n, !0), s && s.forEach(
    (i) => Pe(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const c = Qs[i] || n && n[i];
      e[i] = c ? c(e[i], t[i]) : t[i];
    }
  return e;
}
const Qs = {
  data: Mt,
  props: jt,
  emits: jt,
  methods: de,
  computed: de,
  beforeCreate: v,
  created: v,
  beforeMount: v,
  mounted: v,
  beforeUpdate: v,
  updated: v,
  beforeDestroy: v,
  beforeUnmount: v,
  destroyed: v,
  unmounted: v,
  activated: v,
  deactivated: v,
  errorCaptured: v,
  serverPrefetch: v,
  components: de,
  directives: de,
  watch: Zs,
  provide: Mt,
  inject: Xs
};
function Mt(e, t) {
  return t ? e ? function() {
    return j(
      N(e) ? e.call(this, this) : e,
      N(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Xs(e, t) {
  return de($t(e), $t(t));
}
function $t(e) {
  if (d(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function v(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function de(e, t) {
  return e ? j(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function jt(e, t) {
  return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : j(
    /* @__PURE__ */ Object.create(null),
    Dt(e),
    Dt(t != null ? t : {})
  ) : t;
}
function Zs(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = j(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = v(e[o], t[o]);
  return n;
}
function eo() {
  return {
    app: null,
    config: {
      isNativeTag: Mn,
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
const At = Ks, to = (e) => e.__isTeleport, un = Symbol.for("v-fgt"), no = Symbol.for("v-txt"), so = Symbol.for("v-cmt");
let X = null;
function oo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const ro = (...e) => dn(
  ...e
), fn = "__vInternal", pn = ({ key: e }) => e != null ? e : null, Ce = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? R(e) || S(e) || N(e) ? { i: K, r: e, k: t, f: !!n } : e : null);
function io(e, t = null, n = null, o = 0, s = null, r = e === un ? 0 : 1, i = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && pn(t),
    ref: t && Ce(t),
    scopeId: Fs,
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
    ctx: K
  };
  return c ? (pt(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= R(n) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && w("VNode created with invalid key (NaN). VNode type:", l.type), !i && X && (l.patchFlag > 0 || r & 6) && l.patchFlag !== 32 && X.push(l), l;
}
const co = process.env.NODE_ENV !== "production" ? ro : dn;
function dn(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === Hs) && (process.env.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = so), oo(e)) {
    const c = De(
      e,
      t,
      !0
    );
    return n && pt(c, n), !r && X && (c.shapeFlag & 6 ? X[X.indexOf(e)] = c : X.push(c)), c.patchFlag |= -2, c;
  }
  if (wn(e) && (e = e.__vccOpts), t) {
    t = lo(t);
    let { class: c, style: l } = t;
    c && !R(c) && (t.class = tt(c)), I(l) && (Ge(l) && !d(l) && (l = j({}, l)), t.style = et(l));
  }
  const i = R(e) ? 1 : zs(e) ? 128 : to(e) ? 64 : I(e) ? 4 : N(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Ge(e) && (e = f(e), w(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), io(
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
function lo(e) {
  return e ? Ge(e) || fn in e ? j({}, e) : e : null;
}
function De(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: i } = e, c = t ? uo(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && pn(c),
    ref: t && t.ref ? n && s ? d(s) ? s.concat(Ce(t)) : [s, Ce(t)] : Ce(t) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && d(i) ? i.map(hn) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== un ? r === -1 ? 16 : r | 16 : r,
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
function hn(e) {
  const t = De(e);
  return d(e.children) && (t.children = e.children.map(hn)), t;
}
function ao(e = " ", t = 0) {
  return co(no, null, e, t);
}
function pt(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (d(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), pt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(fn in t) ? t._ctx = K : s === 3 && K && (K.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    N(t) ? (t = { default: t, _ctx: K }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ao(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function uo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = tt([t.class, o.class]));
      else if (s === "style")
        t.style = et([t.style, o.style]);
      else if (jn(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(d(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
eo();
let B = null, dt, Y, Ft = "__VUE_INSTANCE_SETTERS__";
(Y = Ue()[Ft]) || (Y = Ue()[Ft] = []), Y.push((e) => B = e), dt = (e) => {
  Y.length > 1 ? Y.forEach((t) => t(e)) : Y[0](e);
};
const Qe = (e) => {
  dt(e), e.scope.on();
}, _n = () => {
  B && B.scope.off(), dt(null);
};
function fo(e) {
  return e.vnode.shapeFlag & 4;
}
function po(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(bs(Es(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in _e)
          return _e[n](e);
      },
      has(t, n) {
        return n in t || n in _e;
      }
    }));
}
const ho = /(?:^|[-_])(\w)/g, _o = (e) => e.replace(ho, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function gn(e, t = !0) {
  return N(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function mn(e, t, n = !1) {
  let o = gn(t);
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
  return o ? _o(o) : n ? "App" : "Anonymous";
}
function wn(e) {
  return N(e) && "__vccOpts" in e;
}
const go = ["id", "onFocus", "onBlur"], mo = { class: "lkt-field__select" }, wo = ["onClick"], Eo = {
  key: 0,
  class: "lkt-field__select-dropdown"
}, vo = { class: "lkt-field__select-search-container" }, No = {
  key: 0,
  class: "lkt-field__select-options"
}, bo = ["onClick"], Oo = ["innerHTML", "onClick"], So = { name: "LktFieldSelect", inheritAttrs: !1 }, Vo = /* @__PURE__ */ Sn({
  ...So,
  props: {
    modelValue: { type: [String, Number, Array], default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: vt(16) },
    valid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    closeOnSelect: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 },
    options: { type: Array, default: () => [] },
    disabledOptions: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: !1 },
    canTag: { type: Boolean, default: !1 },
    noOptionsMessage: { type: String, default: Pn() },
    resource: { type: String, default: () => null },
    searchStringResourceParam: { type: String, default: "query" },
    searchOptions: { type: [Object, Function], default: () => null },
    searchPlaceholder: { type: String, default: "" }
  },
  emits: ["update:modelValue", "click-ui"],
  setup(e, { expose: t, emit: n }) {
    const o = n, s = e, r = y(null), i = y(null), c = vt(16), l = y(new Nt(s.searchOptions)), a = y(new bt(s.options)), u = y(!1), _ = y(s.modelValue), g = y(s.modelValue), V = y(!1), T = y(!1), P = y(a.value.all()), D = y(a.value.all()), M = y("");
    s.closeOnSelect === null ? u.value = s.multiple === !0 : u.value = s.closeOnSelect, re(() => Tn(s.resource));
    const E = re(() => typeof s.valid == "function" ? s.valid() : s.valid), ht = re(() => g.value !== _.value), h = re(() => {
      const p = ["lkt-field", "lkt-field-select"];
      return s.palette && p.push(`lkt-field--${s.palette}`), ht.value && p.push("is-changed"), s.multiple && p.push("is-multiple"), s.disabled && p.push("is-disabled"), T.value && p.push("has-focus"), p.push(E.value ? "is-valid" : "is-error"), p.push(s.modelValue ? "is-filled" : "is-empty"), p.join(" ");
    }), Ae = re(() => {
      let p = "";
      return D.value.forEach((L) => {
        L.value == g.value && (p = L.label);
      }), p;
    }), se = () => {
      D.value = a.value.all(), P.value = a.value.filter(M.value);
    }, _t = () => {
      M.value = "", se();
    }, En = () => {
      g.value = _.value;
    }, vn = () => s.modelValue, we = () => {
      _t(), T.value = !T.value, T.value && He(() => {
        r.value.focus(), He(() => {
          r.value.focus();
        });
      });
    };
    ie(() => s.modelValue, (p) => {
      g.value = p;
    }), ie(g, (p) => {
      o("update:modelValue", p), V.value = !0, He(() => V.value = !1);
    }), ie(M, se), ie(() => s.searchOptions, (p) => {
      l.value = new Nt(p);
    }), ie(() => s.options, (p) => {
      a.value = new bt(p);
    }), se();
    const Nn = (p) => {
      g.value = p.value, T.value = !1;
    }, gt = (p) => {
      const L = [
        "is-select",
        "lkt-field__select",
        "lkt-field__select-value",
        "lkt-field__select-dropdown",
        "lkt-field__select-search-container",
        "lkt-field__select-options",
        "lkt-field__select-option",
        "lkt-field__select-search"
      ], oe = p.target;
      let x = !1;
      L.forEach((Fe) => {
        (oe.className.includes(Fe) || oe.parentElement && oe.parentElement.className.includes(Fe)) && (x = !0);
      }), x || (_t(), T.value = !1);
    };
    return window.addEventListener("click", gt), ks(() => {
      window.removeEventListener("click", gt);
    }), t({
      reset: En,
      value: vn
    }), (p, L) => {
      const oe = Vn("lkt-field-text");
      return ce(), le("div", {
        class: mt(h.value),
        "data-show-ui": !1
      }, [
        xn(p.$slots, "prefix"),
        ae("select", {
          ref: (x) => i.value = x,
          id: yn(c),
          onFocus: ue(we, ["stop", "prevent"]),
          onBlur: ue(we, ["stop", "prevent"]),
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, go),
        ae("div", mo, [
          ae("div", {
            class: "lkt-field__select-value",
            onClick: ue(we, ["stop", "prevent"])
          }, wt(Ae.value), 9, wo),
          T.value ? (ce(), le("div", Eo, [
            ae("div", vo, [
              Cn(oe, {
                ref: (x) => r.value = x,
                modelValue: M.value,
                "onUpdate:modelValue": L[0] || (L[0] = (x) => M.value = x),
                placeholder: e.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search"
              }, null, 8, ["modelValue", "placeholder"])
            ]),
            e.readonly ? Et("", !0) : (ce(), le("ul", No, [
              (ce(!0), le(Rn, null, In(P.value, (x) => (ce(), le("li", {
                class: mt(["lkt-field__select-option", { "is-active": x.value == g.value }]),
                onClick: ue((Fe) => Nn(x), ["prevent", "stop"])
              }, wt(x.label), 11, bo))), 256))
            ]))
          ])) : Et("", !0)
        ]),
        ae("label", {
          innerHTML: e.label,
          onClick: ue(we, ["stop", "prevent"])
        }, null, 8, Oo)
      ], 2);
    };
  }
}), To = {
  install: (e) => {
    e.component("lkt-field-select", Vo);
  }
};
export {
  To as default,
  Io as setNoOptionsMessage
};
