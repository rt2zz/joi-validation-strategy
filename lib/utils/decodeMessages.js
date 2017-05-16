'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = decodeMessages;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _he = require('he');

var _he2 = _interopRequireDefault(_he);

function decodeMessages(error) {
  if (error !== null) {
    error.details = error.details.map(function (e) {
      return _extends({}, e, {
        message: _he2['default'].decode(e.message)
      });
    });
    return error;
  }
  return {};
}

module.exports = exports['default'];