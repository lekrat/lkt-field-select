var Mn = Object.defineProperty;
var Tn = (e, t, n) => t in e ? Mn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Ee = (e, t, n) => (Tn(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as Rn, ref as T, computed as Z, watch as ee, nextTick as ze, resolveComponent as In, openBlock as b, createElementBlock as N, normalizeClass as St, renderSlot as Pn, unref as Dn, withModifiers as te, createCommentVNode as k, toDisplayString as Vt, Fragment as Ke, renderList as Le, createElementVNode as de, createVNode as $n } from "vue";
import { generateRandomString as yt } from "lkt-string-tools";
import { existsHTTPResource as jn } from "lkt-http-client";
class nt {
}
Ee(nt, "NO_OPTIONS_MESSAGE", "");
const An = () => nt.NO_OPTIONS_MESSAGE, Uo = (e) => (nt.NO_OPTIONS_MESSAGE = e, !0);
class xt {
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
class Ct {
  constructor(t = []) {
    Ee(this, "value");
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
function Fn(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let s = 0; s < o.length; s++)
    n[o[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const K = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Ut = () => {
}, Hn = () => !1, kn = /^on[^a-z]/, zn = (e) => kn.test(e), A = Object.assign, Kn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ln = Object.prototype.hasOwnProperty, g = (e, t) => Ln.call(e, t), p = Array.isArray, re = (e) => je(e) === "[object Map]", Bn = (e) => je(e) === "[object Set]", x = (e) => typeof e == "function", P = (e) => typeof e == "string", $e = (e) => typeof e == "symbol", D = (e) => e !== null && typeof e == "object", Un = (e) => (D(e) || x(e)) && x(e.then) && x(e.catch), Wn = Object.prototype.toString, je = (e) => Wn.call(e), Wt = (e) => je(e).slice(8, -1), qn = (e) => je(e) === "[object Object]", st = (e) => P(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, qt = (e) => {
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
const We = () => Mt || (Mt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ot(e) {
  if (p(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = P(o) ? Zn(o) : ot(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (P(e) || D(e))
    return e;
}
const Yn = /;(?![^(]*\))/g, Qn = /:([^]+)/, Xn = /\/\*[^]*?\*\//g;
function Zn(e) {
  const t = {};
  return e.replace(Xn, "").split(Yn).forEach((n) => {
    if (n) {
      const o = n.split(Qn);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function rt(e) {
  let t = "";
  if (P(e))
    t = e;
  else if (p(e))
    for (let n = 0; n < e.length; n++) {
      const o = rt(e[n]);
      o && (t += o + " ");
    }
  else if (D(e))
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
const qe = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Yt = (e) => (e.w & q) > 0, Qt = (e) => (e.n & q) > 0, ns = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= q;
}, ss = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      Yt(s) && !Qt(s) ? s.delete(e) : t[n++] = s, s.w &= ~q, s.n &= ~q;
    }
    t.length = n;
  }
}, Ge = /* @__PURE__ */ new WeakMap();
let he = 0, q = 1;
const Je = 30;
let C;
const J = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Ye = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class os {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, es(this, o);
  }
  run() {
    if (!this.active)
      return this.fn();
    let t = C, n = Y;
    for (; t; ) {
      if (t === this)
        return;
      t = t.parent;
    }
    try {
      return this.parent = C, C = this, Y = !0, q = 1 << ++he, he <= Je ? ns(this) : Rt(this), this.fn();
    } finally {
      he <= Je && ss(this), q = 1 << --he, C = this.parent, Y = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    C === this ? this.deferStop = !0 : this.active && (Rt(this), this.onStop && this.onStop(), this.active = !1);
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
function it() {
  Xt.push(Y), Y = !1;
}
function lt() {
  const e = Xt.pop();
  Y = e === void 0 ? !0 : e;
}
function M(e, t, n) {
  if (Y && C) {
    let o = Ge.get(e);
    o || Ge.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = qe());
    const r = process.env.NODE_ENV !== "production" ? { effect: C, target: e, type: t, key: n } : void 0;
    rs(s, r);
  }
}
function rs(e, t) {
  let n = !1;
  he <= Je ? Qt(e) || (e.n |= q, n = !Yt(e)) : n = !e.has(C), n && (e.add(C), C.deps.push(e), process.env.NODE_ENV !== "production" && C.onTrack && C.onTrack(
    A(
      {
        effect: C
      },
      t
    )
  ));
}
function W(e, t, n, o, s, r) {
  const i = Ge.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && p(e)) {
    const u = Number(o);
    i.forEach((f, m) => {
      (m === "length" || !$e(m) && m >= u) && l.push(f);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        p(e) ? st(n) && l.push(i.get("length")) : (l.push(i.get(J)), re(e) && l.push(i.get(Ye)));
        break;
      case "delete":
        p(e) || (l.push(i.get(J)), re(e) && l.push(i.get(Ye)));
        break;
      case "set":
        re(e) && l.push(i.get(J));
        break;
    }
  const c = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: s, oldTarget: r } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? be(l[0], c) : be(l[0]));
  else {
    const u = [];
    for (const f of l)
      f && u.push(...f);
    process.env.NODE_ENV !== "production" ? be(qe(u), c) : be(qe(u));
  }
}
function be(e, t) {
  const n = p(e) ? e : [...e];
  for (const o of n)
    o.computed && It(o, t);
  for (const o of n)
    o.computed || It(o, t);
}
function It(e, t) {
  (e !== C || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(A({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const is = /* @__PURE__ */ Fn("__proto__,__v_isRef,__isVue"), Zt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($e)
), Pt = /* @__PURE__ */ ls();
function ls() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = d(this);
      for (let r = 0, i = this.length; r < i; r++)
        M(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(d)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      it();
      const o = d(this)[t].apply(this, n);
      return lt(), o;
    };
  }), e;
}
function cs(e) {
  const t = d(this);
  return M(t, "has", e), t.hasOwnProperty(e);
}
class en {
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
    if (n === "__v_raw" && o === (s ? r ? rn : on : r ? bs : sn).get(t))
      return t;
    const i = p(t);
    if (!s) {
      if (i && g(Pt, n))
        return Reflect.get(Pt, n, o);
      if (n === "hasOwnProperty")
        return cs;
    }
    const l = Reflect.get(t, n, o);
    return ($e(n) ? Zt.has(n) : is(n)) || (s || M(t, "get", n), r) ? l : R(l) ? i && st(n) ? l : l.value : D(l) ? s ? cn(l) : ln(l) : l;
  }
}
class as extends en {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (ve(r) && R(r) && !R(o))
      return !1;
    if (!this._shallow && (!Qe(o) && !ve(o) && (r = d(r), o = d(o)), !p(t) && R(r) && !R(o)))
      return r.value = o, !0;
    const i = p(t) && st(n) ? Number(n) < t.length : g(t, n), l = Reflect.set(t, n, o, s);
    return t === d(s) && (i ? ce(o, r) && W(t, "set", n, o, r) : W(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = g(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && W(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!$e(n) || !Zt.has(n)) && M(t, "has", n), o;
  }
  ownKeys(t) {
    return M(
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
const us = /* @__PURE__ */ new as(), fs = /* @__PURE__ */ new tn(), ds = /* @__PURE__ */ new tn(!0), ct = (e) => e, Ae = (e) => Reflect.getPrototypeOf(e);
function Ne(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = d(e), r = d(t);
  n || (ce(t, r) && M(s, "get", t), M(s, "get", r));
  const { has: i } = Ae(s), l = o ? ct : n ? dt : ft;
  if (i.call(s, t))
    return l(e.get(t));
  if (i.call(s, r))
    return l(e.get(r));
  e !== s && e.get(t);
}
function Oe(e, t = !1) {
  const n = this.__v_raw, o = d(n), s = d(e);
  return t || (ce(e, s) && M(o, "has", e), M(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Se(e, t = !1) {
  return e = e.__v_raw, !t && M(d(e), "iterate", J), Reflect.get(e, "size", e);
}
function Dt(e) {
  e = d(e);
  const t = d(this);
  return Ae(t).has.call(t, e) || (t.add(e), W(t, "add", e, e)), this;
}
function $t(e, t) {
  t = d(t);
  const n = d(this), { has: o, get: s } = Ae(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && nn(n, o, e) : (e = d(e), r = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), r ? ce(t, i) && W(n, "set", e, t, i) : W(n, "add", e, t), this;
}
function jt(e) {
  const t = d(this), { has: n, get: o } = Ae(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && nn(t, n, e) : (e = d(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && W(t, "delete", e, void 0, r), i;
}
function At() {
  const e = d(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? re(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && W(e, "clear", void 0, void 0, n), o;
}
function Ve(e, t) {
  return function(o, s) {
    const r = this, i = r.__v_raw, l = d(i), c = t ? ct : e ? dt : ft;
    return !e && M(l, "iterate", J), i.forEach((u, f) => o.call(s, c(u), c(f), r));
  };
}
function ye(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = d(s), i = re(r), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, u = s[e](...o), f = n ? ct : t ? dt : ft;
    return !t && M(
      r,
      "iterate",
      c ? Ye : J
    ), {
      next() {
        const { value: m, done: S } = u.next();
        return S ? { value: m, done: S } : {
          value: l ? [f(m[0]), f(m[1])] : f(m),
          done: S
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
    get(r) {
      return Ne(this, r);
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
    get(r) {
      return Ne(this, r, !1, !0);
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
    get(r) {
      return Ne(this, r, !0);
    },
    get size() {
      return Se(this, !0);
    },
    has(r) {
      return Oe.call(this, r, !0);
    },
    add: z("add"),
    set: z("set"),
    delete: z("delete"),
    clear: z("clear"),
    forEach: Ve(!0, !1)
  }, o = {
    get(r) {
      return Ne(this, r, !0, !0);
    },
    get size() {
      return Se(this, !0);
    },
    has(r) {
      return Oe.call(this, r, !0);
    },
    add: z("add"),
    set: z("set"),
    delete: z("delete"),
    clear: z("clear"),
    forEach: Ve(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = ye(
      r,
      !1,
      !1
    ), n[r] = ye(
      r,
      !0,
      !1
    ), t[r] = ye(
      r,
      !1,
      !0
    ), o[r] = ye(
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
  hs,
  _s,
  ms,
  gs
] = /* @__PURE__ */ ps();
function at(e, t) {
  const n = t ? e ? gs : ms : e ? _s : hs;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    g(n, s) && s in o ? n : o,
    s,
    r
  );
}
const vs = {
  get: /* @__PURE__ */ at(!1, !1)
}, ws = {
  get: /* @__PURE__ */ at(!0, !1)
}, Es = {
  get: /* @__PURE__ */ at(!0, !0)
};
function nn(e, t, n) {
  const o = d(n);
  if (o !== n && t.call(e, o)) {
    const s = Wt(e);
    console.warn(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const sn = /* @__PURE__ */ new WeakMap(), bs = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap(), rn = /* @__PURE__ */ new WeakMap();
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
  return ve(e) ? e : ut(
    e,
    !1,
    us,
    vs,
    sn
  );
}
function cn(e) {
  return ut(
    e,
    !0,
    fs,
    ws,
    on
  );
}
function xe(e) {
  return ut(
    e,
    !0,
    ds,
    Es,
    rn
  );
}
function ut(e, t, n, o, s) {
  if (!D(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = Os(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return s.set(e, l), l;
}
function ie(e) {
  return ve(e) ? ie(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ve(e) {
  return !!(e && e.__v_isReadonly);
}
function Qe(e) {
  return !!(e && e.__v_isShallow);
}
function Xe(e) {
  return ie(e) || ve(e);
}
function d(e) {
  const t = e && e.__v_raw;
  return t ? d(t) : e;
}
function Ss(e) {
  return Jn(e, "__v_skip", !0), e;
}
const ft = (e) => D(e) ? ln(e) : e, dt = (e) => D(e) ? cn(e) : e;
function R(e) {
  return !!(e && e.__v_isRef === !0);
}
function Vs(e) {
  return R(e) ? e.value : e;
}
const ys = {
  get: (e, t, n) => Vs(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return R(s) && !R(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
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
function O(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  it();
  const n = Q.length ? Q[Q.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Ts();
  if (o)
    X(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${On(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Rs(s)), console.warn(...r);
  }
  lt();
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
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Rs(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Is(n));
  }), t;
}
function Is({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${On(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Ps(e.props), r] : [s + r];
}
function Ps(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...an(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function an(e, t, n) {
  return P(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : R(t) ? (t = an(e, d(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : x(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = d(t), n ? t : [`${e}=`, t]);
}
const pt = {
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
function X(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (r) {
    un(r, t, n);
  }
  return s;
}
function Te(e, t, n, o) {
  if (x(e)) {
    const r = X(e, t, n, o);
    return r && Un(r) && r.catch((i) => {
      un(i, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(Te(e[r], t, n, o));
  return s;
}
function un(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? pt[n] : n;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let f = 0; f < u.length; f++)
          if (u[f](e, i, l) === !1)
            return;
      }
      r = r.parent;
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
  Ds(e, n, s, o);
}
function Ds(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = pt[t];
    if (n && Cs(n), O(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Ms(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Re = !1, Ze = !1;
const I = [];
let B = 0;
const le = [];
let j = null, L = 0;
const fn = /* @__PURE__ */ Promise.resolve();
let ht = null;
const $s = 100;
function js(e) {
  const t = ht || fn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function As(e) {
  let t = B + 1, n = I.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = I[o], r = we(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function _t(e) {
  (!I.length || !I.includes(
    e,
    Re && e.allowRecurse ? B + 1 : B
  )) && (e.id == null ? I.push(e) : I.splice(As(e.id), 0, e), dn());
}
function dn() {
  !Re && !Ze && (Ze = !0, ht = fn.then(hn));
}
function pn(e) {
  p(e) ? le.push(...e) : (!j || !j.includes(
    e,
    e.allowRecurse ? L + 1 : L
  )) && le.push(e), dn();
}
function Fs(e) {
  if (le.length) {
    const t = [...new Set(le)];
    if (le.length = 0, j) {
      j.push(...t);
      return;
    }
    for (j = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), j.sort((n, o) => we(n) - we(o)), L = 0; L < j.length; L++)
      process.env.NODE_ENV !== "production" && _n(e, j[L]) || j[L]();
    j = null, L = 0;
  }
}
const we = (e) => e.id == null ? 1 / 0 : e.id, Hs = (e, t) => {
  const n = we(e) - we(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function hn(e) {
  Ze = !1, Re = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), I.sort(Hs);
  const t = process.env.NODE_ENV !== "production" ? (n) => _n(e, n) : Ut;
  try {
    for (B = 0; B < I.length; B++) {
      const n = I[B];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        X(n, null, 14);
      }
    }
  } finally {
    B = 0, I.length = 0, Fs(e), Re = !1, ht = null, (I.length || le.length) && hn(e);
  }
}
function _n(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > $s) {
      const o = t.ownerInstance, s = o && Nn(o.type);
      return O(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const pe = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (We().__VUE_HMR_RUNTIME__ = {
  createRecord: Be(ks),
  rerender: Be(zs),
  reload: Be(Ks)
});
const Ie = /* @__PURE__ */ new Map();
function ks(e, t) {
  return Ie.has(e) ? !1 : (Ie.set(e, {
    initialDef: me(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function me(e) {
  return Sn(e) ? e.__vccOpts : e;
}
function zs(e, t) {
  const n = Ie.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, me(o.type).render = t), o.renderCache = [], o.update();
  }));
}
function Ks(e, t) {
  const n = Ie.get(e);
  if (!n)
    return;
  t = me(t), Ft(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = me(s.type);
    pe.has(r) || (r !== n.initialDef && Ft(r, t), pe.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (pe.add(r), s.ceReload(t.styles), pe.delete(r)) : s.parent ? _t(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  pn(() => {
    for (const s of o)
      pe.delete(
        me(s.type)
      );
  });
}
function Ft(e, t) {
  A(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Be(e) {
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
let U = null, Ls = null;
const Bs = Symbol.for("v-ndc"), Us = (e) => e.__isSuspense;
function Ws(e, t) {
  t && t.pendingBranch ? p(e) ? t.effects.push(...e) : t.effects.push(e) : pn(e);
}
const Ce = {};
function qs(e, t, { immediate: n, deep: o, flush: s, onTrack: r, onTrigger: i } = K) {
  var l;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && O(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && O(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (h) => {
    O(
      "Invalid watch source: ",
      h,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = ts() === ((l = G) == null ? void 0 : l.scope) ? G : null;
  let f, m = !1, S = !1;
  if (R(e) ? (f = () => e.value, m = Qe(e)) : ie(e) ? (f = () => e, o = !0) : p(e) ? (S = !0, m = e.some((h) => ie(h) || Qe(h)), f = () => e.map((h) => {
    if (R(h))
      return h.value;
    if (ie(h))
      return se(h);
    if (x(h))
      return X(h, u, 2);
    process.env.NODE_ENV !== "production" && c(h);
  })) : x(e) ? t ? f = () => X(e, u, 2) : f = () => {
    if (!(u && u.isUnmounted))
      return _ && _(), Te(
        e,
        u,
        3,
        [ae]
      );
  } : (f = Ut, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const h = f;
    f = () => se(h());
  }
  let _, ae = (h) => {
    _ = v.onStop = () => {
      X(h, u, 4), _ = v.onStop = void 0;
    };
  }, V = S ? new Array(e.length).fill(Ce) : Ce;
  const $ = () => {
    if (!!v.active)
      if (t) {
        const h = v.run();
        (o || m || (S ? h.some((Fe, ue) => ce(Fe, V[ue])) : ce(h, V))) && (_ && _(), Te(t, u, 3, [
          h,
          V === Ce ? void 0 : S && V[0] === Ce ? [] : V,
          ae
        ]), V = h);
      } else
        v.run();
  };
  $.allowRecurse = !!t;
  let H;
  s === "sync" ? H = $ : s === "post" ? H = () => Lt($, u && u.suspense) : ($.pre = !0, u && ($.id = u.uid), H = () => _t($));
  const v = new os(f, H);
  return process.env.NODE_ENV !== "production" && (v.onTrack = r, v.onTrigger = i), t ? n ? $() : V = v.run() : s === "post" ? Lt(
    v.run.bind(v),
    u && u.suspense
  ) : v.run(), () => {
    v.stop(), u && u.scope && Kn(u.scope.effects, v);
  };
}
function Gs(e, t, n) {
  const o = this.proxy, s = P(e) ? e.includes(".") ? Js(o, e) : () => o[e] : e.bind(o, o);
  let r;
  x(t) ? r = t : (r = t.handler, n = t);
  const i = G;
  tt(this);
  const l = qs(s, r.bind(o), n);
  return i ? tt(i) : bn(), l;
}
function Js(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function se(e, t) {
  if (!D(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), R(e))
    se(e.value, t);
  else if (p(e))
    for (let n = 0; n < e.length; n++)
      se(e[n], t);
  else if (Bn(e) || re(e))
    e.forEach((n) => {
      se(n, t);
    });
  else if (qn(e))
    for (const n in e)
      se(e[n], t);
  return e;
}
function Ys(e, t, n = G, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      it(), tt(n);
      const l = Te(t, n, e, i);
      return bn(), lt(), l;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Gn(pt[e].replace(/ hook$/, ""));
    O(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Qs = (e) => (t, n = G) => Ys(e, (...o) => t(...o), n), Xs = Qs("bum"), et = (e) => e ? go(e) ? vo(e) || e.proxy : et(e.parent) : null, ge = /* @__PURE__ */ A(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? xe(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? xe(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? xe(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? xe(e.refs) : e.refs,
  $parent: (e) => et(e.parent),
  $root: (e) => et(e.root),
  $emit: (e) => e.emit,
  $options: (e) => to(e),
  $forceUpdate: (e) => e.f || (e.f = () => _t(e.update)),
  $nextTick: (e) => e.n || (e.n = js.bind(e.proxy)),
  $watch: (e) => Gs.bind(e)
}), Zs = (e) => e === "_" || e === "$", Ue = (e, t) => e !== K && !e.__isScriptSetup && g(e, t), eo = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: l, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const _ = i[t];
      if (_ !== void 0)
        switch (_) {
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
        if (Ue(o, t))
          return i[t] = 1, o[t];
        if (s !== K && g(s, t))
          return i[t] = 2, s[t];
        if ((u = e.propsOptions[0]) && g(u, t))
          return i[t] = 3, r[t];
        if (n !== K && g(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const f = ge[t];
    let m, S;
    if (f)
      return t === "$attrs" ? (M(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && M(e, "get", t), f(e);
    if ((m = l.__cssModules) && (m = m[t]))
      return m;
    if (n !== K && g(n, t))
      return i[t] = 4, n[t];
    if (S = c.config.globalProperties, g(S, t))
      return S[t];
    process.env.NODE_ENV !== "production" && U && (!P(t) || t.indexOf("__v") !== 0) && (s !== K && Zs(t[0]) && g(s, t) ? O(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === U && O(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return Ue(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && g(s, t) ? (O(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== K && g(o, t) ? (o[t] = n, !0) : g(e.props, t) ? (process.env.NODE_ENV !== "production" && O(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && O(
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
    return !!n[i] || e !== K && g(e, i) || Ue(t, i) || (l = r[0]) && g(l, i) || g(o, i) || g(ge, i) || g(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : g(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (eo.ownKeys = (e) => (O(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Ht(e) {
  return p(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function to(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(
    (u) => Pe(c, u, i, !0)
  ), Pe(c, t, i)), D(t) && r.set(t, c), c;
}
function Pe(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && Pe(e, r, n, !0), s && s.forEach(
    (i) => Pe(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && O(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = no[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const no = {
  data: kt,
  props: Kt,
  emits: Kt,
  methods: _e,
  computed: _e,
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
  components: _e,
  directives: _e,
  watch: oo,
  provide: kt,
  inject: so
};
function kt(e, t) {
  return t ? e ? function() {
    return A(
      x(e) ? e.call(this, this) : e,
      x(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function so(e, t) {
  return _e(zt(e), zt(t));
}
function zt(e) {
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
function _e(e, t) {
  return e ? A(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Kt(e, t) {
  return e ? p(e) && p(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : A(
    /* @__PURE__ */ Object.create(null),
    Ht(e),
    Ht(t != null ? t : {})
  ) : t;
}
function oo(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = A(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = y(e[o], t[o]);
  return n;
}
function ro() {
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
const Lt = Ws, io = (e) => e.__isTeleport, mn = Symbol.for("v-fgt"), lo = Symbol.for("v-txt"), co = Symbol.for("v-cmt");
let oe = null;
function ao(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const uo = (...e) => wn(
  ...e
), gn = "__vInternal", vn = ({ key: e }) => e != null ? e : null, Me = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? P(e) || R(e) || x(e) ? { i: U, r: e, k: t, f: !!n } : e : null);
function fo(e, t = null, n = null, o = 0, s = null, r = e === mn ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && vn(t),
    ref: t && Me(t),
    scopeId: Ls,
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
  return l ? (mt(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= P(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && O("VNode created with invalid key (NaN). VNode type:", c.type), !i && oe && (c.patchFlag > 0 || r & 6) && c.patchFlag !== 32 && oe.push(c), c;
}
const po = process.env.NODE_ENV !== "production" ? uo : wn;
function wn(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === Bs) && (process.env.NODE_ENV !== "production" && !e && O(`Invalid vnode type when creating vnode: ${e}.`), e = co), ao(e)) {
    const l = De(
      e,
      t,
      !0
    );
    return n && mt(l, n), !r && oe && (l.shapeFlag & 6 ? oe[oe.indexOf(e)] = l : oe.push(l)), l.patchFlag |= -2, l;
  }
  if (Sn(e) && (e = e.__vccOpts), t) {
    t = ho(t);
    let { class: l, style: c } = t;
    l && !P(l) && (t.class = rt(l)), D(c) && (Xe(c) && !p(c) && (c = A({}, c)), t.style = ot(c));
  }
  const i = P(e) ? 1 : Us(e) ? 128 : io(e) ? 64 : D(e) ? 4 : x(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Xe(e) && (e = d(e), O(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), fo(
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
function ho(e) {
  return e ? Xe(e) || gn in e ? A({}, e) : e : null;
}
function De(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: i } = e, l = t ? mo(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && vn(l),
    ref: t && t.ref ? n && s ? p(s) ? s.concat(Me(t)) : [s, Me(t)] : Me(t) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && p(i) ? i.map(En) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== mn ? r === -1 ? 16 : r | 16 : r,
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
function _o(e = " ", t = 0) {
  return po(lo, null, e, t);
}
function mt(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (p(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), mt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(gn in t) ? t._ctx = U : s === 3 && U && (U.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    x(t) ? (t = { default: t, _ctx: U }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [_o(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function mo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = rt([t.class, o.class]));
      else if (s === "style")
        t.style = ot([t.style, o.style]);
      else if (zn(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(p(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
ro();
let G = null, gt, ne, Bt = "__VUE_INSTANCE_SETTERS__";
(ne = We()[Bt]) || (ne = We()[Bt] = []), ne.push((e) => G = e), gt = (e) => {
  ne.length > 1 ? ne.forEach((t) => t(e)) : ne[0](e);
};
const tt = (e) => {
  gt(e), e.scope.on();
}, bn = () => {
  G && G.scope.off(), gt(null);
};
function go(e) {
  return e.vnode.shapeFlag & 4;
}
function vo(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(xs(Ss(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in ge)
          return ge[n](e);
      },
      has(t, n) {
        return n in t || n in ge;
      }
    }));
}
const wo = /(?:^|[-_])(\w)/g, Eo = (e) => e.replace(wo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Nn(e, t = !0) {
  return x(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function On(e, t, n = !1) {
  let o = Nn(t);
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
  return o ? Eo(o) : n ? "App" : "Anonymous";
}
function Sn(e) {
  return x(e) && "__vccOpts" in e;
}
const bo = ["id", "onFocus", "onBlur", "multiple"], No = {
  key: 1,
  class: "lkt-field__select"
}, Oo = ["onClick"], So = ["onClick"], Vo = ["innerHTML", "title"], yo = {
  key: 2,
  class: "lkt-field__select-dropdown"
}, xo = { class: "lkt-field__select-search-container" }, Co = {
  key: 0,
  class: "lkt-field__select-options"
}, Mo = ["onClick"], To = {
  key: 2,
  class: "lkt-field-select__read"
}, Ro = ["innerHTML", "title"], Io = {
  key: 0,
  class: "lkt-field__state"
}, Po = ["title"], Do = {
  key: 3,
  class: "lkt-field-select__read-multiple"
}, $o = ["innerHTML", "title"], jo = {
  key: 0,
  class: "lkt-field__state"
}, Ao = ["title"], Fo = ["innerHTML", "onClick"], Ho = { name: "LktFieldSelect", inheritAttrs: !1 }, ko = /* @__PURE__ */ Rn({
  ...Ho,
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
    const o = n, s = e, r = T(null), i = T(null), l = T(!s.readMode), c = yt(16), u = T(new xt(s.searchOptions)), f = T(new Ct(s.options)), m = T(!1), S = T(s.modelValue), _ = T(s.modelValue), ae = T(!1), V = T(!1), $ = T(f.value.all()), H = T(f.value.all()), v = T("");
    s.closeOnSelect === null ? m.value = s.multiple === !0 : m.value = s.closeOnSelect, Z(() => jn(s.resource));
    const vt = Z(() => typeof s.valid == "function" ? s.valid() : s.valid), h = Z(() => _.value !== S.value), Fe = Z(() => {
      const a = ["lkt-field", "lkt-field-select"];
      return s.palette && a.push(`lkt-field--${s.palette}`), h.value && a.push("is-changed"), s.multiple && a.push("is-multiple"), s.disabled && a.push("is-disabled"), V.value && a.push("has-focus"), a.push(vt.value ? "is-valid" : "is-error"), a.push(s.modelValue ? "is-filled" : "is-empty"), a.join(" ");
    }), ue = Z(() => {
      let a = "";
      return H.value.forEach((E) => {
        E.value == _.value && (a = E.label);
      }), a;
    }), wt = Z(() => {
      let a = [];
      return s.multiple && H.value.forEach((E) => {
        _.value.forEach((F) => {
          F == E.value && a.push(E);
        });
      }), a;
    }), He = () => {
      H.value = f.value.all(), $.value = f.value.filter(v.value);
    }, Et = () => {
      v.value = "", He();
    }, Vn = () => {
      _.value = S.value;
    }, yn = () => s.modelValue, fe = () => {
      Et(), V.value = !V.value, V.value && ze(() => {
        r.value.focus(), ze(() => {
          r.value.focus();
        });
      });
    };
    ee(() => s.readMode, (a) => l.value = !a), ee(() => s.modelValue, (a) => {
      _.value = a;
    }), ee(_, (a) => {
      o("update:modelValue", a), ae.value = !0, ze(() => ae.value = !1);
    }), ee(v, He), ee(() => s.searchOptions, (a) => {
      u.value = new xt(a);
    }), ee(() => s.options, (a) => {
      f.value = new Ct(a);
    }), He();
    const bt = (a) => {
      if (s.multiple) {
        let E = _.value.findIndex((F) => F == a.value);
        return typeof E > "u" && (E = -1), E;
      }
      return -1;
    }, xn = (a) => {
      if (s.multiple) {
        let E = bt(a);
        E === -1 ? _.value.push(a.value) : _.value.splice(E, 1);
      } else
        _.value = a.value, V.value = !1;
    }, Cn = (a) => s.multiple ? bt(a) !== -1 : a.value == _.value, Nt = (a) => {
      const E = [
        "is-select",
        "lkt-field__select",
        "lkt-field__select-value",
        "lkt-field__select-dropdown",
        "lkt-field__select-search-container",
        "lkt-field__select-options",
        "lkt-field__select-option",
        "lkt-field__select-search"
      ], F = a.target;
      let w = !1;
      E.forEach((ke) => {
        (F.className.includes(ke) || F.parentElement && F.parentElement.className.includes(ke)) && (w = !0);
      }), w || (Et(), V.value = !1);
    }, Ot = (a) => {
      l.value = !l.value, l.value && focus();
    };
    return window.addEventListener("click", Nt), Xs(() => {
      window.removeEventListener("click", Nt);
    }), t({
      reset: Vn,
      value: yn
    }), (a, E) => {
      const F = In("lkt-field-text");
      return b(), N("div", {
        class: St(Fe.value),
        "data-show-ui": !1
      }, [
        Pn(a.$slots, "prefix"),
        l.value ? (b(), N("select", {
          key: 0,
          ref: (w) => i.value = w,
          id: Dn(c),
          onFocus: te(fe, ["stop", "prevent"]),
          onBlur: te(fe, ["stop", "prevent"]),
          multiple: e.multiple,
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, bo)) : k("", !0),
        l.value ? (b(), N("div", No, [
          e.multiple ? (b(), N("div", {
            key: 1,
            class: "lkt-field__select-value-multiple",
            onClick: te(fe, ["stop", "prevent"])
          }, [
            (b(!0), N(Ke, null, Le(wt.value, (w) => (b(), N("div", {
              class: "lkt-field-select-value-datum",
              innerHTML: w.label,
              title: w.label
            }, null, 8, Vo))), 256))
          ], 8, So)) : (b(), N("div", {
            key: 0,
            class: "lkt-field__select-value",
            onClick: te(fe, ["stop", "prevent"])
          }, Vt(ue.value), 9, Oo)),
          V.value ? (b(), N("div", yo, [
            de("div", xo, [
              $n(F, {
                ref: (w) => r.value = w,
                modelValue: v.value,
                "onUpdate:modelValue": E[0] || (E[0] = (w) => v.value = w),
                placeholder: e.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search"
              }, null, 8, ["modelValue", "placeholder"])
            ]),
            e.readonly ? k("", !0) : (b(), N("ul", Co, [
              (b(!0), N(Ke, null, Le($.value, (w) => (b(), N("li", {
                class: St(["lkt-field__select-option", { "is-active": e.multiple ? Cn(w) : w.value == _.value }]),
                onClick: te((ke) => xn(w), ["prevent", "stop"])
              }, Vt(w.label), 11, Mo))), 256))
            ]))
          ])) : k("", !0)
        ])) : k("", !0),
        !l.value && !e.multiple ? (b(), N("div", To, [
          de("div", {
            class: "lkt-field-select__read-value",
            innerHTML: ue.value,
            title: ue.value
          }, null, 8, Ro),
          e.allowReadModeSwitch ? (b(), N("div", Io, [
            de("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: Ot
            }, null, 8, Po)
          ])) : k("", !0)
        ])) : k("", !0),
        !l.value && e.multiple ? (b(), N("div", Do, [
          (b(!0), N(Ke, null, Le(wt.value, (w) => (b(), N("div", {
            class: "lkt-field-select__read-value",
            innerHTML: w.label,
            title: w.label
          }, null, 8, $o))), 256)),
          e.allowReadModeSwitch ? (b(), N("div", jo, [
            de("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: Ot
            }, null, 8, Ao)
          ])) : k("", !0)
        ])) : k("", !0),
        de("label", {
          innerHTML: e.label,
          onClick: te(fe, ["stop", "prevent"])
        }, null, 8, Fo)
      ], 2);
    };
  }
}), Wo = {
  install: (e) => {
    e.component("lkt-field-select", ko);
  }
};
export {
  Wo as default,
  Uo as setNoOptionsMessage
};
