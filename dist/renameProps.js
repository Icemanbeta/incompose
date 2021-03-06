"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * @file   renameProps
 * @desc   renames the owner prop
 * @author Roman Zanettin <roman.zanettin@ringieraxelspringer.ch>
 * @date   2017-02-06
 */

/**
 * @param   {Object}    - config ({oldName : 'newName', a : 'z'})
 * @param   {Function}  - component
 * @param   {Object}    - component props
 * @returns {Function}
 */
var _default = function _default(config) {
  return function (component) {
    return function (props) {
      var newProps = Object.keys(props).reduce(function (acc, key) {
        acc[config[key] || key] = props[key];
        return acc;
      }, {});
      return component(newProps);
    };
  };
};

exports.default = _default;