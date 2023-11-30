import {Settings} from "../settings/Settings";

export const getNoOptionsMessage = () => {
    return Settings.NO_OPTIONS_MESSAGE;
}

export const setNoOptionsMessage = (str: string) => {
    Settings.NO_OPTIONS_MESSAGE = str;
    return true;
}