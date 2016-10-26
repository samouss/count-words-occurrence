"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isLengthMoreThan = function isLengthMoreThan(minLength) {
  return function (x) {
    return x.length > minLength;
  };
};
var isNotEmpty = function isNotEmpty(x) {
  return !!x;
};

exports.default = function (sample) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$caseSensitive = _ref.caseSensitive,
      caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive,
      _ref$minLength = _ref.minLength,
      minLength = _ref$minLength === undefined ? 2 : _ref$minLength;

  return sample.split(/\s+/).filter(isNotEmpty).filter(isLengthMoreThan(minLength)).reduce(function (acc, word) {
    var wordCase = caseSensitive ? word : word.toLowerCase();
    var count = acc[wordCase] || 0;

    return _extends({}, acc, _defineProperty({}, wordCase, count + 1));
  }, {});
};