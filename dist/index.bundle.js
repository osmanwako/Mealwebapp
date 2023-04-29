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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #fff;\n  display: flex;\n  justify-content: left;\n  flex-direction: column;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: normal;\n}\n\n.header-container {\n  max-width: 1536px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #2196f3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-flow: row wrap;\n  border-bottom: 0.09px solid #fff;\n}\n\n.header-navbar {\n  padding: 4px;\n  display: flex;\n  padding-right: 30px;\n  align-items: center;\n}\n\n.restaurant-icon {\n  width: 60px;\n  margin-right: 20px;\n}\n\n.navbar-menu {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  list-style: none;\n}\n\n.menu-item-link {\n  display: inline-block;\n  padding: 10px;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n.menu-active {\n  background-color: #f2f2f2;\n}\n\n.main {\n  max-width: 1536px;\n  margin-left: 30px;\n  margin-right: 30px;\n  overflow: hidden;\n}\n\n.meal-container {\n  padding: 2rem;\n  background-color: #f2f2f2;\n  gap: 2rem;\n  display: flex;\n  flex-flow: row wrap;\n  list-style: none;\n}\n\n.meal-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  background-color: transparent;\n  background-image:\n    linear-gradient(\n      -45deg,\n      transparent,\n      transparent 2%,\n      white 2%,\n      white 85%,\n      transparent,\n      85%,\n      transparent\n    ),\n    linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%);\n  background-position: top left, 0.2em 0.2em;\n  background-repeat: no-repeat;\n}\n\n.meal-head {\n  text-align: end;\n  font-style: italic;\n  font-size: 15px;\n}\n\n.meal-thumbail {\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  align-self: center;\n  padding: 10px;\n}\n\n.meal-item {\n  flex-grow: 0;\n  flex-basis: 100%;\n}\n\n.meal-interaction {\n  padding: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 17px;\n}\n\n.meal-button {\n  padding: 6px;\n  border: none;\n  font-size: 17px;\n  cursor: pointer;\n}\n\n.meal-button:hover {\n  color: #00f;\n}\n\n.footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 3rem;\n  background-color: #2196f3;\n  padding-top: 1rem;\n}\n\n@media (min-width: 768px) {\n  .meal-item {\n    flex-basis: 47.5%;\n  }\n}\n\n@media (min-width: 1125px) {\n  .meal-item {\n    flex-basis: 31%;\n  }\n}\n\n.comment-popup {\n  padding: 2rem;\n  background-color: #f2f2f2;\n}\n\n.comment-container {\n  display: flex;\n  gap: 1rem;\n  list-style: none;\n  flex-direction: column;\n}\n\n.comment-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 1px solid #00f;\n  padding: 10px;\n}\n\n.comment-thumbail {\n  max-width: 348px;\n  max-height: 348px;\n  height: auto;\n  align-self: center;\n  padding-bottom: 10px;\n}\n\n.meal-image {\n  width: 100%;\n  height: auto;\n  border-radius: 50%;\n}\n\n.button-close {\n  border: none;\n  font-size: 17px;\n  font-weight: bold;\n  background-color: transparent;\n}\n\n.comment-details {\n  border-top: 1px solid #00f;\n  gap: 10px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-flow: row wrap;\n}\n\n.meal-desc {\n  padding: 10px;\n  font-size: 15px;\n  font-style: italic;\n}\n\n.add-comment {\n  padding: 16px;\n  border: 1px solid #000;\n  display: block;\n  width: 100%;\n}\n\n.commet-item {\n  padding-left: 10px;\n  padding-bottom: 10px;\n}\n\n.comment-form {\n  padding: 10px;\n  gap: 10px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-flow: row wrap;\n  border-bottom: 1px dashed #000;\n  margin-top: 10px;\n}\n\n.comment-input {\n  padding: 7px;\n}\n\n.comment-history {\n  display: block;\n  padding: 10px;\n  line-height: 1.5rem;\n  letter-spacing: 1px;\n}\n\n.d-popup header {\n  display: none;\n}\n\n.d-popup > main > .meal-container {\n  display: none;\n}\n\n.d-popup footer {\n  display: none;\n}\n\n.d-none {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/assets/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: #fff;\n  display: flex;\n  justify-content: left;\n  flex-direction: column;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: normal;\n}\n\n.header-container {\n  max-width: 1536px;\n  padding-left: 30px;\n  padding-right: 30px;\n  background-color: #2196f3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-flow: row wrap;\n  border-bottom: 0.09px solid #fff;\n}\n\n.header-navbar {\n  padding: 4px;\n  display: flex;\n  padding-right: 30px;\n  align-items: center;\n}\n\n.restaurant-icon {\n  width: 60px;\n  margin-right: 20px;\n}\n\n.navbar-menu {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  list-style: none;\n}\n\n.menu-item-link {\n  display: inline-block;\n  padding: 10px;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n.menu-active {\n  background-color: #f2f2f2;\n}\n\n.main {\n  max-width: 1536px;\n  margin-left: 30px;\n  margin-right: 30px;\n  overflow: hidden;\n}\n\n.meal-container {\n  padding: 2rem;\n  background-color: #f2f2f2;\n  gap: 2rem;\n  display: flex;\n  flex-flow: row wrap;\n  list-style: none;\n}\n\n.meal-card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  background-color: transparent;\n  background-image:\n    linear-gradient(\n      -45deg,\n      transparent,\n      transparent 2%,\n      white 2%,\n      white 85%,\n      transparent,\n      85%,\n      transparent\n    ),\n    linear-gradient(to bottom right, #2ad, #2ad 90%, transparent 90%);\n  background-position: top left, 0.2em 0.2em;\n  background-repeat: no-repeat;\n}\n\n.meal-head {\n  text-align: end;\n  font-style: italic;\n  font-size: 15px;\n}\n\n.meal-thumbail {\n  width: 300px;\n  height: 300px;\n  border-radius: 50%;\n  align-self: center;\n  padding: 10px;\n}\n\n.meal-item {\n  flex-grow: 0;\n  flex-basis: 100%;\n}\n\n.meal-interaction {\n  padding: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 17px;\n}\n\n.meal-button {\n  padding: 6px;\n  border: none;\n  font-size: 17px;\n  cursor: pointer;\n}\n\n.meal-button:hover {\n  color: #00f;\n}\n\n.footer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 3rem;\n  background-color: #2196f3;\n  padding-top: 1rem;\n}\n\n@media (min-width: 768px) {\n  .meal-item {\n    flex-basis: 47.5%;\n  }\n}\n\n@media (min-width: 1125px) {\n  .meal-item {\n    flex-basis: 31%;\n  }\n}\n\n.comment-popup {\n  padding: 2rem;\n  background-color: #f2f2f2;\n}\n\n.comment-container {\n  display: flex;\n  gap: 1rem;\n  list-style: none;\n  flex-direction: column;\n}\n\n.comment-head {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  border-bottom: 1px solid #00f;\n  padding: 10px;\n}\n\n.comment-thumbail {\n  max-width: 348px;\n  max-height: 348px;\n  height: auto;\n  align-self: center;\n  padding-bottom: 10px;\n}\n\n.meal-image {\n  width: 100%;\n  height: auto;\n  border-radius: 50%;\n}\n\n.button-close {\n  border: none;\n  font-size: 17px;\n  font-weight: bold;\n  background-color: transparent;\n}\n\n.comment-details {\n  border-top: 1px solid #00f;\n  gap: 10px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  flex-flow: row wrap;\n}\n\n.meal-desc {\n  padding: 10px;\n  font-size: 15px;\n  font-style: italic;\n}\n\n.add-comment {\n  padding: 16px;\n  border: 1px solid #000;\n  display: block;\n  width: 100%;\n}\n\n.commet-item {\n  padding-left: 10px;\n  padding-bottom: 10px;\n}\n\n.comment-form {\n  padding: 10px;\n  gap: 10px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-flow: row wrap;\n  border-bottom: 1px dashed #000;\n  margin-top: 10px;\n}\n\n.comment-input {\n  padding: 7px;\n}\n\n.comment-history {\n  display: block;\n  padding: 10px;\n  line-height: 1.5rem;\n  letter-spacing: 1px;\n}\n\n.d-popup header {\n  display: none;\n}\n\n.d-popup > main > .meal-container {\n  display: none;\n}\n\n.d-popup footer {\n  display: none;\n}\n\n.d-none {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWlCLGlEQUFRLENBQUM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNib0I7O0FBRTFDO0FBQ1AsRUFBRSxxRUFBdUI7QUFDekIsRUFBRSxtRUFBcUI7QUFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ08sNkJBQTZCLFFBQVEsR0FBRyxRQUFRLEdBQUcsS0FBSztBQUMvRDtBQUNPLDRCQUE0QixRQUFRLEdBQUcsUUFBUSxHQUFHLEtBQUssR0FBRyxPQUFPO0FBQ2pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vc3JjL2Fzc2V0cy9sb2dvLnBuZyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vc3JjL2Fzc2V0cy90aXRsZS5wbmciLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL3NyYy9hc3NldHMvc3R5bGUuY3NzPzYwMWQiLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9zcmMvbW9kdWxlL2NvbW1lbnRzLmpzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9zcmMvbW9kdWxlL2RvbV9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9tZWFsd2ViYXBwLy4vc3JjL21vZHVsZS9ldmVudGxpc3RlbmVyLmpzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9zcmMvbW9kdWxlL2xpa2VzLmpzIiwid2VicGFjazovL21lYWx3ZWJhcHAvLi9zcmMvbW9kdWxlL21lYWwuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL3NyYy9tb2R1bGUvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVhbHdlYmFwcC8uL3NyYy9tb2R1bGUvcmVzdGFwaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDE1MzZweDtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgYm9yZGVyLWJvdHRvbTogMC4wOXB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5oZWFkZXItbmF2YmFyIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaWNvbiB7XFxuICB3aWR0aDogNjBweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLm5hdmJhci1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubWVudS1pdGVtLWxpbmsge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuXFxuLm1lbnUtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbi5tYWluIHtcXG4gIG1heC13aWR0aDogMTUzNnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWVhbC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBnYXA6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5tZWFsLWNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgLTQ1ZGVnLFxcbiAgICAgIHRyYW5zcGFyZW50LFxcbiAgICAgIHRyYW5zcGFyZW50IDIlLFxcbiAgICAgIHdoaXRlIDIlLFxcbiAgICAgIHdoaXRlIDg1JSxcXG4gICAgICB0cmFuc3BhcmVudCxcXG4gICAgICA4NSUsXFxuICAgICAgdHJhbnNwYXJlbnRcXG4gICAgKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzJhZCwgIzJhZCA5MCUsIHRyYW5zcGFyZW50IDkwJSk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdCwgMC4yZW0gMC4yZW07XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ubWVhbC1oZWFkIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLm1lYWwtdGh1bWJhaWwge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5tZWFsLWl0ZW0ge1xcbiAgZmxleC1ncm93OiAwO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXFxuLm1lYWwtaW50ZXJhY3Rpb24ge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbi5tZWFsLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZWFsLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzAwZjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm1lYWwtaXRlbSB7XFxuICAgIGZsZXgtYmFzaXM6IDQ3LjUlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTEyNXB4KSB7XFxuICAubWVhbC1pdGVtIHtcXG4gICAgZmxleC1iYXNpczogMzElO1xcbiAgfVxcbn1cXG5cXG4uY29tbWVudC1wb3B1cCB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuLmNvbW1lbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbW1lbnQtaGVhZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jb21tZW50LXRodW1iYWlsIHtcXG4gIG1heC13aWR0aDogMzQ4cHg7XFxuICBtYXgtaGVpZ2h0OiAzNDhweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubWVhbC1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmJ1dHRvbi1jbG9zZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY29tbWVudC1kZXRhaWxzIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDBmO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxufVxcblxcbi5tZWFsLWRlc2Mge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmFkZC1jb21tZW50IHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbW1ldC1pdGVtIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29tbWVudC1mb3JtIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMwMDA7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uY29tbWVudC1pbnB1dCB7XFxuICBwYWRkaW5nOiA3cHg7XFxufVxcblxcbi5jb21tZW50LWhpc3Rvcnkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5kLXBvcHVwIGhlYWRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZC1wb3B1cCA+IG1haW4gPiAubWVhbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmQtcG9wdXAgZm9vdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0I7Ozs7Ozs7Ozs7O3FFQVdtRTtFQUNuRSwwQ0FBMEM7RUFDMUMsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG5cXG4uaGVhZGVyLWNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDE1MzZweDtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgYm9yZGVyLWJvdHRvbTogMC4wOXB4IHNvbGlkICNmZmY7XFxufVxcblxcbi5oZWFkZXItbmF2YmFyIHtcXG4gIHBhZGRpbmc6IDRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaWNvbiB7XFxuICB3aWR0aDogNjBweDtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG59XFxuXFxuLm5hdmJhci1tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4ubWVudS1pdGVtLWxpbmsge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG59XFxuXFxuLm1lbnUtYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxufVxcblxcbi5tYWluIHtcXG4gIG1heC13aWR0aDogMTUzNnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4ubWVhbC1jb250YWluZXIge1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxuICBnYXA6IDJyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5tZWFsLWNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOlxcbiAgICBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgLTQ1ZGVnLFxcbiAgICAgIHRyYW5zcGFyZW50LFxcbiAgICAgIHRyYW5zcGFyZW50IDIlLFxcbiAgICAgIHdoaXRlIDIlLFxcbiAgICAgIHdoaXRlIDg1JSxcXG4gICAgICB0cmFuc3BhcmVudCxcXG4gICAgICA4NSUsXFxuICAgICAgdHJhbnNwYXJlbnRcXG4gICAgKSxcXG4gICAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzJhZCwgIzJhZCA5MCUsIHRyYW5zcGFyZW50IDkwJSk7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdCwgMC4yZW0gMC4yZW07XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbn1cXG5cXG4ubWVhbC1oZWFkIHtcXG4gIHRleHQtYWxpZ246IGVuZDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLm1lYWwtdGh1bWJhaWwge1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiAzMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5tZWFsLWl0ZW0ge1xcbiAgZmxleC1ncm93OiAwO1xcbiAgZmxleC1iYXNpczogMTAwJTtcXG59XFxuXFxuLm1lYWwtaW50ZXJhY3Rpb24ge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE3cHg7XFxufVxcblxcbi5tZWFsLWJ1dHRvbiB7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tZWFsLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogIzAwZjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDNyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLm1lYWwtaXRlbSB7XFxuICAgIGZsZXgtYmFzaXM6IDQ3LjUlO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTEyNXB4KSB7XFxuICAubWVhbC1pdGVtIHtcXG4gICAgZmxleC1iYXNpczogMzElO1xcbiAgfVxcbn1cXG5cXG4uY29tbWVudC1wb3B1cCB7XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXG59XFxuXFxuLmNvbW1lbnQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNvbW1lbnQtaGVhZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwZjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5jb21tZW50LXRodW1iYWlsIHtcXG4gIG1heC13aWR0aDogMzQ4cHg7XFxuICBtYXgtaGVpZ2h0OiAzNDhweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4ubWVhbC1pbWFnZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuLmJ1dHRvbi1jbG9zZSB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4uY29tbWVudC1kZXRhaWxzIHtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDBmO1xcbiAgZ2FwOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxufVxcblxcbi5tZWFsLWRlc2Mge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmFkZC1jb21tZW50IHtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNvbW1ldC1pdGVtIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4uY29tbWVudC1mb3JtIHtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XFxuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICMwMDA7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uY29tbWVudC1pbnB1dCB7XFxuICBwYWRkaW5nOiA3cHg7XFxufVxcblxcbi5jb21tZW50LWhpc3Rvcnkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XFxufVxcblxcbi5kLXBvcHVwIGhlYWRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZC1wb3B1cCA+IG1haW4gPiAubWVhbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmQtcG9wdXAgZm9vdGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5kLW5vbmUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwicmVzb3VyY2UvaW1hZ2VzL2xvZ28ucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInJlc291cmNlL2ltYWdlcy90aXRsZS5wbmdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9hc3NldHMvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9hc3NldHMvdGl0bGUucG5nJztcbmltcG9ydCAnLi9hc3NldHMvbG9nby5wbmcnO1xuaW1wb3J0IGdldGNhdGVnb3JpZXMgZnJvbSAnLi9tb2R1bGUvbWVhbC5qcyc7XG5pbXBvcnQgeyB1bGVsZW1lbnQgfSBmcm9tICcuL21vZHVsZS9kb21fZWxlbWVudHMuanMnO1xuaW1wb3J0IGFkZGFjdGlvbiBmcm9tICcuL21vZHVsZS9ldmVudGxpc3RlbmVyLmpzJztcbmltcG9ydCB7IHVwZGF0ZWxpa2VzIH0gZnJvbSAnLi9tb2R1bGUvbGlrZXMuanMnO1xuaW1wb3J0IHsgYWRkcG9wdXAgfSBmcm9tICcuL21vZHVsZS9jb21tZW50cy5qcyc7XG5cbmxldCBtZWFscyA9IFtdO1xuY29uc3QgcmVuZGVyID0gKCkgPT4ge1xuICBsZXQgbGlzdCA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAnaXRlbS1jb3VudCcsXG4gICkudGV4dENvbnRlbnQgPSBgU2VhZm9vZCAoJHttZWFscy5sZW5ndGh9KWA7XG4gIG1lYWxzLmZvckVhY2goKG1lYWwpID0+IHtcbiAgICBsaXN0ICs9IGBcbiAgICA8bGkgY2xhc3M9XCJtZWFsLWl0ZW0gbWVhbC1jYXJkXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJtZWFsLWhlYWRcIj4ke21lYWwuc3RyTWVhbH08L3A+XG4gICAgICAgICAgPGhyPlxuICAgICAgICAgIDxpbWcgc3JjPVwiJHttZWFsLnN0ck1lYWxUaHVtYn1cIiBjbGFzcz1cIm1lYWwtdGh1bWJhaWxcIj5cbiAgICAgICAgICA8aHI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1lYWwtaW50ZXJhY3Rpb25cIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibWVhbC1idXR0b24gbWVhbC1jb21tZW50XCIgdmFsdWU9XCIke21lYWwuaWRNZWFsfVwiPiYjMTAwMjk7IENvbW1lbnQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtZWFsLWJ1dHRvbiBtZWFsLWxpa2VcIiB2YWx1ZT1cIiR7bWVhbC5pZE1lYWx9XCI+JiMxMDA4NDsgTGlrZTwvYnV0dG9uPjxwIGlkPVwibGlrZSR7bWVhbC5pZE1lYWx9XCI+IExpa2VkIDA8L3A+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbGk+XG4gICAgYDtcbiAgfSk7XG4gIHVsZWxlbWVudC5pbm5lckhUTUwgPSBsaXN0O1xuICB1cGRhdGVsaWtlcygpO1xufTtcblxuY29uc3QgbG9hZGluZyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcCA9IGF3YWl0IGdldGNhdGVnb3JpZXMoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgbWVhbHMgPSBbLi4uZGF0YV07XG4gICAgcmVuZGVyKCk7XG4gICAgYWRkYWN0aW9uKCk7XG4gIH0pO1xuICBhZGRwb3B1cCgpO1xufTtcbmxvYWRpbmcoKTtcbiIsImltcG9ydCB7IHRvZ2dsZXBvcHVwIH0gZnJvbSAnLi9wb3B1cC5qcyc7XG5pbXBvcnQgeyBtZWFsX3VybCwgYmFzZV91cmwgfSBmcm9tICcuL3Jlc3RhcGkuanMnO1xuaW1wb3J0IHsgYnRuY2xvc2UsIGZvcm1kYXRhIH0gZnJvbSAnLi9kb21fZWxlbWVudHMuanMnO1xuXG5jb25zdCBjb21tZW50cGFnZSA9IChsaXN0KSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3B1cG1lYWwtbmFtZScpLnRleHRDb250ZW50ID0gbGlzdC5zdHJNZWFsO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wdXBtZWFsLWlkJykudmFsdWUgPSBsaXN0LmlkTWVhbDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgJ3BvcHVwbWVhbC1jYXQnLFxuICApLnRleHRDb250ZW50ID0gYENhdGVnb3J5IDogJHtsaXN0LnN0ckNhdGVnb3J5fWA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICdwb3B1cG1lYWwtYXJlYScsXG4gICkudGV4dENvbnRlbnQgPSBgQXJlYSA6ICR7bGlzdC5zdHJBcmVhfWA7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICdwb3B1cG1lYWwtdGFnJyxcbiAgKS50ZXh0Q29udGVudCA9IGBUYWdzIDogJHtsaXN0LnN0clRhZ3N9YDtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwbWVhbC1pbWcnKS5zcmMgPSBsaXN0LnN0ck1lYWxUaHVtYjtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcHVwbWVhbC12aWRlbycpLmhyZWYgPSBsaXN0LnN0cllvdXR1YmU7XG59O1xuXG5jb25zdCBtZWFsYnlpZCA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCB1cmwgPSBgJHttZWFsX3VybH0vbG9va3VwLnBocD9pPSR7aWR9YDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29tbWVudHBhZ2UoZGF0YS5tZWFsc1swXSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCdTb21ldGhpbmcgaXMgd3JvbmcgY29tbWVudHMuanMgbGluZSAxNCcpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5jb25zdCB1cGRhdGVjb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCB1cmwgPSBgJHtiYXNlX3VybH0vY29tbWVudHM/aXRlbV9pZD0ke2lkfWA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb21tZW50cycpLmlubmVySFRNTCA9ICcnO1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudC1jb3VudCcpLnRleHRDb250ZW50ID0gJyc7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgY29uc3QgbGlzdHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tbWVudC1jb3VudCcpLnRleHRDb250ZW50ID0gYCgke1xuICAgICAgICBsaXN0cy5sZW5ndGggPz8gMFxuICAgICAgfSlgO1xuICAgICAgbGV0IGh0bWwgPSAnJztcbiAgICAgIGxpc3RzLmZvckVhY2goKGxpc3QpID0+IHtcbiAgICAgICAgaHRtbCArPSBgPHAgY2xhc3M9XCJjb21tZW50LWhpc3RvcnlcIj48c3Ryb25nPiR7bGlzdC51c2VybmFtZX0gOjwvc3Ryb25nPiR7bGlzdC5jb21tZW50fSBvbiA8c3Ryb25nPiR7bGlzdC5jcmVhdGlvbl9kYXRlfS48L3N0cm9uZz5cbiAgICAgICAgYDtcbiAgICAgIH0pO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbW1lbnRzJykuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBhZGRjb21tZW50ID0gKGV2ZW50KSA9PiB7XG4gIG1lYWxieWlkKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIHVwZGF0ZWNvbW1lbnRzKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIHRvZ2dsZXBvcHVwKCk7XG59O1xuXG5jb25zdCBjcmVhdGVjb21tZW50ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHsgaXRlbV9pZCwgdXNlcm5hbWUsIGNvbW1lbnQgfSA9IGV2ZW50LnRhcmdldC5lbGVtZW50cztcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBpdGVtX2lkOiBpdGVtX2lkLnZhbHVlLFxuICAgIHVzZXJuYW1lOiB1c2VybmFtZS52YWx1ZSxcbiAgICBjb21tZW50OiBjb21tZW50LnZhbHVlLFxuICB9O1xuICBjb25zdCB1cmwgPSBgJHtiYXNlX3VybH0vY29tbWVudHNgO1xuICB0cnkge1xuICAgIGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICB1cGRhdGVjb21tZW50cyhkYXRhLml0ZW1faWQpO1xuICAgICAgICBmb3JtZGF0YS5yZXNldCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5jb25zdCBjb21tZW50Zm9ybSA9ICgpID0+IHtcbiAgZm9ybWRhdGEuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgY3JlYXRlY29tbWVudCk7XG59O1xuY29uc3QgY2xvc2Vwb3B1cCA9ICgpID0+IHtcbiAgYnRuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVwb3B1cCk7XG59O1xuZXhwb3J0IGNvbnN0IGFkZHBvcHVwID0gKCkgPT4ge1xuICBjbG9zZXBvcHVwKCk7XG4gIGNvbW1lbnRmb3JtKCk7XG59O1xuIiwiZXhwb3J0IGNvbnN0IHVsZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZWFsLXVub3JkZXItaWQnKTtcbmV4cG9ydCBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuZXhwb3J0IGNvbnN0IGNwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXBvcHVwJyk7XG5leHBvcnQgY29uc3QgYnRuY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWNsb3NlJyk7XG5leHBvcnQgY29uc3QgZm9ybWRhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1mb3JtJyk7XG4iLCJpbXBvcnQgeyBhZGRjb21tZW50IH0gZnJvbSAnLi9jb21tZW50cy5qcyc7XG5pbXBvcnQgeyBhZGRsaWtlIH0gZnJvbSAnLi9saWtlcy5qcyc7XG5cbmNvbnN0IGFkZGFjdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgY29tbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVhbC1jb21tZW50Jyk7XG4gIGNvbnN0IGxpa2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lYWwtbGlrZScpO1xuXG4gIGNvbW1lbnRzLmZvckVhY2goKGNvbW1lbnQpID0+IHtcbiAgICBjb21tZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkY29tbWVudCk7XG4gIH0pO1xuICBsaWtlcy5mb3JFYWNoKChsaWtlKSA9PiB7XG4gICAgbGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZGxpa2UpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFkZGFjdGlvbjtcbiIsImltcG9ydCB7IGJhc2VfdXJsIH0gZnJvbSAnLi9yZXN0YXBpJztcblxuY29uc3QgcmVuZGVybGlrZXMgPSAobGlzdHMpID0+IHtcbiAgbGlzdHMuZm9yRWFjaCgobGlzdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpZCA9IGBsaWtlJHtsaXN0Lml0ZW1faWR9YDtcbiAgICAgIGNvbnN0IGxpa2UgPSBgTGlrZWQgJHtsaXN0Lmxpa2VzfWA7XG4gICAgICBjb25zdCBsaWtlcGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgaWYgKGxpa2VwYXIpIHtcbiAgICAgICAgbGlrZXBhci50ZXh0Q29udGVudCA9IGxpa2U7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgfSk7XG59O1xuZXhwb3J0IGNvbnN0IHVwZGF0ZWxpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1cmwgPSBgJHtiYXNlX3VybH0vbGlrZXMvYDtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmVuZGVybGlrZXMoZGF0YSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgYWRkbGlrZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICBjb25zdCBtZWFsaWQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIGNvbnN0IHVybCA9IGAke2Jhc2VfdXJsfS9saWtlcy9gO1xuICB0cnkge1xuICAgIGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IG1lYWxpZCB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICB1cGRhdGVsaWtlcygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuIiwiaW1wb3J0IHsgbWVhbF91cmwgfSBmcm9tICcuL3Jlc3RhcGkuanMnO1xuXG5jb25zdCBnZXRjYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB1cmwgPSBgJHttZWFsX3VybH0vZmlsdGVyLnBocD9jPVNlYWZvb2RgO1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhLm1lYWxzO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHRocm93IGVycm9yO1xuICB9XG4gIHJldHVybiBbXTtcbn07XG5leHBvcnQgZGVmYXVsdCBnZXRjYXRlZ29yaWVzO1xuIiwiaW1wb3J0IHsgYm9keSwgY3BvcHVwIH0gZnJvbSAnLi9kb21fZWxlbWVudHMuanMnO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlcG9wdXAgPSAoKSA9PiB7XG4gIGNwb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcbiAgYm9keS5jbGFzc0xpc3QudG9nZ2xlKCdkLXBvcHVwJyk7XG59O1xuIiwiY29uc3QgYWRkcmVzcyA9ICd1cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0JztcbmNvbnN0IGRpcm5hbWUgPSAnY2Fwc3RvbmVBcGknO1xuY29uc3QgcGF0aCA9ICdhcHBzJztcbmV4cG9ydCBjb25zdCBzdGFydF91cmwgPSBgaHR0cHM6Ly8ke2FkZHJlc3N9LyR7ZGlybmFtZX0vJHtwYXRofS9gO1xuY29uc3QgYXBwX2lkID0gJ3BXT2tVWXhISmk0WlZQSUFBWHBwJztcbmV4cG9ydCBjb25zdCBiYXNlX3VybCA9IGBodHRwczovLyR7YWRkcmVzc30vJHtkaXJuYW1lfS8ke3BhdGh9LyR7YXBwX2lkfWA7XG5leHBvcnQgY29uc3QgbWVhbF91cmwgPSAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xJztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==