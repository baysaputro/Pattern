webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./pages/HocWrappers.js":
/*!******************************!*\
  !*** ./pages/HocWrappers.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./styles.css */ "./pages/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _CustomeContentLoader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./CustomeContentLoader */ "./pages/CustomeContentLoader/index.js");
/* harmony import */ var _commonAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./commonAction */ "./pages/commonAction/index.js");











var _jsxFileName = "C:\\SAI\\NEXTJS\\pages\\HocWrappers.js";





var HocWrappers = function HocWrappers(ChildComponent) {
  var Component =
  /*#__PURE__*/
  function (_React$Component) {
    Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(Component, _React$Component);

    function Component() {
      var _getPrototypeOf2;

      var _this;

      Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Component);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Component)).call.apply(_getPrototypeOf2, [this].concat(args)));

      Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "_loadDataArticle2",
      /*#__PURE__*/
      Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var page,
            totalArticle,
            _this$props,
            dispatch,
            dataArticles,
            pageSize,
            apiKey,
            res,
            data,
            _args = arguments;

        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                page = _args.length > 0 && _args[0] !== undefined ? _args[0] : 1;
                totalArticle = _args.length > 1 && _args[1] !== undefined ? _args[1] : 5;
                _this$props = _this.props, dispatch = _this$props.dispatch, dataArticles = _this$props.dataArticles, pageSize = _this$props.pageSize;
                console.log("FROM LOAD ARTICKLE 2");
                console.log(_this.props);
                dispatch(Object(_commonAction__WEBPACK_IMPORTED_MODULE_14__["loadingAction"])());
                apiKey = '3e6d0f91b9f14b00a5e63f63eb35ee8b';
                _context.next = 9;
                return fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat(apiKey, "&page=").concat(page, "&pageSize=").concat(pageSize));

              case 9:
                res = _context.sent;
                _context.next = 12;
                return res.json();

              case 12:
                data = _context.sent;

                if (totalArticle > pageSize) {
                  dataArticles = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(dataArticles), Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(data.articles));
                } else {
                  dataArticles = data.articles;
                }

                console.log(dataArticles);
                dispatch(Object(_commonAction__WEBPACK_IMPORTED_MODULE_14__["setData"])(dataArticles()));
                dispatch(Object(_commonAction__WEBPACK_IMPORTED_MODULE_14__["doneLoadingAction"])()); // this.setState({dataArticles,loading:false});

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })));

      return _this;
    }

    Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(Component, [{
      key: "_renderContentLoader",
      value: function _renderContentLoader(totalArticle) {
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_CustomeContentLoader__WEBPACK_IMPORTED_MODULE_13__["default"], {
          totalArticle: totalArticle,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        });
      }
    }, {
      key: "render",
      value: function render() {
        console.log("FROM REDUX");
        console.log(this.props);
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(ChildComponent, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
          loadDataArticle2: this._loadDataArticle2,
          CustomeContentLoader: this._renderContentLoader,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }));
      }
    }]);

    return Component;
  }(react__WEBPACK_IMPORTED_MODULE_11___default.a.Component);

  return Component;
};

/* harmony default export */ __webpack_exports__["default"] = (HocWrappers);

/***/ })

})
//# sourceMappingURL=home.js.f3d9fa2951cc3465884f.hot-update.js.map