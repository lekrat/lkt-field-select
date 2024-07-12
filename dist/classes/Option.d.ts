import { LktObject } from "lkt-ts-interfaces";
export declare class Option {
    value: string | number | string[] | number[] | Option[] | undefined;
    label: string;
    data?: LktObject;
    disabled?: boolean;
    group?: boolean;
    constructor();
}
