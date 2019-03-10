webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _anephenix_sarus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @anephenix/sarus */ "./node_modules/@anephenix/sarus/index.js");
/* harmony import */ var _anephenix_sarus__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_anephenix_sarus__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_homepage_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/homepage.scss */ "./styles/homepage.scss");
/* harmony import */ var _styles_homepage_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_homepage_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_theme_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/theme.scss */ "./styles/theme.scss");
/* harmony import */ var _styles_theme_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_theme_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_WebSocketForm_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/WebSocketForm.scss */ "./styles/WebSocketForm.scss");
/* harmony import */ var _styles_WebSocketForm_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_WebSocketForm_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _styles_EventLogger_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/EventLogger.scss */ "./styles/EventLogger.scss");
/* harmony import */ var _styles_EventLogger_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_EventLogger_scss__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "/Users/pauljensen/Work/anephenix/sarus-client-logger/pages/index.js";
// NPM Dependencies

 // File Dependencies






var WebSocketForm =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WebSocketForm, _Component);

  function WebSocketForm(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, WebSocketForm);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(WebSocketForm).call(this, props));
    _this.connect = _this.connect.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(WebSocketForm, [{
    key: "connect",
    value: function connect(event) {
      event.preventDefault();
      this.props.onSubmit(event);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "websocket-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
        onSubmit: this.connect,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("label", {
        htmlFor: "websocket-server",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "WebSocket server url"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
        type: "text",
        placeholder: "e.g. wss://ws.anephenix.com",
        name: "websocket-server",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Connect")));
    }
  }]);

  return WebSocketForm;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var EventLogger =
/*#__PURE__*/
function (_Component2) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(EventLogger, _Component2);

  function EventLogger(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, EventLogger);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(EventLogger).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(EventLogger, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          sarus = _this$props.sarus,
          url = _this$props.url;

      if (sarus) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, "Connecting to ", url);
      } else {
        return null;
      }
    }
  }]);

  return EventLogger;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

var HomePage =
/*#__PURE__*/
function (_Component3) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HomePage, _Component3);

  function HomePage(props) {
    var _this2;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePage);

    _this2 = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(HomePage).call(this, props));
    _this2.state = {
      url: null,
      sarus: null
    };
    _this2.createConnection = _this2.createConnection.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomePage, [{
    key: "createConnection",
    value: function createConnection(event) {
      var url = event.target.getElementsByTagName('input')[0].value;
      var sarus = new _anephenix_sarus__WEBPACK_IMPORTED_MODULE_7___default.a({
        url: url,
        retryConnectionDelay: true
      });
      this.setState({
        sarus: sarus,
        url: url
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        id: "homepage",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Sarus client logger"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Type in the url for your WebSocket server, and press Connect."), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WebSocketForm, {
        onSubmit: this.createConnection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(EventLogger, {
        sarus: this.state.sarus,
        url: this.state.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.2ebcefcb09c438d189f9.hot-update.js.map