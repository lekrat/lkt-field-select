<script lang="ts">
export default {name: "LktFieldSelect", inheritAttrs: false}
</script>

<script lang="ts" setup>
import {generateRandomString} from "lkt-string-tools";
import {getNoOptionsMessage} from "../functions/settings-functions";
import {SearchOptionsValue} from "../value-objects/SearchOptionsValue";
import {OptionsValue} from "../value-objects/OptionsValue";
import {computed, nextTick, ref, watch} from "vue";
import {existsHTTPResource, httpCall} from "lkt-http-client";
import {Option} from "../types/Option";
import {onBeforeUnmount} from "@vue/runtime-core";

// Emits
const emits = defineEmits(['update:modelValue', 'click-ui']);

// Props
const props = defineProps({
    modelValue: {type: [String, Number, Array], default: ''},

    placeholder: {type: String, default: ''},
    label: {type: String, default: ''},
    palette: {type: String, default: ''},
    name: {type: String, default: generateRandomString(16)},
    valid: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    closeOnSelect: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    readMode: {type: Boolean, default: false},
    allowReadModeSwitch: {type: Boolean, default: false},
    switchEditionMessage: {type: String, default: ''},
    emptyLabel: {type: Boolean, default: false},
    options: {type: Array<Option>, default: (): Option[] => []},
    disabledOptions: {type: Array, default: (): Array<any> => []},
    multiple: {type: Boolean, default: false},
    canTag: {type: Boolean, default: false},
    noOptionsMessage: {type: String, default: getNoOptionsMessage()},
    resource: {type: String, default: (): null => null},
    searchStringResourceParam: {type: String, default: 'query'},
    searchOptions: {type: [Object, Function], default: (): null => null},
    searchPlaceholder: {type: String, default: ''}
});

// Components refs
const searchField = ref(null),
    select = ref(null),
    container = ref(null),
    editable = ref(!props.readMode);

// Constant data
const Identifier = generateRandomString(16);

// Reactive data
const searchOptionsValue = ref(new SearchOptionsValue(props.searchOptions)),
    optionsValue = ref(new OptionsValue(props.options)),
    closeAfterSelect = ref(false),
    originalValue = ref(props.modelValue),
    value = ref(props.modelValue),
    updatedModelValue = ref(false),
    showDropdown = ref(false),
    visibleOptions = ref(optionsValue.value.all()),
    optionsHaystack = ref(optionsValue.value.all()),
    searchString = ref('')
;

if (props.closeOnSelect === null) {
    closeAfterSelect.value = props.multiple === true;
} else {
    closeAfterSelect.value = props.closeOnSelect;
}

// Computed data
const isRemoteSearch = computed(() => existsHTTPResource(props.resource)),
    isValid = computed(() => {
        // @ts-ignore
        if (typeof props.valid === 'function') return props.valid();
        return props.valid;
    }),
    changed = computed(() => value.value !== originalValue.value),
    classes = computed(() => {
        const r = ['lkt-field', 'lkt-field-select'];

        if (props.palette) r.push(`lkt-field--${props.palette}`);
        if (changed.value) r.push('is-changed');
        if (props.multiple) r.push('is-multiple');
        if (props.disabled) r.push('is-disabled');
        if (showDropdown.value) r.push('has-focus');

        r.push(isValid.value ? 'is-valid' : 'is-error');
        r.push(!!props.modelValue ? 'is-filled' : 'is-empty');

        return r.join(' ');
    }),
    computedValueText = computed(() => {
        let r = '';
        optionsHaystack.value.forEach((opt) => {
            if (opt.value == value.value) r = opt.label;
        })
        return r;
    }),
    computedValueTexts = computed(() => {
        let r = [];
        if (props.multiple) {
            optionsHaystack.value.forEach((opt) => {
                //@ts-ignore
                value.value.forEach((v) => {
                    if (v == opt.value) r.push(opt);
                })
            });
        }
        return r;
    });


// Methods
const buildVisibleOptions = () => {
        optionsHaystack.value = optionsValue.value.all();
        visibleOptions.value = optionsValue.value.filter(searchString.value);
    },
    resetSearch = () => {
        searchString.value = '';
        buildVisibleOptions();
    },
    handleFocus = async () => {
        if (isRemoteSearch.value) {
            const opts = searchOptionsValue.value.getOptions();

            if (props.searchStringResourceParam) {
                opts[props.searchStringResourceParam] = searchString.value;
            }

            const results = await httpCall(props.resource, opts);
            optionsValue.value.receiveOptions(results);
            buildVisibleOptions();

        } else {
            buildVisibleOptions();
        }
    },
    handleInput = async (inputEvent: InputEvent) => {
        if (updatedModelValue.value) return;
        const target = inputEvent.target as HTMLInputElement | null;
        searchString.value = target?.value;

        await handleFocus();
    },
    reset = () => {
        value.value = originalValue.value;
    },
    getValue = () => {
        return props.modelValue;
    },
    toggleDropdown = ($event: PointerEvent) => {
        resetSearch();
        onClickOutside($event);
        showDropdown.value = !showDropdown.value;
        if (showDropdown.value) {
            nextTick(() => {
                searchField.value.focus();
                nextTick(() => {
                    searchField.value.focus();
                })
            })
        }
    }

// Watch data
watch(() => props.readMode, (v) => editable.value = !v)
watch(() => props.modelValue, (v) => {
    value.value = v;
})

watch(value, (v) => {
    emits('update:modelValue', v);
    updatedModelValue.value = true;
    nextTick(() => updatedModelValue.value = false);
})

watch(searchString, buildVisibleOptions)

watch(() => props.searchOptions, (v) => {
    searchOptionsValue.value = new SearchOptionsValue(v);
})

watch(() => props.options, (v: Option[]) => {
    optionsValue.value = new OptionsValue(v);
})

buildVisibleOptions();

const optionIndex = (option: Option): number => {
    if (props.multiple) {
        //@ts-ignore
        let r = value.value.findIndex((v) => {
            return v == option.value;
        });
        if (typeof r === 'undefined') r = -1;
        return r;
    }
    return -1;
}

const onClickOption = (option: Option) => {
    if (props.multiple) {
        //@ts-ignore
        let k = optionIndex(option);
        if (k === -1) {
            //@ts-ignore
            value.value.push(option.value);
        } else {
            //@ts-ignore
            value.value.splice(k, 1);
        }
    } else {
        value.value = option.value;
        showDropdown.value = false;
    }
}

const optionIsActive = (option: Option): boolean => {
    if (props.multiple) {
        return optionIndex(option) !== -1;
    }
    return option.value == value.value
}

const onClickOutside = (e: PointerEvent) => {
        if (!container.value.contains(e.target)) {
            resetSearch();
            showDropdown.value = false;
            return;
        }
    },
    onClickSwitchEdition = ($event: any) => {
        editable.value = !editable.value;
        if (editable.value) focus();
    };

window.addEventListener('click', onClickOutside);

onBeforeUnmount(() => {
    window.removeEventListener('click', onClickOutside);
})

defineExpose({
    reset,
    value: getValue,
});

</script>

<template>
    <div v-bind:class="classes"
         v-bind:data-show-ui="false"
         :ref="(el) => container = el"
    >
        <slot name="prefix"></slot>

        <select v-if="editable" :ref="(el) => select = el" :id="Identifier" v-on:focus.stop.prevent="toggleDropdown"
                v-on:blur.stop.prevent="toggleDropdown" :multiple="multiple"
                style="height: 0; opacity: 0; width: 0;"></select>

        <div v-if="editable" class="lkt-field__select">
            <div v-if="!multiple" class="lkt-field__select-value" v-on:click="toggleDropdown">{{
                    computedValueText
                }}
            </div>
            <div v-else class="lkt-field__select-value-multiple" v-on:click="toggleDropdown">
                <div v-for="opt in computedValueTexts" class="lkt-field-select-value-datum" v-html="opt.label"
                     :title="opt.label"></div>
            </div>
            <div class="lkt-field__select-dropdown" v-if="showDropdown">
                <div class="lkt-field__select-search-container">
                    <lkt-field-text :ref="(el) => searchField = el"
                                    v-model="searchString"
                                    :placeholder="searchPlaceholder"
                                    :tabindex="-1"
                                    class="lkt-field__select-search"></lkt-field-text>
                </div>
                <ul class="lkt-field__select-options" v-if="!readonly">
                    <li class="lkt-field__select-option"
                        v-for="option in visibleOptions"
                        :class="{'is-active': multiple ? optionIsActive(option) : option.value == value}"
                        v-on:click.prevent.stop="onClickOption(option)">{{ option.label }}
                    </li>
                </ul>
            </div>
        </div>

        <div v-if="!editable && !multiple" class="lkt-field-select__read">
            <div class="lkt-field-select__read-value" v-html="computedValueText" :title="computedValueText"></div>
            <div v-if="allowReadModeSwitch" class="lkt-field__state">
                <i class="lkt-field__edit-icon" :title="props.switchEditionMessage"
                   v-on:click="onClickSwitchEdition"></i>
            </div>
        </div>

        <div v-if="!editable && multiple" class="lkt-field-select__read-multiple">
            <div v-for="opt in computedValueTexts" class="lkt-field-select__read-value" v-html="opt.label"
                 :title="opt.label"></div>
            <div v-if="allowReadModeSwitch" class="lkt-field__state">
                <i class="lkt-field__edit-icon" :title="props.switchEditionMessage"
                   v-on:click="onClickSwitchEdition"></i>
            </div>
        </div>

        <label v-html="label" v-on:click.stop.prevent="toggleDropdown"></label>
    </div>
</template>