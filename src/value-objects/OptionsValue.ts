import {Option} from "../types/Option";

export class OptionsValue {
    private value: Option[];

    constructor(value: Option[] = []) {
        this.value = [...value];
    }

    all() {
        return this.value;
    }

    filter(query: string) {
        if (query === '') return this.all();

        const q = query.toLowerCase();
        return this.value.filter((z: Option) => {
            return z.label.toLowerCase().indexOf(q) !== -1;
        });
    }

    receiveOptions(options: Option[]) {
        const set = new Set();
        const temp: Option[] = [...this.value, ...options];
        const r: Option[] = [];
        temp.forEach(z => {
            let k = [z.value, z.label].join('-');
            if (!set.has(k)) {
                r.push(z);
                set.add(k);
            }
        })

        this.value = r;
    }
}