import {App} from 'vue';

import {default as selectField} from './lib-components/LktFieldSelect.vue';

export {setNoOptionsMessage} from './functions/settings-functions';

const LktFieldSelect = {
    install: (app: App) => {
        app.component('lkt-field-select', selectField);
    },
};

export default LktFieldSelect;
