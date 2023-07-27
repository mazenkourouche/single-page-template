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

/***/ "./components/library/button.js":
/*!**************************************!*\
  !*** ./components/library/button.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Button = (param)=>{\n    let { style , color , rounding , children  } = param;\n    let buttonStyle = {};\n    let roundingStyle = \"\";\n    switch(style){\n        case \"solid\":\n            buttonStyle = {\n                backgroundColor: color,\n                color: \"#fff\"\n            };\n            break;\n        case \"outline\":\n            buttonStyle = {\n                border: \"2px solid \".concat(color),\n                color: color\n            };\n            break;\n        default:\n            break;\n    }\n    switch(rounding){\n        case \"none\":\n            roundingStyle = \"\";\n            break;\n        case \"rounded\":\n            roundingStyle = \"rounded-lg\";\n            break;\n        case \"pill\":\n            roundingStyle = \"rounded-full\";\n            break;\n        default:\n            break;\n    }\n    const darkerColor = function(color) {\n        let amt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 60;\n        let usePound = false;\n        if (color[0] === \"#\") {\n            color = color.slice(1);\n            usePound = true;\n        }\n        let num = parseInt(color, 16);\n        let r = (num >> 16) - amt;\n        let b = (num >> 8 & 0x00ff) - amt;\n        let g = (num & 0x0000ff) - amt;\n        if (r < 0) r = 0;\n        if (b < 0) b = 0;\n        if (g < 0) g = 0;\n        return (usePound ? \"#\" : \"\") + (g | b << 8 | r << 16).toString(16);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"px-4 py-2 \".concat(roundingStyle),\n        style: buttonStyle,\n        onMouseEnter: (e)=>{\n            if (style === \"solid\") {\n                e.target.style.backgroundColor = darkerColor(color, 20);\n            } else {\n                e.target.style.backgroundColor = color;\n                e.target.style.color = \"#fff\";\n            }\n        },\n        onMouseLeave: (e)=>{\n            if (style === \"solid\") {\n                e.target.style.backgroundColor = color;\n                e.target.style.color = \"#fff\";\n            } else {\n                e.target.style.backgroundColor = \"transparent\";\n                e.target.style.color = color;\n            }\n        },\n        onMouseDown: (e)=>{\n            if (style === \"solid\") {\n                e.target.style.backgroundColor = darkerColor(color, 40);\n            } else {\n                e.target.style.backgroundColor = darkerColor(color, 20);\n                e.target.style.color = \"#fff\";\n            }\n        },\n        onMouseUp: (e)=>{\n            if (style === \"solid\") {\n                e.target.style.backgroundColor = darkerColor(color, 20);\n            } else {\n                e.target.style.backgroundColor = color;\n                e.target.style.color = \"#fff\";\n            }\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/mazenkourouche/Drive/Projects/single-page-template/my-app/components/library/button.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Button;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\nvar _c;\n$RefreshReg$(_c, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LElBQUlyQixVQUFVLFNBQVM7Z0JBQ3JCcUIsRUFBRUMsTUFBTSxDQUFDdEIsS0FBSyxDQUFDTSxlQUFlLEdBQUdFLFlBQVlQLE9BQU87WUFDdEQsT0FBTztnQkFDTG9CLEVBQUVDLE1BQU0sQ0FBQ3RCLEtBQUssQ0FBQ00sZUFBZSxHQUFHTDtnQkFDakNvQixFQUFFQyxNQUFNLENBQUN0QixLQUFLLENBQUNDLEtBQUssR0FBRztZQUN6QixDQUFDO1FBQ0g7a0JBRUNFOzs7Ozs7QUFHUDtLQTVGTUo7QUE4Rk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWJyYXJ5L2J1dHRvbi5qcz9lNDM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEJ1dHRvbiA9ICh7IHN0eWxlLCBjb2xvciwgcm91bmRpbmcsIGNoaWxkcmVuIH0pID0+IHtcbiAgbGV0IGJ1dHRvblN0eWxlID0ge307XG4gIGxldCByb3VuZGluZ1N0eWxlID0gJyc7XG5cbiAgc3dpdGNoIChzdHlsZSkge1xuICAgIGNhc2UgJ3NvbGlkJzpcbiAgICAgIGJ1dHRvblN0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgfTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ291dGxpbmUnOlxuICAgICAgYnV0dG9uU3R5bGUgPSB7XG4gICAgICAgIGJvcmRlcjogYDJweCBzb2xpZCAke2NvbG9yfWAsXG4gICAgICAgIGNvbG9yOiBjb2xvcixcbiAgICAgIH07XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgYnJlYWs7XG4gIH1cblxuICBzd2l0Y2ggKHJvdW5kaW5nKSB7XG4gICAgY2FzZSAnbm9uZSc6XG4gICAgICByb3VuZGluZ1N0eWxlID0gJyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdyb3VuZGVkJzpcbiAgICAgIHJvdW5kaW5nU3R5bGUgPSAncm91bmRlZC1sZyc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwaWxsJzpcbiAgICAgIHJvdW5kaW5nU3R5bGUgPSAncm91bmRlZC1mdWxsJztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxuXG4gIGNvbnN0IGRhcmtlckNvbG9yID0gKGNvbG9yLCBhbXQgPSA2MCkgPT4ge1xuICAgIGxldCB1c2VQb3VuZCA9IGZhbHNlO1xuICAgIGlmIChjb2xvclswXSA9PT0gJyMnKSB7XG4gICAgICBjb2xvciA9IGNvbG9yLnNsaWNlKDEpO1xuICAgICAgdXNlUG91bmQgPSB0cnVlO1xuICAgIH1cbiAgICBsZXQgbnVtID0gcGFyc2VJbnQoY29sb3IsIDE2KTtcbiAgICBsZXQgciA9IChudW0gPj4gMTYpIC0gYW10O1xuICAgIGxldCBiID0gKChudW0gPj4gOCkgJiAweDAwZmYpIC0gYW10O1xuICAgIGxldCBnID0gKG51bSAmIDB4MDAwMGZmKSAtIGFtdDtcbiAgICBpZiAociA8IDApIHIgPSAwO1xuICAgIGlmIChiIDwgMCkgYiA9IDA7XG4gICAgaWYgKGcgPCAwKSBnID0gMDtcbiAgICByZXR1cm4gKHVzZVBvdW5kID8gJyMnIDogJycpICsgKGcgfCAoYiA8PCA4KSB8IChyIDw8IDE2KSkudG9TdHJpbmcoMTYpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtgcHgtNCBweS0yICR7cm91bmRpbmdTdHlsZX1gfVxuICAgICAgc3R5bGU9e2J1dHRvblN0eWxlfVxuICAgICAgb25Nb3VzZUVudGVyPXsoZSkgPT4ge1xuICAgICAgICBpZiAoc3R5bGUgPT09ICdzb2xpZCcpIHtcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBkYXJrZXJDb2xvcihjb2xvciwgMjApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgb25Nb3VzZUxlYXZlPXsoZSkgPT4ge1xuICAgICAgICBpZiAoc3R5bGUgPT09ICdzb2xpZCcpIHtcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5jb2xvciA9ICcjZmZmJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICBvbk1vdXNlRG93bj17KGUpID0+IHtcbiAgICAgICAgaWYgKHN0eWxlID09PSAnc29saWQnKSB7XG4gICAgICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZGFya2VyQ29sb3IoY29sb3IsIDQwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBkYXJrZXJDb2xvcihjb2xvciwgMjApO1xuICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgb25Nb3VzZVVwPXsoZSkgPT4ge1xuICAgICAgICBpZiAoc3R5bGUgPT09ICdzb2xpZCcpIHtcbiAgICAgICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBkYXJrZXJDb2xvcihjb2xvciwgMjApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuICAgICAgICAgIGUudGFyZ2V0LnN0eWxlLmNvbG9yID0gJyNmZmYnO1xuICAgICAgICB9XG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsInN0eWxlIiwiY29sb3IiLCJyb3VuZGluZyIsImNoaWxkcmVuIiwiYnV0dG9uU3R5bGUiLCJyb3VuZGluZ1N0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyIiwiZGFya2VyQ29sb3IiLCJhbXQiLCJ1c2VQb3VuZCIsInNsaWNlIiwibnVtIiwicGFyc2VJbnQiLCJyIiwiYiIsImciLCJ0b1N0cmluZyIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uTW91c2VFbnRlciIsImUiLCJ0YXJnZXQiLCJvbk1vdXNlTGVhdmUiLCJvbk1vdXNlRG93biIsIm9uTW91c2VVcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/library/button.js\n"));

/***/ })

});