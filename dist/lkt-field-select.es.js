var Wn = Object.defineProperty;
var Bn = (e, t, n) => t in e ? Wn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _e = (e, t, n) => (Bn(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as qn, useSlots as Gn, ref as C, computed as M, watch as ge, nextTick as Qe, resolveComponent as At, openBlock as h, createElementBlock as m, normalizeClass as Lt, renderSlot as Re, unref as me, withModifiers as Ce, createCommentVNode as I, toDisplayString as Xe, Fragment as ve, renderList as Ze, createElementVNode as xe, createVNode as Jn, createBlock as et, resolveDynamicComponent as jt, createTextVNode as Ht } from "vue";
import { generateRandomString as Ft } from "lkt-string-tools";
import { httpCall as Yn } from "lkt-http-client";
class T {
}
_e(T, "NO_OPTIONS_MESSAGE", ""), _e(T, "customResourceOptionSlots", {}), _e(T, "customResourceValueSlots", {});
const Qn = () => T.NO_OPTIONS_MESSAGE, lr = (e) => (T.NO_OPTIONS_MESSAGE = e, !0), cr = (e, t) => (T.customResourceOptionSlots[e] = t, !0), ar = (e, t) => (T.customResourceValueSlots[e] = t, !0);
class kt {
  constructor(t = []) {
    _e(this, "value");
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
function Xn(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const W = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Q = () => {
}, Zn = () => !1, es = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), F = Object.assign, ts = Object.prototype.hasOwnProperty, S = (e, t) => ts.call(e, t), _ = Array.isArray, ie = (e) => Ue(e) === "[object Map]", ns = (e) => Ue(e) === "[object Set]", b = (e) => typeof e == "function", A = (e) => typeof e == "string", ze = (e) => typeof e == "symbol", L = (e) => e !== null && typeof e == "object", ss = (e) => (L(e) || b(e)) && b(e.then) && b(e.catch), os = Object.prototype.toString, Ue = (e) => os.call(e), on = (e) => Ue(e).slice(8, -1), rs = (e) => Ue(e) === "[object Object]", dt = (e) => A(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, rn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ln = rn((e) => e.charAt(0).toUpperCase() + e.slice(1)), is = rn((e) => e ? `on${ln(e)}` : ""), ae = (e, t) => !Object.is(e, t), ls = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Kt;
const cn = () => Kt || (Kt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function pt(e) {
  if (_(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = A(o) ? fs(o) : pt(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (A(e) || L(e))
    return e;
}
const cs = /;(?![^(]*\))/g, as = /:([^]+)/, us = /\/\*[^]*?\*\//g;
function fs(e) {
  const t = {};
  return e.replace(us, "").split(cs).forEach((n) => {
    if (n) {
      const o = n.split(as);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function ht(e) {
  let t = "";
  if (A(e))
    t = e;
  else if (_(e))
    for (let n = 0; n < e.length; n++) {
      const o = ht(e[n]);
      o && (t += o + " ");
    }
  else if (L(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function zt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let ds;
function ps(e, t = ds) {
  t && t.active && t.effects.push(e);
}
let Oe;
class hs {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, ps(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0, this._queryings++, We();
      for (const t of this.deps)
        if (t.computed && (_s(t.computed), this._dirtyLevel >= 2))
          break;
      Be(), this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 3 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = X, n = Oe;
    try {
      return X = !0, Oe = this, this._runnings++, Ut(this), this.fn();
    } finally {
      Wt(this), this._runnings--, Oe = n, X = t;
    }
  }
  stop() {
    var t;
    this.active && (Ut(this), Wt(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function _s(e) {
  return e.value;
}
function Ut(e) {
  e._trackId++, e._depsLength = 0;
}
function Wt(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      an(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function an(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let X = !0, st = 0;
const un = [];
function We() {
  un.push(X), X = !1;
}
function Be() {
  const e = un.pop();
  X = e === void 0 ? !0 : e;
}
function _t() {
  st++;
}
function gt() {
  for (st--; !st && ot.length; )
    ot.shift()();
}
function gs(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && an(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, F({ effect: e }, n)));
  }
}
const ot = [];
function ms(e, t, n) {
  var o;
  _t();
  for (const s of e.keys())
    if (!(!s.allowRecurse && s._runnings) && s._dirtyLevel < t && (!s._runnings || t !== 2)) {
      const r = s._dirtyLevel;
      s._dirtyLevel = t, r === 0 && (!s._queryings || t !== 2) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, F({ effect: s }, n))), s.trigger(), s.scheduler && ot.push(s.scheduler));
    }
  gt();
}
const vs = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, rt = /* @__PURE__ */ new WeakMap(), Z = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), it = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function x(e, t, n) {
  if (X && Oe) {
    let o = rt.get(e);
    o || rt.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = vs(() => o.delete(n))), gs(
      Oe,
      s,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function G(e, t, n, o, s, r) {
  const i = rt.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && _(e)) {
    const c = Number(o);
    i.forEach((u, g) => {
      (g === "length" || !ze(g) && g >= c) && l.push(u);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        _(e) ? dt(n) && l.push(i.get("length")) : (l.push(i.get(Z)), ie(e) && l.push(i.get(it)));
        break;
      case "delete":
        _(e) || (l.push(i.get(Z)), ie(e) && l.push(i.get(it)));
        break;
      case "set":
        ie(e) && l.push(i.get(Z));
        break;
    }
  _t();
  for (const c of l)
    c && ms(
      c,
      3,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: s,
        oldTarget: r
      } : void 0
    );
  gt();
}
const Es = /* @__PURE__ */ Xn("__proto__,__v_isRef,__isVue"), fn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ze)
), Bt = /* @__PURE__ */ ws();
function ws() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = p(this);
      for (let r = 0, i = this.length; r < i; r++)
        x(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(p)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      We(), _t();
      const o = p(this)[t].apply(this, n);
      return gt(), Be(), o;
    };
  }), e;
}
function Os(e) {
  const t = p(this);
  return x(t, "has", e), t.hasOwnProperty(e);
}
class dn {
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
    if (n === "__v_raw")
      return o === (s ? r ? mn : gn : r ? $s : _n).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = _(t);
    if (!s) {
      if (i && S(Bt, n))
        return Reflect.get(Bt, n, o);
      if (n === "hasOwnProperty")
        return Os;
    }
    const l = Reflect.get(t, n, o);
    return (ze(n) ? fn.has(n) : Es(n)) || (s || x(t, "get", n), r) ? l : j(l) ? i && dt(n) ? l : l.value : L(l) ? s ? En(l) : vn(l) : l;
  }
}
class Ns extends dn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._shallow) {
      const c = ye(r);
      if (!lt(o) && !ye(o) && (r = p(r), o = p(o)), !_(t) && j(r) && !j(o))
        return c ? !1 : (r.value = o, !0);
    }
    const i = _(t) && dt(n) ? Number(n) < t.length : S(t, n), l = Reflect.set(t, n, o, s);
    return t === p(s) && (i ? ae(o, r) && G(t, "set", n, o, r) : G(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = S(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && G(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!ze(n) || !fn.has(n)) && x(t, "has", n), o;
  }
  ownKeys(t) {
    return x(
      t,
      "iterate",
      _(t) ? "length" : Z
    ), Reflect.ownKeys(t);
  }
}
class pn extends dn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && zt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && zt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Ss = /* @__PURE__ */ new Ns(), bs = /* @__PURE__ */ new pn(), ys = /* @__PURE__ */ new pn(!0), mt = (e) => e, qe = (e) => Reflect.getPrototypeOf(e);
function Me(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = p(e), r = p(t);
  n || (ae(t, r) && x(s, "get", t), x(s, "get", r));
  const { has: i } = qe(s), l = o ? mt : n ? Ot : wt;
  if (i.call(s, t))
    return l(e.get(t));
  if (i.call(s, r))
    return l(e.get(r));
  e !== s && e.get(t);
}
function Ie(e, t = !1) {
  const n = this.__v_raw, o = p(n), s = p(e);
  return t || (ae(e, s) && x(o, "has", e), x(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Te(e, t = !1) {
  return e = e.__v_raw, !t && x(p(e), "iterate", Z), Reflect.get(e, "size", e);
}
function qt(e) {
  e = p(e);
  const t = p(this);
  return qe(t).has.call(t, e) || (t.add(e), G(t, "add", e, e)), this;
}
function Gt(e, t) {
  t = p(t);
  const n = p(this), { has: o, get: s } = qe(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && hn(n, o, e) : (e = p(e), r = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), r ? ae(t, i) && G(n, "set", e, t, i) : G(n, "add", e, t), this;
}
function Jt(e) {
  const t = p(this), { has: n, get: o } = qe(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && hn(t, n, e) : (e = p(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && G(t, "delete", e, void 0, r), i;
}
function Yt() {
  const e = p(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ie(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && G(e, "clear", void 0, void 0, n), o;
}
function Pe(e, t) {
  return function(o, s) {
    const r = this, i = r.__v_raw, l = p(i), c = t ? mt : e ? Ot : wt;
    return !e && x(l, "iterate", Z), i.forEach((u, g) => o.call(s, c(u), c(g), r));
  };
}
function $e(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = p(s), i = ie(r), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, u = s[e](...o), g = n ? mt : t ? Ot : wt;
    return !t && x(
      r,
      "iterate",
      c ? it : Z
    ), {
      next() {
        const { value: d, done: y } = u.next();
        return y ? { value: d, done: y } : {
          value: l ? [g(d[0]), g(d[1])] : g(d),
          done: y
        };
      },
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
      console.warn(
        `${ln(e)} operation ${n}failed: target is readonly.`,
        p(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Vs() {
  const e = {
    get(r) {
      return Me(this, r);
    },
    get size() {
      return Te(this);
    },
    has: Ie,
    add: qt,
    set: Gt,
    delete: Jt,
    clear: Yt,
    forEach: Pe(!1, !1)
  }, t = {
    get(r) {
      return Me(this, r, !1, !0);
    },
    get size() {
      return Te(this);
    },
    has: Ie,
    add: qt,
    set: Gt,
    delete: Jt,
    clear: Yt,
    forEach: Pe(!1, !0)
  }, n = {
    get(r) {
      return Me(this, r, !0);
    },
    get size() {
      return Te(this, !0);
    },
    has(r) {
      return Ie.call(this, r, !0);
    },
    add: U("add"),
    set: U("set"),
    delete: U("delete"),
    clear: U("clear"),
    forEach: Pe(!0, !1)
  }, o = {
    get(r) {
      return Me(this, r, !0, !0);
    },
    get size() {
      return Te(this, !0);
    },
    has(r) {
      return Ie.call(this, r, !0);
    },
    add: U("add"),
    set: U("set"),
    delete: U("delete"),
    clear: U("clear"),
    forEach: Pe(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = $e(
      r,
      !1,
      !1
    ), n[r] = $e(
      r,
      !0,
      !1
    ), t[r] = $e(
      r,
      !1,
      !0
    ), o[r] = $e(
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
  Rs,
  Cs,
  xs,
  Ms
] = /* @__PURE__ */ Vs();
function vt(e, t) {
  const n = t ? e ? Ms : xs : e ? Cs : Rs;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    S(n, s) && s in o ? n : o,
    s,
    r
  );
}
const Is = {
  get: /* @__PURE__ */ vt(!1, !1)
}, Ts = {
  get: /* @__PURE__ */ vt(!0, !1)
}, Ps = {
  get: /* @__PURE__ */ vt(!0, !0)
};
function hn(e, t, n) {
  const o = p(n);
  if (o !== n && t.call(e, o)) {
    const s = on(e);
    console.warn(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const _n = /* @__PURE__ */ new WeakMap(), $s = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), mn = /* @__PURE__ */ new WeakMap();
function Ds(e) {
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
function As(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ds(on(e));
}
function vn(e) {
  return ye(e) ? e : Et(
    e,
    !1,
    Ss,
    Is,
    _n
  );
}
function En(e) {
  return Et(
    e,
    !0,
    bs,
    Ts,
    gn
  );
}
function De(e) {
  return Et(
    e,
    !0,
    ys,
    Ps,
    mn
  );
}
function Et(e, t, n, o, s) {
  if (!L(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = As(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return s.set(e, l), l;
}
function le(e) {
  return ye(e) ? le(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ye(e) {
  return !!(e && e.__v_isReadonly);
}
function lt(e) {
  return !!(e && e.__v_isShallow);
}
function ct(e) {
  return le(e) || ye(e);
}
function p(e) {
  const t = e && e.__v_raw;
  return t ? p(t) : e;
}
function Ls(e) {
  return ls(e, "__v_skip", !0), e;
}
const wt = (e) => L(e) ? vn(e) : e, Ot = (e) => L(e) ? En(e) : e;
function j(e) {
  return !!(e && e.__v_isRef === !0);
}
function js(e) {
  return j(e) ? e.value : e;
}
const Hs = {
  get: (e, t, n) => js(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return j(s) && !j(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Fs(e) {
  return le(e) ? e : new Proxy(e, Hs);
}
const ee = [];
function ks(e) {
  ee.push(e);
}
function Ks() {
  ee.pop();
}
function v(e, ...t) {
  We();
  const n = ee.length ? ee[ee.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = zs();
  if (o)
    te(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${$n(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Us(s)), console.warn(...r);
  }
  Be();
}
function zs() {
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
function Us(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Ws(n));
  }), t;
}
function Ws({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${$n(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Bs(e.props), r] : [s + r];
}
function Bs(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...wn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function wn(e, t, n) {
  return A(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : j(t) ? (t = wn(e, p(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : b(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = p(t), n ? t : [`${e}=`, t]);
}
const Nt = {
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
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function te(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (r) {
    St(r, t, n);
  }
  return s;
}
function Ne(e, t, n, o) {
  if (b(e)) {
    const r = te(e, t, n, o);
    return r && ss(r) && r.catch((i) => {
      St(i, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(Ne(e[r], t, n, o));
  return s;
}
function St(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? Nt[n] : `https://vuejs.org/errors/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let g = 0; g < u.length; g++)
          if (u[g](e, i, l) === !1)
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
        [e, i, l]
      );
      return;
    }
  }
  qs(e, n, s, o);
}
function qs(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Nt[t];
    if (n && ks(n), v(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Ks(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let He = !1, at = !1;
const D = [];
let q = 0;
const ce = [];
let H = null, B = 0;
const On = /* @__PURE__ */ Promise.resolve();
let bt = null;
const Gs = 100;
function Js(e) {
  const t = bt || On;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ys(e) {
  let t = q + 1, n = D.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = D[o], r = Ve(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function yt(e) {
  (!D.length || !D.includes(
    e,
    He && e.allowRecurse ? q + 1 : q
  )) && (e.id == null ? D.push(e) : D.splice(Ys(e.id), 0, e), Nn());
}
function Nn() {
  !He && !at && (at = !0, bt = On.then(bn));
}
function Sn(e) {
  _(e) ? ce.push(...e) : (!H || !H.includes(
    e,
    e.allowRecurse ? B + 1 : B
  )) && ce.push(e), Nn();
}
function Qs(e) {
  if (ce.length) {
    const t = [...new Set(ce)];
    if (ce.length = 0, H) {
      H.push(...t);
      return;
    }
    for (H = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), H.sort((n, o) => Ve(n) - Ve(o)), B = 0; B < H.length; B++)
      process.env.NODE_ENV !== "production" && yn(e, H[B]) || H[B]();
    H = null, B = 0;
  }
}
const Ve = (e) => e.id == null ? 1 / 0 : e.id, Xs = (e, t) => {
  const n = Ve(e) - Ve(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function bn(e) {
  at = !1, He = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), D.sort(Xs);
  const t = process.env.NODE_ENV !== "production" ? (n) => yn(e, n) : Q;
  try {
    for (q = 0; q < D.length; q++) {
      const n = D[q];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        te(n, null, 14);
      }
    }
  } finally {
    q = 0, D.length = 0, Qs(e), He = !1, bt = null, (D.length || ce.length) && bn(e);
  }
}
function yn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > Gs) {
      const o = t.ownerInstance, s = o && Pn(o.type);
      return St(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Ee = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (cn().__VUE_HMR_RUNTIME__ = {
  createRecord: tt(Zs),
  rerender: tt(eo),
  reload: tt(to)
});
const Fe = /* @__PURE__ */ new Map();
function Zs(e, t) {
  return Fe.has(e) ? !1 : (Fe.set(e, {
    initialDef: Se(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Se(e) {
  return Dn(e) ? e.__vccOpts : e;
}
function eo(e, t) {
  const n = Fe.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Se(o.type).render = t), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function to(e, t) {
  const n = Fe.get(e);
  if (!n)
    return;
  t = Se(t), Qt(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = Se(s.type);
    Ee.has(r) || (r !== n.initialDef && Qt(r, t), Ee.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Ee.add(r), s.ceReload(t.styles), Ee.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, yt(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Sn(() => {
    for (const s of o)
      Ee.delete(
        Se(s.type)
      );
  });
}
function Qt(e, t) {
  F(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function tt(e) {
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
let se, Ae = [];
function Vn(e, t) {
  var n, o;
  se = e, se ? (se.enabled = !0, Ae.forEach(({ event: s, args: r }) => se.emit(s, ...r)), Ae = []) : typeof window < "u" && window.HTMLElement && !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Vn(r, t);
  }), setTimeout(() => {
    se || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ae = []);
  }, 3e3)) : Ae = [];
}
let z = null, no = null;
const so = Symbol.for("v-ndc"), oo = (e) => e.__isSuspense;
function ro(e, t) {
  t && t.pendingBranch ? _(e) ? t.effects.push(...e) : t.effects.push(e) : Sn(e);
}
const io = Symbol.for("v-scx"), lo = () => {
  {
    const e = No(io);
    return e || process.env.NODE_ENV !== "production" && v(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Le = {};
function co(e, t, {
  immediate: n,
  deep: o,
  flush: s,
  once: r,
  onTrack: i,
  onTrigger: l
} = W) {
  if (t && r) {
    const f = t;
    t = (...fe) => {
      f(...fe), ue();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && v(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && v(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && v(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && v(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (f) => {
    v(
      "Invalid watch source: ",
      f,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = J, g = (f) => o === !0 ? f : oe(f, o === !1 ? 1 : void 0);
  let d, y = !1, P = !1;
  if (j(e) ? (d = () => e.value, y = lt(e)) : le(e) ? (d = () => g(e), y = !0) : _(e) ? (P = !0, y = e.some((f) => le(f) || lt(f)), d = () => e.map((f) => {
    if (j(f))
      return f.value;
    if (le(f))
      return g(f);
    if (b(f))
      return te(f, u, 2);
    process.env.NODE_ENV !== "production" && c(f);
  })) : b(e) ? t ? d = () => te(e, u, 2) : d = () => (E && E(), Ne(
    e,
    u,
    3,
    [Y]
  )) : (d = Q, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const f = d;
    d = () => oe(f());
  }
  let E, Y = (f) => {
    E = w.onStop = () => {
      te(f, u, 4), E = w.onStop = void 0;
    };
  }, k;
  if (Ct)
    if (Y = Q, t ? n && Ne(t, u, 3, [
      d(),
      P ? [] : void 0,
      Y
    ]) : d(), s === "sync") {
      const f = lo();
      k = f.__watcherHandles || (f.__watcherHandles = []);
    } else
      return Q;
  let V = P ? new Array(e.length).fill(Le) : Le;
  const $ = () => {
    if (!(!w.active || !w.dirty))
      if (t) {
        const f = w.run();
        (o || y || (P ? f.some((fe, Ge) => ae(fe, V[Ge])) : ae(f, V))) && (E && E(), Ne(t, u, 3, [
          f,
          V === Le ? void 0 : P && V[0] === Le ? [] : V,
          Y
        ]), V = f);
      } else
        w.run();
  };
  $.allowRecurse = !!t;
  let K;
  s === "sync" ? K = $ : s === "post" ? K = () => sn($, u && u.suspense) : ($.pre = !0, u && ($.id = u.uid), K = () => yt($));
  const w = new hs(d, Q, K), ue = () => {
    w.stop();
  };
  return process.env.NODE_ENV !== "production" && (w.onTrack = i, w.onTrigger = l), t ? n ? $() : V = w.run() : s === "post" ? sn(
    w.run.bind(w),
    u && u.suspense
  ) : w.run(), k && k.push(ue), ue;
}
function ao(e, t, n) {
  const o = this.proxy, s = A(e) ? e.includes(".") ? uo(o, e) : () => o[e] : e.bind(o, o);
  let r;
  b(t) ? r = t : (r = t.handler, n = t);
  const i = J;
  ft(this);
  const l = co(s, r.bind(o), n);
  return i ? ft(i) : Tn(), l;
}
function uo(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
function oe(e, t, n = 0, o) {
  if (!L(e) || e.__v_skip)
    return e;
  if (t && t > 0) {
    if (n >= t)
      return e;
    n++;
  }
  if (o = o || /* @__PURE__ */ new Set(), o.has(e))
    return e;
  if (o.add(e), j(e))
    oe(e.value, t, n, o);
  else if (_(e))
    for (let s = 0; s < e.length; s++)
      oe(e[s], t, n, o);
  else if (ns(e) || ie(e))
    e.forEach((s) => {
      oe(s, t, n, o);
    });
  else if (rs(e))
    for (const s in e)
      oe(e[s], t, n, o);
  return e;
}
function fo(e, t, n = J, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      We(), ft(n);
      const l = Ne(t, n, e, i);
      return Tn(), Be(), l;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = is(Nt[e].replace(/ hook$/, ""));
    v(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const po = (e) => (t, n = J) => (!Ct || e === "sp") && fo(e, (...o) => t(...o), n), ho = po("bum"), ut = (e) => e ? Po(e) ? $o(e) || e.proxy : ut(e.parent) : null, be = /* @__PURE__ */ F(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? De(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? De(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? De(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? De(e.refs) : e.refs,
  $parent: (e) => ut(e.parent),
  $root: (e) => ut(e.root),
  $emit: (e) => e.emit,
  $options: (e) => mo(e),
  $forceUpdate: (e) => e.f || (e.f = () => {
    e.effect.dirty = !0, yt(e.update);
  }),
  $nextTick: (e) => e.n || (e.n = Js.bind(e.proxy)),
  $watch: (e) => ao.bind(e)
}), _o = (e) => e === "_" || e === "$", nt = (e, t) => e !== W && !e.__isScriptSetup && S(e, t), go = {
  get({ _: e }, t) {
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: l, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const P = i[t];
      if (P !== void 0)
        switch (P) {
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
        if (nt(o, t))
          return i[t] = 1, o[t];
        if (s !== W && S(s, t))
          return i[t] = 2, s[t];
        if ((u = e.propsOptions[0]) && S(u, t))
          return i[t] = 3, r[t];
        if (n !== W && S(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const g = be[t];
    let d, y;
    if (g)
      return t === "$attrs" ? (x(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && x(e, "get", t), g(e);
    if ((d = l.__cssModules) && (d = d[t]))
      return d;
    if (n !== W && S(n, t))
      return i[t] = 4, n[t];
    if (y = c.config.globalProperties, S(y, t))
      return y[t];
    process.env.NODE_ENV !== "production" && z && (!A(t) || t.indexOf("__v") !== 0) && (s !== W && _o(t[0]) && S(s, t) ? v(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === z && v(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return nt(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && S(s, t) ? (v(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== W && S(o, t) ? (o[t] = n, !0) : S(e.props, t) ? (process.env.NODE_ENV !== "production" && v(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && v(
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
    return !!n[i] || e !== W && S(e, i) || nt(t, i) || (l = r[0]) && S(l, i) || S(o, i) || S(be, i) || S(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : S(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (go.ownKeys = (e) => (v(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Xt(e) {
  return _(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function mo(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(
    (u) => ke(c, u, i, !0)
  ), ke(c, t, i)), L(t) && r.set(t, c), c;
}
function ke(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && ke(e, r, n, !0), s && s.forEach(
    (i) => ke(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && v(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = vo[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const vo = {
  data: Zt,
  props: tn,
  emits: tn,
  methods: we,
  computed: we,
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
  components: we,
  directives: we,
  watch: wo,
  provide: Zt,
  inject: Eo
};
function Zt(e, t) {
  return t ? e ? function() {
    return F(
      b(e) ? e.call(this, this) : e,
      b(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Eo(e, t) {
  return we(en(e), en(t));
}
function en(e) {
  if (_(e)) {
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
function we(e, t) {
  return e ? F(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function tn(e, t) {
  return e ? _(e) && _(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : F(
    /* @__PURE__ */ Object.create(null),
    Xt(e),
    Xt(t != null ? t : {})
  ) : t;
}
function wo(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = F(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = R(e[o], t[o]);
  return n;
}
function Oo() {
  return {
    app: null,
    config: {
      isNativeTag: Zn,
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
let nn = null;
function No(e, t, n = !1) {
  const o = J || z;
  if (o || nn) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : nn._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && b(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && v(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && v("inject() can only be used inside setup() or functional components.");
}
const sn = ro, So = (e) => e.__isTeleport, Rn = Symbol.for("v-fgt"), bo = Symbol.for("v-txt"), yo = Symbol.for("v-cmt");
let re = null;
function Vo(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Ro = (...e) => Mn(
  ...e
), Cn = "__vInternal", xn = ({ key: e }) => e != null ? e : null, je = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? A(e) || j(e) || b(e) ? { i: z, r: e, k: t, f: !!n } : e : null);
function Co(e, t = null, n = null, o = 0, s = null, r = e === Rn ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && xn(t),
    ref: t && je(t),
    scopeId: no,
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
  return l ? (Vt(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= A(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && v("VNode created with invalid key (NaN). VNode type:", c.type), !i && re && (c.patchFlag > 0 || r & 6) && c.patchFlag !== 32 && re.push(c), c;
}
const xo = process.env.NODE_ENV !== "production" ? Ro : Mn;
function Mn(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === so) && (process.env.NODE_ENV !== "production" && !e && v(`Invalid vnode type when creating vnode: ${e}.`), e = yo), Vo(e)) {
    const l = Ke(
      e,
      t,
      !0
    );
    return n && Vt(l, n), !r && re && (l.shapeFlag & 6 ? re[re.indexOf(e)] = l : re.push(l)), l.patchFlag |= -2, l;
  }
  if (Dn(e) && (e = e.__vccOpts), t) {
    t = Mo(t);
    let { class: l, style: c } = t;
    l && !A(l) && (t.class = ht(l)), L(c) && (ct(c) && !_(c) && (c = F({}, c)), t.style = pt(c));
  }
  const i = A(e) ? 1 : oo(e) ? 128 : So(e) ? 64 : L(e) ? 4 : b(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && ct(e) && (e = p(e), v(
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
function Mo(e) {
  return e ? ct(e) || Cn in e ? F({}, e) : e : null;
}
function Ke(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: i } = e, l = t ? To(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && xn(l),
    ref: t && t.ref ? n && s ? _(s) ? s.concat(je(t)) : [s, je(t)] : je(t) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && _(i) ? i.map(In) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Rn ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ke(e.ssContent),
    ssFallback: e.ssFallback && Ke(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function In(e) {
  const t = Ke(e);
  return _(e.children) && (t.children = e.children.map(In)), t;
}
function Io(e = " ", t = 0) {
  return xo(bo, null, e, t);
}
function Vt(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (_(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Vt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Cn in t) ? t._ctx = z : s === 3 && z && (z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    b(t) ? (t = { default: t, _ctx: z }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Io(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function To(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = ht([t.class, o.class]));
      else if (s === "style")
        t.style = pt([t.style, o.style]);
      else if (es(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(_(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
Oo();
let J = null, Rt;
{
  const e = cn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  Rt = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => J = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => Ct = n
  );
}
const ft = (e) => {
  Rt(e), e.scope.on();
}, Tn = () => {
  J && J.scope.off(), Rt(null);
};
function Po(e) {
  return e.vnode.shapeFlag & 4;
}
let Ct = !1;
function $o(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Fs(Ls(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in be)
          return be[n](e);
      },
      has(t, n) {
        return n in t || n in be;
      }
    }));
}
const Do = /(?:^|[-_])(\w)/g, Ao = (e) => e.replace(Do, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Pn(e, t = !0) {
  return b(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function $n(e, t, n = !1) {
  let o = Pn(t);
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
function Dn(e) {
  return b(e) && "__vccOpts" in e;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const Lo = ["id", "multiple"], jo = {
  key: 1,
  class: "lkt-field__select"
}, Ho = ["innerHTML", "title"], Fo = {
  key: 2,
  class: "lkt-field__select-dropdown"
}, ko = { class: "lkt-field__select-search-container" }, Ko = {
  key: 1,
  class: "lkt-field__select-options"
}, zo = ["onClick"], Uo = {
  key: 0,
  class: "lkt-field__select-option"
}, Wo = {
  key: 2,
  class: "lkt-field-select__read"
}, Bo = ["innerHTML", "title"], qo = {
  key: 3,
  class: "lkt-field__state"
}, Go = ["title"], Jo = {
  key: 3,
  class: "lkt-field-select__read-multiple"
}, Yo = ["innerHTML", "title"], Qo = {
  key: 0,
  class: "lkt-field__state"
}, Xo = ["title"], Zo = ["innerHTML"], er = { name: "LktFieldSelect", inheritAttrs: !1 }, tr = /* @__PURE__ */ qn({
  ...er,
  props: {
    modelValue: { type: [String, Number, Array], default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    palette: { type: String, default: "" },
    name: { type: String, default: Ft(16) },
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
    noOptionsMessage: { type: String, default: Qn() },
    resource: { type: String, default: "" },
    resourceData: { type: [Object], default: () => ({}) },
    searchStringResourceParam: { type: String, default: "query" },
    searchPlaceholder: { type: String, default: "" },
    useResourceSlot: { type: String, default: "" }
  },
  emits: ["update:modelValue", "click-ui"],
  setup(e, { expose: t, emit: n }) {
    const o = n, s = e, r = Gn(), i = C(null), l = C(null), c = C(null), u = C(!s.readMode), g = Ft(16), d = C(new kt(s.options)), y = C(!1), P = C(s.modelValue), E = C(s.modelValue), Y = C(!1), k = C(!1), V = C(!1), $ = C(d.value.all()), K = C(d.value.all()), w = C("");
    s.closeOnSelect === null ? y.value = s.multiple === !0 : y.value = s.closeOnSelect;
    const ue = M(() => s.resource !== ""), f = M(() => typeof s.valid == "function" ? s.valid() : s.valid), fe = M(() => E.value !== P.value), Ge = M(() => {
      const a = ["lkt-field", "lkt-field-select"];
      return s.palette && a.push(`lkt-field--${s.palette}`), fe.value && a.push("is-changed"), s.multiple && a.push("is-multiple"), s.disabled && a.push("is-disabled"), V.value && a.push("has-focus"), a.push(f.value ? "is-valid" : "is-error"), a.push(s.modelValue ? "is-filled" : "is-empty"), a.join(" ");
    }), xt = M(() => {
      let a = {};
      return K.value.forEach((O) => {
        O.value == E.value && (a = O);
      }), a;
    }), Je = M(() => {
      let a = "";
      return K.value.forEach((O) => {
        O.value == E.value && (a = O.label);
      }), a;
    }), Mt = M(() => {
      let a = [];
      return s.multiple && K.value.forEach((O) => {
        E.value.forEach((he) => {
          he == O.value && a.push(O);
        });
      }), a;
    }), de = () => {
      K.value = d.value.all(), $.value = d.value.filter(w.value), k.value = !1;
    }, It = () => {
      w.value = "", de();
    }, Tt = async () => {
      if (k.value = !1, ue.value) {
        k.value = !0;
        const a = JSON.parse(JSON.stringify(s.resourceData));
        s.searchStringResourceParam && (a[s.searchStringResourceParam] = w.value);
        const O = await Yn(s.resource, a);
        d.value.receiveOptions(O.data), de();
      } else
        de();
    }, An = () => {
      E.value = P.value;
    }, Ln = () => s.modelValue, pe = (a) => {
      It(), Ye(a), V.value = !V.value, V.value && Qe(() => {
        Tt(), i.value.focus(), Qe(() => {
          i.value.focus();
        });
      });
    };
    ge(() => s.readMode, (a) => u.value = !a), ge(() => s.modelValue, (a) => {
      E.value = a;
    }), ge(E, (a) => {
      o("update:modelValue", a), Y.value = !0, Qe(() => Y.value = !1);
    }), ge(w, de), ge(() => s.options, (a) => {
      d.value = new kt(a);
    });
    const Pt = (a) => {
      if (s.multiple) {
        let O = E.value.findIndex((he) => he == a.value);
        return typeof O > "u" && (O = -1), O;
      }
      return -1;
    }, jn = (a) => {
      if (s.multiple) {
        let O = Pt(a);
        O === -1 ? E.value.push(a.value) : E.value.splice(O, 1);
      } else
        E.value = a.value, V.value = !1;
    }, Hn = (a) => s.multiple ? Pt(a) !== -1 : a.value == E.value, Ye = (a) => {
      if (!c.value.contains(a.target)) {
        It(), V.value = !1;
        return;
      }
    }, $t = (a) => {
      u.value = !u.value, u.value && focus();
    };
    window.addEventListener("click", Ye), de(), ho(() => {
      window.removeEventListener("click", Ye);
    }), t({
      reset: An,
      value: Ln
    });
    const ne = M(() => s.useResourceSlot ? s.useResourceSlot : s.resource), Dt = M(() => T.NO_OPTIONS_MESSAGE), Fn = M(() => ne.value !== "" && typeof T.customResourceOptionSlots[ne.value] < "u"), kn = M(() => T.customResourceOptionSlots[ne.value]), Kn = M(() => ne.value !== "" && typeof T.customResourceValueSlots[ne.value] < "u"), zn = M(() => T.customResourceValueSlots[ne.value]);
    return (a, O) => {
      const he = At("lkt-field-text"), Un = At("lkt-loader");
      return h(), m("div", {
        class: Lt(Ge.value),
        "data-show-ui": !1,
        ref: (N) => c.value = N
      }, [
        Re(a.$slots, "prefix"),
        u.value ? (h(), m("select", {
          key: 0,
          ref: (N) => l.value = N,
          id: me(g),
          onFocus: Ce(pe, ["stop", "prevent"]),
          onBlur: Ce(pe, ["stop", "prevent"]),
          multiple: e.multiple,
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, Lo)) : I("", !0),
        u.value ? (h(), m("div", jo, [
          e.multiple ? (h(), m("div", {
            key: 1,
            class: "lkt-field__select-value-multiple",
            onClick: pe
          }, [
            (h(!0), m(ve, null, Ze(Mt.value, (N) => (h(), m("div", {
              class: "lkt-field-select-value-datum",
              innerHTML: N.label,
              title: N.label
            }, null, 8, Ho))), 256))
          ])) : (h(), m("div", {
            key: 0,
            class: "lkt-field__select-value",
            onClick: pe
          }, Xe(Je.value), 1)),
          V.value ? (h(), m("div", Fo, [
            xe("div", ko, [
              Jn(he, {
                ref: (N) => i.value = N,
                modelValue: w.value,
                "onUpdate:modelValue": O[0] || (O[0] = (N) => w.value = N),
                placeholder: e.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search",
                onKeyup: Tt
              }, null, 8, ["modelValue", "placeholder"])
            ]),
            k.value ? (h(), et(Un, { key: 0 })) : I("", !0),
            !e.readonly && !k.value ? (h(), m("ul", Ko, [
              (h(!0), m(ve, null, Ze($.value, (N) => (h(), m("li", {
                class: Lt(["lkt-field__select-option", { "is-active": e.multiple ? Hn(N) : N.value == E.value }]),
                onClick: Ce((nr) => jn(N), ["prevent", "stop"])
              }, [
                me(r).option ? Re(a.$slots, "option", {
                  key: 0,
                  option: N
                }) : I("", !0),
                Fn.value ? (h(), et(jt(kn.value), {
                  key: 1,
                  option: N
                }, null, 8, ["option"])) : (h(), m(ve, { key: 2 }, [
                  Ht(Xe(N.label), 1)
                ], 64))
              ], 10, zo))), 256)),
              $.value.length === 0 && (me(r)["no-results"] || Dt.value) ? (h(), m("li", Uo, [
                me(r)["no-results"] ? Re(a.$slots, "no-results", { key: 0 }) : (h(), m(ve, { key: 1 }, [
                  Ht(Xe(Dt.value), 1)
                ], 64))
              ])) : I("", !0)
            ])) : I("", !0)
          ])) : I("", !0)
        ])) : I("", !0),
        !u.value && !e.multiple ? (h(), m("div", Wo, [
          me(r).value ? Re(a.$slots, "value", {
            key: 0,
            option: xt.value
          }) : I("", !0),
          Kn.value ? (h(), et(jt(zn.value), {
            key: 1,
            option: xt.value
          }, null, 8, ["option"])) : (h(), m("div", {
            key: 2,
            class: "lkt-field-select__read-value",
            innerHTML: Je.value,
            title: Je.value
          }, null, 8, Bo)),
          e.allowReadModeSwitch ? (h(), m("div", qo, [
            xe("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: $t
            }, null, 8, Go)
          ])) : I("", !0)
        ])) : I("", !0),
        !u.value && e.multiple ? (h(), m("div", Jo, [
          (h(!0), m(ve, null, Ze(Mt.value, (N) => (h(), m("div", {
            class: "lkt-field-select__read-value",
            innerHTML: N.label,
            title: N.label
          }, null, 8, Yo))), 256)),
          e.allowReadModeSwitch ? (h(), m("div", Qo, [
            xe("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: $t
            }, null, 8, Xo)
          ])) : I("", !0)
        ])) : I("", !0),
        xe("label", {
          innerHTML: e.label,
          onClick: Ce(pe, ["stop", "prevent"])
        }, null, 8, Zo)
      ], 2);
    };
  }
}), ur = {
  install: (e) => {
    e.component("lkt-field-select", tr);
  }
};
export {
  ur as default,
  lr as setNoOptionsMessage,
  cr as setResourceOptionSlot,
  ar as setResourceValueSlot
};
