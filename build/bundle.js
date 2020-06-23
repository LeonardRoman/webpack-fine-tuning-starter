/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _react_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_component__WEBPACK_IMPORTED_MODULE_0__);
// import component from './simple-components/dom'
// import './theme/main.css'
//
// let element = component()
// document.body.appendChild(element)
//
// if (module.hot) {
//   module.hot.accept('./simple-components/dom', function () {
//       document.body.removeChild(element)
//       element = component()
//       document.body.appendChild(element)
//     }
//   )
// }
// import './simple-components/javascript'


/***/ }),
/* 2 */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\leona\\Progects\\JS\\Node\\lectrum--webpack\\src\\react-component\\index.js: Unexpected token (26:8)\n\n\u001b[0m \u001b[90m 24 | \u001b[39m      \u001b[36mconst\u001b[39m { count } \u001b[33m=\u001b[39m \u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mstate\u001b[0m\n\u001b[0m \u001b[90m 25 | \u001b[39m      \u001b[36mreturn\u001b[39m (\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 26 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33msection\u001b[39m className\u001b[33m=\u001b[39m{\u001b[33mStyles\u001b[39m\u001b[33m.\u001b[39mclicker}\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 27 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mh1\u001b[39m\u001b[33m>\u001b[39m\u001b[33mCount\u001b[39m\u001b[33m:\u001b[39m {count}\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mh1\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mbutton\u001b[39m onClick\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39minc}\u001b[33m>\u001b[39m\u001b[33mIncrement\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mbutton\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 29 | \u001b[39m          \u001b[33m<\u001b[39m\u001b[33mbutton\u001b[39m onClick\u001b[33m=\u001b[39m{\u001b[36mthis\u001b[39m\u001b[33m.\u001b[39mdec}\u001b[33m>\u001b[39m\u001b[33mDecrement\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mbutton\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n    at Parser._raise (C:\\Users\\leona\\Progects\\JS\\Node\\lectrum--webpack\\node_modules\\@babel\\parser\\lib\\index.js:754:17)\n    at Parser.raiseWithData (C:\\Users\\leona\\Progects\\JS\\Node\\lectrum--webpack\\node_modules\\@babel\\parser\\lib\\index.js:747:17)\n    at Parser.raise (C:\\Users\\leona\\Progects\\JS\\Node\\lectrum--webpack\\node_modules\\@babel\\parser\\lib\\index.js:741:17)\n    at Parser.unexpected (C:\\Users\\leona\\Progects\\JS\\Node\\lectrum--webpack\\node_modules\\@babel\\parser\\lib\\index.js:8844:16)\n    at Parser.parseExprAtom (C:\\Users\\leona\\Progects\\JS\\Node\\lectrum--webpack\\node_modules\\@babel\\parser\\lib\\index.js:10167:20)\n    at Parser.parseExprSubscripts (C:\\Users\\leona\\Progects\\JS\\Node\\lectrum--webpack\\node_modules\\@babel\\parser\\lib\\index.js:9693:23)\n    at Parser.parseMaybeUnary (C:\\Users\\leona\\Progects\\JS\\Node\\lectrum--webpack\\node_modules\\@babel\\parser\\lib\\index.js:9673:21)\n    at Parser.parseExprOps (C:\\Users\\leona\\Progects\\JS\\Node\\lectrum--webpack\\node_modules\\@babel\\parser\\lib\\index.js:9543:23)\n    at Parser.parseMaybeConditional (C:\\Users\\leona\\Progects\\JS\\Node\\lectrum--webpack\\node_modules\\@babel\\parser\\lib\\index.js:9516:23)\n    at Parser.parseMaybeAssign (C:\\Users\\leona\\Progects\\JS\\Node\\lectrum--webpack\\node_modules\\@babel\\parser\\lib\\index.js:9471:21)");

/***/ })
/******/ ]);