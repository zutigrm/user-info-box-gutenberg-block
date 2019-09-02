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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users */ "./src/users.js");
/* harmony import */ var _user_box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-box */ "./src/user-box.js");



 // import our Users component which handles the users dropdown



var __ = wp.i18n.__; // The __() for internationalization.

var registerBlockType = wp.blocks.registerBlockType; // The registerBlockType() to register blocks.

var Fragment = wp.element.Fragment; // Wrapper we can use instead of adding markup, like div, etc

/**
 * Register: a Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType("uib/user-info-block", {
  title: __("User Info Box"),
  // Our block title
  icon: "businessman",
  category: "common",
  // pick a category from core provided ones or create a custom one
  keywords: [__("User"), __("User Info")],
  // attributes start here
  attributes: {
    id: {
      source: "attribute",
      selector: ".uib-wrapper",
      attribute: "id"
    },
    avatar: {
      source: "attribute",
      selector: "img",
      attribute: "src"
    },
    name: {
      source: "text",
      selector: ".uib-name"
    },
    desc: {
      source: "text",
      selector: ".uib-desc"
    },
    boxBg: {
      source: "attribute",
      selector: '.uib-wrapper',
      attribute: 'databg'
    }
  },
  // attributes end here

  /**
   * Edit function will render our block code
   * inside the Gutemberg editor once inserted
   */
  edit: Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__["withState"])({
    users: []
  })(function (_ref) {
    var users = _ref.users,
        setState = _ref.setState,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;

    // make sure to check if users is still empty before calling
    // fetch and updating state. If we do not include this
    // conditional our state will be updated over and over again.
    if (!users.length) {
      // users data fetched from WP Rest Api
      // resposne will be passed to a setState hook
      // which will update state of users constant
      // use apiFetch to get user data from WP Rest api
      _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_3___default()({
        path: '/wp/v2/users'
      }).then(function (response) {
        // setState is pre defined is available if we wrap
        // component with withState
        setState({
          users: response
        });
      });
    } // this is the callback function which will be
    // passed as prop to Users component
    // it will be used as callback for onChange event
    // inside the select box


    var setUserData = function setUserData(userId) {
      var user = users.find(function (u) {
        return u.id == userId;
      });

      if (userId) {
        // setAttributes is provided for us by WordPress package
        // it will update attributes property. Make sure to allways
        // use this function, do Not update attributes directly like props.attributes.x = y
        setAttributes({
          id: user.id,
          name: user.name,
          avatar: user.avatar_urls[96],
          desc: user.description
        });
      }
    };

    if (typeof attributes.id === 'string' && attributes.id.search('user-') !== -1) {
      // if we have prefixed id it means we already have saved user
      // and this is new block insert, we need to filter id
      attributes.id = attributes.id.replace('user-', '');
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_users__WEBPACK_IMPORTED_MODULE_4__["default"], {
      data: users,
      existingUser: attributes.id,
      userSelect: setUserData,
      setAttributes: setAttributes
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_user_box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: attributes
    }));
  }),

  /**
   * Save function will handle the client side rendering
   * This is the code (html markup) which will be saved into the_content
   * once post is saved
   */
  save: function save(props) {
    var attributes = props.attributes;

    if (typeof attributes.id === 'string' && attributes.id.search('user-') !== -1) {
      // if we have prefixed id it means we already have saved user
      // and this is new block insert, we need to filter id
      attributes.id = attributes.id.replace('user-', '');
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_user_box__WEBPACK_IMPORTED_MODULE_5__["default"], {
      data: attributes
    });
  }
});

/***/ }),

/***/ "./src/user-box.js":
/*!*************************!*\
  !*** ./src/user-box.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var __ = wp.i18n.__; // The __() for internationalization.

var UserBox = function UserBox(_ref) {
  var data = _ref.data;
  // extract the properties we will use from user data
  var id = data.id,
      name = data.name,
      avatar = data.avatar,
      desc = data.desc,
      boxBg = data.boxBg; // if we do not have user selected, show the message and prevent
  // code from further rendering

  if (!id) return __('No user selected');
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    dataBg: boxBg,
    style: {
      backgroundColor: boxBg
    },
    className: "uib-wrapper",
    id: 'user-' + id
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    src: avatar,
    width: 96,
    height: 96,
    alt: name + ' avatar'
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "uib-content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", {
    className: "uib-name"
  }, name), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
    className: "uib-desc"
  }, desc)));
};

/* harmony default export */ __webpack_exports__["default"] = (UserBox);

/***/ }),

/***/ "./src/users.js":
/*!**********************!*\
  !*** ./src/users.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);




 // Fragment will be used as wrapper if we do not want to include markup, like div, etc

var Fragment = wp.element.Fragment; // InspectorControls will be used to wrap Panel body component
// we need this two wrapper component if we want to display our settings
// in the right panel (where we have document and block tabs, next to the content)

var InspectorControls = wp.editor.InspectorControls;
var PanelBody = wp.components.PanelBody;

var Users = function Users(_ref) {
  var userId = _ref.userId,
      existingUser = _ref.existingUser,
      data = _ref.data,
      userSelect = _ref.userSelect,
      setState = _ref.setState,
      setAttributes = _ref.setAttributes,
      color = _ref.color;
  var __ = wp.i18n.__; // The __() for internationalization.
  // if we already have block saved, use the saved userId

  if (existingUser) userId = existingUser; // loop through users and assign label and value
  // for options. If users are not loaded yet show
  // Loading users message

  var options = data.length ? data.map(function (user) {
    return {
      label: user.name,
      value: user.id
    };
  }) : [{
    label: __('Loading users'),
    value: ''
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Fragment, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
    title: __('Settings')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: __('Select User'),
    value: userId // add first empty option and pass the options array using spread operator
    ,
    options: [{
      label: '',
      value: ''
    }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(options)),
    onChange: function onChange(userId) {
      // pass user id to parent component (edit function) 
      userSelect(userId); // set state - change the value for select box

      setState({
        userId: userId
      }); // wp-script do not include property shorthand (userId)
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, __('User Box Background Color')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ColorPicker"], {
    color: color,
    width: 100,
    onChangeComplete: function onChangeComplete(value) {
      setState({
        color: value.rgb
      }); // since we will use rgba mode, format the color
      // you can use hex if you want. Just use value.hex, no formating needed

      var rgb = value.rgb;
      var result = "rgba(".concat(rgb.r, ", ").concat(rgb.g, ", ").concat(rgb.b, ", ").concat(rgb.a, ")"); // pass selected color to the callback function

      setAttributes({
        boxBg: result
      });
    }
  }))));
}; // wrap the component with withState so we can manipulate the state
// by using nativelly supporeted WordPress functions


/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__["withState"])({
  userId: '',
  color: ''
})(Users));

/***/ }),

/***/ "@wordpress/api-fetch":
/*!*******************************************!*\
  !*** external {"this":["wp","apiFetch"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["apiFetch"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map