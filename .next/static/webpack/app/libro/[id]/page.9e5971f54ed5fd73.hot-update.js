"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/libro/[id]/page",{

/***/ "(app-client)/./src/app/libro/[id]/page.js":
/*!************************************!*\
  !*** ./src/app/libro/[id]/page.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _data_library_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/data/library.json */ \"(app-client)/./src/data/library.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction page(param) {\n    let { params  } = param;\n    _s();\n    const [libro, setLibro] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        _data_library_json__WEBPACK_IMPORTED_MODULE_1__.map((libro, index)=>{\n            if (libro.ISBN13 == params.id) {\n                setLibro(libro);\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex items-center justify-center bg-purple-500 text-white\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-4 rounded-md shadow-md max-w-xl w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-semibold mb-4\",\n                    children: libro.titulo\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Grupo-6\\\\src\\\\app\\\\libro\\\\[id]\\\\page.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-600 mb-2\",\n                    children: [\n                        \"Autor: \",\n                        libro.ISBN\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Grupo-6\\\\src\\\\app\\\\libro\\\\[id]\\\\page.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-600 mb-2\",\n                    children: [\n                        \"ISBN: \",\n                        libro.autor\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Grupo-6\\\\src\\\\app\\\\libro\\\\[id]\\\\page.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-gray-700\",\n                    children: libro.idioma\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Grupo-6\\\\src\\\\app\\\\libro\\\\[id]\\\\page.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Grupo-6\\\\src\\\\app\\\\libro\\\\[id]\\\\page.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Documents\\\\GitHub\\\\Grupo-6\\\\src\\\\app\\\\libro\\\\[id]\\\\page.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"47vqNOwENMQtDdhA3t+S2xCHkpI=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9saWJyby9baWRdL3BhZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3QztBQUNHO0FBRTVCLFNBQVNHLEtBQUssS0FBVSxFQUFFO1FBQVosRUFBRUMsT0FBTSxFQUFFLEdBQVY7O0lBRTNCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHSiwrQ0FBUUEsQ0FBQyxDQUFDO0lBRXBDRCxnREFBU0EsQ0FBQyxJQUFJO1FBRVZELG1EQUFVLENBQUMsQ0FBQ0ssT0FBT0csUUFBUTtZQUN2QixJQUFHSCxNQUFNSSxNQUFNLElBQUlMLE9BQU9NLEVBQUUsRUFBQztnQkFDekJKLFNBQVNEO1lBQ2IsQ0FBQztRQUNMO0lBRUosR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUViLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBK0JQLE1BQU1TLE1BQU07Ozs7Ozs4QkFDekQsOERBQUNDO29CQUFFSCxXQUFVOzt3QkFBcUI7d0JBQVFQLE1BQU1XLElBQUk7Ozs7Ozs7OEJBQ3BELDhEQUFDRDtvQkFBRUgsV0FBVTs7d0JBQXFCO3dCQUFPUCxNQUFNWSxLQUFLOzs7Ozs7OzhCQUNwRCw4REFBQ0Y7b0JBQUVILFdBQVU7OEJBQWlCUCxNQUFNYSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRCxDQUFDO0dBMUJ1QmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9saWJyby9baWRdL3BhZ2UuanM/ZTBlZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IGxpYnJvcyBmcm9tICdAL2RhdGEvbGlicmFyeS5qc29uJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlKHsgcGFyYW1zIH0pIHtcclxuXHJcbiAgY29uc3QgW2xpYnJvLCBzZXRMaWJyb10gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG5cclxuICAgICAgbGlicm9zLm1hcCgobGlicm8sIGluZGV4KT0+e1xyXG4gICAgICAgICAgaWYobGlicm8uSVNCTjEzID09IHBhcmFtcy5pZCl7XHJcbiAgICAgICAgICAgICAgc2V0TGlicm8obGlicm8pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctcHVycGxlLTUwMCB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQtbWQgc2hhZG93LW1kIG1heC13LXhsIHctZnVsbFwiPlxyXG5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZCBtYi00XCI+e2xpYnJvLnRpdHVsb308L2gxPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbWItMlwiPkF1dG9yOiB7bGlicm8uSVNCTn08L3A+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCBtYi0yXCI+SVNCTjoge2xpYnJvLmF1dG9yfTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+e2xpYnJvLmlkaW9tYX08L3A+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsibGlicm9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJwYWdlIiwicGFyYW1zIiwibGlicm8iLCJzZXRMaWJybyIsIm1hcCIsImluZGV4IiwiSVNCTjEzIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInRpdHVsbyIsInAiLCJJU0JOIiwiYXV0b3IiLCJpZGlvbWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/libro/[id]/page.js\n"));

/***/ })

});