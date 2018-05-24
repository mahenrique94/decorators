"use strict";

var _Person = require("./entities/Person");

var _Person2 = _interopRequireDefault(_Person);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matheus = new _Person2.default("Matheus");
var helloPhrase = matheus.hi();
console.log(helloPhrase);

matheus.save();

// matheus.hi = () => "I'm a modified phrase"
// const anotherPhrase = matheus.hi()
// console.log(anotherPhrase)