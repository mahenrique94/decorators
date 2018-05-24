"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.readonly = exports.log = exports.entity = undefined;

var _base = require("./base");

var entity = (0, _base.mixin)({
    save: function save() {
        console.log("Saving a new record for your database");
    }
});

var log = function log(target) {
    return console.log("Creating a new class called: " + new target().constructor.name);
};

var readonly = function readonly(target, key, descriptor) {
    descriptor.writable = false;
    return descriptor;
};

exports.entity = entity;
exports.log = log;
exports.readonly = readonly;