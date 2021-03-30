"use weex:vue";
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
/*!******************************************************************************************!*\
  !*** E:/study/uni-app/在线点播app/main.js?{"page":"pages%2Fdetail-video%2FsubNVue%2Fvideo"} ***!
  \******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/detail-video/subNVue/video.nvue?mpType=page */ 4);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/detail-video/subNVue/video'\n        _pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_detail_video_subNVue_video_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQTZFO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsMEZBQUc7QUFDWCxRQUFRLDBGQUFHO0FBQ1gsUUFBUSwwRkFBRztBQUNYLGdCQUFnQiwwRkFBRyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgIFxuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9kZXRhaWwtdmlkZW8vc3ViTlZ1ZS92aWRlby5udnVlP21wVHlwZT1wYWdlJ1xuICAgICAgICBpZiAodHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnICYmICFQcm9taXNlLnByb3RvdHlwZS5maW5hbGx5KSB7XG4gICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuY29uc3RydWN0b3JcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZShjYWxsYmFjaygpKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyByZWFzb25cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2RldGFpbC12aWRlby9zdWJOVnVlL3ZpZGVvJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************************************!*\
  !*** E:/study/uni-app/在线点播app/main.js?{"type":"appStyle"} ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!************************************************************************!*\
  !*** E:/study/uni-app/在线点播app/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/study/uni-app/在线点播app/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "iconfont": {
    "fontFamily": "iconfont"
  },
  "view": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "text": {
    "fontSize": "28rpx",
    "lineHeight": 1.8,
    "color": "#0E151D"
  },
  "row": {
    "marginRight": "-20rpx",
    "marginLeft": "-20rpx",
    "flexWrap": "wrap",
    "flexDirection": "row"
  },
  "col-1": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "62.5rpx"
  },
  "col-2": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "125rpx"
  },
  "col-3": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "187.5rpx"
  },
  "col-4": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "250rpx"
  },
  "col-5": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "312.5rpx"
  },
  "col-6": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "375rpx"
  },
  "col-7": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "437.5rpx"
  },
  "col-8": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "500rpx"
  },
  "col-9": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "562.5rpx"
  },
  "col-10": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "625rpx"
  },
  "col-11": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "687.5rpx"
  },
  "col-12": {
    "position": "relative",
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx",
    "width": "750rpx"
  },
  "col-offset-12": {
    "marginLeft": "750rpx"
  },
  "col-offset-11": {
    "marginLeft": "687.5rpx"
  },
  "col-offset-10": {
    "marginLeft": "625rpx"
  },
  "col-offset-9": {
    "marginLeft": "562.5rpx"
  },
  "col-offset-8": {
    "marginLeft": "500rpx"
  },
  "col-offset-7": {
    "marginLeft": "437.5rpx"
  },
  "col-offset-6": {
    "marginLeft": "375rpx"
  },
  "col-offset-5": {
    "marginLeft": "312.5rpx"
  },
  "col-offset-4": {
    "marginLeft": "250rpx"
  },
  "col-offset-3": {
    "marginLeft": "187.5rpx"
  },
  "col-offset-2": {
    "marginLeft": "125rpx"
  },
  "col-offset-1": {
    "marginLeft": "62.5rpx"
  },
  "col-offset-0": {
    "marginLeft": 0
  },
  "flex": {
    "flexDirection": "row"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "flex-row-reverse": {
    "flexDirection": "row-reverse"
  },
  "flex-column-reverse": {
    "flexDirection": "column-reverse"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "flex-nowrap": {
    "flexWrap": "nowrap"
  },
  "justify-start": {
    "justifyContent": "flex-start"
  },
  "justify-end": {
    "justifyContent": "flex-end"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "align-center": {
    "alignItems": "center"
  },
  "align-stretch": {
    "alignItems": "stretch"
  },
  "align-start": {
    "alignItems": "flex-start"
  },
  "align-end": {
    "alignItems": "flex-end"
  },
  "flex-1": {
    "flex": 1
  },
  "flex-2": {
    "flex": 2
  },
  "flex-3": {
    "flex": 3
  },
  "flex-4": {
    "flex": 4
  },
  "flex-5": {
    "flex": 5
  },
  "container": {
    "paddingRight": "20rpx",
    "paddingLeft": "20rpx"
  },
  "m-0": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0
  },
  "m-1": {
    "marginTop": "10rpx",
    "marginRight": "10rpx",
    "marginBottom": "10rpx",
    "marginLeft": "10rpx"
  },
  "m-2": {
    "marginTop": "20rpx",
    "marginRight": "20rpx",
    "marginBottom": "20rpx",
    "marginLeft": "20rpx"
  },
  "m-3": {
    "marginTop": "30rpx",
    "marginRight": "30rpx",
    "marginBottom": "30rpx",
    "marginLeft": "30rpx"
  },
  "m-4": {
    "marginTop": "40rpx",
    "marginRight": "40rpx",
    "marginBottom": "40rpx",
    "marginLeft": "40rpx"
  },
  "m-5": {
    "marginTop": "50rpx",
    "marginRight": "50rpx",
    "marginBottom": "50rpx",
    "marginLeft": "50rpx"
  },
  "mt-0": {
    "marginTop": 0
  },
  "mt-1": {
    "marginTop": "10rpx"
  },
  "mt-2": {
    "marginTop": "20rpx"
  },
  "mt-3": {
    "marginTop": "30rpx"
  },
  "mt-4": {
    "marginTop": "40rpx"
  },
  "mt-5": {
    "marginTop": "50rpx"
  },
  "mb-0": {
    "marginBottom": 0
  },
  "mb-1": {
    "marginBottom": "10rpx"
  },
  "mb-2": {
    "marginBottom": "20rpx"
  },
  "mb-3": {
    "marginBottom": "30rpx"
  },
  "mb-4": {
    "marginBottom": "40rpx"
  },
  "mb-5": {
    "marginBottom": "50rpx"
  },
  "ml-0": {
    "marginLeft": 0
  },
  "ml-1": {
    "marginLeft": "10rpx"
  },
  "ml-2": {
    "marginLeft": "20rpx"
  },
  "ml-3": {
    "marginLeft": "30rpx"
  },
  "ml-4": {
    "marginLeft": "40rpx"
  },
  "ml-5": {
    "marginLeft": "50rpx"
  },
  "mr-0": {
    "marginRight": 0
  },
  "mr-1": {
    "marginRight": "10rpx"
  },
  "mr-2": {
    "marginRight": "20rpx"
  },
  "mr-3": {
    "marginRight": "30rpx"
  },
  "mr-4": {
    "marginRight": "40rpx"
  },
  "mr-5": {
    "marginRight": "50rpx"
  },
  "my-0": {
    "marginTop": 0,
    "marginBottom": 0
  },
  "my-1": {
    "marginTop": "10rpx",
    "marginBottom": "10rpx"
  },
  "my-2": {
    "marginTop": "20rpx",
    "marginBottom": "20rpx"
  },
  "my-3": {
    "marginTop": "30rpx",
    "marginBottom": "30rpx"
  },
  "my-4": {
    "marginTop": "40rpx",
    "marginBottom": "40rpx"
  },
  "my-5": {
    "marginTop": "50rpx",
    "marginBottom": "50rpx"
  },
  "mx-0": {
    "marginLeft": 0,
    "marginRight": 0
  },
  "mx-1": {
    "marginLeft": "10rpx",
    "marginRight": "10rpx"
  },
  "mx-2": {
    "marginLeft": "20rpx",
    "marginRight": "20rpx"
  },
  "mx-3": {
    "marginLeft": "30rpx",
    "marginRight": "30rpx"
  },
  "mx-4": {
    "marginLeft": "40rpx",
    "marginRight": "40rpx"
  },
  "mx-5": {
    "marginLeft": "50rpx",
    "marginRight": "50rpx"
  },
  "p-0": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "p": {
    "paddingTop": "5rpx",
    "paddingRight": "5rpx",
    "paddingBottom": "5rpx",
    "paddingLeft": "5rpx"
  },
  "p-1": {
    "paddingTop": "10rpx",
    "paddingRight": "10rpx",
    "paddingBottom": "10rpx",
    "paddingLeft": "10rpx"
  },
  "p-2": {
    "paddingTop": "20rpx",
    "paddingRight": "20rpx",
    "paddingBottom": "20rpx",
    "paddingLeft": "20rpx"
  },
  "p-3": {
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx"
  },
  "p-4": {
    "paddingTop": "40rpx",
    "paddingRight": "40rpx",
    "paddingBottom": "40rpx",
    "paddingLeft": "40rpx"
  },
  "p-5": {
    "paddingTop": "50rpx",
    "paddingRight": "50rpx",
    "paddingBottom": "50rpx",
    "paddingLeft": "50rpx"
  },
  "pt-0": {
    "paddingTop": 0
  },
  "pt": {
    "paddingTop": "5rpx"
  },
  "pt-1": {
    "paddingTop": "10rpx"
  },
  "pt-2": {
    "paddingTop": "20rpx"
  },
  "pt-3": {
    "paddingTop": "30rpx"
  },
  "pt-4": {
    "paddingTop": "40rpx"
  },
  "pt-5": {
    "paddingTop": "50rpx"
  },
  "pb-0": {
    "paddingBottom": 0
  },
  "pb-1": {
    "paddingBottom": "10rpx"
  },
  "pb": {
    "paddingBottom": "5rpx"
  },
  "pb-2": {
    "paddingBottom": "20rpx"
  },
  "pb-3": {
    "paddingBottom": "30rpx"
  },
  "pb-4": {
    "paddingBottom": "40rpx"
  },
  "pb-5": {
    "paddingBottom": "50rpx"
  },
  "pl-0": {
    "paddingLeft": 0
  },
  "pl": {
    "paddingLeft": "5rpx"
  },
  "pl-1": {
    "paddingLeft": "10rpx"
  },
  "pl-2": {
    "paddingLeft": "20rpx"
  },
  "pl-3": {
    "paddingLeft": "30rpx"
  },
  "pl-4": {
    "paddingLeft": "40rpx"
  },
  "pl-5": {
    "paddingLeft": "50rpx"
  },
  "pr-0": {
    "paddingRight": 0
  },
  "pr": {
    "paddingRight": "5rpx"
  },
  "pr-1": {
    "paddingRight": "10rpx"
  },
  "pr-2": {
    "paddingRight": "20rpx"
  },
  "pr-3": {
    "paddingRight": "30rpx"
  },
  "pr-4": {
    "paddingRight": "40rpx"
  },
  "pr-5": {
    "paddingRight": "50rpx"
  },
  "py-0": {
    "paddingTop": 0,
    "paddingBottom": 0
  },
  "py": {
    "paddingTop": "5rpx",
    "paddingBottom": "5rpx"
  },
  "py-1": {
    "paddingTop": "10rpx",
    "paddingBottom": "10rpx"
  },
  "py-2": {
    "paddingTop": "20rpx",
    "paddingBottom": "20rpx"
  },
  "py-3": {
    "paddingTop": "30rpx",
    "paddingBottom": "30rpx"
  },
  "py-4": {
    "paddingTop": "40rpx",
    "paddingBottom": "40rpx"
  },
  "py-5": {
    "paddingTop": "50rpx",
    "paddingBottom": "50rpx"
  },
  "px-0": {
    "paddingLeft": 0,
    "paddingRight": 0
  },
  "px-1": {
    "paddingLeft": "10rpx",
    "paddingRight": "10rpx"
  },
  "px": {
    "paddingLeft": "5rpx",
    "paddingRight": "5rpx"
  },
  "px-2": {
    "paddingLeft": "20rpx",
    "paddingRight": "20rpx"
  },
  "px-3": {
    "paddingLeft": "30rpx",
    "paddingRight": "30rpx"
  },
  "px-4": {
    "paddingLeft": "40rpx",
    "paddingRight": "40rpx"
  },
  "px-5": {
    "paddingLeft": "50rpx",
    "paddingRight": "50rpx"
  },
  "font-smaller": {
    "fontSize": "15rpx"
  },
  "font-small": {
    "fontSize": "20rpx"
  },
  "font-sm": {
    "fontSize": "25rpx"
  },
  "font": {
    "fontSize": "30rpx"
  },
  "font-md": {
    "fontSize": "35rpx"
  },
  "font-lg": {
    "fontSize": "40rpx"
  },
  "h1": {
    "fontSize": "80rpx",
    "lineHeight": 1.8
  },
  "h2": {
    "fontSize": "60rpx",
    "lineHeight": 1.8
  },
  "h3": {
    "fontSize": "45rpx",
    "lineHeight": 1.8
  },
  "h4": {
    "fontSize": "32rpx",
    "lineHeight": 1.8
  },
  "h5": {
    "fontSize": "30rpx",
    "lineHeight": 1.8
  },
  "h6": {
    "fontSize": "28rpx",
    "lineHeight": 1.8
  },
  "text-through": {
    "textDecoration": "line-through"
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-ellipsis": {
    "lines": 1
  },
  "font-weight-light": {
    "fontWeight": "300"
  },
  "font-weight-lighter": {
    "fontWeight": "100"
  },
  "font-weight-normal": {
    "fontWeight": "400"
  },
  "font-weight-bold": {
    "fontWeight": "700"
  },
  "font-weight-bolder": {
    "fontWeight": "bold"
  },
  "font-italic": {
    "fontStyle": "italic"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "text-primary": {
    "color": "#007bff"
  },
  "text-hover-primary": {
    "color": "#0056b3"
  },
  "text-secondary": {
    "color": "#6c757d"
  },
  "text-hover-secondary": {
    "color": "#494f54"
  },
  "text-success": {
    "color": "#28a745"
  },
  "text-hover-success": {
    "color": "#19692c"
  },
  "text-info": {
    "color": "#17a2b8"
  },
  "text-hover-info": {
    "color": "#0f6674"
  },
  "text-warning": {
    "color": "#ffc107"
  },
  "text-hover-warning": {
    "color": "#ba8b00"
  },
  "text-danger": {
    "color": "#dc3545"
  },
  "text-hover-danger": {
    "color": "#a71d2a"
  },
  "text-light": {
    "color": "#f8f9fa"
  },
  "text-hover-light": {
    "color": "#cbd3da"
  },
  "text-dark": {
    "color": "#343a40"
  },
  "text-hover-dark": {
    "color": "#121416"
  },
  "text-body": {
    "color": "#212529"
  },
  "text-muted": {
    "color": "#6c757d"
  },
  "text-light-muted": {
    "color": "#A9A5A0"
  },
  "text-light-black": {
    "color": "rgba(0,0,0,0.5)"
  },
  "text-light-white": {
    "color": "rgba(255,255,255,0.5)"
  },
  "bg-primary": {
    "backgroundColor": "#007bff"
  },
  "bg-hover-primary": {
    "backgroundColor:hover": "#0062cc"
  },
  "bg-secondary": {
    "backgroundColor": "#6c757d"
  },
  "bg-hover-secondary": {
    "backgroundColor:hover": "#545b62"
  },
  "bg-success": {
    "backgroundColor": "#28a745"
  },
  "bg-hover-success": {
    "backgroundColor": "#1e7e34"
  },
  "bg-info": {
    "backgroundColor": "#17a2b8"
  },
  "bg-hover-info": {
    "backgroundColor": "#117a8b"
  },
  "bg-warning": {
    "backgroundColor": "#ffc107"
  },
  "bg-hover-warning": {
    "backgroundColor": "#d39e00"
  },
  "bg-danger": {
    "backgroundColor": "#dc3545"
  },
  "bg-hover-danger": {
    "backgroundColor": "#bd2130"
  },
  "bg-light": {
    "backgroundColor": "#f8f9fa"
  },
  "bg-hover-light": {
    "backgroundColor": "#dae0e5"
  },
  "bg-dark": {
    "backgroundColor": "#343a40"
  },
  "bg-hover-dark": {
    "backgroundColor": "#1d2124"
  },
  "bg-white": {
    "backgroundColor": "#ffffff"
  },
  "bg-transparent": {
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "border": {
    "borderWidth": "1rpx",
    "borderStyle": "solid",
    "borderColor": "#dee2e6"
  },
  "border-top": {
    "borderTopWidth": "1rpx",
    "borderTopStyle": "solid",
    "borderTopColor": "#dee2e6"
  },
  "border-right": {
    "borderRightWidth": "1rpx",
    "borderRightStyle": "solid",
    "borderRightColor": "#dee2e6"
  },
  "border-bottom": {
    "borderBottomWidth": "1rpx",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dee2e6"
  },
  "border-left": {
    "borderLeftWidth": "1rpx",
    "borderLeftStyle": "solid",
    "borderLeftColor": "#dee2e6"
  },
  "border-0": {
    "borderWidth": 0
  },
  "border-top-0": {
    "borderTopWidth": 0
  },
  "border-right-0": {
    "borderRightWidth": 0
  },
  "border-bottom-0": {
    "borderBottomWidth": 0
  },
  "border-left-0": {
    "borderLeftWidth": 0
  },
  "border-primary": {
    "borderColor": "#007bff"
  },
  "border-secondary": {
    "borderColor": "#6c757d"
  },
  "border-light-secondary": {
    "borderColor": "#E9E8E5"
  },
  "border-success": {
    "borderColor": "#28a745"
  },
  "border-info": {
    "borderColor": "#17a2b8"
  },
  "border-warning": {
    "borderColor": "#ffc107"
  },
  "border-danger": {
    "borderColor": "#dc3545"
  },
  "border-light": {
    "borderColor": "#f8f9fa"
  },
  "border-dark": {
    "borderColor": "#343a40"
  },
  "border-white": {
    "borderColor": "#FFFFFF"
  },
  "rounded": {
    "borderRadius": "8rpx"
  },
  "rounded-lg": {
    "borderRadius": "14rpx"
  },
  "rounded-top": {
    "borderTopLeftRadius": "8rpx",
    "borderTopRightRadius": "8rpx"
  },
  "rounded-top-lg": {
    "borderTopLeftRadius": "14rpx",
    "borderTopRightRadius": "14rpx"
  },
  "rounded-right": {
    "borderTopRightRadius": "8rpx",
    "borderBottomRightRadius": "8rpx"
  },
  "rounded-bottom": {
    "borderBottomRightRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-bottom-lg": {
    "borderBottomRightRadius": "14rpx",
    "borderBottomLeftRadius": "14rpx"
  },
  "rounded-left": {
    "borderTopLeftRadius": "8rpx",
    "borderBottomLeftRadius": "8rpx"
  },
  "rounded-circle": {
    "borderRadius": "100rpx"
  },
  "rounded-0": {
    "borderRadius": 0
  },
  "overflow-hidden": {
    "overflow": "hidden"
  },
  "position-relative": {
    "position": "relative"
  },
  "position-absolute": {
    "position": "absolute"
  },
  "position-fixed": {
    "position": "fixed"
  },
  "fixed-top": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "left": 0,
    "zIndex": 1030
  },
  "fixed-bottom": {
    "position": "fixed",
    "right": 0,
    "bottom": 0,
    "left": 0,
    "zIndex": 1030
  },
  "top-0": {
    "top": 0
  },
  "left-0": {
    "left": 0
  },
  "right-0": {
    "right": 0
  },
  "bottom-0": {
    "bottom": 0
  },
  "mask": {
    "position": "fixed",
    "left": 0,
    "right": 0,
    "top": 0,
    "bottom": 0,
    "zIndex": 100
  },
  "text-main": {
    "color": "#FB7299"
  },
  "text-main-hover": {
    "color": "#FB85A7"
  },
  "text-main-disabled": {
    "color": "#FB85A7"
  },
  "bg-main": {
    "backgroundColor": "#FB7299"
  },
  "bg-main-hover": {
    "backgroundColor": "#FB85A7"
  },
  "bg-main-disabled": {
    "backgroundColor": "#FB85A7"
  },
  "border-main": {
    "borderColor": "#FB7299"
  },
  "line-h": {
    "lineHeight": 1.2
  },
  "f-divider": {
    "height": "18rpx",
    "backgroundColor": "#F5F5F4"
  }
}

/***/ }),
/* 4 */
/*!**********************************************************************************!*\
  !*** E:/study/uni-app/在线点播app/pages/detail-video/subNVue/video.nvue?mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./video.nvue?vue&type=template&id=466e0921&mpType=page */ 5);\n/* harmony import */ var _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.nvue?vue&type=script&lang=js&mpType=page */ 7);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 22).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 22).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"0c521f6d\",\n  false,\n  _video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/detail-video/subNVue/video.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDtBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGtFQUEwRDtBQUM5RyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsa0VBQTBEO0FBQ25IOztBQUVBOztBQUVBO0FBQ29NO0FBQ3BNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2NmUwOTIxJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi92aWRlby5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIwYzUyMWY2ZFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kZXRhaWwtdmlkZW8vc3ViTlZ1ZS92aWRlby5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!****************************************************************************************************************!*\
  !*** E:/study/uni-app/在线点播app/pages/detail-video/subNVue/video.nvue?vue&type=template&id=466e0921&mpType=page ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=template&id=466e0921&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_template_id_466e0921_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/study/uni-app/在线点播app/pages/detail-video/subNVue/video.nvue?vue&type=template&id=466e0921&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["bg-dark"] },
    [
      _c(
        "u-video",
        {
          ref: "video",
          staticStyle: { width: "750rpx", height: "225px" },
          attrs: {
            id: "video",
            src: _vm.src,
            poster: _vm.poster,
            controls: false,
            showCenterPlayBtn: false,
            showFullscreenBtn: false,
            showProgress: false,
            enableProgressGesture: false
          },
          on: {
            fullscreenchange: _vm.fullscreenchange,
            timeupdate: _vm.timeupdate,
            play: function($event) {
              _vm.isplay = true
            },
            pause: function($event) {
              _vm.isplay = false
            }
          }
        },
        [
          _c(
            "u-scalable",
            {
              staticStyle: {
                position: "absolute",
                left: "0",
                right: "0",
                top: "0",
                bottom: "0"
              }
            },
            [
              _c(
                "view",
                {
                  staticClass: [
                    "position-absolute",
                    "flex",
                    "align-center",
                    "justify-center"
                  ],
                  style: _vm.videoBox
                },
                [
                  _c("view", {
                    staticClass: [
                      "position-absolute",
                      "left-0",
                      "right-0",
                      "top-0",
                      "bottom-0"
                    ],
                    on: {
                      touchstart: _vm.touchStart,
                      touchmove: _vm.touchMove,
                      touchend: _vm.touchEnd
                    }
                  }),
                  _vm.fullScreenStatus &&
                  (_vm.showStatusBarStatus || _vm.lockScreenStatus)
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "position-absolute",
                            "top-0",
                            "right-0",
                            "bottom-0",
                            "flex",
                            "justify-center",
                            "align-center"
                          ],
                          staticStyle: { width: "80px" }
                        },
                        [
                          _c(
                            "view",
                            {
                              staticClass: [
                                "rounded",
                                "flex",
                                "justify-center",
                                "align-center"
                              ],
                              staticStyle: {
                                width: "60px",
                                height: "60px",
                                backgroundColor: "rgba(0,0,0,0.4)"
                              },
                              on: { click: _vm.lockScreen }
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticClass: ["iconfont"],
                                  class: _vm.lockScreenStatus
                                    ? "text-main"
                                    : "text-white"
                                },
                                [_vm._v("")]
                              )
                            ]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm.showToastStatus
                    ? _c(
                        "view",
                        {
                          staticClass: ["p-2", "rounded"],
                          staticStyle: { backgroundColor: "rgba(0,0,0,0.3)" }
                        },
                        [
                          _vm.toast.type === "progress"
                            ? _c(
                                "u-text",
                                { staticClass: ["font", "text-white"] },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm._f("formatTime")(_vm.currentTime)
                                    ) +
                                      "/" +
                                      _vm._s(_vm._f("formatTime")(_vm.duration))
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm.toast.type === "msg"
                            ? _c(
                                "u-text",
                                { staticClass: ["font", "text-white"] },
                                [_vm._v(_vm._s(_vm.toast.msg))]
                              )
                            : _vm._e()
                        ]
                      )
                    : _vm._e(),
                  _vm.showStatusBarStatus && _vm.fullScreenStatus
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "video-bg-top",
                            "position-absolute",
                            "top-0",
                            "left-0",
                            "right-0",
                            "flex",
                            "justify-between",
                            "align-center"
                          ],
                          staticStyle: { height: "44px" }
                        },
                        [
                          _c(
                            "view",
                            { staticClass: ["flex", "align-center"] },
                            [
                              _c(
                                "view",
                                { staticClass: ["flex", "align-center"] },
                                [
                                  _c("f-icon-btn", {
                                    attrs: { icon: "\ue612" },
                                    on: { click: _vm.fullOrExitScreen }
                                  })
                                ],
                                1
                              ),
                              _c(
                                "view",
                                {
                                  staticClass: ["flex", "align-center", "px-2"]
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticClass: ["text-white"],
                                      staticStyle: {
                                        fontSize: "15px",
                                        lines: "1"
                                      }
                                    },
                                    [_vm._v(_vm._s(_vm.title))]
                                  )
                                ]
                              )
                            ]
                          ),
                          _c(
                            "view",
                            { staticClass: ["flex", "align-center"] },
                            [
                              _c("f-icon-btn", {
                                attrs: { icon: "\ue612" },
                                on: { click: _vm.fullOrExitScreen }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm.showStatusBarStatus && _vm.fullScreenStatus
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "video-bg-bottom",
                            "position-absolute",
                            "bottom-0",
                            "left-0",
                            "right-0"
                          ]
                        },
                        [
                          _c("view", { staticStyle: { height: "88px" } }, [
                            _c(
                              "view",
                              {
                                staticClass: ["flex-1"],
                                staticStyle: {
                                  paddingLeft: "15px",
                                  paddingRight: "15px"
                                }
                              },
                              [
                                _c("f-slider", {
                                  attrs: {
                                    duration: _vm.duration,
                                    currentTime: _vm.currentTime
                                  },
                                  on: {
                                    change: _vm.sliderChange,
                                    update: _vm.sliderUpdate
                                  }
                                })
                              ],
                              1
                            ),
                            _c(
                              "view",
                              {
                                staticClass: [
                                  "flex",
                                  "align-stretch",
                                  "justify-between"
                                ],
                                staticStyle: { height: "44px" }
                              },
                              [
                                _c(
                                  "view",
                                  { staticClass: ["flex"] },
                                  [
                                    !_vm.isplay
                                      ? _c("f-icon-btn", {
                                          attrs: { icon: "\ue63a", size: "22" },
                                          on: { click: _vm.playOrPause }
                                        })
                                      : _c("f-icon-btn", {
                                          attrs: { icon: "\ue605", size: "22" },
                                          on: { click: _vm.playOrPause }
                                        }),
                                    _c(
                                      "view",
                                      {
                                        staticClass: [
                                          "flex",
                                          "align-center",
                                          "justify-center"
                                        ],
                                        staticStyle: { width: "80px" }
                                      },
                                      [
                                        _c(
                                          "u-text",
                                          {
                                            staticClass: [
                                              "font-sm",
                                              "text-white"
                                            ]
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm._f("formatTime")(
                                                  _vm.currentTime
                                                )
                                              ) +
                                                "/" +
                                                _vm._s(
                                                  _vm._f("formatTime")(
                                                    _vm.duration
                                                  )
                                                )
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _c("f-icon-btn", {
                                      attrs: { icon: "\ue697", size: "22" }
                                    })
                                  ],
                                  1
                                ),
                                _c("view", { staticClass: ["flex"] }, [
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["flex", "align-center"],
                                      staticStyle: {
                                        height: "44px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.openDrawer("speed")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["text-white"],
                                          staticStyle: { fontSize: "15px" }
                                        },
                                        [_vm._v(_vm._s(_vm.rate))]
                                      )
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["flex", "align-center"],
                                      staticStyle: {
                                        height: "44px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.openDrawer("quality")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["text-white"],
                                          staticStyle: { fontSize: "15px" }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm._f("formatQuality")(
                                                _vm.quality
                                              )
                                            )
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _c(
                                    "view",
                                    {
                                      staticClass: ["flex", "align-center"],
                                      staticStyle: {
                                        height: "44px",
                                        paddingLeft: "15px",
                                        paddingRight: "15px"
                                      },
                                      on: {
                                        click: function($event) {
                                          _vm.openDrawer("video")
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          staticClass: ["text-white"],
                                          staticStyle: { fontSize: "15px" }
                                        },
                                        [_vm._v("选集")]
                                      )
                                    ]
                                  )
                                ])
                              ]
                            )
                          ])
                        ]
                      )
                    : _vm._e(),
                  _vm.fullScreenStatus && _vm.showDrawer
                    ? _c(
                        "view",
                        {
                          staticClass: [
                            "position-absolute",
                            "top-0",
                            "right-0",
                            "bottom-0",
                            "flex",
                            "flex-column"
                          ],
                          staticStyle: { backgroundColor: "rgba(0,0,0,0.8)" }
                        },
                        [
                          _vm.drawerType === "speed"
                            ? _c(
                                "view",
                                {
                                  staticClass: [
                                    "flex-1",
                                    "flex",
                                    "flex-column"
                                  ],
                                  staticStyle: { width: "100px" }
                                },
                                _vm._l(_vm.rateList, function(item, index) {
                                  return _c(
                                    "view",
                                    {
                                      key: index,
                                      staticClass: [
                                        "flex-1",
                                        "flex",
                                        "justify-center",
                                        "align-center"
                                      ],
                                      on: {
                                        click: function($event) {
                                          _vm.changeRate(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          class:
                                            item === _vm.rate
                                              ? "text-main"
                                              : "text-white"
                                        },
                                        [_vm._v(_vm._s(item))]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                            : _vm.drawerType === "video"
                            ? _c(
                                "view",
                                {
                                  staticClass: [
                                    "flex-1",
                                    "flex",
                                    "flex-column"
                                  ],
                                  staticStyle: { width: "300px" }
                                },
                                [
                                  _c(
                                    "scroll-view",
                                    {
                                      staticClass: ["flex-1", "p-2"],
                                      attrs: { scrollY: "true" }
                                    },
                                    _vm._l(_vm.videoList, function(
                                      item,
                                      index
                                    ) {
                                      return _c(
                                        "view",
                                        {
                                          key: index,
                                          staticClass: [
                                            "border",
                                            "p-2",
                                            "flex",
                                            "rounded",
                                            "mb-2"
                                          ],
                                          on: {
                                            click: function($event) {
                                              _vm.changeVideo(item, index)
                                            }
                                          }
                                        },
                                        [
                                          _c(
                                            "u-text",
                                            {
                                              class:
                                                _vm.videoIndex === index
                                                  ? "text-main"
                                                  : "text-white",
                                              staticStyle: {
                                                fontSize: "14px",
                                                lines: "1"
                                              }
                                            },
                                            [_vm._v(_vm._s(item.title))]
                                          )
                                        ]
                                      )
                                    }),
                                    0
                                  )
                                ],
                                1
                              )
                            : _c(
                                "view",
                                {
                                  staticClass: [
                                    "flex-1",
                                    "flex",
                                    "flex-column"
                                  ],
                                  staticStyle: { width: "100px" }
                                },
                                _vm._l(_vm.qualityList, function(item, index) {
                                  return _c(
                                    "view",
                                    {
                                      key: index,
                                      staticClass: [
                                        "flex-1",
                                        "flex",
                                        "justify-center",
                                        "align-center"
                                      ],
                                      on: {
                                        click: function($event) {
                                          _vm.changeQuality(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "u-text",
                                        {
                                          class:
                                            item.value === _vm.quality
                                              ? "text-main"
                                              : "text-white"
                                        },
                                        [_vm._v(_vm._s(item.name))]
                                      )
                                    ]
                                  )
                                }),
                                0
                              )
                        ]
                      )
                    : _vm._e()
                ]
              )
            ]
          )
        ],
        1
      ),
      _vm.showStatusBarStatus && !_vm.fullScreenStatus
        ? _c(
            "view",
            {
              staticClass: [
                "video-bg-top",
                "position-fixed",
                "top-0",
                "left-0",
                "right-0"
              ]
            },
            [
              _c("view", { style: "height: " + _vm.statusBarHeight + "px;" }),
              _c(
                "view",
                {
                  staticClass: ["flex", "align-center"],
                  staticStyle: { height: "44px" }
                },
                [
                  _c("f-icon-btn", {
                    attrs: { icon: "\ue612" },
                    on: { click: _vm.back }
                  })
                ],
                1
              )
            ]
          )
        : _vm._e(),
      _vm.showStatusBarStatus && !_vm.fullScreenStatus
        ? _c(
            "view",
            {
              staticClass: [
                "video-bg-bottom",
                "position-fixed",
                "bottom-0",
                "left-0",
                "right-0"
              ]
            },
            [
              _c(
                "view",
                {
                  staticClass: ["flex", "align-stretch"],
                  staticStyle: { height: "44px" }
                },
                [
                  !_vm.isplay
                    ? _c("f-icon-btn", {
                        attrs: { icon: "\ue63a", size: "22" },
                        on: { click: _vm.playOrPause }
                      })
                    : _c("f-icon-btn", {
                        attrs: { icon: "\ue605", size: "22" },
                        on: { click: _vm.playOrPause }
                      }),
                  _c(
                    "view",
                    { staticClass: ["flex-1"] },
                    [
                      _c("f-slider", {
                        attrs: {
                          duration: _vm.duration,
                          currentTime: _vm.currentTime
                        },
                        on: {
                          change: _vm.sliderChange,
                          update: _vm.sliderUpdate
                        }
                      })
                    ],
                    1
                  ),
                  _c(
                    "view",
                    {
                      staticClass: ["flex", "align-center", "justify-center"],
                      staticStyle: { width: "80px" }
                    },
                    [
                      _c("u-text", { staticClass: ["font-sm", "text-white"] }, [
                        _vm._v(
                          _vm._s(_vm._f("formatTime")(_vm.currentTime)) +
                            "/" +
                            _vm._s(_vm._f("formatTime")(_vm.duration))
                        )
                      ])
                    ]
                  ),
                  _c("f-icon-btn", {
                    attrs: { icon: "\ue800", size: "22" },
                    on: { click: _vm.fullOrExitScreen }
                  })
                ],
                1
              )
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!**********************************************************************************************************!*\
  !*** E:/study/uni-app/在线点播app/pages/detail-video/subNVue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=script&lang=js&mpType=page */ 8);\n/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRnQixDQUFnQixxakJBQUcsRUFBQyIsImZpbGUiOiI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3ZpZGVvLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/study/uni-app/在线点播app/pages/detail-video/subNVue/video.nvue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _fIconBtn = _interopRequireDefault(__webpack_require__(/*! ./components/f-icon-btn.vue */ 9));\nvar _fSlide = _interopRequireDefault(__webpack_require__(/*! ./components/f-slide.vue */ 17));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar d = weex.requireModule('dom');var videoCTX = null;var showToastTimer = null;var timer = null; // const demoList = [\n// \t{\n// \tindex:0,\n// \ttitle:\"优化空数据默认显示\",\n// \tlist:[{\n// \t\tname:\"标清\",\n// \t\tvalue:\"SD\",\n// \t\turl:\"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4\"\n// \t},{\n// \t\tname:\"高清\",\n// \t\tvalue:\"HD\",\n// \t\turl:\"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4\"\n// \t},{\n// \t\tname:\"超清\",\n// \t\tvalue:\"FHD\",\n// \t\turl:\"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4\"\n// \t}],\n// },\n// {\n// \tindex:0,\n// \ttitle:\"2018年平昌冬\",\n// \tlist:[{\n// \t\tname:\"标清\",\n// \t\tvalue:\"SD\",\n// \t\turl:\"https://douyinzcmcss.oss-cn-shenzhen.aliyuncs.com/%E8%AF%BE%E6%97%B61.%20%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D.mp4\"\n// \t}],\n// }]\nvar _default = { components: { fIconBtn: _fIconBtn.default, fSlider: _fSlide.default }, data: function data() {return { title: \"\", src: \"\", poster: \"\", // 播放状态\n      isplay: false, statusBarHeight: 0, currentTime: 0, duration: 0, windowWidth: 0, windowHeight: 0, fullScreenStatus: false, showToastStatus: false, toast: { type: \"msg\", msg: \"提示\" }, showStatusBarStatus: true, oldTouchs: {}, oldValue: {}, dbCount: 0, touchType: null, platform: \"android\", // 全屏弹框\n      showDrawer: false, // 速度\n      drawerType: \"speed\", // 当前速度\n      rate: \"1.0\", //速度选择\n      rateList: ['2.0', '1.5', '1.25', '1.0', '0.8', '0.5'], // 选集\n      videoIndex: 0, videoList: [], quality: \"HD\", // 锁屏状态\n      lockScreenStatus: false };}, created: function created() {var res = uni.getSystemInfoSync();this.statusBarHeight = res.statusBarHeight;this.windowHeight = res.windowHeight;this.windowWidth = res.windowWidth;this.platform = res.platform; // 引入图标\n    d.addRule('fontFace', { 'fontFamily': \"iconfont\", 'src': \"url('https://at.alicdn.com/t/font_1419176_mzo8rsjxi4c.ttf')\" });uni.$on('video', this.handleVideoEvent); // this.videoList = demoList\n  }, mounted: function mounted() {videoCTX = this.$refs.video;}, destroyed: function destroyed() {uni.$off('video', this.handleVideoEvent);}, computed: { videoBox: function videoBox() {return this.fullScreenStatus ? \"width:\".concat(this.windowHeight, \"px;height:\").concat(this.windowWidth, \";\") : 'width:750rpx;height:225px;';}, modalStyle: function modalStyle() {var top = this.statusBarHeight + 44;return \"top:\".concat(top, \"px;bottom:44px;\");}, qualityList: function qualityList() {return this.videoList[this.videoIndex].list ? this.videoList[this.videoIndex].list : [];} }, methods: { handleVideoEvent: function handleVideoEvent(e) {switch (e.event) {case 'init':this.videoIndex = e.params.activeIndex;this.videoList = e.params.videos.map(function (item) {return { index: 0, title: item.title, list: [{ name: '高清', value: \"HD\", url: item.url }] };});this.poster = e.params.poster;var v = this.videoList[this.videoIndex];if (v) {this.src = v.list[v.index].url;}break;case 'change':videoCTX.pause();this.videoIndex = e.params.activeIndex;var o = this.videoList[this.videoIndex];if (o) {this.src = o.list[o.index].url;}setTimeout(function () {videoCTX.play();}, 300);break;}}, // 锁屏和解除锁屏\n    lockScreen: function lockScreen() {this.lockScreenStatus = !this.lockScreenStatus;if (this.lockScreenStatus) {this.hideStatusBar();} else {this.showStatusBar();}}, // 清晰度\n    changeQuality: function changeQuality(item) {videoCTX.pause();if (!item.url) {return uni.showToast({ title: '视频链接不存在', icon: 'none' });}this.src = item.url;this.quality = item.value;uni.showToast({ title: '清晰度切换为：' + item.name, icon: 'none' });setTimeout(function () {videoCTX.play();}, 300);}, // 选集\n    changeVideo: function changeVideo(item, index) {var _this = this;this.videoIndex = index;videoCTX.stop;var list = this.videoList[index].list;var i = list.findIndex(function (v) {return v.value === _this.quality;});if (i === -1) {if (list.length > 0) {this.src = list[0].url;} else {return uni.showToast({ title: '视频链接不存在', icon: 'none' });}} else {this.src = list[i].url;}uni.showToast({ title: '切换到：' + item.title, icon: 'none' });setTimeout(function () {videoCTX.seek(0);videoCTX.play();}, 300);this.showDrawer = false;}, // 修改速度的方法\n    changeRate: function changeRate(item) {// console.log('hh')\n      this.rate = item;videoCTX.playbackRate(this.rate);uni.showToast({ title: \"当前速度修改为：\" + this.rate, icon: \"none\" });\n\n      this.showDrawer = false;\n    },\n    openDrawer: function openDrawer(type) {\n      this.drawerType = type;\n      this.showDrawer = true;\n    },\n    // 全屏/退出全屏\n    fullOrExitScreen: function fullOrExitScreen() {\n      if (this.fullScreenStatus) {\n        videoCTX.exitFullScreen();\n      } else {\n        videoCTX.requestFullScreen();\n      }\n    },\n    // 显示或隐藏控制条\n    showOrHideStatusBar: function showOrHideStatusBar() {\n      this.showStatusBarStatus ? this.hideStatusBar() : this.showStatusBar();\n    },\n    // 显示控制条\n    showStatusBar: function showStatusBar() {var _this2 = this;\n      this.showStatusBarStatus = true;\n      timer = timer ? clearTimeout(timer) : null;\n      timer = setTimeout(function () {\n        _this2.hideStatusBar();\n        timer = null;\n      }, 3000);\n    },\n    // 隐藏控制条\n    hideStatusBar: function hideStatusBar() {\n      this.showStatusBarStatus = false;\n    },\n    back: function back() {\n      uni.navigateBack({\n        delta: 1 });\n\n    },\n    // 播放/暂停\n    playOrPause: function playOrPause() {\n      this.showToast({\n        msg: this.isplay ? '暂停' : '播放' });\n\n      if (this.isplay) {\n        videoCTX.pause();\n      } else {\n        this.showStatusBar();\n        videoCTX.play();\n      }\n    },\n    fullscreenchange: function fullscreenchange(e) {\n      this.fullScreenStatus = e.detail.fullScreen;\n    },\n    timeupdate: function timeupdate(e) {\n      if (!this.showToastStatus) {\n        this.currentTime = parseInt(e.detail.currentTime);\n      }\n      this.duration = parseInt(e.detail.duration);\n    },\n    // 进度条变化\n    sliderChange: function sliderChange(e) {\n      videoCTX.seek(e);\n      this.showToastStatus = false;\n      videoCTX.play();\n    },\n    sliderUpdate: function sliderUpdate(e) {\n      this.showStatusBar();\n      videoCTX.pause();\n      this.showToastStatus = true;\n      this.showToast({\n        type: \"progress\",\n        autoClose: false });\n\n      this.currentTime = e;\n    },\n    showToast: function showToast(options) {var _this3 = this;\n      this.toast.type = options.type || 'msg';\n      this.toast.msg = options.msg || '提示';\n      this.showToastStatus = true;\n      if (options.autoClose !== false) {\n        if (showToastTimer) {\n          clearTimeout(showToastTimer);\n        }\n        showToastTimer = setTimeout(function () {\n          _this3.showToastStatus = false;\n          showToastTimer = null;\n        }, 500);\n      }\n    },\n    touchStart: function touchStart(e) {\n      this.oldTouchs = e.changedTouches[0];\n\n      this.oldValue = {\n        currentTime: this.currentTime };\n\n    },\n    touchMove: function touchMove(e) {\n      if (this.lockScreenStatus) return;\n      var newTouchs = e.changedTouches[0];\n      if (!this.touchType) {\n        this.touchType = Math.abs(newTouchs.pageX - this.oldTouchs.pageX) > 20 ? 'currentTime' : null;\n        if (this.fullScreenStatus && this.platform === 'ios') {\n          this.touchType = Math.abs(newTouchs.pageY - this.oldTouchs.pageY) > 20 ? 'currentTime' : null;\n        }\n        if (this.touchType === 'currentTime') {\n          videoCTX.pause();\n        }\n      } else if (this.touchType === 'currentTime') {\n        this.showToast({\n          type: \"progress\",\n          autoClose: false });\n\n        this.showStatusBar();\n        var newCurrentTime = (newTouchs.pageX - this.oldTouchs.pageX) / 250 * this.duration * 2 + this.oldValue.currentTime * 1;\n        if (this.fullScreenStatus && this.platform === 'ios') {\n          newCurrentTime = (newTouchs.pageY - this.oldTouchs.pageY) / 250 * this.duration * 2 + this.oldValue.currentTime * 1;\n        }\n        newCurrentTime = newCurrentTime > this.duration ? this.duration : newCurrentTime;\n        newCurrentTime = newCurrentTime < 0 ? 0 : newCurrentTime;\n        this.currentTime = newCurrentTime;\n      }\n    },\n    touchEnd: function touchEnd(e) {var _this4 = this;\n      if (this.lockScreenStatus) return;\n      if (this.touchType === 'currentTime') {\n        videoCTX.seek(this.currentTime);\n        videoCTX.play();\n      } else {\n        if (this.dbCount === 1 || this.dbCount === 0) {\n          this.dbCount++;\n        }\n        if (this.dbCount > 0) {\n          setTimeout(function () {\n            // 单击\n            if (_this4.dbCount === 1) {\n              _this4.showOrHideStatusBar();\n              _this4.showDrawer = false;\n            }\n            // 双击\n            if (_this4.dbCount === 2) {\n              _this4.playOrPause();\n            }\n            _this4.dbCount = 0;\n          }, 250);\n        }\n      }\n      this.touchType = null;\n      this.showToastStatus = false;\n    } },\n\n  filters: {\n    formatTime: function formatTime(result) {\n      var h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);\n      var m = Math.floor(result / 60 % 60) < 10 ? '0' + Math.floor(result / 60 % 60) : Math.floor(result / 60 % 60);\n      var s = Math.floor(result % 60) < 10 ? '0' + Math.floor(result % 60) : Math.floor(result % 60);\n      return result = result > 3600 ? h + \":\" + m + \":\" + s : m + \":\" + s;\n    },\n    formatQuality: function formatQuality(value) {\n      var arr = {\n        SD: '标清',\n        HD: \"高清\",\n        FHD: \"超清\" };\n\n      return arr[value];\n    } },\n\n  provide: function provide() {\n    return {\n      v: this };\n\n  } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvdmlkZW8ubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1TEE7QUFDQSw4Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUxBLGtDQUNBLG9CQUNBLDBCQUNBLGlCLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO2VBRUEsRUFDQSxjQUNBLDJCQURBLEVBRUEsd0JBRkEsRUFEQSxFQUtBLElBTEEsa0JBS0EsQ0FDQSxTQUNBLFNBREEsRUFFQSxPQUZBLEVBR0EsVUFIQSxFQUlBO0FBQ0EsbUJBTEEsRUFPQSxrQkFQQSxFQVNBLGNBVEEsRUFVQSxXQVZBLEVBWUEsY0FaQSxFQWFBLGVBYkEsRUFlQSx1QkFmQSxFQWlCQSxzQkFqQkEsRUFrQkEsU0FDQSxXQURBLEVBRUEsU0FGQSxFQWxCQSxFQXVCQSx5QkF2QkEsRUF5QkEsYUF6QkEsRUEwQkEsWUExQkEsRUEyQkEsVUEzQkEsRUE0QkEsZUE1QkEsRUE2QkEsbUJBN0JBLEVBK0JBO0FBQ0EsdUJBaENBLEVBaUNBO0FBQ0EseUJBbENBLEVBbUNBO0FBQ0EsaUJBcENBLEVBcUNBO0FBQ0EsMkRBdENBLEVBd0NBO0FBQ0EsbUJBekNBLEVBMENBLGFBMUNBLEVBMkNBLGFBM0NBLEVBNkNBO0FBQ0EsNkJBOUNBLEdBaURBLENBdkRBLEVBd0RBLE9BeERBLHFCQXdEQSxDQUNBLGtDQUNBLDJDQUNBLHFDQUNBLG1DQUNBLDZCQUxBLENBTUE7QUFDQSw0QkFDQSx3QkFEQSxFQUVBLG9FQUZBLElBTUEsd0NBYkEsQ0FjQTtBQUNBLEdBdkVBLEVBd0VBLE9BeEVBLHFCQXdFQSxDQUNBLDRCQUNBLENBMUVBLEVBMkVBLFNBM0VBLHVCQTJFQSxDQUNBLHlDQUNBLENBN0VBLEVBOEVBLFlBQ0EsUUFEQSxzQkFDQSxDQUNBLDZJQUNBLENBSEEsRUFJQSxVQUpBLHdCQUlBLENBQ0Esb0NBQ0EsNkNBQ0EsQ0FQQSxFQVFBLFdBUkEseUJBUUEsQ0FDQSx3RkFDQSxDQVZBLEVBOUVBLEVBMEZBLFdBRUEsZ0JBRkEsNEJBRUEsQ0FGQSxFQUVBLENBQ0Esa0JBQ0EsWUFDQSx1Q0FDQSxzREFDQSxTQUNBLFFBREEsRUFFQSxpQkFGQSxFQUdBLFNBQ0EsVUFEQSxFQUVBLFdBRkEsRUFHQSxhQUhBLEdBSEEsR0FTQSxDQVZBLEVBV0EsOEJBQ0Esd0NBQ0EsUUFDQSwrQkFDQSxDQUNBLE1BQ0EsY0FDQSxpQkFDQSx1Q0FDQSx3Q0FDQSxRQUNBLCtCQUNBLENBQ0Esd0JBQ0EsZ0JBQ0EsQ0FGQSxFQUVBLEdBRkEsRUFHQSxNQTlCQSxDQWlDQSxDQXBDQSxFQXFDQTtBQUNBLGNBdENBLHdCQXNDQSxDQUNBLCtDQUNBLDRCQUNBLHFCQUNBLENBRkEsTUFFQSxDQUNBLHFCQUNBLENBQ0EsQ0E3Q0EsRUE4Q0E7QUFDQSxpQkEvQ0EseUJBK0NBLElBL0NBLEVBK0NBLENBQ0EsaUJBQ0EsZ0JBQ0EsdUJBQ0EsZ0JBREEsRUFFQSxZQUZBLElBSUEsQ0FDQSxvQkFDQSwwQkFDQSxnQkFDQSw0QkFEQSxFQUVBLFlBRkEsSUFJQSx3QkFDQSxnQkFDQSxDQUZBLEVBRUEsR0FGQSxFQUdBLENBaEVBLEVBaUVBO0FBQ0EsZUFsRUEsdUJBa0VBLElBbEVBLEVBa0VBLEtBbEVBLEVBa0VBLGtCQUNBLHdCQUNBLGNBQ0Esc0NBQ0EseUVBQ0EsZUFDQSxzQkFDQSx1QkFDQSxDQUZBLE1BRUEsQ0FDQSx1QkFDQSxnQkFEQSxFQUVBLFlBRkEsSUFJQSxDQUNBLENBVEEsTUFTQSxDQUNBLHVCQUNBLENBQ0EsZ0JBQ0EsMEJBREEsRUFFQSxZQUZBLElBSUEsd0JBQ0EsaUJBQ0EsZ0JBQ0EsQ0FIQSxFQUdBLEdBSEEsRUFJQSx3QkFDQSxDQTVGQSxFQTZGQTtBQUNBLGNBOUZBLHNCQThGQSxJQTlGQSxFQThGQSxDQUNBO0FBQ0EsdUJBQ0EsaUNBQ0EsZ0JBQ0EsNkJBREEsRUFFQSxZQUZBOztBQUlBO0FBQ0EsS0F2R0E7QUF3R0EsY0F4R0Esc0JBd0dBLElBeEdBLEVBd0dBO0FBQ0E7QUFDQTtBQUNBLEtBM0dBO0FBNEdBO0FBQ0Esb0JBN0dBLDhCQTZHQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FuSEE7QUFvSEE7QUFDQSx1QkFySEEsaUNBcUhBO0FBQ0E7QUFDQSxLQXZIQTtBQXdIQTtBQUNBLGlCQXpIQSwyQkF5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxFQUdBLElBSEE7QUFJQSxLQWhJQTtBQWlJQTtBQUNBLGlCQWxJQSwyQkFrSUE7QUFDQTtBQUNBLEtBcElBO0FBcUlBLFFBcklBLGtCQXFJQTtBQUNBO0FBQ0EsZ0JBREE7O0FBR0EsS0F6SUE7QUEwSUE7QUFDQSxlQTNJQSx5QkEySUE7QUFDQTtBQUNBLHNDQURBOztBQUdBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQXJKQTtBQXNKQSxvQkF0SkEsNEJBc0pBLENBdEpBLEVBc0pBO0FBQ0E7QUFDQSxLQXhKQTtBQXlKQSxjQXpKQSxzQkF5SkEsQ0F6SkEsRUF5SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBOUpBO0FBK0pBO0FBQ0EsZ0JBaEtBLHdCQWdLQSxDQWhLQSxFQWdLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBcEtBO0FBcUtBLGdCQXJLQSx3QkFxS0EsQ0FyS0EsRUFxS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsd0JBRkE7O0FBSUE7QUFDQSxLQTlLQTtBQStLQSxhQS9LQSxxQkErS0EsT0EvS0EsRUErS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEEsRUFHQSxHQUhBO0FBSUE7QUFDQSxLQTVMQTtBQTZMQSxjQTdMQSxzQkE2TEEsQ0E3TEEsRUE2TEE7QUFDQTs7QUFFQTtBQUNBLHFDQURBOztBQUdBLEtBbk1BO0FBb01BLGFBcE1BLHFCQW9NQSxDQXBNQSxFQW9NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FSQSxNQVFBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDBCQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBN05BO0FBOE5BLFlBOU5BLG9CQThOQSxDQTlOQSxFQThOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FYQSxFQVdBLEdBWEE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeFBBLEVBMUZBOztBQW9WQTtBQUNBLGNBREEsc0JBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQU5BO0FBT0EsaUJBUEEseUJBT0EsS0FQQSxFQU9BO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGdCQUZBO0FBR0EsaUJBSEE7O0FBS0E7QUFDQSxLQWRBLEVBcFZBOztBQW9XQSxTQXBXQSxxQkFvV0E7QUFDQTtBQUNBLGFBREE7O0FBR0EsR0F4V0EsRSIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cImJnLWRhcmtcIj5cblx0XHQ8dmlkZW8gaWQ9XCJ2aWRlb1wiIHJlZj1cInZpZGVvXCJcclxuXHRcdDpzcmM9XCJzcmNcIlxyXG5cdFx0OnBvc3Rlcj1cInBvc3RlclwiIFxyXG5cdFx0OmNvbnRyb2xzPVwiZmFsc2VcIlxyXG5cdFx0OnNob3ctY2VudGVyLXBsYXktYnRuPVwiZmFsc2VcIlxyXG5cdFx0OnNob3ctZnVsbHNjcmVlbi1idG49XCJmYWxzZVwiIFxyXG5cdFx0OnNob3ctcHJvZ3Jlc3M9XCJmYWxzZVwiIFxyXG5cdFx0OmVuYWJsZS1wcm9ncmVzcy1nZXN0dXJlPVwiZmFsc2VcIiBcclxuXHRcdHN0eWxlPVwid2lkdGg6IDc1MHJweDtoZWlnaHQ6IDIyNXB4O1wiXHJcblx0XHRAZnVsbHNjcmVlbmNoYW5nZT1cImZ1bGxzY3JlZW5jaGFuZ2VcIlxyXG5cdFx0QHRpbWV1cGRhdGU9XCJ0aW1ldXBkYXRlXCJcclxuXHRcdEBwbGF5PVwiaXNwbGF5ID0gdHJ1ZVwiIFxyXG5cdFx0QHBhdXNlPVwiaXNwbGF5ID0gZmFsc2VcIlxyXG5cdFx0PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIGZsZXggYWxpZ24tY2VudGVyIGp1c3RpZnktY2VudGVyXCIgOnN0eWxlPVwidmlkZW9Cb3hcIj5cclxuXHRcdFx0XHQ8IS0tIOiSmeeJiCAtLT5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIGxlZnQtMCByaWdodC0wIHRvcC0wIGJvdHRvbS0wXCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaFN0YXJ0XCIgQHRvdWNobW92ZT1cInRvdWNoTW92ZVwiIEB0b3VjaGVuZD1cInRvdWNoRW5kXCI+PC92aWV3PlxyXG5cdFx0XHRcdDwhLS0g5L6n6L65IC0tPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJmdWxsU2NyZWVuU3RhdHVzICYmIChzaG93U3RhdHVzQmFyU3RhdHVzIHx8IGxvY2tTY3JlZW5TdGF0dXMpXCIgXHJcblx0XHRcdFx0Y2xhc3M9XCJwb3NpdGlvbi1hYnNvbHV0ZSB0b3AtMCByaWdodC0wIGJvdHRvbS0wIGZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCIgXHJcblx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogODBweDtcIj5cclxuXHRcdFx0XHRcdDx2aWV3IFxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJyb3VuZGVkIGZsZXgganVzdGlmeS1jZW50ZXIgYWxpZ24tY2VudGVyXCIgXHJcblx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOjYwcHg7aGVpZ2h0OiA2MHB4O2JhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcIlxyXG5cdFx0XHRcdFx0QGNsaWNrPVwibG9ja1NjcmVlblwiXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiaWNvbmZvbnRcIlxyXG5cdFx0XHRcdFx0XHQ6Y2xhc3M9XCJsb2NrU2NyZWVuU3RhdHVzID8gJ3RleHQtbWFpbicgOiAndGV4dC13aGl0ZSdcIlxyXG5cdFx0XHRcdFx0XHQ+JiN4ZTYyMDwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PCEtLSDmj5DnpLrmoYYgLS0+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInNob3dUb2FzdFN0YXR1c1wiIGNsYXNzPVwicC0yIHJvdW5kZWRcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcIj5cclxuXHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJ0b2FzdC50eXBlID09PSAncHJvZ3Jlc3MnXCIgY2xhc3M9XCJmb250IHRleHQtd2hpdGVcIj57e2N1cnJlbnRUaW1lfGZvcm1hdFRpbWV9fS97e2R1cmF0aW9ufGZvcm1hdFRpbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDx0ZXh0IHYtaWY9XCJ0b2FzdC50eXBlID09PSAnbXNnJ1wiIGNsYXNzPVwiZm9udCB0ZXh0LXdoaXRlXCI+e3t0b2FzdC5tc2d9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PCEtLSDlhajlsY/kuYvlkI7nmoTmjqfliLbmnaEgLS0+XHJcblx0XHRcdFx0PCEtLSDpobbpg6ggLS0+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cInNob3dTdGF0dXNCYXJTdGF0dXMgJiYgZnVsbFNjcmVlblN0YXR1c1wiIFxyXG5cdFx0XHRcdGNsYXNzPVwidmlkZW8tYmctdG9wIHBvc2l0aW9uLWFic29sdXRlIHRvcC0wIGxlZnQtMCByaWdodC0wIGZsZXgganVzdGlmeS1iZXR3ZWVuIGFsaWduLWNlbnRlclwiXHJcblx0XHRcdFx0c3R5bGU9XCJoZWlnaHQ6IDQ0cHg7XCJcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3ICBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGYtaWNvbi1idG4gOmljb249XCInXFx1ZTYxMidcIiBAY2xpY2s9XCJmdWxsT3JFeGl0U2NyZWVuXCI+PC9mLWljb24tYnRuPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIgcHgtMlwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZVwiIHN0eWxlPVwiZm9udC1zaXplOiAxNXB4O2xpbmVzOiAxO1wiPnt7dGl0bGV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXggYWxpZ24tY2VudGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGYtaWNvbi1idG4gOmljb249XCInXFx1ZTYxMidcIiBAY2xpY2s9XCJmdWxsT3JFeGl0U2NyZWVuXCI+PC9mLWljb24tYnRuPlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdDwhLS0g5bqV6YOoIC0tPlxyXG5cdFx0XHRcdDx2aWV3IHYtaWY9XCJzaG93U3RhdHVzQmFyU3RhdHVzICYmIGZ1bGxTY3JlZW5TdGF0dXNcIiBcclxuXHRcdFx0XHRcdGNsYXNzPVwidmlkZW8tYmctYm90dG9tIHBvc2l0aW9uLWFic29sdXRlIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wXCJcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJoZWlnaHQ6IDg4cHg7XCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleC0xXCIgXHJcblx0XHRcdFx0XHRcdHN0eWxlPVwicGFkZGluZy1sZWZ0OiAxNXB4O3BhZGRpbmctcmlnaHQ6IDE1cHg7XCJcclxuXHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdDxmLXNsaWRlciBcclxuXHRcdFx0XHRcdFx0XHQ6ZHVyYXRpb249XCJkdXJhdGlvblwiIDpjdXJyZW50VGltZT1cImN1cnJlbnRUaW1lXCIgXHJcblx0XHRcdFx0XHRcdFx0QGNoYW5nZT1cInNsaWRlckNoYW5nZVwiIEB1cGRhdGU9XCJzbGlkZXJVcGRhdGVcIj48L2Ytc2xpZGVyPlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQ8dmlldyBzdHlsZT1cImhlaWdodDogNDRweDtcIiBjbGFzcz1cImZsZXggYWxpZ24tc3RyZXRjaCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXhcIiA+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Zi1pY29uLWJ0biB2LWlmPVwiIWlzcGxheVwiIDppY29uPVwiJ1xcdWU2M2EnXCIgc2l6ZT1cIjIyXCIgQGNsaWNrPVwicGxheU9yUGF1c2VcIj48L2YtaWNvbi1idG4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Zi1pY29uLWJ0biB2LWVsc2UgOmljb249XCInXFx1ZTYwNSdcIiBzaXplPVwiMjJcIiBAY2xpY2s9XCJwbGF5T3JQYXVzZVwiPjwvZi1pY29uLWJ0bj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBzdHlsZT1cIndpZHRoOiA4MHB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImZvbnQtc20gdGV4dC13aGl0ZVwiPnt7Y3VycmVudFRpbWV8Zm9ybWF0VGltZX19L3t7ZHVyYXRpb258Zm9ybWF0VGltZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGYtaWNvbi1idG4gOmljb249XCInXFx1ZTY5NydcIiBzaXplPVwiMjJcIiA+PC9mLWljb24tYnRuPlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXhcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXJcIiBcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwiaGVpZ2h0OiA0NHB4O3BhZGRpbmctbGVmdDogMTVweDtwYWRkaW5nLXJpZ2h0OiAxNXB4O1wiXHJcblx0XHRcdFx0XHRcdFx0XHQgQGNsaWNrPVwib3BlbkRyYXdlcignc3BlZWQnKVwiXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGV4dC13aGl0ZVwiIHN0eWxlPVwiZm9udC1zaXplOiAxNXB4O1wiPnt7cmF0ZX19PC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQ8dmlldyBcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXJcIiBcclxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPVwiaGVpZ2h0OiA0NHB4O3BhZGRpbmctbGVmdDogMTVweDtwYWRkaW5nLXJpZ2h0OiAxNXB4O1wiXHJcblx0XHRcdFx0XHRcdFx0XHQgQGNsaWNrPVwib3BlbkRyYXdlcigncXVhbGl0eScpXCJcclxuXHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0ZXh0LXdoaXRlXCIgc3R5bGU9XCJmb250LXNpemU6IDE1cHg7XCI+e3txdWFsaXR5fGZvcm1hdFF1YWxpdHl9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4IGFsaWduLWNlbnRlclwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9XCJoZWlnaHQ6IDQ0cHg7cGFkZGluZy1sZWZ0OiAxNXB4O3BhZGRpbmctcmlnaHQ6IDE1cHg7XCJcclxuXHRcdFx0XHRcdFx0XHRcdEBjbGljaz1cIm9wZW5EcmF3ZXIoJ3ZpZGVvJylcIlxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRleHQtd2hpdGVcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTVweDtcIiA+6YCJ6ZuGPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0PCEtLSDlvLnmoYYgLS0+XHJcblx0XHRcdFx0PHZpZXcgdi1pZj1cImZ1bGxTY3JlZW5TdGF0dXMgJiYgc2hvd0RyYXdlclwiIGNsYXNzPVwicG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBib3R0b20tMCBmbGV4IGZsZXgtY29sdW1uXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XCI+XHJcblx0XHRcdFx0XHQ8IS0tIOmAn+W6piAtLT5cclxuXHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJkcmF3ZXJUeXBlPT09J3NwZWVkJ1wiIGNsYXNzPVwiZmxleC0xIGZsZXggZmxleC1jb2x1bW5cIiBzdHlsZT1cIndpZHRoOiAxMDBweDtcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXJcIiBcclxuXHRcdFx0XHRcdFx0di1mb3I9XCIoaXRlbSxpbmRleCkgaW4gcmF0ZUxpc3RcIiA6a2V5PSdpbmRleCdcclxuXHRcdFx0XHRcdFx0QGNsaWNrPSdjaGFuZ2VSYXRlKGl0ZW0pJ1xyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiaXRlbT09PXJhdGU/J3RleHQtbWFpbic6J3RleHQtd2hpdGUnXCI+e3tpdGVtfX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PCEtLSDpgInpm4YgLS0+XHJcblx0XHRcdFx0XHQ8dmlldyB2LWVsc2UtaWY9XCJkcmF3ZXJUeXBlPT09J3ZpZGVvJ1wiIGNsYXNzPVwiZmxleC0xIGZsZXggZmxleC1jb2x1bW5cIiBzdHlsZT1cIndpZHRoOiAzMDBweDtcIj5cclxuXHRcdFx0XHRcdFx0PHNjcm9sbC12aWV3IHNjcm9sbC15PVwidHJ1ZVwiIGNsYXNzPVwiZmxleC0xIHAtMlwiPlxyXG5cdFx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm9yZGVyIHAtMiBmbGV4IHJvdW5kZWQgbWItMlwiIFxyXG5cdFx0XHRcdFx0XHRcdHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHZpZGVvTGlzdFwiIDprZXk9XCJpbmRleFwiXHJcblx0XHRcdFx0XHRcdFx0QGNsaWNrPVwiY2hhbmdlVmlkZW8oaXRlbSxpbmRleClcIlxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxNHB4O2xpbmVzOiAxO1wiXHJcblx0XHRcdFx0XHRcdFx0XHQ6Y2xhc3M9XCJ2aWRlb0luZGV4PT09aW5kZXg/J3RleHQtbWFpbic6J3RleHQtd2hpdGUnXCJcclxuXHRcdFx0XHRcdFx0XHRcdD57e2l0ZW0udGl0bGV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDwhLS0g5riF5pmw5bqmIC0tPlxyXG5cdFx0XHRcdFx0PHZpZXcgdi1lbHNlIGNsYXNzPVwiZmxleC0xIGZsZXggZmxleC1jb2x1bW5cIiBzdHlsZT1cIndpZHRoOiAxMDBweDtcIj5cclxuXHRcdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJmbGV4LTEgZmxleCBqdXN0aWZ5LWNlbnRlciBhbGlnbi1jZW50ZXJcIiBcclxuXHRcdFx0XHRcdFx0di1mb3I9XCIoaXRlbSxpbmRleCkgaW4gcXVhbGl0eUxpc3RcIiA6a2V5PSdpbmRleCdcclxuXHRcdFx0XHRcdFx0QGNsaWNrPSdjaGFuZ2VRdWFsaXR5KGl0ZW0pJ1xyXG5cdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgOmNsYXNzPVwiaXRlbS52YWx1ZT09PXF1YWxpdHk/J3RleHQtbWFpbic6J3RleHQtd2hpdGUnXCI+e3tpdGVtLm5hbWV9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZGVvPlxyXG5cdFx0PCEtLSDpnZ7lhajlsY8gLS0+XHJcblx0XHQ8IS0tIOmhtumDqCAtLT5cclxuXHRcdDx2aWV3IHYtaWY9XCJzaG93U3RhdHVzQmFyU3RhdHVzICYmICFmdWxsU2NyZWVuU3RhdHVzXCIgY2xhc3M9XCJ2aWRlby1iZy10b3AgcG9zaXRpb24tZml4ZWQgdG9wLTAgbGVmdC0wIHJpZ2h0LTBcIj5cclxuXHRcdFx0PHZpZXcgOnN0eWxlPVwiJ2hlaWdodDogJytzdGF0dXNCYXJIZWlnaHQrJ3B4OydcIj48L3ZpZXc+XHJcblx0XHRcdDx2aWV3IHN0eWxlPVwiaGVpZ2h0OiA0NHB4O1wiIGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXJcIj5cclxuXHRcdFx0XHQ8Zi1pY29uLWJ0biA6aWNvbj1cIidcXHVlNjEyJ1wiIEBjbGljaz1cImJhY2tcIj48L2YtaWNvbi1idG4+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0g5bqV6YOo5o6n5Yi25p2hIC0tPlxyXG5cdFx0PHZpZXcgdi1pZj1cInNob3dTdGF0dXNCYXJTdGF0dXMgJiYgIWZ1bGxTY3JlZW5TdGF0dXNcIiBjbGFzcz1cInZpZGVvLWJnLWJvdHRvbSBwb3NpdGlvbi1maXhlZCBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMFwiPlxyXG5cdFx0XHQ8dmlldyBzdHlsZT1cImhlaWdodDogNDRweDtcIiBjbGFzcz1cImZsZXggYWxpZ24tc3RyZXRjaFwiPlxyXG5cdFx0XHRcdDxmLWljb24tYnRuIHYtaWY9XCIhaXNwbGF5XCIgOmljb249XCInXFx1ZTYzYSdcIiBzaXplPVwiMjJcIiBAY2xpY2s9XCJwbGF5T3JQYXVzZVwiPjwvZi1pY29uLWJ0bj5cclxuXHRcdFx0XHQ8Zi1pY29uLWJ0biB2LWVsc2UgOmljb249XCInXFx1ZTYwNSdcIiBzaXplPVwiMjJcIiBAY2xpY2s9XCJwbGF5T3JQYXVzZVwiPjwvZi1pY29uLWJ0bj5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMVwiPlxyXG5cdFx0XHRcdFx0PGYtc2xpZGVyIDpkdXJhdGlvbj1cImR1cmF0aW9uXCIgOmN1cnJlbnRUaW1lPVwiY3VycmVudFRpbWVcIiBAY2hhbmdlPVwic2xpZGVyQ2hhbmdlXCIgQHVwZGF0ZT1cInNsaWRlclVwZGF0ZVwiPjwvZi1zbGlkZXI+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiBzdHlsZT1cIndpZHRoOiA4MHB4O1wiPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJmb250LXNtIHRleHQtd2hpdGVcIj57e2N1cnJlbnRUaW1lfGZvcm1hdFRpbWV9fS97e2R1cmF0aW9ufGZvcm1hdFRpbWV9fTwvdGV4dD5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PGYtaWNvbi1idG4gOmljb249XCInXFx1ZTgwMCdcIiBzaXplPVwiMjJcIiBAY2xpY2s9XCJmdWxsT3JFeGl0U2NyZWVuXCI+PC9mLWljb24tYnRuPlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHRcblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRjb25zdCBkID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHRsZXQgdmlkZW9DVFggPSBudWxsXHJcblx0bGV0IHNob3dUb2FzdFRpbWVyID0gbnVsbFxyXG5cdGxldCB0aW1lciA9IG51bGxcclxuXHRpbXBvcnQgZkljb25CdG4gZnJvbSAnLi9jb21wb25lbnRzL2YtaWNvbi1idG4udnVlJztcblx0aW1wb3J0IGZTbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL2Ytc2xpZGUudnVlJztcclxuXHQvLyBjb25zdCBkZW1vTGlzdCA9IFtcclxuXHQvLyBcdHtcclxuXHQvLyBcdGluZGV4OjAsXHJcblx0Ly8gXHR0aXRsZTpcIuS8mOWMluepuuaVsOaNrum7mOiupOaYvuekulwiLFxyXG5cdC8vIFx0bGlzdDpbe1xyXG5cdC8vIFx0XHRuYW1lOlwi5qCH5riFXCIsXHJcblx0Ly8gXHRcdHZhbHVlOlwiU0RcIixcclxuXHQvLyBcdFx0dXJsOlwiaHR0cHM6Ly9kb3V5aW56Y21jc3Mub3NzLWNuLXNoZW56aGVuLmFsaXl1bmNzLmNvbS8lRTglQUYlQkUlRTYlOTclQjYxLiUyMCVFOSVBMSVCOSVFNyU5QiVBRSVFNCVCQiU4QiVFNyVCQiU4RC5tcDRcIlxyXG5cdC8vIFx0fSx7XHJcblx0Ly8gXHRcdG5hbWU6XCLpq5jmuIVcIixcclxuXHQvLyBcdFx0dmFsdWU6XCJIRFwiLFxyXG5cdC8vIFx0XHR1cmw6XCJodHRwczovL2RvdXlpbnpjbWNzcy5vc3MtY24tc2hlbnpoZW4uYWxpeXVuY3MuY29tLyVFOCVBRiVCRSVFNiU5NyVCNjEuJTIwJUU5JUExJUI5JUU3JTlCJUFFJUU0JUJCJThCJUU3JUJCJThELm1wNFwiXHJcblx0Ly8gXHR9LHtcclxuXHQvLyBcdFx0bmFtZTpcIui2hea4hVwiLFxyXG5cdC8vIFx0XHR2YWx1ZTpcIkZIRFwiLFxyXG5cdC8vIFx0XHR1cmw6XCJodHRwczovL2RvdXlpbnpjbWNzcy5vc3MtY24tc2hlbnpoZW4uYWxpeXVuY3MuY29tLyVFOCVBRiVCRSVFNiU5NyVCNjEuJTIwJUU5JUExJUI5JUU3JTlCJUFFJUU0JUJCJThCJUU3JUJCJThELm1wNFwiXHJcblx0Ly8gXHR9XSxcclxuXHQvLyB9LFxyXG5cdC8vIHtcclxuXHQvLyBcdGluZGV4OjAsXHJcblx0Ly8gXHR0aXRsZTpcIjIwMTjlubTlubPmmIzlhqxcIixcclxuXHQvLyBcdGxpc3Q6W3tcclxuXHQvLyBcdFx0bmFtZTpcIuagh+a4hVwiLFxyXG5cdC8vIFx0XHR2YWx1ZTpcIlNEXCIsXHJcblx0Ly8gXHRcdHVybDpcImh0dHBzOi8vZG91eWluemNtY3NzLm9zcy1jbi1zaGVuemhlbi5hbGl5dW5jcy5jb20vJUU4JUFGJUJFJUU2JTk3JUI2MS4lMjAlRTklQTElQjklRTclOUIlQUUlRTQlQkIlOEIlRTclQkIlOEQubXA0XCJcclxuXHQvLyBcdH1dLFxyXG5cdC8vIH1dXHJcblx0XG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0Zkljb25CdG4sXHJcblx0XHRcdGZTbGlkZXJcclxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR0aXRsZTpcIlwiLFxyXG5cdFx0XHRcdHNyYzogXCJcIixcclxuXHRcdFx0XHRwb3N0ZXI6XCJcIixcclxuXHRcdFx0XHQvLyDmkq3mlL7nirbmgIFcclxuXHRcdFx0XHRpc3BsYXk6ZmFsc2UsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c3RhdHVzQmFySGVpZ2h0OjAsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y3VycmVudFRpbWU6MCxcclxuXHRcdFx0XHRkdXJhdGlvbjowLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHdpbmRvd1dpZHRoOjAsXHJcblx0XHRcdFx0d2luZG93SGVpZ2h0OjAsXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZnVsbFNjcmVlblN0YXR1czpmYWxzZSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzaG93VG9hc3RTdGF0dXM6ZmFsc2UsXHJcblx0XHRcdFx0dG9hc3Q6e1xyXG5cdFx0XHRcdFx0dHlwZTpcIm1zZ1wiLFxyXG5cdFx0XHRcdFx0bXNnOlwi5o+Q56S6XCJcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNob3dTdGF0dXNCYXJTdGF0dXM6dHJ1ZSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRvbGRUb3VjaHM6e30sXHJcblx0XHRcdFx0b2xkVmFsdWU6e30sXHJcblx0XHRcdFx0ZGJDb3VudDowLFxyXG5cdFx0XHRcdHRvdWNoVHlwZTpudWxsLFxyXG5cdFx0XHRcdHBsYXRmb3JtOlwiYW5kcm9pZFwiLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vIOWFqOWxj+W8ueahhlxyXG5cdFx0XHRcdHNob3dEcmF3ZXI6ZmFsc2UsXHJcblx0XHRcdFx0Ly8g6YCf5bqmXHJcblx0XHRcdFx0ZHJhd2VyVHlwZTpcInNwZWVkXCIsXHJcblx0XHRcdFx0Ly8g5b2T5YmN6YCf5bqmXHJcblx0XHRcdFx0cmF0ZTpcIjEuMFwiLFxyXG5cdFx0XHRcdC8v6YCf5bqm6YCJ5oupXHJcblx0XHRcdFx0cmF0ZUxpc3Q6WycyLjAnLCcxLjUnLCcxLjI1JywnMS4wJywnMC44JywnMC41J10sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8g6YCJ6ZuGXHJcblx0XHRcdFx0dmlkZW9JbmRleDowLFxyXG5cdFx0XHRcdHZpZGVvTGlzdDpbXSxcclxuXHRcdFx0XHRxdWFsaXR5OlwiSERcIixcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyDplIHlsY/nirbmgIFcclxuXHRcdFx0XHRsb2NrU2NyZWVuU3RhdHVzOmZhbHNlXHJcblx0XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHRsZXQgcmVzID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKClcclxuXHRcdFx0dGhpcy5zdGF0dXNCYXJIZWlnaHQgPSByZXMuc3RhdHVzQmFySGVpZ2h0XHJcblx0XHRcdHRoaXMud2luZG93SGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxyXG5cdFx0XHR0aGlzLndpbmRvd1dpZHRoID0gcmVzLndpbmRvd1dpZHRoXHJcblx0XHRcdHRoaXMucGxhdGZvcm0gPSByZXMucGxhdGZvcm1cclxuXHRcdFx0Ly8g5byV5YWl5Zu+5qCHXHJcblx0XHRcdGQuYWRkUnVsZSgnZm9udEZhY2UnLCB7XHJcblx0XHRcdFx0J2ZvbnRGYW1pbHknOiBcImljb25mb250XCIsXHJcblx0XHRcdFx0J3NyYyc6IFwidXJsKCdodHRwczovL2F0LmFsaWNkbi5jb20vdC9mb250XzE0MTkxNzZfbXpvOHJzanhpNGMudHRmJylcIlxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHR1bmkuJG9uKCd2aWRlbycsdGhpcy5oYW5kbGVWaWRlb0V2ZW50KVxyXG5cdFx0XHQvLyB0aGlzLnZpZGVvTGlzdCA9IGRlbW9MaXN0XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dmlkZW9DVFggPSB0aGlzLiRyZWZzLnZpZGVvXHJcblx0XHR9LFxyXG5cdFx0ZGVzdHJveWVkKCkge1xyXG5cdFx0XHR1bmkuJG9mZigndmlkZW8nLHRoaXMuaGFuZGxlVmlkZW9FdmVudClcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHR2aWRlb0JveCgpIHtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5mdWxsU2NyZWVuU3RhdHVzID8gYHdpZHRoOiR7dGhpcy53aW5kb3dIZWlnaHR9cHg7aGVpZ2h0OiR7dGhpcy53aW5kb3dXaWR0aH07YCA6ICd3aWR0aDo3NTBycHg7aGVpZ2h0OjIyNXB4OydcclxuXHRcdFx0fSxcclxuXHRcdFx0bW9kYWxTdHlsZSgpe1xyXG5cdFx0XHRcdGxldCB0b3AgPSB0aGlzLnN0YXR1c0JhckhlaWdodCArIDQ0XHJcblx0XHRcdFx0cmV0dXJuIGB0b3A6JHt0b3B9cHg7Ym90dG9tOjQ0cHg7YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRxdWFsaXR5TGlzdCgpe1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLnZpZGVvTGlzdFt0aGlzLnZpZGVvSW5kZXhdLmxpc3Q/dGhpcy52aWRlb0xpc3RbdGhpcy52aWRlb0luZGV4XS5saXN0IDogW11cclxuXHRcdFx0fVx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0XHJcblx0XHRcdGhhbmRsZVZpZGVvRXZlbnQoZSl7XHJcblx0XHRcdFx0c3dpdGNoKGUuZXZlbnQpe1xyXG5cdFx0XHRcdFx0Y2FzZSAnaW5pdCc6XHJcblx0XHRcdFx0XHR0aGlzLnZpZGVvSW5kZXggPSBlLnBhcmFtcy5hY3RpdmVJbmRleFxyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0xpc3QgPSBlLnBhcmFtcy52aWRlb3MubWFwKGl0ZW09PntcclxuXHRcdFx0XHRcdFx0cmV0dXJue1xyXG5cdFx0XHRcdFx0XHRcdGluZGV4OjAsXHJcblx0XHRcdFx0XHRcdFx0dGl0bGU6aXRlbS50aXRsZSxcclxuXHRcdFx0XHRcdFx0XHRsaXN0Olt7XHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lOifpq5jmuIUnLFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6XCJIRFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0dXJsOml0ZW0udXJsXHJcblx0XHRcdFx0XHRcdFx0fV1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHRoaXMucG9zdGVyID0gZS5wYXJhbXMucG9zdGVyXHJcblx0XHRcdFx0XHRsZXQgdiA9IHRoaXMudmlkZW9MaXN0W3RoaXMudmlkZW9JbmRleF1cclxuXHRcdFx0XHRcdGlmKHYpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNyYyA9IHYubGlzdFt2LmluZGV4XS51cmxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdjaGFuZ2UnOlxyXG5cdFx0XHRcdFx0dmlkZW9DVFgucGF1c2UoKVxyXG5cdFx0XHRcdFx0dGhpcy52aWRlb0luZGV4ID0gZS5wYXJhbXMuYWN0aXZlSW5kZXhcclxuXHRcdFx0XHRcdGxldCBvID0gdGhpcy52aWRlb0xpc3RbdGhpcy52aWRlb0luZGV4XVxyXG5cdFx0XHRcdFx0aWYobyl7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3JjID0gby5saXN0W28uaW5kZXhdLnVybFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0XHR2aWRlb0NUWC5wbGF5KClcclxuXHRcdFx0XHRcdH0sMzAwKVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g6ZSB5bGP5ZKM6Kej6Zmk6ZSB5bGPXHJcblx0XHRcdGxvY2tTY3JlZW4oKXtcclxuXHRcdFx0XHR0aGlzLmxvY2tTY3JlZW5TdGF0dXMgPSAhdGhpcy5sb2NrU2NyZWVuU3RhdHVzXHJcblx0XHRcdFx0aWYodGhpcy5sb2NrU2NyZWVuU3RhdHVzKXtcclxuXHRcdFx0XHRcdHRoaXMuaGlkZVN0YXR1c0JhcigpXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHR0aGlzLnNob3dTdGF0dXNCYXIoKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5riF5pmw5bqmXHJcblx0XHRcdGNoYW5nZVF1YWxpdHkoaXRlbSl7XHJcblx0XHRcdFx0dmlkZW9DVFgucGF1c2UoKVxyXG5cdFx0XHRcdGlmKCFpdGVtLnVybCl7XHJcblx0XHRcdFx0XHRyZXR1cm4gdW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiAn6KeG6aKR6ZO+5o6l5LiN5a2Y5ZyoJyxcclxuXHRcdFx0XHRcdFx0aWNvbjonbm9uZSdcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnNyYyA9IGl0ZW0udXJsXHJcblx0XHRcdFx0dGhpcy5xdWFsaXR5PWl0ZW0udmFsdWVcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOiAn5riF5pmw5bqm5YiH5o2i5Li677yaJytpdGVtLm5hbWUsXHJcblx0XHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdHZpZGVvQ1RYLnBsYXkoKVxyXG5cdFx0XHRcdH0sMzAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpgInpm4ZcclxuXHRcdFx0Y2hhbmdlVmlkZW8oaXRlbSxpbmRleCl7XHJcblx0XHRcdFx0dGhpcy52aWRlb0luZGV4ID0gaW5kZXhcclxuXHRcdFx0XHR2aWRlb0NUWC5zdG9wXHJcblx0XHRcdFx0bGV0IGxpc3QgPSB0aGlzLnZpZGVvTGlzdFtpbmRleF0ubGlzdFxyXG5cdFx0XHRcdGxldCBpID0gbGlzdC5maW5kSW5kZXgodj0+di52YWx1ZSA9PT0gdGhpcy5xdWFsaXR5KVxyXG5cdFx0XHRcdGlmKGkgPT09IC0xKXtcclxuXHRcdFx0XHRcdGlmKGxpc3QubGVuZ3RoPjApe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNyYyA9IGxpc3RbMF0udXJsXHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn6KeG6aKR6ZO+5o6l5LiN5a2Y5ZyoJyxcclxuXHRcdFx0XHRcdFx0XHRpY29uOidub25lJ1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMuc3JjID0gbGlzdFtpXS51cmxcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+WIh+aNouWIsO+8micraXRlbS50aXRsZSxcclxuXHRcdFx0XHRcdGljb246J25vbmUnXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0dmlkZW9DVFguc2VlaygwKVxyXG5cdFx0XHRcdFx0dmlkZW9DVFgucGxheSgpXHJcblx0XHRcdFx0fSwzMDApXHJcblx0XHRcdFx0dGhpcy5zaG93RHJhd2VyID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5L+u5pS56YCf5bqm55qE5pa55rOVXHJcblx0XHRcdGNoYW5nZVJhdGUoaXRlbSl7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ2hoJylcclxuXHRcdFx0XHR0aGlzLnJhdGUgPSBpdGVtXHJcblx0XHRcdFx0dmlkZW9DVFgucGxheWJhY2tSYXRlKHRoaXMucmF0ZSlcclxuXHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHRpdGxlOlwi5b2T5YmN6YCf5bqm5L+u5pS55Li677yaXCIrdGhpcy5yYXRlLFxyXG5cdFx0XHRcdFx0aWNvbjpcIm5vbmVcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0dGhpcy5zaG93RHJhd2VyID0gZmFsc2VcclxuXHRcdFx0fSxcclxuXHRcdFx0b3BlbkRyYXdlcih0eXBlKXtcclxuXHRcdFx0XHR0aGlzLmRyYXdlclR5cGUgPSB0eXBlXHJcblx0XHRcdFx0dGhpcy5zaG93RHJhd2VyID0gdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDlhajlsY8v6YCA5Ye65YWo5bGPXHJcblx0XHRcdGZ1bGxPckV4aXRTY3JlZW4oKXtcclxuXHRcdFx0XHRpZih0aGlzLmZ1bGxTY3JlZW5TdGF0dXMpe1xyXG5cdFx0XHRcdFx0dmlkZW9DVFguZXhpdEZ1bGxTY3JlZW4oKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR2aWRlb0NUWC5yZXF1ZXN0RnVsbFNjcmVlbigpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDmmL7npLrmiJbpmpDol4/mjqfliLbmnaFcclxuXHRcdFx0c2hvd09ySGlkZVN0YXR1c0Jhcigpe1xyXG5cdFx0XHRcdHRoaXMuc2hvd1N0YXR1c0JhclN0YXR1cyA/IHRoaXMuaGlkZVN0YXR1c0JhcigpIDogdGhpcy5zaG93U3RhdHVzQmFyKClcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8g5pi+56S65o6n5Yi25p2hXHJcblx0XHRcdHNob3dTdGF0dXNCYXIoKXtcclxuXHRcdFx0XHR0aGlzLnNob3dTdGF0dXNCYXJTdGF0dXMgPSB0cnVlXHJcblx0XHRcdFx0dGltZXIgPSB0aW1lciA/IGNsZWFyVGltZW91dCh0aW1lcikgOiBudWxsXHJcblx0XHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XHJcblx0XHRcdFx0XHR0aGlzLmhpZGVTdGF0dXNCYXIoKVxyXG5cdFx0XHRcdFx0dGltZXIgPSBudWxsXHJcblx0XHRcdFx0fSwzMDAwKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHQvLyDpmpDol4/mjqfliLbmnaFcclxuXHRcdFx0aGlkZVN0YXR1c0Jhcigpe1xyXG5cdFx0XHRcdHRoaXMuc2hvd1N0YXR1c0JhclN0YXR1cyA9IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGJhY2soKXtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVCYWNrKHtcclxuXHRcdFx0XHRcdGRlbHRhOiAxXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOaSreaUvi/mmoLlgZxcclxuXHRcdFx0cGxheU9yUGF1c2UoKXtcclxuXHRcdFx0XHR0aGlzLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHRtc2c6dGhpcy5pc3BsYXkgPyAn5pqC5YGcJyA6ICfmkq3mlL4nXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHRpZih0aGlzLmlzcGxheSl7XHJcblx0XHRcdFx0XHR2aWRlb0NUWC5wYXVzZSgpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuc2hvd1N0YXR1c0JhcigpXHJcblx0XHRcdFx0XHR2aWRlb0NUWC5wbGF5KClcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdGZ1bGxzY3JlZW5jaGFuZ2UoZSkge1xyXG5cdFx0XHRcdHRoaXMuZnVsbFNjcmVlblN0YXR1cyA9IGUuZGV0YWlsLmZ1bGxTY3JlZW5cclxuXHRcdFx0fSxcclxuXHRcdFx0dGltZXVwZGF0ZShlKXtcclxuXHRcdFx0XHRpZighdGhpcy5zaG93VG9hc3RTdGF0dXMpe1xyXG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50VGltZSA9IHBhcnNlSW50KGUuZGV0YWlsLmN1cnJlbnRUaW1lKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLmR1cmF0aW9uID0gcGFyc2VJbnQoZS5kZXRhaWwuZHVyYXRpb24pXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOi/m+W6puadoeWPmOWMllxyXG5cdFx0XHRzbGlkZXJDaGFuZ2UoZSl7XHJcblx0XHRcdFx0dmlkZW9DVFguc2VlayhlKVxyXG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0U3RhdHVzID0gZmFsc2VcclxuXHRcdFx0XHR2aWRlb0NUWC5wbGF5KClcclxuXHRcdFx0fSxcclxuXHRcdFx0c2xpZGVyVXBkYXRlKGUpe1xyXG5cdFx0XHRcdHRoaXMuc2hvd1N0YXR1c0JhcigpXHJcblx0XHRcdFx0dmlkZW9DVFgucGF1c2UoKVxyXG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0U3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdHR5cGU6XCJwcm9ncmVzc1wiLFxyXG5cdFx0XHRcdFx0YXV0b0Nsb3NlOmZhbHNlXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHR0aGlzLmN1cnJlbnRUaW1lID0gZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93VG9hc3Qob3B0aW9ucyl7XHJcblx0XHRcdFx0dGhpcy50b2FzdC50eXBlID0gb3B0aW9ucy50eXBlIHx8ICdtc2cnXHJcblx0XHRcdFx0dGhpcy50b2FzdC5tc2cgPSBvcHRpb25zLm1zZyB8fCAn5o+Q56S6J1xyXG5cdFx0XHRcdHRoaXMuc2hvd1RvYXN0U3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdGlmKG9wdGlvbnMuYXV0b0Nsb3NlICE9PSBmYWxzZSl7XHJcblx0XHRcdFx0XHRpZihzaG93VG9hc3RUaW1lcil7XHJcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dChzaG93VG9hc3RUaW1lcilcclxuXHRcdFx0XHRcdH0gXHJcblx0XHRcdFx0XHRzaG93VG9hc3RUaW1lciA9IHNldFRpbWVvdXQoKCk9PntcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93VG9hc3RTdGF0dXMgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHRzaG93VG9hc3RUaW1lciA9IG51bGxcclxuXHRcdFx0XHRcdH0sNTAwKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hTdGFydChlKXtcclxuXHRcdFx0XHR0aGlzLm9sZFRvdWNocyA9IGUuY2hhbmdlZFRvdWNoZXNbMF1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLm9sZFZhbHVlID0ge1xyXG5cdFx0XHRcdFx0Y3VycmVudFRpbWU6dGhpcy5jdXJyZW50VGltZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hNb3ZlKGUpe1xyXG5cdFx0XHRcdGlmKHRoaXMubG9ja1NjcmVlblN0YXR1cykgcmV0dXJuXHJcblx0XHRcdFx0bGV0IG5ld1RvdWNocyA9IGUuY2hhbmdlZFRvdWNoZXNbMF1cclxuXHRcdFx0XHRpZighdGhpcy50b3VjaFR5cGUpe1xyXG5cdFx0XHRcdFx0dGhpcy50b3VjaFR5cGUgPSBNYXRoLmFicyggbmV3VG91Y2hzLnBhZ2VYIC0gdGhpcy5vbGRUb3VjaHMucGFnZVggKSA+IDIwID8gJ2N1cnJlbnRUaW1lJyA6IG51bGxcclxuXHRcdFx0XHRcdGlmKHRoaXMuZnVsbFNjcmVlblN0YXR1cyAmJiB0aGlzLnBsYXRmb3JtID09PSAnaW9zJyl7XHJcblx0XHRcdFx0XHRcdHRoaXMudG91Y2hUeXBlID0gTWF0aC5hYnMoIG5ld1RvdWNocy5wYWdlWSAtIHRoaXMub2xkVG91Y2hzLnBhZ2VZICkgPiAyMCA/ICdjdXJyZW50VGltZScgOiBudWxsXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZih0aGlzLnRvdWNoVHlwZSA9PT0gJ2N1cnJlbnRUaW1lJyl7XHJcblx0XHRcdFx0XHRcdHZpZGVvQ1RYLnBhdXNlKClcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2UgaWYodGhpcy50b3VjaFR5cGUgPT09ICdjdXJyZW50VGltZScpe1xyXG5cdFx0XHRcdFx0dGhpcy5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHR0eXBlOlwicHJvZ3Jlc3NcIixcclxuXHRcdFx0XHRcdFx0YXV0b0Nsb3NlOmZhbHNlXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0dGhpcy5zaG93U3RhdHVzQmFyKClcclxuXHRcdFx0XHRcdGxldCBuZXdDdXJyZW50VGltZSA9IChuZXdUb3VjaHMucGFnZVggLSB0aGlzLm9sZFRvdWNocy5wYWdlWCkvMjUwICogdGhpcy5kdXJhdGlvbiAqMiArIHRoaXMub2xkVmFsdWUuY3VycmVudFRpbWUgKiAxXHJcblx0XHRcdFx0XHRpZih0aGlzLmZ1bGxTY3JlZW5TdGF0dXMgJiYgdGhpcy5wbGF0Zm9ybSA9PT0gJ2lvcycpe1xyXG5cdFx0XHRcdFx0XHRuZXdDdXJyZW50VGltZSA9IChuZXdUb3VjaHMucGFnZVkgLSB0aGlzLm9sZFRvdWNocy5wYWdlWSkvMjUwICogdGhpcy5kdXJhdGlvbiAqMiArIHRoaXMub2xkVmFsdWUuY3VycmVudFRpbWUgKiAxXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRuZXdDdXJyZW50VGltZSA9IG5ld0N1cnJlbnRUaW1lID4gdGhpcy5kdXJhdGlvbiA/IHRoaXMuZHVyYXRpb24gOiBuZXdDdXJyZW50VGltZVxyXG5cdFx0XHRcdFx0bmV3Q3VycmVudFRpbWUgPSBuZXdDdXJyZW50VGltZSA8IDAgPyAwIDogbmV3Q3VycmVudFRpbWVcclxuXHRcdFx0XHRcdHRoaXMuY3VycmVudFRpbWUgPSBuZXdDdXJyZW50VGltZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2hFbmQoZSl7XHJcblx0XHRcdFx0XHRpZih0aGlzLmxvY2tTY3JlZW5TdGF0dXMpIHJldHVyblxyXG5cdFx0XHRcdGlmKHRoaXMudG91Y2hUeXBlID09PSAnY3VycmVudFRpbWUnKXtcclxuXHRcdFx0XHRcdHZpZGVvQ1RYLnNlZWsodGhpcy5jdXJyZW50VGltZSlcclxuXHRcdFx0XHRcdHZpZGVvQ1RYLnBsYXkoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZih0aGlzLmRiQ291bnQgPT09IDEgfHwgdGhpcy5kYkNvdW50ID09PSAwICl7XHJcblx0XHRcdFx0XHRcdHRoaXMuZGJDb3VudCsrXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZih0aGlzLmRiQ291bnQgPiAwKXtcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKT0+e1xyXG5cdFx0XHRcdFx0XHRcdC8vIOWNleWHu1xyXG5cdFx0XHRcdFx0XHRcdGlmKHRoaXMuZGJDb3VudCA9PT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnNob3dPckhpZGVTdGF0dXNCYXIoKVxyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5zaG93RHJhd2VyID0gZmFsc2VcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0Ly8g5Y+M5Ye7XHJcblx0XHRcdFx0XHRcdFx0aWYodGhpcy5kYkNvdW50ID09PSAyKXtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMucGxheU9yUGF1c2UoKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0aGlzLmRiQ291bnQgPSAwXHJcblx0XHRcdFx0XHRcdH0sMjUwKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnRvdWNoVHlwZSA9IG51bGxcclxuXHRcdFx0XHR0aGlzLnNob3dUb2FzdFN0YXR1cyA9IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRmaWx0ZXJzOiB7XHJcblx0XHRcdGZvcm1hdFRpbWUocmVzdWx0KSB7XHJcblx0XHRcdCAgIHZhciBoID0gTWF0aC5mbG9vcihyZXN1bHQgLyAzNjAwKSA8IDEwID8gJzAnK01hdGguZmxvb3IocmVzdWx0IC8gMzYwMCkgOiBNYXRoLmZsb29yKHJlc3VsdCAvIDM2MDApO1xyXG5cdFx0XHQgICB2YXIgbSA9IE1hdGguZmxvb3IoKHJlc3VsdCAvIDYwICUgNjApKSA8IDEwID8gJzAnICsgTWF0aC5mbG9vcigocmVzdWx0IC8gNjAgJSA2MCkpIDogTWF0aC5mbG9vcigocmVzdWx0IC8gNjAgJSA2MCkpO1xyXG5cdFx0XHQgICB2YXIgcyA9IE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgPCAxMCA/ICcwJyArIE1hdGguZmxvb3IoKHJlc3VsdCAlIDYwKSkgOiBNYXRoLmZsb29yKChyZXN1bHQgJSA2MCkpO1xyXG5cdFx0XHQgICByZXR1cm4gcmVzdWx0ID0gcmVzdWx0ID4gMzYwMCA/IChoICsgXCI6XCIgKyBtICsgXCI6XCIgKyBzKSA6IG0gKyBcIjpcIiArIHM7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZvcm1hdFF1YWxpdHkodmFsdWUpe1xyXG5cdFx0XHRcdGxldCBhcnIgPSB7XHJcblx0XHRcdFx0XHRTRDon5qCH5riFJyxcclxuXHRcdFx0XHRcdEhEOlwi6auY5riFXCIsXHJcblx0XHRcdFx0XHRGSEQ6XCLotoXmuIVcIlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gYXJyW3ZhbHVlXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0cHJvdmlkZSgpe1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHY6dGhpc1xyXG5cdFx0XHR9XHJcblx0XHR9LFxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxyXG4udmlkZW8tYmctdG9we1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KHRvIHRvcCAsIHJnYmEoMCwwLDAsMCkgLCByZ2JhKDAsMCwwLDAuNSkpO1xyXG59XHJcbi52aWRlby1iZy1ib3R0b217XHJcblx0YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tICwgcmdiYSgwLDAsMCwwKSAsIHJnYmEoMCwwLDAsMC41KSk7XHJcbn1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*************************************************************************************!*\
  !*** E:/study/uni-app/在线点播app/pages/detail-video/subNVue/components/f-icon-btn.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _f_icon_btn_vue_vue_type_template_id_afaffccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f-icon-btn.vue?vue&type=template&id=afaffccc&scoped=true& */ 10);\n/* harmony import */ var _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f-icon-btn.vue?vue&type=script&lang=js& */ 12);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./f-icon-btn.vue?vue&type=style&index=0&id=afaffccc&scoped=true&lang=css& */ 14).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./f-icon-btn.vue?vue&type=style&index=0&id=afaffccc&scoped=true&lang=css& */ 14).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _f_icon_btn_vue_vue_type_template_id_afaffccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _f_icon_btn_vue_vue_type_template_id_afaffccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"afaffccc\",\n  \"3d78653b\",\n  false,\n  _f_icon_btn_vue_vue_type_template_id_afaffccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/detail-video/subNVue/components/f-icon-btn.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUk7QUFDbkk7QUFDOEQ7QUFDTDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLG1GQUEyRTtBQUMvSCxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsbUZBQTJFO0FBQ3BJOztBQUVBOztBQUVBO0FBQ29NO0FBQ3BNLGdCQUFnQiw2TUFBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUscUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9mLWljb24tYnRuLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hZmFmZmNjYyZzY29wZWQ9dHJ1ZSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2YtaWNvbi1idG4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mLWljb24tYnRuLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2YtaWNvbi1idG4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWZhZmZjY2Mmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2YtaWNvbi1idG4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YWZhZmZjY2Mmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiFEOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXHJ1bnRpbWVcXFxcY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYWZhZmZjY2NcIixcbiAgXCIzZDc4NjUzYlwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kZXRhaWwtdmlkZW8vc3ViTlZ1ZS9jb21wb25lbnRzL2YtaWNvbi1idG4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!********************************************************************************************************************************!*\
  !*** E:/study/uni-app/在线点播app/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=template&id=afaffccc&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-icon-btn.vue?vue&type=template&id=afaffccc&scoped=true& */ 11);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_template_id_afaffccc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 11 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/study/uni-app/在线点播app/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=template&id=afaffccc&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["video-btn"],
      on: {
        click: function($event) {
          _vm.$emit("click")
        }
      }
    },
    [
      _c(
        "u-text",
        {
          staticClass: ["iconfont", "text-white"],
          style: "font-size:" + _vm.size + "px;"
        },
        [_vm._v(_vm._s(_vm.icon))]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 12 */
/*!**************************************************************************************************************!*\
  !*** E:/study/uni-app/在线点播app/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-icon-btn.vue?vue&type=script&lang=js& */ 13);\n/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXFnQixDQUFnQiw4aUJBQUcsRUFBQyIsImZpbGUiOiIxMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjIuOS44LjIwMjAxMTEwLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYLjIuOS44LjIwMjAxMTEwLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mLWljb24tYnRuLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2YtaWNvbi1idG4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/study/uni-app/在线点播app/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\nvar _default =\n{\n  props: {\n    icon: {\n      type: String,\n      default: '' },\n\n    size: {\n      type: [String, Number],\n      default: 20 } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvY29tcG9uZW50cy9mLWljb24tYnRuLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQURBOztBQUtBO0FBQ0EsNEJBREE7QUFFQSxpQkFGQSxFQUxBLEVBREEsRSIsImZpbGUiOiIxMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInZpZGVvLWJ0blwiIEBjbGljaz1cIiRlbWl0KCdjbGljaycpXCI+XHJcblx0XHQ8dGV4dCBjbGFzcz1cImljb25mb250IHRleHQtd2hpdGVcIiA6c3R5bGU9XCInZm9udC1zaXplOicrc2l6ZSsncHg7J1wiPnt7aWNvbn19PC90ZXh0PlxyXG5cdDwvdmlldz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHR7XHJcblx0XHRwcm9wczp7XHJcblx0XHRcdGljb246e1xyXG5cdFx0XHRcdHR5cGU6U3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6JydcclxuXHRcdFx0fSxcclxuXHRcdFx0c2l6ZTp7XHJcblx0XHRcdFx0dHlwZTpbU3RyaW5nLE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDoyMFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XHJcblx0LnZpZGVvLWJ0biB7XHJcblx0XHR3aWR0aDogNDRweDtcclxuXHRcdGhlaWdodDogNDRweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHR9XG48L3N0eWxlPlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!**********************************************************************************************************************************************!*\
  !*** E:/study/uni-app/在线点播app/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=style&index=0&id=afaffccc&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_id_afaffccc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-icon-btn.vue?vue&type=style&index=0&id=afaffccc&scoped=true&lang=css& */ 15);
/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_id_afaffccc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_id_afaffccc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_id_afaffccc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_id_afaffccc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_icon_btn_vue_vue_type_style_index_0_id_afaffccc_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/study/uni-app/在线点播app/pages/detail-video/subNVue/components/f-icon-btn.vue?vue&type=style&index=0&id=afaffccc&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "video-btn": {
    "width": "44",
    "height": "44",
    "alignItems": "center",
    "justifyContent": "center"
  }
}

/***/ }),
/* 16 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 17 */
/*!**********************************************************************************!*\
  !*** E:/study/uni-app/在线点播app/pages/detail-video/subNVue/components/f-slide.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _f_slide_vue_vue_type_template_id_31850be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./f-slide.vue?vue&type=template&id=31850be2& */ 18);\n/* harmony import */ var _f_slide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./f-slide.vue?vue&type=script&lang=js& */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _f_slide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _f_slide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 16);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      \n}\n\n/* normalize component */\n\nvar component = Object(_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _f_slide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _f_slide_vue_vue_type_template_id_31850be2___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _f_slide_vue_vue_type_template_id_31850be2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"075ba20e\",\n  false,\n  _f_slide_vue_vue_type_template_id_31850be2___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/detail-video/subNVue/components/f-slide.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0g7QUFDcEg7QUFDMkQ7QUFDTDtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDb007QUFDcE0sZ0JBQWdCLDZNQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLGtGQUFNO0FBQ1IsRUFBRSwyRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxzRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQTtBQUNlLGdGIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9mLXNsaWRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMTg1MGJlMiZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Ytc2xpZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mLXNsaWRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIFxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIUQ6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxccnVudGltZVxcXFxjb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgXCIwNzViYTIwZVwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kZXRhaWwtdmlkZW8vc3ViTlZ1ZS9jb21wb25lbnRzL2Ytc2xpZGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!*****************************************************************************************************************!*\
  !*** E:/study/uni-app/在线点播app/pages/detail-video/subNVue/components/f-slide.vue?vue&type=template&id=31850be2& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slide_vue_vue_type_template_id_31850be2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-slide.vue?vue&type=template&id=31850be2& */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slide_vue_vue_type_template_id_31850be2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slide_vue_vue_type_template_id_31850be2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slide_vue_vue_type_template_id_31850be2___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slide_vue_vue_type_template_id_31850be2___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/study/uni-app/在线点播app/pages/detail-video/subNVue/components/f-slide.vue?vue&type=template&id=31850be2& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      staticClass: ["flex", "align-center", "position-relative"],
      staticStyle: { height: "44px" },
      on: {
        touchstart: _vm.touchstart,
        touchmove: _vm.touchmove,
        touchend: _vm.touchend,
        thouchcancel: _vm.thouchcancel
      }
    },
    [
      _c(
        "view",
        {
          staticClass: ["flex-1", "rounded"],
          staticStyle: {
            height: "3px",
            backgroundColor: "rgba(255,255,255,0.5)"
          }
        },
        [
          _c("view", {
            staticClass: ["bg-main"],
            staticStyle: { height: "3px" },
            style: _vm.activeStyle
          })
        ]
      ),
      _c("view", {
        staticClass: ["position-absolute", "rounded-circle", "bg-main-hover"],
        staticStyle: { width: "15px", height: "15px" },
        style: _vm.activeDotStyle
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!***********************************************************************************************************!*\
  !*** E:/study/uni-app/在线点播app/pages/detail-video/subNVue/components/f-slide.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./f-slide.vue?vue&type=script&lang=js& */ 21);\n/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_f_slide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWtnQixDQUFnQiwyaUJBQUcsRUFBQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hRDpcXFxcSEJ1aWxkZXJYLjIuOS44LjIwMjAxMTEwLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyXFxcXGxpYlxcXFxpbmRleC5qcz8/cmVmLS00LTAhRDpcXFxcSEJ1aWxkZXJYLjIuOS44LjIwMjAxMTEwLmZ1bGxcXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx3ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyXFxcXGluZGV4LmpzPz9yZWYtLTQtMSFEOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHZ1ZS1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mLXNsaWRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTQtMCFEOlxcXFxIQnVpbGRlclguMi45LjguMjAyMDExMTAuZnVsbFxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNC0xIUQ6XFxcXEhCdWlsZGVyWC4yLjkuOC4yMDIwMTExMC5mdWxsXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Ytc2xpZGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/study/uni-app/在线点播app/pages/detail-video/subNVue/components/f-slide.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  inject: ['v'],\n  props: {\n    currentTime: {\n      type: Number,\n      default: 0 },\n\n    duration: {\n      type: Number,\n      default: 0 } },\n\n\n  data: function data() {\n    return {\n      width: 0, //进度条宽度\n      activeWidth: 0, //当前宽度\n      moveStatus: false, //判断是否在移动状态\n      left: 0 };\n\n  },\n  created: function created() {\n    if (!this.v.fullScreenStatus) {\n      this.width = this.v.windowWidth - 44 - 44 - 80 - 15;\n      this.left = 44;\n\n    } else {\n      this.width = this.v.windowHeight - 30 - 15;\n      this.left = 15;\n    }\n    // this.height = this.v.windowHeight\n    this.active();\n  },\n  computed: {\n    activeStyle: function activeStyle() {\n      return \"width:\".concat(this.activeWidth, \"px;\");\n    },\n    activeDotStyle: function activeDotStyle() {\n      return \"left:\".concat(this.activeWidth, \"px;\");\n    },\n    current: function current() {\n      return this.width == 0 ? 0 : this.activeWidth / this.width * this.duration;\n    } },\n\n  watch: {\n    currentTime: function currentTime(newValue, oldValue) {\n      if (!this.moveStatus) {\n        this.active();\n      }\n    } },\n\n  methods: {\n    active: function active() {\n      this.activeWidth = this.duration == 0 ? 0 : this.currentTime / this.duration * this.width;\n    },\n    touchstart: function touchstart(e) {\n      if (this.duration === 0) return;\n      // e.changedTouches[0].screenX\n      this.moveStatus = true;\n      this.activeWidth = e.changedTouches[0].screenX - this.left;\n    },\n    touchmove: function touchmove(e) {\n      if (this.duration === 0) return;\n      var d = e.changedTouches[0].screenX - this.left;\n      if (d <= 0) {\n        this.activeWidth = 0;\n      } else if (d >= this.width) {\n        this.activeWidth = this.width;\n      } else {\n        this.activeWidth = d;\n      }\n      this.$emit('update', this.current);\n    },\n    touchend: function touchend(e) {\n      if (this.duration === 0) return;\n      this.moveStatus = false;\n      this.$emit('change', this.current);\n    },\n    // 被中断事件\n    thouchcancel: function thouchcancel(e) {\n      this.touchend();\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvZGV0YWlsLXZpZGVvL3N1Yk5WdWUvY29tcG9uZW50cy9mLXNsaWRlLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVdBO0FBQ0EsZUFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBREE7O0FBS0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBLEVBTEEsRUFGQTs7O0FBWUEsTUFaQSxrQkFZQTtBQUNBO0FBQ0EsY0FEQSxFQUNBO0FBQ0Esb0JBRkEsRUFFQTtBQUNBLHVCQUhBLEVBR0E7QUFDQSxhQUpBOztBQU1BLEdBbkJBO0FBb0JBLFNBcEJBLHFCQW9CQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0EvQkE7QUFnQ0E7QUFDQSxlQURBLHlCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsa0JBSkEsNEJBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxXQVBBLHFCQU9BO0FBQ0E7QUFDQSxLQVRBLEVBaENBOztBQTJDQTtBQUNBLGVBREEsdUJBQ0EsUUFEQSxFQUNBLFFBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBTEEsRUEzQ0E7O0FBa0RBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLGNBSkEsc0JBSUEsQ0FKQSxFQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVRBO0FBVUEsYUFWQSxxQkFVQSxDQVZBLEVBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FyQkE7QUFzQkEsWUF0QkEsb0JBc0JBLENBdEJBLEVBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0ExQkE7QUEyQkE7QUFDQSxnQkE1QkEsd0JBNEJBLENBNUJBLEVBNEJBO0FBQ0E7QUFDQSxLQTlCQSxFQWxEQSxFIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG5cdDx2aWV3IHN0eWxlPVwiaGVpZ2h0OiA0NHB4O1wiIGNsYXNzPVwiZmxleCBhbGlnbi1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmVcIiBAdG91Y2hzdGFydD1cInRvdWNoc3RhcnRcIiBAdG91Y2htb3ZlPVwidG91Y2htb3ZlXCJcclxuXHQgQHRvdWNoZW5kPVwidG91Y2hlbmRcIiBAdGhvdWNoY2FuY2VsPVwidGhvdWNoY2FuY2VsXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cImZsZXgtMSByb3VuZGVkXCIgc3R5bGU9XCJoZWlnaHQ6IDNweDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XCI+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiYmctbWFpblwiIHN0eWxlPVwiaGVpZ2h0OiAzcHg7XCIgOnN0eWxlPVwiYWN0aXZlU3R5bGVcIj48L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInBvc2l0aW9uLWFic29sdXRlIHJvdW5kZWQtY2lyY2xlIGJnLW1haW4taG92ZXJcIiBzdHlsZT1cIndpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7XCIgOnN0eWxlPVwiYWN0aXZlRG90U3R5bGVcIj48L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRpbmplY3Q6IFsndiddLFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0Y3VycmVudFRpbWU6IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRkdXJhdGlvbjoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAwXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHdpZHRoOiAwLCAvL+i/m+W6puadoeWuveW6plxyXG5cdFx0XHRcdGFjdGl2ZVdpZHRoOiAwLCAvL+W9k+WJjeWuveW6plxyXG5cdFx0XHRcdG1vdmVTdGF0dXM6IGZhbHNlLCAvL+WIpOaWreaYr+WQpuWcqOenu+WKqOeKtuaAgVxyXG5cdFx0XHRcdGxlZnQ6MFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0Y3JlYXRlZCgpIHtcclxuXHRcdFx0aWYgKCF0aGlzLnYuZnVsbFNjcmVlblN0YXR1cykge1xyXG5cdFx0XHRcdHRoaXMud2lkdGggPSB0aGlzLnYud2luZG93V2lkdGggLSA0NCAtIDQ0IC0gODAgLSAxNVxyXG5cdFx0XHRcdHRoaXMubGVmdCA9IDQ0XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMud2lkdGggPSB0aGlzLnYud2luZG93SGVpZ2h0IC0gMzAgLSAxNVxyXG5cdFx0XHRcdHRoaXMubGVmdCA9IDE1XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gdGhpcy5oZWlnaHQgPSB0aGlzLnYud2luZG93SGVpZ2h0XHJcblx0XHRcdHRoaXMuYWN0aXZlKClcclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRhY3RpdmVTdHlsZSgpIHtcclxuXHRcdFx0XHRyZXR1cm4gYHdpZHRoOiR7dGhpcy5hY3RpdmVXaWR0aH1weDtgXHJcblx0XHRcdH0sXHJcblx0XHRcdGFjdGl2ZURvdFN0eWxlKCkge1xyXG5cdFx0XHRcdHJldHVybiBgbGVmdDoke3RoaXMuYWN0aXZlV2lkdGh9cHg7YFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjdXJyZW50KCkge1xyXG5cdFx0XHRcdHJldHVybiB0aGlzLndpZHRoID09IDAgPyAwIDogKHRoaXMuYWN0aXZlV2lkdGggLyB0aGlzLndpZHRoKSAqIHRoaXMuZHVyYXRpb25cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdGN1cnJlbnRUaW1lKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xyXG5cdFx0XHRcdGlmICghdGhpcy5tb3ZlU3RhdHVzKSB7XHJcblx0XHRcdFx0XHR0aGlzLmFjdGl2ZSgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRhY3RpdmUoKSB7XHJcblx0XHRcdFx0dGhpcy5hY3RpdmVXaWR0aCA9IHRoaXMuZHVyYXRpb24gPT0gMCA/IDAgOiAodGhpcy5jdXJyZW50VGltZSAvIHRoaXMuZHVyYXRpb24pICogdGhpcy53aWR0aFxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3VjaHN0YXJ0KGUpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5kdXJhdGlvbiA9PT0gMCkgcmV0dXJuXHJcblx0XHRcdFx0Ly8gZS5jaGFuZ2VkVG91Y2hlc1swXS5zY3JlZW5YXHJcblx0XHRcdFx0dGhpcy5tb3ZlU3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuYWN0aXZlV2lkdGggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblggLSB0aGlzLmxlZnRcclxuXHRcdFx0fSxcclxuXHRcdFx0dG91Y2htb3ZlKGUpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5kdXJhdGlvbiA9PT0gMCkgcmV0dXJuXHJcblx0XHRcdFx0bGV0IGQgPSBlLmNoYW5nZWRUb3VjaGVzWzBdLnNjcmVlblggLSB0aGlzLmxlZnRcclxuXHRcdFx0XHRpZiAoZCA8PSAwKSB7XHJcblx0XHRcdFx0XHR0aGlzLmFjdGl2ZVdpZHRoID0gMFxyXG5cdFx0XHRcdH0gZWxzZSBpZiAoZCA+PSB0aGlzLndpZHRoKSB7XHJcblx0XHRcdFx0XHR0aGlzLmFjdGl2ZVdpZHRoID0gdGhpcy53aWR0aFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmFjdGl2ZVdpZHRoID0gZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLiRlbWl0KCd1cGRhdGUnLCB0aGlzLmN1cnJlbnQpXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNoZW5kKGUpIHtcclxuXHRcdFx0XHRpZiAodGhpcy5kdXJhdGlvbiA9PT0gMCkgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy5tb3ZlU3RhdHVzID0gZmFsc2VcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aGlzLmN1cnJlbnQpXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOiiq+S4reaWreS6i+S7tlxyXG5cdFx0XHR0aG91Y2hjYW5jZWwoZSkge1xyXG5cdFx0XHRcdHRoaXMudG91Y2hlbmQoKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!******************************************************************************************************************!*\
  !*** E:/study/uni-app/在线点播app/pages/detail-video/subNVue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./video.nvue?vue&type=style&index=0&lang=css&mpType=page */ 23);
/* harmony import */ var _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_D_HBuilderX_2_9_8_20201110_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_video_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!E:/study/uni-app/在线点播app/pages/detail-video/subNVue/video.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "video-bg-top": {
    "backgroundImage": "linear-gradient(to top , rgba(0,0,0,0) , rgba(0,0,0,0.5))"
  },
  "video-bg-bottom": {
    "backgroundImage": "linear-gradient(to bottom , rgba(0,0,0,0) , rgba(0,0,0,0.5))"
  }
}

/***/ })
/******/ ]);