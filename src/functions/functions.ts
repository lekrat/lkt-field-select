import {LktObject} from "lkt-ts-interfaces";

/**
 *
 * @param options
 * @param parser
 * @param select2Compatibility
 */
export const mapOptions = (options: Array<any>, parser: Function, select2Compatibility: boolean = false): IOption[] => {
    if (select2Compatibility) {
        let r: IOption[] = [];

        options.forEach((opt: LktObject) => {

            let keys = Object.keys(opt);

            let index = keys.indexOf('id');
            if (index >= 0) keys.splice(index, 1);

            index = keys.indexOf('text');
            if (index >= 0) keys.splice(index, 1);

            index = keys.indexOf('children');
            if (index >= 0) keys.splice(index, 1);

            index = keys.indexOf('disabled');
            if (index >= 0) keys.splice(index, 1);

            let group = false,
                children: IOption[] = [];

            if (opt['children']) {
                group = true;
                children = mapOptions(opt['children'], parser, select2Compatibility);
            }

            let data: LktObject = {};
            keys.forEach(z => {
                data[z] = opt[z];
            });

            r.push({
                group,
                disabled: opt.disabled && opt.disabled === true || group,
                value: group ? children : opt.id,
                label: opt.text,
                data,
            });

            children.forEach(z => {
                r.push(z);
            })
        });

        return r;
    }
    return options.map((option:any, i:number): IOption => parser(option, i))
}