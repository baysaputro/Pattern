webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./pages/Content/Component.js":
/*!************************************!*\
  !*** ./pages/Content/Component.js ***!
  \************************************/
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles.css */ "./pages/Content/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _component_Flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../component/Flex */ "./pages/component/Flex/index.js");
/* harmony import */ var _component_Label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../component/Label */ "./pages/component/Label/index.js");






var _jsxFileName = "C:\\SAI\\NEXTJS\\pages\\Content\\Component.js";





var Component =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Component, _React$Component);

  function Component(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Component);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Component).call(this, props));
    _this.scrollArticle = new react__WEBPACK_IMPORTED_MODULE_6___default.a.createRef();
    _this.handleScrollBoxArticle = _this.handleScrollBoxArticle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.page = _this.props.page;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Component, [{
    key: "handleScrollBoxArticle",
    value: function handleScrollBoxArticle() {
      var _this$props = this.props,
          dataArticles = _this$props.dataArticles,
          loadDataArticle = _this$props.loadDataArticle,
          pageSize = _this$props.pageSize,
          loading = _this$props.loading;

      if (dataArticles != null) {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight && dataArticles.length && !loading) {
          this.page++;
          var totalArticle = this.page * pageSize;
          loadDataArticle(this.page, totalArticle);
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.handleScrollBoxArticle);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScrollBoxArticle);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          CustomeContentLoader = _this$props2.CustomeContentLoader,
          dataArticles = _this$props2.dataArticles,
          loading = _this$props2.loading,
          totalArticle = _this$props2.totalArticle;
      if (dataArticles.length == 0) return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "boxContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, CustomeContentLoader(totalArticle));
      console.log("FROM CONTENT");
      console.log(this.props);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "boxContent",
        ref: function ref(_ref) {
          return _this2.scrollArticle = _ref;
        },
        onScroll: this.handleScrollBoxArticle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, loading ? CustomeContentLoader(totalArticle) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_component_Flex__WEBPACK_IMPORTED_MODULE_8__["default"], {
        direction: "column",
        width: "100%",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, dataArticles.map(function (article, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_component_Flex__WEBPACK_IMPORTED_MODULE_8__["default"], {
          key: i,
          direction: "row",
          width: "100%",
          mRight: 10,
          wrap: "no-wrap",
          mBottom: 15,
          border: 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_component_Flex__WEBPACK_IMPORTED_MODULE_8__["default"], {
          direction: "row",
          width: "30%",
          mRight: 20,
          height: 170,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          className: "imageClass",
          src: article.urlToImage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_component_Flex__WEBPACK_IMPORTED_MODULE_8__["default"], {
          direction: "column",
          width: "70%",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_component_Label__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: 21,
          bold: 600,
          bottom: 15,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, article.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_component_Label__WEBPACK_IMPORTED_MODULE_9__["default"], {
          size: 16,
          align: "justify",
          bottom: 15,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, article.content), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          className: "buttonReadMore",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, "Read more ...")));
      })));
    }
  }]);

  return Component;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ })

})
//# sourceMappingURL=home.js.d2285877ec15e906db8b.hot-update.js.map