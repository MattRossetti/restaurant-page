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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Spline+Sans:wght@500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* ----- Color Palette -----\\n  Alice Blue (--white) #E7ECEF\\n  Yala Blue (--dark-blue)#274C77\\n  Cerulean (--medium-blue)Frost #6096BA\\n  Baby Blue (--light-blue)Eyes #A3CEF1\\n  Battleship Grey (--light-grey) #8B8C89\\n   ----- Color Palette -----*/\\n\\n:root {\\n  --white: #E7ECEF;\\n  --dark-blue: #274C77;\\n  --medium-blue: #6096BA;\\n  --light-blue: #A3CEF1;\\n  --light-grey: #8B8C89;\\n  --dark-blue-green: #0A2E36;\\n}\\n\\nhtml, body {\\n  height: 100vh;\\n  width: 100vw;\\n  max-width: 100%;\\n  margin: 0px;\\n  font-family: 'Spline Sans', sans-serif;\\n}\\n\\nbody {\\n  display: flex;\\n  justify-content: center;\\n  margin: 0px;\\n}\\n\\n#container { \\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 100vw;\\n  max-width: 100%;\\n}\\n\\n.header, .footer, .content {\\n  width: 100%;\\n}\\n\\n.header, .footer {\\n  background-color: var(--dark-blue);\\n  color: var(--white);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.footer {\\n  padding: 8px 0px;\\n}\\n\\n.footer-text {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n.footer-link {\\n  display: flex;\\n  align-items: center;\\n  text-decoration: none;\\n  color: inherit;\\n  padding: 4px;\\n}\\n\\n.github-icon {\\n  padding: 0 4px;\\n  width: 26px;\\n  height: auto;\\n  transition: transform .5s ease-in-out;\\n}\\n\\n.github-icon:hover {\\n  transform: rotate(360deg);\\n}\\n\\n#header-top {\\n  font-size: 48px;\\n  margin: 8px;\\n  text-shadow:\\n  3px 3px 0 var(--dark-blue-green),\\n-1px -1px 0 var(--dark-blue-green),\\n 1px -1px 0 var(--dark-blue-green),\\n -1px 1px 0 var(--dark-blue-green),\\n  1px 1px 0 var(--dark-blue-green);\\n}\\n\\n#header-bottom {\\n  font-size: medium;\\n  display: flex;\\n  background-color: var(--white);\\n  color: var(--dark-blue);\\n  margin: 12px;\\n  margin-top: 0px;\\n  padding: 6px;\\n  border: 4px solid var(--medium-blue);\\n  border-radius: 8px;\\n}\\n\\n#content {\\n  display: flex;\\n  flex-grow: 1;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n  height: auto;\\n  width: 100%;\\n  align-items: center;\\n  background-color: var(--medium-blue);\\n}\\n\\n\\n.menu-button {\\n  position: relative;\\n  top: 0;\\n  margin: 4px 10px;\\n  padding: 0px 10px;\\n  transition: top ease 0.2s;\\n  cursor: pointer;\\n}\\n\\n.menu-button:hover {\\n  top: -3px;\\n}\\n\\n.clicked-button {\\n  border-bottom: 3px solid var(--dark-blue);\\n}\\n\\n.info-container, .food-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  width: 510px;\\n  background-color: var(--white);\\n  border: 4px solid var(--dark-blue);\\n  border-radius: 16px;\\n  color: var(--dark-blue-green);\\n}\\n\\n.info-header {\\n  font-size: 24px;\\n  font-weight: bold;\\n  padding:12px;\\n  padding-bottom: 0px;\\n}\\n\\n.info-content {\\n  color: var(--dark-blue);\\n  font-size: 14px;\\n  font-weight: 100;\\n  padding: 16px;\\n  text-align: justify;\\n  text-justify: inter-word;\\n}\\n\\n.insta-handle {\\n  text-decoration: none;\\n  color: inherit;\\n  font-weight: bold;\\n}\\n\\n.picture {\\n  max-width: 200px;\\n  height: auto;\\n  margin-top: 12px;\\n  border-radius: 16px;\\n  box-shadow: 6px 4px 4px var(--light-grey)\\n}\\n\\n.food-container {\\n  font-size: 36px;\\n  margin: 16px;\\n}\\n\\n#appetizer-container { \\n  margin-top: 32px;\\n}\\n\\n#dessert-container { \\n  margin-bottom: 32px;\\n}\\n\\n.food-item {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  font-size: 24px;\\n  margin: 8px;\\n  color: var(--dark-blue);\\n}\\n\\n\\n.food-bundle {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  \\n}\\n\\n.food-description {\\n  width: 180px;\\n  font-size: 14px;\\n}\\n\\n.food-image {\\n  max-width: 200px;\\n  height: auto;\\n  border-radius: 16px;\\n  margin: 12px;\\n  box-shadow: 6px 4px 4px var(--light-grey);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/button-properties.js":
/*!**********************************!*\
  !*** ./src/button-properties.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"returnAllButtons\": () => (/* binding */ returnAllButtons),\n/* harmony export */   \"addButtonEventListeners\": () => (/* binding */ addButtonEventListeners),\n/* harmony export */   \"createPageButtonEventListeners\": () => (/* binding */ createPageButtonEventListeners)\n/* harmony export */ });\n/* harmony import */ var _show_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-home.js */ \"./src/show-home.js\");\n/* harmony import */ var _show_food_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-food.js */ \"./src/show-food.js\");\n/* harmony import */ var _show_drinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-drinks */ \"./src/show-drinks.js\");\n\n\n\n\nconst returnAllButtons = () => {\n    const homeButton = document.getElementById('home-button');\n    const foodButton = document.getElementById('food-button');\n    const drinkButton = document.getElementById('drink-button');\n    const allButtons = [homeButton, foodButton, drinkButton];\n    return allButtons;\n}\n\nconst removeContent = () => {\n    const content = document.getElementById('content')\n    while (content.firstChild) {\n        content.removeChild(content.firstChild);\n    }\n}\n\nconst removeClickedFromAll = (allButtons) => {\n    allButtons.forEach((button) => button.classList.remove('clicked-button'));\n}\n\nconst handleButtonClicks = (e) => {\n    if (e.target.classList.contains('clicked')) return;\n    removeClickedFromAll(returnAllButtons());\n    e.target.classList.add('clicked-button');\n}\n\nconst addButtonEventListeners = (allButtons) => {\n    allButtons.forEach((button) => {\n        button.addEventListener('click', handleButtonClicks)\n    })\n}\n\nconst handleHomeButtonClick = () => {\n    removeContent();\n    (0,_show_home_js__WEBPACK_IMPORTED_MODULE_0__.showHome)();\n}\n\nconst handleFoodButtonClick = () => {\n    removeContent();\n    (0,_show_food_js__WEBPACK_IMPORTED_MODULE_1__.showFood)();\n}\n\nconst handleDrinkButtonClick = () => {\n    removeContent();\n    (0,_show_drinks__WEBPACK_IMPORTED_MODULE_2__.showDrinks)();\n}\n\nconst createPageButtonEventListeners = (allButtons) => {\n    allButtons[0].addEventListener('click', handleHomeButtonClick);\n    allButtons[1].addEventListener('click', handleFoodButtonClick);\n    allButtons[2].addEventListener('click', handleDrinkButtonClick);\n}\n\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/button-properties.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _load_page_skeleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-page-skeleton */ \"./src/load-page-skeleton.js\");\n/* harmony import */ var _show_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-home.js */ \"./src/show-home.js\");\n/* harmony import */ var _button_properties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button-properties */ \"./src/button-properties.js\");\n\n\n\n\n\n(0,_load_page_skeleton__WEBPACK_IMPORTED_MODULE_1__.loadPageSkeleton)();\n(0,_show_home_js__WEBPACK_IMPORTED_MODULE_2__.showHome)();\n(0,_button_properties__WEBPACK_IMPORTED_MODULE_3__.addButtonEventListeners)((0,_button_properties__WEBPACK_IMPORTED_MODULE_3__.returnAllButtons)());\n(0,_button_properties__WEBPACK_IMPORTED_MODULE_3__.createPageButtonEventListeners)((0,_button_properties__WEBPACK_IMPORTED_MODULE_3__.returnAllButtons)());\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/load-page-skeleton.js":
/*!***********************************!*\
  !*** ./src/load-page-skeleton.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadPageSkeleton\": () => (/* binding */ loadPageSkeleton)\n/* harmony export */ });\n/* harmony import */ var _icons_github_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/github-logo.png */ \"./src/icons/github-logo.png\");\n\n\nconst loadPageSkeleton = () => {\n    const container = document.getElementById('container');\n\n    const header = document.createElement('div');\n    header.classList.add('header');\n\n    const headerTop = document.createElement('div');\n    headerTop.id = 'header-top';\n    headerTop.textContent = 'Basement Kitchen'\n\n    const headerBottom = document.createElement('div');\n    headerBottom.id = 'header-bottom'\n\n    const homeButton = document.createElement('div');\n    homeButton.textContent = 'Home';\n    homeButton.id = 'home-button';\n    homeButton.classList.add('menu-button');\n    homeButton.classList.add('clicked-button');\n\n    const foodButton = document.createElement('div');\n    foodButton.textContent = 'Food Menu';\n    foodButton.id = 'food-button';\n    foodButton.classList.add('menu-button');\n\n    const drinkButton = document.createElement('div');\n    drinkButton.textContent ='Drink Menu';\n    drinkButton.id = 'drink-button'\n    drinkButton.classList.add('menu-button');\n\n    headerBottom.appendChild(homeButton);\n    headerBottom.appendChild(foodButton);\n    headerBottom.appendChild(drinkButton);\n    header.appendChild(headerTop);\n    header.appendChild(headerBottom);\n\n    const content = document.createElement('div');\n    content.id = 'content'\n\n    const footer = document.createElement('div');\n    footer.classList.add('footer');\n\n    const footerText = document.createElement('span');\n    footerText.classList.add('footer-text');\n    footerText.textContent = 'Made with 🍓 by'\n\n    const footerLink = document.createElement('a');\n    footerLink.classList.add('footer-link');\n    footerLink.textContent = 'Matt Rossetti'\n    footerLink.href = \"https://github.com/MattRossetti\";\n\n    const footerLogo = new Image();\n    footerLogo.classList.add('github-icon');\n    footerLogo.src = _icons_github_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n    \n    footerLink.appendChild(footerLogo);\n    footerText.appendChild(footerLink);\n    footer.appendChild(footerText);\n\n    container.appendChild(header);\n    container.appendChild(content);\n    container.appendChild(footer);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/load-page-skeleton.js?");

/***/ }),

/***/ "./src/show-drinks.js":
/*!****************************!*\
  !*** ./src/show-drinks.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showDrinks\": () => (/* binding */ showDrinks)\n/* harmony export */ });\n/* harmony import */ var _drink_photos_beer_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drink-photos/beer.jpg */ \"./src/drink-photos/beer.jpg\");\n/* harmony import */ var _drink_photos_wine_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drink-photos/wine.jpg */ \"./src/drink-photos/wine.jpg\");\n/* harmony import */ var _drink_photos_whiskey_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drink-photos/whiskey.jpg */ \"./src/drink-photos/whiskey.jpg\");\n/* harmony import */ var _drink_photos_tequila_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drink-photos/tequila.jpg */ \"./src/drink-photos/tequila.jpg\");\n/* harmony import */ var _drink_photos_gin_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drink-photos/gin.jpg */ \"./src/drink-photos/gin.jpg\");\n/* harmony import */ var _drink_photos_campari_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drink-photos/campari.jpg */ \"./src/drink-photos/campari.jpg\");\n\n\n\n\n\n\n\nconst showDrinks = () => {\n    const content = document.getElementById('content');\n\n    const beerAndWineContainer = document.createElement('div');\n    beerAndWineContainer.id = 'beer-and-wine-container';\n    beerAndWineContainer.classList.add('food-container');\n    beerAndWineContainer.textContent = 'Beer and Wine';\n\n    const beer = document.createElement('div');\n    beer.id = 'beer';\n    beer.classList.add('food-item');\n    beer.textContent = 'Beer'\n\n    const beerBundle = document.createElement('div');\n    beerBundle.id ='beer-bundle';\n    beerBundle.classList.add('food-bundle');\n\n    const beerDescription = document.createElement('div');\n    beerDescription.id = 'beer-description';\n    beerDescription.classList.add('food-description');\n    beerDescription.textContent = 'Breweries on tap include Lagunitas, Maplewood, Noon whistle, and pipeworks.'\n\n    const beerPhoto  = new Image();\n    beerPhoto.classList.add('food-image');\n    beerPhoto.src = _drink_photos_beer_jpg__WEBPACK_IMPORTED_MODULE_0__;\n\n    beerBundle.appendChild(beerDescription);\n    beerBundle.appendChild(beerPhoto);\n    beer.appendChild(beerBundle);\n    beerAndWineContainer.appendChild(beer);\n\n    const wine = document.createElement('div');\n    wine.id = 'wine';\n    wine.classList.add('food-item');\n    wine.textContent = 'Wine'\n\n    const wineBundle = document.createElement('div');\n    wineBundle.id ='wine-bundle';\n    wineBundle.classList.add('food-bundle');\n\n    const wineDescription = document.createElement('div');\n    wineDescription.id = 'wine-description';\n    wineDescription.classList.add('food-description');\n    wineDescription.textContent = 'House wines include a white, two reds, and rose. Ask your hostess for tasting notes for the wines.'\n\n    const winePhoto  = new Image();\n    winePhoto.classList.add('food-image');\n    winePhoto.src = _drink_photos_wine_jpg__WEBPACK_IMPORTED_MODULE_1__;\n\n    wineBundle.appendChild(wineDescription);\n    wineBundle.appendChild(winePhoto);\n    wine.appendChild(wineBundle);\n    beerAndWineContainer.appendChild(wine);\n\n    const cocktailContainer = document.createElement('div');\n    cocktailContainer.id = 'cocktail-container';\n    cocktailContainer.classList.add('food-container');\n    cocktailContainer.textContent = 'Cocktails'\n\n    const whiskey = document.createElement('div');\n    whiskey.id = 'whiskey';\n    whiskey.classList.add('food-item');\n    whiskey.textContent = 'Whiskey'\n\n    const whiskeyBundle = document.createElement('div');\n    whiskeyBundle.id ='whiskey-bundle';\n    whiskeyBundle.classList.add('food-bundle');\n\n    const whiskeyDescription = document.createElement('div');\n    whiskeyDescription.id = 'whiskey-description';\n    whiskeyDescription.classList.add('food-description');\n    whiskeyDescription.textContent = 'Whiskey Old Fashioned, just like your grandpa liked.'\n\n    const whiskeyPhoto  = new Image();\n    whiskeyPhoto.classList.add('food-image');\n    whiskeyPhoto.src = _drink_photos_whiskey_jpg__WEBPACK_IMPORTED_MODULE_2__;\n\n    whiskeyBundle.appendChild(whiskeyDescription);\n    whiskeyBundle.appendChild(whiskeyPhoto);\n    whiskey.appendChild(whiskeyBundle);\n    cocktailContainer.appendChild(whiskey);\n\n    const tequila = document.createElement('div');\n    tequila.id = 'tequila';\n    tequila.classList.add('food-item');\n    tequila.textContent = 'Tequila'\n\n    const tequilaBundle = document.createElement('div');\n    tequilaBundle.id ='tequila-bundle';\n    tequilaBundle.classList.add('food-bundle');\n\n    const tequilaDescription = document.createElement('div');\n    tequilaDescription.id = 'tequila-description';\n    tequilaDescription.classList.add('food-description');\n    tequilaDescription.textContent = 'Smoked Lime Margarita, great start to a long night.'\n\n    const tequilaPhoto  = new Image();\n    tequilaPhoto.classList.add('food-image');\n    tequilaPhoto.src = _drink_photos_tequila_jpg__WEBPACK_IMPORTED_MODULE_3__;\n\n    const gin = document.createElement('div');\n    gin.id = 'gin';\n    gin.classList.add('food-item');\n    gin.textContent = 'Gin'\n\n    const ginBundle = document.createElement('div');\n    ginBundle.id ='gin-bundle';\n    ginBundle.classList.add('food-bundle');\n\n    const ginDescription = document.createElement('div');\n    ginDescription.id = 'gin-description';\n    ginDescription.classList.add('food-description');\n    ginDescription.textContent = 'Gin and Tonic, for the gentleman.'\n\n    const ginPhoto  = new Image();\n    ginPhoto.classList.add('food-image');\n    ginPhoto.src = _drink_photos_gin_jpg__WEBPACK_IMPORTED_MODULE_4__;\n\n    ginBundle.appendChild(ginDescription);\n    ginBundle.appendChild(ginPhoto);\n    gin.appendChild(ginBundle);\n    cocktailContainer.appendChild(gin);\n\n    tequilaBundle.appendChild(tequilaDescription);\n    tequilaBundle.appendChild(tequilaPhoto);\n    tequila.appendChild(tequilaBundle);\n    cocktailContainer.appendChild(tequila);\n\n    const campari = document.createElement('div');\n    campari.id = 'campari';\n    campari.classList.add('food-item');\n    campari.textContent = 'Campari'\n\n    const campariBundle = document.createElement('div');\n    campariBundle.id ='campari-bundle';\n    campariBundle.classList.add('food-bundle');\n\n    const campariDescription = document.createElement('div');\n    campariDescription.id = 'campari-description';\n    campariDescription.classList.add('food-description');\n    campariDescription.textContent = 'Negroni, for the true cocktail officianados.'\n\n    const campariPhoto  = new Image();\n    campariPhoto.classList.add('food-image');\n    campariPhoto.src = _drink_photos_campari_jpg__WEBPACK_IMPORTED_MODULE_5__;\n\n    campariBundle.appendChild(campariDescription);\n    campariBundle.appendChild(campariPhoto);\n    campari.appendChild(campariBundle);\n    cocktailContainer.appendChild(campari);\n\n    content.appendChild(beerAndWineContainer);\n    content.appendChild(cocktailContainer);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/show-drinks.js?");

/***/ }),

/***/ "./src/show-food.js":
/*!**************************!*\
  !*** ./src/show-food.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showFood\": () => (/* binding */ showFood)\n/* harmony export */ });\n/* harmony import */ var _food_images_crustini_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food-images/crustini.jpeg */ \"./src/food-images/crustini.jpeg\");\n/* harmony import */ var _food_images_arancini_JPEG__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food-images/arancini.JPEG */ \"./src/food-images/arancini.JPEG\");\n/* harmony import */ var _food_images_latke_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./food-images/latke.jpeg */ \"./src/food-images/latke.jpeg\");\n/* harmony import */ var _food_images_pizza_JPEG__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./food-images/pizza.JPEG */ \"./src/food-images/pizza.JPEG\");\n/* harmony import */ var _food_images_tacos_JPEG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food-images/tacos.JPEG */ \"./src/food-images/tacos.JPEG\");\n/* harmony import */ var _food_images_pasta_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./food-images/pasta.jpeg */ \"./src/food-images/pasta.jpeg\");\n/* harmony import */ var _food_images_lavaCake_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./food-images/lavaCake.jpeg */ \"./src/food-images/lavaCake.jpeg\");\n/* harmony import */ var _food_images_tart_JPEG__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./food-images/tart.JPEG */ \"./src/food-images/tart.JPEG\");\n/* harmony import */ var _food_images_iceCream_JPEG__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./food-images/iceCream.JPEG */ \"./src/food-images/iceCream.JPEG\");\n\n\n\n\n\n\n\n\n\n\nconst showFood = () => {\n    const content = document.getElementById('content')\n\n    const appetizerContainer = document.createElement('div');\n    appetizerContainer.id = 'appetizer-container';\n    appetizerContainer.classList.add('food-container');\n    appetizerContainer.textContent = 'Appetizers'\n\n    const crustini = document.createElement('div');\n    crustini.id = 'crustini';\n    crustini.classList.add('food-item');\n    crustini.textContent = 'Crustini'\n\n    const crustiniBundle = document.createElement('div');\n    crustiniBundle.id ='crustini-bundle';\n    crustiniBundle.classList.add('food-bundle');\n\n    const crustiniDescription = document.createElement('div');\n    crustiniDescription.id = 'crustini-description';\n    crustiniDescription.classList.add('food-description');\n    crustiniDescription.textContent = 'Crustini served with a Whipped Feta spread and jammy coinfit tomatoes.'\n\n    const crustiniPhoto  = new Image();\n    crustiniPhoto.classList.add('food-image');\n    crustiniPhoto.src = _food_images_crustini_jpeg__WEBPACK_IMPORTED_MODULE_0__;\n\n    crustiniBundle.appendChild(crustiniDescription);\n    crustiniBundle.appendChild(crustiniPhoto);\n    crustini.appendChild(crustiniBundle);\n    appetizerContainer.appendChild(crustini);\n\n    const arancini = document.createElement('div');\n    arancini.id = 'arancini';\n    arancini.classList.add('food-item');\n    arancini.textContent = 'Arancini';\n\n    const aranciniBundle = document.createElement('div');\n    aranciniBundle.id = 'arancini-bundle';\n    aranciniBundle.classList.add('food-bundle');\n\n    const aranciniDescription = document.createElement('div');\n    aranciniDescription.id = 'arancini-description';\n    aranciniDescription.classList.add('food-description');\n    aranciniDescription.textContent = 'Risotto balls stuffed with mozzerella then battered and Fried. Served with a calabrian chile aioli.'\n\n    const aranciniPhoto = new Image();\n    aranciniPhoto.classList.add('food-image');\n    aranciniPhoto.src = _food_images_arancini_JPEG__WEBPACK_IMPORTED_MODULE_1__;\n\n    aranciniBundle.appendChild(aranciniDescription);\n    aranciniBundle.appendChild(aranciniPhoto);\n    arancini.appendChild(aranciniBundle);\n    appetizerContainer.appendChild(arancini);\n\n    const latke = document.createElement('div');\n    latke.id = 'latke';\n    latke.classList.add('food-item');\n    latke.textContent = 'Latke';\n\n    const latkeBundle = document.createElement('div');\n    latkeBundle.id = 'latke-bundle';\n    latkeBundle.classList.add('food-bundle');\n\n    const latkeDescription = document.createElement('div');\n    latkeDescription.id = 'latke-description';\n    latkeDescription.classList.add('food-description');\n    latkeDescription.textContent = 'Potato Latke topped with sour cream, smoked salmon, and chives.'\n\n    const latkePhoto = new Image();\n    latkePhoto.classList.add('food-image');\n    latkePhoto.src = _food_images_latke_jpeg__WEBPACK_IMPORTED_MODULE_2__;\n\n    latkeBundle.appendChild(latkeDescription);\n    latkeBundle.appendChild(latkePhoto);\n    latke.appendChild(latkeBundle);\n    appetizerContainer.appendChild(latke);\n\n    const entreeContainer = document.createElement('div');\n    entreeContainer.id = 'entree-container';\n    entreeContainer.classList.add('food-container');\n    entreeContainer.textContent = 'Entrees'\n\n    const pizza = document.createElement('div');\n    pizza.id = 'pizza';\n    pizza.classList.add('food-item');\n    pizza.textContent = 'Pizza';\n\n    const pizzaBundle = document.createElement('div');\n    pizzaBundle.id = 'pizza-bundle';\n    pizzaBundle.classList.add('food-bundle');\n\n    const pizzaDescription = document.createElement('div');\n    pizzaDescription.id = 'pizza-description';\n    pizzaDescription.classList.add('food-description');\n    pizzaDescription.textContent = 'Grilled pizza topped with fresh mozzerella, peaches and proscuitto. Finished with fresh basil and a balsamic vinegar reduction.';\n\n    const pizzaPhoto = new Image();\n    pizzaPhoto.classList.add('food-image');\n    pizzaPhoto.src = _food_images_pizza_JPEG__WEBPACK_IMPORTED_MODULE_3__;\n\n    pizzaBundle.appendChild(pizzaDescription);\n    pizzaBundle.appendChild(pizzaPhoto);\n    pizza.appendChild(pizzaBundle);\n    entreeContainer.appendChild(pizza);\n\n    const taco = document.createElement('div');\n    taco.id = 'taco';\n    taco.classList.add('food-item');\n    taco.textContent = 'Taco';\n\n    const tacoBundle = document.createElement('div');\n    tacoBundle.id = 'taco-bundle';\n    tacoBundle.classList.add('food-bundle');\n\n    const tacoDescription = document.createElement('div');\n    tacoDescription.id = 'taco-description';\n    tacoDescription.classList.add('food-description');\n    tacoDescription.textContent = 'Chicken tinga stuffed into a crispy corn tortilla shell. Served with guacamole, pickled red onions, and lime.'\n\n    const tacoPhoto = new Image();\n    tacoPhoto.classList.add('food-image');\n    tacoPhoto.src = _food_images_tacos_JPEG__WEBPACK_IMPORTED_MODULE_4__;\n\n    tacoBundle.appendChild(tacoDescription);\n    tacoBundle.appendChild(tacoPhoto);\n    taco.appendChild(tacoBundle);\n    entreeContainer.appendChild(taco);\n    \n    const pasta = document.createElement('div');\n    pasta.id = 'pasta';\n    pasta.classList.add('food-item');\n    pasta.textContent = 'Pasta';\n    \n    const pastaBundle = document.createElement('div');\n    pastaBundle.id = 'pasta-bundle';\n    pastaBundle.classList.add('food-bundle');\n    \n    const pastaDescription = document.createElement('div');\n    pastaDescription.id = 'pasta-description';\n    pastaDescription.classList.add('food-description');\n    pastaDescription.textContent = 'Creamy mushroom pasta topped with crispy baby bella and maitake mushrooms.'\n    \n    const pastaPhoto = new Image();\n    pastaPhoto.classList.add('food-image');\n    pastaPhoto.src = _food_images_pasta_jpeg__WEBPACK_IMPORTED_MODULE_5__;\n    \n    pastaBundle.appendChild(pastaDescription);\n    pastaBundle.appendChild(pastaPhoto);\n    pasta.appendChild(pastaBundle);\n    entreeContainer.appendChild(pasta);\n    \n    const dessertContainer = document.createElement('div');\n    dessertContainer.id = 'dessert-container';\n    dessertContainer.classList.add('food-container');\n    dessertContainer.textContent = 'Dessert'\n\n    const lavaCake = document.createElement('div');\n    lavaCake.id = 'lavaCake';\n    lavaCake.classList.add('food-item');\n    lavaCake.textContent = 'Chocolate Lava Cake';\n    \n    const lavaCakeBundle = document.createElement('div');\n    lavaCakeBundle.id = 'lavaCake-bundle';\n    lavaCakeBundle.classList.add('food-bundle');\n    \n    const lavaCakeDescription = document.createElement('div');\n    lavaCakeDescription.id = 'lavaCake-description';\n    lavaCakeDescription.classList.add('food-description');\n    lavaCakeDescription.textContent = 'Chocolate cake with a molten core, topped with fresh seasonal fruit.'\n    \n    const lavaCakePhoto = new Image();\n    lavaCakePhoto.classList.add('food-image');\n    lavaCakePhoto.src = _food_images_lavaCake_jpeg__WEBPACK_IMPORTED_MODULE_6__;\n    \n    lavaCakeBundle.appendChild(lavaCakeDescription);\n    lavaCakeBundle.appendChild(lavaCakePhoto);\n    lavaCake.appendChild(lavaCakeBundle);\n    dessertContainer.appendChild(lavaCake);\n\n    const tart = document.createElement('div');\n    tart.id = 'tart';\n    tart.classList.add('food-item');\n    tart.textContent = 'Lemon Blueberry Tart';\n    \n    const tartBundle = document.createElement('div');\n    tartBundle.id = 'tart-bundle';\n    tartBundle.classList.add('food-bundle');\n    \n    const tartDescription = document.createElement('div');\n    tartDescription.id = 'tart-description';\n    tartDescription.classList.add('food-description');\n    tartDescription.textContent = 'Summery Lemon tart topped with ripe blueberries on a graham cracker crust.'\n    \n    const tartPhoto = new Image();\n    tartPhoto.classList.add('food-image');\n    tartPhoto.src = _food_images_tart_JPEG__WEBPACK_IMPORTED_MODULE_7__;\n    \n    tartBundle.appendChild(tartDescription);\n    tartBundle.appendChild(tartPhoto);\n    tart.appendChild(tartBundle);\n    dessertContainer.appendChild(tart);\n\n    const iceCream = document.createElement('div');\n    iceCream.id = 'iceCream';\n    iceCream.classList.add('food-item');\n    iceCream.textContent = 'Ice Cream Sandwich';\n    \n    const iceCreamBundle = document.createElement('div');\n    iceCreamBundle.id = 'iceCream-bundle';\n    iceCreamBundle.classList.add('food-bundle');\n    \n    const iceCreamDescription = document.createElement('div');\n    iceCreamDescription.id = 'iceCream-description';\n    iceCreamDescription.classList.add('food-description');\n    iceCreamDescription.textContent = 'Vanilla ice cream made with fresh vanilla beans sandwiched between two chocolate cookies.'\n    \n    const iceCreamPhoto = new Image();\n    iceCreamPhoto.classList.add('food-image');\n    iceCreamPhoto.src = _food_images_iceCream_JPEG__WEBPACK_IMPORTED_MODULE_8__;\n    \n    iceCreamBundle.appendChild(iceCreamDescription);\n    iceCreamBundle.appendChild(iceCreamPhoto);\n    iceCream.appendChild(iceCreamBundle);\n    dessertContainer.appendChild(iceCream);\n    \n    content.appendChild(appetizerContainer);\n    content.appendChild(entreeContainer);\n    content.appendChild(dessertContainer);\n}\n\n \n\n//# sourceURL=webpack://restaurant-page/./src/show-food.js?");

/***/ }),

/***/ "./src/show-home.js":
/*!**************************!*\
  !*** ./src/show-home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showHome\": () => (/* binding */ showHome)\n/* harmony export */ });\n/* harmony import */ var _about_images_chefs_picture_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-images/chefs-picture.jpeg */ \"./src/about-images/chefs-picture.jpeg\");\nconst aboutContentText = \"Born out a love for food and a tiny apartment, Basement Kitchen highlights Chef Matt and Grace's favorite cuisines. Come and dine with us and you will be served with the meal of a lifetime. Whether you enjoy Pizza, Pasta, or just a great cocktail, Basement Kitchen has something for you!\"\n;\n\nconst showHome = () => {\n    const content = document.getElementById('content')\n\n    const chefsContainer = document.createElement('div');\n    chefsContainer.id = 'chefs-container';\n    chefsContainer.classList.add('info-container');\n\n    const chefsHeader = document.createElement('div');\n    chefsHeader.id = 'chefs-header';\n    chefsHeader.classList.add('info-header');\n    chefsHeader.textContent = 'Meet The Chefs';\n\n    const chefsPicture = new Image();\n    chefsPicture.classList.add('picture');\n    chefsPicture.src = _about_images_chefs_picture_jpeg__WEBPACK_IMPORTED_MODULE_0__\n\n    const chefsContent = document.createElement('div');\n    chefsContent.id = 'chefs-content';\n    chefsContent.classList.add('info-content');\n    chefsContent.textContent = 'Grace and Matt circa 2021';\n\n    chefsContainer.appendChild(chefsHeader);\n    chefsContainer.appendChild(chefsPicture);\n    chefsContainer.appendChild(chefsContent);\n    content.appendChild(chefsContainer)\n\n    const aboutContainer = document.createElement('div');\n    aboutContainer.id = 'about-container';\n    aboutContainer.classList.add('info-container');\n\n    const aboutHeader = document.createElement('div');\n    aboutHeader.id = 'about-header';\n    aboutHeader.classList.add('info-header');\n    aboutHeader.textContent = 'About';\n    \n    const aboutContent = document.createElement('div');\n    aboutContent.id = 'about-content';\n    aboutContent.classList.add('info-content');\n    aboutContent.textContent = aboutContentText\n\n    aboutContainer.appendChild(aboutHeader);\n    aboutContainer.appendChild(aboutContent);\n    content.appendChild(aboutContainer);\n\n    const contactContainer = document.createElement('div');\n    contactContainer.id = 'contact_container';\n    contactContainer.classList.add('info-container');\n\n    const contactHeader = document.createElement('div');\n    contactHeader.id = 'contact_header';\n    contactHeader.classList.add('info-header');\n    contactHeader.textContent = 'Contact';\n\n    const contactContent = document.createElement('div');\n    contactContent.id = 'contact-content'\n    contactContent.classList.add('info-content');\n    contactContent.textContent = 'Slide into our DMs on insta' + '\\u00A0';\n\n    const instaHandle = document.createElement('a');\n    instaHandle.classList.add('insta-handle')\n    instaHandle.textContent = '@basement_kitchen'\n    instaHandle.href = 'https://www.instagram.com/basement_kitchen/'\n\n    contactContent.appendChild(instaHandle);\n    contactContainer.appendChild(contactHeader);\n    contactContainer.appendChild(contactContent);\n    content.appendChild(contactContainer);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/show-home.js?");

/***/ }),

/***/ "./src/about-images/chefs-picture.jpeg":
/*!*********************************************!*\
  !*** ./src/about-images/chefs-picture.jpeg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0906720ec822d9805f68.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/about-images/chefs-picture.jpeg?");

/***/ }),

/***/ "./src/drink-photos/beer.jpg":
/*!***********************************!*\
  !*** ./src/drink-photos/beer.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c91bca648c0bf8796069.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/drink-photos/beer.jpg?");

/***/ }),

/***/ "./src/drink-photos/campari.jpg":
/*!**************************************!*\
  !*** ./src/drink-photos/campari.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e9eeda2f5f8e6ac670b6.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/drink-photos/campari.jpg?");

/***/ }),

/***/ "./src/drink-photos/gin.jpg":
/*!**********************************!*\
  !*** ./src/drink-photos/gin.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"10779536fb58a172a784.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/drink-photos/gin.jpg?");

/***/ }),

/***/ "./src/drink-photos/tequila.jpg":
/*!**************************************!*\
  !*** ./src/drink-photos/tequila.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"deea97ceec859a3433ad.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/drink-photos/tequila.jpg?");

/***/ }),

/***/ "./src/drink-photos/whiskey.jpg":
/*!**************************************!*\
  !*** ./src/drink-photos/whiskey.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7eadcc15981f33764978.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/drink-photos/whiskey.jpg?");

/***/ }),

/***/ "./src/drink-photos/wine.jpg":
/*!***********************************!*\
  !*** ./src/drink-photos/wine.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"12ac4960c85408d6aeab.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/drink-photos/wine.jpg?");

/***/ }),

/***/ "./src/food-images/arancini.JPEG":
/*!***************************************!*\
  !*** ./src/food-images/arancini.JPEG ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"082c55cad87a5b015889.JPEG\";\n\n//# sourceURL=webpack://restaurant-page/./src/food-images/arancini.JPEG?");

/***/ }),

/***/ "./src/food-images/crustini.jpeg":
/*!***************************************!*\
  !*** ./src/food-images/crustini.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"963e7418a51bb6042b13.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/food-images/crustini.jpeg?");

/***/ }),

/***/ "./src/food-images/iceCream.JPEG":
/*!***************************************!*\
  !*** ./src/food-images/iceCream.JPEG ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9467e26a5f6e168b13cb.JPEG\";\n\n//# sourceURL=webpack://restaurant-page/./src/food-images/iceCream.JPEG?");

/***/ }),

/***/ "./src/food-images/latke.jpeg":
/*!************************************!*\
  !*** ./src/food-images/latke.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e88411846671d27d0a41.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/food-images/latke.jpeg?");

/***/ }),

/***/ "./src/food-images/lavaCake.jpeg":
/*!***************************************!*\
  !*** ./src/food-images/lavaCake.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d49a383856c4100f2c15.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/food-images/lavaCake.jpeg?");

/***/ }),

/***/ "./src/food-images/pasta.jpeg":
/*!************************************!*\
  !*** ./src/food-images/pasta.jpeg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a4af9d27c4a91d9ed9dc.jpeg\";\n\n//# sourceURL=webpack://restaurant-page/./src/food-images/pasta.jpeg?");

/***/ }),

/***/ "./src/food-images/pizza.JPEG":
/*!************************************!*\
  !*** ./src/food-images/pizza.JPEG ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"727347ed3dad0a57397b.JPEG\";\n\n//# sourceURL=webpack://restaurant-page/./src/food-images/pizza.JPEG?");

/***/ }),

/***/ "./src/food-images/tacos.JPEG":
/*!************************************!*\
  !*** ./src/food-images/tacos.JPEG ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b00233673e5f3f50a44e.JPEG\";\n\n//# sourceURL=webpack://restaurant-page/./src/food-images/tacos.JPEG?");

/***/ }),

/***/ "./src/food-images/tart.JPEG":
/*!***********************************!*\
  !*** ./src/food-images/tart.JPEG ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"72e17289c7b039c6bc08.JPEG\";\n\n//# sourceURL=webpack://restaurant-page/./src/food-images/tart.JPEG?");

/***/ }),

/***/ "./src/icons/github-logo.png":
/*!***********************************!*\
  !*** ./src/icons/github-logo.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"266ca63177bca6f330a7.png\";\n\n//# sourceURL=webpack://restaurant-page/./src/icons/github-logo.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;