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
    select = ref(null);

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
    })


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
    toggleDropdown = () => {
        resetSearch();
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

const onClickOption = (option: Option) => {
    value.value = option.value;
    showDropdown.value = false;
}

const onClickOutside = (e) => {
    const checkClasses = [
        'is-select',
        'lkt-field__select',
        'lkt-field__select-value',
        'lkt-field__select-dropdown',
        'lkt-field__select-search-container',
        'lkt-field__select-options',
        'lkt-field__select-option',
        'lkt-field__select-search',
    ];
    const target = e.target;
    let included = false;
    checkClasses.forEach((className) => {
        if (target.className.includes(className) || target.parentElement && target.parentElement.className.includes(className)) included = true;
    });

    if (!included) {
        resetSearch();
        showDropdown.value = false;
    }
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
    >
        <slot name="prefix"></slot>

        <select :ref="(el) => select = el" :id="Identifier" v-on:focus.stop.prevent="toggleDropdown"
                v-on:blur.stop.prevent="toggleDropdown" style="height: 0; opacity: 0; width: 0;"></select>

        <div class="lkt-field__select">
            <div class="lkt-field__select-value" v-on:click.stop.prevent="toggleDropdown">{{ computedValueText }}</div>
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
                        :class="{'is-active': option.value == value}"
                        v-on:click.prevent.stop="onClickOption(option)">{{ option.label }}
                    </li>
                </ul>
            </div>
        </div>

        <label v-html="label" v-on:click.stop.prevent="toggleDropdown"></label>
    </div>
</template>