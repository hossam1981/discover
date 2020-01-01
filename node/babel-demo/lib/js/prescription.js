"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Prescription = function () {
  function Prescription(drug, quantity) {
    _classCallCheck(this, Prescription);

    this._drug = drug;
    this._quantity = quantity;
  }

  _createClass(Prescription, [{
    key: "getDrug",
    value: function getDrug() {
      return this._drug;
    }
  }, {
    key: "getQuantity",
    value: function getQuantity() {
      return this._quantity;
    }
  }]);

  return Prescription;
}();

exports.default = Prescription;