/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Pacifico-Regular.woff */ "./src/fonts/Pacifico-Regular.woff"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg-color: #A0E7E5;\n    --header-color: #FBE7C6;\n    --title-color: #8B05FA;\n    --active-nav-color: #ffdca5;\n    font-size: 16px;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n@font-face {\n    font-family: \"Pacifico\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-size: inherit;\n    color: inherit;\n    text-decoration: inherit;\n}\n\n.text-cursive {\n    font-family: \"Pacifico\", sans-serif;\n}\n\n.text-center {\n    text-align: center;\n}\n\n#content {\n    width: 100vw;\n    min-height: 100vh;\n    background-color: var(--bg-color);\n    display: grid;\n    grid-template: 5rem 3rem auto 3rem / 1fr;\n    grid-template-areas:\n        \"header\"\n        \"navbar\"\n        \"main\"\n        \"footer\";\n}\n\n#page-header,\n#page-footer,\n#page-navbar {\n    background-color: var(--header-color);\n}\n\n#page-header {\n    grid-area: header;\n    padding: 1rem 0;\n    color: var(--title-color);\n    font-size: 2.5rem;\n    font-family: 'Pacifico', sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#page-navbar {\n    grid-area: navbar;\n}\n\n#nav-links {\n    height: 100%;\n    width: min(100vw, 1000px);\n    padding: 0.25rem 1rem;\n    margin: 0 auto;\n    font-family: \"Pacifico\", sans-serif;\n    text-align: center;\n    display: grid;\n    grid-auto-flow: column;\n    place-items: center;\n}\n\n#nav-links>li {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n#nav-links>li::marker {\n    content: none;\n}\n\n#nav-links>li.active {\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    background-color: var(--active-nav-color);\n    box-shadow: 0 0.25rem var(--active-nav-color);\n}\n\n#page-main {\n    grid-area: main;\n    margin: 0 auto;\n    padding: clamp(1rem, 3vw, 2rem);\n    width: min(100vw, 1000px);\n}\n\n#home {\n    min-height: 100%;\n    font-size: clamp(1.2rem, 3vw, 2rem);\n    color: var(--title-color);\n    display: grid;\n    grid-template: repeat(2, auto) / 1fr;\n    gap: clamp(1rem, 3vh, 2rem);\n    place-content: center;\n}\n\n#home>img {\n    --size: calc(100vw - 2rem);\n    --max-size: calc(500px - 2rem);\n    width: var(--size);\n    height: var(--size);\n    max-width: var(--max-size);\n    max-height: var(--max-size);\n    margin: 0 auto;\n    object-fit: cover;\n    border-radius: 50%;\n}\n\n#home>h1 {\n    font-size: 2em;\n}\n\n#menu {\n    display: grid;\n    grid-template: 3rem auto / auto;\n    text-align: center;\n    gap: 2rem;\n}\n\n#menu>h2 {\n    font-size: 2em;\n}\n\n.menu-section>header {\n    font-size: 1.5em;\n    width: 100%;\n    padding: 1rem 0;\n}\n\n.menuItemContainer {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n    gap: 1rem;\n}\n\n.menu-item::marker {\n    content: none;\n}\n\n.menu-item>img {\n    width: calc(100% - 1rem);\n    height: 350px;\n    border-radius: 2em;\n    object-fit: cover;\n    margin: 1rem 0;\n}\n\n.menu-item>p {\n    font-size: 1.2em;\n}\n\n#page-footer {\n    grid-area: footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#page-footer a {\n    font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,2BAA2B;IAC3B,eAAe;IACf,sHAAsH;AAC1H;;AAEA;IACI,uBAAuB;IACvB,2DAAwD;IACxD,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;;;IAGI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,kBAAkB;IAClB,cAAc;IACd,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,iCAAiC;IACjC,aAAa;IACb,wCAAwC;IACxC;;;;gBAIY;AAChB;;AAEA;;;IAGI,qCAAqC;AACzC;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,yBAAyB;IACzB,iBAAiB;IACjB,mCAAmC;IACnC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,qBAAqB;IACrB,cAAc;IACd,mCAAmC;IACnC,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,8BAA8B;IAC9B,+BAA+B;IAC/B,yCAAyC;IACzC,6CAA6C;AACjD;;AAEA;IACI,eAAe;IACf,cAAc;IACd,+BAA+B;IAC/B,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,mCAAmC;IACnC,yBAAyB;IACzB,aAAa;IACb,oCAAoC;IACpC,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI,0BAA0B;IAC1B,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;IACnB,0BAA0B;IAC1B,2BAA2B;IAC3B,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[":root {\n    --bg-color: #A0E7E5;\n    --header-color: #FBE7C6;\n    --title-color: #8B05FA;\n    --active-nav-color: #ffdca5;\n    font-size: 16px;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n@font-face {\n    font-family: \"Pacifico\";\n    src: url('./fonts/Pacifico-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-size: inherit;\n    color: inherit;\n    text-decoration: inherit;\n}\n\n.text-cursive {\n    font-family: \"Pacifico\", sans-serif;\n}\n\n.text-center {\n    text-align: center;\n}\n\n#content {\n    width: 100vw;\n    min-height: 100vh;\n    background-color: var(--bg-color);\n    display: grid;\n    grid-template: 5rem 3rem auto 3rem / 1fr;\n    grid-template-areas:\n        \"header\"\n        \"navbar\"\n        \"main\"\n        \"footer\";\n}\n\n#page-header,\n#page-footer,\n#page-navbar {\n    background-color: var(--header-color);\n}\n\n#page-header {\n    grid-area: header;\n    padding: 1rem 0;\n    color: var(--title-color);\n    font-size: 2.5rem;\n    font-family: 'Pacifico', sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#page-navbar {\n    grid-area: navbar;\n}\n\n#nav-links {\n    height: 100%;\n    width: min(100vw, 1000px);\n    padding: 0.25rem 1rem;\n    margin: 0 auto;\n    font-family: \"Pacifico\", sans-serif;\n    text-align: center;\n    display: grid;\n    grid-auto-flow: column;\n    place-items: center;\n}\n\n#nav-links>li {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n#nav-links>li::marker {\n    content: none;\n}\n\n#nav-links>li.active {\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    background-color: var(--active-nav-color);\n    box-shadow: 0 0.25rem var(--active-nav-color);\n}\n\n#page-main {\n    grid-area: main;\n    margin: 0 auto;\n    padding: clamp(1rem, 3vw, 2rem);\n    width: min(100vw, 1000px);\n}\n\n#home {\n    min-height: 100%;\n    font-size: clamp(1.2rem, 3vw, 2rem);\n    color: var(--title-color);\n    display: grid;\n    grid-template: repeat(2, auto) / 1fr;\n    gap: clamp(1rem, 3vh, 2rem);\n    place-content: center;\n}\n\n#home>img {\n    --size: calc(100vw - 2rem);\n    --max-size: calc(500px - 2rem);\n    width: var(--size);\n    height: var(--size);\n    max-width: var(--max-size);\n    max-height: var(--max-size);\n    margin: 0 auto;\n    object-fit: cover;\n    border-radius: 50%;\n}\n\n#home>h1 {\n    font-size: 2em;\n}\n\n#menu {\n    display: grid;\n    grid-template: 3rem auto / auto;\n    text-align: center;\n    gap: 2rem;\n}\n\n#menu>h2 {\n    font-size: 2em;\n}\n\n.menu-section>header {\n    font-size: 1.5em;\n    width: 100%;\n    padding: 1rem 0;\n}\n\n.menuItemContainer {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n    gap: 1rem;\n}\n\n.menu-item::marker {\n    content: none;\n}\n\n.menu-item>img {\n    width: calc(100% - 1rem);\n    height: 350px;\n    border-radius: 2em;\n    object-fit: cover;\n    margin: 1rem 0;\n}\n\n.menu-item>p {\n    font-size: 1.2em;\n}\n\n#page-footer {\n    grid-area: footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#page-footer a {\n    font-weight: bold;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/DomHelper.js":
/*!**************************!*\
  !*** ./src/DomHelper.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addClasses": () => (/* binding */ addClasses),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createLink": () => (/* binding */ createLink)
/* harmony export */ });
const createElement = (tag, id) => {
    const el = document.createElement(tag);
    el.setAttribute("id", id);
    return el
}

const createLink = (text, src) => {
    const el = document.createElement("a");
    el.setAttribute("target", "_blank");
    el.setAttribute("href", src);
    el.textContent = text;
    return el
}

const addClasses = (node, classes) => {
    const classList = classes.split(" ");
    for (let className of classList) {
        node.classList.add(className);
    }
}



/***/ }),

/***/ "./src/Main.js":
/*!*********************!*\
  !*** ./src/Main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DomHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomHelper.js */ "./src/DomHelper.js");
/* harmony import */ var _pages_Home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/Home.js */ "./src/pages/Home.js");
/* harmony import */ var _pages_Menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Menu.js */ "./src/pages/Menu.js");




const Main = (function () {
    let mainContent;
    const pages = {
        Home: (0,_pages_Home_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        Menu: (0,_pages_Menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
    }

    const init = () => {
        mainContent = (0,_DomHelper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "page-main")
        mainContent.appendChild(pages["Home"])

        return mainContent
    }

    const setContent = (page) => {
        clearMain();
        mainContent.appendChild(pages[page]);
    }

    const clearMain = () => {
        mainContent.innerHTML = "";
    }

    return {
        init,
        setContent,
        get node() {
            return mainContent
        }
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./src/Nav.js":
/*!********************!*\
  !*** ./src/Nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DomHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomHelper */ "./src/DomHelper.js");
/* harmony import */ var _Main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.js */ "./src/Main.js");



const Nav = (function () {
    const navs = ["Home", "Menu"];
    let navNode, currentActive;

    const init = () => {
        const el = (0,_DomHelper__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "page-navbar");
        const navLinks = (0,_DomHelper__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", "nav-links");
        navs.forEach((nav) => {
            const li = document.createElement("li");
            const p = document.createElement("p");
            li.setAttribute("data-nav", nav);
            p.textContent = nav;
            li.appendChild(p);
            li.addEventListener("click", navigate);
            navLinks.appendChild(li);
        })

        el.appendChild(navLinks);
        navNode = el;
        setActiveNav(navs[0]);
    }

    const navigate = (event) => {
        const target = event.target.getAttribute("data-nav") || event.target.parentElement.getAttribute("data-nav");
        setActiveNav(target);
        _Main_js__WEBPACK_IMPORTED_MODULE_1__["default"].setContent(target);
    }

    const setActiveNav = (nav) => {
        if (currentActive) clearActive();

        const activeNav = navNode.querySelector(`[data-nav="${nav}"]`);
        activeNav.classList.add("active");
        activeNav.removeEventListener("click", navigate);
        currentActive = activeNav;
    }

    const clearActive = () => {
        currentActive.classList.remove("active");
        currentActive.addEventListener("click", navigate);
    }

    return {
        init,
        get node() {
            return navNode
        }
    }
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ "./src/PageConstructor.js":
/*!********************************!*\
  !*** ./src/PageConstructor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initPage": () => (/* binding */ initPage)
/* harmony export */ });
/* harmony import */ var _DomHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomHelper.js */ "./src/DomHelper.js");
/* harmony import */ var _Nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav.js */ "./src/Nav.js");
/* harmony import */ var _Main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.js */ "./src/Main.js");




const createHeader = () => {
    const el = (0,_DomHelper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "page-header");
    const header = document.createElement("header");
    header.textContent = "Sugar Rush Cafe"
    el.appendChild(header);
    return el
}

const createFooter = () => {
    const el = (0,_DomHelper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "page-footer");
    const footer = document.createElement("footer");
    const text = document.createTextNode("Not a real restaurant -by ");

    footer.appendChild(text);
    footer.appendChild((0,_DomHelper_js__WEBPACK_IMPORTED_MODULE_0__.createLink)("@mhanifmustakim", "https://github.com/mhanifmustakim"))
    el.appendChild(footer);
    return el
}

const createNavbar = () => {
    _Nav_js__WEBPACK_IMPORTED_MODULE_1__["default"].init();
    return _Nav_js__WEBPACK_IMPORTED_MODULE_1__["default"].node
}

const createMain = () => {
    _Main_js__WEBPACK_IMPORTED_MODULE_2__["default"].init();
    return _Main_js__WEBPACK_IMPORTED_MODULE_2__["default"].node
}

const initPage = () => {
    const content = document.querySelector("#content");
    content.appendChild(createHeader());
    content.appendChild(createNavbar());
    content.appendChild(createMain());
    content.appendChild(createFooter());
}



/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_Images_gabrielle_henderson_FqB_Kj7PZa8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/Images/gabrielle-henderson-FqB_Kj7PZa8-unsplash.jpg */ "./src/Images/gabrielle-henderson-FqB_Kj7PZa8-unsplash.jpg");
/* harmony import */ var _DomHelper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DomHelper.js */ "./src/DomHelper.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const home = (0,_DomHelper_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", "home");

    const mainText = document.createElement("h1");
    mainText.innerHTML = "Welcome to Sugar Rush Cafe";
    (0,_DomHelper_js__WEBPACK_IMPORTED_MODULE_1__.addClasses)(mainText, "text-center text-cursive");

    const p = document.createElement("p");
    p.classList.add("text-center");
    p.innerText = "Where sweet people to get sweeter."

    const img = document.createElement("img");
    img.src = _src_Images_gabrielle_henderson_FqB_Kj7PZa8_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__;

    home.appendChild(img);
    home.appendChild(mainText);
    home.appendChild(p);
    return home
}

/***/ }),

/***/ "./src/pages/Menu.js":
/*!***************************!*\
  !*** ./src/pages/Menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DomHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DomHelper.js */ "./src/DomHelper.js");
/* harmony import */ var _menu_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-data.js */ "./src/pages/menu-data.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
    const menu = (0,_DomHelper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menu");
    const header = document.createElement("h2");
    header.classList.add("text-cursive");
    header.textContent = "Our Menu";

    const menuContainer = document.createElement("div");
    for (let i = 0; i < _menu_data_js__WEBPACK_IMPORTED_MODULE_1__["default"].length; i++) {
        const thisMenu = _menu_data_js__WEBPACK_IMPORTED_MODULE_1__["default"][i];
        const div = document.createElement("section");
        div.classList.add("menu-section");

        const header = document.createElement("header");
        header.textContent = thisMenu.type;
        div.appendChild(header);

        const menuItemContainer = document.createElement("ul");
        menuItemContainer.classList.add("menuItemContainer");
        div.appendChild(menuItemContainer);

        for (let item of thisMenu.items) {
            const section = document.createElement("li");
            section.classList.add("menu-item");

            const img = document.createElement("img");
            img.src = item.img;
            section.appendChild(img);

            const name = document.createElement("p");
            name.textContent = item.name;
            section.appendChild(name);

            menuItemContainer.appendChild(section);
        }

        menuContainer.appendChild(div);
    }

    menu.appendChild(header);
    menu.appendChild(menuContainer);
    return menu
}

/***/ }),

/***/ "./src/pages/menu-data.js":
/*!********************************!*\
  !*** ./src/pages/menu-data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_Images_Brownies_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/Images/Brownies.jpg */ "./src/Images/Brownies.jpg");
/* harmony import */ var _src_Images_Batik_Cake_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../src/Images/Batik-Cake.jpg */ "./src/Images/Batik-Cake.jpg");
/* harmony import */ var _src_Images_Crepe_Cake_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/Images/Crepe-Cake.jpg */ "./src/Images/Crepe-Cake.jpg");
/* harmony import */ var _src_Images_Horseshoe_Cake_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/Images/Horseshoe-Cake.jpg */ "./src/Images/Horseshoe-Cake.jpg");
/* harmony import */ var _src_Images_Yogurt_Ice_Cream_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/Images/Yogurt-Ice-Cream.jpg */ "./src/Images/Yogurt-Ice-Cream.jpg");
/* harmony import */ var _src_Images_Ice_Cream_Cone_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../src/Images/Ice-Cream-Cone.jpg */ "./src/Images/Ice-Cream-Cone.jpg");
/* harmony import */ var _src_Images_Coated_Ice_Cream_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../src/Images/Coated-Ice-Cream.jpg */ "./src/Images/Coated-Ice-Cream.jpg");
/* harmony import */ var _src_Images_Avocado_Ice_Cream_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../src/Images/Avocado-Ice-Cream.jpg */ "./src/Images/Avocado-Ice-Cream.jpg");
/* harmony import */ var _src_Images_Chocolate_Truffles_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../src/Images/Chocolate-Truffles.jpg */ "./src/Images/Chocolate-Truffles.jpg");
/* harmony import */ var _src_Images_Gummy_Eyeballs_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../../src/Images/Gummy-Eyeballs.jpg */ "./src/Images/Gummy-Eyeballs.jpg");











const data = [
    {
        type: "Cakes",
        items: [
            {
                img: _src_Images_Brownies_jpg__WEBPACK_IMPORTED_MODULE_0__,
                name: "Brownies"
            },
            {
                img: _src_Images_Batik_Cake_jpg__WEBPACK_IMPORTED_MODULE_1__,
                name: "Batik Cake"
            },
            {
                img: _src_Images_Crepe_Cake_jpg__WEBPACK_IMPORTED_MODULE_2__,
                name: "Crepe Cake"
            },
            {
                img: _src_Images_Horseshoe_Cake_jpg__WEBPACK_IMPORTED_MODULE_3__,
                name: "Horseshoe Cake"
            },
        ]
    },
    {
        type: "Ice Creams",
        items: [
            {
                img: _src_Images_Yogurt_Ice_Cream_jpg__WEBPACK_IMPORTED_MODULE_4__,
                name: "Yogurt Ice Cream"
            },
            {
                img: _src_Images_Ice_Cream_Cone_jpg__WEBPACK_IMPORTED_MODULE_5__,
                name: "Ice Cream Cone"
            },
            {
                img: _src_Images_Coated_Ice_Cream_jpg__WEBPACK_IMPORTED_MODULE_6__,
                name: "Coated Ice Cream"
            },
            {
                img: _src_Images_Avocado_Ice_Cream_jpg__WEBPACK_IMPORTED_MODULE_7__,
                name: "Avocado Ice Cream"
            },
        ]
    },
    {
        type: "Chocolate & Candies",
        items: [
            {
                img: _src_Images_Chocolate_Truffles_jpg__WEBPACK_IMPORTED_MODULE_8__,
                name: "Chocolate Truffles"
            },
            {
                img: _src_Images_Gummy_Eyeballs_jpg__WEBPACK_IMPORTED_MODULE_9__,
                name: "Gummy Eyeballs"
            }
        ]
    },
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (data);

/***/ }),

/***/ "./src/Images/Avocado-Ice-Cream.jpg":
/*!******************************************!*\
  !*** ./src/Images/Avocado-Ice-Cream.jpg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db68db55bc334e482839.jpg";

/***/ }),

/***/ "./src/Images/Batik-Cake.jpg":
/*!***********************************!*\
  !*** ./src/Images/Batik-Cake.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f77902beeb8639b845c7.jpg";

/***/ }),

/***/ "./src/Images/Brownies.jpg":
/*!*********************************!*\
  !*** ./src/Images/Brownies.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1d61aed4554e6dace51f.jpg";

/***/ }),

/***/ "./src/Images/Chocolate-Truffles.jpg":
/*!*******************************************!*\
  !*** ./src/Images/Chocolate-Truffles.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbd181f857cc2488befa.jpg";

/***/ }),

/***/ "./src/Images/Coated-Ice-Cream.jpg":
/*!*****************************************!*\
  !*** ./src/Images/Coated-Ice-Cream.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "77b246babce4fade5dfe.jpg";

/***/ }),

/***/ "./src/Images/Crepe-Cake.jpg":
/*!***********************************!*\
  !*** ./src/Images/Crepe-Cake.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f000c77d9f26f366e88.jpg";

/***/ }),

/***/ "./src/Images/Gummy-Eyeballs.jpg":
/*!***************************************!*\
  !*** ./src/Images/Gummy-Eyeballs.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "15ff5478ca22d79d5d13.jpg";

/***/ }),

/***/ "./src/Images/Horseshoe-Cake.jpg":
/*!***************************************!*\
  !*** ./src/Images/Horseshoe-Cake.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f0c58d0abca83b679d89.jpg";

/***/ }),

/***/ "./src/Images/Ice-Cream-Cone.jpg":
/*!***************************************!*\
  !*** ./src/Images/Ice-Cream-Cone.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2cc197a73a523272f3b8.jpg";

/***/ }),

/***/ "./src/Images/Yogurt-Ice-Cream.jpg":
/*!*****************************************!*\
  !*** ./src/Images/Yogurt-Ice-Cream.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3749dd2eb6fb89a7911.jpg";

/***/ }),

/***/ "./src/Images/gabrielle-henderson-FqB_Kj7PZa8-unsplash.jpg":
/*!*****************************************************************!*\
  !*** ./src/Images/gabrielle-henderson-FqB_Kj7PZa8-unsplash.jpg ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "14ccb0739c017759fecf.jpg";

/***/ }),

/***/ "./src/fonts/Pacifico-Regular.woff":
/*!*****************************************!*\
  !*** ./src/fonts/Pacifico-Regular.woff ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "adbb6b22573098c5926a.woff";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageConstructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageConstructor.js */ "./src/PageConstructor.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



(0,_PageConstructor_js__WEBPACK_IMPORTED_MODULE_0__.initPage)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLCtEQUFzQjtBQUMzQztBQUNBLGFBQWE7QUFDYjtBQUNBLHFCQUFxQiwyREFBa0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNyRWY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQWdEO0FBQzNCOztBQUVyQiw2REFBUSxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vc3JjL0RvbUhlbHBlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL3NyYy9NYWluLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vc3JjL05hdi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL3NyYy9QYWdlQ29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9zcmMvcGFnZXMvSG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL3NyYy9wYWdlcy9NZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vc3JjL3BhZ2VzL21lbnUtZGF0YS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL1BhY2lmaWNvLVJlZ3VsYXIud29mZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1iZy1jb2xvcjogI0EwRTdFNTtcXG4gICAgLS1oZWFkZXItY29sb3I6ICNGQkU3QzY7XFxuICAgIC0tdGl0bGUtY29sb3I6ICM4QjA1RkE7XFxuICAgIC0tYWN0aXZlLW5hdi1jb2xvcjogI2ZmZGNhNTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQYWNpZmljb1xcXCI7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4udGV4dC1jdXJzaXZlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQYWNpZmljb1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50ZXh0LWNlbnRlciB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDVyZW0gM3JlbSBhdXRvIDNyZW0gLyAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgICAgICBcXFwiaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcIm5hdmJhclxcXCJcXG4gICAgICAgIFxcXCJtYWluXFxcIlxcbiAgICAgICAgXFxcImZvb3RlclxcXCI7XFxufVxcblxcbiNwYWdlLWhlYWRlcixcXG4jcGFnZS1mb290ZXIsXFxuI3BhZ2UtbmF2YmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyLWNvbG9yKTtcXG59XFxuXFxuI3BhZ2UtaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnUGFjaWZpY28nLCBzYW5zLXNlcmlmO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3BhZ2UtbmF2YmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBuYXZiYXI7XFxufVxcblxcbiNuYXYtbGlua3Mge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiBtaW4oMTAwdncsIDEwMDBweCk7XFxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUGFjaWZpY29cXFwiLCBzYW5zLXNlcmlmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuYXYtbGlua3M+bGkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbmF2LWxpbmtzPmxpOjptYXJrZXIge1xcbiAgICBjb250ZW50OiBub25lO1xcbn1cXG5cXG4jbmF2LWxpbmtzPmxpLmFjdGl2ZSB7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWN0aXZlLW5hdi1jb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSB2YXIoLS1hY3RpdmUtbmF2LWNvbG9yKTtcXG59XFxuXFxuI3BhZ2UtbWFpbiB7XFxuICAgIGdyaWQtYXJlYTogbWFpbjtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBhZGRpbmc6IGNsYW1wKDFyZW0sIDN2dywgMnJlbSk7XFxuICAgIHdpZHRoOiBtaW4oMTAwdncsIDEwMDBweCk7XFxufVxcblxcbiNob21lIHtcXG4gICAgbWluLWhlaWdodDogMTAwJTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDN2dywgMnJlbSk7XFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgyLCBhdXRvKSAvIDFmcjtcXG4gICAgZ2FwOiBjbGFtcCgxcmVtLCAzdmgsIDJyZW0pO1xcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNob21lPmltZyB7XFxuICAgIC0tc2l6ZTogY2FsYygxMDB2dyAtIDJyZW0pO1xcbiAgICAtLW1heC1zaXplOiBjYWxjKDUwMHB4IC0gMnJlbSk7XFxuICAgIHdpZHRoOiB2YXIoLS1zaXplKTtcXG4gICAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXG4gICAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtc2l6ZSk7XFxuICAgIG1heC1oZWlnaHQ6IHZhcigtLW1heC1zaXplKTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcblxcbiNob21lPmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbiNtZW51IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogM3JlbSBhdXRvIC8gYXV0bztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBnYXA6IDJyZW07XFxufVxcblxcbiNtZW51PmgyIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5tZW51LXNlY3Rpb24+aGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLm1lbnVJdGVtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbTo6bWFya2VyIHtcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxuLm1lbnUtaXRlbT5pbWcge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4ubWVudS1pdGVtPnAge1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4jcGFnZS1mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwYWdlLWZvb3RlciBhIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHNIQUFzSDtBQUMxSDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwyREFBd0Q7SUFDeEQsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDOzs7O2dCQUlZO0FBQ2hCOztBQUVBOzs7SUFHSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQix5Q0FBeUM7SUFDekMsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQywyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyREFBMkQ7SUFDM0QsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gICAgLS1iZy1jb2xvcjogI0EwRTdFNTtcXG4gICAgLS1oZWFkZXItY29sb3I6ICNGQkU3QzY7XFxuICAgIC0tdGl0bGUtY29sb3I6ICM4QjA1RkE7XFxuICAgIC0tYWN0aXZlLW5hdi1jb2xvcjogI2ZmZGNhNTtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQYWNpZmljb1xcXCI7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL1BhY2lmaWNvLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi50ZXh0LWN1cnNpdmUge1xcbiAgICBmb250LWZhbWlseTogXFxcIlBhY2lmaWNvXFxcIiwgc2Fucy1zZXJpZjtcXG59XFxuXFxuLnRleHQtY2VudGVyIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNXJlbSAzcmVtIGF1dG8gM3JlbSAvIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJoZWFkZXJcXFwiXFxuICAgICAgICBcXFwibmF2YmFyXFxcIlxcbiAgICAgICAgXFxcIm1haW5cXFwiXFxuICAgICAgICBcXFwiZm9vdGVyXFxcIjtcXG59XFxuXFxuI3BhZ2UtaGVhZGVyLFxcbiNwYWdlLWZvb3RlcixcXG4jcGFnZS1uYXZiYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXItY29sb3IpO1xcbn1cXG5cXG4jcGFnZS1oZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgZm9udC1mYW1pbHk6ICdQYWNpZmljbycsIHNhbnMtc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcGFnZS1uYXZiYXIge1xcbiAgICBncmlkLWFyZWE6IG5hdmJhcjtcXG59XFxuXFxuI25hdi1saW5rcyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IG1pbigxMDB2dywgMTAwMHB4KTtcXG4gICAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQYWNpZmljb1xcXCIsIHNhbnMtc2VyaWY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25hdi1saW5rcz5saSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNuYXYtbGlua3M+bGk6Om1hcmtlciB7XFxuICAgIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbiNuYXYtbGlua3M+bGkuYWN0aXZlIHtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMC41cmVtO1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtbmF2LWNvbG9yKTtcXG4gICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIHZhcigtLWFjdGl2ZS1uYXYtY29sb3IpO1xcbn1cXG5cXG4jcGFnZS1tYWluIHtcXG4gICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZzogY2xhbXAoMXJlbSwgM3Z3LCAycmVtKTtcXG4gICAgd2lkdGg6IG1pbigxMDB2dywgMTAwMHB4KTtcXG59XFxuXFxuI2hvbWUge1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgM3Z3LCAycmVtKTtcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDIsIGF1dG8pIC8gMWZyO1xcbiAgICBnYXA6IGNsYW1wKDFyZW0sIDN2aCwgMnJlbSk7XFxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2hvbWU+aW1nIHtcXG4gICAgLS1zaXplOiBjYWxjKDEwMHZ3IC0gMnJlbSk7XFxuICAgIC0tbWF4LXNpemU6IGNhbGMoNTAwcHggLSAycmVtKTtcXG4gICAgd2lkdGg6IHZhcigtLXNpemUpO1xcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUpO1xcbiAgICBtYXgtd2lkdGg6IHZhcigtLW1heC1zaXplKTtcXG4gICAgbWF4LWhlaWdodDogdmFyKC0tbWF4LXNpemUpO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuI2hvbWU+aDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuI21lbnUge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiAzcmVtIGF1dG8gLyBhdXRvO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGdhcDogMnJlbTtcXG59XFxuXFxuI21lbnU+aDIge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLm1lbnUtc2VjdGlvbj5oZWFkZXIge1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcbn1cXG5cXG4ubWVudUl0ZW1Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDM1MHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ubWVudS1pdGVtOjptYXJrZXIge1xcbiAgICBjb250ZW50OiBub25lO1xcbn1cXG5cXG4ubWVudS1pdGVtPmltZyB7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxcmVtKTtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbi5tZW51LWl0ZW0+cCB7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcbiNwYWdlLWZvb3RlciB7XFxuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3BhZ2UtZm9vdGVyIGEge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodGFnLCBpZCkgPT4ge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgIGVsLnNldEF0dHJpYnV0ZShcImlkXCIsIGlkKTtcbiAgICByZXR1cm4gZWxcbn1cblxuY29uc3QgY3JlYXRlTGluayA9ICh0ZXh0LCBzcmMpID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIGVsLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHNyYyk7XG4gICAgZWwudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIHJldHVybiBlbFxufVxuXG5jb25zdCBhZGRDbGFzc2VzID0gKG5vZGUsIGNsYXNzZXMpID0+IHtcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBjbGFzc2VzLnNwbGl0KFwiIFwiKTtcbiAgICBmb3IgKGxldCBjbGFzc05hbWUgb2YgY2xhc3NMaXN0KSB7XG4gICAgICAgIG5vZGUuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbn1cblxuZXhwb3J0IHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlTGluaywgYWRkQ2xhc3NlcyB9IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4vRG9tSGVscGVyLmpzJztcbmltcG9ydCBIb21lUGFnZSBmcm9tIFwiLi9wYWdlcy9Ib21lLmpzXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi9wYWdlcy9NZW51LmpzXCI7XG5cbmNvbnN0IE1haW4gPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBtYWluQ29udGVudDtcbiAgICBjb25zdCBwYWdlcyA9IHtcbiAgICAgICAgSG9tZTogSG9tZVBhZ2UoKSxcbiAgICAgICAgTWVudTogTWVudSgpXG4gICAgfVxuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgbWFpbkNvbnRlbnQgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicGFnZS1tYWluXCIpXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHBhZ2VzW1wiSG9tZVwiXSlcblxuICAgICAgICByZXR1cm4gbWFpbkNvbnRlbnRcbiAgICB9XG5cbiAgICBjb25zdCBzZXRDb250ZW50ID0gKHBhZ2UpID0+IHtcbiAgICAgICAgY2xlYXJNYWluKCk7XG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHBhZ2VzW3BhZ2VdKTtcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhck1haW4gPSAoKSA9PiB7XG4gICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdCxcbiAgICAgICAgc2V0Q29udGVudCxcbiAgICAgICAgZ2V0IG5vZGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gbWFpbkNvbnRlbnRcbiAgICAgICAgfVxuICAgIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTWFpbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9Eb21IZWxwZXJcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuL01haW4uanNcIjtcblxuY29uc3QgTmF2ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBuYXZzID0gW1wiSG9tZVwiLCBcIk1lbnVcIl07XG4gICAgbGV0IG5hdk5vZGUsIGN1cnJlbnRBY3RpdmU7XG5cbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBlbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwYWdlLW5hdmJhclwiKTtcbiAgICAgICAgY29uc3QgbmF2TGlua3MgPSBjcmVhdGVFbGVtZW50KFwidWxcIiwgXCJuYXYtbGlua3NcIik7XG4gICAgICAgIG5hdnMuZm9yRWFjaCgobmF2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImRhdGEtbmF2XCIsIG5hdik7XG4gICAgICAgICAgICBwLnRleHRDb250ZW50ID0gbmF2O1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQocCk7XG4gICAgICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2aWdhdGUpO1xuICAgICAgICAgICAgbmF2TGlua3MuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKG5hdkxpbmtzKTtcbiAgICAgICAgbmF2Tm9kZSA9IGVsO1xuICAgICAgICBzZXRBY3RpdmVOYXYobmF2c1swXSk7XG4gICAgfVxuXG4gICAgY29uc3QgbmF2aWdhdGUgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbmF2XCIpIHx8IGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbmF2XCIpO1xuICAgICAgICBzZXRBY3RpdmVOYXYodGFyZ2V0KTtcbiAgICAgICAgTWFpbi5zZXRDb250ZW50KHRhcmdldCk7XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0QWN0aXZlTmF2ID0gKG5hdikgPT4ge1xuICAgICAgICBpZiAoY3VycmVudEFjdGl2ZSkgY2xlYXJBY3RpdmUoKTtcblxuICAgICAgICBjb25zdCBhY3RpdmVOYXYgPSBuYXZOb2RlLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW5hdj1cIiR7bmF2fVwiXWApO1xuICAgICAgICBhY3RpdmVOYXYuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgYWN0aXZlTmF2LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZpZ2F0ZSk7XG4gICAgICAgIGN1cnJlbnRBY3RpdmUgPSBhY3RpdmVOYXY7XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJBY3RpdmUgPSAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgY3VycmVudEFjdGl2ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2aWdhdGUpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQsXG4gICAgICAgIGdldCBub2RlKCkge1xuICAgICAgICAgICAgcmV0dXJuIG5hdk5vZGVcbiAgICAgICAgfVxuICAgIH1cbn0pKClcblxuZXhwb3J0IGRlZmF1bHQgTmF2IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY3JlYXRlTGluayB9IGZyb20gJy4vRG9tSGVscGVyLmpzJztcbmltcG9ydCBOYXYgZnJvbSAnLi9OYXYuanMnO1xuaW1wb3J0IE1haW4gZnJvbSAnLi9NYWluLmpzJztcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGVsID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInBhZ2UtaGVhZGVyXCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJTdWdhciBSdXNoIENhZmVcIlxuICAgIGVsLmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgcmV0dXJuIGVsXG59XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBlbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwYWdlLWZvb3RlclwiKTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIk5vdCBhIHJlYWwgcmVzdGF1cmFudCAtYnkgXCIpO1xuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKFwiQG1oYW5pZm11c3Rha2ltXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL21oYW5pZm11c3Rha2ltXCIpKVxuICAgIGVsLmFwcGVuZENoaWxkKGZvb3Rlcik7XG4gICAgcmV0dXJuIGVsXG59XG5cbmNvbnN0IGNyZWF0ZU5hdmJhciA9ICgpID0+IHtcbiAgICBOYXYuaW5pdCgpO1xuICAgIHJldHVybiBOYXYubm9kZVxufVxuXG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT4ge1xuICAgIE1haW4uaW5pdCgpO1xuICAgIHJldHVybiBNYWluLm5vZGVcbn1cblxuY29uc3QgaW5pdFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU5hdmJhcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSk7XG59XG5cbmV4cG9ydCB7IGluaXRQYWdlIH0iLCJpbXBvcnQgSG9tZVBhZ2VJbWFnZSBmcm9tIFwiL3NyYy9JbWFnZXMvZ2FicmllbGxlLWhlbmRlcnNvbi1GcUJfS2o3UFphOC11bnNwbGFzaC5qcGdcIjtcbmltcG9ydCB7IGFkZENsYXNzZXMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi9Eb21IZWxwZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgaG9tZSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJob21lXCIpO1xuXG4gICAgY29uc3QgbWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgbWFpblRleHQuaW5uZXJIVE1MID0gXCJXZWxjb21lIHRvIFN1Z2FyIFJ1c2ggQ2FmZVwiO1xuICAgIGFkZENsYXNzZXMobWFpblRleHQsIFwidGV4dC1jZW50ZXIgdGV4dC1jdXJzaXZlXCIpO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHAuY2xhc3NMaXN0LmFkZChcInRleHQtY2VudGVyXCIpO1xuICAgIHAuaW5uZXJUZXh0ID0gXCJXaGVyZSBzd2VldCBwZW9wbGUgdG8gZ2V0IHN3ZWV0ZXIuXCJcblxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1nLnNyYyA9IEhvbWVQYWdlSW1hZ2U7XG5cbiAgICBob21lLmFwcGVuZENoaWxkKGltZyk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChtYWluVGV4dCk7XG4gICAgaG9tZS5hcHBlbmRDaGlsZChwKTtcbiAgICByZXR1cm4gaG9tZVxufSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vRG9tSGVscGVyLmpzXCI7XG5pbXBvcnQgbWVudURhdGEgZnJvbSBcIi4vbWVudS1kYXRhLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBtZW51ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1lbnVcIik7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwidGV4dC1jdXJzaXZlXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiT3VyIE1lbnVcIjtcblxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWVudURhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGhpc01lbnUgPSBtZW51RGF0YVtpXTtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibWVudS1zZWN0aW9uXCIpO1xuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRoaXNNZW51LnR5cGU7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBtZW51SXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1Db250YWluZXJcIik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChtZW51SXRlbUNvbnRhaW5lcik7XG5cbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzTWVudS5pdGVtcykge1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBpdGVtLmltZztcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICAgICAgICAgIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICAgIHJldHVybiBtZW51XG59IiwiaW1wb3J0IEJyb3duaWVzSW1hZ2UgZnJvbSBcIi9zcmMvSW1hZ2VzL0Jyb3duaWVzLmpwZ1wiO1xuaW1wb3J0IEJhdGlrQ2FrZUltYWdlIGZyb20gXCIvc3JjL0ltYWdlcy9CYXRpay1DYWtlLmpwZ1wiO1xuaW1wb3J0IENyZXBlQ2FrZUltYWdlIGZyb20gXCIvc3JjL0ltYWdlcy9DcmVwZS1DYWtlLmpwZ1wiO1xuaW1wb3J0IEhvcnNlU2hvZUNha2VJbWFnZSBmcm9tIFwiL3NyYy9JbWFnZXMvSG9yc2VzaG9lLUNha2UuanBnXCI7XG5pbXBvcnQgWW9ndXJ0SWNlQ3JlYW1JbWFnZSBmcm9tIFwiL3NyYy9JbWFnZXMvWW9ndXJ0LUljZS1DcmVhbS5qcGdcIjtcbmltcG9ydCBJY2VDcmVhbUNvbmVJbWFnZSBmcm9tIFwiL3NyYy9JbWFnZXMvSWNlLUNyZWFtLUNvbmUuanBnXCI7XG5pbXBvcnQgQ29hdGVkSWNlQ3JlYW1JbWFnZSBmcm9tIFwiL3NyYy9JbWFnZXMvQ29hdGVkLUljZS1DcmVhbS5qcGdcIjtcbmltcG9ydCBBdm9jYWRvSWNlQ3JlYW1JbWFnZSBmcm9tIFwiL3NyYy9JbWFnZXMvQXZvY2Fkby1JY2UtQ3JlYW0uanBnXCI7XG5pbXBvcnQgQ2hvY29sYXRlVHJ1ZmZsZXNJbWFnZSBmcm9tIFwiL3NyYy9JbWFnZXMvQ2hvY29sYXRlLVRydWZmbGVzLmpwZ1wiO1xuaW1wb3J0IEd1bW15RXllYmFsbHNJbWFnZSBmcm9tIFwiL3NyYy9JbWFnZXMvR3VtbXktRXllYmFsbHMuanBnXCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgICB0eXBlOiBcIkNha2VzXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiBCcm93bmllc0ltYWdlLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQnJvd25pZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWc6IEJhdGlrQ2FrZUltYWdlLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmF0aWsgQ2FrZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzogQ3JlcGVDYWtlSW1hZ2UsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDcmVwZSBDYWtlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiBIb3JzZVNob2VDYWtlSW1hZ2UsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJIb3JzZXNob2UgQ2FrZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6IFwiSWNlIENyZWFtc1wiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzogWW9ndXJ0SWNlQ3JlYW1JbWFnZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBcIllvZ3VydCBJY2UgQ3JlYW1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWc6IEljZUNyZWFtQ29uZUltYWdlLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiSWNlIENyZWFtIENvbmVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWc6IENvYXRlZEljZUNyZWFtSW1hZ2UsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb2F0ZWQgSWNlIENyZWFtXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiBBdm9jYWRvSWNlQ3JlYW1JbWFnZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkF2b2NhZG8gSWNlIENyZWFtXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdHlwZTogXCJDaG9jb2xhdGUgJiBDYW5kaWVzXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiBDaG9jb2xhdGVUcnVmZmxlc0ltYWdlLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2hvY29sYXRlIFRydWZmbGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiBHdW1teUV5ZWJhbGxzSW1hZ2UsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJHdW1teSBFeWViYWxsc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBkYXRhIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXRQYWdlIH0gZnJvbSAnLi9QYWdlQ29uc3RydWN0b3IuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmluaXRQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9