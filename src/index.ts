import {App} from 'vue';

import {default as selectField} from './lib-components/LktFieldSelect.vue';

export {setNoOptionsMessage, setResourceOptionSlot, setResourceValueSlot} from './functions/settings-functions';

export type {Option} from "./types/Option";

const LktFieldSelect = {
    install: (app: App) => {
        app.component('lkt-field-select', selectField);
    },
};
export default LktFieldSelect;
