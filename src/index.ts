import {App} from 'vue';

import {default as selectField} from './lib-components/LktFieldSelect.vue';

export {setNoOptionsMessage, setResourceOptionSlot, setResourceValueSlot} from './functions/settings-functions';

export type {Option} from "./types/Option";

import "./../lkt-field-select.css";
import LktLoader from "lkt-loader";
import LktFieldText from "lkt-field-text";

const LktFieldSelect = {
    install: (app: App) => {
        // Register plugin components
        if (app.component('lkt-field-select') === undefined) app.component('lkt-field-select', selectField);

        // Register additional components
        if (app.component('lkt-loader') === undefined) app.use(LktLoader);
        if (app.component('lkt-field-text') === undefined) app.use(LktFieldText);
    },
};
export default LktFieldSelect;
