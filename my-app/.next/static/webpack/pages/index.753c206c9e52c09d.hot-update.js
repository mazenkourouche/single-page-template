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

/***/ "./components/global/layout.js":
/*!*************************************!*\
  !*** ./components/global/layout.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/index.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ \"./components/global/navbar.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./components/global/footer.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_fonts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/fonts */ \"./utils/fonts.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nconst solutions = [\n    {\n        name: \"Analytics\",\n        description: \"Get a better understanding of where your traffic is coming from.\",\n        href: \"#\",\n        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__.ChartBarIcon\n    },\n    {\n        name: \"Engagement\",\n        description: \"Speak directly to your customers in a more meaningful way.\",\n        href: \"#\",\n        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__.CursorArrowRaysIcon\n    },\n    {\n        name: \"Security\",\n        description: \"Your customers' data will be safe and secure.\",\n        href: \"#\",\n        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__.ShieldCheckIcon\n    },\n    {\n        name: \"Integrations\",\n        description: \"Connect with third-party tools that you're already using.\",\n        href: \"#\",\n        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__.Squares2X2Icon\n    },\n    {\n        name: \"Automations\",\n        description: \"Build strategic funnels that will drive your customers to convert\",\n        href: \"#\",\n        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__.ArrowPathIcon\n    },\n    {\n        name: \"Reports\",\n        description: \"Get detailed reports that will help you make more informed decisions \",\n        href: \"#\",\n        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__.DocumentChartBarIcon\n    }\n];\nconst resources = [\n    {\n        name: \"Help Center\",\n        description: \"Get all of your questions answered in our forums or contact support.\",\n        href: \"#\"\n    },\n    {\n        name: \"Guides\",\n        description: \"Learn how to maximize our platform to get the most out of it.\",\n        href: \"#\"\n    },\n    {\n        name: \"Events\",\n        description: \"See what meet-ups and other events we might be planning near you.\",\n        href: \"#\"\n    },\n    {\n        name: \"Security\",\n        description: \"Understand how we take your privacy seriously.\",\n        href: \"#\"\n    }\n];\nfunction classNames() {\n    for(var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++){\n        classes[_key] = arguments[_key];\n    }\n    return classes.filter(Boolean).join(\" \");\n}\nfunction Layout(param) {\n    let { children, title, canonical, description } = param;\n    _s();\n    const [showingPullout, setShowingPullout] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    return(// <div className=\"flex flex-col h-screen\">\n    //   <Head>\n    //     <title key=\"title\">{title + \" - AirXperts\"}</title>\n    //     <link rel=\"canonical\" href={`https://airxperts.com.au/${canonical}`} />\n    //     <meta name=\"description\" content={description} />\n    //     <meta property=\"og:title\" content={title + \" - AirXperts\"} />\n    //     <meta property=\"og:description\" content={description} />\n    //     {/* <SEO /> */}\n    //   </Head>\n    //   <header className=\"relative z-10 \">\n    //     <NavigationBar />\n    //     {/* Sticky Header and Footer with Tailwind */}\n    //   </header>\n    //   <main className=\"relative overflow-y-auto\">\n    //     <div>{children}</div>\n    //     <Footer />\n    //   </main>\n    // </div>\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen bg-white \".concat(_utils_fonts__WEBPACK_IMPORTED_MODULE_7__.geologica.className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" fixed z-20 w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/mazenkourouche/Drive/Projects/single-page-template/my-app/components/global/layout.js\",\n                    lineNumber: 123,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mazenkourouche/Drive/Projects/single-page-template/my-app/components/global/layout.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex- mx-auto  text-lg w-full h-full  \",\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/mazenkourouche/Drive/Projects/single-page-template/my-app/components/global/layout.js\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/mazenkourouche/Drive/Projects/single-page-template/my-app/components/global/layout.js\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mazenkourouche/Drive/Projects/single-page-template/my-app/components/global/layout.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mazenkourouche/Drive/Projects/single-page-template/my-app/components/global/layout.js\",\n        lineNumber: 116,\n        columnNumber: 5\n    }, this));\n}\n_s(Layout, \"vmJuGjJbBRibjrPdAjvYRlBFcGk=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dsb2JhbC9sYXlvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFDRTtBQVduQjtBQUN3QztBQUMvQztBQUNBO0FBQ0Q7QUFDUTtBQUNSO0FBQ0U7QUFDVTtBQUV6QyxNQUFNdUIsWUFBWTtJQUNoQjtRQUNFQyxNQUFNO1FBQ05DLGFBQ0U7UUFDRkMsTUFBTTtRQUNOQyxNQUFNcEIscUVBQVlBO0lBQ3BCO0lBQ0E7UUFDRWlCLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxNQUFNO1FBQ05DLE1BQU1sQiw0RUFBbUJBO0lBQzNCO0lBQ0E7UUFDRWUsTUFBTTtRQUNOQyxhQUFhO1FBQ2JDLE1BQU07UUFDTkMsTUFBTWhCLHdFQUFlQTtJQUN2QjtJQUNBO1FBQ0VhLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxNQUFNO1FBQ05DLE1BQU1mLHVFQUFjQTtJQUN0QjtJQUNBO1FBQ0VZLE1BQU07UUFDTkMsYUFDRTtRQUNGQyxNQUFNO1FBQ05DLE1BQU10QixzRUFBYUE7SUFDckI7SUFDQTtRQUNFbUIsTUFBTTtRQUNOQyxhQUNFO1FBQ0ZDLE1BQU07UUFDTkMsTUFBTWpCLDZFQUFvQkE7SUFDNUI7Q0FDRDtBQUNELE1BQU1rQixZQUFZO0lBQ2hCO1FBQ0VKLE1BQU07UUFDTkMsYUFDRTtRQUNGQyxNQUFNO0lBQ1I7SUFDQTtRQUNFRixNQUFNO1FBQ05DLGFBQ0U7UUFDRkMsTUFBTTtJQUNSO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxhQUNFO1FBQ0ZDLE1BQU07SUFDUjtJQUNBO1FBQ0VGLE1BQU07UUFDTkMsYUFBYTtRQUNiQyxNQUFNO0lBQ1I7Q0FDRDtBQUVELFNBQVNHO0lBQVc7UUFBR0MsUUFBSCx1QkFBVTtJQUFEO0lBQzNCLE9BQU9BLFFBQVFDLE9BQU9DLFNBQVNDLEtBQUs7QUFDdEM7QUFFZSxTQUFTQyxPQUFPLEtBQTJDO1FBQTNDLEVBQUVDLFFBQVEsRUFBRUMsS0FBSyxFQUFFQyxTQUFTLEVBQUVaLFdBQVcsRUFBRSxHQUEzQzs7SUFDN0IsTUFBTSxDQUFDYSxnQkFBZ0JDLGtCQUFrQixHQUFHckMsK0NBQVFBLENBQUM7SUFFckQsT0FDRSwyQ0FBMkM7SUFDM0MsV0FBVztJQUNYLDBEQUEwRDtJQUMxRCw4RUFBOEU7SUFDOUUsd0RBQXdEO0lBQ3hELG9FQUFvRTtJQUNwRSwrREFBK0Q7SUFDL0Qsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWix3Q0FBd0M7SUFDeEMsd0JBQXdCO0lBQ3hCLHFEQUFxRDtJQUNyRCxjQUFjO0lBQ2QsZ0RBQWdEO0lBQ2hELDRCQUE0QjtJQUM1QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLFNBQVM7a0JBQ1QsOERBQUNzQztRQUNDQyxXQUFXLHVDQUEyRCxPQUFwQm5CLG1EQUFTQSxDQUFDbUI7OzBCQUs1RCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUN0QiwrQ0FBYUE7Ozs7Ozs7Ozs7MEJBRWhCLDhEQUFDcUI7Z0JBQUlDLFdBQVU7MEJBQTBDTjs7Ozs7OzBCQUN6RCw4REFBQ0s7MEJBQ0MsNEVBQUN2QiwrQ0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZjtHQXRDd0JpQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2dsb2JhbC9sYXlvdXQuanM/ZTI4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUG9wb3ZlciwgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuaW1wb3J0IHtcbiAgQXJyb3dQYXRoSWNvbixcbiAgQmFyczNJY29uLFxuICBDaGFydEJhckljb24sXG4gIENoZXZyb25VcEljb24sXG4gIEN1cnNvckFycm93UmF5c0ljb24sXG4gIERvY3VtZW50Q2hhcnRCYXJJY29uLFxuICBTaGllbGRDaGVja0ljb24sXG4gIFNxdWFyZXMyWDJJY29uLFxuICBYTWFya0ljb24sXG59IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmVcIjtcbmltcG9ydCB7IENoZXZyb25Eb3duSWNvbiwgU2hvcHBpbmdCYWdJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjAvc29saWRcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vbmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSBcIi4vbmF2YmFyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IGdlb2xvZ2ljYSB9IGZyb20gXCJAdXRpbHMvZm9udHNcIjtcblxuY29uc3Qgc29sdXRpb25zID0gW1xuICB7XG4gICAgbmFtZTogXCJBbmFseXRpY3NcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiR2V0IGEgYmV0dGVyIHVuZGVyc3RhbmRpbmcgb2Ygd2hlcmUgeW91ciB0cmFmZmljIGlzIGNvbWluZyBmcm9tLlwiLFxuICAgIGhyZWY6IFwiI1wiLFxuICAgIGljb246IENoYXJ0QmFySWNvbixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiRW5nYWdlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNwZWFrIGRpcmVjdGx5IHRvIHlvdXIgY3VzdG9tZXJzIGluIGEgbW9yZSBtZWFuaW5nZnVsIHdheS5cIixcbiAgICBocmVmOiBcIiNcIixcbiAgICBpY29uOiBDdXJzb3JBcnJvd1JheXNJY29uLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTZWN1cml0eVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIllvdXIgY3VzdG9tZXJzJyBkYXRhIHdpbGwgYmUgc2FmZSBhbmQgc2VjdXJlLlwiLFxuICAgIGhyZWY6IFwiI1wiLFxuICAgIGljb246IFNoaWVsZENoZWNrSWNvbixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSW50ZWdyYXRpb25zXCIsXG4gICAgZGVzY3JpcHRpb246IFwiQ29ubmVjdCB3aXRoIHRoaXJkLXBhcnR5IHRvb2xzIHRoYXQgeW91J3JlIGFscmVhZHkgdXNpbmcuXCIsXG4gICAgaHJlZjogXCIjXCIsXG4gICAgaWNvbjogU3F1YXJlczJYMkljb24sXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkF1dG9tYXRpb25zXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkJ1aWxkIHN0cmF0ZWdpYyBmdW5uZWxzIHRoYXQgd2lsbCBkcml2ZSB5b3VyIGN1c3RvbWVycyB0byBjb252ZXJ0XCIsXG4gICAgaHJlZjogXCIjXCIsXG4gICAgaWNvbjogQXJyb3dQYXRoSWNvbixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUmVwb3J0c1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJHZXQgZGV0YWlsZWQgcmVwb3J0cyB0aGF0IHdpbGwgaGVscCB5b3UgbWFrZSBtb3JlIGluZm9ybWVkIGRlY2lzaW9ucyBcIixcbiAgICBocmVmOiBcIiNcIixcbiAgICBpY29uOiBEb2N1bWVudENoYXJ0QmFySWNvbixcbiAgfSxcbl07XG5jb25zdCByZXNvdXJjZXMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkhlbHAgQ2VudGVyXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkdldCBhbGwgb2YgeW91ciBxdWVzdGlvbnMgYW5zd2VyZWQgaW4gb3VyIGZvcnVtcyBvciBjb250YWN0IHN1cHBvcnQuXCIsXG4gICAgaHJlZjogXCIjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkd1aWRlc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJMZWFybiBob3cgdG8gbWF4aW1pemUgb3VyIHBsYXRmb3JtIHRvIGdldCB0aGUgbW9zdCBvdXQgb2YgaXQuXCIsXG4gICAgaHJlZjogXCIjXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkV2ZW50c1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJTZWUgd2hhdCBtZWV0LXVwcyBhbmQgb3RoZXIgZXZlbnRzIHdlIG1pZ2h0IGJlIHBsYW5uaW5nIG5lYXIgeW91LlwiLFxuICAgIGhyZWY6IFwiI1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJTZWN1cml0eVwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVuZGVyc3RhbmQgaG93IHdlIHRha2UgeW91ciBwcml2YWN5IHNlcmlvdXNseS5cIixcbiAgICBocmVmOiBcIiNcIixcbiAgfSxcbl07XG5cbmZ1bmN0aW9uIGNsYXNzTmFtZXMoLi4uY2xhc3Nlcykge1xuICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuLCB0aXRsZSwgY2Fub25pY2FsLCBkZXNjcmlwdGlvbiB9KSB7XG4gIGNvbnN0IFtzaG93aW5nUHVsbG91dCwgc2V0U2hvd2luZ1B1bGxvdXRdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgcmV0dXJuIChcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1zY3JlZW5cIj5cbiAgICAvLyAgIDxIZWFkPlxuICAgIC8vICAgICA8dGl0bGUga2V5PVwidGl0bGVcIj57dGl0bGUgKyBcIiAtIEFpclhwZXJ0c1wifTwvdGl0bGU+XG4gICAgLy8gICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2BodHRwczovL2FpcnhwZXJ0cy5jb20uYXUvJHtjYW5vbmljYWx9YH0gLz5cbiAgICAvLyAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgLy8gICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXt0aXRsZSArIFwiIC0gQWlyWHBlcnRzXCJ9IC8+XG4gICAgLy8gICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAvLyAgICAgey8qIDxTRU8gLz4gKi99XG4gICAgLy8gICA8L0hlYWQ+XG4gICAgLy8gICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIHotMTAgXCI+XG4gICAgLy8gICAgIDxOYXZpZ2F0aW9uQmFyIC8+XG4gICAgLy8gICAgIHsvKiBTdGlja3kgSGVhZGVyIGFuZCBGb290ZXIgd2l0aCBUYWlsd2luZCAqL31cbiAgICAvLyAgIDwvaGVhZGVyPlxuICAgIC8vICAgPG1haW4gY2xhc3NOYW1lPVwicmVsYXRpdmUgb3ZlcmZsb3cteS1hdXRvXCI+XG4gICAgLy8gICAgIDxkaXY+e2NoaWxkcmVufTwvZGl2PlxuICAgIC8vICAgICA8Rm9vdGVyIC8+XG4gICAgLy8gICA8L21haW4+XG4gICAgLy8gPC9kaXY+XG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4gYmctd2hpdGUgJHtnZW9sb2dpY2EuY2xhc3NOYW1lfWB9XG4gICAgPlxuICAgICAgey8qIDxTRU8gc2VvPXtzZW99IC8+ICovfVxuXG4gICAgICB7LyogPEJhbm5lciAvPiAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGZpeGVkIHotMjAgdy1mdWxsXCI+XG4gICAgICAgIDxOYXZpZ2F0aW9uQmFyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0gbXgtYXV0byAgdGV4dC1sZyB3LWZ1bGwgaC1mdWxsICBcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8V2FpdGxpc3RNb2RhbCBpc09wZW49e2lzT3Blbn0gc2V0SXNPcGVuPXtzZXRJc09wZW59IC8+ICovfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkZyYWdtZW50IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQb3BvdmVyIiwiVHJhbnNpdGlvbiIsIkFycm93UGF0aEljb24iLCJCYXJzM0ljb24iLCJDaGFydEJhckljb24iLCJDaGV2cm9uVXBJY29uIiwiQ3Vyc29yQXJyb3dSYXlzSWNvbiIsIkRvY3VtZW50Q2hhcnRCYXJJY29uIiwiU2hpZWxkQ2hlY2tJY29uIiwiU3F1YXJlczJYMkljb24iLCJYTWFya0ljb24iLCJDaGV2cm9uRG93bkljb24iLCJTaG9wcGluZ0JhZ0ljb24iLCJOYXZiYXIiLCJGb290ZXIiLCJIZWFkIiwiTmF2aWdhdGlvbkJhciIsIkxpbmsiLCJJbWFnZSIsImdlb2xvZ2ljYSIsInNvbHV0aW9ucyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImhyZWYiLCJpY29uIiwicmVzb3VyY2VzIiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJmaWx0ZXIiLCJCb29sZWFuIiwiam9pbiIsIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJjYW5vbmljYWwiLCJzaG93aW5nUHVsbG91dCIsInNldFNob3dpbmdQdWxsb3V0IiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/global/layout.js\n"));

/***/ })

});