"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Modal = _ref => {
  let {
    isActive,
    handleClick,
    modalContent,
    backgroundStyle,
    contentStyle,
    exitBtn,
    exitBtnStyle,
    refresh
  } = _ref;

  const backStyle = _objectSpread({
    display: isActive ? "block" : "none",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 9999,
    backgroundColor: "rgba(255,255,255,0.35)",
    textAlign: "center"
  }, backgroundStyle);

  const innerStyle = _objectSpread({
    maxWidth: "80%",
    position: "relative",
    border: '1px solid black',
    borderRadius: 10,
    backgroundColor: "white",
    padding: 20,
    marginLeft: "50%",
    marginTop: "25%",
    transform: "translate(-50%, -50%)"
  }, contentStyle);

  const exitStyle = _objectSpread({
    position: "absolute",
    top: 5,
    right: 15,
    cursor: "pointer"
  }, exitBtnStyle);

  const handleClickExit = () => {
    handleClick();

    if (refresh) {
      window.location.reload();
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: backStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: innerStyle
  }, modalContent, /*#__PURE__*/_react.default.createElement("div", {
    style: exitStyle,
    onClick: handleClickExit
  }, exitBtn ? exitBtn : "X")));
};

var _default = Modal;
exports.default = _default;