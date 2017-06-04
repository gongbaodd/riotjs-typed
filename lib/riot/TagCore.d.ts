import { IriotTag, IriotOpts } from "./interface";
import { Control } from "./Control";
export declare class TagCore {
    name: string;
    tmpl: string;
    css?: string;
    attr?: string;
    onCreate?(tag?: IriotTag, opts?: IriotOpts): void;
    ctrl: Control;
    $tag: IriotTag[];
    mount(opts: any): void;
    unmount(leftTag?: boolean): void;
    appendDOM(): void;
    render(opts: any): string;
    constructor(ctrl: Control);
}
