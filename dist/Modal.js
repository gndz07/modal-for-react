"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useClickOutsideRef = _interopRequireDefault(require("./useClickOutsideRef"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Modal(_ref) {
  let {
    isActive,
    setState,
    modalContent,
    backgroundStyle,
    contentStyle,
    exitBtn,
    exitBtnStyle,
    refresh,
    persist
  } = _ref;
  const modalRef = (0, _useClickOutsideRef.default)(() => {
    if (isActive && !persist) setState(false);
  }); //handle close modal by esc button

  const handleEscape = (0, _react.useCallback)(e => {
    if (e.keyCode === 27) setState(false);
  });
  (0, _react.useEffect)(() => {
    if (isActive) {
      document.addEventListener('keydown', handleEscape, false);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isActive]);

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
    setState(false);

    if (refresh) {
      window.location.reload();
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: backStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: innerStyle,
    ref: modalRef
  }, modalContent, /*#__PURE__*/_react.default.createElement("div", {
    style: exitStyle,
    onClick: handleClickExit
  }, exitBtn ? exitBtn : "X")));
}

;
var _default = Modal;
exports.default = _default;