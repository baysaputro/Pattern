webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./pages/Content/Reducer.js":
/*!**********************************!*\
  !*** ./pages/Content/Reducer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../const */ "./pages/const/index.js");


function Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    page: 1,
    pageSize: 5,
    totalArticle: 5,
    dataArticles: [],
    loading: false
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var dataArticles = state.dataArticles;

  switch (action.type) {
    case "".concat(_const__WEBPACK_IMPORTED_MODULE_1__["default"].START_LOADING):
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: true
      });
      break;

    case "".concat(_const__WEBPACK_IMPORTED_MODULE_1__["default"].DONE_LOADING):
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loading: false
      });
      break;

    case "".concat(_const__WEBPACK_IMPORTED_MODULE_1__["default"].SET_ARTICLES):
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        dataArticles: action.payload
      });
      break;

    default:
      return state;
  }
}

/***/ })

})
//# sourceMappingURL=home.js.f66aa6c59b8bbf266125.hot-update.js.map