'use strict';

var _car = require('./car');

var _car2 = _interopRequireDefault(_car);

var _convertible = require('./convertible');

var _convertible2 = _interopRequireDefault(_convertible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var car1 = new _car2.default('honda', 'accord');

var con = new _convertible2.default('honda', 'accord', '2door');

console.log(car1.getMake());
console.log(con.getDoor());