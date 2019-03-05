webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Pages/Home/Component.js":
/*!***************************************!*\
  !*** ./pages/Pages/Home/Component.js ***!
  \***************************************/
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
/* harmony import */ var _Elements_Flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Elements/Flex */ "./pages/Elements/Flex/index.js");
/* harmony import */ var _Elements_Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Elements/Label */ "./pages/Elements/Label/index.js");
/* harmony import */ var _Components_Connection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Components/Connection */ "./pages/Components/Connection/index.js");
/* harmony import */ var _Assets_Css_bulma_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Assets/Css/bulma.css */ "./pages/Assets/Css/bulma.css");
/* harmony import */ var _Assets_Css_bulma_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Assets_Css_bulma_css__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/home/bay/Work/Pattern/pages/Pages/Home/Component.js";






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
    _this.state = {
      offline: false
    };
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
      var _this$props2 = this.props,
          loadDataArticle = _this$props2.loadDataArticle,
          page = _this$props2.page,
          totalArticle = _this$props2.totalArticle;
      window.addEventListener('scroll', this.handleScrollBoxArticle);

      if (navigator.onLine) {
        console.log('online');
        loadDataArticle(page, totalArticle);
      } else {
        console.log('offline');
        this.setState({
          offline: true
        });
      }
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

      var _this$props3 = this.props,
          dataArticles = _this$props3.dataArticles,
          Loader = _this$props3.Loader,
          loading = _this$props3.loading,
          errStats = _this$props3.errStats;
      var offlineMsg = errStats ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Components_Connection__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "INTERNET ONLINE");
      console.log(errStats);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "container",
        ref: function ref(_ref) {
          return _this2.scrollArticle = _ref;
        },
        onScroll: this.handleScrollBoxArticle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, offlineMsg, dataArticles.map(function (article, i) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("article", {
          className: "media",
          key: i,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("figure", {
          className: "media-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          className: "image is-64x64",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          src: article.urlToImage,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "media-content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "content",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, article.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }), article.description, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("nav", {
          className: "level is-mobile",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "level-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "level-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "icon is-small",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "fas fa-reply",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "level-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "icon is-small",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "fas fa-retweet",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
          className: "level-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "icon is-small",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "fas fa-heart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        })))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "media-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button", {
          className: "delete",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        })));
      }), loading ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Loader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }) : []);
    }
  }]);

  return Component;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ })

})
//# sourceMappingURL=index.js.a9e8c86027ac32562243.hot-update.js.map