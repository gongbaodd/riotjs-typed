import { Control } from "./Control";
import Riot = require("riot");

export class Store {
    // tslint:disable-next-line:ban-types
    public on: Function;
    // tslint:disable-next-line:ban-types
    public one: Function;
    // tslint:disable-next-line:ban-types
    public off: Function;
    // tslint:disable-next-line:ban-types
    public trigger: Function;
    constructor(ctrl?: Control, ...args: any[]) {
        Riot.observable(this);
    }
}