'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _joiBrowser = require('joi-browser');

var _joiBrowser2 = _interopRequireDefault(_joiBrowser);

var _lodashSet = require('lodash.set');

var _lodashSet2 = _interopRequireDefault(_lodashSet);

var _lodashGet = require('lodash.get');

var _lodashGet2 = _interopRequireDefault(_lodashGet);

var _lodashIsempty = require('lodash.isempty');

var _lodashIsempty2 = _interopRequireDefault(_lodashIsempty);

var _lodashCompose = require('lodash.compose');

var _lodashCompose2 = _interopRequireDefault(_lodashCompose);

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _utils = require('./utils');

exports['default'] = function (joiOptions) {
  return {
    validate: function validate(data, joiSchema, options, callback) {
      if (data === undefined) data = {};
      if (joiSchema === undefined) joiSchema = {};
      if (options === undefined) options = {};

      _invariant2['default'](typeof callback === 'function', 'joi-validation-strategy is asynchronous, a callback is expected: validate(data, schema, options, callback)');
      var key = options.key;
      var _options$prevErrors = options.prevErrors;
      var prevErrors = _options$prevErrors === undefined ? {} : _options$prevErrors;

      var validationOptions = _extends({
        abortEarly: false,
        allowUnknown: true
      }, joiOptions);
      _joiBrowser2['default'].validate(data, joiSchema, validationOptions, function (error) {
        var errors = _lodashCompose2['default'](_utils.hydrate, _utils.pickMessages, _utils.collectErrors, _utils.decodeMessages)(error);
        if (key === undefined || key === null || _lodashIsempty2['default'](errors)) {
          return callback(errors);
        }
        return callback(_lodashSet2['default'](prevErrors, key, _lodashGet2['default'](errors, key)));
      });
    }
  };
};

module.exports = exports['default'];