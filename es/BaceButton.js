"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaceButton = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BaceButton = _styledComponents["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  color: ", ";\n  background-color: ", ";\n  flex: 1;\n  padding: 12px 16px;\n  border: 0;\n  border-radius: 16px;\n  font-family: inherit;\n  font-weight: 600;\n  cursor: pointer;\n"])), function (props) {
  return props.isSolid ? "#fff" : "#6A63DD";
}, function (props) {
  return props.isSolid ? "#6A63DD" : "#6A63DD1a";
});

exports.BaceButton = BaceButton;