"use strict";
(self["webpackChunkmealwebapp"] = self["webpackChunkmealwebapp"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #fff;\n  display: flex;\n  justify-content: left;\n  flex-direction: column;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: normal;\n}\n\n.header-container {\n  max-width: 1536px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #2196f3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-flow: row wrap;\n  border-bottom: 0.09px solid #fff;\n}\n\n.header-navbar {\n  padding: 4px;\n  display: flex;\n  padding-right: 30px;\n  align-items: center;\n}\n\n.restaurant-icon {\n  width: 60px;\n  margin-right: 20px;\n}\n\n.navbar-menu {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  list-style: none;\n}\n\n.menu-item-link {\n  display: inline-block;\n  padding: 10px;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n.menu-active {\n  background-color: #f2f2f2;\n}\n\n.main {\n  max-width: 1536px;\n  margin-left: 30px;\n  margin-right: 30px;\n  overflow: hidden;\n}\n\n.meal-container {\n  padding: 2rem;\n  background-color: #f2f2f2;\n  gap: 2rem;\n  display: flex;\n  flex-flow: row wrap;\n  list-style: none;\n}\n\n.meal-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  background-color: transparent;\n  background-image: linear-gradient(\n      -45deg,\n      transparent,\n      transparent 2%,\n      white 2%,\n      white 85%,\n      transparent,\n      85%,\n      transparent\n    ),\n    linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%);\n  background-position: top left, 0.2em 0.2em;\n  background-repeat: no-repeat;\n}\n\n.meal-head {\n  text-align: end;\n  font-style: italic;\n  font-size: 15px;\n}\n\n.meal-thumbail {\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  align-self: center;\n  padding: 10px;\n}\n\n.meal-item {\n  flex-grow: 0;\n  flex-basis: 100%;\n}\n\n.meal-interaction {\n  padding: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 17px;\n}\n\n.meal-button {\n  padding: 6px;\n  border: none;\n  font-size: 17px;\n  cursor: pointer;\n}\n\n.meal-button:hover {\n  color: #00f;\n}\n\n@media (min-width: 768px) {\n  .meal-item {\n    flex-basis: 47.5%;\n  }\n}\n\n@media (min-width: 1125px) {\n  .meal-item {\n    flex-basis: 31%;\n  }\n}\n\n.comment-popup {\n  padding: 2rem;\n  background-color: #f2f2f2;\n}\n\n.comment-container {\n  display: flex;\n  gap: 1rem;\n  list-style: none;\n  flex-direction: column;\n}\n\n.comment-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 1px solid #00f;\n  padding: 10px;\n}\n\n.comment-thumbail{\n  max-width: 348px;\n  max-height: 348px;\n  height: auto;\n  align-self: center;\n  padding-bottom: 10px;\n}\n\n.meal-image{\nwidth: 100%;\nheight: auto;\nborder-radius: 50%;\n}\n\n.button-close{\nborder: none;\nfont-size: 17px;\nfont-weight: bold;\nbackground-color: transparent;\n}\n\n.comment-details{\n  border-top:1px solid #00f;\n  gap: 10px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-flow: row wrap;\n}\n\n.meal-desc{\n  padding: 10px;\n  font-size: 15px;\n  font-style: italic;\n}\n\n.add-comment{\n  padding: 16px;\n  border: 1px solid #000;\n  display: block;\n  width: 100%;\n}\n\n.commet-item{\n  padding-left: 10px;\n  padding-bottom: 10px;\n}\n\n.comment-form{\n  padding: 10px;\n  display: flex;\n  gap: 10px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-flow: row wrap;\n  border-bottom: 1px dashed #000;\n  margin-top: 10px;\n}\n\n.comment-input{\n  padding: 7px;\n}\n\n.comment-history{\n  display: block;\n  padding: 10px;\n  line-height: 1.5rem;\n  letter-spacing: 1px;\n}\n\n.d-popup header{\n  display: none;\n}\n\n.d-popup > main > .meal-container{\ndisplay: none;\n}\n\n.d-popup footer{\n  display: none;\n}\n\n.d-none{\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,aAAa;EACb,qBAAqB;EACrB,sBAAsB;EACtB,yCAAyC;EACzC,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;EACnB,gCAAgC;AAClC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,eAAe;EACf,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,SAAS;EACT,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,6BAA6B;EAC7B;;;;;;;;;;qEAUmE;EACnE,0CAA0C;EAC1C,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE;IACE,iBAAiB;EACnB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;AACF;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,SAAS;EACT,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,uBAAuB;EACvB,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;AACA,WAAW;AACX,YAAY;AACZ,kBAAkB;AAClB;;AAEA;AACA,YAAY;AACZ,eAAe;AACf,iBAAiB;AACjB,6BAA6B;AAC7B;;AAEA;EACE,yBAAyB;EACzB,SAAS;EACT,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,aAAa;EACb,SAAS;EACT,aAAa;EACb,2BAA2B;EAC3B,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;AACA,aAAa;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #fff;\n  display: flex;\n  justify-content: left;\n  flex-direction: column;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: normal;\n}\n\n.header-container {\n  max-width: 1536px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #2196f3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-flow: row wrap;\n  border-bottom: 0.09px solid #fff;\n}\n\n.header-navbar {\n  padding: 4px;\n  display: flex;\n  padding-right: 30px;\n  align-items: center;\n}\n\n.restaurant-icon {\n  width: 60px;\n  margin-right: 20px;\n}\n\n.navbar-menu {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  list-style: none;\n}\n\n.menu-item-link {\n  display: inline-block;\n  padding: 10px;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n.menu-active {\n  background-color: #f2f2f2;\n}\n\n.main {\n  max-width: 1536px;\n  margin-left: 30px;\n  margin-right: 30px;\n  overflow: hidden;\n}\n\n.meal-container {\n  padding: 2rem;\n  background-color: #f2f2f2;\n  gap: 2rem;\n  display: flex;\n  flex-flow: row wrap;\n  list-style: none;\n}\n\n.meal-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  background-color: transparent;\n  background-image: linear-gradient(\n      -45deg,\n      transparent,\n      transparent 2%,\n      white 2%,\n      white 85%,\n      transparent,\n      85%,\n      transparent\n    ),\n    linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%);\n  background-position: top left, 0.2em 0.2em;\n  background-repeat: no-repeat;\n}\n\n.meal-head {\n  text-align: end;\n  font-style: italic;\n  font-size: 15px;\n}\n\n.meal-thumbail {\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  align-self: center;\n  padding: 10px;\n}\n\n.meal-item {\n  flex-grow: 0;\n  flex-basis: 100%;\n}\n\n.meal-interaction {\n  padding: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 17px;\n}\n\n.meal-button {\n  padding: 6px;\n  border: none;\n  font-size: 17px;\n  cursor: pointer;\n}\n\n.meal-button:hover {\n  color: #00f;\n}\n\n@media (min-width: 768px) {\n  .meal-item {\n    flex-basis: 47.5%;\n  }\n}\n\n@media (min-width: 1125px) {\n  .meal-item {\n    flex-basis: 31%;\n  }\n}\n\n.comment-popup {\n  padding: 2rem;\n  background-color: #f2f2f2;\n}\n\n.comment-container {\n  display: flex;\n  gap: 1rem;\n  list-style: none;\n  flex-direction: column;\n}\n\n.comment-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 1px solid #00f;\n  padding: 10px;\n}\n\n.comment-thumbail{\n  max-width: 348px;\n  max-height: 348px;\n  height: auto;\n  align-self: center;\n  padding-bottom: 10px;\n}\n\n.meal-image{\nwidth: 100%;\nheight: auto;\nborder-radius: 50%;\n}\n\n.button-close{\nborder: none;\nfont-size: 17px;\nfont-weight: bold;\nbackground-color: transparent;\n}\n\n.comment-details{\n  border-top:1px solid #00f;\n  gap: 10px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-flow: row wrap;\n}\n\n.meal-desc{\n  padding: 10px;\n  font-size: 15px;\n  font-style: italic;\n}\n\n.add-comment{\n  padding: 16px;\n  border: 1px solid #000;\n  display: block;\n  width: 100%;\n}\n\n.commet-item{\n  padding-left: 10px;\n  padding-bottom: 10px;\n}\n\n.comment-form{\n  padding: 10px;\n  display: flex;\n  gap: 10px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-flow: row wrap;\n  border-bottom: 1px dashed #000;\n  margin-top: 10px;\n}\n\n.comment-input{\n  padding: 7px;\n}\n\n.comment-history{\n  display: block;\n  padding: 10px;\n  line-height: 1.5rem;\n  letter-spacing: 1px;\n}\n\n.d-popup header{\n  display: none;\n}\n\n.d-popup > main > .meal-container{\ndisplay: none;\n}\n\n.d-popup footer{\n  display: none;\n}\n\n.d-none{\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resource/images/logo.png");

/***/ }),

/***/ "./src/assets/title.png":
/*!******************************!*\
  !*** ./src/assets/title.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "resource/images/title.png");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _assets_title_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/title.png */ "./src/assets/title.png");
/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/logo.png */ "./src/assets/logo.png");
/* harmony import */ var _module_meal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/meal.js */ "./src/module/meal.js");
/* harmony import */ var _module_dom_elements_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/dom_elements.js */ "./src/module/dom_elements.js");
/* harmony import */ var _module_eventlistener_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./module/eventlistener.js */ "./src/module/eventlistener.js");
/* harmony import */ var _module_likes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/likes.js */ "./src/module/likes.js");
/* harmony import */ var _module_comments_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./module/comments.js */ "./src/module/comments.js");









let meals = [];
const render = () => {
  let list = '';
  document.getElementById(
    'item-count'
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
  const resp = await (0,_module_meal_js__WEBPACK_IMPORTED_MODULE_3__["default"])().then((data) => {
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addcomment": () => (/* binding */ addcomment),
/* harmony export */   "addpopup": () => (/* binding */ addpopup)
/* harmony export */ });
/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ "./src/module/popup.js");
/* harmony import */ var _restapi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restapi.js */ "./src/module/restapi.js");
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom_elements.js */ "./src/module/dom_elements.js");




const commentpage = (list) => {
  document.getElementById('popupmeal-name').textContent = list.strMeal;
  document.getElementById('popupmeal-id').value = list.idMeal;
  document.getElementById(
    'popupmeal-cat'
  ).textContent = `Category : ${list.strCategory}`;
  document.getElementById(
    'popupmeal-area'
  ).textContent = `Area : ${list.strArea}`;
  document.getElementById(
    'popupmeal-tag'
  ).textContent = `Tags : ${list.strTags}`;
  document.getElementById('popupmeal-img').src = list.strMealThumb;
  document.getElementById('popupmeal-video').href = list.strYoutube;
};

const mealbyid = async (id) => {
  const url = `${_restapi_js__WEBPACK_IMPORTED_MODULE_1__.meal_url}/lookup.php?i=${id}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      commentpage(data.meals[0]);
    }
  } catch (error) {
    console.log('Something is wrong comments.js line 14');
    throw error;
  }
};

const updatecomments = async (id) => {
  const url = `${_restapi_js__WEBPACK_IMPORTED_MODULE_1__.base_url}/comments?item_id=${id}`;
  document.querySelector('.popup-comments').innerHTML = '';
  document.getElementById('comment-count').textContent = '';
  try {
    const response = await fetch(url);
    if (response.ok) {
      const lists = await response.json();
      document.getElementById('comment-count').textContent = `(${
        lists.length ?? 0
      })`;
      let html = '';
      lists.forEach((list) => {
        html += `<p class="comment-history"><strong>${list.username} :</strong>${list.comment} on <strong>${list.creation_date}.</strong>
        `;
      });
      document.querySelector('.popup-comments').innerHTML = html;
    }
  } catch (error) {
    throw error;
  }
};

const addcomment = (event) => {
  mealbyid(event.target.value);
  updatecomments(event.target.value);
  (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.togglepopup)();
};

const createcomment = async (event) => {
  event.preventDefault();
  const { item_id, username, comment } = event.target.elements;
  const data = {
    item_id: item_id.value,
    username: username.value,
    comment: comment.value,
  };
  const url = `${_restapi_js__WEBPACK_IMPORTED_MODULE_1__.base_url}/comments`;
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
    throw error;
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

/***/ "./src/module/dom_elements.js":
/*!************************************!*\
  !*** ./src/module/dom_elements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addlike": () => (/* binding */ addlike),
/* harmony export */   "updatelikes": () => (/* binding */ updatelikes)
/* harmony export */ });
/* harmony import */ var _restapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restapi */ "./src/module/restapi.js");

const renderlikes = (lists) => {
  lists.forEach((list) => {
    try {
      const id = `like${list.item_id}`;
      const like = `Liked ${list.likes}`;
      const likepar = document.getElementById(id);
      if (likepar) {
        likepar.textContent = like;
      }
    } catch (error) {
      throw error;
    }
  });
};
const updatelikes = async () => {
  const url = `${_restapi__WEBPACK_IMPORTED_MODULE_0__.base_url}/likes/`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      renderlikes(data);
    }
  } catch (error) {
    throw error;
  }
};

const addlike = async (event) => {
  const mealid = event.target.value;
  const url = `${_restapi__WEBPACK_IMPORTED_MODULE_0__.base_url}/likes/`;
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
    throw error;
  }
};


/***/ }),

/***/ "./src/module/meal.js":
/*!****************************!*\
  !*** ./src/module/meal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restapi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restapi.js */ "./src/module/restapi.js");

 const getcategories = async () => {
   const url = `${_restapi_js__WEBPACK_IMPORTED_MODULE_0__.meal_url}/filter.php?c=Seafood`;
   try {
     const response = await fetch(url);
     const data = await response.json();
     return data.meals;
   } catch (error) {
     throw error;
   }
   return [];
 };
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getcategories);


/***/ }),

/***/ "./src/module/popup.js":
/*!*****************************!*\
  !*** ./src/module/popup.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "togglepopup": () => (/* binding */ togglepopup)
/* harmony export */ });
/* harmony import */ var _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_elements.js */ "./src/module/dom_elements.js");

const togglepopup = () => {
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.cpopup.classList.toggle('d-none');
  _dom_elements_js__WEBPACK_IMPORTED_MODULE_0__.body.classList.toggle('d-popup');
};


/***/ }),

/***/ "./src/module/restapi.js":
/*!*******************************!*\
  !*** ./src/module/restapi.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base_url": () => (/* binding */ base_url),
/* harmony export */   "meal_url": () => (/* binding */ meal_url),
/* harmony export */   "start_url": () => (/* binding */ start_url)
/* harmony export */ });
const address = 'us-central1-involvement-api.cloudfunctions.net';
const dirname = 'capstoneApi';
const path = 'apps';
const start_url = `https://${address}/${dirname}/${path}/`;
const app_id = 'pWOkUYxHJi4ZVPIAAXpp';
const base_url = `https://${address}/${dirname}/${path}/${app_id}`;
const meal_url = 'https://www.themealdb.com/api/json/v1/1';


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXFCO0FBQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNPLDZCQUE2QixRQUFRLEdBQUcsUUFBUSxHQUFHLEtBQUs7QUFDL0Q7QUFDTyw0QkFBNEIsUUFBUSxHQUFHLFFBQVEsR0FBRyxLQUFLLEdBQUcsT0FBTztBQUNqRSIsInNvdXJjZXMiOlsid2VicGFjazovL21lYWx3ZWJhcHAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL3NyYy9hc3NldHMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL3NyYy9hc3NldHMvdGl0bGUucG5nIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9zcmMvYXNzZXRzL3N0eWxlLmNzcz82MDFkIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vc3JjL21vZHVsZS9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vc3JjL21vZHVsZS9kb21fZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL3NyYy9tb2R1bGUvZXZlbnRsaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vc3JjL21vZHVsZS9saWtlcy5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vc3JjL21vZHVsZS9tZWFsLmpzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9zcmMvbW9kdWxlL3BvcHVwLmpzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9zcmMvbW9kdWxlL3Jlc3RhcGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxNTM2cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGJvcmRlci1ib3R0b206IDAuMDlweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4uaGVhZGVyLW5hdmJhciB7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZXN0YXVyYW50LWljb24ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5uYXZiYXItbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1lbnUtaXRlbS1saW5rIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbi5tZW51LWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBtYXgtd2lkdGg6IDE1MzZweDtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1lYWwtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgZ2FwOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubWVhbC1jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIC00NWRlZyxcXG4gICAgICB0cmFuc3BhcmVudCxcXG4gICAgICB0cmFuc3BhcmVudCAyJSxcXG4gICAgICB3aGl0ZSAyJSxcXG4gICAgICB3aGl0ZSA4NSUsXFxuICAgICAgdHJhbnNwYXJlbnQsXFxuICAgICAgODUlLFxcbiAgICAgIHRyYW5zcGFyZW50XFxuICAgICksXFxuICAgIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyYWQsICMyYWQgOTAlLCB0cmFuc3BhcmVudCA5MCUpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQsIDAuMmVtIDAuMmVtO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLm1lYWwtaGVhZCB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5tZWFsLXRodW1iYWlsIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubWVhbC1pdGVtIHtcXG4gIGZsZXgtZ3JvdzogMDtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcblxcbi5tZWFsLWludGVyYWN0aW9uIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG5cXG4ubWVhbC1idXR0b24ge1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVhbC1idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICMwMGY7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm1lYWwtaXRlbSB7XFxuICAgIGZsZXgtYmFzaXM6IDQ3LjUlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTEyNXB4KSB7XFxuICAubWVhbC1pdGVtIHtcXG4gICAgZmxleC1iYXNpczogMzElO1xcbiAgfVxcbn1cXG5cXG4uY29tbWVudC1wb3B1cCB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuLmNvbW1lbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbW1lbnQtaGVhZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jb21tZW50LXRodW1iYWlse1xcbiAgbWF4LXdpZHRoOiAzNDhweDtcXG4gIG1heC1oZWlnaHQ6IDM0OHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tZWFsLWltYWdle1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogYXV0bztcXG5ib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5idXR0b24tY2xvc2V7XFxuYm9yZGVyOiBub25lO1xcbmZvbnQtc2l6ZTogMTdweDtcXG5mb250LXdlaWdodDogYm9sZDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNvbW1lbnQtZGV0YWlsc3tcXG4gIGJvcmRlci10b3A6MXB4IHNvbGlkICMwMGY7XFxuICBnYXA6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG59XFxuXFxuLm1lYWwtZGVzY3tcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5hZGQtY29tbWVudHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbW1ldC1pdGVte1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jb21tZW50LWZvcm17XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzAwMDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5jb21tZW50LWlucHV0e1xcbiAgcGFkZGluZzogN3B4O1xcbn1cXG5cXG4uY29tbWVudC1oaXN0b3J5e1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5kLXBvcHVwIGhlYWRlcntcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kLXBvcHVwID4gbWFpbiA+IC5tZWFsLWNvbnRhaW5lcntcXG5kaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZC1wb3B1cCBmb290ZXJ7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZC1ub25le1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNs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XCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuLmhlYWRlci1jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiAxNTM2cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGJvcmRlci1ib3R0b206IDAuMDlweCBzb2xpZCAjZmZmO1xcbn1cXG5cXG4uaGVhZGVyLW5hdmJhciB7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yZXN0YXVyYW50LWljb24ge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5uYXZiYXItbWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLm1lbnUtaXRlbS1saW5rIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbi5tZW51LWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbn1cXG5cXG4ubWFpbiB7XFxuICBtYXgtd2lkdGg6IDE1MzZweDtcXG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLm1lYWwtY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xcbiAgZ2FwOiAycmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubWVhbC1jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcbiAgICAgIC00NWRlZyxcXG4gICAgICB0cmFuc3BhcmVudCxcXG4gICAgICB0cmFuc3BhcmVudCAyJSxcXG4gICAgICB3aGl0ZSAyJSxcXG4gICAgICB3aGl0ZSA4NSUsXFxuICAgICAgdHJhbnNwYXJlbnQsXFxuICAgICAgODUlLFxcbiAgICAgIHRyYW5zcGFyZW50XFxuICAgICksXFxuICAgIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMyYWQsICMyYWQgOTAlLCB0cmFuc3BhcmVudCA5MCUpO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQsIDAuMmVtIDAuMmVtO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuXFxuLm1lYWwtaGVhZCB7XFxuICB0ZXh0LWFsaWduOiBlbmQ7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5tZWFsLXRodW1iYWlsIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMzAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4ubWVhbC1pdGVtIHtcXG4gIGZsZXgtZ3JvdzogMDtcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxufVxcblxcbi5tZWFsLWludGVyYWN0aW9uIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbn1cXG5cXG4ubWVhbC1idXR0b24ge1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWVhbC1idXR0b246aG92ZXIge1xcbiAgY29sb3I6ICMwMGY7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm1lYWwtaXRlbSB7XFxuICAgIGZsZXgtYmFzaXM6IDQ3LjUlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTEyNXB4KSB7XFxuICAubWVhbC1pdGVtIHtcXG4gICAgZmxleC1iYXNpczogMzElO1xcbiAgfVxcbn1cXG5cXG4uY29tbWVudC1wb3B1cCB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuLmNvbW1lbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbW1lbnQtaGVhZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jb21tZW50LXRodW1iYWlse1xcbiAgbWF4LXdpZHRoOiAzNDhweDtcXG4gIG1heC1oZWlnaHQ6IDM0OHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5tZWFsLWltYWdle1xcbndpZHRoOiAxMDAlO1xcbmhlaWdodDogYXV0bztcXG5ib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbi5idXR0b24tY2xvc2V7XFxuYm9yZGVyOiBub25lO1xcbmZvbnQtc2l6ZTogMTdweDtcXG5mb250LXdlaWdodDogYm9sZDtcXG5iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmNvbW1lbnQtZGV0YWlsc3tcXG4gIGJvcmRlci10b3A6MXB4IHNvbGlkICMwMGY7XFxuICBnYXA6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG59XFxuXFxuLm1lYWwtZGVzY3tcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5hZGQtY29tbWVudHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbW1ldC1pdGVte1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5jb21tZW50LWZvcm17XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzAwMDtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi5jb21tZW50LWlucHV0e1xcbiAgcGFkZGluZzogN3B4O1xcbn1cXG5cXG4uY29tbWVudC1oaXN0b3J5e1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5kLXBvcHVwIGhlYWRlcntcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kLXBvcHVwID4gbWFpbiA+IC5tZWFsLWNvbnRhaW5lcntcXG5kaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZC1wb3B1cCBmb290ZXJ7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZC1ub25le1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicmVzb3VyY2UvaW1hZ2VzL2xvZ28ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInJlc291cmNlL2ltYWdlcy90aXRsZS5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9hc3NldHMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9hc3NldHMvdGl0bGUucG5nJ1xuaW1wb3J0ICcuL2Fzc2V0cy9sb2dvLnBuZyc7XG5pbXBvcnQgZ2V0Y2F0ZWdvcmllcyBmcm9tICcuL21vZHVsZS9tZWFsLmpzJztcbmltcG9ydCB7IHVsZWxlbWVudCB9IGZyb20gJy4vbW9kdWxlL2RvbV9lbGVtZW50cy5qcyc7XG5pbXBvcnQgYWRkYWN0aW9uIGZyb20gJy4vbW9kdWxlL2V2ZW50bGlzdGVuZXIuanMnO1xuaW1wb3J0IHsgdXBkYXRlbGlrZXMgfSBmcm9tICcuL21vZHVsZS9saWtlcy5qcyc7XG5pbXBvcnQgeyBhZGRwb3B1cCB9IGZyb20gJy4vbW9kdWxlL2NvbW1lbnRzLmpzJztcblxubGV0IG1lYWxzID0gW107XG5jb25zdCByZW5kZXIgPSAoKSA9PiB7XG4gIGxldCBsaXN0ID0gJyc7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICdpdGVtLWNvdW50J1xuICApLnRleHRDb250ZW50ID0gYFNlYWZvb2QgKCR7bWVhbHMubGVuZ3RofSlgO1xuICBtZWFscy5mb3JFYWNoKChtZWFsKSA9PiB7XG4gICAgbGlzdCArPSBgXG4gICAgPGxpIGNsYXNzPVwibWVhbC1pdGVtIG1lYWwtY2FyZFwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwibWVhbC1oZWFkXCI+JHttZWFsLnN0ck1lYWx9PC9wPlxuICAgICAgICAgIDxocj5cbiAgICAgICAgICA8aW1nIHNyYz1cIiR7bWVhbC5zdHJNZWFsVGh1bWJ9XCIgY2xhc3M9XCJtZWFsLXRodW1iYWlsXCI+XG4gICAgICAgICAgPGhyPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtZWFsLWludGVyYWN0aW9uXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1lYWwtYnV0dG9uIG1lYWwtY29tbWVudFwiIHZhbHVlPVwiJHttZWFsLmlkTWVhbH1cIj4mIzEwMDI5OyBDb21tZW50PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWVhbC1idXR0b24gbWVhbC1saWtlXCIgdmFsdWU9XCIke21lYWwuaWRNZWFsfVwiPiYjMTAwODQ7IExpa2U8L2J1dHRvbj48cCBpZD1cImxpa2Uke21lYWwuaWRNZWFsfVwiPiBMaWtlZCAwPC9wPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2xpPlxuICAgIGA7XG4gIH0pO1xuICB1bGVsZW1lbnQuaW5uZXJIVE1MID0gbGlzdDtcbiAgdXBkYXRlbGlrZXMoKTtcbn07XG5cbmNvbnN0IGxvYWRpbmcgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBnZXRjYXRlZ29yaWVzKCkudGhlbigoZGF0YSkgPT4ge1xuICAgIG1lYWxzID0gWy4uLmRhdGFdO1xuICAgIHJlbmRlcigpO1xuICAgIGFkZGFjdGlvbigpO1xuICB9KTtcbiAgYWRkcG9wdXAoKTtcbn07XG5sb2FkaW5nKCk7XG4iLCJpbXBvcnQgeyB0b2dnbGVwb3B1cCB9IGZyb20gJy4vcG9wdXAuanMnO1xuaW1wb3J0IHsgbWVhbF91cmwsIGJhc2VfdXJsIH0gZnJvbSAnLi9yZXN0YXBpLmpzJztcbmltcG9ydCB7IGJ0bmNsb3NlLCBmb3JtZGF0YSB9IGZyb20gJy4vZG9tX2VsZW1lbnRzLmpzJztcblxuY29uc3QgY29tbWVudHBhZ2UgPSAobGlzdCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBtZWFsLW5hbWUnKS50ZXh0Q29udGVudCA9IGxpc3Quc3RyTWVhbDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwbWVhbC1pZCcpLnZhbHVlID0gbGlzdC5pZE1lYWw7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICdwb3B1cG1lYWwtY2F0J1xuICApLnRleHRDb250ZW50ID0gYENhdGVnb3J5IDogJHtsaXN0LnN0ckNhdGVnb3J5fWA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICdwb3B1cG1lYWwtYXJlYSdcbiAgKS50ZXh0Q29udGVudCA9IGBBcmVhIDogJHtsaXN0LnN0ckFyZWF9YDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgJ3BvcHVwbWVhbC10YWcnXG4gICkudGV4dENvbnRlbnQgPSBgVGFncyA6ICR7bGlzdC5zdHJUYWdzfWA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cG1lYWwtaW1nJykuc3JjID0gbGlzdC5zdHJNZWFsVGh1bWI7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cG1lYWwtdmlkZW8nKS5ocmVmID0gbGlzdC5zdHJZb3V0dWJlO1xufTtcblxuY29uc3QgbWVhbGJ5aWQgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgdXJsID0gYCR7bWVhbF91cmx9L2xvb2t1cC5waHA/aT0ke2lkfWA7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbW1lbnRwYWdlKGRhdGEubWVhbHNbMF0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnU29tZXRoaW5nIGlzIHdyb25nIGNvbW1lbnRzLmpzIGxpbmUgMTQnKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuY29uc3QgdXBkYXRlY29tbWVudHMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgdXJsID0gYCR7YmFzZV91cmx9L2NvbW1lbnRzP2l0ZW1faWQ9JHtpZH1gO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY29tbWVudHMnKS5pbm5lckhUTUwgPSAnJztcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtY291bnQnKS50ZXh0Q29udGVudCA9ICcnO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IGxpc3RzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbW1lbnQtY291bnQnKS50ZXh0Q29udGVudCA9IGAoJHtcbiAgICAgICAgbGlzdHMubGVuZ3RoID8/IDBcbiAgICAgIH0pYDtcbiAgICAgIGxldCBodG1sID0gJyc7XG4gICAgICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgICAgIGh0bWwgKz0gYDxwIGNsYXNzPVwiY29tbWVudC1oaXN0b3J5XCI+PHN0cm9uZz4ke2xpc3QudXNlcm5hbWV9IDo8L3N0cm9uZz4ke2xpc3QuY29tbWVudH0gb24gPHN0cm9uZz4ke2xpc3QuY3JlYXRpb25fZGF0ZX0uPC9zdHJvbmc+XG4gICAgICAgIGA7XG4gICAgICB9KTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb21tZW50cycpLmlubmVySFRNTCA9IGh0bWw7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYWRkY29tbWVudCA9IChldmVudCkgPT4ge1xuICBtZWFsYnlpZChldmVudC50YXJnZXQudmFsdWUpO1xuICB1cGRhdGVjb21tZW50cyhldmVudC50YXJnZXQudmFsdWUpO1xuICB0b2dnbGVwb3B1cCgpO1xufTtcblxuY29uc3QgY3JlYXRlY29tbWVudCA9IGFzeW5jIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCB7IGl0ZW1faWQsIHVzZXJuYW1lLCBjb21tZW50IH0gPSBldmVudC50YXJnZXQuZWxlbWVudHM7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgaXRlbV9pZDogaXRlbV9pZC52YWx1ZSxcbiAgICB1c2VybmFtZTogdXNlcm5hbWUudmFsdWUsXG4gICAgY29tbWVudDogY29tbWVudC52YWx1ZSxcbiAgfTtcbiAgY29uc3QgdXJsID0gYCR7YmFzZV91cmx9L2NvbW1lbnRzYDtcbiAgdHJ5IHtcbiAgICBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcsXG4gICAgICB9LFxuICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgdXBkYXRlY29tbWVudHMoZGF0YS5pdGVtX2lkKTtcbiAgICAgICAgZm9ybWRhdGEucmVzZXQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuY29uc3QgY29tbWVudGZvcm0gPSAoKSA9PiB7XG4gIGZvcm1kYXRhLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNyZWF0ZWNvbW1lbnQpO1xufTtcbmNvbnN0IGNsb3NlcG9wdXAgPSAoKSA9PiB7XG4gIGJ0bmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlcG9wdXApO1xufTtcbmV4cG9ydCBjb25zdCBhZGRwb3B1cCA9ICgpID0+IHtcbiAgY2xvc2Vwb3B1cCgpO1xuICBjb21tZW50Zm9ybSgpO1xufTtcbiIsImV4cG9ydCBjb25zdCB1bGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVhbC11bm9yZGVyLWlkJyk7XG5leHBvcnQgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmV4cG9ydCBjb25zdCBjcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1wb3B1cCcpO1xuZXhwb3J0IGNvbnN0IGJ0bmNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jbG9zZScpO1xuZXhwb3J0IGNvbnN0IGZvcm1kYXRhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbW1lbnQtZm9ybScpO1xuIiwiaW1wb3J0IHsgYWRkY29tbWVudCB9IGZyb20gJy4vY29tbWVudHMuanMnO1xuaW1wb3J0IHsgYWRkbGlrZSB9IGZyb20gJy4vbGlrZXMuanMnO1xuXG5jb25zdCBhZGRhY3Rpb24gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lYWwtY29tbWVudCcpO1xuICBjb25zdCBsaWtlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZWFsLWxpa2UnKTtcblxuICBjb21tZW50cy5mb3JFYWNoKChjb21tZW50KSA9PiB7XG4gICAgY29tbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZGNvbW1lbnQpO1xuICB9KTtcbiAgbGlrZXMuZm9yRWFjaCgobGlrZSkgPT4ge1xuICAgIGxpa2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhZGRsaWtlKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRhY3Rpb247XG4iLCJpbXBvcnQgeyBiYXNlX3VybCB9IGZyb20gJy4vcmVzdGFwaSc7XG5jb25zdCByZW5kZXJsaWtlcyA9IChsaXN0cykgPT4ge1xuICBsaXN0cy5mb3JFYWNoKChsaXN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGlkID0gYGxpa2Uke2xpc3QuaXRlbV9pZH1gO1xuICAgICAgY29uc3QgbGlrZSA9IGBMaWtlZCAke2xpc3QubGlrZXN9YDtcbiAgICAgIGNvbnN0IGxpa2VwYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICBpZiAobGlrZXBhcikge1xuICAgICAgICBsaWtlcGFyLnRleHRDb250ZW50ID0gbGlrZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICB9KTtcbn07XG5leHBvcnQgY29uc3QgdXBkYXRlbGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2VfdXJsfS9saWtlcy9gO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICByZW5kZXJsaWtlcyhkYXRhKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRsaWtlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGNvbnN0IG1lYWxpZCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgY29uc3QgdXJsID0gYCR7YmFzZV91cmx9L2xpa2VzL2A7XG4gIHRyeSB7XG4gICAgYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaXRlbV9pZDogbWVhbGlkIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHVwZGF0ZWxpa2VzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iLCJpbXBvcnQgeyBtZWFsX3VybCB9IGZyb20gJy4vcmVzdGFwaS5qcyc7XG4gY29uc3QgZ2V0Y2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcbiAgIGNvbnN0IHVybCA9IGAke21lYWxfdXJsfS9maWx0ZXIucGhwP2M9U2VhZm9vZGA7XG4gICB0cnkge1xuICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgIHJldHVybiBkYXRhLm1lYWxzO1xuICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgdGhyb3cgZXJyb3I7XG4gICB9XG4gICByZXR1cm4gW107XG4gfTtcbmV4cG9ydCBkZWZhdWx0IGdldGNhdGVnb3JpZXM7XG4iLCJpbXBvcnQgeyBib2R5LCBjcG9wdXAgfSBmcm9tICcuL2RvbV9lbGVtZW50cy5qcyc7XG5leHBvcnQgY29uc3QgdG9nZ2xlcG9wdXAgPSAoKSA9PiB7XG4gIGNwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcbiAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkLXBvcHVwJyk7XG59O1xuIiwiY29uc3QgYWRkcmVzcyA9ICd1cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0JztcbmNvbnN0IGRpcm5hbWUgPSAnY2Fwc3RvbmVBcGknO1xuY29uc3QgcGF0aCA9ICdhcHBzJztcbmV4cG9ydCBjb25zdCBzdGFydF91cmwgPSBgaHR0cHM6Ly8ke2FkZHJlc3N9LyR7ZGlybmFtZX0vJHtwYXRofS9gO1xuY29uc3QgYXBwX2lkID0gJ3BXT2tVWXhISmk0WlZQSUFBWHBwJztcbmV4cG9ydCBjb25zdCBiYXNlX3VybCA9IGBodHRwczovLyR7YWRkcmVzc30vJHtkaXJuYW1lfS8ke3BhdGh9LyR7YXBwX2lkfWA7XG5leHBvcnQgY29uc3QgbWVhbF91cmwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==