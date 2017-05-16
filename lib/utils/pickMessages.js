"use strict";

exports.__esModule = true;
exports["default"] = pickMessages;

function pickMessages(error) {
  if (error !== null) {
    return Object.keys(error).reduce(function (obj, key) {
      obj[key] = error[key].map(function (item) {
        return item.message;
      });
      return obj;
    }, {});
  }
  return {};
}

module.exports = exports["default"];