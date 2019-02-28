webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./pages/Content/index.js":
/*!********************************!*\
  !*** ./pages/Content/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ "./pages/Content/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../component/Flex */ "./pages/component/Flex/index.js");
/* harmony import */ var _component_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../component/Label */ "./pages/component/Label/index.js");
/* harmony import */ var _HocWrappers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../HocWrappers */ "./pages/HocWrappers.js");
/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component */ "./pages/Content/Component.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");










var mapStateToProps = function mapStateToProps(state) {
  var _state$Content = state.Content,
      page = _state$Content.page,
      pageSize = _state$Content.pageSize,
      totalArticle = _state$Content.totalArticle,
      dataArticles = _state$Content.dataArticles,
      loading = _state$Content.loading;
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    page: page,
    pageSize: pageSize,
    totalArticle: totalArticle,
    dataArticles: dataArticles,
    loading: loading
  });
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_8__["compose"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps), _HocWrappers__WEBPACK_IMPORTED_MODULE_5__["default"])(_Component__WEBPACK_IMPORTED_MODULE_6__["default"]));

/***/ })

})
//# sourceMappingURL=home.js.063090f6c5845826c609.hot-update.js.map