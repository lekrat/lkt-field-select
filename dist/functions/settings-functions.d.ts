import { Component } from "vue";
export declare const getNoOptionsMessage: () => string;
export declare const setNoOptionsMessage: (str: string) => boolean;
export declare const setSelectEmptyValueMessage: (str: string) => boolean;
export declare const setResourceOptionSlot: (resource: string, component: string | Component) => boolean;
export declare const setResourceValueSlot: (resource: string, component: string | Component) => boolean;
export declare const setDefaultSelectEmptyValueSlot: (str: string, component?: string | Component) => void;
