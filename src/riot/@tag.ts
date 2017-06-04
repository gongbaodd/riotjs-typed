import Riot = require("riot");
import { TagCore } from "./TagCore";
import { IriotOpts } from "./interface";

const TAGS = {};

export const tagEvents = {
    mount: "mount",
    unmount: "unmount",
    ready: "ready", // 用于后端渲染
};

export function tag(param: ItagParam) {
    const { name, tmpl, css, attr } = param;
    return (target: any) => {
        const targetProto: TagCore = target.prototype;
        targetProto.name = name || targetProto.name;
        targetProto.tmpl = tmpl || targetProto.tmpl;
        targetProto.css = css || targetProto.css;
        targetProto.attr = attr || targetProto.attr;

        const {
            tmpl: tTmpl,
            css: tCss,
            attr: tAttr,
            onCreate,
        } = targetProto;

        if (TAGS[name]) {
            // tslint:disable-next-line:no-console
            console.log(`[Riot]　已经定义过组件${name}`);
        } else {
            TAGS[name] = Riot.tag(name, tTmpl, tCss, tAttr, function(opts: IriotOpts) {
                if (onCreate) {
                    targetProto.onCreate(this, opts);
                }
                this.on(tagEvents.mount, () => {
                    try {
                        targetProto.$tag = targetProto.$tag ? [...targetProto.$tag, this] : [this];
                        if (opts.ctrl) {
                            opts.ctrl.addStore(this);
                        }
                    } catch (e) {
                        // tslint:disable-next-line:no-console
                        console.error(`[TagCore] 请在${name}模板里指明 ctrller ${e}`);
                    }
                });

                this.on(tagEvents.unmount, () => {
                    if (targetProto.$tag) {
                        const index = targetProto.$tag.indexOf(this);
                        targetProto.$tag.splice(index, 1);
                    }
                    if (opts.ctrl) {
                        opts.ctrl.freeStore(this);
                    }
                });
            });
        }

        return target;
    };
}

export interface ItagParam {
    name: string;
    tmpl: string;
    css?: string;
    attr?: string;
}
