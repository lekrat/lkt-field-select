import { defineComponent as Be, useSlots as Ae, ref as c, computed as n, watch as D, nextTick as Q, resolveComponent as X, openBlock as t, createElementBlock as a, normalizeClass as T, unref as y, renderSlot as w, createCommentVNode as p, withModifiers as Y, createElementVNode as H, createBlock as _, resolveDynamicComponent as b, toDisplayString as C, Fragment as F, renderList as Z, createVNode as ve, withCtx as Ne, withDirectives as $e, vShow as He, createTextVNode as me } from "vue";
import { generateRandomString as ye } from "lkt-string-tools";
import { httpCall as Fe } from "lkt-http-client";
import { __ as Ie } from "lkt-i18n";
import Pe from "lkt-loader";
import Ue from "lkt-field-text";
const S = class S {
};
S.debugEnabled = !1, S.NO_OPTIONS_MESSAGE = "", S.emptyValueText = "", S.defaultEmptyValueSlot = "", S.customResourceOptionSlots = {}, S.customResourceValueSlots = {};
let i = S;
const je = () => i.NO_OPTIONS_MESSAGE, gl = (s) => (i.NO_OPTIONS_MESSAGE = s, !0), Rl = (s) => (i.emptyValueText = s, !0), Ml = (s, d) => (i.customResourceOptionSlots[s] = d, !0), Dl = (s, d) => (i.customResourceValueSlots[s] = d, !0), Tl = (s, d) => {
  i.defaultEmptyValueSlot = s, d && (i.customResourceValueSlots[s] = d);
};
class ke {
  constructor(d = []) {
    Array.isArray(d) || (d = []), this.value = [...d];
  }
  all() {
    return this.value;
  }
  filter(d) {
    if (d === "") return this.all();
    const k = d.toLowerCase();
    return this.value.filter((h) => h.label.toLowerCase().indexOf(k) !== -1);
  }
  findByValue(d) {
    if (d)
      return this.value.find((k) => k.value === d);
  }
  receiveOptions(d) {
    const k = /* @__PURE__ */ new Set(), h = [...this.value, ...d], l = [];
    h.forEach((v) => {
      let O = [v.value, v.label].join("-");
      k.has(O) || (l.push(v), k.add(O));
    }), this.value = l;
  }
}
const L = (...s) => {
  i.debugEnabled && console.info("[LktFieldSelect] ", ...s);
}, Cl = (s = !0) => {
  i.debugEnabled = s;
}, Ge = ["innerHTML"], qe = {
  key: 2,
  class: "lkt-field-main lkt-field-main--select"
}, ze = ["id", "multiple"], Ke = { class: "lkt-field-picked-option" }, We = ["innerHTML"], Je = { key: 0 }, Qe = ["title"], Xe = ["innerHTML"], Ye = { class: "lkt-field__select-search-container" }, Ze = {
  key: 1,
  class: "lkt-field__select-options"
}, xe = ["onClick"], el = {
  key: 0,
  class: "lkt-field__select-option"
}, ll = {
  key: 3,
  class: "lkt-field__state"
}, tl = ["title"], al = ["title"], ol = {
  key: 3,
  class: "lkt-field-select__read"
}, sl = {
  key: 0,
  class: "lkt-field-select-empty"
}, ul = {
  key: 1,
  class: "lkt-field-select-empty"
}, il = ["innerHTML", "title"], nl = {
  key: 5,
  class: "lkt-field__state"
}, rl = ["title"], dl = {
  key: 4,
  class: "lkt-field-select__read-multiple"
}, cl = { key: 0 }, pl = {
  key: 1,
  class: "lkt-field-select-empty"
}, fl = {
  key: 2,
  class: "lkt-field-select-empty"
}, vl = ["title"], ml = ["innerHTML"], yl = {
  key: 4,
  class: "lkt-field__state"
}, kl = ["title"], hl = /* @__PURE__ */ Be({
  __name: "LktFieldSelect",
  props: {
    modelValue: { default: "" },
    picked: { default: void 0 },
    class: { default: "" },
    placeholder: { default: "" },
    label: { default: "" },
    palette: { default: "" },
    name: { default: ye(16) },
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
  emits: ["update:modelValue", "update:picked", "click-ui", "selected-option", "results"],
  setup(s, { expose: d, emit: k }) {
    const h = k, l = s, v = Ae(), O = c(null), he = c(null), x = c(null), _e = c(null), f = c(!l.readMode), ee = c(l.picked), Se = ye(16), m = c(new ke(l.options)), le = c(!1), G = c(l.modelValue), r = c(l.modelValue), te = c(!1), B = c(!1), V = c(!1), I = c(m.value.all()), E = c(m.value.all()), g = c("");
    l.closeOnSelect === null ? le.value = l.multiple === !0 : le.value = l.closeOnSelect;
    const Ve = n(() => l.resource !== ""), we = n(() => typeof l.valid == "function" ? l.valid() : l.valid), be = n(() => r.value !== G.value), Oe = n(() => {
      const e = ["lkt-field", "lkt-field-select"];
      return l.palette && e.push(`lkt-field--${l.palette}`), be.value && e.push("is-changed"), l.class && e.push(l.class), l.multiple && e.push("is-multiple"), l.disabled && e.push("is-disabled"), l.tags && e.push("with-tags"), l.upperDropdown && !l.choiceDropdown && e.push("lkt-field-select-upper-dropdown"), l.choiceDropdown && e.push("lkt-field-select-choice-dropdown"), l.mandatory && f.value && e.push("is-mandatory-field"), V.value && e.push("has-focus"), l.multiple && f.value && l.multipleDisplayEdition === "count" && e.push("size-sm"), l.multiple && !f.value && l.multipleDisplay === "count" && e.push("size-sm"), e.push(we.value ? "is-valid" : "is-error"), e.push(l.modelValue ? "is-filled" : "is-empty"), e.join(" ");
    }), Ee = n(() => {
      const e = [];
      return e.push(`lkt-field-select-read--${l.multipleDisplay}`), e.join(" ");
    }), ge = n(() => {
      const e = [];
      return e.push(`lkt-field-select-read--${l.multipleDisplayEdition}`), e.join(" ");
    }), ae = n(() => {
      let e = !1;
      return E.value.forEach((u) => {
        u.value == r.value && (e = !0);
      }), e;
    }), A = n(() => {
      let e = {};
      return E.value.forEach((u) => {
        u.value == r.value && (e = u);
      }), e;
    }), q = n(() => {
      let e = "";
      return E.value.forEach((u) => {
        u.value == r.value && (e = u.label);
      }), e;
    }), oe = n(() => {
      let e = [];
      return l.multiple && E.value.forEach((u) => {
        r.value.forEach(($) => {
          $ == u.value && e.push(u);
        });
      }), e;
    }), P = n(() => Array.isArray(r.value) ? r.value.length : 0), se = n(() => l.allowReadModeSwitch || l.reset && U.value), U = n(() => l.multiple ? r.value.length > 0 : r.value !== ""), ue = n(() => l.label.startsWith("__:") ? Ie(l.label.substring(3)) : l.label), R = () => {
      E.value = m.value.all(), I.value = m.value.filter(g.value), B.value = !1, L("buildVisibleOptions: optionsValue", m.value), L("buildVisibleOptions: optionsHaystack", E.value), L("buildVisibleOptions: visibleOptions", I.value);
    }, Re = () => {
      g.value = "", f.value && R();
    }, z = async () => {
      if (!(!f.value && !l.autoloadResource))
        if (B.value = !1, Ve.value) {
          B.value = !0, l.searchStringResourceParam && (l.resourceData[l.searchStringResourceParam] = g.value);
          const e = await Fe(l.resource, l.resourceData);
          Array.isArray(e.data) && m.value.receiveOptions(e.data), R(), Array.isArray(e.data) && h("results", e.data);
        } else
          R();
    }, ie = () => {
      l.multiple ? (r.value.splice(0, r.value.length), r.value = [...G.value]) : r.value = G.value;
    }, Me = () => l.modelValue, N = (e) => {
      f.value && (Re(), V.value = !V.value, V.value && Q(() => {
        z(), O.value.focus(), Q(() => {
          O.value.focus();
        });
      }));
    };
    D(() => l.readMode, (e) => f.value = !e), D(() => l.modelValue, (e) => {
      L("Updated props.modelValue", e), r.value = e;
    }), D(r, (e) => {
      h("update:modelValue", e), h("selected-option", m.value.findByValue(e)), te.value = !0, Q(() => te.value = !1);
    }), D(g, R), D(() => l.options, (e) => {
      L("Updated props.options", e, m.value), m.value = new ke(e), R();
    }), D(ee, (e) => h("update:picked", e));
    const ne = (e) => {
      if (l.multiple) {
        let u = r.value.findIndex(($) => $ == e.value);
        return typeof u > "u" && (u = -1), u;
      }
      return -1;
    }, De = (e) => {
      if (l.multiple) {
        let u = ne(e);
        u === -1 ? r.value.push(e.value) : r.value.splice(u, 1);
      } else
        r.value = e.value, ee.value = e, V.value = !1;
    }, Te = (e) => l.multiple ? ne(e) !== -1 : e.value == r.value, K = (e) => {
      f.value = !f.value, f.value && focus();
    };
    R(), d({
      reset: ie,
      value: Me
    }), l.autoloadResource && l.resource !== "" && (L("Auto loading Resource", l.resource, l.resourceData, l.autoloadResource), z());
    const M = n(() => l.useResourceSlot ? l.useResourceSlot : l.resource), re = n(() => i.NO_OPTIONS_MESSAGE), de = n(() => l.emptyValueText !== "" ? l.emptyValueText : i.emptyValueText), j = n(() => l.emptyValueSlot !== "" && typeof i.customResourceValueSlots[l.emptyValueSlot] < "u" || i.defaultEmptyValueSlot && typeof i.customResourceValueSlots[i.defaultEmptyValueSlot] < "u"), ce = n(() => i.customResourceValueSlots[l.emptyValueSlot] ?? i.customResourceValueSlots[i.defaultEmptyValueSlot]), W = n(() => M.value !== "" && typeof i.customResourceOptionSlots[M.value] < "u"), J = n(() => i.customResourceOptionSlots[M.value]), pe = n(() => M.value !== "" && typeof i.customResourceValueSlots[M.value] < "u"), fe = n(() => i.customResourceValueSlots[M.value]);
    return (e, u) => {
      const $ = X("lkt-field-text"), Ce = X("lkt-loader"), Le = X("lkt-tooltip");
      return t(), a("div", {
        class: T(Oe.value),
        "data-show-ui": !1,
        ref: (o) => x.value = o
      }, [
        y(v).prefix ? w(e.$slots, "prefix", { key: 0 }) : p("", !0),
        ue.value ? (t(), a("label", {
          key: 1,
          innerHTML: ue.value,
          onClick: N
        }, null, 8, Ge)) : p("", !0),
        f.value ? (t(), a("div", qe, [
          f.value ? (t(), a("select", {
            key: 0,
            ref: (o) => he.value = o,
            id: y(Se),
            onFocus: Y(N, ["stop", "prevent"]),
            onBlur: Y(N, ["stop", "prevent"]),
            multiple: e.multiple,
            style: { height: "0", opacity: "0", width: "0", border: "none", overflow: "hidden", padding: "0" }
          }, null, 40, ze)) : p("", !0),
          e.multiple ? (t(), a("div", {
            key: 2,
            class: "lkt-field__select-value-multiple",
            onClick: N
          }, [
            e.multipleDisplayEdition === "count" ? (t(), a("div", Je, C(P.value), 1)) : (t(), a("ul", {
              key: 1,
              class: T(ge.value)
            }, [
              (t(!0), a(F, null, Z(oe.value, (o) => (t(), a("li", {
                title: o.label
              }, [
                y(v).option ? w(e.$slots, "option", {
                  key: 0,
                  option: o,
                  data: e.slotData
                }) : W.value ? (t(), _(b(J.value), {
                  key: 1,
                  option: o
                }, null, 8, ["option"])) : (t(), a("div", {
                  key: 2,
                  class: "lkt-field-select__read-value",
                  innerHTML: o.label
                }, null, 8, Xe))
              ], 8, Qe))), 256))
            ], 2))
          ])) : (t(), a("div", {
            key: 1,
            class: "lkt-field__select-value",
            onClick: N
          }, [
            H("div", Ke, [
              U.value && y(v).option ? w(e.$slots, "option", {
                key: 0,
                option: A.value,
                data: e.slotData
              }) : U.value && W.value ? (t(), _(b(J.value), {
                key: 1,
                option: A.value
              }, null, 8, ["option"])) : (t(), a("div", {
                key: 2,
                class: "lkt-field-select__read-value",
                innerHTML: q.value
              }, null, 8, We))
            ]),
            u[2] || (u[2] = H("div", { class: "lkt-field-dropdown-angle" }, [
              H("i", { class: "lkt-field-icon-angle-down" })
            ], -1))
          ])),
          ve(Le, {
            ref_key: "dropdownEl",
            ref: _e,
            class: "lkt-field__select-dropdown",
            modelValue: V.value,
            "onUpdate:modelValue": u[1] || (u[1] = (o) => V.value = o),
            referrer: x.value,
            "referrer-width": "",
            "location-x": "left-corner",
            "location-y": e.upperDropdown ? "top" : "bottom"
          }, {
            default: Ne(() => [
              $e(H("div", Ye, [
                ve($, {
                  ref: (o) => O.value = o,
                  modelValue: g.value,
                  "onUpdate:modelValue": u[0] || (u[0] = (o) => g.value = o),
                  placeholder: e.searchPlaceholder,
                  tabindex: -1,
                  class: "lkt-field__select-search",
                  onKeyup: z
                }, null, 8, ["modelValue", "placeholder"])
              ], 512), [
                [He, e.searchable]
              ]),
              B.value ? (t(), _(Ce, { key: 0 })) : p("", !0),
              !e.readonly && !B.value ? (t(), a("ul", Ze, [
                (t(!0), a(F, null, Z(I.value, (o) => (t(), a("li", {
                  class: T(["lkt-field__select-option", { "is-active": e.multiple ? Te(o) : o.value == r.value }]),
                  onClick: Y((_l) => De(o), ["prevent", "stop"])
                }, [
                  y(v).option ? w(e.$slots, "option", {
                    key: 0,
                    option: o,
                    data: e.slotData
                  }) : W.value ? (t(), _(b(J.value), {
                    key: 1,
                    option: o
                  }, null, 8, ["option"])) : (t(), a(F, { key: 2 }, [
                    me(C(o.label), 1)
                  ], 64))
                ], 10, xe))), 256)),
                I.value.length === 0 && (y(v)["no-results"] || re.value) ? (t(), a("li", el, [
                  y(v)["no-results"] ? w(e.$slots, "no-results", { key: 0 }) : (t(), a(F, { key: 1 }, [
                    me(C(re.value), 1)
                  ], 64))
                ])) : p("", !0)
              ])) : p("", !0)
            ]),
            _: 3
          }, 8, ["modelValue", "referrer", "location-y"]),
          se.value ? (t(), a("div", ll, [
            l.reset && U.value ? (t(), a("i", {
              key: 0,
              class: "lkt-field__reset-icon",
              title: e.resetText,
              onClick: ie
            }, null, 8, tl)) : p("", !0),
            e.allowReadModeSwitch ? (t(), a("i", {
              key: 1,
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: K
            }, null, 8, al)) : p("", !0)
          ])) : p("", !0)
        ])) : p("", !0),
        !f.value && !e.multiple ? (t(), a("div", ol, [
          !ae.value && j.value ? (t(), a("div", sl, [
            (t(), _(b(ce.value)))
          ])) : !ae.value && !j.value ? (t(), a("div", ul, C(de.value), 1)) : y(v).value ? w(e.$slots, "value", {
            key: 2,
            option: A.value,
            data: e.slotData
          }) : pe.value ? (t(), _(b(fe.value), {
            key: 3,
            option: A.value
          }, null, 8, ["option"])) : (t(), a("div", {
            key: 4,
            class: T(["lkt-field-select__read-value", "lkt-field-option option-" + A.value.value]),
            innerHTML: q.value,
            title: q.value
          }, null, 10, il)),
          se.value ? (t(), a("div", nl, [
            e.allowReadModeSwitch ? (t(), a("i", {
              key: 0,
              class: "lkt-field__edit-icon",
              title: e.switchEditionMessage,
              onClick: K
            }, null, 8, rl)) : p("", !0)
          ])) : p("", !0)
        ])) : p("", !0),
        !f.value && e.multiple ? (t(), a("div", dl, [
          e.multipleDisplay === "count" ? (t(), a("div", cl, C(P.value), 1)) : P.value === 0 && j.value ? (t(), a("div", pl, [
            (t(), _(b(ce.value)))
          ])) : P.value === 0 && !j.value ? (t(), a("div", fl, C(de.value), 1)) : (t(), a("ul", {
            key: 3,
            class: T(Ee.value)
          }, [
            (t(!0), a(F, null, Z(oe.value, (o) => (t(), a("li", {
              title: o.label,
              class: T("lkt-field-option option-" + o.value)
            }, [
              y(v).value ? w(e.$slots, "value", {
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
              }, null, 8, ml))
            ], 10, vl))), 256))
          ], 2)),
          e.allowReadModeSwitch ? (t(), a("div", yl, [
            H("i", {
              class: "lkt-field__edit-icon",
              title: l.switchEditionMessage,
              onClick: K
            }, null, 8, kl)
          ])) : p("", !0)
        ])) : p("", !0)
      ], 2);
    };
  }
}), Ll = {
  install: (s) => {
    s.component("lkt-field-select") === void 0 && s.component("lkt-field-select", hl), s.component("lkt-loader") === void 0 && s.use(Pe), s.component("lkt-field-text") === void 0 && s.use(Ue);
  }
};
export {
  Cl as debugLktFieldSelect,
  Ll as default,
  Tl as setDefaultSelectEmptyValueSlot,
  gl as setNoOptionsMessage,
  Ml as setResourceOptionSlot,
  Dl as setResourceValueSlot,
  Rl as setSelectEmptyValueMessage
};
