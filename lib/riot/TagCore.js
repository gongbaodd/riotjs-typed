"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Riot = require("riot");
var TagCore = (function () {
    function TagCore(ctrl) {
        this.ctrl = ctrl;
    }
    TagCore.prototype.mount = function (opts) {
        var _this = this;
        this.$tag = Riot.mount(this.name, __assign({}, opts, { ctrl: this.ctrl }));
        this.$tag.forEach(function (thisTag) { return _this.ctrl.addStore(thisTag); });
    };
    TagCore.prototype.unmount = function (leftTag) {
        this.$tag.forEach(function (tag) { return tag.unmount(leftTag); });
    };
    TagCore.prototype.appendDOM = function () {
        var document = window.document;
        var elem = document.createElement(this.name);
        document.body.appendChild(elem);
    };
    TagCore.prototype.render = function (opts) {
        return Riot.render(this.name, __assign({}, opts, { ctrl: this.ctrl }));
    };
    return TagCore;
}());
exports.TagCore = TagCore;
