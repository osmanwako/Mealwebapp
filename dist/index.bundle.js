(self["webpackChunkmealwebapp"] = self["webpackChunkmealwebapp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #fff;\r\n  display: flex;\r\n  justify-content: left;\r\n  flex-direction: column;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.header-container {\r\n  max-width: 1536px;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  background-color: #2196f3;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  border-bottom: 0.09px solid #fff;\r\n}\r\n\r\n.header-navbar {\r\n  max-width: 1536px;\r\n  padding: 4px;\r\n  display: flex;\r\n  padding-right: 30px;\r\n  align-items: center;\r\n}\r\n\r\n.restaurant-icon {\r\n  width: 60px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.navbar-menu {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  list-style: none;\r\n}\r\n\r\n.menu-item-link {\r\n  display: inline-block;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.menu-active {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.main {\r\n  max-width: 1536px;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n  overflow: hidden;\r\n}\r\n\r\n.meal-container {\r\n  padding: 2rem;\r\n  background-color: #f2f2f2;\r\n  gap: 2rem;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  list-style: none;\r\n}\r\n\r\n.meal-card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  background-color: transparent;\r\n  background-image:\r\n    linear-gradient(\r\n      -45deg,\r\n      transparent,\r\n      transparent 2%,\r\n      white 2%,\r\n      white 85%,\r\n      transparent,\r\n      85%,\r\n      transparent\r\n    ),\r\n    linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%);\r\n  background-position: top left, 0.2em 0.2em;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.meal-head {\r\n  text-align: end;\r\n  font-style: italic;\r\n  font-size: 15px;\r\n}\r\n\r\n.meal-thumbail {\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 50%;\r\n  align-self: center;\r\n  padding: 10px;\r\n}\r\n\r\n.meal-item {\r\n  flex-grow: 0;\r\n  flex-basis: 100%;\r\n}\r\n\r\n.meal-interaction {\r\n  padding: 8px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 17px;\r\n}\r\n\r\n.meal-button {\r\n  padding: 6px;\r\n  border: none;\r\n  font-size: 17px;\r\n  cursor: pointer;\r\n}\r\n\r\n.meal-button:hover {\r\n  color: #00f;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .meal-item {\r\n    flex-basis: 47.5%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1125px) {\r\n  .meal-item {\r\n    flex-basis: 31%;\r\n  }\r\n}\r\n\r\n.comment-popup {\r\n  padding: 2rem;\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.comment-container {\r\n  display: flex;\r\n  gap: 1rem;\r\n  list-style: none;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  border-bottom: 1px solid #00f;\r\n  padding: 10px;\r\n}\r\n\r\n.comment-thumbail {\r\n  max-width: 348px;\r\n  max-height: 348px;\r\n  height: auto;\r\n  align-self: center;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.meal-image {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 50%;\r\n}\r\n\r\n.button-close {\r\n  border: none;\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  background-color: transparent;\r\n}\r\n\r\n.comment-details {\r\n  border-top: 1px solid #00f;\r\n  gap: 10px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n}\r\n\r\n.meal-desc {\r\n  padding: 10px;\r\n  font-size: 15px;\r\n  font-style: italic;\r\n}\r\n\r\n.add-comment {\r\n  padding: 16px;\r\n  border: 1px solid #000;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.commet-item {\r\n  padding-left: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.comment-form {\r\n  padding: 10px;\r\n  display: flex;\r\n  gap: 10px;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  border-bottom: 1px dashed #000;\r\n  margin-top: 10px;\r\n}\r\n\r\n.comment-input {\r\n  padding: 7px;\r\n}\r\n\r\n.comment-history {\r\n  display: block;\r\n  padding: 10px;\r\n  line-height: 1.5rem;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.footer-container {\r\n  max-width: 1536px;\r\n  margin: 30px;\r\n  width: 100%;\r\n  background-color: #2196f3;\r\n  opacity: 0.8;\r\n  display: block;\r\n  border-top: 0.09px solid #fff;\r\n}\r\n\r\n.nav-footer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  gap: 20px;\r\n  padding: 1rem;\r\n}\r\n\r\n.dev-description {\r\n  display: flex;\r\n}\r\n\r\n.developer {\r\n  display: flex;\r\n  padding: 10px;\r\n  list-style: none;\r\n}\r\n\r\n.mit {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.d-popup header {\r\n  display: none;\r\n}\r\n\r\n.d-popup > main > .meal-container {\r\n  display: none;\r\n}\r\n\r\n.d-popup footer {\r\n  display: none;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: #fff;\r\n  display: flex;\r\n  justify-content: left;\r\n  flex-direction: column;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: normal;\r\n}\r\n\r\n.header-container {\r\n  max-width: 1536px;\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n  background-color: #2196f3;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  border-bottom: 0.09px solid #fff;\r\n}\r\n\r\n.header-navbar {\r\n  max-width: 1536px;\r\n  padding: 4px;\r\n  display: flex;\r\n  padding-right: 30px;\r\n  align-items: center;\r\n}\r\n\r\n.restaurant-icon {\r\n  width: 60px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.navbar-menu {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  list-style: none;\r\n}\r\n\r\n.menu-item-link {\r\n  display: inline-block;\r\n  padding: 10px;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  font-size: 17px;\r\n}\r\n\r\n.menu-active {\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.main {\r\n  max-width: 1536px;\r\n  margin-left: 30px;\r\n  margin-right: 30px;\r\n  overflow: hidden;\r\n}\r\n\r\n.meal-container {\r\n  padding: 2rem;\r\n  background-color: #f2f2f2;\r\n  gap: 2rem;\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  list-style: none;\r\n}\r\n\r\n.meal-card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 10px;\r\n  background-color: transparent;\r\n  background-image:\r\n    linear-gradient(\r\n      -45deg,\r\n      transparent,\r\n      transparent 2%,\r\n      white 2%,\r\n      white 85%,\r\n      transparent,\r\n      85%,\r\n      transparent\r\n    ),\r\n    linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%);\r\n  background-position: top left, 0.2em 0.2em;\r\n  background-repeat: no-repeat;\r\n}\r\n\r\n.meal-head {\r\n  text-align: end;\r\n  font-style: italic;\r\n  font-size: 15px;\r\n}\r\n\r\n.meal-thumbail {\r\n  width: 300px;\r\n  height: 300px;\r\n  border-radius: 50%;\r\n  align-self: center;\r\n  padding: 10px;\r\n}\r\n\r\n.meal-item {\r\n  flex-grow: 0;\r\n  flex-basis: 100%;\r\n}\r\n\r\n.meal-interaction {\r\n  padding: 8px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  font-size: 17px;\r\n}\r\n\r\n.meal-button {\r\n  padding: 6px;\r\n  border: none;\r\n  font-size: 17px;\r\n  cursor: pointer;\r\n}\r\n\r\n.meal-button:hover {\r\n  color: #00f;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .meal-item {\r\n    flex-basis: 47.5%;\r\n  }\r\n}\r\n\r\n@media (min-width: 1125px) {\r\n  .meal-item {\r\n    flex-basis: 31%;\r\n  }\r\n}\r\n\r\n.comment-popup {\r\n  padding: 2rem;\r\n  background-color: #f2f2f2;\r\n}\r\n\r\n.comment-container {\r\n  display: flex;\r\n  gap: 1rem;\r\n  list-style: none;\r\n  flex-direction: column;\r\n}\r\n\r\n.comment-head {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  border-bottom: 1px solid #00f;\r\n  padding: 10px;\r\n}\r\n\r\n.comment-thumbail {\r\n  max-width: 348px;\r\n  max-height: 348px;\r\n  height: auto;\r\n  align-self: center;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.meal-image {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 50%;\r\n}\r\n\r\n.button-close {\r\n  border: none;\r\n  font-size: 17px;\r\n  font-weight: bold;\r\n  background-color: transparent;\r\n}\r\n\r\n.comment-details {\r\n  border-top: 1px solid #00f;\r\n  gap: 10px;\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n}\r\n\r\n.meal-desc {\r\n  padding: 10px;\r\n  font-size: 15px;\r\n  font-style: italic;\r\n}\r\n\r\n.add-comment {\r\n  padding: 16px;\r\n  border: 1px solid #000;\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.commet-item {\r\n  padding-left: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.comment-form {\r\n  padding: 10px;\r\n  display: flex;\r\n  gap: 10px;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  border-bottom: 1px dashed #000;\r\n  margin-top: 10px;\r\n}\r\n\r\n.comment-input {\r\n  padding: 7px;\r\n}\r\n\r\n.comment-history {\r\n  display: block;\r\n  padding: 10px;\r\n  line-height: 1.5rem;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.footer-container {\r\n  max-width: 1536px;\r\n  margin: 30px;\r\n  width: 100%;\r\n  background-color: #2196f3;\r\n  opacity: 0.8;\r\n  display: block;\r\n  border-top: 0.09px solid #fff;\r\n}\r\n\r\n.nav-footer {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-flow: row wrap;\r\n  gap: 20px;\r\n  padding: 1rem;\r\n}\r\n\r\n.dev-description {\r\n  display: flex;\r\n}\r\n\r\n.developer {\r\n  display: flex;\r\n  padding: 10px;\r\n  list-style: none;\r\n}\r\n\r\n.mit {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.d-popup header {\r\n  display: none;\r\n}\r\n\r\n.d-popup > main > .meal-container {\r\n  display: none;\r\n}\r\n\r\n.d-popup footer {\r\n  display: none;\r\n}\r\n\r\n.d-none {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resource/images/logo.png");

/***/ }),

/***/ "./src/assets/meal.jpg":
/*!*****************************!*\
  !*** ./src/assets/meal.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resource/images/meal.jpg");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _assets_meal_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/meal.jpg */ "./src/assets/meal.jpg");
/* harmony import */ var _module_meal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/meal.js */ "./src/module/meal.js");
/* harmony import */ var _module_dom_elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/dom_elements.js */ "./src/module/dom_elements.js");
/* harmony import */ var _module_eventlistener_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/eventlistener.js */ "./src/module/eventlistener.js");
/* harmony import */ var _module_likes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/likes.js */ "./src/module/likes.js");
/* harmony import */ var _module_comments_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/comments.js */ "./src/module/comments.js");









let meals = [];
const render = () => {
  let list = '';
  document.getElementById(
    'item-count',
  ).textContent = `Seafood (${meals.length})`;
  meals.forEach((meal) => {
    list += `
    <li class="meal-item meal-card">
          <p class="meal-head">${meal.strMeal}</p>
          <hr>
          <img src="${meal.strMealThumb}" class="meal-thumbail">
          <hr>
          <div class="meal-interaction">
          <button class="meal-button meal-comment" value="${meal.idMeal}">&#10029; Comment</button>
            <button class="meal-button meal-like" value="${meal.idMeal}">&#10084; Like</button><p id="like${meal.idMeal}"> Liked 0</p></div>
          </div>
        </li>
    `;
  });
  _module_dom_elements_js__WEBPACK_IMPORTED_MODULE_4__.ulelement.innerHTML = list;
  (0,_module_likes_js__WEBPACK_IMPORTED_MODULE_6__.updatelikes)();
};

const loading = async () => {
  await (0,_module_meal_js__WEBPACK_IMPORTED_MODULE_3__["default"])().then((data) => {
    meals = [...data];
    render();
    (0,_module_eventlistener_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
  });
  (0,_module_comments_js__WEBPACK_IMPORTED_MODULE_7__.addpopup)();
};
loading();


/***/ }),

/***/ "./src/module/comments.js":
/*!********************************!*\
  !*** ./src/module/comments.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addcomment": () => (/* binding */ addcomment),
/* harmony export */   "addpopup": () => (/* binding */ addpopup)
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/module/popup.js");
/* harmony import */ var _restapi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restapi.js */ "./src/module/restapi.js");
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom_elements.js */ "./src/module/dom_elements.js");
/* harmony import */ var _countcomment_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./countcomment.js */ "./src/module/countcomment.js");
/* harmony import */ var _countcomment_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_countcomment_js__WEBPACK_IMPORTED_MODULE_3__);





const commentdisplay = (content) => {
  document.querySelector('.popup-comments').innerHTML = content;
};

const commentpage = (list) => {
  document.getElementById('popupmeal-name').textContent = list.strMeal;
  document.getElementById('popupmeal-id').value = list.idMeal;
  document.getElementById(
    'popupmeal-cat',
  ).textContent = `Category : ${list.strCategory}`;
  document.getElementById(
    'popupmeal-area',
  ).textContent = `Area : ${list.strArea}`;
  document.getElementById(
    'popupmeal-tag',
  ).textContent = `Tags : ${list.strTags}`;
  document.getElementById('popupmeal-img').src = list.strMealThumb;
  document.getElementById('popupmeal-video').href = list.strYoutube;
};

const mealbyid = async (id) => {
  const url = `${_restapi_js__WEBPACK_IMPORTED_MODULE_1__.mealurl}/lookup.php?i=${id}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      commentpage(data.meals[0]);
    }
  } catch (error) {
    throw error();
  }
};

const updatecomments = async (id) => {
  const url = `${_restapi_js__WEBPACK_IMPORTED_MODULE_1__.baseurl}/comments?item_id=${id}`;
  commentdisplay('');
  _countcomment_js__WEBPACK_IMPORTED_MODULE_3___default()('');
  try {
    const response = await fetch(url);
    if (response.ok) {
      const lists = await response.json();
      _countcomment_js__WEBPACK_IMPORTED_MODULE_3___default()(lists.length);
      let html = '';
      lists.forEach((list) => {
        html += `<p class="comment-history"><strong>${list.username} :</strong>${list.comment} on <strong>${list.creation_date}.</strong>
`;
      });
      commentdisplay(html);
    }
  } catch (error) {
    throw error();
  }
};

const addcomment = (event) => {
  mealbyid(event.target.value);
  updatecomments(event.target.value);
  (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.togglepopup)();
};

const createcomment = async (event) => {
  event.preventDefault();
  const { itemid, username, comment } = event.target.elements;
  const data = {
    item_id: itemid.value,
    username: username.value,
    comment: comment.value,
  };
  const url = `${_restapi_js__WEBPACK_IMPORTED_MODULE_1__.baseurl}/comments`;
  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      if (response.ok) {
        updatecomments(data.item_id);
        _dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.formdata.reset();
      }
    });
  } catch (error) {
    throw error();
  }
};

const commentform = () => {
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.formdata.addEventListener('submit', createcomment);
};
const closepopup = () => {
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_2__.btnclose.addEventListener('click', _popup_js__WEBPACK_IMPORTED_MODULE_0__.togglepopup);
};
const addpopup = () => {
  closepopup();
  commentform();
};


/***/ }),

/***/ "./src/module/countcomment.js":
/*!************************************!*\
  !*** ./src/module/countcomment.js ***!
  \************************************/
/***/ ((module) => {

function commentcounter(num) {
  document.getElementById('comment-count').textContent = num;
}
module.exports = commentcounter;


/***/ }),

/***/ "./src/module/countlike.js":
/*!*********************************!*\
  !*** ./src/module/countlike.js ***!
  \*********************************/
/***/ ((module) => {

function likecounter(id, num) {
  document.getElementById(id).textContent = num;
}

module.exports = likecounter;


/***/ }),

/***/ "./src/module/dom_elements.js":
/*!************************************!*\
  !*** ./src/module/dom_elements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "body": () => (/* binding */ body),
/* harmony export */   "btnclose": () => (/* binding */ btnclose),
/* harmony export */   "cpopup": () => (/* binding */ cpopup),
/* harmony export */   "formdata": () => (/* binding */ formdata),
/* harmony export */   "ulelement": () => (/* binding */ ulelement)
/* harmony export */ });
const ulelement = document.getElementById('meal-unorder-id');
const body = document.querySelector('body');
const cpopup = document.querySelector('.comment-popup');
const btnclose = document.querySelector('.button-close');
const formdata = document.querySelector('.comment-form');


/***/ }),

/***/ "./src/module/eventlistener.js":
/*!*************************************!*\
  !*** ./src/module/eventlistener.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ "./src/module/comments.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes.js */ "./src/module/likes.js");



const addaction = () => {
  const comments = document.querySelectorAll('.meal-comment');
  const likes = document.querySelectorAll('.meal-like');
  comments.forEach((comment) => {
    comment.addEventListener('click', _comments_js__WEBPACK_IMPORTED_MODULE_0__.addcomment);
  });
  likes.forEach((like) => {
    like.addEventListener('click', _likes_js__WEBPACK_IMPORTED_MODULE_1__.addlike);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addaction);


/***/ }),

/***/ "./src/module/likes.js":
/*!*****************************!*\
  !*** ./src/module/likes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addlike": () => (/* binding */ addlike),
/* harmony export */   "updatelikes": () => (/* binding */ updatelikes)
/* harmony export */ });
/* harmony import */ var _restapi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restapi.js */ "./src/module/restapi.js");
/* harmony import */ var _countlike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countlike.js */ "./src/module/countlike.js");
/* harmony import */ var _countlike_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_countlike_js__WEBPACK_IMPORTED_MODULE_1__);



const renderlikes = (lists) => {
  lists.forEach((list) => {
    try {
      const id = `like${list.item_id}`;
      const like = `Liked ${list.likes}`;
      if (document.getElementById(id)) {
        _countlike_js__WEBPACK_IMPORTED_MODULE_1___default()(id, like);
      }
    } catch (error) {
      throw error();
    }
  });
};
const updatelikes = async () => {
  const url = `${_restapi_js__WEBPACK_IMPORTED_MODULE_0__.baseurl}/likes/`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      renderlikes(data);
    }
  } catch (error) {
    throw error();
  }
};

const addlike = async (event) => {
  const mealid = event.target.value;
  const url = `${_restapi_js__WEBPACK_IMPORTED_MODULE_0__.baseurl}/likes/`;
  try {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({ item_id: mealid }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      if (response.ok) {
        updatelikes();
      }
    });
  } catch (error) {
    throw error();
  }
};


/***/ }),

/***/ "./src/module/meal.js":
/*!****************************!*\
  !*** ./src/module/meal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restapi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restapi.js */ "./src/module/restapi.js");


const getcategories = async () => {
  const url = `${_restapi_js__WEBPACK_IMPORTED_MODULE_0__.mealurl}/filter.php?c=Seafood`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.meals;
  } catch (error) {
    throw error();
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getcategories);


/***/ }),

/***/ "./src/module/popup.js":
/*!*****************************!*\
  !*** ./src/module/popup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getnone": () => (/* binding */ getnone),
/* harmony export */   "togglepopup": () => (/* binding */ togglepopup)
/* harmony export */ });
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_elements.js */ "./src/module/dom_elements.js");


const togglepopup = () => {
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.cpopup.classList.toggle('d-none');
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.body.classList.toggle('d-popup');
};

const getnone = () => {
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.body.classList.toggle('d-popup');
};


/***/ }),

/***/ "./src/module/restapi.js":
/*!*******************************!*\
  !*** ./src/module/restapi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseurl": () => (/* binding */ baseurl),
/* harmony export */   "mealurl": () => (/* binding */ mealurl),
/* harmony export */   "starturl": () => (/* binding */ starturl)
/* harmony export */ });
const address = 'us-central1-involvement-api.cloudfunctions.net';
const dirname = 'capstoneApi';
const path = 'apps';
const starturl = `https://${address}/${dirname}/${path}/`;
const appid = 'pWOkUYxHJi4ZVPIAAXpp';
const baseurl = `https://${address}/${dirname}/${path}/${appid}`;
const mealurl = 'https://www.themealdb.com/api/json/v1/1';


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxnQkFBZ0IsT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZ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QVEsR0FBRyxLQUFLLEdBQUcsTUFBTTtBQUMvRCIsInNvdXJjZXMiOlsid2VicGFjazovL21lYWx3ZWJhcHAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL3NyYy9hc3NldHMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL3NyYy9hc3NldHMvbWVhbC5qcGciLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzPzYwMWQiLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9zcmMvbW9kdWxlL2NvbW1lbnRzLmpzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9zcmMvbW9kdWxlL2NvdW50Y29tbWVudC5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vc3JjL21vZHVsZS9jb3VudGxpa2UuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL3NyYy9tb2R1bGUvZG9tX2VsZW1lbnRzLmpzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9zcmMvbW9kdWxlL2V2ZW50bGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL3NyYy9tb2R1bGUvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL3NyYy9tb2R1bGUvbWVhbC5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vc3JjL21vZHVsZS9wb3B1cC5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vc3JjL21vZHVsZS9yZXN0YXBpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTUzNnB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBib3JkZXItYm90dG9tOiAwLjA5cHggc29saWQgI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci1uYXZiYXIge1xcclxcbiAgbWF4LXdpZHRoOiAxNTM2cHg7XFxyXFxuICBwYWRkaW5nOiA0cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5yZXN0YXVyYW50LWljb24ge1xcclxcbiAgd2lkdGg6IDYwcHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXItbWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbS1saW5rIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICBtYXgtd2lkdGg6IDE1MzZweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1jYXJkIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTpcXHJcXG4gICAgbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIC00NWRlZyxcXHJcXG4gICAgICB0cmFuc3BhcmVudCxcXHJcXG4gICAgICB0cmFuc3BhcmVudCAyJSxcXHJcXG4gICAgICB3aGl0ZSAyJSxcXHJcXG4gICAgICB3aGl0ZSA4NSUsXFxyXFxuICAgICAgdHJhbnNwYXJlbnQsXFxyXFxuICAgICAgODUlLFxcclxcbiAgICAgIHRyYW5zcGFyZW50XFxyXFxuICAgICksXFxyXFxuICAgIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyYWQsICMyYWQgOTAlLCB0cmFuc3BhcmVudCA5MCUpO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQsIDAuMmVtIDAuMmVtO1xcclxcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaGVhZCB7XFxyXFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLXRodW1iYWlsIHtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pdGVtIHtcXHJcXG4gIGZsZXgtZ3JvdzogMDtcXHJcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWludGVyYWN0aW9uIHtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1idXR0b24ge1xcclxcbiAgcGFkZGluZzogNnB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1idXR0b246aG92ZXIge1xcclxcbiAgY29sb3I6ICMwMGY7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcbiAgLm1lYWwtaXRlbSB7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDQ3LjUlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogMTEyNXB4KSB7XFxyXFxuICAubWVhbC1pdGVtIHtcXHJcXG4gICAgZmxleC1iYXNpczogMzElO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1wb3B1cCB7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDFyZW07XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaGVhZCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwZjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXRodW1iYWlsIHtcXHJcXG4gIG1heC13aWR0aDogMzQ4cHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAzNDhweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1jbG9zZSB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDE3cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1kZXRhaWxzIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDBmO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWRlc2Mge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1jb21tZW50IHtcXHJcXG4gIHBhZGRpbmc6IDE2cHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1ldC1pdGVtIHtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1mb3JtIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMwMDA7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1pbnB1dCB7XFxyXFxuICBwYWRkaW5nOiA3cHg7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWhpc3Rvcnkge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTUzNnB4O1xcclxcbiAgbWFyZ2luOiAzMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcclxcbiAgb3BhY2l0eTogMC44O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBib3JkZXItdG9wOiAwLjA5cHggc29saWQgI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldi1kZXNjcmlwdGlvbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV2ZWxvcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1pdCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmQtcG9wdXAgaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kLXBvcHVwID4gbWFpbiA+IC5tZWFsLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1wb3B1cCBmb290ZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmQtbm9uZSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0I7Ozs7Ozs7Ozs7O3FFQVdtRTtFQUNuRSwwQ0FBMEM7RUFDMUMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixTQUFTO0VBQ1QsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE1MzZweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMC4wOXB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXItbmF2YmFyIHtcXHJcXG4gIG1heC13aWR0aDogMTUzNnB4O1xcclxcbiAgcGFkZGluZzogNHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdGF1cmFudC1pY29uIHtcXHJcXG4gIHdpZHRoOiA2MHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyLW1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0tbGluayB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4ge1xcclxcbiAgbWF4LXdpZHRoOiAxNTM2cHg7XFxyXFxuICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMzBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWNvbnRhaW5lciB7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtY2FyZCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6XFxyXFxuICAgIGxpbmVhci1ncmFkaWVudChcXHJcXG4gICAgICAtNDVkZWcsXFxyXFxuICAgICAgdHJhbnNwYXJlbnQsXFxyXFxuICAgICAgdHJhbnNwYXJlbnQgMiUsXFxyXFxuICAgICAgd2hpdGUgMiUsXFxyXFxuICAgICAgd2hpdGUgODUlLFxcclxcbiAgICAgIHRyYW5zcGFyZW50LFxcclxcbiAgICAgIDg1JSxcXHJcXG4gICAgICB0cmFuc3BhcmVudFxcclxcbiAgICApLFxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAjMmFkLCAjMmFkIDkwJSwgdHJhbnNwYXJlbnQgOTAlKTtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0LCAwLjJlbSAwLjJlbTtcXHJcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxufVxcclxcblxcclxcbi5tZWFsLWhlYWQge1xcclxcbiAgdGV4dC1hbGlnbjogZW5kO1xcclxcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC10aHVtYmFpbCB7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaXRlbSB7XFxyXFxuICBmbGV4LWdyb3c6IDA7XFxyXFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1pbnRlcmFjdGlvbiB7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDZweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtYnV0dG9uOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjMDBmO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tZWFsLWl0ZW0ge1xcclxcbiAgICBmbGV4LWJhc2lzOiA0Ny41JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDExMjVweCkge1xcclxcbiAgLm1lYWwtaXRlbSB7XFxyXFxuICAgIGZsZXgtYmFzaXM6IDMxJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtcG9wdXAge1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAxcmVtO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LWhlYWQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMGY7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC10aHVtYmFpbCB7XFxyXFxuICBtYXgtd2lkdGg6IDM0OHB4O1xcclxcbiAgbWF4LWhlaWdodDogMzQ4cHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lYWwtaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5idXR0b24tY2xvc2Uge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZGV0YWlscyB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwZjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVhbC1kZXNjIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5hZGQtY29tbWVudCB7XFxyXFxuICBwYWRkaW5nOiAxNnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb21tZXQtaXRlbSB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtZm9ybSB7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjMDAwO1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbW1lbnQtaW5wdXQge1xcclxcbiAgcGFkZGluZzogN3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1oaXN0b3J5IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDE1MzZweDtcXHJcXG4gIG1hcmdpbjogMzBweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYm9yZGVyLXRvcDogMC4wOXB4IHNvbGlkICNmZmY7XFxyXFxufVxcclxcblxcclxcbi5uYXYtZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5kZXYtZGVzY3JpcHRpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmRldmVsb3BlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5taXQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5kLXBvcHVwIGhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZC1wb3B1cCA+IG1haW4gPiAubWVhbC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmQtcG9wdXAgZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kLW5vbmUge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicmVzb3VyY2UvaW1hZ2VzL2xvZ28ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInJlc291cmNlL2ltYWdlcy9tZWFsLmpwZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL2xvZ28ucG5nJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWFsLmpwZyc7XHJcbmltcG9ydCBnZXRjYXRlZ29yaWVzIGZyb20gJy4vbW9kdWxlL21lYWwuanMnO1xyXG5pbXBvcnQgeyB1bGVsZW1lbnQgfSBmcm9tICcuL21vZHVsZS9kb21fZWxlbWVudHMuanMnO1xyXG5pbXBvcnQgYWRkYWN0aW9uIGZyb20gJy4vbW9kdWxlL2V2ZW50bGlzdGVuZXIuanMnO1xyXG5pbXBvcnQgeyB1cGRhdGVsaWtlcyB9IGZyb20gJy4vbW9kdWxlL2xpa2VzLmpzJztcclxuaW1wb3J0IHsgYWRkcG9wdXAgfSBmcm9tICcuL21vZHVsZS9jb21tZW50cy5qcyc7XHJcblxyXG5sZXQgbWVhbHMgPSBbXTtcclxuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xyXG4gIGxldCBsaXN0ID0gJyc7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAnaXRlbS1jb3VudCcsXHJcbiAgKS50ZXh0Q29udGVudCA9IGBTZWFmb29kICgke21lYWxzLmxlbmd0aH0pYDtcclxuICBtZWFscy5mb3JFYWNoKChtZWFsKSA9PiB7XHJcbiAgICBsaXN0ICs9IGBcclxuICAgIDxsaSBjbGFzcz1cIm1lYWwtaXRlbSBtZWFsLWNhcmRcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwibWVhbC1oZWFkXCI+JHttZWFsLnN0ck1lYWx9PC9wPlxyXG4gICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIke21lYWwuc3RyTWVhbFRodW1ifVwiIGNsYXNzPVwibWVhbC10aHVtYmFpbFwiPlxyXG4gICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaW50ZXJhY3Rpb25cIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtZWFsLWJ1dHRvbiBtZWFsLWNvbW1lbnRcIiB2YWx1ZT1cIiR7bWVhbC5pZE1lYWx9XCI+JiMxMDAyOTsgQ29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWVhbC1idXR0b24gbWVhbC1saWtlXCIgdmFsdWU9XCIke21lYWwuaWRNZWFsfVwiPiYjMTAwODQ7IExpa2U8L2J1dHRvbj48cCBpZD1cImxpa2Uke21lYWwuaWRNZWFsfVwiPiBMaWtlZCAwPC9wPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9saT5cclxuICAgIGA7XHJcbiAgfSk7XHJcbiAgdWxlbGVtZW50LmlubmVySFRNTCA9IGxpc3Q7XHJcbiAgdXBkYXRlbGlrZXMoKTtcclxufTtcclxuXHJcbmNvbnN0IGxvYWRpbmcgPSBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgZ2V0Y2F0ZWdvcmllcygpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIG1lYWxzID0gWy4uLmRhdGFdO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgICBhZGRhY3Rpb24oKTtcclxuICB9KTtcclxuICBhZGRwb3B1cCgpO1xyXG59O1xyXG5sb2FkaW5nKCk7XHJcbiIsImltcG9ydCB7IHRvZ2dsZXBvcHVwIH0gZnJvbSAnLi9wb3B1cC5qcyc7XHJcbmltcG9ydCB7IG1lYWx1cmwsIGJhc2V1cmwgfSBmcm9tICcuL3Jlc3RhcGkuanMnO1xyXG5pbXBvcnQgeyBidG5jbG9zZSwgZm9ybWRhdGEgfSBmcm9tICcuL2RvbV9lbGVtZW50cy5qcyc7XHJcbmltcG9ydCBjb21tZW50Y291bnRlciBmcm9tICcuL2NvdW50Y29tbWVudC5qcyc7XHJcblxyXG5jb25zdCBjb21tZW50ZGlzcGxheSA9IChjb250ZW50KSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbW1lbnRzJykuaW5uZXJIVE1MID0gY29udGVudDtcclxufTtcclxuXHJcbmNvbnN0IGNvbW1lbnRwYWdlID0gKGxpc3QpID0+IHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBtZWFsLW5hbWUnKS50ZXh0Q29udGVudCA9IGxpc3Quc3RyTWVhbDtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBtZWFsLWlkJykudmFsdWUgPSBsaXN0LmlkTWVhbDtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICAgICdwb3B1cG1lYWwtY2F0JyxcclxuICApLnRleHRDb250ZW50ID0gYENhdGVnb3J5IDogJHtsaXN0LnN0ckNhdGVnb3J5fWA7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAncG9wdXBtZWFsLWFyZWEnLFxyXG4gICkudGV4dENvbnRlbnQgPSBgQXJlYSA6ICR7bGlzdC5zdHJBcmVhfWA7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgICAncG9wdXBtZWFsLXRhZycsXHJcbiAgKS50ZXh0Q29udGVudCA9IGBUYWdzIDogJHtsaXN0LnN0clRhZ3N9YDtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBtZWFsLWltZycpLnNyYyA9IGxpc3Quc3RyTWVhbFRodW1iO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cG1lYWwtdmlkZW8nKS5ocmVmID0gbGlzdC5zdHJZb3V0dWJlO1xyXG59O1xyXG5cclxuY29uc3QgbWVhbGJ5aWQgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCB1cmwgPSBgJHttZWFsdXJsfS9sb29rdXAucGhwP2k9JHtpZH1gO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgY29tbWVudHBhZ2UoZGF0YS5tZWFsc1swXSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IGVycm9yKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlY29tbWVudHMgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCB1cmwgPSBgJHtiYXNldXJsfS9jb21tZW50cz9pdGVtX2lkPSR7aWR9YDtcclxuICBjb21tZW50ZGlzcGxheSgnJyk7XHJcbiAgY29tbWVudGNvdW50ZXIoJycpO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgbGlzdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIGNvbW1lbnRjb3VudGVyKGxpc3RzLmxlbmd0aCk7XHJcbiAgICAgIGxldCBodG1sID0gJyc7XHJcbiAgICAgIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcclxuICAgICAgICBodG1sICs9IGA8cCBjbGFzcz1cImNvbW1lbnQtaGlzdG9yeVwiPjxzdHJvbmc+JHtsaXN0LnVzZXJuYW1lfSA6PC9zdHJvbmc+JHtsaXN0LmNvbW1lbnR9IG9uIDxzdHJvbmc+JHtsaXN0LmNyZWF0aW9uX2RhdGV9Ljwvc3Ryb25nPlxyXG5gO1xyXG4gICAgICB9KTtcclxuICAgICAgY29tbWVudGRpc3BsYXkoaHRtbCk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IGVycm9yKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZGNvbW1lbnQgPSAoZXZlbnQpID0+IHtcclxuICBtZWFsYnlpZChldmVudC50YXJnZXQudmFsdWUpO1xyXG4gIHVwZGF0ZWNvbW1lbnRzKGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgdG9nZ2xlcG9wdXAoKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZWNvbW1lbnQgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHsgaXRlbWlkLCB1c2VybmFtZSwgY29tbWVudCB9ID0gZXZlbnQudGFyZ2V0LmVsZW1lbnRzO1xyXG4gIGNvbnN0IGRhdGEgPSB7XHJcbiAgICBpdGVtX2lkOiBpdGVtaWQudmFsdWUsXHJcbiAgICB1c2VybmFtZTogdXNlcm5hbWUudmFsdWUsXHJcbiAgICBjb21tZW50OiBjb21tZW50LnZhbHVlLFxyXG4gIH07XHJcbiAgY29uc3QgdXJsID0gYCR7YmFzZXVybH0vY29tbWVudHNgO1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBmZXRjaCh1cmwsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcclxuICAgICAgfSxcclxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHVwZGF0ZWNvbW1lbnRzKGRhdGEuaXRlbV9pZCk7XHJcbiAgICAgICAgZm9ybWRhdGEucmVzZXQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IGVycm9yKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgY29tbWVudGZvcm0gPSAoKSA9PiB7XHJcbiAgZm9ybWRhdGEuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY3JlYXRlY29tbWVudCk7XHJcbn07XHJcbmNvbnN0IGNsb3NlcG9wdXAgPSAoKSA9PiB7XHJcbiAgYnRuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVwb3B1cCk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCBhZGRwb3B1cCA9ICgpID0+IHtcclxuICBjbG9zZXBvcHVwKCk7XHJcbiAgY29tbWVudGZvcm0oKTtcclxufTtcclxuIiwiZnVuY3Rpb24gY29tbWVudGNvdW50ZXIobnVtKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtY291bnQnKS50ZXh0Q29udGVudCA9IG51bTtcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IGNvbW1lbnRjb3VudGVyO1xyXG4iLCJmdW5jdGlvbiBsaWtlY291bnRlcihpZCwgbnVtKSB7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLnRleHRDb250ZW50ID0gbnVtO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGxpa2Vjb3VudGVyO1xyXG4iLCJleHBvcnQgY29uc3QgdWxlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lYWwtdW5vcmRlci1pZCcpO1xyXG5leHBvcnQgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuZXhwb3J0IGNvbnN0IGNwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXBvcHVwJyk7XHJcbmV4cG9ydCBjb25zdCBidG5jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY2xvc2UnKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1kYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtZm9ybScpO1xyXG4iLCJpbXBvcnQgeyBhZGRjb21tZW50IH0gZnJvbSAnLi9jb21tZW50cy5qcyc7XHJcbmltcG9ydCB7IGFkZGxpa2UgfSBmcm9tICcuL2xpa2VzLmpzJztcclxuXHJcbmNvbnN0IGFkZGFjdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBjb21tZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZWFsLWNvbW1lbnQnKTtcclxuICBjb25zdCBsaWtlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZWFsLWxpa2UnKTtcclxuICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XHJcbiAgICBjb21tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkY29tbWVudCk7XHJcbiAgfSk7XHJcbiAgbGlrZXMuZm9yRWFjaCgobGlrZSkgPT4ge1xyXG4gICAgbGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZGxpa2UpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkYWN0aW9uO1xyXG4iLCJpbXBvcnQgeyBiYXNldXJsIH0gZnJvbSAnLi9yZXN0YXBpLmpzJztcclxuaW1wb3J0IGxpa2Vjb3VudGVyIGZyb20gJy4vY291bnRsaWtlLmpzJztcclxuXHJcbmNvbnN0IHJlbmRlcmxpa2VzID0gKGxpc3RzKSA9PiB7XHJcbiAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgaWQgPSBgbGlrZSR7bGlzdC5pdGVtX2lkfWA7XHJcbiAgICAgIGNvbnN0IGxpa2UgPSBgTGlrZWQgJHtsaXN0Lmxpa2VzfWA7XHJcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkpIHtcclxuICAgICAgICBsaWtlY291bnRlcihpZCwgbGlrZSk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHRocm93IGVycm9yKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCB1cGRhdGVsaWtlcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB1cmwgPSBgJHtiYXNldXJsfS9saWtlcy9gO1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmVuZGVybGlrZXMoZGF0YSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHRocm93IGVycm9yKCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZGxpa2UgPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICBjb25zdCBtZWFsaWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgY29uc3QgdXJsID0gYCR7YmFzZXVybH0vbGlrZXMvYDtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IG1lYWxpZCB9KSxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXHJcbiAgICAgIH0sXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICB1cGRhdGVsaWtlcygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgZXJyb3IoKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCB7IG1lYWx1cmwgfSBmcm9tICcuL3Jlc3RhcGkuanMnO1xyXG5cclxuY29uc3QgZ2V0Y2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB1cmwgPSBgJHttZWFsdXJsfS9maWx0ZXIucGhwP2M9U2VhZm9vZGA7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YS5tZWFscztcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgZXJyb3IoKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRjYXRlZ29yaWVzO1xyXG4iLCJpbXBvcnQgeyBib2R5LCBjcG9wdXAgfSBmcm9tICcuL2RvbV9lbGVtZW50cy5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlcG9wdXAgPSAoKSA9PiB7XHJcbiAgY3BvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xyXG4gIGJvZHkuY2xhc3NMaXN0LnRvZ2dsZSgnZC1wb3B1cCcpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldG5vbmUgPSAoKSA9PiB7XHJcbiAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkLXBvcHVwJyk7XHJcbn07XHJcbiIsImNvbnN0IGFkZHJlc3MgPSAndXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldCc7XHJcbmNvbnN0IGRpcm5hbWUgPSAnY2Fwc3RvbmVBcGknO1xyXG5jb25zdCBwYXRoID0gJ2FwcHMnO1xyXG5leHBvcnQgY29uc3Qgc3RhcnR1cmwgPSBgaHR0cHM6Ly8ke2FkZHJlc3N9LyR7ZGlybmFtZX0vJHtwYXRofS9gO1xyXG5jb25zdCBhcHBpZCA9ICdwV09rVVl4SEppNFpWUElBQVhwcCc7XHJcbmV4cG9ydCBjb25zdCBiYXNldXJsID0gYGh0dHBzOi8vJHthZGRyZXNzfS8ke2Rpcm5hbWV9LyR7cGF0aH0vJHthcHBpZH1gO1xyXG5leHBvcnQgY29uc3QgbWVhbHVybCA9ICdodHRwczovL3d3dy50aGVtZWFsZGIuY29tL2FwaS9qc29uL3YxLzEnO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=