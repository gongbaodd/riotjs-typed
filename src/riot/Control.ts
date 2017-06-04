import RiotControl = require("riotcontrol");

export class Control {
    // tslint:disable-next-line:variable-name ban-types
    private _stores: Function[] = [];
    // tslint:disable-next-line:ban-types no-empty
    public on(e: string, a: Function): void { }
    // tslint:disable-next-line:ban-types no-empty
    public one(e: string, a: Function): void { }
    // tslint:disable-next-line:ban-types no-empty
    public off(e: string, a: Function): void { }
    // tslint:disable-next-line:no-empty
    public trigger(e: string, ...args: any[]): void { }
    // tslint:disable-next-line:no-empty
    public addStore(Store): void { }
    // tslint:disable-next-line:no-empty
    public reset(): void { }
    public freeStore(Store) {
        const index = this._stores.indexOf(Store);
        this._stores.splice(index, 1);
    }
    constructor() {
        Object.keys(RiotControl).forEach((key) => {
            if ("function" === typeof RiotControl[key]) {
                this[key] = RiotControl[key].bind(this);
            }
        });
    }
}