import { App } from 'vue';
export { setNoOptionsMessage, setResourceOptionSlot, setResourceValueSlot } from './functions/settings-functions';
export type { Option } from "./types/Option";
declare const LktFieldSelect: {
    install: (app: App) => void;
};
export default LktFieldSelect;
