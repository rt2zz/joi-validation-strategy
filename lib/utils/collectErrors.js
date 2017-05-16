'use strict';

exports.__esModule = true;
exports['default'] = collectErrors;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashGroupby = require('lodash.groupby');

var _lodashGroupby2 = _interopRequireDefault(_lodashGroupby);

function collectErrors(error) {
  if (error !== null) {
    return _lodashGroupby2['default'](error.details, 'path');
  }
  return {};
}

module.exports = exports['default'];