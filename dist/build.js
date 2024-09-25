import { defineComponent as Be, useSlots as Ne, ref as c, computed as i, watch as $, nextTick as Y, resolveComponent as Z, openBlock as t, createElementBlock as a, normalizeClass as D, unref as h, renderSlot as w, createCommentVNode as p, withModifiers as G, createElementVNode as F, createBlock as _, resolveDynamicComponent as b, toDisplayString as T, Fragment as A, renderList as x, createVNode as ve, withCtx as He, withDirectives as $e, vShow as Ae, createTextVNode as me } from "vue";
import { generateRandomString as he } from "lkt-string-tools";
import { httpCall as Fe } from "lkt-http-client";
import { __ as Ie } from "lkt-i18n";
import Pe from "lkt-loader";
import Ue from "lkt-field-text";
const S = class S {
};
S.debugEnabled = !1, S.NO_OPTIONS_MESSAGE = "", S.emptyValueText = "", S.defaultEmptyValueSlot = "", S.customResourceOptionSlots = {}, S.customResourceValueSlots = {};
let u = S;
const je = () => u.NO_OPTIONS_MESSAGE, Rl = (s) => (u.NO_OPTIONS_MESSAGE = s, !0), Ml = (s) => (u.emptyValueText = s, !0), Dl = (s, d) => (u.customResourceOptionSlots[s] = d, !0), Tl = (s, d) => (u.customResourceValueSlots[s] = d, !0), Cl = (s, d) => {
  u.defaultEmptyValueSlot = s, d && (u.customResourceValueSlots[s] = d);
};
class ye {
  constructor(d = []) {
    Array.isArray(d) || (d = []), this.value = [...d];
  }
  all() {
    return this.value;
  }
  filter(d) {
    if (d === "")
      return this.all();
    const y = d.toLowerCase();
    return this.value.filter((V) => V.label.toLowerCase().indexOf(y) !== -1);
  }
  findByValue(d) {
    if (d)
      return this.value.find((y) => y.value === d);
  }
  receiveOptions(d) {
    const y = /* @__PURE__ */ new Set(), V = [...this.value, ...d], l = [];
    V.forEach((v) => {
      let O = [v.value, v.label].join("-");
      y.has(O) || (l.push(v), y.add(O));
    }), this.value = l;
  }
}
const C = (...s) => {
  u.debugEnabled && console.info("[LktFieldSelect] ", ...s);
}, Ll = (s = !0) => {
  u.debugEnabled = s;
}, Ge = ["innerHTML"], qe = {
  key: 2,
  class: "lkt-field-main lkt-field-main--select"
}, ze = ["id", "multiple"], Ke = { class: "lkt-field-picked-option" }, We = ["innerHTML"], Je = /* @__PURE__ */ F("div", { class: "lkt-field-dropdown-angle" }, [
  /* @__PURE__ */ F("i", { class: "lkt-field-icon-angle-down" })
], -1), Qe = { key: 0 }, Xe = ["title"], Ye = ["innerHTML"], Ze = { class: "lkt-field__select-search-container" }, xe = {
  key: 1,
  class: "lkt-field__select-options"
}, el = ["onClick"], ll = {
  key: 0,
  class: "lkt-field__select-option"
}, tl = {
  key: 3,
  class: "lkt-field__state"
}, al = ["title"], ol = ["title"], sl = {
  key: 3,
  class: "lkt-field-select__read"
}, ul = {
  key: 0,
  class: "lkt-field-select-empty"
}, il = {
  key: 1,
  class: "lkt-field-select-empty"
}, nl = ["innerHTML", "title"], rl = {
  key: 5,
  class: "lkt-field__state"
}, dl = ["title"], cl = {
  key: 4,
  class: "lkt-field-select__read-multiple"
}, pl = { key: 0 }, fl = {
  key: 1,
  class: "lkt-field-select-empty"
}, vl = {
  key: 2,
  class: "lkt-field-select-empty"
}, ml = ["title"], hl = ["innerHTML"], yl = {
  key: 4,
  class: "lkt-field__state"
}, kl = ["title"], _l = /* @__PURE__ */ Be({
  __name: "LktFieldSelect",
  props: {
    modelValue: { default: "" },
    class: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: he(16) },
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
    reset: { type: Boolean, default: !1 },
    resetMessage: { default: "" },
    tags: { type: Boolean, default: !1 },
    autoloadResource: { type: Boolean, default: !1 },
    noOptionsMessage: { default: je() },
    resource: { default: "" },
    resourceData: { default: () => ({}) },
    slotData: { default: () => ({}) },
    searchStringResourceParam: { default: "query" },
    searchPlaceholder: { default: "" },
    useResourceSlot: { default: "" },
    multipleDisplay: { default: "list" },
    multipleDisplayEdition: { default: "inline" },
    mandatory: { type: Boolean, default: !1 },
    mandatoryMessage: { default: "Mandatory" },
    emptyValueSlot: { default: "" },
    emptyValueText: { default: "" }
  },
  emits: ["update:modelValue", "click-ui", "selected-option", "results"],
  setup(s, { expose: d, emit: y }) {
    const V = y, l = s, v = Ne(), O = c(null), ke = c(null), q = c(null), _e = c(null), f = c(!l.readMode), Se = he(16), m = c(new ye(l.options)), ee = c(!1), z = c(l.modelValue), r = c(l.modelValue), le = c(!1), L = c(!1), k = c(!1), I = c(m.value.all()), E = c(m.value.all()), g = c("");
    c(""), l.closeOnSelect === null ? ee.value = l.multiple === !0 : ee.value = l.closeOnSelect;
    const Ve = i(() => l.resource !== ""), we = i(() => typeof l.valid == "function" ? l.valid() : l.valid), be = i(() => r.value !== z.value), Oe = i(() => {
      const e = ["lkt-field", "lkt-field-select"];
      return l.palette && e.push(`lkt-field--${l.palette}`), be.value && e.push("is-changed"), l.class && e.push(l.class), l.multiple && e.push("is-multiple"), l.disabled && e.push("is-disabled"), l.tags && e.push("with-tags"), l.upperDropdown && !l.choiceDropdown && e.push("lkt-field-select-upper-dropdown"), l.choiceDropdown && e.push("lkt-field-select-choice-dropdown"), l.mandatory && f.value && e.push("is-mandatory-field"), k.value && e.push("has-focus"), l.multiple && f.value && l.multipleDisplayEdition === "count" && e.push("size-sm"), l.multiple && !f.value && l.multipleDisplay === "count" && e.push("size-sm"), e.push(we.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), Ee = i(() => {
      const e = [];
      return e.push(`lkt-field-select-read--${l.multipleDisplay}`), e.join(" ");
    }), ge = i(() => {
      const e = [];
      return e.push(`lkt-field-select-read--${l.multipleDisplayEdition}`), e.join(" ");
    }), te = i(() => {
      let e = !1;
      return E.value.forEach((n) => {
        n.value == r.value && (e = !0);
      }), e;
    }), B = i(() => {
      let e = {};
      return E.value.forEach((n) => {
        n.value == r.value && (e = n);
      }), e;
    }), K = i(() => {
      let e = "";
      return E.value.forEach((n) => {
        n.value == r.value && (e = n.label);
      }), e;
    }), ae = i(() => {
      let e = [];
      return l.multiple && E.value.forEach((n) => {
        r.value.forEach((H) => {
          H == n.value && e.push(n);
        });
      }), e;
    }), P = i(() => Array.isArray(r.value) ? r.value.length : 0), oe = i(() => l.allowReadModeSwitch || l.reset && U.value), U = i(() => l.multiple ? r.value.length > 0 : r.value !== ""), se = i(() => l.label.startsWith("__:") ? Ie(l.label.substring(3)) : l.label), R = () => {
      E.value = m.value.all(), I.value = m.value.filter(g.value), L.value = !1, C("buildVisibleOptions: optionsValue", m.value), C("buildVisibleOptions: optionsHaystack", E.value), C("buildVisibleOptions: visibleOptions", I.value);
    }, ue = () => {
      g.value = "", f.value && R();
    }, W = async () => {
      if (!(!f.value && !l.autoloadResource))
        if (L.value = !1, Ve.value) {
          L.value = !0, l.searchStringResourceParam && (l.resourceData[l.searchStringResourceParam] = g.value);
          const e = await Fe(l.resource, l.resourceData);
          m.value.receiveOptions(e.data), R(), V("results", e.data);
        } else
          R();
    }, ie = () => {
      l.multiple ? (r.value.splice(0, r.value.length), r.value = [...z.value]) : r.value = z.value;
    }, Re = () => l.modelValue, N = (e) => {
      f.value && (ue(), Te(e), k.value = !k.value, k.value && Y(() => {
        W(), O.value.focus(), Y(() => {
          O.value.focus();
        });
      }));
    };
    $(() => l.readMode, (e) => f.value = !e), $(() => l.modelValue, (e) => {
      C("Updated props.modelValue", e), r.value = e;
    }), $(r, (e) => {
      V("update:modelValue", e), V("selected-option", m.value.findByValue(e)), le.value = !0, Y(() => le.value = !1);
    }), $(g, R), $(() => l.options, (e) => {
      C("Updated props.options", e, m.value), m.value = new ye(e), R();
    });
    const ne = (e) => {
      if (l.multiple) {
        let n = r.value.findIndex((H) => H == e.value);
        return typeof n > "u" && (n = -1), n;
      }
      return -1;
    }, Me = (e) => {
      if (l.multiple) {
        let n = ne(e);
        n === -1 ? r.value.push(e.value) : r.value.splice(n, 1);
      } else
        r.value = e.value, k.value = !1;
    }, De = (e) => l.multiple ? ne(e) !== -1 : e.value == r.value, Te = (e) => {
      if (!q.value.contains(e.target)) {
        ue(), k.value = !1;
        return;
      }
    }, J = (e) => {
      f.value = !f.value, f.value && focus();
    };
    R(), d({
      reset: ie,
      value: Re
    }), l.autoloadResource && l.resource !== "" && (C("Auto loading Resource", l.resource, l.resourceData, l.autoloadResource), W());
    const M = i(() => l.useResourceSlot ? l.useResourceSlot : l.resource), re = i(() => u.NO_OPTIONS_MESSAGE), de = i(() => l.emptyValueText !== "" ? l.emptyValueText : u.emptyValueText), j = i(() => l.emptyValueSlot !== "" && typeof u.customResourceValueSlots[l.emptyValueSlot] < "u" || u.defaultEmptyValueSlot && typeof u.customResourceValueSlots[u.defaultEmptyValueSlot] < "u"), ce = i(() => u.customResourceValueSlots[l.emptyValueSlot] ?? u.customResourceValueSlots[u.defaultEmptyValueSlot]), Q = i(() => M.value !== "" && typeof u.customResourceOptionSlots[M.value] < "u"), X = i(() => u.customResourceOptionSlots[M.value]), pe = i(() => M.value !== "" && typeof u.customResourceValueSlots[M.value] < "u"), fe = i(() => u.customResourceValueSlots[M.value]);
    return (e, n) => {
      const H = Z("lkt-field-text"), Ce = Z("lkt-loader"), Le = Z("lkt-tooltip");
      return t(), a("div", {
        class: D(Oe.value),
        "data-show-ui": !1,
        ref: (o) => q.value = o
      }, [
        h(v).prefix ? w(e.$slots, "prefix", { key: 0 }) : p("", !0),
        se.value ? (t(), a("label", {
          key: 1,
          innerHTML: se.value,
          onClick: G(N, ["stop", "prevent"])
        }, null, 8, Ge)) : p("", !0),
        f.value ? (t(), a("div", qe, [
          f.value ? (t(), a("select", {
            key: 0,
            ref: (o) => ke.value = o,
            id: h(Se),
            onFocus: G(N, ["stop", "prevent"]),
            onBlur: G(N, ["stop", "prevent"]),
            multiple: e.multiple,
            style: { height: "0", opacity: "0", width: "0", border: "none", overflow: "hidden", padding: "0" }
          }, null, 40, ze)) : p("", !0),
          e.multiple ? (t(), a("div", {
            key: 2,
            class: "lkt-field__select-value-multiple",
            onClick: N
          }, [
            e.multipleDisplayEdition === "count" ? (t(), a("div", Qe, T(P.value), 1)) : (t(), a("ul", {
              key: 1,
              class: D(ge.value)
            }, [
              (t(!0), a(A, null, x(ae.value, (o) => (t(), a("li", {
                title: o.label
              }, [
                h(v).option ? w(e.$slots, "option", {
                  key: 0,
                  option: o,
                  data: e.slotData
                }) : Q.value ? (t(), _(b(X.value), {
                  key: 1,
                  option: o
                }, null, 8, ["option"])) : (t(), a("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: o.label
                }, null, 8, Ye))
              ], 8, Xe))), 256))
            ], 2))
          ])) : (t(), a("div", {
            key: 1,
            class: "lkt-field__select-value",
            onClick: N
          }, [
            F("div", Ke, [
              U.value && h(v).option ? w(e.$slots, "option", {
                key: 0,
                option: B.value,
                data: e.slotData
              }) : U.value && Q.value ? (t(), _(b(X.value), {
                key: 1,
                option: B.value
              }, null, 8, ["option"])) : (t(), a("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: K.value
              }, null, 8, We))
            ]),
            Je
          ])),
          ve(Le, {
            ref_key: "dropdownEl",
            ref: _e,
            class: "lkt-field__select-dropdown",
            modelValue: k.value,
            "onUpdate:modelValue": n[1] || (n[1] = (o) => k.value = o),
            referrer: q.value,
            "referrer-width": "",
            "location-x": "left-corner",
            "location-y": e.upperDropdown ? "top" : "bottom"
          }, {
            default: He(() => [
              $e(F("div", Ze, [
                ve(H, {
                  ref: (o) => O.value = o,
                  modelValue: g.value,
                  "onUpdate:modelValue": n[0] || (n[0] = (o) => g.value = o),
                  placeholder: e.searchPlaceholder,
                  tabindex: -1,
                  class: "lkt-field__select-search",
                  onKeyup: W
                }, null, 8, ["modelValue", "placeholder"])
              ], 512), [
                [Ae, e.searchable]
              ]),
              L.value ? (t(), _(Ce, { key: 0 })) : p("", !0),
              !e.readonly && !L.value ? (t(), a("ul", xe, [
                (t(!0), a(A, null, x(I.value, (o) => (t(), a("li", {
                  class: D(["lkt-field__select-option", { "is-active": e.multiple ? De(o) : o.value == r.value }]),
                  onClick: G((Sl) => Me(o), ["prevent", "stop"])
                }, [
                  h(v).option ? w(e.$slots, "option", {
                    key: 0,
                    option: o,
                    data: e.slotData
                  }) : p("", !0),
                  Q.value ? (t(), _(b(X.value), {
                    key: 1,
                    option: o
                  }, null, 8, ["option"])) : (t(), a(A, { key: 2 }, [
                    me(T(o.label), 1)
                  ], 64))
                ], 10, el))), 256)),
                I.value.length === 0 && (h(v)["no-results"] || re.value) ? (t(), a("li", ll, [
                  h(v)["no-results"] ? w(e.$slots, "no-results", { key: 0 }) : (t(), a(A, { key: 1 }, [
                    me(T(re.value), 1)
                  ], 64))
                ])) : p("", !0)
              ])) : p("", !0)
            ]),
            _: 3
          }, 8, ["modelValue", "referrer", "location-y"]),
          oe.value ? (t(), a("div", tl, [
            l.reset && U.value ? (t(), a("i", {
              key: 0,
              class: "lkt-field__reset-icon",
              title: e.resetText,
              onClick: ie
            }, null, 8, al)) : p("", !0),
            e.allowReadModeSwitch ? (t(), a("i", {
              key: 1,
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: J
            }, null, 8, ol)) : p("", !0)
          ])) : p("", !0)
        ])) : p("", !0),
        !f.value && !e.multiple ? (t(), a("div", sl, [
          !te.value && j.value ? (t(), a("div", ul, [
            (t(), _(b(ce.value)))
          ])) : !te.value && !j.value ? (t(), a("div", il, T(de.value), 1)) : h(v).value ? w(e.$slots, "value", {
            key: 2,
            option: B.value,
            data: e.slotData
          }) : pe.value ? (t(), _(b(fe.value), {
            key: 3,
            option: B.value
          }, null, 8, ["option"])) : (t(), a("div", {
            key: 4,
            class: D(["lkt-field-select__read-value", "lkt-field-option option-" + B.value.value]),
            innerHTML: K.value,
            title: K.value
          }, null, 10, nl)),
          oe.value ? (t(), a("div", rl, [
            e.allowReadModeSwitch ? (t(), a("i", {
              key: 0,
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: J
            }, null, 8, dl)) : p("", !0)
          ])) : p("", !0)
        ])) : p("", !0),
        !f.value && e.multiple ? (t(), a("div", cl, [
          e.multipleDisplay === "count" ? (t(), a("div", pl, T(P.value), 1)) : P.value === 0 && j.value ? (t(), a("div", fl, [
            (t(), _(b(ce.value)))
          ])) : P.value === 0 && !j.value ? (t(), a("div", vl, T(de.value), 1)) : (t(), a("ul", {
            key: 3,
            class: D(Ee.value)
          }, [
            (t(!0), a(A, null, x(ae.value, (o) => (t(), a("li", {
              title: o.label,
              class: D("lkt-field-option option-" + o.value)
            }, [
              h(v).value ? w(e.$slots, "value", {
                key: 0,
                option: o,
                data: e.slotData
              }) : pe.value ? (t(), _(b(fe.value), {
                key: 1,
                option: o,
                data: e.slotData
              }, null, 8, ["option", "data"])) : (t(), a("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: o.label
              }, null, 8, hl))
            ], 10, ml))), 256))
          ], 2)),
          e.allowReadModeSwitch ? (t(), a("div", yl, [
            F("i", {
              class: "lkt-field__edit-icon",
              title: l.switchEditionMessage,
              onClick: J
            }, null, 8, kl)
          ])) : p("", !0)
        ])) : p("", !0)
      ], 2);
    };
  }
}), Bl = {
  install: (s) => {
    s.component("lkt-field-select") === void 0 && s.component("lkt-field-select", _l), s.component("lkt-loader") === void 0 && s.use(Pe), s.component("lkt-field-text") === void 0 && s.use(Ue);
  }
};
export {
  Ll as debugLktFieldSelect,
  Bl as default,
  Cl as setDefaultSelectEmptyValueSlot,
  Rl as setNoOptionsMessage,
  Dl as setResourceOptionSlot,
  Tl as setResourceValueSlot,
  Ml as setSelectEmptyValueMessage
};
