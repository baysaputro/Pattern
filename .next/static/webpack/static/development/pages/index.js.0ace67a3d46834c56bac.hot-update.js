webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Services/API/news.js":
/*!************************************!*\
  !*** ./pages/Services/API/news.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Pages */ "./pages/Pages/index.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/home/bay/Work/Pattern/pages/Services/API/news.js";




function News(_ref) {
  var dataArticles = _ref.dataArticles,
      status = _ref.status;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Pages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    status: status,
    dataArticles: dataArticles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), " ");
} // Page.getInitialProps = async ({ req }) => {
//   let inet = CheckInternetConnection()
//   console.log(inet)
//   let apiKey = '3e6d0f91b9f14b00a5e63f63eb35ee8b',
//   page       = 1, 
//   pageSize   = 5;
//   const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`);
//   const data = await res.json()
//   console.log(data)
//   return { dataArticles: data.articles }
// }


News.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, apiKey, page, status, pageSize, res, data;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req;
            apiKey = '3e6d0f91b9f14b00a5e63f63eb35ee8b', page = 1, status = false, pageSize = 5;
            _context.next = 4;
            return fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=".concat(apiKey, "&page=").concat(page, "&pageSize=").concat(pageSize)).then(function (response) {
              if (!response.ok) {
                throw Error(response.statusText);
              }

              return response;
            }).then(function (response) {
              status = false;
              return response;
            }).catch(function (error) {
              status = true;
              console.log(status);
            });

          case 4:
            res = _context.sent;

            if (!status) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", {
              dataArticles: [],
              status: false
            });

          case 9:
            console.log(data);
            _context.next = 12;
            return res.json();

          case 12:
            data = _context.sent;
            return _context.abrupt("return", {
              dataArticles: data.articles,
              status: false
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}(); // Page.getInitialProps = async ({ req }) => {
//   console.log(!navigator);
//   if (!navigator){
//     return { dataArticles:[] }
//   }else{
//     if(navigator.onLine){
//       console.log('online');
//       let apiKey = '3e6d0f91b9f14b00a5e63f63eb35ee8b',
//       page       = 1, 
//       pageSize   = 5;
//       const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`);
//       const data = await res.json()
//       return { dataArticles: data.articles }
//     } else {
//       console.log('offline')
//     }
//   }
// }


/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ })

})
//# sourceMappingURL=index.js.0ace67a3d46834c56bac.hot-update.js.map