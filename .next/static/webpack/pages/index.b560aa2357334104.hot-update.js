"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/elements/HomePage.jsx":
/*!**********************************************!*\
  !*** ./src/components/elements/HomePage.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomePage\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Header(param) {\n    let { title  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nnguyenlong\\\\Documents\\\\GitHub\\\\MyNextWeb\\\\src\\\\components\\\\elements\\\\HomePage.jsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\n_c = Header;\nfunction HomePage() {\n    _s();\n    const names = [\n        \"Ada Lovelace\",\n        \"Grace Hopper\",\n        \"Margaret Hamilton\"\n    ];\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const currentRefresh = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    function handleClick() {\n        setLikes((previousLike)=>previousLike + 1);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        currentRefresh.current += 1;\n        const interval = setInterval(()=>{\n            setLikes((previousLike)=>previousLike + 1);\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Develop. Preview. Ship. \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nnguyenlong\\\\Documents\\\\GitHub\\\\MyNextWeb\\\\src\\\\components\\\\elements\\\\HomePage.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: names.map((name)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"C:\\\\Users\\\\nnguyenlong\\\\Documents\\\\GitHub\\\\MyNextWeb\\\\src\\\\components\\\\elements\\\\HomePage.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nnguyenlong\\\\Documents\\\\GitHub\\\\MyNextWeb\\\\src\\\\components\\\\elements\\\\HomePage.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: [\n                    \"Like (\",\n                    likes,\n                    \") ($\",\n                    currentRefresh.current,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nnguyenlong\\\\Documents\\\\GitHub\\\\MyNextWeb\\\\src\\\\components\\\\elements\\\\HomePage.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nnguyenlong\\\\Documents\\\\GitHub\\\\MyNextWeb\\\\src\\\\components\\\\elements\\\\HomePage.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"iHDYw1BkpnkvUJrxwFh+5uqP+Lo=\");\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9lbGVtZW50cy9Ib21lUGFnZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBNkQ7QUFFN0QsU0FBU0ksT0FBTyxLQUFTLEVBQUU7UUFBWCxFQUFFQyxNQUFLLEVBQUUsR0FBVDtJQUNkLHFCQUFPLDhEQUFDQztrQkFBSUQsUUFBUUEsUUFBUSxlQUFlOzs7Ozs7QUFDN0M7S0FGU0Q7QUFJRixTQUFTRyxXQUFXOztJQUN6QixNQUFNQyxRQUFRO1FBQUM7UUFBZ0I7UUFBZ0I7S0FBb0I7SUFDbkUsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1RLGlCQUFpQlQsNkNBQU1BLENBQUM7SUFFOUIsU0FBU1UsY0FBYztRQUNyQkYsU0FBUyxDQUFDRyxlQUFpQkEsZUFBZTtJQUM1QztJQUVBYixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RXLGVBQWVHLE9BQU8sSUFBSTtRQUMxQixNQUFNQyxXQUFXQyxZQUFZLElBQU07WUFDL0JOLFNBQVMsQ0FBQ0csZUFBaUJBLGVBQWU7UUFDOUMsR0FBRztRQUNILE9BQU8sSUFBTTtZQUNYSSxjQUFjRjtRQUNoQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ2Q7Z0JBQU9DLE9BQU07Ozs7OzswQkFDZCw4REFBQ2M7MEJBQ0VYLE1BQU1ZLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0M7a0NBQWVEO3VCQUFQQTs7Ozs7Ozs7OzswQkFJYiw4REFBQ0U7Z0JBQU9DLFNBQVNaOztvQkFBYTtvQkFBT0g7b0JBQU07b0JBQUtFLGVBQWVHLE9BQU87b0JBQUM7Ozs7Ozs7Ozs7Ozs7QUFHN0UsQ0FBQztHQS9CZVA7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZWxlbWVudHMvSG9tZVBhZ2UuanN4P2VlODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHsgdGl0bGUgfSkge1xyXG4gIHJldHVybiA8aDE+e3RpdGxlID8gdGl0bGUgOiAnRGVmYXVsdCB0aXRsZSd9PC9oMT47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcclxuICBjb25zdCBuYW1lcyA9IFsnQWRhIExvdmVsYWNlJywgJ0dyYWNlIEhvcHBlcicsICdNYXJnYXJldCBIYW1pbHRvbiddO1xyXG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgY3VycmVudFJlZnJlc2ggPSB1c2VSZWYoMCk7XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgc2V0TGlrZXMoKHByZXZpb3VzTGlrZSkgPT4gcHJldmlvdXNMaWtlICsgMSk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY3VycmVudFJlZnJlc2guY3VycmVudCArPSAxO1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgc2V0TGlrZXMoKHByZXZpb3VzTGlrZSkgPT4gcHJldmlvdXNMaWtlICsgMSk7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZGVyIHRpdGxlPVwiRGV2ZWxvcC4gUHJldmlldy4gU2hpcC4g8J+agFwiIC8+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7bmFtZXMubWFwKChuYW1lKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtuYW1lfT57bmFtZX08L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG5cclxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+TGlrZSAoe2xpa2VzfSkgKCR7Y3VycmVudFJlZnJlc2guY3VycmVudH0pPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsInRpdGxlIiwiaDEiLCJIb21lUGFnZSIsIm5hbWVzIiwibGlrZXMiLCJzZXRMaWtlcyIsImN1cnJlbnRSZWZyZXNoIiwiaGFuZGxlQ2xpY2siLCJwcmV2aW91c0xpa2UiLCJjdXJyZW50IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJ1bCIsIm1hcCIsIm5hbWUiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/elements/HomePage.jsx\n"));

/***/ })

});