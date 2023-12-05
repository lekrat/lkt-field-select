import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
const src = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');
const test = resolve(__dirname, 'test');
const snapshots = resolve(__dirname, 'snapshots');

export default {
    plugins: [ vue() ],
    resolve: {
        alias: { '@': src, '@test': test }
    },
    build: {
        lib: {
            entry: `${ src }/index.ts`,
            name: 'LktFieldSelect',
            fileName: (format) => `lkt-field-select.${ format }.js`
        },
        outDir,
        minify: true,
        rollupOptions: {
            external: [ 'vue', 'lkt-tools', 'lkt-events', 'lkt-button', 'lkt-http-client', 'lkt-string-tools', 'axios', 'lkt-data-state', 'lkt-field-text' ],
            output: {
                globals: {
                    vue: 'Vue',
                    axios: 'axios',
                    "lkt-tools": 'LktTools',
                    "lkt-events": 'LktEvents',
                    "lkt-button": 'LktButton',
                    "lkt-http-client": 'LktHttpClient',
                    "lkt-field-text": 'LktFieldText',
                    "lkt-string-tools": 'LktStringTools'
                },
                sourcemapExcludeSources: true
            }
        }
    },
    test: {
        coverage: {
            reporter: [ 'text', 'lcov' ]
        },
        resolveSnapshotPath: (testPath, snapExtension) => {
            const path = testPath.split('/').splice(-2);
            return `${ snapshots }/${ path[0] }/${ path[1] }${ snapExtension }`;
        }
    }
};