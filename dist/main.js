/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sum */ \"./src/sum.js\");\n\r\n\r\nlet registerA = ''\r\nlet registerB = ''\r\nlet inputRegisterB = false\r\nlet operator\r\nlet result\r\nlet lastAction\r\n\r\nconst display = document.getElementById('display')\r\n\r\ndocument.getElementById('one').onclick = function() {\r\n    if (inputRegisterB === false) {\r\n        registerA = registerA + '1'\r\n        display.innerText = registerA\r\n    }\r\n    else {\r\n        registerB = registerB + '1'\r\n        display.innerText = registerB\r\n        lastAction = 'registerB'\r\n    }\r\n}\r\n\r\ndocument.getElementById('two').onclick = function() {\r\n    if (inputRegisterB === false) {\r\n        registerA = registerA + '2'\r\n        display.innerText = registerA\r\n    }\r\n    else {\r\n        registerB = registerB + '2'\r\n        display.innerText = registerB\r\n        lastAction = 'registerB'\r\n    }\r\n}\r\n\r\ndocument.getElementById('three').onclick = function() {\r\n    if (inputRegisterB === false) {\r\n        registerA = registerA + '3'\r\n        display.innerText = registerA\r\n    }\r\n    else {\r\n        registerB = registerB + '3'\r\n        display.innerText = registerB\r\n        lastAction = 'registerB'\r\n    }\r\n}\r\n\r\ndocument.getElementById('four').onclick = function() {\r\n    if (inputRegisterB === false) {\r\n        registerA = registerA + '4'\r\n        display.innerText = registerA\r\n    }\r\n    else {\r\n        registerB = registerB + '4'\r\n        display.innerText = registerB\r\n        lastAction = 'registerB'\r\n    }\r\n}\r\n\r\ndocument.getElementById('five').onclick = function() {\r\n    if (inputRegisterB === false) {\r\n        registerA = registerA + '5'\r\n        display.innerText = registerA\r\n    }\r\n    else {\r\n        registerB = registerB + '5'\r\n        display.innerText = registerB\r\n        lastAction = 'registerB'\r\n    }\r\n}\r\n\r\ndocument.getElementById('six').onclick = function() {\r\n    if (inputRegisterB === false) {\r\n        registerA = registerA + '6'\r\n        display.innerText = registerA\r\n    }\r\n    else {\r\n        registerB = registerB + '6'\r\n        display.innerText = registerB\r\n        lastAction = 'registerB'\r\n    }\r\n}\r\n\r\ndocument.getElementById('seven').onclick = function() {\r\n    if (inputRegisterB === false) {\r\n        registerA = registerA + '7'\r\n        display.innerText = registerA\r\n    }\r\n    else {\r\n        registerB = registerB + '7'\r\n        display.innerText = registerB\r\n        lastAction = 'registerB'\r\n    }\r\n}\r\n\r\ndocument.getElementById('eight').onclick = function() {\r\n    if (inputRegisterB === false) {\r\n        registerA = registerA + '8'\r\n        display.innerText = registerA\r\n    }\r\n    else {\r\n        registerB = registerB + '8'\r\n        display.innerText = registerB\r\n        lastAction = 'registerB'\r\n    }\r\n}\r\n\r\ndocument.getElementById('nine').onclick = function() {\r\n    if (inputRegisterB === false) {\r\n        registerA = registerA + '9'\r\n        display.innerText = registerA\r\n    }\r\n    else {\r\n        registerB = registerB + '9'\r\n        display.innerText = registerB\r\n        lastAction = 'registerB'\r\n    }\r\n}\r\n\r\ndocument.getElementById('zero').onclick = function() {\r\n    if (inputRegisterB === false) {\r\n        registerA = registerA + '0'\r\n        display.innerText = registerA\r\n    }\r\n    else {\r\n        registerB = registerB + '0'\r\n        display.innerText = registerB\r\n        lastAction = 'registerB'\r\n    }\r\n}\r\n\r\ndocument.getElementById('plus').onclick = function() {\r\n    if (registerB && lastAction != 'sum') {\r\n        result = (0,_sum__WEBPACK_IMPORTED_MODULE_0__.default)(parseInt(registerA), parseInt(registerB), operator)\r\n        display.innerText = result\r\n        registerA = result\r\n    }\r\n    operator = '+'\r\n    registerB = ''\r\n    inputRegisterB = true\r\n}\r\n\r\ndocument.getElementById('minus').onclick = function() {\r\n    if (registerB && lastAction != 'sum') {\r\n        result = (0,_sum__WEBPACK_IMPORTED_MODULE_0__.default)(parseInt(registerA), parseInt(registerB), operator)\r\n        display.innerText = result\r\n        registerA = result\r\n    }\r\n    operator = '-'\r\n    registerB = ''\r\n    inputRegisterB = true\r\n}\r\n\r\ndocument.getElementById('multiply').onclick = function() {\r\n    if (registerB) {\r\n        result =  (0,_sum__WEBPACK_IMPORTED_MODULE_0__.default)(parseInt(registerA), parseInt(registerB), operator)\r\n        display.innerText = result\r\n        registerA = result\r\n        registerB = ''\r\n    }\r\n    operator = '*'\r\n    inputRegisterB = true\r\n}\r\n\r\ndocument.getElementById('divide').onclick = function() {\r\n    if (registerB && lastAction != 'sum') {\r\n        result = (0,_sum__WEBPACK_IMPORTED_MODULE_0__.default)(parseInt(registerA), parseInt(registerB), operator)\r\n        display.innerText = result\r\n        registerA = result\r\n    }\r\n    operator = '/'\r\n    registerB = ''\r\n    inputRegisterB = true\r\n}\r\n\r\ndocument.getElementById('sum').onclick = function() {\r\n    result = (0,_sum__WEBPACK_IMPORTED_MODULE_0__.default)(parseInt(registerA), parseInt(registerB), operator)\r\n    display.innerText = result\r\n    registerA = result\r\n    lastAction = 'sum'\r\n}\r\n\r\ndocument.getElementById('reset').onclick = function() {\r\n    registerA = ''\r\n    registerB = ''\r\n    inputRegisterB = false\r\n    operator = undefined\r\n    result = undefined\r\n    lastAction = ''\r\n    display.innerText = 0\r\n}\n\n//# sourceURL=webpack://calculator/./src/index.js?");

/***/ }),

/***/ "./src/sum.js":
/*!********************!*\
  !*** ./src/sum.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet result\r\n\r\nfunction sum(registerA, registerB, operator) {\r\n    switch (operator) {\r\n        case '+':\r\n            result = registerA + registerB\r\n            break\r\n        case '-':\r\n            result = registerA - registerB\r\n            break\r\n        case '*':\r\n            result = registerA * registerB\r\n            break\r\n        case '/':\r\n            result = registerA / registerB\r\n            break\r\n    }\r\n    return result\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sum);\n\n//# sourceURL=webpack://calculator/./src/sum.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;