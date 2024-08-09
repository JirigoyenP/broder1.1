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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_abbreviations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/abbreviations */ \"./config/abbreviations.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [tickets, setTickets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [country, setCountry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [company, setCompany] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [vicePresidency, setVicePresidency] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Convertir objetos de abreviaturas en arrays para usar en selectores\n    const countries = Object.entries(_config_abbreviations__WEBPACK_IMPORTED_MODULE_2__.countryAbbreviations).map((param)=>{\n        let [name, code] = param;\n        return {\n            name,\n            code\n        };\n    });\n    const companies = Object.entries(_config_abbreviations__WEBPACK_IMPORTED_MODULE_2__.companyAbbreviations).map((param)=>{\n        let [name, code] = param;\n        return {\n            name,\n            code\n        };\n    });\n    const vicePresidencies = Object.entries(_config_abbreviations__WEBPACK_IMPORTED_MODULE_2__.vicePresidencyAbbreviations).map((param)=>{\n        let [name, code] = param;\n        return {\n            name,\n            code\n        };\n    });\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // Datos del formulario que se enviarán\n        const ticketData = {\n            country: _config_abbreviations__WEBPACK_IMPORTED_MODULE_2__.countryAbbreviations[country],\n            company: _config_abbreviations__WEBPACK_IMPORTED_MODULE_2__.companyAbbreviations[company],\n            vicePresidency: _config_abbreviations__WEBPACK_IMPORTED_MODULE_2__.vicePresidencyAbbreviations[vicePresidency],\n            description\n        };\n        try {\n            const response = await fetch(\"/api/tickets\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify(ticketData)\n            });\n            if (response.ok) {\n                const newTicket = await response.json();\n                setTickets((currentTickets)=>[\n                        ...currentTickets,\n                        newTicket\n                    ]);\n                // Limpia el formulario después de enviar\n                setCountry(\"\");\n                setCompany(\"\");\n                setVicePresidency(\"\");\n                setDescription(\"\");\n            } else {\n                throw new Error(\"Algo sali\\xf3 mal al tratar de crear el ticket\");\n            }\n        } catch (error) {\n            console.error(\"Error al crear el ticket:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Sistema de Administraci\\xf3n de Tickets\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jos\\xe9LuisIrigoyenPe\\xf1a\\\\OneDrive - RANSA COMERCIAL S.A\\\\Escritorio\\\\NuevosDesarrollos\\\\pages\\\\index.js\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: country,\n                        onChange: (e)=>setCountry(e.target.value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Seleccione Pa\\xeds\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jos\\xe9LuisIrigoyenPe\\xf1a\\\\OneDrive - RANSA COMERCIAL S.A\\\\Escritorio\\\\NuevosDesarrollos\\\\pages\\\\index.js\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this),\n                            countries.map((param)=>{\n                                let { name, code } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: code,\n                                    children: name\n                                }, code, false, {\n                                    fileName: \"C:\\\\Users\\\\Jos\\xe9LuisIrigoyenPe\\xf1a\\\\OneDrive - RANSA COMERCIAL S.A\\\\Escritorio\\\\NuevosDesarrollos\\\\pages\\\\index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 25\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Jos\\xe9LuisIrigoyenPe\\xf1a\\\\OneDrive - RANSA COMERCIAL S.A\\\\Escritorio\\\\NuevosDesarrollos\\\\pages\\\\index.js\",\n                        lineNumber: 57,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: company,\n                        onChange: (e)=>setCompany(e.target.value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Seleccione Sociedad\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jos\\xe9LuisIrigoyenPe\\xf1a\\\\OneDrive - RANSA COMERCIAL S.A\\\\Escritorio\\\\NuevosDesarrollos\\\\pages\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 21\n                            }, this),\n                            companies.map((param)=>{\n                                let { name, code } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: code,\n                                    children: name\n                                }, code, false, {\n                                    fileName: \"C:\\\\Users\\\\Jos\\xe9LuisIrigoyenPe\\xf1a\\\\OneDrive - RANSA COMERCIAL S.A\\\\Escritorio\\\\NuevosDesarrollos\\\\pages\\\\index.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 25\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Jos\\xe9LuisIrigoyenPe\\xf1a\\\\OneDrive - RANSA COMERCIAL S.A\\\\Escritorio\\\\NuevosDesarrollos\\\\pages\\\\index.js\",\n                        lineNumber: 64,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                        value: vicePresidency,\n                        onChange: (e)=>setVicePresidency(e.target.value),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                value: \"\",\n                                children: \"Seleccione Vicepresidencia\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Jos\\xe9LuisIrigoyenPe\\xf1a\\\\OneDrive - RANSA COMERCIAL S.A\\\\Escritorio\\\\NuevosDesarrollos\\\\pages\\\\index.js\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, this),\n                            vicePresidencies.map((param)=>{\n                                let { name, code } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: code,\n                                    children: name\n                                }, code, false, {\n                                    fileName: \"C:\\\\Users\\\\Jos\\xe9LuisIrigoyenPe\\xf1a\\\\OneDrive - RANSA COMERCIAL S.A\\\\Escritorio\\\\NuevosDesarrollos\\\\pages\\\\index.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 25\n                                }, this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Jos\\xe9LuisIrigoyenPe\\xf1a\\\\OneDrive - RANSA COMERCIAL S.A\\\\Escritorio\\\\NuevosDesarrollos\\\\pages\\\\index.js\",\n                        lineNumber: 71,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        value: description,\n                        onChange: (e)=>setDescription(e.target.value),\n                        placeholder: \"Descripci\\xf3n del Ticket\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jos\\xe9LuisIrigoyenPe\\xf1a\\\\OneDrive - RANSA COMERCIAL S.A\\\\Escritorio\\\\NuevosDesarrollos\\\\pages\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Crear Ticket\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jos\\xe9LuisIrigoyenPe\\xf1a\\\\OneDrive - RANSA COMERCIAL S.A\\\\Escritorio\\\\NuevosDesarrollos\\\\pages\\\\index.js\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jos\\xe9LuisIrigoyenPe\\xf1a\\\\OneDrive - RANSA COMERCIAL S.A\\\\Escritorio\\\\NuevosDesarrollos\\\\pages\\\\index.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jos\\xe9LuisIrigoyenPe\\xf1a\\\\OneDrive - RANSA COMERCIAL S.A\\\\Escritorio\\\\NuevosDesarrollos\\\\pages\\\\index.js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n}\n_s(Home, \"nD5BS9EaERmjalTJ559V3Q/yjf0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTRDO0FBQ3NFO0FBRW5HLFNBQVNLOztJQUNwQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNRLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1ksZ0JBQWdCQyxrQkFBa0IsR0FBR2IsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDYyxhQUFhQyxlQUFlLEdBQUdmLCtDQUFRQSxDQUFDO0lBRS9DLHNFQUFzRTtJQUN0RSxNQUFNZ0IsWUFBWUMsT0FBT0MsT0FBTyxDQUFDaEIsdUVBQW9CQSxFQUFFaUIsR0FBRyxDQUFDO1lBQUMsQ0FBQ0MsTUFBTUMsS0FBSztlQUFNO1lBQUVEO1lBQU1DO1FBQUs7O0lBQzNGLE1BQU1DLFlBQVlMLE9BQU9DLE9BQU8sQ0FBQ2YsdUVBQW9CQSxFQUFFZ0IsR0FBRyxDQUFDO1lBQUMsQ0FBQ0MsTUFBTUMsS0FBSztlQUFNO1lBQUVEO1lBQU1DO1FBQUs7O0lBQzNGLE1BQU1FLG1CQUFtQk4sT0FBT0MsT0FBTyxDQUFDZCw4RUFBMkJBLEVBQUVlLEdBQUcsQ0FBQztZQUFDLENBQUNDLE1BQU1DLEtBQUs7ZUFBTTtZQUFFRDtZQUFNQztRQUFLOztJQUU3RyxNQUFNRyxlQUFlLE9BQU9DO1FBQ3hCQSxFQUFFQyxjQUFjO1FBRWhCLHVDQUF1QztRQUN2QyxNQUFNQyxhQUFhO1lBQ2ZuQixTQUFTTix1RUFBb0IsQ0FBQ00sUUFBUTtZQUN0Q0UsU0FBU1AsdUVBQW9CLENBQUNPLFFBQVE7WUFDdENFLGdCQUFnQlIsOEVBQTJCLENBQUNRLGVBQWU7WUFDM0RFO1FBQ0o7UUFFQSxJQUFJO1lBQ0EsTUFBTWMsV0FBVyxNQUFNQyxNQUFNLGdCQUFnQjtnQkFDekNDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDUDtZQUN6QjtZQUVBLElBQUlDLFNBQVNPLEVBQUUsRUFBRTtnQkFDYixNQUFNQyxZQUFZLE1BQU1SLFNBQVNTLElBQUk7Z0JBQ3JDOUIsV0FBVytCLENBQUFBLGlCQUFrQjsyQkFBSUE7d0JBQWdCRjtxQkFBVTtnQkFDM0QseUNBQXlDO2dCQUN6QzNCLFdBQVc7Z0JBQ1hFLFdBQVc7Z0JBQ1hFLGtCQUFrQjtnQkFDbEJFLGVBQWU7WUFDbkIsT0FBTztnQkFDSCxNQUFNLElBQUl3QixNQUFNO1lBQ3BCO1FBQ0osRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO1FBQy9DO0lBQ0o7SUFHSSxxQkFDSSw4REFBQ0U7OzBCQUNHLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsVUFBVXJCOztrQ0FDWiw4REFBQ3NCO3dCQUFPQyxPQUFPdkM7d0JBQVN3QyxVQUFVdkIsQ0FBQUEsSUFBS2hCLFdBQVdnQixFQUFFd0IsTUFBTSxDQUFDRixLQUFLOzswQ0FDNUQsOERBQUNHO2dDQUFPSCxPQUFNOzBDQUFHOzs7Ozs7NEJBQ2hCL0IsVUFBVUcsR0FBRyxDQUFDO29DQUFDLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFO3FEQUMxQiw4REFBQzZCO29DQUFrQkgsT0FBTzFCOzhDQUFPRDttQ0FBcEJDOzs7Ozs7Ozs7Ozs7a0NBSXJCLDhEQUFDeUI7d0JBQU9DLE9BQU9yQzt3QkFBU3NDLFVBQVV2QixDQUFBQSxJQUFLZCxXQUFXYyxFQUFFd0IsTUFBTSxDQUFDRixLQUFLOzswQ0FDNUQsOERBQUNHO2dDQUFPSCxPQUFNOzBDQUFHOzs7Ozs7NEJBQ2hCekIsVUFBVUgsR0FBRyxDQUFDO29DQUFDLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFO3FEQUMxQiw4REFBQzZCO29DQUFrQkgsT0FBTzFCOzhDQUFPRDttQ0FBcEJDOzs7Ozs7Ozs7Ozs7a0NBSXJCLDhEQUFDeUI7d0JBQU9DLE9BQU9uQzt3QkFBZ0JvQyxVQUFVdkIsQ0FBQUEsSUFBS1osa0JBQWtCWSxFQUFFd0IsTUFBTSxDQUFDRixLQUFLOzswQ0FDMUUsOERBQUNHO2dDQUFPSCxPQUFNOzBDQUFHOzs7Ozs7NEJBQ2hCeEIsaUJBQWlCSixHQUFHLENBQUM7b0NBQUMsRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUU7cURBQ2pDLDhEQUFDNkI7b0NBQWtCSCxPQUFPMUI7OENBQU9EO21DQUFwQkM7Ozs7Ozs7Ozs7OztrQ0FJckIsOERBQUM4Qjt3QkFBU0osT0FBT2pDO3dCQUFha0MsVUFBVXZCLENBQUFBLElBQUtWLGVBQWVVLEVBQUV3QixNQUFNLENBQUNGLEtBQUs7d0JBQUdLLGFBQVk7Ozs7OztrQ0FFekYsOERBQUNDO3dCQUFPQyxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEM7R0FoRndCakQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb3VudHJ5QWJicmV2aWF0aW9ucywgY29tcGFueUFiYnJldmlhdGlvbnMsIHZpY2VQcmVzaWRlbmN5QWJicmV2aWF0aW9ucyB9IGZyb20gJy4uL2NvbmZpZy9hYmJyZXZpYXRpb25zJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgICBjb25zdCBbdGlja2V0cywgc2V0VGlja2V0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbY291bnRyeSwgc2V0Q291bnRyeV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbY29tcGFueSwgc2V0Q29tcGFueV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbdmljZVByZXNpZGVuY3ksIHNldFZpY2VQcmVzaWRlbmN5XSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIC8vIENvbnZlcnRpciBvYmpldG9zIGRlIGFicmV2aWF0dXJhcyBlbiBhcnJheXMgcGFyYSB1c2FyIGVuIHNlbGVjdG9yZXNcclxuICAgIGNvbnN0IGNvdW50cmllcyA9IE9iamVjdC5lbnRyaWVzKGNvdW50cnlBYmJyZXZpYXRpb25zKS5tYXAoKFtuYW1lLCBjb2RlXSkgPT4gKHsgbmFtZSwgY29kZSB9KSk7XHJcbiAgICBjb25zdCBjb21wYW5pZXMgPSBPYmplY3QuZW50cmllcyhjb21wYW55QWJicmV2aWF0aW9ucykubWFwKChbbmFtZSwgY29kZV0pID0+ICh7IG5hbWUsIGNvZGUgfSkpO1xyXG4gICAgY29uc3QgdmljZVByZXNpZGVuY2llcyA9IE9iamVjdC5lbnRyaWVzKHZpY2VQcmVzaWRlbmN5QWJicmV2aWF0aW9ucykubWFwKChbbmFtZSwgY29kZV0pID0+ICh7IG5hbWUsIGNvZGUgfSkpO1xyXG5cclxuY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBEYXRvcyBkZWwgZm9ybXVsYXJpbyBxdWUgc2UgZW52aWFyw6FuXHJcbiAgICBjb25zdCB0aWNrZXREYXRhID0ge1xyXG4gICAgICAgIGNvdW50cnk6IGNvdW50cnlBYmJyZXZpYXRpb25zW2NvdW50cnldLCAgLy8gQXNlZ8O6cmF0ZSBkZSBlbnZpYXIgbGFzIGFicmV2aWF0dXJhc1xyXG4gICAgICAgIGNvbXBhbnk6IGNvbXBhbnlBYmJyZXZpYXRpb25zW2NvbXBhbnldLFxyXG4gICAgICAgIHZpY2VQcmVzaWRlbmN5OiB2aWNlUHJlc2lkZW5jeUFiYnJldmlhdGlvbnNbdmljZVByZXNpZGVuY3ldLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgfTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdGlja2V0cycsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRpY2tldERhdGEpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUaWNrZXQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIHNldFRpY2tldHMoY3VycmVudFRpY2tldHMgPT4gWy4uLmN1cnJlbnRUaWNrZXRzLCBuZXdUaWNrZXRdKTtcclxuICAgICAgICAgICAgLy8gTGltcGlhIGVsIGZvcm11bGFyaW8gZGVzcHXDqXMgZGUgZW52aWFyXHJcbiAgICAgICAgICAgIHNldENvdW50cnkoJycpO1xyXG4gICAgICAgICAgICBzZXRDb21wYW55KCcnKTtcclxuICAgICAgICAgICAgc2V0VmljZVByZXNpZGVuY3koJycpO1xyXG4gICAgICAgICAgICBzZXREZXNjcmlwdGlvbignJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBbGdvIHNhbGnDsyBtYWwgYWwgdHJhdGFyIGRlIGNyZWFyIGVsIHRpY2tldCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWwgY3JlYXIgZWwgdGlja2V0OicsIGVycm9yKTtcclxuICAgIH1cclxufTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+U2lzdGVtYSBkZSBBZG1pbmlzdHJhY2nDs24gZGUgVGlja2V0czwvaDE+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCB2YWx1ZT17Y291bnRyeX0gb25DaGFuZ2U9e2UgPT4gc2V0Q291bnRyeShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2Npb25lIFBhw61zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvdW50cmllcy5tYXAoKHsgbmFtZSwgY29kZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtjb2RlfSB2YWx1ZT17Y29kZX0+e25hbWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtjb21wYW55fSBvbkNoYW5nZT17ZSA9PiBzZXRDb21wYW55KGUudGFyZ2V0LnZhbHVlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNlbGVjY2lvbmUgU29jaWVkYWQ8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICB7Y29tcGFuaWVzLm1hcCgoeyBuYW1lLCBjb2RlIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2NvZGV9IHZhbHVlPXtjb2RlfT57bmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3QgdmFsdWU9e3ZpY2VQcmVzaWRlbmN5fSBvbkNoYW5nZT17ZSA9PiBzZXRWaWNlUHJlc2lkZW5jeShlLnRhcmdldC52YWx1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5TZWxlY2Npb25lIFZpY2VwcmVzaWRlbmNpYTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIHt2aWNlUHJlc2lkZW5jaWVzLm1hcCgoeyBuYW1lLCBjb2RlIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2NvZGV9IHZhbHVlPXtjb2RlfT57bmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSB2YWx1ZT17ZGVzY3JpcHRpb259IG9uQ2hhbmdlPXtlID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX0gcGxhY2Vob2xkZXI9XCJEZXNjcmlwY2nDs24gZGVsIFRpY2tldFwiPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q3JlYXIgVGlja2V0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiY291bnRyeUFiYnJldmlhdGlvbnMiLCJjb21wYW55QWJicmV2aWF0aW9ucyIsInZpY2VQcmVzaWRlbmN5QWJicmV2aWF0aW9ucyIsIkhvbWUiLCJ0aWNrZXRzIiwic2V0VGlja2V0cyIsImNvdW50cnkiLCJzZXRDb3VudHJ5IiwiY29tcGFueSIsInNldENvbXBhbnkiLCJ2aWNlUHJlc2lkZW5jeSIsInNldFZpY2VQcmVzaWRlbmN5IiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImNvdW50cmllcyIsIk9iamVjdCIsImVudHJpZXMiLCJtYXAiLCJuYW1lIiwiY29kZSIsImNvbXBhbmllcyIsInZpY2VQcmVzaWRlbmNpZXMiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aWNrZXREYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwibmV3VGlja2V0IiwianNvbiIsImN1cnJlbnRUaWNrZXRzIiwiRXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsInNlbGVjdCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvcHRpb24iLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});