var Sn = Object.defineProperty;
var Vn = (e, t, n) => t in e ? Sn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ve = (e, t, n) => (Vn(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as yn, ref as y, computed as ae, watch as Q, nextTick as Ke, resolveComponent as xn, openBlock as $, createElementBlock as j, normalizeClass as Et, renderSlot as Cn, unref as Rn, withModifiers as ue, createCommentVNode as X, createElementVNode as fe, toDisplayString as vt, createVNode as Mn, Fragment as Tn, renderList as In } from "vue";
import { generateRandomString as Nt } from "lkt-string-tools";
import { existsHTTPResource as Pn } from "lkt-http-client";
class et {
}
ve(et, "NO_OPTIONS_MESSAGE", "");
const Dn = () => et.NO_OPTIONS_MESSAGE, jo = (e) => (et.NO_OPTIONS_MESSAGE = e, !0);
class bt {
  constructor(t) {
    ve(this, "value");
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
    ve(this, "value");
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
function $n(e, t) {
  const n = /* @__PURE__ */ Object.create(null), o = e.split(",");
  for (let s = 0; s < o.length; s++)
    n[o[s]] = !0;
  return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
}
const F = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const zt = () => {
}, jn = () => !1, An = /^on[^a-z]/, Fn = (e) => An.test(e), D = Object.assign, Hn = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, zn = Object.prototype.hasOwnProperty, g = (e, t) => zn.call(e, t), d = Array.isArray, ne = (e) => je(e) === "[object Map]", Kn = (e) => je(e) === "[object Set]", O = (e) => typeof e == "function", M = (e) => typeof e == "string", $e = (e) => typeof e == "symbol", T = (e) => e !== null && typeof e == "object", Bn = (e) => (T(e) || O(e)) && O(e.then) && O(e.catch), Ln = Object.prototype.toString, je = (e) => Ln.call(e), Kt = (e) => je(e).slice(8, -1), Un = (e) => je(e) === "[object Object]", tt = (e) => M(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Bt = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Lt = Bt((e) => e.charAt(0).toUpperCase() + e.slice(1)), Wn = Bt((e) => e ? `on${Lt(e)}` : ""), re = (e, t) => !Object.is(e, t), kn = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let St;
const Ue = () => St || (St = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function nt(e) {
  if (d(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = M(o) ? Yn(o) : nt(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (M(e) || T(e))
    return e;
}
const qn = /;(?![^(]*\))/g, Gn = /:([^]+)/, Jn = /\/\*[^]*?\*\//g;
function Yn(e) {
  const t = {};
  return e.replace(Jn, "").split(qn).forEach((n) => {
    if (n) {
      const o = n.split(Gn);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function st(e) {
  let t = "";
  if (M(e))
    t = e;
  else if (d(e))
    for (let n = 0; n < e.length; n++) {
      const o = st(e[n]);
      o && (t += o + " ");
    }
  else if (T(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function Vt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ut;
function Qn(e, t = Ut) {
  t && t.active && t.effects.push(e);
}
function Xn() {
  return Ut;
}
const We = (e) => {
  const t = new Set(e);
  return t.w = 0, t.n = 0, t;
}, Wt = (e) => (e.w & L) > 0, kt = (e) => (e.n & L) > 0, Zn = ({ deps: e }) => {
  if (e.length)
    for (let t = 0; t < e.length; t++)
      e[t].w |= L;
}, es = (e) => {
  const { deps: t } = e;
  if (t.length) {
    let n = 0;
    for (let o = 0; o < t.length; o++) {
      const s = t[o];
      Wt(s) && !kt(s) ? s.delete(e) : t[n++] = s, s.w &= ~L, s.n &= ~L;
    }
    t.length = n;
  }
}, ke = /* @__PURE__ */ new WeakMap();
let de = 0, L = 1;
const qe = 30;
let S;
const q = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Ge = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
class ts {
  constructor(t, n = null, o) {
    this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Qn(this, o);
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
      return this.parent = S, S = this, G = !0, L = 1 << ++de, de <= qe ? Zn(this) : yt(this), this.fn();
    } finally {
      de <= qe && es(this), L = 1 << --de, S = this.parent, G = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    S === this ? this.deferStop = !0 : this.active && (yt(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function yt(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
let G = !0;
const qt = [];
function ot() {
  qt.push(G), G = !1;
}
function rt() {
  const e = qt.pop();
  G = e === void 0 ? !0 : e;
}
function V(e, t, n) {
  if (G && S) {
    let o = ke.get(e);
    o || ke.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = We());
    const r = process.env.NODE_ENV !== "production" ? { effect: S, target: e, type: t, key: n } : void 0;
    ns(s, r);
  }
}
function ns(e, t) {
  let n = !1;
  de <= qe ? kt(e) || (e.n |= L, n = !Wt(e)) : n = !e.has(S), n && (e.add(S), S.deps.push(e), process.env.NODE_ENV !== "production" && S.onTrack && S.onTrack(
    D(
      {
        effect: S
      },
      t
    )
  ));
}
function B(e, t, n, o, s, r) {
  const i = ke.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && d(e)) {
    const a = Number(o);
    i.forEach((u, _) => {
      (_ === "length" || !$e(_) && _ >= a) && l.push(u);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        d(e) ? tt(n) && l.push(i.get("length")) : (l.push(i.get(q)), ne(e) && l.push(i.get(Ge)));
        break;
      case "delete":
        d(e) || (l.push(i.get(q)), ne(e) && l.push(i.get(Ge)));
        break;
      case "set":
        ne(e) && l.push(i.get(q));
        break;
    }
  const c = process.env.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: o, oldValue: s, oldTarget: r } : void 0;
  if (l.length === 1)
    l[0] && (process.env.NODE_ENV !== "production" ? Ne(l[0], c) : Ne(l[0]));
  else {
    const a = [];
    for (const u of l)
      u && a.push(...u);
    process.env.NODE_ENV !== "production" ? Ne(We(a), c) : Ne(We(a));
  }
}
function Ne(e, t) {
  const n = d(e) ? e : [...e];
  for (const o of n)
    o.computed && xt(o, t);
  for (const o of n)
    o.computed || xt(o, t);
}
function xt(e, t) {
  (e !== S || e.allowRecurse) && (process.env.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(D({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
}
const ss = /* @__PURE__ */ $n("__proto__,__v_isRef,__isVue"), Gt = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter($e)
), Ct = /* @__PURE__ */ os();
function os() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = p(this);
      for (let r = 0, i = this.length; r < i; r++)
        V(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(p)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      ot();
      const o = p(this)[t].apply(this, n);
      return rt(), o;
    };
  }), e;
}
function rs(e) {
  const t = p(this);
  return V(t, "has", e), t.hasOwnProperty(e);
}
class Jt {
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
    if (n === "__v_raw" && o === (s ? r ? en : Zt : r ? ws : Xt).get(t))
      return t;
    const i = d(t);
    if (!s) {
      if (i && g(Ct, n))
        return Reflect.get(Ct, n, o);
      if (n === "hasOwnProperty")
        return rs;
    }
    const l = Reflect.get(t, n, o);
    return ($e(n) ? Gt.has(n) : ss(n)) || (s || V(t, "get", n), r) ? l : x(l) ? i && tt(n) ? l : l.value : T(l) ? s ? nn(l) : tn(l) : l;
  }
}
class is extends Jt {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (me(r) && x(r) && !x(o))
      return !1;
    if (!this._shallow && (!Je(o) && !me(o) && (r = p(r), o = p(o)), !d(t) && x(r) && !x(o)))
      return r.value = o, !0;
    const i = d(t) && tt(n) ? Number(n) < t.length : g(t, n), l = Reflect.set(t, n, o, s);
    return t === p(s) && (i ? re(o, r) && B(t, "set", n, o, r) : B(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = g(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && B(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!$e(n) || !Gt.has(n)) && V(t, "has", n), o;
  }
  ownKeys(t) {
    return V(
      t,
      "iterate",
      d(t) ? "length" : q
    ), Reflect.ownKeys(t);
  }
}
class Yt extends Jt {
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
const ls = /* @__PURE__ */ new is(), cs = /* @__PURE__ */ new Yt(), as = /* @__PURE__ */ new Yt(!0), it = (e) => e, Ae = (e) => Reflect.getPrototypeOf(e);
function be(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = p(e), r = p(t);
  n || (re(t, r) && V(s, "get", t), V(s, "get", r));
  const { has: i } = Ae(s), l = o ? it : n ? ut : at;
  if (i.call(s, t))
    return l(e.get(t));
  if (i.call(s, r))
    return l(e.get(r));
  e !== s && e.get(t);
}
function Oe(e, t = !1) {
  const n = this.__v_raw, o = p(n), s = p(e);
  return t || (re(e, s) && V(o, "has", e), V(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Se(e, t = !1) {
  return e = e.__v_raw, !t && V(p(e), "iterate", q), Reflect.get(e, "size", e);
}
function Rt(e) {
  e = p(e);
  const t = p(this);
  return Ae(t).has.call(t, e) || (t.add(e), B(t, "add", e, e)), this;
}
function Mt(e, t) {
  t = p(t);
  const n = p(this), { has: o, get: s } = Ae(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && Qt(n, o, e) : (e = p(e), r = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), r ? re(t, i) && B(n, "set", e, t, i) : B(n, "add", e, t), this;
}
function Tt(e) {
  const t = p(this), { has: n, get: o } = Ae(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && Qt(t, n, e) : (e = p(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && B(t, "delete", e, void 0, r), i;
}
function It() {
  const e = p(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ne(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && B(e, "clear", void 0, void 0, n), o;
}
function Ve(e, t) {
  return function(o, s) {
    const r = this, i = r.__v_raw, l = p(i), c = t ? it : e ? ut : at;
    return !e && V(l, "iterate", q), i.forEach((a, u) => o.call(s, c(a), c(u), r));
  };
}
function ye(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = p(s), i = ne(r), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, a = s[e](...o), u = n ? it : t ? ut : at;
    return !t && V(
      r,
      "iterate",
      c ? Ge : q
    ), {
      next() {
        const { value: _, done: v } = a.next();
        return v ? { value: _, done: v } : {
          value: l ? [u(_[0]), u(_[1])] : u(_),
          done: v
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
        `${Lt(e)} operation ${n}failed: target is readonly.`,
        p(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function us() {
  const e = {
    get(r) {
      return be(this, r);
    },
    get size() {
      return Se(this);
    },
    has: Oe,
    add: Rt,
    set: Mt,
    delete: Tt,
    clear: It,
    forEach: Ve(!1, !1)
  }, t = {
    get(r) {
      return be(this, r, !1, !0);
    },
    get size() {
      return Se(this);
    },
    has: Oe,
    add: Rt,
    set: Mt,
    delete: Tt,
    clear: It,
    forEach: Ve(!1, !0)
  }, n = {
    get(r) {
      return be(this, r, !0);
    },
    get size() {
      return Se(this, !0);
    },
    has(r) {
      return Oe.call(this, r, !0);
    },
    add: A("add"),
    set: A("set"),
    delete: A("delete"),
    clear: A("clear"),
    forEach: Ve(!0, !1)
  }, o = {
    get(r) {
      return be(this, r, !0, !0);
    },
    get size() {
      return Se(this, !0);
    },
    has(r) {
      return Oe.call(this, r, !0);
    },
    add: A("add"),
    set: A("set"),
    delete: A("delete"),
    clear: A("clear"),
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
  fs,
  ps,
  ds,
  hs
] = /* @__PURE__ */ us();
function lt(e, t) {
  const n = t ? e ? hs : ds : e ? ps : fs;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    g(n, s) && s in o ? n : o,
    s,
    r
  );
}
const _s = {
  get: /* @__PURE__ */ lt(!1, !1)
}, gs = {
  get: /* @__PURE__ */ lt(!0, !1)
}, ms = {
  get: /* @__PURE__ */ lt(!0, !0)
};
function Qt(e, t, n) {
  const o = p(n);
  if (o !== n && t.call(e, o)) {
    const s = Kt(e);
    console.warn(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Xt = /* @__PURE__ */ new WeakMap(), ws = /* @__PURE__ */ new WeakMap(), Zt = /* @__PURE__ */ new WeakMap(), en = /* @__PURE__ */ new WeakMap();
function Es(e) {
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
function vs(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Es(Kt(e));
}
function tn(e) {
  return me(e) ? e : ct(
    e,
    !1,
    ls,
    _s,
    Xt
  );
}
function nn(e) {
  return ct(
    e,
    !0,
    cs,
    gs,
    Zt
  );
}
function xe(e) {
  return ct(
    e,
    !0,
    as,
    ms,
    en
  );
}
function ct(e, t, n, o, s) {
  if (!T(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = vs(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return s.set(e, l), l;
}
function se(e) {
  return me(e) ? se(e.__v_raw) : !!(e && e.__v_isReactive);
}
function me(e) {
  return !!(e && e.__v_isReadonly);
}
function Je(e) {
  return !!(e && e.__v_isShallow);
}
function Ye(e) {
  return se(e) || me(e);
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
function Ns(e) {
  return kn(e, "__v_skip", !0), e;
}
const at = (e) => T(e) ? tn(e) : e, ut = (e) => T(e) ? nn(e) : e;
function x(e) {
  return !!(e && e.__v_isRef === !0);
}
function bs(e) {
  return x(e) ? e.value : e;
}
const Os = {
  get: (e, t, n) => bs(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return x(s) && !x(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ss(e) {
  return se(e) ? e : new Proxy(e, Os);
}
const J = [];
function Vs(e) {
  J.push(e);
}
function ys() {
  J.pop();
}
function E(e, ...t) {
  if (process.env.NODE_ENV === "production")
    return;
  ot();
  const n = J.length ? J[J.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = xs();
  if (o)
    Y(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${wn(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Cs(s)), console.warn(...r);
  }
  rt();
}
function xs() {
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
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Cs(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Rs(n));
  }), t;
}
function Rs({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${wn(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Ms(e.props), r] : [s + r];
}
function Ms(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...sn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function sn(e, t, n) {
  return M(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : x(t) ? (t = sn(e, p(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : O(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
const ft = {
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
function Y(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (r) {
    on(r, t, n);
  }
  return s;
}
function Me(e, t, n, o) {
  if (O(e)) {
    const r = Y(e, t, n, o);
    return r && Bn(r) && r.catch((i) => {
      on(i, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(Me(e[r], t, n, o));
  return s;
}
function on(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? ft[n] : n;
    for (; r; ) {
      const a = r.ec;
      if (a) {
        for (let u = 0; u < a.length; u++)
          if (a[u](e, i, l) === !1)
            return;
      }
      r = r.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Y(
        c,
        null,
        10,
        [e, i, l]
      );
      return;
    }
  }
  Ts(e, n, s, o);
}
function Ts(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = ft[t];
    if (n && Vs(n), E(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && ys(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Te = !1, Qe = !1;
const R = [];
let z = 0;
const oe = [];
let P = null, H = 0;
const rn = /* @__PURE__ */ Promise.resolve();
let pt = null;
const Is = 100;
function Ps(e) {
  const t = pt || rn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ds(e) {
  let t = z + 1, n = R.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = R[o], r = we(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function dt(e) {
  (!R.length || !R.includes(
    e,
    Te && e.allowRecurse ? z + 1 : z
  )) && (e.id == null ? R.push(e) : R.splice(Ds(e.id), 0, e), ln());
}
function ln() {
  !Te && !Qe && (Qe = !0, pt = rn.then(an));
}
function cn(e) {
  d(e) ? oe.push(...e) : (!P || !P.includes(
    e,
    e.allowRecurse ? H + 1 : H
  )) && oe.push(e), ln();
}
function $s(e) {
  if (oe.length) {
    const t = [...new Set(oe)];
    if (oe.length = 0, P) {
      P.push(...t);
      return;
    }
    for (P = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), P.sort((n, o) => we(n) - we(o)), H = 0; H < P.length; H++)
      process.env.NODE_ENV !== "production" && un(e, P[H]) || P[H]();
    P = null, H = 0;
  }
}
const we = (e) => e.id == null ? 1 / 0 : e.id, js = (e, t) => {
  const n = we(e) - we(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function an(e) {
  Qe = !1, Te = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), R.sort(js);
  const t = process.env.NODE_ENV !== "production" ? (n) => un(e, n) : zt;
  try {
    for (z = 0; z < R.length; z++) {
      const n = R[z];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        Y(n, null, 14);
      }
    }
  } finally {
    z = 0, R.length = 0, $s(e), Te = !1, pt = null, (R.length || oe.length) && an(e);
  }
}
function un(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Is) {
      const o = t.ownerInstance, s = o && mn(o.type);
      return E(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const pe = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Ue().__VUE_HMR_RUNTIME__ = {
  createRecord: Be(As),
  rerender: Be(Fs),
  reload: Be(Hs)
});
const Ie = /* @__PURE__ */ new Map();
function As(e, t) {
  return Ie.has(e) ? !1 : (Ie.set(e, {
    initialDef: _e(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function _e(e) {
  return En(e) ? e.__vccOpts : e;
}
function Fs(e, t) {
  const n = Ie.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, _e(o.type).render = t), o.renderCache = [], o.update();
  }));
}
function Hs(e, t) {
  const n = Ie.get(e);
  if (!n)
    return;
  t = _e(t), Pt(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = _e(s.type);
    pe.has(r) || (r !== n.initialDef && Pt(r, t), pe.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (pe.add(r), s.ceReload(t.styles), pe.delete(r)) : s.parent ? dt(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  cn(() => {
    for (const s of o)
      pe.delete(
        _e(s.type)
      );
  });
}
function Pt(e, t) {
  D(e, t);
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
let K = null, zs = null;
const Ks = Symbol.for("v-ndc"), Bs = (e) => e.__isSuspense;
function Ls(e, t) {
  t && t.pendingBranch ? d(e) ? t.effects.push(...e) : t.effects.push(e) : cn(e);
}
const Ce = {};
function Us(e, t, { immediate: n, deep: o, flush: s, onTrack: r, onTrigger: i } = F) {
  var l;
  process.env.NODE_ENV !== "production" && !t && (n !== void 0 && E(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && E(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (h) => {
    E(
      "Invalid watch source: ",
      h,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, a = Xn() === ((l = U) == null ? void 0 : l.scope) ? U : null;
  let u, _ = !1, v = !1;
  if (x(e) ? (u = () => e.value, _ = Je(e)) : se(e) ? (u = () => e, o = !0) : d(e) ? (v = !0, _ = e.some((h) => se(h) || Je(h)), u = () => e.map((h) => {
    if (x(h))
      return h.value;
    if (se(h))
      return ee(h);
    if (O(h))
      return Y(h, a, 2);
    process.env.NODE_ENV !== "production" && c(h);
  })) : O(e) ? t ? u = () => Y(e, a, 2) : u = () => {
    if (!(a && a.isUnmounted))
      return w && w(), Me(
        e,
        a,
        3,
        [ie]
      );
  } : (u = zt, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const h = u;
    u = () => ee(h());
  }
  let w, ie = (h) => {
    w = m.onStop = () => {
      Y(h, a, 4), w = m.onStop = void 0;
    };
  }, N = v ? new Array(e.length).fill(Ce) : Ce;
  const I = () => {
    if (!!m.active)
      if (t) {
        const h = m.run();
        (o || _ || (v ? h.some((Fe, le) => re(Fe, N[le])) : re(h, N))) && (w && w(), Me(t, a, 3, [
          h,
          N === Ce ? void 0 : v && N[0] === Ce ? [] : N,
          ie
        ]), N = h);
      } else
        m.run();
  };
  I.allowRecurse = !!t;
  let W;
  s === "sync" ? W = I : s === "post" ? W = () => Ft(I, a && a.suspense) : (I.pre = !0, a && (I.id = a.uid), W = () => dt(I));
  const m = new ts(u, W);
  return process.env.NODE_ENV !== "production" && (m.onTrack = r, m.onTrigger = i), t ? n ? I() : N = m.run() : s === "post" ? Ft(
    m.run.bind(m),
    a && a.suspense
  ) : m.run(), () => {
    m.stop(), a && a.scope && Hn(a.scope.effects, m);
  };
}
function Ws(e, t, n) {
  const o = this.proxy, s = M(e) ? e.includes(".") ? ks(o, e) : () => o[e] : e.bind(o, o);
  let r;
  O(t) ? r = t : (r = t.handler, n = t);
  const i = U;
  Ze(this);
  const l = Us(s, r.bind(o), n);
  return i ? Ze(i) : gn(), l;
}
function ks(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function ee(e, t) {
  if (!T(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
    return e;
  if (t.add(e), x(e))
    ee(e.value, t);
  else if (d(e))
    for (let n = 0; n < e.length; n++)
      ee(e[n], t);
  else if (Kn(e) || ne(e))
    e.forEach((n) => {
      ee(n, t);
    });
  else if (Un(e))
    for (const n in e)
      ee(e[n], t);
  return e;
}
function qs(e, t, n = U, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      ot(), Ze(n);
      const l = Me(t, n, e, i);
      return gn(), rt(), l;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Wn(ft[e].replace(/ hook$/, ""));
    E(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Gs = (e) => (t, n = U) => qs(e, (...o) => t(...o), n), Js = Gs("bum"), Xe = (e) => e ? ho(e) ? _o(e) || e.proxy : Xe(e.parent) : null, ge = /* @__PURE__ */ D(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? xe(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? xe(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? xe(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? xe(e.refs) : e.refs,
  $parent: (e) => Xe(e.parent),
  $root: (e) => Xe(e.root),
  $emit: (e) => e.emit,
  $options: (e) => Xs(e),
  $forceUpdate: (e) => e.f || (e.f = () => dt(e.update)),
  $nextTick: (e) => e.n || (e.n = Ps.bind(e.proxy)),
  $watch: (e) => Ws.bind(e)
}), Ys = (e) => e === "_" || e === "$", Le = (e, t) => e !== F && !e.__isScriptSetup && g(e, t), Qs = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: l, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let a;
    if (t[0] !== "$") {
      const w = i[t];
      if (w !== void 0)
        switch (w) {
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
        if (Le(o, t))
          return i[t] = 1, o[t];
        if (s !== F && g(s, t))
          return i[t] = 2, s[t];
        if ((a = e.propsOptions[0]) && g(a, t))
          return i[t] = 3, r[t];
        if (n !== F && g(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const u = ge[t];
    let _, v;
    if (u)
      return t === "$attrs" ? (V(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && V(e, "get", t), u(e);
    if ((_ = l.__cssModules) && (_ = _[t]))
      return _;
    if (n !== F && g(n, t))
      return i[t] = 4, n[t];
    if (v = c.config.globalProperties, g(v, t))
      return v[t];
    process.env.NODE_ENV !== "production" && K && (!M(t) || t.indexOf("__v") !== 0) && (s !== F && Ys(t[0]) && g(s, t) ? E(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === K && E(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return Le(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && g(s, t) ? (E(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== F && g(o, t) ? (o[t] = n, !0) : g(e.props, t) ? (process.env.NODE_ENV !== "production" && E(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && E(
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
    return !!n[i] || e !== F && g(e, i) || Le(t, i) || (l = r[0]) && g(l, i) || g(o, i) || g(ge, i) || g(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : g(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Qs.ownKeys = (e) => (E(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Dt(e) {
  return d(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Xs(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(
    (a) => Pe(c, a, i, !0)
  ), Pe(c, t, i)), T(t) && r.set(t, c), c;
}
function Pe(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && Pe(e, r, n, !0), s && s.forEach(
    (i) => Pe(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && E(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Zs[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Zs = {
  data: $t,
  props: At,
  emits: At,
  methods: he,
  computed: he,
  beforeCreate: b,
  created: b,
  beforeMount: b,
  mounted: b,
  beforeUpdate: b,
  updated: b,
  beforeDestroy: b,
  beforeUnmount: b,
  destroyed: b,
  unmounted: b,
  activated: b,
  deactivated: b,
  errorCaptured: b,
  serverPrefetch: b,
  components: he,
  directives: he,
  watch: to,
  provide: $t,
  inject: eo
};
function $t(e, t) {
  return t ? e ? function() {
    return D(
      O(e) ? e.call(this, this) : e,
      O(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function eo(e, t) {
  return he(jt(e), jt(t));
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
function b(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function he(e, t) {
  return e ? D(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function At(e, t) {
  return e ? d(e) && d(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : D(
    /* @__PURE__ */ Object.create(null),
    Dt(e),
    Dt(t != null ? t : {})
  ) : t;
}
function to(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = D(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = b(e[o], t[o]);
  return n;
}
function no() {
  return {
    app: null,
    config: {
      isNativeTag: jn,
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
const Ft = Ls, so = (e) => e.__isTeleport, fn = Symbol.for("v-fgt"), oo = Symbol.for("v-txt"), ro = Symbol.for("v-cmt");
let te = null;
function io(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const lo = (...e) => hn(
  ...e
), pn = "__vInternal", dn = ({ key: e }) => e != null ? e : null, Re = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? M(e) || x(e) || O(e) ? { i: K, r: e, k: t, f: !!n } : e : null);
function co(e, t = null, n = null, o = 0, s = null, r = e === fn ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && dn(t),
    ref: t && Re(t),
    scopeId: zs,
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
  return l ? (ht(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= M(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && E("VNode created with invalid key (NaN). VNode type:", c.type), !i && te && (c.patchFlag > 0 || r & 6) && c.patchFlag !== 32 && te.push(c), c;
}
const ao = process.env.NODE_ENV !== "production" ? lo : hn;
function hn(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === Ks) && (process.env.NODE_ENV !== "production" && !e && E(`Invalid vnode type when creating vnode: ${e}.`), e = ro), io(e)) {
    const l = De(
      e,
      t,
      !0
    );
    return n && ht(l, n), !r && te && (l.shapeFlag & 6 ? te[te.indexOf(e)] = l : te.push(l)), l.patchFlag |= -2, l;
  }
  if (En(e) && (e = e.__vccOpts), t) {
    t = uo(t);
    let { class: l, style: c } = t;
    l && !M(l) && (t.class = st(l)), T(c) && (Ye(c) && !d(c) && (c = D({}, c)), t.style = nt(c));
  }
  const i = M(e) ? 1 : Bs(e) ? 128 : so(e) ? 64 : T(e) ? 4 : O(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Ye(e) && (e = p(e), E(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), co(
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
function uo(e) {
  return e ? Ye(e) || pn in e ? D({}, e) : e : null;
}
function De(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: i } = e, l = t ? po(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && dn(l),
    ref: t && t.ref ? n && s ? d(s) ? s.concat(Re(t)) : [s, Re(t)] : Re(t) : s,
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
    ssContent: e.ssContent && De(e.ssContent),
    ssFallback: e.ssFallback && De(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function _n(e) {
  const t = De(e);
  return d(e.children) && (t.children = e.children.map(_n)), t;
}
function fo(e = " ", t = 0) {
  return ao(oo, null, e, t);
}
function ht(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (d(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), ht(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(pn in t) ? t._ctx = K : s === 3 && K && (K.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    O(t) ? (t = { default: t, _ctx: K }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [fo(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function po(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = st([t.class, o.class]));
      else if (s === "style")
        t.style = nt([t.style, o.style]);
      else if (Fn(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(d(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
no();
let U = null, _t, Z, Ht = "__VUE_INSTANCE_SETTERS__";
(Z = Ue()[Ht]) || (Z = Ue()[Ht] = []), Z.push((e) => U = e), _t = (e) => {
  Z.length > 1 ? Z.forEach((t) => t(e)) : Z[0](e);
};
const Ze = (e) => {
  _t(e), e.scope.on();
}, gn = () => {
  U && U.scope.off(), _t(null);
};
function ho(e) {
  return e.vnode.shapeFlag & 4;
}
function _o(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ss(Ns(e.exposed)), {
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
const go = /(?:^|[-_])(\w)/g, mo = (e) => e.replace(go, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function mn(e, t = !0) {
  return O(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function wn(e, t, n = !1) {
  let o = mn(t);
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
  return o ? mo(o) : n ? "App" : "Anonymous";
}
function En(e) {
  return O(e) && "__vccOpts" in e;
}
const wo = ["id", "onFocus", "onBlur"], Eo = {
  key: 1,
  class: "lkt-field__select"
}, vo = ["onClick"], No = {
  key: 0,
  class: "lkt-field__select-dropdown"
}, bo = { class: "lkt-field__select-search-container" }, Oo = {
  key: 0,
  class: "lkt-field__select-options"
}, So = ["onClick"], Vo = {
  key: 2,
  class: "lkt-field-select__read"
}, yo = ["innerHTML", "title"], xo = {
  key: 0,
  class: "lkt-field__state"
}, Co = ["title"], Ro = ["innerHTML", "onClick"], Mo = { name: "LktFieldSelect", inheritAttrs: !1 }, To = /* @__PURE__ */ yn({
  ...Mo,
  props: {
    modelValue: { type: [String, Number, Array], default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: Nt(16) },
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
    noOptionsMessage: { type: String, default: Dn() },
    resource: { type: String, default: () => null },
    searchStringResourceParam: { type: String, default: "query" },
    searchOptions: { type: [Object, Function], default: () => null },
    searchPlaceholder: { type: String, default: "" }
  },
  emits: ["update:modelValue", "click-ui"],
  setup(e, { expose: t, emit: n }) {
    const o = n, s = e, r = y(null), i = y(null), l = y(!s.readMode), c = Nt(16), a = y(new bt(s.searchOptions)), u = y(new Ot(s.options)), _ = y(!1), v = y(s.modelValue), w = y(s.modelValue), ie = y(!1), N = y(!1), I = y(u.value.all()), W = y(u.value.all()), m = y("");
    s.closeOnSelect === null ? _.value = s.multiple === !0 : _.value = s.closeOnSelect, ae(() => Pn(s.resource));
    const gt = ae(() => typeof s.valid == "function" ? s.valid() : s.valid), h = ae(() => w.value !== v.value), Fe = ae(() => {
      const f = ["lkt-field", "lkt-field-select"];
      return s.palette && f.push(`lkt-field--${s.palette}`), h.value && f.push("is-changed"), s.multiple && f.push("is-multiple"), s.disabled && f.push("is-disabled"), N.value && f.push("has-focus"), f.push(gt.value ? "is-valid" : "is-error"), f.push(s.modelValue ? "is-filled" : "is-empty"), f.join(" ");
    }), le = ae(() => {
      let f = "";
      return W.value.forEach((k) => {
        k.value == w.value && (f = k.label);
      }), f;
    }), He = () => {
      W.value = u.value.all(), I.value = u.value.filter(m.value);
    }, mt = () => {
      m.value = "", He();
    }, vn = () => {
      w.value = v.value;
    }, Nn = () => s.modelValue, Ee = () => {
      mt(), N.value = !N.value, N.value && Ke(() => {
        r.value.focus(), Ke(() => {
          r.value.focus();
        });
      });
    };
    Q(() => s.readMode, (f) => l.value = !f), Q(() => s.modelValue, (f) => {
      w.value = f;
    }), Q(w, (f) => {
      o("update:modelValue", f), ie.value = !0, Ke(() => ie.value = !1);
    }), Q(m, He), Q(() => s.searchOptions, (f) => {
      a.value = new bt(f);
    }), Q(() => s.options, (f) => {
      u.value = new Ot(f);
    }), He();
    const bn = (f) => {
      w.value = f.value, N.value = !1;
    }, wt = (f) => {
      const k = [
        "is-select",
        "lkt-field__select",
        "lkt-field__select-value",
        "lkt-field__select-dropdown",
        "lkt-field__select-search-container",
        "lkt-field__select-options",
        "lkt-field__select-option",
        "lkt-field__select-search"
      ], ce = f.target;
      let C = !1;
      k.forEach((ze) => {
        (ce.className.includes(ze) || ce.parentElement && ce.parentElement.className.includes(ze)) && (C = !0);
      }), C || (mt(), N.value = !1);
    }, On = (f) => {
      l.value = !l.value, l.value && focus();
    };
    return window.addEventListener("click", wt), Js(() => {
      window.removeEventListener("click", wt);
    }), t({
      reset: vn,
      value: Nn
    }), (f, k) => {
      const ce = xn("lkt-field-text");
      return $(), j("div", {
        class: Et(Fe.value),
        "data-show-ui": !1
      }, [
        Cn(f.$slots, "prefix"),
        l.value ? ($(), j("select", {
          key: 0,
          ref: (C) => i.value = C,
          id: Rn(c),
          onFocus: ue(Ee, ["stop", "prevent"]),
          onBlur: ue(Ee, ["stop", "prevent"]),
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, wo)) : X("", !0),
        l.value ? ($(), j("div", Eo, [
          fe("div", {
            class: "lkt-field__select-value",
            onClick: ue(Ee, ["stop", "prevent"])
          }, vt(le.value), 9, vo),
          N.value ? ($(), j("div", No, [
            fe("div", bo, [
              Mn(ce, {
                ref: (C) => r.value = C,
                modelValue: m.value,
                "onUpdate:modelValue": k[0] || (k[0] = (C) => m.value = C),
                placeholder: e.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search"
              }, null, 8, ["modelValue", "placeholder"])
            ]),
            e.readonly ? X("", !0) : ($(), j("ul", Oo, [
              ($(!0), j(Tn, null, In(I.value, (C) => ($(), j("li", {
                class: Et(["lkt-field__select-option", { "is-active": C.value == w.value }]),
                onClick: ue((ze) => bn(C), ["prevent", "stop"])
              }, vt(C.label), 11, So))), 256))
            ]))
          ])) : X("", !0)
        ])) : X("", !0),
        l.value ? X("", !0) : ($(), j("div", Vo, [
          fe("div", {
            class: "lkt-field-select__read-value",
            innerHTML: le.value,
            title: le.value
          }, null, 8, yo),
          e.allowReadModeSwitch ? ($(), j("div", xo, [
            fe("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: On
            }, null, 8, Co)
          ])) : X("", !0)
        ])),
        fe("label", {
          innerHTML: e.label,
          onClick: ue(Ee, ["stop", "prevent"])
        }, null, 8, Ro)
      ], 2);
    };
  }
}), Ao = {
  install: (e) => {
    e.component("lkt-field-select", To);
  }
};
export {
  Ao as default,
  jo as setNoOptionsMessage
};
