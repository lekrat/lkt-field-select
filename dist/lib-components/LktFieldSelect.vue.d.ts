import { Option } from "../types/Option";
import { LktObject } from "lkt-ts-interfaces";
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: string | number | Option[];
    class: string;
    placeholder: string;
    label: string;
    palette: string;
    name: string;
    valid: boolean;
    disabled: boolean;
    closeOnSelect: boolean;
    readonly: boolean;
    readMode: boolean;
    searchable: boolean;
    upperDropdown: boolean;
    choiceDropdown: boolean;
    allowReadModeSwitch: boolean;
    switchEditionMessage: string;
    emptyLabel: boolean;
    options: Option[];
    multiple: boolean;
    reset?: boolean | undefined;
    resetMessage?: string | undefined;
    tags?: boolean | undefined;
    autoloadResource?: boolean | undefined;
    noOptionsMessage?: string | undefined;
    resource?: string | undefined;
    resourceData: LktObject;
    slotData: LktObject;
    searchStringResourceParam: string;
    searchPlaceholder: string;
    useResourceSlot: string;
    multipleDisplay: "inline" | "list" | "count";
    multipleDisplayEdition: "inline" | "list" | "count";
    mandatory: boolean;
    mandatoryMessage: string;
    emptyValueSlot: string;
    emptyValueText: string;
}>, {
    modelValue: string;
    class: string;
    placeholder: string;
    label: string;
    palette: string;
    name: string;
    valid: boolean;
    disabled: boolean;
    closeOnSelect: boolean;
    readonly: boolean;
    reset: boolean;
    resetMessage: string;
    readMode: boolean;
    searchable: boolean;
    upperDropdown: boolean;
    choiceDropdown: boolean;
    allowReadModeSwitch: boolean;
    switchEditionMessage: string;
    emptyLabel: boolean;
    options: () => never[];
    multiple: boolean;
    tags: boolean;
    autoloadResource: boolean;
    noOptionsMessage: string;
    resource: string;
    resourceData: () => {};
    slotData: () => {};
    searchStringResourceParam: string;
    searchPlaceholder: string;
    useResourceSlot: string;
    multipleDisplay: string;
    multipleDisplayEdition: string;
    mandatory: boolean;
    mandatoryMessage: string;
    emptyValueSlot: string;
    emptyValueText: string;
}>, {
    reset: () => void;
    value: () => string | number | Option[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    results: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "click-ui": (...args: any[]) => void;
    "selected-option": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue: string | number | Option[];
    class: string;
    placeholder: string;
    label: string;
    palette: string;
    name: string;
    valid: boolean;
    disabled: boolean;
    closeOnSelect: boolean;
    readonly: boolean;
    readMode: boolean;
    searchable: boolean;
    upperDropdown: boolean;
    choiceDropdown: boolean;
    allowReadModeSwitch: boolean;
    switchEditionMessage: string;
    emptyLabel: boolean;
    options: Option[];
    multiple: boolean;
    reset?: boolean | undefined;
    resetMessage?: string | undefined;
    tags?: boolean | undefined;
    autoloadResource?: boolean | undefined;
    noOptionsMessage?: string | undefined;
    resource?: string | undefined;
    resourceData: LktObject;
    slotData: LktObject;
    searchStringResourceParam: string;
    searchPlaceholder: string;
    useResourceSlot: string;
    multipleDisplay: "inline" | "list" | "count";
    multipleDisplayEdition: "inline" | "list" | "count";
    mandatory: boolean;
    mandatoryMessage: string;
    emptyValueSlot: string;
    emptyValueText: string;
}>, {
    modelValue: string;
    class: string;
    placeholder: string;
    label: string;
    palette: string;
    name: string;
    valid: boolean;
    disabled: boolean;
    closeOnSelect: boolean;
    readonly: boolean;
    reset: boolean;
    resetMessage: string;
    readMode: boolean;
    searchable: boolean;
    upperDropdown: boolean;
    choiceDropdown: boolean;
    allowReadModeSwitch: boolean;
    switchEditionMessage: string;
    emptyLabel: boolean;
    options: () => never[];
    multiple: boolean;
    tags: boolean;
    autoloadResource: boolean;
    noOptionsMessage: string;
    resource: string;
    resourceData: () => {};
    slotData: () => {};
    searchStringResourceParam: string;
    searchPlaceholder: string;
    useResourceSlot: string;
    multipleDisplay: string;
    multipleDisplayEdition: string;
    mandatory: boolean;
    mandatoryMessage: string;
    emptyValueSlot: string;
    emptyValueText: string;
}>>> & {
    onResults?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onClick-ui"?: ((...args: any[]) => any) | undefined;
    "onSelected-option"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    label: string;
    reset: boolean;
    disabled: boolean;
    multiple: boolean;
    options: Option[];
    readonly: boolean;
    class: string;
    mandatory: boolean;
    placeholder: string;
    resource: string;
    modelValue: string | number | Option[];
    palette: string;
    valid: boolean;
    closeOnSelect: boolean;
    readMode: boolean;
    searchable: boolean;
    upperDropdown: boolean;
    choiceDropdown: boolean;
    allowReadModeSwitch: boolean;
    switchEditionMessage: string;
    emptyLabel: boolean;
    resetMessage: string;
    tags: boolean;
    autoloadResource: boolean;
    noOptionsMessage: string;
    resourceData: LktObject;
    slotData: LktObject;
    searchStringResourceParam: string;
    searchPlaceholder: string;
    useResourceSlot: string;
    multipleDisplay: "inline" | "list" | "count";
    multipleDisplayEdition: "inline" | "list" | "count";
    mandatoryMessage: string;
    emptyValueSlot: string;
    emptyValueText: string;
}, {}>, {
    prefix?(_: {}): any;
    option?(_: {
        option: {
            value: string | number | any[];
            label: string;
            data?: LktObject | undefined;
            disabled?: boolean | undefined;
            group?: boolean | undefined;
        };
        data: LktObject;
    }): any;
    "no-results"?(_: {}): any;
    value?(_: {
        option: Option;
        data: LktObject;
    }): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
