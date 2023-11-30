import { Option } from "../types/Option";
export declare class OptionsValue {
    private value;
    constructor(value?: Option[]);
    all(): Option[];
    filter(query: string): Option[];
    receiveOptions(options: Option[]): void;
}
