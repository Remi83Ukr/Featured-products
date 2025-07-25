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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_sections_custom_featured_product_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/sections/custom-featured-product.scss */ \"./src/styles/sections/custom-featured-product.scss\");\n/* harmony import */ var _snippets_popupOpenAndCloseLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../snippets/popupOpenAndCloseLogic.js */ \"./src/scripts/snippets/popupOpenAndCloseLogic.js\");\n\n\nconst bundleButton = document.getElementById('bundle-popup-button'),\n  bundlePopup = document.getElementById('bundle-popup'),\n  quotationCloseButtons = document.querySelectorAll('[data-modal-close]'),\n  backDrop = document.getElementById('bg-block');\nif (bundleButton) {\n  bundleButton.addEventListener('click', () => {\n    (0,_snippets_popupOpenAndCloseLogic_js__WEBPACK_IMPORTED_MODULE_1__.popupOpenAndCloseLogic)(bundlePopup, backDrop);\n  });\n}\nfor (const quotationCloseButton of quotationCloseButtons) {\n  quotationCloseButton.addEventListener('click', () => {\n    (0,_snippets_popupOpenAndCloseLogic_js__WEBPACK_IMPORTED_MODULE_1__.popupOpenAndCloseLogic)(bundlePopup, backDrop);\n  });\n}\nconst selectBundleProducts = () => {\n  const products = document.querySelectorAll('[data-related-products]');\n  for (const product of products) {\n    product.addEventListener('click', () => {\n      if (!product.classList.contains('active')) {\n        product.classList.add('active');\n      } else {\n        product.classList.remove('active');\n      }\n    });\n  }\n};\nconst addToCart = () => {\n  const addButton = document.getElementById('bundle-button');\n  addButton.addEventListener('click', function () {\n    const selectedCheckboxes = [...document.querySelectorAll('[data-related-products].active')];\n    if (selectedCheckboxes.length === 0) {\n      addButton.innerText = 'choose products';\n      return;\n    }\n    const mainItem = [{\n      id: parseInt(bundlePopup.dataset.variantId),\n      quantity: 1\n    }];\n    const items = [...selectedCheckboxes.map(checkbox => ({\n      id: parseInt(checkbox.dataset.variantId),\n      quantity: 1\n    })), ...mainItem];\n    fetch('/cart/add.js', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        items: items\n      })\n    }).then(response => response.json()).then(() => {\n      (0,_snippets_popupOpenAndCloseLogic_js__WEBPACK_IMPORTED_MODULE_1__.popupOpenAndCloseLogic)(bundlePopup, backDrop);\n      return fetch(window.Shopify.routes.root + '?sections=header,cart-drawer');\n    }).then(res => res.json()).then(data => {\n      const parser = new DOMParser();\n      const newHeaderHTML = parser.parseFromString(data['header'], 'text/html');\n      const newDrawerHTML = parser.parseFromString(data['cart-drawer'], 'text/html');\n      const newHeader = newHeaderHTML.querySelector('header');\n      const newDrawer = newDrawerHTML.querySelector('cart-drawer');\n      const currentHeader = document.querySelector('header');\n      const currentDrawer = document.querySelector('cart-drawer');\n      if (newHeader && currentHeader) {\n        currentHeader.innerHTML = newHeader.innerHTML;\n      }\n      if (newDrawer && currentDrawer) {\n        currentDrawer.innerHTML = newDrawer.innerHTML;\n      }\n      document.querySelector('cart-drawer')?.classList.add('animate', 'active');\n      document.querySelector('cart-drawer')?.classList.remove('is-empty');\n    }).catch(err => {\n      console.error('Error:', err);\n    });\n  });\n};\n(0,_snippets_popupOpenAndCloseLogic_js__WEBPACK_IMPORTED_MODULE_1__.assignBackDropClose)(bundlePopup, backDrop);\nselectBundleProducts();\ndocument.addEventListener('DOMContentLoaded', () => {\n  addToCart();\n});\n\n//# sourceURL=webpack://test-store/./src/scripts/sections/custom-featured-product.js?");

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