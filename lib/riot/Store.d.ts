import { Control } from "./Control";
export declare class Store {
    on: Function;
    one: Function;
    off: Function;
    trigger: Function;
    constructor(ctrl?: Control, ...args: any[]);
}
