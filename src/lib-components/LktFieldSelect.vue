<script lang="ts" setup>
import {generateRandomString} from "lkt-string-tools";
import {getNoOptionsMessage} from "../functions/settings-functions";
import {OptionsValue} from "../value-objects/OptionsValue";
import {ComponentPublicInstance, computed, nextTick, onMounted, ref, useSlots, watch} from "vue";
import {httpCall, HTTPResponse} from "lkt-http-client";
import {Option} from "../types/Option";
import {onBeforeUnmount} from "@vue/runtime-core";
import {Settings} from "../settings/Settings";
import {LktObject} from "lkt-ts-interfaces";
import {debug} from "../functions/debug";
import {__} from "lkt-i18n";

// Emits
const emits = defineEmits(['update:modelValue', 'click-ui', 'selected-option', 'results']);

// Props
const props = withDefaults(defineProps<{
    modelValue: string | number | Option[]
    class: string
    placeholder: string
    label: string
    palette: string
    name: string
    valid: boolean
    disabled: boolean
    closeOnSelect: boolean
    readonly: boolean
    readMode: boolean
    searchable: boolean
    upperDropdown: boolean
    choiceDropdown: boolean
    allowReadModeSwitch: boolean
    switchEditionMessage: string
    emptyLabel: boolean
    options: Option[]
    multiple: boolean
    reset?: boolean
    resetMessage?: string
    tags?: boolean
    autoloadResource?: boolean
    noOptionsMessage?: string
    resource?: string
    resourceData: LktObject
    slotData: LktObject
    searchStringResourceParam: 'query' | string
    searchPlaceholder: string
    useResourceSlot: string
    multipleDisplay: 'list' | 'inline' | 'count'
    multipleDisplayEdition: 'list' | 'inline' | 'count'
    mandatory: boolean
    mandatoryMessage: string
    emptyValueSlot: string
    emptyValueText: string
}>(), {
    modelValue: '',
    class: '',
    placeholder: '',
    label: '',
    palette: '',
    name: generateRandomString(16),
    valid: false,
    disabled: false,
    closeOnSelect: false,
    readonly: false,
    reset: false,
    resetMessage: '',
    readMode: false,
    searchable: false,
    upperDropdown: false,
    choiceDropdown: false,
    allowReadModeSwitch: false,
    switchEditionMessage: '',
    emptyLabel: false,
    options: () => [],
    multiple: false,
    tags: false,
    autoloadResource: false,
    noOptionsMessage: getNoOptionsMessage(),
    resource: '',
    resourceData: () => ({}),
    slotData: () => ({}),
    searchStringResourceParam: 'query',
    searchPlaceholder: '',
    useResourceSlot: '',
    multipleDisplay: 'list',
    multipleDisplayEdition: 'inline',
    mandatory: false,
    mandatoryMessage: 'Mandatory',
    emptyValueSlot: '',
    emptyValueText: '',
});

const slots = useSlots();

// Components refs
const searchField = ref(<Element | ComponentPublicInstance | null>null),
    select = ref(<Element | ComponentPublicInstance | null>null),
    container = ref(<Element | ComponentPublicInstance | null>null),
    dropdownEl = ref(<Element | ComponentPublicInstance | null>null),
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
    searchString = ref(''),
    dropdownStyles = ref('')
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
        if (props.tags) r.push('with-tags');
        if (props.upperDropdown && !props.choiceDropdown) r.push('lkt-field-select-upper-dropdown');
        if (props.choiceDropdown) r.push('lkt-field-select-choice-dropdown');
        if (props.mandatory && editable.value) r.push('is-mandatory-field');
        if (showDropdown.value) r.push('has-focus');
        if (props.multiple && editable.value && props.multipleDisplayEdition === 'count') r.push('size-sm');
        if (props.multiple && !editable.value && props.multipleDisplay === 'count') r.push('size-sm');

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
    hasSelectedOption = computed(() => {
        let r = false;
        optionsHaystack.value.forEach((opt) => {
            if (opt.value == value.value) r = true;
        })
        return r;
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
        let r: Option[] = [];
        if (props.multiple) {
            optionsHaystack.value.forEach((opt) => {
                //@ts-ignore
                value.value.forEach((v) => {
                    if (v == opt.value) r.push(opt);
                })
            });
        }
        return r;
    }),
    amountOfSelectedOptions = computed(() => {
        if (Array.isArray(value.value)) return value.value.length;
        return 0;
    }),
    showInfoUi = computed(() => {
        return props.allowReadModeSwitch || (props.reset && isFilled.value);
        // return props.mandatory || props.allowReadModeSwitch;
        // return props.reset || props.infoMessage !== '' || props.errorMessage !== '' || (props.isPassword && props.showPassword);
    }),

    isFilled = computed(() => {
        if (props.multiple) {
            return value.value.length > 0;
        }
        return value.value !== '';
    }),
    computedLabel = computed(() => {
        if (props.label.startsWith('__:')) {
            return __(props.label.substring(3));
        }
        return props.label;
    });


// Methods

const calcDropdownStyle = () => {
    const rect = container.value.getBoundingClientRect();

    let top = rect.top + container.value.offsetHeight;

    let styles = [
        'position: fixed',
        'transform: none',
        'transition: none',
        'left: ' + rect.left + 'px',
        'width: ' + container.value.offsetWidth + 'px',
    ];

    if (props.upperDropdown) {
        let bottom = window.outerHeight - rect.bottom - container.value.offsetHeight;
        // console.log('calculated Bottom', window.innerHeight - rect.top - container.value.offsetHeight);
        // console.log('calculated Bottom2', window.outerHeight - rect.top - container.value.offsetHeight);
        // console.log('calculated Bottom3', window.innerHeight - rect.bottom - container.value.offsetHeight);
        // console.log('calculated Bottom4', window.outerHeight - rect.bottom - container.value.offsetHeight);

        styles.push('bottom: ' + bottom + 'px');
    } else {
        styles.push('top: ' + top + 'px');
    }

    dropdownStyles.value = styles.join(';');
}

const buildVisibleOptions = () => {
        optionsHaystack.value = optionsValue.value.all();
        visibleOptions.value = optionsValue.value.filter(searchString.value);
        isLoading.value = false;
        debug('buildVisibleOptions: optionsValue', optionsValue.value)
        debug('buildVisibleOptions: optionsHaystack', optionsHaystack.value)
        debug('buildVisibleOptions: visibleOptions', visibleOptions.value)
    },
    resetSearch = () => {
        searchString.value = '';
        if (!editable.value) return;
        buildVisibleOptions();
    },
    handleFocus = async () => {
        if (!editable.value && !props.autoloadResource) return;

        isLoading.value = false;
        if (isRemoteSearch.value) {
            isLoading.value = true;
            if (props.searchStringResourceParam) props.resourceData[props.searchStringResourceParam] = searchString.value;
            const results: HTTPResponse = await httpCall(props.resource, props.resourceData);
            //@ts-ignore
            optionsValue.value.receiveOptions(results.data);
            buildVisibleOptions();
            emits('results', results.data);

        } else {
            buildVisibleOptions();
        }
    },
    handleInput = async (inputEvent: InputEvent) => {
        if (updatedModelValue.value) return;
        const target = inputEvent.target as HTMLInputElement | null;
        searchString.value = String(target?.value);

        await handleFocus();
    },
    resetValue = () => {
        if (props.multiple) {
            value.value.splice(0, value.value.length);
            value.value = [...originalValue.value];
        } else {
            value.value = originalValue.value;
        }
    },
    getValue = () => {
        return props.modelValue;
    },
    toggleDropdown = ($event: PointerEvent) => {
        if (!editable.value) return;
        resetSearch();
        onClickOutside($event);
        calcDropdownStyle();
        showDropdown.value = !showDropdown.value;
        if (showDropdown.value) {
            nextTick(() => {
                handleFocus();
                // @ts-ignore
                searchField.value.focus();
                nextTick(() => {
                    // @ts-ignore
                    searchField.value.focus();
                })
            })
        }
    }

// Watch data
watch(() => props.readMode, (v) => editable.value = !v)
watch(() => props.modelValue, (v) => {
    debug('Updated props.modelValue', v);
    value.value = v;
})

watch(value, (v) => {
    emits('update:modelValue', v);
    emits('selected-option', optionsValue.value.findByValue(v));
    updatedModelValue.value = true;
    nextTick(() => updatedModelValue.value = false);
})

watch(searchString, buildVisibleOptions)

watch(() => props.options, (v: Option[]) => {
    debug('Updated props.options', v, optionsValue.value);
    optionsValue.value = new OptionsValue(v);
    buildVisibleOptions();
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
        //@ts-ignore
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

buildVisibleOptions();

defineExpose({
    reset: resetValue,
    value: getValue,
});

if (props.autoloadResource && props.resource !== '') {
    debug('Auto loading Resource', props.resource, props.resourceData, props.autoloadResource);
    handleFocus();
}

const resourceSlot = computed(() => {
    if (props.useResourceSlot) return props.useResourceSlot
    return props.resource;
})

const noOptionsMessage = computed(() => Settings.NO_OPTIONS_MESSAGE),
    computedEmptyValueText = computed(() => props.emptyValueText !== '' ? props.emptyValueText : Settings.emptyValueText);

const hasEmptyValueSlot = computed(() => {
        return (props.emptyValueSlot !== '' && typeof Settings.customResourceValueSlots[props.emptyValueSlot] !== 'undefined') || (Settings.defaultEmptyValueSlot && typeof Settings.customResourceValueSlots[Settings.defaultEmptyValueSlot] !== 'undefined');
    }),
    emptyValueSlot = computed(() => {
        return Settings.customResourceValueSlots[props.emptyValueSlot] ?? Settings.customResourceValueSlots[Settings.defaultEmptyValueSlot];
    })


const hasCustomResourceOptionSlot = computed(() => resourceSlot.value !== '' && typeof Settings.customResourceOptionSlots[resourceSlot.value] !== 'undefined'),
    customResourceOptionSlot = computed(() => Settings.customResourceOptionSlots[resourceSlot.value]),
    hasCustomResourceValueSlot = computed(() => resourceSlot.value !== '' && typeof Settings.customResourceValueSlots[resourceSlot.value] !== 'undefined'),
    customResourceValueSlot = computed(() => Settings.customResourceValueSlots[resourceSlot.value]);

onMounted(() => {
    window.addEventListener('click', onClickOutside);
    window.addEventListener('scroll', calcDropdownStyle);
    window.addEventListener('resize', calcDropdownStyle);

    let modalScroller = container.value.closest(".lkt-modal");
    if (modalScroller) {
        modalScroller.addEventListener('scroll', calcDropdownStyle);
    }
})

onBeforeUnmount(() => {
    window.removeEventListener('click', onClickOutside);
    window.removeEventListener('scroll', calcDropdownStyle);
    window.removeEventListener('resize', calcDropdownStyle);

    let modalScroller = container.value.closest(".lkt-modal");
    if (modalScroller) {
        modalScroller.removeEventListener('scroll', calcDropdownStyle);
    }
})

</script>

<template>
    <div v-bind:class="classes"
         v-bind:data-show-ui="false"
         :ref="(el) => container = el"
    >
        <slot v-if="slots.prefix" name="prefix"></slot>

        <label v-if="computedLabel" v-html="computedLabel" v-on:click.stop.prevent="toggleDropdown"></label>

        <div v-if="editable" class="lkt-field-main lkt-field-main--select">
            <select v-if="editable" :ref="(el: Element) => select = el" :id="Identifier"
                    v-on:focus.stop.prevent="toggleDropdown"
                    v-on:blur.stop.prevent="toggleDropdown" :multiple="multiple"
                    style="height: 0; opacity: 0; width: 0; border: none; overflow: hidden; padding: 0;"></select>

            <div v-if="!multiple" class="lkt-field__select-value" v-on:click="toggleDropdown">
                <div class="lkt-field-picked-option">
                    <template v-if="isFilled && slots['option']">
                        <slot name="option"
                              v-bind:option="selectedOption"
                              v-bind:data="slotData"
                        />
                    </template>
                    <component v-else-if="isFilled && hasCustomResourceOptionSlot" v-bind:is="customResourceOptionSlot"
                               v-bind:option="selectedOption"/>
                    <template v-else>
                        <div class="lkt-field-select__read-value" v-html="computedValueText"></div>
                    </template>
                </div>

                <div class="lkt-field-dropdown-angle">
                    <i class="lkt-field-icon-angle-down"/>
                </div>
            </div>
            <div v-else class="lkt-field__select-value-multiple" v-on:click="toggleDropdown">

                <div v-if="multipleDisplayEdition === 'count'">
                    {{ amountOfSelectedOptions }}
                </div>

                <ul v-else :class="multipleValuesEditionClasses">
                    <li v-for="opt in computedValueTexts" :title="opt.label">
                        <template v-if="slots['option']">
                            <slot name="option"
                                  v-bind:option="opt"
                                  v-bind:data="slotData"
                            />
                        </template>
                        <component v-else-if="hasCustomResourceOptionSlot" v-bind:is="customResourceOptionSlot"
                                   v-bind:option="opt"/>
                        <template v-else>
                            <div class="lkt-field-select__read-value" v-html="opt.label"></div>
                        </template>
                    </li>
                </ul>
            </div>
            <div ref="dropdownEl" class="lkt-field__select-dropdown" v-show="showDropdown" :style="dropdownStyles">
                <div class="lkt-field__select-search-container" v-show="searchable">
                    <lkt-field-text :ref="(el: ComponentPublicInstance) => searchField = el"
                                    v-model="searchString"
                                    :placeholder="searchPlaceholder"
                                    :tabindex="-1"
                                    class="lkt-field__select-search"
                                    v-on:keyup="handleFocus"
                    />
                </div>
                <lkt-loader v-if="isLoading"/>
                <ul class="lkt-field__select-options" v-if="!readonly && !isLoading">
                    <li class="lkt-field__select-option"
                        v-for="option in visibleOptions"
                        :class="{'is-active': multiple ? optionIsActive(option) : option.value == value}"
                        v-on:click.prevent.stop="onClickOption(option)">
                        <template v-if="slots.option">
                            <slot name="option"
                                  v-bind:option="option"
                                  v-bind:data="slotData"
                            />
                        </template>
                        <component v-if="hasCustomResourceOptionSlot" v-bind:is="customResourceOptionSlot"
                                   v-bind:option="option"/>
                        <template v-else>
                            {{ option.label }}
                        </template>
                    </li>
                    <li v-if="visibleOptions.length === 0 && (slots['no-results'] || noOptionsMessage)"
                        class="lkt-field__select-option">
                        <template v-if="slots['no-results']">
                            <slot name="no-results"/>
                        </template>
                        <template v-else>
                            {{ noOptionsMessage }}
                        </template>
                    </li>
                </ul>
            </div>

            <div v-if="showInfoUi" class="lkt-field__state">
                <!--                <i v-if="mandatory" class="lkt-field__mandatory-icon" :title="mandatoryMessage"></i>-->
                <i v-if="props.reset && isFilled" class="lkt-field__reset-icon" :title="resetText"
                   v-on:click="resetValue"></i>
                <i v-if="allowReadModeSwitch" class="lkt-field__edit-icon" :title="switchEditionMessage"
                   v-on:click="onClickSwitchEdition"></i>
            </div>
        </div>

        <div v-if="!editable && !multiple" class="lkt-field-select__read">
            <div class="lkt-field-select-empty" v-if="!hasSelectedOption && hasEmptyValueSlot">
                <component v-bind:is="emptyValueSlot"/>
            </div>
            <div class="lkt-field-select-empty" v-else-if="!hasSelectedOption && !hasEmptyValueSlot">
                {{ computedEmptyValueText }}
            </div>

            <template v-else-if="slots['value']">
                <slot name="value"
                      v-bind:option="selectedOption"
                      v-bind:data="slotData"
                ></slot>
            </template>
            <component v-else-if="hasCustomResourceValueSlot" v-bind:is="customResourceValueSlot"
                       v-bind:option="selectedOption"></component>
            <template v-else>
                <div class="lkt-field-select__read-value" :class="'lkt-field-option option-' + selectedOption.value" v-html="computedValueText" :title="computedValueText"></div>
            </template>

            <div v-if="showInfoUi" class="lkt-field__state">
                <i v-if="allowReadModeSwitch" class="lkt-field__edit-icon" :title="switchEditionMessage"
                   v-on:click="onClickSwitchEdition"></i>
            </div>
        </div>

        <div v-if="!editable && multiple" class="lkt-field-select__read-multiple">
            <div v-if="multipleDisplay === 'count'">
                {{ amountOfSelectedOptions }}
            </div>
            <div class="lkt-field-select-empty" v-else-if="amountOfSelectedOptions === 0 && hasEmptyValueSlot">
                <component v-bind:is="emptyValueSlot"/>
            </div>
            <div class="lkt-field-select-empty" v-else-if="amountOfSelectedOptions === 0 && !hasEmptyValueSlot">
                {{ computedEmptyValueText }}
            </div>
            <ul v-else :class="multipleValuesClasses">
                <li v-for="opt in computedValueTexts" :title="opt.label" :class="'lkt-field-option option-' + opt.value">
                    <template v-if="slots['value']">
                        <slot name="value"
                              v-bind:option="opt"
                              v-bind:data="slotData"
                        ></slot>
                    </template>
                    <component v-else-if="hasCustomResourceValueSlot" v-bind:is="customResourceValueSlot"
                               v-bind:option="opt" v-bind:data="slotData"></component>
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
    </div>
</template>