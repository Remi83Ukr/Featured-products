/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/sections/custom-featured-product.js":
/*!*********************************************************!*\
  !*** ./src/scripts/sections/custom-featured-product.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_sections_custom_featured_product_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/sections/custom-featured-product.scss */ \"./src/styles/sections/custom-featured-product.scss\");\n/* harmony import */ var _snippets_popupOpenAndCloseLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../snippets/popupOpenAndCloseLogic.js */ \"./src/scripts/snippets/popupOpenAndCloseLogic.js\");\n\n\nconst bundleButton = document.getElementById('bundle-popup-button'),\n  bundlePopup = document.getElementById('bundle-popup'),\n  quotationCloseButtons = document.querySelectorAll('[data-modal-close]'),\n  backDrop = document.getElementById('bg-block');\nif (bundleButton) {\n  bundleButton.addEventListener('click', () => {\n    (0,_snippets_popupOpenAndCloseLogic_js__WEBPACK_IMPORTED_MODULE_1__.popupOpenAndCloseLogic)(bundlePopup, backDrop);\n  });\n}\nfor (const quotationCloseButton of quotationCloseButtons) {\n  quotationCloseButton.addEventListener('click', () => {\n    (0,_snippets_popupOpenAndCloseLogic_js__WEBPACK_IMPORTED_MODULE_1__.popupOpenAndCloseLogic)(bundlePopup, backDrop);\n  });\n}\n(0,_snippets_popupOpenAndCloseLogic_js__WEBPACK_IMPORTED_MODULE_1__.assignBackDropClose)(bundlePopup, backDrop);\n\n//# sourceURL=webpack://test-store/./src/scripts/sections/custom-featured-product.js?");

/***/ }),

/***/ "./src/scripts/snippets/popupOpenAndCloseLogic.js":
/*!********************************************************!*\
  !*** ./src/scripts/snippets/popupOpenAndCloseLogic.js ***!
  \********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assignBackDropClose: function() { return /* binding */ assignBackDropClose; },\n/* harmony export */   popupOpenAndCloseLogic: function() { return /* binding */ popupOpenAndCloseLogic; }\n/* harmony export */ });\nconst popupOpenAndCloseLogic = (popup, backDrop) => {\n  if (!popup.classList.contains('active')) {\n    //open\n    document.body.classList.add('is-scroll-hidden');\n    backDrop.classList.add('db');\n    popup.classList.remove('dn');\n    setTimeout(() => {\n      backDrop.classList.add('active');\n      popup.classList.add('active');\n    }, 10);\n  } else {\n    //close\n    popup.classList.remove('active');\n    backDrop.classList.remove('active');\n    setTimeout(() => {\n      popup.classList.add('dn');\n      backDrop.classList.remove('db');\n    }, 300);\n    document.body.classList.remove('is-scroll-hidden');\n  }\n};\nconst assignBackDropClose = (popup, backDrop) => {\n  // const backDrop = document.getElementById('bg-block');\n\n  backDrop.addEventListener('click', () => {\n    popup.classList.remove('active');\n    backDrop.classList.remove('active');\n    setTimeout(() => {\n      popup.classList.add('dn');\n      backDrop.classList.remove('db');\n    }, 300);\n    document.body.classList.remove('is-scroll-hidden');\n  });\n};\n\n\n//# sourceURL=webpack://test-store/./src/scripts/snippets/popupOpenAndCloseLogic.js?");

/***/ }),

/***/ "./src/styles/sections/custom-featured-product.scss":
/*!**********************************************************!*\
  !*** ./src/styles/sections/custom-featured-product.scss ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-store/./src/styles/sections/custom-featured-product.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/sections/custom-featured-product.js");
/******/ 	
/******/ })()
;