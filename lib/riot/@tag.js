"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Riot = require("riot");
var TAGS = {};
exports.tagEvents = {
    mount: "mount",
    unmount: "unmount",
    ready: "ready",
};
function tag(param) {
    var name = param.name, tmpl = param.tmpl, css = param.css, attr = param.attr;
    return function (target) {
        var targetProto = target.prototype;
        targetProto.name = name || targetProto.name;
        targetProto.tmpl = tmpl || targetProto.tmpl;
        targetProto.css = css || targetProto.css;
        targetProto.attr = attr || targetProto.attr;
        var tTmpl = targetProto.tmpl, tCss = targetProto.css, tAttr = targetProto.attr, onCreate = targetProto.onCreate;
        if (TAGS[name]) {
            // tslint:disable-next-line:no-console
            console.log("[Riot]\u3000\u5DF2\u7ECF\u5B9A\u4E49\u8FC7\u7EC4\u4EF6" + name);
        }
        else {
            TAGS[name] = Riot.tag(name, tTmpl, tCss, tAttr, function (opts) {
                var _this = this;
                if (onCreate) {
                    targetProto.onCreate(this, opts);
                }
                this.on(exports.tagEvents.mount, function () {
                    try {
                        targetProto.$tag = targetProto.$tag ? targetProto.$tag.concat([_this]) : [_this];
                        if (opts.ctrl) {
                            opts.ctrl.addStore(_this);
                        }
                    }
                    catch (e) {
                        // tslint:disable-next-line:no-console
                        console.error("[TagCore] \u8BF7\u5728" + name + "\u6A21\u677F\u91CC\u6307\u660E ctrller " + e);
                    }
                });
                this.on(exports.tagEvents.unmount, function () {
                    if (targetProto.$tag) {
                        var index = targetProto.$tag.indexOf(_this);
                        targetProto.$tag.splice(index, 1);
                    }
                    if (opts.ctrl) {
                        opts.ctrl.freeStore(_this);
                    }
                });
            });
        }
        return target;
    };
}
exports.tag = tag;
