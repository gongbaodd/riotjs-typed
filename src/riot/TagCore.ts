import { IriotTag, IriotOpts } from "./interface";
import { Control } from "./Control";
import Riot = require("riot");

export class TagCore {
    public name: string;
    public tmpl: string;
    public css?: string;
    public attr?: string;
    public onCreate?(tag?: IriotTag, opts?: IriotOpts): void;
    public ctrl: Control;
    public $tag: IriotTag[];
    public mount(opts: any) {
        this.$tag = Riot.mount(this.name, { ...opts, ctrl: this.ctrl });
        this.$tag.forEach(thisTag => this.ctrl.addStore(thisTag));
    }
    public unmount(leftTag?: boolean) {
        this.$tag.forEach(tag => tag.unmount(leftTag));
    }
    public appendDOM() {
        const document = window.document;
        const elem = document.createElement(this.name);
        document.body.appendChild(elem);
    }
    public render(opts: any): string {
        return Riot.render(this.name, { ...opts, ctrl: this.ctrl });
    }
    constructor(ctrl: Control) {
        this.ctrl = ctrl;
    }
}