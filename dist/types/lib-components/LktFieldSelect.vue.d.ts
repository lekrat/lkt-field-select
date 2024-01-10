import { Option } from "../types/Option";
declare const _default: {
    new (...args: any[]): import("vue").CreateComponentPublicInstance<Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
            default: string;
        };
        class: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        palette: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        valid: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeOnSelect: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        readMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        upperDropdown: {
            type: BooleanConstructor;
            default: boolean;
        };
        choiceDropdown: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowReadModeSwitch: {
            type: BooleanConstructor;
            default: boolean;
        };
        switchEditionMessage: {
            type: StringConstructor;
            default: string;
        };
        emptyLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        options: {
            type: {
                (arrayLength: number): Option[];
                (...items: Option[]): Option[];
                new (arrayLength: number): Option[];
                new (...items: Option[]): Option[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                of<T_4>(...items: T_4[]): T_4[];
                readonly [Symbol.species]: ArrayConstructor;
            };
            default: () => Option[];
        };
        disabledOptions: {
            type: ArrayConstructor;
            default: () => Array<any>;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        canTag: {
            type: BooleanConstructor;
            default: boolean;
        };
        noOptionsMessage: {
            type: StringConstructor;
            default: string;
        };
        resource: {
            type: StringConstructor;
            default: string;
        };
        resourceData: {
            type: ObjectConstructor[];
            default: () => {};
        };
        searchStringResourceParam: {
            type: StringConstructor;
            default: string;
        };
        searchPlaceholder: {
            type: StringConstructor;
            default: string;
        };
        useResourceSlot: {
            type: StringConstructor;
            default: string;
        };
        multipleDisplay: {
            type: StringConstructor;
            default: string;
        };
        multipleDisplayEdition: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        "onClick-ui"?: (...args: any[]) => any;
    }, {
        reset: () => void;
        value: () => string | number | unknown[];
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "click-ui")[], import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
            default: string;
        };
        class: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        palette: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        valid: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeOnSelect: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        readMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        upperDropdown: {
            type: BooleanConstructor;
            default: boolean;
        };
        choiceDropdown: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowReadModeSwitch: {
            type: BooleanConstructor;
            default: boolean;
        };
        switchEditionMessage: {
            type: StringConstructor;
            default: string;
        };
        emptyLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        options: {
            type: {
                (arrayLength: number): Option[];
                (...items: Option[]): Option[];
                new (arrayLength: number): Option[];
                new (...items: Option[]): Option[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                of<T_4>(...items: T_4[]): T_4[];
                readonly [Symbol.species]: ArrayConstructor;
            };
            default: () => Option[];
        };
        disabledOptions: {
            type: ArrayConstructor;
            default: () => Array<any>;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        canTag: {
            type: BooleanConstructor;
            default: boolean;
        };
        noOptionsMessage: {
            type: StringConstructor;
            default: string;
        };
        resource: {
            type: StringConstructor;
            default: string;
        };
        resourceData: {
            type: ObjectConstructor[];
            default: () => {};
        };
        searchStringResourceParam: {
            type: StringConstructor;
            default: string;
        };
        searchPlaceholder: {
            type: StringConstructor;
            default: string;
        };
        useResourceSlot: {
            type: StringConstructor;
            default: string;
        };
        multipleDisplay: {
            type: StringConstructor;
            default: string;
        };
        multipleDisplayEdition: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        "onClick-ui"?: (...args: any[]) => any;
    }, {
        name: string;
        label: string;
        disabled: boolean;
        multiple: boolean;
        options: Option[];
        readonly: boolean;
        class: string;
        placeholder: string;
        resource: string;
        modelValue: string | number | unknown[];
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
        disabledOptions: unknown[];
        canTag: boolean;
        noOptionsMessage: string;
        resourceData: Record<string, any>;
        searchStringResourceParam: string;
        searchPlaceholder: string;
        useResourceSlot: string;
        multipleDisplay: string;
        multipleDisplayEdition: string;
    }, true, {}, {}, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
            default: string;
        };
        class: {
            type: StringConstructor;
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        label: {
            type: StringConstructor;
            default: string;
        };
        palette: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        valid: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeOnSelect: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        readMode: {
            type: BooleanConstructor;
            default: boolean;
        };
        searchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        upperDropdown: {
            type: BooleanConstructor;
            default: boolean;
        };
        choiceDropdown: {
            type: BooleanConstructor;
            default: boolean;
        };
        allowReadModeSwitch: {
            type: BooleanConstructor;
            default: boolean;
        };
        switchEditionMessage: {
            type: StringConstructor;
            default: string;
        };
        emptyLabel: {
            type: BooleanConstructor;
            default: boolean;
        };
        options: {
            type: {
                (arrayLength: number): Option[];
                (...items: Option[]): Option[];
                new (arrayLength: number): Option[];
                new (...items: Option[]): Option[];
                isArray(arg: any): arg is any[];
                readonly prototype: any[];
                from<T>(arrayLike: ArrayLike<T>): T[];
                from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
                from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
                from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
                of<T_4>(...items: T_4[]): T_4[];
                readonly [Symbol.species]: ArrayConstructor;
            };
            default: () => Option[];
        };
        disabledOptions: {
            type: ArrayConstructor;
            default: () => Array<any>;
        };
        multiple: {
            type: BooleanConstructor;
            default: boolean;
        };
        canTag: {
            type: BooleanConstructor;
            default: boolean;
        };
        noOptionsMessage: {
            type: StringConstructor;
            default: string;
        };
        resource: {
            type: StringConstructor;
            default: string;
        };
        resourceData: {
            type: ObjectConstructor[];
            default: () => {};
        };
        searchStringResourceParam: {
            type: StringConstructor;
            default: string;
        };
        searchPlaceholder: {
            type: StringConstructor;
            default: string;
        };
        useResourceSlot: {
            type: StringConstructor;
            default: string;
        };
        multipleDisplay: {
            type: StringConstructor;
            default: string;
        };
        multipleDisplayEdition: {
            type: StringConstructor;
            default: string;
        };
    }>> & {
        "onUpdate:modelValue"?: (...args: any[]) => any;
        "onClick-ui"?: (...args: any[]) => any;
    }, {
        reset: () => void;
        value: () => string | number | unknown[];
    }, {}, {}, {}, {
        name: string;
        label: string;
        disabled: boolean;
        multiple: boolean;
        options: Option[];
        readonly: boolean;
        class: string;
        placeholder: string;
        resource: string;
        modelValue: string | number | unknown[];
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
        disabledOptions: unknown[];
        canTag: boolean;
        noOptionsMessage: string;
        resourceData: Record<string, any>;
        searchStringResourceParam: string;
        searchPlaceholder: string;
        useResourceSlot: string;
        multipleDisplay: string;
        multipleDisplayEdition: string;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (StringConstructor | NumberConstructor | ArrayConstructor)[];
        default: string;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    palette: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    valid: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnSelect: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    readMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    searchable: {
        type: BooleanConstructor;
        default: boolean;
    };
    upperDropdown: {
        type: BooleanConstructor;
        default: boolean;
    };
    choiceDropdown: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowReadModeSwitch: {
        type: BooleanConstructor;
        default: boolean;
    };
    switchEditionMessage: {
        type: StringConstructor;
        default: string;
    };
    emptyLabel: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: {
        type: {
            (arrayLength: number): Option[];
            (...items: Option[]): Option[];
            new (arrayLength: number): Option[];
            new (...items: Option[]): Option[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        };
        default: () => Option[];
    };
    disabledOptions: {
        type: ArrayConstructor;
        default: () => Array<any>;
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    canTag: {
        type: BooleanConstructor;
        default: boolean;
    };
    noOptionsMessage: {
        type: StringConstructor;
        default: string;
    };
    resource: {
        type: StringConstructor;
        default: string;
    };
    resourceData: {
        type: ObjectConstructor[];
        default: () => {};
    };
    searchStringResourceParam: {
        type: StringConstructor;
        default: string;
    };
    searchPlaceholder: {
        type: StringConstructor;
        default: string;
    };
    useResourceSlot: {
        type: StringConstructor;
        default: string;
    };
    multipleDisplay: {
        type: StringConstructor;
        default: string;
    };
    multipleDisplayEdition: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:modelValue"?: (...args: any[]) => any;
    "onClick-ui"?: (...args: any[]) => any;
}, {
    reset: () => void;
    value: () => string | number | unknown[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "click-ui")[], "update:modelValue" | "click-ui", {
    name: string;
    label: string;
    disabled: boolean;
    multiple: boolean;
    options: Option[];
    readonly: boolean;
    class: string;
    placeholder: string;
    resource: string;
    modelValue: string | number | unknown[];
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
    disabledOptions: unknown[];
    canTag: boolean;
    noOptionsMessage: string;
    resourceData: Record<string, any>;
    searchStringResourceParam: string;
    searchPlaceholder: string;
    useResourceSlot: string;
    multipleDisplay: string;
    multipleDisplayEdition: string;
}, {}, string, {}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        prefix: (_: {}) => any;
        option: (_: {
            option: {
                value: string | number | any[];
                label: string;
                data?: import("lkt-ts-interfaces").LktObject;
                disabled?: boolean;
                group?: boolean;
            };
        }) => any;
        'no-results': (_: {}) => any;
        value: (_: {
            option: any;
        }) => any;
    };
});
export default _default;
