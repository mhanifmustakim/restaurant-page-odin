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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --bg-color: #A0E7E5;\n    --header-color: #FBE7C6;\n    --title-color: #8B05FA;\n    --active-nav-color: #ffdca5;\n    font-size: 16px;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n@font-face {\n    font-family: \"Pacifico\";\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-size: inherit;\n    color: inherit;\n    text-decoration: inherit;\n}\n\n.text-cursive {\n    font-family: \"Pacifico\", sans-serif;\n}\n\n.text-center {\n    text-align: center;\n}\n\n#content {\n    width: 100vw;\n    min-height: 100vh;\n    background-color: var(--bg-color);\n    display: grid;\n    grid-template: 5rem 3rem auto 3rem / 1fr;\n    grid-template-areas:\n        \"header\"\n        \"navbar\"\n        \"main\"\n        \"footer\";\n}\n\n#page-header,\n#page-footer,\n#page-navbar {\n    background-color: var(--header-color);\n}\n\n#page-header {\n    grid-area: header;\n    padding: 1rem 0;\n    color: var(--title-color);\n    font-size: 2.5rem;\n    font-family: 'Pacifico', sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#page-navbar {\n    grid-area: navbar;\n}\n\n#nav-links {\n    height: 100%;\n    width: min(100vw, 1000px);\n    padding: 0.25rem 1rem;\n    margin: 0 auto;\n    font-family: \"Pacifico\", sans-serif;\n    text-align: center;\n    display: grid;\n    grid-auto-flow: column;\n    place-items: center;\n}\n\n#nav-links>li {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n#nav-links>li::marker {\n    content: none;\n}\n\n#nav-links>li.active {\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    background-color: var(--active-nav-color);\n    box-shadow: 0 0.25rem var(--active-nav-color);\n}\n\n#page-main {\n    grid-area: main;\n    margin: 0 auto;\n    padding: clamp(1rem, 3vw, 2rem);\n    width: min(100vw, 1000px);\n}\n\n#home {\n    min-height: 100%;\n    font-size: clamp(1.2rem, 3vw, 2rem);\n    color: var(--title-color);\n    display: grid;\n    grid-template: repeat(2, auto) / 1fr;\n    gap: clamp(1rem, 3vh, 2rem);\n    place-content: center;\n}\n\n#home>img {\n    --size: calc(100vw - 2rem);\n    --max-size: calc(500px - 2rem);\n    width: var(--size);\n    height: var(--size);\n    max-width: var(--max-size);\n    max-height: var(--max-size);\n    margin: 0 auto;\n    object-fit: cover;\n    border-radius: 50%;\n}\n\n#home>h1 {\n    font-size: 2em;\n}\n\n#menu {\n    display: grid;\n    grid-template: 3rem auto / auto;\n    text-align: center;\n    gap: 2rem;\n}\n\n#menu>h2 {\n    font-size: 2em;\n}\n\n#menuContainer {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 1rem;\n}\n\n.menu-section {\n    background-color: var(--active-nav-color);\n    border-radius: 1.5em;\n    padding: 0 1rem;\n    padding-bottom: 1rem;\n}\n\n.menu-section>header {\n    font-size: 1.5em;\n    width: 100%;\n    padding: 1rem 0;\n}\n\n.menuItemContainer {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n    gap: 1rem;\n}\n\n.menu-item::marker {\n    content: none;\n}\n\n.menu-item>img {\n    width: calc(100% - 1rem);\n    height: 350px;\n    border-radius: 2em;\n    object-fit: cover;\n    margin: 1rem 0;\n}\n\n.menu-item>p {\n    font-size: 1.2em;\n}\n\n#page-footer {\n    grid-area: footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#page-footer a {\n    font-weight: bold;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,2BAA2B;IAC3B,eAAe;IACf,sHAAsH;AAC1H;;AAEA;IACI,uBAAuB;IACvB,2DAAwD;IACxD,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;;;IAGI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,kBAAkB;IAClB,cAAc;IACd,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,iCAAiC;IACjC,aAAa;IACb,wCAAwC;IACxC;;;;gBAIY;AAChB;;AAEA;;;IAGI,qCAAqC;AACzC;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,yBAAyB;IACzB,iBAAiB;IACjB,mCAAmC;IACnC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,yBAAyB;IACzB,qBAAqB;IACrB,cAAc;IACd,mCAAmC;IACnC,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,8BAA8B;IAC9B,+BAA+B;IAC/B,yCAAyC;IACzC,6CAA6C;AACjD;;AAEA;IACI,eAAe;IACf,cAAc;IACd,+BAA+B;IAC/B,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,mCAAmC;IACnC,yBAAyB;IACzB,aAAa;IACb,oCAAoC;IACpC,2BAA2B;IAC3B,qBAAqB;AACzB;;AAEA;IACI,0BAA0B;IAC1B,8BAA8B;IAC9B,kBAAkB;IAClB,mBAAmB;IACnB,0BAA0B;IAC1B,2BAA2B;IAC3B,cAAc;IACd,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,+BAA+B;IAC/B,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,SAAS;AACb;;AAEA;IACI,yCAAyC;IACzC,oBAAoB;IACpB,eAAe;IACf,oBAAoB;AACxB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;AACb;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,kBAAkB;IAClB,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB","sourcesContent":[":root {\n    --bg-color: #A0E7E5;\n    --header-color: #FBE7C6;\n    --title-color: #8B05FA;\n    --active-nav-color: #ffdca5;\n    font-size: 16px;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n@font-face {\n    font-family: \"Pacifico\";\n    src: url('./fonts/Pacifico-Regular.woff') format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n\n*,\n*::before,\n*::after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-size: inherit;\n    color: inherit;\n    text-decoration: inherit;\n}\n\n.text-cursive {\n    font-family: \"Pacifico\", sans-serif;\n}\n\n.text-center {\n    text-align: center;\n}\n\n#content {\n    width: 100vw;\n    min-height: 100vh;\n    background-color: var(--bg-color);\n    display: grid;\n    grid-template: 5rem 3rem auto 3rem / 1fr;\n    grid-template-areas:\n        \"header\"\n        \"navbar\"\n        \"main\"\n        \"footer\";\n}\n\n#page-header,\n#page-footer,\n#page-navbar {\n    background-color: var(--header-color);\n}\n\n#page-header {\n    grid-area: header;\n    padding: 1rem 0;\n    color: var(--title-color);\n    font-size: 2.5rem;\n    font-family: 'Pacifico', sans-serif;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#page-navbar {\n    grid-area: navbar;\n}\n\n#nav-links {\n    height: 100%;\n    width: min(100vw, 1000px);\n    padding: 0.25rem 1rem;\n    margin: 0 auto;\n    font-family: \"Pacifico\", sans-serif;\n    text-align: center;\n    display: grid;\n    grid-auto-flow: column;\n    place-items: center;\n}\n\n#nav-links>li {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n#nav-links>li::marker {\n    content: none;\n}\n\n#nav-links>li.active {\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    background-color: var(--active-nav-color);\n    box-shadow: 0 0.25rem var(--active-nav-color);\n}\n\n#page-main {\n    grid-area: main;\n    margin: 0 auto;\n    padding: clamp(1rem, 3vw, 2rem);\n    width: min(100vw, 1000px);\n}\n\n#home {\n    min-height: 100%;\n    font-size: clamp(1.2rem, 3vw, 2rem);\n    color: var(--title-color);\n    display: grid;\n    grid-template: repeat(2, auto) / 1fr;\n    gap: clamp(1rem, 3vh, 2rem);\n    place-content: center;\n}\n\n#home>img {\n    --size: calc(100vw - 2rem);\n    --max-size: calc(500px - 2rem);\n    width: var(--size);\n    height: var(--size);\n    max-width: var(--max-size);\n    max-height: var(--max-size);\n    margin: 0 auto;\n    object-fit: cover;\n    border-radius: 50%;\n}\n\n#home>h1 {\n    font-size: 2em;\n}\n\n#menu {\n    display: grid;\n    grid-template: 3rem auto / auto;\n    text-align: center;\n    gap: 2rem;\n}\n\n#menu>h2 {\n    font-size: 2em;\n}\n\n#menuContainer {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 1rem;\n}\n\n.menu-section {\n    background-color: var(--active-nav-color);\n    border-radius: 1.5em;\n    padding: 0 1rem;\n    padding-bottom: 1rem;\n}\n\n.menu-section>header {\n    font-size: 1.5em;\n    width: 100%;\n    padding: 1rem 0;\n}\n\n.menuItemContainer {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\n    gap: 1rem;\n}\n\n.menu-item::marker {\n    content: none;\n}\n\n.menu-item>img {\n    width: calc(100% - 1rem);\n    height: 350px;\n    border-radius: 2em;\n    object-fit: cover;\n    margin: 1rem 0;\n}\n\n.menu-item>p {\n    font-size: 1.2em;\n}\n\n#page-footer {\n    grid-area: footer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#page-footer a {\n    font-weight: bold;\n}"],"sourceRoot":""}]);
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

    const menuContainer = (0,_DomHelper_js__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", "menuContainer");
    for (let i = 0; i < _menu_data_js__WEBPACK_IMPORTED_MODULE_1__["default"].length; i++) {
        const thisMenu = _menu_data_js__WEBPACK_IMPORTED_MODULE_1__["default"][i];
        const div = document.createElement("section");
        div.classList.add("menu-section");

        const header = document.createElement("header");
        header.classList.add("text-cursive");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0FnRDtBQUMzQjs7QUFFckIsNkRBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL3NyYy9Eb21IZWxwZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9zcmMvTWFpbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL3NyYy9OYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9zcmMvUGFnZUNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluLy4vc3JjL3BhZ2VzL0hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vLi9zcmMvcGFnZXMvTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL3NyYy9wYWdlcy9tZW51LWRhdGEuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLW9kaW4vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS1vZGluL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Utb2Rpbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9QYWNpZmljby1SZWd1bGFyLndvZmZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tYmctY29sb3I6ICNBMEU3RTU7XFxuICAgIC0taGVhZGVyLWNvbG9yOiAjRkJFN0M2O1xcbiAgICAtLXRpdGxlLWNvbG9yOiAjOEIwNUZBO1xcbiAgICAtLWFjdGl2ZS1uYXYtY29sb3I6ICNmZmRjYTU7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUGFjaWZpY29cXFwiO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLnRleHQtY3Vyc2l2ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUGFjaWZpY29cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiA1cmVtIDNyZW0gYXV0byAzcmVtIC8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJuYXZiYXJcXFwiXFxuICAgICAgICBcXFwibWFpblxcXCJcXG4gICAgICAgIFxcXCJmb290ZXJcXFwiO1xcbn1cXG5cXG4jcGFnZS1oZWFkZXIsXFxuI3BhZ2UtZm9vdGVyLFxcbiNwYWdlLW5hdmJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxufVxcblxcbiNwYWdlLWhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwYWdlLW5hdmJhciB7XFxuICAgIGdyaWQtYXJlYTogbmF2YmFyO1xcbn1cXG5cXG4jbmF2LWxpbmtzIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogbWluKDEwMHZ3LCAxMDAwcHgpO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBmb250LWZhbWlseTogXFxcIlBhY2lmaWNvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmF2LWxpbmtzPmxpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25hdi1saW5rcz5saTo6bWFya2VyIHtcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxuI25hdi1saW5rcz5saS5hY3RpdmUge1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1uYXYtY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gdmFyKC0tYWN0aXZlLW5hdi1jb2xvcik7XFxufVxcblxcbiNwYWdlLW1haW4ge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiBjbGFtcCgxcmVtLCAzdncsIDJyZW0pO1xcbiAgICB3aWR0aDogbWluKDEwMHZ3LCAxMDAwcHgpO1xcbn1cXG5cXG4jaG9tZSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAzdncsIDJyZW0pO1xcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwgYXV0bykgLyAxZnI7XFxuICAgIGdhcDogY2xhbXAoMXJlbSwgM3ZoLCAycmVtKTtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jaG9tZT5pbWcge1xcbiAgICAtLXNpemU6IGNhbGMoMTAwdncgLSAycmVtKTtcXG4gICAgLS1tYXgtc2l6ZTogY2FsYyg1MDBweCAtIDJyZW0pO1xcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXNpemUpO1xcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtc2l6ZSk7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4jaG9tZT5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDNyZW0gYXV0byAvIGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4jbWVudT5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4jbWVudUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5tZW51LXNlY3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtbmF2LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS41ZW07XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbi5tZW51LXNlY3Rpb24+aGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLm1lbnVJdGVtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbTo6bWFya2VyIHtcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxuLm1lbnUtaXRlbT5pbWcge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4ubWVudS1pdGVtPnAge1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4jcGFnZS1mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwYWdlLWZvb3RlciBhIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLHNIQUFzSDtBQUMxSDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwyREFBd0Q7SUFDeEQsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlDQUFpQztJQUNqQyxhQUFhO0lBQ2Isd0NBQXdDO0lBQ3hDOzs7O2dCQUlZO0FBQ2hCOztBQUVBOzs7SUFHSSxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsbUNBQW1DO0lBQ25DLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLG1DQUFtQztJQUNuQyxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQix5Q0FBeUM7SUFDekMsNkNBQTZDO0FBQ2pEOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQywyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsU0FBUztBQUNiOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWJnLWNvbG9yOiAjQTBFN0U1O1xcbiAgICAtLWhlYWRlci1jb2xvcjogI0ZCRTdDNjtcXG4gICAgLS10aXRsZS1jb2xvcjogIzhCMDVGQTtcXG4gICAgLS1hY3RpdmUtbmF2LWNvbG9yOiAjZmZkY2E1O1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogXFxcIlBhY2lmaWNvXFxcIjtcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvUGFjaWZpY28tUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgY29sb3I6IGluaGVyaXQ7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLnRleHQtY3Vyc2l2ZSB7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUGFjaWZpY29cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udGV4dC1jZW50ZXIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50IHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiA1cmVtIDNyZW0gYXV0byAzcmVtIC8gMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImhlYWRlclxcXCJcXG4gICAgICAgIFxcXCJuYXZiYXJcXFwiXFxuICAgICAgICBcXFwibWFpblxcXCJcXG4gICAgICAgIFxcXCJmb290ZXJcXFwiO1xcbn1cXG5cXG4jcGFnZS1oZWFkZXIsXFxuI3BhZ2UtZm9vdGVyLFxcbiNwYWdlLW5hdmJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlci1jb2xvcik7XFxufVxcblxcbiNwYWdlLWhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZS1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ1BhY2lmaWNvJywgc2Fucy1zZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwYWdlLW5hdmJhciB7XFxuICAgIGdyaWQtYXJlYTogbmF2YmFyO1xcbn1cXG5cXG4jbmF2LWxpbmtzIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogbWluKDEwMHZ3LCAxMDAwcHgpO1xcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBmb250LWZhbWlseTogXFxcIlBhY2lmaWNvXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmF2LWxpbmtzPmxpIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI25hdi1saW5rcz5saTo6bWFya2VyIHtcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxuI25hdi1saW5rcz5saS5hY3RpdmUge1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjdGl2ZS1uYXYtY29sb3IpO1xcbiAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gdmFyKC0tYWN0aXZlLW5hdi1jb2xvcik7XFxufVxcblxcbiNwYWdlLW1haW4ge1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwYWRkaW5nOiBjbGFtcCgxcmVtLCAzdncsIDJyZW0pO1xcbiAgICB3aWR0aDogbWluKDEwMHZ3LCAxMDAwcHgpO1xcbn1cXG5cXG4jaG9tZSB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAzdncsIDJyZW0pO1xcbiAgICBjb2xvcjogdmFyKC0tdGl0bGUtY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMiwgYXV0bykgLyAxZnI7XFxuICAgIGdhcDogY2xhbXAoMXJlbSwgM3ZoLCAycmVtKTtcXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jaG9tZT5pbWcge1xcbiAgICAtLXNpemU6IGNhbGMoMTAwdncgLSAycmVtKTtcXG4gICAgLS1tYXgtc2l6ZTogY2FsYyg1MDBweCAtIDJyZW0pO1xcbiAgICB3aWR0aDogdmFyKC0tc2l6ZSk7XFxuICAgIGhlaWdodDogdmFyKC0tc2l6ZSk7XFxuICAgIG1heC13aWR0aDogdmFyKC0tbWF4LXNpemUpO1xcbiAgICBtYXgtaGVpZ2h0OiB2YXIoLS1tYXgtc2l6ZSk7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5cXG4jaG9tZT5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4jbWVudSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGU6IDNyZW0gYXV0byAvIGF1dG87XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZ2FwOiAycmVtO1xcbn1cXG5cXG4jbWVudT5oMiB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4jbWVudUNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcbi5tZW51LXNlY3Rpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY3RpdmUtbmF2LWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMS41ZW07XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxufVxcblxcbi5tZW51LXNlY3Rpb24+aGVhZGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXG59XFxuXFxuLm1lbnVJdGVtQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzNTBweCwgMWZyKSk7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLm1lbnUtaXRlbTo6bWFya2VyIHtcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxuXFxuLm1lbnUtaXRlbT5pbWcge1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMXJlbSk7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIG1hcmdpbjogMXJlbSAwO1xcbn1cXG5cXG4ubWVudS1pdGVtPnAge1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG4jcGFnZS1mb290ZXIge1xcbiAgICBncmlkLWFyZWE6IGZvb3RlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNwYWdlLWZvb3RlciBhIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBjcmVhdGVFbGVtZW50ID0gKHRhZywgaWQpID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZCk7XG4gICAgcmV0dXJuIGVsXG59XG5cbmNvbnN0IGNyZWF0ZUxpbmsgPSAodGV4dCwgc3JjKSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICBlbC5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG4gICAgZWwuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBzcmMpO1xuICAgIGVsLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICByZXR1cm4gZWxcbn1cblxuY29uc3QgYWRkQ2xhc3NlcyA9IChub2RlLCBjbGFzc2VzKSA9PiB7XG4gICAgY29uc3QgY2xhc3NMaXN0ID0gY2xhc3Nlcy5zcGxpdChcIiBcIik7XG4gICAgZm9yIChsZXQgY2xhc3NOYW1lIG9mIGNsYXNzTGlzdCkge1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUxpbmssIGFkZENsYXNzZXMgfSIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuL0RvbUhlbHBlci5qcyc7XG5pbXBvcnQgSG9tZVBhZ2UgZnJvbSBcIi4vcGFnZXMvSG9tZS5qc1wiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4vcGFnZXMvTWVudS5qc1wiO1xuXG5jb25zdCBNYWluID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgbWFpbkNvbnRlbnQ7XG4gICAgY29uc3QgcGFnZXMgPSB7XG4gICAgICAgIEhvbWU6IEhvbWVQYWdlKCksXG4gICAgICAgIE1lbnU6IE1lbnUoKVxuICAgIH1cblxuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG4gICAgICAgIG1haW5Db250ZW50ID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcInBhZ2UtbWFpblwiKVxuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChwYWdlc1tcIkhvbWVcIl0pXG5cbiAgICAgICAgcmV0dXJuIG1haW5Db250ZW50XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0Q29udGVudCA9IChwYWdlKSA9PiB7XG4gICAgICAgIGNsZWFyTWFpbigpO1xuICAgICAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChwYWdlc1twYWdlXSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2xlYXJNYWluID0gKCkgPT4ge1xuICAgICAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQsXG4gICAgICAgIHNldENvbnRlbnQsXG4gICAgICAgIGdldCBub2RlKCkge1xuICAgICAgICAgICAgcmV0dXJuIG1haW5Db250ZW50XG4gICAgICAgIH1cbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IE1haW4iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vRG9tSGVscGVyXCI7XG5pbXBvcnQgTWFpbiBmcm9tIFwiLi9NYWluLmpzXCI7XG5cbmNvbnN0IE5hdiA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbmF2cyA9IFtcIkhvbWVcIiwgXCJNZW51XCJdO1xuICAgIGxldCBuYXZOb2RlLCBjdXJyZW50QWN0aXZlO1xuXG4gICAgY29uc3QgaW5pdCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZWwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicGFnZS1uYXZiYXJcIik7XG4gICAgICAgIGNvbnN0IG5hdkxpbmtzID0gY3JlYXRlRWxlbWVudChcInVsXCIsIFwibmF2LWxpbmtzXCIpO1xuICAgICAgICBuYXZzLmZvckVhY2goKG5hdikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdlwiLCBuYXYpO1xuICAgICAgICAgICAgcC50ZXh0Q29udGVudCA9IG5hdjtcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHApO1xuICAgICAgICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdmlnYXRlKTtcbiAgICAgICAgICAgIG5hdkxpbmtzLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfSlcblxuICAgICAgICBlbC5hcHBlbmRDaGlsZChuYXZMaW5rcyk7XG4gICAgICAgIG5hdk5vZGUgPSBlbDtcbiAgICAgICAgc2V0QWN0aXZlTmF2KG5hdnNbMF0pO1xuICAgIH1cblxuICAgIGNvbnN0IG5hdmlnYXRlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdlwiKSB8fCBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hdlwiKTtcbiAgICAgICAgc2V0QWN0aXZlTmF2KHRhcmdldCk7XG4gICAgICAgIE1haW4uc2V0Q29udGVudCh0YXJnZXQpO1xuICAgIH1cblxuICAgIGNvbnN0IHNldEFjdGl2ZU5hdiA9IChuYXYpID0+IHtcbiAgICAgICAgaWYgKGN1cnJlbnRBY3RpdmUpIGNsZWFyQWN0aXZlKCk7XG5cbiAgICAgICAgY29uc3QgYWN0aXZlTmF2ID0gbmF2Tm9kZS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1uYXY9XCIke25hdn1cIl1gKTtcbiAgICAgICAgYWN0aXZlTmF2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGFjdGl2ZU5hdi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2aWdhdGUpO1xuICAgICAgICBjdXJyZW50QWN0aXZlID0gYWN0aXZlTmF2O1xuICAgIH1cblxuICAgIGNvbnN0IGNsZWFyQWN0aXZlID0gKCkgPT4ge1xuICAgICAgICBjdXJyZW50QWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGN1cnJlbnRBY3RpdmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdmlnYXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0LFxuICAgICAgICBnZXQgbm9kZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBuYXZOb2RlXG4gICAgICAgIH1cbiAgICB9XG59KSgpXG5cbmV4cG9ydCBkZWZhdWx0IE5hdiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUxpbmsgfSBmcm9tICcuL0RvbUhlbHBlci5qcyc7XG5pbXBvcnQgTmF2IGZyb20gJy4vTmF2LmpzJztcbmltcG9ydCBNYWluIGZyb20gJy4vTWFpbi5qcyc7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBlbCA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJwYWdlLWhlYWRlclwiKTtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiU3VnYXIgUnVzaCBDYWZlXCJcbiAgICBlbC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIHJldHVybiBlbFxufVxuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZWwgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwicGFnZS1mb290ZXJcIik7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJOb3QgYSByZWFsIHJlc3RhdXJhbnQgLWJ5IFwiKTtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTGluayhcIkBtaGFuaWZtdXN0YWtpbVwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9taGFuaWZtdXN0YWtpbVwiKSlcbiAgICBlbC5hcHBlbmRDaGlsZChmb290ZXIpO1xuICAgIHJldHVybiBlbFxufVxuXG5jb25zdCBjcmVhdGVOYXZiYXIgPSAoKSA9PiB7XG4gICAgTmF2LmluaXQoKTtcbiAgICByZXR1cm4gTmF2Lm5vZGVcbn1cblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICBNYWluLmluaXQoKTtcbiAgICByZXR1cm4gTWFpbi5ub2RlXG59XG5cbmNvbnN0IGluaXRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXZiYXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpO1xufVxuXG5leHBvcnQgeyBpbml0UGFnZSB9IiwiaW1wb3J0IEhvbWVQYWdlSW1hZ2UgZnJvbSBcIi9zcmMvSW1hZ2VzL2dhYnJpZWxsZS1oZW5kZXJzb24tRnFCX0tqN1BaYTgtdW5zcGxhc2guanBnXCI7XG5pbXBvcnQgeyBhZGRDbGFzc2VzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSAnLi4vRG9tSGVscGVyLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGhvbWUgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiaG9tZVwiKTtcblxuICAgIGNvbnN0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIG1haW5UZXh0LmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBTdWdhciBSdXNoIENhZmVcIjtcbiAgICBhZGRDbGFzc2VzKG1haW5UZXh0LCBcInRleHQtY2VudGVyIHRleHQtY3Vyc2l2ZVwiKTtcblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNlbnRlclwiKTtcbiAgICBwLmlubmVyVGV4dCA9IFwiV2hlcmUgc3dlZXQgcGVvcGxlIHRvIGdldCBzd2VldGVyLlwiXG5cbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGltZy5zcmMgPSBIb21lUGFnZUltYWdlO1xuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQobWFpblRleHQpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQocCk7XG4gICAgcmV0dXJuIGhvbWVcbn0iLCJpbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL0RvbUhlbHBlci5qc1wiO1xuaW1wb3J0IG1lbnVEYXRhIGZyb20gXCIuL21lbnUtZGF0YS5qc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgbWVudSA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJtZW51XCIpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInRleHQtY3Vyc2l2ZVwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIk91ciBNZW51XCI7XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm1lbnVDb250YWluZXJcIik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtZW51RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0aGlzTWVudSA9IG1lbnVEYXRhW2ldO1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJtZW51LXNlY3Rpb25cIik7XG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWN1cnNpdmVcIik7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IHRoaXNNZW51LnR5cGU7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBtZW51SXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudUl0ZW1Db250YWluZXJcIik7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChtZW51SXRlbUNvbnRhaW5lcik7XG5cbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzTWVudS5pdGVtcykge1xuICAgICAgICAgICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuICAgICAgICAgICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBpdGVtLmltZztcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQobmFtZSk7XG5cbiAgICAgICAgICAgIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlY3Rpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIH1cblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuICAgIHJldHVybiBtZW51XG59IiwiaW1wb3J0IEJyb3duaWVzSW1hZ2UgZnJvbSBcIi9zcmMvSW1hZ2VzL0Jyb3duaWVzLmpwZ1wiO1xuaW1wb3J0IEJhdGlrQ2FrZUltYWdlIGZyb20gXCIvc3JjL0ltYWdlcy9CYXRpay1DYWtlLmpwZ1wiO1xuaW1wb3J0IENyZXBlQ2FrZUltYWdlIGZyb20gXCIvc3JjL0ltYWdlcy9DcmVwZS1DYWtlLmpwZ1wiO1xuaW1wb3J0IEhvcnNlU2hvZUNha2VJbWFnZSBmcm9tIFwiL3NyYy9JbWFnZXMvSG9yc2VzaG9lLUNha2UuanBnXCI7XG5pbXBvcnQgWW9ndXJ0SWNlQ3JlYW1JbWFnZSBmcm9tIFwiL3NyYy9JbWFnZXMvWW9ndXJ0LUljZS1DcmVhbS5qcGdcIjtcbmltcG9ydCBJY2VDcmVhbUNvbmVJbWFnZSBmcm9tIFwiL3NyYy9JbWFnZXMvSWNlLUNyZWFtLUNvbmUuanBnXCI7XG5pbXBvcnQgQ29hdGVkSWNlQ3JlYW1JbWFnZSBmcm9tIFwiL3NyYy9JbWFnZXMvQ29hdGVkLUljZS1DcmVhbS5qcGdcIjtcbmltcG9ydCBBdm9jYWRvSWNlQ3JlYW1JbWFnZSBmcm9tIFwiL3NyYy9JbWFnZXMvQXZvY2Fkby1JY2UtQ3JlYW0uanBnXCI7XG5pbXBvcnQgQ2hvY29sYXRlVHJ1ZmZsZXNJbWFnZSBmcm9tIFwiL3NyYy9JbWFnZXMvQ2hvY29sYXRlLVRydWZmbGVzLmpwZ1wiO1xuaW1wb3J0IEd1bW15RXllYmFsbHNJbWFnZSBmcm9tIFwiL3NyYy9JbWFnZXMvR3VtbXktRXllYmFsbHMuanBnXCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgICB0eXBlOiBcIkNha2VzXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiBCcm93bmllc0ltYWdlLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQnJvd25pZXNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWc6IEJhdGlrQ2FrZUltYWdlLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmF0aWsgQ2FrZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzogQ3JlcGVDYWtlSW1hZ2UsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDcmVwZSBDYWtlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiBIb3JzZVNob2VDYWtlSW1hZ2UsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJIb3JzZXNob2UgQ2FrZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6IFwiSWNlIENyZWFtc1wiLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGltZzogWW9ndXJ0SWNlQ3JlYW1JbWFnZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBcIllvZ3VydCBJY2UgQ3JlYW1cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWc6IEljZUNyZWFtQ29uZUltYWdlLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiSWNlIENyZWFtIENvbmVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbWc6IENvYXRlZEljZUNyZWFtSW1hZ2UsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJDb2F0ZWQgSWNlIENyZWFtXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiBBdm9jYWRvSWNlQ3JlYW1JbWFnZSxcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkF2b2NhZG8gSWNlIENyZWFtXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdHlwZTogXCJDaG9jb2xhdGUgJiBDYW5kaWVzXCIsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiBDaG9jb2xhdGVUcnVmZmxlc0ltYWdlLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ2hvY29sYXRlIFRydWZmbGVzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW1nOiBHdW1teUV5ZWJhbGxzSW1hZ2UsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJHdW1teSBFeWViYWxsc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9LFxuXVxuXG5leHBvcnQgZGVmYXVsdCBkYXRhIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGluaXRQYWdlIH0gZnJvbSAnLi9QYWdlQ29uc3RydWN0b3IuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmluaXRQYWdlKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9