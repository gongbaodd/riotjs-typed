"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Riot = require("riot");
var Store = (function () {
    function Store(ctrl) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        Riot.observable(this);
    }
    return Store;
}());
exports.Store = Store;
