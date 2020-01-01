'use strict';

var _prescription = require('./prescription');

var _prescription2 = _interopRequireDefault(_prescription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rx = new _prescription2.default('amoxicillin', 30);
console.log(rx.getDrug());

//run  node prescription-main on one terminal and 
// on main file babel-demo
//use another terminal and run this => ./node_modules/.bin/babel src -d lib --watch