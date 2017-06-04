export declare class Control {
    private _stores;
    on(e: string, a: Function): void;
    one(e: string, a: Function): void;
    off(e: string, a: Function): void;
    trigger(e: string, ...args: any[]): void;
    addStore(Store: any): void;
    reset(): void;
    freeStore(Store: any): void;
    constructor();
}
