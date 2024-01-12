<script lang="ts">
export default {name: "LktFieldSelect", inheritAttrs: false}
</script>

<script lang="ts" setup>
import {generateRandomString} from "lkt-string-tools";
import {getNoOptionsMessage} from "../functions/settings-functions";
import {OptionsValue} from "../value-objects/OptionsValue";
import {computed, nextTick, ref, useSlots, watch} from "vue";
import {httpCall, HTTPResponse} from "lkt-http-client";
import {Option} from "../types/Option";
import {onBeforeUnmount} from "@vue/runtime-core";
import {Settings} from "../settings/Settings";

// Emits
const emits = defineEmits(['update:modelValue', 'click-ui']);

// Props
const props = defineProps({
    modelValue: {type: [String, Number, Array], default: ''},

    class: {type: String, default: ''},
    placeholder: {type: String, default: ''},
    label: {type: String, default: ''},
    palette: {type: String, default: ''},
    name: {type: String, default: generateRandomString(16)},
    valid: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    closeOnSelect: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    readMode: {type: Boolean, default: false},
    searchable: {type: Boolean, default: false},
    upperDropdown: {type: Boolean, default: false},
    choiceDropdown: {type: Boolean, default: false},
    allowReadModeSwitch: {type: Boolean, default: false},
    switchEditionMessage: {type: String, default: ''},
    emptyLabel: {type: Boolean, default: false},
    options: {type: Array<Option>, default: (): Option[] => []},
    disabledOptions: {type: Array, default: (): Array<any> => []},
    multiple: {type: Boolean, default: false},
    canTag: {type: Boolean, default: false},
    noOptionsMessage: {type: String, default: getNoOptionsMessage()},
    resource: {type: String, default: ''},
    resourceData: {type: [Object], default: () => ({})},
    searchStringResourceParam: {type: String, default: 'query'},
    searchPlaceholder: {type: String, default: ''},
    useResourceSlot: {type: String, default: ''},
    multipleDisplay: {type: String, default: 'list'}, // list || inline
    multipleDisplayEdition: {type: String, default: 'inline'}, // list || inline
});

const slots = useSlots();

// Components refs
const searchField = ref(null),
    select = ref(null),
    container = ref(null),
    editable = ref(!props.readMode);

// Constant data
const Identifier = generateRandomString(16);

// Reactive data
const optionsValue = ref(new OptionsValue(props.options)),
    closeAfterSelect = ref(false),
    originalValue = ref(props.modelValue),
    value = ref(props.modelValue),
    updatedModelValue = ref(false),
    isLoading = ref(false),
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
const isRemoteSearch = computed(() => props.resource !== ''),
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
        if (props.class) r.push(props.class);
        if (props.multiple) r.push('is-multiple');
        if (props.disabled) r.push('is-disabled');
        if (props.upperDropdown && !props.choiceDropdown) r.push('lkt-field-select-upper-dropdown');
        if (props.choiceDropdown) r.push('lkt-field-select-choice-dropdown');
        if (showDropdown.value) r.push('has-focus');

        r.push(isValid.value ? 'is-valid' : 'is-error');
        r.push(!!props.modelValue ? 'is-filled' : 'is-empty');

        return r.join(' ');
    }),
    multipleValuesClasses = computed(() => {
        const r = [];

        r.push(`lkt-field-select-read--${props.multipleDisplay}`);

        return r.join(' ');
    }),
    multipleValuesEditionClasses = computed(() => {
        const r = [];

        r.push(`lkt-field-select-read--${props.multipleDisplayEdition}`);

        return r.join(' ');
    }),
    selectedOption = computed(() => {
        let r = {};
        optionsHaystack.value.forEach((opt) => {
            if (opt.value == value.value) r = opt;
        })
        return r;
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
        isLoading.value = false;
    },
    resetSearch = () => {
        searchString.value = '';
        buildVisibleOptions();
    },
    handleFocus = async () => {
        isLoading.value = false;
        if (isRemoteSearch.value) {
            isLoading.value = true;
            const opts = JSON.parse(JSON.stringify(props.resourceData));

            if (props.searchStringResourceParam) {
                opts[props.searchStringResourceParam] = searchString.value;
            }

            const results: HTTPResponse = await httpCall(props.resource, opts);
            //@ts-ignore
            optionsValue.value.receiveOptions(results.data);
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
                handleFocus();
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

watch(() => props.options, (v: Option[]) => {
    optionsValue.value = new OptionsValue(v);
})

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
buildVisibleOptions();

onBeforeUnmount(() => {
    window.removeEventListener('click', onClickOutside);
})

defineExpose({
    reset,
    value: getValue,
});

const resourceSlot = computed(() => {
    if (props.useResourceSlot) return props.useResourceSlot
    return props.resource;
})

const noOptionsMessage = computed(() => Settings.NO_OPTIONS_MESSAGE);


const hasCustomResourceOptionSlot = computed(() => resourceSlot.value !== '' && typeof Settings.customResourceOptionSlots[resourceSlot.value] !== 'undefined'),
    customResourceOptionSlot = computed(() => Settings.customResourceOptionSlots[resourceSlot.value]),
    hasCustomResourceValueSlot = computed(() => resourceSlot.value !== '' && typeof Settings.customResourceValueSlots[resourceSlot.value] !== 'undefined'),
    customResourceValueSlot = computed(() => Settings.customResourceValueSlots[resourceSlot.value]);

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
            <div v-if="!multiple" class="lkt-field__select-value" v-on:click="toggleDropdown">
                <template v-if="slots['option']">
                    <slot name="option"
                          v-bind:option="selectedOption"
                    ></slot>
                </template>
                <component v-if="hasCustomResourceOptionSlot" v-bind:is="customResourceOptionSlot"
                           v-bind:option="selectedOption"></component>
                <template v-else>
                    <div class="lkt-field-select__read-value" v-html="computedValueText"></div>
                </template>
            </div>
            <div v-else class="lkt-field__select-value-multiple" v-on:click="toggleDropdown">
                <ul :class="multipleValuesEditionClasses">
                    <li v-for="opt in computedValueTexts" :title="opt.label">
                        <template v-if="slots['option']">
                            <slot name="option"
                                  v-bind:option="opt"
                            ></slot>
                        </template>
                        <component v-else-if="hasCustomResourceOptionSlot" v-bind:is="customResourceOptionSlot"
                                   v-bind:option="opt"></component>
                        <template v-else>
                            <div class="lkt-field-select__read-value" v-html="opt.label"></div>
                        </template>
                    </li>
                </ul>
            </div>
            <div class="lkt-field__select-dropdown" v-if="showDropdown">
                <div class="lkt-field__select-search-container" v-show="searchable">
                    <lkt-field-text :ref="(el) => searchField = el"
                                    v-model="searchString"
                                    :placeholder="searchPlaceholder"
                                    :tabindex="-1"
                                    class="lkt-field__select-search"
                                    v-on:keyup="handleFocus"
                    ></lkt-field-text>
                </div>
                <lkt-loader v-if="isLoading"></lkt-loader>
                <ul class="lkt-field__select-options" v-if="!readonly && !isLoading">
                    <li class="lkt-field__select-option"
                        v-for="option in visibleOptions"
                        :class="{'is-active': multiple ? optionIsActive(option) : option.value == value}"
                        v-on:click.prevent.stop="onClickOption(option)">
                        <template v-if="slots.option">
                            <slot name="option"
                                  v-bind:option="option"
                            ></slot>
                        </template>
                        <component v-if="hasCustomResourceOptionSlot" v-bind:is="customResourceOptionSlot"
                                   v-bind:option="option"></component>
                        <template v-else>
                            {{ option.label }}
                        </template>
                    </li>
                    <li v-if="visibleOptions.length === 0 && (slots['no-results'] || noOptionsMessage)"
                        class="lkt-field__select-option">
                        <template v-if="slots['no-results']">
                            <slot name="no-results"></slot>
                        </template>
                        <template v-else>
                            {{ noOptionsMessage }}
                        </template>
                    </li>
                </ul>
            </div>
        </div>

        <div v-if="!editable && !multiple" class="lkt-field-select__read">
            <template v-if="slots['value']">
                <slot name="value"
                      v-bind:option="selectedOption"
                ></slot>
            </template>
            <component v-else-if="hasCustomResourceValueSlot" v-bind:is="customResourceValueSlot"
                       v-bind:option="selectedOption"></component>
            <template v-else>
                <div class="lkt-field-select__read-value" v-html="computedValueText" :title="computedValueText"></div>
            </template>

            <div v-if="allowReadModeSwitch" class="lkt-field__state">
                <i class="lkt-field__edit-icon" :title="props.switchEditionMessage"
                   v-on:click="onClickSwitchEdition"></i>
            </div>
        </div>

        <div v-if="!editable && multiple" class="lkt-field-select__read-multiple">
            <ul :class="multipleValuesClasses">
                <li v-for="opt in computedValueTexts" :title="opt.label">
                    <template v-if="slots['value']">
                        <slot name="value"
                              v-bind:option="opt"
                        ></slot>
                    </template>
                    <component v-else-if="hasCustomResourceValueSlot" v-bind:is="customResourceValueSlot"
                               v-bind:option="opt"></component>
                    <template v-else>
                        <div class="lkt-field-select__read-value" v-html="opt.label"></div>
                    </template>
                </li>
            </ul>
            <div v-if="allowReadModeSwitch" class="lkt-field__state">
                <i class="lkt-field__edit-icon" :title="props.switchEditionMessage"
                   v-on:click="onClickSwitchEdition"></i>
            </div>
        </div>

        <label v-if="label" v-html="label" v-on:click.stop.prevent="toggleDropdown"></label>
    </div>
</template>