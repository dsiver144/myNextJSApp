"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Header({ title  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nnguyenlong\\\\Documents\\\\GitHub\\\\MyNextWeb\\\\src\\\\pages\\\\index.jsx\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\nfunction HomePage() {\n    const names = [\n        \"Ada Lovelace\",\n        \"Grace Hopper\",\n        \"Margaret Hamilton\"\n    ];\n    const [likes, setLikes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const currentRefresh = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    function handleClick() {\n        setLikes((previousLike)=>previousLike + 1);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        currentRefresh.current += 1;\n        const interval = setInterval(()=>{\n            setLikes((previousLike)=>previousLike + 1);\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Develop. Preview. Ship. \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nnguyenlong\\\\Documents\\\\GitHub\\\\MyNextWeb\\\\src\\\\pages\\\\index.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: names.map((name)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"C:\\\\Users\\\\nnguyenlong\\\\Documents\\\\GitHub\\\\MyNextWeb\\\\src\\\\pages\\\\index.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\nnguyenlong\\\\Documents\\\\GitHub\\\\MyNextWeb\\\\src\\\\pages\\\\index.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: [\n                    \"Like (\",\n                    likes,\n                    \") ($\",\n                    currentRefresh.current,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\nnguyenlong\\\\Documents\\\\GitHub\\\\MyNextWeb\\\\src\\\\pages\\\\index.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\nnguyenlong\\\\Documents\\\\GitHub\\\\MyNextWeb\\\\src\\\\pages\\\\index.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBNkQ7QUFFN0QsU0FBU0ksT0FBTyxFQUFFQyxNQUFLLEVBQUUsRUFBRTtJQUN6QixxQkFBTyw4REFBQ0M7a0JBQUlELFFBQVFBLFFBQVEsZUFBZTs7Ozs7O0FBQzdDO0FBRWUsU0FBU0UsV0FBVztJQUNqQyxNQUFNQyxRQUFRO1FBQUM7UUFBZ0I7UUFBZ0I7S0FBb0I7SUFDbkUsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU1RLGlCQUFpQlQsNkNBQU1BLENBQUM7SUFFOUIsU0FBU1UsY0FBYztRQUNyQkYsU0FBUyxDQUFDRyxlQUFpQkEsZUFBZTtJQUM1QztJQUVBYixnREFBU0EsQ0FBQyxJQUFNO1FBQ2RXLGVBQWVHLE9BQU8sSUFBSTtRQUMxQixNQUFNQyxXQUFXQyxZQUFZLElBQU07WUFDL0JOLFNBQVMsQ0FBQ0csZUFBaUJBLGVBQWU7UUFDOUMsR0FBRztRQUNILE9BQU8sSUFBTTtZQUNYSSxjQUFjRjtRQUNoQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ2Q7Z0JBQU9DLE9BQU07Ozs7OzswQkFDZCw4REFBQ2M7MEJBQ0VYLE1BQU1ZLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0M7a0NBQWVEO3VCQUFQQTs7Ozs7Ozs7OzswQkFJYiw4REFBQ0U7Z0JBQU9DLFNBQVNaOztvQkFBYTtvQkFBT0g7b0JBQU07b0JBQUtFLGVBQWVHLE9BQU87b0JBQUM7Ozs7Ozs7Ozs7Ozs7QUFHN0UsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL015TmV4dFdlYi8uL3NyYy9wYWdlcy9pbmRleC5qc3g/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoeyB0aXRsZSB9KSB7XHJcbiAgcmV0dXJuIDxoMT57dGl0bGUgPyB0aXRsZSA6ICdEZWZhdWx0IHRpdGxlJ308L2gxPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgY29uc3QgbmFtZXMgPSBbJ0FkYSBMb3ZlbGFjZScsICdHcmFjZSBIb3BwZXInLCAnTWFyZ2FyZXQgSGFtaWx0b24nXTtcclxuICBjb25zdCBbbGlrZXMsIHNldExpa2VzXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGN1cnJlbnRSZWZyZXNoID0gdXNlUmVmKDApO1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcclxuICAgIHNldExpa2VzKChwcmV2aW91c0xpa2UpID0+IHByZXZpb3VzTGlrZSArIDEpO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGN1cnJlbnRSZWZyZXNoLmN1cnJlbnQgKz0gMTtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgIHNldExpa2VzKChwcmV2aW91c0xpa2UpID0+IHByZXZpb3VzTGlrZSArIDEpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEhlYWRlciB0aXRsZT1cIkRldmVsb3AuIFByZXZpZXcuIFNoaXAuIPCfmoBcIiAvPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge25hbWVzLm1hcCgobmFtZSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17bmFtZX0+e25hbWV9PC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuXHJcbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9Pkxpa2UgKHtsaWtlc30pICgke2N1cnJlbnRSZWZyZXNoLmN1cnJlbnR9KTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJIZWFkZXIiLCJ0aXRsZSIsImgxIiwiSG9tZVBhZ2UiLCJuYW1lcyIsImxpa2VzIiwic2V0TGlrZXMiLCJjdXJyZW50UmVmcmVzaCIsImhhbmRsZUNsaWNrIiwicHJldmlvdXNMaWtlIiwiY3VycmVudCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiZGl2IiwidWwiLCJtYXAiLCJuYW1lIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.jsx"));
module.exports = __webpack_exports__;

})();