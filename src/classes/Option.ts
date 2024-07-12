import {LktObject} from "lkt-ts-interfaces";

export class Option {
    value: string | number | string[] | number[] | Option[] | undefined = undefined;
    label: string = '';
    data?: LktObject = {};
    disabled?: boolean = false;
    group?: boolean = false;

    constructor() {

    }
}