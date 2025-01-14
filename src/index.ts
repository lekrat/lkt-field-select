import {App, Plugin} from 'vue';

import {default as selectField} from './lib-components/LktFieldSelect.vue';

export {setNoOptionsMessage, setResourceOptionSlot, setResourceValueSlot, setDefaultSelectEmptyValueSlot, setSelectEmptyValueMessage} from './functions/settings-functions';

export type {Option} from "./types/Option";

import LktLoader from "lkt-loader";
import LktFieldText from "lkt-field-text";
export {debugLktFieldSelect} from "./functions/debug";

const LktFieldSelect: Plugin = {
    install: (app: App) => {
        // Register plugin components
        if (app.component('lkt-field-select') === undefined) app.component('lkt-field-select', selectField);

        // Register additional components
        if (app.component('lkt-loader') === undefined) app.use(LktLoader);
        if (app.component('lkt-field-text') === undefined) app.use(LktFieldText);
    }
};
export default LktFieldSelect;