import {Settings} from "../settings/Settings";

export const debug = (...args: any[]): void => {
    if (Settings.debugEnabled) console.info('[LktFieldSelect] ', ...args);
};
export const debugLktFieldSelect = (state: boolean = true): void => {
    Settings.debugEnabled = state;
};