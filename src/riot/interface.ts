import { Store } from "./Store";
import { Control } from "./Control";

export interface IriotOpts {
    ctrl: Control;
}

export interface IriotTag extends Store {
    opts: IriotOpts;
    parent?: IriotTag;
    tags: { [tagName: string]: IriotTag | IriotTag[] };
    mixin: (Imixin) => void;
    unmount: (leftTag: boolean) => void;
    update: (opts?: any) => void;
    [props: string]: any;
}

export interface IriotMixin {
    init?(): void;
}
