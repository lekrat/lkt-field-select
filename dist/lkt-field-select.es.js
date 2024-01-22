var qn = Object.defineProperty;
var Gn = (e, t, n) => t in e ? qn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ve = (e, t, n) => (Gn(e, typeof t != "symbol" ? t + "" : t, n), n);
import { defineComponent as Jn, useSlots as Yn, ref as x, computed as R, watch as Ee, nextTick as ot, resolveComponent as Kt, openBlock as f, createElementBlock as _, normalizeClass as Me, renderSlot as X, unref as U, withModifiers as Te, createCommentVNode as M, createBlock as re, resolveDynamicComponent as we, createElementVNode as Ie, Fragment as Oe, renderList as rt, withDirectives as Qn, createVNode as Xn, vShow as Zn, createTextVNode as zt, toDisplayString as it } from "vue";
import { generateRandomString as Ut } from "lkt-string-tools";
import { httpCall as es } from "lkt-http-client";
import ts from "lkt-loader";
import ns from "lkt-field-text";
class T {
}
ve(T, "NO_OPTIONS_MESSAGE", ""), ve(T, "customResourceOptionSlots", {}), ve(T, "customResourceValueSlots", {});
const ss = () => T.NO_OPTIONS_MESSAGE, Er = (e) => (T.NO_OPTIONS_MESSAGE = e, !0), wr = (e, t) => (T.customResourceOptionSlots[e] = t, !0), Or = (e, t) => (T.customResourceValueSlots[e] = t, !0);
class Bt {
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
function os(e, t) {
  const n = new Set(e.split(","));
  return t ? (o) => n.has(o.toLowerCase()) : (o) => n.has(o);
}
const W = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {};
process.env.NODE_ENV !== "production" && Object.freeze([]);
const Z = () => {
}, rs = () => !1, is = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), H = Object.assign, ls = Object.prototype.hasOwnProperty, N = (e, t) => ls.call(e, t), g = Array.isArray, ae = (e) => Ge(e) === "[object Map]", cs = (e) => Ge(e) === "[object Set]", b = (e) => typeof e == "function", A = (e) => typeof e == "string", qe = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", as = (e) => (k(e) || b(e)) && b(e.then) && b(e.catch), us = Object.prototype.toString, Ge = (e) => us.call(e), an = (e) => Ge(e).slice(8, -1), fs = (e) => Ge(e) === "[object Object]", vt = (e) => A(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, un = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, fn = un((e) => e.charAt(0).toUpperCase() + e.slice(1)), ds = un((e) => e ? `on${fn(e)}` : ""), de = (e, t) => !Object.is(e, t), ps = (e, t, n) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
};
let Wt;
const dn = () => Wt || (Wt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Et(e) {
  if (g(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = A(o) ? gs(o) : Et(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (A(e) || k(e))
    return e;
}
const hs = /;(?![^(]*\))/g, _s = /:([^]+)/, ms = /\/\*[^]*?\*\//g;
function gs(e) {
  const t = {};
  return e.replace(ms, "").split(hs).forEach((n) => {
    if (n) {
      const o = n.split(_s);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function wt(e) {
  let t = "";
  if (A(e))
    t = e;
  else if (g(e))
    for (let n = 0; n < e.length; n++) {
      const o = wt(e[n]);
      o && (t += o + " ");
    }
  else if (k(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
function qt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let vs;
function Es(e, t = vs) {
  t && t.active && t.effects.push(e);
}
let be;
class ws {
  constructor(t, n, o, s) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 3, this._trackId = 0, this._runnings = 0, this._queryings = 0, this._depsLength = 0, Es(this, s);
  }
  get dirty() {
    if (this._dirtyLevel === 1) {
      this._dirtyLevel = 0, this._queryings++, Je();
      for (const t of this.deps)
        if (t.computed && (Os(t.computed), this._dirtyLevel >= 2))
          break;
      Ye(), this._queryings--;
    }
    return this._dirtyLevel >= 2;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 3 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = ee, n = be;
    try {
      return ee = !0, be = this, this._runnings++, Gt(this), this.fn();
    } finally {
      Jt(this), this._runnings--, be = n, ee = t;
    }
  }
  stop() {
    var t;
    this.active && (Gt(this), Jt(this), (t = this.onStop) == null || t.call(this), this.active = !1);
  }
}
function Os(e) {
  return e.value;
}
function Gt(e) {
  e._trackId++, e._depsLength = 0;
}
function Jt(e) {
  if (e.deps && e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      pn(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function pn(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let ee = !0, at = 0;
const hn = [];
function Je() {
  hn.push(ee), ee = !1;
}
function Ye() {
  const e = hn.pop();
  ee = e === void 0 ? !0 : e;
}
function Ot() {
  at++;
}
function St() {
  for (at--; !at && ut.length; )
    ut.shift()();
}
function Ss(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const s = e.deps[e._depsLength];
    s !== t ? (s && pn(s, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, H({ effect: e }, n)));
  }
}
const ut = [];
function Ns(e, t, n) {
  var o;
  Ot();
  for (const s of e.keys())
    if (!(!s.allowRecurse && s._runnings) && s._dirtyLevel < t && (!s._runnings || t !== 2)) {
      const r = s._dirtyLevel;
      s._dirtyLevel = t, r === 0 && (!s._queryings || t !== 2) && (process.env.NODE_ENV !== "production" && ((o = s.onTrigger) == null || o.call(s, H({ effect: s }, n))), s.trigger(), s.scheduler && ut.push(s.scheduler));
    }
  St();
}
const bs = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, ft = /* @__PURE__ */ new WeakMap(), te = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), dt = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function D(e, t, n) {
  if (ee && be) {
    let o = ft.get(e);
    o || ft.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || o.set(n, s = bs(() => o.delete(n))), Ss(
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
  else if (n === "length" && g(e)) {
    const a = Number(o);
    i.forEach((u, v) => {
      (v === "length" || !qe(v) && v >= a) && l.push(u);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        g(e) ? vt(n) && l.push(i.get("length")) : (l.push(i.get(te)), ae(e) && l.push(i.get(dt)));
        break;
      case "delete":
        g(e) || (l.push(i.get(te)), ae(e) && l.push(i.get(dt)));
        break;
      case "set":
        ae(e) && l.push(i.get(te));
        break;
    }
  Ot();
  for (const a of l)
    a && Ns(
      a,
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
  St();
}
const ys = /* @__PURE__ */ os("__proto__,__v_isRef,__isVue"), _n = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(qe)
), Yt = /* @__PURE__ */ Vs();
function Vs() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = h(this);
      for (let r = 0, i = this.length; r < i; r++)
        D(o, "get", r + "");
      const s = o[t](...n);
      return s === -1 || s === !1 ? o[t](...n.map(h)) : s;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Je(), Ot();
      const o = h(this)[t].apply(this, n);
      return St(), Ye(), o;
    };
  }), e;
}
function Rs(e) {
  const t = h(this);
  return D(t, "has", e), t.hasOwnProperty(e);
}
class mn {
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
      return o === (s ? r ? On : wn : r ? Hs : En).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = g(t);
    if (!s) {
      if (i && N(Yt, n))
        return Reflect.get(Yt, n, o);
      if (n === "hasOwnProperty")
        return Rs;
    }
    const l = Reflect.get(t, n, o);
    return (qe(n) ? _n.has(n) : ys(n)) || (s || D(t, "get", n), r) ? l : L(l) ? i && vt(n) ? l : l.value : k(l) ? s ? Nn(l) : Sn(l) : l;
  }
}
class Cs extends mn {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._shallow) {
      const a = Ce(r);
      if (!pt(o) && !Ce(o) && (r = h(r), o = h(o)), !g(t) && L(r) && !L(o))
        return a ? !1 : (r.value = o, !0);
    }
    const i = g(t) && vt(n) ? Number(n) < t.length : N(t, n), l = Reflect.set(t, n, o, s);
    return t === h(s) && (i ? de(o, r) && J(t, "set", n, o, r) : J(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = N(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && J(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!qe(n) || !_n.has(n)) && D(t, "has", n), o;
  }
  ownKeys(t) {
    return D(
      t,
      "iterate",
      g(t) ? "length" : te
    ), Reflect.ownKeys(t);
  }
}
class gn extends mn {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && qt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && qt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const xs = /* @__PURE__ */ new Cs(), Ds = /* @__PURE__ */ new gn(), Ms = /* @__PURE__ */ new gn(!0), Nt = (e) => e, Qe = (e) => Reflect.getPrototypeOf(e);
function $e(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const s = h(e), r = h(t);
  n || (de(t, r) && D(s, "get", t), D(s, "get", r));
  const { has: i } = Qe(s), l = o ? Nt : n ? Rt : Vt;
  if (i.call(s, t))
    return l(e.get(t));
  if (i.call(s, r))
    return l(e.get(r));
  e !== s && e.get(t);
}
function Pe(e, t = !1) {
  const n = this.__v_raw, o = h(n), s = h(e);
  return t || (de(e, s) && D(o, "has", e), D(o, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
}
function Ae(e, t = !1) {
  return e = e.__v_raw, !t && D(h(e), "iterate", te), Reflect.get(e, "size", e);
}
function Qt(e) {
  e = h(e);
  const t = h(this);
  return Qe(t).has.call(t, e) || (t.add(e), J(t, "add", e, e)), this;
}
function Xt(e, t) {
  t = h(t);
  const n = h(this), { has: o, get: s } = Qe(n);
  let r = o.call(n, e);
  r ? process.env.NODE_ENV !== "production" && vn(n, o, e) : (e = h(e), r = o.call(n, e));
  const i = s.call(n, e);
  return n.set(e, t), r ? de(t, i) && J(n, "set", e, t, i) : J(n, "add", e, t), this;
}
function Zt(e) {
  const t = h(this), { has: n, get: o } = Qe(t);
  let s = n.call(t, e);
  s ? process.env.NODE_ENV !== "production" && vn(t, n, e) : (e = h(e), s = n.call(t, e));
  const r = o ? o.call(t, e) : void 0, i = t.delete(e);
  return s && J(t, "delete", e, void 0, r), i;
}
function en() {
  const e = h(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? ae(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && J(e, "clear", void 0, void 0, n), o;
}
function ke(e, t) {
  return function(o, s) {
    const r = this, i = r.__v_raw, l = h(i), a = t ? Nt : e ? Rt : Vt;
    return !e && D(l, "iterate", te), i.forEach((u, v) => o.call(s, a(u), a(v), r));
  };
}
function Le(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = h(s), i = ae(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, u = s[e](...o), v = n ? Nt : t ? Rt : Vt;
    return !t && D(
      r,
      "iterate",
      a ? dt : te
    ), {
      next() {
        const { value: p, done: y } = u.next();
        return y ? { value: p, done: y } : {
          value: l ? [v(p[0]), v(p[1])] : v(p),
          done: y
        };
      },
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
      console.warn(
        `${fn(e)} operation ${n}failed: target is readonly.`,
        h(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Ts() {
  const e = {
    get(r) {
      return $e(this, r);
    },
    get size() {
      return Ae(this);
    },
    has: Pe,
    add: Qt,
    set: Xt,
    delete: Zt,
    clear: en,
    forEach: ke(!1, !1)
  }, t = {
    get(r) {
      return $e(this, r, !1, !0);
    },
    get size() {
      return Ae(this);
    },
    has: Pe,
    add: Qt,
    set: Xt,
    delete: Zt,
    clear: en,
    forEach: ke(!1, !0)
  }, n = {
    get(r) {
      return $e(this, r, !0);
    },
    get size() {
      return Ae(this, !0);
    },
    has(r) {
      return Pe.call(this, r, !0);
    },
    add: B("add"),
    set: B("set"),
    delete: B("delete"),
    clear: B("clear"),
    forEach: ke(!0, !1)
  }, o = {
    get(r) {
      return $e(this, r, !0, !0);
    },
    get size() {
      return Ae(this, !0);
    },
    has(r) {
      return Pe.call(this, r, !0);
    },
    add: B("add"),
    set: B("set"),
    delete: B("delete"),
    clear: B("clear"),
    forEach: ke(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
    e[r] = Le(
      r,
      !1,
      !1
    ), n[r] = Le(
      r,
      !0,
      !1
    ), t[r] = Le(
      r,
      !1,
      !0
    ), o[r] = Le(
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
  Is,
  $s,
  Ps,
  As
] = /* @__PURE__ */ Ts();
function bt(e, t) {
  const n = t ? e ? As : Ps : e ? $s : Is;
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    N(n, s) && s in o ? n : o,
    s,
    r
  );
}
const ks = {
  get: /* @__PURE__ */ bt(!1, !1)
}, Ls = {
  get: /* @__PURE__ */ bt(!0, !1)
}, js = {
  get: /* @__PURE__ */ bt(!0, !0)
};
function vn(e, t, n) {
  const o = h(n);
  if (o !== n && t.call(e, o)) {
    const s = an(e);
    console.warn(
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
function Sn(e) {
  return Ce(e) ? e : yt(
    e,
    !1,
    xs,
    ks,
    En
  );
}
function Nn(e) {
  return yt(
    e,
    !0,
    Ds,
    Ls,
    wn
  );
}
function je(e) {
  return yt(
    e,
    !0,
    Ms,
    js,
    On
  );
}
function yt(e, t, n, o, s) {
  if (!k(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = s.get(e);
  if (r)
    return r;
  const i = Ks(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return s.set(e, l), l;
}
function ue(e) {
  return Ce(e) ? ue(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ce(e) {
  return !!(e && e.__v_isReadonly);
}
function pt(e) {
  return !!(e && e.__v_isShallow);
}
function ht(e) {
  return ue(e) || Ce(e);
}
function h(e) {
  const t = e && e.__v_raw;
  return t ? h(t) : e;
}
function zs(e) {
  return ps(e, "__v_skip", !0), e;
}
const Vt = (e) => k(e) ? Sn(e) : e, Rt = (e) => k(e) ? Nn(e) : e;
function L(e) {
  return !!(e && e.__v_isRef === !0);
}
function Us(e) {
  return L(e) ? e.value : e;
}
const Bs = {
  get: (e, t, n) => Us(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return L(s) && !L(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Ws(e) {
  return ue(e) ? e : new Proxy(e, Bs);
}
const ne = [];
function qs(e) {
  ne.push(e);
}
function Gs() {
  ne.pop();
}
function E(e, ...t) {
  Je();
  const n = ne.length ? ne[ne.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Js();
  if (o)
    se(
      o,
      n,
      11,
      [
        e + t.join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Ln(n, r.type)}>`
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
  Ye();
}
function Js() {
  let e = ne[ne.length - 1];
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
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Ln(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Xs(e.props), r] : [s + r];
}
function Xs(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...bn(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function bn(e, t, n) {
  return A(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : L(t) ? (t = bn(e, h(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : b(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = h(t), n ? t : [`${e}=`, t]);
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
function se(e, t, n, o) {
  let s;
  try {
    s = o ? e(...o) : e();
  } catch (r) {
    xt(r, t, n);
  }
  return s;
}
function ye(e, t, n, o) {
  if (b(e)) {
    const r = se(e, t, n, o);
    return r && as(r) && r.catch((i) => {
      xt(i, t, n);
    }), r;
  }
  const s = [];
  for (let r = 0; r < e.length; r++)
    s.push(ye(e[r], t, n, o));
  return s;
}
function xt(e, t, n, o = !0) {
  const s = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? Ct[n] : `https://vuejs.org/errors/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let v = 0; v < u.length; v++)
          if (u[v](e, i, l) === !1)
            return;
      }
      r = r.parent;
    }
    const a = t.appContext.config.errorHandler;
    if (a) {
      se(
        a,
        null,
        10,
        [e, i, l]
      );
      return;
    }
  }
  Zs(e, n, s, o);
}
function Zs(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const s = Ct[t];
    if (n && qs(n), E(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Gs(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let ze = !1, _t = !1;
const P = [];
let G = 0;
const fe = [];
let j = null, q = 0;
const yn = /* @__PURE__ */ Promise.resolve();
let Dt = null;
const eo = 100;
function to(e) {
  const t = Dt || yn;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function no(e) {
  let t = G + 1, n = P.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = P[o], r = xe(s);
    r < e || r === e && s.pre ? t = o + 1 : n = o;
  }
  return t;
}
function Mt(e) {
  (!P.length || !P.includes(
    e,
    ze && e.allowRecurse ? G + 1 : G
  )) && (e.id == null ? P.push(e) : P.splice(no(e.id), 0, e), Vn());
}
function Vn() {
  !ze && !_t && (_t = !0, Dt = yn.then(Cn));
}
function Rn(e) {
  g(e) ? fe.push(...e) : (!j || !j.includes(
    e,
    e.allowRecurse ? q + 1 : q
  )) && fe.push(e), Vn();
}
function so(e) {
  if (fe.length) {
    const t = [...new Set(fe)];
    if (fe.length = 0, j) {
      j.push(...t);
      return;
    }
    for (j = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), j.sort((n, o) => xe(n) - xe(o)), q = 0; q < j.length; q++)
      process.env.NODE_ENV !== "production" && xn(e, j[q]) || j[q]();
    j = null, q = 0;
  }
}
const xe = (e) => e.id == null ? 1 / 0 : e.id, oo = (e, t) => {
  const n = xe(e) - xe(t);
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
  const t = process.env.NODE_ENV !== "production" ? (n) => xn(e, n) : Z;
  try {
    for (G = 0; G < P.length; G++) {
      const n = P[G];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        se(n, null, 14);
      }
    }
  } finally {
    G = 0, P.length = 0, so(e), ze = !1, Dt = null, (P.length || fe.length) && Cn(e);
  }
}
function xn(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > eo) {
      const o = t.ownerInstance, s = o && kn(o.type);
      return xt(
        `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
const Se = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (dn().__VUE_HMR_RUNTIME__ = {
  createRecord: lt(ro),
  rerender: lt(io),
  reload: lt(lo)
});
const Ue = /* @__PURE__ */ new Map();
function ro(e, t) {
  return Ue.has(e) ? !1 : (Ue.set(e, {
    initialDef: Ve(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ve(e) {
  return jn(e) ? e.__vccOpts : e;
}
function io(e, t) {
  const n = Ue.get(e);
  !n || (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, Ve(o.type).render = t), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function lo(e, t) {
  const n = Ue.get(e);
  if (!n)
    return;
  t = Ve(t), tn(n.initialDef, t);
  const o = [...n.instances];
  for (const s of o) {
    const r = Ve(s.type);
    Se.has(r) || (r !== n.initialDef && tn(r, t), Se.add(r)), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (Se.add(r), s.ceReload(t.styles), Se.delete(r)) : s.parent ? (s.parent.effect.dirty = !0, Mt(s.parent.update)) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Rn(() => {
    for (const s of o)
      Se.delete(
        Ve(s.type)
      );
  });
}
function tn(e, t) {
  H(e, t);
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
let ie, He = [];
function Dn(e, t) {
  var n, o;
  ie = e, ie ? (ie.enabled = !0, He.forEach(({ event: s, args: r }) => ie.emit(s, ...r)), He = []) : typeof window < "u" && window.HTMLElement && !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Dn(r, t);
  }), setTimeout(() => {
    ie || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, He = []);
  }, 3e3)) : He = [];
}
let z = null, co = null;
const ao = Symbol.for("v-ndc"), uo = (e) => e.__isSuspense;
function fo(e, t) {
  t && t.pendingBranch ? g(e) ? t.effects.push(...e) : t.effects.push(e) : Rn(e);
}
const po = Symbol.for("v-scx"), ho = () => {
  {
    const e = Co(po);
    return e || process.env.NODE_ENV !== "production" && E(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, Fe = {};
function _o(e, t, {
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
  }, u = Y, v = (d) => o === !0 ? d : le(d, o === !1 ? 1 : void 0);
  let p, y = !1, I = !1;
  if (L(e) ? (p = () => e.value, y = pt(e)) : ue(e) ? (p = () => v(e), y = !0) : g(e) ? (I = !0, y = e.some((d) => ue(d) || pt(d)), p = () => e.map((d) => {
    if (L(d))
      return d.value;
    if (ue(d))
      return v(d);
    if (b(d))
      return se(d, u, 2);
    process.env.NODE_ENV !== "production" && a(d);
  })) : b(e) ? t ? p = () => se(e, u, 2) : p = () => (w && w(), ye(
    e,
    u,
    3,
    [Q]
  )) : (p = Z, process.env.NODE_ENV !== "production" && a(e)), t && o) {
    const d = p;
    p = () => le(d());
  }
  let w, Q = (d) => {
    w = O.onStop = () => {
      se(d, u, 4), w = O.onStop = void 0;
    };
  }, F;
  if ($t)
    if (Q = Z, t ? n && ye(t, u, 3, [
      p(),
      I ? [] : void 0,
      Q
    ]) : p(), s === "sync") {
      const d = ho();
      F = d.__watcherHandles || (d.__watcherHandles = []);
    } else
      return Z;
  let V = I ? new Array(e.length).fill(Fe) : Fe;
  const $ = () => {
    if (!(!O.active || !O.dirty))
      if (t) {
        const d = O.run();
        (o || y || (I ? d.some((he, Xe) => de(he, V[Xe])) : de(d, V))) && (w && w(), ye(t, u, 3, [
          d,
          V === Fe ? void 0 : I && V[0] === Fe ? [] : V,
          Q
        ]), V = d);
      } else
        O.run();
  };
  $.allowRecurse = !!t;
  let K;
  s === "sync" ? K = $ : s === "post" ? K = () => cn($, u && u.suspense) : ($.pre = !0, u && ($.id = u.uid), K = () => Mt($));
  const O = new ws(p, Z, K), pe = () => {
    O.stop();
  };
  return process.env.NODE_ENV !== "production" && (O.onTrack = i, O.onTrigger = l), t ? n ? $() : V = O.run() : s === "post" ? cn(
    O.run.bind(O),
    u && u.suspense
  ) : O.run(), F && F.push(pe), pe;
}
function mo(e, t, n) {
  const o = this.proxy, s = A(e) ? e.includes(".") ? go(o, e) : () => o[e] : e.bind(o, o);
  let r;
  b(t) ? r = t : (r = t.handler, n = t);
  const i = Y;
  gt(this);
  const l = _o(s, r.bind(o), n);
  return i ? gt(i) : An(), l;
}
function go(e, t) {
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
  if (o.add(e), L(e))
    le(e.value, t, n, o);
  else if (g(e))
    for (let s = 0; s < e.length; s++)
      le(e[s], t, n, o);
  else if (cs(e) || ae(e))
    e.forEach((s) => {
      le(s, t, n, o);
    });
  else if (fs(e))
    for (const s in e)
      le(e[s], t, n, o);
  return e;
}
function vo(e, t, n = Y, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Je(), gt(n);
      const l = ye(t, n, e, i);
      return An(), Ye(), l;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = ds(Ct[e].replace(/ hook$/, ""));
    E(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Eo = (e) => (t, n = Y) => (!$t || e === "sp") && vo(e, (...o) => t(...o), n), wo = Eo("bum"), mt = (e) => e ? jo(e) ? Ho(e) || e.proxy : mt(e.parent) : null, Re = /* @__PURE__ */ H(/* @__PURE__ */ Object.create(null), {
  $: (e) => e,
  $el: (e) => e.vnode.el,
  $data: (e) => e.data,
  $props: (e) => process.env.NODE_ENV !== "production" ? je(e.props) : e.props,
  $attrs: (e) => process.env.NODE_ENV !== "production" ? je(e.attrs) : e.attrs,
  $slots: (e) => process.env.NODE_ENV !== "production" ? je(e.slots) : e.slots,
  $refs: (e) => process.env.NODE_ENV !== "production" ? je(e.refs) : e.refs,
  $parent: (e) => mt(e.parent),
  $root: (e) => mt(e.root),
  $emit: (e) => e.emit,
  $options: (e) => No(e),
  $forceUpdate: (e) => e.f || (e.f = () => {
    e.effect.dirty = !0, Mt(e.update);
  }),
  $nextTick: (e) => e.n || (e.n = to.bind(e.proxy)),
  $watch: (e) => mo.bind(e)
}), Oo = (e) => e === "_" || e === "$", ct = (e, t) => e !== W && !e.__isScriptSetup && N(e, t), So = {
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
        if (s !== W && N(s, t))
          return i[t] = 2, s[t];
        if ((u = e.propsOptions[0]) && N(u, t))
          return i[t] = 3, r[t];
        if (n !== W && N(n, t))
          return i[t] = 4, n[t];
        i[t] = 0;
      }
    }
    const v = Re[t];
    let p, y;
    if (v)
      return t === "$attrs" ? (D(e, "get", t), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && t === "$slots" && D(e, "get", t), v(e);
    if ((p = l.__cssModules) && (p = p[t]))
      return p;
    if (n !== W && N(n, t))
      return i[t] = 4, n[t];
    if (y = a.config.globalProperties, N(y, t))
      return y[t];
    process.env.NODE_ENV !== "production" && z && (!A(t) || t.indexOf("__v") !== 0) && (s !== W && Oo(t[0]) && N(s, t) ? E(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === z && E(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return ct(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && N(s, t) ? (E(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== W && N(o, t) ? (o[t] = n, !0) : N(e.props, t) ? (process.env.NODE_ENV !== "production" && E(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && E(
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
    return !!n[i] || e !== W && N(e, i) || ct(t, i) || (l = r[0]) && N(l, i) || N(o, i) || N(Re, i) || N(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (So.ownKeys = (e) => (E(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function nn(e) {
  return g(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function No(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !s.length && !n && !o ? a = t : (a = {}, s.length && s.forEach(
    (u) => Be(a, u, i, !0)
  ), Be(a, t, i)), k(t) && r.set(t, a), a;
}
function Be(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && Be(e, r, n, !0), s && s.forEach(
    (i) => Be(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && E(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = bo[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const bo = {
  data: sn,
  props: rn,
  emits: rn,
  methods: Ne,
  computed: Ne,
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
  components: Ne,
  directives: Ne,
  watch: Vo,
  provide: sn,
  inject: yo
};
function sn(e, t) {
  return t ? e ? function() {
    return H(
      b(e) ? e.call(this, this) : e,
      b(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function yo(e, t) {
  return Ne(on(e), on(t));
}
function on(e) {
  if (g(e)) {
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
  return e ? H(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function rn(e, t) {
  return e ? g(e) && g(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : H(
    /* @__PURE__ */ Object.create(null),
    nn(e),
    nn(t != null ? t : {})
  ) : t;
}
function Vo(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = H(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = C(e[o], t[o]);
  return n;
}
function Ro() {
  return {
    app: null,
    config: {
      isNativeTag: rs,
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
let ln = null;
function Co(e, t, n = !1) {
  const o = Y || z;
  if (o || ln) {
    const s = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : ln._context.provides;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && b(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && E(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && E("inject() can only be used inside setup() or functional components.");
}
const cn = fo, xo = (e) => e.__isTeleport, Mn = Symbol.for("v-fgt"), Do = Symbol.for("v-txt"), Mo = Symbol.for("v-cmt");
let ce = null;
function To(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const Io = (...e) => $n(
  ...e
), Tn = "__vInternal", In = ({ key: e }) => e != null ? e : null, Ke = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? A(e) || L(e) || b(e) ? { i: z, r: e, k: t, f: !!n } : e : null);
function $o(e, t = null, n = null, o = 0, s = null, r = e === Mn ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && In(t),
    ref: t && Ke(t),
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
  return l ? (Tt(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= A(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && E("VNode created with invalid key (NaN). VNode type:", a.type), !i && ce && (a.patchFlag > 0 || r & 6) && a.patchFlag !== 32 && ce.push(a), a;
}
const Po = process.env.NODE_ENV !== "production" ? Io : $n;
function $n(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === ao) && (process.env.NODE_ENV !== "production" && !e && E(`Invalid vnode type when creating vnode: ${e}.`), e = Mo), To(e)) {
    const l = We(
      e,
      t,
      !0
    );
    return n && Tt(l, n), !r && ce && (l.shapeFlag & 6 ? ce[ce.indexOf(e)] = l : ce.push(l)), l.patchFlag |= -2, l;
  }
  if (jn(e) && (e = e.__vccOpts), t) {
    t = Ao(t);
    let { class: l, style: a } = t;
    l && !A(l) && (t.class = wt(l)), k(a) && (ht(a) && !g(a) && (a = H({}, a)), t.style = Et(a));
  }
  const i = A(e) ? 1 : uo(e) ? 128 : xo(e) ? 64 : k(e) ? 4 : b(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && ht(e) && (e = h(e), E(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), $o(
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
function Ao(e) {
  return e ? ht(e) || Tn in e ? H({}, e) : e : null;
}
function We(e, t, n = !1) {
  const { props: o, ref: s, patchFlag: r, children: i } = e, l = t ? Lo(o || {}, t) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: l,
    key: l && In(l),
    ref: t && t.ref ? n && s ? g(s) ? s.concat(Ke(t)) : [s, Ke(t)] : Ke(t) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && r === -1 && g(i) ? i.map(Pn) : i,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Mn ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && We(e.ssContent),
    ssFallback: e.ssFallback && We(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function Pn(e) {
  const t = We(e);
  return g(e.children) && (t.children = e.children.map(Pn)), t;
}
function ko(e = " ", t = 0) {
  return Po(Do, null, e, t);
}
function Tt(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (g(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Tt(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !(Tn in t) ? t._ctx = z : s === 3 && z && (z.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    b(t) ? (t = { default: t, _ctx: z }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [ko(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Lo(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = wt([t.class, o.class]));
      else if (s === "style")
        t.style = Et([t.style, o.style]);
      else if (is(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(g(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else
        s !== "" && (t[s] = o[s]);
  }
  return t;
}
Ro();
let Y = null, It;
{
  const e = dn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  It = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Y = n
  ), t(
    "__VUE_SSR_SETTERS__",
    (n) => $t = n
  );
}
const gt = (e) => {
  It(e), e.scope.on();
}, An = () => {
  Y && Y.scope.off(), It(null);
};
function jo(e) {
  return e.vnode.shapeFlag & 4;
}
let $t = !1;
function Ho(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Ws(zs(e.exposed)), {
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
const Fo = /(?:^|[-_])(\w)/g, Ko = (e) => e.replace(Fo, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function kn(e, t = !0) {
  return b(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ln(e, t, n = !1) {
  let o = kn(t);
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
  return o ? Ko(o) : n ? "App" : "Anonymous";
}
function jn(e) {
  return b(e) && "__vccOpts" in e;
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
const zo = ["id", "multiple"], Uo = {
  key: 1,
  class: "lkt-field__select"
}, Bo = ["innerHTML"], Wo = ["title"], qo = ["innerHTML"], Go = {
  key: 2,
  class: "lkt-field__select-dropdown"
}, Jo = { class: "lkt-field__select-search-container" }, Yo = {
  key: 1,
  class: "lkt-field__select-options"
}, Qo = ["onClick"], Xo = {
  key: 0,
  class: "lkt-field__select-option"
}, Zo = {
  key: 2,
  class: "lkt-field-select__read"
}, er = ["innerHTML", "title"], tr = {
  key: 3,
  class: "lkt-field__state"
}, nr = ["title"], sr = {
  key: 3,
  class: "lkt-field-select__read-multiple"
}, or = { key: 0 }, rr = ["title"], ir = ["innerHTML"], lr = {
  key: 2,
  class: "lkt-field__state"
}, cr = ["title"], ar = ["innerHTML"], ur = { name: "LktFieldSelect", inheritAttrs: !1 }, fr = /* @__PURE__ */ Jn({
  ...ur,
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
    noOptionsMessage: { type: String, default: ss() },
    resource: { type: String, default: "" },
    resourceData: { type: [Object], default: () => ({}) },
    searchStringResourceParam: { type: String, default: "query" },
    searchPlaceholder: { type: String, default: "" },
    useResourceSlot: { type: String, default: "" },
    multipleDisplay: { type: String, default: "list" },
    multipleDisplayEdition: { type: String, default: "inline" }
  },
  emits: ["update:modelValue", "click-ui"],
  setup(e, { expose: t, emit: n }) {
    const o = n, s = e, r = Yn(), i = x(null), l = x(null), a = x(null), u = x(!s.readMode), v = Ut(16), p = x(new Bt(s.options)), y = x(!1), I = x(s.modelValue), w = x(s.modelValue), Q = x(!1), F = x(!1), V = x(!1), $ = x(p.value.all()), K = x(p.value.all()), O = x("");
    s.closeOnSelect === null ? y.value = s.multiple === !0 : y.value = s.closeOnSelect;
    const pe = R(() => s.resource !== ""), d = R(() => typeof s.valid == "function" ? s.valid() : s.valid), he = R(() => w.value !== I.value), Xe = R(() => {
      const c = ["lkt-field", "lkt-field-select"];
      return s.palette && c.push(`lkt-field--${s.palette}`), he.value && c.push("is-changed"), s.class && c.push(s.class), s.multiple && c.push("is-multiple"), s.disabled && c.push("is-disabled"), s.upperDropdown && !s.choiceDropdown && c.push("lkt-field-select-upper-dropdown"), s.choiceDropdown && c.push("lkt-field-select-choice-dropdown"), V.value && c.push("has-focus"), c.push(d.value ? "is-valid" : "is-error"), c.push(s.modelValue ? "is-filled" : "is-empty"), c.join(" ");
    }), Hn = R(() => {
      const c = [];
      return c.push(`lkt-field-select-read--${s.multipleDisplay}`), c.join(" ");
    }), Fn = R(() => {
      const c = [];
      return c.push(`lkt-field-select-read--${s.multipleDisplayEdition}`), c.join(" ");
    }), De = R(() => {
      let c = {};
      return K.value.forEach((S) => {
        S.value == w.value && (c = S);
      }), c;
    }), Ze = R(() => {
      let c = "";
      return K.value.forEach((S) => {
        S.value == w.value && (c = S.label);
      }), c;
    }), et = R(() => {
      let c = [];
      return s.multiple && K.value.forEach((S) => {
        w.value.forEach((ge) => {
          ge == S.value && c.push(S);
        });
      }), c;
    }), _e = () => {
      K.value = p.value.all(), $.value = p.value.filter(O.value), F.value = !1;
    }, Pt = () => {
      O.value = "", _e();
    }, At = async () => {
      if (F.value = !1, pe.value) {
        F.value = !0;
        const c = JSON.parse(JSON.stringify(s.resourceData));
        s.searchStringResourceParam && (c[s.searchStringResourceParam] = O.value);
        const S = await es(s.resource, c);
        p.value.receiveOptions(S.data), _e();
      } else
        _e();
    }, Kn = () => {
      w.value = I.value;
    }, zn = () => s.modelValue, me = (c) => {
      Pt(), tt(c), V.value = !V.value, V.value && ot(() => {
        At(), i.value.focus(), ot(() => {
          i.value.focus();
        });
      });
    };
    Ee(() => s.readMode, (c) => u.value = !c), Ee(() => s.modelValue, (c) => {
      w.value = c;
    }), Ee(w, (c) => {
      o("update:modelValue", c), Q.value = !0, ot(() => Q.value = !1);
    }), Ee(O, _e), Ee(() => s.options, (c) => {
      p.value = new Bt(c);
    });
    const kt = (c) => {
      if (s.multiple) {
        let S = w.value.findIndex((ge) => ge == c.value);
        return typeof S > "u" && (S = -1), S;
      }
      return -1;
    }, Un = (c) => {
      if (s.multiple) {
        let S = kt(c);
        S === -1 ? w.value.push(c.value) : w.value.splice(S, 1);
      } else
        w.value = c.value, V.value = !1;
    }, Bn = (c) => s.multiple ? kt(c) !== -1 : c.value == w.value, tt = (c) => {
      if (!a.value.contains(c.target)) {
        Pt(), V.value = !1;
        return;
      }
    }, Lt = (c) => {
      u.value = !u.value, u.value && focus();
    };
    window.addEventListener("click", tt), _e(), wo(() => {
      window.removeEventListener("click", tt);
    }), t({
      reset: Kn,
      value: zn
    });
    const oe = R(() => s.useResourceSlot ? s.useResourceSlot : s.resource), jt = R(() => T.NO_OPTIONS_MESSAGE), nt = R(() => oe.value !== "" && typeof T.customResourceOptionSlots[oe.value] < "u"), st = R(() => T.customResourceOptionSlots[oe.value]), Ht = R(() => oe.value !== "" && typeof T.customResourceValueSlots[oe.value] < "u"), Ft = R(() => T.customResourceValueSlots[oe.value]);
    return (c, S) => {
      const ge = Kt("lkt-field-text"), Wn = Kt("lkt-loader");
      return f(), _("div", {
        class: Me(Xe.value),
        "data-show-ui": !1,
        ref: (m) => a.value = m
      }, [
        X(c.$slots, "prefix"),
        u.value ? (f(), _("select", {
          key: 0,
          ref: (m) => l.value = m,
          id: U(v),
          onFocus: Te(me, ["stop", "prevent"]),
          onBlur: Te(me, ["stop", "prevent"]),
          multiple: e.multiple,
          style: { height: "0", opacity: "0", width: "0" }
        }, null, 40, zo)) : M("", !0),
        u.value ? (f(), _("div", Uo, [
          e.multiple ? (f(), _("div", {
            key: 1,
            class: "lkt-field__select-value-multiple",
            onClick: me
          }, [
            Ie("ul", {
              class: Me(Fn.value)
            }, [
              (f(!0), _(Oe, null, rt(et.value, (m) => (f(), _("li", {
                title: m.label
              }, [
                U(r).option ? X(c.$slots, "option", {
                  key: 0,
                  option: m
                }) : nt.value ? (f(), re(we(st.value), {
                  key: 1,
                  option: m
                }, null, 8, ["option"])) : (f(), _("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: m.label
                }, null, 8, qo))
              ], 8, Wo))), 256))
            ], 2)
          ])) : (f(), _("div", {
            key: 0,
            class: "lkt-field__select-value",
            onClick: me
          }, [
            U(r).option ? X(c.$slots, "option", {
              key: 0,
              option: De.value
            }) : M("", !0),
            nt.value ? (f(), re(we(st.value), {
              key: 1,
              option: De.value
            }, null, 8, ["option"])) : (f(), _("div", {
              key: 2,
              class: "lkt-field-select__read-value",
              innerHTML: Ze.value
            }, null, 8, Bo))
          ])),
          V.value ? (f(), _("div", Go, [
            Qn(Ie("div", Jo, [
              Xn(ge, {
                ref: (m) => i.value = m,
                modelValue: O.value,
                "onUpdate:modelValue": S[0] || (S[0] = (m) => O.value = m),
                placeholder: e.searchPlaceholder,
                tabindex: -1,
                class: "lkt-field__select-search",
                onKeyup: At
              }, null, 8, ["modelValue", "placeholder"])
            ], 512), [
              [Zn, e.searchable]
            ]),
            F.value ? (f(), re(Wn, { key: 0 })) : M("", !0),
            !e.readonly && !F.value ? (f(), _("ul", Yo, [
              (f(!0), _(Oe, null, rt($.value, (m) => (f(), _("li", {
                class: Me(["lkt-field__select-option", { "is-active": e.multiple ? Bn(m) : m.value == w.value }]),
                onClick: Te((dr) => Un(m), ["prevent", "stop"])
              }, [
                U(r).option ? X(c.$slots, "option", {
                  key: 0,
                  option: m
                }) : M("", !0),
                nt.value ? (f(), re(we(st.value), {
                  key: 1,
                  option: m
                }, null, 8, ["option"])) : (f(), _(Oe, { key: 2 }, [
                  zt(it(m.label), 1)
                ], 64))
              ], 10, Qo))), 256)),
              $.value.length === 0 && (U(r)["no-results"] || jt.value) ? (f(), _("li", Xo, [
                U(r)["no-results"] ? X(c.$slots, "no-results", { key: 0 }) : (f(), _(Oe, { key: 1 }, [
                  zt(it(jt.value), 1)
                ], 64))
              ])) : M("", !0)
            ])) : M("", !0)
          ])) : M("", !0)
        ])) : M("", !0),
        !u.value && !e.multiple ? (f(), _("div", Zo, [
          U(r).value ? X(c.$slots, "value", {
            key: 0,
            option: De.value
          }) : Ht.value ? (f(), re(we(Ft.value), {
            key: 1,
            option: De.value
          }, null, 8, ["option"])) : (f(), _("div", {
            key: 2,
            class: "lkt-field-select__read-value",
            innerHTML: Ze.value,
            title: Ze.value
          }, null, 8, er)),
          e.allowReadModeSwitch ? (f(), _("div", tr, [
            Ie("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: Lt
            }, null, 8, nr)
          ])) : M("", !0)
        ])) : M("", !0),
        !u.value && e.multiple ? (f(), _("div", sr, [
          e.multipleDisplay === "count" ? (f(), _("div", or, it(et.value.length), 1)) : (f(), _("ul", {
            key: 1,
            class: Me(Hn.value)
          }, [
            (f(!0), _(Oe, null, rt(et.value, (m) => (f(), _("li", {
              title: m.label
            }, [
              U(r).value ? X(c.$slots, "value", {
                key: 0,
                option: m
              }) : Ht.value ? (f(), re(we(Ft.value), {
                key: 1,
                option: m
              }, null, 8, ["option"])) : (f(), _("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: m.label
              }, null, 8, ir))
            ], 8, rr))), 256))
          ], 2)),
          e.allowReadModeSwitch ? (f(), _("div", lr, [
            Ie("i", {
              class: "lkt-field__edit-icon",
              title: s.switchEditionMessage,
              onClick: Lt
            }, null, 8, cr)
          ])) : M("", !0)
        ])) : M("", !0),
        e.label ? (f(), _("label", {
          key: 4,
          innerHTML: e.label,
          onClick: Te(me, ["stop", "prevent"])
        }, null, 8, ar)) : M("", !0)
      ], 2);
    };
  }
});
const Sr = {
  install: (e) => {
    e.component("lkt-field-select") === void 0 && e.component("lkt-field-select", fr), e.component("lkt-loader") === void 0 && e.use(ts), e.component("lkt-field-text") === void 0 && e.use(ns);
  }
};
export {
  Sr as default,
  Er as setNoOptionsMessage,
  wr as setResourceOptionSlot,
  Or as setResourceValueSlot
};
