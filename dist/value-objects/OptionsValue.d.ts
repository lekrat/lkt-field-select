import { Option } from "../types/Option";
export declare class OptionsValue {
    private value;
    constructor(value?: Option[]);
    all(): Option[];
    filter(query: string): Option[];
    findByValue(value: string | number | Option[]): Option[] | undefined;
    receiveOptions(options: Option[]): void;
}
