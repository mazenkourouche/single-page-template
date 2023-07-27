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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": function() { return /* binding */ Button; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinner */ \"./components/library/spinner.js\");\n/* harmony import */ var _getResponsiveClasses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getResponsiveClasses */ \"./components/library/getResponsiveClasses.js\");\n\n\n\n\n// Simple Icon component for demonstration purposes\n// Modify the size of HeroIcon component for demonstration purposes\nconst Icon = (param)=>{\n    let { icon , size =6  } = param;\n    const IconComponent = icon;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(IconComponent, {\n        className: \"h-\".concat(size, \" w-\").concat(size)\n    }, void 0, false, {\n        fileName: \"/Users/mazenkourouche/Drive/Projects/single-page-template/my-app/components/library/button.js\",\n        lineNumber: 10,\n        columnNumber: 10\n    }, undefined);\n};\n_c = Icon;\nconst Button = (param)=>{\n    let { colorScheme =\"gray\" , iconSpacing =2 , isActive =false , isDisabled =false , isLoading =false , leftIcon , loadingText , rightIcon , size =\"md\" , spinnerPlacement =\"start\" , variant =\"solid\" , children , style ={} , onClick , type  } = param;\n    const buttonBaseClasses = \"inline-flex items-center justify-center border rounded focus:outline-none transition-colors duration-150\";\n    const buttonVariantClasses = variant === \"solid\" ? \"bg-\".concat(colorScheme, \"-500 text-white hover:bg-\").concat(colorScheme, \"-600 active:bg-\").concat(colorScheme, \"-700\") : \"text-\".concat(colorScheme, \"-500 border-\").concat(colorScheme, \"-500 hover:bg-\").concat(colorScheme, \"-100 active:bg-\").concat(colorScheme, \"-200\");\n    const buttonSizeClasses = size === \"sm\" ? \"px-2 py-1 text-sm\" : size === \"md\" ? \"px-4 py-2\" : \"px-6 py-3 text-lg\";\n    const buttonSpacingClasses = \"space-x-\".concat((0,_getResponsiveClasses__WEBPACK_IMPORTED_MODULE_3__.getResponsiveClasses)(iconSpacing));\n    const buttonActiveClasses = isActive ? \"ring-2 ring-\".concat(colorScheme, \"-300\") : \"\";\n    const buttonDisabledClasses = isDisabled ? \"opacity-50 cursor-not-allowed\" : \"\";\n    const customColorStyle = {\n        color: style.color || null,\n        backgroundColor: style.backgroundColor || null\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"\".concat(buttonBaseClasses, \" \").concat(buttonVariantClasses, \" \").concat(buttonSizeClasses, \" \").concat(buttonSpacingClasses, \" \").concat(buttonActiveClasses, \" \").concat(buttonDisabledClasses),\n        disabled: isDisabled,\n        style: customColorStyle,\n        onClick: onClick,\n        type: type,\n        children: [\n            isLoading && spinnerPlacement === \"start\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mazenkourouche/Drive/Projects/single-page-template/my-app/components/library/button.js\",\n                lineNumber: 61,\n                columnNumber: 53\n            }, undefined),\n            leftIcon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                icon: leftIcon\n            }, void 0, false, {\n                fileName: \"/Users/mazenkourouche/Drive/Projects/single-page-template/my-app/components/library/button.js\",\n                lineNumber: 62,\n                columnNumber: 20\n            }, undefined),\n            isLoading ? loadingText : children,\n            rightIcon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                icon: rightIcon\n            }, void 0, false, {\n                fileName: \"/Users/mazenkourouche/Drive/Projects/single-page-template/my-app/components/library/button.js\",\n                lineNumber: 64,\n                columnNumber: 21\n            }, undefined),\n            isLoading && spinnerPlacement === \"end\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_spinner__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mazenkourouche/Drive/Projects/single-page-template/my-app/components/library/button.js\",\n                lineNumber: 65,\n                columnNumber: 51\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mazenkourouche/Drive/Projects/single-page-template/my-app/components/library/button.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Button;\nvar _c, _c1;\n$RefreshReg$(_c, \"Icon\");\n$RefreshReg$(_c1, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2xpYnJhcnkvYnV0dG9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUVNO0FBQzhCO0FBRTlELG1EQUFtRDtBQUNuRCxtRUFBbUU7QUFDbkUsTUFBTUcsT0FBTyxTQUF3QjtRQUF2QixFQUFFQyxLQUFJLEVBQUVDLE1BQU8sRUFBQyxFQUFFO0lBQzlCLE1BQU1DLGdCQUFnQkY7SUFDdEIscUJBQU8sOERBQUNFO1FBQWNDLFdBQVcsS0FBZUYsT0FBVkEsTUFBSyxPQUFVLE9BQUxBOzs7Ozs7QUFDbEQ7S0FITUY7QUFLQyxNQUFNSyxTQUFTLFNBZ0JoQjtRQWhCaUIsRUFDckJDLGFBQWMsT0FBTSxFQUNwQkMsYUFBYyxFQUFDLEVBQ2ZDLFVBQVcsS0FBSyxHQUNoQkMsWUFBYSxLQUFLLEdBQ2xCQyxXQUFZLEtBQUssR0FDakJDLFNBQVEsRUFDUkMsWUFBVyxFQUNYQyxVQUFTLEVBQ1RYLE1BQU8sS0FBSSxFQUNYWSxrQkFBbUIsUUFBTyxFQUMxQkMsU0FBVSxRQUFPLEVBQ2pCQyxTQUFRLEVBQ1JDLE9BQVEsQ0FBQyxFQUFDLEVBQ1ZDLFFBQU8sRUFDUEMsS0FBSSxFQUNMO0lBQ0MsTUFBTUMsb0JBQ0o7SUFDRixNQUFNQyx1QkFDSk4sWUFBWSxVQUNSLE1BQTZDVCxPQUF2Q0EsYUFBWSw2QkFBd0RBLE9BQTdCQSxhQUFZLG1CQUE2QixPQUFaQSxhQUFZLFVBQ3RGLFFBQWtDQSxPQUExQkEsYUFBWSxnQkFBMENBLE9BQTVCQSxhQUFZLGtCQUE2Q0EsT0FBN0JBLGFBQVksbUJBQTZCLE9BQVpBLGFBQVksT0FBSztJQUNsSCxNQUFNZ0Isb0JBQ0pwQixTQUFTLE9BQ0wsc0JBQ0FBLFNBQVMsT0FDVCxjQUNBLG1CQUFtQjtJQUN6QixNQUFNcUIsdUJBQXVCLFdBQTZDLE9BQWxDeEIsMkVBQW9CQSxDQUFDUTtJQUM3RCxNQUFNaUIsc0JBQXNCaEIsV0FBVyxlQUEyQixPQUFaRixhQUFZLFVBQVEsRUFBRTtJQUM1RSxNQUFNbUIsd0JBQXdCaEIsYUFDMUIsa0NBQ0EsRUFBRTtJQUVOLE1BQU1pQixtQkFBbUI7UUFDdkJDLE9BQU9WLE1BQU1VLEtBQUssSUFBSSxJQUFJO1FBQzFCQyxpQkFBaUJYLE1BQU1XLGVBQWUsSUFBSSxJQUFJO0lBQ2hEO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0N6QixXQUFXLEdBQXdCaUIsT0FBckJELG1CQUFrQixLQUEyQkUsT0FBeEJELHNCQUFxQixLQUF3QkUsT0FBckJELG1CQUFrQixLQUEyQkUsT0FBeEJELHNCQUFxQixLQUEwQkUsT0FBdkJELHFCQUFvQixLQUF5QixPQUF0QkM7UUFDL0hLLFVBQVVyQjtRQUNWUSxPQUFPUztRQUNQUixTQUFTQTtRQUNUQyxNQUFNQTs7WUFFTFQsYUFBYUkscUJBQXFCLHlCQUFXLDhEQUFDaEIsZ0RBQU9BOzs7OztZQUNyRGEsMEJBQVksOERBQUNYO2dCQUFLQyxNQUFNVTs7Ozs7O1lBQ3hCRCxZQUFZRSxjQUFjSSxRQUFRO1lBQ2xDSCwyQkFBYSw4REFBQ2I7Z0JBQUtDLE1BQU1ZOzs7Ozs7WUFDekJILGFBQWFJLHFCQUFxQix1QkFBUyw4REFBQ2hCLGdEQUFPQTs7Ozs7Ozs7Ozs7QUFHMUQsRUFBRTtNQXZEV08iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9saWJyYXJ5L2J1dHRvbi5qcz9lNDM5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBTcGlubmVyIGZyb20gJy4vc3Bpbm5lcic7XG5pbXBvcnQgeyBnZXRSZXNwb25zaXZlQ2xhc3NlcyB9IGZyb20gJy4vZ2V0UmVzcG9uc2l2ZUNsYXNzZXMnO1xuXG4vLyBTaW1wbGUgSWNvbiBjb21wb25lbnQgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXNcbi8vIE1vZGlmeSB0aGUgc2l6ZSBvZiBIZXJvSWNvbiBjb21wb25lbnQgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXNcbmNvbnN0IEljb24gPSAoeyBpY29uLCBzaXplID0gNiB9KSA9PiB7XG4gIGNvbnN0IEljb25Db21wb25lbnQgPSBpY29uO1xuICByZXR1cm4gPEljb25Db21wb25lbnQgY2xhc3NOYW1lPXtgaC0ke3NpemV9IHctJHtzaXplfWB9IC8+O1xufTtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9ICh7XG4gIGNvbG9yU2NoZW1lID0gJ2dyYXknLFxuICBpY29uU3BhY2luZyA9IDIsXG4gIGlzQWN0aXZlID0gZmFsc2UsXG4gIGlzRGlzYWJsZWQgPSBmYWxzZSxcbiAgaXNMb2FkaW5nID0gZmFsc2UsXG4gIGxlZnRJY29uLFxuICBsb2FkaW5nVGV4dCxcbiAgcmlnaHRJY29uLFxuICBzaXplID0gJ21kJyxcbiAgc3Bpbm5lclBsYWNlbWVudCA9ICdzdGFydCcsXG4gIHZhcmlhbnQgPSAnc29saWQnLFxuICBjaGlsZHJlbixcbiAgc3R5bGUgPSB7fSxcbiAgb25DbGljayxcbiAgdHlwZSxcbn0pID0+IHtcbiAgY29uc3QgYnV0dG9uQmFzZUNsYXNzZXMgPVxuICAgICdpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyIHJvdW5kZWQgZm9jdXM6b3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTE1MCc7XG4gIGNvbnN0IGJ1dHRvblZhcmlhbnRDbGFzc2VzID1cbiAgICB2YXJpYW50ID09PSAnc29saWQnXG4gICAgICA/IGBiZy0ke2NvbG9yU2NoZW1lfS01MDAgdGV4dC13aGl0ZSBob3ZlcjpiZy0ke2NvbG9yU2NoZW1lfS02MDAgYWN0aXZlOmJnLSR7Y29sb3JTY2hlbWV9LTcwMGBcbiAgICAgIDogYHRleHQtJHtjb2xvclNjaGVtZX0tNTAwIGJvcmRlci0ke2NvbG9yU2NoZW1lfS01MDAgaG92ZXI6YmctJHtjb2xvclNjaGVtZX0tMTAwIGFjdGl2ZTpiZy0ke2NvbG9yU2NoZW1lfS0yMDBgO1xuICBjb25zdCBidXR0b25TaXplQ2xhc3NlcyA9XG4gICAgc2l6ZSA9PT0gJ3NtJ1xuICAgICAgPyAncHgtMiBweS0xIHRleHQtc20nXG4gICAgICA6IHNpemUgPT09ICdtZCdcbiAgICAgID8gJ3B4LTQgcHktMidcbiAgICAgIDogJ3B4LTYgcHktMyB0ZXh0LWxnJztcbiAgY29uc3QgYnV0dG9uU3BhY2luZ0NsYXNzZXMgPSBgc3BhY2UteC0ke2dldFJlc3BvbnNpdmVDbGFzc2VzKGljb25TcGFjaW5nKX1gO1xuICBjb25zdCBidXR0b25BY3RpdmVDbGFzc2VzID0gaXNBY3RpdmUgPyBgcmluZy0yIHJpbmctJHtjb2xvclNjaGVtZX0tMzAwYCA6ICcnO1xuICBjb25zdCBidXR0b25EaXNhYmxlZENsYXNzZXMgPSBpc0Rpc2FibGVkXG4gICAgPyAnb3BhY2l0eS01MCBjdXJzb3Itbm90LWFsbG93ZWQnXG4gICAgOiAnJztcblxuICBjb25zdCBjdXN0b21Db2xvclN0eWxlID0ge1xuICAgIGNvbG9yOiBzdHlsZS5jb2xvciB8fCBudWxsLFxuICAgIGJhY2tncm91bmRDb2xvcjogc3R5bGUuYmFja2dyb3VuZENvbG9yIHx8IG51bGwsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2Ake2J1dHRvbkJhc2VDbGFzc2VzfSAke2J1dHRvblZhcmlhbnRDbGFzc2VzfSAke2J1dHRvblNpemVDbGFzc2VzfSAke2J1dHRvblNwYWNpbmdDbGFzc2VzfSAke2J1dHRvbkFjdGl2ZUNsYXNzZXN9ICR7YnV0dG9uRGlzYWJsZWRDbGFzc2VzfWB9XG4gICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZH1cbiAgICAgIHN0eWxlPXtjdXN0b21Db2xvclN0eWxlfVxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgIHR5cGU9e3R5cGV9XG4gICAgPlxuICAgICAge2lzTG9hZGluZyAmJiBzcGlubmVyUGxhY2VtZW50ID09PSAnc3RhcnQnICYmIDxTcGlubmVyIC8+fVxuICAgICAge2xlZnRJY29uICYmIDxJY29uIGljb249e2xlZnRJY29ufSAvPn1cbiAgICAgIHtpc0xvYWRpbmcgPyBsb2FkaW5nVGV4dCA6IGNoaWxkcmVufVxuICAgICAge3JpZ2h0SWNvbiAmJiA8SWNvbiBpY29uPXtyaWdodEljb259IC8+fVxuICAgICAge2lzTG9hZGluZyAmJiBzcGlubmVyUGxhY2VtZW50ID09PSAnZW5kJyAmJiA8U3Bpbm5lciAvPn1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJTcGlubmVyIiwiZ2V0UmVzcG9uc2l2ZUNsYXNzZXMiLCJJY29uIiwiaWNvbiIsInNpemUiLCJJY29uQ29tcG9uZW50IiwiY2xhc3NOYW1lIiwiQnV0dG9uIiwiY29sb3JTY2hlbWUiLCJpY29uU3BhY2luZyIsImlzQWN0aXZlIiwiaXNEaXNhYmxlZCIsImlzTG9hZGluZyIsImxlZnRJY29uIiwibG9hZGluZ1RleHQiLCJyaWdodEljb24iLCJzcGlubmVyUGxhY2VtZW50IiwidmFyaWFudCIsImNoaWxkcmVuIiwic3R5bGUiLCJvbkNsaWNrIiwidHlwZSIsImJ1dHRvbkJhc2VDbGFzc2VzIiwiYnV0dG9uVmFyaWFudENsYXNzZXMiLCJidXR0b25TaXplQ2xhc3NlcyIsImJ1dHRvblNwYWNpbmdDbGFzc2VzIiwiYnV0dG9uQWN0aXZlQ2xhc3NlcyIsImJ1dHRvbkRpc2FibGVkQ2xhc3NlcyIsImN1c3RvbUNvbG9yU3R5bGUiLCJjb2xvciIsImJhY2tncm91bmRDb2xvciIsImJ1dHRvbiIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/library/button.js\n"));

/***/ })

});