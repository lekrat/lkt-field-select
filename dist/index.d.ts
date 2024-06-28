import { Plugin } from 'vue';
export { setNoOptionsMessage, setResourceOptionSlot, setResourceValueSlot, setDefaultSelectEmptyValueSlot, setSelectEmptyValueMessage } from './functions/settings-functions';
export type { Option } from "./types/Option";
export { debugLktFieldSelect } from "./functions/debug";
declare const LktFieldSelect: Plugin;
export default LktFieldSelect;
