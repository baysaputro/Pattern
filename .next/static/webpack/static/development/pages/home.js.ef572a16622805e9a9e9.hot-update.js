webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./pages/CustomeContentLoader/Component.js":
/*!*************************************************!*\
  !*** ./pages/CustomeContentLoader/Component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./pages/CustomeContentLoader/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");





var _jsxFileName = "C:\\SAI\\NEXTJS\\pages\\CustomeContentLoader\\Component.js";




var Component =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Component, _React$Component);

  function Component() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Component);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Component).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Component, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          totalArticle = _this$props.totalArticle,
          loading = _this$props.loading;
      console.log("From customer content loader");
      console.log(loading);
      var CustomeContentLoader = [];

      for (var i = 0; i < totalArticle; i++) {
        CustomeContentLoader.push(react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
          height: 80,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
          x: "0",
          y: "0",
          rx: "0",
          ry: "0",
          width: "30%",
          height: "72",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
          x: "130",
          y: "2",
          rx: "0",
          ry: "0",
          width: "250",
          height: "8",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
          x: "130",
          y: "20",
          rx: "0",
          ry: "0",
          width: "300",
          height: "5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
          x: "130",
          y: "28",
          rx: "0",
          ry: "0",
          width: "300",
          height: "5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
          x: "130",
          y: "37",
          rx: "0",
          ry: "0",
          width: "300",
          height: "5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
          x: "138",
          y: "37",
          rx: "0",
          ry: "0",
          width: "300",
          height: "5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("rect", {
          x: "130",
          y: "55",
          rx: "3",
          ry: "2",
          width: "70",
          height: "18",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }))));
      }

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, loading ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, CustomeContentLoader) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "test"));
    }
  }]);

  return Component;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ })

})
//# sourceMappingURL=home.js.ef572a16622805e9a9e9.hot-update.js.map