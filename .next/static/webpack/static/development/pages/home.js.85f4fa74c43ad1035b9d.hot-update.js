webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptor.js":
false,

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.object.get-own-property-descriptor.js":
false,

/***/ "./pages/Content/index.js":
/*!********************************!*\
  !*** ./pages/Content/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ "./pages/Content/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../component/Flex */ "./pages/component/Flex/index.js");
/* harmony import */ var _component_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../component/Label */ "./pages/component/Label/index.js");
/* harmony import */ var _HocWrappers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../HocWrappers */ "./pages/HocWrappers.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component */ "./pages/Content/Component.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");









var mapStateToProps = function mapStateToProps(state) {
  var page = state.page,
      pageSize = state.pageSize,
      totalArticle = state.totalArticle,
      dataArticles = state.dataArticles,
      loading = state.loading;
  return {
    page: page,
    pageSize: pageSize,
    totalArticle: totalArticle,
    dataArticles: dataArticles,
    loading: loading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_7__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps), _HocWrappers__WEBPACK_IMPORTED_MODULE_4__["default"])(_Component__WEBPACK_IMPORTED_MODULE_5__["default"]));

/***/ })

})
//# sourceMappingURL=home.js.85f4fa74c43ad1035b9d.hot-update.js.map