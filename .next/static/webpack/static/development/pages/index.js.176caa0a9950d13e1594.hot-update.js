webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Pages/Home/Reducer.js":
/*!*************************************!*\
  !*** ./pages/Pages/Home/Reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _Base_Constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Base/Constant */ "./pages/Base/Constant/index.js");


function Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    page: 1,
    pageSize: 5,
    totalArticle: 5,
    dataArticles: [],
    status: false,
    loading: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "".concat(_Base_Constant__WEBPACK_IMPORTED_MODULE_1__["default"].START_LOADING):
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true
      });
      break;

    case "".concat(_Base_Constant__WEBPACK_IMPORTED_MODULE_1__["default"].DONE_LOADING):
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false
      });
      break;

    case "".concat(_Base_Constant__WEBPACK_IMPORTED_MODULE_1__["default"].SET_ARTICLES):
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        dataArticles: action.payload
      });
      break;

    case "".concat(_Base_Constant__WEBPACK_IMPORTED_MODULE_1__["default"].SET_TOTAL_ARTICLES):
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        totalArticle: action.payload
      });
      break;

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=index.js.176caa0a9950d13e1594.hot-update.js.map