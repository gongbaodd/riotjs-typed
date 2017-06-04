"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RiotControl = require("riotcontrol");
var Control = (function () {
    function Control() {
        var _this = this;
        // tslint:disable-next-line:variable-name ban-types
        this._stores = [];
        Object.keys(RiotControl).forEach(function (key) {
            if ("function" === typeof RiotControl[key]) {
                _this[key] = RiotControl[key].bind(_this);
            }
        });
    }
    // tslint:disable-next-line:ban-types no-empty
    Control.prototype.on = function (e, a) { };
    // tslint:disable-next-line:ban-types no-empty
    Control.prototype.one = function (e, a) { };
    // tslint:disable-next-line:ban-types no-empty
    Control.prototype.off = function (e, a) { };
    // tslint:disable-next-line:no-empty
    Control.prototype.trigger = function (e) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
    };
    // tslint:disable-next-line:no-empty
    Control.prototype.addStore = function (Store) { };
    // tslint:disable-next-line:no-empty
    Control.prototype.reset = function () { };
    Control.prototype.freeStore = function (Store) {
        var index = this._stores.indexOf(Store);
        this._stores.splice(index, 1);
    };
    return Control;
}());
exports.Control = Control;
