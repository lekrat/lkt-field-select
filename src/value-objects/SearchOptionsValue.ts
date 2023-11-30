import {SearchOptions} from "../types/SearchOptions";

export class SearchOptionsValue {
    private readonly value: SearchOptions;

    constructor(value?: SearchOptions) {
        if (typeof value !== 'function' && typeof value !== 'object') {
            throw new Error('searchOptions must be an object or a function returning an object');
        }

        if (typeof value === 'function') {
            if (typeof value() !== 'object') {
                throw new Error('searchOptions function must return an object');
            }
        }

        if (!value) {
            value = {};
        }

        this.value = value;
    }

    getOptions() {
        if (typeof this.value === 'function') {
            return this.value();
        }

        return this.value;
    }
}