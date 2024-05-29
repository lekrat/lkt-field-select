import { LktObject } from "lkt-ts-interfaces";
import { Component } from "vue";
export declare class Settings {
    static debugEnabled: boolean;
    /**
     * Fields with options
     */
    static NO_OPTIONS_MESSAGE: string;
    static emptyValueText: string;
    static defaultEmptyValueSlot: string | Component;
    static customResourceOptionSlots: LktObject;
    static customResourceValueSlots: LktObject;
}
