module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../ssr-module-cache.js'); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {},
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter,
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value,
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ {
    /***/ '../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js':
      /*!******************************************************************************************************!*\
  !*** C:/Users/Rubén/Desktop/SuperProps/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \******************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! core-js/library/fn/object/assign */ 'core-js/library/fn/object/assign'
        );

        /***/
      },

    /***/ '../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js':
      /*!****************************************************************************************************!*\
  !*** C:/Users/Rubén/Desktop/SuperProps/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \****************************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'default',
          function() {
            return _extends;
          }
        );
        /* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../core-js/object/assign */ '../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js'
        );
        /* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__
        );

        function _extends() {
          _extends =
            _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a ||
            function(target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];

                for (var key in source) {
                  if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                  }
                }
              }

              return target;
            };

          return _extends.apply(this, arguments);
        }

        /***/
      },

    /***/ '../../node_modules/@redq/reuse-modal/es/index.css':
      /*!*************************************************************************************!*\
  !*** C:/Users/Rubén/Desktop/SuperProps/node_modules/@redq/reuse-modal/es/index.css ***!
  \*************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        /***/
      },

    /***/ '../../node_modules/common/src/theme/portfolio/colors.js':
      /*!*******************************************************************************************!*\
  !*** C:/Users/Rubén/Desktop/SuperProps/node_modules/common/src/theme/portfolio/colors.js ***!
  \*******************************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        var colors = {
          transparent: 'transparent',
          // 0
          black: '#000000',
          // 1
          white: '#ffffff',
          // 2
          headingColor: '#302b4e',
          textColor: '#43414e',
          // 3
          labelColor: '#767676',
          // 4
          inactiveField: '#f2f2f2',
          // 5
          inactiveButton: '#b7dbdd',
          // 6
          inactiveIcon: '#EBEBEB',
          // 7
          primary: '#3444f1',
          // 8
          primaryHover: '#3444f1',
          // 9
          secondary: '#ff5b60',
          // 10
          secondaryHover: '#FF282F',
          // 11
          yellow: '#fdb32a',
          // 12
          yellowHover: '#F29E02',
          // 13
          borderColor: '#1b1e25',
          //14
          primaryBoxShadow: '0px 8px 20px -6px rgba(235,77,75,0.6)',
        };
        /* harmony default export */ __webpack_exports__['default'] = colors;

        /***/
      },

    /***/ '../../node_modules/common/src/theme/portfolio/index.js':
      /*!******************************************************************************************!*\
  !*** C:/Users/Rubén/Desktop/SuperProps/node_modules/common/src/theme/portfolio/index.js ***!
  \******************************************************************************************/
      /*! exports provided: portfolioTheme */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'portfolioTheme',
          function() {
            return portfolioTheme;
          }
        );
        /* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./colors */ '../../node_modules/common/src/theme/portfolio/colors.js'
        );

        var portfolioTheme = {
          breakpoints: [576, 768, 991, 1220],
          space: [
            0,
            5,
            8,
            10,
            15,
            20,
            25,
            30,
            33,
            35,
            40,
            50,
            60,
            70,
            80,
            85,
            90,
            100,
          ],
          fontSizes: [10, 12, 14, 15, 16, 18, 20, 22, 24, 36, 48, 80, 96],
          fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
          lineHeights: {
            solid: 1,
            title: 1.25,
            copy: 1.5,
          },
          letterSpacings: {
            normal: 'normal',
            tracked: '0.1em',
            tight: '-0.05em',
            mega: '0.25em',
          },
          borders: [
            0,
            '1px solid',
            '2px solid',
            '3px solid',
            '4px solid',
            '5px solid',
            '6px solid',
          ],
          radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
          widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
          heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
          maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
          colors: _colors__WEBPACK_IMPORTED_MODULE_0__['default'],
          colorStyles: {
            primary: {
              color: _colors__WEBPACK_IMPORTED_MODULE_0__['default'].primary,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].transparent,
              backgroundColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].transparent,
              '&:hover': {
                color: _colors__WEBPACK_IMPORTED_MODULE_0__['default'].primary,
                backgroundColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default'].transparent,
              },
            },
            secondary: {
              color: _colors__WEBPACK_IMPORTED_MODULE_0__['default'].secondary,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].secondary,
              '&:hover': {
                color:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default']
                    .secondaryHover,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default']
                    .secondaryHover,
              },
            },
            warning: {
              color: _colors__WEBPACK_IMPORTED_MODULE_0__['default'].yellow,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].yellow,
              '&:hover': {
                color:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default'].yellowHover,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default'].yellowHover,
              },
            },
            error: {
              color:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].secondaryHover,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].secondaryHover,
              '&:hover': {
                color:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default'].secondary,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default'].secondary,
              },
            },
            primaryWithBg: {
              color: _colors__WEBPACK_IMPORTED_MODULE_0__['default'].white,
              border: '2px solid',
              backgroundColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].primary,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].borderColor,
              borderRadius: '0',
              '&:after': {
                content: '',
                width: '100px',
                height: '100px',
                display: 'block',
                backgroundColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default'].primary,
              },
              '&:hover': {
                backgroundColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default'].primaryHover,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default'].transparent,
              },
            },
            secondaryWithBg: {
              color: _colors__WEBPACK_IMPORTED_MODULE_0__['default'].white,
              backgroundColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].secondary,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].secondary,
              '&:hover': {
                backgroundColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default']
                    .secondaryHover,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default']
                    .secondaryHover,
              },
            },
            warningWithBg: {
              color: _colors__WEBPACK_IMPORTED_MODULE_0__['default'].white,
              backgroundColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].yellow,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].yellow,
              '&:hover': {
                backgroundColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default'].yellowHover,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default'].yellowHover,
              },
            },
            errorWithBg: {
              color: _colors__WEBPACK_IMPORTED_MODULE_0__['default'].white,
              backgroundColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].secondaryHover,
              borderColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].secondaryHover,
              '&:hover': {
                backgroundColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default'].secondary,
                borderColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default'].secondary,
              },
            },
            transparentBg: {
              backgroundColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].white,
              '&:hover': {
                backgroundColor:
                  _colors__WEBPACK_IMPORTED_MODULE_0__['default'].white,
              },
            },
          },
          buttonStyles: {
            textButton: {
              border: 0,
              color: _colors__WEBPACK_IMPORTED_MODULE_0__['default'].primary,
              padding: 0,
              height: 'auto',
              backgroundColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].transparent,
            },
            outlined: {
              borderWidth: '1px',
              borderStyle: 'solid',
              backgroundColor:
                _colors__WEBPACK_IMPORTED_MODULE_0__['default'].transparent,
            },
            fab: {
              border: '0',
              width: '40px',
              height: '40px',
              padding: 0,
              borderRadius: '50%',
              justifyContent: 'center',
              'span.btn-icon': {
                paddingLeft: 0,
              },
            },
            extendedFab: {
              border: '0',
              minWidth: '50px',
              height: '40px',
              borderRadius: '50px',
              justifyContent: 'center',
            },
          }, // FlexBox: {
          //   backgroundColor: 'green'
          // }
        };

        /***/
      },

    /***/ './pages/_app.js':
      /*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! @babel/runtime-corejs2/helpers/esm/extends */ '../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ 'react'
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! @redq/reuse-modal */ '@redq/reuse-modal'
        );
        /* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _redq_reuse_modal_es_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! @redq/reuse-modal/es/index.css */ '../../node_modules/@redq/reuse-modal/es/index.css'
        );
        /* harmony import */ var _redq_reuse_modal_es_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
          _redq_reuse_modal_es_index_css__WEBPACK_IMPORTED_MODULE_3__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! styled-components */ 'styled-components'
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          styled_components__WEBPACK_IMPORTED_MODULE_4__
        );
        /* harmony import */ var common_src_theme_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! common/src/theme/portfolio */ '../../node_modules/common/src/theme/portfolio/index.js'
        );

        var _jsxFileName =
          'C:\\Users\\Rub\xE9n\\Desktop\\SuperProps\\packages\\landing\\pages\\_app.js';

        /* harmony default export */ __webpack_exports__['default'] = function(
          _ref
        ) {
          var Component = _ref.Component,
            pageProps = _ref.pageProps;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            styled_components__WEBPACK_IMPORTED_MODULE_4__['ThemeProvider'],
            {
              theme:
                common_src_theme_portfolio__WEBPACK_IMPORTED_MODULE_5__[
                  'portfolioTheme'
                ],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 9,
              },
              __self: this,
            },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react__WEBPACK_IMPORTED_MODULE_1__['Fragment'],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10,
                },
                __self: this,
              },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__['Modal'],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11,
                  },
                  __self: this,
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                Component,
                Object(
                  _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                    'default'
                  ]
                )({}, pageProps, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12,
                  },
                  __self: this,
                })
              )
            )
          );
        };

        /***/
      },

    /***/ 0:
      /*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! private-next-pages/_app.js */ './pages/_app.js'
        );

        /***/
      },

    /***/ '@redq/reuse-modal':
      /*!************************************!*\
  !*** external "@redq/reuse-modal" ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('@redq/reuse-modal');

        /***/
      },

    /***/ 'core-js/library/fn/object/assign':
      /*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('core-js/library/fn/object/assign');

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('react');

        /***/
      },

    /***/ 'styled-components':
      /*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
      /*! no static exports found */
      /***/ function(module, exports) {
        module.exports = require('styled-components');

        /***/
      },

    /******/
  }
);
//# sourceMappingURL=_app.js.map
